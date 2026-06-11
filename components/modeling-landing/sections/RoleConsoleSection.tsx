"use client"

import React, { useState } from 'react'
import { Container } from '../ui/Container'
import { Heading } from '../ui/Heading'
import { Section } from '../ui/Section'
import { AnimatedReveal } from '../ui/AnimatedReveal'
import {
  Crown, Briefcase, UserCheck, Search as SearchIcon, User, Coins, Scale, Check, X, Lock,
} from 'lucide-react'

type Role = {
  id: string
  name: string
  icon: React.ComponentType<{ className?: string }>
  tagline: string
  access: string[]
  actions: string[]
  restrictions: string[]
  log: string
}

const ROLES: Role[] = [
  {
    id: 'admin',
    name: 'Agency Admin',
    icon: Crown,
    tagline: 'The cryptographic root. Owns the loop.',
    access: ['Audit Vault', 'Escrow Admin', 'Split Configuration', 'Crisis Dispatch'],
    actions: ['Freeze global roster', 'Override hold releases', 'Deploy contract template'],
    restrictions: ['Dual-signature mandatory for trust-wallet withdrawal'],
    log: 'SYSTEM · Root [UID_90112] authorized global freeze due to curfew exception.',
  },
  {
    id: 'booker',
    name: 'Senior Booker',
    icon: Briefcase,
    tagline: 'Options, holds, challenges. The board lives here.',
    access: ['Option Board', 'Roster Grid', 'Casting Feed', 'Brand Portals'],
    actions: ['Apply priority hold', 'Challenge competitor hold', 'Publish digital comp card'],
    restrictions: ['No tax ledger edit', 'No curfew override'],
    log: 'BOOKER_HOLD · Option for Elena Voronova on Milan F/W modified. Challenge stamp active.',
  },
  {
    id: 'manager',
    name: 'Talent Manager',
    icon: UserCheck,
    tagline: 'Careers, transit, day-to-day schedule.',
    access: ['Talent Core', 'Visa Desk', 'Crisis Playbooks', 'Communication Hub'],
    actions: ['Verify transit visa', 'Authorize accommodation escort', 'Trigger local escort desk'],
    restrictions: ['No invoice formulation', 'No payout adjustments'],
    log: 'VALIDATION · Visa [Schengen Type-D] verified for transit talent Mariya Rostova.',
  },
  {
    id: 'scout',
    name: 'Roster Scout',
    icon: SearchIcon,
    tagline: 'Streetcasting, evaluation, preliminary splits.',
    access: ['Scouting CRM', 'Preliminary Roster Upload', 'Application Desk'],
    actions: ['Onboard streetcast entry', 'Initiate minor waiver loop', 'Draft preliminary splits'],
    restrictions: ['No option override', 'No commercial hold execution'],
    log: 'CRM · Streetcast profile registered under ID [SC-904] with prelim measurements.',
  },
  {
    id: 'talent',
    name: 'Model / Candidate',
    icon: User,
    tagline: 'Mobile-first cockpit. Bookings, wallet, safety.',
    access: ['Schedule Feed', 'Wallet Preview', 'Upload Portal', '1-Click Safety Desk'],
    actions: ['Verify curfew safe state', 'Resubmit measurement spec', 'Acknowledge call time'],
    restrictions: ['Read-only contracts', 'No admin log access'],
    log: 'SAFE_CHECKIN · GPS check-in approved at Milan Studio 4B within curfew bounds.',
  },
  {
    id: 'finance',
    name: 'Finance & Compliance',
    icon: Coins,
    tagline: 'Margins, SEPA, splits. Maker-checker on every cent.',
    access: ['Splits Ledger', 'Tax Vault', 'Segregated Escrow', 'Multi-currency Wallet'],
    actions: ['Approve settlement split', 'Download SEPA payload', 'Audit scouting commission'],
    restrictions: ['No option priority edit', 'No emergency contact edit'],
    log: 'LEDGER · Double-checked split authorized for Zara Summer Campaign.',
  },
  {
    id: 'legal',
    name: 'Legal Counsel',
    icon: Scale,
    tagline: 'Templates, waivers, minor policy. Cryptographically signed.',
    access: ['Triple-Lock Contracts', 'Minor Consent Controls', 'Regulatory Checkpoints'],
    actions: ['Deploy standard agency agreement', 'Enforce minor curfew rules', 'Revive defunct drafts'],
    restrictions: ['Cannot authorize SEPA transfers'],
    log: 'COMPLIANCE · Co-guardian waiver checksum validated for minor talent [RK-711].',
  },
]

export function RoleConsoleSection() {
  const [activeId, setActiveId] = useState('booker')
  const active = ROLES.find((r) => r.id === activeId)!

  return (
    <Section id="role-cockpit" className="bg-modeling-bg">
      <Container>
        <AnimatedReveal>
          <div className="max-w-2xl mb-14">
            <p className="text-[10px] uppercase tracking-[0.32em] font-bold text-modeling-rose mb-4">
              The Seven Role Cockpit
            </p>
            <Heading level={2} className="mb-6">
              One platform. <span className="italic text-modeling-deep">Seven role shells.</span>
            </Heading>
            <p className="text-modeling-mut text-base leading-relaxed">
              Every modelling agency has the same seven hats. We&apos;ve shipped a dedicated cockpit for each — with role-bound permissions, audit logs, and restrictions baked into the engine. Pick a role to see what they own.
            </p>
          </div>
        </AnimatedReveal>

        <div className="grid lg:grid-cols-[300px_1fr] gap-8">
          {/* Role rail */}
          <AnimatedReveal>
            <div className="space-y-1.5">
              {ROLES.map((r) => {
                const Icon = r.icon
                const isActive = r.id === activeId
                return (
                  <button
                    key={r.id}
                    onClick={() => setActiveId(r.id)}
                    className={`w-full text-left px-4 py-3.5 border transition-all duration-300 flex items-center gap-3 ${
                      isActive
                        ? 'bg-modeling-rose border-modeling-rose text-white shadow-[0_10px_30px_-15px_rgba(190,24,93,0.55)]'
                        : 'bg-white border-modeling-line text-modeling-ink hover:border-modeling-rose'
                    }`}
                  >
                    <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-modeling-deep'}`} />
                    <span className="font-modeling-body font-semibold text-sm">{r.name}</span>
                  </button>
                )
              })}
            </div>
          </AnimatedReveal>

          {/* Panel */}
          <AnimatedReveal delay={0.1}>
            <div className="bg-white border border-modeling-line p-8 md:p-10">
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] font-bold text-modeling-rose mb-3">
                <active.icon className="w-3.5 h-3.5" />
                {active.name}
              </div>
              <h3 className="font-modeling-display text-3xl md:text-4xl text-modeling-ink mb-8 leading-tight">
                {active.tagline}
              </h3>

              <div className="grid md:grid-cols-3 gap-6">
                <Block title="Access" items={active.access} icon={<Check className="w-3 h-3 text-emerald-600" />} />
                <Block title="Actions" items={active.actions} icon={<Check className="w-3 h-3 text-modeling-rose" />} />
                <Block title="Restrictions" items={active.restrictions} icon={<X className="w-3 h-3 text-rose-500" />} />
              </div>

              <div className="mt-8 pt-6 border-t border-modeling-line">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] font-bold text-modeling-mut mb-3">
                  <Lock className="w-3 h-3" />
                  Audit Log — frozen sample
                </div>
                <code className="block font-mono text-xs text-modeling-ink bg-modeling-cream border border-modeling-line p-4 leading-relaxed">
                  {active.log}
                </code>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </Container>
    </Section>
  )
}

function Block({ title, items, icon }: { title: string; items: string[]; icon: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-[10px] font-bold uppercase tracking-[0.22em] text-modeling-mut mb-3">
        {title}
      </h4>
      <ul className="space-y-2">
        {items.map((line) => (
          <li key={line} className="flex gap-2.5 text-sm text-modeling-ink leading-snug">
            <span className="mt-1.5 shrink-0">{icon}</span>
            <span>{line}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
