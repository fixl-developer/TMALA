"use client"

import React from "react"
import { useState, useEffect } from "react"

export function HeroSection() {
  const agencyTypes = [
    { name: "Modeling Agencies", color: "text-purple-400" },
    { name: "Talent Agencies", color: "text-pink-400" },
    { name: "Casting Agencies", color: "text-blue-400" },
    { name: "Influencer Agencies", color: "text-green-400" },
    { name: "Photography Agencies", color: "text-yellow-400" },
    { name: "Production Agencies", color: "text-montra-red" },
    { name: "Sports Agencies", color: "text-cyan-400" },
    { name: "Pageant Agencies", color: "text-orange-400" },
    { name: "Brand Agencies", color: "text-indigo-400" },
    { name: "Media Buying Agencies", color: "text-teal-400" },
  ]

  const [currentAgencyIndex, setCurrentAgencyIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAgencyIndex((prev) => (prev + 1) % agencyTypes.length)
    }, 4000) // Changed to 4 seconds for longer display

    return () => clearInterval(interval)
  }, [agencyTypes.length])

  return (
    <section className="relative w-full min-h-[120vh] lg:min-h-[130vh] bg-section-dark sticky top-0 z-0">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/background-video.mp4" type="video/mp4" />
          {/* Fallback gradient background */}
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-[90vh] flex items-center justify-start pt-32 pb-24">
        {/* Hero Content */}
        <div className="flex flex-col items-start text-left space-y-8 lg:space-y-10 w-full max-w-4xl">
          <div className="space-y-6 lg:space-y-8 opacity-0 animate-fade-in">
            <p className="text-sm sm:text-base font-bebas uppercase tracking-[0.3em] text-montra-red font-medium">
              EXPERIENCE THE FUTURE OF MANAGEMENT
            </p>

            <h1 className="font-bebas text-4xl font-bold text-white uppercase sm:text-5xl lg:text-6xl mb-6" style={{ letterSpacing: '0.05em' }}>
              Scale Your <span className="text-transparent italic" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.8)' }}>Agency</span>
            </h1>

            <p className="mt-8 max-w-md text-lg text-gray-300 lg:text-xl leading-loose font-light">
              Transform complex agency management into seamless digital growth. Connect with top talent, streamline operations, and unlock opportunities that elevate your business with our comprehensive platform designed specifically for modern agencies.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 opacity-0 animate-fade-in animation-delay-400">
            <button className="px-10 py-5 bg-gradient-to-r from-purple-600 to-indigo-700 text-white font-bebas uppercase tracking-widest rounded-lg hover:scale-105 transition-all duration-300 shadow-xl text-lg shadow-purple-500/20">
              Get Started
            </button>
            <button className="px-10 py-5 border border-white/20 text-white font-bebas uppercase tracking-widest rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-md text-lg">
              Watch Demo
            </button>
          </div>
        </div>
      </div>

    </section>
  )
}
