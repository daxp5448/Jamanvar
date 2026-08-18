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
    <section className="py-16 md:py-36 bg-jamanvar-navy-950 text-white relative overflow-hidden border-t border-white/10">
      {/* Restrained saffron glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-jamanvar-saffron-500/18 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-subtle-pattern-dark opacity-30 pointer-events-none" />

      {/* Large Dark Section Watermark on desktop */}
      <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[450px] sm:h-[600px] opacity-[0.045] pointer-events-none">
        <Image
          src="/images/jamanvar/watermark-emblem.png"
          alt=""
          fill
          className="object-contain filter invert brightness-200"
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Official Large Brand Logo Presentation in Luxury Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.4 }}
          className="flex justify-center mb-6 sm:mb-8"
        >
          <div className="relative p-1.5 sm:p-2 rounded-3xl bg-gradient-to-b from-jamanvar-saffron-400 to-jamanvar-navy-900 shadow-2xl">
            <div className="px-6 py-3 sm:px-8 sm:py-4 rounded-2xl overflow-hidden bg-jamanvar-cream-50 flex items-center justify-center">
              <Image
                src="/images/jamanvar/brand-logo-transparent.png"
                alt="Jamanvar by Kelviontech official logo"
                width={240}
                height={78}
                className="h-12 sm:h-20 w-auto object-contain"
              />
            </div>
          </div>
        </motion.div>

        {/* Small Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/10 border border-white/15 text-[11px] sm:text-xs font-bold text-jamanvar-saffron-400 mb-4 sm:mb-5 backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span className="uppercase tracking-widest text-[9px] sm:text-[11px]">READY TO SIMPLIFY YOUR RESTAURANT?</span>
        </motion.div>

        {/* Large Editorial Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="text-3xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-4 sm:mb-6"
        >
          Let Jamanvar
          <br />
          <span className="font-serif italic font-normal text-jamanvar-saffron-400">
            run the busy work.
          </span>
        </motion.h2>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-sm sm:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 font-normal px-2"
        >
          See how Jamanvar can fit into your restaurant operations. Get a tailored live demo on your menu structure today.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-14 w-full max-w-xs sm:max-w-none mx-auto"
        >
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto px-8 py-3.5 sm:px-9 sm:py-4 rounded-xl bg-jamanvar-saffron-500 hover:bg-jamanvar-saffron-600 text-white font-extrabold text-sm sm:text-base shadow-saffron flex items-center justify-center gap-2.5 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>Book a Free Demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 text-jamanvar-saffron-400" />
            <span>Talk to Jamanvar Team</span>
          </button>
        </motion.div>

        {/* Royal Gujarati Hospitality Tribute Box */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="p-6 sm:p-12 rounded-3xl bg-jamanvar-navy-900/90 border border-jamanvar-saffron-500/40 shadow-2xl text-center relative overflow-hidden backdrop-blur-md max-w-4xl mx-auto mb-8 sm:mb-10"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-jamanvar-saffron-500/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-jamanvar-saffron-300 mb-2 sm:mb-3">
            <Star className="w-3.5 h-3.5 fill-jamanvar-saffron-400 text-jamanvar-saffron-400" />
            <span>ગુજરાતી આતિથ્ય અને આધુનિક ટેકનોલોજીનું ગૌરવ</span>
          </div>

          <h3 className="text-xl sm:text-4xl font-gujarati font-extrabold text-white leading-snug mb-3 sm:mb-4">
            “જ્યાં સ્વાદ અને સત્કાર છે, ત્યાં જમણવાર છે.”
          </h3>

          <p className="text-xs sm:text-base font-gujarati text-white/80 max-w-2xl mx-auto leading-relaxed mb-4 sm:mb-6">
            તમારા રેસ્ટોરન્ટના દરેક ટેબલ, ઓર્ડર, કિચન અને ગ્રાહક સેવાને એક તાંતણે બાંધીને વ્યવસાયને સરળ અને નફાકારક બનાવતું સર્વશ્રેષ્ઠ ગુજરાતી POS સોફ્ટવેર.
          </p>

          <div className="brass-divider-dark max-w-lg mx-auto mb-4 sm:mb-6" />

          {/* Gujarati Feature Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 text-[11px] sm:text-xs font-gujarati">
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
        </motion.div>

        {/* Assurance points */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[11px] sm:text-xs text-white/60"
        >
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
        </motion.div>
      </div>
    </section>
  );
}
