"use client";

import React from "react";
import Link from "next/link";
import { InternalNavbar } from "@/components/internal/InternalNavbar";
import { Footer } from "@/components/Footer";
import { WatermarkOverlay } from "@/components/WatermarkOverlay";
import {
  CreditCard,
  ChefHat,
  LayoutGrid,
  Boxes,
  TrendingUp,
  WifiOff,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Printer,
  Clock,
  Sparkles,
  Split,
  QrCode,
  FileSpreadsheet,
} from "lucide-react";

const FEATURE_PRODUCT_SLUGS: Record<string, { slug: string; name: string }> = {
  pos: { slug: "pos", name: "Jamanvar POS" },
  kitchen: { slug: "kds", name: "Jamanvar KDS" },
  tables: { slug: "tables", name: "Table & Floor Management" },
  inventory: { slug: "inventory", name: "Recipe-Level Inventory" },
  analytics: { slug: "analytics", name: "Analytics & Insights" },
  hardware: { slug: "hardware", name: "Offline & Hardware" },
};

export default function FeaturesPage() {
  const modules = [
    {
      id: "pos",
      icon: CreditCard,
      badge: "01 / FRONT DESK",
      title: "Touch POS & 3-Second Billing",
      headline: "The fastest billing counter experience in Indian dining.",
      description:
        "Engineered for high-pressure rush hours. Quick numeric item codes, one-touch category filtering, item modifiers, running table tabs, and instant thermal printing in under 3 seconds.",
      highlights: [
        "Lightning-fast item search and short-code shortcuts (e.g. PT01 for Paneer Tikka)",
        "Instant split billing (by item, seat, or equal amount)",
        "Multi-tender payments: Cash, UPI QR, Card, and Customer Credit (Khaata)",
        "Supports 58mm & 80mm ESC/POS thermal printers via USB, LAN, and Bluetooth",
        "GST-compliant itemized invoicing with automated CGST & SGST calculation",
        "Cash drawer auto-trigger and anti-theft cash tallying at shift close",
      ],
    },
    {
      id: "kitchen",
      icon: ChefHat,
      badge: "02 / BACK OF HOUSE",
      title: "Interactive Kitchen Display System (KDS)",
      headline: "Eliminate lost paper tickets and kitchen shouting.",
      description:
        "Route orders from tables to hot lines instantly. Color-coded ticket timers warn chefs before prep delays escalate, keeping every station synchronized.",
      highlights: [
        "Instant KOT routing straight to kitchen screens or multi-station KOT printers",
        "Color-coded urgency timers: Green (0-10m), Amber (10-18m), Red (Overdue 18m+)",
        "Item-level prep status toggling: Cooking, Done, Dispatched",
        "Custom chef notes support: 'No onion/garlic (Jain)', 'Extra spicy', 'Less oil'",
        "Station filtering: Separate Tandoor, Chinese/Mains, Bar/Mocktail orders",
        "Bump-bar and touchscreen gesture support for busy kitchen hands",
      ],
    },
    {
      id: "tables",
      icon: LayoutGrid,
      badge: "03 / FLOOR MANAGEMENT",
      title: "Table & Floor Plan Management",
      headline: "Complete dining room visibility at a single glance.",
      description:
        "Visualize your entire restaurant floor across multiple dining zones (Main Hall, Terrace, AC Family Room, Banquet, Bar). Track real-time occupancy, running bills, and server assignments.",
      highlights: [
        "Color-coded visual table status: Available (Green), Occupied (Navy), Billing (Amber), Reserved (Purple)",
        "Multi-floor and multi-section support with custom table capacities",
        "One-tap table merging for large family gatherings or birthday parties",
        "Table transfer / shift orders without re-punching items",
        "Live seated timer showing exact table dwell time",
        "Waiter / Captain allocation tracking for accountability and service tips",
      ],
    },
    {
      id: "inventory",
      icon: Boxes,
      badge: "04 / STOCK & RECIPES",
      title: "Recipe-Level Raw Inventory Tracking",
      headline: "Stop raw material shrinkage before it hits your bottom line.",
      description:
        "Link menu items to underlying ingredients. When a Paneer Tikka is sold, Jamanvar automatically deducts exact quantities of paneer, butter, and spices from your digital pantry.",
      highlights: [
        "Recipe & BOM (Bill of Materials) mapping for all menu dishes",
        "Automatic stock depletion upon KOT punch with fractional gram precision",
        "Low-stock threshold alerts preventing mid-service stockouts",
        "Daily wastage logging (spoilage, kitchen sampling, customer returns)",
        "Vendor purchase order (PO) generation and GRN (Goods Received Note) entry",
        "Real-time food cost and gross margin percentage calculation per dish",
      ],
    },
    {
      id: "analytics",
      icon: TrendingUp,
      badge: "05 / OWNER INTELLIGENCE",
      title: "Live Business Telemetry & Reports",
      headline: "Track your restaurant's performance from anywhere on your phone.",
      description:
        "No waiting for manual day-end tallying. Jamanvar provides instant mobile access to net sales, hourly sales velocity, top selling items, and staff performance.",
      highlights: [
        "Real-time revenue dashboard accessible via mobile, tablet, or desktop browser",
        "Peak-hour sales velocity heatmaps to optimize kitchen prep and staff shifts",
        "Item profitability matrix (identify high-margin stars vs. loss leaders)",
        "End-of-day Cash / UPI / Card reconciliation with variance indicators",
        "Exportable Excel / CSV reports formatted for CA accounting & GST filing",
        "Historical comparison: Track month-over-month growth and average table ticket",
      ],
    },
    {
      id: "hardware",
      icon: WifiOff,
      badge: "06 / RESILIENCE",
      title: "100% Offline Capability & Hardware Resilience",
      headline: "Your restaurant keeps running even when the internet stops.",
      description:
        "Indian restaurants face unpredictable internet. Jamanvar's offline-first architecture stores everything securely in the local network so service never halts.",
      highlights: [
        "Complete offline billing, table punching, and KDS routing without active internet",
        "Automatic bi-directional cloud synchronization once connectivity is restored",
        "Compatible with all standard ESC/POS USB, Ethernet/LAN, and Bluetooth printers",
        "Supports Windows PCs, Android touch terminals, iPad/iPhones, and Android tablets",
        "Zero vendor lock-in on hardware — reuse your existing equipment",
        "Local backup snapshots guarding against accidental hardware shutdown",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-jamanvar-cream-100 text-jamanvar-navy-950 selection:bg-jamanvar-saffron-200 selection:text-jamanvar-navy-900 relative">
      <WatermarkOverlay />
      <InternalNavbar />

      {/* Hero Header */}
      <section className="pt-32 pb-14 sm:pt-40 sm:pb-20 bg-jamanvar-navy-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-jamanvar-saffron-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-jamanvar-saffron-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FULL ARCHITECTURE &amp; CAPABILITIES</span>
          </div>

          <h1 className="text-3xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-4">
            Built for the speed of
            <br />
            <span className="font-serif italic font-normal text-jamanvar-saffron-400">
              Indian restaurant hospitality.
            </span>
          </h1>

          <p className="text-sm sm:text-lg text-white/75 max-w-2xl mx-auto leading-relaxed font-normal mb-8">
            Explore every capability of Jamanvar — from lightning front-desk billing and synchronized kitchen screens to recipe-level stock deductions and offline resilience.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs">
            {modules.map((m) => (
              <a
                key={m.id}
                href={`#${m.id}`}
                className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white font-medium transition-colors"
              >
                {m.title.split("&")[0].split("(")[0]}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Deep Dive Sections */}
      <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        {modules.map((module, idx) => {
          const Icon = module.icon;
          const isEven = idx % 2 === 1;

          return (
            <div
              key={module.id}
              id={module.id}
              className="scroll-mt-28 p-6 sm:p-12 rounded-3xl bg-white border border-jamanvar-navy-900/10 shadow-card relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left details */}
                <div className={isEven ? "lg:col-span-6 lg:order-2" : "lg:col-span-6"}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono font-bold text-jamanvar-saffron-700 bg-jamanvar-saffron-50 px-2.5 py-0.5 rounded-md border border-jamanvar-saffron-500/20">
                      {module.badge}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-extrabold text-jamanvar-navy-950 tracking-tight mb-2">
                    {module.title}
                  </h2>
                  <p className="text-sm sm:text-base font-semibold text-jamanvar-saffron-700 mb-3">
                    {module.headline}
                  </p>
                  <p className="text-xs sm:text-sm text-jamanvar-navy-900/70 leading-relaxed mb-6">
                    {module.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-jamanvar-navy-900/10 text-xs">
                    {module.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-jamanvar-saffron-600 shrink-0 mt-0.5" />
                        <span className="text-jamanvar-navy-900/80 leading-relaxed">{h}</span>
                      </div>
                    ))}
                  </div>

                  {FEATURE_PRODUCT_SLUGS[module.id] && (
                    <div className="mt-6">
                      <Link
                        href={`/products/${FEATURE_PRODUCT_SLUGS[module.id].slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-jamanvar-navy-900 hover:text-jamanvar-saffron-700"
                      >
                        <span>Explore {FEATURE_PRODUCT_SLUGS[module.id].name} in detail</span>
                        <ArrowRight className="w-3.5 h-3.5 text-jamanvar-saffron-500" />
                      </Link>
                    </div>
                  )}

                  <div className="mt-8 pt-6 border-t border-jamanvar-navy-900/10 flex flex-wrap items-center gap-4">
                    <Link
                      href="/book-a-demo"
                      className="px-5 py-2.5 rounded-xl bg-jamanvar-navy-900 hover:bg-jamanvar-navy-800 text-white font-bold text-xs flex items-center gap-1.5 transition-colors"
                    >
                      <span>Request Live Demo</span>
                      <ArrowRight className="w-3.5 h-3.5 text-jamanvar-saffron-400" />
                    </Link>
                  </div>
                </div>

                {/* Right Decorative Feature Card */}
                <div className={isEven ? "lg:col-span-6 lg:order-1" : "lg:col-span-6"}>
                  <div className="p-6 sm:p-10 rounded-3xl bg-jamanvar-navy-950 text-white border border-jamanvar-saffron-500/30 shadow-2xl relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-jamanvar-saffron-500/15 rounded-full blur-2xl pointer-events-none" />

                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-jamanvar-saffron-400">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-mono text-white/50 uppercase tracking-widest">
                        OPERATIONAL MODULE
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{module.title}</h3>
                    <p className="text-xs text-white/70 leading-relaxed mb-6">
                      Fully integrated with the unified Jamanvar cloud and local network engine.
                    </p>

                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-xs">
                      <div className="flex justify-between text-white/60">
                        <span>Speed Latency:</span>
                        <span className="font-mono text-emerald-400">&lt; 15ms Local Execution</span>
                      </div>
                      <div className="flex justify-between text-white/60">
                        <span>Network Mode:</span>
                        <span className="text-white">Offline Local Mesh + Cloud Sync</span>
                      </div>
                      <div className="flex justify-between text-white/60">
                        <span>Security:</span>
                        <span className="text-jamanvar-saffron-400">Role-Based Access Control</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Bottom CTA */}
      <section className="py-16 sm:py-24 bg-jamanvar-navy-950 text-white text-center border-t border-white/10 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-5xl font-extrabold mb-4 tracking-tight">
            Ready to experience Jamanvar in action?
          </h2>
          <p className="text-xs sm:text-base text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
            Get a 1-on-1 walkthrough configured with your actual restaurant menu, table layout, and printer hardware.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-jamanvar-saffron-500 hover:bg-jamanvar-saffron-600 text-white font-bold text-xs sm:text-sm shadow-saffron flex items-center justify-center gap-2"
            >
              <span>Book a Free Demonstration</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/how-it-works"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/15 font-bold text-xs sm:text-sm text-center"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
