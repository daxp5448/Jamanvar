import { CounterFloorSection } from "@/components/home/CounterFloorSection";
import { EcosystemSection } from "@/components/home/EcosystemSection";
import { GettingStartedSection } from "@/components/home/GettingStartedSection";
import { GuestOrderingSection } from "@/components/home/GuestOrderingSection";
import { HomeFaq } from "@/components/home/HomeFaq";
import { HomeHero } from "@/components/home/HomeHero";
import { KitchenSection } from "@/components/home/KitchenSection";
import { OwnerSection } from "@/components/home/OwnerSection";
import { ProductShowcase } from "@/components/home/demo/ProductShowcase";
import { ReliabilitySection } from "@/components/home/ReliabilitySection";
import { UseCasesSection } from "@/components/home/UseCasesSection";
import { WhatsAppFeatureSection } from "@/components/home/WhatsAppFeatureSection";
import { PageCTA } from "@/components/sections/PageCTA";

export default function Home() {
  return (
    <>
      <HomeHero />
      <EcosystemSection />
      <CounterFloorSection />
      <KitchenSection />
      <GuestOrderingSection />
      <WhatsAppFeatureSection />
      <OwnerSection />
      <ProductShowcase />
      <ReliabilitySection />
      <UseCasesSection />
      <GettingStartedSection />
      <HomeFaq />
      <PageCTA
        title="See Jamanvar on your own menu and floor."
        description="Book a walkthrough built around your tables, your dishes and the printers you already have. No commitment."
      />
    </>
  );
}
