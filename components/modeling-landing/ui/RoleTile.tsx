"use client"

import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { type DemoRole, loginUrlFor } from '../demoRoles'

export function RoleTile({ role, accent = 'rose' }: { role: DemoRole; accent?: 'rose' | 'ink' }) {
  const [hovered, setHovered] = useState(false)
  const Icon = role.icon
  const url = loginUrlFor(role)

  const iconBgIdle  = 'bg-modeling-cream border border-modeling-line'
  const iconBgHover = accent === 'rose' ? 'bg-modeling-rose' : 'bg-modeling-ink'
  const cardHover   = accent === 'rose'
    ? 'hover:border-modeling-rose hover:bg-modeling-ink'
    : 'hover:border-modeling-ink hover:bg-modeling-ink'

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={`Open ${role.name} demo dashboard in a new tab`}
      className={`group relative h-full flex flex-col p-6 bg-white border border-modeling-line transition-all duration-300 ${cardHover} cursor-pointer no-underline`}
    >
      {/* Icon */}
      <div
        className={`w-11 h-11 flex items-center justify-center mb-5 transition-all duration-300 ${
          hovered ? iconBgHover : iconBgIdle
        }`}
      >
        <Icon className={`w-5 h-5 transition-colors ${hovered ? 'text-white' : 'text-modeling-deep'}`} />
      </div>

      <h3 className={`text-lg font-bold mb-1 leading-tight transition-colors ${hovered ? 'text-white' : 'text-modeling-ink'}`}>
        {role.name}
      </h3>
      <p className="text-[11px] uppercase tracking-widest font-bold mb-4 text-modeling-rose">
        {role.persona}
      </p>

      <ul className="space-y-2 mb-6">
        {role.highlights.map((h, i) => (
          <li
            key={i}
            className={`text-[12px] leading-relaxed pl-3 border-l-2 transition-colors ${
              hovered ? 'text-white/80 border-modeling-rose' : 'text-modeling-mut border-modeling-line'
            }`}
          >
            {h}
          </li>
        ))}
      </ul>

      <div className={`mt-auto pt-4 border-t flex items-center justify-between transition-colors ${hovered ? 'border-white/10' : 'border-modeling-line'}`}>
        <span className={`text-[10px] uppercase tracking-widest font-bold transition-colors ${hovered ? 'text-white/55' : 'text-modeling-mut'}`}>
          {role.pages}
        </span>
        <span className={`inline-flex items-center gap-1 text-[10px] uppercase tracking-widest font-bold transition-colors ${hovered ? 'text-modeling-rose' : 'text-modeling-mut group-hover:text-modeling-rose'}`}>
          Enter <ArrowRight className="w-3 h-3" />
        </span>
      </div>

      {/* Corner accent on hover */}
      <span
        aria-hidden
        className={`absolute -bottom-1 -right-1 w-12 h-12 border-2 border-modeling-rose transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}
      />
    </a>
  )
}
