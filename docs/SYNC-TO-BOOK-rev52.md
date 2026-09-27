# Ostermill site · what needs to change

For the session that works on ostermill.com. Written 2026-09-26 from the book side.
The book is the canon; this site matches it, never the other way round.

---

## The book you are matching

`books/OneBook/AGENTIC-AI-FOR-PRODUCT-LEADERS.md`

**Rev 52, locked 2026-09-26. Manuscript sha256 `efdf672543fa`, 67,506 words, 250 pages.**

Check it before you start:

    cd books/OneBook/proof/pipeline && python3 booklock.py status

If the hash it prints is not `efdf672543fa`, the book moved again and this note is stale.
Stop and re-derive rather than trusting anything below.

---

## Already done from the book side, 2026-09-26

Three site pages were corrected as a direct consequence of rev 51 and are committed to
nothing yet, so they are sitting uncommitted in the working tree:

- `calendar.html` and `project-plan.html`: the fresh-eyes disagreement rate is no longer
  measured on **approved drafts**. It is measured on **drafts drawn before the screen**,
  as the agent produced them. Both instances updated.
- `exhibits.html`: the freight-line override slice was **31.4 percent**, which is not
  realizable as a whole number of drafts at any denominator consistent with a 16 percent
  share of 924. It now reads **31**.

Nothing else on the site was touched.

---

## The one page that is stale, and it is one page

**`calendar.html` is a rung behind. Every other page already matches the book.**

An earlier pass migrated this site from rung-3 to rung-4 numbering and missed `calendar.html`.
The site now disagrees with itself, live:

| Page | Rung-3 refs | Rung-4 refs | State |
|---|---|---|---|
| `calendar.html` | **7** | 1 | **stale** |
| `project-plan.html` | 0 | 2 | correct |
| `exhibits.html` | 0 | 2 | correct |
| `exhibit-i-revision-record.html` | 0 | 1 | correct |
| `eval-simulator.html` | 0 | 1 | correct |

What `calendar.html` says, verbatim, and all of it is live right now:

> "Quarter review · rung 3 refused · kill number retired while met"
> "Rung-3 promotion · 1.4%"
> "Routine balances promoted to rung 3 at a 1.4% fresh-eyes disagreement rate after the
> full random-sample quarter."
> "Rung 3 for routine balances refused: a 6.1% override rate..."
> "worst slice accepted at rung 2 and pre-declared as the rung-3 refusal ground."

What the book says at rev 52:

> "Routine balances went to rung 4 in May, on the condition Observe had attached: a
> quarter of random-sample review with a fresh-eyes disagreement rate under two percent,
> read on drafts drawn before the screen, as the agent produced them. It came in at 1.5."

And `exhibits.html`, already correct and already live, says "the rung 4 promotion in May."

**So this is a finish-the-migration job, not a decision and not a site-wide sweep.** It is
two files: `calendar.html` for the rung numbering and the figure, and one stale figure in
`exhibit-i-revision-record.html`. Changes in `calendar.html`:

1. The rung-3 references become rung 4. **Seven of them**, at lines 375, 380, 484, 491, 492,
   504 and 505. Careful: the file also contains "T. Brindle proposes rung 4," the week-nine
   ask, which is **already correct**; leave it alone.
2. **1.4 percent becomes 1.5 percent. Three instances here**, at lines 380, 505 and 557. All
   three are the same fact, the fresh-eyes quarter figure: a chip label, the meeting summary,
   and the `m24` packet attachment. Line 557 sits in a JS data array, so a search-and-replace
   over visible text alone will miss it.

After the edit `calendar.html` should hold zero rung-3 references and eight rung-4.

## And one more file, which is not a rung problem

**`exhibit-i-revision-record.html`, line 76, also reads 1.4 percent** and must become 1.5:

> "May · Rung 4, routine balances · Yes · Yes · Condition from Observe met at 1.4%"

That line already says **rung 4**, correctly. Only the figure is stale. Four instances of
1.4 percent exist in this repo: three in `calendar.html` and this one.

*Added 2026-09-26, found by the Ostermill session reviewing this note, and verified here. My
sweep missed it because I searched for rung-3 references and then corrected the figure only on
the pages that search returned. A page that already had the right rung but the wrong number
was unreachable by that search. The rung and the figure are two different facts and needed two
different sweeps. I ran one and reported on both.*

*Counts corrected 2026-09-26. An earlier draft of this note said eight rung-3 references and
two instances of 1.4 percent. It is seven and three. Count the thing, then write the number.*

Note the two rung-4 events are different and both real, so do not collapse them: rung 4 is
**refused** at the quarter review in Observe, and **granted** in May in Operate. `project-plan.html`
carries the refusal, `exhibits.html` carries the promotion, and `calendar.html` needs both.

*Correction, 2026-09-26: the first version of this note said the offset was systematic across
the whole site and told you to sweep everything. That was wrong. It came from grepping
`calendar.html` and `project-plan.html` together with `grep -h`, which suppresses the filename,
and then attributing lines to both files when all of them were from `calendar.html`. The flag
removed the exact information the claim depended on.*

---

## Why nobody caught it

**Nothing on this site records which build of the book it matches.**

`CLAUDE.md` says the canon the site syncs to is
`~/repos/ostermill-site/docs/BOOK-LOCK-2026-08-20.md`. **That file does not exist.**
The repository's evaluation canon lives in root-level `canon/`; `docs/` did not exist
before this sync, and no file carried a rev marker, hash or date.

So the site has been free-running against a moving book with no tripwire. That is the same
failure the book side fixed for itself with `booklock.py`, and the site never got one.

**Recommended, and cheap:** add `docs/BOOK-CANON.md` to this repo carrying the manuscript
hash and rev the site was last reconciled against, and update it in the same commit as any
sync. One line is enough:

    Matched against: rev 52, efdf672543fa, 2026-09-26

A session can then check in one command whether the site is current, instead of discovering
a year-old offset by accident.

---

## What is not affected

The rev 51 and 52 book changes touched the promotion evidence, the write-off restoration, the
kill-number wording, the override cross-check, three external citations, the eval templates,
and the front-matter series page. Of those, only the fresh-eyes population and the 31.4 slice
have any counterpart on this site, and both are handled.

The eval canon in root-level `canon/` was not touched and does not need to be.
