/* Morninglight 2027 — Term 4 Week 6: Ordinary Heroes Who Served (Acts 16:1–3; 18:1–4, 24–28; 4:36–37; 2 Timothy 1:5). Scripture: CEV. */
window.DEVOTIONS = window.DEVOTIONS || {};
window.DEVOTIONS["Term 4"] = window.DEVOTIONS["Term 4"] || {};
window.DEVOTIONS["Term 4"]["Week 6"] = {
  lessonTitle: "Ordinary Heroes Who Served",
  passage: "Acts 16:1–3; 18:1–4, 24–28; 4:36–37; 2 Timothy 1:5",
  bigIdea: "God uses ordinary people (tentmakers, a shy young man, a grandmother, an encourager) to do his work, and whatever we do, we can do it willingly for the Lord himself.",
  godIs: "Uses Ordinary People",
  memoryVerse: { ref: "Colossians 3:23", text: "Do your work willingly, as though you were serving the Lord himself, and not just your earthly master.", version: "CEV",
    chunks: ["Do your work willingly,", "as though you were", "serving the Lord himself,", "and not just", "your earthly", "master."],
    actions: ["Roll up your sleeves — get to work", "Stitch the air with a pretend needle", "Point up — the Lord himself", "Shake your head and wave a hand — not just", "Tap the floor — down here on earth", "Stand tall like a boss — master"],
    notes: "“Master” here means whoever you work for: a boss, an owner, or in our world a teacher, coach or parent. Paul wrote these words to people at work. The big idea: whoever else is watching, our real audience is the Lord." },
  prayerFocus: { skill: "Praying for team-mates", tip: "This week we practise praying for the people we work, learn and play beside. Priscilla and Aquila prayed and worked beside Paul every day. Pick one team-mate (at school, sport, church or home) and pray for them by name: ask God to bless them, help them, and help you work well together." },
  mood: "dawn",
  cover: "t4w06-cover",
  characters: ["paul", "priscilla", "aquila", "timothy", "apollos", "barnabas"],
  coverArt: { key: "t4w06-cover", label: "Week cover", desc: "Priscilla, Aquila and Paul stitching a big tent together in a busy Corinth workshop.", shot: "wide, interior, sunbeams",
    setting: "First-century Greek-Roman port city of Corinth: busy market colonnades, workshops with awnings, stone-paved streets, the rocky hill of the Acrocorinth behind, merchants and sailors in tunics and cloaks.",
    scene: "In a busy open-fronted workshop in Corinth, Priscilla, Aquila and Paul sit on low stools stitching a huge sheet of goat-hair tent cloth spread across their knees. Sunbeams slant through the awning, and the market street bustles behind them.", chars: ["priscilla", "aquila", "paul"] },
  comicArt: { key: "t4w06-comic", label: "Comic page (week opener)", format: "portrait", desc: "Six-panel comic page of ordinary people serving Jesus.",
    panels: "Six panels. Panel 1 (wide): Paul, Priscilla and Aquila stitching tents in a Corinth workshop. Panel 2 (small): a needle pulling thread through thick cloth. Panel 3 (tall): young Timothy reading a scroll with his grandmother and mother. Panel 4 (wide): Apollos preaching while Priscilla and Aquila listen. Panel 5 (small): the three around a kitchen table with a scroll. Panel 6 (wide): Barnabas laying a bag of coins at the apostles' feet.", chars: ["paul", "priscilla", "aquila", "timothy", "apollos", "barnabas"] },

  days: [

  /* ======================= MONDAY ======================= */
  { label: "Monday", theme: "Tentmakers in Corinth", roleplay: true, mood: "dawn",
    learningIntentions: [
      "We are learning how Priscilla and Aquila welcomed Paul into their home and their workshop in Corinth.",
      "We are learning how ordinary work and sharing Jesus went together for these three tentmakers.",
      "I can explain how Priscilla and Aquila served God without being famous (Acts 18:1–4)."
    ],
    assessment: "Listen for students recalling that Paul met Priscilla and Aquila in Corinth, that all three were tentmakers, that Priscilla and Aquila welcomed Paul to stay and work with them, and that they talked about Jesus while they worked.",
    resources: ["Screen", "Optional: a map showing Athens, Corinth and Rome", "Optional: a needle and thick thread with a piece of felt or canvas to show what stitching tent cloth was like"],
    whereToNext: "Tomorrow: a young man named Timothy, and the grandmother and mother who taught him about God long before he met Paul.",
    slides: [
      { type: "title", id: "m-title", title: "Tentmakers in Corinth", minutes: 0.5, kicker: "Term 4 · Week 6", sub: "Ordinary Heroes Who Served",
        art: { key: "t4w06-cover" }, notes: "Let the splash play. Ask: ‘Who do you think the heroes of this week might be?’ Collect a few guesses (kings? preachers? soldiers?) and don’t answer yet. The surprise is that the heroes are tentmakers." },

      { type: "hook", id: "m-hook", title: "The people behind the scenes", minutes: 1.5,
        checkin: { text: "Welcome back. Last week we heard Midnight Songs in Prison: Paul and Silas praised God in the dark, and the jailer’s family found Jesus. Your challenge: when something is hard, thank God for three things before you do anything else. How did it go?" },
        text: "Think about the people who make things work without being noticed: whoever set up this room, cooked your dinner, washed the sports gear, or helped you with your homework.",
        ask: "Who is someone who helps you a lot but hardly ever gets noticed?",
        hint: "Check-in first: ask two or three students what they thanked God for when something was hard, and whether it changed how they felt. Then the hook: caretaker, cook, bus driver, parent, older sibling. Land it: ‘This week we meet people the Bible calls helpers, tentmakers, grandmothers and encouragers, and God used every one of them.’" },

      { type: "scripture", id: "m-scr", title: "Acts 18:3–4", minutes: 1, ref: "Acts 18:3–4", version: "CEV",
        lines: [
          { text: "Paul was also a tent maker, so he stayed with them, and they worked together.", ref: "Acts 18:3" },
          { text: "Every Sabbath, Paul went to the synagogue.", ref: "Acts 18:4" }
        ],
        emphasis: ["tent maker", "stayed with them", "worked together", "synagogue"],
        notes: "Sabbath = the Jewish day of rest (Saturday). A synagogue is a Jewish meeting place for prayer and reading Scripture. In verse 4 Paul speaks there, trying to convince both Jews and Greeks about Jesus. The same page tells us Aquila and Priscilla (also called Prisca) had recently come from Rome." },

      { type: "story", id: "m-story", title: "Three tentmakers", minutes: 3, transition: "page", mood: "dawn",
        beats: [
          { text: "Paul arrives in Corinth.", caption: "A busy port city, and Paul doesn’t know anyone.",
            art: { key: "t4w06d1-a", label: "Mon · story — Paul meets the tentmakers", desc: "Paul arriving at Priscilla and Aquila's workshop, Aquila reaching out to shake his hand.", shot: "medium wide, street", motion: "kenburns-in", chars: ["paul", "aquila", "priscilla"],
              setting: "First-century Greek-Roman port city of Corinth: busy market colonnades, workshops with awnings, stone-paved streets, the rocky hill of the Acrocorinth behind, merchants and sailors in tunics and cloaks.",
              scene: "Dusty from travel, Paul stops at a tentmaker's stall in a crowded Corinth street. Aquila steps out from among hanging tent cloths to clasp his hand in welcome, and Priscilla looks up from her stitching with a bright smile." } },
          { text: "God sends him to a workshop.", caption: "Not a palace. Not a temple. A tentmaker’s stall." },
          { text: "Priscilla and Aquila say, “Stay with us.”", caption: "Two refugees from Rome open their door to a stranger." },
          { text: "They stitch. They talk about Jesus.", caption: "Every tent was a chance to share the good news.",
            art: { key: "t4w06d1-b", label: "Mon · role-play card — working and sharing", desc: "The three working on tents while customers listen to Paul talk about Jesus.", shot: "medium, three-quarter", motion: "kenburns-left", chars: ["paul", "aquila", "priscilla"],
              setting: "First-century Greek-Roman port city of Corinth: busy market colonnades, workshops with awnings, stone-paved streets, the rocky hill of the Acrocorinth behind, merchants and sailors in tunics and cloaks.",
              scene: "Paul pulls a thick needle through tough tent cloth while talking to two curious customers leaning on the workbench. Aquila hammers a leather strap and Priscilla measures cord, both smiling as they listen. Tools and coils of rope hang everywhere." } },
          { text: "Ordinary work. Extraordinary God.", caption: "God used a workshop and an open door." }
        ],
        narration: "Picture the busy port city of Corinth in Greece, about two thousand years ago. Ships unload at the harbour, merchants shout in the market, and the streets are crowded with sailors, traders and workers. Into this city walks a tired traveller with dusty sandals. His name is Paul.\n\nPaul has been on the road for a long time, telling people about Jesus. Corinth is a hard place to start. He knows nobody, he has very little money, and some people in this city don’t want to hear about Jesus at all. So where does God send him first?\n\nNot to a palace. Not to a temple. To a workshop.\n\nIn the market there are stalls that make tents. Tents in those days were stitched from tough goat-hair cloth, sewn by hand with thick needles, and the people who did it had strong, sore fingers. Paul had learned the trade when he was young. So he looks around, and he finds two other tentmakers: a husband and wife named Aquila and Priscilla.\n\nThey are Jewish believers in Jesus who have just arrived from Rome. The emperor, Claudius, had ordered Jewish people to leave the city, so they had to pack up their whole lives and start again in a strange place. Maybe that is why they notice a stranger who needs a friend. They don’t just give Paul a job. They invite him to stay with them and work beside them.\n\nSo every day, Paul, Priscilla and Aquila sit side by side, stitching tent cloth. Pull the thread through. Pull it tight. Next stitch. It is ordinary work. Nobody would write a poem about it. But while their hands work, their mouths talk about Jesus: who he is, what he did, and why he is the best news in the world. Customers who come to buy a tent stay to listen. And every Sabbath, Paul goes to the meeting place and speaks to anyone who will hear.\n\nHere is something to notice. Priscilla and Aquila are not apostles. They are not famous. They never stand on a stage. They are tentmakers who open their door, share their table and share their faith. And God used their workshop and their open door to support Paul’s work in Corinth, where many people came to believe in Jesus.\n\nThat is how God often works. He uses ordinary people doing ordinary things for Jesus. And sometimes the work that looks the smallest is the work he is using the most.",
        notes: "About 3 minutes. Source: Acts 18:1–4. Documented: Paul met Aquila (and Priscilla), who had come from Italy because Claudius had ordered the Jews to leave Rome; they were tentmakers like Paul; he stayed and worked with them; he spoke in the synagogue each Sabbath. The details of customers listening, thick needles and sore fingers are imagined colour based on how tentmaking worked. Be sensitive if any students have moved countries or been forced to move: Priscilla and Aquila started again in a new place and God was with them." },

      { type: "question", id: "m-q1", title: "What was their job?", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "What job did Paul, Priscilla and Aquila all do?",
        options: ["Fishing", "Making tents", "Building ships", "Baking bread"], answer: 1,
        hint: "Answer: B, making tents (Acts 18:3). Follow-up: ‘Where did Paul meet Priscilla and Aquila?’ (In Corinth, in a workshop in the market.) Follow-up 2: ‘What did they offer Paul?’ (A place to stay and work.) If silent: re-read the first scripture line together." },

      { type: "question", id: "m-q2", title: "Work and Jesus together", minutes: 1.5, level: "think", mode: "pair", seconds: 45, skippable: true,
        text: "Paul stitched tents all day and also talked about Jesus. Why might ordinary work be a good place to share about Jesus?",
        hint: "Good answers: people meet us there; they see how we treat others; we have time to chat while working; ordinary life is where faith shows. Follow-up: ‘Where do you spend ordinary time with other people?’ (class, sport, home, the bus.) Follow-up 2: ‘What could you do there that shows you follow Jesus?’ If silent: ask what a customer might notice about three happy tentmakers." },

      { type: "roleplay", id: "m-rp", title: "The Tentmakers", minutes: 5, ref: "Acts 18:1–4",
        art: { key: "t4w06d1-b" },
        imagined: "Acts 18:1–4 tells us only that Paul met Aquila and Priscilla in Corinth, stayed and worked with them, and spoke in the synagogue each Sabbath. All the conversations here are imagined. The Customer is an invented character. Nothing said by Paul, Priscilla or Aquila is a quote from Scripture.",
        actions: ["Everyone: stitch pretend tent cloth with a big needle", "Everyone: nod and lean in as a customer listens"],
        props: ["Optional: a needle and thread with a scrap of felt", "Optional: a rolled-up cloth for tent cloth"],
        characters: [
          { name: "Narrator", color: "#F2C77B", desc: "Tells the story" },
          { name: "Paul", color: "#7BA7D9", desc: "Tired traveller — then full of energy about Jesus" },
          { name: "Priscilla", color: "#C5A3E0", desc: "Quick-witted and kind — opens her home" },
          { name: "Aquila", color: "#A1887F", desc: "Strong, cheerful tentmaker — a welcoming man" },
          { name: "Customer", color: "#B0BEC5", desc: "A curious shopper who needs a tent (imagined)" },
          { name: "Everyone", color: "#FFFFFF", desc: "Stitching, listening and cheering" }
        ],
        lines: [
          { character: "Narrator", text: "The busy market of Corinth. A dusty traveller named Paul walks up to a tentmaker’s workshop.", direction: true },
          { character: "Aquila", text: "Welcome, friend! You look worn out. I’m Aquila, and this is my wife, Priscilla.", action: "stand and shake hands" },
          { character: "Priscilla", text: "We’ve only just arrived ourselves. Rome sent us away, so we’re starting over here." },
          { character: "Paul", text: "I’m Paul. I’m a tentmaker too! I need a place to stay, and I’d love to work with you.", action: "pick up a needle" },
          { character: "Priscilla", text: "Then you’ll stay with us. There’s a spare bed, a warm meal, and a mountain of tent cloth waiting." },
          { character: "Everyone", text: "Stitch, stitch, stitch! Pull it tight!", action: "stitch the air with a big needle" },
          { character: "Aquila", text: "Pass me the big needle, Paul. This goat-hair cloth is tough on the fingers.", action: "wince and shake out a hand" },
          { character: "Paul", text: "Mine are sore too. But it’s good work, and it keeps us together." },
          { character: "Customer", text: "Excuse me, I need a tent for a sea trip. Why are you three smiling at tent cloth?", action: "peer over the bench" },
          { character: "Priscilla", text: "Because we follow Jesus, and he is with us even when we’re stitching." },
          { character: "Customer", text: "Jesus? Tell me more. I’ve got time while you finish my tent.", action: "lean on the bench" },
          { character: "Paul", text: "Jesus is God’s Son, the Saviour who died for us and rose again. Keep stitching while I tell you." },
          { character: "Aquila", text: "Come back on the Sabbath. Paul speaks at the meeting place, and everyone is welcome." },
          { character: "Narrator", text: "Day after day they worked and talked, and more people stopped to listen." },
          { character: "Everyone", text: "Stitch, stitch, stitch! Talk about Jesus!", action: "stitch and nod" },
          { pause: "Freeze! Priscilla, Aquila and Paul are not famous. They are tentmakers. Why might God want to use ordinary workers like them?", seconds: 20 },
          { character: "Narrator", text: "Paul was not alone. Priscilla and Aquila had given him a home, a job and a team." },
          { character: "Paul", text: "I couldn’t do this without you both. Thank you for opening your door.", action: "hand on heart" },
          { character: "Priscilla", text: "We’re just stitching tents, Paul. We’re glad to do it for Jesus." },
          { character: "Aquila", text: "Every stitch for the Lord. Now, who’s ready for the next tent?" },
          { character: "Customer", text: "I’ll be back on the Sabbath. I want to hear more.", action: "wave and leave" },
          { character: "Everyone", text: "Do your work willingly, for the Lord!", action: "stitch once, then point up" }
        ],
        debrief: [
          { level: "think", text: "How did Priscilla and Aquila help Paul, apart from giving him a job?", hint: "They gave him a home, a meal, friendship and a team to work with. They welcomed a stranger. Helping behind the scenes is real service." },
          { level: "look", text: "What were Paul, Priscilla and Aquila doing while they talked about Jesus?", hint: "Stitching tent cloth. Their ordinary work was the place where they shared the good news." }
        ],
        notes: "All lines are imagined except the facts in Acts 18:1–4 (tentmakers; stayed and worked together; Sabbath speaking). Let the stitching be fun and rhythmic. When the Customer says “Jesus? Tell me more”, take your time: this is the heart of the scene." },

      { type: "question", id: "m-q3", title: "Who gets the credit?", minutes: 1, level: "dig", mode: "discuss", seconds: 40,
        text: "Priscilla and Aquila are not famous, but Paul’s letters mention them again and again with thanks. Why do you think God uses people who aren’t famous?",
        hint: "Ideas: God cares about faithfulness, not fame; ordinary people can be where we live and work; God wants every kind of person on his team; the helpers make the big jobs possible. Follow-up: ‘Who in your life is a helper like Priscilla?’ Follow-up 2: ‘What would you miss if helpers stopped?’ If silent: ask about the person who set up your room this morning." },

      { type: "apply", id: "m-apply", title: "Head · Heart · Hands", minutes: 1,
        head: "God uses ordinary people doing ordinary things, like tentmakers sharing their home and their faith.",
        heart: "God, thank you that you can use me, even when I feel small.",
        hands: "Do one small helping job today without being asked and without wanting any credit: tidy up, set the table, carry something.",
        settings: ["home", "school", "sport"],
        notes: "Keep it small. The point is serving quietly. Some students may feel they have nothing to give; reassure them that small helpful things count." },

      { type: "scene", id: "m-scene", title: "A stranger at the stall", minutes: 0.5, optional: true,
        art: { key: "t4w06d1-a" },
        boxes: [
          { text: "“Stay with us.”", pos: "tl", style: "speech" },
          { text: "A workshop in Corinth became a home for Paul.", pos: "br", style: "caption" }
        ] },

      { type: "verse", id: "m-verse", title: "Memory verse peek", minutes: 1, optional: true, activity: "echo",
        notes: "Introduce Colossians 3:23. Echo each chunk: say it, they say it back. Explain: ‘master’ means the person you’re working for." },

      { type: "prayer", id: "m-pray", title: "Praying for team-mates — working hands", minutes: 3, mood: "calm", style: "hands",
        tip: "This week we practise praying for team-mates: the people we work, learn and play beside. Priscilla and Aquila worked beside Paul every day. Hands that work are hands we can offer to God.",
        opening: "Hold out both hands, like tentmakers with sore, hard-working fingers. Take a slow breath in and out.",
        phases: [
          { name: "Wow", lead: "Look at your hands. God uses ordinary hands for his work.",
            prompts: ["God, you used two tentmakers to help Paul in Corinth.", "God, you see every stitch and every small job done for you."],
            starter: "Wow, God, you are…", seconds: 35, aloud: "Wow, God, you use ordinary people to do your work!" },
          { name: "Sorry", lead: "Turn your hands palms down. Tell God about times we have worked badly with others.",
            prompts: ["Sorry for grumbling about jobs that seem boring or small.", "Sorry for the times I’ve left a team-mate out."],
            starter: "God, I’m sorry for…", seconds: 30, aloud: "God, we’re sorry for the times we grumble and leave people out." },
          { name: "Thanks", lead: "Palms up again. Thank God for the people who work beside you.",
            prompts: ["Thank you for people who open their door, like Priscilla and Aquila.", "Thank you for team-mates at school and sport who share the work."],
            starter: "Thank you, God, for…", seconds: 30, aloud: "Thank you, God, for the people who work beside us." },
          { name: "Please", lead: "Choose one team-mate and pray for them silently by name.",
            prompts: ["Please bless the team-mates I work and play beside, and help us work well together.", "Please help me do my work willingly, as if I’m doing it for you."],
            starter: "Please, God, help…", seconds: 35, aloud: "Please, God, help our teams and help us work willingly for you." }
        ],
        closing: "Close your hands gently, like holding the names of your team-mates. Everyone: Amen.",
        notes: "Team-mates can be anyone: a class group, a sports team, family, church. If a student feels left out of teams, gently invite them to pray for one person who might need a friend." }
    ] },

  /* ======================= TUESDAY ======================= */
  { label: "Tuesday", theme: "Timothy and the Kitchen Table", roleplay: false, mood: "calm",
    learningIntentions: [
      "We are learning how Timothy’s faith began with his grandmother Lois and his mother Eunice.",
      "We are learning why Paul invited young Timothy to travel with him.",
      "I can explain how ordinary people in a family can pass on faith (2 Timothy 1:5)."
    ],
    assessment: "Listen for students naming Lois and Eunice as the ones who first lived and taught faith in Jesus to Timothy, saying that Timothy was young and probably shy, and explaining that Paul invited him to travel and help.",
    resources: ["Screen", "Paper and pens (for the thank-you list)", "Optional: a toy scroll or rolled paper"],
    whereToNext: "Tomorrow: Apollos, a brilliant speaker, and how Priscilla and Aquila help him in a kind and clever way.",
    slides: [
      { type: "title", id: "t-title", title: "Timothy and the Kitchen Table", minutes: 0.5, kicker: "Term 4 · Week 6", sub: "Ordinary Heroes Who Served",
        art: { key: "t4w06d2-a" }, notes: "Let the splash play." },

      { type: "hook", id: "t-recap", title: "Recap", minutes: 1, style: "recap",
        text: "Yesterday we met three tentmakers in Corinth: Priscilla, Aquila and Paul.",
        ask: "What did Priscilla and Aquila do for Paul, and what did they do while they worked?",
        hint: "They welcomed him to stay and work with them; they stitched tents and talked about Jesus. ‘Today we meet a young man whose faith started at a kitchen table with the women who loved him: Timothy.’" },

      { type: "scripture", id: "t-scr", title: "Acts 16:1–2 · 2 Timothy 1:5", minutes: 1, ref: "Acts 16:1–2; 2 Timothy 1:5", version: "CEV",
        lines: [
          { text: "There was a follower named Timothy. His mother was also a follower. She was Jewish, and his father was Greek.", ref: "Acts 16:1" },
          { text: "The Lord’s followers in Lystra and Iconium said good things about Timothy.", ref: "Acts 16:2" },
          { text: "I also remember the genuine faith of your mother Eunice. Your grandmother Lois had the same sort of faith, and I am sure you have it as well.", ref: "2 Timothy 1:5" }
        ],
        emphasis: ["Timothy", "genuine faith", "Eunice", "Lois"],
        notes: "Genuine = real, not pretend. 2 Timothy is a letter Paul wrote to Timothy later in life; it is part of the New Testament. Lystra and Iconium were towns in what is now central Turkey." },

      { type: "story", id: "t-story", title: "Timothy’s family", minutes: 3.5, transition: "page", mood: "calm",
        beats: [
          { text: "Before Timothy meets Paul…", caption: "There is a grandmother, a mother, and a scroll.",
            art: { key: "t4w06d2-a", label: "Tue · story — faith in the family", desc: "Young boy Timothy reading a scroll with his grandmother Lois and mother Eunice in their home.", shot: "medium, warm lamplight", motion: "kenburns-in", chars: [],
              scene: "In a simple stone home in Lystra, a boy of about eight sits between his grey-haired grandmother Lois and his mother Eunice, all three bent over an unrolled scroll on a low table. Lamplight glows on their faces as Lois points to a line." } },
          { text: "Lois and Eunice tell him about God.", caption: "Night after night, one lamp-lit evening at a time." },
          { text: "Paul comes to Lystra.", caption: "Everyone says good things about Timothy." },
          { text: "“Will you come with me?”", caption: "A shy young man says yes.",
            art: { key: "t4w06d2-b", label: "Tue · Paul invites Timothy", desc: "Paul putting a hand on young Timothy's shoulder, inviting him to join the journey, as his mother watches proudly.", shot: "medium wide, outdoors", motion: "kenburns-right", chars: ["paul", "timothy"],
              scene: "Outside a small hill town, Paul rests a hand on the shoulder of the young man Timothy, who looks shy but ready, a satchel of scrolls slung over his shoulder. His mother Eunice watches proudly from a doorway, and the road winds away." } },
          { text: "A faith passed down.", caption: "The kitchen table was where it all began." }
        ],
        narration: "Today we meet a young man called Timothy. But to understand Timothy, we have to go back to where his story really began: his grandmother’s kitchen.\n\nTimothy grew up in a town called Lystra, in a hilly part of what is now Turkey. His mother, Eunice, was Jewish and believed in Jesus. His father was Greek. And living with them was Timothy’s grandmother, Lois.\n\nThe Bible doesn’t describe their home, so let’s imagine it. Picture a small stone house, lamplight, and a boy of about eight. Lois unrolls a precious scroll: the holy writings we call the Old Testament. She puts her finger on a line and reads it slowly. Then Eunice explains, ‘This is about God’s promise.’ Night after night, year after year, the boy hears about a God who keeps his promises, and about the Saviour God promised to send. Nobody in that kitchen is famous. Nobody is on a stage. They are just a grandmother and a mum, passing on their faith one lamp-lit evening at a time.\n\nYears later, Paul comes to Lystra on his travels, and he meets a young follower of Jesus. The believers in Lystra and Iconium all say good things about him. Timothy’s faith is real, and Paul sees it. Later, Paul will write that Timothy’s grandmother Lois and his mother Eunice had the same sort of genuine faith, and that he is sure Timothy has it as well.\n\nSo Paul asks him: ‘Timothy, will you come with me?’\n\nThat is a big question. It means leaving home. It means long roads, strange cities, and sometimes trouble. We don’t think Timothy was loud or bold. In later letters Paul gently tells him not to be afraid, because God’s Spirit gives power, love and self-control. Timothy may have been shy, and a bit nervous. But he says yes.\n\nTimothy becomes Paul’s helper and travelling partner, and a dear friend, almost like a son. Paul sends him to churches, trusting him with important jobs. And one day Paul writes him a letter, which is in our Bible, that begins by remembering his faith and the women who taught him.\n\nHere is the surprise. When we read about Paul’s great journeys, we might think the heroes are the people on the road. But a lot of the story started years earlier at a kitchen table, with a grandmother and a mother who simply said, ‘Let me tell you about God.’\n\nThey never travelled far. But their faith travelled all the way to Timothy, and through Timothy, to many others. That’s how God works: through ordinary people, loving and teaching, one lamp-lit evening at a time.",
        notes: "About 3½ minutes. Documented (Acts 16:1–3; 2 Timothy 1:5; 3:15): Timothy’s mother was a Jewish believer, his father Greek; Lois and Eunice had genuine faith; Timothy was well spoken of; Paul wanted him to join them. Imagined: the scroll-reading scene, Lois’s and Eunice’s words, and Timothy’s age at the time. “Shy” is a gentle inference from 2 Timothy 1:7 (about not being timid): say so if asked. Acts 16:3 also says Paul had Timothy circumcised, because of the Jewish people in that area; we leave this out of the story for age reasons, but if students ask, answer it simply and calmly. Be sensitive: some students live in homes where faith is not practised, or have no grandparent nearby. Stress that anyone, a teacher, neighbour, friend or coach, can be a Lois or an Eunice." },

      { type: "dig", id: "t-dig", title: "Who did what?", minutes: 2,
        prompt: "Faith is like a torch passed from hand to hand. Match each person to what they did.",
        columns: ["Who", "What they did"],
        items: [
          { left: "Lois (grandmother)", right: "Had genuine faith and shared the Scriptures with Timothy" },
          { left: "Eunice (mother)", right: "Believed in Jesus and brought Timothy up in that faith" },
          { left: "Timothy", right: "Said yes to God and to Paul, even if he felt shy" },
          { left: "Paul", right: "Invited Timothy to join him and trusted him with important jobs" }
        ],
        reveal: "Every one of them was ordinary, and God used every one of them.",
        notes: "Reveal row by row. Ask after each: ‘Which person do we hear about least, and how important was their job?’ Lois and Eunice only get one verse, yet without them there is no Timothy." },

      { type: "question", id: "t-q1", title: "Finish the line", minutes: 1, level: "look", mode: "finish", seconds: 20,
        text: "Finish the sentence: “Your grandmother Lois had the same sort of ________ faith.”",
        reveal: "“…genuine faith.” (2 Timothy 1:5)",
        hint: "Answer: genuine, meaning real. Follow-up: ‘Who was Timothy’s mother?’ (Eunice.) Follow-up 2: ‘Who were the first people to teach Timothy about God?’ (Lois and Eunice, his grandmother and mother.) If silent: point to the last scripture line and read it aloud together." },

      { type: "question", id: "t-q2", title: "Saying yes when you’re shy", minutes: 1.5, level: "think", mode: "silent", seconds: 40,
        text: "Timothy was young and probably shy, but Paul asked him to come. Why might God choose a shy young person for a big job?",
        hint: "Good answers: God looks at faith, not confidence; God’s Spirit gives power; shy people may be good listeners and helpers; Paul saw that Timothy’s faith was real. Follow-up: ‘What helps you say yes when you feel nervous?’ Follow-up 2: ‘Who believed in you before you believed in yourself?’ If silent: give 20 seconds of quiet thinking, then ask for one idea." },

      { type: "question", id: "t-q3", title: "Is faith inherited?", minutes: 1.5, level: "dig", mode: "vote", seconds: 30, skippable: true,
        text: "Agree or disagree: “You only follow Jesus if your family does.”",
        options: ["Agree", "Disagree"],
        hint: "Disagree: Timothy’s father was Greek, and Paul himself met Jesus on his own. Families can pass on faith, but each person says their own yes. Follow-up: ‘Who else besides family can help someone know Jesus?’ (Friends, teachers, church, coaches.) Follow-up 2: ‘What could you pass on to someone younger?’ If silent: ask who first taught them something important." },

      { type: "apply", id: "t-apply", title: "Head · Heart · Hands", minutes: 2,
        head: "Faith is often passed on by ordinary people at ordinary tables: grandparents, parents, teachers and friends.",
        heart: "Thank you, God, for the people who have helped me know you, or who have helped me when I needed it.",
        hands: "Write the name of one person who has taught you something good or helped you grow, and one thing you’re thankful for about them. Say thank you to them this week.",
        settings: ["home", "class", "bedtime"],
        notes: "Give out paper and pens. Students keep their note private. For anyone without family support, encourage naming a teacher, neighbour, coach or friend. Some students may be sad if someone they would write about has died; allow them to write and keep the note." },

      { type: "scene", id: "t-scene", title: "“Will you come with me?”", minutes: 1, optional: true,
        art: { key: "t4w06d2-b" },
        boxes: [
          { text: "“Timothy, will you come with me?”", pos: "tl", style: "speech" },
          { text: "A faith that began at a kitchen table travelled the world.", pos: "br", style: "caption" }
        ] },

      { type: "verse", id: "t-verse", title: "Build the verse", minutes: 1, activity: "build",
        notes: "Build Colossians 3:23 chunk by chunk, like building a tent: one piece at a time." },

      { type: "prayer", id: "t-pray", title: "Praying for team-mates — a thank-you list", minutes: 3, mood: "calm", style: "write",
        tip: "Write the names of people who teach you or help you, and people you work and play beside. Praying for team-mates starts with knowing their names.",
        opening: "Take your pen. At the top of your paper write “Thank you for…” and underneath draw a small lamp, like the one at Timothy’s kitchen table.",
        phases: [
          { name: "Wow", lead: "Write one line about who God is.",
            prompts: ["God, you use ordinary families to pass on your love.", "God, you chose a shy young man and made him brave."],
            starter: "God, you are…", seconds: 35, aloud: "God, you use ordinary people, and you make us brave!" },
          { name: "Sorry", lead: "Silently: where have you been too shy, or too busy, to say thank you or to help?",
            prompts: ["Sorry for the people I forget to thank.", "Sorry for the times I say no to you because I’m afraid."],
            starter: "God, I’m sorry for…", seconds: 25, aloud: "God, we’re sorry for forgetting to say thank you and for saying no when we’re afraid." },
          { name: "Thanks", lead: "Write the name of one person who taught you about God or helped you grow.",
            prompts: ["Thank you for the grandparent, parent or teacher who taught me.", "Thank you for the friend who helps me be brave."],
            starter: "Thank you for…", seconds: 40, aloud: "Thank you, God, for the people who taught us and helped us." },
          { name: "Please", lead: "Write the name of one team-mate and one thing you’d like to ask God for them.",
            prompts: ["Please help my team-mate (name) with what is hard for them right now.", "Please help me be brave, like Timothy, and say yes when you call me."],
            starter: "Please, God, help…", seconds: 35, aloud: "Please, God, help our team-mates, and help us say yes to you." }
        ],
        closing: "Fold your list and keep it safe. Perhaps you’ll give one name a thank-you this week. Amen.",
        notes: "Students keep their list private. Be gentle: some may find it hard to name a team-mate or helper; they can write “a teacher” or “someone at church”." }
    ] },

  /* ======================= WEDNESDAY ======================= */
  { label: "Wednesday", theme: "Apollos Comes Home for Supper", roleplay: true, mood: "calm",
    learningIntentions: [
      "We are learning how Priscilla and Aquila helped Apollos know Jesus more fully.",
      "We are learning why kindness and humility matter when someone needs to learn more.",
      "I can explain how Priscilla and Aquila handled a hard moment in a kind way (Acts 18:24–28)."
    ],
    assessment: "Listen for students recalling that Apollos was a gifted speaker who only knew part of the story, that Priscilla and Aquila invited him home instead of correcting him publicly, and that Apollos listened and learned and then helped others.",
    resources: ["Screen", "Optional: a bowl of bread or crackers on a table for the role-play", "Optional: a map showing Alexandria, Ephesus and Corinth"],
    whereToNext: "Tomorrow: Barnabas the encourager, what this week shows us about God, and a challenge about encouraging someone by name.",
    slides: [
      { type: "title", id: "w-title", title: "Apollos Comes Home for Supper", minutes: 0.5, kicker: "Term 4 · Week 6", sub: "Ordinary Heroes Who Served",
        art: { key: "t4w06d3-a" }, notes: "Let the splash play." },

      { type: "hook", id: "w-hook", title: "The right way to say it", minutes: 1,
        text: "Imagine a friend is explaining something and gets part of it wrong, perhaps the rules of a game. How could you help them?",
        ask: "What’s a kind way to help someone get it right?",
        hint: "Take two or three ideas: ask a question, show them privately, say what they got right first, offer to explain over lunch, not laugh or correct them in front of others. Recap: ‘Yesterday we met Timothy and his family. Today we meet Apollos, and the tentmakers who helped him with exactly this problem.’" },

      { type: "scripture", id: "w-scr", title: "Acts 18:24–26", minutes: 1, ref: "Acts 18:24–26", version: "CEV",
        lines: [
          { text: "He was a very good speaker and knew a lot about the Scriptures.", ref: "Acts 18:24" },
          { text: "Apollos started speaking bravely in the synagogue.", ref: "Acts 18:26" },
          { text: "But when Priscilla and Aquila heard him, they took him to their home and helped him understand God’s Way even better.", ref: "Acts 18:26" }
        ],
        emphasis: ["very good speaker", "bravely", "took him to their home", "even better"],
        notes: "Apollos came from Alexandria in Egypt, a city famous for its learning. Acts 18:25 says he taught accurately about Jesus but knew only the baptism of John, the baptism that told people to get ready for the Messiah. ‘God’s Way’ is an early name for following Jesus. Messiah means God’s promised King." },

      { type: "story", id: "w-story", title: "Apollos comes home", minutes: 3, transition: "page", mood: "calm",
        beats: [
          { text: "A brilliant speaker arrives in Ephesus.", caption: "Apollos knows the Scriptures inside out.",
            art: { key: "t4w06d3-a", label: "Wed · story — Apollos speaks boldly", desc: "Apollos teaching powerfully in the synagogue at Ephesus while Priscilla and Aquila listen at the back.", shot: "wide, interior", motion: "kenburns-left", chars: ["apollos", "priscilla", "aquila"],
              scene: "In a stone synagogue at Ephesus, Apollos stands with a scroll, speaking with passionate gestures to an attentive crowd on benches. At the back, Priscilla and Aquila listen closely, glancing at each other thoughtfully. Light falls from high windows." } },
          { text: "Priscilla and Aquila notice.", caption: "True and bold — but only part of the story." },
          { text: "They don’t shame him. They invite him home.", caption: "Bread, lamplight and a kind, clear explanation.",
            art: { key: "t4w06d3-b", label: "Wed · role-play card — explaining more", desc: "Priscilla and Aquila sitting with Apollos at their kitchen table, kindly explaining more about Jesus.", shot: "medium, warm interior", motion: "kenburns-in", chars: ["priscilla", "aquila", "apollos"],
              scene: "Around a low table in a cosy home with lamps and bread, Priscilla leans forward explaining something with a kind smile while Aquila unrolls a scroll. Apollos sits with them, listening eagerly, his hand on his chin, his face lighting up." } },
          { text: "Apollos listens and learns.", caption: "A great teacher is willing to be taught." },
          { text: "He becomes a great help.", caption: "Ordinary friends made a gifted speaker even more useful.", shout: true }
        ],
        narration: "Now we travel to Ephesus, a grand city on the coast of what is now Turkey, with a huge theatre and a famous temple. Priscilla and Aquila have moved here to help Paul, and they’ve opened their home to the believers.\n\nOne Sabbath, they go to the synagogue, the Jewish meeting place, and a new visitor stands up to speak. His name is Apollos. He’s from Alexandria in Egypt, a city famous for its libraries and scholars. And Apollos is brilliant. The Bible says he was a very good speaker who knew a lot about the Scriptures. He speaks with fire and energy, and he teaches about Jesus bravely. People lean forward to listen.\n\nBut at the back, Priscilla and Aquila notice something. Apollos is saying true things about Jesus, but he only seems to know part of the story. The Bible says he knew only about the baptism of John, the teaching that got people ready for Jesus. He hasn’t heard everything about what Jesus has done since.\n\nNow, what would you do? Maybe you would feel too shy to say anything. After all, Apollos is the clever one. Maybe you would be tempted to stand up and correct him in front of everyone, or whisper about him afterwards. Priscilla and Aquila do neither.\n\nThey wait until he finishes. Then they walk up and say, ‘Apollos, that was wonderful. Would you come to our home?’\n\nSo he does. They sit around the table with bread and lamps, and the Bible says they took him to their home and helped him understand God’s Way even better. We don’t know their exact words, so we imagine them speaking kindly and clearly, with a scroll open between them.\n\nAnd Apollos? Here is the second beautiful thing. He doesn’t get offended. He doesn’t say, ‘Who are you to teach me?’ He listens. He learns. A great teacher is willing to be taught.\n\nLater, Apollos wants to go to Greece. The believers in Ephesus encourage him, and write to the followers there to welcome him. And when he arrives, the Bible says he is a great help to the believers, showing from the Scriptures that Jesus is the Messiah, God’s promised King.\n\nSee what happened? Priscilla and Aquila weren’t famous teachers. They were tentmakers with a kitchen table. But because they were brave and kind, a gifted speaker became even more useful to God. That is what happens when ordinary people serve, and when we are humble enough to keep learning.",
        notes: "About 3 minutes. Source: Acts 18:24–28. Documented: Apollos was from Alexandria, a gifted speaker who knew the Scriptures and taught about Jesus, but knew only the baptism of John; Priscilla and Aquila took him home and explained more; the believers encouraged him to go to Achaia (Greece); he was a great help there. Imagined: the exact words and the supper. Acts names Priscilla first here, which suggests she may have been a leader in the teaching; we do not make a point of that, but do not read their roles as less than equal. Be clear that Apollos wasn’t a bad person: he was honest, willing and brilliant, just missing part of the story." },

      { type: "question", id: "w-q1", title: "Where did they take him?", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "What did Priscilla and Aquila do after they heard Apollos speak?",
        options: ["They argued with him in the synagogue", "They took him to their home", "They sent him away", "They told everyone his mistake"], answer: 1,
        hint: "Answer: B, they took him to their home and helped him understand God’s Way even better (Acts 18:26). Follow-up: ‘What did Apollos know well?’ (The Scriptures.) Follow-up 2: ‘What was missing?’ (He knew only John’s baptism.) If silent: re-read the last scripture line." },

      { type: "roleplay", id: "w-rp", title: "Supper With Apollos", minutes: 5, ref: "Acts 18:24–28",
        art: { key: "t4w06d3-b" },
        imagined: "Acts 18:24–28 tells us only that Priscilla and Aquila heard Apollos, took him home and explained God’s Way better, and that he later went to Greece and helped the believers. The conversation, the supper, and the Listener in the synagogue are all imagined. Nobody in this scene is quoting Scripture.",
        actions: ["Everyone: lean forward and nod as a crowd listening", "Everyone: show a lightbulb moment when Apollos understands"],
        props: ["Optional: a bowl of bread or crackers", "Optional: a rolled-up paper as a scroll"],
        characters: [
          { name: "Narrator", color: "#F2C77B", desc: "Tells the story" },
          { name: "Apollos", color: "#7BA7D9", desc: "Brilliant, bold and humble enough to learn" },
          { name: "Priscilla", color: "#C5A3E0", desc: "Kind and clever — explains with care" },
          { name: "Aquila", color: "#A1887F", desc: "Gentle, steady and welcoming" },
          { name: "Listener", color: "#B0BEC5", desc: "A synagogue visitor, impressed (imagined)" },
          { name: "Everyone", color: "#FFFFFF", desc: "The crowd, then the cheering friends" }
        ],
        lines: [
          { character: "Narrator", text: "A synagogue in Ephesus on the Sabbath. A visitor from Alexandria stands up to speak.", direction: true },
          { character: "Apollos", text: "Friends, the Scriptures point to Jesus! Listen closely, because this is good news for everyone.", action: "big, bold gestures" },
          { character: "Listener", text: "He’s brilliant! I’ve never heard anyone speak the Scriptures like that.", action: "whisper to a neighbour" },
          { character: "Everyone", text: "Wow! Amazing! What a speaker!", action: "lean forward and nod" },
          { character: "Narrator", text: "At the back, Priscilla and Aquila listen carefully. They notice that something is missing." },
          { character: "Priscilla", text: "He’s so bold, and everything he says is true. But he only knows part of the story.", action: "whisper to Aquila" },
          { character: "Aquila", text: "We could correct him in front of everyone. Or we could whisper about him. Or…", action: "raise eyebrows" },
          { character: "Priscilla", text: "Or we could invite him home for supper and explain the rest, kindly." },
          { pause: "Freeze! Name two unkind ways Priscilla and Aquila could have handled this. Why is inviting him home better?", seconds: 25 },
          { character: "Aquila", text: "Apollos! That was wonderful. Would you come to our home for supper tonight?", action: "step forward and smile" },
          { character: "Apollos", text: "Me? Thank you, I’d be glad to. I’m always happy to learn more about Jesus." },
          { character: "Narrator", text: "Around the table, with lamps and bread, Priscilla and Aquila helped him understand God’s Way even better." },
          { character: "Priscilla", text: "Let us tell you everything we know about Jesus, from the beginning right to the end.", action: "open the scroll" },
          { character: "Apollos", text: "I didn’t know all of that! Please, tell me more. I want to understand properly.", action: "lean in" },
          { character: "Aquila", text: "And when you’ve heard it all, you’ll tell it even better than we can." },
          { character: "Everyone", text: "Ohhh! Now I see!", action: "lightbulb gesture above the head" },
          { character: "Narrator", text: "Later, Apollos sailed to Greece. The believers wrote to welcome him, and he was a great help." },
          { character: "Apollos", text: "Thank you for not shaming me. You gave me the rest of the story, and you gave it kindly." },
          { character: "Priscilla", text: "That’s what friends do. We’re all on the same team." },
          { character: "Everyone", text: "Ordinary people, kind hearts, and God makes a team!", action: "hands together in the middle" }
        ],
        debrief: [
          { level: "think", text: "Why did Priscilla and Aquila invite Apollos home instead of correcting him in front of everyone?", hint: "They wanted to help, not embarrass him. A private, kind conversation protects someone’s dignity and makes it easier to listen." },
          { level: "look", text: "How did Apollos react when they explained more?", hint: "He listened and learned. He wasn’t offended. That humility made him even more useful to God." }
        ],
        notes: "Imagined, based on Acts 18:24–28. Play Priscilla and Aquila warmly and quietly: the scene is about kindness, not about winning. Apollos is a good man, not a villain. Keep the “whisper” moment light and not gossipy." },

      { type: "question", id: "w-q2", title: "Humble enough to learn", minutes: 1.5, level: "think", mode: "write", seconds: 45,
        text: "Apollos was a brilliant speaker, but he listened and learned. Why is it hard to learn from someone who isn’t as famous or clever as we are, and why did it matter?",
        hint: "Good answers: pride gets in the way; we want to look clever; he would have missed the full story; his humility helped many others. Follow-up: ‘When has someone helped you learn something you didn’t want to hear?’ Follow-up 2: ‘What helps us stay teachable?’ If silent: ask them to write one word that describes Apollos’s attitude." },

      { type: "question", id: "w-q3", title: "Kind and honest", minutes: 1, level: "dig", mode: "discuss", seconds: 40, skippable: true,
        text: "Priscilla and Aquila told Apollos the truth, but they did it kindly. How can we be both honest and kind to a team-mate?",
        hint: "Ideas: talk privately, start with what is good, ask questions, offer to help, choose a good moment, speak gently. Follow-up: ‘When have you been corrected in a kind way, and when in an unkind way? How did each feel?’ Follow-up 2: ‘What would you want someone to do for you?’ If silent: ask how Apollos would have felt if they had corrected him publicly." },

      { type: "apply", id: "w-apply", title: "Head · Heart · Hands", minutes: 1,
        head: "Serving others includes helping them gently and kindly, and being humble enough to learn from others.",
        heart: "God, make me kind and honest, and teachable when someone helps me.",
        hands: "This week, if someone makes a mistake in front of you, choose to help quietly and kindly, or choose to say thank you when someone helps you.",
        settings: ["school", "sport", "home"],
        notes: "Keep it practical. Examples: a friend who gets a game rule wrong; a sibling who forgets a job; a team-mate who needs help. The aim is a kind word, not a lecture." },

      { type: "scene", id: "w-scene", title: "Supper at Priscilla’s", minutes: 0.5, optional: true,
        art: { key: "t4w06d3-b" },
        boxes: [
          { text: "“Would you come to our home?”", pos: "tl", style: "speech" },
          { text: "Kindness turned a mistake into a team.", pos: "br", style: "caption" }
        ] },

      { type: "verse", id: "w-verse", title: "Verse with actions", minutes: 1, optional: true, activity: "actions",
        notes: "Actions for Colossians 3:23: sleeves, stitch, point up, shake head, tap floor, stand tall." },

      { type: "prayer", id: "w-pray", title: "Praying for team-mates — in pairs", minutes: 3, mood: "calm", style: "pairs",
        tip: "Turn to a partner and pray for each other as team-mates. Priscilla, Aquila and Apollos were a team, and kind prayer helps teams stay kind.",
        opening: "Turn to a partner. Take turns to tell each other one thing a team you’re on (class, sport, family) needs this week.",
        phases: [
          { name: "Wow", lead: "Take turns finishing the sentence about God.",
            prompts: ["God, you gave Apollos the rest of the story through two friends.", "God, you use ordinary people to help each other know you."],
            starter: "Wow, God, you are…", seconds: 30, aloud: "Wow, God, you use friends to help us know you!" },
          { name: "Sorry", lead: "Silently: where have you been unkind, or too proud to listen?",
            prompts: ["Sorry for the times I’ve shamed someone instead of helping them.", "Sorry for being too proud to learn from others."],
            starter: "God, I’m sorry for…", seconds: 25, aloud: "God, we’re sorry for being unkind and too proud to learn." },
          { name: "Thanks", lead: "Thank God for someone who has helped you learn.",
            prompts: ["Thank you for people who explain things kindly.", "Thank you for friends who help me when I get it wrong."],
            starter: "Thank you, God, for…", seconds: 30, aloud: "Thank you, God, for the people who help us learn." },
          { name: "Please", lead: "Pray one sentence for your partner’s team.",
            prompts: ["Please help (partner’s name) and their team work well together and be kind.", "Please help me be teachable and gentle with my team-mates."],
            starter: "Please, God, help…", seconds: 40, aloud: "Please, God, help our teams be kind, gentle and teachable." }
        ],
        closing: "Thank your partner for praying for your team. Everyone: Amen.",
        notes: "Model it first with a student. If a student doesn’t feel part of a team, they can pray for “my class” or “my family”." }
    ] },

  /* ======================= THURSDAY ======================= */
  { label: "Thursday", theme: "Barnabas the Encourager", roleplay: false, mood: "dawn",
    learningIntentions: [
      "We are learning who Barnabas was and how he encouraged others.",
      "We are learning what this week shows us about God, who uses ordinary people.",
      "I can plan one real, specific way to encourage someone by name (Colossians 3:23)."
    ],
    assessment: "Students can name Priscilla, Aquila, Timothy, Apollos and Barnabas; explain that God uses ordinary people; describe what Barnabas’s name means; and recite Colossians 3:23.",
    resources: ["Screen", "Take-home challenge cards", "Small paper cards or sticky notes for encouragement notes"],
    whereToNext: "Next week: Storm, Shipwreck and Rome. Paul sails for Rome, a terrible storm hits the ship, and God keeps his promise.",
    slides: [
      { type: "title", id: "th-title", title: "Barnabas the Encourager", minutes: 0.5, kicker: "Term 4 · Week 6", sub: "Ordinary Heroes Who Served",
        art: { key: "t4w06d4-a" }, notes: "Let the splash play." },

      { type: "review", id: "th-review", title: "Our week in order", minutes: 2.5, format: "order",
        prompt: "Put our week’s ordinary heroes in order, Monday to Thursday!",
        items: ["Paul meets Priscilla and Aquila in Corinth", "Timothy learns about God from Lois and Eunice", "Paul invites Timothy to travel with him", "Priscilla and Aquila invite Apollos home", "Barnabas sells his field to help others"],
        hint: "Students call out the next story; click to place it. Ask: ‘Which hero would you be most like?’ Point out that none of them was famous.",
        notes: "Cards start scrambled. This is the order of our lessons, not the order things happened in Acts: Barnabas’s gift (Acts 4) happened long before Paul’s time in Corinth." },

      { type: "scripture", id: "th-scr", title: "Acts 4:36–37 · Colossians 3:23", minutes: 1, ref: "Acts 4:36–37; Colossians 3:23", version: "CEV",
        lines: [
          { text: "Joseph was a Levite from Cyprus, and the apostles called him Barnabas, which means “one who encourages others.”", ref: "Acts 4:36" },
          { text: "Joseph was one of the followers who had sold a piece of property and brought the money to the apostles.", ref: "Acts 4:37" },
          { text: "Do your work willingly, as though you were serving the Lord himself, and not just your earthly master.", ref: "Colossians 3:23" }
        ],
        emphasis: ["Barnabas", "one who encourages others", "sold", "willingly", "serving the Lord himself"],
        notes: "A Levite was from the tribe that served in the temple. To encourage someone is to put courage (heart) into them. Colossians 3:23 is our memory verse. Paul wrote it to people at work, where nobody might notice them." },

      { type: "story", id: "th-story", title: "Barnabas and the God who uses ordinary people", minutes: 2, transition: "page", mood: "dawn",
        beats: [
          { text: "Joseph gets a new name.", caption: "Barnabas: “one who encourages others”.",
            art: { key: "t4w06d4-a", label: "Thu · Barnabas the encourager", desc: "Barnabas laying a bag of money at the apostles' feet after selling his field, to help people in need.", shot: "medium, low-angle", motion: "kenburns-up", chars: ["barnabas"],
              scene: "In a sunny Jerusalem courtyard, Barnabas kneels and places a heavy cloth bag of coins at the feet of the apostles, smiling. Behind him, poor families watch with grateful faces, and a child tugs at his cloak as he turns to grin at her." } },
          { text: "He believed in people.", caption: "Saul. John Mark. Second chances." },
          { text: "God uses ordinary people.", caption: "Tentmakers. A shy young man. An encourager." },
          { text: "Your turn: one real thing.", caption: "Say someone’s name and say something true.",
            art: { key: "t4w06d4-b", label: "Thu · live it — encourage by name", desc: "A kid on a school court high-fiving a teammate who just missed a shot, cheering them on.", shot: "medium, action", motion: "kenburns-in", chars: [],
              setting: "Modern-day Aotearoa New Zealand setting: a suburban primary school with classroom blocks, a covered walkway, playing fields, native trees and harakeke (flax) bushes. Kiwi kids of many backgrounds drawn naturally and respectfully, in everyday clothes, school uniforms or sports gear.",
              scene: "On an outdoor school netball court, a girl jogs over to a disappointed teammate who has just missed a shot and gives her an enthusiastic high five, grinning. The teammate starts to smile again; other players run past in bibs." } }
        ],
        narration: "So what does this week show us about God? Look at who he used: a tentmaker couple, a shy young man, a grandmother, and a man named Joseph who got a new nickname.\n\nJoseph came from the island of Cyprus. When the first believers in Jerusalem were sharing what they had so that nobody went without, Joseph sold a piece of land and brought the money to the apostles. And they gave him a new name: Barnabas, which means ‘one who encourages others’. Imagine being known for that!\n\nBarnabas lived up to it. When everyone was afraid of Saul, who had once hurt Jesus’ followers, Barnabas took him by the hand and brought him to the apostles. He later stood beside Paul on their first big trip. And when a young man named John Mark had let them down, Barnabas wanted to give him another go. Years later, Paul wrote that Mark was useful to him. Encouragement changed that.\n\nHere is what it shows about God. He doesn’t only use the famous or the clever. He uses tentmakers and shy teenagers and people who sell their fields and say, ‘Keep going. I believe in you.’ And Jesus himself, the greatest servant of all, said he came not to be served but to serve, and to give his life to rescue many.\n\nSo what can we do? Do your work willingly, as though you were serving the Lord himself. Imagine a netball court at school today: someone misses a shot, and you jog over, give a high five and say their name and one true thing: ‘Great defence, Mia.’ That’s Barnabas. Small, specific and real.",
        notes: "About 2 minutes. Documented: Acts 4:36–37 (Joseph/Barnabas, a Levite from Cyprus, sold a field and gave the money); Acts 9:26–27 (Barnabas brought Saul to the apostles); Acts 13–15 (travelled with Paul; took John Mark); 2 Timothy 4:11 (Paul calls Mark useful). Mark 10:45 is paraphrased. The netball scene and the name Mia are imagined: a modern example only. Be gentle with students who find encouragement hard; remind them it can be a quiet note or a smile as well as words." },

      { type: "question", id: "th-q1", title: "What does Barnabas mean?", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "What does the name Barnabas mean?",
        options: ["Son of thunder", "One who encourages others", "A strong builder", "The tentmaker"], answer: 1,
        hint: "Answer: B, one who encourages others (Acts 4:36). Follow-up: ‘What was Barnabas’s name before the apostles gave him this one?’ (Joseph.) Follow-up 2: ‘What did he do to help the early believers?’ (Sold his field and gave the money.) If silent: re-read the first scripture line." },

      { type: "question", id: "th-q2", title: "God’s kind of hero", minutes: 1.5, level: "think", mode: "pair", seconds: 45,
        text: "Our heroes this week were tentmakers, a shy young man, a grandmother and an encourager. What does that tell us about the kind of people God uses?",
        hint: "Good answers: God uses ordinary people; he looks at hearts, not fame; every job matters, even small or hidden ones; anyone can be part of his team. Follow-up: ‘Which hero do you think had the hardest job?’ Follow-up 2: ‘What could God do through you where you are?’ If silent: ask which hero they would most like to be, and why." },

      { type: "recap", id: "th-recap", title: "This week’s big idea", minutes: 1.5,
        points: [
          "God uses ordinary people (tentmakers, a shy young man, a grandmother, an encourager) to do his work.",
          "Kindness, humility and encouragement are real service, whether anyone sees it or not.",
          "Whatever we do, we can do it willingly for the Lord himself, and Jesus, the greatest servant, shows us how."
        ],
        notes: "Then the Big Idea stamps in." },

      { type: "question", id: "th-q3", title: "Does small count?", minutes: 1.5, level: "dig", mode: "vote", seconds: 30, skippable: true,
        text: "Agree or disagree: “Small, hidden jobs don’t matter to God.”",
        options: ["Agree", "Disagree"],
        hint: "Disagree: Priscilla and Aquila’s stitching, Lois and Eunice’s lamp-lit lessons and Barnabas’s gift were all small and hidden, yet God used them. Follow-up: ‘What small, hidden job do you do?’ Follow-up 2: ‘Who is watching when nobody else is?’ (The Lord, Colossians 3:23.) If silent: ask what would happen if nobody did the small jobs." },

      { type: "challenge", id: "th-chal", title: "This Week’s Challenge", minutes: 2,
        text: "Encourage one person by name. Say or write one real, specific thing, such as “You were kind to him today” or “Your drawing made me smile”.",
        why: "“Do your work willingly, as though you were serving the Lord himself, and not just your earthly master.” — Colossians 3:23",
        head: "God uses ordinary people, and encouragement is real service.", heart: "Lord, help me see what is good in others and say it.", hands: "Pick one person. Say or write one real, specific thing to encourage them, by name.",
        takeHome: true,
        notes: "Give out paper cards. Examples: a teacher, a team-mate, a sibling, a grandparent, a neighbour. Specific beats generic: ‘You were really patient with the little ones’ beats ‘Good job’. Remind students it must be true. Next Monday’s check-in will ask about this." },

      { type: "verse", id: "th-verse", title: "Memory verse: fade-out", minutes: 1.5, activity: "fade",
        notes: "Fade out Colossians 3:23. Bonus: say Acts 16:31 from Week 5." },

      { type: "scene", id: "th-scene", title: "Ordinary heroes", minutes: 1, optional: true,
        art: { key: "t4w06-cover" },
        boxes: [
          { text: "Ordinary people. A faithful God.", pos: "tl", style: "shout" },
          { text: "Whatever you do, do it willingly for the Lord.", pos: "br", style: "caption" }
        ] },

      { type: "prayer", id: "th-pray", title: "Praying for team-mates — stand in a circle", minutes: 3, mood: "calm", style: "stand",
        tip: "Stand in a circle, like a team before a game. Praying for team-mates means calling out their names to God, and Barnabas-style, thanking God for what is good in them.",
        opening: "Stand up and make a circle, or just stand where you are. Imagine your team-mates standing beside you.",
        phases: [
          { name: "Wow", lead: "Call out one thing God is. Think about the ordinary people he uses.",
            prompts: ["God, you use tentmakers, grandmothers and encouragers.", "God, you give courage to the shy and strength to the weary."],
            starter: "God, you are…", seconds: 35, aloud: "God, you use ordinary people, and you give us courage!" },
          { name: "Sorry", lead: "Silently: tell God about a time you could have encouraged someone and didn’t.",
            prompts: ["Sorry for the times I said nothing when I could have encouraged.", "Sorry for putting people down instead of lifting them up."],
            starter: "God, I’m sorry for…", seconds: 25, aloud: "God, we’re sorry for the times we haven’t encouraged people, and thank you for forgiving us." },
          { name: "Thanks", lead: "Call out the name of someone who has encouraged you.",
            prompts: ["Thank you for the people who cheer me on, like Barnabas.", "Thank you for team-mates who help me and teach me."],
            starter: "Thank you, God, for…", seconds: 35, aloud: "Thank you, God, for the people who encourage us." },
          { name: "Please", lead: "Pray for the person you’ll encourage this week, and for your team-mates.",
            prompts: ["Please help me find one real thing to say to (name) and give me courage to say it.", "Please bless my team-mates, and help us all work willingly for you."],
            starter: "Please, God, help…", seconds: 40, aloud: "Please, God, bless our team-mates and help us encourage one another." }
        ],
        closing: "Put a hand on the shoulder of the person beside you, or just nod to them. Everyone: Amen!",
        notes: "Standing is optional; students who prefer to sit can. Touching a shoulder is optional too; a nod is enough. Celebrate short, honest prayers." }
    ] }
  ]
};
