"use client";

import React from "react";
import Link from "next/link";
import { InternalNavbar } from "@/components/internal/InternalNavbar";
import { Footer } from "@/components/Footer";
import { WatermarkOverlay } from "@/components/WatermarkOverlay";
import { RefreshCw, ShieldCheck, Mail, Clock, CheckCircle2, AlertCircle } from "lucide-react";

export default function RefundCancellationPage() {
  return (
    <main className="min-h-screen bg-jamanvar-cream-100 text-jamanvar-navy-950 selection:bg-jamanvar-saffron-200 selection:text-jamanvar-navy-900 relative">
      <WatermarkOverlay />
      <InternalNavbar />

      {/* Header */}
      <section className="pt-32 pb-12 sm:pt-40 sm:pb-16 bg-jamanvar-navy-950 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-jamanvar-saffron-400 mb-4">
            <RefreshCw className="w-3.5 h-3.5" />
            <span>CUSTOMER SATISFACTION POLICY</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-3">
            Refund &amp; Cancellation Policy
          </h1>

          <p className="text-xs sm:text-sm text-white/70">
            Effective Date: January 1, 2026 • Last Updated: January 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 sm:p-12 rounded-3xl border border-jamanvar-navy-900/10 shadow-card space-y-8 text-xs sm:text-sm text-jamanvar-navy-900/80 leading-relaxed">
          {/* Identity Notice */}
          <div className="p-4 sm:p-5 rounded-2xl bg-jamanvar-cream-50 border border-jamanvar-saffron-500/30 text-jamanvar-navy-950">
            <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-jamanvar-saffron-700 mb-1">
              <ShieldCheck className="w-4 h-4 text-jamanvar-saffron-600" />
              <span>Policy Scope</span>
            </div>
            <p className="text-xs text-jamanvar-navy-900/80">
              This Refund and Cancellation Policy applies to software licenses, subscription plans, onboarding packages, and tested hardware procured through <strong>Jamanvar</strong>, a product of <strong>KELVION TECH (Kelviontech)</strong> (Proprietor: <strong>Mihir Manishbhai Darji</strong>), Ahmedabad, Gujarat, India.
            </p>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-bold text-jamanvar-navy-950 mb-2">
              1. Software Subscription Cancellation
            </h2>
            <p className="mb-2">
              We believe in delivering genuine value to restaurant proprietors without rigid lock-ins:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-jamanvar-navy-900/80">
              <li>
                <strong>Monthly Subscriptions:</strong> You may cancel your monthly software subscription at any time prior to the next billing renewal date. Your access will remain fully functional until the end of the current paid billing cycle, and no further automatic charges will occur.
              </li>
              <li>
                <strong>Annual Subscriptions:</strong> You may request non-renewal of your annual subscription at any point before the annual renewal date.
              </li>
              <li>
                <strong>No Cancellation Penalty:</strong> We do not charge any termination fees or hidden exit penalties for cancelling a subscription.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-bold text-jamanvar-navy-950 mb-2">
              2. 7-Day Money-Back Guarantee (Software License)
            </h2>
            <p className="mb-2">
              To ensure complete confidence when choosing Jamanvar, we offer a <strong>7-Day Money-Back Guarantee</strong> on initial software subscription purchases:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-jamanvar-navy-900/80">
              <li>
                If you find that the software does not satisfy your operational requirements, simply submit a cancellation request within seven (7) calendar days of your initial purchase date.
              </li>
              <li>
                Upon review, we will issue a 100% refund of the software subscription fee paid, no questions asked.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-bold text-jamanvar-navy-950 mb-2">
              3. Hardware Return &amp; Replacement Policy
            </h2>
            <p className="mb-2">
              For restaurant hardware procured through Jamanvar (such as ESC/POS thermal printers, touch terminals, and cash drawers):
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-jamanvar-navy-900/80">
              <li>
                <strong>Defective / Transit Damage:</strong> If hardware arrives damaged or exhibits manufacturing defects, notify us within seven (7) days of delivery. We will arrange a replacement or full refund including reverse pickup.
              </li>
              <li>
                <strong>Condition for Returns:</strong> Returned hardware items must be in original condition with all original packaging, power adapters, cables, and warranty cards.
              </li>
              <li>
                <strong>Standard Manufacturer Warranty:</strong> Hardware items carry a standard 1-year manufacturer warranty for functional defects occurring after the 7-day initial inspection period.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-bold text-jamanvar-navy-950 mb-2">
              4. Non-Refundable Items &amp; Services
            </h2>
            <p className="mb-2">The following items and services are non-refundable:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-jamanvar-navy-900/80">
              <li>Custom on-site menu photography or custom software engineering development already delivered.</li>
              <li>Consumable restaurant supplies (e.g., opened thermal paper roll cartons).</li>
              <li>Subscription renewal fees requested after the 7-day money-back window has lapsed.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-bold text-jamanvar-navy-950 mb-2">
              5. Refund Processing Timeline
            </h2>
            <div className="p-4 rounded-2xl bg-jamanvar-cream-50 border border-jamanvar-navy-900/10 space-y-2">
              <div className="flex items-center gap-2 font-bold text-jamanvar-navy-950">
                <Clock className="w-4 h-4 text-jamanvar-saffron-600" />
                <span>5 to 7 Working Days Turnaround</span>
              </div>
              <p className="text-xs text-jamanvar-navy-900/80">
                Once a refund request is approved, the refund is initiated immediately. The amount is credited back to the original payment method (Bank Account, UPI, Debit/Credit Card) within <strong>5 to 7 business days</strong>, subject to standard banking clearance times.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-bold text-jamanvar-navy-950 mb-2">
              6. How to Request a Cancellation or Refund
            </h2>
            <p className="mb-3">
              To request a cancellation, hardware return, or refund, please follow these steps:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-jamanvar-navy-900/80">
              <li>
                Send an email to <a href="mailto:kelviontech@gmail.com" className="text-jamanvar-saffron-700 underline font-semibold">kelviontech@gmail.com</a> with the subject line <em>"Refund Request - [Your Restaurant Name]"</em>.
              </li>
              <li>Include your Invoice Number, registered contact phone number, and a brief explanation of the reason for the refund.</li>
              <li>Our support desk in Ahmedabad will acknowledge your request within 24 hours and guide you through the process.</li>
            </ol>
          </div>

          <div className="pt-4 border-t border-jamanvar-navy-900/10">
            <h2 className="text-base sm:text-lg font-bold text-jamanvar-navy-950 mb-2">
              7. Questions &amp; Support Inquiries
            </h2>
            <p className="mb-3">
              For any clarification regarding billing or refunds, reach out to our team:
            </p>

            <div className="p-4 rounded-2xl bg-jamanvar-cream-50 border border-jamanvar-navy-900/10 text-xs space-y-1.5">
              <div><strong>Enterprise:</strong> KELVION TECH (Kelviontech)</div>
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
