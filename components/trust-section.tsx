"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import {
  Sparkles,
  Users,
  Shield,
  Calendar,
  BarChart3,
  Zap,
  ArrowLeft,
  ArrowRight,
  X,
  Plus,
  Camera,
  Star,
  FileText,
  Search,
  Clock,
  UserCheck,
  ListFilter,
  Lock,
  KeyRound,
  ScrollText,
  FileCheck,
  Gavel,
  Trophy,
  Mic,
  TrendingUp,
  DollarSign,
  Activity,
  Eye,
  CreditCard,
  Bell,
  Workflow,
  Image,
  ScanFace,
  FolderOpen,
  CheckCircle2,
} from "lucide-react"

/* ═══════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════ */

const features = [
  {
    icon: Sparkles,
    shortTitle: "AI Portfolios",
    description: "Auto-enhance photos, score quality, generate bios, and organize your entire media library — all with a single AI engine built for talent.",
    accentColor: "#6366f1",
    bgColor: "#eef2ff",
    bgGradient: "linear-gradient(160deg, #c7d2fe 0%, #e0e7ff 50%, #eef2ff 100%)",
    subFeatures: [
      { icon: Camera, title: "Photo Enhancer", desc: "AI auto-enhances and retouches portfolio photos for casting-ready quality" },
      { icon: ScanFace, title: "Quality Scorer", desc: "Rates each photo on composition, lighting, and casting readiness" },
      { icon: FileText, title: "Bio Generator", desc: "Creates compelling talent bios and summaries from profile data" },
      { icon: FolderOpen, title: "Media Organizer", desc: "Tags, sorts, and manages your entire media library automatically" },
    ],
  },
  {
    icon: Users,
    shortTitle: "Talent Discovery",
    description: "AI matches agencies to the right talent by brief, look, skill, and availability — in under 30 seconds.",
    accentColor: "#0ea5e9",
    bgColor: "#e0f2fe",
    bgGradient: "linear-gradient(160deg, #7dd3fc 0%, #bae6fd 50%, #e0f2fe 100%)",
    subFeatures: [
      { icon: Search, title: "Smart Search", desc: "Find talent by look, skill, location, and availability instantly" },
      { icon: UserCheck, title: "AI Matching", desc: "Auto-match casting briefs to best-fit talent in seconds" },
      { icon: Clock, title: "Availability Tracker", desc: "Real-time talent schedule and booking visibility" },
      { icon: ListFilter, title: "Shortlist Builder", desc: "Create and share curated talent lists with clients" },
    ],
  },
  {
    icon: Shield,
    shortTitle: "Enterprise Security",
    description: "Role-based access, consent management, encrypted media, and full GDPR compliance built in.",
    accentColor: "#10b981",
    bgColor: "#d1fae5",
    bgGradient: "linear-gradient(160deg, #6ee7b7 0%, #a7f3d0 50%, #d1fae5 100%)",
    subFeatures: [
      { icon: Lock, title: "Role-Based Access", desc: "Granular permissions for every team member and collaborator" },
      { icon: ScrollText, title: "Consent Manager", desc: "Track and manage all media usage rights and approvals" },
      { icon: KeyRound, title: "Data Encryption", desc: "End-to-end encrypted media storage and document sharing" },
      { icon: FileCheck, title: "GDPR Compliance", desc: "Full compliance reporting, audit trails, and data controls" },
    ],
  },
  {
    icon: Calendar,
    shortTitle: "Event Management",
    description: "Run casting calls, pageants, and showcases with automated scheduling, judging, and results.",
    accentColor: "#f43f5e",
    bgColor: "#ffe4e6",
    bgGradient: "linear-gradient(160deg, #fda4af 0%, #fecdd3 50%, #ffe4e6 100%)",
    subFeatures: [
      { icon: Mic, title: "Casting Calls", desc: "Create and publish casting calls to your talent pool in minutes" },
      { icon: Gavel, title: "Judge Assignment", desc: "Invite judges with custom scoring criteria and rubrics" },
      { icon: Activity, title: "Live Scoring", desc: "Real-time transparent scoring with bias-detection built in" },
      { icon: Trophy, title: "Results Dashboard", desc: "Automated rankings, winner selection, and result publishing" },
    ],
  },
  {
    icon: BarChart3,
    shortTitle: "Predictive Analytics",
    description: "Real-time dashboards on bookings, engagement, revenue, and talent performance trends.",
    accentColor: "#f59e0b",
    bgColor: "#fef3c7",
    bgGradient: "linear-gradient(160deg, #fcd34d 0%, #fde68a 50%, #fef3c7 100%)",
    subFeatures: [
      { icon: TrendingUp, title: "Booking Trends", desc: "Track booking patterns and forecast future demand" },
      { icon: DollarSign, title: "Revenue Reports", desc: "Real-time revenue, invoicing, and payment analytics" },
      { icon: Eye, title: "Engagement Metrics", desc: "Monitor talent profile views, saves, and client interest" },
      { icon: Activity, title: "Performance Insights", desc: "Talent performance trends and growth tracking over time" },
    ],
  },
  {
    icon: Zap,
    shortTitle: "Instant Workflows",
    description: "From booking request to contract to payment — automate every step with zero manual hand-offs.",
    accentColor: "#8b5cf6",
    bgColor: "#ede9fe",
    bgGradient: "linear-gradient(160deg, #c4b5fd 0%, #ddd6fe 50%, #ede9fe 100%)",
    subFeatures: [
      { icon: Workflow, title: "Booking Automation", desc: "Auto-process booking requests from submission to confirmation" },
      { icon: FileText, title: "Contract Generator", desc: "Generate, send, and track contracts with e-signatures" },
      { icon: CreditCard, title: "Payment Processing", desc: "Automated invoicing, split payments, and payout tracking" },
      { icon: Bell, title: "Notification Engine", desc: "Smart alerts and reminders for every step in the workflow" },
    ],
  },
]

/* ═══════════════════════════════════════════
   INLINE APP SCREENSHOT ILLUSTRATIONS
   Each one is a stylized "mini UI" that fills
   the card like Monday.com's 3D characters
   ═══════════════════════════════════════════ */

function PortfolioIllustration({ color }: { color: string }) {
  return (
    <div className="absolute inset-0 flex items-end justify-center overflow-hidden">
      {/* Tilted card stack — like a portfolio spread */}
      <div className="relative w-[90%] h-[88%]">
        {/* Back card */}
        <div
          className="absolute rounded-2xl shadow-lg"
          style={{
            width: "65%", height: "72%", bottom: "8%", left: "4%",
            background: "rgba(255,255,255,0.5)",
            border: "1px solid rgba(255,255,255,0.8)",
            transform: "rotate(-6deg)",
          }}
        >
          <div className="p-3 h-full flex flex-col">
            <div className="flex-1 rounded-xl" style={{ background: color + "12" }} />
            <div className="mt-2 flex gap-1.5">
              <div className="h-1.5 rounded-full flex-1" style={{ background: color + "20" }} />
              <div className="h-1.5 rounded-full w-8" style={{ background: color + "15" }} />
            </div>
          </div>
        </div>
        {/* Front card — main portfolio */}
        <div
          className="absolute rounded-2xl shadow-xl"
          style={{
            width: "72%", height: "82%", bottom: "2%", right: "2%",
            background: "rgba(255,255,255,0.85)",
            border: "1px solid rgba(255,255,255,0.9)",
            backdropFilter: "blur(8px)",
            transform: "rotate(3deg)",
          }}
        >
          <div className="p-3.5 h-full flex flex-col">
            {/* Photo grid */}
            <div className="grid grid-cols-2 gap-1.5 flex-1">
              {[92, 87, 95, 78].map((score, i) => (
                <div
                  key={i}
                  className="relative rounded-lg overflow-hidden"
                  style={{ background: color + "10" }}
                >
                  <Image
                    size={20}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{ color: color + "30" }}
                  />
                  <div
                    className="absolute bottom-1 right-1 text-[7px] font-bold px-1 py-0.5 rounded"
                    style={{ background: "rgba(255,255,255,0.9)", color }}
                  >
                    {score}
                  </div>
                  {score > 90 && (
                    <Star size={8} className="absolute top-1 left-1" style={{ color, fill: color }} />
                  )}
                </div>
              ))}
            </div>
            {/* Bottom bar */}
            <div className="flex items-center gap-2 mt-2.5 pt-2" style={{ borderTop: `1px solid ${color}10` }}>
              <Sparkles size={12} style={{ color }} />
              <div className="h-1.5 rounded-full flex-1" style={{ background: color + "20" }} />
              <div className="text-[8px] font-bold px-2 py-0.5 rounded-full" style={{ background: color + "15", color }}>
                AI
              </div>
            </div>
          </div>
        </div>
        {/* Floating score badge */}
        <div
          className="absolute top-[6%] right-[6%] z-10 px-2.5 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5"
          style={{
            background: "rgba(255,255,255,0.9)",
            border: "1px solid rgba(255,255,255,0.95)",
            backdropFilter: "blur(8px)",
            animation: "floatBadge 3s ease-in-out infinite",
          }}
        >
          <Star size={12} style={{ color, fill: color }} />
          <span className="text-[11px] font-bold" style={{ color }}>95</span>
        </div>
      </div>
    </div>
  )
}

function DiscoveryIllustration({ color }: { color: string }) {
  return (
    <div className="absolute inset-0 flex items-end justify-center overflow-hidden">
      <div className="relative w-[88%] h-[85%]">
        {/* Main search panel */}
        <div
          className="absolute inset-x-0 bottom-0 rounded-2xl shadow-xl"
          style={{
            height: "90%",
            background: "rgba(255,255,255,0.85)",
            border: "1px solid rgba(255,255,255,0.9)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div className="p-3.5 h-full flex flex-col">
            {/* Search bar */}
            <div
              className="flex items-center gap-2 px-3 py-2 rounded-xl mb-3"
              style={{ background: color + "08", border: `1px solid ${color}18` }}
            >
              <Search size={13} style={{ color }} />
              <div className="h-1.5 rounded-full flex-1" style={{ background: color + "15" }} />
            </div>
            {/* Talent cards */}
            <div className="flex-1 space-y-2">
              {[
                { match: "98%", active: true },
                { match: "94%", active: false },
                { match: "91%", active: false },
                { match: "87%", active: false },
              ].map((t, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl transition-all"
                  style={{
                    background: t.active ? color + "10" : "rgba(0,0,0,0.02)",
                    border: `1px solid ${t.active ? color + "25" : "rgba(0,0,0,0.04)"}`,
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-full shrink-0"
                    style={{ background: color + (t.active ? "20" : "10") }}
                  />
                  <div className="flex-1 space-y-1">
                    <div className="h-1.5 rounded-full w-16" style={{ background: color + "18" }} />
                    <div className="h-1 rounded-full w-24" style={{ background: color + "0a" }} />
                  </div>
                  <span className="text-[10px] font-bold" style={{ color }}>
                    {t.match}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Floating match badge */}
        <div
          className="absolute top-0 right-[8%] z-10 px-2.5 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5"
          style={{
            background: "rgba(255,255,255,0.9)",
            border: "1px solid rgba(255,255,255,0.95)",
            animation: "floatBadge 3.5s ease-in-out infinite",
          }}
        >
          <UserCheck size={12} style={{ color }} />
          <span className="text-[11px] font-bold" style={{ color }}>12 found</span>
        </div>
      </div>
    </div>
  )
}

function SecurityIllustration({ color }: { color: string }) {
  return (
    <div className="absolute inset-0 flex items-end justify-center overflow-hidden">
      <div className="relative w-[85%] h-[85%]">
        {/* Main panel */}
        <div
          className="absolute inset-x-0 bottom-0 rounded-2xl shadow-xl"
          style={{
            height: "88%",
            background: "rgba(255,255,255,0.85)",
            border: "1px solid rgba(255,255,255,0.9)",
          }}
        >
          <div className="p-3.5 h-full flex flex-col">
            {/* Central shield */}
            <div className="flex-1 flex items-center justify-center">
              <div
                className="w-20 h-20 rounded-3xl flex items-center justify-center"
                style={{
                  background: color + "12",
                  border: `2px solid ${color}25`,
                  boxShadow: `0 0 40px ${color}15`,
                }}
              >
                <Shield size={36} style={{ color }} strokeWidth={1.5} />
              </div>
            </div>
            {/* Status items */}
            <div className="space-y-1.5 mt-2">
              {["Encryption Active", "GDPR Compliant", "Access Control ON"].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg"
                  style={{ background: color + "06" }}
                >
                  <CheckCircle2 size={12} style={{ color }} />
                  <span className="text-[9px] font-medium text-gray-500">{item}</span>
                  <div className="ml-auto w-1.5 h-1.5 rounded-full" style={{ background: color }} />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Lock badge */}
        <div
          className="absolute top-0 left-[10%] z-10 px-2.5 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5"
          style={{
            background: "rgba(255,255,255,0.9)",
            border: "1px solid rgba(255,255,255,0.95)",
            animation: "floatBadge 2.8s ease-in-out infinite",
          }}
        >
          <Lock size={12} style={{ color }} />
          <span className="text-[11px] font-bold" style={{ color }}>Secure</span>
        </div>
      </div>
    </div>
  )
}

function EventIllustration({ color }: { color: string }) {
  return (
    <div className="absolute inset-0 flex items-end justify-center overflow-hidden">
      <div className="relative w-[88%] h-[85%]">
        {/* Calendar panel */}
        <div
          className="absolute inset-x-0 bottom-0 rounded-2xl shadow-xl"
          style={{
            height: "90%",
            background: "rgba(255,255,255,0.85)",
            border: "1px solid rgba(255,255,255,0.9)",
          }}
        >
          <div className="p-3.5 h-full flex flex-col">
            {/* Month header */}
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="text-[11px] font-bold text-gray-700">March 2026</span>
              <div className="flex items-center gap-1 px-2 py-0.5 rounded-full" style={{ background: color + "12" }}>
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: color, animation: "pulse 2s infinite" }} />
                <span className="text-[8px] font-bold" style={{ color }}>3 Live</span>
              </div>
            </div>
            {/* Mini calendar grid */}
            <div className="grid grid-cols-7 gap-1 mb-3">
              {Array.from({ length: 14 }).map((_, i) => {
                const highlighted = [3, 7, 11].includes(i)
                return (
                  <div
                    key={i}
                    className="aspect-square rounded-md flex items-center justify-center text-[7px] font-medium"
                    style={{
                      background: highlighted ? color + "18" : "rgba(0,0,0,0.02)",
                      color: highlighted ? color : "#aaa",
                      border: highlighted ? `1px solid ${color}30` : "1px solid transparent",
                    }}
                  >
                    {i + 10}
                  </div>
                )
              })}
            </div>
            {/* Event list */}
            <div className="flex-1 space-y-1.5">
              {["Spring Showcase", "Casting Call #42"].map((ev, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-2.5 py-2 rounded-xl"
                  style={{
                    background: i === 0 ? color + "0c" : "rgba(0,0,0,0.02)",
                    border: `1px solid ${i === 0 ? color + "20" : "rgba(0,0,0,0.04)"}`,
                  }}
                >
                  <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: color + "15" }}>
                    <Calendar size={11} style={{ color }} />
                  </div>
                  <span className="text-[9px] font-semibold text-gray-600 flex-1">{ev}</span>
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: i === 0 ? color : "#ddd" }} />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Live badge */}
        <div
          className="absolute top-0 right-[8%] z-10 px-2.5 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5"
          style={{
            background: "rgba(255,255,255,0.9)",
            border: "1px solid rgba(255,255,255,0.95)",
            animation: "floatBadge 3.2s ease-in-out infinite",
          }}
        >
          <Trophy size={12} style={{ color }} />
          <span className="text-[11px] font-bold" style={{ color }}>Live</span>
        </div>
      </div>
    </div>
  )
}

function AnalyticsIllustration({ color }: { color: string }) {
  return (
    <div className="absolute inset-0 flex items-end justify-center overflow-hidden">
      <div className="relative w-[88%] h-[85%]">
        {/* Dashboard panel */}
        <div
          className="absolute inset-x-0 bottom-0 rounded-2xl shadow-xl"
          style={{
            height: "90%",
            background: "rgba(255,255,255,0.85)",
            border: "1px solid rgba(255,255,255,0.9)",
          }}
        >
          <div className="p-3.5 h-full flex flex-col">
            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-2 mb-3">
              {[
                { label: "Bookings", value: "2.4K" },
                { label: "Revenue", value: "$18K" },
              ].map((s, i) => (
                <div key={i} className="px-2.5 py-2 rounded-xl" style={{ background: color + "08", border: `1px solid ${color}12` }}>
                  <span className="text-[7px] text-gray-400 block">{s.label}</span>
                  <div className="flex items-center gap-1">
                    <span className="text-[14px] font-bold text-gray-800">{s.value}</span>
                    <TrendingUp size={10} style={{ color }} />
                  </div>
                </div>
              ))}
            </div>
            {/* Bar chart */}
            <div
              className="flex-1 rounded-xl px-3 py-2.5 flex flex-col justify-end"
              style={{ background: color + "05", border: `1px solid ${color}0a` }}
            >
              <div className="flex items-end gap-[3px] h-full">
                {[30, 48, 40, 62, 50, 68, 80, 58, 72, 85, 65, 78].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm transition-all"
                    style={{
                      height: `${h}%`,
                      background: i >= 9 ? color : color + "35",
                      borderRadius: "2px 2px 0 0",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Growth badge */}
        <div
          className="absolute top-0 left-[8%] z-10 px-2.5 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5"
          style={{
            background: "rgba(255,255,255,0.9)",
            border: "1px solid rgba(255,255,255,0.95)",
            animation: "floatBadge 3s ease-in-out infinite",
          }}
        >
          <TrendingUp size={12} style={{ color }} />
          <span className="text-[11px] font-bold" style={{ color }}>+24%</span>
        </div>
      </div>
    </div>
  )
}

function WorkflowIllustration({ color }: { color: string }) {
  return (
    <div className="absolute inset-0 flex items-end justify-center overflow-hidden">
      <div className="relative w-[88%] h-[85%]">
        {/* Pipeline panel */}
        <div
          className="absolute inset-x-0 bottom-0 rounded-2xl shadow-xl"
          style={{
            height: "90%",
            background: "rgba(255,255,255,0.85)",
            border: "1px solid rgba(255,255,255,0.9)",
          }}
        >
          <div className="p-3.5 h-full flex flex-col justify-center gap-3">
            {/* Pipeline steps — vertical */}
            {[
              { icon: FileText, label: "Booking Request", status: "done" },
              { icon: Users, label: "Talent Review", status: "done" },
              { icon: ScrollText, label: "Contract Sent", status: "active" },
              { icon: CreditCard, label: "Payment", status: "pending" },
            ].map((step, i) => {
              const StepIcon = step.icon
              const isDone = step.status === "done"
              const isActive = step.status === "active"
              return (
                <div key={i} className="flex items-center gap-3">
                  {/* Step connector line */}
                  <div className="flex flex-col items-center gap-0.5">
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: isDone || isActive ? color + "18" : "rgba(0,0,0,0.04)",
                        border: `1.5px solid ${isDone || isActive ? color + "35" : "rgba(0,0,0,0.06)"}`,
                      }}
                    >
                      {isDone ? (
                        <CheckCircle2 size={14} style={{ color }} />
                      ) : (
                        <StepIcon size={14} style={{ color: isActive ? color : "#bbb" }} />
                      )}
                    </div>
                    {i < 3 && (
                      <div
                        className="w-[2px] h-2 rounded-full"
                        style={{ background: isDone ? color + "30" : "rgba(0,0,0,0.06)" }}
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <span
                      className="text-[10px] font-semibold block"
                      style={{ color: isDone || isActive ? "#374151" : "#bbb" }}
                    >
                      {step.label}
                    </span>
                  </div>
                  {isDone && (
                    <div className="text-[7px] font-bold px-1.5 py-0.5 rounded-full" style={{ background: color + "12", color }}>
                      Done
                    </div>
                  )}
                  {isActive && (
                    <div className="relative flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: color, animation: "pulse 2s infinite" }} />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
        {/* Automation badge */}
        <div
          className="absolute top-0 right-[8%] z-10 px-2.5 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5"
          style={{
            background: "rgba(255,255,255,0.9)",
            border: "1px solid rgba(255,255,255,0.95)",
            animation: "floatBadge 3.4s ease-in-out infinite",
          }}
        >
          <Zap size={12} style={{ color }} />
          <span className="text-[11px] font-bold" style={{ color }}>Auto</span>
        </div>
      </div>
    </div>
  )
}

const illustrations: Record<string, React.FC<{ color: string }>> = {
  "AI Portfolios": PortfolioIllustration,
  "Talent Discovery": DiscoveryIllustration,
  "Enterprise Security": SecurityIllustration,
  "Event Management": EventIllustration,
  "Predictive Analytics": AnalyticsIllustration,
  "Instant Workflows": WorkflowIllustration,
}

/* ═══════════════════════════════════════════
   EXPANDED MODAL
   ═══════════════════════════════════════════ */

function ExpandedModal({
  feature,
  onClose,
}: {
  feature: (typeof features)[number]
  onClose: () => void
}) {
  const Illustration = illustrations[feature.shortTitle]

  useEffect(() => {
    document.body.style.overflow = "hidden"
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handler)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handler)
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      style={{ animation: "modalFadeIn 0.3s ease" }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      <div
        className="relative z-10 w-full max-w-[920px] rounded-3xl overflow-hidden"
        style={{
          background: "#fff",
          boxShadow: "0 40px 120px rgba(0,0,0,0.2)",
          animation: "modalSlideUp 0.35s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
          style={{ background: "rgba(0,0,0,0.06)" }}
        >
          <X size={18} className="text-gray-500" />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Left: Hero */}
          <div
            className="relative w-full md:w-[400px] shrink-0 min-h-[350px] md:min-h-[480px] overflow-hidden"
            style={{ background: feature.bgGradient }}
          >
            <div className="relative z-10 px-8 pt-8">
              <h2
                className="text-4xl sm:text-5xl font-bold leading-[1.05]"
                style={{ color: feature.accentColor + "cc" }}
              >
                {feature.shortTitle}
              </h2>
            </div>
            {/* Illustration fills the rest */}
            <div className="absolute inset-0 top-[90px]">
              {Illustration && <Illustration color={feature.accentColor} />}
            </div>
          </div>

          {/* Right: Sub-features */}
          <div className="flex-1 p-6 sm:p-8">
            <p className="text-sm leading-relaxed text-gray-800 mb-6">{feature.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {feature.subFeatures.map((sf, i) => {
                const SfIcon = sf.icon
                return (
                  <div
                    key={i}
                    className="group/sf rounded-2xl p-5 transition-all duration-300 hover:shadow-lg cursor-default flex flex-col"
                    style={{
                      background: feature.bgColor + "60",
                      border: `1px solid ${feature.accentColor}10`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = feature.bgColor
                      e.currentTarget.style.borderColor = feature.accentColor + "30"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = feature.bgColor + "60"
                      e.currentTarget.style.borderColor = feature.accentColor + "10"
                    }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover/sf:scale-110"
                      style={{ background: feature.accentColor + "15", border: `1px solid ${feature.accentColor}20` }}
                    >
                      <SfIcon size={20} style={{ color: feature.accentColor }} />
                    </div>
                    <h4 className="text-[15px] font-bold text-gray-900 mb-1">{sf.title}</h4>
                    <p className="text-xs leading-relaxed text-gray-500 flex-1">{sf.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   CAROUSEL CARD
   ═══════════════════════════════════════════ */

function CarouselCard({
  feature,
  onClick,
  index,
}: {
  feature: (typeof features)[number]
  onClick: () => void
  index: number
}) {
  const Icon = feature.icon
  const Illustration = illustrations[feature.shortTitle]
  const isOdd = index % 2 === 1
  const offsetY = isOdd ? 48 : 0

  return (
    <div
      className="group relative rounded-[24px] overflow-hidden cursor-pointer shrink-0 select-none"
      style={{
        width: 340,
        height: 480,
        marginTop: offsetY,
        background: feature.bgGradient,
        border: `1.5px solid rgba(255,255,255,0.6)`,
        boxShadow: `0 2px 12px ${feature.accentColor}08`,
        transition: "margin-top 0.4s ease, box-shadow 0.5s ease",
      }}
      onClick={onClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.marginTop = `${offsetY - 8}px`
        e.currentTarget.style.boxShadow = `0 24px 60px -12px ${feature.accentColor}25`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.marginTop = `${offsetY}px`
        e.currentTarget.style.boxShadow = `0 2px 12px ${feature.accentColor}08`
      }}
    >
      {/* Title row */}
      <div className="relative z-20 px-6 pt-6 flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: feature.accentColor + "15", border: `1px solid ${feature.accentColor}20` }}
        >
          <Icon size={18} style={{ color: feature.accentColor }} />
        </div>
        <h3 className="text-[22px] font-bold leading-tight" style={{ color: "#1f2937" }}>
          {feature.shortTitle}
        </h3>
      </div>

      {/* Illustration — fills 70% of card */}
      <div className="absolute inset-0 top-[72px]">
        {Illustration && <Illustration color={feature.accentColor} />}
      </div>

      {/* Plus button */}
      <button
        className="absolute bottom-5 right-5 z-20 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
        style={{
          background: "#111",
          color: "#fff",
          boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
        }}
      >
        <Plus size={22} strokeWidth={2.5} />
      </button>
    </div>
  )
}

/* ═══════════════════════════════════════════
   MAIN SECTION
   ═══════════════════════════════════════════ */

export function TrustSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [expanded, setExpanded] = useState<number | null>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  const CARD_W = 340
  const GAP = 20
  const TOTAL = features.length
  const CARD_STEP = CARD_W + GAP

  // Drag state
  const [dragOffset, setDragOffset] = useState(0)
  const isDragging = useRef(false)
  const dragStartX = useRef(0)
  const dragLastX = useRef(0)
  const dragLastTime = useRef(0)
  const dragVelocity = useRef(0)
  const didDrag = useRef(false)

  const tripleFeatures = [...features, ...features, ...features]
  const activeTripleIndex = TOTAL + currentIndex

  const getTranslateX = () => {
    return -(activeTripleIndex * CARD_STEP) + GAP + dragOffset
  }

  const slide = (dir: "left" | "right") => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => prev + (dir === "right" ? 1 : -1))
  }

  const handleTransitionEnd = () => {
    setIsTransitioning(false)
    setCurrentIndex((prev) => ((prev % TOTAL) + TOTAL) % TOTAL)
  }

  // ── Drag handlers ──
  const onPointerDown = (e: React.PointerEvent) => {
    if (isTransitioning) return
    isDragging.current = true
    didDrag.current = false
    dragStartX.current = e.clientX
    dragLastX.current = e.clientX
    dragLastTime.current = Date.now()
    dragVelocity.current = 0
    setDragOffset(0)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return
    const dx = e.clientX - dragStartX.current
    if (Math.abs(dx) > 5) didDrag.current = true

    // Track velocity
    const now = Date.now()
    const dt = now - dragLastTime.current
    if (dt > 0) {
      dragVelocity.current = (e.clientX - dragLastX.current) / dt
    }
    dragLastX.current = e.clientX
    dragLastTime.current = now

    setDragOffset(dx)
  }

  const onPointerUp = (e: React.PointerEvent) => {
    if (!isDragging.current) return
    isDragging.current = false

    const dx = dragOffset
    const v = dragVelocity.current // px/ms

    // Determine how many cards to advance
    let cardsDelta = 0
    if (Math.abs(v) > 0.4) {
      // Flick — move 1-2 cards based on velocity
      cardsDelta = v > 0 ? -Math.ceil(Math.abs(v) * 2) : Math.ceil(Math.abs(v) * 2)
      cardsDelta = Math.max(-3, Math.min(3, cardsDelta))
    } else if (Math.abs(dx) > CARD_STEP * 0.3) {
      // Dragged past threshold
      cardsDelta = dx > 0 ? -Math.round(Math.abs(dx) / CARD_STEP) : Math.round(Math.abs(dx) / CARD_STEP)
    }

    setDragOffset(0)

    if (cardsDelta !== 0) {
      setIsTransitioning(true)
      setCurrentIndex((prev) => prev + cardsDelta)
    }
  }


  return (
    <section className="relative w-full py-24 overflow-hidden" style={{ background: "#fff" }}>
      <style>{`
        @keyframes floatBadge {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalSlideUp {
          from { opacity: 0; transform: translateY(24px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.4em] mb-3" style={{ color: "#6366f1" }}>
            The Toolkit
          </p>
          <div className="flex items-end justify-between flex-wrap gap-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight" style={{ color: "#111827" }}>
              Career-defining
              <br />
              <span style={{ color: "#9ca3af" }}>features built in.</span>
            </h2>
            <p className="text-sm max-w-sm leading-relaxed" style={{ color: "#6b7280" }}>
              Professional tools designed to empower creators, simplify discovery, and automate every workflow from profile to payment.
            </p>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div
        className="relative overflow-hidden pb-4"
      >
        {/* Edge fades — always visible */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #fff 10%, transparent 100%)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #fff 10%, transparent 100%)" }}
        />

        {/* Track — moves via translateX, with drag support */}
        <div
          ref={trackRef}
          className="flex pt-10 pb-6 pl-8 items-start select-none touch-pan-y"
          style={{
            gap: `${GAP}px`,
            transform: `translateX(${getTranslateX()}px)`,
            transition: isTransitioning
              ? "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)"
              : dragOffset !== 0
                ? "none"
                : "none",
            cursor: isDragging.current ? "grabbing" : "grab",
          }}
          onTransitionEnd={handleTransitionEnd}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          {tripleFeatures.map((f, i) => (
            <CarouselCard
              key={`card-${i}`}
              feature={f}
              index={i}
              onClick={() => { if (!didDrag.current) setExpanded(i % TOTAL) }}
            />
          ))}
        </div>
      </div>

      {/* Navigation arrows — always active */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={() => slide("left")}
            className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200"
            style={{ border: "1.5px solid #e5e7eb", color: "#111" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#111"
              e.currentTarget.style.background = "#111"
              e.currentTarget.style.color = "#fff"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#e5e7eb"
              e.currentTarget.style.background = "transparent"
              e.currentTarget.style.color = "#111"
            }}
          >
            <ArrowLeft size={18} />
          </button>
          <button
            onClick={() => slide("right")}
            className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200"
            style={{ border: "1.5px solid #e5e7eb", color: "#111" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#111"
              e.currentTarget.style.background = "#111"
              e.currentTarget.style.color = "#fff"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#e5e7eb"
              e.currentTarget.style.background = "transparent"
              e.currentTarget.style.color = "#111"
            }}
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Expanded Modal */}
      {expanded !== null && (
        <ExpandedModal feature={features[expanded]} onClose={() => setExpanded(null)} />
      )}
    </section>
  )
}
