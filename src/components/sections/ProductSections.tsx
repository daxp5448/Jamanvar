import { Check, Minus } from "lucide-react";
import type { BeforeAfterRow, UseCase } from "@/content/productDetails";
import { SETUP_STEPS, GO_LIVE_NOTE } from "@/content/onboarding";
import { SectionHeading } from "./SectionHeading";

export function BeforeAfter({ productName, rows }: { productName: string; rows: BeforeAfterRow[] }) {
  return (
    <section className="section bg-ivory">
      <div className="shell">
        <SectionHeading eyebrow="Before and after" title={`What changes when ${productName} is on the job`} />
        <div className="reveal mt-12 overflow-hidden rounded-card border border-line bg-surface">
          <div className="hidden grid-cols-[12rem_1fr_1fr] border-b border-line bg-ivory-deep text-xs font-bold uppercase tracking-[0.08em] md:grid">
            <span className="px-6 py-4 text-ink-muted">Moment</span>
            <span className="px-6 py-4 text-ink-muted">Without it</span>
            <span className="px-6 py-4 text-brand-text">With Jamanvar</span>
          </div>
          <dl className="divide-y divide-line">
            {rows.map((row) => (
              <div key={row.topic} className="grid gap-3 p-6 md:grid-cols-[12rem_1fr_1fr] md:gap-0 md:p-0">
                <dt className="font-bold text-ink md:px-6 md:py-5">{row.topic}</dt>
                <dd className="flex gap-3 text-[0.9375rem] leading-6 text-ink-muted md:px-6 md:py-5">
                  <Minus className="mt-1 h-4 w-4 shrink-0 text-ink-faint" aria-hidden="true" />
                  <span>
                    <span className="sr-only">Without Jamanvar: </span>
                    {row.without}
                  </span>
                </dd>
                <dd className="flex gap-3 text-[0.9375rem] font-medium leading-6 text-ink md:border-l md:border-line md:bg-brand-50/60 md:px-6 md:py-5">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-success" aria-hidden="true" />
                  <span>
                    <span className="sr-only">With Jamanvar: </span>
                    {row.with}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export function UseCases({ items }: { items: UseCase[] }) {
  return (
    <section className="section bg-ivory-deep">
      <div className="shell">
        <SectionHeading eyebrow="Where it fits" title="Restaurants that get the most out of it" />
        <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {items.map((item, i) => (
            <li key={item.title} className="reveal border-t-2 border-ink pt-6">
              <span className="text-sm font-bold text-brand-text">0{i + 1}</span>
              <h3 className="mt-3 text-xl font-bold leading-snug text-ink">{item.title}</h3>
              <p className="mt-3 text-[0.98rem] leading-7 text-ink-muted">{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function GettingStarted({ setupNote }: { setupNote: string }) {
  return (
    <section className="section bg-ivory">
      <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
        <div>
          <SectionHeading eyebrow="Getting started" title="Set up with you, not handed over." description={setupNote} />
          <p className="mt-5 text-[0.98rem] font-semibold leading-7 text-ink">{GO_LIVE_NOTE}</p>
        </div>
        <ol className="divide-y divide-line border-y border-line">
          {SETUP_STEPS.map((step, i) => (
            <li key={step.title} className="reveal grid gap-2 py-6 sm:grid-cols-[3.5rem_12rem_1fr] sm:items-baseline sm:gap-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-text ring-1 ring-brand/30">{i + 1}</span>
              <h3 className="font-bold text-ink">{step.title}</h3>
              <p className="text-[0.9375rem] leading-6 text-ink-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
