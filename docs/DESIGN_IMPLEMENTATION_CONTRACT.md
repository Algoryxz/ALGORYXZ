# DESIGN IMPLEMENTATION CONTRACT (ENGINEERING INTERFACE)

**Status:** Wave 0 Baseline Interface  
**Owner:** Deeptiman (Design & Art Direction)  
**Consumer:** Smarak (Engineering) & AI Coding Agents  

> **CRITICAL NOTICE FOR AGENTS & DEVELOPERS:**  
> This contract defines the *interface requirements* that engineering needs from design. It does NOT establish final brand choices (fonts, brand colors, imagery) for Algoryxz. The initial CSS tokens provided in Wave 0 are **temporary neutral development tokens** designed solely to test layouts and semantics. Deeptiman will provide the definitive brand identity in Wave 1. Placeholders must never be mistaken for approved brand decisions.

---

## 1. Design-to-Engineering Workflow
All visual design implementations must follow this strict sequence:

```
[DEEPTIMAN: ART DIRECTION]
            │
            ▼
[3-TIER DESIGN TOKENS DEFINED] (Primitive ──► Semantic ──► Component)
            │
            ▼
[COMPONENT STATES & SPECS] (Default, Hover, Focus, Active, Disabled, Loading)
            │
            ▼
[MOTION & EASING RULES] (Durations, Curves, Reduced-Motion fallbacks)
            │
            ▼
[SMARAK / AGENT IMPLEMENTATION] (Clean Vanilla CSS referencing tokens)
            │
            ▼
[AKRITI MOBILE QA GATE] (Real iOS & Android physical devices)
            │
            ▼
[DEEPTIMAN VISUAL ACCEPTANCE SIGN-OFF]
```

---

## 2. Required Design System Tokens

Engineering requires Deeptiman to supply tokens across three distinct tiers:

### Tier 1: Primitive Tokens (Raw Scales)
* **Palette:** Base color values (neutrals, accents, tints, shades).
* **Font Families:** Heading font, body sans-serif font, monospace / code font.
* **Font Sizes:** Step scale (`--font-size-xs` to `--font-size-4xl`).
* **Font Weights:** Regular (400), Medium (500), Semibold (600), Bold (700).
* **Line Heights:** Tight (1.1–1.2), Snug (1.35), Normal (1.5), Relaxed (1.75).
* **Spacing Scale:** 4px/8px baseline grid (`--space-1` = 4px, `--space-2` = 8px, `--space-4` = 16px, up to `--space-24` = 96px).
* **Border Radii:** None (0px), Subtle (4px), Card (8px), Pill (9999px). *(Avoid generic over-rounded bubbly borders).*
* **Shadows / Elevation:** Subtle, Card, Overlay elevations.

### Tier 2: Semantic Tokens (Application Meanings)
Engineering components must consume *semantic* tokens rather than raw primitives:
* `--color-bg-canvas`: Default page background.
* `--color-bg-surface`: Secondary surface background (sections, cards).
* `--color-bg-surface-elevated`: Flyouts, drawers, modals.
* `--color-text-primary`: High-contrast body and heading text.
* `--color-text-secondary`: Supporting descriptions, metadata, timestamps.
* `--color-text-muted`: Captions, inactive elements, borders.
* `--color-accent-primary`: Primary interactive accent.
* `--color-border-subtle`: Dividers, structural hairpins, card outlines.
* `--color-focus-ring`: High-visibility keyboard focus outline.

### Tier 3: Component Tokens
* Scoped tokens for buttons, navigation links, portfolio item tiles, and form inputs.

---

## 3. Responsive Breakpoints & Viewport Grid

The layout grid must support five standard viewport classes:

| Viewport | Min Width | Max Width | Target Device Class | Column Grid | Container Max Width |
|---|---|---|---|---|---|
| **Mobile S/M** | 320px | 479px | Compact phones | 4 columns | 100% (16px padding) |
| **Mobile L / Phablet** | 480px | 767px | Standard smartphones | 4 columns | 100% (20px padding) |
| **Tablet** | 768px | 1023px | iPads, tablets | 8 columns | 720px |
| **Desktop** | 1024px | 1439px | Laptops, desktop monitors | 12 columns | 1080px |
| **Wide Desktop** | 1440px | — | Large displays | 12 columns | 1280px |

### Responsive Rules
* **No horizontal scrollbars:** Zero viewport overflow at any width between 320px and 2560px.
* **Fluid typography:** Headlines should scale smoothly using `clamp()` between mobile and desktop sizes.
* **Touch target size:** All interactive targets (buttons, links, drawer toggles) must maintain a minimum physical touch footprint of **44×44px** on mobile viewports.

---

## 4. Component States & Interaction Standards

Every interactive element (button, link, input, card) must provide explicit visual definitions for all standard states:
1. **Default:** Baseline appearance resting on canvas.
2. **Hover (pointer devices only):** Clear, tasteful indication without layout shifting. Must be wrapped in `@media (hover: hover)`.
3. **Focus Visible (keyboard navigation):** High-contrast focus ring (minimum 2px with 2px offset). Never suppressed with `outline: none` unless a custom accessible replacement is active.
4. **Active / Pressed:** Subtle scale or color depression confirming activation.
5. **Disabled:** Reduced opacity (0.5), non-interactive cursor (`cursor: not-allowed`), aria-disabled.
6. **Loading:** Accessible spinner or subtle pulse; element remains stable without size changes.

---

## 5. Motion Rules & Reduced Motion

Algoryxz websites emphasize high-craft, cinematic micro-motion without lag:
* **Micro-interactions:** 150ms – 250ms duration using natural easing (`cubic-bezier(0.16, 1, 0.3, 1)`).
* **Page Transitions / Section Entrances:** 300ms – 500ms duration.
* **No Motion Sickness:** Avoid large oscillating transforms or full-page spinning effects.
* **Mandatory Reduced-Motion Support:**
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
  ```
  When reduced motion is requested, all animations and transitions must immediately collapse to zero duration while preserving layout integrity.

---

## 6. Image & Asset Treatment

* **Aspect Ratios:** Explicitly declared (`aspect-ratio: 16/9`, `4/3`, `1/1`) to eliminate Cumulative Layout Shift (CLS).
* **Responsive Images:** Proper `srcset` and `sizes` attributes for responsive delivery.
* **Lazy Loading:** `loading="lazy"` on below-the-fold assets, `loading="eager"` and `fetchpriority="high"` on hero visuals.
* **Anti-Vibe-Code Aesthetics:** No generic stock photography, no low-effort AI art dumps. In Wave 0, neutral structural wireframes and explicit SVG placeholders are used.

---

## 7. Placeholder Tracking & Wave 1 Handoff

In Wave 0, the following neutral development tokens are active in `src/styles/tokens.css`:
* `[DESIGN_PLACEHOLDER: COLOR_PALETTE]` — Monochromatic neutral dark/light baseline.
* `[DESIGN_PLACEHOLDER: TYPOGRAPHY]` — System font stack (`system-ui, -apple-system, sans-serif`).
* `[DESIGN_PLACEHOLDER: HERO_MEDIA]` — Structural wireframe graphic.

Deeptiman will replace these with the production brand system in Wave 1.
