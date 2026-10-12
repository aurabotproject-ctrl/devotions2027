# Morninglight 2027 — Teacher Quick-Start

**Open it:** double-click `index.html`. It works offline — no internet, no install. Best in Chrome or Edge, full-screen on the classroom TV.

## Running a lesson
Home → **Term 1** → pick a week (all 10 are built) → pick a day → **▶ Start**.

| Key | What it does |
|---|---|
| → / Space / click | Next step or slide |
| ← | Back |
| **N** | Teacher notes — the full read-aloud story, hints, follow-up questions |
| **G** | Slide grid + **Short on time** (skips stretch and skippable slides) |
| **F** | Fullscreen · **B** blackout · **T** pacing timer · **S** sound · **?** help |
| Esc | Close / exit |

Move the mouse to show the on-screen buttons. Touch screens: swipe left/right.

- **Role-plays (Mon & Wed):** press → (or ▶ Start the role-play) to open the full-screen script. **Pick volunteers** spins through your class list (add it in ⚙ Settings — it stays on this computer only).
- **Prayer:** each phase has a quiet timer ring. **🗣 Pray it aloud as a class** shows a repeat-after-me line.
- **Lesson plans:** the **📋 Lesson plans** button (home screen and top bar) opens a reader for every built week. Read any day on screen, then **Print** or **Download** (.html, or a Word .doc) for *this lesson*, *this week* (overview + 4 plans) or the *whole term*. Plans are generated from the slides, so they always match what's on screen.
- **Thursday challenge:** print the take-home cards from the challenge slide.

## Adding the ChatGPT images
Open the week’s prompt file (`IMAGE_PROMPTS_T1_WEEK1.md` … `IMAGE_PROMPTS_T1_WEEK10.md`), paste each prompt into ChatGPT, and save the image with the **exact file name** shown into the folder shown (e.g. `images/t1/w01/t1w01d1-a.png`). `.png`, `.jpg` or `.webp` all work. Reload the app and the “Image to come” box is replaced by the picture (with a slow cinematic zoom).

To hide the “Image to come” labels: ⚙ Settings → untick *Show ‘image to come’ labels*.

## For the builder
- Lesson content lives in `data/term1.js` (one object per week). Build rules: `morninglight-2027-build-recipe.md`.
- `node tools/validate.js` checks timing, role-plays, questions and prayers, and writes `BUILD_STATUS.md`.
- `node tools/export-prompts.js 1 2` writes the image-prompt file for Term 1 Week 2 once that week is built.
- `node tools/sync-lesson-register.js` copies the lesson plans into the classroom Lesson Register (`../LessonPlans`) as the **Devotions 2027** subject. Re-run it after each new week is built (it backs up `data.js` first and only touches Devotions 2027).
