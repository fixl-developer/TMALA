"use client"

import { usePathname } from "next/navigation"
import { Header } from "@/components/header"

export function HeaderWrapper() {
  const pathname = usePathname()

  if (pathname.startsWith("/agencies/influencer")) return null

  return <Header />
}
