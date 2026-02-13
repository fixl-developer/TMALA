import { HeroSection } from "@/components/hero-section"
import { MorphingCardsSection } from "@/components/morphing-cards-section"
import { FeaturesSection } from "@/components/features-section"
import { EscrowSection } from "@/components/escrow-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { WaitlistSection } from "@/components/waitlist-section"
import { StickyCTA } from "@/components/sticky-cta"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <MorphingCardsSection />
      <FeaturesSection />
      <EscrowSection />
      <HowItWorksSection />
      <WaitlistSection />
      <StickyCTA />
    </main>
  )
}
