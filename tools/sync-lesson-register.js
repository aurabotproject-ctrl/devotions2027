/* Copies the Morninglight 2027 lesson plans into the classroom Lesson Register app (../LessonPlans)
   as its own subject, "Devotions 2027". Re-run whenever new weeks are built:
       node tools/sync-lesson-register.js
   - Backs up LessonPlans/data.js first (data.js.bak-devotions2027-<timestamp>)
   - Replaces ONLY the "devotions2027" subject; every other subject is left exactly as it was
   - Adds the subject button to LessonPlans/index.html once */
const fs = require("fs"), path = require("path"), vm = require("vm");
const root = path.join(__dirname, "..");
const reg = process.argv[2] || path.join(root, "..", "LessonPlans");
const KEY = "devotions2027", NAME = "Devotions 2027", CODE = "D7";

// --- load the app's data + plan generator in a tiny sandbox ---
const noop = () => {};
const ctx = { console, Date, Math, JSON, String, Array, Object, RegExp, Blob: function () {}, URL: {},
  localStorage: { getItem: () => null, setItem: noop },
  document: { createElement: () => ({}), head: { appendChild: noop }, addEventListener: noop, body: {} } };
ctx.window = ctx; vm.createContext(ctx);
["data/meta.js", "data/characters.js"].concat(fs.readdirSync(path.join(root, "data")).filter(f => /^term\d/.test(f)).sort().map(f => "data/" + f), ["js/app.js", "js/lessonplan.js"]).forEach(f => {
  const p = path.join(root, f); if (fs.existsSync(p)) vm.runInContext(fs.readFileSync(p, "utf8"), ctx, { filename: f });
});
const ML = ctx.ML, LP = ML.LessonPlan;
const strip = html => html.replace(/^<section class="lp-doc[^"]*">/, "").replace(/<\/section>$/, "")
  .replace(/<div class="lp-eyebrow">[\s\S]*?<\/div>/, "").replace(/<h2 class="lp-title">[\s\S]*?<\/h2>/, "");

const subject = { label: "Term", children: {} };
let count = 0;
ML.meta.terms.forEach(t => {
  const weeks = {};
  t.weeks.forEach(w => {
    if (!ML.isBuilt(t.id, w.n)) return;
    const W = ML.week(t.id, w.n), days = {};
    days["Week Overview"] = { content: strip(LP.weekOverview(t.id, w.n)) };
    W.days.forEach((d, i) => { days[d.label + ": " + d.theme] = { content: strip(LP.dayDoc(t.id, w.n, i + 1)) }; count++; });
    weeks["Week " + w.n + ": " + W.lessonTitle] = { label: "Day", children: days };
  });
  if (Object.keys(weeks).length) subject.children[t.name] = { label: "Week", children: weeks };
});

// --- write into the Lesson Register ---
const dataPath = path.join(reg, "data.js"), idxPath = path.join(reg, "index.html");
if (!fs.existsSync(dataPath)) { console.error("Can't find", dataPath); process.exit(1); }
const src = fs.readFileSync(dataPath, "utf8");
const rctx = { window: {} }; vm.createContext(rctx); vm.runInContext(src, rctx);
const DATA = rctx.window.LESSON_DATA;
const stamp = new Date().toISOString().replace(/[-:T]/g, "").slice(0, 14);
fs.writeFileSync(dataPath + ".bak-devotions2027-" + stamp, src);
DATA[KEY] = subject;
fs.writeFileSync(dataPath, "window.LESSON_DATA = " + JSON.stringify(DATA) + ";");

let idx = fs.readFileSync(idxPath, "utf8");
if (!idx.includes('key:"' + KEY + '"')) {
  idx = idx.replace(/(\{ key:"devotions",[^\n]*\n)/, `$1    { key:"${KEY}", code:"${CODE}", name:"${NAME}" },\n`);
  fs.writeFileSync(idxPath, idx);
  console.log("Added the Devotions 2027 subject to index.html");
}
console.log(`Synced ${count} lesson plans into ${path.relative(process.cwd(), dataPath)} (backup: data.js.bak-devotions2027-${stamp})`);
