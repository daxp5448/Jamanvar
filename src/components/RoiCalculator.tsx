"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, ArrowRight } from "lucide-react";
import { formatINR } from "@/lib/utils";

interface RoiCalculatorProps {
  onOpenDemo: () => void;
}

export function RoiCalculator({ onOpenDemo }: RoiCalculatorProps) {
  const [tables, setTables] = useState(25);
  const [avgTicket, setAvgTicket] = useState(950);
  const [dailyTurns, setDailyTurns] = useState(3.5);

  const extraDailyTurnRevenue = Math.round(tables * 0.45 * avgTicket);
  const monthlyExtraRevenue = extraDailyTurnRevenue * 30;
  const wastageSavingsMonthly = Math.round((tables * avgTicket * dailyTurns * 30) * 0.038);

  return (
    <section className="py-16 md:py-32 bg-jamanvar-cream-50 border-t border-jamanvar-navy-900/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text & Interactive Sliders (6 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-jamanvar-saffron-500/30 text-xs font-bold text-jamanvar-navy-950 mb-3 shadow-subtle">
              <Calculator className="w-3.5 h-3.5 text-jamanvar-saffron-600" />
              <span className="uppercase tracking-widest text-[9px] sm:text-[10px]">RESTAURANT ROI SIMULATOR</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-jamanvar-navy-950 tracking-tight leading-tight mb-3 sm:mb-4">
              Calculate your restaurant's <span className="font-serif italic font-normal text-jamanvar-saffron-600">growth uplift.</span>
            </h2>

            <p className="text-xs sm:text-base text-jamanvar-navy-900/70 leading-relaxed mb-6 sm:mb-8">
              See the measurable impact of 3-second billing, instant KDS routing, and automated recipe inventory on your monthly bottom line.
            </p>

            {/* Slider Controls */}
            <div className="space-y-5 sm:space-y-6 bg-white p-5 sm:p-6 rounded-3xl border border-jamanvar-navy-900/10 shadow-card">
              {/* Slider 1: Table Count */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-jamanvar-navy-950 uppercase tracking-wider">
                    Number of Dine-in Tables
                  </label>
                  <span className="text-xs sm:text-sm font-black font-mono text-jamanvar-saffron-600 bg-jamanvar-saffron-50 px-2.5 py-0.5 rounded-lg border border-jamanvar-saffron-500/20">
                    {tables} Tables
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="100"
                  step="1"
                  value={tables}
                  onChange={(e) => setTables(Number(e.target.value))}
                  className="w-full accent-jamanvar-saffron-500 h-2 bg-jamanvar-cream-200 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[9px] sm:text-[10px] text-jamanvar-navy-900/40 mt-1 font-mono">
                  <span>5 Tables (Café)</span>
                  <span>50 Tables (Large Dine-in)</span>
                  <span>100+ Tables</span>
                </div>
              </div>

              {/* Slider 2: Average Order Value (INR) */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-jamanvar-navy-950 uppercase tracking-wider">
                    Average Bill Value per Table
                  </label>
                  <span className="text-xs sm:text-sm font-black font-mono text-jamanvar-saffron-600 bg-jamanvar-saffron-50 px-2.5 py-0.5 rounded-lg border border-jamanvar-saffron-500/20">
                    ₹{avgTicket}
                  </span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="3500"
                  step="50"
                  value={avgTicket}
                  onChange={(e) => setAvgTicket(Number(e.target.value))}
                  className="w-full accent-jamanvar-saffron-500 h-2 bg-jamanvar-cream-200 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[9px] sm:text-[10px] text-jamanvar-navy-900/40 mt-1 font-mono">
                  <span>₹200 (QSR)</span>
                  <span>₹950 (Casual)</span>
                  <span>₹3,500 (Fine Dine)</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Calculated Output Card (6 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="lg:col-span-6"
          >
            <div className="p-6 sm:p-10 rounded-3xl bg-jamanvar-navy-950 text-white border border-jamanvar-saffron-500/40 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-jamanvar-saffron-500/15 rounded-full blur-3xl pointer-events-none" />

              <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-widest uppercase text-jamanvar-saffron-400 block mb-1.5 sm:mb-2">
                ILLUSTRATIVE ROI ESTIMATE
              </span>

              <div className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-2">
                +{formatINR(monthlyExtraRevenue + wastageSavingsMonthly)}
                <span className="text-[11px] sm:text-xs font-normal text-white/50 block mt-1">
                  Estimated extra profit &amp; savings per month
                </span>
              </div>

              <div className="brass-divider-dark my-4 sm:my-6" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8 text-xs">
                <div className="p-3.5 sm:p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-white/50 text-[9px] sm:text-[10px] uppercase font-bold block">Faster Table Turns</span>
                  <div className="text-base sm:text-lg font-bold text-jamanvar-saffron-400 mt-0.5">
                    +{formatINR(monthlyExtraRevenue)}
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-white/60 mt-0.5">From +0.45 extra turns/day</p>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-white/50 text-[9px] sm:text-[10px] uppercase font-bold block">Wastage Reduction</span>
                  <div className="text-base sm:text-lg font-bold text-emerald-400 mt-0.5">
                    +{formatINR(wastageSavingsMonthly)}
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-white/60 mt-0.5">Recipe inventory tracking</p>
                </div>
              </div>

              <button
                onClick={onOpenDemo}
                className="w-full py-3.5 sm:py-4 px-5 sm:px-6 rounded-xl bg-jamanvar-saffron-500 hover:bg-jamanvar-saffron-600 text-white font-extrabold text-xs sm:text-sm shadow-saffron flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer"
              >
                <span>Unlock This Growth • Book Free Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="mt-3 sm:mt-4 text-[10px] sm:text-[11px] text-white/40 leading-relaxed">
                These calculations are illustrative estimates based on the inputs above and should not be considered a guarantee of revenue, savings or profitability. Actual results vary by restaurant, pricing, order volume, staffing and operating conditions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
