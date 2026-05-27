import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    '*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          foreground: 'hsl(var(--success-foreground))',
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          foreground: 'hsl(var(--warning-foreground))',
        },
        info: {
          DEFAULT: 'hsl(var(--info))',
          foreground: 'hsl(var(--info-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        gradient: {
          '1': 'hsl(var(--gradient-1))',
          '2': 'hsl(var(--gradient-2))',
          '3': 'hsl(var(--gradient-3))',
          '4': 'hsl(var(--gradient-4))',
          '5': 'hsl(var(--gradient-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
        'montra-red': {
          DEFAULT: '#ff0000',
          dark: '#cc0000',
        },
        'montra-amber': {
          DEFAULT: '#f59e0b',
          dark: '#d97706',
          light: '#fbbf24',
        },
        'montra-gold': {
          DEFAULT: '#eab308',
          dark: '#ca8a04',
        },
        'montra-warm': {
          charcoal: '#1a1816',
          slate: '#27272a',
          stone: '#292524',
        },
        'neon-green': {
          DEFAULT: '#00ff00',
          dark: '#00cc00',
        },
        /* Cinematic Film Strip */
        cinematic: {
          base: '#0B0F1A',
          warm: '#111827',
          amber: '#f59e0b',
          cyan: '#22d3ee',
          magenta: '#ec4899',
          purple: '#8B5CF6',
          indigo: '#6366F1',
        },
        /* Influencer landing (neo-brutalist fashion palette) — only used under /agencies/influencer */
        'bg-base': '#EAE6DF',
        'surface-main': '#F4F1EC',
        'surface-sec': '#DFD9CF',
        'text-main': '#0B0B0B',
        'text-mut': '#54514D',
        'accent-primary': '#631B1B',
        'accent-secondary': '#0A0A0A',
        'accent-tertiary': '#4A1313',
        'accent-dark': '#310D0D',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      letterSpacing: {
        tightest: '-0.04em',
        display: '-0.03em',
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        jakarta: ['var(--font-jakarta)', 'sans-serif'],
        bebas: ['var(--font-bebas)', 'sans-serif'],
        /* Influencer landing only */
        display: ['var(--font-bricolage)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        space: ['var(--font-space-grotesk)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'flow': {
          'from': { backgroundPosition: '0 0' },
          'to': { backgroundPosition: '44px 0' },
        },
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'flow': 'flow 2s linear infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
