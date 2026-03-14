"use client"
import { Image, Film, Wand2, Zap, Scissors, Sparkles } from "lucide-react"
import { AIStudioSubLayout } from "@/components/ai-studio-sub-layout"

export default function GeneratePage() {
  return (
    <AIStudioSubLayout
      badge="AI Generation"
      title="CREATE STUNNING MEDIA WITH AI"
      subtitle="Image gen, video gen, editing tools — all in one studio."
      description="Generate AI headshots, edit backgrounds, create video clips in Fast/Standard/Cinema quality. Upscale to 10K. Add subtitles, watermarks, and repurpose across formats. Multi-provider: Runway, Pika, Veo, Fal."
      heroImg="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=600&fit=crop"
      features={[
        { icon: Image, title: "AI Image Generation", desc: "Generate headshots, editorial shots, and concept art. Style presets, count options, safety strictness controls. Free: 1/week, Pro: pack-based.", color: "#c8ff00" },
        { icon: Wand2, title: "Image Editing", desc: "Background replacement, upscale to 10K, crop ratios, captions overlay. Chat-based editing: describe what you want changed.", color: "#7c6af7" },
        { icon: Film, title: "Video Generation", desc: "Three quality tiers: Fast (Pika Turbo, 10 cr/sec), Standard (Runway Gen4, 25 cr/sec), Cinema (Gen4 Aleph/Veo 3, 35 cr/sec). Pack-based credits.", color: "#F43F5E" },
        { icon: Zap, title: "Fast Mode", desc: "Quick clips for social media, test edits, storyboarding. Powered by Pika Turbo and WAN 2.5. Best for drafting ideas.", color: "#0EA5E9" },
        { icon: Scissors, title: "Post-Production Tools", desc: "Upscale footage, add subtitles, watermark (visible or invisible), format repurposing (square, portrait, landscape).", color: "#f5c542" },
        { icon: Sparkles, title: "Cinema Quality", desc: "Cinematic-grade output via Runway Gen4 Aleph and Veo 3. Maximum fidelity for final delivery, presentations, and premium campaigns. Enterprise only.", color: "#10B981" },
      ]}
      howItWorks={[
        { step: "Choose your tool", desc: "Image gen, image edit, video gen, or post-production tools." },
        { step: "Configure & generate", desc: "Set style, quality tier, and options. Credits estimated before running. Only charged on success." },
        { step: "Review & export", desc: "Post-moderation check. Optional human review (Enterprise). Publish or download." },
      ]}
      showcase={[
        { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop", label: "AI Headshot" },
        { img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=600&fit=crop", label: "Beauty Editorial" },
        { img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=450&fit=crop", label: "BG Removed" },
        { img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=550&fit=crop", label: "Upscaled 10K" },
        { img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=500&fit=crop", label: "Style Transfer" },
        { img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop", label: "AI Portrait" },
        { img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=450&fit=crop", label: "Concept Art" },
        { img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=550&fit=crop", label: "Studio Lighting" },
        { img: "https://images.unsplash.com/photo-1536766768598-e09213fdcf22?w=400&h=500&fit=crop", label: "Video Still — Cinema" },
        { img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&h=600&fit=crop", label: "Fashion Gen" },
        { img: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=400&h=400&fit=crop", label: "Crop & Reframe" },
        { img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=500&fit=crop", label: "Lifestyle Gen" },
      ]}
      specs={[
        { label: "Image providers", value: "Runway Image Turbo, Fal SeedDream v4" },
        { label: "Video providers", value: "Pika Turbo, WAN 2.5, Runway Gen4 Aleph, Veo 3" },
        { label: "Video tiers", value: "Fast (10 cr/s), Standard (25 cr/s), Cinema (35 cr/s)" },
        { label: "Max upscale", value: "10K resolution" },
        { label: "Free plan", value: "1 image/week, no video" },
        { label: "Pro plan", value: "Image packs + video Fast/Standard" },
        { label: "Enterprise", value: "Cinema quality + human review" },
      ]}
    />
  )
}
