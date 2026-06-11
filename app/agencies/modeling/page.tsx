import { CinematicHero } from '@/components/modeling-landing/sections/CinematicHero'
import { PillarsSection } from '@/components/modeling-landing/sections/PillarsSection'
import { OptionBoardSection } from '@/components/modeling-landing/sections/OptionBoardSection'
import { RoleConsoleSection } from '@/components/modeling-landing/sections/RoleConsoleSection'
import { DemoWorkspacesSection } from '@/components/modeling-landing/sections/DemoWorkspacesSection'
import { MoneyTrustSection } from '@/components/modeling-landing/sections/MoneyTrustSection'
import { ModulesGridSection } from '@/components/modeling-landing/sections/ModulesGridSection'
import { FAQSection } from '@/components/modeling-landing/sections/FAQSection'
import { FinalCTASection } from '@/components/modeling-landing/sections/FinalCTASection'

export const metadata = {
  title: 'Modelling Agency OS | TalentOS',
  description:
    'Book without the chaos. The precision OS for boutique and holding modelling agencies — Option Board, Trust Account splits, co-guardian compliance, and curfew safety, end-to-end.',
}

export default function ModelingLandingPage() {
  return (
    <main>
      <CinematicHero />
      <PillarsSection />
      <OptionBoardSection />
      <RoleConsoleSection />
      <DemoWorkspacesSection />
      <MoneyTrustSection />
      <ModulesGridSection />
      <FAQSection />
      <FinalCTASection />
    </main>
  )
}
