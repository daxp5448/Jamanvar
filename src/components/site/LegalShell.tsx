import React from "react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { LegalToc } from "./LegalToc";

const LEGAL_PAGES = [
  { href: "/privacy-policy", label: "Privacy policy" },
  { href: "/terms-and-conditions", label: "Terms and conditions" },
  { href: "/refund-cancellation", label: "Refund and cancellation" },
  { href: "/security-gst", label: "Security and GST" },
];

// Reading layout for policy documents: a calm header, a contents list built
// from the document's own headings, and comfortable line length.
export function LegalShell({
  badge,
  title,
  updated,
  current,
  children,
}: {
  badge: string;
  title: string;
  updated: string;
  current: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="border-b border-line bg-ivory">
        <div className="shell pb-12 pt-10 sm:pb-16 sm:pt-14">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: title }]} className="mb-8" />
          <p className="eyebrow">{badge}</p>
          <h1 className="display-xl mt-4 max-w-3xl">{title}</h1>
          <p className="mt-5 text-[1.0625rem] text-ink-muted">{updated}</p>
        </div>
      </section>

      <div className="bg-surface">
        <div className="shell grid gap-12 py-14 sm:py-20 lg:grid-cols-[15rem_1fr] lg:gap-16">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <LegalToc />
            <nav aria-label="Policies" className="mt-10 hidden border-t border-line pt-6 text-sm lg:block">
              <p className="font-bold text-ink">Other policies</p>
              <ul className="mt-3 space-y-2">
                {LEGAL_PAGES.filter((p) => p.href !== current).map((p) => (
                  <li key={p.href}>
                    <Link href={p.href} className="text-ink-muted hover:text-ink">
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
          <article id="legal-document" className="legal-prose max-w-prose min-w-0">
            {children}
          </article>
        </div>
      </div>
    </>
  );
}
