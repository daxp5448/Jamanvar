import type { Metadata } from "next";
import { CheckCircle2, KeyRound, Lock, Receipt, Server, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { PageCTA } from "@/components/sections/PageCTA";
import { SectionHeading } from "@/components/sections/SectionHeading";

export const metadata: Metadata = {
  title: "Security and GST Billing | Jamanvar",
  description:
    "How Jamanvar approaches staff access, audit trails, offline continuity and GST invoicing for Indian restaurants, including CGST, SGST and IGST handling.",
  alternates: { canonical: "/security-gst" },
};

const securityFeatures = [
  {
    title: "Encrypted website & data in transit",
    description:
      "Our website and hosted services are served over HTTPS with SSL/TLS encryption. As device-to-cloud sync features roll out, they will use the same industry-standard encryption in transit.",
    icon: Lock,
  },
  {
    title: "Role-based staff access",
    description:
      "Permissions for captains, cashiers, chefs and managers. Restrict bill cancellations, discounts and raw inventory adjustments to authorised staff only.",
    icon: KeyRound,
  },
  {
    title: "Void and discount audit logs",
    description:
      "Every voided KOT item, split bill, applied discount and cash drawer opening is recorded with a timestamp and employee ID, so adjustments can be reviewed.",
    icon: ShieldCheck,
  },
  {
    title: "Offline-first design",
    description:
      "Jamanvar is designed to keep billing and KOT printing working locally without active internet, syncing to the cloud once connectivity is available. Local data protection and backup safeguards are being built out as part of this architecture.",
    icon: Server,
  },
];

const gstFeatures = [
  {
    title: "CGST and SGST / IGST splitting",
    description:
      "Compute 2.5% CGST + 2.5% SGST (the standard 5% restaurant GST without ITC) or custom GST rates on beverages, bakery items and merchandise.",
  },
  {
    title: "HSN / SAC codes on invoices",
    description: "Itemised HSN codes (for example 996331 for restaurant services) printed on 80mm and 58mm thermal receipts and tax invoices.",
  },
  {
    title: "B2B GST invoicing",
    description:
      "Capture corporate guests' GSTINs, legal trade names and addresses for B2B tax invoices with sequential numbering.",
  },
  {
    title: "GST reports for your accountant",
    description:
      "Monthly GST sales summaries, taxable values and tax breakdowns in exportable formats, ready to hand over to your Chartered Accountant.",
  },
];

export default function SecurityGstPage() {
  return (
    <>
      <PageHero
        badge="Security and GST"
        title="Clear controls for restaurant data and GST billing."
        description="How Jamanvar approaches staff access, audit trails, offline continuity and Indian restaurant invoicing."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Security and GST" }]}
      >
        <a href="#security" className="btn btn-secondary">
          Data and access
        </a>
        <a href="#gst" className="btn btn-secondary">
          GST invoicing
        </a>
      </PageHero>

      <section id="security" className="section bg-surface">
        <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <SectionHeading
            eyebrow="Data and access"
            title="Your numbers, recipes and guests belong to you."
            description="Jamanvar is designed with security-conscious practices, including encrypted data in transit and role-based permissions, to protect your restaurant's business information."
          />
          <ul className="grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2">
            {securityFeatures.map(({ title, description, icon: Icon }) => (
              <li key={title} className="reveal bg-surface p-6 sm:p-7">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-text ring-1 ring-brand/30">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">{title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-6 text-ink-muted">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="gst" className="section border-t border-line bg-ivory">
        <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <div>
            <SectionHeading
              eyebrow="GST invoicing"
              title="GST billing built around Indian invoicing conventions."
              description="Jamanvar calculates GST on restaurant bills, including CGST, SGST and IGST handling, based on the tax rules you configure."
            />
            <div className="mt-8 rounded-card border border-brand-200 bg-brand-50 p-5 text-[0.9375rem] leading-7 text-ink-soft">
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] text-brand-text">
                <Receipt className="h-4 w-4" aria-hidden="true" /> Publisher details
              </p>
              <p className="mt-2">
                Jamanvar is developed and distributed by <strong className="text-ink">KELVION TECH (Kelviontech)</strong>{" "}
                (Proprietor: <strong className="text-ink">Mihir Manishbhai Darji</strong>), based in Ahmedabad, Gujarat, India.
                Invoices issued for software subscription services use appropriate SAC accounting codes.
              </p>
            </div>
          </div>
          <div>
            <ul className="divide-y divide-line border-y border-line">
              {gstFeatures.map((g) => (
                <li key={g.title} className="reveal flex gap-4 py-6">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-ink">{g.title}</h3>
                    <p className="mt-1.5 text-[0.9375rem] leading-6 text-ink-muted">{g.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-6 text-ink-muted">
              GST rates, HSN/SAC codes and invoicing rules can change. Please verify your tax configuration and statutory filings
              with your own qualified tax advisor or Chartered Accountant.
            </p>
          </div>
        </div>
      </section>

      <PageCTA
        title="Questions about GST or staff access?"
        description="Our Ahmedabad team can walk through your restaurant's tax configuration, staff permissions and hardware setup."
        primaryLabel="Contact the team"
        primaryHref="/contact"
        secondaryLabel="Book a demo"
        secondaryHref="/book-a-demo"
      />
    </>
  );
}
