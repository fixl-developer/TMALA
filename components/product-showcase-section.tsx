"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Trophy,
  Sparkles,
  Wallet,
  Users,
  TrendingUp,
  Camera,
  Image,
  CircleDot,
  FileText,
  CreditCard,
} from "lucide-react"
import { useAuthModal } from "@/components/auth-modal"

/* ═══════════════════════════════════════════════
   Compact Mock UI Cards
   ═══════════════════════════════════════════════ */

function EventCommandCenterCard() {
  return (
    <div className="rounded-xl bg-white shadow-[0_4px_24px_rgba(0,0,0,0.07)] p-3.5 w-full">
      <div className="flex items-center gap-1.5 mb-2.5">
        <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: "#e11d4810" }}>
          <Trophy className="w-3 h-3" style={{ color: "#e11d48" }} />
        </div>
        <span className="text-xs font-bold" style={{ color: "#111" }}>Event Command Center</span>
      </div>
      {[
        { name: "Miss Universe India", date: "Mar 15", badge: null, count: null },
        { name: "Fashion Week Delhi", date: "Apr 02", badge: "Upcoming", count: "—" },
        { name: "Mr. India 2026", date: "Feb 28", badge: "Completed", count: "8.9K" },
      ].map((e, i) => (
        <div key={e.name} className={`flex items-center justify-between py-2 ${i < 2 ? "border-b border-gray-100" : ""}`}>
          <div>
            <p className="text-[12px] font-semibold" style={{ color: "#111" }}>{e.name}</p>
            <p className="text-[10px]" style={{ color: "#999" }}>{e.date}</p>
          </div>
          {e.badge && (
            <div className="flex items-center gap-1">
              <span className="px-1.5 py-px rounded-full text-[9px] font-semibold" style={{ background: e.badge === "Upcoming" ? "#ecfdf5" : "#f0fdf4", color: e.badge === "Upcoming" ? "#059669" : "#16a34a" }}>{e.badge}</span>
              <Users className="w-2.5 h-2.5" style={{ color: "#bbb" }} />
              <span className="text-[10px]" style={{ color: "#888" }}>{e.count}</span>
            </div>
          )}
        </div>
      ))}
      <div className="flex items-center gap-1.5 mt-1.5 pt-1.5">
        <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#ef4444" }} />
        <span className="text-[10px] font-medium" style={{ color: "#666" }}>12,438 live votes</span>
        <TrendingUp className="w-2.5 h-2.5" style={{ color: "#059669" }} />
      </div>
    </div>
  )
}

function LiveScoringCard() {
  return (
    <div className="rounded-xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.10)] p-3 w-[120px]">
      <div className="flex items-center gap-1 mb-2">
        <Trophy className="w-2.5 h-2.5" style={{ color: "#e11d48" }} />
        <span className="text-[10px] font-bold" style={{ color: "#111" }}>Live Scoring</span>
      </div>
      {[
        { label: "Judge 1", score: "9.2" },
        { label: "Judge 2", score: "8.8" },
        { label: "Judge 3", score: "9.5" },
      ].map((j) => (
        <div key={j.label} className="flex items-center justify-between py-0.5">
          <span className="text-[10px]" style={{ color: "#666" }}>{j.label}</span>
          <span className="text-[11px] font-bold" style={{ color: "#e11d48" }}>{j.score}</span>
        </div>
      ))}
    </div>
  )
}

function AICompCardGeneratorCard() {
  return (
    <div className="rounded-xl bg-white shadow-[0_4px_24px_rgba(0,0,0,0.07)] p-3.5 w-full">
      <div className="flex items-center gap-1.5 mb-2.5">
        <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: "#d9770618" }}>
          <Sparkles className="w-3 h-3" style={{ color: "#d97706" }} />
        </div>
        <span className="text-xs font-bold" style={{ color: "#111" }}>AI Comp Card Generator</span>
      </div>
      <div className="flex gap-2.5 mb-2.5">
        <div className="w-[60px] h-[75px] rounded-lg flex flex-col items-center justify-center gap-1.5" style={{ background: "#fef3c7" }}>
          <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: "#fde68a" }}>
            <Camera className="w-3.5 h-3.5" style={{ color: "#d97706" }} />
          </div>
          <div className="w-10 h-1 rounded-full" style={{ background: "#fde68a" }} />
          <div className="w-7 h-1 rounded-full" style={{ background: "#fde68a" }} />
        </div>
        <div className="space-y-1 flex-1">
          {[
            { icon: Sparkles, label: "Auto-generating...", color: "#d97706" },
            { icon: CheckCircle2, label: "Portrait enhanced", color: "#16a34a" },
            { icon: CheckCircle2, label: "Bio written", color: "#16a34a" },
            { icon: CheckCircle2, label: "Stats compiled", color: "#16a34a" },
            { icon: CircleDot, label: "Matching to gigs...", color: "#d97706" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-1">
              <s.icon className="w-2.5 h-2.5" style={{ color: s.color }} />
              <span className="text-[10px] font-medium" style={{ color: "#333" }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-1.5 pt-1.5 border-t border-gray-100">
        <Image className="w-2.5 h-2.5" style={{ color: "#999" }} />
        <span className="text-[10px] font-medium" style={{ color: "#666" }}>12 photos enhanced</span>
        <CheckCircle2 className="w-2.5 h-2.5" style={{ color: "#16a34a" }} />
      </div>
    </div>
  )
}

function SmartMatchCard() {
  return (
    <div className="rounded-xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.10)] p-3 w-[120px]">
      <div className="flex items-center gap-1 mb-2">
        <Sparkles className="w-2.5 h-2.5" style={{ color: "#d97706" }} />
        <span className="text-[10px] font-bold" style={{ color: "#111" }}>Smart Match</span>
      </div>
      <p className="text-[9px]" style={{ color: "#666" }}>3 gigs matched</p>
      <p className="text-lg font-bold leading-tight" style={{ color: "#d97706" }}>98%</p>
      <p className="text-[9px]" style={{ color: "#666" }}>match rate</p>
    </div>
  )
}

function PaymentTrackerCard() {
  return (
    <div className="rounded-xl bg-white shadow-[0_4px_24px_rgba(0,0,0,0.07)] p-3.5 w-full">
      <div className="flex items-center gap-1.5 mb-2.5">
        <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: "#0d948818" }}>
          <Wallet className="w-3 h-3" style={{ color: "#0d9488" }} />
        </div>
        <span className="text-xs font-bold" style={{ color: "#111" }}>Payment Tracker</span>
      </div>
      {[
        { icon: CircleDot, name: "Campaign — Luxe Brand", sub: "In Escrow", amount: null },
        { icon: FileText, name: "Runway Fee — FW Delhi", sub: "Released", amount: "₹75,000" },
        { icon: CreditCard, name: "Commission Split", sub: "Auto-split", amount: "₹18,750" },
      ].map((p, i) => (
        <div key={p.name} className={`flex items-center justify-between py-2 ${i < 2 ? "border-b border-gray-100" : ""}`}>
          <div className="flex items-center gap-1.5">
            <p.icon className="w-3 h-3" style={{ color: "#bbb" }} />
            <div>
              <p className="text-[12px] font-semibold" style={{ color: "#111" }}>{p.name}</p>
              <p className="text-[10px]" style={{ color: "#999" }}>{p.sub}</p>
            </div>
          </div>
          {p.amount && <span className="text-[12px] font-bold" style={{ color: "#111" }}>{p.amount}</span>}
        </div>
      ))}
      <div className="flex items-center gap-1.5 mt-1.5 pt-1.5 border-t border-gray-100">
        <CreditCard className="w-2.5 h-2.5" style={{ color: "#0d9488" }} />
        <span className="text-[10px] font-medium" style={{ color: "#666" }}>Auto-split enabled</span>
        <CheckCircle2 className="w-2.5 h-2.5" style={{ color: "#16a34a" }} />
      </div>
    </div>
  )
}

function EscrowSafeCard() {
  return (
    <div className="rounded-xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.10)] p-3 w-[120px]">
      <div className="flex items-center gap-1 mb-2">
        <CircleDot className="w-2.5 h-2.5" style={{ color: "#0d9488" }} />
        <span className="text-[10px] font-bold" style={{ color: "#111" }}>Escrow Safe</span>
      </div>
      <p className="text-lg font-bold leading-tight" style={{ color: "#0d9488" }}>₹12.5L</p>
      <p className="text-[9px]" style={{ color: "#666" }}>Total funds secured</p>
    </div>
  )
}

/* ═══════════════════════════════════════════════ */

const showcases = [
  {
    label: "TMA Pageants & Events",
    labelIcon: Trophy,
    accent: "#e11d48",
    heading: "Run world-class events\nend to end.",
    description: "Create branded pageants and shows, invite or cast talents, manage judge panels, automate scoring, and announce winners — all from one command center.",
    bg: "#fee2e2",
    mainCard: EventCommandCenterCard,
    floatingCard: LiveScoringCard,
  },
  {
    label: "TMA AI Studio",
    labelIcon: Sparkles,
    accent: "#d97706",
    heading: "AI that works as hard\nas your talents do.",
    description: "Generate professional comp cards, retouch portfolio photos, write captivating bios, and auto-match talents to opportunities — all powered by built-in AI.",
    bg: "#fef3c7",
    mainCard: AICompCardGeneratorCard,
    floatingCard: SmartMatchCard,
  },
  {
    label: "TMA Secure Payments",
    labelIcon: Wallet,
    accent: "#0d9488",
    heading: "Every payment tracked.\nEvery payout on time.",
    description: "Escrow-backed payments protect both brands and talents. Funds release only on work approval, splits auto-calculate commissions, and every transaction is audit-ready.",
    bg: "#ccfbf1",
    mainCard: PaymentTrackerCard,
    floatingCard: EscrowSafeCard,
  },
]

/* ═══════════════════════════════════════════════
   Carousel — proper drag + momentum + infinite
   ═══════════════════════════════════════════════ */

const TOTAL = showcases.length
const GAP = 24

export function ProductShowcaseSection() {
  const { openAuth } = useAuthModal()
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const animFrameRef = useRef<number>(0)

  // Smooth-scrolling guard (prevents reposition during arrow navigation)
  const isNavigating = useRef(false)
  const navTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Drag
  const isDragging = useRef(false)
  const startX = useRef(0)
  const startScroll = useRef(0)
  const velocity = useRef(0)
  const lastX = useRef(0)
  const lastTime = useRef(0)

  const getStride = useCallback(() => {
    const el = trackRef.current?.querySelector("[data-slide]") as HTMLElement
    return el ? el.offsetWidth + GAP : 0
  }, [])

  // Jump to middle set instantly
  const jumpToMiddle = useCallback((index: number) => {
    const el = trackRef.current
    if (!el) return
    const stride = getStride()
    if (!stride) return
    el.scrollLeft = (TOTAL + index) * stride
  }, [getStride])

  // Smooth scroll to index in middle set
  const smoothTo = useCallback((index: number) => {
    const el = trackRef.current
    if (!el) return
    const stride = getStride()
    if (!stride) return
    el.scrollTo({ left: (TOTAL + index) * stride, behavior: "smooth" })
  }, [getStride])

  // Init: jump to middle
  useEffect(() => {
    const t = setTimeout(() => jumpToMiddle(0), 60)
    return () => clearTimeout(t)
  }, [jumpToMiddle])

  // Reposition for infinite loop (silent jump when in clone zone)
  const reposition = useCallback(() => {
    const el = trackRef.current
    if (!el || isDragging.current || isNavigating.current) return
    const stride = getStride()
    if (!stride) return
    const pos = el.scrollLeft
    const midStart = TOTAL * stride
    const midEnd = TOTAL * 2 * stride

    if (pos < midStart - stride * 0.3) {
      el.style.scrollBehavior = "auto"
      el.scrollLeft = pos + TOTAL * stride
      el.style.scrollBehavior = ""
    } else if (pos >= midEnd - stride * 0.3) {
      el.style.scrollBehavior = "auto"
      el.scrollLeft = pos - TOTAL * stride
      el.style.scrollBehavior = ""
    }
  }, [getStride])

  // Track active index
  const updateActive = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    const stride = getStride()
    if (!stride) return
    const midStart = TOTAL * stride
    const rel = el.scrollLeft - midStart
    const raw = Math.round(rel / stride)
    setActiveIndex(((raw % TOTAL) + TOTAL) % TOTAL)
  }, [getStride])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const onScroll = () => {
      updateActive()
      reposition()
    }
    el.addEventListener("scroll", onScroll, { passive: true })
    return () => el.removeEventListener("scroll", onScroll)
  }, [updateActive, reposition])

  // ── Drag handlers with velocity tracking ──
  const onPointerDown = (e: React.PointerEvent) => {
    const el = trackRef.current
    if (!el) return
    // Cancel any momentum animation
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current)
    isDragging.current = true
    startX.current = e.clientX
    startScroll.current = el.scrollLeft
    lastX.current = e.clientX
    lastTime.current = Date.now()
    velocity.current = 0
    el.style.cursor = "grabbing"
    el.setPointerCapture(e.pointerId)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return
    const el = trackRef.current
    if (!el) return

    const now = Date.now()
    const dt = now - lastTime.current
    const dx = e.clientX - lastX.current

    if (dt > 0) {
      velocity.current = dx / dt // px/ms
    }

    lastX.current = e.clientX
    lastTime.current = now

    el.scrollLeft = startScroll.current - (e.clientX - startX.current)
  }

  const onPointerUp = (e: React.PointerEvent) => {
    const el = trackRef.current
    if (!el) return
    isDragging.current = false
    el.style.cursor = "grab"
    el.releasePointerCapture(e.pointerId)

    const stride = getStride()
    if (!stride) return

    // Momentum: if velocity is significant, coast with deceleration then snap
    const v = velocity.current // px/ms
    const absV = Math.abs(v)

    // Guard reposition during snap animation
    isNavigating.current = true
    if (navTimer.current) clearTimeout(navTimer.current)

    if (absV > 0.3) {
      // Apply momentum
      let currentV = v * 12 // scale up for px/frame feel
      const friction = 0.92

      const coast = () => {
        if (Math.abs(currentV) < 0.5) {
          // Done coasting — smooth snap to nearest card
          const nearest = Math.round(el.scrollLeft / stride) * stride
          el.scrollTo({ left: nearest, behavior: "smooth" })
          navTimer.current = setTimeout(() => {
            isNavigating.current = false
            reposition()
          }, 500)
          return
        }
        el.scrollLeft -= currentV
        currentV *= friction
        animFrameRef.current = requestAnimationFrame(coast)
      }
      animFrameRef.current = requestAnimationFrame(coast)
    } else {
      // No momentum — smooth snap to nearest card
      const nearest = Math.round(el.scrollLeft / stride) * stride
      el.scrollTo({ left: nearest, behavior: "smooth" })
      navTimer.current = setTimeout(() => {
        isNavigating.current = false
        reposition()
      }, 500)
    }
  }

  const goTo = (dir: "left" | "right") => {
    const el = trackRef.current
    if (!el) return
    const stride = getStride()
    if (!stride) return
    // Block reposition during the smooth scroll
    isNavigating.current = true
    if (navTimer.current) clearTimeout(navTimer.current)
    // Always scroll one stride in the clicked direction — never reverse
    const target = dir === "left" ? el.scrollLeft - stride : el.scrollLeft + stride
    el.scrollTo({ left: target, behavior: "smooth" })
    // After animation completes, reposition silently to middle set
    navTimer.current = setTimeout(() => {
      isNavigating.current = false
      reposition()
    }, 500)
  }

  // Build 3x slides for infinite
  const allSlides = [...showcases, ...showcases, ...showcases]

  return (
    <section data-testid="section-product-showcase" aria-label="Product showcase" className="relative py-16 lg:py-24 overflow-hidden" style={{ background: "#fff" }}>
      {/* Header */}
      <div className="text-center mb-12 px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] mb-4" style={{ color: "#888" }}>
          Product suite
        </p>
        <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-tight tracking-tight" style={{ color: "#111" }}>
          Everything your agency needs,<br />
          <span style={{ color: "#e11d48" }}>all in one platform</span>
        </h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: "#555" }}>
          Each product solves a specific need, and together, they power seamless operations across your entire agency.
        </p>
      </div>

      {/* Carousel */}
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto select-none touch-pan-y"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
          cursor: "grab",
          paddingLeft: "max(1rem, calc((100vw - min(1100px, 78vw)) / 2))",
          paddingRight: "max(1rem, calc((100vw - min(1100px, 78vw)) / 2))",
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {allSlides.map((item, i) => {
          const LabelIcon = item.labelIcon
          const MainCard = item.mainCard
          const FloatingCard = item.floatingCard

          return (
            <div
              key={`${item.label}-${i}`}
              data-slide
              className="shrink-0 rounded-[2rem] overflow-hidden"
              style={{ width: "min(1100px, 78vw)", background: item.bg }}
            >
              {/* Top text */}
              <div className="px-7 sm:px-10 lg:px-12 pt-8 sm:pt-10 pb-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: item.accent + "18" }}>
                    <LabelIcon className="w-4 h-4" style={{ color: item.accent }} />
                  </div>
                  <span className="text-[13px] font-bold" style={{ color: item.accent }}>{item.label}</span>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-12">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.12] mb-4 lg:mb-0 shrink-0 lg:max-w-[55%]" style={{ color: "#111" }}>
                    {item.heading.split("\n").map((line, idx) => (
                      <span key={idx}>{line}{idx === 0 && <br />}</span>
                    ))}
                  </h3>
                  <div className="lg:max-w-xs">
                    <p className="text-[14px] leading-relaxed mb-5" style={{ color: "#444" }}>{item.description}</p>
                    <button data-testid={`btn-get-started-${item.label.toLowerCase().replace(/\s+/g, "-")}`} aria-label={`Get started with ${item.label}`} onClick={() => openAuth()} className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[13px] font-semibold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5" style={{ background: "#111" }}>
                      Get Started <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom mockup — edge-to-edge */}
              <div className="relative px-7 sm:px-10 lg:px-12 pb-6 pt-1">
                <div className="relative">
                  <div className="relative z-10 pr-[130px] sm:pr-[150px]">
                    <MainCard />
                  </div>
                  <div className="absolute top-0 right-7 sm:right-10 lg:right-12 z-20">
                    <FloatingCard />
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <style jsx>{`div::-webkit-scrollbar { display: none; }`}</style>

      {/* Arrows — right aligned */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mt-8 flex items-center justify-end gap-3">
        <button
          data-testid="btn-previous"
          onClick={() => goTo("left")}
          className="w-11 h-11 rounded-full border-2 flex items-center justify-center transition-all duration-200 hover:bg-gray-50 active:scale-95"
          style={{ borderColor: "#ddd", color: "#333" }}
          aria-label="Previous"
        >
          <ArrowLeft className="w-4.5 h-4.5" />
        </button>
        <button
          data-testid="btn-next"
          onClick={() => goTo("right")}
          className="w-11 h-11 rounded-full border-2 flex items-center justify-center transition-all duration-200 hover:bg-gray-50 active:scale-95"
          style={{ borderColor: "#ddd", color: "#333" }}
          aria-label="Next"
        >
          <ArrowRight className="w-4.5 h-4.5" />
        </button>
      </div>
    </section>
  )
}
