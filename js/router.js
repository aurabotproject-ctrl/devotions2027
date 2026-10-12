/* Morninglight 2027 — hash router + boot.  #/  #/t1  #/t1/w3  #/t1/w3/d2  #/t1/w3/d2/s5 */
(function () {
  var ML = window.ML;
  function parse() {
    var m = /^#\/(t[1-4])?(?:\/w(\d+))?(?:\/d([1-4]))?(?:\/s(\d+))?/.exec(location.hash || "#/") || [];
    return { tid: m[1], wn: m[2] ? +m[2] : 0, dn: m[3] ? +m[3] : 0, sn: m[4] ? +m[4] : 0 };
  }
  ML.Router = {
    render: function () {
      var cm = /^#\/(t[1-4])\/w(\d+)\/comic/.exec(location.hash || "");
      if (!cm && ML.Comic && ML.Comic.isOpen()) ML.Comic.close();
      if (cm && ML.isBuilt(cm[1], +cm[2])) {
        if (ML.Stage.isOpen()) ML.Stage.exit(true);
        document.getElementById("menu-view").hidden = false;
        if (!ML.Comic.isOpen()) { ML.Menus.week(cm[1], +cm[2]); ML.Comic.open(cm[1], +cm[2]); }
        return;
      }
      var pm = /^#\/plans(?:\/(t[1-4]))?(?:\/w(\d+))?(?:\/d([1-4]))?/.exec(location.hash || "");
      if (pm) { if (ML.Stage.isOpen()) ML.Stage.exit(true); document.getElementById("menu-view").hidden = false; window.scrollTo(0, 0); ML.Menus.plans(pm[1], pm[2] ? +pm[2] : 0, pm[3] ? +pm[3] : 0); return; }
      var r = parse();
      if (r.tid && r.wn && r.dn && r.sn && ML.isBuilt(r.tid, r.wn)) { if (ML.Stage.open(r.tid, r.wn, r.dn, r.sn)) return; }
      if (ML.Stage.isOpen()) ML.Stage.exit(true);
      document.getElementById("menu-view").hidden = false;
      window.scrollTo(0, 0);
      if (r.tid && r.wn && r.dn) ML.Menus.day(r.tid, r.wn, r.dn);
      else if (r.tid && r.wn) ML.Menus.week(r.tid, r.wn);
      else if (r.tid) ML.Menus.term(r.tid);
      else ML.Menus.home();
    }
  };
  function boot() {
    ML.applySettings();
    ML.buildArtIndex();
    ML.Stage.init();
    ML.Menus.init();
    window.addEventListener("hashchange", ML.Router.render);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && document.querySelector(".modal")) ML.closeModal(); });
    ML.Router.render();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();
