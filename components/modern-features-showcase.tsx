"use client";

import { useState } from "react";
import { useAuthModal } from "@/components/auth-modal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Info, Play } from "lucide-react";

export function ModernFeaturesShowcase() {
  const { openAuth } = useAuthModal();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,212,170,0.03),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(124,106,247,0.03),transparent_40%)]" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Hero Text Section */}
        <div className="mb-16">
          <h1 className="text-[clamp(3rem,8vw,5.5rem)] font-bold leading-[1.1] tracking-tight mb-4">
            <span className="text-white block">The features you need,</span>
            <span className="text-gray-600 block">the simplicity you want</span>
          </h1>
        </div>

        {/* Left Sidebar Navigation */}
        <div className="flex gap-12">
          <div className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24 space-y-2">
              {[
                "Portfolio Builder",
                "Media Lab",
                "Audition Coach",
                "Applications",
                "AI Generation"
              ].map((item, idx) => (
                <button
                  key={item}
                  className={`w-full text-left px-6 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                    idx === 0
                      ? "bg-white/10 text-white"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 space-y-32">
            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 - Casting Bio */}
              <div
                onMouseEnter={() => setHoveredCard("casting")}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative rounded-3xl overflow-hidden bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-all duration-500"
              >
                <div className="relative h-[400px] overflow-hidden">
                  <video
                    src="https://assets.mixkit.co/videos/52270/52270-1080.mp4"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    autoPlay loop muted playsInline
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Floating Action Buttons */}
                  <div className="absolute top-6 right-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-black/80 transition-colors">
                      <Info className="w-5 h-5 text-white" />
                    </button>
                  </div>

                  {/* Try It Button */}
                  <div className="absolute bottom-6 left-6">
                    <Button className="bg-black/80 backdrop-blur-md hover:bg-black text-white rounded-full px-6 py-3 font-medium border border-white/20 transition-all duration-300 group-hover:scale-105 shadow-xl">
                      Try it
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-6 bg-gradient-to-br from-red-500 to-orange-500">
                  <h3 className="text-white text-xl font-semibold">
                    Generate your casting bio
                  </h3>
                </div>
              </div>

              {/* Card 2 - Resume Builder */}
              <div
                onMouseEnter={() => setHoveredCard("resume")}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative rounded-3xl overflow-hidden bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-all duration-500"
              >
                <div className="relative h-[400px] overflow-hidden">
                  <video
                    src="https://assets.mixkit.co/videos/42648/42648-1080.mp4"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    autoPlay loop muted playsInline
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute top-6 right-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-black/80 transition-colors">
                      <Info className="w-5 h-5 text-white" />
                    </button>
                  </div>

                  <div className="absolute bottom-6 left-6">
                    <Button className="bg-black/80 backdrop-blur-md hover:bg-black text-white rounded-full px-6 py-3 font-medium border border-white/20 transition-all duration-300 group-hover:scale-105 shadow-xl">
                      Try it
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-emerald-500 to-teal-500">
                  <h3 className="text-white text-xl font-semibold">
                    AI Resume & CV builder
                  </h3>
                </div>
              </div>
            </div>

            {/* Image to Video Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: Video/Image */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <div className="relative h-[500px]">
                  <video
                    src="https://assets.mixkit.co/videos/19639/19639-720.mp4"
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  
                  {/* Floating indicators */}
                  <div className="absolute bottom-6 left-6 flex gap-2">
                    {["P1", "P2", "P3", "P4", "P5"].map((label, idx) => (
                      <div
                        key={label}
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                          idx === 2
                            ? "bg-orange-500 text-white border-2 border-white"
                            : "bg-black/60 text-white/80 border border-white/20"
                        }`}
                      >
                        {label}
                      </div>
                    ))}
                  </div>

                  {/* Generate Button */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-2xl shadow-purple-500/50 transition-all duration-300 hover:scale-105">
                      <Play className="w-6 h-6 mr-2" />
                      Generate
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right: Content */}
              <div className="space-y-8">
                <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-bold text-white leading-[1.1]">
                  Convert Images to Dynamic Videos
                </h2>

                <div className="space-y-6 text-gray-200 text-lg leading-relaxed">
                  <p>
                    Multi Talent Agency's{" "}
                    <button
                      onClick={() => openAuth()}
                      className="text-[#00d4aa] hover:text-[#00ffcc] underline decoration-[#00d4aa]/30 hover:decoration-[#00d4aa] transition-colors font-medium"
                    >
                      image to video generator
                    </button>
                    {" "}allows you to breathe life into your static photos. By uploading an image and providing a short prompt, our AI video maker will generate a dynamic video that brings movement and emotion to your still image in minutes. No video editing experience is needed, get professional-looking videos and{" "}
                    <button
                      onClick={() => openAuth()}
                      className="text-[#00d4aa] hover:text-[#00ffcc] underline decoration-[#00d4aa]/30 hover:decoration-[#00d4aa] transition-colors font-medium"
                    >
                      GIFs from images
                    </button>
                    {" "}with ease.
                  </p>
                </div>

                <Button className="bg-[#7c6af7] hover:bg-[#6a58e5] text-white rounded-full px-10 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-xl shadow-purple-500/30">
                  Create AI Video Now
                </Button>
              </div>
            </div>

            {/* Additional Content Sections can be added here */}
          </div>
        </div>
      </div>
    </section>
  );
}
