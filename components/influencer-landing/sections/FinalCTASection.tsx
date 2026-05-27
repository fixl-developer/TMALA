"use client"

import React from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Container } from '../ui/Container'
import { Heading } from '../ui/Heading'
import { AnimatedReveal } from '../ui/AnimatedReveal'
import { useInfluencerLanding } from '../context'

export function FinalCTASection() {
  const { openPanel } = useInfluencerLanding()

  return (
    <section className="relative bg-text-main text-bg-base py-28 md:py-36 lg:py-44 overflow-hidden">
      {/* Grain + grid texture */}
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

      <Container size="md" className="relative z-10">
        <AnimatedReveal className="text-center space-y-8">
          <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent-primary">
            Closing the loop
          </div>
          <Heading
            level={1}
            className="text-white text-4xl md:text-6xl lg:text-7xl font-display border-none leading-[1.05]"
          >
            Stop running your agency
            <br />
            <span className="italic text-white/65">in WhatsApp.</span>
          </Heading>
          <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            Start the 14-day Pro trial. B4 — Brand Deals + Deliverables blueprint installs
            automatically. Your first deal closed in a Deal Room within 24 hours, or your
            money back.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <button
              onClick={() => openPanel('onboarding')}
              className="group inline-flex items-center justify-center gap-2 bg-accent-primary text-white px-10 py-5 text-[11px] font-bold uppercase tracking-widest hover:bg-accent-tertiary transition-all duration-300"
            >
              Start 14-Day Trial
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={() => openPanel('demo')}
              className="inline-flex items-center justify-center gap-2 bg-transparent text-white border border-white/30 hover:bg-white hover:text-text-main px-10 py-5 text-[11px] font-bold uppercase tracking-widest transition-all duration-300"
            >
              Book a 30-Min Demo
            </button>
          </div>

          <div className="pt-4">
            <button
              onClick={() => openPanel('demo')}
              className="inline-flex items-center gap-1.5 text-white/55 hover:text-white text-[12px] tracking-wide transition-colors"
            >
              Or contact sales for Enterprise plans
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </AnimatedReveal>
      </Container>
    </section>
  )
}
