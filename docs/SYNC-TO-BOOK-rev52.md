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

---

# Appended 2026-09-26 · rev 53 lands, and four more items

The book moved again the same day. **Rev 53, sha256 `01d9213652a6`, 67,717 words, 250 pages.**
Everything above still applies; this section adds to it. Re-check the lock before starting:

    cd books/OneBook/proof/pipeline && python3 booklock.py status

Cold read 10 found that every rev-51 correction had landed in the book's prose and not in the
card or exhibit that compresses it. Six were fixed in the book. **Four of those six are also
stated on this site**, in six HTML files plus the interactive prototype data. Two are not on the site at all and need nothing.

## 1 · The fresh-eyes draw, two files

The sample is drawn **before the screen**, on the draft as the agent wrote it, not "before send,"
which permits a draw after approval and editing.

- `exhibit-h-postmortem.html`, line 113: "Random-sample review, five drafts a week, drawn before
  send, read by a..."
- `exhibit-k-posting.html`, line 74: "Reads the random sample weekly, drawn before send, on
  drafts the reader..."

The book now reads, in both places: **drawn before the screen**, read as the agent wrote them,
by a person who did not queue them.

## 2 · The seven-day constitutional rule, one file

- `exhibit-i-revision-record.html`, line 69: "Constitutional rule added: no send when account
  state changed within 7 days"

The rule now covers write-offs as well, because the restored write-off authority depends on it:
**no send and no write-off when account state changed within 7 days**. Same line in the book's
Exhibit I.

## 3 · The prototype selection basis, three HTML files plus interactive data, and this is the substantive one

All three prototypes produced drafts and nothing was sent by any of them. The old claim was that
the triager was chosen for the visibility of its failures. That is not what the evidence shows.
**The discriminator is the pre-registered stopping rule, which only the triager cleared, and by
one case.** The queue shape is what that buys, not proof of it.

- `prototypes.html` line 129: "The selection basis was not accuracy. It was visibility of failure."
- `exhibits.html` line 114: "Selection basis: visibility of failure, not accuracy. A miss is a
  draft that waits for R. Vaughn rather than a silence she never sees."
- `calendar.html` line 439, inside the JS data: "Selection basis: visibility of failure, not
  accuracy."

And the three failure descriptions in `prototypes.html`:

| Line | Now says | Should say |
|---|---|---|
| 150 | "A confident, well-written letter to the customer" | a draft written with confidence, on 5 of the 7 it got wrong |
| 162 | "Nothing. Silence. The case sails through" | a draft, and no signal on any of the 12 |
| 173 | "A queue entry naming the signal that stopped it. The only failure mode of the three that can be supervised." | a draft with no stop, in a queue where 9 of 12 carried one |

**Line 173 is wrong in a way the book never was, and it is the one to fix first.** A queue entry
naming the signal that stopped it is what the triager produces when it *succeeds* at catching
something. A miss is precisely the absence of that entry. The site currently describes the
shape's success as its failure mode, and then calls it the only supervisable failure of the
three, which is the unearned visibility claim in its strongest available form.

Note that `prototypes.html` is interactive and invites the reader to click a case. Check whether
the per-case data carries the same three descriptions; the sweep above covered the visible
labels.

## Not on this site, no action

The two remaining rev-53 fixes have no counterpart here: the third hypothesis in the
override cross-check, and the scoping of the claim that a blank filled with a plausible value is
beyond any eval. Verified absent by search, with the searches for the surviving items above as
the positive control in the same run.
