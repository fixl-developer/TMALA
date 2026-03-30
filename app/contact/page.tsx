"use client"

import { useState } from "react"
import {
  Headphones,
  ArrowRight,
  Mail,
  Phone,
  Clock,
  MapPin,
  Zap,
  Shield,
  Users,
  BookOpen,
  LifeBuoy,
  CheckCircle,
} from "lucide-react"

const trustSignals = [
  {
    icon: Clock,
    label: "< 2hr Response",
    description: "Average first response time",
    expandedText: "Our support team responds to every inquiry within 2 hours during business hours, ensuring you're never left waiting.",
    color: "#c4b5fd",
    hoverColor: "#a78bfa",
  },
  {
    icon: Zap,
    label: "24/7 Support",
    description: "Round-the-clock availability",
    expandedText: "Get help anytime with our always-on support channels — chat, email, and emergency hotline available around the clock.",
    color: "#6ee7b7",
    hoverColor: "#34d399",
  },
  {
    icon: Users,
    label: "Dedicated Manager",
    description: "For Pro+ plan customers",
    expandedText: "Pro+ customers get a dedicated account manager who understands your agency inside out and proactively helps you grow.",
    color: "#93c5fd",
    hoverColor: "#60a5fa",
  },
]

const categories = [
  "General Inquiry",
  "Technical Support",
  "Billing & Payments",
  "Sales & Partnerships",
  "Bug Report",
  "Feature Request",
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <main className="min-h-screen" aria-label="Contact Support page">
      {/* ───── HERO + TRUST SIGNALS (combined) ───── */}
      <section
        className="relative w-full overflow-hidden pt-32 pb-14"
        style={{ background: "#fff" }}
      >
        <div
          className="absolute z-[1] rounded-full pointer-events-none"
          style={{
            width: 800,
            height: 800,
            top: -200,
            right: -300,
            background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 text-center">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
            style={{
              background: "rgba(99,102,241,0.08)",
              border: "1px solid rgba(99,102,241,0.15)",
              color: "#6366f1",
            }}
          >
            <Headphones className="w-3 h-3" />
            Contact Support
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-4">
            <span style={{ color: "#111" }}>Get in </span>
            <span style={{ color: "#6366f1" }}>touch</span>
          </h1>

          <p
            className="text-[16px] leading-relaxed mb-10 max-w-lg mx-auto"
            style={{ color: "#555" }}
          >
            Have a question, need help, or want to learn more about TalentOS? Our team is here to help.
          </p>

          {/* Trust signals — monday.com style cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {trustSignals.map((signal, i) => {
              const Icon = signal.icon
              return (
                <div
                  key={i}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer"
                  style={{ background: signal.color, height: 260 }}
                >
                  {/* Default state — title + icon */}
                  <div className="absolute inset-0 z-10 p-6 flex flex-col items-center justify-center text-center opacity-100 group-hover:opacity-0 transition-opacity duration-400">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                      style={{ background: "rgba(255,255,255,0.5)", backdropFilter: "blur(8px)" }}
                    >
                      <Icon className="w-6 h-6" style={{ color: "#111" }} />
                    </div>
                    <h3 className="text-xl font-bold mb-1" style={{ color: "#111" }}>
                      {signal.label}
                    </h3>
                    <p className="text-sm font-medium" style={{ color: "rgba(0,0,0,0.55)" }}>
                      {signal.description}
                    </p>
                  </div>

                  {/* Hover state — description + explore */}
                  <div className="absolute inset-0 z-10 p-6 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                    <p className="text-[15px] leading-relaxed font-medium mb-6" style={{ color: "#111" }}>
                      {signal.expandedText}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-bold" style={{ color: "#111" }}>
                      Explore
                      <span
                        className="w-7 h-7 rounded-full flex items-center justify-center"
                        style={{ background: "rgba(0,0,0,0.12)" }}
                      >
                        <ArrowRight className="w-3.5 h-3.5" style={{ color: "#111" }} />
                      </span>
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ───── FORM + SIDEBAR ───── */}
      <section
        className="relative py-20 lg:py-28 overflow-hidden"
        style={{ background: "#f5f5f7" }}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="flex-1">
              <div
                className="rounded-2xl p-8 sm:p-10"
                style={{ background: "#fff", border: "1px solid #e8e8ec" }}
              >
                {!submitted ? (
                  <>
                    <h2 className="text-xl font-bold mb-6" style={{ color: "#111" }}>
                      Send us a message
                    </h2>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault()
                        setSubmitted(true)
                      }}
                      className="space-y-5"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-semibold mb-2" style={{ color: "#333" }}>
                            First Name
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="John"
                            className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-indigo-500/20"
                            style={{ background: "#f9f9fb", border: "1px solid #e8e8ec", color: "#111" }}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold mb-2" style={{ color: "#333" }}>
                            Last Name
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Doe"
                            className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-indigo-500/20"
                            style={{ background: "#f9f9fb", border: "1px solid #e8e8ec", color: "#111" }}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold mb-2" style={{ color: "#333" }}>
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="john@agency.com"
                          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-indigo-500/20"
                          style={{ background: "#f9f9fb", border: "1px solid #e8e8ec", color: "#111" }}
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold mb-2" style={{ color: "#333" }}>
                          Category
                        </label>
                        <select
                          required
                          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-indigo-500/20 appearance-none"
                          style={{ background: "#f9f9fb", border: "1px solid #e8e8ec", color: "#111" }}
                          defaultValue=""
                        >
                          <option value="" disabled>Select a category</option>
                          {categories.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold mb-2" style={{ color: "#333" }}>
                          Subject
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Brief description of your inquiry"
                          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-indigo-500/20"
                          style={{ background: "#f9f9fb", border: "1px solid #e8e8ec", color: "#111" }}
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold mb-2" style={{ color: "#333" }}>
                          Message
                        </label>
                        <textarea
                          required
                          rows={5}
                          placeholder="Tell us more about how we can help..."
                          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 resize-none focus:ring-2 focus:ring-indigo-500/20"
                          style={{ background: "#f9f9fb", border: "1px solid #e8e8ec", color: "#111" }}
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-bold px-8 py-3.5 text-sm rounded-full text-white hover:scale-[1.02] transition-all duration-200"
                        style={{
                          background: "#6366f1",
                          boxShadow: "0 4px 16px rgba(99,102,241,0.3)",
                        }}
                      >
                        Send Message
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                      style={{ background: "rgba(5,150,105,0.08)" }}
                    >
                      <CheckCircle className="w-8 h-8" style={{ color: "#059669" }} />
                    </div>
                    <h3 className="text-xl font-bold mb-3" style={{ color: "#111" }}>
                      Message sent!
                    </h3>
                    <p className="text-sm leading-relaxed mb-6" style={{ color: "#555" }}>
                      We&apos;ve received your message and will get back to you within 2 hours during business hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-sm font-semibold"
                      style={{ color: "#6366f1" }}
                    >
                      Send another message
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-80 shrink-0 space-y-6">
              {/* Contact Info */}
              <div
                className="rounded-2xl p-6"
                style={{ background: "#fff", border: "1px solid #e8e8ec" }}
              >
                <h3 className="text-sm font-bold mb-5" style={{ color: "#111" }}>
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: "hello@talentos.com", sub: "Email" },
                    { icon: Phone, label: "+1 (555) 000-0000", sub: "Phone" },
                    { icon: Clock, label: "Mon-Fri, 9AM-6PM IST", sub: "Business Hours" },
                    { icon: MapPin, label: "San Francisco, CA", sub: "Office" },
                  ].map((item, i) => {
                    const Icon = item.icon
                    return (
                      <div key={i} className="flex items-start gap-3">
                        <Icon className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#6366f1" }} />
                        <div>
                          <p className="text-sm font-semibold" style={{ color: "#111" }}>{item.label}</p>
                          <p className="text-xs" style={{ color: "#888" }}>{item.sub}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Quick Links */}
              <div
                className="rounded-2xl p-6"
                style={{ background: "#fff", border: "1px solid #e8e8ec" }}
              >
                <h3 className="text-sm font-bold mb-5" style={{ color: "#111" }}>
                  Quick Links
                </h3>
                <div className="space-y-3">
                  {[
                    { icon: LifeBuoy, label: "Help Center", href: "/help" },
                    { icon: BookOpen, label: "Guides & Docs", href: "/guides" },
                    { icon: Shield, label: "Trust & Safety", href: "/trust-safety" },
                  ].map((link, i) => {
                    const Icon = link.icon
                    return (
                      <a
                        key={i}
                        href={link.href}
                        className="flex items-center gap-3 p-3 rounded-xl transition-all duration-200 hover:shadow-sm group"
                        style={{ background: "#f9f9fb", border: "1px solid transparent" }}
                      >
                        <Icon className="w-4 h-4" style={{ color: "#6366f1" }} />
                        <span className="text-sm font-semibold" style={{ color: "#333" }}>
                          {link.label}
                        </span>
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
