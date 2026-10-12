/* Morninglight 2027 — slideshow engine: navigation, steps, transitions, chrome, overlays */
(function () {
  var ML = window.ML, esc = ML.esc;
  var DEFAULT_TR = { title: "zoom", hook: "panel", scripture: "fade", story: "page", question: "panel", dig: "panel", roleplay: "panel", apply: "push", verse: "zoom", review: "panel", prayer: "fade", challenge: "zoom", recap: "panel", scene: "fade", end: "zoom" };
  var TYPE_ICON = { title: "🎬", hook: "❓", scripture: "📜", story: "📖", question: "💬", dig: "🔍", roleplay: "🎭", apply: "✋", verse: "🧠", review: "🎲", prayer: "🙏", challenge: "🏁", recap: "⭐", scene: "🖼" };

  var wrap, stage, layer, chrome, drawer, particles;
  var st = { ctx: null, idx: 0, step: 0, r: null, el: null, short: false, start: 0, drawerOpen: false, overlay: null, ended: false };
  var uiTimer = null, paceIv = null;

  function $(s) { return stage.querySelector(s); }

  function scale() {
    if (!stage) return;
    var w = window.innerWidth, h = window.innerHeight, k = Math.min(w / 1920, h / 1080);
    stage.style.transform = "translate(" + (-960 * k) + "px," + (-540 * k) + "px) scale(" + k + ")";
  }

  function visible(i) { var s = st.ctx.day.slides[i]; return !(st.short && (s.optional || s.skippable)); }
  function nextIdx(from, dir) { var i = from + dir; while (i >= 0 && i < st.ctx.day.slides.length && !visible(i)) i += dir; return i; }

  function setMood(m) { stage.setAttribute("data-mood", m || "dawn"); if (particles) particles.setMood(m || "dawn"); }

  function render(i, step, dir) {
    var day = st.ctx.day, s;
    if (st.r && st.r.leave) st.r.leave();
    if (ML.Roleplay.active) ML.Roleplay.active.close();
    var old = st.el;
    st.ended = i >= day.slides.length;
    if (st.ended) {
      s = { type: "end", id: "end", title: "Lesson complete" };
      ML.markDone(st.ctx.tid, st.ctx.wn, st.ctx.dn);
    } else s = day.slides[i];
    var fn = ML.slides[s.type];
    var r = fn ? fn(s, st.ctx) : { el: ML.el('<div class="slide"><div class="content" style="padding:100px;font-size:50px">Unknown slide type: ' + esc(s.type) + "</div></div>"), steps: 0 };
    r.steps = r.steps || 0;
    st.idx = i; st.r = r; st.el = r.el; st.slide = s;
    st.step = step === "last" ? r.steps : Math.min(step || 0, r.steps);
    var tr = dir < 0 ? "back" : (s.transition || DEFAULT_TR[s.type] || "fade");
    if (!ML.prefersReduced()) r.el.classList.add("tr-" + tr + "-in");
    layer.appendChild(r.el);
    if (old) { old.classList.add("leaving"); setTimeout(function () { old.remove(); }, 380); }
    setMood(s.mood || (s.type === "prayer" ? "calm" : day.mood || st.ctx.week.mood));
    if (r.enter) r.enter();
    if (r.go) r.go(st.step, 1);
    updateChrome(); updateDrawer();
    if (!st.ended) history.replaceState(null, "", "#/" + st.ctx.tid + "/w" + st.ctx.wn + "/d" + st.ctx.dn + "/s" + (i + 1));
  }

  function updateChrome() {
    var n = st.ctx.day.slides.length, vis = 0, pos = 0;
    for (var i = 0; i < n; i++) if (visible(i)) { vis++; if (i <= st.idx) pos++; }
    $(".progress i").style.width = (st.ended ? 100 : (pos / vis) * 100) + "%";
    $(".slide-count").textContent = st.ended ? "Done!" : pos + " / " + vis;
    var dots = $(".step-dots"); dots.innerHTML = "";
    if (st.r.steps > 0 && st.r.steps < 12) for (var k = 0; k <= st.r.steps; k++) dots.appendChild(ML.el('<i class="' + (k <= st.step ? "on" : "") + '"></i>'));
    pacing();
  }

  function plannedTo(idx) { var t = 0, all = 0; st.ctx.day.slides.forEach(function (s, i) { if (!visible(i)) return; all += s.minutes; if (i <= idx) t += s.minutes; }); return { to: t, all: all }; }
  function pacing() {
    var p = $(".pacing");
    p.hidden = !ML.settings.pacing || st.ended;
    if (p.hidden) return;
    var el = (Date.now() - st.start) / 60000, pl = plannedTo(st.idx);
    p.querySelector(".pt").textContent = ML.fmtMin(el) + " / " + ML.fmtMin(pl.all);
    p.querySelector(".pbar i").style.width = Math.min(100, el / pl.all * 100) + "%";
    p.classList.toggle("over", el > pl.to + 0.5);
  }

  /* ---------- notes drawer ---------- */
  function updateDrawer() {
    if (!st.drawerOpen) return;
    var s = st.slide, h = "";
    h += '<button class="btn close" data-a="close-drawer">✕</button><h3>' + esc(s.title || s.type) + "</h3>";
    h += '<div class="d-meta"><span class="chip">' + esc(s.type) + "</span>" + (s.minutes ? '<span class="chip acc">' + s.minutes + " min</span>" : "") + (s.optional ? '<span class="chip">stretch</span>' : "") + (s.skippable ? '<span class="chip">skip if short</span>' : "") + "</div>";
    if (s.type === "story" && s.narration) {
      var paras = s.narration.split(/\n\n/);
      h += "<h4>Read aloud</h4><div class='narr'>" + paras.map(function (p, i) { return '<p data-p="' + i + '">' + esc(p) + "</p>"; }).join("") + "</div>";
    }
    if (s.hint) h += "<h4>Teacher hint</h4><div class='hintbox'>" + esc(s.hint) + "</div>";
    if (s.type === "roleplay") {
      h += "<h4>Role-play</h4><p>" + esc(s.imagined || "") + "</p>";
      if (s.debrief) h += "<h4>Debrief hints</h4>" + s.debrief.map(function (d) { return "<div class='hintbox' style='margin-bottom:10px'><b>" + esc(d.text) + "</b><br>" + esc(d.hint || "") + "</div>"; }).join("");
    }
    if (s.type === "prayer") h += "<h4>Repeat-after-me lines</h4>" + s.phases.map(function (p) { return "<p><b>" + esc(p.name) + ":</b> " + esc(p.aloud || p.starter) + "</p>"; }).join("");
    if (s.notes) h += "<h4>Notes</h4><p>" + esc(s.notes) + "</p>";
    if (s.type === "end") h += "<h4>Where to next</h4><p>" + esc(st.ctx.day.whereToNext) + "</p>";
    var nIdx = nextIdx(st.idx, 1), nxt = st.ctx.day.slides[nIdx];
    h += "<h4>Next</h4><p>" + (nxt ? TYPE_ICON[nxt.type] + " " + esc(nxt.title || nxt.type) : "Lesson complete 🎉") + "</p>";
    drawer.innerHTML = h;
    ML.Stage.highlightNarration(st.step, (s.beats || []).length);
  }

  function toggleDrawer(force) { st.drawerOpen = force != null ? force : !st.drawerOpen; drawer.classList.toggle("open", st.drawerOpen); updateDrawer(); }

  /* ---------- overlays ---------- */
  function closeOverlay() { if (st.overlay) { st.overlay.remove(); st.overlay = null; return true; } return false; }
  function grid() {
    if (closeOverlay()) return;
    var day = st.ctx.day;
    var o = ML.el('<div class="overlay"><h2>' + esc(day.label) + ": " + esc(day.theme) + ' <button class="btn ' + (st.short ? "on" : "") + '" data-a="short">⏱ Short on time: ' + (st.short ? "ON" : "off") + '</button><button class="btn ghost" data-a="plan">📋 Lesson plan</button></h2><div class="g-grid"></div></div>');
    var g = o.querySelector(".g-grid");
    day.slides.forEach(function (s, i) {
      g.appendChild(ML.el('<button class="g-item' + (i === st.idx ? " cur" : "") + (!visible(i) ? " skip" : "") + '" data-i="' + i + '"><div class="gi-n">' + (i + 1) + '</div><div class="gi-type">' + TYPE_ICON[s.type] + " " + esc(s.type) + '</div><span class="gi-t">' + esc(s.title || "") + '</span><span class="gi-m">' + s.minutes + ' min</span><div class="gi-tags">' + (s.optional ? "<span>stretch</span>" : "") + (s.skippable ? "<span>skippable</span>" : "") + "</div></button>"));
    });
    o.addEventListener("click", function (e) {
      e.stopPropagation();
      var a = e.target.closest("[data-a]"), it = e.target.closest("[data-i]");
      if (a && a.getAttribute("data-a") === "short") { st.short = !st.short; closeOverlay(); grid(); updateChrome(); return; }
      if (a && a.getAttribute("data-a") === "plan") { closeOverlay(); ML.LessonPlan.open(st.ctx.tid, st.ctx.wn, st.ctx.dn); return; }
      if (it) { closeOverlay(); render(+it.getAttribute("data-i"), 0, 1); }
    });
    stage.appendChild(o); st.overlay = o;
  }
  function help() {
    if (closeOverlay()) return;
    var keys = [["→ / Space", "Next step or slide"], ["←", "Back"], ["G", "Slide grid + ‘short on time’"], ["N", "Teacher notes (read-aloud story)"], ["T", "Pacing timer on/off"], ["F", "Fullscreen"], ["B", "Blackout screen"], ["S", "Sound on/off"], ["Home / End", "First / last slide"], ["Esc", "Close / exit lesson"]];
    var o = ML.el('<div class="overlay"><h2>Controls</h2><div class="help-grid">' + keys.map(function (k) { return "<div><kbd>" + k[0] + "</kbd>" + k[1] + "</div>"; }).join("") + '</div><p style="margin-top:40px;font-size:26px;opacity:.7">Click or tap anywhere to go forward · click the left edge to go back · swipe on touch screens.</p></div>');
    o.addEventListener("click", function (e) { e.stopPropagation(); closeOverlay(); });
    stage.appendChild(o); st.overlay = o;
  }
  function blackout() {
    var b = $(".blackout");
    if (b) b.remove(); else { b = ML.el('<div class="blackout"></div>'); b.addEventListener("click", function (e) { e.stopPropagation(); b.remove(); }); stage.appendChild(b); }
  }
  function fullscreen() {
    var d = document;
    if (!d.fullscreenElement && !d.webkitFullscreenElement) { var r = d.documentElement; (r.requestFullscreen || r.webkitRequestFullscreen || function () {}).call(r); }
    else (d.exitFullscreen || d.webkitExitFullscreen || function () {}).call(d);
  }

  /* ---------- navigation ---------- */
  function next(fromPresenter) {
    if (!st.ctx) return;
    if (!fromPresenter && st.r.interceptNext && st.step >= st.r.steps && st.r.interceptNext()) return;
    if (st.step < st.r.steps) { st.step++; st.r.go(st.step, 1); updateChrome(); updateDrawer(); return; }
    if (st.ended) return;
    render(nextIdx(st.idx, 1), 0, 1);
  }
  function prev() {
    if (!st.ctx) return;
    if (st.step > 0) { st.step--; st.r.go(st.step, -1); updateChrome(); updateDrawer(); return; }
    var i = st.ended ? nextIdx(st.ctx.day.slides.length, -1) : nextIdx(st.idx, -1);
    if (i < 0) return;
    render(i, "last", -1);
  }

  function onKey(e) {
    if (!st.ctx || wrap.hidden) return;
    if (document.querySelector(".modal")) { if (e.key === "Escape") ML.closeModal(); return; }
    if (e.target && /input|textarea|select/i.test(e.target.tagName)) return;
    if (ML.Roleplay.active && ML.Roleplay.active.key(e)) return;
    var k = e.key;
    if (k === "ArrowRight" || k === " " || k === "PageDown" || k === "Enter") { e.preventDefault(); closeOverlay(); next(); }
    else if (k === "ArrowLeft" || k === "Backspace" || k === "PageUp") { e.preventDefault(); closeOverlay(); prev(); }
    else if (k === "Home") render(nextIdx(-1, 1), 0, -1);
    else if (k === "End") render(nextIdx(st.ctx.day.slides.length, -1), "last", 1);
    else if (k === "g" || k === "G") grid();
    else if (k === "n" || k === "N") toggleDrawer();
    else if (k === "t" || k === "T") { ML.settings.pacing = !ML.settings.pacing; ML.saveSettings(); pacing(); }
    else if (k === "f" || k === "F") fullscreen();
    else if (k === "b" || k === "B") blackout();
    else if (k === "s" || k === "S") { ML.settings.sound = !ML.settings.sound; ML.saveSettings(); ML.toast("Sound " + (ML.settings.sound ? "on" : "off")); }
    else if (k === "?" || k === "h" || k === "H") help();
    else if (k === "Escape") { if (closeOverlay()) return; if (st.drawerOpen) { toggleDrawer(false); return; } ML.Stage.exit(); }
  }

  function showUI() {
    wrap.classList.add("show-ui"); wrap.classList.remove("hide-cursor");
    clearTimeout(uiTimer); uiTimer = setTimeout(function () { wrap.classList.remove("show-ui"); wrap.classList.add("hide-cursor"); }, 2600);
  }

  ML.Stage = {
    init: function () {
      wrap = document.getElementById("stage-wrap"); stage = document.getElementById("stage");
      layer = stage.querySelector(".slide-layer"); chrome = stage.querySelector(".chrome"); drawer = stage.querySelector(".drawer");
      particles = ML.Particles.create(document.getElementById("particles"), 1920, 1080, "dawn");
      window.addEventListener("resize", scale); scale();
      document.addEventListener("keydown", onKey);
      wrap.addEventListener("mousemove", showUI);
      stage.addEventListener("click", function (e) {
        if (e.target.closest("button, a, .timer, .drawer, .overlay, .spin-box, .rpp")) return;
        if (e.target.closest(".nav-zone.l")) { prev(); return; }
        next();
      });
      chrome.addEventListener("click", function (e) {
        var a = e.target.closest("[data-a]"); if (!a) return; e.stopPropagation();
        var k = a.getAttribute("data-a");
        if (k === "prev") prev(); else if (k === "next") next(); else if (k === "grid") grid(); else if (k === "notes") toggleDrawer();
        else if (k === "full") fullscreen(); else if (k === "help") help(); else if (k === "exit") ML.Stage.exit();
      });
      drawer.addEventListener("click", function (e) { e.stopPropagation(); if (e.target.closest("[data-a=close-drawer]")) toggleDrawer(false); });
      var tx = null;
      stage.addEventListener("touchstart", function (e) { tx = e.touches[0].clientX; }, { passive: true });
      stage.addEventListener("touchend", function (e) { if (tx == null) return; var dx = e.changedTouches[0].clientX - tx; tx = null; if (Math.abs(dx) > 60) { e.preventDefault(); if (dx < 0) next(); else prev(); } });
    },
    open: function (tid, wn, dn, sNum) {
      var week = ML.week(tid, wn); if (!week) return false;
      var day = week.days[dn - 1]; if (!day) return false;
      var same = st.ctx && st.ctx.tid === tid && st.ctx.wn === wn && st.ctx.dn === dn && !wrap.hidden;
      if (same && st.idx === sNum - 1) return true;
      document.body.setAttribute("data-term", tid);
      if (!same) { st.ctx = { tid: tid, wn: wn, dn: dn, week: week, day: day, term: ML.term(tid) }; st.start = Date.now(); st.short = false; layer.innerHTML = ""; st.el = null; }
      wrap.hidden = false; document.getElementById("menu-view").hidden = true;
      ML.store.set("last", { tid: tid, wn: wn, dn: dn, s: sNum });
      clearInterval(paceIv); paceIv = setInterval(pacing, 1000);
      ML.Particles.refresh();
      scale(); showUI();
      render(Math.max(0, Math.min(sNum - 1, day.slides.length - 1)), 0, 1);
      return true;
    },
    next: next, prev: prev,
    exit: function (silent) {
      if (st.r && st.r.leave) st.r.leave();
      if (ML.Roleplay.active) ML.Roleplay.active.close();
      closeOverlay(); clearInterval(paceIv);
      var c = st.ctx; wrap.hidden = true; document.getElementById("menu-view").hidden = false;
      layer.innerHTML = ""; st.el = null; st.r = null;
      if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen();
      st.ctx = null;
      if (!silent) location.hash = c ? "#/" + c.tid + "/w" + c.wn + "/d" + c.dn : "#/";
    },
    isOpen: function () { return wrap && !wrap.hidden; },
    highlightNarration: function (step, beats) {
      if (!st.drawerOpen || !beats) return;
      var ps = ML.$$(".narr p", drawer); if (!ps.length) return;
      var cur = Math.min(ps.length - 1, Math.floor(step / beats * ps.length));
      ps.forEach(function (p, i) { p.classList.toggle("cur", i === cur); });
      if (ps[cur]) ps[cur].scrollIntoView({ block: "center", behavior: "smooth" });
    }
  };
})();
