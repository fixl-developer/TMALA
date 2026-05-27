"use client"

import React from 'react'
import { Check, ArrowRight } from 'lucide-react'
import { Container } from '../ui/Container'
import { Heading } from '../ui/Heading'
import { Badge } from '../ui/Badge'
import { Section } from '../ui/Section'
import { AnimatedReveal } from '../ui/AnimatedReveal'
import { useInfluencerLanding } from '../context'

const TIERS = [
  {
    name: 'Free',
    price: '₹0',
    cadence: 'forever',
    bestFor: 'Solo creator manager testing',
    cta: 'Start Free',
    panel: 'onboarding' as const,
    featured: false,
    features: [
      '1 creator',
      '1 active deal',
      'No escrow',
      'No white-label',
      'Community support',
    ],
  },
  {
    name: 'Starter',
    price: '₹4,999',
    cadence: '/ month',
    bestFor: 'Small agency, 5–20 creators',
    cta: 'Start 14-Day Trial',
    panel: 'onboarding' as const,
    featured: false,
    features: [
      '20 creators',
      '5 active deals',
      'Escrow + Razorpay',
      'T4-A / T4-B contracts',
      'GST/TDS exports',
      'Email support',
    ],
  },
  {
    name: 'Pro',
    price: '₹19,999',
    cadence: '/ month',
    bestFor: 'Growing agency, 20–80 creators',
    cta: 'Start 14-Day Trial',
    panel: 'onboarding' as const,
    featured: true,
    features: [
      '80 creators',
      '50 active deals',
      'White-label creator portal',
      'Custom domain',
      'All e-sign + ASCI checks',
      'AI Studio for creators',
      'Priority support',
    ],
  },
  {
    name: 'Studio',
    price: '₹49,999',
    cadence: '/ month',
    bestFor: '80–300 creators, multi-team',
    cta: 'Start 14-Day Trial',
    panel: 'demo' as const,
    featured: false,
    features: [
      '300 creators',
      'Unlimited deals',
      'Custom branding',
      'Multi-agency under one tenant',
      'Dedicated CSM',
      'Full API access',
      'Stripe Connect international payouts',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    cadence: '',
    bestFor: '300+ creators or multi-tenant group',
    cta: 'Talk to Sales',
    panel: 'demo' as const,
    featured: false,
    features: [
      'Custom SLA',
      'SSO',
      'White-label everything',
      'Multi-tenant franchise',
      'Dedicated AM',
      'Custom integrations',
    ],
  },
]

export function PricingSection() {
  const { openPanel } = useInfluencerLanding()

  return (
    <Section
      id="pricing"
      className="bg-bg-base py-24 md:py-32 lg:py-36 border-t border-b border-black/10 scroll-mt-20"
    >
      <Container size="xl">
        <AnimatedReveal className="text-center max-w-3xl mx-auto space-y-6 mb-14 lg:mb-20">
          <Badge variant="accent">Pricing · Blueprint B4</Badge>
          <Heading level={2} className="text-text-main text-4xl md:text-5xl lg:text-6xl">
            One blueprint. <span className="italic text-accent-primary">Five tiers.</span>
            <br />
            Annual = 2 months free.
          </Heading>
          <p className="text-lg text-text-mut leading-relaxed">
            14-day Pro trial on signup, no card required. B4 — Brand Deals + Deliverables
            installs automatically. Switch tier any time; usage prorates by day.
          </p>
        </AnimatedReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {TIERS.map((tier, i) => (
            <AnimatedReveal key={tier.name} delay={i * 0.05}>
              <div
                className={`relative h-full flex flex-col p-6 transition-all duration-300 ${
                  tier.featured
                    ? 'bg-text-main text-white border-2 border-accent-primary lg:scale-[1.04] lg:-my-2 shadow-2xl'
                    : 'bg-surface-main text-text-main border border-black/10 hover:border-text-main/30'
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-primary text-white text-[10px] uppercase tracking-[0.25em] font-bold px-3 py-1">
                    Most Popular
                  </div>
                )}

                <div className="mb-5">
                  <div
                    className={`text-[10px] uppercase tracking-[0.3em] font-bold mb-2 ${
                      tier.featured ? 'text-accent-primary' : 'text-accent-primary'
                    }`}
                  >
                    {tier.name}
                  </div>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-3xl md:text-4xl font-display font-bold leading-none">
                      {tier.price}
                    </span>
                    {tier.cadence && (
                      <span
                        className={`text-xs font-medium ${
                          tier.featured ? 'text-white/55' : 'text-text-mut'
                        }`}
                      >
                        {tier.cadence}
                      </span>
                    )}
                  </div>
                  <div
                    className={`text-[12px] leading-snug mt-2 ${
                      tier.featured ? 'text-white/70' : 'text-text-mut'
                    }`}
                  >
                    {tier.bestFor}
                  </div>
                </div>

                <div
                  className={`h-px mb-5 ${
                    tier.featured ? 'bg-white/15' : 'bg-black/10'
                  }`}
                />

                <ul className="space-y-2.5 flex-1 mb-6">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <div
                        className={`shrink-0 mt-1 w-3.5 h-3.5 flex items-center justify-center ${
                          tier.featured ? 'text-accent-primary' : 'text-accent-primary'
                        }`}
                      >
                        <Check className="w-3.5 h-3.5" strokeWidth={3} />
                      </div>
                      <span
                        className={`text-[12px] leading-relaxed ${
                          tier.featured ? 'text-white/85' : 'text-text-mut'
                        }`}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => openPanel(tier.panel)}
                  className={`group w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-[11px] font-bold uppercase tracking-widest transition-all duration-300 ${
                    tier.featured
                      ? 'bg-accent-primary text-white hover:bg-accent-tertiary'
                      : 'bg-text-main text-white hover:bg-accent-primary'
                  }`}
                >
                  {tier.cta}
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </AnimatedReveal>
          ))}
        </div>

        <AnimatedReveal className="mt-12 text-center">
          <p className="text-sm text-text-mut">
            All tiers include: escrow rails, Razorpay payouts, GST/TDS calculation, ASCI
            disclosure checks, audit log, DPDP-compliant Mumbai-region hosting.
          </p>
        </AnimatedReveal>
      </Container>
    </Section>
  )
}
