import { INVENTORY_ITEMS, type InventoryItem } from "@/lib/data";
import { cn } from "@/lib/utils";

const TONE: Record<InventoryItem["status"], { bar: string; text: string }> = {
  optimal: { bar: "bg-[#2F9E5B]", text: "text-[#256B41]" },
  low: { bar: "bg-[#E8892B]", text: "text-[#8A5200]" },
  critical: { bar: "bg-[#D23B2E]", text: "text-[#A3271C]" },
};

export function StockPanel() {
  return (
    <div>
      <p className="text-base font-bold">Recipe inventory · deducted on every KOT</p>
      <div className="mt-4 overflow-x-auto rounded-xl border border-line bg-white">
        <table className="w-full min-w-[34rem] text-left text-sm">
          <thead className="bg-ivory-deep text-xs uppercase tracking-[0.06em] text-ink-muted">
            <tr>
              <th scope="col" className="px-4 py-3 font-bold">Ingredient</th>
              <th scope="col" className="px-4 py-3 font-bold">On hand</th>
              <th scope="col" className="px-4 py-3 font-bold">Reorder at</th>
              <th scope="col" className="px-4 py-3 font-bold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {INVENTORY_ITEMS.map((i) => {
              const fill = Math.min(100, Math.round((i.currentStock / (i.threshold * 2)) * 100));
              return (
                <tr key={i.id}>
                  <td className="px-4 py-3">
                    <span className="font-medium">{i.name}</span>
                    <span className="block text-xs text-ink-muted">{i.category}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="font-mono">
                      {i.currentStock} {i.unit}
                    </span>
                    <span className="mt-1.5 block h-1.5 w-24 rounded-full bg-[#F1EAE2]" aria-hidden="true">
                      <span className={cn("block h-full rounded-full", TONE[i.status].bar)} style={{ width: `${fill}%` }} />
                    </span>
                  </td>
                  <td className="px-4 py-3 font-mono text-ink-muted">
                    {i.threshold} {i.unit}
                  </td>
                  <td className={cn("px-4 py-3 text-xs font-bold uppercase", TONE[i.status].text)}>{i.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
