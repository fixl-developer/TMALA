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

const cardColors = [
  { bg: "#f3e8ff", icon: "#7c3aed" },  // purple
  { bg: "#dbeafe", icon: "#2563eb" },  // blue
  { bg: "#fef9c3", icon: "#ca8a04" },  // yellow
  { bg: "#fce7f3", icon: "#db2777" },  // pink
  { bg: "#d1fae5", icon: "#059669" },  // green
  { bg: "#ffedd5", icon: "#ea580c" },  // orange
]

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
        className="relative w-full overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32"
        style={{ background: "#0a0a0a" }}
      >
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Emerald glow top-right */}
        <div
          className="absolute pointer-events-none rounded-full"
          style={{
            width: 500,
            height: 500,
            top: -100,
            right: -100,
            background:
              "radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        {/* Amber glow bottom-left */}
        <div
          className="absolute pointer-events-none rounded-full"
          style={{
            width: 400,
            height: 400,
            bottom: -50,
            left: -50,
            background:
              "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Text */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-7"
                style={{
                  background: "rgba(16,185,129,0.1)",
                  border: "1px solid rgba(16,185,129,0.2)",
                  color: "#10b981",
                }}
              >
                <CreditCard className="w-3 h-3" />
                Payments & Escrow
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
                <span className="text-white">
                  Secure payments,
                  <br />
                  transparent escrow
                </span>
                <br />
                <span style={{ color: "#10b981" }}>
                  built for talent management.
                </span>
              </h1>

              <p
                className="text-[16px] leading-relaxed mb-8 max-w-lg"
                style={{ color: "#a1a1aa" }}
              >
                Wallets, milestone escrow, instant payouts, and automatic commission
                splitting — everything your agency needs to handle money with
                confidence.
              </p>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => openAuth()}
                  className="inline-flex items-center gap-2 font-bold px-7 py-3.5 text-sm rounded-full text-white hover:scale-[1.02] transition-all duration-200"
                  style={{
                    background: "#10b981",
                    boxShadow: "0 4px 24px rgba(16,185,129,0.35)",
                  }}
                >
                  Join Waitlist
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right — Isometric visual */}
            <div className="relative flex items-center justify-center">
              {/* Central shield / vault icon */}
              <div className="relative">
                {/* Hexagon glow behind */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)",
                    filter: "blur(40px)",
                  }}
                />

                {/* Main vault box */}
                <div
                  className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-2xl flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                    boxShadow:
                      "0 20px 60px rgba(16,185,129,0.3), 0 0 0 1px rgba(255,255,255,0.1) inset",
                    transform: "rotate(-5deg)",
                  }}
                >
                  <Lock className="w-16 h-16 sm:w-20 sm:h-20 text-white drop-shadow-lg" />
                </div>

                {/* Floating cards around */}
                {/* Top-right: Wallet */}
                <div
                  className="absolute -top-10 -right-16 sm:-top-12 sm:-right-20 rounded-xl px-4 py-3 flex items-center gap-2.5"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <Wallet className="w-5 h-5" style={{ color: "#10b981" }} />
                  <div>
                    <p className="text-[11px] font-bold text-white leading-none">Digital Wallet</p>
                    <p className="text-[10px] mt-0.5" style={{ color: "#a1a1aa" }}>Real-time balance</p>
                  </div>
                </div>

                {/* Bottom-left: Commission */}
                <div
                  className="absolute -bottom-8 -left-20 sm:-bottom-10 sm:-left-28 rounded-xl px-4 py-3 flex items-center gap-2.5"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <BadgeDollarSign className="w-5 h-5" style={{ color: "#f59e0b" }} />
                  <div>
                    <p className="text-[11px] font-bold text-white leading-none">Auto Split</p>
                    <p className="text-[10px] mt-0.5" style={{ color: "#a1a1aa" }}>Commission ready</p>
                  </div>
                </div>

                {/* Top-left: Shield */}
                <div
                  className="absolute -top-14 -left-10 sm:-top-16 sm:-left-14 rounded-xl px-4 py-3 flex items-center gap-2.5"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <ShieldCheck className="w-5 h-5" style={{ color: "#6366f1" }} />
                  <div>
                    <p className="text-[11px] font-bold text-white leading-none">KYC Verified</p>
                    <p className="text-[10px] mt-0.5" style={{ color: "#a1a1aa" }}>Fraud protected</p>
                  </div>
                </div>

                {/* Bottom-right: Payout */}
                <div
                  className="absolute -bottom-12 -right-12 sm:-bottom-14 sm:-right-16 rounded-xl px-4 py-3 flex items-center gap-2.5"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <ArrowDownUp className="w-5 h-5" style={{ color: "#10b981" }} />
                  <div>
                    <p className="text-[11px] font-bold text-white leading-none">Instant Payout</p>
                    <p className="text-[10px] mt-0.5" style={{ color: "#a1a1aa" }}>Bank / UPI / Wire</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── VIDEO SHOWCASE SECTION ───── */}
      <section className="relative w-full overflow-hidden">
        <video
          className="w-full h-auto block"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/escrow.mp4" type="video/mp4" />
        </video>
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
              const color = cardColors[index]
              return (
                <div
                  key={index}
                  className="rounded-2xl p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1"
                  style={{ background: color.bg }}
                >
                  <h3
                    className="font-bold text-xl leading-snug mb-3"
                    style={{ color: "#111" }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-[14px] leading-relaxed"
                    style={{ color: "#333" }}
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
            {processSteps.map((step, index) => {
              const stepColors = ["#dbeafe", "#d1fae5", "#fef9c3", "#f3e8ff"]
              return (
              <div key={index} className="relative group">
                <div
                  className="rounded-2xl p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1 h-full"
                  style={{ background: stepColors[index] }}
                >
                  <span
                    className="text-5xl font-bold block mb-4"
                    style={{ color: "rgba(0,0,0,0.1)" }}
                  >
                    {step.step}
                  </span>
                  <h3
                    className="text-xl font-bold leading-snug mb-2"
                    style={{ color: "#111" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-[14px] leading-relaxed"
                    style={{ color: "#333" }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            )})}
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
            {paymentMethods.map((method, index) => {
              const pmColors = ["#dbeafe", "#fce7f3", "#fef9c3", "#d1fae5"]
              return (
                <div
                  key={index}
                  className="rounded-2xl p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1"
                  style={{ background: pmColors[index] }}
                >
                  <h3
                    className="font-bold text-xl mb-2"
                    style={{ color: "#111" }}
                  >
                    {method.name}
                  </h3>
                  <p
                    className="text-[14px] leading-relaxed mb-5"
                    style={{ color: "#333" }}
                  >
                    {method.description}
                  </p>
                  <ul className="space-y-2.5">
                    {method.supported.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle
                          className="w-4 h-4 shrink-0 mt-0.5"
                          style={{ color: "#111" }}
                        />
                        <span
                          className="text-[13px] leading-relaxed"
                          style={{ color: "#333" }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
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
            {escrowTiers.map((tier, index) => {
              const tierColors = ["#ffedd5", "#dbeafe", "#f3e8ff"]
              return (
                <div
                  key={index}
                  className="rounded-2xl p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1"
                  style={{ background: tierColors[index] }}
                >
                  <h3
                    className="font-bold text-xl leading-snug mb-2"
                    style={{ color: "#111" }}
                  >
                    {tier.tier}
                  </h3>
                  <p
                    className="text-[14px] leading-relaxed mb-5"
                    style={{ color: "#333" }}
                  >
                    {tier.description}
                  </p>
                  <ul className="space-y-2.5">
                    {tier.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle
                          className="w-4 h-4 shrink-0 mt-0.5"
                          style={{ color: "#111" }}
                        />
                        <span
                          className="text-[13px] leading-relaxed"
                          style={{ color: "#333" }}
                        >
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
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
