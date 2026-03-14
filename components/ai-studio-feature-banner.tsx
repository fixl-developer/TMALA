"use client"

import React from "react"

const scatteredPhotos = [
  { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=280&h=350&fit=crop", x: "52%", y: "5%", w: 180, rotate: "-4deg" },
  { src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=240&h=300&fit=crop", x: "72%", y: "8%", w: 160, rotate: "6deg" },
  { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=220&h=280&fit=crop", x: "58%", y: "48%", w: 150, rotate: "-2deg" },
  { src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=260&h=320&fit=crop", x: "78%", y: "38%", w: 170, rotate: "3deg" },
  { src: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=200&h=260&fit=crop", x: "48%", y: "55%", w: 140, rotate: "-5deg" },
  { src: "https://images.unsplash.com/photo-1615109398623-88346a601842?w=220&h=280&fit=crop", x: "88%", y: "12%", w: 130, rotate: "8deg" },
]

export function AIStudioFeatureBanner() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#d4d4d4", minHeight: 400 }}
    >
      {/* Left text */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-12 flex items-center" style={{ minHeight: 400 }}>
        <div className="max-w-md">
          <span
            className="inline-block px-3 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider mb-6"
            style={{ background: "#c8ff00", color: "#000" }}
          >
            Photodump
          </span>
          <h2
            className="font-bebas text-[3.5rem] sm:text-[5rem] lg:text-[6rem] leading-[0.9] tracking-tight text-black mb-5"
          >
            DIFFERENT LOOKS
            <br />
            SAME TALENT
          </h2>
          <p className="text-base text-black/60 leading-relaxed">
            Build your character. One click does the rest.
          </p>
        </div>
      </div>

      {/* Scattered photo collage on right */}
      <div className="absolute inset-0 pointer-events-none">
        {scatteredPhotos.map((photo, i) => (
          <div
            key={i}
            className="absolute rounded-xl overflow-hidden shadow-2xl"
            style={{
              left: photo.x,
              top: photo.y,
              width: photo.w,
              height: photo.w * 1.25,
              transform: `rotate(${photo.rotate})`,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photo.src}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
