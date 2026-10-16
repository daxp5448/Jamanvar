import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { PRODUCTS } from "@/content/products";

const USE_CASES = [
  {
    title: "Cafés and quick-service counters",
    body: "When the queue is the business, short-code billing keeps the line moving, a kiosk lets guests order themselves, and guests at tables can order by QR.",
    modules: ["pos", "kiosk", "qr-ordering"],
  },
  {
    title: "Casual dine-in restaurants",
    body: "Every table runs a live tab, bills split by item or seat, and guests who know what they want order from their phone.",
    modules: ["pos", "qr-ordering", "tables"],
  },
  {
    title: "Full-service and family dining",
    body: "Captains take orders at the table, the floor plan shows every section, and large parties merge onto one tab.",
    modules: ["captain", "tables", "kds"],
  },
  {
    title: "Kitchens with several stations",
    body: "Tandoor, curry and bar each see only their own items, with timers and notes on every ticket, on screens or printers.",
    modules: ["kds", "inventory"],
  },
  {
    title: "Takeaway and delivery regulars",
    body: "Customers order on WhatsApp for pickup or home delivery, pay with a link, and the order lands in your kitchen queue.",
    modules: ["whatsapp-ordering", "pos"],
  },
  {
    title: "Restaurants with more than one counter",
    body: "Several cashiers can bill at the same time, each with their own login and cash drawer tally.",
    modules: ["pos", "analytics"],
  },
];

const productName = (slug: string) => PRODUCTS.find((p) => p.slug === slug)?.name ?? slug;

export function UseCasesSection() {
  return (
    <section className="section bg-ivory-deep">
      <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Who it's for"
            title="Built for the way your restaurant serves."
            description="Switch on the modules you need. A one-counter café and a family dining hall use the same system in different ways."
          />
          <Link href="/solutions/operations" className="link-arrow mt-8 text-[0.9375rem]">
            Browse solutions by problem <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <ul className="divide-y divide-line-strong border-y border-line-strong">
          {USE_CASES.map((u) => (
            <li key={u.title} className="reveal grid gap-3 py-6 sm:grid-cols-[1fr_auto] sm:gap-8">
              <div>
                <h3 className="text-xl font-bold text-ink">{u.title}</h3>
                <p className="mt-2 max-w-xl text-[0.98rem] leading-7 text-ink-muted">{u.body}</p>
              </div>
              <div className="flex flex-wrap content-start gap-2 sm:w-[17rem] sm:justify-end">
                {u.modules.map((m) => (
                  <Link
                    key={m}
                    href={`/products/${m}`}
                    className="rounded-full border border-line-strong bg-surface px-3 py-1.5 text-sm font-semibold text-ink-soft transition-colors hover:border-brand hover:text-ink"
                  >
                    {productName(m)}
                  </Link>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
