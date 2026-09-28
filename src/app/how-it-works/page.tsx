import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { InternalNavbar } from "@/components/internal/InternalNavbar";
import { Footer } from "@/components/Footer";
import { WatermarkOverlay } from "@/components/WatermarkOverlay";
import { PageHero } from "@/components/internal/PageHero";
import { PageCTA } from "@/components/internal/PageCTA";
import { ProductMedia } from "@/components/internal/ProductMedia";
import { WORKFLOW_STAGES } from "@/content/workflow";

export const metadata: Metadata = {
  title: "How It Works | Jamanvar Restaurant Workflow",
  description:
    "One order, one connected flow: from Captain & QR ordering through POS billing, kitchen display routing, table management, payment settlement and live owner insights.",
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    title: "How It Works | Jamanvar Restaurant Workflow",
    description: "One order. One connected flow. See exactly how a Jamanvar restaurant runs, stage by stage.",
    type: "website",
    images: [{ url: "/images/jamanvar/logo.jpg", width: 1200, height: 1200, alt: "Jamanvar Restaurant POS" }],
  },
};

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-jamanvar-cream-100 text-jamanvar-navy-950 selection:bg-jamanvar-saffron-200 selection:text-jamanvar-navy-900 relative">
      <WatermarkOverlay />
      <InternalNavbar />

      <PageHero
        badge="HOW IT WORKS"
        title={
          <>
            One order.
            <br />
            <span className="font-serif italic font-normal text-jamanvar-saffron-400">
              One connected flow.
            </span>
          </>
        }
        description="From the first order to the final report, Jamanvar keeps your restaurant operations moving together without friction."
      />

      <section className="py-12 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Connecting spine (desktop) */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-jamanvar-navy-900/10" />

          <div className="space-y-12 sm:space-y-16">
            {WORKFLOW_STAGES.map((stage, idx) => {
              const reversed = idx % 2 === 1;
              return (
                <div key={stage.id} id={stage.id} className="scroll-mt-28 relative">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                    <div className={reversed ? "lg:col-span-6 lg:order-2" : "lg:col-span-6"}>
                      <div className="flex items-center gap-2 mb-2 sm:mb-3">
                        <span className="w-9 h-9 rounded-full bg-jamanvar-navy-900 text-white font-mono font-black text-xs flex items-center justify-center shrink-0">
                          {stage.step}
                        </span>
                        <span className="text-[10px] sm:text-xs text-jamanvar-navy-900/60 uppercase tracking-wider font-bold">
                          {stage.label} PIPELINE
                        </span>
                      </div>

                      <h2 className="text-xl sm:text-3xl font-extrabold text-jamanvar-navy-950 mb-2 sm:mb-3 tracking-tight">
                        {stage.title}
                      </h2>

                      <p className="text-xs sm:text-base text-jamanvar-navy-900/75 leading-relaxed mb-4">
                        {stage.description}
                      </p>

                      <div className="flex items-center gap-2.5 p-3.5 bg-white rounded-xl border border-jamanvar-navy-900/10 text-xs text-jamanvar-navy-900 font-medium mb-4">
                        <CheckCircle className="w-4 h-4 text-jamanvar-green-600 shrink-0" />
                        <span className="text-[11px] sm:text-xs">{stage.detail}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="px-3.5 py-2 rounded-xl bg-jamanvar-navy-950 text-white">
                          <span className="text-lg sm:text-xl font-black text-jamanvar-saffron-400 block leading-none">
                            {stage.metric}
                          </span>
                          <span className="text-[9px] text-white/60 uppercase tracking-wider">
                            {stage.metricLabel}
                          </span>
                        </div>
                        <Link
                          href={stage.href}
                          className="text-xs font-bold text-jamanvar-navy-900 hover:text-jamanvar-saffron-700 inline-flex items-center gap-1"
                        >
                          <span>Learn more</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>

                    <div className={reversed ? "lg:col-span-6 lg:order-1" : "lg:col-span-6"}>
                      <ProductMedia
                        variant={
                          stage.id === "order"
                            ? "ordering"
                            : stage.id === "pos" || stage.id === "bill"
                            ? "pos"
                            : stage.id === "kitchen"
                            ? "kds"
                            : stage.id === "table"
                            ? "tables"
                            : "analytics"
                        }
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <PageCTA
        title="See this workflow run on your own menu."
        description="We'll configure a live walkthrough with your actual tables, menu and printer hardware."
        secondaryLabel="See It in a Real Restaurant"
        secondaryHref="/solutions/operations"
      />

      <Footer />
    </main>
  );
}
