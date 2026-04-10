# TalentOS Blog

A modern, feature-rich blog application built with Next.js 14, TypeScript, and React.

## Features

- 📱 Fully responsive design
- 🔍 Real-time search functionality
- 🏷️ Category filtering
- ⭐ Featured posts section
- 📊 Reading progress indicator
- 📑 Table of contents with active section tracking
- 🎨 Smooth animations and transitions
- 🔗 Social sharing (Twitter, LinkedIn, Copy link)
- 📖 Related posts recommendations
- 🎯 SEO optimized

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

The blog will automatically redirect to `/blog` where you can browse all articles.

## Project Structure

```
├── app/
│   ├── blog/
│   │   ├── [slug]/
│   │   │   └── page.tsx          # Individual blog post page
│   │   ├── BlogCard.tsx           # Reusable blog card component
│   │   └── page.tsx               # Main blog listing page
│   ├── globals.css                # Global styles and CSS variables
│   ├── layout.tsx                 # Root layout with fonts
│   └── page.tsx                   # Home page (redirects to /blog)
├── data/
│   └── data/
│       ├── blog-posts.json        # Blog content and metadata
│       └── blog.ts                # TypeScript types
├── next.config.js                 # Next.js configuration
├── package.json                   # Dependencies and scripts
└── tsconfig.json                  # TypeScript configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Blog Content

Blog posts are stored in `data/data/blog-posts.json` with the following structure:

- Categories: Career Hub, Agency Playbook, AI Studio, Brand Hub, Industry Insights, Success Stories
- Each post includes: title, excerpt, content sections, author info, cover image, tags, and SEO metadata

## Customization

### Colors

CSS variables are defined in `app/globals.css` under `.blog-root`:

```css
--blog-text: #1a1a1a;
--blog-blue: #0073ea;
--blog-border: #e5e5e5;
/* ... and more */
```

### Fonts

The project uses:
- **Inter** - Body text and UI elements
- **Plus Jakarta Sans** - Headings and titles

Fonts are loaded from Google Fonts in `app/layout.tsx`.

## Technologies

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **React 18** - UI library
- **CSS-in-JS** - Inline styles for component-scoped styling

## License

Private project for TalentOS.
