"use client"
import { FileText, Sparkles, Package, Languages, CheckCircle, BarChart3 } from "lucide-react"
import { AIStudioSubLayout } from "@/components/ai-studio-sub-layout"

export default function PortfolioBuilderPage() {
  return (
    <AIStudioSubLayout
      badge="Portfolio Builder"
      title="YOUR PORTFOLIO, PERFECTED BY AI"
      subtitle="AI scans, scores, and packages your entire portfolio."
      description="Profile completeness scoring, AI-generated bios in 4 tones, multi-language resumes, and one-click casting/pageant/brand packs — all versioned and exportable."
      heroImg="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1200&h=600&fit=crop"
      features={[
        { icon: Sparkles, title: "Smart Profile Scan", desc: "AI detects missing headshots, full-body shots, intro video, measurements, credits, and skill tags. Generates a fix plan instantly.", color: "#c8ff00" },
        { icon: FileText, title: "AI Bio & Resume Studio", desc: "Casting bio, pageant bio, brand collab bio — in professional, bold, elegant, or minimal tone. Short (80 chars), medium (300 chars), or full length.", color: "#7c6af7" },
        { icon: Package, title: "Portfolio Packs", desc: "One-click export: Casting Pack (headshot + slate + resume + clip), Pageant Pack (walk + Q&A + achievements), Brand Pack (UGC reel + stats).", color: "#00d4aa" },
        { icon: BarChart3, title: "Quality Scoring", desc: "Each media item scored 0–100 on framing, lighting, sharpness, background noise, and face visibility. Top 5 improvements suggested.", color: "#f5c542" },
        { icon: Languages, title: "Multi-Language", desc: "Generate bios and resumes in multiple languages with localization support. Perfect for international casting and pageants.", color: "#ff6b9d" },
        { icon: CheckCircle, title: "Versioning & Audit", desc: "Every AI edit creates a new version. Original always preserved. Revert, compare, and full audit log of changes.", color: "#00d4aa" },
      ]}
      howItWorks={[
        { step: "Run profile scan", desc: "AI analyzes your profile completeness against category-specific requirements (acting, modeling, pageant)." },
        { step: "Generate & refine", desc: "Create bios, resumes, and sections. Choose tone, length, and variants. Apply with one click." },
        { step: "Export packs", desc: "Build casting, pageant, or brand packs. Export as PDF, ZIP, or shareable link with expiry controls." },
      ]}
      showcase={[
        { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop", label: "Headshot — Score 96" },
        { img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop", label: "Full-Body Comp" },
        { img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=500&fit=crop", label: "Editorial Look" },
        { img: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=400&h=450&fit=crop", label: "Commercial Shot" },
        { img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=550&fit=crop", label: "Runway Ready" },
        { img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=500&fit=crop", label: "High Fashion" },
        { img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=450&fit=crop", label: "Natural Portrait" },
        { img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop", label: "Classic Headshot" },
        { img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=550&fit=crop", label: "Street Style" },
        { img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&h=600&fit=crop", label: "Casting Pack Shot" },
        { img: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=400&h=450&fit=crop", label: "Profile Complete ✓" },
        { img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=500&fit=crop", label: "Casual Look" },
      ]}
      specs={[
        { label: "Bio tones", value: "Professional, Bold, Elegant, Minimal" },
        { label: "Bio lengths", value: "Short (80–120), Medium (300–500), Full" },
        { label: "Export formats", value: "PDF, ZIP, Shareable link" },
        { label: "Pack types", value: "Casting, Pageant, Brand" },
        { label: "Free plan", value: "Profile scan + 3 bios/day" },
        { label: "Pro plan", value: "Unlimited bios + PDF exports + packs" },
      ]}
    />
  )
}
