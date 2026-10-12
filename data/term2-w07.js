/* Morninglight 2027 — Term 2 Week 7: For Such a Time as This (Esther 2–8, selected). Scripture: CEV. */
window.DEVOTIONS = window.DEVOTIONS || {};
window.DEVOTIONS["Term 2"] = window.DEVOTIONS["Term 2"] || {};
window.DEVOTIONS["Term 2"]["Week 7"] = {
  lessonTitle: "For Such a Time as This",
  passage: "Esther 2–8 (selected)",
  bigIdea: "God is at work behind the scenes, and he places us where we are for a reason.",
  godIs: "At Work",
  memoryVerse: { ref: "Esther 4:14", text: "It could be that you were made queen for a time like this!", version: "CEV",
    chunks: ["It could be", "that you", "were made", "queen", "for a time", "like this!"],
    actions: ["Shrug, palms up — maybe…", "Point to a friend", "Hands shaping something new", "Place a crown on your head", "Tap your wrist like a watch", "Point to the floor — right here, right now!"] },
  prayerFocus: { skill: "Praying for your place/role", tip: "Mordecai told Esther that God might have put her in the palace for a reason (Esther 4:14). Praying for your place means asking, ‘God, why have you put me here?’ — in this class, this family, this team — and asking him to use you there." },
  mood: "temple",
  cover: "t2w07-cover",
  characters: ["esther", "mordecai", "haman", "xerxes"],
  coverArt: { key: "t2w07-cover", label: "Week cover", desc: "Queen Esther standing alone at the edge of a vast Persian throne room, about to step forward, as King Xerxes on his high throne begins to hold out his golden sceptre.", shot: "epic wide, symmetrical",
    scene: "Queen Esther in royal robes standing alone at the edge of a vast Persian throne room with tall carved stone columns, about to step forward across a long patterned floor, while King Xerxes on his high golden throne at the far end begins to hold out his golden sceptre, warm light streaming through high windows." },
  comicArt: { key: "t2w07-comic", label: "Comic page (week opener — for the comic-page viewer, coming in a later build)", format: "portrait", desc: "Six-panel comic page of Esther’s story, from orphan girl to brave queen.",
    panels: "Six panels. Panel 1 (wide): Mordecai placing a hand on young Esther's shoulder outside the great gate of the palace at Susa. Panel 2 (small): King Xerxes placing a slim crown on Esther's head. Panel 3 (tall): a row of officials kneeling to proud Haman while Mordecai alone stands upright. Panel 4 (wide): Esther stepping into the throne room as the king holds out his golden sceptre. Panel 5 (small): the king awake at night by lamplight while a servant reads from a scroll. Panel 6 (wide): Esther and Mordecai on a palace balcony as Jewish families celebrate in the streets below.", chars: ["esther", "mordecai", "haman", "xerxes"] },

  days: [

  /* ======================= MONDAY ======================= */
  { label: "Monday", theme: "An Orphan Becomes Queen", roleplay: true, mood: "temple",
    learningIntentions: [
      "We are learning how Esther, a Jewish orphan, became queen of Persia.",
      "We are learning how Mordecai stood firm and would not kneel to Haman.",
      "I can notice where God is quietly at work in a story that never mentions his name."
    ],
    assessment: "Listen for students retelling how Esther became queen and why Mordecai refused to kneel, and for anyone spotting ‘coincidences’ that might be God at work.",
    resources: ["Screen", "Optional: a paper crown for Esther; a scroll (rolled paper) for the king’s record book"],
    whereToNext: "Tomorrow: Haman makes a terrible plan — and Mordecai sends Esther a message that will change everything.",
    slides: [
      { type: "title", id: "m-title", title: "An Orphan Becomes Queen", minutes: 0.5, kicker: "Term 2 · Week 7", sub: "For Such a Time as This",
        art: { key: "t2w07-cover" }, notes: "A new hero for the Faith Museum: Queen Esther. Let the splash play." },

      { type: "hook", id: "m-hook", title: "Was it luck?", minutes: 1.5,
        checkin: { text: "Last week we met Shadrach, Meshach and Abednego, who wouldn’t bow to the golden statue, and Daniel, who kept praying at his window. Your challenge: stand up for God in one small, quiet way. Did you get a chance? What happened?" },
        text: "Have you ever been in exactly the right place at exactly the right time? What happened?",
        ask: "Was it just luck — or could someone have been planning it?",
        hint: "Check-in first: celebrate small, quiet acts — saying grace at lunch, refusing to join in teasing, praying before a test. Link it: ‘This week someone else refuses to bow — just like the three friends.’ Then the hook: found money, met a friend unexpectedly, caught the bus just in time. Land it: ‘This week’s story is full of “right place, right time” moments. Watch for them!’" },

      { type: "scripture", id: "m-scr", title: "Esther 2:7, 17; 3:2", minutes: 1, ref: "Esther 2:5–3:6", version: "CEV",
        lines: [
          { text: "Mordecai had a cousin named Esther… whose father and mother had died, and Mordecai had raised her as his own daughter.", ref: "Esther 2:7" },
          { text: "The king liked Esther more than he did any of the other young women… He placed a crown on her head and made her queen.", ref: "Esther 2:17" },
          { text: "The king had ordered his officials to… kneel down to Haman, and all of them obeyed except Mordecai.", ref: "Esther 3:2" }
        ],
        emphasis: ["raised her as his own daughter", "made her queen", "except Mordecai"],
        notes: "Verses abridged and lightly simplified from the CEV. Esther’s Hebrew name was Hadassah (2:7). Vashti, the queen before Esther (chapter 1), is not part of today’s story." },

      { type: "story", id: "m-story", title: "Right place, right time", minutes: 3, transition: "page", mood: "temple",
        beats: [
          { text: "Far from home, in Persia.", caption: "Jewish families lived in the king’s great city, Susa." },
          { text: "An orphan named Esther.", caption: "Her cousin Mordecai raised her like a daughter.",
            art: { key: "t2w07d1-a", label: "Mon · story beats 2–3 + stretch scene", desc: "Mordecai gently resting his hand on young Esther’s shoulder outside the huge decorated gate of the Persian palace at Susa, crowds and guards passing by.", shot: "medium wide", motion: "kenburns-in", chars: ["mordecai", "esther"],
              scene: "Mordecai in a plain robe gently resting his hand on the shoulder of young Esther outside the huge blue-tiled gate of the Persian palace at Susa, guards with spears standing upright by the doors, busy crowds and camels passing in golden morning light." } },
          { text: "A crown for Esther!", caption: "The king chose her to be queen.", shout: true },
          { text: "A secret plot — stopped!", caption: "Mordecai overheard it. It was written in the king’s book." },
          { text: "Everyone knelt to Haman…", caption: "…except Mordecai.",
            art: { key: "t2w07d1-b", label: "Mon · story beat 5 + role-play card", desc: "In a grand palace gateway a row of officials kneels low as proud Haman sweeps past, while Mordecai alone stands upright, calm and unmoving.", shot: "wide, low angle", motion: "kenburns-left", chars: ["haman", "mordecai"],
              scene: "In a grand stone palace gateway a long row of Persian officials kneel low with faces down as proud Haman in a rich patterned robe sweeps past with his nose in the air, while Mordecai alone stands upright at the end of the row, calm and unmoving." } }
        ],
        narration: "Long ago, after God’s people had been carried away from their land, many Jewish families lived far from home in the huge Persian empire. It stretched from India all the way to Africa — one hundred and twenty-seven provinces! Its king was Xerxes, and he lived in a glittering palace in the city of Susa.\n\nIn Susa lived a Jewish man called Mordecai. He worked at the king’s gate, and he was raising his young cousin, because her mother and father had died. Mordecai loved her like his own daughter. Her name was Esther.\n\nOne day the king decided he needed a new queen. Messengers went out across the empire, and young women were brought to the palace — Esther was one of them. Before she went, Mordecai told her, ‘Don’t tell anyone you are Jewish.’ Every day he walked up and down outside the palace courtyard, just to find out how she was.\n\nEveryone who met Esther liked her. And when she was brought to King Xerxes, he liked her more than any of the others. He placed a crown on her head and made her queen. A Jewish orphan girl — now queen of the greatest empire in the world! Was that just luck? Keep watching.\n\nNot long after, Mordecai was sitting at the king’s gate when he overheard two guards whispering. They were planning to harm the king! Mordecai told Queen Esther, and Esther told the king that Mordecai had found it out. The plot was stopped, and the whole thing was written down in the king’s record book. Then everyone forgot about it… for now.\n\nSome time later, the king gave a man named Haman the most important job in the empire. Haman was proud and loved being important. The king ordered all his officials to kneel down to Haman whenever he walked past.\n\nSo they did. Every official in the gateway dropped to his knees. Every one — except Mordecai. He stayed standing.\n\n‘Why won’t you obey the king?’ the others asked him, day after day. Mordecai told them he was Jewish. When Haman found out, he was furious.\n\nHere’s something strange about the book of Esther: it never once mentions God’s name. But watch closely. God is at work behind every scene.",
        notes: "About 3 minutes. Esther 2:5–3:6. Why Mordecai wouldn’t kneel isn’t fully explained; the text links it to his being Jewish (3:4), and many think he would not give Haman the kind of honour that belongs to God alone — say ‘probably’. The plotters’ punishment (2:23) is left out. Keep the ‘brought to the palace’ part simple: the king chose a new queen from many young women." },

      { type: "question", id: "m-q1", title: "Who raised Esther?", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "Who raised Esther after her mother and father died?",
        options: ["King Xerxes", "Her cousin Mordecai", "Haman", "The palace guards"], answer: 1,
        hint: "Answer: B (Esther 2:7) — Mordecai raised her as his own daughter. Follow-up: ‘How do we know Mordecai still cared about her after she went to the palace?’ (He walked outside the courtyard every day to find out how she was.) Follow-up 2: ‘What did Mordecai overhear at the king’s gate?’ (A plot to harm the king.) If silent: re-read the first scripture line." },

      { type: "question", id: "m-q2", title: "Just luck?", minutes: 1.5, level: "think", mode: "pair", seconds: 45, skippable: true,
        text: "The book of Esther never says God’s name. So why do you think it is in the Bible — and where might God be quietly at work so far?",
        hint: "Good answers: an orphan becoming queen; Mordecai being at the gate just when the plot was whispered; the plot being written in the king’s book. These look like coincidences, but the Bible shows God working even when no one sees him. Follow-up: ‘Can someone be at work even when you can’t see them?’ (A cook in the kitchen, a parent planning a surprise.) Follow-up 2: ‘Why might God sometimes work quietly instead of with fire from heaven, like last week?’ If silent: ask, ‘Who do you think got Esther to the palace?’" },

      { type: "roleplay", id: "m-rp", title: "The Queen and the Man Who Wouldn’t Kneel", minutes: 5, ref: "Esther 2:5–3:6",
        art: { key: "t2w07d1-b" },
        imagined: "The story follows Esther 2–3 closely. Most spoken words are imagined, but Mordecai’s warning to Esther (2:10), the plot (2:21–23) and the officials’ question (3:3) come from the text.",
        actions: ["Everyone (as the crowd): ‘Long live Queen Esther!’", "Everyone (as officials): kneel down whenever Haman walks past", "Everyone: a shocked ‘Ooooh!’ when Mordecai stays standing"],
        props: ["Optional: a paper crown", "Optional: a rolled-paper scroll for the king’s record book"],
        characters: [
          { name: "Narrator", color: "#F2C77B", desc: "Tells the story" },
          { name: "Mordecai", color: "#7BA7D9", desc: "Esther’s wise older cousin — loyal and firm" },
          { name: "Esther", color: "#E57373", desc: "A young Jewish orphan who becomes queen" },
          { name: "King Xerxes", color: "#FFB547", desc: "The powerful king of Persia" },
          { name: "Haman", color: "#9575CD", desc: "The king’s proud top official" },
          { name: "Official", color: "#4DB6AC", desc: "Another worker at the king’s gate" },
          { name: "Everyone", color: "#FFFFFF", desc: "The crowd and the officials at the gate" }
        ],
        lines: [
          { character: "Narrator", text: "The city of Susa, in the mighty Persian empire. Outside the palace gate.", direction: true },
          { character: "Mordecai", text: "Esther, the king’s messengers have chosen you to go to the palace." },
          { character: "Esther", text: "The palace? Me? But I’m just an orphan girl.", action: "wide eyes" },
          { character: "Mordecai", text: "Listen carefully. Don’t tell anyone that you are Jewish.", action: "hand on her shoulder" },
          { character: "Esther", text: "I’ll do what you say, Mordecai. You’ve always looked after me." },
          { character: "Narrator", text: "Everyone who met Esther liked her. Then she was brought to the king." },
          { character: "King Xerxes", text: "Of all the young women in my empire, I choose you. You will be queen!", action: "place the crown" },
          { character: "Everyone", text: "Long live Queen Esther!", action: "cheer" },
          { character: "Narrator", text: "Later, Mordecai was sitting at the king’s gate. He heard two guards whispering…" },
          { character: "Mordecai", text: "A plot to harm the king! I must tell Esther — quickly!", action: "hurry off" },
          { character: "Esther", text: "Your Majesty, my cousin Mordecai has found out about a plot against you." },
          { character: "King Xerxes", text: "Stop those guards! And write this in my record book.", action: "point to the scroll" },
          { character: "Narrator", text: "It was written down… and then forgotten." },
          { character: "Narrator", text: "Then the king gave Haman the most important job in the empire." },
          { character: "Haman", text: "Make way! The king’s top official is coming through!", action: "strut, chin up" },
          { character: "Official", text: "Kneel, everyone! The king has commanded it!" },
          { character: "Everyone", text: "Yes, Lord Haman!", action: "kneel down low" },
          { character: "Narrator", text: "Every official knelt down. Every one — except Mordecai." },
          { character: "Everyone", text: "Ooooh!", action: "gasp" },
          { pause: "Freeze! Everyone is kneeling. Mordecai is still standing. What might he be thinking? Would you stand?", seconds: 20 },
          { character: "Official", text: "Mordecai, why do you disobey the king’s command?", action: "whisper" },
          { character: "Mordecai", text: "I am Jewish. I will not kneel to Haman.", action: "calm and firm" },
          { character: "Haman", text: "WHAT? That man will not kneel to ME?", action: "red-faced, stamp a foot" },
          { character: "Haman", text: "A Jew, is he? Then I will deal with all of his people!" },
          { character: "Narrator", text: "Haman was furious. And he began to make a terrible plan." },
          { character: "Everyone", text: "Uh-oh…" }
        ],
        debrief: [
          { level: "look", text: "Why did Mordecai say he would not kneel to Haman?", hint: "He told the officials he was Jewish (Esther 3:4). Many think he would not give a proud man the honour that belongs to God alone — like the three friends and the golden statue last week." },
          { level: "think", text: "Mordecai saved the king’s life — but nobody thanked him. Why do you think the Bible bothers to tell us it was written in the king’s book?", hint: "It’s a clue! That forgotten note will matter later in the story (we’ll see it on Thursday). God doesn’t forget, even when people do." }
        ],
        notes: "Keep Haman a bit of a pantomime villain — proud and puffed up rather than scary. His last line hints at the plan without detail; tomorrow explains it simply." },

      { type: "question", id: "m-q3", title: "Standing alone", minutes: 1, level: "dig", mode: "discuss", seconds: 40,
        text: "Mordecai was the only one standing while everyone else knelt. Was he being brave, stubborn — or faithful? Could his choice cause trouble for others?",
        hint: "Let them disagree! Draw out: it took courage; he probably would not give a proud man the honour that belongs to God; but it did make Haman angry with all the Jewish people. Doing right doesn’t always make life easier — and God was still in control. Follow-up: ‘How is Mordecai like Shadrach, Meshach and Abednego last week?’ Follow-up 2: ‘When might standing up for God make things harder for you at first?’ If silent: re-read Esther 3:2 and ask, ‘What did Mordecai risk?’" },

      { type: "apply", id: "m-apply", title: "Head · Heart · Hands", minutes: 1,
        head: "God is quietly at work — he put Esther in the palace and Mordecai at the gate.",
        heart: "God, help me notice where you have put me — and why.",
        hands: "Today, look for one ‘right place, right time’ moment at school or at home — someone who needs help that you happen to be next to — and help them.",
        settings: ["school", "playground", "home"],
        notes: "Ask for one example they might notice today: someone alone at lunch, a dropped pencil case, a younger sibling who needs a hand." },

      { type: "scene", id: "m-scene", title: "The only one standing", minutes: 0.5, optional: true,
        art: { key: "t2w07d1-b" },
        boxes: [
          { text: "Every official knelt down…", pos: "tl", style: "caption" },
          { text: "…except Mordecai.", pos: "br", style: "caption" }
        ] },

      { type: "verse", id: "m-verse", title: "Memory verse peek", minutes: 1, optional: true, activity: "echo",
        notes: "Introduce Esther 4:14 — Mordecai’s famous words. ‘We’ll find out tomorrow why he said it!’" },

      { type: "prayer", id: "m-pray", title: "Silent prayer: where you have put me", minutes: 3, mood: "calm", style: "silent",
        tip: "This week’s prayer skill is praying for your place. God put Esther in the palace and Mordecai at the gate. Today, pray silently about the places God has put you.",
        opening: "Sit still. Picture the places you go every week — home, this classroom, the playground, your team. Breathe in… and out.",
        phases: [
          { name: "Wow", lead: "God is at work even when we can’t see him.",
            prompts: ["Wow, God, you looked after Esther when she had no mum or dad.", "You were at work in the palace, even when no one said your name."],
            starter: "Wow, God, you…", seconds: 35, aloud: "Wow, God — you are always at work, even when we can’t see you!" },
          { name: "Sorry", lead: "Is there a place where you’ve forgotten God is with you?",
            prompts: ["Sorry for thinking you don’t care about my ordinary days.", "Sorry for kneeling to what everyone else wants instead of doing what’s right."],
            starter: "God, I’m sorry for…", seconds: 30, aloud: "God, we’re sorry for forgetting that you are with us." },
          { name: "Thanks", lead: "Thank God for people like Mordecai who look after you.",
            prompts: ["Thank you for the people who care for me, like Mordecai cared for Esther.", "Thank you for putting me in this class and this family."],
            starter: "Thank you, God, for…", seconds: 30, aloud: "Thank you, God, for the people and places you have given us." },
          { name: "Please", lead: "Ask God to use you in one of your places this week.",
            prompts: ["Please show me why you have put me in this class.", "Please help me stand firm like Mordecai when it’s hard."],
            starter: "Please, God, help…", seconds: 40, aloud: "Please, God, use us right where you have put us." }
        ],
        closing: "Let’s finish together. Everyone: Amen.",
        notes: "Be sensitive: some students may not live with their parents. Esther was raised by a cousin — families come in many shapes, and God looks after each one." }
    ] },

  /* ======================= TUESDAY ======================= */
  { label: "Tuesday", theme: "A Message for the Queen", roleplay: false, mood: "night",
    learningIntentions: [
      "We are learning how Haman tricked the king into making a law against all the Jewish people.",
      "We are learning what Mordecai’s message to Esther meant: ‘for a time like this’.",
      "I can find clues that God was quietly at work, even before Esther knew it."
    ],
    assessment: "Listen for students explaining why Esther was afraid to go to the king, and what Mordecai meant when he said she might have been made queen ‘for a time like this’.",
    resources: ["Screen", "Optional: a toy ring or a stamp; a pair of dice"],
    whereToNext: "Tomorrow: Esther makes her decision — and walks into the throne room uninvited.",
    slides: [
      { type: "title", id: "t-title", title: "A Message for the Queen", minutes: 0.5, kicker: "Term 2 · Week 7", sub: "For Such a Time as This",
        art: { key: "t2w07d2-b" }, notes: "Let the splash play." },

      { type: "hook", id: "t-recap", title: "Recap", minutes: 1, style: "recap",
        text: "Yesterday an orphan became queen — and one man refused to kneel.",
        ask: "Who became queen? And who wouldn’t kneel to Haman?",
        hint: "Esther became queen of Persia. Mordecai, her cousin, wouldn’t kneel to proud Haman. ‘Haman was furious. Today we find out what he did about it — and Esther gets a message that changes her life.’" },

      { type: "scripture", id: "t-scr", title: "Esther 4:1, 11, 14", minutes: 1, ref: "Esther 3:7–4:14", version: "CEV",
        lines: [
          { text: "Mordecai… tore his clothes in sorrow and put on sackcloth.", ref: "Esther 4:1" },
          { text: "“Anyone who goes in to see the king without being invited… The only way… is for the king to hold out the gold scepter.”", ref: "Esther 4:11" },
          { text: "“It could be that you were made queen for a time like this!”", ref: "Esther 4:14" }
        ],
        emphasis: ["tore his clothes", "without being invited", "gold scepter", "for a time like this"],
        notes: "Verses heavily abridged — lines kept short; check against a printed CEV if reading aloud word-for-word. ‘Scepter’ keeps the CEV spelling on screen. Sackcloth was rough, scratchy cloth worn to show great sadness." },

      { type: "story", id: "t-story", title: "The ring, the law and the message", minutes: 3.5, transition: "page", mood: "night",
        beats: [
          { text: "Haman rolled the lots.", caption: "The day for his plan landed almost a year away." },
          { text: "The king handed over his ring.", caption: "A law to get rid of all the Jewish people in the empire.",
            art: { key: "t2w07d2-a", label: "Tue · story beats 2–3 + stretch scene", desc: "King Xerxes on his throne carelessly handing his royal signet ring to a smirking Haman, who bows with an unrolled scroll under his arm.", shot: "medium, two-shot", motion: "kenburns-right", chars: ["xerxes", "haman"],
              scene: "King Xerxes lounging on his golden throne, carelessly pulling off his royal signet ring and handing it to a smirking Haman, who bows low with an unrolled scroll tucked under his arm, rich curtains and lamplight around them." } },
          { text: "Mordecai wept at the gate.", caption: "Jewish families everywhere were afraid." },
          { text: "“I can’t just walk in!”", caption: "No one could go to the king unless invited." },
          { text: "“For a time like this!”", caption: "Mordecai’s message reached the queen.", shout: true,
            art: { key: "t2w07d2-b", label: "Tue · title + story beat 5 + stretch scene", desc: "At night in a palace room, Queen Esther sits by a window reading a small message by lamplight, her face thoughtful and troubled, the city of Susa dark below.", shot: "medium, quiet", motion: "kenburns-in", chars: ["esther"],
              scene: "At night in a richly tiled palace room, Queen Esther sits by an arched window reading a small handwritten message by the glow of an oil lamp, her face thoughtful and troubled, the rooftops of the city of Susa dark and still below." } }
        ],
        narration: "Haman could not stop thinking about Mordecai. Every day Haman walked through the gate, and every day Mordecai stayed standing. But punishing one man wasn’t enough for Haman. He knew Mordecai was Jewish — so he decided to get rid of all the Jewish people in the whole empire.\n\nFirst, Haman wanted to choose the right day. So he had people throw lots — a bit like rolling dice. The lots were called ‘pur’. Roll after roll, they finally landed on a day almost a whole year away. Haman probably thought, ‘Never mind. I can wait.’ But that long wait would turn out to be very important.\n\nThen Haman went to the king. ‘Your Majesty, there is a group of people scattered all over your empire. They have their own laws, and they don’t obey yours. Make a law to get rid of them, and I will pay a huge amount of silver into your treasury.’\n\nThe king didn’t even ask who these people were. He pulled off his royal ring — the ring that sealed his laws — and handed it to Haman. ‘Keep your money. Do whatever you like with these people.’\n\nSo the law was written and stamped with the king’s ring. In Persia, once a law was sealed with the king’s ring, no one could cancel it. Messengers galloped out to every province. The king and Haman sat down to have a drink together — while the city of Susa was confused and upset.\n\nWhen Mordecai heard, he tore his clothes and put on sackcloth — rough, scratchy cloth people wore to show deep sadness. He walked through the city crying loudly. All across the empire, Jewish families did the same. They wept, and they went without food.\n\nInside the palace, Queen Esther heard that Mordecai was upset, but she didn’t know why. She sent a servant called Hathach to find out. Mordecai gave him a copy of the law. ‘Show this to Esther,’ he said. ‘Tell her to go to the king and beg him to save her people.’\n\nEsther sent back a worried reply. ‘Everyone knows the rule. Anyone who goes to the king without being invited could lose their life — unless the king holds out his golden sceptre. And the king hasn’t asked for me for thirty days.’\n\nMordecai’s answer came back, strong and clear. ‘Don’t think that living in the palace will keep you safe. If you stay silent, help will come from somewhere else. But who knows? It could be that you were made queen for a time like this!’\n\nEsther read the words again. For a time like this. Maybe nothing had been an accident. Maybe she was in the palace for a reason.",
        notes: "About 3½ minutes. Esther 3:7–4:14. Keep Haman’s plan at the level of ‘a law to get rid of all the Jewish people’ — no further detail. Haman offered 10,000 talents of silver (3:9) — a huge fortune. ‘Help will come from somewhere else’ (4:14) is the closest the book comes to naming God: Mordecai trusts that God will rescue his people, one way or another. If students ask about the Jewish people being targeted later in history, acknowledge it honestly and briefly, and land on God’s care for his people." },

      { type: "dig", id: "t-dig", title: "Spot the hidden hand", minutes: 2,
        prompt: "Look closer: God’s name isn’t in the story — but can you spot his fingerprints?",
        columns: ["What happened", "Clue: God at work?"],
        items: [
          { left: "A Jewish orphan girl became queen", right: "She is in the palace just before her people need her" },
          { left: "Mordecai overheard the plot against the king", right: "It was written in the king’s book — saved for later" },
          { left: "Haman’s lots landed almost a year away", right: "Nearly a whole year to undo his plan!" },
          { left: "“Help will come from somewhere else”", right: "Mordecai trusted that God would not abandon his people" }
        ],
        reveal: "God is at work behind the scenes — even when nobody says his name.",
        notes: "Reveal row by row. The ‘lots’ clue: Proverbs 16:33 says people roll the dice, but every answer comes from the LORD. Optional: roll a real dice to show how random lots seemed." },

      { type: "question", id: "t-q1", title: "Why afraid?", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "Why was Esther afraid to go and see the king?",
        options: ["She didn’t like the king", "Going in uninvited was against the law and very dangerous", "The palace was too far away", "Haman was guarding the door"], answer: 1,
        hint: "Answer: B (Esther 4:11). Only if the king held out his golden sceptre would someone who came uninvited be safe — and he hadn’t asked for Esther in thirty days. Follow-up: ‘What did Mordecai want Esther to ask the king?’ (To save her people.) Follow-up 2: ‘How did Mordecai and Esther send messages?’ (Through the servant Hathach.) If silent: re-read the second scripture line." },

      { type: "question", id: "t-q2", title: "For a time like this", minutes: 1.5, level: "think", mode: "pair", seconds: 45,
        text: "Mordecai said, “It could be that you were made queen for a time like this!” What did he mean?",
        hint: "Good answers: maybe God put Esther in the palace on purpose; her crown wasn’t just for her own comfort — it was so she could help others; this was her moment to act. Follow-up: ‘Mordecai also said help would come from somewhere else. Who do you think he was trusting?’ (God.) Follow-up 2: ‘If God could rescue his people anyway, why would he want Esther to be part of it?’ If silent: ask, ‘Why do you think a Jewish orphan ended up as queen just before this law?’" },

      { type: "question", id: "t-q3", title: "Stay quiet or speak up?", minutes: 1.5, level: "dig", mode: "vote", seconds: 30, skippable: true,
        options: ["Stay quiet and safe", "Speak up, even if it’s risky", "Not sure"],
        text: "If you were Esther, would you stay quiet and safe in the palace, or speak up even though it was risky? Vote, then explain.",
        hint: "Expect honest answers — staying safe is a very human choice! Draw out: Esther had a lot to lose; her people had more to lose; Mordecai reminded her she couldn’t hide forever; courage isn’t ‘not being scared’, it’s doing right while scared. Follow-up: ‘What would make it easier to speak up?’ (Knowing others are praying; trusting God.) Follow-up 2: ‘When is it hard for you to speak up for someone — on the playground or online?’ If silent: share a time you had to speak up when it was scary." },

      { type: "apply", id: "t-apply", title: "Head · Heart · Hands", minutes: 2,
        head: "God puts people in their places for a reason — and he can use me where I am.",
        heart: "God, why have you put me here? Show me how to help.",
        hands: "Think of one place you go every week — your class, your team, your family, your group chat. Name one person there you could help or speak up for this week.",
        settings: ["school", "sport", "home", "group chat"],
        notes: "This leads into today’s written prayer. Let students name the place quietly in their heads." },

      { type: "scene", id: "t-scene", title: "The message", minutes: 1, optional: true,
        art: { key: "t2w07d2-b" },
        boxes: [
          { text: "“It could be that you were made queen for a time like this!”", pos: "tl", style: "speech" },
          { text: "Esther read the words again.", pos: "br", style: "caption" }
        ] },

      { type: "verse", id: "t-verse", title: "Build the verse", minutes: 1, activity: "build",
        notes: "Build Esther 4:14 chunk by chunk with the actions. ‘Today we heard who said it — Mordecai!’" },

      { type: "prayer", id: "t-pray", title: "A written ‘my places’ prayer", minutes: 3, mood: "calm", style: "write",
        tip: "Praying for your place means praying about the real places God has put you. Writing them down helps you remember — you can pray the list again all week.",
        opening: "On your paper, write at the top: ‘God, you put me here.’ Underneath, write three places: home, school, and one more.",
        phases: [
          { name: "Wow", lead: "Write one line about how God was at work in Esther’s story.",
            prompts: ["You put Esther in the palace just in time.", "You can turn even a roll of the dice into part of your plan."],
            starter: "God, you…", seconds: 40, aloud: "God, you are always at work — even when we can’t see it!" },
          { name: "Sorry", lead: "Silently: have you stayed quiet when you could have helped someone?",
            prompts: ["Sorry for staying quiet when someone needed me to speak up.", "Sorry for thinking my places are just for me."],
            starter: "Sorry for…", seconds: 25, aloud: "God, we’re sorry for staying silent when we should have helped." },
          { name: "Thanks", lead: "Next to each place on your list, write one thank you.",
            prompts: ["Thank you for my family at home.", "Thank you for my friends and teachers at school."],
            starter: "Thank you for…", seconds: 35, aloud: "Thank you, God, for every place you’ve put us." },
          { name: "Please", lead: "Write a ‘please’ for one person in one of your places.",
            prompts: ["Please help me help (name) in my class this week.", "Please make me brave like Esther when it’s my time to speak."],
            starter: "Please…", seconds: 40, aloud: "Please, God, use us for a time like this." }
        ],
        closing: "Fold your paper and keep it. Pray your list again tomorrow. Amen.",
        notes: "Students can reuse these lists on Thursday. Collect them if they might get lost." }
    ] },

  /* ======================= WEDNESDAY ======================= */
  { label: "Wednesday", theme: "If I Perish, I Perish", roleplay: true, mood: "temple",
    learningIntentions: [
      "We are learning how Esther and her people fasted and prayed before she went to the king.",
      "We are learning how Esther showed courage by going to the king uninvited.",
      "I can explain how courage means doing what is right even when you are scared."
    ],
    assessment: "Listen for students explaining that the three days of fasting were a way of praying, that Esther went to the king knowing the danger, and that courage is trusting God while scared — not being fearless.",
    resources: ["Screen", "Optional: a cardboard tube or ruler for the golden sceptre; a paper crown"],
    whereToNext: "Tomorrow: a king who can’t sleep, a forgotten book — and the tables turn.",
    slides: [
      { type: "title", id: "w-title", title: "If I Perish, I Perish", minutes: 0.5, kicker: "Term 2 · Week 7", sub: "For Such a Time as This",
        art: { key: "t2w07d3-b" }, notes: "The big day! Let the splash play." },

      { type: "hook", id: "w-hook", title: "Brave or scared?", minutes: 1,
        text: "Can you be brave and scared at the same time?",
        ask: "What’s something you’ve done even though your knees were shaking?",
        hint: "Take a few stories: first day at a new school, a speech, a big jump at the pools, saying sorry. Recap quickly: Haman’s law, Mordecai’s message, ‘for a time like this.’ Land it: ‘Esther was scared. Today we see what she did with that fear.’" },

      { type: "scripture", id: "w-scr", title: "Esther 4:16; 5:2–3", minutes: 1, ref: "Esther 4:15–5:8", version: "CEV",
        lines: [
          { text: "“Don’t eat or drink for three days and nights. My servant girls and I will do the same. Then I will go in to see the king.”", ref: "Esther 4:16" },
          { text: "When the king saw her, he was pleased and held out the gold scepter to her. So Esther came up and touched the tip of it.", ref: "Esther 5:2" },
          { text: "The king said, “Esther, what brings you here? Just ask, and I will give you as much as half of my kingdom.”", ref: "Esther 5:3" }
        ],
        emphasis: ["three days and nights", "Then I will go in", "he was pleased", "touched the tip", "half of my kingdom"],
        notes: "Verses abridged. ‘If I perish, I perish’ (4:16) is the well-known wording from other versions; the CEV puts it more plainly. ‘Scepter’ keeps the CEV spelling on screen." },

      { type: "story", id: "w-story", title: "Into the throne room", minutes: 3, transition: "page", mood: "temple",
        beats: [
          { text: "Three days without food.", caption: "All the Jewish people in Susa fasted — and prayed.",
            art: { key: "t2w07d3-a", label: "Wed · story beats 1–2 + stretch scene", desc: "Queen Esther kneeling in a quiet palace room by lamplight with her servant girls kneeling around her, heads bowed in prayer, a bare table with no food.", shot: "medium wide, candlelit", motion: "kenburns-in", chars: ["esther"],
              scene: "Queen Esther kneeling in a quiet tiled palace room by soft lamplight with three servant girls kneeling around her, all with heads bowed and hands folded in prayer, a bare table with an empty plate beside them and stars through the window." } },
          { text: "“If I perish, I perish.”", caption: "Whatever happens, I will do what is right." },
          { text: "One step into the courtyard.", caption: "Would the king be angry — or pleased?" },
          { text: "The golden sceptre!", caption: "Esther touched the tip. She was safe!", shout: true,
            art: { key: "t2w07d3-b", label: "Wed · title + story beat 4 + role-play card", desc: "Inside the vast throne room, King Xerxes leans forward from his throne holding out his golden sceptre, and Queen Esther reaches out to touch its tip, guards and courtiers watching in hushed surprise.", shot: "wide, dramatic", motion: "kenburns-up", chars: ["esther", "xerxes"],
              scene: "Inside the vast Persian throne room with tall carved columns, King Xerxes leans forward from his high golden throne holding out his golden sceptre, and Queen Esther in royal robes steps up and reaches out to touch its tip, guards and courtiers watching in hushed surprise." } },
          { text: "“Come to my dinner.”", caption: "Esther waited for the right moment." }
        ],
        narration: "Esther thought about Mordecai’s message. Then she sent back her answer.\n\n‘Go and gather all the Jewish people in Susa. Go without food for me — don’t eat or drink for three days and nights. My servant girls and I will do the same. Then I will go in to see the king, even though it’s against the law. And if I perish, I perish.’\n\nThat means, ‘Whatever happens to me, I will do what is right.’\n\nGoing without food like this is called fasting. People fasted when they wanted to pray very seriously — to show God, ‘This matters more than my dinner!’ The story still doesn’t say God’s name. But why else would a whole city go without food? They were praying.\n\nFor three days, all over Susa, people fasted and prayed. And in the palace, the queen got ready.\n\nOn the third day, Esther put on her royal robes. She walked to the inner courtyard, right outside the throne room. Her heart must have been pounding. Through the doorway she could see the king on his throne.\n\nShe stepped into view and stood there, waiting.\n\nKing Xerxes looked up. He saw Queen Esther standing in the courtyard… and he was pleased! He held out the gold sceptre towards her. Esther came forward and touched the tip of it. She was safe!\n\n‘Esther, what brings you here?’ the king asked. ‘Just ask, and I will give you as much as half of my kingdom!’\n\nHalf the kingdom! But Esther didn’t blurt it all out. She said, ‘Your Majesty, please come today to a dinner I have prepared for you — and bring Haman too.’\n\nSo the king and Haman came to Esther’s dinner. Over the meal, the king asked again, ‘Now, what do you want? I’ll give you anything — up to half my kingdom!’\n\nEsther took a breath. ‘Please come to another dinner tomorrow, you and Haman. Then I will tell you.’\n\nWhy wait? The Bible doesn’t say. Maybe Esther was choosing her moment carefully. But that one extra day would turn out to be exactly what was needed — because something was about to happen that night that nobody had planned… except God.\n\nHaman went home feeling very pleased with himself. Dinner with the king and queen — twice! He had no idea what was coming.",
        notes: "About 3 minutes. Esther 4:15–5:8 (5:9–14, Haman’s boasting at home, is left out). ‘If I perish, I perish’ sounds dramatic — explain it as ‘whatever happens, I’ll do what’s right’ and keep the focus on courage and trust, not danger. Esther’s reasons for waiting are not given; the ‘maybe’ is deliberate." },

      { type: "question", id: "w-q1", title: "Three days", minutes: 1, level: "look", mode: "finish", seconds: 20,
        text: "Finish the sentence: “Before Esther went to the king, she asked all the Jewish people in Susa to… ”",
        reveal: "“…go without food and drink for three days and nights — to fast and pray with her.” (Esther 4:16)",
        hint: "Follow-up: ‘What did the king do when he saw Esther in the courtyard?’ (He was pleased and held out the gold sceptre.) Follow-up 2: ‘What did Esther ask for first — the big thing, or a dinner?’ (A dinner, with the king and Haman.) If silent: point to the first story beat and re-read it." },

      { type: "roleplay", id: "w-rp", title: "The Queen Who Walked In", minutes: 5, ref: "Esther 4:15–5:8",
        art: { key: "t2w07d3-b" },
        imagined: "Esther’s message, the king’s offer and Esther’s invitations follow Esther 4–5 (CEV, shortened). The servant girl’s and guard’s lines are imagined.",
        actions: ["Everyone (as the people of Susa): bow heads and whisper ‘We will pray’", "Everyone: a heartbeat — tap your chest, getting faster", "Everyone: a big sigh of relief when the sceptre comes out"],
        props: ["Optional: a cardboard tube or ruler as the golden sceptre", "Optional: a paper crown"],
        characters: [
          { name: "Narrator", color: "#F2C77B", desc: "Tells the story" },
          { name: "Esther", color: "#E57373", desc: "The queen — scared, but brave" },
          { name: "Mordecai", color: "#7BA7D9", desc: "Esther’s cousin, outside the palace" },
          { name: "Servant Girl", color: "#8BC34A", desc: "One of Esther’s loyal helpers" },
          { name: "King Xerxes", color: "#FFB547", desc: "The powerful king on his throne" },
          { name: "Guard", color: "#4DB6AC", desc: "Stands at the throne-room door" },
          { name: "Haman", color: "#9575CD", desc: "Proud — and very pleased with himself" },
          { name: "Everyone", color: "#FFFFFF", desc: "The Jewish people of Susa, and a nervous heartbeat" }
        ],
        lines: [
          { character: "Narrator", text: "Esther has made her decision. She sends a message to Mordecai.", direction: true },
          { character: "Esther", text: "Gather all the Jewish people in Susa. Don’t eat or drink for three days and nights." },
          { character: "Esther", text: "My servant girls and I will do the same. Then I will go in to see the king." },
          { character: "Esther", text: "Even though it’s against the law. And if I perish, I perish.", action: "quiet but firm" },
          { character: "Mordecai", text: "Everyone! The queen asks us to fast — and pray.", action: "call to the crowd" },
          { character: "Everyone", text: "We will pray.", action: "bow heads, whisper" },
          { character: "Narrator", text: "Three days later. Esther puts on her royal robes." },
          { character: "Servant Girl", text: "My queen, your hands are shaking.", action: "fix the crown" },
          { character: "Esther", text: "I know. But this is the time. Walk with me to the courtyard." },
          { character: "Guard", text: "Halt! The king has not called for you, Your Majesty!", action: "step forward" },
          { character: "Esther", text: "I know. I will stand here and wait.", action: "take a deep breath" },
          { character: "Everyone", text: "Ba-dum. Ba-dum. Ba-dum.", action: "tap chests — a nervous heartbeat" },
          { pause: "Freeze! Esther is standing in the courtyard. The king hasn’t seen her yet. What do you think she is praying right now?", seconds: 20 },
          { character: "King Xerxes", text: "Is that… Queen Esther?", action: "look up" },
          { character: "Narrator", text: "The king was pleased. He held out his golden sceptre." },
          { character: "Everyone", text: "Phew!", action: "big sigh of relief" },
          { character: "Narrator", text: "Esther came forward and touched the tip of it.", action: "reach out slowly" },
          { character: "King Xerxes", text: "Esther, what brings you here? Just ask — I’ll give you up to half my kingdom!" },
          { character: "Esther", text: "Your Majesty, please come to a dinner I have prepared. And bring Haman too." },
          { character: "King Xerxes", text: "Guard! Fetch Haman at once!" },
          { character: "Haman", text: "Dinner with the king AND the queen? How wonderful — for me!", action: "puff out chest" },
          { character: "Narrator", text: "At the dinner, the king asked again." },
          { character: "King Xerxes", text: "Now, Esther, what do you want? Anything — up to half my kingdom!" },
          { character: "Esther", text: "Come to another dinner tomorrow, both of you. Then I will tell you.", action: "glance at Haman" },
          { character: "Haman", text: "Another dinner! I am the most important man in the empire!", action: "strut off" },
          { character: "Narrator", text: "Haman had no idea what was coming. But God was already at work." }
        ],
        debrief: [
          { level: "think", text: "Esther asked everyone to fast and pray before she went to the king. What does that show about where she found her courage?", hint: "She didn’t trust her own beauty or her crown — she depended on God, and on her people praying. Courage often comes from knowing God is with us and others are praying for us." },
          { level: "look", text: "What did the king do when he saw Esther — and what did she ask for?", hint: "He was pleased and held out his golden sceptre; she touched the tip. She asked the king and Haman to come to a dinner — then another one the next day (Esther 5:2–8)." }
        ],
        notes: "Make the heartbeat build tension, then let the ‘Phew!’ be big. Keep ‘if I perish, I perish’ calm and firm rather than frightening; explain it as ‘whatever happens, I’ll do what is right.’" },

      { type: "question", id: "w-q2", title: "Esther and Jesus", minutes: 1.5, level: "dig", mode: "discuss", seconds: 45,
        text: "Esther risked her life to go to the king and save her people. Who else in the Bible gave himself to save his people — and how was he even greater than Esther?",
        hint: "Point to Jesus. Esther was willing to risk her life; Jesus actually gave his life on the cross to save us, and then rose again. Esther went to an earthly king for her people; Jesus now speaks to God the Father for us (Hebrews 7:25). Follow-up: ‘Esther was nervous to approach the king. How can WE come to God, because of Jesus?’ (Boldly and welcome — Hebrews 4:16.) Follow-up 2: ‘How is that like the golden sceptre held out?’ If silent: ask, ‘Who do we talk about at Easter?’" },

      { type: "question", id: "w-q3", title: "Why wait?", minutes: 1, level: "think", mode: "pair", seconds: 40, skippable: true,
        text: "The king offered Esther half his kingdom — but she waited and invited him to dinner, twice. Why do you think she didn’t ask straight away?",
        hint: "Good answers: she was choosing her moment wisely; she wanted the king relaxed and happy; she wanted Haman there when she spoke; she may still have been nervous; God was giving time for something else to happen. Follow-up: ‘Is it ever wise to wait before saying something important?’ Follow-up 2: ‘How can you tell the difference between waiting wisely and being too scared to act?’ If silent: ask, ‘Would you ask your parents for something big while they’re grumpy or while they’re happy?’" },

      { type: "apply", id: "w-apply", title: "Head · Heart · Hands", minutes: 1,
        head: "God gives courage to people who trust him — even when they are scared.",
        heart: "God, I feel scared sometimes. Help me be brave like Esther, and trust you.",
        hands: "Before one scary thing this week — speaking up for someone, telling the truth, joining a new group — pray first, ask a friend to pray for you, then do it.",
        settings: ["school", "playground", "home", "sport"],
        notes: "Model it: ‘Before my meeting today I’ll pray first.’ Encourage pairs to swap one scary thing to pray about." },

      { type: "scene", id: "w-scene", title: "Three days of prayer", minutes: 0.5, optional: true,
        art: { key: "t2w07d3-a" },
        boxes: [
          { text: "“Then I will go in to see the king.”", pos: "tl", style: "speech" },
          { text: "All over Susa, God’s people were praying.", pos: "br", style: "caption" }
        ] },

      { type: "verse", id: "w-verse", title: "Verse with actions", minutes: 1, optional: true, activity: "actions",
        notes: "Actions for Esther 4:14. Ask: ‘What was Esther’s “time like this”?’" },

      { type: "prayer", id: "w-pray", title: "Stand-up prayer (like Esther in the courtyard)", minutes: 3, mood: "calm", style: "stand",
        tip: "Esther stood in the courtyard and waited for the king. We never have to wait outside — God always welcomes us. Today, stand up as you pray, as a way of saying, ‘Here I am, God, ready to be used.’",
        opening: "Everyone stand up, feet steady, hands by your sides. Esther stood and waited. We can stand and pray — and God is already pleased to hear us.",
        phases: [
          { name: "Wow", lead: "God is the King of all kings — and he always welcomes us.",
            prompts: ["Wow, God, you are greater than King Xerxes.", "You never make us wait outside — you always hold out your welcome."],
            starter: "Wow, God, you…", seconds: 35, aloud: "Wow, God — you are the King of kings, and you welcome us!" },
          { name: "Sorry", lead: "Silently: is there a time you chose to stay safe instead of doing what was right?",
            prompts: ["Sorry for staying quiet because I was scared.", "Sorry for only thinking about keeping myself safe."],
            starter: "God, I’m sorry for…", seconds: 30, aloud: "God, we’re sorry for the times fear stopped us doing right." },
          { name: "Thanks", lead: "Thank God for Jesus, who did even more than Esther.",
            prompts: ["Thank you that Jesus gave his life to save us.", "Thank you for people who pray for me, like Susa prayed for Esther."],
            starter: "Thank you, God, for…", seconds: 30, aloud: "Thank you, Jesus, for giving yourself to save us!" },
          { name: "Please", lead: "Ask God for courage in the place he has put you.",
            prompts: ["Please make me brave for the scary thing I have to do this week.", "Please help me use my place to help someone else."],
            starter: "Please, God, give me…", seconds: 40, aloud: "Please, God, make us brave for a time like this." }
        ],
        closing: "Stand tall. Everyone: Here I am, God. Amen!",
        notes: "Students who can’t stand can sit tall instead. Don’t force anyone to pray aloud." }
    ] },

  /* ======================= THURSDAY ======================= */
  { label: "Thursday", theme: "The Tables Turn", roleplay: false, mood: "dawn",
    learningIntentions: [
      "We are learning how a sleepless night and a forgotten book turned Esther’s story around.",
      "We are learning that God was at work behind the scenes, even though his name is never mentioned.",
      "I can recite Esther 4:14 and explain how God can use me where he has put me."
    ],
    assessment: "Students can say who said key lines from the story, explain at least two ‘hidden hand’ moments (the sleepless night, the record book), and recite Esther 4:14.",
    resources: ["Screen", "Take-home challenge cards", "Tuesday’s ‘my places’ prayer lists (if collected)"],
    whereToNext: "Next week: “Faith That Brings Friends to Jesus” — four friends, a hole in the roof, and a soldier who trusted Jesus’ word (Mark 2; Luke 7).",
    slides: [
      { type: "title", id: "th-title", title: "The Tables Turn", minutes: 0.5, kicker: "Term 2 · Week 7", sub: "For Such a Time as This",
        art: { key: "t2w07d4-a" }, notes: "Let the splash play." },

      { type: "review", id: "th-review", title: "Who said it?", minutes: 2.5, format: "whoSaid",
        prompt: "Who said it? Shout out your answer!",
        items: [
          { quote: "Don’t tell anyone that you are Jewish.", who: "Mordecai" },
          { quote: "Why do you disobey the king’s command?", who: "The king’s officials" },
          { quote: "It could be that you were made queen for a time like this!", who: "Mordecai" },
          { quote: "Then I will go in to see the king.", who: "Esther" },
          { quote: "Just ask, and I will give you as much as half of my kingdom.", who: "King Xerxes" },
          { quote: "Who would the king want to reward more than me?", who: "Haman (thinking to himself)" }
        ],
        hint: "Click to show each quote; students call out who said it; click again to reveal. Ask: ‘When did they say it — and what happened next?’",
        notes: "The last quote is from today’s story — let students guess, then tell it." },

      { type: "scripture", id: "th-scr", title: "Esther 6:1, 3; 7:3", minutes: 1, ref: "Esther 6–8", version: "CEV",
        lines: [
          { text: "That night the king could not sleep, and he had a servant read him the records of what had happened since he had been king.", ref: "Esther 6:1" },
          { text: "The king asked, “What has been done to reward Mordecai for this?” “Nothing, Your Majesty!” his servants answered.", ref: "Esther 6:3" },
          { text: "Esther answered: “Your Majesty, if you really care for me and are willing to help, you can save me and my people.”", ref: "Esther 7:3" }
        ],
        emphasis: ["could not sleep", "records", "Nothing", "save me and my people"],
        notes: "Verses abridged; wording kept short — check against a printed CEV if reading word-for-word. Notice: a king who can’t sleep, the exact page about Mordecai — just in time." },

      { type: "story", id: "th-story", title: "A sleepless night", minutes: 2, transition: "page", mood: "dawn",
        beats: [
          { text: "The king could not sleep.", caption: "So a servant read him the record book…",
            art: { key: "t2w07d4-a", label: "Thu · title + story beats 1–2", desc: "King Xerxes sitting up awake in his grand bed at night by lamplight while a servant reads aloud from a long scroll, the king listening with surprise.", shot: "medium, warm night light", motion: "kenburns-right", chars: ["xerxes"],
              scene: "King Xerxes sitting up wide awake in a grand canopied bed at night, lit by a single oil lamp, while a young servant stands beside him reading aloud from a long unrolled scroll, the king leaning forward with a surprised, thoughtful face." } },
          { text: "“What was done for Mordecai?”", caption: "“Nothing, Your Majesty!”" },
          { text: "Haman led Mordecai through the city!", caption: "Royal robe. Royal horse. Haman’s face — red!", shout: true },
          { text: "Esther spoke up.", caption: "Haman’s plan was turned back on him.",
            art: { key: "t2w07d4-b", label: "Thu · story beat 4 + stretch scene", desc: "Queen Esther and Mordecai standing on a sunlit palace balcony, Mordecai now in royal blue and white robes, smiling down at Jewish families celebrating with music and food in the streets below.", shot: "wide, joyful", motion: "kenburns-out", chars: ["esther", "mordecai"],
              scene: "Queen Esther and Mordecai standing side by side on a sunlit palace balcony, Mordecai now dressed in royal blue and white robes, smiling down at crowds of Jewish families celebrating in the streets of Susa below with music, dancing, baskets of food and children waving." } }
        ],
        narration: "That very night, the king could not sleep. Of all the nights! So he asked a servant to read to him from the royal record book. And of all the pages, the servant read the one about Mordecai — the man who had saved the king’s life from the plot.\n\n‘What has been done to reward Mordecai?’ the king asked. ‘Nothing, Your Majesty!’\n\nJust then, Haman arrived early to ask the king for something nasty against Mordecai. But the king spoke first: ‘Haman, what should I do for a man I really want to reward?’\n\nHaman thought, ‘Who would the king want to reward more than me?’ So he said, ‘Dress him in the king’s robe, put him on the king’s horse, and lead him through the city shouting, “This is how the king rewards someone!”’\n\n‘Perfect!’ said the king. ‘Go and do all that — for Mordecai.’ And Haman had to lead Mordecai through the streets!\n\nAt Esther’s second dinner, the king asked again what she wanted. Esther spoke up bravely: ‘Please save me and my people! Someone has made a law to get rid of us all.’ ‘Who would dare?’ asked the king. Esther pointed. ‘Haman!’\n\nHaman’s plan was turned back on him, and he was punished. The king gave his ring to Mordecai, and a new law was sent out so that the Jewish people would be safe. Sadness turned into joy, and they celebrated — and Jewish people still celebrate this every year at a festival called Purim.\n\nGod’s name is never written in the book of Esther. But a sleepless night, the right page, perfect timing? God was at work behind every scene.",
        notes: "About 2 minutes. Esther 6–8 (and 9:20–28 for Purim). Keep Haman’s fate exactly at ‘his plan was turned back on him and he was punished’ — no further detail. Chapters 8–9 also describe the Jewish people defending themselves; this is not told here. If asked, say simply: ‘The king gave them a new law so they could protect themselves, and God kept his people safe.’" },

      { type: "question", id: "th-q1", title: "The sleepless night", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "When the king couldn’t sleep, what did he find out from his record book?",
        options: ["That Haman was a hero", "That Mordecai had saved his life and was never rewarded", "That Esther was Jewish", "That it was his birthday"], answer: 1,
        hint: "Answer: B (Esther 6:1–3). Follow-up: ‘Who had to lead Mordecai through the city on the king’s horse?’ (Haman — the man who wanted to get rid of him!) Follow-up 2: ‘When did Esther tell the king about Haman’s plan?’ (At her second dinner — the extra day made all the difference.) If silent: re-read the first two scripture lines." },

      { type: "question", id: "th-q2", title: "Coincidence?", minutes: 1.5, level: "think", mode: "pair", seconds: 45,
        text: "A king who can’t sleep. The exact page about Mordecai. Haman arriving at just that moment. Were these coincidences — or was God at work? What does this show us about God?",
        hint: "Good answers: God was quietly arranging things; he is in charge even of small things like sleep and timing; he had not forgotten his people even when no one said his name; he turns bad plans around. Follow-up: ‘Why do you think God didn’t just send fire from heaven, like he did for Elijah?’ Follow-up 2: ‘Where might God be quietly at work in your life right now?’ If silent: list the ‘coincidences’ on the board and ask, ‘Could ALL of these be luck?’" },

      { type: "recap", id: "th-recap", title: "This Week’s Big Idea", minutes: 1.5,
        points: [
          "God put an orphan girl in the palace and Mordecai at the gate — right place, right time.",
          "Esther fasted, prayed and bravely went to the king ‘for a time like this’.",
          "God’s name is never written in Esther, yet he was at work behind every scene — and he turned Haman’s plan around."
        ],
        notes: "Then the Big Idea stamps in. Link to Jesus: the cross looked like the worst day ever, but God turned it into the best news ever (Genesis 50:20 says something similar about Joseph)." },

      { type: "question", id: "th-q3", title: "My ‘time like this’", minutes: 1.5, level: "dig", mode: "write", seconds: 45, skippable: true,
        text: "Esther was made queen ‘for a time like this.’ Where has God put you — and what might your ‘time like this’ be this week?",
        hint: "Write it on a mini-whiteboard. Ideas: being the friend of someone who is new; being the big brother or sister at home; being in a team where someone is left out; knowing a friend who is sad. Follow-up: ‘What small thing could you do there tomorrow?’ Follow-up 2: ‘Do you have to be a queen or a leader for God to use you?’ (No — Mordecai was just a man at the gate.) If silent: share one place God has put you and how you hope to help there." },

      { type: "challenge", id: "th-chal", title: "This Week’s Challenge", minutes: 2,
        text: "For such a time as this. Each morning, ask, “God, why have you put me here today?” — and do one helpful thing for someone where you are.",
        why: "“It could be that you were made queen for a time like this!” — Esther 4:14",
        head: "God is at work behind the scenes, and he places us where we are for a reason.", heart: "God, why have you put me here today?", hands: "Do one helpful thing for someone where you are, every day.",
        takeHome: true,
        notes: "Next Monday will check in on this. Suggest writing the morning question on the take-home card and sticking it by the bed or on the fridge." },

      { type: "verse", id: "th-verse", title: "Memory verse: fade-out", minutes: 1.5, activity: "fade",
        notes: "Fade out Esther 4:14. Bonus: who can say last week’s verse, Daniel 3:17–18?" },

      { type: "scene", id: "th-scene", title: "Sadness turned to joy", minutes: 1, optional: true,
        art: { key: "t2w07d4-b" },
        boxes: [
          { text: "Their sadness turned into joy!", pos: "tl", style: "caption" },
          { text: "God was at work behind every scene.", pos: "br", style: "caption" }
        ] },

      { type: "prayer", id: "th-pray", title: "Pray for each other’s places (pairs)", minutes: 3, mood: "calm", style: "pairs",
        tip: "Praying for your place can be done for each other! Mordecai and the people of Susa prayed for Esther. Today, pray for your partner and the place God has put them.",
        opening: "Turn to a partner. Each tell the other the place you wrote about — your ‘time like this’.",
        phases: [
          { name: "Wow", lead: "Take turns to tell God one thing this week showed you about him.",
            prompts: ["God, you are always at work, even when we can’t see you.", "You turned Haman’s plan around and kept your people safe."],
            starter: "God, you are…", seconds: 35, aloud: "God, you are at work — behind every scene!" },
          { name: "Sorry", lead: "Silently: have you thought God has forgotten you?",
            prompts: ["Sorry for thinking you weren’t there when I couldn’t see you.", "Sorry for not using my place to help others."],
            starter: "God, I’m sorry for…", seconds: 25, aloud: "God, we’re sorry for forgetting that you are always at work." },
          { name: "Thanks", lead: "Thank God together for the ‘right place, right time’ moments in your life.",
            prompts: ["Thank you that you kept Esther and her people safe.", "Thank you for a time you put me in the right place at the right time."],
            starter: "Thank you, God, for…", seconds: 30, aloud: "Thank you, God, that you never forget your people!" },
          { name: "Please", lead: "Pray for your PARTNER’s place — by name.",
            prompts: ["Please use (name) in their class and at home this week.", "Please make (name) brave like Esther when it’s their time."],
            starter: "Please, God, help (name)…", seconds: 45, aloud: "Please, God, use each one of us for a time like this." }
        ],
        closing: "Let’s say Esther 4:14 together — then: Amen!",
        notes: "Encourage partners to ask each other on Monday how the challenge went." }
    ] }
  ]
};
