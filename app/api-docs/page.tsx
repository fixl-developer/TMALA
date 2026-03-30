"use client"

import { useState } from "react"
import { useAuthModal } from "@/components/auth-modal"
import {
  Code,
  ArrowRight,
  Key,
  Terminal,
  Rocket,
  Users,
  Briefcase,
  CreditCard,
  Trophy,
  Bell,
  Shield,
  Webhook,
  ChevronRight,
  Copy,
  ExternalLink,
  Package,
  IndianRupee,
  Wallet,
  Calendar,
  Video,
  MessageCircle,
  Hash,
  Cloud,
  Mail,
  Plus,
  Minus,
  Search,
} from "lucide-react"

const quickStartSteps = [
  {
    step: "01",
    title: "Get your API key",
    description: "Sign up for a TalentOS account and generate your API credentials from the developer dashboard.",
    icon: Key,
  },
  {
    step: "02",
    title: "Make your first call",
    description: "Use our REST API to fetch talent profiles, create bookings, or manage your agency workspace.",
    icon: Terminal,
  },
  {
    step: "03",
    title: "Go live",
    description: "Switch from sandbox to production, configure webhooks, and start processing real data.",
    icon: Rocket,
  },
]

const apiCategories = [
  {
    icon: Users,
    title: "Talent Management",
    description: "CRUD operations for talent profiles, portfolios, availability, tags, and verification status.",
    endpoints: 18,
    color: "#0d9488",
  },
  {
    icon: Briefcase,
    title: "Bookings & Casting",
    description: "Job briefs, submissions, shortlists, bookings, call sheets, and availability checks.",
    endpoints: 22,
    color: "#6366f1",
  },
  {
    icon: CreditCard,
    title: "Payments & Escrow",
    description: "Wallet operations, escrow lifecycle, payouts, invoices, and ledger transactions.",
    endpoints: 16,
    color: "#059669",
  },
  {
    icon: Trophy,
    title: "Events & Pageants",
    description: "Event creation, stage management, scoring submission, result publishing, and judge assignment.",
    endpoints: 20,
    color: "#d97706",
  },
  {
    icon: Webhook,
    title: "Webhooks",
    description: "Configure webhook endpoints, manage event subscriptions, and process delivery logs.",
    endpoints: 8,
    color: "#dc2626",
  },
  {
    icon: Shield,
    title: "Authentication",
    description: "OAuth 2.0 flows, JWT token management, MFA, session handling, and tenant switching.",
    endpoints: 12,
    color: "#8b5cf6",
  },
]

const integrations = [
  { name: "Razorpay", category: "Payments", icon: IndianRupee },
  { name: "Stripe", category: "Payments", icon: Wallet },
  { name: "Google Calendar", category: "Scheduling", icon: Calendar },
  { name: "Zoom", category: "Video", icon: Video },
  { name: "WhatsApp", category: "Messaging", icon: MessageCircle },
  { name: "Slack", category: "Notifications", icon: Hash },
  { name: "AWS S3", category: "Storage", icon: Cloud },
  { name: "SendGrid", category: "Email", icon: Mail },
]

const sdks = [
  {
    name: "Node.js",
    status: "available",
    color: "#059669",
    install: "npm install @talentos/sdk",
    description: "Full-featured SDK with TypeScript support, auto-pagination, and webhook verification.",
  },
  {
    name: "Python",
    status: "available",
    color: "#3b82f6",
    install: "pip install talentos",
    description: "Async-ready SDK with Pydantic models, retry logic, and Django/Flask helpers.",
  },
  {
    name: "PHP",
    status: "coming soon",
    color: "#8b5cf6",
    install: "composer require talentos/sdk",
    description: "Laravel-compatible SDK with Eloquent bindings and queue-friendly webhook handling.",
  },
  {
    name: "Ruby",
    status: "coming soon",
    color: "#dc2626",
    install: "gem install talentos",
    description: "Rails-friendly SDK with ActiveRecord integrations and Sidekiq webhook processing.",
  },
]

const codeExample = `// Fetch talent profiles
const response = await fetch('https://api.talentos.com/v1/talents', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'X-Tenant-Id': 'your-tenant-id',
    'Content-Type': 'application/json'
  }
});

const { data, pagination } = await response.json();
// Returns: { data: [{ id, name, category, ... }], pagination: { cursor, limit } }`

export default function ApiDocsPage() {
  const { openAuth } = useAuthModal()
  const [activeStep, setActiveStep] = useState(0)

  return (
    <main className="min-h-screen" aria-label="API & Integrations page">
      {/* ───── HERO (monday.com search style) ───── */}
      <section
        className="relative w-full overflow-hidden flex items-center justify-center pt-20"
        style={{ background: "#fff", minHeight: "69vh" }}
      >
        {/* Subtle top gradient line */}
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{ background: "linear-gradient(90deg, #6366f1, #8b5cf6, #a78bfa, #6366f1)" }}
        />

        <div className="relative z-10 mx-auto max-w-3xl px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.15] tracking-tight mb-5">
            <span style={{ color: "#111" }}>Build with </span>
            <span style={{ color: "#6366f1" }}>TalentOS</span>
          </h1>

          <p
            className="text-[15px] leading-relaxed mb-10"
            style={{ color: "#555" }}
          >
            Search our API docs, guides, and references to start building
          </p>

          {/* Search bar */}
          <div className="max-w-xl mx-auto relative mb-8">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: "#bbb" }} />
            <input
              type="text"
              placeholder="Search endpoints, SDKs, webhooks..."
              className="w-full pl-13 pr-5 py-4 text-[15px] outline-none transition-all duration-200 focus:border-indigo-400"
              style={{
                background: "#fff",
                border: "1.5px solid #d1d5db",
                borderRadius: "12px",
                color: "#111",
                paddingLeft: "48px",
              }}
            />
          </div>

          {/* Quick topic pills */}
          <div className="flex flex-wrap gap-3 justify-center">
            {["REST API", "Webhooks", "Authentication", "Escrow", "SDKs", "Talent Profiles"].map((topic) => (
              <button
                key={topic}
                className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:border-indigo-400 hover:text-indigo-600"
                style={{
                  background: "#fff",
                  border: "1.5px solid #d1d5db",
                  color: "#6366f1",
                }}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ───── QUICK START (monday.com accordion style) ───── */}
      <section
        className="relative py-10 lg:py-14 overflow-hidden"
        style={{ background: "#fff" }}
      >
        <div
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28"
          style={{ background: "#111", borderRadius: "32px" }}
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Left side — heading + description + CTA */}
            <div className="lg:w-1/2 lg:flex-shrink-0">
              <h2
                className="text-3xl sm:text-4xl lg:text-[2.8rem] font-bold leading-[1.15] mb-6"
                style={{ color: "#fff" }}
              >
                Quick Start
                <br />
                <span style={{ color: "#fff" }}>
                  up and running in 3 steps.
                </span>
              </h2>

              <p
                className="text-[15px] leading-relaxed mb-8 max-w-md"
                style={{ color: "#ccc" }}
              >
                Get started with TalentOS APIs in minutes. From generating your API key to going live in production — we make integration effortless.
              </p>

              <button
                onClick={() => openAuth()}
                className="inline-flex items-center gap-2 font-bold px-7 py-3.5 text-sm rounded-full transition-all duration-200 hover:scale-[1.02]"
                style={{
                  background: "#fff",
                  color: "#6366f1",
                }}
              >
                Get API Access
              </button>
            </div>

            {/* Right side — accordion */}
            <div className="lg:w-1/2 flex flex-col">
              {quickStartSteps.map((step, index) => {
                const isActive = activeStep === index
                return (
                  <div
                    key={index}
                    onClick={() => setActiveStep(isActive ? -1 : index)}
                    className="cursor-pointer transition-all duration-300 rounded-2xl"
                    style={{
                      background: isActive ? "#6366f1" : "transparent",
                      marginBottom: index < quickStartSteps.length - 1 ? "4px" : 0,
                    }}
                  >
                    {/* Accordion header */}
                    <div className="flex items-center justify-between px-6 py-5 sm:px-8 sm:py-6">
                      <h3
                        className="text-lg sm:text-xl font-bold"
                        style={{ color: "#fff" }}
                      >
                        {step.title}
                      </h3>
                      {isActive ? (
                        <Minus className="w-5 h-5 flex-shrink-0" style={{ color: "#fff" }} />
                      ) : (
                        <Plus className="w-5 h-5 flex-shrink-0" style={{ color: "#fff" }} />
                      )}
                    </div>

                    {/* Accordion content */}
                    <div
                      className="overflow-hidden transition-all duration-300"
                      style={{
                        maxHeight: isActive ? "200px" : "0px",
                        opacity: isActive ? 1 : 0,
                      }}
                    >
                      <div className="px-6 pb-6 sm:px-8 sm:pb-8">
                        <p
                          className="text-sm sm:text-[15px] leading-relaxed"
                          style={{ color: "#fff" }}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* ───── API CATEGORIES (Monday.com style) ───── */}
      <section className="relative py-10 lg:py-14" style={{ background: "#fff" }}>
        <div
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20"
          style={{
            background: "#6366f1",
            borderRadius: "32px",
          }}
        >
          {/* Section heading */}
          <h2
            className="text-3xl sm:text-4xl lg:text-[2.8rem] font-bold leading-tight mb-12 text-white"
          >
            Explore by topic
          </h2>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {apiCategories.map((cat, index) => {
              const Icon = cat.icon
              return (
                <div
                  key={index}
                  className="group rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  style={{
                    background: "rgba(255,255,255,0.95)",
                    minHeight: "260px",
                  }}
                >
                  {/* Icon at top */}
                  <div className="mb-auto">
                    <Icon
                      className="w-8 h-8 mb-8"
                      style={{ color: "#6366f1" }}
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Content at bottom */}
                  <div>
                    <h3
                      className="text-xl sm:text-2xl font-bold mb-2 leading-tight"
                      style={{ color: "#111" }}
                    >
                      {cat.title}
                    </h3>

                    <p className="text-sm leading-relaxed" style={{ color: "#555" }}>
                      {cat.description}
                    </p>

                    {/* Learn more — visible only on hover */}
                    <span
                      className="inline-flex items-center gap-1.5 text-sm font-semibold mt-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 border-b border-current pb-0.5"
                      style={{ color: "#111" }}
                    >
                      Learn more
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ───── INTEGRATIONS (monday.com style) ───── */}
      <section
        className="relative py-24 lg:py-28 overflow-hidden"
        style={{ background: "#fff" }}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl sm:text-4xl lg:text-[2.8rem] font-bold leading-tight mb-10"
            style={{ color: "#111" }}
          >
            Works with your stack
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {integrations.map((integration, index) => {
              const Icon = integration.icon
              return (
                <div
                  key={index}
                  className="group relative rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  style={{
                    background: "#111",
                    minHeight: "180px",
                  }}
                >
                  <Icon
                    className="w-8 h-8 sm:w-10 sm:h-10 mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: "#fff" }}
                    strokeWidth={1.5}
                  />
                  <p
                    className="text-sm sm:text-base font-bold"
                    style={{ color: "#fff" }}
                  >
                    {integration.name}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ───── SDKs (monday.com split style) ───── */}
      <section
        className="relative py-10 lg:py-14 overflow-hidden"
        style={{ background: "#fff" }}
      >
        <div
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28"
          style={{ background: "#111", borderRadius: "32px" }}
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
              {/* Left — heading */}
              <div className="lg:w-2/5 lg:flex-shrink-0">
                <h2
                  className="text-3xl sm:text-4xl lg:text-[2.8rem] font-bold leading-[1.15] mb-6"
                  style={{ color: "#fff" }}
                >
                  Official SDKs
                  <br />
                  <span style={{ color: "#fff" }}>& Libraries</span>
                </h2>
                <p
                  className="text-[15px] leading-relaxed mb-8 max-w-sm"
                  style={{ color: "#ccc" }}
                >
                  Install our official SDKs to get started in your language of choice. Full type safety, auto-retries, and built-in webhook verification.
                </p>
                <a
                  href="/guides"
                  className="inline-flex items-center gap-2 font-bold px-7 py-3.5 text-sm rounded-full transition-all duration-200 hover:scale-[1.02]"
                  style={{ background: "#fff", color: "#6366f1" }}
                >
                  View all docs
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Right — SDK cards */}
              <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {sdks.map((sdk, index) => (
                  <div
                    key={index}
                    className="group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {/* Top row: icon + name + status */}
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: `${sdk.color}20` }}
                      >
                        <Package className="w-5 h-5" style={{ color: sdk.color }} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-bold" style={{ color: "#fff" }}>
                          {sdk.name}
                        </p>
                      </div>
                      <span
                        className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wide"
                        style={{
                          background: sdk.status === "available" ? "rgba(5,150,105,0.15)" : "rgba(139,92,246,0.15)",
                          color: sdk.status === "available" ? "#34d399" : "#a78bfa",
                        }}
                      >
                        {sdk.status}
                      </span>
                    </div>

                    {/* Description */}
                    <p
                      className="text-[13px] leading-relaxed mb-4"
                      style={{ color: "#999" }}
                    >
                      {sdk.description}
                    </p>

                    {/* Install command */}
                    <div
                      className="flex items-center gap-2 px-3.5 py-2.5 rounded-lg font-mono text-[12px]"
                      style={{
                        background: "rgba(0,0,0,0.3)",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <span style={{ color: "#6366f1" }}>$</span>
                      <span className="flex-1 truncate" style={{ color: "#e2e8f0" }}>
                        {sdk.install}
                      </span>
                      <Copy
                        className="w-3.5 h-3.5 flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
                        style={{ color: "#666" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── BOTTOM CTA ───── */}
      <section
        className="relative py-20 lg:py-24 overflow-hidden"
        style={{ background: "#fff" }}
      >
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
            style={{ background: "rgba(99,102,241,0.08)", border: "1px solid rgba(99,102,241,0.12)" }}
          >
            <Code className="w-7 h-7" style={{ color: "#6366f1" }} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: "#111" }}>
            Ready to build?
          </h2>
          <p className="text-sm leading-relaxed mb-8" style={{ color: "#555" }}>
            Request API access and start integrating TalentOS into your workflows today.
          </p>
          <button
            onClick={() => openAuth()}
            className="inline-flex items-center gap-2 font-bold px-7 py-3.5 text-sm rounded-full text-white hover:scale-[1.02] transition-all duration-200"
            style={{
              background: "#6366f1",
              boxShadow: "0 4px 16px rgba(99,102,241,0.3)",
            }}
          >
            Request API Access
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>
    </main>
  )
}
