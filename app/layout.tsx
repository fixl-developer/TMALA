import React from "react"
import type { Metadata, Viewport } from 'next'
import { Bebas_Neue, Plus_Jakarta_Sans } from 'next/font/google'
import { Header } from "@/components/header"
import { FooterWrapper } from "@/components/footer-wrapper"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"
import { ScrollProgress } from "@/components/scroll-progress"
import { AuthModalProvider } from "@/components/auth-modal"

import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700', '800'],
})

const bebas = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-bebas',
  weight: '400',
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
    <html lang="en" className={`${jakarta.variable} ${bebas.variable}`}>
      <head />
      <body className="font-sans antialiased" suppressHydrationWarning>
        <AuthModalProvider>
          <SmoothScrollProvider>
            <ScrollProgress />
            <Header />
            {children}
            <FooterWrapper />
          </SmoothScrollProvider>
        </AuthModalProvider>
      </body>
    </html>
  )
}
