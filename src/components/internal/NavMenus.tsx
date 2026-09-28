import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PRODUCTS, PRODUCT_ORDER } from "@/content/products";
import { SOLUTIONS } from "@/content/solutions";

// Shared dropdown panels for both navbars (home + internal pages), so the
// box looks and behaves the same everywhere. The parent owns open/close
// state and positioning; these only render the card.

const ORDERED_PRODUCTS = PRODUCT_ORDER.map((slug) => PRODUCTS.find((p) => p.slug === slug)!).filter(Boolean);

function MenuShell({
  eyebrow,
  title,
  blurb,
  children,
}: {
  eyebrow: string;
  title: string;
  blurb: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-[min(58rem,calc(100vw-2rem))] rounded-2xl bg-white border border-jamanvar-navy-900/10 shadow-elevated overflow-hidden grid grid-cols-1 lg:grid-cols-[15rem_1fr] text-left">
      <div className="hidden lg:flex flex-col justify-between bg-jamanvar-navy-950 text-white p-6">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-jamanvar-saffron-400 block mb-3">
            {eyebrow}
          </span>
          <p className="text-lg font-extrabold leading-snug tracking-tight mb-2">{title}</p>
          <p className="text-xs text-white/65 leading-relaxed">{blurb}</p>
        </div>
        <Link
          href="/book-a-demo"
          className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-jamanvar-saffron-400 hover:text-jamanvar-saffron-300 transition-colors"
        >
          <span>Book a demo</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
      <div className="p-3">{children}</div>
    </div>
  );
}

const ITEM_CLASS =
  "group flex items-start justify-between gap-3 rounded-xl px-3.5 py-3 hover:bg-jamanvar-cream-50 focus:outline-none focus-visible:bg-jamanvar-cream-50 focus-visible:ring-2 focus-visible:ring-jamanvar-saffron-500 transition-colors";

const ARROW_CLASS =
  "w-3.5 h-3.5 mt-1 shrink-0 text-jamanvar-saffron-500 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0 transition-all";

export function ProductsMenuPanel({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <MenuShell
      eyebrow="PRODUCTS"
      title="Everything the restaurant runs on."
      blurb="Take one module or the whole set. They share a single order, so nothing is entered twice."
    >
      <div role="none" className="grid grid-cols-1 sm:grid-cols-2 gap-0.5">
        {ORDERED_PRODUCTS.map((p) => (
          <Link
            key={p.slug}
            href={`/products/${p.slug}`}
            role="menuitem"
            onClick={onNavigate}
            className={ITEM_CLASS}
          >
            <span className="min-w-0">
              <span className="block text-[10px] font-bold uppercase tracking-widest text-jamanvar-saffron-600 mb-0.5">
                {p.category}
              </span>
              <span className="block text-sm font-bold text-jamanvar-navy-950">{p.name}</span>
              <span className="block text-xs text-jamanvar-navy-900/60 leading-snug mt-0.5">
                {p.shortDescription}
              </span>
            </span>
            <ArrowRight className={ARROW_CLASS} />
          </Link>
        ))}
      </div>
    </MenuShell>
  );
}

export function SolutionsMenuPanel({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <MenuShell
      eyebrow="SOLUTIONS"
      title="Start from the problem, not the product."
      blurb="Each solution explains what goes wrong on a busy night and which modules fix it."
    >
      <div role="none" className="grid grid-cols-1 sm:grid-cols-2 gap-0.5">
        {SOLUTIONS.map((s) => (
          <Link
            key={s.id}
            href={`/solutions/${s.id}`}
            role="menuitem"
            onClick={onNavigate}
            className={ITEM_CLASS}
          >
            <span className="min-w-0">
              <span className="block text-[10px] font-bold uppercase tracking-widest text-jamanvar-saffron-600 mb-0.5">
                {s.index}
              </span>
              <span className="block text-sm font-bold text-jamanvar-navy-950">{s.navTitle}</span>
              <span className="block text-xs text-jamanvar-navy-900/60 leading-snug mt-0.5">
                {s.navDescription}
              </span>
            </span>
            <ArrowRight className={ARROW_CLASS} />
          </Link>
        ))}
      </div>
    </MenuShell>
  );
}
