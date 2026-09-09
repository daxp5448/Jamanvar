"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, ShieldCheck } from "lucide-react";
import { HeroProductVisual } from "./HeroProductVisual";

interface HeroProps {
  onOpenDemo: () => void;
}

export function Hero({ onOpenDemo }: HeroProps) {
  return (
    <section className="relative pt-24 sm:pt-36 pb-12 md:pt-40 md:pb-28 overflow-hidden bg-jamanvar-cream-100 bg-subtle-pattern">
      {/* Restrained decorative ambient glows */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[350px] sm:w-[700px] h-[200px] sm:h-[350px] bg-jamanvar-saffron-300/15 blur-[100px] sm:blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Subtle Section Watermark behind Hero on desktop */}
      <div className="hidden sm:block absolute top-24 left-1/2 -translate-x-1/2 w-[600px] sm:w-[850px] h-[400px] sm:h-[550px] opacity-[0.035] pointer-events-none -z-10">
        <Image
          src="/images/jamanvar/watermark-emblem.png"
          alt=""
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Brand Eyebrow with Gujarati Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-4 sm:mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white border border-jamanvar-saffron-500/30 shadow-subtle text-[11px] sm:text-xs font-bold text-jamanvar-navy-950 max-w-full">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-jamanvar-saffron-500 animate-pulse shrink-0" />
            <span className="font-gujarati text-jamanvar-saffron-700 font-bold truncate">
              સુવિધા સાથે, સ્વાદિષ્ટ વ્યવસાય
            </span>
            <span className="text-jamanvar-navy-900/30 shrink-0">•</span>
            <span className="uppercase tracking-wider text-[9px] sm:text-[10px] text-jamanvar-navy-900/75 truncate">
              Indian POS Suite
            </span>
          </div>
        </motion.div>

        {/* Main Confident Editorial Headline */}
        <div className="text-center max-w-4xl mx-auto mb-5 sm:mb-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-6xl lg:text-7xl font-extrabold text-jamanvar-navy-950 tracking-tight leading-[1.12] sm:leading-[1.08]"
          >
            Run your restaurant.
            <br />
            <span className="font-serif italic font-normal text-jamanvar-saffron-600 block mt-1">
              Without the chaos.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 sm:mt-6 text-sm sm:text-lg lg:text-xl text-jamanvar-navy-900/75 max-w-2xl mx-auto font-normal leading-relaxed px-2"
          >
            Jamanvar brings billing, orders, tables, kitchen operations, inventory and insights together in one simple system.
          </motion.p>
        </div>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3.5 mb-6 sm:mb-8 w-full max-w-xs sm:max-w-none mx-auto"
        >
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-jamanvar-saffron-500 hover:bg-jamanvar-saffron-600 text-white font-extrabold text-sm sm:text-base shadow-saffron flex items-center justify-center gap-2.5 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>Book a Free Demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#product"
            className="w-full sm:w-auto px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl bg-white hover:bg-jamanvar-cream-50 text-jamanvar-navy-900 border border-jamanvar-navy-900/15 font-bold text-sm sm:text-base shadow-subtle flex items-center justify-center gap-2 transition-all duration-200 hover:border-jamanvar-saffron-500/40"
          >
            <span>Explore Jamanvar</span>
            <ChevronDown className="w-4 h-4 text-jamanvar-navy-900/60" />
          </a>
        </motion.div>

        {/* Small Trust Line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-8 sm:mb-14 flex items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold text-jamanvar-navy-900/65 px-4"
        >
          <ShieldCheck className="w-4 h-4 text-jamanvar-green-600 inline-block shrink-0" />
          <span>Built for modern restaurants, cafés, and food businesses across India.</span>
        </motion.div>

        {/* Floating Product Visual with Responsive Framing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="w-full"
        >
          <HeroProductVisual />
        </motion.div>
      </div>
    </section>
  );
}
