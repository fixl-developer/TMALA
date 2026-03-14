"use client"

import { cn } from "@/lib/utils"

type GridPattern = 
  | "dots" 
  | "lines" 
  | "squares" 
  | "diagonal" 
  | "hexagon" 
  | "circuit"
  | "mesh"
  | "waves"

interface DynamicGridBackgroundProps {
  pattern?: GridPattern
  accent?: "crimson" | "amber" | "violet" | "cyan" | "emerald" | "rose" | "indigo" | "orange"
  opacity?: number
  className?: string
  children?: React.ReactNode
}

export function DynamicGridBackground({
  pattern = "dots",
  accent = "crimson",
  opacity = 0.15,
  className,
  children,
}: DynamicGridBackgroundProps) {
  const accentColors = {
    crimson: "rgba(239, 68, 68, OPACITY)",
    amber: "rgba(251, 146, 60, OPACITY)",
    violet: "rgba(139, 92, 246, OPACITY)",
    cyan: "rgba(34, 211, 238, OPACITY)",
    emerald: "rgba(52, 211, 153, OPACITY)",
    rose: "rgba(251, 113, 133, OPACITY)",
    indigo: "rgba(129, 140, 248, OPACITY)",
    orange: "rgba(251, 146, 60, OPACITY)",
  }

  const color = accentColors[accent].replace("OPACITY", opacity.toString())

  const getPatternStyle = (): React.CSSProperties => {
    switch (pattern) {
      case "dots":
        return {
          backgroundImage: `radial-gradient(circle, ${color} 2px, transparent 2px)`,
          backgroundSize: "80px 80px",
        }
      
      case "lines":
        return {
          backgroundImage: `
            linear-gradient(${color} 1.5px, transparent 1.5px),
            linear-gradient(90deg, ${color} 1.5px, transparent 1.5px)
          `,
          backgroundSize: "140px 140px",
        }
      
      case "squares":
        return {
          backgroundImage: `
            linear-gradient(${color} 2px, transparent 2px),
            linear-gradient(90deg, ${color} 2px, transparent 2px)
          `,
          backgroundSize: "60px 60px",
        }
      
      case "diagonal":
        return {
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 35px,
            ${color} 35px,
            ${color} 37px
          )`,
        }
      
      case "hexagon":
        return {
          backgroundImage: `
            radial-gradient(circle at 50% 50%, ${color} 1px, transparent 1px),
            radial-gradient(circle at 0% 50%, ${color} 1px, transparent 1px),
            radial-gradient(circle at 100% 50%, ${color} 1px, transparent 1px)
          `,
          backgroundSize: "40px 70px",
          backgroundPosition: "0 0, 0 0, 0 0",
        }
      
      case "circuit":
        return {
          backgroundImage: `
            linear-gradient(${color} 1.5px, transparent 1.5px),
            linear-gradient(90deg, ${color} 1.5px, transparent 1.5px),
            linear-gradient(${color} 0.75px, transparent 0.75px),
            linear-gradient(90deg, ${color} 0.75px, transparent 0.75px)
          `,
          backgroundSize: "140px 140px, 140px 140px, 28px 28px, 28px 28px",
          backgroundPosition: "-1px -1px, -1px -1px, -0.5px -0.5px, -0.5px -0.5px",
        }
      
      case "mesh":
        return {
          backgroundImage: `
            linear-gradient(${color} 1.5px, transparent 1.5px),
            linear-gradient(90deg, ${color} 1.5px, transparent 1.5px),
            linear-gradient(${color.replace(opacity.toString(), (opacity * 0.5).toString())} 1px, transparent 1px),
            linear-gradient(90deg, ${color.replace(opacity.toString(), (opacity * 0.5).toString())} 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px, 100px 100px, 20px 20px, 20px 20px",
        }
      
      case "waves":
        return {
          backgroundImage: `repeating-radial-gradient(
            circle at 0 0,
            transparent 0,
            transparent 40px,
            ${color} 40px,
            ${color} 41px
          )`,
          backgroundSize: "80px 80px",
        }
      
      default:
        return {}
    }
  }

  return (
    <div className={cn("relative", className)}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={getPatternStyle()}
      />
      {children}
    </div>
  )
}
