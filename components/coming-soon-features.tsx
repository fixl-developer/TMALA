"use client"

import React from "react"
import { Video, Sparkles, ShieldCheck, Search } from "lucide-react"
import { IconBox } from "@/components/ui/icon-box"

const soonFeatures = [
    {
        icon: Video,
        title: "AI Video Generation",
        description: "Transform prompts into cinematic masterpieces in seconds.",
        color: "text-purple-500",
        badge: "Coming Q2"
    },
    {
        icon: Sparkles,
        title: "Virtual Talent Studio",
        description: "Build and manage digital-first influencer teams.",
        color: "text-montra-red",
        badge: "Beta Access"
    },
    {
        icon: ShieldCheck,
        title: "Quantum Escrow",
        description: "Zero-lag global payouts with automated compliance.",
        color: "text-blue-500",
        badge: "Internal Dev"
    },
    {
        icon: Search,
        title: "Predictive Scouting",
        description: "AI-powered forecasting for next-gen talent success.",
        color: "text-amber-500",
        badge: "Research"
    }
]

export function ComingSoonFeatures() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 px-4 max-w-7xl mx-auto">
            {soonFeatures.map((feature, index) => (
                <div
                    key={index}
                    className="group relative bg-zinc-900/30 backdrop-blur-sm border border-white/5 p-6 rounded-xl hover:bg-zinc-900/50 hover:border-cinematic-amber/20 transition-all duration-500 overflow-hidden"
                >
                    {/* Background Glow */}
                    <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-500" />

                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-4">
                            <IconBox icon={feature.icon} size="sm" variant="gradient" accentColor="amber" iconClassName={feature.color} />
                            <span className="text-[10px] font-bebas uppercase tracking-widest text-zinc-500 bg-zinc-800/30 px-2 py-0.5 rounded border border-white/5">
                                {feature.badge}
                            </span>
                        </div>

                        <h3 className="font-bebas text-xl text-white uppercase tracking-wider mb-2 group-hover:text-montra-red transition-colors">
                            {feature.title}
                        </h3>
                        <p className="text-zinc-500 text-xs font-light leading-relaxed">
                            {feature.description}
                        </p>
                    </div>

                    {/* Bottom Indicator */}
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-montra-red group-hover:w-full transition-all duration-700" />
                </div>
            ))}
        </div>
    )
}
