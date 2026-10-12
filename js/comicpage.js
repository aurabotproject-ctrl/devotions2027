/* Morninglight 2027 — comic-page viewer: whole page → zoom panel by panel (route #/tN/wM/comic) */
(function () {
  var ML = window.ML, root = null, st = null;

  function comicKey(tid, wn) { return "t" + tid.slice(1) + "w" + ("0" + wn).slice(-2) + "-comic"; }
  function weekUrl(tid, wn) { return "#/" + tid + "/w" + wn; }

  ML.Comic = {
    key: comicKey,
    /* does a comic image exist? (async, cached by loadImage) */
    exists: function (tid, wn, cb) { ML.loadImage(comicKey(tid, wn), function (src) { cb(!!src); }); },

    open: function (tid, wn) {
      ML.Comic.close();
      var key = comicKey(tid, wn), W = ML.week(tid, wn), t = ML.term(tid);
      document.body.setAttribute("data-term", tid);
      root = ML.el('<div class="comic-view" role="dialog" aria-label="Comic page"><div class="cv-top"><button class="btn ghost" data-c="back">✕ Back to week</button><div class="cv-title">' + ML.esc(W ? W.lessonTitle : "") + '</div><div class="cv-count"></div></div><div class="cv-stage"><div class="cv-page"></div></div><div class="cv-cap" style="visibility:hidden"></div><div class="cv-bar"><button class="btn" data-c="prev">◀ Back</button><button class="btn ghost" data-c="all">Whole page</button><button class="btn primary" data-c="next">Next panel ▶</button></div><div class="cv-hint">Click, Space or → for the next panel · ← back · A whole page · Esc close</div></div>');
      document.body.appendChild(root);
      st = { tid: tid, wn: wn, i: -1, panels: [], img: null, w: 0, h: 0 };
      var P = (window.ML_COMIC_PANELS || {})[key];
      st.panels = (P && P.panels && P.panels.length) ? P.panels : [];
      root.addEventListener("click", ML.Comic._click);
      document.addEventListener("keydown", ML.Comic._key);
      window.addEventListener("resize", ML.Comic._layout);
      ML.loadImage(key, function (src) {
        var page = root && root.querySelector(".cv-page"); if (!page) return;
        if (!src) { page.innerHTML = ""; page.classList.add("empty"); page.appendChild(ML.el('<div class="art-tag" style="position:static;max-width:40rem"><b>🖼 Comic page to come</b><span>' + ML.esc((W && W.comicArt && W.comicArt.desc) || "") + "</span><code>" + key + "</code></div>")); return; }
        var im = new Image(); im.alt = "Comic page"; im.draggable = false;
        im.onload = function () { st.img = im; st.w = im.naturalWidth; st.h = im.naturalHeight; page.appendChild(im); ML.Comic._layout(true); };
        im.src = src;
      });
      ML.Comic._count();
    },
    close: function () {
      if (!root) return;
      document.removeEventListener("keydown", ML.Comic._key);
      window.removeEventListener("resize", ML.Comic._layout);
      root.remove(); root = null; st = null;
    },
    isOpen: function () { return !!root; },

    _count: function () {
      if (!root) return;
      var n = st.panels.length, c = root.querySelector(".cv-count");
      var cap = root.querySelector(".cv-cap"), T = (window.ML_COMIC_CAPTIONS || {})[comicKey(st.tid, st.wn)];
      if (st.i >= 0 && T && T[st.i]) { cap.style.visibility = "visible"; cap.textContent = T[st.i]; cap.style.animation = "none"; void cap.offsetWidth; cap.style.animation = ""; } else { cap.style.visibility = "hidden"; cap.textContent = ""; }
      c.textContent = st.i < 0 ? (n ? n + " panels" : "") : "Panel " + (st.i + 1) + " of " + n;
      root.querySelector('[data-c="next"]').textContent = (st.i < 0 ? "Start ▶" : st.i >= n - 1 ? "Whole page ▶" : "Next panel ▶");
    },
    /* position the page so rect r (fractions) fills the screen; r=null → whole page */
    _layout: function (instant) {
      if (!root || !st || !st.img) return;
      var stage = root.querySelector(".cv-stage"), page = root.querySelector(".cv-page");
      var vw = stage.clientWidth, vh = stage.clientHeight, aspect = st.w / st.h;
      var bw = Math.min(vw * 0.98, vh * 0.98 * aspect), bh = bw / aspect;     // whole page, fitted
      page.style.width = bw + "px"; page.style.height = bh + "px";
      var r = st.i >= 0 ? st.panels[st.i] : null, s = 1, tx, ty;
      if (r) {
        s = Math.min(vw * 0.97 / (r[2] * bw), vh * 0.97 / (r[3] * bh));
        tx = vw / 2 - (r[0] + r[2] / 2) * bw * s; ty = vh / 2 - (r[1] + r[3] / 2) * bh * s;
      } else { tx = (vw - bw) / 2; ty = (vh - bh) / 2; }
      page.style.transition = (instant === true || ML.prefersReduced()) ? "none" : "";
      page.style.clipPath = r ? "inset(" + (r[1] * 100) + "% " + ((1 - r[0] - r[2]) * 100) + "% " + ((1 - r[1] - r[3]) * 100) + "% " + (r[0] * 100) + "%)" : "inset(0 0 0 0)";
      page.style.transform = "translate(" + tx + "px," + ty + "px) scale(" + s + ")";
    },
    go: function (i) {
      if (!st) return;
      var n = st.panels.length;
      st.i = Math.max(-1, Math.min(n - 1, i));
      ML.Comic._count(); ML.Comic._layout();
    },
    next: function () {
      var n = st.panels.length;
      if (!n) return;
      ML.Comic.go(st.i >= n - 1 ? -1 : st.i + 1);
    },
    prev: function () { if (st.panels.length) ML.Comic.go(st.i < 0 ? st.panels.length - 1 : st.i - 1); },
    _click: function (e) {
      var b = e.target.closest("[data-c]");
      if (b) {
        var k = b.getAttribute("data-c");
        if (k === "back") location.hash = weekUrl(st.tid, st.wn);
        else if (k === "next") ML.Comic.next(); else if (k === "prev") ML.Comic.prev(); else if (k === "all") ML.Comic.go(-1);
        return;
      }
      if (e.target.closest(".cv-stage")) ML.Comic.next();
    },
    _key: function (e) {
      if (!st) return;
      if (e.key === "Escape") location.hash = weekUrl(st.tid, st.wn);
      else if (e.key === " " || e.key === "ArrowRight" || e.key === "PageDown" || e.key === "Enter") { e.preventDefault(); ML.Comic.next(); }
      else if (e.key === "ArrowLeft" || e.key === "PageUp" || e.key === "Backspace") { e.preventDefault(); ML.Comic.prev(); }
      else if (e.key === "a" || e.key === "A" || e.key === "Home") ML.Comic.go(-1);
    }
  };
})();
