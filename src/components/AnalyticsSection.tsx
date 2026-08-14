"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Flame,
  Clock,
  LayoutGrid,
  DollarSign,
  ArrowUpRight,
  Sparkles,
  PieChart,
  ShoppingBag,
} from "lucide-react";
import { formatINR } from "@/lib/utils";

export function AnalyticsSection() {
  const metrics = [
    {
      label: "TODAY'S REVENUE",
      value: "₹48,250",
      change: "+18.4%",
      changeType: "positive",
      subtext: "vs previous Friday (₹40,750)",
      icon: DollarSign,
    },
    {
      label: "ORDERS SETTLED",
      value: "127",
      change: "Avg ₹842 / order",
      changeType: "neutral",
      subtext: "98 Dine-in • 29 Takeaway",
      icon: ShoppingBag,
    },
    {
      label: "TOP SELLER DISH",
      value: "Paneer Tikka",
      change: "48 portions",
      changeType: "positive",
      subtext: "₹16,320 gross revenue generated",
      icon: Flame,
    },
    {
      label: "PEAK DINING HOUR",
      value: "8:00 PM",
      change: "₹14,200/hr",
      changeType: "positive",
      subtext: "38 active tickets handled with 0 lag",
      icon: Clock,
    },
    {
      label: "TABLE OCCUPANCY",
      value: "81%",
      change: "34 / 42 Tables",
      changeType: "positive",
      subtext: "Avg table dining time: 48 mins",
      icon: LayoutGrid,
    },
  ];

  return (
    <section id="analytics" className="py-24 md:py-36 bg-jamanvar-navy-950 text-white relative overflow-hidden border-t border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-jamanvar-saffron-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-subtle-pattern-dark opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-jamanvar-saffron-400 mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="uppercase tracking-widest text-[10px]">BUSINESS INTELLIGENCE &amp; AUDIT</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            Every order tells you <span className="font-serif italic font-normal text-jamanvar-saffron-400">something.</span>
          </h2>

          <p className="mt-6 text-base sm:text-xl text-white/70 leading-relaxed font-normal">
            Jamanvar automatically transforms daily counter receipts into actionable profit insights, eliminating manual spreadsheets forever.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="p-6 sm:p-8 rounded-3xl bg-jamanvar-navy-900/90 border border-white/10 hover:border-jamanvar-saffron-500/50 transition-all group shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-white/50">
                    {metric.label}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-jamanvar-saffron-400 group-hover:bg-jamanvar-saffron-500 group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-2">
                  {metric.value}
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                    {metric.change}
                  </span>
                </div>

                <p className="text-xs text-white/50 leading-relaxed">
                  {metric.subtext}
                </p>
              </motion.div>
            );
          })}

          {/* Deep Insight Highlight Tile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: 0.5 }}
            className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-jamanvar-saffron-600/30 to-jamanvar-navy-900 border border-jamanvar-saffron-500/40 flex flex-col justify-between shadow-2xl"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-jamanvar-saffron-300">
                  SMART AUDIT INSIGHT
                </span>
                <Sparkles className="w-5 h-5 text-jamanvar-saffron-400" />
              </div>
              <h3 className="text-xl font-extrabold text-white mb-2">
                Menu Engineering Alert
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                “Paneer Tikka Angara” has a 72% gross margin and ranks #1 in customer re-orders. Consider bundling it into your weekend chef specials.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs text-jamanvar-saffron-300 font-bold">
              <span>Auto-Generated by Jamanvar Core</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
