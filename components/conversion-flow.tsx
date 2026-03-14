import React from "react"
import { Search, MonitorPlay, Building2, Users, Rocket } from "lucide-react"

export function ConversionFlowSection() {
    const steps = [
        {
            title: "Visitor",
            description: "Explore the platform capabilities.",
            icon: Search,
        },
        {
            title: "Demo",
            description: "See the architecture in action.",
            icon: MonitorPlay,
        },
        {
            title: "Create Agency",
            description: "Deploy your dedicated infrastructure.",
            icon: Building2,
        },
        {
            title: "Invite Team",
            description: "Onboard agents and talent rosters.",
            icon: Users,
        },
    ]

    return (
        <section className="relative w-full py-24 px-4 bg-cinematic-base overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 space-y-4">
                    <p className="text-[10px] font-inter uppercase tracking-[0.5em] text-white/70 font-medium">
                        The Journey to Excellence
                    </p>
                    <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
                        From Discovery to Operation
                    </h2>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Connector Line (Desktop) */}
                    <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent hidden md:block -translate-y-12" />

                    {steps.map((step, index) => (
                        <div key={step.title} className="relative z-10 flex flex-col items-center text-center space-y-6 group">
                            <div className="relative">
                                <div className="w-16 h-16 rounded-2xl bg-cinematic-base border border-white/10 flex items-center justify-center group-hover:border-cinematic-cyan/50 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all duration-300">
                                    <step.icon className="w-6 h-6 text-white group-hover:text-cinematic-cyan transition-colors" />
                                </div>
                                {/* Step Number Badge */}
                                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white text-black text-[10px] font-bold flex items-center justify-center">
                                    {index + 1}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-lg font-bold text-white tracking-tight">
                                    {step.title}
                                </h3>
                                <p className="text-white/80 text-sm leading-relaxed max-w-[200px] mx-auto">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Final Result Statement */}
                <div className="mt-24 p-8 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto">
                    <div className="space-y-2 text-center md:text-left">
                        <h4 className="text-xl font-bold text-white">Full Operational Control</h4>
                        <p className="text-white/80 text-sm">Decision makers buy outcomes, not just features.</p>
                    </div>
                    <div className="flex items-center gap-4 bg-cinematic-cyan/10 border border-cinematic-cyan/20 px-6 py-3 rounded-xl">
                        <Rocket className="w-5 h-5 text-cinematic-cyan" />
                        <span className="text-cinematic-cyan font-bold text-lg">Operate</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
