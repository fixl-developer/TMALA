"use client"

import React from 'react'
import { Container } from '../ui/Container'
import { Heading } from '../ui/Heading'
import { Section } from '../ui/Section'
import { AnimatedReveal } from '../ui/AnimatedReveal'
import { Cog, Scale, Coins, Sparkles } from 'lucide-react'

const GROUPS = [
  {
    name: 'Operations',
    icon: Cog,
    blurb: 'The day-to-day loop your bookers, scouts, and managers live in.',
    modules: [
      { code: 'MOD-ROSTER',  name: 'Roster Core Records' },
      { code: 'MOD-GRID',    name: 'Interactive Roster Grid' },
      { code: 'MOD-OPTION',  name: 'Option Board Console' },
      { code: 'MOD-SPECS',   name: 'Interactive Specs Logger' },
      { code: 'MOD-CASTING', name: 'Casting Feed Router' },
      { code: 'MOD-SEARCH',  name: 'Smart Search Filters' },
    ],
  },
  {
    name: 'Legal & Compliance',
    icon: Scale,
    blurb: 'Contract templates, minor flow, curfew packs, crisis activation.',
    modules: [
      { code: 'MOD-CONTRACT', name: 'Triple-Lock Contracts' },
      { code: 'MOD-GUARDIAN', name: 'Co-Guardian Desk' },
      { code: 'MOD-CURFEW',   name: 'Safety Curfew Trackers' },
      { code: 'MOD-CONSENT',  name: 'Consent Loop Engine' },
      { code: 'MOD-TRANSIT',  name: 'Transit Visa Desk' },
      { code: 'MOD-CRISIS',   name: 'Crisis Activator' },
    ],
  },
  {
    name: 'Financial Ledger',
    icon: Coins,
    blurb: 'Trust account, splits, GST/TDS/SEPA, multi-currency wallets.',
    modules: [
      { code: 'MOD-ESCROW',  name: 'Escrow Client Vaults' },
      { code: 'MOD-TAX',     name: 'Tax Compliance Desk' },
      { code: 'MOD-SPLITS',  name: 'Splits Distribution Ledger' },
      { code: 'MOD-SEPA',    name: 'Instant SEPA Payouts' },
      { code: 'MOD-WALLETS', name: 'Multi-Currency Balance' },
      { code: 'MOD-INVOICE', name: 'Brand Portals Invoice' },
    ],
  },
  {
    name: 'Talent Core',
    icon: Sparkles,
    blurb: 'Mobile cockpit, comp cards, scouting CRM, immutable audit trail.',
    modules: [
      { code: 'MOD-COMP',      name: 'Dynamic Comp Cards' },
      { code: 'MOD-MOBILE',    name: 'Schedule Companion App' },
      { code: 'MOD-CRM',       name: 'Scouting CRM Hub' },
      { code: 'MOD-WAIVER',    name: 'Waiver Confirmation' },
      { code: 'MOD-STYLING',   name: 'AI Studio Stylist' },
      { code: 'MOD-AUDIT_LOG', name: 'Global Audit Trail Log' },
    ],
  },
]

export function ModulesGridSection() {
  return (
    <Section id="modules" className="bg-modeling-bg border-y border-modeling-line">
      <Container>
        <AnimatedReveal>
          <div className="max-w-2xl mb-14">
            <p className="text-[10px] uppercase tracking-[0.32em] font-bold text-modeling-rose mb-4">
              24 Operating Modules
            </p>
            <Heading level={2} className="mb-6">
              The full <span className="italic text-modeling-deep">operating manifest.</span>
            </Heading>
            <p className="text-modeling-mut text-base leading-relaxed">
              Twenty-four shipping modules, grouped into four pillars. Every module is enterprise-grade, audit-trailed, and wired into the same event bus — so the Roster Grid knows the moment Finance approves a split.
            </p>
          </div>
        </AnimatedReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {GROUPS.map((g, idx) => (
            <AnimatedReveal key={g.name} delay={idx * 0.06}>
              <div className="bg-white border border-modeling-line p-7 md:p-8 h-full hover:border-modeling-rose transition-colors duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-modeling-cream flex items-center justify-center">
                    <g.icon className="w-4 h-4 text-modeling-deep" />
                  </div>
                  <h3 className="font-modeling-display text-2xl text-modeling-ink">{g.name}</h3>
                </div>
                <p className="text-modeling-mut text-sm mb-6 leading-relaxed">{g.blurb}</p>
                <ul className="space-y-2.5">
                  {g.modules.map((m) => (
                    <li key={m.code} className="flex items-center justify-between border-b border-modeling-line/70 pb-2 last:border-0">
                      <span className="text-sm text-modeling-ink font-medium">{m.name}</span>
                      <code className="font-mono text-[10px] text-modeling-mut tracking-wider">
                        {m.code}
                      </code>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
