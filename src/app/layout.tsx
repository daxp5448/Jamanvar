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
  title: "Jamanvar POS | Restaurant POS & Management Software in India",
  description:
    "Jamanvar is restaurant POS and operations management software for billing, kitchen display, table management, inventory, analytics and restaurant operations.",
  keywords: [
    "Restaurant POS India",
    "Restaurant Management Software",
    "Billing Software India",
    "Kitchen Display System KDS",
    "Table Floor Management",
    "Restaurant Inventory Management",
    "Jamanvar POS",
    "Kelviontech",
    "Mihir Manishbhai Darji",
  ],
  authors: [{ name: "Kelviontech (Prop. Mihir Manishbhai Darji)" }],
  openGraph: {
    title: "Jamanvar POS | Restaurant POS & Management Software in India",
    description:
      "Jamanvar is restaurant POS and operations management software for billing, kitchen display, table management, inventory, analytics and restaurant operations.",
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
