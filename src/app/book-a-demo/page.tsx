import type { Metadata } from "next";
import { Sparkles, ShieldCheck } from "lucide-react";
import { InternalNavbar } from "@/components/internal/InternalNavbar";
import { Footer } from "@/components/Footer";
import { WatermarkOverlay } from "@/components/WatermarkOverlay";
import { ProductMedia } from "@/components/internal/ProductMedia";
import { BookDemoForm } from "@/components/internal/BookDemoForm";
import { PRODUCTS } from "@/content/products";

export const metadata: Metadata = {
  title: "Book a Demo | Jamanvar Restaurant POS",
  description:
    "See Jamanvar in action on your own menu and floor plan. Book a free, 1-on-1 demo covering POS billing, kitchen display, table management, inventory and analytics.",
  alternates: { canonical: "/book-a-demo" },
  openGraph: {
    title: "Book a Demo | Jamanvar Restaurant POS",
    description: "Tell us about your restaurant. We'll show you how Jamanvar fits your operation.",
    type: "website",
    images: [{ url: "/images/jamanvar/logo.jpg", width: 1200, height: 1200, alt: "Jamanvar Restaurant POS" }],
  },
};

const ECOSYSTEM_LINKS = PRODUCTS.filter((p) =>
  ["captain", "pos", "kds", "hardware"].includes(p.slug)
);

export default function BookADemoPage() {
  return (
    <main className="min-h-screen bg-jamanvar-cream-100 text-jamanvar-navy-950 selection:bg-jamanvar-saffron-200 selection:text-jamanvar-navy-900 relative">
      <WatermarkOverlay />
      <InternalNavbar />

      <section className="pt-32 pb-12 sm:pt-40 sm:pb-16 bg-jamanvar-navy-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-jamanvar-saffron-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-jamanvar-saffron-400 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>1-ON-1 PRODUCT WALKTHROUGH</span>
            </div>
            <h1 className="text-3xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-4">
              See Jamanvar{" "}
              <span className="font-serif italic font-normal text-jamanvar-saffron-400">in action.</span>
            </h1>
            <p className="text-sm sm:text-lg text-white/75 leading-relaxed font-normal">
              Tell us about your restaurant. Our Ahmedabad team will configure a live walkthrough on your actual menu, table layout and printer hardware.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-white border border-jamanvar-navy-900/10 shadow-card">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-jamanvar-navy-950 mb-2">
                  Tell us about your restaurant
                </h2>
                <p className="text-xs sm:text-sm text-jamanvar-navy-900/70 leading-relaxed">
                  Fill in your details below. You can also connect directly via email or WhatsApp after submitting.
                </p>
              </div>
              <BookDemoForm />
            </div>
          </div>

          {/* Side panel */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-jamanvar-navy-950 text-white border border-white/10 shadow-card">
              <h3 className="text-sm font-bold uppercase tracking-wider text-jamanvar-saffron-400 mb-4">
                Explore the connected ecosystem
              </h3>
              <div className="space-y-2.5">
                {ECOSYSTEM_LINKS.map((p) => (
                  <a
                    key={p.slug}
                    href={`/products/${p.slug}`}
                    className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-jamanvar-saffron-500/50 transition-colors text-xs sm:text-sm font-semibold"
                  >
                    <span>{p.name}</span>
                    <span className="text-jamanvar-saffron-400">→</span>
                  </a>
                ))}
              </div>
            </div>

            <ProductMedia variant="pos" />

            <div className="p-4 rounded-2xl bg-white border border-jamanvar-saffron-500/20 text-xs text-jamanvar-navy-900/75 shadow-subtle flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-jamanvar-saffron-600 shrink-0" />
              <span>No commitment required. Our onboarding specialist responds within 2 hours during business hours.</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
