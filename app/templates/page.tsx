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
        data-testid="section-hero"
        aria-label="Hero"
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
            data-testid="btn-browse-templates"
            aria-label="Browse Templates"
            onClick={() => openAuth()}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-transform hover:scale-105"
            style={{ background: "#f59e0b", color: "#fff" }}
          >
            Browse Templates
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* ───── TEMPLATE CATEGORIES — Colorful cards ───── */}
      <section
        data-testid="section-categories"
        aria-label="Template Categories"
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
            {categories.map((cat) => {
              const colorMap: Record<string, string> = {
                "#f59e0b": "#fcd34d",
                "#3b82f6": "#93c5fd",
                "#8b5cf6": "#c4b5fd",
                "#10b981": "#6ee7b7",
                "#ef4444": "#fca5a5",
                "#06b6d4": "#67e8f9",
              }
              const bgColor = colorMap[cat.color] || cat.bg
              return (
                <div
                  key={cat.title}
                  className="group rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                  style={{ background: bgColor }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                    style={{ background: "rgba(255,255,255,0.5)", backdropFilter: "blur(8px)" }}
                  >
                    <cat.icon className="w-7 h-7" style={{ color: "#111" }} />
                  </div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: "#111" }}>
                    {cat.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: "#111" }} />
                        <span className="text-sm font-medium" style={{ color: "rgba(0,0,0,0.65)" }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex items-center gap-1.5 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: "#111" }}>
                    Explore
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ───── POPULAR TEMPLATES — Card with colored left accent ───── */}
      <section
        data-testid="section-popular-templates"
        aria-label="Popular Templates"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {popularTemplates.map((template, i) => {
              const catColors: Record<string, string> = {
                Contract: "#3b82f6",
                Pageant: "#f59e0b",
                Workflow: "#8b5cf6",
                Scoring: "#ef4444",
              }
              const accent = catColors[template.category] || "#6366f1"
              return (
                <div
                  key={template.title}
                  className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] cursor-pointer"
                  style={{ background: "#fff", border: "1px solid #e8e8ec" }}
                >
                  {/* Top accent bar */}
                  <div className="h-1" style={{ background: accent }} />

                  <div className="p-6">
                    <span
                      className="inline-block text-[11px] font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-full mb-4"
                      style={{ color: accent, backgroundColor: `${accent}12` }}
                    >
                      {template.category}
                    </span>
                    <h3 className="text-[16px] font-bold mb-2 leading-snug" style={{ color: "#111" }}>
                      {template.title}
                    </h3>
                    <p className="text-[13px] leading-relaxed mb-4" style={{ color: "#555" }}>
                      {template.description}
                    </p>
                    <div
                      className="flex items-center gap-1.5 font-bold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
                      style={{ color: accent }}
                    >
                      <span>Use Template</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ───── HOW TEMPLATES WORK — Dark timeline ───── */}
      <section
        data-testid="section-how-it-works"
        aria-label="How Templates Work"
        className="relative w-full overflow-hidden py-20 lg:py-28"
        style={{ background: "#0f172a" }}
      >
        <div className="relative z-10 mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <p
              className="text-[11px] font-bold uppercase tracking-[0.4em] mb-3"
              style={{ color: "#fbbf24" }}
            >
              How It Works
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold leading-[1.1] tracking-tight mb-5 text-white">
              Three steps to launch
            </h2>
            <p className="text-[16px] leading-relaxed max-w-2xl mx-auto text-slate-400">
              Go from template to production-ready workflow in minutes.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="hidden md:block absolute top-[52px] left-[calc(16.67%+32px)] right-[calc(16.67%+32px)] h-[2px]" style={{ background: "linear-gradient(90deg, #f59e0b, #fbbf24, #f59e0b)" }} />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((s) => {
                const StepIcon = s.icon
                return (
                  <div key={s.step} className="group relative text-center">
                    {/* Glowing circle */}
                    <div className="relative z-10 mx-auto mb-6">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center mx-auto transition-transform duration-300 group-hover:scale-110"
                        style={{
                          background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
                          boxShadow: "0 0 30px rgba(245,158,11,0.35)",
                        }}
                      >
                        <StepIcon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    {/* Card */}
                    <div
                      className="rounded-2xl p-7 transition-all duration-300 group-hover:-translate-y-1"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      <p
                        className="text-[11px] font-bold uppercase tracking-[0.4em] mb-2"
                        style={{ color: "#fbbf24" }}
                      >
                        Step {s.step}
                      </p>
                      <h3 className="text-2xl font-bold mb-3 text-white">
                        {s.title}
                      </h3>
                      <p className="text-[14px] leading-relaxed text-slate-400">
                        {s.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ───── CTA — Gradient ───── */}
      <section
        data-testid="section-cta"
        aria-label="Call to Action"
        className="relative w-full overflow-hidden py-20 lg:py-28"
        style={{ background: "linear-gradient(135deg, #f59e0b 0%, #d97706 40%, #b45309 100%)" }}
      >
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)", transform: "translate(-50%, -50%)" }} />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)", transform: "translate(40%, 40%)" }} />

        <div className="relative z-10 mx-auto max-w-3xl px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold leading-[1.1] tracking-tight mb-6 text-white">
            Start Using Templates Today
          </h2>
          <p className="text-[16px] leading-relaxed mb-10 max-w-lg mx-auto text-white/70">
            Join the waitlist to get early access to our full template library.
            Save hours on every project with ready-made, customizable templates.
          </p>
          <button
            data-testid="btn-join-waitlist"
            aria-label="Join the Waitlist"
            onClick={() => openAuth()}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold transition-all duration-200 hover:scale-[1.02]"
            style={{ background: "#fff", color: "#b45309", boxShadow: "0 4px 24px rgba(0,0,0,0.15)" }}
          >
            Join the Waitlist
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </main>
  );
}
