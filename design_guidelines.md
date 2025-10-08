# Design Guidelines: 2025 Trending Web Experience

## Design Approach: Reference-Based (Inspired by Linear, Vercel, and Apple's Product Pages)

### Design Philosophy
Anti-design meets refined brutalism with bold, high-contrast aesthetics and organic, human-crafted touches. Asymmetric layouts with bento box-inspired grids create visual interest while maintaining usability.

## Core Design Elements

### A. Color Palette

**Dark Mode Primary (Default):**
- Background: 220 25% 8% (deep midnight blue)
- Surface: 220 20% 12% (elevated dark blue)
- Text Primary: 220 15% 95% (soft white)
- Text Secondary: 220 12% 70% (muted blue-gray)

**Accent Colors:**
- Primary Glow: 25 95% 60% (vibrant neon orange)
- Secondary Glow: 45 100% 65% (electric yellow)
- Interactive: 200 90% 55% (cyan blue)

**Light Mode Alternate:**
- Background: 220 30% 97%
- Surface: 0 0% 100%
- Text: 220 25% 15%

### B. Typography

**Font Families:**
- Display: 'Space Grotesk' or 'Cabinet Grotesk' (geometric sans-serif for headlines)
- Body: 'Inter' or 'DM Sans' (modern humanist sans-serif)
- Accent: 'Newsreader' or 'Fraunces' (high-contrast serif for emphasis)

**Type Scale:**
- Hero: clamp(3rem, 8vw, 6rem) - bold maximalist sizing
- Section Heading: clamp(2rem, 5vw, 3.5rem)
- Card Title: clamp(1.25rem, 3vw, 1.75rem)
- Body: clamp(1rem, 2vw, 1.125rem)
- Small: 0.875rem

### C. Layout System

**Spacing Primitives:** 4, 8, 16, 24, 32, 48, 64 (tailwind equivalents: 1, 2, 4, 6, 8, 12, 16)

**Grid Strategy:**
- Container: max-width 1400px with 24px horizontal padding
- Asymmetric bento box grids for gallery and features
- 12-column base grid with creative span variations
- Generous vertical rhythm: 80-120px between sections

### D. Component Library

**Hero Section:**
- Full-viewport height with floating organic blob shapes in background
- Diagonal split layout with content left, abstract visual right
- Primary CTA with glow effect, secondary ghost button
- Animated gradient mesh background with subtle movement

**Image Gallery:**
- Masonry/bento grid with varied card sizes (1x1, 2x1, 1x2 ratios)
- Hover effects: subtle scale, glow border, and overlay reveal
- Lazy loading with fade-in animation on viewport entry
- Lightbox modal with smooth backdrop blur

**Pricing Cards:**
- Three-column grid collapsing to single column on mobile
- Featured plan elevated with stronger glow and scale
- Rounded corners (16px) with subtle gradient borders
- Micro-interactions: hover glow, animated check marks

**Video Section:**
- Custom video player with gradient overlay controls
- Bento-style video grid: one large featured, multiple smaller tiles
- Play button with pulsing glow effect
- Scroll-triggered autoplay for ambient background videos

**FAQ Accordion:**
- Clean expand/collapse with rotating chevron icons
- Organic blob shapes as decorative background elements
- Smooth height transitions with ease-out timing
- Alternating left/right accent glow bars

**Contact Form:**
- Floating label inputs with animated underline focus states
- Custom checkbox/radio with glow accents on selection
- Submit button with loading state and success animation
- Form validation with inline error messaging and shake animation

### E. Interactive Elements

**Micro-interactions:**
- Button hover: subtle scale (1.02) with glow shadow expansion
- Card hover: lift effect with enhanced border glow
- Link underline: animated gradient fill on hover
- Smooth 300ms transitions with cubic-bezier easing

**Scroll Animations:**
- Parallax floating blob shapes at 0.5x scroll speed
- Fade-up content reveals on 60% viewport intersection
- Section dividers with animated gradient lines

**Custom Cursor (Desktop):**
- Enlarged cursor dot with trailing glow on interactive elements
- Magnetic pull effect toward buttons and links

## Images

**Hero Image:**
- Large abstract 3D render or gradient mesh visualization (right 50% of hero)
- Organic flowing shapes with neon glow accents
- Suggested: futuristic interface mockup or abstract data visualization

**Gallery Images:**
- 8-12 varied images showcasing product/service features
- Mix of photography and abstract graphics
- High-contrast compositions with bold colors
- Aspect ratios: 1:1, 16:9, 4:3 for grid variety

**Section Backgrounds:**
- Subtle gradient mesh patterns
- Floating organic blob SVG shapes with blur effects
- Abstract line patterns for texture

**Contact Section:**
- Decorative geometric pattern or world map graphic (faded, background)

## Accessibility & Performance

- Minimum contrast ratio: 4.5:1 for all text
- Focus indicators: 3px solid cyan glow ring
- Keyboard navigation for all interactive elements
- Reduced motion respects prefers-reduced-motion
- Semantic HTML with proper ARIA labels
- Image lazy loading with IntersectionObserver
- Smooth scroll behavior with instant fallback

## Key Differentiators

This design embraces 2025's anti-perfection trend while maintaining professional polish. The asymmetric bento grids, bold neon glows, and organic shapes create a distinctive, memorable experience that stands apart from generic templates. The dark-first approach with high-contrast accents ensures visual impact while the micro-interactions add delightful, human touches throughout the user journey.