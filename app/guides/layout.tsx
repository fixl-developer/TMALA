"use client"

import { useEffect } from "react"

export default function GuidesLayout({ children }: { children: React.ReactNode }) {
  /* Prevent parent window scroll — guides has its own scroll container */
  useEffect(() => {
    document.body.style.overflow = "hidden"
    document.documentElement.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = ""
      document.documentElement.style.overflow = ""
    }
  }, [])

  return <>{children}</>
}
