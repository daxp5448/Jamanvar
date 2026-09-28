"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { InternalNavbar } from "@/components/internal/InternalNavbar";
import { Footer } from "@/components/Footer";
import { WatermarkOverlay } from "@/components/WatermarkOverlay";
import {
  Heart,
  ShieldCheck,
  Building2,
  MapPin,
  Sparkles,
  ArrowRight,
  Zap,
  CheckCircle2,
  Users,
  Award,
} from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      title: "Engineered for Peak Rush Hours",
      description:
        "When your dining hall is overflowing on a Saturday evening, software cannot freeze or require 10 clicks to settle a table bill. We obsess over milliseconds and ergonomic simplicity.",
      icon: Zap,
    },
    {
      title: "100% Offline Independence",
      description:
        "Internet connectivity drops happen. Jamanvar was architected so that kitchen tickets print, table bills generate, and orders punch locally without any internet dependence.",
      icon: ShieldCheck,
    },
    {
      title: "No Cut of Your Revenue",
      description:
        "Jamanvar doesn't take a percentage of your cash, UPI or card sales. What you earn at the counter is yours, and we're upfront about everything else.",
      icon: Award,
    },
    {
      title: "Dedicated Human Support",
      description:
        "Restaurant hospitality operates on late nights and weekends. Our onboarding, training, and emergency support teams are available when you need us.",
      icon: Users,
    },
  ];

  return (
    <main className="min-h-screen bg-jamanvar-cream-100 text-jamanvar-navy-950 selection:bg-jamanvar-saffron-200 selection:text-jamanvar-navy-900 relative">
      <WatermarkOverlay />
      <InternalNavbar />

      {/* Hero Header */}
      <section className="pt-32 pb-14 sm:pt-40 sm:pb-20 bg-jamanvar-navy-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-jamanvar-saffron-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-jamanvar-saffron-400 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE JAMANVAR STORY &amp; PHILOSOPHY</span>
            </div>

            <h1 className="text-3xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-4">
              Crafted for the heart of{" "}
              <span className="font-serif italic font-normal text-jamanvar-saffron-400">
                Indian dining hospitality.
              </span>
            </h1>

            <p className="text-sm sm:text-lg text-white/75 leading-relaxed font-normal">
              Jamanvar was founded on a simple observation: Indian restaurant owners pour immense love into their food, but are constantly held back by fragmented, glitchy, and chaotic software. We built Jamanvar to restore operational calm.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy & Story Section */}
      <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-xs sm:text-sm text-jamanvar-navy-900/80 leading-relaxed">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-jamanvar-saffron-600">
              <Heart className="w-3.5 h-3.5 fill-jamanvar-saffron-500" />
              <span>CULTURE &amp; TECHNOLOGY</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-jamanvar-navy-950 tracking-tight leading-snug">
              Rooted in the warmth of Gujarati hospitality, built with world-class engineering.
            </h2>

            <p>
              In Gujarati culture, <strong className="text-jamanvar-navy-950">“જમણવાર” (Jamanvar)</strong> signifies a grand celebratory feast where guests are welcomed with unbound warmth, care, and abundant culinary delights.
            </p>

            <p>
              Behind every memorable dining experience lies intense operational coordination: captains taking table orders, busy tandoor chefs preparing dishes, cashiers generating bills, and managers tracking raw pantry stock. When any link breaks, the guest experience suffers.
            </p>

            <p>
              Jamanvar bridges that gap. We designed an unified platform where billing takes 3 seconds, kitchen orders route instantaneously, tables are tracked visually, and owners have complete live visibility on their phones.
            </p>

            <div className="p-4 sm:p-6 rounded-2xl bg-jamanvar-cream-50 border border-jamanvar-saffron-500/30 text-jamanvar-navy-950">
              <p className="font-gujarati text-base sm:text-xl font-bold text-jamanvar-saffron-800 mb-1">
                “સુવિધા સાથે, સ્વાદિષ્ટ વ્યવસાય — ગુજરાતની આતિથ્ય પરંપરાનું ગૌરવ.”
              </p>
              <span className="text-[11px] text-jamanvar-navy-900/60 uppercase font-semibold">
                Operational convenience • Delicious business • Proud Indian hospitality
              </span>
            </div>
          </div>

          {/* Legal Identity Card */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-jamanvar-navy-900/10 shadow-card space-y-5">
              <div className="flex items-center gap-2 text-jamanvar-saffron-700 font-bold text-xs uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-jamanvar-saffron-600" />
                <span>Enterprise &amp; Legal Identity</span>
              </div>

              <h3 className="text-xl font-bold text-jamanvar-navy-950">
                KELVION TECH (Kelviontech)
              </h3>

              <p className="text-xs text-jamanvar-navy-900/70 leading-relaxed">
                Jamanvar is an independent software product developed, owned, and distributed by <strong>KELVION TECH (Kelviontech)</strong>, a proprietorship technology business based in Ahmedabad, Gujarat, India.
              </p>

              <div className="space-y-3 pt-3 border-t border-jamanvar-navy-900/10 text-xs">
                <div className="flex justify-between py-1 border-b border-jamanvar-navy-900/5">
                  <span className="text-jamanvar-navy-900/60">Proprietor:</span>
                  <span className="font-bold text-jamanvar-navy-950">Mihir Manishbhai Darji</span>
                </div>
                <div className="flex justify-between py-1 border-b border-jamanvar-navy-900/5">
                  <span className="text-jamanvar-navy-900/60">Location:</span>
                  <span className="font-medium text-jamanvar-navy-950">Ahmedabad, Gujarat, India</span>
                </div>
                <div className="flex justify-between py-1 border-b border-jamanvar-navy-900/5">
                  <span className="text-jamanvar-navy-900/60">Email:</span>
                  <a href="mailto:kelviontech@gmail.com" className="font-bold text-jamanvar-saffron-600 hover:underline">
                    kelviontech@gmail.com
                  </a>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-jamanvar-navy-900/60">Studio:</span>
                  <a
                    href="https://kelviontech.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-jamanvar-saffron-600 hover:underline"
                  >
                    kelviontech.in ↗
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="w-full py-3 px-4 rounded-xl bg-jamanvar-navy-900 hover:bg-jamanvar-navy-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Connect with Our Team</span>
                  <ArrowRight className="w-3.5 h-3.5 text-jamanvar-saffron-400" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Engineering Pillars */}
      <section className="py-12 sm:py-20 bg-jamanvar-cream-50 border-t border-jamanvar-navy-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-jamanvar-saffron-600 mb-2 block">
              OUR PRODUCT PRINCIPLES
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-jamanvar-navy-950 tracking-tight">
              Why restaurateurs choose Jamanvar.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="p-6 sm:p-8 rounded-3xl bg-white border border-jamanvar-navy-900/10 shadow-card flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-jamanvar-cream-100 border border-jamanvar-saffron-500/20 flex items-center justify-center text-jamanvar-saffron-600 mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-extrabold text-lg text-jamanvar-navy-950 mb-2">{v.title}</h3>
                    <p className="text-xs sm:text-sm text-jamanvar-navy-900/70 leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 sm:py-24 bg-jamanvar-navy-950 text-white text-center border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            See how Jamanvar fits your restaurant.
          </h2>
          <p className="text-xs sm:text-base text-white/70 leading-relaxed max-w-xl mx-auto">
            Book a tailored demo with our Ahmedabad team. We will show you how billing, KDS, and table floor management work on your actual dishes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-jamanvar-saffron-500 hover:bg-jamanvar-saffron-600 text-white font-bold text-xs sm:text-sm shadow-saffron flex items-center justify-center gap-2"
            >
              <span>Book a Free Demonstration</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/features"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/15 font-bold text-xs sm:text-sm text-center"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
