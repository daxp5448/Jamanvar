import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { PageCTA } from "@/components/sections/PageCTA";
import { DeviceFrame, ScreenCaption } from "@/components/site/DeviceFrame";
import type { ScreenId } from "@/content/screens";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Features | Jamanvar Restaurant POS, KDS & Ordering",
  description:
    "Every Jamanvar capability in one place: billing and GST invoices, captain, QR, kiosk and WhatsApp ordering, kitchen display, floor plan, recipe inventory, owner reports and offline mode.",
  alternates: { canonical: "/features" },
};

interface Module {
  id: string;
  label: string;
  title: string;
  description: string;
  highlights: string[];
  screens: ScreenId[];
  links: { href: string; name: string }[];
}

const MODULES: Module[] = [
  {
    id: "pos",
    label: "Billing and payments",
    title: "Touch POS and fast billing",
    description:
      "Built for the rush. Numeric short codes, one-touch categories, running table tabs and thermal printing keep the counter moving.",
    highlights: [
      "Short-code item search, for example PT01 for Paneer Tikka, plus one-tap category filters",
      "Split billing by item, by seat or into equal amounts",
      "Cash, UPI QR, card and customer credit (Khaata)",
      "58mm and 80mm ESC/POS thermal printers over USB, LAN and Bluetooth",
      "GST invoices with CGST and SGST calculated automatically",
      "Separate cashier logins and cash drawer tallies at shift close",
    ],
    screens: ["pos"],
    links: [{ href: "/products/pos", name: "Jamanvar POS" }],
  },
  {
    id: "ordering",
    label: "Guest and staff ordering",
    title: "Every way to take an order",
    description:
      "Captains punch orders on Android handhelds, guests order from a table QR or a self-ordering kiosk, and takeaway and delivery customers can order on WhatsApp. Every order reaches the same kitchen.",
    highlights: [
      "Full order punched table-side, with seat numbers and kitchen notes",
      "One tap fires the KOT to the right station",
      "Switch between tables without losing a half-entered order",
      "A QR code for every table, so guest orders land on the right tab",
      "Captain and guest orders at the same table share one bill",
      "Self-ordering kiosk: dine-in or takeaway, options and combos, UPI QR or pay at the counter, and a token number",
      "WhatsApp ordering for takeaway and home delivery, paid with a link in the chat",
    ],
    screens: ["qr", "captain"],
    links: [
      { href: "/products/captain", name: "Captain Ordering" },
      { href: "/products/qr-ordering", name: "QR Ordering" },
      { href: "/products/kiosk", name: "Self-Ordering Kiosk" },
      { href: "/products/whatsapp-ordering", name: "WhatsApp Ordering" },
    ],
  },
  {
    id: "kitchen",
    label: "Kitchen display",
    title: "Kitchen display and KOT routing",
    description:
      "Orders route from tables to the stations that make them. Colour-coded timers flag a slow ticket before the guest notices.",
    highlights: [
      "KOTs routed to kitchen screens or station printers",
      "Colour-coded timers: 0 to 10 minutes, 10 to 18 minutes, overdue after 18",
      "Item status per dish: cooking, done, dispatched",
      "Kitchen notes such as “No onion or garlic (Jain)”, “Extra spicy”, “Less oil”",
      "Station filtering, for example Tandoor, Chinese and mains, Bar",
      "Bump-bar and touchscreen support for busy kitchen hands",
    ],
    screens: ["kds"],
    links: [{ href: "/products/kds", name: "Jamanvar KDS" }],
  },
  {
    id: "tables",
    label: "Floor management",
    title: "Table and floor plan",
    description:
      "Every dining area on one screen, from the main hall to the terrace, with each table's status, running bill and captain.",
    highlights: [
      "Colour-coded status: available, occupied, billing and reserved",
      "Multiple sections with custom table capacities",
      "One-tap table merging for large parties",
      "Transfer a running order to another table without re-punching",
      "Live seated time for every table",
      "Captain assignment shown on every table",
    ],
    screens: ["tables"],
    links: [{ href: "/products/tables", name: "Table & Floor Management" }],
  },
  {
    id: "inventory",
    label: "Stock and recipes",
    title: "Recipe-level inventory",
    description:
      "Link each dish to its ingredients. When a Paneer Tikka is sold, the paneer, butter and spices it uses come out of your digital pantry.",
    highlights: [
      "Recipe (bill of materials) mapping for menu dishes",
      "Automatic stock deduction on every KOT, down to the gram",
      "Low-stock alerts before an ingredient runs out mid-service",
      "Daily wastage logging for spoilage, sampling and returns",
      "Vendor purchase orders and goods received entries",
      "Food cost and margin percentage per dish",
    ],
    screens: ["inventory"],
    links: [{ href: "/products/inventory", name: "Recipe-Level Inventory" }],
  },
  {
    id: "analytics",
    label: "Owner reports",
    title: "Reports and live insights",
    description:
      "No waiting for a manual day-end tally. Net sales, hourly sales, best sellers and settlement are on your phone as service happens.",
    highlights: [
      "Revenue dashboard on mobile, tablet or desktop browser",
      "Peak-hour sales to plan kitchen prep and staff shifts",
      "Item profitability: which best sellers actually earn their place",
      "End-of-day cash, UPI and card reconciliation",
      "Exportable reports for your accountant and GST filing",
      "Month-over-month comparison and average bill value",
    ],
    screens: ["reports", "owner"],
    links: [{ href: "/products/analytics", name: "Analytics & Insights" }],
  },
  {
    id: "hardware",
    label: "Offline and hardware",
    title: "Offline mode and hardware",
    description:
      "Internet in Indian restaurants is unpredictable. Jamanvar handles orders and bills on local devices so service keeps going.",
    highlights: [
      "Offline billing, order punching and KDS routing without active internet",
      "Automatic two-way cloud sync once connectivity returns",
      "Standard ESC/POS printers over USB, Ethernet/LAN and Bluetooth",
      "Windows PCs, Android terminals and tablets, and iPad",
      "Reuse the equipment you already have, or start with a tested kit",
    ],
    screens: ["offline"],
    links: [{ href: "/products/hardware", name: "Offline & Hardware" }],
  },
];

function ModuleVisual({ screens }: { screens: ScreenId[] }) {
  if (screens.length === 2 && (screens[0] === "qr" || screens[1] === "captain")) {
    return (
      <div className="grid grid-cols-2 items-end gap-5 sm:gap-8">
        <DeviceFrame screen={screens[0]} />
        <DeviceFrame screen={screens[1]} className="mb-8" />
      </div>
    );
  }
  if (screens.length === 2) {
    return (
      <div className="relative pb-[6%] pr-[18%]">
        <DeviceFrame screen={screens[0]} />
        <div className="absolute bottom-0 right-0 w-[24%] min-w-[5.5rem]">
          <DeviceFrame screen={screens[1]} className="max-w-none" />
        </div>
      </div>
    );
  }
  return <DeviceFrame screen={screens[0]} />;
}

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        badge="All capabilities"
        title="Every part of restaurant service, connected."
        description="From billing and table-side ordering to the kitchen pass, the pantry and the owner's phone. Here is everything Jamanvar does, module by module."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "All capabilities" }]}
      >
        <nav aria-label="Jump to a module" className="flex flex-wrap gap-2">
          {MODULES.map((m) => (
            <a
              key={m.id}
              href={`#${m.id}`}
              className="rounded-full border border-line-strong bg-surface px-3.5 py-2 text-sm font-semibold text-ink-soft transition-colors hover:border-brand hover:text-ink"
            >
              {m.label}
            </a>
          ))}
        </nav>
      </PageHero>

      {MODULES.map((m, i) => (
        <section key={m.id} id={m.id} className={cn("section", i % 2 === 0 ? "bg-surface" : "bg-ivory", i > 0 && "border-t border-line")}>
          <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-12">
            <div className={cn("reveal", i % 2 === 1 && "lg:order-2")}>
              <p className="eyebrow">
                0{i + 1} · {m.label}
              </p>
              <h2 className="display-lg mt-4">{m.title}</h2>
              <p className="mt-5 text-[1.0625rem] leading-[1.7] text-ink-muted">{m.description}</p>
              <ul className="mt-7 space-y-3">
                {m.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-[0.98rem] leading-7 text-ink-soft">
                    <Check className="mt-1.5 h-4 w-4 shrink-0 text-brand-text" strokeWidth={3} aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                {m.links.map((l) => (
                  <Link key={l.href} href={l.href} className="link-arrow text-[0.9375rem]">
                    {l.name} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
            <figure className={cn("reveal", i % 2 === 1 && "lg:order-1")}>
              <ModuleVisual screens={m.screens} />
            </figure>
          </div>
        </section>
      ))}

      <div className="shell">
        <ScreenCaption className="border-t border-line py-6">All product screens on this page use sample restaurant data.</ScreenCaption>
      </div>

      <PageCTA
        title="See the whole service flow on your own menu."
        description="We'll put together a walkthrough around your tables, your dishes and your printer setup."
        secondaryLabel="See how it works"
        secondaryHref="/how-it-works"
      />
    </>
  );
}
