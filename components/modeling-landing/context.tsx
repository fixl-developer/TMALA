"use client"

import React, { createContext, useContext, useState } from 'react'

export type PanelType = 'demo' | 'trial' | null

interface ModelingLandingContextType {
  activePanel: PanelType
  openPanel: (type: PanelType) => void
  closePanel: () => void
}

const ModelingLandingContext = createContext<ModelingLandingContextType | undefined>(undefined)

export function ModelingLandingProvider({ children }: { children: React.ReactNode }) {
  const [activePanel, setActivePanel] = useState<PanelType>(null)

  return (
    <ModelingLandingContext.Provider
      value={{
        activePanel,
        openPanel: setActivePanel,
        closePanel: () => setActivePanel(null),
      }}
    >
      {children}
    </ModelingLandingContext.Provider>
  )
}

export function useModelingLanding() {
  const ctx = useContext(ModelingLandingContext)
  if (!ctx) throw new Error('useModelingLanding must be used within ModelingLandingProvider')
  return ctx
}
