import type { Metadata } from "next";
import { LegalShell } from "@/components/site/LegalShell";
import { ShieldCheck, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Refund and Cancellation Policy | Jamanvar",
  description: "How cancellations and refunds work for Jamanvar software subscriptions, onboarding packages and tested hardware supplied by KELVION TECH (Kelviontech).",
  alternates: { canonical: "/refund-cancellation" },
};

export default function RefundCancellationPage() {
  return (
    <LegalShell badge="Customer policy" title="Refund and cancellation policy" updated="Effective January 1, 2026. Last updated January 2026." current="/refund-cancellation">
          {/* Identity Notice */}
          <div className="mb-10 rounded-card border border-brand-200 bg-brand-50 p-5 text-ink">
            <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] text-brand-text">
              <ShieldCheck className="h-4 w-4" />
              <span>Policy Scope</span>
            </div>
            <p className="!mb-0 text-ink-soft">
              This Refund and Cancellation Policy applies to software licenses, subscription plans, onboarding packages, and tested hardware procured through <strong>Jamanvar</strong>, a product of <strong>KELVION TECH (Kelviontech)</strong> (Proprietor: <strong>Mihir Manishbhai Darji</strong>), Ahmedabad, Gujarat, India.
            </p>
          </div>

          <div>
            <h2>
              1. Software Subscription Cancellation
            </h2>
            <p className="mb-2">
              We believe in delivering genuine value to restaurant proprietors without rigid lock-ins:
            </p>
            <ul>
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
            <h2>
              2. 7-Day Money-Back Guarantee (Software License)
            </h2>
            <p className="mb-2">
              To ensure complete confidence when choosing Jamanvar, we offer a <strong>7-Day Money-Back Guarantee</strong> on initial software subscription purchases:
            </p>
            <ul>
              <li>
                If you find that the software does not satisfy your operational requirements, simply submit a cancellation request within seven (7) calendar days of your initial purchase date.
              </li>
              <li>
                Upon review, we will issue a 100% refund of the software subscription fee paid, no questions asked.
              </li>
            </ul>
          </div>

          <div>
            <h2>
              3. Hardware Return &amp; Replacement Policy
            </h2>
            <p className="mb-2">
              For restaurant hardware procured through Jamanvar (such as ESC/POS thermal printers, touch terminals, and cash drawers):
            </p>
            <ul>
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
            <h2>
              4. Non-Refundable Items &amp; Services
            </h2>
            <p className="mb-2">The following items and services are non-refundable:</p>
            <ul>
              <li>Custom on-site menu photography or custom software engineering development already delivered.</li>
              <li>Consumable restaurant supplies (e.g., opened thermal paper roll cartons).</li>
              <li>Subscription renewal fees requested after the 7-day money-back window has lapsed.</li>
            </ul>
          </div>

          <div>
            <h2>
              5. Refund Processing Timeline
            </h2>
            <div className="rounded-card border border-line bg-ivory p-5 space-y-2">
              <div className="flex items-center gap-2 font-bold text-ink">
                <Clock className="h-4 w-4" />
                <span>5 to 7 Working Days Turnaround</span>
              </div>
              <p className="!mb-0 text-ink-soft">
                Once a refund request is approved, the refund is initiated immediately. The amount is credited back to the original payment method (Bank Account, UPI, Debit/Credit Card) within <strong>5 to 7 business days</strong>, subject to standard banking clearance times.
              </p>
            </div>
          </div>

          <div>
            <h2>
              6. How to Request a Cancellation or Refund
            </h2>
            <p className="mb-3">
              To request a cancellation, hardware return, or refund, please follow these steps:
            </p>
            <ol>
              <li>
                Send an email to <a href="mailto:kelviontech@gmail.com">kelviontech@gmail.com</a> with the subject line <em>&quot;Refund Request - [Your Restaurant Name]&quot;</em>.
              </li>
              <li>Include your Invoice Number, registered contact phone number, and a brief explanation of the reason for the refund.</li>
              <li>Our support desk in Ahmedabad will acknowledge your request within 24 hours and guide you through the process.</li>
            </ol>
          </div>

          <div className="mt-12 border-t border-line">
            <h2>
              7. Questions &amp; Support Inquiries
            </h2>
            <p className="mb-3">
              For any clarification regarding billing or refunds, reach out to our team:
            </p>

            <div className="rounded-card border border-line bg-ivory p-5 space-y-1.5">
              <div><strong>Enterprise:</strong> KELVION TECH (Kelviontech)</div>
              <div><strong>Proprietor:</strong> Mihir Manishbhai Darji</div>
              <div><strong>Location:</strong> Ahmedabad, Gujarat, India</div>
              <div><strong>Official Email:</strong> <a href="mailto:kelviontech@gmail.com">kelviontech@gmail.com</a></div>
              <div><strong>Phone / WhatsApp:</strong> +91 81402 67475 / +91 93278 95570</div>
            </div>
          </div>
    </LegalShell>
  );
}
