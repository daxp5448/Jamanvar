// Site navigation shared by the header, mobile menu and footer.
// Every href here is an existing route.

import { PRODUCTS } from "./products";
import { SOLUTIONS } from "./solutions";

export interface NavProductGroup {
  label: string;
  slugs: string[];
}

export const PRODUCT_GROUPS: NavProductGroup[] = [
  { label: "Guest ordering", slugs: ["qr-ordering", "kiosk", "whatsapp-ordering"] },
  { label: "Counter & floor", slugs: ["pos", "captain", "tables"] },
  { label: "Kitchen & stock", slugs: ["kds", "inventory"] },
  { label: "Owner & setup", slugs: ["analytics", "hardware"] },
];

export const NAV_PRODUCT_GROUPS = PRODUCT_GROUPS.map((g) => ({
  label: g.label,
  items: g.slugs.map((slug) => {
    const p = PRODUCTS.find((x) => x.slug === slug);
    if (!p) throw new Error(`Navigation references unknown product "${slug}"`);
    return { href: `/products/${p.slug}`, name: p.name, description: p.shortDescription };
  }),
}));

export const NAV_SOLUTIONS = SOLUTIONS.map((s) => ({
  href: `/solutions/${s.id}`,
  name: s.navTitle,
  description: s.navDescription,
}));

export const NAV_LINKS = [
  { name: "How it works", href: "/how-it-works" },
  { name: "Support", href: "/support" },
  { name: "About", href: "/about" },
];

export const CONTACT = {
  email: "kelviontech@gmail.com",
  phones: [
    { display: "+91 81402 67475", tel: "+918140267475" },
    { display: "+91 93278 95570", tel: "+919327895570" },
  ],
  whatsapp: "918140267475",
  location: "Ahmedabad, Gujarat, India",
  hours: "Monday to Saturday, 9:30 AM – 7:00 PM IST",
  company: "KELVION TECH (Kelviontech)",
  studio: "https://kelviontech.in",
} as const;
