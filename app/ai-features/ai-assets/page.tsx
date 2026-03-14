"use client"
import { FolderOpen, FileText, Share2, Download, History, Lock } from "lucide-react"
import { AIStudioSubLayout } from "@/components/ai-studio-sub-layout"

export default function AIAssetsPage() {
  return (
    <AIStudioSubLayout
      badge="My AI Assets"
      title="YOUR AI-GENERATED LIBRARY"
      subtitle="Every AI output — organized, versioned, exportable."
      description="All AI-generated assets stored in one place: bios, resumes, answers, scripts, practice plans, media reports. Full version history, linked opportunities, and powerful export options including PDF, shareable links, and application pack zips."
      heroImg="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200&h=600&fit=crop"
      accentColor="#8B5CF6"
      features={[
        { icon: FolderOpen, title: "Unified Asset Library", desc: "All AI outputs in one place — bios, resumes, application answers, UGC scripts, practice plans, coach feedback. Organized by type with smart search and filters.", color: "#8B5CF6" },
        { icon: History, title: "Full Version History", desc: "Every AI edit creates a new version. Original always preserved. Compare any two versions side-by-side. Revert to any previous version instantly.", color: "#c8ff00" },
        { icon: FileText, title: "Linked Opportunities", desc: "Every asset linked to the opportunity it was created for. See which bios, answers, and packs were used for which applications.", color: "#0EA5E9" },
        { icon: Download, title: "Export Packs", desc: "PDF resume export, shareable portfolio links, application pack zips. Casting Pack, Pageant Pack, Brand Pack — all tenant-controlled export options.", color: "#F43F5E" },
        { icon: Share2, title: "Share Controls", desc: "Set visibility per asset: public, private, or casting-only. Generate expiring share links. Control who can download vs view-only.", color: "#10B981" },
        { icon: Lock, title: "Rights & Watermark", desc: "Watermark controls on exports. Download permission toggles. Usage consent flags. Full audit trail of who accessed what.", color: "#f5c542" },
      ]}
      howItWorks={[
        { step: "Generate assets", desc: "Use any AI Studio tool — bios, resumes, answers, scripts. Every output auto-saves to your library." },
        { step: "Organize & version", desc: "Browse by type, search by keyword. Compare versions, revert changes, track edit history." },
        { step: "Export & share", desc: "Export as PDF, create shareable links, build application packs. Control visibility and permissions." },
      ]}
      showcase={[
        { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop", label: "Bio v3 — Applied" },
        { img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop", label: "Resume PDF Export" },
        { img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=550&fit=crop", label: "Casting Pack Ready" },
        { img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=450&fit=crop", label: "UGC Script v2" },
        { img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=500&fit=crop", label: "Coach Notes Saved" },
        { img: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=400&h=600&fit=crop", label: "Pageant Pack" },
        { img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop", label: "Share Link Active" },
        { img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&h=500&fit=crop", label: "Brand Pack v4" },
        { img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=450&fit=crop", label: "Answer Drafts" },
        { img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=550&fit=crop", label: "Practice Plan Log" },
      ]}
      specs={[
        { label: "Asset types", value: "Bio, resume, answers, scripts, plans, reports" },
        { label: "Version history", value: "Unlimited, with diff & revert" },
        { label: "Export formats", value: "PDF, portfolio link, zip pack" },
        { label: "Share options", value: "Public, private, casting-only, expiring links" },
        { label: "Pack types", value: "Casting Pack, Pageant Pack, Brand Pack" },
        { label: "Available on", value: "Pro plan and above (export packs)" },
      ]}
    />
  )
}
