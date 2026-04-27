"use client"

import { usePathname } from "next/navigation"
import { Footer } from "@/components/footer"

export function FooterWrapper() {
  const pathname = usePathname()

  // Hide footer on guides, admin, and demo pages
  if (pathname.startsWith("/guides") || pathname.startsWith("/admintmalogin") || pathname.startsWith("/demo")) return null

  return <Footer />
}
