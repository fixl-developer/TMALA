"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Sparkles,
  Image,
  FileText,
  Zap,
  Target,
  ArrowRight,
  Bot,
  Shield,
  BarChart3,
  Workflow,
} from "lucide-react"
import { useAuthModal } from "@/components/auth-modal"

const aiFeatures = [
  {
    icon: Image,
    title: "Comp Card Generator",
    description: "Auto-generate print-ready comp cards, look-books, and digitals from talent profiles — branded to your agency in seconds.",
    color: "text-violet-700",
    accent: "#7c3aed",
    bg: "bg-violet-50",
    border: "border-violet-200",
    iconBg: "bg-violet-100",
  },
  {
    icon: Sparkles,
    title: "Photo Enhancement",
    description: "Intelligent retouching, background removal, lighting correction and skin tone balancing on portfolio images — no Photoshop needed.",
    color: "text-amber-700",
    accent: "#d97706",
    bg: "bg-amber-50",
    border: "border-amber-200",
    iconBg: "bg-amber-100",
  },
  {
    icon: FileText,
    title: "Bio & Profile Writing",
    description: "AI writes compelling, professional bios, agency descriptions, and talent summaries tailored to casting directors and brand partners.",
    color: "text-cyan-700",
    accent: "#0891b2",
    bg: "bg-cyan-50",
    border: "border-cyan-200",
    iconBg: "bg-cyan-100",
  },
  {
    icon: Target,
    title: "Smart Talent Matching",
    description: "AI matches the right talent to the right opportunity — reading casting briefs and cross-referencing availability, stats, and past performance.",
    color: "text-emerald-700",
    accent: "#059669",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    iconBg: "bg-emerald-100",
  },
  {
    icon: Bot,
    title: "AI Application Screening",
    description: "Automatically pre-screen talent applications against brief requirements. Only verified, matching profiles surface for your team to review.",
    color: "text-rose-700",
    accent: "#e11d48",
    bg: "bg-rose-50",
    border: "border-rose-200",
    iconBg: "bg-rose-100",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "94 automation rules triggered by events, time, or state changes. Auto-invoicing, escrow creation, approval chains, SLA alerts — all hands-free.",
    color: "text-indigo-700",
    accent: "#4f46e5",
    bg: "bg-indigo-50",
    border: "border-indigo-200",
    iconBg: "bg-indigo-100",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description: "WES (Workflow Efficiency Score) tracks KPI targets per agency type and surfaces AI-driven recommendations to improve speed and cash flow.",
    color: "text-sky-700",
    accent: "#0284c7",
    bg: "bg-sky-50",
    border: "border-sky-200",
    iconBg: "bg-sky-100",
  },
  {
    icon: Shield,
    title: "Anomaly Detection",
    description: "AI flags suspicious scoring patterns in pageants, unusual payment activity, and policy violations — before they become disputes.",
    color: "text-orange-700",
    accent: "#ea580c",
    bg: "bg-orange-50",
    border: "border-orange-200",
    iconBg: "bg-orange-100",
  },
]

const terminalData = [
  {
    tab: "comp card generator",
    comment: "// AI Studio · Comp Card Engine v4",
    lines: [
      { prefix: "→", text: "Scanning talent profile: Priya Kapoor...", color: "text-white/70" },
      { prefix: "✓", text: "Profile data extracted (stats, measurements, portfolio)", color: "text-violet-400" },
      { prefix: "→", text: "Generating comp card layout: Agency Classic Template...", color: "text-white/70" },
      { prefix: "✓", text: "Photos selected: 4 best-fit images (AI scored)", color: "text-violet-400" },
      { prefix: "→", text: "Applying agency branding & export settings...", color: "text-white/70" },
      { prefix: "✓", text: "Comp cards ready: Priya_K_compcard.pdf, +2 variants", color: "text-violet-400" },
      { prefix: "▊", text: "", color: "text-violet-400 animate-pulse" },
    ],
    statRight: { label: "Cards generated", value: "2,847", color: "#7c3aed", border: "border-violet-200" },
    statLeft: { label: "Avg generation time", value: "4.2s", color: "#7c3aed", border: "border-violet-200" },
  },
  {
    tab: "photo enhancement",
    comment: "// AI Studio · Photo Enhancement Engine",
    lines: [
      { prefix: "→", text: "Loading portfolio: 24 images queued...", color: "text-white/70" },
      { prefix: "✓", text: "Lighting correction applied to 24/24 images", color: "text-amber-400" },
      { prefix: "→", text: "Removing backgrounds on 8 selected photos...", color: "text-white/70" },
      { prefix: "✓", text: "Background removal complete. Skin tone balanced.", color: "text-amber-400" },
      { prefix: "→", text: "Upscaling low-res images to 4K...", color: "text-white/70" },
      { prefix: "✓", text: "All 24 images enhanced. Quality score: 94 avg.", color: "text-amber-400" },
      { prefix: "▊", text: "", color: "text-amber-400 animate-pulse" },
    ],
    statRight: { label: "Photos enhanced", value: "18.4K", color: "#d97706", border: "border-amber-200" },
    statLeft: { label: "Avg quality boost", value: "+31%", color: "#d97706", border: "border-amber-200" },
  },
  {
    tab: "bio & profile writing",
    comment: "// AI Studio · Bio Writer v3",
    lines: [
      { prefix: "→", text: "Reading profile data: Carlos Rivera...", color: "text-white/70" },
      { prefix: "✓", text: "Experience, skills, and achievements parsed", color: "text-cyan-400" },
      { prefix: "→", text: "Generating bio in 4 tones: Professional, Creative, Casual, Formal...", color: "text-white/70" },
      { prefix: "✓", text: "4 bio variants written (128 words avg)", color: "text-cyan-400" },
      { prefix: "→", text: "Tailoring for casting director audience...", color: "text-white/70" },
      { prefix: "✓", text: "Final bio approved. Agency description updated.", color: "text-cyan-400" },
      { prefix: "▊", text: "", color: "text-cyan-400 animate-pulse" },
    ],
    statRight: { label: "Bios generated", value: "6,200+", color: "#0891b2", border: "border-cyan-200" },
    statLeft: { label: "Time saved per bio", value: "45min", color: "#0891b2", border: "border-cyan-200" },
  },
  {
    tab: "talent matching",
    comment: "// AI Studio · Smart Matching Engine",
    lines: [
      { prefix: "→", text: "Analyzing 847 talent profiles...", color: "text-white/70" },
      { prefix: "✓", text: "3 exact matches found for Brief #2841", color: "text-emerald-400" },
      { prefix: "→", text: "Cross-referencing availability & location...", color: "text-white/70" },
      { prefix: "✓", text: "All 3 talents available. Shortlist generated.", color: "text-emerald-400" },
      { prefix: "→", text: "Ranking by past performance & client fit...", color: "text-white/70" },
      { prefix: "✓", text: "Top match: Sarah_J (98.2% fit). Escrow triggered.", color: "text-emerald-400" },
      { prefix: "▊", text: "", color: "text-emerald-400 animate-pulse" },
    ],
    statRight: { label: "Matching accuracy", value: "94.7%", color: "#059669", border: "border-emerald-200" },
    statLeft: { label: "Time saved per booking", value: "3.2h", color: "#059669", border: "border-emerald-200" },
  },
]

export function AIStudioSection() {
  const [active, setActive] = useState(0)
  const { openAuth } = useAuthModal()
  const terminal = terminalData[active]

  return (
    <section
      id="ai-studio"
      data-testid="section-ai-studio"
      aria-label="AI Studio"
      className="relative overflow-hidden py-28"
      style={{
        background: "#f5f5f7",
      }}
    >
      {/* Ambient glow orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-200/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-200/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-cyan-200/20 rounded-full blur-[80px] pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 border border-violet-200 mb-6">
            <Sparkles className="h-4 w-4 text-violet-600" />
            <span className="font-bebas text-sm uppercase tracking-[0.35em] text-violet-600">AI Studio</span>
            <span className="text-xs px-1.5 py-0.5 rounded bg-amber-400 text-black font-bold leading-none ml-1">CORE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-6" style={{ color: "#111" }}>
            The intelligence layer{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-cyan-600 to-amber-500">
              built into every workflow
            </span>
          </h2>

          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "#555" }}>
            AI Studio is not a bolt-on. It runs inside every module — from talent verification and comp card generation to workflow automation and anomaly detection — making your entire agency dramatically faster.
          </p>
        </div>

        {/* Main content: terminal + features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          {/* Left: terminal visual */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
              {/* Terminal top bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-3 text-xs text-gray-300 font-mono transition-all duration-300">
                  ai.studio — {terminal.tab}
                </span>
              </div>

              {/* Terminal body */}
              <div className="p-6 font-mono text-sm bg-gray-900 min-h-[260px]">
                <div className="mb-4 text-gray-400 text-xs transition-all duration-300">
                  {terminal.comment}
                </div>
                {terminal.lines.map((line, i) => (
                  <div
                    key={`${active}-${i}`}
                    className="flex gap-3 mb-2"
                    style={{
                      animation: `terminalLineIn 0.3s ease-out ${i * 0.06}s both`,
                    }}
                  >
                    <span className={`shrink-0 ${line.color}`}>{line.prefix}</span>
                    <span className={line.color}>{line.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating stat cards — animated on change */}
            <div
              key={`stat-r-${active}`}
              className="absolute -right-4 top-8 bg-white rounded-xl px-4 py-3 shadow-lg transition-all duration-300"
              style={{ border: `1px solid ${terminal.statRight.color}30` }}
            >
              <div className="text-xs text-gray-700 mb-1">{terminal.statRight.label}</div>
              <div className="text-2xl font-bebas" style={{ color: terminal.statRight.color }}>
                {terminal.statRight.value}
              </div>
            </div>
            <div
              key={`stat-l-${active}`}
              className="absolute -left-4 bottom-8 bg-white rounded-xl px-4 py-3 shadow-lg transition-all duration-300"
              style={{ border: `1px solid ${terminal.statLeft.color}30` }}
            >
              <div className="text-xs text-gray-700 mb-1">{terminal.statLeft.label}</div>
              <div className="text-2xl font-bebas" style={{ color: terminal.statLeft.color }}>
                {terminal.statLeft.value}
              </div>
            </div>
          </div>

          {/* Right: feature list — interactive */}
          <div className="space-y-4">
            <style>{`
              @keyframes terminalLineIn {
                from { opacity: 0; transform: translateY(6px); }
                to { opacity: 1; transform: translateY(0); }
              }
            `}</style>
            {aiFeatures.slice(0, 4).map((f, i) => {
              const Icon = f.icon
              const isActive = i === active
              return (
                <div
                  key={i}
                  className={`flex gap-4 p-4 rounded-xl border cursor-pointer transition-all duration-300 ${f.bg} ${f.border} ${
                    isActive ? "shadow-md scale-[1.02]" : "shadow-sm hover:shadow-md hover:scale-[1.01]"
                  }`}
                  style={{
                    borderColor: isActive ? f.accent : undefined,
                    boxShadow: isActive ? `0 4px 20px ${f.accent}20` : undefined,
                  }}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                >
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-lg border shrink-0 transition-all duration-300 ${f.iconBg} ${f.border}`}
                    style={{
                      borderColor: isActive ? f.accent : undefined,
                      background: isActive ? f.accent + "20" : undefined,
                    }}
                  >
                    <Icon className={`w-5 h-5 ${f.color}`} strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className={`text-sm font-bold ${f.color} mb-1`}>{f.title}</h4>
                    <p className="text-xs leading-relaxed" style={{ color: "#555" }}>{f.description}</p>
                  </div>
                  {isActive && (
                    <div className="ml-auto flex items-center shrink-0">
                      <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: f.accent }} />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom 4 features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {aiFeatures.slice(4).map((f, i) => {
            const Icon = f.icon
            return (
              <div key={i} className={`p-5 rounded-2xl border ${f.bg} ${f.border} hover:scale-[1.02] transition-transform duration-200 shadow-sm`}>
                <div className={`flex items-center justify-center w-10 h-10 rounded-xl ${f.iconBg} border ${f.border} mb-4`}>
                  <Icon className={`w-5 h-5 ${f.color}`} strokeWidth={2} />
                </div>
                <h4 className={`text-sm font-bold ${f.color} mb-2`}>{f.title}</h4>
                <p className="text-xs leading-relaxed" style={{ color: "#555" }}>{f.description}</p>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <Link href="/ai-features" data-testid="link-explore-ai-studio">
              <button data-testid="btn-explore-ai-studio" aria-label="Explore AI Studio" className="flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold text-sm hover:from-violet-500 hover:to-indigo-500 hover:scale-105 transition-all duration-200 shadow-[0_8px_32px_rgba(139,92,246,0.4)]">
                <Sparkles className="h-4 w-4" />
                Explore AI Studio
                <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
            <button data-testid="btn-join-waitlist" aria-label="Join Waitlist for Early Access" onClick={() => openAuth()} className="flex items-center gap-2 px-8 py-4 rounded-full border border-gray-300 font-medium text-sm hover:border-gray-400 transition-all duration-200" style={{ color: "#555" }}>
              <Zap className="h-4 w-4" />
              Join Waitlist for Early Access
            </button>
          </div>
          <p className="mt-4 text-xs" style={{ color: "#555" }}>AI Studio · 94 automation rules · Workflow efficiency scoring · Anomaly detection</p>
        </div>
      </div>
    </section>
  )
}
