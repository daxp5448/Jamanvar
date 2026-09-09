"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WatermarkOverlay } from "@/components/WatermarkOverlay";
import {
  ShieldCheck,
  Lock,
  Receipt,
  FileSpreadsheet,
  CheckCircle2,
  Server,
  KeyRound,
  ArrowRight,
  Calculator,
  QrCode,
} from "lucide-react";

export default function SecurityGstPage() {
  const securityFeatures = [
    {
      title: "256-Bit SSL/TLS Encryption",
      description:
        "All data transmissions between your billing devices, waiter tablets, and the cloud are protected using modern TLS 1.3 encryption protocols.",
      icon: Lock,
    },
    {
      title: "Role-Based Staff Access (RBAC)",
      description:
        "Granular permissions for Captains, Cashiers, Chefs, and Managers. Restrict bill cancellations, discounts, and raw inventory adjustments to authorized staff only.",
      icon: KeyRound,
    },
    {
      title: "Anti-Theft Void & Discount Audit Logs",
      description:
        "Every voided KOT item, split bill, applied discount, and cash drawer opening is permanently recorded with timestamp and employee ID for anti-pilferage auditing.",
      icon: ShieldCheck,
    },
    {
      title: "Local Offline Encryption & Auto-Backup",
      description:
        "Your offline database is securely encrypted locally. Automated cloud snapshots occur in real time as soon as network connectivity is available.",
      icon: Server,
    },
  ];

  const gstFeatures = [
    {
      title: "Automated CGST & SGST / IGST Splitting",
      description:
        "Accurately compute 2.5% CGST + 2.5% SGST (standard 5% restaurant GST without ITC) or custom GST rates on beverages, bakery items, and merchandise.",
    },
    {
      title: "HSN / SAC Codes & GSTIN Compliance",
      description:
        "Itemized HSN codes (e.g. 996331 for restaurant services) printed cleanly on 80mm/58mm thermal receipts and tax invoices.",
    },
    {
      title: "B2B GST Invoicing Support",
      description:
        "Capture corporate guest GSTINs, legal trade names, and addresses for instant corporate B2B tax invoices with compliant sequential numbering.",
    },
    {
      title: "One-Click GSTR-1 & GSTR-3B Export",
      description:
        "Generate monthly GST sales summaries, taxable values, and tax breakdowns formatted for direct handover to your Chartered Accountant (CA).",
    },
  ];

  return (
    <main className="min-h-screen bg-jamanvar-cream-100 text-jamanvar-navy-950 selection:bg-jamanvar-saffron-200 selection:text-jamanvar-navy-900 relative">
      <WatermarkOverlay />
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-14 sm:pt-40 sm:pb-20 bg-jamanvar-navy-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-jamanvar-saffron-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-jamanvar-saffron-400 mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>DATA SECURITY &amp; STATUTORY COMPLIANCE</span>
          </div>

          <h1 className="text-3xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-4">
            Security &amp; GST Compliance
          </h1>

          <p className="text-sm sm:text-lg text-white/75 max-w-2xl mx-auto leading-relaxed font-normal mb-8">
            How Jamanvar protects your restaurant's business data and ensures 100% statutory Goods and Services Tax (GST) accuracy.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#security"
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs"
            >
              Data &amp; Access Security
            </a>
            <a
              href="#gst"
              className="px-5 py-2.5 rounded-xl bg-jamanvar-saffron-500 hover:bg-jamanvar-saffron-600 text-white font-bold text-xs shadow-saffron"
            >
              GST Invoicing Capabilities
            </a>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-jamanvar-saffron-600 mb-2 block">
            INFRASTRUCTURE &amp; DATA PRIVACY
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-jamanvar-navy-950 tracking-tight">
            Bank-grade encryption &amp; anti-theft controls.
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-jamanvar-navy-900/70 leading-relaxed">
            Your sales numbers, customer data, and recipes belong solely to you. We safeguard your restaurant data through layered defense and role-based permissions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {securityFeatures.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-jamanvar-navy-900/10 shadow-card flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-jamanvar-cream-100 border border-jamanvar-saffron-500/20 flex items-center justify-center text-jamanvar-saffron-600 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-lg text-jamanvar-navy-950 mb-2">
                    {sec.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-jamanvar-navy-900/70 leading-relaxed">
                    {sec.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* GST Invoicing Section */}
      <section id="gst" className="py-12 sm:py-20 bg-jamanvar-cream-50 border-t border-jamanvar-navy-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-jamanvar-saffron-600 mb-2 block">
              INDIAN TAX COMPLIANCE
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-jamanvar-navy-950 tracking-tight">
              Seamless GST Calculation &amp; Invoicing.
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-jamanvar-navy-900/70 leading-relaxed">
              Jamanvar is fully aligned with Indian GST laws, making monthly filing effortless for your accounting team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {gstFeatures.map((gst, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-jamanvar-navy-900/10 shadow-card"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-jamanvar-green-600 shrink-0" />
                  <h3 className="font-extrabold text-base sm:text-lg text-jamanvar-navy-950">
                    {gst.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-jamanvar-navy-900/70 leading-relaxed">
                  {gst.description}
                </p>
              </div>
            ))}
          </div>

          {/* Legal Compliance Box */}
          <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-jamanvar-saffron-500/30 shadow-card max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-jamanvar-saffron-700 font-bold text-xs uppercase tracking-wider mb-2">
              <Receipt className="w-4 h-4 text-jamanvar-saffron-600" />
              <span>Publisher &amp; Developer Details</span>
            </div>
            <p className="text-xs text-jamanvar-navy-900/80 leading-relaxed">
              Jamanvar is developed and distributed by <strong>KELVION TECH (Kelviontech)</strong> (Proprietor: <strong>Mihir Manishbhai Darji</strong>), based in Ahmedabad, Gujarat, India. All invoices issued for software subscription services are statutory-compliant with appropriate SAC accounting codes.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 sm:py-24 bg-jamanvar-navy-950 text-white text-center border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Have questions about GST or security setup?
          </h2>
          <p className="text-xs sm:text-base text-white/70 leading-relaxed max-w-xl mx-auto">
            Our technical and onboarding consultants in Ahmedabad are happy to review your restaurant's specific tax structure and hardware setup.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-jamanvar-saffron-500 hover:bg-jamanvar-saffron-600 text-white font-bold text-xs sm:text-sm shadow-saffron flex items-center justify-center gap-2"
            >
              <span>Contact Compliance &amp; Support Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pricing"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/15 font-bold text-xs sm:text-sm text-center"
            >
              Explore Pricing Plans
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
