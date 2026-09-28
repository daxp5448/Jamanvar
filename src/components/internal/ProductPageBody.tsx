import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { InternalNavbar } from "./InternalNavbar";
import { Footer } from "@/components/Footer";
import { WatermarkOverlay } from "@/components/WatermarkOverlay";
import { ProductHero } from "./ProductHero";
import { ProductMedia } from "./ProductMedia";
import { ProductFlow } from "./ProductFlow";
import { BeforeAfter, UseCases, GettingStarted } from "./ProductSections";
import { ProductPager } from "./ProductPager";
import { PageCTA } from "./PageCTA";
import { FaqList } from "./FaqList";
import { PhotoFrame } from "./PhotoFrame";
import { getProductName, type Product } from "@/content/products";
import { PRODUCT_DETAILS, PRODUCT_EXTRAS, PRODUCT_FLOW } from "@/content/productDetails";

export function ProductPageBody({ product }: { product: Product }) {
  const details = PRODUCT_DETAILS[product.slug] ?? [];
  const extras = PRODUCT_EXTRAS[product.slug];
  const flow = PRODUCT_FLOW[product.slug];
  const faqs = [...product.faqs, ...(extras?.moreFaqs ?? [])];
  return (
    <main className="min-h-screen bg-jamanvar-cream-100 text-jamanvar-navy-950 selection:bg-jamanvar-saffron-200 selection:text-jamanvar-navy-900 relative">
      <WatermarkOverlay />
      <InternalNavbar />

      <ProductHero product={product} />

      {/* Positioning: what it solves + capabilities, one section */}
      <section className="py-12 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-jamanvar-navy-950 tracking-tight mb-4">
          {product.positioningTitle}
        </h2>
        {product.positioningParagraphs.map((p, i) => (
          <p key={i} className="text-sm sm:text-base text-jamanvar-navy-900/75 leading-relaxed mb-4 max-w-3xl">
            {p}
          </p>
        ))}
        <p className="text-xs sm:text-sm text-jamanvar-navy-900/55 italic mb-8">{product.bestFor}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 pt-6 border-t border-jamanvar-navy-900/10">
          {product.capabilityRows.map((row) => (
            <div key={row.term}>
              <span className="block text-sm font-bold text-jamanvar-navy-950">{row.term}</span>
              <span className="block text-xs sm:text-sm text-jamanvar-navy-900/70 leading-relaxed mt-0.5">
                {row.description}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* In more detail: photo + text rows */}
      {details.length > 0 && (
        <section className="py-12 sm:py-20 bg-white border-y border-jamanvar-navy-900/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-bold uppercase tracking-widest text-jamanvar-saffron-600 mb-3 block">
              IN MORE DETAIL
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-jamanvar-navy-950 tracking-tight mb-10 sm:mb-14 max-w-3xl">
              What {product.name} looks like on a working day
            </h2>
            <div className="space-y-12 sm:space-y-20">
              {details.map((d, idx) => {
                const reversed = idx % 2 === 1;
                return (
                  <div key={d.title} className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14 items-center">
                    <div className={reversed ? "lg:col-span-6 lg:order-2" : "lg:col-span-6"}>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-jamanvar-navy-950 tracking-tight mb-3">
                        {d.title}
                      </h3>
                      {d.paragraphs.map((p, i) => (
                        <p key={i} className="text-sm sm:text-base text-jamanvar-navy-900/75 leading-relaxed mb-3">
                          {p}
                        </p>
                      ))}
                    </div>
                    <div className={reversed ? "lg:col-span-6 lg:order-1" : "lg:col-span-6"}>
                      <PhotoFrame photo={d.photo} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {extras && <BeforeAfter productName={product.name} rows={extras.beforeAfter} />}
      {extras && <UseCases items={extras.useCases} />}

      {/* Real UI deep dive — eyebrow label only, no heading spam */}
      <section className="py-12 sm:py-16 bg-jamanvar-cream-50 border-y border-jamanvar-navy-900/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          <span className="text-xs font-bold uppercase tracking-widest text-jamanvar-saffron-600 block">
            SEE {product.name.toUpperCase()} IN ACTION
          </span>
          {product.deepDive.map((section, idx) => {
            const reversed = idx % 2 === 1;
            return (
              <div key={section.index} className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
                <div className={reversed ? "lg:col-span-5 lg:order-2" : "lg:col-span-5"}>
                  <span className="inline-block text-xs font-mono font-bold text-jamanvar-saffron-700 bg-jamanvar-saffron-50 px-2.5 py-0.5 rounded-md border border-jamanvar-saffron-500/20 mb-3">
                    {section.index} / {section.label}
                  </span>
                  <p className="text-sm sm:text-base font-semibold text-jamanvar-navy-900/85 leading-relaxed">
                    {section.caption}
                  </p>
                </div>
                <div className={reversed ? "lg:col-span-7 lg:order-1" : "lg:col-span-7"}>
                  <ProductMedia variant={section.mockup} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* The restaurant flow, with this product's place in it */}
      {flow && <ProductFlow productName={product.name} flow={flow} />}

      {extras && <GettingStarted setupNote={extras.setupNote} />}

      {/* Connected ecosystem */}
      <section className="py-12 sm:py-16 bg-jamanvar-cream-50 border-y border-jamanvar-navy-900/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-jamanvar-navy-950 tracking-tight mb-6">
            {product.connectedTitle}
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {product.connected.map((slug) => (
              <Link
                key={slug}
                href={`/products/${slug}`}
                className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-jamanvar-navy-900/10 hover:border-jamanvar-saffron-500/50 text-xs sm:text-sm font-semibold text-jamanvar-navy-900 transition-colors"
              >
                <span>{getProductName(slug)}</span>
                <ArrowRight className="w-3.5 h-3.5 text-jamanvar-saffron-500 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Questions owners ask */}
      <section className="py-12 sm:py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-jamanvar-navy-950 tracking-tight mb-6">
          Questions owners ask
        </h2>
        <FaqList items={faqs} />
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductPager slug={product.slug} />
      </div>

      <PageCTA
        title={`Ready to see ${product.name} in action?`}
        description="We'll configure a live walkthrough with your actual menu, tables and hardware."
      />

      <Footer />
    </main>
  );
}
