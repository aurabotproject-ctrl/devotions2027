/* Morninglight 2027 — Term 1 Week 8: The Shepherd-King (1 Samuel 16–17; Psalm 23). Scripture: CEV. */
window.DEVOTIONS = window.DEVOTIONS || {};
window.DEVOTIONS["Term 1"] = window.DEVOTIONS["Term 1"] || {};
window.DEVOTIONS["Term 1"]["Week 8"] = {
  lessonTitle: "The Shepherd-King",
  passage: "1 Samuel 16:1–13; 17; Psalm 23; John 10:11",
  bigIdea: "God looks at the heart — and he is the Good Shepherd who protects and leads his people.",
  godIs: "Shepherd",
  memoryVerse: { ref: "Psalm 23:1", text: "You, LORD, are my shepherd. I will never be in need.", version: "CEV",
    chunks: ["You, LORD,", "are my shepherd.", "I will never", "be in need."],
    actions: ["Point up", "Hold a shepherd’s crook (hook your hand)", "Shake your head slowly", "Open hands, then hug yourself — full!"] },
  prayerFocus: { skill: "Praying a psalm", tip: "The psalms are prayers and songs. When we pray them, we borrow words God gave us — and make them our own." },
  mood: "dawn",
  cover: "t1w08-cover",
  characters: ["david", "samuel"],
  coverArt: { key: "t1w08-cover", label: "Week cover", desc: "David as a boy shepherd on a green hilltop with his sling, sheep behind him, a vast valley and far army camps below, a crown of light behind his head.", shot: "wide",
    scene: "David as a boy shepherd standing on a green hilltop with his sling in hand, his sheep behind him, a vast valley and far army camps below, a crown of light behind his head." },
  comicArt: { key: "t1w08-comic", label: "Comic page (week opener — for the comic-page viewer, coming in a later build)", format: "portrait", desc: "Six-panel comic page of David’s story.",
    panels: "Six panels. Panel 1 (wide): Samuel and Jesse's seven sons. Panel 2 (small): oil poured on David's head. Panel 3 (wide): David and the sheep at night. Panel 4 (tall): Goliath's silhouette. Panel 5 (small): five smooth stones. Panel 6 (wide, bottom): the sling spinning toward the giant.", chars: ["david", "samuel"] },

  days: [

  /* ======================= MONDAY ======================= */
  { label: "Monday", theme: "God Looks at the Heart", roleplay: true, mood: "dawn",
    learningIntentions: [
      "We are learning how God chose David to be king.",
      "We are learning that God looks at the heart, not appearances.",
      "I can explain the difference between how people judge and how God judges."
    ],
    assessment: "Listen for students quoting or explaining 1 Samuel 16:7 and applying it to how they judge others.",
    resources: ["Screen", "Optional: a small bottle of oil and a horn/cup for Samuel"],
    whereToNext: "Tomorrow: David the shepherd boy — and the song he wrote about God, Psalm 23.",
    slides: [
      { type: "title", id: "m-title", title: "God Looks at the Heart", minutes: 0.5, kicker: "Term 1 · Week 8", sub: "The Shepherd-King",
        art: { key: "t1w08-cover" }, notes: "Let the splash play." },

      { type: "hook", id: "m-hook", title: "Picking teams", minutes: 1.5,
        checkin: { text: "Last week we heard how God gave manna every morning. Your challenge: thank God before every meal. How many meals did you remember?" },
        text: "Two captains are picking teams. Who usually gets picked first? Who gets picked last?",
        ask: "What are people looking at when they pick?",
        hint: "Check-in first — have fun with the meal-count. Then the hook: tallest, fastest, most popular. People look at the outside. Land it: ‘Today God goes to a family to pick a king — and he picks the one nobody even invited.’" },

      { type: "scripture", id: "m-scr", title: "1 Samuel 16:6–7, 12–13", minutes: 1, ref: "1 Samuel 16:6–13", version: "CEV",
        lines: [
          { text: "Samuel noticed Jesse’s oldest son, Eliab. “He has to be the one the LORD has chosen,” Samuel said to himself.", ref: "1 Samuel 16:6" },
          { text: "But the LORD said, “Samuel, don’t think Eliab is the one just because he’s tall and handsome… People judge others by what they look like, but I judge people by what is in their hearts.”", ref: "1 Samuel 16:7" },
          { text: "As soon as David came, the LORD told Samuel, “He’s the one! Get up and pour the olive oil on his head.”", ref: "1 Samuel 16:12" },
          { text: "Samuel poured the oil on David’s head while his brothers watched.", ref: "1 Samuel 16:13" }
        ],
        emphasis: ["tall and handsome", "what is in their hearts", "He’s the one!"],
        notes: "Verse 7 abridged slightly." },

      { type: "story", id: "m-story", title: "The one nobody invited", minutes: 3, transition: "page",
        beats: [
          { text: "Israel needed a new king.", caption: "God sent Samuel to Bethlehem, to a man named Jesse." },
          { text: "Seven tall, strong sons.", caption: "“Surely it’s this one!” thought Samuel.",
            art: { key: "t1w08d1-a", label: "Mon · story beats 2–3", desc: "Samuel holding up a horn of oil at Jesse’s door, seven tall sons lined up looking proud, Samuel looking past them searchingly.", shot: "medium wide", motion: "kenburns-right", chars: ["samuel"],
              scene: "Samuel holding up a horn of oil at Jesse's door, seven tall sons lined up in a row looking proud, Samuel looking past them with a searching expression." } },
          { text: "“I judge people by what is in their hearts.”", caption: "Not him. Not him. Not any of them.", shout: true },
          { text: "“Do you have any other sons?”", caption: "The youngest was out looking after the sheep." },
          { text: "“He’s the one!”", caption: "Samuel poured oil on David’s head.",
            art: { key: "t1w08d1-b", label: "Mon · story beat 5 + role-play card", desc: "Young David arriving breathless from the fields as Samuel pours oil over his head, his brothers watching in surprise.", shot: "medium", motion: "kenburns-in", chars: ["david", "samuel"],
              scene: "Young shepherd David arriving breathless from the fields as old Samuel pours oil from a curved horn over his head, his seven tall brothers watching in surprise behind them." } }
        ],
        narration: "Hundreds of years after Moses, God’s people were living in the land God had promised Abraham. They had asked for a king, and God had given them one — a man called Saul. Saul was tall and handsome and looked exactly like a king should look. But Saul didn’t listen to God. He did things his own way. So God said to his prophet Samuel, ‘I have rejected Saul. Fill your horn with olive oil and go to Bethlehem, to a man named Jesse. I have chosen one of his sons to be king.’\n\nIn those days, a new king was chosen by pouring oil on his head. It was called anointing. It meant, ‘God has chosen you.’\n\nSo Samuel went to Bethlehem and invited Jesse and his sons to a special ceremony. Jesse’s oldest son, Eliab, walked in. He was tall, strong, handsome — the kind of person who gets picked first. Samuel thought, ‘This must be him! He looks like a king!’\n\nBut God said something that changed everything: ‘Samuel, don’t think Eliab is the one just because he’s tall and handsome. People judge others by what they look like, but I judge people by what is in their hearts.’\n\nSo Jesse sent his next son, Abinadab. ‘No, the LORD hasn’t chosen him.’ Then Shammah. ‘Not him either.’ One by one, seven sons walked past Samuel. Seven strong, grown-up, impressive young men. And God said no to every single one.\n\nSamuel was puzzled. ‘Jesse — do you have any other sons?’\n\n‘Well,’ said Jesse, ‘there’s the youngest. He’s out looking after the sheep.’ The youngest hadn’t even been invited! He was out in the fields, doing the smelly, boring job nobody else wanted.\n\n‘Send for him!’ said Samuel. ‘We won’t start until he gets here.’\n\nSo they fetched him. In came a teenage boy, a bit breathless, sunburnt, smelling of sheep, with a sparkle in his eyes. His name was David. And God said, ‘He’s the one! Pour the oil on his head.’\n\nSo Samuel poured the oil on David’s head while his big brothers watched with their mouths open. And from that day on, the Spirit of the LORD was with David in a powerful way.\n\nGod didn’t choose the tallest or the oldest or the most impressive. He chose the one whose heart was turned towards him.",
        notes: "About 3 minutes. Jesse’s reply and Samuel’s ‘Send for him’ follow 16:11 closely; some wording is simplified. David became king years later (2 Samuel 5)." },

      { type: "question", id: "m-q1", title: "What God looks at", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "According to 1 Samuel 16:7, what does God look at when he judges people?",
        options: ["How tall they are", "How old they are", "What is in their hearts", "How rich they are"], answer: 2,
        hint: "Answer: C. Follow-up: ‘What do people usually look at?’ (What they look like.) Follow-up 2: ‘Where was David when Samuel arrived?’ (Looking after the sheep.) If silent: re-read the second scripture line." },

      { type: "question", id: "m-q2", title: "Not invited", minutes: 1.5, level: "think", mode: "pair", seconds: 45, skippable: true,
        text: "David wasn’t even invited to the ceremony. What does it show about God that he chose the one everyone forgot?",
        hint: "Good answers: God sees people others ignore; he doesn’t care about status; he values faithfulness in small jobs; nobody is too young or unimportant for God. Follow-up: ‘Where else this term has God chosen unlikely people?’ (Moses the stammerer, old Abraham.) Follow-up 2: ‘Who might feel forgotten in our school?’ If silent: ‘How do you think David felt when he was called in?’" },

      { type: "roleplay", id: "m-rp", title: "God Looks at the Heart", minutes: 5, ref: "1 Samuel 16:1–13",
        art: { key: "t1w08d1-b" },
        imagined: "God’s and Samuel’s words are from 1 Samuel 16 (CEV). The brothers’ show-off lines are imagined for fun.",
        actions: ["Everyone: stand tall and flex when the brothers walk past", "Everyone: ‘Baa!’ when David arrives"],
        props: ["Optional: a cup of ‘oil’ (water) for Samuel"],
        characters: [
          { name: "Narrator", color: "#F2C77B", desc: "Tells the story" },
          { name: "Voice of God", voice: true, desc: "Teacher or a strong reader" },
          { name: "Samuel", color: "#B0BEC5", desc: "Old prophet — easily impressed at first" },
          { name: "Jesse", color: "#A1887F", desc: "Proud dad of eight sons" },
          { name: "Eliab", color: "#7BA7D9", desc: "Oldest — tall, handsome, confident" },
          { name: "Shammah", color: "#9575CD", desc: "Another brother — also confident" },
          { name: "David", color: "#FFB547", desc: "Youngest — out with the sheep" },
          { name: "Everyone", color: "#FFFFFF", desc: "The other brothers — and the sheep!" }
        ],
        lines: [
          { character: "Narrator", text: "Bethlehem. Samuel arrives at Jesse’s house.", direction: true },
          { character: "Jesse", text: "Welcome, Samuel! Here are my sons — strong, every one of them!" },
          { character: "Eliab", text: "Hello, Samuel. I’m Eliab. The oldest. And the tallest.", action: "stand tall, flex" },
          { character: "Samuel", text: "He has to be the one the LORD has chosen!", action: "to himself, impressed" },
          { character: "Voice of God", text: "Samuel, don’t think Eliab is the one just because he’s tall and handsome. He isn’t the one I’ve chosen." },
          { character: "Voice of God", text: "People judge others by what they look like, but I judge people by what is in their hearts." },
          { character: "Eliab", text: "Wait… what?", action: "deflate" },
          { character: "Shammah", text: "My turn! Look at these muscles!", action: "strut past" },
          { character: "Samuel", text: "The LORD hasn’t chosen him either." },
          { character: "Everyone", text: "Us! Pick us!", action: "the other brothers strut and flex" },
          { character: "Samuel", text: "Jesse, the LORD hasn’t chosen any of these young men." },
          { pause: "Freeze! Seven sons — all rejected. Who do you think God wants? Why?", seconds: 20 },
          { character: "Samuel", text: "Do you have any other sons?" },
          { character: "Jesse", text: "Well… the youngest. David. He’s out taking care of the sheep." },
          { character: "Eliab", text: "David? He’s just a kid. He smells like sheep!", action: "laugh" },
          { character: "Samuel", text: "Send for him! We won’t start until he gets here." },
          { character: "Everyone", text: "Baa! Baa!", action: "sheep noises" },
          { character: "David", text: "You called for me, Dad?", action: "run in, out of breath" },
          { character: "Voice of God", text: "He’s the one! Get up and pour the olive oil on his head." },
          { character: "Samuel", text: "David — the LORD has chosen you.", action: "pour ‘oil’ on David’s head" },
          { character: "David", text: "Me? But I’m only a shepherd…", action: "amazed" },
          { character: "Narrator", text: "At that moment, the Spirit of the LORD took control of David and stayed with him from then on." },
          { character: "Everyone", text: "God looks at the heart!" }
        ],
        debrief: [
          { level: "think", text: "What do you think God saw in David’s heart?", hint: "Love for God, trust, faithfulness in small jobs, courage, humility." },
          { level: "dig", text: "How do you think Eliab felt? Is it hard when someone younger is chosen over you?", hint: "Embarrassed, jealous (remember Joseph’s brothers!) — a chance to talk about handling disappointment." }
        ],
        notes: "Pick a tall student for Eliab for a laugh — and maybe the smallest volunteer for David (check they’re happy with it)." },

      { type: "question", id: "m-q3", title: "Judging the outside", minutes: 1, level: "dig", mode: "discuss", seconds: 40,
        text: "God judges by the heart. But we can’t see hearts! So how should WE treat people we don’t know well?",
        hint: "Ideas: don’t judge by clothes, looks, skills or popularity; give people a chance; get to know them; remember God sees their heart; treat everyone as made like God (Week 1!). Follow-up: ‘When have you been judged by the outside?’ Follow-up 2: ‘How can we see a bit more of someone’s heart?’ (Listening, time.) If silent: ‘Is the kid sitting alone at lunch boring or just shy?’" },

      { type: "apply", id: "m-apply", title: "Head · Heart · Hands", minutes: 1,
        head: "God looks at the heart, not the outside.",
        heart: "God, make my heart the kind you love.",
        hands: "This week, choose someone who usually gets picked last — for your team, your game, or your group.",
        settings: ["sport", "playground", "class"],
        notes: "Encourage kindness without making anyone feel like a ‘charity pick’." },

      { type: "scene", id: "m-scene", title: "He’s the one!", minutes: 0.5, optional: true,
        art: { key: "t1w08d1-a" },
        boxes: [
          { text: "Seven sons — not him, not him, not him…", pos: "tl", style: "caption" },
          { text: "“He’s the one!”", pos: "br", style: "shout" }
        ] },

      { type: "verse", id: "m-verse", title: "Memory verse peek", minutes: 1, optional: true, activity: "echo",
        notes: "Introduce Psalm 23:1 — David wrote it!" },

      { type: "prayer", id: "m-pray", title: "A heart prayer (silent)", minutes: 3, mood: "calm", style: "silent",
        tip: "This week we pray the psalms. Psalm 51:10 is a short prayer David prayed later: ‘Create in me a clean heart.’ You can pray it any time.",
        opening: "Let’s be still. God sees our hearts. Breathe in… and out.",
        phases: [
          { name: "Wow", lead: "God sees everyone — even the ones left out in the fields.",
            prompts: ["God, you see my heart.", "God, you notice people others forget."],
            starter: "Wow, God, you…", seconds: 30, aloud: "Wow, God — you see every heart!" },
          { name: "Sorry", lead: "Is there someone you’ve judged by the outside?",
            prompts: ["Sorry for judging people by how they look.", "Sorry for leaving someone out."],
            starter: "God, I’m sorry for…", seconds: 35, aloud: "God, I’m sorry for judging people by the outside." },
          { name: "Thanks", lead: "Thank God that he chooses ordinary people.",
            prompts: ["Thank you that you chose David the shepherd.", "Thank you that you can use me."],
            starter: "Thank you, God, for…", seconds: 30, aloud: "Thank you, God, that you choose ordinary people." },
          { name: "Please", lead: "Pray David’s prayer for your own heart.",
            prompts: ["“Create in me a clean heart.”", "Please make my heart love you."],
            starter: "Please, God, help…", seconds: 35, aloud: "Please, God, create in me a clean heart." }
        ],
        closing: "Everyone: Amen.",
        notes: "The Psalm 51:10 phrase is quoted in a common form — Psalm 51 itself is for older students." }
    ] },

  /* ======================= TUESDAY ======================= */
  { label: "Tuesday", theme: "The LORD Is My Shepherd", roleplay: false, mood: "night",
    learningIntentions: [
      "We are learning about David’s life as a shepherd.",
      "We are learning Psalm 23 line by line.",
      "I can explain what it means that God is like a shepherd."
    ],
    assessment: "Listen for students connecting each line of Psalm 23 to something a shepherd does — and to what God does for them.",
    resources: ["Screen", "Optional: a picture or toy sheep"],
    whereToNext: "Tomorrow: a giant, an army too scared to fight — and a shepherd boy with a sling.",
    slides: [
      { type: "title", id: "t-title", title: "The LORD Is My Shepherd", minutes: 0.5, kicker: "Term 1 · Week 8", sub: "The Shepherd-King",
        art: { key: "t1w08d2-a" }, notes: "Let the splash play." },

      { type: "hook", id: "t-recap", title: "Recap", minutes: 1, style: "recap",
        text: "Yesterday God chose a king…",
        ask: "Who was chosen — and what does God look at?",
        hint: "David, the youngest, out with the sheep. God looks at the heart (16:7). ‘Today we go out into the fields with David — and hear the song he wrote there.’" },

      { type: "scripture", id: "t-scr", title: "Psalm 23", minutes: 1, ref: "Psalm 23:1–4, 6", version: "CEV",
        lines: [
          { text: "You, LORD, are my shepherd. I will never be in need.", ref: "Psalm 23:1" },
          { text: "You let me rest in fields of green grass. You lead me to streams of peaceful water, and you refresh my life.", ref: "Psalm 23:2–3" },
          { text: "I may walk through valleys as dark as death, but I won’t be afraid. You are with me, and your shepherd’s rod makes me feel safe.", ref: "Psalm 23:4" },
          { text: "Your kindness and love will always be with me each day of my life, and I will live forever in your house, LORD.", ref: "Psalm 23:6" }
        ],
        emphasis: ["my shepherd", "never be in need", "You are with me", "kindness and love"],
        notes: "Verse 5 is on Thursday. Read slowly, almost like a song." },

      { type: "story", id: "t-story", title: "Songs in the fields", minutes: 3.5, transition: "page", mood: "night",
        beats: [
          { text: "Long days. Lonely nights.", caption: "David watched his father’s sheep in the hills of Bethlehem.",
            art: { key: "t1w08d2-a", label: "Tue · title + story beats 1–3", desc: "David lying on a hillside at night among sleeping sheep, playing a small lyre beneath a sky of stars.", shot: "wide, night", motion: "kenburns-up", chars: ["david"],
              scene: "Young David lying on a grassy hillside at night among his sleeping sheep, playing a small wooden lyre beneath a vast sky full of stars, a tiny campfire glowing nearby." } },
          { text: "A shepherd’s job:", caption: "Find grass. Find water. Lead. Protect. Never leave." },
          { text: "David played his harp and sang to God.", caption: "And one of his songs is Psalm 23." },
          { text: "A lion! A bear!", caption: "David risked his life to rescue his sheep.", shout: true,
            art: { key: "t1w08d2-b", label: "Tue · story beats 4–5 + stretch scene", desc: "David standing between his sheep and a lion crouched in dark shadow at the edge of the firelight, staff in hand; no injury shown.", shot: "tense wide", motion: "kenburns-in", chars: ["david"],
              scene: "David standing between his sheep and a lion crouched in dark shadow at the edge of the firelight, a staff in his hand. The lion is a tense silhouette; no injury shown." } },
          { text: "“The LORD is MY shepherd.”", caption: "David knew: God looked after him the way he looked after his sheep." }
        ],
        narration: "Before he was ever a king, David was a shepherd. Every day he led his father’s sheep out into the hills around Bethlehem. Every night he stayed out with them under the stars.\n\nLet’s think about what a shepherd actually does, because it’s harder than it sounds. Sheep are not very smart. They wander off. They get stuck in bushes. They fall into holes. They don’t know where to find food or water by themselves. And they have no way to defend themselves — no sharp teeth, no claws, not even very fast legs.\n\nSo a good shepherd has to do everything for them. He finds them green grass to eat. He leads them to calm water where they can drink without being swept away. He walks in front, so they know which way to go. He counts them every night, and if even one is missing, he goes looking. And he protects them from wild animals — with his rod, a club for fighting off attackers, and his staff, a long hooked stick for pulling sheep out of trouble.\n\nDavid was a brave shepherd. Later, he told King Saul, ‘When a lion or a bear drags off one of my sheep, I go after it and rescue the sheep. The LORD rescued me from the claws of lions and bears.’ Imagine a teenager chasing a lion to rescue a sheep!\n\nOut there in the fields, David had lots of time to think. He would play his small harp, called a lyre, and make up songs to God. And as he looked at his sheep, he realised something wonderful: ‘This is what God is like! God is my shepherd!’\n\nSo he wrote a song. We still have it in the Bible. It’s called Psalm 23.\n\n‘You, LORD, are my shepherd. I will never be in need.’ — just like David made sure his sheep had everything they needed.\n\n‘You let me rest in fields of green grass. You lead me to streams of peaceful water.’ — God gives us rest, and what we need.\n\n‘I may walk through valleys as dark as death, but I won’t be afraid. You are with me.’ — even in the scariest places, the Shepherd walks with his sheep.\n\n‘Your kindness and love will always be with me.’ — following us every day, like a good sheepdog!\n\nDavid wasn’t just writing a nice poem. He was saying, ‘I trust God the way my sheep trust me.’ And if a teenage shepherd could look after sheep like that — how much more will God look after us?",
        notes: "About 3½ minutes. David’s lion-and-bear speech is from 1 Samuel 17:34–37 (CEV, simplified). The sheepdog image for ‘follow me’ is a playful aside — Psalm 23:6 literally says goodness and love will ‘pursue’ us." },

      { type: "dig", id: "t-dig", title: "Shepherd and God", minutes: 2,
        prompt: "Psalm 23 compares God to a shepherd. Match what a shepherd does to what God does.",
        columns: ["A shepherd…", "God…"],
        items: [
          { left: "Finds green grass and calm water", right: "Gives me what I need — “I will never be in need”" },
          { left: "Walks in front to lead", right: "“Leads me along the right paths”" },
          { left: "Stays with the sheep in dark valleys", right: "“You are with me”" },
          { left: "Fights off lions with a rod", right: "Protects me — “your rod makes me feel safe”" }
        ],
        reveal: "God looks after us the way a good shepherd looks after his sheep.",
        notes: "Reveal row by row." },

      { type: "question", id: "t-q1", title: "What David fought", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "What wild animals did David say he rescued his sheep from?",
        options: ["Wolves and eagles", "Lions and bears", "Snakes and scorpions", "Crocodiles"], answer: 1,
        hint: "Answer: B (1 Samuel 17:34–35). Follow-up: ‘Who did David say really rescued him?’ (The LORD.) Follow-up 2: ‘What’s a shepherd’s rod for?’ If silent: recall the story." },

      { type: "question", id: "t-q2", title: "Dark valleys", minutes: 1.5, level: "think", mode: "pair", seconds: 45,
        text: "Psalm 23 says, “I may walk through valleys as dark as death, but I won’t be afraid. You are with me.” What might a ‘dark valley’ be for a kid today?",
        hint: "Good answers: being sick, a family member in hospital, parents arguing or separating, someone dying, being bullied, moving, feeling lonely. Key: the psalm doesn’t say there are no dark valleys — it says God is WITH us in them. Follow-up: ‘How does knowing the Shepherd is there help?’ Follow-up 2: ‘Who can be a “shepherd” for someone in a dark valley?’ Pastoral: be alert to students sharing real dark valleys; follow up privately." },

      { type: "question", id: "t-q3", title: "Sheep?!", minutes: 1.5, level: "dig", mode: "discuss", seconds: 45, skippable: true,
        text: "Sheep aren’t very clever and can’t protect themselves. Is it insulting to be compared to a sheep? Why might God use that picture?",
        hint: "Let students react! Draw out: we really do need God more than we think; it’s not about being dumb — it’s about needing care, guidance, protection; the picture is about how good the Shepherd is, not how bad the sheep are. Follow-up: ‘What are some ways people “wander off” from God?’ Follow-up 2: ‘What does a sheep need to do?’ (Stay close to the shepherd and listen.) If silent: ‘Would you rather be an independent lion or a well-cared-for sheep?’" },

      { type: "apply", id: "t-apply", title: "Head · Heart · Hands", minutes: 2,
        head: "God is my Shepherd — he provides, leads, protects and stays with me.",
        heart: "LORD, you are MY shepherd.",
        hands: "Tonight before you sleep, say Psalm 23:1 to God: “You, LORD, are my shepherd. I will never be in need.”",
        settings: ["bedtime", "home", "when worried"],
        notes: "Encourage students to say it tonight — it’s this week’s challenge in miniature." },

      { type: "scene", id: "t-scene", title: "You are with me", minutes: 1, optional: true,
        art: { key: "t1w08d2-b" },
        boxes: [
          { text: "“I may walk through valleys as dark as death…”", pos: "tl", style: "caption" },
          { text: "“…but I won’t be afraid. You are with me.”", pos: "br", style: "caption" }
        ],
        notes: "Stretch: how would a sheep feel seeing the shepherd standing between it and the lion?" },

      { type: "verse", id: "t-verse", title: "Build the verse", minutes: 1, activity: "build",
        notes: "Build Psalm 23:1." },

      { type: "prayer", id: "t-pray", title: "Praying Psalm 23", minutes: 3, mood: "calm", style: "psalm",
        tip: "Praying a psalm: I say a line, you echo it back — but say it TO God. You’re praying David’s song!",
        opening: "Close your eyes if you like. We’re going to pray Psalm 23 together. Echo after me.",
        phases: [
          { name: "Wow", lead: "Echo after me.",
            prompts: ["“You, LORD, are my shepherd.”", "“I will never be in need.”"],
            starter: "LORD, you are…", seconds: 30, aloud: "You, LORD, are my shepherd. I will never be in need." },
          { name: "Sorry", lead: "Sheep wander off. Silently, tell God where you’ve wandered.",
            prompts: ["Sorry for wandering away from you.", "Sorry for not listening to your voice."],
            starter: "God, I’m sorry for…", seconds: 30, aloud: "LORD, I’m sorry for wandering away from you." },
          { name: "Thanks", lead: "Echo after me.",
            prompts: ["“You let me rest in fields of green grass.”", "“You lead me to streams of peaceful water.”"],
            starter: "Thank you, LORD, for…", seconds: 35, aloud: "Thank you, LORD — you let me rest, and you lead me to peaceful water." },
          { name: "Please", lead: "Echo — then silently pray for someone in a dark valley.",
            prompts: ["“You are with me.”", "Please be with (name) in their dark valley."],
            starter: "Please, LORD, be with…", seconds: 45, aloud: "LORD, be with everyone walking through a dark valley today." }
        ],
        closing: "“Your kindness and love will always be with me each day of my life.” Everyone: Amen.",
        notes: "Pause for the echo after each line." }
    ] },

  /* ======================= WEDNESDAY ======================= */
  { label: "Wednesday", theme: "David and the Giant", roleplay: true, mood: "storm",
    learningIntentions: [
      "We are learning how David faced Goliath trusting in God.",
      "We are learning where David’s courage came from.",
      "I can explain what David meant by ‘the LORD will help me’."
    ],
    assessment: "Listen for students explaining that David trusted God (not his own strength), because God had helped him before.",
    resources: ["Screen", "Optional: five ‘stones’ (scrunched paper) and a ‘sling’ (scarf)"],
    whereToNext: "Tomorrow: the greatest Shepherd-King of all.",
    slides: [
      { type: "title", id: "w-title", title: "David and the Giant", minutes: 0.5, kicker: "Term 1 · Week 8", sub: "The Shepherd-King",
        art: { key: "t1w08d3-a" }, notes: "The storm mood adds drama." },

      { type: "hook", id: "w-hook", title: "Giants", minutes: 1,
        text: "Everyone has ‘giants’ — things that seem too big to face.",
        ask: "What are some ‘giants’ kids face?",
        hint: "Take answers: a test, a bully, a speech, a sports final, a scary situation at home, fear. Land it: ‘Today a whole army hides from a giant — and a shepherd boy walks out to face him. What does he know that they don’t?’" },

      { type: "scripture", id: "w-scr", title: "1 Samuel 17:32, 37, 45, 47", minutes: 1, ref: "1 Samuel 17:32–47", version: "CEV",
        lines: [
          { text: "“Your Majesty,” he said, “this Philistine shouldn’t turn us into cowards. I’ll go out and fight him myself!”", ref: "1 Samuel 17:32" },
          { text: "The LORD has rescued me from the claws of lions and bears, and he will keep me safe from the hands of this Philistine.", ref: "1 Samuel 17:37" },
          { text: "You’ve come out to fight me with a sword and a spear and a dagger. But I’ve come out to fight you in the name of the LORD All-Powerful.", ref: "1 Samuel 17:45" },
          { text: "Everybody here will see that the LORD doesn’t need swords or spears to save his people.", ref: "1 Samuel 17:47" }
        ],
        emphasis: ["I’ll go out and fight him", "The LORD has rescued me", "in the name of the LORD", "doesn’t need swords"],
        notes: "Verses selected. We leave out the battle threats in 17:46." },

      { type: "story", id: "w-story", title: "One stone", minutes: 3, transition: "page", mood: "storm",
        beats: [
          { text: "A giant called Goliath.", caption: "Nearly three metres tall, bronze armour — and a booming voice.",
            art: { key: "t1w08d3-a", label: "Wed · title + story beats 1–2", desc: "A giant warrior in armour towering over a valley as a huge black silhouette against the sky, a whole army small and trembling on the ridge behind.", shot: "low-angle, towering", motion: "kenburns-up",
              scene: "A giant warrior in armour towers over a valley, drawn as a huge black silhouette against the sky, a whole army of soldiers small and trembling on the ridge behind him." } },
          { text: "For 40 days, nobody moved.", caption: "The whole army of Israel was terrified." },
          { text: "“I’ll go out and fight him myself!”", caption: "David — the shepherd boy bringing lunch to his brothers.", shout: true },
          { text: "Five smooth stones.", caption: "No armour. Just a sling — and the name of the LORD.",
            art: { key: "t1w08d3-b", label: "Wed · story beat 4 + role-play card", desc: "Close-up of David’s hand picking five smooth stones from a clear stream, ripples and light on the water.", shot: "close-up", motion: "kenburns-in", chars: ["david"],
              scene: "A close-up of young David's hand picking five smooth round stones from a clear shallow stream, ripples and sparkling light on the water, his leather sling hanging at his belt." } },
          { text: "One stone. One giant down.", caption: "“The LORD doesn’t need swords or spears to save his people.”",
            art: { key: "t1w08d4-a", label: "Wed · story beat 5 + Thu stretch scene", desc: "David whirling his sling above his head, speed lines circling, a tiny figure facing the colossal giant across the valley.", shot: "dynamic", motion: "kenburns-in", chars: ["david"],
              scene: "David whirling his sling above his head, speed lines circling, a tiny figure facing the colossal giant across the valley." } }
        ],
        narration: "Israel’s army was camped on one hill. On the other hill was the army of the Philistines, their enemies. And between them was a valley.\n\nEvery morning and every evening, a giant walked out into that valley. His name was Goliath. He was nearly three metres tall — taller than the ceiling of this classroom. He wore a bronze helmet and armour so heavy that you and I couldn’t lift it. His spear was as thick as a fence post. And he shouted across the valley: ‘Send someone to fight me! If he wins, we’ll be your slaves. If I win, you’ll be ours!’\n\nAnd King Saul and all the soldiers of Israel? They shook with fear. For forty days, nobody went out.\n\nThen one day, David arrived. He wasn’t a soldier — he was too young. His dad had sent him with bread and cheese for his three oldest brothers in the army. And just as David got there, Goliath came out and roared his challenge again.\n\nDavid couldn’t believe it. ‘Who does this man think he is, insulting the army of the living God?’ His big brother Eliab got cross: ‘Why are you here? Go back to your sheep!’ But David wouldn’t go.\n\nHe went to King Saul and said, ‘Your Majesty, I’ll go out and fight him myself!’\n\nSaul said, ‘You’re only a boy. He’s been a soldier all his life.’\n\nBut David said, ‘I’ve looked after my father’s sheep. When a lion or a bear came, I went after it. The LORD rescued me from lions and bears — and he’ll keep me safe from this Philistine too.’\n\nSo Saul gave David his own armour. But it was far too big and heavy — David could hardly walk! So he took it off. Instead he picked up his shepherd’s stick, went down to a stream, and chose five smooth stones. He put them in his bag and took out his sling.\n\nGoliath laughed. ‘Am I a dog, that you come at me with a stick?’\n\nDavid answered, ‘You’ve come to fight me with a sword and a spear. But I’ve come in the name of the LORD All-Powerful. Everyone will see that the LORD doesn’t need swords or spears to save his people!’\n\nThen David ran toward the giant. He put a stone in his sling, swung it round — and let it fly. The stone hit Goliath right in the forehead, and the giant crashed face-down to the ground.\n\nThe whole valley went silent. Then Israel’s army cheered and charged, and the Philistines ran away. One shepherd boy, one stone — and a very big God.",
        notes: "About 3 minutes. Goliath’s height: about 2.9 m (17:4). The ending is kept at Goliath falling; the rest of 17:50–51 is omitted for this age group." },

      { type: "question", id: "w-q1", title: "What David took", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "What did David take to fight Goliath?",
        options: ["King Saul’s armour and sword", "A spear and a shield", "His shepherd’s stick, five stones and a sling", "Nothing at all"], answer: 2,
        hint: "Answer: C (17:40). Follow-up: ‘Why didn’t he use Saul’s armour?’ (Too big — not what he was used to.) Follow-up 2: ‘In whose name did David fight?’ (The LORD All-Powerful.) If silent: recall the story." },

      { type: "roleplay", id: "w-rp", title: "David and the Giant", minutes: 5, ref: "1 Samuel 17",
        art: { key: "t1w08d3-b" },
        imagined: "David’s and Saul’s key words are from 1 Samuel 17 (CEV, simplified). Goliath’s threat is shortened and the fight ends with the giant falling. The soldiers’ lines are imagined.",
        actions: ["Everyone (as soldiers): shake with fear", "Everyone: ‘THUD!’ — stamp feet when the giant falls", "Everyone: cheer!"],
        props: ["Optional: a scarf as a sling, scrunched-paper ‘stones’"],
        characters: [
          { name: "Narrator", color: "#F2C77B", desc: "Tells the story" },
          { name: "Goliath", color: "#90A4AE", desc: "The giant — a BOOMING voice (stand on a chair, with care!)" },
          { name: "Saul", color: "#FFD36B", desc: "The king — scared and doubtful" },
          { name: "Eliab", color: "#7BA7D9", desc: "David’s big brother — annoyed" },
          { name: "David", color: "#FFB547", desc: "Shepherd boy — calm and confident in God" },
          { name: "Everyone", color: "#FFFFFF", desc: "The trembling army of Israel" }
        ],
        lines: [
          { character: "Narrator", text: "The Valley of Elah. Two armies on two hills.", direction: true },
          { character: "Goliath", text: "Send someone to fight me! Anyone? Are you all cowards?", action: "BOOMING voice" },
          { character: "Everyone", text: "Eeek!", action: "shake with fear, hide behind hands" },
          { character: "Saul", text: "Forty days… and no one will fight him. Not even me." },
          { character: "David", text: "Hi! Dad sent bread and cheese. What’s happening?", action: "arrive with a ‘basket’" },
          { character: "Goliath", text: "Send me a man! I’ll fight him!" },
          { character: "David", text: "Who does he think he is? He’s insulting the army of the living God!" },
          { character: "Eliab", text: "David! Why are you here? Go back to your sheep!", action: "cross" },
          { character: "David", text: "Your Majesty, this Philistine shouldn’t turn us into cowards. I’ll go out and fight him myself!" },
          { character: "Saul", text: "You don’t have a chance against him. You’re only a boy." },
          { character: "David", text: "The LORD has rescued me from the claws of lions and bears, and he will keep me safe from this Philistine." },
          { character: "Saul", text: "Then… go. And may the LORD be with you." },
          { pause: "Freeze! A boy against a giant. Where does David’s confidence come from?", seconds: 20 },
          { character: "Narrator", text: "David picked up five smooth rocks and put them in his bag. Then, with his sling in his hand, he went straight toward Goliath." },
          { character: "Goliath", text: "A stick? Do you think I’m a dog?", action: "laugh" },
          { character: "David", text: "You’ve come to fight me with a sword and a spear and a dagger." },
          { character: "David", text: "But I’ve come out to fight you in the name of the LORD All-Powerful!" },
          { character: "David", text: "Everybody here will see that the LORD doesn’t need swords or spears to save his people!" },
          { character: "Narrator", text: "David ran toward the giant. He put a stone in his sling, swung it round…", action: "whirl the ‘sling’" },
          { character: "Everyone", text: "Whoosh… whoosh… whoosh…", action: "faster and faster" },
          { character: "Narrator", text: "The stone hit Goliath on the forehead, and he fell face-down on the ground." },
          { character: "Everyone", text: "THUD!", action: "stamp feet together" },
          { character: "Everyone", text: "Hooray! The LORD saved us!", action: "cheer" }
        ],
        debrief: [
          { level: "think", text: "The army saw a giant too big to beat. What did David see?", hint: "A giant insulting the living God — and a God bigger than any giant." },
          { level: "dig", text: "Why do you think David remembered the lions and bears before facing Goliath?", hint: "Remembering God’s past help builds trust for the next challenge." }
        ],
        notes: "Goliath can stand on a sturdy chair (supervised) for height — great fun. Keep the fall comic (a stamp), not violent." },

      { type: "question", id: "w-q2", title: "Where courage comes from", minutes: 1.5, level: "think", mode: "pair", seconds: 45,
        text: "David wasn’t bigger, stronger or better armed. So where did his courage come from?",
        hint: "Good answers: trusting God; remembering how God helped him before (lions and bears); caring about God’s name more than his own safety; knowing God is bigger than any giant. Follow-up: ‘Is being brave the same as not being scared?’ (No — it’s trusting God while scared.) Follow-up 2: ‘What “lions and bears” has God helped you with before?’ If silent: list David’s reasons from 17:37 and 17:45." },

      { type: "question", id: "w-q3", title: "Is this about me?", minutes: 1, level: "dig", mode: "discuss", seconds: 40, skippable: true,
        text: "Some people say, “Be like David and you’ll beat your giants!” Others say, “This story is mostly about how great God is.” Which do you think?",
        hint: "Both have truth! The main hero is God — ‘the LORD doesn’t need swords’ — David says so himself. We learn from David’s trust, but our confidence isn’t in being like David; it’s in David’s God. Christians also see Jesus as the greater David who defeated the biggest giants — sin and death. Follow-up: ‘Who got the glory at the end?’ Follow-up 2: ‘What would it look like to trust David’s God with your giant?’ If silent: ask who the army cheered for." },

      { type: "apply", id: "w-apply", title: "Head · Heart · Hands", minutes: 1,
        head: "God is bigger than any giant I face.",
        heart: "God, I trust you with my giant.",
        hands: "Name your ‘giant’ to God today. Then remember one ‘lion or bear’ he’s helped you with before.",
        settings: ["school", "home", "sport"],
        notes: "Giants can be private — no sharing needed." },

      { type: "scene", id: "w-scene", title: "In the name of the LORD", minutes: 0.5, optional: true,
        art: { key: "t1w08d3-a" },
        boxes: [
          { text: "“I’ve come out to fight you in the name of the LORD All-Powerful.”", pos: "tl", style: "speech" },
          { text: "One boy. One stone. One BIG God.", pos: "br", style: "shout" }
        ] },

      { type: "verse", id: "w-verse", title: "Verse with actions", minutes: 1, optional: true, activity: "actions",
        notes: "Actions for Psalm 23:1." },

      { type: "prayer", id: "w-pray", title: "A brave prayer — standing", minutes: 3, mood: "calm", style: "stand",
        tip: "Stand tall like David in the valley. Your body can say, ‘I’m not facing this alone — God is with me.’",
        opening: "Let’s stand up tall. Imagine your ‘giant’ in front of you — and God standing with you.",
        phases: [
          { name: "Wow", lead: "God is the LORD All-Powerful.",
            prompts: ["God, you are bigger than any giant.", "God, you don’t need swords to save."],
            starter: "Wow, God, you are…", seconds: 30, aloud: "Wow, God — you are the LORD All-Powerful!" },
          { name: "Sorry", lead: "Silently: times you’ve been too scared to trust God?",
            prompts: ["Sorry for trusting my own strength.", "Sorry for hiding like the army."],
            starter: "God, I’m sorry for…", seconds: 25, aloud: "God, I’m sorry for forgetting how big you are." },
          { name: "Thanks", lead: "Thank God for a ‘lion or bear’ he’s helped you with.",
            prompts: ["Thank you for helping me when…", "Thank you that you’ve rescued me before."],
            starter: "Thank you, God, for…", seconds: 35, aloud: "Thank you, God, for every time you’ve helped us before." },
          { name: "Please", lead: "Name your giant to God.",
            prompts: ["Please help me face…", "Please be with me tomorrow when…"],
            starter: "Please, God, help…", seconds: 45, aloud: "Please, God, help us face our giants — trusting you." }
        ],
        closing: "Psalm 23:1 together: “You, LORD, are my shepherd. I will never be in need.” Amen! Sit down.",
        notes: "Standing is optional." }
    ] },

  /* ======================= THURSDAY ======================= */
  { label: "Thursday", theme: "The Good Shepherd", roleplay: false, mood: "dawn",
    learningIntentions: [
      "We are learning how David points forward to Jesus, the Good Shepherd.",
      "We are learning what Jesus meant when he said he gives his life for his sheep.",
      "I can explain how Jesus is the greater Shepherd-King."
    ],
    assessment: "Students can compare David and Jesus as shepherds, explain John 10:11, and recite Psalm 23:1.",
    resources: ["Screen", "Take-home challenge cards"],
    whereToNext: "Next Monday: check in on praying Psalm 23. Week 9 — Promises Spoken Long Ago.",
    slides: [
      { type: "title", id: "th-title", title: "The Good Shepherd", minutes: 0.5, kicker: "Term 1 · Week 8", sub: "The Shepherd-King",
        art: { key: "t1w08d4-b" }, notes: "Let the splash play." },

      { type: "review", id: "th-review", title: "True or false?", minutes: 2.5, format: "truefalse",
        prompt: "True or false? Stand for TRUE, sit for FALSE!",
        items: [
          { text: "God chose Eliab because he was tall and handsome.", answer: false, why: "God looks at the heart — he chose David." },
          { text: "David was out looking after the sheep when Samuel came.", answer: true, why: "He wasn’t even invited!" },
          { text: "Psalm 23 says, “The LORD is my shepherd.”", answer: true, why: "CEV: “You, LORD, are my shepherd.”" },
          { text: "David wore King Saul’s armour to fight Goliath.", answer: false, why: "It was too big — he took a stick, a sling and five stones." },
          { text: "David said the LORD needs swords and spears to save.", answer: false, why: "“The LORD doesn’t need swords or spears to save his people.”" }
        ],
        hint: "Stand/sit, then reveal. Ask a student to explain each.",
        notes: "Click to show, click to reveal." },

      { type: "scripture", id: "th-scr", title: "Psalm 23:5–6 · John 10:11, 14", minutes: 1, ref: "Psalm 23:5–6 · John 10:11, 14", version: "CEV",
        lines: [
          { text: "You treat me to a feast, while my enemies watch. You honour me as your guest, and you fill my cup until it overflows.", ref: "Psalm 23:5" },
          { text: "Your kindness and love will always be with me each day of my life, and I will live forever in your house, LORD.", ref: "Psalm 23:6" },
          { text: "I am the good shepherd, and the good shepherd gives up his life for his sheep.", ref: "John 10:11" },
          { text: "I am the good shepherd. I know my sheep, and they know me.", ref: "John 10:14" }
        ],
        emphasis: ["fill my cup", "live forever", "I am the good shepherd", "gives up his life"],
        notes: "Jesus is speaking in John 10. NZ spelling ‘honour’ on screen." },

      { type: "story", id: "th-story", title: "A greater Shepherd", minutes: 2, transition: "page",
        beats: [
          { text: "David became a great king.", caption: "A shepherd-king who looked after God’s people." },
          { text: "But David wasn’t perfect.", caption: "He made big mistakes. God’s people needed an even better King." },
          { text: "“I am the good shepherd.”", caption: "1000 years later, Jesus — born in David’s town, from David’s family.", shout: true,
            art: { key: "t1w08d4-b", label: "Thu · title + story beats 3–4 + stretch scene", desc: "A shepherd leading his sheep beside still water through green pastures at golden hour, hills glowing in soft light.", shot: "wide, serene", motion: "kenburns-right",
              scene: "A shepherd with a long staff leading his flock of sheep beside still, peaceful water through green pastures at golden hour, gentle hills glowing in soft light behind." } },
          { text: "He gave up his life for his sheep.", caption: "David risked his life for sheep. Jesus gave his life for us." }
        ],
        narration: "David grew up and became king of Israel. He was a shepherd-king — he looked after God’s people the way he had looked after his sheep. He was brave, he loved God, and he wrote many of the songs in the book of Psalms.\n\nBut David wasn’t perfect. When he was older, he made some terrible choices and hurt people. God’s people needed an even better shepherd-king — one who would never fail them.\n\nAnd God promised one would come from David’s family. About a thousand years later, a baby was born in David’s town of Bethlehem, from David’s family line. His name was Jesus. And one day Jesus said, ‘I am the good shepherd.’\n\nThen he said something David never could: ‘The good shepherd gives up his life for his sheep.’ David risked his life fighting lions for his sheep. Jesus actually gave his life on the cross — to rescue us from sin, the biggest giant of all. And then he rose again!\n\nSo when we pray Psalm 23, ‘The LORD is my shepherd,’ we can think of Jesus. He knows us by name. He leads us. He stays with us in every dark valley. And one day, we will live forever in his house.",
        notes: "About 2 minutes. David’s failures (2 Samuel 11) are mentioned only generally. Jesus as ‘Son of David’ — Matthew 1:1." },

      { type: "question", id: "th-q1", title: "What Jesus said", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "In John 10, what does Jesus say the good shepherd does?",
        options: ["Sells his sheep", "Gives up his life for his sheep", "Sleeps all day", "Lets the wolves in"], answer: 1,
        hint: "Answer: B (John 10:11). Follow-up: ‘How did Jesus do that?’ (He died on the cross.) Follow-up 2: ‘What does Jesus say about knowing his sheep?’ (‘I know my sheep, and they know me.’) If silent: re-read the third scripture line." },

      { type: "question", id: "th-q2", title: "David and Jesus", minutes: 1.5, level: "think", mode: "pair", seconds: 45,
        text: "How is Jesus like David? How is Jesus even greater than David?",
        hint: "Like: both shepherds; both from Bethlehem; both kings; both rescuers; both brave. Greater: Jesus never sinned; David risked his life — Jesus gave his; David beat a giant — Jesus beat sin and death; David’s kingdom ended — Jesus’ never ends. Follow-up: ‘Which “giant” did Jesus defeat?’ Follow-up 2: ‘What does it mean that Jesus knows you by name?’ If silent: make a two-column list together." },

      { type: "recap", id: "th-recap", title: "This week’s Big Idea", minutes: 1.5,
        points: [
          "God chose David the shepherd — because God looks at the heart.",
          "Psalm 23: the LORD is my Shepherd — he provides, leads, protects and stays.",
          "David trusted God against a giant — and Jesus is the greater Shepherd-King."
        ],
        notes: "Reveal the points, then the Big Idea." },

      { type: "question", id: "th-q3", title: "Know his voice", minutes: 1.5, level: "dig", mode: "discuss", seconds: 45, skippable: true,
        text: "Jesus said his sheep know him and listen to his voice (John 10:4, 14). How can a kid today ‘hear’ Jesus’ voice?",
        hint: "Ideas: reading the Bible; prayer; quiet time; listening to wise Christians (parents, teachers, church); our conscience and the Holy Spirit; noticing God’s care. Not usually an audible voice! Follow-up: ‘How do sheep learn their shepherd’s voice?’ (Spending lots of time with him.) Follow-up 2: ‘What could help you spend time with Jesus this week?’ If silent: ‘How do you recognise your mum’s voice on the phone?’" },

      { type: "challenge", id: "th-chal", title: "This Week’s Challenge", minutes: 2,
        text: "Shepherd at night. Every night this week before you sleep, pray Psalm 23:1 — then tell the Good Shepherd one thing you need him to look after.",
        why: "“I am the good shepherd. I know my sheep, and they know me.” — John 10:14",
        head: "Jesus is my Good Shepherd.", heart: "You, LORD, are my shepherd.", hands: "Pray Psalm 23:1 every night.",
        takeHome: true,
        notes: "Take-home card includes Psalm 23:1." },

      { type: "verse", id: "th-verse", title: "Memory verse: fade-out", minutes: 1.5, activity: "fade",
        notes: "Fade out Psalm 23:1. Bonus: can anyone say Psalm 23:2 as well?" },

      { type: "scene", id: "th-scene", title: "Whoosh!", minutes: 1, optional: true,
        art: { key: "t1w08d4-a" },
        boxes: [
          { text: "David beat a giant…", pos: "tl", style: "caption" },
          { text: "…Jesus beat the biggest giants of all: sin and death.", pos: "br", style: "caption" }
        ] },

      { type: "prayer", id: "th-pray", title: "Psalm 23 — written", minutes: 3, mood: "calm", style: "write",
        tip: "Make Psalm 23 your own: write it with your own words. ‘You, LORD, are my shepherd. You give me…’",
        opening: "On paper, write: ‘You, LORD, are my shepherd.’ Then we’ll add our own lines.",
        phases: [
          { name: "Wow", lead: "Write: ‘You, LORD, are my shepherd.’ Add one thing he’s like.",
            prompts: ["You, LORD, are my shepherd. You are kind.", "You know my name."],
            starter: "You, LORD, are…", seconds: 35, aloud: "You, LORD, are my shepherd. You know my name!" },
          { name: "Sorry", lead: "Write: ‘Sorry for when I wander…’",
            prompts: ["Sorry for wandering away.", "Sorry for not listening to your voice."],
            starter: "Sorry for…", seconds: 30, aloud: "LORD, I’m sorry for when I wander." },
          { name: "Thanks", lead: "Write your own ‘green grass and peaceful water’ — what has God given you?",
            prompts: ["You give me my family.", "You give me rest and food."],
            starter: "You give me…", seconds: 40, aloud: "Thank you, Good Shepherd, for everything you give us." },
          { name: "Please", lead: "Write one ‘dark valley’ you’d like him to walk through with you.",
            prompts: ["Please walk with me through…", "Please stay with (name)."],
            starter: "Please be with me when…", seconds: 40, aloud: "Good Shepherd, please walk with us through every dark valley." }
        ],
        closing: "Read your psalm quietly to God. Take it home and pray it every night. Amen!",
        notes: "Students keep their personal Psalm 23." }
    ] }
  ]
};
