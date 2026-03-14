import React from "react"
import { LayoutGrid, ShieldCheck, BarChart3, FileText, Users, Zap, Globe, Lock } from "lucide-react"

export function EnterprisePillarsSection() {
    const capabilities = [
        {
            title: "Multi-Tenant Architecture",
            description: "Secure, isolated workspaces for every agency department and partner with zero leakage.",
            icon: LayoutGrid,
        },
        {
            title: "Role-Based Access Control",
            description: "Granular permissions system ensuring team members see only what their role allows.",
            icon: ShieldCheck,
        },
        {
            title: "Real-Time Analytics",
            description: "Live operational overview of bookings, revenue, and talent performance across the globe.",
            icon: BarChart3,
        },
        {
            title: "Contracts & Compliance",
            description: "Automated legal orchestration with secured escrow and jurisdictional compliance.",
            icon: FileText,
        },
        {
            title: "Talent Management",
            description: "Complete lifecycle management from onboarding to portfolio optimization.",
            icon: Users,
        },
        {
            title: "Instant Workflows",
            description: "Automated processes that eliminate manual tasks and accelerate operations.",
            icon: Zap,
        },
        {
            title: "Global Reach",
            description: "Multi-currency support and international compliance for worldwide operations.",
            icon: Globe,
        },
        {
            title: "Data Security",
            description: "Bank-level encryption and security protocols to protect sensitive information.",
            icon: Lock,
        },
    ]

    const iconColors = [
        "text-indigo-600", "text-violet-600", "text-sky-600", "text-emerald-600",
        "text-blue-600", "text-amber-600", "text-rose-600", "text-teal-600",
    ]
    const iconBgs = [
        "bg-indigo-50 border-indigo-100", "bg-violet-50 border-violet-100", "bg-sky-50 border-sky-100", "bg-emerald-50 border-emerald-100",
        "bg-blue-50 border-blue-100", "bg-amber-50 border-amber-100", "bg-rose-50 border-rose-100", "bg-teal-50 border-teal-100",
    ]
    const hoverColors = [
        "group-hover:text-indigo-600", "group-hover:text-violet-600", "group-hover:text-sky-600", "group-hover:text-emerald-600",
        "group-hover:text-blue-600", "group-hover:text-amber-600", "group-hover:text-rose-600", "group-hover:text-teal-600",
    ]

    return (
        <section className="relative w-full py-32 px-4 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 space-y-4">
                    <p className="font-bebas text-sm uppercase tracking-[0.35em] text-amber-500">
                        Platform Capabilities
                    </p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
                        Comprehensive Features
                    </h2>
                    <p className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed">
                        Enterprise-grade infrastructure designed to manage complex agency ecosystems at scale.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {capabilities.map((capability, index) => (
                        <div
                            key={capability.title}
                            className="group relative p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            <div className="relative z-10 space-y-4">
                                <div className={`p-3 w-fit rounded-xl border ${iconBgs[index]} group-hover:scale-110 transition-transform duration-300`}>
                                    <capability.icon className={`w-6 h-6 ${iconColors[index]}`} />
                                </div>
                                <h3 className={`text-lg font-bold text-gray-900 tracking-tight ${hoverColors[index]} transition-colors`}>
                                    {capability.title}
                                </h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    {capability.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Subtle decorative blobs — light */}
            <div className="absolute top-1/3 left-20 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-40 pointer-events-none" />
            <div className="absolute bottom-1/3 right-20 w-96 h-96 bg-violet-100 rounded-full blur-3xl opacity-30 pointer-events-none" />
        </section>
    )
}
