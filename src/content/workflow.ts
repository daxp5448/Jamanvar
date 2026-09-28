// The restaurant operational flow, as already established by the
// Home page's RestaurantFlow section. Written independently for the
// dedicated /how-it-works page, same facts and figures.

export interface WorkflowStage {
  id: string;
  step: string;
  label: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  detail: string;
  href: string;
}

export const WORKFLOW_STAGES: WorkflowStage[] = [
  {
    id: "order",
    step: "01",
    label: "ORDER",
    title: "Captain & QR table ordering",
    description:
      "Captains punch orders table-side on Android handhelds, or guests scan the table QR code to order directly. Items, seat numbers and kitchen notes are captured instantly.",
    metric: "< 15 sec",
    metricLabel: "Order punching time",
    detail: "Zero misplaced paper slips or communication lag with the kitchen.",
    href: "/products/captain",
  },
  {
    id: "pos",
    step: "02",
    label: "POS",
    title: "3-second billing",
    description:
      "Orders route straight into the POS as a live table tab. Items can be added, split, or discounted, with GST calculated automatically as the order comes together.",
    metric: "3 sec",
    metricLabel: "Average billing time",
    detail: "Short-code item search keeps billing moving even during rush hours.",
    href: "/products/pos",
  },
  {
    id: "kitchen",
    step: "03",
    label: "KITCHEN",
    title: "Real-time KDS & KOT routing",
    description:
      "Orders instantly split and route to specific kitchen stations — Tandoor, Curry, Bar, Desserts — on screens or thermal printers.",
    metric: "0 sec",
    metricLabel: "Transmission lag",
    detail: "Color-coded prep timers alert chefs before orders exceed target times.",
    href: "/products/kds",
  },
  {
    id: "table",
    step: "04",
    label: "TABLE",
    title: "Visual table floor orchestration",
    description:
      "Live, color-coded status across every table — available, occupied, running KOT, billed. Merge tables or manage reservations with one tap.",
    metric: "+35%",
    metricLabel: "Table turn velocity",
    detail: "Waitstaff always know dining duration and pending orders at a glance.",
    href: "/products/tables",
  },
  {
    id: "bill",
    step: "05",
    label: "BILL & PAY",
    title: "Split billing & multi-mode settlement",
    description:
      "Generate split bills by seat or item, apply discounts, and settle via cash, card or dynamic table-specific UPI QR — with CGST/SGST auto-calculated.",
    metric: "Instant",
    metricLabel: "UPI verification",
    detail: "E-invoicing with customized brand receipt headers, reconciled in real time.",
    href: "/products/pos",
  },
  {
    id: "insight",
    step: "06",
    label: "INSIGHT",
    title: "Owner mobile app & daily P&L",
    description:
      "Every settlement feeds live into your phone. See net sales, top sellers, category margins and raw material deductions as they happen.",
    metric: "Live 24/7",
    metricLabel: "Owner sync",
    detail: "Automated end-of-day summary, no manual tallying required.",
    href: "/products/analytics",
  },
];
