"use client"

import React from 'react'
import {
  Crown,
  Shield,
  Cog,
  Wallet,
  Layers,
  ArrowRight,
  Users,
  Search,
  Trophy,
  Briefcase,
  Film,
  Mic,
  GraduationCap,
  Award,
  Camera,
  Check,
  Sparkles,
} from 'lucide-react'
import { Container } from '../ui/Container'
import { Heading } from '../ui/Heading'
import { Badge } from '../ui/Badge'
import { Section } from '../ui/Section'
import { AnimatedReveal } from '../ui/AnimatedReveal'

const TENANT_ROLES = [
  {
    icon: Crown,
    name: 'Tenant Owner',
    desc: 'Blueprint marketplace, team activity, revenue rollup, sponsorship, settings.',
  },
  {
    icon: Shield,
    name: 'Tenant Admin',
    desc: 'Cross-blueprint config + RBAC. Manage roles across all installed verticals.',
  },
  {
    icon: Cog,
    name: 'Tenant Ops',
    desc: 'SLA, conflicts, schedule, reminders, staff and tasks. The dispatcher seat.',
  },
  {
    icon: Wallet,
    name: 'Tenant Finance',
    desc: 'Cross-blueprint invoices, payouts, escrow aging, commissions, reports.',
  },
]

type BlueprintState = 'installed' | 'trial' | 'try' | 'buy'

const BLUEPRINTS: Array<{
  code: string
  name: string
  tagline: string
  icon: any
  price: string
  state: BlueprintState
  color: string
}> = [
  {
    code: 'B4',
    name: 'Brand Deals + Deliverables',
    tagline: 'Creator economy ops · escrow · GST/TDS',
    icon: Sparkles,
    price: '₹19,999 /mo',
    state: 'installed',
    color: '#631B1B',
  },
  {
    code: 'B1',
    name: 'Modelling Roster + Booking',
    tagline: 'Roster, options, holds, commission',
    icon: Users,
    price: '₹14,999 /mo',
    state: 'try',
    color: '#a855f7',
  },
  {
    code: 'B2',
    name: 'Talent Casting Pipeline',
    tagline: 'Briefs, submissions, callbacks, offers',
    icon: Search,
    price: '₹17,999 /mo',
    state: 'try',
    color: '#06b6d4',
  },
  {
    code: 'B5',
    name: 'Pageant Operations',
    tagline: 'Registration, rounds, scoring, results',
    icon: Trophy,
    price: '₹12,999 /mo',
    state: 'try',
    color: '#f59e0b',
  },
  {
    code: 'B6',
    name: 'UGC Production',
    tagline: 'Briefs → drafts → approvals → assets',
    icon: Film,
    price: '₹11,999 /mo',
    state: 'try',
    color: '#10b981',
  },
  {
    code: 'B8',
    name: 'Speaker Bureau',
    tagline: 'Inquiries, holds, contracts, payouts',
    icon: Mic,
    price: '₹9,999 /mo',
    state: 'try',
    color: '#ec4899',
  },
]

function StatePill({ state }: { state: BlueprintState }) {
  const map: Record<BlueprintState, { label: string; bg: string; text: string }> = {
    installed: { label: '✓ Installed', bg: '#22c55e', text: '#fff' },
    trial: { label: '14d Trial', bg: '#3b82f6', text: '#fff' },
    try: { label: 'Try 14d', bg: 'rgba(255,255,255,0.08)', text: 'rgba(255,255,255,0.7)' },
    buy: { label: 'Buy', bg: 'rgba(255,255,255,0.08)', text: 'rgba(255,255,255,0.7)' },
  }
  const s = map[state]
  return (
    <div
      className="px-2 py-0.5 text-[9px] uppercase tracking-widest font-bold"
      style={{ background: s.bg, color: s.text }}
    >
      {s.label}
    </div>
  )
}

function MarketplaceMock() {
  return (
    <div className="relative">
      {/* Window frame — dark themed for the section */}
      <div className="bg-[#0f0f10] border border-white/10 shadow-2xl overflow-hidden">
        {/* Window chrome */}
        <div className="px-4 py-2.5 border-b border-white/10 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-white/15" />
          <div className="w-2 h-2 rounded-full bg-white/15" />
          <div className="w-2 h-2 rounded-full bg-white/15" />
          <div className="ml-3 px-3 py-1 bg-white/[0.04] text-white/40 text-[10px] font-mono tracking-wider truncate">
            talentos.io/admin/blueprints/marketplace
          </div>
        </div>

        <div className="p-5 md:p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent-primary mb-0.5">
                Blueprint Marketplace
              </div>
              <div className="font-display font-bold text-white text-base">
                10 verticals · 1 control plane
              </div>
            </div>
            <div className="flex gap-1">
              {['All', 'Installed', 'Trial', 'Available'].map((t, i) => (
                <div
                  key={t}
                  className={`px-2 py-1 text-[9px] uppercase tracking-widest font-bold ${
                    i === 0
                      ? 'bg-white text-text-main'
                      : 'bg-white/[0.04] text-white/55'
                  }`}
                >
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Search + filter */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex-1 flex items-center gap-2 px-3 py-2 border border-white/10 bg-white/[0.02]">
              <Search className="w-3 h-3 text-white/40" />
              <span className="text-[11px] text-white/40">Search blueprints…</span>
            </div>
            <div className="px-2.5 py-1.5 border border-accent-primary/50 bg-accent-primary/15 text-accent-primary text-[10px] uppercase tracking-widest font-bold">
              <Layers className="w-3 h-3 inline mr-1" />1 of 10
            </div>
          </div>

          {/* Blueprint grid */}
          <div className="grid grid-cols-2 gap-2.5">
            {BLUEPRINTS.map((bp) => {
              const Icon = bp.icon
              const isInstalled = bp.state === 'installed'
              return (
                <div
                  key={bp.code}
                  className={`p-3 border transition-all ${
                    isInstalled
                      ? 'border-accent-primary bg-accent-primary/[0.08]'
                      : 'border-white/10 bg-white/[0.02] hover:border-white/25'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2.5">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-7 h-7 flex items-center justify-center text-white"
                        style={{ background: bp.color }}
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-[9px] uppercase tracking-widest font-bold text-white/40">
                        {bp.code}
                      </div>
                    </div>
                    <StatePill state={bp.state} />
                  </div>

                  <div className="text-[12px] font-bold text-white mb-1 leading-tight">
                    {bp.name}
                  </div>
                  <div className="text-[10px] text-white/45 mb-3 leading-snug">
                    {bp.tagline}
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-white/5">
                    <div className="text-[10px] text-white/55 font-mono">{bp.price}</div>
                    <button
                      className={`text-[9px] uppercase tracking-widest font-bold ${
                        isInstalled
                          ? 'text-accent-primary'
                          : 'text-white/70 hover:text-accent-primary'
                      }`}
                    >
                      {isInstalled ? 'Manage' : 'Install →'}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Footer strip */}
          <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/10">
            <div className="flex items-center gap-2">
              <Check className="w-3 h-3 text-[#22c55e]" />
              <div className="text-[10px] text-white/55">
                Same Owner / Admin / Ops / Finance roles across all blueprints
              </div>
            </div>
            <div className="inline-flex items-center gap-1.5 text-[10px] font-bold text-accent-primary uppercase tracking-widest">
              Explore <ArrowRight className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute -bottom-3 -left-3 w-20 h-20 border-2 border-accent-primary/60 -z-10" />
    </div>
  )
}

export function TenantControlSection() {
  return (
    <Section className="bg-text-main text-bg-base py-24 md:py-32 lg:py-36 relative overflow-hidden">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <Container className="relative z-10">
        <AnimatedReveal className="text-center max-w-3xl mx-auto space-y-6 mb-16 lg:mb-20">
          <Badge variant="outline" className="text-white/80 border-white/30 bg-white/5">
            Tenant Control Plane
          </Badge>
          <Heading level={2} className="text-white text-4xl md:text-5xl lg:text-6xl">
            Buy one blueprint today.{' '}
            <span className="italic text-white/60">Scale to ten tomorrow.</span>
          </Heading>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed">
            Every tenant gets 4 platform-level roles (Owner, Admin, Ops, Finance) that
            operate across whatever blueprints you install. Start with B4 — Brand Deals.
            Add B1 Modelling, B2 Talent, B5 Pageant later. Same control plane. No
            re-architecting.
          </p>
        </AnimatedReveal>

        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-start">
          {/* Left: 4 tenant roles */}
          <AnimatedReveal direction="left">
            <div className="space-y-4">
              <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent-primary mb-6">
                4 Platform-Level Roles
              </div>
              {TENANT_ROLES.map((role) => {
                const Icon = role.icon
                return (
                  <div
                    key={role.name}
                    className="group flex items-start gap-4 p-5 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-accent-primary/40 transition-all duration-300"
                  >
                    <div className="shrink-0 w-10 h-10 border border-white/15 flex items-center justify-center group-hover:border-accent-primary/50 transition-colors">
                      <Icon className="w-4 h-4 text-white/80 group-hover:text-accent-primary transition-colors" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-white text-base mb-1.5">
                        {role.name}
                      </div>
                      <p className="text-white/60 text-[13px] leading-relaxed">{role.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </AnimatedReveal>

          {/* Right: Marketplace mock */}
          <AnimatedReveal direction="right" delay={0.1}>
            <MarketplaceMock />
          </AnimatedReveal>
        </div>
      </Container>
    </Section>
  )
}
