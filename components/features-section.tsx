"use client"

import { useEffect, useRef, useState } from "react"
import {
  UserCheck,
  Building2,
  CreditCard,
  Trophy,
  Star,
  Handshake,
  Search,
  ShieldCheck,
  ArrowRight,
  Play,
  Pause,
} from "lucide-react"

const features = [
  {
    icon: UserCheck,
    heading: "Seamless Talent Onboarding",
    title: "Verified Onboarding Workflow",
    description: "Talents self-register with ID proof & portfolio upload → AI-assisted verification → agency one-click approval & roster assignment.",
    video: "/talents-demo.mp4",
    benefits: ["ID verification", "Portfolio review", "One-click approval", "Automated roster assignment"]
  },
  {
    icon: Building2,
    heading: "Complete Agency Management",
    title: "Multi-Tenant Agency Control",
    description: "Superadmin creates isolated tenants; agencies customize logos, colors, domains, set RBAC + ABAC permissions, and manage team roles securely.",
    video: "/agencies-demo.mp4",
    benefits: ["Custom branding", "Domain management", "Role-based access", "Secure isolation"]
  },
  {
    icon: CreditCard,
    heading: "Flexible Pricing Options",
    title: "Tiered Subscription Plans",
    description: "Agencies choose plans (Basic to Premium) with feature limits enforced via ABAC — upgrade for unlimited talents, advanced AI, more pageants.",
    video: "/sponsors-demo.mp4",
    benefits: ["Flexible pricing", "Feature limits", "Easy upgrades", "Scalable plans"]
  },
  {
    icon: Trophy,
    heading: "Event Management System",
    title: "Pageants & Shows Module",
    description: "Agencies host different types (beauty, talent, fashion, regional contests) — set entry rules, assign judges, collect dynamic marks/scores, announce winners.",
    video: "/background-video.mp4",
    benefits: ["Multiple contest types", "Judge assignment", "Dynamic scoring", "Winner announcements"]
  },
  {
    icon: Star,
    heading: "Fair Evaluation Process",
    title: "Judge & Scoring Tools",
    description: "Invited judges give ratings in assigned events; support for manual input with optional fairness mechanisms for transparent scoring.",
    video: "/generate-step.mp4",
    benefits: ["Judge invitations", "Rating systems", "Fairness mechanisms", "Transparent scoring"]
  },
  {
    icon: Handshake,
    heading: "Brand Partnership Tools",
    title: "Sponsorship & Branding Management",
    description: "Agencies create sponsorship opportunities, invite brands, track deals & commissions, integrate branded elements into pageants.",
    video: "/result-step.mp4",
    benefits: ["Brand partnerships", "Deal tracking", "Commission management", "Branded integration"]
  },
  {
    icon: Search,
    heading: "Smart Talent Discovery",
    title: "Advanced Scouting & Matchmaking",
    description: "Powerful search filters + AI recommendations to connect agencies with verified talents matching specific criteria and requirements.",
    video: "/8059250-hd_1920_1080_25fps.mp4",
    benefits: ["Smart filters", "AI recommendations", "Talent matching", "Criteria-based search"]
  },
  {
    icon: ShieldCheck,
    heading: "Enterprise-Grade Security",
    title: "Secure & Compliant Infrastructure",
    description: "Full tenant data isolation, role-based + attribute-based access control, India-first compliance (DPDP Act) for complete peace of mind.",
    video: "/talents-demo.mp4",
    benefits: ["Data isolation", "Access control", "DPDP compliance", "Enterprise security"]
  },
]

export function FeaturesSection() {
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null)

  return (
    <section className="relative bg-black py-24 lg:py-32 z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 lg:mb-24">
          <p className="text-sm font-bebas uppercase tracking-[0.4em] text-montra-red mb-4">
            Platform Capabilities
          </p>
          <h2 className="font-bebas text-5xl font-bold text-white sm:text-6xl lg:text-7xl uppercase tracking-normal">
            Comprehensive <br />
            <span className="text-white/30 italic">Features</span> <br />
            Built for Agencies & Talents
          </h2>
          <p className="mt-8 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
            Everything you need to discover, manage, and showcase creative talent in the digital age.
          </p>
        </div>

        {/* Features Grid - 2 then 3 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {features.slice(0, 5).map((feature, index) => (
            <div
              key={index}
              className={`group relative h-[450px] overflow-hidden bg-[#0a0a0a] border border-white/10 transition-all duration-700 hover:border-white/20 ${index < 2 ? 'md:col-span-3' : 'md:col-span-2'
                }`}
              onMouseEnter={() => setHoveredVideo(index)}
              onMouseLeave={() => setHoveredVideo(null)}
            >
              {/* Background Video/Image Layer */}
              <div className="absolute inset-0 z-0">
                <video
                  src={feature.video}
                  className={`h-full w-full object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-105 ${hoveredVideo === index ? "opacity-100" : "opacity-0"
                    }`}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="absolute inset-0 bg-black transition-all duration-700 group-hover:bg-black/40" />

                {/* Default 3D-like Icon Placeholder (visible when not hovering) */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${hoveredVideo === index ? 'opacity-0' : 'opacity-100'}`}>
                  <feature.icon className="w-32 h-32 text-zinc-800/50 stroke-[0.5] drop-shadow-2xl" />
                </div>
              </div>

              {/* Minimal Content */}
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between">

                {/* Top: Number & Icon */}
                <div className="flex justify-between items-start">
                  <span className="font-bebas text-2xl text-white/30 group-hover:text-montra-red transition-colors duration-500">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  <div className="p-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 group-hover:bg-montra-red/20 group-hover:border-montra-red/30 transition-all duration-500">
                    <feature.icon className="w-6 h-6 text-white group-hover:text-montra-red transition-colors duration-500" />
                  </div>
                </div>

                {/* Bottom: Text */}
                <div className="space-y-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-bebas text-4xl text-white uppercase tracking-wide group-hover:text-montra-red transition-colors duration-500">
                    {feature.heading}
                  </h3>

                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500">
                    <div className="overflow-hidden">
                      <p className="text-gray-400 text-sm leading-relaxed font-light pb-2">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}