import { getAgencyBySlug } from "./agencies-data"

export type ThemeConfig = {
  color: string
  className: string
  borderColor: string
  shadowColor: string
}

const agencyAccentToTheme: Record<
  string,
  { color: string; className: string; borderColor: string; shadowColor: string }
> = {
  crimson: {
    color: "#dc2626",
    className: "red-500",
    borderColor: "border-red-500/20",
    shadowColor: "shadow-red-500/20",
  },
  amber: {
    color: "#f59e0b",
    className: "amber-500",
    borderColor: "border-amber-500/20",
    shadowColor: "shadow-amber-500/20",
  },
  violet: {
    color: "#8b5cf6",
    className: "violet-500",
    borderColor: "border-violet-500/20",
    shadowColor: "shadow-violet-500/20",
  },
  cyan: {
    color: "#06b6d4",
    className: "cyan-500",
    borderColor: "border-cyan-500/20",
    shadowColor: "shadow-cyan-500/20",
  },
  emerald: {
    color: "#10b981",
    className: "emerald-500",
    borderColor: "border-emerald-500/20",
    shadowColor: "shadow-emerald-500/20",
  },
  rose: {
    color: "#f43f5e",
    className: "rose-500",
    borderColor: "border-rose-500/20",
    shadowColor: "shadow-rose-500/20",
  },
  indigo: {
    color: "#6366f1",
    className: "indigo-500",
    borderColor: "border-indigo-500/20",
    shadowColor: "shadow-indigo-500/20",
  },
  orange: {
    color: "#f97316",
    className: "orange-500",
    borderColor: "border-orange-500/20",
    shadowColor: "shadow-orange-500/20",
  },
}

export const themes: Record<string, ThemeConfig> = {
  "/ai-features": {
    color: "#00ff00",
    className: "neon-green",
    borderColor: "border-[#00ff00]/20",
    shadowColor: "shadow-[#00ff00]/20",
  },
}

export const defaultTheme: ThemeConfig = {
  color: "#ff0000",
  className: "montra-red",
  borderColor: "border-montra-red/20",
  shadowColor: "shadow-montra-red/20",
}

export function getTheme(pathname: string): ThemeConfig {
  const explicit = Object.keys(themes).find((path) => pathname.startsWith(path))
  if (explicit) return themes[explicit]

  const agencyMatch = pathname.match(/^\/agencies\/([^/]+)/)
  if (agencyMatch) {
    const agency = getAgencyBySlug(agencyMatch[1])
    if (agency && agencyAccentToTheme[agency.accent])
      return agencyAccentToTheme[agency.accent]
  }

  if (pathname.startsWith("/agencies")) return defaultTheme

  return defaultTheme
}
