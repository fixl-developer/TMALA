"use client"

import React from 'react'
import { LucideIcon, Check } from 'lucide-react'
import { Container } from '../ui/Container'
import { Heading } from '../ui/Heading'
import { AnimatedReveal } from '../ui/AnimatedReveal'
import { RoleMockVisual, type MockType } from './RoleMockVisual'

export interface SubFeature {
  title: string
  body: string
}

export interface RoleWorkspaceData {
  anchor: string
  index: number
  icon: LucideIcon
  persona: string
  pageCount: string
  headline: React.ReactNode
  sub: string
  features: SubFeature[]
  mockType: MockType
}

interface Props {
  data: RoleWorkspaceData
  reverse?: boolean
  bg?: 'beige' | 'white'
}

export function RoleWorkspaceBlock({ data, reverse = false, bg = 'beige' }: Props) {
  const Icon = data.icon
  const bgClass = bg === 'beige' ? 'bg-bg-base' : 'bg-surface-main'

  return (
    <section
      id={data.anchor}
      className={`${bgClass} py-20 md:py-28 lg:py-32 border-b border-black/5 scroll-mt-20`}
    >
      <Container>
        <div
          className={`grid lg:grid-cols-2 gap-14 lg:gap-20 items-center ${
            reverse ? 'lg:[&>*:first-child]:order-2' : ''
          }`}
        >
          {/* Copy */}
          <AnimatedReveal direction={reverse ? 'right' : 'left'}>
            <div className="space-y-6">
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border border-text-main/15 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-text-main" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent-primary">
                    Workspace 0{data.index} · {data.persona}
                  </div>
                  <div className="text-[11px] uppercase tracking-widest text-text-mut mt-0.5">
                    {data.pageCount}
                  </div>
                </div>
              </div>

              {/* Headline */}
              <Heading level={2} className="text-text-main text-3xl md:text-4xl lg:text-5xl">
                {data.headline}
              </Heading>

              {/* Sub */}
              <p className="text-base md:text-lg text-text-mut leading-relaxed font-medium max-w-xl">
                {data.sub}
              </p>

              {/* 3 sub-features */}
              <div className="space-y-5 pt-4">
                {data.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="shrink-0 w-6 h-6 bg-accent-primary text-white flex items-center justify-center mt-0.5">
                      <Check className="w-3.5 h-3.5" strokeWidth={3} />
                    </div>
                    <div>
                      <div className="font-display font-bold text-text-main text-base md:text-lg mb-1">
                        {f.title}
                      </div>
                      <p className="text-text-mut text-[14px] leading-relaxed">{f.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedReveal>

          {/* Visual mock */}
          <AnimatedReveal direction={reverse ? 'left' : 'right'} delay={0.1}>
            <RoleMockVisual type={data.mockType} />
          </AnimatedReveal>
        </div>
      </Container>
    </section>
  )
}
