import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PageCTAProps {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function PageCTA({
  title,
  description,
  primaryLabel = "Book a Demo",
  primaryHref = "/book-a-demo",
  secondaryLabel,
  secondaryHref,
}: PageCTAProps) {
  return (
    <section className="py-16 sm:py-24 bg-jamanvar-navy-950 text-white text-center border-t border-white/10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-5xl font-extrabold mb-4 tracking-tight">{title}</h2>
        <p className="text-xs sm:text-base text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryHref}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-jamanvar-saffron-500 hover:bg-jamanvar-saffron-600 text-white font-bold text-xs sm:text-sm shadow-saffron flex items-center justify-center gap-2"
          >
            <span>{primaryLabel}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/15 font-bold text-xs sm:text-sm text-center"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
