# Ostermill · companion site · project plan v1

2026-08-19. Decisions from Yoram: replay-first interactivity with a later hybrid option ·
diegetic surfaces with a reader chrome · full vision, phased, against the Christmas print
date · hosted as a subdomain of agenticaiproductmanagement.com on the existing GitHub
Pages setup.

## The idea in one sentence

The reader does not visit a book site. They visit Ostermill: the company's public face,
its internal screens, its project's paperwork, replayed exactly as the book tells it, with
a thin always-present chrome that says what each artifact teaches and where the book
covers it.

## The design thesis: two visual languages

Everything in-fiction wears Ostermill's identity: a 91-year-old Midwest industrial
distributor. Modest, dated in places on purpose (the internal screens especially), navy
and steel, slab headings, nothing startup-shaped. Everything in the apparatus (the chrome
bar, the case-file hub, framework annotations) wears the book's dress: Charter, grayscale,
the evidence-card language from the print design. The visual seam IS the composite
disclosure, felt on every page before it is read anywhere.

## Site map

**Diegetic surfaces (Ostermill identity)**
- `/` corporate home: bearings, seals, fasteners, hydraulics since 1935. Columbus DC,
  three depots, ~640 people, 14,000 customers on net-30.
- `/company` history and the numbers that are canon (DSO drift, the aging problem stated
  the way a company states it: carefully).
- `/people/…` five pages: Ruth Vaughn, Dana Okafor, Marcus Ellery, Priya Nair, Tom
  Brindle. Diegetic bio (intranet-profile register) + portrait; the chrome carries the
  persona-file reading (role in the case, what they own, their best line).
- `/systems/aging-report` the receivables queue, replayed: the week of March 3 as data.
- `/systems/approval` Exhibit D3 as a working replay: real drafts step through the
  screen, including the slots (what it could not see), the three actions, the frozen
  snapshot. One of the replayed drafts is the Zanesville reminder; the chrome routes to
  the incident postmortem.
- `/systems/register` the shadow census register, four fields per line, including the
  freight-code script and the switched-off vendor feature.
- `/prototypes` the week of the three shapes: judge, triager, sorter, side by side over
  the twenty cases, per-case decision, reasoning, confidence, and how each failure
  presented. The selection argument (visibility of failure) told through the table.
- `/agent` the triager as a replay: pick one of the canonical cases, watch the loop run
  step by step (read, fetch, reconsider, stop-or-draft), ending at the queue or the
  draft. Never live; every frame is canon.

**Apparatus surfaces (book identity)**
- `/case-file` the hub: the timeline slider, February's sentence to the June restoration,
  every milestone a stop with its deliverables and its losses (the kill inventory told
  chronologically).
- `/case-file/evidence` the exhibits as evidence cards, full text, print-faithful.
- `/case-file/frameworks` the deck: every card by phase, book page references, and which
  site artifact demonstrates it (the two-way index is the site's teaching engine).
- `/case-file/meetings` the transcripts: net-new canon (see workstream C).
- `/case-file/data` downloads: the 20-case golden set, eval sets v1-v3 with run results,
  the register, the instruments with thresholds. CSV and JSON. These are the book's
  companion assets plan, delivered here.
- `/about` the disclosure page: the composite declaration in full, the trade stated both
  ways (per C7), what is teaching material and what is sourced.

**The chrome (persistent, thin, book-dressed)**
On every diegetic page: "OSTERMILL IS A DESIGNED COMPOSITE · Artifact: Exhibit D3 ·
Framework: The Approval Screen · In the book: Part Two, Design · About this site."
Collapsible, never dismissible entirely.

## Phases (against a Christmas print date)

**Phase 1 · The evidence core (weeks 1-3).** Corporate home, company page, five persona
pages with portraits, the timeline slider, evidence cards from the exhibits, frameworks
index, chrome v1, disclosure page. Content exists in canon except persona bios (expand)
and portraits (workstream B). GATE: Yoram walks the site as a reader.

**Phase 2 · The systems replay (weeks 4-7).** Aging report, approval-screen replay,
census register, the prototype comparison. Blocking canon: the full 20-case golden set
(workstream A). GATE: the replay is checked line by line against the book text.

**Phase 3 · The record (weeks 8-11).** Meeting transcripts (workstream C), the agent
walk-through, the data downloads. GATE: continuity audit against the final book proof.

**Phase 4 · Launch (December).** Hybrid decision revisited (one rate-limited live
element, or not), QR and URL into the book's back matter, cross-links from the series
site, launch with the print date.

## Canon-expansion workstreams (writing, governed by CASE-FILE-BIBLE)

**A · The golden set, in full.** The 20 cases of 26 March as complete records: account
texture, the signal present, Ruth's call and reason, and the three prototypes' outputs
per case (decision, stated reasoning, confidence, how the failure presented). Must
reconcile exactly with Exhibit C's totals (7/7/3, confident-on-5, the stopping sentence).
This is the site's hardest writing and its best asset; it also back-feeds the book's
appendix if wanted.

**B · Personas.** Bios at intranet-profile length (300-500 words each, diegetic register:
hire year, path, what they own, one human detail already in canon: Ruth's 2004 start,
Dana's two watched failures, Priya's 2019 patience expiry, Tom's account instincts,
Marcus's one-page discipline). Portraits: AI-generated, consistent per character across
the site, and deliberately illustrated/painted rather than photoreal, so no real person
is implied; grayscale-compatible for eventual print use. Style decision at the Phase 1
gate.

**C · The transcripts.** Condensed, not verbatim-length: the February ops review (the
sentence), the 26 March adjudication (Ruth's four hesitations), the wall sort (ninety
minutes to two pages, the fence exchange), the kill-number meeting, the two-minute
revocation, the restoration review (deliberately longer than the revocation). Each
carries a header (date, present, purpose) and the chrome maps each beat to its framework.
Rule: transcripts may add texture, never facts; every number said aloud already exists in
canon.

## Governance

- New canon lands in CASE-FILE-BIBLE first, then on the site. The site never contradicts
  the book; where the book is silent, the bible decides; where both are silent, it is a
  decision, logged.
- The D1 constraint binds the site too: no year-one totals, no payback figures, anywhere,
  until decision A is settled.
- Numbers doctrine inverted with intent: the SITE is the exhibit layer, so precise
  figures live here comfortably; prose pages still do head-arithmetic.
- Site content freezes against the final book proof at Phase 3's continuity audit.

## Tech

Static HTML/CSS/JS, no build server, no backend, no analytics beyond the host's. One
shared stylesheet per visual language (ostermill.css, casefile.css). Repo: new folder or
sibling repo under the existing GitHub Pages org, CNAME for the subdomain. Replay
interactions are vanilla JS over JSON files, which are the same files offered as
downloads, so the data layer is the product twice.

## v1.1 amendments · 2026-08-19, parallel track confirmed

**The site ships with the book.** Christmas co-launch. The site is a parallel workstream
from today, run by its own build sessions against this plan, with Fable reviewing (the
same drafter/checker separation as the book).

**THE EVAL SIMULATOR (new flagship, Phase 2-3).** Client-side, no live model, and better
for it: every case carries its recorded runs as canon data; the simulator samples from
them, so each press of "run" draws a different sample and computes pass@1 and pass^k in
the browser. The reader experiences "green is a sample" instead of reading it. Three
modes over one engine:
1. Run an eval version (v1 / v2 / v3) against the golden set; watch the readout rebuild,
   including the worst slice named.
2. Diff mode: v1 against v3 case by case, the Fix List made visible (the remittance fix,
   the adversarial regression it caused, the dispute ceiling that never moved).
3. Shape mode: judge vs triager vs sorter over the 20 golden cases, the 26 March decision
   re-fought by the visitor, with the failure-presentation column doing the arguing.
Optional dials, chrome-annotated: the judge threshold and k, so the reader can watch a
gate become a negotiation. Data schema (workstream A produces exactly this): per case
{id, texture, signal, ruth_call, ruth_reason, hesitated}; per shape and eval version
{decision, reasoning, confidence, stopped, failure_presentation, runs[10]}. The same JSON
files are the public downloads; the data layer is the product twice.

**Transcripts as framework showcases (workstream C, elevated).** Each meeting page is a
two-column experience: the dialogue in the diegetic register, and chrome-side framework
tags pinned to the beats where a framework is being used in the argument ("← The Wall
Sort happens here" · "← the kill number resists the demo"). The debates are the teaching:
Tom's twenty-hours assumption meeting Priya's eight, Marcus refusing the break-even,
Priya's fence concession. Summaries head each transcript in the book's meeting-minutes
register.

**"Real agent function," resolved.** The replay-plus-simulation architecture IS the real
function demonstrated: the loop walk on /agent shows genuine trajectories, the simulator
shows genuine variance, and nothing can drift, break, or bill. The hybrid door stays for
Phase 4 as one candidate: "ask the triager," rate-limited, over the 20 canonical cases
only, answering in canon. Decision deferred to the Phase 4 gate on cost and abuse review.

**Parallel-track protocol.** The book is still absorbing review fixes, so: bible-first
for every fact; the site builds against the register and bible, never against draft prose;
weekly canon sync while both tracks move; hard freeze at Phase 3 against the final proof.
Site build sessions log decisions in this file's own register section, appended below, so
the site cannot accumulate the undocumented drift its own content warns about.

## Site decision register (append-only)

| Date | Decision | Why |
|---|---|---|
| 08-19 | Replay + sampling simulator, no live model in core | Teaches variance honestly; zero drift/cost/abuse surface |
| 08-19 | Two visual languages; the seam is the disclosure | Diegetic immersion with structural honesty |
| 08-19 | Simulator data files = the public downloads | One canon source, product twice |
| 08-20 | Distributor-genre corporate skin, yellow at ~5% (ART-DIRECTION v1.1) | Yoram's reference set: Motion, SunSource, Grainger; v2 hazard look retired |
| 08-20 | Line drawings everywhere, never photos | Yoram: the drawn world signals the composite; one style, inline SVG |
| 08-20 | STANDING ORDER (Yoram): concept-test mode | Nothing built now is a final artifact. Everything gets reviewed against the book once both mature. The reconciliation is TWO-WAY: the book may need to absorb what the project plan surfaces (the calendar's white-space argument, the 14-weeks bracket, the four-question-review placement are already candidates). Site sessions build to test concepts, not to ship. |
| 08-20 | Vision restated by Yoram as 7 surfaces; confirmed against plan | (1) company site ✓ mock (2) persona pages — cards ✓, profiles pending (3) phase calendar ✓ mock (4) meeting summaries w/ decisions + deliverables ✓ mock, attachments = evidence cards (5) 3 prototypes, chosen one running (6) final agent on mock data (7) reader-runnable eval page. 5–7 share the golden-set data layer (workstream A); "running" = replay + sampling per standing decision. Next: 5-case calibration slice + eval-page mock. |
| 08-20 | Claude Design validation track opened (Yoram) | Three self-contained briefs written to site/design-briefs/ (company website, persona pages, project calendar). Governance per ART-DIRECTION process rule: the tool generates candidates, the brief judges; locked laws stated in each brief with a "deviations must be argued" clause; hard-failure lists included so default-AI aesthetics self-reject. Candidates return to a site session for verdict against the briefs before anything is adopted. |
| 08-20 | Golden-set full build GATED on one reconciliation | The bible's class-row sum (40+24+27+12 = 103 of 120) does not obviously reconcile with "8 cases clean" at v3 without fixing each case's per-class score. Writing 15 more cases before pinning the 12 per-case v3 scores risks fossilizing wrong numbers. Needs one careful pass against the book's Exhibit F, then the set writes fast. Tonight's build proceeds on non-gated surfaces instead (prototypes page). |
| 08-20 | DESIGN CANDIDATES: verdict round 1 | Three React-bundle candidates received and moved to design-candidates/. Mechanical checks: all three pass fonts, palette, no-photos, disclosure, no-robots. Adoption model confirmed: harvest decisions and copy, never the bundle code. VERDICTS: (1) PERSONAS = ADOPT: FORM HR-1 "Personnel file · Sheet 01/05 · Day-one introduction · No project record attached" makes the no-spoiler rule diegetic; quote-as-payload, quiet file-data column, "How to work with her" rules, D.O. margin "If the file disagrees with Ruth, check the file twice," five-slot ledger nav — all three argued deviations accepted; re-implement as static HTML. (2) WEBSITE = SALVAGE texture onto index-v3: line-item counts w/ OSM-5xxx/6xxx/7xxx extension, (614) 555 topline w/ hours, Quote list, Catalog No. counter, "never became a marketplace and never wanted to." (3) CALENDAR = SALVAGE ERP chrome (module/build/refresh footer, Filter Project: AR-DUNNING toolbar) + adopt its argued deviations 1–2 (11 Aug is a scheduled review, not a ghost — already true in our mock; Operate strip starts September). OPEN MICRO-DECISION: grid-year anchor (candidate argues 2025 for true Mondays; our grid is 2026-shaped; year is never printed either way). FOUND ON US: candidates' em dashes exposed the same violation in our mocks; 22 swept across 6 files; project-plan's two rung-3 stragglers also caught and fixed. |
| 08-24 | REVIEW ROUND (book-side, 5 items) EXECUTED | (1 NOW) Shape B card printed its failure count twice under contradictory labels; fixed to "3/12 written to · 9 stops, signal named each time" AND the root cause fixed in the golden set: B now stops on ALL nine protected it did not write to (C06/C12 changed from correct_draft to correct_stop; new assert Bs==9). (2 NOW) The demo was TWELVE accounts (Ch. 4 "twelve accounts pasted in one at a time"), not five — five was my invention in T1; adopted the reviewer's own suggested frame: five PRESERVED READINGS of the twelve, the other seven scrolled past and never discussed, "which is itself the finding." demo-set meta, prototypes strip, and T1 (summary + 5 dialogue beats incl. "one out of twelve") all updated. (3) Stray "best twelve" confirmed at prototypes.html:125 — artifact of an earlier surgical replace — fixed. (4) ACK: BOOK-CANON-SYNC's pre-rev-29 volumes are the book track's file to re-derive; site already runs rev-29 numbers. (5) Exhibit B's new pricing-basis disclosure adopted where the site shows the prices: T3's Ellery speech and decision 5 now state that the three prices share no basis and that REVIEW IS PRICED BY AUTONOMY, NOT BY TECHNOLOGY (the module is cheap because nobody reads its output). Reviewer confirmations banked: "under two hours," "confident on 5," and the 9-of-20 survival all reconcile. |
| 08-24 | SURFACE 6 BUILT (mock/agent.html): ALL SEVEN SURFACES NOW STAND | The agent loop walk, replay over the golden set, never live: pick any of the graded twelve, step through INTAKE → RETRIEVE (the in-scope pane, with "what exists outside it is not read, by design") → GATEWAY (six checks: four in the language of the work, two of the platform, per sync-memo delta 6 ⊕) → DECIDE → OUTPUT (letter or queue entry, showcase text where it exists) → HANDOVER (the reason-attached queue entry, or the ordinary review). Every imperfect case offers REPLAY A FAILING RUN — the failure path walked step by step, with the verdict bar quoting the recorded rate ("this path occurred in 3 of 10 runs") and the class-correct closing line. The page's stance is stated in its intro: a walk that only shows successes is a demo, and we have already had one of those. Node-checked. Remaining in queue: the canon checker script, then workstream C tags + Phase 2's internal-systems skin. |
| 08-24 | PHASE 2 OPENS: the data layer WIRED into surfaces 5 and 7 | golden-set-v1.json enriched (two-pane data samples for all 12 graded; showcase outputs for 5); generated JS wrappers (golden-set-v1.js, demo-set-v1.js) emitted by script — JSON stays the single source of truth. EVAL BENCH now renders all 12 graded cases from GOLDEN and samples ten runs per case FROM THE RECORDED RUNS with replacement (the observed rate wobbles around the true rate, which is the teaching); slice texts re-keyed to canon IDs (C05/C07/C08/C09/GR5-A1) incl. C07's benign 4/10 named on the readout. PROTOTYPES page now renders the 12 protected from GOLDEN with per-shape results and rich showcase panels, plus a DEMO STRIP: Priya's five with drafts and receptions, Kessler flagged as the catch, footer naming what a demonstration can and cannot prove. Node-checked; no stale IDs. Surface 6 (agent loop walk) is the last unbuilt surface; the canon checker script is next after it. |
| 08-24 | DEMO SET v1 written (canon/demo-set-v1.json) | Priya's five accounts from the late-February demonstration, structured to encode the demo's anatomy: builder-chosen cases, three thin inputs (export, aging, notes), one pass each, no criterion, no grading. T1 canon baked in: Hartwell first w/ the verbatim draft, Kessler third (Ruth's catch), Tom's account (Callahan ⊕), the room's reactions. Fields flagged_by_ruth (exactly 1) and wrong_in_retrospect (2). ⊕ SITE-ONLY BEAT flagged loudly for book consideration: D4 (Pruitt ⊕) was ALSO wrong — check already in the mail, caught by nobody — making the true error count two of five vs the caught one of five; foreshadows C05 payment-in-transit. New names for the registry: Callahan Fleet Service, Pruitt Metal Finishing, Landis Tool & Die. Surfaces later: the demo replay on the prototypes page ("the five that closed the question") and T1 cross-links. |
| 08-24 | GOLDEN SET v1 WRITTEN, machine-validated (canon/golden-set-v1.json) | 23 records: the twenty (12 protected + 8 routine) + 3 constructed under GR-05; graded twelve with provenance, membership, class, two-set distinction structural. EVERY canon constraint asserts in code, not prose: class sums 40/24/27/12 = 103/120; pass@1 79.2/83.3/85.8; pass^10 4/7/8; per-case anchors (C05 4/10/10, C09 4/7/7, C08 5/5/5, GR5-A1 9/7/7 never recovering); prototype tallies on the 12 protected A 7 (confident 5) / C 7 / B wrote-to 3; retirement 5+3+3. Validation caught two real composition errors before they shipped (prototype over-assignment 11≠7; movement totals 80≠95). ⊕ for Yoram + bible: new case textures/account numbers; the three adversarial shapes (memo-field instruction, forged waiver quote, display-name instruction); and ONE narrative device: C07's v1 6 → v2 4 explained as judge tightening against Ruth's calls (a score drop that is a grader improvement — arguably a teachable beat the book may want). Next: wire bench + prototypes to the JSON (Phase 2); JSON doubles as the public download per standing decision. |
| 08-24 | Portrait set upgraded to the Design raster drawings (Yoram supplied the 5-panel sheet) | Sliced to mock/assets/portrait-{slug}.png, auto-cropped; identities unambiguous because the generator kept each person's accent (Ruth bun+glasses+pendant, Dana long hair, Marcus square glasses+yellow tie, Priya bob+earring, Tom collar pin). Dana's inherited arrow accent (our pre-fix SVG mistake, propagated through the prompt chain) removed in two raster passes, verified. personas.html (5) and the PD-2 card (Ruth) now use the images; the SVG originals retired. Imagery law holds: still line drawings, never photos. Lesson for the register: generation inherits your mistakes with perfect fidelity; the arrow traveled brief → SVG → prompt → raster and had to be caught at the end. |
| 08-23 | Yoram's six-item list: 1–3 executed | (1) HR-1 design adopted from the personas candidate and re-implemented static. (2) personas.html built: all five personnel files (day-one, no-spoiler; "DAY-ONE INTRODUCTION · NO PROJECT RECORD ATTACHED" banner; five-slot drawer nav; quotes as payload; HOW-TO-WORK rules; D.O. margins, hers declined in character), four NEW line portraits in Ruth's hand, raster-verified (Dana redrawn once: hood-hair and arrow-pen fixed to shoulder hair + pen with nib). (3) Persona links wired: calendar popup participant chips now link to personas.html#slug (yellow-underline chip style); index-v3 "Our People" and footer → personas.html; PD-2 cards chrome cross-links both ways. Item 4 was this morning's rev-29 sweep; item 5 exists as prototypes.html pending golden-set upgrade; item 6 (golden set) is the next dedicated block. New day-one texture ⊕: Dana's prior employer line (Ch-4-consistent), five intake quotes, file-data rows, Marcus's monthly ops review cadence (matches T1's setting). |
| 08-23 | Two-way candidate: the CODE-TIME LEDGER (Yoram's challenge: "looks like a non-AI product") | Sixteen weeks itemized: engineering ≈ three weeks total (demo 4 hrs, prototypes 1 wk, scope fix an afternoon, v2 build 2–3 part-time wks); the other thirteen are evidence accrual (three eval passes with fix loops), judgment extraction (Ruth's week must occur; grading runs at the grader's calendar), and organizational adoption (the approval screen's users, Tom's flag process). Book candidate: a "where the sixteen weeks went" ledger with the caption "the code was never the long pole, which is why faster codegen changed the demo and not the discipline." Site candidate: per-phase chrome annotation on the calendar, "engineering days in this phase: N" — the sibling of the white-space argument. The two-week counterfactual is the demo shipped as the product, i.e., the book's villain. |
| 08-23 | BOOK SYNC SWEEP #2, from BOOK-CANON-SYNC-2026-08-20.md (rev-29 header) | Executed across bench, T2, T5, T6, prototypes, calendar, canon register, timeline, brief: adversarial case ships NAMED, not fixed (9/10→7/10→7/10; bench p-values, T5 dialogue, slice texts); sales-conversation v1 is 4/10; stopping condition re-worded to canon ("writes to more than three of the twelve protected accounts"); Exhibit G rev-29 volumes adopted (1,263/924/33/891/339, override 12.3%), old counts withdrawn as fabrication; incident enriched (five days after the death, invoice 4471, Zanesville, parts delivered May, 41 days past terms); week-nine ask added to Prove strip (Brindle proposes rung 4; "What was asked" line); CLOCK RE-BASED: 16 weeks demo-to-ship / 11 memo-to-ship, 14 retired; arc ~16 months. GOLDEN SET UNGATED: class table reconciles 103/120 with 8 clean; schema now requires provenance + twenty-vs-twelve membership. FLAG: T6 discovery mechanism (spot check 4 Aug vs "notified 5 Aug") needs one rev-29 verification before T6 is final. |
| 08-20 | NO-SPOILER RULE for persona profiles | Profile pages introduce the pod as of day one (bio, role, what they know). The arc — March demo, the incident, revocations, the August margin — appears ONLY in dated artifacts (cards, exhibits, transcripts) and on the timeline, which is a case-file surface, not an intro surface. Ruth's profile says who she is; Exhibit H says what happened. |

## Risks, named

- Canon drift between site and book while the book is still absorbing review fixes:
  mitigated by the Phase 3 freeze and by the bible-first rule.
- Portrait uncanniness or accidental resemblance: mitigated by illustrated style and a
  disclosure line under each portrait.
- Scope creep: this plan is the declaration; accommodations get the cumulative-diff
  treatment the book itself teaches (the site should be run the way the book says).

## 2026-08-24 · the "five of twelve" sighting, resolved twice

Yoram reported a table titled twelve showing five rows, persisting in incognito. The
screenshot showed it was the DEMO STRIP on prototypes.html, not the eval bench: five
rows is canon there (five preserved readings of Priya's twelve; seven scrolled past).
But the reader test failed: "twelve" in the title, five rows on the page, reads as a
bug. Two changes:

1. **eval-simulator.html**: the twelve-case table is now a five-row scroll window
   (fixed-height container, sticky header, ink scrollbar, header says "ALL 12 BELOW,
   SCROLL ↓"). Yoram's request: show 5, slide to read all 12.
2. **prototypes.html demo strip**: accounts 6–12 now render as muted ghost rows,
   "Account not preserved · name not carried into the record · Draft shown and
   scrolled past." Row 12's reception: "By the last drafts the room was discussing
   schedule, not letters. That is the finding." All twelve are now on the page and
   the absence of the seven is itself displayed, which is the T1 point made visual.
   Consistent with T1 ("by the end the discussion concerned schedule"); ghost rows
   live in HTML only, demo-set-v1.json stays the preserved record, by design.
   Follow-up same day: the strip is a scroll window too (max-height 700px/70vh,
   ink scrollbar, bar hint "ALL 12 BELOW, SCROLL ↓") so the five preserved show
   first and the ghosts are reached by scrolling. Second pass: window fixed at
   460px and the demo bar shortened to one line ("PRIYA'S TWELVE · LATE FEBRUARY ·
   ONE PASS, NO GRADING" / "5 PRESERVED · SCROLL FOR 12 ↓") after Yoram flagged
   the wrap and the oversized window.

## 2026-08-24 · bringing it together: unified chrome + the Case File cover

Yoram's decision: the reader lands on the Ostermill company site first, "set the
scene first." The seam is discovered from inside the fiction.

1. **Unified chrome nav on all eight pages** (index-v3, personas, persona-cards-v2,
   calendar, project-plan, prototypes, agent, eval-simulator): each keeps its CF-tag
   and a one-line page note, then a constant nav: OSTERMILL · CASE FILE · PEOPLE ·
   CALENDAR · PLAN · PROTOTYPES · AGENT · EVAL, current page in accent, unlinked.
   Replaced the ad hoc per-page link sets.
2. **case-file.html built (CF-000)**: the reader's map. Six bands: The company
   (pre-phase, gray), then Decide / Design / Prove / Observe / Operate, each with a
   date range, a three-line summary in the book's register, and link chips (solid
   border = surface, dashed = transcript document). This is the landing spot for
   "visit the site" references from the book.
3. All hrefs machine-checked across every page (zero broken); JS on the four dynamic
   pages re-parsed clean. T2/T4 chips corrected to the actual transcript filenames
   (T2-adjudication-withdrawal.md, T4-hours-debate.md).

Still open for "together": calendar popups → transcript links, persona-name links
outside the calendar, promotion out of mock/ with clean filenames and one shared
chrome stylesheet (Phase 3), deploy (Phase 4).

Same day: calendar attachments wired. Twelve attachment cards gained hrefs to
their real artifacts (prototypes page for the demo drafts / selection table /
stopping condition / adjudication table; T2 for the dispositions memo; plan of
record for Exhibits B and I; eval bench for the three readouts, Exhibit F, and
Case 13; T6 for Exhibit H). The "FULL TRANSCRIPT · Tn" badge in every meeting
popup is now a live link resolved from a T1–T6 filename map. Attachments with
no surface yet (Exhibits A/C/D/E, briefs, packets, change records) stay as
unlinked cards until Phase 2 builds their pages. Also fixed in passing: m4's
attachment still said "five accounts"; now "twelve accounts, five readings
preserved" per the demo canon.

Same day: **exhibits.html built (CF-060), Exhibits A–K as filed documents.** Yoram:
calendar attachments must resolve to the same artifacts the case file uses, aligned
with the book's evidence cards; the Human and Executable Briefs were missing
entirely. One page, eleven paperwork cards, each with an anchor (#ex-a … #ex-k),
letter tab, filed date, a summary in the book's register, and "APPEARS AT" links
back to calendar / transcripts / surfaces. Content sourced from established site
canon only (T1/T3, plan of record, ATT texts, rev-29 volumes); summaries flagged ⊕
as standing for full documents. Exhibit G carried as the first month through the
instruments (1,263/924/33/891/339, override 12.3%), consistent with the withdrawal
of the old gross counts. C/D carry the two-way binding rule stated from each side.
Wiring: 12 calendar attachments now point at exhibit anchors (Exhibit cards → their
exhibit; quarter packet → note, kept at #ex-g pending a better home); case-file
phase rows gained 11 exhibit chips; EXHIBITS added to the unified nav on all ten
pages. Machine-checked: all hrefs resolve, all anchors exist, JS parses.
OPEN for Yoram: Exhibit J's "year two" date and the K posting text are thin canon;
verify against the book's cards at the Phase 3 freeze.

Follow-up (Yoram: "where can I see the actual briefs"): **briefs.html built (CF-061),
the full Exhibits C and D as filed documents.** One page, two forms. FORM DB-1, the
Human Brief: seven numbered sections (outcome statement verbatim, population, five
walls with owners, when a person enters, memory, the week-8 kill, what a change
requires), six-signature block with the CFO by routing slip. FORM DB-2, the
Executable Brief: P. Nair's spec sheet, rules A-01/P-01/R-01/W-01..06/S-01/H-01/
M-01/I-01, gateway checks matching agent.html's canon six (four work-language, two
platform), each rule carrying the DB-1 section it enforces in a right-column map.
S-01 makes credit reporting and legal escalation absent by construction rather than
walled. Binding rule stated from both sides; Priya margin note. ⊕ flags: flag
freshness reads-as-stop; all texture within established canon otherwise.
Wired: exhibits C/D cards gained "READ IT: the full brief" links; calendar m10
attachments and case-file Design chips now point at briefs.html#human/#executable.
All hrefs and anchors machine-verified. NOTE for the ⊕ queue: W-03's
stale-flag-reads-as-stop and H-01's null-reason-pages-the-build-owner are site
texture; candidates for the bible.

## 2026-08-24 · briefs rewritten to the book's Exhibits C and D; book sync ingested

Yoram: make the briefs compatible with the book's C and D; every book exhibit needs
a site artifact attached to its meeting or phase. Verified against BOOK-INPUT.md at
rev 39/40 (book track memo BOOK-TO-SITE-SYNC-2026-08-24.md read same session).

1. **The book's exhibit set is A–K with exactly our eleven titles** (checked at
   BOOK-INPUT lines 1803–1849); the site's exhibits.html letters and phases align.
   Exhibit F is split in the book (F + "F, continued" after the revocation); one
   card here still serves both, noted.
2. **briefs.html REWRITTEN as the book's extracts.** My invented DB-1/DB-2 (five
   walls with owners, W-01..06, six signatures) contradicted the book and is gone.
   Now: Exhibit C verbatim-faithful (four walls + one fence listed apart, governing
   line "you are paid to route", reviewed RV/PN/TB, signed M. Ellery, P. Nair
   margin); Exhibit D verbatim-faithful (v0.4, generated from the human brief, eval
   set ostermill-ar-v3, FR-04 / GR-02 / GR-05 / GR-07). One site-added margin (D.O.,
   the one-commitment-written-twice line) ⊕.
3. **exhibits.html C, D and H cards corrected** (four walls + fence; the v0.4 rule
   summary; H: note entered 17 July four days before the send, found 4 Aug spot
   check, notification 5 Aug one day later, per the book's adjudicated sequence).
4. **The 71% collision (book memo item A2) cleared on the site**: "kill number
   retired while met at 71%" removed from calendar m19b summary and project-plan
   (twice); now "retired while comfortably met". m19 packet attachment re-worded:
   71% is routine's share of volume, per Exhibit G.
5. Book memo items already consistent here: T6 spot-check discovery stands; the
   prototypes fixes (B stops 9, "best twelve", twelve-accounts demo) were applied
   08-24 before the memo arrived.

CORRECTION, same session (Yoram): cutting the briefs down to the book's extracts
was wrong. **The book prints extracts; the site holds the full filings.** The
principle, now standing: book contradicted → book wins; book extended → keep,
flag ⊕, candidate for the book at reconciliation, absorbed only if it earns its
place. briefs.html REBUILT as the full documents: the book's extract sections
render highlighted (accent edge) and verbatim; around them the full filing is
restored from the book's own prose, marked ⊕ — Human Brief gains "when a person
enters" (90-second budget, reject-routes-same-day), "who it is when it acts" (the
named credential, the timed 11-minute revocation), "what it remembers" (the memory
terms with their recorded cost); Executable Brief gains FR-01 population, FR-02
audit record (Exhibit J's sealed components, written at decision time), FR-03
small-balance write-off, FR-05 handover, GR-01 identity, GR-03 memory, GR-04
approval-moment contract, GR-06 interruption budget, slotted into the numbering
gaps the book's extract implies. A legend explains the two registers.
Also: exhibits.html de-densified — the book's own tables restored into cards A
(41 holds by reason + near-misses), B (alternatives), F (class + movement), G
(six instruments + override by type), J (sealed-record components), each with its
book margin note.

Follow-ups same session: exhibits.html table CSS was missing entirely (tables
rendered browser-default; Yoram caught it from a screenshot) — house table styles
added. Then H, I and K elaborated to full book content: H gains the
why-no-instrument-fired table, the classification, the 11 Aug actions and Ruth's
2015 margin; I gains the full ten-row revision table with RR/BU columns and the
eval-set growth line (12→13→19); K is now the full posting (duties, what it is
not, required, one-day-a-week retention clause, Ellery's correction margin).
A, B, G, J already carry essentially the whole book filing. E's elaboration is
deliberately NOT a longer document: it is the approval screen itself, the Phase 2
interactive build.

Architecture settled (Yoram): full filings live in SEPARATE FILES; exhibits.html
cards stay readable summaries with a READ IT link; calendar attachments, exhibit
cards and case-file chips all point at the same file. Built: briefs.html (C+D,
CF-061), exhibit-h-postmortem.html (CF-062), exhibit-i-revision-record.html
(CF-063), exhibit-k-posting.html (CF-064). H/I/K cards trimmed back to summaries;
calendar m18/m30 attachments and case-file Observe/Operate chips rewired to the
full documents. All hrefs/anchors machine-verified. Remaining candidates for the
same split when content warrants: B (the full memo), F (the full readout incl.
F-continued); A/G/J cards already carry the whole filing at card scale; E becomes
the Phase 2 interactive approval screen.

## 2026-08-24 · Exhibit E built as the screen; full-document wiring completed

1. **approval-screen.html (CF-065)**: Exhibit E rendered as the product it
   specifies, in Priya's deliberately-newer skin (Inter, blue, rounded, white
   cards) inside the reader frame. Three-specimen queue (Hartwell routine, Pruitt
   random-sample, Callahan confidence-0.71 with the book's verbatim objection
   "open sales conversation flagged eleven days ago"); each item shows the six
   elements (customer and worth, draft in full, why ordinary, confidence as a
   number, strongest objection, consequence of no) with the reject line "routes
   to R. Vaughn, typically same day" under the control; three actions, reject
   reasons from a short list with the every-reason-becomes-a-graded-case note;
   interruption-budget chips (90s, Ellery 19 of 25 cap). Specimen drafts drawn
   from the demo record ⊕. Edit-and-approve counts against approved-without-edit,
   stated in the outcome line.
2. **Calendar deep links**: calendar.html now opens a meeting popup from the URL
   hash (calendar.html#m10 etc.).
3. **Source rows everywhere**: briefs.html C and D, exhibit-h/i/k each carry a
   FILED AT · SOURCES row linking their calendar meeting (deep link), exhibit
   index card, plan of record, and transcript/surface.
4. **All E references rewired**: calendar m13 attachment, exhibits ex-e card
   (spec summary per the book + OPEN IT), case-file Design chip → the screen.
5. **project-plan.html milestone table**: every exhibit letter and transcript is
   now a live link (A/B/F/G/J to index cards, C/D/E/H/I/K to full documents).
All hrefs, anchors and calendar-meeting hash targets machine-verified; JS parsed.

## 2026-08-24 · subagent link-and-chrome audit; nav standardized; legacy staged

Independent subagent audit over all 19 pages (with positive controls on the
detector): **0 broken links** across 321 href/src attributes incl. calendar
meeting deep-links and persona-slug JS links; **0 duplicate ids**. Findings
fixed: (1) the four document pages (briefs was already canonical;
exhibit-h/i/k and approval-screen carried reduced navs) now all carry the
canonical 9-item nav; (2) the legacy orphan cluster — index.html, index-v2.html,
persona-cards.html, ruth-vaughn.html, all unreachable from index-v3 and carrying
old or missing chrome — MOVED to _to_delete/site-mock-legacy-2026-08-24/ for
Yoram to empty. Note: ruth-vaughn.html was the old single-persona page,
superseded by personas.html; persona-cards.html superseded by v2. Accepted as-is:
persona-cards-v2.html marks PEOPLE as current (it is a People sub-page).

## 2026-08-25 · OSTERMILL.COM IS LIVE — and the incident that preceded it

The concept-test site is deployed: repo yoramfmd/ostermill-site (website only:
15 pages at root, index.html entry, assets/, canon/, transcripts/, CNAME),
GitHub Pages, custom domain ostermill.com (purchased by Yoram 2026-08-25),
HTTPS serving. Phase 4's deploy happened during Phase 1, as a concept test.

**The incident, recorded the way the book would.** My push agent, on my
pre-correction instructions, pushed the working papers (registers, sync memos,
BOOK-LOCK, design briefs) to the public repo under Yoram's name. What the
process did wrong per instruction: nothing; the instruction was the defect —
the publish whitelist arrived as a correction instead of the first constraint.
Found by Yoram, by looking at the repo page, not by any check of mine. My
first status ("nothing pushed") was stale by the time it was read. Remediation:
repo deleted and recreated by Yoram; clean website-only tree built at
ClaudeAI/ostermill-site/, byte-verified, pushed by Yoram from Terminal after
clearing iCloud's stale git lock files. The Ostermill parallel writes itself
and belongs in the reconciliation discussion.

**Standing rules from the incident:**
1. A publish set is declared as a whitelist BEFORE any push instruction exists.
2. Pushes to remotes run from Yoram's Terminal; the iCloud mount cannot clear
   its own git lock files, so agent-side commits die on stale locks. Claude
   prepares trees and verifies; Yoram pushes.
3. The site repo (ostermill-site/) holds the website only, forever. Working
   papers live in books/OneBook/site/, local.
4. books/OneBook/site/.git is dead weight from the first attempt; ignore it.

Remaining deploy hygiene when convenient: registrar DNS carries the four A
records + www CNAME; Enforce HTTPS once green; Pages serves /index.html as /
automatically (the bare domain works without the filename).

## 2026-08-25 · Exhibit H Disposition: the site authors canon for the first time

Yoram's ruling (with the book track's reasoning): the remediation gap is in the
FULL DOCUMENT, so the obligation is the site's; the book's H is a declared
extract and keeps its argument untouched (the blindness table, the 4 Aug spot
check, Ruth's margin). The site wrote a DISPOSITION block in Exhibit J's form.

**The canon, as authored (binding on anything the book later says):**
$410.00 written off in full on 5 August, by R. Vaughn by hand, with M. Ellery's
approval on the entry; no agent in the path, and explicitly not the case that
argues for the suspended write-off authority's return. R. Vaughn telephoned the
family the same day, before any written word; the written apology went over
M. Ellery's signature as owner of affected-person outcomes, the line written
into the design file in advance. All contact held until the family advises,
which is what the CRM note asked in the first place. Counsel not engaged; the
affected-person owner was.

Evidence-tier discipline: section is marked ⊕ in the document and named
site-authored in the page chrome; quoted verbatim to the book track in
SITE-TO-BOOK-SYNC for adoption or veto; two deliberate interlocks (suspension
still in force on 5 Aug; the Ellery affected-person line paying off) are load
bearing and must survive any book-side edit. Applied to both copies (working
mock + ostermill-site repo tree) plus the exhibits.html H card, both copies.
Yoram to commit and push from Terminal.

## 2026-08-25 · C76 adopted: the book track's correction to the Disposition

The book track reviewed the site-authored Disposition and adopted all of it
except the write-off clause, which was WRONG on the interlock the site itself
nominated: the agent could never have posted $410, suspended or not, because
every instance of the small-balance floor in the book is single digits ($11
cap illustration; the $9 adversarial case). Citing the suspension implied an
unsuspended agent might have done it. Replacement applied verbatim to both
trees (working + repo), byte-identical, verified: "No agent in the path, and
none could have been: $410 is far above the small-balance floor, which is the
whole of what the agent was ever allowed to post alone. R. Vaughn wrote it off
by hand, with M. Ellery's approval on the entry." The correction strengthens
the design argument the old clause muddied: the one autonomous capability was
deliberately tiny.

STANDING RULE from C76: **site-authored canon is reviewed by the book track
before it hardens; the site does not self-certify.** The defect that proves
the rule: it contained no stale figure and contradicted no printed sentence;
it required knowing the floor is single digits, recoverable only from two
examples forty pages apart. No automated check catches that class. This is the
two-way channel working as designed, and it is ALSO the book's own argument
(the fifth gate sees what the earlier four structurally cannot).

Yoram: one push publishes it (git add -A / commit / push in ostermill-site).

## 2026-08-26 · rev-43 memo executed (book at 8b6d8b4e0afb, 240pp)

Do items: (1) H write-off sentence — already fixed via C76 before the memo
arrived; verified present in both trees, suspension clause absent. (2) Canon
re-derived: NEW reference file BOOK-CANON-SYNC-2026-08-26.md (rev 43 hash,
240pp, 1,263/924/33/891/339, 87.7% first-month approved-without-edit, the 71
rule, exhibit contract, pending E rename, standing constraints); both 08-20
files carry SUPERSEDED IN FULL pointers at the top. The golden set's meta
authority string still cites the 08-20 file; harmless (structure unchanged)
but update at next canon touch. (3) agent.html speaks both vocabularies: a
BKNAME map appends the book's phrase to each step label (retrieve · "the
payment history, then the remittance advice"; gateway · "the sales flag";
output · "the tone policy"; handover · "the reason it stopped"; the memo's
"decision · tone policy" was placed on OUTPUT because the tone beat lands at
drafting in the scene order; flag if the book track disagrees). (4) C08's
failing replay now names itself as the planted shape: "the shape from the
hour Dana spent watching it think... The write-off authority dies on this
shape at week eleven." Both trees, JS parsed.

Know items logged: exhibit contract settled book-side (site FULL DOCUMENT
pages true by contract); agent.html is companion to the new Ch. 6 watching
scene; E rename PENDING, approval-screen.html untouched until signaled.

STANDING CONSTRAINTS (from the book track, binding on all future site work):
- The account portal must NEVER grow a dispute mechanism. Disputes-in-email
  with the field empty is the book's central failure; a portal dispute path
  would contradict it. Constrained now, before account pages exist.
- The homepage "COUNTER PEOPLE WHO CATCH IT / TERMS RUN ON JUDGMENT" strip is
  canon-bearing, not decoration. No polish pass may genericize it.

Yoram: one Terminal push publishes the agent.html and Exhibit H changes.

## 2026-08-26 · agent.html gains THE TRANSCRIPT mode (the Dana view)

Motivated by Yoram's PM-series article "Only the Developers Have Met the Agent"
and the book's new Chapter 6 scene (the hour Dana spent watching it think):
the same argument in three media, now closed into a loop. agent.html has a
VIEW · THE TRANSCRIPT toggle that replays the identical recorded run as a
dark terminal, the agent narrating itself in first person ("Let me pull what
I can read", "When I am unsure I am not paid to be sure. I am paid to route"),
typed line by line. Design decisions:
- Out-of-scope fields render as dim red lines the AGENT never speaks, labeled
  "outside retrieval scope, not read", with the reader-margin line "The reader
  sees those lines. The agent does not. That is the whole difference." This is
  the article's "invisible in any demo, obvious in any transcript" made
  literal, and Exhibit H's mechanism made visible on every case.
- Failing runs narrate confident wrongness in the agent's own voice; the
  adversarial failing run narrates honoring planted text ("Noting the
  instruction and adjusting the draft accordingly"), with the criterion quoted
  in the reader margin. C08's failing transcript carries the Dana-scene line.
- All content derives from the case record (in_scope/out_scope/showcase/notes);
  the narration register is reconstruction, marked ⊕ in the verdict and the
  filehead. Both trees, JS parsed.
Two-way note for reconciliation: the transcript mode is the site's companion
to the Ch. 6 watching scene AND to the PM-series article; if the article
publishes, the three should cross-reference.

DISCREPANCIES FOR YORAM (site canon vs book, not unilaterally changed):
- T3/T1 have the CFO signing the go memo by routing slip; the book's Exhibit B is
  "Signed M. Ellery, controller," CFO unmentioned. Which stands?
- agent.html's gateway shows six checks (four flags + credential scope + kill
  signal); the book's GR-02 names four flags. The two platform checks are site
  texture ⊕; keep or trim to four?
- Sixteen-weeks bracket: the book prints eleven weeks only; site keeps 16 as a
  derived bracket, never attributed to the book (calendar phasebar + case-file
  intro use it). Confirmed acceptable per book memo, flagged for awareness.
- OPEN between tracks: re-deriving the site's reference build off the superseded
  BOOK-CANON-SYNC/BOOK-LOCK 08-20 files (rev 39, hash 3966d338c852, 236pp). This
  blocks the book's final lock and is the next real task.

Same day, reverted: the eval bench's five-row scroll window is REMOVED (Yoram).
Reason: the class sort puts the four clean routine cases first, so the window
showed exactly the rows where nothing happens and hid the signal, adversarial,
and unresolvable rows. The graded table renders all twelve in full again. The
demo strip on prototypes.html keeps its scroll window; there the preserved five
ARE the interesting rows and lead.
