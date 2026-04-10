"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const isDark = theme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
      style={{
        background: isDark ? "#1e293b" : "#fff",
        border: `1px solid ${isDark ? "#334155" : "#e8e8ec"}`,
        boxShadow: isDark
          ? "0 4px 20px rgba(0,0,0,0.4)"
          : "0 4px 20px rgba(0,0,0,0.08)",
      }}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? (
        <Sun className="w-4.5 h-4.5" style={{ color: "#fbbf24" }} />
      ) : (
        <Moon className="w-4.5 h-4.5" style={{ color: "#64748b" }} />
      )}
    </button>
  )
}
