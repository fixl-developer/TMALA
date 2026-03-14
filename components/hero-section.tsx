"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, Users, Building2, Star, Bell, TrendingUp } from "lucide-react"
import { useAuthModal } from "@/components/auth-modal"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const { openAuth } = useAuthModal()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative w-full overflow-hidden" style={{ background: "#fff", minHeight: "92vh" }}>
      {/* Subtle ambient glow */}
      <div
        className="absolute z-[1] rounded-full pointer-events-none"
        style={{ width: 800, height: 800, top: -200, right: -200, background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)", filter: "blur(60px)" }}
      />
      <div
        className="absolute z-[1] rounded-full pointer-events-none"
        style={{ width: 600, height: 600, bottom: -100, left: -100, background: "radial-gradient(circle, rgba(139,92,246,0.04) 0%, transparent 70%)", filter: "blur(60px)" }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 flex items-center min-h-[92vh]">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center w-full py-20">

          {/* LEFT: text */}
          <div className="max-w-xl">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-7 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
              style={{ background: "rgba(99,102,241,0.08)", border: "1px solid rgba(99,102,241,0.15)", color: "#6366f1", transitionDelay: "0.1s" }}
            >
              <Star className="w-3 h-3" />
              #1 Platform for Talent Agencies
            </div>

            {/* Headline */}
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-6 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: "0.2s" }}
            >
              <span style={{ color: "#111" }}>Run your agency</span>
              <br />
              <span style={{ color: "#6366f1" }}>with one intelligent system.</span>
            </h1>

            {/* Subheadline */}
            <p
              className={`text-[16px] leading-relaxed mb-8 max-w-md transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ color: "#555", transitionDelay: "0.3s" }}
            >
              Centralize bookings, contracts, compliance, and financial visibility
              in a single operational control layer for modern talent agencies.
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-wrap gap-3 mb-10 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: "0.4s" }}
            >
              <button
                onClick={() => openAuth("signup")}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white hover:scale-[1.02] transition-all duration-200"
                style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", boxShadow: "0 4px 16px rgba(99,102,241,0.3)" }}
              >
                Get Started Free
              </button>
              <Link href="/#features">
                <button
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 hover:bg-gray-50"
                  style={{ color: "#333", background: "#fff", border: "1px solid #e5e7eb" }}
                >
                  See Features <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </Link>
            </div>

            {/* Trust bar */}
            <div
              className={`flex items-center gap-6 flex-wrap transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
              style={{ transitionDelay: "0.5s" }}
            >
              {[
                { icon: Building2, value: "500+", label: "Agencies" },
                { icon: Users, value: "10K+", label: "Talents" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-2">
                  <s.icon className="w-4 h-4" style={{ color: "#888" }} />
                  <span className="text-sm font-bold" style={{ color: "#111" }}>{s.value}</span>
                  <span className="text-xs" style={{ color: "#888" }}>{s.label}</span>
                </div>
              ))}
              <div className="flex items-center gap-1.5">
                <div className="flex -space-x-1">
                  {["#6366f1", "#8b5cf6", "#a855f7", "#c084fc"].map((c, i) => (
                    <div key={i} className="w-5 h-5 rounded-full border-2 border-white" style={{ background: c }} />
                  ))}
                </div>
                <span className="text-xs ml-1" style={{ color: "#888" }}>Setup in 3 min</span>
              </div>
            </div>
          </div>

          {/* RIGHT: floating product mockup */}
          <div
            className={`relative hidden lg:block transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0 translate-x-0" : "opacity-0 translate-y-6 translate-x-6"}`}
            style={{ transitionDelay: "0.4s" }}
          >
            {/* Main dashboard card */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: "#fff",
                border: "1px solid #e5e7eb",
                boxShadow: "0 32px 80px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.04)",
              }}
            >
              {/* Top bar */}
              <div className="flex items-center gap-2 px-5 py-3.5" style={{ borderBottom: "1px solid #f3f4f6" }}>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ef4444" }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#f59e0b" }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#22c55e" }} />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-3 py-1 rounded-md text-xs font-medium" style={{ background: "#f9fafb", color: "#888" }}>
                    app.multitalent.io/dashboard
                  </div>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-5 space-y-4" style={{ background: "#fafbfc" }}>
                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Active Talents", value: "2,847", change: "+12%", color: "#6366f1" },
                    { label: "Open Bookings", value: "156", change: "+8%", color: "#10b981" },
                    { label: "Revenue MTD", value: "$48.2K", change: "+23%", color: "#f59e0b" },
                  ].map((stat) => (
                    <div key={stat.label} className="p-3 rounded-xl bg-white" style={{ border: "1px solid #f3f4f6" }}>
                      <div className="text-xs mb-1.5" style={{ color: "#888" }}>{stat.label}</div>
                      <div className="flex items-end gap-2">
                        <span className="text-lg font-bold leading-none" style={{ color: "#111" }}>{stat.value}</span>
                        <span className="text-xs font-semibold leading-none mb-0.5" style={{ color: stat.color }}>{stat.change}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Talent cards row */}
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xs font-semibold" style={{ color: "#333" }}>Recent Activity</span>
                    <span className="text-xs" style={{ color: "#6366f1" }}>View all</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { name: "Sarah M.", role: "Fashion Model", status: "Booked", statusColor: "#10b981", bg: "#6366f1" },
                      { name: "James K.", role: "Actor", status: "Shortlisted", statusColor: "#f59e0b", bg: "#f43f5e" },
                      { name: "Priya R.", role: "Dancer", status: "New Match", statusColor: "#6366f1", bg: "#8b5cf6" },
                    ].map((talent) => (
                      <div
                        key={talent.name}
                        className="flex items-center gap-3 p-2.5 rounded-lg bg-white"
                        style={{ border: "1px solid #f3f4f6" }}
                      >
                        <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0" style={{ background: talent.bg }}>
                          {talent.name.split(" ").map(n => n[0]).join("")}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-semibold" style={{ color: "#111" }}>{talent.name}</div>
                          <div className="text-xs" style={{ color: "#888" }}>{talent.role}</div>
                        </div>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: talent.statusColor + "15", color: talent.statusColor }}>
                          {talent.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mini chart */}
                <div className="p-3 rounded-xl bg-white" style={{ border: "1px solid #f3f4f6" }}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold" style={{ color: "#333" }}>Booking Trend</span>
                    <span className="text-xs" style={{ color: "#10b981" }}>+23% this month</span>
                  </div>
                  <div className="flex items-end gap-1 h-10">
                    {[35, 45, 30, 60, 50, 70, 55, 80, 65, 90, 75, 85].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm"
                        style={{
                          height: `${h}%`,
                          background: i >= 9 ? "#6366f1" : "rgba(99,102,241,0.15)",
                          transition: "height 0.5s ease",
                          transitionDelay: mounted ? `${0.8 + i * 0.05}s` : "0s",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating notification card */}
            <div
              className={`absolute -bottom-6 -left-8 rounded-xl p-3 flex items-center gap-3 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{
                background: "#fff",
                border: "1px solid #e5e7eb",
                boxShadow: "0 16px 40px rgba(0,0,0,0.08)",
                transitionDelay: "0.9s",
              }}
            >
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "rgba(99,102,241,0.08)" }}>
                <Bell className="w-4 h-4" style={{ color: "#6366f1" }} />
              </div>
              <div>
                <div className="text-xs font-semibold" style={{ color: "#111" }}>New booking confirmed</div>
                <div className="text-xs" style={{ color: "#888" }}>Sarah M. → Vogue Summer Campaign</div>
              </div>
            </div>

            {/* Floating stat pill */}
            <div
              className={`absolute -top-4 -right-4 rounded-full px-3.5 py-2 flex items-center gap-2 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"}`}
              style={{
                background: "#fff",
                border: "1px solid #e5e7eb",
                boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                transitionDelay: "1s",
              }}
            >
              <TrendingUp className="w-3.5 h-3.5" style={{ color: "#10b981" }} />
              <span className="text-xs font-bold" style={{ color: "#111" }}>+23%</span>
              <span className="text-xs" style={{ color: "#888" }}>revenue</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-[5]" />
    </section>
  )
}
