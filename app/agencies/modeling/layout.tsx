import React from 'react'
import { ModelingLandingProvider } from '@/components/modeling-landing/context'
import { ModelingNav } from '@/components/modeling-landing/chrome/ModelingNav'
import { ModelingFooter } from '@/components/modeling-landing/chrome/ModelingFooter'
import { PanelHost } from '@/components/modeling-landing/panels/PanelHost'

// Fonts inherit from the root layout (Plus Jakarta Sans + Bebas Neue) — the
// modeling landing intentionally matches the global TMA-Lp typography.
export default function ModelingLandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-modeling-body bg-modeling-bg text-modeling-ink min-h-screen selection:bg-modeling-rose/25 selection:text-modeling-ink">
      <ModelingLandingProvider>
        <ModelingNav />
        {children}
        <ModelingFooter />
        <PanelHost />
      </ModelingLandingProvider>
    </div>
  )
}
