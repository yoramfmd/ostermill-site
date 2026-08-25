# T5 · The all-owner readiness review

Canon draft v1, 2026-08-20. Sources: CASE-FILE-BIBLE (eval three passes; the three
causes; regression canon; the second kill at the Prove gate; four-question review;
suspension conditions), MEETING-CALENDAR-CANON rows 15/17 (merged 08-20: the
four-question review is a segment of this meeting, and what it revokes is the
write-off authority). Dated by the project clock, which is all the bible fixes:
week 11, the week before launch.

---

## MEETING RECORD · OSTERMILL INDUSTRIAL SUPPLY

**Subject:** Launch readiness, all owners; eval v3 readout; four-question review
**When:** Week 11, the week before launch; 9:00 to 10:45
**Where:** Columbus, third-floor conference room
**Present:** D. Okafor · R. Vaughn · M. Ellery · P. Nair · T. Brindle
**Record:** auto-transcription, cleaned for the file by D. Okafor

**Summary.** P. Nair presented the v3 eval readout: 86 percent pass@1, 8 of 12 cases
clean across ten runs, 103 of 120 successes, against 79 percent and 4 of 12 at first
measurement. Failures were sorted by cause, not by count. The four-question review was
run against each granted capability. On the write-off authority, P. Nair's adversarial
case showed the agent conceding a disputed charge with no person in the path;
M. Ellery revoked the capability in under two minutes. Launch at rung 2 approved by
all owners, nothing above the break.

**Decisions.**
1. Launch approved at rung 2. Each owner signed their line in the room.
2. Write-off authority revoked. Suspended, not retired. Restoration conditions
   recorded at launch: a dispute opened in the email queue creates an account flag
   within one business day, and the graded set carries four dispute-adjacent
   write-off cases at ten of ten.
3. The worst slice, missed handover on the two unresolvable-signal cases (12 of 20
   runs stopped correctly), is accepted at rung 2, where a miss is a draft R. Vaughn
   deletes. The same number is recorded in advance as the ground for refusing rung 4,
   where a miss is a letter that arrived.
4. The sales-conversation ceiling (7 of 10) is recorded as a data limitation, the
   stale opportunity flag, and not carried as an agent defect.
5. Eval v3 is frozen as the launch baseline. Any fix re-runs the whole set.

**Actions.**
1. P. Nair: launch runbook; walls telemetry live from day one.
2. M. Ellery, D. Okafor: six instruments live at launch; approved-without-edit feeds
   the week-8 condition from the memo of 2 April.
3. M. Ellery: records-change proposal for the dispute flag, owned outside the project.
4. D. Okafor: the readout, the sort, and the revocation filed as one exhibit.

---

**NAIR:** Three passes. Week 8, 79 percent pass@1 and four of twelve clean across ten
runs. Week 10, 83 and seven. This week, 86 and eight. One hundred three of one
hundred twenty runs. I want the movement on the record, not just the score. The agent
we are shipping is materially better than the one we first measured, and the version
number is the fix loop working.

⟨The eval is diagnostic before it is a gate. A readout that arrives once and is only
a verdict teaches a team that evals refuse rather than instruct. Part Two, Prove.⟩

**ELLERY:** Week 10 to 11. What did the fixes cost?

**NAIR:** One of them cost us a regression. The retrieval fix that took payment-in-
transit from four of ten to ten of ten added four hundred milliseconds a case and
dropped a passing adversarial case from nine to seven. We caught it because we re-ran
the whole set, not the case we touched. And it is not recovered: it ships at seven of
ten, named on the readout. I would rather ship a named regression than a quiet
average, because the day we only re-run what we touched is the day this table stops
being evidence.

**OKAFOR:** The failures that remain. Sorted by cause, because the count alone tells
you nothing about what to do. Cause one, the signal was reachable and the agent did
not look: that was payment-in-transit, remittance advice sat outside retrieval scope.
A defect. It cost an afternoon. Cause two, the signal exists and no system can reach
it: the dispute living in an email thread. That is a records problem, it gets a
records owner, and nobody in this room is allowed to call it a model problem. Cause
three, the signal exists nowhere but in Ruth: her four a week. Permanent. Belongs to
a person. Never on a fix list.

⟨Three causes, three different actions, and only one of them is engineering. The sort
is the deliverable; the score is its summary. Part Two, Prove, the readout.⟩

**OKAFOR:** Four questions, per capability. What does it decide. At what autonomy.
Who answers for its worst output. What model version. We run them against everything
the memo and the design granted. The drafting authority clears. The write-off authority is why
Priya is smiling like that.

**NAIR:** Week 11 adversarial case. I built an account with a nine-dollar disputed
line. The dispute is real and sits in an email thread. The dispute field is empty,
which is true of five of Ruth's forty-one in an ordinary week. Every precondition on
the wall was satisfied: no dispute flag, balance under the floor. The agent wrote it
off, alone, correctly per policy. Ostermill conceded a disputed charge and no person
was in the path.

**BRINDLE:** The justification we all signed said the downside was capped. Forty
seconds to reverse the ledger entry.

**ELLERY:** The downside was capped in the wrong unit. Reversing the ledger does not
reverse the customer having been told the charge was dropped. On a routine balance a
write-off is an accounting entry. On a disputed balance it is a position in a
disagreement. Identical in the ledger. Unrelated in the relationship.

**ELLERY:** Worst output: we concede disputes without knowing it. Who answers: I do.
It is revoked. It ships with nothing above the break.

⟨Under two minutes. The four questions exist so that revocation is short: by the time
"who answers for its worst output" has an honest answer, the decision has usually
already been made. A late gate that cannot take something back is a ceremony. Part
Two, Prove, the second kill.⟩

**NAIR:** For the record, four people reviewed that boundary in Design and all four
were right about what they were looking at. The wall was enforced. Whether the signal
the wall reads exists in the world is a different question, and it only became
visible because someone was paid to be hostile for a week.

**OKAFOR:** Which is why the revocation is a suspension with conditions and not a
verdict. The flag fires within one business day, four dispute-adjacent cases run ten
of ten, and the authority comes back. The boundary is worth what its input is worth
on the day it matters. Ostermill can decide the input is worth fixing.

**VAUGHN:** My line, then. The two cases it cannot resolve stop correctly twelve
runs in twenty. At this rung the eight misses are drafts I delete before anyone sees
them. I sign for that. If anyone proposes rung 4, the same eight misses become
letters that arrived, and I am on record now as the no vote until that number moves.

**OKAFOR:** Recorded, and pre-agreed as the refusal ground. Owners, your lines.

**[Signatures. Meeting ends 10:45]**

---

**MARGIN, D. OKAFOR, added with the file.** The best-argued capability in Design
died in two minutes at Prove, and the room was proud of it, which is how you know
the gate is real.

---

## Register notes (chrome side, build reference)

- Calendar correction executed 08-20: former rows 15 and 17 are one meeting (this
  one); the four-question review is its segment; the week-eleven revocation is the
  WRITE-OFF authority, not retrieval scope. Timeline node 13 corrected to match.
- The four questions rendered as the census's four fields, which the bible states
  as the register's fields; flagged ⊕ as an alignment, not new fact.
- Numbers reconcile per canon: 79/83/86; 4/7/8 of 12; 103 of 120; 12 of 20 on the
  two unresolvable cases (5/10 dispute-adjacent, 7/10 sales-conversation); 400ms;
  9 to 7 recovered.
- Ruth's pre-registered no vote plants the end-of-quarter rung-3 refusal without
  revealing its other ground (the 9-second decile, which belongs to Observe).
- Dated "week 11, the week before launch": T5 no longer waits on the launch-month
  gap; the absolute month stays open in the bible and nothing here fixes it.
- Voice: no em dashes; minutes dry.
