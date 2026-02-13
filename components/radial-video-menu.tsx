"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

// Types
export interface RadialSegment {
    id: string;
    label: string;
    videoUrl?: string;
    color?: string;
    icon?: React.ReactNode;
    ringId?: string;
}

export interface RadialRing {
    id: string;
    label: string;
    videoUrl?: string; // If rings show video
    radius: number; // Outer radius of this ring
    width: number; // Thickness
}

interface RadialVideoMenuProps {
    segments?: RadialSegment[];
    centralRings?: RadialRing[];
    centerLabel?: React.ReactNode;
    onHoverSegment?: (id: string | null) => void;
}

export function RadialVideoMenu({
    segments = [],
    centralRings = [],
    centerLabel,
    onHoverSegment
}: RadialVideoMenuProps) {
    const [activeSegment, setActiveSegment] = useState<string | null>(null);
    const [activeRing, setActiveRing] = useState<string | null>(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Layout Constants
    const RING_MAX_RADIUS = centralRings.length > 0 ? Math.max(...centralRings.map(r => r.radius)) : 80;
    const HUB_RADIUS = Math.max(80, RING_MAX_RADIUS);
    const OUTER_RADIUS = 280;
    const GAP = 2;

    // Function to create the petal path
    const createPetalPath = (index: number, total: number) => {
        const startAngle = (index * (360 / total));
        const endAngle = ((index + 1) * (360 / total));

        const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
            const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
            return {
                x: Number((centerX + (radius * Math.cos(angleInRadians))).toFixed(2)),
                y: Number((centerY + (radius * Math.sin(angleInRadians))).toFixed(2))
            };
        }

        // Add gap adjustments
        const gapOffset = GAP;

        // Outer points
        const start = polarToCartesian(300, 300, OUTER_RADIUS, endAngle - gapOffset);
        const end = polarToCartesian(300, 300, OUTER_RADIUS, startAngle + gapOffset);

        // Inner points
        const innerStart = polarToCartesian(300, 300, HUB_RADIUS + 5, endAngle - gapOffset); // +5 for margin from rings
        const innerEnd = polarToCartesian(300, 300, HUB_RADIUS + 5, startAngle + gapOffset);

        return `
      M ${start.x} ${start.y} 
      A ${OUTER_RADIUS} ${OUTER_RADIUS} 0 0 0 ${end.x} ${end.y} 
      L ${innerEnd.x} ${innerEnd.y} 
      A ${HUB_RADIUS + 5} ${HUB_RADIUS + 5} 0 0 1 ${innerStart.x} ${innerStart.y} 
      Z
    `;
    };

    // Helper to get label position outside the petal
    const getLabelPosition = (index: number, total: number) => {
        const angle = (index * (360 / total)) + (360 / total) / 2; // Mid angle
        const radians = (angle - 90) * Math.PI / 180.0;
        const radius = OUTER_RADIUS + 40; // Place outside

        // Round to 2 decimal places to avoid hydration mismatch
        const x = Number((300 + (radius * Math.cos(radians))).toFixed(2));
        const y = Number((300 + (radius * Math.sin(radians))).toFixed(2));

        const lineStart = {
            x: Number((300 + ((OUTER_RADIUS - 10) * Math.cos(radians))).toFixed(2)),
            y: Number((300 + ((OUTER_RADIUS - 10) * Math.sin(radians))).toFixed(2))
        };

        return { x, y, lineStart, angle };
    };

    const handleSegmentHover = (id: string | null) => {
        setActiveSegment(id);
        if (onHoverSegment) onHoverSegment(id);
    }

    const handleRingHover = (id: string | null) => {
        setActiveRing(id);
    }

    if (!isMounted) return <div className="min-h-[600px]" />; // Prevent SSR mismatch

    return (
        <div className="relative w-full max-w-5xl mx-auto flex items-center justify-center py-20">
            <div className="relative w-[800px] h-[600px] flex items-center justify-center scale-75 sm:scale-90 md:scale-100 transition-transform">

                <svg
                    viewBox="0 0 600 600"
                    className="w-[600px] h-[600px] overflow-visible"
                >
                    <defs>
                        {segments.map((segment, index) => (
                            <clipPath key={`clip-${segment.id}`} id={`clip-${segment.id}`}>
                                <path d={createPetalPath(index, segments.length)} />
                            </clipPath>
                        ))}
                        {segments.map((segment, index) => (
                            <linearGradient key={`grad-${segment.id}`} id={`grad-${segment.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor={indexToColor(index, 0)} />
                                <stop offset="100%" stopColor={indexToColor(index, 1)} />
                            </linearGradient>
                        ))}

                        {/* Ring Gradients/Clips */}
                        {centralRings.map((ring) => (
                            <clipPath key={`clip-ring-${ring.id}`} id={`clip-ring-${ring.id}`}>
                                {/* Ring shape: Outer Circle MINUS Inner Circle */}
                                <path
                                    d={`M 300 300 m -${ring.radius}, 0 a ${ring.radius},${ring.radius} 0 1,0 ${ring.radius * 2},0 a ${ring.radius},${ring.radius} 0 1,0 -${ring.radius * 2},0 M 300 300 m -${ring.radius - ring.width}, 0 a ${ring.radius - ring.width},${ring.radius - ring.width} 0 1,1 ${2 * (ring.radius - ring.width)},0 a ${ring.radius - ring.width},${ring.radius - ring.width} 0 1,1 -${2 * (ring.radius - ring.width)},0`}
                                    fillRule="evenodd"
                                />
                            </clipPath>
                        ))}
                    </defs>

                    {/* Connectors & Labels Layer */}
                    {segments.map((segment, index) => {
                        const { x, y, lineStart, angle } = getLabelPosition(index, segments.length);
                        const isRightSide = angle < 180;
                        const lineEnd = {
                            x: x + (isRightSide ? -10 : 10),
                            y: y
                        };

                        return (
                            <g key={`label-${segment.id}`} className="pointer-events-none">
                                <circle cx={lineStart.x} cy={lineStart.y} r="3" fill="white" className="opacity-50" />
                                <line
                                    x1={lineStart.x} y1={lineStart.y}
                                    x2={lineEnd.x} y2={lineEnd.y}
                                    stroke="white"
                                    strokeWidth="1"
                                    className="opacity-30"
                                />
                            </g>
                        );
                    })}

                    {/* Petals Layer */}
                    {segments.map((segment, index) => {
                        const isActive = activeSegment === segment.id || (!!activeRing && segment.ringId === activeRing);

                        return (
                            <g
                                key={segment.id}
                                onMouseEnter={() => handleSegmentHover(segment.id)}
                                onMouseLeave={() => handleSegmentHover(null)}
                                className="cursor-pointer"
                            >
                                <path
                                    d={createPetalPath(index, segments.length)}
                                    className={cn(
                                        "transition-opacity duration-300",
                                        isActive ? "opacity-0" : "opacity-100"
                                    )}
                                    fill={`url(#grad-${segment.id})`}
                                    stroke="rgba(255,255,255,0.1)"
                                    strokeWidth="1"
                                />
                                <foreignObject
                                    x="0" y="0" width="600" height="600"
                                    clipPath={`url(#clip-${segment.id})`}
                                    className="pointer-events-none"
                                >
                                    <div className={cn(
                                        "w-full h-full bg-black transition-opacity duration-500 flex items-center justify-center",
                                        isActive ? "opacity-100" : "opacity-0"
                                    )}>
                                        <video
                                            src={segment.videoUrl}
                                            className="w-full h-full object-cover"
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                        />
                                        <div className="absolute inset-0 bg-black/10" />
                                    </div>
                                </foreignObject>
                                <path
                                    d={createPetalPath(index, segments.length)}
                                    fill="transparent"
                                    stroke={isActive ? "white" : "transparent"}
                                    strokeWidth="2"
                                    className="transition-all duration-300 pointer-events-none"
                                />
                            </g>
                        );
                    })}

                    {/* Center Hub - Base Background */}
                    <circle cx="300" cy="300" r={HUB_RADIUS} fill="url(#hubGradient)" className="drop-shadow-2xl" />
                    <defs>
                        <radialGradient id="hubGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                            <stop offset="0%" stopColor="#2e1065" />
                            <stop offset="100%" stopColor="#000000" />
                        </radialGradient>
                    </defs>

                    {/* Central Rings Layer */}
                    {centralRings.map((ring, index) => {
                        const isActive = activeSegment === ring.id;
                        const textPathId = `text-path-${ring.id}`;
                        const r = ring.radius - (ring.width / 2);

                        return (
                            <g
                                key={ring.id}
                                onMouseEnter={() => handleRingHover(ring.id)}
                                onMouseLeave={() => handleRingHover(null)}
                                className="cursor-pointer group"
                            >
                                {/* Ring Background (Interactive) */}
                                <path
                                    d={`M 300 300 m -${ring.radius}, 0 a ${ring.radius},${ring.radius} 0 1,0 ${ring.radius * 2},0 a ${ring.radius},${ring.radius} 0 1,0 -${ring.radius * 2},0 M 300 300 m -${ring.radius - ring.width}, 0 a ${ring.radius - ring.width},${ring.radius - ring.width} 0 1,1 ${2 * (ring.radius - ring.width)},0 a ${ring.radius - ring.width},${ring.radius - ring.width} 0 1,1 -${2 * (ring.radius - ring.width)},0`}
                                    fillRule="evenodd"
                                    className={cn(
                                        "transition-all duration-300",
                                        isActive ? "fill-white/10 stroke-white/30" : "fill-transparent stroke-white/10 hover:fill-white/5"
                                    )}
                                    strokeWidth="1"
                                />

                                {/* Video inside Ring (Masked) */}
                                <foreignObject
                                    x="0" y="0" width="600" height="600"
                                    clipPath={`url(#clip-ring-${ring.id})`}
                                    className="pointer-events-none"
                                >
                                    <div className={cn(
                                        "w-full h-full bg-black transition-opacity duration-500",
                                        isActive ? "opacity-100" : "opacity-0"
                                    )}>
                                        {ring.videoUrl && (
                                            <video
                                                src={ring.videoUrl}
                                                className="w-full h-full object-cover"
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                            />
                                        )}
                                        <div className="absolute inset-0 bg-purple-900/50 mix-blend-overlay" />
                                    </div>
                                </foreignObject>

                                {/* Ring Text */}
                                <defs>
                                    <path id={textPathId} d={`M 300, 300 m -${r}, 0 a ${r},${r} 0 1,1 ${r * 2},0 a ${r},${r} 0 1,1 -${r * 2},0`} />
                                </defs>
                                <text className="fill-white/70 text-[8px] sm:text-[10px] uppercase font-bold tracking-widest pointer-events-none sticky-text">
                                    <textPath href={`#${textPathId}`} startOffset="25%" textAnchor="middle">
                                        {ring.label}
                                    </textPath>
                                </text>
                            </g>
                        )
                    })}

                    {/* Innermost Label/Icon (if space permits inside last ring) */}
                    <foreignObject x={300 - 30} y={300 - 30} width={60} height={60} className="pointer-events-none">
                        <div className="w-full h-full flex items-center justify-center">
                            {centerLabel || <span className="text-white text-3xl">∞</span>}
                        </div>
                    </foreignObject>

                </svg>

                {/* Labels Overlay */}
                {segments.map((segment, index) => {
                    const { x, y, angle } = getLabelPosition(index, segments.length);
                    const isRightSide = angle < 180;

                    return (
                        <div
                            key={`label-text-${segment.id}`}
                            className="absolute pointer-events-none whitespace-pre-line text-white font-medium text-sm tracking-wide drop-shadow-md"
                            style={{
                                left: x,
                                top: y,
                                transform: `translate(${isRightSide ? "0%" : "-100%"}, -50%)`,
                                textAlign: isRightSide ? "left" : "right",
                                marginLeft: isRightSide ? "12px" : "-12px"
                            }}
                        >
                            {segment.label}
                        </div>
                    )
                })}

            </div>
        </div>
    );
}

// Fallback color generator
function indexToColor(index: number, stop: number): string {
    const colors = [
        ["#9333ea", "#db2777"], // purple-pink
        ["#1d4ed8", "#312e81"], // blue-indigo
        ["#059669", "#115e59"], // emerald-teal
        ["#f43f5e", "#991b1b"], // rose-red
        ["#f97316", "#ca8a04"], // orange-yellow
        ["#06b6d4", "#3b82f6"], // cyan-blue
    ];
    // Modulo to cycle colors if more than 6 segments
    const palette = colors[index % colors.length];
    return palette[stop] || "#000000";
}
