import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PRODUCTS, PRODUCT_ORDER } from "@/content/products";

export function ProductPager({ slug }: { slug: string }) {
  const idx = PRODUCT_ORDER.indexOf(slug);
  const prevSlug = idx > 0 ? PRODUCT_ORDER[idx - 1] : PRODUCT_ORDER[PRODUCT_ORDER.length - 1];
  const nextSlug = idx < PRODUCT_ORDER.length - 1 ? PRODUCT_ORDER[idx + 1] : PRODUCT_ORDER[0];
  const prev = PRODUCTS.find((p) => p.slug === prevSlug)!;
  const next = PRODUCTS.find((p) => p.slug === nextSlug)!;

  return (
    <div className="flex items-center justify-between gap-4 py-6 border-t border-jamanvar-navy-900/10">
      <Link
        href={`/products/${prev.slug}`}
        className="group flex items-center gap-2 text-xs sm:text-sm font-semibold text-jamanvar-navy-900/70 hover:text-jamanvar-navy-950 min-w-0"
      >
        <ArrowLeft className="w-3.5 h-3.5 shrink-0 text-jamanvar-saffron-600 group-hover:-translate-x-0.5 transition-transform" />
        <span className="truncate">{prev.name}</span>
      </Link>

      <Link
        href={`/products/${next.slug}`}
        className="group flex items-center gap-2 text-xs sm:text-sm font-semibold text-jamanvar-navy-900/70 hover:text-jamanvar-navy-950 min-w-0 text-right"
      >
        <span className="truncate">{next.name}</span>
        <ArrowRight className="w-3.5 h-3.5 shrink-0 text-jamanvar-saffron-600 group-hover:translate-x-0.5 transition-transform" />
      </Link>
    </div>
  );
}
