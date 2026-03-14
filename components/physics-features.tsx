"use client"

import React, { useEffect, useRef, useState } from "react"
import { X, Info } from "lucide-react"

const featureTags = [
    {
        text: "MULTI-TENANT ARCHITECTURE",
        color: "#ff0000", // bright red
        description: "Complete data isolation and custom branding for each agency with secure multi-tenancy."
    },
    {
        text: "AI-ENHANCED PORTFOLIOS",
        color: "#ec4899", // pink
        description: "Automatic photo enhancement, smart organization, and AI-powered portfolio optimization."
    },
    {
        text: "ADVANCED SECURITY",
        color: "#27272A", // zinc-800
        description: "Enterprise-grade security with RBAC/ABAC, data encryption, and compliance features."
    },
    {
        text: "TALENT MANAGEMENT",
        color: "#dc2626", // red-600
        description: "Comprehensive talent database with advanced search, filtering, and management tools."
    },
    {
        text: "EVENT MANAGEMENT",
        color: "#f472b6", // pink-400
        description: "Built-in tools for organizing pageants, casting calls, and talent showcases."
    },
    {
        text: "ANALYTICS & INSIGHTS",
        color: "#FFFFFF", // white
        description: "Detailed analytics on performance, engagement, bookings, and revenue streams."
    },
    {
        text: "GLOBAL CDN",
        color: "#3F3F46", // zinc-700
        description: "Fast loading times worldwide with global content delivery."
    },
    {
        text: "ENTERPRISE SECURITY",
        color: "#ef4444", // red-500
        description: "Bank-level security with encryption and compliance."
    },
    {
        text: "HIGH PERFORMANCE",
        color: "#000000", // black
        description: "Optimized for speed with 99.9% uptime guarantee."
    },
    {
        text: "REAL-TIME ANALYTICS",
        color: "#db2777", // pink-600
        description: "Live data and insights for better decision making."
    }
]

export function PhysicsFeatures() {
    const sceneRef = useRef<HTMLDivElement>(null)
    const engineRef = useRef<any>(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [selectedFeature, setSelectedFeature] = useState<typeof featureTags[0] | null>(null)

    useEffect(() => {
        // Dynamically load Matter.js from CDN
        const script = document.createElement("script")
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.19.0/matter.min.js"
        script.async = true
        script.onload = () => setIsLoaded(true)
        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
            if (engineRef.current) {
                const { Engine, World } = (window as any).Matter
                if (engineRef.current.world) {
                    World.clear(engineRef.current.world, false)
                }
                Engine.clear(engineRef.current)
            }
        }
    }, [])

    useEffect(() => {
        if (!isLoaded || !sceneRef.current) return

        const { Engine, Render, Runner, Bodies, Composite, Mouse, MouseConstraint, Events, Query } = (window as any).Matter

        // Create engine
        const engine = Engine.create()
        engineRef.current = engine
        const world = engine.world

        // Get container dimensions
        const width = sceneRef.current.clientWidth
        const height = 500 // Increased height for better play area

        // Create renderer
        const render = Render.create({
            element: sceneRef.current,
            engine: engine,
            options: {
                width,
                height,
                wireframes: false,
                background: "transparent",
                pixelRatio: window.devicePixelRatio
            },
        })

        Render.run(render)

        // Create runner
        const runner = Runner.create()
        Runner.run(runner, engine)

        // Add boundaries
        const ground = Bodies.rectangle(width / 2, height + 30, width, 60, { isStatic: true, render: { visible: false } })
        const leftWall = Bodies.rectangle(-30, height / 2, 60, height, { isStatic: true, render: { visible: false } })
        const rightWall = Bodies.rectangle(width + 30, height / 2, 60, height, { isStatic: true, render: { visible: false } })
        Composite.add(world, [ground, leftWall, rightWall])

        // Create boxes for features
        const boxes = featureTags.map((tag, i) => {
            const x = (width / 2) + (Math.random() - 0.5) * width * 0.5
            const y = -100 - (i * 150) // Increased drop spacing for larger boxes
            // Calculate width based on text length with larger base and multiplier
            const boxWidth = Math.max(280, tag.text.length * 15 + 60)
            const boxHeight = 80

            const box = Bodies.rectangle(x, y, boxWidth, boxHeight, {
                chamfer: { radius: 8 },
                render: {
                    fillStyle: tag.color,
                    strokeStyle: '#ffffff',
                    lineWidth: tag.color === '#000000' || tag.color === '#18181B' ? 1 : 0
                },
                restitution: 0.4,
                friction: 0.1,
                density: 0.002 // Slightly heavier
            })

            // Attach metadata to the body for identification
            box.plugin = { featureIndex: i }

            return box
        })

        Composite.add(world, boxes)

        // Add mouse control
        const mouse = Mouse.create(render.canvas)
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false,
                },
            },
        })

        Composite.add(world, mouseConstraint)
        render.mouse = mouse

        // Handle clicks — distinguish click vs drag by tracking mouse movement
        let mouseDownPos = { x: 0, y: 0 }

        Events.on(mouseConstraint, 'mousedown', (event: any) => {
            mouseDownPos = { x: event.mouse.position.x, y: event.mouse.position.y }
        })

        Events.on(mouseConstraint, 'mouseup', (event: any) => {
            const mousePosition = event.mouse.position
            const dx = mousePosition.x - mouseDownPos.x
            const dy = mousePosition.y - mouseDownPos.y
            const dist = Math.sqrt(dx * dx + dy * dy)

            // Only treat as click if mouse moved less than 5px (not a drag)
            if (dist > 5) return

            const bodies = Composite.allBodies(world)
            const featureBodies = bodies.filter((b: any) => b.plugin && b.plugin.featureIndex !== undefined)
            const clickedBodies = Query.point(featureBodies, mousePosition)

            if (clickedBodies.length > 0) {
                const body = clickedBodies[0]
                const index = body.plugin.featureIndex
                if (index !== undefined && featureTags[index]) {
                    setSelectedFeature(featureTags[index])
                }
            }
        })

        // Custom rendering for text
        const context = render.context
        Events.on(render, 'afterRender', () => {
            context.font = "bold 18px 'Inter', sans-serif"
            context.textAlign = "center"
            context.textBaseline = "middle"

            boxes.forEach((box: any, i: number) => {
                const { x, y } = box.position
                const angle = box.angle
                const tag = featureTags[i]

                context.save()
                context.translate(x, y)
                context.rotate(angle)

                // Set text color based on background
                context.fillStyle = tag.color === "#FFFFFF" ? "#000000" : "#FFFFFF"
                context.fillText(tag.text, 0, 0)
                context.restore()
            })
        })

        // Handle window resize
        const handleResize = () => {
            if (!sceneRef.current) return
            const newWidth = sceneRef.current.clientWidth
            render.canvas.width = newWidth
            // In a real physics engine resize, you might want to reposition walls
            // For now, we'll just let it be to avoid complexity
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
            Render.stop(render)
            Runner.stop(runner)
            Engine.clear(engine)
            if (render.canvas) render.canvas.remove()
        }
    }, [isLoaded])

    return (
        <div className="w-full section-bg-navy py-12 relative">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="font-bebas text-center text-4xl mb-8 uppercase tracking-widest text-white/55">
                    Explore Our <span className="text-white">Features</span>
                </h2>

                <div className="relative">
                    <div
                        ref={sceneRef}
                        className="relative w-full h-[500px] bg-zinc-950/50 border border-white/5 rounded-xl overflow-hidden cursor-grab active:cursor-grabbing"
                    />

                    {/* Detail Card Overlay */}
                    {selectedFeature && (
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-md px-4 pointer-events-none">
                            <div className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl animate-in fade-in zoom-in duration-200 pointer-events-auto">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="w-3 h-3 rounded-full"
                                            style={{ backgroundColor: selectedFeature.color === '#000000' ? '#ffffff' : selectedFeature.color }}
                                        />
                                        <h3 className="font-bebas text-2xl text-white uppercase tracking-widest">
                                            {selectedFeature.text}
                                        </h3>
                                    </div>
                                    <button
                                        onClick={() => setSelectedFeature(null)}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>
                                <p className="text-gray-200 text-sm leading-relaxed font-light">
                                    {selectedFeature.description}
                                </p>
                            </div>
                        </div>
                    )}

                    {!selectedFeature && (
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none opacity-50 animate-pulse">
                            <div className="flex items-center gap-2 bg-black/60 px-3 py-1.5 rounded-full border border-white/10">
                                <Info className="w-3 h-3 text-white" />
                                <span className="text-[10px] text-white uppercase tracking-wider">Click any box for details</span>
                            </div>
                        </div>
                    )}
                </div>

                <p className="mt-6 text-center text-zinc-600 text-xs font-light uppercase tracking-widest opacity-60">
                    Physics Engine Active • Drag to Toss • Click to Inspect
                </p>
            </div>
        </div>
    )
}
