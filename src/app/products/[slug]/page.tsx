import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductPageBody } from "@/components/sections/ProductPageBody";
import { PRODUCTS, getProduct } from "@/content/products";
import { OG_IMAGE } from "@/content/brand";

// Product pages with a bespoke layout live in their own route folder
// (a static segment takes precedence over this dynamic one).
const CUSTOM_PAGES = new Set(["whatsapp-ordering"]);

export const dynamicParams = false;

export function generateStaticParams() {
  return PRODUCTS.filter((p) => !CUSTOM_PAGES.has(p.slug)).map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProduct(params.slug);
  if (!product) return {};
  return {
    title: product.metaTitle,
    description: product.metaDescription,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: product.metaTitle,
      description: product.metaDescription,
      type: "website",
      images: [OG_IMAGE],
    },
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product || CUSTOM_PAGES.has(product.slug)) notFound();
  return <ProductPageBody product={product} />;
}
