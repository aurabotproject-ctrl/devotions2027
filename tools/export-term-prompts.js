/* Morninglight 2027 — writes one whole-term image prompt file, in the same layout as IMAGE_PROMPTS_TERM1.md.
   Usage:  node tools/export-term-prompts.js 2   →  IMAGE_PROMPTS_TERM2.md
   Uses the lesson data when the term is built (data/termT-*.js), otherwise the art plan (tools/artplans/termT.js). */
const fs = require("fs"), path = require("path"), vm = require("vm");
const root = path.join(__dirname, "..");
const T = +(process.argv[2] || 2);
const ctx = { window: {} }; vm.createContext(ctx);
const files = ["data/meta.js", "data/characters.js"].concat(fs.readdirSync(path.join(root, "data")).filter(f => /^term\d/.test(f)).sort().map(f => "data/" + f));
const planFile = `tools/artplans/term${T}.js`;
if (fs.existsSync(path.join(root, planFile))) files.push(planFile);
files.forEach(f => vm.runInContext(fs.readFileSync(path.join(root, f), "utf8"), ctx, { filename: f }));
const META = ctx.window.ML_META, SH = ctx.window.ML_SHARED_ART;
const PLAN = (ctx.window.ML_ARTPLAN || {})["Term " + T];
const CH = Object.assign({}, ctx.window.ML_CHARACTERS, PLAN ? PLAN.characters : {});
const TM = META.terms[T - 1], STYLE = META.styleBlock;
const pad = n => ("0" + n).slice(-2);
const SIZE = { landscape: "landscape 3:2 (1536×1024)", portrait: "portrait 2:3 (1024×1536)" };
const D = (ctx.window.DEVOTIONS || {})["Term " + T] || {};
const built = Object.keys(D).length === 10;

// ---- gather weeks: { n, title, passage, outline[], chars[], cover, scenes[], comic }
let weeks;
if (built) {
  weeks = TM.weeks.map(w => {
    const W = D["Week " + w.n], scenes = [];
    W.days.forEach(d => d.slides.forEach(s => [s.art].concat((s.beats || []).map(b => b.art)).forEach(a => { if (a && a.scene && !scenes.some(x => x.key === a.key)) scenes.push(a); })));
    scenes.sort((a, b) => a.key < b.key ? -1 : 1);
    return { n: w.n, title: W.lessonTitle, passage: W.passage, verse: W.memoryVerse.ref, outline: W.days.map(d => d.label.slice(0, 3) + (d.roleplay ? " 🎭 " : " ") + d.theme), chars: W.characters || [], cover: Object.assign({ label: "Week cover" }, W.coverArt), scenes, comic: W.comicArt };
  });
} else if (PLAN) weeks = PLAN.weeks;
else { console.error("Term " + T + " has neither lesson data nor an art plan."); process.exit(1); }

function prompt(a, kind) {
  let p = "Create an image.\n\n" + (a.setting ? STYLE.replace(/Ancient Middle-Eastern setting:[^.]*\./, a.setting.replace(/\.?$/, ".")) : STYLE) + "\n\nIMAGE SIZE: " + SIZE[kind === "comic" ? "portrait" : "landscape"];
  if (kind === "sheet") p += ". CHARACTER REFERENCE SHEET on a plain white background: the same character shown full-body in four views (front, three-quarter, side, back) in a neat row, plus three larger head-and-shoulder close-ups below showing calm, joyful and worried expressions. Identical face, hair, clothing and proportions in every view. Neutral standing pose, plain white background, no scenery.\nCHARACTER: " + a.desc;
  if (kind === "comic") p += ". A single comic-book page with exactly 6 panels of varied sizes and shapes, separated by clean white gutters with thin black borders, in the dynamic layout style of a manga page. Every panel is drawn artwork only, with the story flowing from top to bottom.\nPANELS: " + a.panels + "\nEach panel must leave a small calm area (sky or ground) in one corner for captions that will be added later. Leave the bottom-left corner of the page clear.";
  if (a.shot && kind !== "sheet") p += "\nSHOT: " + a.shot;
  if (a.scene && kind !== "sheet") p += "\nSCENE: " + a.scene;
  const chars = (a.chars || []).filter(c => CH[c]);
  if (kind !== "sheet" && chars.length) p += "\nCHARACTERS: " + chars.map(c => CH[c].desc.replace(/\.$/, "")).join(" | ") + ". If I have attached a character reference sheet, match that character exactly.";
  if (kind === "scene") p += "\nCOMPOSITION: Main subject kept central; leave a calm area of sky or ground in the top or bottom third (the app adds caption boxes there, and crops the image to 16:9).";
  return p;
}
const box = (head, key, fmt, a, kind) => `### ${head}\n\`${key}\` · ${fmt}${a.desc && kind !== "sheet" ? "\n\n> " + a.desc : ""}\n\n\`\`\`\n${prompt(a, kind)}\n\`\`\`\n\n`;

// characters needed this term that weren't used in earlier terms
const earlier = new Set();
for (let t = 1; t < T; t++) { const PT = ctx.window.DEVOTIONS["Term " + t] || {}; Object.keys(PT).forEach(k => (PT[k].characters || []).forEach(c => earlier.add(c))); const PP = (ctx.window.ML_ARTPLAN || {})["Term " + t]; if (PP) PP.weeks.forEach(w => (w.chars || []).forEach(c => earlier.add(c))); }
const termChars = []; weeks.forEach(w => { const all = new Set(w.chars || []); [w.cover, w.comic].concat(w.scenes).forEach(a => (a && a.chars || []).forEach(c => all.add(c))); w._all = [...all].filter(c => CH[c]); w._all.forEach(c => { if (!earlier.has(c) && !termChars.includes(c)) termChars.push(c); }); });

const nImgs = weeks.reduce((s, w) => s + 2 + w.scenes.length, 0);
let md = `# Morninglight 2027 — Image Prompts: TERM ${T}\n\n**${TM.title} (${TM.sub}) · 10 weeks · ${nImgs} cover/scene/comic images + ${termChars.length} character sheets + 2 term backdrops**\n\n`;
md += built ? `Generated from the finished Term ${T} lesson data by \`node tools/export-term-prompts.js ${T}\`, so every key and scene matches the slides exactly. (The per-week files \`IMAGE_PROMPTS_T${T}_WEEKn.md\` contain the same prompts, one week at a time, with where each image is used.)\n\n`
  : `Planned ahead of the lessons by \`node tools/export-term-prompts.js ${T}\` from \`tools/artplans/term${T}.js\`. When Term ${T} is built, the lessons will use these exact file names and scenes — so you can start making art now.\n\n`;
md += `Every prompt below is **complete and self-contained** — the full style instructions are already inside each one. Open the code box, click copy, paste into ChatGPT. Nothing else needs adding.\n\n## How to use this file\n\n1. **Do the character sheets first** (Section A). Generate each one, save it, and keep it handy. Sheets you made in earlier terms are reused — they're not repeated here.\n2. **One ChatGPT chat per week.** At the start of a week's chat, attach the sheets listed under that week's heading. The scene prompts already tell ChatGPT to match an attached sheet.\n3. **Paste prompts one at a time.** If ChatGPT drifts in style (colour creeping in, text appearing), reply: *"Redo it strictly black-and-white with no text anywhere."*\n4. **Save each image with the filename shown** (e.g. \`t${T}w01d1-a\`) and put it in \`images/t${T}/wNN/\` (characters in \`images/characters/\`, backdrops in \`images/shared/\`) — or just send them to me in order and I'll add them.\n5. **Landscape images** are 3:2 and cropped to 16:9 on screen. Comic pages are portrait and are for the comic-page viewer coming in a later build.\n6. **Reverence reminder:** God the Father is never drawn as a figure — only light. Jesus is drawn reverently (wide shots, from behind or three-quarter).\n\n---\n\n## Contents\n- [A. Character reference sheets (${termChars.length})](#a-character-reference-sheets)\n- [B. Term ${T} backdrops (2)](#b-term-${T}-backdrops)\n`;
weeks.forEach(w => md += `- Week ${w.n}: ${w.title}\n`);
md += `\n---\n\n## A. Character reference sheets\n*Generate these first, one per chat. Save as \`char-<name>\`.*\n\n`;
termChars.forEach((c, i) => md += box(`A${i + 1}. ${CH[c].name}`, CH[c].sheet, "landscape", CH[c], "sheet"));
md += `---\n\n## B. Term ${T} backdrops\n*The question, verse, application and challenge backdrops from Term 1 are reused all year.*\n\n`;
[`shared-term${T}-cover`, `shared-prayer-t${T}`].forEach((k, i) => md += box(`B${i + 1}. ${SH[k].label}`, k, "landscape", SH[k], "scene"));
weeks.forEach(w => {
  md += `---\n\n## Week ${w.n}: ${w.title}\n**${w.passage}**${w.verse ? " · Memory verse: " + w.verse : ""}\n\n`;
  if (w.outline && w.outline.length) md += w.outline.map(l => "- " + l).join("\n") + "\n\n";
  md += `**Attach these character sheets in this week's chat:** ${w._all.length ? w._all.map(c => CH[c].name).join(", ") : "none needed"}\n\n`;
  let i = 1;
  md += box(`${w.n}.${i++} — Week cover`, w.cover.key, "landscape", w.cover, "scene");
  w.scenes.forEach(a => md += box(`${w.n}.${i++} — ${a.label || a.key}`, a.key, "landscape", a, "scene"));
  if (w.comic) md += box(`${w.n}.${i++} — Comic page (week opener)`, w.comic.key, "portrait", w.comic, "comic");
});
const out = path.join(root, `IMAGE_PROMPTS_TERM${T}.md`);
fs.writeFileSync(out, md);
console.log("Wrote", path.basename(out), "—", nImgs, "images +", termChars.length, "sheets", built ? "(from lesson data)" : "(from art plan)");
