"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Receipt,
  Flame,
  LayoutGrid,
  Boxes,
  TrendingUp,
  HeartHandshake,
  Clock,
  CheckCircle2,
  AlertTriangle,
  ArrowUpRight,
  UserCheck,
  Percent,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function Features() {
  const [activeTabTable, setActiveTabTable] = useState("T-07");

  return (
    <section id="features" className="py-20 md:py-32 bg-jamanvar-cream-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-block text-xs font-extrabold uppercase tracking-widest text-jamanvar-saffron-600 mb-3">
            ONE SYSTEM
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-jamanvar-navy-950 tracking-tight leading-tight">
            Everything your restaurant needs.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-jamanvar-navy-900/70 max-w-xl">
            Replace fragmented apps and paper registers with an unified operating system built for Indian hospitality speeds.
          </p>
        </div>

        {/* Asymmetric Editorial Feature Layout */}
        <div className="space-y-12 md:space-y-16">
          {/* Row 1: Large POS & Billing (7 cols) + Kitchen (5 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Feature 01: POS & Billing */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-jamanvar-navy-900/10 shadow-card flex flex-col justify-between">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-jamanvar-navy-900/40">01 / BILLING</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-jamanvar-saffron-100 text-jamanvar-saffron-800 px-2.5 py-1 rounded-full">
                    Lightning 3-Sec Invoicing
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-jamanvar-navy-950 mb-2">
                  POS & Billing
                </h3>
                <p className="text-sm text-jamanvar-navy-900/70 leading-relaxed">
                  Fast, simple billing designed for busy service hours. Split checks, apply customizable tax slabs, and punch items with zero lag.
                </p>
              </div>

              {/* Realistic Micro Billing UI */}
              <div className="bg-jamanvar-cream-50 rounded-2xl p-4 border border-jamanvar-navy-900/10 text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-jamanvar-navy-900/10 font-mono text-[11px] text-jamanvar-navy-900/60">
                  <span>INVOICE #JAM-8924</span>
                  <span>TABLE 12 (DINE-IN)</span>
                </div>

                <div className="py-2.5 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-jamanvar-navy-900">2 × Paneer Butter Masala</span>
                    <span className="font-mono text-jamanvar-navy-900">₹840</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-jamanvar-navy-900">4 × Garlic Butter Naan</span>
                    <span className="font-mono text-jamanvar-navy-900">₹320</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-jamanvar-navy-900">2 × Mango Lassi</span>
                    <span className="font-mono text-jamanvar-navy-900">₹280</span>
                  </div>
                </div>

                <div className="pt-2.5 border-t border-jamanvar-navy-900/10 flex justify-between items-center font-bold text-sm text-jamanvar-navy-950">
                  <span>Total Incl. GST (5%)</span>
                  <span className="text-jamanvar-saffron-600 font-extrabold font-mono">₹1,512</span>
                </div>
              </div>
            </div>

            {/* Feature 02: Kitchen Display & KOT */}
            <div className="lg:col-span-5 bg-jamanvar-navy-950 text-white rounded-3xl p-6 sm:p-8 border border-white/10 shadow-card flex flex-col justify-between">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-white/40">02 / KITCHEN</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 px-2.5 py-1 rounded-full">
                    KDS Real-Time
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  Kitchen
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Send every order to the right place without unnecessary communication gaps. Orders route to kitchen screens and thermal printers instantly.
                </p>
              </div>

              {/* Realistic Micro Kitchen Ticket UI */}
              <div className="bg-jamanvar-navy-900 rounded-2xl p-4 border border-white/10 text-xs">
                <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-jamanvar-saffron-500 text-white font-mono text-[10px] font-bold">
                      KOT #148
                    </span>
                    <span className="font-bold text-white">Table T-07</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-amber-300 font-mono">
                    <Clock className="w-3 h-3" />
                    <span>04:18 elapsed</span>
                  </div>
                </div>

                <div className="py-2.5 space-y-1.5 text-[11px]">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">1 × Dal Makhani</span>
                    <span className="text-white/50 text-[10px] italic">Curry Pass</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">2 × Butter Roti</span>
                    <span className="text-white/50 text-[10px] italic">Tandoor Pass</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-emerald-400 font-medium">
                  <span>Cook Status: In Progress</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-[10px] font-bold">
                    PREPARING
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Tables (5 cols) + Inventory (7 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Feature 03: Tables & Floor Management */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-jamanvar-navy-900/10 shadow-card flex flex-col justify-between">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-jamanvar-navy-900/40">03 / FLOOR</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-jamanvar-green-100 text-jamanvar-green-800 px-2.5 py-1 rounded-full">
                    Live Floor Plan
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-jamanvar-navy-950 mb-2">
                  Tables
                </h3>
                <p className="text-sm text-jamanvar-navy-900/70 leading-relaxed">
                  See table status, orders and service flow at a glance. Merge tables, switch sections, and manage reservations smoothly.
                </p>
              </div>

              {/* Realistic Stylized Floor Plan */}
              <div className="bg-jamanvar-cream-50 rounded-2xl p-3 sm:p-4 border border-jamanvar-navy-900/10">
                <div className="text-[10px] font-bold uppercase tracking-wider text-jamanvar-navy-900/60 mb-2">
                  Main Dining Room Layout
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "T-01", status: "Occupied", bill: "₹1,840", color: "bg-jamanvar-navy-900 text-white" },
                    { id: "T-02", status: "Available", bill: "Clean", color: "bg-white text-jamanvar-navy-900 border border-jamanvar-navy-900/15" },
                    { id: "T-03", status: "Billed", bill: "₹3,420", color: "bg-jamanvar-saffron-500 text-white" },
                    { id: "T-04", status: "Occupied", bill: "₹2,160", color: "bg-jamanvar-navy-900 text-white" },
                    { id: "T-05", status: "Reserved", bill: "8:30 PM", color: "bg-jamanvar-cream-200 text-jamanvar-navy-900" },
                    { id: "T-06", status: "Available", bill: "Clean", color: "bg-white text-jamanvar-navy-900 border border-jamanvar-navy-900/15" },
                  ].map((tbl) => (
                    <div
                      key={tbl.id}
                      className={cn("p-2.5 rounded-xl text-center text-xs flex flex-col justify-between", tbl.color)}
                    >
                      <span className="font-mono font-bold text-xs">{tbl.id}</span>
                      <span className="text-[10px] opacity-80 mt-1">{tbl.status}</span>
                      <span className="font-mono text-[10px] font-bold mt-0.5">{tbl.bill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Feature 04: Inventory & Stock */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-jamanvar-navy-900/10 shadow-card flex flex-col justify-between">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-jamanvar-navy-900/40">04 / INVENTORY</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full">
                    Recipe Auto-Deductions
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-jamanvar-navy-950 mb-2">
                  Inventory
                </h3>
                <p className="text-sm text-jamanvar-navy-900/70 leading-relaxed">
                  Know what is moving, what is running low and what needs attention. Automatically deduct raw ingredients per recipe as orders are punched.
                </p>
              </div>

              {/* Realistic Micro Inventory Stock Table */}
              <div className="bg-jamanvar-cream-50 rounded-2xl p-4 border border-jamanvar-navy-900/10">
                <div className="grid grid-cols-12 text-[10px] font-bold uppercase tracking-wider text-jamanvar-navy-900/50 pb-2 border-b border-jamanvar-navy-900/10">
                  <span className="col-span-5">Raw Material</span>
                  <span className="col-span-3 text-right">Available</span>
                  <span className="col-span-4 text-right">Status</span>
                </div>

                <div className="divide-y divide-jamanvar-navy-900/5 text-xs py-1">
                  <div className="grid grid-cols-12 py-2 items-center">
                    <span className="col-span-5 font-semibold text-jamanvar-navy-900">Malai Paneer</span>
                    <span className="col-span-3 text-right font-mono">14.5 kg</span>
                    <div className="col-span-4 flex justify-end">
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-jamanvar-green-700 bg-jamanvar-green-100 px-2 py-0.5 rounded-full">
                        <CheckCircle2 className="w-2.5 h-2.5" /> Optimal
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 py-2 items-center">
                    <span className="col-span-5 font-semibold text-jamanvar-navy-900">Amul Butter (Unsalted)</span>
                    <span className="col-span-3 text-right font-mono">4.2 kg</span>
                    <div className="col-span-4 flex justify-end">
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
                        <AlertTriangle className="w-2.5 h-2.5" /> Reorder Soon
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 py-2 items-center">
                    <span className="col-span-5 font-semibold text-jamanvar-navy-900">Fresh Mint & Coriander</span>
                    <span className="col-span-3 text-right font-mono">0.8 kg</span>
                    <div className="col-span-4 flex justify-end">
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded-full">
                        Critical Low
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: Analytics (7 cols) + Customers (5 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Feature 05: Analytics */}
            <div className="lg:col-span-7 bg-jamanvar-navy-950 text-white rounded-3xl p-6 sm:p-8 border border-white/10 shadow-card flex flex-col justify-between">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-white/40">05 / ANALYTICS</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-jamanvar-saffron-500/20 text-jamanvar-saffron-300 px-2.5 py-1 rounded-full">
                    Real-Time Sales Intelligence
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  Analytics
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Turn everyday transactions into useful business insights. Track peak dining hours, best-selling dishes, and labor cost ratios from anywhere.
                </p>
              </div>

              {/* Realistic Micro Sales Graph & Bars */}
              <div className="bg-jamanvar-navy-900 rounded-2xl p-4 border border-white/10">
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <span className="text-[10px] text-white/50 uppercase tracking-wider block">Today's Sales Trend</span>
                    <span className="text-xl font-black text-white">₹48,250</span>
                  </div>
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                    +18.4% vs Last Week
                  </span>
                </div>

                {/* Hourly Sales Bar Chart visual */}
                <div className="flex items-end gap-2 h-20 pt-2 border-b border-white/10 pb-2">
                  {[35, 45, 60, 80, 50, 40, 65, 95, 100, 75, 45].map((height, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                      <div
                        style={{ height: `${height}%` }}
                        className={cn(
                          "w-full rounded-t transition-all",
                          i === 8 ? "bg-jamanvar-saffron-500" : "bg-white/20 hover:bg-white/40"
                        )}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-[9px] font-mono text-white/40 pt-1">
                  <span>12 PM</span>
                  <span>4 PM</span>
                  <span className="text-jamanvar-saffron-400 font-bold">8 PM (Peak)</span>
                  <span>11 PM</span>
                </div>
              </div>
            </div>

            {/* Feature 06: Customers & CRM */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-jamanvar-navy-900/10 shadow-card flex flex-col justify-between">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-jamanvar-navy-900/40">06 / CUSTOMERS</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-jamanvar-cream-200 text-jamanvar-navy-900 px-2.5 py-1 rounded-full">
                    Repeat Dining Retention
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-jamanvar-navy-950 mb-2">
                  Customers
                </h3>
                <p className="text-sm text-jamanvar-navy-900/70 leading-relaxed">
                  Understand your customers and build stronger relationships. Track favorite dishes, birthdays, anniversary dates, and loyalty points automatically.
                </p>
              </div>

              {/* Realistic Customer Profile Card */}
              <div className="bg-jamanvar-cream-50 rounded-2xl p-4 border border-jamanvar-navy-900/10 text-xs">
                <div className="flex items-center gap-3 pb-3 border-b border-jamanvar-navy-900/10">
                  <div className="w-10 h-10 rounded-full bg-jamanvar-navy-900 text-white font-bold flex items-center justify-center text-sm">
                    RD
                  </div>
                  <div>
                    <div className="font-bold text-jamanvar-navy-950 text-sm flex items-center gap-1.5">
                      <span>Rohan Desai</span>
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-jamanvar-saffron-100 text-jamanvar-saffron-700">
                        GOLD VIP
                      </span>
                    </div>
                    <span className="text-[10px] text-jamanvar-navy-900/60">14 visits • ₹28,400 spent</span>
                  </div>
                </div>

                <div className="pt-2.5 space-y-1.5 text-[11px] text-jamanvar-navy-900/80">
                  <div className="flex justify-between">
                    <span className="text-jamanvar-navy-900/50">Favorite Dish:</span>
                    <span className="font-medium text-jamanvar-navy-900">Paneer Tikka Angara</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-jamanvar-navy-900/50">Last Visit:</span>
                    <span className="font-medium text-jamanvar-navy-900">3 days ago (Table 07)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-jamanvar-navy-900/50">Loyalty Balance:</span>
                    <span className="font-bold text-jamanvar-saffron-600">420 Pts (₹420)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
