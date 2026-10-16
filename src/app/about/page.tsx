import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { PageCTA } from "@/components/sections/PageCTA";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { CONTACT } from "@/content/navigation";
import { Logo } from "@/components/site/Logo";

export const metadata: Metadata = {
  title: "About Jamanvar | Restaurant Software Built in Ahmedabad",
  description:
    "Jamanvar is restaurant software built in Ahmedabad by KELVION TECH (Kelviontech) for the people who run busy dining rooms, kitchens and counters.",
  alternates: { canonical: "/about" },
};

const PRINCIPLES = [
  {
    title: "Built for the rush",
    body: "When the dining hall is full on a Saturday evening, settling a bill can't take ten clicks. Short codes, one-tap categories and running table tabs keep the counter moving.",
  },
  {
    title: "Offline-first by design",
    body: "Connections drop. Billing, KOT printing and kitchen routing keep working on local devices, and everything syncs once the internet is back.",
  },
  {
    title: "No cut of your revenue",
    body: "Jamanvar doesn't take a percentage of your cash, UPI or card sales. What you earn at the counter is yours, and we're upfront about everything else.",
  },
  {
    title: "People you can reach",
    body: "Onboarding, training and support come from the same Ahmedabad team that builds the product, so you talk to people who know how it works.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About Jamanvar"
        title="Restaurant software should support hospitality, not get in its way."
        description="Jamanvar was created in Ahmedabad for the people coordinating a busy dining room, kitchen and counter. The goal is simple: fewer gaps between them, and a calmer service."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section className="section bg-surface">
        <div className="shell grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div>
            <p className="eyebrow">The name</p>
            <h2 className="display-lg mt-4">
              <span lang="gu" className="font-gujarati">
                જમણવાર
              </span>{" "}
              means a feast.
            </h2>
            <div className="mt-6 space-y-4 text-[1.0625rem] leading-[1.8] text-ink-soft">
              <p>
                In Gujarati, a <em>jamanvar</em> is a grand celebratory meal, where guests are welcomed with warmth, care and
                plenty on the plate.
              </p>
              <p>
                Behind every memorable meal is a lot of coordination: captains taking orders, the tandoor and curry stations
                cooking, a cashier settling bills and a manager keeping an eye on the pantry. When any link breaks, the guest
                feels it.
              </p>
              <p>
                Jamanvar connects those links. Billing, kitchen tickets, the floor plan, stock and the owner&apos;s reports all
                work from the same order, so the team spends less time passing information around and more time looking after
                guests.
              </p>
            </div>
          </div>
          <div className="rounded-panel border border-line bg-ivory p-8 sm:p-12">
            <Logo size="large" className="h-auto w-full" />
            <p lang="gu" className="mt-8 border-t border-line pt-6 text-center font-gujarati text-lg text-ink-soft">
              સુવિધા સાથે, સ્વાદિષ્ટ વ્યવસાય.
            </p>
          </div>
        </div>
      </section>

      <section className="section border-t border-line bg-ivory">
        <div className="shell">
          <SectionHeading eyebrow="What we care about" title="The principles behind the product." />
          <ol className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2">
            {PRINCIPLES.map((p, i) => (
              <li key={p.title} className="reveal grid grid-cols-[3rem_1fr] gap-4">
                <span className="text-3xl font-extrabold leading-none text-brand-deep">0{i + 1}</span>
                <div>
                  <h3 className="text-xl font-bold text-ink">{p.title}</h3>
                  <p className="mt-2 text-[0.98rem] leading-7 text-ink-muted">{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-tight bg-ivory">
        <div className="shell">
          <div className="grid gap-10 rounded-panel border border-line bg-surface p-7 text-ink sm:p-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <p className="eyebrow">Business information</p>
              <h2 className="display-md mt-4">{CONTACT.company}</h2>
              <p className="mt-4 leading-7 text-ink-soft">
                Jamanvar is an independent software product developed, owned and distributed by {CONTACT.company}, a
                proprietorship technology business based in Ahmedabad, Gujarat, India.
              </p>
              <Link href="/contact" className="link-arrow mt-8 text-[0.9375rem]">
                Contact the team <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <dl className="divide-y divide-line border-y border-line text-[0.9375rem]">
              {[
                ["Proprietor", "Mihir Manishbhai Darji"],
                ["Location", CONTACT.location],
                ["Email", CONTACT.email],
              ].map(([k, v]) => (
                <div key={k} className="flex flex-wrap justify-between gap-2 py-4">
                  <dt className="text-ink-muted">{k}</dt>
                  <dd className="font-semibold">{k === "Email" ? <a href={`mailto:${v}`} className="hover:text-brand-text">{v}</a> : v}</dd>
                </div>
              ))}
              <div className="flex flex-wrap justify-between gap-2 py-4">
                <dt className="text-ink-muted">Studio</dt>
                <dd className="font-semibold">
                  <a href={CONTACT.studio} target="_blank" rel="noopener noreferrer" className="hover:text-brand-text">
                    kelviontech.in<span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <PageCTA
        title="See how Jamanvar fits your restaurant."
        description="Book a walkthrough with the Ahmedabad team, built around your menu, tables and hardware."
        secondaryLabel="Explore the platform"
        secondaryHref="/features"
      />
    </>
  );
}
