"use client";

import { useAuthModal } from "@/components/auth-modal";
import {
  Trophy,
  FileText,
  Workflow,
  Mail,
  BarChart3,
  PieChart,
  CheckCircle,
  ArrowRight,
  Sparkles,
  MousePointerClick,
  Rocket,
  Layout,
} from "lucide-react";

const categories = [
  {
    icon: Trophy,
    title: "Pageant Templates",
    items: ["Beauty/Fashion", "Talent Search", "Kids Pageant", "Reality Format"],
    color: "#f59e0b",
    bg: "#fffbeb",
  },
  {
    icon: FileText,
    title: "Contract Templates",
    items: ["Representation", "Booking", "NDA", "Sponsor Agreements"],
    color: "#3b82f6",
    bg: "#eff6ff",
  },
  {
    icon: Workflow,
    title: "Workflow Templates",
    items: ["Casting Pipelines", "Event Production", "Campaign Management"],
    color: "#8b5cf6",
    bg: "#f5f3ff",
  },
  {
    icon: Mail,
    title: "Email Templates",
    items: ["Notifications", "Invitations", "Confirmations", "Reminders"],
    color: "#10b981",
    bg: "#ecfdf5",
  },
  {
    icon: BarChart3,
    title: "Scoring Templates",
    items: ["Judge Scorecards", "Audience Voting", "Weighted Criteria"],
    color: "#ef4444",
    bg: "#fef2f2",
  },
  {
    icon: PieChart,
    title: "Report Templates",
    items: ["Financial Reports", "Performance Analytics", "Audit Exports"],
    color: "#06b6d4",
    bg: "#ecfeff",
  },
];

const popularTemplates = [
  {
    title: "Talent Representation Agreement",
    category: "Contract",
    description:
      "Comprehensive agreement covering exclusivity, commission rates, term length, and termination clauses.",
  },
  {
    title: "Booking Agreement",
    category: "Contract",
    description:
      "Standard booking contract with payment terms, cancellation policy, and performance requirements.",
  },
  {
    title: "Pageant Participant Terms",
    category: "Pageant",
    description:
      "Participant registration terms including eligibility, conduct rules, and media release consent.",
  },
  {
    title: "Influencer Campaign Brief",
    category: "Workflow",
    description:
      "Campaign brief template with deliverables, timelines, brand guidelines, and approval workflows.",
  },
  {
    title: "Judge Scoring Sheet",
    category: "Scoring",
    description:
      "Customizable scorecard with weighted criteria, comments section, and automatic tabulation.",
  },
  {
    title: "Event Run-of-Show",
    category: "Workflow",
    description:
      "Minute-by-minute event timeline with cue points, stage directions, and crew assignments.",
  },
  {
    title: "Casting Submission Terms",
    category: "Contract",
    description:
      "Submission agreement covering usage rights, selection process, and data handling policies.",
  },
  {
    title: "Sponsor Agreement",
    category: "Contract",
    description:
      "Sponsorship deal template with tier levels, deliverables, branding placement, and ROI metrics.",
  },
];

const steps = [
  {
    icon: MousePointerClick,
    step: "01",
    title: "Choose",
    description:
      "Browse our library of professionally crafted templates designed for talent management workflows.",
  },
  {
    icon: Sparkles,
    step: "02",
    title: "Customize",
    description:
      "Tailor every detail to your brand, adding your logo, terms, scoring criteria, and unique requirements.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Deploy",
    description:
      "Instantly deploy templates across your organization. Share with teams, judges, and stakeholders.",
  },
];

export default function TemplatesPage() {
  const { openAuth } = useAuthModal();
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
            background:
              "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)",
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
              "radial-gradient(circle, rgba(245,158,11,0.04) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-7"
            style={{
              background: "rgba(245,158,11,0.08)",
              border: "1px solid rgba(245,158,11,0.15)",
              color: "#f59e0b",
            }}
          >
            <Layout className="w-3 h-3" />
            Template Center
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-6">
            <span style={{ color: "#111" }}>
              Ready-made templates for
            </span>
            <br />
            <span style={{ color: "#f59e0b" }}>every talent workflow.</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-[16px] leading-relaxed mb-8 max-w-lg mx-auto"
            style={{ color: "#555" }}
          >
            From contracts to scorecards, launch faster with professionally
            designed templates built for talent management.
          </p>

          {/* CTA */}
          <button
            onClick={() => openAuth()}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-transform hover:scale-105"
            style={{ background: "#f59e0b", color: "#fff" }}
          >
            Browse Templates
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* ───── TEMPLATE CATEGORIES GRID ───── */}
      <section
        className="relative w-full overflow-hidden py-20 lg:py-28"
        style={{ background: "#f5f5f7" }}
      >
        <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <p
              className="text-[11px] font-bold uppercase tracking-[0.4em] mb-3"
              style={{ color: "#f59e0b" }}
            >
              Categories
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold leading-[1.1] tracking-tight mb-5"
              style={{ color: "#111" }}
            >
              Template Categories
            </h2>
            <p
              className="text-[16px] leading-relaxed max-w-2xl mx-auto"
              style={{ color: "#555" }}
            >
              Everything you need to run a professional talent management
              operation, organized by category.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="rounded-2xl p-8 hover:shadow-lg transition-shadow"
                style={{
                  background: "#fff",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: cat.color + "15" }}
                >
                  <cat.icon
                    className="w-7 h-7"
                    style={{ color: cat.color }}
                  />
                </div>
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ color: "#111" }}
                >
                  {cat.title}
                </h3>
                <ul className="space-y-2.5">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <CheckCircle
                        className="w-4 h-4 flex-shrink-0"
                        style={{ color: cat.color }}
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

      {/* ───── POPULAR TEMPLATES ───── */}
      <section
        className="relative w-full overflow-hidden py-20 lg:py-28"
        style={{ background: "#fff" }}
      >
        <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <p
              className="text-[11px] font-bold uppercase tracking-[0.4em] mb-3"
              style={{ color: "#f59e0b" }}
            >
              Most Used
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold leading-[1.1] tracking-tight mb-5"
              style={{ color: "#111" }}
            >
              Popular Templates
            </h2>
            <p
              className="text-[16px] leading-relaxed max-w-2xl mx-auto"
              style={{ color: "#555" }}
            >
              Our most-used templates, trusted by agencies and organizations
              worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularTemplates.map((template) => (
              <div
                key={template.title}
                className="rounded-2xl p-6 hover:shadow-lg transition-shadow group"
                style={{
                  background: "#fff",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                }}
              >
                <span
                  className="inline-block text-[11px] font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-full mb-4"
                  style={{
                    color: "#f59e0b",
                    backgroundColor: "rgba(245,158,11,0.08)",
                  }}
                >
                  {template.category}
                </span>
                <h3
                  className="text-lg font-bold mb-3 leading-snug"
                  style={{ color: "#111" }}
                >
                  {template.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#555" }}
                >
                  {template.description}
                </p>
                <div
                  className="mt-5 flex items-center gap-1 font-semibold text-sm group-hover:gap-2 transition-all"
                  style={{ color: "#f59e0b" }}
                >
                  <span>View Template</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── HOW TEMPLATES WORK ───── */}
      <section
        className="relative w-full overflow-hidden py-20 lg:py-28"
        style={{ background: "#f5f5f7" }}
      >
        <div className="relative z-10 mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <p
              className="text-[11px] font-bold uppercase tracking-[0.4em] mb-3"
              style={{ color: "#f59e0b" }}
            >
              How It Works
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold leading-[1.1] tracking-tight mb-5"
              style={{ color: "#111" }}
            >
              How Templates Work
            </h2>
            <p
              className="text-[16px] leading-relaxed max-w-2xl mx-auto"
              style={{ color: "#555" }}
            >
              Three simple steps to go from template to production-ready
              workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div
                key={s.step}
                className="rounded-2xl p-8 text-center"
                style={{
                  background: "#fff",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: "rgba(245,158,11,0.1)" }}
                >
                  <s.icon
                    className="w-8 h-8"
                    style={{ color: "#f59e0b" }}
                  />
                </div>
                <p
                  className="text-[11px] font-bold uppercase tracking-[0.4em] mb-2"
                  style={{ color: "#f59e0b" }}
                >
                  Step {s.step}
                </p>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: "#111" }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-[15px] leading-relaxed"
                  style={{ color: "#555" }}
                >
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── CTA ───── */}
      <section
        className="relative w-full overflow-hidden py-20 lg:py-28"
        style={{ background: "#fff" }}
      >
        <div className="relative z-10 mx-auto max-w-3xl px-6 sm:px-8 lg:px-12 text-center">
          <p
            className="text-[11px] font-bold uppercase tracking-[0.4em] mb-3"
            style={{ color: "#f59e0b" }}
          >
            Get Started
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold leading-[1.1] tracking-tight mb-6"
            style={{ color: "#111" }}
          >
            Start Using Templates Today
          </h2>
          <p
            className="text-[16px] leading-relaxed mb-10 max-w-lg mx-auto"
            style={{ color: "#555" }}
          >
            Join the waitlist to get early access to our full template library.
            Save hours on every project with ready-made, customizable templates.
          </p>
          <button
            onClick={() => openAuth()}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold transition-transform hover:scale-105"
            style={{ background: "#f59e0b", color: "#fff" }}
          >
            Join the Waitlist
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </main>
  );
}
