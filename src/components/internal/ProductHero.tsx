import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "./Breadcrumbs";
import { ProductMedia } from "./ProductMedia";
import type { Product } from "@/content/products";

export function ProductHero({ product }: { product: Product }) {
  return (
    <section className="pt-28 pb-14 sm:pt-36 sm:pb-20 bg-jamanvar-navy-950 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-jamanvar-saffron-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Products" },
              { label: product.name },
            ]}
          />
        </div>

        <div className="max-w-3xl">
          <span className="inline-block text-xs font-mono font-bold text-jamanvar-saffron-400 bg-white/10 border border-white/15 px-3 py-1 rounded-full mb-4">
            {product.heroLabel}
          </span>
          <h1 className="text-3xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-4">
            {product.heroTitle}
          </h1>
          <p className="text-sm sm:text-lg text-white/75 leading-relaxed font-normal mb-8">
            {product.heroDescription}
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <Link
              href="/book-a-demo"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-jamanvar-saffron-500 hover:bg-jamanvar-saffron-600 text-white font-bold text-xs sm:text-sm shadow-saffron flex items-center justify-center gap-2"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/how-it-works"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/15 font-bold text-xs sm:text-sm text-center"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-10 sm:mt-14">
        <ProductMedia variant={product.heroMockup} />
      </div>
    </section>
  );
}
