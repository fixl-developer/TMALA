"use client"

import React, { useEffect, useState } from "react"
import { Sparkles, ArrowRight, X } from "lucide-react"

const STUDIO_URL = process.env.NEXT_PUBLIC_AI_STUDIO_URL || "http://localhost:3001/home"
const DISMISS_KEY = "ai-studio-banner-dismissed"

export function AIStudioLaunchBanner() {
  const [dismissed, setDismissed] = useState(true)

  useEffect(() => {
    setDismissed(typeof window !== "undefined" && sessionStorage.getItem(DISMISS_KEY) === "1")
  }, [])

  const handleDismiss = () => {
    sessionStorage.setItem(DISMISS_KEY, "1")
    setDismissed(true)
  }

  if (dismissed) return null

  return (
    <div
      data-testid="section-ai-studio-launch-banner"
      aria-label="AI Studio launch banner"
      className="relative w-full mt-[72px]"
      style={{ background: "#c8ff00", color: "#000" }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-7 lg:px-12 xl:px-16 py-3 flex items-center justify-between gap-3">
        {/* Left: icon + message */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-black flex items-center justify-center">
            <Sparkles className="w-4 h-4" style={{ color: "#c8ff00" }} />
          </div>
          <div className="min-w-0">
            <p className="text-[14px] sm:text-[15px] font-bold leading-tight truncate">
              AI Studio is live!
            </p>
            <p className="hidden sm:block text-[12px] text-black/70 leading-tight">
              Build portfolios, nail auditions, and win roles with AI.
            </p>
          </div>
        </div>

        {/* Right: CTA + dismiss */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <a
            href={STUDIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-launch-studio"
            aria-label="Launch AI Studio"
            className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-lg text-[12px] sm:text-[13px] font-bold bg-black text-[#c8ff00] hover:bg-black/85 transition-all hover:scale-[1.03]"
          >
            Launch now
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={handleDismiss}
            data-testid="btn-dismiss-banner"
            aria-label="Dismiss banner"
            className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-black/10 transition-colors"
          >
            <X className="w-4 h-4 text-black/60" />
          </button>
        </div>
      </div>
    </div>
  )
}
