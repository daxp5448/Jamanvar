import type { Metadata } from "next";
import { ProductPageBody } from "@/components/internal/ProductPageBody";
import { getProduct } from "@/content/products";

const product = getProduct("pos")!;

export const metadata: Metadata = {
  title: product.metaTitle,
  description: product.metaDescription,
  alternates: { canonical: "/products/pos" },
  openGraph: {
    title: product.metaTitle,
    description: product.metaDescription,
    type: "website",
    images: [{ url: "/images/jamanvar/logo.jpg", width: 1200, height: 1200, alt: product.name }],
  },
};

export default function PosProductPage() {
  return <ProductPageBody product={product} />;
}
