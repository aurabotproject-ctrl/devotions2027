/* Morninglight 2027 — core: state, settings, storage, helpers, art loader */
(function () {
  "use strict";
  var ML = window.ML = window.ML || {};
  ML.slides = {};

  /* ---------- storage (guarded; falls back to memory) ---------- */
  var mem = {};
  ML.store = {
    get: function (k, d) {
      try { var v = localStorage.getItem("ml27:" + k); if (v != null) return JSON.parse(v); } catch (e) { if (k in mem) return mem[k]; }
      return k in mem ? mem[k] : d;
    },
    set: function (k, v) { mem[k] = v; try { localStorage.setItem("ml27:" + k, JSON.stringify(v)); } catch (e) {} }
  };

  /* ---------- settings ---------- */
  ML.settings = Object.assign({ reduceMotion: false, textSize: 1, sound: false, showLabels: true, classList: [], pacing: true }, ML.store.get("settings", {}));
  ML.saveSettings = function () { ML.store.set("settings", ML.settings); ML.applySettings(); };
  ML.applySettings = function () {
    var b = document.body;
    b.classList.toggle("reduce-motion", !!ML.settings.reduceMotion);
    b.classList.toggle("no-labels", !ML.settings.showLabels);
    document.documentElement.style.setProperty("--ts", ML.settings.textSize || 1);
  };
  ML.prefersReduced = function () {
    return ML.settings.reduceMotion || (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  };

  /* ---------- helpers ---------- */
  ML.esc = function (s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); };
  ML.el = function (html) { var t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstElementChild; };
  ML.$ = function (sel, root) { return (root || document).querySelector(sel); };
  ML.$$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };
  ML.emphasise = function (text, words) {
    var out = ML.esc(text);
    (words || []).slice().sort(function (a, b) { return b.length - a.length; }).forEach(function (w) {
      var ew = ML.esc(w).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      out = out.replace(new RegExp("(" + ew + ")(?![^<]*>)", "gi"), '<span class="emph">$1</span>');
    });
    return out;
  };
  ML.fmtMin = function (m) { var s = Math.round(m * 60); return Math.floor(s / 60) + ":" + ("0" + (s % 60)).slice(-2); };
  ML.toast = function (msg) {
    var t = ML.el('<div class="toast">' + ML.esc(msg) + "</div>");
    document.body.appendChild(t); setTimeout(function () { t.remove(); }, 2200);
  };
  ML.shuffle = function (a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var x = a[i]; a[i] = a[j]; a[j] = x; } return a; };

  /* ---------- data access ---------- */
  ML.meta = window.ML_META;
  ML.term = function (tid) { return ML.meta.terms.filter(function (t) { return t.id === tid; })[0]; };
  ML.week = function (tid, n) {
    var t = ML.term(tid); if (!t) return null;
    var D = (window.DEVOTIONS || {})[t.name] || {};
    return D["Week " + n] || null;
  };
  ML.isBuilt = function (tid, n) { var w = ML.week(tid, n); return !!(w && w.days && w.days.length); };

  /* ---------- art index (key → description) ---------- */
  ML.artIndex = {};
  function indexArt(a, ctx) { if (a && a.key && (a.desc || a.scene)) ML.artIndex[a.key] = Object.assign({ ctx: ctx }, a); }
  ML.buildArtIndex = function () {
    var S = window.ML_SHARED_ART || {};
    Object.keys(S).forEach(function (k) { ML.artIndex[k] = Object.assign({ key: k }, S[k]); });
    ML.meta.terms.forEach(function (t) {
      var D = (window.DEVOTIONS || {})[t.name] || {};
      Object.keys(D).forEach(function (wk) {
        var W = D[wk]; indexArt(W.coverArt); indexArt(W.comicArt);
        (W.days || []).forEach(function (d) {
          (d.slides || []).forEach(function (s) {
            indexArt(s.art);
            (s.beats || []).forEach(function (b) { indexArt(b.art); });
          });
        });
      });
    });
  };

  ML.artFolder = function (key) {
    var m = /^t(\d)w(\d\d)/.exec(key);
    if (m) return "images/t" + m[1] + "/w" + m[2] + "/";
    if (/^char-/.test(key)) return "images/characters/";
    return "images/shared/";
  };
  var imgCache = {};
  ML.loadImage = function (key, cb) {
    if (key in imgCache) { cb(imgCache[key]); return; }
    var exts = ["webp", "jpg", "png"], i = 0, base = ML.artFolder(key) + key + ".";
    (function tryNext() {
      if (i >= exts.length) { imgCache[key] = null; cb(null); return; }
      var src = base + exts[i++], im = new Image();
      im.onload = function () { imgCache[key] = src; cb(src); };
      im.onerror = tryNext;
      im.src = src;
    })();
  };

  /* Build an art slot. If the image file exists it shows (with Ken Burns); otherwise an EMPTY
     container with a label describing the image to come. opts: {ambient, framed, motion, dim, cls} */
  ML.art = function (artRef, opts) {
    opts = opts || {};
    var key = typeof artRef === "string" ? artRef : (artRef && artRef.key);
    var def = Object.assign({}, ML.artIndex[key] || {}, typeof artRef === "object" ? artRef : {});
    var motion = opts.motion || def.motion || "kenburns-in";
    var cls = "art" + (opts.ambient ? " ambient" : "") + (opts.framed ? " framed" : "") + (opts.dim ? " dim" : "") + (opts.cls ? " " + opts.cls : "");
    var box = ML.el('<div class="' + cls + '" data-key="' + ML.esc(key || "") + '"></div>');
    if (!key) return box;
    ML.loadImage(key, function (src) {
      if (src) {
        box.classList.add(ML.prefersReduced() ? "kb-none" : "kb-" + motion.replace("kenburns-", ""));
        var img = new Image(); img.alt = def.desc || ""; img.src = src; box.appendChild(img);
      } else {
        box.appendChild(ML.el('<div class="art-empty"></div>'));
        var lbl = opts.ambient ? "Backdrop to come" : "Image to come";
        box.appendChild(ML.el('<div class="art-tag"><b>🖼 ' + lbl + '</b><span>' + ML.esc(def.desc || def.label || "") + '</span><code>' + ML.esc(key) + '</code></div>'));
      }
    });
    return box;
  };

  /* ---------- progress ---------- */
  ML.progress = ML.store.get("progress", {});
  ML.dayKey = function (tid, w, d) { return tid + "w" + w + "d" + d; };
  ML.markDone = function (tid, w, d) { ML.progress[ML.dayKey(tid, w, d)] = Date.now(); ML.store.set("progress", ML.progress); };
  ML.isDone = function (tid, w, d) { return !!ML.progress[ML.dayKey(tid, w, d)]; };
  ML.weekStars = function (tid, w) { var n = 0; for (var d = 1; d <= 4; d++) if (ML.isDone(tid, w, d)) n++; return n; };

  /* ---------- modal ---------- */
  ML.modal = function (inner, opts) {
    ML.closeModal();
    var m = ML.el('<div class="modal"><div class="modal-card"><button class="btn ghost close" style="color:var(--ink);border-color:var(--ink)" aria-label="Close">✕</button>' + inner + "</div></div>");
    m.addEventListener("click", function (e) { if (e.target === m || e.target.closest(".close")) ML.closeModal(); });
    document.body.appendChild(m);
    ML._modal = m;
    return m.querySelector(".modal-card");
  };
  ML.closeModal = function () { if (ML._modal) { ML._modal.remove(); ML._modal = null; } };

  /* ---------- settings modal ---------- */
  ML.openSettings = function () {
    var s = ML.settings;
    var card = ML.modal(
      "<h2>Settings</h2><p class='muted'>Saved in this browser only. Nothing leaves this device.</p>" +
      "<h3>Class list (for picking role-play volunteers)</h3><p class='muted'>One name per line.</p><textarea id='set-class'>" + ML.esc((s.classList || []).join("\n")) + "</textarea>" +
      "<h3>Display</h3>" +
      "<label><input type='checkbox' id='set-labels'" + (s.showLabels ? " checked" : "") + "> Show ‘image to come’ labels in empty image boxes</label>" +
      "<label><input type='checkbox' id='set-motion'" + (s.reduceMotion ? " checked" : "") + "> Reduce motion (no particles or zooms)</label>" +
      "<label><input type='checkbox' id='set-pacing'" + (s.pacing ? " checked" : "") + "> Show pacing timer during lessons</label>" +
      "<label><input type='checkbox' id='set-sound'" + (s.sound ? " checked" : "") + "> Soft sound effects</label>" +
      "<label>Text size <select id='set-ts'><option value='1'>Normal</option><option value='1.1'>Large</option><option value='1.2'>Extra large</option></select></label>" +
      "<div class='modal-actions'><button class='btn primary' id='set-save'>Save</button><button class='btn' id='set-reset'>Reset lesson progress</button></div>");
    card.querySelector("#set-ts").value = String(s.textSize || 1);
    card.querySelector("#set-save").onclick = function () {
      s.classList = card.querySelector("#set-class").value.split(/\n/).map(function (x) { return x.trim(); }).filter(Boolean);
      s.showLabels = card.querySelector("#set-labels").checked;
      s.reduceMotion = card.querySelector("#set-motion").checked;
      s.pacing = card.querySelector("#set-pacing").checked;
      s.sound = card.querySelector("#set-sound").checked;
      s.textSize = parseFloat(card.querySelector("#set-ts").value);
      ML.saveSettings(); ML.closeModal(); ML.toast("Settings saved");
      if (ML.Particles) ML.Particles.refresh();
    };
    card.querySelector("#set-reset").onclick = function () { ML.progress = {}; ML.store.set("progress", {}); ML.toast("Progress reset"); ML.closeModal(); if (ML.Router) ML.Router.render(); };
  };
})();
