/* Morninglight 2027 — lesson plans generated from the slides (no double authoring).
   Format follows the classroom Lesson Register plans: summary table → Learning Intentions + Assessment →
   Resources → numbered Teaching Script (time, Teacher talk / Key question / Teacher guidance / Activity note) → Where to next.
   Read in-app, print (lesson / week / term) or download (.html or Word .doc). */
(function () {
  var ML = window.ML, esc = ML.esc;

  /* ---------- shared document CSS (used in-app, in print, and inside downloaded files) ---------- */
  var DOC_CSS = [
    ".lpd{--navy:#233a63;--gold:#c1902e;--maroon:#8c2f39;--green:#2f6b4f;--slate:#4b5563;--rule:#c9bb9b;--paper:#f3ecdc;--card:#fffdf7;--ink:#20241f;color:var(--ink);font-family:'Atkinson Hyperlegible',Verdana,'Segoe UI',sans-serif;font-size:15px;line-height:1.55}",
    ".lpd *{box-sizing:border-box}",
    ".lpd .lp-doc{background:var(--card);border:1px solid var(--rule);border-radius:10px;padding:26px 30px 30px;margin:0 0 26px}",
    ".lpd .lp-eyebrow{font-family:ui-monospace,Menlo,monospace;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#6b6b5f;margin-bottom:4px}",
    ".lpd h1.lp-title{font-family:'Baloo 2',Georgia,serif;font-weight:800;font-size:28px;line-height:1.15;margin:0 0 4px;color:var(--navy)}",
    ".lpd h2.lp-title{font-family:'Baloo 2',Georgia,serif;font-weight:800;font-size:23px;line-height:1.2;margin:0 0 14px;padding-bottom:6px;border-bottom:2px solid var(--paper);color:var(--ink)}",
    ".lpd .lp-roleplay{display:inline-block;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;background:#a53a2c;color:#fff;border-radius:4px;padding:2px 7px;margin-left:8px;vertical-align:middle}",
    ".lpd .lt-group{margin:0 0 16px}",
    ".lpd .lt-tbl{width:100%;border-collapse:collapse;font-size:14.5px}",
    ".lpd .lt-tbl th,.lpd .lt-tbl td{border:1px solid var(--rule);padding:7px 10px;vertical-align:top;text-align:left}",
    ".lpd .lt-th{width:150px;font-family:ui-monospace,Menlo,monospace;font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:#fff}",
    ".lpd .lt-row-navy .lt-th{background:var(--navy)}.lpd .lt-row-gold .lt-th{background:var(--gold)}.lpd .lt-row-maroon .lt-th{background:var(--maroon)}.lpd .lt-row-green .lt-th{background:var(--green)}.lpd .lt-row-slate .lt-th{background:var(--slate)}",
    ".lpd .lt-row-gold .lt-td{background:#fbf3de;font-weight:700}",
    ".lpd .lt-section-head{color:#fff;font-family:ui-monospace,Menlo,monospace;font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:7px 10px;border-radius:6px 6px 0 0}",
    ".lpd .lt-bg-navy{background:var(--navy)}.lpd .lt-bg-slate{background:var(--slate)}.lpd .lt-bg-gold{background:var(--gold)}",
    ".lpd .lt-cell-list{border:1px solid var(--rule);border-top:0;padding:6px 12px 6px 30px;margin:0 0 -1px}",
    ".lpd .lt-cell-list li{margin:3px 0}",
    ".lpd .lt-step-head th{background:var(--navy);color:#fff;border-color:var(--navy)}",
    ".lpd .lt-step-num{width:46px;text-align:center!important;font-family:'Baloo 2',Georgia,serif;font-size:20px;vertical-align:middle!important}",
    ".lpd .lt-step-title{font-weight:400}",
    ".lpd .lt-pad{width:46px;background:var(--navy);border-color:var(--navy)!important}",
    ".lpd .lt-step-title strong{font-size:15.5px}",
    ".lpd .lt-step-time{float:right;font-family:ui-monospace,Menlo,monospace;font-size:11.5px;background:rgba(255,255,255,.18);border-radius:4px;padding:1px 7px;margin-left:8px}",
    ".lpd .lt-flag{font-family:ui-monospace,Menlo,monospace;font-size:10.5px;text-transform:uppercase;letter-spacing:.06em;background:#e7cd93;color:#3f351a;border-radius:4px;padding:1px 6px;margin-left:6px}",
    ".lpd .lt-substep-label{width:140px;font-family:ui-monospace,Menlo,monospace;font-size:10.5px;letter-spacing:.05em;text-transform:uppercase;font-weight:700}",
    ".lpd .lt-row-navy .lt-substep-label{color:var(--navy);background:#eef2f8}.lpd .lt-row-maroon .lt-substep-label{color:var(--maroon);background:#f7ecec}.lpd .lt-row-green .lt-substep-label{color:var(--green);background:#ecf5ef}.lpd .lt-row-gold .lt-substep-label{color:#7a5a12;background:#fbf3de}.lpd .lt-row-slate .lt-substep-label{color:var(--slate);background:#f1f2f4}",
    ".lpd .lt-row-maroon .lt-substep-val{font-weight:700}",
    ".lpd .lt-substep-val p{margin:0 0 .55em}.lpd .lt-substep-val p:last-child{margin:0}",
    ".lpd .lt-script{margin:4px 0 0 0;padding-left:22px;font-size:13.5px}.lpd .lt-script li{margin:2px 0}.lpd .lt-script .dir{font-style:italic;color:#555}.lpd .lt-script .frz{color:var(--maroon);font-weight:700}",
    ".lpd .lt-verse{font-style:italic;border-left:3px solid var(--gold);padding-left:10px;margin:2px 0}",
    ".lpd .lp-cover{padding:30px 0 22px;border-bottom:2px solid var(--paper);margin-bottom:24px}",
    ".lpd .lp-cover h1{font-family:'Baloo 2',Georgia,serif;font-size:34px;margin:0 0 6px;color:var(--navy)}",
    ".lpd .lp-cover .lp-meta{font-size:13px;color:#6b6b5f}",
    ".lpd .lp-soon{border:2px dashed var(--rule);border-radius:10px;padding:16px 20px;color:#6b6b5f;margin:0 0 20px}",
    "@media print{.lpd .lp-doc{border:0;padding:0;margin:0}.lpd .lp-page{page-break-before:always}.lpd .lp-page:first-child{page-break-before:avoid}.lpd .lt-row,.lpd .lt-step-head{page-break-inside:avoid}.lpd .lt-step-head{page-break-after:avoid}.lpd .lt-section-head{page-break-after:avoid}.lpd *{-webkit-print-color-adjust:exact;print-color-adjust:exact}}"
  ].join("\n");
  (function inject() { var st = document.createElement("style"); st.textContent = DOC_CSS; document.head.appendChild(st); })();

  var LEVEL = { look: "Look", think: "Think", dig: "Dig", live: "Live" };
  function para(t) { return String(t || "").split(/\n\n|\n/).filter(Boolean).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join(""); }
  function sub(color, label, html) { return html ? '<tr class="lt-substep lt-row-' + color + '"><td class="lt-pad"></td><td class="lt-substep-label">' + esc(label) + '</td><td class="lt-substep-val">' + html + "</td></tr>" : ""; }
  function row(color, th, td) { return '<tr class="lt-row lt-row-' + color + '"><th class="lt-th">' + esc(th) + '</th><td class="lt-td">' + td + "</td></tr>"; }
  function list(items) { return "<ul class='lt-list'>" + items.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>"; }
  function mins(m) { return m === 0.5 ? "30 sec" : (m % 1 ? m.toFixed(1).replace(".5", "½") : m) + " min"; }
  function coreOf(d) { var c = 0, a = 0; d.slides.forEach(function (s) { a += s.minutes; if (!s.optional) c += s.minutes; }); return { core: c, all: a }; }

  /* ---------- one slide → one Teaching Script step ---------- */
  var STEP_TITLE = { title: "Welcome & title", hook: "Hook", scripture: "Read the Bible", story: "Tell the story", question: "Searching question", dig: "Bible dig", roleplay: "Role-play", apply: "Head · Heart · Hands", verse: "Memory verse", review: "Review game", prayer: "Directed prayer", challenge: "This week’s challenge", recap: "Recap & Big Idea", scene: "Scene" };
  function stepRows(s, week) {
    var r = "";
    switch (s.type) {
      case "title":
        r += sub("navy", "Teacher talk", para(s.notes || "Show the title splash and welcome the class."));
        break;
      case "hook":
        r += sub("navy", "On screen", para(s.text));
        if (s.ask) r += sub("maroon", "Key question", esc(s.ask));
        if (s.checkin) r += sub("slate", "Check-in", esc(s.checkin.text || s.checkin));
        r += sub("green", "Teacher guidance", para(s.hint));
        if (s.notes) r += sub("green", "Activity note", para(s.notes));
        break;
      case "scripture":
        r += sub("gold", "Read aloud (" + esc(s.version || "CEV") + ")", (s.lines || []).map(function (l) { return '<div class="lt-verse">' + (l.ref ? "<b>" + esc(l.ref) + "</b> " : "") + esc(typeof l === "string" ? l : l.text) + "</div>"; }).join(""));
        if (s.notes) r += sub("navy", "Teacher talk", para(s.notes));
        break;
      case "story":
        r += sub("navy", "Teacher talk (read aloud)", para(s.narration));
        r += sub("green", "Activity note", "Click through " + s.beats.length + " on-screen beats: " + s.beats.map(function (b, i) { return (i + 1) + ". " + esc(b.text); }).join(" · "));
        if (s.notes) r += sub("slate", "Notes", para(s.notes));
        break;
      case "question":
        r += sub("maroon", "Key question", esc(s.text) + (s.options ? "<br>" + s.options.map(function (o, i) { return "ABCD"[i] + ") " + esc(o) + (i === s.answer ? " ✓" : ""); }).join(" &nbsp; ") : "") + (s.reveal ? "<br><i>Answer: " + esc(s.reveal) + "</i>" : ""));
        r += sub("green", "Teacher guidance", para(s.hint));
        r += sub("green", "Activity note", esc((LEVEL[s.level] || s.level) + " question · " + (ML.meta.modes[s.mode] || s.mode) + " · " + (s.seconds || 30) + "-second thinking timer on screen.") + (s.notes ? " " + esc(s.notes) : ""));
        break;
      case "dig":
        r += sub("maroon", "Key question", esc(s.prompt));
        r += sub("navy", "On screen", "<table class='lt-tbl'><tr><th>" + esc(s.columns[0]) + "</th><th>" + esc(s.columns[1]) + "</th></tr>" + s.items.map(function (it) { return "<tr><td>" + esc(it.left) + "</td><td>" + esc(it.right) + "</td></tr>"; }).join("") + "</table>");
        r += sub("gold", "Reveal", esc(s.reveal));
        if (s.notes) r += sub("green", "Activity note", para(s.notes));
        break;
      case "roleplay":
        r += sub("navy", "Teacher talk", "Introduce <b>" + esc(s.title) + "</b> (" + esc(s.ref) + "). " + esc(s.imagined || ""));
        r += sub("slate", "Cast", s.characters.map(function (c) { return "<b>" + esc(c.name) + "</b> — " + esc(c.desc || ""); }).join("<br>"));
        if (s.props || s.actions) r += sub("green", "Activity note", (s.actions ? esc(s.actions.join(" · ")) : "") + (s.props ? "<br>Props: " + esc(s.props.join(" · ")) : "") + (s.notes ? "<br>" + esc(s.notes) : ""));
        r += sub("slate", "Script", "<ol class='lt-script'>" + s.lines.map(function (l) {
          if (l.pause) return "<li class='frz'>FREEZE-FRAME: " + esc(l.pause) + " (" + (l.seconds || 20) + "s)</li>";
          if (l.direction) return "<li class='dir'>" + esc(l.text) + "</li>";
          return "<li><b>" + esc(l.character) + ":</b> " + esc(l.text) + (l.action ? " <i>(" + esc(l.action) + ")</i>" : "") + "</li>";
        }).join("") + "</ol>");
        (s.debrief || []).forEach(function (d) { r += sub("maroon", "Debrief question", esc(d.text) + (d.hint ? "<br><span style='font-weight:400'>Listen for: " + esc(d.hint) + "</span>" : "")); });
        break;
      case "apply":
        r += sub("navy", "Head", esc(s.head)); r += sub("navy", "Heart", esc(s.heart)); r += sub("maroon", "Hands", esc(s.hands));
        if (s.notes) r += sub("green", "Activity note", para(s.notes));
        break;
      case "verse":
        r += sub("gold", "Memory verse", "“" + esc(week.memoryVerse.text) + "” — " + esc(week.memoryVerse.ref) + " (" + esc(week.memoryVerse.version) + ")");
        r += sub("green", "Activity note", esc({ echo: "Echo: say each chunk, class echoes it back.", build: "Build: each click adds a chunk; read the growing verse together.", fade: "Fade: each click removes more words; can they still say it?", actions: "Actions: learn one action per chunk.", scramble: "Scramble: put the chunks back in order." }[s.activity] || s.activity) + (s.notes ? " " + esc(s.notes) : ""));
        break;
      case "review":
        r += sub("maroon", "Key question", esc(s.prompt || ""));
        r += sub("navy", "Answer", s.format === "truefalse" ? s.items.map(function (it) { return esc(it.text) + " — <b>" + (it.answer ? "True" : "False") + "</b>" + (it.why ? " (" + esc(it.why) + ")" : ""); }).join("<br>") : s.format === "whoSaid" ? s.items.map(function (it) { return "“" + esc(it.quote) + "” — <b>" + esc(it.who) + "</b>"; }).join("<br>") : esc(s.items.join(" → ")));
        r += sub("green", "Teacher guidance", para(s.hint || s.notes));
        break;
      case "recap":
        r += sub("navy", "Three takeaways", "<ol style='margin:0;padding-left:20px'>" + s.points.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ol>");
        r += sub("gold", "Big Idea", esc(week.bigIdea));
        if (s.notes) r += sub("green", "Activity note", para(s.notes));
        break;
      case "challenge":
        r += sub("maroon", "Challenge", esc(s.text));
        if (s.why) r += sub("navy", "Why", esc(s.why));
        if (s.takeHome) r += sub("green", "Activity note", "Print take-home cards from the challenge slide." + (s.notes ? " " + esc(s.notes) : ""));
        break;
      case "prayer":
        r += sub("gold", "How to pray", esc(s.tip) + " <i>(" + esc(s.style) + ")</i>");
        r += sub("navy", "Opening", esc(s.opening));
        s.phases.forEach(function (p) { r += sub("navy", p.name, esc(p.lead) + "<br>Prompts: " + p.prompts.map(esc).join(" / ") + "<br>Starter: <b>" + esc(p.starter) + "</b> · " + (p.seconds || 30) + "s" + (p.aloud ? "<br>Pray aloud: “" + esc(p.aloud) + "”" : "")); });
        r += sub("navy", "Closing", esc(s.closing));
        if (s.notes) r += sub("green", "Teacher guidance", para(s.notes));
        break;
      case "scene":
        r += sub("navy", "On screen", (s.boxes || []).map(function (b) { return esc(b.text); }).join("<br>"));
        if (s.notes) r += sub("green", "Activity note", para(s.notes));
        break;
    }
    return r;
  }

  /* ---------- documents ---------- */
  function dayDoc(tid, wn, dn, opts) {
    opts = opts || {};
    var t = ML.term(tid), week = ML.week(tid, wn), d = week.days[dn - 1], m = coreOf(d), clock = 0, n = 0;
    var steps = d.slides.map(function (s) {
      var from = clock; clock += s.minutes; n++;
      var rows = stepRows(s, week), count = (rows.match(/<tr class="lt-substep/g) || []).length;
      return '<tr class="lt-step-head lt-bg-navy"><th class="lt-step-num">' + n + '</th><th colspan="2" class="lt-step-title"><strong>' + esc(STEP_TITLE[s.type] || s.type) + (s.title ? ": " + esc(s.title) : "") + "</strong>" +
        (s.optional ? '<span class="lt-flag">stretch</span>' : "") + (s.skippable ? '<span class="lt-flag">skip if short</span>' : "") +
        ' <span class="lt-step-time">' + ML.fmtMin(from) + "–" + ML.fmtMin(clock) + " · " + mins(s.minutes) + "</span></th></tr>" + rows;
    }).join("");
    return '<section class="lp-doc' + (opts.page ? " lp-page" : "") + '"><div class="lp-eyebrow">' + esc(t.name) + " · Week " + wn + " · " + esc(week.lessonTitle) + '</div><h2 class="lp-title">' + esc(d.label) + ": " + esc(d.theme) + (d.roleplay ? '<span class="lp-roleplay">Role-play day</span>' : "") + "</h2>" +
      '<div class="lt-group"><table class="lt-tbl"><tbody>' +
      row("navy", "Duration", m.core + " minutes (" + m.all + " with stretch slides)") +
      row("navy", "Passage", esc(week.passage)) + row("navy", "Topic", esc(d.theme)) +
      row("gold", "Big Idea", esc(week.bigIdea)) +
      row("navy", "Memory verse", "“" + esc(week.memoryVerse.text) + "” — " + esc(week.memoryVerse.ref) + " (" + esc(week.memoryVerse.version) + ")") +
      row("navy", "Prayer focus", esc(week.prayerFocus.skill) + " — " + esc(week.prayerFocus.tip)) +
      "</tbody></table></div>" +
      '<div class="lt-group"><div class="lt-section-head lt-bg-slate">Learning Intentions</div><div class="lt-cell-list">' + list(d.learningIntentions) + '</div><table class="lt-tbl"><tbody>' + row("maroon", "Assessment", esc(d.assessment)) + "</tbody></table></div>" +
      '<div class="lt-group"><div class="lt-section-head lt-bg-slate">Resources</div><div class="lt-cell-list">' + list(d.resources) + "</div></div>" +
      '<div class="lt-group"><div class="lt-section-head lt-bg-navy">Teaching Script</div><table class="lt-tbl lt-tbl-steps"><tbody>' + steps + "</tbody></table>" +
      '<table class="lt-tbl"><tbody>' + row("slate", "Where to next", esc(d.whereToNext)) + "</tbody></table></div></section>";
  }
  function weekOverview(tid, wn, opts) {
    var t = ML.term(tid), week = ML.week(tid, wn);
    return '<section class="lp-doc' + (opts && opts.page ? " lp-page" : "") + '"><div class="lp-eyebrow">' + esc(t.name) + " · " + esc(t.title) + '</div><h2 class="lp-title">Week ' + wn + " Overview: " + esc(week.lessonTitle) + "</h2>" +
      '<div class="lt-group"><table class="lt-tbl"><tbody>' +
      row("navy", "Passage", esc(week.passage)) + row("gold", "Big Idea", esc(week.bigIdea)) + row("navy", "God is…", esc(week.godIs || "")) +
      row("navy", "Memory verse", "“" + esc(week.memoryVerse.text) + "” — " + esc(week.memoryVerse.ref) + " (" + esc(week.memoryVerse.version) + ")") +
      row("navy", "Prayer skill", esc(week.prayerFocus.skill) + " — " + esc(week.prayerFocus.tip)) + row("navy", "Source", "Morninglight 2027 — original lessons (CEV)") +
      "</tbody></table></div>" +
      '<div class="lt-group"><div class="lt-section-head lt-bg-navy">The week at a glance</div><table class="lt-tbl"><tbody>' +
      week.days.map(function (d) { var m = coreOf(d); return row(d.roleplay ? "maroon" : "navy", d.label, "<b>" + esc(d.theme) + "</b>" + (d.roleplay ? " · 🎭 role-play" : "") + " · " + m.core + " min<br>" + esc(d.learningIntentions[0]) + "<br><span style='color:#6b6b5f'>" + d.slides.map(function (s) { return esc(s.title || s.type); }).join(" → ") + "</span>"); }).join("") +
      "</tbody></table></div></section>";
  }
  function weekDoc(tid, wn) {
    var h = weekOverview(tid, wn, { page: true });
    for (var d = 1; d <= 4; d++) h += dayDoc(tid, wn, d, { page: true });
    return h;
  }
  function cover(title, meta) { return '<div class="lp-cover"><div class="lp-eyebrow">Morninglight 2027 · Devotion lesson plans</div><h1>' + esc(title) + '</h1><div class="lp-meta">' + esc(meta) + "</div></div>"; }
  function termDoc(tid) {
    var t = ML.term(tid), built = t.weeks.filter(function (w) { return ML.isBuilt(tid, w.n); });
    var h = cover(t.name + " — " + t.title, built.length + " of 10 weeks written · " + built.length * 4 + " lesson plans · printed " + new Date().toLocaleDateString("en-NZ"));
    t.weeks.forEach(function (w) { if (ML.isBuilt(tid, w.n)) h += weekDoc(tid, w.n); });
    var soon = t.weeks.filter(function (w) { return !ML.isBuilt(tid, w.n); });
    if (soon.length) h += '<div class="lp-soon lp-page"><b>Still being written:</b> ' + soon.map(function (w) { return "Week " + w.n + " — " + esc(w.title); }).join(" · ") + "</div>";
    return h;
  }
  function docFor(scope, tid, wn, dn) {
    if (scope === "term") return { title: ML.term(tid).name + " devotion lesson plans", body: termDoc(tid) };
    if (scope === "week") return { title: ML.term(tid).name + " Week " + wn + " devotion lesson plans", body: cover(ML.term(tid).name + " · Week " + wn + ": " + ML.week(tid, wn).lessonTitle, "4 lesson plans + week overview") + weekDoc(tid, wn) };
    if (scope === "overview") return { title: ML.term(tid).name + " Week " + wn + " overview", body: weekOverview(tid, wn) };
    var d = ML.week(tid, wn).days[dn - 1];
    return { title: ML.term(tid).name + " Week " + wn + " " + d.label + " devotion lesson plan", body: dayDoc(tid, wn, dn) };
  }

  /* ---------- print + download ---------- */
  function print(scope, tid, wn, dn) {
    var doc = docFor(scope, tid, wn, dn);
    var root = document.getElementById("print-root");
    if (!root) { root = document.createElement("div"); root.id = "print-root"; root.className = "lpd"; document.body.appendChild(root); }
    root.innerHTML = doc.body;
    document.body.classList.add("printing");
    var done = function () { document.body.classList.remove("printing"); root.innerHTML = ""; window.removeEventListener("afterprint", done); };
    window.addEventListener("afterprint", done);
    setTimeout(function () { window.print(); }, 60);
  }
  function download(scope, tid, wn, dn, fmt) {
    var doc = docFor(scope, tid, wn, dn);
    var html = "<!doctype html><html lang='en-NZ'><head><meta charset='utf-8'><title>" + esc(doc.title) + "</title><style>body{margin:0;background:#f3ecdc;padding:24px}.lpd{max-width:900px;margin:0 auto}" + DOC_CSS + "@media print{body{background:#fff;padding:0}}</style></head><body><div class='lpd'>" + doc.body + "</div></body></html>";
    var word = fmt === "doc";
    var blob = new Blob(["﻿" + html], { type: word ? "application/msword" : "text/html" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = doc.title.replace(/[^\w\- ]+/g, "").replace(/\s+/g, "_") + (word ? ".doc" : ".html");
    document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1500);
    ML.toast("Downloading " + a.download);
  }

  function actionBar(scope, tid, wn, dn) {
    var a = 'data-scope="' + scope + '" data-t="' + tid + '" data-w="' + (wn || "") + '" data-d="' + (dn || "") + '"';
    return '<div class="modal-actions no-print"><button class="btn primary" data-lp="print" ' + a + '>🖨 Print</button><button class="btn" data-lp="html" ' + a + '>⬇ Download (.html)</button><button class="btn" data-lp="doc" ' + a + '>⬇ Download for Word (.doc)</button></div>';
  }
  function wire(root) {
    root.addEventListener("click", function (e) {
      var b = e.target.closest("[data-lp]"); if (!b) return;
      e.stopPropagation();
      var s = b.getAttribute("data-scope"), t = b.getAttribute("data-t"), w = +b.getAttribute("data-w"), d = +b.getAttribute("data-d"), k = b.getAttribute("data-lp");
      if (k === "print") print(s, t, w, d); else download(s, t, w, d, k);
    });
  }

  ML.LessonPlan = {
    dayDoc: dayDoc, weekDoc: weekDoc, termDoc: termDoc, weekOverview: weekOverview,
    print: print, download: download, actionBar: actionBar, wire: wire,
    open: function (tid, wn, dn) {
      var card = ML.modal(actionBar("day", tid, wn, dn) + '<div class="lpd" style="margin-top:14px">' + dayDoc(tid, wn, dn) + "</div>");
      wire(card);
    },
    week: function (tid, wn) {
      var card = ML.modal(actionBar("week", tid, wn) + '<div class="lpd" style="margin-top:14px">' + weekOverview(tid, wn) + "</div>");
      wire(card);
    },
    takeHome: function (ctx, s) {
      var mv = ctx.week.memoryVerse;
      var one = "<div class='th-card'><div class='thc-k'>☀ MORNINGLIGHT · THIS WEEK’S CHALLENGE</div><div class='muted'>" + esc(ctx.week.lessonTitle) + " · " + esc(ctx.week.passage) + "</div><div class='thc-t'>" + esc(s.text) + "</div><div>" + esc(s.why || "") + "</div>" +
        "<div class='thc-lines'><span></span><span></span><span></span></div><div class='thc-v'>“" + esc(mv.text) + "” — " + esc(mv.ref) + "</div></div>";
      var card = ML.modal("<h2>Take-home cards</h2><p class='muted no-print'>Prints 6 cards per A4 page — cut and hand out.</p><div class='th-sheet'>" + [1, 2, 3, 4, 5, 6].map(function () { return one; }).join("") + "</div><div class='modal-actions'><button class='btn primary' data-a='print'>🖨 Print</button></div>");
      card.querySelector("[data-a=print]").onclick = function () { window.print(); };
    }
  };
})();
