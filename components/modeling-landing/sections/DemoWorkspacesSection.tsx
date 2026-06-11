"use client"

import React from 'react'
import Link from 'next/link'
import { ArrowUpRight, Lock } from 'lucide-react'
import { Container } from '../ui/Container'
import { Heading } from '../ui/Heading'
import { Section } from '../ui/Section'
import { AnimatedReveal } from '../ui/AnimatedReveal'
import { RoleTile } from '../ui/RoleTile'
import { MODELING_ROLES } from '../demoRoles'

export function DemoWorkspacesSection() {
  return (
    <Section id="demo-workspaces" className="bg-modeling-cream border-y border-modeling-line">
      <Container>
        <AnimatedReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16 max-w-5xl">
            <div className="space-y-4 max-w-2xl">
              <p className="text-[10px] uppercase tracking-[0.32em] font-bold text-modeling-rose">
                Live Demo · 11 Workspaces
              </p>
              <Heading level={2}>
                Click a role. <span className="italic text-modeling-deep">Land in their cockpit.</span>
              </Heading>
              <p className="text-modeling-mut text-base leading-relaxed">
                Every role from the B5 modelling vertical is pre-seeded as a demo workspace. No signup, no card — pick a tile and the real dashboard opens in a new tab as that persona.
              </p>
            </div>
            <Link
              href="/agencies/modeling/demo"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-4 bg-modeling-ink text-white text-[11px] uppercase tracking-widest font-bold hover:bg-modeling-rose transition-colors"
            >
              Open full demo page <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </AnimatedReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          {MODELING_ROLES.map((role, i) => (
            <AnimatedReveal key={role.email} delay={i * 0.04}>
              <RoleTile role={role} />
            </AnimatedReveal>
          ))}
        </div>

        <AnimatedReveal>
          <div className="mt-10 inline-flex items-center gap-2 px-4 py-2 border border-modeling-line bg-white text-[11px] uppercase tracking-widest font-bold text-modeling-mut">
            <Lock className="w-3 h-3 text-modeling-rose" />
            Sandbox tenant · demo data · no real transactions
          </div>
        </AnimatedReveal>
      </Container>
    </Section>
  )
}
