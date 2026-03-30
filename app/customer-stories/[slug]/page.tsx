"use client"

import { useState, useEffect, useCallback } from "react"
import { useParams } from "next/navigation"
import { notFound } from "next/navigation"
import Link from "next/link"
import { useAuthModal } from "@/components/auth-modal"
import {
  ArrowRight,
  ExternalLink,
  ChevronLeft,
  Quote,
} from "lucide-react"
import { getStoryDetail } from "@/lib/stories-data"

const tabs = [
  { id: "executive", label: "Executive summary" },
  { id: "story", label: "Read the story" },
  { id: "details", label: "Discover more details" },
  { id: "related", label: "Explore related stories" },
]

export default function StoryDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const story = getStoryDetail(slug)
  const { openAuth } = useAuthModal()
  const [activeTab, setActiveTab] = useState("executive")
  const [isSticky, setIsSticky] = useState(false)

  if (!story) {
    notFound()
  }

  /* ── Scroll spy for tabs ── */
  useEffect(() => {
    const handleScroll = () => {
      const sections = tabs.map((t) => ({
        id: t.id,
        el: document.getElementById(`section-${t.id}`),
      }))

      // Check if tab bar should be sticky
      const tabBar = document.getElementById("tab-bar-anchor")
      if (tabBar) {
        setIsSticky(window.scrollY > tabBar.offsetTop - 64)
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i].el
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveTab(sections[i].id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(`section-${id}`)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 130
      window.scrollTo({ top: y, behavior: "smooth" })
      setActiveTab(id)
    }
  }, [])

  return (
    <main className="min-h-screen" style={{ background: "#fff" }}>
      {/* ═══════════════════════════════════════════
          HERO — Image background with content overlay
          ═══════════════════════════════════════════ */}
      <section className="relative w-full min-h-[71vh] overflow-hidden flex flex-col">
        {/* Background gradient fallback */}
        <div
          className="absolute inset-0"
          style={{ background: story.gradient }}
        />
        {/* Background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={story.image}
          alt={story.agency}
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => { e.currentTarget.style.display = "none" }}
        />
        {/* Dark overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.7) 100%)" }}
        />

        {/* Content overlay */}
        <div className="relative z-10 flex-1 flex flex-col justify-center pt-24 pb-16 lg:pb-20">
          <div className="mx-auto max-w-3xl px-6 sm:px-8 lg:px-12 text-center">
            {/* Back link */}
            <Link
              href="/customer-stories"
              className="inline-flex items-center gap-2 text-sm font-semibold mb-6 hover:gap-3 transition-all duration-200 text-white/90 hover:text-white"
            >
              <ChevronLeft className="w-4 h-4" />
              Customer Stories
            </Link>

            {/* Date */}
            <p className="text-[13px] mb-4 text-white/80">
              {story.date}
            </p>

            {/* Headline */}
            <h1
              className="text-xl sm:text-[1.75rem] lg:text-[2.25rem] font-bold leading-[1.2] mb-6 mx-auto text-white"
              style={{ maxWidth: "680px" }}
            >
              {story.headline}
            </h1>

            {/* Share button */}
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: story.headline, url: window.location.href })
                }
              }}
              className="inline-flex items-center gap-2 font-semibold px-7 py-3 text-sm rounded-full text-white hover:opacity-90 transition-all duration-200"
              style={{ background: "#6366f1" }}
            >
              Share the story
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Metrics overlay at bottom */}
        <div className="relative z-10">
          <div
            className="mx-auto max-w-5xl px-6 py-5 flex flex-wrap gap-6 sm:gap-10 justify-center"
            style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(12px)" }}
          >
            {story.metrics.map((m, i) => (
              <div key={i} className="text-center">
                <p className="text-xl sm:text-2xl font-bold text-white">{m.value}</p>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-white/70">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          STICKY TAB BAR
          ═══════════════════════════════════════════ */}
      <div id="tab-bar-anchor" />
      <nav
        className={`${isSticky ? "fixed top-16 left-0 right-0 z-30 shadow-sm" : ""}`}
        style={{ background: "#fff", borderBottom: "1px solid #e8e8ec" }}
      >
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
          <div className="flex gap-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollTo(tab.id)}
                className="px-4 py-4 text-sm font-semibold whitespace-nowrap transition-colors duration-200 relative"
                style={{ color: activeTab === tab.id ? "#111" : "#888" }}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div
                    className="absolute bottom-0 left-4 right-4 h-[3px] rounded-full"
                    style={{ background: "#6366f1" }}
                  />
                )}
              </button>
            ))}
          </div>
          <button
            onClick={() => openAuth()}
            className="hidden sm:inline-flex items-center gap-2 font-bold px-5 py-2 text-sm rounded-full text-white shrink-0"
            style={{ background: "#6366f1" }}
          >
            Join Waitlist
          </button>
        </div>
      </nav>
      {/* Spacer when sticky */}
      {isSticky && <div className="h-[57px]" />}

      {/* ═══════════════════════════════════════════
          SECTION: Executive Summary (dark bg)
          ═══════════════════════════════════════════ */}
      <section
        id="section-executive"
        className="scroll-mt-36"
        style={{ background: "#0f172a" }}
      >
        <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
          <h2 className="text-xl font-bold mb-8 text-white">Executive summary</h2>
          <div className="space-y-5">
            {story.executive.map((para, i) => (
              <p key={i} className="text-[15px] leading-relaxed text-slate-300">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION: Read the Story
          ═══════════════════════════════════════════ */}
      <section
        id="section-story"
        className="scroll-mt-36"
        style={{ background: "#fff" }}
      >
        <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
          {/* Challenge */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-1 h-8 rounded-full"
                style={{ background: "#dc2626" }}
              />
              <h2 className="text-xl sm:text-2xl font-bold" style={{ color: "#111" }}>
                {story.challenge.title}
              </h2>
            </div>
            <div className="space-y-4 pl-5" style={{ borderLeft: "2px solid #f0f0f2" }}>
              {story.challenge.paragraphs.map((para, i) => (
                <p key={i} className="text-[15px] leading-relaxed" style={{ color: "#555" }}>
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Solution */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-1 h-8 rounded-full"
                style={{ background: "#6366f1" }}
              />
              <h2 className="text-xl sm:text-2xl font-bold" style={{ color: "#111" }}>
                {story.solution.title}
              </h2>
            </div>
            <div className="space-y-4 pl-5" style={{ borderLeft: "2px solid #f0f0f2" }}>
              {story.solution.paragraphs.map((para, i) => (
                <p key={i} className="text-[15px] leading-relaxed" style={{ color: "#555" }}>
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Quote Block */}
          <div
            className="rounded-2xl p-8 sm:p-10 mb-14"
            style={{ background: "#f5f5f7", border: "1px solid #e8e8ec" }}
          >
            <Quote className="w-10 h-10 mb-4" style={{ color: "#ddd" }} />
            <p
              className="text-lg sm:text-xl leading-relaxed font-medium mb-6"
              style={{ color: "#333" }}
            >
              &ldquo;{story.quote.text}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold"
                style={{ background: "rgba(99,102,241,0.1)", color: "#6366f1" }}
              >
                {story.quote.person.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-bold" style={{ color: "#111" }}>{story.quote.person}</p>
                <p className="text-xs" style={{ color: "#888" }}>{story.quote.role}</p>
              </div>
            </div>
          </div>

          {/* Results */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-1 h-8 rounded-full"
                style={{ background: "#059669" }}
              />
              <h2 className="text-xl sm:text-2xl font-bold" style={{ color: "#111" }}>
                {story.results.title}
              </h2>
            </div>
            <div className="space-y-4 pl-5" style={{ borderLeft: "2px solid #f0f0f2" }}>
              {story.results.paragraphs.map((para, i) => (
                <p key={i} className="text-[15px] leading-relaxed" style={{ color: "#555" }}>
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION: Discover More Details
          ═══════════════════════════════════════════ */}
      <section
        id="section-details"
        className="scroll-mt-36"
        style={{ background: "#f5f5f7" }}
      >
        <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
          <h2 className="text-xl sm:text-2xl font-bold mb-8" style={{ color: "#111" }}>
            Discover more details
          </h2>

          {/* Details grid */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{ background: "#fff", border: "1px solid #e8e8ec" }}
          >
            {story.moreDetails.map((detail, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0 px-6 py-4"
                style={i < story.moreDetails.length - 1 ? { borderBottom: "1px solid #f0f0f2" } : {}}
              >
                <span
                  className="text-sm font-semibold sm:w-48 shrink-0"
                  style={{ color: "#111" }}
                >
                  {detail.label}
                </span>
                <span className="text-sm" style={{ color: "#555" }}>
                  {detail.value}
                </span>
              </div>
            ))}
          </div>

          {/* Products used */}
          <div className="mt-8">
            <h3 className="text-sm font-bold mb-4" style={{ color: "#111" }}>
              Products used
            </h3>
            <div className="flex flex-wrap gap-2">
              {story.products.map((product) => (
                <span
                  key={product}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold"
                  style={{ background: "#fff", border: "1px solid #e8e8ec", color: "#333" }}
                >
                  <span className="w-2 h-2 rounded-full" style={{ background: "#6366f1" }} />
                  {product}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION: Explore Related Stories
          ═══════════════════════════════════════════ */}
      <section
        id="section-related"
        className="scroll-mt-36"
        style={{ background: "#fff" }}
      >
        <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
          <h2 className="text-xl sm:text-2xl font-bold mb-8" style={{ color: "#111" }}>
            Explore related stories
          </h2>

          <div
            className="relative rounded-3xl overflow-hidden py-14 px-8 text-center mb-10"
            style={{
              background: "linear-gradient(135deg, #dbeafe 0%, #c7d2fe 50%, #e9d5ff 100%)",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255,255,255,0.4) 0%, transparent 70%)" }}
            />
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold mb-3" style={{ color: "#111" }}>
                Find more customer stories
              </h3>
              <p className="text-sm mb-7" style={{ color: "#555" }}>
                Discover how agencies across the talent industry are transforming their operations.
              </p>
              <Link
                href="/customer-stories"
                className="inline-flex items-center gap-2 font-bold px-7 py-3.5 text-sm rounded-full text-white hover:scale-[1.02] transition-all duration-200"
                style={{ background: "#6366f1", boxShadow: "0 4px 16px rgba(99,102,241,0.3)" }}
              >
                Search all stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BOTTOM CTA
          ═══════════════════════════════════════════ */}
      <section
        className="py-20 lg:py-24"
        style={{ background: "#0f172a" }}
      >
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
            Ready to write your success story?
          </h2>
          <p className="text-sm leading-relaxed mb-8 text-slate-400">
            Join hundreds of agencies transforming their operations with TalentOS.
          </p>
          <button
            onClick={() => openAuth()}
            className="inline-flex items-center gap-2 font-bold px-7 py-3.5 text-sm rounded-full text-white hover:scale-[1.02] transition-all duration-200"
            style={{ background: "#6366f1", boxShadow: "0 4px 16px rgba(99,102,241,0.3)" }}
          >
            Join Waitlist
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>
    </main>
  )
}
