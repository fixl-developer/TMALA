import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { TrustSection } from "@/components/trust-section"
import { WhoIsItForSection } from "@/components/who-is-it-for-section"
import { BlueprintSection } from "@/components/blueprint-section"
import { AIStudioSection } from "@/components/ai-studio-section"
import { ModularAppsSection } from "@/components/modular-apps-section"

import { MorphingCardsSection } from "@/components/morphing-cards-section"
import { ProductShowcaseSection } from "@/components/product-showcase-section"
import { FeaturesSection } from "@/components/features-section"
import { EscrowSection } from "@/components/escrow-section"
import { SecuritySection } from "@/components/security-section"
import { WaitlistSection } from "@/components/waitlist-section"
import { StickyCTA } from "@/components/sticky-cta"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <StatsSection />
      <TrustSection />
      <WhoIsItForSection />
      <BlueprintSection />
      <AIStudioSection />
      <ModularAppsSection />

      <MorphingCardsSection />
      <ProductShowcaseSection />
      <FeaturesSection />
      <EscrowSection />
      <SecuritySection />
      <WaitlistSection />
      {/* <StickyCTA /> */}
    </main>
  )
}
