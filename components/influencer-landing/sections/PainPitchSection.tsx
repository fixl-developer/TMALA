"use client"

import React from 'react'
import { Container } from '../ui/Container'
import { Heading } from '../ui/Heading'
import { AnimatedReveal } from '../ui/AnimatedReveal'
import { Section } from '../ui/Section'
import { Wallet, FileWarning, MessageSquareWarning, Receipt } from 'lucide-react'

const PAINS = [
  {
    icon: Wallet,
    title: 'Money chased in DMs',
    body: 'Brand sent invoice last quarter? Creator screenshotting bank statements as "proof of payment"? Welcome to most influencer agencies.',
  },
  {
    icon: FileWarning,
    title: 'Contracts copy-pasted from Google Docs',
    body: 'One typo in a commission clause = ₹50K leak. No version control. No audit trail. ASCI flag arrives — nobody knows which version was signed.',
  },
  {
    icon: MessageSquareWarning,
    title: 'Deliverables tracked in a WhatsApp group',
    body: '12 creators, 28 active campaigns, 90+ deliverables a month. Brand asks "where\'s the reel?" — silence in the group for 4 hours.',
  },
  {
    icon: Receipt,
    title: 'GST/TDS season = panic',
    body: '10% TDS under Sec 194-O. CGST/SGST split by creator state. Form 16A by quarter-end. Currently calculated in Excel, often wrongly.',
  },
]

export function PainPitchSection() {
  return (
    <Section className="relative bg-black text-bg-base overflow-hidden border-y border-white/10 py-24 md:py-32">
      <div className="absolute inset-0 z-0">
        <video
          src="/influencer-landing/7594691-hd_1920_1080_25fps.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55 md:bg-gradient-to-r md:from-black/85 md:via-black/55 md:to-black/30"></div>
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 items-start">
          {/* Left: Section header */}
          <AnimatedReveal className="space-y-6 lg:sticky lg:top-24">
            <h3 className="tracking-widest uppercase text-xs font-semibold text-white/55">
              The Current Standard
            </h3>
            <Heading
              level={2}
              className="text-white text-4xl md:text-5xl lg:text-6xl font-display leading-[1.05]"
            >
              The four problems <br />
              <span className="italic text-white/65">every agency owner feels.</span>
            </Heading>
            <p className="text-sm md:text-base text-white/75 font-medium max-w-xl tracking-wide leading-relaxed">
              Most influencer agencies still run on Google Docs, WhatsApp groups, and
              quarterly panic. The work is real. The tooling isn't. Here are the four
              fires we put out before they reach you.
            </p>
          </AnimatedReveal>

          {/* Right: 4 pain cards stacked */}
          <div className="space-y-4">
            {PAINS.map((pain, i) => {
              const Icon = pain.icon
              return (
                <AnimatedReveal key={pain.title} delay={i * 0.08}>
                  <div className="group flex items-start gap-5 p-6 border border-white/10 bg-black/40 backdrop-blur-md hover:bg-black/60 hover:border-accent-primary/40 transition-all duration-300">
                    <div className="shrink-0 w-12 h-12 flex items-center justify-center border border-white/15 bg-white/5 group-hover:border-accent-primary/50 group-hover:bg-accent-primary/10 transition-colors">
                      <Icon className="w-5 h-5 text-white/85 group-hover:text-accent-primary transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-xs">
                        {pain.title}
                      </h4>
                      <p className="text-white/65 text-[13px] leading-relaxed max-w-md">
                        {pain.body}
                      </p>
                    </div>
                  </div>
                </AnimatedReveal>
              )
            })}
          </div>
        </div>
      </Container>
    </Section>
  )
}
