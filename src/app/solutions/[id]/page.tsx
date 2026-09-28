import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SolutionPageBody } from "@/components/internal/SolutionPageBody";
import { SOLUTIONS, getSolution } from "@/content/solutions";

export function generateStaticParams() {
  return SOLUTIONS.map((s) => ({ id: s.id }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const solution = getSolution(params.id);
  if (!solution) return {};
  return {
    title: solution.metaTitle,
    description: solution.metaDescription,
    alternates: { canonical: `/solutions/${solution.id}` },
    openGraph: {
      title: solution.metaTitle,
      description: solution.metaDescription,
      type: "website",
      images: [{ url: "/images/jamanvar/logo.jpg", width: 1200, height: 1200, alt: solution.navTitle }],
    },
  };
}

export default function SolutionPage({ params }: { params: { id: string } }) {
  const solution = getSolution(params.id);
  if (!solution) notFound();
  return <SolutionPageBody solution={solution} />;
}
