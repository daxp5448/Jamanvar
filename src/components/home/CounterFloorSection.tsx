import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { DeviceFrame, ScreenCaption } from "@/components/site/DeviceFrame";

const POS_POINTS = [
  "Short codes and one-tap categories, so the cashier never scrolls for “butter naan”.",
  "Every table carries a running tab from its first order, whoever punched it.",
  "The floor plan shows each table as seated, free, billing or reserved, with seated time and its captain.",
  "Merge tables for a big party or move a running order without re-punching a thing.",
  "Split by item, seat or equally, and settle in cash, UPI QR, card or Khaata, with CGST and SGST worked out.",
];

export function CounterFloorSection() {
  return (
    <section className="section bg-ivory">
      <div className="shell grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
        <div className="reveal">
          <p className="eyebrow">01 · Counter and floor</p>
          <h2 className="display-lg mt-4">Every table&apos;s bill is ready before they ask for it.</h2>
          <p className="lead mt-5">
            Every restaurant has a Saturday around nine when the counter becomes the bottleneck. With Jamanvar a table bills
            in around three seconds, and the host can see the whole floor without walking it.
          </p>
          <ul className="mt-8 space-y-4">
            {POS_POINTS.map((point) => (
              <li key={point} className="flex gap-3 text-[0.98rem] leading-7 text-ink-soft">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-ink-950">
                  <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                </span>
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3">
            <Link href="/products/pos" className="link-arrow text-[0.9375rem]">
              Jamanvar POS <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/products/tables" className="link-arrow text-[0.9375rem]">
              Table &amp; floor management <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
        <figure className="reveal relative">
          <div className="pb-[13%] pr-[15%]">
            <DeviceFrame screen="tables" />
          </div>
          <div className="absolute bottom-0 right-0 w-[25%] min-w-[6.5rem]">
            <DeviceFrame screen="table-detail" className="max-w-none" />
          </div>
          <ScreenCaption className="mt-6 max-w-[70%]">The live floor plan, and table T-08 opened on a phone. Sample data.</ScreenCaption>
        </figure>
      </div>
    </section>
  );
}
