/* Morninglight 2027 — Term 2 Week 9: Faith in the Storm (Mark 4:35–41; Matthew 14:22–33). Scripture: CEV. */
window.DEVOTIONS = window.DEVOTIONS || {};
window.DEVOTIONS["Term 2"] = window.DEVOTIONS["Term 2"] || {};
window.DEVOTIONS["Term 2"]["Week 9"] = {
  lessonTitle: "Faith in the Storm",
  passage: "Mark 4:35–41; Matthew 14:22–33",
  bigIdea: "When we’re afraid, we can look to Jesus — he’s with us and he’s in charge.",
  godIs: "Lord of the Storm",
  memoryVerse: { ref: "Psalm 56:3", text: "Even when I am afraid, I keep on trusting you.", version: "CEV",
    chunks: ["Even", "when I am", "afraid,", "I keep on", "trusting", "you."],
    actions: ["Hold up one finger — ‘even’", "Point to yourself", "Shiver, arms wrapped round you", "Walk on the spot", "Hand on heart", "Point up to God"] },
  prayerFocus: { skill: "Praying when afraid", tip: "You don’t have to feel calm to pray. When you’re scared, tell Jesus the truth — even one sentence like “Save me, Lord!” is a real prayer." },
  mood: "storm",
  cover: "t2w09-cover",
  characters: ["jesus", "peter"],
  coverArt: { key: "t2w09-cover", label: "Week cover", desc: "A small wooden fishing boat in a wild storm on a lake at night, Jesus standing at the back with one arm stretched out over the waves, seen from behind, as the waves begin to flatten.", shot: "epic wide, from behind",
    scene: "A small wooden fishing boat tossed in a wild storm on a lake at night, huge black waves and slanting rain, frightened fishermen clinging to the mast, and Jesus standing at the stern seen from behind with one arm stretched out over the water, the waves in front of him beginning to flatten into calm." },
  comicArt: { key: "t2w09-comic", label: "Comic page (week opener — for the comic-page viewer, coming in a later build)", format: "portrait", desc: "Six-panel comic page of Jesus calming the storm and Peter walking on the water.",
    panels: "Six panels. Panel 1 (wide): a fishing boat pushing off from a crowded shore at sunset. Panel 2 (small): Jesus asleep in the stern with his head on a cushion, seen from the side, peaceful. Panel 3 (tall): huge waves crashing over the boat, fishermen bailing water in panic. Panel 4 (wide): Jesus standing with arm outstretched, seen from behind, the lake falling flat and still under a calm sky. Panel 5 (tall): at night, a fisherman stepping out of a boat onto the waves toward a distant figure in moonlight. Panel 6 (wide): a strong hand gripping the sinking fisherman’s wrist above the water.", chars: ["jesus", "peter"] },

  days: [

  /* ======================= MONDAY ======================= */
  { label: "Monday", theme: "Asleep in the Storm", roleplay: true, mood: "storm",
    learningIntentions: [
      "We are learning what happened when a storm struck the disciples’ boat on the Lake of Galilee.",
      "We are learning that Jesus was with his friends in the storm, even when it looked like he didn’t care.",
      "I can retell the storm story and say what the disciples asked Jesus."
    ],
    assessment: "Listen for students retelling the storm in order (crossing, storm, Jesus asleep, ‘Don’t you care?’, calm) and noticing that Jesus was in the boat the whole time.",
    resources: ["Screen", "Optional: a bucket or bowl for ‘bailing’, a cushion for sleeping Jesus"],
    whereToNext: "Tomorrow: the moment the storm stopped — and the disciples’ huge question, “Who is this?”",
    slides: [
      { type: "title", id: "m-title", title: "Asleep in the Storm", minutes: 0.5, kicker: "Term 2 · Week 9", sub: "Faith in the Storm",
        art: { key: "t2w09-cover" }, notes: "Second-to-last week of term. This week is all about fear — and what to do with it." },

      { type: "hook", id: "m-hook", title: "Wild weather", minutes: 1.5,
        checkin: { text: "Last week we met four friends who carried their friend to Jesus — right through a roof — and a Roman officer who trusted Jesus to ‘just say the word’. Your challenge: bring a friend’s need to Jesus in prayer, by name, every day. Who did you pray for? Did you keep it up?" },
        text: "What’s the scariest weather you’ve ever been in?",
        ask: "Where were you — and what did it feel like?",
        hint: "Check-in first: ask 2–3 students who they prayed for (first names only, no private details) and whether they managed every day. Then the hook: Canterbury nor’westers, hail, thunder, a rough ferry crossing. Land it: ‘Today some tough fishermen get caught in a storm so wild they think they’re going to die — and Jesus is in the boat… asleep.’" },

      { type: "scripture", id: "m-scr", title: "Mark 4:35–38", minutes: 1, ref: "Mark 4:35–38", version: "CEV",
        lines: [
          { text: "That evening, Jesus said to his disciples, “Let’s cross to the east side.”", ref: "Mark 4:35" },
          { text: "Suddenly a windstorm struck the lake. Waves started splashing into the boat, and it was about to sink.", ref: "Mark 4:37" },
          { text: "Jesus was in the back of the boat with his head on a pillow, and he was asleep.", ref: "Mark 4:38" },
          { text: "His disciples woke him and said, “Teacher, don’t you care that we’re about to drown?”", ref: "Mark 4:38" }
        ],
        emphasis: ["windstorm", "about to sink", "asleep", "don’t you care"],
        notes: "Disciples = Jesus’ close followers and students (explain for those who haven’t heard the word). The ‘lake’ is the Lake (or Sea) of Galilee." },

      { type: "story", id: "m-story", title: "The storm on the lake", minutes: 3, transition: "page", mood: "storm",
        beats: [
          { text: "“Let’s cross to the east side.”", caption: "After a long day of teaching, Jesus and his friends set off across the lake.",
            art: { key: "t2w09d1-a", label: "Mon · story beats 1–2", desc: "A wooden fishing boat with a single sail pushing off from a pebbly shore at sunset, crowds on the beach behind, a few other small boats following.", shot: "wide, golden evening", motion: "kenburns-right", chars: ["jesus", "peter"],
              scene: "A wooden fishing boat with one square sail pushing off from a pebbly lakeshore at sunset, crowds standing on the beach behind, Jesus sitting in the back of the boat and fishermen hauling ropes, a few other small boats following across calm water toward dark hills." } },
          { text: "Suddenly — a windstorm!", caption: "Waves crashed over the sides. The boat was about to sink.", shout: true },
          { text: "And Jesus?", caption: "In the back of the boat, head on a pillow… asleep.",
            art: { key: "t2w09d1-b", label: "Mon · story beats 3–4 + role-play card + stretch scene", desc: "Inside the storm-tossed boat: fishermen bailing water and clinging to the mast as waves crash over, while Jesus lies peacefully asleep on a cushion in the stern.", shot: "medium wide, dramatic", motion: "kenburns-in", chars: ["jesus", "peter"],
              scene: "Inside a small fishing boat in a violent night storm: waves crashing over the side, fishermen bailing water with bowls and clinging to the mast in panic, lightning in the clouds, while at the stern Jesus lies peacefully asleep on a cushion, seen from the side." } },
          { text: "“Teacher, don’t you care?”", caption: "The terrified disciples shook him awake." },
          { text: "Jesus got up.", caption: "He spoke to the wind and waves — and everything was calm." }
        ],
        narration: "It had been a long, busy day beside the Lake of Galilee. Since early morning, Jesus had been teaching huge crowds — so many people that he sat in a boat just off the shore so everyone could see and hear him. He told story after story about God’s kingdom.\n\nAs the sun went down, Jesus said to his disciples, ‘Let’s cross to the east side.’ So they left the crowd behind and pushed out onto the water, with Jesus still in the boat. A few other boats followed along.\n\nSeveral of the disciples were fishermen — Peter, Andrew, James and John. They had grown up on this lake. They knew every bay and every rock. And they knew that the lake could be calm as glass one minute — and the next, a wind could come roaring down from the hills and whip the water into a fury.\n\nThat is exactly what happened. Suddenly a windstorm struck the lake. The boat tipped and rolled. Waves crashed over the sides. Water sloshed around their feet, then their ankles. The disciples grabbed buckets and bowls and bailed as fast as they could, but the waves kept coming. The boat was about to sink.\n\nAnd where was Jesus? He was in the back of the boat, with his head on a pillow… fast asleep.\n\nImagine that! Thunder, wind, spray, men shouting — and Jesus sleeping. Jesus was truly human. He had worked hard all day, and he was tired, just like you get tired. But he was also completely at peace. He wasn’t worried at all.\n\nThe disciples were terrified. These were tough fishermen — if they were scared, this was a terrible storm. They shook Jesus awake and shouted, ‘Teacher, don’t you care that we’re about to drown?’\n\nDon’t you care? Have you ever felt like that — like something scary is happening, and God must be asleep, or not listening, or not caring?\n\nJesus got up. He stood in the rocking boat and ordered the wind and the waves to be quiet and calm down. And the wind stopped. The waves lay down flat. Everything was calm.\n\nThen Jesus turned to his friends and asked, ‘Why were you afraid? Don’t you have any faith?’\n\nTomorrow we’ll think hard about that question. But for now, notice this: the storm was real, and the danger was real — and Jesus was in the boat the whole time.",
        notes: "About 3 minutes. Mark names the boat’s passengers only as ‘his disciples’; that Peter, Andrew, James and John were fishermen comes from Mark 1:16–20. The details of bailing with buckets and bowls are imagined but fit ‘waves started splashing into the boat’. The Lake of Galilee sits low between hills, and sudden storms are well known there." },

      { type: "question", id: "m-q1", title: "Where was Jesus?", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "Where was Jesus when the storm hit?",
        options: ["Steering the boat", "Asleep in the back, on a pillow", "Swimming to shore", "Still on the beach"], answer: 1,
        hint: "Answer: B (Mark 4:38). Follow-up: ‘What did the disciples say when they woke him?’ (‘Teacher, don’t you care that we’re about to drown?’) Follow-up 2: ‘Why do you think Mark bothers to tell us about the pillow?’ (It’s an eyewitness detail — Jesus was really, peacefully asleep.) If silent: re-read the third scripture line together." },

      { type: "question", id: "m-q2", title: "Sleeping in a storm", minutes: 1.5, level: "think", mode: "pair", seconds: 45, skippable: true,
        text: "Everyone else was panicking — but Jesus was asleep. What does that show us about him?",
        hint: "Good answers: he was truly human and really tired; he was at peace because he trusted his Father completely; he wasn’t afraid of the storm because he was in charge of it; he knew they would be safe. Follow-up: ‘Can you sleep when you’re really worried?’ Follow-up 2: ‘What would it take for you to be that peaceful?’ If silent: ask ‘What does a baby asleep in its parent’s arms show about how it feels?’ — safe, trusting." },

      { type: "roleplay", id: "m-rp", title: "Asleep in the Storm", minutes: 5, ref: "Mark 4:35–41",
        art: { key: "t2w09d1-b" },
        imagined: "Jesus’ words and the disciples’ cry are from Mark 4 (CEV). ‘Quiet! Be still!’ is how many Bibles translate Jesus’ command in 4:39 (the CEV says he ‘ordered the wind and the waves to be quiet and calm down’). Which disciple says which line, and the chat before the storm, are imagined.",
        actions: ["Everyone: be the wind and waves — soft whooshing, then a roaring storm", "Everyone: sway from side to side like a rocking boat", "Everyone: fall completely silent when Jesus speaks"],
        props: ["Optional: a cushion for Jesus, a bowl for bailing"],
        characters: [
          { name: "Narrator", color: "#F2C77B", desc: "Tells the story" },
          { name: "Jesus", color: "#FFE08A", desc: "Tired after a long day — calm and in charge (the teacher may read Jesus’ lines)" },
          { name: "Peter", color: "#7BA7D9", desc: "Big, loud fisherman — usually knows what to do" },
          { name: "James", color: "#8BC34A", desc: "Fisherman — practical, starts bailing" },
          { name: "John", color: "#FFB547", desc: "James’ younger brother — notices everything" },
          { name: "Everyone", color: "#FFFFFF", desc: "The wind and the waves" }
        ],
        lines: [
          { character: "Narrator", text: "Evening on the Lake of Galilee. A small fishing boat pushes off from the shore.", direction: true },
          { character: "Jesus", text: "Let’s cross to the east side." },
          { character: "Peter", text: "Right! Everyone in. James, grab that rope!", action: "push the boat off" },
          { character: "James", text: "Look at that sunset. Perfect night for sailing.", action: "stretch, relaxed" },
          { character: "Narrator", text: "Jesus lay down in the back of the boat, with his head on a pillow." },
          { character: "Jesus", text: "Wake me when we get there.", action: "yawn, lie down" },
          { character: "Everyone", text: "Whoooosh…", action: "soft wind", sfx: "wind" },
          { character: "John", text: "Did anyone else feel that wind change?", action: "look up at the sky" },
          { character: "Everyone", text: "WHOOOOSH! CRASH! SPLASH!", action: "roaring storm — sway hard", sfx: "storm" },
          { character: "Peter", text: "Storm! Get the sail down! Hold on!" },
          { character: "James", text: "Water’s coming in! Bail! Bail!", action: "scoop water frantically" },
          { character: "John", text: "It’s up to my ankles! We’re going to sink!" },
          { character: "Everyone", text: "CRASH! CRASH! CRASH!", action: "waves over the side" },
          { character: "Peter", text: "I’ve fished this lake my whole life. I’ve never seen it this bad!" },
          { character: "James", text: "Where’s Jesus?" },
          { character: "John", text: "He’s… asleep. He’s actually asleep!", action: "point, amazed" },
          { pause: "Freeze! The boat is filling with water and Jesus is asleep. What are you feeling right now — and what would you say to him?", seconds: 20 },
          { character: "Peter", text: "Teacher! Wake up!", action: "shake Jesus’ shoulder" },
          { character: "James", text: "Teacher, don’t you care that we’re about to drown?" },
          { character: "Narrator", text: "Jesus got up. He ordered the wind and the waves to be quiet and calm down." },
          { character: "Jesus", text: "Quiet! Be still!", action: "stand, arm stretched out — calm, strong voice" },
          { character: "Everyone", text: "Shhhhhh……", action: "the storm dies away — then total silence" },
          { character: "Narrator", text: "The wind stopped, and everything was calm." },
          { character: "Jesus", text: "Why were you afraid? Don’t you have any faith?", action: "gently, looking at each of them" },
          { character: "Peter", text: "I… I don’t know what to say.", action: "whisper" },
          { character: "John", text: "Who is this? Even the wind and the waves obey him!" },
          { character: "Everyone", text: "Even the wind and the waves obey him!", action: "whisper, amazed" }
        ],
        debrief: [
          { level: "think", text: "Why could Jesus sleep in the storm when everyone else was terrified?", hint: "He trusted his Father completely; he was in charge of the storm; he knew they were safe with him. The disciples had Jesus in the boat — but forgot what that meant." },
          { level: "look", text: "What happened the moment Jesus spoke to the wind and waves?", hint: "The wind stopped and everything was calm (Mark 4:39) — instantly, not slowly." }
        ],
        notes: "A loud, fun role-play — but make the silence after ‘Quiet! Be still!’ really silent: hold it for three seconds before the Narrator speaks. If any students are genuinely frightened of storms, let them be ‘Jesus’ helpers’ who say the calm lines." },

      { type: "question", id: "m-q3", title: "“Don’t you care?”", minutes: 1, level: "dig", mode: "discuss", seconds: 40,
        text: "The disciples asked Jesus, “Don’t you care?” Was that a fair thing to say? When do people feel like God doesn’t care?",
        hint: "Let students disagree. Fair: they were really scared, and it’s honest to tell Jesus how you feel. Unfair: Jesus was right there, he had chosen them, he had healed people all day — of course he cared. People feel God doesn’t care when someone is sick, parents argue, prayers seem unanswered. Follow-up: ‘Did Jesus get angry at their question?’ (No — he calmed the storm, then asked about their faith.) Follow-up 2: ‘What’s the difference between telling Jesus “I’m scared” and accusing him of not caring?’ If silent: ‘Have you ever felt alone when something scary happened?’" },

      { type: "apply", id: "m-apply", title: "Head · Heart · Hands", minutes: 1,
        head: "Jesus is with us in the storm — even when it feels like he’s asleep.",
        heart: "Jesus, when I’m scared, help me remember you’re in the boat with me.",
        hands: "This week, when something scares you — a test, a dark room, a big game, a worrying phone call — whisper: “Jesus, you’re in the boat with me.”",
        settings: ["home", "school", "bedtime", "sport"],
        notes: "Practise the whisper together once so it’s ready to use." },

      { type: "scene", id: "m-scene", title: "Asleep", minutes: 0.5, optional: true,
        art: { key: "t2w09d1-b" },
        boxes: [
          { text: "“Teacher, don’t you care that we’re about to drown?”", pos: "tl", style: "shout" },
          { text: "Jesus was in the boat the whole time.", pos: "br", style: "caption" }
        ] },

      { type: "verse", id: "m-verse", title: "Memory verse peek", minutes: 1, optional: true, activity: "echo",
        notes: "Introduce Psalm 56:3. King David wrote it when he was in real danger. It’s short — most students will know it by Wednesday." },

      { type: "prayer", id: "m-pray", title: "Praying when afraid (silent)", minutes: 3, mood: "calm", style: "silent",
        tip: "This week we learn to pray when we’re afraid. You don’t have to be calm to pray — the disciples prayed by shouting “Wake up!” Jesus listened anyway.",
        opening: "Let’s get still. Imagine the boat after the storm — the water flat, the stars out. Breathe in… and out.",
        phases: [
          { name: "Wow", lead: "Even the wind and the waves obey Jesus.",
            prompts: ["Jesus, you are stronger than any storm.", "Jesus, the wind and the waves obey you."],
            starter: "Wow, Jesus, you…", seconds: 35, aloud: "Wow, Jesus — even the wind and the waves obey you!" },
          { name: "Sorry", lead: "The disciples thought Jesus didn’t care. Have you ever thought that?",
            prompts: ["Sorry for thinking you don’t care about me.", "Sorry for panicking instead of coming to you."],
            starter: "Jesus, I’m sorry for…", seconds: 30, aloud: "Jesus, we’re sorry for the times we thought you didn’t care." },
          { name: "Thanks", lead: "Thank Jesus that he stayed in the boat with his friends.",
            prompts: ["Thank you that you were in the boat the whole time.", "Thank you that you heard them even when they shouted."],
            starter: "Thank you, Jesus, for…", seconds: 30, aloud: "Thank you, Jesus, that you are with us in the storm." },
          { name: "Please", lead: "Is there a ‘storm’ in your life right now? Tell Jesus about it.",
            prompts: ["Please calm the storm that’s worrying me: …", "Please be with someone I know who’s scared right now."],
            starter: "Please, Jesus…", seconds: 40, aloud: "Please, Jesus, be with everyone here who feels afraid today." }
        ],
        closing: "Everyone: Amen.",
        notes: "Some students will have real ‘storms’ at home. Keep the Please phase silent and private; follow up gently with any student who seems troubled." }
    ] },

  /* ======================= TUESDAY ======================= */
  { label: "Tuesday", theme: "“Quiet! Be Still!”", roleplay: false, mood: "sea",
    learningIntentions: [
      "We are learning what happened when Jesus spoke to the wind and the waves.",
      "We are learning why the disciples asked, “Who is this?” — and what the Old Testament says about who rules the sea.",
      "I can explain the difference between being afraid and having no faith."
    ],
    assessment: "Listen for students linking Jesus’ power over the storm to God’s power in Psalm 107, and explaining that faith means bringing our fear to Jesus rather than never feeling fear.",
    resources: ["Screen", "Optional: a jug of water and a tray to show how waves keep rolling after wind stops"],
    whereToNext: "Tomorrow: another night, another storm — and Peter climbs out of the boat!",
    slides: [
      { type: "title", id: "t-title", title: "“Quiet! Be Still!”", minutes: 0.5, kicker: "Term 2 · Week 9", sub: "Faith in the Storm",
        art: { key: "t2w09d2-b" }, notes: "Let the splash play. ‘Quiet! Be still!’ is the NIV wording of Mark 4:39; the CEV on screen says Jesus ‘ordered the wind and the waves to be quiet and calm down’." },

      { type: "hook", id: "t-recap", title: "Recap", minutes: 1, style: "recap",
        text: "Yesterday a storm nearly sank the disciples’ boat.",
        ask: "Where was Jesus — and what did the disciples shout?",
        hint: "Asleep in the back of the boat on a pillow. ‘Teacher, don’t you care that we’re about to drown?’ Then: ‘Jesus got up. Today we slow right down and look at what happened next — and the question it left the disciples asking all night.’" },

      { type: "scripture", id: "t-scr", title: "Mark 4:39–41", minutes: 1, ref: "Mark 4:35–41", version: "CEV",
        lines: [
          { text: "Jesus got up and ordered the wind and the waves to be quiet and calm down.", ref: "Mark 4:39" },
          { text: "The wind stopped, and everything was calm.", ref: "Mark 4:39" },
          { text: "Jesus asked his disciples, “Why were you afraid? Don’t you have any faith?”", ref: "Mark 4:40" },
          { text: "Now they were more afraid than ever and said to each other, “Who is this? Even the wind and the waves obey him!”", ref: "Mark 4:41" }
        ],
        emphasis: ["ordered the wind and the waves", "everything was calm", "Don’t you have any faith?", "Who is this?"],
        notes: "Point out the two kinds of fear: fear of the storm (v.38) and ‘more afraid than ever’ of the One who stopped it (v.41)." },

      { type: "story", id: "t-story", title: "Who is this?", minutes: 3.5, transition: "page", mood: "sea",
        beats: [
          { text: "Jesus stood up in the rocking boat.", caption: "Wind screaming. Waves crashing. Everyone soaked." },
          { text: "He spoke.", caption: "Not a prayer for help — an order. And the storm obeyed.", shout: true,
            art: { key: "t2w09d2-a", label: "Tue · story beats 2–3 + stretch scene", desc: "Jesus seen from behind, standing in the boat with one arm stretched out; on one side of the frame the storm still rages, on the other the waves are falling flat and the clouds are breaking open.", shot: "wide, from behind", motion: "kenburns-in", chars: ["jesus"],
              scene: "Jesus seen from behind, standing tall in the stern of a small fishing boat with one arm stretched out over the lake; on the left of the frame the storm still rages with towering waves, on the right the water is already falling flat and the clouds are tearing open to reveal stars." } },
          { text: "Flat calm.", caption: "Not slowly. Instantly." },
          { text: "“Who is this?”", caption: "The disciples were more afraid than ever.",
            art: { key: "t2w09d2-b", label: "Tue · title + story beats 4–5", desc: "The boat sitting on a glassy, perfectly still lake under a sky full of stars, the soaked disciples staring at one another in awe, Jesus a calm figure at the back.", shot: "wide, hushed", motion: "kenburns-out", chars: ["jesus", "peter"],
              scene: "A small fishing boat sitting on a glassy, perfectly still lake under a huge sky full of stars, the soaked disciples huddled and staring at one another in awe, Jesus a calm three-quarter figure seated at the back, mist rising gently off the water." } },
          { text: "Only God rules the sea.", caption: "So who is Jesus?" }
        ],
        narration: "Let’s go back into that boat. The wind is screaming. Waves are crashing over the sides. Everyone is soaked and shaking. And Jesus, who was fast asleep a moment ago, stands up.\n\nNotice what he does. He doesn’t grab a bucket. He doesn’t pray, ‘Father, please help us!’ He speaks straight to the storm, the way you would speak to a dog that’s barking too much. He orders the wind and the waves to be quiet and calm down. Many Bibles put it like this: ‘Quiet! Be still!’\n\nAnd the storm obeys.\n\nNow here’s something fishermen know. When a strong wind stops, the waves don’t stop with it. They keep rolling and slapping for hours. But Mark says the wind stopped, and everything was calm. Not slowly — at once. The lake went flat like a mirror. Imagine the silence. Water dripping off your hair. Your heart still thumping. And not a ripple on the lake.\n\nThen Jesus turned to his friends and asked two questions. ‘Why were you afraid? Don’t you have any faith?’\n\nWas Jesus saying it’s wrong to feel scared? No. Being scared in a storm is normal. The problem was that they had Jesus in the boat — and forgot what that meant. They thought, ‘He doesn’t care.’ Faith would have thought, ‘He’s with us. We’ll be all right.’\n\nAnd now the disciples were more afraid than ever. But this was a new kind of fear — not the fear of drowning, but the fear you feel standing next to something enormous and holy. They whispered to each other, ‘Who is this? Even the wind and the waves obey him!’\n\nThese men knew their Bibles. They knew Psalm 107, about sailors caught in a terrible storm. Their ship goes up to the sky and down to the depths, and they are terrified. So they cry out to the LORD — and the LORD makes the storm stop and the waves go still.\n\nWho stills the storm in the Old Testament? Only God. The LORD who made the sea is the only one who can tell it what to do.\n\nSo the disciples were left with a huge question. A man had just done what only God can do. Who is Jesus? Mark wants you to answer that question too. Jesus isn’t just a good teacher or a brave leader. He is God himself, come close — close enough to sleep in a fishing boat, strong enough to stop a storm with a word.\n\nAnd that changes what we do with fear. Faith doesn’t mean you never feel afraid. Faith means that when you are afraid, you bring it to the One who rules the storm.",
        notes: "About 3½ minutes. Psalm 107:23–30 is summarised, not quoted — read it from a Bible if you have time. The point about waves continuing after wind stops is a well-known fact about real lakes and seas; it helps students see how complete the calm was. Mark 4:39 literally has Jesus ‘rebuke’ the wind." },

      { type: "dig", id: "t-dig", title: "Who rules the sea?", minutes: 2,
        prompt: "Compare the sailors in Psalm 107 with the disciples in Mark 4. What do you notice?",
        columns: ["Psalm 107:23–30 (the LORD)", "Mark 4:35–41 (Jesus)"],
        items: [
          { left: "Sailors caught in a terrible storm", right: "Fishermen caught in a windstorm" },
          { left: "Huge waves — they are terrified", right: "Waves splash in — the boat is about to sink" },
          { left: "They cry out to the LORD", right: "They wake Jesus: “Don’t you care?”" },
          { left: "The LORD makes the storm stop and the sea go still", right: "Jesus orders the wind and waves — everything is calm" }
        ],
        reveal: "Only God rules the wind and the waves — so Jesus is God with us.",
        notes: "Reveal row by row. Ask after the last row: ‘In Psalm 107 the LORD does it. In Mark 4, who does it?’ Let the penny drop." },

      { type: "question", id: "t-q1", title: "Two questions", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "After the storm stopped, what did Jesus ask his disciples?",
        options: ["“Who left the sail up?”", "“Why were you afraid? Don’t you have any faith?”", "“Why did you wake me?”", "“Can we go home now?”"], answer: 1,
        hint: "Answer: B (Mark 4:40). Follow-up: ‘What question did the disciples then ask each other?’ (‘Who is this? Even the wind and the waves obey him!’) Follow-up 2: ‘Do you think Jesus was cross, or sad, or gentle when he asked?’ (The text doesn’t say — let them imagine, but notice he had just saved them.) If silent: point to the third scripture line." },

      { type: "question", id: "t-q2", title: "More afraid than ever", minutes: 1.5, level: "think", mode: "pair", seconds: 45,
        text: "The storm was over — but the disciples were MORE afraid than ever. Why do you think that was?",
        hint: "Good answers: they realised Jesus had power only God has; they were in the boat with someone far bigger than the storm; it was ‘awe’ — the shaky feeling of being near something holy and enormous; they didn’t understand who he was yet. Follow-up: ‘Is this kind of fear bad or good?’ (It’s the right response to God — the Bible calls it ‘the fear of the LORD’, deep respect and wonder.) Follow-up 2: ‘How did they answer their own question by the end of Matthew 14?’ (Tomorrow’s story — ‘You really are the Son of God!’) If silent: ask ‘How would you feel if your friend told a volcano to stop — and it did?’" },

      { type: "question", id: "t-q3", title: "Faith and fear", minutes: 1.5, level: "dig", mode: "vote", seconds: 30, skippable: true,
        text: "Agree or disagree: “If you really have faith, you will never feel afraid.”",
        options: ["Agree", "Disagree"],
        hint: "Let both sides speak. The best answer: disagree. Feeling afraid is human — even David wrote ‘Even when I am afraid’ (our memory verse). Faith isn’t the absence of fear; it’s where you take your fear. The disciples’ problem wasn’t feeling scared — it was thinking Jesus didn’t care. Follow-up: ‘What does our memory verse say we do when we’re afraid?’ (Keep on trusting.) Follow-up 2: ‘What’s one thing that helps you trust when you’re scared?’ If silent: ‘Was Jesus ever troubled or upset?’ (Yes — in the garden before the cross; he prayed.)" },

      { type: "apply", id: "t-apply", title: "Head · Heart · Hands", minutes: 2,
        head: "Faith isn’t having no fear — it’s bringing my fear to Jesus, who rules the storm.",
        heart: "Jesus, I want to trust you more than I fear the storm.",
        hands: "Name one ‘storm’ you’re facing — a worry about a friend, a test, something at home. Tonight before bed, tell Jesus about it in one honest sentence.",
        settings: ["home", "bedtime", "school"],
        notes: "Give students 20 seconds to silently name their ‘storm’ — no sharing needed. This leads straight into today’s prayer." },

      { type: "scene", id: "t-scene", title: "Flat calm", minutes: 1, optional: true,
        art: { key: "t2w09d2-a" },
        boxes: [
          { text: "“Quiet! Be still!”", pos: "tl", style: "shout" },
          { text: "“Who is this? Even the wind and the waves obey him!”", pos: "br", style: "caption" }
        ] },

      { type: "verse", id: "t-verse", title: "Build the verse", minutes: 1, activity: "build",
        notes: "Build Psalm 56:3. Ask: ‘David doesn’t say IF I am afraid. He says EVEN WHEN. What does that tell you?’" },

      { type: "prayer", id: "t-pray", title: "Open hands", minutes: 3, mood: "calm", style: "hands",
        tip: "When we’re scared we often clench our fists. Today we pray with open hands — as if we’re handing our fears to Jesus, who rules the storm.",
        opening: "Make two fists and squeeze them tight — that’s what fear feels like. Now slowly open your hands, palms up, on your lap.",
        phases: [
          { name: "Wow", lead: "Only God can tell a storm to stop — and Jesus did.",
            prompts: ["Jesus, you rule the wind and the waves.", "Jesus, you are God, come close."],
            starter: "Wow, Jesus, you…", seconds: 30, aloud: "Wow, Jesus — you rule the wind and the waves!" },
          { name: "Sorry", lead: "Jesus asked, “Don’t you have any faith?”",
            prompts: ["Sorry for trusting my worries more than you.", "Sorry for forgetting you’re with me."],
            starter: "Jesus, I’m sorry for…", seconds: 30, aloud: "Jesus, we’re sorry for forgetting you’re with us." },
          { name: "Thanks", lead: "Think of a time a ‘storm’ in your life calmed down.",
            prompts: ["Thank you for the time you helped me when…", "Thank you that nothing is too big for you."],
            starter: "Thank you, Jesus, for…", seconds: 35, aloud: "Thank you, Jesus, that no storm is too big for you." },
          { name: "Please", lead: "Picture placing your ‘storm’ in your open hands. Now hand it to Jesus.",
            prompts: ["Jesus, I give you my worry about…", "Please help me keep on trusting you."],
            starter: "Please, Jesus, take…", seconds: 45, aloud: "Jesus, we give you our worries. Even when we are afraid, we will keep on trusting you." }
        ],
        closing: "Lift your open hands a little, as if giving something away. Everyone: Amen.",
        notes: "The ‘open hands’ posture is a simple, physical way to show trust. Keep it optional and low-key for students who feel self-conscious." }
    ] },

  /* ======================= WEDNESDAY ======================= */
  { label: "Wednesday", theme: "Peter Steps Out", roleplay: true, mood: "night",
    learningIntentions: [
      "We are learning how Jesus walked on the water and called Peter to come to him.",
      "We are learning why Peter began to sink — and what he did when he did.",
      "I can explain what it means to keep my eyes on Jesus when I’m afraid."
    ],
    assessment: "Listen for students explaining that Peter walked while he looked at Jesus and sank when he looked at the wind, and that his cry ‘Save me, Lord!’ was a prayer of faith.",
    resources: ["Screen", "Optional: a strip of blue fabric or paper for ‘the water’, a chair for the boat"],
    whereToNext: "Tomorrow: Jesus’ hand, Jesus’ question — “Why do you doubt?” — and what to do when you’re afraid.",
    slides: [
      { type: "title", id: "w-title", title: "Peter Steps Out", minutes: 0.5, kicker: "Term 2 · Week 9", sub: "Faith in the Storm",
        art: { key: "t2w09d3-b" }, notes: "Let the splash play." },

      { type: "hook", id: "w-hook", title: "Would you?", minutes: 1,
        text: "Imagine it’s 3 o’clock in the morning, on a boat in the middle of a stormy lake. Someone calls, “Come on — step out!” Would you?",
        ask: "What would you need to know first?",
        hint: "Take a quick hands-up vote, then ideas: who is calling, is it safe, can they catch me? Land it: ‘Tonight’s story happens on the same lake, in the dark, in the wind — and one disciple actually does it. What he needed to know was simply: is it really Jesus?’" },

      { type: "scripture", id: "w-scr", title: "Matthew 14:27–31", minutes: 1, ref: "Matthew 14:22–33", version: "CEV",
        lines: [
          { text: "At once, Jesus said to them, “Don’t worry! I am Jesus. Don’t be afraid.”", ref: "Matthew 14:27" },
          { text: "Peter replied, “Lord, if it is really you, tell me to come to you on the water.” “Come on!” Jesus said.", ref: "Matthew 14:28–29" },
          { text: "But when Peter saw how strong the wind was, he was afraid and started sinking. “Save me, Lord!” he shouted.", ref: "Matthew 14:30" },
          { text: "At once, Jesus reached out his hand. He helped Peter up.", ref: "Matthew 14:31" }
        ],
        emphasis: ["Don’t be afraid", "Come on!", "saw how strong the wind was", "Save me, Lord!", "reached out his hand"],
        notes: "This is a different night from Monday’s storm — Matthew 14 happens after Jesus fed the five thousand." },

      { type: "story", id: "w-story", title: "Walking on the water", minutes: 3, transition: "page", mood: "night",
        beats: [
          { text: "Jesus went up the mountain to pray.", caption: "Down on the lake, the disciples rowed against the wind all night.",
            art: { key: "t2w09d3-a", label: "Wed · story beats 1–2", desc: "Jesus alone on a dark hillside above the lake, seen from behind, praying with arms raised in moonlight, while far below a tiny boat struggles on rough wind-whipped water.", shot: "wide, from behind", motion: "kenburns-left", chars: ["jesus"],
              scene: "Jesus alone on a rocky hillside above a wide lake at night, seen from behind with his arms raised in prayer under a bright moon, his cloak blowing in the wind, while far below a tiny boat struggles across rough wind-whipped water." } },
          { text: "Before dawn — someone walking on the waves!", caption: "“It’s a ghost!” they screamed.", shout: true },
          { text: "“Lord, if it is really you…”", caption: "“Come on!” — and Peter stepped out of the boat.",
            art: { key: "t2w09d3-b", label: "Wed · title + story beat 3 + role-play card + stretch scene", desc: "Peter climbing over the side of the boat and placing one foot on the dark waves, the other disciples gripping the sides in shock, and a figure standing on the water in the moonlight far ahead.", shot: "low angle, dramatic", motion: "kenburns-up", chars: ["peter", "jesus"],
              scene: "Low angle from the waterline: Peter, a broad-shouldered fisherman, climbing over the side of a small boat and placing one bare foot on the dark rolling waves, the other disciples gripping the sides in shock, and a calm figure of Jesus standing on the water in moonlight a little way ahead." } },
          { text: "Peter walked on the water!", caption: "Then he saw the wind…" },
          { text: "“Save me, Lord!”", caption: "He was sinking — and he cried out to Jesus." }
        ],
        narration: "This story happens on a different night, on the same lake. Jesus had just fed more than five thousand people with five small loaves and two fish. Straight away, he made his disciples get into the boat and start back across the lake, while he sent the crowds home. Then Jesus went up a mountain to be alone and pray.\n\nNight came. By now the boat was a long way from shore, and a strong wind was blowing against it. The disciples rowed and rowed, but the waves tossed them around and they hardly moved. Hour after hour. Their arms ached. And Jesus wasn’t in the boat this time.\n\nA little while before morning, in the darkest, coldest part of the night, one of them saw something. A shape, out on the water. Coming closer. Walking — on top of the waves.\n\n‘It’s a ghost!’ They were terrified and started screaming.\n\nAt once, a voice came across the water: ‘Don’t worry! I am Jesus. Don’t be afraid.’\n\nEveryone froze. Then Peter — of course it was Peter — called out, ‘Lord, if it is really you, tell me to come to you on the water.’\n\nThink about that. Peter didn’t ask to walk on water to show off. He wanted to be where Jesus was. And he knew that if Jesus told him to come, Jesus could make it possible.\n\nJesus said one word: ‘Come on!’\n\nSo Peter swung one leg over the side of the boat. Then the other. He let go of the boat. And he stood up — on the water! He took a step. And another. Peter, the fisherman, was walking on the lake towards Jesus!\n\nBut then Peter noticed the wind. He felt it pushing against him. He saw the waves rising and the spray flying. He stopped looking at Jesus and started looking at the storm. And as soon as he did, he was afraid — and he started to sink.\n\nDown to his knees. Down to his waist. The cold water closing over him.\n\nPeter did the only thing he could do. He didn’t try to swim. He didn’t pretend he was fine. He shouted the shortest prayer in the Bible: ‘Save me, Lord!’\n\nAnd what did Jesus do? We’ll find out in the role-play.",
        notes: "About 3 minutes. ‘I am Jesus’ is the CEV’s wording; the Greek is literally ‘I am’ or ‘It is I’ — the same words God used to name himself to Moses (Exodus 3:14). Older students may enjoy that link. Peter’s gradual sinking (knees, waist) is imagined detail." },

      { type: "question", id: "w-q1", title: "Peter’s prayer", minutes: 1, level: "look", mode: "finish", seconds: 20,
        text: "Finish Peter’s cry: When he started sinking, he shouted, “…”",
        reveal: "“Save me, Lord!” (Matthew 14:30)",
        hint: "Follow-up: ‘What made Peter start to sink?’ (He saw how strong the wind was and became afraid.) Follow-up 2: ‘Why is “Save me, Lord!” a great prayer?’ (Short, honest, aimed at the right person — anyone can pray it, anywhere.) If silent: point to the third scripture line and read it together." },

      { type: "roleplay", id: "w-rp", title: "Peter Steps Out", minutes: 5, ref: "Matthew 14:22–33",
        art: { key: "t2w09d3-b" },
        imagined: "Jesus’ and Peter’s words are from Matthew 14 (CEV). The other disciples’ lines and actions are imagined, but fit the story.",
        actions: ["Everyone: be the wind — whooshing louder when Peter looks at it", "Everyone: row together, then scream ‘Ghost!’", "Everyone: kneel and worship at the end"],
        props: ["Optional: two chairs for the boat, a strip of blue fabric for the water"],
        characters: [
          { name: "Narrator", color: "#F2C77B", desc: "Tells the story" },
          { name: "Jesus", color: "#FFE08A", desc: "Walking on the water — calm, strong, kind (the teacher may read Jesus’ lines)" },
          { name: "Peter", color: "#7BA7D9", desc: "Bold, eager — then terrified" },
          { name: "Andrew", color: "#4DB6AC", desc: "Peter’s brother — exhausted from rowing" },
          { name: "Thomas", color: "#A1887F", desc: "Likes to be sure about things" },
          { name: "Everyone", color: "#FFFFFF", desc: "The wind, the rowers, and the worshippers" }
        ],
        lines: [
          { character: "Narrator", text: "Night on the lake. The disciples have been rowing against the wind for hours.", direction: true },
          { character: "Everyone", text: "Heave… heave… heave…", action: "row slowly, tired" },
          { character: "Andrew", text: "My arms are going to fall off. We’ve hardly moved!" },
          { character: "Everyone", text: "Whoooosh…", action: "wind", sfx: "wind" },
          { character: "Thomas", text: "Wait. What’s that — out on the water?", action: "point, squint" },
          { character: "Andrew", text: "Someone’s… walking. On the waves." },
          { character: "Everyone", text: "It’s a GHOST! Aaaaah!", action: "scream, cling to each other" },
          { character: "Jesus", text: "Don’t worry! I am Jesus. Don’t be afraid." },
          { character: "Thomas", text: "Is it really him? How can it be him?" },
          { character: "Peter", text: "Lord, if it is really you, tell me to come to you on the water.", action: "stand up in the boat" },
          { character: "Jesus", text: "Come on!", action: "hold out a hand" },
          { character: "Andrew", text: "Peter, are you mad? Sit down!", action: "grab his arm" },
          { character: "Narrator", text: "Peter got out of the boat and started walking on the water towards Jesus." },
          { character: "Peter", text: "I’m doing it… I’m actually doing it!", action: "slow, wobbly steps, eyes on Jesus" },
          { character: "Everyone", text: "WHOOOOOSH!", action: "the wind roars", sfx: "wind" },
          { character: "Peter", text: "The wind… look at the waves… oh no…", action: "look away from Jesus, at the wind" },
          { pause: "Freeze! Peter has stopped looking at Jesus. What is he looking at instead — and what should he do now?", seconds: 20 },
          { character: "Narrator", text: "When Peter saw how strong the wind was, he was afraid and started sinking." },
          { character: "Peter", text: "Save me, Lord!", action: "sinking, arm up" },
          { character: "Narrator", text: "At once, Jesus reached out his hand and helped Peter up." },
          { character: "Jesus", text: "You surely don’t have much faith. Why do you doubt?", action: "gently, holding Peter’s arm" },
          { character: "Narrator", text: "When Jesus and Peter got into the boat, the wind died down." },
          { character: "Everyone", text: "Shhhhh……", action: "wind fades to silence" },
          { character: "Andrew", text: "He walked on the water. He stopped the wind." },
          { character: "Thomas", text: "Now I’m sure.", action: "kneel" },
          { character: "Everyone", text: "You really are the Son of God!", action: "kneel and worship" }
        ],
        debrief: [
          { level: "think", text: "Peter was walking fine — then he started to sink. What changed?", hint: "He looked at the wind and the waves instead of at Jesus, and fear took over. The storm hadn’t changed — where he was looking had." },
          { level: "look", text: "What did Jesus do the moment Peter cried for help?", hint: "‘At once, Jesus reached out his hand’ (14:31). He didn’t wait or let him sink to teach a lesson." }
        ],
        notes: "Thomas is in the role-play as one of the Twelve; Matthew doesn’t name who said what apart from Peter and Jesus. Make sure the class kneels quietly for the last line — it’s the climax of the whole week." },

      { type: "question", id: "w-q2", title: "Brave or silly?", minutes: 1.5, level: "dig", mode: "pair", seconds: 45,
        text: "Peter was the only one who got out of the boat — and the only one who sank. Was stepping out brave faith, or a silly mistake?",
        hint: "Invite disagreement. Brave faith: he asked Jesus first and only stepped when Jesus said ‘Come on!’; he walked on water — no one else did; even when he sank, he knew who to call. Silly: he could have stayed safe; he panicked. Best answer: it was real faith, even though it was small faith — and Jesus didn’t scold him for stepping out, only for doubting. Follow-up: ‘What would the others in the boat have missed?’ Follow-up 2: ‘Is it better to step out and sink, or never step out?’ If silent: ‘Who learned more about Jesus that night — Peter or the ones who stayed in the boat?’" },

      { type: "question", id: "w-q3", title: "Eyes on the wind", minutes: 1, level: "think", mode: "discuss", seconds: 40, skippable: true,
        text: "Peter was fine while he looked at Jesus. He sank when he looked at the wind. What kinds of ‘wind’ make kids take their eyes off Jesus?",
        hint: "Ideas: worry about tests; what friends think; scary news; arguments at home; online stuff; fear of being left out; thinking about everything that could go wrong. Looking at Jesus means remembering who he is (Lord of the storm), what he’s promised (he’s with us), and talking to him. Follow-up: ‘How can you “look at Jesus” in a real moment at school?’ (A one-line prayer, remembering a verse, our memory verse!) Follow-up 2: ‘Does looking at Jesus make the wind go away?’ (Not always — but it stops it from being the biggest thing.) If silent: give an example of your own." },

      { type: "apply", id: "w-apply", title: "Head · Heart · Hands", minutes: 1,
        head: "When I keep my eyes on Jesus I can do brave things — and when I sink, he catches me.",
        heart: "Jesus, help me look at you, not at the wind.",
        hands: "Pick one ‘step out of the boat’ this week — sitting with someone new at lunch, owning up to something, having a go at something hard — and pray one sentence before you do it.",
        settings: ["school", "playground", "home", "sport"],
        notes: "Ask 2–3 students to say their ‘step out’ out loud." },

      { type: "scene", id: "w-scene", title: "Come on!", minutes: 0.5, optional: true,
        art: { key: "t2w09d3-a" },
        boxes: [
          { text: "“Don’t worry! I am Jesus. Don’t be afraid.”", pos: "tl", style: "speech" },
          { text: "Jesus saw them struggling — and came to them.", pos: "br", style: "caption" }
        ] },

      { type: "verse", id: "w-verse", title: "Verse with actions", minutes: 1, optional: true, activity: "actions",
        notes: "Actions for Psalm 56:3. Try it once ‘shivery and scared’, then once strong and confident." },

      { type: "prayer", id: "w-pray", title: "Pairs: praying for each other’s fears", minutes: 3, mood: "calm", style: "pairs",
        tip: "Peter didn’t pray a long prayer — just three words: “Save me, Lord!” Today, pray one short sentence for your partner’s fear. Short prayers are real prayers.",
        opening: "Turn to a partner. Each tell the other one thing that sometimes makes you afraid — keep it simple, like ‘the dark’ or ‘tests’ or ‘being left out’.",
        phases: [
          { name: "Wow", lead: "Together, say what Jesus did on the water.",
            prompts: ["Jesus, you walked on the waves.", "Jesus, you reached out your hand at once."],
            starter: "Wow, Jesus, you…", seconds: 30, aloud: "Wow, Jesus — you walked on the water and you caught Peter!" },
          { name: "Sorry", lead: "Silently: when have you looked at the ‘wind’ instead of Jesus?",
            prompts: ["Sorry for looking at my worries instead of you.", "Sorry for doubting you."],
            starter: "Jesus, I’m sorry for…", seconds: 25, aloud: "Jesus, we’re sorry for the times we doubted you." },
          { name: "Thanks", lead: "Thank Jesus that he never lets go.",
            prompts: ["Thank you that you catch me when I sink.", "Thank you for coming to your friends in the dark."],
            starter: "Thank you, Jesus, for…", seconds: 30, aloud: "Thank you, Jesus, that you catch us when we sink." },
          { name: "Please", lead: "Now pray one sentence for your partner’s fear, using their name.",
            prompts: ["Jesus, please help (name) when they feel afraid of…", "Please help (name) keep their eyes on you."],
            starter: "Please, Jesus, help (name)…", seconds: 50, aloud: "Please, Jesus, help each of us keep our eyes on you." }
        ],
        closing: "Finish with Peter’s prayer, all together: “Save me, Lord!” Amen.",
        notes: "Pair students thoughtfully. If anyone doesn’t want to share a fear, they can say ‘something I’m worried about’. Students can pray silently for their partner if they’d rather not speak." }
    ] },

  /* ======================= THURSDAY ======================= */
  { label: "Thursday", theme: "“Why Did You Doubt?”", roleplay: false, mood: "dawn",
    learningIntentions: [
      "We are learning how Jesus caught Peter and what he said to him.",
      "We are learning what to do when we feel afraid, using Psalm 56:3.",
      "I can recite Psalm 56:3 and use it as a prayer when I’m scared."
    ],
    assessment: "Students can retell both storm stories, explain that Jesus is with us and in charge when we’re afraid, and recite Psalm 56:3 from memory.",
    resources: ["Screen", "Take-home challenge cards", "Optional: small cards for students to copy Psalm 56:3 onto"],
    whereToNext: "Next week: Faith Without Seeing — Thomas meets the risen Jesus, and our term finale!",
    slides: [
      { type: "title", id: "th-title", title: "“Why Did You Doubt?”", minutes: 0.5, kicker: "Term 2 · Week 9", sub: "Faith in the Storm",
        art: { key: "t2w09d4-b" }, notes: "Let the splash play." },

      { type: "review", id: "th-review", title: "True or false?", minutes: 2.5, format: "truefalse",
        prompt: "True or false? Stand up for TRUE, sit down for FALSE!",
        items: [
          { text: "In the first storm, Jesus was asleep in the back of the boat.", answer: true, why: "His head was on a pillow (Mark 4:38)." },
          { text: "Jesus helped the disciples bail out the water.", answer: false, why: "He ordered the wind and the waves to calm down — and they did." },
          { text: "After the storm stopped, the disciples were more afraid than ever.", answer: true, why: "“Who is this? Even the wind and the waves obey him!”" },
          { text: "When Jesus walked on the water, the disciples thought he was a ghost.", answer: true, why: "They were terrified and started screaming (Matthew 14:26)." },
          { text: "Peter sank because the water was too deep.", answer: false, why: "He saw how strong the wind was and became afraid." },
          { text: "Jesus waited a while before he helped Peter.", answer: false, why: "“At once, Jesus reached out his hand.”" }
        ],
        hint: "Each statement: students stand (true) or sit (false), then click to reveal. Ask one student to explain each answer and which story it comes from.",
        notes: "Click once to show each statement, again to reveal the answer." },

      { type: "scripture", id: "th-scr", title: "Matthew 14:31–33 · Psalm 56:3", minutes: 1, ref: "Matthew 14:31–33; Psalm 56:3", version: "CEV",
        lines: [
          { text: "At once, Jesus reached out his hand. He helped Peter up and said, “You surely don’t have much faith. Why do you doubt?”", ref: "Matthew 14:31" },
          { text: "When Jesus and Peter got into the boat, the wind died down.", ref: "Matthew 14:32" },
          { text: "The men in the boat worshiped Jesus and said, “You really are the Son of God!”", ref: "Matthew 14:33" },
          { text: "Even when I am afraid, I keep on trusting you.", ref: "Psalm 56:3" }
        ],
        emphasis: ["reached out his hand", "Why do you doubt?", "worshiped", "Son of God", "I keep on trusting you"],
        notes: "Matthew 14:33 answers Tuesday’s question from Mark 4:41, ‘Who is this?’" },

      { type: "story", id: "th-story", title: "The hand that catches", minutes: 2, transition: "page", mood: "dawn",
        beats: [
          { text: "At once, Jesus reached out his hand.", caption: "Not later. Not after a lecture. At once.",
            art: { key: "t2w09d4-a", label: "Thu · story beats 1–2 + stretch scene", desc: "Close view of a strong hand firmly gripping a sinking fisherman’s wrist just above churning dark water, spray flying, a faint dawn light breaking behind.", shot: "close-up on hands, dramatic", motion: "kenburns-in", chars: ["jesus", "peter"],
              scene: "Close view of two hands above churning dark water: a strong steady hand firmly gripping a sinking fisherman’s wrist and pulling him upward, spray flying, the fisherman’s head and shoulders just above the waves, a faint dawn glow breaking through clouds behind." } },
          { text: "“Why do you doubt?”", caption: "Said while holding Peter tight." },
          { text: "“You really are the Son of God!”", caption: "The answer to “Who is this?”", shout: true,
            art: { key: "t2w09d4-b", label: "Thu · title + story beats 3–4", desc: "The boat on a calm lake at dawn, the disciples kneeling in worship, Jesus standing among them seen in three-quarter view from behind, soft morning light spreading across the water.", shot: "wide, peaceful dawn", motion: "kenburns-out", chars: ["jesus", "peter"],
              scene: "A small fishing boat resting on a perfectly calm lake at dawn, the soaked disciples kneeling in worship, Jesus standing among them seen in three-quarter view from behind, soft morning light spreading across the still water and the hills." } },
          { text: "When I am afraid…", caption: "…I keep on trusting you." }
        ],
        narration: "Peter was sinking. He shouted, ‘Save me, Lord!’ And Matthew tells us that at once, Jesus reached out his hand. Not after a minute. Not after a lecture. At once. He caught Peter and pulled him up.\n\nThen, while he was still holding him, Jesus said, ‘You surely don’t have much faith. Why do you doubt?’ Notice where Jesus said it — not from far away, but up close, holding Peter tight. Peter’s faith was small and wobbly. But it was enough to cry out to the right person. And that’s all it takes.\n\nThey climbed into the boat, and the wind died down. Then every disciple in that boat knelt and worshipped Jesus. ‘You really are the Son of God!’ That was the answer to the question they had asked after the first storm: ‘Who is this?’\n\nSo what do we do when we’re afraid? A thousand years before Peter, King David was in real danger, far from home among his enemies. And he wrote our memory verse: ‘Even when I am afraid, I keep on trusting you.’\n\nNotice: David doesn’t pretend he isn’t scared. He says it. Then he looks to God. Then he keeps on trusting.\n\nJesus never promised there would be no storms. But he did promise, ‘I will be with you always.’ And Jesus went into the biggest storm of all for us — the cross — so that nothing could ever pull us away from God. When you are afraid, say it, look to Jesus, and pray. He is with you, and he is in charge.",
        notes: "About 2 minutes. Psalm 56’s heading says David wrote it when the Philistines captured him in Gath (1 Samuel 21:10–15). ‘I will be with you always’ is from Matthew 28:20." },

      { type: "question", id: "th-q1", title: "At once", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "What did the disciples say when Jesus and Peter got back into the boat?",
        options: ["“Let’s go home!”", "“You really are the Son of God!”", "“That was close!”", "“Peter, you’re so brave!”"], answer: 1,
        hint: "Answer: B (Matthew 14:33). Follow-up: ‘Which question from Tuesday does this answer?’ (‘Who is this?’ from Mark 4:41.) Follow-up 2: ‘What did they do as they said it?’ (They worshipped him — knelt in awe.) If silent: read the third scripture line together." },

      { type: "question", id: "th-q2", title: "Up close", minutes: 1.5, level: "think", mode: "pair", seconds: 45,
        text: "Jesus asked “Why do you doubt?” while he was holding Peter up. What does that show about how Jesus treats us when our faith is small?",
        hint: "Good answers: he rescues first and teaches second; he’s gentle, not harsh; he doesn’t let go of us even when we doubt; small faith is still faith when it’s aimed at him; he wants our faith to grow, not to shame us. Follow-up: ‘How is that like a parent teaching a child to ride a bike?’ Follow-up 2: ‘How might this help someone who feels their faith is too small?’ If silent: ask ‘Imagine Jesus said it from the boat while Peter was still sinking. How would that be different?’" },

      { type: "recap", id: "th-recap", title: "This week’s Big Idea", minutes: 1.5,
        points: [
          "In the storm, Jesus was in the boat the whole time — even when he seemed asleep.",
          "Jesus rules the wind and the waves, because he is the Son of God.",
          "When we’re afraid, we can look to Jesus and cry out to him — and he catches us."
        ],
        notes: "Then the Big Idea stamps in: ‘When we’re afraid, we can look to Jesus — he’s with us and he’s in charge.’" },

      { type: "question", id: "th-q3", title: "When storms don’t stop", minutes: 1.5, level: "dig", mode: "discuss", seconds: 45, skippable: true,
        text: "Jesus stopped these storms. But sometimes scary things don’t go away when we pray. Does that mean Jesus doesn’t care?",
        hint: "Handle gently — some students may be thinking of illness, family breakup or grief. Good answers: no — he’s still with us in the boat; he sometimes calms us instead of the storm; he went through the cross himself, so he understands suffering; he promised ‘I will be with you always’; one day he’ll end every storm for good. Follow-up: ‘What did Shadrach, Meshach and Abednego say a few weeks ago?’ (‘Even if he doesn’t…’ — Week 6.) Follow-up 2: ‘What helps you keep trusting when a prayer isn’t answered the way you hoped?’ If silent: share a simple, appropriate example from your own life." },

      { type: "challenge", id: "th-chal", title: "This Week’s Challenge", minutes: 2,
        text: "When you feel afraid this week, say Psalm 56:3 — “Even when I am afraid, I keep on trusting you” — and then pray one sentence to Jesus.",
        why: "“Even when I am afraid, I keep on trusting you.” — Psalm 56:3",
        head: "Jesus is with me and he’s in charge.", heart: "Even when I’m afraid, I’ll keep trusting you.", hands: "Say Psalm 56:3 and pray one sentence when I’m scared.",
        takeHome: true,
        notes: "Next Monday will check in on this. Suggest students write the verse on a card for their pocket, pencil case or bedside." },

      { type: "verse", id: "th-verse", title: "Memory verse: fade-out", minutes: 1.5, activity: "fade",
        notes: "Fade out Psalm 56:3. It’s short — challenge them to say it in a whisper, then strong, then ‘as if you’re in a storm’." },

      { type: "scene", id: "th-scene", title: "Caught", minutes: 1, optional: true,
        art: { key: "t2w09d4-a" },
        boxes: [
          { text: "“Save me, Lord!”", pos: "tl", style: "shout" },
          { text: "At once, Jesus reached out his hand.", pos: "br", style: "caption" }
        ] },

      { type: "prayer", id: "th-pray", title: "Praying Psalm 56", minutes: 3, mood: "calm", style: "psalm",
        tip: "David turned his fear into a prayer. Today we pray his psalm line by line — you can borrow the Bible’s words when you don’t have your own.",
        opening: "Let’s pray, using David’s words. I’ll say a line; you repeat it after me.",
        phases: [
          { name: "Wow", lead: "David praised God even in danger. Repeat after me:",
            prompts: ["“I praise your promises!” (Psalm 56:4)", "Jesus, you are the Son of God, Lord of the storm."],
            starter: "Wow, God, you…", seconds: 30, aloud: "I praise your promises! Jesus, you really are the Son of God!" },
          { name: "Sorry", lead: "Silently: Jesus asked Peter, “Why do you doubt?”",
            prompts: ["Sorry for doubting you when I’m scared.", "Sorry for looking at the wind instead of you."],
            starter: "God, I’m sorry for…", seconds: 25, aloud: "Lord, we’re sorry for doubting you." },
          { name: "Thanks", lead: "Thank Jesus for catching Peter — and for catching us.",
            prompts: ["Thank you that you reach out your hand at once.", "Thank you that you are with me always."],
            starter: "Thank you, Jesus, for…", seconds: 30, aloud: "Thank you, Jesus, that you are with us always." },
          { name: "Please", lead: "Now pray the memory verse as your own prayer — and add one sentence about something that scares you.",
            prompts: ["“Even when I am afraid, I keep on trusting you.”", "Please help me when I feel afraid of…"],
            starter: "Even when I am afraid…", seconds: 45, aloud: "Even when I am afraid, I keep on trusting you." }
        ],
        closing: "Let’s say it together one last time: “Even when I am afraid, I keep on trusting you.” Amen.",
        notes: "Repeat-after-me works well here. ‘I praise your promises!’ is from Psalm 56:4 (CEV)." }
    ] }
  ]
};
