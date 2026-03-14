"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  User,
  Sparkles,
  Camera,
  Shield,
  Search,
  Trophy,
  Zap,
  ChevronRight,
  ArrowRight,
  ArrowDown,
  Users,
  Building2,
  Smartphone,
  Bell,
  BarChart3,
  Plus,
  Mic,
  Palette,
  Heart,
} from "lucide-react"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { VideoBannerSlider } from "@/components/video-banner-slider"

const features = [
  {
    icon: User,
    title: "Verified Profiles",
    description:
      "ID-verified profiles with authenticity badges that agencies and casting directors trust instantly.",
    color: "#8b5cf6",
    pattern: "diagonal",
  },
  {
    icon: Sparkles,
    title: "AI-Enhanced Portfolios",
    description:
      "AI auto-enhances your photos, scores quality, and organizes your entire portfolio by category.",
    color: "#f472b6",
    pattern: "dots",
  },
  {
    icon: Camera,
    title: "Professional Showcase",
    description:
      "Mobile-responsive portfolio pages that display your best work with cinematic presentation.",
    color: "#f97316",
    pattern: "crosses",
  },
  {
    icon: Search,
    title: "Agency Discovery",
    description:
      "Get discovered by top agencies actively scouting for new talent across all categories.",
    color: "#10b981",
    pattern: "waves",
  },
  {
    icon: Trophy,
    title: "Opportunity Access",
    description:
      "Direct casting calls, pageant entries, brand deals, and exclusive gigs — all in one feed.",
    color: "#6366f1",
    pattern: "grid",
  },
  {
    icon: Shield,
    title: "Secure Platform",
    description:
      "Enterprise-grade encryption, consent management, and full control over your data and media.",
    color: "#0ea5e9",
    pattern: "rings",
  },
]

function PatternGraphic({ pattern, color }: { pattern: string; color: string }) {
  if (pattern === "diagonal") {
    return (
      <svg width="220" height="180" viewBox="0 0 220 180" fill="none">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <rect key={i} x={-5 + i * 38} y={-20 + i * 10} width={28} height={110} rx={14} fill={color} transform={`rotate(-40 ${9 + i * 38} ${35 + i * 10})`} />
        ))}
      </svg>
    )
  }
  if (pattern === "dots") {
    return (
      <svg width="220" height="180" viewBox="0 0 220 180" fill="none">
        {[0, 1, 2, 3].map((row) =>
          [0, 1, 2, 3].map((col) => {
            const cx = 15 + col * 48 + (row % 2 ? 24 : 0)
            const cy = 10 + row * 44
            const r = 16 + Math.sin(row * 2 + col) * 4
            return <circle key={`${row}-${col}`} cx={cx} cy={cy} r={r} fill={color} opacity={0.75 + row * 0.06} />
          })
        )}
      </svg>
    )
  }
  if (pattern === "crosses") {
    return (
      <svg width="220" height="180" viewBox="0 0 220 180" fill="none">
        {[0, 1, 2].map((row) =>
          [0, 1, 2, 3].map((col) => {
            const x = 20 + col * 52 + (row % 2 ? 26 : 0)
            const y = 20 + row * 56
            const s = 22 + col * 3
            const t = 10
            return (
              <g key={`${row}-${col}`}>
                <rect x={x - t / 2} y={y - s / 2} width={t} height={s} rx={t / 2} fill={color} />
                <rect x={x - s / 2} y={y - t / 2} width={s} height={t} rx={t / 2} fill={color} />
              </g>
            )
          })
        )}
      </svg>
    )
  }
  if (pattern === "waves") {
    return (
      <svg width="220" height="180" viewBox="0 0 220 180" fill="none">
        {[0, 1, 2, 3, 4].map((i) => (
          <path key={i} d={`M-10 ${18 + i * 35} Q55 ${-2 + i * 35} 110 ${18 + i * 35} T230 ${18 + i * 35}`} stroke={color} strokeWidth={10} fill="none" opacity={0.4 + i * 0.12} strokeLinecap="round" />
        ))}
      </svg>
    )
  }
  if (pattern === "grid") {
    return (
      <svg width="220" height="180" viewBox="0 0 220 180" fill="none">
        {[0, 1, 2, 3].map((row) =>
          [0, 1, 2, 3, 4].map((col) => (
            <rect key={`${row}-${col}`} x={5 + col * 42} y={5 + row * 42} width={32} height={32} rx={8} fill={color} opacity={(row + col) % 2 === 0 ? 0.85 : 0.3} />
          ))
        )}
      </svg>
    )
  }
  // rings
  return (
    <svg width="220" height="180" viewBox="0 0 220 180" fill="none">
      <circle cx="110" cy="85" r="75" stroke={color} strokeWidth={8} fill="none" opacity={0.2} />
      <circle cx="110" cy="85" r="52" stroke={color} strokeWidth={8} fill="none" opacity={0.4} />
      <circle cx="110" cy="85" r="30" stroke={color} strokeWidth={8} fill="none" opacity={0.65} />
      <circle cx="110" cy="85" r={10} fill={color} opacity={0.85} />
    </svg>
  )
}

function PatternGraphicInline({ pattern, color }: { pattern: string; color: string }) {
  if (pattern === "diagonal") {
    return (
      <>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <rect key={i} x={-5 + i * 38} y={-20 + i * 10} width={28} height={110} rx={14} fill={color} opacity={0.7 + i * 0.05} transform={`rotate(-40 ${9 + i * 38} ${35 + i * 10})`} />
        ))}
      </>
    )
  }
  if (pattern === "dots") {
    return (
      <>
        {[0, 1, 2, 3].map((row) =>
          [0, 1, 2, 3].map((col) => {
            const cx = 15 + col * 48 + (row % 2 ? 24 : 0)
            const cy = 10 + row * 44
            const r = 16 + Math.sin(row * 2 + col) * 4
            return <circle key={`${row}-${col}`} cx={cx} cy={cy} r={r} fill={color} opacity={0.55 + row * 0.1} />
          })
        )}
      </>
    )
  }
  if (pattern === "crosses") {
    return (
      <>
        {[0, 1, 2].map((row) =>
          [0, 1, 2, 3].map((col) => {
            const x = 20 + col * 52 + (row % 2 ? 26 : 0)
            const y = 20 + row * 56
            const s = 22 + col * 3
            const t = 10
            return (
              <g key={`${row}-${col}`}>
                <rect x={x - t / 2} y={y - s / 2} width={t} height={s} rx={t / 2} fill={color} opacity={0.85} />
                <rect x={x - s / 2} y={y - t / 2} width={s} height={t} rx={t / 2} fill={color} opacity={0.85} />
              </g>
            )
          })
        )}
      </>
    )
  }
  if (pattern === "waves") {
    return (
      <>
        {[0, 1, 2, 3, 4].map((i) => (
          <path key={i} d={`M-10 ${18 + i * 35} Q55 ${-2 + i * 35} 110 ${18 + i * 35} T230 ${18 + i * 35}`} stroke={color} strokeWidth={12} fill="none" opacity={0.45 + i * 0.12} strokeLinecap="round" />
        ))}
      </>
    )
  }
  if (pattern === "grid") {
    return (
      <>
        {[0, 1, 2, 3].map((row) =>
          [0, 1, 2, 3, 4].map((col) => (
            <rect key={`${row}-${col}`} x={5 + col * 42} y={5 + row * 42} width={32} height={32} rx={8} fill={color} opacity={(row + col) % 2 === 0 ? 0.8 : 0.35} />
          ))
        )}
      </>
    )
  }
  // rings
  return (
    <>
      <circle cx="110" cy="85" r="75" stroke={color} strokeWidth={10} fill="none" opacity={0.3} />
      <circle cx="110" cy="85" r="52" stroke={color} strokeWidth={10} fill="none" opacity={0.5} />
      <circle cx="110" cy="85" r="30" stroke={color} strokeWidth={10} fill="none" opacity={0.7} />
      <circle cx="110" cy="85" r={12} fill={color} opacity={0.9} />
    </>
  )
}

const benefits = [
  {
    icon: User,
    title: "Guided Onboarding",
    description:
      "Go live in under 10 minutes with our step-by-step profile creation wizard.",
  },
  {
    icon: Sparkles,
    title: "AI Photo Enhancement",
    description:
      "AI automatically enhances, tags, and organizes every photo you upload.",
  },
  {
    icon: Building2,
    title: "Direct Agency Messaging",
    description:
      "Message verified agencies directly — no middlemen, no gatekeeping.",
  },
  {
    icon: Bell,
    title: "Real-Time Alerts",
    description:
      "Instant notifications the moment a new matching opportunity is posted.",
  },
  {
    icon: Smartphone,
    title: "Mobile Portfolio App",
    description:
      "Manage and update your portfolio from anywhere, on any device.",
  },
  {
    icon: BarChart3,
    title: "Profile Analytics",
    description:
      "See who viewed your profile, which photos perform best, and how to improve.",
  },
]

const talentTypes = [
  {
    icon: User,
    title: "Models",
    subtitle: "Your next big break starts here",
    tagline: "Look stunning. Get discovered.",
    perks: [
      "AI-enhanced portfolio photos",
      "Instant comp card builder",
      "Direct agency connections",
      "Casting alerts that match you",
    ],
    badge: "Most Popular",
    bg: "#a78bfa",
    avatar: "/avatars/model.svg",
  },
  {
    icon: Camera,
    title: "Actors",
    subtitle: "Get cast, not overlooked",
    tagline: "Your talent. The right stage.",
    perks: [
      "Showreel & self-tape hosting",
      "Auto-matched casting calls",
      "Audition tracking dashboard",
      "Verified director connections",
    ],
    badge: null,
    bg: "#c4b5fd",
    avatar: "/avatars/actor.svg",
  },
  {
    icon: Heart,
    title: "Dancers",
    subtitle: "Let your moves do the talking",
    tagline: "Dance more. Hustle less.",
    perks: [
      "Performance reel showcase",
      "Event & brand gig alerts",
      "Choreography portfolio",
      "One-click applications",
    ],
    badge: null,
    bg: "#10b981",
    avatar: "/avatars/dancer.svg",
  },
  {
    icon: Mic,
    title: "Musicians",
    subtitle: "Your sound deserves a stage",
    tagline: "Play. Get heard. Get booked.",
    perks: [
      "Track & live clip hosting",
      "Event organizer discovery",
      "Brand campaign matching",
      "Gig booking made simple",
    ],
    badge: null,
    bg: "#fbbf24",
    avatar: "/avatars/musician.svg",
  },
  {
    icon: Sparkles,
    title: "Influencers",
    subtitle: "Grow your brand, land bigger deals",
    tagline: "Your audience. Better deals.",
    perks: [
      "Social analytics sync",
      "Brand deal marketplace",
      "Collab portfolio showcase",
      "Direct brand offers",
    ],
    badge: null,
    bg: "#f472b6",
    avatar: "/avatars/influencer.svg",
  },
  {
    icon: Palette,
    title: "Artists",
    subtitle: "Show the world what you create",
    tagline: "Create. Exhibit. Get noticed.",
    perks: [
      "Digital gallery builder",
      "Exhibition documentation",
      "Curator & brand connections",
      "AI-powered art tagging",
    ],
    badge: null,
    bg: "#818cf8",
    avatar: "/avatars/artist.svg",
  },
]

const stats = [
  { value: "10K+", label: "Talents Onboarded" },
  { value: "500+", label: "Verified Agencies" },
  { value: "3K+", label: "Bookings Made" },
]

function SpectrumCard({ item }: { item: typeof talentTypes[0] }) {
  const Icon = item.icon
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="group rounded-3xl p-8 pb-7 flex flex-col relative overflow-hidden cursor-default"
      style={{ background: item.bg, height: 340 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Default state — title, subtitle + 3D avatar */}
      <div
        className="flex-1 flex flex-col transition-all duration-500 ease-out"
        style={{
          opacity: hovered ? 0 : 1,
          transform: hovered ? "translateY(-30px)" : "translateY(0)",
          pointerEvents: hovered ? "none" : "auto",
        }}
      >
        <div className="pt-4">
          <h3
            className="text-[2rem] sm:text-[2.2rem] font-bold leading-[1.05] mb-2"
            style={{ color: "#111" }}
          >
            {item.title}
          </h3>
          <p className="text-[14px] leading-relaxed" style={{ color: "rgba(0,0,0,0.6)" }}>
            {item.subtitle}
          </p>
        </div>
      </div>

      {/* 3D Character avatar — bottom right */}
      <div
        className="absolute bottom-0 right-0 pointer-events-none transition-all duration-500 ease-out"
        style={{
          transform: hovered ? "translateY(20px) scale(0.9)" : "translateY(0) scale(1)",
          opacity: hovered ? 0.3 : 1,
        }}
      >
        <img
          src={item.avatar}
          alt={item.title}
          className="w-[180px] h-[200px] object-contain object-bottom drop-shadow-xl"
        />
      </div>

      {/* Hover state — rich content */}
      <div
        className="absolute inset-0 p-8 pb-7 flex flex-col transition-all duration-500 ease-out"
        style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateY(0)" : "translateY(30px)",
          pointerEvents: hovered ? "auto" : "none",
        }}
      >
        <div className="flex-1 flex flex-col">
          {/* Tagline */}
          <p
            className="text-[18px] font-bold mb-5 leading-tight"
            style={{ color: "#111" }}
          >
            {item.tagline}
          </p>

          {/* Perks */}
          <div className="space-y-3">
            {item.perks.map((perk, idx) => (
              <div key={idx} className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(0,0,0,0.1)" }}>
                  <ChevronRight className="w-3 h-3" style={{ color: "#111" }} />
                </div>
                <span className="text-[14px] font-medium" style={{ color: "#111" }}>{perk}</span>
              </div>
            ))}
          </div>

          {/* Badge */}
          {item.badge && (
            <div className="mt-auto pt-4 inline-flex items-center gap-2">
              <Trophy className="w-5 h-5" style={{ color: "#333" }} />
              <span className="text-sm font-bold" style={{ color: "#111" }}>
                {item.badge}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Toggle icon — bottom right */}
      <div className="absolute bottom-6 right-7 z-10">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
          style={{ background: "rgba(0,0,0,0.12)" }}
        >
          <Plus
            className="w-5 h-5 transition-transform duration-300"
            style={{
              color: "rgba(0,0,0,0.65)",
              transform: hovered ? "rotate(45deg)" : "rotate(0deg)",
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default function TalentsPage() {
  const [benefitsVisible, setBenefitsVisible] = useState(false)
  const benefitsSectionRef = useRef<HTMLElement>(null)
  const nextSectionRef = useRef<HTMLElement>(null)

  const scrollToNext = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setBenefitsVisible(true)
        })
      },
      { threshold: 0.2 }
    )
    if (benefitsSectionRef.current)
      observer.observe(benefitsSectionRef.current)
    return () => {
      if (benefitsSectionRef.current)
        observer.unobserve(benefitsSectionRef.current)
    }
  }, [])

  return (
    <main className="min-h-screen">
      {/* ───── VIDEO BANNER SLIDER ───── */}
      <VideoBannerSlider />

      {/* ───── SECTION 1: Intro — Light ───── */}
      <section className="relative w-full overflow-hidden py-20 lg:py-28" style={{ background: "#fff" }}>
        {/* Subtle ambient glow */}
        <div
          className="absolute z-[1] rounded-full pointer-events-none"
          style={{ width: 800, height: 800, top: -200, right: -200, background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)", filter: "blur(60px)" }}
        />
        <div
          className="absolute z-[1] rounded-full pointer-events-none"
          style={{ width: 600, height: 600, bottom: -100, left: -100, background: "radial-gradient(circle, rgba(139,92,246,0.04) 0%, transparent 70%)", filter: "blur(60px)" }}
        />

        <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-7"
            style={{ background: "rgba(99,102,241,0.08)", border: "1px solid rgba(99,102,241,0.15)", color: "#6366f1" }}
          >
            <Sparkles className="w-3 h-3" />
            For Creative Talents
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-6">
            <span style={{ color: "#111" }}>Accelerate your talent career</span>
            <br />
            <span style={{ color: "#6366f1" }}>from profile to booking.</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-[16px] leading-relaxed mb-8 max-w-lg mx-auto"
            style={{ color: "#555" }}
          >
            Create a verified portfolio, connect directly with top
            agencies, and unlock casting and pageant opportunities — all
            in one intelligent platform.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            <Button
              className="font-bold px-7 py-3.5 text-sm rounded-full h-auto text-white hover:scale-[1.02] transition-all duration-200"
              style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", boxShadow: "0 4px 16px rgba(99,102,241,0.3)" }}
            >
              Create Talent Profile
            </Button>
            <Button
              variant="outline"
              className="font-semibold px-7 py-3.5 text-sm rounded-full h-auto inline-flex items-center gap-2 hover:bg-gray-50 transition-all duration-200"
              style={{ color: "#333", background: "#fff", border: "1px solid #e5e7eb" }}
              onClick={scrollToNext}
            >
              Explore Opportunities
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </div>

          {/* Trust bar */}
          <div className="flex items-center gap-6 flex-wrap justify-center">
            {stats.map((s, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-sm font-bold" style={{ color: "#111" }}>{s.value}</span>
                <span className="text-xs" style={{ color: "#888" }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── SECTION 2: Talent Spectrum — Monday.com style ───── */}
      <section
        ref={nextSectionRef}
        className="relative py-24 lg:py-28"
        style={{ background: "#fff" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl lg:text-[3.2rem] font-bold leading-tight max-w-3xl mx-auto"
              style={{ color: "#111" }}
            >
              One platform for every creative profession
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {talentTypes.map((type, index) => (
              <SpectrumCard key={index} item={type} />
            ))}
          </div>
        </div>
      </section>

      {/* ───── SECTION 3: Career Features — Light ───── */}
      <section
        className="relative py-24 lg:py-28 overflow-hidden"
        style={{ background: "#f5f5f7" }}
      >

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-14 text-center">
            <p
              className="text-[11px] font-bold uppercase tracking-[0.4em] mb-3"
              style={{ color: "#6366f1" }}
            >
              The Toolkit
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-4" style={{ color: "#111" }}>
              Career-defining
              <br />
              <span style={{ color: "#555" }}>
                features built in.
              </span>
            </h2>
            <p
              className="text-sm max-w-lg mx-auto leading-relaxed"
              style={{ color: "#555" }}
            >
              Every tool you need to capture attention, stay organized,
              and convert opportunities into bookings.
            </p>
          </div>

          {/* Feature Cards — Gartner style */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => {
              const FIcon = f.icon
              return (
                <div
                  key={f.title}
                  className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] flex flex-col"
                  style={{ background: "#fff", border: "1px solid #e8e8ec", minHeight: 340 }}
                >
                  {/* Top — clean white with icon top-left, pattern top-right clipping */}
                  <div className="relative flex-1 overflow-hidden">
                    {/* Icon top-left */}
                    <div className="absolute top-6 left-6 z-10">
                      <FIcon className="w-7 h-7" style={{ color: f.color }} strokeWidth={1.8} />
                    </div>
                    {/* Pattern — top right, bold, clipping off edges */}
                    <div
                      className="absolute transition-transform duration-500 group-hover:scale-105"
                      style={{ top: -30, right: -40 }}
                    >
                      <svg width="260" height="220" viewBox="0 0 220 180" fill="none">
                        <PatternGraphicInline pattern={f.pattern} color={f.color} />
                      </svg>
                    </div>
                  </div>

                  {/* Bottom — title + description */}
                  <div className="px-6 pb-6">
                    <h3 className="text-[18px] font-bold leading-snug mb-1.5" style={{ color: "#111" }}>
                      {f.title}
                    </h3>
                    <p className="text-[13px] leading-relaxed" style={{ color: "#555" }}>
                      {f.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ───── The Journey ───── */}
      <HowItWorksSection />

      {/* ───── SECTION 4: Benefits — White ───── */}
      <section
        ref={benefitsSectionRef}
        className="py-24 lg:py-28"
        style={{ background: "#fff" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
            {/* LEFT: heading + stats + CTA */}
            <div className="lg:sticky lg:top-24">
              <p
                className="text-[11px] font-bold uppercase tracking-[0.4em] mb-4"
                style={{ color: "#6366f1" }}
              >
                Why TalentOS
              </p>
              <h2
                className="text-4xl sm:text-5xl font-bold leading-tight mb-5"
                style={{ color: "#111" }}
              >
                Everything you need
                <br />
                <span style={{ color: "#555" }}>to succeed as a talent.</span>
              </h2>
              <p
                className="text-[15px] leading-relaxed mb-10"
                style={{ color: "#555" }}
              >
                Join a global ecosystem of creative professionals and get the
                tools, visibility, and connections that move careers forward.
              </p>

              {/* Stat cards */}
              <div className="flex flex-col gap-3 mb-10">
                {[
                  {
                    value: "10,000+",
                    label: "Talents onboarded worldwide",
                    color: "#8b5cf6",
                  },
                  {
                    value: "500+",
                    label: "Verified agencies & casting directors",
                    color: "#38bdf8",
                  },
                  {
                    value: "3,000+",
                    label: "Successful bookings facilitated",
                    color: "#10b981",
                  },
                ].map((stat) => (
                  <div
                    key={stat.value}
                    className="flex items-center gap-4 p-4 rounded-xl"
                    style={{
                      background: "#fafafa",
                      border: "1px solid #eee",
                    }}
                  >
                    <div
                      className="w-1 self-stretch rounded-full shrink-0"
                      style={{ background: stat.color, minHeight: 36 }}
                    />
                    <div>
                      <div
                        className="text-2xl font-bold leading-none mb-0.5"
                        style={{ color: "#111" }}
                      >
                        {stat.value}
                      </div>
                      <div className="text-[13px]" style={{ color: "#555" }}>
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className="font-bold px-8 h-12 rounded-full text-sm text-white"
                style={{ background: "#6366f1" }}
              >
                Create Your Profile
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* RIGHT: 2×3 benefit cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div
                    key={index}
                    className="group flex flex-col gap-3 p-5 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-300"
                    style={{
                      background: "#fafafa",
                      border: "1px solid #eee",
                      opacity: benefitsVisible ? 1 : 0,
                      transform: benefitsVisible
                        ? "translateY(0)"
                        : "translateY(20px)",
                      transition: `opacity 0.5s ease ${index * 80}ms, transform 0.5s ease ${index * 80}ms, border-color 0.25s ease`,
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: "#f0f0f0",
                        border: "1px solid #e5e7eb",
                      }}
                    >
                      <Icon className="w-5 h-5" style={{ color: "#555" }} />
                    </div>
                    <div>
                      <h3
                        className="font-semibold text-[14px] mb-1"
                        style={{ color: "#222" }}
                      >
                        {benefit.title}
                      </h3>
                      <p
                        className="text-[13px] leading-relaxed"
                        style={{ color: "#555" }}
                      >
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ───── SECTION 5: CTA — Light ───── */}
      <section className="relative py-24 lg:py-28" style={{ background: "#f8f8fa" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#111" }}>
            Your career starts{" "}
            <span style={{ color: "#6366f1" }}>here</span>.
          </h2>
          <p
            className="text-sm leading-relaxed mb-8"
            style={{ color: "#555" }}
          >
            Join thousands of creative professionals already using TalentOS
            to land bookings, grow their portfolio, and connect with top
            agencies.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="rounded-full px-8 py-6 text-sm font-bold text-white hover:scale-[1.02] transition-all duration-200"
              style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", boxShadow: "0 4px 16px rgba(99,102,241,0.3)" }}
            >
              Create Free Profile
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 py-6 text-sm font-semibold hover:bg-gray-50 transition-all duration-200"
              style={{
                borderColor: "#e5e7eb",
                color: "#333",
                background: "#fff",
              }}
            >
              Explore Agencies
              <ChevronRight className="ml-1 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
