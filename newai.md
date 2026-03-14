🚨 1️⃣ Biggest Problem: THEME CONFUSION
❌ Issue:

Hero section → Neon Green dominant

Baaki sections → Purple accents

Buttons → Kabhi green, kabhi purple

Glow system inconsistent

👉 Yeh brand ko cheap bana deta hai.

✅ Fix:

Choose ONE core accent:

Option A (Premium AI feel):

Primary: #7C3AED (Purple)

Secondary: #06B6D4 (Cyan)

Remove green completely

Option B (If Green brand hai):

Primary: #22C55E

Secondary glow: #16A34A

Purple remove kar do

⚠️ Dono mix mat karo.

🚨 2️⃣ Hero Section Problems
❌ Problem 1: Green Text Too Harsh

"CREATIVE" neon green is too bright.

👉 It breaks elegance.

Fix:

Instead of solid green:

bg-gradient-to-r from-green-400 to-emerald-600

Reduce saturation.

❌ Problem 2: Background Flat Lag Raha Hai

Glow depth kam hai.

Add:

Radial gradient

Noise overlay

Subtle grid pattern

Currently it looks:

Dark + green text (flat)

Should look:

Dark + layered + atmospheric

🚨 3️⃣ Typography Problems
❌ Heading hierarchy weak

"AI-POWERED" same weight as "STUDIO"

Visual rhythm missing

Fix:

AI-POWERED → text-xl tracking-widest
CREATIVE → 72px bold
STUDIO → 56px medium

Hierarchy banana padega.

🚨 4️⃣ Section Spacing Inconsistency

Observed:

Some sections tight padding

Some sections too airy

Feature cards uneven breathing space

Fix System:

Use consistent vertical spacing:

py-[120px] each major section

Internal spacing:

gap-12
🚨 5️⃣ Feature Cards Problem
❌ Glow Icons Floating Alone

Purple circular glow icons look detached.

They need:

Inner border highlight

Background elevation

Add:

bg-white/5
border border-white/10
backdrop-blur-xl

Currently they look pasted.

🚨 6️⃣ Timeline Section Problem (AI Arsenal)

This part is visually interesting BUT:

❌ Green vertical line too bright
❌ Cards not enough depth
❌ Animation missing

Add:

Soft glow on line

Card hover scale

Subtle parallax

🚨 7️⃣ Button System Inconsistency

Some buttons:

Rounded-lg

Some rounded-xl

Some shadow, some flat

Pick ONE:

Recommended:

rounded-xl
shadow-[0_0_30px_rgba(primary_color,0.4)]
hover:scale-105

Consistency = premium.

🚨 8️⃣ Video Frame Styling Weak

Right-side media panels lack:

Depth

Glass effect

Gradient border

Soft shadow

Should be:

rounded-[28px]
p-[1px]
bg-gradient-to-br from-white/20 to-transparent

Inner:

bg-white/5
backdrop-blur-2xl
🚨 9️⃣ Lack of Micro Interactions

I didn’t see:

Floating animations

Scroll fade-ins

Subtle motion

Premium AI sites always have motion.

Add:

Framer Motion fade up

Floating 6s y animation

Hover glow intensify

🚨 1️⃣0️⃣ Overall Problem

Your design currently feels:

Good template
Not
$50M AI Startup level

Because:

No strong design system

Mixed accent colors

No depth layering

Typography hierarchy weak

🔥 FINAL SUMMARY
Area	Problem	Fix
Theme	Green + Purple mix	Pick one
Hero	Flat background	Add glow layers
Typography	Weak hierarchy	Resize & weight fix
Cards	Floating icons	Add glass card base
Buttons	Inconsistent	Standardize
Timeline	Harsh green line	Softer glow
Depth	Missing	Add shadows + blur
Motion	Static	Add animations

---

## ✅ Implemented in AI Features Sections (After Hero)

The following fixes and animations are **already applied** in `@/components/ai-features-sections-after-hero.tsx`:

### Theme (Option A applied in these sections only)
- **Primary accent**: `#7C3AED` (violet) — used for CTAs, glows, step numbers, Generate button.
- **RGB constant**: `124, 58, 237` for `rgba()` shadows. No green in these sections.

### Section spacing
- **Vertical**: `py-[120px]` on every major section.
- **Internal**: `gap-12` between grid items and content blocks.

### Feature cards (Sections 4 & 5)
- **Glass base**: `bg-white/5 border border-white/10 backdrop-blur-xl`.
- **Icon container**: `border border-white/20` + shadow `0_0_30px_rgba(124,58,237,0.4)`; hover intensifies glow.
- Cards no longer look "pasted"; they have elevation and inner border highlight.

### Buttons
- **Create AI Video Now**: `rounded-xl`, `shadow-[0_0_30px_rgba(124,58,237,0.4)]`, `hover:scale-105`.
- **Generate**: same accent and shadow, `hover:scale-105`.
- **Download / Share**: `rounded-xl`, `hover:scale-105`, consistent outline style.

### Video / media panels
- **Frame**: `rounded-[28px] p-[1px] bg-gradient-to-br from-white/20 to-transparent`.
- **Inner**: `bg-white/5 backdrop-blur-2xl border border-white/10`.
- Applied to: Section 1 image block, Section 2 video placeholder, Section 3 AI Audio image.

### Animations (Framer Motion)
- **Scroll fade-in**: Each section uses `SectionWrapper` with `useInView` → `initial: { opacity: 0, y: 50 }` → `animate: { opacity: 1, y: 0 }` (duration 0.7s).
- **Staggered content**: Cards and steps use `staggerChildren: 0.12`, `delayChildren: 0.08`; children use `fadeUp` (opacity 0 → 1, y 40 → 0).
- **Floating (6s y)**: Section 2 video frame has `animate: { y: [-10, 10, -10] }`, `duration: 6`, `repeat: Infinity`, `ease: easeInOut`.
- **Hover**:
  - Cards: `hover:scale(1.02–1.03)`, border → `violet-500/30`, shadow glow intensifies.
  - Icon circles: stronger glow on hover.
  - Prompt input bar: focus ring + violet shadow.
  - Play button: hover scale + stronger shadow.
  - Step upload placeholders: hover scale + border lighten.
- **Pose icons (Section 1)**: `whileHover={{ scale: 1.1 }}`.
- **Avatar stack**: small stagger on mount (opacity + scale per avatar).

### Still to do (per your suggestions)
- **Hero**: Green → gradient/softer green; add radial gradient, noise, grid; typography hierarchy (AI-POWERED / CREATIVE / STUDIO sizes).
- **Timeline (AI Arsenal)**: Softer green line, card hover scale, subtle parallax.
- **Global**: Decide Option A (purple) vs Option B (green) for the **entire** page and align hero + timeline with that choice.