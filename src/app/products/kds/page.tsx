import type { Metadata } from "next";
import { ProductPageBody } from "@/components/internal/ProductPageBody";
import { getProduct } from "@/content/products";

const product = getProduct("kds")!;

export const metadata: Metadata = {
  title: product.metaTitle,
  description: product.metaDescription,
  alternates: { canonical: "/products/kds" },
  openGraph: {
    title: product.metaTitle,
    description: product.metaDescription,
    type: "website",
    images: [{ url: "/images/jamanvar/logo.jpg", width: 1200, height: 1200, alt: product.name }],
  },
};

export default function KdsProductPage() {
  return <ProductPageBody product={product} />;
}
