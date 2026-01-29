# Girtonian Design Studio Portfolio

A production-ready portfolio site built with a comprehensive design system. Features editorial futurism aesthetic with warm neutrals, progressive disclosure through motion, and enterprise-grade accessibility.

## Design System Overview

### Philosophy
- **Progressive disclosure through motion** — Animations serve comprehension, not decoration
- **Clarity before cleverness** — If motion confuses, remove it
- **Accessibility is baseline** — WCAG AA compliant out of the box
- **Performance is UX** — 60fps target, optimized bundle sizes
- **Systems over solutions** — Reusable components and design tokens

### Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 with custom design tokens
- **Animation**: Framer Motion (+ GSAP for signature moments)
- **Typography**: Inter (Google Fonts)
- **Icons**: Lucide React
- **Language**: TypeScript (strict mode)

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── work/              # Work showcase
│   ├── about/             # About page
│   └── layout.tsx         # Root layout with navigation
├── components/
│   ├── primitives/        # Atomic components (Text, Button, Link, etc.)
│   ├── patterns/          # Molecules (Nav, Hero, ProjectCard, etc.)
│   └── sections/          # Organisms (WorkGrid, etc.)
├── lib/
│   ├── motion.ts          # Motion utilities and Framer Motion presets
│   ├── utils.ts           # Utility functions (cn, etc.)
│   ├── types.ts           # TypeScript type definitions
│   └── data.ts            # Sample content data
└── public/                # Static assets
```

## Design Tokens

### Color System
- **Neutrals**: Warm bias with editorial range
- **Accent**: Single slate color for CTAs and links
- **Status**: Semantic colors for success, warning, error, info
- **Borders**: Three levels of contrast

### Typography
- **Scale**: Minor third (1.200 ratio) for editorial hierarchy
- **Fonts**: Inter (UI/body), optional Schibsted Grotesk (display)
- **Line Heights**: Optimized for 16px base (tight/snug/normal/relaxed)

### Motion Categories
1. **Feedback** (always on): Hover, focus, active states
2. **Navigation** (simplified if reduced-motion): Page transitions, modals
3. **Storytelling** (disabled if reduced-motion): Scroll reveals, stagger animations
4. **Signature** (disabled if reduced-motion): Hero 3D, GSAP sequences

### Spacing
- 4px base unit (compatible with Tailwind defaults)
- Semantic aliases for sections: `sectionY`, `containerX`

## Components

### Primitives
- `<Text>`: Semantic text with variants (h1-h4, body, lead, small, caption)
- `<Button>`: Accessible button with loading/disabled states
- `<Link>`: Next.js Link wrapper with motion and external link handling
- `<LinkButton>`: Link styled as button (for CTAs)
- `<Container>`: Max-width wrapper with responsive padding
- `<Card>`: Elevated surface with optional hover and clickable states
- `<Image>`: Next.js Image wrapper with aspect ratio control

### Patterns
- `<Nav>`: Global navigation with mobile drawer
- `<Hero>`: Full-viewport intro section
- `<SectionHeader>`: Reusable section titles
- `<ProjectCard>`: Work showcase card
- `<Footer>`: Global footer
- `<Stat>`: Animated counter
- `<Timeline>`: Vertical event list
- `<Breadcrumbs>`: Navigation trail

### Sections
- `<WorkGrid>`: Filterable project grid with masonry layout

## Page Architecture

### Home (`/`)
1. Hero with headline and CTAs
2. Featured work (2-3 projects)
3. Capabilities (3-column grid)
4. Social proof (stats + client logos)
5. CTA section

### Work (`/work`)
- Filterable project grid
- Category tags (All, Enterprise, Web3, Design Systems, etc.)
- Dynamic routing to case studies

### About (`/about`)
- Personal introduction
- Career timeline
- Tools & approach
- Design philosophy
- Contact CTA

### Case Studies (`/work/[slug]`)
- Project metadata
- Content blocks (placeholder for full case studies)
- Navigation to next project

## Accessibility Features

✅ WCAG AA compliant
✅ Semantic HTML throughout
✅ Focus indicators on all interactive elements
✅ Skip-to-content link
✅ Reduced motion support
✅ Screen reader optimized
✅ Keyboard navigation
✅ Color contrast validated

## Performance Optimizations

- ✅ Next.js Image optimization
- ✅ Font optimization (Google Fonts with display=swap)
- ✅ Code splitting (experimental optimizePackageImports)
- ✅ Static generation where possible
- ✅ Optimized bundle size
- ✅ GPU-accelerated animations (transform/opacity only)

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

## Development

### Adding New Components
1. Create component in appropriate directory (`primitives`, `patterns`, or `sections`)
2. Export from `index.ts` in that directory
3. Follow established patterns for TypeScript types
4. Include accessibility attributes (ARIA, semantic HTML)
5. Test with reduced motion enabled

### Adding New Pages
1. Create route in `app/` directory
2. Use existing components from the design system
3. Follow established page architecture patterns
4. Add metadata for SEO

### Motion Guidelines
- Use `useReducedMotion()` hook for conditional animations
- Stick to `transform` and `opacity` for performance
- Use Framer Motion for most animations
- Reserve GSAP for complex, signature moments only

## Deployment

### Build
```bash
npm run build
```

### Deploy to Vercel
```bash
vercel deploy --prod
```

The site is optimized for Vercel deployment with automatic static optimization and image optimization.

## Future Enhancements

- [ ] Dark mode support
- [ ] MDX for blog/writing section
- [ ] Headless CMS integration (Sanity/Contentful)
- [ ] Advanced 3D hero scene (Three.js/React Three Fiber)
- [ ] Analytics integration
- [ ] SEO enhancements (structured data, sitemap)

## License

© 2024 Girtonian LLC. All rights reserved.

## Contact

For questions or inquiries:
- Email: hello@girtonian.com
- LinkedIn: [linkedin.com/in/girtonian](https://linkedin.com/in/girtonian)

---

Built with Next.js, Tailwind CSS, and Framer Motion. Design system architecture follows Atomic Design principles with a focus on scalability and maintainability.
