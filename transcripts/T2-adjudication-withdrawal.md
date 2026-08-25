# T2 · The adjudication, and the withdrawal

Canon draft v1, 2026-08-20. Sources: CASE-FILE-BIBLE (three prototypes, week of 23
March; Agent v1 withdrawal; handover-rule origin; stopping condition), MEETING-CALENDAR-
CANON rows 7 and 8. Two sessions, one day, one record. Chrome tags ⟨ ⟩ render in the
reader margin.

---

## MEETING RECORD · OSTERMILL INDUSTRIAL SUPPLY

**Subject:** Prototype adjudication; disposition of candidate shapes
**When:** 26 March. Session one 9:00 to 10:35; session two 14:00 to 14:50
**Where:** Columbus, AR bullpen (session one); third-floor conference room (session two)
**Present:** Session one: R. Vaughn, D. Okafor, P. Nair. Session two: D. Okafor,
P. Nair, T. Brindle
**Record:** auto-transcription, cleaned for the file by D. Okafor

**Summary.** R. Vaughn adjudicated the three prototype shapes against twenty cases,
twelve drawn from her forty-one held accounts, using one table with three columns. Shape
A mishandled seven of twelve and was confident on five. Shape C mishandled seven,
silently. Shape B mishandled three, each time producing a queue entry naming the signal
that stopped it. The stopping condition written 24 March, that the best candidate writes to more than
three of the twelve protected accounts, was met by B at exactly three. In session two the
results were presented as a table, not a demonstration, and dispositions were agreed.

**Decisions.**
1. Shape A (the judge) withdrawn. The holds turn on signals captured nowhere a system
   can read. Recorded as a records problem, not a model problem, and not to be reopened
   as a capability question.
2. Shape C (the sorter) withdrawn. A filter routes only what someone flagged, and the
   holds are defined by the absence of a flag. It ties A on misses and cannot improve.
3. The Agent v1 proposal (February) withdrawn by its proposer, before the go decision.
   Never built.
4. Shape B (the triager) proceeds to a decision memo. It drafts the routine outreach
   and stops on anything it cannot resolve, handing the account to R. Vaughn with the
   reason it stopped. It never decides a hold.
5. B's stop-and-hand-over behavior is the product line. Formal wording to the memo.

**Actions.**
1. D. Okafor: draft the go/no-go memo. Target 2 April.
2. D. Okafor: log the four hesitation cases from session one for the graded set.
3. P. Nair: archive all three prototypes with the run table; nothing survives into the
   build.

---

### Session one, 9:00

**NAIR:** Twenty cases, three columns. Column per shape. Same cases in the same order,
so a difference in a row is a difference in the shape, not the case. You mark each cell
right, wrong, or would-not-send.

**VAUGHN:** Who sees this afterward?

**OKAFOR:** The three of us and a memo. Nobody is being graded here but the software.

⟨Built badly and on purpose, all three, in a week. The selection basis is visibility of
failure, not accuracy. Part Two, Decide.⟩

**VAUGHN:** [case 4] A wrote them a letter. It is a good letter. It should not exist.
This is the account with the dispute sitting in an email thread. The dispute field is
empty, so the software thinks the money is just late.

**NAIR:** What did C do on it?

**VAUGHN:** Nothing. It never saw it. Wrong in the same way, just quieter. B stopped.
The entry says "correspondence references a dispute, dispute field empty." That is the
first true sentence any of the three has produced about this account.

⟨The failure-presentation column: A fails as a confident letter to a customer, C fails
as silence, B fails as a queue entry naming a signal. Same miss count for A and C; only
one of the three failure modes can be supervised. This column, not accuracy, does the
arguing this afternoon.⟩

**VAUGHN:** [case 9, then a pause of some seconds]

**OKAFOR:** What just happened?

**VAUGHN:** Nothing. I was thinking. This one is not wrong exactly. If the flag were
set I would still hold it a week, because of who they are and what month it is. Ask me
to write the rule down and I could not.

**OKAFOR:** That is the fourth time you have stopped like that.

**VAUGHN:** Fourth time it was that kind of account.

⟨Her disagreements say the machine is wrong. Her hesitations are something else: cases
where the right answer is contested rather than merely missed. The four pauses, not any
policy document, are where the handover rule comes from. Part Two, Design.⟩

**NAIR:** Final table. A, seven of twelve mishandled, confident on five. C, seven,
silent. B, three, all three stopped with the signal named.

**OKAFOR:** The condition Marcus and I signed on the twenty-fourth was more than three.

**NAIR:** Then B lives by nothing at all.

**OKAFOR:** B lives because we wrote the number down before we knew the score. Write it
today instead and we would be negotiating with the table.

⟨A stopping condition written before the run is the only reason this meeting can end
cleanly. Written after, it is a justification. Part Two, Decide: the kill number
follows the same logic one week later, at the memo.⟩

### Session two, 14:00

**BRINDLE:** Can I see it run? The B one.

**OKAFOR:** No. That is deliberate. You saw a demonstration a month ago and it cost
this project weeks of momentum in the wrong direction. What I have for you is a
table.

**BRINDLE:** Seven of twelve for A. But the letters themselves were good? If the
account manager cleaned up the list first, the way we do for the top forty.

**OKAFOR:** Then the account manager is the product, Tom. That is what February's
proposal always was. A person doing the judgment and software doing the typing, priced
as software doing the judgment.

**BRINDLE:** [pause] The Kessler situation. Which column catches that.

**OKAFOR:** B stops it if the signal is anywhere it can read. If the signal is only in
your head, nothing catches it, and that is not a thing we can buy our way out of. It is
a records question and it belongs to a different meeting.

**BRINDLE:** Then I withdraw February. Formally, since you write everything down now.
What I want in the memo: my people flag renegotiations, and the thing does not send
into an account mid-conversation.

**OKAFOR:** That goes in as a wall, not a request.

⟨A dies as a records problem, C dies as arithmetic, and v1 dies in front of its
proposer, before money moved, killed by a table nobody demonstrated. The mid-
renegotiation hold enters here as Tom's condition and survives to launch. Part Two,
Decide into Design.⟩

**NAIR:** For the memo, the one line I will fight for: it never decides a hold. It
drafts the routine two hundred and twenty and hands over the forty-one with a reason.

**OKAFOR:** That line is the product. Everything else is the memo agreeing with it.

**[Session ends 14:50]**

---

**MARGIN, D. OKAFOR, added with the file.** Whatever we build inherits this, not the
clean rows. Written on the run table, under the dispute case, the day the software
agreed with me.

---

## Register notes (chrome side, build reference)

- Seven chrome tags maximum held to five; the failure-presentation tag is the load-
  bearing one and feeds the simulator's shape mode directly (same three columns).
- "Kessler situation" continues T1's texture account; still queued for collision check.
- Canon guards honored: B survives at exactly 3 and nobody celebrates; A's withdrawal
  reason recorded as records-not-model, in the decision itself, so it cannot be
  reopened; Ruth adjudicates in ninety minutes inside a session under two hours; the
  prototypes are never demonstrated, and Dana says why; Tom withdraws v1 himself and
  buys the renegotiation wall in the same breath; the 220/41 arithmetic appears in
  Priya's mouth, where the memo's outcome statement will inherit it.
- The four pauses are logged as an action item, which is the thread the golden set's
  {hesitated} field picks up in workstream A.
- Voice: no em dashes; minutes dry; emotion only in what is recorded.
