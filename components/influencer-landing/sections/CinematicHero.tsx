"use client"

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Container } from '../ui/Container'
import { Heading } from '../ui/Heading'
import { Button } from '../ui/Button'
import { AnimatedReveal } from '../ui/AnimatedReveal'
import { useInfluencerLanding } from '../context'

const HERO_SLIDES = [
  { id: 1, img: '/influencer-landing/pexels-anna-nekrashevich-12433026.jpg' },
  { id: 2, img: '/influencer-landing/pexels-shvetsa-12673609.jpg' },
  { id: 3, img: '/influencer-landing/pexels-silverkblack-36698294.jpg' },
  { id: 4, img: '/influencer-landing/pexels-mizunokozuki-13929323.jpg' },
]

const AUTO_ADVANCE_MS = 5000

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? '100%' : '-100%',
    opacity: 1,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? '-100%' : '100%',
    opacity: 1,
  }),
}

export function CinematicHero() {
  const [[current, direction], setCurrent] = useState<[number, number]>([0, 1])
  const { openPanel } = useInfluencerLanding()
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  function go(delta: number) {
    setCurrent(([prev]) => {
      const next = (prev + delta + HERO_SLIDES.length) % HERO_SLIDES.length
      return [next, delta > 0 ? 1 : -1]
    })
  }

  function goTo(target: number) {
    setCurrent(([prev]) => {
      const dir = target > prev ? 1 : -1
      return [target, dir]
    })
  }

  function resetTimer() {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrent(([prev]) => {
        const next = (prev + 1) % HERO_SLIDES.length
        return [next, 1]
      })
    }, AUTO_ADVANCE_MS)
  }

  useEffect(() => {
    resetTimer()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  function handleNav(delta: number) {
    go(delta)
    resetTimer()
  }

  function handleDot(target: number) {
    goTo(target)
    resetTimer()
  }

  return (
    <section className="relative w-full h-[100svh] min-h-[640px] flex flex-col justify-center items-center overflow-hidden bg-black">
      {/* Slides — horizontal slide transition */}
      <AnimatePresence initial={false} custom={direction} mode="sync">
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'tween', ease: [0.32, 0.72, 0, 1], duration: 0.9 },
          }}
          className="absolute inset-0 z-0"
        >
          <img
            src={HERO_SLIDES[current].img}
            alt="Influencer agency operations"
            loading={current === 0 ? 'eager' : 'lazy'}
            decoding="async"
            className="w-full h-full object-cover object-[center_30%] brightness-[0.72]"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40 z-10 pointer-events-none" />

      {/* Side arrows */}
      <button
        onClick={() => handleNav(-1)}
        aria-label="Previous slide"
        className="group absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center bg-black/30 backdrop-blur-sm border border-white/15 hover:bg-accent-primary hover:border-accent-primary transition-all duration-300"
      >
        <ChevronLeft className="w-5 h-5 text-white group-hover:-translate-x-0.5 transition-transform" />
      </button>
      <button
        onClick={() => handleNav(1)}
        aria-label="Next slide"
        className="group absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center bg-black/30 backdrop-blur-sm border border-white/15 hover:bg-accent-primary hover:border-accent-primary transition-all duration-300"
      >
        <ChevronRight className="w-5 h-5 text-white group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Content */}
      <Container className="relative z-20 flex flex-col items-center justify-center text-center px-4 pt-16">
        <div className="max-w-4xl mx-auto space-y-8 mt-12 md:mt-16">
          <AnimatedReveal>
            <p className="text-white/70 tracking-[0.3em] uppercase text-xs font-semibold">
              Blueprint B4 · Brand Deals + Deliverables
            </p>
          </AnimatedReveal>

          <AnimatedReveal delay={0.1}>
            <Heading
              level={1}
              className="text-white drop-shadow-2xl text-5xl md:text-7xl lg:text-[5.5rem] font-display border-none leading-[1.05] font-medium m-0"
            >
              Run an influencer agency, not a{' '}
              <span className="text-white italic">spreadsheet factory.</span>
            </Heading>
          </AnimatedReveal>

          <AnimatedReveal delay={0.2}>
            <p className="text-sm md:text-base lg:text-lg text-white/85 font-medium max-w-2xl mx-auto tracking-wide m-0 leading-relaxed">
              TalentOS B4 is the operating system for creator-management agencies — from
              first brief to final payout, with escrow, GST/TDS, and ASCI/FTC compliance
              built in.
            </p>
          </AnimatedReveal>

          <AnimatedReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
              <Button
                variant="primary"
                size="lg"
                onClick={() => openPanel('onboarding')}
                className="bg-accent-primary text-white border-none shadow-xl hover:bg-accent-tertiary uppercase tracking-widest text-[11px] px-10 py-5 rounded-none w-full sm:w-auto transition-all duration-500"
              >
                Start 14-Day Trial
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => openPanel('demo')}
                className="bg-transparent text-white border border-white/40 hover:bg-white hover:text-black uppercase tracking-widest text-[11px] px-10 py-5 rounded-none w-full sm:w-auto transition-all duration-500 backdrop-blur-sm"
              >
                Book a 30-Min Demo
              </Button>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={0.4}>
            <div className="pt-3">
              <a
                href="/agencies/influencer/demo"
                className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] font-bold text-accent-primary hover:text-white transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
                Try the live demo — 12 workspaces, no signup
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={0.5}>
            <div className="pt-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] tracking-widest uppercase font-semibold text-white/60">
              <span>Trusted by 50+ agencies</span>
              <span className="hidden sm:inline w-px h-3 bg-white/25" />
              <span>₹40Cr+ in escrow settlements</span>
              <span className="hidden sm:inline w-px h-3 bg-white/25" />
              <span>99.9% uptime</span>
            </div>
          </AnimatedReveal>
        </div>
      </Container>

      {/* Slide indicators + counter */}
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
              onClick={() => handleDot(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="w-10 h-[2px] transition-all duration-300"
              style={{
                background: i === current ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.25)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
