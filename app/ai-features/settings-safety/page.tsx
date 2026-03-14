"use client"
import { Settings, Shield, Eye, AlertTriangle, UserCheck, FileSearch } from "lucide-react"
import { AIStudioSubLayout } from "@/components/ai-studio-sub-layout"

export default function SettingsSafetyPage() {
  return (
    <AIStudioSubLayout
      badge="Settings & Safety"
      title="PRIVACY, SAFETY & CONTROL"
      subtitle="You control your data — every toggle, every asset."
      description="Fine-grained privacy controls per media item. Opt-out of model training, auto-tagging, and analytics personalization. Anti-harassment enforcement, no sensitive attribute inference, explainable AI recommendations, and human override with reporting."
      heroImg="https://images.unsplash.com/photo-1563986768609-322da13575f2?w=1200&h=600&fit=crop"
      accentColor="#EF4444"
      features={[
        { icon: Eye, title: "Privacy Controls", desc: "Opt out of content used for model improvement (tenant + user level). Disable auto-tagging or analytics personalization. Fine-grained controls per media item.", color: "#EF4444" },
        { icon: Shield, title: "AI Output Safety", desc: "Anti-harassment and anti-explicit content enforcement on all AI outputs. No sensitive attribute inference (race, religion, etc.). Built into every pipeline.", color: "#c8ff00" },
        { icon: FileSearch, title: "Explainable AI", desc: "'Explain why' panel for every recommendation and score. Understand how AI decisions are made. Full transparency on match scores and suggestions.", color: "#0EA5E9" },
        { icon: UserCheck, title: "Human Override & Reporting", desc: "Report any AI output you disagree with. Request human review from tenant ops. Every report tracked and resolved.", color: "#7c6af7" },
        { icon: AlertTriangle, title: "Content Moderation", desc: "Prohibited content detection on uploads and AI outputs. Missing consent flags for minors. Compliance checks enforced at every stage.", color: "#F59E0B" },
        { icon: Settings, title: "Tenant Admin Controls", desc: "Feature toggles per category/region. Sensitive attribute policies. Data retention rules. Watermark requirements. Export/sharing restrictions — all configurable.", color: "#10B981" },
      ]}
      howItWorks={[
        { step: "Set your preferences", desc: "Choose privacy level, opt-out of training data, configure auto-tagging and personalization." },
        { step: "AI respects your rules", desc: "Every AI pipeline checks your settings. No overrides, no exceptions." },
        { step: "Report & review", desc: "Flag any output. Request human review. Track resolution status." },
      ]}
      showcase={[
        { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop", label: "Privacy: Full Control" },
        { img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop", label: "Training Opt-Out" },
        { img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=550&fit=crop", label: "Watermark Applied" },
        { img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=450&fit=crop", label: "Content: Approved" },
        { img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=500&fit=crop", label: "AI Explained" },
        { img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop", label: "Report Resolved" },
        { img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&h=500&fit=crop", label: "Human Reviewed" },
        { img: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=400&h=450&fit=crop", label: "Rights Protected" },
        { img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=550&fit=crop", label: "Consent Verified" },
        { img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=500&fit=crop", label: "Moderation: Pass" },
      ]}
      specs={[
        { label: "Privacy granularity", value: "Per media item, per feature" },
        { label: "Opt-out options", value: "Model training, auto-tagging, analytics" },
        { label: "Safety enforcement", value: "Anti-harassment, anti-explicit, no bias" },
        { label: "Explainability", value: "Every score and recommendation" },
        { label: "Reporting", value: "Flag output + request human review" },
        { label: "Admin controls", value: "Feature toggles, policies, retention, watermarks" },
      ]}
    />
  )
}
