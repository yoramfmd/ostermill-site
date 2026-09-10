# Ostermill companion site · consolidated brief and plan · 2026-08-20

The current-state snapshot. SITE-PLAN-v1.md remains the append-only working document
and decision register; this brief is what you hand to a new session, or read yourself
in five minutes. Supersedes nothing; summarizes everything.

## The idea

The reader visits Ostermill. The book's designed composite becomes a place: the
company's own website, its people, its project, its paperwork, its agent, and its eval
bench, all built from the same canon as the book and launched with the Christmas print.
The site is the book's evidence made walkable, and it is itself a demonstration of the
discipline the book teaches: prototypes, a golden set, replayed runs, a decision
register, and scope run on the cumulative-diff rule.

## The design thesis

Two visual languages, and the seam between them is the disclosure. Diegetic surfaces
(Ostermill's site, its ERP, its paperwork) look like the company made them; the reader
chrome (phase bands, evidence tags, framework margins) looks like the book. Nothing
pretends; a CF-tag on every page says designed composite, and the drawn world says it
again: line drawings everywhere, never photographs.

## The seven surfaces (Yoram, 08-20) and where each stands

1. **Ostermill company site** — mock approved (index-v3.html): distributor genre,
   search-first header, line-art plates, yellow at 5%.
2. **Persona pages** — design-phase cards approved (persona-cards-v2.html, FORM PD-2
   paperwork skin). Full profiles pending under the NO-SPOILER RULE: profiles
   introduce people as of day one; the arc lives only in dated artifacts.
3. **The calendar** — mock approved (calendar.html): diegetic OsterNet ERP grid,
   chrome phase bar, five phases, ghost annotations on the incident days, the
   14-weeks bracket, linked plan of record (project-plan.html, FORM PM-1 with the
   revision log absorbing the kills).
4. **Meeting summaries** — 30-meeting canon register (MEETING-CALENDAR-CANON.md),
   every meeting implied by a canon event; popups in the fixed format Summary /
   Decisions / Actions / Attachments, attachments carrying exhibit letters A–K. Six
   full transcripts drafted (T1–T6 in site/transcripts/).
5. **Three prototypes, the chosen one running** — WIRED to golden + demo sets (prototypes.html): three
   shape cards with failure-presentation and dispositions, the stopping condition
   ("writes to more than three of the twelve protected accounts") met at exactly
   three, and the 26 March table re-fought: click a case, read all three outputs.
6. **The final agent on mock data** — not yet built. The loop walk over recorded
   trajectories; same data layer.
7. **The eval bench** — WIRED to the golden set (eval-simulator.html): all 12 graded
   cases, RUN samples ten runs per case from the recorded pools, pass@1 and pass^10 computed live, v1/v2/v3
   showing the fix loop and the regression, click-through case records with the
   two-pane data sample (inside vs outside retrieval scope), Ruth's adjudication, and
   per-version performance. This is the template workstream A fills.

Surfaces 5–7 are three views over ONE data layer, and the book's sync memo
(BOOK-CANON-SYNC-2026-08-20.md, rev-29 header) fixed its shape: THE TWENTY AND THE
TWELVE ARE DIFFERENT SETS. The twenty are the 26 March prototype cases (surfaces 5–6);
the graded twelve are nine observed from the twenty plus three constructed under GR-05
(surface 7). The JSON models provenance explicitly. Workstream A is the critical path
and is now UNGATED: the eval class table reconciles everything (4 routine 40/40 ·
3 signal-resolvable 24/30 · 3 adversarial 27/30 · 2 not-resolvable 12/20 = 103/120;
clean 8 = 4+2+2). Movement per case is canon, including the adversarial case that
does NOT recover: 9/10 → 7/10 → 7/10, shipped named rather than fixed.

## The laws (each in force, each with a register entry)

- **Concept-test standing order:** nothing built now is final; two-way reconciliation
  with the book once both mature; the book may absorb site findings.
- **Bible-first:** every fact from CASE-FILE-BIBLE.md; texture additions flagged ⊕ and
  queued for the bible before transcripts harden them.
- **Art direction v1.1:** distributor genre for the corporate skin, accent at ~5%,
  thick rules reserved for paperwork surfaces, line drawings never photos, dated ERP
  skin for internal systems, Priya's approval screen deliberately newer.
- **No-spoiler rule** for persona profiles.
- **Replay, not live:** recorded runs sampled in the browser; hybrid "ask the triager"
  door deferred to the Phase 4 gate.
- **D1 gag:** no year-one totals, payback periods, or cumulative fixed costs anywhere.
- **The clock (re-based 08-23 per the book):** eleven weeks memo-to-ship, sixteen demo-to-ship; the bracket reads "idea to production, 16 weeks · governance, ongoing"; the arc is about sixteen months; never a two-year build.
- **Summary format:** Summary / Decisions ("none taken" recorded plainly) / Actions
  with owners / Attachments.

## Built inventory (site/ and site/mock/)

ART-DIRECTION.md · SITE-PLAN-v1.md (registers) · MEETING-CALENDAR-CANON.md ·
TIMELINE-PLAN.md · this brief · transcripts/T1–T6 · mock/index-v3.html ·
mock/persona-cards-v2.html · mock/calendar.html · mock/project-plan.html ·
mock/eval-simulator.html. Plus the 08-20 bible additions (the six chairs, the unnamed
CFO, meeting texture, the clock).

## Canon workstreams

- **A · The golden set (critical path, UNGATED 08-23):** schema first, per the sync
  memo: provenance field (observed+source / constructed+rule), membership flags
  (twenty / graded-twelve / retired-eleven with reasons), class per the canon table,
  runs[10] per shape and eval version. Volume rule: every figure derives from Ruth's
  312/220; four-week production is 1,263 processed / 924 drafted / 33 rejected /
  891 sent / 339 walled (rev 29). 5 calibration cases live in the bench; 15 to write
  (7 more graded incl. the four dispute-adjacent write-off cases, 8 twenty-only).
  The book's blank graded-case appendix template is the same shape: the JSON and the
  downloadable artifact are one thing twice.
- **B · Personas:** five bios (day-one, no spoilers) + portraits in the site's drawn
  hand (the line-art decision likely settles the portrait-style gate).
- **C · Transcripts:** DRAFTED. Remaining: summaries for the ~24 non-transcript
  meetings; chrome framework tags wired in the two-column build.

## Phases to Christmas

- **Phase 1 · Evidence core (now, task #36):** everything above; remaining: golden set
  in full (A), persona profiles + portraits (B), meeting summaries (C), Ruth's profile
  re-skin. Gate: Yoram approves the language of every surface — largely passed.
- **Phase 2 · Systems replay:** the internal-systems skin (approval screen, queue,
  instruments), the prototypes page, the agent loop walk, the timeline slider, full
  calendar wiring, evidence graph (meeting ↔ exhibit ↔ transcript).
- **Phase 3 · Freeze:** canon freeze against the final book proof; regression pass of
  every number on every surface; the site decision register closed out.
- **Phase 4 · Launch:** subdomain on agenticaiproductmanagement.com, downloads live,
  hybrid-door decision, Christmas co-launch with the print edition.

## Open items, by owner

**Resolved by publication (the "Part Two at a glance" spread, book pp. 69–70, is now
the authoritative date spine):** B1 demo late February ✓, B2 five-rung ladder with the
refusal at rung 4 ✓, Design dates (briefs 22 Apr, approval screen 6 May) ✓, Prove
weeks 5–11 ✓, launch calm to 14 Jul ✓, incident 16–21 Jul / found 4 Aug / actions
11 Aug ✓. Sync sweep executed 08-20 across bible, T1/T2/T5, calendar, canon register,
timeline, and eval bench.

**Closed by the book's sync memo (08-20/23):** B4 retired: the old Exhibit G counts
were withdrawn as fabrication (no thousand-case backlog); rev-29 figures adopted
everywhere on the site. The clock re-based: sixteen weeks demo-to-ship, eleven
memo-to-ship, fourteen retired; arc about sixteen months.

**Still open:** model-swap months; and ONE rev-29 verification for T6: the sync memo's
delta table says "Ostermill notified 5 August" while the glance spread and T6 say found
by R. Vaughn's spot check on 4 August. If rev 29 changed the discovery mechanism (a
notification rather than the spot check), T6's whole middle changes; verify against
rev 29 before T6 is declared final. Also: five blank artifacts (book appendix) are the
site's download candidates; the six-vs-four walls distinction (six at the gateway, four
on the brief) lands on surface 6 when it builds.

**Drafting sessions:** A1 (the O6 sentence), A2 (the 71% collision), per
REVIEW-SITE-SYNC-FABLE-2026-08-20.md.

**Site sessions (me):** on B1/B2 nods, the sync sweep (bible, T1, T5, bench text,
calendar, timeline); then workstream A in the bench template; then B and C.

## Risks, unchanged

Canon drift while both tracks move (mitigated: bible-first, weekly sync, Phase 3
freeze). Portrait uncanniness (mitigated: drawn hand, disclosure lines). Scope creep
(governed by the book's own cumulative-diff rule; this brief is the declaration).
