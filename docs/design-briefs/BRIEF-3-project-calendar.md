# Design brief 3 · The project calendar (diegetic ERP + reader chrome)

Submit this brief whole. Outputs are judged against this document.

## What this is

The signature surface of a companion site for a published book about agentic AI
product management. The book follows one fictional project at Ostermill Industrial
Supply (a designed composite company) from a February pitch through a year of
operation. The calendar shows how the project unfolded in real time: every meeting on
the days it happened, clickable into its minutes.

The design's central idea, which is LOCKED: **two visual languages on one page, and
the seam between them is the disclosure.** The calendar itself is diegetic: it looks
like the company's own scheduling tool, and the fiction says that tool is a 2014-era
enterprise ERP module ("OsterNet · Scheduling & Rooms · rollout 2014"): gray chrome,
dense grids, small system type (Tahoma/Segoe class), banded weekends, slightly dated.
The book's analytical frame sits ON TOP as reader chrome in a completely different
voice: near-black bars, mono type, one yellow accent. The reader should feel the
difference between "what Ostermill sees" and "what the book sees" without being told.

## The content (all dates fixed; the book's published "Part Two at a glance" governs)

Five phases as chrome-side bands over the diegetic months:
- **DECIDE · late February – 2 April.** One sentence at a late-February operations
  review; a working demo built in four hours that Thursday, shown to six people
  Friday morning; an observation week beside the AR clerk (week of March 3); a
  prototype adjudication 26 March; the go memo 2 April.
- **DESIGN · 2 April – early May.** Two briefs dated 22 April; the approval screen
  6 May.
- **PROVE · project weeks 5–11.** Eval passes at weeks 8, 10, 11; readiness review
  and launch decision in week 11. (This phase is dated by a week clock, not months;
  render it as a strip, which is itself informative.)
- **OBSERVE · launch to the end of the quarter.** Calm to 14 July; then an incident
  the calendar CANNOT see (nothing was scheduled): a wrong letter sent 21 July, found
  4 August, reviewed 11 August. Render the unseeable days as chrome-side "ghost"
  annotations (dashed red, mono) on an otherwise empty grid: "no meeting existed
  about this."
- **OPERATE · August onward, twelve months.** Deliberately THIN: a chip strip, not a
  grid. The thinning is the argument: as the project matures, documents govern and
  meetings almost disappear. Preserve that white space; do not pad it.

Meetings open a popup in a fixed minutes format: form bar, title, participants as mono
chips, then Summary / Decisions (numbered, or "None taken" stated plainly) / Actions
(each with an owner) / Attachments (evidence chips carrying exhibit letters A–K, the
letters in accent type). Six meetings carry a "T1…T6" transcript badge.

A sticky chrome bar at top carries the phases as jump links and one bracket, verbatim:
"idea → production: 14 weeks · governance: ongoing", plus a link "PLAN OF RECORD →".
A fixed bottom disclosure bar: ink, mono, yellow chip "CF-021", "Ostermill is a
designed composite." Recurring small entries ("Pod session", Wednesdays) render muted.

## Locked design system

Diegetic side: the 2014 ERP pastiche (gray #D8D6D0 chrome, thin borders, blue-gray
invite chips, dense 10px type). Reader chrome: ink #14171A, yellow #E8AE00 (dosage:
small chips and one active marker, never washes), mono type (IBM Plex Mono class),
Archivo Black for popup titles. Danger red #B3261E ONLY for the incident-thread
ghosts. No photography; any illustration is ink line art.

## What is OPEN for exploration (the assignment)

The month-grid density and how six months plus two strips compress on one page; the
phase-band rendering (edge ticks vs headers vs washes, within the dosage law); the
ghost-annotation treatment; the popup's layout at minutes-density; how the Prove week
strip and the Operate chip strip read as deliberate register changes rather than
missing content; mobile behavior; whether the ERP pastiche can get MORE convincing
(toolbar, view tabs, "logged in: okafor.d") without becoming a joke.

## Hard failures

Merging the two languages into one modern UI. A "beautiful" contemporary calendar
(the datedness is fiction, not neglect). Filling the Operate strip to look busy.
Yellow washes. Any incident dramatization beyond the dry ghost notes. Rounded SaaS
styling on either language.

## Deliverable

The calendar page, desktop + mobile, with one popup open (the 26 March adjudication:
five decisions, three actions, two attachments, T2 badge). Single-file HTML or
frames. Annotate deviations with a one-line argument.
