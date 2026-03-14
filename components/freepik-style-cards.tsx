"use client";

import { Palette, Lock, Edit, MessageSquare, Sparkles, Smile, Box, Image as ImageIcon } from "lucide-react";

interface FeatureCard {
  icon: any;
  title: string;
  description: string;
  iconColor: string;
  iconBg: string;
}

const whyChooseCards: FeatureCard[] = [
  {
    icon: Palette,
    title: "The all-in-one suite for creatives",
    description: "Power your creativity with leading GenAI models, pro features, and a vast stock library—all in one platform.",
    iconColor: "#a78bfa",
    iconBg: "rgba(167, 139, 250, 0.1)"
  },
  {
    icon: Lock,
    title: "AI you can trust: private and secure",
    description: "Your data is never used to train AI—ours or third-party. You're fully protected with advanced security and full rights.",
    iconColor: "#60a5fa",
    iconBg: "rgba(96, 165, 250, 0.1)"
  },
  {
    icon: Edit,
    title: "Easy to use, with professional results",
    description: "Stay consistent, adapt assets easily, and create confidently with powerful tools built for real workflows like yours.",
    iconColor: "#f472b6",
    iconBg: "rgba(244, 114, 182, 0.1)"
  },
  {
    icon: MessageSquare,
    title: "Join the creators shaping AI's future",
    description: "Be part of a global community of top creatives. Get early access to new tools, share your work, and stay inspired.",
    iconColor: "#34d399",
    iconBg: "rgba(52, 211, 153, 0.1)"
  }
];

const efficiencyCards: FeatureCard[] = [
  {
    icon: Sparkles,
    title: "AI-Powered Efficiency",
    description: "Leverage advanced AI technology to quickly generate content from text and images, saving time significantly.",
    iconColor: "#a78bfa",
    iconBg: "rgba(167, 139, 250, 0.15)"
  },
  {
    icon: Smile,
    title: "Made Creation Simple",
    description: "No video editing or shooting skills required. Multi Talent Agency AI makes professional video creation easy and accessible for beginners.",
    iconColor: "#f472b6",
    iconBg: "rgba(244, 114, 182, 0.15)"
  },
  {
    icon: Sparkles,
    title: "AI-Powered Efficiency",
    description: "Leverage advanced AI technology to quickly generate content from text and images, saving time significantly.",
    iconColor: "#60a5fa",
    iconBg: "rgba(96, 165, 250, 0.15)"
  },
  {
    icon: Box,
    title: "Fully Customizable",
    description: "Easily customize video styles, dynamic effects, and aspect ratios with intuitive prompts, ensuring your videos fit perfectly on any platform.",
    iconColor: "#f59e0b",
    iconBg: "rgba(245, 158, 11, 0.15)"
  }
];

function FeatureCardComponent({ card }: { card: FeatureCard }) {
  const Icon = card.icon;
  
  return (
    <div className="group relative rounded-2xl bg-[#0a0a0a] border border-white/[0.08] p-8 transition-all duration-300 hover:border-white/[0.15] hover:bg-[#0f0f0f]">
      {/* Icon */}
      <div 
        className="w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: card.iconBg }}
      >
        <Icon className="w-7 h-7" style={{ color: card.iconColor }} />
      </div>

      {/* Optional decorative icon in top-right */}
      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div 
          className="w-10 h-10 rounded-lg flex items-center justify-center border"
          style={{ 
            backgroundColor: card.iconBg,
            borderColor: card.iconColor + "30"
          }}
        >
          <ImageIcon className="w-5 h-5" style={{ color: card.iconColor }} />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-white mb-3 leading-tight">
        {card.title}
      </h3>
      <p className="text-gray-200 text-sm leading-relaxed">
        {card.description}
      </p>
    </div>
  );
}

export function FreepikStyleWhyChoose() {
  return (
    <section className="py-24 bg-[#0e0e0e] border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-16">
          Why choose Freepik?
        </h2>

        {/* Cards Grid - 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whyChooseCards.map((card, index) => (
            <FeatureCardComponent key={index} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function FreepikStyleEfficiency() {
  return (
    <section className="py-24 bg-[#0e0e0e] border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Cards Grid - 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {efficiencyCards.map((card, index) => (
            <FeatureCardComponent key={index} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
