# Plan: Award-Winning Upgrades for NOVA.STUDIO

Adding 7 upgrades across interactive polish, new sections, and new pages.

## 1. Cinematic Preloader
- New `src/components/Preloader.tsx` with full-screen black overlay
- Animated 0→100 counter (framer-motion), kinetic "NOVA.STUDIO" reveal, curtain wipe exit
- Mount in `Index.tsx`, show only on first visit (sessionStorage flag)
- Lock body scroll while active

## 2. Interactive 3D Hero
- Install `three@0.160`, `@react-three/fiber@^8.18`, `@react-three/drei@^9.122.0`
- New `src/components/Hero3D.tsx` — distorted metallic sphere/torus knot with `MeshDistortMaterial`, slow auto-rotation, mouse-follow parallax, environment lighting
- Embed as background layer in `HeroSection.tsx` behind the existing text, replacing/overlaying the current video; keep video as fallback
- Lazy-load with `React.Suspense` and respect `prefers-reduced-motion`

## 3. Awards & Recognition Strip
- New `src/components/AwardsSection.tsx`
- Horizontal scrolling row of award badges (Awwwards, FWA, CSSDA, Behance, Webby) with year tags
- Hover-glow cards, animated count of total awards
- Insert in `Index.tsx` between Showreel and Showcase

## 4. Page Transitions
- New `src/components/PageTransition.tsx` wrapper using framer-motion `AnimatePresence` + `motion.div`
- Slide+fade with dark overlay sweep between routes
- Refactor `App.tsx` to use `useLocation` + `AnimatePresence mode="wait"` around `<Routes>`

## 5. Client Logos Marquee
- New `src/components/ClientLogos.tsx`
- Infinite seamless horizontal scroll (duplicated track), grayscale → color on hover
- 10-12 placeholder brand wordmarks (SVG text)
- Insert in `Index.tsx` after Hero/MarqueeStrip

## 6. Blog / Insights Page
- New `src/pages/Blog.tsx` — masonry/bento grid of article cards with category tags, reading time, hover image zoom
- New `src/pages/BlogPost.tsx` — article detail template with hero image, prose, share buttons
- 6 sample articles in `src/data/blog.ts` (animation trends, CGI workflows, AI video, BTS case studies)
- Add routes `/blog` and `/blog/:slug` in `App.tsx`
- Link in Footer (replace one Studio link) and add to Navbar

## 7. Pricing / Packages Page
- New `src/pages/Pricing.tsx`
- 3 tier cards (Starter / Studio / Cinematic) with feature lists, "Most Popular" badge, animated gradient border on featured tier
- FAQ accordion at bottom (reuse shadcn)
- CTA → WhatsApp/contact
- Add route `/pricing` + Footer & Navbar links

## Technical Details
- **Deps:** `three@0.160`, `@react-three/fiber@^8.18`, `@react-three/drei@^9.122.0`
- **Order of Index sections after:** Preloader → Navbar → Hero(3D) → MarqueeStrip → ClientLogos → ShowreelSection → AwardsSection → ShowcaseSection → ProcessSection → ServicesSection → AboutSection → ContactSection → Footer
- **Navbar additions:** Blog, Pricing links (desktop + mobile)
- **Performance:** 3D hero lazy-loaded; preloader gates initial paint; reduced-motion fallbacks everywhere
- **Design tokens:** all new components use existing semantic tokens from `index.css` (primary teal, secondary gold, dark base) — no hardcoded colors

Ready to build on approval.