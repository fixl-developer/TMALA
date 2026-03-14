"use client"

import { useState, useEffect, useCallback } from "react"
import {
  Shield,
  ArrowRight,
  Wallet,
  FileCheck,
  CheckCircle,
  AlertCircle,
  Lock,
  DollarSign,
  Camera,
  Upload,
  ThumbsUp,
  Star,
  Users,
  Percent,
  Scale,
  MessageSquare,
} from "lucide-react"
import { IconBox } from "@/components/ui/icon-box"

/* ── Step visual illustrations ── */

function PaymentSecuredVisual() {
  return (
    <div className="h-full w-full rounded-xl p-4 flex flex-col gap-2.5" style={{ background: "linear-gradient(145deg, #ecfeff 0%, #cffafe 100%)" }}>
      {/* Vault icon */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "#0891b2" }}>
            <Lock className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-[11px] font-bold" style={{ color: "#155e75" }}>Escrow Vault</span>
        </div>
        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold" style={{ background: "#0891b2", color: "#fff" }}>Secured</span>
      </div>
      {/* Payment flow */}
      <div className="flex-1 rounded-lg p-3 flex flex-col justify-center gap-2" style={{ background: "rgba(255,255,255,0.8)" }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <DollarSign className="w-3.5 h-3.5" style={{ color: "#0891b2" }} />
            <span className="text-xs font-semibold" style={{ color: "#1a1a2e" }}>Amount Locked</span>
          </div>
          <span className="text-sm font-bold" style={{ color: "#0891b2" }}>$2,500</span>
        </div>
        <div className="w-full h-1.5 rounded-full" style={{ background: "#0891b214" }}>
          <div className="h-full rounded-full" style={{ width: "100%", background: "#0891b2" }} />
        </div>
        <div className="flex items-center gap-1.5 mt-1">
          <Wallet className="w-3 h-3" style={{ color: "#059669" }} />
          <span className="text-[10px] font-medium" style={{ color: "#059669" }}>Funds protected by 256-bit encryption</span>
        </div>
      </div>
    </div>
  )
}

function WorkCompletedVisual() {
  return (
    <div className="h-full w-full rounded-xl p-4 flex flex-col gap-2.5" style={{ background: "linear-gradient(145deg, #ecfdf5 0%, #d1fae5 100%)" }}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "#059669" }}>
            <Camera className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-[11px] font-bold" style={{ color: "#065f46" }}>Deliverables</span>
        </div>
        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold" style={{ background: "#059669", color: "#fff" }}>3 Uploaded</span>
      </div>
      <div className="flex-1 rounded-lg p-3 flex flex-col gap-2" style={{ background: "rgba(255,255,255,0.8)" }}>
        {[
          { name: "photoshoot_final.zip", size: "24 MB", icon: Camera },
          { name: "event_attendance.pdf", size: "1.2 MB", icon: FileCheck },
          { name: "bts_footage.mp4", size: "180 MB", icon: Upload },
        ].map((f) => (
          <div key={f.name} className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <f.icon className="w-3 h-3" style={{ color: "#059669" }} />
              <span className="text-[11px] font-medium" style={{ color: "#1a1a2e" }}>{f.name}</span>
            </div>
            <span className="text-[10px] font-medium" style={{ color: "#059669" }}>{f.size}</span>
          </div>
        ))}
        <div className="flex items-center gap-1 mt-1">
          <CheckCircle className="w-3 h-3" style={{ color: "#059669" }} />
          <span className="text-[10px] font-medium" style={{ color: "#059669" }}>All proofs submitted</span>
        </div>
      </div>
    </div>
  )
}

function AgencyApprovesVisual() {
  return (
    <div className="h-full w-full rounded-xl p-4 flex flex-col gap-2.5" style={{ background: "linear-gradient(145deg, #ede9fe 0%, #ddd6fe 100%)" }}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "#7c3aed" }}>
            <ThumbsUp className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-[11px] font-bold" style={{ color: "#4c1d95" }}>Review Panel</span>
        </div>
        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold" style={{ background: "#7c3aed", color: "#fff" }}>Approved</span>
      </div>
      <div className="flex-1 rounded-lg p-3 flex flex-col gap-2" style={{ background: "rgba(255,255,255,0.8)" }}>
        {[
          { name: "Quality Check", score: "9.5/10", status: "Pass" },
          { name: "Deliverables", score: "3/3", status: "Complete" },
          { name: "Timeline", score: "On Time", status: "Pass" },
        ].map((r) => (
          <div key={r.name} className="flex items-center justify-between">
            <span className="text-[11px] font-medium" style={{ color: "#1a1a2e" }}>{r.name}</span>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-semibold" style={{ color: "#7c3aed" }}>{r.score}</span>
              <span className="px-1.5 py-0.5 rounded text-[9px] font-bold" style={{ background: "#05966914", color: "#059669" }}>{r.status}</span>
            </div>
          </div>
        ))}
        <div className="flex items-center gap-1 mt-1">
          <Star className="w-3 h-3" style={{ color: "#7c3aed" }} />
          <span className="text-[10px] font-medium" style={{ color: "#7c3aed" }}>Agency rated 5/5 stars</span>
        </div>
      </div>
    </div>
  )
}

function AutoSplitVisual() {
  return (
    <div className="h-full w-full rounded-xl p-4 flex flex-col gap-2.5" style={{ background: "linear-gradient(145deg, #fef3c7 0%, #fde68a 100%)" }}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "#d97706" }}>
            <Percent className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-[11px] font-bold" style={{ color: "#92400e" }}>Auto Split</span>
        </div>
        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold" style={{ background: "#d97706", color: "#fff" }}>$2,500</span>
      </div>
      <div className="flex-1 rounded-lg p-3 flex flex-col gap-2" style={{ background: "rgba(255,255,255,0.8)" }}>
        {[
          { label: "Talent Share", amount: "$1,750", pct: "70%", color: "#059669" },
          { label: "Agency Commission", amount: "$500", pct: "20%", color: "#d97706" },
          { label: "Platform Fee", amount: "$175", pct: "7%", color: "#6366f1" },
          { label: "GST", amount: "$75", pct: "3%", color: "#ef4444" },
        ].map((s) => (
          <div key={s.label} className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full" style={{ background: s.color }} />
              <span className="text-[11px] font-medium" style={{ color: "#1a1a2e" }}>{s.label}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-medium" style={{ color: "#666" }}>{s.pct}</span>
              <span className="text-[11px] font-bold" style={{ color: s.color }}>{s.amount}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function DisputeVisual() {
  return (
    <div className="h-full w-full rounded-xl p-4 flex flex-col gap-2.5" style={{ background: "linear-gradient(145deg, #fce7f3 0%, #fbcfe8 100%)" }}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "#db2777" }}>
            <Scale className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-[11px] font-bold" style={{ color: "#9d174d" }}>Resolution Center</span>
        </div>
        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold" style={{ background: "#db2777", color: "#fff" }}>Active</span>
      </div>
      <div className="flex-1 rounded-lg p-3 flex flex-col gap-2" style={{ background: "rgba(255,255,255,0.8)" }}>
        {[
          { action: "Partial Payment", desc: "Release 80% to talent", icon: DollarSign, color: "#059669" },
          { action: "Full Refund", desc: "Return to brand/agency", icon: ArrowRight, color: "#d97706" },
          { action: "Mediation", desc: "Platform reviews evidence", icon: MessageSquare, color: "#7c3aed" },
        ].map((d) => (
          <div key={d.action} className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: d.color + "14" }}>
              <d.icon className="w-3 h-3" style={{ color: d.color }} />
            </div>
            <div>
              <span className="text-[11px] font-semibold block leading-tight" style={{ color: "#1a1a2e" }}>{d.action}</span>
              <span className="text-[9px] font-medium" style={{ color: "#666" }}>{d.desc}</span>
            </div>
          </div>
        ))}
        <div className="flex items-center gap-1 mt-1">
          <Shield className="w-3 h-3" style={{ color: "#db2777" }} />
          <span className="text-[10px] font-medium" style={{ color: "#db2777" }}>Fair resolution guaranteed</span>
        </div>
      </div>
    </div>
  )
}

const stepVisuals = [
  PaymentSecuredVisual,
  WorkCompletedVisual,
  AgencyApprovesVisual,
  AutoSplitVisual,
  DisputeVisual,
]

const escrowSteps = [
  {
    icon: Wallet,
    title: "Payment Secured",
    description: "Brand/agency books talent. Full payment goes into secure escrow (like a bank locker).",
  },
  {
    icon: FileCheck,
    title: "Work Completed",
    description: "Talent completes shoot/event/deliverable and uploads proof (photos, videos, attendance).",
  },
  {
    icon: CheckCircle,
    title: "Agency Approves",
    description: "Agency reviews and approves the work, confirming everything is satisfactory.",
  },
  {
    icon: ArrowRight,
    title: "Auto Split",
    description: "Money automatically splits: Talent share + Agency commission + Platform fee + GST.",
  },
  {
    icon: AlertCircle,
    title: "Dispute Resolution",
    description: "If issues arise, raise a dispute. Platform decides (partial pay, refund, or penalty).",
  }
]

export function EscrowSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const [slidePercent, setSlidePercent] = useState(33.333)

  // Clone first 3 items (max visible on desktop) to end for infinite loop
  const extendedSteps = [...escrowSteps, ...escrowSteps.slice(0, 3)]
  const totalOriginalSteps = escrowSteps.length

  // Set slide width based on viewport
  useEffect(() => {
    const updateWidth = () => {
      setSlidePercent(window.innerWidth < 1024 ? 100 : 33.333)
    }
    updateWidth()
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  const nextSlide = useCallback(() => {
    setIsTransitioning(true)
    setCurrentIndex((prev) => prev + 1)
  }, [])

  // Auto-slide every 3 seconds (continues even on hover)
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000)
    return () => clearInterval(interval)
  }, [nextSlide])

  const handleTransitionEnd = () => {
    if (currentIndex >= totalOriginalSteps) {
      setIsTransitioning(false)
      setCurrentIndex(currentIndex % totalOriginalSteps)
    }
  }

  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true)
        })
      })
    }
  }, [isTransitioning])

  const stepAccents = [
    { num: "text-cyan-500", dot: "bg-cyan-500" },
    { num: "text-emerald-500", dot: "bg-emerald-500" },
    { num: "text-violet-500", dot: "bg-violet-500" },
    { num: "text-amber-500", dot: "bg-amber-500" },
    { num: "text-rose-500", dot: "bg-rose-500" },
  ]

  return (
    <section id="escrow" className="relative bg-white py-28 overflow-hidden">
      <div className="mx-auto max-w-full">
        {/* Header */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16 mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.15)" }}>
            <Shield className="w-3.5 h-3.5" style={{ color: "#f59e0b" }} />
            <span className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: "#f59e0b" }}>
              Secure Payment System
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-6 leading-[1.15]">
            Lock funds safely, protect every delivery, and release payouts only when work is approved.
          </h2>
          <p className="text-base text-gray-800 max-w-2xl mx-auto leading-relaxed">
            Our escrow layer acts like a bank locker between brands, agencies, and talents — keeping payments fair, transparent, and automated.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative w-full border-y border-gray-100 overflow-hidden"
        >
          {/* Sliding Track */}
          <div
            className="flex"
            style={{
              transform: `translateX(-${currentIndex * slidePercent}%)`,
              transition: isTransitioning ? 'transform 700ms ease-in-out' : 'none'
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedSteps.map((step, index) => {
              const realIndex = index % totalOriginalSteps
              const isCardHovered = hoveredCard === index
              const anyCardHovered = hoveredCard !== null
              const cardWidth = isCardHovered ? '40%' : anyCardHovered ? '30%' : '33.333%'
              const accent = stepAccents[realIndex]

              return (
                <div
                  key={index}
                  className="relative flex-shrink-0 w-full min-h-[380px] border-r border-gray-100 p-6 lg:p-8 flex flex-col justify-between transition-all duration-700 ease-in-out bg-white hover:bg-gray-50 group"
                  style={{ width: undefined, flexBasis: cardWidth }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <span className={`text-6xl font-bebas ${accent.num} opacity-30 group-hover:opacity-80 transition-all`}>
                      .0{realIndex + 1}
                    </span>
                    <IconBox icon={step.icon} size="md" variant="gradient" accentColor="amber" className="shrink-0" />
                  </div>

                  <div className="relative z-10 mb-auto">
                    <h3 className="font-bebas text-4xl text-gray-900 uppercase tracking-wide mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-800 font-light leading-relaxed max-w-sm">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-6 h-48 w-full overflow-hidden rounded-xl opacity-70 group-hover:opacity-100 transition-all duration-700 group-hover:scale-[1.02]">
                    {(() => { const Visual = stepVisuals[realIndex]; return <Visual /> })()}
                  </div>

                  {/* Colored bottom accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${accent.dot} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                </div>
              )
            })}
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-12 gap-2">
          {escrowSteps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setIsTransitioning(true)
                setCurrentIndex(idx)
              }}
              className={`h-1 rounded-full transition-all duration-500 ${idx === (currentIndex % totalOriginalSteps) ? 'w-12 bg-amber-400' : 'w-4 bg-gray-200 hover:bg-gray-300'}`}
              aria-label={`Go to step ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
