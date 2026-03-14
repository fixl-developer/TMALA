"use client"

import { useAuthModal } from "@/components/auth-modal"
import {
  Fingerprint,
  Building2,
  Camera,
  Search,
  Award,
  Activity,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Users,
  Briefcase,
  Star,
  Megaphone,
} from "lucide-react"

const features = [
  {
    icon: Fingerprint,
    title: "Identity Verification",
    description:
      "Government-issued ID verification paired with advanced facial matching technology to confirm every individual is who they claim to be.",
  },
  {
    icon: Building2,
    title: "Agency Credentials",
    description:
      "Business registration validation and professional license verification to ensure agencies operate with legitimate credentials.",
  },
  {
    icon: Camera,
    title: "Portfolio Authentication",
    description:
      "Verify media ownership and originality with digital fingerprinting, protecting creators and ensuring authentic portfolios.",
  },
  {
    icon: Search,
    title: "Background Checks",
    description:
      "Comprehensive professional history reviews and reference verification to maintain the highest industry standards.",
  },
  {
    icon: Award,
    title: "Badge System",
    description:
      "Verified badges for talents and agencies that signal trust, credibility, and a proven track record to the entire network.",
  },
  {
    icon: Activity,
    title: "Real-time Monitoring",
    description:
      "Continuous verification status monitoring that keeps credentials current and flags any changes instantly.",
  },
]

const verificationLevels = [
  {
    tier: "Basic",
    color: "#3b82f6",
    bg: "#eff6ff",
    items: ["Email verified", "Phone number verified"],
  },
  {
    tier: "Standard",
    color: "#8b5cf6",
    bg: "#f5f3ff",
    items: ["Government ID verified", "Profile manually reviewed"],
  },
  {
    tier: "Professional",
    color: "#f59e0b",
    bg: "#fffbeb",
    items: ["Full background check completed", "Credential verification passed"],
  },
  {
    tier: "Enterprise",
    color: "#10b981",
    bg: "#ecfdf5",
    items: ["Organization-wide verification", "Compliance audit cleared"],
  },
]

const verifiedRoles = [
  { icon: Users, label: "Talents", description: "Models, actors, dancers, and creative professionals verified for authenticity." },
  { icon: Building2, label: "Agencies", description: "Talent agencies and management firms validated for legitimate operations." },
  { icon: Briefcase, label: "Brands", description: "Companies and advertisers confirmed for genuine brand partnerships." },
  { icon: Star, label: "Judges", description: "Industry experts and competition judges credentialed for fair evaluation." },
  { icon: Megaphone, label: "Sponsors", description: "Event sponsors and partners authenticated for reliable collaboration." },
]

export default function VerificationPage() {
  const { openAuth } = useAuthModal()
  return (
    <main className="min-h-screen">
      {/* ───── HERO ───── */}
      <section
        className="relative w-full overflow-hidden py-20 lg:py-28 pt-32"
        style={{ background: "#fff" }}
      >
        {/* Subtle ambient glow */}
        <div
          className="absolute z-[1] rounded-full pointer-events-none"
          style={{
            width: 800,
            height: 800,
            top: -200,
            right: -200,
            background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)",
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
            background: "radial-gradient(circle, rgba(139,92,246,0.04) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-7"
            style={{
              background: "rgba(139,92,246,0.08)",
              border: "1px solid rgba(139,92,246,0.15)",
              color: "#8b5cf6",
            }}
          >
            <ShieldCheck className="w-3 h-3" />
            Verification
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-6">
            <span style={{ color: "#111" }}>Building trust through</span>
            <br />
            <span style={{ color: "#8b5cf6" }}>verified identities.</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-[16px] leading-relaxed mb-8 max-w-lg mx-auto"
            style={{ color: "#555" }}
          >
            Every talent, agency, and brand on the platform is authenticated
            to ensure a safe, credible, and trustworthy ecosystem.
          </p>

          {/* CTA */}
          <button
            onClick={() => openAuth()}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white hover:scale-[1.02] transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
              boxShadow: "0 4px 16px rgba(139,92,246,0.3)",
            }}
          >
            Join the Waitlist
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* ───── FEATURES GRID ───── */}
      <section
        className="relative py-24 lg:py-28 overflow-hidden"
        style={{ background: "#f5f5f7" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p
              className="text-[11px] font-bold uppercase tracking-[0.4em] mb-3"
              style={{ color: "#8b5cf6" }}
            >
              The Suite
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold leading-tight mb-4"
              style={{ color: "#111" }}
            >
              Comprehensive Verification
              <br />
              <span style={{ color: "#555" }}>built into every layer.</span>
            </h2>
            <p
              className="text-sm max-w-lg mx-auto leading-relaxed"
              style={{ color: "#555" }}
            >
              Multi-layered verification tools that protect every participant
              on the platform.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature) => {
              const FIcon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="group rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] flex flex-col"
                  style={{ background: "#fff", border: "1px solid #e8e8ec" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: "rgba(139,92,246,0.08)" }}
                  >
                    <FIcon className="w-6 h-6" style={{ color: "#8b5cf6" }} />
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

      {/* ───── VERIFICATION LEVELS ───── */}
      <section className="py-24 lg:py-28" style={{ background: "#fff" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p
              className="text-[11px] font-bold uppercase tracking-[0.4em] mb-3"
              style={{ color: "#8b5cf6" }}
            >
              Trust Tiers
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold leading-tight mb-4"
              style={{ color: "#111" }}
            >
              Verification Levels
            </h2>
            <p
              className="text-sm max-w-lg mx-auto leading-relaxed"
              style={{ color: "#555" }}
            >
              Progressive tiers of trust, each unlocking deeper credibility
              on the platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {verificationLevels.map((level, index) => (
              <div
                key={level.tier}
                className="rounded-2xl p-7 relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                style={{
                  background: level.bg,
                  border: `2px solid ${level.color}25`,
                }}
              >
                <div
                  className="text-[11px] font-bold uppercase tracking-[0.4em] mb-1"
                  style={{ color: level.color }}
                >
                  Tier {index + 1}
                </div>
                <h3
                  className="text-2xl font-bold mb-5"
                  style={{ color: "#111" }}
                >
                  {level.tier}
                </h3>
                <ul className="space-y-3">
                  {level.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2
                        className="w-5 h-5 mt-0.5 flex-shrink-0"
                        style={{ color: level.color }}
                      />
                      <span
                        className="text-sm font-medium"
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

      {/* ───── WHO GETS VERIFIED ───── */}
      <section
        className="py-24 lg:py-28"
        style={{ background: "#f5f5f7" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p
              className="text-[11px] font-bold uppercase tracking-[0.4em] mb-3"
              style={{ color: "#8b5cf6" }}
            >
              Ecosystem
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold leading-tight mb-4"
              style={{ color: "#111" }}
            >
              Who Gets Verified
            </h2>
            <p
              className="text-sm max-w-lg mx-auto leading-relaxed"
              style={{ color: "#555" }}
            >
              Every role in the ecosystem goes through our verification
              process to maintain platform integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {verifiedRoles.map((role) => {
              const RIcon = role.icon
              return (
                <div
                  key={role.label}
                  className="group rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] flex flex-col items-center text-center"
                  style={{ background: "#fff", border: "1px solid #e8e8ec" }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                    style={{ background: "rgba(139,92,246,0.08)" }}
                  >
                    <RIcon className="w-7 h-7" style={{ color: "#8b5cf6" }} />
                  </div>
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ color: "#111" }}
                  >
                    {role.label}
                  </h3>
                  <p
                    className="text-[13px] leading-relaxed"
                    style={{ color: "#555" }}
                  >
                    {role.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ───── CTA ───── */}
      <section className="relative py-24 lg:py-28" style={{ background: "#fff" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "#111" }}
          >
            Join a verified{" "}
            <span style={{ color: "#8b5cf6" }}>community</span>.
          </h2>
          <p
            className="text-sm leading-relaxed mb-8"
            style={{ color: "#555" }}
          >
            Be part of a platform where every profile is authenticated,
            every credential is confirmed, and trust is the standard.
          </p>
          <button
            onClick={() => openAuth()}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-white hover:scale-[1.02] transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
              boxShadow: "0 4px 16px rgba(139,92,246,0.3)",
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
