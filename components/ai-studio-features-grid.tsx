"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Info } from "lucide-react";
import { useAuthModal } from "@/components/auth-modal";

interface FeatureCard {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  color: string;
}

const features: FeatureCard[] = [
  {
    id: "portfolio",
    title: "Portfolio Builder",
    description: "Create stunning portfolios that showcase your talent",
    image: "https://assets.mixkit.co/videos/34423/34423-720.mp4",
    category: "Portfolio Builder",
    color: "from-cyan-500 to-blue-500"
  },
  {
    id: "casting-bio",
    title: "Generate your casting bio",
    description: "AI-powered casting profiles that get you noticed",
    image: "https://assets.mixkit.co/videos/52270/52270-1080.mp4",
    category: "Media Lab",
    color: "from-red-500 to-orange-500"
  },
  {
    id: "resume",
    title: "AI Resume & CV builder",
    description: "Professional resumes tailored to your industry",
    image: "https://assets.mixkit.co/videos/42648/42648-1080.mp4",
    category: "Audition Coach",
    color: "from-emerald-500 to-teal-500"
  },
  {
    id: "video-gen",
    title: "AI Video Generation",
    description: "Transform ideas into professional videos instantly",
    image: "https://assets.mixkit.co/videos/32960/32960-720.mp4",
    category: "Applications",
    color: "from-purple-500 to-pink-500"
  }
];

export function AIStudioFeaturesGrid() {
  const [activeCategory, setActiveCategory] = useState("Portfolio Builder");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const { openAuth } = useAuthModal();

  const categories = ["Portfolio Builder", "Media Lab", "Audition Coach", "Applications", "AI Generation"];

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,212,170,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(124,106,247,0.04),transparent_50%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-white">The features you need,</span>
            <br />
            <span className="text-gray-300">the simplicity you want</span>
          </h2>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              data-testid={`btn-category-${category.toLowerCase().replace(/\s+/g, "-")}`}
              aria-label={`Filter by ${category}`}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-white/10 text-white border border-white/20"
                  : "bg-transparent text-gray-400 hover:text-white border border-transparent"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {features.map((feature) => (
            <div
              key={feature.id}
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative bg-zinc-900/40 rounded-3xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                {feature.image.endsWith('.mp4') ? (
                  <video
                    src={feature.image}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}
                
                {/* Overlay Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-t ${feature.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                
                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <button
                    data-testid={`btn-info-${feature.id}`}
                    aria-label={`More info about ${feature.title}`}
                    className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-black/80 transition-colors"
                  >
                    <Info className="w-4 h-4 text-white" />
                  </button>
                </div>

                {/* Try It Button */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <Button
                    data-testid={`btn-try-${feature.id}`}
                    aria-label={`Try ${feature.title}`}
                    className="bg-black/80 backdrop-blur-md hover:bg-black text-white rounded-full px-6 py-2 text-sm font-medium border border-white/10 transition-all duration-300 group-hover:scale-105"
                  >
                    Try it
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className={`p-6 bg-gradient-to-br ${feature.color} transition-all duration-500`}>
                <h3 className="text-white text-xl font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/80 text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-32">
          {/* Left: Image */}
          <div className="relative rounded-3xl overflow-hidden border border-white/10 h-[500px]">
            <video
              src="https://assets.mixkit.co/videos/32960/32960-720.mp4"
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Convert Images to Dynamic Videos
            </h3>
            
            <div className="space-y-4 text-gray-200 text-lg leading-relaxed">
              <p>
                Create stunning and professional videos effortlessly with{" "}
                <button onClick={() => openAuth()} data-testid="btn-cta-multi-talent-agency" aria-label="Sign up for Multi Talent Agency" className="text-[#00d4aa] hover:underline font-medium">
                  Multi Talent Agency
                </button>
                's free AI video generator. Transform your creative visions into video content in minutes.
              </p>
              
              <p>
                Multi Talent Agency's{" "}
                <button onClick={() => openAuth()} data-testid="btn-cta-image-to-video" aria-label="Try image to video generator" className="text-[#00d4aa] hover:underline font-medium">
                  image to video generator
                </button>
                {" "}allows you to breathe life into your static photos. By uploading an image and providing a short prompt, our AI video maker will generate a dynamic video that brings movement and emotion to your still image in minutes. No video editing experience is needed, get professional-looking videos and{" "}
                <button onClick={() => openAuth()} data-testid="btn-cta-gifs-from-images" aria-label="Create GIFs from images" className="text-[#00d4aa] hover:underline font-medium">
                  GIFs from images
                </button>
                {" "}with ease.
              </p>
            </div>

            <Button data-testid="btn-create-ai-video" aria-label="Create AI Video Now" className="bg-[#7c6af7] hover:bg-[#6a58e5] text-white rounded-full px-8 py-6 text-base font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25">
              Create AI Video Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
