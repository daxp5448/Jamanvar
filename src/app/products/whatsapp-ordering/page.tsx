import type { Metadata } from "next";
import { PageCTA } from "@/components/sections/PageCTA";
import {
  WhatsAppBenefits,
  WhatsAppEcosystem,
  WhatsAppFaq,
  WhatsAppFulfilment,
  WhatsAppHero,
  WhatsAppHowItWorks,
  WhatsAppOwnerControls,
} from "@/components/whatsapp/WhatsAppSections";
import { getProduct } from "@/content/products";
import { OG_IMAGE } from "@/content/brand";

const product = getProduct("whatsapp-ordering")!;

export const metadata: Metadata = {
  title: product.metaTitle,
  description: product.metaDescription,
  alternates: { canonical: "/products/whatsapp-ordering" },
  openGraph: {
    title: product.metaTitle,
    description: product.metaDescription,
    type: "website",
    images: [OG_IMAGE],
  },
};

export default function WhatsAppOrderingPage() {
  return (
    <>
      <WhatsAppHero />
      <WhatsAppBenefits />
      <WhatsAppHowItWorks />
      <WhatsAppFulfilment />
      <WhatsAppEcosystem />
      <WhatsAppOwnerControls />
      <WhatsAppFaq />
      <PageCTA
        title="Make ordering easier for your customers."
        description="Explore how Jamanvar can bring WhatsApp ordering into your restaurant's digital workflow."
        secondaryLabel="Explore all products"
        secondaryHref="/features"
      />
    </>
  );
}
