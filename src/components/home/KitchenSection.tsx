import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DeviceFrame } from "@/components/site/DeviceFrame";

const TIMER_BANDS = [
  { tone: "bg-[#2F9E5B]", label: "0 to 10 minutes", body: "Fresh. The ticket is on track." },
  { tone: "bg-[#E8892B]", label: "10 to 18 minutes", body: "Warning. Worth a look from the pass." },
  { tone: "bg-[#D23B2E]", label: "Over 18 minutes", body: "Overdue. Step in before the guest asks." },
];

export function KitchenSection() {
  return (
    <section className="section bg-brand-50 text-ink">
      <div className="shell">
        <div className="reveal grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="eyebrow">02 · In the kitchen</p>
            <h2 className="display-lg mt-4">Every ticket on the right station, the second it&apos;s punched.</h2>
          </div>
          <p className="text-[1.0625rem] leading-[1.7] text-ink-soft">
            Orders split by station, such as Tandoor, Curry and Mains, and Bar, and appear in the order they were fired,
            with the table and every note attached. No kitchen screen yet? The same tickets print at each station.
          </p>
        </div>

        <figure className="reveal mt-10">
          <DeviceFrame screen="kds" className="mx-auto max-w-5xl" />
          <figcaption className="mt-5 text-center text-[0.8125rem] text-ink-muted">
            Kitchen display at the tandoor pass, with sample tickets.
          </figcaption>
        </figure>

        <div className="mt-10 grid gap-px overflow-hidden rounded-card border border-brand-200 bg-brand-200 md:grid-cols-[1.1fr_1fr_1fr_1fr]">
          <div className="bg-surface p-6">
            <p className="text-sm font-bold uppercase tracking-[0.08em] text-brand-text">Ticket timers</p>
            <p className="mt-2 text-[0.9375rem] leading-6 text-ink-soft">Each ticket changes colour as it ages, so nobody has to watch a clock.</p>
          </div>
          {TIMER_BANDS.map((band) => (
            <div key={band.label} className="bg-surface p-6">
              <span aria-hidden="true" className={`block h-1.5 w-12 rounded-full ${band.tone}`} />
              <p className="mt-4 font-bold text-ink">{band.label}</p>
              <p className="mt-1 text-[0.9375rem] leading-6 text-ink-soft">{band.body}</p>
            </div>
          ))}
        </div>

        <Link href="/products/kds" className="link-arrow mt-10 text-[0.9375rem]">
          Explore the kitchen display <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
