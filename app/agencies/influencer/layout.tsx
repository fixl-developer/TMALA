import React from 'react'
import { Bricolage_Grotesque, Space_Grotesk } from 'next/font/google'
import { InfluencerLandingProvider } from '@/components/influencer-landing/context'
import { PanelHost } from '@/components/influencer-landing/panels/PanelHost'
import { InfluencerNav } from '@/components/influencer-landing/chrome/InfluencerNav'
import { InfluencerFooter } from '@/components/influencer-landing/chrome/InfluencerFooter'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export default function InfluencerLandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      className={`${bricolage.variable} ${spaceGrotesk.variable} font-space bg-bg-base text-text-main min-h-screen selection:bg-accent-primary/20 selection:text-text-main`}
    >
      <InfluencerLandingProvider>
        <InfluencerNav />
        {children}
        <InfluencerFooter />
        <PanelHost />
      </InfluencerLandingProvider>
    </div>
  )
}
