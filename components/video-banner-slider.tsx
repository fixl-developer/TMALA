"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

/* ────────────────────────────────────────────
   SLIDE DATA
   ──────────────────────────────────────────── */

interface BannerSlide {
  id: number
  videoSrc: string
  title: string
  subtitle: string
  ctaText: string
}

const defaultSlides: BannerSlide[] = [
  {
    id: 1,
    videoSrc: "https://assets.mixkit.co/videos/805/805-1080.mp4",
    title: "Create content\nyour way.",
    subtitle:
      "From impactful ad-films and influencer campaigns,\nto full-spectrum production solutions – we've got you covered.",
    ctaText: "Request A Call Back",
  },
  {
    id: 2,
    videoSrc: "https://assets.mixkit.co/videos/52270/52270-1080.mp4",
    title: "Walk the runway.\nOwn the spotlight.",
    subtitle:
      "Get discovered by top agencies with a verified profile\nthat showcases your best work to the world.",
    ctaText: "Create Portfolio",
  },
  {
    id: 3,
    videoSrc: "https://assets.mixkit.co/videos/50641/50641-1080.mp4",
    title: "Your next shoot\nstarts here.",
    subtitle:
      "Direct casting calls, brand campaigns, and exclusive gigs\n— all in one intelligent platform.",
    ctaText: "View Opportunities",
  },
  {
    id: 4,
    videoSrc: "https://assets.mixkit.co/videos/809/809-1080.mp4",
    title: "Every angle.\nEvery opportunity.",
    subtitle:
      "AI-enhanced portfolios that score quality, organize your work,\nand connect you with the right agencies instantly.",
    ctaText: "Get Started Free",
  },
]

const AUTO_SLIDE_INTERVAL = 7000

/* ────────────────────────────────────────────
   COMPONENT
   ──────────────────────────────────────────── */

export function VideoBannerSlider({
  slides = defaultSlides,
}: {
  slides?: BannerSlide[]
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState<number | null>(null)
  const [textStage, setTextStage] = useState<"visible" | "exiting" | "entering">("visible")
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  const totalSlides = slides.length

  /* ── Navigation ── */
  const goToSlide = useCallback(
    (index: number) => {
      if (index === currentIndex) return
      setTextStage("exiting")
      setPrevIndex(currentIndex)

      setTimeout(() => {
        setCurrentIndex(index)
        setTimeout(() => setTextStage("entering"), 50)
        setTimeout(() => {
          setTextStage("visible")
          setPrevIndex(null)
        }, 600)
      }, 400)
    },
    [currentIndex]
  )

  const goNext = useCallback(() => {
    goToSlide((currentIndex + 1) % totalSlides)
  }, [currentIndex, totalSlides, goToSlide])

  const goPrev = useCallback(() => {
    goToSlide((currentIndex - 1 + totalSlides) % totalSlides)
  }, [currentIndex, totalSlides, goToSlide])

  /* ── Auto-slide ── */
  useEffect(() => {
    const timer = setInterval(goNext, AUTO_SLIDE_INTERVAL)
    return () => clearInterval(timer)
  }, [goNext])

  /* ── Video management ── */
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return
      if (i === currentIndex) {
        video.currentTime = 0
        video.play().catch(() => {})
      } else {
        video.pause()
      }
    })
  }, [currentIndex])

  /* ── Keyboard ── */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev()
      if (e.key === "ArrowRight") goNext()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [goNext, goPrev])

  /* ── Touch swipe ── */
  const handleTouchStart = (e: React.TouchEvent) =>
    setTouchStart(e.touches[0].clientX)
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return
    const diff = touchStart - e.changedTouches[0].clientX
    if (Math.abs(diff) > 60) {
      diff > 0 ? goNext() : goPrev()
    }
    setTouchStart(null)
  }

  /* ── Text animation ── */
  const textVisible = textStage === "visible" || textStage === "entering"

  const slide = slides[currentIndex]

  return (
    <div className="px-3 sm:px-4 lg:px-5 pt-[4.5rem] sm:pt-[5rem]">
    <section
      className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl"
      style={{
        height: "calc(100vh - 2rem)",
        minHeight: 520,
        maxHeight: 920,
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* ── VIDEO LAYERS (crossfade) ── */}
      {slides.map((s, i) => {
        const isActive = i === currentIndex
        const isPrev = i === prevIndex

        return (
          <div
            key={s.id}
            className="absolute inset-0 transition-opacity duration-[1400ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{
              opacity: isActive ? 1 : isPrev ? 0 : 0,
              zIndex: isActive ? 2 : isPrev ? 1 : 0,
            }}
          >
            <video
              ref={(el) => {
                videoRefs.current[i] = el
              }}
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                transform: isActive ? "scale(1.06)" : "scale(1)",
                transition: "transform 9s ease-out",
              }}
              src={s.videoSrc}
              muted
              loop
              playsInline
              preload={i <= 1 ? "auto" : "metadata"}
            />
          </div>
        )
      })}

      {/* ── WARM CINEMATIC OVERLAY ── */}
      {/* Left warm gradient (orange/amber) */}
      <div
        className="absolute inset-0 z-[3]"
        style={{
          background:
            "linear-gradient(105deg, rgba(30,15,8,0.92) 0%, rgba(45,20,10,0.75) 25%, rgba(60,25,15,0.45) 45%, transparent 65%)",
        }}
      />
      {/* Bottom darkening for text */}
      <div
        className="absolute inset-0 z-[3]"
        style={{
          background:
            "linear-gradient(to top, rgba(10,8,6,0.85) 0%, rgba(10,8,6,0.4) 30%, transparent 60%)",
        }}
      />
      {/* Warm color wash */}
      <div
        className="absolute inset-0 z-[3]"
        style={{
          background:
            "linear-gradient(135deg, rgba(180,80,20,0.15) 0%, rgba(120,40,60,0.1) 50%, rgba(40,80,120,0.08) 100%)",
        }}
      />
      {/* Film grain */}
      <div className="grain-overlay z-[4]" />

      {/* ── CONTENT ── */}
      <div className="absolute inset-0 z-10 flex items-center pointer-events-none">
        <div className="w-full mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div
            className="max-w-2xl"
            style={{
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? "translateY(0)" : "translateY(28px)",
              transition:
                "opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            {/* Title */}
            <h1
              className="text-5xl sm:text-6xl lg:text-[4.5rem] xl:text-[5.2rem] font-bold leading-[1.06] tracking-tight mb-6"
              style={{ color: "#fff", whiteSpace: "pre-line" }}
            >
              {slide.title}
            </h1>

            {/* Subtitle */}
            <p
              className="text-base sm:text-lg lg:text-xl leading-relaxed mb-9 max-w-xl"
              style={{ color: "rgba(255,255,255,0.78)", whiteSpace: "pre-line" }}
            >
              {slide.subtitle}
            </p>

            {/* CTA Button */}
            <button
              className="pointer-events-auto inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-[15px] font-bold text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl group"
              style={{
                background: "linear-gradient(135deg, #4f46e5, #6366f1)",
                boxShadow: "0 8px 32px rgba(79,70,229,0.4)",
              }}
            >
              {slide.ctaText}
              <ArrowRight className="w-4.5 h-4.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>

      {/* ── SCROLL INDICATOR (center bottom) ── */}
      <div
        className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
        style={{ animation: "bannerScrollFloat 2.5s ease-in-out infinite" }}
      >
        <div
          className="w-[26px] h-[42px] rounded-full flex items-start justify-center pt-2"
          style={{ border: "2px solid rgba(255,255,255,0.3)" }}
        >
          <div
            className="w-[3px] h-[8px] rounded-full"
            style={{
              background: "rgba(255,255,255,0.7)",
              animation: "bannerScrollDot 2s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      {/* ── NAVIGATION ARROWS ── */}
      <button
        onClick={goPrev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/15 group"
        style={{
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.15)",
        }}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white/70 group-hover:text-white transition-colors" />
      </button>
      <button
        onClick={goNext}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/15 group"
        style={{
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.15)",
        }}
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white/70 group-hover:text-white transition-colors" />
      </button>

      {/* ── KEYFRAMES ── */}
      <style jsx>{`
        @keyframes bannerScrollFloat {
          0%,
          100% {
            transform: translateX(-50%) translateY(0);
            opacity: 0.6;
          }
          50% {
            transform: translateX(-50%) translateY(-8px);
            opacity: 1;
          }
        }
        @keyframes bannerScrollDot {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(8px);
            opacity: 0.2;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </section>
    </div>
  )
}
