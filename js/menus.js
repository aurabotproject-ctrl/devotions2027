/* Morninglight 2027 — menu screens: home → term → week → day launcher */
(function () {
  var ML = window.ML, esc = ML.esc;
  var view;

  function topbar(crumbs) {
    return '<div class="topbar"><div class="brand" data-go="#/">☀ MORNINGLIGHT<small>2027</small></div><div class="crumbs">' +
      crumbs.map(function (c) { return '<span class="sep">/</span>' + (c[1] ? '<a href="' + c[1] + '">' + esc(c[0]) + "</a>" : "<span>" + esc(c[0]) + "</span>"); }).join("") +
      '</div><div class="spacer"></div><button class="btn ghost" data-go="#/plans">📋 Lesson plans</button><button class="btn ghost" data-a="settings">⚙ Settings</button></div>';
  }
  function slot(sel, key) { var s = view.querySelector(sel); if (s) s.appendChild(ML.art(key, { motion: "kenburns-in" })); }
  function stars(n) { return n ? '<span class="chip acc">' + "★".repeat(n) + "</span>" : ""; }
  function coreMin(d) { var m = 0; d.slides.forEach(function (s) { if (!s.optional) m += s.minutes; }); return m; }

  ML.Menus = {
    init: function () {
      view = document.getElementById("menu-view");
      view.addEventListener("click", function (e) {
        var g = e.target.closest("[data-go]"); if (g) { location.hash = g.getAttribute("data-go"); return; }
        var a = e.target.closest("[data-a]"); if (!a) return;
        var k = a.getAttribute("data-a");
        if (k === "settings") ML.openSettings();
        if (k === "plan") ML.LessonPlan.open(a.getAttribute("data-t"), +a.getAttribute("data-w"), +a.getAttribute("data-d"));
        if (k === "glance") ML.LessonPlan.week(a.getAttribute("data-t"), +a.getAttribute("data-w"));
        if (k === "soon") ML.toast("This week is still being written — coming soon!");
      });
      var p = ML.Particles.create(document.getElementById("menu-canvas"), 1920, 1080, "dawn");
      ML.Menus.particles = p;
    },

    home: function () {
      document.body.setAttribute("data-term", "t1");
      var last = ML.store.get("last", null);
      view.innerHTML = '<div class="home-hero"><div class="logo"><span class="sun">☀</span> MORNINGLIGHT</div><div class="logo-sub">2027 · Daily Devotions · Upper Primary</div><div class="home-q">“Who is God?” — one big question for the whole year</div>' +
        '<div class="home-actions">' + (last && ML.isBuilt(last.tid, last.wn) ? '<button class="btn primary big" data-go="#/' + last.tid + "/w" + last.wn + "/d" + last.dn + '">▶ Continue: ' + esc(ML.term(last.tid).name) + " · Week " + last.wn + " · " + esc(ML.week(last.tid, last.wn).days[last.dn - 1].label) + "</button>" : '<button class="btn primary big" data-go="#/t1/w1">▶ Start Week 1</button>') +
        '<button class="btn ghost big" data-go="#/plans">📋 Lesson plans</button><button class="btn ghost big" data-a="settings">⚙ Settings</button></div></div><div class="term-grid">' +
        ML.meta.terms.map(function (t, i) {
          var built = t.weeks.filter(function (w) { return ML.isBuilt(t.id, w.n); }).length;
          return '<button class="term-card" style="--tacc:' + t.accent + ";--tacc2:" + t.accentDeep + ";animation:flip-in .7s var(--ease-out) " + (i * 0.09) + 's both" data-go="#/' + t.id + '"><div class="tc-art" data-art="' + t.cover + '"></div><div class="tc-band"></div><div class="tc-status">' + (built ? '<span class="chip acc">' + built + " week" + (built > 1 ? "s" : "") + " ready</span>" : '<span class="chip">Coming soon</span>') + '</div><div class="tc-body"><div class="tc-num">' + esc(t.name) + "</div><h3>" + esc(t.title) + "</h3><p>" + esc(t.sub) + '</p><div class="tc-q">' + esc(t.question) + "</div></div></button>";
        }).join("") + "</div>";
      ML.$$("[data-art]", view).forEach(function (s) { s.appendChild(ML.art(s.getAttribute("data-art"))); });
    },

    term: function (tid) {
      var t = ML.term(tid); if (!t) return ML.Menus.home();
      document.body.setAttribute("data-term", tid);
      view.innerHTML = topbar([[t.name, null]]) + '<div class="screen-head"><div><div class="kick">' + esc(t.name) + " · " + esc(t.sub) + "</div><h1>" + esc(t.title) + '</h1></div><div class="lead">' + esc(t.question) + '</div></div><div class="week-grid">' +
        t.weeks.map(function (w, i) {
          var built = ML.isBuilt(tid, w.n), W = ML.week(tid, w.n);
          var key = "t" + tid.slice(1) + "w" + ("0" + w.n).slice(-2) + "-cover";
          return '<button class="week-card' + (built ? "" : " soon") + '" style="animation-delay:' + (i * 0.05) + 's" ' + (built ? 'data-go="#/' + tid + "/w" + w.n + '"' : 'data-a="soon"') + '><div class="wc-art"' + (built ? ' data-art="' + key + '"' : "") + '><div class="wc-n">' + w.n + '</div><div class="wc-stars">' + (built ? stars(ML.weekStars(tid, w.n)) : '<span class="chip soon">soon</span>') + "</div></div>" +
            '<div class="wc-body"><h3>' + esc(w.title) + "</h3><p>" + esc(W ? W.passage : (w.passage || "")) + "</p></div></button>";
        }).join("") + "</div>";
      ML.$$("[data-art]", view).forEach(function (s) { s.insertBefore(ML.art(s.getAttribute("data-art")), s.firstChild); });
    },

    week: function (tid, wn) {
      var t = ML.term(tid), W = ML.week(tid, wn); if (!W) return ML.Menus.term(tid);
      document.body.setAttribute("data-term", tid);
      view.innerHTML = topbar([[t.name, "#/" + tid], ["Week " + wn, null]]) +
        '<div class="week-hero"><div class="wh-art"></div><div class="wh-info"><div class="kick">' + esc(t.name) + " · Week " + wn + "</div><h1>" + esc(W.lessonTitle) + '</h1><div class="passage">📖 ' + esc(W.passage) + "</div>" +
        '<div class="cap-box"><div class="lbl">The Big Idea</div><div class="val">' + esc(W.bigIdea) + "</div></div>" +
        '<div class="wh-row"><div class="cap-box"><div class="lbl">Memory verse · ' + esc(W.memoryVerse.ref) + '</div><div class="val">“' + esc(W.memoryVerse.text) + '”</div></div><div class="cap-box"><div class="lbl">Prayer skill</div><div class="val">' + esc(W.prayerFocus.skill) + ' prayers</div><div class="muted">' + esc(W.prayerFocus.tip) + "</div></div></div>" +
        '<div style="display:flex;gap:.8rem;flex-wrap:wrap"><button class="btn primary week-comic" data-go="#/' + tid + '/w' + wn + '/comic">📖 Read the comic page</button><button class="btn" data-go="#/plans/' + tid + '/w' + wn + '">📋 Lesson plans for this week</button></div></div></div>' +
        '<div class="day-grid">' + W.days.map(function (d, i) {
          return '<div class="day-card" style="animation-delay:' + (i * 0.08) + 's">' + (ML.isDone(tid, wn, i + 1) ? '<div class="dc-done">DONE ✓</div>' : "") + '<div class="dc-day">' + esc(d.label) + "</div><h3>" + esc(d.theme) + '</h3><div class="dc-meta"><span class="chip">⏱ ' + coreMin(d) + " min</span><span class='chip'>" + d.slides.length + " slides</span>" + (d.roleplay ? '<span class="chip rp">🎭 Role-play</span>' : "") + "</div>" +
            '<div class="muted">' + esc(d.learningIntentions[0]) + '</div><div class="dc-actions"><button class="btn primary" data-go="#/' + tid + "/w" + wn + "/d" + (i + 1) + '/s1">▶ Start</button><button class="btn" data-go="#/' + tid + "/w" + wn + "/d" + (i + 1) + '">Preview</button><button class="btn" data-go="#/plans/' + tid + '/w' + wn + '/d' + (i + 1) + '">Plan</button></div></div>';
        }).join("") + "</div>";
      view.querySelector(".wh-art").appendChild(ML.art(W.cover));
    },

    plans: function (tid, wn, dn) {
      tid = tid || "t1"; var t = ML.term(tid);
      if (!wn) { var fb = t.weeks.filter(function (w) { return ML.isBuilt(tid, w.n); })[0]; wn = fb ? fb.n : 0; }
      document.body.setAttribute("data-term", tid);
      var LP = ML.LessonPlan, hasWeek = wn && ML.isBuilt(tid, wn);
      var nav = '<div class="pl-terms">' + ML.meta.terms.map(function (x) { return '<button class="pl-term' + (x.id === tid ? " on" : "") + '" style="--tacc:' + x.accent + '" data-go="#/plans/' + x.id + '">' + esc(x.name) + "</button>"; }).join("") + "</div>" +
        '<div class="pl-weeks">' + t.weeks.map(function (w) {
          var built = ML.isBuilt(tid, w.n), W = ML.week(tid, w.n), open = built && w.n === wn;
          if (!built) return '<div class="pl-week soon"><b>Week ' + w.n + "</b> " + esc(w.title) + '<span class="chip soon">soon</span></div>';
          return '<div class="pl-week' + (open ? " open" : "") + '"><a href="#/plans/' + tid + "/w" + w.n + '"><b>Week ' + w.n + "</b> " + esc(w.title) + "</a>" +
            (open ? '<div class="pl-days"><a class="' + (!dn ? "on" : "") + '" href="#/plans/' + tid + "/w" + w.n + '">Week overview</a>' + W.days.map(function (d, i) { return '<a class="' + (dn === i + 1 ? "on" : "") + '" href="#/plans/' + tid + "/w" + w.n + "/d" + (i + 1) + '">' + esc(d.label) + ": " + esc(d.theme) + (d.roleplay ? " 🎭" : "") + "</a>"; }).join("") + "</div>" : "") + "</div>";
        }).join("") + "</div>";
      function bar(label, scope, w, d, note) {
        var a = 'data-scope="' + scope + '" data-t="' + tid + '" data-w="' + (w || "") + '" data-d="' + (d || "") + '"';
        return '<div class="pl-ex"><div><b>' + label + '</b><span class="muted">' + note + '</span></div><div class="pl-ex-btns"><button class="btn primary" data-lp="print" ' + a + '>🖨 Print</button><button class="btn" data-lp="html" ' + a + '>⬇ .html</button><button class="btn" data-lp="doc" ' + a + '>⬇ Word</button></div></div>';
      }
      var builtCount = t.weeks.filter(function (w) { return ML.isBuilt(tid, w.n); }).length;
      var ex = '<div class="pl-export">' +
        (hasWeek && dn ? bar("This lesson", "day", wn, dn, esc(ML.week(tid, wn).days[dn - 1].label) + " · one plan") : "") +
        (hasWeek ? bar("Week " + wn, "week", wn, 0, "overview + 4 lesson plans") : "") +
        bar("Whole " + esc(t.name), "term", 0, 0, builtCount + " of 10 weeks written so far") + "</div>";
      var reader = hasWeek ? (dn ? LP.dayDoc(tid, wn, dn) : LP.weekOverview(tid, wn)) : '<div class="lp-soon">' + esc(t.name) + " lesson plans are still being written.</div>";
      view.innerHTML = topbar([["Lesson plans", null]]) +
        '<div class="screen-head"><div><div class="kick">Teacher · print or download</div><h1>Lesson Plans</h1></div><div class="lead">Generated from the slides — always match the lesson.</div></div>' +
        '<div class="plans"><aside class="pl-nav">' + nav + '</aside><div class="pl-main">' + ex + '<div class="lpd pl-reader">' + reader + "</div></div></div>";
      LP.wire(view.querySelector(".pl-main"));
    },

    day: function (tid, wn, dn) {
      var t = ML.term(tid), W = ML.week(tid, wn); if (!W || !W.days[dn - 1]) return ML.Menus.week(tid, wn);
      var d = W.days[dn - 1];
      document.body.setAttribute("data-term", tid);
      var ICON = { title: "🎬", hook: "❓", scripture: "📜", story: "📖", question: "💬", dig: "🔍", roleplay: "🎭", apply: "✋", verse: "🧠", review: "🎲", prayer: "🙏", challenge: "🏁", recap: "⭐", scene: "🖼" };
      view.innerHTML = topbar([[t.name, "#/" + tid], ["Week " + wn, "#/" + tid + "/w" + wn], [d.label, null]]) +
        '<div class="screen-head"><div><div class="kick">' + esc(W.lessonTitle) + " · " + esc(d.label) + "</div><h1>" + esc(d.theme) + '</h1></div><div class="lead">' + coreMin(d) + " minutes" + (d.roleplay ? " · 🎭 role-play day" : "") + "</div></div>" +
        '<div style="display:flex;gap:1rem;margin-bottom:2rem;flex-wrap:wrap"><button class="btn primary big" data-go="#/' + tid + "/w" + wn + "/d" + dn + '/s1">▶ Start lesson</button><button class="btn big" data-a="plan" data-t="' + tid + '" data-w="' + wn + '" data-d="' + dn + '">📋 Lesson plan</button></div>' +
        '<div class="launch"><div><div class="section-title">Learning intentions</div><ul class="li-list">' + d.learningIntentions.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + '</ul><div class="section-title" style="margin-top:1.5rem">Resources</div><ul class="li-list">' + d.resources.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul></div>" +
        '<div><div class="section-title">Slides</div><div class="strip">' + d.slides.map(function (s, i) {
          return '<button class="strip-item" data-go="#/' + tid + "/w" + wn + "/d" + dn + "/s" + (i + 1) + '"><span class="si-n">' + (i + 1) + " " + ICON[s.type] + '</span><span class="si-t">' + esc(s.title || s.type) + '</span><span class="si-m">' + s.minutes + " min</span>" + (s.optional ? '<span class="si-tag">stretch</span>' : s.skippable ? '<span class="si-tag">skippable</span>' : "") + "</button>";
        }).join("") + "</div></div></div>" +
        '<p class="muted" style="margin-top:2rem">Tip: in the lesson press <b>N</b> for teacher notes (the full read-aloud story is there), <b>G</b> for the slide grid, <b>?</b> for all controls.</p>';
    }
  };
})();
