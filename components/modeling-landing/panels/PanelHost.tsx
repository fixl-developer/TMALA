"use client"

import React from 'react'
import { useModelingLanding } from '../context'
import { SidePanel } from '../ui/SidePanel'
import { DemoPanel } from './DemoPanel'
import { TrialPanel } from './TrialPanel'

export function PanelHost() {
  const { activePanel } = useModelingLanding()
  return (
    <SidePanel>
      {activePanel === 'demo' && <DemoPanel />}
      {activePanel === 'trial' && <TrialPanel />}
    </SidePanel>
  )
}
