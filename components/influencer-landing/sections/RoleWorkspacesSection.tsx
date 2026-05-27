"use client"

import React from 'react'
import {
  Shield,
  Briefcase,
  Users,
  ClipboardCheck,
  Wallet,
  Scale,
  Sparkles,
  Link2,
} from 'lucide-react'
import { RoleWorkspaceBlock, type RoleWorkspaceData } from './RoleWorkspaceBlock'

const WORKSPACES: RoleWorkspaceData[] = [
  {
    anchor: 'workspace-admin',
    index: 1,
    icon: Shield,
    persona: 'Agency Admin',
    pageCount: '35+ pages built',
    headline: (
      <>
        Your daily operating <span className="italic text-accent-primary">cockpit.</span>
      </>
    ),
    sub: 'One log-in, every signal. From a single dashboard your Agency Admin sees pipeline value, escrow held, AR overdue, retention alerts, expiring contracts, ASCI breaches — sorted by urgency, one-click drillable.',
    features: [
      {
        title: 'Composite signals, not dumb counters',
        body: 'Agency Health Score (A–F grade) computed from utilization, on-time rate, retention, cadence. Compliance Risk Score from incidents, disputed contracts, expiring contracts, open complaints. Live.',
      },
      {
        title: 'Attention Needed, ranked by urgency',
        body: 'Every approval, churn risk, expiring contract, and dispute lands in one urgency-sorted inbox. No more "what did I forget today?"',
      },
      {
        title: 'Bulk operations that respect audit',
        body: 'Bulk-import 200 creators from CSV, bulk-suspend a tier, bulk-issue Form 16As — every action audit-logged with actor + reason code + diff.',
      },
    ],
    mockType: 'admin-dashboard',
  },
  {
    anchor: 'workspace-deals',
    index: 2,
    icon: Briefcase,
    persona: 'Deals Manager',
    pageCount: '13 pages built',
    headline: (
      <>
        Close deals in days, <span className="italic text-accent-primary">not weeks.</span>
      </>
    ),
    sub: 'Brief intake → quote builder → contract draft → e-sign → escrow funded → deliverables briefed. One Deal Room, one timeline, zero email threads.',
    features: [
      {
        title: 'Quote builder with live commission math',
        body: 'Rate card lookup + add-ons + auto C3/C4 commission split + GST + creator net-payout preview, all on one screen. Brand sees the same numbers in the Deal Room.',
      },
      {
        title: 'Deal Room — every signal in one place',
        body: 'Chat, file uploads, brief attachments, deliverable schedule, contract version history, payout status. Brand, creator, and legal each see what they need.',
      },
      {
        title: 'Clause deviation detector',
        body: "Every contract auto-checked against your tenant's clause baseline (paid-social days, exclusivity, payment net days). Non-standard clauses flagged before legal review.",
      },
    ],
    mockType: 'deal-room',
  },
  {
    anchor: 'workspace-creator-mgr',
    index: 3,
    icon: Users,
    persona: 'Creator Manager',
    pageCount: '16 pages built',
    headline: (
      <>
        Retain creators <span className="italic text-accent-primary">before they leave.</span>
      </>
    ),
    sub: "Your Creator Manager sees who's at risk (low campaign volume, declining engagement, slow payouts) and who's ready for a rate raise — with computed reasons and one-click actions.",
    features: [
      {
        title: 'Onboarding that activates roster',
        body: 'Invited → Profile → KYC submitted → KYC verified → Wallet active. Each step ack-ed by the right role. PAN + GSTIN + bank penny-drop verified before first brief.',
      },
      {
        title: 'Retention alerts with reason codes',
        body: '"Vikram has done 0 campaigns in 60d while roster avg is 4 — suggest brief on 2 active campaigns." Computed from real data, not surveys.',
      },
      {
        title: 'Upsell opportunities priced in INR',
        body: '"Priya at 1.2M followers, 6.2% engagement. Your roster median: ₹95/follower. Hers: ₹62. Suggested new rate: ₹95K (+27%)" — exportable as a re-quote template.',
      },
    ],
    mockType: 'roster-grid',
  },
  {
    anchor: 'workspace-reviewer',
    index: 4,
    icon: ClipboardCheck,
    persona: 'Content Reviewer',
    pageCount: '5 pages built',
    headline: (
      <>
        Brand safety,{' '}
        <span className="italic text-accent-primary">checked before it ships.</span>
      </>
    ),
    sub: 'Every draft auto-scanned for prohibited content, missing #ad / #partnered disclosure, and watermark compliance. Reviewers annotate inline. Creators see exactly what to fix.',
    features: [
      {
        title: 'ASCI & FTC disclosure auto-check',
        body: 'Did the post say #ad, #partnered, #sponsored? Flagged before approval. ASCI guideline compliance log per draft.',
      },
      {
        title: 'Brand-safety guardrails per tenant',
        body: 'Banned keyword list, competitor mention during exclusivity window, off-platform brand approach — all catch points configurable per brand and per tenant.',
      },
      {
        title: 'Watermark + frame position checks',
        body: "Was the brand logo in the right corner per brand guideline? Was the disclaimer visible at minute 0:00? Reviewer doesn't squint — system flags.",
      },
    ],
    mockType: 'review-queue',
  },
  {
    anchor: 'workspace-finance',
    index: 5,
    icon: Wallet,
    persona: 'Finance',
    pageCount: '11 pages built',
    headline: (
      <>
        Escrow-backed deals.{' '}
        <span className="italic text-accent-primary">GST/TDS auto-computed.</span>
      </>
    ),
    sub: 'Brand funds the deal upfront. Escrow holds, milestones release. Commission splits and 10% TDS withhold automatically. GSTR-1 CSV at quarter close. Form 16A issued in one click.',
    features: [
      {
        title: 'Universal escrow blueprint engine',
        body: 'One engine handles flat payouts, milestone schedules, multi-creator splits, refund triggers, dispute holds. Razorpay + Stripe Connect integrations.',
      },
      {
        title: 'Indian tax built in',
        body: '10% TDS auto-withheld under Sec 194-O. CGST/SGST split by creator state. IGST for inter-state. HSN 998361 stamped on every invoice. Form 16A issued quarterly.',
      },
      {
        title: 'Reconciliation on demand',
        body: 'Pull fresh Razorpay payout state into the ledger. Discrepancies flagged. Cron-driven nightly run + manual trigger when something looks off.',
      },
    ],
    mockType: 'cash-flow',
  },
  {
    anchor: 'workspace-legal',
    index: 6,
    icon: Scale,
    persona: 'Legal',
    pageCount: '9 pages built',
    headline: (
      <>
        Compliance you can{' '}
        <span className="italic text-accent-primary">actually prove.</span>
      </>
    ),
    sub: "Every contract draft auto-checked against your tenant's clause baseline. ASCI disclosure auto-flagged. Form 16A and GSTR-1 audit-ready. Owner override logged with reason code and timestamp.",
    features: [
      {
        title: 'Clause baseline → deviation detector',
        body: 'Set your tenant standard once (paid-social = 30d, exclusivity = 14d, payment net = 30d). Every new contract compared. High / Med / Low severity deviations flagged before approval.',
      },
      {
        title: 'e-Sign without DocuSign costs',
        body: 'Built-in envelope flow with per-signer status, reminders, expiry. DocuSign integration available if you prefer.',
      },
      {
        title: 'Incident workflow with audit trail',
        body: 'Brand safety, IP violation, contract breach, regulatory complaint. Escalate, resolve, audit. Every resolution has actor + reason + timestamp.',
      },
    ],
    mockType: 'legal-compliance',
  },
  {
    anchor: 'workspace-creator',
    index: 7,
    icon: Sparkles,
    persona: 'Creator',
    pageCount: '17+ pages built',
    headline: (
      <>
        Your creators see <span className="italic text-accent-primary">your brand, not ours.</span>
      </>
    ),
    sub: 'White-label the creator portal with your logo + brand colors (Pro tier+). Mobile-first. Razorpay wallet integrated. International creators get Stripe Connect.',
    features: [
      {
        title: 'One-tap KYC',
        body: 'Aadhaar back-check, PAN verify, bank penny-drop. Creator clears KYC on mobile in under 3 minutes.',
      },
      {
        title: 'Wallet they actually trust',
        body: 'Settlement statement, TDS certificate, GST invoice — downloadable as PDF the moment the deal closes. USD/EUR/GBP via Stripe Connect for international creators.',
      },
      {
        title: 'AI Studio your creators actually use',
        body: '8 tools: bio writer, brand kit, content ideas, post-timing, growth recommendations, media-quality coach, self-tape feedback.',
      },
    ],
    mockType: 'creator-wallet',
  },
  {
    anchor: 'workspace-client',
    index: 8,
    icon: Link2,
    persona: 'Brand Client',
    pageCount: '4 public pages built',
    headline: (
      <>
        Brand approvers <span className="italic text-accent-primary">don't need an account.</span>
      </>
    ),
    sub: 'Share a token URL. Brand approver opens it in any browser, reviews deliverables, leaves inline annotations, marks approved or requests revision. View count tracked. Link can be revoked or password-protected.',
    features: [
      {
        title: 'No signup, no friction',
        body: 'Token-protected URL. Works on mobile. Optional password. Optional expiry. Optional view-count cap.',
      },
      {
        title: 'Inline annotations on draft media',
        body: 'Click any frame at any timestamp, leave a comment. Creator sees the timeline of changes requested. Reviewer sees the full thread.',
      },
      {
        title: 'Read-only campaign reports',
        body: 'Performance per deliverable, audience reached, engagement, ROAS. Exportable. Branded with your tenant logo.',
      },
    ],
    mockType: 'client-review',
  },
]

export function RoleWorkspacesSection() {
  return (
    <>
      {WORKSPACES.map((ws, i) => (
        <RoleWorkspaceBlock
          key={ws.anchor}
          data={ws}
          reverse={i % 2 === 1}
          bg={i % 2 === 0 ? 'beige' : 'white'}
        />
      ))}
    </>
  )
}
