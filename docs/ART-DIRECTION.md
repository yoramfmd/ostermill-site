# Ostermill site · art direction v1

2026-08-19. Replaces the default-kit look of the first mocks (Yoram's verdict: Claude
signature all over them). The rule from here: no beige paper, no Georgia headings, no
hairline gray rules, no decorative italics on diegetic surfaces. Every visual decision
derives from the fiction: a Midwest industrial distributor whose design language grew out
of its printed parts catalog, not out of the web.

## The premise

Ostermill's identity is CATALOG HERITAGE. The 1960s parts catalog, the will-call counter
signage, the carbon-copy invoice. Modernized the way real distributors modernize: cleanly,
cheaply, without a brand agency. Reference class: McMaster-Carr's utilitarian catalog
clarity, mid-century industrial suppliers, DIN-adjacent signage. The site should feel like
a company that thinks a spec table IS good design, and is right.

## Tokens

- Ink: #111418 (near-black, used heavily; this identity is dark-on-light, high contrast)
- Safety yellow: #F5B700 (the accent; counters, tags, the will-call stripe)
- Depot green: #1E4D3B (secondary; headers, stamps)
- White: #FFFFFF ground everywhere. NO cream, NO beige.
- Paper gray: #EFF1F2 only for form fields and table stripes.
- Danger red #B3261E reserved: the case file uses it for revocations only.

Type (webfonts, self-hosted at build):
- Headlines: Archivo Black or Oswald, uppercase, tight, like stencil signage.
- Body: Archivo or IBM Plex Sans, never justified.
- Data, part numbers, paperwork: IBM Plex Mono. Part-number chips (OSM-4471-B) are a
  recurring motif; invoices, accounts, and exhibits all carry them.
- NO serifs on diegetic surfaces. NO italics except scrawled-annotation graphics.

Structure:
- Rules are THICK: 3-4px ink borders, table headers as solid ink bars with white or
  yellow type. Hairlines only inside dense tables.
- The spec table is the hero component, used proudly and often.
- Texture: subtle halftone/print artifacts allowed in heroes; flat elsewhere.
- Corners square. Nothing rounded except stamps.

## Surface treatments

- **Corporate site:** catalog-modern. Yellow will-call band, ink headline blocks, product
  families as catalog index cards with part-number ranges. The history strip as a printed
  timeline, not a web timeline.
- **Internal systems:** a different, deliberately dated skin: mid-2010s enterprise ERP
  (the 2014 rollout): gray chrome, dense grids, small type, Windows-era controls. The
  approval screen is the exception: it looks newer than everything around it, because
  Priya built it this year. That contrast is storytelling.
- **Paperwork exhibits:** carbon-copy and memo aesthetics: mono type, form boxes, stamp
  marks (RECEIVED, SUSPENDED, RESTORED in depot green / danger red), signature lines.
- **The chrome (apparatus):** stays the book's world BUT redesigned as an EVIDENCE TAG:
  ink bar with a yellow-black hazard-stripe edge, mono type, tag number per page
  (CF-014). Distinct from both the corporate skin and any Claude default.
- **Persona cards:** Dana would have used a template; hers is the company's: the cards
  render as catalog spec sheets for people. The affected-person card's empty slots read
  as VOID stamps on a form, which is stronger than hatched gray.

## Portraits (Phase 1 gate)

Illustrated, one consistent style across five people: think mid-century catalog line
art or engraved-portrait style, ink on white with a single yellow accent. Never
photoreal. Disclosure line under each.

## v1.1 · the genre correction (2026-08-19, after Yoram's reference set)

Reference set supplied: Motion Industries, SunSource, Grainger. The corporate surface
follows THE DISTRIBUTOR GENRE, played straight:

1. Search-first header: logo left, a wide "search by product name or part number" bar
   center, account/cart right, phone and support in a topline. This is the genre's
   defining element and v2 lacked it.
2. Category card grids with product imagery, an "industries we serve" row, value-prop
   cards, a stats band. White ground, light gray card borders, generous photography
   slots.
3. ONE accent color at roughly five percent coverage: logo mark, section-heading
   underline bars, the search button, small highlights. Never bands, never stripes,
   never large fills. The v2 hazard stripes and yellow bands are retired; yellow survives
   as the accent at genre dosage.
4. Condensed uppercase section headings with the short accent underline (the Motion
   pattern) replace decorative headline treatments.
5. Thick 3-4px rules are hereby RESERVED for print-flavored surfaces: exhibits, persona
   spec sheets, paperwork. Web-commerce surfaces use the genre's light borders.
6. The chrome calms down: plain ink bar, small yellow tag chip (CF-001), mono type. The
   hazard-stripe edge is retired everywhere.
7. Imagery: LINE DRAWINGS, never photographs, anywhere on the site (Yoram, 2026-08-19:
   "use drawing and not real images to emphasize its a composite scenario"). Products,
   places, and people are all drawn, in one consistent style: catalog-plate line art,
   ink strokes on the light gray ground, at most one small yellow accent per drawing.
   This extends the illustrated-people rule to the whole visual world, and it is a
   disclosure device: a drawn world reads as designed, which Ostermill is. Inline SVG
   preferred (crisp, themable, no asset pipeline).

## Process rule

Exploration (logo, hero art, portrait style) may use the Design tooling / Gamma to
generate candidates at the Phase 1 gate; Yoram picks. But candidates are judged against
THIS document, and the tokens above are the law the site's CSS enforces. Defaults are
decisions made by someone else; this file is ours.
