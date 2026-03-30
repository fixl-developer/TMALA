"use client"

import { useParams } from "next/navigation"
import { notFound } from "next/navigation"
import { DocsLayout } from "@/components/docs-layout"
import { getDocPage } from "@/lib/docs-data"

export default function DocsPage() {
  const params = useParams()
  const slug = params.slug as string
  const page = getDocPage(slug)

  if (!page) {
    notFound()
  }

  return <DocsLayout page={page} />
}
