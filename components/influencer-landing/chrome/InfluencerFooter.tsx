"use client"

import React from 'react'
import Link from 'next/link'
import { Twitter, Linkedin, Instagram } from 'lucide-react'
import { Container } from '../ui/Container'
import { useInfluencerLanding } from '../context'

const FOOTER_COLS = [
  {
    title: 'Product',
    items: [
      { label: 'Pricing', href: '#pricing' },
      { label: 'FAQ', href: '#faq' },
      { label: 'All Blueprints', href: '/agencies/all' },
      { label: 'AI Studio', href: '/ai-features' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { label: 'Customer Stories', href: '/customer-stories' },
      { label: 'Guides & Docs', href: '/guides' },
      { label: 'Blog', href: '/blog' },
      { label: 'API & Integrations', href: '/api-docs' },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'About TalentOS', href: '/' },
      { label: 'Contact Sales', href: '#cta', action: 'demo' as const },
      { label: 'Trust & Safety', href: '/trust-safety' },
      { label: 'White-label', href: '/white-label' },
    ],
  },
]

export function InfluencerFooter() {
  const { openPanel } = useInfluencerLanding()

  return (
    <footer className="bg-text-main text-bg-base py-16 md:py-20 border-t-2 border-accent-primary">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-4 space-y-5">
            <Link
              href="/agencies/influencer"
              className="inline-block font-display font-bold text-xl tracking-tight uppercase text-white"
            >
              TalentOS<span className="text-accent-primary"> / Influencer</span>
            </Link>
            <p className="text-bg-base/65 text-sm leading-relaxed max-w-sm">
              The operating system for creator-management agencies. Escrow, GST/TDS, ASCI
              compliance — built in. Mumbai-hosted. DPDP-compliant.
            </p>
            <div className="flex gap-3 pt-2">
              {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social"
                  className="text-bg-base/45 hover:text-accent-primary transition-colors p-2 hover:bg-white/5"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Columns */}
          {FOOTER_COLS.map((col) => (
            <div key={col.title} className="lg:col-span-2 lg:col-start-auto">
              <h4 className="font-display font-bold text-white mb-4 uppercase tracking-widest text-[10px]">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.items.map((item) => {
                  const cls =
                    'text-bg-base/65 hover:text-accent-primary transition-colors text-[13px]'
                  if ('action' in item && item.action) {
                    return (
                      <li key={item.label}>
                        <button
                          onClick={() => openPanel(item.action)}
                          className={`${cls} text-left`}
                        >
                          {item.label}
                        </button>
                      </li>
                    )
                  }
                  return (
                    <li key={item.label}>
                      <Link href={item.href} className={cls}>
                        {item.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}

          {/* Trust */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-white mb-4 uppercase tracking-widest text-[10px]">
              Trust
            </h4>
            <ul className="space-y-2 text-[12px] text-bg-base/65">
              <li>Data hosted in Mumbai (ap-south-1)</li>
              <li>DPDP-compliant · SOC 2 Type II</li>
              <li>99.9% uptime SLA</li>
              <li>₹40Cr+ in escrow settlements</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-bg-base/45">
          <p>© {new Date().getFullYear()} TalentOS Inc. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/" className="hover:text-accent-primary transition-colors">
              Terms
            </Link>
            <Link href="/" className="hover:text-accent-primary transition-colors">
              Privacy
            </Link>
            <Link href="/" className="hover:text-accent-primary transition-colors">
              Security
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
