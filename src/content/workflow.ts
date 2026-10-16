// The restaurant operational flow used by the Home, /how-it-works and product
// pages. A stage only carries a `metric` when products.ts states the same
// figure; there are no measured customer results behind any of them.

export interface WorkflowStage {
  id: string;
  step: string;
  label: string;
  title: string;
  description: string;
  metric?: string;
  metricLabel?: string;
  detail: string;
  href: string;
}

export const WORKFLOW_STAGES: WorkflowStage[] = [
  {
    id: "order",
    step: "01",
    label: "ORDER",
    title: "Taking the order",
    description:
      "Captains punch orders table-side on Android handhelds, guests order from the table QR or a self-ordering kiosk, and takeaway and delivery customers can order on WhatsApp. Items and kitchen notes are captured once.",
    metric: "Under 15 sec",
    metricLabel: "To punch an order on a captain handheld",
    detail: "No paper slips to misplace between the table and the kitchen.",
    href: "/products/captain",
  },
  {
    id: "pos",
    step: "02",
    label: "POS",
    title: "Billing at the counter",
    description:
      "Orders route straight into the POS as a live table tab. Items can be added, split, or discounted, with GST calculated automatically as the order comes together.",
    metric: "About 3 sec",
    metricLabel: "To bill a table by short code",
    detail: "Short-code item search keeps billing moving even during rush hours.",
    href: "/products/pos",
  },
  {
    id: "kitchen",
    step: "03",
    label: "KITCHEN",
    title: "Kitchen display and KOT routing",
    description:
      "Orders split and route to their kitchen stations, such as Tandoor, Curry, Bar and Desserts, on screens or thermal printers.",
    detail: "Colour-coded timers show which tickets are approaching overdue.",
    href: "/products/kds",
  },
  {
    id: "table",
    step: "04",
    label: "TABLE",
    title: "A live floor plan",
    description:
      "Live, colour-coded status for every table: available, occupied, billing or reserved. Merge tables or transfer a running order in one tap.",
    detail: "Waitstaff always know dining duration and pending orders at a glance.",
    href: "/products/tables",
  },
  {
    id: "bill",
    step: "05",
    label: "BILL & PAY",
    title: "Split billing & multi-mode settlement",
    description:
      "Split bills by seat or item, apply discounts, and settle by cash, card, Khaata or a table-specific UPI QR, with CGST and SGST calculated automatically.",
    detail: "Receipts carry your own brand header, and each payment is reconciled as it settles.",
    href: "/products/pos",
  },
  {
    id: "insight",
    step: "06",
    label: "INSIGHT",
    title: "Owner reports on your phone",
    description:
      "Every settlement feeds live into your phone. See net sales, top sellers, category margins and raw material deductions as they happen.",
    detail: "Automated end-of-day summary, no manual tallying required.",
    href: "/products/analytics",
  },
];

/** Display name for a stage label, e.g. "BILL & PAY" → "Bill & pay", "POS" stays "POS". */
export function stageName(label: string): string {
  return label === "POS" ? label : label.charAt(0) + label.slice(1).toLowerCase();
}
