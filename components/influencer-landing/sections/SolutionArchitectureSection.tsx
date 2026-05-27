"use client"

import React from 'react'
import {
  Shield,
  Briefcase,
  Users,
  ClipboardCheck,
  Wallet,
  Scale,
  Sparkles,
  Link2,
} from 'lucide-react'
import { Container } from '../ui/Container'
import { Heading } from '../ui/Heading'
import { Badge } from '../ui/Badge'
import { Section } from '../ui/Section'
import { AnimatedReveal } from '../ui/AnimatedReveal'

const ROLES = [
  {
    n: 1,
    icon: Shield,
    name: 'Agency Admin',
    job: 'Tenant config, RBAC, all-up control of pipeline and revenue',
    pages: '35+ pages',
    anchor: '#workspace-admin',
  },
  {
    n: 2,
    icon: Briefcase,
    name: 'Deals Manager',
    job: 'Brief → quote → contract → deal-room — escrow-secured',
    pages: '13 pages',
    anchor: '#workspace-deals',
  },
  {
    n: 3,
    icon: Users,
    name: 'Creator Manager',
    job: 'Roster, onboarding, retention, career-path planning',
    pages: '16 pages',
    anchor: '#workspace-creator-mgr',
  },
  {
    n: 4,
    icon: ClipboardCheck,
    name: 'Content Reviewer',
    job: 'Approval queue, brand safety, watermark verification',
    pages: '5 pages',
    anchor: '#workspace-reviewer',
  },
  {
    n: 5,
    icon: Wallet,
    name: 'Finance',
    job: 'Escrow, payouts, GST/TDS, reconciliation in one place',
    pages: '11 pages',
    anchor: '#workspace-finance',
  },
  {
    n: 6,
    icon: Scale,
    name: 'Legal',
    job: 'Templates, redlines, e-sign, ASCI/FTC incident workflow',
    pages: '9 pages',
    anchor: '#workspace-legal',
  },
  {
    n: 7,
    icon: Sparkles,
    name: 'Creator',
    job: 'My campaigns, wallet, media kit, AI studio',
    pages: '17+ pages',
    anchor: '#workspace-creator',
  },
  {
    n: 8,
    icon: Link2,
    name: 'Brand Client',
    job: 'Approve deliverables and view reports via token link',
    pages: '4 public pages',
    anchor: '#workspace-client',
  },
]

export function SolutionArchitectureSection() {
  return (
    <Section className="bg-bg-base py-20 md:py-28 lg:py-32 border-b border-black/5">
      <Container>
        <AnimatedReveal className="text-center max-w-3xl mx-auto space-y-6 mb-16 lg:mb-20">
          <Badge variant="accent">The Architecture</Badge>
          <Heading level={2} className="text-text-main text-4xl md:text-5xl lg:text-6xl">
            One platform.{' '}
            <span className="text-accent-primary italic">Eight workspaces.</span>
            <br />
            Zero context-switching.
          </Heading>
          <p className="text-lg md:text-xl text-text-mut leading-relaxed">
            Your Agency Admin sees pipeline + revenue. Your Creator Manager sees roster +
            retention. Your Finance lead sees escrow + GST/TDS. Each role gets a workspace
            built for their job — but the data is the same source of truth.
          </p>
        </AnimatedReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {ROLES.map((role, i) => {
            const Icon = role.icon
            return (
              <AnimatedReveal key={role.name} delay={i * 0.05}>
                <a
                  href={role.anchor}
                  className="group block h-full p-6 bg-surface-main border border-black/5 hover:border-text-main hover:bg-text-main transition-all duration-300 cursor-pointer relative overflow-hidden select-none"
                >
                  {/* Number tag */}
                  <div className="absolute top-3 right-4 font-display font-bold text-[42px] leading-none text-black/[0.06] group-hover:text-white/[0.08] transition-colors">
                    0{role.n}
                  </div>

                  <div className="relative">
                    <div className="w-11 h-11 bg-bg-base border border-black/5 group-hover:border-white/10 flex items-center justify-center mb-5 group-hover:bg-white/10 transition-all duration-300">
                      <Icon className="w-5 h-5 text-text-main group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="text-lg font-display font-bold text-text-main group-hover:text-white transition-colors mb-2 leading-tight">
                      {role.name}
                    </h4>
                    <p className="text-text-mut group-hover:text-white/70 text-[13px] leading-relaxed font-medium transition-colors mb-6">
                      {role.job}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-black/5 group-hover:border-white/10 transition-colors">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-text-mut group-hover:text-white/60 transition-colors">
                        {role.pages}
                      </span>
                      <span className="text-[10px] uppercase tracking-widest font-bold text-accent-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        See workspace →
                      </span>
                    </div>
                  </div>
                </a>
              </AnimatedReveal>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
