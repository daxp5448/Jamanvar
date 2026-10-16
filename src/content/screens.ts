// Jamanvar product screens shown on the site.
//
// Each screen is drawn in code (src/components/screens) in the real app's
// light theme, with the Jamanvar logo in its app bar, and shown inside a
// realistic device (src/components/devices). Names, tables and amounts are the
// sample restaurant used across the site (T-07, ₹1,302 and so on).

import type { MockupVariant } from "./products";

export type DeviceKind = "monitor" | "wall" | "tablet" | "laptop" | "phone" | "handheld";

export interface ProductScreenInfo {
  device: DeviceKind;
  /** Screen width / height. */
  aspect: number;
  label: string;
  alt: string;
}

const PHONE = 9 / 19.5;
const HANDHELD = 0.53;
const DESKTOP = 1.6;
const WIDE = 1.74;

export const SCREENS = {
  pos: {
    device: "monitor",
    aspect: DESKTOP,
    label: "POS · settlement",
    alt: "Jamanvar POS settlement screen for Table 07: four items, subtotal ₹1,240, CGST and SGST ₹62, total ₹1,302, with UPI QR, card, cash and Khaata payment options",
  },
  "pos-menu": {
    device: "monitor",
    aspect: DESKTOP,
    label: "POS · billing",
    alt: "Jamanvar POS billing screen with a short-code search, category tabs, a grid of dishes with codes and prices, and Table 07's running bill",
  },
  offline: {
    device: "monitor",
    aspect: DESKTOP,
    label: "POS · offline mode",
    alt: "Jamanvar POS in offline mode with the banner 'No internet, billing continues locally' and 14 orders and bills waiting to sync",
  },
  kds: {
    device: "wall",
    aspect: WIDE,
    label: "Kitchen display · tandoor pass",
    alt: "Jamanvar kitchen display with three tickets: KOT-142 for T-07 at 6 minutes in green, KOT-141 for T-03 at 12 minutes in amber and KOT-140 for T-01 at 22 minutes in red, each item marked cooking or done",
  },
  tables: {
    device: "tablet",
    aspect: WIDE,
    label: "Floor plan · 12 tables",
    alt: "Jamanvar floor plan with Main Dining, Terrace, Family Hall and Bar Area, each table tile labelled seated, free, billing or reserved with its seat count",
  },
  inventory: {
    device: "tablet",
    aspect: WIDE,
    label: "Recipe inventory",
    alt: "Jamanvar recipe inventory listing paneer, butter, red chilli, mint and coriander, saffron and cream with stock levels marked optimal, low or critical",
  },
  reports: {
    device: "laptop",
    aspect: DESKTOP,
    label: "Reports · daily reconciliation",
    alt: "Jamanvar reports showing cash, UPI and card settlements each marked matched, a ₹48,250 total, best sellers and a GST report export",
  },
  "purchase-order": {
    device: "laptop",
    aspect: DESKTOP,
    label: "Purchase order",
    alt: "Jamanvar purchase order PO-0231 listing butter, paneer, mint and cream with a received tick beside each delivered item",
  },
  dashboard: {
    device: "laptop",
    aspect: DESKTOP,
    label: "Live analytics",
    alt: "Jamanvar live analytics with today's revenue, orders settled split into dine-in and takeaway, the peak dining hour and an hourly sales chart",
  },
  qr: {
    device: "phone",
    aspect: PHONE,
    label: "QR ordering · Table 07",
    alt: "Jamanvar guest menu on a phone for Table 07 with Starters, Mains and Breads tabs, dish prices and a View order button showing 2 items for ₹600",
  },
  "table-detail": {
    device: "phone",
    aspect: PHONE,
    label: "Table detail · T-08",
    alt: "Jamanvar table detail for T-08 in Family Hall: seated 1h 25m, bill ₹5,890, 12 active orders, with merge tables, transfer order and generate bill actions",
  },
  owner: {
    device: "phone",
    aspect: PHONE,
    label: "Owner view · today",
    alt: "Jamanvar owner view on a phone with today's revenue, orders, tables in use and an hourly sales chart",
  },
  captain: {
    device: "handheld",
    aspect: HANDHELD,
    label: "Captain handheld · Table T-07",
    alt: "Jamanvar captain handheld showing table tabs, a short-code search, Table T-07's order lines with a running total of ₹1,320 and a Fire KOT button",
  },
  "captain-notes": {
    device: "handheld",
    aspect: HANDHELD,
    label: "Captain handheld · kitchen notes",
    alt: "Jamanvar captain handheld adding kitchen notes to Paneer Tikka Angara: spicy, extra mint dip, less oil, no onion or garlic (Jain), extra crispy",
  },
} satisfies Record<string, ProductScreenInfo>;

export type ScreenId = keyof typeof SCREENS;

// Which screen best represents each content mockup. Kiosk and WhatsApp have
// their own illustrations (KioskMockup, WhatsAppChat); `customers` has none.
export const SCREEN_FOR_MOCKUP: Record<MockupVariant, ScreenId | null> = {
  ordering: "qr",
  captainOrdering: "captain",
  qrOrdering: "qr",
  pos: "pos",
  payment: "pos",
  kds: "kds",
  kdsQueue: "kds",
  tables: "tables",
  tableSections: "tables",
  inventory: "inventory",
  customers: null,
  analytics: "reports",
  owner: "owner",
  hardware: "offline",
  kiosk: null,
  whatsapp: null,
};

// Hero screen for each product page.
export const PRODUCT_SCREEN: Record<string, ScreenId> = {
  pos: "pos",
  kds: "kds",
  tables: "tables",
  inventory: "inventory",
  analytics: "reports",
  hardware: "offline",
  captain: "captain",
  "qr-ordering": "qr",
};
