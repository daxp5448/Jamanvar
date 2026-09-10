"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

export function RestaurateurStories() {
  const stories = [
    {
      id: "1",
      scenario:
        "During Saturday dinner rush, kitchens often see miscommunication between captain slips and the tandoor pass. Jamanvar's KDS and 3-second billing are built to close that gap, keeping guest waiting time down during a busy fine-dining thali service.",
      format: "Fine Dining & Banquet Hall",
      location: "Illustrative example, Ahmedabad format",
      impact: "Example: Faster Weekend Table Turns",
      tables: "48 Tables",
    },
    {
      id: "2",
      scenario:
        "The live owner mobile app is designed to give proprietors visibility without calling the cashier — bills, raw paneer stock consumption, and UPI reconciliation viewable in real time, whether on-site or traveling.",
      format: "Café & Bistro",
      location: "Illustrative example, Surat format",
      impact: "Example: Reduced Billing Discrepancies",
      tables: "28 Tables",
    },
    {
      id: "3",
      scenario:
        "When internet drops during a peak evening, Jamanvar's offline-first design keeps KOT printing and bill settlement running locally without interruption, syncing automatically once connectivity is restored.",
      format: "Multi-Cuisine Lounge",
      location: "Illustrative example, Vadodara format",
      impact: "Example: Uptime Through Rush Hours",
      tables: "65 Tables",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-jamanvar-cream-100 border-t border-jamanvar-navy-900/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-jamanvar-saffron-500/30 text-xs font-bold text-jamanvar-navy-950 mb-3 shadow-subtle">
            <Building2 className="w-3.5 h-3.5 text-jamanvar-saffron-500" />
            <span className="uppercase tracking-widest text-[10px]">ILLUSTRATIVE USE CASES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-jamanvar-navy-950 tracking-tight leading-tight mb-4">
            Built for proprietors who <span className="font-serif italic font-normal text-jamanvar-saffron-600">refuse to settle.</span>
          </h2>

          <p className="text-sm sm:text-base text-jamanvar-navy-900/70 leading-relaxed">
            Example scenarios showing how Jamanvar is designed to support fine dining establishments, family restaurants, and heritage cafés — illustrative, not verified customer results.
          </p>
        </div>

        {/* 3 Editorial Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {stories.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.15 }}
              className="p-8 rounded-3xl bg-white border border-jamanvar-saffron-500/20 shadow-card flex flex-col justify-between hover:border-jamanvar-saffron-500/50 hover:shadow-elevated transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1.5 text-jamanvar-saffron-600">
                    <Building2 className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">{item.format}</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-jamanvar-cream-100 text-jamanvar-navy-900/60 px-2 py-0.5 rounded">
                    {item.tables}
                  </span>
                </div>

                <p className="text-sm text-jamanvar-navy-900/80 leading-relaxed mb-8">
                  {item.scenario}
                </p>
              </div>

              <div className="pt-6 border-t border-jamanvar-navy-900/10">
                <div className="text-xs font-bold px-2.5 py-1 rounded-full bg-jamanvar-green-100 text-jamanvar-green-800 inline-block mb-3">
                  ✓ {item.impact}
                </div>

                <div className="text-[11px] text-jamanvar-navy-900/40 font-mono">
                  {item.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
