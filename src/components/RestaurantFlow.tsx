"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClipboardList,
  Flame,
  LayoutGrid,
  Receipt,
  CreditCard,
  BarChart3,
  CheckCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

const FLOW_STEPS = [
  {
    id: "order",
    step: "01",
    label: "ORDER",
    title: "Instant Captain & QR Table Ordering",
    desc: "Captains punch orders table-side on Android handhelds, or guests scan table QR codes. Items, seat numbers, and kitchen notes are captured instantly.",
    icon: ClipboardList,
    metric: "< 15 sec",
    metricLabel: "Order Punching Time",
    detail: "Zero misplaced paper slips or communication lag with the kitchen.",
  },
  {
    id: "kitchen",
    step: "02",
    label: "KITCHEN",
    title: "Real-Time KDS & KOT Routing",
    desc: "Orders instantly split and route to specific kitchen stations (Tandoor, Curry, Bar, Desserts) on screens or thermal printers.",
    icon: Flame,
    metric: "0 sec",
    metricLabel: "Transmission Lag",
    detail: "Color-coded prep timers alert chefs before orders exceed target times.",
  },
  {
    id: "table",
    step: "03",
    label: "TABLE",
    title: "Visual Table Floor Orchestration",
    desc: "Live color-coded status of all tables (Available, Occupied, Running KOT, Billed). Manage reservations and merge tables with 1 tap.",
    icon: LayoutGrid,
    metric: "+35%",
    metricLabel: "Table Turn Velocity",
    detail: "Waitstaff knows exact dining duration and pending orders.",
  },
  {
    id: "bill",
    step: "04",
    label: "BILL",
    title: "1-Click Split & GST Invoicing",
    desc: "Generate split bills by seat or item, apply discounts with OTP authorization, and auto-calculate CGST/SGST/Service Charge.",
    icon: Receipt,
    metric: "100%",
    metricLabel: "GST Compliance",
    detail: "E-invoicing and customized brand receipt headers.",
  },
  {
    id: "payment",
    step: "05",
    label: "PAYMENT",
    title: "Dynamic UPI & Multi-Mode Settle",
    desc: "Display dynamic table-specific UPI QR on thermal receipts or accept cards/cash. Reconciliation happens in real time.",
    icon: CreditCard,
    metric: "Instant",
    metricLabel: "UPI Verification",
    detail: "Direct soundbox and screen confirmation for cashier.",
  },
  {
    id: "insight",
    step: "06",
    label: "INSIGHT",
    title: "Owner Mobile App & Daily P&L",
    desc: "Every settlement feeds live into your phone. See net sales, top sellers, category margins, and raw material deductions.",
    icon: BarChart3,
    metric: "Live 24/7",
    metricLabel: "Owner Sync",
    detail: "Automated end-of-day WhatsApp summary for proprietors.",
  },
];

export function RestaurantFlow() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % FLOW_STEPS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const current = FLOW_STEPS[activeStepIndex];

  return (
    <section id="how-it-works" className="py-16 md:py-28 bg-jamanvar-cream-50 border-y border-jamanvar-navy-900/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow and Headline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
        >
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-jamanvar-saffron-600 mb-2 sm:mb-3">
            ONE RESTAURANT. MANY MOVING PARTS.
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-jamanvar-navy-950 tracking-tight leading-tight mb-3 sm:mb-4">
            Everything connected.
            <br />
            <span className="text-jamanvar-navy-900/80">Nothing complicated.</span>
          </h2>
          <p className="text-xs sm:text-base text-jamanvar-navy-900/70 max-w-xl mx-auto leading-relaxed">
            From the first order to the final report, Jamanvar keeps your restaurant operations moving together without friction.
          </p>
        </motion.div>

        {/* 6-Stage Timeline Nodes */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="relative mb-8 sm:mb-10"
        >
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-6 right-6 -translate-y-1/2 h-1 bg-jamanvar-navy-900/10 -z-0">
            <motion.div
              className="h-full bg-jamanvar-saffron-500 origin-left"
              animate={{ width: `${((activeStepIndex + 1) / FLOW_STEPS.length) * 100}%` }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </div>

          {/* Flow Step Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-4 relative z-10">
            {FLOW_STEPS.map((item, idx) => {
              const Icon = item.icon;
              const isActive = idx === activeStepIndex;

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setActiveStepIndex(idx);
                  }}
                  className={cn(
                    "p-3 sm:p-4 rounded-2xl text-left transition-all duration-200 cursor-pointer border flex flex-col justify-between min-h-[95px] sm:min-h-[115px]",
                    isActive
                      ? "bg-jamanvar-navy-900 text-white border-jamanvar-navy-900 shadow-xl scale-105"
                      : "bg-white text-jamanvar-navy-950 border-jamanvar-navy-900/10 hover:border-jamanvar-saffron-500/50 hover:bg-jamanvar-cream-100/70 shadow-sm"
                  )}
                >
                  <div className="flex items-center justify-between mb-2 sm:mb-3 w-full">
                    <span
                      className={cn(
                        "text-[9px] sm:text-[10px] font-mono font-bold px-1.5 sm:px-2 py-0.5 rounded",
                        isActive
                          ? "bg-jamanvar-saffron-500 text-white"
                          : "bg-jamanvar-navy-900/5 text-jamanvar-navy-900/70"
                      )}
                    >
                      {item.step}
                    </span>
                    <Icon
                      className={cn(
                        "w-3.5 h-3.5 sm:w-4 sm:h-4",
                        isActive ? "text-jamanvar-saffron-400" : "text-jamanvar-navy-900/40"
                      )}
                    />
                  </div>

                  <div>
                    <div
                      className={cn(
                        "text-[11px] sm:text-xs font-black tracking-wider uppercase",
                        isActive ? "text-white" : "text-jamanvar-navy-950"
                      )}
                    >
                      {item.label}
                    </div>
                    <div
                      className={cn(
                        "text-[10px] sm:text-[11px] truncate mt-0.5",
                        isActive ? "text-white/75" : "text-jamanvar-navy-900/60"
                      )}
                    >
                      {item.title.split(" ")[0]}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Detailed Stage Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl border border-jamanvar-navy-900/10 p-5 sm:p-8 lg:p-10 shadow-card"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              {/* Left explanation */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <span className="text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-jamanvar-saffron-100 text-jamanvar-saffron-700">
                    STAGE {current.step} OF 06
                  </span>
                  <span className="text-[10px] sm:text-xs text-jamanvar-navy-900/60 uppercase tracking-wider font-bold">
                    {current.label} PIPELINE
                  </span>
                </div>

                <h3 className="text-xl sm:text-3xl font-extrabold text-jamanvar-navy-950 mb-2 sm:mb-3 tracking-tight">
                  {current.title}
                </h3>

                <p className="text-xs sm:text-base text-jamanvar-navy-900/75 leading-relaxed mb-4 sm:mb-6">
                  {current.desc}
                </p>

                <div className="flex items-center gap-2.5 sm:gap-3 p-3.5 sm:p-4 bg-jamanvar-cream-100 rounded-xl border border-jamanvar-navy-900/10 text-xs text-jamanvar-navy-900 font-medium">
                  <CheckCircle className="w-4 h-4 text-jamanvar-green-600 shrink-0" />
                  <span className="text-[11px] sm:text-xs">{current.detail}</span>
                </div>
              </div>

              {/* Right Metric Card */}
              <div className="lg:col-span-5 bg-jamanvar-navy-950 text-white rounded-2xl p-5 sm:p-8 border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-jamanvar-saffron-500/15 rounded-full blur-2xl pointer-events-none" />
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-white/50 font-semibold block mb-1.5 sm:mb-2">
                  {current.metricLabel}
                </span>
                <div className="text-3xl sm:text-5xl font-black text-jamanvar-saffron-400 mb-1.5 sm:mb-2">
                  {current.metric}
                </div>
                <p className="text-[11px] sm:text-xs text-white/70 leading-relaxed">
                  Engineered specifically for busy Indian restaurant operations during peak dining rush.
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
