# Design Guidelines: Adam Roszkop Security Website

## Design Approach
**Reference-Based Approach**: Drawing inspiration from premium professional service sites like high-end consulting firms and luxury security brands. The design should convey trust, expertise, and discrete professionalism - think understated confidence rather than flashy corporate.

## Core Design Principles
1. **Understated Authority**: Professional without being stuffy, modern without being trendy
2. **Visual Restraint**: Strategic use of imagery and white space to command attention
3. **Clarity of Purpose**: Every element serves to build trust and credibility

## Color Palette

**Dark Mode Primary Colors:**
- Primary Navy: 220 40% 15% (deep, authoritative blue)
- Charcoal: 220 15% 20% (strong, reliable gray)
- Accent Silver: 220 10% 70% (subtle, refined highlight)
- Background: 220 20% 10% (rich dark background)
- Text Primary: 0 0% 95% (clean white)
- Text Secondary: 220 10% 60% (muted gray for secondary content)

**Light Mode Colors:**
- Primary Navy: 220 50% 25%
- Background: 0 0% 98%
- Text Primary: 220 20% 15%
- Accent: 220 20% 45% (professional blue-gray)

## Typography
- **Primary Font**: Inter or DM Sans (via Google Fonts)
- **Headings**: 
  - H1: 4xl-5xl, font-bold, tracking-tight
  - H2: 3xl-4xl, font-semibold, tracking-tight
  - H3: 2xl, font-semibold
- **Body**: base to lg, font-normal, leading-relaxed
- **Logo Text**: 2xl-3xl, font-bold, letter-spacing tight

## Layout System
**Spacing Primitives**: Use Tailwind units of 4, 8, 12, 16, 20, 24, 32 for consistent rhythm
- Section padding: py-20 to py-32 on desktop, py-12 to py-16 on mobile
- Container max-width: max-w-7xl with px-6
- Component spacing: gap-8 to gap-12 for grids
- Text content: max-w-3xl for optimal readability

## Component Library

### Logo Design
Minimalist wordmark with geometric shield icon
- "ARS" monogram or full "ADAM ROSZKOP" with "SECURITY" subtitle
- Shield element: simple, angular, modern (not ornate)
- Monochromatic or two-tone using primary navy and silver

### Navigation
Minimal fixed header with smooth scroll behavior
- Logo left, nav links center/right
- Links: Services, About, Contact
- Mobile: Hamburger menu with full-screen overlay
- Blur background on scroll

### Hero Section (100vh)
Full-viewport hero with professional security imagery
- Large bold headline: "Professional Security Solutions in London"
- Subheading emphasizing elite protection and discretion
- Primary CTA button: "Request Consultation" (solid navy with white text)
- Hero image: Professional bodyguard in suit (abstract/from behind), urban London backdrop, or modern security operations aesthetic
- Subtle dark overlay (40-50%) on image for text contrast
- Centered content with max-w-4xl

### Services Section
Three-column grid on desktop (2-col tablet, 1-col mobile)
- Each service card with:
  - Icon (shield, lock, user-check from Heroicons)
  - Service title (font-semibold, text-xl)
  - Brief description (2-3 lines)
  - Subtle border and padding
- Services to include:
  1. Close Protection
  2. Asset Protection
  3. Executive Protection (placeholder)
  4. Event Security (placeholder)
  5. Risk Assessment (placeholder)
  6. Residential Security (placeholder)

### About Section
Two-column layout on desktop
- Left: "Years of Experience" stat callout with large number
- Right: Professional background text, certifications placeholder
- London-based expertise highlight
- Optional: Timeline or credential badges

### Contact Section
Two-column layout (form + contact info)
- Left: Contact form (name, email, phone, message fields)
- Right: Contact details box with phone, email, London location
- Form styling: Dark inputs with light borders, focus states with primary color
- Submit button: Primary navy, full-width on mobile

### Footer
Clean, minimal footer
- Logo and tagline
- Quick links: Privacy, Terms
- Copyright and location
- No excessive decoration

## Images
**Hero Image**: Professional security personnel in business attire from behind/side angle in urban setting, or abstract architectural security theme (doors, modern building entrance). Use high-quality stock from Unsplash/Pexels with keywords: "professional bodyguard", "security London", "executive protection"

**Service Icons**: Heroicons outline style - shield-check, lock-closed, user-group, building-office, document-magnifying-glass

**About Section**: Optional abstract image of London cityscape or professional handshake (subtle, secondary)

## Animations
**Minimal and purposeful only:**
- Smooth scroll behavior for navigation
- Fade-in on scroll for sections (subtle, 0.3s duration)
- Button hover: subtle scale(1.02) or background lighten
- No complex animations or transitions

## Accessibility & Quality
- High contrast ratios maintained throughout
- Form labels and ARIA attributes
- Keyboard navigation support
- Touch-friendly tap targets (min 44px)
- Fast-loading optimized images

## Mobile Responsiveness
- Stack all multi-column layouts to single column below md breakpoint
- Reduce hero text sizes appropriately
- Full-width CTAs on mobile
- Hamburger menu for navigation
- Touch-optimized form inputs