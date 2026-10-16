import type { KitchenTicket } from "@/lib/data";
import { cn } from "@/lib/utils";
import { PANEL, timerTone } from "./demoData";

interface KitchenPanelProps {
  tickets: KitchenTicket[];
  onToggleItem: (ticketId: string, index: number) => void;
}

export function KitchenPanel({ tickets, onToggleItem }: KitchenPanelProps) {
  return (
    <div>
      <p className="text-base font-bold">Tandoor pass · tap an item to mark it done</p>
      <ul className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        {tickets.map((t) => {
          const tone = timerTone(t.elapsedMinutes);
          const cooking = t.items.filter((i) => i.status !== "done").length;
          return (
            <li key={t.id} className={cn(PANEL, "overflow-hidden")}>
              <div className={cn("flex items-center justify-between px-4 py-2.5 font-mono text-sm font-bold text-white", tone.bar)}>
                <span>{t.orderNumber}</span>
                <span>{t.tableNumber}</span>
                <span>{t.elapsedMinutes} min</span>
              </div>
              <p className="px-4 pt-2 text-xs text-ink-muted">
                {tone.label} · {t.server}
              </p>
              <ul className="space-y-2 p-4 pt-3">
                {t.items.map((it, idx) => {
                  const done = it.status === "done";
                  return (
                    <li key={it.name}>
                      <button
                        type="button"
                        aria-pressed={done}
                        onClick={() => onToggleItem(t.id, idx)}
                        className="flex w-full items-start justify-between gap-3 rounded-lg p-1.5 text-left hover:bg-ivory"
                      >
                        <span>
                          <span className={cn("block text-sm font-medium", done && "text-ink-muted line-through")}>
                            {it.qty}× {it.name}
                          </span>
                          {it.notes && <span className="block text-xs text-brand-text">{it.notes}</span>}
                        </span>
                        <span
                          className={cn(
                            "shrink-0 rounded border px-1.5 py-0.5 font-mono text-[0.625rem] font-bold uppercase",
                            done ? "border-[#BFDDC8] bg-[#E7F3EA] text-[#256B41]" : "border-[#F2D3A4] bg-[#FFF1DC] text-[#8A5200]"
                          )}
                        >
                          {done ? "Done" : "Cooking"}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
              <p className={cn("border-t border-line px-4 py-2.5 text-xs font-bold", cooking === 0 ? "text-[#256B41]" : "text-ink-muted")}>
                {cooking === 0 ? "Ready to dispatch" : `${cooking} item(s) still cooking`}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
