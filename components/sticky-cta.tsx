"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronUp, Sparkles } from "lucide-react"
import { useAuthModal } from "@/components/auth-modal"

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const { openAuth } = useAuthModal()

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.8)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Primary CTA */}
      <button onClick={() => openAuth("signup")} data-testid="btn-get-started-free" aria-label="Get Started Free" className="flex items-center gap-2 px-4 py-3 rounded-full bg-cinematic-amber text-black font-bebas text-sm uppercase tracking-widest shadow-[0_8px_32px_rgba(245,158,11,0.35)] hover:bg-cinematic-amber/90 hover:scale-105 transition-all duration-200 cursor-pointer">
        <Sparkles className="h-4 w-4" />
        Get Started Free
      </button>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        data-testid="btn-scroll-to-top"
        aria-label="Scroll to top"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-white/80 hover:text-cinematic-amber hover:border-cinematic-amber/40 hover:bg-white/15 transition-all duration-200 shadow-lg"
      >
        <ChevronUp className="h-4 w-4" />
      </button>
    </div>
  )
}
