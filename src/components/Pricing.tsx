"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles, HelpCircle } from "lucide-react";
import { PRICING_PLANS } from "@/lib/data";
import { cn } from "@/lib/utils";

interface PricingProps {
  onOpenDemo: () => void;
}

export function Pricing({ onOpenDemo }: PricingProps) {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-24 md:py-36 bg-jamanvar-cream-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block text-xs font-extrabold uppercase tracking-widest text-jamanvar-saffron-600 mb-3">
            SIMPLE, TRANSPARENT PRICING
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-jamanvar-navy-950 tracking-tight leading-tight mb-4">
            Predictable plans. No hidden fees.
          </h2>
          <p className="text-base sm:text-lg text-jamanvar-navy-900/70 max-w-xl mx-auto">
            Choose the plan that fits your restaurant scale. Upgrade, downgrade, or pause anytime with transparent Indian Rupee pricing.
          </p>

          {/* Billing Interval Switcher */}
          <div className="mt-8 inline-flex items-center gap-3 p-1.5 rounded-full bg-white border border-jamanvar-navy-900/10 shadow-subtle">
            <button
              onClick={() => setIsAnnual(false)}
              className={cn(
                "px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer",
                !isAnnual
                  ? "bg-jamanvar-navy-900 text-white shadow-sm"
                  : "text-jamanvar-navy-900/60 hover:text-jamanvar-navy-950"
              )}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={cn(
                "px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer",
                isAnnual
                  ? "bg-jamanvar-saffron-500 text-white shadow-saffron-sm"
                  : "text-jamanvar-navy-900/60 hover:text-jamanvar-navy-950"
              )}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded-full uppercase">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* 3-Tier Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isHighlighted = plan.highlighted;
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={cn(
                  "rounded-3xl p-8 flex flex-col justify-between transition-all duration-200 relative",
                  isHighlighted
                    ? "bg-jamanvar-navy-950 text-white border-2 border-jamanvar-saffron-500 shadow-2xl scale-105 z-10"
                    : "bg-white text-jamanvar-navy-950 border border-jamanvar-navy-900/10 shadow-card"
                )}
              >
                {/* Popular Badge */}
                {isHighlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-jamanvar-saffron-500 text-white text-[10px] font-extrabold tracking-wider uppercase shadow-saffron">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={cn(
                        "text-xs font-mono font-bold tracking-widest uppercase",
                        isHighlighted ? "text-jamanvar-saffron-300" : "text-jamanvar-navy-900/40"
                      )}
                    >
                      {plan.tier}
                    </span>
                  </div>

                  <h3
                    className={cn(
                      "text-2xl font-extrabold mb-2",
                      isHighlighted ? "text-white" : "text-jamanvar-navy-950"
                    )}
                  >
                    {plan.name}
                  </h3>

                  <p
                    className={cn(
                      "text-xs leading-relaxed mb-6 min-h-[36px]",
                      isHighlighted ? "text-white/70" : "text-jamanvar-navy-900/70"
                    )}
                  >
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-jamanvar-navy-900/10">
                    <div className="flex items-baseline gap-1">
                      <span
                        className={cn(
                          "text-4xl font-black font-mono",
                          isHighlighted ? "text-white" : "text-jamanvar-navy-950"
                        )}
                      >
                        {price}
                      </span>
                      {typeof price === "string" && price.startsWith("₹") && (
                        <span
                          className={cn(
                            "text-xs",
                            isHighlighted ? "text-white/60" : "text-jamanvar-navy-900/60"
                          )}
                        >
                          / month (billed {isAnnual ? "annually" : "monthly"})
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs">
                        <div
                          className={cn(
                            "w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5",
                            isHighlighted
                              ? "bg-jamanvar-saffron-500/20 text-jamanvar-saffron-400"
                              : "bg-jamanvar-green-100 text-jamanvar-green-700"
                          )}
                        >
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span
                          className={cn(
                            isHighlighted ? "text-white/80" : "text-jamanvar-navy-900/80"
                          )}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Plan CTA */}
                <button
                  onClick={onOpenDemo}
                  className={cn(
                    "w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer",
                    isHighlighted
                      ? "bg-jamanvar-saffron-500 hover:bg-jamanvar-saffron-600 text-white shadow-saffron"
                      : "bg-jamanvar-navy-900 hover:bg-jamanvar-navy-800 text-white"
                  )}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Note */}
        <div className="mt-12 text-center text-xs text-jamanvar-navy-900/50">
          All pricing includes cloud hosting, regular GST compliance updates, and standard customer support.
        </div>
      </div>
    </section>
  );
}
