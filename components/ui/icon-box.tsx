"use client"

import { type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

type IconBoxVariant = "default" | "gradient" | "glow" | "outline" | "solid" | "glass"

interface IconBoxProps {
  icon: LucideIcon
  size?: "sm" | "md" | "lg" | "xl"
  variant?: IconBoxVariant
  accentColor?: "amber" | "cyan" | "magenta" | "purple" | "emerald" | "white"
  strokeWidth?: number
  className?: string
  iconClassName?: string
}

const sizeClasses = {
  sm: "h-10 w-10 [&>svg]:h-4 [&>svg]:w-4",
  md: "h-12 w-12 [&>svg]:h-5 [&>svg]:w-5",
  lg: "h-14 w-14 [&>svg]:h-6 [&>svg]:w-6",
  xl: "h-16 w-16 [&>svg]:h-7 [&>svg]:w-7",
}

const variantClasses: Record<IconBoxVariant, string> = {
  default: "bg-white/5 border border-white/10 backdrop-blur-sm",
  gradient: "bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm",
  glow: "bg-white/5 border border-white/20 shadow-[0_0_24px_rgba(245,158,11,0.12)] backdrop-blur-sm",
  outline: "bg-transparent border-2 border-white/20",
  solid: "bg-cinematic-amber/20 border border-cinematic-amber/30",
  glass: "glass-effect border border-white/10",
}

const accentClasses = {
  amber: "text-cinematic-amber",
  cyan: "text-cinematic-cyan",
  magenta: "text-cinematic-magenta",
  purple: "text-cinematic-purple",
  emerald: "text-emerald-400",
  white: "text-white",
}

export function IconBox({
  icon: Icon,
  size = "md",
  variant = "default",
  accentColor = "amber",
  strokeWidth = 1.75,
  className,
  iconClassName,
}: IconBoxProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-xl transition-all duration-300 hover:scale-105 hover:border-white/20",
        sizeClasses[size],
        variantClasses[variant],
        !iconClassName && accentClasses[accentColor],
        className
      )}
    >
      <Icon className={cn("shrink-0", iconClassName ?? accentClasses[accentColor])} strokeWidth={strokeWidth} />
    </div>
  )
}
