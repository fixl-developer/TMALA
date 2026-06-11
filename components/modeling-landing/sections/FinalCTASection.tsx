"use client"

import React from 'react'
import { Container } from '../ui/Container'
import { Heading } from '../ui/Heading'
import { Section } from '../ui/Section'
import { AnimatedReveal } from '../ui/AnimatedReveal'
import { useModelingLanding } from '../context'
import { ArrowUpRight } from 'lucide-react'

export function FinalCTASection() {
  const { openPanel } = useModelingLanding()

  return (
    <Section className="relative bg-modeling-ink text-white overflow-hidden py-28 lg:py-40">
      <img
        src="/modeling-landing/atmosphere-1.jpg"
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-modeling-ink/85 via-modeling-ink/70 to-modeling-ink/95" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-full bg-modeling-rose/15 blur-3xl pointer-events-none" />

      <Container className="relative text-center">
        <AnimatedReveal>
          <p className="text-[10px] uppercase tracking-[0.34em] font-bold text-modeling-rose mb-6">
            One platform · seven roles · zero spreadsheets
          </p>
        </AnimatedReveal>

        <AnimatedReveal delay={0.08}>
          <Heading level={1} className="text-white max-w-4xl mx-auto leading-[0.95]">
            Run your agency on <span className="italic text-modeling-rose">the same engine</span> the runways already trust.
          </Heading>
        </AnimatedReveal>

        <AnimatedReveal delay={0.16}>
          <p className="text-white/72 text-base md:text-lg max-w-2xl mx-auto mt-7 leading-relaxed">
            Provision an isolated tenant in 30 minutes. Or book a 30-min demo and we&apos;ll walk you through the exact cockpit your team will use Monday morning.
          </p>
        </AnimatedReveal>

        <AnimatedReveal delay={0.24}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <button
              onClick={() => openPanel('trial')}
              className="bg-modeling-rose text-white hover:bg-modeling-deep px-10 py-5 text-[11px] uppercase tracking-widest font-semibold transition-all duration-300 shadow-[0_20px_50px_-15px_rgba(236,72,153,0.55)]"
            >
              Start 14-Day Trial →
            </button>
            <button
              onClick={() => openPanel('demo')}
              className="bg-transparent text-white border border-white/40 hover:bg-white hover:text-modeling-ink px-10 py-5 text-[11px] uppercase tracking-widest font-semibold transition-all duration-300 backdrop-blur-sm"
            >
              Book a 30-Min Demo
            </button>
          </div>
        </AnimatedReveal>

        <AnimatedReveal delay={0.32}>
          <a
            href="/agencies/all"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] font-bold text-white/55 hover:text-white transition-colors mt-12"
          >
            Or compare against the other 22 verticals
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </AnimatedReveal>
      </Container>
    </Section>
  )
}
