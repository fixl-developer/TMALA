"use client"

import Link from "next/link"
import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Users,
  ArrowRight,
  Check,
  ChevronRight,
  Shield,
  Zap,
  BarChart3,
  Globe,
  Sparkles,
  CheckCircle2,
  Lock,
  Eye,
  ShieldCheck,
  KeyRound,
  Fingerprint,
  ScrollText,
} from "lucide-react"
import { getAgencyBySlug, AGENCY_ACCENTS } from "@/lib/agencies-data"

interface AgencyTypePageProps {
  slug: string
}

const heroVideoMap: Record<string, string> = {
  modeling:          "https://assets.mixkit.co/videos/52270/52270-1080.mp4",   // catwalk model
  talent:           "https://assets.mixkit.co/videos/52057/52057-1080.mp4",   // professional talent
  casting:          "https://assets.mixkit.co/videos/42286/42286-1080.mp4",   // audition / casting
  production:       "https://assets.mixkit.co/videos/34477/34477-1080.mp4",   // behind scenes production
  influencer:       "https://assets.mixkit.co/videos/34423/34423-1080.mp4",   // content creator recording
  ugc:              "https://assets.mixkit.co/videos/18151/18151-720.mp4",    // person filming content
  "social-media":   "https://assets.mixkit.co/videos/42210/42210-1080.mp4",   // social media lifestyle
  pageant:          "https://assets.mixkit.co/videos/47777/47777-720.mp4",    // fashion show ramp walk
  "pageant-training": "https://assets.mixkit.co/videos/15716/15716-720.mp4",  // stage training
  academy:          "https://assets.mixkit.co/videos/48165/48165-720.mp4",    // classroom / academy
  speaker:          "https://assets.mixkit.co/videos/4809/4809-1080.mp4",     // public speaking / conference
  sports:           "https://assets.mixkit.co/videos/31497/31497-1080.mp4",   // sports athlete
  events:           "https://assets.mixkit.co/videos/22961/22961-720.mp4",    // event setup
  photography:      "https://assets.mixkit.co/videos/33899/33899-1080.mp4",   // photo studio shoot
  styling:          "https://assets.mixkit.co/videos/52041/52041-1080.mp4",   // fashion styling
  staffing:         "https://assets.mixkit.co/videos/5399/5399-720.mp4",      // office staffing
  recruitment:      "https://assets.mixkit.co/videos/809/809-720.mp4",        // interview / recruitment
  brand:            "https://assets.mixkit.co/videos/52257/52257-1080.mp4",   // brand campaign
  "media-buying":   "https://assets.mixkit.co/videos/32960/32960-720.mp4",     // futuristic infinity corridor
  community:        "https://assets.mixkit.co/videos/40369/40369-1080.mp4",   // community gathering
  marketplace:      "https://assets.mixkit.co/videos/4188/4188-1080.mp4",     // marketplace / commerce
  holding:          "https://assets.mixkit.co/videos/51295/51295-1080.mp4",   // corporate / holding
}

const accentHexMap: Record<string, string> = {
  crimson: "#ef4444",
  amber: "#f59e0b",
  violet: "#8b5cf6",
  cyan: "#06b6d4",
  emerald: "#10b981",
  rose: "#f43f5e",
  indigo: "#6366f1",
  orange: "#f97316",
}

/* ── Card colors for the carousel (cycling gradient palette) ── */
const CARD_COLORS = [
  { bg: "linear-gradient(135deg, #7c3aed, #6d28d9)", light: "#8b5cf6" },
  { bg: "linear-gradient(135deg, #818cf8, #6366f1)", light: "#818cf8" },
  { bg: "linear-gradient(135deg, #6366f1, #4338ca)", light: "#6366f1" },
  { bg: "linear-gradient(135deg, #a78bfa, #7c3aed)", light: "#a78bfa" },
  { bg: "linear-gradient(135deg, #10b981, #059669)", light: "#10b981" },
  { bg: "linear-gradient(135deg, #f43f5e, #e11d48)", light: "#f43f5e" },
  { bg: "linear-gradient(135deg, #0ea5e9, #0284c7)", light: "#0ea5e9" },
  { bg: "linear-gradient(135deg, #f59e0b, #d97706)", light: "#f59e0b" },
]

/* ── Module card features (shown on hover) ── */
const MODULE_FEATURES: Record<string, string[]> = {
  "Talent Roster Orchestration": ["Smart roster management", "Auto-categorization", "Availability tracking", "Portfolio sync"],
  "Executive Booking Pipeline": ["Booking workflow", "Client matching", "Revenue tracking", "Contract generation"],
  "Dynamic Availability Logic": ["Real-time calendars", "Conflict detection", "Auto-scheduling", "Timezone support"],
  "Institutional Usage Rights": ["License management", "Usage tracking", "Rights clearance", "Compliance checks"],
  "Secured Escrow Infra": ["Payment protection", "Multi-currency", "Auto-release", "Dispute handling"],
  "Resolution Engine": ["Conflict resolution", "Mediation tools", "SLA tracking", "Escalation rules"],
  "Intelligent Casting Intake": ["Smart briefs", "Auto-matching", "Requirement parsing", "Brief templates"],
  "Submission Orchestration": ["Batch submissions", "Status tracking", "Auto-follow-up", "Client portals"],
  "Self-Tape Audition Hub": ["Video uploads", "Review rooms", "Feedback tools", "Side-by-side compare"],
  "Callback & Shortlist Logic": ["Shortlist builder", "Rating system", "Comparison views", "Client sharing"],
  "Strategic Deal Management": ["Deal tracking", "Negotiation tools", "Contract templates", "Commission splits"],
  "Automated Payout Engine": ["Auto payouts", "Split payments", "Tax handling", "Invoice generation"],
  "Resolution Protocol": ["Dispute workflow", "Evidence collection", "Mediation tools", "Resolution tracking"],
}

const DEFAULT_FEATURES = ["Included in workspace", "Auto-configured", "Role-based access", "Real-time sync"]

/* ── Role descriptions & permission levels ── */
const ROLE_DESCRIPTIONS: Record<string, { desc: string; level: string }> = {
  "Owner":                    { desc: "Full platform control, billing, tenant settings & compliance config", level: "Full Access" },
  "Admin":                    { desc: "User management, module config, audit logs & policy enforcement", level: "Full Access" },
  "Agent/Booker":             { desc: "Manage bookings, client negotiations, talent availability & contracts", level: "Write" },
  "Agent":                    { desc: "Deal flow, client submissions, casting coordination & payouts", level: "Write" },
  "Talent Manager":           { desc: "Roster oversight, scheduling, performance tracking & rate cards", level: "Write" },
  "Talent":                   { desc: "Profile management, availability, self-tape uploads & portfolio", level: "Limited" },
  "Finance":                  { desc: "Ledger access, payout approvals, invoicing & reconciliation", level: "Write" },
  "Legal":                    { desc: "Contract templates, clause library, compliance & e-signature oversight", level: "Write" },
  "Moderator (if community)": { desc: "Content review, community policy enforcement & moderation logs", level: "Moderate" },
  "Moderator":                { desc: "Content review, community policy enforcement & moderation logs", level: "Moderate" },
  "Casting Director":         { desc: "Brief creation, talent search, shortlisting & final selection", level: "Full Access" },
  "Casting Associate":        { desc: "Submission review, scheduling, talent communication & logistics", level: "Write" },
  "Casting Coordinator":      { desc: "Submission review, scheduling, talent communication & logistics", level: "Write" },
  "Coordinator":              { desc: "Logistics, scheduling, communication & task management", level: "Write" },
  "Client Viewer":            { desc: "View-only access to shortlists, portfolios & project status", level: "Read Only" },
  "Client/Stakeholder Viewer":{ desc: "View-only access to project status, assets & milestones", level: "Read Only" },
  "Producer":                 { desc: "Project oversight, budget control, vendor management & approvals", level: "Full Access" },
  "PM":                       { desc: "Timeline management, task tracking, resource allocation & reporting", level: "Write" },
  "Casting Lead":             { desc: "Lead casting operations, talent selection & callback management", level: "Write" },
  "Campaign Manager":         { desc: "Campaign creation, influencer matching, deliverable tracking & ROI", level: "Write" },
  "Brand Partner":            { desc: "Campaign briefs, content approvals & performance dashboards", level: "Limited" },
  "Creator":                  { desc: "Media kit management, content delivery & earnings tracking", level: "Limited" },
  "Content Reviewer":         { desc: "UGC review, quality checks, approval workflows & compliance", level: "Moderate" },
  "Director":                 { desc: "Full event/pageant oversight, scoring approval & result publishing", level: "Full Access" },
  "Judge":                    { desc: "Score submission, evaluation criteria & blind scoring access", level: "Limited" },
  "Sponsor":                  { desc: "Sponsorship dashboard, brand placement tracking & ROI reports", level: "Read Only" },
  "Head Coach":               { desc: "Training programs, athlete management & performance analytics", level: "Full Access" },
  "Coach/Trainer":            { desc: "Session management, progress tracking & athlete communication", level: "Write" },
  "Athlete":                  { desc: "Profile, training schedule, performance data & availability", level: "Limited" },
  "Scout":                    { desc: "Talent discovery, evaluation notes & recommendation submissions", level: "Write" },
  "Instructor":               { desc: "Course management, student progress, assessments & certifications", level: "Write" },
  "Student":                  { desc: "Course access, progress tracking & certification downloads", level: "Limited" },
  "Venue Manager":            { desc: "Venue operations, vendor coordination & event logistics", level: "Write" },
  "Vendor":                   { desc: "Service delivery, invoicing & event coordination", level: "Limited" },
  "Photographer":             { desc: "Shoot management, asset delivery & client collaboration", level: "Write" },
  "Stylist":                  { desc: "Look management, wardrobe coordination & client communication", level: "Write" },
  "Recruiter":                { desc: "Candidate sourcing, pipeline management & placement tracking", level: "Write" },
  "Hiring Manager":           { desc: "Requirement briefs, candidate approvals & offer management", level: "Write" },
  "Candidate":                { desc: "Profile management, application tracking & document uploads", level: "Limited" },
  "Strategist":               { desc: "Campaign strategy, audience analysis & performance optimization", level: "Write" },
  "Media Buyer":              { desc: "Budget allocation, ad placement & ROI reporting", level: "Write" },
  "Brand Manager":            { desc: "Brand guidelines, asset management & campaign oversight", level: "Write" },
  "Community Manager":        { desc: "Community engagement, content curation & member management", level: "Write" },
  "Member":                   { desc: "Community access, content interaction & profile management", level: "Limited" },
  "Seller":                   { desc: "Listing management, order fulfillment & earnings tracking", level: "Write" },
  "Buyer":                    { desc: "Browse, purchase, reviews & order tracking", level: "Limited" },
  "Portfolio Manager":        { desc: "Entity oversight, performance monitoring & strategic planning", level: "Full Access" },
  "Entity Admin":             { desc: "Entity-level administration, user management & reporting", level: "Write" },
  "Compliance Officer":       { desc: "Policy enforcement, audit reviews & regulatory reporting", level: "Write" },
}

const ROLE_LEVEL_COLORS: Record<string, string> = {
  "Full Access": "#7c3aed",
  "Write": "#0ea5e9",
  "Read Only": "#22c55e",
  "Limited": "#f59e0b",
  "Moderate": "#6366f1",
}

/* ── Role-specific dashboard mock data ── */
const ROLE_MODULES: Record<string, { modules: string[]; actions: string[]; restrictions: string[] }> = {
  "Full Access": {
    modules: ["Talent Roster", "Booking Pipeline", "Contracts & E-Sign", "Finance & Ledger", "Audit Logs", "User Management", "Analytics", "Compliance Config"],
    actions: ["Create & manage users", "Approve payouts", "Configure modules", "View audit trails", "Manage billing", "Set policies"],
    restrictions: ["None — full administrative control"],
  },
  "Write": {
    modules: ["Talent Roster", "Booking Pipeline", "Contracts", "Scheduling", "Reports", "Communication"],
    actions: ["Create bookings", "Edit profiles", "Submit invoices", "Manage schedules", "Send notifications"],
    restrictions: ["Cannot manage users", "Cannot access billing", "Cannot modify policies"],
  },
  "Read Only": {
    modules: ["Talent Profiles", "Shortlists", "Project Status", "Portfolio Gallery"],
    actions: ["View portfolios", "Download reports", "Browse shortlists", "Track project status"],
    restrictions: ["Cannot edit any data", "Cannot create bookings", "Cannot access finance"],
  },
  "Limited": {
    modules: ["My Profile", "My Schedule", "My Portfolio", "My Earnings"],
    actions: ["Update own profile", "Upload portfolio", "Set availability", "View earnings"],
    restrictions: ["Cannot view other profiles", "Cannot access admin panels", "Cannot modify settings"],
  },
  "Moderate": {
    modules: ["Content Queue", "Reports", "Community Feed", "Moderation Logs", "User Flags"],
    actions: ["Review content", "Flag violations", "Issue warnings", "Escalate reports", "Manage takedowns"],
    restrictions: ["Cannot access finance", "Cannot manage roles", "Cannot modify platform config"],
  },
}

/* ── Security features for the dashboard ── */
const SECURITY_FEATURES = [
  { icon: KeyRound, label: "RBAC + ABAC Hybrid", desc: "Attribute-based policies layered on roles" },
  { icon: Fingerprint, label: "MFA Enforced", desc: "Multi-factor for privileged actions" },
  { icon: ScrollText, label: "Audit Trail", desc: "Immutable, append-only action logs" },
  { icon: ShieldCheck, label: "Maker-Checker", desc: "Dual-approval for high-risk ops" },
  { icon: Lock, label: "Tenant Isolation", desc: "Schema-level + AES-256 encryption" },
  { icon: Eye, label: "Zero Trust", desc: "Every request authenticated & logged" },
]

/* ── Interactive Team Structure Section ── */
function TeamStructureSection({ roles, agencyName, accentHex }: { roles: string[]; agencyName: string; accentHex: string }) {
  const [selectedIdx, setSelectedIdx] = useState(0)
  const selectedRole = roles[selectedIdx]
  const roleInfo = ROLE_DESCRIPTIONS[selectedRole]
  const levelColor = roleInfo ? (ROLE_LEVEL_COLORS[roleInfo.level] || accentHex) : accentHex
  const dashData = roleInfo ? (ROLE_MODULES[roleInfo.level] || ROLE_MODULES["Limited"]) : ROLE_MODULES["Limited"]

  return (
    <section className="relative py-20 lg:py-28" style={{ background: "#fff" }} data-testid="section-team-structure" aria-label="Team Structure and Access Control">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <p
            className="text-[10px] font-bold uppercase tracking-[0.4em] mb-3"
            style={{ color: accentHex }}
          >
            Team Structure & Access Control
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#111" }}>
            Clear roles, total accountability.
          </h2>
          <p className="text-[15px] leading-relaxed" style={{ color: "#1a1a1a" }}>
            Every {agencyName.toLowerCase()} operates with pre-configured roles built on enterprise-grade security.
            Select a role to see exactly what they can access.
          </p>
        </div>

        {/* Main interactive area */}
        <div className="grid lg:grid-cols-[320px_1fr] gap-6 lg:gap-8">

          {/* ── Left: Role selector ── */}
          <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0" style={{ scrollbarWidth: "none" }}>
            {roles.map((role, i) => {
              const info = ROLE_DESCRIPTIONS[role]
              const isActive = i === selectedIdx
              const lc = info ? (ROLE_LEVEL_COLORS[info.level] || accentHex) : accentHex
              return (
                <button
                  key={role}
                  onClick={() => setSelectedIdx(i)}
                  data-testid={`btn-role-${role.toLowerCase().replace(/[\s\/()]+/g, "-")}`}
                  aria-label={`Select role ${role}`}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-left transition-all duration-200 shrink-0 w-full min-w-[200px] lg:min-w-0"
                  style={{
                    background: isActive ? accentHex + "08" : "transparent",
                    border: isActive ? `1.5px solid ${accentHex}30` : "1.5px solid transparent",
                    boxShadow: isActive ? `0 4px 20px ${accentHex}08` : "none",
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200"
                    style={{ background: isActive ? accentHex + "18" : "#f3f4f6" }}
                  >
                    <Users className="w-3.5 h-3.5" style={{ color: isActive ? accentHex : "#555" }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span
                      className="text-[13px] font-semibold block truncate transition-colors duration-200"
                      style={{ color: isActive ? "#111" : "#333" }}
                    >
                      {role}
                    </span>
                    {info && (
                      <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: isActive ? lc : "#666" }}>
                        {info.level}
                      </span>
                    )}
                  </div>
                  {isActive && (
                    <div className="w-1.5 h-8 rounded-full shrink-0" style={{ background: accentHex }} />
                  )}
                </button>
              )
            })}
          </div>

          {/* ── Right: Dashboard mockup ── */}
          <div
            className="rounded-2xl overflow-hidden transition-all duration-300"
            style={{ background: "#fafafa", border: "1px solid #eee" }}
          >
            {/* Dashboard header bar */}
            <div className="flex items-center justify-between px-5 sm:px-6 py-4" style={{ borderBottom: "1px solid #eee" }}>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: accentHex + "12" }}>
                  <Users className="w-4 h-4" style={{ color: accentHex }} />
                </div>
                <div>
                  <h4 className="text-sm font-bold" style={{ color: "#111" }}>{selectedRole}</h4>
                  {roleInfo && (
                    <p className="text-[11px]" style={{ color: "#333" }}>{roleInfo.desc}</p>
                  )}
                </div>
              </div>
              {roleInfo && (
                <span
                  className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full hidden sm:inline-block"
                  style={{ background: levelColor + "12", color: levelColor }}
                >
                  {roleInfo.level}
                </span>
              )}
            </div>

            {/* Dashboard body */}
            <div className="p-5 sm:p-6 space-y-5">

              {/* Accessible modules */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 rounded flex items-center justify-center" style={{ background: "#22c55e14" }}>
                    <Check className="w-3 h-3" style={{ color: "#22c55e" }} />
                  </div>
                  <span className="text-[12px] font-bold uppercase tracking-wider" style={{ color: "#1a1a1a" }}>
                    Accessible Modules
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {dashData.modules.map((mod) => (
                    <span
                      key={mod}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-lg"
                      style={{ background: accentHex + "08", color: accentHex, border: `1px solid ${accentHex}15` }}
                    >
                      {mod}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key actions + Restrictions side by side */}
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Key actions */}
                <div className="rounded-xl p-4" style={{ background: "#fff", border: "1px solid #eee" }}>
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="w-3.5 h-3.5" style={{ color: accentHex }} />
                    <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: "#1a1a1a" }}>
                      Key Actions
                    </span>
                  </div>
                  <div className="space-y-2">
                    {dashData.actions.map((action) => (
                      <div key={action} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 shrink-0" style={{ color: "#22c55e" }} />
                        <span className="text-[12px]" style={{ color: "#222" }}>{action}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Restrictions */}
                <div className="rounded-xl p-4" style={{ background: "#fff", border: "1px solid #eee" }}>
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="w-3.5 h-3.5" style={{ color: "#ef4444" }} />
                    <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: "#1a1a1a" }}>
                      Restrictions
                    </span>
                  </div>
                  <div className="space-y-2">
                    {dashData.restrictions.map((r) => (
                      <div key={r} className="flex items-center gap-2">
                        <Lock className="w-3 h-3 shrink-0" style={{ color: "#ef4444" }} />
                        <span className="text-[12px]" style={{ color: "#222" }}>{r}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mock recent activity log */}
              <div className="rounded-xl p-4" style={{ background: "#fff", border: "1px solid #eee" }}>
                <div className="flex items-center gap-2 mb-3">
                  <ScrollText className="w-3.5 h-3.5" style={{ color: accentHex }} />
                  <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: "#1a1a1a" }}>
                    Sample Audit Trail
                  </span>
                </div>
                <div className="space-y-2">
                  {[
                    { time: "2 min ago", action: `${selectedRole} logged in`, status: "success" },
                    { time: "15 min ago", action: `${selectedRole} viewed dashboard`, status: "success" },
                    { time: "1 hr ago", action: `Permission check — ${roleInfo?.level || "Standard"} access verified`, status: "success" },
                  ].map((log, i) => (
                    <div key={i} className="flex items-center justify-between py-1.5" style={{ borderBottom: i < 2 ? "1px solid #f5f5f5" : "none" }}>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#22c55e" }} />
                        <span className="text-[11px]" style={{ color: "#222" }}>{log.action}</span>
                      </div>
                      <span className="text-[10px]" style={{ color: "#222" }}>{log.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security features row */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {SECURITY_FEATURES.map((feat) => {
            const FeatIcon = feat.icon
            return (
              <div
                key={feat.label}
                className="rounded-xl p-3.5 text-center transition-all duration-200"
                style={{ background: "#fafafa", border: "1px solid #eee" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = accentHex + "30" }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#eee" }}
              >
                <FeatIcon className="w-4 h-4 mx-auto mb-2" style={{ color: accentHex }} />
                <span className="text-[11px] font-bold block mb-0.5" style={{ color: "#222" }}>{feat.label}</span>
                <span className="text-[10px] leading-tight block" style={{ color: "#333" }}>{feat.desc}</span>
              </div>
            )
          })}
        </div>

        {/* Compliance badges */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {[
            "SOC 2 Ready", "ISO 27001", "OWASP ASVS", "GDPR", "DPDP Act", "PCI-DSS",
          ].map((badge) => (
            <div key={badge} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full" style={{ background: "#f0fdf4", border: "1px solid #bbf7d0" }}>
              <ShieldCheck className="w-3 h-3" style={{ color: "#22c55e" }} />
              <span className="text-[11px] font-semibold" style={{ color: "#166534" }}>{badge}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

function ModuleCarousel({ modules, agencyName, accentHex }: { modules: string[]; agencyName: string; accentHex: string }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
  const animRef = useRef<number>(0)
  const scrollPos = useRef(0)

  // Duplicate modules for infinite scroll
  const cards = [...modules, ...modules, ...modules]

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const speed = 0.6 // px per frame

    const animate = () => {
      if (!isPaused && el) {
        scrollPos.current += speed
        // Reset when we've scrolled past one full set
        const singleSetWidth = el.scrollWidth / 3
        if (scrollPos.current >= singleSetWidth) {
          scrollPos.current -= singleSetWidth
        }
        el.scrollLeft = scrollPos.current
      }
      animRef.current = requestAnimationFrame(animate)
    }

    animRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animRef.current)
  }, [isPaused])

  return (
    <section className="relative py-20 lg:py-28" style={{ background: "#fafafa" }} data-testid="section-modules" aria-label="Module carousel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <p
          className="text-[10px] font-bold uppercase tracking-[0.4em] mb-3"
          style={{ color: accentHex }}
        >
          Every need, covered
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: "#111" }}>
          Your workflows, automated.
        </h2>
        <p className="text-sm leading-relaxed" style={{ color: "#1a1a1a" }}>
          Every module your {agencyName.toLowerCase()} needs — from talent management to payouts.
        </p>
      </div>

      {/* Scrolling cards — full bleed */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, #fafafa, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, #fafafa, transparent)" }} />

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-hidden px-8"
          style={{ scrollBehavior: "auto" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => { setIsPaused(false); setHoveredIdx(null) }}
        >
          {cards.map((mod, i) => {
            const colorIdx = i % CARD_COLORS.length
            const color = CARD_COLORS[colorIdx]
            const isHovered = hoveredIdx === i
            const features = MODULE_FEATURES[mod] || DEFAULT_FEATURES

            return (
              <div
                key={`${mod}-${i}`}
                className="shrink-0 rounded-2xl relative overflow-hidden transition-all duration-500 cursor-pointer"
                style={{
                  width: isHovered ? 340 : 260,
                  height: 360,
                  background: color.bg,
                }}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {/* Card content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-6">
                  {/* Top — title (when not hovered) or expanded content */}
                  <div>
                    {isHovered && (
                      <div className="mb-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                          Recommended module
                        </span>
                      </div>
                    )}

                    <h3
                      className="font-bold text-white leading-tight transition-all duration-300"
                      style={{ fontSize: isHovered ? "1.1rem" : "1.6rem" }}
                    >
                      {mod}
                    </h3>

                    {/* Features — show on hover */}
                    {isHovered && (
                      <div className="mt-5 flex flex-col gap-2.5">
                        {features.map((feat) => (
                          <div key={feat} className="flex items-center gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-white/90 shrink-0" />
                            <span className="text-[13px] font-medium text-white/90">{feat}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Bottom — branding */}
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(255,255,255,0.15)" }}>
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <span className="text-[13px] font-bold text-white">TalentOS</span>
                      <span className="text-[11px] text-white/90 ml-1">platform</span>
                    </div>
                  </div>
                </div>

                {/* Subtle pattern overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 50%)",
                  }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function AgencyTypePage({ slug }: AgencyTypePageProps) {
  const agency = getAgencyBySlug(slug)

  if (!agency) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-gray-400">Agency type not found.</p>
      </main>
    )
  }

  const accent = AGENCY_ACCENTS[agency.accent]
  const accentHex = accentHexMap[agency.accent] || "#6366f1"

  return (
    <main className="min-h-screen bg-white" style={{ paddingTop: "4rem" }} data-testid="section-agency-page" aria-label={`${agency.name} agency page`}>

      {/* ───── SECTION 1: Hero — White bg ───── */}
      <section className="relative pt-10 pb-20 lg:pt-14 lg:pb-28" style={{ background: "#fafafa" }} data-testid="section-hero" aria-label="Hero section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — text */}
            <div className="max-w-lg">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6"
                style={{
                  background: accentHex + "10",
                  border: `1px solid ${accentHex}25`,
                }}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: accentHex }}
                />
                <span
                  className="text-[11px] font-bold uppercase tracking-widest"
                  style={{ color: accentHex }}
                >
                  {agency.heroBadge || agency.name}
                </span>
              </div>

              {agency.heroTagline ? (
                <h1
                  className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold leading-[1.1] mb-5"
                  style={{ color: "#111" }}
                >
                  {agency.heroTagline}
                </h1>
              ) : (
                <h1
                  className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold leading-[1.1] mb-5"
                  style={{ color: "#111" }}
                >
                  Everything your{" "}
                  <span style={{ color: accentHex }}>
                    {agency.name.toLowerCase()}
                  </span>{" "}
                  needs — in one system.
                </h1>
              )}

              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "#222" }}
              >
                {agency.heroSubtitle || agency.shortDescription}
              </p>

              <div className="flex flex-wrap gap-3">
                <Button
                  size="lg"
                  className="rounded-xl px-7 py-6 text-sm font-semibold text-white"
                  style={{ background: accentHex }}
                  data-testid="btn-hero-start-trial"
                  aria-label="Start Free Trial"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-xl px-7 py-6 text-sm font-semibold"
                  style={{
                    borderColor: "#ddd",
                    color: "#222",
                  }}
                  data-testid="btn-hero-schedule-demo"
                  aria-label="Schedule Demo"
                >
                  Schedule Demo
                </Button>
              </div>

              {/* Trust signals */}
              <div className="flex items-center gap-6 mt-8 pt-6" style={{ borderTop: "1px solid #eee" }}>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" style={{ color: "#22c55e" }} />
                  <span className="text-[13px]" style={{ color: "#1a1a1a" }}>SOC 2 Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4" style={{ color: "#f59e0b" }} />
                  <span className="text-[13px]" style={{ color: "#1a1a1a" }}>14-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4" style={{ color: "#6366f1" }} />
                  <span className="text-[13px]" style={{ color: "#1a1a1a" }}>Multi-currency</span>
                </div>
              </div>
            </div>

            {/* Right — video */}
            <div
              className="relative rounded-2xl overflow-hidden hidden lg:block"
              style={{
                aspectRatio: "4/3",
                border: `1px solid ${accentHex}15`,
                boxShadow: `0 40px 100px ${accentHex}10`,
              }}
            >
              <video
                src={heroVideoMap[slug] || "https://assets.mixkit.co/videos/44560/44560-1080.mp4"}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 40%)",
                }}
              />
              <div className="absolute bottom-4 left-4">
                <span
                  className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white"
                  style={{
                    background: "rgba(0,0,0,0.5)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {agency.name} Dashboard
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── OPTIONAL: Trusted Studios Strip ───── */}
      {agency.trustedStudios && agency.trustedStudios.length > 0 && (
        <section
          className="relative py-10 border-y"
          style={{ borderColor: "#eee", background: "#fff" }}
          data-testid="section-trusted-studios"
          aria-label="Trusted studios"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-center mb-6" style={{ color: "#94A3B8" }}>
              Trusted by
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-14">
              {agency.trustedStudios.map((s) => (
                <span
                  key={s.label}
                  className="text-xl sm:text-2xl font-black tracking-widest opacity-80 hover:opacity-100 transition-opacity"
                  style={{ color: s.accent }}
                >
                  {s.label}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ───── OPTIONAL: Stats Band ───── */}
      {agency.stats && agency.stats.length > 0 && (
        <section
          className="relative py-16"
          style={{ background: "#0F172A" }}
          data-testid="section-stats"
          aria-label="By the numbers"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-around items-center gap-8 lg:gap-12">
              {agency.stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div
                    className="text-4xl sm:text-5xl font-bold tracking-tight"
                    style={{
                      background: "linear-gradient(135deg, #A5F3FC, #C7D2FE)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {s.value}
                  </div>
                  <div className="text-[11px] sm:text-xs mt-2 uppercase tracking-[0.12em]" style={{ color: "#94A3B8" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ───── OPTIONAL: Feature Cards (3 pillars) ───── */}
      {agency.featureCards && agency.featureCards.length > 0 && (
        <section
          className="relative py-20 lg:py-24"
          style={{ background: "#fafafa" }}
          data-testid="section-feature-cards"
          aria-label="Platform pillars"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="text-[11px] font-bold uppercase tracking-[0.22em] mb-3" style={{ color: accentHex }}>
                Platform pillars
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "#111" }}>
                Built for scale from day one.
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {agency.featureCards.map((f) => {
                const tint = f.tint || accentHex
                return (
                  <div
                    key={f.title}
                    className="p-7 rounded-2xl border bg-white transition-all hover:-translate-y-1"
                    style={{
                      borderColor: "#eee",
                      boxShadow: `0 20px 40px ${tint}08`,
                    }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl mb-5"
                      style={{
                        background: `${tint}15`,
                        border: `1px solid ${tint}40`,
                      }}
                    />
                    <div className="text-lg font-bold mb-2" style={{ color: "#111" }}>
                      {f.title}
                    </div>
                    <div className="text-sm leading-relaxed" style={{ color: "#555" }}>
                      {f.body}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ───── OPTIONAL: State Machines Grid ───── */}
      {agency.stateMachines && agency.stateMachines.length > 0 && (
        <section
          className="relative py-20 lg:py-24"
          style={{ background: "#fff" }}
          data-testid="section-state-machines"
          aria-label="State machines"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="text-[11px] font-bold uppercase tracking-[0.22em] mb-3" style={{ color: accentHex }}>
                {agency.stateMachines.length} state machines
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#111" }}>
                Every business-critical flow is a tracked machine.
              </h2>
              <p className="text-base max-w-2xl mx-auto" style={{ color: "#555" }}>
                Each entity progresses through a strict set of statuses — no ad-hoc fields, no guesswork, full audit trail.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {agency.stateMachines.map((sm) => (
                <span
                  key={sm}
                  className="px-5 py-2.5 rounded-full text-sm font-semibold border transition-colors hover:bg-white"
                  style={{
                    borderColor: accentHex + "30",
                    background: accentHex + "08",
                    color: "#111",
                  }}
                >
                  {sm}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ───── SECTION 2: Modules — Monday.com Scrolling Cards ───── */}
      <ModuleCarousel modules={agency.modules} agencyName={agency.name} accentHex={accentHex} />

      {/* ───── SECTION 3: Interactive Team Roles & Access Control ───── */}
      <TeamStructureSection roles={agency.roles} agencyName={agency.name} accentHex={accentHex} />

      {/* ───── OPTIONAL: Personas Band ───── */}
      {agency.personas && agency.personas.length > 0 && (
        <section
          className="relative py-20 lg:py-24"
          style={{ background: "#0B1120" }}
          data-testid="section-personas"
          aria-label="Personas"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="text-[11px] font-bold uppercase tracking-[0.22em] mb-3" style={{ color: accentHex }}>
                Who uses it
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "#F8FAFC" }}>
                A tailored view for every role.
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {agency.personas.map((p) => (
                <div
                  key={p.role}
                  className="p-6 rounded-2xl border transition-all hover:-translate-y-1"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    borderColor: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <div className="text-sm font-bold mb-1" style={{ color: accentHex }}>
                    {p.title}
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.14em] mb-4" style={{ color: "#64748B" }}>
                    {p.role}
                  </div>
                  <div className="text-[13px] leading-relaxed" style={{ color: "#CBD5E1" }}>
                    {p.lines[0]} {p.lines[1]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ───── OPTIONAL: Extra CTAs Band ───── */}
      {agency.ctas && agency.ctas.length > 0 && (
        <section
          className="relative py-16"
          style={{ background: "#0F172A" }}
          data-testid="section-extra-ctas"
          aria-label="Demo actions"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-[11px] font-bold uppercase tracking-[0.22em] mb-3" style={{ color: "#5EEAD4" }}>
              See it in motion
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-8" style={{ color: "#F8FAFC" }}>
              Pick your path.
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {agency.ctas.map((c) => {
                const isPrimary = c.variant === "primary" || !c.variant
                const isSecondary = c.variant === "secondary"
                return (
                  <Link
                    key={c.label}
                    href={c.href}
                    className="px-6 py-3 rounded-xl text-sm font-semibold transition-all"
                    style={
                      isPrimary
                        ? { background: accentHex, color: "#fff" }
                        : isSecondary
                          ? {
                              background: "rgba(255,255,255,0.08)",
                              color: "#F8FAFC",
                              border: "1px solid rgba(255,255,255,0.14)",
                            }
                          : {
                              background: "transparent",
                              color: "#5EEAD4",
                              border: `1px solid ${accentHex}40`,
                            }
                    }
                  >
                    {c.label} →
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ───── SECTION 4: Why TalentOS — Monday.com style white cards ───── */}
      <section className="relative py-20 lg:py-28" style={{ background: "#fafafa" }} data-testid="section-why-talentos" aria-label="Why TalentOS">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p
              className="text-[10px] font-bold uppercase tracking-[0.4em] mb-3"
              style={{ color: accentHex }}
            >
              Why TalentOS
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: "#111" }}>
              Built different, on purpose.
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: "#1a1a1a" }}>
              Enterprise-grade infrastructure designed for the talent industry — secure, scalable, and ready from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Enterprise-grade security",
                desc: "Built on monday.com-grade trusted security standards so it's safe for sensitive work at scale.",
                hasBadges: true,
                iconPath: (
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 8L14 22v18c0 16.6 11.1 32.1 26 36 14.9-3.9 26-19.4 26-36V22L40 8z" stroke="#222" strokeWidth="2" fill="none" />
                    <path d="M30 40l7 7 13-13" stroke="#222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                title: "Private by default",
                desc: "Your data, context, and operations stay private. Nothing is shared unless you say so.",
                hasBadges: false,
                iconPath: (
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="22" y="35" width="36" height="28" rx="4" stroke="#222" strokeWidth="2" fill="none" />
                    <path d="M28 35V27a12 12 0 0124 0v8" stroke="#222" strokeWidth="2" fill="none" />
                    <circle cx="40" cy="49" r="4" stroke="#222" strokeWidth="2" fill="none" />
                    <path d="M40 53v4" stroke="#222" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                title: "Controlled by you",
                desc: "Acts on your behalf, but with your approval. You review, approve, and stay in control of every step.",
                hasBadges: false,
                iconPath: (
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28 52c0-8 6-14 12-14s12 6 12 14" stroke="#222" strokeWidth="2" fill="none" />
                    <circle cx="40" cy="30" r="8" stroke="#222" strokeWidth="2" fill="none" />
                    <path d="M52 28l8-8m0 0v6m0-6h-6" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                title: "Full visibility",
                desc: "Every action is clear and traceable. You always know what happened, and why.",
                hasBadges: false,
                iconPath: (
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="18" y="16" width="44" height="48" rx="4" stroke="#222" strokeWidth="2" fill="none" />
                    <path d="M28 28h24M28 36h18M28 44h22M28 52h14" stroke="#222" strokeWidth="2" strokeLinecap="round" />
                    <rect x="46" y="42" width="16" height="16" rx="3" stroke="#222" strokeWidth="2" fill="none" />
                    <path d="M50 50l3 3 5-5" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl px-7 sm:px-8 pt-10 pb-9 text-center flex flex-col items-center transition-all duration-300"
                style={{
                  background: "#fff",
                  border: "1px solid #e5e7eb",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#d1d5db"
                  e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.06)"
                  e.currentTarget.style.transform = "translateY(-3px)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#e5e7eb"
                  e.currentTarget.style.boxShadow = "none"
                  e.currentTarget.style.transform = "translateY(0)"
                }}
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-8 leading-tight" style={{ color: "#111" }}>
                  {item.title}
                </h3>

                <div className="mb-8 flex items-center justify-center" style={{ minHeight: 80 }}>
                  {item.hasBadges ? (
                    <div className="flex items-center justify-center gap-3 flex-wrap">
                      {[
                        { label: "GDPR", sub: "SOC 2" },
                        { label: "AICPA", sub: "SOC 2" },
                        { label: "ISO", sub: "27001" },
                        { label: "DPDP", sub: "Act" },
                      ].map((badge) => (
                        <div key={badge.label} className="flex flex-col items-center">
                          <div
                            className="w-14 h-14 rounded-full flex items-center justify-center mb-1"
                            style={{ border: "2px solid #d1d5db" }}
                          >
                            <div className="text-center">
                              <span className="text-[9px] font-black block leading-none" style={{ color: "#333" }}>{badge.label}</span>
                              <span className="text-[7px] font-medium block" style={{ color: "#333" }}>{badge.sub}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    item.iconPath
                  )}
                </div>

                <p className="text-[15px] leading-relaxed" style={{ color: "#1a1a1a" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── SECTION 5: CTA — White bg ───── */}
      <section className="relative py-24" style={{ background: "#fafafa" }} data-testid="section-cta" aria-label="Call to action">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#111" }}>
            Ready to modernize your{" "}
            <span style={{ color: accentHex }}>
              {agency.name.toLowerCase()}
            </span>
            ?
          </h2>
          <p className="text-sm leading-relaxed mb-8" style={{ color: "#222" }}>
            Start free — no credit card required. 14-day trial with full access.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="rounded-xl px-8 py-6 text-sm font-semibold text-white"
              style={{ background: accentHex }}
              data-testid="btn-cta-start-trial"
              aria-label="Start Free Trial"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Link href="/agencies/all" data-testid="link-view-all-agencies">
              <Button
                size="lg"
                variant="outline"
                className="rounded-xl px-8 py-6 text-sm font-semibold w-full sm:w-auto"
                style={{ borderColor: "#ddd", color: "#222" }}
                data-testid="btn-view-all-agencies"
                aria-label="View all agency types"
              >
                View all agency types
                <ChevronRight className="ml-1 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
