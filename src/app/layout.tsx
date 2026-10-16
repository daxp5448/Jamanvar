import type { Metadata, Viewport } from "next";
import { Manrope, Noto_Sans_Gujarati } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Footer } from "@/components/site/Footer";
import { RevealObserver } from "@/components/site/RevealObserver";
import { CONTACT } from "@/content/navigation";
import { LOGO, OG_IMAGE } from "@/content/brand";

const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const gujarati = Noto_Sans_Gujarati({
  subsets: ["gujarati"],
  weight: ["400", "600"],
  variable: "--font-gujarati",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://jamanvar.kelviontech.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  title: "Jamanvar | Restaurant POS & Management Software in India",
  description:
    "Jamanvar is restaurant software for billing, captain and QR ordering, kitchen display, table management, inventory and owner reports, with offline billing.",
  keywords: [
    "Restaurant POS India",
    "Restaurant Management Software",
    "Billing Software India",
    "Kitchen Display System KDS",
    "QR ordering for restaurants",
    "Table Floor Management",
    "Restaurant Inventory Management",
    "Jamanvar POS",
    "Kelviontech",
  ],
  authors: [{ name: "Kelviontech" }],
  openGraph: {
    title: "Jamanvar | Restaurant POS & Management Software in India",
    description:
      "Billing, kitchen display, captain and QR ordering, tables, inventory and owner reports in one connected restaurant system.",
    type: "website",
    locale: "en_IN",
    siteName: "Jamanvar",
    images: [OG_IMAGE],
  },
};

export const viewport: Viewport = {
  themeColor: "#FFF8F0",
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Jamanvar",
  url: SITE_URL,
  logo: `${SITE_URL}${LOGO.master}`,
  email: CONTACT.email,
  telephone: CONTACT.phones[0].tel,
  parentOrganization: { "@type": "Organization", name: "KELVION TECH", url: CONTACT.studio },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${sans.variable} ${gujarati.variable}`} suppressHydrationWarning>
      <head>
        <script
          // Enables scroll-reveal styles only when JavaScript runs.
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
      </head>
      <body className="bg-ivory font-sans text-ink">
        <SiteHeader />
        <main id="main" tabIndex={-1} className="focus:outline-none">
          {children}
        </main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
