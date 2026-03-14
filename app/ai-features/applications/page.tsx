"use client"
import { Target, FileText, Shield, Package, Link2, Sparkles } from "lucide-react"
import { AIStudioSubLayout } from "@/components/ai-studio-sub-layout"

export default function ApplicationsPage() {
  return (
    <AIStudioSubLayout
      badge="Application Assistant"
      title="APPLY SMARTER, WIN MORE ROLES"
      subtitle="AI-powered match readiness and submission optimization."
      description="Check your readiness for any opportunity. Get smart answer drafts based on your profile. Detect scams. Auto-order your portfolio for each role. Export application packs with expiring share links."
      heroImg="https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=1200&h=600&fit=crop"
      accentColor="#F59E0B"
      features={[
        { icon: Target, title: "Match Readiness Check", desc: "On any opportunity: eligibility status (pass/fail), missing requirements, predicted competitiveness band (low/medium/high), and top 5 actions to improve.", color: "#F59E0B" },
        { icon: FileText, title: "Smart Answer Builder", desc: "For custom application questions: AI drafts answers based on your profile + experience. Tone selector, length selector, proof-backed suggestions.", color: "#7c6af7" },
        { icon: Shield, title: "Scam & Risk Protection", desc: "Flags suspicious opportunities: unusual payment terms, missing organizer verification, abnormal contract clauses. Safe apply mode anonymizes contact until shortlisted.", color: "#F43F5E" },
        { icon: Package, title: "Submission Optimizer", desc: "Auto-orders portfolio items for each role. Builds a submission playlist. Checks file sizes, formats, and naming conventions.", color: "#00d4aa" },
        { icon: Link2, title: "Expiring Share Links", desc: "Export application packs as PDF, ZIP, or shareable link. Set expiry, download permissions, and visibility (public/private/casting-only).", color: "#0EA5E9" },
        { icon: Sparkles, title: "Claim Validation", desc: "Proof-backed suggestions link to your verified credits and documents. Keyword matching ensures your application hits brief requirements.", color: "#c8ff00" },
      ]}
      howItWorks={[
        { step: "Open any opportunity", desc: "Click 'How ready am I?' on any casting, pageant, or campaign listing." },
        { step: "Review readiness score", desc: "See what's missing, what you need to fix, and how competitive you are." },
        { step: "Apply with optimized pack", desc: "AI builds your submission — ordered, formatted, and linked for the specific role." },
      ]}
      showcase={[
        { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop", label: "Match: 94% Ready" },
        { img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop", label: "Casting Brief Match" },
        { img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=550&fit=crop", label: "Submission Ordered" },
        { img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=450&fit=crop", label: "Smart Answer Draft" },
        { img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=500&fit=crop", label: "Portfolio Optimized" },
        { img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop", label: "Verified Safe" },
        { img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&h=400&fit=crop", label: "Pack Exported" },
        { img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop", label: "Scam Alert Flagged" },
        { img: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=400&h=450&fit=crop", label: "Shortlisted!" },
        { img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=550&fit=crop", label: "Competitiveness: High" },
      ]}
      specs={[
        { label: "Readiness output", value: "Pass/fail + missing items + competitiveness band" },
        { label: "Answer tones", value: "Professional, casual, confident, empathetic" },
        { label: "Export formats", value: "PDF, ZIP, expiring share link" },
        { label: "Share controls", value: "Public, private, casting-only" },
        { label: "Scam detection", value: "Payment terms, verification, contract clauses" },
        { label: "Available on", value: "Free (basic), Pro (full optimizer + exports)" },
      ]}
    />
  )
}
