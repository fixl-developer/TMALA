"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

const SECTIONS = [
  { id: "challenges", label: "Challenges" },
  { id: "features", label: "Features" },
  { id: "escrow", label: "Escrow" },
  { id: "how-it-works", label: "Journey" },
  { id: "waitlist", label: "Join" },
]

export function ScrollSpy() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    if (pathname !== "/") return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    )

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [pathname])

  if (pathname !== "/") return null

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
      {SECTIONS.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          className={`group flex items-center gap-3 transition-all duration-300 ${
            activeId === id ? "opacity-100" : "opacity-40 hover:opacity-70"
          }`}
          aria-label={`Scroll to ${label}`}
        >
          <span
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeId === id
                ? "bg-cinematic-amber scale-125 shadow-[0_0_8px_rgba(245,158,11,0.6)]"
                : "bg-white/60 group-hover:bg-white/80"
            }`}
          />
          <span className="text-[10px] font-bebas uppercase tracking-widest text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
            {label}
          </span>
        </button>
      ))}
    </div>
  )
}
