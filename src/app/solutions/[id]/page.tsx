import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SolutionPageBody } from "@/components/sections/SolutionPageBody";
import { SOLUTIONS, getSolution } from "@/content/solutions";
import { OG_IMAGE } from "@/content/brand";

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
      images: [OG_IMAGE],
    },
  };
}

export default function SolutionPage({ params }: { params: { id: string } }) {
  const solution = getSolution(params.id);
  if (!solution) notFound();
  return <SolutionPageBody solution={solution} />;
}
