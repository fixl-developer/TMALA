"use client"

import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Container } from '../ui/Container'
import { Heading } from '../ui/Heading'
import { AnimatedReveal } from '../ui/AnimatedReveal'
import { useModelingLanding } from '../context'

const HERO_SLIDES = [
  { id: 1, img: '/modeling-landing/runway-2.jpg' },
  { id: 2, img: '/modeling-landing/models-1.jpg' },
  { id: 3, img: '/modeling-landing/runway-3.jpg' },
  { id: 4, img: '/modeling-landing/editorial-2.jpg' },
]

const AUTO_ADVANCE_MS = 5500

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 1 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 1 }),
}

export function CinematicHero() {
  const [[current, direction], setCurrent] = useState<[number, number]>([0, 1])
  const { openPanel } = useModelingLanding()
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  function go(delta: number) {
    setCurrent(([prev]) => [(prev + delta + HERO_SLIDES.length) % HERO_SLIDES.length, delta > 0 ? 1 : -1])
  }

  function goTo(target: number) {
    setCurrent(([prev]) => [target, target > prev ? 1 : -1])
  }

  function resetTimer() {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrent(([prev]) => [(prev + 1) % HERO_SLIDES.length, 1])
    }, AUTO_ADVANCE_MS)
  }

  useEffect(() => {
    resetTimer()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  return (
    <section className="relative w-full h-[100svh] min-h-[680px] flex flex-col justify-center items-center overflow-hidden bg-modeling-ink">
      {/* Background video — always behind slides for cinematic motion */}
      <video
        src="/modeling-landing/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />

      <AnimatePresence initial={false} custom={direction} mode="sync">
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ x: { type: 'tween', ease: [0.32, 0.72, 0, 1], duration: 0.95 } }}
          className="absolute inset-0 z-0"
        >
          <img
            src={HERO_SLIDES[current].img}
            alt="Modelling agency editorial"
            loading={current === 0 ? 'eager' : 'lazy'}
            decoding="async"
            className="w-full h-full object-cover object-[center_28%] brightness-[0.5]"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay stack:
          (1) global flat darken so the text is legible regardless of slide content,
          (2) left-to-right gradient that holds the dark wall under the copy column,
          (3) top + bottom fade for nav legibility + footer indicators. */}
      <div className="absolute inset-0 bg-modeling-ink/40 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-modeling-ink/92 via-modeling-ink/70 to-modeling-ink/15 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-modeling-ink/75 via-transparent to-modeling-ink/40 z-10 pointer-events-none" />

      <button
        onClick={() => { go(-1); resetTimer() }}
        aria-label="Previous slide"
        className="group absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center bg-modeling-ink/40 backdrop-blur-sm border border-white/15 hover:bg-modeling-rose hover:border-modeling-rose transition-all duration-300"
      >
        <ChevronLeft className="w-5 h-5 text-white group-hover:-translate-x-0.5 transition-transform" />
      </button>
      <button
        onClick={() => { go(1); resetTimer() }}
        aria-label="Next slide"
        className="group absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center bg-modeling-ink/40 backdrop-blur-sm border border-white/15 hover:bg-modeling-rose hover:border-modeling-rose transition-all duration-300"
      >
        <ChevronRight className="w-5 h-5 text-white group-hover:translate-x-0.5 transition-transform" />
      </button>

      <Container className="relative z-20 flex flex-col justify-center text-left pt-16">
        <div className="max-w-3xl space-y-8 mt-8 md:mt-12">
          <AnimatedReveal>
            <p
              className="text-white/85 tracking-[0.34em] uppercase text-[10px] font-bold"
              style={{ textShadow: '0 1px 8px rgba(15,23,42,0.6)' }}
            >
              Blueprint B5 · Modelling Agency Operating System
            </p>
          </AnimatedReveal>

          <AnimatedReveal delay={0.1}>
            <Heading
              level={1}
              className="text-white drop-shadow-2xl leading-[0.92]"
            >
              Book without<br />
              <span className="italic text-white/55">the chaos.</span>
            </Heading>
          </AnimatedReveal>

          <AnimatedReveal delay={0.2}>
            <p
              className="text-base md:text-lg text-white font-modeling-body max-w-xl leading-relaxed"
              style={{ textShadow: '0 2px 12px rgba(15,23,42,0.55)' }}
            >
              The precision OS for boutique and holding modelling agencies. Every option hold, contract, trust-account split, and minor-curfew check runs end-to-end — automatically, audit-trailed, escrow-secured.
            </p>
          </AnimatedReveal>

          <AnimatedReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => openPanel('trial')}
                className="bg-modeling-rose text-white border-none shadow-xl hover:bg-modeling-deep uppercase tracking-widest text-[11px] px-10 py-5 transition-all duration-500 font-semibold"
              >
                Start 14-Day Trial
              </button>
              <button
                onClick={() => openPanel('demo')}
                className="bg-transparent text-white border border-white/40 hover:bg-white hover:text-modeling-ink uppercase tracking-widest text-[11px] px-10 py-5 transition-all duration-500 backdrop-blur-sm font-semibold"
              >
                Book a 30-Min Demo
              </button>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={0.4}>
            <a
              href="/agencies/modeling/demo"
              className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] font-bold text-modeling-rose hover:text-white transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-modeling-rose animate-pulse" />
              Open the live demo — 11 workspaces, no signup
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </AnimatedReveal>

          <AnimatedReveal delay={0.5}>
            <div
              className="pt-3 flex flex-wrap gap-x-6 gap-y-2 text-[11px] tracking-widest uppercase font-semibold text-white/75"
              style={{ textShadow: '0 1px 6px rgba(15,23,42,0.6)' }}
            >
              <span>50+ agencies on the platform</span>
              <span className="hidden sm:inline w-px h-3 bg-white/30" />
              <span>€18M+ settled through escrow</span>
              <span className="hidden sm:inline w-px h-3 bg-white/30" />
              <span>99.9% uptime</span>
            </div>
          </AnimatedReveal>
        </div>
      </Container>

      {/* City label */}
      <div className="absolute top-20 right-8 z-20 hidden md:block">
        <p className="text-[8px] font-bold tracking-[0.45em] text-white/45 uppercase">
          Milan · Paris · London · New York · Mumbai
        </p>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
        <div className="text-white/55 text-[10px] font-mono tracking-widest font-bold">
          {String(current + 1).padStart(2, '0')}
          <span className="text-white/25 mx-1.5">/</span>
          {String(HERO_SLIDES.length).padStart(2, '0')}
        </div>
        <div className="flex gap-2">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => { goTo(i); resetTimer() }}
              aria-label={`Go to slide ${i + 1}`}
              className="w-10 h-[2px] transition-all duration-300"
              style={{ background: i === current ? 'rgba(236,72,153,0.95)' : 'rgba(255,255,255,0.25)' }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
