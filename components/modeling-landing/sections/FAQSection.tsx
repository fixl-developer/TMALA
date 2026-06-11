"use client"

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Container } from '../ui/Container'
import { Heading } from '../ui/Heading'
import { Section } from '../ui/Section'
import { AnimatedReveal } from '../ui/AnimatedReveal'

const FAQS = [
  {
    q: 'Is this only for boutique agencies, or holding networks too?',
    a: 'Both. Multi-tenant from the engine up. Holding networks can run separate agency tenants under one parent — each with isolated trust accounts, splits config, and audit vaults.',
  },
  {
    q: 'How does the minor / co-guardian flow actually work?',
    a: 'Every minor talent gets a Co-Guardian record. Bookings under 18 trigger a parental consent loop, an image-release waiver, and the relevant curfew pack (IN, US-CA/NY, EU-UK/DE/FR). All signatures are cryptographically frozen against the contract version active that day.',
  },
  {
    q: 'Razorpay, Stripe, SEPA — which do you support?',
    a: 'All three. Razorpay for IN tenants, Stripe for US/UK, SEPA-direct for EU. Each tenant configures the rail in onboarding; the Trust Account is segregated by tenant + rail, not pooled.',
  },
  {
    q: 'What happens if a brand challenges an option hold?',
    a: 'A 24-hour countdown clock starts on the contested option. If the original booker re-confirms or escalates inside the window, the hold stays. If not, the engine auto-releases and notifies talent + competing client. The whole exchange is in the audit vault.',
  },
  {
    q: 'Can we import our existing roster + historical bookings?',
    a: 'Yes — CSV import during trial onboarding, and a guided migration script for agencies coming off ModelManager, Agencies Pro, or Notion/Airtable setups. Most boutique agencies are live in 7 days.',
  },
  {
    q: 'What about data residency and DPDP / GDPR?',
    a: 'EU tenants run on a Frankfurt cluster (GDPR-compliant data residency). IN tenants run on Mumbai (DPDP). US on us-east-1. Cross-tenant isolation is enforced at the router level, not just the application layer — independently smoke-tested every release.',
  },
]

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <Section id="faq" className="bg-modeling-cream">
      <Container size="md">
        <AnimatedReveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[10px] uppercase tracking-[0.32em] font-bold text-modeling-rose mb-4">
              FAQ
            </p>
            <Heading level={2} className="mb-5">
              Questions <span className="italic text-modeling-deep">we hear a lot.</span>
            </Heading>
            <p className="text-modeling-mut">
              The six that come up in every demo. Everything else, the team is happy to walk through live.
            </p>
          </div>
        </AnimatedReveal>

        <div className="space-y-3">
          {FAQS.map((f, idx) => {
            const isOpen = open === idx
            return (
              <AnimatedReveal key={f.q} delay={idx * 0.04}>
                <div className={`bg-white border transition-colors duration-300 ${isOpen ? 'border-modeling-rose' : 'border-modeling-line'}`}>
                  <button
                    onClick={() => setOpen(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left gap-6"
                    aria-expanded={isOpen}
                  >
                    <span className="font-modeling-display text-lg md:text-xl text-modeling-ink leading-snug">
                      {f.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 text-modeling-deep transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-modeling-mut leading-relaxed text-[15px]">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedReveal>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
