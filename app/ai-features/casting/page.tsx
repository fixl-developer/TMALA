"use client"
import { Users, Search, FileCheck, Calendar, Bell, Zap } from "lucide-react"
import { AIStudioSubLayout } from "@/components/ai-studio-sub-layout"

export default function CastingPage() {
  return (
    <AIStudioSubLayout
      badge="Casting Studio"
      title="CAST SMARTER WITH AI"
      subtitle="From brief to booking — fully automated."
      description="Create casting calls, receive talent applications, run AI-powered screening against brief requirements, shortlist, schedule callbacks, generate call sheets, and create bookings with automated escrow and contracts."
      heroImg="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop"
      accentColor="#F59E0B"
      features={[
        { icon: FileCheck, title: "Casting Call Builder", desc: "Create detailed casting briefs with role requirements, dates, location, budget, and eligibility rules. Publish to your talent pool or marketplace.", color: "#F59E0B" },
        { icon: Search, title: "AI Application Screening", desc: "Auto-screen applications against brief requirements. Only verified, matching profiles surface. Confidence scoring for each match.", color: "#c8ff00" },
        { icon: Users, title: "Shortlisting & Holds", desc: "Bulk shortlist actions. Place availability holds on talent. Track interest and acceptance rates per casting.", color: "#7c6af7" },
        { icon: Calendar, title: "Call Sheets & Scheduling", desc: "Auto-generate call sheets with time, location, contact, and requirements. Publish and notify all parties.", color: "#0EA5E9" },
        { icon: Bell, title: "Automated Notifications", desc: "Selection/rejection messages, schedule reminders, payment confirmations — all automated via the notification engine.", color: "#F43F5E" },
        { icon: Zap, title: "Booking & Escrow", desc: "Convert shortlisted talent to bookings. Auto-generate contracts. Escrow payments created automatically on confirmation.", color: "#10B981" },
      ]}
      howItWorks={[
        { step: "Create casting brief", desc: "Define the role, requirements, dates, and budget. Publish to your talent pool." },
        { step: "AI screens applicants", desc: "Applications are auto-screened against requirements. Top matches surface first." },
        { step: "Shortlist → Book → Pay", desc: "Select talent, generate call sheets, create bookings with escrow. All automated." },
      ]}
      showcase={[
        { img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=500&fit=crop", label: "Casting Brief Live" },
        { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop", label: "AI Screened: 94% Match" },
        { img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=550&fit=crop", label: "Shortlisted" },
        { img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=450&fit=crop", label: "Callback Confirmed" },
        { img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop", label: "Call Sheet Sent" },
        { img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=400&fit=crop", label: "Booked + Escrow" },
        { img: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=400&h=500&fit=crop", label: "Self-Tape Received" },
        { img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&h=450&fit=crop", label: "Bulk Shortlist" },
        { img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop", label: "Contract Generated" },
        { img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=550&fit=crop", label: "On-Set Ready" },
      ]}
      specs={[
        { label: "Screening accuracy", value: "94.7% match rate" },
        { label: "Submission types", value: "Self-tape, portfolio, direct application" },
        { label: "Shortlist actions", value: "Individual + bulk" },
        { label: "Payment flow", value: "Escrow → milestone → release" },
        { label: "Notifications", value: "In-app + email/SMS" },
        { label: "Contract generation", value: "Auto from booking + template" },
      ]}
    />
  )
}
