/* Morninglight 2027 — Term 3 Week 3: Lost Sheep & Lost Coin (Luke 15:1–10). Scripture: CEV. */
window.DEVOTIONS = window.DEVOTIONS || {};
window.DEVOTIONS["Term 3"] = window.DEVOTIONS["Term 3"] || {};
window.DEVOTIONS["Term 3"]["Week 3"] = {
  lessonTitle: "Lost Sheep & Lost Coin",
  passage: "Luke 15:1–10",
  bigIdea: "God goes looking for the lost, and heaven throws a party when even one person is found.",
  godIs: "Seeking",
  memoryVerse: { ref: "Luke 15:7", text: "In the same way, there is more happiness in heaven because of one sinner who turns to God than over ninety-nine good people who don’t need to.", version: "CEV",
    chunks: ["In the same way,", "there is more happiness in heaven", "because of one sinner", "who turns to God", "than over ninety-nine good people", "who don’t need to."],
    actions: ["Hands side by side — ‘the same’", "Arms up, big smile — heaven’s party", "Hold up one finger", "Turn right around on the spot", "Wiggle all ten fingers — ninety-nine!", "Shrug, palms up"] },
  prayerFocus: { skill: "Your kingdom come", tip: "Jesus taught us to pray, “Your kingdom come.” A kingdom is wherever a king rules, so we are asking God to bring his good rule — his kindness, welcome and rescue — into our school, our homes and our country. This week we pray it for people who feel lost." },
  mood: "calm",
  cover: "t3w03-cover",
  characters: ["jesus", "aroha", "sione", "jun", "mia"],
  coverArt: { key: "t3w03-cover", label: "Week cover", desc: "A shepherd striding home over the hills at sunset with a lamb across his shoulders.", shot: "silhouette, wide",
    scene: "A shepherd strides along a hilltop at sunset with a lamb draped across his shoulders, his staff in one hand. He is a strong black silhouette against a huge glowing sky, and far below a village waits with lamps beginning to glow.", chars: [] },
  comicArt: { key: "t3w03-comic", label: "Comic page (week opener — for the comic-page viewer, coming in a later build)", format: "portrait", desc: "Six-panel comic page of the lost sheep and the lost coin.",
    panels: "Six panels. Panel 1 (wide): religious leaders frowning at Jesus eating with tax collectors. Panel 2 (small): a shepherd counting sheep into a pen and pausing. Panel 3 (tall): the shepherd climbing steep hills at dusk toward a stranded lamb. Panel 4 (wide): the shepherd carrying the lamb home to cheering neighbours. Panel 5 (small): a woman sweeping by lamplight, a coin glinting. Panel 6 (wide): the woman and her friends celebrating in a courtyard.", chars: ["jesus"] },

  days: [

  /* ======================= MONDAY ======================= */
  { label: "Monday", theme: "The Lost Sheep", roleplay: true, mood: "desert",
    learningIntentions: [
      "We are learning why Jesus told a story about a shepherd and one lost sheep.",
      "We are learning what the shepherd did when he found it.",
      "I can explain what Jesus said happens in heaven when one person turns to God."
    ],
    assessment: "Listen for students recalling that the leaders grumbled because Jesus ate with sinners, that the shepherd left the ninety-nine to search until he found the one, and that there is joy in heaven over one person who turns to God.",
    resources: ["Screen", "Optional: a soft toy sheep for the shepherd", "Optional: a scarf to wear as a shepherd’s head cloth"],
    whereToNext: "Tomorrow: who was really listening when Jesus told this story — and the twist that shocked them. Plus a lost coin!",
    slides: [
      { type: "title", id: "m-title", title: "The Lost Sheep", minutes: 0.5, kicker: "Term 3 · Week 3", sub: "Lost Sheep & Lost Coin",
        art: { key: "t3w03-cover" }, notes: "Let the splash play. This week the question is: what is God like when we are lost?" },

      { type: "hook", id: "m-hook", title: "Lost it!", minutes: 1.5,
        checkin: { text: "Last week Jesus told us about the Good Samaritan, who showed mercy to a stranger. Your challenge: be a neighbour — do one kind thing for someone who isn’t one of your usual friends. What did you do?" },
        text: "Have you ever lost something that really mattered to you — a phone, a toy, a pet, a favourite hoodie?",
        ask: "What did you do to find it? How did it feel when you did?",
        hint: "Check-in first: ask 2–3 students what kind thing they did, and celebrate honest ‘I forgot’ answers too. Then the hook: take a few stories. Land it: ‘Today Jesus tells a story about something lost — and what happens when it’s found. Remember: a parable is an earthly story with a heavenly meaning.’" },

      { type: "scripture", id: "m-scr", title: "Luke 15:1–7", minutes: 1, ref: "Luke 15:1–7", version: "CEV",
        lines: [
          { text: "Many tax collectors and other sinners were coming to listen to Jesus. So the Pharisees and the teachers of the Law of Moses started grumbling, “This man is friendly with sinners. He even eats with them.”", ref: "Luke 15:1–2" },
          { text: "“Suppose one of you has a hundred sheep, and one of them gets lost. Won’t you leave the other ninety-nine in the field and go look for the lost sheep until you find it?”", ref: "Luke 15:4" },
          { text: "“And when you find it, you will be so glad that you will put it on your shoulder and carry it home.”", ref: "Luke 15:5" },
          { text: "“In the same way, there is more happiness in heaven because of one sinner who turns to God than over ninety-nine good people who don’t need to.”", ref: "Luke 15:7" }
        ],
        emphasis: ["grumbling", "ninety-nine", "until you find it", "put it on your shoulder", "more happiness in heaven"],
        notes: "Verses selected. ‘Pharisees’ = very strict religious leaders. ‘Tax collectors’ = men who collected money for the Roman rulers, often cheating people. ‘Sinners’ here means people who were known to have turned away from God’s way. Luke 15:7 is our memory verse." },

      { type: "story", id: "m-story", title: "Ninety-nine and one", minutes: 3, transition: "page", mood: "desert",
        beats: [
          { text: "Dinner with the wrong crowd.", caption: "Tax collectors, ‘sinners’ — and Jesus, laughing with them.",
            art: { key: "t3w03d1-a", label: "Mon · story beat 1 + stretch scene", desc: "Jesus laughing at a crowded table with tax collectors and ordinary people while religious leaders frown from the doorway.", shot: "medium wide, interior", motion: "kenburns-right", chars: ["jesus"],
              scene: "Inside a crowded courtyard, Jesus reclines at a low table among tax collectors and ordinary villagers, seen in three-quarter view, sharing bread and laughing. In the arched doorway, two religious leaders in long tasselled robes stand with folded arms, frowning and whispering." } },
          { text: "The leaders grumbled.", caption: "“This man is friendly with sinners. He even eats with them.”", shout: true },
          { text: "One sheep out of a hundred.", caption: "Ninety-nine… and one missing." },
          { text: "Out into the dark hills.", caption: "He searched until he found it.",
            art: { key: "t3w03d1-b", label: "Mon · story beat 4 + role-play card", desc: "A shepherd climbing steep rocky hills at dusk, calling out, as a tiny lamb waits stuck on a ledge.", shot: "wide, dusk", motion: "kenburns-up", chars: [],
              scene: "At dusk a shepherd scrambles up a steep, rocky hillside with his staff, one hand cupped to his mouth as he calls. Far above him, a tiny lamb stands stranded on a narrow ledge, small against the darkening grey sky." } },
          { text: "On his shoulders, all the way home.", caption: "“Let’s celebrate! I’ve found my lost sheep!”" }
        ],
        narration: "Imagine a crowded house beside the Sea of Galilee, a long time ago. Jesus is having dinner, and the guests are not the people you’d expect. There are tax collectors, who collected money for the Roman rulers and often kept extra for themselves, so almost everyone hated them. There are others the crowd called ‘sinners’ — people known for turning away from God’s way. And Jesus is laughing with them, eating with them, listening to them.\n\nAt the doorway stand the Pharisees and the teachers of the Law of Moses. Pharisees were very strict religious leaders who worked hard to keep all of God’s rules, and they looked down on people who didn’t. They fold their arms and start grumbling: ‘This man is friendly with sinners. He even eats with them!’\n\nJesus hears them. He doesn’t argue. He tells a parable — an earthly story with a heavenly meaning.\n\n‘Suppose one of you has a hundred sheep, and one of them gets lost. Won’t you leave the other ninety-nine in the field and go look for the lost sheep until you find it?’\n\nPicture the shepherd at sunset, counting his sheep the way he does every night. Ninety-seven, ninety-eight, ninety-nine… and he stops. He counts again. Still ninety-nine. One is missing.\n\nHe doesn’t shrug. He doesn’t say, ‘Ninety-nine is plenty.’ He leaves the others safe and goes out into the hills, over rocks and through thorns, calling and listening. Hour after hour. He does not give up until he finds it.\n\nThere it is, a little lamb, tired and scared and stuck on a ledge. Does the shepherd scold it? No. Jesus says, ‘When you find it, you will be so glad that you will put it on your shoulder and carry it home.’ The lamb doesn’t even have to walk.\n\nAnd when the shepherd gets home, he can’t keep the news to himself. He calls his friends and neighbours: ‘Let’s celebrate! I’ve found my lost sheep!’\n\nThen Jesus said something that must have stung. There will be more happiness in heaven over one sinner who turns to God than over ninety-nine good people who don’t need to.\n\nAround the table, the tax collectors listened with wide eyes. Somebody was looking for them. Somebody would be glad when they were found.",
        notes: "About 3 minutes. Luke 15:3–7. ‘Sinners’ is the label used by the crowd — be gentle with it: Jesus is not saying these people were worse than anyone else. Pharisees are not villains for all time; they stand for anyone who trusts themselves. Re-use the phrase ‘an earthly story with a heavenly meaning’ from Week 1." },

      { type: "question", id: "m-q1", title: "The grumble", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "Why did the Pharisees and teachers grumble about Jesus?",
        options: ["He ate with tax collectors and sinners", "He was late for dinner", "He wouldn’t tell a story", "He wore the wrong clothes"], answer: 0,
        hint: "Answer: A (Luke 15:2). Follow-up: ‘What did the shepherd do when one sheep went missing?’ (Left the ninety-nine and searched until he found it.) Follow-up 2: ‘What did he do when he found it?’ (Carried it home and called a party.) If silent: re-read the first scripture line." },

      { type: "question", id: "m-q2", title: "Why one?", minutes: 1.5, level: "think", mode: "pair", seconds: 45, skippable: true,
        text: "The shepherd still had ninety-nine sheep. Why do you think he went to so much trouble for just one?",
        hint: "Good answers: each sheep matters to him; he cares about each one by name; one missing sheep is in real danger; he is not willing to lose any. Follow-up: ‘Who is the shepherd meant to be like?’ (God.) Follow-up 2: ‘What does it say about how God sees each person?’ If silent: ask, ‘If you were the one missing, what would you want your family to do?’" },

      { type: "roleplay", id: "m-rp", title: "The Lost Sheep", minutes: 5, ref: "Luke 15:1–7",
        art: { key: "t3w03d1-b" },
        imagined: "Jesus’ words and the grumbling of the leaders are from Luke 15 (CEV), lightly shortened. The shepherd’s acted-out story, the tax collector’s line and the neighbour’s advice are imagined.",
        actions: ["Everyone: happy dinner chatter", "Everyone (as sheep): ‘Baa!’", "Everyone: a big party cheer at the end"],
        props: ["Optional: a soft toy sheep", "Optional: a scarf for the shepherd"],
        characters: [
          { name: "Narrator", color: "#F2C77B", desc: "Tells the story" },
          { name: "Jesus", color: "#FFE9A8", desc: "Kind, calm storyteller" },
          { name: "Pharisee", color: "#B0BEC5", desc: "A strict religious leader — frowning, arms folded" },
          { name: "Teacher of the Law", color: "#A1887F", desc: "Another strict leader — shocked" },
          { name: "Tax Collector", color: "#8BC34A", desc: "Used to being avoided — amazed to be welcome" },
          { name: "Shepherd", color: "#7BA7D9", desc: "In Jesus’ story: never gives up" },
          { name: "Neighbour", color: "#FFB547", desc: "In Jesus’ story: thinks one sheep isn’t worth it" },
          { name: "Everyone", color: "#FFFFFF", desc: "Dinner guests, then sheep, then a party crowd" }
        ],
        lines: [
          { character: "Narrator", text: "A crowded house. Tax collectors and friends are eating dinner with Jesus.", direction: true },
          { character: "Everyone", text: "Pass the bread! Ha ha ha!", action: "happy dinner chatter" },
          { character: "Tax Collector", text: "Nobody ever eats with me. Why is Jesus sitting at my table?", action: "amazed" },
          { character: "Pharisee", text: "This man is friendly with sinners. He even eats with them!", action: "arms folded, frowning" },
          { character: "Teacher of the Law", text: "Shocking! A holy teacher should stay far away from people like that.", action: "shake head" },
          { character: "Jesus", text: "Suppose one of you has a hundred sheep, and one of them gets lost." },
          { character: "Jesus", text: "Won’t you leave the other ninety-nine and go look for the lost sheep until you find it?" },
          { character: "Narrator", text: "Let’s act out Jesus’ story. Sunset. The shepherd counts his sheep.", direction: true },
          { character: "Everyone", text: "Baa! Baa! Baa!", action: "wriggle like sheep" },
          { character: "Shepherd", text: "Ninety-seven… ninety-eight… ninety-nine. Wait. I’m one short!", action: "count on fingers" },
          { character: "Neighbour", text: "Ninety-nine is plenty! Forget it. It’s only one sheep.", action: "shrug" },
          { character: "Shepherd", text: "One sheep matters to me. I’m going to find it.", action: "grab staff" },
          { character: "Narrator", text: "Over the rocks, through the thorns, calling in the dark." },
          { character: "Shepherd", text: "Little one! Where are you? Call out so I can find you!", action: "hands cupped to mouth" },
          { character: "Everyone", text: "Baaaa…", action: "one small, wobbly sheep voice, far away" },
          { pause: "Freeze! The shepherd has found the lamb, stuck on a ledge. What do you think he does — scold it, or something else?", seconds: 20 },
          { character: "Shepherd", text: "There you are! No scolding. Up you come.", action: "lift the lamb onto your shoulders" },
          { character: "Narrator", text: "He carries it home on his shoulders, full of joy." },
          { character: "Shepherd", text: "Friends! Neighbours! Let’s celebrate! I’ve found my lost sheep!", action: "arms wide" },
          { character: "Everyone", text: "Hooray!", action: "big party cheer" },
          { character: "Jesus", text: "There is more happiness in heaven over one sinner who turns to God than over ninety-nine good people who don’t need to." },
          { character: "Pharisee", text: "Hmm. Is he talking about… us?", action: "shuffle, uncomfortable" },
          { character: "Tax Collector", text: "Somebody was looking for me.", action: "look up, quietly amazed" },
          { character: "Everyone", text: "Heaven celebrates when one is found!" }
        ],
        debrief: [
          { level: "look", text: "What did the shepherd do when he found his lamb?", hint: "He didn’t scold it. He put it on his shoulders, carried it home and called a celebration (Luke 15:5–6)." },
          { level: "think", text: "How do you think the tax collector felt at the end?", hint: "Surprised, relieved, wanted. Someone was glad he was there. Jesus’ story was a welcome for him." }
        ],
        notes: "Keep the Pharisee’s and Teacher’s lines playful rather than nasty. They are not villains for all time — they stand for anyone who trusts themselves. Choose confident readers for the Pharisee roles and let the Tax Collector be quiet and sincere at the end. The shepherd’s story is a parable inside the dinner scene." },

      { type: "question", id: "m-q3", title: "Who does the finding?", minutes: 1, level: "dig", mode: "discuss", seconds: 40,
        text: "In Jesus’ story the sheep did nothing at all. The shepherd did all the searching and the carrying. What does that tell us about what God is like?",
        hint: "Ideas: God takes the first step; he searches before we ask; we can’t rescue ourselves, but he can; he doesn’t scold, he carries; he is glad. Follow-up: ‘Who is the shepherd meant to be?’ (God — and Jesus, who came to find us.) Follow-up 2: ‘How might that feel to someone who has gone their own way?’ If silent: ask, ‘Can a lost sheep find its own way home?’" },

      { type: "apply", id: "m-apply", title: "Head · Heart · Hands", minutes: 1,
        head: "God goes looking for every lost person, and he is glad when one is found.",
        heart: "God, thank you that I matter so much to you.",
        hands: "Look for the ‘one’ this week: when your group is together, check whether anyone is on the edge, and go to them.",
        settings: ["playground", "classroom", "home"],
        notes: "This quietly previews Thursday’s ‘Welcome in’ challenge." },

      { type: "scene", id: "m-scene", title: "Eating with sinners", minutes: 0.5, optional: true,
        art: { key: "t3w03d1-a" },
        boxes: [
          { text: "“He even eats with them.”", pos: "tl", style: "speech" },
          { text: "Jesus welcomed the people everyone else avoided.", pos: "br", style: "caption" }
        ] },

      { type: "verse", id: "m-verse", title: "Memory verse peek", minutes: 1, optional: true, activity: "echo",
        notes: "Introduce Luke 15:7. Echo it line by line in a ‘shepherd calling’ voice." },

      { type: "prayer", id: "m-pray", title: "Your kingdom come (silent)", minutes: 3, mood: "calm", style: "silent",
        tip: "Jesus taught us to pray, “Your kingdom come.” A kingdom is wherever a king rules, so we are asking God to bring his kindness and welcome into our world. Today we pray it for people who feel lost.",
        opening: "Let’s get still. Imagine the shepherd out in the dark hills, still looking for one lost sheep. That’s how much God cares about each person. Breathe in… and out.",
        phases: [
          { name: "Wow", lead: "Think about what God is like — the Shepherd who never gives up.",
            prompts: ["God, you go looking for lost people.", "You are glad when even one comes home."],
            starter: "Wow, God, you…", seconds: 35, aloud: "Wow, God — you never give up on anyone!" },
          { name: "Sorry", lead: "Have you walked past someone who was alone, or wandered off from God yourself?",
            prompts: ["Sorry for the times I ignored someone who was left out.", "Sorry for going my own way."],
            starter: "God, I’m sorry for…", seconds: 30, aloud: "God, we’re sorry for the times we went our own way." },
          { name: "Thanks", lead: "Thank God for searching for you.",
            prompts: ["Thank you for looking for me.", "Thank you that I matter to you, even when I feel small."],
            starter: "Thank you, God, for…", seconds: 30, aloud: "Thank you, God, for finding us and carrying us home." },
          { name: "Please", lead: "Pray “Your kingdom come” for someone who feels lost or lonely.",
            prompts: ["Your kingdom come: please find the lonely ones.", "Please show (name) that you are looking for them."],
            starter: "Please, God, find…", seconds: 35, aloud: "Your kingdom come, God — please find everyone who feels lost." }
        ],
        closing: "Let’s say Jesus’ words together: “Your kingdom come.” Amen.",
        notes: "Explain ‘kingdom’ simply: where God is King and his good ways rule. Model a one-sentence prayer first. Reassure students that short prayers are great." }
    ] },

  /* ======================= TUESDAY ======================= */
  { label: "Tuesday", theme: "Who Was Listening? And the Lost Coin", roleplay: false, mood: "dawn",
    learningIntentions: [
      "We are learning who was listening when Jesus told this parable, and why it shocked them.",
      "We are learning who is who in the stories of the lost sheep and the lost coin.",
      "I can explain what the shepherd and the woman show us about God."
    ],
    assessment: "Listen for students naming the two audiences (tax collectors and sinners; Pharisees and teachers), explaining at least one surprise in the story (leaving the ninety-nine, a party for one), and saying that the shepherd and the woman stand for God.",
    resources: ["Screen", "Paper and pencils for the prayer"],
    whereToNext: "Tomorrow: a modern retelling at a crowded Aotearoa beach — a little cousin goes missing.",
    slides: [
      { type: "title", id: "t-title", title: "Who Was Listening? And the Lost Coin", minutes: 0.5, kicker: "Term 3 · Week 3", sub: "Lost Sheep & Lost Coin",
        art: { key: "t3w03d2-b" }, notes: "Let the splash play." },

      { type: "hook", id: "t-recap", title: "Recap", minutes: 1, style: "recap",
        text: "Yesterday Jesus told a story about a shepherd and a lost sheep.",
        ask: "Who grumbled about Jesus eating with sinners — and what did the shepherd do when he found his sheep?",
        hint: "The Pharisees and the teachers of the Law of Moses grumbled. The shepherd carried the lamb home on his shoulders and called his friends to celebrate. ‘Today we find out who was really listening, and what shocked them. Then Jesus tells a second story — about a coin.’" },

      { type: "scripture", id: "t-scr", title: "Luke 15:2, 8–10", minutes: 1, ref: "Luke 15:2–10", version: "CEV",
        lines: [
          { text: "The Pharisees and the teachers of the Law of Moses started grumbling, “This man is friendly with sinners. He even eats with them.”", ref: "Luke 15:2" },
          { text: "“Suppose a woman has ten silver coins, and she loses one. Won’t she light a lamp, sweep the floor, and look carefully until she finds it?”", ref: "Luke 15:8" },
          { text: "“Then she will call in her friends and neighbors and say, ‘Let’s celebrate! I’ve found the coin I lost.’”", ref: "Luke 15:9" },
          { text: "“In the same way, God’s angels are happy when even one sinner turns to God.”", ref: "Luke 15:10" }
        ],
        emphasis: ["grumbling", "ten silver coins", "light a lamp", "look carefully", "Let’s celebrate!", "God’s angels are happy"],
        notes: "Verses selected." },

      { type: "story", id: "t-story", title: "The twist that shocked them", minutes: 3.5, transition: "page",
        beats: [
          { text: "Two crowds, one table.", caption: "Tax collectors and sinners on one side. Pharisees and teachers on the other.",
            art: { key: "t3w03d1-a" } },
          { text: "Twist one: leave the ninety-nine?", caption: "Any sensible person would cut their losses." },
          { text: "Twist two: a party for one sheep!", caption: "The whole village spilled out to celebrate.", shout: true,
            art: { key: "t3w03d2-a", label: "Tue · the twist — a party for one sheep", desc: "The shepherd arriving home with the lamb on his shoulders as neighbours pour out of their houses cheering.", shot: "wide, joyful", motion: "kenburns-left", chars: [],
              scene: "The shepherd walks into his village carrying the lamb across his shoulders, grinning. Neighbours spill out of doorways and down outside staircases with lamps, clapping and cheering, children running ahead of him through the narrow lane." } },
          { text: "Then a woman and a coin.", caption: "A lamp, a broom and a dark little house." },
          { text: "Who’s who?", caption: "The shepherd and the woman are God. We’re the lost — and God does the finding.",
            art: { key: "t3w03d2-b", label: "Tue · the lost coin", desc: "A woman sweeping her dark stone house by lamplight as a silver coin glints under a bench.", shot: "low-angle, lamplight", motion: "kenburns-in", chars: [],
              scene: "Inside a small, dim stone house a woman sweeps the floor with a bundle of twigs, an oil lamp held low in her other hand. In the foreground, under a wooden bench, a single silver coin catches the lamplight and glints." } }
        ],
        narration: "Who was listening when Jesus told this story? Luke tells us. Tax collectors and other sinners were crowding in to hear him. And standing at the edge, arms folded, were the Pharisees and the teachers of the Law of Moses. Two very different groups in one place.\n\nThe Pharisees were not cartoon villains. Many of them loved God and worked hard to obey his rules. But they believed that to stay close to God you had to keep away from people who broke the rules. So when Jesus ate dinner with tax collectors, they were horrified.\n\nSo Jesus told them a parable — an earthly story with a heavenly meaning. And it was full of surprises.\n\nFirst, the shepherd. Shepherding was hard, smelly work, and strict religious people often looked down on shepherds. Yet Jesus began, ‘Suppose one of you has a hundred sheep…’ He asked them to imagine themselves as the shepherd!\n\nSecond, what the shepherd does. He leaves ninety-nine sheep out in the open country and goes after one. Any sensible person would say, ‘Cut your losses!’ Not this shepherd. And when he finds it, he doesn’t drive it home. He carries it joyfully on his shoulders.\n\nThird, the party. Who throws a party for one sheep? But this shepherd calls the whole village: ‘Let’s celebrate!’\n\nThen came the sting. There is more happiness in heaven over one sinner who turns to God than over ninety-nine good people who don’t need to. Who were the ninety-nine good people? The Pharisees thought they were. Jesus was gently asking: do you really not need finding?\n\nThen he told a second parable, about a woman. She has ten silver coins — about ten days’ wages — and she loses one. Her house is small and dark, with a dirt floor and hardly any windows. So she lights a lamp, sweeps the floor, and looks carefully until she finds it. Then she calls her friends and neighbours: ‘Let’s celebrate! I’ve found the coin I lost.’ Jesus said, ‘In the same way, God’s angels are happy when even one sinner turns to God.’\n\nSo who’s who? The shepherd is God. The woman with the lamp is God. And the sheep and the coin? They’re the lost. Notice that neither one finds its own way home. God does the finding. And the people in the room who had been told their whole lives that they weren’t welcome heard something wonderful: somebody is looking for you, and heaven is ready to throw a party.",
        notes: "About 3½ minutes. Shepherds were often looked down on by strict religious people in Jesus’ day — a commonly noted background detail. A silver coin (drachma) was about a day’s wages. Some scholars think the woman’s coins may have been part of a headdress, but the text doesn’t say so. Comparing God to a woman sweeping a floor would have been surprising. Be fair to the Pharisees: they stand for anyone who trusts their own goodness." },

      { type: "dig", id: "t-dig", title: "Who’s who?", minutes: 2,
        prompt: "Jesus’ parables are earthly stories with heavenly meanings. Who is who in these two stories?",
        columns: ["In Jesus’ story", "In real life"],
        items: [
          { left: "The shepherd", right: "God — and Jesus, who came to find us" },
          { left: "The lost sheep", right: "Anyone who is far from God, like the tax collectors" },
          { left: "The ninety-nine", right: "People who think they’re fine and don’t need finding" },
          { left: "The woman, her lamp and her broom", right: "God searching carefully in every corner" },
          { left: "The party", right: "The joy of heaven when one person turns back to God" }
        ],
        reveal: "God is the Seeker. We don’t find our own way home — he finds us.",
        notes: "Reveal row by row. Remind students that ‘parable’ means an earthly story with a heavenly meaning." },

      { type: "question", id: "t-q1", title: "Heaven’s happiness", minutes: 1, level: "look", mode: "finish", seconds: 20,
        text: "Finish what Jesus said: “There is more happiness in heaven because of one sinner who…”",
        reveal: "“…turns to God than over ninety-nine good people who don’t need to.” (Luke 15:7)",
        hint: "Follow-up: ‘How many silver coins did the woman have, and how many did she lose?’ (Ten, and she lost one.) Follow-up 2: ‘What did she do when she found it?’ (Called her friends to celebrate.) If silent: point to the memory verse and read it together." },

      { type: "question", id: "t-q2", title: "Two stories, one ending", minutes: 1.5, level: "think", mode: "discuss", seconds: 45,
        text: "Jesus told one story about a shepherd and another about a woman, and they end the same way. Why do you think he told both?",
        hint: "Good answers: to make the point stronger; so everyone could see themselves — men and women, rich and poor; the shepherd searches outside, the woman inside the house, so God searches everywhere; both end with a party. Follow-up: ‘What is the same in both stories?’ (Something lost, a careful search, joy.) Follow-up 2: ‘What would the tax collectors have felt?’ If silent: ask which story they prefer and why." },

      { type: "question", id: "t-q3", title: "Do we all need finding?", minutes: 1.5, level: "dig", mode: "vote", seconds: 30, skippable: true,
        text: "Agree or disagree: “Even people who think they are good need God to find them.”",
        options: ["Agree", "Disagree"],
        hint: "Most will agree; draw out why: nobody is perfect; being good doesn’t fix a distance from God; Jesus invited the Pharisees to the party too. Pharisees aren’t the bad guys — they stand for anyone who trusts themselves. Follow-up: ‘Why can it be hard to say ‘I need help’?’ Follow-up 2: ‘What happens if the ninety-nine won’t come to the party?’ If silent: give thinking time and ask for a thumb up or down." },

      { type: "apply", id: "t-apply", title: "Head · Heart · Hands", minutes: 2,
        head: "God goes looking for lost people, and Jesus is the Shepherd who finds us.",
        heart: "Thank you, God, for searching for me.",
        hands: "Think of someone who might feel lost or left out at school — a new student, or someone on their own. Today, say hello to them and use their name.",
        settings: ["playground", "class", "lunchtime"],
        notes: "Don’t name children in the room. Suggest ‘someone I know of’ or ‘a person I could look out for’." },

      { type: "scene", id: "t-scene", title: "A party for one", minutes: 1, optional: true,
        art: { key: "t3w03d2-a" },
        boxes: [
          { text: "“Let’s celebrate! I’ve found my lost sheep!”", pos: "tl", style: "shout" },
          { text: "Heaven is that glad when one person comes home.", pos: "br", style: "caption" }
        ] },

      { type: "verse", id: "t-verse", title: "Build the verse", minutes: 1, activity: "build",
        notes: "Build Luke 15:7 line by line." },

      { type: "prayer", id: "t-pray", title: "Write a ‘found’ prayer", minutes: 3, mood: "calm", style: "write",
        tip: "Writing a prayer slows us down so we can think about each word. Today’s prayer is “Your kingdom come” — asking God to bring his welcome to places where people feel lost.",
        opening: "On your paper, draw a small coin or a sheep. Underneath, write: ‘Your kingdom come.’",
        phases: [
          { name: "Wow", lead: "Write one line about what God is like in these stories.",
            prompts: ["You are the Shepherd who goes looking.", "You search carefully in every corner."],
            starter: "You are…", seconds: 40, aloud: "God, you are the Shepherd who never stops looking for us." },
          { name: "Sorry", lead: "Silently: sorry for thinking you only look for ‘other’ people, or that you don’t need finding.",
            prompts: ["Sorry for thinking I don’t need your help.", "Sorry for ignoring people who feel left out."],
            starter: "Sorry for…", seconds: 25, aloud: "God, we’re sorry for thinking we can find our own way home." },
          { name: "Thanks", lead: "Write one line to thank God for finding you.",
            prompts: ["Thank you for never giving up on me.", "Thank you that heaven is glad when someone comes home."],
            starter: "Thank you for…", seconds: 40, aloud: "Thank you, God, that you are glad when we come home." },
          { name: "Please", lead: "Write a ‘Your kingdom come’ prayer for someone on their own.",
            prompts: ["Your kingdom come: please find someone who feels lost.", "Please help me notice someone who is left out."],
            starter: "Please…", seconds: 35, aloud: "Your kingdom come, God — please find everyone who feels lost." }
        ],
        closing: "Fold your paper and keep it. When you see someone on their own, remember it. Amen.",
        notes: "Invite a few volunteers to read their ‘Your kingdom come’ line aloud." }
    ] },

  /* ======================= WEDNESDAY ======================= */
  { label: "Wednesday", theme: "Lost at the Beach", roleplay: true, mood: "sea",
    learningIntentions: [
      "We are learning how the lost sheep parable might look in a story from Aotearoa today.",
      "We are learning how a whānau searched for one lost child and celebrated when she was found.",
      "I can explain how the beach story is like the parable Jesus told."
    ],
    assessment: "Listen for students linking the beach story to the parable: Ana is the lost sheep, Aroha and the whānau are the searchers, and the celebration shows how valuable one person is.",
    resources: ["Screen", "Optional: a bucket and a toy crab for Ana", "Optional: a beach towel or sunhat"],
    whereToNext: "Tomorrow: what the stories show us about God — and how we can welcome people in.",
    slides: [
      { type: "title", id: "w-title", title: "Lost at the Beach", minutes: 0.5, kicker: "Term 3 · Week 3", sub: "Lost Sheep & Lost Coin",
        art: { key: "t3w03d3-b" }, notes: "Let the splash play. Today is our modern retelling, set on an Aotearoa beach." },

      { type: "hook", id: "w-hook", title: "Dropped everything", minutes: 1,
        text: "If someone in your family went missing at a crowded beach, what would you do?",
        ask: "Would you stay put, or search? Would you keep eating your lunch?",
        hint: "Take a few quick answers. Everyone will say they would drop everything. Land it: ‘That’s exactly what Jesus’ story is about. Today we hear it in a modern Aotearoa version, with some kids you know.’" },

      { type: "scripture", id: "w-scr", title: "Luke 15:5–7, 9", minutes: 1, ref: "Luke 15:4–10", version: "CEV",
        lines: [
          { text: "“And when you find it, you will be so glad that you will put it on your shoulder and carry it home.”", ref: "Luke 15:5" },
          { text: "“Then you will call in your friends and neighbors and say, ‘Let’s celebrate! I’ve found my lost sheep.’”", ref: "Luke 15:6" },
          { text: "“In the same way, there is more happiness in heaven because of one sinner who turns to God than over ninety-nine good people who don’t need to.”", ref: "Luke 15:7" },
          { text: "“Let’s celebrate! I’ve found the coin I lost.”", ref: "Luke 15:9" }
        ],
        emphasis: ["so glad", "carry it home", "Let’s celebrate!", "more happiness in heaven"],
        notes: "Luke 15:7 is our memory verse. Today’s story is a retelling, not a Bible passage, so we keep the parable words in mind as we listen." },

      { type: "story", id: "w-story", title: "Where’s Ana?", minutes: 3, transition: "page", mood: "sea",
        beats: [
          { text: "A sunny Saturday at the beach.", caption: "Aroha’s whānau picnic. Aroha promises to watch little Ana." },
          { text: "One pass… then ten.", caption: "Sione needed a fullback. Ana’s bucket was left alone." },
          { text: "No Ana!", caption: "The whole whānau spread out, calling her name.", shout: true,
            art: { key: "t3w03d3-a", label: "Wed · retelling — the search on the beach", desc: "A whānau spread out across a crowded beach searching for a lost little cousin, Aroha calling, Sione and Jun checking the dunes.", shot: "epic wide", motion: "kenburns-right", chars: ["aroha", "sione", "jun"],
              setting: "Modern-day Aotearoa New Zealand setting: a wide sandy beach with pōhutukawa trees on the bank, dunes with marram grass, rock pools, surf and a lifeguard flag in the distance. Kiwi kids of many backgrounds drawn naturally and respectfully, in everyday clothes, school uniforms or sports gear.",
              scene: "A crowded summer beach. Aroha stands on a driftwood log, hands cupped, calling out, while Sione and Jun run through the marram grass on the dunes and aunties and uncles spread out along the water's edge, searching. Pōhutukawa trees line the bank above." } },
          { text: "Mia’s sketchbook.", caption: "A little girl, a seagull and the rock pools." },
          { text: "Found!", caption: "“Look, Aroha! I found a crab!”",
            art: { key: "t3w03d3-b", label: "Wed · retelling — found!", desc: "Aroha hugging her small cousin by the rock pools while the whānau runs toward them, overjoyed.", shot: "medium, joyful", motion: "kenburns-in", chars: ["aroha"],
              setting: "Modern-day Aotearoa New Zealand setting: a wide sandy beach with pōhutukawa trees on the bank, dunes with marram grass, rock pools, surf and a lifeguard flag in the distance. Kiwi kids of many backgrounds drawn naturally and respectfully, in everyday clothes, school uniforms or sports gear.",
              scene: "By the rock pools at the far end of the beach, Aroha kneels and hugs her small cousin, who still clutches a bucket of shells. Behind them the whānau come running across the wet sand with arms up and big smiles, the afternoon sun bright on the water." } }
        ],
        narration: "It was a hot Saturday, and Aroha’s whānau had taken over a big patch of sand at the beach. Nana was in charge of the picnic. The cousins were digging holes. The sausages were sizzling on a little barbecue. Everything was perfect.\n\nAroha’s cousin Ana was five years old, and she was building a sandcastle with a very serious face. Her mum, Aunty Moana, hurried over. ‘Aroha, can you keep an eye on Ana while I grab the sunscreen?’\n\n‘Sweet as, Aunty,’ said Aroha, and she meant it.\n\nThen Sione came bounding up with his rugby ball. ‘Aroha! We need a fullback!’ Aroha looked at Ana. Ana looked happy. Just one pass, thought Aroha. One pass turned into ten. Then fifteen.\n\nWhen Aunty Moana came back, she looked at the sandcastle. There was a bucket, a spade… and no Ana.\n\nAroha’s stomach dropped like a stone. ‘She was right here!’\n\nEveryone froze for one second. Then everyone moved. Nana had the other cousins safe at the picnic, and Aroha said, ‘Nobody eats a single sausage until Ana is found.’ Even Sione agreed, and Sione really loves sausages.\n\nThey spread out across the beach. Aroha climbed on a driftwood log and called, ‘Ana! Ana!’ Sione and Jun raced through the dunes and the marram grass. Aunties and uncles checked the edge of the water. Jun was scared, and when Jun is scared he gets snappy. ‘You were meant to be watching her!’ he said. Aroha’s eyes stung. ‘I know,’ she whispered. ‘But yelling won’t find her.’\n\nThen quiet Mia, who had been sketching on a towel nearby, spoke up in a small voice. ‘I think I saw her. I drew her.’ She flipped open her sketchbook. There was a little girl with a stick in her hand, following a seagull towards the rock pools. Mia had almost kept quiet because she was scared of being wrong. But she was brave, and that mattered.\n\nThey ran. Past the lifeguard flag, past the pōhutukawa, all the way down to the rock pools. And there, crouched over a pool with her bucket full of shells, was Ana.\n\n‘Look, Aroha!’ she said. ‘I found a crab. His name is Gary.’\n\nAroha dropped to her knees and hugged her tight, and the whole whānau came running. There were tears, then laughing, then Aunty Moana calling, ‘Ice creams all round! Let’s celebrate!’ And yes — Sione finally got his sausage.",
        notes: "About 3 minutes. This is a modern retelling and it is entirely imagined. If a student has ever been lost, reassure them: Ana is found quickly and safely, and everyone is glad. A good safety note if needed: if you’re ever lost, stay in one place and find a safe adult. Keep the focus on the whānau’s joy rather than on blaming Aroha." },

      { type: "question", id: "w-q1", title: "Where was Ana?", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "Where did Mia’s sketchbook show that Ana had gone?",
        options: ["Towards the rock pools, following a seagull", "Into the sea", "Back to the car", "To the ice cream shop"], answer: 0,
        hint: "Answer: A. Mia had drawn Ana following a seagull towards the rock pools. Follow-up: ‘What did Aroha say nobody would do until Ana was found?’ (Eat a single sausage.) Follow-up 2: ‘What did Aunty Moana say when Ana was found?’ (Ice creams for everyone — let’s celebrate!) If silent: tell the first part of the story again briefly." },

      { type: "roleplay", id: "w-rp", title: "Lost at the Beach", minutes: 5, ref: "Luke 15:1–7 (retold)",
        art: { key: "t3w03d3-a" },
        imagined: "This is an imagined, modern retelling of Jesus’ parable of the lost sheep. Every character, line and event is made up for today — it is not a Bible passage.",
        actions: ["Everyone: beach noise — splashing waves, seagulls, ‘Ice creams here!’", "Everyone: call ‘Ana! Ana!’ while searching", "Everyone: big celebration cheer"],
        props: ["Optional: a bucket for Ana", "Optional: a sketchbook for Mia", "Optional: a rugby ball for Sione"],
        characters: [
          { name: "Narrator", color: "#F2C77B", desc: "Tells the story" },
          { name: "Aroha", color: "#7BA7D9", desc: "Confident, kind — feeling guilty" },
          { name: "Sione", color: "#FFB547", desc: "Big-hearted rugby fan — a bit impulsive" },
          { name: "Jun", color: "#8BC34A", desc: "Cheeky and quick-tempered — snappy when scared" },
          { name: "Mia", color: "#C9A7E8", desc: "Artist, shy and anxious — brave at the right moment" },
          { name: "Aunty Moana", color: "#B0BEC5", desc: "Ana’s mum — worried, then relieved" },
          { name: "Ana", color: "#F7A8B8", desc: "Aroha’s five-year-old cousin — cheerful and curious" },
          { name: "Everyone", color: "#FFFFFF", desc: "Beach noise, the searching whānau, and the celebration" }
        ],
        lines: [
          { character: "Narrator", text: "A sunny Saturday. Aroha’s whānau picnic on a crowded beach. Little Ana is building a sandcastle.", direction: true },
          { character: "Everyone", text: "Splash! Whoosh! Ice creams here!", action: "busy beach noise" },
          { character: "Aunty Moana", text: "Aroha, keep an eye on Ana while I grab the sunscreen?" },
          { character: "Aroha", text: "Sweet as, Aunty. I’ll watch her.", action: "thumbs up" },
          { character: "Sione", text: "Aroha! Come play beach rugby! We need a fullback!", action: "spin the ball" },
          { character: "Aroha", text: "Just one pass!", action: "run off" },
          { character: "Narrator", text: "One pass turned into ten. Then fifteen. Then Aunty Moana came back." },
          { character: "Aunty Moana", text: "Aroha, where’s Ana?", action: "hold up sunscreen, worried" },
          { character: "Aroha", text: "She was right here! There’s her bucket… but no Ana!", action: "spin around" },
          { character: "Jun", text: "Maybe she’s hiding! Little kids are sneaky. Ana! Ana, where are you?", action: "hands cupped to mouth" },
          { character: "Aroha", text: "Nana has the other cousins. Nobody eats a single sausage until we find Ana.", action: "firm voice" },
          { character: "Sione", text: "Not even one sausage? …Okay. Yeah. Not even one.", action: "sad face" },
          { character: "Everyone", text: "Ana! Ana! Ana!", action: "spread out, calling and searching" },
          { character: "Jun", text: "You were meant to be watching her, Aroha!", action: "snappy, then frown" },
          { character: "Aroha", text: "I know, Jun. I know. But yelling won’t find her. Keep looking.", action: "deep breath" },
          { character: "Mia", text: "Um… I think I saw her. But I’m not sure I’m right.", action: "hold sketchbook, nervous" },
          { character: "Aroha", text: "Anything, Mia. Please tell us.", action: "gentle" },
          { character: "Mia", text: "She followed a seagull towards the rock pools. I drew it. Look!", action: "show the sketchbook" },
          { pause: "Freeze! Mia almost kept quiet because she was scared of being wrong. What would you say to Mia?", seconds: 20 },
          { character: "Aroha", text: "Mia, you’re a legend! Everybody, to the rock pools!", action: "point" },
          { character: "Narrator", text: "They ran past the lifeguard flag and down to the rock pools. And there she was." },
          { character: "Ana", text: "Look, Aroha! I found a crab. His name is Gary.", action: "hold up bucket" },
          { character: "Aroha", text: "Ana! I found you! You are not allowed to disappear ever again!", action: "kneel and hug" },
          { character: "Everyone", text: "She’s found! Hooray!", action: "big celebration cheer" },
          { character: "Aunty Moana", text: "Ice creams for everyone, my shout! Let’s celebrate!", action: "arms wide" },
          { character: "Sione", text: "Now can we eat the sausages?", action: "hopeful" },
          { character: "Aroha", text: "Yes, Sione. But first, I’d search this whole beach again for Ana. She matters to us.", action: "hold Ana’s hand" }
        ],
        debrief: [
          { level: "look", text: "Who knew where Ana had gone, and how did they help?", hint: "Mia. She had drawn Ana following a seagull to the rock pools, and she was brave enough to speak up." },
          { level: "think", text: "How is this story like the parable of the lost sheep?", hint: "Ana is the lost one; Aroha, the whānau and friends are the searchers; Nana and the others were safe; the whānau didn’t stop until she was found; then they celebrated." }
        ],
        notes: "Keep Jun’s snappy line short and let Aroha’s reply be gentle, not preachy. Let Ana be very small and cheerful. Everyone can make beach noises and search together. If the class is large, use ‘Everyone’ for the whānau." },

      { type: "question", id: "w-q2", title: "Why not wait?", minutes: 1.5, level: "think", mode: "pair", seconds: 45,
        text: "Aroha could have waited for Ana to come back by herself. Why did the whānau drop everything to search instead?",
        hint: "Good answers: Ana is small and could be in danger; she matters too much to leave; she couldn’t find her own way back; love goes looking. Follow-up: ‘Who in Jesus’ story did the same?’ (The shepherd.) Follow-up 2: ‘What does that show about how God feels about each person?’ If silent: ask, ‘Would a five-year-old know how to find the picnic again?’" },

      { type: "question", id: "w-q3", title: "Who is ‘Ana’ at our school?", minutes: 1, level: "dig", mode: "write", seconds: 45, skippable: true,
        text: "Write your answer without a name: who might feel like ‘Ana’ — on their own, unseen, or left out? What is one small thing someone could do?",
        hint: "Ideas: a new student; someone with no one to play with; someone quiet at the edge of the group; someone who has been left out. Small acts: say hello, invite them in, sit with them. Follow-up: ‘What is easier — noticing, or doing?’ Follow-up 2: ‘What stops us?’ If silent: give an example, like asking someone to join your game, and let them write." },

      { type: "apply", id: "w-apply", title: "Head · Heart · Hands", minutes: 1,
        head: "Every person matters so much that it’s worth stopping everything to find one.",
        heart: "Thank you, God, that I matter to you.",
        hands: "Look for the ‘Ana’ this week: notice one person drifting to the edge of a group, and go and stand with them.",
        settings: ["playground", "classroom", "sports"],
        notes: "Gently note: if any student feels lost or left out themselves, there are caring adults who will look for them." },

      { type: "scene", id: "w-scene", title: "Found!", minutes: 0.5, optional: true,
        art: { key: "t3w03d3-b" },
        boxes: [
          { text: "“Look, Aroha! I found a crab!”", pos: "tl", style: "speech" },
          { text: "She’s found! Let’s celebrate!", pos: "br", style: "shout" }
        ] },

      { type: "verse", id: "w-verse", title: "Verse with actions", minutes: 1, optional: true, activity: "actions",
        notes: "Actions for Luke 15:7. Try it once slowly, then once fast." },

      { type: "prayer", id: "w-pray", title: "Your kingdom come — in pairs", minutes: 3, mood: "calm", style: "pairs",
        tip: "Praying with a partner means you can pray for each other. We’re still praying “Your kingdom come” — asking God to bring his welcome to people who feel lost.",
        opening: "Turn to a partner. You can pray out loud in a whisper, or silently and then share one line.",
        phases: [
          { name: "Wow", lead: "Tell your partner one thing God is like from today, then say it to God.",
            prompts: ["God, you know exactly where each of us is.", "God, you search for us and celebrate when we’re found."],
            starter: "Wow, God, you…", seconds: 35, aloud: "Wow, God — you know where we are and you never stop looking." },
          { name: "Sorry", lead: "Silently: sorry for any time you left someone out or didn’t look after someone.",
            prompts: ["Sorry for the times I forgot to look out for someone.", "Sorry for the times I stayed quiet when I should have spoken."],
            starter: "God, I’m sorry for…", seconds: 25, aloud: "God, we’re sorry for the times we forgot to look out for others." },
          { name: "Thanks", lead: "Thank God for the people who’ve come looking for you.",
            prompts: ["Thank you for whānau who notice when I’m missing.", "Thank you for friends who include me."],
            starter: "Thank you, God, for…", seconds: 30, aloud: "Thank you, God, for people who come looking for us." },
          { name: "Please", lead: "Pray with your partner for someone who feels left out: “Your kingdom come at our school.”",
            prompts: ["Your kingdom come: please help someone feel welcome at our school.", "Please help us notice who is alone."],
            starter: "Please, God, help…", seconds: 40, aloud: "Your kingdom come at our school, God — please help us notice who is alone." }
        ],
        closing: "Look at your partner and say, ‘God is looking for you.’ Amen.",
        notes: "Pair up carefully so no one is left without a partner — the lesson’s point! Triples are fine." }
    ] },

  /* ======================= THURSDAY ======================= */
  { label: "Thursday", theme: "God Goes Looking — Welcome In", roleplay: false, mood: "calm",
    learningIntentions: [
      "We are learning what the lost sheep and lost coin show us about God.",
      "We are learning that Jesus is the Shepherd who came to find us.",
      "I can think of one way to welcome someone in this week."
    ],
    assessment: "Students can say that God goes looking for lost people and celebrates when they are found, name Jesus as the Shepherd, recite Luke 15:7, and choose one way to welcome someone in.",
    resources: ["Screen", "Take-home challenge cards"],
    whereToNext: "Next week: The Lost Son — a father, two sons, and a very surprising welcome home.",
    slides: [
      { type: "title", id: "th-title", title: "God Goes Looking — Welcome In", minutes: 0.5, kicker: "Term 3 · Week 3", sub: "Lost Sheep & Lost Coin",
        art: { key: "t3w03d4-a" }, notes: "Let the splash play." },

      { type: "review", id: "th-review", title: "Put the parable in order", minutes: 2.5, format: "order",
        prompt: "Put Jesus’ story of the lost sheep in order!",
        items: ["A sheep goes missing", "The shepherd leaves the ninety-nine", "He searches until he finds it", "He carries it home on his shoulders", "He calls his friends and neighbours", "Everyone celebrates"],
        hint: "Students call out the next step; click to place it. Point out: the shepherd does all the searching and carrying, and the story ends in a party. Then ask what the woman did with the coin.",
        notes: "Cards start scrambled." },

      { type: "scripture", id: "th-scr", title: "Luke 15:10; 19:10; John 10:11", minutes: 1, ref: "Luke 15:10; Luke 19:10; John 10:11", version: "CEV",
        lines: [
          { text: "“In the same way, God’s angels are happy when even one sinner turns to God.”", ref: "Luke 15:10" },
          { text: "“The Son of Man came to look for and to save people who are lost.”", ref: "Luke 19:10" },
          { text: "“I am the good shepherd. A good shepherd is willing to die for the sheep.”", ref: "John 10:11" },
          { text: "“Bring in your kingdom so that everyone on earth will obey you, as you are obeyed in heaven.”", ref: "Matthew 6:10" }
        ],
        emphasis: ["angels are happy", "look for and to save", "good shepherd", "Bring in your kingdom"],
        notes: "Verses selected. ‘Son of Man’ is a name Jesus used for himself. The Matthew 6:10 line is the part of the Lord’s Prayer we pray this week." },

      { type: "story", id: "th-story", title: "Look who’s coming", minutes: 2, transition: "page", mood: "calm",
        beats: [
          { text: "God goes looking.", caption: "A shepherd. A woman with a lamp. Both searched until they found.",
            art: { key: "t3w03d4-a", label: "Thu · what it shows — heaven rejoices", desc: "The woman holding up her found coin as her neighbours crowd into the courtyard to celebrate with her.", shot: "medium wide, festive", motion: "kenburns-in", chars: [],
              scene: "In a lamp-lit courtyard, the woman holds the found silver coin high, laughing. Her friends and neighbours crowd around clapping, one beating a small hand drum, another carrying a tray of bread. Light streams down from the open sky above the courtyard." } },
          { text: "Jesus is the Shepherd.", caption: "“The Son of Man came to look for and to save people who are lost.”", shout: true },
          { text: "Your kingdom come.", caption: "A world where no one is left outside." },
          { text: "Welcome in.", caption: "Aroha and Mia stand in the welcome for a new family.",
            art: { key: "t3w03d4-b", label: "Thu · live it — welcome people in", desc: "A new family being welcomed onto a marae by the school community, the kids standing to greet them.", shot: "wide, respectful", motion: "kenburns-left", chars: ["aroha", "mia"],
              setting: "Modern-day Aotearoa New Zealand setting: a marae with a carved wharenui (meeting house) and an open marae ātea (courtyard) in front; people in tidy clothes; everything drawn with dignity and accuracy, no caricature. Kiwi kids of many backgrounds drawn naturally and respectfully, in everyday clothes, school uniforms or sports gear.",
              scene: "A new family walks slowly onto the marae ātea toward the carved wharenui, a kuia in a dark skirt calling them on with a gentle raised hand. Aroha, Mia and their classmates in school uniform stand respectfully in the welcoming group, faces warm and smiling." } }
        ],
        narration: "Let’s put the two stories together. A shepherd lost one sheep out of a hundred. A woman lost one coin out of ten. Both of them searched until they found what was lost. And both of them threw a party.\n\nWhy did Jesus tell us this? Because he was showing us what God is like. God is the one who goes looking. Not because we’re clever, and not because we found our own way home. A sheep can’t climb off a ledge by itself, and a coin can’t jump out from under a bench. God finds us. And when even one person turns back to him, heaven celebrates. The angels are happy!\n\nJesus didn’t just tell this story. He lived it. He ate with tax collectors, and he said, ‘The Son of Man came to look for and to save people who are lost.’ Later he said, ‘I am the good shepherd. A good shepherd is willing to die for the sheep.’ That’s how far Jesus was willing to go to find us.\n\nWhen we pray, ‘Your kingdom come’, we ask for a world that works like this one, where nobody is left outside.\n\nImagine Aroha and Mia at their school welcome, called a pōwhiri, for a new family. A kuia, a respected older woman, calls the family on, and the whole school stands to greet them. Mia notices one of the new boys standing alone at morning tea. For once, she goes first. ‘Want to play handball?’\n\nThat’s the kingdom of God, arriving at one school, one lunchtime.",
        notes: "About 2 minutes. A pōwhiri is a Māori welcome ceremony; a karanga is the call of welcome by a kuia (respected older woman). If you have a local marae connection or a Māori colleague, invite them to share how welcome works at your school. Keep the focus on welcome, not on making anyone feel guilty." },

      { type: "question", id: "th-q1", title: "What did they do?", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "What did the shepherd and the woman both do when they found what was lost?",
        options: ["They called their friends to celebrate", "They went back to sleep", "They told it off", "They sold it"], answer: 0,
        hint: "Answer: A (Luke 15:6, 9). Follow-up: ‘What did Jesus say happens in heaven?’ (More happiness over one person who turns to God.) Follow-up 2: ‘How many coins did the woman have?’ (Ten.) If silent: re-read the first scripture line." },

      { type: "question", id: "th-q2", title: "How does God feel?", minutes: 1.5, level: "think", mode: "pair", seconds: 45,
        text: "Heaven celebrates over every single person who comes home to God. What does that tell us about how God feels about each person?",
        hint: "Good answers: each person matters to him; he is glad, not angry; he never gives up; it’s more like a party than a telling-off. Follow-up: ‘How is that different from thinking God is only cross with us?’ Follow-up 2: ‘What does Jesus the Shepherd show us about this?’ (He came to look for people and save them.) If silent: ask, ‘How did the shepherd and Aroha feel when they found what was lost?’" },

      { type: "recap", id: "th-recap", title: "This week’s Big Idea", minutes: 1.5,
        points: [
          "Jesus ate with people everyone else avoided, and some leaders grumbled.",
          "Like the shepherd and the woman, God searches for lost people until they are found.",
          "Heaven throws a party over every single person who turns back to God."
        ],
        notes: "Then the Big Idea stamps in." },

      { type: "question", id: "th-q3", title: "Who needs welcoming?", minutes: 1.5, level: "dig", mode: "silent", seconds: 40, skippable: true,
        text: "Silently think: who do you know of that might feel on their own? What is one way you could welcome them in?",
        hint: "This is a silent, personal thought. Possible ideas: invite them to your game; sit with them at lunch; say their name; ask a question. Follow-up if anyone wants to share: ‘What might get in the way?’ Follow-up 2: ‘What would you want someone to do for you?’ If silent: that is the point — give them quiet time and then ask who has a first step in mind." },

      { type: "challenge", id: "th-chal", title: "This Week’s Challenge", minutes: 2,
        text: "Welcome in. Notice someone on their own and invite them in — to your game, your table or your group — once this week.",
        why: "“There is more happiness in heaven because of one sinner who turns to God…” — Luke 15:7",
        head: "God goes looking for the lost, and heaven celebrates when one is found.", heart: "Thank you, God, for finding me.", hands: "Invite one person who is on their own to join you.",
        takeHome: true,
        notes: "Next Monday’s story (The Lost Son) will check in on this. Brainstorm real examples: asking someone to join your game, sitting with someone new, learning a name." },

      { type: "verse", id: "th-verse", title: "Memory verse: fade-out", minutes: 1.5, activity: "fade",
        notes: "Fade out Luke 15:7. Bonus: say it while turning around on the spot." },

      { type: "scene", id: "th-scene", title: "God goes looking", minutes: 1, optional: true,
        art: { key: "t3w03-cover" },
        boxes: [
          { text: "God goes looking.", pos: "tl", style: "shout" },
          { text: "And heaven throws a party when one is found.", pos: "br", style: "caption" }
        ] },

      { type: "prayer", id: "th-pray", title: "Your kingdom come — out loud", minutes: 3, mood: "calm", style: "out-loud",
        tip: "Today we pray out loud together. “Your kingdom come” can be a big prayer or a very small one: for your school, your whānau, your town and our country.",
        opening: "Let’s pray together. In the Wow part, anyone can call out one thing God is. In the Please part, we’ll pray “Your kingdom come” for the places we live.",
        phases: [
          { name: "Wow", lead: "Call out one thing God is, from the stories this week.",
            prompts: ["God, you are the Shepherd who goes looking!", "God, you are the one who celebrates!"],
            starter: "God, you are…", seconds: 40, aloud: "God, you are the Shepherd, the Seeker and the one who celebrates!" },
          { name: "Sorry", lead: "Silently: sorry for any time you’ve left someone out or stayed on the edge yourself.",
            prompts: ["Sorry for leaving someone out.", "Sorry for the times I’ve gone my own way."],
            starter: "God, I’m sorry for…", seconds: 25, aloud: "God, we’re sorry — thank you that you always welcome us home." },
          { name: "Thanks", lead: "Thank God for the people and the Shepherd who found you.",
            prompts: ["Thank you, Jesus, for coming to look for us.", "Thank you for people who welcome me in."],
            starter: "Thank you, Jesus, for…", seconds: 30, aloud: "Thank you, Jesus, for coming to look for us and carrying us home." },
          { name: "Please", lead: "Pray “Your kingdom come” for our school, our whānau and our country.",
            prompts: ["Your kingdom come at our school: help us welcome new people.", "Your kingdom come in Aotearoa: please find the lonely ones."],
            starter: "Your kingdom come…", seconds: 45, aloud: "Your kingdom come in our school, our homes and our country." }
        ],
        closing: "Everyone: Your kingdom come. Amen!",
        notes: "Invite a few students to call out their ‘Wow’ words and their ‘Please’ places. Let the class say the final line together." }
    ] }
  ]
};
