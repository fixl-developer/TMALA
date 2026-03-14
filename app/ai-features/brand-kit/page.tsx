"use client"
import { Palette, FileText, Hash, Shield, MessageSquare, Sparkles } from "lucide-react"
import { AIStudioSubLayout } from "@/components/ai-studio-sub-layout"

export default function BrandKitPage() {
  return (
    <AIStudioSubLayout
      badge="Brand Kit"
      title="BUILD YOUR PERSONAL BRAND"
      subtitle="Talent as a product — AI-powered brand identity."
      description="Define your niche, persona, and style. Generate taglines, intro scripts, and outreach templates. UGC script & shot list generator. Caption hooks and brand safety checker."
      heroImg="https://images.unsplash.com/photo-1615109398623-88346a601842?w=1200&h=600&fit=crop"
      accentColor="#10B981"
      features={[
        { icon: Palette, title: "Brand Identity Builder", desc: "Define niche/persona tags, brand-safe categories, and style guide words. AI generates your tagline, intro scripts, and outreach message templates.", color: "#10B981" },
        { icon: FileText, title: "UGC Script Generator", desc: "AI writes UGC scripts tailored to your brand voice. Shot list generator for each platform. Hook suggestions for maximum engagement.", color: "#c8ff00" },
        { icon: Hash, title: "Caption & Hook Suggestions", desc: "Platform-specific captions with trending hooks. Hashtag recommendations. Optimized for Instagram, TikTok, YouTube Shorts.", color: "#7c6af7" },
        { icon: Shield, title: "Brand Safety Checker", desc: "Check content against tenant brand guidelines before publishing. Flag potential issues. Ensure compliance with sponsor requirements.", color: "#F43F5E" },
        { icon: MessageSquare, title: "Outreach Templates", desc: "AI-generated messages for sponsors, brands, and casting directors. Professional, personalized, and proof-backed.", color: "#0EA5E9" },
        { icon: Sparkles, title: "Style Guide Export", desc: "Export your complete brand kit as a shareable document. Colors, tone, niche tags, sample content — ready for collaborators.", color: "#f5c542" },
      ]}
      howItWorks={[
        { step: "Define your brand", desc: "Set niche tags, persona keywords, and style preferences. AI builds your brand profile." },
        { step: "Generate content tools", desc: "Get taglines, UGC scripts, shot lists, captions, and outreach templates — all on-brand." },
        { step: "Check & publish", desc: "Run brand safety checks. Export or publish directly to your platform showcase." },
      ]}
      showcase={[
        { img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=500&fit=crop", label: "Social Feed" },
        { img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop", label: "Brand Ambassador" },
        { img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=450&fit=crop", label: "UGC Content" },
        { img: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=400&h=500&fit=crop", label: "Sponsor Pitch" },
        { img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop", label: "Lifestyle Brand" },
        { img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&h=550&fit=crop", label: "Fashion Niche" },
        { img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=500&fit=crop", label: "Instagram Hook" },
        { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=450&fit=crop", label: "Brand-Safe Content" },
        { img: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=400&h=500&fit=crop", label: "TikTok Script" },
        { img: "https://images.unsplash.com/photo-1496440737103-cd596325d314?w=400&h=550&fit=crop", label: "Outreach Template" },
      ]}
      specs={[
        { label: "Brand elements", value: "Niche tags, persona, style guide, tagline" },
        { label: "Script types", value: "UGC, intro, outreach, pitch" },
        { label: "Platform support", value: "Instagram, TikTok, YouTube, X" },
        { label: "Safety checks", value: "Brand guidelines, sponsor compliance" },
        { label: "Available on", value: "Pro plan and above" },
      ]}
    />
  )
}
