"use client"

import { usePathname } from "next/navigation"
import { Footer } from "@/components/footer"

export function FooterWrapper() {
  const pathname = usePathname()

  // Hide footer on guides, admin, demo, and influencer landing pages
  if (
    pathname.startsWith("/guides") ||
    pathname.startsWith("/admintmalogin") ||
    pathname.startsWith("/demo") ||
    pathname.startsWith("/agencies/influencer") ||
    pathname.startsWith("/agencies/modeling")
  ) return null

  return <Footer />
}
