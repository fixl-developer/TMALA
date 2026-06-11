"use client"

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Lock, ExternalLink } from 'lucide-react'
import { Container } from '@/components/modeling-landing/ui/Container'
import { Heading } from '@/components/modeling-landing/ui/Heading'
import { Section } from '@/components/modeling-landing/ui/Section'
import { AnimatedReveal } from '@/components/modeling-landing/ui/AnimatedReveal'
import { RoleTile } from '@/components/modeling-landing/ui/RoleTile'
import { MODELING_ROLES, TENANT_ROLES, APP_BASE, type DemoRole } from '@/components/modeling-landing/demoRoles'

export default function ModelingDemoPage() {
  return (
    <main>
      <HeroStrip />
      <RoleSection
        eyebrow="Vertical · B5 Modelling Agency"
        title="Modelling Agency Workspaces"
        subtitle="Seven role-shells, each pre-seeded with demo data. Click a tile and the dashboard opens as that persona — real backend, real data, sandboxed."
        roles={MODELING_ROLES}
        accent="rose"
      />
      <RoleSection
        eyebrow="Platform · Tenant-Wide"
        title="Tenant Control Plane"
        subtitle="The four platform-level roles every tenant gets — independent of which blueprint they run."
        roles={TENANT_ROLES}
        accent="ink"
      />
      <FooterDisclaimer />
    </main>
  )
}

function HeroStrip() {
  return (
    <section className="relative bg-modeling-ink text-white overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20 border-b border-white/10">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(236,72,153,0.22) 0%, transparent 60%)',
        }}
      />

      <Container className="relative z-10">
        <AnimatedReveal>
          <Link
            href="/agencies/modeling"
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold text-white/55 hover:text-modeling-rose transition-colors mb-6"
          >
            <ArrowLeft className="w-3 h-3" /> Back to overview
          </Link>
        </AnimatedReveal>

        <div className="max-w-3xl">
          <AnimatedReveal delay={0.05}>
            <p className="text-modeling-rose tracking-[0.3em] uppercase text-xs font-bold mb-5">
              Live Demo · Eleven Workspaces
            </p>
          </AnimatedReveal>

          <AnimatedReveal delay={0.1}>
            <Heading level={1} className="text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              Step inside the <span className="italic text-white/65">modelling cockpit.</span>
            </Heading>
          </AnimatedReveal>

          <AnimatedReveal delay={0.2}>
            <p className="text-base md:text-lg text-white/75 leading-relaxed max-w-2xl">
              Seven modelling-agency roles plus four tenant-level roles, each pre-seeded as a demo persona. Click any tile — you&apos;re logged in as that role and dropped into their dashboard. No signup, no card. Real backend, real data.
            </p>
          </AnimatedReveal>

          <AnimatedReveal delay={0.3}>
            <div className="mt-8 inline-flex items-center gap-3 px-4 py-2 border border-white/15 bg-white/[0.04] text-[11px] uppercase tracking-widest font-bold text-white/65">
              <Lock className="w-3 h-3 text-modeling-rose" />
              Sandbox tenant · Demo data · No real transactions
            </div>
          </AnimatedReveal>
        </div>
      </Container>
    </section>
  )
}

function RoleSection({
  eyebrow,
  title,
  subtitle,
  roles,
  accent,
}: {
  eyebrow: string
  title: string
  subtitle: string
  roles: DemoRole[]
  accent: 'rose' | 'ink'
}) {
  return (
    <Section className="py-20 md:py-24 lg:py-28 bg-modeling-bg border-b border-modeling-line">
      <Container>
        <AnimatedReveal>
          <div className="max-w-3xl mb-12 md:mb-16">
            <p className="text-modeling-rose tracking-[0.3em] uppercase text-[10px] font-bold mb-4">
              {eyebrow}
            </p>
            <Heading level={2} className="mb-4">
              {title}
            </Heading>
            <p className="text-base md:text-lg text-modeling-mut leading-relaxed">
              {subtitle}
            </p>
          </div>
        </AnimatedReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          {roles.map((role, i) => (
            <AnimatedReveal key={role.email} delay={i * 0.04}>
              <RoleTile role={role} accent={accent} />
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}

function FooterDisclaimer() {
  return (
    <section className="bg-modeling-ink text-white py-14 md:py-16 border-t border-white/10">
      <Container>
        <AnimatedReveal>
          <div className="grid md:grid-cols-[2fr_1fr] gap-8 items-start">
            <div>
              <p className="text-modeling-rose tracking-[0.3em] uppercase text-[10px] font-bold mb-3">
                What you should know
              </p>
              <Heading level={3} className="text-white text-2xl md:text-3xl leading-tight mb-4">
                Everything in this demo is <span className="italic text-white/65">real backend.</span>
              </Heading>
              <ul className="space-y-2 text-white/70 text-[14px] leading-relaxed max-w-xl">
                <li>• Demo tenant is pre-seeded with talents, brands, options, contracts, escrow, settlements, and minor-consent waivers.</li>
                <li>• Every click hits the real services — auth, agency, finance, legal, modelling — exactly as a paying tenant would.</li>
                <li>• Data is namespaced to this sandbox tenant. Nothing you do here affects another tenant or production data.</li>
                <li>• Tiles open in a new tab so you can compare two role views side-by-side.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <Link
                href="/agencies/modeling#money-trust"
                className="block w-full text-center px-5 py-4 bg-modeling-rose text-white text-[11px] uppercase tracking-widest font-bold hover:bg-modeling-deep transition-colors"
              >
                See pricing & money flow
              </Link>
              <Link
                href="/agencies/modeling"
                className="block w-full text-center px-5 py-4 bg-transparent border border-white/30 text-white text-[11px] uppercase tracking-widest font-bold hover:bg-white hover:text-modeling-ink transition-colors"
              >
                Back to landing
              </Link>
              <a
                href={`${APP_BASE}/login`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-[11px] text-white/55 hover:text-modeling-rose transition-colors pt-2 inline-flex items-center justify-center gap-1.5 w-full"
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
