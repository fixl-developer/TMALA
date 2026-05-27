"use client"

import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '../ui/Container'
import { Heading } from '../ui/Heading'
import { Badge } from '../ui/Badge'
import { Section } from '../ui/Section'
import { AnimatedReveal } from '../ui/AnimatedReveal'

const FAQS = [
  {
    q: 'Do I need a Razorpay account?',
    a: 'Yes for INR payouts. We onboard you to a Razorpay sub-account during signup — no separate KYC required on your end. International payouts use Stripe Connect (configured per creator).',
  },
  {
    q: 'Can I bring my existing contracts?',
    a: 'Yes. Bulk-import via /admin/bulk-imports (CSV with contract metadata), or paste-in via the template editor. Clause baseline comparison runs against imported contracts so you see compliance gaps immediately.',
  },
  {
    q: 'What about international creators?',
    a: 'Stripe Connect for USD/EUR/GBP payouts. Creators onboard themselves via /creator/payouts — bank account, tax form (W-8/W-9), and identity verification. Multi-currency wallets supported.',
  },
  {
    q: 'Does it integrate with DocuSign?',
    a: 'Yes, optional. Built-in e-sign works out of the box with audit trail and per-signer status. DocuSign integration available if you already pay for it and prefer the brand.',
  },
  {
    q: 'How does GST/TDS work?',
    a: 'Built in. 10% TDS auto-withheld under Sec 194-O. CGST/SGST split by creator state of registration (IGST for inter-state). HSN code 998361 stamped on every invoice. GSTR-1 CSV export at quarter close. Form 16A issued in one click.',
  },
  {
    q: 'Can I white-label the creator portal?',
    a: 'From Pro tier — your logo, brand colors, custom domain. Studio adds favicon + email template branding. Enterprise gets full white-label including login screen and PDF templates.',
  },
  {
    q: 'Can I install other blueprints later?',
    a: 'Yes. Marketplace at /admin/marketplace lets you add B1 Modelling, B2 Talent, B5 Pageant Training, etc. — each with a 14-day trial. The Tenant Owner, Admin, Ops, and Finance roles work across all installed blueprints automatically.',
  },
  {
    q: 'Where is my data hosted?',
    a: "India (Mumbai AWS region). DPDP-compliant. Right-to-erasure queue at /admin/dpdp. Daily encrypted backups. SOC 2 Type II audit completed Q2 '26.",
  },
]

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <Section className="bg-surface-main py-24 md:py-32 lg:py-36 border-b border-black/5">
      <Container size="md">
        <AnimatedReveal className="text-center space-y-6 mb-14 lg:mb-16">
          <Badge variant="default">FAQ</Badge>
          <Heading level={2} className="text-text-main text-4xl md:text-5xl">
            The questions <span className="italic text-accent-primary">we get most.</span>
          </Heading>
          <p className="text-lg text-text-mut">
            If your question isn't here, the demo team will answer it in your 30-minute
            walkthrough.
          </p>
        </AnimatedReveal>

        <div className="space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIdx === i
            return (
              <AnimatedReveal key={i} delay={i * 0.04}>
                <div
                  className={`border transition-all duration-300 ${
                    isOpen
                      ? 'border-text-main bg-bg-base'
                      : 'border-black/10 bg-bg-base/40 hover:border-black/30'
                  }`}
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-6 p-5 md:p-6 text-left group"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display font-bold text-text-main text-base md:text-lg pr-4">
                      {faq.q}
                    </span>
                    <div
                      className={`shrink-0 w-8 h-8 flex items-center justify-center border transition-all duration-300 ${
                        isOpen
                          ? 'bg-accent-primary border-accent-primary text-white'
                          : 'border-text-main/20 text-text-main group-hover:border-text-main'
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4" strokeWidth={2.5} />
                      ) : (
                        <Plus className="w-4 h-4" strokeWidth={2.5} />
                      )}
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 md:px-6 pb-5 md:pb-6 text-text-mut leading-relaxed text-[15px]">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedReveal>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
