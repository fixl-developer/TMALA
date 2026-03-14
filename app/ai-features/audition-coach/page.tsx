"use client"
import { Mic, Video, Clock, Target, BookOpen, TrendingUp } from "lucide-react"
import { AIStudioSubLayout } from "@/components/ai-studio-sub-layout"

export default function AuditionCoachPage() {
  return (
    <AIStudioSubLayout
      badge="Audition Coach"
      title="NAIL EVERY AUDITION WITH AI"
      subtitle="Self-tape feedback, drills, and practice plans."
      description="Upload a self-tape and get timestamped feedback on pacing, diction, energy, eye line, and framing. Role-based practice drills. Pageant Q&A mock interviews. 7/14/30-day training plans with progress tracking."
      heroImg="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&h=600&fit=crop"
      accentColor="#F43F5E"
      features={[
        { icon: Video, title: "Self-Tape Coach", desc: "Upload your self-tape. AI returns pacing feedback, clarity & diction score, energy & presence analysis, eye line & framing checks, and timestamped moment markers.", color: "#F43F5E" },
        { icon: Target, title: "Role-Based Drills", desc: "Practice for specific castings or pageant rounds. AI generates likely questions, character prompts, improv scenarios, and runway walk tips per category.", color: "#c8ff00" },
        { icon: Mic, title: "Pageant Q&A Coach", desc: "Mock interviews with timed responses. STAR and PREP framework training. Confidence and conciseness scoring. Best answer variations (formal/witty/emotional).", color: "#7c6af7" },
        { icon: Clock, title: "Practice Plans", desc: "7-day, 14-day, or 30-day AI-generated training plans. Auto reminders via the automation system. Weekly progress reports.", color: "#0EA5E9" },
        { icon: BookOpen, title: "Interview Prep (STAR)", desc: "Structured answer training using STAR method. Bias-safe prompts. Multiple answer variations for the same question.", color: "#f5c542" },
        { icon: TrendingUp, title: "Progress Tracker", desc: "Track improvement over time. Compare self-tape scores across sessions. See which skills are improving and which need more work.", color: "#00d4aa" },
      ]}
      howItWorks={[
        { step: "Choose your prep type", desc: "Select a specific casting brief, pageant round, or general category to practice for." },
        { step: "Record & upload", desc: "Record your self-tape or answer a drill question. AI processes through ASR + analysis pipeline." },
        { step: "Get timestamped feedback", desc: "Receive moment-by-moment feedback with specific timestamps, redo suggestions, and a rehearsal plan." },
      ]}
      showcase={[
        { img: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=500&fit=crop", label: "Self-Tape Review" },
        { img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop", label: "Casting Prep" },
        { img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=550&fit=crop", label: "Runway Drill" },
        { img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=450&fit=crop", label: "Backstage Rehearsal" },
        { img: "https://images.unsplash.com/photo-1504270997636-07ddfbd48945?w=400&h=500&fit=crop", label: "Monologue Practice" },
        { img: "https://images.unsplash.com/photo-1536766768598-e09213fdcf22?w=400&h=600&fit=crop", label: "Pageant Q&A Mock" },
        { img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&h=450&fit=crop", label: "Walk Coaching" },
        { img: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=400&h=500&fit=crop", label: "7-Day Plan Active" },
        { img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=400&fit=crop", label: "Confidence: +23%" },
        { img: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=400&h=550&fit=crop", label: "Dance Audition" },
      ]}
      specs={[
        { label: "Self-tape analysis", value: "Pacing, diction, energy, eye line, framing" },
        { label: "Feedback format", value: "Timestamped moment markers + action plan" },
        { label: "Practice plan durations", value: "7, 14, or 30 days" },
        { label: "Q&A frameworks", value: "STAR, PREP" },
        { label: "Answer variations", value: "Formal, witty, emotional" },
        { label: "Available on", value: "Pro plan (add-on: 60 or 180 minutes)" },
      ]}
    />
  )
}
