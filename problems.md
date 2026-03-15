 1. Typography Has No Tension

  Jost is a safe, geometric sans-serif. It's fine. But "fine" is the problem. You're using it the
  way everyone uses it — heading, subheading, body, label — all following the same predictable
  hierarchy. There's no contrast, no surprise.

  - Hero title at 48px, subtitle at 24px, body at 15px — this is the default typographic scale
  every template uses. It communicates nothing about you.
  - Every text element uses the same font family with only weight changes. No interplay between
  serif/sans, no mono used meaningfully (DM Mono is loaded but barely appears).
  - Letter-spacing at -0.03em on headings is the most generic "modern" move in web design right
  now.

  What's missing: A typographic voice. Parsons-trained designers use type as the design, not as a
  vessel for content. Consider: one typeface used at extreme scales, or mixing a sharp grotesque
  with a humanist serif, or letting DM Mono carry real weight in the layout.

  ---
  2. The Stats Are Shouting the Same Thing Three Times

  $1.8M — hero description
  $1.8M — hero stats bar
  $1.8M — project card

  The ~85% accuracy and $1.8M recovered appear in the hero text, the stats strip, and the project
  cards below. By the time someone scrolls past the fold, they've seen these numbers three times.
  This doesn't reinforce — it dilutes. It makes every section feel like it's competing to say the
  same thing.

  The avant-garde move: Say it once, with conviction. If $1.8M matters, make it enormous and
  singular. Don't hedge by repeating it everywhere. The repetition reveals insecurity, not
  emphasis.

  ---
  3. The Hero Is Doing Too Much

  Your hero has:
  - A label ("AI Engineer")
  - A title
  - A subtitle
  - Two description paragraphs
  - A stats bar with three items

  That's six distinct text blocks before any real content. This is the opposite of minimalism.
  You're front-loading every credential because you don't trust the rest of the page to carry the
  story.

  Compare to actual minimal portfolio heroes: one line, maybe two. The confidence is in what's not
  said.

  ---
  4. Every Project Card Is Identical

  All three cards use the exact same structure: number, title, tagline, two impact metrics, "View
  case study →". The grid is flex-direction: column with equal padding and identical spacing.
  There's no hierarchy between projects — nothing signals which one you're most proud of or which
  one the viewer should click first.

  The generic pattern: Equal cards in a stack is a product listing, not a portfolio. It says "here
  are things" instead of "here is what I want you to see."

  ---
  5. The CSS Spacing System Is Mechanical, Not Rhythmic

  Your spacing scale (4, 6, 8, 12, 14, 16, 20, 24, 28, 32, 40, 56, 64, 80, 96px) is thorough but
  produces a metronomic layout. Everything is evenly distributed. There's no breathing room
  followed by compression, no visual syncopation.

  Good minimal design uses asymmetric whitespace — generous emptiness in one area creates tension
  against tighter groupings elsewhere. Your layout is uniformly padded, which reads as "Bootstrap
  with custom colors."

  ---
  6. Color Palette Is Non-Committal

  #fafafa background, #0a0a0a text, #525252/#737373/#a3a3a3 for hierarchy. This is literally the
  Tailwind neutral palette. There's no accent, no warmth, no coldness — no opinion. You defined
  --color-accent: #0a0a0a which is... the same as your text color. That's not an accent, that's an
  absence of one.

  Even within strict monochrome, there are choices: warm grays vs. cool grays, blue-blacks vs.
  brown-blacks. Your palette makes no such choice.

  ---
  7. The "Section Label" Pattern Is a Crutch

  <p class="section-label">Featured Work</p>

  10px uppercase tracking at 0.1em in faint gray. This is the single most overused pattern in
  contemporary web design. It's on every SaaS landing page and every "minimal" portfolio template.
  It signals "I followed a tutorial" more than any other element.

  ---
  8. No Spatial Personality

  - --max-width: 800px — standard blog width
  - --radius-xl: 16px — standard card radius
  - Cards with 1px solid #e5e5e5 borders — standard card treatment
  - backdrop-filter: blur(10px) nav — standard glassmorphism

  None of these are wrong, but together they produce a site that could belong to anyone. Where's
  the decision that makes someone remember this layout?

  ---
  What Would Give It Character

  Without prescribing a specific direction, the site needs:

  1. One strong typographic decision — not three safe ones
  2. Information hierarchy through layout, not repetition — say each thing once, in the right place
  3. Asymmetry somewhere — break the grid intentionally
  4. A hero that trusts the viewer — cut it by 60%
  5. Project cards that aren't equal — feature one, list the others differently
  6. Whitespace used as a design element, not just padding between boxes

  The site currently communicates competence. It doesn't communicate taste. For a portfolio, that
  distinction matters.