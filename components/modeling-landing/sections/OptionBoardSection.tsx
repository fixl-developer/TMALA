"use client"

import React, { useEffect, useState } from 'react'
import { Container } from '../ui/Container'
import { Heading } from '../ui/Heading'
import { Section } from '../ui/Section'
import { AnimatedReveal } from '../ui/AnimatedReveal'
import { Clock, Zap } from 'lucide-react'

const MODELS = [
  { initials: 'PM', name: 'Priya Mehta',   spec: 'Mumbai · Commercial · 178cm' },
  { initials: 'AK', name: 'Anya Kapoor',   spec: 'Delhi · Editorial · 180cm' },
  { initials: 'SR', name: 'Sara Rao',      spec: 'Bangalore · Runway · 179cm' },
  { initials: 'EV', name: 'Elena Voronova',spec: 'Milan · Couture · 179cm' },
]

// Three-step rotation: challenge active → auto-release → re-establish
const STATES: Array<Array<{ label: string; tone: 'live' | 'hold' | 'challenge' | 'confirmed' | 'released' }>> = [
  [
    { label: '1st Hold', tone: 'hold' },
    { label: '2nd Hold', tone: 'hold' },
    { label: '⚠ Challenge', tone: 'challenge' },
    { label: '1st Hold', tone: 'hold' },
  ],
  [
    { label: '✓ Confirmed', tone: 'confirmed' },
    { label: '1st Hold', tone: 'hold' },
    { label: 'Released', tone: 'released' },
    { label: '2nd Hold', tone: 'hold' },
  ],
  [
    { label: '✓ Confirmed', tone: 'confirmed' },
    { label: '1st Hold', tone: 'hold' },
    { label: '1st Hold', tone: 'hold' },
    { label: '⚠ Challenge', tone: 'challenge' },
  ],
]

const COUNTDOWNS = ['00:04:12', '00:00:00 · released', '24:00:00 · synced']

const TONE: Record<string, string> = {
  live:       'bg-modeling-rose text-white',
  hold:       'bg-modeling-ink text-white',
  challenge:  'bg-amber-500 text-white animate-pulse',
  confirmed:  'bg-emerald-500 text-white',
  released:   'bg-rose-200 text-rose-700 line-through opacity-70',
}

export function OptionBoardSection() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setStep((s) => (s + 1) % 3), 2800)
    return () => clearInterval(t)
  }, [])

  return (
    <Section id="option-board" className="relative bg-modeling-cream overflow-hidden">
      {/* Subtle rose grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#BE185D 1px, transparent 1px), linear-gradient(90deg, #BE185D 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />

      <Container className="relative">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-16 items-center">
          <AnimatedReveal className="space-y-7 lg:sticky lg:top-24">
            <p className="text-[10px] uppercase tracking-[0.32em] font-bold text-modeling-rose">
              Live · Option Board
            </p>
            <Heading level={2}>
              The hold engine your bookers <span className="italic text-modeling-deep">stopped trying to manage in spreadsheets.</span>
            </Heading>
            <p className="text-modeling-mut text-base leading-relaxed">
              Every option carries a state machine: 1st → 2nd → Challenged → Confirmed / Released. When a client challenges a hold, a 24-hour clock starts. If nothing fires, the option auto-releases. The board syncs to contracts, escrow, and the talent app in real time.
            </p>
            <ul className="space-y-3 text-sm text-modeling-ink">
              {[
                'Cryptographic challenge stamps — no silent overrides',
                'Auto-release at countdown zero, with talent + client notified',
                '24h state log feeds straight into the audit vault',
                'Mobile booker app for Milan / Paris / Mumbai studios',
              ].map((line) => (
                <li key={line} className="flex gap-3">
                  <Zap className="w-4 h-4 text-modeling-rose shrink-0 mt-0.5" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </AnimatedReveal>

          <AnimatedReveal delay={0.15}>
            <div className="bg-white border border-modeling-line shadow-[0_20px_60px_-30px_rgba(190,24,93,0.35)] rounded-sm overflow-hidden">
              <div className="bg-modeling-ink text-white px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.28em] font-bold text-white/85">
                    Option Board · Vogue India · June Edition
                  </span>
                </div>
                <span className="text-[9px] font-mono tracking-widest text-modeling-rose">
                  ● LIVE
                </span>
              </div>

              <div className="px-6 py-5 border-b border-modeling-line flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-modeling-mut">
                  Node
                </span>
                <span className="text-[10px] font-mono font-bold text-modeling-deep">
                  {step === 0 ? 'CHALLENGE_STAMP' : step === 1 ? 'AUTO_RELEASE_EXEC' : 'RE_ESTABLISH'}
                </span>
              </div>

              <div className="divide-y divide-modeling-line">
                {MODELS.map((m, idx) => {
                  const st = STATES[step][idx]
                  return (
                    <div key={m.initials} className="flex items-center gap-4 px-6 py-4">
                      <div className="w-9 h-9 rounded-full bg-modeling-light text-modeling-deep flex items-center justify-center font-bold text-xs">
                        {m.initials}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-modeling-ink truncate">{m.name}</p>
                        <p className="text-[11px] text-modeling-mut truncate">{m.spec}</p>
                      </div>
                      <span className={`text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 transition-all duration-500 ${TONE[st.tone]}`}>
                        {st.label}
                      </span>
                    </div>
                  )
                })}
              </div>

              <div className="bg-modeling-cream px-6 py-4 flex items-center justify-between border-t border-modeling-line">
                <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-modeling-mut flex items-center gap-2">
                  <Clock className="w-3 h-3" />
                  Challenge Clock
                </span>
                <span className={`font-mono text-sm font-bold tracking-wider transition-colors ${
                  step === 0 ? 'text-amber-600' : step === 1 ? 'text-rose-600' : 'text-emerald-600'
                }`}>
                  {COUNTDOWNS[step]}
                </span>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </Container>
    </Section>
  )
}
