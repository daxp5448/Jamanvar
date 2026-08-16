"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-jamanvar-navy-950 text-white/70 border-t border-white/10 pt-16 pb-12 text-xs relative overflow-hidden">
      {/* Background Watermark in Footer */}
      <div className="absolute -bottom-16 -right-16 w-[500px] h-[350px] opacity-[0.03] pointer-events-none">
        <Image
          src="/images/jamanvar/watermark-emblem.png"
          alt=""
          fill
          className="object-contain filter invert brightness-200"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-white/10">
          {/* Col 1 & 2: Brand Info */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center">
              <div className="p-3 rounded-2xl bg-jamanvar-cream-50 border border-jamanvar-saffron-500/30 inline-block shadow-sm">
                <Image
                  src="/images/jamanvar/brand-logo-transparent.png"
                  alt="Jamanvar by Kelviontech"
                  width={200}
                  height={65}
                  className="h-14 sm:h-16 w-auto object-contain"
                />
              </div>
            </div>

            <p className="text-xs text-white/60 max-w-sm leading-relaxed">
              Modern restaurant POS and operations management software designed to eliminate dining room chaos and empower food hospitality businesses.
            </p>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[11px] text-jamanvar-saffron-300 font-gujarati font-medium">
              “સુવિધા સાથે, સ્વાદિષ્ટ વ્યવસાય — ગુજરાતની આતિથ્ય પરંપરાનું ગૌરવ.”
            </div>
          </div>

          {/* Col 3: Product */}
          <div>
            <h4 className="font-bold text-white uppercase text-[11px] tracking-wider mb-3">
              Product
            </h4>
            <ul className="space-y-2 text-white/60">
              <li><a href="#product" className="hover:text-white transition-colors">Touch POS</a></li>
              <li><a href="#product-showcase" className="hover:text-white transition-colors">Kitchen Display (KDS)</a></li>
              <li><a href="#product-showcase" className="hover:text-white transition-colors">Table Floor Plan</a></li>
              <li><a href="#product-showcase" className="hover:text-white transition-colors">Raw Inventory</a></li>
              <li><a href="#analytics" className="hover:text-white transition-colors">Live Analytics</a></li>
              <li><a href="#hardware" className="hover:text-white transition-colors">Hardware Kits</a></li>
            </ul>
          </div>

          {/* Col 4: Company */}
          <div>
            <h4 className="font-bold text-white uppercase text-[11px] tracking-wider mb-3">
              Company
            </h4>
            <ul className="space-y-2 text-white/60">
              <li><a href="#how-it-works" className="hover:text-white transition-colors">About Jamanvar</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Why Jamanvar</a></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Support & Training</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Kelviontech Suite</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Contact Team</span></li>
            </ul>
          </div>

          {/* Col 5: Legal & Social */}
          <div>
            <h4 className="font-bold text-white uppercase text-[11px] tracking-wider mb-3">
              Legal & Social
            </h4>
            <ul className="space-y-2 text-white/60">
              <li><span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Security & GST</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">LinkedIn</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Twitter / X</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/40">
          <div>
            © 2026 Jamanvar. All rights reserved. Kelviontech. Made with pride for Indian Restaurants.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-jamanvar-saffron-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}
