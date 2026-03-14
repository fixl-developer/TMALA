"use client"

import React from "react"
import { ArrowUpRight } from "lucide-react"
import { useAuthModal } from "@/components/auth-modal"

const gridVideos = [
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=260&fit=crop",
  "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=260&fit=crop",
  "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=400&h=260&fit=crop",
  "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=260&fit=crop",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=260&fit=crop",
  "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400&h=260&fit=crop",
  "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=260&fit=crop",
  "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=400&h=260&fit=crop",
  "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&h=260&fit=crop",
  "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=260&fit=crop",
  "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=260&fit=crop",
  "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&h=260&fit=crop",
]

export function AIStudioExclusiveSection() {
  const { openAuth } = useAuthModal()
  return (
    <section id="cinema" className="py-4 px-4 sm:px-8" style={{ background: "#0a0a0a" }}>
      <div
        className="max-w-[1440px] mx-auto rounded-3xl overflow-hidden p-8 sm:p-12"
        style={{
          background: "linear-gradient(135deg, #0a0a0a 0%, #111 50%, #0a0a0a 100%)",
          border: "1px solid rgba(200,255,0,0.15)",
        }}
      >
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left text */}
          <div className="lg:w-[30%] flex flex-col justify-center">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] mb-4" style={{ color: "#c8ff00" }}>
              Exclusively on AI Studio
            </span>
            <h2 className="font-bebas text-[3rem] sm:text-[4rem] leading-[0.9] text-white mb-4">
              CINEMA
              <br />
              STUDIO
              <br />
              2.0
            </h2>
            <p className="text-sm text-white/50 leading-relaxed mb-8">
              Explore AI Studio community gallery for stunning cinematic creations powered by multi-provider AI.
            </p>
            <button
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-bold transition-all hover:scale-[1.02]"
              style={{ background: "#c8ff00", color: "#000" }}
            >
              Get Exclusive Offer
            </button>
            <button onClick={() => openAuth()} className="mt-4 text-sm font-semibold text-white/70 hover:text-white underline underline-offset-4 transition-colors">
              Explore Cinema Studio 2.0
            </button>
          </div>

          {/* Right grid */}
          <div className="flex-1 grid grid-cols-3 sm:grid-cols-4 gap-2">
            {gridVideos.map((src, i) => (
              <div
                key={i}
                className="relative rounded-xl overflow-hidden group cursor-pointer aspect-[4/3]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
                {/* Last card — View all CTA */}
                {i === gridVideos.length - 1 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full text-[11px] font-bold"
                      style={{ background: "rgba(200,255,0,0.9)", color: "#000" }}
                    >
                      View all <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
