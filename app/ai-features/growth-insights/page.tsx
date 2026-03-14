"use client"
import { BarChart3, TrendingUp, Target, Eye, Flame, Calendar } from "lucide-react"
import { AIStudioSubLayout } from "@/components/ai-studio-sub-layout"

export default function GrowthInsightsPage() {
  return (
    <AIStudioSubLayout
      badge="Growth Insights"
      title="TRACK, IMPROVE, GROW"
      subtitle="Data-driven career intelligence for talents."
      description="Funnel analytics from views to bookings. Portfolio performance tracking — which media items drive better outcomes. Skill demand heatmaps. Personalized improvement suggestions. Goal tracking with monthly reports."
      heroImg="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop"
      accentColor="#06B6D4"
      features={[
        { icon: BarChart3, title: "Funnel Analytics", desc: "Views → shortlist → callback → selection conversion. See exactly where you drop off and what to fix.", color: "#06B6D4" },
        { icon: Eye, title: "Portfolio Performance", desc: "Which media items drive better outcomes? AI tracks views, engagement, and conversion per asset so you know what works.", color: "#c8ff00" },
        { icon: Flame, title: "Skill Demand Heatmap", desc: "See what roles are trending in your market. Which skills are in demand. Where the opportunities are growing.", color: "#F43F5E" },
        { icon: TrendingUp, title: "Improvement Suggestions", desc: "Personalized tips: 'Upload a better intro video' (with checklist), 'Add runway walk clip', 'Complete verification to increase trust.'", color: "#7c6af7" },
        { icon: Target, title: "Goal Tracking", desc: "Set goals: applications per week, improve shortlist rate, complete verification. Monthly progress reports auto-generated.", color: "#f5c542" },
        { icon: Calendar, title: "Monthly Reports", desc: "Automated monthly progress report with key metrics, trends, and next actions. Exportable for agencies and managers.", color: "#10B981" },
      ]}
      howItWorks={[
        { step: "Connect your activity", desc: "Growth Insights automatically tracks your applications, views, shortlists, and bookings." },
        { step: "Review your dashboard", desc: "See funnels, heatmaps, and portfolio performance in one view." },
        { step: "Follow AI suggestions", desc: "Get personalized next-step recommendations based on your data." },
      ]}
      showcase={[
        { img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=500&fit=crop", label: "Funnel Dashboard" },
        { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop", label: "Top Performer" },
        { img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=550&fit=crop", label: "Views: +340%" },
        { img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=450&fit=crop", label: "Shortlist Rate Up" },
        { img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop", label: "Skill Demand: High" },
        { img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&h=600&fit=crop", label: "Trending: Runway" },
        { img: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=400&h=400&fit=crop", label: "Goal: 10 Apps/Week" },
        { img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=500&fit=crop", label: "Monthly Report" },
      ]}
      specs={[
        { label: "Metrics tracked", value: "Views, shortlists, callbacks, bookings, revenue" },
        { label: "Report frequency", value: "Weekly highlights, monthly full report" },
        { label: "Heatmap coverage", value: "Skills, roles, geography, timing" },
        { label: "Goal types", value: "Applications, shortlist rate, verification, revenue" },
        { label: "Available on", value: "Pro plan and above" },
      ]}
    />
  )
}
