/* Morninglight 2027 — writes a ready-to-paste image prompt file for one week, straight from the lesson data.
   Usage:  node tools/export-prompts.js 1 1      (term 1, week 1)  →  IMAGE_PROMPTS_T1_WEEK1.md */
const fs = require("fs"), path = require("path"), vm = require("vm");
const root = path.join(__dirname, "..");
const T = +(process.argv[2] || 1), WK = +(process.argv[3] || 1);
const ctx = { window: {} }; vm.createContext(ctx);
["data/meta.js", "data/characters.js"].concat(fs.readdirSync(path.join(root, "data")).filter(f => /^term\d/.test(f)).sort().map(f => "data/" + f)).forEach(f => vm.runInContext(fs.readFileSync(path.join(root, f), "utf8"), ctx));
const META = ctx.window.ML_META, CH = ctx.window.ML_CHARACTERS, SH = ctx.window.ML_SHARED_ART;
const W = ctx.window.DEVOTIONS["Term " + T]["Week " + WK];
const STYLE = META.styleBlock;
const pad = n => ("0" + n).slice(-2);
const folder = key => /^t\d+w\d\d/.test(key) ? `images/t${T}/w${pad(WK)}/` : /^char-/.test(key) ? "images/characters/" : "images/shared/";
const SIZE = { landscape: "landscape 3:2 (1536×1024)", portrait: "portrait 2:3 (1024×1536)", square: "square 1:1 (1024×1024)" };

function prompt(a) {
  let p = "Create an image.\n\n" + (a.setting ? STYLE.replace(/Ancient Middle-Eastern setting:[^.]*\./, a.setting.replace(/\.?$/, ".")) : STYLE) + "\n\nIMAGE SIZE: " + SIZE[a.format || "landscape"];
  if (a.sheet) p += ". CHARACTER REFERENCE SHEET on a plain white background: the same character shown full-body in four views (front, three-quarter, side, back) in a neat row, plus three larger head-and-shoulder close-ups below showing calm, joyful and worried expressions. Identical face, hair, clothing and proportions in every view. Neutral standing pose, plain white background, no scenery.";
  if (a.panels) p += ". A single comic-book page with exactly 6 panels of varied sizes and shapes, separated by clean white gutters with thin black borders, in the dynamic layout style of a manga page. Every panel is drawn artwork only, with the story flowing from top to bottom.\nPANELS: " + a.panels + "\nEach panel must leave a small calm area (sky or ground) in one corner for captions that will be added later. Leave the bottom-left corner of the page clear.";
  if (a.shot) p += "\nSHOT: " + a.shot;
  if (a.scene) p += "\nSCENE: " + a.scene;
  if (a.chars && a.chars.length) p += "\nCHARACTERS: " + a.chars.map(c => CH[c].desc.replace(/\.$/, "")).join(" | ") + ". If I have attached a character reference sheet, match that character exactly.";
  if (!a.sheet && !a.panels) p += "\nCOMPOSITION: Main subject kept central; leave a calm area of sky or ground in the top or bottom third (the app adds caption boxes there, and crops the image to 16:9).";
  return p;
}
function entry(n, a, where) {
  return `### ${n} — ${a.label || where}\n**Save as:** \`${a.key}.png\` → put it in \`${folder(a.key)}\` · ${a.format || "landscape"}${where ? `\n**Appears:** ${where}` : ""}\n\n> ${a.desc || ""}\n\n\`\`\`\n${prompt(a)}\n\`\`\`\n`;
}

// collect week images in order of appearance, with where they're used
const order = [], uses = {};
function use(key, where) { (uses[key] = uses[key] || []).push(where); }
use(W.cover, "Term & week menu cards");
W.days.forEach(d => d.slides.forEach((s, si) => {
  const tag = `${d.label.slice(0, 3)} · slide ${si + 1} (${s.type})`;
  if (s.art && s.art.key) use(s.art.key, tag);
  (s.beats || []).forEach((b, bi) => { if (b.art && b.art.key) use(b.art.key, `${d.label.slice(0, 3)} · story beat ${bi + 1}`); });
  if (s.type === "question" || s.type === "hook" || s.type === "dig") use("shared-question", tag);
  if (s.type === "scripture" || s.type === "verse") use("shared-verse", tag);
  if (s.type === "apply") use("shared-apply", tag);
  if (s.type === "challenge") use("shared-challenge", tag);
  if (s.type === "prayer") use(`shared-prayer-t${T}`, tag);
}));
const defs = {};
[W.coverArt, W.comicArt].forEach(a => a && (defs[a.key] = a));
W.days.forEach(d => d.slides.forEach(s => { [s.art].concat((s.beats || []).map(b => b.art)).forEach(a => { if (a && a.scene) defs[a.key] = a; }); }));
Object.keys(uses).forEach(k => { if (!/^shared-/.test(k) && defs[k]) order.push(k); });
const shortUse = k => { const u = uses[k] || []; return u.length > 4 ? u.slice(0, 4).join("; ") + ` (+${u.length - 4} more)` : u.join("; "); };

let md = `# Morninglight 2027 — Image Prompts: Term ${T}, Week ${WK}\n\n**${W.lessonTitle}** · ${W.passage}\n\nGenerated from the lesson data by \`node tools/export-prompts.js ${T} ${WK}\`, so every prompt matches the slide it belongs to.\n\n`;
md += `## How to use this file\n\n1. **Make the character sheets first** (Section A) — one ChatGPT chat each. Save them; you'll attach them later.\n2. **Start one new ChatGPT chat for the week.** Attach the character sheets for this week (${(W.characters || []).map(c => CH[c].name).join(", ") || "none"}).\n3. **Paste one prompt at a time.** Every prompt is complete — the style instructions are already inside it.\n4. If colour or text creeps in, reply: *"Redo it strictly black-and-white, with no text anywhere."*\n5. **Save each image with the exact name shown** (e.g. \`t1w01d1-a.png\`) into the folder shown. The app finds it automatically — \`.png\`, \`.jpg\` or \`.webp\` all work — and the "Image to come" box disappears.\n6. God the Father is never drawn as a person — only light. If a face appears for God, regenerate.\n\n`;

md += `## Checklist\n\n| # | File name | Folder | Used on |\n|---|---|---|---|\n`;
let n = 0;
const list = [];
const sharedKeys = WK > 1 ? [] : T > 1 ? [`shared-term${T}-cover`, `shared-prayer-t${T}`].filter(k => SH[k]) : Object.keys(uses).filter(k => /^shared-/.test(k)).concat(SH[`shared-term${T}-cover`] ? [`shared-term${T}-cover`] : []);
const earlierChars = new Set();
for (let t = 1; t < T; t++) { const PT = ctx.window.DEVOTIONS["Term " + t] || {}; Object.keys(PT).forEach(k => (PT[k].characters || []).forEach(c => earlierChars.add(c))); }
for (let w = 1; w < WK; w++) { const PW = ctx.window.DEVOTIONS["Term " + T]["Week " + w]; (PW && PW.characters || []).forEach(c => earlierChars.add(c)); }
const newChars = (W.characters || []).filter(c => !earlierChars.has(c)), oldChars = (W.characters || []).filter(c => earlierChars.has(c));
newChars.forEach(c => list.push({ sec: "A", key: CH[c].sheet, where: "Reference only (attach when generating scenes)" }));
sharedKeys.forEach(k => list.push({ sec: "B", key: k, where: k === `shared-term${T}-cover` ? "Home screen term card" : shortUse(k) }));
order.forEach(k => list.push({ sec: "C", key: k, where: shortUse(k) }));
if (W.comicArt) list.push({ sec: "D", key: W.comicArt.key, where: "Comic-page viewer (later build) — optional for now" });
list.forEach(it => { n++; md += `| ${n} | \`${it.key}\` | \`${folder(it.key)}\` | ${it.where} |\n`; });
md += `\n**Total: ${list.length} images** (${newChars.length} new character sheet${newChars.length === 1 ? "" : "s"} · ${sharedKeys.length ? sharedKeys.length + " shared backdrops you make once for the whole year · " : ""}${order.length} Week ${WK} scenes${W.comicArt ? " · 1 optional comic page" : ""}).${oldChars.length ? " Reuse the sheet" + (oldChars.length > 1 ? "s" : "") + " you already made for " + oldChars.map(c => CH[c].name).join(", ") + "." : ""}${WK > 1 ? " The shared backdrops were made in Week 1 — nothing more needed." : T > 1 ? " The other shared backdrops (question, verse, apply, challenge) were made in Term 1 and are reused." : ""}\n\n---\n\n`;

let i = 0;
if (newChars.length) md += `## A. Character reference sheets\n*Make these first. They keep each character looking the same in every scene.*\n\n`;
newChars.forEach(c => { i++; md += entry("A" + i, { key: CH[c].sheet, label: CH[c].name + " — reference sheet", sheet: true, desc: CH[c].desc, chars: [] }, "") + "\n"; });
i = 0;
if (sharedKeys.length) md += `---\n\n## B. ${T > 1 ? "Term " + T + " backdrops (made once, used all term)" : "Shared backdrops (made once, used all year)"}\n*These sit faintly behind question, verse, prayer, application and challenge slides — they're atmosphere, so keep them simple.*\n\n`;
sharedKeys.forEach(k => { i++; md += entry("B" + i, Object.assign({ key: k }, SH[k]), shortUse(k)) + "\n"; });
md += `---\n\n## C. Week ${WK} scenes — in the order they appear\n\n`;
i = 0;
order.forEach(k => { i++; md += entry("C" + i, defs[k], shortUse(k)) + "\n"; });
if (W.comicArt) md += `---\n\n## D. Optional — comic page\n*For the panel-by-panel comic viewer planned for a later build. Skip for now if you like.*\n\n` + entry("D1", Object.assign({ format: "portrait" }, W.comicArt), "") + "\n";

const out = path.join(root, `IMAGE_PROMPTS_T${T}_WEEK${WK}.md`);
if (/\b(speech bubble|caption box)\b/i.test(order.map(k => defs[k].scene).join(" "))) { console.error("A scene asks for text in the image — fix the data."); process.exit(1); }
fs.writeFileSync(out, md);
console.log("Wrote", path.basename(out), "—", list.length, "images");
