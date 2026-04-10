"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import blogData from "@/data/data/blog-posts.json";

type BlogPost = (typeof blogData.posts)[number];

export default function ArticlePage() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug;
  const post = (blogData.posts as BlogPost[]).find((p) => p.slug === slug);

  const [readingProgress, setReadingProgress] = useState(0);
  const [activeToc, setActiveToc] = useState("");
  const [copied, setCopied] = useState(false);
  const articleRef = useRef<HTMLDivElement>(null);

  const allPosts = blogData.posts as BlogPost[];
  const postIndex = useMemo(() => allPosts.findIndex((p) => p.slug === slug), [allPosts, slug]);
  const prevPost = postIndex > 0 ? allPosts[postIndex - 1] : undefined;
  const nextPost = postIndex >= 0 ? allPosts[postIndex + 1] : undefined;

  const relatedPosts = useMemo(() => {
    if (!post) return [];
    return allPosts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3);
  }, [allPosts, post]);

  const tocItems = useMemo(() => {
    if (!post) return [] as { id: string; label: string }[];
    return post.content.sections.map((s, i) => ({ id: `section-${i}`, label: s.heading }));
  }, [post]);

  useEffect(() => {
    setCopied(false);
  }, [slug]);

  useEffect(() => {
    const onScroll = () => {
      const el = articleRef.current;
      if (!el) return;

      const top = el.getBoundingClientRect().top + window.scrollY;
      const height = Math.max(1, el.offsetHeight - window.innerHeight);
      const scrolled = window.scrollY - top;
      const pct = Math.min(100, Math.max(0, (scrolled / height) * 100));
      setReadingProgress(pct);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!post) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveToc((e.target as HTMLElement).id);
        });
      },
      { rootMargin: "-80px 0px -65% 0px" }
    );

    document.querySelectorAll(".article-section-heading").forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [post]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.unobserve(el);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = "0";
      htmlEl.style.transform = "translateY(18px)";
      htmlEl.style.transition = "opacity 0.55s ease, transform 0.55s ease";
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [post]);

  if (!post)
    return (
      <div className="blog-root" style={{ textAlign: "center", padding: "120px 40px" }}>
        <h1 style={{ fontSize: "28px", color: "var(--blog-text)" }}>Article not found</h1>
        <Link href="/blog" style={{ textDecoration: "none" }}>
          <button
            style={{
              marginTop: "20px",
              background: "var(--blog-blue)",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "11px 24px",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Back to Blog
          </button>
        </Link>
      </div>
    );

  return (
    <div className="blog-root" style={{ minHeight: "100vh" }}>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 9999,
          height: "3px",
          width: `${readingProgress}%`,
          background: "linear-gradient(90deg, var(--blog-blue), #00b8d4)",
          borderRadius: "0 2px 2px 0",
          transition: "width 0.08s linear",
          pointerEvents: "none",
          boxShadow: "0 1px 6px rgba(0,115,234,0.35)",
        }}
      />

      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 200,
          background: "rgba(255,255,255,0.97)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          borderBottom: "1px solid var(--blog-border)",
          height: "60px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            padding: "0 32px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link href="/blog" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8L10 13" stroke="var(--blog-muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span style={{ fontSize: "13px", color: "var(--blog-muted)", fontWeight: 500, fontFamily: "'Inter', sans-serif" }}>
              All articles
            </span>
          </Link>

          <Link href="/" style={{ textDecoration: "none" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: "26px",
                  height: "26px",
                  borderRadius: "6px",
                  background: "var(--blog-text)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                  fontWeight: 900,
                  color: "#E8FF47",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                T
              </div>
              <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--blog-text)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                TalentOS
              </span>
            </div>
          </Link>

          <Link href="/" style={{ textDecoration: "none" }}>
            <button
              style={{
                background: "var(--blog-blue)",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                padding: "8px 18px",
                fontSize: "13px",
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "'Inter', sans-serif",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#0060c7")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--blog-blue)")}
            >
              Get started
            </button>
          </Link>
        </div>
      </header>

      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "48px 32px 80px",
          display: "grid",
          gridTemplateColumns: "1fr 260px",
          gap: "64px",
          alignItems: "start",
        }}
      >
        <article>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "28px" }}>
            <Link href="/blog" style={{ fontSize: "13px", color: "var(--blog-blue)", textDecoration: "none", fontFamily: "'Inter', sans-serif" }}>
              Blog
            </Link>
            <span style={{ color: "#c8c8c8", fontSize: "13px" }}>/</span>
            <Link
              href={`/blog?category=${post.category}`}
              style={{ fontSize: "13px", color: "var(--blog-blue)", textDecoration: "none", fontFamily: "'Inter', sans-serif" }}
            >
              {post.categoryLabel}
            </Link>
            <span style={{ color: "#c8c8c8", fontSize: "13px" }}>/</span>
            <span
              style={{
                fontSize: "13px",
                color: "var(--blog-light)",
                fontFamily: "'Inter', sans-serif",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                maxWidth: "200px",
              }}
            >
              {post.title}
            </span>
          </div>

          <div
            data-animate
            style={{
              display: "inline-block",
              background: "var(--blog-blue-light)",
              color: "#0060c7",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              borderRadius: "5px",
              padding: "4px 10px",
              marginBottom: "18px",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {post.categoryLabel}
          </div>

          <h1
            data-animate
            style={{
              fontSize: "clamp(26px, 3.5vw, 40px)",
              fontWeight: 900,
              color: "var(--blog-text)",
              letterSpacing: "-0.03em",
              lineHeight: 1.18,
              margin: "0 0 18px",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            {post.title}
          </h1>

          <p
            data-animate
            style={{
              fontSize: "19px",
              color: "#3d3d3d",
              lineHeight: 1.7,
              fontStyle: "italic",
              margin: "0 0 24px",
              borderLeft: "3px solid var(--blog-blue)",
              paddingLeft: "18px",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {post.excerpt}
          </p>

          <div
            data-animate
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              paddingBottom: "24px",
              borderBottom: "1px solid var(--blog-border)",
              marginBottom: "36px",
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  background: "var(--blog-text)",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "13px",
                  fontWeight: 900,
                  color: "#E8FF47",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                {post.author.avatar.charAt(0)}
              </div>
              <div>
                <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--blog-text)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{post.author.name}</div>
                <div style={{ fontSize: "12px", color: "var(--blog-light)", fontFamily: "'Inter', sans-serif" }}>{post.author.role}</div>
              </div>
            </div>

            <div style={{ width: "1px", height: "28px", background: "var(--blog-border)" }} />
            <span style={{ fontSize: "12px", color: "#696969", fontFamily: "'Inter', sans-serif" }}>{post.publishedAtFormatted}</span>
            <span style={{ background: "var(--blog-tag-bg)", borderRadius: "999px", padding: "3px 10px", fontSize: "11px", color: "#696969", fontFamily: "'Inter', sans-serif" }}>
              {post.readTime}
            </span>

            <div style={{ marginLeft: "auto", display: "flex", gap: "8px" }}>
              {[
                {
                  label: "X",
                  action: () =>
                    window.open(
                      `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`
                    ),
                },
                {
                  label: "in",
                  action: () =>
                    window.open(
                      `https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`
                    ),
                },
                {
                  label: copied ? "✓" : "🔗",
                  action: async () => {
                    try {
                      await navigator.clipboard.writeText(window.location.href);
                      setCopied(true);
                      window.setTimeout(() => setCopied(false), 2000);
                    } catch {
                      setCopied(false);
                    }
                  },
                },
              ].map((btn) => (
                <button
                  key={btn.label}
                  onClick={btn.action}
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    border: "1px solid var(--blog-border)",
                    background: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "var(--blog-muted)",
                    cursor: "pointer",
                    transition: "all 0.18s",
                    fontFamily: "'Inter', sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--blog-blue-light)";
                    e.currentTarget.style.color = "var(--blog-blue)";
                    e.currentTarget.style.borderColor = "var(--blog-blue)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#fff";
                    e.currentTarget.style.color = "var(--blog-muted)";
                    e.currentTarget.style.borderColor = "var(--blog-border)";
                  }}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          <div
            data-animate
            style={{
              borderRadius: "14px",
              overflow: "hidden",
              marginBottom: "44px",
              border: "1px solid var(--blog-border)",
            }}
          >
            <img src={post.coverImage} alt={post.title} style={{ width: "100%", display: "block", aspectRatio: "16/9", objectFit: "cover" }} />
          </div>

          <div id="article-content" ref={articleRef}>
            <p
              data-animate
              style={{
                fontSize: "18px",
                color: "#2d2d2d",
                lineHeight: 1.78,
                margin: "0 0 36px",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {post.content.intro}
            </p>

            {post.content.sections.map((section, i) => (
              <div key={i} style={{ marginBottom: "40px" }} data-animate>
                <h2
                  id={`section-${i}`}
                  className="article-section-heading"
                  style={{
                    fontSize: "22px",
                    fontWeight: 800,
                    color: "var(--blog-text)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.25,
                    margin: "0 0 14px",
                    paddingTop: "40px",
                    borderTop: i > 0 ? "1px solid #f0f0f0" : "none",
                    scrollMarginTop: "96px",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  {section.heading}
                </h2>
                <p style={{ fontSize: "16px", color: "#3d3d3d", lineHeight: 1.78, margin: 0, fontFamily: "'Inter', sans-serif" }}>
                  {section.body}
                </p>
              </div>
            ))}

            <div
              data-animate
              style={{
                background: "#f0f7ff",
                border: "1px solid #bfdbfe",
                borderLeft: "4px solid var(--blog-blue)",
                borderRadius: "0 12px 12px 0",
                padding: "20px 24px",
                margin: "48px 0 40px",
              }}
            >
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: 800,
                  color: "#1d4ed8",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  display: "block",
                  marginBottom: "8px",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Key takeaway
              </span>
              <p style={{ fontSize: "16px", color: "#1e3a8a", lineHeight: 1.65, fontWeight: 500, margin: 0, fontFamily: "'Inter', sans-serif" }}>
                {post.content.conclusion}
              </p>
            </div>
          </div>

          <div data-animate style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "40px", alignItems: "center" }}>
            <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--blog-light)", fontFamily: "'Inter', sans-serif" }}>Topics:</span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  border: "1px solid var(--blog-border)",
                  borderRadius: "6px",
                  padding: "4px 12px",
                  fontSize: "12px",
                  color: "var(--blog-tag-text)",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div
            data-animate
            style={{
              display: "flex",
              gap: "18px",
              alignItems: "flex-start",
              background: "var(--blog-bg-gray)",
              borderRadius: "14px",
              padding: "24px",
              marginBottom: "48px",
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                background: "var(--blog-text)",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                fontWeight: 900,
                color: "#E8FF47",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              {post.author.avatar.charAt(0)}
            </div>
            <div>
              <div style={{ fontSize: "10px", fontWeight: 700, color: "var(--blog-light)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "4px", fontFamily: "'Inter', sans-serif" }}>
                Written by
              </div>
              <div style={{ fontSize: "18px", fontWeight: 800, color: "var(--blog-text)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{post.author.name}</div>
              <div style={{ fontSize: "13px", color: "#696969", marginBottom: "8px", fontFamily: "'Inter', sans-serif" }}>{post.author.role}</div>
              <p style={{ fontSize: "14px", color: "var(--blog-muted)", lineHeight: 1.6, margin: 0, fontFamily: "'Inter', sans-serif" }}>
                Content specialist at TalentOS. Covering India's talent and modelling industry since 2021.
              </p>
            </div>
          </div>

          <div data-animate style={{ display: "flex", gap: "16px", borderTop: "1px solid var(--blog-border)", paddingTop: "32px" }}>
            {prevPost && (
              <Link href={`/blog/${prevPost.slug}`} style={{ textDecoration: "none", flex: 1 }}>
                <div
                  style={{
                    background: "var(--blog-bg-gray)",
                    borderRadius: "12px",
                    padding: "18px 20px",
                    cursor: "pointer",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--blog-tag-bg)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "var(--blog-bg-gray)")}
                >
                  <div style={{ fontSize: "10px", fontWeight: 700, color: "var(--blog-light)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "6px", fontFamily: "'Inter', sans-serif" }}>
                    ← Previous
                  </div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--blog-text)", lineHeight: 1.3, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {prevPost.title}
                  </div>
                </div>
              </Link>
            )}

            {nextPost && (
              <Link href={`/blog/${nextPost.slug}`} style={{ textDecoration: "none", flex: 1 }}>
                <div
                  style={{
                    background: "var(--blog-bg-gray)",
                    borderRadius: "12px",
                    padding: "18px 20px",
                    textAlign: "right",
                    cursor: "pointer",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--blog-tag-bg)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "var(--blog-bg-gray)")}
                >
                  <div style={{ fontSize: "10px", fontWeight: 700, color: "var(--blog-light)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "6px", fontFamily: "'Inter', sans-serif" }}>
                    Next →
                  </div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--blog-text)", lineHeight: 1.3, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {nextPost.title}
                  </div>
                </div>
              </Link>
            )}
          </div>
        </article>

        <aside style={{ position: "sticky", top: "80px", display: "flex", flexDirection: "column", gap: "20px" }}>
          {tocItems.length > 0 && (
            <div style={{ background: "#f9fafb", borderRadius: "12px", border: "1px solid var(--blog-border)", padding: "18px" }}>
              <div style={{ fontSize: "10px", fontWeight: 800, color: "var(--blog-light)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "12px", fontFamily: "'Inter', sans-serif" }}>
                On this page
              </div>
              <nav>
                {tocItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth", block: "start" })}
                    style={{
                      display: "block",
                      width: "100%",
                      textAlign: "left",
                      background: "none",
                      border: "none",
                      borderLeft: activeToc === item.id ? "2px solid var(--blog-blue)" : "2px solid transparent",
                      paddingLeft: "10px",
                      paddingTop: "5px",
                      paddingBottom: "5px",
                      marginLeft: "-10px",
                      fontSize: "12px",
                      lineHeight: 1.45,
                      color: activeToc === item.id ? "var(--blog-blue)" : "var(--blog-muted)",
                      fontWeight: activeToc === item.id ? 600 : 400,
                      cursor: "pointer",
                      transition: "color 0.18s, border-color 0.18s, font-weight 0.18s",
                      fontFamily: "'Inter', sans-serif",
                    }}
                    onMouseEnter={(e) => {
                      if (activeToc !== item.id) e.currentTarget.style.color = "var(--blog-text)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = activeToc === item.id ? "var(--blog-blue)" : "var(--blog-muted)";
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          )}

          <div style={{ background: "#f9fafb", borderRadius: "12px", border: "1px solid var(--blog-border)", padding: "18px" }}>
            <div style={{ fontSize: "10px", fontWeight: 800, color: "var(--blog-light)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "12px", fontFamily: "'Inter', sans-serif" }}>
              Share
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                {
                  icon: "𝕏",
                  label: "Share on X",
                  color: "#000",
                  action: () =>
                    window.open(
                      `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`
                    ),
                },
                {
                  icon: "in",
                  label: "Share on LinkedIn",
                  color: "#0077b5",
                  action: () =>
                    window.open(
                      `https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`
                    ),
                },
                {
                  icon: "🔗",
                  label: copied ? "Copied!" : "Copy link",
                  color: "var(--blog-blue)",
                  action: async () => {
                    try {
                      await navigator.clipboard.writeText(window.location.href);
                      setCopied(true);
                      window.setTimeout(() => setCopied(false), 2000);
                    } catch {
                      setCopied(false);
                    }
                  },
                },
              ].map((btn) => (
                <button
                  key={btn.label}
                  onClick={btn.action}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "9px 12px",
                    borderRadius: "8px",
                    border: "1px solid var(--blog-border)",
                    background: "#fff",
                    cursor: "pointer",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "#3d3d3d",
                    fontFamily: "'Inter', sans-serif",
                    transition: "all 0.18s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = btn.color;
                    e.currentTarget.style.color = btn.color;
                    e.currentTarget.style.background = "#f9fafb";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--blog-border)";
                    e.currentTarget.style.color = "#3d3d3d";
                    e.currentTarget.style.background = "#fff";
                  }}
                >
                  <span style={{ fontSize: "14px", minWidth: "16px", textAlign: "center" }}>{btn.icon}</span>
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          <div style={{ background: "#f9fafb", borderRadius: "12px", border: "1px solid var(--blog-border)", padding: "18px", textAlign: "center" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "var(--blog-text)",
                margin: "0 auto 10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "15px",
                fontWeight: 900,
                color: "#E8FF47",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              {post.author.avatar.charAt(0)}
            </div>
            <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--blog-text)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{post.author.name}</div>
            <div style={{ fontSize: "12px", color: "var(--blog-light)", marginTop: "3px", fontFamily: "'Inter', sans-serif" }}>{post.author.role}</div>
          </div>
        </aside>
      </div>

      {relatedPosts.length > 0 && (
        <section style={{ background: "var(--blog-bg-gray)", borderTop: "1px solid var(--blog-border)", padding: "56px 0" }}>
          <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "0 32px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "28px", gap: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "22px", fontWeight: 800, color: "var(--blog-text)", margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                More from {post.categoryLabel}
              </h2>
              <Link href="/blog" style={{ textDecoration: "none" }}>
                <span style={{ fontSize: "13px", color: "var(--blog-blue)", fontWeight: 600, fontFamily: "'Inter', sans-serif" }}>View all →</span>
              </Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }}>
              {relatedPosts.map((p) => (
                <BlogCard key={p.id} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <footer style={{ borderTop: "1px solid var(--blog-border)", background: "#fff", padding: "24px 0" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "0 32px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
          <span style={{ fontSize: "12px", color: "var(--blog-light)", fontFamily: "'Inter', sans-serif" }}>© 2026 TalentOS. All rights reserved.</span>
          <Link href="/blog" style={{ textDecoration: "none" }}>
            <button style={{ background: "var(--blog-tag-bg)", color: "#3d3d3d", border: "none", borderRadius: "7px", padding: "8px 18px", fontSize: "13px", fontWeight: 600, cursor: "pointer", fontFamily: "'Inter', sans-serif" }}>
              ← Back to Blog
            </button>
          </Link>
        </div>
      </footer>

      <style>{`
        @media (max-width: 1024px) {
          div[style*="gridTemplateColumns: 1fr 260px"] {
            grid-template-columns: 1fr !important;
          }
          aside {
            display: none !important;
          }
          section div[style*="gridTemplateColumns: repeat(3,1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          header > div {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          div[style*="padding: 48px 32px 80px"] {
            padding-left: 20px !important;
            padding-right: 20px !important;
            padding-top: 36px !important;
          }
          section div[style*="gridTemplateColumns: repeat(3,1fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", display: "block" }}>
      <article
        style={{
          background: "#ffffff",
          borderRadius: "8px",
          overflow: "hidden",
          cursor: "pointer",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ aspectRatio: "16/9", overflow: "hidden", background: "#f5f5f5" }}>
          <img
            src={post.coverImage}
            alt={post.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <div style={{ padding: "16px 0", display: "flex", flexDirection: "column", flex: 1 }}>
          <div
            style={{
              fontSize: "12px",
              fontWeight: 600,
              color: "#635bff",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: "8px",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {post.categoryLabel}
          </div>

          <h3
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#1a1a1a",
              lineHeight: 1.4,
              margin: "0 0 12px 0",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {post.title}
          </h3>

          <p
            style={{
              fontSize: "14px",
              color: "#666666",
              lineHeight: 1.5,
              margin: "0 0 16px 0",
              fontFamily: "'Inter', sans-serif",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              flex: 1,
            }}
          >
            {post.excerpt}
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "auto" }}>
            <span style={{ fontSize: "13px", fontWeight: 600, color: "#1a1a1a", fontFamily: "'Inter', sans-serif" }}>
              {post.author.name}
            </span>
            <span style={{ fontSize: "13px", color: "#999999", fontFamily: "'Inter', sans-serif" }}>
              · {post.readTime}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}