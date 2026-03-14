"use client";
import { Layers, ShieldCheck, GitBranch, BarChart3 } from "lucide-react";

const cards = [
  {
    icon: Layers,
    title: "Built for talent professionals, not generalists",
    desc: "Every feature — from option holds to comp card generation — is purpose-built for modeling agencies, casting directors, pageant organizers, and brand deal managers. Not adapted from generic project management software.",
  },
  {
    icon: ShieldCheck,
    title: "Your data never trains AI models",
    desc: "Talent profiles, booking data, and media assets are yours alone. We use zero-knowledge architecture — your data is never used to train our models or third-party AI. Full compliance with GDPR and industry privacy standards.",
  },
  {
    icon: GitBranch,
    title: "From roster to payout in one platform",
    desc: "Stop stitching together 6 different tools. TMA handles talent profiles, casting workflows, escrow-protected payments, contract management, and analytics — in one unified, integrated platform.",
  },
  {
    icon: BarChart3,
    title: "Proven across 5 agency types",
    desc: "Pre-configured blueprints for Modeling Agencies (B1), Casting Directors (B2), Pageant Organizers (B3), Brand & Influencer Agencies (B4), and Event Staffing (B7) — each with their own KPI dashboards and automation ruleset.",
  },
];

export function AIStudioWhyChoose() {
  return (
    <section className="py-24 border-t border-white/[0.05]" style={{ background: "#111111" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header — left-aligned, plain white, no eyebrow, no gradient */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Why choose
            <br />
            AI Studio?
          </h2>
        </div>

        {/* Cards Grid — 2×2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                style={{
                  background: "#141414",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 16,
                  padding: 32,
                }}
              >
                {/* Top row: title on left + icon on right */}
                <div className="flex items-start justify-between gap-4 mb-8">
                  <h3 className="text-xl font-bold text-white leading-snug max-w-[70%]">
                    {card.title}
                  </h3>
                  <Icon className="w-7 h-7 shrink-0 mt-0.5" style={{ color: "rgba(255,255,255,0.80)" }} />
                </div>
                {/* Description */}
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
