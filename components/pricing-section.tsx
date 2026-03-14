"use client"

import { useState } from "react"
import { Check, Sparkles, ArrowRight, Building2, Zap, Crown, Heart } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: { monthly: 0, annual: 0 },
    description: "For talents exploring the platform — no card needed, ever.",
    accent: "#10b981",
    accentLight: "#ecfdf5",
    icon: Heart,
    popular: false,
    features: [
      "1 talent profile",
      "Basic portfolio (up to 10 photos)",
      "Agency discovery & apply",
      "Opportunity feed access",
      "Community access",
      "Email notifications",
    ],
    cta: "Get Started Free",
  },
  {
    name: "Starter",
    price: { monthly: 49, annual: 39 },
    description: "For solo managers & small agencies just getting started.",
    accent: "#64748b",
    accentLight: "#f1f5f9",
    icon: Zap,
    popular: false,
    features: [
      "Up to 50 talent profiles",
      "1 team member",
      "Basic portfolio builder",
      "Email support",
      "Standard booking calendar",
      "Invoice generation",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Pro",
    price: { monthly: 129, annual: 99 },
    description: "For growing agencies managing active rosters & bookings.",
    accent: "#6366f1",
    accentLight: "#eef2ff",
    icon: Sparkles,
    popular: true,
    features: [
      "Up to 500 talent profiles",
      "5 team members",
      "AI-powered matching",
      "Contracts & e-sign",
      "Payment splits & escrow",
      "Priority support",
      "Custom branding",
      "Casting & auditions module",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Studio",
    price: { monthly: 299, annual: 249 },
    description: "For established agencies running events, pageants & campaigns.",
    accent: "#0ea5e9",
    accentLight: "#f0f9ff",
    icon: Building2,
    popular: false,
    features: [
      "Unlimited talent profiles",
      "20 team members",
      "Everything in Pro",
      "Pageant engine & scoring",
      "Academy & training module",
      "Influencer campaign tracking",
      "Sponsor & brand portal",
      "Multi-currency payouts",
      "Advanced analytics",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Enterprise",
    price: { monthly: null, annual: null },
    description: "For large networks, holding companies & global operations.",
    accent: "#f59e0b",
    accentLight: "#fffbeb",
    icon: Crown,
    popular: false,
    features: [
      "Everything in Studio",
      "Unlimited team members",
      "Multi-tenant / franchise mode",
      "Custom SLA & uptime guarantee",
      "Dedicated account manager",
      "SSO & advanced security",
      "API access & webhooks",
      "White-label deployment",
      "On-premise option",
    ],
    cta: "Contact Sales",
  },
]

export function PricingSection() {
  const [annual, setAnnual] = useState(true)

  return (
    <section className="relative py-28" style={{ background: "#fafafa" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: "rgba(99,102,241,0.06)", border: "1px solid rgba(99,102,241,0.15)" }}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#6366f1" }} />
            <span className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: "#6366f1" }}>
              Simple Pricing
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight mb-4" style={{ color: "#111" }}>
            Start free, scale as you grow.
          </h2>
          <p className="text-base max-w-lg mx-auto leading-relaxed" style={{ color: "#555" }}>
            No hidden fees. No per-talent charges. Cancel anytime.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <span
              className="text-sm font-medium"
              style={{ color: annual ? "#999" : "#111" }}
            >
              Monthly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className="relative w-12 h-6 rounded-full transition-colors duration-300"
              style={{ background: annual ? "#6366f1" : "#d1d5db" }}
            >
              <div
                className="absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-300"
                style={{
                  transform: annual ? "translateX(26px)" : "translateX(2px)",
                }}
              />
            </button>
            <span
              className="text-sm font-medium"
              style={{ color: annual ? "#111" : "#999" }}
            >
              Annual
            </span>
            {annual && (
              <span
                className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                style={{ background: "#dcfce7", color: "#16a34a" }}
              >
                Save 20%
              </span>
            )}
          </div>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {plans.map((plan) => {
            const Icon = plan.icon
            const price = annual ? plan.price.annual : plan.price.monthly

            return (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl transition-all duration-300 ${
                  plan.popular ? "" : "hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)]"
                }`}
                style={{
                  background: plan.popular ? "#111" : "#fff",
                  border: plan.popular
                    ? `2px solid ${plan.accent}`
                    : "1px solid #e5e7eb",
                  boxShadow: plan.popular
                    ? `0 24px 60px ${plan.accent}18`
                    : "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white"
                    style={{ background: plan.accent }}
                  >
                    Most Popular
                  </div>
                )}

                <div className="p-6 flex flex-col flex-1">
                  {/* Icon + Name */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        background: plan.popular
                          ? plan.accent + "20"
                          : plan.accentLight,
                      }}
                    >
                      <Icon
                        className="w-5 h-5"
                        style={{ color: plan.accent }}
                      />
                    </div>
                    <h3
                      className="text-lg font-bold"
                      style={{
                        color: plan.popular ? "#fff" : "#111",
                      }}
                    >
                      {plan.name}
                    </h3>
                  </div>

                  {/* Price */}
                  <div className="mb-3">
                    {price === 0 ? (
                      <div className="flex items-baseline gap-1">
                        <span
                          className="text-4xl font-bold"
                          style={{ color: plan.accent }}
                        >
                          Free
                        </span>
                        <span
                          className="text-sm"
                          style={{ color: "#555" }}
                        >
                          forever
                        </span>
                      </div>
                    ) : price !== null ? (
                      <div className="flex items-baseline gap-1">
                        <span
                          className="text-4xl font-bold"
                          style={{
                            color: plan.popular ? "#fff" : "#111",
                          }}
                        >
                          ${price}
                        </span>
                        <span
                          className="text-sm"
                          style={{
                            color: plan.popular
                              ? "rgba(255,255,255,0.7)"
                              : "#555",
                          }}
                        >
                          /mo
                        </span>
                      </div>
                    ) : (
                      <span
                        className="text-2xl font-bold"
                        style={{ color: plan.accent }}
                      >
                        Custom
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p
                    className="text-[13px] leading-relaxed mb-6"
                    style={{
                      color: plan.popular
                        ? "rgba(255,255,255,0.85)"
                        : "#555",
                    }}
                  >
                    {plan.description}
                  </p>

                  {/* CTA button */}
                  <button
                    className={`w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200 mb-6 ${
                      plan.popular ? "" : "hover:bg-[rgba(99,102,241,0.06)]"
                    }`}
                    style={{
                      background: plan.popular
                        ? plan.accent
                        : "transparent",
                      color: plan.popular ? "#fff" : plan.accent,
                      border: plan.popular
                        ? "none"
                        : `1.5px solid ${plan.accent}40`,
                    }}
                  >
                    {plan.cta}
                  </button>

                  {/* Features */}
                  <div className="flex flex-col gap-2.5 flex-1">
                    {plan.features.map((f) => (
                      <div key={f} className="flex items-start gap-2.5">
                        <div
                          className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                          style={{
                            background: plan.popular
                              ? plan.accent + "25"
                              : plan.accentLight,
                          }}
                        >
                          <Check
                            className="w-2.5 h-2.5"
                            style={{ color: plan.accent }}
                          />
                        </div>
                        <span
                          className="text-[13px]"
                          style={{
                            color: plan.popular
                              ? "rgba(255,255,255,0.85)"
                              : "#555",
                          }}
                        >
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom note */}
        <p
          className="text-center text-xs mt-10"
          style={{ color: "#555" }}
        >
          Free plan is free forever. Paid plans include 14-day free trial. No credit card required. Usage fees apply for pageant registrations & booking commissions.
        </p>
      </div>
    </section>
  )
}
