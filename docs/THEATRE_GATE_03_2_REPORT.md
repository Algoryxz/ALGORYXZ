# ALGORYXZ Theatre — Gate 03.2 Report

## 1. Starting Git provenance

- Branch: `feature/theatre-cinematic-proof`
- HEAD: `b1a27e2b270b23fcb117cc48afe3c57ef985e5b7`
- Starting commit: `b1a27e2 feat(theatre): build physical seat archive and cinematic projection`
- Starting working tree: pre-existing Gate 03.1 edits in `src/pages/work/theatre.astro` and `src/styles/theatre-cinematic.css`; Gate 03.1 plan and screenshot evidence were untracked. These inputs were preserved and not reset, discarded, or reformatted away.

## 2. Exact files changed

- `src/pages/work/theatre.astro`
- `src/styles/theatre-cinematic.css`
- `design/theatre-gate-03-2/*.png` (new evidence only)
- `docs/THEATRE_GATE_03_2_REPORT.md`

## 3. Auditorium architecture changes

The desktop stage is now a single measured 100dvh composition. The screen, raked seating bank, lodge terrace, foreground silhouettes, side-wall recesses, and room-darkness all share one frame. CSS floor planes and converging perspective lines establish a room rather than a project-card rail.

## 4. Regular-seat anatomy changes

The five existing positions and IDs are preserved: C1/003, A2/001, B3/000, A4/002, and C4/005. Each has a widened upholstered back, barrel top roll, side bolsters, a reduced mounted artifact slot, visible lower seat pan, and a central floor stanchion. The middle seat remains compositionally prominent while outer seats sit deeper/smaller on the rake.

## 5. Premium-lodge anatomy changes

The rear lodge is a paired row of physical oxblood armchairs. The interactive client seat has a wider body, deep seat pan, substantial arms, warm leather/brass edge treatment, illuminated reading-lamp behavior, and a small bronze service table with a programme. The Patron Lodge shares the chair anatomy but remains darker and unavailable. The existing client copy remains a restrained invitation inside the chair.

## 6. Floor / riser / aisle changes

Three stepped risers, a center aisle with two low brass edge strips, under-seat darkness, architectural side recesses, and subtle floor perspective lines are CSS-only. No 3D model or external geometry was added.

## 7. Lighting changes

Existing projector-beam and dust behavior are unchanged. Hover/focus/click still wakes the beam. The lodge reading light now also activates its associated service-table lamp while leaving both lights off at rest. There is no permanent neon outline.

## 8. Programme changes

None to its information architecture. It remains the existing accessible printed folio/drawer.

## 9. Desktop stage / scrollbar decision

Decision: use a 100dvh desktop stage. At 1440×900, 1280×800, and 1024×768, the measured document scroll height equals the client height, so no vertical scroll is required and no controls are clipped. Mobile keeps its pre-existing auto-height/scrolled fallback.

## 10. Interaction preservation

Authentic local-browser hover, click, focus, and keyboard states were captured for 000, 001, 002, and the premium lodge. Clicking 001 set its seat `aria-selected=true` and activated `#slide-001`; clicking the lodge did the same for `#slide-LODGE`. Programme open/close and Escape close behavior were retained.

## 11. Accessibility results

- Keyboard order: skip link → work archive → Programme → screen CTA → 001 → 000 → 002 → premium lodge.
- Reserved chairs remain disabled and do not add unusable tab stops.
- Visible brass focus states exist for seat and lodge controls.
- `prefers-reduced-motion: reduce` capture completed; spatial transforms/transitions collapse while the selected state remains legible.

## 12. Performance implications

The physicality pass uses only DOM, pseudo-elements, gradients, box-shadows, and existing SVG/images. No external assets, textures, runtime libraries, post-processing, or high-poly geometry were introduced. The production build retains a pre-existing warning for the 746.88 kB minified Three.js chunk; Gate 03.2 did not add a new chunk.

## 13. QA results

| Check | Result |
| --- | --- |
| `npm run lint` | Pass |
| `npm run typecheck` | Pass — 0 errors, 0 warnings, 0 hints |
| `npm run build` | Pass — 13 static pages, including `/work/theatre/` |
| Browser console errors | None |
| Loaded local assets | 42 observed, no failed GET responses |
| Desktop horizontal overflow | None at all required viewports |
| Blur review | Pass: screen, raked regular seating, premium lodge and centre aisle remain spatially legible without readable labels/artwork |

## 14. Overflow measurements

| Viewport | `scrollWidth` | `clientWidth` | `scrollHeight` | `clientHeight` |
| --- | ---: | ---: | ---: | ---: |
| 1440×900 | 1440 | 1440 | 900 | 900 |
| 1280×800 | 1280 | 1280 | 800 | 800 |
| 1024×768 | 1024 | 1024 | 768 | 768 |

## 15. Screenshot registry

All evidence is new and isolated in `design/theatre-gate-03-2/`:

1. `01-desktop-rest-1440.png`
2. `02-desktop-rest-1280.png`
3. `03-desktop-rest-1024.png`
4. `04-desktop-hover-000.png`
5. `05-desktop-hover-001.png`
6. `06-desktop-hover-002.png`
7. `07-desktop-premium-rest.png`
8. `08-desktop-premium-hover.png`
9. `09-desktop-premium-selected.png`
10. `10-desktop-programme-open.png`
11. `11-desktop-keyboard-seat-focus.png`
12. `12-desktop-keyboard-premium-focus.png`
13. `13-desktop-reduced-motion.png`
14. `14-desktop-architecture-blur-test.png` — review-only temporary blur styling was removed immediately after capture and was never committed to source.

## 16. Known remaining issues

- Mobile is intentionally deferred and retains its prior fallback rather than receiving a new composition.
- The separate Three.js build-chunk warning remains a broader project optimization item; it is not introduced by this CSS/markup gate.
- Human visual acceptance is still required for the art-direction gate.

## 17. Scope attestations

- Canonical `/work` implementation touched: **No** (`src/pages/work/index.astro` untouched).
- Canonical project data touched: **No**.
- `main` touched: **No**.
- External asset introduced: **No**.
- Commit made: **No**.
