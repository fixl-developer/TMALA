"use client"

import React from 'react'
import { Container } from '../ui/Container'
import { Heading } from '../ui/Heading'
import { Section } from '../ui/Section'
import { AnimatedReveal } from '../ui/AnimatedReveal'
import { Coins, ShieldCheck, FileText } from 'lucide-react'

const SPLITS = [
  { label: 'Agency booking fee · 20%', amount: '€21,000', tone: 'text-modeling-ink' },
  { label: 'Talent net payout',         amount: '€84,000', tone: 'text-modeling-deep font-bold' },
  { label: 'Scout commission · 5%',     amount: '€5,250',  tone: 'text-modeling-ink' },
  { label: 'Manager commission · 5%',   amount: '€5,250',  tone: 'text-modeling-ink' },
  { label: 'Tax withholding · 10%',     amount: '€10,500', tone: 'text-rose-700' },
]

export function MoneyTrustSection() {
  return (
    <Section id="money-trust" className="bg-modeling-ink text-white relative overflow-hidden">
      {/* Subtle rose glow */}
      <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-modeling-rose/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full bg-modeling-deep/15 blur-3xl pointer-events-none" />

      <Container className="relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedReveal>
            <div className="space-y-7">
              <p className="text-[10px] uppercase tracking-[0.32em] font-bold text-modeling-rose">
                Money & Trust
              </p>
              <Heading level={2} className="text-white">
                The brand prepays into <span className="italic text-modeling-rose">escrow.</span><br />
                The engine does the splits.
              </Heading>
              <p className="text-white/72 text-base leading-relaxed">
                Every booking sits in a segregated Trust Account until the show confirms. The split engine routes agency fees, talent net, scout / manager commissions, GST/TDS or SEPA-VAT, into separate ledger entries — every transition cryptographically signed, hash-chained, and exportable as a settlement PDF.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {[
                  { icon: ShieldCheck, label: 'Segregated Trust', value: 'Per-tenant escrow' },
                  { icon: Coins,       label: 'Maker-Checker',     value: 'Dual approval' },
                  { icon: FileText,    label: 'Audit Trail',       value: 'Hash-chained' },
                ].map((b) => (
                  <div key={b.label} className="bg-white/[0.04] border border-white/10 p-4">
                    <b.icon className="w-4 h-4 text-modeling-rose mb-3" />
                    <p className="text-[9px] uppercase tracking-widest font-bold text-white/55 mb-1">{b.label}</p>
                    <p className="text-sm font-semibold text-white">{b.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={0.15}>
            <div className="bg-white text-modeling-ink shadow-2xl rounded-sm overflow-hidden">
              <div className="bg-modeling-cream border-b border-modeling-line px-6 py-4 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.28em] font-bold text-modeling-deep">
                  Settlement Ledger
                </span>
                <span className="text-[9px] font-mono font-bold text-modeling-rose">● HASH-CHAINED</span>
              </div>
              <div className="px-6 py-5 border-b border-modeling-line">
                <div className="flex justify-between items-baseline">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-modeling-mut mb-1">
                      Zara — Summer 25 Campaign
                    </p>
                    <p className="text-[11px] text-modeling-mut">Editorial · 3-day shoot · Milan</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-modeling-mut mb-1">
                      Gross
                    </p>
                    <p className="font-modeling-display text-2xl font-medium text-modeling-ink">
                      €1,26,000
                    </p>
                  </div>
                </div>
              </div>

              <ul className="divide-y divide-modeling-line">
                {SPLITS.map((s) => (
                  <li key={s.label} className="px-6 py-3.5 flex items-center justify-between">
                    <span className="text-sm text-modeling-ink">{s.label}</span>
                    <span className={`font-mono text-sm ${s.tone}`}>{s.amount}</span>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-2 gap-px bg-modeling-line">
                <div className="bg-emerald-50 px-6 py-4 text-center">
                  <p className="text-[9px] uppercase tracking-widest font-bold text-emerald-700">
                    ✓ Maker approved
                  </p>
                  <p className="text-[10px] text-emerald-600/85 mt-1">Finance · Priya S.</p>
                </div>
                <div className="bg-modeling-rose px-6 py-4 text-center">
                  <p className="text-[9px] uppercase tracking-widest font-bold text-white">
                    ✓ Checker approved
                  </p>
                  <p className="text-[10px] text-white/85 mt-1">Agency Admin · Founder</p>
                </div>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </Container>
    </Section>
  )
}
