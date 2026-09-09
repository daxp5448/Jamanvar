"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUp, ShieldCheck, Mail, MapPin } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-jamanvar-navy-950 text-white/70 border-t border-white/10 pt-16 pb-12 text-xs relative overflow-hidden">
      {/* Background Watermark in Footer */}
      <div className="hidden sm:block absolute -bottom-16 -right-16 w-[500px] h-[350px] opacity-[0.03] pointer-events-none">
        <Image
          src="/images/jamanvar/watermark-emblem.png"
          alt=""
          fill
          className="object-contain filter invert brightness-200"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-white/10">
          {/* Col 1 & 2: Brand & Legal Entity Info */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center">
              <Link href="/" className="p-3 rounded-2xl bg-jamanvar-cream-50 border border-jamanvar-saffron-500/30 inline-block shadow-sm">
                <Image
                  src="/images/jamanvar/brand-logo-transparent.png"
                  alt="Jamanvar by Kelviontech"
                  width={200}
                  height={65}
                  className="h-14 sm:h-16 w-auto object-contain"
                />
              </Link>
            </div>

            <p className="text-xs text-white/70 max-w-sm leading-relaxed">
              Modern restaurant POS, kitchen display system (KDS), table management, inventory, and operations software crafted for Indian hospitality.
            </p>

            {/* Legal Entity Box */}
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-[11px] text-white/80 space-y-1">
              <div className="font-semibold text-jamanvar-saffron-400 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>KELVION TECH (Kelviontech)</span>
              </div>
              <div>Proprietor: <span className="text-white font-medium">Mihir Manishbhai Darji</span></div>
              <div className="flex items-center gap-1 text-white/70 text-[11px] pt-0.5">
                <Mail className="w-3 h-3 text-jamanvar-saffron-400 shrink-0" />
                <a href="mailto:kelviontech@gmail.com" className="hover:text-white underline">
                  kelviontech@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-1 text-white/60 text-[10px] pt-0.5">
                <MapPin className="w-3 h-3 text-jamanvar-saffron-400 shrink-0" />
                <span>Ahmedabad, Gujarat, India</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[11px] text-jamanvar-saffron-300 font-gujarati font-medium">
              “સુવિધા સાથે, સ્વાદિષ્ટ વ્યવસાય — ગુજરાતની આતિથ્ય પરંપરાનું ગૌરવ.”
            </div>
          </div>

          {/* Col 3: Product Modules */}
          <div>
            <h4 className="font-bold text-white uppercase text-[11px] tracking-wider mb-3">
              Product Modules
            </h4>
            <ul className="space-y-2 text-white/60">
              <li><Link href="/features#pos" className="hover:text-white transition-colors">Touch POS Billing</Link></li>
              <li><Link href="/features#kitchen" className="hover:text-white transition-colors">Kitchen Display (KDS)</Link></li>
              <li><Link href="/features#tables" className="hover:text-white transition-colors">Table Floor Plan</Link></li>
              <li><Link href="/features#inventory" className="hover:text-white transition-colors">Recipe Inventory</Link></li>
              <li><Link href="/features#analytics" className="hover:text-white transition-colors">Live Analytics</Link></li>
              <li><Link href="/pricing#hardware" className="hover:text-white transition-colors">Hardware Kits</Link></li>
              <li><Link href="/pricing" className="hover:text-jamanvar-saffron-400 transition-colors font-medium">Pricing &amp; Plans</Link></li>
            </ul>
          </div>

          {/* Col 4: Company */}
          <div>
            <h4 className="font-bold text-white uppercase text-[11px] tracking-wider mb-3">
              Company
            </h4>
            <ul className="space-y-2 text-white/60">
              <li><Link href="/about" className="hover:text-white transition-colors">About Jamanvar</Link></li>
              <li><Link href="/features" className="hover:text-white transition-colors">System Features</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing &amp; Subscriptions</Link></li>
              <li><Link href="/support" className="hover:text-white transition-colors">Support &amp; Training</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Team</Link></li>
              <li><a href="https://kelviontech.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Kelviontech Suite ↗</a></li>
            </ul>
          </div>

          {/* Col 5: Legal & Policies */}
          <div>
            <h4 className="font-bold text-white uppercase text-[11px] tracking-wider mb-3">
              Legal &amp; Compliance
            </h4>
            <ul className="space-y-2 text-white/60">
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/refund-cancellation" className="hover:text-white transition-colors">Refund &amp; Cancellation</Link></li>
              <li><Link href="/security-gst" className="hover:text-white transition-colors">Security &amp; GST</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Help &amp; Grievance</Link></li>
              <li className="pt-2 flex items-center gap-3">
                <a href="https://www.linkedin.com/company/kelviontech" target="_blank" rel="noopener noreferrer" className="hover:text-jamanvar-saffron-400 transition-colors">LinkedIn ↗</a>
                <span>•</span>
                <a href="https://x.com/kelviontech" target="_blank" rel="noopener noreferrer" className="hover:text-jamanvar-saffron-400 transition-colors">X / Twitter ↗</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/50">
          <div>
            © 2026 Jamanvar. A product of <span className="text-white font-medium">KELVION TECH (Kelviontech)</span> — Prop. Mihir Manishbhai Darji. Ahmedabad, Gujarat, India. All rights reserved.
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
