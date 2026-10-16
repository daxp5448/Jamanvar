import Link from "next/link";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { FaqList } from "@/components/sections/FaqList";
import { PRODUCT_EXTRAS } from "@/content/productDetails";
import { FAQS as WHATSAPP_FAQS } from "@/content/whatsappOrdering";
import { PRODUCTS, type FaqItem } from "@/content/products";
import { SOLUTIONS } from "@/content/solutions";

function pickFaqs(): FaqItem[] {
  const all: FaqItem[] = [
    ...PRODUCTS.flatMap((p) => p.faqs),
    ...Object.values(PRODUCT_EXTRAS).flatMap((e) => e.moreFaqs),
    ...SOLUTIONS.flatMap((s) => s.faqs),
    ...WHATSAPP_FAQS,
  ];
  const wanted = [
    "What happens to billing if the internet goes down?",
    "Will it work with the thermal printer we already have?",
    "Does it handle GST for us?",
    "Do we have to switch everything at once?",
    "Do we need to buy screens for the kitchen?",
    "Can captains and guests order at the same table?",
    "Can guests pay at the kiosk?",
    "How does Jamanvar WhatsApp Ordering work?",
    "Do we have to buy hardware from you?",
    "How quickly can we go live?",
  ];
  return wanted.map((q) => all.find((f) => f.question === q)).filter((f): f is FaqItem => Boolean(f));
}

export function HomeFaq() {
  return (
    <section className="section border-t border-line bg-surface">
      <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading eyebrow="Questions owners ask" title="Before you book a demo." />
          <p className="mt-5 text-[1.0625rem] leading-[1.7] text-ink-muted">
            Something else on your mind?{" "}
            <Link href="/support" className="font-bold text-ink underline decoration-brand decoration-2 underline-offset-4">
              Support and training
            </Link>{" "}
            has more answers, or{" "}
            <Link href="/contact" className="font-bold text-ink underline decoration-brand decoration-2 underline-offset-4">
              ask the team
            </Link>
            .
          </p>
        </div>
        <FaqList items={pickFaqs()} />
      </div>
    </section>
  );
}
