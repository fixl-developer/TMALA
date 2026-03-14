"use client"

import React from "react"
import { usePathname } from "next/navigation"

const featurePills = [
  { label: "Explore", href: "/ai-features" },
  { label: "Portfolio Builder", href: "/ai-features/portfolio-builder" },
  { label: "Media Lab", href: "/ai-features/media-lab" },
  { label: "Audition Coach", href: "/ai-features/audition-coach" },
  { label: "Applications", href: "/ai-features/applications" },
  { label: "AI Generation", href: "/ai-features/generate" },
  { label: "Brand Kit", href: "/ai-features/brand-kit" },
  { label: "Casting Studio", href: "/ai-features/casting" },
  { label: "Cinema Studio 2.0", href: "/ai-features/cinema-studio" },
  { label: "AI Influence", href: "/ai-features/ai-influence" },
  { label: "My AI Assets", href: "/ai-features/ai-assets" },
  { label: "Settings & Safety", href: "/ai-features/settings-safety" },
  { label: "Pricing", href: "/ai-features/pricing" },
]

export function AIStudioStickyHeader() {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/ai-features") return pathname === "/ai-features"
    return pathname.startsWith(href)
  }

  return (
    <>
      {/* Fixed pills bar — always visible below main TalentOS header (64px) */}
      <div className="fixed top-16 left-0 right-0 z-50 bg-[#1a1a1a] border-b border-white/[0.06]">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="flex items-center gap-1.5 py-2.5 overflow-x-auto scrollbar-none">
            {featurePills.map((pill) => {
              const active = isActive(pill.href)
              return (
                <a
                  key={pill.label}
                  href={pill.href}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-[13px] font-medium transition-all whitespace-nowrap ${
                    active
                      ? "bg-[#c8f542] text-[#0a0a0a] font-semibold"
                      : "bg-[#222] text-[#b0b0b0] hover:bg-[#2a2a2a] hover:text-white border border-white/[0.06]"
                  }`}
                >
                  {pill.label}
                </a>
              )
            })}
          </div>
        </div>
      </div>

      {/* Spacer — pushes content below the fixed pills bar (48px) */}
      <div className="h-12" />
    </>
  )
}
