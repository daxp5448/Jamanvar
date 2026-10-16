import type { Metadata } from "next";
import { LegalShell } from "@/components/site/LegalShell";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Jamanvar",
  description: "How Jamanvar and KELVION TECH (Kelviontech) collect, use, share and protect information from the website, demo requests and the Jamanvar restaurant software.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalShell badge="Legal and data protection" title="Privacy policy" updated="Effective January 1, 2026. Last updated January 2026." current="/privacy-policy">
          {/* Legal Notice */}
          <div className="mb-10 rounded-card border border-brand-200 bg-brand-50 p-5 text-ink">
            <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] text-brand-text">
              <ShieldCheck className="h-4 w-4" />
              <span>Entity Identification</span>
            </div>
            <p className="!mb-0 text-ink-soft">
              This Privacy Policy applies to the <strong>Jamanvar</strong> software application, web platform (<a href="https://jamanvar.kelviontech.in">https://jamanvar.kelviontech.in</a>), and related restaurant management services owned and operated by <strong>KELVION TECH (Kelviontech)</strong>, a proprietorship firm represented by its proprietor <strong>Mihir Manishbhai Darji</strong>, located in Ahmedabad, Gujarat, India.
            </p>
          </div>

          <div>
            <h2>
              1. Overview &amp; Commitment
            </h2>
            <p>
              At Jamanvar and KELVION TECH, we respect your privacy and are committed to protecting the personal and operational business data you share with us. This policy describes how we collect, use, store, process, and protect your information when you access our website, book product demonstrations, purchase software licenses, or use our restaurant point-of-sale applications.
            </p>
          </div>

          <div>
            <h2>
              2. Information We Collect
            </h2>
            <p className="mb-2">We may collect the following categories of information:</p>
            <ul>
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
            <h2>
              3. How We Use Your Information
            </h2>
            <p className="mb-2">The information we collect is utilized strictly for legitimate business and operational purposes, including:</p>
            <ul>
              <li>Configuring, activating, and delivering your Jamanvar software license and restaurant menu database.</li>
              <li>Providing technical assistance, hardware pairing guidance, staff training, and ongoing customer support.</li>
              <li>Processing subscription payments and issuing GST-compliant tax invoices.</li>
              <li>Synchronizing orders, KDS tickets, and inventory levels across your local terminals and secure cloud storage.</li>
              <li>Sending critical operational announcements, security updates, and billing renewal notices.</li>
              <li>Investigating technical faults, debugging performance bottlenecks, and safeguarding against unauthorized access.</li>
            </ul>
          </div>

          <div>
            <h2>
              4. Data Sharing &amp; Third-Party Services
            </h2>
            <p className="mb-2">
              <strong>We do not sell, rent, or trade your personal or business data to third-party advertisers or data brokers.</strong>
            </p>
            <p className="mb-2">We only share information with trusted third-party service providers essential for delivering our services:</p>
            <ul>
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
            <h2>
              5. Cookies &amp; Tracking Technologies
            </h2>
            <p>
              Our website uses essential operational cookies and session tokens strictly necessary for user authentication, security verification, and interface preference storage. We do not employ intrusive third-party cross-site advertising trackers.
            </p>
          </div>

          <div>
            <h2>
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
            <h2>
              7. Your Rights &amp; Choices
            </h2>
            <p className="mb-2">As a registered user or client, you have the right to:</p>
            <ul>
              <li>Access and review the business contact data we hold about you.</li>
              <li>Request correction or updating of inaccurate account information.</li>
              <li>Request an export of your restaurant menu and historical sales reports in standard format (CSV/Excel).</li>
              <li>Request account termination and data deletion upon subscription expiry, subject to statutory tax retention laws.</li>
            </ul>
          </div>

          <div>
            <h2>
              8. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy periodically to reflect enhancements in our software or updates in applicable legislation. The revised policy will be posted on this page with an updated &quot;Last Updated&quot; timestamp. We encourage you to review this page periodically.
            </p>
          </div>

          <div className="mt-12 border-t border-line">
            <h2>
              9. Contact &amp; Grievance Redressal
            </h2>
            <p className="mb-3">
              If you have any questions, concerns, or requests regarding this Privacy Policy or your data, please contact our Grievance Officer:
            </p>

            <div className="rounded-card border border-line bg-ivory p-5 space-y-1.5">
              <div><strong>Enterprise:</strong> KELVION TECH (Kelviontech)</div>
              <div><strong>Proprietor &amp; Officer:</strong> Mihir Manishbhai Darji</div>
              <div><strong>Location:</strong> Ahmedabad, Gujarat, India</div>
              <div><strong>Official Email:</strong> <a href="mailto:kelviontech@gmail.com">kelviontech@gmail.com</a></div>
              <div><strong>Phone / WhatsApp:</strong> +91 81402 67475 / +91 93278 95570</div>
            </div>
          </div>
    </LegalShell>
  );
}
