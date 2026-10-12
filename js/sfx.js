/* Morninglight 2027 — optional soft UI sounds, synthesised (no audio files). Off by default. */
(function () {
  var ML = window.ML = window.ML || {};
  var ctx = null;
  function ac() { if (!ctx) { try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { ctx = null; } } return ctx; }
  function tone(freq, dur, type, vol, when, slideTo) {
    var c = ac(); if (!c) return;
    var t = c.currentTime + (when || 0), o = c.createOscillator(), g = c.createGain();
    o.type = type || "sine"; o.frequency.setValueAtTime(freq, t);
    if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, t + dur);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol || 0.08, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(c.destination); o.start(t); o.stop(t + dur + 0.05);
  }
  ML.sfx = {
    play: function (name) {
      if (!ML.settings || !ML.settings.sound) return;
      switch (name) {
        case "tick": tone(880, 0.06, "triangle", 0.04); break;
        case "pop": tone(520, 0.12, "sine", 0.07, 0, 900); break;
        case "whoosh": tone(200, 0.35, "sawtooth", 0.02, 0, 60); break;
        case "stamp": tone(110, 0.25, "square", 0.06, 0, 55); break;
        case "chime": tone(784, 0.6, "sine", 0.06); tone(1175, 0.8, "sine", 0.04, 0.12); break;
        case "slam": tone(160, 0.18, "triangle", 0.08, 0, 80); break;
      }
    }
  };
})();
