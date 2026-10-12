/* Morninglight 2027 — Term 2 Week 5: Faith on the Mountain (1 Kings 17:1–16; 18). Scripture: CEV. */
window.DEVOTIONS = window.DEVOTIONS || {};
window.DEVOTIONS["Term 2"] = window.DEVOTIONS["Term 2"] || {};
window.DEVOTIONS["Term 2"]["Week 5"] = {
  lessonTitle: "Faith on the Mountain",
  passage: "1 Kings 17:1–16; 18",
  bigIdea: "The LORD alone is God — and he answers those who trust him.",
  godIs: "The Only God",
  memoryVerse: { ref: "1 Kings 18:39", text: "When the people saw this, they bowed down and shouted, “The LORD is God! The LORD is God!”", version: "CEV",
    chunks: ["When the people", "saw this,", "they bowed down", "and shouted,", "“The LORD is God!", "The LORD is God!”"],
    actions: ["Sweep one arm across — all the people", "Hands round eyes like binoculars", "Bow low from the waist", "Cup hands round mouth", "Point straight up", "Both arms up — shout it!"] },
  prayerFocus: { skill: "Persistent prayer", tip: "Elijah prayed and sent his servant to look seven times (1 Kings 18:43). Persistent prayer means keep asking and keep watching — God hears the first time, and he loves it when we don’t give up." },
  mood: "fire",
  cover: "t2w05-cover",
  characters: ["elijah", "widow"],
  coverArt: { key: "t2w05-cover", label: "Week cover", desc: "Elijah on the top of Mount Carmel with arms raised beside a stone altar as a column of fire falls from the sky, a huge crowd on the slope falling to their knees.", shot: "epic wide, low angle",
    scene: "Elijah standing on the rocky top of Mount Carmel with both arms raised beside a rough stone altar as a great column of fire falls from a dark sky onto it, a huge crowd on the slopes below falling to their knees." },
  comicArt: { key: "t2w05-comic", label: "Comic page (week opener — for the comic-page viewer, coming in a later build)", format: "portrait", desc: "Six-panel comic page of Elijah’s story, from the drought to the rain.",
    panels: "Six panels. Panel 1 (wide): Elijah pointing at King Ahab on his throne, statues of Baal behind the king. Panel 2 (small): two ravens flying down to Elijah by a creek with bread in their beaks. Panel 3 (tall): the widow pouring flour from a clay jar that is still full. Panel 4 (wide): prophets of Baal dancing wildly round an altar under a blazing empty sky. Panel 5 (wide): fire falling from heaven on Elijah's soaked altar. Panel 6 (small): a tiny cloud the size of a fist rising over the sea.", chars: ["elijah", "widow"] },

  days: [

  /* ======================= MONDAY ======================= */
  { label: "Monday", theme: "Ravens and a Jar of Flour", roleplay: true, mood: "desert",
    learningIntentions: [
      "We are learning how Elijah stood up to King Ahab and announced a drought from God.",
      "We are learning how God fed Elijah through ravens and a poor widow.",
      "I can explain how the widow showed faith before she saw the miracle."
    ],
    assessment: "Listen for students explaining why the drought showed that Baal was powerless, and how the widow trusted God’s promise by giving first.",
    resources: ["Screen", "Optional: a small jar and a bottle for the widow; black paper ‘wings’ for the ravens"],
    whereToNext: "Tomorrow: three dry years later — Elijah sets up the biggest challenge in Israel’s history.",
    slides: [
      { type: "title", id: "m-title", title: "Ravens and a Jar of Flour", minutes: 0.5, kicker: "Term 2 · Week 5", sub: "Faith on the Mountain",
        art: { key: "t2w05-cover" }, notes: "A new hero for the Faith Museum: Elijah the prophet. Let the splash play." },

      { type: "hook", id: "m-hook", title: "Who controls the weather?", minutes: 1.5,
        checkin: { text: "Last week we heard how Hannah poured out her heart to God, and how young Samuel said, “Speak, LORD, your servant is listening.” Your challenge: pray the same prayer every day. Did you keep going? What happened?" },
        text: "If you could control the weather for one day, what would you do with it?",
        ask: "Could anyone REALLY control the rain? Who does?",
        hint: "Check-in first: celebrate anyone who kept praying the same prayer — answered yet or not. Link it: ‘This week’s hero kept praying too.’ Then the hook: snow day, sunshine for sports day. Land it: ‘In Elijah’s time, people believed a god called Baal controlled the rain. The LORD was about to show them who really does.’" },

      { type: "scripture", id: "m-scr", title: "1 Kings 17:1, 6, 13–14, 16", minutes: 1, ref: "1 Kings 17:1–16", version: "CEV",
        lines: [
          { text: "Elijah… went to King Ahab and said, “I am a servant of the living LORD, the God of Israel. And I swear in his name that it won’t rain until I say so.”", ref: "1 Kings 17:1" },
          { text: "Ravens brought him bread and meat twice a day, and he drank water from the creek.", ref: "1 Kings 17:6" },
          { text: "Elijah said, “Everything will be fine… But first, make a small piece of bread and bring it to me.”", ref: "1 Kings 17:13" },
          { text: "The LORD kept the promise that his prophet Elijah had made, and she did not run out of flour or oil.", ref: "1 Kings 17:16" }
        ],
        emphasis: ["the living LORD", "it won’t rain", "Ravens", "But first", "kept the promise"],
        notes: "Verses abridged. ‘The living LORD’ is a deliberate contrast with Baal, a statue that could not see, hear or act." },

      { type: "story", id: "m-story", title: "No rain — but enough", minutes: 3, transition: "page", mood: "desert",
        beats: [
          { text: "King Ahab worshipped Baal.", caption: "A made-up god people thought sent the rain." },
          { text: "“It won’t rain until I say so!”", caption: "Elijah, servant of the living LORD.", shout: true },
          { text: "Ravens with bread and meat!", caption: "God fed Elijah by a creek — twice a day.",
            art: { key: "t2w05d1-a", label: "Mon · story beats 3–4 + stretch scene", desc: "Elijah sitting by a thin trickling creek in a rocky ravine as two big black ravens swoop down with bread and meat in their beaks.", shot: "medium wide", motion: "kenburns-in", chars: ["elijah"],
              scene: "Elijah sitting on a rock beside a thin trickling creek in a narrow rocky ravine, looking up as two big black ravens swoop down to him carrying bread and meat in their beaks, dry hills behind." } },
          { text: "The creek dried up.", caption: "“Go to Zarephath. A widow there will feed you.”" },
          { text: "One handful of flour.", caption: "She gave first — and the jar never ran out.",
            art: { key: "t2w05d1-b", label: "Mon · story beat 5 + role-play card", desc: "At a dusty town gate, a thin widow holding a bundle of sticks looks at a small clay jar in her hands while Elijah stands before her with an open hand.", shot: "medium, two-shot", motion: "kenburns-left", chars: ["elijah", "widow"],
              scene: "At the dusty stone gate of a small town, a thin widow holding a bundle of sticks looks down at a small clay jar in her hands while Elijah stands before her with one open hand, a little boy peeking from behind her robe." } }
        ],
        narration: "Israel had a king called Ahab, and the Bible says he did more wrong than any king before him. He married a princess named Jezebel, and together they led God’s people to worship Baal. Baal was a made-up god. People believed he sent the rain and the storms and made the crops grow. They built him statues and altars, and they forgot the LORD — the real God who had rescued them from Egypt.\n\nThen one day a wild-looking man strode into the palace. His name was Elijah, and he was a prophet — someone who carries God’s messages. Even his name was a message: Elijah means ‘My God is the LORD’.\n\nElijah looked the king in the eye. ‘I am a servant of the living LORD, the God of Israel. And I swear in his name that it won’t rain until I say so.’\n\nPeople thought Baal was in charge of the sky. Now the LORD would show who really was.\n\nThe rain stopped. Ahab was furious, so God sent Elijah to hide beside a little creek out in the wild. ‘Drink from the creek,’ God said, ‘and I have told the ravens to bring you food.’ Ravens! Big black birds that usually steal food, not share it. But every morning and every evening, they flapped down with bread and meat.\n\nWith no rain, even the creek dried up. Drip… drip… nothing. So God said, ‘Go to Zarephath. I have told a widow there to feed you.’ A widow is a woman whose husband has died. And Zarephath was in Jezebel’s home country — Baal country!\n\nAt the town gate, Elijah saw a thin woman picking up sticks. ‘Please bring me some water,’ he called, ‘and a piece of bread.’\n\n‘I don’t have any bread,’ she said. ‘Just a handful of flour and a little oil. I’m cooking one last meal for my son and me. After that, we will starve.’\n\nElijah said, ‘Everything will be fine. But first, make a small piece of bread for me. The LORD has promised that your flour won’t run out and your oil won’t dry up until he sends rain.’\n\nHer last handful — given away first? But she trusted God’s word, and she did it. And day after day, the jar never ran out.",
        notes: "About 3 minutes. Ahab’s wickedness: 1 Kings 16:30–33. Baal was worshipped as a storm-and-rain god, so a drought was a direct challenge to him. Zarephath was near Sidon, Jezebel’s home (16:31). The raising of the widow’s son (17:17–24) is outside this week’s passage; mention it only if asked." },

      { type: "question", id: "m-q1", title: "Bird delivery", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "How did God feed Elijah while he hid by the creek?",
        options: ["He caught fish", "Ravens brought him bread and meat", "King Ahab sent him food", "Manna fell from the sky"], answer: 1,
        hint: "Answer: B (1 Kings 17:6) — twice a day, morning and evening. Follow-up: ‘Why is it surprising that ravens shared food?’ (Ravens usually steal food!) Follow-up 2: ‘When the creek dried up, where did God send Elijah next?’ (To a widow in Zarephath.) If silent: re-read the second scripture line." },

      { type: "question", id: "m-q2", title: "Who sends rain?", minutes: 1.5, level: "think", mode: "pair", seconds: 45, skippable: true,
        text: "The people thought Baal sent the rain. Why do you think God chose to stop the rain — and not some other miracle?",
        hint: "Good answers: to show Baal had no power over the very thing he was supposed to control; to show the LORD is the real God of the sky; to call the people back to him. Follow-up: ‘How long would it take people to notice Baal wasn’t helping?’ Follow-up 2: ‘What do people today trust instead of God?’ (Money, luck, being popular.) If silent: ‘If your “weather god” couldn’t make it rain for three years, what would you start to think?’" },

      { type: "roleplay", id: "m-rp", title: "Ravens and a Jar of Flour", minutes: 5, ref: "1 Kings 17:1–16",
        art: { key: "t2w05d1-b" },
        imagined: "Elijah’s, God’s and the widow’s main words follow 1 Kings 17 (CEV, slightly shortened). Ahab’s lines and the son’s lines are imagined.",
        actions: ["Everyone: a hot, dry wind", "Everyone (as ravens): ‘Caw! Caw!’ and flapping arms", "Everyone: the creek going drip… drip… silent"],
        props: ["Optional: a small jar and a bottle", "Optional: a few sticks for the widow"],
        characters: [
          { name: "Narrator", color: "#F2C77B", desc: "Tells the story" },
          { name: "Elijah", color: "#E57373", desc: "Fearless prophet of the LORD — wild hair, rough cloak" },
          { name: "Ahab", color: "#9575CD", desc: "Proud king who worships Baal" },
          { name: "The LORD", voice: true, desc: "Heard, never seen" },
          { name: "Widow", color: "#7BA7D9", desc: "Poor mother in Zarephath — worried, then trusting" },
          { name: "Son", color: "#8BC34A", desc: "The widow’s hungry little boy" },
          { name: "Everyone", color: "#FFFFFF", desc: "Dry wind, ravens, and the dripping creek" }
        ],
        lines: [
          { character: "Narrator", text: "King Ahab’s palace. Statues of Baal stand everywhere.", direction: true },
          { character: "Ahab", text: "More offerings for Baal! He’ll keep the rain coming.", action: "lounging on the throne" },
          { character: "Narrator", text: "Suddenly, a wild-looking man strides in." },
          { character: "Elijah", text: "I am a servant of the living LORD, the God of Israel.", action: "point to the sky" },
          { character: "Elijah", text: "And I swear in his name that it won’t rain until I say so." },
          { character: "Ahab", text: "What?! Guards — grab him!", action: "leap up" },
          { character: "Narrator", text: "But Elijah was gone. And the rain stopped." },
          { character: "Everyone", text: "Whoooosh… hot, dusty wind…", action: "blow softly" },
          { character: "The LORD", text: "Elijah, hide by the creek. Drink its water. I have told the ravens to bring you food." },
          { character: "Everyone", text: "Caw! Caw! Caw!", action: "flap your arms — ravens!" },
          { character: "Elijah", text: "Bread and meat — morning and evening! Thank you, LORD!", action: "catch the food" },
          { character: "Narrator", text: "But with no rain, even the creek dried up." },
          { character: "Everyone", text: "Drip… drip… drip…", action: "quieter and quieter, then silence" },
          { character: "The LORD", text: "Go to Zarephath. I have told a widow there to give you food." },
          { character: "Narrator", text: "The town gate of Zarephath. A thin woman is picking up sticks.", direction: true },
          { character: "Elijah", text: "Please bring me a drink of water — and a piece of bread." },
          { character: "Widow", text: "I don’t have any bread. Only a handful of flour and a little olive oil.", action: "hold up the jar" },
          { character: "Widow", text: "I’m cooking one last meal for my son and me. After that, there’s nothing." },
          { character: "Son", text: "Mum… I’m so hungry.", action: "tug her sleeve" },
          { character: "Elijah", text: "Everything will be fine. Go and cook. But first, make a small piece of bread for me." },
          { character: "Widow", text: "For YOU? First?!", action: "shocked" },
          { character: "Elijah", text: "The LORD has promised: your flour won’t run out and your oil won’t dry up until he sends rain." },
          { pause: "Freeze! She has one handful of flour left. Would you give it away first? What would help you trust God’s promise?", seconds: 20 },
          { character: "Widow", text: "All right. I’ll trust the God of Israel.", action: "deep breath" },
          { character: "Narrator", text: "She baked the bread for Elijah. Then she looked in the jar…" },
          { character: "Son", text: "Mum! There’s still flour in it!", action: "peek into the jar" },
          { character: "Widow", text: "And oil in the bottle! Again!", action: "amazed" },
          { character: "Narrator", text: "Day after day, the jar never ran out. The LORD kept his promise." },
          { character: "Everyone", text: "The LORD keeps his promises!" }
        ],
        debrief: [
          { level: "think", text: "God fed Elijah with ravens and a poor widow — not a rich king. What does that show about God?", hint: "He can use anything and anyone; he looks after his people; he doesn’t need Baal or Ahab; he cares for the poor and for outsiders (the widow wasn’t even an Israelite). Jesus mentions her in Luke 4:25–26." },
          { level: "look", text: "What did the widow have to do BEFORE she saw the miracle?", hint: "Make bread for Elijah first, with her last flour — she trusted God’s promise before she could see it. That’s faith (Hebrews 11:1)." }
        ],
        notes: "Keep the ‘starve’ line calm and simple; the point is God’s care. If students have experienced hunger or hardship, emphasise that God sees and cares for people who have little." },

      { type: "question", id: "m-q3", title: "Giving first", minutes: 1, level: "dig", mode: "discuss", seconds: 40,
        text: "Was it fair of Elijah to ask a starving widow to feed HIM first? Why do you think God asked her to give before she saw the miracle?",
        hint: "Let them disagree! Draw out: it sounded unfair, but it came with God’s promise; giving first was how she showed faith; the miracle fed all three of them for a long time. Follow-up: ‘What would have happened if she had said no?’ Follow-up 2: ‘When is it hard for you to give first — time, snacks, turns?’ If silent: re-read 1 Kings 17:13–14 and ask what she was really trusting — Elijah or God?" },

      { type: "apply", id: "m-apply", title: "Head · Heart · Hands", minutes: 1,
        head: "The LORD is the living God who sees and provides — even in a drought.",
        heart: "God, I want to trust you like the widow did, even when I only have a little.",
        hands: "Give first this week: at lunch or at home, share your ‘last handful’ — a snack, a turn, your time — before anyone asks.",
        settings: ["home", "school", "playground"],
        notes: "Ask for one example of a ‘last handful’ they could give today." },

      { type: "scene", id: "m-scene", title: "Caw!", minutes: 0.5, optional: true,
        art: { key: "t2w05d1-a" },
        boxes: [
          { text: "Caw! Caw!", pos: "tr", style: "shout" },
          { text: "“I have told the ravens to bring you food.”", pos: "bl", style: "caption" }
        ] },

      { type: "verse", id: "m-verse", title: "Memory verse peek", minutes: 1, optional: true, activity: "echo",
        notes: "Introduce 1 Kings 18:39. ‘We’ll find out on Wednesday what the people SAW that made them shout this!’" },

      { type: "prayer", id: "m-pray", title: "Open hands (like the widow)", minutes: 3, mood: "calm", style: "hands",
        tip: "This week’s prayer skill is persistent prayer — keep asking, keep trusting. Today, pray with open hands, like the widow holding out her last handful to God.",
        opening: "Hold your hands open on your lap, palms up. Open hands say, ‘God, everything I have is yours.’ Breathe in… and out.",
        phases: [
          { name: "Wow", lead: "The LORD is the living God — not a statue.",
            prompts: ["Wow, God, you control the rain and the sky.", "You even told ravens what to do!"],
            starter: "Wow, God, you…", seconds: 35, aloud: "Wow, God — you are the living God, and you rule the sky!" },
          { name: "Sorry", lead: "Is there something you trust more than God — or keep for yourself?",
            prompts: ["Sorry for hanging on to things instead of sharing.", "Sorry for trusting other things more than you."],
            starter: "God, I’m sorry for…", seconds: 30, aloud: "God, we’re sorry for trusting other things more than you." },
          { name: "Thanks", lead: "Thank God for the ‘jar of flour’ he gives you every day.",
            prompts: ["Thank you for food in my lunchbox today.", "Thank you that you looked after Elijah and the widow."],
            starter: "Thank you, God, for…", seconds: 30, aloud: "Thank you, God, that you always provide!" },
          { name: "Please", lead: "Pray for people who are running out — of food, money or hope.",
            prompts: ["Please provide for families who don’t have enough.", "Please help me give first, like the widow."],
            starter: "Please, God, help…", seconds: 35, aloud: "Please, God, provide for everyone who is running out today." }
        ],
        closing: "Close your hands gently, as if God has filled them. Everyone: Amen.",
        notes: "Be sensitive: some students’ families may be struggling. Keep the ‘running out’ prayer general and hopeful." }
    ] },

  /* ======================= TUESDAY ======================= */
  { label: "Tuesday", theme: "The Challenge Is Set", roleplay: false, mood: "desert",
    learningIntentions: [
      "We are learning how Elijah challenged Ahab and the prophets of Baal on Mount Carmel.",
      "We are learning what it means to ‘have things both ways’ instead of following the LORD.",
      "I can explain the rules of the contest and why it would prove who the real God is."
    ],
    assessment: "Listen for students explaining the contest (two bulls, no fire, the god who answers with fire is God) and why the people couldn’t keep following both Baal and the LORD.",
    resources: ["Screen", "Optional: a fork in the road drawn on the board"],
    whereToNext: "Tomorrow: the contest begins. Will Baal answer — or the LORD?",
    slides: [
      { type: "title", id: "t-title", title: "The Challenge Is Set", minutes: 0.5, kicker: "Term 2 · Week 5", sub: "Faith on the Mountain",
        art: { key: "t2w05d2-b" }, notes: "Let the splash play." },

      { type: "hook", id: "t-recap", title: "Recap", minutes: 1, style: "recap",
        text: "Yesterday the rain stopped — and God fed Elijah in surprising ways.",
        ask: "Who brought Elijah food — twice? And what never ran out?",
        hint: "The ravens, then the widow of Zarephath. Her jar of flour and bottle of oil never ran out. ‘Now it’s been three years with no rain. The whole land is brown and dusty — and Elijah is about to go straight back to the king.’" },

      { type: "scripture", id: "t-scr", title: "1 Kings 18:17–18, 21, 24", minutes: 1, ref: "1 Kings 18:1–24", version: "CEV",
        lines: [
          { text: "When Ahab saw Elijah, he shouted, “There you are, the biggest troublemaker in Israel!”", ref: "1 Kings 18:17" },
          { text: "Elijah answered: “You’re the troublemaker—not me! You and your family have disobeyed the LORD’s commands by worshiping Baal.”", ref: "1 Kings 18:18" },
          { text: "“How much longer will you try to have things both ways? If the LORD is God, worship him! But if Baal is God, worship him!” The people did not say a word.", ref: "1 Kings 18:21" },
          { text: "“The one who answers by starting the fire is God.” Everyone agreed.", ref: "1 Kings 18:24" }
        ],
        emphasis: ["troublemaker", "both ways", "If the LORD is God, worship him!", "did not say a word", "starting the fire"],
        notes: "Verses abridged; the CEV’s ‘worshiping’ keeps its US spelling on screen. ‘Have things both ways’ — other versions say ‘waver between two opinions’ or ‘limp between two sides’." },

      { type: "story", id: "t-story", title: "Showdown on Carmel", minutes: 3.5, transition: "page",
        beats: [
          { text: "Three years. No rain.", caption: "Brown fields. Empty rivers. Hungry animals." },
          { text: "“There you are, troublemaker!”", caption: "“You’re the troublemaker — not me!”", shout: true,
            art: { key: "t2w05d2-a", label: "Tue · story beats 2–3", desc: "King Ahab in his chariot on a parched cracked road, glaring and pointing at Elijah, who stands in the dust facing him without fear.", shot: "wide, tense", motion: "kenburns-right", chars: ["elijah"],
              scene: "King Ahab in a royal robe and crown standing in his chariot on a parched cracked road, glaring and pointing at Elijah, who stands in the dust facing him without fear, dead brown fields all around." } },
          { text: "Everyone to Mount Carmel!", caption: "All Israel — and 450 prophets of Baal." },
          { text: "“How much longer will you try to have things both ways?”", caption: "The people didn’t say a word.",
            art: { key: "t2w05d2-b", label: "Tue · title + story beats 4–5 + stretch scene", desc: "A vast silent crowd on the slopes of Mount Carmel facing Elijah, who stands alone on a rock; on the other side hundreds of robed prophets of Baal, the sea far behind.", shot: "epic wide", motion: "kenburns-out", chars: ["elijah"],
              scene: "A vast silent crowd on the rocky slopes of Mount Carmel facing Elijah, who stands alone on a high rock with one arm raised; opposite him hundreds of robed prophets of Baal with tall hats, and the sea far behind under a cloudless sky." } },
          { text: "The rules: no fire allowed.", caption: "“The one who answers by starting the fire is God.”" }
        ],
        narration: "Three years went by. Three whole years with no rain. The rivers became dry, cracked mud. The crops died. The animals grew thin. Everyone was hungry and thirsty — and still the people prayed to Baal, and still Baal did nothing.\n\nThen the LORD spoke to Elijah: ‘Go and meet King Ahab. I will soon send rain.’\n\nNow, Queen Jezebel had been hunting down the LORD’s prophets. But a man named Obadiah, who worked in the palace and loved the LORD, had secretly hidden one hundred of them in caves and brought them bread and water. When Obadiah met Elijah on the road, he was terrified: ‘If you disappear again, the king will blame me!’ But Elijah said, ‘I promise — today I will meet Ahab.’\n\nSo the king and the prophet came face to face. Ahab sneered, ‘There you are, the biggest troublemaker in Israel!’\n\nElijah didn’t back down. ‘You’re the troublemaker — not me! You have disobeyed the LORD and worshipped Baal.’ Then he gave the king an order: ‘Bring all the people to Mount Carmel. And bring the four hundred and fifty prophets of Baal.’\n\nSo they came. Thousands and thousands of people climbed the mountain. The prophets of Baal marched up in their fancy robes. And on the other side stood just one man: Elijah.\n\nElijah turned to the crowd. ‘How much longer will you try to have things both ways? If the LORD is God, worship him! But if Baal is God, worship him!’\n\nSilence. Not one person said a word. They wanted to keep a bit of the LORD and a bit of Baal — like trying to walk down two roads at the same time.\n\nSo Elijah set up a test. ‘Bring two bulls. The prophets of Baal can prepare one and put it on the wood. I’ll prepare the other one. But nobody lights a fire! Then each side will pray to its god. The one who answers by starting the fire is God.’\n\nThink about that. Baal was supposed to be the god of storms and lightning. Fire from the sky should be easy for him! Elijah was letting Baal play on his home ground. And there were four hundred and fifty of them — and only one of Elijah.\n\nThe people looked at each other. Then they shouted, ‘That’s a good idea!’ Everyone agreed.\n\nThe bulls were brought. The wood was piled up. The whole mountain held its breath. Who would answer — Baal, or the LORD?",
        notes: "About 3½ minutes. Obadiah (18:3–16) is summarised; Jezebel’s attacks on the prophets are implied, not described. The animal sacrifice was the normal way of worship then — explain simply that offerings were given to God (or gods) on an altar, and Jesus later became the final sacrifice, so we don’t need to do this now." },

      { type: "dig", id: "t-dig", title: "Baal vs the LORD", minutes: 2,
        prompt: "Look closer: what did people believe about Baal — and what was really true?",
        columns: ["What people believed about Baal", "What was really true"],
        items: [
          { left: "Baal sends rain and storms", right: "No rain for three years — Baal did nothing" },
          { left: "Baal throws lightning — fire is easy for him", right: "The contest would be about fire!" },
          { left: "450 prophets must be right", right: "Being popular doesn’t make something true" },
          { left: "You can follow Baal AND the LORD", right: "“If the LORD is God, worship him!”" }
        ],
        reveal: "There is only one true God — and he can’t be shared with anything else.",
        notes: "Reveal row by row. Baal was worshipped as a storm god, often shown holding a thunderbolt." },

      { type: "question", id: "t-q1", title: "The rules", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "What were the rules of Elijah’s contest?",
        options: ["The fastest runner wins", "Pray — and the god who answers with fire is God", "Whoever has more prophets wins", "Make it rain first"], answer: 1,
        hint: "Answer: B (1 Kings 18:23–24). Two bulls, two piles of wood, no one lights the fire. Follow-up: ‘Why do you think Elijah let the prophets of Baal choose their bull and go first?’ Follow-up 2: ‘How many prophets did Baal have — and how many did the LORD have on the mountain?’ (450 vs one.) If silent: re-read the last scripture line." },

      { type: "question", id: "t-q2", title: "Both ways", minutes: 1.5, level: "think", mode: "pair", seconds: 45,
        text: "Elijah asked, “How much longer will you try to have things both ways?” What did he mean — and why did the people stay silent?",
        hint: "Good answers: they wanted the LORD AND Baal, just in case; they didn’t want to choose; they were scared of the king and queen; they knew Elijah was right but didn’t want to admit it. Follow-up: ‘Can you follow two leaders who want opposite things?’ Follow-up 2: ‘What might “both ways” look like for a kid today?’ (Praying on Sunday but being unkind all week; trusting luck charms.) If silent: draw a fork in the road and ask someone to walk down both paths at once." },

      { type: "question", id: "t-q3", title: "One against 450", minutes: 1.5, level: "dig", mode: "vote", seconds: 30, skippable: true,
        options: ["Brave", "Foolish", "Trusting God"],
        text: "Elijah stood alone against 450 prophets, an angry king and a silent crowd. Was he brave, foolish — or something else? Vote, then explain.",
        hint: "Expect a mix. Draw out: it wasn’t about Elijah being tough — he was trusting God’s word (‘I will soon send rain’). Faith isn’t the same as showing off. Follow-up: ‘What made Elijah so sure?’ (God had kept his word about the drought and the jar of flour.) Follow-up 2: ‘When might you be the only one standing up for what’s right?’ If silent: ask, ‘Who was really on Elijah’s side?’" },

      { type: "apply", id: "t-apply", title: "Head · Heart · Hands", minutes: 2,
        head: "The LORD is the only true God — we can’t follow him ‘both ways’.",
        heart: "God, I don’t want to sit on the fence. I choose you.",
        hands: "Notice one ‘both ways’ moment this week — like being kind to a friend’s face and mean behind their back — and choose the LORD’s way instead.",
        settings: ["school", "group chat", "home"],
        notes: "This leads into today’s written prayer." },

      { type: "scene", id: "t-scene", title: "Choose!", minutes: 1, optional: true,
        art: { key: "t2w05d2-b" },
        boxes: [
          { text: "“If the LORD is God, worship him!”", pos: "tl", style: "speech" },
          { text: "The people did not say a word.", pos: "br", style: "caption" }
        ] },

      { type: "verse", id: "t-verse", title: "Build the verse", minutes: 1, activity: "build",
        notes: "Build 1 Kings 18:39 with the actions." },

      { type: "prayer", id: "t-pray", title: "A written ‘I choose you’ prayer", minutes: 3, mood: "calm", style: "write",
        tip: "Persistent prayer is easier when you write it down — then you can pray it again tomorrow, and the next day, like Elijah who kept praying for rain.",
        opening: "On your paper, write at the top: ‘LORD, you are God.’ We’ll add a line for each part.",
        phases: [
          { name: "Wow", lead: "Write one line about why the LORD is the only real God.",
            prompts: ["You are the living God — Baal is just a statue.", "You hold back the rain and send it again."],
            starter: "LORD, you are…", seconds: 40, aloud: "LORD, you are the only true God!" },
          { name: "Sorry", lead: "Silently: where have you tried to have things ‘both ways’?",
            prompts: ["Sorry for saying I follow you but not living it.", "Sorry for staying silent when I should have spoken up."],
            starter: "Sorry for…", seconds: 25, aloud: "LORD, we’re sorry for sitting on the fence." },
          { name: "Thanks", lead: "Write a thank you for someone who stood up for God — like Obadiah or Elijah.",
            prompts: ["Thank you for people who hid and fed your prophets.", "Thank you for brave people in my life who follow you."],
            starter: "Thank you for…", seconds: 35, aloud: "Thank you, God, for brave people who follow you." },
          { name: "Please", lead: "Write one thing you will keep praying about all week.",
            prompts: ["Please help me choose you every day.", "Please send ‘rain’ on a dry situation I know about."],
            starter: "Please…", seconds: 40, aloud: "Please, God, help us choose you — every day." }
        ],
        closing: "Fold your paper and keep it. Pray it again tomorrow — that’s persistent prayer! Amen.",
        notes: "Students will reuse these papers on Thursday. Collect them if they might get lost." }
    ] },

  /* ======================= WEDNESDAY ======================= */
  { label: "Wednesday", theme: "Fire Falls", roleplay: true, mood: "fire",
    learningIntentions: [
      "We are learning how Baal failed to answer and how the LORD answered Elijah with fire.",
      "We are learning why Elijah soaked his altar with water before he prayed.",
      "I can explain what the people learned when they shouted, “The LORD is God!”"
    ],
    assessment: "Listen for students contrasting the noisy, endless prayers to Baal with Elijah’s short, trusting prayer, and explaining that the fire showed the LORD alone is God.",
    resources: ["Screen", "Optional: an empty jug for ‘pouring’ water; red and orange scarves for fire"],
    whereToNext: "Tomorrow: Elijah climbs back up the mountain to pray for rain — seven times.",
    slides: [
      { type: "title", id: "w-title", title: "Fire Falls", minutes: 0.5, kicker: "Term 2 · Week 5", sub: "Faith on the Mountain",
        art: { key: "t2w05d3-b" }, notes: "The big day! Let the splash play." },

      { type: "hook", id: "w-hook", title: "Make it harder", minutes: 1,
        text: "If you wanted to prove you could do something amazing, would you make it EASIER or HARDER for yourself?",
        ask: "Why would anyone make it harder on purpose?",
        hint: "Take ideas: blindfold tricks, one-handed catches — so nobody can say it was luck or a trick. Recap quickly: two bulls, no fire, 450 prophets vs one. Land it: ‘Today Elijah makes it MUCH harder — on purpose. Watch why.’" },

      { type: "scripture", id: "w-scr", title: "1 Kings 18:26, 36–38", minutes: 1, ref: "1 Kings 18:25–39", version: "CEV",
        lines: [
          { text: "They prayed to Baal all morning, asking him to answer them. They danced around the altar and shouted, “Answer us, Baal!” But there was no answer.", ref: "1 Kings 18:26" },
          { text: "Elijah prayed: “Our LORD, you are the God of Abraham, Isaac, and Israel.”", ref: "1 Kings 18:36" },
          { text: "“Please answer me, so these people will know that you are the LORD God, and that you will turn their hearts back to you.”", ref: "1 Kings 18:37" },
          { text: "The LORD immediately sent fire, and it burned up the sacrifice, the wood, and the stones. It scorched the ground everywhere around the altar and dried up the water in the ditch.", ref: "1 Kings 18:38" }
        ],
        emphasis: ["Answer us, Baal!", "no answer", "Please answer me", "turn their hearts back", "immediately sent fire"],
        notes: "Verses abridged. Notice how short Elijah’s prayer is compared with a whole day of shouting." },

      { type: "story", id: "w-story", title: "The fire of the LORD", minutes: 3, transition: "page", mood: "fire",
        beats: [
          { text: "“Answer us, Baal!”", caption: "They danced and shouted all morning.",
            art: { key: "t2w05d3-a", label: "Wed · story beats 1–2 + stretch scene", desc: "Prophets of Baal in robes dancing wildly and shouting round a stone altar with an unlit pile of wood and an offering on it, under a blazing empty midday sky, Elijah watching from a rock with folded arms.", shot: "wide, high sun", motion: "kenburns-left", chars: ["elijah"],
              scene: "Dozens of prophets of Baal in long robes and tall hats dancing wildly and shouting with arms flung up round a stone altar with an unlit pile of wood and an offering on it, under a blazing empty midday sky, Elijah watching calmly from a rock with folded arms." } },
          { text: "No answer. No voice. Nothing.", caption: "Nobody was listening." },
          { text: "Twelve stones. A ditch. Water — three times!", caption: "Elijah made it impossible on purpose.", shout: true },
          { text: "A short, simple prayer.", caption: "“Please answer me, so these people will know…”" },
          { text: "FIRE!", caption: "The people fell down: “The LORD is God!”",
            art: { key: "t2w05d3-b", label: "Wed · title + story beat 5 + role-play card", desc: "A blinding column of fire crashing down from the sky onto Elijah’s soaked stone altar, steam bursting from the ditch, Elijah kneeling with arms raised, the crowd thrown flat on the ground.", shot: "dramatic, low angle", motion: "kenburns-up", chars: ["elijah"],
              scene: "A blinding column of fire crashing down from the sky onto a soaked altar of twelve rough stones, steam bursting up from the water-filled ditch around it, Elijah kneeling with arms raised, and the crowd thrown flat on the ground in awe." } }
        ],
        narration: "The prophets of Baal went first. They prepared their bull, laid it on the wood, and began to pray. ‘Answer us, Baal! Answer us, Baal!’ All morning they danced around the altar and shouted.\n\nNothing happened.\n\nBy midday, Elijah couldn’t help himself. ‘Pray louder!’ he said. ‘Baal must be a god! Maybe he’s daydreaming. Maybe he’s gone on a trip. Or maybe he’s asleep and you have to wake him up!’\n\nSo they shouted even louder. They did all sorts of wild things to get Baal’s attention. They kept going all afternoon — hour after hour after hour.\n\nBut there was no answer. No voice. Nobody was listening. Because Baal wasn’t real.\n\nThen Elijah called out, ‘Everyone, come over here.’ The people crowded round. The LORD’s old altar had been smashed, so Elijah rebuilt it with twelve stones — one for each of the twelve tribes of Israel, to remind them they were all God’s people. He dug a ditch around it. He put the wood and the offering on top.\n\nThen he said something strange. ‘Fill four big jars with water and pour it over the offering and the wood.’ Water? In a drought? They poured it. ‘Do it again!’ They did. ‘Do it a third time!’ Water ran down the stones and filled the ditch. Now nobody could ever say it was a trick.\n\nIt was time for the evening offering. Elijah didn’t dance. He didn’t shout all day. He stepped forward and prayed a short, simple prayer:\n\n‘Our LORD, you are the God of Abraham, Isaac, and Israel. Now prove that you are the God of this nation, and that I am your servant. Please answer me, so these people will know that you are the LORD God, and that you will turn their hearts back to you.’\n\nAnd the LORD immediately sent fire! It blazed down from the sky and burned up the offering, the wood — even the stones! It scorched the ground and dried up every drop of water in the ditch.\n\nThe people fell flat on their faces and shouted, ‘The LORD is God! The LORD is God!’\n\nBaal never answered. The LORD answered the first time.",
        notes: "About 3 minutes. 18:28 says the prophets of Baal cut themselves — we say ‘wild things’; explain gently only if asked. 18:40 records that the prophets of Baal were put to death; this is not told here. If a student knows it, say: ‘They had led a whole nation away from God and harmed God’s people. The Bible is honest about this hard part — but today we focus on what God showed about himself.’" },

      { type: "question", id: "w-q1", title: "Three times", minutes: 1, level: "look", mode: "finish", seconds: 20,
        text: "Finish the sentence: “Elijah told them to pour water over the offering and the wood… ”",
        reveal: "“…three times — until the ditch was full!” (1 Kings 18:33–35)",
        hint: "Follow-up: ‘How many stones did Elijah use, and why?’ (Twelve — one for each tribe of Israel.) Follow-up 2: ‘What happened to the water when the fire fell?’ (It dried up — even in the ditch.) If silent: point to the third story beat and re-read it." },

      { type: "roleplay", id: "w-rp", title: "Fire Falls on Carmel", minutes: 5, ref: "1 Kings 18:25–39",
        art: { key: "t2w05d3-b" },
        imagined: "Elijah’s prayer and the people’s shout are from 1 Kings 18 (CEV). The prophets’ and Ahab’s individual lines are imagined; the Bible tells us they shouted, ‘Answer us, Baal!’",
        actions: ["Everyone (as the crowd): chanting ‘Answer us, Baal!’, getting louder", "Everyone: ‘Splash!’ as the water is poured", "Everyone: ‘WHOOSH!’ as the fire falls, then bow low"],
        props: ["Optional: an empty jug for pouring", "Optional: red and orange scarves for the fire"],
        characters: [
          { name: "Narrator", color: "#F2C77B", desc: "Tells the story" },
          { name: "Elijah", color: "#E57373", desc: "Calm, confident, a bit cheeky" },
          { name: "Baal Prophet 1", color: "#FFB547", desc: "Proud and loud — at first" },
          { name: "Baal Prophet 2", color: "#4DB6AC", desc: "Getting more and more desperate" },
          { name: "Ahab", color: "#9575CD", desc: "The king, watching — and doubting" },
          { name: "Everyone", color: "#FFFFFF", desc: "The huge crowd on Mount Carmel" }
        ],
        lines: [
          { character: "Narrator", text: "Mount Carmel. Morning. Thousands of people. Two piles of wood. No fire.", direction: true },
          { character: "Elijah", text: "Prophets of Baal, you go first. Pray to your god. But don’t light the fire!" },
          { character: "Baal Prophet 1", text: "Easy! Baal is the god of storms. Fire from the sky is his speciality!", action: "swagger" },
          { character: "Baal Prophet 2", text: "Answer us, Baal!", action: "start dancing round" },
          { character: "Everyone", text: "Answer us, Baal! Answer us, Baal!", action: "chant, getting louder" },
          { character: "Narrator", text: "All morning they danced and shouted. Nothing happened." },
          { character: "Elijah", text: "Pray louder! Maybe Baal is daydreaming. Or away on a trip. Or asleep — wake him up!", action: "hands cupped, teasing" },
          { character: "Baal Prophet 2", text: "BAAAAL! WAKE UP!", action: "shout at the sky" },
          { character: "Narrator", text: "They shouted until evening. But there was no answer. No one was listening." },
          { character: "Baal Prophet 1", text: "Why… isn’t… he… answering?", action: "flop down, exhausted" },
          { character: "Elijah", text: "Everyone, come over here.", action: "wave the crowd closer" },
          { character: "Narrator", text: "Elijah rebuilt the LORD’s altar with twelve stones and dug a ditch around it." },
          { character: "Elijah", text: "Fill four big jars with water. Pour it on the offering and the wood!" },
          { character: "Everyone", text: "Splash!", action: "pour" },
          { character: "Elijah", text: "Do it again!" },
          { character: "Everyone", text: "SPLASH!", action: "pour" },
          { character: "Elijah", text: "And one more time!" },
          { character: "Everyone", text: "SPLAAASH!", action: "biggest pour yet" },
          { character: "Ahab", text: "Has he gone mad? Now it will NEVER burn!", action: "shake head" },
          { pause: "Freeze! Why would Elijah make it HARDER for the fire to start? What is he trusting?", seconds: 20 },
          { character: "Elijah", text: "Our LORD, you are the God of Abraham, Isaac, and Israel.", action: "kneel, calm voice" },
          { character: "Elijah", text: "Please answer me, so these people will know that you are the LORD God." },
          { character: "Elijah", text: "And that you will turn their hearts back to you." },
          { character: "Narrator", text: "The LORD immediately sent fire!" },
          { character: "Everyone", text: "WHOOOOOSH!", action: "arms shoot up — fire falls!" },
          { character: "Narrator", text: "It burned up the offering, the wood, the stones — and dried up the water in the ditch!" },
          { character: "Baal Prophet 2", text: "The stones… the stones are gone!", action: "back away, amazed" },
          { character: "Everyone", text: "The LORD is God! The LORD is God!", action: "bow down low" },
          { character: "Elijah", text: "There is only one God. Turn your hearts back to him!" }
        ],
        debrief: [
          { level: "think", text: "Compare the two ways of praying. What was different about Elijah’s prayer?", hint: "Baal’s prophets: loud, long, all day, desperate — to a god who wasn’t there. Elijah: short, calm, trusting, all about God’s name and the people’s hearts. Jesus said we aren’t heard because of many words (Matthew 6:7–8)." },
          { level: "look", text: "What did the people do and say when the fire fell?", hint: "They bowed down and shouted, ‘The LORD is God! The LORD is God!’ — our memory verse (18:39)." }
        ],
        notes: "Let the crowd be LOUD for Baal, then very quiet for Elijah’s prayer — the contrast is the point. Keep the teasing light-hearted. The prophets’ self-harm (18:28) and their deaths (18:40) are left out." },

      { type: "question", id: "w-q2", title: "Why the fire?", minutes: 1.5, level: "think", mode: "pair", seconds: 45,
        text: "Elijah prayed “so these people will know that you are the LORD God.” Who was the fire really for?",
        hint: "Good answers: for the people, not for Elijah’s fame; so they would stop sitting on the fence; so their hearts would turn back to God; to show God is real and listens. Follow-up: ‘What did Elijah NOT ask for?’ (To be famous, or for Ahab to be punished.) Follow-up 2: ‘What do you hope people will learn about God when he answers YOUR prayers?’ If silent: re-read 18:37 slowly and ask, ‘Whose name is Elijah thinking about?’" },

      { type: "question", id: "w-q3", title: "Fire today?", minutes: 1, level: "dig", mode: "discuss", seconds: 40, skippable: true,
        text: "God doesn’t usually send fire from the sky today. How has God shown people that he is the one true God?",
        hint: "Ideas: in Jesus — God came himself; Jesus’ miracles; above all, Jesus rising from the dead; the Bible; answered prayers; changed lives. Interesting link: Elijah appears with Jesus on a mountain in Luke 9:28–36, and God says, ‘This is my chosen Son. Listen to what he says!’ Follow-up: ‘What “fire” would convince you?’ Follow-up 2: ‘Why might God want faith instead of fire every day?’ If silent: ask, ‘What is the biggest thing God has ever done to prove he loves us?’" },

      { type: "apply", id: "w-apply", title: "Head · Heart · Hands", minutes: 1,
        head: "The LORD alone is God — and he answers prayer.",
        heart: "LORD, you are God. Turn my heart back to you.",
        hands: "Pray a short, Elijah-style prayer before something hard this week — a test, a game, a tricky conversation: ‘LORD, show that you are God.’",
        settings: ["school", "sport", "home"],
        notes: "Model a 15-word prayer. Short and trusting beats long and showy." },

      { type: "scene", id: "w-scene", title: "No answer", minutes: 0.5, optional: true,
        art: { key: "t2w05d3-a" },
        boxes: [
          { text: "“Answer us, Baal!”", pos: "tl", style: "shout" },
          { text: "But there was no answer.", pos: "br", style: "caption" }
        ] },

      { type: "verse", id: "w-verse", title: "Verse with actions", minutes: 1, optional: true, activity: "actions",
        notes: "Actions for 1 Kings 18:39 — now everyone knows what the people SAW!" },

      { type: "prayer", id: "w-pray", title: "One-sentence prayers (out loud)", minutes: 3, mood: "calm", style: "out-loud",
        tip: "Elijah’s prayer took less than a minute — and God answered! Today anyone can pray one short sentence out loud. Short prayers are real prayers.",
        opening: "Let’s pray together. In each part, anyone who wants to can pray one short sentence out loud. Then we’ll say the class line together.",
        phases: [
          { name: "Wow", lead: "Shout it like the crowd on Carmel — but say it to God.",
            prompts: ["LORD, you are God!", "You answered with fire — you are real and you listen."],
            starter: "LORD, you are…", seconds: 40, aloud: "The LORD is God! The LORD is God!" },
          { name: "Sorry", lead: "Silently: tell God about anything you’ve put in his place.",
            prompts: ["Sorry for treating other things like they matter more than you.", "Sorry for praying to show off instead of to talk to you."],
            starter: "LORD, I’m sorry for…", seconds: 25, aloud: "LORD, turn our hearts back to you." },
          { name: "Thanks", lead: "One sentence out loud: thank God for answering prayer.",
            prompts: ["Thank you that you hear short prayers.", "Thank you for a prayer you have already answered for me."],
            starter: "Thank you, LORD, for…", seconds: 35, aloud: "Thank you, LORD, that you hear and answer!" },
          { name: "Please", lead: "One sentence out loud: ask God to show himself to someone.",
            prompts: ["Please show my friends that you are real.", "Please turn people’s hearts back to you."],
            starter: "Please, LORD, …", seconds: 40, aloud: "Please answer us, LORD, so people will know you are God." }
        ],
        closing: "Everyone together: The LORD is God! Amen!",
        notes: "Don’t force anyone to pray aloud. Model a really short sentence first." }
    ] },

  /* ======================= THURSDAY ======================= */
  { label: "Thursday", theme: "Small Cloud, Big Rain", roleplay: false, mood: "storm",
    learningIntentions: [
      "We are learning how Elijah kept praying for rain and sent his servant to look seven times.",
      "We are learning that faith keeps praying and watching before it sees an answer.",
      "I can recite 1 Kings 18:39 and explain what this week taught me about God."
    ],
    assessment: "Students can retell Elijah’s story in order, explain the ‘small cloud’ as a picture of persistent, believing prayer, and recite 1 Kings 18:39.",
    resources: ["Screen", "Take-home challenge cards", "Tuesday’s written prayers (if collected)"],
    whereToNext: "Next week: “Even If He Doesn’t” — three friends, a golden statue, a blazing furnace and a den of lions (Daniel 3 and 6).",
    slides: [
      { type: "title", id: "th-title", title: "Small Cloud, Big Rain", minutes: 0.5, kicker: "Term 2 · Week 5", sub: "Faith on the Mountain",
        art: { key: "t2w05d4-a" }, notes: "Let the splash play." },

      { type: "review", id: "th-review", title: "Elijah’s adventure in order", minutes: 2.5, format: "order",
        prompt: "Put Elijah’s adventure in order!",
        items: ["Elijah warns Ahab: no rain", "Ravens bring food", "The widow’s jar never runs out", "“There you are, troublemaker!”", "The contest is set on Carmel", "Baal doesn’t answer", "Water poured three times", "Fire falls from the LORD"],
        hint: "Cards start scrambled. Students call out what comes next; click to place it. After each card, ask: ‘What did that show about God?’",
        notes: "Today’s story adds the final scene: the rain." },

      { type: "scripture", id: "th-scr", title: "1 Kings 18:42–44 · James 5:17–18", minutes: 1, ref: "1 Kings 18:41–46; James 5:17–18", version: "CEV",
        lines: [
          { text: "Elijah climbed back to the top of Mount Carmel. Then he stooped down with his face almost to the ground and told his servant, “Look toward the sea.”", ref: "1 Kings 18:42–43" },
          { text: "Elijah told him to look seven more times. After the seventh time the servant replied, “I see a small cloud coming this way. But it’s no bigger than a fist.”", ref: "1 Kings 18:43–44" },
          { text: "Elijah was just as human as we are, and for three and a half years his prayers kept the rain from falling.", ref: "James 5:17" },
          { text: "But when he did pray for rain, it fell from the skies and made the crops grow.", ref: "James 5:18" }
        ],
        emphasis: ["face almost to the ground", "seven", "small cloud", "just as human as we are", "it fell"],
        notes: "James 5 shows that Elijah’s prayers were behind both the drought and the rain — and that he was an ordinary person like us." },

      { type: "story", id: "th-story", title: "Look again", minutes: 2, transition: "page", mood: "storm",
        beats: [
          { text: "“I hear a heavy rain coming.”", caption: "But the sky was perfectly clear." },
          { text: "Face to the ground, Elijah prayed.", caption: "“Go and look toward the sea.” — “Nothing.”",
            art: { key: "t2w05d4-a", label: "Thu · title + story beats 2–3", desc: "Elijah crouched on the top of Mount Carmel with his face near the ground praying, while his young servant stands on a rock shading his eyes and staring out at a clear empty sea.", shot: "wide, quiet", motion: "kenburns-right", chars: ["elijah"],
              scene: "Elijah crouched on the bare rocky top of Mount Carmel with his face almost to the ground in prayer, while his young servant stands on a rock nearby shading his eyes and staring out at a calm empty sea under a clear sky." } },
          { text: "Seven times!", caption: "“I see a small cloud… no bigger than a fist.”", shout: true },
          { text: "Rain!", caption: "The sky went black — and the drought was over.",
            art: { key: "t2w05d4-b", label: "Thu · story beat 4 + stretch scene", desc: "Huge dark storm clouds rolling in from the sea over Mount Carmel and heavy rain pouring down, Elijah running with his cloak tucked up ahead of a distant chariot on the road below.", shot: "epic wide, stormy", motion: "kenburns-left", chars: ["elijah"],
              scene: "Huge dark storm clouds rolling in from the sea over Mount Carmel with heavy rain pouring down on dry fields, Elijah running joyfully with his cloak tucked into his belt along the road ahead of a distant royal chariot." } }
        ],
        narration: "After the fire fell, Elijah told King Ahab, ‘Go and eat. I hear a heavy rain coming.’ But there wasn’t a single cloud in the sky.\n\nElijah climbed back to the top of Mount Carmel. He crouched down with his face almost to the ground, and he prayed. God had promised rain — and now Elijah was asking for it.\n\n‘Go and look toward the sea,’ he told his servant. The servant looked. ‘Nothing.’\n\n‘Go again.’ Nothing. Again. Nothing. Again… and again… and again. Six times — nothing. But Elijah kept praying.\n\nThe seventh time, the servant came running. ‘I see a small cloud coming this way. But it’s no bigger than a fist.’\n\nThat was enough for Elijah! ‘Tell Ahab to get his chariot ready and go — or the rain will stop him!’ Soon the sky went black with clouds, the wind blew, and a heavy rain poured down. Then the power of the LORD came on Elijah, and he ran all the way to Jezreel — ahead of the king’s horses!\n\nThe Bible says Elijah was just as human as we are. He wasn’t a superhero. He was an ordinary person who trusted God and kept on praying. Jesus taught the same thing: keep asking, keep looking, don’t give up. Sometimes God answers straight away, like the fire. Sometimes he asks us to keep praying and keep watching, like the rain. Both come from the same faithful God.\n\nSo who is God? The only God. The God who sees, provides, answers with fire — and sends rain after one small cloud.",
        notes: "About 2 minutes. Jezreel was about 25–30 km away. Jesus on persistent prayer: Luke 18:1 (‘Pray and never give up’) and Matthew 7:7." },

      { type: "question", id: "th-q1", title: "How big?", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "After the seventh look, how big was the cloud the servant saw?",
        options: ["As big as a mountain", "No bigger than a fist", "As big as the sky", "There was no cloud"], answer: 1,
        hint: "Answer: B (1 Kings 18:44). Follow-up: ‘How many times did the servant look before he saw it?’ (Seven.) Follow-up 2: ‘What did Elijah do when he heard about the tiny cloud?’ (Told Ahab to hurry before the rain stopped him — he believed it was coming.) If silent: re-read the second scripture line." },

      { type: "question", id: "th-q2", title: "Why keep praying?", minutes: 1.5, level: "think", mode: "pair", seconds: 45,
        text: "God had already promised rain. So why do you think Elijah still prayed — and kept praying seven times?",
        hint: "Good answers: God likes us to ask; praying is trusting; Elijah wanted to be part of what God was doing; prayer isn’t forcing God, it’s agreeing with what he has said. Follow-up: ‘What would you have thought on the fourth or fifth “Nothing”?’ Follow-up 2: ‘How is this like Hannah praying year after year last week?’ If silent: ask, ‘When a parent promises a treat, do you stop talking about it?’" },

      { type: "recap", id: "th-recap", title: "This Week’s Big Idea", minutes: 1.5,
        points: [
          "The LORD stopped the rain and fed Elijah and a widow when there was nothing — he provides.",
          "On Mount Carmel, Baal was silent but the LORD answered with fire — he is the only God.",
          "Elijah kept praying until a small cloud became a great rain — God answers those who trust him."
        ],
        notes: "Then the Big Idea stamps in." },

      { type: "question", id: "th-q3", title: "Small clouds", minutes: 1.5, level: "dig", mode: "write", seconds: 45, skippable: true,
        text: "A ‘small cloud’ is the first little sign that God is answering. What is something only God can do that you could keep praying about?",
        hint: "Write it on a mini-whiteboard. Ideas: a friend or family member coming to know God; peace in a family argument; healing; a country at war; rain for farmers in a drought. Follow-up: ‘What might a “small cloud” look like for that prayer?’ Follow-up 2: ‘What if the answer takes much longer than a week?’ (Keep trusting — God’s timing.) If silent: share a ‘small cloud’ answer from your own life." },

      { type: "challenge", id: "th-chal", title: "This Week’s Challenge", minutes: 2,
        text: "Small cloud prayers. Each day, pray one ‘small cloud’ prayer for something only God can do — and keep watching for the first little sign of his answer.",
        why: "“When the people saw this, they bowed down and shouted, ‘The LORD is God! The LORD is God!’” — 1 Kings 18:39",
        head: "The LORD alone is God — and he answers those who trust him.", heart: "LORD, I’ll keep praying and keep watching.", hands: "Pray one ‘small cloud’ prayer every day.",
        takeHome: true,
        notes: "Next Monday will check in on this. Suggest writing the prayer on the take-home card." },

      { type: "verse", id: "th-verse", title: "Memory verse: fade-out", minutes: 1.5, activity: "fade",
        notes: "Fade out 1 Kings 18:39. Bonus: who can say last week’s verse, 1 Samuel 2:2?" },

      { type: "scene", id: "th-scene", title: "Rain!", minutes: 1, optional: true,
        art: { key: "t2w05d4-b" },
        boxes: [
          { text: "“I see a small cloud…”", pos: "tl", style: "speech" },
          { text: "Then the sky turned black — and the rain poured down.", pos: "br", style: "caption" }
        ] },

      { type: "prayer", id: "th-pray", title: "Seven-times prayer (pairs)", minutes: 3, mood: "calm", style: "pairs",
        tip: "Persistent prayer means asking again and again. Elijah prayed while his servant watched — two people working together. Today pray in pairs, and keep asking.",
        opening: "Turn to a partner. Each tell the other your ‘small cloud’ prayer from the question we just did.",
        phases: [
          { name: "Wow", lead: "Take turns to tell God one thing this week showed you about him.",
            prompts: ["LORD, you are the only God.", "You control the rain and the fire."],
            starter: "LORD, you are…", seconds: 35, aloud: "The LORD is God! The LORD is God!" },
          { name: "Sorry", lead: "Silently: are there prayers you gave up on too quickly?",
            prompts: ["Sorry for giving up on praying.", "Sorry for doubting that you hear me."],
            starter: "God, I’m sorry for…", seconds: 25, aloud: "God, we’re sorry for giving up too quickly." },
          { name: "Thanks", lead: "Thank God together for something he has answered before.",
            prompts: ["Thank you that you answered Elijah.", "Thank you for a time you answered my prayer."],
            starter: "Thank you, LORD, for…", seconds: 30, aloud: "Thank you, LORD, that you hear and answer prayer!" },
          { name: "Please", lead: "Pray for your PARTNER’s small-cloud prayer — then pray it again.",
            prompts: ["Please, LORD, do what only you can do for (name).", "Please help us keep watching for your answer."],
            starter: "Please, LORD, …", seconds: 45, aloud: "Please, LORD — we’ll keep praying and keep watching." }
        ],
        closing: "Let’s say 1 Kings 18:39 together as our closing prayer. Amen!",
        notes: "Encourage pairs to agree to pray for each other every day this week." }
    ] }
  ]
};
