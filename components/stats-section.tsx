"use client"

import { useEffect, useRef, useState } from "react"
import { useAuthModal } from "@/components/auth-modal"
import {
  Sparkles,
  Users,
  Shield,
  Calendar,
  BarChart3,
  Zap,
  ArrowRight,
  Search,
  Camera,
  Star,
  FileText,
  UserCheck,
  Lock,
  CheckCircle2,
  CreditCard,
  TrendingUp,
  Trophy,
  Bell,
  Check,
} from "lucide-react"

/* ── Stats data ── */
const stats = [
  { value: 22, suffix: "+", label: "Agency Types", color: "#7c3aed", topColor: "#8b5cf6" },
  { value: 160, suffix: "K+", label: "Registered Talents", color: "#d97706", topColor: "#f59e0b" },
  { value: 98, suffix: "%", label: "Payout Accuracy", color: "#059669", topColor: "#10b981" },
  { value: 3, suffix: "X", label: "Faster Onboarding", color: "#0284c7", topColor: "#0ea5e9" },
  { value: 50, suffix: "+", label: "Countries Served", color: "#e11d48", topColor: "#f43f5e" },
]

/* ── Explore options (like Monday.com selector) ── */
const exploreOptions = [
  { icon: Sparkles, label: "AI Portfolios", key: "portfolios" },
  { icon: Users, label: "Talent Discovery", key: "discovery" },
  { icon: Shield, label: "Security", key: "security" },
  { icon: Calendar, label: "Events", key: "events" },
  { icon: BarChart3, label: "Analytics", key: "analytics" },
  { icon: Zap, label: "Workflows", key: "workflows" },
]

/* ── Dashboard views for each option ── */
type DashRow = { name: string; agent: string; agentBg: string; status: string; statusColor: string; type: string; typeColor: string }

const dashboardViews: Record<string, {
  title: string
  subtitle: string
  groupLabel: string
  groupColor: string
  rows: DashRow[]
}> = {
  portfolios: {
    title: "AI Portfolio Manager",
    subtitle: "Manage all talent portfolios in one place",
    groupLabel: "Active Portfolios",
    groupColor: "#6366f1",
    rows: [
      { name: "Sarah M. — Fashion Portfolio", agent: "SM", agentBg: "#6366f1", status: "Enhanced", statusColor: "#10b981", type: "AI Ready", typeColor: "#6366f1" },
      { name: "James K. — Actor Headshots", agent: "JK", agentBg: "#f43f5e", status: "Processing", statusColor: "#f59e0b", type: "Auto-Tag", typeColor: "#0ea5e9" },
      { name: "Priya R. — Dance Reels", agent: "PR", agentBg: "#8b5cf6", status: "Enhanced", statusColor: "#10b981", type: "Scored", typeColor: "#8b5cf6" },
      { name: "Alex T. — Music Portfolio", agent: "AT", agentBg: "#f97316", status: "Pending", statusColor: "#ef4444", type: "Review", typeColor: "#f43f5e" },
    ],
  },
  discovery: {
    title: "Talent Discovery Engine",
    subtitle: "AI-powered matching for every casting brief",
    groupLabel: "Open Briefs",
    groupColor: "#0ea5e9",
    rows: [
      { name: "Fashion Model — Vogue Brief", agent: "VG", agentBg: "#ef4444", status: "98% Match", statusColor: "#10b981", type: "Urgent", typeColor: "#ef4444" },
      { name: "Actor — Netflix Audition", agent: "NF", agentBg: "#e11d48", status: "94% Match", statusColor: "#10b981", type: "Open", typeColor: "#0ea5e9" },
      { name: "Dancer — Brand Campaign", agent: "BC", agentBg: "#8b5cf6", status: "91% Match", statusColor: "#f59e0b", type: "Shortlisted", typeColor: "#8b5cf6" },
      { name: "Influencer — Product Launch", agent: "PL", agentBg: "#10b981", status: "87% Match", statusColor: "#f59e0b", type: "New", typeColor: "#10b981" },
    ],
  },
  security: {
    title: "Security & Compliance",
    subtitle: "Enterprise-grade protection for all data",
    groupLabel: "Compliance Status",
    groupColor: "#10b981",
    rows: [
      { name: "SOC 2 Type II Audit", agent: "S2", agentBg: "#10b981", status: "Compliant", statusColor: "#10b981", type: "Active", typeColor: "#10b981" },
      { name: "GDPR Data Controls", agent: "GD", agentBg: "#6366f1", status: "Compliant", statusColor: "#10b981", type: "Enforced", typeColor: "#6366f1" },
      { name: "Role-Based Access Control", agent: "RB", agentBg: "#0ea5e9", status: "Enabled", statusColor: "#10b981", type: "32 Roles", typeColor: "#0ea5e9" },
      { name: "Encryption at Rest", agent: "EN", agentBg: "#8b5cf6", status: "AES-256", statusColor: "#10b981", type: "Active", typeColor: "#10b981" },
    ],
  },
  events: {
    title: "Event & Casting Manager",
    subtitle: "Run castings, pageants, and showcases",
    groupLabel: "Upcoming Events",
    groupColor: "#f43f5e",
    rows: [
      { name: "Spring Fashion Showcase", agent: "FS", agentBg: "#f43f5e", status: "Live", statusColor: "#10b981", type: "Pageant", typeColor: "#f43f5e" },
      { name: "Casting Call #47 — Nike", agent: "NK", agentBg: "#f97316", status: "Judging", statusColor: "#f59e0b", type: "Commercial", typeColor: "#0ea5e9" },
      { name: "Summer Dance Auditions", agent: "DA", agentBg: "#8b5cf6", status: "Upcoming", statusColor: "#6366f1", type: "Open Call", typeColor: "#8b5cf6" },
      { name: "Brand Ambassador Search", agent: "BA", agentBg: "#0ea5e9", status: "Closed", statusColor: "#888", type: "Campaign", typeColor: "#f59e0b" },
    ],
  },
  analytics: {
    title: "Analytics Dashboard",
    subtitle: "Real-time insights on bookings and revenue",
    groupLabel: "Key Metrics",
    groupColor: "#f59e0b",
    rows: [
      { name: "Monthly Bookings Report", agent: "MB", agentBg: "#10b981", status: "+24%", statusColor: "#10b981", type: "Revenue", typeColor: "#f59e0b" },
      { name: "Talent Engagement Metrics", agent: "TE", agentBg: "#6366f1", status: "+18%", statusColor: "#10b981", type: "Growth", typeColor: "#6366f1" },
      { name: "Agency Performance Index", agent: "AP", agentBg: "#0ea5e9", status: "+31%", statusColor: "#10b981", type: "Trending", typeColor: "#0ea5e9" },
      { name: "Client Satisfaction Score", agent: "CS", agentBg: "#8b5cf6", status: "96%", statusColor: "#10b981", type: "High", typeColor: "#10b981" },
    ],
  },
  workflows: {
    title: "Workflow Automation",
    subtitle: "From booking request to payment — automated",
    groupLabel: "Active Flows",
    groupColor: "#8b5cf6",
    rows: [
      { name: "Booking → Contract → Payment", agent: "BP", agentBg: "#8b5cf6", status: "Active", statusColor: "#10b981", type: "Automated", typeColor: "#8b5cf6" },
      { name: "Talent Onboarding Pipeline", agent: "TO", agentBg: "#0ea5e9", status: "Active", statusColor: "#10b981", type: "3 min avg", typeColor: "#0ea5e9" },
      { name: "Invoice & Payout Processing", agent: "IP", agentBg: "#f59e0b", status: "Running", statusColor: "#f59e0b", type: "Auto-Split", typeColor: "#6366f1" },
      { name: "Contract E-Signature Flow", agent: "CE", agentBg: "#10b981", status: "Active", statusColor: "#10b981", type: "Instant", typeColor: "#10b981" },
    ],
  },
}

/* ── CountUp ── */
function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1800
          const steps = 60
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

/* ── Main Section ── */
export function StatsSection() {
  const { openAuth } = useAuthModal()
  const [selected, setSelected] = useState("portfolios")
  const [fade, setFade] = useState(true)
  const [focused, setFocused] = useState(false)
  const blurTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleSelect = (key: string) => {
    if (key === selected) return
    // Clear any pending blur timer
    if (blurTimer.current) clearTimeout(blurTimer.current)
    setFocused(true)
    setFade(false)
    setTimeout(() => {
      setSelected(key)
      setFade(true)
    }, 250)
    // Go back to blurred after 2.5s
    blurTimer.current = setTimeout(() => setFocused(false), 2800)
  }

  const view = dashboardViews[selected]

  return (
    <section className="relative z-10 py-20 overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── Interactive Product Showcase (Monday.com style) ── */}
        <div className="relative">
          {/* Dashboard + floating selector */}
          <div className="relative">

            {/* Main dashboard — full width with sidebar */}
            <div
              className="rounded-2xl overflow-hidden transition-all duration-500"
              style={{
                background: "#fff",
                border: "1px solid #e5e7eb",
                boxShadow: "0 24px 60px rgba(0,0,0,0.07), 0 4px 16px rgba(0,0,0,0.03)",
                marginRight: 0,
                filter: focused ? "blur(0px)" : "blur(1.5px)",
                opacity: focused ? 1 : 0.85,
              }}
            >
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-5 py-3" style={{ borderBottom: "1px solid #f0f0f0", background: "#fff" }}>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ef4444" }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#f59e0b" }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#22c55e" }} />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-md text-xs font-medium" style={{ background: "#f9fafb", color: "#888" }}>
                    <Sparkles className="w-3 h-3" style={{ color: "#6366f1" }} />
                    app.multitalent.io/dashboard
                  </div>
                </div>
              </div>

              {/* App body — sidebar + content */}
              <div className="flex" style={{ minHeight: 520 }}>
                {/* Left sidebar */}
                <div className="hidden sm:flex flex-col items-center gap-1.5 py-5 px-3" style={{ borderRight: "1px solid #f0f0f0", width: 56 }}>
                  {[
                    { color: "#6366f1", active: true },
                    { color: "#d1d5db", active: false },
                    { color: "#d1d5db", active: false },
                    { color: "#d1d5db", active: false },
                    { color: "#d1d5db", active: false },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{
                        background: item.active ? "rgba(99,102,241,0.1)" : "transparent",
                      }}
                    >
                      <div
                        className="w-[18px] h-[18px]"
                        style={{
                          background: item.color,
                          opacity: item.active ? 1 : 0.4,
                          borderRadius: i === 0 ? "4px" : i === 1 ? "50%" : i === 3 ? "2px" : "3px",
                        }}
                      />
                    </div>
                  ))}
                </div>

                {/* Main content area */}
                <div className="flex-1 p-5 sm:p-7 overflow-hidden" style={{ background: "#fafbfc" }}>
                  {/* Title + subtitle */}
                  <div
                    className="mb-5 transition-all duration-300"
                    style={{ opacity: fade ? 1 : 0, transform: fade ? "translateY(0)" : "translateY(6px)" }}
                  >
                    <h3 className="text-2xl font-bold mb-1" style={{ color: "#111" }}>{view.title}</h3>
                    <p className="text-sm" style={{ color: "#888" }}>{view.subtitle}</p>
                  </div>

                  {/* Tabs */}
                  <div className="flex items-center gap-5 mb-6 pb-3" style={{ borderBottom: "1px solid #f0f0f0" }}>
                    {["Main table", "My tickets", "Form", "+"].map((tab, i) => (
                      <span
                        key={tab}
                        className="text-[13px] font-medium"
                        style={{
                          color: i === 0 ? "#333" : "#bbb",
                          borderBottom: i === 0 ? "2px solid #6366f1" : "none",
                          paddingBottom: 6,
                        }}
                      >
                        {tab}
                      </span>
                    ))}
                  </div>

                  {/* Colored group header */}
                  <div
                    className="mb-3 transition-all duration-300"
                    style={{ opacity: fade ? 1 : 0 }}
                  >
                    <span className="text-[15px] font-bold" style={{ color: view.groupColor }}>
                      {view.groupLabel}
                    </span>
                  </div>

                  {/* Table header */}
                  <div className="grid grid-cols-[1fr_50px_110px_110px] gap-3 mb-2 px-3">
                    <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: "#999" }}>
                      Item
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-center flex items-center justify-center gap-1" style={{ color: "#999" }}>
                      Agent <Sparkles className="w-2.5 h-2.5" style={{ color: "#6366f1" }} />
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-center flex items-center justify-center gap-1" style={{ color: "#999" }}>
                      Status <Sparkles className="w-2.5 h-2.5" style={{ color: "#6366f1" }} />
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-center flex items-center justify-center gap-1" style={{ color: "#999" }}>
                      Type <Sparkles className="w-2.5 h-2.5" style={{ color: "#6366f1" }} />
                    </span>
                  </div>

                  {/* Table rows */}
                  <div className="space-y-0">
                    {view.rows.map((row, i) => (
                      <div
                        key={row.name}
                        className="grid grid-cols-[1fr_50px_110px_110px] gap-3 items-center py-3.5 px-3 transition-all duration-300 hover:bg-white"
                        style={{
                          borderBottom: "1px solid #f0f0f0",
                          opacity: fade ? 1 : 0,
                          transform: fade ? "translateY(0)" : "translateY(8px)",
                          transitionDelay: `${i * 60}ms`,
                        }}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-1.5 self-stretch rounded-full shrink-0" style={{ background: view.groupColor }} />
                          <span className="text-[13px] font-medium truncate" style={{ color: "#222" }}>{row.name}</span>
                        </div>
                        {/* Agent avatar */}
                        <div className="flex justify-center">
                          <div
                            className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0"
                            style={{ background: row.agentBg }}
                          >
                            {row.agent}
                          </div>
                        </div>
                        <div className="flex justify-center">
                          <span
                            className="text-[11px] font-bold px-3 py-1.5 rounded-full text-white min-w-[70px] text-center"
                            style={{ background: row.statusColor }}
                          >
                            {row.status}
                          </span>
                        </div>
                        <div className="flex justify-center">
                          <span
                            className="text-[11px] font-bold px-3 py-1.5 rounded-full text-white min-w-[70px] text-center"
                            style={{ background: row.typeColor }}
                          >
                            {row.type}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating selector — overlaps dashboard, centered */}
            <div
              className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 rounded-2xl p-6"
              style={{
                width: 320,
                background: "#fff",
                border: "1px solid #e5e7eb",
                boxShadow: "0 24px 60px rgba(0,0,0,0.1), 0 8px 24px rgba(0,0,0,0.05)",
              }}
            >
              <h3 className="text-xl font-bold leading-snug mb-1" style={{ color: "#111" }}>
                What would you like
                <br />
                to <span style={{ color: "#6366f1" }}>explore</span>?
              </h3>
              <p className="text-xs mb-5" style={{ color: "#888" }}>Select a module to preview</p>

              {/* Option grid — 3x2 like Monday.com */}
              <div className="grid grid-cols-3 gap-2 mb-5">
                {exploreOptions.map((opt) => {
                  const Icon = opt.icon
                  const isActive = selected === opt.key
                  return (
                    <button
                      key={opt.key}
                      onClick={() => handleSelect(opt.key)}
                      className="relative flex flex-col items-center gap-2 py-4 px-2 rounded-xl transition-all duration-200 text-center"
                      style={{
                        background: isActive ? "rgba(99,102,241,0.04)" : "#fff",
                        border: isActive ? "1.5px solid #6366f1" : "1.5px solid #e8e8ec",
                      }}
                    >
                      {/* Checkbox top-left */}
                      <div
                        className="absolute top-2 left-2 w-4 h-4 rounded flex items-center justify-center"
                        style={{
                          border: isActive ? "none" : "1.5px solid #d1d5db",
                          background: isActive ? "#6366f1" : "transparent",
                        }}
                      >
                        {isActive && <Check className="w-2.5 h-2.5 text-white" />}
                      </div>
                      <Icon className="w-6 h-6" style={{ color: isActive ? "#6366f1" : "#888" }} strokeWidth={1.5} />
                      <span className="text-[10px] font-semibold leading-tight" style={{ color: isActive ? "#6366f1" : "#555" }}>
                        {opt.label}
                      </span>
                    </button>
                  )
                })}
              </div>

              {/* CTA */}
              <button
                onClick={() => openAuth()}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-bold text-white transition-all duration-200 hover:scale-[1.02]"
                style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", boxShadow: "0 4px 16px rgba(99,102,241,0.3)" }}
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Floating AI Sidekick prompt — bottom left like Monday.com */}
            <div
              className="hidden lg:flex absolute -bottom-6 left-6 z-20 items-center gap-3 px-4 py-3 rounded-xl"
              style={{
                background: "#fff",
                border: "1px solid #e5e7eb",
                boxShadow: "0 12px 32px rgba(0,0,0,0.08)",
              }}
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(139,92,246,0.1)" }}>
                <Sparkles className="w-4 h-4" style={{ color: "#8b5cf6" }} />
              </div>
              <div>
                <div className="text-xs font-bold" style={{ color: "#111" }}>TalentOS AI</div>
                <div className="text-[11px]" style={{ color: "#888" }}>Analyze booking trends</div>
              </div>
              <div className="w-6 h-6 rounded-full flex items-center justify-center ml-2" style={{ background: "#6366f1" }}>
                <ArrowRight className="w-3 h-3 text-white" />
              </div>
            </div>

            {/* Mobile selector — below dashboard */}
            <div className="lg:hidden mt-6 rounded-2xl p-5" style={{ background: "#fff", border: "1px solid #e5e7eb" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#111" }}>
                Explore <span style={{ color: "#6366f1" }}>modules</span>
              </h3>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {exploreOptions.map((opt) => {
                  const Icon = opt.icon
                  const isActive = selected === opt.key
                  return (
                    <button
                      key={opt.key}
                      onClick={() => handleSelect(opt.key)}
                      className="flex flex-col items-center gap-1.5 py-3 rounded-xl transition-all duration-200"
                      style={{
                        border: isActive ? "1.5px solid #6366f1" : "1.5px solid #e8e8ec",
                        background: isActive ? "rgba(99,102,241,0.04)" : "#fff",
                      }}
                    >
                      <Icon className="w-5 h-5" style={{ color: isActive ? "#6366f1" : "#888" }} strokeWidth={1.5} />
                      <span className="text-[10px] font-semibold" style={{ color: isActive ? "#6366f1" : "#555" }}>{opt.label}</span>
                    </button>
                  )
                })}
              </div>
              <button
                onClick={() => openAuth()}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-bold text-white"
                style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
