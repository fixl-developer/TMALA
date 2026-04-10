"use client"

import { usePathname } from "next/navigation"
import { Footer } from "@/components/footer"

export function FooterWrapper() {
  const pathname = usePathname()

  // Hide footer on guides and admin pages
  if (pathname.startsWith("/guides") || pathname.startsWith("/admintmalogin")) return null

  return <Footer />
}
