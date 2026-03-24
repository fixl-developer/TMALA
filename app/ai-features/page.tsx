"use client"

import React from "react"
import { Sparkles, ArrowRight, ArrowUpRight } from "lucide-react"
import { AIStudioStickyHeader } from "@/components/ai-studio-sticky-header"
import { AIStudioHeroCarousel } from "@/components/ai-studio-hero-carousel"
import { AIStudioFeatureBanner } from "@/components/ai-studio-feature-banner"
import { AIStudioPhotoGallery } from "@/components/ai-studio-photo-gallery"
import { AIStudioExclusiveSection } from "@/components/ai-studio-exclusive-section"
import { AIStudioVideoGallery } from "@/components/ai-studio-video-gallery"
import { useAuthModal } from "@/components/auth-modal"

/* ─── Inline mini-hero (visible before scroll triggers sticky header) ─── */
function MiniTopBar() {
  const { openAuth } = useAuthModal()
  return (
    <div
      data-testid="section-mini-top-bar"
      aria-label="Mini top bar"
      className="flex items-center justify-between px-4 sm:px-8 py-3"
      style={{ background: "#0a0a0a", borderBottom: "1px solid rgba(255,255,255,0.04)" }}
    >
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "#c8ff00" }}>
          <Sparkles className="w-4 h-4 text-black" />
        </div>
        <span className="text-[15px] font-bold text-white">
          AI<span style={{ color: "#c8ff00" }}>Studio</span>
        </span>
      </div>
      <div className="flex items-center gap-3">
        <button data-testid="btn-login" aria-label="Login" onClick={() => openAuth("signin")} className="text-[13px] text-white/60 hover:text-white transition-colors">Login</button>
        <button
          data-testid="btn-signup"
          aria-label="Sign up"
          onClick={() => openAuth("signup")}
          className="text-[13px] font-bold px-4 py-2 rounded-lg transition-all hover:scale-[1.02]"
          style={{ background: "#c8ff00", color: "#000" }}
        >
          Sign up
        </button>
      </div>
    </div>
  )
}

/* ─── Quick tools row (like Higgsfield's Explore nav before fold) ─── */
function QuickToolsRow() {
  const tools = [
    { label: "Explore", href: "/ai-features" },
    { label: "Portfolio Builder", href: "/ai-features/portfolio-builder" },
    { label: "Media Lab", href: "/ai-features/media-lab" },
    { label: "Audition Coach", href: "/ai-features/audition-coach" },
    { label: "Applications", href: "/ai-features/applications" },
    { label: "AI Generation", href: "/ai-features/generate" },
    { label: "Brand Kit", href: "/ai-features/brand-kit" },
    { label: "Casting Studio", href: "/ai-features/casting" },
    { label: "Cinema Studio", href: "/ai-features/cinema-studio" },
    { label: "AI Influence", href: "/ai-features/ai-influence" },
    { label: "My AI Assets", href: "/ai-features/ai-assets" },
    { label: "Settings & Safety", href: "/ai-features/settings-safety" },
    { label: "Pricing", href: "/ai-features/pricing" },
  ]
  return (
    <div data-testid="section-quick-tools" aria-label="Quick tools navigation" className="overflow-x-auto scrollbar-none px-4 sm:px-8 py-3" style={{ background: "#0a0a0a" }}>
      <div className="flex items-center gap-2 min-w-max">
        {tools.map((tool, i) => (
          <a
            key={tool.label}
            href={tool.href}
            data-testid={`link-tool-${tool.label.toLowerCase().replace(/[\s&]+/g, "-")}`}
            className="px-4 py-2 rounded-lg text-[13px] font-medium whitespace-nowrap transition-colors"
            style={{
              background: i === 0 ? "#c8ff00" : "rgba(255,255,255,0.05)",
              color: i === 0 ? "#000" : "rgba(255,255,255,0.6)",
              border: i === 0 ? "none" : "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {tool.label}
          </a>
        ))}
      </div>
    </div>
  )
}

/* ─── Featured tool cards (Portfolio Builder + Smart Matching) ─── */
function FeaturedToolCards() {
  return (
    <section id="explore" data-testid="section-featured-tools" aria-label="Featured tool cards" className="py-8 px-4 sm:px-8" style={{ background: "#0a0a0a" }}>
      <div className="max-w-[1440px] mx-auto">
        {/* Two big featured cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          {/* Portfolio Builder */}
          <a
            href="/ai-features/portfolio-builder"
            data-testid="link-portfolio-builder"
            className="relative rounded-2xl overflow-hidden group cursor-pointer block"
            style={{ minHeight: 320 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=800&h=500&fit=crop"
              alt="Portfolio Builder"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <span className="inline-block px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider mb-3" style={{ background: "#c8ff00", color: "#000" }}>
                Portfolio Builder
              </span>
              <h3 className="font-bebas text-2xl sm:text-3xl text-white mb-2">
                YOUR PORTFOLIO, PERFECTED BY AI
              </h3>
              <p className="text-sm text-white/60 max-w-sm">
                AI scans your profile, writes your bio in 4 tones, and packages your work into ready-to-send casting packs.
              </p>
            </div>
          </a>

          {/* Smart Matching */}
          <a
            href="/ai-features/casting"
            data-testid="link-smart-matching"
            className="relative rounded-2xl overflow-hidden group cursor-pointer block"
            style={{ minHeight: 320 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop"
              alt="Smart Matching"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <span className="inline-block px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider mb-3" style={{ background: "rgba(200,255,0,0.15)", color: "#c8ff00", border: "1px solid rgba(200,255,0,0.3)" }}>
                Smart Matching
              </span>
              <h3 className="font-bebas text-2xl sm:text-3xl text-white mb-2">
                RIGHT TALENT, RIGHT OPPORTUNITY
              </h3>
              <p className="text-sm text-white/60 max-w-sm">
                AI reads casting briefs, cross-references availability, and surfaces the right talent for every opportunity.
              </p>
            </div>
          </a>
        </div>

        {/* Bottom row — 4 smaller tool cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { title: "MEDIA\nLAB", desc: "Photo scoring, video analysis, auto-tagging, rights.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop", href: "/ai-features/media-lab" },
            { title: "AUDITION\nCOACH", desc: "Self-tape feedback, drills, practice plans.", img: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=300&fit=crop", href: "/ai-features/audition-coach" },
            { title: "GROWTH\nINSIGHTS", desc: "Funnel analytics, skill heatmaps, goal tracking.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop", href: "/ai-features/growth-insights" },
            { title: "AI\nGENERATION", desc: "Image gen, video gen Fast/Standard/Cinema.", img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop", href: "/ai-features/generate" },
          ].map((card, i) => (
            <a
              key={i}
              href={card.href}
              data-testid={`link-tool-card-${card.title.replace(/\n/g, "-").toLowerCase()}`}
              className="relative rounded-2xl overflow-hidden group cursor-pointer block"
              style={{ minHeight: 220 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={card.img}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="font-bebas text-lg text-white leading-tight mb-1">
                  {card.title.split("\n").map((l, j) => (
                    <React.Fragment key={j}>{l}{j === 0 && <br />}</React.Fragment>
                  ))}
                </h4>
                <p className="text-[11px] text-white/50">{card.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── CTA Footer ─── */
function CTAFooter() {
  const { openAuth } = useAuthModal()
  return (
    <section data-testid="section-cta-footer" aria-label="Call to action" className="py-20 px-4 sm:px-8" style={{ background: "#0a0a0a" }}>
      <div className="max-w-3xl mx-auto text-center">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8"
          style={{ background: "#c8ff00" }}
        >
          <Sparkles className="w-7 h-7 text-black" />
        </div>
        <h2 className="font-bebas text-4xl sm:text-6xl text-white mb-4">
          READY TO CREATE?
        </h2>
        <p className="text-white/50 text-base mb-8 max-w-md mx-auto">
          Join talents and agencies using AI Studio to build portfolios, nail auditions, and win more roles.
        </p>
        <button
          data-testid="btn-get-started"
          aria-label="Get started for free"
          onClick={() => openAuth()}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold transition-all hover:scale-[1.03]"
          style={{ background: "#c8ff00", color: "#000" }}
        >
          Get started for free
          <ArrowRight className="w-4 h-4" />
        </button>
        <p className="mt-4 text-xs text-white/30">No credit card required</p>
      </div>
    </section>
  )
}

/* ─── Lime-Green Footer (Higgsfield-style) ─── */
function Footer() {
  const cols: Record<string, { label: string; href: string }[]> = {
    "AI Studio": [
      { label: "About", href: "/ai-features" },
      { label: "Pricing", href: "/ai-features/pricing" },
      { label: "Cinema Studio", href: "/ai-features/cinema-studio" },
      { label: "AI Influencer", href: "/ai-features/ai-influence" },
      { label: "Community", href: "#" },
      { label: "Enterprise", href: "#" },
      { label: "Team", href: "#" },
    ],
    Image: [
      { label: "Create Image", href: "/ai-features/generate" },
      { label: "AI Image", href: "/ai-features/generate" },
      { label: "Edit Image", href: "/ai-features/media-lab" },
      { label: "Image Upscale", href: "/ai-features/media-lab" },
      { label: "Portfolio Builder", href: "/ai-features/portfolio-builder" },
      { label: "Brand Kit", href: "/ai-features/brand-kit" },
    ],
    Video: [
      { label: "AI Video", href: "/ai-features/cinema-studio" },
      { label: "Create Video", href: "/ai-features/cinema-studio" },
      { label: "Audition Coach", href: "/ai-features/audition-coach" },
      { label: "Lipsync Studio", href: "/ai-features/cinema-studio" },
      { label: "Video Upscale", href: "/ai-features/media-lab" },
    ],
    Tools: [
      { label: "Applications", href: "/ai-features/applications" },
      { label: "Casting Studio", href: "/ai-features/casting" },
      { label: "Growth Insights", href: "/ai-features/growth-insights" },
      { label: "Media Lab", href: "/ai-features/media-lab" },
      { label: "Audio Studio", href: "/ai-features/generate" },
    ],
  }

  return (
    <footer data-testid="section-footer" aria-label="Site footer" style={{ background: "#c8ff00" }}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr_1fr_1fr] gap-10 mb-12">
          {/* Left: Big headline */}
          <div>
            <h2 className="font-bebas text-[2.5rem] sm:text-[3.2rem] leading-[0.95] text-black mb-4">
              THE ULTIMATE<br />
              AI-POWERED<br />
              CREATIVE SUITE<br />
              FOR TALENTS &amp;<br />
              CREATORS
            </h2>
          </div>

          {/* Link columns */}
          {Object.entries(cols).map(([section, links]) => (
            <div key={section}>
              <div className="text-[12px] font-bold text-black/40 uppercase tracking-[0.1em] mb-4">{section}</div>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} data-testid={`link-footer-${l.label.toLowerCase().replace(/[\s&]+/g, "-")}`} className="text-[13px] text-black/70 hover:text-black transition-colors font-medium">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
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
              <a key={item} href="#" data-testid={`link-footer-${item.toLowerCase().replace(/[\s&]+/g, "-")}`} className="text-[11px] text-black/50 hover:text-black transition-colors font-medium">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════════════════════════ */
export default function AIFeaturesPage() {
  return (
    <div data-testid="section-ai-features-page" aria-label="AI Features page" className="min-h-screen" style={{ background: "#0a0a0a", color: "#fff" }}>
      {/* Feature pills — always visible below main header */}
      <AIStudioStickyHeader />

      {/* Hero carousel — featured products */}
      <AIStudioHeroCarousel />

      {/* Feature banner — "Different Looks, Same Talent" */}
      <AIStudioFeatureBanner />

      {/* Photo gallery — masonry */}
      <AIStudioPhotoGallery />

      {/* Exclusive section — Cinema Studio split promo */}
      <AIStudioExclusiveSection />

      {/* Video gallery — masonry with play buttons */}
      <AIStudioVideoGallery />

      {/* Featured tool cards */}
      <FeaturedToolCards />

      {/* CTA */}
      <CTAFooter />

      {/* Footer */}
      <Footer />
    </div>
  )
}
