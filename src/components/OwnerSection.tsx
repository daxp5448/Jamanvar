"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Zap, Compass, TrendingUp, Heart } from "lucide-react";

export function OwnerSection() {
  const editorialPoints = [
    {
      number: "01",
      title: "Serve faster.",
      subtitle: "Reduce unnecessary steps during busy hours.",
      description:
        "Every second saved between taking an order, printing a KOT in the kitchen, and generating a split bill translates into happier guests and faster table turns.",
      icon: Zap,
      stat: "-4.5 min",
      statLabel: "Average Service Delay",
    },
    {
      number: "02",
      title: "Know your business.",
      subtitle: "See what is selling, when it is selling and how your restaurant is performing.",
      description:
        "Access your live sales numbers, peak rush hours, and raw material inventory deductions anytime from your mobile phone. No waiting for manual end-of-day tallying.",
      icon: Compass,
      stat: "100% Live",
      statLabel: "Owner Visibility",
    },
    {
      number: "03",
      title: "Grow with confidence.",
      subtitle: "Use real operational data to make better decisions.",
      description:
        "Whether opening a second branch, redesigning your menu pricing, or optimizing staff shifts, rely on factual operational data rather than guesswork.",
      icon: TrendingUp,
      stat: "+22%",
      statLabel: "Average Profit Margin Lift",
    },
  ];

  return (
    <section className="py-24 md:py-36 bg-jamanvar-cream-100 border-t border-jamanvar-navy-900/10 relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute -bottom-10 -right-20 w-[600px] h-[400px] opacity-[0.035] pointer-events-none">
        <Image
          src="/images/jamanvar/watermark-emblem.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-jamanvar-saffron-600 mb-3">
            <Heart className="w-3.5 h-3.5 fill-jamanvar-saffron-500" />
            <span>BUILT FOR RESTAURANT PROPRIETORS</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-jamanvar-navy-950 tracking-tight leading-[1.08]">
            Your restaurant is <span className="font-serif italic font-normal text-jamanvar-saffron-600">busy enough.</span>
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-jamanvar-navy-900/75 leading-relaxed max-w-2xl font-normal">
            Jamanvar handles the operational details so you can focus on the food, the people, and the hospitality experience.
          </p>
        </div>

        {/* Three Large Editorial Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {editorialPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-jamanvar-saffron-500/20 shadow-card flex flex-col justify-between hover:border-jamanvar-saffron-500/50 transition-all hover:shadow-elevated"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-3xl font-black font-mono text-jamanvar-navy-900/20">
                      {point.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-jamanvar-cream-100 border border-jamanvar-saffron-500/20 flex items-center justify-center text-jamanvar-navy-900 shadow-sm">
                      <Icon className="w-6 h-6 text-jamanvar-saffron-600" />
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-jamanvar-navy-950 mb-2 tracking-tight">
                    {point.title}
                  </h3>

                  <div className="text-xs font-bold text-jamanvar-saffron-700 uppercase tracking-wider mb-4">
                    {point.subtitle}
                  </div>

                  <p className="text-sm text-jamanvar-navy-900/70 leading-relaxed">
                    {point.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-jamanvar-navy-900/10">
                  <span className="text-[10px] uppercase tracking-wider text-jamanvar-navy-900/50 font-bold block">
                    {point.statLabel}
                  </span>
                  <div className="text-2xl font-black text-jamanvar-navy-950 mt-0.5">
                    {point.stat}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Gujarati Heritage Hospitality Banner */}
        <div className="mt-16 sm:mt-24 p-8 sm:p-12 rounded-3xl bg-white border border-jamanvar-saffron-500/30 shadow-card text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="relative h-14 sm:h-16 w-auto mx-auto mb-4 flex items-center justify-center">
            <Image
              src="/images/jamanvar/brand-logo-transparent.png"
              alt="Logo"
              width={200}
              height={65}
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </div>

          <p className="text-2xl sm:text-3xl font-gujarati font-bold text-jamanvar-navy-950 leading-relaxed mb-3">
            “સુવિધા સાથે, સ્વાદિષ્ટ વ્યવસાય.”
          </p>

          <p className="text-sm sm:text-base font-gujarati text-jamanvar-navy-900/75 max-w-2xl mx-auto leading-relaxed mb-4">
            જ્યાં દરેક ઓર્ડર સમયસર બને, ગ્રાહક સંતુષ્ટ થાય અને હિસાબ-કિતાબમાં સો ટકા પારદર્શિતા રહે.
          </p>

          <div className="brass-divider max-w-md mx-auto mb-4" />

          <span className="text-xs font-bold uppercase tracking-widest text-jamanvar-saffron-700">
            Convenience in operations • Excellence in hospitality • The Jamanvar Commitment
          </span>
        </div>
      </div>
    </section>
  );
}
