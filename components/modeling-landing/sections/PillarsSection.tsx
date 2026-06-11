"use client"

import React from 'react'
import { Container } from '../ui/Container'
import { Heading } from '../ui/Heading'
import { Section } from '../ui/Section'
import { AnimatedReveal } from '../ui/AnimatedReveal'
import { Timer, ShieldCheck, Coins, AlertOctagon } from 'lucide-react'

const PILLARS = [
  {
    icon: Timer,
    kicker: '01 · Booking',
    title: 'Option Board with auto-release',
    body: '1st-Option, 2nd-Option, Challenge — every hold ticks against a release clock. No more "did I confirm her for Milan?" in a booker WhatsApp at 2am.',
  },
  {
    icon: ShieldCheck,
    kicker: '02 · Compliance',
    title: 'Co-guardian flow for minors',
    body: 'Parental consent loops, curfew packs for IN/EU/US, image-release waivers — cryptographically signed and frozen against the contract version that was active.',
  },
  {
    icon: Coins,
    kicker: '03 · Finance',
    title: 'Trust Account splits, audited',
    body: 'Brand prepay lands in segregated escrow. On confirm, the engine splits agency / talent / scout / manager / tax — every cent traced through a hash-chained ledger.',
  },
  {
    icon: AlertOctagon,
    kicker: '04 · Safety',
    title: 'Crisis playbooks, one tap',
    body: 'GPS check-ins, escort routing, 8 documented crisis playbooks (medical, harassment, missing-talent, visa-revoked). When something breaks at 3am Paris time, the runbook fires itself.',
  },
]

export function PillarsSection() {
  return (
    <Section id="cockpit" className="bg-modeling-bg border-y border-modeling-line">
      <Container>
        <AnimatedReveal>
          <div className="max-w-2xl mb-16">
            <p className="text-[10px] uppercase tracking-[0.32em] font-bold text-modeling-rose mb-4">
              Why TalentOS / Modelling
            </p>
            <Heading level={2} className="mb-6">
              Four pillars. <span className="italic text-modeling-deep">Zero spreadsheets.</span>
            </Heading>
            <p className="text-modeling-mut text-base leading-relaxed">
              We rebuilt the four loops that quietly kill modelling agencies — booking, compliance, splits, and safety — as one cryptographically-audited system. Below is the spine.
            </p>
          </div>
        </AnimatedReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PILLARS.map((p, idx) => (
            <AnimatedReveal key={p.title} delay={idx * 0.08}>
              <div className="group bg-white border border-modeling-line hover:border-modeling-rose transition-colors duration-300 p-8 md:p-10 h-full">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-modeling-light flex items-center justify-center group-hover:bg-modeling-rose transition-colors duration-300 shrink-0">
                    <p.icon className="w-5 h-5 text-modeling-deep group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-modeling-mut">
                      {p.kicker}
                    </p>
                    <h3 className="font-modeling-display text-2xl md:text-[28px] text-modeling-ink leading-tight">
                      {p.title}
                    </h3>
                    <p className="text-modeling-mut leading-relaxed text-[15px]">
                      {p.body}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
