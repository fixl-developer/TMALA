"use client";
import { useState } from "react";
import { ArrowRight, FileText, Search, Trophy, Megaphone, Wand2, Zap, BarChart3 } from "lucide-react";

const categories = [
  { id: "portfolio", label: "Portfolio & Media", icon: FileText },
  { id: "casting", label: "Casting & Booking", icon: Search },
  { id: "pageant", label: "Pageant & Events", icon: Trophy },
  { id: "brand", label: "Brand Deals", icon: Megaphone },
  { id: "media", label: "Media Lab", icon: Wand2 },
  { id: "automation", label: "Automation", icon: Zap },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
];

const useCasesByCategory: Record<string, { id: string; title: string; description: string; gradient: string; accentColor: string; visualType: "score" | "tags" | "bars" | "funnel" | "calendar" | "terminal" }[]> = {
  portfolio: [
    {
      id: "bio-gen",
      title: "AI bio generation in 4 tones",
      description: "Professional, conversational, editorial, and social — auto-generated from your profile data.",
      gradient: "linear-gradient(145deg, #1a0035 0%, #2d0060 100%)",
      accentColor: "#7C3AED",
      visualType: "tags",
    },
    {
      id: "portfolio-score",
      title: "Portfolio completeness scoring",
      description: "Get a 0–100 score with a checklist of missing assets and one-click fixes.",
      gradient: "linear-gradient(145deg, #1a0035 0%, #2d0060 100%)",
      accentColor: "#7C3AED",
      visualType: "score",
    },
    {
      id: "export-packs",
      title: "One-click casting pack export",
      description: "Export Casting, Pageant, Brand, and Commercial packs as branded PDFs instantly.",
      gradient: "linear-gradient(145deg, #1a0035 0%, #2d0060 100%)",
      accentColor: "#7C3AED",
      visualType: "tags",
    },
  ],
  casting: [
    {
      id: "brief-match",
      title: "AI brief-to-talent matching",
      description: "Post a casting brief and let AI rank every talent in your roster by match score.",
      gradient: "linear-gradient(145deg, #001828 0%, #003050 100%)",
      accentColor: "#0EA5E9",
      visualType: "funnel",
    },
    {
      id: "nda-rooms",
      title: "NDA-gated viewing rooms",
      description: "Share shortlists securely with clients via invite-only NDA-protected rooms.",
      gradient: "linear-gradient(145deg, #001828 0%, #003050 100%)",
      accentColor: "#0EA5E9",
      visualType: "tags",
    },
    {
      id: "option-holds",
      title: "Option holds & conflict tracking",
      description: "Set holds on talent for specific dates and get instant conflict alerts before confirming.",
      gradient: "linear-gradient(145deg, #001828 0%, #003050 100%)",
      accentColor: "#0EA5E9",
      visualType: "calendar",
    },
  ],
  pageant: [
    {
      id: "scoring",
      title: "Integrity-locked scoring system",
      description: "Multi-round scoring with tamper-proof result locks and anomaly detection on every judge.",
      gradient: "linear-gradient(145deg, #2a1200 0%, #4a2800 100%)",
      accentColor: "#F59E0B",
      visualType: "bars",
    },
    {
      id: "dual-approval",
      title: "Dual-approval result publishing",
      description: "Results require two independent approvals before being made public — zero disputes.",
      gradient: "linear-gradient(145deg, #2a1200 0%, #4a2800 100%)",
      accentColor: "#F59E0B",
      visualType: "tags",
    },
    {
      id: "sponsor-deals",
      title: "Sponsor deal rooms",
      description: "Manage sponsor packages, deliverables, and payments in private deal rooms.",
      gradient: "linear-gradient(145deg, #2a1200 0%, #4a2800 100%)",
      accentColor: "#F59E0B",
      visualType: "funnel",
    },
  ],
  brand: [
    {
      id: "deal-rooms",
      title: "Escrow-protected deal rooms",
      description: "Negotiate contracts and lock funds in escrow before content delivery begins.",
      gradient: "linear-gradient(145deg, #001a12 0%, #003828 100%)",
      accentColor: "#10B981",
      visualType: "tags",
    },
    {
      id: "deliverables",
      title: "Content deliverable approval flow",
      description: "Structured approval cycles with version history, comments, and auto-release triggers.",
      gradient: "linear-gradient(145deg, #001a12 0%, #003828 100%)",
      accentColor: "#10B981",
      visualType: "calendar",
    },
    {
      id: "roi-tracking",
      title: "Campaign ROI tracking",
      description: "Track engagement, reach, and spend against campaign targets in real time.",
      gradient: "linear-gradient(145deg, #001a12 0%, #003828 100%)",
      accentColor: "#10B981",
      visualType: "bars",
    },
  ],
  media: [
    {
      id: "photo-enhance",
      title: "Intelligent photo retouching",
      description: "Background removal, lighting correction, and skin tone balancing — no Photoshop needed.",
      gradient: "linear-gradient(145deg, #001428 0%, #002850 100%)",
      accentColor: "#38BDF8",
      visualType: "tags",
    },
    {
      id: "comp-card",
      title: "AI comp card generation",
      description: "Generate print-ready comp cards, look-books, and digitals from talent profiles in seconds.",
      gradient: "linear-gradient(145deg, #001428 0%, #002850 100%)",
      accentColor: "#38BDF8",
      visualType: "score",
    },
    {
      id: "video-scoring",
      title: "Video quality scoring",
      description: "AI scores every video submission for lighting, framing, audio, and performance quality.",
      gradient: "linear-gradient(145deg, #001428 0%, #002850 100%)",
      accentColor: "#38BDF8",
      visualType: "bars",
    },
  ],
  automation: [
    {
      id: "auto-invoicing",
      title: "Auto-invoicing on booking confirm",
      description: "Invoices generate and send automatically the moment a booking is confirmed.",
      gradient: "linear-gradient(145deg, #0a0028 0%, #180050 100%)",
      accentColor: "#818CF8",
      visualType: "terminal",
    },
    {
      id: "escrow-release",
      title: "Escrow release on approval",
      description: "Funds release automatically when deliverables are approved — zero manual payout work.",
      gradient: "linear-gradient(145deg, #0a0028 0%, #180050 100%)",
      accentColor: "#818CF8",
      visualType: "tags",
    },
    {
      id: "rules",
      title: "94 automation rules",
      description: "Event, time, and state-based triggers for approval chains, reminders, and status updates.",
      gradient: "linear-gradient(145deg, #0a0028 0%, #180050 100%)",
      accentColor: "#818CF8",
      visualType: "funnel",
    },
  ],
  analytics: [
    {
      id: "wes",
      title: "WES — Workflow Efficiency Score",
      description: "Your agency's live efficiency score across speed, cash flow, and pipeline health.",
      gradient: "linear-gradient(145deg, #001a0a 0%, #003820 100%)",
      accentColor: "#34D399",
      visualType: "score",
    },
    {
      id: "kpi",
      title: "KPI dashboards per agency type",
      description: "Pre-configured dashboards for Modeling, Casting, Pageant, Brand, and Staffing agencies.",
      gradient: "linear-gradient(145deg, #001a0a 0%, #003820 100%)",
      accentColor: "#34D399",
      visualType: "bars",
    },
    {
      id: "anomaly",
      title: "Anomaly detection & fraud alerts",
      description: "AI flags suspicious scoring patterns, unusual payments, and policy violations before disputes.",
      gradient: "linear-gradient(145deg, #001a0a 0%, #003820 100%)",
      accentColor: "#34D399",
      visualType: "terminal",
    },
  ],
};

function CardVisual({ type, accent }: { type: string; accent: string }) {
  if (type === "score") {
    return (
      <div className="w-full">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[10px] text-white/65">Score</span>
          <span className="text-xs font-bold font-mono" style={{ color: accent }}>78 / 100</span>
        </div>
        <div className="h-1 bg-white/10 rounded-full mb-2.5 overflow-hidden">
          <div className="h-full rounded-full" style={{ width: "78%", background: accent }} />
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {["Headshot ✓", "Bio ✓", "Video ✗"].map(t => (
            <span key={t} className="text-[9px] px-1.5 py-0.5 rounded-full bg-white/8 text-white/70">{t}</span>
          ))}
        </div>
      </div>
    );
  }
  if (type === "tags") {
    return (
      <div className="flex flex-wrap gap-1.5">
        {["Auto-generated", "Branded", "Export-ready", "Multi-format"].map(t => (
          <span key={t} className="text-[9px] px-2 py-0.5 rounded-full border border-white/10 text-white/70">{t}</span>
        ))}
      </div>
    );
  }
  if (type === "bars") {
    return (
      <div className="flex items-end gap-1 h-10">
        {[55, 80, 45, 90, 65].map((h, i) => (
          <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: i === 3 ? accent : `${accent}40` }} />
        ))}
      </div>
    );
  }
  if (type === "funnel") {
    return (
      <div className="flex flex-col gap-1 w-full">
        {[["847 profiles", "100%"], ["212 shortlisted", "25%"], ["18 reviewed", "2%"]].map(([label, pct]) => (
          <div key={label} className="flex items-center gap-2">
            <div className="flex-1 h-1 bg-white/8 rounded-full overflow-hidden">
              <div className="h-full rounded-full" style={{ width: pct, background: accent + "80" }} />
            </div>
            <span className="text-[9px] text-white/60 w-6">{pct}</span>
          </div>
        ))}
      </div>
    );
  }
  if (type === "calendar") {
    return (
      <div className="grid grid-cols-7 gap-0.5">
        {Array.from({ length: 14 }).map((_, i) => (
          <div
            key={i}
            className="h-3 rounded-sm"
            style={{ background: [2, 5, 8, 11].includes(i) ? accent : "rgba(255,255,255,0.07)" }}
          />
        ))}
      </div>
    );
  }
  if (type === "terminal") {
    return (
      <div className="font-mono text-[9px] space-y-1">
        <div className="text-white/55">// trigger: booking.confirmed</div>
        <div className="text-white/70"><span style={{ color: accent }}>✓</span> Invoice #4821 sent</div>
        <div className="text-white/70"><span style={{ color: accent }}>✓</span> Escrow created</div>
        <div className="text-white/55"><span className="animate-pulse" style={{ color: accent }}>▊</span> Awaiting approval...</div>
      </div>
    );
  }
  return null;
}

export function AIStudioUseCases() {
  const [activeCategory, setActiveCategory] = useState("portfolio");

  const currentUseCases = useCasesByCategory[activeCategory] || [];
  const activeCat = categories.find(c => c.id === activeCategory)!;

  return (
    <section id="use-cases" className="py-24 border-t border-white/[0.05]" style={{ background: "#111111" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <p className="text-[11px] uppercase tracking-[0.35em] text-white/60 font-semibold mb-3">
            Explore by workflow
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            All in a single intelligent suite
          </h2>

          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const CatIcon = cat.icon;
              const isActive = cat.id === activeCategory;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 shrink-0"
                  style={
                    isActive
                      ? { background: "#1f1f1f", border: "1px solid rgba(255,255,255,0.12)", color: "#ffffff" }
                      : { background: "transparent", border: "1px solid transparent", color: "rgba(255,255,255,0.75)" }
                  }
                >
                  <CatIcon className="w-3.5 h-3.5" />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Use Case Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentUseCases.map((useCase) => (
            <div
              key={useCase.id}
              className="group relative rounded-2xl overflow-hidden border border-white/[0.07] hover:border-white/[0.14] transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: useCase.gradient }}
            >
              {/* Glow */}
              <div
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-[60px] opacity-20 pointer-events-none"
                style={{ background: useCase.accentColor }}
              />

              <div className="relative p-6">
                {/* Visual mock */}
                <div className="h-[80px] flex flex-col justify-end mb-5">
                  <CardVisual type={useCase.visualType} accent={useCase.accentColor} />
                </div>

                {/* Content */}
                <h3 className="text-sm font-bold text-white mb-2 leading-snug">{useCase.title}</h3>
                <p className="text-xs text-white/70 leading-relaxed mb-5">{useCase.description}</p>

                {/* CTA */}
                <button
                  className="inline-flex items-center gap-1.5 text-xs font-semibold transition-all duration-200"
                  style={{ color: useCase.accentColor }}
                >
                  Try it <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
