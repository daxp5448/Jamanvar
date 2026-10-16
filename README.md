# Jamanvar 

Marketing site for **Jamanvar** — a modern restaurant management & billing platform crafted for Indian hospitality, by [Kelviontech](https://kelviontech.in). Built with Next.js, TypeScript, and Tailwind CSS.

> Run your restaurant without the chaos. Jamanvar brings billing, orders, tables, kitchen operations, inventory, and insights together in one simple, premium system.

## Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router) + React 18 + TypeScript
- **Styling:** Tailwind CSS with the Jamanvar Orange + Ivory design system (tokens in `tailwind.config.js` and `src/app/globals.css`)
- **Motion:** CSS transitions and a small scroll-reveal observer (respects reduced motion)
- **Tests:** Playwright end-to-end and content-integrity suites, with axe accessibility checks
- **Fonts:** Manrope and Noto Sans Gujarati, self-hosted via `next/font`
- **Other:** `canvas-confetti`, `qrcode`, `sharp`, `lucide-react`

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the local development server   |
| `npm run build` | Build the production bundle          |
| `npm run start` | Serve the production build           |
| `npm run lint`  | Run Next.js/ESLint checks            |

## Project Structure

```
src/
  app/                # App Router entry (layout, global styles, page, robots, sitemap)
  components/         # Page sections & UI components
  lib/                 # Shared data and utilities
public/
  images/jamanvar/     # Brand imagery, logos, product shots
  videos/              # Brand animation assets
scripts/
  brand_assets.mjs    # Brand asset generation/processing script
  healthcheck.sh      # Post-deploy verification (make check)
nginx/                # Production vhost configs for jamanvar.kelviontech.in
Dockerfile            # Production image (Next.js standalone)
docker-compose.yml    # Single-container production stack
Makefile              # Deployment & operations tasks
```

## Deployment

Production runs at
[jamanvar.kelviontech.in](https://jamanvar.kelviontech.in), as one Docker
container behind the shared KelvionTech nginx. Full runbook:
[`DEPLOY_JAMANVAR.md`](DEPLOY_JAMANVAR.md).

```bash
make deploy   # pull, rebuild, restart, verify
make check    # health, routing, assets, TLS
make logs     # tail container logs
```

### Site structure

```
src/
  app/                    Routes. products/[slug] renders every standard product page;
                          products/whatsapp-ordering has its own layout.
  content/                All copy and data: products, productDetails, solutions, workflow,
                          navigation, onboarding, screens, whatsappOrdering.
  components/
    site/                 Shell and primitives: SiteHeader, Footer, DeviceFrame, PhoneShell,
                          WhatsAppChat, KioskMockup, BrandPanel, DemoRequestForm, LegalShell.
    sections/             Page sections shared across routes (heroes, FAQ, CTA, product body).
    home/                 Homepage sections; home/demo/ is the interactive product demo.
    whatsapp/             WhatsApp Ordering page sections.
  lib/                    Sample restaurant data and small utilities.
tests/                    Playwright: content integrity + end-to-end (desktop and mobile).
```

- Copy only describes capabilities the product has; see the header comment in each content file.
- Product screens are drawn in code (`src/components/screens/`) in the real app's light theme, with the English logo in every app bar and sample data. They sit inside CSS devices (`src/components/devices/Devices.tsx`: phone, handheld, tablet, laptop, monitor, wall display, kiosk) and scale with container-query units, so they stay sharp at any size. `DESIGN_WIDTH` in `screens/ui.tsx` sets how dense each family is. The kiosk and WhatsApp chat follow the real flows.
- The whole site uses the light Orange + Ivory theme; there are no dark sections.
- Forms validate in the browser and hand the request to WhatsApp or email; the site has no form backend.
- `/whatsapp-ordering` and `/kiosk` redirect to their product pages.
- The logo is the English wordmark (`public/english-logo.png`). `node scripts/prepare-logo.mjs` turns it into the transparent header/footer logo, the social share image and the favicon (`src/app/icon.png`); paths live in `src/content/brand.ts` and every placement uses `components/site/Logo.tsx`.

### Checks

```bash
npm run typecheck      # strict TypeScript, no unused code
npm run lint
npm run build
npm test               # Playwright; starts `next start` on :3040 if nothing is running
npm run qa:visual      # full-page screenshots of every route at 7 widths, axe, links
```

`npm run check` runs typecheck, lint, build and tests in order. Set `PLAYWRIGHT_CHROMIUM_PATH` to use an installed Chromium.

## License

Private & proprietary — © Kelviontech.
# Jamanvar
