"use client"

import { useState } from "react"
import {
  Camera,
  Crown,
  GraduationCap,
  Megaphone,
  Briefcase,
  ArrowRight,
  Users,
  BarChart3,
  Shield,
  Sparkles,
} from "lucide-react"

const audiences = [
  {
    icon: Camera,
    title: "Modeling Agencies",
    shortTitle: "Modeling",
    description:
      "Manage your entire roster, bookings, and portfolio shoots from one dashboard. From comp cards to castings — digitized.",
    stats: { label: "Avg roster managed", value: "200+" },
    useCases: ["Talent roster & portfolios", "Booking calendar", "Commission tracking", "Comp card generation"],
    accent: "#ec4899",
    image: "https://assets.mixkit.co/videos/52270/52270-1080.mp4",
  },
  {
    icon: Crown,
    title: "Pageant Organizers",
    shortTitle: "Pageants",
    description:
      "Run fully customizable pageants — from registration to scoring to crowning — with a no-code process builder.",
    stats: { label: "Events powered", value: "50+" },
    useCases: ["Drag-drop process builder", "Blind scoring engine", "Sponsor integration", "Multi-city cloning"],
    accent: "#facc15",
    image: "https://assets.mixkit.co/videos/47777/47777-720.mp4",
  },
  {
    icon: Briefcase,
    title: "Talent Management Companies",
    shortTitle: "Talent Mgmt",
    description:
      "CRM pipelines, contracts, e-sign, and automated payouts. Your back-office on autopilot.",
    stats: { label: "Contracts signed", value: "10K+" },
    useCases: ["Talent CRM & pipelines", "Contracts & e-sign", "Payment splits", "Performance analytics"],
    accent: "#6366f1",
    image: "https://assets.mixkit.co/videos/4809/4809-1080.mp4",
  },
  {
    icon: GraduationCap,
    title: "Academies & Grooming Institutes",
    shortTitle: "Academies",
    description:
      "Host video courses, schedule workshops, issue certifications, and track student progress — all in one place.",
    stats: { label: "Students trained", value: "5K+" },
    useCases: ["Video course hosting", "Workshop scheduling", "Certifications", "Progress tracking"],
    accent: "#34d399",
    image: "https://assets.mixkit.co/videos/48165/48165-720.mp4",
  },
  {
    icon: Megaphone,
    title: "Influencer Management Agencies",
    shortTitle: "Influencer",
    description:
      "Media kits, campaign tracking, deliverables dashboard, and engagement reporting — for creator-first agencies.",
    stats: { label: "Campaigns tracked", value: "3K+" },
    useCases: ["Media kit generator", "Campaign management", "Deliverables dashboard", "Brand partnerships"],
    accent: "#38bdf8",
    image: "https://assets.mixkit.co/videos/34477/34477-1080.mp4",
  },
]

export function WhoIsItForSection() {
  const [active, setActive] = useState(0)
  const current = audiences[active]
  const Icon = current.icon

  return (
    <section data-testid="section-who-is-it-for" aria-label="Who is it for" className="relative py-28" style={{ background: "#f5f5f7" }}>
      {/* Accent glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 700,
          height: 700,
          top: "50%",
          left: "30%",
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(circle, ${current.accent}08 0%, transparent 65%)`,
          filter: "blur(80px)",
          transition: "background 0.8s ease",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p
            className="text-xs font-bold uppercase tracking-[0.4em] mb-3"
            style={{ color: "#6366f1" }}
          >
            Built For You
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 max-w-xl" style={{ color: "#111" }}>
            One platform,{" "}
            <span style={{ color: "#555" }}>
              every talent business.
            </span>
          </h2>
          <p
            className="text-sm max-w-md leading-relaxed"
            style={{ color: "#555" }}
          >
            Whether you manage 10 models or 10,000 creators — TalentOS adapts to your workflow.
          </p>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Left — tab buttons */}
          <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {audiences.map((a, i) => {
              const TabIcon = a.icon
              const isActive = i === active
              return (
                <button
                  key={a.title}
                  onClick={() => setActive(i)}
                  data-testid={`btn-${a.shortTitle.toLowerCase().replace(/\s+/g, "-")}`}
                  aria-label={`Show ${a.title}`}
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-left transition-all duration-300 shrink-0 lg:shrink"
                  style={{
                    background: isActive
                      ? a.accent
                      : "#fff",
                    border: `1px solid ${isActive ? a.accent : "#e5e7eb"}`,
                    boxShadow: isActive
                      ? `0 4px 24px ${a.accent}40`
                      : "0 1px 3px rgba(0,0,0,0.04)",
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      background: isActive ? "rgba(255,255,255,0.25)" : "#f5f5f7",
                    }}
                  >
                    <TabIcon
                      className="w-4 h-4"
                      style={{ color: isActive ? "#fff" : "#555" }}
                    />
                  </div>
                  <div className="hidden lg:block">
                    <span
                      className="text-sm font-semibold block leading-none mb-0.5"
                      style={{ color: isActive ? "#fff" : "#111" }}
                    >
                      {a.shortTitle}
                    </span>
                    <span
                      className="text-xs"
                      style={{ color: isActive ? "rgba(255,255,255,0.9)" : "#555" }}
                    >
                      {a.stats.value} {a.stats.label.toLowerCase()}
                    </span>
                  </div>
                  <span
                    className="text-sm font-semibold lg:hidden whitespace-nowrap"
                    style={{ color: isActive ? "#fff" : "#111" }}
                  >
                    {a.shortTitle}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Right — content panel */}
          <div
            className="rounded-2xl p-8 lg:p-10 relative overflow-hidden"
            style={{
              background: "#fff",
              border: "1px solid #e5e7eb",
              boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
            }}
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Text */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-500"
                    style={{
                      background: current.accent + "15",
                      border: `1px solid ${current.accent}25`,
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: current.accent }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold" style={{ color: "#111" }}>{current.title}</h3>
                  </div>
                </div>

                {/* Description crossfade */}
                <div className="relative mb-6" style={{ minHeight: 60 }}>
                  {audiences.map((a, i) => (
                    <p
                      key={a.title + "-desc"}
                      className="text-[15px] leading-relaxed"
                      style={{
                        color: "#555",
                        opacity: i === active ? 1 : 0,
                        position: i === active ? "relative" : "absolute",
                        top: 0,
                        transition: "opacity 0.4s ease",
                      }}
                    >
                      {a.description}
                    </p>
                  ))}
                </div>

                {/* Stat */}
                <div
                  className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl mb-6"
                  style={{
                    background: current.accent + "10",
                    border: `1px solid ${current.accent}20`,
                    transition: "all 0.5s ease",
                  }}
                >
                  <BarChart3 className="w-4 h-4" style={{ color: current.accent }} />
                  <span className="text-xl font-bold" style={{ color: current.accent }}>
                    {current.stats.value}
                  </span>
                  <span className="text-xs" style={{ color: "#555" }}>
                    {current.stats.label}
                  </span>
                </div>

                {/* Use cases */}
                <div className="flex flex-col gap-2.5 mb-6">
                  {current.useCases.map((u) => (
                    <div key={u} className="flex items-center gap-2.5">
                      <div
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: current.accent }}
                      />
                      <span className="text-sm" style={{ color: "#555" }}>
                        {u}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  data-testid="btn-see-how-it-works"
                  aria-label={`See how ${current.title} works`}
                  className="inline-flex items-center gap-2 text-sm font-semibold group transition-colors duration-300"
                  style={{ color: current.accent }}
                >
                  See how it works
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>

              {/* Video preview */}
              <div
                className="relative rounded-xl overflow-hidden hidden lg:block"
                style={{
                  aspectRatio: "4/3",
                  border: `1px solid ${current.accent}20`,
                  boxShadow: `0 30px 80px ${current.accent}10`,
                  transition: "border-color 0.5s ease, box-shadow 0.5s ease",
                }}
              >
                {audiences.map((a, i) => (
                  <video
                    key={a.title + "-vid"}
                    src={a.image}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                      opacity: i === active ? 1 : 0,
                      transition: "opacity 0.6s ease",
                    }}
                    muted
                    playsInline
                    autoPlay
                    loop
                  />
                ))}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(245,245,247,0.3) 0%, transparent 40%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
