# syntax=docker/dockerfile:1
# ------------------------------------------------------------------------------
# Jamanvar marketing site — multi-stage production image (Next.js 14 standalone)
# Final image runs `node server.js` as a non-root user on port 3000 (container).
# ------------------------------------------------------------------------------

FROM node:20-alpine AS base
RUN apk add --no-cache libc6-compat
ENV NEXT_TELEMETRY_DISABLED=1

# --- Stage 1: install dependencies (cached unless lockfile changes) -----------
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# --- Stage 2: build the standalone bundle -------------------------------------
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Baked into the static HTML/metadata at build time.
ARG NEXT_PUBLIC_SITE_URL=https://jamanvar.kelviontech.in
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
ENV NODE_ENV=production
RUN npm run build

# --- Stage 3: runtime ----------------------------------------------------------
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production \
    PORT=3000 \
    HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs \
 && adduser  --system --uid 1001 nextjs

# public/ is not traced into standalone — copy it explicitly.
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD wget --spider -q http://127.0.0.1:3000/ || exit 1

CMD ["node", "server.js"]
