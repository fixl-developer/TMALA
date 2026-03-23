import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "TalentOS Blog — Insights for Talent, Agencies & Brands",
  description: "Industry insights, career guides, AI Studio tutorials, and success stories from the TalentOS community.",
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
