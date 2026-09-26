(function(){
  var host=document.querySelector('[data-learning-footer]');
  if(!host)return;
  host.className='learning-footer';
  host.innerHTML='\
    <div class="learning-footer__head"><div><p class="learning-footer__eyebrow">Agentic AI for Product Leaders</p><h2>Explore the Ostermill case file.</h2></div><p class="learning-footer__intro">Follow one project from the first proposal through a year of operation. Every decision connects to the meeting, evidence and recorded behavior behind it.</p></div>\
    <div class="learning-footer__featured">\
      <a class="learning-footer__card" href="calendar.html"><small>Interactive calendar</small><strong>Follow the project</strong><span>Meetings, decisions, owners and the evidence each one produced.</span></a>\
      <a class="learning-footer__card" href="project-gantt.html"><small>Project Gantt</small><strong>See plan and actual</strong><span>Sixteen weeks to production, then the operating year.</span></a>\
      <a class="learning-footer__card" href="agent.html"><small>Monitoring replay</small><strong>Watch the agent work</strong><span>Intake, retrieval, gateway, decision, output and handover.</span></a>\
      <a class="learning-footer__card" href="exhibits.html"><small>Evidence A to K</small><strong>Inspect the record</strong><span>Briefs, evaluations, incidents, revisions and transcripts.</span></a>\
    </div>\
    <div class="learning-footer__directory">\
      <section class="learning-footer__group"><h3>Project journey</h3><a href="case-file.html"><span>Case file</span><em>Guide</em></a><a href="personas.html"><span>Our people</span><em>Profiles</em></a><a href="calendar.html"><span>Project calendar</span><em>Interactive</em></a><a href="project-gantt.html"><span>Project Gantt</span><em>Interactive</em></a><a href="project-plan.html"><span>Plan of record</span><em>Document</em></a></section>\
      <section class="learning-footer__group"><h3>Build and test</h3><a href="prototypes.html"><span>Prototype lab</span><em>Artifact</em></a><a href="briefs.html"><span>Human and executable briefs</span><em>C and D</em></a><a href="approval-screen.html"><span>Approval screen</span><em>E</em></a><a href="agent.html"><span>Agent monitoring replay</span><em>Interactive</em></a><a href="eval-simulator.html"><span>Evaluation lab</span><em>Interactive</em></a></section>\
      <section class="learning-footer__group"><h3>Evidence</h3><a href="exhibits.html"><span>Exhibits A through K</span><em>Index</em></a><a href="exhibit-h-postmortem.html"><span>Incident postmortem</span><em>H</em></a><a href="exhibit-i-revision-record.html"><span>Revision record</span><em>I</em></a><a href="exhibits.html#ex-j"><span>The appeal</span><em>J</em></a><a href="exhibit-k-posting.html"><span>Role posting</span><em>K</em></a></section>\
      <section class="learning-footer__group"><h3>Meeting record</h3><a href="transcripts/T1-friday-demo.md"><span>Friday demonstration</span><em>T1</em></a><a href="transcripts/T2-adjudication-withdrawal.md"><span>Prototype adjudication</span><em>T2</em></a><a href="transcripts/T3-go-meeting.md"><span>Go meeting</span><em>T3</em></a><a href="transcripts/T4-hours-debate.md"><span>Design and hours debate</span><em>T4</em></a><a href="transcripts/T5-readiness-review.md"><span>Readiness review</span><em>T5</em></a><a href="transcripts/T6-postmortem.md"><span>Postmortem</span><em>T6</em></a></section>\
    </div>\
    <div class="learning-footer__base"><span>Designed composite. No real company or people.</span><span>All project surfaces use the same evidence record.</span></div>';
})();
