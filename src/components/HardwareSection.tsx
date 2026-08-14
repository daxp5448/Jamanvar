"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Monitor,
  Printer,
  WifiOff,
  Cpu,
  Smartphone,
  CheckCircle2,
  Receipt,
  Sparkles,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function HardwareSection() {
  const [activeDevice, setActiveDevice] = useState<"pos" | "printer" | "kds" | "captain">("pos");

  const hardwareSpecs = [
    {
      id: "pos",
      name: "15.6\" Touch POS Terminal",
      category: "Billing Counter",
      desc: "Commercial capacitive touch terminal running Jamanvar POS. Supports Android & Windows with dual customer-facing screens.",
      icon: Monitor,
      specs: ["15.6\" Full HD IPS Touch", "Quad-Core Fast Processor", "Dual Display Support", "Zero-Lag Billing"],
    },
    {
      id: "printer",
      name: "Thermal KOT & Bill Printers",
      category: "Kitchen & Cashier",
      desc: "High-speed 2-inch and 3-inch thermal printing with auto-cutter. Instant KOT routing via LAN, USB, Wi-Fi or Bluetooth.",
      icon: Printer,
      specs: ["250mm/s Print Speed", "Auto-Cutter Mechanism", "USB + LAN + Wi-Fi", "Custom Logo on Receipts"],
    },
    {
      id: "kds",
      name: "Kitchen Display System (KDS)",
      category: "Kitchen Line",
      desc: "Wall-mounted commercial monitors or heavy-duty Android tablets. Color-coded ticket aging alerts to eliminate food delays.",
      icon: Cpu,
      specs: ["Audio Chime on New KOT", "Station-Specific Routing", "Cook Time Benchmarking", "100% Heat Resistant"],
    },
    {
      id: "captain",
      name: "Captain Table-Side Handhelds",
      category: "Dining Floor",
      desc: "Lightweight 6-8 inch mobile tablets for stewards to punch table orders with live modifier notes directly to the kitchen pass.",
      icon: Smartphone,
      specs: ["All-Day 5000mAh Battery", "Drop-Proof Casing", "Instant Table Switching", "1-Tap KOT Firing"],
    },
  ];

  return (
    <section id="hardware" className="py-20 md:py-32 bg-jamanvar-cream-100 border-t border-jamanvar-navy-900/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14 md:mb-18">
          <div className="inline-block text-xs font-extrabold uppercase tracking-widest text-jamanvar-saffron-600 mb-3">
            HARDWARE ECOSYSTEM
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-jamanvar-navy-950 tracking-tight leading-tight mb-4">
            Software that fits the counter.
          </h2>
          <p className="text-base sm:text-lg text-jamanvar-navy-900/70 leading-relaxed">
            Built for the pace of real Indian restaurants. Run Jamanvar seamlessly on your existing hardware or deploy our certified billing terminals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Device Selection Tabs (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {hardwareSpecs.map((item) => {
              const Icon = item.icon;
              const isSelected = activeDevice === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveDevice(item.id as any)}
                  className={cn(
                    "w-full p-4 sm:p-5 rounded-2xl text-left transition-all border flex items-start gap-4 cursor-pointer",
                    isSelected
                      ? "bg-jamanvar-navy-900 text-white border-jamanvar-navy-900 shadow-lg scale-[1.02]"
                      : "bg-white text-jamanvar-navy-950 border-jamanvar-navy-900/10 hover:border-jamanvar-saffron-500/50 hover:bg-jamanvar-cream-50"
                  )}
                >
                  <div
                    className={cn(
                      "w-11 h-11 rounded-xl flex items-center justify-center shrink-0",
                      isSelected
                        ? "bg-jamanvar-saffron-500 text-white"
                        : "bg-jamanvar-cream-100 text-jamanvar-navy-900"
                    )}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span
                        className={cn(
                          "text-[10px] font-bold uppercase tracking-wider",
                          isSelected ? "text-jamanvar-saffron-300" : "text-jamanvar-navy-900/50"
                        )}
                      >
                        {item.category}
                      </span>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-jamanvar-saffron-400 animate-pulse" />
                      )}
                    </div>
                    <h4
                      className={cn(
                        "font-extrabold text-sm sm:text-base mt-0.5",
                        isSelected ? "text-white" : "text-jamanvar-navy-950"
                      )}
                    >
                      {item.name}
                    </h4>
                    <p
                      className={cn(
                        "text-xs mt-1 leading-relaxed",
                        isSelected ? "text-white/75" : "text-jamanvar-navy-900/65"
                      )}
                    >
                      {item.desc}
                    </p>
                  </div>
                </button>
              );
            })}

            {/* Offline reassurance banner */}
            <div className="p-4 bg-white rounded-2xl border border-jamanvar-navy-900/10 shadow-subtle flex items-center gap-3 text-xs text-jamanvar-navy-900 mt-6">
              <WifiOff className="w-5 h-5 text-jamanvar-saffron-600 shrink-0" />
              <div>
                <strong className="block text-jamanvar-navy-950 font-bold">100% Offline Resilience</strong>
                Internet drops? Keep taking orders and printing thermal bills without interruption. Data syncs automatically once back online.
              </div>
            </div>
          </div>

          {/* Right Polished Branded Hardware Preview (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-jamanvar-navy-950 rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl text-white relative overflow-hidden">
              {/* Saffron subtle glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-jamanvar-saffron-500/15 rounded-full blur-3xl pointer-events-none" />

              {/* Hardware Photo Canvas with Jamanvar Brand UI */}
              <div className="relative rounded-2xl overflow-hidden border border-white/15 aspect-[16/10] bg-jamanvar-navy-900 mb-6 shadow-inner">
                <Image
                  src="/images/jamanvar/hardware-counter.jpg"
                  alt="Jamanvar POS Hardware Counter Setup"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 700px"
                />
                
                {/* Official Brand Watermark Tag */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl bg-jamanvar-navy-950/85 backdrop-blur-md border border-white/15 flex items-center gap-2">
                  <div className="w-5 h-5 rounded overflow-hidden bg-jamanvar-cream-50 p-0.5">
                    <Image src="/images/jamanvar/logo.jpg" alt="Logo" width={20} height={20} className="object-contain" />
                  </div>
                  <span className="text-[11px] font-bold text-white tracking-wide">JAMANVAR POS</span>
                </div>

                <div className="absolute bottom-4 right-4 px-3 py-1 rounded-lg bg-emerald-950/90 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-bold">
                  ● HARDWARE READY
                </div>
              </div>

              {/* Dynamic Feature Specs for Selected Hardware */}
              {(() => {
                const current = hardwareSpecs.find((s) => s.id === activeDevice) || hardwareSpecs[0];
                return (
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                      <div>
                        <span className="text-[10px] text-jamanvar-saffron-400 uppercase font-bold tracking-widest block">
                          CONFIGURED SPECIFICATIONS
                        </span>
                        <h4 className="text-lg font-bold text-white">{current.name}</h4>
                      </div>
                      <span className="text-xs font-mono text-white/50 bg-white/5 px-2.5 py-1 rounded-lg">
                        Plug &amp; Play
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {current.specs.map((spec, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-white/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-jamanvar-saffron-400 shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
