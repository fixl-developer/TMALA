"use client"

import { useState, useEffect, useCallback, useRef, type CSSProperties } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Search,
  ChevronRight,
  ChevronLeft,
  Menu,
  X,
  Rocket,
  Users,
  Trophy,
  CreditCard,
  Shield,
  Sparkles,
  Code,
  FileText,
  Settings,
  Zap,
  BookOpen,
  type LucideIcon,
} from "lucide-react"
import { sidebarSections, type DocPage, type TocItem } from "@/lib/docs-data"

/* ── Scroll Reveal Hook ── */
function useScrollReveal(rootRef: React.RefObject<HTMLElement | null>) {
  const refs = useRef<Map<string, HTMLDivElement>>(new Map())
  const [visible, setVisible] = useState<Set<string>>(new Set())

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const observer = new IntersectionObserver(
      (entries) => {
        setVisible((prev) => {
          const next = new Set(prev)
          entries.forEach((e) => {
            if (e.isIntersecting) next.add(e.target.getAttribute("data-reveal") || "")
          })
          return next
        })
      },
      { root, rootMargin: "0px 0px -60px 0px", threshold: 0.08 }
    )

    // Small delay to let DOM paint
    const t = setTimeout(() => {
      refs.current.forEach((el) => observer.observe(el))
    }, 50)

    return () => {
      clearTimeout(t)
      observer.disconnect()
    }
  }, [rootRef])

  const register = useCallback((key: string) => (el: HTMLDivElement | null) => {
    if (el) refs.current.set(key, el)
    else refs.current.delete(key)
  }, [])

  return { visible, register }
}

/* reveal style helper */
function revealStyle(isVisible: boolean, delay = 0): CSSProperties {
  return {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.5s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.5s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
  }
}

/* ── Icon Map ── */
const iconMap: Record<string, LucideIcon> = {
  Rocket, Users, Trophy, CreditCard, Shield, Sparkles, Code, FileText, Settings,
}

/* ── Content Renderers ── */
function RenderBold(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g)
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} style={{ color: "#333" }}>{part}</strong>
    ) : (
      <span key={i}>{part}</span>
    )
  )
}

/* ── Block-level reveal wrapper ── */
function BlockReveal({ children, index }: { children: React.ReactNode; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Walk up to find the scrollable main container
    let scrollRoot: HTMLElement | null = el.parentElement
    while (scrollRoot && scrollRoot.style.overscrollBehavior !== "contain") {
      scrollRoot = scrollRoot.parentElement
    }

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setShow(true); observer.disconnect() } },
      { root: scrollRoot, rootMargin: "0px 0px -40px 0px", threshold: 0.05 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(18px)",
        transition: `opacity 0.45s cubic-bezier(0.22,1,0.36,1) ${index * 0.06}s, transform 0.45s cubic-bezier(0.22,1,0.36,1) ${index * 0.06}s`,
      }}
    >
      {children}
    </div>
  )
}

function ContentRenderer({ blocks }: { blocks: DocPage["sections"][0]["blocks"] }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "paragraph":
            return (
              <BlockReveal key={i} index={i}>
                <p className="text-[15px] leading-relaxed mb-4" style={{ color: "#555" }}>
                  {RenderBold(block.text)}
                </p>
              </BlockReveal>
            )

          case "heading3":
            return (
              <BlockReveal key={i} index={i}>
                <h3 className="text-lg font-bold mb-3 mt-6" style={{ color: "#111" }}>
                  {block.text}
                </h3>
              </BlockReveal>
            )

          case "callout": {
            const variants = {
              info: { bg: "#f0f4ff", border: "#dde4f8", icon: Zap, iconColor: "#6366f1" },
              warning: { bg: "#fef9ee", border: "#faecc8", icon: BookOpen, iconColor: "#d97706" },
              success: { bg: "#f0fdf4", border: "#bbf7d0", icon: Shield, iconColor: "#059669" },
            }
            const v = variants[block.variant]
            const CalloutIcon = v.icon
            return (
              <BlockReveal key={i} index={i}>
                <div
                  className="rounded-xl p-5 mb-6"
                  style={{ background: v.bg, border: `1px solid ${v.border}` }}
                >
                  <div className="flex items-start gap-3">
                    <CalloutIcon className="w-5 h-5 mt-0.5 shrink-0" style={{ color: v.iconColor }} />
                    <div>
                      <p className="text-sm font-semibold mb-1" style={{ color: "#333" }}>{block.title}</p>
                      <p className="text-sm leading-relaxed" style={{ color: "#555" }}>{RenderBold(block.text)}</p>
                    </div>
                  </div>
                </div>
              </BlockReveal>
            )
          }

          case "bullets":
            return (
              <BlockReveal key={i} index={i}>
                <div className="space-y-3 mb-6">
                  {block.items.map((item, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: "#6366f1" }} />
                      <div>
                        <span className="text-[15px] font-semibold" style={{ color: "#111" }}>{item.bold}</span>
                        <span className="text-[15px]" style={{ color: "#555" }}>{" — "}{RenderBold(item.text)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </BlockReveal>
            )

          case "code":
            return (
              <BlockReveal key={i} index={i}>
                <div
                  className="rounded-xl overflow-hidden mb-6"
                  style={{ background: "#1a1a2e", border: "1px solid #2a2a4a" }}
                >
                  <div className="flex items-center gap-2 px-4 py-2.5" style={{ borderBottom: "1px solid #2a2a4a" }}>
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#febc2e" }} />
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c840" }} />
                    <span className="ml-2 text-[11px] font-mono" style={{ color: "#666" }}>{block.filename}</span>
                  </div>
                  <pre className="p-5 overflow-x-auto text-[13px] font-mono leading-relaxed" style={{ color: "#e2e8f0" }}>
                    {block.code}
                  </pre>
                </div>
              </BlockReveal>
            )

          case "table":
            return (
              <BlockReveal key={i} index={i}>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
                    <thead>
                      <tr style={{ borderBottom: "2px solid #e8e8ec" }}>
                        {block.headers.map((h, k) => (
                          <th key={k} className="text-left py-3 pr-4 font-semibold" style={{ color: "#111" }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row, k) => (
                        <tr key={k} style={{ borderBottom: "1px solid #f0f0f2" }}>
                          {row.map((cell, l) => (
                            <td key={l} className="py-3 pr-4" style={{ color: l === 0 ? "#333" : "#555", fontWeight: l === 0 ? 500 : 400 }}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </BlockReveal>
            )

          case "cards":
            return (
              <div key={i} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {block.items.map((card, j) => (
                  <BlockReveal key={j} index={j}>
                    <div
                      className="rounded-xl p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                      style={{ background: "#f9f9fb", border: "1px solid #e8e8ec" }}
                    >
                      <h4 className="text-sm font-bold mb-2" style={{ color: "#111" }}>{card.title}</h4>
                      <p className="text-[13px] leading-relaxed" style={{ color: "#555" }}>{card.desc}</p>
                    </div>
                  </BlockReveal>
                ))}
              </div>
            )

          default:
            return null
        }
      })}
    </>
  )
}

/* ──────────────────────────────────────────────
   MAIN DOCS LAYOUT
   ────────────────────────────────────────────── */
export function DocsLayout({ page }: { page: DocPage }) {
  const pathname = usePathname()
  const currentSlug = pathname.split("/").pop() || "introduction"

  const [openSections, setOpenSections] = useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = {}
    for (const section of sidebarSections) {
      if (section.items.some((item) => item.slug === currentSlug)) {
        init[section.title] = true
      }
    }
    return init
  })
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeId, setActiveId] = useState(page.sections[0]?.id || "")
  const [searchQuery, setSearchQuery] = useState("")
  const mainRef = useRef<HTMLDivElement>(null)

  const tocItems: TocItem[] = page.sections.map((s) => ({ id: s.id, label: s.title }))
  const { visible, register } = useScrollReveal(mainRef)

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }))
  }

  /* ── Scroll-spy: observe sections inside main content container ── */
  useEffect(() => {
    const mainEl = mainRef.current
    if (!mainEl) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      {
        root: mainEl,
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0.1,
      }
    )

    tocItems.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [page.slug])

  /* ── ScrollTo: scroll main content container, not window ── */
  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id)
    const mainEl = mainRef.current
    if (el && mainEl) {
      const elTop = el.offsetTop
      mainEl.scrollTo({ top: elTop - 80, behavior: "smooth" })
    }
  }, [])

  // Filter sidebar items by search
  const filteredSections = searchQuery.trim()
    ? sidebarSections
        .map((section) => ({
          ...section,
          items: section.items.filter(
            (item) =>
              item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
              section.title.toLowerCase().includes(searchQuery.toLowerCase())
          ),
        }))
        .filter((section) => section.items.length > 0)
    : sidebarSections

  return (
    <div className="h-screen flex flex-col overflow-hidden" style={{ background: "#fff" }}>
      {/* ── Header spacer (matches fixed header height) ── */}
      <div className="h-16 shrink-0" />

      {/* ── Mobile top bar ── */}
      <div
        className="lg:hidden fixed top-16 left-0 right-0 z-40 flex items-center gap-3 px-4 py-3"
        style={{ background: "#fff", borderBottom: "1px solid #e8e8ec" }}
      >
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg"
          style={{ background: "#f5f5f7" }}
        >
          {sidebarOpen ? (
            <X className="w-4 h-4" style={{ color: "#111" }} />
          ) : (
            <Menu className="w-4 h-4" style={{ color: "#111" }} />
          )}
        </button>
        <div className="flex items-center gap-1.5 text-xs overflow-x-auto" style={{ color: "#888" }}>
          <span>Docs</span>
          {page.breadcrumb.map((crumb, i) => (
            <span key={i} className="flex items-center gap-1.5 shrink-0">
              <ChevronRight className="w-3 h-3" />
              <span style={i === page.breadcrumb.length - 1 ? { color: "#111", fontWeight: 600 } : {}}>
                {crumb}
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Main flex row: takes all remaining height ── */}
      <div className="flex flex-1 min-h-0">
        {/* ════════════════════════════════════════
            LEFT SIDEBAR
            ════════════════════════════════════════ */}
        <aside
          className={`
            fixed lg:relative top-16 lg:top-0 left-0 z-30
            w-72 h-[calc(100vh-64px)] lg:h-full overflow-y-auto shrink-0
            transition-transform duration-300 lg:translate-x-0
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          `}
          style={{ background: "#fff", borderRight: "1px solid #e8e8ec", overscrollBehavior: "contain" }}
        >
          {/* Search */}
          <div className="p-4 pb-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "#bbb" }} />
              <input
                type="text"
                placeholder="Search docs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 rounded-lg text-sm outline-none"
                style={{ background: "#f5f5f7", border: "1px solid #e8e8ec", color: "#111" }}
              />
            </div>
          </div>

          {/* Nav */}
          <nav className="px-3 pb-8">
            {filteredSections.map((section) => {
              const Icon = iconMap[section.iconName] || FileText
              const isOpen = openSections[section.title] ?? false
              const hasActivePage = section.items.some((item) => item.slug === currentSlug)

              return (
                <div key={section.title} className="mb-1">
                  <button
                    onClick={() => toggleSection(section.title)}
                    className="w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-left transition-colors duration-150 hover:bg-[#f5f5f7]"
                  >
                    <ChevronRight
                      className="w-3.5 h-3.5 shrink-0 transition-transform duration-200"
                      style={{
                        color: hasActivePage ? "#6366f1" : "#999",
                        transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                      }}
                    />
                    <span
                      className="text-[13px] font-semibold uppercase tracking-wider"
                      style={{ color: hasActivePage ? "#6366f1" : "#333" }}
                    >
                      {section.title}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="ml-4 pl-3 space-y-0.5" style={{ borderLeft: "1px solid #e8e8ec" }}>
                      {section.items.map((item) => {
                        const isActive = item.slug === currentSlug
                        return (
                          <Link
                            key={item.slug}
                            href={`/guides/${item.slug}`}
                            onClick={() => setSidebarOpen(false)}
                            className="block w-full text-left px-3 py-2 rounded-lg text-[13px] transition-colors duration-150 hover:bg-[#f5f5f7]"
                            style={{
                              background: isActive ? "rgba(99,102,241,0.06)" : "transparent",
                              color: isActive ? "#6366f1" : "#555",
                              fontWeight: isActive ? 600 : 400,
                            }}
                          >
                            {item.label}
                          </Link>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            })}
          </nav>
        </aside>

        {/* Mobile overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-20 bg-black/20 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* ════════════════════════════════════════
            MAIN CONTENT (scrollable)
            ════════════════════════════════════════ */}
        <div
          ref={mainRef}
          className="flex-1 min-w-0 overflow-y-auto scrollbar-none"
          style={{ overscrollBehavior: "contain" }}
        >
          <div className="px-6 sm:px-10 lg:px-16 py-10 lg:py-12 max-w-4xl mt-12 lg:mt-0">
            {/* Breadcrumbs (desktop) */}
            <div className="hidden lg:flex items-center gap-1.5 text-xs mb-8" style={{ color: "#888" }}>
              <Link href="/" className="hover:underline">Docs</Link>
              {page.breadcrumb.map((crumb, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3" />
                  <span style={i === page.breadcrumb.length - 1 ? { color: "#111", fontWeight: 600 } : {}}>
                    {crumb}
                  </span>
                </span>
              ))}
            </div>

            {/* Title */}
            <div
              ref={register("title")}
              data-reveal="title"
              style={revealStyle(visible.has("title"), 0)}
            >
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" style={{ color: "#111" }}>
                {page.title}
              </h1>
            </div>

            <div
              ref={register("intro")}
              data-reveal="intro"
              style={{ ...revealStyle(visible.has("intro"), 0.1), borderBottom: "1px solid #e8e8ec" }}
              className="mb-10 pb-8"
            >
              <p className="text-[16px] leading-relaxed" style={{ color: "#555" }}>
                {page.intro}
              </p>
            </div>

            {/* Sections */}
            {page.sections.map((section, idx) => (
              <div
                key={section.id}
                ref={register(section.id)}
                data-reveal={section.id}
                style={revealStyle(visible.has(section.id), 0.05)}
              >
                <section id={section.id} className="mb-12">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: "#111" }}>
                    {section.title}
                  </h2>
                  <ContentRenderer blocks={section.blocks} />
                </section>
              </div>
            ))}

            {/* Pagination */}
            <div
              ref={register("pagination")}
              data-reveal="pagination"
              className="flex items-center justify-between pt-8 mt-8 pb-16"
              style={{ borderTop: "1px solid #e8e8ec", ...revealStyle(visible.has("pagination"), 0) }}
            >
              {page.prevSlug ? (
                <Link
                  href={`/guides/${page.prevSlug}`}
                  className="group flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
                  style={{ color: "#6366f1" }}
                >
                  <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
                  {page.prevLabel}
                </Link>
              ) : (
                <div />
              )}
              {page.nextSlug ? (
                <Link
                  href={`/guides/${page.nextSlug}`}
                  className="group flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
                  style={{ color: "#6366f1" }}
                >
                  {page.nextLabel}
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════
            RIGHT SIDEBAR — Table of Contents
            ════════════════════════════════════════ */}
        <aside
          className="hidden xl:block w-56 shrink-0 overflow-y-auto py-12 pr-6"
          style={{ overscrollBehavior: "contain" }}
        >
          <p
            className="text-[11px] font-bold uppercase tracking-[0.15em] mb-4 pl-4"
            style={{ color: "#999" }}
          >
            On This Page
          </p>
          <nav className="space-y-1">
            {tocItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left px-4 py-2 text-[13px] transition-all duration-200 rounded-lg"
                style={{
                  color: activeId === item.id ? "#fff" : "#888",
                  fontWeight: activeId === item.id ? 600 : 400,
                  background: activeId === item.id ? "#6366f1" : "transparent",
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </aside>
      </div>
    </div>
  )
}
