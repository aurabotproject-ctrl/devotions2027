/* Morninglight 2027 — capped canvas particle moods (≤ 70 particles; pauses when hidden). */
(function () {
  var ML = window.ML = window.ML || {};
  function P(canvas, w, h) { this.c = canvas; this.x = canvas.getContext("2d"); this.w = w; this.h = h; this.mood = "dawn"; this.ps = []; this.raf = 0; this.flash = 0; }
  var MOODS = {
    dawn:  { n: 55, color: [255, 196, 110], vy: [-0.25, -0.8], vx: [-0.15, 0.15], r: [1.2, 3.4], tw: 0 },
    night: { n: 70, color: [210, 225, 255], vy: [-0.02, 0.02], vx: [-0.04, 0.04], r: [0.8, 2.6], tw: 1 },
    calm:  { n: 26, color: [255, 214, 140], vy: [-0.12, -0.35], vx: [-0.12, 0.12], r: [4, 13], tw: 0.4, soft: true },
    sea:   { n: 30, color: [140, 220, 255], vy: [-0.1, 0.1], vx: [0.2, 0.6], r: [3, 10], tw: 0.3, soft: true },
    desert:{ n: 50, color: [230, 200, 160], vy: [-0.05, 0.1], vx: [0.4, 1.1], r: [0.8, 2.2], tw: 0 },
    fire:  { n: 50, color: [255, 140, 60], vy: [-0.6, -1.6], vx: [-0.3, 0.3], r: [1, 3], tw: 0.6 },
    temple:{ n: 45, color: [255, 220, 150], vy: [-0.08, 0.12], vx: [-0.08, 0.08], r: [0.8, 2.4], tw: 0.5 },
    storm: { n: 70, color: [200, 210, 230], vy: [9, 14], vx: [-2, -1], r: [1, 1.4], tw: 0, rain: true }
  };
  function rnd(a) { return a[0] + Math.random() * (a[1] - a[0]); }
  P.prototype.spawn = function (initial) {
    var m = MOODS[this.mood] || MOODS.dawn;
    return { x: Math.random() * this.w, y: initial ? Math.random() * this.h : (m.vy[1] < 0 ? this.h + 20 : (m.rain ? -20 : Math.random() * this.h)),
      vx: rnd(m.vx), vy: rnd(m.vy), r: rnd(m.r), a: Math.random(), ph: Math.random() * 6.28, life: 0 };
  };
  P.prototype.setMood = function (mood) {
    if (!MOODS[mood]) mood = "dawn";
    if (mood === this.mood && this.ps.length) return;
    this.mood = mood; this.ps = [];
    var m = MOODS[mood]; for (var i = 0; i < m.n; i++) this.ps.push(this.spawn(true));
  };
  P.prototype.frame = function () {
    var self = this, m = MOODS[this.mood], x = this.x, t = performance.now() / 1000;
    x.clearRect(0, 0, this.w, this.h);
    for (var i = 0; i < this.ps.length; i++) {
      var p = this.ps[i];
      p.x += p.vx + (m.soft ? Math.sin(t * 0.5 + p.ph) * 0.2 : 0); p.y += p.vy; p.life++;
      if (p.y < -30 || p.y > this.h + 30 || p.x < -30 || p.x > this.w + 30) { this.ps[i] = this.spawn(false); continue; }
      var alpha = 0.55 + (m.tw ? Math.sin(t * (1.2 + p.ph) + p.ph) * 0.45 * m.tw : 0);
      alpha *= Math.min(1, p.life / 60);
      var c = m.color;
      if (m.rain) {
        x.strokeStyle = "rgba(" + c + "," + 0.35 + ")"; x.lineWidth = p.r;
        x.beginPath(); x.moveTo(p.x, p.y); x.lineTo(p.x + p.vx * 2, p.y + p.vy * 2); x.stroke();
      } else if (m.soft) {
        var g = x.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3);
        g.addColorStop(0, "rgba(" + c + "," + (alpha * 0.5) + ")"); g.addColorStop(1, "rgba(" + c + ",0)");
        x.fillStyle = g; x.beginPath(); x.arc(p.x, p.y, p.r * 3, 0, 6.283); x.fill();
      } else {
        x.fillStyle = "rgba(" + c + "," + Math.max(0, alpha) + ")";
        x.beginPath(); x.arc(p.x, p.y, p.r, 0, 6.283); x.fill();
        if (p.r > 2.4) { x.fillStyle = "rgba(" + c + "," + (alpha * 0.15) + ")"; x.beginPath(); x.arc(p.x, p.y, p.r * 4, 0, 6.283); x.fill(); }
      }
    }
    if (m.rain && Math.random() < 0.003) this.flash = 1;
    if (this.flash > 0) { x.fillStyle = "rgba(255,255,255," + this.flash * 0.25 + ")"; x.fillRect(0, 0, this.w, this.h); this.flash -= 0.05; }
    this.raf = requestAnimationFrame(function () { self.frame(); });
  };
  P.prototype.start = function () { if (!this.raf) this.frame(); };
  P.prototype.stop = function () { cancelAnimationFrame(this.raf); this.raf = 0; this.x.clearRect(0, 0, this.w, this.h); };

  var systems = [];
  ML.Particles = {
    create: function (canvas, w, h, mood) {
      canvas.width = w; canvas.height = h;
      var p = new P(canvas, w, h); p.setMood(mood || "dawn"); systems.push(p);
      if (!ML.prefersReduced()) p.start();
      return p;
    },
    refresh: function () { systems.forEach(function (p) { if (ML.prefersReduced() || document.hidden) p.stop(); else p.start(); }); }
  };
  document.addEventListener("visibilitychange", ML.Particles.refresh);
})();
