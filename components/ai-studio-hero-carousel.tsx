"use client"

import React, { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const featured = [
  {
    title: "CASTING\nSTUDIO",
    subtitle: "CASTING STUDIO",
    desc: "Build your perfect talent cast with AI-powered screening.",
    img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=500&fit=crop",
    href: "/ai-features/casting",
    wide: true,
  },
  {
    title: "CINEMA\nSTUDIO",
    subtitle: "CINEMA STUDIO",
    desc: "Create film-style content with cinematic lighting and color.",
    img: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=500&fit=crop",
    href: "/ai-features/cinema-studio",
    wide: true,
  },
  {
    title: "AUDITION\nCOACH",
    subtitle: "AI AUDITION COACH",
    desc: "Self-tape feedback with timestamps, drills, and practice plans.",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&h=500&fit=crop",
    href: "/ai-features/audition-coach",
    wide: false,
  },
  {
    title: "PORTFOLIO\nBUILDER",
    subtitle: "PORTFOLIO BUILDER",
    desc: "AI-scored headshots, bios, and casting packs in seconds.",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=500&fit=crop",
    href: "/ai-features/portfolio-builder",
    wide: false,
  },
  {
    title: "AI\nGENERATE",
    subtitle: "AI GENERATION",
    desc: "Image gen, video gen in Fast, Standard, or Cinema quality.",
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=500&fit=crop",
    href: "/ai-features/generate",
    wide: false,
  },
  {
    title: "AI\nINFLUENCE",
    subtitle: "AI INFLUENCE",
    desc: "Manage influencer campaigns, deals, and performance at scale.",
    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=500&fit=crop",
    href: "/ai-features/ai-influence",
    wide: false,
  },
]

export function AIStudioHeroCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [canScrollLeft, setCanScrollLeft] = useState(false)

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return
    const amount = dir === "left" ? -420 : 420
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" })
  }

  const handleScroll = () => {
    if (!scrollRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10)
    setCanScrollLeft(scrollLeft > 10)
  }

  return (
    <section className="relative pb-6" style={{ background: "#0a0a0a" }}>
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-7 lg:px-12 xl:px-16">
      {/* Scroll container */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-auto scrollbar-none pt-4"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {featured.map((item, i) => (
          <a
            key={i}
            href={item.href}
            className="relative flex-shrink-0 rounded-2xl overflow-hidden group cursor-pointer block"
            style={{
              width: item.wide ? "min(540px, 70vw)" : "min(340px, 50vw)",
              height: "min(340px, 45vw)",
              scrollSnapAlign: "start",
            }}
          >
            {/* Image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.img}
              alt={item.subtitle}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Big display title */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <h3
                className="font-bebas text-[3rem] sm:text-[4.5rem] lg:text-[5.5rem] text-white text-center leading-[0.9] tracking-tight select-none"
                style={{ textShadow: "0 4px 30px rgba(0,0,0,0.5)" }}
              >
                {item.title.split("\n").map((line, j) => (
                  <React.Fragment key={j}>
                    {line}
                    {j === 0 && <br />}
                  </React.Fragment>
                ))}
              </h3>
            </div>

            {/* Badge */}
            {item.badge && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 mt-12">
                <span
                  className="px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest border"
                  style={{ borderColor: "#c8ff00", color: "#c8ff00", background: "rgba(0,0,0,0.5)" }}
                >
                  {item.badge}
                </span>
              </div>
            )}
          </a>
        ))}
      </div>

      {/* Titles below cards */}
      <div className="flex gap-4 overflow-x-auto scrollbar-none mt-4">
        {featured.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0"
            style={{ width: item.wide ? "min(540px, 70vw)" : "min(340px, 50vw)" }}
          >
            <h4 className="font-bebas text-sm uppercase tracking-[0.15em] text-white mb-1">
              {item.subtitle}
            </h4>
            <p className="text-[13px] text-white/50 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Scroll arrows */}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          data-testid="btn-scroll-left"
          aria-label="Scroll carousel left"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
          style={{ background: "rgba(200,255,0,0.9)", color: "#000" }}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          data-testid="btn-scroll-right"
          aria-label="Scroll carousel right"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
          style={{ background: "rgba(200,255,0,0.9)", color: "#000" }}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}
      </div>
    </section>
  )
}
