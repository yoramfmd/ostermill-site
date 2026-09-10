# Book canon sync for the site session · 2026-08-20, end of day

> **SUPERSEDED IN FULL, 2026-08-26.** The current reference is
> `BOOK-CANON-SYNC-2026-08-26.md` (rev 43, hash 8b6d8b4e0afb, 240 pages,
> volumes 1,263/924/33/891/339). Nothing below is authoritative; kept for history.



> **SUPERSEDED IN PART, 2026-08-23, rev 29.** The book is now `03992dcb5338`, **246 pages**, not
> 250. And the four-week production volumes changed: **1,263 processed, 924 drafted, 33 rejected,
> 891 sent, 339 walled**, replacing 1,248 / 880 / 368. The old figures were exactly four times
> R. Vaughn's week to the unit, which a cold reader read as a company whose volume did not move
> for a month, and the split left no bucket for a rejected draft while override frequency was
> reported at 12.3%. **Do not sync new site work against the numbers below until this file is
> re-derived from rev 29.** Task success 96.1 and override 12.3 are unchanged, both being
> share-weighted. Rationale in `DECISION-REGISTER.md` rows C59 and C60.

Written from the book track to the site track. **The book moved in fourteen places today**, and
several of them land directly on workstream A, which is the site's critical path. Read the deltas
before writing another golden-set case.

Authority: `AGENTIC-AI-FOR-PRODUCT-LEADERS.md` at 62,652 words and
`proof/ONEBOOK-READING-PROOF.pdf` at 250 pages, both built 2026-08-20. Every figure below was read
back out of the typeset proof, not from memory.

---

## 1. The three arbitrations, answered from the book

The site brief lists these as "Yoram arbitrates, the book should win." The book now has an answer
for all three, so they are settled rather than open.

**B1 · Demo timing. The book says the last week of February, and it moved today.** It previously
said the second week of March, which put Dana's week beside Ruth (the week of 3 March) *before* the
demonstration she was hired to reopen. The whole opening of Decide depends on the demonstration
having already closed the question. Sequence, fixed:

| | |
|---|---|
| Late Feb | Tom's sentence at the monthly ops review |
| Thu, last week of Feb | Priya's four hours. Six people see it Friday morning |
| Week of 3 March | Dana shadows Ruth. Exhibit A |
| 26 March | Three prototypes adjudicated by Ruth |
| 2 April | Go memo signed. Exhibit B |

**B2 · Rung renumbering. Refusal at rung 4 stands, and it is now asked for on the page.** The gate
previously refused a promotion nobody had proposed. **T. Brindle asks for it at the week-nine
review**, on the v1 number: *if it is right seventy-nine percent of the time and improving, why
will a person still read every one.* Exhibit F carries a **What was asked** line above the verdict.
Verdict unchanged: ship at rung 2, no-go at rung 4.

**B4 · Exhibit G gross counts. Retired. Use the new set.** The old figures broke the design
economics: 3,921 sends in four weeks is 980 a week, and at the 74-second median that is twenty
hours of review a week against a budget of five and a half.

| Retired | Canon |
|---|---|
| 4,180 processed / 3,921 sent / 259 walled | **1,248 processed / 880 sent / 368 walled** |
| override 14.2% | **override 12.3%** |
| 218 approved under 15s | **96 approved under 15s**, against a decile of 88 |
| fell 14.2 to 9.6 | **fell 12.3 to 8.1** |
| (unstated) | **4.5 h/wk against the 5.5 the design bought**, stated in the exhibit |

The rule underneath: **the agent works the population Ruth worked.** 312 accounts a week, 220
written to. Four weeks is 1,248 and 880. Any future volume figure derives from 312 and 220 and is
never invented to make two other numbers agree. There is no thousand-case weekly backlog; that was
a fabrication and it is withdrawn in the book, the bible and the register.

---

## 2. What workstream A has to encode, and one distinction that will bite

**The twenty and the twelve are two different sets, and the site brief currently blurs them.**

- **The twenty** are the prototype cases Ruth adjudicated on 26 March, twelve of them drawn from her
  forty-one holds. That is the judge / sorter / triager comparison. Surfaces 5 and 6.
- **The graded set is twelve, in two tranches.** **Nine observed**, drawn from the twenty, with
  eleven of the twenty retired. **Three constructed**, written under GR-05 during Design, never
  among the twenty, because a planted instruction does not occur in a real week. Surface 7.

A golden-set JSON that treats all twenty as graded cases will contradict the book. Model the
provenance field explicitly: `observed` with its source, or `constructed` with the rule it was
written against.

**Priya's week-ten hostile pass hardens the three constructed cases. It does not add cases.** The
set stays at twelve until the August incident takes it to thirteen, then nineteen at twelve months.

**Prototype comparison, on the twelve protected accounts, 26 March.**

| Shape | Holds missed | How the failure presents |
|---|---|---|
| A · judge | 7 / 12 | A confident, well-written letter to the customer |
| C · sorter | 7 / 12 | Nothing. No signal at all |
| B · triager | 3 / 12 | A draft in the queue, read by Ruth before it sends |

Stopping condition, written 24 March before any run: if the best candidate **writes to** more than
three of the twelve protected accounts, no agent is built. B met it at exactly three.

**Eval v3, week eleven. Every number here is canon and they all reconcile.**

| Case class | Cases | Runs | pass^10 |
|---|---|---|---|
| Routine, no signal. Draft | 4 | 40/40 | 4/4 |
| Signal present, resolvable. Draft | 3 | 24/30 | 2/3 |
| Adversarial input, constructed | 3 | 27/30 | 2/3 |
| Signal present, not resolvable. Stop | 2 | 12/20 | 0/2 |

pass@1 **103 of 120, 86 percent**. pass^10 **8 of 12, 67 percent**. Nineteen-point gap.

**Movement, and one cell changed today.**

| | v1 wk8 | v2 wk10 | v3 wk11 |
|---|---|---|---|
| pass@1 | 79% | 83% | 86% |
| pass^10 | 4/12 | 7/12 | 8/12 |
| Payment in transit | 4/10 | 10/10 | 10/10 |
| Active sales conversation | 4/10 | 7/10 | 7/10 |
| Dispute-adjacent | 5/10 | 5/10 | 5/10 |
| **Adversarial, prompt injection** | 9/10 | 7/10 | **7/10** |

**The adversarial case did not recover.** It was 9/10 at v3 and that could not be true: three cases
at 27 of 30 runs with two clean at ten of ten leaves the third at seven. It now regresses on the v2
retrieval change and **ships named rather than fixed**, which is the truer story and preserves every
headline number.

**The week-eight failure sort is twenty-five failures, not seventeen.** 79 percent of 120 runs
leaves 25. Seventeen is the week-eleven number.

---

## 3. Everything else that moved, with old and new

| # | Was | Now |
|---|---|---|
| 1 | The family shop appeared twice: April, $1,900, eleven-year customer, three days after the funeral (Part One) and July, $410, nineteen years, Zanesville (Observe) | **One account.** Zanesville, nineteen years, owner died on a Thursday in July, daughter opened the mail the following Tuesday, **$410.00 on invoice 4471**, parts delivered **May**, 41 days past terms, sent five days after the death. CRM note 17 July. Ostermill notified 5 August |
| 2 | The March near-miss | Unchanged and **a different person**: a purchasing manager, not the owner. Do not merge them |
| 3 | Exhibit F: write-off authority "granted in the memo of 2 April", which the memo did not contain | **Exhibit B's launch rung now grants it**: drafting only, with one exception above the line, write-offs under the small-balance policy, deterministic, capped, reversible by a journal entry |
| 4 | Design wrote the promotion rule "in March" | **April.** Design runs 2 April to early May; both briefs 22 April, approval screen 6 May |
| 5 | Enforced list of **five** constitutional rules, described as never having grown | **Six, and six in April too, but not the same six.** Dispute, bankruptcy, negotiation, credential scope, kill signal, and from August the seven-day state change. The write-off rule **retired at the week-eleven gate** with the authority it bounded. Both changes logged in Exhibit I with a new row and an enforced-list line |
| 6 | The wall table in the human brief lists four | Still four, and that is correct: it is written in the language of the work. The credential scope and the kill signal were built in Design and are written in the language of the platform. **Surface 6 should show six at the gateway and four on the brief** |
| 7 | Prove's coverage statement named a **2019** ERP migration | **2014**, matching the migration Chapter 1 builds at length |
| 8 | The records project took nine months, funded by the May reconstruction request | **A year**, June to June. The May request arrived when it was most of the way built and starved of attention |
| 9 | No ledger re-issue after any promotion | **Both promotions re-issue the ledger.** Rung 4 removes the approval, so review seconds leave the routine class and reappear as sampling on the class that carries it. The human line moves twice, down and up. Dated, never totaled |
| 10 | Observe's fresh-eyes sample read as a new idea | **It is Design's random sample, repointed**, and says so. Design's draw keeps Marcus calibrated against a queue of escalations; Observe's reads approved drafts, before send, by somebody who did not queue them |
| 11 | Prove cited a scribe trial as finding nothing | **Corrected.** Lukac et al., NEJM AI, Nov 2025, DOI 10.1056/AIoa2501000. Three arms; one scribe fell ~9.5% against control and was significant, the other showed no significant change. The chapter now uses the contrast |

---

## 4. Two clock conflicts to resolve

**The fourteen weeks does not reconcile.** The book gives **eleven weeks from the signed memo to
ship** (2 April to roughly 18 June), and **sixteen weeks from the demonstration to ship**. Fourteen
is neither. If the site's fourteen-week clock is load-bearing on the calendar and the plan of
record, one of the two has to move, and the book's eleven is now cited in six places including the
memo's kill number, which reads "by week eight of production."

**The arc is about sixteen months, not seventeen.** Late February 2026 to the twelve-month revision
record in June 2027 is 15.6 months. Either is defensible in prose; the site and the book should not
say different things.

---

## 5. New book structure the site may want to mirror

Four things exist now that did not this morning.

- **A preface, "Before you start"**, ahead of Part One. Six terms and three properties: it answers
  differently on Tuesday; the decisions happen after you ship; nobody's job covers the after.
- **A coda, "What to keep"**, after Operate. Six sections, the first and longest being the method
  for extracting judgment, which the book had asserted and never taught.
- **Two appendices**: the ladder (what changes as autonomy rises) and **five blank artifacts**, which
  are the graded case, the judge calibration record, the retrieval-scope decision record, the
  constitutional rule, and the supervisory ledger. **Those five are downloadable-artifact candidates
  for the site**, and the graded-case template is the same shape workstream A is filling.
- **A plan page, pages 69 to 70**, opening Part Two: Ostermill's calendar on a rail, all forty-two
  deliverables beside it in book order, eleven exhibits and thirty-one cards. It is generated from
  the chapters rather than typed, and the build asserts the counts. **This is the book's version of
  the site's calendar surface**, and the two should agree.

---

## 6. D1

Still gagged: no year-one total, no payback period, no cumulative fixed cost, anywhere.

What is new is that the book now says **why**, in Decide and again in Operate. Costs are a rate
times a quantity and are measured. Value is a counterfactual, and the central one is a harm that did
not occur, which cannot be measured because it did not happen. So the memo names which side is
which, with an owner against each and no ratio between them. **If the site builds a ledger surface,
build it as two columns and a name, not as a number.**

---

## 7. What I would do first, in the site session

1. **Re-run the sync sweep against section 3 before writing another case.** Eleven of the fourteen
   changes touch text that already exists in the bible, T1, T5, the bench, the calendar or the
   timeline.
2. **Fix the golden-set schema before the fifteen remaining cases are written**, so provenance and
   the twenty-versus-twelve distinction are structural rather than retrofitted. This is the one
   change that gets more expensive every day.
3. **Take B1, B2 and B4 as settled** and close them in the site register.
4. **Raise the fourteen-week clock with Yoram**, because it is the only conflict where the book may
   not be the right winner. The site may have a reason for fourteen that the book does not know.
