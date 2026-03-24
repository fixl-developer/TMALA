"use client"

import { useState } from "react"
import {
  Crown,
  Users,
  Handshake,
  GraduationCap,
  Clapperboard,
  Store,
  Megaphone,
  CalendarDays,
  Camera,
  Newspaper,
  ChevronRight,
  Puzzle,
} from "lucide-react"

const modules = [
  {
    icon: Crown,
    name: "Pageant Engine",
    tag: "Priority",
    description: "No-code process builder for pageants — custom stages, scoring, judge panels, sponsor integration, and real-time results.",
    accent: "#92400e",
    cardBg: "linear-gradient(145deg, #fef9c3 0%, #fde68a 100%)",
    iconBg: "rgba(146,64,14,0.12)",
  },
  {
    icon: Users,
    name: "Agency & Talent CRM",
    tag: "Core",
    description: "Talent pipelines, contracts, e-sign, commission rules, booking calendar, and performance tracking.",
    accent: "#4338ca",
    cardBg: "linear-gradient(145deg, #e0e7ff 0%, #c7d2fe 100%)",
    iconBg: "rgba(67,56,202,0.12)",
  },
  {
    icon: Handshake,
    name: "Sponsorship & Brand Hub",
    tag: "Revenue",
    description: "Sponsor profiles, packages, brand placement inventory, deliverable tracking, and post-event ROI reports.",
    accent: "#be185d",
    cardBg: "linear-gradient(145deg, #fce7f3 0%, #fbcfe8 100%)",
    iconBg: "rgba(190,24,93,0.12)",
  },
  {
    icon: GraduationCap,
    name: "Academy & Training",
    tag: "Growth",
    description: "Video course hosting, live workshops, certifications, and progress tracking for grooming institutes.",
    accent: "#047857",
    cardBg: "linear-gradient(145deg, #d1fae5 0%, #a7f3d0 100%)",
    iconBg: "rgba(4,120,87,0.12)",
  },
  {
    icon: Clapperboard,
    name: "Casting & Auditions",
    tag: "Core",
    description: "Casting calls, talent applications, self-tape submissions, shortlisting, and call sheet generation.",
    accent: "#0369a1",
    cardBg: "linear-gradient(145deg, #e0f2fe 0%, #bae6fd 100%)",
    iconBg: "rgba(3,105,161,0.12)",
  },
  {
    icon: Store,
    name: "Bookings & Jobs Marketplace",
    tag: "Revenue",
    description: "Private and public job posts, negotiation workflows, invoicing, and automated multi-currency payouts.",
    accent: "#6d28d9",
    cardBg: "linear-gradient(145deg, #ede9fe 0%, #ddd6fe 100%)",
    iconBg: "rgba(109,40,217,0.12)",
  },
  {
    icon: Megaphone,
    name: "Influencer Management",
    tag: "Growth",
    description: "Media kit generator, campaign tracking, deliverables dashboard, and engagement reporting.",
    accent: "#be185d",
    cardBg: "linear-gradient(145deg, #fce7f3 0%, #f9a8d4 100%)",
    iconBg: "rgba(190,24,93,0.12)",
  },
  {
    icon: CalendarDays,
    name: "Events Production",
    tag: "Operations",
    description: "Run-of-show templates, vendor management, ticketing, and sponsor booth coordination.",
    accent: "#c2410c",
    cardBg: "linear-gradient(145deg, #ffedd5 0%, #fed7aa 100%)",
    iconBg: "rgba(194,65,12,0.12)",
  },
  {
    icon: Camera,
    name: "Portfolio Studio",
    tag: "Creative",
    description: "Shoot package storefront, photographer & MUA booking, asset delivery with watermarking.",
    accent: "#0f766e",
    cardBg: "linear-gradient(145deg, #ccfbf1 0%, #99f6e4 100%)",
    iconBg: "rgba(15,118,110,0.12)",
  },
  {
    icon: Newspaper,
    name: "PR & Media",
    tag: "Growth",
    description: "Press release builder, media contact lists, and publication tracking across outlets.",
    accent: "#5b21b6",
    cardBg: "linear-gradient(145deg, #ede9fe 0%, #c4b5fd 100%)",
    iconBg: "rgba(91,33,182,0.12)",
  },
]

const tagColors: Record<string, { bg: string; text: string }> = {
  Priority: { bg: "#fef3c7", text: "#92400e" },
  Core: { bg: "#e0e7ff", text: "#3730a3" },
  Revenue: { bg: "#fce7f3", text: "#9d174d" },
  Growth: { bg: "#d1fae5", text: "#065f46" },
  Operations: { bg: "#ffedd5", text: "#9a3412" },
  Creative: { bg: "#ccfbf1", text: "#134e4a" },
}

export function ModularAppsSection() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section className="relative py-28" style={{ background: "#fafafa" }} data-testid="section-modular-apps" aria-label="Modular Apps">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-6">
          <div>
            <p
              className="text-xs font-bold uppercase tracking-[0.4em] mb-3"
              style={{ color: "#6366f1" }}
            >
              Modular Architecture
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-3"
              style={{ color: "#111" }}
            >
              10 modules,{" "}
              <span style={{ color: "#999" }}>one platform.</span>
            </h2>
            <p className="text-sm max-w-lg leading-relaxed" style={{ color: "#666" }}>
              Enable only what you need. Each module plugs into the core — no bloat, no lock-in. Add as you grow.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Puzzle className="w-4 h-4" style={{ color: "#555" }} />
            <span className="text-xs font-medium" style={{ color: "#555" }}>
              Add-on architecture — mix & match
            </span>
          </div>
        </div>

        {/* Modules grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {modules.map((m, i) => {
            const Icon = m.icon
            const isHovered = hovered === i
            const tag = tagColors[m.tag]

            return (
              <div
                key={m.name}
                data-testid={`link-${m.name.toLowerCase().replace(/\s+&\s+/g, "-").replace(/\s+/g, "-")}`}
                aria-label={m.name}
                className="group relative rounded-2xl p-5 flex flex-col cursor-pointer transition-all duration-300"
                style={{
                  background: m.cardBg,
                  border: `1px solid ${isHovered ? m.accent + "35" : "rgba(255,255,255,0.5)"}`,
                  boxShadow: isHovered
                    ? `0 16px 48px ${m.accent}18, 0 4px 12px rgba(0,0,0,0.06)`
                    : "0 2px 8px rgba(0,0,0,0.04)",
                  transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Icon + tag row */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{
                      background: isHovered ? "rgba(255,255,255,0.8)" : m.iconBg,
                    }}
                  >
                    <Icon
                      className="w-5 h-5 transition-colors duration-300"
                      style={{ color: m.accent }}
                    />
                  </div>
                  <span
                    className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                    style={{
                      background: "rgba(255,255,255,0.7)",
                      color: tag.text,
                    }}
                  >
                    {m.tag}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-sm font-bold mb-2"
                  style={{ color: "#111" }}
                >
                  {m.name}
                </h3>

                {/* Description */}
                <p
                  className="text-[13px] leading-relaxed flex-1"
                  style={{ color: "#333" }}
                >
                  {m.description}
                </p>

                {/* Arrow */}
                <div className="mt-3 flex items-center gap-1">
                  <span
                    className="text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ color: m.accent }}
                  >
                    Learn more
                  </span>
                  <ChevronRight
                    className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200"
                    style={{ color: m.accent }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
