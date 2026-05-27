"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  Shield,
  Briefcase,
  Users,
  ClipboardCheck,
  Wallet,
  Scale,
  Sparkles,
  Link2,
  Crown,
  Cog,
  ExternalLink,
  Eye,
  Lock,
} from 'lucide-react'
import { Container } from '@/components/influencer-landing/ui/Container'
import { Heading } from '@/components/influencer-landing/ui/Heading'
import { Badge } from '@/components/influencer-landing/ui/Badge'
import { Section } from '@/components/influencer-landing/ui/Section'
import { AnimatedReveal } from '@/components/influencer-landing/ui/AnimatedReveal'

// Where the live app lives. Override via NEXT_PUBLIC_APP_URL.
const APP_BASE = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

type DemoRole = {
  category: 'leadership' | 'operations' | 'business' | 'talent' | 'external' | 'tenant'
  icon: typeof Shield
  name: string
  persona: string
  email: string | null  // null = token-protected, no demo login
  pages: string
  dashboardPath: string
  highlights: string[]
}

const INFLUENCER_ROLES: DemoRole[] = [
  {
    category: 'leadership',
    icon: Shield,
    name: 'Agency Admin',
    persona: 'Founder · COO · Head of Ops',
    email: 'admin@influencer.demo',
    pages: '35+ pages',
    dashboardPath: '/influencer/admin',
    highlights: [
      'Agency Health Score (A–F) + Compliance Risk live',
      'Attention-Needed inbox, urgency-sorted',
      'Bulk imports, audit-logged with reason codes',
    ],
  },
  {
    category: 'operations',
    icon: Briefcase,
    name: 'Deals Manager',
    persona: 'Closes brand deals · runs the pipeline',
    email: 'deals-mgr@influencer.demo',
    pages: '13 pages',
    dashboardPath: '/influencer/deals-mgr',
    highlights: [
      'Quote builder with live commission math',
      'Deal Room — chat, files, schedule, payouts, versions',
      'Clause deviation auto-detector',
    ],
  },
  {
    category: 'operations',
    icon: Users,
    name: 'Creator Manager',
    persona: 'Roster · onboarding · retention',
    email: 'creator-mgr@influencer.demo',
    pages: '16 pages',
    dashboardPath: '/influencer/creator-mgr',
    highlights: [
      '5-stage onboarding with KYC + bank verification',
      'Retention alerts with reason codes',
      'Upsell opportunities priced in ₹',
    ],
  },
  {
    category: 'operations',
    icon: ClipboardCheck,
    name: 'Content Reviewer',
    persona: 'Brand safety · disclosure · watermark',
    email: 'reviewer@influencer.demo',
    pages: '5 pages',
    dashboardPath: '/influencer/reviewer',
    highlights: [
      'ASCI/FTC disclosure auto-check on submit',
      'Brand safety scanner (keywords, competitors)',
      'Reviewer-confirmed watermark checklist',
    ],
  },
  {
    category: 'business',
    icon: Wallet,
    name: 'Finance',
    persona: 'Escrow · payouts · GST/TDS · ledger',
    email: 'finance@influencer.demo',
    pages: '11 pages',
    dashboardPath: '/influencer/finance',
    highlights: [
      'Universal escrow blueprint engine',
      '10% TDS Sec 194-O auto-withhold · Form 16A PDF',
      'GSTR-1 CSV + Razorpay reconciliation',
    ],
  },
  {
    category: 'business',
    icon: Scale,
    name: 'Legal',
    persona: 'Templates · redlines · e-sign · incidents',
    email: 'legal@influencer.demo',
    pages: '9 pages',
    dashboardPath: '/influencer/legal',
    highlights: [
      'Clause baseline → deviation detector',
      'Talent Redline Editor (4 phases) with PDF export',
      'Brand Safety policies per tenant + per brand',
    ],
  },
  {
    category: 'talent',
    icon: Sparkles,
    name: 'Creator',
    persona: 'Wallet · campaigns · AI Studio · media kit',
    email: 'creator@influencer.demo',
    pages: '17+ pages',
    dashboardPath: '/influencer/creator',
    highlights: [
      'Wallet with TDS cert + GST invoice PDF download',
      'AI Studio — 8 tools (bio, brand kit, growth)',
      'Public media-kit page with shareable token',
    ],
  },
  {
    category: 'external',
    icon: Link2,
    name: 'Brand Client',
    persona: 'Token-protected review · no signup',
    email: null,
    pages: '4 public pages',
    dashboardPath: '/m/sample-token',
    highlights: [
      'Token URL works in any browser, no account',
      'Inline annotations on draft media',
      'Read-only campaign reports',
    ],
  },
]

const TENANT_ROLES: DemoRole[] = [
  {
    category: 'tenant',
    icon: Crown,
    name: 'Tenant Owner',
    persona: 'Owns tenant · installs blueprints',
    email: 'tenant-owner@talentos.io',
    pages: '12 pages',
    dashboardPath: '/tenant-owner',
    highlights: [
      'Blueprint marketplace (B1–B10)',
      'Cross-blueprint revenue rollup',
      'Team activity + sponsorship',
    ],
  },
  {
    category: 'tenant',
    icon: Shield,
    name: 'Tenant Admin',
    persona: 'Tenant-wide config · RBAC',
    email: 'tenant-admin@talentos.io',
    pages: 'See /admin',
    dashboardPath: '/admin',
    highlights: [
      'Cross-vertical RBAC (43 roles, 194 perms)',
      'Team invites + role management',
      'Integrations + policy enforcement',
    ],
  },
  {
    category: 'tenant',
    icon: Cog,
    name: 'Tenant Ops',
    persona: 'SLA · conflicts · staff · reminders',
    email: 'tenant-ops@talentos.io',
    pages: '25 pages',
    dashboardPath: '/tenant-ops',
    highlights: [
      'SLA monitor across all blueprints',
      'Conflict resolution (booking overlaps)',
      'Cross-blueprint staff assignments',
    ],
  },
  {
    category: 'tenant',
    icon: Wallet,
    name: 'Tenant Finance',
    persona: 'Cross-blueprint invoices · payouts',
    email: 'tenant-finance@talentos.io',
    pages: '30 pages',
    dashboardPath: '/tenant-finance',
    highlights: [
      'Cross-blueprint invoices + escrow aging',
      'Payouts across B1 + B2 + B4 + ...',
      'GST/TDS exports + reconciliation',
    ],
  },
]

export default function InfluencerDemoPage() {
  return (
    <main className="bg-bg-base text-text-main">
      <HeroStrip />
      <RoleSection
        title="Influencer Agency Workspaces"
        subtitle="Pick a workspace to enter. You'll log in as the demo user for that role and land on their dashboard."
        roles={INFLUENCER_ROLES}
        eyebrow="Vertical · B4 Brand Deals + Deliverables"
        accent="primary"
      />
      <RoleSection
        title="Tenant Control Plane"
        subtitle="The 4 platform-level roles every tenant gets — independent of which blueprints they install."
        roles={TENANT_ROLES}
        eyebrow="Platform · Tenant-wide"
        accent="dark"
      />
      <FooterDisclaimer />
    </main>
  )
}

function HeroStrip() {
  return (
    <section className="relative bg-text-main text-bg-base overflow-hidden border-b border-white/10 pt-28 pb-16 md:pt-32 md:pb-20">
      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
      {/* Spotlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(99,27,27,0.18) 0%, transparent 60%)',
        }}
      />

      <Container className="relative z-10">
        <AnimatedReveal>
          <Link
            href="/agencies/influencer"
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold text-white/55 hover:text-accent-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-3 h-3" /> Back to overview
          </Link>
        </AnimatedReveal>

        <div className="max-w-3xl">
          <AnimatedReveal delay={0.05}>
            <p className="text-accent-primary tracking-[0.3em] uppercase text-xs font-bold mb-5">
              Live Demo · Twelve Workspaces
            </p>
          </AnimatedReveal>
          <AnimatedReveal delay={0.1}>
            <Heading
              level={1}
              className="text-white text-5xl md:text-6xl lg:text-7xl font-display border-none leading-[1.05] mb-6"
            >
              Step inside the{' '}
              <span className="italic text-white/65">control plane.</span>
            </Heading>
          </AnimatedReveal>
          <AnimatedReveal delay={0.2}>
            <p className="text-base md:text-lg text-white/75 leading-relaxed max-w-2xl">
              Twelve pre-seeded demo workspaces — eight influencer-agency roles plus four
              tenant-level roles. Click any tile, you're logged in as that persona and
              dropped into their dashboard. No signup, no card. Real backend, real data.
            </p>
          </AnimatedReveal>
          <AnimatedReveal delay={0.3}>
            <div className="mt-8 inline-flex items-center gap-3 px-4 py-2 border border-white/15 bg-white/[0.04] text-[11px] uppercase tracking-widest font-bold text-white/65">
              <Lock className="w-3 h-3 text-accent-primary" />
              Sandbox tenant · Demo data · No real transactions
            </div>
          </AnimatedReveal>
        </div>
      </Container>
    </section>
  )
}

function RoleSection({
  title,
  subtitle,
  roles,
  eyebrow,
  accent,
}: {
  title: string
  subtitle: string
  roles: DemoRole[]
  eyebrow: string
  accent: 'primary' | 'dark'
}) {
  return (
    <Section className="py-20 md:py-24 lg:py-28 bg-bg-base border-b border-black/5">
      <Container>
        <AnimatedReveal className="max-w-3xl mb-12 md:mb-16">
          <p className="text-accent-primary tracking-[0.3em] uppercase text-[10px] font-bold mb-4">
            {eyebrow}
          </p>
          <Heading
            level={2}
            className="text-text-main text-4xl md:text-5xl lg:text-6xl mb-4"
          >
            {title}
          </Heading>
          <p className="text-base md:text-lg text-text-mut leading-relaxed">{subtitle}</p>
        </AnimatedReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          {roles.map((role, i) => (
            <AnimatedReveal key={role.name} delay={i * 0.04}>
              <RoleTile role={role} accent={accent} />
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}

function RoleTile({ role, accent }: { role: DemoRole; accent: 'primary' | 'dark' }) {
  const [hovered, setHovered] = useState(false)
  const Icon = role.icon
  const accentColor = accent === 'dark' ? 'bg-text-main' : 'bg-accent-primary'
  const hasLogin = role.email !== null

  const loginUrl = hasLogin
    ? `${APP_BASE}/login?email=${encodeURIComponent(role.email!)}`
    : null

  const content = (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative h-full flex flex-col p-6 bg-surface-main border border-black/5 transition-all duration-300 ${
        hasLogin
          ? 'hover:border-text-main hover:bg-text-main cursor-pointer'
          : 'cursor-default'
      }`}
    >
      {/* Watermark number / inactive ribbon */}
      {!hasLogin && (
        <div className="absolute top-3 right-3 inline-flex items-center gap-1 px-2 py-0.5 bg-text-main/5 border border-text-main/10 text-[9px] uppercase tracking-widest font-bold text-text-mut">
          <Eye className="w-2.5 h-2.5" /> Token-only
        </div>
      )}

      {/* Icon + persona */}
      <div className="relative">
        <div
          className={`w-11 h-11 flex items-center justify-center mb-5 transition-all duration-300 ${
            hasLogin && hovered ? `${accentColor} text-white` : 'bg-bg-base border border-black/5'
          }`}
        >
          <Icon
            className={`w-5 h-5 transition-colors ${
              hasLogin && hovered ? 'text-white' : 'text-text-main'
            }`}
          />
        </div>
        <h3
          className={`text-lg font-display font-bold mb-1 leading-tight transition-colors ${
            hasLogin && hovered ? 'text-white' : 'text-text-main'
          }`}
        >
          {role.name}
        </h3>
        <p
          className={`text-[11px] uppercase tracking-widest font-bold mb-4 transition-colors ${
            hasLogin && hovered ? 'text-accent-primary' : 'text-accent-primary'
          }`}
        >
          {role.persona}
        </p>

        {/* Highlights */}
        <ul className="space-y-2 mb-6">
          {role.highlights.map((h, i) => (
            <li
              key={i}
              className={`text-[12px] leading-relaxed pl-3 border-l-2 transition-colors ${
                hasLogin && hovered ? 'text-white/80 border-accent-primary' : 'text-text-mut border-black/15'
              }`}
            >
              {h}
            </li>
          ))}
        </ul>

        {/* Footer strip */}
        <div
          className={`mt-auto pt-4 border-t flex items-center justify-between transition-colors ${
            hasLogin && hovered ? 'border-white/10' : 'border-black/5'
          }`}
        >
          <span
            className={`text-[10px] uppercase tracking-widest font-bold transition-colors ${
              hasLogin && hovered ? 'text-white/55' : 'text-text-mut'
            }`}
          >
            {role.pages}
          </span>
          <span
            className={`inline-flex items-center gap-1 text-[10px] uppercase tracking-widest font-bold transition-all ${
              hasLogin
                ? hovered
                  ? 'text-accent-primary'
                  : 'text-text-mut group-hover:text-accent-primary'
                : 'text-text-mut/60'
            }`}
          >
            {hasLogin ? (
              <>
                Enter <ArrowRight className="w-3 h-3" />
              </>
            ) : (
              <>Read-only</>
            )}
          </span>
        </div>
      </div>

      {/* Corner accent on hover */}
      {hasLogin && (
        <div
          className={`absolute -bottom-1 -right-1 w-12 h-12 border-2 transition-opacity duration-300 ${
            hovered ? 'opacity-100 border-accent-primary' : 'opacity-0'
          }`}
        />
      )}
    </div>
  )

  return loginUrl ? (
    <a
      href={loginUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full no-underline"
      aria-label={`Open ${role.name} demo dashboard in new tab`}
    >
      {content}
    </a>
  ) : (
    <div className="block h-full" title="Brand Client view is token-protected — accessed via a shareable link from a Deal Room">
      {content}
    </div>
  )
}

function FooterDisclaimer() {
  return (
    <section className="bg-text-main text-bg-base py-14 md:py-16 border-t border-white/10">
      <Container>
        <AnimatedReveal>
          <div className="grid md:grid-cols-[2fr_1fr] gap-8 items-start">
            <div>
              <p className="text-accent-primary tracking-[0.3em] uppercase text-[10px] font-bold mb-3">
                What you should know
              </p>
              <Heading
                level={3}
                className="text-white text-2xl md:text-3xl font-display border-none leading-tight mb-4"
              >
                Everything in this demo is{' '}
                <span className="italic text-white/65">real backend.</span>
              </Heading>
              <ul className="space-y-2 text-white/70 text-[14px] leading-relaxed max-w-xl">
                <li>
                  • Demo tenant is pre-seeded with creators, brands, deals, escrow,
                  invoices, Form 16A certificates, and disclosure check history.
                </li>
                <li>
                  • Every click hits the real services — auth, opportunity, finance,
                  agency, legal — exactly as a paying tenant would.
                </li>
                <li>
                  • Data is namespaced to this sandbox tenant. Nothing you do here
                  affects another tenant or production data.
                </li>
                <li>
                  • The Brand Client tile is intentionally read-only — that view is
                  reached via a token URL from a Deal Room, no login by design.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <Link
                href="/agencies/influencer#pricing"
                className="block w-full text-center px-5 py-4 bg-accent-primary text-white text-[11px] uppercase tracking-widest font-bold hover:bg-accent-tertiary transition-colors"
              >
                See pricing
              </Link>
              <Link
                href="/agencies/influencer"
                className="block w-full text-center px-5 py-4 bg-transparent border border-white/30 text-white text-[11px] uppercase tracking-widest font-bold hover:bg-white hover:text-text-main transition-colors"
              >
                Back to landing
              </Link>
              <a
                href={`${APP_BASE}/login`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-[11px] text-white/55 hover:text-accent-primary transition-colors pt-2 inline-flex items-center justify-center gap-1.5 w-full"
              >
                Or go to the full login page <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </AnimatedReveal>
      </Container>
    </section>
  )
}
