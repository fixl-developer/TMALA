import { CinematicHero } from '@/components/influencer-landing/sections/CinematicHero'
import { PainPitchSection } from '@/components/influencer-landing/sections/PainPitchSection'
import { SolutionArchitectureSection } from '@/components/influencer-landing/sections/SolutionArchitectureSection'
import { RoleWorkspacesSection } from '@/components/influencer-landing/sections/RoleWorkspacesSection'
import { TenantControlSection } from '@/components/influencer-landing/sections/TenantControlSection'
import { PricingSection } from '@/components/influencer-landing/sections/PricingSection'
import { FAQSection } from '@/components/influencer-landing/sections/FAQSection'
import { FinalCTASection } from '@/components/influencer-landing/sections/FinalCTASection'

export const metadata = {
  title: 'Influencer Agency OS | TalentOS',
  description:
    'Run an influencer agency, not a spreadsheet factory. 8 role shells, escrow-secured payouts, ASCI/FTC-ready compliance — the complete operating system for modern creator economy agencies.',
}

export default function InfluencerLandingPage() {
  return (
    <main className="bg-bg-base text-text-main">
      <CinematicHero />
      <SolutionArchitectureSection />
      <PainPitchSection />
      <RoleWorkspacesSection />
      <div id="tenant-control">
        <TenantControlSection />
      </div>
      <PricingSection />
      <div id="faq">
        <FAQSection />
      </div>
      <FinalCTASection />
    </main>
  )
}
