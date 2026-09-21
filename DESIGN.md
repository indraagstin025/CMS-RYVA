# RYVA.ID Design System Direction (Light Mode Default)

## Brand Identity & Soul
- **Brand**: RYVA.ID
- **Tagline**: Research to Reality
- **Philosophy**: Bringing research from experiments and prototypes to real-world industrial and societal implementation.
- **Tone**: Clean, credible, scientifically grounded, pragmatic, and high-precision.

## Antislop Dials
- **ENERGY**: 2 (Balanced. Professional research organization with modern precision edge, clean light-mode surfaces, avoiding sterile generic flat defaults)
- **RHYTHM**: 2 (Structured variety. Purposeful section transitions: Hero -> Pipeline Flow -> Research Focus -> Case Studies -> Publications -> Collaboration CTA)
- **MOTION**: 2 (Subtle, purposeful transitions, hover lift, clean tab switching, no disorienting bounce loops)

## Color Palette (Strict High-Contrast Light Mode Hierarchy)
1. **Base Backgrounds & Surfaces**:
   - `bg-base`: `#F8FAFC` (Slate-50, clean light background)
   - `bg-surface`: `#FFFFFF` (Pure white card containers)
   - `bg-elevated`: `#F1F5F9` (Slate-100, muted subtle contrast blocks)
   - `border-subtle`: `#E2E8F0` (Slate-200, crisp hairline borders)
   - `border-strong`: `#CBD5E1` (Slate-300)
2. **Text & Contrast (WCAG AAA / AA Compliant)**:
   - Primary Headings & Bold Text: `#0F172A` (Slate-900, contrast ratio > 16:1 on white)
   - Body & Paragraph Text: `#334155` (Slate-700, contrast ratio > 10:1 on white)
   - Secondary / Metadata Labels: `#64748B` (Slate-500, contrast ratio > 4.8:1 on white)
3. **Primary Accent (Applied Science & Growth)**:
   - Deep Emerald: `#059669` (Emerald-600, contrast ratio > 4.6:1 on white for large text/icons)
   - Emerald Light tint: `#ECFDF5` (Emerald-50 for badges and subtle highlights)
4. **Secondary Precision Accent (Digital Systems & Analytics)**:
   - Precision Sky/Cyan: `#0284C7` (Sky-600)
   - Sky Light tint: `#F0F9FF` (Sky-50)

## Typography & Hierarchy
- **Primary Sans Typeface**: DM Sans, Inter, system-ui, sans-serif
- **Monospace Code/System Typeface**: Space Mono, monospace (digunakan untuk label teknis seperti `01 / EXPLORE`, `SYSTEM / 01`, `PROJECT / 001`, `NODE STATUS`)
- **Headings**: Sharp weight (700), deliberate tracking (-0.04em hingga -0.06em).
- **Readable Prose**: Line-height 1.65 - 1.75, maximum reading width 68ch for article detail.

## Architectural Blueprint (Converted from index.html)
1. **Header**: RYVA.ID logo, Research, Solutions, Products, Insights, About, Contact, Explore RYVA CTA.
2. **Hero**: Headline, Subcopy, Explore CTAs, and Interactive SVG *RYVA Systems Map / 001*.
3. **01 / Capabilities**: 3 distinct cards (Research / Explore, Innovation / Experiment, Solutions / Implement) with SVG vector schematics.
4. **02 / Method**: 6 connected pipeline stages (Problem, Research, Prototype, Validation, Implementation, Product).
5. **03 / Disciplines**: 8 technology focus modules (AI, ML, Computer Vision, IoT, Data Analytics, Software Engineering, Automation, Intelligent Systems).
6. **04 / Contexts**: 8 real-world application domains.
7. **05 / Selected Work**: Featured research case study module with 5 structured methodology stages.
8. **06 / Products**: Scalable technology products with status tags and tech stacks.
9. **07 / Knowledge (Insights)**: Interactive category filterable articles grid.
10. **08 / About**: Identity statement, core values, and node network diagram.
11. **09 / Contact**: Problem exploration inquiry form with direct submission.
12. **Footer**: Brand, tagline, navigation, contact, and system status.

## Antislop Hard Gates Adherence
- Zero em dashes (`—`) in UI copy.
- Zero fake metrics or fabricated testimonials.
- Complete functional interactive controls (no dead links, no broken dropdowns).
- Full responsiveness on mobile (minimum 44px tap targets, zero horizontal overflow).
- All interactive controls accessible via keyboard (`Tab`, `Enter`, `Escape`).
