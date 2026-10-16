import { useMemo } from "react";
import { Minus, Plus, Search, X } from "lucide-react";
import { MENU_ITEMS, type MenuItem, type TableInfo } from "@/lib/data";
import { cn, formatINR } from "@/lib/utils";
import { CATEGORIES, GST_RATE, PANEL, type Category } from "./demoData";
import type { BillItem } from "./ThermalBillModal";

interface BillingPanelProps {
  table: TableInfo;
  bill: BillItem[];
  query: string;
  category: Category;
  onQueryChange: (q: string) => void;
  onCategoryChange: (c: Category) => void;
  onChangeQty: (item: MenuItem, delta: number) => void;
  onRemoveLine: (id: BillItem["id"]) => void;
  onChangeTable: () => void;
  onPreviewReceipt: () => void;
}

export function billTotals(bill: BillItem[]) {
  const subtotal = bill.reduce((s, i) => s + i.total, 0);
  const gst = Math.round(subtotal * GST_RATE);
  return { subtotal, gst, total: subtotal + gst };
}

export function BillingPanel({
  table,
  bill,
  query,
  category,
  onQueryChange,
  onCategoryChange,
  onChangeQty,
  onRemoveLine,
  onChangeTable,
  onPreviewReceipt,
}: BillingPanelProps) {
  const menu = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q) return MENU_ITEMS.filter((m) => m.code.toLowerCase().startsWith(q) || m.name.toLowerCase().includes(q));
    if (category === "Popular") return MENU_ITEMS.filter((m) => m.popular);
    return MENU_ITEMS.filter((m) => m.category === category);
  }, [category, query]);
  const { subtotal, gst, total } = billTotals(bill);

  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.35fr_1fr]">
      <div className="min-w-0">
        <label htmlFor="demo-search" className="sr-only">
          Search dishes by short code or name
        </label>
        <div className="flex items-center gap-2 rounded-xl border border-line bg-white px-3.5">
          <Search className="h-4 w-4 text-ink-muted" aria-hidden="true" />
          <input
            id="demo-search"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Short code or dish, e.g. PT01"
            className="h-11 w-full bg-transparent text-sm text-ink placeholder:text-ink-muted focus:outline-none"
          />
        </div>
        <div className="no-scrollbar mt-3 flex gap-2 overflow-x-auto" aria-label="Menu categories">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={!query && category === c}
              onClick={() => onCategoryChange(c)}
              className={cn(
                "h-10 shrink-0 rounded-full px-3.5 text-[0.8125rem] font-semibold transition-colors sm:h-9",
                !query && category === c ? "bg-ink text-ivory" : "bg-white text-ink-soft ring-1 ring-line hover:bg-ivory-deep"
              )}
            >
              {c}
            </button>
          ))}
        </div>
        <ul className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
          {menu.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => onChangeQty(item, 1)}
                className={cn(PANEL, "group flex h-full w-full flex-col justify-between p-3 text-left transition-colors hover:border-brand-400/70")}
              >
                <span className="flex items-center justify-between text-[0.6875rem] font-semibold text-ink-muted">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-sm border border-[#2F7D4F] p-px" aria-hidden="true">
                      <span className="block h-full w-full rounded-full bg-[#2F7D4F]" />
                    </span>
                    {item.code}
                  </span>
                  <Plus className="h-3.5 w-3.5 text-ink-muted group-hover:text-brand-text" aria-hidden="true" />
                </span>
                <span className="mt-2 text-[0.8125rem] font-semibold leading-snug">{item.name}</span>
                <span className="mt-2 text-sm font-bold text-brand-text">₹{item.price}</span>
                <span className="sr-only">Add to {table.number}</span>
              </button>
            </li>
          ))}
          {menu.length === 0 && (
            <li className="col-span-full rounded-xl border border-dashed border-line-strong p-6 text-center text-sm text-ink-muted">
              No dish matches &ldquo;{query}&rdquo;. Try PT01, DM01 or naan.
            </li>
          )}
        </ul>
      </div>

      <div className={cn(PANEL, "flex min-w-0 flex-col p-4")}>
        <div className="flex items-start justify-between border-b border-line pb-3">
          <div>
            <p className="text-base font-bold">Table {table.number}</p>
            <p className="text-xs text-ink-muted">
              {table.section} · Dine-in{table.server ? ` · ${table.server}` : ""}
            </p>
          </div>
          <button
            type="button"
            onClick={onChangeTable}
            className="-mr-2 inline-flex min-h-10 items-center px-2 text-xs font-semibold text-brand-text hover:text-brand-text"
          >
            Change table
          </button>
        </div>
        <ul className="flex-1 divide-y divide-line" aria-live="polite">
          {bill.length === 0 && <li className="py-8 text-center text-sm text-ink-muted">No items yet. Tap a dish to add it.</li>}
          {bill.map((l) => {
            const item = MENU_ITEMS.find((m) => m.id === l.id);
            return (
              <li key={l.id} className="flex items-center gap-2 py-2.5 text-sm">
                <span className="min-w-0 flex-1">
                  <span className="block truncate font-medium">{l.name}</span>
                  <span className="text-xs text-ink-muted">₹{l.unitPrice} each</span>
                </span>
                {item && (
                  <span className="flex items-center rounded-lg bg-ivory-deep">
                    <QtyButton label={`One less ${l.name}`} onClick={() => onChangeQty(item, -1)}>
                      <Minus className="h-3.5 w-3.5" aria-hidden="true" />
                    </QtyButton>
                    <span className="w-6 text-center font-mono text-xs">{l.qty}</span>
                    <QtyButton label={`One more ${l.name}`} onClick={() => onChangeQty(item, 1)}>
                      <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                    </QtyButton>
                  </span>
                )}
                <span className="w-14 text-right font-mono text-[0.8125rem] sm:w-16">₹{l.total}</span>
                <button
                  type="button"
                  onClick={() => onRemoveLine(l.id)}
                  className="hidden h-8 w-8 items-center justify-center rounded-lg text-ink-muted hover:bg-ivory-deep hover:text-ink sm:flex"
                  aria-label={`Remove ${l.name}`}
                >
                  <X className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </li>
            );
          })}
        </ul>
        <dl className="space-y-1.5 border-t border-line pt-3 text-sm">
          <div className="flex justify-between text-ink-muted">
            <dt>Subtotal</dt>
            <dd className="font-mono">{formatINR(subtotal)}</dd>
          </div>
          <div className="flex justify-between text-ink-muted">
            <dt>CGST 2.5% + SGST 2.5%</dt>
            <dd className="font-mono">{formatINR(gst)}</dd>
          </div>
          <div className="flex justify-between pt-2 text-lg font-bold">
            <dt>Total</dt>
            <dd className="font-mono text-brand-text">{formatINR(total)}</dd>
          </div>
        </dl>
        <button
          type="button"
          disabled={bill.length === 0}
          onClick={onPreviewReceipt}
          className="mt-4 h-11 rounded-xl bg-brand text-sm font-bold text-ink-950 transition-colors hover:bg-brand-400 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Preview GST receipt
        </button>
      </div>
    </div>
  );
}

function QtyButton({ label, onClick, children }: { label: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-ivory-deep sm:h-8 sm:w-8"
    >
      {children}
    </button>
  );
}
