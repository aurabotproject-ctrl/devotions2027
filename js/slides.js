/* Morninglight 2027 — slide renderers.
   Each renderer: (slide, ctx) → { el, steps, go(step, dir), enter(), leave(), interceptNext() } */
(function () {
  var ML = window.ML, esc = ML.esc;
  var S = ML.slides;

  function base(cls) { return ML.el('<div class="slide ' + cls + '"><div class="content"></div></div>'); }
  function ambient(el, key) { el.insertBefore(ML.art(key, { ambient: true }), el.firstChild); }

  /* ---------- timer ring (question slides) ---------- */
  ML.makeTimer = function (seconds, label) {
    var R = 110, C = 2 * Math.PI * R;
    var el = ML.el('<div class="timer" title="Click to restart the thinking timer"><svg viewBox="0 0 260 260"><circle class="bg" cx="130" cy="130" r="' + R + '"/><circle class="fg" cx="130" cy="130" r="' + R + '" stroke-dasharray="' + C + '" stroke-dashoffset="0"/></svg><div class="t-num">' + seconds + '</div><div class="t-lbl">' + esc(label || "Thinking time") + "</div></div>");
    var fg = el.querySelector(".fg"), num = el.querySelector(".t-num"), left = seconds, iv = null;
    function draw() { num.textContent = left; fg.style.strokeDashoffset = String(C * (1 - left / seconds)); }
    var api = {
      el: el,
      start: function () { api.stop(); left = seconds; el.classList.remove("done"); draw(); iv = setInterval(function () { left--; draw(); if (left <= 0) { api.stop(); el.classList.add("done"); num.textContent = "✓"; ML.sfx.play("chime"); } }, 1000); },
      stop: function () { if (iv) clearInterval(iv); iv = null; }
    };
    el.addEventListener("click", function (e) { e.stopPropagation(); api.start(); });
    return api;
  };

  /* ---------- TITLE ---------- */
  S.title = function (s, ctx) {
    var el = base("s-title");
    el.insertBefore(ML.art(s.art || ctx.week.cover, { motion: "kenburns-in" }), el.firstChild);
    var c = el.querySelector(".content");
    c.innerHTML = '<div class="t-wrap"><div class="kicker">' + esc(s.kicker || "") + '</div><div class="day">' + esc(ctx.day.label) + '</div><h1><span class="ink-splash"></span>' + esc(s.title) + '</h1><div class="sub">' + esc(s.sub || ctx.week.lessonTitle) + '</div></div>' +
      (ctx.day.roleplay ? '<div class="rp-badge">🎭 ROLE-PLAY DAY!</div>' : "");
    return { el: el, steps: 0, enter: function () { ML.sfx.play("whoosh"); } };
  };

  /* ---------- HOOK ---------- */
  S.hook = function (s) {
    var el = base("s-hook" + (s.style === "recap" ? " recap" : ""));
    ambient(el, "shared-question");
    var c = el.querySelector(".content");
    c.innerHTML = '<div class="qglyph">' + (s.style === "recap" ? "↺" : "?") + '</div><div class="h-col"><div class="h-wrap"><div class="h-label">' + (s.style === "recap" ? "Quick recap" : "Let’s think…") + '</div><div class="h-text"></div><div class="h-ask-slot"></div></div>' +
      (s.checkin ? '<div class="checkin"><div class="cbox yellow" style="position:static">' + esc(s.checkin.text || s.checkin) + "</div></div>" : "") + "</div>";
    var txt = c.querySelector(".h-text"), slot = c.querySelector(".h-ask-slot"), typing = null;
    function type() {
      if (ML.prefersReduced()) { txt.textContent = s.text; return; }
      var i = 0; txt.textContent = ""; txt.classList.add("typing");
      typing = setInterval(function () { i += 2; txt.textContent = s.text.slice(0, i); if (i >= s.text.length) { clearInterval(typing); txt.classList.remove("typing"); } }, 28);
    }
    var col = c.querySelector(".h-col");
    function fit() { /* shrink text until the whole column fits on screen, so nothing ever overlaps */
      var k = 1, hadTxt = txt.textContent, hadSlot = slot.innerHTML;
      txt.textContent = s.text; if (s.ask) slot.innerHTML = '<div class="h-ask ghost">' + esc(s.ask) + "</div>";
      col.style.setProperty("--hk", 1);
      while (col.scrollHeight > col.clientHeight + 1 && k > 0.45) { k -= 0.04; col.style.setProperty("--hk", k.toFixed(2)); }
      txt.textContent = hadTxt; slot.innerHTML = hadSlot;
    }
    return {
      el: el, steps: s.ask ? 1 : 0,
      enter: function () { fit(); type(); },
      leave: function () { clearInterval(typing); },
      go: function (st) {
        slot.innerHTML = st >= 1 ? '<div class="h-ask">' + esc(s.ask) + "</div>" : "";
        if (st >= 1) { clearInterval(typing); txt.textContent = s.text; txt.classList.remove("typing"); ML.sfx.play("pop"); }
      }
    };
  };

  /* ---------- SCRIPTURE ---------- */
  S.scripture = function (s) {
    var lines = (s.lines || [s.text]).map(function (l) { return typeof l === "string" ? { text: l } : l; });
    var total = lines.reduce(function (n, l) { return n + l.text.length; }, 0);
    var el = base("s-scripture" + (total > 380 ? " compact" : ""));
    ambient(el, "shared-verse");
    var c = el.querySelector(".content");
    c.innerHTML = '<div class="sc-head"><div class="sc-ref">' + esc(s.ref) + '</div><div class="sc-ver">' + esc(s.version || "CEV") + '</div></div><div class="sc-scroll">' +
      lines.map(function (l) { return '<div class="sc-line">' + (l.ref ? '<span class="lref">' + esc(l.ref) + "</span>" : "") + ML.emphasise(l.text, s.emphasis) + "</div>"; }).join("") + "</div>";
    var els = ML.$$(".sc-line", c);
    return {
      el: el, steps: els.length - 1,
      go: function (st) {
        els.forEach(function (e, i) { e.classList.toggle("on", i <= st); e.classList.toggle("past", i < st && els.length > 2); });
        ML.sfx.play("tick");
      }
    };
  };

  /* ---------- STORY ---------- */
  S.story = function (s) {
    var el = base("s-story");
    var stack = ML.el('<div class="art-stack"></div>');
    el.insertBefore(stack, el.firstChild);
    var arts = {}, beatArt = [], last = null;
    s.beats.forEach(function (b, i) {
      if (b.art && b.art.key) { last = b.art.key; if (!arts[last]) { arts[last] = ML.art(b.art); stack.appendChild(arts[last]); } }
      beatArt[i] = last;
    });
    var c = el.querySelector(".content");
    c.innerHTML = '<div class="beat-n"></div><div class="beat-wrap"></div>';
    var wrap = c.querySelector(".beat-wrap"), n = c.querySelector(".beat-n");
    return {
      el: el, steps: s.beats.length - 1,
      go: function (st) {
        var b = s.beats[st];
        Object.keys(arts).forEach(function (k) { arts[k].classList.toggle("show", k === beatArt[st]); });
        n.textContent = (st + 1) + " / " + s.beats.length;
        wrap.innerHTML = "";
        var t = ML.el('<div class="beat-text' + (b.shout ? " shout" : "") + '">' + esc(b.text) + "</div>");
        t.style.animation = "pop-in .5s var(--ease-pop) both";
        wrap.appendChild(t);
        if (b.caption) { var cp = ML.el('<div class="beat-cap">' + esc(b.caption) + "</div>"); cp.style.animation = "rise-in .6s var(--ease-out) .35s both"; wrap.appendChild(cp); }
        if (b.shout && !ML.prefersReduced()) { el.classList.remove("shake"); void el.offsetWidth; el.classList.add("shake"); }
        ML.sfx.play(b.shout ? "slam" : "pop");
        if (ML.Stage) ML.Stage.highlightNarration(st, s.beats.length);
      }
    };
  };

  /* ---------- QUESTION ---------- */
  S.question = function (s) {
    var hasOpts = s.options && s.options.length;
    var el = base("s-question" + (hasOpts ? " has-opts" : ""));
    ambient(el, "shared-question");
    var lv = ML.meta.levels[s.level] || { label: s.level, desc: "" };
    var c = el.querySelector(".content");
    c.innerHTML = '<div class="q-top"><div class="lvl ' + esc(s.level) + '">' + esc(lv.label) + '</div><div class="lvl-desc">' + esc(lv.desc) + '</div><div class="mode">' + esc(ML.meta.modes[s.mode] || s.mode || "") + "</div></div>" +
      '<div class="q-text' + (s.text.length > 150 ? " long" : "") + '">' + esc(s.text) + "</div>" +
      (hasOpts ? '<div class="opts' + (s.options.length === 2 ? " two" : "") + '">' + s.options.map(function (o, i) { return '<div class="opt' + (i === s.answer ? " correct" : "") + '"><span class="ol">' + "ABCD"[i] + "</span><span>" + esc(o) + "</span></div>"; }).join("") + "</div>" : "") +
      (s.reveal ? '<div class="finish-reveal"></div>' : "");
    var timer = ML.makeTimer(s.seconds || 30, s.mode === "pair" ? "Think · pair · share" : "Thinking time");
    if (hasOpts) { timer.el.style.bottom = "auto"; timer.el.style.top = "300px"; timer.el.style.right = "140px"; }
    c.appendChild(timer.el);
    var tId = null, revealable = (hasOpts && typeof s.answer === "number") || !!s.reveal;
    return {
      el: el, steps: revealable ? 1 : 0,
      enter: function () { tId = setTimeout(timer.start, 900); },
      leave: function () { clearTimeout(tId); timer.stop(); },
      go: function (st) {
        if (hasOpts) c.querySelector(".opts").classList.toggle("revealed", st >= 1 && typeof s.answer === "number");
        if (s.reveal) { var r = c.querySelector(".finish-reveal"); r.innerHTML = st >= 1 ? '<div class="cbox acc" style="position:static;max-width:none;animation:pop-in .5s var(--ease-pop)">' + esc(s.reveal) + "</div>" : ""; }
        if (st >= 1) { timer.stop(); ML.sfx.play("chime"); }
      }
    };
  };

  /* ---------- DIG ---------- */
  S.dig = function (s) {
    var el = base("s-dig");
    ambient(el, "shared-question");
    var c = el.querySelector(".content");
    var cols = s.columns || ["", ""];
    c.innerHTML = '<div class="dg-wrap"><div class="dg-head"><div class="lvl dig">LOOK CLOSER</div><div class="dg-prompt">' + esc(s.prompt) + '</div></div><div class="dg-table"><div class="dg-col">' + esc(cols[0]) + '</div><div class="dg-col r">' + esc(cols[1]) + "</div>" +
      s.items.map(function (it) { return '<div class="dg-cell l">' + esc(it.left) + '</div><div class="dg-cell r">' + esc(it.right) + "</div>"; }).join("") + '</div><div class="dg-reveal-slot">' + (s.reveal ? '<div class="dg-reveal ghost">' + esc(s.reveal) + "</div>" : "") + "</div></div>";
    var cells = ML.$$(".dg-cell", c), slot = c.querySelector(".dg-reveal-slot"), wrap = c.querySelector(".dg-wrap");
    /* shrink the text until head + table + reveal all fit the screen (reveal space is reserved) */
    function fit() {
      var k = 1; wrap.style.setProperty("--dk", 1);
      while (wrap.scrollHeight > wrap.clientHeight + 1 && k > 0.4) { k -= 0.04; wrap.style.setProperty("--dk", k.toFixed(2)); }
    }
    return {
      el: el, steps: s.items.length + (s.reveal ? 1 : 0),
      enter: function () { fit(); },
      go: function (st) {
        cells.forEach(function (e, i) { e.classList.toggle("on", Math.floor(i / 2) < st); });
        var rv = slot.firstChild;
        if (rv) { var show = st > s.items.length; rv.classList.toggle("ghost", !show); rv.classList.toggle("stamp-in", show); }
        ML.sfx.play(st > s.items.length ? "stamp" : "pop");
      }
    };
  };

  /* ---------- APPLY (Head–Heart–Hands) ---------- */
  S.apply = function (s) {
    var el = base("s-apply");
    ambient(el, "shared-apply");
    var c = el.querySelector(".content");
    var cards = [["🧠", "HEAD", "What did we learn about God?", s.head], ["❤️", "HEART", "What do I want to say to God?", s.heart], ["✋", "HANDS", "One thing I’ll do this week", s.hands]];
    c.innerHTML = '<div class="ap-title">Head · Heart · Hands</div><div class="hhh">' + cards.map(function (k) {
      return '<div class="hhh-card"><div class="hi">' + k[0] + '</div><div class="hl">' + k[1] + '</div><div class="hq">' + esc(k[2]) + '</div><div class="ht">' + esc(k[3]) + "</div></div>";
    }).join("") + "</div>" + (s.settings ? '<div class="settings-chips">' + s.settings.map(function (x) { return "<span>📍 " + esc(x) + "</span>"; }).join("") + "</div>" : "");
    var els = ML.$$(".hhh-card", c);
    return { el: el, steps: 2, go: function (st) { els.forEach(function (e, i) { e.classList.toggle("on", i <= st); }); ML.sfx.play("pop"); } };
  };

  /* ---------- VERSE ---------- */
  S.verse = function (s, ctx) {
    var mv = ctx.week.memoryVerse, chunks = mv.chunks || [mv.text], act = s.activity || "echo";
    var el = base("s-verse");
    ambient(el, "shared-verse");
    var c = el.querySelector(".content");
    var labels = { echo: "Listen… then echo it back!", build: "Build the verse — read it together each time", fade: "Words are disappearing… can you still say it?", actions: "Learn the actions!", scramble: "Unscramble the verse!" };
    c.innerHTML = '<div class="v-label">Memory Verse</div><div class="v-act">' + esc(labels[act] || "") + '</div><div class="v-body"></div><div class="v-ref">' + esc(mv.ref) + " · " + esc(mv.version || "CEV") + "</div>";
    var body = c.querySelector(".v-body"), steps = 0, go;
    if (act === "fade") {
      var words = mv.text.split(" ");
      body.innerHTML = words.map(function (w) { return '<span class="vchunk vword">' + esc(w) + "</span>"; }).join("");
      var ws = ML.$$(".vword", body), order = ML.shuffle(ws.map(function (_, i) { return i; })), rounds = 4;
      steps = rounds;
      go = function (st) { var hide = Math.round(order.length * st / rounds); ws.forEach(function (w, i) { w.classList.toggle("gone", order.indexOf(i) < hide); }); ML.sfx.play("tick"); };
    } else if (act === "scramble") {
      var sh = ML.shuffle(chunks.map(function (x, i) { return i; }));
      steps = chunks.length;
      go = function (st) {
        var seq = chunks.map(function (x, i) { return i; }).slice(0, st).concat(sh.filter(function (i) { return i >= st; }));
        body.innerHTML = seq.map(function (i, p) { return '<span class="vchunk' + (p < st ? " hot" : " dim") + '">' + esc(chunks[i]) + "</span>"; }).join("");
        ML.sfx.play("pop");
      };
    } else {
      body.innerHTML = chunks.map(function (ch, i) { return '<span class="vchunk">' + esc(ch) + (act === "actions" && mv.actions ? '<span class="vact">' + esc(mv.actions[i] || "") + "</span>" : "") + "</span>"; }).join("");
      var cs = ML.$$(".vchunk", body);
      if (act === "build") {
        steps = chunks.length - 1;
        go = function (st) { cs.forEach(function (e, i) { e.classList.toggle("hidden", i > st); e.classList.toggle("hot", i === st); }); ML.sfx.play("pop"); };
      } else { /* echo + actions: highlight one chunk at a time, then all */
        steps = chunks.length + 1;
        go = function (st) {
          cs.forEach(function (e, i) { e.classList.toggle("hot", i === st - 1 || st === chunks.length + 1); e.classList.toggle("dim", st > 0 && st <= chunks.length && i !== st - 1); });
          ML.sfx.play("tick");
        };
      }
    }
    /* shrink the verse until every word (and any action hints) fits inside the screen */
    function fit() {
      var k = 1; body.classList.add("fitting"); body.style.setProperty("--vk", 1);
      while (body.scrollHeight > body.clientHeight + 1 && k > 0.3) { k -= 0.03; body.style.setProperty("--vk", k.toFixed(2)); }
      void body.offsetHeight; setTimeout(function () { body.classList.remove("fitting"); }, 60);
    }
    var go0 = go;
    go = function (st) { go0(st); fit(); };
    return { el: el, steps: steps, go: go, enter: function () { fit(); } };
  };

  /* ---------- REVIEW (order game) ---------- */
  S.review = function (s, ctx) {
    if (s.format === "truefalse" || s.format === "whoSaid") return reviewCards(s, ctx);
    var el = base("s-review");
    ambient(el, ctx.week.cover);
    var c = el.querySelector(".content");
    var n = s.items.length, pool = ML.shuffle(s.items.map(function (x, i) { return i; }));
    c.innerHTML = '<div class="rv-title">' + esc(s.prompt || s.title) + '</div><div class="rv-slots">' +
      s.items.map(function (x, i) { return '<div class="rv-slot"><div class="sn">' + (i + 1) + "</div></div>"; }).join("") + '</div><div class="rv-pool">' +
      pool.map(function (i) { return '<div class="rv-card" data-i="' + i + '">' + esc(s.items[i]) + "</div>"; }).join("") + "</div>";
    var slots = ML.$$(".rv-slot", c), cards = ML.$$(".rv-pool .rv-card", c);
    return {
      el: el, steps: n,
      go: function (st) {
        slots.forEach(function (sl, i) {
          var has = sl.querySelector(".rv-card");
          if (i < st && !has) sl.appendChild(ML.el('<div class="rv-card">' + esc(s.items[i]) + "</div>"));
          if (i >= st && has) has.remove();
        });
        cards.forEach(function (cd) { cd.classList.toggle("used", +cd.getAttribute("data-i") < st); });
        if (st) ML.sfx.play(st === n ? "chime" : "slam");
      }
    };
  };

  /* True/False and Who-said-it: one card at a time; odd steps reveal the answer */
  function reviewCards(s, ctx) {
    var el = base("s-review rv-cards");
    ambient(el, ctx.week.cover);
    var c = el.querySelector(".content"), tf = s.format === "truefalse", n = s.items.length;
    var whoList = tf ? [] : s.items.map(function (it) { return it.who; }).filter(function (w, i, a) { return a.indexOf(w) === i; });
    c.innerHTML = '<div class="rv-title">' + esc(s.prompt || s.title) + '</div><div class="rv-count"></div><div class="rv-stage"></div>' +
      (tf ? '<div class="rv-vote"><span>👍 TRUE — stand up</span><span>👎 FALSE — sit down</span></div>' : '<div class="rv-who">' + ML.shuffle(whoList).map(function (w) { return "<span>" + esc(w) + "</span>"; }).join("") + "</div>");
    var stage = c.querySelector(".rv-stage"), cnt = c.querySelector(".rv-count");
    return {
      el: el, steps: n * 2 - 1,
      go: function (st) {
        var i = Math.floor(st / 2), it = s.items[i], rev = st % 2 === 1;
        cnt.textContent = (i + 1) + " / " + n;
        var verdict = tf ? (it.answer ? "TRUE!" : "FALSE!") : esc(it.who);
        stage.innerHTML = '<div class="rv-big' + (tf ? "" : " quote") + '">' + (tf ? "" : "“") + esc(tf ? it.text : it.quote) + (tf ? "" : "”") + "</div>" +
          (rev ? '<div class="rv-verdict ' + (tf ? (it.answer ? "yes" : "no") : "yes") + '">' + verdict + "</div>" + (it.why ? '<div class="rv-why">' + esc(it.why) + "</div>" : "") : '<div class="rv-ask">' + (tf ? "True or false?" : "Who said it?") + "</div>");
        ML.sfx.play(rev ? "stamp" : "pop");
      }
    };
  }

  /* ---------- RECAP + Big Idea ---------- */
  S.recap = function (s, ctx) {
    var el = base("s-recap");
    ambient(el, ctx.week.cover);
    var c = el.querySelector(".content");
    c.innerHTML = '<div class="rc-title">' + esc(s.title || "This week") + '</div><div class="rc-points">' +
      s.points.map(function (p, i) { return '<div class="rc-pt"><b>' + (i + 1) + "</b><span>" + esc(p) + "</span></div>"; }).join("") + '</div><div class="bi-slot"></div>';
    var pts = ML.$$(".rc-pt", c), slot = c.querySelector(".bi-slot");
    return {
      el: el, steps: s.points.length,
      go: function (st) {
        pts.forEach(function (p, i) { p.classList.toggle("on", i <= st); });
        if (st >= s.points.length) {
          if (!slot.firstChild) { slot.innerHTML = '<div class="big-idea stamp-in"><div class="bi-k">THE BIG IDEA</div><div class="bi-t">' + esc(ctx.week.bigIdea) + '</div><div class="bi-god">God is… <span>' + esc(ctx.week.godIs || "") + "</span></div></div>"; ML.sfx.play("stamp"); }
        } else { slot.innerHTML = ""; ML.sfx.play("pop"); }
      }
    };
  };

  /* ---------- CHALLENGE ---------- */
  S.challenge = function (s, ctx) {
    var el = base("s-challenge");
    ambient(el, "shared-challenge");
    var c = el.querySelector(".content");
    c.innerHTML = '<div class="ch-card stamp-in"><div class="ch-stamp">THIS<br>WEEK’S<br>MISSION</div><div class="ch-k">' + esc(s.title || "This Week’s Challenge") + '</div><div class="ch-t">' + esc(s.text) + '</div><div class="ch-why">' + esc(s.why || "") + "</div>" +
      (s.head ? '<div class="ch-hhh"><div><b>HEAD</b>' + esc(s.head) + "</div><div><b>HEART</b>" + esc(s.heart) + "</div><div><b>HANDS</b>" + esc(s.hands) + "</div></div>" : "") + "</div>" +
      (s.takeHome ? '<div class="ch-print"><button class="btn primary">🖨 Print take-home cards</button></div>' : "");
    var b = c.querySelector(".ch-print .btn");
    if (b) b.addEventListener("click", function (e) { e.stopPropagation(); ML.LessonPlan.takeHome(ctx, s); });
    return { el: el, steps: 0, enter: function () { ML.sfx.play("stamp"); } };
  };

  /* ---------- SCENE ---------- */
  S.scene = function (s) {
    var el = base("s-scene");
    el.insertBefore(ML.art(s.art), el.firstChild);
    var c = el.querySelector(".content");
    c.innerHTML = (s.boxes || []).map(function (b) { return '<div class="cbox ' + esc(b.style || "caption") + " pos-" + esc(b.pos || "bl") + '">' + esc(b.text) + "</div>"; }).join("");
    var bx = ML.$$(".cbox", c);
    return { el: el, steps: Math.max(0, bx.length - 1), go: function (st) { bx.forEach(function (b, i) { b.classList.toggle("on", i <= st); }); ML.sfx.play("pop"); } };
  };

  /* ---------- END (lesson complete) ---------- */
  S.end = function (s, ctx) {
    var el = base("s-end");
    var c = el.querySelector(".content");
    c.className = "content s-end";
    var nextDay = ctx.dn < 4 ? ctx.dn + 1 : null;
    c.innerHTML = '<div class="stars">' + [1, 2, 3, 4].map(function (i) { return '<span style="animation-delay:' + (0.6 + i * 0.15) + 's">' + (i <= ML.weekStars(ctx.tid, ctx.wn) ? "⭐" : "☆") + "</span>"; }).join("") + '</div><div class="end-stamp">LESSON<br>COMPLETE!</div><div class="end-sub">' + esc(ctx.day.whereToNext || "") + '</div><div class="end-btns"><button class="btn" data-a="week">← Back to the week</button>' +
      (nextDay ? '<button class="btn primary" data-a="next">' + esc(ctx.week.days[nextDay - 1].label) + " →</button>" : "") + "</div>";
    c.addEventListener("click", function (e) {
      var a = e.target.closest("[data-a]"); if (!a) return; e.stopPropagation();
      if (a.getAttribute("data-a") === "week") location.hash = "#/" + ctx.tid + "/w" + ctx.wn;
      else location.hash = "#/" + ctx.tid + "/w" + ctx.wn + "/d" + nextDay;
    });
    return { el: el, steps: 0, enter: function () { ML.sfx.play("stamp"); } };
  };
})();
