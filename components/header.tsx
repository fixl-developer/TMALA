"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Sparkles, Menu, X, ChevronDown, ArrowRight,
  Users, Briefcase, Trophy, CreditCard, Shield,
  BookOpen, Headphones, Code, Newspaper, Award, Globe, FileText, Zap, LifeBuoy, Blocks
} from "lucide-react"
import { AGENCY_CATEGORIES, AGENCY_TYPES, getAgencyHref } from "@/lib/agencies-data"
import { useAuthModal } from "@/components/auth-modal"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "For Talents", href: "/talents" },
  { name: "AI Studio", href: "/ai-features", badge: "New" },
  { name: "Pricing", href: "/pricing" },
]

const solutionColumns = [
  {
    title: "Manage",
    items: [
      { icon: Users, label: "Talent CRM", desc: "Profiles, portfolios & availability", href: "/talents" },
      { icon: Briefcase, label: "Casting & Bookings", desc: "Briefs, submissions & scheduling", href: "/agencies/casting" },
      { icon: Trophy, label: "Pageant Engine", desc: "Scoring, rounds & result publishing", href: "/agencies/pageant" },
      { icon: Globe, label: "For Agencies", desc: "Browse all 22 agency types", href: "/agencies/all" },
    ],
  },
  {
    title: "Monetize",
    items: [
      { icon: CreditCard, label: "Payments & Escrow", desc: "Wallets, payouts & milestone escrow", href: "/payments-escrow" },
      { icon: Zap, label: "Automation", desc: "Workflows, triggers & smart rules", href: "/#waitlist" },
      { icon: Globe, label: "White-Label Platform", desc: "Custom domain, branding & feature toggles", href: "/white-label" },
    ],
  },
  {
    title: "Protect",
    items: [
      { icon: Shield, label: "Trust & Safety", desc: "Disputes, moderation & compliance", href: "/trust-safety" },
      { icon: FileText, label: "Contracts & E-Sign", desc: "Templates, clauses & signature flow", href: "/contracts" },
      { icon: Award, label: "Verification", desc: "Identity checks & credential proofs", href: "/verification" },
    ],
  },
]

const resourceColumns = [
  {
    title: "Learn",
    items: [
      { icon: Newspaper, label: "Blog", desc: "Industry insights & updates", href: "/blog" },
      { icon: BookOpen, label: "Guides & Docs", desc: "Platform documentation", href: "/guides" },
      { icon: Award, label: "Customer Stories", desc: "How agencies use TalentOS", href: "/customer-stories" },
    ],
  },
  {
    title: "Support",
    items: [
      { icon: LifeBuoy, label: "Help Center", desc: "FAQs & troubleshooting", href: "/help" },
      { icon: Headphones, label: "Contact Support", desc: "24/7 dedicated assistance", href: "/contact" },
    ],
  },
  {
    title: "Build",
    items: [
      { icon: Code, label: "API & Integrations", desc: "REST APIs & webhook docs", href: "/api-docs" },
      { icon: Blocks, label: "Template Center", desc: "Ready-made workflow templates", href: "/templates" },
    ],
  },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [agenciesOpen, setAgenciesOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const [hoveredCat, setHoveredCat] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { openAuth } = useAuthModal()
  const isAIStudio = pathname.startsWith("/ai-features")

  const accentColorMap: Record<string, { text: string; bg: string; dot: string; border: string }> = {
    violet: { text: "text-violet-600", bg: "bg-violet-50", dot: "bg-violet-500", border: "border-violet-200" },
    cyan:   { text: "text-cyan-600",   bg: "bg-cyan-50",   dot: "bg-cyan-500",   border: "border-cyan-200" },
    emerald:{ text: "text-emerald-600",bg: "bg-emerald-50",dot: "bg-emerald-500",border: "border-emerald-200" },
    amber:  { text: "text-amber-600",  bg: "bg-amber-50",  dot: "bg-amber-500",  border: "border-amber-200" },
    indigo: { text: "text-indigo-600", bg: "bg-indigo-50", dot: "bg-indigo-500", border: "border-indigo-200" },
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileMenuOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false)
        setAgenciesOpen(false)
        setSolutionsOpen(false)
        setResourcesOpen(false)
      }
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [])

  const handleNavigate = () => {
    setMobileMenuOpen(false)
    setAgenciesOpen(false)
    setSolutionsOpen(false)
    setResourcesOpen(false)
    setHoveredCat(null)
  }

  return (
    <>
      <header
        data-testid="header"
        aria-label="Main navigation"
        className="fixed top-0 z-[100] w-full transition-all duration-300 ease-out"
        style={{
          background: isAIStudio
            ? (scrolled ? "rgba(10,10,10,0.97)" : "#0a0a0a")
            : (scrolled ? "rgba(255,255,255,0.97)" : "#fff"),
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: isAIStudio
            ? "1px solid rgba(255,255,255,0.06)"
            : (scrolled ? "1px solid #e5e7eb" : "1px solid transparent"),
          boxShadow: isAIStudio ? "none" : (scrolled ? "0 1px 3px rgba(0,0,0,0.04)" : "none"),
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group shrink-0" onClick={handleNavigate} data-testid="link-nav-home-logo" aria-label="TalentOS home">
              <div
                className="flex h-8 w-8 items-center justify-center rounded-lg transition-transform duration-200 group-hover:scale-105"
                style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
              >
                <span className="text-white font-bold text-xs">TM</span>
              </div>
              <span className={`text-[15px] font-bold tracking-tight ${isAIStudio ? "text-white" : "text-gray-900"}`}>
                TalentOS
              </span>
            </Link>

            {/* Desktop Nav — center */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={handleNavigate}
                    data-testid={`link-nav-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className={`relative px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? (isAIStudio ? "text-[#c8ff00]" : "text-indigo-600")
                        : (isAIStudio ? "text-white/70 hover:text-white hover:bg-white/5" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50")
                    }`}
                  >
                    {link.name}
                    {link.badge && (
                      <span className="ml-1 text-[10px] px-1.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700 font-bold leading-none">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                )
              })}

              {/* Solutions dropdown */}
              <div
                className="relative"
                data-testid="dropdown-solutions"
                onMouseEnter={() => { setSolutionsOpen(true); setAgenciesOpen(false); setResourcesOpen(false) }}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                <button
                  data-testid="btn-solutions"
                  aria-label="Solutions menu"
                  className={`flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    isAIStudio
                      ? (solutionsOpen ? "text-white bg-white/10" : "text-white/70 hover:text-white hover:bg-white/5")
                      : (solutionsOpen ? "text-gray-900 bg-gray-50" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50")
                  }`}
                >
                  Solutions
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${solutionsOpen ? "rotate-180" : ""}`} />
                </button>

                {solutionsOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50" style={{ width: 680 }}>
                  <div
                    className="rounded-2xl overflow-hidden"
                    style={{
                      background: "#fff",
                      border: "1px solid #e5e7eb",
                      boxShadow: "0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06)",
                    }}
                  >
                    <div className="grid grid-cols-3 gap-0 divide-x divide-gray-100">
                      {solutionColumns.map((col) => (
                        <div key={col.title} className="p-5">
                          <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                            {col.title}
                          </p>
                          <div className="space-y-0.5">
                            {col.items.map((item) => {
                              const Icon = item.icon
                              const inner = (
                                <>
                                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-indigo-50 transition-colors">
                                    <Icon className="h-4 w-4 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                                  </div>
                                  <div className="min-w-0">
                                    <p className="text-sm font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors leading-tight">
                                      {item.label}
                                    </p>
                                    <p className="text-xs text-gray-500 mt-0.5 leading-tight">
                                      {item.desc}
                                    </p>
                                  </div>
                                </>
                              )
                              return item.href === "/#waitlist" ? (
                                <button
                                  key={item.label}
                                  onClick={() => { openAuth(); handleNavigate() }}
                                  className="group flex items-start gap-3 px-3 py-2.5 rounded-xl transition-colors duration-150 hover:bg-gray-50 w-full text-left"
                                >
                                  {inner}
                                </button>
                              ) : (
                                <Link
                                  key={item.label}
                                  href={item.href}
                                  onClick={handleNavigate}
                                  className="group flex items-start gap-3 px-3 py-2.5 rounded-xl transition-colors duration-150 hover:bg-gray-50"
                                >
                                  {inner}
                                </Link>
                              )
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="px-5 py-3 border-t border-gray-100 flex items-center justify-between bg-gray-50/50">
                      <span className="text-xs text-gray-400">
                        All-in-one platform for the talent industry
                      </span>
                      <button
                        onClick={() => { handleNavigate(); openAuth(); }}
                        data-testid="btn-see-all-features"
                        aria-label="See all features"
                        className="flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
                      >
                        See all features <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  </div>
                )}
              </div>

              {/* Agencies dropdown */}
              <div
                className="relative"
                data-testid="dropdown-agencies"
                onMouseEnter={() => { setAgenciesOpen(true); setSolutionsOpen(false); setResourcesOpen(false) }}
                onMouseLeave={() => { setAgenciesOpen(false); setHoveredCat(null) }}
              >
                <button
                  data-testid="btn-agencies"
                  aria-label="Agencies menu"
                  className={`flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    isAIStudio
                      ? (agenciesOpen ? "text-white bg-white/10" : "text-white/70 hover:text-white hover:bg-white/5")
                      : (agenciesOpen ? "text-gray-900 bg-gray-50" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50")
                  }`}
                >
                  Agencies
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${agenciesOpen ? "rotate-180" : ""}`} />
                </button>

                {agenciesOpen && (
                  <div className="absolute top-full right-0 pt-3 w-[660px] z-50">
                  <div
                    className="rounded-2xl overflow-hidden"
                    style={{
                      background: "#fff",
                      border: "1px solid #e5e7eb",
                      boxShadow: "0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06)",
                    }}
                  >
                    <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                        22 Agency Types · 5 Categories
                      </span>
                      <Link
                        href="/agencies/all"
                        onClick={handleNavigate}
                        data-testid="link-nav-browse-all-agencies"
                        aria-label="Browse all agencies"
                        className="flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
                      >
                        Browse all <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    <div className="flex" style={{ height: 360 }}>
                      {/* Left: category list */}
                      <div className="w-52 shrink-0 py-2 border-r border-gray-100 flex flex-col">
                        {AGENCY_CATEGORIES.map((cat) => {
                          const colors = accentColorMap[cat.accent] ?? accentColorMap.indigo
                          const isHov = (hoveredCat ?? AGENCY_CATEGORIES[0].key) === cat.key
                          return (
                            <button
                              key={cat.key}
                              onMouseEnter={() => setHoveredCat(cat.key)}
                              className={`w-full text-left flex items-center gap-3 px-4 py-2.5 transition-all duration-150 flex-1 ${isHov ? "bg-gray-50" : "hover:bg-gray-50/50"}`}
                            >
                              <span className={`w-2 h-2 rounded-full shrink-0 ${colors.dot} ${isHov ? "opacity-100" : "opacity-30"} transition-opacity`} />
                              <div className="min-w-0">
                                <p className={`text-[13px] font-semibold transition-colors leading-tight ${isHov ? colors.text : "text-gray-700"}`}>
                                  {cat.label}
                                </p>
                                <p className="text-[11px] mt-0.5 leading-tight truncate text-gray-400">
                                  {cat.tagline}
                                </p>
                              </div>
                              {isHov && <ChevronDown className={`ml-auto w-3 h-3 -rotate-90 shrink-0 ${colors.text}`} />}
                            </button>
                          )
                        })}
                      </div>

                      {/* Right: agency types */}
                      <div className="flex-1 relative">
                        {AGENCY_CATEGORIES.map((cat) => {
                          const colors = accentColorMap[cat.accent] ?? accentColorMap.indigo
                          const isActive = (hoveredCat ?? AGENCY_CATEGORIES[0].key) === cat.key
                          return (
                            <div
                              key={cat.key}
                              className="absolute inset-0 p-5 transition-opacity duration-150"
                              style={{ opacity: isActive ? 1 : 0, pointerEvents: isActive ? "auto" : "none" }}
                            >
                              <p className={`text-[11px] font-bold uppercase tracking-widest mb-4 ${colors.text}`}>
                                {cat.label}
                              </p>
                              <div className="grid grid-cols-2 gap-1 content-start">
                                {cat.slugs.map((slug) => {
                                  const ag = AGENCY_TYPES.find(a => a.slug === slug)
                                  if (!ag) return null
                                  return (
                                    <Link
                                      key={slug}
                                      href={getAgencyHref(slug)}
                                      onClick={handleNavigate}
                                      className="group flex items-center gap-2.5 px-3 py-2 rounded-xl transition-colors duration-150 hover:bg-gray-50"
                                    >
                                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${colors.dot} opacity-40 group-hover:opacity-100 transition-opacity`} />
                                      <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors leading-tight">
                                        {ag.name.replace(" Agency", "").replace(" Operations", "").replace(" Bureau", "")}
                                      </span>
                                    </Link>
                                  )
                                })}
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    <div className="px-5 py-3 border-t border-gray-100 flex items-center justify-between bg-gray-50/50">
                      <span className="text-xs text-gray-400">
                        Serving modeling, casting, pageants, events &amp; more
                      </span>
                      <Link
                        href="/agencies/all"
                        onClick={handleNavigate}
                        data-testid="link-nav-all-agencies"
                        aria-label="All agencies"
                        className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
                      >
                        All agencies →
                      </Link>
                    </div>
                  </div>
                  </div>
                )}
              </div>

              {/* Resources dropdown */}
              <div
                className="relative"
                data-testid="dropdown-resources"
                onMouseEnter={() => { setResourcesOpen(true); setSolutionsOpen(false); setAgenciesOpen(false) }}
                onMouseLeave={() => setResourcesOpen(false)}
              >
                <button
                  data-testid="btn-resources"
                  aria-label="Resources menu"
                  className={`flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    isAIStudio
                      ? (resourcesOpen ? "text-white bg-white/10" : "text-white/70 hover:text-white hover:bg-white/5")
                      : (resourcesOpen ? "text-gray-900 bg-gray-50" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50")
                  }`}
                >
                  Resources
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${resourcesOpen ? "rotate-180" : ""}`} />
                </button>

                {resourcesOpen && (
                  <div className="absolute top-full right-0 pt-3 z-50" style={{ width: 580 }}>
                  <div
                    className="rounded-2xl overflow-hidden"
                    style={{
                      background: "#fff",
                      border: "1px solid #e5e7eb",
                      boxShadow: "0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06)",
                    }}
                  >
                    <div className="grid grid-cols-3 gap-0 divide-x divide-gray-100">
                      {resourceColumns.map((col) => (
                        <div key={col.title} className="p-5">
                          <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                            {col.title}
                          </p>
                          <div className="space-y-0.5">
                            {col.items.map((item) => {
                              const Icon = item.icon
                              const inner2 = (
                                <>
                                  <Icon className="h-4 w-4 mt-0.5 shrink-0 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                                  <div className="min-w-0">
                                    <p className="text-sm font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors leading-tight">
                                      {item.label}
                                    </p>
                                    <p className="text-xs text-gray-500 mt-0.5 leading-tight">
                                      {item.desc}
                                    </p>
                                  </div>
                                </>
                              )
                              return item.href === "/#waitlist" ? (
                                <button
                                  key={item.label}
                                  onClick={() => { openAuth(); handleNavigate() }}
                                  className="group flex items-start gap-3 px-3 py-2.5 rounded-xl transition-colors duration-150 hover:bg-gray-50 w-full text-left"
                                >
                                  {inner2}
                                </button>
                              ) : (
                                <Link
                                  key={item.label}
                                  href={item.href}
                                  onClick={handleNavigate}
                                  className="group flex items-start gap-3 px-3 py-2.5 rounded-xl transition-colors duration-150 hover:bg-gray-50"
                                >
                                  {inner2}
                                </Link>
                              )
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Desktop CTAs — right side */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <button onClick={() => { handleNavigate(); openAuth("signin"); }} data-testid="btn-login" aria-label="Log in">
                <span className={`text-sm font-medium transition-colors ${isAIStudio ? "text-white/70 hover:text-white" : "text-gray-600 hover:text-gray-900"}`}>
                  Log in
                </span>
              </button>
              <button
                onClick={() => { handleNavigate(); openAuth("signup"); }}
                data-testid="btn-join-waitlist"
                aria-label="Join waitlist"
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-bold text-white transition-all duration-200 hover:scale-[1.02]"
                style={{
                  background: isAIStudio ? "#c8ff00" : "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  color: isAIStudio ? "#000" : "#fff",
                  boxShadow: isAIStudio ? "none" : "0 2px 8px rgba(99,102,241,0.3)",
                }}
              >
                <Sparkles className="h-3.5 w-3.5" />
                Join Waitlist
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden flex items-center justify-center h-10 w-10 rounded-lg transition-colors duration-200 ${isAIStudio ? "bg-white/10 border border-white/10 text-white hover:bg-white/20" : "bg-gray-50 border border-gray-200 text-gray-700 hover:bg-gray-100"}`}
              data-testid="btn-mobile-menu"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-black/20" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* Mobile menu drawer */}
      <div
        className={`fixed top-0 right-0 z-40 h-full w-full max-w-sm bg-white border-l border-gray-200 shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Drawer header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <span className="text-sm font-bold text-gray-900">Menu</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              data-testid="btn-mobile-menu-close"
              aria-label="Close menu"
              className="flex items-center justify-center h-8 w-8 rounded-lg bg-gray-50 text-gray-500 hover:bg-gray-100 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Drawer links */}
          <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1" data-testid="mobile-nav" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={handleNavigate}
                data-testid={`link-nav-mobile-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-indigo-600 bg-indigo-50"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {link.name}
                {link.badge && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700 font-bold">
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}

            {/* Mobile Solutions */}
            <div className="pt-3 mt-3 border-t border-gray-100">
              <p className="px-4 mb-2 text-[11px] font-bold uppercase tracking-widest text-gray-400">Solutions</p>
              {solutionColumns.flatMap((col) => col.items).slice(0, 5).map((item) => {
                const Icon = item.icon
                return item.href === "/#waitlist" ? (
                  <button
                    key={item.label}
                    onClick={() => { openAuth(); handleNavigate() }}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-gray-600 hover:text-indigo-600 hover:bg-indigo-50/50 transition-colors w-full text-left"
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span className="text-sm">{item.label}</span>
                  </button>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={handleNavigate}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-gray-600 hover:text-indigo-600 hover:bg-indigo-50/50 transition-colors"
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span className="text-sm">{item.label}</span>
                  </Link>
                )
              })}
            </div>

            <div className="pt-3 mt-3 border-t border-gray-100">
              <p className="px-4 mb-2 text-[11px] font-bold uppercase tracking-widest text-gray-400">Agency Types</p>
              {AGENCY_CATEGORIES.map((cat) => {
                const colors = accentColorMap[cat.accent] ?? accentColorMap.indigo
                return (
                  <div key={cat.key} className="px-4 py-2">
                    <p className={`text-xs font-bold mb-1.5 ${colors.text}`}>{cat.label}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.slugs.slice(0, 3).map((slug) => {
                        const ag = AGENCY_TYPES.find(a => a.slug === slug)
                        if (!ag) return null
                        return (
                          <Link
                            key={slug}
                            href={getAgencyHref(slug)}
                            onClick={handleNavigate}
                            className="text-xs px-2 py-1 rounded-lg bg-gray-50 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                          >
                            {ag.name.replace(" Agency", "").replace(" Operations", "")}
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
              <Link
                href="/agencies/all"
                onClick={handleNavigate}
                data-testid="link-nav-mobile-browse-all-agencies"
                aria-label="Browse all 22 agency types"
                className="block px-4 py-2.5 mt-1 text-sm font-semibold text-indigo-600 hover:bg-indigo-50 rounded-xl transition-colors"
              >
                Browse all 22 types →
              </Link>
            </div>
          </nav>

          {/* Drawer CTA */}
          <div className="px-4 py-4 border-t border-gray-100 space-y-2">
            <button onClick={() => { handleNavigate(); openAuth("signin"); }} data-testid="btn-mobile-login" aria-label="Log in" className="w-full py-2.5 rounded-xl text-sm font-medium text-gray-700 border border-gray-200 hover:bg-gray-50 transition-colors">
              Log in
            </button>
            <button
              onClick={() => { handleNavigate(); openAuth("signup"); }}
              data-testid="btn-mobile-get-started"
              aria-label="Get started"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-200"
              style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
            >
              Get Started
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
