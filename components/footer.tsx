"use client"

import { Star } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { getTheme } from "@/lib/theme-manager"

export function Footer() {
  const pathname = usePathname()
  const theme = getTheme(pathname)
  const themeColor = theme.color

  return (
    <footer className="relative bg-black text-white border-t border-white/10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 border-b border-white/10">

          {/* Column 1: Newsletter & Contact */}
          <div className="relative p-10 md:p-16 flex flex-col justify-between min-h-[400px]">
            {/* Left Starburst Graphic */}
            <div className="absolute top-1/2 -left-6 -translate-y-1/2" style={{ color: themeColor }}>
              <Star className="w-12 h-12 animate-spin-slow" style={{ fill: themeColor }} />
            </div>

            <div>
              <h3 className="font-bebas text-lg tracking-widest mb-8 text-white">Newsletter</h3>
              <div className="space-y-4">
                <p className="font-playfair text-3xl md:text-4xl">+000 87 6545 33</p>
                <p className="font-playfair text-2xl md:text-3xl text-gray-300">help@auxa.co</p>
                <div className="mt-8 space-y-2">
                  <p className="text-gray-400 font-light">West poram (United State)</p>
                  <p className="text-gray-400 font-light">85767 - Link road</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: More Info */}
          <div className="p-10 md:p-16 flex flex-col min-h-[400px]">
            <h3 className="font-bebas text-lg tracking-widest mb-8 text-white">More Info</h3>
            <ul className="space-y-6 flex-1">
              {['Career', 'Team', 'Services', 'Portfolio'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-400 transition-colors font-light text-lg"
                    style={{
                      // For hover effect we'll need a bit of a trick with CSS variables or just hover:text-[color]
                      // However since we have Tailwind we can use a CSS variable for the theme
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = themeColor)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgb(156 163 175)")}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: About Us */}
          <div className="relative p-10 md:p-16 flex flex-col min-h-[400px]">
            {/* Right Starburst Graphic */}
            <div className="absolute top-1/2 -right-6 -translate-y-1/2" style={{ color: themeColor }}>
              <Star className="w-12 h-12 animate-spin-slow" style={{ fill: themeColor }} />
            </div>

            <h3 className="font-bebas text-lg tracking-widest mb-8 text-white">About Us</h3>
            <ul className="space-y-6 flex-1">
              {['About US', 'Contact', 'Faq', 'Our Company'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 transition-colors font-light text-lg"
                    onMouseEnter={(e) => (e.currentTarget.style.color = themeColor)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgb(156 163 175)")}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-8 text-center">
          <p className="text-sm text-gray-500 font-light">
            Copyright © 2026 Auxa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
