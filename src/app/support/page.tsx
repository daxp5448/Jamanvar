"use client";

import React from "react";
import Link from "next/link";
import { InternalNavbar } from "@/components/internal/InternalNavbar";
import { Footer } from "@/components/Footer";
import { WatermarkOverlay } from "@/components/WatermarkOverlay";
import {
  HelpCircle,
  Mail,
  Phone,
  MessageSquare,
  BookOpen,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Headphones,
  CheckCircle2,
  Wrench,
  Clock,
} from "lucide-react";

export default function SupportPage() {
  const supportPillars = [
    {
      title: "Menu Digitization & Setup",
      description:
        "Send us your PDF, photo, or paper menu. Our team sets up your dishes, categories, spice levels, Jain options, and pricing so you can start billing immediately.",
      icon: BookOpen,
    },
    {
      title: "Hardware Pairing & Testing",
      description:
        "We assist in configuring ESC/POS thermal printers, USB/LAN interfaces, cash drawers, and kitchen display tablets for zero-downtime reliability.",
      icon: Wrench,
    },
    {
      title: "1-on-1 Staff & Cashier Training",
      description:
        "We train your captains, kitchen staff, and cashiers through interactive video sessions or on-site guidance until your team is 100% confident.",
      icon: Headphones,
    },
    {
      title: "Emergency Service Support",
      description:
        "Encountered a rush-hour printer jam or network hiccup on a Saturday night? Our emergency technical line is available for fast triage.",
      icon: ShieldAlert,
    },
  ];

  const faqs = [
    {
      q: "How fast can my restaurant go live with Jamanvar?",
      a: "Most restaurants are completely live within 24 to 48 hours. Once you submit your menu and table count, we configure the database, train your team, and perform a test billing cycle before you open to guests.",
    },
    {
      q: "What if our restaurant's Wi-Fi router shuts down during service?",
      a: "Jamanvar operates on a local offline-first mesh. Even if your external broadband or Wi-Fi router is interrupted, you can still take orders, print thermal receipts, and dispatch KOTs on local devices.",
    },
    {
      q: "How do I update menu item prices or add seasonal specials?",
      a: "You can update prices or toggle 86 (Out-of-Stock) status in 2 clicks directly from the Manager menu in POS. Changes reflect immediately across all waiter and cashier screens.",
    },
    {
      q: "Can multiple cashiers bill simultaneously on busy weekends?",
      a: "Yes. Jamanvar supports multi-terminal billing with separate cash drawer tallies and cashier logins for full accountability.",
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
            <span>HOSPITALITY SUPPORT &amp; TRAINING</span>
          </div>

          <h1 className="text-3xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-4">
            We stand by your restaurant,{" "}
            <span className="font-serif italic font-normal text-jamanvar-saffron-400">
              day and night.
            </span>
          </h1>

          <p className="text-sm sm:text-lg text-white/75 max-w-2xl mx-auto leading-relaxed font-normal mb-8">
            From initial menu setup and hardware pairing to staff training and emergency rush-hour assistance, our support team ensures your operations run smoothly.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:kelviontech@gmail.com"
              className="px-6 py-3 rounded-xl bg-jamanvar-saffron-500 hover:bg-jamanvar-saffron-600 text-white font-bold text-xs sm:text-sm shadow-saffron flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Email: kelviontech@gmail.com</span>
            </a>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/15 font-bold text-xs sm:text-sm flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-jamanvar-saffron-400" />
              <span>Contact Support Desk</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Support Pillars */}
      <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-jamanvar-saffron-600 mb-2 block">
            HOW WE ASSIST YOU
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-jamanvar-navy-950 tracking-tight">
            Comprehensive onboarding &amp; service care.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {supportPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-jamanvar-navy-900/10 shadow-card flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-jamanvar-cream-100 border border-jamanvar-saffron-500/20 flex items-center justify-center text-jamanvar-saffron-600 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-lg text-jamanvar-navy-950 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-jamanvar-navy-900/70 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Business Hours & Direct Channels */}
      <section className="py-12 sm:py-16 bg-jamanvar-navy-950 text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
              <Clock className="w-6 h-6 text-jamanvar-saffron-400 mb-3" />
              <h4 className="font-bold text-base mb-1">Standard Support Hours</h4>
              <p className="text-xs text-white/70 leading-relaxed">
                Monday to Saturday: 9:30 AM – 7:00 PM IST
              </p>
              <span className="text-[11px] text-white/50 block mt-2">
                Location: Ahmedabad, Gujarat, India
              </span>
            </div>

            <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
              <Mail className="w-6 h-6 text-jamanvar-saffron-400 mb-3" />
              <h4 className="font-bold text-base mb-1">Email Ticketing</h4>
              <p className="text-xs text-white/70 leading-relaxed">
                Write to: <a href="mailto:kelviontech@gmail.com" className="text-jamanvar-saffron-300 underline">kelviontech@gmail.com</a>
              </p>
              <span className="text-[11px] text-white/50 block mt-2">
                Typical response time: Under 2 hours during business hours.
              </span>
            </div>

            <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
              <Phone className="w-6 h-6 text-jamanvar-saffron-400 mb-3" />
              <h4 className="font-bold text-base mb-1">Phone &amp; WhatsApp</h4>
              <div className="text-xs text-white/70 leading-relaxed space-y-1">
                <div>Phone: <a href="tel:+918140267475" className="text-white hover:underline">+91 81402 67475</a></div>
                <div>WhatsApp: <a href="https://wa.me/919327895570" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">+91 93278 95570</a></div>
              </div>
              <span className="text-[11px] text-white/50 block mt-2">
                Dedicated WhatsApp support available for onboarding.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Support FAQ */}
      <section className="py-12 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-jamanvar-saffron-600 mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>KNOWLEDGE BASE &amp; FAQ</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-jamanvar-navy-950 tracking-tight">
            Frequently Asked Support Questions
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
      </section>

      <Footer />
    </main>
  );
}
