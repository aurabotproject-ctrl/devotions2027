/* Morninglight 2027 — TERM 1 data. Week 1 built; Weeks 2–10 to come.
   Scripture: CEV (verified against the published CEV text, Oct 2026). */
window.DEVOTIONS = window.DEVOTIONS || {};
window.DEVOTIONS["Term 1"] = Object.assign(window.DEVOTIONS["Term 1"] || {}, {

"Week 1": {
  lessonTitle: "In the Beginning",
  passage: "Genesis 1:1–2:3; 2:15–25; Psalm 19:1",
  bigIdea: "God made everything by his word, it was good, and he made people to know him.",
  godIs: "Creator",
  memoryVerse: { ref: "Genesis 1:1", text: "In the beginning God created the heavens and the earth.", version: "CEV",
    chunks: ["In the beginning", "God created", "the heavens", "and the earth."],
    actions: ["Hands start low, rise slowly like a sunrise", "Point up, then sweep arms wide", "Wiggle fingers high like stars", "Hands make a big round ball"] },
  prayerFocus: { skill: "Wow", tip: "A ‘Wow’ prayer is praise: telling God what is amazing about HIM." },
  mood: "dawn",
  cover: "t1w01-cover",
  characters: ["adam", "eve"],
  coverArt: { key: "t1w01-cover", label: "Week cover", desc: "A brand-new world at sunrise: river valley, mountains, the sun rising with stars and a crescent moon still in the sky.", shot: "epic wide establishing shot",
    scene: "A vast newly-made world: a lush river valley and mountains below, a brilliant sun rising behind them, stars and a crescent moon still visible in the upper sky, great rays of light fanning out across everything. No people." },
  comicArt: { key: "t1w01-comic", label: "Comic page (week opener — for the comic-page viewer, coming in a later build)", format: "portrait", desc: "Six-panel comic page of the six days of creation.",
    panels: "Six panels telling the six days of creation. Panel 1 (wide, top): darkness over deep water with one burst of light. Panel 2 (small): the sky stretched out like a great dome of clouds. Panel 3 (wide): land and sea separating, first trees sprouting. Panel 4 (tall): sun, moon and stars blazing. Panel 5 (wide): birds, fish and animals filling the world. Panel 6 (wide, bottom): Adam and Eve in silhouette on a hill at sunrise looking at it all.", chars: ["adam", "eve"] },

  days: [

  /* ======================= MONDAY ======================= */
  { label: "Monday", theme: "Let there be…", roleplay: true, mood: "dawn",
    learningIntentions: [
      "We are learning that God made everything simply by speaking.",
      "We are learning what Genesis 1 shows us about what God is like.",
      "I can retell what God made on Days 1, 2 and 3."
    ],
    assessment: "Listen for students linking ‘God said… and that’s what happened’ to God’s power, and naming at least one thing from each of Days 1–3.",
    resources: ["Screen", "Optional: a torch for the ‘light’ group", "Optional: blue fabric for the sea, green paper leaves for the plants"],
    whereToNext: "Tomorrow: Days 4–6 — sun, moon, stars, creatures, and people made to be like God.",
    slides: [
      { type: "title", id: "m-title", title: "Let there be…", minutes: 0.5, kicker: "Term 1 · Week 1", sub: "In the Beginning",
        art: { key: "t1w01-cover" },
        notes: "Welcome to the very first devotion of 2027! Let the title animate, then say: ‘This year we’re asking one big question: Who is God? And we’re starting at the very beginning.’" },

      { type: "hook", id: "m-hook", title: "No light at all", minutes: 1,
        text: "Imagine a world with no light at all. No sun. No stars. No torch. Not even a phone screen.",
        ask: "What’s the first thing you would miss?",
        hint: "Take 3–4 quick answers. You’re aiming for: you couldn’t see, nothing could grow, it would feel scary and empty. Then land it: ‘That is exactly how the Bible begins — in darkness. Let’s see what God does about it.’ If there’s silence, try: ‘What would breakfast be like?’",
        notes: "Optional: switch the lights off for 5 seconds as students imagine it." },

      { type: "scripture", id: "m-scr", title: "Genesis 1:1–5", minutes: 1, ref: "Genesis 1:1–5", version: "CEV",
        lines: [
          "In the beginning God created the heavens and the earth.",
          "The earth was barren, with no form of life; it was under a roaring ocean covered with darkness. But the Spirit of God was moving over the water.",
          "God said, “I command light to shine!” And light started shining.",
          "God looked at the light and saw that it was good. He separated light from darkness and named the light “Day” and the darkness “Night.”",
          "Evening came, then morning—that was the first day."
        ],
        emphasis: ["God created", "God said", "light started shining", "good"],
        notes: "Read each line as it appears (click to reveal). Pause after ‘I command light to shine!’ — let it land." },

      { type: "story", id: "m-story", title: "Days 1–3: God speaks", minutes: 3, transition: "page",
        beats: [
          { text: "Before anything at all… there was God.", caption: "The earth was empty — a roaring ocean covered with darkness.",
            art: { key: "t1w01d1-a", label: "Mon · story beats 1–2", desc: "Total darkness over a vast ocean; one shaft of brilliant light bursts through the middle.", shot: "wide establishing shot, from far above", motion: "kenburns-in",
              scene: "Total darkness over a vast formless ocean. At the exact centre a single shaft of brilliant white light bursts upward and outward through the black, with radiating rays and soft grey mist rolling across the water. No land, no people." } },
          { text: "God said, “I command light to shine!”", caption: "And light started shining. Day 1.", shout: true },
          { text: "Day 2: God stretched out the sky.", caption: "A great dome between the waters above and below — and God named it ‘Sky’.",
            art: { key: "t1w01d1-c", label: "Mon · story beat 3 (Day 2: the sky)", desc: "A vast sky like a great dome of rolling clouds over a dark ocean; light pouring through the clouds.", shot: "wide, low-angle looking up", motion: "kenburns-up",
              scene: "The second day: an immense sky stretched out like a great dome of towering, rolling clouds above a dark, endless ocean. Light pours down through a gap in the clouds in long rays. No land, no people." } },
          { text: "Day 3: Land! Sea! Plants!", caption: "The waters gathered, dry ground rose, and the earth burst into green.",
            art: { key: "t1w01d1-b", label: "Mon · story beat 4 + role-play card (Day 3)", desc: "Waters gathering into seas as hills rise; the first plants and fruit trees sprouting; mist over the sea.", shot: "wide landscape", motion: "kenburns-right",
              scene: "The third day: waters gathering into seas while dry land rises, rolling hills and the very first green plants and fruit trees sprouting, mist drifting over a calm sea, soft light from above. No people." } },
          { text: "God said… and it happened.", caption: "Nobody helped. Nothing to start with. Just his word." }
        ],
        narration: "Before there was a Monday… before there was a morning… before there was anything at all — there was God. No sun. No sky. No ground under your feet. The Bible says the earth was empty, with no form of life, under a roaring ocean covered with darkness. Thick, black darkness. And yet God was there. The Spirit of God was moving over the water, like a bird hovering over its nest.\n\nThen God spoke. Not a grunt of effort. Not a struggle. Just words: ‘I command light to shine!’ And light started shining. Imagine it — the very first light ever, flooding across that dark ocean. God looked at the light and saw that it was good. He named the light ‘Day’ and the darkness ‘Night’. Evening came, then morning — that was the first day.\n\nOn the second day God spoke again. He commanded a great dome to separate the water above from the water below, and he named it ‘Sky’. Look up at the sky after school today. That huge ceiling over your head was God’s idea. It is there because he said so.\n\nOn the third day God spoke again: ‘I command the water under the sky to come together in one place, so there will be dry ground.’ The waters rushed together and the land rose up out of them — hills, valleys, beaches and mountains. Every beach from Cape Reinga to Bluff started here. God named the dry ground ‘Land’ and the water ‘Ocean’. Then he commanded the earth to grow plants — fruit trees and grain and every kind of green, growing thing. Picture the very first tree pushing up out of the ground. And again the Bible says it: God looked at what he had done, and it was good.\n\nDid you notice the pattern? God said… and it happened. God said… and it happened. Nobody helped him. There was nothing there to start with. God didn’t need tools, or a plan drawn on paper, or a million years of trying. He spoke, and creation obeyed.\n\nThat tells us something huge about God, and we haven’t even finished the first page. God is powerful. God is good. And everything that exists belongs to him — including you.",
        notes: "Click once per beat. Read the narration (shown here) at a steady pace — about 3 minutes. Imagined detail: ‘like a bird hovering over its nest’ is a common way of picturing the Hebrew word for ‘moving’; the beach line is a local touch, not in the text." },

      { type: "question", id: "m-q1", title: "How does God make things?", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "In Genesis 1, HOW does God make things?",
        options: ["He builds them with his hands", "He speaks — and it happens", "The angels help him", "He mixes things that were already there"], answer: 1,
        hint: "Answer: B. Ask students to prove it from the text: ‘God said, “I command light to shine!” And light started shining.’ Follow-up: ‘Can you or I make anything just by speaking?’ Follow-up 2: ‘So what does that tell us about God compared to us?’ If silent: re-read verse 3 slowly and ask them to spot the two things that happen." },

      { type: "question", id: "m-q2", title: "Why the repeating?", minutes: 1.5, level: "think", mode: "pair", seconds: 45, skippable: true,
        text: "Genesis keeps repeating: “God said… and that’s what happened.” Why do you think it says it over and over?",
        hint: "Good answers: so we remember it; to show God is powerful; nothing can say no to God; God keeps his word — what he says always happens. Follow-up: ‘If God’s words always happen, what does that mean for the promises he makes us?’ Follow-up 2: ‘Is there anything God can’t do?’ If silent: ‘When your coach or parent repeats something, why do they do it?’",
        notes: "Skip this one if you’re short on time — the role-play makes the same point." },

      { type: "roleplay", id: "m-rp", title: "Let there be…", minutes: 5, ref: "Genesis 1:1–13",
        art: { key: "t1w01d1-b" },
        imagined: "The creation ‘characters’ (Light, Sky, Sea, Land) are imagined for drama. God’s words are quoted from Genesis 1 (CEV).",
        actions: ["Everyone: start crouched low and silent", "Everyone: make a deep ocean roar when cued", "Everyone: grow like seedlings on Day 3"],
        props: ["Optional: a torch for Light", "Optional: blue fabric for Sea", "Optional: green paper leaves"],
        characters: [
          { name: "Narrator", color: "#F2C77B", desc: "Tells the story (a confident reader)" },
          { name: "Voice of God", voice: true, desc: "God’s words from Genesis — read by the teacher or a strong reader" },
          { name: "Light", color: "#FFE27A", desc: "A small group (2–4) who burst up shining" },
          { name: "Sky", color: "#7BA7D9", desc: "A small group who stretch high and wide" },
          { name: "Sea", color: "#4FC3D9", desc: "A small group who wave and gather together" },
          { name: "Land", color: "#8BC34A", desc: "A small group who rise up out of the water" },
          { name: "Everyone", color: "#FFFFFF", desc: "The rest of the class — sound effects and big lines" }
        ],
        lines: [
          { character: "Narrator", text: "Everyone crouches low, still and silent. The world is dark and empty.", direction: true },
          { character: "Narrator", text: "In the beginning God created the heavens and the earth." },
          { character: "Narrator", text: "The earth was empty — under a roaring ocean covered with darkness." },
          { character: "Everyone", text: "Whoooooooosh…", action: "a deep, rolling ocean roar" },
          { character: "Narrator", text: "But the Spirit of God was moving over the water." },
          { character: "Narrator", text: "Everyone goes completely silent…", direction: true },
          { character: "Voice of God", text: "I command light to shine!" },
          { character: "Light", text: "Here we are — SHINING!", action: "jump up, arms burst open" },
          { character: "Everyone", text: "Ooooooh!", action: "shield your eyes" },
          { character: "Narrator", text: "God looked at the light and saw that it was good." },
          { character: "Everyone", text: "It was GOOD!" },
          { character: "Narrator", text: "Evening came, then morning — that was the first day." },
          { pause: "Freeze! Light — what is it like being the very first thing God spoke into the dark?", seconds: 20 },
          { character: "Voice of God", text: "I command a dome to separate the water above it from the water below it." },
          { character: "Sky", text: "I’m the sky — big, wide and WAY up high!", action: "stretch arms high and wide" },
          { character: "Narrator", text: "God named it ‘Sky’. Evening came, then morning — that was the second day." },
          { character: "Voice of God", text: "I command the water under the sky to come together in one place, so there will be dry ground." },
          { character: "Sea", text: "Splish! Splash! Everybody in together!", action: "wave arms and rush into one group" },
          { character: "Land", text: "And here I come — rising out of the water!", action: "rise slowly from a crouch" },
          { character: "Sea", text: "Oi, Land — nice hills!" },
          { character: "Land", text: "Cheers, Sea. Nice waves." },
          { character: "Narrator", text: "God named the dry ground ‘Land’ and the water ‘Ocean’. Then God commanded the earth to grow all kinds of plants." },
          { character: "Everyone", text: "Grow… grow… GROW!", action: "rise from the floor like seedlings, arms opening like leaves" },
          { character: "Land", text: "Look at me now — I’m covered in green!" },
          { character: "Narrator", text: "God looked at what he had done, and it was good." },
          { character: "Everyone", text: "It was GOOD!" },
          { character: "Narrator", text: "Evening came, then morning — that was the third day." },
          { pause: "Freeze! Who did ALL the speaking in this scene? And who did all the obeying?", seconds: 15 },
          { character: "Everyone", text: "God said… and it HAPPENED!" }
        ],
        debrief: [
          { level: "think", text: "What did you notice about God in that scene?", hint: "Listen for: he only had to speak once; nothing argued with him; he called everything good; he was in charge." },
          { level: "look", text: "How many tries did God need before something worked?", hint: "None — one word, every time. Contrast with how WE make things (drafts, mistakes, rubbing out)." }
        ],
        notes: "Cast quickly (use Pick volunteers). Groups can be 2–4 students each. Teacher reads Voice of God unless you have a confident reader. Keep it moving — about 4 minutes once cast." },

      { type: "question", id: "m-q3", title: "Light into darkness", minutes: 1, level: "dig", mode: "discuss", seconds: 40,
        text: "God didn’t leave the world dark and empty — he spoke light into it. When do people today feel ‘dark and empty’ inside? What might God want to do about that?",
        hint: "Expect: when sad, lonely, scared, when someone dies, when parents argue. Gently connect: the same God who spoke light into the dark still brings light — through his presence, his words, and people who care. Follow-up: ‘Where else in the Bible is Jesus called light?’ (John 8:12). Follow-up 2: ‘How could you be a bit of light for someone this week?’ If silent: share a short, safe example of your own." },

      { type: "apply", id: "m-apply", title: "Head · Heart · Hands", minutes: 1,
        head: "God is so powerful he made everything just by speaking.",
        heart: "Wow, God — you made all of this, and it’s good!",
        hands: "On the way home today, spot one thing God made on Days 1–3 — light, sky, water, land or plants — and say ‘Wow, God’ in your head.",
        settings: ["home", "outside", "walk to school"],
        notes: "Read the three cards as they reveal. Ask two students what they’ll look for." },

      { type: "scene", id: "m-scene", title: "And it was good", minutes: 0.5, optional: true,
        art: { key: "t1w01d1-b" },
        boxes: [
          { text: "Day 1: light.  Day 2: sky.  Day 3: land, sea and plants.", pos: "tl", style: "caption" },
          { text: "And God looked at what he had done — and it was GOOD.", pos: "br", style: "caption" }
        ],
        notes: "Stretch slide: a quick visual recap before the verse peek." },

      { type: "verse", id: "m-verse", title: "Memory verse peek", minutes: 1, optional: true, activity: "echo",
        notes: "Teacher says each chunk; class echoes it back. Do it twice — the second time in a whisper, then a shout." },

      { type: "prayer", id: "m-pray", title: "Wow prayer (silent)", minutes: 3, mood: "calm", style: "silent",
        tip: "A ‘Wow’ prayer is praise: you tell God what is amazing about HIM. You’re not asking for anything — it’s like cheering for God.",
        opening: "Get comfortable. Close your eyes, or look at the floor. Take one slow breath in… and out. God is here, and he is listening.",
        phases: [
          { name: "Wow", lead: "Picture the very first light shining into the dark.",
            prompts: ["God, you made light just by speaking — you are powerful!", "God, you made the sky and the oceans — you are huge!"],
            starter: "Wow, God, you are…", seconds: 35, aloud: "Wow, God! You spoke — and the light shone!" },
          { name: "Sorry", lead: "God made a good world. Sometimes we don’t treat it — or each other — as good.",
            prompts: ["Sorry for grumbling instead of noticing your good gifts.", "Sorry for wasting or wrecking things you made."],
            starter: "God, I’m sorry for…", seconds: 30, aloud: "God, I’m sorry for the times I don’t notice your good gifts." },
          { name: "Thanks", lead: "Picture Days 1 to 3: light, sky, sea, land, plants.",
            prompts: ["Thank you for sunlight in the morning.", "Thank you for the beach, the hills and the trees."],
            starter: "Thank you, God, for…", seconds: 35, aloud: "Thank you, God, for light, and sky, and sea, and every growing thing." },
          { name: "Please", lead: "Ask God to help you see his world with new eyes this week.",
            prompts: ["Please help me notice the things you made.", "Please help me look after your world."],
            starter: "Please, God, help…", seconds: 35, aloud: "Please, God, help me notice your world this week." }
        ],
        closing: "Let’s finish together. Everyone: Amen!",
        notes: "Model one silent sentence first by saying it aloud: ‘Wow, God, you made light just by talking!’ Reassure: short and simple is great. Advance each phase when the ring finishes." }
    ] },

  /* ======================= TUESDAY ======================= */
  { label: "Tuesday", theme: "Made Like God", roleplay: false, mood: "night",
    learningIntentions: [
      "We are learning what God made on Days 4, 5 and 6.",
      "We are learning what it means that people are made ‘to be like’ God.",
      "I can explain one way people are different from the rest of creation."
    ],
    assessment: "Listen for students explaining that only people were made ‘like God’ — to know him, love, create and care for his world — and linking that to how we treat others.",
    resources: ["Screen", "Optional: mini-whiteboards"],
    whereToNext: "Tomorrow: we zoom into the Garden of Eden — Adam names the animals, and God says something is ‘not good’.",
    slides: [
      { type: "title", id: "t-title", title: "Made Like God", minutes: 0.5, kicker: "Term 1 · Week 1", sub: "In the Beginning",
        art: { key: "t1w01d2-a" }, notes: "Let the splash play, then go straight into the recap." },

      { type: "hook", id: "t-recap", title: "Recap: Days 1–3", minutes: 1, style: "recap",
        text: "Yesterday God spoke… and things happened!",
        ask: "Show me with actions: Day 1? Day 2? Day 3?",
        hint: "Day 1 — light (burst hands open). Day 2 — sky (stretch arms up and wide). Day 3 — land, sea and plants (rise up, wave arms, grow like a seedling). Praise the best actions. Then: ‘Today the world is ready… but it’s empty. Let’s see what God fills it with.’" },

      { type: "scripture", id: "t-scr", title: "Genesis 1:26–27, 31", minutes: 1, ref: "Genesis 1:26–27, 31", version: "CEV",
        lines: [
          "God said, “Now we will make humans, and they will be like us. We will let them rule the fish, the birds, and all other living creatures.”",
          "So God created humans to be like himself; he made men and women.",
          "God looked at what he had done. All of it was very good!"
        ],
        emphasis: ["like us", "like himself", "very good"],
        notes: "Read with weight on ‘like us’ and ‘very good’. Point out: this is the only time God says ‘very good’." },

      { type: "story", id: "t-story", title: "Days 4–6: God fills the world", minutes: 3.5, transition: "page", mood: "night",
        beats: [
          { text: "Day 4: Sun, moon… and the stars.", caption: "Lights to rule the day and the night. “He also made the stars.”",
            art: { key: "t1w01d2-a", label: "Tue · title + story beat 1 (Day 4)", desc: "Blazing sun, glowing moon and countless stars above dark hills and a still lake reflecting the light.", shot: "wide, low-angle looking up", motion: "kenburns-up",
              scene: "The fourth day: a blazing sun, a glowing moon and countless stars set in the sky above silhouetted hills and a still lake, rays radiating outward and the lake reflecting the light." } },
          { text: "Day 5: The sea splashes with life. The sky fills with wings.", caption: "Fish, giant sea creatures, and every kind of bird.",
            art: { key: "t1w01d2-c", label: "Tue · story beat 2 (Day 5)", desc: "A huge whale breaching out of the ocean, fish leaping, flocks of birds and a great albatross filling the sky.", shot: "wide, dynamic, low over the water", motion: "kenburns-left",
              scene: "The fifth day: a giant whale breaching out of a sparkling ocean in a huge splash, schools of fish leaping, dolphins in the waves, and the sky above filled with flocks of birds and one great albatross with enormous outstretched wings. Joyful, bursting with new life. No people." } },
          { text: "Day 6: Animals of every kind!", caption: "Tame animals, wild animals, reptiles… and God saw that it was good." },
          { text: "Then God did something different.", caption: "“Now we will make humans, and they will be like us.”", shout: true,
            art: { key: "t1w01d2-b", label: "Tue · story beats 4–5 + stretch scene (made in God’s image)", desc: "Adam and Eve from behind on a hilltop at dawn, looking over a valley full of animals, birds and a river.", shot: "wide, from behind", motion: "kenburns-in", chars: ["adam", "eve"],
              scene: "Dawn on a hilltop. Adam and Eve stand side by side seen from behind in silhouette, looking out over a valley full of life: birds filling the sky, fish leaping in a river, deer, lions and elephants gathering peacefully below." } },
          { text: "All of it was VERY good!", caption: "Including the person next to you. Including you." }
        ],
        narration: "Yesterday we watched God fill the dark with light, stretch out the sky, and lift the land out of the sea. Now the world is ready — but it’s empty. So God starts to fill it.\n\nOn the fourth day God said, ‘I command lights to appear in the sky.’ And there they were: the sun, blazing and bright, to rule the day, and the moon, cool and silver, to rule the night. And then, almost like a small detail, the Bible says: ‘He also made the stars.’ Scientists think there are more stars than grains of sand on all the beaches on earth — and Genesis mentions them in five words. That’s how big God is.\n\nOn the fifth day God said, ‘I command the ocean to be full of living creatures, and I command birds to fly above the earth.’ Suddenly the sea was splashing with life — tiny silver fish, octopus, dolphins, and what the Bible calls ‘giant sea monsters’. Think of whales bigger than a bus. The sky filled with wings too: kererū, hawks, sparrows, and albatross with wings wider than a car. God blessed them and told them to spread out everywhere.\n\nOn the sixth day God said, ‘I command the earth to give life to all kinds of tame animals, wild animals, and reptiles.’ Cows and lions, sheep and lizards, beetles and elephants. Each one designed. Each one different. And God looked at what he had done, and it was good.\n\nBut God wasn’t finished. Listen to how the words change. Up till now God has said, ‘I command…’ But now he says, ‘Now we will make humans, and they will be like us.’ Nothing else was made like that. Not the sun. Not the whales. Not the lions. Only people. So God created humans to be like himself; he made men and women.\n\nWhat does it mean to be made like God? It doesn’t mean we look like God, or that we are God. It means we are made to reflect him — like a mirror catching sunlight. We can think and create, love and choose, and care for the world. And most of all, we are made to know God and talk with him. Your dog can’t pray. A dolphin can’t say thank you to its Maker. You can.\n\nGod gave people a job too: to rule over the fish, the birds and the animals — not to wreck them, but to look after them for him, like a ranger looks after a national park.\n\nThen God looked at everything — the stars, the sea, the kererū, the lions, and the people. And this time the Bible doesn’t just say ‘good’. It says: ‘All of it was very good!’ That includes the person sitting next to you. And it includes you.",
        notes: "Click once per beat; about 3½ minutes of narration. Imagined/added details: the star comparison is a popular science comparison, and the NZ birds are a local touch — the text says ‘every kind of bird’." },

      { type: "dig", id: "t-dig", title: "Spot the difference", minutes: 2,
        prompt: "Look closely at Genesis 1. What’s different about how God makes PEOPLE?",
        columns: ["Everything else", "People"],
        items: [
          { left: "“I command the earth to give life…”", right: "“Now we will make humans…”" },
          { left: "Made ‘all kinds’", right: "Made “to be like himself”" },
          { left: "God saw that it was good", right: "“All of it was VERY good!”" },
          { left: "Animals are looked after", right: "People are given the job of looking after" }
        ],
        reveal: "People are the only part of creation made to be like God — made to know him and care for his world.",
        notes: "Reveal one row at a time. Before each reveal, ask: ‘What do you think goes on the People side?’" },

      { type: "question", id: "t-q1", title: "Which day?", minutes: 1, level: "look", mode: "vote", seconds: 20,
        text: "On which day did God make people? Point to a corner of the room!",
        options: ["Day 3", "Day 5", "Day 6", "Day 7"], answer: 2,
        hint: "Answer: Day 6, along with the land animals. Corners: front-left = A, front-right = B, back-left = C, back-right = D. Follow-up: ‘What else was made on Day 6?’ Follow-up 2: ‘Why might it matter that people came LAST — once everything was ready?’ If silent: re-read Genesis 1:31." },

      { type: "question", id: "t-q2", title: "Made like God", minutes: 1.5, level: "think", mode: "pair", seconds: 45,
        text: "God made people “to be like himself.” What can people do that shows we’re made like God?",
        hint: "Good answers: think, imagine and create (art, music, inventions); love and be kind; choose right from wrong; look after the world; talk with God (pray). Follow-up: ‘Which of these can animals NOT do?’ Follow-up 2: ‘What happens when people use these gifts badly?’ (a hint towards next week). If silent: ‘What did you make or create this week?’" },

      { type: "question", id: "t-q3", title: "Even them?", minutes: 1.5, level: "dig", mode: "discuss", seconds: 45, skippable: true,
        text: "If EVERY person is made to be like God — does that include people who are mean to us? Why does that matter?",
        hint: "Yes — every person. It doesn’t make meanness okay, but it means no one is worthless, and no one is ‘rubbish’. Follow-up: ‘How might this change what we say about someone behind their back?’ Follow-up 2: ‘Does it change how you think about yourself on a bad day?’ If silent: ‘Is there anyone God didn’t make?’ Handle any personal stories gently; follow up privately if needed." },

      { type: "apply", id: "t-apply", title: "Head · Heart · Hands", minutes: 2,
        head: "God made people — including me — to be like him and to know him.",
        heart: "God, thank you that I’m not an accident. You made me on purpose.",
        hands: "This week, when you see someone left out or put down — at school, at sport or online — remember they’re made like God, and say one kind thing to them.",
        settings: ["school", "sport", "online"],
        notes: "Ask: ‘Where might you see someone put down this week?’ Get one or two real settings named." },

      { type: "scene", id: "t-scene", title: "Very good", minutes: 1, optional: true,
        art: { key: "t1w01d2-b" },
        boxes: [
          { text: "Only people were made to be like God.", pos: "tl", style: "caption" },
          { text: "All of it was VERY good!", pos: "br", style: "shout" }
        ],
        notes: "Stretch slide. Ask: ‘What do you think Adam and Eve were feeling, looking at all that?’" },

      { type: "verse", id: "t-verse", title: "Build the verse", minutes: 1, activity: "build",
        notes: "Each click adds a chunk. Class reads the growing verse together each time." },

      { type: "prayer", id: "t-pray", title: "Wow prayer (one sentence aloud)", minutes: 3, mood: "calm", style: "out-loud",
        tip: "Wow prayers can start with “God, you are…” and add one true thing about him. Today, anyone who wants to can say ONE sentence out loud. Short is perfect.",
        opening: "Let’s get still. Breathe in slowly… and out. Today we’ll pray out loud, one sentence each — only if you want to. Silent is fine too.",
        phases: [
          { name: "Wow", lead: "Think about the stars, the whales, and people made like God.",
            prompts: ["God, you made the stars — you are so big!", "God, you made people like you — you are kind and good!"],
            starter: "God, you are…", seconds: 40, aloud: "God, you made the stars — and you made me. Wow!" },
          { name: "Sorry", lead: "Sometimes we treat people — or ourselves — like we don’t matter.",
            prompts: ["Sorry for putting down someone you made.", "Sorry for not liking how you made me."],
            starter: "God, I’m sorry for…", seconds: 30, aloud: "God, I’m sorry for the times I’ve treated someone like they don’t matter." },
          { name: "Thanks", lead: "Thank God for the people and creatures he made.",
            prompts: ["Thank you that you made me on purpose.", "Thank you for animals — whales, kererū, dogs and cats!"],
            starter: "Thank you, God, for…", seconds: 35, aloud: "Thank you, God, that you made me on purpose." },
          { name: "Please", lead: "Ask God to help us see people the way he does.",
            prompts: ["Please help me treat everyone as someone you made.", "Please help anyone who feels like they don’t matter."],
            starter: "Please, God, help…", seconds: 35, aloud: "Please, God, help me treat everyone as someone you made." }
        ],
        closing: "Thank you for praying out loud! Let’s finish together: Amen!",
        notes: "Go first with a one-sentence example. Let 3–5 volunteers pray per phase; don’t force anyone." }
    ] },

  /* ======================= WEDNESDAY ======================= */
  { label: "Wednesday", theme: "The Garden", roleplay: true, mood: "dawn",
    learningIntentions: [
      "We are learning about the Garden of Eden and the work God gave Adam.",
      "We are learning that God made people for friendship — with him and with each other.",
      "I can explain why God said ‘it isn’t good for the man to live alone’."
    ],
    assessment: "Listen for students explaining that Adam needed a partner ‘like him’, and linking God’s design for friendship to including others.",
    resources: ["Screen", "Optional: animal masks or ears for the role-play"],
    whereToNext: "Tomorrow: Day 7 — God rests — and a shepherd’s song about the sky. Plus this week’s challenge.",
    slides: [
      { type: "title", id: "w-title", title: "The Garden", minutes: 0.5, kicker: "Term 1 · Week 1", sub: "In the Beginning",
        art: { key: "t1w01d3-c" }, notes: "Let the splash play." },

      { type: "hook", id: "w-hook", title: "All by yourself", minutes: 1,
        text: "Imagine the most amazing place you’ve ever been — the beach, a theme park, the snow…",
        ask: "Now imagine being there completely by yourself. What would be missing?",
        hint: "Take 3–4 answers: someone to share it with, someone to talk to, someone to say ‘Look at that!’ to. Land it: ‘Today, in the most perfect garden ever, God says something is NOT good. Let’s find out what.’" },

      { type: "scripture", id: "w-scr", title: "Genesis 2:15, 18", minutes: 1, ref: "Genesis 2:15, 18", version: "CEV",
        lines: [
          "The LORD God put the man in the Garden of Eden to take care of it and to look after it.",
          "The LORD God said, “It isn’t good for the man to live alone. I will make a suitable partner for him.”"
        ],
        emphasis: ["take care of it", "isn’t good", "suitable partner"],
        notes: "Point out: after all the ‘good’ and ‘very good’ of Genesis 1, this is the first ‘not good’." },

      { type: "story", id: "w-story", title: "Zoom in on Eden", minutes: 3, transition: "page",
        beats: [
          { text: "Genesis 2 zooms in on one garden.", caption: "Rivers, fruit trees, birdsong — and a job: “take care of it.”",
            art: { key: "t1w01d3-c", label: "Wed · title + story beats 1–2 (the Garden of Eden)", desc: "Wide view of the Garden of Eden: a river winding through giant trees heavy with fruit, ferns and flowers, light streaming through.", shot: "wide establishing shot, slightly from above", motion: "kenburns-in",
              scene: "The Garden of Eden: a wide river winding through a lush garden of giant fruit trees, huge leaves, ferns and flowers, waterfalls in the distance, birds in flight, light streaming down through the canopy in long rays. Peaceful and abundant. No people." } },
          { text: "For the first time, God says: “It isn’t good…”", caption: "“…for the man to live alone.”", shout: true },
          { text: "The great animal parade!", caption: "Adam named every animal and bird. That’s how they got their names.",
            art: { key: "t1w01d3-a", label: "Wed · story beat 3 + role-play card (naming the animals)", desc: "Adam kneeling in the garden beside a lion cub and an elephant calf, one hand outstretched, delighted as he names them.", shot: "medium shot", motion: "kenburns-right", chars: ["adam"],
              scene: "In a lush garden, Adam kneels beside a gentle lion cub and an elephant calf, one hand stretched out, thoughtful and delighted as he names them. Giant leaves, a river, light through the trees." } },
          { text: "But none of them was like him.", caption: "“None of these was the right kind of partner for the man.”" },
          { text: "“Here is someone like me!”", caption: "God made us for friendship — with each other, and with him.",
            art: { key: "t1w01d3-b", label: "Wed · story beat 5 (Adam meets Eve)", desc: "Adam and Eve meeting for the first time, face to face, wonder and joy on both faces, soft light, leaves behind.", shot: "close-up two-shot", motion: "kenburns-in", chars: ["adam", "eve"],
              scene: "Adam and Eve meeting for the first time in the garden, face to face, wonder and joy on both faces, soft light on their faces, blurred leaves behind." } }
        ],
        narration: "Genesis 1 gave us the big picture — like a drone shot of the whole world being made. Genesis 2 zooms right in, to one man in one garden.\n\nGod formed the first man from the dust of the ground and breathed life into him. Then the LORD God put the man in the Garden of Eden to take care of it and to look after it. Picture it: rivers running through, trees heavy with fruit, flowers everywhere, birdsong all day long. And the man — Adam — had a job. Work was part of God’s good plan from the very beginning. Not boring work: gardening the most beautiful place that ever existed.\n\nBut then, for the first time in the whole Bible, God says something is NOT good. After all those ‘good’s and ‘very good’s, God says: ‘It isn’t good for the man to live alone. I will make a suitable partner for him.’\n\nSo the LORD brought the animals and the birds to the man, to see what names he would give each of them. Imagine the parade! Something huge and grey with a nose like a hose. Something with a shaggy mane and a massive roar. Something small and round that couldn’t fly. And Adam named them — the tame animals, the birds and the wild animals. That’s how they got their names. God let Adam be creative, just like God is.\n\nBut by the end of the parade there was a problem. None of these was the right kind of partner for the man. The lion couldn’t talk with him. The elephant couldn’t share a joke. Adam was surrounded by life — and still alone.\n\nSo the LORD God made the man fall into a deep sleep. He took one of the man’s ribs, closed up his side, and made a woman. Then God brought her to the man.\n\nAnd Adam said the very first human words the Bible records — and they were a shout of joy: ‘Here is someone like me! She is part of my body, my own flesh and bones.’\n\nGod didn’t make us to be alone. He made us for friendship — with each other, and most of all with him.",
        notes: "Click once per beat; about 3 minutes. Imagined detail: the descriptions of the animals in the parade. Genesis 2:7 (dust and breath) is brought in briefly for context." },

      { type: "question", id: "w-q1", title: "Not good", minutes: 1, level: "look", mode: "finish", seconds: 20,
        text: "Finish the sentence: For the first time in the Bible, God said something was NOT good. It was…",
        reveal: "…that the man was alone. (Genesis 2:18)",
        hint: "Answer: ‘It isn’t good for the man to live alone.’ Follow-up: ‘But Adam had God, and a perfect garden, and every animal — so what was missing?’ Follow-up 2: ‘What did God do about it?’ If silent: re-read Genesis 2:18 from the earlier slide." },

      { type: "roleplay", id: "w-rp", title: "The Garden", minutes: 5, ref: "Genesis 2:15–23",
        art: { key: "t1w01d3-a" },
        imagined: "The animals’ lines (and a very Kiwi bird) are imagined for fun. Adam’s words when he meets the woman, and God’s words, are quoted from Genesis 2 (CEV). She is named Eve later, in Genesis 3:20.",
        actions: ["Everyone: animal noises in the parade", "Everyone: a soft ‘shhh… zzzz’ when Adam falls asleep"],
        props: ["Optional: animal ears or masks", "Optional: a leafy branch for the garden"],
        characters: [
          { name: "Narrator", color: "#F2C77B", desc: "Tells the story" },
          { name: "Voice of God", voice: true, desc: "God’s words — teacher or a strong reader" },
          { name: "Adam", color: "#FFB547", desc: "The first man — curious, delighted, then lonely" },
          { name: "Lion", color: "#E0A040", desc: "Big, proud and dramatic" },
          { name: "Elephant", color: "#B0BEC5", desc: "Slow, wise, makes trumpet noises" },
          { name: "Kiwi", color: "#A1887F", desc: "Small, round, can’t fly — very fast" },
          { name: "Eve", color: "#F48FB1", desc: "The first woman — appears near the end" },
          { name: "Everyone", color: "#FFFFFF", desc: "The rest of the class — animal noises and big lines" }
        ],
        lines: [
          { character: "Narrator", text: "The garden is quiet. Adam stands in the middle, looking around in wonder.", direction: true },
          { character: "Narrator", text: "The LORD God put the man in the Garden of Eden to take care of it and to look after it." },
          { character: "Adam", text: "Rivers… fruit trees… flowers everywhere… This place is AMAZING!", action: "spin slowly, arms out" },
          { character: "Voice of God", text: "It isn’t good for the man to live alone. I will make a suitable partner for him." },
          { character: "Narrator", text: "So the LORD brought the animals and birds to the man, to see what names he would give them." },
          { character: "Everyone", text: "ROAR! Moo! Tweet tweet! Baaaa!", action: "animal noises" },
          { character: "Lion", text: "ROOOAAARRR!", action: "prowl in, shake your mane" },
          { character: "Adam", text: "Whoa! Big mane, big voice… I’ll call you… LION!" },
          { character: "Lion", text: "Lion. I like it. Sounds strong." },
          { character: "Elephant", text: "Pfffrrrooo!", action: "swing your arm like a trunk" },
          { character: "Adam", text: "Your nose is… a hose? I’ll call you ELEPHANT." },
          { character: "Elephant", text: "Couldn’t have picked it better myself." },
          { character: "Kiwi", text: "Peep! I can’t fly — but I’m VERY fast!", action: "zoom around with tiny flapping wings" },
          { character: "Adam", text: "Small, round, long beak, no tail… You’re a KIWI!" },
          { character: "Everyone", text: "Kiwi! Kiwi! Kiwi!" },
          { character: "Narrator", text: "Adam named the tame animals and the birds and the wild animals. That’s how they got their names." },
          { character: "Adam", text: "So many animals… but none of them are like me.", action: "sit down, chin in hands" },
          { pause: "Freeze! Adam has a perfect garden and every animal in the world. Why is he still lonely?", seconds: 20 },
          { character: "Narrator", text: "None of these was the right kind of partner for the man." },
          { character: "Narrator", text: "So the LORD God made the man fall into a deep sleep." },
          { character: "Everyone", text: "Shhhh… zzzzzz…", action: "softly" },
          { character: "Narrator", text: "God took one of the man’s ribs and made a woman. Then the LORD God brought her to the man." },
          { character: "Eve", text: "Hello?", action: "walk in slowly, looking around" },
          { character: "Adam", text: "Here is someone like me! She is part of my body, my own flesh and bones!", action: "wake up and leap to your feet" },
          { character: "Eve", text: "Someone like ME!" },
          { character: "Lion", text: "Finally — someone he can actually talk to." },
          { character: "Elephant", text: "Pfffrrrooo!", action: "a happy trumpet" },
          { character: "Narrator", text: "God didn’t make people to be alone. He made them for friendship — with each other, and with him." },
          { character: "Everyone", text: "It was VERY good!" }
        ],
        debrief: [
          { level: "think", text: "Why do you think God let Adam choose the animals’ names himself?", hint: "God shares his creativity with us; he trusts people with real responsibility; Adam is made like God — a maker and namer." },
          { level: "look", text: "What did Adam need that the animals couldn’t give him?", hint: "Someone like him — to talk with, share with, work with. Friendship and family." }
        ],
        notes: "Use Pick volunteers. Lion, Elephant and Kiwi love to ham it up — let them. Keep the Eve moment warm and simple." },

      { type: "question", id: "w-q3", title: "Work in paradise", minutes: 1.5, level: "think", mode: "pair", seconds: 45,
        text: "God gave Adam a job — “take care of it and look after it” — in a PERFECT garden, before anything went wrong. What does that tell us about work, like chores, schoolwork or jobs?",
        hint: "Good answers: work is part of God’s good plan, not a punishment; God made us to make and care for things; doing work well can be a way of honouring God. Follow-up: ‘What job has God given YOU to take care of?’ (pets, siblings, classroom, bedroom!) Follow-up 2: ‘How would you do it differently if you were doing it for God?’ If silent: ‘Is there any work you actually enjoy?’" },

      { type: "question", id: "w-q2", title: "Wasn’t God enough?", minutes: 1, level: "dig", mode: "discuss", seconds: 40, skippable: true,
        text: "Adam had God himself as a friend. So why did he still need a human friend? Wasn’t God enough?",
        hint: "Big idea: God himself said ‘it isn’t good’ — he DESIGNED us to need both him and other people. Needing friends isn’t weakness or a lack of faith; it’s how God made us. Follow-up: ‘How does God often care for us THROUGH other people?’ Follow-up 2: ‘So what could you be for someone this week?’ If silent: ‘Who has God used to look after you?’" },

      { type: "apply", id: "w-apply", title: "Head · Heart · Hands", minutes: 1,
        head: "God made us for friendship — with him and with each other.",
        heart: "God, thank you for the people you’ve put in my life.",
        hands: "At lunch today or tomorrow, look for someone on their own and invite them in — to your game, your table or your conversation.",
        settings: ["playground", "lunch", "sport"],
        notes: "Ask: ‘Where in our school do people end up on their own?’ Make it concrete." },

      { type: "scene", id: "w-scene", title: "Someone like me", minutes: 0.5, optional: true,
        art: { key: "t1w01d3-b" },
        boxes: [
          { text: "“Here is someone like me!”", pos: "tl", style: "speech" },
          { text: "God made us for friendship.", pos: "br", style: "caption" }
        ] },

      { type: "verse", id: "w-verse", title: "Verse with actions", minutes: 1, optional: true, activity: "actions",
        notes: "Learn one action per chunk, then say the whole verse with actions twice." },

      { type: "prayer", id: "w-pray", title: "Wow prayer (open hands)", minutes: 3, mood: "calm", style: "hands",
        tip: "You can pray with your body too. Holding your hands open says, “God, everything I have comes from you.” Your body can help your heart pray.",
        opening: "Sit up tall. Hold your hands open on your lap, palms up. Breathe in… and out. Everything good in the garden came from God — and everything good in our lives does too.",
        phases: [
          { name: "Wow", lead: "Think about the God who made a perfect garden — and made people for friendship.",
            prompts: ["God, you are the friend-maker!", "God, you gave Adam good work and a beautiful home — you are generous!"],
            starter: "Wow, God, you are…", seconds: 35, aloud: "Wow, God — you made us for friendship!" },
          { name: "Sorry", lead: "Sometimes we leave people out, or aren’t a good friend.",
            prompts: ["Sorry for leaving someone out.", "Sorry for the times I wasn’t a good friend this week."],
            starter: "God, I’m sorry for…", seconds: 30, aloud: "God, I’m sorry for the times I’ve left people out." },
          { name: "Thanks", lead: "With open hands, picture the people God has given you.",
            prompts: ["Thank you for my whānau and friends.", "Thank you that I’m never truly alone, because you are with me."],
            starter: "Thank you, God, for…", seconds: 35, aloud: "Thank you, God, for my family and my friends." },
          { name: "Please", lead: "Ask God to help you include others — and to be close to anyone who’s lonely.",
            prompts: ["Please help me notice who is lonely at school.", "Please be close to anyone who feels alone today."],
            starter: "Please, God, help…", seconds: 40, aloud: "Please, God, help me notice who is lonely, and be their friend." }
        ],
        closing: "Close your hands gently, like you’re holding on to what God gave you. Everyone: Amen!",
        notes: "Model the open-hands posture. It’s optional — some students may prefer eyes closed, hands still." }
    ] },

  /* ======================= THURSDAY ======================= */
  { label: "Thursday", theme: "Rest and Wonder", roleplay: false, mood: "night",
    learningIntentions: [
      "We are learning why God rested on the seventh day.",
      "We are learning how creation ‘tells’ us about God (Psalm 19).",
      "I can retell the seven days in order and say the Big Idea of the week."
    ],
    assessment: "Students can put the seven days in order, recite Genesis 1:1, and explain the Big Idea in their own words.",
    resources: ["Screen", "Take-home challenge cards (print from the challenge slide)"],
    whereToNext: "Next Monday: check in on the challenge. Week 2 — Broken Friendship (Genesis 3).",
    slides: [
      { type: "title", id: "th-title", title: "Rest and Wonder", minutes: 0.5, kicker: "Term 1 · Week 1", sub: "In the Beginning",
        art: { key: "t1w01d4-b" }, notes: "Let the splash play." },

      { type: "review", id: "th-review", title: "Seven days in order", minutes: 2.5, format: "order",
        prompt: "Quick! Can you put the seven days in order?",
        items: ["Light", "Sky", "Land, sea & plants", "Sun, moon & stars", "Fish & birds", "Animals & people", "God rests"],
        hint: "Students call out which comes next; click to reveal each day in order. Option: give 7 students a card each and have them line up first. Celebrate — then ask: ‘Which day are you most amazed by?’",
        notes: "The cards start scrambled. Each click locks the next day into place." },

      { type: "scripture", id: "th-scr", title: "Genesis 2:2–3 · Psalm 19:1", minutes: 1, ref: "Genesis 2:2–3 · Psalm 19:1", version: "CEV",
        lines: [
          { text: "By the seventh day God had finished his work, and so he rested.", ref: "Genesis 2:2" },
          { text: "God blessed the seventh day and made it special, because on that day he rested from his work.", ref: "Genesis 2:3" },
          { text: "The heavens keep telling the wonders of God, and the skies declare what he has done.", ref: "Psalm 19:1" }
        ],
        emphasis: ["finished", "rested", "special", "keep telling"],
        notes: "Two different books! Point out that Psalm 19 was written many years later by a shepherd looking at the same sky." },

      { type: "story", id: "th-story", title: "Day 7 and a shepherd’s song", minutes: 2, transition: "page", mood: "night",
        beats: [
          { text: "Day 7: God rested.", caption: "Not because he was tired — because his work was finished.",
            art: { key: "t1w01d4-a", label: "Thu · story beats 1–2 (Day 7: rest)", desc: "A peaceful garden at evening: a quiet river, animals resting under trees, a soft grey sky.", shot: "wide, serene", motion: "kenburns-out",
              scene: "The seventh day: a peaceful garden at evening, a quiet river, animals resting under trees, soft grey gradient sky and gentle light. Calm and still, no people." } },
          { text: "God made the seventh day special.", caption: "A rhythm: work, then rest. Make, then enjoy." },
          { text: "Years later, a shepherd looked up…", caption: "David lay on the hills at night with his sheep.",
            art: { key: "t1w01d4-b", label: "Thu · title + story beats 3–4 + stretch scene (Psalm 19)", desc: "A shepherd boy lying on a hillside at night, hands behind his head, gazing at a sky packed with stars; sheep asleep around him.", shot: "low-angle from behind", motion: "kenburns-up",
              scene: "A shepherd boy about 10 lies on his back on a desert hillside at night, hands behind his head, gazing up at an astonishing sky full of stars and the Milky Way. His sheep sleep around him." } },
          { text: "“The heavens keep telling the wonders of God.”", caption: "The sky has been preaching every day since Genesis 1.", shout: true }
        ],
        narration: "After six days of speaking light and sky and sea and stars and creatures and people into being, something unusual happens on the seventh day. God rests.\n\nNow — was God tired? Did he need a nap? No! God never gets tired. The Hebrew word for ‘rested’ means ‘stopped’. God stopped because his work was finished. Everything was complete. Nothing was missing. And God blessed the seventh day and made it special — a day to stop, enjoy what he had made, and enjoy him. He was showing people a rhythm: work, then rest. Make, then enjoy. And he gave that rhythm to us as a gift.\n\nHundreds of years later, a shepherd named David — yes, the David who would one day face Goliath — spent his nights out on the hills looking after his sheep. No street lights. No screens. Just a sky absolutely packed with stars. And David wrote a song about it. You can read it in Psalm 19: ‘The heavens keep telling the wonders of God, and the skies declare what he has done.’\n\nDavid noticed something: the sky is preaching! It doesn’t speak a word, but every sunrise says, ‘Look how great God is.’ Every starry night says, ‘Look how big God is.’ The sky has been telling that message every single day since Genesis 1 — and it will be telling it over Aotearoa again tonight.\n\nSo this week’s challenge is simple: listen to what the sky — and everything else God made — is saying.",
        notes: "About 2 minutes. Imagined detail: David on the hills at night is based on his life as a shepherd (1 Samuel 16–17); the psalm itself doesn’t say where he wrote it." },

      { type: "question", id: "th-q1", title: "Why rest?", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "Why did God rest on the seventh day?",
        options: ["He was worn out", "His work was finished, and he made the day special", "He ran out of ideas", "Someone told him to"], answer: 1,
        hint: "Answer: B — Genesis 2:2–3 says he had finished his work, and he blessed the day and made it special. Follow-up: ‘Can God get tired?’ (No — Isaiah 40:28.) Follow-up 2: ‘Why might God want US to have a rhythm of rest?’ If silent: re-read Genesis 2:2." },

      { type: "question", id: "th-q2", title: "What is the sky saying?", minutes: 1.5, level: "think", mode: "pair", seconds: 45,
        text: "Psalm 19 says the sky “keeps telling the wonders of God” — without using any words. What is a sunrise, or a starry night, ‘saying’ about God?",
        hint: "Good answers: God is big; God is powerful; God is beautiful and creative; God is faithful — the sun comes up every day; God is bigger than my problems. Follow-up: ‘What else in creation “tells” us about God?’ Follow-up 2: ‘Why do you think so many people never notice?’ If silent: show the optional starry scene or ask students to picture last night’s sky." },

      { type: "recap", id: "th-recap", title: "This week’s Big Idea", minutes: 1.5,
        points: [
          "God made everything by his word — he spoke, and it happened.",
          "Everything God made was good — and people were made to be like him, to know him.",
          "God rested and made a day special — he gives us rest, rhythm and wonder."
        ],
        notes: "Reveal the three points, then the Big Idea stamps in. Have the class read the Big Idea together." },

      { type: "question", id: "th-q3", title: "Is rest a waste?", minutes: 1.5, level: "dig", mode: "vote", seconds: 30, skippable: true,
        text: "Agree or disagree: “Resting is a waste of time.” Move to the side of the room that matches what you think.",
        options: ["Agree", "Disagree"],
        hint: "Let both sides explain. Draw out: God rested (so it can’t be bad!); rest isn’t laziness — it’s stopping to enjoy God and his gifts; too much screen-time isn’t always real rest. Follow-up: ‘What does REAL rest look like for you?’ Follow-up 2: ‘How could you use rest to notice God?’ If silent: ‘How do you feel after a whole weekend of no sleep?’" },

      { type: "challenge", id: "th-chal", title: "This Week’s Challenge", minutes: 2,
        text: "Notice it — then thank him. Every day until next Monday, notice THREE things God made, and say thank you to him for each one.",
        why: "The sky keeps telling the wonders of God. This week, be a listener!",
        head: "God is the Creator of everything.", heart: "Wow, God — thank you!", hands: "Notice 3 things God made each day and thank him.",
        takeHome: true,
        notes: "Print the take-home cards (button on the slide). Next Monday’s check-in will ask what students noticed." },

      { type: "verse", id: "th-verse", title: "Memory verse: fade-out", minutes: 1.5, activity: "fade",
        notes: "Each click makes more words disappear. Can the class still say it when every word is gone?" },

      { type: "scene", id: "th-scene", title: "The heavens are telling", minutes: 1, optional: true,
        art: { key: "t1w01d4-b" },
        boxes: [
          { text: "They don’t speak a word…", pos: "tl", style: "caption" },
          { text: "…yet their message reaches all the earth. (Psalm 19:3–4)", pos: "br", style: "caption" }
        ],
        notes: "Stretch slide. Psalm 19:3–4 (CEV): ‘They don’t speak a word, and there is never the sound of a voice. Yet their message reaches all the earth, and it travels around the world.’" },

      { type: "prayer", id: "th-pray", title: "Praying a psalm", minutes: 3, mood: "calm", style: "psalm",
        tip: "You can pray the Bible’s own words back to God! The psalms are prayers and songs — when you borrow their words, you’re praying like David did.",
        opening: "Get comfortable and still. Today we’re going to pray Psalm 19 together. I’ll say a line, and you echo it back to God.",
        phases: [
          { name: "Wow", lead: "Echo after me — say it TO God.",
            prompts: ["“The heavens keep telling the wonders of God…”", "“…and the skies declare what he has done.”"],
            starter: "Wow, God, your sky tells me you are…", seconds: 35, aloud: "God, the heavens keep telling your wonders, and the skies declare what you have done!" },
          { name: "Sorry", lead: "Sometimes we rush past God’s wonders without noticing.",
            prompts: ["Sorry for rushing past your world without noticing.", "Sorry for calling your world ‘boring’."],
            starter: "God, I’m sorry for…", seconds: 30, aloud: "God, I’m sorry for the times I don’t notice your wonders." },
          { name: "Thanks", lead: "Thank God for one thing he made that you love.",
            prompts: ["Thank you for sunrises and starry nights.", "Thank you for rest and weekends."],
            starter: "Thank you, God, for…", seconds: 35, aloud: "Thank you, God, for the sky, the stars, and rest." },
          { name: "Please", lead: "Ask God to help with this week’s challenge.",
            prompts: ["Please help me notice three things you made every day.", "Please help me rest well and enjoy you this weekend."],
            starter: "Please, God, help…", seconds: 35, aloud: "Please, God, help me notice and thank you this week." }
        ],
        closing: "Let’s say our memory verse as our final prayer: “In the beginning God created the heavens and the earth.” Amen!",
        notes: "Read each Wow line with a short pause for the class to echo. Celebrate the end of Week 1!" }
    ] }
  ]
}

});
