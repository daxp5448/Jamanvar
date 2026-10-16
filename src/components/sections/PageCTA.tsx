import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { CONTACT } from "@/content/navigation";

interface PageCTAProps {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

// Closing call to action used at the end of most pages: a warm orange-tinted
// panel with one primary action and a direct phone line as the alternative.
export function PageCTA({
  title,
  description,
  primaryLabel = "Book a demo",
  primaryHref = "/book-a-demo",
  secondaryLabel,
  secondaryHref,
}: PageCTAProps) {
  return (
    <section className="section-tight bg-ivory">
      <div className="shell">
        <div className="reveal relative overflow-hidden rounded-panel border border-brand-200 bg-brand-50 px-6 py-12 sm:px-12 sm:py-14 lg:px-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[28px] border-brand/15 sm:-right-16 sm:h-96 sm:w-96 sm:border-[40px]"
          />
          <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div>
              <h2 className="display-lg max-w-2xl">{title}</h2>
              <p className="mt-4 max-w-xl text-[1.0625rem] leading-[1.7] text-ink-soft">{description}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch xl:flex-row xl:justify-end">
              <Link href={primaryHref} className="btn btn-primary">
                {primaryLabel} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              {secondaryLabel && secondaryHref ? (
                <Link href={secondaryHref} className="btn btn-secondary">
                  {secondaryLabel}
                </Link>
              ) : (
                <a href={`tel:${CONTACT.phones[0].tel}`} className="btn btn-secondary">
                  <Phone className="h-4 w-4" aria-hidden="true" /> Call {CONTACT.phones[0].display}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
