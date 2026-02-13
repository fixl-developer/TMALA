"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Sparkles,
  Video,
  Wand2,
  Camera,
  Zap,
  TrendingUp,
  Users,
  DollarSign,
  Image,
  Film,
  Mic,
  Palette,
  Rocket,
  Star,
  Clock,
  ArrowRight,
  Mail,
  Play,
  ChevronDown,
  ArrowUpRight
} from "lucide-react"
import { AnimatedText } from "@/components/animated-text"


// --- Original Data ---
const aiFeatures = [
  {
    icon: Video,
    title: "AI Video Generation",
    description: "Transform text prompts into stunning, professional-quality videos in seconds with advanced AI models.",
    status: "Coming Soon",
    category: "Video Creation"
  },
  {
    icon: Wand2,
    title: "Motion Design Studio",
    description: "Create motion-designed videos with cinematic effects, transitions, and professional-grade animations.",
    status: "Coming Soon",
    category: "Design"
  },
  {
    icon: Mic,
    title: "Synchronized Audio",
    description: "Generate videos with perfectly synchronized audio, voiceovers, and background music automatically.",
    status: "Coming Soon",
    category: "Audio"
  },
  {
    icon: Users,
    title: "AI Influencer Creator",
    description: "Build and customize your own AI influencer with unique personality, style, and content preferences.",
    status: "Coming Soon",
    category: "Creator Tools"
  },
  {
    icon: Camera,
    title: "Cinematic Camera Controls",
    description: "AI-powered camera movements including crash zooms, crane shots, dolly moves, and dynamic angles.",
    status: "Coming Soon",
    category: "Video Creation"
  },
  {
    icon: Palette,
    title: "Visual Effects Suite",
    description: "Big-budget visual effects from explosions to surreal transformations, all powered by AI.",
    status: "Coming Soon",
    category: "Effects"
  },
  {
    icon: TrendingUp,
    title: "Viral Content Generator",
    description: "Create trending content optimized for social media engagement and maximum reach.",
    status: "Coming Soon",
    category: "Social Media"
  },
  {
    icon: Film,
    title: "Multi-Shot Video Production",
    description: "Generate professional multi-shot sequences with seamless transitions and storytelling flow.",
    status: "Coming Soon",
    category: "Video Creation"
  },
  {
    icon: Image,
    title: "High-Aesthetic Photo Model",
    description: "Create stunning, high-resolution images with advanced aesthetic controls and styling options.",
    status: "Coming Soon",
    category: "Image Generation"
  },
  {
    icon: Zap,
    title: "One-Click Content Apps",
    description: "Ready-to-share content in one click - from viral effects to polished commercials, no editing needed.",
    status: "Coming Soon",
    category: "Automation"
  },
  {
    icon: DollarSign,
    title: "Creator Monetization",
    description: "Earn money by creating and sharing AI-generated content on social media platforms.",
    status: "Coming Soon",
    category: "Monetization"
  },
  {
    icon: Star,
    title: "UGC Content Creator",
    description: "Generate organic, creator-style videos that resonate with viewers and feel authentic.",
    status: "Coming Soon",
    category: "Content"
  }
]

const categories = ["All", "Video Creation", "Design", "Audio", "Creator Tools", "Effects", "Social Media", "Image Generation", "Automation", "Monetization", "Content"]

// --- New Components ---



export default function AIFeaturesPage() {
  const [showStudio, setShowStudio] = useState(false)
  const [email, setEmail] = useState("")
  const [activeStep, setActiveStep] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [isHoveringSection, setIsHoveringSection] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [smoothMousePos, setSmoothMousePos] = useState({ x: 0, y: 0 })

  const sectionRef = React.useRef<HTMLElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }

  // Smooth follow for the outer circle
  useEffect(() => {
    if (!isHoveringSection) return;

    let animationFrameId: number;
    const followMouse = () => {
      setSmoothMousePos(prev => ({
        x: prev.x + (mousePos.x - prev.x) * 0.15,
        y: prev.y + (mousePos.y - prev.y) * 0.15
      }));
      animationFrameId = requestAnimationFrame(followMouse);
    };

    animationFrameId = requestAnimationFrame(followMouse);
    return () => cancelAnimationFrame(animationFrameId);
  }, [mousePos, isHoveringSection]);

  useEffect(() => {
    const timer = setTimeout(() => setShowStudio(true), 2500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id.startsWith('step-')) {
            const stepIndex = parseInt(id.replace('step-', ''));
            setActiveStep(stepIndex);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe snap points
    for (let i = 0; i < 3; i++) {
      const el = document.getElementById(`step-${i}`);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const nextSectionRef = React.useRef<HTMLElement>(null)

  const scrollToNext = () => {
    // Simply scroll down by one viewport height slowly
    const startPosition = window.pageYOffset;
    const targetPosition = startPosition + window.innerHeight;
    const distance = targetPosition - startPosition;
    const duration = 2000; // 2 seconds
    let start: number | null = null;

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);

      // Easing function
      const ease = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(0, startPosition + (distance * ease));

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  }

  const steps = [
    {
      title: "IMAGINE",
      desc: "Input your requirements and reference photos. Our AI captures the essence of your creative vision.",
      icon: Sparkles,
      color: "from-neon-green to-neon-green-dark",
      accent: "text-neon-green",
      type: "image",
      visual: "/imagine-step.jpg"
    },
    {
      title: "GENERATE",
      desc: "Neural networks construct the temporal layers, adding physics-based motion and digital skin textures.",
      icon: Zap,
      color: "from-neon-green to-neon-green-dark",
      accent: "text-neon-green",
      type: "video",
      visual: "/generate-step.mp4"
    },
    {
      title: "RESULT",
      desc: "The final virtual actor is rendered into a cinematic sequence, ready for your professional production.",
      icon: Film,
      color: "from-neon-green to-neon-green-dark",
      accent: "text-neon-green",
      type: "video",
      visual: "/result-step.mp4"
    }
  ]

  const filteredFeatures = selectedCategory === "All"
    ? aiFeatures
    : aiFeatures.filter(feature => feature.category === selectedCategory)

  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden" style={{ caretColor: '#00ff00' }}>

      {/* Custom Cursor Circles */}
      {isHoveringSection && (
        <>
          <div
            className="fixed top-0 left-0 w-8 h-8 bg-neon-green/30 rounded-full pointer-events-none z-[9999] mix-blend-screen transition-opacity duration-300"
            style={{
              transform: `translate3d(${smoothMousePos.x}px, ${smoothMousePos.y}px, 0) translate(-50%, -50%)`,
            }}
          />
          <div
            className="fixed top-0 left-0 w-2 h-2 bg-neon-green rounded-full pointer-events-none z-[9999] transition-opacity duration-300 shadow-[0_0_15px_#00ff00]"
            style={{
              transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0) translate(-50%, -50%)`,
            }}
          />
        </>
      )}

      {/* Split Hero Section */}
      <section className="relative min-h-[85vh] lg:min-h-[750px] flex flex-col lg:flex-row bg-black overflow-visible pt-24 pb-12 lg:pb-0">

        {/* Left Column: Typography */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:pl-24 lg:pr-12 pt-8 lg:pt-0 z-20 relative">
          <div className="space-y-0 select-none">
            <div className="flex flex-wrap items-baseline gap-x-6">
              <AnimatedText
                text="WE ARE"
                className="text-white font-orbitron"
                fontSize="9vw"
                delay={0}
              />
            </div>
            <AnimatedText
              text="COMING"
              className="text-neon-green font-orbitron"
              fontSize="12vw"
              color="#00ff00"
              delay={0.6}
            />
            <AnimatedText
              text="SOON"
              className="text-white font-orbitron"
              fontSize="12vw"
              delay={1.2}
            />
          </div>

          <div className="mt-8 lg:mt-12 flex items-center gap-8">
            <button
              onClick={scrollToNext}
              className="group relative w-32 h-32 rounded-full border border-white/20 bg-black flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer overflow-hidden"
            >
              <div className="relative z-10 flex flex-col items-center group-hover:opacity-0 transition-opacity duration-300">
                <span className="font-orbitron text-lg leading-none">EXPLORE</span>
                <span className="font-orbitron text-lg leading-none text-neon-green">TOOLS</span>
              </div>
              <div className="absolute inset-0 bg-neon-green translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out flex items-center justify-center">
                <ArrowUpRight className="w-10 h-10 text-white" />
              </div>
            </button>
            <div className="hidden sm:block">
              <ArrowRight className="w-16 h-16 text-white/20 rotate-45" />
            </div>
          </div>
        </div>

        {/* Right Column: Geometric Image Composition */}
        <div className="relative w-full lg:w-1/2 h-[60vh] lg:h-auto min-h-[600px] bg-zinc-950/50 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-zinc-900/20" />
          <div className="absolute top-[20%] right-[10%] w-[1px] h-[60%] bg-white/10" />
          <div className="absolute top-[20%] right-[10%] w-[200px] h-[1px] bg-white/10" />

          {/* Red Accent Square */}
          <div className="absolute top-[15%] right-[15%] w-32 h-32 bg-neon-green z-0" />

          {/* Main Portrait Image */}
          <div className="absolute top-[10%] left-[15%] w-[60%] aspect-[3/4] overflow-hidden z-10 border border-white/5 grayscale hover:grayscale-0 transition-all duration-700 hover:scale-[1.02] animate-slide-in-left">
            <img
              src="/feature-onboarding.jpg"
              alt="AI Creator"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overlapping Detail Image */}
          <div className="absolute bottom-[20%] right-[10%] w-[45%] aspect-square overflow-hidden z-20 border-8 border-black grayscale contrast-125 hover:grayscale-0 transition-all duration-700 shadow-2xl animate-slide-in-right">
            <img
              src="/feature-agency-control.jpg"
              alt="AI Detail"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
            <div className="absolute bottom-4 left-4">
              <Sparkles className="w-6 h-6 text-white mb-1" />
              <p className="font-bebas text-xl text-white">GENERATE</p>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes slide-in-left {
            from {
              transform: translateX(-100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes slide-in-right {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          .animate-slide-in-left {
            animation: slide-in-left 1s ease-out forwards;
          }

          .animate-slide-in-right {
            animation: slide-in-right 1s ease-out forwards;
            animation-delay: 0.2s;
            opacity: 0;
          }
        `}</style>
      </section>

      {/* --- Redesigned How It Works Section (Grid) --- */}
      <section ref={sectionRef} className="relative z-10 bg-black border-y border-white/5 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="text-neon-green border-neon-green mb-6 px-4 py-1 bg-neon-green/10 font-orbitron">THE WORKFLOW</Badge>
            <h2 className="text-4xl md:text-6xl font-orbitron uppercase tracking-tight text-white mb-4">
              How it Works
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From concept to cinematic reality in three simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((item, i) => (
              <div
                key={i}
                className="group relative h-[500px] bg-[#0a0a0a] border border-white/5 overflow-hidden transition-all duration-500 hover:border-white/20 rounded-none transform hover:-translate-y-2"
              >
                {/* Hover Media Background */}
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                  {item.type === 'video' ? (
                    <video
                      src={item.visual}
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <img
                      src={item.visual}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                {/* Top Right Corner Graphic (Matches Onboarding) */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-bl-[100px] z-20 flex items-center justify-center pl-4 pb-4 transition-transform duration-500 group-hover:translate-x-full group-hover:-translate-y-full">
                  <item.icon className="w-10 h-10 text-black" />
                </div>

                {/* Normal State Icon (Visible when graphic moves away or as backup) */}
                {/* Actually, let's keep the graphic but maybe change color on hover? 
                    User said "boxes... aise hone chaiye". Onboarding boxes possess the corner graphic.
                    But if video plays, the white graphic might look stark. 
                    Let's slide it out or keep it. Sliding out allows full video view. 
                    "Hover video show" -> Focus on video.
                */}

                {/* Content Container */}
                <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                  {/* Number */}
                  <div className="absolute top-8 left-8">
                    <span className="font-orbitron text-2xl text-gray-600/50 group-hover:text-white/80 transition-colors">
                      {(i + 1).toString().padStart(2, '0')}
                    </span>
                  </div>

                  <div className="transform transition-transform duration-500 group-hover:translate-y-0 translate-y-4">
                    <h3 className="font-orbitron text-4xl text-white uppercase tracking-wide mb-4 drop-shadow-lg">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-500 max-w-[90%] drop-shadow-md">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Filter & Grid Section (Restored) --- */}
      <section
        ref={nextSectionRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHoveringSection(true)}
        onMouseLeave={() => setIsHoveringSection(false)}
        className={`relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-black transition-all duration-300 ${isHoveringSection ? 'cursor-none' : ''} overflow-hidden`}
      >
        {/* Fixed Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            src="/robot.mp4"
            className="w-full h-full object-cover opacity-20"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-orbitron uppercase mb-4">Explore Our AI Arsenal</h2>
            <div className="w-20 h-1 mx-auto" style={{ background: 'linear-gradient(to right, #00ff00, #00ff00)' }} />
          </div>

          {/* Features Grid - Horizontal Scrolling Rows */}
          <div className="relative mt-20">
            {/* Central Line (Desktop) */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-green via-neon-green to-transparent hidden lg:block -translate-x-1/2" />

            {/* Mobile Line (Left) */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-green via-neon-green to-transparent lg:hidden" />

            <div className="space-y-8 lg:space-y-12">
              {aiFeatures.map((feature, index) => (
                <div key={index} className="relative flex flex-col lg:flex-row items-center justify-between w-full group">

                  {/* Timeline Dot */}
                  <div className="absolute left-4 lg:left-1/2 w-3 h-3 bg-neon-green rounded-full ring-4 ring-black z-20 lg:-translate-x-1/2 shadow-[0_0_10px_rgba(0,255,0,0.5)] group-hover:scale-125 transition-transform duration-300" />

                  {/* Left Side (Even Index) */}
                  <div className={`w-full lg:w-[48%] pl-12 lg:pl-0 ${index % 2 === 0 ? 'lg:order-1 lg:pr-8' : 'lg:order-3 lg:invisible'}`}>
                    {index % 2 === 0 && (
                      <div className="bg-zinc-900/40 border border-white/5 p-4 rounded-xl hover:border-montra-red/30 transition-all duration-500 hover:bg-zinc-900/60 backdrop-blur-sm group-hover:-translate-y-1 flex gap-4 items-center">
                        {/* Image Thumbnail */}
                        <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg overflow-hidden shrink-0 border border-white/5">
                          <img
                            src={index % 3 === 0 ? "/feature-onboarding.jpg" : index % 3 === 1 ? "/feature-agency-control.jpg" : "/imagine-step.jpg"}
                            alt={feature.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                          />
                        </div>

                        {/* Content */}
                        <div className="flex-1 text-right">
                          <div className="flex justify-end mb-2">
                            <feature.icon className="w-5 h-5 text-neon-green" />
                          </div>
                          <h3 className="font-orbitron text-2xl text-white mb-1 leading-none">{feature.title}</h3>
                          <p className="text-gray-400 text-xs leading-relaxed line-clamp-2 mb-2">{feature.description}</p>
                          <Badge variant="outline" className="border-white/10 text-gray-500 text-[9px] tracking-widest uppercase px-1.5 py-0">
                            {feature.category}
                          </Badge>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Side (Odd Index) */}
                  <div className={`w-full lg:w-[48%] pl-12 lg:pl-0 ${index % 2 !== 0 ? 'lg:order-3 lg:pl-8' : 'lg:order-1 lg:invisible hidden lg:block'}`}>
                    {index % 2 !== 0 && (
                      <div className="bg-zinc-900/40 border border-white/5 p-4 rounded-xl hover:border-montra-red/30 transition-all duration-500 hover:bg-zinc-900/60 backdrop-blur-sm group-hover:-translate-y-1 flex gap-4 items-center flex-row-reverse lg:flex-row">
                        {/* Content */}
                        <div className="flex-1 text-left">
                          <div className="flex justify-start mb-2">
                            <feature.icon className="w-5 h-5 text-neon-green" />
                          </div>
                          <h3 className="font-orbitron text-2xl text-white mb-1 leading-none">{feature.title}</h3>
                          <p className="text-gray-400 text-xs leading-relaxed line-clamp-2 mb-2">{feature.description}</p>
                          <Badge variant="outline" className="border-white/10 text-gray-500 text-[9px] tracking-widest uppercase px-1.5 py-0">
                            {feature.category}
                          </Badge>
                        </div>

                        {/* Image Thumbnail */}
                        <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg overflow-hidden shrink-0 border border-white/5">
                          <img
                            src={index % 3 === 0 ? "/feature-onboarding.jpg" : index % 3 === 1 ? "/feature-agency-control.jpg" : "/imagine-step.jpg"}
                            alt={feature.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              ))}
            </div>
          </div>


        </div>
      </section>

      {/* Final CTA - Redesigned Cinematic Section with Border & Spacing */}
      <section className="relative w-full bg-black py-20 overflow-visible">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pl-[60px]">
          <div className="relative border border-white/10 rounded-tr-[2.5rem] rounded-tl-[2.5rem] rounded-br-[2.5rem] bg-zinc-900/10 overflow-hidden px-8 lg:px-16 pt-16 lg:pt-20 pb-0 mx-2 lg:mx-12 h-[600px] lg:h-[700px]">
            {/* Background Gradient inside the box */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,255,0,0.1),transparent_70%)] pointer-events-none" />

            <div className="flex flex-col lg:flex-row items-end gap-12 lg:gap-16 relative z-10 h-full">
              {/* Left Side: Visual with dynamic masking */}
              <div className="relative w-full lg:w-1/2 h-full overflow-visible rounded-2xl group shrink-0 z-50">
                <img
                  src="/photo.png"
                  alt="AI Features"
                  className="absolute bottom-0 left-0 w-full h-auto scale-[1.875] origin-bottom drop-shadow-[0_0_50px_rgba(0,255,0,0.2)] pointer-events-none z-50"
                  style={{ marginBottom: '-1px' }}
                />

                {/* Overlay detail text */}
                <div className="absolute -bottom-4 -left-4 bg-black/40 backdrop-blur-xl border border-white/10 p-5 rounded-2xl max-w-[180px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden sm:block">
                  <div className="flex items-center gap-2 mb-2 text-neon-green">
                    <Sparkles className="w-4 h-4" />
                    <span className="font-orbitron text-xs tracking-widest uppercase">Early Access</span>
                  </div>
                  <p className="text-white/60 text-xs leading-relaxed">
                    Join our exclusive beta program and shape the future of AI.
                  </p>
                </div>
              </div>

              {/* Right Side: High-Impact Typography & CTA */}
              <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left pb-12 lg:pb-16 pt-6 lg:pt-8 px-4">
                <div className="space-y-4">
                  <Badge className="bg-neon-green/10 text-neon-green border-neon-green/20 px-4 py-1.5 text-[10px] font-orbitron tracking-[0.25em] uppercase shadow-[0_0_20px_rgba(0,255,0,0.1)]">
                    Limitless Future
                  </Badge>
                  <h2 className="font-orbitron text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[0.9] uppercase tracking-tight text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                    STAY <span className="text-neon-green drop-shadow-[0_0_20px_rgba(0,255,0,0.5)]">AHEAD</span><br />
                    OF THE <span className="text-transparent" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.3)' }}>CURVE</span>
                  </h2>
                </div>

                <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed max-w-lg mx-auto lg:mx-0 opacity-90">
                  Transform your creative workflow with our next-generation AI tools. Sign up for early access to the private beta today.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-2">
                  <Button
                    size="lg"
                    className="group relative bg-neon-green hover:bg-neon-green-dark text-black font-orbitron text-base md:text-lg px-8 py-5 rounded-none transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(0,255,0,0.2)] hover:shadow-[0_0_50px_rgba(0,255,0,0.4)] overflow-hidden"
                  >
                    <span className="relative z-10 tracking-wider">Get Early Access</span>
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                  </Button>
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-9 h-9 rounded-full border-2 border-black bg-zinc-800 overflow-hidden ring-2 ring-neon-green/20 hover:ring-neon-green/50 transition-all duration-300">
                        <img src={`/feature-onboarding.jpg`} alt="user" className="w-full h-full object-cover" />
                      </div>
                    ))}
                    <div className="w-9 h-9 rounded-full border-2 border-black bg-zinc-900 flex items-center justify-center text-[8px] font-bold text-gray-400 ring-2 ring-neon-green/20">
                      +1.2k
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
