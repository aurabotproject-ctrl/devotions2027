/* Morninglight 2027 — validator.  Run:  node tools/validate.js
   Checks every BUILT week against the build recipe (§14) and writes BUILD_STATUS.md. */
const fs = require("fs"), path = require("path"), vm = require("vm");
const root = path.join(__dirname, "..");
const ctx = { window: {} }; vm.createContext(ctx);
["data/meta.js", "data/characters.js"].concat(fs.readdirSync(path.join(root, "data")).filter(f => /^term\d/.test(f)).sort().map(f => "data/" + f)).forEach(f => {
  const p = path.join(root, f); if (fs.existsSync(p)) vm.runInContext(fs.readFileSync(p, "utf8"), ctx, { filename: f });
});
const D = ctx.window.DEVOTIONS || {};
const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday"];
const BANNED = ["help me be good", "bless everyone", "thank you for everything"];
const US = { color: "colour", favorite: "favourite", center: "centre", neighbor: "neighbour", honor: "honour", realize: "realise", practice: "practise" };
let report = [], errors = 0, warnings = 0, artKeys = new Set(), prompts = 0, roleplays = 0;
const err = (w, m) => { errors++; report.push(`❌ ${w}: ${m}`); };
const warn = (w, m) => { warnings++; report.push(`⚠️ ${w}: ${m}`); };
const words = s => (s || "").trim().split(/\s+/).filter(Boolean).length;
const rows = [];

Object.keys(D).forEach(term => Object.keys(D[term]).forEach(wk => {
  const W = D[term][wk], tag = `${term} ${wk}`;
  ["lessonTitle", "passage", "bigIdea", "memoryVerse", "prayerFocus", "cover"].forEach(k => { if (!W[k]) err(tag, "missing " + k); });
  if (!W.days || W.days.length !== 4) err(tag, "needs exactly 4 days");
  (W.days || []).forEach((d, i) => {
    const dt = `${tag} ${d.label}`;
    if (d.label !== DAYS[i]) err(dt, "label should be " + DAYS[i]);
    if (!d.learningIntentions || d.learningIntentions.length !== 3) err(dt, "needs 3 learningIntentions");
    ["assessment", "resources", "whereToNext"].forEach(k => { if (!d[k]) err(dt, "missing " + k); });
    const S = d.slides || [];
    if (S.length < 12 || S.length > 16) err(dt, `has ${S.length} slides (needs 12–16)`);
    let core = 0, all = 0;
    S.forEach(s => { if (typeof s.minutes !== "number") err(dt, `slide ${s.id} missing minutes`); all += s.minutes || 0; if (!s.optional) core += s.minutes || 0; });
    if (core < 15 || core > 18.5) err(dt, `core minutes ${core} (needs 15–18.5)`);
    if (all > 20) err(dt, `core+optional ${all} > 20`);
    if (!S.some(s => s.optional)) err(dt, "needs an optional slide");
    if (!S.some(s => s.skippable)) err(dt, "needs a skippable slide");
    const ids = new Set(); S.forEach(s => { if (ids.has(s.id)) err(dt, "duplicate id " + s.id); ids.add(s.id); });
    const rp = S.filter(s => s.type === "roleplay");
    const wantRp = i === 0 || i === 2;
    if (!!d.roleplay !== wantRp || (rp.length > 0) !== wantRp) err(dt, "role-play rule (Mon & Wed only)");
    rp.forEach(r => {
      roleplays++;
      const n = r.lines.length; if (n < 18 || n > 35) err(dt, `role-play has ${n} lines (18–35)`);
      const speakers = new Set(r.lines.filter(l => l.character && !l.direction).map(l => l.character));
      if (speakers.size < 3) err(dt, "role-play needs ≥3 speaking characters");
      if (!r.characters.some(c => c.name === "Everyone")) err(dt, "role-play needs an Everyone role");
      if (!r.lines.some(l => l.pause)) err(dt, "role-play needs a pause");
      if (!r.debrief || !r.debrief.length) err(dt, "role-play needs a debrief");
      if (!r.imagined) err(dt, "role-play needs an imagined note");
      r.lines.forEach(l => { if (l.text && words(l.text) > 25) warn(dt, `role-play line over 25 words: “${l.text.slice(0, 40)}…”`); });
    });
    const Q = S.filter(s => s.type === "question");
    if (Q.length < 3) err(dt, `only ${Q.length} question slides`);
    const lv = new Set(Q.map(q => q.level));
    ["look", "think", "dig"].forEach(l => { if (!lv.has(l)) err(dt, "no " + l + " question"); });
    Q.forEach(q => { if (words(q.hint) < 25) err(dt, `question ${q.id} hint < 25 words`); });
    if (!S.some(s => s.type === "apply" || s.type === "challenge")) err(dt, "needs apply or challenge");
    const P = S.filter(s => s.type === "prayer");
    if (P.length !== 1) err(dt, "needs exactly one prayer");
    P.forEach(p => {
      if (!p.tip || !p.style) err(dt, "prayer needs tip and style");
      const names = (p.phases || []).map(f => f.name).join(",");
      if (names !== "Wow,Sorry,Thanks,Please") err(dt, "prayer phases must be Wow,Sorry,Thanks,Please");
      (p.phases || []).forEach(f => {
        if (!f.prompts || f.prompts.length < 2 || !f.starter) err(dt, `prayer phase ${f.name} needs ≥2 prompts + starter`);
        (f.prompts || []).forEach(pr => { if (BANNED.some(b => pr.toLowerCase().includes(b))) err(dt, "generic prayer prompt: " + pr); });
      });
    });
    if (!S.some(s => s.type === "scripture" && s.ref)) err(dt, "needs a scripture slide with ref");
    if (i < 3) S.filter(s => s.type === "story").forEach(s => {
      const w = words(s.narration), lo = 130 * s.minutes, hi = 150 * s.minutes;
      if (w < lo * 0.9 || w > hi) err(dt, `story narration ${w} words for ${s.minutes} min (aim ${lo}–${hi})`);
    });
    if (i === 3 && !S.some(s => s.type === "challenge")) err(dt, "Thursday needs a challenge");
    const json = JSON.stringify(d).replace(/"color":/g, "");
    if (/TODO|TBC|lorem/i.test(json)) err(dt, "placeholder text found");
    if (json.includes("</script>")) err(dt, "contains </script>");
    Object.keys(US).forEach(u => { if (new RegExp("\\b" + u + "\\b", "i").test(json)) warn(dt, `US spelling “${u}” → “${US[u]}”`); });
    S.forEach(s => {
      const arts = [s.art].concat((s.beats || []).map(b => b.art)).filter(a => a && a.scene);
      arts.forEach(a => {
        if (artKeys.has(a.key)) err(dt, "duplicate art prompt key " + a.key); artKeys.add(a.key); prompts++;
        if (words(a.scene) < 20) err(dt, `art ${a.key} prompt < 20 words`);
      });
    });
    rows.push({ dt, core, all, slides: S.length });
  });
}));

// image coverage
const imgDir = path.join(root, "images");
const have = new Set();
(function walk(d) { if (!fs.existsSync(d)) return; fs.readdirSync(d).forEach(f => { const p = path.join(d, f); if (fs.statSync(p).isDirectory()) walk(p); else have.add(f.replace(/\.(webp|jpg|jpeg|png)$/i, "")); }); })(imgDir);
const missing = [...artKeys].filter(k => !have.has(k));

let md = `# BUILD_STATUS\n\nGenerated by \`node tools/validate.js\` — ${new Date().toISOString().slice(0, 10)}\n\n| Day | Slides | Core min | With optional |\n|---|---|---|---|\n`;
rows.forEach(r => md += `| ${r.dt} | ${r.slides} | ${r.core} | ${r.all} |\n`);
md += `\n**Role-plays:** ${roleplays} · **Scene prompts:** ${prompts} · **Images present:** ${prompts - missing.length}/${prompts}\n\n`;
md += errors ? `## ❌ ${errors} error(s)\n` : `## ✅ All built weeks pass\n`;
if (report.length) md += "\n" + report.map(r => "- " + r).join("\n") + "\n";
fs.writeFileSync(path.join(root, "BUILD_STATUS.md"), md);
console.log(md);
process.exit(errors ? 1 : 0);
