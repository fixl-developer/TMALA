"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

const cards = [
    {
        title: "REACH",
        problem: "Invisible Global Talent",
        solution: "Real-time Discovery in 100+ Regions",
        images: [
            "/feature-scouting.webp",
            "/talent-agency.jpg",
            "/feature-onboarding.jpg"
        ]
    },
    {
        title: "TRUST",
        problem: "Exploitive Sponsorship Deals",
        solution: "Transparent Brand-Direct Collaborations",
        images: [
            "/feature-sponsorship.jpg",
            "/feature-security.jpg",
            "/feature-agency-control.jpg"
        ]
    },
    {
        title: "VELOCITY",
        problem: "Manual Bureaucracy",
        solution: "Instant Multi-Currency Payouts",
        images: [
            "/feature-subscription.jpg",
            "/feature-agency-control.jpg",
            "/imagine-step.jpg"
        ]
    },
    {
        title: "INTELLIGENCE",
        problem: "Siloed Data Ecosystems",
        solution: "360° Intelligent Agency Analytics",
        images: [
            "/feature-judging.jpg",
            "/eature-pageants.jpg",
            "/feature-onboarding.jpg"
        ]
    }
]

export function MorphingCardsSection() {
    return (
        <section className="relative w-full bg-black py-20 px-4 overflow-visible border-t border-white/5 z-10">
            {/* Header */}
            <div className="text-center mb-16 lg:mb-20">
                <p className="text-[10px] font-bebas uppercase tracking-[0.5em] text-red-500 mb-3">
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

            <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
                {cards.map((card, idx) => (
                    <MorphingCard key={idx} card={card} />
                ))}
            </div>
        </section>
    )
}

function MorphingCard({ card }: { card: typeof cards[0] }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className="relative h-[600px] border border-white/5 flex flex-col items-center justify-center cursor-pointer overflow-visible group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Background Circle on Hover */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none"
                    >
                        <div className="w-[80%] aspect-square rounded-full bg-zinc-900/40 border border-white/5" />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Pop-up Images */}
            <AnimatePresence>
                {isHovered && (
                    <div className="absolute inset-0 z-20 pointer-events-none">
                        {card.images.map((img, i) => (
                            <motion.div
                                key={i}
                                initial={{
                                    opacity: 0,
                                    scale: 0.5,
                                    x: 0,
                                    y: 0
                                }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    x: i === 0 ? -120 : i === 1 ? 140 : -80,
                                    y: i === 0 ? -150 : i === 1 ? -100 : 180,
                                    rotate: i === 0 ? -15 : i === 1 ? 10 : -5
                                }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 15,
                                    delay: i * 0.1
                                }}
                                className="absolute left-1/2 top-1/2 w-48 h-64 border-4 border-black shadow-2xl overflow-hidden"
                            >
                                <img src={img} alt="" className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-500" />
                            </motion.div>
                        ))}
                    </div>
                )}
            </AnimatePresence>

            {/* Content Container */}
            <div className="relative z-30 text-center px-6">
                <motion.h2
                    animate={{
                        color: isHovered ? "#ef4444" : "#ffffff",
                    }}
                    transition={{ duration: 0.3 }}
                    className="font-bebas text-5xl md:text-6xl lg:text-7xl tracking-tight uppercase"
                >
                    {card.title}
                </motion.h2>

                <AnimatePresence>
                    {!isHovered && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="mt-4"
                        >
                            <p className="text-gray-400 text-sm line-through decoration-red-500/40">
                                {card.problem}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="mt-6 flex flex-col items-center"
                        >
                            <p className="text-white font-bebas text-xl mb-2">
                                {card.solution}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}
