"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { useAuthModal } from "@/components/auth-modal"
import { storySlugMap } from "@/lib/stories-data"
import {
  Search,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  X,
  SlidersHorizontal,
  Quote,
} from "lucide-react"

/* ──────────────────────────────────────────────
   FILTER DATA
   ────────────────────────────────────────────── */
const filterGroups = [
  {
    key: "agencyType",
    label: "Agency Type",
    options: ["Modeling Agency", "Pageant Organizer", "Influencer Agency", "Casting Bureau", "Academy & Training", "Staffing & Events", "Photography Studio", "Production House"],
  },
  {
    key: "module",
    label: "Products Used",
    options: ["Talent CRM", "Pageant Engine", "Escrow & Payments", "AI Studio", "Contracts & E-Sign", "Casting & Bookings", "Academy", "Portfolio Studio"],
  },
  {
    key: "region",
    label: "Region",
    options: ["India", "Southeast Asia", "Middle East", "Europe", "North America", "Africa"],
  },
  {
    key: "size",
    label: "Organization Size",
    options: ["1-10 employees", "11-50 employees", "51-200 employees", "200+ employees"],
  },
]

/* ──────────────────────────────────────────────
   STORIES DATA
   ────────────────────────────────────────────── */
const stories = [
  {
    id: 1,
    agency: "Elite Models India",
    headline: "Elite Models India scales to 500+ model roster with 3x faster onboarding using TalentOS",
    industry: "Modeling Agency",
    image: "/customer-stories/modeling-agency.jpg",
    gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a78bfa 100%)",
    quote: "TalentOS transformed how we manage our roster. What used to take days now happens in minutes.",
    person: "Priya Sharma",
    role: "Founder & CEO",
    products: ["Talent CRM", "AI Studio", "Escrow & Payments"],
    metrics: [
      { value: "3x", label: "Faster Onboarding" },
      { value: "60%", label: "Cost Reduction" },
      { value: "500+", label: "Models Managed" },
    ],
    region: "India",
    size: "51-200 employees",
    tags: ["Modeling Agency", "Talent CRM", "AI Studio", "Escrow & Payments", "India"],
  },
  {
    id: 2,
    agency: "Crown Pageants International",
    headline: "Crown Pageants eliminates scoring disputes and reduces admin overhead by 75% with TalentOS Pageant Engine",
    industry: "Pageant Organizer",
    image: "/customer-stories/pageant-organizer.jpg",
    gradient: "linear-gradient(135deg, #d97706 0%, #f59e0b 50%, #fbbf24 100%)",
    quote: "The blind scoring system and multi-approver result publishing gave us the credibility we needed with sponsors.",
    person: "Rahul Kapoor",
    role: "Director of Operations",
    products: ["Pageant Engine", "Escrow & Payments"],
    metrics: [
      { value: "75%", label: "Less Admin Work" },
      { value: "2,000+", label: "Contestants Managed" },
      { value: "0", label: "Scoring Disputes" },
    ],
    region: "India",
    size: "11-50 employees",
    tags: ["Pageant Organizer", "Pageant Engine", "Escrow & Payments", "India"],
  },
  {
    id: 3,
    agency: "ViralReach Agency",
    headline: "ViralReach cuts campaign setup time by 80% and improves brand satisfaction with AI-powered workflows",
    industry: "Influencer Agency",
    image: "/customer-stories/influencer-agency.jpg",
    gradient: "linear-gradient(135deg, #ec4899 0%, #f472b6 50%, #f9a8d4 100%)",
    quote: "AI Studio's media kit generator alone saved us 20 hours per week. Our brands now get real-time campaign dashboards.",
    person: "Ananya Desai",
    role: "Head of Partnerships",
    products: ["AI Studio", "Talent CRM", "Contracts & E-Sign"],
    metrics: [
      { value: "80%", label: "Faster Setup" },
      { value: "45%", label: "Better Satisfaction" },
      { value: "200+", label: "Campaigns Tracked" },
    ],
    region: "India",
    size: "11-50 employees",
    tags: ["Influencer Agency", "AI Studio", "Talent CRM", "Contracts & E-Sign", "India"],
  },
  {
    id: 4,
    agency: "BookMyTalent",
    headline: "BookMyTalent drops no-show rate from 12% to under 2% with automated staffing workflows on TalentOS",
    industry: "Staffing & Events",
    image: "/customer-stories/staffing-events.jpg",
    gradient: "linear-gradient(135deg, #059669 0%, #10b981 50%, #34d399 100%)",
    quote: "The availability calendar and auto-backup assignment changed everything for our event staffing operations.",
    person: "Vikram Singh",
    role: "Co-Founder",
    products: ["Talent CRM", "Casting & Bookings", "Escrow & Payments"],
    metrics: [
      { value: "2%", label: "No-Show Rate" },
      { value: "₹8L+", label: "Saved in Rebookings" },
      { value: "100+", label: "Events Per Month" },
    ],
    region: "India",
    size: "51-200 employees",
    tags: ["Staffing & Events", "Talent CRM", "Casting & Bookings", "Escrow & Payments", "India"],
  },
  {
    id: 5,
    agency: "Lens & Light Studios",
    headline: "Lens & Light Studios reduces asset delivery from 2 weeks to 3 days with Portfolio Studio and automated watermarking",
    industry: "Photography Studio",
    image: "/customer-stories/photography-studio.jpg",
    gradient: "linear-gradient(135deg, #0ea5e9 0%, #38bdf8 50%, #7dd3fc 100%)",
    quote: "Our photographers now deliver within 72 hours. The watermarking and client gallery features are game-changers.",
    person: "Meera Patel",
    role: "Studio Director",
    products: ["Portfolio Studio", "Contracts & E-Sign", "AI Studio"],
    metrics: [
      { value: "3 days", label: "Delivery Time" },
      { value: "40%", label: "Client Satisfaction Up" },
      { value: "50+", label: "Photographers" },
    ],
    region: "India",
    size: "11-50 employees",
    tags: ["Photography Studio", "Portfolio Studio", "Contracts & E-Sign", "AI Studio", "India"],
  },
  {
    id: 6,
    agency: "Gulf Talent Hub",
    headline: "Gulf Talent Hub launches white-label platform across 3 Middle East markets in under 2 weeks",
    industry: "Modeling Agency",
    image: "/customer-stories/gulf-talent.jpg",
    gradient: "linear-gradient(135deg, #7c3aed 0%, #8b5cf6 50%, #a78bfa 100%)",
    quote: "The white-label setup was incredibly fast. Each market got its own branded portal with full Arabic support.",
    person: "Ahmed Al-Rashid",
    role: "Managing Director",
    products: ["Talent CRM", "Casting & Bookings", "Escrow & Payments"],
    metrics: [
      { value: "3", label: "Markets Launched" },
      { value: "2 weeks", label: "Time to Launch" },
      { value: "1,200+", label: "Talents Onboarded" },
    ],
    region: "Middle East",
    size: "51-200 employees",
    tags: ["Modeling Agency", "Talent CRM", "Casting & Bookings", "Escrow & Payments", "Middle East"],
  },
  {
    id: 7,
    agency: "StarMakers Academy",
    headline: "StarMakers Academy digitizes grooming courses and certifications, training 5,000+ students in Year 1",
    industry: "Academy & Training",
    image: "/customer-stories/academy-training.jpg",
    gradient: "linear-gradient(135deg, #dc2626 0%, #ef4444 50%, #f87171 100%)",
    quote: "We went from a single-city physical academy to a nationwide digital platform. The certification engine is brilliant.",
    person: "Neha Gupta",
    role: "Founder",
    products: ["Academy", "Talent CRM", "Escrow & Payments"],
    metrics: [
      { value: "5,000+", label: "Students Trained" },
      { value: "15", label: "Cities Reached" },
      { value: "92%", label: "Completion Rate" },
    ],
    region: "India",
    size: "11-50 employees",
    tags: ["Academy & Training", "Academy", "Talent CRM", "Escrow & Payments", "India"],
  },
  {
    id: 8,
    agency: "CastRight Productions",
    headline: "CastRight Productions fills casting calls 4x faster with AI-powered talent matching and shortlisting",
    industry: "Casting Bureau",
    image: "/customer-stories/casting-bureau.jpg",
    gradient: "linear-gradient(135deg, #0d9488 0%, #14b8a6 50%, #5eead4 100%)",
    quote: "Smart Matching recommends the right talent before we even finish writing the brief. It's like having an extra casting director.",
    person: "Arjun Mehta",
    role: "Head of Casting",
    products: ["Casting & Bookings", "AI Studio", "Talent CRM"],
    metrics: [
      { value: "4x", label: "Faster Casting" },
      { value: "94%", label: "Match Accuracy" },
      { value: "300+", label: "Castings Per Year" },
    ],
    region: "India",
    size: "1-10 employees",
    tags: ["Casting Bureau", "Casting & Bookings", "AI Studio", "Talent CRM", "India"],
  },
]

type SortOption = "recent" | "name"

/* ──────────────────────────────────────────────
   COMPONENT
   ────────────────────────────────────────────── */
export default function CustomerStoriesPage() {
  const { openAuth } = useAuthModal()
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({ agencyType: true })
  const [sortBy, setSortBy] = useState<SortOption>("recent")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const toggleGroup = (key: string) => {
    setOpenGroups((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const toggleFilter = (value: string) => {
    setActiveFilters((prev) =>
      prev.includes(value) ? prev.filter((f) => f !== value) : [...prev, value]
    )
  }

  const clearAllFilters = () => {
    setActiveFilters([])
    setSearchQuery("")
  }

  const filteredStories = useMemo(() => {
    let result = stories

    // Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      result = result.filter(
        (s) =>
          s.agency.toLowerCase().includes(q) ||
          s.headline.toLowerCase().includes(q) ||
          s.industry.toLowerCase().includes(q) ||
          s.products.some((p) => p.toLowerCase().includes(q))
      )
    }

    // Filters
    if (activeFilters.length > 0) {
      result = result.filter((s) =>
        activeFilters.some((f) => s.tags.includes(f))
      )
    }

    // Sort
    if (sortBy === "name") {
      result = [...result].sort((a, b) => a.agency.localeCompare(b.agency))
    }

    return result
  }, [searchQuery, activeFilters, sortBy])

  /* ── Filter sidebar content (shared between desktop and mobile) ── */
  const FilterSidebar = () => (
    <div className="space-y-2">
      {filterGroups.map((group) => {
        const isOpen = openGroups[group.key] ?? false
        return (
          <div
            key={group.key}
            className="rounded-xl overflow-hidden"
            style={{ background: "#fff", border: "1px solid #e8e8ec" }}
          >
            <button
              onClick={() => toggleGroup(group.key)}
              className="w-full flex items-center justify-between px-5 py-4 text-left"
            >
              <span className="text-sm font-semibold" style={{ color: "#111" }}>
                {group.label}
              </span>
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ background: "#6366f1", color: "#fff" }}
              >
                {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </div>
            </button>
            {isOpen && (
              <div className="px-5 pb-4 space-y-2">
                {group.options.map((opt) => {
                  const isActive = activeFilters.includes(opt)
                  return (
                    <button
                      key={opt}
                      onClick={() => toggleFilter(opt)}
                      className="flex items-center gap-3 w-full text-left py-1.5 group"
                    >
                      <div
                        className="w-4 h-4 rounded border-2 flex items-center justify-center shrink-0 transition-colors duration-150"
                        style={{
                          borderColor: isActive ? "#6366f1" : "#d1d5db",
                          background: isActive ? "#6366f1" : "transparent",
                        }}
                      >
                        {isActive && (
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                            <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                      <span
                        className="text-sm transition-colors duration-150"
                        style={{ color: isActive ? "#111" : "#555" }}
                      >
                        {opt}
                      </span>
                    </button>
                  )
                })}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )

  return (
    <main className="min-h-screen" style={{ background: "#f5f5f7" }}>
      {/* ═══════════════════════════════════════════
          HERO — Gradient with Search
          ═══════════════════════════════════════════ */}
      <section
        className="relative w-full overflow-hidden pt-32 pb-20 lg:pb-28"
        style={{
          background: "linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 25%, #ddd6fe 50%, #e9d5ff 75%, #f3e8ff 100%)",
        }}
      >
        {/* Decorative shapes */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 80% 50% at 20% 40%, rgba(255,255,255,0.4) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 60% at 80% 60%, rgba(255,255,255,0.3) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8 lg:px-12">
          <p
            className="text-[11px] font-bold uppercase tracking-[0.4em] mb-4"
            style={{ color: "#6366f1" }}
          >
            Search All Stories
          </p>

          <h1
            className="text-3xl sm:text-4xl lg:text-[3.2rem] font-bold leading-tight mb-10"
            style={{ color: "#111" }}
          >
            Find customer stories
          </h1>

          {/* Search Bar */}
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: "#fff",
              boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
            }}
          >
            <input
              type="text"
              placeholder="Search for stories by agency name, product, industry, or business need..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-6 pr-16 py-5 text-[15px] outline-none"
              style={{ color: "#111", background: "transparent" }}
            />
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-xl flex items-center justify-center"
              style={{ background: "#6366f1" }}
            >
              <Search className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FILTER + GRID
          ═══════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        {/* Active filters + Sort bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3 flex-wrap">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="lg:hidden inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold"
              style={{ background: "#fff", border: "1px solid #e8e8ec", color: "#111" }}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>

            <span className="text-sm font-semibold" style={{ color: "#111" }}>
              Filters
            </span>
            <span className="text-sm" style={{ color: "#888" }}>
              ({filteredStories.length} results)
            </span>

            {/* Active filter chips */}
            {activeFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => toggleFilter(filter)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors duration-150"
                style={{
                  background: "#6366f1",
                  color: "#fff",
                }}
              >
                {filter}
                <X className="w-3 h-3" />
              </button>
            ))}

            {activeFilters.length > 0 && (
              <button
                onClick={clearAllFilters}
                className="text-xs font-semibold underline"
                style={{ color: "#6366f1" }}
              >
                Clear all
              </button>
            )}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <span className="text-sm" style={{ color: "#888" }}>Sort by</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="px-4 py-2 rounded-xl text-sm font-semibold outline-none cursor-pointer appearance-none pr-8"
              style={{
                background: "#fff",
                border: "1px solid #e8e8ec",
                color: "#111",
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 12px center",
              }}
            >
              <option value="recent">Most recent</option>
              <option value="name">Name A-Z</option>
            </select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* ── LEFT: Filter Sidebar (Desktop) ── */}
          <aside className="hidden lg:block w-64 shrink-0">
            <FilterSidebar />
          </aside>

          {/* ── Mobile filter drawer ── */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="absolute inset-0 bg-black/30" onClick={() => setMobileFiltersOpen(false)} />
              <div
                className="absolute left-0 top-0 bottom-0 w-80 overflow-y-auto p-5"
                style={{ background: "#f5f5f7" }}
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-lg font-bold" style={{ color: "#111" }}>Filters</span>
                  <button onClick={() => setMobileFiltersOpen(false)}>
                    <X className="w-5 h-5" style={{ color: "#111" }} />
                  </button>
                </div>
                <FilterSidebar />
              </div>
            </div>
          )}

          {/* ── RIGHT: Story Cards Grid ── */}
          <div className="flex-1 min-w-0">
            {filteredStories.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-lg font-semibold mb-2" style={{ color: "#111" }}>
                  No stories found
                </p>
                <p className="text-sm mb-6" style={{ color: "#888" }}>
                  Try adjusting your search or filters.
                </p>
                <button
                  onClick={clearAllFilters}
                  className="text-sm font-semibold px-5 py-2.5 rounded-full"
                  style={{ background: "#6366f1", color: "#fff" }}
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredStories.map((story) => (
                  <article
                    key={story.id}
                    className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                    style={{ background: "#fff", border: "1px solid #e8e8ec" }}
                  >
                    {/* Image with padding like Microsoft */}
                    <div className="p-4 pb-0">
                      <div
                        className="relative h-52 overflow-hidden rounded-xl"
                        style={{ background: story.gradient }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={story.image}
                          alt={story.agency}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => { e.currentTarget.style.display = "none" }}
                        />
                        {/* Agency logo badge */}
                        <div className="absolute top-3 left-3 z-10">
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold shadow-md"
                            style={{ background: "#fff", color: "#6366f1" }}
                          >
                            {story.agency.split(" ").map(w => w[0]).slice(0, 2).join("")}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 pb-7">
                      {/* Industry tag */}
                      <p className="text-[13px] mb-3" style={{ color: "#6366f1" }}>
                        Industry: {story.industry}
                      </p>

                      {/* Headline */}
                      <h3
                        className="text-[15px] font-bold leading-snug mb-8 line-clamp-3"
                        style={{ color: "#111" }}
                      >
                        {story.headline}
                      </h3>

                      {/* Product tags */}
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-7">
                        {story.products.map((product) => (
                          <span
                            key={product}
                            className="inline-flex items-center gap-2 text-[13px]"
                            style={{ color: "#333" }}
                          >
                            <span
                              className="w-4 h-4 rounded-md flex items-center justify-center text-[9px] font-bold shrink-0"
                              style={{ background: "rgba(99,102,241,0.1)", color: "#6366f1" }}
                            >
                              {product.charAt(0)}
                            </span>
                            {product}
                          </span>
                        ))}
                      </div>

                      {/* Read the story CTA */}
                      <Link
                        href={`/customer-stories/${storySlugMap[story.id] || ""}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-white transition-all duration-200 hover:opacity-90"
                        style={{ background: "#6366f1" }}
                      >
                        Read the story
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          MID-PAGE CTA BANNER
          ═══════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10">
        <div
          className="relative rounded-3xl overflow-hidden py-14 px-8 sm:px-14 text-center"
          style={{
            background: "linear-gradient(135deg, #dbeafe 0%, #c7d2fe 50%, #e9d5ff 100%)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255,255,255,0.4) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-3"
              style={{ color: "#111" }}
            >
              Explore more customer stories
            </h2>
            <p
              className="text-sm leading-relaxed mb-7 max-w-md mx-auto"
              style={{ color: "#555" }}
            >
              Find out how agencies across the talent industry are achieving more with TalentOS.
            </p>
            <button
              onClick={clearAllFilters}
              className="inline-flex items-center gap-2 font-bold px-7 py-3.5 text-sm rounded-full text-white hover:scale-[1.02] transition-all duration-200"
              style={{ background: "#6366f1", boxShadow: "0 4px 16px rgba(99,102,241,0.3)" }}
            >
              Search all stories
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FEATURED QUOTE
          ═══════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {stories.slice(0, 2).map((story) => (
            <div
              key={story.id}
              className="rounded-2xl p-8 sm:p-10"
              style={{ background: "#fff", border: "1px solid #e8e8ec" }}
            >
              <Quote className="w-8 h-8 mb-4" style={{ color: "#e0e0e0" }} />
              <p
                className="text-[15px] leading-relaxed mb-6 font-medium"
                style={{ color: "#333" }}
              >
                &ldquo;{story.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ background: "rgba(99,102,241,0.08)", color: "#6366f1" }}
                >
                  {story.person.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold" style={{ color: "#111" }}>{story.person}</p>
                  <p className="text-xs" style={{ color: "#888" }}>
                    {story.role}, {story.agency}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BOTTOM CTA
          ═══════════════════════════════════════════ */}
      <section
        className="py-20 lg:py-24"
        style={{ background: "#fff" }}
      >
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: "#111" }}>
            Ready to write your success story?
          </h2>
          <p className="text-sm leading-relaxed mb-8" style={{ color: "#555" }}>
            Join hundreds of agencies transforming their operations with TalentOS. Start your free trial today.
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
