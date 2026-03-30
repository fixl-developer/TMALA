"use client"

import { useState } from "react"
import { useAuthModal } from "@/components/auth-modal"
import {
  LifeBuoy,
  Search,
  UserCircle,
  CreditCard,
  Users,
  Shield,
  Trophy,
  Lock,
  Mail,
  MessageCircle,
  Phone,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Headphones,
  BookOpen,
} from "lucide-react"

const topics = [
  {
    icon: UserCircle,
    title: "Account Setup",
    description: "Registration, profile configuration, team invites, and workspace settings.",
    articles: 14,
    color: "#6366f1",
  },
  {
    icon: CreditCard,
    title: "Billing & Payments",
    description: "Subscription plans, invoices, payment methods, wallet management, and refunds.",
    articles: 12,
    color: "#059669",
  },
  {
    icon: Users,
    title: "Talent Profiles",
    description: "Creating profiles, uploading portfolios, managing availability, and verification.",
    articles: 16,
    color: "#0d9488",
  },
  {
    icon: Shield,
    title: "Escrow & Disputes",
    description: "How escrow works, milestone payments, raising disputes, and resolution process.",
    articles: 10,
    color: "#d97706",
  },
  {
    icon: Trophy,
    title: "Events & Pageants",
    description: "Setting up events, configuring scoring, managing judges, and publishing results.",
    articles: 18,
    color: "#dc2626",
  },
  {
    icon: Lock,
    title: "Security & Privacy",
    description: "MFA setup, RBAC permissions, data exports, GDPR compliance, and audit logs.",
    articles: 8,
    color: "#8b5cf6",
  },
]

const faqs = [
  {
    question: "How do I create my agency account on TalentOS?",
    answer: "Sign up with your email, verify your identity, and complete the onboarding checklist. You can set up your workspace branding, invite team members, and configure your first module in under 3 minutes.",
  },
  {
    question: "What payment methods does TalentOS support?",
    answer: "TalentOS supports credit/debit cards, UPI, net banking, and international wire transfers through our PCI-compliant payment partners Razorpay and Stripe. All payments are tokenized for security.",
  },
  {
    question: "How does the escrow system protect payments?",
    answer: "When a booking is confirmed, the full payment is locked in escrow. Funds are only released when deliverables are approved. If there's a dispute, our platform-mediated resolution process ensures fair outcomes for both parties.",
  },
  {
    question: "Can I use my own domain with TalentOS?",
    answer: "Yes. With our white-label feature (Pro plan and above), you can connect your custom domain, upload your logo, set brand colors, and remove all TalentOS branding. Your clients will see only your agency brand.",
  },
  {
    question: "How does scoring work for pageants?",
    answer: "The Pageant Engine supports weighted criteria, blind scoring, judge normalization, manual overrides (logged), auto-ranking, and tie-breaker rules. Scoring profiles can be saved as reusable templates.",
  },
  {
    question: "Is my data secure on TalentOS?",
    answer: "Absolutely. We use AES-256 encryption at rest, TLS 1.2+ in transit, strict tenant isolation with row-level security, and immutable audit logs. The platform is designed for SOC 2 Type II and ISO 27001 compliance.",
  },
  {
    question: "Can I switch plans or cancel anytime?",
    answer: "Yes. You can upgrade or downgrade your plan at any time. Upgrades take effect immediately, and downgrades apply at the next billing cycle. There are no long-term contracts or cancellation fees.",
  },
  {
    question: "Does TalentOS support multiple team members?",
    answer: "Yes. Every plan includes team collaboration with role-based access control. You can assign roles like Manager, Coordinator, Finance, and custom roles with fine-grained permissions per module.",
  },
  {
    question: "How do I get support if I'm stuck?",
    answer: "Free plan users get email support. Pro and Studio plans include priority support with under 2-hour response times. Enterprise plans get a dedicated account manager and phone support.",
  },
  {
    question: "What integrations are available?",
    answer: "TalentOS integrates with Razorpay, Stripe, Google Calendar, Zoom, WhatsApp, and more. Our REST API and webhook system let you build custom integrations for your specific workflows.",
  },
]

export default function HelpCenterPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const { openAuth } = useAuthModal()

  return (
    <main className="min-h-screen" aria-label="Help Center page">
      {/* ───── HERO (Monday.com style) ───── */}
      <section
        className="relative w-full overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-20"
        style={{ background: "#fff" }}
      >
        {/* Subtle top gradient line */}
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{ background: "linear-gradient(90deg, #6366f1, #8b5cf6, #a78bfa, #6366f1)" }}
        />

        <div className="relative z-10 mx-auto max-w-3xl px-6 sm:px-8 lg:px-12 text-center">
          {/* Large heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.15] tracking-tight mb-5">
            <span style={{ color: "#111" }}>How can we </span>
            <span style={{ color: "#6366f1" }}>help you?</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-[15px] leading-relaxed mb-10"
            style={{ color: "#555" }}
          >
            Search our help center to find answers to your questions
          </p>

          {/* Search Bar — clean bordered style */}
          <div className="max-w-xl mx-auto relative mb-8">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: "#bbb" }} />
            <input
              type="text"
              placeholder="Search our knowledge base"
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
            {["Escrow", "Payments", "Pageants", "AI Studio", "Contracts", "RBAC"].map((topic) => (
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

      {/* ───── TOPICS GRID (Monday.com style) ───── */}
      <section className="relative py-10 lg:py-14" style={{ background: "#fff" }}>
        <div
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20"
          style={{ background: "#6366f1", borderRadius: "32px" }}
        >
          {/* Heading */}
          <h2
            className="text-3xl sm:text-4xl lg:text-[2.8rem] font-bold leading-tight mb-12 px-4 sm:px-6 text-white"
          >
            Explore by topic
          </h2>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4 sm:px-6">
            {topics.map((topic, index) => {
              const Icon = topic.icon
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
                      {topic.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#555" }}>
                      {topic.description}
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

      {/* ───── FAQ SECTION ───── */}
      <section
        className="relative py-24 lg:py-28 overflow-hidden"
        style={{ background: "#fff" }}
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-14 text-center">
            <p
              className="text-[11px] font-bold uppercase tracking-[0.4em] mb-3"
              style={{ color: "#0d9488" }}
            >
              FAQ
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold leading-tight mb-4"
              style={{ color: "#111" }}
            >
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden transition-all duration-200"
                style={{
                  background: openFaq === index ? "#f9f9fb" : "#fff",
                  border: "1px solid #e8e8ec",
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-sm font-semibold pr-4" style={{ color: "#111" }}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className="w-4 h-4 shrink-0 transition-transform duration-200"
                    style={{
                      color: "#999",
                      transform: openFaq === index ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5">
                    <p className="text-sm leading-relaxed" style={{ color: "#555" }}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── CONTACT OPTIONS ───── */}
      <section
        className="relative py-20 lg:py-24 overflow-hidden"
        style={{ background: "#f5f5f7" }}
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: "#111" }}>
              Still need help?
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#555" }}>
              Our support team is ready to assist you through any channel you prefer.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                icon: Mail,
                title: "Email Support",
                description: "Get a response within 2 hours during business hours.",
                action: "hello@talentos.com",
                color: "#6366f1",
              },
              {
                icon: MessageCircle,
                title: "Live Chat",
                description: "Chat with our team in real-time. Available for Pro+ plans.",
                action: "Start Chat",
                color: "#0d9488",
              },
              {
                icon: Phone,
                title: "Phone Support",
                description: "Dedicated phone support for Enterprise plan customers.",
                action: "+1 (555) 000-0000",
                color: "#d97706",
              },
            ].map((channel, index) => {
              const Icon = channel.icon
              return (
                <div
                  key={index}
                  className="rounded-2xl p-6 sm:p-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                  style={{ background: "#fff", border: "1px solid #e8e8ec" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-5"
                    style={{
                      background: `${channel.color}12`,
                      border: `1px solid ${channel.color}20`,
                    }}
                  >
                    <Icon className="w-6 h-6" style={{ color: channel.color }} />
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: "#111" }}>
                    {channel.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "#555" }}>
                    {channel.description}
                  </p>
                  <p className="text-sm font-semibold" style={{ color: channel.color }}>
                    {channel.action}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="mt-10 text-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 font-bold px-7 py-3.5 text-sm rounded-full text-white hover:scale-[1.02] transition-all duration-200"
              style={{
                background: "#0d9488",
                boxShadow: "0 4px 16px rgba(13,148,136,0.3)",
              }}
            >
              Contact Support
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
