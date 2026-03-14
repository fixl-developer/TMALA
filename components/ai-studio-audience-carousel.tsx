"use client";
import { useState } from "react";
import {
  Users,
  Search,
  Trophy,
  Megaphone,
  CalendarCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const audiences = [
  {
    id: "modeling",
    label: "Modeling Agencies",
    shortLabel: "Modeling",
    icon: Users,
    // Active card gradient
    gradient: "linear-gradient(135deg, #12003a 0%, #2a0060 55%, #180a50 100%)",
    accentColor: "#7C3AED",
    accentLight: "rgba(124,58,237,0.18)",
    accentBorder: "rgba(124,58,237,0.35)",
    badge: "B1 Blueprint",
    title: "From roster to payout, fully automated.",
    description:
      "Manage your entire talent pool with AI-scored profiles, instant comp card generation, option holds, conflict management, and commission auto-splits — all from one dashboard.",
    features: [
      "Option holds & conflict tracking",
      "Commission auto-splits by booking",
      "AI comp card generation",
      "Portfolio completeness scoring",
      "Escrow-protected payments",
    ],
    stat: { value: "3.2H", label: "saved per booking" },
    cta: "Explore B1 Blueprint",
    // Active card right-side photo
    imgSrc: "https://assets.mixkit.co/videos/52270/52270-1080.mp4",
    // Inactive card video
    thumbSrc: "https://assets.mixkit.co/videos/52057/52057-1080.mp4",
    // Duotone color overlay on inactive card
    thumbOverlay: "rgba(124,58,237,0.45)",
    // Inactive card bg color (top strip)
    cardBg: "#1a0040",
  },
  {
    id: "casting",
    label: "Casting Directors",
    shortLabel: "Casting",
    icon: Search,
    gradient: "linear-gradient(135deg, #001525 0%, #003060 55%, #001530 100%)",
    accentColor: "#0EA5E9",
    accentLight: "rgba(14,165,233,0.18)",
    accentBorder: "rgba(14,165,233,0.35)",
    badge: "B2 Blueprint",
    title: "Post a brief. AI finds the match. Done.",
    description:
      "Publish casting calls, let AI screen every submission against your brief, manage shortlists in NDA-gated viewing rooms, and automate callback notifications — no manual sifting.",
    features: [
      "AI-powered talent brief matching",
      "NDA-gated viewing rooms",
      "Automated shortlist ranking",
      "Submission funnel analytics",
      "Callback workflow automation",
    ],
    stat: { value: "< 30s", label: "to find a match" },
    cta: "Explore B2 Blueprint",
    imgSrc: "https://assets.mixkit.co/videos/4809/4809-1080.mp4",
    thumbSrc: "https://assets.mixkit.co/videos/34477/34477-1080.mp4",
    thumbOverlay: "rgba(14,165,233,0.40)",
    cardBg: "#001830",
  },
  {
    id: "pageant",
    label: "Pageant Organizers",
    shortLabel: "Pageants",
    icon: Trophy,
    gradient: "linear-gradient(135deg, #251000 0%, #4a2800 55%, #1a0e00 100%)",
    accentColor: "#F59E0B",
    accentLight: "rgba(245,158,11,0.18)",
    accentBorder: "rgba(245,158,11,0.35)",
    badge: "B3 Blueprint",
    title: "Run any competition with integrity built in.",
    description:
      "Manage registrations, sponsor packages, multi-round scoring with tamper-proof result locks, and dual-approval publishing — from open registrations to the crowning moment.",
    features: [
      "Integrity-locked scoring system",
      "Dual-approval result publishing",
      "Multi-round competition flow",
      "Sponsor deal rooms",
      "Anomaly detection in judging",
    ],
    stat: { value: "100%", label: "score integrity" },
    cta: "Explore B3 Blueprint",
    imgSrc: "https://assets.mixkit.co/videos/47777/47777-720.mp4",
    thumbSrc: "https://assets.mixkit.co/videos/26787/26787-720.mp4",
    thumbOverlay: "rgba(245,158,11,0.40)",
    cardBg: "#2a1400",
  },
  {
    id: "brand",
    label: "Brand & Influencer",
    shortLabel: "Brand Deals",
    icon: Megaphone,
    gradient: "linear-gradient(135deg, #001510 0%, #003828 55%, #001a14 100%)",
    accentColor: "#10B981",
    accentLight: "rgba(16,185,129,0.18)",
    accentBorder: "rgba(16,185,129,0.35)",
    badge: "B4 Blueprint",
    title: "Brief to payout. Every deal, delivered.",
    description:
      "Negotiate contracts in deal rooms, manage deliverable approval cycles with escrow, track ROI against campaign targets, and auto-release payments on approval — no delays.",
    features: [
      "Escrow-protected deal rooms",
      "Content deliverable approval flow",
      "Campaign ROI tracking",
      "Auto-release on approval",
      "Influencer brief matching",
    ],
    stat: { value: "0", label: "payment disputes" },
    cta: "Explore B4 Blueprint",
    imgSrc: "https://assets.mixkit.co/videos/49141/49141-720.mp4",
    thumbSrc: "https://assets.mixkit.co/videos/42210/42210-1080.mp4",
    thumbOverlay: "rgba(16,185,129,0.40)",
    cardBg: "#001a10",
  },
  {
    id: "events",
    label: "Event Staffing",
    shortLabel: "Staffing",
    icon: CalendarCheck,
    gradient: "linear-gradient(135deg, #220010 0%, #480018 55%, #200010 100%)",
    accentColor: "#F43F5E",
    accentLight: "rgba(244,63,94,0.18)",
    accentBorder: "rgba(244,63,94,0.35)",
    badge: "B7 Blueprint",
    title: "Assign. Check in. Pay. Zero manual work.",
    description:
      "Post shifts, auto-assign based on availability and location, track real-time GPS check-ins, flag no-shows before they become problems, and process payouts when confirmed.",
    features: [
      "GPS-based check-in tracking",
      "Auto-assignment by availability",
      "No-show detection & alerts",
      "Timesheet auto-approval",
      "Instant payout on shift confirm",
    ],
    stat: { value: "0H", label: "manual payout work" },
    cta: "Explore B7 Blueprint",
    imgSrc: "https://assets.mixkit.co/videos/4188/4188-1080.mp4",
    thumbSrc: "https://assets.mixkit.co/videos/33906/33906-1080.mp4",
    thumbOverlay: "rgba(244,63,94,0.40)",
    cardBg: "#250010",
  },
];

export function AIStudioAudienceCarousel() {
  // hoveredIndex = which card is currently hovered (null = no hover → all equal)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  // activeIndex = last hovered card (keeps content visible during transition)
  const [activeIndex, setActiveIndex] = useState(0);

  const handleEnter = (i: number) => {
    setHoveredIndex(i);
    setActiveIndex(i);
  };
  const handleLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <section
      className="py-24 border-t border-white/5 overflow-hidden"
      style={{ background: "#111111" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Built for every corner
            <br className="hidden sm:block" />
            of the talent industry
          </h2>
          <p className="mt-3 text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>
            Hover any card to explore
          </p>
        </div>

        {/* ── DESKTOP ACCORDION ── */}
        <div
          className="hidden lg:grid gap-3"
          style={{
            height: 560,
            gridTemplateColumns: audiences.map((_, i) =>
              i === hoveredIndex ? "4fr" : "1fr"
            ).join(" "),
            transition: "grid-template-columns 0.5s ease-in-out",
          }}
          onMouseLeave={handleLeave}
        >
          {audiences.map((a, i) => {
            // isExpanded: this card is hovered and expanded
            const isExpanded = hoveredIndex === i;
            // isActive: show full content (last hovered, stays visible during transition out)
            const isActive = activeIndex === i;
            const Icon = a.icon;

            return (
              <div
                key={a.id}
                onMouseEnter={() => handleEnter(i)}
                className="relative rounded-2xl overflow-hidden cursor-pointer"
                style={{
                  transition: "border-color 0.4s ease, box-shadow 0.4s ease",
                  border: isExpanded
                    ? `1px solid ${a.accentColor}35`
                    : `1px solid rgba(255,255,255,0.07)`,
                  boxShadow: isExpanded
                    ? `0 0 40px ${a.accentColor}18`
                    : "none",
                  minWidth: 0,
                }}
              >
                {/* ── INACTIVE CARD ── always rendered, fades out when expanded */}
                <div
                  className="absolute inset-0 flex flex-col"
                  style={{
                    opacity: isExpanded ? 0 : 1,
                    visibility: isExpanded ? "hidden" : "visible",
                    transition: isExpanded
                      ? "opacity 0.1s ease 0s, visibility 0s linear 0.1s"   /* instant hide */
                      : "opacity 0.3s ease 0.35s, visibility 0s linear 0s", /* reappear after card shrinks */
                    pointerEvents: isExpanded ? "none" : "auto",
                  }}
                >
                    {/* Colored top strip */}
                    <div
                      className="shrink-0 px-4 py-4"
                      style={{ background: a.cardBg }}
                    >
                      <span className="text-white text-xs font-bold uppercase tracking-wider leading-none">
                        {a.shortLabel}
                      </span>
                    </div>

                    {/* Photo with duotone color overlay */}
                    <div className="flex-1 relative overflow-hidden">
                      <video
                        src={a.thumbSrc}
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ transition: "transform 0.5s ease" }}
                        autoPlay loop muted playsInline
                      />
                      {/* Duotone color overlay — gives the vibrant Freepik-like feel */}
                      <div
                        className="absolute inset-0"
                        style={{
                          background: a.thumbOverlay,
                          mixBlendMode: "multiply",
                        }}
                      />
                      {/* Bottom fade to card bg */}
                      <div
                        className="absolute bottom-0 left-0 right-0 h-24"
                        style={{
                          background: `linear-gradient(to top, ${a.cardBg}cc, transparent)`,
                        }}
                      />
                      {/* Accent dot */}
                      <div
                        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
                        style={{ background: a.accentColor }}
                      />
                    </div>
                </div>

                {/* ── ACTIVE CARD ── render for lastHovered (isActive), visible only when expanded */}
                {isActive && (
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{
                      background: audiences[activeIndex].gradient,
                      opacity: isExpanded ? 1 : 0,
                      transition: isExpanded
                        ? "opacity 0.15s ease 0s"      /* bg appears quickly */
                        : "opacity 0.15s ease 0s",     /* bg hides quickly */
                      pointerEvents: isExpanded ? "auto" : "none",
                    }}
                  >
                    {/* Inner wrapper — slides in after card expands */}
                    <div
                      className="absolute inset-0 flex items-stretch"
                      style={{
                        opacity: isExpanded ? 1 : 0,
                        transform: isExpanded ? "translateX(0)" : "translateX(-30px)",
                        transition: isExpanded
                          ? "opacity 0.35s ease 0.45s, transform 0.45s cubic-bezier(0.22,1,0.36,1) 0.45s"
                          : "opacity 0.15s ease 0s, transform 0.15s ease 0s",
                      }}
                    >
                    {/* Glow orb */}
                    <div
                      className="absolute -top-16 -left-16 w-72 h-72 rounded-full pointer-events-none"
                      style={{ background: a.accentColor + "14", filter: "blur(60px)" }}
                    />

                    {/* LEFT: simplified content — fixed min-width prevents text reflow during expansion */}
                    <div
                      className="flex flex-col justify-center gap-4 p-7 lg:p-8 lg:pr-4"
                      style={{
                        flex: "1 1 0%",
                        minWidth: 460,
                      }}
                    >
                      {/* Category pill */}
                      <div
                        className="inline-flex items-center gap-1.5 self-start px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest"
                        style={{ background: a.accentLight, border: `1px solid ${a.accentBorder}`, color: a.accentColor }}
                      >
                        <Icon className="w-3 h-3" />
                        {a.label}
                      </div>

                      {/* Heading */}
                      <h3 className="text-xl lg:text-2xl font-bold text-white leading-snug">
                        {a.title}
                      </h3>

                      {/* Short description */}
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
                        {a.description}
                      </p>

                      {/* Top 3 features */}
                      <div className="flex flex-col gap-1.5">
                        {a.features.slice(0, 3).map((f) => (
                          <div key={f} className="flex items-center gap-2">
                            <CheckCircle2
                              className="w-3.5 h-3.5 shrink-0"
                              style={{ color: a.accentColor }}
                              strokeWidth={2.5}
                            />
                            <span className="text-xs" style={{ color: "rgba(255,255,255,0.8)" }}>
                              {f}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <button
                        className="inline-flex items-center gap-2 self-start px-5 py-2.5 rounded-full text-sm font-bold text-white hover:opacity-90 hover:scale-[1.02] transition-all duration-200"
                        style={{ background: a.accentColor }}
                      >
                        {a.cta} <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* RIGHT: contained visual — smaller, floating card style */}
                    <div
                      className="shrink-0 flex items-center justify-center"
                      style={{ width: 220, paddingRight: 24, paddingLeft: 8 }}
                    >
                      <div
                        className="relative overflow-hidden"
                        style={{
                          width: 170,
                          height: 230,
                          borderRadius: 16,
                          border: `1px solid ${a.accentColor}30`,
                          boxShadow: `0 8px 32px ${a.accentColor}22`,
                        }}
                      >
                        <video
                          src={a.imgSrc}
                          className="w-full h-full object-cover object-center"
                          autoPlay loop muted playsInline
                        />
                        <div
                          className="absolute inset-0"
                          style={{ background: `linear-gradient(160deg, transparent 40%, ${a.accentColor}30 100%)` }}
                        />
                      </div>
                    </div>
                    </div>{/* end inner wrapper */}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ── MOBILE ── */}
        <div className="lg:hidden flex flex-col gap-3">
          {/* Pills */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            {audiences.map((a, i) => (
              <button
                key={a.id}
                onClick={() => setActiveIndex(i)}
                className="flex-shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full border transition-all duration-200"
                style={
                  i === activeIndex
                    ? { background: a.accentLight, borderColor: a.accentBorder, color: a.accentColor }
                    : { background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.85)" }
                }
              >
                {a.shortLabel}
              </button>
            ))}
          </div>

          {/* Active card */}
          {(() => {
            const a = audiences[activeIndex];
            const Icon = a.icon;
            return (
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ minHeight: 420, background: a.gradient, border: `1px solid ${a.accentColor}25` }}
              >
                <div className="relative z-10 p-6 flex flex-col" style={{ minHeight: 420 }}>
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-4 self-start"
                    style={{ background: a.accentLight, border: `1px solid ${a.accentBorder}`, color: a.accentColor }}
                  >
                    <Icon className="w-3 h-3" /> {a.badge}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 leading-tight">{a.title}</h3>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.85)" }}>
                    {a.description}
                  </p>
                  <div className="flex flex-col gap-2 mb-6">
                    {a.features.map((f) => (
                      <div key={f} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: a.accentColor }} strokeWidth={2} />
                        <span className="text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 mt-auto flex-wrap">
                    <div className="flex items-center gap-3 px-4 py-3 rounded-xl" style={{ background: a.accentLight, border: `1px solid ${a.accentBorder}` }}>
                      <span className="font-bebas text-3xl leading-none" style={{ color: a.accentColor }}>{a.stat.value}</span>
                      <span className="text-xs leading-snug max-w-[80px]" style={{ color: "rgba(255,255,255,0.75)" }}>{a.stat.label}</span>
                    </div>
                    <button className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-bold text-white" style={{ background: a.accentColor }}>
                      {a.cta} <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Dot indicators — highlight hovered (desktop) or active (mobile) */}
        <div className="flex gap-2 justify-center mt-6">
          {audiences.map((a, i) => {
            const highlighted = hoveredIndex !== null ? i === hoveredIndex : i === activeIndex;
            return (
              <button
                key={i}
                onClick={() => { setActiveIndex(i); setHoveredIndex(null); }}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: highlighted ? 28 : 6,
                  background: highlighted ? a.accentColor : "rgba(255,255,255,0.15)",
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
