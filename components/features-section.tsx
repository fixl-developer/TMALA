"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import {
  UserCheck,
  Building2,
  CreditCard,
  Trophy,
  Star,
  ArrowRight,
  Quote,
  Shield,
  CheckCircle2,
  Lock,
  Eye,
  Calendar,
  BarChart3,
  Zap,
  FileText,
  Send,
  TrendingUp,
  Users,
  Award,
} from "lucide-react"

/* ── Dashboard card components for each feature ── */

function VisibilityDashboard() {
  return (
    <div className="w-full h-full rounded-[2rem] p-6 flex flex-col gap-4" style={{ background: "linear-gradient(135deg, #f3f0ff 0%, #ede9fe 100%)" }}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "#7c3aed" }}>
            <UserCheck className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-[15px]" style={{ color: "#1a1a2e" }}>Talent Onboarding</span>
        </div>
        <span className="px-2.5 py-1 rounded-full text-xs font-semibold" style={{ background: "#7c3aed", color: "#fff" }}>Live</span>
      </div>

      {/* Verification pipeline */}
      <div className="rounded-2xl p-4 flex-1" style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(124,58,237,0.12)" }}>
        <p className="text-xs font-semibold mb-3" style={{ color: "#7c3aed" }}>Verification Pipeline</p>
        <div className="space-y-3">
          {[
            { name: "Ayesha Khan", status: "AI Verified", color: "#059669", icon: CheckCircle2 },
            { name: "Carlos Rivera", status: "ID Check", color: "#d97706", icon: Eye },
            { name: "Sophie Laurent", status: "Portfolio Review", color: "#7c3aed", icon: FileText },
          ].map((t) => (
            <div key={t.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold" style={{ background: t.color + "18", color: t.color }}>
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <span className="text-sm font-medium" style={{ color: "#1a1a2e" }}>{t.name}</span>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg text-[11px] font-semibold" style={{ background: t.color + "14", color: t.color }}>
                <t.icon className="w-3 h-3" />
                {t.status}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats row */}
      <div className="flex gap-3">
        <div className="flex-1 rounded-xl p-3" style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(124,58,237,0.12)" }}>
          <p className="text-[22px] font-bold" style={{ color: "#7c3aed" }}>80%</p>
          <p className="text-[11px] font-medium" style={{ color: "#444" }}>Faster Verification</p>
        </div>
        <div className="flex-1 rounded-xl p-3" style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(124,58,237,0.12)" }}>
          <p className="text-[22px] font-bold" style={{ color: "#7c3aed" }}>3min</p>
          <p className="text-[11px] font-medium" style={{ color: "#444" }}>Avg Onboarding</p>
        </div>
      </div>
    </div>
  )
}

function AlignmentDashboard() {
  return (
    <div className="w-full h-full rounded-[2rem] p-6 flex flex-col gap-4" style={{ background: "linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%)" }}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "#6366f1" }}>
            <Building2 className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-[15px]" style={{ color: "#1a1a2e" }}>Agency Hub</span>
        </div>
        <span className="px-2.5 py-1 rounded-full text-xs font-semibold" style={{ background: "#6366f1", color: "#fff" }}>500+ Active</span>
      </div>

      {/* Agency cards grid */}
      <div className="grid grid-cols-2 gap-3 flex-1">
        {[
          { name: "Elite Models", members: 84, color: "#6366f1", bg: "#eef2ff" },
          { name: "Star Talents", members: 126, color: "#8b5cf6", bg: "#f5f3ff" },
          { name: "Prime Agency", members: 53, color: "#4f46e5", bg: "#e8e5ff" },
          { name: "Nova Casting", members: 97, color: "#7c3aed", bg: "#f3f0ff" },
        ].map((a) => (
          <div key={a.name} className="rounded-xl p-3.5 flex flex-col justify-between" style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(99,102,241,0.12)" }}>
            <div className="w-7 h-7 rounded-lg flex items-center justify-center mb-2" style={{ background: a.color + "14" }}>
              <Building2 className="w-3.5 h-3.5" style={{ color: a.color }} />
            </div>
            <p className="text-[13px] font-semibold" style={{ color: "#1a1a2e" }}>{a.name}</p>
            <p className="text-[11px] font-medium" style={{ color: "#666" }}>{a.members} members</p>
          </div>
        ))}
      </div>

      {/* Security badges */}
      <div className="rounded-xl p-3 flex items-center gap-4" style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(99,102,241,0.12)" }}>
        {[
          { icon: Shield, label: "RBAC Enabled" },
          { icon: Lock, label: "Encrypted" },
          { icon: CheckCircle2, label: "99.9% Uptime" },
        ].map((b) => (
          <div key={b.label} className="flex items-center gap-1.5">
            <b.icon className="w-3.5 h-3.5" style={{ color: "#6366f1" }} />
            <span className="text-[11px] font-semibold" style={{ color: "#1a1a2e" }}>{b.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function EfficiencyDashboard() {
  const bars = [35, 52, 45, 68, 80, 72, 95, 88, 75, 92, 85, 100]
  return (
    <div className="w-full h-full rounded-[2rem] p-6 flex flex-col gap-4" style={{ background: "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)" }}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "#059669" }}>
            <BarChart3 className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-[15px]" style={{ color: "#1a1a2e" }}>Predictive Analytics</span>
        </div>
        <div className="flex items-center gap-1 px-2.5 py-1 rounded-full" style={{ background: "#059669", color: "#fff" }}>
          <TrendingUp className="w-3 h-3" />
          <span className="text-xs font-semibold">+24%</span>
        </div>
      </div>

      {/* Stats */}
      <div className="rounded-xl p-4 flex gap-6" style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(5,150,105,0.12)" }}>
        <div>
          <p className="text-[11px] font-medium mb-1" style={{ color: "#666" }}>Bookings</p>
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl font-bold" style={{ color: "#1a1a2e" }}>2.4K</span>
            <TrendingUp className="w-3 h-3" style={{ color: "#059669" }} />
          </div>
        </div>
        <div className="w-px" style={{ background: "rgba(5,150,105,0.15)" }} />
        <div>
          <p className="text-[11px] font-medium mb-1" style={{ color: "#666" }}>Revenue</p>
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl font-bold" style={{ color: "#1a1a2e" }}>$18K</span>
            <TrendingUp className="w-3 h-3" style={{ color: "#059669" }} />
          </div>
        </div>
        <div className="w-px" style={{ background: "rgba(5,150,105,0.15)" }} />
        <div>
          <p className="text-[11px] font-medium mb-1" style={{ color: "#666" }}>ROI</p>
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl font-bold" style={{ color: "#059669" }}>3x</span>
          </div>
        </div>
      </div>

      {/* Bar chart */}
      <div className="flex-1 rounded-xl p-4" style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(5,150,105,0.12)" }}>
        <div className="flex items-end justify-between gap-1.5 h-full">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-md transition-all duration-500"
              style={{
                height: `${h}%`,
                background: i >= 8 ? "#059669" : "#059669" + "40",
              }}
            />
          ))}
        </div>
      </div>

      {/* Bottom row */}
      <div className="flex gap-3">
        <div className="flex-1 rounded-xl p-3" style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(5,150,105,0.12)" }}>
          <p className="text-[22px] font-bold" style={{ color: "#059669" }}>$0</p>
          <p className="text-[11px] font-medium" style={{ color: "#444" }}>Setup Fees</p>
        </div>
        <div className="flex-1 rounded-xl p-3" style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(5,150,105,0.12)" }}>
          <p className="text-[22px] font-bold" style={{ color: "#059669" }}>3x</p>
          <p className="text-[11px] font-medium" style={{ color: "#444" }}>ROI in 6 Months</p>
        </div>
      </div>
    </div>
  )
}

function EventsDashboard() {
  const days = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
  const highlightDays = [13, 17, 21]
  return (
    <div className="w-full h-full rounded-[2rem] p-6 flex flex-col gap-4" style={{ background: "linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)" }}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "#db2777" }}>
            <Calendar className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-[15px]" style={{ color: "#1a1a2e" }}>Event Management</span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full" style={{ background: "#db2777", color: "#fff" }}>
          <Users className="w-3 h-3" />
          <span className="text-xs font-semibold">3 Live</span>
        </div>
      </div>

      {/* Calendar */}
      <div className="rounded-xl p-4 flex-1" style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(219,39,119,0.12)" }}>
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-bold" style={{ color: "#1a1a2e" }}>March 2026</span>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full" style={{ background: "#ef4444" }} />
            <span className="text-[11px] font-semibold" style={{ color: "#ef4444" }}>3 Live</span>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-2">
          {days.map((d) => (
            <div
              key={d}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-medium"
              style={{
                background: highlightDays.includes(d) ? "#db2777" : "transparent",
                color: highlightDays.includes(d) ? "#fff" : "#1a1a2e",
              }}
            >
              {d}
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming events */}
      <div className="space-y-2.5">
        {[
          { name: "Spring Showcase", status: "live", color: "#ef4444" },
          { name: "Casting Call #42", status: "upcoming", color: "#9ca3af" },
          { name: "Fashion Week Prep", status: "live", color: "#ef4444" },
        ].map((e) => (
          <div key={e.name} className="rounded-xl px-4 py-3 flex items-center justify-between" style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(219,39,119,0.12)" }}>
            <div className="flex items-center gap-2.5">
              <Calendar className="w-4 h-4" style={{ color: "#db2777" }} />
              <span className="text-[13px] font-medium" style={{ color: "#1a1a2e" }}>{e.name}</span>
            </div>
            <div className="w-2 h-2 rounded-full" style={{ background: e.color }} />
          </div>
        ))}
      </div>
    </div>
  )
}

function EvaluationDashboard() {
  return (
    <div className="w-full h-full rounded-[2rem] p-6 flex flex-col gap-4" style={{ background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)" }}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "#0284c7" }}>
            <Award className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-[15px]" style={{ color: "#1a1a2e" }}>Live Scoring</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#ef4444" }} />
          <span className="text-xs font-semibold" style={{ color: "#ef4444" }}>Live</span>
        </div>
      </div>

      {/* Score cards */}
      <div className="space-y-2.5 flex-1">
        {[
          { rank: 1, name: "Maria Santos", score: 9.7, trend: "+0.3" },
          { rank: 2, name: "James Wilson", score: 9.4, trend: "+0.1" },
          { rank: 3, name: "Priya Sharma", score: 9.2, trend: "+0.5" },
          { rank: 4, name: "Alex Chen", score: 8.9, trend: "-0.2" },
        ].map((s) => (
          <div key={s.name} className="rounded-xl px-4 py-3 flex items-center justify-between" style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(2,132,199,0.12)" }}>
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold w-5" style={{ color: s.rank <= 3 ? "#0284c7" : "#999" }}>#{s.rank}</span>
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold" style={{ background: "#0284c7" + "18", color: "#0284c7" }}>
                {s.name.split(" ").map(n => n[0]).join("")}
              </div>
              <span className="text-[13px] font-medium" style={{ color: "#1a1a2e" }}>{s.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold" style={{ color: s.trend.startsWith("+") ? "#059669" : "#ef4444" }}>{s.trend}</span>
              <span className="text-lg font-bold" style={{ color: "#0284c7" }}>{s.score}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom stats */}
      <div className="flex gap-3">
        <div className="flex-1 rounded-xl p-3" style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(2,132,199,0.12)" }}>
          <p className="text-[22px] font-bold" style={{ color: "#0284c7" }}>100%</p>
          <p className="text-[11px] font-medium" style={{ color: "#444" }}>Transparent</p>
        </div>
        <div className="flex-1 rounded-xl p-3" style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(2,132,199,0.12)" }}>
          <div className="flex items-center gap-1">
            <Zap className="w-4 h-4" style={{ color: "#0284c7" }} />
            <p className="text-[15px] font-bold" style={{ color: "#0284c7" }}>Real-time</p>
          </div>
          <p className="text-[11px] font-medium" style={{ color: "#444" }}>Live Results</p>
        </div>
      </div>
    </div>
  )
}

const dashboardComponents = [
  VisibilityDashboard,
  AlignmentDashboard,
  EfficiencyDashboard,
  EventsDashboard,
  EvaluationDashboard,
]

const features = [
  {
    icon: UserCheck,
    label: "Visibility",
    heading: "Take the guesswork out of onboarding",
    description:
      "Talents self-register with ID proof & portfolio, get AI-verified, and are roster-assigned in minutes — not weeks.",
    stats: [
      { value: "80%", label: "Faster verification" },
      { value: "3min", label: "Avg onboarding time" },
    ],
    testimonial:
      "The onboarding process has reduced our talent verification time by 80%. Incredibly efficient.",
    author: "Sarah Johnson",
    role: "Talent Director at Elite Modeling Agency",
    accent: "#7c3aed",
    imageBg: "#f3f0ff",
  },
  {
    icon: Building2,
    label: "Alignment",
    heading: "Get business units working in harmony",
    description:
      "Isolated tenant workspaces with custom branding, RBAC permissions, and full team management — at any scale.",
    stats: [
      { value: "500+", label: "Agencies onboarded" },
      { value: "99.9%", label: "Uptime SLA" },
    ],
    testimonial:
      "Managing multiple agencies has never been easier. Perfect isolation and control.",
    author: "Michael Chen",
    role: "Operations Manager at Global Talent Network",
    accent: "#6366f1",
    imageBg: "#eef2ff",
  },
  {
    icon: CreditCard,
    label: "Efficiency",
    heading: "Execute with speed and precision",
    description:
      "Basic to Premium plans with ABAC-enforced limits. Upgrade seamlessly as your agency scales.",
    stats: [
      { value: "3x", label: "ROI in 6 months" },
      { value: "$0", label: "Setup fees" },
    ],
    testimonial:
      "The pricing flexibility allows us to grow at our own pace. Started small, scaled up effortlessly.",
    author: "Emma Rodriguez",
    role: "Business Development at Rising Stars Agency",
    accent: "#059669",
    imageBg: "#ecfdf5",
  },
  {
    icon: Trophy,
    label: "Events",
    heading: "Host world-class events effortlessly",
    description:
      "Host world-class events — beauty, talent, fashion — with entry rules, judge assignment, and live scoring.",
    stats: [
      { value: "50+", label: "Events hosted" },
      { value: "12K", label: "Participants" },
    ],
    testimonial:
      "We've hosted 50+ successful pageants. The judging system is transparent and fair.",
    author: "David Park",
    role: "Event Coordinator at International Beauty Contests",
    accent: "#0284c7",
    imageBg: "#f0f9ff",
  },
  {
    icon: Star,
    label: "Evaluation",
    heading: "Score with fairness and transparency",
    description:
      "Invite judges, assign events, enable real-time scoring with built-in fairness mechanisms.",
    stats: [
      { value: "100%", label: "Transparent scores" },
      { value: "Real-time", label: "Live results" },
    ],
    testimonial:
      "The scoring system eliminates bias. It's revolutionized our judging process completely.",
    author: "Lisa Thompson",
    role: "Head Judge at National Pageant Association",
    accent: "#db2777",
    imageBg: "#fdf2f8",
  },
]

export function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const featureRefs = useRef<(HTMLDivElement | null)[]>([])
  const [active, setActive] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)

  const setFeatureRef = useCallback(
    (el: HTMLDivElement | null, i: number) => {
      featureRefs.current[i] = el
    },
    []
  )

  // Use IntersectionObserver for reliable detection (works with Lenis)
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    featureRefs.current.forEach((el, i) => {
      if (!el) return
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(i)
            }
          })
        },
        {
          rootMargin: "-40% 0px -40% 0px",
          threshold: 0,
        }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  // Scroll progress for floating card animations
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const totalScroll = rect.height - window.innerHeight
      const scrolled = -rect.top
      setScrollProgress(Math.max(0, Math.min(1, scrolled / totalScroll)))
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const current = features[active]

  // Floating card parallax offsets based on scroll
  const floatY1 = Math.sin(scrollProgress * Math.PI * 2) * 12
  const floatY2 = Math.cos(scrollProgress * Math.PI * 2) * 8

  return (
    <section
      ref={containerRef}
      id="features"
      className="relative"
      style={{ color: "#111", background: "#fff" }}
    >
      {/* Section header */}
      <div className="text-center pt-24 pb-16 px-6">
        <h2
          className="text-4xl sm:text-5xl md:text-[3.5rem] font-bold leading-tight tracking-tight"
          style={{ color: "#000" }}
        >
          Built to give your work a
          <br />
          competitive edge
        </h2>
      </div>

      {/* === Main scrollytelling grid === */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="lg:flex lg:gap-16 xl:gap-20 relative">
          {/* ─── LEFT COLUMN: Scrolling text blocks ─── */}
          <div className="lg:w-[45%] relative">
            {features.map((f, i) => (
              <div
                key={f.label}
                ref={(el) => setFeatureRef(el, i)}
                className="flex items-center"
                style={{ minHeight: "100vh" }}
              >
                <div>
                  {/* Label */}
                  <p
                    className="text-sm font-bold uppercase tracking-[0.2em] mb-5"
                    style={{ color: f.accent }}
                  >
                    {f.label}
                  </p>

                  {/* Heading */}
                  <h3
                    className="text-3xl sm:text-[2.5rem] font-bold leading-[1.15] mb-5"
                    style={{ color: "#000" }}
                  >
                    {f.heading}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-[16px] leading-relaxed mb-8 max-w-md"
                    style={{ color: "#333" }}
                  >
                    {f.description}
                  </p>

                  {/* CTA */}
                  <button
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                    style={{ background: f.accent }}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* ─── RIGHT COLUMN: Single sticky container ─── */}
          <div className="hidden lg:block lg:w-[55%]">
            <div
              className="sticky flex items-center"
              style={{ top: "10vh", height: "80vh" }}
            >
              <div className="w-full relative">
                {/* Background shape with accent transition */}
                <div
                  className="absolute rounded-[2.5rem] transition-colors duration-700"
                  style={{
                    inset: "-16px",
                    background: current.imageBg,
                  }}
                />

                {/* Dashboard card container */}
                <div
                  className="relative rounded-[2rem] overflow-hidden"
                  style={{
                    aspectRatio: "4/3",
                    boxShadow:
                      "0 20px 60px rgba(0,0,0,0.1), 0 4px 16px rgba(0,0,0,0.06)",
                  }}
                >
                  {/* All dashboard cards stacked — only active one visible */}
                  {dashboardComponents.map((DashCard, i) => (
                    <div
                      key={features[i].label + "-dash"}
                      className="absolute inset-0"
                      style={{
                        opacity: i === active ? 1 : 0,
                        transform: i === active ? "scale(1)" : "scale(0.97)",
                        transition:
                          "opacity 0.7s ease, transform 1s cubic-bezier(0.22, 1, 0.36, 1)",
                        pointerEvents: i === active ? "auto" : "none",
                      }}
                    >
                      <DashCard />
                    </div>
                  ))}

                  {/* Bottom progress pills */}
                  <div className="absolute bottom-0 left-0 right-0 px-6 py-4 z-10">
                    <div className="flex items-center gap-2">
                      {features.map((f, i) => (
                        <div
                          key={f.label + "-pill"}
                          className="h-1 rounded-full transition-all duration-500"
                          style={{
                            width: i === active ? 32 : 12,
                            background:
                              i === active
                                ? f.accent
                                : i < active
                                  ? f.accent + "70"
                                  : f.accent + "30",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* ── Floating stat card (bottom-left) ── */}
                <div
                  className="absolute -bottom-5 -left-5 z-20 rounded-2xl p-4 transition-all duration-500"
                  style={{
                    background: "#fff",
                    border: "1px solid #e8e8ec",
                    boxShadow:
                      "0 12px 40px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
                    transform: `translateY(${floatY1}px)`,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center relative transition-colors duration-500"
                      style={{ background: current.accent + "14" }}
                    >
                      {features.map((f, i) => {
                        const FIcon = f.icon
                        return (
                          <FIcon
                            key={f.label + "-ficon"}
                            className="w-5 h-5 absolute"
                            style={{
                              color: f.accent,
                              opacity: i === active ? 1 : 0,
                              transition: "opacity 0.4s ease",
                            }}
                          />
                        )
                      })}
                    </div>
                    <div>
                      <span
                        className="text-lg font-bold block leading-none mb-0.5 transition-colors duration-500"
                        style={{ color: current.accent }}
                      >
                        {current.stats[0].value}
                      </span>
                      <span className="text-xs" style={{ color: "#555" }}>
                        {current.stats[0].label}
                      </span>
                    </div>
                  </div>
                </div>

                {/* ── Floating quote card (top-right) ── */}
                <div
                  className="absolute -top-4 -right-4 z-20 max-w-[220px] rounded-2xl p-4 transition-all duration-500"
                  style={{
                    background: "#fff",
                    border: "1px solid #e8e8ec",
                    boxShadow:
                      "0 12px 40px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.03)",
                    transform: `translateY(${floatY2}px)`,
                  }}
                >
                  <Quote
                    className="w-4 h-4 mb-2 transition-colors duration-500"
                    style={{ color: current.accent + "60" }}
                  />
                  <p
                    className="text-[11px] leading-relaxed line-clamp-3 italic mb-2"
                    style={{ color: "#444" }}
                  >
                    {current.testimonial}
                  </p>
                  <div className="flex items-center gap-2">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold shrink-0 transition-colors duration-500"
                      style={{
                        background: current.accent + "15",
                        color: current.accent,
                      }}
                    >
                      {current.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <span className="text-[10px] font-medium" style={{ color: "#222" }}>
                      {current.author}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: show current dashboard inline */}
      <div className="lg:hidden px-6 pb-16">
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            aspectRatio: "4/3",
            boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
          }}
        >
          {dashboardComponents.map((DashCard, i) => {
            if (i !== active) return null
            return <DashCard key={features[i].label + "-mobile"} />
          })}
        </div>
      </div>
    </section>
  )
}
