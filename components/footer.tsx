"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sparkles, ArrowRight, Mail, MapPin, Phone } from "lucide-react"
import { useAuthModal } from "@/components/auth-modal"

const FOOTER_GROUPS = [
  {
    title: "Product",
    links: [
      { label: "Platform Overview", href: "/features" },
      { label: "For Talents", href: "/talents" },
      { label: "For Agencies", href: "/agencies" },
      { label: "For Sponsors", href: "/sponsors" },
      { label: "AI Studio", href: "/ai-features" },
      { label: "Pricing", href: "/features" },
    ],
  },
  {
    title: "Initiatives",
    links: [
      { label: "Academy & Training", href: "/agencies/academy" },
      { label: "Pageants & Events", href: "/agencies/pageant" },
      { label: "Community Programs", href: "/agencies/community" },
      { label: "Creator Network", href: "/agencies/marketplace" },
      { label: "Partner Program", href: "/#waitlist" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/#waitlist" },
      { label: "Customer Stories", href: "/customer-stories" },
      { label: "Careers", href: "/#waitlist" },
      { label: "Blog", href: "/blog" },
      { label: "Press Kit", href: "/#waitlist" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "API Documentation", href: "/api-docs" },
      { label: "Status Page", href: "/#waitlist" },
      { label: "Security & Compliance", href: "/trust-safety" },
      { label: "System Updates", href: "/#waitlist" },
    ],
  },
]

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "/#waitlist",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "/#waitlist",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "/#waitlist",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "/#waitlist",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
]

export function Footer() {
  const pathname = usePathname()
  const { openAuth } = useAuthModal()

  // AI Studio pages have their own dark footer
  if (pathname.startsWith("/ai-features")) return null

  return (
    <footer data-testid="footer" aria-label="Site footer" style={{ background: "#fff", borderTop: "1px solid #e5e7eb" }}>
      {/* ── Main Footer ── */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top: Brand + Link columns (Monday.com style) */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-14 mb-14">
          {/* Left: Brand + contact */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
              >
                <Sparkles className="h-4.5 w-4.5 text-white" />
              </div>
              <div>
                <div className="font-bold text-base tracking-tight leading-tight" style={{ color: "#111" }}>
                  Multi Talent
                </div>
                <div className="text-[11px] uppercase tracking-[0.2em] font-semibold" style={{ color: "#6366f1" }}>
                  Agency Platform
                </div>
              </div>
            </div>

            <p
              className="text-[13px] leading-relaxed mb-6"
              style={{ color: "#555" }}
            >
              The enterprise platform powering talent agencies, models, creators,
              and sponsors worldwide.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-2.5 mb-6">
              {[
                { icon: Mail, text: "hello@talentos.com" },
                { icon: Phone, text: "+1 (555) 000-0000" },
                { icon: MapPin, text: "San Francisco, CA" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2.5">
                  <item.icon className="w-3.5 h-3.5" style={{ color: "#888" }} />
                  <span className="text-[13px]" style={{ color: "#555" }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() => openAuth()}
              data-testid="btn-get-started"
              aria-label="Get Started"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white transition-all duration-200 hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                boxShadow: "0 4px 16px rgba(99,102,241,0.25)",
              }}
            >
              Get Started
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Right: Link columns — Monday.com clean style */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-10">
            {FOOTER_GROUPS.map((group) => (
              <div key={group.title}>
                <h3
                  className="text-sm font-bold mb-4"
                  style={{ color: "#111" }}
                >
                  {group.title}
                </h3>
                <ul className="space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      {link.href === "/#waitlist" ? (
                        <button
                          onClick={() => openAuth()}
                          data-testid={`btn-${link.label.toLowerCase().replace(/\s+/g, "-").replace(/[&]/g, "and")}`}
                          aria-label={link.label}
                          className="text-[13px] leading-relaxed transition-colors duration-200 hover:text-[#6366f1]"
                          style={{ color: "#555" }}
                        >
                          {link.label}
                        </button>
                      ) : (
                        <Link
                          href={link.href}
                          data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-").replace(/[&]/g, "and")}`}
                          className="text-[13px] leading-relaxed transition-colors duration-200 hover:text-[#6366f1]"
                          style={{ color: "#555" }}
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "#e5e7eb" }} />

        {/* Bottom bar */}
        <div className="pt-6 pb-2">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
            {/* Left: copyright + legal */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
              <span className="text-xs" style={{ color: "#888" }}>
                © 2026 Multi Talent Agency. All rights reserved.
              </span>
              <div className="flex items-center gap-4">
                {["Privacy", "Terms", "Cookies", "Sitemap"].map((item) => (
                  <button
                    key={item}
                    onClick={() => openAuth()}
                    data-testid={`btn-${item.toLowerCase()}`}
                    aria-label={item}
                    className="text-xs transition-colors duration-200 hover:text-[#6366f1]"
                    style={{ color: "#555" }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Right: social icons */}
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <button
                  key={social.label}
                  onClick={() => openAuth()}
                  data-testid={`btn-${social.label.toLowerCase()}`}
                  aria-label={social.label}
                  className="flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-200 hover:bg-gray-100 hover:scale-105"
                  style={{
                    color: "#555",
                    background: "#f9fafb",
                    border: "1px solid #f0f0f0",
                  }}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
