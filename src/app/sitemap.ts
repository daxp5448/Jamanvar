import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/content/products";
import { SOLUTIONS } from "@/content/solutions";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://jamanvar.kelviontech.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    ...PRODUCTS.map((p) => `/products/${p.slug}`),
    ...SOLUTIONS.map((s) => `/solutions/${s.id}`),
    "/about",
    "/features",
    "/how-it-works",
    "/support",
    "/contact",
    "/book-a-demo",
    "/privacy-policy",
    "/terms-and-conditions",
    "/refund-cancellation",
    "/security-gst",
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
