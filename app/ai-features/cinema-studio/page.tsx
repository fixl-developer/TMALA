"use client"
import { Film, Sparkles, Zap, Eye, Shield, Award } from "lucide-react"
import { AIStudioSubLayout } from "@/components/ai-studio-sub-layout"

export default function CinemaStudioPage() {
  return (
    <AIStudioSubLayout
      badge="Cinema Studio 2.0"
      title="CINEMATIC AI VIDEO PRODUCTION"
      subtitle="Film-grade quality powered by the best AI models."
      description="Runway Gen4 Aleph and Veo 3 deliver cinema-quality output for showreels, brand campaigns, final delivery, and presentations. Multi-provider routing with health-based failover. Enterprise-exclusive."
      heroImg="https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1200&h=600&fit=crop"
      accentColor="#A855F7"
      features={[
        { icon: Film, title: "Cinema-Grade Output", desc: "Maximum fidelity video generation. Ideal for final delivery, streaming, presentations, and premium brand campaigns. 35 credits/second.", color: "#A855F7" },
        { icon: Sparkles, title: "Multi-Provider AI", desc: "Runway Gen4 Aleph and Veo 3 with health-based routing. If one provider is slow, traffic automatically shifts to the other.", color: "#c8ff00" },
        { icon: Zap, title: "Three Quality Tiers", desc: "Fast (drafts, 10 cr/s), Standard (production, 25 cr/s), Cinema (final delivery, 35 cr/s). Choose the right quality for each use case.", color: "#0EA5E9" },
        { icon: Eye, title: "Post-Moderation Pipeline", desc: "Every generated clip passes through safety moderation. Enterprise gets human review queue before publishing.", color: "#F43F5E" },
        { icon: Shield, title: "Full Audit Trail", desc: "Every generation logged: who requested, model used, credits charged, policy decisions. 365-day retention on Enterprise.", color: "#10B981" },
        { icon: Award, title: "Pack-Based Credits", desc: "Buy video packs: 10x 6s clips (Grok), 25x 6s clips, 120s Standard, 120s Cinema. Credits estimated before running.", color: "#f5c542" },
      ]}
      howItWorks={[
        { step: "Choose quality tier", desc: "Select Fast for drafts, Standard for production, or Cinema for final delivery." },
        { step: "Configure generation", desc: "Set duration, style, and constraints. Credits estimated and reserved upfront." },
        { step: "Review & publish", desc: "Generated clip goes through moderation. Approve, edit, or regenerate." },
      ]}
      showcase={[
        { img: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=400&h=500&fit=crop", label: "Cinema — Showreel" },
        { img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=600&fit=crop", label: "Cinema — Runway Film" },
        { img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=450&fit=crop", label: "Standard — Backstage" },
        { img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&h=550&fit=crop", label: "Cinema — Fashion Spot" },
        { img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop", label: "Cinema — Brand Film" },
        { img: "https://images.unsplash.com/photo-1536766768598-e09213fdcf22?w=400&h=500&fit=crop", label: "Fast — Test Edit" },
        { img: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=400&h=450&fit=crop", label: "Standard — Dance Reel" },
        { img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=500&fit=crop", label: "Cinema — Casting Tape" },
        { img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=600&fit=crop", label: "Cinema — Campaign" },
        { img: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=400&h=400&fit=crop", label: "Standard — Portfolio" },
      ]}
      specs={[
        { label: "Cinema providers", value: "Runway Gen4 Aleph, Veo 3" },
        { label: "Cinema cost", value: "35 credits/second" },
        { label: "Standard providers", value: "Runway Gen4, Fal Standard" },
        { label: "Fast providers", value: "Pika Turbo, WAN 2.5" },
        { label: "Moderation", value: "Auto + human review (Enterprise)" },
        { label: "Audit retention", value: "365 days (Enterprise)" },
        { label: "Available on", value: "Enterprise only (Cinema tier)" },
      ]}
    />
  )
}
