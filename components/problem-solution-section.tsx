"use client"

import { X, Check, Globe, Award, Zap, Binary } from "lucide-react"
import { useState } from "react"

const challenges = [
  {
    problem: "Invisible Global Talent",
    solution: "Real-time Discovery in 100+ Regions",
    icon: Globe,
    category: "Reach",
    image: "/feature-scouting.webp",
    hoverImage: "/talent-agency.jpg"
  },
  {
    problem: "Exploitive Sponsorship Deals",
    solution: "Transparent Brand-Direct Collaborations",
    icon: Award,
    category: "Trust",
    image: "/feature-sponsorship.jpg",
    hoverImage: "/feature-security.jpg"
  },
  {
    problem: "Manual Bureaucracy",
    solution: "Instant Multi-Currency Payouts",
    icon: Zap,
    category: "Velocity",
    image: "/feature-subscription.jpg",
    hoverImage: "/feature-agency-control.jpg"
  },
  {
    problem: "Siloed Data Ecosystems",
    solution: "360° Intelligent Agency Analytics",
    icon: Binary,
    category: "Intelligence",
    image: "/feature-judging.jpg",
    hoverImage: "/eature-pageants.jpg"
  },
]

export function ProblemSolutionSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="relative overflow-hidden bg-black z-10 py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          src="/background-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale contrast-125 transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black z-0" />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
      </div>

      <div className="relative mx-auto max-w-7xl z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-[10px] font-bebas uppercase tracking-[0.5em] text-montra-red mb-3">
            Solving Real Challenges
          </p>
          <h2 className="font-bebas text-4xl font-bold text-white sm:text-5xl lg:text-6xl uppercase tracking-normal">
            Bridging the gap to <br />
            <span className="text-white/30 italic font-light">Unified Excellence</span>
          </h2>
          <p className="mt-4 text-sm lg:text-base text-gray-500 max-w-xl mx-auto leading-relaxed font-light opacity-80">
            From fragmented management to a single, high-performance ecosystem.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 lg:px-0">
          {challenges.map((item, index) => {
            const isHovered = hoveredIndex === index
            
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`
                  relative h-[450px] overflow-hidden
                  bg-black/40 backdrop-blur-sm
                  transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                  cursor-pointer group border-2
                  ${isHovered 
                    ? 'rounded-full border-montra-red/50 shadow-[0_0_40px_rgba(239,68,68,0.3)] scale-105 z-20' 
                    : 'rounded-lg border-white/10'
                  }
                `}
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  {/* Default Image */}
                  <div className={`absolute inset-0 transition-opacity duration-700 ${
                    isHovered ? 'opacity-0' : 'opacity-100'
                  }`}>
                    <img
                      src={item.image}
                      alt={item.category}
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                  {/* Hover Image */}
                  <div className={`absolute inset-0 transition-opacity duration-700 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <img
                      src={item.hoverImage}
                      alt={item.category}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
                </div>

                {/* Icon Watermark */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-10">
                  <item.icon
                    className={`w-48 h-48 text-white/5 stroke-[0.3] transition-all duration-1000 ${
                      isHovered ? 'scale-125 rotate-12 text-montra-red/10' : 'scale-100 rotate-0'
                    }`}
                  />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
                  {/* Top: Number & Category */}
                  <div className="flex justify-between items-start">
                    <span className={`font-bebas text-2xl transition-colors duration-500 ${
                      isHovered ? 'text-montra-red' : 'text-white/20'
                    }`}>
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <div className={`px-3 py-1 rounded-full backdrop-blur-md transition-all duration-500 ${
                      isHovered 
                        ? 'bg-montra-red/20 border border-montra-red/40' 
                        : 'bg-white/5 border border-white/10'
                    }`}>
                      <span className={`text-[9px] uppercase font-bebas tracking-[0.3em] transition-colors duration-500 ${
                        isHovered ? 'text-montra-red' : 'text-white/60'
                      }`}>
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Bottom: Content */}
                  <div className="space-y-4">
                    {/* Problem - Shows on hover */}
                    <div className={`space-y-2 transition-all duration-500 ${
                      isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>
                      <div className="flex items-center gap-2">
                        <X className="w-3 h-3 text-red-500" />
                      </div>
                      <p className="text-gray-400 text-xs font-light tracking-wide line-through decoration-red-500/40">
                        {item.problem}
                      </p>
                    </div>

                    {/* Solution - Always visible */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Check className={`w-4 h-4 transition-all duration-500 ${
                          isHovered 
                            ? 'text-green-500 shadow-[0_0_20px_rgba(34,197,94,0.5)]' 
                            : 'text-green-500/60'
                        }`} />
                      </div>
                      <h3 className={`font-bebas text-2xl text-white uppercase tracking-wide leading-tight transition-all duration-500 ${
                        isHovered ? 'scale-105 text-shadow-lg' : 'scale-100'
                      }`}>
                        {item.solution}
                      </h3>
                    </div>

                    {/* Icon Display */}
                    <div className={`flex items-center justify-center transition-all duration-700 ${
                      isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>
                      <div className="p-3 rounded-full bg-montra-red/10 border border-montra-red/30">
                        <item.icon className="w-6 h-6 text-montra-red" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-20 text-center">
          <p className="font-bebas text-[10px] text-gray-700 tracking-[0.6em] uppercase opacity-40">
            Engineered for <span className="text-white">Seamless Excellence</span>
          </p>
        </div>
      </div>
    </section>
  )
}
