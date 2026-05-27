"use client"

import React from 'react'
import {
  Wallet,
  TrendingUp,
  TrendingDown,
  Activity,
  Users,
  Briefcase,
  Shield,
  AlertCircle,
  CheckCircle2,
  MessageSquare,
  Paperclip,
  Star,
  Search,
  Plus,
  Sparkles,
  Calendar,
  Play,
  Image as ImageIcon,
  Wand2,
  Mic,
  Receipt,
  FileText,
  Eye,
  ThumbsUp,
} from 'lucide-react'

export type MockType =
  | 'admin-dashboard'
  | 'deal-room'
  | 'roster-grid'
  | 'review-queue'
  | 'cash-flow'
  | 'legal-compliance'
  | 'creator-wallet'
  | 'client-review'

function Frame({
  url,
  children,
}: {
  url: string
  children: React.ReactNode
}) {
  return (
    <div className="relative">
      <div className="bg-white border border-text-main/15 shadow-2xl overflow-hidden">
        {/* Window chrome */}
        <div className="bg-bg-base border-b border-text-main/10 px-4 py-2.5 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-text-main/20" />
          <div className="w-2 h-2 rounded-full bg-text-main/20" />
          <div className="w-2 h-2 rounded-full bg-text-main/20" />
          <div className="ml-3 px-3 py-1 bg-white text-text-mut text-[10px] font-mono tracking-wider truncate max-w-[280px]">
            {url}
          </div>
        </div>
        <div className="p-5 md:p-6 min-h-[480px]">{children}</div>
      </div>
      <div className="absolute -bottom-3 -right-3 w-20 h-20 border-2 border-accent-primary -z-10" />
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── 1. ADMIN DASHBOARD */

const ADMIN_KPIS: Array<{
  label: string
  value: string
  delta?: string
  trend?: 'up' | 'down'
  icon: any
  color: string
}> = [
  { label: 'Escrow Held', value: '₹18.4L', delta: '+8%', trend: 'up', icon: Wallet, color: '#22c55e' },
  { label: 'MTD Payouts', value: '₹6.2L', delta: '+12%', trend: 'up', icon: TrendingUp, color: '#3b82f6' },
  { label: 'Pipeline Value', value: '₹42L', delta: '+24%', trend: 'up', icon: Briefcase, color: '#a855f7' },
  { label: 'Win Rate', value: '73%', delta: '+4%', trend: 'up', icon: Activity, color: '#0ea5e9' },
  { label: 'AR Overdue', value: '₹2.1L', delta: '-15%', trend: 'down', icon: AlertCircle, color: '#f59e0b' },
  { label: 'Health Score', value: 'A−', delta: 'Stable', icon: Shield, color: '#10b981' },
  { label: 'Active Creators', value: '47', delta: '+3', trend: 'up', icon: Users, color: '#ec4899' },
  { label: 'Active Deals', value: '28', delta: '+5', trend: 'up', icon: Briefcase, color: '#6366f1' },
]

function AdminDashboardMock() {
  return (
    <Frame url="talentos.io/influencer/admin">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent-primary mb-0.5">
            Agency Operations
          </div>
          <div className="font-display font-bold text-text-main text-base">
            Today · 12 things need you
          </div>
        </div>
        <div className="flex gap-1">
          {['Pipeline', 'Health', 'Compliance'].map((t, i) => (
            <div
              key={t}
              className={`px-2.5 py-1 text-[9px] uppercase tracking-widest font-bold ${
                i === 0 ? 'bg-text-main text-white' : 'bg-bg-base text-text-mut'
              }`}
            >
              {t}
            </div>
          ))}
        </div>
      </div>

      {/* 8 KPI cards */}
      <div className="grid grid-cols-4 gap-2 mb-5">
        {ADMIN_KPIS.map((k) => {
          const Icon = k.icon
          const TrendIcon = k.trend === 'down' ? TrendingDown : TrendingUp
          return (
            <div
              key={k.label}
              className="p-2.5 border"
              style={{ background: `${k.color}14`, borderColor: `${k.color}40` }}
            >
              <div className="flex items-center justify-between mb-2">
                <div
                  className="w-6 h-6 flex items-center justify-center text-white"
                  style={{ background: k.color }}
                >
                  <Icon className="w-3 h-3" />
                </div>
                {k.delta && (
                  <div
                    className="flex items-center gap-0.5 text-[9px] font-bold"
                    style={{ color: k.color }}
                  >
                    {k.trend && <TrendIcon className="w-2.5 h-2.5" />}
                    {k.delta}
                  </div>
                )}
              </div>
              <div className="text-[9px] uppercase tracking-wider font-bold text-text-mut mb-0.5">
                {k.label}
              </div>
              <div className="font-display font-bold text-text-main text-sm leading-tight">
                {k.value}
              </div>
            </div>
          )
        })}
      </div>

      {/* Attention Needed */}
      <div className="border border-text-main/10 p-3">
        <div className="flex items-center gap-2 mb-2">
          <AlertCircle className="w-3 h-3 text-accent-primary" />
          <div className="text-[10px] uppercase tracking-widest font-bold text-text-main">
            Attention Needed · 4
          </div>
        </div>
        <div className="space-y-1.5">
          {[
            { sev: '#ef4444', text: 'Lakmé contract — clause deviation flagged', time: '12m' },
            { sev: '#f59e0b', text: 'Vikram at retention risk — 0 deals in 60d', time: '2h' },
            { sev: '#3b82f6', text: 'GST filing window opens in 6 days', time: '6d' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-[11px] py-1">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: item.sev }} />
              <span className="text-text-main flex-1 truncate">{item.text}</span>
              <span className="text-text-mut text-[10px]">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  )
}

/* ─────────────────────────────────────────────────────────── 2. DEAL ROOM */

function DealRoomMock() {
  return (
    <Frame url="talentos.io/deals-mgr/rooms/d_492">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-text-main/10">
        <div>
          <div className="text-[10px] uppercase tracking-widest font-bold text-text-mut mb-1">
            Deal Room · D-492
          </div>
          <div className="font-display font-bold text-text-main text-base">
            Lakmé Festive Campaign
          </div>
        </div>
        <div className="text-right">
          <div className="font-display font-bold text-accent-primary text-lg leading-none">
            ₹4,20,000
          </div>
          <div className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 bg-[#22c55e] text-white text-[9px] uppercase tracking-widest font-bold">
            <CheckCircle2 className="w-2.5 h-2.5" /> Escrow Funded
          </div>
        </div>
      </div>

      {/* Milestone strip */}
      <div className="flex items-center gap-1 mb-4 text-[9px] uppercase tracking-widest font-bold">
        {[
          { l: 'Brief', done: true },
          { l: 'Quote', done: true },
          { l: 'Contract', done: true },
          { l: 'Active', done: false, active: true },
          { l: 'Delivery', done: false },
          { l: 'Payout', done: false },
        ].map((s, i, arr) => (
          <React.Fragment key={s.l}>
            <div
              className={`px-2 py-1 ${
                s.done
                  ? 'bg-text-main text-white'
                  : s.active
                  ? 'bg-accent-primary text-white'
                  : 'bg-bg-base text-text-mut'
              }`}
            >
              {s.l}
            </div>
            {i < arr.length - 1 && <div className="flex-1 h-px bg-text-main/10" />}
          </React.Fragment>
        ))}
      </div>

      {/* Chat thread */}
      <div className="space-y-2 mb-4">
        {[
          { who: 'Lakmé', side: 'left', text: 'Can we add 2 stories per creator to the deliverable list?' },
          { who: 'You', side: 'right', text: 'Yes — +₹40k. Pushed updated quote to your portal.' },
          { who: 'Lakmé', side: 'left', text: 'Approved. Funding escrow now.' },
        ].map((m, i) => (
          <div key={i} className={`flex ${m.side === 'right' ? 'justify-end' : ''}`}>
            <div className="max-w-[80%]">
              <div className="text-[9px] uppercase tracking-widest font-bold text-text-mut mb-0.5">
                {m.who}
              </div>
              <div
                className={`px-3 py-2 text-[11px] leading-snug ${
                  m.side === 'right'
                    ? 'bg-text-main text-white'
                    : 'bg-bg-base text-text-main'
                }`}
              >
                {m.text}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* File attachment */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-text-main/15 bg-bg-base text-[11px]">
        <Paperclip className="w-3 h-3 text-accent-primary" />
        <span className="text-text-main font-medium">brief-lakme-festive-v3.pdf</span>
        <span className="text-text-mut text-[10px]">· 482 KB</span>
      </div>
    </Frame>
  )
}

/* ─────────────────────────────────────────────────────────── 3. ROSTER GRID */

const ROSTER_CREATORS = [
  { name: 'Priya S.', status: 'Active', color: '#22c55e' },
  { name: 'Vikram K.', status: 'At Risk', color: '#f59e0b' },
  { name: 'Anjali M.', status: 'Active', color: '#22c55e' },
  { name: 'Rohit P.', status: 'Upsell', color: '#a855f7' },
  { name: 'Neha B.', status: 'Active', color: '#22c55e' },
  { name: 'Arjun T.', status: 'Onboarding', color: '#3b82f6' },
  { name: 'Riya G.', status: 'Active', color: '#22c55e' },
  { name: 'Karan V.', status: 'At Risk', color: '#f59e0b' },
  { name: 'Megha S.', status: 'Active', color: '#22c55e' },
  { name: 'Aditya R.', status: 'Upsell', color: '#a855f7' },
  { name: 'Tanvi P.', status: 'Active', color: '#22c55e' },
  { name: 'Sahil K.', status: 'Active', color: '#22c55e' },
]

function RosterGridMock() {
  return (
    <Frame url="talentos.io/creator-mgr/creators">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-[10px] uppercase tracking-widest font-bold text-accent-primary mb-0.5">
            Roster · 47 creators
          </div>
          <div className="font-display font-bold text-text-main text-base">
            3 at risk · 2 upsell-ready · 1 onboarding
          </div>
        </div>
        <button className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-accent-primary text-white text-[10px] uppercase tracking-widest font-bold">
          <Plus className="w-3 h-3" /> Add
        </button>
      </div>

      {/* Search + filters */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex-1 flex items-center gap-2 px-3 py-2 border border-text-main/15 bg-bg-base">
          <Search className="w-3 h-3 text-text-mut" />
          <span className="text-[11px] text-text-mut">Search creators…</span>
        </div>
        {['All', 'At Risk', 'Upsell'].map((f, i) => (
          <div
            key={f}
            className={`px-2.5 py-1.5 text-[10px] uppercase tracking-widest font-bold ${
              i === 0 ? 'bg-text-main text-white' : 'border border-text-main/15 text-text-mut'
            }`}
          >
            {f}
          </div>
        ))}
      </div>

      {/* Creator grid */}
      <div className="grid grid-cols-4 gap-2">
        {ROSTER_CREATORS.map((c) => (
          <div
            key={c.name}
            className="p-2.5 border border-text-main/10 bg-white hover:bg-bg-base"
          >
            <div
              className="w-9 h-9 rounded-full mb-2 mx-auto flex items-center justify-center text-white text-[10px] font-bold"
              style={{ background: c.color }}
            >
              {c.name
                .split(' ')
                .map((s) => s[0])
                .join('')}
            </div>
            <div className="text-[11px] font-bold text-text-main text-center truncate mb-1">
              {c.name}
            </div>
            <div
              className="text-[8px] uppercase tracking-widest font-bold text-white text-center px-1 py-0.5"
              style={{ background: c.color }}
            >
              {c.status}
            </div>
          </div>
        ))}
      </div>
    </Frame>
  )
}

/* ─────────────────────────────────────────────────────────── 4. REVIEW QUEUE */

const REVIEW_DRAFTS = [
  {
    creator: 'Priya Sharma',
    campaign: 'Lakmé Festive · Reel',
    flags: [{ label: 'Missing #ad', color: '#f59e0b' }],
  },
  {
    creator: 'Rohit Patel',
    campaign: 'Boat · Story Set',
    flags: [
      { label: 'Watermark off-frame', color: '#f97316' },
      { label: 'Competitor mention', color: '#ef4444' },
    ],
  },
  {
    creator: 'Neha Banerjee',
    campaign: 'Mamaearth · Carousel',
    flags: [],
  },
  {
    creator: 'Karan Vohra',
    campaign: 'Sugar Cosmetics · Reel',
    flags: [{ label: 'Disclaimer audio missing', color: '#f59e0b' }],
  },
]

function ReviewQueueMock() {
  return (
    <Frame url="talentos.io/reviewer/queue">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-[10px] uppercase tracking-widest font-bold text-accent-primary mb-0.5">
            Review Queue
          </div>
          <div className="font-display font-bold text-text-main text-base">
            18 drafts · 3 flagged
          </div>
        </div>
        <div className="text-[10px] uppercase tracking-widest font-bold text-text-mut">
          Avg TAT: 2.4h
        </div>
      </div>

      <div className="space-y-2">
        {REVIEW_DRAFTS.map((d) => (
          <div
            key={d.creator}
            className="flex items-center gap-3 p-3 border border-text-main/10 bg-white"
          >
            {/* Thumbnail */}
            <div className="shrink-0 w-14 h-14 bg-text-main flex items-center justify-center text-white/40">
              <Play className="w-5 h-5" />
            </div>
            {/* Body */}
            <div className="flex-1 min-w-0">
              <div className="text-[11px] font-bold text-text-main truncate">
                {d.creator}
              </div>
              <div className="text-[10px] text-text-mut mb-1.5 truncate">{d.campaign}</div>
              <div className="flex flex-wrap gap-1">
                {d.flags.length === 0 && (
                  <div className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-[#22c55e] text-white text-[8px] uppercase tracking-widest font-bold">
                    <CheckCircle2 className="w-2 h-2" /> Clean
                  </div>
                )}
                {d.flags.map((f) => (
                  <div
                    key={f.label}
                    className="px-1.5 py-0.5 text-white text-[8px] uppercase tracking-widest font-bold"
                    style={{ background: f.color }}
                  >
                    {f.label}
                  </div>
                ))}
              </div>
            </div>
            {/* Action */}
            <button className="shrink-0 px-2.5 py-1 bg-text-main text-white text-[9px] uppercase tracking-widest font-bold">
              Review
            </button>
          </div>
        ))}
      </div>
    </Frame>
  )
}

/* ─────────────────────────────────────────────────────────── 5. CASH FLOW */

const CASH_KPIS = [
  { label: 'Escrow', value: '₹18.4L', color: '#22c55e' },
  { label: 'Payouts MTD', value: '₹6.2L', color: '#3b82f6' },
  { label: 'AR Overdue', value: '₹2.1L', color: '#f59e0b' },
  { label: 'GST Liability', value: '₹84k', color: '#a855f7' },
]

const CASH_BARS = [
  { day: '24', in: 60, out: 30 },
  { day: '25', in: 80, out: 40 },
  { day: '26', in: 55, out: 50 },
  { day: '27', in: 95, out: 35 },
  { day: '28', in: 70, out: 45 },
  { day: '29', in: 100, out: 30 },
  { day: '30', in: 85, out: 55 },
  { day: '31', in: 75, out: 40 },
]

function CashFlowMock() {
  return (
    <Frame url="talentos.io/influencer/finance">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-[10px] uppercase tracking-widest font-bold text-accent-primary mb-0.5">
            Cash Flow Console
          </div>
          <div className="font-display font-bold text-text-main text-base">
            Inflow vs Outflow · Last 8 days
          </div>
        </div>
        <button className="px-2.5 py-1.5 border border-text-main text-text-main text-[10px] uppercase tracking-widest font-bold">
          <Receipt className="w-3 h-3 inline mr-1" />
          Issue 16A
        </button>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-4 gap-2 mb-5">
        {CASH_KPIS.map((k) => (
          <div
            key={k.label}
            className="p-3 border"
            style={{ background: `${k.color}14`, borderColor: `${k.color}40` }}
          >
            <div
              className="text-[9px] uppercase tracking-widest font-bold mb-1"
              style={{ color: k.color }}
            >
              {k.label}
            </div>
            <div className="font-display font-bold text-text-main text-base leading-tight">
              {k.value}
            </div>
          </div>
        ))}
      </div>

      {/* Bar chart */}
      <div className="border border-text-main/10 p-4">
        <div className="flex items-end justify-between gap-2 h-32 mb-2">
          {CASH_BARS.map((b) => (
            <div key={b.day} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full flex flex-col justify-end h-full gap-0.5">
                <div className="w-full" style={{ height: `${b.in}%`, background: '#22c55e' }} />
                <div className="w-full" style={{ height: `${b.out * 0.5}%`, background: '#ef4444' }} />
              </div>
              <div className="text-[9px] text-text-mut font-bold">{b.day}</div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4 pt-2 border-t border-text-main/5 text-[10px]">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 bg-[#22c55e]" /> Inflow
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 bg-[#ef4444]" /> Outflow
          </div>
        </div>
      </div>
    </Frame>
  )
}

/* ─────────────────────────────────────────────────────────── 6. LEGAL / COMPLIANCE */

function ComplianceGauge() {
  // Simple semicircle gauge with three risk zones + needle at "Low" (~25%)
  return (
    <div className="relative w-full">
      <svg viewBox="0 0 200 120" className="w-full">
        {/* Risk zones */}
        <path d="M 20 100 A 80 80 0 0 1 73 33" stroke="#22c55e" strokeWidth="14" fill="none" />
        <path d="M 73 33 A 80 80 0 0 1 127 33" stroke="#f59e0b" strokeWidth="14" fill="none" />
        <path d="M 127 33 A 80 80 0 0 1 180 100" stroke="#ef4444" strokeWidth="14" fill="none" />
        {/* Needle at Low Risk position */}
        <line x1="100" y1="100" x2="55" y2="55" stroke="#0B0B0B" strokeWidth="3" strokeLinecap="round" />
        <circle cx="100" cy="100" r="6" fill="#0B0B0B" />
      </svg>
      <div className="text-center mt-1">
        <div className="text-[9px] uppercase tracking-widest font-bold text-text-mut">
          Compliance Risk
        </div>
        <div className="font-display font-bold text-text-main text-base">Low</div>
      </div>
    </div>
  )
}

function LegalComplianceMock() {
  const days = Array.from({ length: 28 }, (_, i) => i + 1)
  const highlightDays = [4, 12, 19, 24]

  return (
    <Frame url="talentos.io/influencer/legal">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-[10px] uppercase tracking-widest font-bold text-accent-primary mb-0.5">
            Compliance Dashboard
          </div>
          <div className="font-display font-bold text-text-main text-base">
            3 pending approvals · 0 open incidents
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        {/* Gauge */}
        <div className="border border-text-main/10 p-3">
          <ComplianceGauge />
        </div>

        {/* Calendar */}
        <div className="border border-text-main/10 p-3">
          <div className="text-[9px] uppercase tracking-widest font-bold text-text-mut mb-2">
            Calendar · Next 30 days
          </div>
          <div className="grid grid-cols-7 gap-1">
            {days.slice(0, 28).map((d) => {
              const highlight = highlightDays.includes(d)
              return (
                <div
                  key={d}
                  className={`aspect-square flex items-center justify-center text-[9px] font-bold ${
                    highlight
                      ? 'bg-accent-primary text-white'
                      : 'bg-bg-base text-text-mut'
                  }`}
                >
                  {d}
                </div>
              )
            })}
          </div>
          <div className="text-[9px] text-text-mut mt-2 flex items-center gap-1.5">
            <div className="w-2 h-2 bg-accent-primary" /> Expiry / filing dates
          </div>
        </div>
      </div>

      {/* Approval list */}
      <div className="border border-text-main/10 p-3">
        <div className="text-[10px] uppercase tracking-widest font-bold text-accent-primary mb-2">
          Pending Approvals
        </div>
        <div className="space-y-1.5">
          {[
            { sev: '#ef4444', label: 'Lakmé contract — exclusivity 90d (baseline 14d)', tag: 'High' },
            { sev: '#f59e0b', label: 'Boat T4-B — payment net 45d', tag: 'Med' },
            { sev: '#22c55e', label: 'Mamaearth Whitelisting addendum', tag: 'Low' },
          ].map((a, i) => (
            <div key={i} className="flex items-center gap-2 text-[11px] py-1">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: a.sev }} />
              <span className="text-text-main flex-1 truncate">{a.label}</span>
              <span
                className="px-1.5 py-0.5 text-white text-[8px] uppercase tracking-widest font-bold"
                style={{ background: a.sev }}
              >
                {a.tag}
              </span>
              <button className="text-[9px] uppercase tracking-widest font-bold text-accent-primary">
                Approve
              </button>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  )
}

/* ─────────────────────────────────────────────────────────── 7. CREATOR WALLET (Mobile) */

function CreatorWalletMock() {
  return (
    <Frame url="talentos.io/influencer/creator/wallet">
      <div className="flex justify-center">
        {/* Mobile frame */}
        <div className="w-[260px] border-[6px] border-text-main rounded-[28px] overflow-hidden bg-bg-base">
          {/* Notch */}
          <div className="h-5 bg-text-main flex items-center justify-center">
            <div className="w-12 h-1 bg-text-main/40 rounded-full" />
          </div>

          {/* Content */}
          <div className="p-4 space-y-4">
            {/* Header */}
            <div>
              <div className="text-[9px] uppercase tracking-widest font-bold text-text-mut mb-0.5">
                Available Balance
              </div>
              <div className="font-display font-bold text-accent-primary text-2xl leading-none">
                ₹1,24,500
              </div>
              <div className="text-[10px] text-text-mut mt-1">
                TDS withheld: ₹13,800
              </div>
            </div>

            {/* Transactions */}
            <div className="space-y-1.5">
              <div className="text-[9px] uppercase tracking-widest font-bold text-text-mut">
                Recent
              </div>
              {[
                { brand: 'Lakmé', amt: '+₹42,000', kind: 'paid', date: '12 Mar' },
                { brand: 'Boat', amt: '+₹28,500', kind: 'paid', date: '08 Mar' },
                { brand: 'Mamaearth', amt: '+₹18,200', kind: 'pending', date: '04 Mar' },
              ].map((t) => (
                <div key={t.brand} className="flex items-center justify-between py-1.5 border-b border-text-main/5">
                  <div>
                    <div className="text-[11px] font-bold text-text-main">{t.brand}</div>
                    <div className="text-[9px] text-text-mut">{t.date}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] font-bold text-text-main">{t.amt}</div>
                    <div
                      className={`text-[8px] uppercase tracking-widest font-bold ${
                        t.kind === 'paid' ? 'text-[#22c55e]' : 'text-[#f59e0b]'
                      }`}
                    >
                      {t.kind === 'paid' ? '✓ Paid' : 'Pending'}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* AI Studio tiles */}
            <div>
              <div className="text-[9px] uppercase tracking-widest font-bold text-text-mut mb-1.5 flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 text-accent-primary" />
                AI Studio
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                {[
                  { icon: Wand2, label: 'Bio' },
                  { icon: ImageIcon, label: 'Kit' },
                  { icon: Mic, label: 'Tape' },
                  { icon: TrendingUp, label: 'Growth' },
                ].map((t) => {
                  const Icon = t.icon
                  return (
                    <div key={t.label} className="aspect-square bg-text-main text-white flex flex-col items-center justify-center gap-1">
                      <Icon className="w-3 h-3" />
                      <span className="text-[8px] uppercase tracking-widest font-bold">{t.label}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Frame>
  )
}

/* ─────────────────────────────────────────────────────────── 8. CLIENT REVIEW */

function ClientReviewMock() {
  return (
    <Frame url="talentos.io/client/lkm_a7b3f2…">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-[10px] uppercase tracking-widest font-bold text-accent-primary mb-0.5">
            <Eye className="w-3 h-3 inline mr-1" /> Token Access · No Login
          </div>
          <div className="font-display font-bold text-text-main text-base">
            Lakmé Festive · 6 deliverables to review
          </div>
        </div>
        <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-bg-base text-text-mut text-[9px] uppercase tracking-widest font-bold">
          Views · 14
        </div>
      </div>

      <div className="grid grid-cols-[1.4fr_1fr] gap-3 mb-4">
        {/* Video preview */}
        <div className="relative bg-text-main aspect-video flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center">
            <Play className="w-5 h-5 text-white ml-0.5" />
          </div>
          <div className="absolute top-2 left-2 px-2 py-0.5 bg-accent-primary text-white text-[9px] uppercase tracking-widest font-bold">
            Reel · 00:24
          </div>
          <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/60 text-white text-[9px] font-mono">
            v3
          </div>
        </div>

        {/* Comment thread */}
        <div className="space-y-2">
          <div className="text-[9px] uppercase tracking-widest font-bold text-text-mut">
            Comments · 3
          </div>
          {[
            { at: '0:04', text: 'Logo placement — top-right per guideline?', who: 'Brand' },
            { at: '0:12', text: 'Disclaimer audio missing here', who: 'Brand' },
            { at: '0:21', text: 'Color grade — slightly cooler in final?', who: 'Brand' },
          ].map((c, i) => (
            <div key={i} className="border-l-2 border-accent-primary pl-2">
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="text-[9px] font-mono font-bold text-accent-primary">{c.at}</span>
                <span className="text-[9px] uppercase tracking-widest font-bold text-text-mut">
                  {c.who}
                </span>
              </div>
              <div className="text-[10px] text-text-main leading-snug">{c.text}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Deliverable strip */}
      <div className="flex items-center gap-1.5 mb-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className={`flex-1 aspect-video flex items-center justify-center text-[9px] font-bold uppercase tracking-widest ${
              i === 3
                ? 'bg-accent-primary text-white'
                : i < 3
                ? 'bg-[#22c55e] text-white'
                : 'bg-bg-base text-text-mut border border-text-main/10'
            }`}
          >
            {i < 3 ? '✓' : i === 3 ? 'Now' : i}
          </div>
        ))}
      </div>

      {/* Action bar */}
      <div className="flex gap-2">
        <button className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 bg-text-main text-white text-[10px] uppercase tracking-widest font-bold">
          <ThumbsUp className="w-3 h-3" /> Approve
        </button>
        <button className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 border border-text-main text-text-main text-[10px] uppercase tracking-widest font-bold">
          <MessageSquare className="w-3 h-3" /> Request Revision
        </button>
      </div>
    </Frame>
  )
}

/* ─────────────────────────────────────────────────────────── EXPORT */

export function RoleMockVisual({ type }: { type: MockType }) {
  switch (type) {
    case 'admin-dashboard':
      return <AdminDashboardMock />
    case 'deal-room':
      return <DealRoomMock />
    case 'roster-grid':
      return <RosterGridMock />
    case 'review-queue':
      return <ReviewQueueMock />
    case 'cash-flow':
      return <CashFlowMock />
    case 'legal-compliance':
      return <LegalComplianceMock />
    case 'creator-wallet':
      return <CreatorWalletMock />
    case 'client-review':
      return <ClientReviewMock />
  }
}
