# KelvionTech — legal structure & payment gateway compliance notes

Running notes on KelvionTech's business registration status and what it means
for payment gateway (Cashfree/Razorpay) onboarding, banking, and invoicing.
Not code-related — kept here for reference alongside the deployment docs.

---

## Current legal structure

- **Entity type:** Proprietorship — no separate registration from the
  proprietor.
- **Proprietor (Udyam "Owner Name"):** Mihir Manishbhai Darji.
- **Registered enterprise name (Udyam "Name of Enterprise"):** KELVION TECH
  (two words) — note this is spelled differently from the brand used
  everywhere else on the site/product, "Kelviontech" (one word). Worth
  reconciling at some point since name-matching is exactly what gateways
  check.
- **Udyam Registration Number:** UDYAM-GJ-01-0669539.
- **Registration on file:** MSME / Udyam certificate only. No GST, no company
  registration (Pvt Ltd / LLP / etc.).

**Why this matters:** a proprietorship has no legal identity separate from
the proprietor. Every KYC/AML check at a payment gateway or bank resolves to
Mihir M Darji personally (same PAN), not to a distinct "KelvionTech" entity.
This drives every decision below.

---

## Payment gateway onboarding (Cashfree, and Razorpay if considered later)

Live product currently being onboarded: `jamanvar.kelviontech.in` (Jamanvar
restaurant POS), via **Cashfree**, "Collect Payments" → "Website".

### Order: register with `jamanvar.kelviontech.in` first, add `kelviontech.in` later

Submit the Cashfree KYC now against **`jamanvar.kelviontech.in`**, not
`kelviontech.in` — it's the site actually collecting payment for the client
who's demo-ready, and it already checks out against Cashfree's four
requirements (live, HTTPS, products/services listed — just needs the legal
name added to the footer).

`kelviontech.in` currently reads as an agency/portfolio page ("KelvionTech —
Engineering Studio in Ahmedabad") rather than a storefront with listed
products, which risks failing the "products/services listed" check as-is.
Confirm/update it before ever submitting it to a gateway.

### Don't open a second merchant account for `kelviontech.in`

Even under a different Gmail login, a second Cashfree account will KYC to the
same PAN. Two merchant accounts on one PAN can read as structuring to the
gateway's AML system and risk a freeze on either/both accounts.

**Instead:** once `kelviontech.in` (and other KelvionTech products) are
ready, contact Cashfree support and ask to **add `kelviontech.in` as an
additional approved website on the existing merchant account** rather than
creating a new one. Most PAs support multiple domains under one KYC'd entity.

### Bank account for settlement

- Personal bank account is acceptable for now (demo / pilot stage) — legally
  proprietor income = business income.
- **Don't leave it there** once real client volume starts. Banks monitor
  savings accounts for business-pattern inflows and can freeze them under
  RBI's savings-account misuse rules.
- **Action:** open a **current account** in the trade name (e.g. "Mihir M
  Darji trading as KelvionTech") before scaling past the pilot client. The
  Udyam/MSME certificate is accepted by most banks as trade-name proof for
  this — no GST required to open it.
- **Switching later is fine:** Cashfree supports updating the settlement bank
  account after onboarding (personal → current account) via penny-drop
  re-verification + a cancelled cheque/statement. Not instant, and
  settlements can be briefly held during the switch — do it in a quiet
  window, not mid-way through a high-transaction period. The new account
  name just needs to reasonably match the registered identity (a "trading
  as" current account is standard and accepted).

### Name consistency (top cause of KYC rejection)

PAN, Udyam certificate, bank account name, and the website footer should all
resolve to the same legal name / trade name. Audit this before submitting KYC
docs to any gateway.

---

## Compliance checklist before scaling past demo

- [x] Legal/registered name added to `jamanvar.kelviontech.in` footer
      ([src/components/Footer.tsx](src/components/Footer.tsx)) — now reads
      "a product of Kelvion Tech (Kelviontech) — Prop. Mihir Manishbhai
      Darji." Done 2026-09-10. (Udyam registration number was added then
      removed the same day — Cashfree's requirement is just the registered
      *name* on the site, not the registration number; publicly listing the
      number wasn't necessary. Keep it in this doc for reference:
      UDYAM-GJ-01-0669539.)
- [ ] Reconcile "KELVION TECH" (Udyam) vs. "Kelviontech" (brand) spelling
      mismatch — either get Udyam corrected or treat as intentionally same
      entity, consistently documented.
- [ ] Name consistency across PAN / Udyam certificate / bank account name /
      website footer (footer now done — bank account and PAN still to
      verify).
- [ ] Current account opened in trade name (see above).
- [ ] GST registration — not legally required below the threshold yet, but
      likely needed soon: B2B clients (e.g. Prince Corner) tend to expect GST
      invoices, and it also smooths PG verification.
- [ ] Website policy pages: `jamanvar.kelviontech.in` footer currently has
      "Privacy Policy" / "Terms of Service" as placeholder text, not real
      links/pages — needs actual pages before Cashfree/Razorpay KYC review.
- [ ] `kelviontech.in` — currently reads as a bare
      agency/portfolio stub (just "KelvionTech — Engineering Studio in
      Ahmedabad", no products/services/footer/contact) — needs real content
      before it can be added as a second website on the Cashfree account.

---

*Last updated: 2026-09-10.*
