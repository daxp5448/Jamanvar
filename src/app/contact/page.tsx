import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { DemoRequestForm } from "@/components/site/DemoRequestForm";
import { CONTACT } from "@/content/navigation";

export const metadata: Metadata = {
  title: "Contact Jamanvar | Talk to the Team in Ahmedabad",
  description:
    "Ask about a demo, onboarding, staff training or hardware compatibility. Reach the Jamanvar team by phone, WhatsApp or email.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Contact"
        title="Talk directly with the team that sets it up."
        description="Ask about a demo, onboarding, staff training or whether your printer will work. Call, message on WhatsApp, or send your question below."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="section bg-surface">
        <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="space-y-6">
            <div className="rounded-card border border-brand-200 bg-brand-50 p-7 text-ink sm:p-8">
              <h2 className="text-xl font-bold">Reach us directly</h2>
              <ul className="mt-6 space-y-5 text-[0.9375rem]">
                <li className="flex gap-3">
                  <Phone className="mt-1 h-4 w-4 shrink-0 text-brand-deep" aria-hidden="true" />
                  <div>
                    <p className="text-sm text-ink-muted">Phone and WhatsApp</p>
                    {CONTACT.phones.map((p) => (
                      <a key={p.tel} href={`tel:${p.tel}`} className="block font-bold hover:text-brand-text">
                        {p.display}
                      </a>
                    ))}
                  </div>
                </li>
                <li className="flex gap-3">
                  <MessageCircle className="mt-1 h-4 w-4 shrink-0 text-brand-deep" aria-hidden="true" />
                  <div>
                    <p className="text-sm text-ink-muted">WhatsApp chat</p>
                    <a
                      href={`https://wa.me/${CONTACT.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold hover:text-brand-text"
                    >
                      Open WhatsApp<span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-1 h-4 w-4 shrink-0 text-brand-deep" aria-hidden="true" />
                  <div>
                    <p className="text-sm text-ink-muted">Email</p>
                    <a href={`mailto:${CONTACT.email}`} className="break-all font-bold hover:text-brand-text">
                      {CONTACT.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-1 h-4 w-4 shrink-0 text-brand-deep" aria-hidden="true" />
                  <div>
                    <p className="text-sm text-ink-muted">Business hours</p>
                    <p className="font-bold">{CONTACT.hours}</p>
                    <p className="mt-1 text-sm text-ink-muted">Sunday: emergency restaurant support on call</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-1 h-4 w-4 shrink-0 text-brand-deep" aria-hidden="true" />
                  <div>
                    <p className="text-sm text-ink-muted">Location</p>
                    <p className="font-bold">{CONTACT.location}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-card border border-line bg-ivory p-7 sm:p-8">
              <h2 className="text-xs font-bold uppercase tracking-[0.08em] text-brand-text">Business information</h2>
              <p className="mt-3 text-[0.9375rem] leading-6 text-ink-soft">
                Jamanvar is a restaurant technology product developed and operated by{" "}
                <strong className="text-ink">{CONTACT.company}</strong>.
              </p>
              <dl className="mt-5 divide-y divide-line border-y border-line text-[0.9375rem]">
                {[
                  ["Proprietor", "Mihir Manishbhai Darji"],
                  ["Enterprise type", "Proprietorship"],
                  ["Registered location", CONTACT.location],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 py-3">
                    <dt className="text-ink-muted">{k}</dt>
                    <dd className="text-right font-semibold text-ink">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="rounded-panel border border-line bg-ivory p-6 shadow-card sm:p-10">
            <h2 className="display-md">Send a question</h2>
            <p className="mt-3 text-[0.98rem] leading-7 text-ink-muted">
              Fill in a few details and send them by WhatsApp or email. Want to see the product?{" "}
              <Link href="/book-a-demo" className="font-bold text-ink underline decoration-brand decoration-2 underline-offset-4">
                Book a demo
              </Link>{" "}
              instead.
            </p>
            <div className="mt-8">
              <DemoRequestForm intent="inquiry" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
