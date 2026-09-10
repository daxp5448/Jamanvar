"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WatermarkOverlay } from "@/components/WatermarkOverlay";
import { ShieldCheck, Mail, MapPin, Lock, FileText, ArrowRight } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-jamanvar-cream-100 text-jamanvar-navy-950 selection:bg-jamanvar-saffron-200 selection:text-jamanvar-navy-900 relative">
      <WatermarkOverlay />
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12 sm:pt-40 sm:pb-16 bg-jamanvar-navy-950 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-jamanvar-saffron-400 mb-4">
            <Lock className="w-3.5 h-3.5" />
            <span>LEGAL &amp; DATA PROTECTION</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-3">
            Privacy Policy
          </h1>

          <p className="text-xs sm:text-sm text-white/70">
            Effective Date: January 1, 2026 • Last Updated: January 2026
          </p>
        </div>
      </section>

      {/* Content Container */}
      <section className="py-12 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 sm:p-12 rounded-3xl border border-jamanvar-navy-900/10 shadow-card space-y-8 text-xs sm:text-sm text-jamanvar-navy-900/80 leading-relaxed">
          {/* Legal Notice */}
          <div className="p-4 sm:p-5 rounded-2xl bg-jamanvar-cream-50 border border-jamanvar-saffron-500/30 text-jamanvar-navy-950">
            <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-jamanvar-saffron-700 mb-1">
              <ShieldCheck className="w-4 h-4 text-jamanvar-saffron-600" />
              <span>Entity Identification</span>
            </div>
            <p className="text-xs text-jamanvar-navy-900/80">
              This Privacy Policy applies to the <strong>Jamanvar</strong> software application, web platform (<a href="https://jamanvar.kelviontech.in" className="text-jamanvar-saffron-700 underline">https://jamanvar.kelviontech.in</a>), and related restaurant management services owned and operated by <strong>KELVION TECH (Kelviontech)</strong>, a proprietorship firm represented by its proprietor <strong>Mihir Manishbhai Darji</strong>, located in Ahmedabad, Gujarat, India.
            </p>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-bold text-jamanvar-navy-950 mb-2">
              1. Overview &amp; Commitment
            </h2>
            <p>
              At Jamanvar and KELVION TECH, we respect your privacy and are committed to protecting the personal and operational business data you share with us. This policy describes how we collect, use, store, process, and protect your information when you access our website, book product demonstrations, purchase software licenses, or use our restaurant point-of-sale applications.
            </p>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-bold text-jamanvar-navy-950 mb-2">
              2. Information We Collect
            </h2>
            <p className="mb-2">We may collect the following categories of information:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-jamanvar-navy-900/80">
              <li>
                <strong>Contact &amp; Identity Data:</strong> Name, business email address, phone/WhatsApp number, restaurant/business name, location/city, and outlet format provided when submitting demo requests or signing up for software subscriptions.
              </li>
              <li>
                <strong>Billing &amp; Tax Data:</strong> Invoicing name, billing address, and GSTIN (where provided for B2B input tax credit invoicing). All online payment processing is conducted securely via RBI-authorized payment aggregators (e.g. Cashfree Payments); Jamanvar does not store sensitive credit card numbers or banking passwords.
              </li>
              <li>
                <strong>Restaurant Operational Telemetry:</strong> Menu item catalogues, table layouts, printer device IDs, and aggregated order counts generated during the routine usage of the POS to enable synchronized cloud backups and multi-device access.
              </li>
              <li>
                <strong>Technical &amp; Log Information:</strong> IP addresses, browser types, operating system versions, and diagnostic crash reports collected automatically when accessing our web services for performance and security monitoring.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-bold text-jamanvar-navy-950 mb-2">
              3. How We Use Your Information
            </h2>
            <p className="mb-2">The information we collect is utilized strictly for legitimate business and operational purposes, including:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-jamanvar-navy-900/80">
              <li>Configuring, activating, and delivering your Jamanvar software license and restaurant menu database.</li>
              <li>Providing technical assistance, hardware pairing guidance, staff training, and ongoing customer support.</li>
              <li>Processing subscription payments and issuing GST-compliant tax invoices.</li>
              <li>Synchronizing orders, KDS tickets, and inventory levels across your local terminals and secure cloud storage.</li>
              <li>Sending critical operational announcements, security updates, and billing renewal notices.</li>
              <li>Investigating technical faults, debugging performance bottlenecks, and safeguarding against unauthorized access.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-bold text-jamanvar-navy-950 mb-2">
              4. Data Sharing &amp; Third-Party Services
            </h2>
            <p className="mb-2">
              <strong>We do not sell, rent, or trade your personal or business data to third-party advertisers or data brokers.</strong>
            </p>
            <p className="mb-2">We only share information with trusted third-party service providers essential for delivering our services:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-jamanvar-navy-900/80">
              <li>
                <strong>Payment Aggregators (e.g. Cashfree Payments):</strong> To process online subscription payments securely in compliance with PCI-DSS standards.
              </li>
              <li>
                <strong>Cloud &amp; Hosting Infrastructure:</strong> Our website and hosted services run on Oracle Cloud infrastructure, served over SSL/TLS (HTTPS) encryption.
              </li>
              <li>
                <strong>Legal &amp; Regulatory Authorities:</strong> When strictly required by applicable Indian law, court order, or governmental statutory mandate.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-bold text-jamanvar-navy-950 mb-2">
              5. Cookies &amp; Tracking Technologies
            </h2>
            <p>
              Our website uses essential operational cookies and session tokens strictly necessary for user authentication, security verification, and interface preference storage. We do not employ intrusive third-party cross-site advertising trackers.
            </p>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-bold text-jamanvar-navy-950 mb-2">
              6. Data Security &amp; Retention
            </h2>
            <p className="mb-2">
              We aim to implement reasonable administrative, technical, and physical safeguards to protect your data against unauthorized access, alteration, disclosure, or destruction. Our website and hosted services are served over SSL/TLS (HTTPS) encryption; as device-to-cloud terminal sync features are built out, they will use the same industry-standard encryption in transit.
            </p>
            <p>
              We retain your account and business records for the active duration of your subscription and for a reasonable statutory period thereafter to fulfill legal, tax, accounting, and regulatory compliance requirements.
            </p>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-bold text-jamanvar-navy-950 mb-2">
              7. Your Rights &amp; Choices
            </h2>
            <p className="mb-2">As a registered user or client, you have the right to:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-jamanvar-navy-900/80">
              <li>Access and review the business contact data we hold about you.</li>
              <li>Request correction or updating of inaccurate account information.</li>
              <li>Request an export of your restaurant menu and historical sales reports in standard format (CSV/Excel).</li>
              <li>Request account termination and data deletion upon subscription expiry, subject to statutory tax retention laws.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-bold text-jamanvar-navy-950 mb-2">
              8. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy periodically to reflect enhancements in our software or updates in applicable legislation. The revised policy will be posted on this page with an updated "Last Updated" timestamp. We encourage you to review this page periodically.
            </p>
          </div>

          <div className="pt-4 border-t border-jamanvar-navy-900/10">
            <h2 className="text-base sm:text-lg font-bold text-jamanvar-navy-950 mb-2">
              9. Contact &amp; Grievance Redressal
            </h2>
            <p className="mb-3">
              If you have any questions, concerns, or requests regarding this Privacy Policy or your data, please contact our Grievance Officer:
            </p>

            <div className="p-4 rounded-2xl bg-jamanvar-cream-50 border border-jamanvar-navy-900/10 text-xs space-y-1.5">
              <div><strong>Enterprise:</strong> KELVION TECH (Kelviontech)</div>
              <div><strong>Proprietor &amp; Officer:</strong> Mihir Manishbhai Darji</div>
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
