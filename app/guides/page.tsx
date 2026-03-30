"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { DocsLayout } from "@/components/docs-layout"
import { getDocPage } from "@/lib/docs-data"

export default function GuidesPage() {
  const router = useRouter()
  const page = getDocPage("introduction")

  useEffect(() => {
    router.replace("/guides/introduction")
  }, [router])

  // Show introduction while redirecting
  if (!page) return null
  return <DocsLayout page={page} />
}
