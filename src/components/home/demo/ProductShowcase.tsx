"use client";

import { useRef, useState } from "react";
import { KITCHEN_TICKETS, RESTAURANT_TABLES, type MenuItem } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/site/Logo";
import { BillingPanel, billTotals } from "./BillingPanel";
import { FloorPanel } from "./FloorPanel";
import { KitchenPanel } from "./KitchenPanel";
import { ReportsPanel } from "./ReportsPanel";
import { StockPanel } from "./StockPanel";
import { INITIAL_BILLS, TABS, billLine, type Category, type TabKey } from "./demoData";
import { ThermalBillModal, type BillData, type BillItem } from "./ThermalBillModal";

// A hands-on sample of five Jamanvar screens, styled like the product UI.
// Everything runs in the visitor's browser on sample data; nothing is saved.

export function ProductShowcase() {
  const [tab, setTab] = useState<TabKey>("pos");
  const [tableId, setTableId] = useState("t7");
  const [bills, setBills] = useState<Record<string, BillItem[]>>(INITIAL_BILLS);
  const [category, setCategory] = useState<Category>("Popular");
  const [query, setQuery] = useState("");
  const [tickets, setTickets] = useState(KITCHEN_TICKETS);
  const [receipt, setReceipt] = useState<BillData | null>(null);
  const tabRefs = useRef<Partial<Record<TabKey, HTMLButtonElement | null>>>({});

  const table = RESTAURANT_TABLES.find((t) => t.id === tableId) ?? RESTAURANT_TABLES[0];
  const bill = bills[table.id] ?? [];

  const changeQty = (item: MenuItem, delta: number) =>
    setBills((prev) => {
      const current = prev[table.id] ?? [];
      const existing = current.find((l) => l.id === item.id);
      const qty = (existing?.qty ?? 0) + delta;
      const next =
        qty <= 0
          ? current.filter((l) => l.id !== item.id)
          : existing
            ? current.map((l) => (l.id === item.id ? billLine(item, qty) : l))
            : [...current, billLine(item, qty)];
      return { ...prev, [table.id]: next };
    });

  const removeLine = (id: BillItem["id"]) =>
    setBills((prev) => ({ ...prev, [table.id]: (prev[table.id] ?? []).filter((l) => l.id !== id) }));

  const toggleKitchenItem = (ticketId: string, index: number) =>
    setTickets((prev) =>
      prev.map((t) =>
        t.id !== ticketId
          ? t
          : { ...t, items: t.items.map((it, i) => (i === index ? { ...it, status: it.status === "done" ? "cooking" : "done" } : it)) }
      )
    );

  const openReceipt = () => {
    const { subtotal, gst, total } = billTotals(bill);
    setReceipt({
      billNo: `SAMPLE-${table.number.replace("T-", "")}01`,
      tableNumber: table.number,
      tableSection: table.section,
      captain: table.server ?? "Amit P.",
      cashier: "Counter 1",
      items: bill,
      subtotal,
      gst,
      total,
      paymentMode: "UPI QR",
    });
  };

  // WAI-ARIA tabs: arrow keys, Home and End move between tabs.
  const onTabKey = (e: React.KeyboardEvent, index: number) => {
    const moves: Record<string, number> = {
      ArrowRight: (index + 1) % TABS.length,
      ArrowLeft: (index - 1 + TABS.length) % TABS.length,
      Home: 0,
      End: TABS.length - 1,
    };
    const next = moves[e.key];
    if (next === undefined) return;
    e.preventDefault();
    setTab(TABS[next].key);
    tabRefs.current[TABS[next].key]?.focus();
  };

  return (
    <section id="try-it" className="section border-y border-line bg-surface">
      <div className="shell">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="eyebrow">Try it</p>
            <h2 className="display-lg mt-4">Punch an order. Watch it move.</h2>
          </div>
          <p className="text-[1.0625rem] leading-[1.7] text-ink-muted">
            Search by short code, add dishes to a table, mark kitchen items done, and preview the GST receipt. It runs on a
            sample restaurant, right here in your browser.
          </p>
        </div>

        <div className="mt-10 rounded-[1.9rem] bg-[linear-gradient(145deg,#C9C5C0,#8E8984_45%,#C9C5C0)] p-[3px] shadow-device">
          <div className="rounded-[1.8rem] bg-[#0B0B0C] p-2 sm:p-3">
          <div className="overflow-hidden rounded-[1.1rem] bg-[#F7F3EE] text-ink">
            <div className="flex flex-col gap-3 border-b border-line bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5">
              <div className="flex items-center gap-2.5 text-sm font-bold tracking-wide">
                <Logo className="h-9 w-auto" />
                <span className="font-semibold text-ink-muted">· Sample restaurant</span>
              </div>
              <div role="tablist" aria-label="Jamanvar screens" className="no-scrollbar -mx-1 flex gap-1 overflow-x-auto px-1">
                {TABS.map(({ key, label, icon: Icon }, i) => (
                  <button
                    key={key}
                    ref={(el) => {
                      tabRefs.current[key] = el;
                    }}
                    id={`demo-tab-${key}`}
                    role="tab"
                    type="button"
                    aria-selected={tab === key}
                    aria-controls={`demo-panel-${key}`}
                    tabIndex={tab === key ? 0 : -1}
                    onClick={() => setTab(key)}
                    onKeyDown={(e) => onTabKey(e, i)}
                    className={cn(
                      "flex h-10 shrink-0 items-center gap-2 rounded-lg px-3.5 text-sm font-semibold transition-colors",
                      tab === key ? "bg-brand text-ink-950" : "text-ink-soft hover:bg-ivory-deep hover:text-ink"
                    )}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div id={`demo-panel-${tab}`} role="tabpanel" aria-labelledby={`demo-tab-${tab}`} className="min-h-[34rem] min-w-0 p-4 sm:p-6">
              {tab === "pos" && (
                <BillingPanel
                  table={table}
                  bill={bill}
                  query={query}
                  category={category}
                  onQueryChange={setQuery}
                  onCategoryChange={(c) => {
                    setCategory(c);
                    setQuery("");
                  }}
                  onChangeQty={changeQty}
                  onRemoveLine={removeLine}
                  onChangeTable={() => setTab("floor")}
                  onPreviewReceipt={openReceipt}
                />
              )}
              {tab === "floor" && <FloorPanel table={table} onSelectTable={setTableId} onOpenBill={() => setTab("pos")} />}
              {tab === "kitchen" && <KitchenPanel tickets={tickets} onToggleItem={toggleKitchenItem} />}
              {tab === "stock" && <StockPanel />}
              {tab === "reports" && <ReportsPanel />}
            </div>
          </div>
          </div>
        </div>
        <p className="mt-4 text-center text-[0.8125rem] text-ink-muted">
          Sample restaurant data. Changes stay in your browser and reset when you leave the page.
        </p>
      </div>

      <ThermalBillModal isOpen={receipt !== null} onClose={() => setReceipt(null)} billData={receipt} />
    </section>
  );
}
