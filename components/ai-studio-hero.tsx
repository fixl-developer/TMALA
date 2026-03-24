"use client";
import { ArrowRight } from "lucide-react";
import { useAuthModal } from "@/components/auth-modal";

const providers = [
  "Gemini", "OpenAI", "Runway", "ElevenLabs", "Kling", "Seedream", "Pika",
];

const galleryRow1 = [
  { src: "https://assets.mixkit.co/videos/52270/52270-1080.mp4", w: 280 },
  { src: "https://assets.mixkit.co/videos/52057/52057-1080.mp4", w: 320 },
  { src: "https://assets.mixkit.co/videos/51283/51283-1080.mp4", w: 260 },
  { src: "https://assets.mixkit.co/videos/42286/42286-1080.mp4", w: 300 },
  { src: "https://assets.mixkit.co/videos/52041/52041-1080.mp4", w: 250 },
  { src: "https://assets.mixkit.co/videos/33899/33899-1080.mp4", w: 280 },
  { src: "https://assets.mixkit.co/videos/52039/52039-1080.mp4", w: 260 },
  { src: "https://assets.mixkit.co/videos/51295/51295-1080.mp4", w: 300 },
  { src: "https://assets.mixkit.co/videos/52046/52046-1080.mp4", w: 250 },
  { src: "https://assets.mixkit.co/videos/47492/47492-720.mp4", w: 280 },
];

const galleryRow2 = [
  { src: "https://assets.mixkit.co/videos/44560/44560-1080.mp4", w: 260 },
  { src: "https://assets.mixkit.co/videos/52257/52257-1080.mp4", w: 300 },
  { src: "https://assets.mixkit.co/videos/34477/34477-1080.mp4", w: 280 },
  { src: "https://assets.mixkit.co/videos/40369/40369-1080.mp4", w: 260 },
  { src: "https://assets.mixkit.co/videos/5399/5399-720.mp4", w: 250 },
  { src: "https://assets.mixkit.co/videos/809/809-720.mp4", w: 300 },
  { src: "https://assets.mixkit.co/videos/42210/42210-1080.mp4", w: 270 },
  { src: "https://assets.mixkit.co/videos/18151/18151-720.mp4", w: 250 },
  { src: "https://assets.mixkit.co/videos/19639/19639-720.mp4", w: 280 },
  { src: "https://assets.mixkit.co/videos/4188/4188-1080.mp4", w: 300 },
];

export function AIStudioHero() {
  const { openAuth } = useAuthModal();
  return (
    <section className="pt-32 pb-10 overflow-hidden" style={{ background: "#111111" }}>

      {/* Text block */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mb-14">

        {/* Badge — Freepik-style dark pill with blue NEW badge */}
        <div className="anim-slide-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-7" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)", color: "rgba(255,255,255,0.85)", fontSize: "0.75rem", fontWeight: 500 }}>
          <span className="px-1.5 py-0.5 rounded text-white font-bold leading-none" style={{ background: "#2563EB", fontSize: "10px" }}>NEW</span>
          AI Studio · Public Beta
        </div>

        {/* Heading — plain white, no gradient */}
        <h1 className="anim-slide-up delay-1 text-[2.5rem] sm:text-[3.5rem] lg:text-[4.5rem] font-bold leading-[1.1] tracking-tight text-white mb-5">
          You bring the talent.<br />
          AI powers the career.
        </h1>

        <p className="anim-slide-up delay-2 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>
          One suite: bio generation, media scoring, audition coaching, portfolio packaging,
          and AI generation — purpose-built for talent professionals.
        </p>

        {/* CTAs */}
        <div className="anim-slide-up delay-3 flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={() => openAuth()}
            data-testid="btn-get-started"
            aria-label="Get started for free"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm transition-all hover:bg-white/90 hover:-translate-y-0.5"
          >
            Get started for free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
          <a href="#tools" className="text-sm transition-colors" style={{ color: "rgba(255,255,255,0.85)" }}>
            Explore all tools →
          </a>
        </div>

        {/* Provider logos strip */}
        <div className="anim-slide-up delay-3">
          <p className="uppercase font-semibold mb-4" style={{ fontSize: "10px", color: "rgba(255,255,255,0.65)", letterSpacing: "0.35em" }}>
            Powered by industry-leading AI models
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
            {providers.map((name) => (
              <span
                key={name}
                className="text-sm font-bold tracking-wide cursor-default transition-colors"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scrolling gallery */}
      <div className="relative mt-6 select-none pb-8">
        {/* Row 1 — left scroll */}
        <div className="flex gap-3 mb-3 animate-scroll-left" style={{ width: "max-content" }}>
          {[...galleryRow1, ...galleryRow1].map((img, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 rounded-2xl overflow-hidden group cursor-pointer"
              style={{ width: img.w, height: 210, background: "#1a1a1a" }}
            >
              <video
                src={img.src}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                autoPlay loop muted playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Row 2 — right scroll */}
        <div className="flex gap-3 animate-scroll-right" style={{ width: "max-content" }}>
          {[...galleryRow2, ...galleryRow2].map((img, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 rounded-2xl overflow-hidden group cursor-pointer"
              style={{ width: img.w, height: 210, background: "#1a1a1a" }}
            >
              <video
                src={img.src}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                autoPlay loop muted playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Side fade masks */}
        <div className="absolute inset-y-0 left-0 w-40 pointer-events-none z-10" style={{ background: "linear-gradient(to right, #111111, transparent)" }} />
        <div className="absolute inset-y-0 right-0 w-40 pointer-events-none z-10" style={{ background: "linear-gradient(to left, #111111, transparent)" }} />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-10" style={{ background: "linear-gradient(to top, #111111, transparent)" }} />
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .anim-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
      `}</style>
    </section>
  );
}
