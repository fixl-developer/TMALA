"use client"
import { Image, Video, Tag, Shield, RefreshCw, Scissors } from "lucide-react"
import { AIStudioSubLayout } from "@/components/ai-studio-sub-layout"

export default function MediaLabPage() {
  return (
    <AIStudioSubLayout
      badge="Media Lab"
      title="SCORE, FIX & PROTECT YOUR MEDIA"
      subtitle="AI-powered quality analysis for every photo and video."
      description="Framing, lighting, sharpness, composition — scored 0–100 with actionable fix checklists. Auto-tagging, rights management, watermarking, and full version history."
      heroImg="https://images.unsplash.com/photo-1488161628813-04466f872be2?w=1200&h=600&fit=crop"
      accentColor="#0EA5E9"
      features={[
        { icon: Image, title: "Photo Quality Scoring", desc: "Each photo scored on framing, lighting, sharpness, background noise, face visibility. Get top 5 improvements and auto-checklist before submission.", color: "#0EA5E9" },
        { icon: Video, title: "Video Quality Analyzer", desc: "Audio clarity, lighting, stability, pacing, composition — all scored. Timestamp markers for problem areas. Retake checklist generated.", color: "#7c6af7" },
        { icon: Tag, title: "Auto-Tagging & Indexing", desc: "Detects media type (headshot, full-body, runway walk, slate, monologue), skills shown, and style tags (editorial, commercial, traditional).", color: "#c8ff00" },
        { icon: Shield, title: "Rights & Safety Guardrails", desc: "Ownership, permitted usage, expiry, download controls. Visible watermark or invisible fingerprint. Prohibited content detection.", color: "#ff6b9d" },
        { icon: RefreshCw, title: "Versioning & Audit", desc: "Every AI edit creates a new version. Original preserved. Revert and compare views. Full audit log of what changed and why.", color: "#00d4aa" },
        { icon: Scissors, title: "Quick Edit Tools", desc: "Background removal, upscale to 4K/10K, crop ratios, captions, format conversion — all without leaving the platform.", color: "#f5c542" },
      ]}
      howItWorks={[
        { step: "Upload or select media", desc: "Choose photos or videos from your portfolio. AI processes them through the quality pipeline." },
        { step: "Review scores & fixes", desc: "See quality scores (0–100), top improvements, and auto-generated retake checklists." },
        { step: "Tag, protect & publish", desc: "Auto-tag for discoverability. Set rights/consent. Add watermarks. Publish to your portfolio." },
      ]}
      showcase={[
        { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop", label: "Lighting: 98/100" },
        { img: "https://images.unsplash.com/photo-1504270997636-07ddfbd48945?w=400&h=400&fit=crop", label: "Framing: Fix Needed" },
        { img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=600&fit=crop", label: "Auto-Tagged: Runway" },
        { img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=450&fit=crop", label: "Sharpness: 95/100" },
        { img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=500&fit=crop", label: "Background: Clean" },
        { img: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=400&h=550&fit=crop", label: "Auto-Tagged: Editorial" },
        { img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop", label: "Face Visibility: 100" },
        { img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=500&fit=crop", label: "Composition: A+" },
        { img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=450&fit=crop", label: "Watermarked" },
        { img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop", label: "Upscaled 4K" },
      ]}
      specs={[
        { label: "Photo scoring criteria", value: "Framing, lighting, sharpness, background, face" },
        { label: "Video scoring criteria", value: "Audio, lighting, stability, pacing, composition" },
        { label: "Auto-tag categories", value: "Headshot, full-body, runway, slate, monologue" },
        { label: "Watermark options", value: "Visible watermark, invisible fingerprint" },
        { label: "Upscale limit", value: "Up to 10K resolution" },
        { label: "Free plan", value: "Photo scoring + basic tags" },
        { label: "Pro plan", value: "Video scoring + all edit tools" },
      ]}
    />
  )
}
