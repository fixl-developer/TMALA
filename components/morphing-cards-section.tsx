"use client"

import { Globe, Handshake, Zap, ArrowRight } from "lucide-react"

const pillars = [
  {
    icon: Globe,
    stat: "100+",
    statLabel: "Regions Covered",
    title: "Global Reach",
    subtitle: "Discover talent everywhere",
    description: "Your next booking could come from anywhere. Our AI-powered discovery engine connects you with verified agencies and casting directors across 100+ regions in real time — no cold outreach needed.",
    features: ["Cross-border talent matching", "Multi-language profiles", "Timezone-aware scheduling"],
    accentColor: "#6366f1",
    cardBg: "#f5f3ff",
    borderColor: "#e0dff8",
  },
  {
    icon: Handshake,
    stat: "98%",
    statLabel: "Retention Rate",
    title: "Deep Trust",
    subtitle: "Transparent partnerships",
    description: "Every agency, brand, and talent on the platform is verified. Contracts are auditable, payments are escrowed, and deals are structured to protect both sides — no hidden fees, no exploitation.",
    features: ["ID-verified agencies & talents", "Escrowed payments", "Auditable contract history"],
    accentColor: "#0ea5e9",
    cardBg: "#f0f9ff",
    borderColor: "#d6eef8",
  },
  {
    icon: Zap,
    stat: "<24h",
    statLabel: "Payout Time",
    title: "Pure Velocity",
    subtitle: "From booking to payment",
    description: "Manual bureaucracy kills momentum. Automate every step — booking confirmation, contract signing, invoice generation, and multi-currency payouts — so you move at the speed of opportunity.",
    features: ["Automated contract workflows", "Multi-currency instant payouts", "Zero manual hand-offs"],
    accentColor: "#10b981",
    cardBg: "#f0fdf7",
    borderColor: "#d1f0e2",
  },
]

export function MorphingCardsSection() {
  return (
    <section data-testid="section-morphing-cards" aria-label="Morphing cards" className="relative w-full py-28 overflow-hidden" style={{ background: "#fafafa" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.4em] mb-3" style={{ color: "#6366f1" }}>
            Core Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-2xl mx-auto mb-4" style={{ color: "#111" }}>
            Reach wider, build trust,
            <br />
            <span style={{ color: "#999" }}>move faster.</span>
          </h2>
          <p className="text-sm max-w-lg mx-auto leading-relaxed" style={{ color: "#666" }}>
            Three pillars that power every successful talent business — built into one platform.
          </p>
        </div>

        {/* 3-column pillar cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {pillars.map((p) => {
            const Icon = p.icon
            return (
              <div
                key={p.title}
                className="group relative rounded-2xl overflow-hidden cursor-pointer flex flex-col"
                style={{
                  background: p.cardBg,
                  border: `1px solid ${p.borderColor}`,
                  transition: "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
                  minHeight: 480,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = p.accentColor + "40"
                  el.style.boxShadow = `0 24px 60px ${p.accentColor}12`
                  el.style.transform = "translateY(-4px)"
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = p.borderColor
                  el.style.boxShadow = "none"
                  el.style.transform = "translateY(0)"
                }}
              >
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full p-7">
                  {/* Top: icon + tag */}
                  <div className="flex items-start justify-between mb-8">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ background: p.accentColor + "12", border: `1px solid ${p.accentColor}20` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: p.accentColor }} />
                    </div>
                    <span
                      className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                      style={{ background: p.accentColor + "10", color: p.accentColor, border: `1px solid ${p.accentColor}18` }}
                    >
                      {p.subtitle}
                    </span>
                  </div>

                  {/* Big stat */}
                  <div className="mb-6">
                    <div className="text-5xl lg:text-6xl font-bold leading-none mb-1" style={{ color: p.accentColor }}>
                      {p.stat}
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#555" }}>
                      {p.statLabel}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3 leading-snug" style={{ color: "#111" }}>{p.title}</h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: "#666" }}>
                    {p.description}
                  </p>

                  {/* Feature pills */}
                  <div className="flex flex-col gap-2 mb-5">
                    {p.features.map((f) => (
                      <div key={f} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full shrink-0" style={{ background: p.accentColor }} />
                        <span className="text-xs" style={{ color: "#555" }}>{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    data-testid={`btn-explore-${p.title.toLowerCase().replace(/\s+/g, "-")}`}
                    aria-label={`Explore ${p.title}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold self-start opacity-60 group-hover:opacity-100 transition-all duration-300"
                    style={{ color: p.accentColor }}
                  >
                    Explore <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
