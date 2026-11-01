import Link from "next/link";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { CONTACT, NAV_PRODUCT_GROUPS, NAV_SOLUTIONS } from "@/content/navigation";
import { Logo } from "./Logo";

const companyLinks = [
  ["How it works", "/how-it-works"],
  ["All capabilities", "/features"],
  ["Download apps", "/apps"],
  ["About Jamanvar", "/about"],
  ["Support and training", "/support"],
  ["Security and GST", "/security-gst"],
  ["Contact", "/contact"],
  ["Book a demo", "/book-a-demo"],
] as const;

const legalLinks = [
  ["Privacy policy", "/privacy-policy"],
  ["Terms and conditions", "/terms-and-conditions"],
  ["Refund and cancellation", "/refund-cancellation"],
] as const;

const productLinks = NAV_PRODUCT_GROUPS.flatMap((g) => g.items);

export function Footer() {
  return (
    <footer className="border-t border-line bg-ivory-deep text-[0.9375rem] text-ink-soft">
      <div className="shell pb-10 pt-16 sm:pt-20">
        <div className="grid gap-12 border-b border-line pb-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.9fr_0.9fr_0.9fr_1.2fr] lg:gap-10">
          <div>
            <Link href="/" className="inline-flex rounded-xl" aria-label="Jamanvar home">
              <Logo className="h-16 w-auto" />
            </Link>
            <p className="mt-5 max-w-xs leading-7">
              Restaurant POS, kitchen display, captain and QR ordering, tables, inventory and owner reports, built in Ahmedabad.
            </p>
            <p className="mt-4 max-w-xs font-gujarati text-sm leading-6 text-ink-muted" lang="gu">
              સુવિધા સાથે, સ્વાદિષ્ટ વ્યવસાય.
            </p>
          </div>

          <FooterList title="Products" links={productLinks.map((p) => [p.name, p.href] as const)} />
          <FooterList title="Solutions" links={NAV_SOLUTIONS.map((s) => [s.name, s.href] as const)} />
          <FooterList title="Company" links={companyLinks} />

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.08em] text-ink">Talk to the team</h2>
            <ul className="mt-5 space-y-4 leading-6">
              <li className="flex gap-3">
                <Phone className="mt-1 h-4 w-4 shrink-0 text-brand-deep" aria-hidden="true" />
                <div>
                  <span className="sr-only">Phone and WhatsApp: </span>
                  {CONTACT.phones.map((p) => (
                    <a key={p.tel} href={`tel:${p.tel}`} className="block transition-colors hover:text-brand-text">
                      {p.display}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-1 h-4 w-4 shrink-0 text-brand-deep" aria-hidden="true" />
                <a href={`mailto:${CONTACT.email}`} className="break-all transition-colors hover:text-brand-text">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-brand-deep" aria-hidden="true" />
                <span>{CONTACT.location}</span>
              </li>
            </ul>
            <Link href="/book-a-demo" className="btn btn-primary btn-sm mt-7">
              Book a demo
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-8 text-sm text-ink-muted lg:flex-row lg:items-center lg:justify-between">
          <p>© {new Date().getFullYear()} Jamanvar, a product of {CONTACT.company}. All rights reserved.</p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalLinks.map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="transition-colors hover:text-brand-text">
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <a href="#main" className="inline-flex items-center gap-1.5 transition-colors hover:text-brand-text">
                Back to top <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterList({ title, links }: { title: string; links: ReadonlyArray<readonly [string, string]> }) {
  return (
    <nav aria-label={title}>
      <h2 className="text-sm font-bold uppercase tracking-[0.08em] text-ink">{title}</h2>
      <ul className="mt-5 space-y-3">
        {links.map(([label, href]) => (
          <li key={href}>
            <Link href={href} className="transition-colors hover:text-brand-text">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
