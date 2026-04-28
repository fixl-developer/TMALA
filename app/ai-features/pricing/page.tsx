"use client"
import React from "react"
import { Check, X, Sparkles, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useAuthModal } from "@/components/auth-modal"
import { AIStudioStickyHeader } from "@/components/ai-studio-sticky-header"
import { AIStudioLaunchBanner } from "@/components/ai-studio-launch-banner"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    desc: "Get started with the essentials.",
    cta: "Start free",
    highlight: false,
    model: "Gemini Flash-Lite (forced)",
    credits: "1,000 cr/month",
    features: [
      { label: "Profile scan & bio generator (3/day)", ok: true },
      { label: "Photo quality scoring", ok: true },
      { label: "Image gen (1/week)", ok: true },
      { label: "Opportunity readiness check", ok: true },
      { label: "Basic auto-tagging", ok: true },
      { label: "Resume PDF & exports", ok: false },
      { label: "Self-tape coach", ok: false },
      { label: "Video generation", ok: false },
      { label: "Brand Kit & Growth Insights", ok: false },
    ],
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    desc: "For serious talents ready to professionalize.",
    cta: "Start Pro",
    highlight: true,
    badge: "Most popular",
    model: "Gemini Flash / GPT-5 mini",
    credits: "1,500 cr/month",
    features: [
      { label: "Everything in Free", ok: true },
      { label: "Provider choice (Gemini / OpenAI)", ok: true },
      { label: "Resume PDF + casting pack exports", ok: true },
      { label: "Video scoring (Pro depth)", ok: true },
      { label: "Self-tape coach (add-on)", ok: true },
      { label: "Image packs (add-on)", ok: true },
      { label: "Video gen: Fast + Standard tiers", ok: true },
      { label: "Brand Kit & Growth Insights", ok: true },
      { label: "Expiring share links", ok: true },
    ],
  },
  {
    name: "Enterprise",
    price: "$49",
    period: "/month",
    desc: "Full control for agencies and orgs.",
    cta: "Contact sales",
    highlight: false,
    model: "Gemini Pro / OpenAI GPT-5",
    credits: "2,500 cr/month",
    features: [
      { label: "Everything in Pro", ok: true },
      { label: "Premium AI (Gemini Pro / GPT-5)", ok: true },
      { label: "Cinema-quality video gen (35 cr/s)", ok: true },
      { label: "Human review & moderation queue", ok: true },
      { label: "365-day audit retention", ok: true },
      { label: "SSO & advanced RBAC", ok: true },
      { label: "Tenant admin dashboard", ok: true },
      { label: "60/40 rev-share partner rates", ok: true },
      { label: "Feature toggles per talent", ok: true },
    ],
  },
]

const addons = [
  { name: "Self-tape Coach (60 min)", price: "500 cr", plan: "Pro+" },
  { name: "Self-tape Coach (180 min)", price: "1,200 cr", plan: "Pro+" },
  { name: "Image Pack (50 images)", price: "400 cr", plan: "Pro+" },
  { name: "Image Pack (200 images)", price: "1,400 cr", plan: "Pro+" },
  { name: "Video Pack — Fast (10x 6s)", price: "600 cr", plan: "Pro+" },
  { name: "Video Pack — Standard (120s)", price: "2,400 cr", plan: "Pro+" },
  { name: "Video Pack — Cinema (120s)", price: "4,200 cr", plan: "Enterprise" },
  { name: "Advanced Drill Pack", price: "300 cr", plan: "Pro+" },
  { name: "Premium Text Unlock", price: "200 cr/mo", plan: "Pro+" },
  { name: "Audit Retention (365 days)", price: "500 cr/mo", plan: "Enterprise" },
]

export default function PricingPage() {
  const { openAuth } = useAuthModal()
  return (
    <div className="min-h-screen" style={{ background: "#0a0a0a", color: "#fff" }}>
      <AIStudioStickyHeader />
      <AIStudioLaunchBanner />

      {/* Top bar */}
      <div className="flex items-center justify-between px-4 sm:px-8 py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <Link href="/ai-features" className="flex items-center gap-2 text-white/50 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to AI Studio</span>
        </Link>
        <button data-testid="btn-signup" aria-label="Sign up" onClick={() => openAuth("signup")} className="text-[13px] font-bold px-4 py-2 rounded-lg" style={{ background: "#c8ff00", color: "#000" }}>Sign up</button>
      </div>

      {/* Hero */}
      <section className="py-20 px-4 sm:px-8 text-center">
        <span className="inline-block px-3 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider mb-5" style={{ background: "#c8ff00", color: "#000" }}>
          Pricing
        </span>
        <h1 className="font-bebas text-[3rem] sm:text-[5rem] leading-[0.9] text-white mb-4">
          PLANS FOR EVERY
          <br />
          CAREER STAGE
        </h1>
        <p className="text-white/50 text-base max-w-md mx-auto">
          Start free. Upgrade when you&apos;re ready. 1 credit = $0.01.
        </p>
      </section>

      {/* Plan cards */}
      <section className="px-4 sm:px-8 pb-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-5">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-7 flex flex-col ${
                plan.highlight
                  ? "border-[#c8ff00]/30 shadow-2xl shadow-[#c8ff00]/10"
                  : "border-white/[0.06]"
              }`}
              style={{ background: plan.highlight ? "#111a00" : "#111" }}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider" style={{ background: "#c8ff00", color: "#000" }}>
                    {plan.badge}
                  </span>
                </div>
              )}
              <div className="mb-5">
                <div className="text-sm text-white/40 uppercase tracking-wider font-medium mb-1">{plan.name}</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-sm text-white/40">{plan.period}</span>
                </div>
                <p className="text-sm text-white/40 mt-1">{plan.desc}</p>
              </div>
              <div className="text-[11px] font-mono px-3 py-2 rounded-lg mb-2" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.5)" }}>
                Model: {plan.model}
              </div>
              <div className="text-[11px] font-mono px-3 py-2 rounded-lg mb-5" style={{ background: "rgba(200,255,0,0.05)", border: "1px solid rgba(200,255,0,0.15)", color: "#c8ff00" }}>
                {plan.credits}
              </div>
              <ul className="space-y-2.5 mb-7 flex-1">
                {plan.features.map((f) => (
                  <li key={f.label} className="flex items-center gap-2.5">
                    {f.ok ? <Check className="w-4 h-4 flex-shrink-0" style={{ color: "#c8ff00" }} /> : <X className="w-4 h-4 text-white/10 flex-shrink-0" />}
                    <span className={`text-xs ${f.ok ? "text-white/70" : "text-white/20"}`}>{f.label}</span>
                  </li>
                ))}
              </ul>
              <button
                data-testid={`btn-${plan.name.toLowerCase()}`}
                aria-label={plan.cta}
                onClick={() => openAuth()}
                className="block w-full text-center py-3 rounded-xl text-sm font-bold transition-all"
                style={plan.highlight
                  ? { background: "#c8ff00", color: "#000" }
                  : { border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)" }
                }
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Add-ons */}
      <section className="px-4 sm:px-8 pb-20">
        <div className="max-w-4xl mx-auto rounded-2xl border border-white/[0.06] overflow-hidden" style={{ background: "#111" }}>
          <div className="px-7 py-5 border-b border-white/[0.04]">
            <h3 className="font-bebas text-xl uppercase tracking-[0.05em] text-white">Add-on Packs</h3>
            <p className="text-[12px] text-white/40 mt-1">Purchase additional credits and capabilities. Pro and Enterprise plans.</p>
          </div>
          <div className="divide-y divide-white/[0.03]">
            {addons.map((addon) => (
              <div key={addon.name} className="flex items-center justify-between px-7 py-3.5 hover:bg-white/[0.02] transition-colors">
                <span className="text-[13px] text-white/70">{addon.name}</span>
                <div className="flex items-center gap-4">
                  <span className="text-[12px] font-mono" style={{ color: "#c8ff00" }}>{addon.price}</span>
                  <span className="text-[10px] text-white/40 bg-white/[0.04] px-2 py-0.5 rounded-full">{addon.plan}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 text-center text-[11px] text-white/30">
          Tenant wholesale: Pro $0.008/credit · Enterprise $0.007/credit · Tenants set their own retail pricing
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 sm:px-8" style={{ background: "#050505", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: "#c8ff00" }}>
              <Sparkles className="w-3 h-3 text-black" />
            </div>
            <span className="text-xs font-semibold text-white/50">AI Studio</span>
          </div>
          <p className="text-[11px] text-white/25">&copy; 2026 AI Studio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
