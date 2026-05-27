"use client"

import React from 'react'
import { useInfluencerLanding } from '../context'
import { SidePanel } from '../ui/SidePanel'
import { DemoPanel } from './DemoPanel'
import { OnboardingPanel } from './OnboardingPanel'
import { InvitationPanel } from './InvitationPanel'
import { CasesPanel } from './CasesPanel'

export function PanelHost() {
  const { activePanel } = useInfluencerLanding()

  return (
    <SidePanel>
      {activePanel === 'demo' && <DemoPanel />}
      {activePanel === 'onboarding' && <OnboardingPanel />}
      {activePanel === 'invitation' && <InvitationPanel />}
      {activePanel === 'cases' && <CasesPanel />}
    </SidePanel>
  )
}
