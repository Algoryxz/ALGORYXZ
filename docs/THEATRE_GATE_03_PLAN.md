# ALGORYXZ THEATRE — GATE 03 IMPLEMENTATION PLAN
## PHYSICAL SEAT SILHOUETTES, PROJECT-MATERIAL MOUNTS, CINEMATIC PROJECTION & PREMIUM LODGE

**Status:** Implementation Contract (Gate 03)  
**Author:** Antigravity (Engineering Architecture)  
**Branch:** `feature/theatre-cinematic-proof`  
**Route:** `/work/theatre` (strictly isolated; canonical `/work` remains untouched)  
**Baseline HEAD SHA:** `f2660d674d3e9a074499b42ec67e8d8cf591ce19`  

---

## 1. REPOSITORY FORENSICS & RECOVERY PROVENANCE

- **Current Branch:** `feature/theatre-cinematic-proof`
- **Current HEAD SHA:** `f2660d674d3e9a074499b42ec67e8d8cf591ce19`
- **Main SHA:** `a83a3cfc3d500a4e616af595bb95928f246b3cc1`
- **Origin/Main SHA:** `bdfe97b62aa17f396e3e7c0f9b8ae14f84f30f02`
- **Working Tree:** Clean.
- **Canonical Preservation Check:**
  - `src/pages/work/index.astro` is 100% untouched.
  - `src/data/projects.ts` is 100% untouched.
  - Canonical navigation is untouched.
  - No Three.js or WebGL dependencies introduced.
  - No background audio, no video autoplay.

---

## 2. PROBLEM STATEMENT & GATE 03 CORE THESIS

Gate 02 proved the spatial scroll mechanics and auditorium layering, but visually the interface still read like a website card grid with cinema lighting. 

**Gate 03 Thesis:**
1. **ALGORYXZ IS THE THEATRE. PROJECTS ARE THE FILMS.**
2. **ALGORYXZ = STRUCTURE. PROJECT = MATERIAL.**
3. If all text is stripped away:
   - The seating must still be unmistakably recognized as **cinema chairs**.
   - The mounted artifacts must visibly reveal the **project worlds** (architecture fold, wedding photo folio, roastery paper specimen).
   - The screen must read as a **living projection poster**, not a website hero card.
   - The rear lodge must be **physical premium lounge seating**, not a CTA banner.

---

## 3. COMPREHENSIVE ARCHITECTURAL DESIGN

### A. Seat Silhouette Architecture
- **Rejecting the Rectangle:** Cinema chairs are not rounded rectangles. They have an unmistakable physical profile:
  - **Curved Upholstered Top Roll:** Distinct headrest crest rail with top light highlight.
  - **Shoulder Taper & Bolsters:** Lateral contouring with padded side wings.
  - **Recessed Central Back:** Channel-tufted inner fabric panel.
  - **Lower Narrowing & Underside Shadow:** Tapers down towards base stanchions with deep floor contact shadow.
  - **Dimensional Edge:** Subtle piping and highlight catching projector bounce.
  - **Brass Plaque:** Tiny stamped brass seat identifier (`000 · B3`, `001 · A2`, `002 · A4`, `RESERVED · 003`).

### B. Mounted Project Material Architecture
The project does not live in a title card. The project physically alters what is attached to the chair back:
1. **000 (Algoryxz Studio Platform):**
   - Architectural specimen plate attached to graphite upholstery.
   - Precision geometric XZ folded form (`/assets/structure.svg`), etched coordinate rules, restrained bronze edge.
2. **001 (Courtyard Wedding):**
   - Archival photographic folio fragment mounted on warm upholstery.
   - Actual wedding photograph (`/assets/lab/monsoon_vows_memory.jpg`), visible deckle paper edge, subtle drop-shadow, brass mounting tabs.
3. **002 (Bhubaneswar Artisan Roastery):**
   - Pressed olive paper specimen (`#2b3323`), bold `FORM FOLLOWS FEELING` typography specimen, burnt orange craft strip, textured paper layers.
4. **Reserved Seats (003–006):**
   - Dark ribbed charcoal fabric chair back with patinated brass plate stamped `RESERVED`. No fictional project text.

### C. Projection Redesign (Living Poster / Film Frame)
- Remove the website hero pattern (no side-by-side title/paragraph/button card).
- Screen becomes a 16:9 projection surface where **artwork dominates** and interface recedes:
  - **Slide 000:** Monumental XZ architectural form emerging from darkness with projector beam interaction, minimal colophon `NOW SCREENING · 000`, `ALGORYXZ STUDIO PLATFORM`, and `ENTER PROJECT ↗`.
  - **Slide 001:** Full-bleed cinematic courtyard wedding imagery with gentle ambient light, deckle photo framing, minimal editorial serif title, and `ENTER PROJECT ↗`.
  - **Slide 002:** Monumental typographic design specimen with `FORM FOLLOWS FEELING.` commanding the frame, roastery graphics, and `ENTER PROJECT ↗`.
  - **Slide LODGE:** When the empty premium seat is selected, screen switches to `NOW SCREENING · NEXT COMMISSION`, `YOUR PROJECT COULD SCREEN HERE.`, `The best seat in the house is still empty. Bring the idea. We'll build the world around it.`, and `START A PROJECT ↗` (links to `/contact`).

### D. Premium Rear Lodge Redesign (Physical Lounge Seating, NOT a Banner)
- Complete removal of the horizontal `.theatre-lodge-banquette` banner.
- Replacement with **physical oversized oxblood lounge chairs**:
  - Sculpted oxblood velvet backrests (`#4A1512` to `#240B09`), wide arm bolsters, brass structural trim.
  - 2 side-by-side premium seats:
    - Left chair: Reserved patron seat with soft amber glow.
    - Right chair: **The Empty Commission Seat**, with a physical brass/ivory card attached: `RESERVED FOR WHAT'S NEXT`.
  - Selecting/focusing the empty chair dims the surrounding auditorium, warms the seat's accent sconce, pulses the projector beam, and illuminates the main screen with the client invitation.

### E. Spatial / Scroll Depth & Foreground Occlusion
- Three distinct depth planes in the auditorium:
  - **Plane 1 (Distant):** Subdued row of chair silhouettes receding into darkness.
  - **Plane 2 (Middle Archive):** The active project seats (A2, B3, A4) and reserved seats (C1, C4).
  - **Plane 3 (Foreground Framing):** Oversized chair silhouettes in the immediate foreground flanking the aisle. As the user scrolls, foreground seats create authentic spatial parallax and partial edge occlusion, giving the distinct sensation of walking down a raked cinema aisle.

### F. Mobile First-Person Aisle Composition
- Mobile avoids the trap of becoming a generic vertical list of cards.
- Viewport features:
  - Fixed cinema projection screen at top.
  - Below: A central aisle where individual, full-width physical cinema chairs approach and pass one by one as the user scrolls.
  - Designed specifically for 390×844 and 320×568 without horizontal overflow.

### G. Accessibility & Reduced Motion
- All interactive seats are keyboard accessible (`<button>`) with clear ARIA attributes (`aria-selected`, `aria-controls`, `aria-label`).
- Empty premium seat clearly announced: `"Start a project — reserved premium seat"`.
- Printed Programme drawer remains an accessible directory.
- `prefers-reduced-motion`: Instantly disables transform scale/parallax, maintains layout stability, and allows instantaneous screening switches.

### H. Desktop Horizontal Overflow Bug Elimination
- Systematically audit all containers.
- Avoid `100vw` inside scroll containers; enforce strict `width: 100%`, `box-sizing: border-box`, and prevent unconstrained transform origins.
- Measure and record `scrollWidth === clientWidth` across:
  - 1440×900
  - 1280×800
  - 1024×768
  - 390×844
  - 375×812
  - 320×568

---

## 4. VERIFICATION GATES & SCREENSHOT REGISTRY

15 target screenshots will be captured into `design/theatre-cinematic-proof/`:
1. `01-auditorium-establishing`
2. `02-project-000-seat`
3. `03-project-001-seat`
4. `04-project-002-seat`
5. `05-foreground-occlusion`
6. `06-premium-lodge-reveal`
7. `07-your-project-screen`
8. `08-programme-drawer`
9. `09-mobile-390-project-seat`
10. `10-mobile-390-premium-seat`
11. `11-mobile-320`
12. `12-desktop-1280`
13. `13-reduced-motion`
14. `14-focus-project-seat`
15. `15-focus-premium-seat`

All 8 visual acceptance questions will be answered strictly from visual evidence.
