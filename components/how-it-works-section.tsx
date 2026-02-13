"use client"

import {
  Upload,
  UserCheck,
  Sparkles,
  Search,
  Trophy,
  Star,
  Wallet,
} from "lucide-react"

const steps = [
  {
    icon: Upload,
    title: "Talent Onboards",
    description: "Self-register with ID proof & portfolio upload, AI verifies basics automatically",
  },
  {
    icon: UserCheck,
    title: "Agency Reviews",
    description: "Agency reviews application and approves talent to their roster with one click",
  },
  {
    icon: Sparkles,
    title: "AI Enhancement",
    description: "Talent uses AI tools to perfect, enhance, and organize their portfolio",
  },
  {
    icon: Search,
    title: "Scout & Match",
    description: "Agency scouts, invites, or AI-matches talent to relevant opportunities",
  },
  {
    icon: Trophy,
    title: "Create Events",
    description: "Agency creates branded pageant or show, talents register and compete",
  },
  {
    icon: Star,
    title: "Judge & Score",
    description: "Judges assign marks, results are calculated, winners notified",
  },
  {
    icon: Wallet,
    title: "Sponsor & Payout",
    description: "Sponsors fund events, agencies manage deals and process payouts",
  },
]

export function HowItWorksSection() {
  return (
    <section className="relative overflow-hidden bg-black z-10 py-24">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          src="/creative.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <p className="text-sm font-bebas uppercase tracking-widest text-montra-red">
            The Journey
          </p>
          <h2 className="mt-4 font-bebas text-4xl sm:text-5xl lg:text-6xl font-bold text-white uppercase tracking-normal text-balance">
            WHERE EXPERTISE <br />
            MEETS <span className="text-white/40 italic">INNOVATION</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 font-light">
            From Onboarding to Stardom – Seamless Flow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {steps.slice(0, 5).map((step, index) => (
            <div
              key={index}
              className={`group relative h-80 bg-[#0a0a0a] border border-white/10 overflow-hidden transition-all duration-500 hover:border-white/20 ${index < 2 ? 'md:col-span-3' : 'md:col-span-2'
                }`}
            >
              {/* 3D Icon Watermark */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <step.icon
                  className={`w-48 h-48 text-zinc-800/20 stroke-[0.5] transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12 ${index % 2 === 0 ? 'translate-x-12' : '-translate-x-12'
                    }`}
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

              {/* Content Integration */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                {/* Top: Number */}
                <span className="font-bebas text-2xl text-white/20 group-hover:text-[#ccff00] transition-colors duration-500">
                  {(index + 1).toString().padStart(2, '0')}
                </span>

                {/* Bottom: Text */}
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-bebas text-3xl md:text-4xl text-white uppercase tracking-wide mb-3 group-hover:text-[#ccff00] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-light leading-relaxed max-w-[90%] opacity-80 group-hover:opacity-100 transition-opacity">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
