import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductHero } from "./ProductHero";
import { ProductFlow } from "./ProductFlow";
import { BeforeAfter, UseCases, GettingStarted } from "./ProductSections";
import { Pager } from "./Pager";
import { PageCTA } from "./PageCTA";
import { FaqList } from "./FaqList";
import { PhotoFrame } from "./PhotoFrame";
import { SectionHeading } from "./SectionHeading";
import { PRODUCTS, PRODUCT_ORDER, type Product } from "@/content/products";
import { PRODUCT_DETAILS, PRODUCT_EXTRAS, PRODUCT_FLOW } from "@/content/productDetails";

export function ProductPageBody({ product }: { product: Product }) {
  const details = PRODUCT_DETAILS[product.slug] ?? [];
  const extras = PRODUCT_EXTRAS[product.slug];
  const flow = PRODUCT_FLOW[product.slug];
  const faqs = [...product.faqs, ...(extras?.moreFaqs ?? [])];
  const connected = product.connected.map((slug) => PRODUCTS.find((p) => p.slug === slug)).filter((p): p is Product => Boolean(p));

  const idx = PRODUCT_ORDER.indexOf(product.slug);
  const at = (i: number) => PRODUCTS.find((p) => p.slug === PRODUCT_ORDER[(i + PRODUCT_ORDER.length) % PRODUCT_ORDER.length])!;
  const prev = at(idx - 1);
  const next = at(idx + 1);

  return (
    <>
      <ProductHero product={product} />

      {/* What it does */}
      <section id="capabilities" className="section bg-surface">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-12">
          <div>
            <SectionHeading eyebrow="What it does" title={product.positioningTitle} />
            <div className="mt-6 space-y-4 text-[1.0313rem] leading-[1.75] text-ink-soft">
              {product.positioningParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <p className="mt-8 rounded-card border border-brand-200 bg-brand-50 p-5 text-[0.98rem] font-medium leading-7 text-ink">
              {product.bestFor}
            </p>
          </div>
          <dl className="self-start divide-y divide-line border-y border-line lg:sticky lg:top-28">
            {product.capabilityRows.map((row) => (
              <div key={row.term} className="grid gap-1 py-5 sm:grid-cols-[10rem_1fr] sm:gap-6">
                <dt className="font-bold text-ink">{row.term}</dt>
                <dd className="text-[0.9375rem] leading-6 text-ink-muted">{row.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* On a working day */}
      {details.length > 0 && (
        <section className="section border-t border-line bg-ivory">
          <div className="shell">
            <SectionHeading eyebrow="In more detail" title={`${product.name} on a working day`} />
            <div className="mt-10 space-y-12 sm:space-y-16">
              {details.map((d, i) => (
                <article key={d.title} className="reveal grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                  <div className={i % 2 === 1 ? "lg:order-2" : undefined}>
                    <h3 className="display-md">{d.title}</h3>
                    <div className="mt-4 space-y-4 text-[1.0313rem] leading-[1.75] text-ink-soft">
                      {d.paragraphs.map((p, j) => (
                        <p key={j}>{p}</p>
                      ))}
                    </div>
                  </div>
                  <PhotoFrame photo={d.photo} className={i % 2 === 1 ? "lg:order-1" : undefined} />
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {extras && <BeforeAfter productName={product.name} rows={extras.beforeAfter} />}
      {extras && <UseCases items={extras.useCases} />}
      {flow && <ProductFlow productName={product.name} flow={flow} />}
      {extras && <GettingStarted setupNote={extras.setupNote} />}

      {/* Connected products */}
      <section className="section border-t border-line bg-surface">
        <div className="shell">
          <SectionHeading eyebrow="Works with" title={product.connectedTitle} />
          <ul className="mt-10 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {connected.map((p) => (
              <li key={p.slug} className="bg-surface">
                <Link href={`/products/${p.slug}`} className="group flex h-full flex-col justify-between gap-6 p-6 transition-colors hover:bg-ivory">
                  <span>
                    <span className="block font-bold text-ink group-hover:text-brand-text">{p.name}</span>
                    <span className="mt-1.5 block text-[0.9375rem] leading-6 text-ink-muted">{p.shortDescription}</span>
                  </span>
                  <ArrowRight className="h-4 w-4 text-brand-text transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Questions */}
      <section className="section border-t border-line bg-ivory">
        <div className="shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <SectionHeading eyebrow="Questions owners ask" title={`About ${product.name}`} />
          <FaqList items={faqs} />
        </div>
      </section>

      <Pager
        label="More products"
        prev={{ href: `/products/${prev.slug}`, name: prev.name }}
        next={{ href: `/products/${next.slug}`, name: next.name }}
      />

      <PageCTA
        title={`See ${product.name} with your own menu.`}
        description="We'll set up a walkthrough around your actual menu, tables and hardware, and answer the questions that matter to your restaurant."
      />
    </>
  );
}
