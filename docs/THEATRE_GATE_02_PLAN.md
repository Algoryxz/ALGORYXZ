# ALGORYXZ THEATRE — GATE 02 IMPLEMENTATION PLAN
## 2.5D SPATIAL AUDITORIUM & PHYSICAL SEAT-BACK ARCHIVE

**Status:** Implementation Contract (Gate 02)  
**Author:** Antigravity (Engineering Architecture)  
**Branch:** `feature/theatre-cinematic-proof`  
**Route:** `/work/theatre` (strictly isolated; `/work` remains untouched)

---

## 1. FORENSICS & REPOSITORY STATE

- **Current Branch:** `feature/theatre-cinematic-proof`
- **HEAD Commit SHA:** `f736e9a4e1c00a9353de16fa50448b9f279a2daa`
- **Git Status:** Clean working tree.
- **Canonical Preservation Check:**
  - `src/pages/work/index.astro` is untouched.
  - `src/data/projects.ts` is untouched.
  - `src/components/Navigation.astro` does not link to `/work/theatre`.
- **Existing Asset Inventory:**
  - `public/assets/projects/000-hero.svg` (Algoryxz geometric structure)
  - `public/assets/projects/001-hero.svg` & `public/assets/lab/monsoon_vows_memory.jpg` (Courtyard wedding memory & photo)
  - `public/assets/projects/002-hero.svg` (Roastery graphic)
  - `public/assets/structure.svg` (Fold study)
  - `src/components/MaterialArtifact.astro` (Existing 3-material artifact generator)
- **Current Typography Sources:**
  - Display: `Playfair Display` (editorial serif)
  - Interface: `Hanken Grotesk` (clean Algoryxz sans)
  - Technical: `JetBrains Mono` (seat & status metadata only)

---

## 2. CORE ARCHITECTURAL PIVOT: FROM "WEBSITE CARD" TO "2.5D PHYSICAL SCREENING ROOM"

### 2.1 The Problem in Gate 01
In Gate 01, the screen looked like an elevated website modal, and the seats were small UI buttons underneath. It looked like a themed portfolio rather than looking into an authentic private screening room.

### 2.2 The Solution in Gate 02
1. **The Viewer's Perspective:**
   The viewer stands at the rear of a dark, raked auditorium looking forward and down toward the projection screen.
   - Distant Screen (recessed into proscenium arch)
   - Distant Seating Rows (smaller, darker, tighter)
   - Middle Seating Rows (holding the project seat-backs)
   - Foreground Seating Row & Central Aisle
   - Rear Premium Lodge (oxblood curved banquette, brass sconce lamp, empty seat invitation)
2. **The Seats LOOK LIKE PHYSICAL SEATS:**
   Constructed with layered CSS/SVG:
   - Curved upholstered backrest (ivory fabric `#F0E8D8` with radial gradient shading)
   - Side shoulders & top roll highlight
   - Dark walnut / aged bronze structural frame
   - Recessed mounting slot on the back of each active seat
   - Realistic cast drop-shadow onto the aisle floor
3. **Projects Mounted on Seat Backs:**
   Instead of abstract buttons, the seat back itself carries the physical project identity:
   - Seat B3 (`000`): Stitched graphite sleeve holding the `XZ` geometric fold plate with antique brass `000` plaque.
   - Seat A2 (`001`): Mounted parchment folio with monsoon wedding photo fragment and brass `001` plaque.
   - Seat A4 (`002`): Pressed olive paper menu specimen with `FORM FOLLOWS FEELING` typography and brass `002` plaque.
   - Seats C1, C2, C4, C5: Darkened charcoal fabric with blank brass plates stamped `RESERVED`.
4. **The Screen is a REAL Projection Surface:**
   - Framed by velvet black proscenium masking with soft inner vignette and projection light bounce.
   - Displays the projected project universe directly (full-bleed visual composition), with minimal cinematic overlay:
     `NOW SCREENING · [ID]`  
     `[PROJECT TITLE]`  
     `ENTER PROJECT ↗`
5. **Projector Beam (SVG Layer):**
   - Spans from viewer perspective toward the screen.
   - Subtle opacity and atmospheric dust specks.
   - Interaction triggers a gentle pulse of light through the beam.
6. **Scroll Choreography (0%–100%):**
   - 0–25%: Establishing shot (the full room with screen and all rows).
   - 25–65%: Aisle dolly (moving toward the active seat-back archive rows).
   - 65–85%: Focus on project seat-backs and active screening.
   - 85–100%: Rear lodge reveal with `YOUR PROJECT COULD SCREEN HERE` and `/contact` action.
7. **Mobile Portrait Cinema (390×844 & 320×568):**
   - Full-width tactile seat-backs arranged down the central aisle.
   - Touching any seat scrolls the screen and illuminates the seat-back artifact.

---

## 3. PROPOSED IMPLEMENTATION FILES

1. `docs/THEATRE_GATE_02_PLAN.md` (This document)
2. `src/styles/theatre-cinematic.css` (Rebuilt with 2.5D spatial perspective, SVG seat silhouettes, proscenium masking, and scroll choreography)
3. `src/pages/work/theatre.astro` (Rebuilt with spatial depth layers, physical seat-backs with mounted artwork, and projector beam SVG)
4. `src/data/theatre-projects.ts` (Updated with seat-back styling and editorial project copy)

Existing `/work` and `src/data/projects.ts` remain **100% untouched**.
