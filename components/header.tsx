"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sparkles, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { AgenciesDropdown } from "@/components/agencies-dropdown"
import { getTheme } from "@/lib/theme-manager"

const navigation = [
  { name: "For Talents", href: "/talents" },
  { name: "AI Studio", href: "/ai-features" },
  { name: "Features", href: "/features" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const pathname = usePathname()

  const theme = getTheme(pathname)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    let lastScroll = 0

    const controlHeader = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScroll && currentScrollY > 100) {
        // Scrolling down & past 100px
        setIsVisible(false)
      } else {
        // Scrolling up or at top
        setIsVisible(true)
      }

      lastScroll = currentScrollY

      // Clear existing timeout
      clearTimeout(timeoutId)

      // Show header after scroll stops
      timeoutId = setTimeout(() => {
        setIsVisible(true)
      }, 150)
    }

    window.addEventListener('scroll', controlHeader, { passive: true })

    return () => {
      window.removeEventListener('scroll', controlHeader)
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-700 ease-out bg-black/80 backdrop-blur-md border-b border-white/5 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-none transition-all duration-300 group-hover:shadow-[0_0_24px_rgba(255,255,255,0.15)]"
              style={{ backgroundColor: theme.color }}
            >
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <span className="font-bebas text-3xl font-bold tracking-tight text-white">
              Multi Talent Agency
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link
              href="/"
              className="text-lg font-bebas uppercase tracking-widest transition-all duration-300 hover:scale-105"
              style={{
                color: pathname === "/" ? theme.color : "white",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = theme.color
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = pathname === "/" ? theme.color : "white"
              }}
            >
              Home
            </Link>
            <AgenciesDropdown />
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lg font-bebas uppercase tracking-widest transition-all duration-300 hover:scale-105"
                style={{
                  color: pathname === item.href ? theme.color : "white",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = theme.color
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = pathname === item.href ? theme.color : "white"
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              size="lg"
              className="rounded-none text-lg font-bebas uppercase tracking-widest px-8 transition-all duration-300 text-white shadow-xl hover:opacity-90"
              style={{ backgroundColor: theme.color }}
            >
              Sign In
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-7 w-7 text-white" />
            ) : (
              <Menu className="h-7 w-7 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-4 px-4 pb-8 pt-4 bg-zinc-950 border-t border-white/5 rounded-none mt-4 animate-in slide-in-from-top duration-300">
              <Link
                href="/"
                className="block py-2 text-2xl font-bebas uppercase tracking-widest transition-colors"
                style={{ color: pathname === "/" ? theme.color : "white" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <div className="py-2 border-y border-white/5">
                <AgenciesDropdown />
              </div>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-2xl font-bebas uppercase tracking-widest transition-colors"
                  style={{ color: pathname === item.href ? theme.color : "white" }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-4 pt-6">
                <Button
                  size="lg"
                  className="w-full rounded-none text-white font-bebas uppercase tracking-widest py-8 text-xl shadow-xl hover:opacity-90"
                  style={{ backgroundColor: theme.color }}
                >
                  Sign In
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}