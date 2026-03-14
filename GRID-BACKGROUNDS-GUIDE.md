# Dynamic Grid Backgrounds Guide

## Overview
The `DynamicGridBackground` component provides flexible, animated grid patterns that can be used across different sections of your agency pages. Each pattern automatically adapts to your agency's accent color.

## Available Patterns

### 1. **dots** - Subtle dot grid
Best for: Content-heavy sections, feature lists
```tsx
<DynamicGridBackground pattern="dots" accent="crimson" opacity={0.12}>
  {/* Your content */}
</DynamicGridBackground>
```

### 2. **lines** - Classic grid lines
Best for: Role sections, team displays
```tsx
<DynamicGridBackground pattern="lines" accent="amber" opacity={0.08}>
  {/* Your content */}
</DynamicGridBackground>
```

### 3. **squares** - Bold square grid
Best for: Category cards, navigation sections
```tsx
<DynamicGridBackground pattern="squares" accent="violet" opacity={0.08}>
  {/* Your content */}
</DynamicGridBackground>
```

### 4. **diagonal** - Diagonal stripes
Best for: Hero sections, call-to-action areas
```tsx
<DynamicGridBackground pattern="diagonal" accent="cyan" opacity={0.1}>
  {/* Your content */}
</DynamicGridBackground>
```

### 5. **hexagon** - Hexagonal pattern
Best for: Tech-focused sections, innovation areas
```tsx
<DynamicGridBackground pattern="hexagon" accent="emerald" opacity={0.12}>
  {/* Your content */}
</DynamicGridBackground>
```

### 6. **circuit** - Circuit board style
Best for: CTA sections, technical features
```tsx
<DynamicGridBackground pattern="circuit" accent="indigo" opacity={0.1}>
  {/* Your content */}
</DynamicGridBackground>
```

### 7. **mesh** - Multi-layered mesh
Best for: Complex sections, benefits areas
```tsx
<DynamicGridBackground pattern="mesh" accent="orange" opacity={0.06}>
  {/* Your content */}
</DynamicGridBackground>
```

### 8. **waves** - Radial wave pattern
Best for: Creative sections, artistic content
```tsx
<DynamicGridBackground pattern="waves" accent="rose" opacity={0.08}>
  {/* Your content */}
</DynamicGridBackground>
```

## Accent Colors
Available accent colors that match your agency types:
- `crimson` - Red/Talent agencies
- `amber` - Orange/Creative agencies
- `violet` - Purple/Entertainment agencies
- `cyan` - Blue/Tech agencies
- `emerald` - Green/Wellness agencies
- `rose` - Pink/Fashion agencies
- `indigo` - Deep blue/Corporate agencies
- `orange` - Bright orange/Media agencies

## Opacity Guidelines
- **0.05-0.08**: Very subtle, for text-heavy sections
- **0.08-0.12**: Standard visibility, most common use
- **0.12-0.15**: More prominent, for visual emphasis
- **0.15+**: Bold, use sparingly for special sections

## Usage Examples

### Agency Detail Page Structure
```tsx
<main>
  {/* Hero - No grid (video background) */}
  <section className="hero">...</section>

  {/* Modules Section - Dots pattern */}
  <DynamicGridBackground pattern="dots" accent={agency.accent} opacity={0.12}>
    <CreativeModulesSection />
  </DynamicGridBackground>

  {/* Roles Section - Lines pattern */}
  <DynamicGridBackground pattern="lines" accent={agency.accent} opacity={0.08}>
    <section className="roles">...</section>
  </DynamicGridBackground>

  {/* CTA Section - Circuit pattern */}
  <DynamicGridBackground pattern="circuit" accent={agency.accent} opacity={0.1}>
    <section className="cta">...</section>
  </DynamicGridBackground>
</main>
```

### Main Agencies Page Structure
```tsx
<main>
  {/* Hero - No grid (video background) */}
  <section className="hero">...</section>

  {/* Categories - Squares pattern */}
  <DynamicGridBackground pattern="squares" accent="crimson" opacity={0.08}>
    <section className="categories">...</section>
  </DynamicGridBackground>

  {/* Benefits - Mesh pattern */}
  <DynamicGridBackground pattern="mesh" accent="amber" opacity={0.06}>
    <section className="benefits">...</section>
  </DynamicGridBackground>
</main>
```

## Best Practices

1. **Vary patterns between sections** - Don't use the same pattern for adjacent sections
2. **Match accent to content** - Use agency-specific accents for detail pages
3. **Keep opacity low** - Grids should enhance, not distract
4. **Skip hero sections** - Let video/image backgrounds shine
5. **Use className for borders** - Add border classes to the wrapper component

## Props Reference

```tsx
interface DynamicGridBackgroundProps {
  pattern?: "dots" | "lines" | "squares" | "diagonal" | "hexagon" | "circuit" | "mesh" | "waves"
  accent?: "crimson" | "amber" | "violet" | "cyan" | "emerald" | "rose" | "indigo" | "orange"
  opacity?: number // 0-1, default 0.15
  className?: string // Additional Tailwind classes
  children?: React.ReactNode
}
```

## Tips for Different Agency Types

- **Talent/Modeling**: Use `dots` and `lines` for clean, professional look
- **Creative/Production**: Use `mesh` and `waves` for artistic feel
- **Tech/Innovation**: Use `circuit` and `hexagon` for modern vibe
- **Fashion/Beauty**: Use `diagonal` and `squares` for bold statements
- **Sports/Events**: Use `lines` and `squares` for dynamic energy
