"use client"

import React, { createContext, useContext, useState } from 'react'

type Role = 'brands' | 'creators'

export type PanelType = 'invitation' | 'demo' | 'cases' | 'onboarding' | null

interface InfluencerLandingContextType {
  role: Role
  setRole: (role: Role) => void
  activePanel: PanelType
  openPanel: (type: PanelType) => void
  closePanel: () => void
}

const InfluencerLandingContext = createContext<InfluencerLandingContextType | undefined>(
  undefined
)

export function InfluencerLandingProvider({ children }: { children: React.ReactNode }) {
  const [role, setRole] = useState<Role>('brands')
  const [activePanel, setActivePanel] = useState<PanelType>(null)

  const openPanel = (type: PanelType) => setActivePanel(type)
  const closePanel = () => setActivePanel(null)

  return (
    <InfluencerLandingContext.Provider
      value={{ role, setRole, activePanel, openPanel, closePanel }}
    >
      {children}
    </InfluencerLandingContext.Provider>
  )
}

export function useInfluencerLanding() {
  const ctx = useContext(InfluencerLandingContext)
  if (ctx === undefined) {
    throw new Error('useInfluencerLanding must be used within InfluencerLandingProvider')
  }
  return ctx
}
