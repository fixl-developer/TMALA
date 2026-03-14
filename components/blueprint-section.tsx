"use client"

import { useState } from "react"
import { useAuthModal } from "@/components/auth-modal"
import {
  Users,
  Search,
  Trophy,
  Megaphone,
  GraduationCap,
  Film,
  CalendarCheck,
  Globe2,
  ShoppingBag,
  Building2,
  ArrowRight,
  Zap,
  Check,
} from "lucide-react"

const blueprints = [
  {
    id: "B1",
    name: "Roster + Booking",
    tagline: "Manage rosters, handle bookings, and automate commission splits for modeling agencies, talent agencies, and speaker bureaus — all from one dashboard.",
    workflow: "Inquiry → Hold → Contract → Escrow → Delivery → Payout",
    icon: Users,
    color: "bg-violet-500",
    textColor: "text-violet-600",
    lightBg: "bg-violet-50",
    border: "border-violet-200",
    ring: "ring-violet-500/20",
    gradient: "from-violet-500 to-purple-600",
    agencyTypes: ["Modeling Agency", "Talent Agency", "Speaker Bureau", "Sports Agency"],
    highlights: ["Option holds & conflicts", "Commission auto-splits", "Portfolio + ID verification"],
  },
  {
    id: "B2",
    name: "Casting Pipeline",
    tagline: "Streamline casting calls, manage submissions, and shortlist talent with AI-powered matching — built for casting agencies and production houses.",
    workflow: "Casting Call → Submissions → Shortlist → Audition → Offer → Booking",
    icon: Search,
    color: "bg-sky-500",
    textColor: "text-sky-600",
    lightBg: "bg-sky-50",
    border: "border-sky-200",
    ring: "ring-sky-500/20",
    gradient: "from-sky-500 to-blue-600",
    agencyTypes: ["Casting Agency", "Production House", "Creative Recruitment"],
    highlights: ["AI-powered talent matching", "NDA-gated viewing rooms", "Funnel analytics"],
  },
  {
    id: "B3",
    name: "Season / Competition",
    tagline: "Run end-to-end pageants and competitions — from registration and scoring rounds to results publishing — with integrity-locked workflows for organizers.",
    workflow: "Registration → Rounds → Scoring → Results Freeze → Publish",
    icon: Trophy,
    color: "bg-amber-500",
    textColor: "text-amber-600",
    lightBg: "bg-amber-50",
    border: "border-amber-200",
    ring: "ring-amber-500/20",
    gradient: "from-amber-500 to-orange-600",
    agencyTypes: ["Pageant Organizer", "Events Promoter"],
    highlights: ["Integrity-locked scoring", "Dual approval publish", "Sponsor packages"],
  },
  {
    id: "B4",
    name: "Brand Deals + Deliverables",
    tagline: "Negotiate brand deals, track deliverables, and automate payouts with built-in escrow — designed for influencer agencies, brands, and ad agencies.",
    workflow: "Brief → Negotiate → Contract → Deliverables → Approval → Payout",
    icon: Megaphone,
    color: "bg-emerald-500",
    textColor: "text-emerald-600",
    lightBg: "bg-emerald-50",
    border: "border-emerald-200",
    ring: "ring-emerald-500/20",
    gradient: "from-emerald-500 to-green-600",
    agencyTypes: ["Influencer Agency", "Brand Tenant", "Media Buying", "Social & Growth"],
    highlights: ["Deal rooms with escrow", "Content approval cycles", "ROI reporting"],
  },
  {
    id: "B5",
    name: "Course / Cohort",
    tagline: "Enroll students, manage training cohorts, track assessments, and issue certifications — purpose-built for academies and grooming providers.",
    workflow: "Enrollment → Training → Assessment → Certification",
    icon: GraduationCap,
    color: "bg-indigo-500",
    textColor: "text-indigo-600",
    lightBg: "bg-indigo-50",
    border: "border-indigo-200",
    ring: "ring-indigo-500/20",
    gradient: "from-indigo-500 to-violet-600",
    agencyTypes: ["Acting Academy", "Modeling Academy", "Grooming Agency"],
    highlights: ["Readiness score", "Trainer revenue share", "Certificate issuance"],
  },
  {
    id: "B6",
    name: "Project + Assets",
    tagline: "Manage briefs, production milestones, and asset reviews with client approval portals — ideal for photography studios, UGC creators, and production agencies.",
    workflow: "Brief → Production → Review → Deliver → Payout",
    icon: Film,
    color: "bg-rose-500",
    textColor: "text-rose-600",
    lightBg: "bg-rose-50",
    border: "border-rose-200",
    ring: "ring-rose-500/20",
    gradient: "from-rose-500 to-pink-600",
    agencyTypes: ["Photography Agency", "UGC Production", "Production Studio"],
    highlights: ["Asset review cycles", "Milestone escrow", "Client approval portal"],
  },
  {
    id: "B7",
    name: "Shift / Staffing",
    tagline: "Assign shifts, track check-ins, detect no-shows, and process payouts automatically — built for event staffing agencies, hosts, and promoters.",
    workflow: "Job → Assign → Check-in → Complete → Payout",
    icon: CalendarCheck,
    color: "bg-orange-500",
    textColor: "text-orange-600",
    lightBg: "bg-orange-50",
    border: "border-orange-200",
    ring: "ring-orange-500/20",
    gradient: "from-orange-500 to-amber-600",
    agencyTypes: ["Event Staffing Agency"],
    highlights: ["No-show detection", "Timesheet approvals", "Payout holds"],
  },
  {
    id: "B8",
    name: "Community + Monetization",
    tagline: "Build and monetize talent communities with membership tiers, engagement tools, and rewards — perfect for talent networks and community operators.",
    workflow: "Join → Engage → Moderate → Reward",
    icon: Globe2,
    color: "bg-teal-500",
    textColor: "text-teal-600",
    lightBg: "bg-teal-50",
    border: "border-teal-200",
    ring: "ring-teal-500/20",
    gradient: "from-teal-500 to-cyan-600",
    agencyTypes: ["Talent Network", "Community Operator"],
    highlights: ["Membership tiers", "Moderation engine", "Rewards & loyalty"],
  },
  {
    id: "B9",
    name: "Marketplace / Aggregator",
    tagline: "Onboard vendors, manage listings, and handle bookings with built-in escrow and dispute resolution — designed for service marketplaces and aggregators.",
    workflow: "Listing → Request → Booking → Escrow → Settlement",
    icon: ShoppingBag,
    color: "bg-cyan-500",
    textColor: "text-cyan-600",
    lightBg: "bg-cyan-50",
    border: "border-cyan-200",
    ring: "ring-cyan-500/20",
    gradient: "from-cyan-500 to-sky-600",
    agencyTypes: ["Marketplace Operator"],
    highlights: ["Vendor onboarding", "Dispute safety layer", "Ratings moderation"],
  },
  {
    id: "B10",
    name: "Holding / Group",
    tagline: "Manage multiple agencies under one roof with shared billing, consolidated analytics, and cross-tenant governance — built for holding companies and multi-agency groups.",
    workflow: "Parent Tenant → Sub-tenant Management → Shared Services",
    icon: Building2,
    color: "bg-slate-600",
    textColor: "text-slate-600",
    lightBg: "bg-slate-50",
    border: "border-slate-200",
    ring: "ring-slate-500/20",
    gradient: "from-slate-500 to-gray-700",
    agencyTypes: ["Holding Company"],
    highlights: ["Shared billing", "Consolidated analytics", "Cross-tenant governance"],
  },
]

export function BlueprintSection() {
  const { openAuth } = useAuthModal()
  const [active, setActive] = useState("B1")
  const activeBlueprint = blueprints.find(b => b.id === active)!

  return (
    <section id="blueprints" className="relative py-28 bg-gray-50 overflow-hidden">
      {/* Subtle grid bg */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50 border border-violet-200 mb-4">
            <Zap className="h-3.5 w-3.5 text-violet-600" />
            <span className="font-bebas text-xs uppercase tracking-[0.3em] text-violet-600">Blueprint System</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-4">
            One platform,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
              10 Blueprints
            </span>
          </h2>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto leading-relaxed">
            Every agency type gets a pre-configured workspace — roles, workflows, dashboards, permissions, and automations — ready from day one.
          </p>
        </div>

        {/* Two-column layout: list + detail — fixed height, no page scroll needed */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left: Blueprint selector */}
          <div className="lg:w-[370px] shrink-0">
            {/* Mobile: horizontal scroll strip */}
            <div className="flex lg:hidden gap-2 overflow-x-auto pb-3 scrollbar-hide -mx-1 px-1">
              {blueprints.map((bp) => {
                const Icon = bp.icon
                const isActive = active === bp.id
                return (
                  <button
                    key={bp.id}
                    onClick={() => setActive(bp.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl whitespace-nowrap shrink-0 text-left transition-all duration-200 ${
                      isActive
                        ? `${bp.lightBg} ring-2 ${bp.ring}`
                        : "bg-white border border-gray-200"
                    }`}
                  >
                    <div className={`flex items-center justify-center w-7 h-7 rounded-lg shrink-0 ${isActive ? bp.color : "bg-gray-100"}`}>
                      <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-gray-500"}`} strokeWidth={2.5} />
                    </div>
                    <span className={`text-xs font-semibold ${isActive ? "text-gray-900" : "text-gray-600"}`}>{bp.name}</span>
                  </button>
                )
              })}
            </div>

            {/* Desktop: vertical scrollable list */}
            <div className="hidden lg:block relative rounded-2xl bg-white border border-gray-200 overflow-hidden">
              <div className="py-2 px-2 space-y-1">
                {blueprints.map((bp) => {
                  const Icon = bp.icon
                  const isActive = active === bp.id
                  return (
                    <button
                      key={bp.id}
                      onClick={() => setActive(bp.id)}
                      className={`group relative w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-200 ${
                        isActive
                          ? `${bp.lightBg} ring-2 ${bp.ring} shadow-sm`
                          : "hover:bg-gray-50"
                      }`}
                    >
                      {/* Active indicator bar */}
                      {isActive && (
                        <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-7 rounded-r-full bg-gradient-to-b ${bp.gradient}`} />
                      )}

                      <div className={`flex items-center justify-center w-8 h-8 rounded-lg shrink-0 transition-all duration-200 ${
                        isActive ? bp.color : "bg-gray-100 group-hover:bg-gray-200"
                      }`}>
                        <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-gray-500"}`} strokeWidth={2.5} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5">
                          <span className={`text-xs font-bold tracking-wider ${isActive ? bp.textColor : "text-gray-400"}`}>
                            {bp.id}
                          </span>
                          <h3 className={`text-[13px] font-semibold truncate ${isActive ? "text-gray-900" : "text-gray-700"}`}>
                            {bp.name}
                          </h3>
                        </div>
                        <p className="text-xs text-gray-600 truncate">
                          {bp.tagline}
                        </p>
                      </div>

                      {isActive && (
                        <ArrowRight className={`w-3.5 h-3.5 shrink-0 ${bp.textColor}`} />
                      )}
                    </button>
                  )
                })}
              </div>

            </div>
          </div>

          {/* Right: Detail panel — fills remaining space, matches left panel height */}
          <div className="flex-1 min-w-0 lg:flex lg:flex-col">
            <div
              key={activeBlueprint.id}
              className={`rounded-2xl border-2 ${activeBlueprint.border} bg-white overflow-hidden transition-all duration-300 lg:flex lg:flex-col lg:flex-1`}
              style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
            >
              {/* Detail header with gradient */}
              <div className={`relative px-6 pt-6 pb-5 bg-gradient-to-br ${activeBlueprint.gradient} overflow-hidden`}>
                {/* Decorative circles */}
                <div className="absolute -right-6 -top-6 w-32 h-32 rounded-full bg-white/10" />
                <div className="absolute -right-2 bottom-0 w-20 h-20 rounded-full bg-white/5" />

                <div className="relative flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm">
                    <activeBlueprint.icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-white/70">{activeBlueprint.id}</div>
                    <h3 className="text-2xl font-bold text-white">{activeBlueprint.name}</h3>
                  </div>
                </div>
                <p className="relative text-sm text-white/80 mt-2">{activeBlueprint.tagline}</p>
              </div>

              {/* Scrollable content area — no visible scrollbar */}
              <div className="p-6 pb-3 space-y-5 lg:flex-1 lg:overflow-y-auto scrollbar-none">
                {/* Workflow steps */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-600 mb-3">Default Workflow</p>
                  <div className="flex flex-wrap items-center gap-2">
                    {activeBlueprint.workflow.split(" → ").map((step, i, arr) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className={`text-xs font-semibold px-3 py-1.5 rounded-lg ${activeBlueprint.lightBg} border ${activeBlueprint.border} ${activeBlueprint.textColor}`}>
                          {step}
                        </span>
                        {i < arr.length - 1 && (
                          <ArrowRight className="w-3.5 h-3.5 text-gray-300 shrink-0" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Two-column: Capabilities + Agency Types */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Capabilities */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-600 mb-3">Key Capabilities</p>
                    <div className="space-y-2">
                      {activeBlueprint.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2.5">
                          <div className={`flex items-center justify-center w-5 h-5 rounded-full ${activeBlueprint.lightBg}`}>
                            <Check className={`w-3 h-3 ${activeBlueprint.textColor}`} strokeWidth={3} />
                          </div>
                          <span className="text-sm text-gray-700 font-medium">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Agency Types */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-600 mb-3">Agency Types</p>
                    <div className="space-y-2">
                      {activeBlueprint.agencyTypes.map((type, i) => (
                        <div key={i} className={`flex items-center gap-2.5 px-3 py-2 rounded-xl ${activeBlueprint.lightBg} border ${activeBlueprint.border}`}>
                          <div className={`w-2 h-2 rounded-full ${activeBlueprint.color}`} />
                          <span className="text-sm text-gray-700 font-medium">{type}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA — pinned to bottom, always visible */}
              <div className="px-6 pb-5 pt-3 shrink-0">
                <button onClick={() => openAuth()} className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r ${activeBlueprint.gradient} hover:opacity-90 transition-all duration-200 shadow-lg`}>
                  Get Started with {activeBlueprint.name}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
