import Link from "next/link";
import { ArrowRight, BarChart3, ChefHat, MessageCircle, MonitorSmartphone, QrCode, ReceiptText, Smartphone } from "lucide-react";
import { SectionHeading } from "@/components/sections/SectionHeading";

// Every way an order can enter Jamanvar, and where it goes next. Connections
// shown here are the verified ones: all channels reach the order desk and the
// kitchen display; WhatsApp does so once the account is connected to Jamanvar.

const CHANNELS = [
  { icon: ReceiptText, name: "Counter POS", body: "Bill by short code at the counter.", href: "/products/pos" },
  { icon: Smartphone, name: "Captain handheld", body: "Orders taken at the table, fired in one tap.", href: "/products/captain" },
  { icon: QrCode, name: "Table QR", body: "Guests order from their own phone.", href: "/products/qr-ordering" },
  { icon: MonitorSmartphone, name: "Self-ordering kiosk", body: "Guests order, pay and collect with a token.", href: "/products/kiosk" },
  { icon: MessageCircle, name: "WhatsApp", body: "Takeaway and delivery orders, paid in the chat.", href: "/products/whatsapp-ordering", isNew: true },
];

const DESTINATIONS = [
  { icon: ChefHat, name: "Kitchen display", body: "Each station sees its own items, with timers and notes.", href: "/products/kds" },
  { icon: BarChart3, name: "Owner reports", body: "Every settled bill feeds the day's numbers.", href: "/products/analytics" },
];

export function EcosystemSection() {
  return (
    <section id="ecosystem" className="section border-y border-line bg-surface">
      <div className="shell">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHeading
            eyebrow="One connected system"
            title="Every way guests order. One kitchen."
            description="However the order comes in, it lands in the same place, so your team works from one queue instead of five."
          />
          <Link href="/how-it-works" className="link-arrow shrink-0 text-[0.9375rem]">
            Follow an order step by step <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid items-center gap-6 lg:grid-cols-[1.15fr_auto_0.85fr_auto_1fr] lg:gap-5">
          <ul className="divide-y divide-line overflow-hidden rounded-card border border-line bg-ivory" aria-label="Ways orders come in">
            {CHANNELS.map(({ icon: Icon, name, body, href, isNew }) => (
              <li key={name}>
                <Link href={href} className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-ivory-deep">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface text-ink ring-1 ring-line">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-2 font-bold text-ink group-hover:text-brand-text">
                      {name}
                      {isNew && <span className="rounded-full bg-brand px-2 py-0.5 text-[0.6875rem] font-bold uppercase text-ink-950">New</span>}
                    </span>
                    <span className="block text-sm leading-5 text-ink-muted">{body}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <Connector />

          <div className="reveal rounded-panel border-2 border-brand bg-brand-50 p-7 text-ink shadow-card">
            <p className="eyebrow">Jamanvar POS</p>
            <p className="mt-3 text-2xl font-bold leading-snug">One live order desk</p>
            <p className="mt-3 text-[0.9375rem] leading-6 text-ink-soft">
              Dine-in and takeaway orders, each on its table tab or in the queue, with the bill and GST worked out.
            </p>
          </div>

          <Connector />

          <ul className="space-y-4" aria-label="Where orders go next">
            {DESTINATIONS.map(({ icon: Icon, name, body, href }) => (
              <li key={name}>
                <Link href={href} className="group block rounded-card border border-line bg-surface p-5 transition-colors hover:border-brand">
                  <Icon className="h-5 w-5 text-brand-deep" aria-hidden="true" />
                  <span className="mt-3 block font-bold text-ink group-hover:text-brand-text">{name}</span>
                  <span className="mt-1 block text-sm leading-5 text-ink-muted">{body}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 max-w-3xl text-sm leading-6 text-ink-muted">
          WhatsApp orders reach Jamanvar once your WhatsApp ordering account is connected to your restaurant, and appear after
          the customer has paid.
        </p>
      </div>
    </section>
  );
}

function Connector() {
  return (
    <div aria-hidden="true" className="flex justify-center text-brand-deep">
      <ArrowRight className="h-6 w-6 rotate-90 lg:rotate-0" />
    </div>
  );
}
