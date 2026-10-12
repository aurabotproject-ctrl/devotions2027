/* Morninglight 2027 — Term 2 Week 1: What Is Faith? (Hebrews 11:1–6; Genesis 22:1–19). Scripture: CEV. */
window.DEVOTIONS = window.DEVOTIONS || {};
window.DEVOTIONS["Term 2"] = window.DEVOTIONS["Term 2"] || {};
window.DEVOTIONS["Term 2"]["Week 1"] = {
  lessonTitle: "What Is Faith?",
  passage: "Hebrews 11:1–6; Genesis 22:1–19",
  bigIdea: "Faith is trusting God so much that you act on what he says, even when you can’t see how it will work out.",
  godIs: "Provider",
  memoryVerse: { ref: "Hebrews 11:1", text: "Faith makes us sure of what we hope for and gives us proof of what we cannot see.", version: "CEV",
    chunks: ["Faith", "makes us sure", "of what we hope for", "and gives us proof", "of what", "we cannot see."],
    actions: ["Hand on heart", "Firm nod, thumbs up", "Hands clasped, look up hopefully", "Hold out a flat hand — here’s the evidence!", "Shrug, palms up", "Cover eyes, then peek out and smile"] },
  prayerFocus: { skill: "Praying Scripture back", tip: "Take the words of a Bible verse and turn them into your own prayer — ‘Faith makes us sure of what we hope for’ becomes ‘God, make me sure of you.’ God loves to hear his own words prayed back to him." },
  mood: "dawn",
  cover: "t2w01-cover",
  characters: ["guide", "abraham", "isaac"],
  coverArt: { key: "t2w01-cover", label: "Week cover", desc: "Old Abraham and the boy Isaac seen from behind, climbing a rocky mountain path at dawn, Isaac carrying a bundle of firewood, the sun breaking over the ridge ahead.", shot: "wide, from behind",
    scene: "Old Abraham and the boy Isaac seen from behind, climbing a steep rocky mountain path together at dawn, Isaac carrying a bundle of firewood on his back, Abraham leaning on his staff, the sun breaking over the ridge ahead and long shadows behind them.", chars: ["abraham", "isaac"] },
  comicArt: { key: "t2w01-comic", label: "Comic page (week opener — for the comic-page viewer, coming in a later build)", format: "portrait", desc: "Six-panel comic page: the Faith Museum and Abraham’s test on Mount Moriah.",
    panels: "Six panels. Panel 1 (wide): a cheerful museum guide with a brass lantern welcoming children into a grand hall of glass display cases. Panel 2 (small): old Abraham at night outside his tent, looking up into a soft beam of light. Panel 3 (tall): Abraham, the boy Isaac, two servants and a donkey setting out at dawn. Panel 4 (wide): Abraham and Isaac walking up a mountain path, Isaac with firewood on his back, looking up at his father. Panel 5 (wide): a ram caught by its horns in a thicket on the mountaintop, Abraham and Isaac standing safely together, staring at it in wonder. Panel 6 (small): father and son walking down the mountain at sunrise, Abraham’s arm around Isaac.", chars: ["guide", "abraham", "isaac"] },

  days: [

  /* ======================= MONDAY ======================= */
  { label: "Monday", theme: "The Faith Museum", roleplay: true, mood: "temple",
    learningIntentions: [
      "We are learning what the Bible means by faith (Hebrews 11:1).",
      "We are learning how Abel, Enoch and Noah showed their faith by what they did.",
      "I can explain faith as trusting God enough to act on what he says."
    ],
    assessment: "Listen for students defining faith in their own words (trusting God enough to act, even when you can’t see how) and naming what Abel, Enoch or Noah did because they trusted God.",
    resources: ["Screen", "Optional: a chair for the ‘trust test’", "Optional: a torch or lanyard for the museum guide"],
    whereToNext: "Tomorrow: the guide leads us to Abraham’s exhibit — and the hardest thing God ever asked him.",
    slides: [
      { type: "title", id: "m-title", title: "The Faith Museum", minutes: 0.5, kicker: "Term 2 · Week 1", sub: "What Is Faith?",
        art: { key: "t2w01-cover" }, notes: "Welcome back! A new term and a new big question: ‘Can I trust him?’ Build the sense of a fresh start." },

      { type: "hook", id: "m-hook", title: "The trust test", minutes: 1.5,
        checkin: { text: "Last term ended with Simeon, Anna and the shepherds telling everyone the good news about Jesus. Your challenge: tell one person one thing you learned about God in Term 1. Who did you tell — and what did you say?" },
        text: "Would you sit on a chair you had never seen before — without checking it first?",
        ask: "What makes you trust a chair? What makes you trust a person?",
        hint: "Check-in first: ask 2–3 students who they told and what they said; celebrate honest ‘I forgot’ answers too. Then the hook — if you have a chair, invite someone to sit on it. Take answers: it looks strong, it held me before, someone I trust made it. Land it: ‘Believing a chair will hold you isn’t enough — trusting it means sitting down. This term’s big question is “Can I trust God?” Today we visit a museum full of people who sat their whole weight on God.’" },

      { type: "scripture", id: "m-scr", title: "Hebrews 11:1, 4–6", minutes: 1, ref: "Hebrews 11:1–6", version: "CEV",
        lines: [
          { text: "Faith makes us sure of what we hope for and gives us proof of what we cannot see.", ref: "Hebrews 11:1" },
          { text: "Because Abel had faith, he offered God a better sacrifice than Cain did. God was pleased with him and his gift, and even though Abel is now dead, his faith still speaks for him.", ref: "Hebrews 11:4" },
          { text: "Enoch had faith and did not die. He pleased God, and God took him up to heaven. That’s why his body was never found.", ref: "Hebrews 11:5" },
          { text: "But without faith no one can please God. We must believe that God is real and that he rewards everyone who searches for him.", ref: "Hebrews 11:6" }
        ],
        emphasis: ["Faith", "sure", "proof of what we cannot see", "his faith still speaks", "pleased God", "God is real"],
        notes: "Hebrews 11:1 is our memory verse. ‘Faith’ = trusting God. ‘Sacrifice’ = a gift offered to God. Read slowly — this chapter is the ‘map’ for the whole term." },

      { type: "story", id: "m-story", title: "Welcome to the Faith Museum", minutes: 3, transition: "page", mood: "temple",
        beats: [
          { text: "Welcome to the Faith Museum!", caption: "An imaginary building — with real exhibits from Hebrews 11.",
            art: { key: "t2w01d1-a", label: "Mon · story beats 1–2 + stretch scene", desc: "A cheerful silver-haired guide holding up a brass lantern at the open doors of a grand old museum hall, rows of glowing glass display cases stretching away behind her.", shot: "wide, inviting", motion: "kenburns-in", chars: ["guide"],
              scene: "A cheerful silver-haired guide in a long dark robe holding up a small brass lantern at the tall open doors of a grand old museum hall, rows of softly glowing glass display cases and empty picture frames stretching away into the distance behind her." } },
          { text: "The sign above the door:", caption: "“Faith makes us sure of what we hope for and gives us proof of what we cannot see.”", shout: true },
          { text: "Exhibit 1: Abel gave his best.", caption: "His faith still speaks.",
            art: { key: "t2w01d1-b", label: "Mon · story beats 3–5 + role-play card", desc: "Inside the museum: three lit exhibits — a shepherd’s crook beside a small stone altar, a pair of old sandals on a path fading into light, and a huge wooden ark model — the guide pointing with her lantern.", shot: "medium wide", motion: "kenburns-right", chars: ["guide"],
              scene: "Inside a grand museum hall, the guide lifts her lantern towards three lit exhibits: a shepherd’s crook beside a small stone altar, a pair of worn sandals on a stone path fading into bright light, and an enormous wooden ark model filling the far end of the hall." } },
          { text: "Exhibit 2: Enoch walked with God.", caption: "Day after day — until God took him home." },
          { text: "Exhibit 3: Noah built a boat.", caption: "Faith that moved his hands and feet." }
        ],
        narration: "Welcome to Term 2! Last term our big question was ‘Who is God?’ This term the question is: ‘Can I trust him?’\n\nTo help us answer it, we’re going to visit a museum. It isn’t a real building — it’s an imaginary one. But every exhibit inside comes from a real chapter of the Bible: Hebrews 11. Some people call it ‘the Hall of Faith’.\n\nHebrews was a letter written to Christians who were having a hard time. Some were being picked on for following Jesus. Some were tired. Some were thinking about giving up. So the writer took them on a tour. ‘Look,’ he said, ‘at all the people who trusted God before you.’\n\nAnd before the tour begins, he puts a sign above the door. It explains one word — faith. ‘Faith makes us sure of what we hope for and gives us proof of what we cannot see.’\n\nFaith isn’t pretending. It isn’t just a nice feeling. Faith is trusting God — who is real, and who keeps his promises — so much that you actually do what he says, even when you can’t see how it will work out.\n\nExhibit one: Abel. Remember Adam and Eve’s sons? Abel gave God the very best of his flock — not the leftovers, his best. He trusted that God was worth it. And thousands of years later, the writer says, Abel’s faith still speaks.\n\nExhibit two: Enoch. Genesis says Enoch ‘walked with God’ — day after day, year after year, like two friends walking side by side. And one day God simply took him home to heaven. He never died!\n\nExhibit three: Noah. Remember Week 3 last term? God warned Noah about a flood nobody had ever seen. Not a cloud in the sky. But Noah trusted God, picked up his tools and built an enormous boat — and it saved his family.\n\nThen comes another sign, in big letters: ‘Without faith no one can please God. We must believe that God is real and that he rewards everyone who searches for him.’\n\nDid you notice what is the same about every exhibit? Each person did something. Abel gave. Enoch walked. Noah built. Their faith wasn’t only in their heads. It moved their hands and feet.\n\nAnd here’s the best part: the museum isn’t finished. There are still empty frames on the walls.",
        notes: "About 3 minutes. The museum and guide are imagined — a frame for touring Hebrews 11 all term; say so clearly. Abel: Genesis 4:2–4. Enoch: Genesis 5:21–24 (‘walked with God… God took him’). Noah: Genesis 6–9 (Term 1 Week 3). Hebrews was written to Christians under pressure (Hebrews 10:32–36)." },

      { type: "question", id: "m-q1", title: "The sign above the door", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "According to Hebrews 11:1, what does faith do?",
        options: ["Makes us feel happy all the time", "Makes us sure of what we hope for and gives us proof of what we cannot see", "Lets us see everything clearly", "Makes every problem disappear"], answer: 1,
        hint: "Answer: B (Hebrews 11:1). Follow-up: ‘What are some things we can’t see but still trust are real?’ (Wind, air, love, gravity, someone’s promise.) Follow-up 2: ‘What do you think Abel, Enoch and Noah were hoping for?’ If silent: re-read the first scripture line together, slowly, and ask which words sound the most sure." },

      { type: "question", id: "m-q2", title: "Faith that does", minutes: 1.5, level: "think", mode: "pair", seconds: 45, skippable: true,
        text: "Abel gave. Enoch walked. Noah built. Why do you think the Bible shows faith by what people DID, not only by what they thought?",
        hint: "Good answers: real trust shows in actions; if you really believe the chair will hold you, you sit; saying ‘I trust God’ but never doing what he says isn’t really trusting; actions show what’s in our hearts. Follow-up: ‘What would Noah’s faith have looked like if he believed God but never built the ark?’ Follow-up 2: ‘What could faith look like in your life this week?’ If silent: go back to the chair — ‘Is it trust if you only look at the chair?’" },

      { type: "roleplay", id: "m-rp", title: "Welcome to the Faith Museum", minutes: 5, ref: "Hebrews 11:1–7",
        art: { key: "t2w01d1-b" },
        imagined: "The museum, the guide and the three visitors are imagined — a frame for touring Hebrews 11. The guide’s quotes from Hebrews 11 are from the CEV; the details about Abel, Enoch and Noah are summarised from Genesis 4–6.",
        actions: ["Everyone: the creaky museum doors", "Everyone: the museum echo ‘Ooooh…’", "Everyone: Noah’s hammering"],
        props: ["Optional: a torch for the guide’s lantern", "Optional: a lanyard name badge"],
        characters: [
          { name: "Narrator", color: "#F2C77B", desc: "Tells the story" },
          { name: "Guide", color: "#C9A0DC", desc: "The Faith Museum guide — cheerful, loves her exhibits" },
          { name: "Tama", color: "#7BA7D9", desc: "A visitor who asks LOTS of questions" },
          { name: "Ruby", color: "#FFB547", desc: "A visitor who only believes what she can see" },
          { name: "Grandad", color: "#A1887F", desc: "Ruby’s grandad — slow, kind and wise" },
          { name: "Everyone", color: "#FFFFFF", desc: "Creaky doors, museum echoes, hammering" }
        ],
        lines: [
          { character: "Narrator", text: "The doors of a grand old museum swing open. A guide with a lantern steps out.", direction: true },
          { character: "Everyone", text: "Creeeeeak…", action: "doors opening slowly" },
          { character: "Guide", text: "Welcome, welcome! Welcome to the Faith Museum. Mind the step — and keep your eyes open.", action: "lift lantern" },
          { character: "Tama", text: "What’s faith? Is it like… wishing really, really hard?", action: "hand up" },
          { character: "Guide", text: "Good question! Read the sign above the door with me.", action: "point up" },
          { character: "Everyone", text: "Faith makes us sure of what we hope for and gives us proof of what we cannot see." },
          { character: "Ruby", text: "Proof of what we CAN’T see? That makes no sense. I only believe what I can see.", action: "arms folded" },
          { character: "Grandad", text: "Can you see the wind, Ruby? But you believe it when it blows your hat off.", action: "chuckle" },
          { character: "Guide", text: "Faith is trusting God — who is real — enough to do what he says. Come and see." },
          { character: "Narrator", text: "Exhibit one: a shepherd’s crook beside a little stone altar.", direction: true },
          { character: "Guide", text: "This is Abel. He gave God the very best lamb from his flock. Not the skinny one — the best." },
          { character: "Tama", text: "Why would anyone give away their best?" },
          { character: "Guide", text: "Because he trusted that God was worth it. And the sign says his faith still speaks for him." },
          { character: "Everyone", text: "Ooooooh…", action: "museum echo" },
          { character: "Narrator", text: "Exhibit two: a pair of old sandals on a path that disappears into light.", direction: true },
          { character: "Guide", text: "Enoch walked with God — every day, for years. Then one day, God took him home." },
          { character: "Ruby", text: "Wait — he just… went? He didn’t die?", action: "lean in" },
          { character: "Guide", text: "Enoch had faith and did not die. He pleased God, and God took him up to heaven." },
          { character: "Narrator", text: "Exhibit three: a wooden ark so big it fills the whole hall.", direction: true },
          { character: "Grandad", text: "Now THAT’S a boat. Imagine building that with not a cloud in the sky!", action: "look way up" },
          { character: "Guide", text: "God warned Noah about something no one had ever seen. Noah trusted God — and picked up his hammer." },
          { character: "Everyone", text: "Bang! Bang! Bang!", action: "hammering on desks" },
          { pause: "Freeze! Abel gave, Enoch walked, Noah built. What is the same about all three exhibits?", seconds: 20 },
          { character: "Tama", text: "They all DID something because they trusted God!", action: "jump up" },
          { character: "Guide", text: "Exactly. Without faith no one can please God. We must believe that God is real…" },
          { character: "Ruby", text: "…and that he rewards everyone who searches for him.", action: "reading the sign slowly" },
          { character: "Ruby", text: "Okay. Maybe I’ll keep searching.", action: "small smile" },
          { character: "Tama", text: "Why are there empty frames on that wall?", action: "point" },
          { character: "Guide", text: "Because the museum isn’t finished. There’s room for more people who trust God. Maybe even you." },
          { character: "Grandad", text: "Same time tomorrow? I hear the next exhibit is Abraham." },
          { character: "Everyone", text: "Faith makes us sure of what we hope for!" }
        ],
        debrief: [
          { level: "think", text: "Ruby said, “I only believe what I can see.” How would you answer her?", hint: "We trust lots of things we can’t see (wind, love, gravity). Faith isn’t blind: God has shown himself in creation, in promises kept (all of Term 1) and most of all in Jesus." },
          { level: "look", text: "What did Abel, Enoch and Noah each DO because of their faith?", hint: "Abel gave his best; Enoch walked with God; Noah built the ark (Hebrews 11:4–7)." }
        ],
        notes: "The guide returns all term, so cast a confident reader. Let Everyone make the creaky doors and echoes big. If asked about Enoch: Genesis 5:24 simply says ‘God took him’ — keep it simple and wonder-filled." },

      { type: "question", id: "m-q3", title: "Why faith pleases God", minutes: 1, level: "dig", mode: "discuss", seconds: 40,
        text: "Hebrews says, “Without faith no one can please God.” Why do you think trusting God matters to him more than being clever, strong or good?",
        hint: "Ideas: God wants a friendship, and friends trust each other; trusting God says ‘you are good and true’; not trusting him is like calling him a liar; we can never be good enough to earn God’s love — faith receives what he gives, especially Jesus. Follow-up: ‘How would you feel if your best friend never believed a word you said?’ Follow-up 2: ‘What does verse 6 say God does for people who search for him?’ (Rewards them.) If silent: ask ‘Which would make a parent happier — a child who obeys grumpily, or one who trusts them?’" },

      { type: "apply", id: "m-apply", title: "Head · Heart · Hands", minutes: 1,
        head: "Faith is trusting God so much that I do what he says — even when I can’t see how it will work out.",
        heart: "God, I want to believe you are real, and keep searching for you.",
        hands: "This week, do one thing simply because God says it — tell the truth when a lie would be easier, or give your best instead of your leftovers like Abel — at home, in the playground or online.",
        settings: ["home", "playground", "online"],
        notes: "Ask 2–3 students to name their ‘Abel’ — one thing they could give their best in." },

      { type: "scene", id: "m-scene", title: "The sign above the door", minutes: 0.5, optional: true,
        art: { key: "t2w01d1-a" },
        boxes: [
          { text: "“Faith makes us sure of what we hope for…”", pos: "tl", style: "speech" },
          { text: "“…and gives us proof of what we cannot see.”", pos: "br", style: "caption" }
        ] },

      { type: "verse", id: "m-verse", title: "Memory verse peek", minutes: 1, optional: true, activity: "echo",
        notes: "Introduce Hebrews 11:1 — the sign above the museum door. Echo it chunk by chunk." },

      { type: "prayer", id: "m-pray", title: "Praying the museum sign (silent)", minutes: 3, mood: "calm", style: "silent",
        tip: "This term we learn to pray Scripture back — taking the Bible’s own words and turning them into our prayer. Today we pray the signs in the Faith Museum.",
        opening: "Let’s get still. The museum is quiet now. Breathe in… and out. God is real, and he loves it when we search for him.",
        phases: [
          { name: "Wow", lead: "Hebrews 11:6 says God is real. Pray it back to him.",
            prompts: ["God, you are real — even though I can’t see you.", "You reward everyone who searches for you."],
            starter: "Wow, God, you are…", seconds: 35, aloud: "Wow, God — you are real, and you reward everyone who searches for you!" },
          { name: "Sorry", lead: "Is there a time you didn’t trust God, or didn’t do what he said?",
            prompts: ["Sorry for only believing what I can see.", "Sorry for giving you my leftovers, not my best like Abel."],
            starter: "God, I’m sorry for…", seconds: 30, aloud: "God, we’re sorry for the times we didn’t trust you." },
          { name: "Thanks", lead: "Thank God for the real people in his museum.",
            prompts: ["Thank you for Abel, Enoch and Noah — real people who trusted you.", "Thank you that you walked with Enoch — and you walk with me."],
            starter: "Thank you, God, for…", seconds: 30, aloud: "Thank you, God, that you walk with us, like you walked with Enoch." },
          { name: "Please", lead: "Pray Hebrews 11:1 back: ask God to make you sure.",
            prompts: ["God, make me sure of what I hope for.", "Please give me faith to do what you say this week."],
            starter: "Please, God, make me…", seconds: 35, aloud: "God, make us sure of what we hope for — and sure of you." }
        ],
        closing: "Everyone: Amen.",
        notes: "Model praying a verse back first: read the verse, then say it to God using ‘you’ and ‘me’. Short and simple is perfect." }
    ] },

  /* ======================= TUESDAY ======================= */
  { label: "Tuesday", theme: "Here I Am", roleplay: false, mood: "desert",
    learningIntentions: [
      "We are learning how God tested Abraham and how Abraham answered, “Here I am.”",
      "We are learning that faith obeys God even when his command is very hard to understand.",
      "I can explain what Abraham meant when he said, “God will provide the lamb.”"
    ],
    assessment: "Listen for students noticing Abraham’s ‘Here I am’ readiness, his early-morning obedience, his ‘We will come back’, and his trust that God would provide.",
    resources: ["Screen", "Optional: a small bundle of sticks"],
    whereToNext: "Tomorrow: Abraham and Isaac reach the top of Mount Moriah — and God steps in.",
    slides: [
      { type: "title", id: "t-title", title: "Here I Am", minutes: 0.5, kicker: "Term 2 · Week 1", sub: "What Is Faith?",
        art: { key: "t2w01d2-b" }, notes: "Let the splash play. Today’s story is serious — set a calm tone." },

      { type: "hook", id: "t-recap", title: "Recap", minutes: 1, style: "recap",
        text: "Yesterday we toured the Faith Museum.",
        ask: "What does the sign above the door say — and which three exhibits did we see?",
        hint: "Hebrews 11:1: ‘Faith makes us sure of what we hope for and gives us proof of what we cannot see.’ Abel gave, Enoch walked, Noah built. Then: ‘Today the guide leads us to the biggest exhibit in the hall — Abraham. And it begins with the hardest thing God ever asked him. Here’s a secret before we start: this story has a happy ending.’" },

      { type: "scripture", id: "t-scr", title: "Genesis 22:1–3, 7–8", minutes: 1, ref: "Genesis 22:1–8", version: "CEV",
        lines: [
          { text: "Some years later God decided to test Abraham. So he spoke to Abraham, and Abraham answered, “Here I am, LORD.”", ref: "Genesis 22:1" },
          { text: "The LORD said, “Go get Isaac, your only son, the one you dearly love! Take him to the land of Moriah…”", ref: "Genesis 22:2" },
          { text: "So Abraham got up early the next morning and chopped wood for the fire.", ref: "Genesis 22:3" },
          { text: "Isaac said, “Father, we have the coals and the wood, but where is the lamb for the sacrifice?” “My son,” Abraham answered, “God will provide the lamb.”", ref: "Genesis 22:7–8" }
        ],
        emphasis: ["test", "Here I am, LORD", "your only son", "early the next morning", "God will provide the lamb"],
        notes: "Verse 2 goes on: God tells Abraham to offer Isaac as a sacrifice. The story slide explains this carefully. Stress the first words: ‘God decided to TEST Abraham’ — we know something Abraham didn’t." },

      { type: "story", id: "t-story", title: "The hardest test", minutes: 3.5, transition: "page", mood: "desert",
        beats: [
          { text: "“Abraham!” “Here I am.”", caption: "I’m listening. I’m ready. Whatever you say.",
            art: { key: "t2w01d2-a", label: "Tue · story beats 1–2 + stretch scene", desc: "Old Abraham at night outside his tent under a sky full of stars, looking up into a soft column of light, one hand on his chest.", shot: "medium wide, night", motion: "kenburns-up", chars: ["abraham"],
              scene: "Old Abraham standing at night outside his goat-hair tent beneath a sky crowded with stars, looking up into a soft column of light falling from above, one hand pressed to his chest, a lamp glowing in the tent doorway behind him." } },
          { text: "“Take Isaac, your only son…”", caption: "The son God had promised. The son of laughter.", shout: true },
          { text: "Early the next morning…", caption: "Abraham chopped the wood and set off.",
            art: { key: "t2w01d2-b", label: "Tue · title + story beats 3–5", desc: "At first light, Abraham loading split firewood onto a donkey while the boy Isaac and two servants wait at the edge of the tent camp, hills ahead.", shot: "wide, early light", motion: "kenburns-left", chars: ["abraham", "isaac"],
              scene: "At first light, old Abraham tying bundles of split firewood onto a donkey at the edge of a tent camp while the boy Isaac and two servants wait beside him, a long road winding away towards distant hills." } },
          { text: "Three days of walking.", caption: "“We will come back,” Abraham told the servants." },
          { text: "“Where is the lamb?”", caption: "“God will provide the lamb.”" }
        ],
        narration: "Do you remember Isaac? Last term, God promised old Abraham and Sarah a son — and when Isaac was born, Sarah laughed for joy. Isaac means ‘laughter’. He was the promise come true. Through Isaac, God said, Abraham’s family would grow to be as many as the stars.\n\nNow Isaac was growing up — perhaps a boy about your age. And Abraham loved him more than anything.\n\nThen one day, God spoke. ‘Abraham!’\n\nAnd Abraham answered with three little words: ‘Here I am.’ That means: ‘I’m listening. I’m ready. Whatever you say.’\n\nBut what God said next was the hardest thing Abraham had ever heard. ‘Take Isaac, your only son, the one you dearly love, and go to the land of Moriah. Offer him to me there as a sacrifice.’\n\nA sacrifice was a gift given to God on an altar — usually an animal. People who worshipped false gods sometimes even gave their children. But the true God had never asked for anything like this. Abraham must have felt sick inside. Isaac was the promise! How could God keep his promise if Isaac was gone?\n\nBut the Bible tells us something Abraham didn’t know yet: ‘God decided to test Abraham.’ God was never going to let Isaac be harmed. This was a test of trust. Would Abraham hold on to God — or hold on to the gift more tightly than the Giver?\n\nSo what did Abraham do? He didn’t argue. He didn’t hide. The Bible says he ‘got up early the next morning’. He chopped the wood, saddled his donkey and set off with Isaac and two servants.\n\nThey walked for three days. Three long days to think. On the third day Abraham saw the mountain in the distance. He said to the servants, ‘Stay here with the donkey. My son and I will go over there to worship. We will come back.’\n\nDid you catch that? ‘WE will come back.’ Not ‘I will.’ The book of Hebrews tells us Abraham was sure God could even bring Isaac back from the dead if he had to. God had promised — so somehow, God would keep that promise.\n\nAbraham put the wood on Isaac’s back. He carried the hot coals for the fire himself. And the two of them walked on together, up the mountain.\n\nThen Isaac said, ‘Father?’\n\n‘Yes, my son?’\n\n‘We have the coals and the wood — but where is the lamb?’\n\nAbraham’s answer is one of the bravest sentences in the Bible: ‘God will provide the lamb, my son.’\n\nAnd the two of them walked on together.",
        notes: "About 3½ minutes. HANDLE WITH CARE: tell students early that God never intended Isaac to be harmed — the narrator tells us ‘God decided to test Abraham’ (22:1). Isaac’s age isn’t given; he is strong enough to carry the wood up a mountain. Hebrews 11:17–19 says Abraham reasoned that God could raise the dead. God’s law later forbids child sacrifice completely (Deuteronomy 12:31). If a child is upset, reassure them how the story ends." },

      { type: "dig", id: "t-dig", title: "Word study: “Here I am”", minutes: 2,
        prompt: "In the Hebrew Bible, Abraham gives the same short answer three times in this story. Who was he answering?",
        columns: ["Who called", "Abraham’s answer"],
        items: [
          { left: "God: “Abraham!” (22:1)", right: "“Here I am, LORD.”" },
          { left: "Isaac: “Father?” (22:7)", right: "“Here I am, my son.”" },
          { left: "The LORD’s angel: “Abraham! Abraham!” (22:11)", right: "“Here I am!”" },
          { left: "God calls you", right: "What will you say?" }
        ],
        reveal: "“Here I am” means: I’m listening, I’m ready, I trust you.",
        notes: "The Hebrew word is ‘hinneni’ — ‘Here I am.’ The CEV words 22:7 a little differently, but the Hebrew repeats it three times: to God, to his son, and to God again. Reveal row by row; pause on the last row." },

      { type: "question", id: "t-q1", title: "Early the next morning", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "What did Abraham do the morning after God spoke to him?",
        options: ["Stayed in bed and worried", "Got up early, chopped wood and set off", "Ran away to Egypt", "Asked Sarah to decide for him"], answer: 1,
        hint: "Answer: B (Genesis 22:3). Follow-up: ‘What does getting up EARLY tell us about Abraham?’ (He didn’t delay; he obeyed straight away even though it was hard.) Follow-up 2: ‘Who went with him?’ (Isaac, two servants and a donkey.) If silent: re-read the third scripture line and ask students to spot the time of day." },

      { type: "question", id: "t-q2", title: "We will come back", minutes: 1.5, level: "think", mode: "pair", seconds: 45,
        text: "Abraham told the servants, “We will come back.” Why do you think he said WE, not I?",
        hint: "Good answers: he trusted God’s promise that Isaac’s family would be as many as the stars; Hebrews 11:19 says he was sure God could raise the dead; faith hopes for more than it can see. Some may say he didn’t want to scare Isaac — accept it, then point to Hebrews. Follow-up: ‘What promise was Abraham holding on to?’ Follow-up 2: ‘How is this like the sign above the museum door?’ If silent: write ‘WE will come back’ on the board and underline WE." },

      { type: "question", id: "t-q3", title: "Why a test?", minutes: 1.5, level: "dig", mode: "silent", seconds: 40, skippable: true,
        text: "God already knows everything. So why do you think God tested Abraham?",
        hint: "Ideas: a test doesn’t make your learning — it shows it; a bridge is tested before people trust it; the test showed Abraham (and us) that he trusted God more than even God’s best gift; a test is not a trick — God provided the answer himself. Follow-up: ‘Is a test the same as a trick? What’s the difference?’ Follow-up 2: ‘Is there something you love so much it would be hard to hand it to God?’ If silent: compare a swimming test — the teacher already thinks you can swim, but the test lets YOU find out." },

      { type: "apply", id: "t-apply", title: "Head · Heart · Hands", minutes: 2,
        head: "Faith says “Here I am” to God — and trusts him even when it’s hard.",
        heart: "God, I want to hold on to you more tightly than anything you’ve given me.",
        hands: "When a parent, coach or teacher calls your name this week, answer ‘Here I am!’ and do what they ask straight away — like Abraham ‘early the next morning’.",
        settings: ["home", "classroom", "sport"],
        notes: "Practise it now: call a few names; students answer ‘Here I am!’" },

      { type: "scene", id: "t-scene", title: "Here I am", minutes: 1, optional: true,
        art: { key: "t2w01d2-a" },
        boxes: [
          { text: "“Abraham!”", pos: "tl", style: "shout" },
          { text: "“Here I am, LORD.”", pos: "br", style: "speech" }
        ] },

      { type: "verse", id: "t-verse", title: "Build the verse", minutes: 1, activity: "build",
        notes: "Build Hebrews 11:1. Ask: ‘What was Abraham hoping for that he couldn’t see yet?’" },

      { type: "prayer", id: "t-pray", title: "Praying Genesis 22 back (line by line)", minutes: 3, mood: "calm", style: "psalm",
        tip: "Today we pray Bible words back line by line. The teacher reads a line from Abraham’s story; then we turn it into our own prayer.",
        opening: "Let’s get quiet. God called Abraham by name — and he knows yours too. Breathe in… and out.",
        phases: [
          { name: "Wow", lead: "Teacher reads: “God… spoke to Abraham.” Pray it back:",
            prompts: ["God, you know my name, like you knew Abraham’s.", "You always keep your promises — even when I can’t see how."],
            starter: "Wow, God, you…", seconds: 30, aloud: "Wow, God — you know our names, and you keep your promises!" },
          { name: "Sorry", lead: "Teacher reads: “Abraham got up early the next morning.” Is there something you’ve been slow to do?",
            prompts: ["Sorry for saying ‘in a minute’ when you ask me to do something.", "Sorry for loving your gifts more than I love you."],
            starter: "God, I’m sorry for…", seconds: 30, aloud: "God, we’re sorry for being slow to obey you." },
          { name: "Thanks", lead: "Teacher reads: “Isaac, your only son, the one you dearly love.” Thank God for someone you love.",
            prompts: ["Thank you for my family — every one of them is a gift from you.", "Thank you that you love me even more than Abraham loved Isaac."],
            starter: "Thank you, God, for…", seconds: 35, aloud: "Thank you, God, for the people we love." },
          { name: "Please", lead: "Teacher reads: “Here I am, LORD.” Pray Abraham’s words as your own.",
            prompts: ["Here I am, LORD — I’m listening.", "When I can’t see how, help me say, ‘God will provide.’"],
            starter: "Here I am, LORD. Please…", seconds: 35, aloud: "Here I am, LORD. You will provide." }
        ],
        closing: "Everyone: Amen.",
        notes: "Read each ‘Teacher reads’ line slowly, then pause for students to pray it back silently or in a whisper." }
    ] },

  /* ======================= WEDNESDAY ======================= */
  { label: "Wednesday", theme: "Mount Moriah", roleplay: true, mood: "dawn",
    learningIntentions: [
      "We are learning how God stopped Abraham and provided a ram on Mount Moriah.",
      "We are learning that God tested Abraham’s faith — and God himself provided.",
      "I can explain what Abraham named the place, and why."
    ],
    assessment: "Listen for students explaining that God stopped Abraham, that the ram took Isaac’s place, and why Abraham named the place ‘The LORD Will Provide’ (after God, not himself).",
    resources: ["Screen", "Optional: a bundle of sticks for Isaac", "Optional: a picture of a ram’s curly horns"],
    whereToNext: "Tomorrow: ‘The LORD will provide’ — and the Lamb God provided for the whole world.",
    slides: [
      { type: "title", id: "w-title", title: "Mount Moriah", minutes: 0.5, kicker: "Term 2 · Week 1", sub: "What Is Faith?",
        art: { key: "t2w01d3-a" }, notes: "Calm, hushed start. Remind students the story ends well." },

      { type: "hook", id: "w-hook", title: "The last second", minutes: 1,
        text: "Have you ever had to wait until the very last second to find out how something would turn out?",
        ask: "How did it feel while you were waiting?",
        hint: "Take ideas: a penalty shoot-out, waiting for test results, a lost pet. Then recap: ‘Yesterday Abraham and Isaac walked up the mountain. Isaac asked, “Where is the lamb?” Abraham said, “God will provide the lamb.” Today we reach the top — and God steps in at exactly the right moment. Remember: God never let Isaac be hurt.’" },

      { type: "scripture", id: "w-scr", title: "Genesis 22:11–14", minutes: 1, ref: "Genesis 22:9–19", version: "CEV",
        lines: [
          { text: "But the LORD’s angel shouted from heaven, “Abraham! Abraham!” “Here I am!” he answered.", ref: "Genesis 22:11" },
          { text: "“Don’t hurt the boy or harm him in any way!” the angel said. “Now I know that you truly obey God, because you were willing to offer him your only son.”", ref: "Genesis 22:12" },
          { text: "Abraham looked up and saw a ram caught by its horns in the bushes. So he took the ram and sacrificed it in place of his son.", ref: "Genesis 22:13" },
          { text: "Abraham named that place “The LORD Will Provide.”", ref: "Genesis 22:14" }
        ],
        emphasis: ["Abraham! Abraham!", "Don’t hurt the boy", "truly obey God", "a ram", "in place of his son", "The LORD Will Provide"],
        notes: "Notice ‘in place of his son’ — the ram took Isaac’s place. Hold that thought for Thursday." },

      { type: "story", id: "w-story", title: "God steps in", minutes: 3, transition: "page", mood: "dawn",
        beats: [
          { text: "The top of the mountain.", caption: "Abraham built an altar and laid the wood on it.",
            art: { key: "t2w01d3-a", label: "Wed · title + story beats 1–2", desc: "Abraham and the boy Isaac climbing the last rocky stretch of a mountain path in early light, Isaac carrying firewood, Abraham carrying a small clay fire-pot with a wisp of smoke.", shot: "medium wide", motion: "kenburns-up", chars: ["abraham", "isaac"],
              scene: "Old Abraham and the boy Isaac climbing the last rocky stretch of a steep mountain path in early morning light, Isaac carrying a bundle of firewood on his back and looking up at his father, Abraham carrying a small clay fire-pot trailing a wisp of smoke, wide hills falling away below." } },
          { text: "Abraham’s heart was breaking.", caption: "But he still trusted God." },
          { text: "“Abraham! Abraham!”", caption: "“Don’t hurt the boy!”", shout: true },
          { text: "A ram, caught in the bushes.", caption: "God had provided — right on time.",
            art: { key: "t2w01d3-b", label: "Wed · story beats 4–5 + role-play card + stretch scene", desc: "On a rocky mountaintop at sunrise, a ram caught by its curled horns in a thorny thicket; Abraham and Isaac, safe together, turn towards it in wonder.", shot: "wide, golden", motion: "kenburns-in", chars: ["abraham", "isaac"],
              scene: "On a rocky mountaintop at sunrise, a ram caught by its curled horns in a thorny thicket; old Abraham and the boy Isaac, safe and standing together, turn towards it in wonder, Abraham’s arm around Isaac’s shoulders, golden light breaking across the hills behind them." } },
          { text: "“The LORD Will Provide.”", caption: "Abraham named the mountain after what God did." }
        ],
        narration: "Abraham and Isaac reached the top of the mountain. Quietly, Abraham gathered stones and built an altar — a kind of stone table where gifts were offered to God. He laid the wood on it, piece by piece.\n\nBy now Isaac must have understood. There was no lamb. Yet the Bible doesn’t say he ran away or fought. Isaac was strong enough to carry a load of firewood up a mountain — strong enough to get away from an old man. But he let his father place him on the altar. Isaac trusted his father, just as his father was trusting God.\n\nAbraham’s heart must have been breaking. This was his son. His only son. The promise. But Abraham had decided: God is good. God is faithful. God will keep his promise somehow — even if he has to bring Isaac back to life.\n\nAbraham got ready to do the hardest thing he had ever done.\n\nAnd at that very moment a voice called from heaven: ‘Abraham! Abraham!’\n\nFor the third time in this story he answered, ‘Here I am!’\n\n‘Don’t hurt the boy!’ said the angel of the LORD. ‘Don’t harm him in any way! Now I know that you truly obey God, because you were willing to offer him your only son.’\n\nCan you imagine how fast Abraham lifted Isaac down? How tightly he hugged him?\n\nThen Abraham looked up. There, caught by its curly horns in a thorny bush, was a ram — a male sheep. God had provided, exactly as Abraham had said.\n\nAbraham offered the ram to God instead of his son. The ram took Isaac’s place. Isaac walked away alive because something else died in his place. Hold on to that idea — it will matter tomorrow.\n\nThen Abraham gave the mountain a name. Not ‘The Place Where I Was Brave’. Not ‘Where Abraham Passed the Test’. He named it after God: ‘The LORD Will Provide.’\n\nAnd God spoke again from heaven, repeating his great promise: ‘Because you obeyed me, I will bless you. Your family will be as many as the stars in the sky and the grains of sand on the beach. And through your family, all nations on earth will be blessed.’\n\nThen Abraham and Isaac walked down that mountain together — two people who had found out, on the hardest day of their lives, that God can be trusted.",
        notes: "About 3 minutes. HANDLE WITH CARE: the narration never describes harm — ‘got ready’ is enough, and the angel interrupts immediately. Stress that God stopped Abraham and never wanted Isaac harmed. Isaac’s willingness is implied by his strength (he could have run). The ‘angel of the LORD’ speaks as God himself (22:12, 16). If a child is upset: God shows here that HE provides the sacrifice — and later forbids child sacrifice completely (Deuteronomy 18:10)." },

      { type: "question", id: "w-q1", title: "The name of the place", minutes: 1, level: "look", mode: "finish", seconds: 20,
        text: "Finish the sentence: “Abraham named that place…”",
        reveal: "“…The LORD Will Provide.” (Genesis 22:14)",
        hint: "Follow-up: ‘What did God provide?’ (A ram caught by its horns in the bushes.) Follow-up 2: ‘Why do you think Abraham named the place after God, not after himself?’ (Because God was the one who did the great thing — Abraham’s part was to trust.) If silent: point to the last scripture line and read it together." },

      { type: "roleplay", id: "w-rp", title: "Mount Moriah", minutes: 5, ref: "Genesis 22:1–19",
        art: { key: "t2w01d3-b" },
        imagined: "The angel’s words and Abraham’s and Isaac’s main lines are from Genesis 22 (CEV), lightly shortened. The servant’s lines and Isaac’s feelings at the top are imagined. Danger is implied, never acted.",
        actions: ["Everyone: tired footsteps up the mountain (pat knees slowly)", "Everyone: the wind on the mountaintop", "Everyone: the ram’s ‘Baaa!’"],
        props: ["Optional: a bundle of sticks for Isaac"],
        characters: [
          { name: "Narrator", color: "#F2C77B", desc: "Tells the story" },
          { name: "Abraham", color: "#A1887F", desc: "Old, loving, trusting God on the hardest day" },
          { name: "Isaac", color: "#7BA7D9", desc: "Abraham’s son — curious, then brave" },
          { name: "Servant", color: "#B0BEC5", desc: "Waits at the bottom with the donkey" },
          { name: "Angel", voice: true, desc: "The angel of the LORD — heard from heaven, never seen" },
          { name: "Everyone", color: "#FFFFFF", desc: "Footsteps, wind, and a very surprised ram" }
        ],
        lines: [
          { character: "Narrator", text: "Three days of walking. Abraham sees the mountain far away.", direction: true },
          { character: "Everyone", text: "Step… step… step…", action: "pat knees slowly — tired feet" },
          { character: "Servant", text: "Master, is this the place? Shall I unload the donkey?" },
          { character: "Abraham", text: "Stay here with the donkey, while my son and I go over there to worship. We will come back." },
          { character: "Servant", text: "“WE will come back”… he said WE.", action: "whisper to the audience" },
          { character: "Narrator", text: "Abraham put the wood on Isaac’s back. He carried the fire himself.", direction: true },
          { character: "Isaac", text: "Father?" },
          { character: "Abraham", text: "Yes, my son?" },
          { character: "Isaac", text: "We have the coals and the wood, but where is the lamb for the sacrifice?", action: "look around" },
          { character: "Abraham", text: "My son, God will provide the lamb.", action: "hand on Isaac’s shoulder" },
          { character: "Everyone", text: "Whoooosh…", action: "wind on the mountaintop" },
          { character: "Narrator", text: "At the top, Abraham built an altar and laid the wood on it.", direction: true },
          { character: "Isaac", text: "Father… there isn’t a lamb, is there?", action: "quietly" },
          { character: "Abraham", text: "I don’t understand it, Isaac. But I trust God. He always keeps his promises.", action: "voice shaking" },
          { character: "Isaac", text: "Then… I will trust you, Father." },
          { pause: "Freeze! Abraham can’t see how this will work out. What is he holding on to?", seconds: 20 },
          { character: "Narrator", text: "Abraham got ready to do the hardest thing he had ever done.", direction: true },
          { character: "Angel", text: "Abraham! Abraham!" },
          { character: "Abraham", text: "Here I am!", action: "freeze, look up" },
          { character: "Angel", text: "Don’t hurt the boy or harm him in any way!" },
          { character: "Angel", text: "Now I know that you truly obey God, because you were willing to offer him your only son." },
          { character: "Isaac", text: "Father! Look — in the bushes!", action: "point" },
          { character: "Everyone", text: "Baaaaa!", action: "a very surprised ram" },
          { character: "Abraham", text: "A ram, caught by its horns. God has provided!", action: "hug Isaac tight" },
          { character: "Narrator", text: "Abraham offered the ram in place of his son." },
          { character: "Abraham", text: "I will name this place “The LORD Will Provide.”", action: "arms raised" },
          { character: "Angel", text: "Because you obeyed, I will bless you. Your family will be as many as the stars in the sky." },
          { character: "Angel", text: "And through your family, all nations on earth will be blessed." },
          { character: "Isaac", text: "Come on, Father. Let’s go home — together.", action: "take his hand" },
          { character: "Servant", text: "They’re back! Both of them!", action: "jump up" },
          { character: "Everyone", text: "The LORD will provide!" }
        ],
        debrief: [
          { level: "think", text: "Isaac asked, “Where is the lamb?” How did God answer his question on the mountain?", hint: "God provided a ram to take Isaac’s place — just as Abraham said. Tomorrow we’ll see an even bigger answer: Jesus, the Lamb of God." },
          { level: "look", text: "What did the angel tell Abraham NOT to do?", hint: "“Don’t hurt the boy or harm him in any way!” (Genesis 22:12)." }
        ],
        notes: "SENSITIVE SCRIPT: no one mimes the altar or lifts anything — the Narrator’s ‘got ready’ line is enough, and the Angel interrupts at once. Choose a confident Isaac and let the Angel’s ‘Abraham! Abraham!’ ring out. Giggles at the ram’s ‘Baaaa!’ are fine — it is a moment of relief." },

      { type: "question", id: "w-q2", title: "In his place", minutes: 1.5, level: "think", mode: "pair", seconds: 45,
        text: "The ram was offered “in place of” Isaac. What do you think Isaac felt as he watched — and what might he have learned about God?",
        hint: "Good answers: relief, wonder, thankfulness, love for his dad; he learned God provides, God keeps his promises, God is kind, God doesn’t want child sacrifice, someone else can take your place. Follow-up: ‘How might Isaac tell this story to his own children one day?’ Follow-up 2: ‘Where else last term did an animal die so people could live?’ (The Passover lamb, Term 1 Week 6.) If silent: ask ‘If you were Isaac, what would you say to God on the way down the mountain?’" },

      { type: "question", id: "w-q3", title: "Super-strong Abraham?", minutes: 1, level: "dig", mode: "vote", seconds: 30, skippable: true,
        text: "Agree or disagree: “Abraham passed the test because he was a super-strong person.”",
        options: ["Agree", "Disagree"],
        hint: "Let students move or vote, then dig. Abraham wasn’t perfect — last term he lied about Sarah and tried to get a son his own way. His strength was in his GOD, not himself: Hebrews says ‘Because Abraham had faith…’ Follow-up: ‘So where does strong faith come from?’ (Knowing God keeps his promises; years of walking with him.) Follow-up 2: ‘Can someone with small faith trust a big God?’ If silent: remind them of Abraham and Sarah laughing at God’s promise in Term 1 Week 4." },

      { type: "apply", id: "w-apply", title: "Head · Heart · Hands", minutes: 1,
        head: "God provides what we need — exactly when we need it.",
        heart: "God, I trust you to provide, even when I can’t see how.",
        hands: "Name one worry for this week — a test, a friendship, something at home. Each time it pops into your head, say quietly, ‘The LORD will provide.’",
        settings: ["school", "home", "bedtime"],
        notes: "This previews Thursday’s challenge. Students don’t need to share their worry aloud." },

      { type: "scene", id: "w-scene", title: "God provided", minutes: 0.5, optional: true,
        art: { key: "t2w01d3-b" },
        boxes: [
          { text: "“Abraham! Abraham!”", pos: "tl", style: "shout" },
          { text: "“The LORD Will Provide.”", pos: "br", style: "caption" }
        ] },

      { type: "verse", id: "w-verse", title: "Verse with actions", minutes: 1, optional: true, activity: "actions",
        notes: "Actions for Hebrews 11:1. Ask: ‘What did Abraham hope for on the mountain?’" },

      { type: "prayer", id: "w-pray", title: "Open hands", minutes: 3, mood: "calm", style: "hands",
        tip: "Abraham held Isaac with open hands — he trusted God with what he loved most. Today we pray with our hands, as a sign that we trust God with everything.",
        opening: "Sit comfortably. Rest your hands on your lap. We’ll use them to pray.",
        phases: [
          { name: "Wow", lead: "Pray Genesis 22:14 back to God:",
            prompts: ["You are the LORD who provides.", "You stepped in at exactly the right moment."],
            starter: "Wow, God, you are…", seconds: 30, aloud: "Wow, LORD — you are the God who provides!" },
          { name: "Sorry", lead: "Close your hands tight, like holding on to something you won’t give to God.",
            prompts: ["Sorry for holding on to things more tightly than I hold on to you.", "Sorry for not trusting you to provide."],
            starter: "God, I’m sorry for…", seconds: 30, aloud: "God, we’re sorry for holding on so tightly." },
          { name: "Thanks", lead: "Now open your hands. Thank God for what he provides.",
            prompts: ["Thank you for providing a ram for Isaac.", "Thank you for providing my food, my home and my family."],
            starter: "Thank you, God, for…", seconds: 35, aloud: "Thank you, God, for everything you provide for us." },
          { name: "Please", lead: "Hands open, palms up: give God one worry.",
            prompts: ["God, I give you my worry about…", "Please provide what I need, like you did on the mountain."],
            starter: "Please, God…", seconds: 40, aloud: "LORD, we give you our worries — you will provide." }
        ],
        closing: "Keep your hands open as we say: Amen.",
        notes: "Demonstrate the closed-then-open hands. Some students may like to hold their hands out a little, as if handing something over." }
    ] },

  /* ======================= THURSDAY ======================= */
  { label: "Thursday", theme: "The LORD Will Provide", roleplay: false, mood: "temple",
    learningIntentions: [
      "We are learning that Abraham called God ‘The LORD Will Provide’.",
      "We are learning how the ram on Mount Moriah points to Jesus, the Lamb of God.",
      "I can say Hebrews 11:1 and explain what faith is."
    ],
    assessment: "Students can put Genesis 22 in order, explain how Isaac and the ram point to Jesus, and recite Hebrews 11:1 with its meaning.",
    resources: ["Screen", "Take-home challenge cards", "Optional: small slips of paper for ‘worry’ prayers"],
    whereToNext: "Next week: Faith That Marches — Rahab, Joshua and the walls of Jericho.",
    slides: [
      { type: "title", id: "th-title", title: "The LORD Will Provide", minutes: 0.5, kicker: "Term 2 · Week 1", sub: "What Is Faith?",
        art: { key: "t2w01d4-a" }, notes: "Celebrate: our first week in the Faith Museum!" },

      { type: "review", id: "th-review", title: "Abraham’s test", minutes: 2.5, format: "order",
        prompt: "Put Abraham’s test in order!",
        items: ["God calls: “Abraham!”", "Up early, chopping wood", "Three days’ walk", "“Where is the lamb?”", "An altar on the mountain", "“Don’t hurt the boy!”", "A ram in the bushes", "“The LORD Will Provide”"],
        hint: "Students call out the next step; click to place it. After the ram, ask: ‘Who provided?’ (God!)",
        notes: "Cards start scrambled." },

      { type: "scripture", id: "th-scr", title: "Genesis 22:14 · John 1:29 · John 3:16", minutes: 1, ref: "Genesis 22:14; John 1:29; John 3:16", version: "CEV",
        lines: [
          { text: "Abraham named that place “The LORD Will Provide.” And even now people say, “On the mountain of the LORD it will be provided.”", ref: "Genesis 22:14" },
          { text: "The next day, John saw Jesus coming toward him and said: Here is the Lamb of God who takes away the sin of the world!", ref: "John 1:29" },
          { text: "God loved the people of this world so much that he gave his only Son, so that everyone who has faith in him will have eternal life and never really die.", ref: "John 3:16" }
        ],
        emphasis: ["The LORD Will Provide", "Lamb of God", "takes away the sin", "his only Son", "faith in him"],
        notes: "Notice ‘only Son’ in John 3:16 — the same words God used about Isaac. ‘Sin’ = the wrong things we do that break our friendship with God." },

      { type: "story", id: "th-story", title: "The Lamb God provides", minutes: 2, transition: "page", mood: "temple",
        beats: [
          { text: "Down the mountain, together.", caption: "Isaac alive. The ram in his place.",
            art: { key: "t2w01d4-a", label: "Thu · title + story beats 1–2", desc: "Abraham and Isaac walking down the mountain path together at sunrise, Abraham’s arm around Isaac’s shoulders, both smiling, wide valley below.", shot: "wide, warm", motion: "kenburns-out", chars: ["abraham", "isaac"],
              scene: "Old Abraham and the boy Isaac walking down a mountain path together at sunrise, Abraham’s arm around Isaac’s shoulders, both faces lit with relief and joy, a wide valley and a waiting donkey far below." } },
          { text: "“Where is the lamb?”", caption: "Isaac’s question waited a long time for its full answer." },
          { text: "Two thousand years later…", caption: "Near that same mountain, another Father gave his only Son.", shout: true,
            art: { key: "t2w01d4-b", label: "Thu · story beats 3–4 + stretch scene", desc: "A lone empty wooden cross on a hill outside the walls of an ancient city at sunrise, seen from far away, sheep grazing in the foreground.", shot: "wide, distant", motion: "kenburns-in",
              scene: "A lone empty wooden cross standing on a bare hill just outside the walls of an ancient city at sunrise, seen from far away, light streaming through the clouds above it and a small flock of sheep grazing on the slope in the foreground." } },
          { text: "“Here is the Lamb of God!”", caption: "God provided the Lamb — for us." }
        ],
        narration: "Abraham and Isaac walked down Mount Moriah together. Can you imagine that walk home? Isaac alive. The ram in his place. And a new name for God ringing in their ears: ‘The LORD Will Provide.’\n\nBut Isaac’s question — ‘Where is the lamb?’ — was bigger than anyone knew. That day, God provided a ram. Years later, King Solomon built God’s temple on Mount Moriah, in Jerusalem, and for a thousand years lambs were offered there. Why? Because people’s sin — the wrong things we do that break our friendship with God — had to be dealt with. And still everyone waited for the real answer.\n\nThen one day, by the Jordan River, John the Baptist saw Jesus walking towards him and shouted, ‘Here is the Lamb of God who takes away the sin of the world!’\n\nThere it is — the answer to Isaac’s question. On a hill just outside Jerusalem, near that same mountain, God the Father did what he stopped Abraham from doing. He gave his only Son, the one he dearly loved. Isaac walked free because a ram took his place. We can walk free because Jesus took ours.\n\nAnd then — just as Abraham believed God could do — God raised Jesus back to life.\n\nSo faith isn’t trusting a God who is far away and stingy. It’s trusting a God who has already given us his very best. If he gave us Jesus, the Bible says, he will surely give us everything else we need. The LORD will provide.",
        notes: "About 2 minutes. 2 Chronicles 3:1 places Solomon’s temple on Mount Moriah. Jesus was crucified just outside Jerusalem’s walls — ‘near that same mountain’ is a careful, fair link. ‘Will surely give us everything else’ is Romans 8:32. Jesus is not drawn in this scene — only the empty cross." },

      { type: "question", id: "th-q1", title: "The Lamb of God", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "What did John the Baptist call Jesus?",
        options: ["The Lion of the Jungle", "The Lamb of God who takes away the sin of the world", "The new Abraham", "The best shepherd in Israel"], answer: 1,
        hint: "Answer: B (John 1:29). Follow-up: ‘Why would John call a person a LAMB?’ (Lambs were offered to God in people’s place — Jesus would take our place.) Follow-up 2: ‘What question did Isaac ask that this answers?’ (‘Where is the lamb?’) If silent: re-read the second scripture line." },

      { type: "question", id: "th-q2", title: "Same and different", minutes: 1.5, level: "think", mode: "pair", seconds: 45,
        text: "How is the story of Abraham and Isaac like the story of Jesus? How is it different?",
        hint: "Same: an only son, dearly loved; wood carried up a hill (Isaac carried wood, Jesus carried a cross); a father giving; someone taking another’s place; ‘on the third day’ (Genesis 22:4). Different: Isaac was spared, Jesus wasn’t; Jesus chose to give himself; Jesus really died and rose again; Jesus takes away sin for the whole world. Follow-up: ‘Why did God stop Abraham, but not stop the cross?’ Follow-up 2: ‘What does this show about how much God loves us?’ If silent: draw two columns on the board — ‘Same’ and ‘Different’ — and start one each." },

      { type: "recap", id: "th-recap", title: "This Week’s Big Idea", minutes: 1.5,
        points: [
          "Faith is trusting God so much that you act on what he says — even when you can’t see how.",
          "Abraham said “Here I am”, obeyed early, and trusted that God would provide.",
          "God provided a ram for Isaac — and Jesus, the Lamb of God, for us."
        ],
        notes: "Then the Big Idea stamps in. Ask a student to say it in their own words." },

      { type: "question", id: "th-q3", title: "If he gave us Jesus…", minutes: 1.5, level: "dig", mode: "write", seconds: 45, skippable: true,
        text: "The Bible says that if God gave us Jesus, he will give us everything else we need. Why does that help us trust God with smaller worries?",
        hint: "Good answers: if God gave his very best, he won’t hold back smaller things; he has already proved how much he loves us; our worries are never too big or too small for him. Note: ‘everything we need’ isn’t ‘everything we want’. Follow-up: ‘What’s the difference between what we need and what we want?’ Follow-up 2: ‘Write one worry you could trust God with this week.’ If silent: compare a friend who gives you their whole lunch — would they refuse you a pencil?" },

      { type: "challenge", id: "th-chal", title: "This Week’s Challenge", minutes: 2,
        text: "Trust God with one worry each day. Every day this week, hand one worry to God in prayer and say, “The LORD will provide.”",
        why: "“Abraham named that place ‘The LORD Will Provide.’” — Genesis 22:14",
        head: "God provides — he even gave us Jesus.", heart: "God, I trust you with my worries.", hands: "Hand God one worry each day and say, “The LORD will provide.”",
        takeHome: true,
        notes: "Next Monday (Rahab and the spies) checks in on this. Students could keep a tally on the card." },

      { type: "verse", id: "th-verse", title: "Memory verse: fade-out", minutes: 1.5, activity: "fade",
        notes: "Fade out Hebrews 11:1. Bonus: who can explain it in their own words?" },

      { type: "scene", id: "th-scene", title: "The Lamb of God", minutes: 1, optional: true,
        art: { key: "t2w01d4-b" },
        boxes: [
          { text: "“Where is the lamb?”", pos: "tl", style: "speech" },
          { text: "“Here is the Lamb of God who takes away the sin of the world!”", pos: "br", style: "caption" }
        ] },

      { type: "prayer", id: "th-pray", title: "One-sentence prayers (out loud)", minutes: 3, mood: "calm", style: "out-loud",
        tip: "Praying Scripture back can be just one sentence. Take a Bible line, turn it towards God, and say it out loud. Short is great!",
        opening: "Let’s pray together. In the Wow and Thanks parts, anyone can pray one sentence out loud.",
        phases: [
          { name: "Wow", lead: "Pray one line from this week’s verses back to God.",
            prompts: ["You are the LORD who provides!", "You are real, and you reward everyone who searches for you!"],
            starter: "God, you are…", seconds: 45, aloud: "LORD, you are the God who provides!" },
          { name: "Sorry", lead: "Silently: have you worried about something instead of trusting God?",
            prompts: ["Sorry for worrying instead of bringing it to you.", "Sorry for forgetting that you already gave me Jesus."],
            starter: "God, I’m sorry for…", seconds: 25, aloud: "God, we’re sorry for worrying instead of trusting you." },
          { name: "Thanks", lead: "Pray John 1:29 back to Jesus, out loud:",
            prompts: ["Thank you, Jesus — you are the Lamb of God.", "Thank you for taking my place and taking away my sin."],
            starter: "Thank you, Jesus, for…", seconds: 35, aloud: "Thank you, Jesus — the Lamb of God who takes away our sin!" },
          { name: "Please", lead: "One-sentence prayers for this week’s worries — yours or a friend’s.",
            prompts: ["Please provide for my family with…", "Please help (name) trust you with…"],
            starter: "Please, God…", seconds: 40, aloud: "LORD, you will provide — help us trust you this week." }
        ],
        closing: "Let’s finish by praying Hebrews 11:1 together: ‘Faith makes us sure of what we hope for…’ Amen!",
        notes: "Model a one-sentence prayer first. Don’t force anyone to pray aloud — silent prayers count." }
    ] }
  ]
};
