"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import Link from "next/link"
import { useAuthModal } from "@/components/auth-modal"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Users,
  Sparkles,
  ChevronRight,
  Shield,
  Zap,
  Globe,
  Play,
} from "lucide-react"
import {
  AGENCY_TYPES,
  AGENCY_CATEGORIES,
  getAgencyHref,
} from "@/lib/agencies-data"

/* ── Hero slide data: one per category with a curated video ── */
const HERO_SLIDES = [
  {
    key: "talent-roster",
    label: "Talent & Roster",
    tagline: "Roster, booking & talent lifecycle",
    headline: "Manage every talent relationship",
    accent: "#8b5cf6",
    video: "https://assets.mixkit.co/videos/41662/41662-720.mp4", // model portrait with wind
  },
  {
    key: "casting-production",
    label: "Casting & Production",
    tagline: "Casting, studios & creative production",
    headline: "Streamline casting to wrap",
    accent: "#06b6d4",
    video: "https://assets.mixkit.co/videos/22994/22994-720.mp4", // film crew on set
  },
  {
    key: "brand-creator",
    label: "Brand & Creator",
    tagline: "Influencer, brand deals & content",
    headline: "Power creator partnerships",
    accent: "#10b981",
    video: "https://assets.mixkit.co/videos/41272/41272-720.mp4", // youtuber vlogging in studio
  },
  {
    key: "events-community",
    label: "Events & Community",
    tagline: "Pageants, events, staffing & communities",
    headline: "Orchestrate unforgettable events",
    accent: "#f59e0b",
    video: "https://assets.mixkit.co/videos/47775/47775-720.mp4", // fashion show runway walk
  },
  {
    key: "academy-marketplace",
    label: "Academy & Marketplace",
    tagline: "Training, marketplace & multi-agency groups",
    headline: "Scale learning & commerce",
    accent: "#6366f1",
    video: "https://assets.mixkit.co/videos/12949/12949-720.mp4", // business seminar presentation
  },
]

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

const categoryAccentHex: Record<string, string> = {
  "talent-roster": "#8b5cf6",
  "casting-production": "#06b6d4",
  "brand-creator": "#10b981",
  "events-community": "#f59e0b",
  "academy-marketplace": "#6366f1",
}

export default function AllAgenciesPage() {
  const { openAuth } = useAuthModal()
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const filteredAgencies = AGENCY_TYPES.filter((agency) => {
    return (
      !activeCategory ||
      AGENCY_CATEGORIES.find((c) => c.key === activeCategory)?.slugs.includes(
        agency.slug
      )
    )
  })

  const [activeSlide, setActiveSlide] = useState(0)
  const [progress, setProgress] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const SLIDE_DURATION = 6000

  const goToSlide = useCallback((index: number) => {
    setActiveSlide(index)
    setProgress(0)
  }, [])

  /* Auto-advance slides */
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)

    const startTime = Date.now()
    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime
      const pct = Math.min((elapsed / SLIDE_DURATION) * 100, 100)
      setProgress(pct)
      if (pct >= 100) {
        setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length)
        setProgress(0)
        clearInterval(intervalRef.current!)
      }
    }, 50)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [activeSlide])

  /* Swap video source on slide change */
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = HERO_SLIDES[activeSlide].video
      videoRef.current.load()
      videoRef.current.play().catch(() => {})
    }
  }, [activeSlide])

  const currentSlide = HERO_SLIDES[activeSlide]

  return (
    <main className="min-h-screen bg-white" style={{ paddingTop: "4rem" }} data-testid="section-all-agencies" aria-label="All agencies page">
      {/* ───── SECTION 1: Full-width Video Banner ───── */}
      <section className="relative w-full overflow-hidden" style={{ background: "#08080a" }} data-testid="section-hero-banner" aria-label="Hero video banner">
        {/* Background video — hidden controls, no URL visible */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            style={{ opacity: 0.7 }}
            src={HERO_SLIDES[0].video}
            autoPlay
            muted
            loop
            playsInline
            controlsList="nodownload nofullscreen noremoteplayback"
            disablePictureInPicture
          />
          {/* Bottom fade */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(to top, #08080a 0%, rgba(8,8,10,0.15) 50%, rgba(8,8,10,0.3) 100%)",
            }}
          />
          {/* Accent tint */}
          <div
            className="absolute inset-0 pointer-events-none transition-all duration-700"
            style={{
              background: `linear-gradient(135deg, ${currentSlide.accent}20 0%, transparent 60%)`,
            }}
          />
        </div>

        <div className="relative z-10 py-8 lg:py-10">
          {/* Top: Category pills */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
            <div className="flex flex-wrap justify-center gap-2">
              {HERO_SLIDES.map((slide, i) => {
                const isActive = i === activeSlide
                return (
                  <button
                    key={slide.key}
                    onClick={() => goToSlide(i)}
                    data-testid={`btn-hero-slide-${slide.key}`}
                    aria-label={`View ${slide.label} category`}
                    className="relative px-5 py-2.5 rounded-full text-[12px] sm:text-[13px] font-bold uppercase tracking-wider transition-all duration-300 overflow-hidden"
                    style={{
                      background: isActive ? slide.accent : "rgba(255,255,255,0.08)",
                      border: `1.5px solid ${isActive ? slide.accent : "rgba(255,255,255,0.15)"}`,
                      color: isActive ? "#fff" : "rgba(255,255,255,0.75)",
                      boxShadow: isActive ? `0 4px 20px ${slide.accent}50` : "none",
                    }}
                  >
                    {isActive && (
                      <div
                        className="absolute left-0 bottom-0 h-[2px] transition-none"
                        style={{
                          width: `${progress}%`,
                          background: "rgba(255,255,255,0.5)",
                        }}
                      />
                    )}
                    {slide.label}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Center: Main content */}
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-bold leading-[1.15] mb-4 text-white drop-shadow-lg">
              {currentSlide.headline}
            </h1>

            <p
              className="text-sm sm:text-base leading-relaxed mb-6 max-w-lg mx-auto"
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              {currentSlide.tagline} — tailored workflows, modules, and
              dashboards built for your vertical.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => openAuth()}
                data-testid="btn-hero-start-free-trial"
                aria-label="Start free trial"
                className="inline-flex items-center gap-2 font-bold px-7 py-3 text-sm rounded-full text-white transition-all duration-200 hover:scale-[1.02]"
                style={{
                  background: currentSlide.accent,
                  boxShadow: `0 4px 20px ${currentSlide.accent}40`,
                }}
              >
                Start Free Trial
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <Link
                href="#agencies-grid"
                data-testid="link-browse-all-types"
                className="inline-flex items-center gap-2 font-bold px-7 py-3 text-sm rounded-full transition-all duration-200 hover:scale-[1.02]"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#fff",
                }}
              >
                Browse All 22 Types
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ───── SECTION 2: Category Filters + Grid — Dark ───── */}
      <section id="agencies-grid" className="relative py-20 lg:py-28" style={{ background: "#08080a" }} data-testid="section-agencies-grid" aria-label="Agency types grid">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filter pills */}
          <div className="flex flex-wrap items-center gap-2 mb-12">
            <button
              onClick={() => setActiveCategory(null)}
              data-testid="btn-filter-all-types"
              aria-label="Show all agency types"
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              style={{
                background: !activeCategory
                  ? "rgba(255,255,255,0.15)"
                  : "rgba(255,255,255,0.05)",
                border: `1px solid ${!activeCategory ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.10)"}`,
                color: !activeCategory
                  ? "#fff"
                  : "rgba(255,255,255,0.7)",
              }}
            >
              All Types
              <span
                className="ml-2 text-xs"
                style={{ color: !activeCategory ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.45)" }}
              >
                {AGENCY_TYPES.length}
              </span>
            </button>

            {AGENCY_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.key
              const hex = categoryAccentHex[cat.key] || "#6366f1"
              return (
                <button
                  key={cat.key}
                  onClick={() =>
                    setActiveCategory(isActive ? null : cat.key)
                  }
                  data-testid={`btn-filter-${cat.key}`}
                  aria-label={`Filter by ${cat.label}`}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                  style={{
                    background: isActive ? hex : "rgba(255,255,255,0.04)",
                    border: `1px solid ${isActive ? hex : hex + "40"}`,
                    color: isActive ? "#fff" : hex,
                  }}
                >
                  {cat.label}
                  <span
                    className="ml-2 text-xs"
                    style={{ color: isActive ? "rgba(255,255,255,0.85)" : hex + "90" }}
                  >
                    {cat.slugs.length}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Agency cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredAgencies.map((agency) => {
              const hex = accentHexMap[agency.accent] || "#6366f1"
              return (
                <Link
                  key={agency.slug}
                  href={getAgencyHref(agency.slug)}
                  data-testid={`link-agency-${agency.slug}`}
                  className="group rounded-xl p-5 flex flex-col transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = hex + "30"
                    e.currentTarget.style.background = hex + "06"
                    e.currentTarget.style.transform = "translateY(-3px)"
                    e.currentTarget.style.boxShadow = `0 16px 48px ${hex}10`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"
                    e.currentTarget.style.background = "rgba(255,255,255,0.02)"
                    e.currentTarget.style.transform = "translateY(0)"
                    e.currentTarget.style.boxShadow = "none"
                  }}
                >
                  {/* Accent dot + label */}
                  <div className="flex items-center gap-2 mb-4">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: hex }}
                    />
                    <span
                      className="text-[11px] font-bold uppercase tracking-widest"
                      style={{ color: hex }}
                    >
                      Agency Type
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-base font-bold text-white mb-2 leading-tight group-hover:text-white transition-colors"
                  >
                    {agency.name}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-[13px] leading-relaxed flex-1 mb-4"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                  >
                    {agency.shortDescription}
                  </p>

                  {/* Modules preview */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {agency.modules.slice(0, 3).map((mod) => (
                      <span
                        key={mod}
                        className="text-[11px] px-2 py-0.5 rounded-md"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          color: "rgba(255,255,255,0.65)",
                          border: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        {mod.length > 20 ? mod.slice(0, 20) + "…" : mod}
                      </span>
                    ))}
                    {agency.modules.length > 3 && (
                      <span
                        className="text-[11px] px-2 py-0.5 rounded-md"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          color: "rgba(255,255,255,0.45)",
                        }}
                      >
                        +{agency.modules.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center gap-1 mt-auto">
                    <span
                      className="text-[11px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      style={{ color: hex }}
                    >
                      Explore
                    </span>
                    <ChevronRight
                      className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200"
                      style={{ color: hex }}
                    />
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Empty state */}
          {filteredAgencies.length === 0 && (
            <div className="text-center py-16">
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                No agency types match your search.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ───── SECTION 3: Why TalentOS — White ───── */}
      <section className="relative py-20 lg:py-28" style={{ background: "#fff" }} data-testid="section-why-talentos" aria-label="Why TalentOS">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p
              className="text-[11px] font-bold uppercase tracking-[0.4em] mb-3"
              style={{ color: "#6366f1" }}
            >
              Why TalentOS
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-3"
              style={{ color: "#111" }}
            >
              One platform, every workflow.
            </h2>
            <p className="text-sm max-w-lg mx-auto" style={{ color: "#666" }}>
              No matter your agency type, TalentOS adapts to your exact
              workflow — from onboarding to payouts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: Shield,
                title: "Tenant Isolation",
                desc: "Your data is yours. Schema-level isolation, encrypted at rest.",
                color: "#22c55e",
              },
              {
                icon: Zap,
                title: "Instant Setup",
                desc: "Go live in minutes. Custom branding, subdomain, and feature toggles.",
                color: "#f59e0b",
              },
              {
                icon: Sparkles,
                title: "AI-Powered",
                desc: "Smart matching, automated scoring, and predictive analytics built in.",
                color: "#8b5cf6",
              },
              {
                icon: Globe,
                title: "Global Payments",
                desc: "Multi-currency payouts with escrow. Razorpay, Stripe, and more.",
                color: "#06b6d4",
              },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="rounded-xl p-6 transition-all duration-200"
                  style={{
                    background: "#fafafa",
                    border: "1px solid #eee",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = item.color + "30"
                    e.currentTarget.style.transform = "translateY(-2px)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#eee"
                    e.currentTarget.style.transform = "translateY(0)"
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{ background: item.color + "10" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <h3 className="text-sm font-bold mb-2" style={{ color: "#222" }}>
                    {item.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: "#666" }}>
                    {item.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ───── SECTION 4: CTA — Dark ───── */}
      <section className="relative py-24" style={{ background: "#0a0a0a" }} data-testid="section-cta" aria-label="Call to action">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to transform your{" "}
            <span style={{ color: "#6366f1" }}>agency</span>?
          </h2>
          <p
            className="text-sm leading-relaxed mb-8"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            Start free — no credit card required. 14-day trial with full access.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={() => openAuth()}
              size="lg"
              data-testid="btn-cta-start-free-trial"
              aria-label="Start free trial"
              className="rounded-xl px-8 py-6 text-sm font-semibold text-white"
              style={{ background: "#6366f1" }}
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Link href="/" data-testid="link-back-to-home">
              <Button
                size="lg"
                variant="outline"
                data-testid="btn-back-to-home"
                aria-label="Back to home"
                className="rounded-xl px-8 py-6 text-sm font-semibold"
                style={{
                  borderColor: "rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                Back to Home
                <ChevronRight className="ml-1 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
