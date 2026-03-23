"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Search, ArrowRight } from "lucide-react"
import blogData from "@/data/blog-posts.json"

type BlogPost = (typeof blogData.posts)[number]
type Category = (typeof blogData.categories)[number]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const posts = blogData.posts as BlogPost[]
  const categories = blogData.categories as Category[]
  const featuredPost = posts.find((p) => p.featured)

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

  return (
    <div className="blog-page" style={{ background: "#fff", minHeight: "100vh", color: "#1a1a1a" }}>
      {/* ── Hero ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #f8f7ff 0%, #f0f4ff 50%, #faf8ff 100%)",
          padding: "64px 32px 48px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "12px",
              fontWeight: 700,
              color: "#6366f1",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: "14px",
            }}
          >
            TalentOS Blog
          </p>
          <h1
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              color: "#1a1a1a",
              lineHeight: 1.15,
              margin: "0 0 16px",
              letterSpacing: "-0.03em",
            }}
          >
            Insights for talent, agencies & brands
          </h1>
          <p
            style={{
              fontSize: "17px",
              color: "#555",
              lineHeight: 1.6,
              margin: "0 0 32px",
            }}
          >
            Industry insights, career guides, AI Studio tutorials, and success stories from the TalentOS community.
          </p>

          {/* Search */}
          <div style={{ maxWidth: "480px", margin: "0 auto", position: "relative" }}>
            <Search
              style={{
                position: "absolute",
                left: "14px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "18px",
                height: "18px",
                color: "#999",
              }}
            />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                padding: "13px 18px 13px 42px",
                border: "1px solid #e0e0e0",
                borderRadius: "12px",
                fontSize: "14px",
                color: "#1a1a1a",
                background: "#fff",
                outline: "none",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              }}
            />
          </div>
        </div>
      </section>

      {/* ── Category Filters ── */}
      <div
        style={{
          borderBottom: "1px solid #e5e5e5",
          background: "#fff",
          position: "sticky",
          top: "64px",
          zIndex: 100,
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "12px 32px",
            display: "flex",
            gap: "6px",
            overflowX: "auto",
          }}
        >
          <CategoryPill active={activeCategory === "all"} onClick={() => setActiveCategory("all")} label="All Posts" />
          {categories.map((cat) => (
            <CategoryPill
              key={cat.id}
              active={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id)}
              label={cat.label}
            />
          ))}
        </div>
      </div>

      {/* ── Featured Post ── */}
      {activeCategory === "all" && !searchQuery && featuredPost && (
        <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 32px 0" }}>
          <Link href={`/blog/${featuredPost.slug}`} style={{ textDecoration: "none", display: "block" }}>
            <div
              className="featured-card"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "40px",
                background: "#fafafa",
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid #e5e5e5",
                cursor: "pointer",
                transition: "box-shadow 0.3s, transform 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.08)"
                e.currentTarget.style.transform = "translateY(-2px)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none"
                e.currentTarget.style.transform = "translateY(0)"
              }}
            >
              <div style={{ aspectRatio: "16/10", overflow: "hidden" }}>
                <img
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>
              <div style={{ padding: "40px 40px 40px 0", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                  <span
                    style={{
                      fontSize: "10px",
                      fontWeight: 700,
                      color: "#6366f1",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      background: "#ede9fe",
                      padding: "4px 10px",
                      borderRadius: "5px",
                    }}
                  >
                    Featured
                  </span>
                  <span
                    style={{
                      fontSize: "10px",
                      fontWeight: 700,
                      color: "#6366f1",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {featuredPost.categoryLabel}
                  </span>
                </div>
                <h2
                  style={{
                    fontSize: "26px",
                    fontWeight: 800,
                    color: "#1a1a1a",
                    lineHeight: 1.25,
                    margin: "0 0 14px",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {featuredPost.title}
                </h2>
                <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.6, margin: "0 0 20px" }}>
                  {featuredPost.excerpt}
                </p>
                <AuthorMeta post={featuredPost} />
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* ── Post Grid ── */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 32px 80px" }}>
        {filteredPosts.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 20px" }}>
            <p style={{ fontSize: "18px", color: "#555" }}>No articles found. Try a different search or category.</p>
          </div>
        ) : (
          <div className="blog-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }}>
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </section>

      {/* ── Newsletter CTA ── */}
      <section style={{ background: "linear-gradient(135deg, #1a1a1a, #2d2d3f)", padding: "64px 32px", textAlign: "center" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", fontWeight: 800, color: "#fff", margin: "0 0 12px", letterSpacing: "-0.02em" }}>
            Stay ahead in the talent industry
          </h2>
          <p style={{ fontSize: "15px", color: "#ccc", lineHeight: 1.6, margin: "0 0 28px" }}>
            Get weekly insights on AI tools, career strategies, and industry trends delivered to your inbox.
          </p>
          <Link href="/" style={{ textDecoration: "none" }}>
            <button
              className="blog-cta-btn"
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                padding: "13px 32px",
                fontSize: "15px",
                fontWeight: 600,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              Get Started Free
              <ArrowRight style={{ width: "16px", height: "16px" }} />
            </button>
          </Link>
        </div>
      </section>

      <style>{`
        .blog-page * { font-family: var(--font-jakarta), 'Plus Jakarta Sans', sans-serif; }
        .blog-cta-btn:hover { opacity: 0.9; }
        @media (max-width: 1024px) {
          .blog-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .featured-card { grid-template-columns: 1fr !important; }
          .featured-card > div:last-child { padding: 24px !important; }
        }
        @media (max-width: 640px) {
          .blog-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}

/* ── Sub-components ── */

function CategoryPill({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "7px 18px",
        borderRadius: "999px",
        border: active ? "1.5px solid #6366f1" : "1.5px solid #e5e5e5",
        background: active ? "#6366f1" : "#fff",
        color: active ? "#fff" : "#555",
        fontSize: "13px",
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

function AuthorMeta({ post }: { post: BlogPost }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <div
        style={{
          width: "28px",
          height: "28px",
          borderRadius: "50%",
          background: "#1a1a1a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "10px",
          fontWeight: 800,
          color: "#c8f542",
          flexShrink: 0,
        }}
      >
        {post.author.avatar.charAt(0)}
      </div>
      <span style={{ fontSize: "13px", fontWeight: 600, color: "#1a1a1a" }}>{post.author.name}</span>
      <span style={{ fontSize: "12px", color: "#ccc" }}>·</span>
      <span style={{ fontSize: "12px", color: "#777" }}>{post.readTime}</span>
    </div>
  )
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", display: "block" }}>
      <article
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
          e.currentTarget.style.transform = "translateY(-4px)"
          e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.1)"
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
        <div style={{ padding: "20px", flex: 1, display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "10px",
              fontWeight: 700,
              color: "#6366f1",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "10px",
            }}
          >
            {post.categoryLabel}
          </div>
          <h3
            style={{
              fontSize: "17px",
              fontWeight: 700,
              color: "#1a1a1a",
              lineHeight: 1.35,
              margin: "0 0 10px",
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
              fontSize: "13px",
              color: "#555",
              lineHeight: 1.55,
              margin: "0 0 16px",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical" as const,
              overflow: "hidden",
              flex: 1,
            }}
          >
            {post.excerpt}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "auto" }}>
            <div
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                background: "#1a1a1a",
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
            <span style={{ fontSize: "12px", fontWeight: 600, color: "#1a1a1a" }}>{post.author.name}</span>
            <span style={{ fontSize: "11px", color: "#ccc" }}>·</span>
            <span style={{ fontSize: "11px", color: "#777" }}>{post.readTime}</span>
          </div>
        </div>
      </article>
    </Link>
  )
}
