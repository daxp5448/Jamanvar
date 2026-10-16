import type { Metadata } from "next";
import { Check, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { DemoRequestForm } from "@/components/site/DemoRequestForm";
import { DeviceFrame } from "@/components/site/DeviceFrame";
import { CONTACT } from "@/content/navigation";
import { OG_IMAGE } from "@/content/brand";

export const metadata: Metadata = {
  title: "Book a Demo | Jamanvar Restaurant POS",
  description:
    "See Jamanvar on your own menu and floor plan. Book a one-to-one walkthrough of billing, kitchen display, captain and QR ordering, tables, inventory and reports.",
  alternates: { canonical: "/book-a-demo" },
  openGraph: {
    title: "Book a Demo | Jamanvar Restaurant POS",
    description: "Tell us about your restaurant. We'll show you how Jamanvar fits the way you serve.",
    type: "website",
    images: [OG_IMAGE],
  },
};

const EXPECT = [
  "A walkthrough around your own menu, tables and sections",
  "The modules that fit your restaurant, and the ones you can skip",
  "Answers on printers, terminals and devices you already own",
  "How setup, staff training and going live would work for you",
];

export default function BookADemoPage() {
  return (
    <section className="bg-ivory">
      <div className="shell grid gap-12 pb-20 pt-10 sm:pt-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:pb-28">
        <div>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Book a demo" }]} className="mb-8" />
          <p className="eyebrow">Book a demo</p>
          <h1 className="display-xl mt-4">See Jamanvar working with your restaurant.</h1>
          <p className="lead mt-6">
            Tell us a little about your restaurant. The Ahmedabad team will prepare a walkthrough around the way you actually
            serve. No commitment.
          </p>

          <h2 className="mt-10 text-sm font-bold uppercase tracking-[0.08em] text-ink">What the demo covers</h2>
          <ul className="mt-4 space-y-3">
            {EXPECT.map((e) => (
              <li key={e} className="flex gap-3 text-[0.98rem] leading-7 text-ink-soft">
                <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-ink-950">
                  <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                </span>
                {e}
              </li>
            ))}
          </ul>

          <div className="mt-10 hidden items-end gap-6 lg:flex">
            <DeviceFrame screen="captain" className="max-w-[9.5rem]" />
            <div className="flex-1 pb-2">
              <DeviceFrame screen="kds" />
            </div>
          </div>

          <p className="mt-10 flex items-center gap-2 text-[0.9375rem] text-ink-muted">
            <Phone className="h-4 w-4 text-brand-text" aria-hidden="true" />
            Rather talk now? Call{" "}
            <a href={`tel:${CONTACT.phones[0].tel}`} className="font-bold text-ink hover:text-brand-text">
              {CONTACT.phones[0].display}
            </a>
          </p>
        </div>

        <div className="self-start rounded-panel border border-line bg-surface p-6 shadow-lift sm:p-10 lg:sticky lg:top-28">
          <h2 className="display-md">Request a demo</h2>
          <p className="mt-3 text-[0.98rem] leading-7 text-ink-muted">Fields marked * are required. It takes about a minute.</p>
          <div className="mt-8">
            <DemoRequestForm intent="demo" />
          </div>
        </div>
      </div>
    </section>
  );
}
