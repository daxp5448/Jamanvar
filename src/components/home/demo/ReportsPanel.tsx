import { cn } from "@/lib/utils";
import { PANEL } from "./demoData";

// Figures match the sample reports screen shown elsewhere on the site.
const SUMMARY = [
  ["Net sales", "₹48,250"],
  ["Orders settled", "127"],
  ["Top seller", "Paneer Butter Masala"],
] as const;

const SETTLEMENT = [
  ["Cash", "₹9,800"],
  ["UPI", "₹31,450"],
  ["Card", "₹7,000"],
] as const;

const HOURLY = [22, 34, 48, 30, 18, 14, 26, 44, 70, 100, 86, 40];
const PEAK_INDEX = HOURLY.indexOf(Math.max(...HOURLY));

export function ReportsPanel() {
  return (
    <div>
      <p className="text-base font-bold">End of day · sample service</p>
      <dl className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {SUMMARY.map(([label, value]) => (
          <div key={label} className={cn(PANEL, "p-4")}>
            <dt className="text-xs font-bold uppercase tracking-[0.06em] text-ink-muted">{label}</dt>
            <dd className="mt-2 text-xl font-bold">{value}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_1.3fr]">
        <div className={cn(PANEL, "p-4")}>
          <p className="text-xs font-bold uppercase tracking-[0.06em] text-ink-muted">Settlement · matched to bills</p>
          <ul className="mt-3 divide-y divide-line text-sm">
            {SETTLEMENT.map(([mode, amount]) => (
              <li key={mode} className="flex items-center justify-between py-2.5">
                <span>{mode}</span>
                <span className="font-mono">{amount}</span>
                <span className="text-xs font-bold text-[#256B41]">Matched</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={cn(PANEL, "p-4")}>
          <p className="text-xs font-bold uppercase tracking-[0.06em] text-ink-muted">Hourly sales · peak at 8 PM</p>
          <div className="mt-4 flex h-36 items-end gap-1.5" role="img" aria-label="Sample hourly sales chart, rising to a peak at 8 PM">
            {HOURLY.map((h, i) => (
              <span key={i} className={cn("flex-1 rounded-t", i === PEAK_INDEX ? "bg-brand" : "bg-[#E6DCD2]")} style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="mt-2 flex justify-between font-mono text-[0.6875rem] text-ink-muted">
            <span>12 PM</span>
            <span>6 PM</span>
            <span>11 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
}
