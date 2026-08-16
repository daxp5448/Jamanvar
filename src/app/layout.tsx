import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond, Noto_Sans_Gujarati } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const notoSansGujarati = Noto_Sans_Gujarati({
  subsets: ["gujarati"],
  variable: "--font-gujarati",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://jamanvar.kelviontech.in"
  ),
  alternates: {
    canonical: "/",
  },
  title: "Jamanvar POS | Modern Restaurant Management & Billing Software",
  description:
    "Run your restaurant without the chaos. Jamanvar brings billing, orders, tables, kitchen operations, inventory and insights together in one simple, premium system.",
  keywords: [
    "Restaurant POS",
    "Restaurant Management Software",
    "Billing Software India",
    "Kitchen Display System KDS",
    "Table Management",
    "Restaurant Inventory Management",
    "Jamanvar POS",
    "Kelviontech",
  ],
  authors: [{ name: "Kelviontech" }],
  openGraph: {
    title: "Jamanvar POS | Run your restaurant without the chaos",
    description:
      "Modern restaurant POS and management software crafted for Indian hospitality. Faster billing, kitchen tickets, table floors, and live analytics.",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/images/jamanvar/logo.jpg",
        width: 1200,
        height: 1200,
        alt: "Jamanvar Restaurant POS by Kelviontech",
      },
    ],
  },
  icons: {
    icon: "/images/jamanvar/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${cormorantGaramond.variable} ${notoSansGujarati.variable} antialiased`}
    >
      <body className="bg-jamanvar-cream-100 text-jamanvar-navy-950 font-sans min-h-screen selection:bg-jamanvar-saffron-200 selection:text-jamanvar-navy-900">
        {children}
      </body>
    </html>
  );
}
