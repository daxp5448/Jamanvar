"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WatermarkOverlay } from "@/components/WatermarkOverlay";
import { FileText, ShieldCheck, Scale, Mail, MapPin } from "lucide-react";

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-jamanvar-cream-100 text-jamanvar-navy-950 selection:bg-jamanvar-saffron-200 selection:text-jamanvar-navy-900 relative">
      <WatermarkOverlay />
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12 sm:pt-40 sm:pb-16 bg-jamanvar-navy-950 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-jamanvar-saffron-400 mb-4">
            <Scale className="w-3.5 h-3.5" />
            <span>TERMS OF SERVICE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-3">
            Terms &amp; Conditions
          </h1>

          <p className="text-xs sm:text-sm text-white/70">
            Effective Date: January 1, 2026 • Last Updated: January 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 sm:p-12 rounded-3xl border border-jamanvar-navy-900/10 shadow-card space-y-8 text-xs sm:text-sm text-jamanvar-navy-900/80 leading-relaxed">
          {/* Entity Statement */}
          <div className="p-4 sm:p-5 rounded-2xl bg-jamanvar-cream-50 border border-jamanvar-saffron-500/30 text-jamanvar-navy-950">
            <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-jamanvar-saffron-700 mb-1">
              <ShieldCheck className="w-4 h-4 text-jamanvar-saffron-600" />
              <span>Contractual Agreement</span>
            </div>
            <p className="text-xs text-jamanvar-navy-900/80">
              These Terms and Conditions constitute a legally binding agreement between you (whether personally or on behalf of your restaurant/business entity) and <strong>KELVION TECH (Kelviontech)</strong>, a proprietorship firm represented by its proprietor <strong>Mihir Manishbhai Darji</strong>, concerning your access to and use of the <strong>Jamanvar</strong> software application, websites (<a href="https://jamanvar.kelviontech.in" className="text-jamanvar-saffron-700 underline">https://jamanvar.kelviontech.in</a>), and associated hospitality services in Ahmedabad, Gujarat, India.
            </p>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-bold text-jamanvar-navy-950 mb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing our website, booking a product demo, subscribing to our software plans, or utilizing the Jamanvar Point of Sale application, you acknowledge that you have read, understood, and agreed to be bound by these Terms. If you do not agree with all of these Terms, you are expressly prohibited from using the services and must discontinue use immediately.
            </p>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-bold text-jamanvar-navy-950 mb-2">
              2. Description of Software &amp; Services
            </h2>
            <p>
              Jamanvar provides a restaurant management software suite comprising point-of-sale billing, kitchen display systems (KDS), table floor management, raw material recipe inventory tracking, and business analytics. Jamanvar is offered on a Software-as-a-Service (SaaS) subscription model with optional tested hardware procurement assistance.
            </p>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-bold text-jamanvar-navy-950 mb-2">
              3. Account Registration &amp; Security
            </h2>
            <p className="mb-2">To access Jamanvar services, you must provide accurate, current, and complete business information. You agree to:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-jamanvar-navy-900/80">
              <li>Maintain the confidentiality of your account credentials, cashier passcodes, and master administrative keys.</li>
              <li>Notify us immediately at <a href="mailto:kelviontech@gmail.com" className="text-jamanvar-saffron-700 underline">kelviontech@gmail.com</a> upon becoming aware of any unauthorized use of your account.</li>
              <li>Accept responsibility for all operational activities and transactions logged under your restaurant's account credentials.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-bold text-jamanvar-navy-950 mb-2">
              4. Subscription Plans, Billing &amp; Invoicing
            </h2>
            <ul className="list-disc pl-5 space-y-1.5 text-jamanvar-navy-900/80">
              <li>
                <strong>Currency &amp; Taxes:</strong> All subscription fees are quoted in Indian Rupees (INR). Applicable Goods and Services Tax (GST) is charged in addition to the base subscription fee in accordance with prevailing statutory rates.
              </li>
              <li>
                <strong>Payment Terms:</strong> Subscription fees are billed in advance on a monthly or annual recurring cycle as chosen by the client. Online payments are collected via RBI-authorized payment aggregators (e.g. Cashfree Payments).
              </li>
              <li>
                <strong>Price Revisions:</strong> We reserve the right to revise subscription fees upon providing at least thirty (30) days prior written notice before your next renewal period.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-bold text-jamanvar-navy-950 mb-2">
              5. Intellectual Property Rights
            </h2>
            <p>
              The Jamanvar software, proprietary algorithms, source code, user interfaces, documentation, visual designs, and brand trademarks ("Jamanvar", "Kelviontech") are the exclusive intellectual property of KELVION TECH (Kelviontech). Clients are granted a limited, revocable, non-exclusive, non-transferable license to use the software solely for their internal restaurant operations. You may not reverse engineer, decompile, copy, resell, or create derivative works based on our software.
            </p>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-bold text-jamanvar-navy-950 mb-2">
              6. Permitted &amp; Acceptable Use
            </h2>
            <p className="mb-2">You agree not to use the software or services:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-jamanvar-navy-900/80">
              <li>In any unlawful manner or for any illegal, fraudulent, or unauthorized purpose.</li>
              <li>To transmit malicious code, viruses, or disruptive scripts into our cloud network or local mesh.</li>
              <li>To probe, scan, or test the vulnerability of our system without express prior written authorization.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-bold text-jamanvar-navy-950 mb-2">
              7. Service Availability &amp; Offline Operations
            </h2>
            <p>
              While Jamanvar features robust local offline mesh capabilities allowing billing and KOT printing to continue without active broadband internet, cloud analytics synchronization and multi-branch features depend on external internet service providers. We work to keep cloud services reliably available but do not warrant that cloud synchronization will be completely uninterrupted during unforeseen internet backbone outages or scheduled maintenance, and do not currently commit to a specific uptime percentage or service-level agreement (SLA).
            </p>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-bold text-jamanvar-navy-950 mb-2">
              8. Hardware Procurement &amp; Third-Party Devices
            </h2>
            <p>
              Hardware supplied through Jamanvar (such as thermal receipt printers, touch POS terminals, and cash drawers) carries manufacturer warranties. We provide configuration assistance and initial setup support. Jamanvar is not responsible for physical damage, liquid spills, electrical surges, or wear-and-tear resulting from improper restaurant handling.
            </p>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-bold text-jamanvar-navy-950 mb-2">
              9. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by applicable Indian law, KELVION TECH, its proprietor, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, business interruption, or data loss arising out of or in connection with your use of or inability to use the software. In no event shall our aggregate liability exceed the total amount paid by you for the specific software subscription in the three (3) months preceding the claim.
            </p>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-bold text-jamanvar-navy-950 mb-2">
              10. Governing Law &amp; Dispute Resolution
            </h2>
            <p>
              These Terms and any disputes arising out of or related to our services shall be governed by and construed in accordance with the laws of the Republic of India. The parties irrevocably submit to the exclusive jurisdiction of the competent courts situated in <strong>Ahmedabad, Gujarat, India</strong> for the resolution of any legal proceedings.
            </p>
          </div>

          <div className="pt-4 border-t border-jamanvar-navy-900/10">
            <h2 className="text-base sm:text-lg font-bold text-jamanvar-navy-950 mb-2">
              11. Contact Information
            </h2>
            <p className="mb-3">
              For any questions, legal notices, or contractual inquiries regarding these Terms &amp; Conditions, please contact:
            </p>

            <div className="p-4 rounded-2xl bg-jamanvar-cream-50 border border-jamanvar-navy-900/10 text-xs space-y-1.5">
              <div><strong>Entity:</strong> KELVION TECH (Kelviontech)</div>
              <div><strong>Proprietor:</strong> Mihir Manishbhai Darji</div>
              <div><strong>Location:</strong> Ahmedabad, Gujarat, India</div>
              <div><strong>Official Email:</strong> <a href="mailto:kelviontech@gmail.com" className="text-jamanvar-saffron-700 underline font-medium">kelviontech@gmail.com</a></div>
              <div><strong>Phone / WhatsApp:</strong> +91 81402 67475 / +91 93278 95570</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
