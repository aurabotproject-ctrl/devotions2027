/* Morninglight 2027 — directed prayer renderer (Wow · Sorry · Thanks · Please) */
(function () {
  var ML = window.ML, esc = ML.esc;
  var STYLE = { silent: "Silent prayer", "out-loud": "One sentence out loud", pairs: "Praying in pairs", write: "Write a prayer", hands: "Open hands", stand: "Standing prayer", psalm: "Praying a psalm" };

  ML.slides.prayer = function (s, ctx) {
    var el = ML.el('<div class="slide s-prayer"><div class="orb"></div><div class="content"></div></div>');
    el.insertBefore(ML.art("shared-prayer-" + ctx.tid, { ambient: true }), el.firstChild);
    var c = el.querySelector(".content"), ph = s.phases;
    var R = 72, C = 2 * Math.PI * R;
    c.innerHTML = '<div class="pr-phases">' + ph.map(function (p) { return "<span>" + esc(p.name) + "</span>"; }).join("") + "</div>" +
      '<div class="pr-body"></div>' +
      '<div class="pr-ring" hidden><svg viewBox="0 0 170 170"><circle class="bg" cx="85" cy="85" r="' + R + '"/><circle class="fg" cx="85" cy="85" r="' + R + '" stroke-dasharray="' + C + '"/></svg><div class="t-num"></div></div>' +
      '<div class="pr-aloud-btn" hidden><button class="btn ghost">🗣 Pray it aloud as a class</button></div><div class="pr-aloud-slot"></div>';
    var body = c.querySelector(".pr-body"), ring = c.querySelector(".pr-ring"), fg = ring.querySelector(".fg"), num = ring.querySelector(".t-num");
    var pills = ML.$$(".pr-phases span", c), aBtn = c.querySelector(".pr-aloud-btn"), aSlot = c.querySelector(".pr-aloud-slot");
    var iv = null, cur = 0;

    function ringStart(sec) {
      clearInterval(iv); var left = sec; ring.hidden = false;
      function draw() { num.textContent = left > 0 ? left : "…"; fg.style.strokeDashoffset = String(C * (1 - left / sec)); }
      draw(); iv = setInterval(function () { left--; draw(); if (left <= 0) { clearInterval(iv); ML.sfx.play("chime"); } }, 1000);
    }
    aBtn.querySelector("button").addEventListener("click", function (e) {
      e.stopPropagation();
      var p = ph[cur - 1]; if (!p) return;
      aSlot.innerHTML = aSlot.firstChild ? "" : '<div class="pr-aloud"><small>Repeat after me</small>' + esc(p.aloud || p.starter) + "</div>";
    });

    function go(st) {
      cur = st; aSlot.innerHTML = ""; clearInterval(iv);
      pills.forEach(function (p, i) { p.classList.toggle("on", i === st - 1); p.classList.toggle("done", i < st - 1 || st > ph.length); });
      if (st === 0) {
        ring.hidden = true; aBtn.hidden = true;
        body.innerHTML = '<div class="pr-k">Prayer time · ' + esc(STYLE[s.style] || s.style || "") + '</div><div class="pr-tip"><b>💡 How to pray: ' + esc(ctx.week.prayerFocus ? ctx.week.prayerFocus.skill : "") + "</b>" + esc(s.tip) + '</div><div class="pr-open">' + esc(s.opening) + "</div>";
      } else if (st <= ph.length) {
        var p = ph[st - 1];
        aBtn.hidden = false;
        body.innerHTML = '<div class="pr-big">' + esc(p.name) + '</div><div class="pr-lead">' + esc(p.lead) + '</div><div class="pr-prompts">' +
          p.prompts.map(function (x) { return "<div>" + esc(x) + "</div>"; }).join("") + '</div><div class="pr-starter">' + esc(p.starter) + "</div>";
        ringStart(p.seconds || 30);
        ML.sfx.play("chime");
      } else {
        ring.hidden = true; aBtn.hidden = true;
        body.innerHTML = '<div class="pr-open">' + esc(s.closing) + '</div><div class="pr-amen">AMEN!</div>';
        ML.sfx.play("stamp");
      }
    }
    return { el: el, steps: ph.length + 1, go: go, leave: function () { clearInterval(iv); } };
  };
})();
