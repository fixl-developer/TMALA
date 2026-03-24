"use client"

import React, { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { useAuthModal } from "@/components/auth-modal"
import {
  Sparkles,
  FileText,
  Image as ImageIcon,
  Mic,
  Target,
  BarChart3,
  Package,
  CheckCircle2,
  ArrowRight,
  Zap,
  Shield,
  Play,
  TrendingUp,
  Lock,
  Palette,
  Download,
  Eye,
  RefreshCw,
  BookOpen,
} from "lucide-react"

const VIOLET = "#7C3AED"

// ─── Studio Nav Tabs ───────────────────────────────────────────────────────────
const studioTabs = [
  { id: "portfolio", label: "Portfolio Builder", icon: FileText, color: "text-violet-400", accent: "#7C3AED" },
  { id: "medialab", label: "Media Lab", icon: ImageIcon, color: "text-sky-400", accent: "#0EA5E9" },
  { id: "coach", label: "Audition Coach", icon: Mic, color: "text-rose-400", accent: "#F43F5E" },
  { id: "applications", label: "Application Assistant", icon: Target, color: "text-amber-400", accent: "#F59E0B" },
  { id: "brandkit", label: "Brand Kit", icon: Palette, color: "text-emerald-400", accent: "#10B981" },
  { id: "insights", label: "Growth Insights", icon: BarChart3, color: "text-cyan-400", accent: "#06B6D4" },
]

// ─── Reusable section wrapper ──────────────────────────────────────────────────
function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── Section Label ─────────────────────────────────────────────────────────────
function SectionLabel({ icon: Icon, label, color, accentHex }: { icon: any; label: string; color: string; accentHex: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6"
      style={{ backgroundColor: accentHex + "15", borderColor: accentHex + "35" }}>
      <Icon className={`h-3.5 w-3.5 ${color}`} />
      <span className={`font-bebas text-xs uppercase tracking-[0.3em] ${color}`}>{label}</span>
    </div>
  )
}

// ─── Mock UI: Profile Completeness ────────────────────────────────────────────
function ProfileCompletenessCard() {
  const items = [
    { label: "Headshot", done: true },
    { label: "Full-body shot", done: true },
    { label: "Intro video", done: false },
    { label: "Casting bio", done: true },
    { label: "Measurements", done: false },
    { label: "Skill tags", done: true },
  ]
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-semibold text-white">Profile Score</span>
        <span className="font-bebas text-2xl text-violet-400">72 / 100</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full mb-5 overflow-hidden">
        <div className="h-full rounded-full bg-gradient-to-r from-violet-500 to-purple-400" style={{ width: "72%" }} />
      </div>
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2.5">
            {item.done
              ? <CheckCircle2 className="h-4 w-4 text-violet-400 shrink-0" />
              : <div className="h-4 w-4 rounded-full border-2 border-white/20 shrink-0" />
            }
            <span className={`text-sm ${item.done ? "text-white/80" : "text-white/65 line-through"}`}>{item.label}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        <button data-testid="btn-fix-my-profile" aria-label="Fix my profile" className="flex-1 py-2 rounded-xl text-xs font-semibold text-black bg-violet-400 hover:bg-violet-300 transition-colors">
          Fix my profile
        </button>
        <button data-testid="btn-preview" aria-label="Preview" className="py-2 px-3 rounded-xl text-xs font-semibold text-violet-400 border border-violet-500/30 hover:bg-violet-500/10 transition-colors">
          Preview
        </button>
      </div>
    </div>
  )
}

// ─── Mock UI: Bio Generator ────────────────────────────────────────────────────
function BioGeneratorCard() {
  const tones = ["Professional", "Bold", "Elegant", "Minimal"]
  const [active, setActive] = useState("Professional")
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-4">
        <FileText className="h-4 w-4 text-violet-400" />
        <span className="text-sm font-semibold text-white">Bio Studio</span>
        <span className="ml-auto text-[10px] px-2 py-0.5 rounded bg-violet-500/20 text-violet-300 font-semibold">AI</span>
      </div>
      <div className="flex gap-1.5 mb-4 flex-wrap">
        {tones.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            data-testid={`btn-tone-${t.toLowerCase()}`}
            aria-label={`Select ${t} tone`}
            className={`text-xs px-2.5 py-1 rounded-lg border transition-all ${active === t ? "bg-violet-500 border-violet-400 text-white" : "border-white/15 text-white/70 hover:border-white/30"}`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="rounded-xl bg-black/30 border border-white/8 p-3 text-xs text-white/60 leading-relaxed mb-3">
        Priya is a dynamic, multi-faceted talent with 5+ years in runway and editorial modeling. She combines classical training with contemporary adaptability — the ideal choice for premium brands, pageants, and high-fashion campaigns.
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[11px] text-white/65">300 chars · Casting Bio</span>
        <button data-testid="btn-regenerate" aria-label="Regenerate bio" className="ml-auto flex items-center gap-1.5 text-xs text-violet-400 hover:text-violet-300">
          <RefreshCw className="h-3 w-3" /> Regenerate
        </button>
      </div>
    </div>
  )
}

// ─── Mock UI: Media Quality Score ─────────────────────────────────────────────
function MediaQualityCard() {
  const scores = [
    { label: "Framing", score: 88, color: "bg-emerald-500" },
    { label: "Lighting", score: 62, color: "bg-amber-500" },
    { label: "Sharpness", score: 95, color: "bg-emerald-500" },
    { label: "Background", score: 44, color: "bg-rose-500" },
    { label: "Face visibility", score: 91, color: "bg-emerald-500" },
  ]
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <ImageIcon className="h-4 w-4 text-sky-400" />
          <span className="text-sm font-semibold text-white">Photo Quality Score</span>
        </div>
        <div className="text-right">
          <div className="font-bebas text-2xl text-sky-400">76</div>
          <div className="text-[10px] text-white/65">/ 100</div>
        </div>
      </div>
      <div className="space-y-3 mb-4">
        {scores.map((s) => (
          <div key={s.label}>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-white/75">{s.label}</span>
              <span className="text-white/70">{s.score}</span>
            </div>
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div className={`h-full rounded-full ${s.color}`} style={{ width: `${s.score}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-lg bg-amber-500/10 border border-amber-500/20 p-2.5 text-xs text-amber-300">
        ↑ Fix background clutter (+18 pts) — see retake checklist
      </div>
    </div>
  )
}

// ─── Mock UI: Self-tape Coach ──────────────────────────────────────────────────
function SelfTapeCard() {
  const moments = [
    { time: "0:12", type: "Eye line off", severity: "warn" },
    { time: "0:31", type: "Great energy peak", severity: "good" },
    { time: "1:04", type: "Pace too fast", severity: "warn" },
    { time: "1:38", type: "Strong close", severity: "good" },
  ]
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-4">
        <Play className="h-4 w-4 text-rose-400" />
        <span className="text-sm font-semibold text-white">Self-Tape Analysis</span>
        <span className="ml-auto text-[10px] text-white/65">2m 14s</span>
      </div>
      {/* Fake waveform */}
      <div className="h-10 rounded-xl bg-black/30 border border-white/8 mb-4 overflow-hidden flex items-center px-3 gap-0.5">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="flex-1 rounded-full bg-rose-500/60"
            style={{ height: `${Math.sin(i * 0.6) * 50 + 55}%` }}
          />
        ))}
      </div>
      <div className="space-y-2">
        {moments.map((m) => (
          <div key={m.time} className={`flex items-center gap-3 p-2 rounded-lg ${m.severity === "good" ? "bg-emerald-500/8" : "bg-amber-500/8"}`}>
            <span className="text-[11px] font-mono text-white/70">{m.time}</span>
            <span className={`text-xs flex-1 ${m.severity === "good" ? "text-emerald-400" : "text-amber-400"}`}>{m.type}</span>
            {m.severity === "good"
              ? <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
              : <Zap className="h-3.5 w-3.5 text-amber-400 shrink-0" />
            }
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Mock UI: Readiness Check ──────────────────────────────────────────────────
function ReadinessCard() {
  const items = [
    { label: "Eligibility", status: "pass" },
    { label: "Headshot on file", status: "pass" },
    { label: "Intro video", status: "fail" },
    { label: "Measurements", status: "pass" },
    { label: "Application answers", status: "warn" },
  ]
  const statusColor: Record<string, string> = {
    pass: "text-emerald-400 bg-emerald-500/10",
    fail: "text-rose-400 bg-rose-500/10",
    warn: "text-amber-400 bg-amber-500/10",
  }
  const statusLabel: Record<string, string> = { pass: "Ready", fail: "Missing", warn: "Needs work" }
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-2">
        <Target className="h-4 w-4 text-amber-400" />
        <span className="text-sm font-semibold text-white">Match Readiness Check</span>
      </div>
      <div className="text-xs text-white/65 mb-4">Casting Call: Elite Runway — Mumbai Edition</div>
      <div className="flex items-center gap-3 mb-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
        <div className="font-bebas text-4xl text-amber-400">68%</div>
        <div>
          <div className="text-xs font-semibold text-amber-300">Medium competitiveness</div>
          <div className="text-[11px] text-white/65">2 fixes will put you in top 20%</div>
        </div>
      </div>
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2.5">
            <span className={`text-[10px] px-2 py-0.5 rounded font-semibold ${statusColor[item.status]}`}>
              {statusLabel[item.status]}
            </span>
            <span className="text-xs text-white/60">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Mock UI: Export Packs ─────────────────────────────────────────────────────
function ExportPacksCard() {
  const packs = [
    { name: "Casting Pack", desc: "Headshot + slate + resume + intro clip", icon: "🎬", color: "border-violet-500/30 bg-violet-500/8" },
    { name: "Pageant Pack", desc: "Walk clip + Q&A highlights + achievements", icon: "👑", color: "border-amber-500/30 bg-amber-500/8" },
    { name: "Brand Pack", desc: "UGC reel + stats + brand-safe profile", icon: "✨", color: "border-emerald-500/30 bg-emerald-500/8" },
  ]
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-4">
        <Package className="h-4 w-4 text-violet-400" />
        <span className="text-sm font-semibold text-white">Export Packs</span>
        <span className="ml-auto text-[10px] text-white/65">Pro+</span>
      </div>
      <div className="space-y-2.5">
        {packs.map((pack) => (
          <div key={pack.name} className={`flex items-center gap-3 p-3 rounded-xl border ${pack.color}`}>
            <span className="text-lg">{pack.icon}</span>
            <div className="flex-1">
              <div className="text-xs font-bold text-white">{pack.name}</div>
              <div className="text-[11px] text-white/70">{pack.desc}</div>
            </div>
            <div className="flex gap-1.5">
              <button data-testid={`btn-preview-${pack.name.toLowerCase().replace(/\s+/g, "-")}`} aria-label={`Preview ${pack.name}`} className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <Eye className="h-3 w-3 text-white/70" />
              </button>
              <button data-testid={`btn-download-${pack.name.toLowerCase().replace(/\s+/g, "-")}`} aria-label={`Download ${pack.name}`} className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <Download className="h-3 w-3 text-white/70" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Mock UI: Brand Kit ────────────────────────────────────────────────────────
function BrandKitCard() {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-4">
        <Palette className="h-4 w-4 text-emerald-400" />
        <span className="text-sm font-semibold text-white">Brand Identity</span>
      </div>
      <div className="space-y-3">
        <div>
          <div className="text-[10px] text-white/65 uppercase tracking-wider mb-1.5">Persona Tags</div>
          <div className="flex flex-wrap gap-1.5">
            {["High-fashion", "Editorial", "Brand-safe", "International"].map(tag => (
              <span key={tag} className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/25 text-emerald-300">{tag}</span>
            ))}
          </div>
        </div>
        <div>
          <div className="text-[10px] text-white/65 uppercase tracking-wider mb-1.5">AI-Generated Tagline</div>
          <div className="text-xs text-white/70 italic">"Where elegance meets ambition — a talent crafted for global stages."</div>
        </div>
        <div>
          <div className="text-[10px] text-white/65 uppercase tracking-wider mb-1.5">Outreach Template</div>
          <div className="rounded-lg bg-black/30 border border-white/8 p-2.5 text-[11px] text-white/75 leading-relaxed">
            Hi [Brand], I&apos;m Priya — a Mumbai-based model available for Q2 campaigns. Attaching my Brand Pack for review...
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Mock UI: Growth Funnel ────────────────────────────────────────────────────
function GrowthInsightsCard() {
  const stages = [
    { label: "Portfolio Views", value: 248, width: "100%", color: "bg-cyan-500" },
    { label: "Shortlisted", value: 71, width: "29%", color: "bg-sky-500" },
    { label: "Callbacks", value: 18, width: "7%", color: "bg-indigo-500" },
    { label: "Selected", value: 6, width: "2%", color: "bg-violet-500" },
  ]
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-4">
        <BarChart3 className="h-4 w-4 text-cyan-400" />
        <span className="text-sm font-semibold text-white">Conversion Funnel</span>
        <span className="ml-auto text-[10px] text-white/65">Last 30 days</span>
      </div>
      <div className="space-y-3 mb-4">
        {stages.map((s) => (
          <div key={s.label}>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-white/75">{s.label}</span>
              <span className="text-white/70 font-semibold">{s.value}</span>
            </div>
            <div className="h-2 bg-white/8 rounded-full overflow-hidden">
              <div className={`h-full rounded-full ${s.color}`} style={{ width: s.width }} />
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-start gap-2 p-2.5 rounded-lg bg-cyan-500/8 border border-cyan-500/20">
        <TrendingUp className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
        <span className="text-xs text-cyan-300">Adding an intro video could increase your shortlist rate by ~40%</span>
      </div>
    </div>
  )
}

// ─── Plan Tier Cards ───────────────────────────────────────────────────────────
const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    color: "border-white/10",
    highlight: false,
    features: [
      "Profile scan + completeness score",
      "Bio generator (basic)",
      "1 image generation / week",
      "Photo quality scoring",
      "AI assets library",
    ],
    locked: ["Self-tape coach", "Export packs", "Video generation", "Brand kit"],
    cta: "Get Started Free",
    ctaStyle: "bg-white/10 text-white hover:bg-white/15",
  },
  {
    name: "Pro",
    price: "₹1,499",
    period: "per month",
    color: "border-violet-500/50",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Everything in Free",
      "Bio + Resume PDF export",
      "Self-tape coach (60 min/mo)",
      "Application readiness check",
      "Export packs (Casting/Pageant/Brand)",
      "Image packs (50 generations)",
      "Provider choice: Standard AI",
    ],
    locked: ["Video generation", "Premium AI models"],
    cta: "Start Pro Trial",
    ctaStyle: "bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:from-violet-500 hover:to-purple-500",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "per agency",
    color: "border-amber-500/30",
    highlight: false,
    features: [
      "Everything in Pro",
      "Premium AI (Gemini Pro / GPT)",
      "Video generation packs",
      "Human review queue",
      "Audit log retention (365 days)",
      "Custom brand voice templates",
      "Tenant-level policy controls",
      "Dedicated support",
    ],
    locked: [],
    cta: "Talk to Sales",
    ctaStyle: "bg-amber-500 text-black hover:bg-amber-400",
  },
]

// ─── Main Component ────────────────────────────────────────────────────────────
export function AIFeaturesSectionsAfterHero() {
  const { openAuth } = useAuthModal()
  const [activeTab, setActiveTab] = useState("portfolio")

  return (
    <div className="text-white" style={{ background: "#07000f" }}>

      {/* ── Studio Tab Navigation ─────────────────────────────────────────── */}
      <div className="sticky top-16 z-30 border-b border-white/8 bg-black/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-none py-1">
            {studioTabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  data-testid={`btn-tab-${tab.id}`}
                  aria-label={`Switch to ${tab.label}`}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-200 shrink-0 ${
                    isActive
                      ? `${tab.color} bg-white/8`
                      : "text-white/60 hover:text-white/90 hover:bg-white/5"
                  }`}
                >
                  <Icon className={`h-3.5 w-3.5 ${isActive ? tab.color : ""}`} />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* ── 1. Portfolio Builder ───────────────────────────────────────────── */}
      <section id="portfolio" className="relative py-24 lg:py-32 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full blur-[120px] opacity-15 pointer-events-none"
          style={{ background: `radial-gradient(circle, ${VIOLET}, transparent)` }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <FadeIn>
              <SectionLabel icon={FileText} label="Portfolio Builder" color="text-violet-400" accentHex={VIOLET} />
              <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight mb-5">
                Your portfolio,
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-300">
                  perfected by AI
                </span>
              </h2>
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                AI scans your profile, detects every missing asset, writes your bio in 4 tones, and packages your work into ready-to-send Casting, Pageant, and Brand packs — in seconds.
              </p>
              <div className="space-y-3 mb-10">
                {[
                  "Profile completeness score with one-click fix plan",
                  "Bio generator: Professional · Bold · Elegant · Minimal",
                  "Casting Pack / Pageant Pack / Brand Pack exports",
                  "Multi-language bio support",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-violet-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-white/85">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-3">
                <button onClick={() => openAuth()} data-testid="btn-try-portfolio-builder" aria-label="Try Portfolio Builder" className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 hover:scale-105 transition-all shadow-[0_8px_24px_rgba(124,58,237,0.4)]">
                  <Sparkles className="h-4 w-4" /> Try Portfolio Builder
                </button>
              </div>
            </FadeIn>

            <FadeIn delay={0.15} className="space-y-4">
              <ProfileCompletenessCard />
              <BioGeneratorCard />
            </FadeIn>
          </div>

          {/* Export packs row */}
          <FadeIn delay={0.2} className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">One-click Export Packs</h3>
              <p className="text-sm text-white/70">AI curates the perfect assets for each submission type</p>
            </div>
            <ExportPacksCard />
          </FadeIn>
        </div>
      </section>

      {/* ── 2. Media Lab ──────────────────────────────────────────────────── */}
      <section id="medialab" className="relative py-24 lg:py-32 border-b border-white/5 overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] opacity-10 pointer-events-none bg-sky-500" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <FadeIn delay={0.1} className="lg:order-2">
              <SectionLabel icon={ImageIcon} label="Media Lab" color="text-sky-400" accentHex="#0EA5E9" />
              <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight mb-5">
                Every photo and video,
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">
                  scored and tagged
                </span>
              </h2>
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                AI scores every media item (0–100) across framing, lighting, sharpness, and clarity. Auto-tags detect your skills, style, and media type — making your portfolio infinitely searchable.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Photo & video quality scores with retake checklists",
                  "Auto-tagging: runway walk, headshot, editorial, commercial",
                  "Rights metadata + watermark controls",
                  "Full versioning — original always preserved",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-sky-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-white/85">{item}</span>
                  </div>
                ))}
              </div>
              {/* Auto-tag chips */}
              <div className="flex flex-wrap gap-2">
                {["Headshot", "Editorial", "Runway walk", "Commercial", "Full-body", "High-fashion"].map(tag => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full bg-sky-500/15 border border-sky-500/25 text-sky-300">{tag}</span>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.05} className="lg:order-1">
              <MediaQualityCard />
              <div className="mt-4 rounded-2xl bg-white/3 border border-white/8 p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="h-4 w-4 text-emerald-400" />
                  <span className="text-sm font-semibold text-white">Rights & Safety</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: "Ownership", value: "Verified" },
                    { label: "Usage scope", value: "Commercial" },
                    { label: "Expiry", value: "Dec 2026" },
                    { label: "Watermark", value: "On" },
                  ].map((r) => (
                    <div key={r.label} className="flex flex-col px-3 py-2 rounded-lg bg-white/5">
                      <span className="text-[10px] text-white/65">{r.label}</span>
                      <span className="text-xs text-white/70 font-medium">{r.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── 3. Audition Coach ─────────────────────────────────────────────── */}
      <section id="coach" className="relative py-24 lg:py-32 border-b border-white/5 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full blur-[80px] opacity-10 pointer-events-none bg-rose-500" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <FadeIn>
              <SectionLabel icon={Mic} label="Audition Coach" color="text-rose-400" accentHex="#F43F5E" />
              <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight mb-5">
                Practice smarter,
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-300">
                  win more callbacks
                </span>
              </h2>
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                Upload your self-tape and get timestamped AI feedback on pacing, eye line, energy, and diction. Practice Q&A drills for pageant rounds and get 7–30 day training plans with auto reminders.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Self-tape analysis with timestamp moment markers",
                  "Pageant Q&A drills (STAR, PREP frameworks)",
                  "Mock interviews — timed with confidence scoring",
                  "7 / 14 / 30-day practice plans with reminders",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-rose-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-white/85">{item}</span>
                  </div>
                ))}
              </div>
              {/* Practice plan mini calendar */}
              <div className="grid grid-cols-7 gap-1.5">
                {["M","T","W","T","F","S","S"].map((d, i) => (
                  <div key={i} className="text-center text-[10px] text-white/65">{d}</div>
                ))}
                {Array.from({ length: 14 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-7 rounded-lg text-[11px] flex items-center justify-center font-medium ${
                      [0,2,4,7,9,11].includes(i)
                        ? "bg-rose-500/30 border border-rose-500/40 text-rose-300"
                        : "bg-white/5 text-white/20"
                    }`}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <SelfTapeCard />
              <div className="mt-4 rounded-2xl bg-white/3 border border-white/8 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="h-4 w-4 text-rose-400" />
                  <span className="text-sm font-semibold text-white">Q&A Drill Results</span>
                </div>
                {[
                  { metric: "Confidence", score: 82 },
                  { metric: "Conciseness", score: 67 },
                  { metric: "Structure", score: 90 },
                ].map((m) => (
                  <div key={m.metric} className="mb-2">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-white/75">{m.metric}</span>
                      <span className="text-white/70">{m.score}/100</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full rounded-full bg-rose-400" style={{ width: `${m.score}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── 4. Application Assistant ───────────────────────────────────────── */}
      <section id="applications" className="relative py-24 lg:py-32 border-b border-white/5 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full blur-[90px] opacity-10 pointer-events-none bg-amber-500" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <FadeIn delay={0.1} className="lg:order-2">
              <SectionLabel icon={Target} label="Application Assistant" color="text-amber-400" accentHex="#F59E0B" />
              <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight mb-5">
                Know your odds
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-300">
                  before you apply
                </span>
              </h2>
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                AI checks your match readiness before you submit — flags missing docs, writes application answers in your voice, and flags suspicious opportunities before you apply.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Eligibility + readiness check with band prediction",
                  "Smart answer builder with tone and length controls",
                  "Submission optimizer — orders assets, checks formats",
                  "Scam & risk protection — flags unusual terms",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-white/85">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-rose-500/10 border border-rose-500/20">
                <Shield className="h-5 w-5 text-rose-400 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-rose-300">Scam Protection Active</div>
                  <div className="text-[11px] text-white/70">Unusual payment term detected in this listing</div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.05} className="lg:order-1">
              <ReadinessCard />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── 5. Brand Kit + Growth ──────────────────────────────────────────── */}
      <section id="brandkit" className="relative py-24 lg:py-32 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <div className="flex justify-center gap-3 mb-4">
              <SectionLabel icon={Palette} label="Brand Kit" color="text-emerald-400" accentHex="#10B981" />
              <SectionLabel icon={BarChart3} label="Growth Insights" color="text-cyan-400" accentHex="#06B6D4" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight mb-4">
              Treat yourself as a brand.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-300">
                Then grow it with data.
              </span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              AI builds your personal brand identity, writes sponsor outreach scripts, and shows you exactly which portfolio changes will improve your shortlist rate.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <FadeIn delay={0.05}><BrandKitCard /></FadeIn>
            <FadeIn delay={0.1}><GrowthInsightsCard /></FadeIn>
          </div>
        </div>
      </section>

      {/* ── 6. Pricing / Plans ────────────────────────────────────────────── */}
      <section id="pricing" className="relative py-24 lg:py-32 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.08), transparent 60%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <p className="font-bebas text-sm uppercase tracking-[0.35em] text-violet-400 mb-3">AI Studio Credits</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Start free. Scale as you grow.
            </h2>
            <p className="text-lg text-white/75 max-w-xl mx-auto">
              Your agency controls what talents can access. Credits are transparent — no hidden costs, no surprises.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <FadeIn key={plan.name} delay={i * 0.1}>
                <div className={`relative h-full flex flex-col rounded-2xl border p-7 ${plan.color} ${plan.highlight ? "bg-violet-500/5 shadow-[0_0_60px_rgba(124,58,237,0.15)]" : "bg-white/3"}`}>
                  {plan.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-violet-500 text-white text-[11px] font-bold uppercase tracking-wider">
                      {plan.badge}
                    </div>
                  )}
                  <div className="mb-6">
                    <div className="text-sm font-semibold text-white/75 mb-1 uppercase tracking-wider">{plan.name}</div>
                    <div className="flex items-end gap-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      {plan.period !== "custom" && <span className="text-sm text-white/65 mb-1">{plan.period}</span>}
                    </div>
                  </div>

                  <div className="space-y-2.5 mb-6 flex-1">
                    {plan.features.map((f, fi) => (
                      <div key={fi} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-sm text-white/85">{f}</span>
                      </div>
                    ))}
                    {plan.locked.map((f, fi) => (
                      <div key={fi} className="flex items-start gap-2.5 opacity-40">
                        <Lock className="h-4 w-4 text-white/65 shrink-0 mt-0.5" />
                        <span className="text-sm text-white/70">{f}</span>
                      </div>
                    ))}
                  </div>

                  <button onClick={() => openAuth()} data-testid={`btn-plan-${plan.name.toLowerCase()}`} aria-label={plan.cta} className={`w-full py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:scale-[1.02] ${plan.ctaStyle}`}>
                    {plan.cta}
                  </button>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3} className="mt-10 text-center">
            <p className="text-xs text-white/60">1 credit = ₹1 · Tenant sets talent retail price · 70/30 platform/tenant rev-share · No lock-in</p>
          </FadeIn>
        </div>
      </section>

      {/* ── 7. Final CTA ──────────────────────────────────────────────────── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(124,58,237,0.18), transparent 60%)" }} />
        <div className="relative max-w-3xl mx-auto text-center px-4">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/15 border border-violet-500/30 mb-6">
              <Sparkles className="h-3.5 w-3.5 text-violet-400" />
              <span className="font-bebas text-xs uppercase tracking-[0.35em] text-violet-400">AI Studio · Early Access</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
              The most powerful AI suite
              <br />built for talent professionals
            </h2>
            <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
              Join the waitlist and be first to access Portfolio Builder, Audition Coach, Media Lab, and every AI Studio tool when we launch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => openAuth()} data-testid="btn-join-waitlist" aria-label="Join the Waitlist" className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold text-sm hover:from-violet-500 hover:to-purple-500 hover:scale-105 transition-all shadow-[0_8px_32px_rgba(124,58,237,0.4)]">
                <Sparkles className="h-4 w-4" />
                Join the Waitlist
                <ArrowRight className="h-4 w-4" />
              </button>
              <Link href="/">
                <button data-testid="btn-view-platform-overview" aria-label="View Platform Overview" className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/15 text-white/60 text-sm font-medium hover:text-white hover:border-white/30 transition-all">
                  View Platform Overview
                </button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
