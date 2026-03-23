"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Twitter, Linkedin, LinkIcon, Check } from "lucide-react"
import blogData from "@/data/blog-posts.json"

type BlogPost = (typeof blogData.posts)[number]

export default function ArticlePage() {
  const params = useParams<{ slug: string }>()
  const slug = params?.slug
  const post = (blogData.posts as BlogPost[]).find((p) => p.slug === slug)

  const [readingProgress, setReadingProgress] = useState(0)
  const [activeToc, setActiveToc] = useState("")
  const [copied, setCopied] = useState(false)
  const articleRef = useRef<HTMLDivElement>(null)

  const allPosts = blogData.posts as BlogPost[]
  const postIndex = useMemo(() => allPosts.findIndex((p) => p.slug === slug), [allPosts, slug])
  const prevPost = postIndex > 0 ? allPosts[postIndex - 1] : undefined
  const nextPost = postIndex >= 0 ? allPosts[postIndex + 1] : undefined

  const relatedPosts = useMemo(() => {
    if (!post) return []
    return allPosts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3)
  }, [allPosts, post])

  const tocItems = useMemo(() => {
    if (!post) return [] as { id: string; label: string }[]
    return post.content.sections.map((s, i) => ({ id: `section-${i}`, label: s.heading }))
  }, [post])

  useEffect(() => { setCopied(false) }, [slug])

  useEffect(() => {
    const onScroll = () => {
      const el = articleRef.current
      if (!el) return
      const top = el.getBoundingClientRect().top + window.scrollY
      const height = Math.max(1, el.offsetHeight - window.innerHeight)
      const scrolled = window.scrollY - top
      setReadingProgress(Math.min(100, Math.max(0, (scrolled / height) * 100)))
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!post) return
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveToc((e.target as HTMLElement).id) }),
      { rootMargin: "-80px 0px -65% 0px" }
    )
    document.querySelectorAll(".article-section-heading").forEach((h) => observer.observe(h))
    return () => observer.disconnect()
  }, [post])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          el.style.opacity = "1"
          el.style.transform = "translateY(0)"
          observer.unobserve(el)
        })
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    )
    document.querySelectorAll("[data-animate]").forEach((el) => {
      const htmlEl = el as HTMLElement
      htmlEl.style.opacity = "0"
      htmlEl.style.transform = "translateY(18px)"
      htmlEl.style.transition = "opacity 0.55s ease, transform 0.55s ease"
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [post])

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch { setCopied(false) }
  }

  if (!post)
    return (
      <div style={{ background: "#fff", minHeight: "100vh", textAlign: "center", padding: "120px 40px", color: "#1a1a1a" }}>
        <h1 style={{ fontSize: "28px", fontWeight: 800 }}>Article not found</h1>
        <Link href="/blog" style={{ textDecoration: "none" }}>
          <button
            style={{
              marginTop: "20px",
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "11px 24px",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Back to Blog
          </button>
        </Link>
      </div>
    )

  return (
    <div className="blog-article-page" style={{ background: "#fff", minHeight: "100vh", color: "#1a1a1a" }}>
      {/* Progress bar */}
      <div
        style={{
          position: "fixed", top: 0, left: 0, zIndex: 9999, height: "3px",
          width: `${readingProgress}%`,
          background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
          borderRadius: "0 2px 2px 0", transition: "width 0.08s linear",
          pointerEvents: "none", boxShadow: "0 1px 6px rgba(99,102,241,0.35)",
        }}
      />

      {/* Main */}
      <div className="article-layout" style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 32px 80px", display: "grid", gridTemplateColumns: "1fr 260px", gap: "64px", alignItems: "start" }}>
        <article>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "28px" }}>
            <Link href="/blog" style={{ fontSize: "13px", color: "#6366f1", textDecoration: "none" }}>Blog</Link>
            <span style={{ color: "#ddd", fontSize: "13px" }}>/</span>
            <span style={{ fontSize: "13px", color: "#6366f1" }}>{post.categoryLabel}</span>
            <span style={{ color: "#ddd", fontSize: "13px" }}>/</span>
            <span style={{ fontSize: "13px", color: "#999", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "200px" }}>{post.title}</span>
          </div>

          {/* Category */}
          <div data-animate style={{ display: "inline-block", background: "#ede9fe", color: "#6366f1", fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", borderRadius: "5px", padding: "4px 10px", marginBottom: "18px" }}>
            {post.categoryLabel}
          </div>

          {/* Title */}
          <h1 data-animate style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 800, color: "#1a1a1a", letterSpacing: "-0.03em", lineHeight: 1.18, margin: "0 0 18px" }}>
            {post.title}
          </h1>

          {/* Excerpt */}
          <p data-animate style={{ fontSize: "19px", color: "#3d3d3d", lineHeight: 1.7, fontStyle: "italic", margin: "0 0 24px", borderLeft: "3px solid #6366f1", paddingLeft: "18px" }}>
            {post.excerpt}
          </p>

          {/* Author bar */}
          <div data-animate style={{ display: "flex", alignItems: "center", gap: "16px", paddingBottom: "24px", borderBottom: "1px solid #e5e5e5", marginBottom: "36px", flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "#1a1a1a", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 800, color: "#c8f542" }}>
                {post.author.avatar.charAt(0)}
              </div>
              <div>
                <div style={{ fontSize: "13px", fontWeight: 700, color: "#1a1a1a" }}>{post.author.name}</div>
                <div style={{ fontSize: "12px", color: "#777" }}>{post.author.role}</div>
              </div>
            </div>
            <div style={{ width: "1px", height: "28px", background: "#e5e5e5" }} />
            <span style={{ fontSize: "12px", color: "#555" }}>{post.publishedAtFormatted}</span>
            <span style={{ background: "#f0f0f0", borderRadius: "999px", padding: "3px 10px", fontSize: "11px", color: "#555" }}>{post.readTime}</span>
            <div style={{ marginLeft: "auto", display: "flex", gap: "8px" }}>
              <ShareBtn icon={<Twitter style={{ width: 14, height: 14 }} />} onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`)} />
              <ShareBtn icon={<Linkedin style={{ width: 14, height: 14 }} />} onClick={() => window.open(`https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`)} />
              <ShareBtn icon={copied ? <Check style={{ width: 14, height: 14 }} /> : <LinkIcon style={{ width: 14, height: 14 }} />} onClick={handleCopyLink} />
            </div>
          </div>

          {/* Cover */}
          <div data-animate style={{ borderRadius: "14px", overflow: "hidden", marginBottom: "44px", border: "1px solid #e5e5e5" }}>
            <img src={post.coverImage} alt={post.title} style={{ width: "100%", display: "block", aspectRatio: "16/9", objectFit: "cover" }} />
          </div>

          {/* Body */}
          <div id="article-content" ref={articleRef}>
            <p data-animate style={{ fontSize: "18px", color: "#2d2d2d", lineHeight: 1.78, margin: "0 0 36px" }}>{post.content.intro}</p>

            {post.content.sections.map((section, i) => (
              <div key={i} style={{ marginBottom: "40px" }} data-animate>
                <h2
                  id={`section-${i}`}
                  className="article-section-heading"
                  style={{
                    fontSize: "22px", fontWeight: 700, color: "#1a1a1a",
                    letterSpacing: "-0.02em", lineHeight: 1.25,
                    margin: "0 0 14px", paddingTop: "40px",
                    borderTop: i > 0 ? "1px solid #f0f0f0" : "none",
                    scrollMarginTop: "96px",
                  }}
                >
                  {section.heading}
                </h2>
                <p style={{ fontSize: "16px", color: "#3d3d3d", lineHeight: 1.78, margin: 0 }}>{section.body}</p>
              </div>
            ))}

            {/* Key takeaway */}
            <div data-animate style={{ background: "#f5f3ff", border: "1px solid #ddd6fe", borderLeft: "4px solid #6366f1", borderRadius: "0 12px 12px 0", padding: "20px 24px", margin: "48px 0 40px" }}>
              <span style={{ fontSize: "10px", fontWeight: 800, color: "#6366f1", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: "8px" }}>Key takeaway</span>
              <p style={{ fontSize: "16px", color: "#3730a3", lineHeight: 1.65, fontWeight: 500, margin: 0 }}>{post.content.conclusion}</p>
            </div>
          </div>

          {/* Tags */}
          <div data-animate style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "40px", alignItems: "center" }}>
            <span style={{ fontSize: "12px", fontWeight: 700, color: "#999" }}>Topics:</span>
            {post.tags.map((tag: string) => (
              <span key={tag} style={{ border: "1px solid #e5e5e5", borderRadius: "6px", padding: "4px 12px", fontSize: "12px", color: "#555" }}>{tag}</span>
            ))}
          </div>

          {/* Author card */}
          <div data-animate style={{ display: "flex", gap: "18px", alignItems: "flex-start", background: "#fafafa", borderRadius: "14px", padding: "24px", marginBottom: "48px" }}>
            <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "#1a1a1a", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", fontWeight: 800, color: "#c8f542" }}>
              {post.author.avatar.charAt(0)}
            </div>
            <div>
              <div style={{ fontSize: "10px", fontWeight: 700, color: "#999", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "4px" }}>Written by</div>
              <div style={{ fontSize: "18px", fontWeight: 700, color: "#1a1a1a" }}>{post.author.name}</div>
              <div style={{ fontSize: "13px", color: "#555", marginBottom: "8px" }}>{post.author.role}</div>
              <p style={{ fontSize: "14px", color: "#777", lineHeight: 1.6, margin: 0 }}>Content specialist at TalentOS. Covering India&apos;s talent and modelling industry since 2021.</p>
            </div>
          </div>

          {/* Prev / Next */}
          <div data-animate style={{ display: "flex", gap: "16px", borderTop: "1px solid #e5e5e5", paddingTop: "32px" }}>
            {prevPost && (
              <Link href={`/blog/${prevPost.slug}`} style={{ textDecoration: "none", flex: 1 }}>
                <div className="nav-card" style={{ background: "#fafafa", borderRadius: "12px", padding: "18px 20px", cursor: "pointer", transition: "background 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#f0f0f0")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#fafafa")}
                >
                  <div style={{ fontSize: "10px", fontWeight: 700, color: "#999", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "6px" }}>&larr; Previous</div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#1a1a1a", lineHeight: 1.3 }}>{prevPost.title}</div>
                </div>
              </Link>
            )}
            {nextPost && (
              <Link href={`/blog/${nextPost.slug}`} style={{ textDecoration: "none", flex: 1 }}>
                <div className="nav-card" style={{ background: "#fafafa", borderRadius: "12px", padding: "18px 20px", textAlign: "right", cursor: "pointer", transition: "background 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#f0f0f0")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#fafafa")}
                >
                  <div style={{ fontSize: "10px", fontWeight: 700, color: "#999", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "6px" }}>Next &rarr;</div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#1a1a1a", lineHeight: 1.3 }}>{nextPost.title}</div>
                </div>
              </Link>
            )}
          </div>
        </article>

        {/* Sidebar */}
        <aside className="article-sidebar" style={{ position: "sticky", top: "80px", display: "flex", flexDirection: "column", gap: "20px" }}>
          {tocItems.length > 0 && (
            <div style={{ background: "#fafafa", borderRadius: "12px", border: "1px solid #e5e5e5", padding: "18px" }}>
              <div style={{ fontSize: "10px", fontWeight: 800, color: "#999", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "12px" }}>On this page</div>
              <nav>
                {tocItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth", block: "start" })}
                    style={{
                      display: "block", width: "100%", textAlign: "left",
                      background: "none", border: "none",
                      borderLeft: activeToc === item.id ? "2px solid #6366f1" : "2px solid transparent",
                      paddingLeft: "10px", paddingTop: "5px", paddingBottom: "5px",
                      marginLeft: "-10px", fontSize: "12px", lineHeight: 1.45,
                      color: activeToc === item.id ? "#6366f1" : "#777",
                      fontWeight: activeToc === item.id ? 600 : 400,
                      cursor: "pointer", transition: "color 0.18s, border-color 0.18s",
                    }}
                    onMouseEnter={(e) => { if (activeToc !== item.id) e.currentTarget.style.color = "#1a1a1a" }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = activeToc === item.id ? "#6366f1" : "#777" }}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          )}

          {/* Share */}
          <div style={{ background: "#fafafa", borderRadius: "12px", border: "1px solid #e5e5e5", padding: "18px" }}>
            <div style={{ fontSize: "10px", fontWeight: 800, color: "#999", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "12px" }}>Share</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { icon: <Twitter style={{ width: 14, height: 14 }} />, label: "Share on X", action: () => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`) },
                { icon: <Linkedin style={{ width: 14, height: 14 }} />, label: "Share on LinkedIn", action: () => window.open(`https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`) },
                { icon: copied ? <Check style={{ width: 14, height: 14 }} /> : <LinkIcon style={{ width: 14, height: 14 }} />, label: copied ? "Copied!" : "Copy link", action: handleCopyLink },
              ].map((btn) => (
                <button
                  key={btn.label}
                  onClick={btn.action}
                  style={{
                    display: "flex", alignItems: "center", gap: "10px",
                    padding: "9px 12px", borderRadius: "8px",
                    border: "1px solid #e5e5e5", background: "#fff",
                    cursor: "pointer", fontSize: "13px", fontWeight: 500,
                    color: "#3d3d3d", transition: "all 0.18s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#6366f1"; e.currentTarget.style.color = "#6366f1"; e.currentTarget.style.background = "#fafafa" }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#e5e5e5"; e.currentTarget.style.color = "#3d3d3d"; e.currentTarget.style.background = "#fff" }}
                >
                  {btn.icon}
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          {/* Author */}
          <div style={{ background: "#fafafa", borderRadius: "12px", border: "1px solid #e5e5e5", padding: "18px", textAlign: "center" }}>
            <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#1a1a1a", margin: "0 auto 10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: 800, color: "#c8f542" }}>
              {post.author.avatar.charAt(0)}
            </div>
            <div style={{ fontSize: "14px", fontWeight: 700, color: "#1a1a1a" }}>{post.author.name}</div>
            <div style={{ fontSize: "12px", color: "#777", marginTop: "3px" }}>{post.author.role}</div>
          </div>
        </aside>
      </div>

      {/* Related */}
      {relatedPosts.length > 0 && (
        <section style={{ background: "#fafafa", borderTop: "1px solid #e5e5e5", padding: "56px 0" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "28px", gap: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#1a1a1a", margin: 0 }}>More from {post.categoryLabel}</h2>
              <Link href="/blog" style={{ textDecoration: "none" }}>
                <span style={{ fontSize: "13px", color: "#6366f1", fontWeight: 600 }}>View all &rarr;</span>
              </Link>
            </div>
            <div className="related-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }}>
              {relatedPosts.map((p) => (
                <Link key={p.id} href={`/blog/${p.slug}`} style={{ textDecoration: "none", display: "block" }}>
                  <article style={{ background: "#fff", borderRadius: "8px", overflow: "hidden", cursor: "pointer", height: "100%", display: "flex", flexDirection: "column" }}>
                    <div style={{ aspectRatio: "16/9", overflow: "hidden", background: "#f5f5f5" }}>
                      <img src={p.coverImage} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <div style={{ padding: "16px 0", display: "flex", flexDirection: "column", flex: 1 }}>
                      <div style={{ fontSize: "12px", fontWeight: 600, color: "#6366f1", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "8px" }}>{p.categoryLabel}</div>
                      <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#1a1a1a", lineHeight: 1.35, margin: "0 0 12px", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" as const, overflow: "hidden" }}>{p.title}</h3>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "auto" }}>
                        <span style={{ fontSize: "13px", fontWeight: 600, color: "#1a1a1a" }}>{p.author.name}</span>
                        <span style={{ fontSize: "13px", color: "#ccc" }}>·</span>
                        <span style={{ fontSize: "13px", color: "#777" }}>{p.readTime}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <style>{`
        .blog-article-page * { font-family: var(--font-jakarta), 'Plus Jakarta Sans', sans-serif; }
        @media (max-width: 1024px) {
          .article-layout { grid-template-columns: 1fr !important; }
          .article-sidebar { display: none !important; }
          .related-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .article-layout { padding-left: 20px !important; padding-right: 20px !important; padding-top: 36px !important; }
          .related-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}

function ShareBtn({ icon, onClick }: { icon: React.ReactNode; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "32px", height: "32px", borderRadius: "8px",
        border: "1px solid #e5e5e5", background: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "#777", cursor: "pointer", transition: "all 0.18s",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.background = "#f5f3ff"; e.currentTarget.style.color = "#6366f1"; e.currentTarget.style.borderColor = "#6366f1" }}
      onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#777"; e.currentTarget.style.borderColor = "#e5e5e5" }}
    >
      {icon}
    </button>
  )
}
