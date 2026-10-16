# Jamanvar website: audit and redesign record

Date: 16 October 2026 (updated for WhatsApp Ordering and the kiosk). Snapshot of the source before this redesign: `.redesign-backup-20261016/` (recovery copy, not a route).

## Stack

Next.js 14 App Router, React 18, TypeScript, Tailwind 3, npm. Marketing front end only: no database, no form endpoint, no CRM. Contact channels are phone, WhatsApp and email. Product facts come from `src/content/` (products, productDetails, solutions, workflow) and sample data in `src/lib/data.ts`.

## What the audit found

| Area | Finding | Fix |
| --- | --- | --- |
| Typography | `layout.tsx` never loaded a font, so `var(--font-sans)` was undefined and every page rendered in the browser's default serif. | Manrope and Noto Sans Gujarati self-hosted through `next/font`. |
| Palette | Tokens named navy/saffron/cream had been remapped to cool slate and white; almost no ivory. | One Orange + Ivory token set in `tailwind.config.js` and `globals.css`. Old scale names now alias the warm palette. |
| Contrast | White text on #F47B35 (2.7:1) on primary buttons. | Primary buttons use dark ink on orange (5.7:1). Orange text uses #B44C14 (5.0:1 on ivory). Muted text adjusted to #6F645B. |
| Navigation | Two near-duplicate navbars (home and internal), hover-only dropdowns with `role="menu"` but no menu keyboard model. | One `SiteHeader` rendered once in the root layout: click/hover/keyboard dropdowns, Escape returns focus, focus-trapped mobile sheet, skip link. |
| Forms | Demo modal said "Demo Request Received!" and promised a reply "within 2 hours", but nothing was sent anywhere. Book-a-demo and contact showed "Thank you" before anything was sent. | One `DemoRequestForm`: inline validation with an error summary, then an explicit step that sends via the visitor's WhatsApp or email app. The page never claims delivery. |
| Sample receipt | Showed a KELVION TECH "branch" address, a GSTIN and an FSSAI number that are not real (the business has no GST registration). Its "Send WA e-bill" button showed "Sent" without sending. | Receipt header now reads "Your restaurant name / your address, phone and GSTIN print here". Fake send removed. Proper dialog semantics. |
| Claims | ROI calculator invented +0.45 table turns/day and 3.8% wastage savings. Workflow figures "+35% table turn velocity", "0 sec lag", "Live 24/7". Demo tab showed "+18.4% vs previous Friday" and "Average prep time 11.4 mins". | Calculator removed from the home page (file kept). Unverified figures removed; only "about 3 seconds to bill" and "under 15 seconds to punch an order" remain, because the product copy states them, labelled as design targets. |
| Visuals | Home hero used the same POS render twice; product scenes had baked-in navy backgrounds. | Screens rebuilt in code in the real app's light theme, with the English logo in each app bar, inside realistic CSS devices (titanium phone with dynamic island, rugged handheld, aluminium tablet, laptop, monitor on a stand, wall display, kiosk). Receipts, KOTs, the QR table stand and the hardware kit are coded too. Dark sections (kitchen, flow, footer, demo) were converted to the light theme. Every use is captioned as sample data. |
| Interactive demo | Several dead buttons ("Mark Ready", "Merge Table", "+ Add Purchase Entry"). | Rebuilt: short-code search, per-table bills, quantity controls, kitchen items that toggle, table selection that carries into billing, ARIA tabs with arrow keys. |
| Metadata | `/about`, `/contact`, `/support`, `/features`, `/security-gst` and the three policy pages were client components, so they had no page title, description or canonical. | All are server components with their own metadata. Organization structured data added in the layout. |
| 404 | Default Next.js page. | Branded not-found page with product links. |

## Routes (26 content routes, plus robots.txt, sitemap.xml and not-found)

`/`, `/features`, `/how-it-works`, `/about`, `/support`, `/contact`, `/book-a-demo`, `/security-gst`, `/privacy-policy`, `/terms-and-conditions`, `/refund-cancellation`, `/products/{pos, kds, captain, qr-ordering, kiosk, whatsapp-ordering, tables, inventory, analytics, hardware}`, `/solutions/{operations, guest-experience, kitchen-ops, insights, reliability}`. No existing URL changed. New: `/products/kiosk` and `/products/whatsapp-ordering`, with `/kiosk` and `/whatsapp-ordering` as permanent redirects.

## Page treatments

- **Home:** hero; "every way guests order, one kitchen" ecosystem (counter POS, captain, table QR, kiosk, WhatsApp → order desk → kitchen display and reports); counter and floor; kitchen display; three ways to order in the restaurant (kiosk, QR, captain); WhatsApp Ordering; owner reports; interactive demo; offline mode; use cases; getting started; FAQ; closing CTA.
- **WhatsApp Ordering** (`/products/whatsapp-ordering`): hero with the ordering chat, benefits, how it works for customers and for the team, takeaway vs home delivery, the Jamanvar connection, owner controls, requirements, FAQ, CTA.
- **Kiosk** (`/products/kiosk`): standard product page with a kiosk illustration.
- **Products:** stacked hero for wide screens, split hero for monitors and laptops, warm panel for handhelds and illustrations. Then capabilities, working-day detail, before/after, use cases, place in the flow, setup, connected products, FAQ, pager.
- **Solutions, company, support, forms, policies:** as before. Policy text is unchanged (verified against the backup).

## WhatsApp Ordering and kiosk: what was verified

Checked in the product code on 16 October 2026 (`D:\whatsapp ordering`, and the Jamanvar platform in `D:\jamanvar\kiosk`). Only these capabilities appear on the site.

**WhatsApp Ordering**
- Customers order in WhatsApp through buttons, lists and product cards (photo, price, Add to cart). A swipeable carousel is used once Meta approves its template.
- Quantity controls, editable cart, price and stock re-checked at checkout.
- Delivery address typed or shared as a WhatsApp location; tapping Skip places a pickup order. The address shows on the order summary.
- Online payment link in the chat. With Jamanvar connected, the order reaches the restaurant only after payment is confirmed.
- Status messages for accepted, preparing and ready; staff can take over a chat; multi-branch picker; editable automatic replies.
- Jamanvar connection: key generated in POS Admin; menu, prices and sold-out status come from Jamanvar; paid orders appear in POS Admin's order desk with a WhatsApp badge; accept manually or auto-accept; pause online orders; tickets reach the KDS once accepted.
- Requires a Meta WhatsApp Business Platform (Cloud API) number, Meta business verification and the WhatsApp Ordering plan entitlement.

**Kiosk:** language choice, dine-in or takeaway per kiosk, optional or default table, category menu with search, dish options, combo suggestions, UPI QR payment or pay at the counter, token numbers, printed, emailed or WhatsApp receipts, offline ordering with counter payment, managed in Kiosk Admin. Windows desktop app.

**Not claimed:** delivery riders or live tracking, cash on delivery in the WhatsApp flow, results figures.

**Visuals:** no real customer-facing screenshots of either product were available. Existing WhatsApp mockups in the WhatsApp repo show a real client's brand, so they were not used. The chat and the kiosk screen are drawn in code with the real message copy and flow, use a sample restaurant called "Your Restaurant", and are captioned as illustrations. The kiosk's real UI could only be captured on its activation screen without its backend.

## Product issues found during verification (for the product team)

1. **WhatsApp delivery orders reach Jamanvar as takeaway, without the address.** In connected mode, `backend/app/services/fulfillment/jamanvaar.py` in the WhatsApp repo never sets `order_type` and doesn't send `delivery_address`, so every order arrives as `PICKUP` (Jamanvar's `TAKEAWAY`). Jamanvar's channel API already accepts `DELIVERY` and `address`. The site doesn't claim delivery addresses appear in POS.
2. **No live pilot recorded yet** for the WhatsApp connector (phase 8 of its implementation plan). The integration is built and browser-tested end to end in development.
3. Staff WhatsApp notifications (when a staff number is configured) contain the reference, customer and total, but not the delivery address.

## Content deliberately removed or not added

- **Testimonials, client logos, customer counts:** none verified exist.
- **Product page "deep dive" captions:** they repeated the hero visual and the detail paragraphs, so they are not rendered. The content stays in `products.ts`.
- **Features page:** dropped "local backup snapshots" (contradicts the security page) and superlatives.

## Code quality changes

- Removed 22 unused components and three unused dependencies (`framer-motion`, `canvas-confetti`, `qrcode`). The originals are in `.redesign-backup-20261016/`.
- Eight identical product route files replaced by one statically generated `products/[slug]` route.
- Components organised by role: `site/` (shell and primitives), `sections/` (shared page sections), `home/` (homepage, with the interactive demo split into `home/demo/` panels), `whatsapp/`.
- Stricter TypeScript (`noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`); no `any`, `@ts-ignore` or lint suppressions.
- Shared primitives instead of repeated markup: `PhoneShell`, `BrandPanel`, `WhatsAppChat`, `KioskMockup`.
- Playwright test suite in `tests/` with content-integrity checks, so a typo in content can't ship as a broken link or missing image.

## Open questions for the business

1. Is "typical response under 2 hours during business hours" (Support page, kept from the original) still accurate?
2. Which WhatsApp number should forms use? Forms use +91 81402 67475; both numbers are listed as "Phone and WhatsApp".
3. Any real customer quotes or logos you have permission to publish.
4. Real screenshots of the kiosk ordering screens and a live WhatsApp order would make the two newest pages more convincing than the illustrations.
5. A form backend or CRM would let the site confirm receipt of demo requests. Until then, the WhatsApp/email hand-off is the honest option.

## Verification

Against a production build:

- `npm run typecheck`, `npm run lint` and `npm run build` pass (31 static pages).
- `npm test`: 55 Playwright tests pass. They cover content integrity, every route (status, one h1, canonical, overflow, images, page errors), unique titles, redirects, the sitemap, axe on key pages, the forms, header and mobile menus, the demo, the WhatsApp page CTAs, and 390 px layout and tap targets.
- `npm run qa:visual`: 98 checks with no failures across every route at 1440, 768 and 375 px, plus key pages at 320, 390, 430, 1024 and 1366 px. All 26 internal link targets resolve, and there are no serious or critical axe violations.
