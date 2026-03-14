"use client"

import React, { useRef, useCallback } from "react"
import { Play, Heart, Film, Sparkles } from "lucide-react"

const videos = [
  {
    thumb: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop",
    video: "https://assets.mixkit.co/videos/1529/1529-720.mp4",
    h: 320, user: "runway_pro", label: "Runway Walk", dur: "0:06",
  },
  {
    thumb: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=600&fit=crop",
    video: "https://assets.mixkit.co/videos/34487/34487-720.mp4",
    h: 400, label: "Fashion Show", dur: "0:12",
  },
  {
    thumb: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=500&fit=crop",
    video: "https://assets.mixkit.co/videos/42741/42741-720.mp4",
    h: 360, label: "Casting Call", dur: "0:08",
  },
  {
    thumb: "https://images.unsplash.com/photo-1504270997636-07ddfbd48945?w=400&h=400&fit=crop",
    video: "https://assets.mixkit.co/videos/34563/34563-720.mp4",
    h: 280, user: "ai_cinema", likes: 322, label: "Self-Tape", dur: "0:15",
  },
  {
    thumb: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=550&fit=crop",
    video: "https://assets.mixkit.co/videos/32809/32809-720.mp4",
    h: 380, label: "Backstage", dur: "0:10",
  },
  {
    thumb: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&h=400&fit=crop",
    video: "https://assets.mixkit.co/videos/4815/4815-720.mp4",
    h: 260, label: "Commercial", dur: "0:06",
  },
  {
    thumb: "https://images.unsplash.com/photo-1496440737103-cd596325d314?w=400&h=500&fit=crop",
    video: "https://assets.mixkit.co/videos/39887/39887-720.mp4",
    h: 340, user: "talent_ai", label: "Portrait Reel", dur: "0:20",
  },
  {
    thumb: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=400&h=450&fit=crop",
    video: "https://assets.mixkit.co/videos/34568/34568-720.mp4",
    h: 300, likes: 184, label: "Dance Reel", dur: "0:09",
  },
  {
    thumb: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&h=600&fit=crop",
    video: "https://assets.mixkit.co/videos/34473/34473-720.mp4",
    h: 420, label: "High Fashion", dur: "0:14",
  },
  {
    thumb: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    video: "https://assets.mixkit.co/videos/41648/41648-720.mp4",
    h: 260, user: "studio_elite", label: "Headshot", dur: "0:06",
  },
  {
    thumb: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=400&h=500&fit=crop",
    video: "https://assets.mixkit.co/videos/34477/34477-720.mp4",
    h: 340, label: "Editorial", dur: "0:11",
  },
  {
    thumb: "https://images.unsplash.com/photo-1581044777550-4cfa60707998?w=400&h=350&fit=crop",
    video: "https://assets.mixkit.co/videos/13800/13800-720.mp4",
    h: 240, likes: 156, label: "BTS Shoot", dur: "0:08",
  },
  {
    thumb: "https://images.unsplash.com/photo-1536766768598-e09213fdcf22?w=400&h=550&fit=crop",
    video: "https://assets.mixkit.co/videos/42746/42746-720.mp4",
    h: 380, label: "Showreel", dur: "0:18",
  },
  {
    thumb: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400&h=400&fit=crop",
    video: "https://assets.mixkit.co/videos/34551/34551-720.mp4",
    h: 280, user: "young_creator", label: "UGC Reel", dur: "0:07",
  },
  {
    thumb: "https://images.unsplash.com/photo-1506634572416-48cdfe530110?w=400&h=500&fit=crop",
    video: "https://assets.mixkit.co/videos/34486/34486-720.mp4",
    h: 340, label: "Pageant Walk", dur: "0:12",
  },
]

function VideoCard({ video, index }: { video: typeof videos[0]; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = useCallback(() => {
    const v = videoRef.current
    if (v) {
      v.currentTime = 0
      v.play().catch(() => {})
    }
  }, [])

  const handleMouseLeave = useCallback(() => {
    const v = videoRef.current
    if (v) {
      v.pause()
      v.currentTime = 0
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className="video-card relative mb-3 rounded-xl overflow-hidden cursor-pointer break-inside-avoid group"
      style={{ height: video.h }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Thumbnail image (visible by default, hides on hover) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={video.thumb}
        alt={video.label}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0 z-[1]"
      />

      {/* Actual video (plays on hover) */}
      <video
        ref={videoRef}
        src={video.video}
        muted
        loop
        playsInline
        preload="none"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Scan overlay on hover */}
      <div
        className="absolute inset-0 pointer-events-none z-[2] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(10,20,10,0.3) 50%, rgba(0,0,0,0.15) 100%)" }}
      />

      {/* Scan line */}
      <div
        className="video-scan-line absolute left-0 right-0 pointer-events-none z-[3]"
        style={{
          top: "-2px",
          height: "2px",
          background: "#c8ff00",
          boxShadow: "0 0 12px 3px rgba(200,255,0,0.5), 0 0 30px 6px rgba(200,255,0,0.15)",
          opacity: 0,
        }}
      />

      {/* Corner brackets on hover */}
      <div className="absolute top-2.5 left-2.5 w-4 h-4 pointer-events-none z-[3] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" style={{ borderLeft: "2px solid #c8ff00", borderTop: "2px solid #c8ff00" }} />
      <div className="absolute top-2.5 right-2.5 w-4 h-4 pointer-events-none z-[3] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" style={{ borderRight: "2px solid #c8ff00", borderTop: "2px solid #c8ff00" }} />
      <div className="absolute bottom-2.5 left-2.5 w-4 h-4 pointer-events-none z-[3] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" style={{ borderLeft: "2px solid #c8ff00", borderBottom: "2px solid #c8ff00" }} />
      <div className="absolute bottom-2.5 right-2.5 w-4 h-4 pointer-events-none z-[3] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" style={{ borderRight: "2px solid #c8ff00", borderBottom: "2px solid #c8ff00" }} />

      {/* Border glow */}
      <div
        className="absolute inset-0 rounded-xl pointer-events-none z-[3] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ boxShadow: "inset 0 0 0 1.5px rgba(200,255,0,0.35)" }}
      />

      {/* Play button - turns green on hover */}
      <div className="absolute top-3 left-3 z-[4]">
        <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/10 transition-all duration-300 group-hover:bg-[#c8ff00] group-hover:border-[#c8ff00] group-hover:shadow-[0_0_12px_rgba(200,255,0,0.4)]">
          <Play className="w-3.5 h-3.5 text-white fill-white transition-colors duration-300 group-hover:text-black group-hover:fill-black" />
        </div>
      </div>

      {/* LIVE / PLAYING indicator on hover */}
      <div className="absolute top-3 right-3 z-[4] flex items-center gap-1.5 px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"
        style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)", border: "1px solid rgba(200,255,0,0.25)" }}
      >
        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
        <span className="text-[10px] font-mono font-bold text-white/90">PLAYING</span>
      </div>

      {/* Duration badge */}
      <div className="absolute top-3 right-3 z-[3] px-2 py-1 rounded-md group-hover:opacity-0 transition-opacity duration-200"
        style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
      >
        <span className="text-[10px] font-mono font-bold text-white/80">{video.dur}</span>
      </div>

      {/* Label that reveals on hover */}
      <div
        className="absolute bottom-3 left-3 z-[4] flex items-center gap-1.5 px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200 translate-y-2 group-hover:translate-y-0"
        style={{
          background: "rgba(0,0,0,0.7)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(200,255,0,0.2)",
        }}
      >
        <Film className="w-3 h-3" style={{ color: "#c8ff00" }} />
        <span className="text-[11px] font-semibold text-white/90">{video.label}</span>
      </div>

      {/* User badge (always visible, hides on hover for label) */}
      {video.user && (
        <div className="absolute bottom-3 left-3 z-[3] flex items-center gap-2 bg-black/60 backdrop-blur-sm px-2.5 py-1.5 rounded-full group-hover:opacity-0 transition-opacity duration-200">
          <div className="w-4 h-4 rounded-full" style={{ background: "#c8ff00" }} />
          <span className="text-[11px] text-white/80 font-medium">{video.user}</span>
        </div>
      )}

      {/* Likes badge */}
      {video.likes && (
        <div className="absolute bottom-3 right-3 z-[4] flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2 py-1.5 rounded-full">
          <Heart className="w-3 h-3 text-white/60" />
          <span className="text-[10px] text-white/60 font-medium">{video.likes}</span>
        </div>
      )}
    </div>
  )
}

export function AIStudioVideoGallery() {
  return (
    <section id="video" className="py-16 px-4 sm:px-8" style={{ background: "#0a0a0a" }}>
      {/* Scan animation */}
      <style>{`
        @keyframes videoScanLine {
          0% { top: -2px; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: calc(100% + 2px); opacity: 0; }
        }
        .video-card:hover .video-scan-line {
          animation: videoScanLine 1s ease-in-out forwards;
        }
      `}</style>

      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="mb-10 flex items-end justify-between flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "#c8ff00" }}>
                <Film className="w-4 h-4 text-black" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/50">AI Video Generation</span>
            </div>
            <h2 className="font-bebas text-3xl sm:text-5xl uppercase tracking-[0.08em] text-white mb-2">
              Cinema Studio Reels
            </h2>
            <p className="text-sm text-white/70 max-w-md">
              AI-powered showreels, self-tapes, and campaign videos. Hover to preview.
            </p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5">
            <Sparkles className="w-4 h-4" style={{ color: "#c8ff00" }} />
            <span className="text-[12px] text-white/70 font-medium">Hover to Play</span>
          </div>
        </div>

        {/* Masonry grid */}
        <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-3">
          {videos.map((video, i) => (
            <VideoCard key={i} video={video} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
