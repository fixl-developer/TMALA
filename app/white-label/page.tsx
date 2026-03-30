"use client"

import { useState, useEffect, useRef } from "react"
import { useAuthModal } from "@/components/auth-modal"
import {
  Globe,
  Paintbrush,
  Lock,
  Palette,
  Link2,
  Settings,
  Building2,
  Workflow,
  ArrowRight,
  CheckCircle,
  Monitor,
  Smartphone,
  Mail,
  Shield,
  Database,
  Send,
} from "lucide-react"

const features = [
  {
    label: "Domains",
    title: "Your domain, your platform",
    description:
      "Each agency gets its own subdomain (agency.talentos.com) or connects a fully custom domain with automatic SSL provisioning. Your clients never see our brand.",
    color: "#6366f1",
  },
  {
    label: "Branding",
    title: "Pixel-perfect brand theming",
    description:
      "Upload logos, set brand colors, typography, and styling. Every screen — from login to invoices — reflects your agency's identity, not ours.",
    color: "#8b5cf6",
  },
  {
    label: "Feature Control",
    title: "Toggle modules on and off",
    description:
      "Enable or disable platform modules per tenant. Show only what matters — casting, payments, academy, or the full suite. Each agency sees exactly what they need.",
    color: "#059669",
  },
  {
    label: "Data Security",
    title: "Complete data isolation",
    description:
      "Schema-per-tenant architecture ensures complete data separation. No agency ever sees another's talent, contracts, or financials. Enterprise-grade isolation by default.",
    color: "#0891b2",
  },
  {
    label: "Blueprints",
    title: "Pre-built agency templates",
    description:
      "Choose from 10 pre-built agency blueprints — Roster, Casting, Academy, Staffing, and more — that pre-configure roles, modules, and workflows out of the box.",
    color: "#f59e0b",
  },
  {
    label: "Communications",
    title: "Branded emails and notifications",
    description:
      "All emails, notifications, and client-facing documents are sent under your agency's brand. Custom sender domains, branded templates, and white-labeled reports.",
    color: "#e11d48",
  },
]

const brandingCapabilities = [
  {
    icon: Palette,
    title: "Visual Identity",
    items: ["Logo & favicon upload", "Primary & secondary brand colors", "Custom typography", "Light & dark mode themes"],
    color: "#c4b5fd",
  },
  {
    icon: Link2,
    title: "Domain & URLs",
    items: ["Custom subdomain (agency.talentos.com)", "Fully custom domain support", "Automatic SSL certificates", "Custom email sender domain"],
    color: "#6ee7b7",
  },
  {
    icon: Settings,
    title: "Platform Configuration",
    items: ["Module visibility toggles", "Custom navigation menus", "Role-based feature access", "Workflow customization"],
    color: "#fcd34d",
  },
  {
    icon: Monitor,
    title: "Client-Facing Screens",
    items: ["Branded login & signup pages", "Custom talent portfolio views", "White-labeled invoices & contracts", "Agency-branded mobile experience"],
    color: "#93c5fd",
  },
]

const deploymentSteps = [
  {
    step: 1,
    icon: Building2,
    title: "Agency Signup",
    description: "Register your agency, choose a blueprint template, and set your plan. Takes under 2 minutes.",
  },
  {
    step: 2,
    icon: Paintbrush,
    title: "Brand Setup",
    description: "Upload your logo, set brand colors, configure your custom domain, and choose which modules to activate.",
  },
  {
    step: 3,
    icon: Workflow,
    title: "Configure Workflows",
    description: "Set up roles, permissions, approval chains, and automate your casting, booking, or payment flows.",
  },
  {
    step: 4,
    icon: Smartphone,
    title: "Go Live",
    description: "Invite your team and talents. Your fully branded platform is ready — web and mobile, under your domain.",
  },
]

const tenantTypes = [
  { name: "Modelling Agency", blueprint: "B1 — Roster + Booking", color: "#6366f1" },
  { name: "Casting Agency", blueprint: "B2 — Casting Pipeline", color: "#8b5cf6" },
  { name: "Pageant Organizer", blueprint: "B3 — Season/Competition", color: "#e11d48" },
  { name: "Influencer Agency", blueprint: "B4 — Brand Deals + Deliverables", color: "#f59e0b" },
  { name: "Training Academy", blueprint: "B5 — Course/Cohort", color: "#059669" },
  { name: "Production House", blueprint: "B6 — Project + Assets", color: "#0891b2" },
  { name: "Staffing Agency", blueprint: "B7 — Shift/Staffing", color: "#dc2626" },
  { name: "Holding Group", blueprint: "B10 — Multi-tenant Group", color: "#6d28d9" },
]

/* ───── Scroll-driven feature illustrations ───── */
function FeatureVisual({ index, active }: { index: number; active: boolean }) {
  const visuals = [
    // 0 — Custom Domains
    <div key="domains" className="relative w-full h-full flex items-center justify-center">
      <div className="w-[340px] rounded-2xl overflow-hidden" style={{ background: "#fff", boxShadow: "0 8px 40px rgba(0,0,0,0.08)" }}>
        <div className="flex items-center gap-2 px-4 py-3" style={{ background: "#f8f9fa", borderBottom: "1px solid #eee" }}>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#febc2e" }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c840" }} />
          </div>
          <div className="flex-1 mx-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md text-xs" style={{ background: "#fff", border: "1px solid #e5e5e5", color: "#333" }}>
              <Lock className="w-3 h-3" style={{ color: "#059669" }} />
              youragency.com/dashboard
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl" style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }} />
            <div>
              <p className="text-sm font-bold" style={{ color: "#111" }}>Your Agency</p>
              <p className="text-[11px]" style={{ color: "#888" }}>youragency.com</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-3 rounded-full w-full" style={{ background: "#f0f0f2" }} />
            <div className="h-3 rounded-full w-3/4" style={{ background: "#f0f0f2" }} />
            <div className="h-3 rounded-full w-1/2" style={{ background: "#f0f0f2" }} />
          </div>
        </div>
      </div>
    </div>,

    // 1 — Brand Theming
    <div key="branding" className="relative w-full h-full flex items-center justify-center">
      <div className="w-[340px] rounded-2xl p-6" style={{ background: "#fff", boxShadow: "0 8px 40px rgba(0,0,0,0.08)" }}>
        <p className="text-xs font-bold uppercase tracking-wider mb-5" style={{ color: "#888" }}>Brand Settings</p>
        <div className="flex items-center gap-4 mb-5">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-xl font-bold" style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}>A</div>
          <div>
            <p className="text-sm font-bold" style={{ color: "#111" }}>Agency Logo</p>
            <p className="text-[11px]" style={{ color: "#6366f1" }}>Change logo</p>
          </div>
        </div>
        <div className="mb-5">
          <p className="text-xs font-semibold mb-2" style={{ color: "#333" }}>Brand Colors</p>
          <div className="flex gap-2">
            {["#6366f1", "#8b5cf6", "#111", "#f5f5f7", "#fff"].map((c) => (
              <div key={c} className="w-9 h-9 rounded-lg" style={{ background: c, border: "1px solid #e5e5e5" }} />
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold mb-2" style={{ color: "#333" }}>Typography</p>
          <div className="px-3 py-2 rounded-lg text-sm" style={{ background: "#f9f9fb", border: "1px solid #e8e8ec", color: "#111" }}>Inter — Modern Sans-serif</div>
        </div>
      </div>
    </div>,

    // 2 — Feature Toggles
    <div key="toggles" className="relative w-full h-full flex items-center justify-center">
      <div className="w-[340px] rounded-2xl p-6" style={{ background: "#fff", boxShadow: "0 8px 40px rgba(0,0,0,0.08)" }}>
        <p className="text-xs font-bold uppercase tracking-wider mb-5" style={{ color: "#888" }}>Module Toggles</p>
        {[
          { name: "Talent CRM", on: true },
          { name: "Casting & Bookings", on: true },
          { name: "Payments & Escrow", on: true },
          { name: "Academy", on: false },
          { name: "Pageant Engine", on: false },
          { name: "AI Studio", on: true },
        ].map((m) => (
          <div key={m.name} className="flex items-center justify-between py-2.5" style={{ borderBottom: "1px solid #f5f5f5" }}>
            <span className="text-sm" style={{ color: m.on ? "#111" : "#bbb" }}>{m.name}</span>
            <div className="w-10 h-6 rounded-full relative cursor-pointer transition-colors" style={{ background: m.on ? "#6366f1" : "#ddd" }}>
              <div className="absolute top-1 w-4 h-4 rounded-full bg-white transition-all" style={{ left: m.on ? 20 : 4 }} />
            </div>
          </div>
        ))}
      </div>
    </div>,

    // 3 — Data Isolation
    <div key="isolation" className="relative w-full h-full flex items-center justify-center">
      <div className="space-y-3 w-[340px]">
        {[
          { name: "Agency Alpha", color: "#6366f1" },
          { name: "Agency Beta", color: "#059669" },
          { name: "Agency Gamma", color: "#f59e0b" },
        ].map((a) => (
          <div key={a.name} className="rounded-2xl p-5 flex items-center gap-4" style={{ background: "#fff", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${a.color}15` }}>
              <Database className="w-5 h-5" style={{ color: a.color }} />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold" style={{ color: "#111" }}>{a.name}</p>
              <p className="text-[11px]" style={{ color: "#888" }}>Isolated schema</p>
            </div>
            <Shield className="w-4 h-4" style={{ color: a.color }} />
          </div>
        ))}
        <div className="text-center pt-2">
          <p className="text-[11px] font-semibold" style={{ color: "#059669" }}>Zero cross-tenant data access</p>
        </div>
      </div>
    </div>,

    // 4 — Blueprint Templates
    <div key="blueprints" className="relative w-full h-full flex items-center justify-center">
      <div className="w-[340px] rounded-2xl p-6" style={{ background: "#fff", boxShadow: "0 8px 40px rgba(0,0,0,0.08)" }}>
        <p className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: "#888" }}>Choose Blueprint</p>
        <div className="grid grid-cols-2 gap-2.5">
          {[
            { name: "Roster", code: "B1", color: "#6366f1" },
            { name: "Casting", code: "B2", color: "#8b5cf6" },
            { name: "Academy", code: "B5", color: "#059669" },
            { name: "Staffing", code: "B7", color: "#dc2626" },
            { name: "Influencer", code: "B4", color: "#f59e0b" },
            { name: "Production", code: "B6", color: "#0891b2" },
          ].map((b) => (
            <div key={b.code} className="rounded-xl p-3 text-center cursor-pointer transition-all hover:scale-[1.03]" style={{ background: `${b.color}10`, border: `1px solid ${b.color}25` }}>
              <p className="text-[11px] font-bold mb-0.5" style={{ color: b.color }}>{b.code}</p>
              <p className="text-xs font-semibold" style={{ color: "#333" }}>{b.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>,

    // 5 — Branded Communications
    <div key="comms" className="relative w-full h-full flex items-center justify-center">
      <div className="w-[340px] space-y-3">
        <div className="rounded-2xl p-5" style={{ background: "#fff", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "#6366f115" }}>
              <Mail className="w-4 h-4" style={{ color: "#6366f1" }} />
            </div>
            <div>
              <p className="text-xs font-bold" style={{ color: "#111" }}>Booking Confirmation</p>
              <p className="text-[10px]" style={{ color: "#888" }}>from: bookings@youragency.com</p>
            </div>
          </div>
          <div className="h-2 rounded w-full mb-1.5" style={{ background: "#f0f0f2" }} />
          <div className="h-2 rounded w-2/3" style={{ background: "#f0f0f2" }} />
        </div>
        <div className="rounded-2xl p-5" style={{ background: "#fff", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "#05966915" }}>
              <Send className="w-4 h-4" style={{ color: "#059669" }} />
            </div>
            <div>
              <p className="text-xs font-bold" style={{ color: "#111" }}>Invoice #1042</p>
              <p className="text-[10px]" style={{ color: "#888" }}>from: billing@youragency.com</p>
            </div>
          </div>
          <div className="h-2 rounded w-full mb-1.5" style={{ background: "#f0f0f2" }} />
          <div className="h-2 rounded w-1/2" style={{ background: "#f0f0f2" }} />
        </div>
        <div className="rounded-2xl p-5" style={{ background: "#fff", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "#f59e0b15" }}>
              <Smartphone className="w-4 h-4" style={{ color: "#f59e0b" }} />
            </div>
            <div>
              <p className="text-xs font-bold" style={{ color: "#111" }}>Push Notification</p>
              <p className="text-[10px]" style={{ color: "#888" }}>Your Agency: New casting call</p>
            </div>
          </div>
        </div>
      </div>
    </div>,
  ]

  return (
    <div
      className="absolute inset-0 flex items-center justify-center transition-all duration-500"
      style={{
        opacity: active ? 1 : 0,
        transform: active ? "translateY(0) scale(1)" : "translateY(30px) scale(0.95)",
        pointerEvents: active ? "auto" : "none",
      }}
    >
      {visuals[index]}
    </div>
  )
}

/* ───── ScrollFeatures component ───── */
function ScrollFeatures({ openAuth }: { openAuth: () => void }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-index"))
            if (!isNaN(idx)) setActiveIndex(idx)
          }
        })
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0.1 }
    )

    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section
      data-testid="section-features"
      aria-label="White-label features"
      className="relative py-20 lg:py-28"
      style={{ background: "#fff" }}
    >
      {/* Section header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <p
          className="text-[11px] font-bold uppercase tracking-[0.4em] mb-3"
          style={{ color: "#6366f1" }}
        >
          Platform Capabilities
        </p>
        <h2
          className="text-4xl sm:text-5xl font-bold leading-tight mb-4"
          style={{ color: "#111" }}
        >
          Everything white-labeled
          <br />
          <span style={{ color: "#555" }}>down to the last pixel.</span>
        </h2>
        <p
          className="text-sm max-w-lg mx-auto leading-relaxed"
          style={{ color: "#555" }}
        >
          From custom domains to branded invoices, every touchpoint reflects your agency — not ours.
        </p>
      </div>

      {/* Scroll-driven content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Left — scrollable text blocks */}
          <div className="lg:w-[45%]">
            {features.map((feature, i) => (
              <div
                key={i}
                ref={(el) => { sectionRefs.current[i] = el }}
                data-index={i}
                className="py-16 lg:py-24 first:pt-0 last:pb-0"
              >
                <p
                  className="text-sm font-bold uppercase tracking-wider mb-3"
                  style={{ color: feature.color }}
                >
                  {feature.label}
                </p>
                <h3
                  className="text-2xl sm:text-3xl font-bold leading-snug mb-4"
                  style={{ color: "#111" }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-[15px] leading-relaxed mb-6"
                  style={{ color: "#555" }}
                >
                  {feature.description}
                </p>
                <button
                  onClick={() => openAuth()}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white hover:scale-[1.02] transition-all duration-200"
                  style={{
                    background: feature.color,
                    boxShadow: `0 4px 16px ${feature.color}40`,
                  }}
                >
                  Get Started
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

          {/* Right — sticky visual */}
          <div className="hidden lg:block lg:w-[55%]">
            <div className="sticky top-32" style={{ height: "480px" }}>
              <div
                className="w-full h-full rounded-3xl relative overflow-hidden"
                style={{ background: "#f5f5f7" }}
              >
                {features.map((_, i) => (
                  <FeatureVisual key={i} index={i} active={i === activeIndex} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function WhiteLabelPage() {
  const { openAuth } = useAuthModal()
  return (
    <main className="min-h-screen" data-testid="page-white-label" aria-label="White-Label Platform page">
      {/* ───── HERO ───── */}
      <section
        data-testid="section-hero"
        aria-label="White-Label Platform hero"
        className="relative w-full overflow-hidden py-20 lg:py-28 pt-32"
        style={{ background: "#fff" }}
      >
        <div
          className="absolute z-[1] rounded-full pointer-events-none"
          style={{
            width: 800,
            height: 800,
            top: -200,
            right: -200,
            background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute z-[1] rounded-full pointer-events-none"
          style={{
            width: 600,
            height: 600,
            bottom: -100,
            left: -100,
            background: "radial-gradient(circle, rgba(139,92,246,0.04) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 text-center">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-7"
            style={{
              background: "rgba(99,102,241,0.08)",
              border: "1px solid rgba(99,102,241,0.15)",
              color: "#6366f1",
            }}
          >
            <Globe className="w-3 h-3" />
            White-Label Platform
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-6">
            <span style={{ color: "#111" }}>Your brand. Your domain.</span>
            <br />
            <span style={{ color: "#6366f1" }}>Our infrastructure.</span>
          </h1>

          <p
            className="text-[16px] leading-relaxed mb-8 max-w-lg mx-auto"
            style={{ color: "#555" }}
          >
            Launch a fully branded talent management platform under your own domain in minutes — custom branding, feature toggles, and complete data isolation built in.
          </p>

          <button
            data-testid="btn-hero-join-waitlist"
            aria-label="Join the Waitlist"
            onClick={() => openAuth()}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white hover:scale-[1.02] transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #6366f1, #4f46e5)",
              boxShadow: "0 4px 16px rgba(99,102,241,0.3)",
            }}
          >
            Join the Waitlist
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* ───── FEATURES — Scroll-driven ───── */}
      <ScrollFeatures openAuth={openAuth} />

      {/* ───── BRANDING CAPABILITIES ───── */}
      <section
        data-testid="section-branding"
        aria-label="Branding capabilities"
        className="py-24 lg:py-28"
        style={{ background: "#fff" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p
              className="text-[11px] font-bold uppercase tracking-[0.4em] mb-3"
              style={{ color: "#6366f1" }}
            >
              Customization Depth
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold leading-tight mb-4"
              style={{ color: "#111" }}
            >
              Make it truly yours
            </h2>
            <p
              className="text-sm max-w-lg mx-auto leading-relaxed"
              style={{ color: "#555" }}
            >
              Every aspect of the platform can be tailored to match your brand and workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {brandingCapabilities.map((cap) => {
              const CIcon = cap.icon
              return (
                <div
                  key={cap.title}
                  className="group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                  style={{
                    background: cap.color,
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      background: "rgba(255,255,255,0.5)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <CIcon className="w-6 h-6" style={{ color: "#111" }} />
                  </div>
                  <h3
                    className="text-[16px] font-bold mb-4"
                    style={{ color: "#111" }}
                  >
                    {cap.title}
                  </h3>
                  <div className="space-y-2.5">
                    {cap.items.map((item) => (
                      <div key={item} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#111" }} />
                        <span className="text-[13px] font-medium" style={{ color: "rgba(0,0,0,0.7)" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ───── DEPLOYMENT STEPS — Timeline style ───── */}
      <section
        data-testid="section-deployment"
        aria-label="Deployment process"
        className="py-24 lg:py-28"
        style={{ background: "#0f172a" }}
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p
              className="text-[11px] font-bold uppercase tracking-[0.4em] mb-3"
              style={{ color: "#818cf8" }}
            >
              Go Live in 7 Days
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-4 text-white">
              From signup to launch
            </h2>
            <p className="text-sm max-w-lg mx-auto leading-relaxed text-slate-400">
              A streamlined four-step process to get your branded platform up and running.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-[52px] left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-[2px]" style={{ background: "linear-gradient(90deg, #6366f1, #8b5cf6, #a78bfa, #6366f1)" }} />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {deploymentSteps.map((item) => {
                const StepIcon = item.icon
                const stepColors = ["#6366f1", "#8b5cf6", "#a78bfa", "#818cf8"]
                const color = stepColors[item.step - 1]
                return (
                  <div
                    key={item.step}
                    className="group relative text-center"
                  >
                    {/* Step number circle */}
                    <div className="relative z-10 mx-auto mb-6">
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center mx-auto transition-transform duration-300 group-hover:scale-110"
                        style={{
                          background: `linear-gradient(135deg, ${color}, ${color}cc)`,
                          boxShadow: `0 0 30px ${color}40`,
                        }}
                      >
                        <StepIcon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Card */}
                    <div
                      className="rounded-2xl p-6 transition-all duration-300 group-hover:-translate-y-1"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      <div
                        className="text-[11px] font-bold uppercase tracking-[0.4em] mb-2"
                        style={{ color }}
                      >
                        Step {item.step}
                      </div>
                      <h3 className="text-[17px] font-bold leading-snug mb-2 text-white">
                        {item.title}
                      </h3>
                      <p className="text-[13px] leading-relaxed text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ───── SUPPORTED AGENCY TYPES — Colorful cards ───── */}
      <section
        data-testid="section-agency-types"
        aria-label="Supported agency types"
        className="py-24 lg:py-28"
        style={{ background: "#fff" }}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p
              className="text-[11px] font-bold uppercase tracking-[0.4em] mb-3"
              style={{ color: "#6366f1" }}
            >
              One Platform, Every Agency
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold leading-tight mb-4"
              style={{ color: "#111" }}
            >
              Built for every type
              <br />
              <span style={{ color: "#555" }}>of talent business.</span>
            </h2>
            <p
              className="text-sm max-w-lg mx-auto leading-relaxed"
              style={{ color: "#555" }}
            >
              Each agency type gets a pre-configured blueprint with the right modules, roles, and workflows out of the box.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {tenantTypes.map((type) => (
              <div
                key={type.name}
                className="group relative rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-2 cursor-pointer"
                style={{ background: type.color }}
              >

                <div className="p-6">
                  {/* Icon circle */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                    style={{ background: "rgba(255,255,255,0.45)", backdropFilter: "blur(8px)" }}
                  >
                    <Building2 className="w-5 h-5" style={{ color: "#111" }} />
                  </div>

                  <h3 className="text-[16px] font-bold mb-1.5" style={{ color: "#111" }}>
                    {type.name}
                  </h3>
                  <p className="text-[12px] font-semibold mb-4" style={{ color: "rgba(0,0,0,0.55)" }}>
                    {type.blueprint}
                  </p>

                  {/* Hover reveal */}
                  <div className="flex items-center gap-1.5 text-[13px] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: "#111" }}>
                    Explore
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                  </div>
                </div>

                {/* Background glow on hover */}
                <div
                  className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── CTA — Gradient dark ───── */}
      <section
        data-testid="section-cta"
        aria-label="Call to action"
        className="relative py-24 lg:py-28 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #4f46e5 0%, #6366f1 40%, #8b5cf6 100%)" }}
      >
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)", transform: "translate(-50%, -50%)" }} />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)", transform: "translate(40%, 40%)" }} />

        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Ready to launch your branded platform?
          </h2>
          <p className="text-sm leading-relaxed mb-8 text-white/70">
            Join hundreds of agencies running their entire operation on a platform that looks and feels 100% theirs.
          </p>
          <button
            data-testid="btn-cta-join-waitlist"
            aria-label="Join the Waitlist"
            onClick={() => openAuth()}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold hover:scale-[1.02] transition-all duration-200"
            style={{
              background: "#fff",
              color: "#4f46e5",
              boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
            }}
          >
            Join the Waitlist
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </main>
  )
}
