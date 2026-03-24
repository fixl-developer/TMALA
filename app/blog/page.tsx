"use client"

import { useState, useMemo, useEffect, useCallback, useRef } from "react"
import Link from "next/link"
import { Search, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import blogData from "@/data/blog-posts.json"

type BlogPost = (typeof blogData.posts)[number]
type Category = (typeof blogData.categories)[number]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentSlide, setCurrentSlide] = useState(1) // start at 1 because of clone
  const [isTransitioning, setIsTransitioning] = useState(true)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const posts = blogData.posts as BlogPost[]
  const categories = blogData.categories as Category[]

  // Pick 5 posts for hero slider
  const heroSlides = posts.slice(0, 5)
  // For infinite loop: [lastClone, ...slides, firstClone]
  const extendedSlides = [heroSlides[heroSlides.length - 1], ...heroSlides, heroSlides[0]]

  const filteredPosts = useMemo(() => {
    let filtered = posts
    if (activeCategory !== "all") {
      filtered = filtered.filter((p) => p.category === activeCategory)
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.tags.some((t: string) => t.toLowerCase().includes(q))
      )
    }
    return filtered
  }, [posts, activeCategory, searchQuery])

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setIsTransitioning(true)
      setCurrentSlide((prev) => prev + 1)
    }, 4000)
  }, [])

  const nextSlide = useCallback(() => {
    setIsTransitioning(true)
    setCurrentSlide((prev) => prev + 1)
    resetTimer()
  }, [resetTimer])

  const prevSlide = useCallback(() => {
    setIsTransitioning(true)
    setCurrentSlide((prev) => prev - 1)
    resetTimer()
  }, [resetTimer])

  // Handle infinite loop jump
  useEffect(() => {
    if (!isTransitioning) return
    const timeout = setTimeout(() => {
      if (currentSlide >= extendedSlides.length - 1) {
        setIsTransitioning(false)
        setCurrentSlide(1)
      } else if (currentSlide <= 0) {
        setIsTransitioning(false)
        setCurrentSlide(heroSlides.length)
      }
    }, 600)
    return () => clearTimeout(timeout)
  }, [currentSlide, isTransitioning, extendedSlides.length, heroSlides.length])

  // Auto-slide
  useEffect(() => {
    resetTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [resetTimer])

  // Real index for dots
  const realIndex = currentSlide <= 0 ? heroSlides.length - 1 : currentSlide >= extendedSlides.length - 1 ? 0 : currentSlide - 1

  return (
    <div className="blog-page" style={{ background: "#fff", minHeight: "100vh", color: "#1a1a1a" }}>
      {/* ── Hero Slider ── */}
      <section
        data-testid="section-hero-slider"
        aria-label="Featured articles slider"
        className="relative w-full overflow-hidden pt-20"
        style={{ background: "#0a0a0a", height: "60vh", minHeight: "420px" }}
      >
        {/* Sliding track */}
        <div
          className="flex h-full"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            transition: isTransitioning ? "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)" : "none",
          }}
        >
          {extendedSlides.map((slide, i) => (
            <div key={i} className="relative w-full h-full shrink-0">
              {/* Background image */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${slide.coverImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: 0.3,
                }}
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0a0a0a 0%, transparent 60%)" }} />

              <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-16 h-full flex items-center pb-14 pt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
                  {/* Left — Text */}
                  <div>
                    <span
                      className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3"
                      style={{
                        background: `${slide.categoryColor}20`,
                        color: slide.categoryColor,
                        border: `1px solid ${slide.categoryColor}30`,
                      }}
                    >
                      {slide.categoryLabel}
                    </span>

                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-[1.2] tracking-tight mb-3 text-white">
                      {slide.title}
                    </h1>

                    <p className="text-[13px] leading-relaxed mb-4 max-w-md line-clamp-2" style={{ color: "#a1a1aa" }}>
                      {slide.excerpt}
                    </p>

                    <div className="flex items-center gap-4 mb-5">
                      <AuthorMeta post={slide} dark />
                    </div>

                    <Link href={`/blog/${slide.slug}`} data-testid={`link-hero-read-${i}`}>
                      <button
                        data-testid={`btn-hero-read-${i}`}
                        aria-label={`Read article: ${slide.title}`}
                        className="inline-flex items-center gap-2 font-bold px-5 py-2.5 text-xs rounded-full text-white hover:scale-[1.02] transition-all duration-200"
                        style={{
                          background: "#6366f1",
                          boxShadow: "0 4px 20px rgba(99,102,241,0.3)",
                        }}
                      >
                        Read Article
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </Link>
                  </div>

                  {/* Right — Image */}
                  <Link href={`/blog/${slide.slug}`} data-testid={`link-hero-image-${i}`} className="hidden lg:block">
                    <div
                      className="rounded-2xl overflow-hidden max-h-[280px]"
                      style={{
                        boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
                      }}
                    >
                      <img
                        src={slide.coverImage}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          data-testid="btn-slider-prev"
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
          style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", backdropFilter: "blur(8px)" }}
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          data-testid="btn-slider-next"
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
          style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", backdropFilter: "blur(8px)" }}
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => { setIsTransitioning(true); setCurrentSlide(i + 1); resetTimer() }}
              data-testid={`btn-slider-dot-${i}`}
              aria-label={`Go to slide ${i + 1}`}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === realIndex ? "28px" : "8px",
                background: i === realIndex ? "#6366f1" : "rgba(255,255,255,0.3)",
              }}
            />
          ))}
        </div>
      </section>

      {/* ── Category Filters + Search ── */}
      <div
        style={{
          borderBottom: "1px solid #e5e5e5",
          background: "#fff",
          position: "sticky",
          top: "64px",
          zIndex: 40,
        }}
      >
        <div
          className="flex items-center justify-between gap-4 flex-wrap"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "10px 32px",
          }}
        >
          <div className="flex gap-1.5 overflow-x-auto">
            <CategoryPill active={activeCategory === "all"} onClick={() => setActiveCategory("all")} label="All Posts" testId="btn-category-all" />
            {categories.map((cat) => (
              <CategoryPill
                key={cat.id}
                active={activeCategory === cat.id}
                onClick={() => setActiveCategory(cat.id)}
                label={cat.label}
                testId={`btn-category-${cat.id}`}
              />
            ))}
          </div>
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
              style={{ color: "#999" }}
            />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              data-testid="input-search-blog"
              aria-label="Search blog posts"
              className="pl-9 pr-4 py-2 text-sm rounded-lg outline-none"
              style={{
                border: "1px solid #e0e0e0",
                width: "200px",
                color: "#1a1a1a",
                background: "#fafafa",
              }}
            />
          </div>
        </div>
      </div>

      {/* ── Post Grid ── */}
      <section data-testid="section-post-grid" style={{ maxWidth: "1200px", margin: "0 auto", padding: "36px 32px 60px" }}>
        {filteredPosts.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 20px" }}>
            <p style={{ fontSize: "16px", color: "#555" }}>No articles found. Try a different search or category.</p>
          </div>
        ) : (
          <div className="blog-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {filteredPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        )}
      </section>

      {/* ── Newsletter CTA ── */}
      <section
        data-testid="section-newsletter-cta"
        aria-label="Newsletter call to action"
        className="relative py-10 lg:py-12 overflow-hidden"
        style={{ background: "#6366f1" }}
      >
        <div className="absolute top-0 left-[15%] w-1 h-10 rounded-b-full" style={{ background: "rgba(255,255,255,0.15)" }} />
        <div className="absolute top-0 left-[50%] w-1 h-6 rounded-b-full" style={{ background: "rgba(255,255,255,0.1)" }} />
        <div className="absolute top-0 right-[20%] w-1 h-12 rounded-b-full" style={{ background: "rgba(255,255,255,0.12)" }} />

        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-white">
            Stay ahead in the talent industry
          </h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.8)" }}>
            Get weekly insights on AI tools, career strategies, and industry trends.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/" data-testid="link-get-started">
              <button
                data-testid="btn-get-started"
                aria-label="Get started free"
                className="inline-flex items-center gap-2 font-bold px-7 py-3 text-sm rounded-full hover:scale-[1.02] transition-all duration-200"
                style={{ background: "#111", color: "#fff" }}
              >
                Get Started Free
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .blog-page * { font-family: var(--font-jakarta), 'Plus Jakarta Sans', sans-serif; }
        @media (max-width: 1024px) {
          .blog-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .blog-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}

/* ── Sub-components ── */

function CategoryPill({ active, onClick, label, testId }: { active: boolean; onClick: () => void; label: string; testId?: string }) {
  return (
    <button
      onClick={onClick}
      data-testid={testId}
      aria-label={`Filter by category: ${label}`}
      style={{
        padding: "6px 14px",
        borderRadius: "999px",
        border: active ? "1.5px solid #6366f1" : "1.5px solid #e5e5e5",
        background: active ? "#6366f1" : "#fff",
        color: active ? "#fff" : "#555",
        fontSize: "12px",
        fontWeight: 600,
        cursor: "pointer",
        whiteSpace: "nowrap",
        transition: "all 0.2s",
      }}
    >
      {label}
    </button>
  )
}

function AuthorMeta({ post, dark }: { post: BlogPost; dark?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <div
        style={{
          width: "26px",
          height: "26px",
          borderRadius: "50%",
          background: dark ? "rgba(255,255,255,0.15)" : "#1a1a1a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "9px",
          fontWeight: 800,
          color: "#c8f542",
          flexShrink: 0,
        }}
      >
        {post.author.avatar.charAt(0)}
      </div>
      <span style={{ fontSize: "12px", fontWeight: 600, color: dark ? "#fff" : "#1a1a1a" }}>
        {post.author.name}
      </span>
      <span style={{ fontSize: "11px", color: dark ? "#666" : "#ccc" }}>·</span>
      <span style={{ fontSize: "11px", color: dark ? "#a1a1aa" : "#777" }}>{post.readTime}</span>
    </div>
  )
}

function BlogCard({ post, index }: { post: BlogPost; index?: number }) {
  return (
    <Link href={`/blog/${post.slug}`} data-testid={`link-blog-post-${index ?? post.id}`} style={{ textDecoration: "none", display: "block" }}>
      <article
        data-testid={`card-blog-${index ?? post.id}`}
        className="blog-card"
        style={{
          background: "#fff",
          borderRadius: "12px",
          border: "1px solid #e5e5e5",
          overflow: "hidden",
          cursor: "pointer",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          transition: "transform 0.25s, box-shadow 0.25s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-3px)"
          e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)"
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)"
          e.currentTarget.style.boxShadow = "none"
        }}
      >
        <div style={{ aspectRatio: "16/9", overflow: "hidden", background: "#f0f0f0" }}>
          <img
            src={post.coverImage}
            alt={post.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.35s" }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>
        <div style={{ padding: "16px", flex: 1, display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "10px",
              fontWeight: 700,
              color: "#6366f1",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "8px",
            }}
          >
            {post.categoryLabel}
          </div>
          <h3
            style={{
              fontSize: "15px",
              fontWeight: 700,
              color: "#1a1a1a",
              lineHeight: 1.35,
              margin: "0 0 8px",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical" as const,
              overflow: "hidden",
            }}
          >
            {post.title}
          </h3>
          <p
            style={{
              fontSize: "12px",
              color: "#555",
              lineHeight: 1.55,
              margin: "0 0 12px",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical" as const,
              overflow: "hidden",
              flex: 1,
            }}
          >
            {post.excerpt}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "auto" }}>
            <div
              style={{
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                background: "#1a1a1a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "8px",
                fontWeight: 800,
                color: "#c8f542",
                flexShrink: 0,
              }}
            >
              {post.author.avatar.charAt(0)}
            </div>
            <span style={{ fontSize: "11px", fontWeight: 600, color: "#1a1a1a" }}>{post.author.name}</span>
            <span style={{ fontSize: "10px", color: "#ccc" }}>·</span>
            <span style={{ fontSize: "10px", color: "#777" }}>{post.readTime}</span>
          </div>
        </div>
      </article>
    </Link>
  )
}
