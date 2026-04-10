"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import blogData from "@/data/data/blog-posts.json";
import BlogCard from "./BlogCard";

type BlogPost = (typeof blogData.posts)[number];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const allPosts = blogData.posts as BlogPost[];
  const featured = useMemo(() => allPosts.filter((p) => p.featured).slice(0, 3), [allPosts]);

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return allPosts.filter((p) => {
      const matchCat = activeCategory === "all" || p.category === activeCategory;
      const matchSearch =
        q === "" ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [allPosts, activeCategory, searchQuery]);

  const groupedByCategory = useMemo(() => {
    return (blogData.categories as { id: string; label: string }[])
      .map((cat) => ({
        ...cat,
        posts: allPosts.filter((p) => p.category === cat.id),
      }))
      .filter((g) => g.posts.length > 0);
  }, [allPosts]);

  const sidebarTags = useMemo(() => {
    const tags = new Set<string>();
    allPosts.forEach((p) => p.tags.forEach((t) => tags.add(t)));
    return Array.from(tags).slice(0, 12);
  }, [allPosts]);

  return (
    <div className="blog-root" style={{ minHeight: "100vh" }}>
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
            gap: "24px",
          }}
        >
          <Link href="/" style={{ textDecoration: "none", flexShrink: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "6px",
                  background: "var(--blog-text)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "13px",
                  fontWeight: 900,
                  color: "#E8FF47",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                T
              </div>
              <span
                style={{
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "var(--blog-text)",
                  letterSpacing: "-0.01em",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                TalentOS
              </span>
              <span
                style={{
                  fontSize: "13px",
                  color: "var(--blog-light)",
                  borderLeft: "1px solid var(--blog-border)",
                  paddingLeft: "10px",
                  marginLeft: "2px",
                }}
              >
                Blog
              </span>
            </div>
          </Link>

          <div style={{ flex: 1, maxWidth: "320px", position: "relative" }}>
            <svg
              style={{
                position: "absolute",
                left: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "14px",
                height: "14px",
              }}
              viewBox="0 0 16 16"
              fill="none"
            >
              <circle cx="7" cy="7" r="5.5" stroke="var(--blog-light)" strokeWidth="1.5" />
              <path d="M11 11L14 14" stroke="var(--blog-light)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              style={{
                width: "100%",
                height: "36px",
                paddingLeft: "34px",
                paddingRight: "14px",
                background: "#f5f5f5",
                border: "1px solid transparent",
                borderRadius: "8px",
                fontSize: "13px",
                color: "var(--blog-text)",
                outline: "none",
                transition: "all 0.2s",
                fontFamily: "'Inter', sans-serif",
              }}
              onFocus={(e) => {
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.borderColor = "var(--blog-blue)";
                e.currentTarget.style.boxShadow = "0 0 0 3px rgba(0,115,234,0.1)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.background = "#f5f5f5";
                e.currentTarget.style.borderColor = "transparent";
                e.currentTarget.style.boxShadow = "none";
              }}
            />
          </div>

          <Link href="/" style={{ textDecoration: "none", flexShrink: 0 }}>
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
                transition: "background 0.2s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#0060c7")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--blog-blue)")}
            >
              Get started free
            </button>
          </Link>
        </div>
      </header>

      <section
        style={{
          background: "var(--blog-bg-gray)",
          borderBottom: "1px solid var(--blog-border)",
          padding: "48px 0 40px",
        }}
      >
        <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: "48px", alignItems: "center" }}>
            <div>
              <div
                style={{
                  display: "inline-block",
                  background: "var(--blog-blue-light)",
                  color: "#0060c7",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  borderRadius: "4px",
                  padding: "3px 9px",
                  marginBottom: "14px",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Editorial
              </div>

              <h1
                style={{
                  fontSize: "44px",
                  fontWeight: 900,
                  color: "var(--blog-text)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                  margin: "0 0 10px",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                The TalentOS Blog
              </h1>

              <p
                style={{
                  fontSize: "16px",
                  color: "var(--blog-muted)",
                  lineHeight: 1.55,
                  margin: "0 0 24px",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Insights for talent, agencies, and brands
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0",
                  background: "#fff",
                  border: "1.5px solid var(--blog-border)",
                  borderRadius: "10px",
                  overflow: "hidden",
                  maxWidth: "400px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                }}
                onFocusCapture={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "var(--blog-blue)";
                  el.style.boxShadow = "0 0 0 3px rgba(0,115,234,0.1)";
                }}
                onBlurCapture={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "var(--blog-border)";
                  el.style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)";
                }}
              >
                <svg style={{ marginLeft: "14px", flexShrink: 0, width: "15px", height: "15px" }} viewBox="0 0 16 16" fill="none">
                  <circle cx="7" cy="7" r="5.5" stroke="var(--blog-light)" strokeWidth="1.5" />
                  <path d="M11 11L14 14" stroke="var(--blog-light)" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <input
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    flex: 1,
                    height: "44px",
                    padding: "0 14px",
                    border: "none",
                    outline: "none",
                    fontSize: "14px",
                    color: "var(--blog-text)",
                    background: "transparent",
                    fontFamily: "'Inter', sans-serif",
                  }}
                />
              </div>
            </div>

            {featured[0] && (
              <Link href={`/blog/${featured[0].slug}`} style={{ textDecoration: "none" }}>
                <div
                  style={{
                    background: "#fff",
                    borderRadius: "14px",
                    border: "1px solid var(--blog-border)",
                    overflow: "hidden",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    cursor: "pointer",
                    transition: "transform 0.25s, box-shadow 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
                  }}
                >
                  <div style={{ aspectRatio: "16/9", overflow: "hidden" }}>
                    <img src={featured[0].coverImage} alt={featured[0].title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div style={{ padding: "16px 18px" }}>
                    <div
                      style={{
                        fontSize: "10px",
                        fontWeight: 700,
                        color: "var(--blog-blue)",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        marginBottom: "6px",
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {featured[0].categoryLabel}
                    </div>
                    <h3
                      style={{
                        fontSize: "15px",
                        fontWeight: 700,
                        color: "var(--blog-text)",
                        lineHeight: 1.35,
                        margin: 0,
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {featured[0].title}
                    </h3>
                  </div>
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>

      <div style={{ position: "sticky", top: "60px", zIndex: 100, background: "#fff", borderBottom: "1px solid var(--blog-border)" }}>
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            padding: "0 32px",
            display: "flex",
            alignItems: "center",
            gap: 0,
            overflowX: "auto",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {[{ id: "all", label: "All", count: allPosts.length }, ...blogData.categories.map((c) => ({
            id: c.id,
            label: c.label,
            count: allPosts.filter((p) => p.category === c.id).length,
          }))].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: "14px 18px",
                background: "transparent",
                border: "none",
                borderBottom: activeCategory === cat.id ? "2px solid var(--blog-blue)" : "2px solid transparent",
                color: activeCategory === cat.id ? "var(--blog-text)" : "var(--blog-muted)",
                fontWeight: activeCategory === cat.id ? 700 : 500,
                fontSize: "13px",
                cursor: "pointer",
                whiteSpace: "nowrap",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: "color 0.2s, border-color 0.2s",
                fontFamily: "'Inter', sans-serif",
                marginBottom: "-1px",
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== cat.id) e.currentTarget.style.color = "var(--blog-text)";
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== cat.id) e.currentTarget.style.color = "var(--blog-muted)";
              }}
            >
              {cat.label}
              <span
                style={{
                  fontSize: "11px",
                  color: "var(--blog-light)",
                  background: "var(--blog-tag-bg)",
                  borderRadius: "999px",
                  padding: "1px 6px",
                  fontWeight: 500,
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "0 32px" }}>
        {activeCategory === "all" && searchQuery.trim() === "" && (
          <section style={{ padding: "40px 0 32px" }}>
            <div
              style={{
                fontSize: "12px",
                fontWeight: 600,
                color: "#666666",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: "24px",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Featured
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }}>
              {featured.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </section>
        )}

        {activeCategory === "all" && searchQuery.trim() === "" && (
          <div style={{ height: "1px", background: "var(--blog-border)", margin: "8px 0 0" }} />
        )}

        <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: "56px", padding: "40px 0 80px", alignItems: "start" }}>
          <div>
            {searchQuery.trim() !== "" && (
              <div style={{ fontSize: "14px", color: "var(--blog-muted)", marginBottom: "24px", fontFamily: "'Inter', sans-serif" }}>
                <strong style={{ color: "var(--blog-text)", fontWeight: 700 }}>{filtered.length}</strong> results for "{searchQuery}"
              </div>
            )}

            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {filtered.map((post, i) => (
                <Link key={post.id} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                  <div
                    style={{
                      display: "flex",
                      gap: "20px",
                      alignItems: "flex-start",
                      padding: "22px 14px",
                      borderBottom: i < filtered.length - 1 ? "1px solid #f0f0f0" : "none",
                      borderRadius: "10px",
                      transition: "background 0.18s",
                      cursor: "pointer",
                      margin: "0 -14px",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#fafafa")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    <div
                      style={{
                        width: "160px",
                        height: "106px",
                        borderRadius: "8px",
                        overflow: "hidden",
                        flexShrink: 0,
                        background: "#f0f0f0",
                      }}
                    >
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.35s" }}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                      />
                    </div>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          fontSize: "11px",
                          fontWeight: 700,
                          color: "var(--blog-blue)",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          marginBottom: "6px",
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        {post.categoryLabel}
                      </div>

                      <h3
                        style={{
                          fontSize: "16px",
                          fontWeight: 700,
                          color: "var(--blog-text)",
                          lineHeight: 1.35,
                          margin: "0 0 6px",
                          letterSpacing: "-0.01em",
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
                          fontSize: "13px",
                          color: "#696969",
                          lineHeight: 1.55,
                          margin: "0 0 12px",
                          fontFamily: "'Inter', sans-serif",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {post.excerpt}
                      </p>

                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <div
                          style={{
                            width: "22px",
                            height: "22px",
                            borderRadius: "50%",
                            background: "var(--blog-text)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "9px",
                            fontWeight: 800,
                            color: "#E8FF47",
                            flexShrink: 0,
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                          }}
                        >
                          {post.author.avatar.charAt(0)}
                        </div>
                        <span style={{ fontSize: "12px", fontWeight: 600, color: "#3d3d3d", fontFamily: "'Inter', sans-serif" }}>{post.author.name}</span>
                        <span style={{ fontSize: "11px", color: "#b0b0b0" }}>·</span>
                        <span style={{ fontSize: "11px", color: "var(--blog-light)", fontFamily: "'Inter', sans-serif" }}>{post.publishedAtFormatted}</span>
                        <span style={{ fontSize: "11px", color: "#b0b0b0" }}>·</span>
                        <span style={{ fontSize: "11px", color: "var(--blog-light)", fontFamily: "'Inter', sans-serif" }}>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}

              {filtered.length === 0 && (
                <div style={{ textAlign: "center", padding: "64px 0", color: "var(--blog-light)", fontSize: "15px", fontFamily: "'Inter', sans-serif" }}>
                  No articles found for "{searchQuery}"
                </div>
              )}
            </div>
          </div>

          <aside style={{ position: "sticky", top: "112px" }}>
            <div style={{ background: "var(--blog-blue)", borderRadius: "14px", padding: "24px", marginBottom: "24px" }}>
              <h3 style={{ fontSize: "17px", fontWeight: 800, color: "#fff", margin: "0 0 6px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Get weekly insights
              </h3>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", margin: "0 0 16px", lineHeight: 1.5, fontFamily: "'Inter', sans-serif" }}>
                India's talent industry in your inbox.
              </p>
              <input
                placeholder="Your email"
                style={{
                  width: "100%",
                  height: "38px",
                  borderRadius: "8px",
                  border: "none",
                  padding: "0 12px",
                  fontSize: "13px",
                  marginBottom: "10px",
                  fontFamily: "'Inter', sans-serif",
                  boxSizing: "border-box",
                  outline: "none",
                }}
              />
              <button
                style={{
                  width: "100%",
                  height: "38px",
                  background: "#fff",
                  color: "var(--blog-blue)",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "13px",
                  fontWeight: 700,
                  cursor: "pointer",
                  fontFamily: "'Inter', sans-serif",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#f0f6ff")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}
              >
                Subscribe
              </button>
            </div>

            <div style={{ marginBottom: "24px" }}>
              <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--blog-light)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "14px", fontFamily: "'Inter', sans-serif" }}>
                Popular topics
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
                {sidebarTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchQuery(tag)}
                    style={{
                      border: "1px solid var(--blog-border)",
                      borderRadius: "6px",
                      padding: "5px 11px",
                      fontSize: "12px",
                      color: "var(--blog-muted)",
                      background: "#fff",
                      cursor: "pointer",
                      transition: "all 0.18s",
                      fontFamily: "'Inter', sans-serif",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "var(--blog-blue-light)";
                      e.currentTarget.style.color = "#0060c7";
                      e.currentTarget.style.borderColor = "var(--blog-blue)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#fff";
                      e.currentTarget.style.color = "var(--blog-muted)";
                      e.currentTarget.style.borderColor = "var(--blog-border)";
                    }}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ background: "var(--blog-bg-gray)", border: "1px solid var(--blog-border)", borderRadius: "12px", padding: "20px" }}>
              <div style={{ fontSize: "28px", fontWeight: 900, color: "var(--blog-text)", lineHeight: 1, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>12M+</div>
              <div style={{ fontSize: "13px", color: "var(--blog-muted)", marginTop: "6px", fontFamily: "'Inter', sans-serif" }}>creators on TalentOS</div>
            </div>
          </aside>
        </div>

        {activeCategory === "all" && searchQuery.trim() === "" && (
          <div style={{ paddingBottom: "80px" }}>
            {groupedByCategory.map((group) => (
              <section key={group.id} style={{ marginBottom: "64px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "24px",
                    paddingBottom: "16px",
                    borderBottom: "2px solid var(--blog-text)",
                  }}
                >
                  <h2 style={{ fontSize: "22px", fontWeight: 800, color: "var(--blog-text)", margin: 0, letterSpacing: "-0.02em", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {group.label}
                  </h2>
                  <button
                    onClick={() => setActiveCategory(group.id)}
                    style={{
                      fontSize: "13px",
                      color: "var(--blog-blue)",
                      fontWeight: 600,
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontFamily: "'Inter', sans-serif",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    View all →
                  </button>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }}>
                  {group.posts.slice(0, 3).map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>

      <footer style={{ borderTop: "1px solid var(--blog-border)", background: "var(--blog-bg-gray)", padding: "24px 0" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "0 32px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
          <span style={{ fontSize: "12px", color: "var(--blog-light)", fontFamily: "'Inter', sans-serif" }}>© 2026 TalentOS. All rights reserved.</span>
          <Link href="/" style={{ textDecoration: "none" }}>
            <button
              style={{
                background: "var(--blog-text)",
                color: "#E8FF47",
                border: "none",
                borderRadius: "8px",
                padding: "9px 20px",
                fontSize: "13px",
                fontWeight: 700,
                cursor: "pointer",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Back to TalentOS →
            </button>
          </Link>
        </div>
      </footer>

      <style>{`
        @media (max-width: 1024px) {
          div[style*="gridTemplateColumns: 1fr 280px"] {
            grid-template-columns: 1fr !important;
          }
          aside {
            position: static !important;
          }
          section div[style*="gridTemplateColumns: repeat(3, 1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          header > div {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          section > div {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          div[style*="maxWidth: 1180px"][style*="padding: 0 32px"] {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          section div[style*="gridTemplateColumns: 1fr 380px"] {
            grid-template-columns: 1fr !important;
          }
          section div[style*="gridTemplateColumns: repeat(3, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          header > div > div[style*="maxWidth: 320px"] {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
