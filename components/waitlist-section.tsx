"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CheckCircle2, Gift, Zap, Star } from "lucide-react"

const perks = [
  {
    icon: Zap,
    title: "Instant Access",
    description: "Get started immediately with our platform",
  },
  {
    icon: Gift,
    title: "Free Trial Period",
    description: "Try premium features risk-free",
  },
  {
    icon: Star,
    title: "Premium Support",
    description: "Get help from our expert team",
  },
]

export function WaitlistSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.email || !formData.role) return

    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="waitlist" className="relative overflow-hidden section-diagonal-top section-diagonal-bottom bg-black z-10 py-32">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* Floating Elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-montra-red/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-montra-red/5 rounded-full blur-3xl animate-float animation-delay-200" />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-montra-red/5 rounded-full blur-3xl animate-float animation-delay-400" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center">
            <p className="text-sm font-bebas uppercase tracking-widest text-montra-red">
              Join the Platform
            </p>
            <h2 className="mt-4 font-bebas text-5xl sm:text-6xl lg:text-7xl font-bold text-white uppercase tracking-tight text-balance">
              Ready to Transform Your Talent Management?
            </h2>
            <p className="mt-6 text-xl text-gray-400 leading-relaxed">
              Join thousands of agencies, talents, and sponsors already using our platform to revolutionize the talent industry.
            </p>

            {/* Perks */}
            <div className="mt-8 space-y-4">
              {perks.map((perk, index) => (
                <div key={index} className="flex items-start gap-4 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-montra-red/10 border border-montra-red/20 glass-effect animate-float" style={{ animationDelay: `${index * 100}ms` }}>
                    <perk.icon className="h-6 w-6 text-montra-red" />
                  </div>
                  <div>
                    <h3 className="font-bebas text-lg uppercase tracking-widest text-white">{perk.title}</h3>
                    <p className="text-sm text-gray-400">{perk.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md rounded-2xl glass-effect p-8 border border-white/5 animate-glow bg-zinc-900/50">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center space-y-4 py-8 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-montra-red shadow-[0_0_20px_rgba(255,0,0,0.5)]">
                    <CheckCircle2 className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bebas text-3xl uppercase tracking-widest text-white">
                    {"You're all set!"}
                  </h3>
                  <p className="text-gray-400">
                    {"Welcome to the platform! We'll get you set up right away."}
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-6 space-y-2 text-center">
                    <h3 className="font-bebas text-3xl uppercase tracking-widest text-white">
                      Get Started Now
                    </h3>
                    <p className="text-sm text-gray-400">
                      Choose your role and begin your journey
                    </p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="h-12 border-border/50 bg-background/50 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your email address"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="h-12 border-border/50 bg-background/50 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="tel"
                        placeholder="Phone number (optional)"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="h-12 border-border/50 bg-background/50 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div>
                      <Select
                        value={formData.role}
                        onValueChange={(value) =>
                          setFormData({ ...formData, role: value })
                        }
                        required
                      >
                        <SelectTrigger className="h-12 border-border/50 bg-background/50 text-foreground focus:border-primary focus:ring-primary">
                          <SelectValue placeholder="I am primarily a..." />
                        </SelectTrigger>
                        <SelectContent className="border-border bg-card">
                          <SelectItem value="agency">Agency Owner</SelectItem>
                          <SelectItem value="talent">
                            Talent (Model/Actor/etc.)
                          </SelectItem>
                          <SelectItem value="sponsor">Sponsor</SelectItem>
                          <SelectItem value="judge">Judge</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting || !formData.email || !formData.role}
                      className="h-14 w-full bg-montra-red text-white hover:bg-montra-red-dark font-bebas text-xl uppercase tracking-widest animate-glow"
                    >
                      {isSubmitting ? "Getting Started..." : "Start Your Journey"}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
