"use client";
import { useState } from "react";
import { useAuthModal } from "@/components/auth-modal";
import {
  ArrowRight, Sparkles, FolderOpen, GitBranch, FileText, Archive, Link2, Lock,
  ShieldCheck, EyeOff, AlertTriangle, UserCheck, Fingerprint, HelpCircle,
  Camera, Mic, Search, Palette, TrendingUp,
} from "lucide-react";

const tabs = [
  { id: "portfolio",     label: "Portfolio & Media",       icon: FileText    },
  { id: "media",         label: "Media Lab",               icon: Camera      },
  { id: "audition",      label: "Audition Coach",          icon: Mic         },
  { id: "applications",  label: "Application Assistant",   icon: Search      },
  { id: "brandkit",      label: "Brand Kit",               icon: Palette     },
  { id: "growth",        label: "Growth Insights",         icon: TrendingUp  },
  { id: "assets",        label: "My AI Assets",            icon: FolderOpen  },
  { id: "safety",        label: "Settings & Safety",       icon: ShieldCheck },
];

type Tool = {
  title: string;
  description: string;
  imgSrc?: string;
  gradient?: string;
  orb1?: string;
  orb2?: string;
  orb3?: string;
  icon?: React.ComponentType<{ className?: string }>;
  accentColor?: string;
};

const toolsByTab: Record<string, Tool[]> = {
  portfolio: [
    {
      title: "Smart Profile Completion",
      description: "AI scores your profile and tells you exactly what's missing to get booked faster.",
      imgSrc: "https://assets.mixkit.co/videos/52270/52270-1080.mp4",
    },
    {
      title: "Bio & Resume Generator",
      description: "Generate a polished professional bio or casting resume in seconds.",
      imgSrc: "https://assets.mixkit.co/videos/52057/52057-1080.mp4",
    },
    {
      title: "Casting Pack Export",
      description: "Export a ready-to-submit casting pack as a branded PDF or ZIP file.",
      imgSrc: "https://assets.mixkit.co/videos/52041/52041-1080.mp4",
    },
    {
      title: "Pageant Pack Builder",
      description: "Create a complete, polished application pack for any pageant competition.",
      imgSrc: "https://assets.mixkit.co/videos/47777/47777-720.mp4",
    },
    {
      title: "Brand Pack Creator",
      description: "Package your brand assets and media kit into one shareable file.",
      imgSrc: "https://assets.mixkit.co/videos/52039/52039-1080.mp4",
    },
    {
      title: "Version Manager",
      description: "Maintain multiple profile versions for different markets and switch instantly.",
      gradient: "linear-gradient(135deg, #0a0520 0%, #1a0840 50%, #0a1530 100%)",
      orb1: "rgba(124,58,237,0.5)",
      orb2: "rgba(59,130,246,0.35)",
      orb3: "rgba(236,72,153,0.25)",
      icon: GitBranch,
      accentColor: "#7C3AED",
    },
  ],
  media: [
    {
      title: "Photo Quality Scorer",
      description: "AI rates every photo by technical quality, lighting, and commercial appeal.",
      imgSrc: "https://assets.mixkit.co/videos/2374/2374-1080.mp4",
    },
    {
      title: "Video Quality Analyzer",
      description: "Frame-by-frame quality breakdown — resolution, exposure, and movement scores.",
      imgSrc: "https://assets.mixkit.co/videos/50610/50610-1080.mp4",
    },
    {
      title: "Auto-Tag Media Library",
      description: "AI tags every photo and video automatically so you find anything instantly.",
      imgSrc: "https://assets.mixkit.co/videos/19639/19639-720.mp4",
    },
    {
      title: "Background Removal",
      description: "Remove and replace backgrounds from any photo in a single click.",
      imgSrc: "https://assets.mixkit.co/videos/52046/52046-1080.mp4",
    },
    {
      title: "Rights & Consent Manager",
      description: "Track usage rights and consent status across your entire media library.",
      imgSrc: "https://assets.mixkit.co/videos/31497/31497-720.mp4",
    },
    {
      title: "Upscale Photos to 4K",
      description: "Enhance image resolution to crystal-clear 4K using AI upscaling.",
      gradient: "linear-gradient(135deg, #001525 0%, #002d50 50%, #001020 100%)",
      orb1: "rgba(14,165,233,0.55)",
      orb2: "rgba(6,182,212,0.35)",
      orb3: "rgba(99,102,241,0.3)",
      icon: Sparkles,
      accentColor: "#0EA5E9",
    },
  ],
  audition: [
    {
      title: "Self-Tape Coach",
      description: "Get real-time AI feedback on delivery, framing, and energy of your self-tapes.",
      imgSrc: "https://assets.mixkit.co/videos/34477/34477-1080.mp4",
    },
    {
      title: "Pageant Q&A Drills",
      description: "Practice pageant questions with an AI-simulated judge panel on demand.",
      imgSrc: "https://assets.mixkit.co/videos/26787/26787-720.mp4",
    },
    {
      title: "Mock Interview Coach",
      description: "Simulate casting director interviews and get scored responses instantly.",
      imgSrc: "https://assets.mixkit.co/videos/4809/4809-1080.mp4",
    },
    {
      title: "30-Day Practice Plan",
      description: "A personalized daily practice schedule aligned to your next audition goal.",
      imgSrc: "https://assets.mixkit.co/videos/51295/51295-1080.mp4",
    },
    {
      title: "STAR & PREP Frameworks",
      description: "Structured answer frameworks that help you nail any interview question.",
      imgSrc: "https://assets.mixkit.co/videos/52257/52257-1080.mp4",
    },
    {
      title: "Progress Tracker",
      description: "Visualize your improvement across every session with detailed AI scoring.",
      gradient: "linear-gradient(135deg, #052010 0%, #0a3818 50%, #051510 100%)",
      orb1: "rgba(16,185,129,0.55)",
      orb2: "rgba(5,150,105,0.35)",
      orb3: "rgba(20,184,166,0.3)",
      icon: Sparkles,
      accentColor: "#10B981",
    },
  ],
  applications: [
    {
      title: "Match Readiness Check",
      description: "See your exact match score against a casting brief before you hit submit.",
      imgSrc: "https://assets.mixkit.co/videos/42286/42286-1080.mp4",
    },
    {
      title: "Smart Answer Builder",
      description: "AI writes tailored application answers in your voice for each brief.",
      imgSrc: "https://assets.mixkit.co/videos/46635/46635-720.mp4",
    },
    {
      title: "Submission Optimizer",
      description: "Optimize your submission order and content for maximum casting visibility.",
      imgSrc: "https://assets.mixkit.co/videos/33899/33899-1080.mp4",
    },
    {
      title: "Scam & Risk Protection",
      description: "AI flags suspicious casting calls and risky contracts before you apply.",
      imgSrc: "https://assets.mixkit.co/videos/35644/35644-720.mp4",
    },
    {
      title: "Pack Exporter (PDF/ZIP)",
      description: "Export a complete submission pack as a polished PDF or ZIP instantly.",
      imgSrc: "https://assets.mixkit.co/videos/44560/44560-1080.mp4",
    },
    {
      title: "Expiring Share Links",
      description: "Share your profile with auto-expiring secure links — full access control.",
      gradient: "linear-gradient(135deg, #15000a 0%, #2d000f 50%, #150008 100%)",
      orb1: "rgba(244,63,94,0.5)",
      orb2: "rgba(251,113,133,0.3)",
      orb3: "rgba(239,68,68,0.25)",
      icon: Link2,
      accentColor: "#F43F5E",
    },
  ],
  brandkit: [
    {
      title: "Brand Identity Builder",
      description: "Build your personal brand from colors to messaging with AI guidance.",
      imgSrc: "https://assets.mixkit.co/videos/49141/49141-720.mp4",
    },
    {
      title: "AI Tagline Generator",
      description: "Generate memorable, on-brand taglines that casting directors remember.",
      imgSrc: "https://assets.mixkit.co/videos/8813/8813-720.mp4",
    },
    {
      title: "UGC Script Writer",
      description: "Write brand partnership scripts that sound exactly like you.",
      imgSrc: "https://assets.mixkit.co/videos/42210/42210-1080.mp4",
    },
    {
      title: "Shot List Generator",
      description: "Create a professional shot list for your next photoshoot in minutes.",
      gradient: "linear-gradient(135deg, #0a1500 0%, #1a2800 50%, #0a1500 100%)",
      orb1: "rgba(132,204,22,0.5)",
      orb2: "rgba(163,230,53,0.3)",
      orb3: "rgba(234,179,8,0.3)",
      icon: Sparkles,
      accentColor: "#84CC16",
    },
    {
      title: "Caption & Hook Generator",
      description: "Generate scroll-stopping captions and hooks for every social platform.",
      imgSrc: "https://assets.mixkit.co/videos/4919/4919-1080.mp4",
    },
    {
      title: "Brand Safety Checker",
      description: "Ensure your content aligns with brand partner guidelines before posting.",
      imgSrc: "https://assets.mixkit.co/videos/51214/51214-1080.mp4",
    },
  ],
  growth: [
    {
      title: "Conversion Funnel Analytics",
      description: "Track exactly how profile views convert to bookings and inquiries.",
      gradient: "linear-gradient(135deg, #100520 0%, #201040 50%, #100520 100%)",
      orb1: "rgba(168,85,247,0.55)",
      orb2: "rgba(139,92,246,0.35)",
      orb3: "rgba(99,102,241,0.3)",
      icon: Sparkles,
      accentColor: "#A855F7",
    },
    {
      title: "Skill Demand Heatmap",
      description: "See which looks and skills are trending in your market right now.",
      imgSrc: "https://assets.mixkit.co/videos/42648/42648-1080.mp4",
    },
    {
      title: "Portfolio Performance",
      description: "Measure how each photo and video in your portfolio performs over time.",
      imgSrc: "https://assets.mixkit.co/videos/50748/50748-1080.mp4",
    },
    {
      title: "Goal Tracking",
      description: "Set career milestones and let AI build a roadmap to achieve them.",
      imgSrc: "https://assets.mixkit.co/videos/5399/5399-720.mp4",
    },
    {
      title: "AI Improvement Tips",
      description: "Personalized, actionable tips to improve your bookability score weekly.",
      imgSrc: "https://assets.mixkit.co/videos/18151/18151-720.mp4",
    },
    {
      title: "Monthly Progress Reports",
      description: "Auto-generated monthly PDF reports on every aspect of your career growth.",
      imgSrc: "https://assets.mixkit.co/videos/4188/4188-1080.mp4",
    },
  ],
  assets: [
    {
      title: "AI Assets Library",
      description: "All your AI-generated bios, packs, and content in one organized library.",
      gradient: "linear-gradient(135deg, #080318 0%, #110830 55%, #060215 100%)",
      orb1: "rgba(99,102,241,0.6)",
      orb2: "rgba(139,92,246,0.4)",
      orb3: "rgba(59,130,246,0.3)",
      icon: FolderOpen,
      accentColor: "#6366F1",
    },
    {
      title: "Version History & Compare",
      description: "Browse, compare, and restore any previous version of your assets.",
      gradient: "linear-gradient(135deg, #060818 0%, #0c1030 55%, #040615 100%)",
      orb1: "rgba(59,130,246,0.6)",
      orb2: "rgba(14,165,233,0.4)",
      orb3: "rgba(99,102,241,0.3)",
      icon: GitBranch,
      accentColor: "#3B82F6",
    },
    {
      title: "PDF & Resume Export",
      description: "Export any asset or profile as a polished, branded PDF in one click.",
      gradient: "linear-gradient(135deg, #080518 0%, #100c2c 55%, #060315 100%)",
      orb1: "rgba(124,58,237,0.55)",
      orb2: "rgba(139,92,246,0.4)",
      orb3: "rgba(167,139,250,0.3)",
      icon: FileText,
      accentColor: "#7C3AED",
    },
    {
      title: "Application Pack ZIP",
      description: "Download all application assets as a single, submission-ready ZIP file.",
      gradient: "linear-gradient(135deg, #060a18 0%, #0a1230 55%, #040815 100%)",
      orb1: "rgba(14,165,233,0.55)",
      orb2: "rgba(6,182,212,0.4)",
      orb3: "rgba(59,130,246,0.3)",
      icon: Archive,
      accentColor: "#0EA5E9",
    },
    {
      title: "Expiring Share Links",
      description: "Create secure, time-limited sharing links with custom access controls.",
      gradient: "linear-gradient(135deg, #0a0618 0%, #140c30 55%, #080415 100%)",
      orb1: "rgba(139,92,246,0.55)",
      orb2: "rgba(99,102,241,0.4)",
      orb3: "rgba(124,58,237,0.3)",
      icon: Link2,
      accentColor: "#8B5CF6",
    },
    {
      title: "Public / Casting-Only Controls",
      description: "Control exactly who sees which parts of your profile at any time.",
      gradient: "linear-gradient(135deg, #050818 0%, #0a1030 55%, #030515 100%)",
      orb1: "rgba(6,182,212,0.55)",
      orb2: "rgba(14,165,233,0.4)",
      orb3: "rgba(59,130,246,0.25)",
      icon: Lock,
      accentColor: "#06B6D4",
    },
  ],
  safety: [
    {
      title: "Privacy Controls",
      description: "Granular controls over who can view your profile, media, and contact you.",
      gradient: "linear-gradient(135deg, #0a0518 0%, #180a30 55%, #0a0315 100%)",
      orb1: "rgba(124,58,237,0.55)",
      orb2: "rgba(139,92,246,0.35)",
      orb3: "rgba(99,102,241,0.25)",
      icon: ShieldCheck,
      accentColor: "#7C3AED",
    },
    {
      title: "Opt-Out of Model Training",
      description: "Your data will never be used to train AI models — guaranteed, one click.",
      gradient: "linear-gradient(135deg, #180508 0%, #2d0a10 55%, #150308 100%)",
      orb1: "rgba(244,63,94,0.55)",
      orb2: "rgba(239,68,68,0.35)",
      orb3: "rgba(251,113,133,0.25)",
      icon: EyeOff,
      accentColor: "#F43F5E",
    },
    {
      title: "AI Output Safety Guardrails",
      description: "Every AI output is checked for bias, accuracy, and safety before delivery.",
      gradient: "linear-gradient(135deg, #040a18 0%, #081530 55%, #030810 100%)",
      orb1: "rgba(14,165,233,0.55)",
      orb2: "rgba(6,182,212,0.35)",
      orb3: "rgba(59,130,246,0.25)",
      icon: AlertTriangle,
      accentColor: "#0EA5E9",
    },
    {
      title: "Human Override & Reporting",
      description: "Flag any AI output and request a human review with full audit trail.",
      gradient: "linear-gradient(135deg, #051508 0%, #0a2810 55%, #031008 100%)",
      orb1: "rgba(16,185,129,0.55)",
      orb2: "rgba(5,150,105,0.35)",
      orb3: "rgba(20,184,166,0.25)",
      icon: UserCheck,
      accentColor: "#10B981",
    },
    {
      title: "Watermark & Rights Settings",
      description: "Protect your media with embedded watermarks and custom rights metadata.",
      gradient: "linear-gradient(135deg, #140a05 0%, #281508 55%, #100803 100%)",
      orb1: "rgba(245,158,11,0.55)",
      orb2: "rgba(234,179,8,0.35)",
      orb3: "rgba(251,191,36,0.25)",
      icon: Fingerprint,
      accentColor: "#F59E0B",
    },
    {
      title: "Explain-Why AI Panel",
      description: "Understand exactly why the AI made each recommendation — full transparency.",
      gradient: "linear-gradient(135deg, #080518 0%, #100a30 55%, #060315 100%)",
      orb1: "rgba(139,92,246,0.55)",
      orb2: "rgba(124,58,237,0.35)",
      orb3: "rgba(99,102,241,0.25)",
      icon: HelpCircle,
      accentColor: "#8B5CF6",
    },
  ],
};

export function AIStudioFeatures() {
  const { openAuth } = useAuthModal();
  const [activeTab, setActiveTab] = useState("portfolio");
  const tools = toolsByTab[activeTab] ?? [];

  return (
    <section id="tools" className="py-24 border-t border-white/5" style={{ background: "#111111" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.85)" }}>
            Explore by workflow
          </p>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              <span className="text-white">All in a single</span>
              <br />
              <span className="text-white/60">intelligent suite</span>
            </h2>
            <button
              onClick={() => openAuth()}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-sm text-white/80 hover:bg-white/5 hover:border-white/30 transition-all"
              data-testid="btn-how-to-start"
              aria-label="How to start"
            >
              How to start <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* ── Horizontal tab bar ── */}
        <div className="flex gap-1.5 overflow-x-auto pb-2 scrollbar-none mb-8">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                data-testid={`btn-tab-${tab.id}`}
                aria-label={tab.label}
                className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                style={
                  isActive
                    ? {
                        background: "#1f1f1f",
                        color: "#fff",
                        border: "1px solid rgba(255,255,255,0.12)",
                      }
                    : {
                        background: "transparent",
                        color: "rgba(255,255,255,0.6)",
                        border: "1px solid transparent",
                      }
                }
              >
                <Icon className="w-3.5 h-3.5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* ── 3-column card grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map((tool) => {
            const isGradient = !!tool.gradient;
            const Icon = tool.icon;

            return (
              <div
                key={tool.title}
                className="group relative rounded-2xl overflow-hidden cursor-pointer flex flex-col"
                style={{
                  background: "#0c1a2e",
                  border: "1px solid rgba(255,255,255,0.07)",
                  transition: "border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.14)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 40px rgba(0,0,0,0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                {/* ── Visual area ── */}
                {isGradient ? (
                  /* Animated gradient visual */
                  <div
                    className="relative overflow-hidden shrink-0"
                    style={{ height: 190, background: tool.gradient }}
                  >
                    {/* Dot grid */}
                    <div
                      className="absolute inset-0 grid-pulse pointer-events-none"
                      style={{
                        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                        opacity: 0.07,
                      }}
                    />
                    {/* Orbs */}
                    <div className="absolute orb-a rounded-full pointer-events-none"
                      style={{ width: 130, height: 130, top: -30, right: -20, background: tool.orb1, filter: "blur(50px)" }} />
                    <div className="absolute orb-b rounded-full pointer-events-none"
                      style={{ width: 90, height: 90, bottom: 10, left: -15, background: tool.orb2, filter: "blur(40px)" }} />
                    <div className="absolute orb-c rounded-full pointer-events-none"
                      style={{ width: 60, height: 60, top: "40%", left: "50%", background: tool.orb3, filter: "blur(30px)" }} />
                    {/* Rotating rings */}
                    <div className="absolute ring-rotate rounded-full pointer-events-none"
                      style={{ width: 160, height: 160, top: "50%", left: "50%", marginTop: -80, marginLeft: -80, border: `1px solid ${tool.accentColor}22` }} />
                    <div className="absolute ring-rotate-rev rounded-full pointer-events-none"
                      style={{ width: 220, height: 220, top: "50%", left: "50%", marginTop: -110, marginLeft: -110, border: `1px dashed ${tool.accentColor}12` }} />
                    {/* Center icon */}
                    {Icon && (
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                          style={{ background: `${tool.accentColor}20`, border: `1px solid ${tool.accentColor}35` }}
                        >
                          <Icon className="w-8 h-8" style={{ color: tool.accentColor }} />
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  /* Photo visual */
                  <div className="relative overflow-hidden shrink-0" style={{ height: 190 }}>
                    <video
                      src={tool.imgSrc}
                      className="w-full h-full object-cover object-center group-hover:scale-[1.07] transition-transform duration-700"
                      autoPlay loop muted playsInline
                    />
                    {/* Subtle dark overlay for legibility */}
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(12,26,46,0.1) 0%, rgba(12,26,46,0.45) 100%)" }} />
                    {/* Try it pill — appears on hover */}
                    <div
                      className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-250"
                    >
                      <span
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white"
                        style={{ background: "rgba(0,0,0,0.72)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.15)" }}
                      >
                        Try it <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                )}

                {/* ── Content area ── */}
                <div className="flex flex-col gap-2 p-5 flex-1">
                  <p className="text-white font-bold text-[15px] leading-snug">
                    {tool.title}
                  </p>
                  <p className="text-[13px] leading-relaxed flex-1" style={{ color: "rgba(255,255,255,0.75)" }}>
                    {tool.description}
                  </p>
                  <button
                    className="inline-flex items-center gap-1.5 text-sm font-semibold mt-1 w-fit group-hover:gap-2.5 transition-all duration-200"
                    style={{ color: isGradient ? tool.accentColor : "rgba(255,255,255,0.8)" }}
                    data-testid={`btn-try-${tool.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`}
                    aria-label={`Try ${tool.title}`}
                  >
                    Try it <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* View all link */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => openAuth()}
            className="flex items-center gap-2 text-sm text-white/65 hover:text-white/80 transition-colors border border-white/[0.07] hover:border-white/15 px-6 py-3 rounded-full hover:bg-white/[0.03]"
            data-testid="btn-join-waitlist"
            aria-label="Join waitlist for full access"
          >
            Join waitlist for full access <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
