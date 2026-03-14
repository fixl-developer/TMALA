"use client"

import React from "react"
import { Sparkles, Scan, Camera, Star } from "lucide-react"

const photos = [
  { src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=500&fit=crop", h: 320, label: "Fashion", score: 96 },
  { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop", h: 400, label: "Editorial", score: 98 },
  { src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&h=600&fit=crop", h: 420, label: "Beauty", score: 94 },
  { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop", h: 340, label: "Portrait", score: 91 },
  { src: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=400&h=500&fit=crop", h: 360, label: "Lifestyle", score: 89 },
  { src: "https://images.unsplash.com/photo-1496440737103-cd596325d314?w=400&h=600&fit=crop", h: 400, label: "Creative", score: 95 },
  { src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop", h: 280, label: "Commercial", score: 92 },
  { src: "https://images.unsplash.com/photo-1615109398623-88346a601842?w=400&h=500&fit=crop", h: 340, label: "Runway", score: 97 },
  { src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=450&fit=crop", h: 300, label: "Headshot", score: 93 },
  { src: "https://images.unsplash.com/photo-1545912452-8aea7e25a3d3?w=400&h=550&fit=crop", h: 380, label: "Glamour", score: 96 },
  { src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=500&fit=crop", h: 350, label: "Street", score: 90 },
  { src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=550&fit=crop", h: 390, label: "High Fashion", score: 99 },
  { src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=450&fit=crop", h: 310, label: "Classic", score: 88 },
  { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop", h: 290, label: "Natural", score: 94 },
  { src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=500&fit=crop", h: 360, label: "Casual", score: 87 },
]

export function AIStudioPhotoGallery() {
  return (
    <section id="image" className="py-16 px-4 sm:px-8" style={{ background: "#0a0a0a" }}>
      {/* Scan animation keyframes */}
      <style>{`
        @keyframes scanLine {
          0% { top: -2px; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: calc(100% + 2px); opacity: 0; }
        }
        @keyframes scanPulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        @keyframes cornerFlash {
          0% { opacity: 0; transform: scale(0.8); }
          30% { opacity: 1; transform: scale(1); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes scoreReveal {
          0% { opacity: 0; transform: translateY(8px) scale(0.9); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes tagSlide {
          0% { opacity: 0; transform: translateX(-10px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes gridPulse {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.15; }
        }
        .photo-card:hover .scan-line {
          animation: scanLine 1.2s ease-in-out forwards;
        }
        .photo-card:hover .scan-overlay {
          opacity: 1;
        }
        .photo-card:hover .scan-corners {
          animation: cornerFlash 0.4s ease-out forwards;
        }
        .photo-card:hover .scan-score {
          animation: scoreReveal 0.5s ease-out 0.6s forwards;
        }
        .photo-card:hover .scan-tag {
          animation: tagSlide 0.4s ease-out 0.3s forwards;
        }
        .photo-card:hover .scan-grid {
          animation: gridPulse 1.5s ease-in-out infinite;
        }
        .photo-card:hover .scan-glow {
          opacity: 1;
        }
      `}</style>

      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="mb-10 flex items-end justify-between flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "#c8ff00" }}>
                <Camera className="w-4 h-4 text-black" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/50">AI Photo Analysis</span>
            </div>
            <h2 className="font-bebas text-3xl sm:text-5xl uppercase tracking-[0.08em] text-white mb-2">
              AI Studio Soul 2.0
            </h2>
            <p className="text-sm text-white/70 max-w-md">
              A culture-native photo model built for fashion, aesthetics, and creative expression. Hover to scan.
            </p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5">
            <Scan className="w-4 h-4" style={{ color: "#c8ff00" }} />
            <span className="text-[12px] text-white/70 font-medium">Hover to AI Scan</span>
          </div>
        </div>

        {/* Masonry grid */}
        <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-3">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="photo-card relative mb-3 rounded-xl overflow-hidden cursor-pointer break-inside-avoid"
              style={{ height: photo.h, background: "#1a1a1a" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.label}
                loading={i < 5 ? "eager" : "lazy"}
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ display: "block" }}
              />

              {/* === SCAN HOVER EFFECTS === */}

              {/* Dark overlay with green tint on hover */}
              <div
                className="scan-overlay absolute inset-0 transition-opacity duration-300 pointer-events-none"
                style={{ opacity: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(10,30,10,0.5) 50%, rgba(0,0,0,0.3) 100%)" }}
              />

              {/* Scanning grid overlay */}
              <div
                className="scan-grid absolute inset-0 pointer-events-none"
                style={{
                  opacity: 0,
                  backgroundImage: "linear-gradient(rgba(200,255,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(200,255,0,0.08) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />

              {/* Green scan line */}
              <div
                className="scan-line absolute left-0 right-0 pointer-events-none"
                style={{
                  top: "-2px",
                  height: "2px",
                  background: "#c8ff00",
                  boxShadow: "0 0 15px 4px rgba(200,255,0,0.5), 0 0 40px 8px rgba(200,255,0,0.2)",
                  opacity: 0,
                }}
              />

              {/* Scan border glow */}
              <div
                className="scan-glow absolute inset-0 pointer-events-none rounded-xl transition-opacity duration-500"
                style={{
                  opacity: 0,
                  boxShadow: "inset 0 0 0 1.5px rgba(200,255,0,0.4), inset 0 0 20px rgba(200,255,0,0.08)",
                }}
              />

              {/* Corner brackets */}
              <div className="scan-corners absolute inset-0 pointer-events-none" style={{ opacity: 0 }}>
                {/* Top-left */}
                <div className="absolute top-2 left-2 w-5 h-5" style={{ borderLeft: "2px solid #c8ff00", borderTop: "2px solid #c8ff00" }} />
                {/* Top-right */}
                <div className="absolute top-2 right-2 w-5 h-5" style={{ borderRight: "2px solid #c8ff00", borderTop: "2px solid #c8ff00" }} />
                {/* Bottom-left */}
                <div className="absolute bottom-2 left-2 w-5 h-5" style={{ borderLeft: "2px solid #c8ff00", borderBottom: "2px solid #c8ff00" }} />
                {/* Bottom-right */}
                <div className="absolute bottom-2 right-2 w-5 h-5" style={{ borderRight: "2px solid #c8ff00", borderBottom: "2px solid #c8ff00" }} />
              </div>

              {/* AI Score badge (reveals after scan) */}
              <div
                className="scan-score absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg pointer-events-none"
                style={{
                  opacity: 0,
                  background: "rgba(0,0,0,0.7)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(200,255,0,0.3)",
                }}
              >
                <Sparkles className="w-3 h-3" style={{ color: "#c8ff00" }} />
                <span className="text-[12px] font-bold" style={{ color: "#c8ff00" }}>{photo.score}</span>
              </div>

              {/* Category tag (slides in on hover) */}
              <div
                className="scan-tag absolute bottom-3 left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg pointer-events-none"
                style={{
                  opacity: 0,
                  background: "rgba(0,0,0,0.7)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <Star className="w-3 h-3 text-white/70" />
                <span className="text-[11px] font-semibold text-white/90">{photo.label}</span>
              </div>

              {/* Static bottom-right badge on some cards (when not hovering) */}
              {i % 4 === 1 && (
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#c8ff00" }} />
                  <span className="text-[10px] text-white/70 font-medium">
                    {[92, 147, 63, 184][Math.floor(i / 4) % 4]}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
