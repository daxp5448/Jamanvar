"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WatermarkOverlay } from "@/components/WatermarkOverlay";
import {
  Check,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Printer,
  HelpCircle,
  Zap,
  Boxes,
  Building,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");

  const plans = [
    {
      id: "starter",
      name: "Starter / Café",
      badge: "Essential Plan",
      description: "Ideal for small cafés, food trucks, bakeries, and quick-service outlets.",
      monthlyPrice: 5000,
      annualPrice: 4000, // ₹4,000/month billed annually
      features: [
        "1 Primary Billing POS Terminal",
        "Digital KOT & Table Orders",
        "GST & Non-GST Thermal Invoicing",
        "Cash, UPI & Card Tender Recording",
        "Daily Sales & End-of-Day Summary",
        "Basic Raw Stock Level Alerts",
        "100% Offline Mode Billing",
        "Standard Email & WhatsApp Support",
      ],
      ctaText: "Choose Starter Plan (₹5,000/mo)",
      popular: false,
    },
    {
      id: "pro",
      name: "Professional Dine-in",
      badge: "Most Popular",
      description: "Complete operational suite for full-service family dining, bars, and multi-table restaurants.",
      monthlyPrice: 7500,
      annualPrice: 6000, // ₹6,000/month billed annually
      features: [
        "Up to 3 Billing & Waiter Terminals",
        "Interactive Kitchen Display System (KDS)",
        "Visual Floor & Table Map Management",
        "Recipe-Level Ingredient Tracking & Wastage",
        "Split Billing, Item Modifiers & Add-ons",
        "Live Owner Telemetry & Mobile Analytics",
        "Staff Roles, Passcode & Anti-Theft Logs",
        "100% Offline Resilience + Cloud Sync",
        "Priority Phone, WhatsApp & Onboarding Support",
      ],
      ctaText: "Start Professional Plan (₹7,500/mo)",
      popular: true,
    },
  ];

  const hardwareItems = [
    {
      title: "80mm High-Speed Thermal Receipt Printer",
      specs: "USB + LAN + Bluetooth interface, auto-cutter, 260mm/sec speed",
      price: "Starting from ₹6,499",
      ideal: "Billing Counters & Kitchen KOT",
    },
    {
      title: "Heavy-Duty 15.6” Touch POS Terminal",
      specs: "Intel Quad-Core / Android 13, Capacitive True-Flat Glass, 4GB/64GB",
      price: "Starting from ₹24,999",
      ideal: "Main Cashier & Host Station",
    },
    {
      title: "Kitchen Display System (KDS) Tablet Mount",
      specs: "10.1” HD Display with heat-resistant wall/pole mount & power kit",
      price: "Starting from ₹11,999",
      ideal: "Hot Kitchen Line & Bar Prep Area",
    },
    {
      title: "Electronic Cash Drawer (Heavy Duty)",
      specs: "5 Bill / 8 Coin slots, RJ11 auto-trigger with receipt printer",
      price: "Starting from ₹3,999",
      ideal: "Cash Management & Safe Storage",
    },
  ];

  const faqs = [
    {
      q: "Are there any hidden transaction fees on cash or UPI payments?",
      a: "No. Jamanvar charges a flat, predictable software subscription fee. We do not take any percentage commissions on your restaurant's cash, direct UPI QR, or card machine transactions.",
    },
    {
      q: "Is GST included in the listed prices?",
      a: "All displayed software and hardware prices are in Indian Rupees (INR). GST is charged additionally at prevailing statutory rates (18% for software SaaS), and full GST input tax credit (ITC) compliant tax invoices are issued.",
    },
    {
      q: "Does Jamanvar work when the internet is down?",
      a: "Yes. Jamanvar is built with an offline-first architecture. You can punch orders, print kitchen KOTs, and generate bills even without internet. All data syncs automatically once connectivity resumes.",
    },
    {
      q: "Can I bring my own existing thermal printers or tablets?",
      a: "Absolutely! Jamanvar works with standard ESC/POS thermal printers (USB, LAN, Bluetooth) and standard Android/Windows tablets and desktops.",
    },
    {
      q: "How does the onboarding and menu digitization work?",
      a: "Once you sign up, our team will format and digitize your entire menu, configure your table layouts, and provide 1-on-1 training for your cashier and service staff.",
    },
  ];

  return (
    <main className="min-h-screen bg-jamanvar-cream-100 text-jamanvar-navy-950 selection:bg-jamanvar-saffron-200 selection:text-jamanvar-navy-900 relative">
      <WatermarkOverlay />
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-14 sm:pt-40 sm:pb-20 bg-jamanvar-navy-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-jamanvar-saffron-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-jamanvar-saffron-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRANSPARENT RESTAURANT PRICING (INR)</span>
          </div>

          <h1 className="text-3xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-4">
            Simple, predictable plans.
            <br />
            <span className="font-serif italic font-normal text-jamanvar-saffron-400">
              Zero commission on your revenue.
            </span>
          </h1>

          <p className="text-sm sm:text-lg text-white/75 max-w-2xl mx-auto leading-relaxed font-normal mb-8">
            Choose the right tier for your dining format. Every plan includes offline billing capability, GST invoicing, and dedicated support.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="inline-flex items-center p-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={cn(
                "px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer",
                billingCycle === "monthly"
                  ? "bg-white text-jamanvar-navy-950 shadow-md"
                  : "text-white/70 hover:text-white"
              )}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={cn(
                "px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer",
                billingCycle === "annual"
                  ? "bg-jamanvar-saffron-500 text-white shadow-saffron"
                  : "text-white/70 hover:text-white"
              )}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full uppercase tracking-wider">
                Save 20%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards Grid - 2 Column Centered Layout */}
      <section className="py-12 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {plans.map((plan) => {
            const price = billingCycle === "annual" ? plan.annualPrice : plan.monthlyPrice;
            return (
              <div
                key={plan.id}
                className={cn(
                  "rounded-3xl p-6 sm:p-10 flex flex-col justify-between transition-all duration-200 relative",
                  plan.popular
                    ? "bg-jamanvar-navy-950 text-white border-2 border-jamanvar-saffron-500 shadow-2xl scale-[1.02] z-20"
                    : "bg-white text-jamanvar-navy-950 border border-jamanvar-navy-900/10 shadow-card hover:border-jamanvar-saffron-500/40"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-jamanvar-saffron-500 text-white text-[11px] font-black tracking-wider uppercase shadow-saffron">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span
                      className={cn(
                        "text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full",
                        plan.popular
                          ? "bg-white/10 text-jamanvar-saffron-400"
                          : "bg-jamanvar-cream-200 text-jamanvar-navy-900/80"
                      )}
                    >
                      {plan.name}
                    </span>
                  </div>

                  <p
                    className={cn(
                      "text-xs sm:text-sm leading-relaxed mb-6 min-h-[40px]",
                      plan.popular ? "text-white/70" : "text-jamanvar-navy-900/70"
                    )}
                  >
                    {plan.description}
                  </p>

                  {/* Price display */}
                  <div className="mb-6 pb-6 border-b border-white/10">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-5xl font-black tracking-tight font-mono">
                        ₹{price.toLocaleString("en-IN")}
                      </span>
                      <span
                        className={cn(
                          "text-xs font-semibold",
                          plan.popular ? "text-white/60" : "text-jamanvar-navy-900/60"
                        )}
                      >
                        / month
                      </span>
                    </div>
                    <span
                      className={cn(
                        "text-[11px] block mt-1",
                        plan.popular ? "text-white/50" : "text-jamanvar-navy-900/50"
                      )}
                    >
                      {billingCycle === "annual" ? "Billed annually • " : "Billed monthly • "}
                      GST applicable as per law
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8 text-xs sm:text-sm">
                    <span
                      className={cn(
                        "text-[10px] uppercase font-bold tracking-wider block mb-2",
                        plan.popular ? "text-white/50" : "text-jamanvar-navy-900/50"
                      )}
                    >
                      What's Included:
                    </span>
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <Check
                          className={cn(
                            "w-4 h-4 shrink-0 mt-0.5",
                            plan.popular ? "text-jamanvar-saffron-400" : "text-jamanvar-green-600"
                          )}
                        />
                        <span className={plan.popular ? "text-white/85" : "text-jamanvar-navy-900/80"}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className={cn(
                    "w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer text-center",
                    plan.popular
                      ? "bg-jamanvar-saffron-500 hover:bg-jamanvar-saffron-600 text-white shadow-saffron"
                      : "bg-jamanvar-navy-900 hover:bg-jamanvar-navy-800 text-white"
                  )}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* GST & Compliance Note */}
        <div className="mt-8 p-4 rounded-2xl bg-white border border-jamanvar-saffron-500/20 text-center text-xs text-jamanvar-navy-900/75 max-w-3xl mx-auto shadow-subtle flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-jamanvar-saffron-600 shrink-0" />
          <span>
            <strong>Statutory Notice:</strong> All subscription plans are priced in Indian Rupees (INR). Applicable GST is invoiced with valid HSN/SAC codes for Input Tax Credit.
          </span>
        </div>
      </section>

      {/* Hardware Kits & Optional Add-ons */}
      <section id="hardware" className="py-12 sm:py-20 bg-jamanvar-cream-50 border-t border-jamanvar-navy-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-jamanvar-saffron-600 mb-2">
              <Printer className="w-3.5 h-3.5 text-jamanvar-saffron-500" />
              <span>CERTIFIED RESTAURANT HARDWARE</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-jamanvar-navy-950 tracking-tight">
              Pre-configured, plug-and-play hardware packages.
            </h2>
            <p className="mt-2 text-xs sm:text-base text-jamanvar-navy-900/70">
              Need reliable billing hardware? We supply tested industrial-grade thermal printers, touch terminals, and cash drawers fully pre-paired with Jamanvar software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hardwareItems.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-3xl bg-white border border-jamanvar-navy-900/10 shadow-card flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold text-jamanvar-saffron-700 bg-jamanvar-saffron-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider inline-block mb-3">
                    {item.ideal}
                  </span>
                  <h3 className="font-extrabold text-base text-jamanvar-navy-950 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-jamanvar-navy-900/65 leading-relaxed mb-4">
                    {item.specs}
                  </p>
                </div>

                <div className="pt-4 border-t border-jamanvar-navy-900/10">
                  <span className="text-sm sm:text-base font-black text-jamanvar-navy-950 font-mono block">
                    {item.price}
                  </span>
                  <span className="text-[10px] text-jamanvar-navy-900/50 block mb-3">
                    + 18% GST (Includes 1-yr Warranty)
                  </span>
                  <Link
                    href="/contact"
                    className="w-full py-2 px-3 rounded-lg bg-jamanvar-cream-200 hover:bg-jamanvar-cream-300 text-jamanvar-navy-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>Inquire Hardware</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing FAQs */}
      <section className="py-12 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-jamanvar-saffron-600 mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>COMMONLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-jamanvar-navy-950 tracking-tight">
            Frequently Asked Pricing Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-jamanvar-navy-900/10 shadow-subtle"
            >
              <h3 className="font-extrabold text-sm sm:text-base text-jamanvar-navy-950 mb-2">
                {faq.q}
              </h3>
              <p className="text-xs sm:text-sm text-jamanvar-navy-900/70 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-3xl bg-jamanvar-navy-950 text-white text-center space-y-4 shadow-2xl">
          <h3 className="text-xl sm:text-2xl font-bold">
            Need a custom quote for multiple branches or cloud kitchens?
          </h3>
          <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto">
            Our team in Ahmedabad will prepare a customized proposal tailored to your specific station and hardware requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-jamanvar-saffron-500 hover:bg-jamanvar-saffron-600 text-white font-bold text-xs sm:text-sm shadow-saffron transition-all"
          >
            <span>Talk to Jamanvar Team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
