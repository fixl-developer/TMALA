"use client"

import { useAuthModal } from "@/components/auth-modal"
import {
  FileText,
  BookOpen,
  PenTool,
  Sparkles,
  GitBranch,
  CheckCircle,
  ArrowRight,
  FileSignature,
  ChevronRight,
} from "lucide-react"

const keyFeatures = [
  {
    icon: FileText,
    title: "Contract Templates",
    description:
      "Pre-built templates for every agency type (T1-T7). Start with industry-standard contracts tailored to your specific vertical.",
  },
  {
    icon: BookOpen,
    title: "Clause Library",
    description:
      "25+ standard clauses across 5 libraries. Mix and match clauses to build contracts that protect your interests.",
  },
  {
    icon: PenTool,
    title: "E-Signature Flow",
    description:
      "Digital signatures with approval workflows. Send, track, and collect legally binding signatures in minutes.",
  },
  {
    icon: Sparkles,
    title: "Contract Generation",
    description:
      "Auto-generate contracts from bookings and quotes. Eliminate manual drafting with intelligent document assembly.",
  },
  {
    icon: GitBranch,
    title: "Version Control",
    description:
      "Track redlines, revisions, and amendments. Full audit trail of every change with side-by-side comparisons.",
  },
  {
    icon: CheckCircle,
    title: "Obligation Tracking",
    description:
      "Monitor deliverables, renewals, and expiry dates. Never miss a deadline with automated alerts and reminders.",
  },
]

const processSteps = [
  {
    step: "01",
    title: "Create",
    description:
      "Generate contracts from templates or build custom agreements with the clause library.",
  },
  {
    step: "02",
    title: "Review",
    description:
      "Collaborate on redlines and revisions with full version control and approval workflows.",
  },
  {
    step: "03",
    title: "Sign",
    description:
      "Collect legally binding e-signatures from all parties with automated routing.",
  },
  {
    step: "04",
    title: "Track",
    description:
      "Monitor obligations, renewals, and compliance with real-time dashboards and alerts.",
  },
]

const templateCategories = [
  {
    code: "T1",
    name: "Roster & Booking Agency",
    description:
      "Talent booking agreements, exclusivity terms, and commission structures.",
  },
  {
    code: "T2",
    name: "Casting Pipeline",
    description:
      "Casting call agreements, audition terms, and role assignment contracts.",
  },
  {
    code: "T3",
    name: "Pageant Operator",
    description:
      "Contestant agreements, sponsorship deals, and event participation terms.",
  },
  {
    code: "T4",
    name: "Influencer/Brand Agency",
    description:
      "Brand partnership agreements, content deliverables, and usage rights.",
  },
  {
    code: "T5",
    name: "Academy/Training",
    description:
      "Enrollment agreements, training programs, and certification terms.",
  },
  {
    code: "T6",
    name: "Production House",
    description:
      "Production agreements, crew contracts, and location release forms.",
  },
  {
    code: "T7",
    name: "Event Management",
    description:
      "Vendor contracts, venue agreements, and event coordination terms.",
  },
]

const clauseLibraries = [
  {
    name: "General",
    clauses: [
      "Definitions & Interpretations",
      "Term & Termination",
      "Force Majeure",
      "Dispute Resolution",
      "Governing Law",
    ],
  },
  {
    name: "Finance",
    clauses: [
      "Payment Terms",
      "Commission Structure",
      "Late Fees & Penalties",
      "Revenue Share",
      "Expense Reimbursement",
    ],
  },
  {
    name: "Workflow",
    clauses: [
      "Scope of Work",
      "Deliverables & Milestones",
      "Approval Process",
      "Change Orders",
      "Performance Standards",
    ],
  },
  {
    name: "Compliance",
    clauses: [
      "Non-Compete",
      "Non-Solicitation",
      "Intellectual Property",
      "Indemnification",
      "Liability Limitations",
    ],
  },
  {
    name: "Privacy",
    clauses: [
      "Data Protection",
      "Confidentiality",
      "Image & Likeness Rights",
      "Consent & Authorization",
      "Data Retention",
    ],
  },
]

export default function ContractsPage() {
  const { openAuth } = useAuthModal()
  return (
    <main className="min-h-screen" data-testid="page-contracts" aria-label="Contracts page">
      {/* ───── HERO SECTION ───── */}
      <section
        className="relative w-full overflow-hidden py-20 lg:py-28 pt-32"
        style={{ background: "#fff" }}
        data-testid="section-hero"
        aria-label="Contracts hero section"
      >
        {/* Subtle ambient glow */}
        <div
          className="absolute z-[1] rounded-full pointer-events-none"
          style={{
            width: 800,
            height: 800,
            top: -200,
            right: -200,
            background:
              "radial-gradient(circle, rgba(13,148,136,0.06) 0%, transparent 70%)",
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
              "radial-gradient(circle, rgba(13,148,136,0.04) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-7"
            style={{
              background: "rgba(13,148,136,0.08)",
              border: "1px solid rgba(13,148,136,0.15)",
              color: "#0d9488",
            }}
          >
            <FileSignature className="w-3 h-3" />
            Contracts & E-Sign
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-6">
            <span style={{ color: "#111" }}>
              Manage the full contract lifecycle
            </span>
            <br />
            <span style={{ color: "#0d9488" }}>
              from creation to execution.
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-[16px] leading-relaxed mb-8 max-w-lg mx-auto"
            style={{ color: "#555" }}
          >
            Generate, negotiate, sign, and track every agreement across your
            agency — all in one intelligent platform built for talent
            management.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => openAuth()}
              className="inline-flex items-center gap-2 font-bold px-7 py-3.5 text-sm rounded-full text-white hover:scale-[1.02] transition-all duration-200"
              style={{
                background: "#0d9488",
                boxShadow: "0 4px 16px rgba(13,148,136,0.3)",
              }}
              data-testid="btn-hero-join-waitlist"
              aria-label="Join Waitlist"
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
        data-testid="section-key-features"
        aria-label="Key features"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-14 text-center">
            <p
              className="text-[11px] font-bold uppercase tracking-[0.4em] mb-3"
              style={{ color: "#0d9488" }}
            >
              The Toolkit
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-[3.2rem] font-bold leading-tight mb-4"
              style={{ color: "#111" }}
            >
              Everything you need for
              <br />
              <span style={{ color: "#555" }}>contract management.</span>
            </h2>
            <p
              className="text-sm max-w-lg mx-auto leading-relaxed"
              style={{ color: "#555" }}
            >
              A complete contract management suite built specifically for talent
              management agencies.
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
                      background: "rgba(13,148,136,0.08)",
                      border: "1px solid rgba(13,148,136,0.12)",
                    }}
                  >
                    <Icon
                      className="w-5 h-5"
                      style={{ color: "#0d9488" }}
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

      {/* ───── SECTION 3: Process Flow ───── */}
      <section className="py-24 lg:py-28" style={{ background: "#fff" }} data-testid="section-process-flow" aria-label="Process flow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p
              className="text-[11px] font-bold uppercase tracking-[0.4em] mb-3"
              style={{ color: "#0d9488" }}
            >
              Process Flow
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-[3.2rem] font-bold leading-tight mb-4"
              style={{ color: "#111" }}
            >
              From draft to done
            </h2>
            <p
              className="text-sm max-w-lg mx-auto leading-relaxed"
              style={{ color: "#555" }}
            >
              A streamlined workflow that keeps every contract moving forward.
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
                    style={{ color: "rgba(13,148,136,0.15)" }}
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
                      style={{ color: "#0d9488" }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── SECTION 4: Template Categories T1-T7 ───── */}
      <section
        className="relative py-24 lg:py-28 overflow-hidden"
        style={{ background: "#f5f5f7" }}
        data-testid="section-template-categories"
        aria-label="Template categories"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p
              className="text-[11px] font-bold uppercase tracking-[0.4em] mb-3"
              style={{ color: "#0d9488" }}
            >
              Template Library
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-[3.2rem] font-bold leading-tight mb-4"
              style={{ color: "#111" }}
            >
              Template categories{" "}
              <span style={{ color: "#0d9488" }}>T1 - T7</span>
            </h2>
            <p
              className="text-sm max-w-lg mx-auto leading-relaxed"
              style={{ color: "#555" }}
            >
              Purpose-built contract templates for every type of talent
              management agency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {templateCategories.map((template, index) => (
              <div
                key={index}
                className="group rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                style={{
                  background: "#fff",
                  border: "1px solid #e8e8ec",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="inline-flex items-center justify-center w-10 h-10 rounded-xl text-sm font-bold text-white"
                    style={{ background: "#0d9488" }}
                  >
                    {template.code}
                  </span>
                  <h3
                    className="font-semibold text-[15px] leading-snug"
                    style={{ color: "#111" }}
                  >
                    {template.name}
                  </h3>
                </div>
                <p
                  className="text-[13px] leading-relaxed"
                  style={{ color: "#555" }}
                >
                  {template.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── SECTION 5: Clause Libraries ───── */}
      <section className="py-24 lg:py-28" style={{ background: "#fff" }} data-testid="section-clause-libraries" aria-label="Clause libraries">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p
              className="text-[11px] font-bold uppercase tracking-[0.4em] mb-3"
              style={{ color: "#0d9488" }}
            >
              Clause Libraries
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-[3.2rem] font-bold leading-tight mb-4"
              style={{ color: "#111" }}
            >
              Five curated libraries,{" "}
              <span style={{ color: "#555" }}>25+ clauses.</span>
            </h2>
            <p
              className="text-sm max-w-lg mx-auto leading-relaxed"
              style={{ color: "#555" }}
            >
              Pre-approved clauses ready to drop into any contract across your
              agency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {clauseLibraries.map((library, index) => (
              <div
                key={index}
                className="rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                style={{
                  background: "#fafafa",
                  border: "1px solid #e8e8ec",
                }}
              >
                <div className="flex items-center gap-2 mb-5">
                  <BookOpen
                    className="w-5 h-5"
                    style={{ color: "#0d9488" }}
                  />
                  <h3
                    className="font-semibold text-[16px]"
                    style={{ color: "#111" }}
                  >
                    {library.name}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {library.clauses.map((clause, cIndex) => (
                    <li key={cIndex} className="flex items-start gap-2">
                      <CheckCircle
                        className="w-4 h-4 shrink-0 mt-0.5"
                        style={{ color: "#0d9488" }}
                      />
                      <span
                        className="text-[13px] leading-relaxed"
                        style={{ color: "#555" }}
                      >
                        {clause}
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
        data-testid="section-cta"
        aria-label="Call to action"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "#111" }}
          >
            Ready to streamline your{" "}
            <span style={{ color: "#0d9488" }}>contracts?</span>
          </h2>
          <p
            className="text-sm leading-relaxed mb-8"
            style={{ color: "#555" }}
          >
            Join the waitlist and be among the first to experience a contract
            management platform built for talent agencies.
          </p>
          <button
            onClick={() => openAuth()}
            className="inline-flex items-center gap-2 font-bold px-8 py-3.5 text-sm rounded-full text-white hover:scale-[1.02] transition-all duration-200"
            style={{
              background: "#0d9488",
              boxShadow: "0 4px 16px rgba(13,148,136,0.3)",
            }}
            data-testid="btn-cta-join-waitlist"
            aria-label="Join the Waitlist"
          >
            Join the Waitlist
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </main>
  )
}
