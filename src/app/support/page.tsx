import type { Metadata } from "next";
import { BookOpen, Clock, Headphones, LifeBuoy, Mail, MessageCircle, Phone, Wrench } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { PageCTA } from "@/components/sections/PageCTA";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { FaqList } from "@/components/sections/FaqList";
import { CONTACT } from "@/content/navigation";

export const metadata: Metadata = {
  title: "Support and Training | Jamanvar",
  description:
    "Menu setup, hardware pairing, staff training and support during service, from the Jamanvar team in Ahmedabad. Reach us by phone, WhatsApp or email.",
  alternates: { canonical: "/support" },
};

const PILLARS = [
  {
    icon: BookOpen,
    title: "Menu digitisation and setup",
    body: "Send us your PDF, photo or paper menu. We set up your dishes, categories, spice levels, Jain options and prices so you can start billing straight away.",
  },
  {
    icon: Wrench,
    title: "Hardware pairing and testing",
    body: "We help configure ESC/POS thermal printers, USB and LAN connections, cash drawers and kitchen display tablets, and test them together.",
  },
  {
    icon: Headphones,
    title: "Staff and cashier training",
    body: "We train your captains, kitchen staff and cashiers through video sessions or on-site guidance until the team is confident.",
  },
  {
    icon: LifeBuoy,
    title: "Help during service",
    body: "A printer jam or network hiccup on a Saturday night? Call the support line and we'll help you triage it.",
  },
];

const FAQS = [
  {
    question: "How fast can my restaurant go live with Jamanvar?",
    answer:
      "Most restaurants are live within 24 to 48 hours. Once you share your menu and table count, we configure the system, train your team and run a test billing cycle before you open to guests.",
  },
  {
    question: "What if our Wi-Fi router goes down during service?",
    answer:
      "Jamanvar is offline-first. Even if your broadband or Wi-Fi is interrupted, you can keep taking orders, printing receipts and sending KOTs on local devices.",
  },
  {
    question: "How do I update prices or add seasonal specials?",
    answer:
      "From the Manager menu in POS, in a couple of clicks. Prices and out-of-stock status update straight away across every waiter and cashier screen.",
  },
  {
    question: "Can several cashiers bill at the same time on busy weekends?",
    answer: "Yes. Jamanvar supports multi-terminal billing with separate cash drawer tallies and cashier logins, so everyone is accountable for their own till.",
  },
];

export default function SupportPage() {
  return (
    <>
      <PageHero
        badge="Support and training"
        title="Help from setup through Saturday-night service."
        description="The Ahmedabad team sets up your menu and hardware, trains your staff, and is a phone call away once you're live."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Support" }]}
      >
        <a href={`tel:${CONTACT.phones[0].tel}`} className="btn btn-primary">
          <Phone className="h-4 w-4" aria-hidden="true" /> Call {CONTACT.phones[0].display}
        </a>
        <a href={`mailto:${CONTACT.email}`} className="btn btn-secondary">
          <Mail className="h-4 w-4" aria-hidden="true" /> Email support
        </a>
      </PageHero>

      <section className="section-tight bg-ivory-deep text-ink">
        <div className="shell">
        <div className="grid gap-px overflow-hidden rounded-card border border-line bg-line md:grid-cols-3">
          <div className="bg-surface p-7">
            <Clock className="h-5 w-5 text-brand-deep" aria-hidden="true" />
            <h2 className="mt-4 font-bold">Support hours</h2>
            <p className="mt-2 text-[0.9375rem] leading-6 text-ink-soft">{CONTACT.hours}</p>
            <p className="mt-1 text-sm text-ink-muted">Sunday: emergency restaurant support on call</p>
          </div>
          <div className="bg-surface p-7">
            <Phone className="h-5 w-5 text-brand-deep" aria-hidden="true" />
            <h2 className="mt-4 font-bold">Phone and WhatsApp</h2>
            {CONTACT.phones.map((p) => (
              <a key={p.tel} href={`tel:${p.tel}`} className="mt-2 block text-[0.9375rem] font-semibold hover:text-brand-text">
                {p.display}
              </a>
            ))}
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm text-ink-soft hover:text-brand-text"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" /> Message on WhatsApp<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
          <div className="bg-surface p-7">
            <Mail className="h-5 w-5 text-brand-deep" aria-hidden="true" />
            <h2 className="mt-4 font-bold">Email</h2>
            <a href={`mailto:${CONTACT.email}`} className="mt-2 block break-all text-[0.9375rem] font-semibold hover:text-brand-text">
              {CONTACT.email}
            </a>
            <p className="mt-1 text-sm text-ink-muted">Typical response time: under 2 hours during business hours.</p>
          </div>
        </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="shell">
          <SectionHeading eyebrow="How we help" title="Onboarding and care, from the people who build it." />
          <ol className="mt-12 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2">
            {PILLARS.map(({ icon: Icon, title, body }) => (
              <li key={title} className="reveal bg-surface p-7 sm:p-9">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand-text ring-1 ring-brand-200">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">{title}</h3>
                <p className="mt-2 text-[0.98rem] leading-7 text-ink-muted">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section border-t border-line bg-ivory">
        <div className="shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <SectionHeading eyebrow="Common questions" title="Support answers" />
          <FaqList items={FAQS} />
        </div>
      </section>

      <PageCTA
        title="Setting up a new outlet or switching systems?"
        description="Tell us about your menu, tables and hardware, and we'll walk you through what setup looks like."
      />
    </>
  );
}
