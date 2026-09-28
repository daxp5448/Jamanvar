"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ClipboardList, CreditCard, Flame, LayoutGrid, Receipt, BarChart3, CheckCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { WORKFLOW_STAGES } from "@/content/workflow";
import type { ProductFlow as ProductFlowContent } from "@/content/productDetails";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  order: ClipboardList,
  pos: CreditCard,
  kitchen: Flame,
  table: LayoutGrid,
  bill: Receipt,
  insight: BarChart3,
};

export function ProductFlow({ productName, flow }: { productName: string; flow: ProductFlowContent }) {
  const highlighted = Object.keys(flow.stageNotes);
  const firstIdx = Math.max(0, WORKFLOW_STAGES.findIndex((s) => highlighted.includes(s.id)));
  const [active, setActive] = useState(firstIdx);
  const current = WORKFLOW_STAGES[active];
  const isMine = highlighted.includes(current.id);

  return (
    <section className="py-12 sm:py-20 bg-jamanvar-cream-50 border-y border-jamanvar-navy-900/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-jamanvar-saffron-600 mb-3 block">
            ONE RESTAURANT. MANY MOVING PARTS.
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-jamanvar-navy-950 tracking-tight mb-3">
            {flow.title}
          </h2>
          <p className="text-sm sm:text-base text-jamanvar-navy-900/75 leading-relaxed">{flow.intro}</p>
        </div>

        {/* Stage buttons */}
        <div className="relative mb-6 sm:mb-8">
          <div className="hidden lg:block absolute top-1/2 left-6 right-6 -translate-y-1/2 h-1 bg-jamanvar-navy-900/10">
            <motion.div
              className="h-full bg-jamanvar-saffron-500 origin-left"
              animate={{ width: `${((active + 1) / WORKFLOW_STAGES.length) * 100}%` }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-4 relative z-10">
            {WORKFLOW_STAGES.map((stage, idx) => {
              const Icon = ICONS[stage.id] ?? ClipboardList;
              const isActive = idx === active;
              const mine = highlighted.includes(stage.id);
              return (
                <button
                  key={stage.id}
                  onClick={() => setActive(idx)}
                  aria-pressed={isActive}
                  className={cn(
                    "p-3 sm:p-4 rounded-2xl text-left transition-all duration-200 cursor-pointer border flex flex-col justify-between min-h-[100px] sm:min-h-[120px] relative focus:outline-none focus-visible:ring-2 focus-visible:ring-jamanvar-saffron-500",
                    isActive
                      ? "bg-jamanvar-navy-900 text-white border-jamanvar-navy-900 shadow-xl scale-[1.03]"
                      : mine
                      ? "bg-jamanvar-saffron-50 text-jamanvar-navy-950 border-jamanvar-saffron-500/60 hover:bg-jamanvar-saffron-100/70 shadow-sm"
                      : "bg-white text-jamanvar-navy-950 border-jamanvar-navy-900/10 hover:border-jamanvar-saffron-500/50 shadow-sm"
                  )}
                >
                  <div className="flex items-center justify-between mb-2 sm:mb-3 w-full">
                    <span
                      className={cn(
                        "text-[9px] sm:text-[10px] font-mono font-bold px-1.5 sm:px-2 py-0.5 rounded",
                        isActive ? "bg-jamanvar-saffron-500 text-white" : "bg-jamanvar-navy-900/5 text-jamanvar-navy-900/70"
                      )}
                    >
                      {stage.step}
                    </span>
                    <Icon className={cn("w-3.5 h-3.5 sm:w-4 sm:h-4", isActive ? "text-jamanvar-saffron-400" : "text-jamanvar-navy-900/40")} />
                  </div>
                  <div>
                    <div className="text-[11px] sm:text-xs font-black tracking-wider uppercase">{stage.label}</div>
                    {mine && (
                      <div
                        className={cn(
                          "text-[9px] sm:text-[10px] font-bold uppercase tracking-wider mt-1",
                          isActive ? "text-jamanvar-saffron-400" : "text-jamanvar-saffron-700"
                        )}
                      >
                        {productName.length > 16 ? "This product" : productName}
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Stage detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-3xl border border-jamanvar-navy-900/10 p-5 sm:p-8 lg:p-10 shadow-card"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full bg-jamanvar-saffron-100 text-jamanvar-saffron-700">
                    STAGE {current.step} OF 0{WORKFLOW_STAGES.length}
                  </span>
                  <span className="text-[10px] sm:text-xs text-jamanvar-navy-900/60 uppercase tracking-wider font-bold">
                    {current.label}
                  </span>
                </div>
                <h3 className="text-xl sm:text-3xl font-extrabold text-jamanvar-navy-950 mb-3 tracking-tight">{current.title}</h3>
                <p className="text-xs sm:text-base text-jamanvar-navy-900/75 leading-relaxed mb-5">{current.description}</p>

                {isMine ? (
                  <div className="p-4 rounded-xl bg-jamanvar-saffron-50 border border-jamanvar-saffron-500/40">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-jamanvar-saffron-700 block mb-1.5">
                      What {productName} does here
                    </span>
                    <p className="text-xs sm:text-sm text-jamanvar-navy-900/85 leading-relaxed">{flow.stageNotes[current.id]}</p>
                  </div>
                ) : (
                  <div className="flex items-center gap-2.5 p-3.5 sm:p-4 bg-jamanvar-cream-100 rounded-xl border border-jamanvar-navy-900/10 text-xs text-jamanvar-navy-900 font-medium">
                    <CheckCircle className="w-4 h-4 text-jamanvar-green-600 shrink-0" />
                    <span className="text-[11px] sm:text-xs">{current.detail}</span>
                  </div>
                )}

                {!isMine && (
                  <Link
                    href={current.href}
                    className="mt-5 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-jamanvar-navy-900 hover:text-jamanvar-saffron-700"
                  >
                    <span>See the product behind this stage</span>
                    <ArrowRight className="w-3.5 h-3.5 text-jamanvar-saffron-500" />
                  </Link>
                )}
              </div>

              <div className="lg:col-span-5 bg-jamanvar-navy-950 text-white rounded-2xl p-5 sm:p-8 border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-jamanvar-saffron-500/15 rounded-full blur-2xl pointer-events-none" />
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-white/50 font-semibold block mb-2">
                  {current.metricLabel}
                </span>
                <div className="text-3xl sm:text-5xl font-black text-jamanvar-saffron-400 mb-2">{current.metric}</div>
                <p className="text-[11px] sm:text-xs text-white/70 leading-relaxed">{current.detail}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
