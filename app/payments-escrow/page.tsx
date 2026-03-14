"use client"

import { useAuthModal } from "@/components/auth-modal"
import {
  CreditCard,
  Wallet,
  ArrowRight,
  ChevronRight,
  CheckCircle,
  ShieldCheck,
  Landmark,
  ArrowDownUp,
  Timer,
  BadgeDollarSign,
  BarChart3,
  Lock,
} from "lucide-react"

const keyFeatures = [
  {
    icon: Wallet,
    title: "Digital Wallets",
    description:
      "Every talent, agency, and client gets a dedicated wallet. Track balances, view transaction history, and manage funds in real time.",
  },
  {
    icon: ArrowDownUp,
    title: "Instant Payouts",
    description:
      "Pay talent directly from the platform. Support for bank transfers, UPI, and international wire with automatic fee calculation.",
  },
  {
    icon: Lock,
    title: "Milestone Escrow",
    description:
      "Funds are locked in escrow until deliverables are approved. Protect both parties with transparent milestone-based releases.",
  },
  {
    icon: BadgeDollarSign,
    title: "Commission Splitting",
    description:
      "Automatically calculate and distribute agency commissions, talent fees, and platform charges from every transaction.",
  },
  {
    icon: BarChart3,
    title: "Financial Dashboard",
    description:
      "Real-time overview of revenue, pending payouts, escrow balances, and commission earnings across all your projects.",
  },
  {
    icon: ShieldCheck,
    title: "Fraud Protection",
    description:
      "Built-in fraud detection, KYC verification, and chargeback protection to keep every transaction secure and compliant.",
  },
]

const processSteps = [
  {
    step: "01",
    title: "Fund",
    description:
      "Client deposits payment into a secure escrow wallet tied to the booking or project.",
  },
  {
    step: "02",
    title: "Lock",
    description:
      "Funds are held in escrow with milestone conditions visible to all parties.",
  },
  {
    step: "03",
    title: "Approve",
    description:
      "Once deliverables are completed and approved, the milestone is marked as fulfilled.",
  },
  {
    step: "04",
    title: "Release",
    description:
      "Funds are instantly released to talent and agency wallets with commissions auto-split.",
  },
]

const paymentMethods = [
  {
    name: "Bank Transfer",
    description: "Direct bank-to-bank transfers with automatic reconciliation and settlement tracking.",
    supported: ["Domestic NEFT/RTGS", "SWIFT international", "Auto-reconciliation", "Settlement reports"],
  },
  {
    name: "UPI & Cards",
    description: "Accept payments via UPI, debit cards, and credit cards with instant confirmation.",
    supported: ["UPI collect & intent", "Visa / Mastercard", "Auto-retry on failure", "Instant receipts"],
  },
  {
    name: "International Wire",
    description: "Cross-border payments with competitive FX rates and compliance-ready documentation.",
    supported: ["Multi-currency support", "Competitive FX rates", "FIRA certificates", "Tax documentation"],
  },
  {
    name: "Platform Credits",
    description: "Pre-loaded wallet credits for faster transactions and bulk booking discounts.",
    supported: ["Bulk top-up discounts", "Auto-debit for bookings", "Refund to wallet", "Credit expiry rules"],
  },
]

const escrowTiers = [
  {
    tier: "Standard",
    description: "Single milestone escrow for straightforward bookings and one-time projects.",
    features: [
      "Single milestone release",
      "7-day dispute window",
      "Basic payout splitting",
      "Email notifications",
    ],
  },
  {
    tier: "Multi-Milestone",
    description: "Break large projects into multiple milestones with independent escrow locks.",
    features: [
      "Up to 10 milestones",
      "Independent lock & release",
      "Partial release support",
      "Progress tracking dashboard",
    ],
  },
  {
    tier: "Enterprise",
    description: "Custom escrow workflows for production houses, campaigns, and large-scale events.",
    features: [
      "Unlimited milestones",
      "Custom approval chains",
      "Multi-party splitting",
      "Dedicated account manager",
    ],
  },
]

export default function PaymentsEscrowPage() {
  const { openAuth } = useAuthModal()
  return (
    <main className="min-h-screen">
      {/* ───── HERO SECTION ───── */}
      <section
        className="relative w-full overflow-hidden py-20 lg:py-28 pt-32"
        style={{ background: "#fff" }}
      >
        <div
          className="absolute z-[1] rounded-full pointer-events-none"
          style={{
            width: 800,
            height: 800,
            top: -200,
            right: -200,
            background:
              "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute z-[1] rounded-full pointer-events-none"
          style={{
            width: 600,
            height: 600,
            bottom: -100,
            left: -100,
            background:
              "radial-gradient(circle, rgba(16,185,129,0.04) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 text-center">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-7"
            style={{
              background: "rgba(16,185,129,0.08)",
              border: "1px solid rgba(16,185,129,0.15)",
              color: "#10b981",
            }}
          >
            <CreditCard className="w-3 h-3" />
            Payments & Escrow
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-6">
            <span style={{ color: "#111" }}>
              Secure payments, transparent escrow
            </span>
            <br />
            <span style={{ color: "#10b981" }}>
              built for talent management.
            </span>
          </h1>

          <p
            className="text-[16px] leading-relaxed mb-8 max-w-lg mx-auto"
            style={{ color: "#555" }}
          >
            Wallets, milestone escrow, instant payouts, and automatic commission
            splitting — everything your agency needs to handle money with
            confidence.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => openAuth()}
              className="inline-flex items-center gap-2 font-bold px-7 py-3.5 text-sm rounded-full text-white hover:scale-[1.02] transition-all duration-200"
              style={{
                background: "#10b981",
                boxShadow: "0 4px 16px rgba(16,185,129,0.3)",
              }}
            >
              Join Waitlist
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* ───── SECTION 2: Key Features Grid ───── */}
      <section
        className="relative py-24 lg:py-28 overflow-hidden"
        style={{ background: "#f5f5f7" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-14 text-center">
            <p
              className="text-[11px] font-bold uppercase tracking-[0.4em] mb-3"
              style={{ color: "#10b981" }}
            >
              The Toolkit
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-[3.2rem] font-bold leading-tight mb-4"
              style={{ color: "#111" }}
            >
              Everything you need for
              <br />
              <span style={{ color: "#555" }}>payments & escrow.</span>
            </h2>
            <p
              className="text-sm max-w-lg mx-auto leading-relaxed"
              style={{ color: "#555" }}
            >
              A complete financial toolkit built specifically for talent agencies,
              production houses, and management companies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {keyFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="group rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                  style={{
                    background: "#fff",
                    border: "1px solid #e8e8ec",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mb-5"
                    style={{
                      background: "rgba(16,185,129,0.08)",
                      border: "1px solid rgba(16,185,129,0.12)",
                    }}
                  >
                    <Icon
                      className="w-5 h-5"
                      style={{ color: "#10b981" }}
                    />
                  </div>
                  <h3
                    className="font-semibold text-[18px] leading-snug mb-1.5"
                    style={{ color: "#111" }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-[13px] leading-relaxed"
                    style={{ color: "#555" }}
                  >
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ───── SECTION 3: Escrow Process Flow ───── */}
      <section className="py-24 lg:py-28" style={{ background: "#fff" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p
              className="text-[11px] font-bold uppercase tracking-[0.4em] mb-3"
              style={{ color: "#10b981" }}
            >
              Escrow Flow
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-[3.2rem] font-bold leading-tight mb-4"
              style={{ color: "#111" }}
            >
              From deposit to payout
            </h2>
            <p
              className="text-sm max-w-lg mx-auto leading-relaxed"
              style={{ color: "#555" }}
            >
              A transparent four-step process that protects every party in the
              transaction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                <div
                  className="rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] h-full"
                  style={{
                    background: "#fafafa",
                    border: "1px solid #e8e8ec",
                  }}
                >
                  <span
                    className="text-5xl font-bold block mb-4"
                    style={{ color: "rgba(16,185,129,0.15)" }}
                  >
                    {step.step}
                  </span>
                  <h3
                    className="text-[18px] font-bold leading-snug mb-2"
                    style={{ color: "#111" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-[13px] leading-relaxed"
                    style={{ color: "#555" }}
                  >
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ChevronRight
                      className="w-5 h-5"
                      style={{ color: "#10b981" }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── SECTION 4: Payment Methods ───── */}
      <section
        className="relative py-24 lg:py-28 overflow-hidden"
        style={{ background: "#f5f5f7" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p
              className="text-[11px] font-bold uppercase tracking-[0.4em] mb-3"
              style={{ color: "#10b981" }}
            >
              Payment Methods
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-[3.2rem] font-bold leading-tight mb-4"
              style={{ color: "#111" }}
            >
              Every way to{" "}
              <span style={{ color: "#10b981" }}>pay & get paid.</span>
            </h2>
            <p
              className="text-sm max-w-lg mx-auto leading-relaxed"
              style={{ color: "#555" }}
            >
              Flexible payment options for domestic and international talent
              transactions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {paymentMethods.map((method, index) => (
              <div
                key={index}
                className="rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                style={{
                  background: "#fff",
                  border: "1px solid #e8e8ec",
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Landmark
                    className="w-5 h-5"
                    style={{ color: "#10b981" }}
                  />
                  <h3
                    className="font-semibold text-[16px]"
                    style={{ color: "#111" }}
                  >
                    {method.name}
                  </h3>
                </div>
                <p
                  className="text-[13px] leading-relaxed mb-5"
                  style={{ color: "#555" }}
                >
                  {method.description}
                </p>
                <ul className="space-y-3">
                  {method.supported.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle
                        className="w-4 h-4 shrink-0 mt-0.5"
                        style={{ color: "#10b981" }}
                      />
                      <span
                        className="text-[13px] leading-relaxed"
                        style={{ color: "#555" }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── SECTION 5: Escrow Tiers ───── */}
      <section className="py-24 lg:py-28" style={{ background: "#fff" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p
              className="text-[11px] font-bold uppercase tracking-[0.4em] mb-3"
              style={{ color: "#10b981" }}
            >
              Escrow Tiers
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-[3.2rem] font-bold leading-tight mb-4"
              style={{ color: "#111" }}
            >
              Escrow that scales{" "}
              <span style={{ color: "#555" }}>with your agency.</span>
            </h2>
            <p
              className="text-sm max-w-lg mx-auto leading-relaxed"
              style={{ color: "#555" }}
            >
              From simple bookings to complex multi-party productions, choose the
              escrow tier that fits your workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {escrowTiers.map((tier, index) => (
              <div
                key={index}
                className="rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                style={{
                  background: "#fafafa",
                  border: "1px solid #e8e8ec",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="inline-flex items-center justify-center w-10 h-10 rounded-xl"
                    style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.12)" }}
                  >
                    <Timer className="w-5 h-5" style={{ color: "#10b981" }} />
                  </span>
                  <h3
                    className="font-bold text-[18px] leading-snug"
                    style={{ color: "#111" }}
                  >
                    {tier.tier}
                  </h3>
                </div>
                <p
                  className="text-[13px] leading-relaxed mb-5"
                  style={{ color: "#555" }}
                >
                  {tier.description}
                </p>
                <ul className="space-y-3">
                  {tier.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle
                        className="w-4 h-4 shrink-0 mt-0.5"
                        style={{ color: "#10b981" }}
                      />
                      <span
                        className="text-[13px] leading-relaxed"
                        style={{ color: "#555" }}
                      >
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── SECTION 6: CTA ───── */}
      <section
        className="relative py-24 lg:py-28"
        style={{ background: "#f5f5f7" }}
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "#111" }}
          >
            Ready to simplify your{" "}
            <span style={{ color: "#10b981" }}>payments?</span>
          </h2>
          <p
            className="text-sm leading-relaxed mb-8"
            style={{ color: "#555" }}
          >
            Join the waitlist and be among the first to experience secure
            payments and escrow built for talent agencies.
          </p>
          <button
            onClick={() => openAuth()}
            className="inline-flex items-center gap-2 font-bold px-8 py-3.5 text-sm rounded-full text-white hover:scale-[1.02] transition-all duration-200"
            style={{
              background: "#10b981",
              boxShadow: "0 4px 16px rgba(16,185,129,0.3)",
            }}
          >
            Join the Waitlist
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </main>
  )
}
