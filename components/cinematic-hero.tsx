"use client"

import { Button } from "@/components/ui/button"

interface CinematicHeroProps {
    titleLine1: string
    titleLine2: string
    titleLine3: string
    highlightedWord?: string
    description: string
    buttonText: string
    imageSrc: string
    imageAlt: string
    isReversed?: boolean
}

export function CinematicHero({
    titleLine1,
    titleLine2,
    titleLine3,
    highlightedWord,
    description,
    buttonText,
    imageSrc,
    imageAlt,
    isReversed = false
}: CinematicHeroProps) {
    return (
        <section className="relative w-full bg-montra-red overflow-hidden flex flex-col lg:flex-row items-stretch min-h-[80vh]">
            {/* Image Column */}
            <div className={`relative w-full lg:w-1/2 min-h-[400px] lg:min-h-0 ${isReversed ? 'lg:order-2' : ''}`}>
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90"
                    style={{ objectPosition: 'center 20%' }}
                />
                {/* Subtle overlay to blend image into the red better if needed */}
                <div className="absolute inset-0 bg-montra-red/20 pointer-events-none" />
            </div>

            {/* Content Column */}
            <div className={`relative w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16 xl:p-24 ${isReversed ? 'lg:order-1' : ''}`}>
                <div className="max-w-2xl w-full space-y-8">
                    <h1 className="font-bebas text-6xl md:text-8xl xl:text-9xl leading-[0.9] text-white uppercase tracking-tight">
                        {titleLine1}<br />
                        {titleLine2}<br />
                        <span
                            className="text-transparent"
                            style={{ WebkitTextStroke: '2px white' }}
                        >
                            {titleLine3}
                        </span>
                    </h1>

                    <div className="space-y-8">
                        <p className="text-white/90 text-xl md:text-2xl font-light leading-relaxed max-w-lg">
                            {description}
                        </p>

                        <Button
                            size="lg"
                            className="bg-white text-montra-red hover:bg-zinc-100 font-bebas text-2xl px-12 py-8 rounded-xl transition-transform hover:scale-105 shadow-xl uppercase tracking-widest"
                        >
                            {buttonText}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
