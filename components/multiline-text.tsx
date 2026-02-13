"use client"

import React from "react"
import { motion, Variants } from "framer-motion"

interface MultilineTextProps {
    text: string
    className?: string
    fontSize?: string
    strokeColor?: string
    layers?: number
    strokeStep?: number
    delay?: number
}

export const MultilineText: React.FC<MultilineTextProps> = ({
    text,
    className = "",
    fontSize = "10vw",
    strokeColor = "white",
    layers = 6,
    strokeStep = 2,
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
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4
            }
        }
    }

    return (
        <motion.div
            className={`relative select-none ${className} flex`}
            style={{ fontSize }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {characters.map((char, charIdx) => (
                <motion.div
                    key={charIdx}
                    variants={charVariants}
                    className="relative inline-block"
                    style={{ width: char === " " ? "0.3em" : "auto" }}
                >
                    {char !== " " && (
                        <svg
                            className="h-[1.2em] overflow-visible"
                            viewBox="0 0 100 120"
                            style={{ width: "0.7em" }}
                            preserveAspectRatio="xMinYMid meet"
                        >
                            {Array.from({ length: layers }).map((_, i) => {
                                const strokeWidth = (layers - i) * strokeStep;
                                const opacity = (i + 1) / layers;
                                return (
                                    <text
                                        key={i}
                                        x="50%"
                                        y="100"
                                        textAnchor="middle"
                                        className="font-bebas tracking-tighter"
                                        style={{
                                            fill: "none",
                                            stroke: strokeColor,
                                            strokeWidth: strokeWidth,
                                            fontSize: "100px",
                                            opacity: opacity * 0.4,
                                            strokeLinejoin: "round",
                                            strokeLinecap: "round"
                                        }}
                                    >
                                        {char}
                                    </text>
                                );
                            })}

                            <text
                                x="50%"
                                y="100"
                                textAnchor="middle"
                                className="font-bebas tracking-tighter"
                                style={{
                                    fill: "none",
                                    stroke: strokeColor,
                                    strokeWidth: "1px",
                                    fontSize: "100px",
                                }}
                            >
                                {char}
                            </text>
                        </svg>
                    )}
                </motion.div>
            ))}
        </motion.div>
    )
}
