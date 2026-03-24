"use client"

import { useState, Fragment } from "react"
import { PricingSection } from "@/components/pricing-section"
import {
  Check,
  X,
  ChevronDown,
  Shield,
  Zap,
  Users,
  ArrowRight,
  Sparkles,
  HelpCircle,
} from "lucide-react"
import { useAuthModal } from "@/components/auth-modal"

/* ── Feature Comparison Data ── */

const comparisonCategories = [
  {
    name: "Talent Management",
    features: [
      { name: "Talent profiles", free: "1", starter: "50", pro: "500", studio: "Unlimited", enterprise: "Unlimited" },
      { name: "Team members", free: "—", starter: "1", pro: "5", studio: "20", enterprise: "Unlimited" },
      { name: "Portfolio photos", free: "10", starter: "100", pro: "Unlimited", studio: "Unlimited", enterprise: "Unlimited" },
      { name: "AI photo enhancement", free: false, starter: false, pro: true, studio: true, enterprise: true },
      { name: "AI matching & discovery", free: false, starter: false, pro: true, studio: true, enterprise: true },
      { name: "Comp card generator", free: false, starter: false, pro: true, studio: true, enterprise: true },
    ],
  },
  {
    name: "Bookings & Casting",
    features: [
      { name: "Booking calendar", free: false, starter: true, pro: true, studio: true, enterprise: true },
      { name: "Casting & auditions", free: false, starter: false, pro: true, studio: true, enterprise: true },
      { name: "Shortlist builder", free: false, starter: false, pro: true, studio: true, enterprise: true },
      { name: "Client portal", free: false, starter: false, pro: false, studio: true, enterprise: true },
    ],
  },
  {
    name: "Payments & Contracts",
    features: [
      { name: "Invoice generation", free: false, starter: true, pro: true, studio: true, enterprise: true },
      { name: "Payment splits & escrow", free: false, starter: false, pro: true, studio: true, enterprise: true },
      { name: "Contracts & e-sign", free: false, starter: false, pro: true, studio: true, enterprise: true },
      { name: "Multi-currency payouts", free: false, starter: false, pro: false, studio: true, enterprise: true },
    ],
  },
  {
    name: "Events & Campaigns",
    features: [
      { name: "Pageant engine & scoring", free: false, starter: false, pro: false, studio: true, enterprise: true },
      { name: "Influencer campaigns", free: false, starter: false, pro: false, studio: true, enterprise: true },
      { name: "Sponsor & brand portal", free: false, starter: false, pro: false, studio: true, enterprise: true },
      { name: "Academy & training", free: false, starter: false, pro: false, studio: true, enterprise: true },
    ],
  },
  {
    name: "Platform & Security",
    features: [
      { name: "Custom branding", free: false, starter: false, pro: true, studio: true, enterprise: true },
      { name: "Advanced analytics", free: false, starter: false, pro: false, studio: true, enterprise: true },
      { name: "API access & webhooks", free: false, starter: false, pro: false, studio: false, enterprise: true },
      { name: "SSO & advanced security", free: false, starter: false, pro: false, studio: false, enterprise: true },
      { name: "White-label deployment", free: false, starter: false, pro: false, studio: false, enterprise: true },
      { name: "Multi-tenant / franchise", free: false, starter: false, pro: false, studio: false, enterprise: true },
    ],
  },
  {
    name: "Support",
    features: [
      { name: "Email support", free: true, starter: true, pro: true, studio: true, enterprise: true },
      { name: "Priority support", free: false, starter: false, pro: true, studio: true, enterprise: true },
      { name: "Dedicated account manager", free: false, starter: false, pro: false, studio: false, enterprise: true },
      { name: "Custom SLA & uptime", free: false, starter: false, pro: false, studio: false, enterprise: true },
    ],
  },
]

const planNames = ["free", "starter", "pro", "studio", "enterprise"] as const

/* ── FAQ Data ── */

const faqs = [
  {
    q: "Is the Free plan really free forever?",
    a: "Yes! The Free plan has no time limit and no credit card required. It's designed for individual talents who want to build their portfolio and get discovered by agencies.",
  },
  {
    q: "Can I switch plans anytime?",
    a: "Absolutely. You can upgrade or downgrade your plan at any time. When you upgrade, you get instant access to new features. When you downgrade, your current billing cycle completes first.",
  },
  {
    q: "What are usage fees?",
    a: "Usage fees are small transaction-based charges that apply to specific actions like pageant registrations and booking commissions. These are separate from your subscription and only apply when you use those features.",
  },
  {
    q: "Do you offer discounts for annual billing?",
    a: "Yes — you save 20% when you choose annual billing on any paid plan. The discount is applied automatically when you toggle to annual pricing.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards, debit cards, UPI, and net banking. Enterprise customers can also pay via invoice and bank transfer.",
  },
  {
    q: "Is there a limit on the number of agencies I can connect with?",
    a: "No! On any plan, you can discover and apply to unlimited agencies. The Free plan lets you build a profile and get found — paid plans unlock advanced tools for managing bookings and campaigns.",
  },
  {
    q: "What happens to my data if I downgrade?",
    a: "Your data is never deleted. If you downgrade, features beyond your plan's limit become read-only. You can always upgrade again to regain full access.",
  },
  {
    q: "Do you offer refunds?",
    a: "Yes — if you're not satisfied within the first 14 days of a paid plan, we offer a full refund, no questions asked.",
  },
]

/* ── Trust Stats ── */

const trustStats = [
  { value: "10K+", label: "Talents onboarded" },
  { value: "500+", label: "Verified agencies" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "14-day", label: "Free trial on all paid plans" },
]

/* ── Components ── */

function FAQItem({ item, open, onToggle }: { item: typeof faqs[0]; open: boolean; onToggle: () => void }) {
  return (
    <div style={{ borderBottom: "1px solid #e0e0e0" }}>
      <button
        onClick={onToggle}
        data-testid={`btn-faq-toggle-${item.q.slice(0, 30).replace(/\s+/g, "-").replace(/[^a-zA-Z0-9-]/g, "").toLowerCase()}`}
        aria-label={open ? `Collapse: ${item.q}` : `Expand: ${item.q}`}
        className="w-full flex items-center justify-between py-7 text-left"
      >
        <span className="text-lg sm:text-xl font-bold pr-6" style={{ color: "#111" }}>
          {item.q}
        </span>
        <ChevronDown
          className="w-5 h-5 shrink-0 transition-transform duration-300"
          style={{
            color: "#999",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? 300 : 0,
          opacity: open ? 1 : 0,
        }}
      >
        <p
          className="pb-7 text-[15px] sm:text-base leading-[1.8] max-w-2xl"
          style={{ color: "#555" }}
        >
          {item.a}
        </p>
      </div>
    </div>
  )
}

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  return (
    <div data-testid="section-faq-accordion" aria-label="FAQ accordion" style={{ borderTop: "1px solid #e0e0e0" }}>
      {faqs.map((faq, i) => (
        <FAQItem
          key={faq.q}
          item={faq}
          open={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  )
}

function CellValue({ value }: { value: boolean | string }) {
  if (typeof value === "string") {
    return <span className="text-[13px] font-semibold" style={{ color: "#111" }}>{value}</span>
  }
  if (value === true) {
    return (
      <div className="w-5 h-5 rounded-full flex items-center justify-center mx-auto" style={{ background: "#ecfdf5" }}>
        <Check className="w-3 h-3" style={{ color: "#10b981" }} />
      </div>
    )
  }
  return (
    <div className="w-5 h-5 rounded-full flex items-center justify-center mx-auto" style={{ background: "#f5f5f5" }}>
      <X className="w-3 h-3" style={{ color: "#ccc" }} />
    </div>
  )
}

/* ── Page ── */

export default function PricingPage() {
  const { openAuth } = useAuthModal()
  const [comparisonOpen, setComparisonOpen] = useState(false)

  return (
    <main className="min-h-screen" data-testid="section-pricing-page" aria-label="Pricing page">
      {/* Pricing Cards */}
      <div style={{ paddingTop: 80 }}>
        <PricingSection />
      </div>

      {/* ── Trust Stats ── */}
      <section className="py-16" style={{ background: "#fff" }} data-testid="section-trust-stats" aria-label="Trust statistics">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold mb-1" style={{ color: "#6366f1" }}>{stat.value}</p>
                <p className="text-sm" style={{ color: "#555" }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature Comparison Table ── */}
      <section className="py-20" style={{ background: "#f5f5f7" }} data-testid="section-feature-comparison" aria-label="Feature comparison">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p
              className="text-[11px] font-bold uppercase tracking-[0.4em] mb-3"
              style={{ color: "#6366f1" }}
            >
              Compare Plans
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold leading-tight mb-4"
              style={{ color: "#111" }}
            >
              Find the perfect plan for you
            </h2>
            <p className="text-base max-w-lg mx-auto" style={{ color: "#555" }}>
              Every feature across every plan — side by side.
            </p>
          </div>

          <button
            onClick={() => setComparisonOpen(!comparisonOpen)}
            data-testid="btn-toggle-comparison"
            aria-label={comparisonOpen ? "Hide feature comparison table" : "Show feature comparison table"}
            className="mx-auto flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 mb-8"
            style={{
              background: comparisonOpen ? "#111" : "#fff",
              color: comparisonOpen ? "#fff" : "#111",
              border: "1px solid #ddd",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}
          >
            {comparisonOpen ? "Hide comparison" : "Show full comparison"}
            <ChevronDown
              className="w-4 h-4 transition-transform duration-300"
              style={{ transform: comparisonOpen ? "rotate(180deg)" : "rotate(0)" }}
            />
          </button>

          {comparisonOpen && (
            <div
              className="rounded-2xl overflow-hidden overflow-x-auto"
              style={{
                background: "#fff",
                border: "1px solid #e5e7eb",
                boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
              }}
            >
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr style={{ borderBottom: "2px solid #f0f0f0" }}>
                    <th className="text-left px-6 py-4 text-sm font-bold" style={{ color: "#111", width: "30%" }}>
                      Feature
                    </th>
                    <th className="text-center px-3 py-4 text-xs font-bold uppercase tracking-wider" style={{ color: "#10b981" }}>Free</th>
                    <th className="text-center px-3 py-4 text-xs font-bold uppercase tracking-wider" style={{ color: "#64748b" }}>Starter</th>
                    <th className="text-center px-3 py-4 text-xs font-bold uppercase tracking-wider" style={{ color: "#6366f1" }}>Pro</th>
                    <th className="text-center px-3 py-4 text-xs font-bold uppercase tracking-wider" style={{ color: "#0ea5e9" }}>Studio</th>
                    <th className="text-center px-3 py-4 text-xs font-bold uppercase tracking-wider" style={{ color: "#f59e0b" }}>Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonCategories.map((cat) => (
                    <Fragment key={cat.name}>
                      <tr>
                        <td
                          colSpan={6}
                          className="px-6 py-3 text-[12px] font-bold uppercase tracking-widest"
                          style={{ color: "#6366f1", background: "#fafafa" }}
                        >
                          {cat.name}
                        </td>
                      </tr>
                      {cat.features.map((feat) => (
                        <tr key={feat.name} style={{ borderBottom: "1px solid #f5f5f5" }}>
                          <td className="px-6 py-3 text-[13px]" style={{ color: "#333" }}>{feat.name}</td>
                          <td className="text-center px-3 py-3"><CellValue value={feat.free} /></td>
                          <td className="text-center px-3 py-3"><CellValue value={feat.starter} /></td>
                          <td className="text-center px-3 py-3"><CellValue value={feat.pro} /></td>
                          <td className="text-center px-3 py-3"><CellValue value={feat.studio} /></td>
                          <td className="text-center px-3 py-3"><CellValue value={feat.enterprise} /></td>
                        </tr>
                      ))}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      {/* ── What's Included in Every Plan ── */}
      <section className="py-20" style={{ background: "#fff" }} data-testid="section-every-plan-includes" aria-label="Features included in every plan">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p
              className="text-[11px] font-bold uppercase tracking-[0.4em] mb-3"
              style={{ color: "#6366f1" }}
            >
              Every Plan Includes
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight" style={{ color: "#111" }}>
              Built-in essentials on every plan
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Shield, title: "Enterprise-grade security", desc: "AES-256 encryption, tenant isolation, and immutable audit logs." },
              { icon: Users, title: "Community access", desc: "Connect with other talents, share tips, and grow together." },
              { icon: Sparkles, title: "Opportunity feed", desc: "Browse casting calls, brand deals, and gig opportunities." },
              { icon: Zap, title: "Instant onboarding", desc: "Go live in under 10 minutes with guided profile setup." },
              { icon: Shield, title: "GDPR & DPDP compliant", desc: "Your data is protected by design, with full consent controls." },
              { icon: HelpCircle, title: "Help center & docs", desc: "Comprehensive guides, tutorials, and troubleshooting resources." },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1"
                  style={{
                    background: "#fafafa",
                    border: "1px solid #e8e8ec",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: "rgba(99,102,241,0.08)" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "#6366f1" }} />
                  </div>
                  <h3 className="text-[15px] font-bold mb-1.5" style={{ color: "#111" }}>{item.title}</h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: "#555" }}>{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 lg:py-28" style={{ background: "#f5f5f7" }} data-testid="section-faq" aria-label="Frequently asked questions">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <h2
            className="text-3xl sm:text-4xl lg:text-[2.8rem] font-bold leading-tight text-center mb-14"
            style={{ color: "#111" }}
          >
            Frequently Asked Questions
          </h2>

          <FAQAccordion />
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-20" style={{ background: "#fff" }} data-testid="section-bottom-cta" aria-label="Call to action">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-4" style={{ color: "#111" }}>
            Ready to get started?
          </h2>
          <p className="text-base leading-relaxed mb-8" style={{ color: "#555" }}>
            Join thousands of talents and agencies already growing on TalentOS. Start free — no credit card required.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => openAuth()}
              data-testid="btn-start-free"
              aria-label="Start free account"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", boxShadow: "0 4px 16px rgba(99,102,241,0.3)" }}
            >
              Start Free <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => openAuth()}
              data-testid="btn-contact-sales"
              aria-label="Contact sales team"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 hover:bg-gray-50"
              style={{ color: "#333", background: "#fff", border: "1px solid #e5e7eb" }}
            >
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
