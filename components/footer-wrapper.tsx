"use client"

import { usePathname } from "next/navigation"
import { Footer } from "@/components/footer"

export function FooterWrapper() {
  const pathname = usePathname()

  // Hide footer on guides pages — they have their own full-height layout
  if (pathname.startsWith("/guides")) return null

  return <Footer />
}
