"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2, TrendingUp, Building2 } from "lucide-react";

export function RestaurateurStories() {
  const stories = [
    {
      id: "1",
      quote:
        "During Saturday dinner rush, our kitchen used to have miscommunications between captain slips and tandoor pass. Jamanvar's KDS and 3-second billing reduced our guest waiting time by 18 minutes. It has been a game-changer for our fine dining thali service.",
      author: "Hasmukhbhai Patel",
      role: "Managing Partner",
      restaurant: "The Heritage Thaal & Banquet",
      location: "S.G. Highway, Ahmedabad",
      impact: "+32% Weekend Table Turnover",
      tables: "48 Tables",
    },
    {
      id: "2",
      quote:
        "The live owner mobile app gives me total peace of mind. Whether I am traveling or at the restaurant, I see every bill, raw paneer stock consumption, and UPI reconciliation in real time without calling the cashier once.",
      author: "Kavita Shah",
      role: "Founder & Executive Chef",
      restaurant: "Saffron Spices Café & Bistro",
      location: "Vesu, Surat",
      impact: "Zero Billing Discrepancies",
      tables: "28 Tables",
    },
    {
      id: "3",
      quote:
        "When our internet went down on Diwali peak evening, Jamanvar kept printing KOTs and settling bills 100% offline without dropping a beat. The automatic sync when power restored was flawless.",
      author: "Rajeshwar Singh",
      role: "Operations Director",
      restaurant: "Royal Rasoi Multi-Cuisine Lounge",
      location: "Alkapuri, Vadodara",
      impact: "100% Uptime Across Rush Hours",
      tables: "65 Tables",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-jamanvar-cream-100 border-t border-jamanvar-navy-900/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-jamanvar-saffron-500/30 text-xs font-bold text-jamanvar-navy-950 mb-3 shadow-subtle">
            <Star className="w-3.5 h-3.5 fill-jamanvar-saffron-500 text-jamanvar-saffron-500" />
            <span className="uppercase tracking-widest text-[10px]">RESTAURATEUR TESTIMONIALS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-jamanvar-navy-950 tracking-tight leading-tight mb-4">
            Trusted by proprietors who <span className="font-serif italic font-normal text-jamanvar-saffron-600">refuse to settle.</span>
          </h2>

          <p className="text-sm sm:text-base text-jamanvar-navy-900/70 leading-relaxed">
            Real stories from fine dining establishments, family restaurants, and heritage cafés powered by Jamanvar POS.
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
                  <div className="flex text-jamanvar-saffron-500 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-jamanvar-saffron-400 text-jamanvar-saffron-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-jamanvar-cream-100 text-jamanvar-navy-900/60 px-2 py-0.5 rounded">
                    {item.tables}
                  </span>
                </div>

                <p className="text-sm text-jamanvar-navy-900/80 leading-relaxed italic mb-8">
                  “{item.quote}”
                </p>
              </div>

              <div className="pt-6 border-t border-jamanvar-navy-900/10">
                <div className="text-xs font-bold px-2.5 py-1 rounded-full bg-jamanvar-green-100 text-jamanvar-green-800 inline-block mb-3">
                  ✓ {item.impact}
                </div>

                <div className="font-extrabold text-sm text-jamanvar-navy-950">
                  {item.author}
                </div>
                <div className="text-xs text-jamanvar-navy-900/60 font-medium">
                  {item.role}, <span className="text-jamanvar-navy-900 font-semibold">{item.restaurant}</span>
                </div>
                <div className="text-[11px] text-jamanvar-navy-900/40 mt-0.5 font-mono">
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
