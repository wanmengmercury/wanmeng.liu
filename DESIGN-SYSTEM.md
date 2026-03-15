# Design System: Quiet Authority

Trust from restraint. Personality from precision. Calm from warmth.

---

## Philosophy

This site communicates taste through what it chooses *not* to do. Every default was questioned. Every element earns its place. The design speaks through typographic tension, asymmetric rhythm, and warm materiality — not through decoration, repetition, or trend-following.

Three feelings the site must produce: **trust**, **calm**, **unique**.

---

## Typography

Two typefaces in deliberate tension:

| Role | Typeface | Weight | Size | Tracking | Usage |
|------|----------|--------|------|----------|-------|
| Display | Jost | 500 | clamp(48px, 6vw, 72px) | -0.04em | Hero name only |
| Statement | Jost | 400 | clamp(20px, 2.5vw, 26px) | — | Hero statement |
| Heading 1 | Jost | 500 | 32px | -0.025em | Page titles, featured project |
| Heading 2 | Jost | 500 | 20px | -0.015em | Section titles, project titles |
| Heading 3 | Jost | 500 | 17px | -0.01em | Detail section titles |
| Body | Jost | 400 | 16px | — | Paragraphs, line-height 1.7 |
| Small | Jost | 400 | 14px | — | Secondary body text |
| Mono | DM Mono | 400 | 12px | 0.02em | Nav, dates, labels, metadata, impact stats |
| Mono Small | DM Mono | 400 | 11px | 0.02em | Project numbers, fine metadata |

### Principle: Typographic tension through role separation

Jost (geometric sans) carries meaning — titles, statements, body text. DM Mono carries structure — navigation, dates, metrics, labels. The contrast between them is the design. Neither typeface appears where the other belongs.

DM Mono is not decorative. It signals precision, systematization, and engineering rigor. When you see monospace, you know you're reading metadata, not narrative.

---

## Color: Warm Stone Monochrome

```
Background     #F5F2ED    warm linen
Surface        #FAF8F5    warm white
Border         #D6D3CD    warm stone
Border Light   #E8E5DF    warm stone, subtle

Text           #1C1917    warm ink (stone-900)
Text Secondary #44403C    warm gray (stone-700)
Text Muted     #78716C    warm gray (stone-500)
Text Faint     #A8A29E    warm gray (stone-400)
```

### Principle: Color as opinion, not absence

Every gray is warm — shifted toward brown/ochre, away from blue. This is a deliberate choice that produces calm (Japanese stationery, linen paper) rather than the cold neutrality of Tailwind defaults.

There is no accent color. The accent is the warm black itself, used at display scale. Adding a color would be hedging — the monochrome commitment *is* the personality.

---

## Spacing: Asymmetric Rhythm

```
--s-1:    4px
--s-2:    8px
--s-3:   12px
--s-4:   16px
--s-5:   24px
--s-6:   32px
--s-7:   48px
--s-8:   64px
--s-9:   80px
--s-10: 120px
--s-11: 160px
```

### Principle: Dramatic gaps create rhythm

The scale jumps aggressively — from 48px to 80px to 120px. This produces breathing room followed by compression, not the metronomic padding of a template.

- Hero: 120px top padding (generous emptiness)
- Work section: 48px internal padding (tighter grouping)
- Between sections: 48px border-separated blocks
- Inside components: 8-16px (compressed)

The contrast between spacious and tight is what makes the layout feel designed, not generated.

---

## Layout

| Token | Value | Purpose |
|-------|-------|---------|
| `--max-w` | 680px | Content column — narrower than standard (800px) for editorial quality |
| `--max-w-wide` | 960px | Navigation container |

### Principle: Narrow is intentional

680px forces every line of text to be readable without scanning. It signals editorial confidence — the same width a well-typeset essay uses. Wider layouts dilute attention.

---

## Information Hierarchy

### Say each thing once

Every stat, every credential, every claim appears exactly once on the homepage. If $1.8M matters, it appears on the sepsis project row and nowhere else. Repetition reveals insecurity, not emphasis.

### Hero: trust the viewer

The hero contains exactly two text blocks:
1. Name (display scale)
2. One statement

No tagline label. No subtitle. No description paragraphs. No stats bar. The confidence is in what's not said. The work section below carries the evidence.

### Project hierarchy: feature one, list others

The homepage presents work with visual hierarchy:
- **Featured project**: large treatment — title, tagline, meta stats, full width
- **Secondary projects**: compact horizontal rows — title, one key stat, arrow

This says "here is what I want you to see first" instead of "here are equal things."

---

## Component Decisions

### Navigation
- Solid warm background (`#F5F2ED`), no glassmorphism, no backdrop-filter
- DM Mono for all links at 12px
- Logo in DM Mono (structural, not decorative)
- "Work" not "Projects" — more direct

### Section markers
- No uppercase faint labels (the most overused pattern in contemporary web design)
- Whitespace and content structure signal sections
- Border-top on sections creates visual separation without labels

### Tags
- DM Mono at 11px with 1px border
- No background fill, no rounded corners
- The restraint in tag styling lets content, not decoration, carry weight

### Cards
- No visible cards on homepage — whitespace is the container
- Project detail pages use border-top dividers between sections, not boxed cards
- No rounded corners (intentional absence of the default `border-radius: 16px`)

### Links and interaction
- Hover state: opacity reduction (0.6-0.7), not color change
- No underlines, no color shifts — the fade signals interactivity without visual noise
- Transitions: 0.2s ease on opacity and color only

### Footer
- DM Mono throughout
- Minimal: copyright + two links
- Border-top separation, generous top margin (120px)

---

## Anti-patterns (what this system explicitly rejects)

1. **Glassmorphism** — backdrop-filter blur is trend-following, not design
2. **Uppercase faint labels** — "Featured Work" in 10px tracking 0.1em is a template tell
3. **Equal-weight card grids** — product listings, not portfolios
4. **Neutral gray palettes** — `#fafafa` / `#0a0a0a` / `#e5e5e5` is Tailwind's default, not a choice
5. **Stat repetition** — showing $1.8M three times dilutes rather than reinforces
6. **Six-block heroes** — tagline + title + subtitle + descriptions + stats = insecurity
7. **Generic rounded corners** — `border-radius: 16px` on everything says nothing
8. **Linear spacing scales** — every-4px increments produce metronomic layouts

---

## Responsive behavior

At 768px:
- Nav collapses to mobile toggle
- Project rows wrap (detail moves below title)
- Impact metrics stack vertically
- Writing items stack (date above or below)
- Container padding reduces to 16px

At 480px:
- Heading sizes reduce (H1: 26px, H2: 18px)
- Featured project meta stacks vertically
