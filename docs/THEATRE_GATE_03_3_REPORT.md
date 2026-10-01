# ALGORYXZ Theatre — Gate 03.3 Report

## 1. Starting Git provenance

- Branch: `feature/theatre-cinematic-proof`
- HEAD: `b1a27e2b270b23fcb117cc48afe3c57ef985e5b7`
- Current commit: `b1a27e2 feat(theatre): build physical seat archive and cinematic projection`
- No branch switch, merge, commit, push, or deployment occurred during this gate.

## 2. Exact pre-existing working-tree state

Before edits, the tracked modifications were `src/pages/work/theatre.astro` and `src/styles/theatre-cinematic.css`. The untracked inputs were the 15 existing Gate 03.1 screenshots in `design/theatre-cinematic-proof/`, the full Gate 03.2 evidence directory, `docs/THEATRE_GATE_03_1_PLAN.md`, and `docs/THEATRE_GATE_03_2_REPORT.md`. All were retained without reset, stash, discard, or unrelated reformatting.

## 3. Exact files changed

- `src/pages/work/theatre.astro`
- `src/styles/theatre-cinematic.css`
- `design/theatre-gate-03-3/*.png` (new Gate 03.3 evidence only)
- `docs/THEATRE_GATE_03_3_REPORT.md`

## 4. Regular-seat anatomy changes

The five accepted positions, IDs, and interaction targets remain unchanged. The seats now have a larger upholstered back mass, broader vertical arm bolsters, a taller/clearer lower seat cushion, expanded centre stanchion, upper screen-spill edge treatment, and deeper contact shadows. These changes make the chair silhouette precede the mounted project material.

## 5. Project-artifact / aperture changes

Artifact apertures were reduced to 62% of the chair width and 32px tall, set into a darker recessed frame with a restrained brass lower edge. Artifact typography and imagery were proportionally reduced inside the aperture. Project identity remains visible and interactive, but no longer establishes the external chair silhouette.

## 6. Auditorium lighting / depth changes

The room remains dark. Readability comes from local material cues only: faint warm top-edge screen spill, slightly clearer arm/cushion highlights, deeper under-seat contact shadow, and retained brass aisle/riser lines. The accepted room geometry, screen dominance, centre aisle, floor/riser arrangement, side walls, foreground silhouettes, and 100dvh frame were not rebuilt.

## 7. Premium physical-object changes

The interactive lodge invitation is no longer styled as an embedded oxblood panel. It is an ecru printed reservation folio, angled on the client seat, with paper grain, corner rule, folded-corner cue, visible thickness/border, and a cast shadow. Hover, focus, and selected states brighten/lift that physical folio in step with the existing conditional reading lamp. The adjacent Patron Lodge now uses a quieter plaque treatment; the paired-lodge relationship, service table, lamp, arms, seat pan, and selection behavior remain intact.

## 8. Intentionally not changed

- Projection screen, slides, content, project IDs, seat IDs, CTAs, projector beam/dust, programme information architecture, and existing selection logic.
- Canonical `/work`, canonical project data, deployment/configuration, external assets, dependencies, Three.js setup, mobile composition, and the broader desktop architecture.

## 9. Interaction preservation

Authentic local-browser hover evidence was captured for 000, 001, and 002. Click verification showed 001 updates its seat to `aria-selected=true` and activates `#slide-001`; the premium lodge does the same for `#slide-LODGE`. Programme open/close and Escape close behavior were retained.

## 10. Accessibility results

- Keyboard sequence verified: skip link → work archive → Programme → screen CTA → 001 → 000 → 002 → premium lodge.
- Reserved seats remain disabled and absent from the usable tab sequence.
- Visible focus styles remain on regular and premium seats.
- The interactive folio remains inside the existing accessible premium-seat button; it does not create a duplicate tab stop.

## 11. Reduced-motion results

The `prefers-reduced-motion: reduce` capture was completed. Existing reduced-motion rules collapse transforms/transitions while leaving state and content available.

## 12. Performance implications

The pass uses existing DOM, CSS, pseudo-elements, gradients, borders, and shadows only. No new assets, models, post-processing, runtime libraries, or dependencies were introduced. The existing 746.88 kB minified Three.js chunk warning remains unchanged and was not addressed in this gate.

## 13. Lint / typecheck / build results

| Command | Result |
| --- | --- |
| `npm run lint` | Pass |
| `npm run typecheck` | Pass — 0 errors, 0 warnings, 0 hints |
| `npm run build` | Pass — 13 static routes, including `/work/theatre/` |

## 14. Console / network results

- Local browser console errors: none.
- Observed local resources: 42.
- Failed local GET responses: none.

## 15. Overflow measurements

| Viewport | `scrollWidth` | `clientWidth` | `scrollHeight` | `clientHeight` |
| --- | ---: | ---: | ---: | ---: |
| 1440×900 | 1440 | 1440 | 900 | 900 |
| 1280×800 | 1280 | 1280 | 800 | 800 |
| 1024×768 | 1024 | 1024 | 768 | 768 |

No horizontal or vertical overflow was measured at the required desktop targets.

## 16. Screenshot registry

All new evidence is isolated in `design/theatre-gate-03-3/`:

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
14. `14-desktop-architecture-blur-test.png`
15. `15-desktop-seat-detail.png`
16. `16-desktop-premium-object-detail.png`

The blur evidence used a temporary review-only style that was removed immediately after capture and is absent from production source.

## 17. Known remaining issues

- Mobile remains intentionally deferred.
- The conventional Programme drawer treatment remains intentionally deferred.
- The Three.js chunk-size warning is unchanged and outside this pass.
- The blur review supplies visual evidence; the human gate determines whether the material/spatial readability clears the intended standard.

## 18. Scope attestations

- Canonical `/work` touched: **No**.
- Canonical project data touched: **No**.
- `main` touched: **No**.
- External assets introduced: **No**.
- New dependencies introduced: **No**.
- Commit made: **No**.
- Push made: **No**.
- Deployment performed: **No**.
