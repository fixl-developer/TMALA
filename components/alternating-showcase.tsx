"use client"

import { useState } from "react"
import Link from "next/link"
import {
  UserCheck,
  Search,
  Trophy,
  Handshake,
  GraduationCap,
  FolderKanban,
  CalendarClock,
  Users,
  Store,
  Building2,
  ArrowRight,
  CheckCircle2,
  Circle,
  Zap,
} from "lucide-react"
import { useAuthModal } from "@/components/auth-modal"

/* ─── Data for all 9 Blueprints ─── */

const blueprints = [
  {
    id: "B1",
    title: "Roster + Booking",
    description:
      "Manage rosters, handle bookings, and automate commission splits for modeling agencies, talent agencies, and speaker bureaus — all from one dashboard.",
    icon: UserCheck,
    accent: "#7c3aed",
    workflow: ["Inquiry", "Hold", "Contract", "Escrow", "Delivery", "Payout"],
    capabilities: [
      "Option holds & conflicts",
      "Commission auto-splits",
      "Portfolio + ID verification",
    ],
    agencyTypes: [
      { name: "Modeling Agency", color: "#7c3aed" },
      { name: "Talent Agency", color: "#7c3aed" },
      { name: "Speaker Bureau", color: "#6366f1" },
      { name: "Sports Agency", color: "#6366f1" },
    ],
  },
  {
    id: "B2",
    title: "Casting Pipeline",
    description:
      "Streamline casting calls, manage submissions, shortlist talent with AI matching, and send selects to clients — all in one pipeline view.",
    icon: Search,
    accent: "#ea580c",
    workflow: ["Brief", "Submit", "Shortlist", "Audition", "Select", "Book"],
    capabilities: [
      "AI talent matching",
      "Self-tape collection",
      "Client approval portal",
    ],
    agencyTypes: [
      { name: "Casting Agency", color: "#ea580c" },
      { name: "Talent Agency", color: "#ea580c" },
      { name: "Production House", color: "#f59e0b" },
      { name: "Ad Agency", color: "#f59e0b" },
    ],
  },
  {
    id: "B3",
    title: "Season / Competition",
    description:
      "Run end-to-end pageants and competitions with judge panels, scoring automation, audience voting, and live result announcements.",
    icon: Trophy,
    accent: "#e11d48",
    workflow: ["Register", "Audition", "Score", "Shortlist", "Finals", "Crown"],
    capabilities: [
      "Multi-round scoring",
      "Judge panel management",
      "Live audience voting",
    ],
    agencyTypes: [
      { name: "Pageant Organization", color: "#e11d48" },
      { name: "Competition Platform", color: "#e11d48" },
      { name: "Event Agency", color: "#ec4899" },
      { name: "Training Academy", color: "#ec4899" },
    ],
  },
  {
    id: "B4",
    title: "Brand Deals + Deliverables",
    description:
      "Negotiate brand deals, track deliverables, manage content approvals, and automate influencer payouts with escrow protection.",
    icon: Handshake,
    accent: "#059669",
    workflow: ["Pitch", "Negotiate", "Contract", "Create", "Approve", "Pay"],
    capabilities: [
      "Deliverable tracking",
      "Content approval workflow",
      "Escrow-backed payments",
    ],
    agencyTypes: [
      { name: "Influencer Agency", color: "#059669" },
      { name: "Brand Partnership", color: "#059669" },
      { name: "UGC Agency", color: "#10b981" },
      { name: "Social Media Agency", color: "#10b981" },
    ],
  },
  {
    id: "B5",
    title: "Course / Cohort",
    description:
      "Enroll students, manage training cohorts, track progress, and issue certificates — built for academies and training programs.",
    icon: GraduationCap,
    accent: "#6366f1",
    workflow: ["Enroll", "Onboard", "Train", "Assess", "Certify", "Alumni"],
    capabilities: [
      "Cohort management",
      "Progress tracking",
      "Certificate generation",
    ],
    agencyTypes: [
      { name: "Training Academy", color: "#6366f1" },
      { name: "Pageant Coaching", color: "#6366f1" },
      { name: "Finishing School", color: "#818cf8" },
      { name: "Dance Academy", color: "#818cf8" },
    ],
  },
  {
    id: "B6",
    title: "Project + Assets",
    description:
      "Manage briefs, production milestones, and digital asset libraries for photography, video production, and creative agencies.",
    icon: FolderKanban,
    accent: "#d97706",
    workflow: ["Brief", "Plan", "Produce", "Review", "Deliver", "Archive"],
    capabilities: [
      "Milestone tracking",
      "Asset library management",
      "Client review portal",
    ],
    agencyTypes: [
      { name: "Production House", color: "#d97706" },
      { name: "Photography Studio", color: "#d97706" },
      { name: "Creative Agency", color: "#f59e0b" },
      { name: "Media Agency", color: "#f59e0b" },
    ],
  },
  {
    id: "B7",
    title: "Shift / Staffing",
    description:
      "Assign shifts, track check-ins, detect no-shows, and manage on-ground staffing for events, activations, and promotions.",
    icon: CalendarClock,
    accent: "#0891b2",
    workflow: ["Request", "Assign", "Check-in", "Monitor", "Check-out", "Pay"],
    capabilities: [
      "Geo-fenced check-ins",
      "No-show detection",
      "Shift swap management",
    ],
    agencyTypes: [
      { name: "Staffing Agency", color: "#0891b2" },
      { name: "Event Agency", color: "#0891b2" },
      { name: "Activation Agency", color: "#06b6d4" },
      { name: "Promo Agency", color: "#06b6d4" },
    ],
  },
  {
    id: "B8",
    title: "Community + Monetization",
    description:
      "Build and monetize talent communities with memberships, exclusive content, events, and fan engagement tools.",
    icon: Users,
    accent: "#9333ea",
    workflow: ["Join", "Engage", "Subscribe", "Access", "Interact", "Renew"],
    capabilities: [
      "Membership tiers",
      "Exclusive content gating",
      "Community analytics",
    ],
    agencyTypes: [
      { name: "Fan Platform", color: "#9333ea" },
      { name: "Creator Network", color: "#9333ea" },
      { name: "Talent Community", color: "#a855f7" },
      { name: "Alumni Network", color: "#a855f7" },
    ],
  },
  {
    id: "B9",
    title: "Marketplace / Aggregator",
    description:
      "Onboard vendors, manage listings, and handle multi-party transactions for talent marketplaces and service aggregators.",
    icon: Store,
    accent: "#475569",
    workflow: ["List", "Discover", "Match", "Book", "Fulfill", "Rate"],
    capabilities: [
      "Multi-vendor onboarding",
      "Search + filter engine",
      "Review & rating system",
    ],
    agencyTypes: [
      { name: "Talent Marketplace", color: "#475569" },
      { name: "Service Aggregator", color: "#475569" },
      { name: "Freelance Platform", color: "#64748b" },
      { name: "Booking Platform", color: "#64748b" },
    ],
  },
  {
    id: "B10",
    title: "Holding / Group",
    description:
      "Manage multiple agencies under one roof with shared billing, consolidated analytics, and cross-tenant governance — built for holding companies and multi-agency groups.",
    icon: Building2,
    accent: "#334155",
    workflow: ["Parent Tenant", "Sub-tenant Management", "Shared Services"],
    capabilities: [
      "Shared billing",
      "Consolidated analytics",
      "Cross-tenant governance",
    ],
    agencyTypes: [
      { name: "Holding Company", color: "#334155" },
    ],
  },
]

/* ─── Main Section — Sidebar + Content ─── */

export function AlternatingShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const { openAuth } = useAuthModal()
  const active = blueprints[activeIndex]
  const ActiveIcon = active.icon

  return (
    <section id="features" className="relative z-10" style={{ background: "#fafafa" }}>
      {/* Sidebar + Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6 lg:gap-8 items-start">

          {/* Left — All items list */}
          <div className="rounded-2xl bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)] p-1 flex flex-col">
            {blueprints.map((item, i) => {
              const Icon = item.icon
              const isActive = i === activeIndex
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(i)}
                  className="group relative flex items-center gap-2 rounded-lg px-2.5 py-[7px] text-left transition-all duration-200"
                  style={{
                    background: isActive ? `${item.accent}10` : "transparent",
                  }}
                >
                  {/* Active indicator bar */}
                  <div
                    className="absolute left-0 top-1 bottom-1 w-[3px] rounded-full transition-all duration-300"
                    style={{
                      background: isActive ? item.accent : "transparent",
                    }}
                  />

                  {/* Icon */}
                  <div
                    className="w-7 h-7 rounded-md flex items-center justify-center shrink-0 transition-all duration-200"
                    style={{
                      background: isActive ? `${item.accent}18` : "#f3f4f6",
                    }}
                  >
                    <Icon
                      className="w-3.5 h-3.5 transition-colors duration-200"
                      style={{ color: isActive ? item.accent : "#9ca3af" }}
                    />
                  </div>

                  {/* Text */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1">
                      <span
                        className="text-[10px] font-bold tracking-wide transition-colors duration-200"
                        style={{ color: isActive ? item.accent : "#b0b0b0" }}
                      >
                        {item.id}
                      </span>
                      <span
                        className="text-[11px] font-bold transition-colors duration-200 leading-none"
                        style={{ color: isActive ? "#111" : "#6b7280" }}
                      >
                        {item.title}
                      </span>
                    </div>
                    <p
                      className="text-[10px] leading-tight mt-px transition-colors duration-200 line-clamp-1"
                      style={{ color: isActive ? "#666" : "#b0b0b0" }}
                    >
                      {item.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <ArrowRight
                    className="w-3 h-3 shrink-0 transition-all duration-200"
                    style={{
                      color: isActive ? item.accent : "transparent",
                      transform: isActive ? "translateX(0)" : "translateX(-6px)",
                      opacity: isActive ? 1 : 0,
                    }}
                  />
                </button>
              )
            })}

            {/* Bottom AI badge */}
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 border-t border-gray-100">
              <Zap className="w-3 h-3 text-amber-500" />
              <span className="text-[10px] text-gray-400 font-medium">AI-powered across all blueprints</span>
            </div>
          </div>

          {/* Right — Active blueprint content */}
          <div className="rounded-2xl overflow-hidden bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)]">

            {/* Header banner */}
            <div
              className="px-8 sm:px-10 pt-8 pb-7 relative overflow-hidden"
              style={{ background: `linear-gradient(135deg, ${active.accent}, ${active.accent}cc)` }}
            >
              {/* Decorative circle */}
              <div
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-10"
                style={{ background: "white" }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center">
                    <ActiveIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white/70 tracking-wide">{active.id}</span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                      {active.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-white/85 leading-relaxed max-w-2xl">
                  {active.description}
                </p>
              </div>
            </div>

            {/* Content body */}
            <div className="px-8 sm:px-10 py-8">

              {/* Default Workflow */}
              <div className="mb-8">
                <h4 className="text-[11px] font-bold tracking-widest uppercase text-gray-400 mb-4">
                  Default Workflow
                </h4>
                <div className="flex flex-wrap items-center gap-2">
                  {active.workflow.map((step, i) => (
                    <div key={step} className="flex items-center gap-2">
                      <span
                        className="px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-colors duration-300"
                        style={{
                          borderColor: `${active.accent}30`,
                          color: active.accent,
                          background: `${active.accent}08`,
                        }}
                      >
                        {step}
                      </span>
                      {i < active.workflow.length - 1 && (
                        <ArrowRight className="w-3 h-3 text-gray-300 shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Capabilities + Agency Types */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Key Capabilities */}
                <div>
                  <h4 className="text-[11px] font-bold tracking-widest uppercase text-gray-400 mb-4">
                    Key Capabilities
                  </h4>
                  <div className="space-y-3">
                    {active.capabilities.map((cap) => (
                      <div key={cap} className="flex items-center gap-2.5">
                        <CheckCircle2
                          className="w-4 h-4 shrink-0"
                          style={{ color: active.accent }}
                        />
                        <span className="text-sm font-medium text-gray-700">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Agency Types */}
                <div>
                  <h4 className="text-[11px] font-bold tracking-widest uppercase text-gray-400 mb-4">
                    Agency Types
                  </h4>
                  <div className="space-y-2">
                    {active.agencyTypes.map((agency) => (
                      <div
                        key={agency.name}
                        className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg border border-gray-100 bg-gray-50/50"
                      >
                        <Circle
                          className="w-2.5 h-2.5 shrink-0 fill-current"
                          style={{ color: agency.color }}
                        />
                        <span className="text-sm font-medium text-gray-700">{agency.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <button
                  onClick={() => openAuth()}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.01]"
                  style={{ background: active.accent }}
                >
                  Get Started with {active.title}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
