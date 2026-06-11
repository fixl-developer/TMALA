"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X, ArrowLeft } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useModelingLanding } from '../context'

const NAV_LINKS: { label: string; href: string; highlight?: boolean }[] = [
  { label: 'Cockpit', href: '#cockpit' },
  { label: 'Option Board', href: '#option-board' },
  { label: 'Money & Trust', href: '#money-trust' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Live Demo', href: '/agencies/modeling/demo', highlight: true },
]

export function ModelingNav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { openPanel } = useModelingLanding()

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
            ? 'bg-modeling-bg/92 backdrop-blur-md border-b border-modeling-line'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center gap-6">
          {/* Left: back link + wordmark */}
          <div className="flex items-center gap-4 shrink-0 min-w-0">
            <Link
              href="/agencies/all"
              className={`hidden md:inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-bold transition-colors shrink-0 ${
                scrolled ? 'text-modeling-mut hover:text-modeling-ink' : 'text-white/70 hover:text-white'
              }`}
            >
              <ArrowLeft className="w-3 h-3" />
              All
            </Link>
            <Link
              href="/agencies/modeling"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className={`font-modeling-display font-bold text-base xl:text-lg tracking-[0.14em] uppercase whitespace-nowrap transition-colors cursor-pointer ${
                scrolled ? 'text-modeling-ink' : 'text-white'
              }`}
            >
              TalentOS
              <span className="hidden sm:inline text-modeling-rose"> / Modelling</span>
            </Link>
          </div>

          {/* Center: links — flex-1 so it shares space rather than overlapping */}
          <div className="hidden lg:flex flex-1 items-center justify-center gap-7 xl:gap-9 min-w-0">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[11px] uppercase tracking-[0.2em] font-bold whitespace-nowrap transition-colors inline-flex items-center gap-1.5 ${
                  link.highlight
                    ? 'text-modeling-rose hover:text-modeling-deep'
                    : scrolled
                      ? 'text-modeling-ink hover:text-modeling-rose'
                      : 'text-white/85 hover:text-modeling-rose'
                }`}
              >
                {link.highlight && <span className="w-1.5 h-1.5 rounded-full bg-modeling-rose animate-pulse" />}
                {link.label}
              </a>
            ))}
          </div>

          {/* Right: CTAs — pushed to end with ml-auto when center is hidden */}
          <div className="flex items-center gap-3 shrink-0 ml-auto lg:ml-0">
            <button
              onClick={() => openPanel('demo')}
              className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-[10px] uppercase tracking-widest font-bold transition-all duration-300 ${
                scrolled
                  ? 'bg-modeling-ink text-white hover:bg-modeling-rose'
                  : 'bg-white text-modeling-ink hover:bg-modeling-rose hover:text-white'
              }`}
            >
              Book Demo
            </button>
            <button
              onClick={() => openPanel('trial')}
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-[10px] uppercase tracking-widest font-bold bg-modeling-rose text-white hover:bg-modeling-deep transition-all duration-300"
            >
              Start Trial
            </button>
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className={`lg:hidden p-2 -mr-2 ${scrolled ? 'text-modeling-ink' : 'text-white'}`}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-modeling-ink lg:hidden"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <span className="font-modeling-display text-lg tracking-[0.18em] uppercase text-white">
                TalentOS <span className="text-modeling-rose">/ Modelling</span>
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="p-2 -mr-2 text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col px-6 pt-8 gap-5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white text-2xl font-modeling-display tracking-tight hover:text-modeling-rose transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-8 space-y-3">
                <button
                  onClick={() => { setMobileOpen(false); openPanel('demo') }}
                  className="w-full px-6 py-4 bg-white text-modeling-ink text-[11px] uppercase tracking-widest font-bold"
                >
                  Book Demo
                </button>
                <button
                  onClick={() => { setMobileOpen(false); openPanel('trial') }}
                  className="w-full px-6 py-4 bg-modeling-rose text-white text-[11px] uppercase tracking-widest font-bold"
                >
                  Start 14-Day Trial
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
