/* Morninglight 2027 — Term 3 Week 2: The Good Samaritan (Luke 10:25–37). Scripture: CEV. */
window.DEVOTIONS = window.DEVOTIONS || {};
window.DEVOTIONS["Term 3"] = window.DEVOTIONS["Term 3"] || {};
window.DEVOTIONS["Term 3"]["Week 2"] = {
  lessonTitle: "The Good Samaritan",
  passage: "Luke 10:25–37",
  bigIdea: "God’s mercy crosses every line — so loving our neighbour means showing mercy to anyone in need, even people we’d rather avoid.",
  godIs: "Merciful",
  memoryVerse: { ref: "Luke 10:27", text: "You must love the Lord your God with all your heart, soul, strength, and mind. You must also love your neighbors as much as you love yourself.", version: "CEV",
    chunks: ["You must love the Lord your God", "with all your heart,", "soul, strength, and mind.", "You must also love your neighbors", "as much as", "you love yourself."],
    actions: ["Point up — the Lord your God", "Both hands on your heart", "Tap your chest, flex an arm, tap your head", "Wave to the people beside you", "Stretch both arms wide — as much as", "Point to yourself and smile"] },
  prayerFocus: { skill: "Hallowed be your name", tip: "The Lord’s Prayer begins “Our Father in heaven…”, and the next words ask that God’s name be treated as holy. “Hallowed” is an old word for holy — set apart as the most special name of all. This week we honour God’s name by saying what he is like: merciful, and kind to people nobody else stops for." },
  mood: "desert",
  cover: "t3w02-cover",
  characters: ["jesus", "aroha", "sione", "mia"],
  coverArt: { key: "t3w02-cover", label: "Week cover", desc: "A Samaritan with his donkey kneeling beside a hurt traveller on a lonely rocky road, the sun low behind the hills.", shot: "epic wide, silhouette",
    scene: "A lonely road winds down through steep rocky desert hills. Far below, a Samaritan with a donkey kneels beside a traveller slumped against a boulder, both small against the vast landscape, the low sun throwing long shadows across the road." },
  comicArt: { key: "t3w02-comic", label: "Comic page (week opener) — for the comic-page viewer, coming in a later build", format: "portrait", desc: "Six-panel comic page of the Good Samaritan.",
    panels: "Six panels. Panel 1 (wide): an expert in the law questioning Jesus in a crowded square. Panel 2 (small): robbers' silhouettes running over a ridge from a lonely road. Panel 3 (small): a priest walking past on the far side. Panel 4 (small): a Levite looking away and hurrying on. Panel 5 (tall): a Samaritan kneeling to bandage the traveller. Panel 6 (wide): the Samaritan handing coins to an innkeeper at dawn.", chars: ["jesus"] },

  days: [

  /* ======================= MONDAY ======================= */
  { label: "Monday", theme: "Who Is My Neighbour?", roleplay: true, mood: "desert",
    learningIntentions: [
      "We are learning how an expert in God’s Law asked Jesus, “Who are my neighbours?”",
      "We are learning how Jesus answered with a parable — an earthly story with a heavenly meaning.",
      "I can retell what the priest, the temple helper and the man from Samaria each did."
    ],
    assessment: "Listen for students retelling the three travellers in order and noticing that the man from Samaria — not the religious leaders — was the one who stopped to help.",
    resources: ["Screen", "Optional: a tea towel for a bandage, a toy donkey"],
    whereToNext: "Tomorrow: why Jesus told this story — and the twist that shocked everyone who heard it.",
    slides: [
      { type: "title", id: "m-title", title: "Who Is My Neighbour?", minutes: 0.5, kicker: "Term 3 · Week 2", sub: "The Good Samaritan",
        art: { key: "t3w02-cover" }, notes: "Let the splash play. Another parable this week — an earthly story with a heavenly meaning." },

      { type: "hook", id: "m-hook", title: "Late for school", minutes: 1.5,
        checkin: { text: "Last week Jesus told the story of the Sower — a farmer scattered seed on the path, the rocks, the thorns and the good soil. Your challenge: be good soil — each day listen to one Bible verse (or something good a teacher says) and do one small thing about it. How did you go?" },
        text: "You’re walking to school and you see someone sitting on the footpath, hurt and crying. You’re already late. What do you do?",
        ask: "Be honest — what would most people do?",
        hint: "Check-in first: ask 2–3 students which verse or good word they listened to, and what small thing they did about it. Then the hook: take honest answers (hurry past, tell an adult, stop). Land it: ‘Today an expert asks Jesus a famous question — and Jesus answers with a story about a hurt man on a road, and the three people who saw him.’" },

      { type: "scripture", id: "m-scr", title: "Luke 10:27–37", minutes: 1, ref: "Luke 10:25–37", version: "CEV",
        lines: [
          { text: "“You must love the Lord your God with all your heart, soul, strength, and mind. You must also love your neighbors as much as you love yourself.”", ref: "Luke 10:27" },
          { text: "The man wanted to show that he knew what he was talking about. So he asked Jesus, “Who are my neighbors?”", ref: "Luke 10:29" },
          { text: "A priest happened to be going down the same road. But when he saw the man, he walked by on the other side.", ref: "Luke 10:31" },
          { text: "A man from Samaria then came traveling along that road. When he saw the man, he felt sorry for him and went over to him.", ref: "Luke 10:33" },
          { text: "The next morning he gave the innkeeper two silver coins and said, “Please take care of the man. If you spend more than this on him, I will pay you when I return.”", ref: "Luke 10:35" },
          { text: "“The one who showed pity,” the man answered. Jesus said, “Go and do the same!”", ref: "Luke 10:37" }
        ],
        emphasis: ["love your neighbors", "Who are my neighbors?", "walked by on the other side", "felt sorry for him", "two silver coins", "Go and do the same!"],
        notes: "Selected verses. The expert’s answer in verse 27 is our memory verse. Samaria was a region north of Judea — we find out more tomorrow. Read verse 31 gently: the man on the road is ‘badly hurt’." },

      { type: "story", id: "m-story", title: "The man on the road", minutes: 3, transition: "page", mood: "desert",
        beats: [
          { text: "An expert stands up.", caption: "“What must I do to have eternal life?” He was testing Jesus.",
            art: { key: "t3w02d1-a", label: "Mon · story — the expert's question", desc: "An expert in the law, scroll in hand, standing in the crowd to question Jesus.", shot: "medium wide, over the crowd", motion: "kenburns-in", chars: ["jesus"], scene: "In a busy village square an expert in the law stands up in the crowd, tall and sharp-eyed, a scroll tucked under one arm and a finger raised as he asks his question. Jesus, seen in three-quarter view, looks back at him calmly." } },
          { text: "“Who are my neighbours?”", caption: "Who counts? Who can I skip?" },
          { text: "A dangerous road.", caption: "Jerusalem to Jericho — steep and lonely. A traveller is robbed and left badly hurt.",
            art: { key: "t3w02d1-b", label: "Mon · story + role-play card — the dangerous road", desc: "A traveller slumped beside the road with his bag gone, the robbers' silhouettes running off over a ridge.", shot: "wide, silhouette", motion: "kenburns-right", scene: "On the steep road to Jericho a traveller lies slumped beside a boulder, his travel bag gone and his cloak torn. High on the ridge above, the dark silhouettes of robbers run away against a pale sky. No injuries shown; dust still hangs in the air." } },
          { text: "Two people walk by.", caption: "A priest. A temple helper. Both went by on the other side." },
          { text: "A man from Samaria stops.", caption: "He felt sorry for him, bandaged his wounds and paid for his care.", shout: true }
        ],
        narration: "Jesus was teaching a crowd when an expert in God’s Law — a man who had spent his whole life studying the scrolls of Moses — stood up. He wasn’t really asking because he wanted to learn. The Bible says he wanted to test Jesus. ‘Teacher,’ he said, ‘what must I do to have eternal life?’\n\nJesus turned the question back. ‘What does the Law say?’\n\nThe man knew his scrolls. ‘Love the Lord your God with all your heart, soul, strength and mind. And love your neighbour as you love yourself.’\n\n‘That’s right,’ said Jesus. ‘Do this and you will live.’\n\nBut the expert wanted to look good. So he asked, ‘And who are my neighbours?’ In other words: who counts? Who do I have to be kind to — and who can I skip?\n\nJesus didn’t give him a list. He told a story. Remember, a parable is an earthly story with a heavenly meaning.\n\n‘A man was travelling down the road from Jerusalem to Jericho. It was a steep, lonely road with plenty of rocks to hide behind, and robbers attacked him. They grabbed everything he had and ran off. He lay beside the road, badly hurt.\n\nSoon a priest came along — someone who worked at God’s temple. He saw the man. And he went by on the other side of the road.\n\nThen a temple helper, called a Levite, came past. He looked too. And he also went by on the other side.\n\nThen a man from Samaria came travelling down the road. He saw the hurt man — and his heart filled with pity. He went straight over. He poured olive oil and wine on the wounds, to clean and soothe them, and bandaged them up. Then he lifted the man onto his own donkey, took him to an inn, and looked after him all night.\n\nThe next morning he gave the innkeeper two silver coins. ‘Please take care of him,’ he said. ‘If it costs more, I will pay you when I come back.’’\n\nThen Jesus asked the expert one more question: ‘Which of these three was a real neighbour to the man the robbers attacked?’",
        notes: "About 3 minutes. The robbery is implied, never graphic — say ‘badly hurt’ (CEV says ‘half dead’ in verse 30). A Levite was from the tribe of Levi and helped with the work of the temple (CEV: ‘temple helper’). Reuse the phrase from Week 1: a parable is an earthly story with a heavenly meaning. Don’t explain the Samaritan twist yet — Tuesday does that. Small imagined details: the rocks to hide behind and the donkey’s pace." },

      { type: "question", id: "m-q1", title: "Who stopped?", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "Who stopped to help the hurt man?",
        options: ["The priest", "The temple helper (Levite)", "A man from Samaria", "The robbers"], answer: 2,
        hint: "Answer: C (Luke 10:33). Follow-up: ‘What did the priest and the temple helper do?’ (They saw him, but went by on the other side.) Follow-up 2: ‘Name two things the man from Samaria did.’ (Bandaged him, took him to an inn, paid.) If silent: re-read the fourth scripture line." },

      { type: "question", id: "m-q2", title: "Why walk by?", minutes: 1.5, level: "think", mode: "pair", seconds: 45, skippable: true,
        text: "Why do you think the priest and the temple helper walked by on the other side?",
        hint: "Jesus doesn’t say why, so honest guesses are welcome: afraid the robbers were still close, in a hurry, didn’t want to get dirty or break religious rules about touching someone who might be dead, ‘someone else will help’. Follow-up: ‘Do we ever give good-sounding reasons for not helping?’ Follow-up 2: ‘What would it have cost them to stop?’ If silent: ask ‘What excuses do people use at school?’" },

      { type: "roleplay", id: "m-rp", title: "The Man on the Jericho Road", minutes: 5, ref: "Luke 10:25–37",
        art: { key: "t3w02d1-b" },
        imagined: "The expert’s and Jesus’ words follow Luke 10 closely (some wording adapted to NZ spelling). The priest’s and Levite’s excuses, the traveller’s calls for help and the innkeeper’s reply are imagined — the Bible doesn’t record them.",
        actions: ["Everyone: a big gasp — “Ooooh!” — at the expert’s question", "Everyone: stomping footsteps as the travellers walk by", "Everyone: clip-clop, clip-clop for the donkey"],
        props: ["Optional: a tea towel for a bandage, a toy donkey"],
        characters: [
          { name: "Narrator", color: "#F2C77B", desc: "Tells the story" },
          { name: "Expert", color: "#9575CD", desc: "An expert in God’s Law — clever, but wants to look good" },
          { name: "Jesus", color: "#F5E6B3", desc: "The teacher with a story — calm and kind" },
          { name: "Traveller", color: "#B0BEC5", desc: "The man on the road — hurt and weak" },
          { name: "Priest", color: "#7986CB", desc: "A temple priest — respectable, but in a hurry" },
          { name: "Levite", color: "#4DB6AC", desc: "A temple helper — nervous and full of excuses" },
          { name: "Samaritan", color: "#FFB547", desc: "A man from Samaria — kind, practical, generous" },
          { name: "Innkeeper", color: "#A1887F", desc: "Runs the inn — surprised by the coins" },
          { name: "Everyone", color: "#FFFFFF", desc: "The crowd, the footsteps and the donkey" }
        ],
        lines: [
          { character: "Narrator", text: "A busy village square. An expert in God’s Law stands up to test Jesus.", direction: true },
          { character: "Expert", text: "Teacher, what must I do to have eternal life?", action: "arms folded, testing" },
          { character: "Jesus", text: "What does the Law say? How do you understand it?" },
          { character: "Expert", text: "Love the Lord your God with everything you’ve got. And love your neighbour as you love yourself.", action: "proud of his answer" },
          { character: "Jesus", text: "That’s right! Do this and you will live." },
          { character: "Expert", text: "But… who are my neighbours?", action: "wanting to look clever" },
          { character: "Everyone", text: "Ooooh!", action: "crowd gasp" },
          { character: "Jesus", text: "A man was going down the road from Jerusalem to Jericho when robbers attacked him." },
          { character: "Narrator", text: "The robbers grabbed everything he had and ran off. The traveller lay by the road, badly hurt.", direction: true },
          { character: "Traveller", text: "Help… please… somebody help me…", action: "weak voice" },
          { character: "Everyone", text: "Stomp… stomp… stomp…", action: "footsteps coming closer" },
          { character: "Priest", text: "Oh dear. A man in the road. I’m late for the temple, and I mustn’t get messy.", action: "cross to the far side" },
          { character: "Narrator", text: "The priest saw him — and walked by on the other side." },
          { character: "Everyone", text: "Stomp… stomp… stomp…", action: "footsteps coming closer again" },
          { character: "Levite", text: "Not my problem. Surely someone else will help him. I’d better hurry.", action: "scurry past" },
          { character: "Traveller", text: "Please… don’t go…", action: "reach out, barely a whisper" },
          { pause: "Freeze! Two people have walked past. How do you think the man on the road feels? What do you think is going through his mind?", seconds: 20 },
          { character: "Narrator", text: "Then a man from Samaria came along, leading his donkey." },
          { character: "Samaritan", text: "Oh, you poor man! I feel so sorry for you.", action: "rush over" },
          { character: "Samaritan", text: "Let me clean your wounds with olive oil and wine, and bandage them.", action: "gently wrap a bandage" },
          { character: "Samaritan", text: "Climb on my donkey. I’ll take you to the inn and look after you.", action: "help him up" },
          { character: "Everyone", text: "Clip-clop… clip-clop… clip-clop…", action: "slow donkey" },
          { character: "Samaritan", text: "Please take care of him. Here are two silver coins. If it costs more, I’ll pay you when I come back.", action: "next morning, hand over coins" },
          { character: "Innkeeper", text: "Two silver coins! He must care a lot. Don’t worry — I’ll look after him.", action: "amazed" },
          { character: "Jesus", text: "Which of these three was a real neighbour to the man the robbers attacked?" },
          { character: "Expert", text: "The one who showed pity.", action: "quietly — he can’t say ‘Samaritan’" },
          { character: "Jesus", text: "Go and do the same!" },
          { character: "Everyone", text: "Go and do the same!" }
        ],
        debrief: [
          { level: "look", text: "What did the man from Samaria do for the traveller — and what did it cost him?", hint: "He felt pity, went over, cleaned and bandaged the wounds, lifted the man onto his donkey, took him to an inn and paid two silver coins with a promise of more. It cost him time, money, comfort and safety." },
          { level: "think", text: "The expert said, “The one who showed pity” — he didn’t say the word Samaritan. Why do you think he avoided it?", hint: "He couldn’t bring himself to say it. Samaritans were people many Jews looked down on — we find out why tomorrow. Follow-up: ‘What does that tell you about how the expert felt?’ Follow-up 2: ‘Who might we find it hard to say something good about?’" }
        ],
        notes: "Jesus is played reverently — a calm, kind teacher. The Levite is explained in the character list (a temple helper). Keep the traveller’s injuries unspoken: ‘badly hurt’ only. The priest’s and Levite’s excuses are imagined; they stand for how easy it is for any of us to walk by." },

      { type: "question", id: "m-q3", title: "Why did he do it?", minutes: 1, level: "dig", mode: "discuss", seconds: 40,
        text: "The man from Samaria took a risk, spent his time and gave his money for a stranger. Why do you think he did all that?",
        hint: "Good answers: he felt real pity; he saw a person, not a problem; he didn’t need a reason. Mercy means kindness to someone in need who can’t pay you back. Follow-up: ‘What did the Samaritan not ask the man?’ (His name, his team, his religion, whether he could pay.) Follow-up 2: ‘Who is the hardest person for you to feel pity for?’ If silent: ask ‘What would you have had to give up?’" },

      { type: "apply", id: "m-apply", title: "Head · Heart · Hands", minutes: 1,
        head: "A neighbour is anyone who needs help — and a real neighbour shows mercy.",
        heart: "God, open my eyes to see people who need help.",
        hands: "This week, notice one person who needs help — at school, in sport or at home — and take one small step: a hello, a hand, or telling a teacher.",
        settings: ["home", "school", "sport"],
        notes: "Keep it small and doable. This previews Thursday’s challenge." },

      { type: "scene", id: "m-scene", title: "The dangerous road", minutes: 0.5, optional: true,
        art: { key: "t3w02d1-b" },
        boxes: [
          { text: "“Help… please… somebody…”", pos: "tl", style: "speech" },
          { text: "Jerusalem to Jericho — a steep, lonely road.", pos: "br", style: "caption" }
        ] },

      { type: "verse", id: "m-verse", title: "Memory verse peek", minutes: 1, optional: true, activity: "echo",
        notes: "Introduce Luke 10:27 — the expert’s own answer. Echo it line by line." },

      { type: "prayer", id: "m-pray", title: "Hallowed be your name (silent)", minutes: 3, mood: "calm", style: "silent",
        tip: "Jesus taught us to start with God: “Our Father in heaven…”, then asking that his name be treated as holy. “Hallowed” is an old word for holy. Today we honour God’s name by thinking about what he is like.",
        opening: "Let’s get still. Think of the man by the road — and of the God who never walks by on the other side. Breathe in… and out.",
        phases: [
          { name: "Wow", lead: "God’s name is holy. Tell him — silently — what he is like.",
            prompts: ["God, you are merciful — you stop for people others walk past.", "God, your name is holy and your kindness never runs out."],
            starter: "Wow, God, you are…", seconds: 35, aloud: "Hallowed be your name, God — you are merciful!" },
          { name: "Sorry", lead: "Think of a time you saw someone who needed help and walked by.",
            prompts: ["Sorry for the times I pretended not to see someone who needed help.", "Sorry for making excuses like ‘it’s not my job’."],
            starter: "God, I’m sorry for…", seconds: 30, aloud: "God, we’re sorry for the times we walked by on the other side." },
          { name: "Thanks", lead: "Thank God for people who have stopped for you.",
            prompts: ["Thank you for someone who helped me when I was hurt or sad.", "Thank you that you never walk by on the other side."],
            starter: "Thank you, God, for…", seconds: 30, aloud: "Thank you, God, for the people who stopped to help us." },
          { name: "Please", lead: "Ask God to open your eyes.",
            prompts: ["Please help me notice someone who needs a neighbour this week.", "Please give me the courage to stop, like the man from Samaria."],
            starter: "Please, God, help…", seconds: 35, aloud: "Please, God, help us notice people who need a neighbour." }
        ],
        closing: "Everyone: Amen.",
        notes: "Model a one-sentence prayer first. Short and simple is great. If a student’s Sorry is very personal, keep it between them and God." }
    ] },

  /* ======================= TUESDAY ======================= */
  { label: "Tuesday", theme: "A Hero Nobody Expected", roleplay: false, mood: "dawn",
    learningIntentions: [
      "We are learning why Jesus told the parable of the Good Samaritan and who was listening.",
      "We are learning why a Samaritan hero shocked the crowd.",
      "I can explain who’s who in the parable and how Jesus changed the expert’s question."
    ],
    assessment: "Listen for students explaining that Jews and Samaritans were enemies, that the hero was the person the crowd least expected, and that Jesus changed the question from ‘Who is my neighbour?’ to ‘Who was a neighbour?’",
    resources: ["Screen", "Mini-whiteboards or paper"],
    whereToNext: "Tomorrow: the same story in Aotearoa — a muddy Saturday rugby match where everyone walks past, until Sione stops.",
    slides: [
      { type: "title", id: "t-title", title: "A Hero Nobody Expected", minutes: 0.5, kicker: "Term 3 · Week 2", sub: "The Good Samaritan",
        art: { key: "t3w02d2-b" }, notes: "Let the splash play. Today: who was listening, and the twist." },

      { type: "hook", id: "t-recap", title: "Recap", minutes: 1, style: "recap",
        text: "Yesterday an expert asked Jesus a question, and Jesus answered with a parable.",
        ask: "What was the expert’s question — and who stopped to help the hurt man?",
        hint: "‘Who are my neighbours?’ A man from Samaria stopped, while a priest and a temple helper walked by. Today: why Jesus told it, who was listening, and the twist that would have shocked the crowd." },

      { type: "scripture", id: "t-scr", title: "Luke 10:25, 29, 33, 37", minutes: 1, ref: "Luke 10:25–37", version: "CEV",
        lines: [
          { text: "An expert in the Law of Moses stood up and asked Jesus a question to see what he would say. “Teacher,” he asked, “what must I do to have eternal life?”", ref: "Luke 10:25" },
          { text: "The man wanted to show that he knew what he was talking about. So he asked Jesus, “Who are my neighbors?”", ref: "Luke 10:29" },
          { text: "A man from Samaria then came traveling along that road. When he saw the man, he felt sorry for him and went over to him.", ref: "Luke 10:33" },
          { text: "“The one who showed pity,” the man answered. Jesus said, “Go and do the same!”", ref: "Luke 10:37" }
        ],
        emphasis: ["to see what he would say", "wanted to show that he knew", "A man from Samaria", "showed pity", "Go and do the same!"],
        notes: "Notice verse 29: the expert wanted to prove himself. And notice the surprising word in verse 33: Samaria." },

      { type: "story", id: "t-story", title: "A story with a twist", minutes: 3.5, transition: "page", mood: "dawn",
        beats: [
          { text: "Why did Jesus tell it?", caption: "An expert wanted to prove he was good enough — and keep “neighbour” for his own kind." },
          { text: "A road everyone feared.", caption: "A priest and a temple helper — the most religious people around — went by.",
            art: { key: "t3w02d2-a", label: "Tue · who's who — the priest walks past", desc: "A priest in fine robes stepping to the far side of the road, looking away, as a Levite follows in the distance.", shot: "wide, high angle", motion: "kenburns-left", scene: "Seen from above, a priest in fine layered robes and a tall head covering keeps to the far edge of the dusty road, face turned away from the slumped traveller. Further back, a Levite in temple clothes hesitates, already edging toward the other side too." } },
          { text: "Who would be next?", caption: "The crowd expected an ordinary Jewish man to be the hero. Three in a row!" },
          { text: "A Samaritan!", caption: "Jews and Samaritans were bitter enemies. The hero was the enemy.", shout: true,
            art: { key: "t3w02d2-b", label: "Tue · the twist — the enemy who stopped", desc: "The Samaritan kneeling to bandage the traveller's arm and pour oil from a flask, his donkey waiting.", shot: "medium, tender", motion: "kenburns-in", scene: "The Samaritan, in a striped travelling cloak and turban, kneels beside the traveller, gently wrapping a cloth bandage around his arm and tipping a small flask of oil. His patient donkey waits beside them, and late sunlight falls warmly across the two men." } },
          { text: "Jesus flipped the question.", caption: "Not “Who is my neighbour?” but “Who was a neighbour?”" }
        ],
        narration: "Let’s go back to the crowd. Who was listening to this story? And why did Jesus tell it?\n\nFirst, the expert in God’s Law. He already knew the right answer: love your neighbour. But the Bible says he wanted to show that he knew what he was talking about — he wanted to prove he was already good enough. And if ‘neighbour’ only meant certain people, people like him, he could tick the box. Neighbours are my family, my friends, my people. Everyone else? Not my problem.\n\nNow picture the road. It dropped steeply — about a kilometre in height over twenty-seven kilometres — through bare, rocky hills, and everyone knew it was dangerous. So when Jesus said a man lay hurt beside it, every listener thought: that could be me.\n\nThen came the priest, who served God at the temple in Jerusalem — one of the most respected people in the country. Then the Levite, a temple helper. Jesus doesn’t tell us why they walked by. Maybe they were scared. Maybe they were in a hurry. Maybe they worried about religious rules. But whatever the reason, they chose rules and rushing over a person. Some listeners might even have smirked — it’s always fun when the important people look bad.\n\nNow the crowd would have expected the third person to be an ordinary Jewish man: a priest, a Levite, then someone like us. A neat pattern.\n\nBut Jesus said: a Samaritan.\n\nGasp! Jews and Samaritans had been bitter enemies for hundreds of years. They argued about where to worship God and whose scrolls were right. Many Jews wouldn’t even eat with a Samaritan. To the crowd, calling a Samaritan the hero was like making your worst enemy the good guy in the story.\n\nAnd this Samaritan did everything. He felt pity, bandaged, carried, paid, and promised to come back. Think about what he gave up. The oil and wine were his own travel supplies. The donkey was his own ride. Two silver coins was about two days’ pay for a worker — a lot to hand to a stranger. And if the robbers were still close by, he could have been next. Yet he stopped, and he stayed.\n\nThen Jesus flipped the question. The expert had asked, ‘Who is my neighbour? Who counts?’ Jesus asked, ‘Who was a neighbour?’ The question isn’t who deserves my help. It’s whether I will be the one who shows mercy.\n\nAnd the expert couldn’t even say the word ‘Samaritan’. He said, ‘The one who showed pity.’\n\n‘Go,’ said Jesus, ‘and do the same.’",
        notes: "About 3½ minutes. Original audience: a crowd of Jewish listeners, including this expert in the Law. Samaritans were descendants of people from the northern kingdom of Israel who had mixed with other peoples; they worshipped on Mount Gerizim, not Jerusalem. Keep it simple and never mock Samaritans — the point is how startling Jesus’ choice was. Why the priest and Levite passed is not stated; if asked, say we don’t know. John 4:9 notes that Jews did not share dishes with Samaritans." },

      { type: "dig", id: "t-dig", title: "Who’s who in the parable", minutes: 2,
        prompt: "Who’s who? Match each person in the story to what the crowd would have thought.",
        columns: ["In the story", "What the crowd would have thought"],
        items: [
          { left: "The hurt traveller", right: "Anyone in need — no name, no team, no way to pay anyone back" },
          { left: "The priest", right: "A top religious leader from the temple — surely he’ll help!" },
          { left: "The Levite (temple helper)", right: "Another religious worker — a second chance for the “good” people" },
          { left: "The man from Samaria", right: "An enemy and outsider — the last person they expected to stop" }
        ],
        reveal: "The hero of Jesus’ story is the person the listeners least expected — the enemy.",
        notes: "Reveal row by row. Notice what Jesus does NOT tell us about the traveller: nothing about his nationality or religion — he is simply ‘a man’ in need." },

      { type: "question", id: "t-q1", title: "The expert’s motive", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "According to Luke 10:29, why did the expert ask, “Who are my neighbors?”",
        options: ["He wanted to learn something new", "He wanted to show that he knew what he was talking about", "He wanted a drink of water", "He was lost"], answer: 1,
        hint: "Answer: B (Luke 10:29). Follow-up: ‘What had Jesus just told him to do?’ (Love God and love his neighbour.) Follow-up 2: ‘Why might he want to make “neighbour” mean only certain people?’ If silent: re-read the second scripture line." },

      { type: "question", id: "t-q2", title: "The shock", minutes: 1.5, level: "think", mode: "pair", seconds: 45,
        text: "Why would it have been such a shock for the crowd that the hero was a Samaritan?",
        hint: "Good answers: Jews and Samaritans were enemies; they would have expected a Jewish hero; Jesus made the enemy the good one and the religious leaders the ones who failed; he made them think about their own hearts. Follow-up: ‘How would you feel if the hero was someone your team can’t stand?’ Follow-up 2: ‘What was Jesus teaching about who counts as a neighbour?’ If silent: ask ‘Who would be the shocking hero in your world?’" },

      { type: "question", id: "t-q3", title: "A different question", minutes: 1.5, level: "dig", mode: "write", seconds: 45, skippable: true,
        text: "The expert asked, “Who is my neighbour?” Jesus asked, “Who was a neighbour?” On your whiteboard: why does that change matter?",
        hint: "Good answers: the first question asks who I can skip; the second asks what I will do; mercy isn’t about who deserves it but about who needs it; being a neighbour is something we do. Follow-up: ‘Which question is easier to live with?’ Follow-up 2: ‘What would asking Jesus’ question look like in the playground?’ If silent: have pairs share their whiteboards first." },

      { type: "apply", id: "t-apply", title: "Head · Heart · Hands", minutes: 2,
        head: "God’s mercy crosses every line — his kindness isn’t only for people like us.",
        heart: "God, I’m sorry for the times I’ve decided who counts. Help me see people the way you do.",
        hands: "Think of someone at school who is often left out or isn’t in your usual group. This week, notice them and do one kind thing: say hello, offer a seat, or invite them to join in.",
        settings: ["school", "playground", "sport"],
        notes: "Don’t ask for names aloud. Encourage students to picture the person quietly. This feeds straight into Thursday’s challenge." },

      { type: "scene", id: "t-scene", title: "Walking past", minutes: 1, optional: true,
        art: { key: "t3w02d2-a" },
        boxes: [
          { text: "“Not my problem…”", pos: "tl", style: "speech" },
          { text: "Jesus doesn’t tell us why they walked by.", pos: "br", style: "caption" }
        ] },

      { type: "verse", id: "t-verse", title: "Build the verse", minutes: 1, activity: "build",
        notes: "Build Luke 10:27. Point out the two loves in the verse: God, and our neighbour." },

      { type: "prayer", id: "t-pray", title: "Write a “hallowed” prayer", minutes: 3, mood: "calm", style: "write",
        tip: "Writing a prayer slows us down and helps us choose our words. You can write it on paper or in your head — God reads both.",
        opening: "Take your paper. At the top write: ‘Hallowed be your name.’ Remember, hallowed means holy — the most special name of all.",
        phases: [
          { name: "Wow", lead: "Write one line honouring God’s name — what is he like?",
            prompts: ["You are merciful — your kindness reaches strangers and enemies too.", "You are holy — your name is the most special name there is."],
            starter: "You are…", seconds: 40, aloud: "Hallowed be your name — you are merciful to everyone!" },
          { name: "Sorry", lead: "Silently: is there someone you’ve decided doesn’t ‘count’?",
            prompts: ["Sorry for looking down on people who are different from me.", "Sorry for deciding who deserves my kindness."],
            starter: "God, I’m sorry for…", seconds: 25, aloud: "God, we’re sorry for deciding who counts and who doesn’t." },
          { name: "Thanks", lead: "Write one thank-you for the mercy God has shown you.",
            prompts: ["Thank you that you showed mercy to me when I didn’t deserve it.", "Thank you for people who were kind to me when I felt like an outsider."],
            starter: "Thank you for…", seconds: 35, aloud: "Thank you, God, for the mercy you’ve shown us." },
          { name: "Please", lead: "Write a request for someone who is left out or in need.",
            prompts: ["Please help the person at school who often sits alone.", "Please help me be a real neighbour to someone this week."],
            starter: "Please…", seconds: 35, aloud: "Please, God, help us be neighbours to people who are left out." }
        ],
        closing: "Fold your prayer or keep it in your book. God has read every word. Amen.",
        notes: "Invite one or two volunteers to read a line aloud, but make it optional." }
    ] },

  /* ======================= WEDNESDAY ======================= */
  { label: "Wednesday", theme: "Stop at the Sideline", roleplay: true, mood: "calm",
    learningIntentions: [
      "We are learning how the parable of the Good Samaritan could happen at a rugby match in Aotearoa today.",
      "We are learning that being a neighbour means stopping even when it’s awkward or costs us.",
      "I can explain how Sione showed mercy to someone from the other team."
    ],
    assessment: "Listen for students linking Sione’s choice to the Samaritan’s, naming what it cost him, and noticing that Mia’s first reaction (fear) and second reaction (coming back) are both part of being a neighbour.",
    resources: ["Screen", "Optional: a rugby ball, a tea towel for a sling"],
    whereToNext: "Tomorrow: what this story shows about God — and about Jesus, the greatest Samaritan — plus this week’s challenge.",
    slides: [
      { type: "title", id: "w-title", title: "Stop at the Sideline", minutes: 0.5, kicker: "Term 3 · Week 2", sub: "The Good Samaritan",
        art: { key: "t3w02d3-b" }, notes: "Let the splash play. Today the parable moves to a muddy rugby ground in Aotearoa." },

      { type: "hook", id: "w-hook", title: "The other team", minutes: 1,
        text: "Your team is playing the team you really want to beat. Someone from the other side goes down hurt. What happens?",
        ask: "Who would stop? Who would keep walking?",
        hint: "Take a few honest answers. Land it: ‘Yesterday the hero was the enemy. Today we’ll see the same story in Aotearoa — on a Saturday morning at the rugby, in the drizzle.’" },

      { type: "scripture", id: "w-scr", title: "Luke 10:33–34, 37", minutes: 1, ref: "Luke 10:33–37", version: "CEV",
        lines: [
          { text: "A man from Samaria then came traveling along that road. When he saw the man, he felt sorry for him and went over to him.", ref: "Luke 10:33" },
          { text: "He treated his wounds with olive oil and wine and bandaged them. Then he put the man on his own donkey and took him to an inn, where he took care of him.", ref: "Luke 10:34" },
          { text: "“The one who showed pity,” the man answered. Jesus said, “Go and do the same!”", ref: "Luke 10:37" }
        ],
        emphasis: ["felt sorry for him", "took care of him", "showed pity", "Go and do the same!"],
        notes: "Listen for these in today’s role-play: pity, practical help and cost." },

      { type: "story", id: "w-story", title: "The Eagles and the Wolves", minutes: 3, transition: "page", mood: "calm",
        beats: [
          { text: "Eagles v Wolves.", caption: "The match Sione’s team has lost three years in a row." },
          { text: "A Wolf goes down.", caption: "Ryan twists his ankle. The final whistle blows — and people hurry past." },
          { text: "Sione turns back.", caption: "Halfway to the sausage sizzle, he stops.", shout: true,
            art: { key: "t3w02d3-a", label: "Wed · retelling — the kid on the sideline", desc: "At a muddy rugby game, a boy from the other team sits hurt and alone while his own team runs off; Sione jogs over.", shot: "wide, rainy", motion: "kenburns-right", chars: ["sione"], scene: "A drizzly Saturday at a muddy club rugby ground. A boy in the rival team's jersey sits alone in the mud holding his ankle, while players and parents hurry past toward the clubrooms. Sione, in his own team's striped jersey, turns back and jogs toward him.", setting: "Modern-day Aotearoa New Zealand setting: a muddy Saturday-morning club rugby ground with goal posts, a clubrooms shed, parents in raincoats on the sideline and rolling green hills behind. Kiwi kids of many backgrounds drawn naturally and respectfully, in everyday clothes, school uniforms or sports gear." } },
          { text: "Helping him off.", caption: "Sione and Aroha, muddy to the knees — and a parent arrives with the first-aid bag.",
            art: { key: "t3w02d3-b", label: "Wed · retelling — helping him off", desc: "Sione and Aroha helping the rival player limp to the sideline, his arms over their shoulders.", shot: "medium, low-angle", motion: "kenburns-in", chars: ["sione", "aroha"], scene: "Sione and Aroha help the limping rival player toward the sideline, his arms slung over their shoulders, all three muddy to the knees. A parent hurries out with a first-aid bag and a jacket, and the rain softens behind them.", setting: "Modern-day Aotearoa New Zealand setting: a muddy Saturday-morning club rugby ground with goal posts, a clubrooms shed, parents in raincoats on the sideline and rolling green hills behind. Kiwi kids of many backgrounds drawn naturally and respectfully, in everyday clothes, school uniforms or sports gear." } },
          { text: "Who was the neighbour?", caption: "The one who showed mercy." }
        ],
        narration: "It’s Saturday morning at the club rugby ground. It’s drizzling, the pitch is a swamp, and the parents on the sideline are wrapped in raincoats holding hot drinks. Today it’s the Eastside Eagles against the Westgate Wolves — the team that has beaten the Eagles three years in a row.\n\nSione plays number eight for the Eagles. He’s big, he’s fast, and right now he really wants to win. Aroha is on the sideline, handing out the half-time oranges and cheering louder than anyone. Mia has come along with her sketchbook. She’s drawing the match from under her hood, because crowds make her nervous.\n\nWith a minute to go, the Wolves’ winger, a boy called Ryan, gets tackled and lands hard on his ankle. The final whistle goes. Ryan is on the ground, holding his ankle and trying very hard not to cry.\n\nAnd everyone walks past. The Wolves’ players trudge off towards their van, thinking about hot chips. The Eagles’ coach hurries by, calling out about the sausage sizzle. Mia sees Ryan, and she freezes. What if she does something wrong? What if everyone stares at her? ‘Somebody else will go,’ she thinks, and she hurries off to the clubrooms. She isn’t unkind. She’s scared, and sometimes being scared feels exactly like not caring.\n\nRyan sits alone in the rain. He’s a Wolf. He’s the enemy.\n\nThen Sione stops. He’s halfway to the sausage sizzle, tummy rumbling, when he looks back and sees Ryan in the mud. He could keep walking. Nobody would blame him. Instead he turns around and jogs back.\n\n‘You right, bro? Can you stand?’\n\nRyan can’t. So Sione crouches and puts Ryan’s arm over his big shoulders. Aroha spots them and sprints over to take the other side. Together they help him hobble to the sideline, all three of them muddy to the knees.\n\nAnd Mia? Mia stops in the clubroom doorway, takes a big breath, and runs back to fetch the parent with the first-aid bag.\n\nSione missed the sausage sizzle queue that day. He sat in the cold with Ryan until Ryan’s mum arrived. It cost him. But he’d stopped. Ryan limped off with a tea-towel bandage on his ankle and called back, ‘Cheers, Eagle.’ Sione just grinned and said, ‘Sweet as.’",
        notes: "About 3 minutes. This is a modern retelling set in Aotearoa — every detail (names, teams, Mia’s run) is imagined. In real life, if someone has a neck or back injury, don’t move them: stay with them and get an adult. Ryan’s ankle injury is mild. Mia’s freeze is understandable — being scared is not the same as being unkind; she comes back." },

      { type: "question", id: "w-q1", title: "Showed pity", minutes: 1, level: "look", mode: "finish", seconds: 20,
        text: "Finish the expert’s answer: “The one who showed…”",
        reveal: "“…pity.” (Luke 10:37) — and Jesus said, “Go and do the same!”",
        hint: "Follow-up: ‘Who showed pity in today’s story?’ (Sione, and then Aroha and Mia.) Follow-up 2: ‘What did Sione do first?’ (Stopped and turned back.) If silent: point to the last scripture line." },

      { type: "roleplay", id: "w-rp", title: "The Wolf in the Mud", minutes: 5, ref: "Luke 10:25–37 (retold in Aotearoa today)",
        art: { key: "t3w02d3-b" },
        imagined: "This is a modern retelling of Jesus’ parable. The teams, the characters’ names and every word they say are imagined — Jesus’ story is only the pattern (Luke 10:30–37).",
        actions: ["Everyone: cheer “Eagles! Eagles!” from the sideline", "Everyone: drip, drip, drip for the rain", "Everyone: freeze when the pause appears"],
        props: ["Optional: a rugby ball, a tea towel for a sling"],
        characters: [
          { name: "Narrator", color: "#F2C77B", desc: "Tells the story" },
          { name: "Sione", color: "#E57373", desc: "Samoan Kiwi boy, 11 — big-hearted, wants to win" },
          { name: "Aroha", color: "#64B5F6", desc: "Māori girl, 11 — confident and kind" },
          { name: "Mia", color: "#81C784", desc: "Pākehā girl, 10 — nervous, sketchbook in hand" },
          { name: "Ryan", color: "#BA68C8", desc: "The Wolves’ winger — hurt, trying to be brave" },
          { name: "Coach", color: "#FFB547", desc: "The Eagles’ coach — hurried and cheerful" },
          { name: "Everyone", color: "#FFFFFF", desc: "Sideline crowd and the rain" }
        ],
        lines: [
          { character: "Narrator", text: "Saturday morning. Drizzle. A muddy rugby ground. The final whistle has just blown.", direction: true },
          { character: "Everyone", text: "Eagles! Eagles! Eagles!", action: "sideline cheer" },
          { character: "Coach", text: "Great effort, team! Hot chocolate and sausages in the clubrooms — move, move, move!", action: "clapping, hurrying" },
          { character: "Narrator", text: "But one player is still on the ground. Ryan, from the Wolves, is holding his ankle.", direction: true },
          { character: "Ryan", text: "Ow… my ankle… I can’t get up.", action: "trying to be brave" },
          { character: "Coach", text: "Sorry, mate — can’t stop! Your own coach will be along in a minute.", action: "hurry past" },
          { character: "Mia", text: "Oh no, he’s really hurt. But what if I do it wrong? Somebody else will go.", action: "nervous, hugging her sketchbook" },
          { character: "Narrator", text: "Mia hurries off to the clubrooms. Ryan is alone in the rain.", direction: true },
          { character: "Everyone", text: "Drip… drip… drip…", action: "rain" },
          { pause: "Freeze! Two people have walked past. How might Ryan feel? And what is Sione about to decide?", seconds: 20 },
          { character: "Sione", text: "Mmm, sausages… wait. That’s Ryan. The Wolves’ winger. He flattened me last year.", action: "stops and looks back" },
          { character: "Sione", text: "He’s still on the ground and nobody’s stopped. Yeah nah — I can’t leave him.", action: "turns around" },
          { character: "Sione", text: "You right, bro? Can you stand?", action: "crouch beside him" },
          { character: "Ryan", text: "You’re an Eagle. Why are you helping me?", action: "surprised" },
          { character: "Sione", text: "Because you’re hurt. The scoreboard doesn’t matter right now. Arm over my shoulder.", action: "lift gently" },
          { character: "Aroha", text: "Sione, wait! I’ll take the other side. Kia kaha, e hoa — stay strong, friend.", action: "run over" },
          { character: "Aroha", text: "Slowly now. Left foot… right foot… nearly at the sideline.", action: "hobbling together" },
          { character: "Mia", text: "Wait! I’m coming back! I can fetch the first-aid bag. Mrs Taylor has one!", action: "sprint, sketchbook dropped" },
          { character: "Narrator", text: "Mia ran faster than she’d ever run. Mrs Taylor met them at the sideline with the first-aid bag.", direction: true },
          { character: "Ryan", text: "Thanks, you guys. I thought everyone had gone home.", action: "wipe his eyes" },
          { character: "Sione", text: "Take my jacket, bro. I’ll stay with you until your mum gets here.", action: "hands over his dry jacket" },
          { character: "Narrator", text: "Sione missed the sausage queue and sat in the cold with Ryan. It cost him — but he stopped.", direction: true },
          { character: "Ryan", text: "Seriously, thanks. Next time we play, I’ll still smash you. But… thanks.", action: "grinning" },
          { character: "Sione", text: "Bring it on, bro!", action: "big grin" },
          { character: "Narrator", text: "Jesus asked, ‘Which of the three was a real neighbour?’", direction: true },
          { character: "Aroha", text: "The one who showed pity.", action: "quietly, nodding" },
          { character: "Everyone", text: "Go and do the same!" }
        ],
        debrief: [
          { level: "think", text: "Coach, Mia and Sione all saw Ryan. What made it harder for some to stop than others?", hint: "Busy, in a hurry, scared of getting it wrong, he’s from the other team, someone else will do it. Sione had every reason to keep walking. Follow-up: ‘What did it cost Sione?’ (Sausages, warmth, time, his jacket.) Follow-up 2: ‘Is it okay to be scared and still help?’" },
          { level: "dig", text: "Sione helped someone from the team he wanted to beat. Who might be the “other team” in your world?", hint: "Rival schools, a different friendship group, someone you’ve fallen out with, a sibling. No names please. Mercy crosses the line. Follow-up: ‘What would stopping look like?’" }
        ],
        notes: "Set in modern Aotearoa; all names and events imagined. Light touches of te reo and Kiwi speech (“bro”, “yeah nah”, “Kia kaha, e hoa”) are used naturally and respectfully. Jesus’ story is only referred to by the Narrator. Mia’s arc is deliberate: fear first, then courage." },

      { type: "question", id: "w-q2", title: "What it cost", minutes: 1.5, level: "think", mode: "pair", seconds: 45,
        text: "In today’s story, why was it hard for Sione to stop — and what did it cost him?",
        hint: "Good answers: Ryan was on the other team; it was cold and wet; he wanted the sausage sizzle; nobody else was stopping; it cost him time, comfort and his jacket. Real mercy usually costs something. Follow-up: ‘What did the Samaritan give up?’ Follow-up 2: ‘Would you have stopped?’ If silent: ask ‘What would most people have done at the rugby?’" },

      { type: "question", id: "w-q3", title: "Fear, then courage", minutes: 1, level: "dig", mode: "discuss", seconds: 40, skippable: true,
        text: "Mia walked past, then came back and ran for help. What does that tell us about being a neighbour when we’re scared?",
        hint: "Good answers: being scared is normal; we can change our mind; we don’t have to do everything — Mia could fetch help; small, brave steps still count. Follow-up: ‘What is one thing you could do even if you’re nervous?’ (Tell an adult, fetch help, sit with them.) Follow-up 2: ‘Do you think Mia was a bad neighbour?’ If silent: ask ‘What did Mia do second?’" },

      { type: "apply", id: "w-apply", title: "Head · Heart · Hands", minutes: 1,
        head: "A neighbour is anyone who needs help — and mercy means stopping even when it costs us.",
        heart: "God, give me the courage to stop, even if I’m nervous like Mia.",
        hands: "At sport, on the playground or on the bus this week, notice someone from “the other team” or outside your group who needs help, and do one small thing.",
        settings: ["sport", "playground", "school"],
        notes: "Small steps count: fetching an adult, offering to carry a bag, sitting with someone." },

      { type: "scene", id: "w-scene", title: "Sione turns back", minutes: 0.5, optional: true,
        art: { key: "t3w02d3-a" },
        boxes: [
          { text: "“Yeah nah — I can’t leave him.”", pos: "tl", style: "speech" },
          { text: "He stopped. It cost him.", pos: "br", style: "caption" }
        ] },

      { type: "verse", id: "w-verse", title: "Verse with actions", minutes: 1, optional: true, activity: "actions",
        notes: "Use the actions for Luke 10:27. Ask: which action matches ‘neighbours’?" },

      { type: "prayer", id: "w-pray", title: "Praying for each other (pairs)", minutes: 3, mood: "calm", style: "pairs",
        tip: "Praying with a partner reminds us we’re not praying alone. Take turns, and keep it short — one sentence is plenty.",
        opening: "Turn to a partner. One of you prays first, then swap. Remember: ‘hallowed be your name’ means God’s name is holy.",
        phases: [
          { name: "Wow", lead: "Tell God (out loud, quietly, to your partner’s ears) what he is like.",
            prompts: ["God, you stop for people nobody else stops for.", "Hallowed be your name — you are merciful and kind."],
            starter: "God, you are…", seconds: 35, aloud: "Hallowed be your name — you are merciful and kind." },
          { name: "Sorry", lead: "Silently: a time you were too busy or too scared to help, like Coach or Mia.",
            prompts: ["Sorry for the times I walked past someone who needed me.", "Sorry for being too scared or too busy to stop."],
            starter: "God, I’m sorry for…", seconds: 25, aloud: "God, we’re sorry for the times we walked past." },
          { name: "Thanks", lead: "Tell your partner, and God, about someone who has been a neighbour to you.",
            prompts: ["Thank you for someone who stopped and helped me when I was hurt, lonely or left out.", "Thank you that you showed mercy to me."],
            starter: "Thank you, God, for…", seconds: 35, aloud: "Thank you, God, for people who stop and help." },
          { name: "Please", lead: "Pray for your partner by name: one place they could be a neighbour this week.",
            prompts: ["Please give (partner’s name) courage to stop and help this week.", "Please help me notice someone from the “other team”."],
            starter: "Please, God, help…", seconds: 40, aloud: "Please, God, help us to stop and help." }
        ],
        closing: "Everyone: Amen.",
        notes: "Pair students with a friend or someone nearby. Model a short prayer first. Students who don’t want to pray aloud can pray silently." }
    ] },

  /* ======================= THURSDAY ======================= */
  { label: "Thursday", theme: "The Greatest Samaritan", roleplay: false, mood: "dawn",
    learningIntentions: [
      "We are learning what the Good Samaritan shows us about God’s mercy.",
      "We are learning how Jesus is the greatest Samaritan — he came to our rescue and paid the cost himself.",
      "I can name one way I will be a neighbour this week."
    ],
    assessment: "Students can retell the parable in order, explain that God is merciful and crosses every line, and name one specific neighbour-act for this week’s challenge.",
    resources: ["Screen", "Take-home challenge cards"],
    whereToNext: "Next week: Lost Sheep & Lost Coin — a shepherd leaves ninety-nine sheep to search for just one.",
    slides: [
      { type: "title", id: "th-title", title: "The Greatest Samaritan", minutes: 0.5, kicker: "Term 3 · Week 2", sub: "The Good Samaritan",
        art: { key: "t3w02d4-a" }, notes: "Let the splash play." },

      { type: "review", id: "th-review", title: "True or false?", minutes: 2.5, format: "truefalse",
        prompt: "True or false? Stand up for TRUE, sit down for FALSE!",
        items: [
          { text: "The priest and the temple helper both stopped to help.", answer: false, why: "They saw the man and went by on the other side (Luke 10:31–32)." },
          { text: "The man who helped came from Samaria.", answer: true, why: "A man from Samaria — an enemy of the Jews — felt sorry for him." },
          { text: "The Samaritan helped a little and then left.", answer: false, why: "He bandaged the man, took him to an inn, stayed the night and paid two silver coins." },
          { text: "Jesus ended by saying, “Go and do the same!”", answer: true, why: "Luke 10:37 — Jesus told the expert to be a neighbour." },
          { text: "In our Wednesday story, Sione stopped to help a boy from the other team.", answer: true, why: "Ryan was a Wolf, and Sione wanted to win — but he stopped anyway." }
        ],
        hint: "Each statement: students stand (true) or sit (false), then click to reveal. Ask one student to explain each answer.",
        notes: "Click once to show each statement, again to reveal the answer." },

      { type: "scripture", id: "th-scr", title: "Luke 10:35, 37 · Romans 5:8", minutes: 1, ref: "Luke 10:35–37; Romans 5:8", version: "CEV",
        lines: [
          { text: "The next morning he gave the innkeeper two silver coins and said, “Please take care of the man. If you spend more than this on him, I will pay you when I return.”", ref: "Luke 10:35" },
          { text: "“The one who showed pity,” the man answered. Jesus said, “Go and do the same!”", ref: "Luke 10:37" },
          { text: "But God showed how much he loves us by having Christ die for us, even though we were sinners.", ref: "Romans 5:8" }
        ],
        emphasis: ["two silver coins", "I will pay you when I return", "Go and do the same!", "God showed how much he loves us"],
        notes: "Romans 5:8 shows what God’s mercy looked like in Jesus. Savior is the CEV spelling; we say Saviour." },

      { type: "story", id: "th-story", title: "Mercy that pays", minutes: 2, transition: "page", mood: "dawn",
        beats: [
          { text: "The Samaritan paid.", caption: "Two silver coins — and a promise: “I will pay you when I return.”",
            art: { key: "t3w02d4-a", label: "Thu · what it shows — mercy that pays the cost", desc: "At an inn, the Samaritan pressing two silver coins into the innkeeper's hand while the traveller rests inside.", shot: "medium, lamplight", motion: "kenburns-in", scene: "At the doorway of a roadside inn at dawn, the Samaritan presses two silver coins into the innkeeper's open hand, nodding toward a room where the bandaged traveller rests on a mat. His donkey stands ready, and lamplight spills out into the cool morning." } },
          { text: "God is merciful.", caption: "He doesn’t walk by on the other side." },
          { text: "Jesus: the greatest Samaritan.", caption: "He came down to our road and paid the price himself.", shout: true },
          { text: "Go and do the same.", caption: "Mercy for us means mercy through us — one kind act at a time.",
            art: { key: "t3w02d4-b", label: "Thu · live it — be the neighbour", desc: "Mia helping an elderly neighbour carry heavy shopping bags up the steps to her front door.", shot: "medium wide", motion: "kenburns-out", chars: ["mia"], scene: "On a quiet suburban street, Mia carries two heavy shopping bags up the front steps of a weatherboard house, smiling, while an elderly neighbour with a walking stick follows behind her, delighted. A letterbox, a lemon tree and a parked bike frame the scene.", setting: "Modern-day Aotearoa New Zealand setting: a weatherboard family home in a suburban street, with a driveway, letterbox, deck and a small back garden. Kiwi kids of many backgrounds drawn naturally and respectfully, in everyday clothes, school uniforms or sports gear." } }
        ],
        narration: "Think about everything the man from Samaria did. He didn’t only feel sorry. He stopped. He got his hands dirty. He used his own oil and wine, his own donkey and his own money — and he walked while the hurt man rode. He even promised, ‘If it costs more, I will pay you when I come back.’ That’s mercy: kindness to someone in need who can’t pay you back. And it costs the one who gives it.\n\nHere’s what Jesus’ story shows us about God. Our God is merciful. He doesn’t walk by on the other side. When we were helpless — hurt by our own wrong choices and unable to fix them — God didn’t pass us by.\n\nChristians have long seen a picture of Jesus in the Samaritan. Jesus is the greatest Samaritan. He left heaven and came down onto our dangerous road. People rejected him, and some even called him a Samaritan as an insult. And he stopped for us. The Bible says, ‘God showed how much he loves us by having Christ die for us, even though we were sinners.’ Jesus paid the cost — not with two silver coins, but with his own life — and he promised to return.\n\nNow listen to Jesus’ last words to the expert: ‘Go and do the same.’ We don’t show mercy to earn God’s love. We show mercy because we’ve been shown mercy.\n\nAnd mercy can look small. Mia, on her street, carrying heavy shopping bags up the steps for an elderly neighbour. That’s Luke 10:27 in action: love God with everything, and love the neighbour right in front of you.",
        notes: "About 2 minutes (roughly 300 words). Jesus’ main point in the parable is ‘be a neighbour’. Seeing Jesus as the greatest Samaritan is a gospel echo that Christians have long noticed, not the parable’s main meaning, so keep it gentle. John 8:48 records people calling Jesus a Samaritan as an insult. Mia’s act is imagined." },

      { type: "question", id: "th-q1", title: "The promise", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "What did the Samaritan promise the innkeeper?",
        options: ["To come back and pay any extra cost", "To bring a new donkey", "To send the robbers to jail", "To find the man’s family"], answer: 0,
        hint: "Answer: A (Luke 10:35). Follow-up: ‘How much did he leave first?’ (Two silver coins.) Follow-up 2: ‘What does that show about how much he cared?’ (He didn’t do the minimum.) If silent: re-read the first scripture line." },

      { type: "question", id: "th-q2", title: "What God is like", minutes: 1.5, level: "think", mode: "pair", seconds: 45,
        text: "What does this story show us about what God is like?",
        hint: "Good answers: God is merciful; he doesn’t walk by on the other side; his kindness crosses every line; he pays the cost for us; all of us are like the hurt traveller. Follow-up: ‘How is Jesus like the Samaritan?’ (He came to us, rescued us, paid the price, promised to return.) Follow-up 2: ‘What difference does God’s mercy make for how we treat others?’ If silent: ask ‘Who stopped for you?’" },

      { type: "recap", id: "th-recap", title: "This week’s Big Idea", minutes: 1.5,
        points: [
          "A neighbour is anyone who needs help — not just people like us.",
          "God is merciful: his kindness crosses every line, even towards enemies.",
          "Jesus is the greatest Samaritan — he paid the cost to rescue us, and says, “Go and do the same.”"
        ],
        notes: "Then the Big Idea stamps in. Remember: a parable is an earthly story with a heavenly meaning — what is the heavenly meaning here?" },

      { type: "question", id: "th-q3", title: "Does mercy cost?", minutes: 1.5, level: "dig", mode: "vote", seconds: 30, skippable: true,
        text: "Agree or disagree: “Showing mercy should cost us something.”",
        options: ["Agree", "Disagree"],
        hint: "Draw out WHY. Agree: the Samaritan gave time, money and comfort; Sione gave up the sausage sizzle and his jacket; Jesus gave his life. Disagree: some kindness is free, like a smile. Follow-up: ‘What did mercy cost Jesus?’ Follow-up 2: ‘What small thing could you give up this week?’ If silent: ask ‘What did the Samaritan give up?’" },

      { type: "challenge", id: "th-chal", title: "This Week’s Challenge", minutes: 2,
        text: "Be a neighbour. This week, do one kind thing for someone who isn’t one of your usual friends.",
        why: "“You must also love your neighbors as much as you love yourself.” — Luke 10:27",
        head: "God is merciful, and a neighbour is anyone who needs help.", heart: "God, thank you for the mercy you’ve shown me. Help me show it.", hands: "Do one kind thing for someone who isn’t one of my usual friends.",
        takeHome: true,
        notes: "Next Monday (Lost Sheep & Lost Coin) checks in on this. Brainstorm ideas: invite someone new to play, sit with someone at lunch, help a younger child, thank the caretaker, help a neighbour with their bags. Encourage students to choose a specific person today." },

      { type: "verse", id: "th-verse", title: "Memory verse: fade-out", minutes: 1.5, activity: "fade",
        notes: "Fade out Luke 10:27. Say it once together, then in pairs." },

      { type: "scene", id: "th-scene", title: "Mercy on the road", minutes: 1, optional: true,
        art: { key: "t3w02-cover" },
        boxes: [
          { text: "Who is my neighbour?", pos: "tl", style: "shout" },
          { text: "Anyone God puts in front of you — go and do the same.", pos: "br", style: "caption" }
        ] },

      { type: "prayer", id: "th-pray", title: "Open hands", minutes: 3, mood: "calm", style: "hands",
        tip: "Open hands remind us that God gives us mercy freely — and that we can pass it on. Hold your hands open as you pray.",
        opening: "Let’s sit quietly and hold our hands open, palms up. God is merciful to us — and we can be merciful to others.",
        phases: [
          { name: "Wow", lead: "Hands up high: tell God what he is like.",
            prompts: ["God, you are merciful — you never walk by on the other side.", "Jesus, you are the greatest Samaritan — you paid the cost for us."],
            starter: "Wow, God, you are…", seconds: 35, aloud: "Hallowed be your name — you are merciful, and Jesus, you paid the cost for us." },
          { name: "Sorry", lead: "Hands closed, then slowly open them. Tell God what you’re sorry for.",
            prompts: ["Sorry for the times I decided someone wasn’t my neighbour.", "Sorry for the times I knew what to do and didn’t do it."],
            starter: "God, I’m sorry for…", seconds: 30, aloud: "God, we’re sorry — thank you for your mercy." },
          { name: "Thanks", lead: "Hands open to receive: thank God for what he has given.",
            prompts: ["Thank you, Jesus, for coming down our road to rescue us.", "Thank you for the people who have shown me mercy."],
            starter: "Thank you, Jesus, for…", seconds: 30, aloud: "Thank you, Jesus, for rescuing us." },
          { name: "Please", lead: "Hands held out in front of you: ask God to use you.",
            prompts: ["Please help me do my neighbour challenge this week.", "Please show mercy through me to someone who needs it."],
            starter: "Please, God, help me…", seconds: 40, aloud: "Please, God, show your mercy through us this week." }
        ],
        closing: "Together: ‘Our Father in heaven… hallowed be your name.’ Amen.",
        notes: "Open hands are optional. This week’s Lord’s Prayer phrase is ‘hallowed be your name’; next week it’s ‘your kingdom come’." }
    ] }
  ]
};
