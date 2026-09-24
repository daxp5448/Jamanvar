# Jamanvar 

Marketing site for **Jamanvar** — a modern restaurant management & billing platform crafted for Indian hospitality, by [Kelviontech](https://kelviontech.in). Built with Next.js, TypeScript, and Tailwind CSS.

> Run your restaurant without the chaos. Jamanvar brings billing, orders, tables, kitchen operations, inventory, and insights together in one simple, premium system.

## Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router) + React 18 + TypeScript
- **Styling:** Tailwind CSS with a custom Jamanvar design system (cream/navy/saffron palette, Gujarati typography)
- **Animation:** Framer Motion
- **Fonts:** Plus Jakarta Sans, Cormorant Garamond, Noto Sans Gujarati (via `next/font`)
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

### Page Sections

The landing page (`src/app/page.tsx`) is composed of the following sections, in order:

1. **Site Intro Video** — cinematic intro animation
2. **Hero** — parallax POS mockup with demo CTA
3. **Restaurant Flow** — Order → Kitchen → Table → Bill → Payment → Insight
4. **Cursor Image Trail** — signature interactive visual
5. **Features** — asymmetric product feature grid
6. **Product Showcase** — POS, Tables, Kitchen, Inventory, Analytics
7. **Owner Section** — restaurant owner editorial & philosophy
8. **ROI Calculator** — interactive table-turn savings simulator
9. **Analytics Section** — data intelligence highlight
10. **Hardware Section** — hardware ecosystem & offline resilience
11. **Restaurateur Stories** — testimonials & case studies
12. **Final CTA** — closing call-to-action
13. **Footer**

Plus a `ThermalBillModal` and `DemoModal` available globally for interactive demos.

## License

Private & proprietary — © Kelviontech.
