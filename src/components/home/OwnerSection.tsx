import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DeviceFrame, ScreenCaption } from "@/components/site/DeviceFrame";

const OWNER_POINTS = [
  { title: "Live revenue", body: "Sales, orders and tables in use on your phone, updated as bills settle." },
  { title: "Reconciled by default", body: "Cash, UPI and card are matched to the bills, so closing is a check, not a count." },
  { title: "Food cost per dish", body: "Recipes link each dish to its ingredients, so margin sits beside sales." },
  { title: "Low-stock alerts", body: "Every KOT deducts its recipe from stock, and you hear about it before the chef does." },
];

export function OwnerSection() {
  return (
    <section className="section bg-ivory">
      <div className="shell grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        <figure className="reveal relative">
          <div className="pr-[16%]">
            <DeviceFrame screen="reports" />
          </div>
          <div className="absolute -bottom-6 right-0 w-[25%] min-w-[6.5rem] max-w-[13rem]">
            <DeviceFrame screen="owner" className="max-w-none" />
          </div>
          <ScreenCaption className="mt-12 max-w-[68%]">Daily reconciliation on a laptop and the owner&apos;s view on a phone. Sample data.</ScreenCaption>
        </figure>

        <div className="reveal">
          <p className="eyebrow">05 · For the owner</p>
          <h2 className="display-lg mt-4">Close the day without opening a spreadsheet.</h2>
          <p className="lead mt-5">
            Every settled bill and every stock movement feeds the same picture, so the end-of-day summary is ready when
            service ends, and reports export cleanly for your accountant and GST filing.
          </p>
          <dl className="mt-9 grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {OWNER_POINTS.map((p) => (
              <div key={p.title} className="border-t-2 border-brand pt-4">
                <dt className="font-bold text-ink">{p.title}</dt>
                <dd className="mt-1.5 text-[0.9375rem] leading-6 text-ink-muted">{p.body}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3">
            <Link href="/products/analytics" className="link-arrow text-[0.9375rem]">
              Analytics &amp; insights <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/products/inventory" className="link-arrow text-[0.9375rem]">
              Recipe inventory <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
