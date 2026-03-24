"use client"

import { useAuthModal } from "@/components/auth-modal"
import {
  Scale,
  Eye,
  AlertTriangle,
  Fingerprint,
  Shield,
  FileCheck,
  Flag,
  FileText,
  Users,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
} from "lucide-react"

const features = [
  {
    icon: Scale,
    title: "Dispute Resolution",
    description:
      "Full lifecycle dispute management with evidence collection, mediation workflows, and binding arbitration for fair outcomes.",
  },
  {
    icon: Eye,
    title: "Content Moderation",
    description:
      "AI-powered content review with automated flagging, human-in-the-loop verification, and swift takedown workflows.",
  },
  {
    icon: AlertTriangle,
    title: "Fraud Detection",
    description:
      "Real-time anomaly detection and risk scoring to identify suspicious activity before it impacts your business.",
  },
  {
    icon: Fingerprint,
    title: "Identity Verification",
    description:
      "KYC checks, government document verification, and credential proofs to ensure every user is who they claim to be.",
  },
  {
    icon: Shield,
    title: "Compliance Engine",
    description:
      "Built-in readiness for GDPR, India DPDP Act, SOC 2, and ISO 27001 so you stay compliant without extra overhead.",
  },
  {
    icon: FileCheck,
    title: "Audit Trail",
    description:
      "Immutable, append-only logs for every action on the platform, giving you a tamper-proof record for regulators and stakeholders.",
  },
]

const disputeSteps = [
  {
    step: 1,
    icon: Flag,
    title: "Issue Raised",
    description: "A talent or agency flags a problem through the platform's built-in dispute portal.",
  },
  {
    step: 2,
    icon: FileText,
    title: "Evidence Collection",
    description: "Both parties submit documentation, screenshots, contracts, and supporting materials.",
  },
  {
    step: 3,
    icon: Users,
    title: "Mediation",
    description: "The platform reviews all evidence and mediates between the parties to reach consensus.",
  },
  {
    step: 4,
    icon: CheckCircle,
    title: "Resolution",
    description: "A fair outcome is delivered with enforcement mechanisms to ensure compliance.",
  },
]

const complianceBadges = [
  { name: "SOC 2 Type II", description: "Enterprise-grade security controls audited annually" },
  { name: "GDPR", description: "Full EU data protection regulation compliance" },
  { name: "India DPDP Act", description: "Digital Personal Data Protection Act readiness" },
  { name: "PCI-DSS", description: "Payment card industry data security standard" },
  { name: "ISO 27001", description: "International information security management" },
  { name: "OWASP ASVS", description: "Application security verification standard" },
]

export default function TrustSafetyPage() {
  const { openAuth } = useAuthModal()
  return (
    <main className="min-h-screen" data-testid="page-trust-safety" aria-label="Trust and Safety page">
      {/* ───── HERO ───── */}
      <section
        data-testid="section-hero"
        aria-label="Trust and Safety hero"
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
            background: "radial-gradient(circle, rgba(225,29,72,0.06) 0%, transparent 70%)",
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
            background: "radial-gradient(circle, rgba(225,29,72,0.04) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-7"
            style={{
              background: "rgba(225,29,72,0.08)",
              border: "1px solid rgba(225,29,72,0.15)",
              color: "#e11d48",
            }}
          >
            <Shield className="w-3 h-3" />
            Trust & Safety
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-6">
            <span style={{ color: "#111" }}>Protecting every interaction</span>
            <br />
            <span style={{ color: "#e11d48" }}>so you can collaborate with confidence.</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-[16px] leading-relaxed mb-8 max-w-lg mx-auto"
            style={{ color: "#555" }}
          >
            Enterprise-grade security, fair dispute resolution, and regulatory
            compliance built into every layer of the platform.
          </p>

          {/* CTA */}
          <button
            data-testid="btn-hero-join-waitlist"
            aria-label="Join the Waitlist"
            onClick={() => openAuth()}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white hover:scale-[1.02] transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #e11d48, #be123c)",
              boxShadow: "0 4px 16px rgba(225,29,72,0.3)",
            }}
          >
            Join the Waitlist
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* ───── FEATURES GRID ───── */}
      <section
        data-testid="section-features"
        aria-label="Trust and Safety features"
        className="relative py-24 lg:py-28 overflow-hidden"
        style={{ background: "#f5f5f7" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p
              className="text-[11px] font-bold uppercase tracking-[0.4em] mb-3"
              style={{ color: "#e11d48" }}
            >
              Comprehensive Protection
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold leading-tight mb-4"
              style={{ color: "#111" }}
            >
              Six pillars of trust
              <br />
              <span style={{ color: "#555" }}>that keep you secure.</span>
            </h2>
            <p
              className="text-sm max-w-lg mx-auto leading-relaxed"
              style={{ color: "#555" }}
            >
              Every safeguard you need to ensure fairness, security, and
              compliance across the entire ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature) => {
              const FIcon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="group rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                  style={{
                    background: "#fff",
                    border: "1px solid #e8e8ec",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      background: "rgba(225,29,72,0.08)",
                      border: "1px solid rgba(225,29,72,0.12)",
                    }}
                  >
                    <FIcon className="w-6 h-6" style={{ color: "#e11d48" }} />
                  </div>
                  <h3
                    className="text-[18px] font-bold leading-snug mb-2"
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

      {/* ───── HOW DISPUTES WORK ───── */}
      <section data-testid="section-dispute-process" aria-label="Dispute resolution process" className="py-24 lg:py-28" style={{ background: "#fff" }}>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p
              className="text-[11px] font-bold uppercase tracking-[0.4em] mb-3"
              style={{ color: "#e11d48" }}
            >
              Dispute Process
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold leading-tight mb-4"
              style={{ color: "#111" }}
            >
              How disputes work
            </h2>
            <p
              className="text-sm max-w-lg mx-auto leading-relaxed"
              style={{ color: "#555" }}
            >
              A transparent, four-step process designed to resolve conflicts
              quickly and fairly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {disputeSteps.map((item) => {
              const StepIcon = item.icon
              return (
                <div
                  key={item.step}
                  className="group rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                  style={{
                    background: "#fafafa",
                    border: "1px solid #e8e8ec",
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{
                      background: "rgba(225,29,72,0.08)",
                      border: "1px solid rgba(225,29,72,0.12)",
                    }}
                  >
                    <StepIcon className="w-6 h-6" style={{ color: "#e11d48" }} />
                  </div>
                  <div
                    className="text-[11px] font-bold uppercase tracking-[0.4em] mb-2"
                    style={{ color: "#e11d48" }}
                  >
                    Step {item.step}
                  </div>
                  <h3
                    className="text-[18px] font-bold leading-snug mb-2"
                    style={{ color: "#111" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-[13px] leading-relaxed"
                    style={{ color: "#555" }}
                  >
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ───── COMPLIANCE BADGES ───── */}
      <section
        data-testid="section-compliance"
        aria-label="Compliance and certifications"
        className="relative py-24 lg:py-28 overflow-hidden"
        style={{ background: "#f5f5f7" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p
              className="text-[11px] font-bold uppercase tracking-[0.4em] mb-3"
              style={{ color: "#e11d48" }}
            >
              Certifications
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold leading-tight mb-4"
              style={{ color: "#111" }}
            >
              Compliance & certifications
            </h2>
            <p
              className="text-sm max-w-lg mx-auto leading-relaxed"
              style={{ color: "#555" }}
            >
              Industry-leading standards and certifications that keep your data
              safe and your operations audit-ready.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {complianceBadges.map((badge) => (
              <div
                key={badge.name}
                className="group flex items-start gap-4 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                style={{
                  background: "#fff",
                  border: "1px solid #e8e8ec",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: "rgba(225,29,72,0.08)",
                    border: "1px solid rgba(225,29,72,0.12)",
                  }}
                >
                  <ShieldCheck className="w-6 h-6" style={{ color: "#e11d48" }} />
                </div>
                <div>
                  <h3
                    className="text-[16px] font-bold mb-1"
                    style={{ color: "#111" }}
                  >
                    {badge.name}
                  </h3>
                  <p
                    className="text-[13px] leading-relaxed"
                    style={{ color: "#555" }}
                  >
                    {badge.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── CTA ───── */}
      <section data-testid="section-cta" aria-label="Call to action" className="relative py-24 lg:py-28" style={{ background: "#fff" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "#111" }}
          >
            Ready to work on a platform{" "}
            <span style={{ color: "#e11d48" }}>you can trust</span>?
          </h2>
          <p
            className="text-sm leading-relaxed mb-8"
            style={{ color: "#555" }}
          >
            Join a marketplace built on transparency, fairness, and
            enterprise-grade security from the ground up.
          </p>
          <button
            data-testid="btn-cta-join-waitlist"
            aria-label="Join the Waitlist"
            onClick={() => openAuth()}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-white hover:scale-[1.02] transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #e11d48, #be123c)",
              boxShadow: "0 4px 16px rgba(225,29,72,0.3)",
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
