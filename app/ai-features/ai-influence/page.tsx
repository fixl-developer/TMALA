"use client"
import { Users, TrendingUp, FileText, DollarSign, BarChart3, Shield } from "lucide-react"
import { AIStudioSubLayout } from "@/components/ai-studio-sub-layout"

export default function AIInfluencePage() {
  return (
    <AIStudioSubLayout
      badge="AI Influence"
      title="MANAGE INFLUENCERS AT SCALE"
      subtitle="End-to-end influencer operations for agencies."
      description="Influencer profiles with social linking, audience demographics, and rate cards. Campaign intake, shortlisting, deal structuring, content management, milestone-based payouts, and performance analytics."
      heroImg="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&h=600&fit=crop"
      accentColor="#EC4899"
      features={[
        { icon: Users, title: "Influencer Profiles", desc: "Social account linking (Instagram, YouTube, X), category tags, audience demographics, portfolio, rate cards, and exclusivity flags. Agency-controlled with influencer consent.", color: "#EC4899" },
        { icon: FileText, title: "Campaign & Deal Management", desc: "Brand briefs with objectives, deliverables, timelines. Influencer shortlisting by category, reach, location. System-backed contracts with milestones.", color: "#c8ff00" },
        { icon: BarChart3, title: "Content & Deliverables", desc: "Content submission workflow, brand approval stages, revision tracking, scheduled publishing. All content linked to campaign, brand, and influencer.", color: "#7c6af7" },
        { icon: DollarSign, title: "Escrow & Payouts", desc: "Brand pays campaign budget into escrow. Milestone-based releases. Automatic commission splits: platform, agency, influencer.", color: "#10B981" },
        { icon: TrendingUp, title: "Performance Analytics", desc: "Campaign performance, influencer ROI, engagement metrics, brand satisfaction. Used for future pitching and pricing refinement.", color: "#0EA5E9" },
        { icon: Shield, title: "Compliance & Safety", desc: "Mandatory sponsored disclosures. Content moderation. Anti-fraud checks. No off-platform deals. Dispute resolution integration.", color: "#F43F5E" },
      ]}
      howItWorks={[
        { step: "Onboard influencers", desc: "Invite influencers, verify identity, connect social accounts, sign contracts, set up wallets." },
        { step: "Manage campaigns", desc: "Receive brand briefs, shortlist influencers, structure deals with milestones and deliverables." },
        { step: "Track & pay", desc: "Monitor content delivery, track performance metrics, release milestone payments from escrow." },
      ]}
      showcase={[
        { img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=500&fit=crop", label: "Social Dashboard" },
        { img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop", label: "Campaign: Active" },
        { img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop", label: "Influencer Profile" },
        { img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=450&fit=crop", label: "Content Approved" },
        { img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&h=550&fit=crop", label: "Brand Deal Signed" },
        { img: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=400&h=500&fit=crop", label: "Reach: 2.4M" },
        { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop", label: "UGC Delivered" },
        { img: "https://images.unsplash.com/photo-1496440737103-cd596325d314?w=400&h=500&fit=crop", label: "Milestone Paid" },
        { img: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=400&h=450&fit=crop", label: "ROI: 340%" },
        { img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=550&fit=crop", label: "Engagement: High" },
      ]}
      specs={[
        { label: "Social platforms", value: "Instagram, YouTube, X, TikTok" },
        { label: "Deal structure", value: "Milestones, deliverables, usage rights, pricing" },
        { label: "Payment flow", value: "Escrow → milestone → commission split → payout" },
        { label: "Commission splits", value: "Platform + Agency + Influencer (configurable)" },
        { label: "Analytics", value: "Campaign ROI, engagement, brand satisfaction" },
        { label: "Available on", value: "Pro and Enterprise plans" },
      ]}
    />
  )
}
