import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display, Bebas_Neue, Orbitron } from 'next/font/google'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

const bebas = Bebas_Neue({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-bebas',
})

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
})

export const metadata: Metadata = {
  title: 'Multi Talent Agency – Multi-Tenant Talent Management SaaS Platform',
  description: 'The comprehensive multi-tenant SaaS platform that empowers agencies to build branded talent empires while giving models, actors, and creatives verified profiles, AI-enhanced portfolios, and direct pathways to opportunities.',
  keywords: 'talent agency, model management, actor management, AI portfolio, talent scouting, multi-tenant SaaS',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#0a0a0f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${bebas.variable} ${orbitron.variable}`}>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <SmoothScrollProvider>
          <Header />
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
