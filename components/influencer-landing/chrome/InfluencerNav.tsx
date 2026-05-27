"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X, ArrowLeft } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInfluencerLanding } from '../context'

const NAV_LINKS = [
  { label: 'Workspaces', href: '#workspace-admin' },
  { label: 'Tenant', href: '#tenant-control' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Live Demo', href: '/agencies/influencer/demo', highlight: true },
]

export function InfluencerNav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { openPanel } = useInfluencerLanding()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-bg-base/90 backdrop-blur-md border-b border-black/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
          {/* Left: brand + back */}
          <div className="flex items-center gap-5">
            <Link
              href="/agencies/all"
              className={`hidden sm:inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-bold transition-colors ${
                scrolled ? 'text-text-mut hover:text-text-main' : 'text-white/70 hover:text-white'
              }`}
            >
              <ArrowLeft className="w-3 h-3" />
              All Agencies
            </Link>
            <Link
              href="/agencies/influencer"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className={`font-display font-bold text-lg tracking-tight uppercase transition-colors cursor-pointer ${
                scrolled ? 'text-text-main' : 'text-white'
              }`}
            >
              TalentOS
              <span className="text-accent-primary"> / Influencer</span>
            </Link>
          </div>

          {/* Center: links */}
          <div className="hidden lg:flex items-center gap-9 absolute left-1/2 -translate-x-1/2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[11px] uppercase tracking-[0.2em] font-bold transition-colors inline-flex items-center gap-1.5 ${
                  link.highlight
                    ? 'text-accent-primary hover:text-accent-tertiary'
                    : scrolled
                    ? 'text-text-main hover:text-accent-primary'
                    : 'text-white/85 hover:text-accent-primary'
                }`}
              >
                {link.highlight && (
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
                )}
                {link.label}
              </a>
            ))}
          </div>

          {/* Right: CTA + mobile menu */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => openPanel('demo')}
              className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-[10px] uppercase tracking-widest font-bold transition-all duration-300 ${
                scrolled
                  ? 'bg-text-main text-white hover:bg-accent-primary'
                  : 'bg-white text-text-main hover:bg-accent-primary hover:text-white'
              }`}
            >
              Book Demo
            </button>
            <button
              onClick={() => openPanel('onboarding')}
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-[10px] uppercase tracking-widest font-bold bg-accent-primary text-white hover:bg-accent-tertiary transition-all duration-300"
            >
              Start Trial
            </button>
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className={`lg:hidden p-2 transition-colors ${
                scrolled ? 'text-text-main' : 'text-white'
              }`}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[80] lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-bg-base z-[90] p-6 flex flex-col lg:hidden"
            >
              <div className="flex items-center justify-between mb-10">
                <span className="font-display font-bold text-lg uppercase">
                  TalentOS<span className="text-accent-primary"> / Influencer</span>
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="p-2 text-text-main hover:text-accent-primary"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-5 mb-auto">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl font-display font-bold text-text-main hover:text-accent-primary transition-colors uppercase tracking-tight"
                  >
                    {link.label}
                  </a>
                ))}
                <Link
                  href="/agencies/all"
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-display font-bold text-text-mut hover:text-accent-primary transition-colors uppercase tracking-tight"
                >
                  All Agencies
                </Link>
              </div>

              <div className="flex flex-col gap-3 mt-10">
                <button
                  onClick={() => {
                    setMobileOpen(false)
                    openPanel('demo')
                  }}
                  className="w-full bg-text-main text-white px-5 py-4 text-[11px] font-bold uppercase tracking-widest"
                >
                  Book Demo
                </button>
                <button
                  onClick={() => {
                    setMobileOpen(false)
                    openPanel('onboarding')
                  }}
                  className="w-full bg-accent-primary text-white px-5 py-4 text-[11px] font-bold uppercase tracking-widest"
                >
                  Start Trial
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
