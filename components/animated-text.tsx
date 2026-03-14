"use client"

import React from "react"
import { motion, Variants } from "framer-motion"

interface AnimatedTextProps {
    text: string
    className?: string
    fontSize?: string
    color?: string
    outline?: boolean
    delay?: number
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
    text,
    className = "",
    fontSize = "10vw",
    color = "white",
    outline = false,
    delay = 0
}) => {
    const characters = text.split("")

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: delay,
            }
        }
    }

    const charVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.2, 0.65, 0.3, 0.9]
            }
        }
    }

    const textStyle: React.CSSProperties = outline
        ? {
            WebkitTextStroke: '1px rgba(255,255,255,0.5)',
            color: 'transparent'
        }
        : {
            color: color
        }

    return (
        <motion.div
            className={`relative select-none ${className} flex flex-wrap`}
            style={{ fontSize }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {characters.map((char, charIdx) => (
                <motion.span
                    key={charIdx}
                    variants={charVariants}
                    className="font-bebas tracking-tighter"
                    style={{
                        ...textStyle,
                        display: "inline-block",
                        whiteSpace: "pre"
                    }}
                >
                    {char}
                </motion.span>
            ))}
        </motion.div>
    )
}
