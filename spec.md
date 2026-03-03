# Marik Institute of Technology

## Current State
The website is fully built with all pages (Home, About, Programs, Admissions, Campus Life, Placements, Contact, Admin). The homepage hero section currently uses a generated placeholder image (`/assets/generated/marik-institute-hero.dim_1200x600.jpg`) as both the background and the about section image. The color palette is predominantly Navy Blue + Gold/White with minimal visual variety.

## Requested Changes (Diff)

### Add
- Use uploaded campus image (`/assets/uploads/marik-institute-2-1.jpg`) as the hero section background on the homepage
- Use uploaded campus image in the About section as the campus photo
- New accent colors: teal/cyan secondary accent and a subtle coral/warm highlight for visual interest
- Gradient-enhanced section backgrounds with the extended palette
- Animated gradient badge in hero
- Colored left-border accent cards in the "Why Choose" section
- Enhanced programs cards with colored icon backgrounds cycling through teal/gold/navy variants

### Modify
- Hero section: replace background image with uploaded image
- About section: replace campus image with uploaded image
- `index.css`: add teal and coral/red accent CSS custom properties
- Programs section: use teal as alternating accent alongside navy/gold
- Why Choose section: use left-border color variation per card
- Stats bar: add teal gradient alongside navy
- CTA section: add diagonal gradient background combining navy and teal

### Remove
- Nothing removed

## Implementation Plan
1. In `Home.tsx`, update hero `backgroundImage` style to use `/assets/uploads/marik-institute-2-1.jpg`
2. In `Home.tsx`, update About section `<img>` src to `/assets/uploads/marik-institute-2-1.jpg`
3. In `index.css`, add `--teal`, `--teal-dark`, `--coral` OKLCH color tokens and Tailwind mappings
4. In `tailwind.config.js`, add `teal`, `teal-dark`, `coral` color entries mapped to CSS vars
5. In `Home.tsx`, add visual interest: teal accent for alternating program cards, colored icon backgrounds, gradient stats bar, enhanced CTA section
6. Apply data-ocid markers to all interactive surfaces
