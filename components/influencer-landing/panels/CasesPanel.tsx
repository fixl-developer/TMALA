"use client"

import React from 'react'
import { TrendingUp, Users, Receipt } from 'lucide-react'
import { Heading } from '../ui/Heading'

const CASES = [
  {
    name: 'House of Creators · Mumbai',
    metric: '₹4.2Cr',
    metricLabel: 'in escrow-secured deals',
    icon: TrendingUp,
    body: '90+ creators, 28 active campaigns at any time. Switched off WhatsApp groups in week 2. Form 16A issued for 47 creators last quarter — zero spreadsheet math.',
  },
  {
    name: 'Bombay Talent Co. · Pan-India',
    metric: '4.8x',
    metricLabel: 'roster utilization vs previous quarter',
    icon: Users,
    body: 'Retention alerts caught 6 creators within their first 60 days of inactivity. Upsell engine repriced 12 creators upward. Net revenue per creator up 31%.',
  },
  {
    name: 'Creators Collective · Bangalore',
    metric: '0',
    metricLabel: 'ASCI flags since onboarding',
    icon: Receipt,
    body: 'Clause baseline + ASCI disclosure auto-check intercepted 23 non-compliant drafts before publish. GSTR-1 filed in 4 minutes flat at quarter close.',
  },
]

export function CasesPanel() {
  return (
    <div className="pt-2 pb-12 space-y-7">
      <div className="space-y-2">
        <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent-primary">
          Customer Stories
        </div>
        <Heading level={3} className="text-3xl md:text-4xl">
          What agencies <span className="italic text-accent-primary">actually ship.</span>
        </Heading>
        <p className="text-text-mut leading-relaxed">
          Three agencies, three different sizes, one operating system. Real numbers from
          the first 90 days.
        </p>
      </div>

      <div className="space-y-4">
        {CASES.map((c) => {
          const Icon = c.icon
          return (
            <div
              key={c.name}
              className="group p-5 border border-text-main/15 hover:border-accent-primary/50 hover:bg-accent-primary/[0.03] transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 bg-text-main text-white flex items-center justify-center">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] uppercase tracking-widest font-bold text-text-mut mb-1">
                    {c.name}
                  </div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-display font-bold text-accent-primary">
                      {c.metric}
                    </span>
                    <span className="text-[12px] text-text-mut">{c.metricLabel}</span>
                  </div>
                  <p className="text-text-mut text-[13px] leading-relaxed">{c.body}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="border-t border-text-main/10 pt-6">
        <p className="text-[11px] text-text-mut text-center">
          More case studies available on request — ask in your demo call.
        </p>
      </div>
    </div>
  )
}
