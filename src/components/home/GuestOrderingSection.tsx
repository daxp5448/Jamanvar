import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DeviceFrame, ScreenCaption } from "@/components/site/DeviceFrame";
import { KioskMockup } from "@/components/site/KioskMockup";

const CHANNELS = [
  {
    key: "kiosk",
    who: "Guest · at the entrance",
    title: "Self-ordering kiosk",
    body: "Dine-in or takeaway, options and combo deals, then UPI or pay at the counter. The guest collects with a token.",
    href: "/products/kiosk",
  },
  {
    key: "qr",
    who: "Guest · at the table",
    title: "QR ordering",
    body: "Each table has its own code. The order lands on that table's tab and in the kitchen queue.",
    href: "/products/qr-ordering",
  },
  {
    key: "captain",
    who: "Staff · on the floor",
    title: "Captain handheld",
    body: "Items, seat numbers and notes like “no onion or garlic (Jain)”, fired to the right station in one tap.",
    href: "/products/captain",
  },
] as const;

export function GuestOrderingSection() {
  return (
    <section className="section bg-ivory-deep">
      <div className="shell">
        <div className="reveal grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-end lg:gap-16">
          <div>
            <p className="eyebrow">03 · In the restaurant</p>
            <h2 className="display-lg mt-4">Three ways to order. One kitchen queue.</h2>
          </div>
          <p className="text-[1.0625rem] leading-[1.7] text-ink-soft">
            Guests who know what they want can order at a kiosk or from their own phone. Captains take everyone else&apos;s order at
            the table. Every order reaches the same kitchen, with its notes attached.
          </p>
        </div>

        <ul className="mt-10 grid items-end gap-12 md:grid-cols-3 md:gap-8">
          {CHANNELS.map((c) => (
            <li key={c.key} className="reveal flex h-full flex-col">
              <div className="flex flex-1 items-end justify-center">
                {c.key === "kiosk" ? (
                  <KioskMockup className="max-w-[15rem]" />
                ) : (
                  <DeviceFrame screen={c.key} className="max-w-[14rem]" />
                )}
              </div>
              <div className="mt-8 border-t-2 border-ink pt-5">
                <p className="text-xs font-bold uppercase tracking-[0.08em] text-brand-text">{c.who}</p>
                <h3 className="mt-2 text-xl font-bold text-ink">{c.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-6 text-ink-muted">{c.body}</p>
                <Link href={c.href} className="link-arrow mt-4 text-[0.9375rem]">
                  {c.title} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </li>
          ))}
        </ul>
        <ScreenCaption className="mt-8">QR and captain screens with sample data; the kiosk is an illustration of its menu screen.</ScreenCaption>
      </div>
    </section>
  );
}
