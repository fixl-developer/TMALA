import { useState } from "react";

const categories = [
  {
    id: "designers",
    label: "Designers",
    title: "Design faster, push creative limits",
    description:
      "Generate stunning visuals in seconds with AI tools that unlock entirely new creative directions. Iterate rapidly, adapt assets for every format, and stay on-brand across every campaign—without the bottleneck.",
    cta: "View more",
    bg: "from-indigo-900 via-violet-900 to-slate-900",
    accent: "#a78bfa",
    imageBg: "bg-indigo-950",
    imageContent: (
      <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="g1" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0.2" />
          </radialGradient>
        </defs>
        <rect width="200" height="200" fill="url(#g1)" rx="12" />
        <text x="50%" y="52%" dominantBaseline="middle" textAnchor="middle"
          fontFamily="serif" fontSize="52" fontWeight="900" fill="#c4b5fd" opacity="0.9"
          letterSpacing="-2">DREAMS</text>
        <circle cx="100" cy="60" r="18" fill="none" stroke="#7c3aed" strokeWidth="1.5" opacity="0.6"/>
        <circle cx="100" cy="60" r="6" fill="#a78bfa" opacity="0.8"/>
        <line x1="82" y1="60" x2="118" y2="60" stroke="#7c3aed" strokeWidth="1" opacity="0.5"/>
        <line x1="100" y1="42" x2="100" y2="78" stroke="#7c3aed" strokeWidth="1" opacity="0.5"/>
        <text x="24" y="170" fontFamily="monospace" fontSize="9" fill="#6d28d9" opacity="0.7">23 OCT</text>
      </svg>
    ),
    tools: [],
  },
  {
    id: "marketers",
    label: "Marketers",
    title: "Create faster, explore new possibilities",
    description:
      "Produce high-quality visuals in seconds with AI tools that open up new creative directions. Adapt assets for every channel, automate repetitive tasks, and scale campaigns—while keeping every piece consistent and on-brand.",
    cta: "View more",
    bg: "from-slate-800 via-purple-950 to-slate-900",
    accent: "#f0abfc",
    imageBg: "bg-purple-100",
    imageContent: (
      <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e879f9" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0.3"/>
          </linearGradient>
        </defs>
        <rect width="200" height="200" fill="#f5f3ff" rx="12"/>
        <ellipse cx="130" cy="70" rx="30" ry="30" fill="#e879f9" opacity="0.8"/>
        <ellipse cx="115" cy="85" rx="22" ry="22" fill="#f0abfc" opacity="0.7"/>
        <rect x="50" y="110" width="110" height="65" rx="8" fill="#1e1b4b" opacity="0.1"/>
        <rect x="60" y="118" width="50" height="7" rx="3" fill="#7c3aed" opacity="0.7"/>
        <rect x="60" y="130" width="80" height="5" rx="2" fill="#a78bfa" opacity="0.5"/>
        <rect x="60" y="140" width="65" height="5" rx="2" fill="#a78bfa" opacity="0.4"/>
        <circle cx="75" cy="90" r="20" fill="#818cf8" opacity="0.5"/>
        <circle cx="85" cy="80" r="14" fill="#6366f1" opacity="0.6"/>
      </svg>
    ),
    tools: ["Upscale", "Resize", "Background"],
  },
  {
    id: "filmmakers",
    label: "Filmmakers",
    title: "Produce cinematic content at scale",
    description:
      "Transform your filmmaking workflow with AI-powered tools for color grading, scene generation, and storyboard creation. Bring your vision to life faster than ever before.",
    cta: "View more",
    bg: "from-amber-950 via-yellow-900 to-slate-900",
    accent: "#fcd34d",
    imageBg: "bg-sky-100",
    imageContent: (
      <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="#e0f2fe" rx="12"/>
        {/* Camera body */}
        <rect x="55" y="75" width="90" height="60" rx="6" fill="#f59e0b"/>
        <rect x="65" y="65" width="70" height="15" rx="4" fill="#d97706"/>
        {/* Lens */}
        <circle cx="100" cy="105" r="22" fill="#1c1917" stroke="#92400e" strokeWidth="3"/>
        <circle cx="100" cy="105" r="16" fill="#292524"/>
        <circle cx="100" cy="105" r="10" fill="#78350f"/>
        <circle cx="94" cy="99" r="3" fill="#fcd34d" opacity="0.6"/>
        {/* Tripod */}
        <line x1="100" y1="135" x2="70" y2="175" stroke="#92400e" strokeWidth="4" strokeLinecap="round"/>
        <line x1="100" y1="135" x2="100" y2="178" stroke="#92400e" strokeWidth="4" strokeLinecap="round"/>
        <line x1="100" y1="135" x2="130" y2="175" stroke="#92400e" strokeWidth="4" strokeLinecap="round"/>
        <line x1="72" y1="160" x2="128" y2="160" stroke="#92400e" strokeWidth="2" strokeLinecap="round"/>
        {/* Viewfinder */}
        <rect x="125" y="80" width="20" height="14" rx="3" fill="#d97706"/>
        <rect x="128" y="83" width="14" height="8" rx="2" fill="#78350f"/>
      </svg>
    ),
    tools: [],
  },
  {
    id: "content-creators",
    label: "Content creators",
    title: "Go viral with AI-powered content",
    description:
      "Create scroll-stopping content for every platform in minutes. Generate thumbnails, social posts, and short-form videos that capture attention and grow your audience effortlessly.",
    cta: "View more",
    bg: "from-rose-900 via-pink-900 to-slate-900",
    accent: "#fb7185",
    imageBg: "bg-rose-50",
    imageContent: (
      <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="g4" cx="60%" cy="40%" r="70%">
            <stop offset="0%" stopColor="#fb7185" stopOpacity="0.5"/>
            <stop offset="100%" stopColor="#fda4af" stopOpacity="0.1"/>
          </radialGradient>
        </defs>
        <rect width="200" height="200" fill="#fff1f2" rx="12"/>
        <rect width="200" height="200" fill="url(#g4)" rx="12"/>
        {/* Face shape */}
        <ellipse cx="105" cy="95" rx="55" ry="65" fill="#fecdd3" opacity="0.7"/>
        {/* Eyes */}
        <ellipse cx="88" cy="85" rx="8" ry="10" fill="#1c1917"/>
        <ellipse cx="122" cy="82" rx="6" ry="8" fill="#1c1917"/>
        <circle cx="90" cy="83" r="2" fill="white"/>
        <circle cx="123" cy="80" r="2" fill="white"/>
        {/* Colorful element across face */}
        <rect x="60" y="88" width="80" height="18" rx="9" fill="#f43f5e" opacity="0.8"/>
        <circle cx="65" cy="97" r="7" fill="#fb923c"/>
        <circle cx="82" cy="97" r="7" fill="#facc15"/>
        <circle cx="99" cy="97" r="7" fill="#4ade80"/>
        <circle cx="116" cy="97" r="7" fill="#60a5fa"/>
        <circle cx="133" cy="97" r="7" fill="#c084fc"/>
        {/* Hair suggestion */}
        <path d="M50 90 Q55 40 105 35 Q155 40 155 90" fill="#1c1917" opacity="0.8"/>
      </svg>
    ),
    tools: [],
  },
];

export default function WorkflowAccordion() {
  const [active, setActive] = useState(1); // Marketers expanded by default
  const [direction, setDirection] = useState(1);

  const navigate = (dir) => {
    setDirection(dir);
    setActive((prev) => {
      const next = prev + dir;
      if (next < 0) return categories.length - 1;
      if (next >= categories.length) return 0;
      return next;
    });
  };

  return (
    <div
      style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" }}
      className="min-h-screen bg-[#0f0f11] flex items-center justify-center p-8"
    >
      <div className="w-full max-w-5xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white text-2xl font-semibold tracking-tight max-w-lg leading-snug">
            Boost your professional workflow and productivity
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => navigate(-1)}
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-all duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9 11L5 7L9 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={() => navigate(1)}
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-all duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="flex gap-3 h-[340px]">
          {categories.map((cat, i) => {
            const isActive = i === active;
            return (
              <div
                key={cat.id}
                onClick={() => setActive(i)}
                style={{
                  flex: isActive ? "5 1 0%" : "0.6 1 0%",
                  transition: "flex 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: isActive ? "default" : "pointer",
                  borderRadius: "16px",
                  overflow: "hidden",
                  position: "relative",
                  minWidth: 0,
                }}
                className={`bg-gradient-to-br ${cat.bg}`}
              >
                {/* Collapsed state: rotated label */}
                <div
                  style={{
                    opacity: isActive ? 0 : 1,
                    transition: "opacity 0.3s ease",
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    paddingBottom: "20px",
                    pointerEvents: isActive ? "none" : "auto",
                  }}
                >
                  <span
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                      color: "rgba(255,255,255,0.9)",
                      fontSize: "13px",
                      fontWeight: 500,
                      letterSpacing: "0.04em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {cat.label}
                  </span>
                </div>

                {/* Expanded state: full content */}
                <div
                  style={{
                    opacity: isActive ? 1 : 0,
                    transition: "opacity 0.4s ease 0.15s",
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    padding: "24px",
                    gap: "20px",
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                >
                  {/* Text side */}
                  <div className="flex flex-col justify-between" style={{ flex: "1 1 0%", minWidth: 0 }}>
                    <div>
                      <p
                        className="text-white/50 text-xs font-medium mb-3 uppercase tracking-widest"
                      >
                        {cat.label}
                      </p>
                      <h3
                        className="text-white text-lg font-semibold mb-3 leading-snug"
                        style={{ fontSize: "clamp(14px, 1.5vw, 18px)" }}
                      >
                        {cat.title}
                      </h3>
                      <p
                        className="text-white/55 text-xs leading-relaxed"
                        style={{ fontSize: "clamp(11px, 1vw, 13px)" }}
                      >
                        {cat.description}
                      </p>
                    </div>

                    <button
                      className="self-end px-5 py-2 rounded-full bg-white text-black text-xs font-semibold hover:bg-white/90 transition-colors duration-200"
                    >
                      {cat.cta}
                    </button>
                  </div>

                  {/* Image side */}
                  <div
                    className={`rounded-xl overflow-hidden flex-shrink-0 ${cat.imageBg}`}
                    style={{
                      width: "clamp(120px, 22%, 180px)",
                      position: "relative",
                    }}
                  >
                    <div className="w-full h-full">
                      {cat.imageContent}
                    </div>

                    {/* Tool badges */}
                    {cat.tools.length > 0 && (
                      <div
                        style={{
                          position: "absolute",
                          bottom: "10px",
                          left: "50%",
                          transform: "translateX(-50%)",
                          display: "flex",
                          gap: "5px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {cat.tools.map((tool) => (
                          <span
                            key={tool}
                            className="bg-black/40 backdrop-blur-sm text-white/90 text-[9px] px-2 py-0.5 rounded-full flex items-center gap-1"
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full inline-block"
                              style={{ backgroundColor: cat.accent }}
                            />
                            {tool}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dot indicators */}
        <div className="flex gap-2 justify-center mt-5">
          {categories.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: i === active ? "20px" : "6px",
                height: "6px",
                borderRadius: "9999px",
                backgroundColor: i === active ? "white" : "rgba(255,255,255,0.25)",
                transition: "all 0.3s ease",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
