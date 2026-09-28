# Cashfree Payment Gateway Onboarding — KelvionTech / Jamanvar

What we did to get `jamanvar.kelviontech.in` ready for Cashfree's KYC review,
the legal/business facts behind those decisions, a walkthrough of Cashfree's
actual onboarding flow, and what's still open. Not code-related — kept here
for reference alongside the deployment docs.

---

## 1. Business & legal identity

- **Entity type:** Proprietorship — no separate legal identity from the
  proprietor. Every PAN/KYC/AML check at a bank or gateway resolves to the
  proprietor personally, not to a distinct "KelvionTech" entity.
- **Proprietor:** Mihir Manishbhai Darji.
- **Registered enterprise name (Udyam "Name of Enterprise"):** KELVION TECH
  (two words) — spelled differently from the brand used everywhere else,
  "Kelviontech" (one word). **Not yet reconciled** — worth fixing since
  name-matching across documents is exactly what gateways check.
- **Udyam Registration Number:** UDYAM-GJ-01-0669539.
- **Registration on file:** MSME/Udyam certificate only. No GST, no company
  registration (Pvt Ltd/LLP/etc.).
- **PAN:** Proprietor's personal PAN (4th character "P") is correct to use —
  a proprietorship has no separate "business PAN" in India.

---

## 2. Which website was submitted, and why

Submitted: **`jamanvar.kelviontech.in`** (the Jamanvar restaurant POS
product), via Cashfree → "Collect Payments" → "Website".

**Not** `kelviontech.in` (KelvionTech's main site) — as of this review it
reads as a bare agency/portfolio stub ("KelvionTech — Engineering Studio in
Ahmedabad") with no products/services list, footer, or contact info, and
would likely fail Cashfree's "products/services listed" check as-is.

**Plan for `kelviontech.in`:** once it has real content and other KelvionTech
products exist, ask Cashfree support to **add it as an additional website on
the existing merchant account** — don't open a second merchant account.
Two accounts under the same PAN (even via a different Gmail login) can read
as structuring to the gateway's AML system and risk a freeze on either.

---

## 3. Website changes made for Cashfree/credibility review

All live on `jamanvar.kelviontech.in` as of 2026-09-10.

**Legal identity**
- Registered business name added to the site footer ([Footer.tsx](src/components/Footer.tsx)) and to dedicated legal-identity cards on the About and Contact pages.
- Footer simplified to just the business name — the proprietor's personal name was removed from the global footer (Cashfree's automated check looks for the registered *business* name, not a personal name) and kept only on the Contact/About pages where it belongs.
- "Verified Legal Entity" (Contact page) → "Business & Legal Information" — avoided implying an external party had already verified the business; Cashfree does its own verification.
- "a recognized technology enterprise registered in..." (About page) → accurate "a proprietorship technology business based in Ahmedabad, Gujarat, India" — no invented recognition/certification.
- "certified hardware" (pricing, refund-cancellation, terms, hardware section) → "tested hardware" — no certifying body backs "certified".

**Pricing consistency**
- Pricing page CTA buttons previously showed a hardcoded monthly price regardless of the annual/monthly toggle. Fixed so the CTA price always computes from the same value as the displayed price ([pricing/page.tsx](src/app/pricing/page.tsx)).
- Annual total now shown explicitly (e.g. "Billed annually as ₹48,000/year") instead of an unexplained per-month figure.

**Performance/ROI claims**
- Specific unverified numbers ("Average Service Delay -4.5min", "Average Profit Margin Lift +22%", the ROI calculator's monthly-savings output) relabeled as illustrative examples with a disclaimer, instead of reading as measured customer results ([OwnerSection.tsx](src/components/OwnerSection.tsx), [RoiCalculator.tsx](src/components/RoiCalculator.tsx), [AnalyticsSection.tsx](src/components/AnalyticsSection.tsx)).

**Security & GST claims**
- Dropped unverified infrastructure claims: "Bank-grade encryption", "256-Bit SSL/TLS", "TLS 1.3", "Local Offline Encryption & Auto-Backup", "100% statutory GST accuracy", "One-Click GSTR-1 & GSTR-3B Export", "99.9% cloud uptime" ([security-gst/page.tsx](src/app/security-gst/page.tsx), [terms-and-conditions/page.tsx](src/app/terms-and-conditions/page.tsx)).
- Replaced with wording scoped to what's actually true (the site itself is HTTPS/TLS, hosted on Oracle Cloud) plus a tax-advisor disclaimer for GST claims. Privacy policy also dropped an unused "AWS" mention.

**Fake testimonials**
- `RestaurateurStories.tsx` contained fabricated named testimonials (fake people, restaurants, quoted results) presented as "Real stories... powered by Jamanvar POS." It was **not wired into any page** (never actually live), but rewritten into honestly-labeled illustrative scenarios in case it's used later.

**Legal/policy pages**
- Privacy Policy, Terms & Conditions, Refund & Cancellation, and Security & GST pages now exist as real content (previously placeholder footer links) at `/privacy-policy`, `/terms-and-conditions`, `/refund-cancellation`, `/security-gst`.

Full production build passes, all 12 routes return 200, no lorem ipsum, no console-breaking issues found in review.

---

## 4. Bank account for settlement

- **Now:** personal bank account is acceptable for the demo/pilot stage — legally, proprietor income = business income for a proprietorship.
- **Before scaling past the pilot client:** open a **current account** in the trade name (e.g. "Mihir Manishbhai Darji trading as KelvionTech"). The Udyam certificate is accepted by most banks as trade-name proof — no GST required to open it.
- **Switching later is supported:** Cashfree allows updating the settlement bank account after onboarding (personal → current) via re-verification. Not instant, and settlements can be briefly held during the switch — do it in a quiet window, not mid-transaction-volume.

---

## 5. Cashfree's onboarding flow — what each step actually asks for

Based on Cashfree's own onboarding documentation, cross-checked against the live flow:

1. **Business Details** — brand name, product/service category, annual turnover range.
2. **Choose Your Solution** — "Collect Payments" → "Website" (`jamanvar.kelviontech.in`). Personal PAN is correct for this path; "Verify My Customers" / "Make Payouts" are the only paths that mandate a business PAN.
3. **KYC Information:**
   - **Verify Signatory Details** — verifies the proprietor personally, via Aadhaar OTP (fastest), CKYC, DigiLocker, or manual passport/voter ID/driving licence upload.
   - **Beneficial Owner Details** — per Cashfree's docs, **not typically required for proprietorships** (applies mainly to companies/LLPs/partnerships).
   - **Principal Place of Business** — full business address; subject to physical verification, so use a reachable address.
   - **Upload Business Documents** — **requires at least two** proofs of business existence, from: Municipal certificate, Udyam/MSME registration, Shop & Establishment certificate, GST registration, or other government registration proof. **Currently only have one (Udyam)** — see open items below.
4. **Bank Account Setup** — account number + IFSC, click "Verify" (automated validation, likely penny-drop). No cancelled cheque or exact-name-match explicitly required per Cashfree's docs. Note: "the first transaction in newly opened accounts must be a credit from an existing KYC-complied bank account" — only relevant if the account entered is brand new.

### PAN warning ("It looks like you've entered a personal PAN")
Most likely an informational upsell nudge tied to unlocking "Verify My Customers"/"Make Payouts", not a hard blocker for "Collect Payments". If it does block progress, check that the Business/Entity Type selected earlier is set to "Proprietorship/Individual" — a mismatch there (not the PAN itself) is the likely cause.

---

## 6. Open gap: second business-proof document

Cashfree needs **two** proofs of business existence; only the Udyam
certificate exists today. Options for the second document:

- **Shop & Establishment certificate** — fastest to obtain in Gujarat (typically a few days, low cost). Most accessible near-term option.
- **Voluntary GST registration** — not legally required yet at current volume, but doubles as the proper B2B tax-invoicing setup already promised on the pricing page (ITC-compliant invoices for clients like Prince Corner). Slower than Shop & Establishment but higher long-term value.

**Alternative if you want to start today with only Udyam:** Razorpay's
payment-gateway document checklist (a different product from RazorpayX
business current accounts, which is stricter and does *not* accept Udyam)
lists business registration as "at least one of: GST / MSME-Udyam / Shop &
Establishment / Professional tax" — meaning Udyam alone may satisfy that
category there, on top of the usual PAN + personal ID + cancelled
cheque/passbook. Not guaranteed at manual-review stage, but the best odds of
a single-document path right now.

---

## 7. Outstanding items

- [ ] Get a second business-proof document for Cashfree (Shop & Establishment cert, or voluntary GST registration).
- [ ] Reconcile "KELVION TECH" (Udyam) vs. "Kelviontech" (brand) spelling mismatch.
- [ ] Open a current account in the trade name once past pilot volume.
- [ ] Build out real content on `kelviontech.in`, then add it to the existing Cashfree merchant account as a second website (don't open a new account).
- [ ] If going the Razorpay route instead/also: confirm live document requirements at signup, since third-party summaries can lag the actual form.

---

*Last updated: 2026-09-10.*
