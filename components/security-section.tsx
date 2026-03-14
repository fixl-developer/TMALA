"use client"

import {
  Shield,
  Lock,
  Eye,
  FileCheck,
  Server,
  Fingerprint,
  AlertTriangle,
  Database,
  ArrowRight,
} from "lucide-react"
import { useAuthModal } from "@/components/auth-modal"

const allCards = [
  {
    icon: Shield,
    title: "Zero Trust Architecture",
    description:
      "Every request is authenticated, authorized, and logged. No implicit trust — ever.",
  },
  {
    icon: Lock,
    title: "Tenant Isolation",
    description:
      "Schema-per-tenant data isolation, row-level security, and separate encryption contexts.",
  },
  {
    icon: Eye,
    title: "Immutable Audit Logs",
    description:
      "Every action is timestamped, signed, and append-only. Full traceability for compliance.",
  },
  {
    icon: Fingerprint,
    title: "RBAC + ABAC Enforcement",
    description:
      "Role-based and attribute-based access control on every endpoint. Least privilege by default.",
  },
  {
    icon: FileCheck,
    title: "SOC 2 Type II Readiness",
    description:
      "Architecture designed from day one to meet SOC 2 Type II audit requirements.",
  },
  {
    icon: Database,
    title: "GDPR Ready Architecture",
    description:
      "Data residency controls, consent management, and right-to-erasure built into every flow.",
  },
  {
    icon: AlertTriangle,
    title: "STRIDE Threat Modeling",
    description:
      "Every component analyzed for spoofing, tampering, repudiation, disclosure, DoS, and escalation.",
  },
  {
    icon: Lock,
    title: "PCI Compliant Payments",
    description:
      "Payment processing meets PCI DSS standards with tokenized card data and secure vaults.",
  },
  {
    icon: Server,
    title: "99.9% Uptime SLA",
    description:
      "Multi-region deployment with automatic failover, health checks, and guaranteed availability.",
  },
  {
    icon: Shield,
    title: "ISO 27001 Aligned",
    description:
      "Information security management aligned with ISO 27001 framework and best practices.",
  },
]

export function SecuritySection() {
  const { openAuth } = useAuthModal()
  return (
    <section className="py-24 lg:py-28" style={{ background: "#f8f8fa" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Light rounded container like Monday.com */}
        <div
          className="rounded-3xl px-6 sm:px-10 lg:px-16 py-16 lg:py-20"
          style={{ background: "#f0f0f4" }}
        >
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-20 items-start">
            {/* LEFT — sticky heading + CTA */}
            <div className="lg:sticky lg:top-28">
              <h2
                className="text-[2.2rem] sm:text-[2.6rem] lg:text-[2.9rem] font-bold leading-[1.12] tracking-tight mb-8"
                style={{ color: "#111" }}
              >
                Built for trust,
                <br />
                audited by
                <br />
                design.
              </h2>

              <button
                onClick={() => openAuth()}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white transition-all duration-200 hover:scale-[1.02]"
                style={{
                  background: "#111",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                }}
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>

              <p
                className="mt-4 text-[13px]"
                style={{ color: "#888" }}
              >
                Security isn&apos;t an afterthought — it&apos;s our foundation. Every layer is designed for financial-grade protection.
              </p>
            </div>

            {/* RIGHT — 2-column cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {allCards.map((card, index) => {
                const Icon = card.icon
                return (
                  <div
                    key={index}
                    className="group rounded-2xl p-6 lg:p-7 transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      background: "#fff",
                      border: "1px solid #e8e8ec",
                    }}
                  >
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                      style={{
                        color: "#6366f1",
                      }}
                    >
                      <Icon className="w-7 h-7" strokeWidth={1.5} />
                    </div>

                    {/* Title */}
                    <h3
                      className="text-lg font-bold leading-tight mb-2"
                      style={{ color: "#111" }}
                    >
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-[13px] leading-relaxed"
                      style={{ color: "#555" }}
                    >
                      {card.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
