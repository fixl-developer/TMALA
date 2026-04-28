"use client"

import React from "react"
import { Sparkles, ArrowRight, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { AIStudioStickyHeader } from "./ai-studio-sticky-header"
import { AIStudioLaunchBanner } from "./ai-studio-launch-banner"
import { useAuthModal } from "@/components/auth-modal"

/* ─── Types ─── */
type Feature = {
  icon: React.ElementType
  title: string
  desc: string
  color: string
}

type ShowcaseItem = {
  img: string
  label?: string
}

type SubPageProps = {
  badge: string
  title: string
  subtitle: string
  description: string
  accentColor?: string
  heroImg: string
  features: Feature[]
  showcase?: ShowcaseItem[]
  howItWorks?: { step: string; desc: string }[]
  specs?: { label: string; value: string }[]
  ctaText?: string
  children?: React.ReactNode
}

/* ─── Shared Sub-page Layout ─── */
export function AIStudioSubLayout({
  badge,
  title,
  subtitle,
  description,
  accentColor = "#c8ff00",
  heroImg,
  features,
  showcase,
  howItWorks,
  specs,
  ctaText = "Get started free",
  children,
}: SubPageProps) {
  const { openAuth } = useAuthModal()
  const slug = badge.toLowerCase().replace(/\s+/g, "-")
  return (
    <div className="min-h-screen" data-testid={`page-${slug}`} aria-label={`${badge} page`} style={{ background: "#0a0a0a", color: "#fff" }}>
      {/* Feature pills bar — always visible below main header */}
      <AIStudioStickyHeader />

      {/* Launch banner — promotes external AI Studio app */}
      <AIStudioLaunchBanner />

      {/* ── Breadcrumb ── */}
      <div className="px-4 sm:px-8 py-3" data-testid="section-breadcrumb" aria-label="Breadcrumb navigation" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <Link href="/ai-features" data-testid="link-back-to-ai-studio" aria-label="Back to AI Studio" className="inline-flex items-center gap-2 text-sm text-[#b0b0b0] hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to AI Studio
        </Link>
      </div>

      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden" data-testid="section-hero" aria-label="Hero section" style={{ minHeight: 480 }}>
        {/* Background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-20 flex flex-col justify-center" style={{ minHeight: 480 }}>
          <span
            className="inline-block w-fit px-3 py-1 rounded-lg text-[11px] font-bold uppercase tracking-[0.15em] mb-5"
            style={{ background: accentColor, color: "#000" }}
          >
            {badge}
          </span>
          <h1 className="font-bebas text-[3rem] sm:text-[4.5rem] lg:text-[6rem] leading-[0.9] tracking-tight text-white mb-4">
            {title}
          </h1>
          <p className="text-lg sm:text-xl text-white/80 mb-2 max-w-lg font-medium">{subtitle}</p>
          <p className="text-sm text-white/50 max-w-lg leading-relaxed mb-8">{description}</p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => openAuth()}
              data-testid="btn-hero-cta"
              aria-label={ctaText}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold transition-all hover:scale-[1.02]"
              style={{ background: accentColor, color: "#000" }}
            >
              {ctaText} <ArrowRight className="w-4 h-4" />
            </button>
            <a href="#features" data-testid="link-see-all-features" aria-label="See all features" className="text-sm text-white/50 hover:text-white underline underline-offset-4 transition-colors">
              See all features
            </a>
          </div>
        </div>
      </section>

      {/* ── Features Grid ── */}
      <section id="features" data-testid="section-features" aria-label="Key features" className="py-20 px-4 sm:px-8" style={{ background: "#0a0a0a" }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="font-bebas text-3xl sm:text-4xl uppercase tracking-[0.05em] text-white mb-3">
            Key Features
          </h2>
          <p className="text-sm text-white/40 mb-10 max-w-lg">Everything you need, nothing you don&apos;t.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feat, i) => {
              const Icon = feat.icon
              return (
                <div
                  key={i}
                  data-testid={`section-feature-${i}`}
                  aria-label={feat.title}
                  className="rounded-2xl border border-white/[0.06] p-6 hover:border-white/[0.12] transition-all group"
                  style={{ background: "#111" }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: feat.color + "18", border: `1px solid ${feat.color}30` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: feat.color }} />
                  </div>
                  <h3 className="text-[15px] font-bold text-white mb-2">{feat.title}</h3>
                  <p className="text-[13px] text-white/50 leading-relaxed">{feat.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── How It Works (if provided) ── */}
      {howItWorks && howItWorks.length > 0 && (
        <section data-testid="section-how-it-works" aria-label="How it works" className="py-20 px-4 sm:px-8" style={{ background: "#0d0d0d", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="font-bebas text-3xl sm:text-4xl uppercase tracking-[0.05em] text-white mb-10">
              How It Works
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {howItWorks.map((step, i) => (
                <div key={i} data-testid={`section-step-${i}`} aria-label={`Step ${i + 1}: ${step.step}`} className="flex gap-4">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm font-bold"
                    style={{ background: accentColor, color: "#000" }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">{step.step}</h4>
                    <p className="text-xs text-white/45 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Showcase Gallery (if provided) ── */}
      {showcase && showcase.length > 0 && (
        <section data-testid="section-showcase" aria-label="Showcase gallery" className="py-16 px-4 sm:px-8" style={{ background: "#0a0a0a" }}>
          <style>{`
            @keyframes showcaseScan {
              0% { top: -2px; opacity: 0; }
              10% { opacity: 1; }
              90% { opacity: 1; }
              100% { top: calc(100% + 2px); opacity: 0; }
            }
            .showcase-card:hover .showcase-scan-line {
              animation: showcaseScan 1s ease-in-out forwards;
            }
          `}</style>
          <div className="max-w-[1440px] mx-auto">
            <h2 className="font-bebas text-3xl sm:text-4xl uppercase tracking-[0.05em] text-white mb-8">
              Showcase
            </h2>
            <div className="columns-2 sm:columns-3 md:columns-4 gap-3">
              {showcase.map((item, i) => (
                <div key={i} data-testid={`section-showcase-item-${i}`} aria-label={item.label || `Showcase item ${i + 1}`} className="showcase-card relative mb-3 rounded-xl overflow-hidden group cursor-pointer break-inside-avoid">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.img} alt={item.label || ""} loading="lazy" className="w-full object-cover transition-transform duration-700 group-hover:scale-105" />

                  {/* Scan overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(10,30,10,0.35) 50%, rgba(0,0,0,0.15) 100%)" }}
                  />

                  {/* Scan line */}
                  <div className="showcase-scan-line absolute left-0 right-0 pointer-events-none"
                    style={{ top: "-2px", height: "2px", background: accentColor, boxShadow: `0 0 12px 3px ${accentColor}80, 0 0 30px 6px ${accentColor}30`, opacity: 0 }}
                  />

                  {/* Corner brackets */}
                  <div className="absolute top-2 left-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ borderLeft: `2px solid ${accentColor}`, borderTop: `2px solid ${accentColor}` }} />
                  <div className="absolute top-2 right-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ borderRight: `2px solid ${accentColor}`, borderTop: `2px solid ${accentColor}` }} />
                  <div className="absolute bottom-2 left-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ borderLeft: `2px solid ${accentColor}`, borderBottom: `2px solid ${accentColor}` }} />
                  <div className="absolute bottom-2 right-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ borderRight: `2px solid ${accentColor}`, borderBottom: `2px solid ${accentColor}` }} />

                  {/* Border glow */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ boxShadow: `inset 0 0 0 1.5px ${accentColor}50` }}
                  />

                  {/* Label */}
                  {item.label && (
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                      style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)", border: `1px solid ${accentColor}30` }}
                    >
                      <span className="text-[11px] font-semibold text-white/90">{item.label}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Specs Table (if provided) ── */}
      {specs && specs.length > 0 && (
        <section data-testid="section-specifications" aria-label="Specifications" className="py-16 px-4 sm:px-8" style={{ background: "#0d0d0d", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-bebas text-3xl uppercase tracking-[0.05em] text-white mb-8">
              Specifications
            </h2>
            <div className="rounded-2xl border border-white/[0.06] overflow-hidden" style={{ background: "#111" }}>
              {specs.map((spec, i) => (
                <div key={i} data-testid={`section-spec-${i}`} aria-label={`${spec.label}: ${spec.value}`} className="flex items-center justify-between px-6 py-4 border-b border-white/[0.04] last:border-0">
                  <span className="text-sm text-white/50">{spec.label}</span>
                  <span className="text-sm font-semibold text-white">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Custom children ── */}
      {children}

      {/* ── CTA Footer ── */}
      <section data-testid="section-cta-footer" aria-label="Call to action" className="py-20 px-4 sm:px-8" style={{ background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: accentColor }}>
            <Sparkles className="w-6 h-6 text-black" />
          </div>
          <h2 className="font-bebas text-4xl sm:text-5xl text-white mb-4">READY TO START?</h2>
          <p className="text-white/40 text-sm mb-8">No credit card required. Free plan always available.</p>
          <button
            onClick={() => openAuth()}
            data-testid="btn-footer-cta"
            aria-label={ctaText}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold transition-all hover:scale-[1.03]"
            style={{ background: accentColor, color: "#000" }}
          >
            {ctaText} <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* ── Lime Footer (Higgsfield-style) ── */}
      <footer data-testid="section-footer" aria-label="Site footer" style={{ background: "#c8ff00" }}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr_1fr_1fr] gap-10 mb-12">
            <div>
              <h2 className="font-bebas text-[2.5rem] sm:text-[3.2rem] leading-[0.95] text-black mb-4">
                THE ULTIMATE<br />
                AI-POWERED<br />
                CREATIVE SUITE<br />
                FOR TALENTS &amp;<br />
                CREATORS
              </h2>
            </div>
            {Object.entries({
              "AI Studio": ["About", "Pricing", "Cinema Studio", "AI Influencer", "Community", "Enterprise"],
              Image: ["Create Image", "AI Image", "Edit Image", "Image Upscale", "Portfolio Builder", "Brand Kit"],
              Video: ["AI Video", "Create Video", "Audition Coach", "Lipsync Studio", "Video Upscale"],
              Tools: ["Applications", "Casting Studio", "Growth Insights", "Media Lab", "Audio Studio"],
            }).map(([section, links]) => (
              <div key={section}>
                <div className="text-[12px] font-bold text-black/40 uppercase tracking-[0.1em] mb-4">{section}</div>
                <ul className="space-y-2.5">
                  {links.map((l) => (
                    <li key={l}>
                      <a href="#" data-testid={`link-footer-${l.toLowerCase().replace(/\s+/g, "-").replace(/[&]/g, "and")}`} aria-label={l} className="text-[13px] text-black/70 hover:text-black transition-colors font-medium">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="pt-6 border-t border-black/10 flex flex-col sm:flex-row justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-black">
                <Sparkles className="w-3.5 h-3.5 text-[#c8ff00]" />
              </div>
              <span className="text-sm font-bold text-black">AI Studio</span>
              <span className="text-[11px] text-black/40">&copy; 2026 All rights reserved.</span>
            </div>
            <div className="flex items-center gap-4">
              {["Privacy", "Terms", "Trust & Safety", "Cookies"].map((item) => (
                <a key={item} href="#" data-testid={`link-legal-${item.toLowerCase().replace(/\s+/g, "-").replace(/[&]/g, "and")}`} aria-label={item} className="text-[11px] text-black/50 hover:text-black transition-colors font-medium">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
