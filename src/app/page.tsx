"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SiteIntroVideo } from "@/components/SiteIntroVideo";
import { RestaurantFlow } from "@/components/RestaurantFlow";
import { CursorImageTrail } from "@/components/CursorImageTrail";
import { Features } from "@/components/Features";
import { ProductShowcase } from "@/components/ProductShowcase";
import { OwnerSection } from "@/components/OwnerSection";
import { RoiCalculator } from "@/components/RoiCalculator";
import { AnalyticsSection } from "@/components/AnalyticsSection";
import { HardwareSection } from "@/components/HardwareSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { DemoModal } from "@/components/DemoModal";
import { WatermarkOverlay } from "@/components/WatermarkOverlay";
import { ThermalBillModal, BillData } from "@/components/ThermalBillModal";

export default function Home() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isBillModalOpen, setIsBillModalOpen] = useState(false);
  const [activeBillData, setActiveBillData] = useState<BillData | null>(null);

  useEffect(() => {
    const handleOpenBill = (e: Event) => {
      const customEvent = e as CustomEvent<BillData>;
      if (customEvent.detail) {
        setActiveBillData(customEvent.detail);
      }
      setIsBillModalOpen(true);
    };

    window.addEventListener("open-bill-modal", handleOpenBill as EventListener);
    return () => window.removeEventListener("open-bill-modal", handleOpenBill as EventListener);
  }, []);

  const handleOpenDemo = () => {
    setIsDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setIsDemoModalOpen(false);
  };

  const handleCloseBill = () => {
    setIsBillModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-jamanvar-cream-100 selection:bg-jamanvar-saffron-200 selection:text-jamanvar-navy-900 relative">
      {/* 8-Second Cinematic Site Intro (Natural scale, muted, smooth dissolve) */}
      <SiteIntroVideo />

      {/* Root Level Dynamic Thermal Bill Modal */}
      <ThermalBillModal
        isOpen={isBillModalOpen}
        onClose={handleCloseBill}
        billData={activeBillData}
      />

      {/* Ambient Full-Site Watermark Overlay */}
      <WatermarkOverlay />

      {/* Interactive Demo Request Modal */}
      <DemoModal isOpen={isDemoModalOpen} onClose={handleCloseDemo} />

      {/* Sticky Floating Glass Navbar (Permanent logo) */}
      <Navbar onOpenDemo={handleOpenDemo} />

      {/* Hero Section with Parallax POS Mockup */}
      <Hero onOpenDemo={handleOpenDemo} />

      {/* Section: The Restaurant Flow (Order -> Kitchen -> Table -> Bill -> Payment -> Insight) */}
      <RestaurantFlow />

      {/* Section: Signature Cursor Image Trail */}
      <CursorImageTrail />

      {/* Section: Asymmetric Product Features */}
      <Features />

      {/* Section: Interactive Product Showcase (POS, Tables, Kitchen, Inventory, Analytics) */}
      <ProductShowcase />

      {/* Section: Restaurant Owner Editorial & Philosophy */}
      <OwnerSection />

      {/* Section: Interactive ROI & Table Turn Savings Simulator */}
      <RoiCalculator onOpenDemo={handleOpenDemo} />

      {/* Section: Data / Analytics Intelligence Moment */}
      <AnalyticsSection />

      {/* Section: Hardware Ecosystem & Offline Resilience */}
      <HardwareSection />

      {/* Section: Final Royal Gujarati CTA */}
      <FinalCTA onOpenDemo={handleOpenDemo} />

      {/* Footer */}
      <Footer />
    </main>
  );
}
