import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { NAV_PRODUCT_GROUPS } from "@/content/navigation";

export default function NotFound() {
  const products = NAV_PRODUCT_GROUPS.flatMap((g) => g.items);
  return (
    <section className="bg-ivory">
      <div className="shell grid gap-12 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div>
          <p className="eyebrow">Page not found</p>
          <h1 className="display-xl mt-4">This table isn&apos;t on the floor plan.</h1>
          <p className="lead mt-6 max-w-xl">The page you were looking for has moved or doesn&apos;t exist. Here are a few places to pick up from.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/" className="btn btn-primary">
              Back to home <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Contact the team
            </Link>
          </div>
        </div>
        <nav aria-label="Products" className="rounded-panel border border-line bg-surface p-7">
          <p className="text-sm font-bold uppercase tracking-[0.08em] text-ink-muted">Products</p>
          <ul className="mt-4 divide-y divide-line">
            {products.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="flex min-h-12 items-center justify-between font-semibold text-ink hover:text-brand-text">
                  {p.name} <ArrowRight className="h-4 w-4 text-brand-text" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
