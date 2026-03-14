"use client"

import {
  Upload,
  UserCheck,
  Sparkles,
  Search,
  Trophy,
  Star,
  Wallet,
  ArrowRight,
} from "lucide-react"
import { useAuthModal } from "@/components/auth-modal"

const steps = [
  {
    icon: Upload,
    title: "Talent Onboards",
    description:
      "Self-register with ID proof & portfolio upload, AI verifies basics automatically.",
  },
  {
    icon: UserCheck,
    title: "Agency Reviews",
    description:
      "Agency reviews application and approves talent to their roster with one click.",
  },
  {
    icon: Sparkles,
    title: "AI Enhancement",
    description:
      "Talent uses AI tools to perfect, enhance, and organize their portfolio.",
  },
  {
    icon: Search,
    title: "Scout & Match",
    description:
      "Agency scouts, invites, or AI-matches talent to relevant opportunities.",
  },
  {
    icon: Trophy,
    title: "Create Events",
    description:
      "Agency creates branded pageant or show, talents register and compete.",
  },
  {
    icon: Star,
    title: "Judge & Score",
    description:
      "Judges assign marks, results are calculated, winners notified instantly.",
  },
  {
    icon: Wallet,
    title: "Sponsor & Payout",
    description:
      "Sponsors fund events, agencies manage deals and process payouts securely.",
  },
]

export function HowItWorksSection() {
  const { openAuth } = useAuthModal()
  return (
    <section id="how-it-works" className="py-24 lg:py-28" style={{ background: "#f8f8fa" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Light rounded container like Monday.com */}
        <div
          className="rounded-3xl px-6 sm:px-10 lg:px-16 py-16 lg:py-20"
          style={{ background: "#f0f0f4" }}
        >
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-20 items-start">
            {/* LEFT — sticky heading + CTA */}
            <div className="lg:sticky lg:top-28">
              <h2
                className="text-[2.2rem] sm:text-[2.6rem] lg:text-[2.9rem] font-bold leading-[1.12] tracking-tight mb-8"
                style={{ color: "#111" }}
              >
                Onboard faster,
                <br />
                match smarter, and
                <br />
                scale every talent
                <br />
                journey.
              </h2>

              <button
                onClick={() => openAuth()}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white transition-all duration-200 hover:scale-[1.02]"
                style={{
                  background: "#111",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                }}
              >
                Join Waitlist
                <ArrowRight className="w-4 h-4" />
              </button>

              <p
                className="mt-4 text-[13px]"
                style={{ color: "#888" }}
              >
                A clear end-to-end flow connecting onboarding, casting, events, judging & payouts.
              </p>
            </div>

            {/* RIGHT — 2-column cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon
                // Left column cards are taller style, right column shorter
                // Alternate between white bg cards
                return (
                  <div
                    key={index}
                    className="group rounded-2xl p-6 lg:p-7 transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      background: "#fff",
                      border: "1px solid #e8e8ec",
                    }}
                  >
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                      style={{
                        color: "#6366f1",
                      }}
                    >
                      <Icon className="w-7 h-7" strokeWidth={1.5} />
                    </div>

                    {/* Title */}
                    <h3
                      className="text-lg font-bold leading-tight mb-2"
                      style={{ color: "#111" }}
                    >
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-[13px] leading-relaxed"
                      style={{ color: "#555" }}
                    >
                      {step.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
