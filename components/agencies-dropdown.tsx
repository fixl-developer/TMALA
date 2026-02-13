"use client"

import React, { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, ArrowRight, Film } from "lucide-react"
import {
  AGENCY_CATEGORIES,
  AGENCY_TYPES,
  getAgencyHref,
  AGENCY_ACCENTS,
} from "@/lib/agencies-data"

function useAgencyInPath() {
  const pathname = usePathname()
  const match = pathname.match(/^\/agencies\/([^/]+)/)
  return match ? match[1] : null
}

export function AgenciesDropdown() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const agencySlug = useAgencyInPath()
  const isAgenciesSection = pathname.startsWith("/agencies")

  const slugToAgency = Object.fromEntries(AGENCY_TYPES.map((a) => [a.slug, a]))

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-2 text-lg font-bebas uppercase tracking-widest transition-all duration-300 outline-none ${isAgenciesSection ? "text-montra-red" : "text-white hover:text-montra-red"}`}
        aria-expanded={open}
        aria-haspopup="true"
      >
        Agencies
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Mega menu */}
      <div
        className={`absolute left-1/2 top-full -translate-x-1/2 pt-2 transition-all duration-500 ease-out ${open ? "opacity-100 visible translate-y-0" : "invisible opacity-0 pointer-events-none -translate-y-4"}`}
      >
        <div className="w-[min(90vw,720px)] rounded-none border border-white/10 bg-zinc-950/95 backdrop-blur-xl shadow-2xl overflow-hidden">
          {/* Top strip */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-black/40">
            <Film className="h-4 w-4 text-montra-red" />
            <span className="text-[10px] font-bebas uppercase tracking-[0.35em] text-white/70">
              Agency types
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
            {AGENCY_CATEGORIES.map((cat) => {
              const accent = AGENCY_ACCENTS[cat.accent]
              const agencies = cat.slugs
                .map((s) => slugToAgency[s])
                .filter(Boolean)
              return (
                <div
                  key={cat.key}
                  className="border-b border-r border-white/5 last:border-b-0 sm:last:border-r-0 p-3"
                >
                  <div
                    className={`text-[10px] font-bebas uppercase tracking-[0.25em] mb-2 ${accent.text}`}
                  >
                    {cat.label}
                  </div>
                  <p className="text-xs text-white/50 font-light mb-3 leading-snug">
                    {cat.tagline}
                  </p>
                  <ul className="space-y-0.5">
                    {agencies.map((agency) => {
                      const isActive = agencySlug === agency.slug
                      return (
                        <li key={agency.slug}>
                          <Link
                            href={getAgencyHref(agency.slug)}
                            className={`block py-1.5 px-2 -mx-2 rounded-none font-bebas uppercase tracking-widest text-sm transition-colors ${isActive ? accent.text : "text-white/90 hover:text-white hover:bg-white/5"}`}
                            onClick={() => setOpen(false)}
                          >
                            {agency.name}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )
            })}
          </div>

          <div className="border-t border-white/10 bg-black/40 px-4 py-3 flex items-center justify-between">
            <span className="text-xs text-white/50 font-light">
              All types in one place
            </span>
            <Link
              href="/agencies/all"
              className="flex items-center gap-2 text-sm font-bebas uppercase tracking-widest text-montra-red hover:text-red-400 transition-colors"
              onClick={() => setOpen(false)}
            >
              View all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
