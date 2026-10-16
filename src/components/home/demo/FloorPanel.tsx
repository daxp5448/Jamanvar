import { RESTAURANT_TABLES, type TableInfo } from "@/lib/data";
import { cn } from "@/lib/utils";
import { PANEL, STATUS_LABEL, STATUS_STYLE, STATUS_TEXT } from "./demoData";

const SECTIONS: TableInfo["section"][] = ["Main Dining", "Terrace", "Family Hall", "Bar Area"];

interface FloorPanelProps {
  table: TableInfo;
  onSelectTable: (id: string) => void;
  onOpenBill: () => void;
}

function tableSummary(t: TableInfo): string {
  if (t.status === "reserved") return `Held for ${t.timeOccupied}`;
  if (t.timeOccupied) return `Seated ${t.timeOccupied} · ${t.activeOrderCount} orders · ${t.server}`;
  return "Ready for the next party";
}

export function FloorPanel({ table, onSelectTable, onOpenBill }: FloorPanelProps) {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-base font-bold">Floor plan · pick a table</p>
        <ul className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink-soft" aria-label="Legend">
          {Object.entries(STATUS_LABEL).map(([status, label]) => (
            <li key={status} className="flex items-center gap-1.5">
              <span className={cn("h-2.5 w-2.5 rounded-sm border", STATUS_STYLE[status as TableInfo["status"]])} aria-hidden="true" /> {label}
            </li>
          ))}
        </ul>
      </div>
      {SECTIONS.map((section) => (
        <div key={section} className="mt-5">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-ink-muted">{section}</p>
          <ul className="mt-2 grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-6">
            {RESTAURANT_TABLES.filter((t) => t.section === section).map((t) => (
              <li key={t.id}>
                <button
                  type="button"
                  aria-pressed={table.id === t.id}
                  onClick={() => onSelectTable(t.id)}
                  className={cn("flex w-full flex-col rounded-xl border p-3 text-left", STATUS_STYLE[t.status], table.id === t.id && "ring-2 ring-ink")}
                >
                  <span className="text-base font-bold">{t.number}</span>
                  <span className="text-xs text-ink-muted">{t.capacity} seats</span>
                  <span className={cn("mt-1 text-[0.6875rem] font-bold uppercase", STATUS_TEXT[t.status])}>{STATUS_LABEL[t.status]}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className={cn(PANEL, "mt-6 flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between")} aria-live="polite">
        <div className="text-sm">
          <p className="font-bold">
            {table.number} · {table.section} · {STATUS_LABEL[table.status]}
          </p>
          <p className="mt-0.5 text-ink-muted">{tableSummary(table)}</p>
        </div>
        <button type="button" onClick={onOpenBill} className="h-10 shrink-0 rounded-lg bg-brand px-4 text-sm font-bold text-ink-950 hover:bg-brand-400">
          Open bill in POS
        </button>
      </div>
    </div>
  );
}
