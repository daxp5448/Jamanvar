"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, Sparkles, CheckCircle2, Star } from "lucide-react";

interface FinalCTAProps {
  onOpenDemo: () => void;
}

export function FinalCTA({ onOpenDemo }: FinalCTAProps) {
  return (
    <section className="py-24 md:py-36 bg-jamanvar-navy-950 text-white relative overflow-hidden border-t border-white/10">
      {/* Restrained saffron glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-jamanvar-saffron-500/18 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-subtle-pattern-dark opacity-30 pointer-events-none" />

      {/* Large Dark Section Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[450px] sm:h-[600px] opacity-[0.045] pointer-events-none">
        <Image
          src="/images/jamanvar/watermark-emblem.png"
          alt=""
          fill
          className="object-contain filter invert brightness-200"
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Official Large Brand Logo Presentation in Luxury Frame */}
        <div className="flex justify-center mb-8">
          <div className="relative p-2 rounded-3xl bg-gradient-to-b from-jamanvar-saffron-400 to-jamanvar-navy-900 shadow-2xl">
            <div className="px-8 py-4 rounded-2xl overflow-hidden bg-jamanvar-cream-50 flex items-center justify-center">
              <Image
                src="/images/jamanvar/brand-logo-transparent.png"
                alt="Jamanvar by Kelviontech official logo"
                width={240}
                height={78}
                className="h-16 sm:h-20 w-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Small Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-jamanvar-saffron-400 mb-5 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="uppercase tracking-widest text-[11px]">READY TO SIMPLIFY YOUR RESTAURANT?</span>
        </div>

        {/* Large Editorial Headline */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
          Let Jamanvar
          <br />
          <span className="font-serif italic font-normal text-jamanvar-saffron-400">
            run the busy work.
          </span>
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          See how Jamanvar can fit into your restaurant operations. Get a tailored live demo on your menu structure today.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto px-9 py-4 rounded-xl bg-jamanvar-saffron-500 hover:bg-jamanvar-saffron-600 text-white font-extrabold text-base shadow-saffron flex items-center justify-center gap-2.5 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>Book a Free Demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-base flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 text-jamanvar-saffron-400" />
            <span>Talk to Jamanvar Team</span>
          </button>
        </div>

        {/* Royal Gujarati Hospitality Tribute Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-jamanvar-navy-900/90 border border-jamanvar-saffron-500/40 shadow-2xl text-center relative overflow-hidden backdrop-blur-md max-w-4xl mx-auto mb-10">
          <div className="absolute top-0 right-0 w-48 h-48 bg-jamanvar-saffron-500/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-jamanvar-saffron-300 mb-3">
            <Star className="w-3.5 h-3.5 fill-jamanvar-saffron-400 text-jamanvar-saffron-400" />
            <span>ગુજરાતી આતિથ્ય અને આધુનિક ટેકનોલોજીનું ગૌરવ</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-gujarati font-extrabold text-white leading-snug mb-4">
            “જ્યાં સ્વાદ અને સત્કાર છે, ત્યાં જમણવાર છે.”
          </h3>

          <p className="text-sm sm:text-base font-gujarati text-white/80 max-w-2xl mx-auto leading-relaxed mb-6">
            તમારા રેસ્ટોરન્ટના દરેક ટેબલ, ઓર્ડર, કિચન અને ગ્રાહક સેવાને એક તાંતણે બાંધીને વ્યવસાયને સરળ અને નફાકારક બનાવતું સર્વશ્રેષ્ઠ ગુજરાતી POS સોફ્ટવેર.
          </p>

          <div className="brass-divider-dark max-w-lg mx-auto mb-6" />

          {/* Gujarati Feature Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-gujarati">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white/90">
              ⚡ ત્વરિત GST બિલિંગ
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white/90">
              🍳 લાઈવ કિચન KDS
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white/90">
              📊 મોબાઈલ પર લાઈવ નફો
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white/90">
              📶 ૧૦૦% ઓફલાઈન સપોર્ટ
            </div>
          </div>
        </div>

        {/* Assurance points */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/60">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            Zero Setup Downtime
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            Free Menu Digitization
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            1-on-1 Staff Training
          </span>
        </div>
      </div>
    </section>
  );
}
