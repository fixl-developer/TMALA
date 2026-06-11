"use client"

import React from 'react'
import Link from 'next/link'
import { useModelingLanding } from '../context'

const FOOTER_LINKS: Record<string, { label: string; href: string }[]> = {
  Product: [
    { label: 'Option Board', href: '#option-board' },
    { label: 'Trust Account', href: '#money-trust' },
    { label: 'Role cockpit', href: '#cockpit' },
    { label: '24 modules', href: '#modules' },
  ],
  Compliance: [
    { label: 'Co-guardian flow', href: '#cockpit' },
    { label: 'Curfew tracker', href: '#cockpit' },
    { label: 'GST · TDS · SEPA', href: '#money-trust' },
    { label: 'DPDP & ASCI', href: '#money-trust' },
  ],
  Company: [
    { label: 'All Agencies', href: '/agencies/all' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Customer stories', href: '/customer-stories' },
    { label: 'Contact', href: '/contact' },
  ],
}

export function ModelingFooter() {
  const { openPanel } = useModelingLanding()
  return (
    <footer className="bg-modeling-ink text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8">
          <div className="col-span-2 md:col-span-2 space-y-6">
            <Link
              href="/agencies/modeling"
              className="font-modeling-display text-2xl tracking-[0.18em] uppercase block"
            >
              TalentOS<span className="text-modeling-rose"> / Modelling</span>
            </Link>
            <p className="text-white/65 text-sm leading-relaxed max-w-sm">
              The operating system every modelling agency wishes they had. Options, splits, trust accounts, and minor compliance — automated end-to-end.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => openPanel('demo')}
                className="px-5 py-3 bg-white text-modeling-ink text-[10px] uppercase tracking-widest font-bold hover:bg-modeling-rose hover:text-white transition-colors"
              >
                Book Demo
              </button>
              <button
                onClick={() => openPanel('trial')}
                className="px-5 py-3 bg-modeling-rose text-white text-[10px] uppercase tracking-widest font-bold hover:bg-modeling-deep transition-colors"
              >
                Start 14-Day Trial
              </button>
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([group, items]) => (
            <div key={group} className="space-y-4">
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-modeling-rose">{group}</h4>
              <ul className="space-y-2.5">
                {items.map((it) => (
                  <li key={it.label}>
                    {it.href.startsWith('#') ? (
                      <a href={it.href} className="text-sm text-white/70 hover:text-white transition-colors">
                        {it.label}
                      </a>
                    ) : (
                      <Link href={it.href} className="text-sm text-white/70 hover:text-white transition-colors">
                        {it.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-[11px] text-white/45 uppercase tracking-widest">
          <span>© {new Date().getFullYear()} TalentOS — B5 Modelling vertical.</span>
          <span>Milan · Paris · London · New York · Mumbai</span>
        </div>
      </div>
    </footer>
  )
}
