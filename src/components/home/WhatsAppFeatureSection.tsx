import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BrandPanel } from "@/components/site/BrandPanel";
import { ScreenCaption } from "@/components/site/DeviceFrame";
import { WhatsAppChat } from "@/components/site/WhatsAppChat";
import { CHAT_SCENES } from "@/content/whatsappOrdering";

const JOURNEY = [
  { title: "Browse the menu", body: "Dishes arrive as cards with photo and price." },
  { title: "Add to cart", body: "One tap per dish, with quantities and an editable cart." },
  { title: "Pickup or delivery", body: "Share an address or location, or skip it to collect." },
  { title: "Confirm and pay", body: "Review the summary, place the order, pay by link." },
];

export function WhatsAppFeatureSection() {
  return (
    <section className="section bg-surface">
      <div className="shell grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
        <figure className="reveal order-2 lg:order-1">
          <BrandPanel>
            <WhatsAppChat
              tall
              messages={CHAT_SCENES.journey}
              label="WhatsApp ordering chat: a menu card for Paneer Tikka Angara, a cart totalling ₹760, the customer shares a delivery location, and an order summary with a Place Order button."
            />
          </BrandPanel>
          <ScreenCaption className="mt-5">Illustration of the ordering chat with a sample menu.</ScreenCaption>
        </figure>

        <div className="reveal order-1 lg:order-2">
          <p className="eyebrow">
            <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-[#25D366]" />
            04 · New: WhatsApp Ordering
          </p>
          <h2 className="display-lg mt-4">Meet your customers where they already chat.</h2>
          <p className="lead mt-5">
            Takeaway and home-delivery customers order from your restaurant&apos;s WhatsApp number. No app to install, no website to
            find. Once paid, the order reaches your Jamanvar order desk and kitchen.
          </p>

          <ol className="mt-9 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2">
            {JOURNEY.map((step, i) => (
              <li key={step.title} className="bg-ivory p-5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-sm font-bold text-ink-950">{i + 1}</span>
                <p className="mt-3 font-bold text-ink">{step.title}</p>
                <p className="mt-1 text-[0.9375rem] leading-6 text-ink-muted">{step.body}</p>
              </li>
            ))}
          </ol>

          <Link href="/products/whatsapp-ordering" className="link-arrow mt-9 text-[0.9375rem]">
            Explore WhatsApp Ordering <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
