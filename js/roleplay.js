/* Morninglight 2027 — role-play launch card, cast picker and fullscreen line-by-line presenter */
(function () {
  var ML = window.ML, esc = ML.esc;

  function charOf(s, name) { return s.characters.filter(function (c) { return c.name === name; })[0] || { name: name }; }
  function colorOf(ch) { return ch.voice ? "#FFD36B" : (ch.color || "#FFFFFF"); }

  /* ---------- launch card ---------- */
  ML.slides.roleplay = function (s, ctx) {
    var el = ML.el('<div class="slide s-roleplay"><div class="content"></div></div>');
    var art = ML.art(s.art, { framed: true }); art.classList.add("rp-art");
    el.insertBefore(art, el.firstChild);
    var c = el.querySelector(".content");
    var cast = {}; /* role → student name */
    var started = false;
    function castHtml() {
      return s.characters.map(function (ch) {
        return '<div class="cast-item"><span class="badge' + (ch.voice ? " voice" : "") + '" style="--c:' + colorOf(ch) + '">' + esc(ch.name) + '</span><span class="cd">' + esc(ch.desc || "") + "</span>" +
          (cast[ch.name] ? '<span class="who">' + esc(cast[ch.name]) + "</span>" : "") + "</div>";
      }).join("");
    }
    function render() {
      c.innerHTML = '<div class="rp-info"><div class="rp-kick">🎭 ROLE-PLAY</div><h2>' + esc(s.title) + '</h2><div class="rp-ref">Based on ' + esc(s.ref) + ' · some words imagined</div>' +
        '<div class="cast">' + castHtml() + "</div>" +
        '<div class="rp-actions">' + (s.actions ? "<div><b>Everyone:</b> " + s.actions.map(esc).join(" · ") + "</div>" : "") + (s.props ? "<div><b>Props:</b> " + s.props.map(esc).join(" · ") + "</div>" : "") + "</div>" +
        '<div class="rp-imag">' + esc(s.imagined || "") + "</div>" +
        '<div class="rp-btns"><button class="btn" data-a="pick">🎲 Pick volunteers</button><button class="btn primary" data-a="start">▶ Start the role-play</button></div></div>';
    }
    render();
    c.addEventListener("click", function (e) {
      var a = e.target.closest("[data-a]"); if (!a) return; e.stopPropagation();
      if (a.getAttribute("data-a") === "pick") pick(s, cast, el, render);
      else { started = true; ML.Roleplay.open(s, cast, ctx); }
    });
    return {
      el: el, steps: 0,
      interceptNext: function () { if (!started) { started = true; ML.Roleplay.open(s, cast, ctx); return true; } return false; }
    };
  };

  /* ---------- cast picker (spins through the saved class list) ---------- */
  function pick(s, cast, slideEl, done) {
    var names = (ML.settings.classList || []).slice();
    if (!names.length) { ML.toast("No class list yet — add one in ⚙ Settings. For now: hands up! ✋"); return; }
    var roles = s.characters.filter(function (c) { return c.name !== "Everyone"; }).map(function (c) { return c.name; });
    var stage = document.getElementById("stage"), ri = 0, absent = {};
    Object.keys(cast).forEach(function (k) { delete cast[k]; });
    var box = ML.el('<div class="spin-box"><div class="sb-role"></div><div class="sb-name"></div><div class="sb-btns"><button class="btn" data-a="re">🔄 Reroll</button><button class="btn" data-a="abs">🚫 Absent</button><button class="btn primary" data-a="ok">✓ Next role</button><button class="btn ghost" data-a="end">Done</button></div><div class="sb-list"></div></div>');
    stage.appendChild(box);
    var roleEl = box.querySelector(".sb-role"), nameEl = box.querySelector(".sb-name"), list = box.querySelector(".sb-list"), iv = null;
    function pool() { var used = {}; Object.keys(cast).forEach(function (k) { if (k !== roles[ri]) used[cast[k]] = 1; }); return names.filter(function (n) { return !used[n] && !absent[n]; }); }
    function spin() {
      var p = pool(); if (!p.length) { nameEl.textContent = "✋ Hands up!"; return; }
      roleEl.textContent = "Who will be… " + roles[ri] + "?";
      var t = 0, delay = 50;
      clearTimeout(iv);
      (function step() {
        nameEl.textContent = p[Math.floor(Math.random() * p.length)]; ML.sfx.play("tick");
        t++; delay *= 1.12;
        if (t < 22 && !ML.prefersReduced()) iv = setTimeout(step, delay);
        else { var final = p[Math.floor(Math.random() * p.length)]; nameEl.textContent = final; cast[roles[ri]] = final; nameEl.style.animation = "pop .5s var(--ease-pop)"; setTimeout(function () { nameEl.style.animation = ""; }, 520); ML.sfx.play("pop"); showList(); }
      })();
    }
    function showList() { list.innerHTML = roles.map(function (r) { return cast[r] ? '<span class="chip acc" style="font-size:22px">' + esc(r) + ": " + esc(cast[r]) + "</span>" : ""; }).join(""); }
    function finish() { clearTimeout(iv); box.remove(); done(); }
    box.addEventListener("click", function (e) {
      e.stopPropagation();
      var a = e.target.closest("[data-a]"); if (!a) return;
      var k = a.getAttribute("data-a");
      if (k === "re") spin();
      else if (k === "abs") { absent[nameEl.textContent] = 1; delete cast[roles[ri]]; spin(); }
      else if (k === "ok") { ri++; if (ri >= roles.length) finish(); else spin(); }
      else finish();
    });
    ML.Roleplay.picker = { close: finish };
    spin();
  }

  /* ---------- presenter ---------- */
  ML.Roleplay = {
    active: null,
    open: function (s, cast, ctx) {
      var stage = document.getElementById("stage");
      var key = "rp:" + ML.dayKey(ctx.tid, ctx.wn, ctx.dn) + ":" + s.id;
      var i = ML.store.get(key, 0) || 0; if (i >= s.lines.length) i = 0;
      var el = ML.el('<div class="rpp"><div class="rays"></div><div class="rpp-bg"></div><div class="rpp-top"><div class="rpp-title">🎭 ' + esc(s.title) + '</div><div class="rpp-ref">' + esc(s.ref) + '</div><div class="rpp-count"></div></div><div class="rpp-stage"></div><div class="rpp-next"></div>' +
        '<div class="rpp-btns"><button class="cbtn" data-a="back" title="Back (←)">◀</button><button class="cbtn" data-a="next" title="Next (→ / Space)">▶</button><button class="cbtn wide" data-a="exit" title="Exit (Esc)">✕ Exit</button></div><div class="rpp-prog"><i></i></div></div>');
      if (s.art) { var bgArt = ML.art(s.art, { ambient: true }); bgArt.style.zIndex = 0; el.insertBefore(bgArt, el.firstChild); }
      stage.appendChild(el);
      var st = el.querySelector(".rpp-stage"), nx = el.querySelector(".rpp-next"), cnt = el.querySelector(".rpp-count"), prog = el.querySelector(".rpp-prog i");
      var tmr = null, debrief = false;
      function who(name) { return cast[name] ? " <small>(" + esc(cast[name]) + ")</small>" : ""; }
      function nextSpeaker(from) {
        for (var j = from; j < s.lines.length; j++) { var L = s.lines[j]; if (L.character && !L.direction) return L.character; if (L.pause) return "Freeze-frame"; }
        return null;
      }
      function draw() {
        clearInterval(tmr);
        el.className = "rpp"; el.style.removeProperty("--cc");
        if (debrief) {
          el.classList.add("debrief");
          st.innerHTML = '<div class="db-k">What did you notice?</div>' + (s.debrief || []).map(function (q) { var lv = ML.meta.levels[q.level] || { label: q.level }; return '<div class="db-q"><span class="lvl ' + esc(q.level) + '">' + esc(lv.label) + "</span><span>" + esc(q.text) + "</span></div>"; }).join("");
          nx.innerHTML = "Press → to go back to the lesson"; cnt.textContent = "Debrief"; prog.style.width = "100%";
          return;
        }
        var L = s.lines[i];
        cnt.textContent = "Line " + (i + 1) + " / " + s.lines.length;
        prog.style.width = ((i + 1) / s.lines.length * 100) + "%";
        if (L.pause) {
          el.classList.add("pause");
          st.innerHTML = '<div class="freeze">FREEZE!</div><div class="rpp-line">' + esc(L.pause) + '</div><div class="p-timer"></div>';
          var left = L.seconds || 20, pt = st.querySelector(".p-timer");
          pt.textContent = left; tmr = setInterval(function () { left--; pt.textContent = left > 0 ? left : "⏸"; if (left <= 0) { clearInterval(tmr); ML.sfx.play("chime"); } }, 1000);
          ML.sfx.play("stamp");
        } else {
          var ch = charOf(s, L.character), long = L.text.length > 90;
          el.style.setProperty("--cc", colorOf(ch));
          if (L.direction) {
            el.classList.add("dir");
            st.innerHTML = '<div class="rpp-line">' + esc(L.text) + "</div>";
          } else if (ch.voice) {
            el.classList.add("voice");
            st.innerHTML = '<div class="voice-lbl">The Voice of God' + (cast[ch.name] ? " · " + esc(cast[ch.name]) : "") + '</div><div class="rpp-line' + (long ? " long" : "") + '">' + esc(L.text) + "</div>";
          } else {
            if (ch.name === "Everyone") el.classList.add("everyone");
            st.innerHTML = '<div class="rpp-badge">' + esc(ch.name === "Everyone" ? "EVERYONE!" : ch.name) + who(ch.name) + '</div><div class="rpp-line' + (long ? " long" : "") + '">' + esc(L.text) + "</div>" +
              (L.action ? '<div class="rpp-action">(' + esc(L.action) + ")</div>" : "");
          }
          ML.sfx.play("slam");
        }
        var n = nextSpeaker(i + 1);
        nx.innerHTML = n ? "Next: <b>" + esc(n) + "</b>" + (cast[n] ? " (" + esc(cast[n]) + ")" : "") : "Last line!";
        ML.store.set(key, i);
      }
      var api = {
        next: function () {
          if (debrief) { api.close(); ML.Stage.next(true); return; }
          if (i < s.lines.length - 1) { i++; draw(); }
          else { debrief = true; ML.store.set(key, 0); draw(); }
        },
        back: function () {
          if (debrief) { debrief = false; draw(); return; }
          if (i > 0) { i--; draw(); } else api.close();
        },
        close: function () { clearInterval(tmr); el.remove(); ML.Roleplay.active = null; },
        key: function (e) {
          var k = e.key;
          if (k === "ArrowRight" || k === " " || k === "Enter" || k === "PageDown") { e.preventDefault(); api.next(); }
          else if (k === "ArrowLeft" || k === "Backspace" || k === "PageUp") { e.preventDefault(); api.back(); }
          else if (k === "Escape") api.close();
          else return false;
          return true;
        }
      };
      el.addEventListener("click", function (e) {
        e.stopPropagation();
        var a = e.target.closest("[data-a]");
        if (a) { var k = a.getAttribute("data-a"); if (k === "exit") api.close(); else if (k === "back") api.back(); else api.next(); return; }
        api.next();
      });
      ML.Roleplay.active = api;
      draw();
    }
  };
})();
