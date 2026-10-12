/* Morninglight 2027 — Term 4 Week 5: Midnight Songs in Prison (Acts 16:11–40; Philippians 4:4–7). Scripture: CEV. */
window.DEVOTIONS = window.DEVOTIONS || {};
window.DEVOTIONS["Term 4"] = window.DEVOTIONS["Term 4"] || {};
window.DEVOTIONS["Term 4"]["Week 5"] = {
  lessonTitle: "Midnight Songs in Prison",
  passage: "Acts 16:11–40; Philippians 4:4–7",
  bigIdea: "God is with his people even in the darkest place, so we can pray and sing with joy in hard times, and Jesus is the one who brings rescue.",
  godIs: "Present in Hard Times",
  memoryVerse: { ref: "Acts 16:31", text: "Have faith in the Lord Jesus and you will be saved! This is also true for everyone who lives in your house.", version: "CEV",
    chunks: ["Have faith in the Lord Jesus", "and you will be saved!", "This is also true", "for everyone", "who lives", "in your house."],
    actions: ["Hands over your heart — trust", "Arms up high — rescued!", "Point to the person beside you", "Sweep both arms around the whole room", "Pat the ground with both hands — who lives here", "Hands together in a roof shape — a home"],
    notes: "“Saved” means rescued: rescued from sin and from being far from God, and brought into God’s family. Say it plainly and warmly." },
  prayerFocus: { skill: "Joy in trouble", tip: "Paul and Silas prayed and sang at midnight in a prison, not because it was easy, but because God was with them. This week we practise praying with thanks and joy even when things are hard. Philippians 4:6 (CEV): “Don’t worry about anything, but pray about everything.”" },
  mood: "night",
  cover: "t4w05-cover",
  characters: ["paul", "silas", "lydia", "jailer"],
  coverArt: { key: "t4w05-cover", label: "Week cover", desc: "Paul and Silas singing in a dark prison cell at midnight, moonlight falling through the bars.", shot: "wide, interior, moonlight",
    setting: "First-century Roman colony of Philippi in Macedonia: paved Roman streets, stone colonnades, a forum with a magistrates' platform, red-tiled roofs, a river with reeds outside the city gate, people in tunics, togas and draped Greek robes.",
    scene: "Deep in a stone prison at midnight, Paul and Silas sit with their feet locked in heavy wooden stocks, heads tilted back, singing. A single beam of moonlight falls through a barred window onto them, and other prisoners listen from the shadows.", chars: ["paul", "silas"] },
  comicArt: { key: "t4w05-comic", label: "Comic page (week opener)", format: "portrait", desc: "Six-panel comic page of Paul and Silas in Philippi.",
    setting: "First-century Roman colony of Philippi in Macedonia: paved Roman streets, stone colonnades, a forum with a magistrates' platform, red-tiled roofs, a river with reeds outside the city gate, people in tunics, togas and draped Greek robes.",
    panels: "Six panels. Panel 1 (wide): Lydia and women praying by a river outside the city gate. Panel 2 (small): Lydia's welcoming open door. Panel 3 (tall): Paul and Silas dragged before the magistrates. Panel 4 (wide): the two singing in the stocks at midnight in a beam of moonlight. Panel 5 (small): chains falling loose as the earthquake strikes. Panel 6 (wide): the jailer's family sharing a meal with Paul and Silas.", chars: ["paul", "silas", "lydia", "jailer"] },

  days: [

  /* ======================= MONDAY ======================= */
  { label: "Monday", theme: "Lydia by the River", roleplay: true, mood: "dawn",
    learningIntentions: [
      "We are learning how God sent Paul and Silas to Philippi and who they met by the river.",
      "We are learning what happened when the Lord opened Lydia’s heart.",
      "I can explain what Lydia did when she believed in Jesus (Acts 16:14–15)."
    ],
    assessment: "Listen for students recalling that Paul and Silas found women praying by a river, that the Lord opened Lydia’s heart, that she and her household were baptised, and that she opened her home to them.",
    resources: ["Screen", "Optional: a map showing Troas, the sea crossing, and Philippi in Macedonia", "Optional: a piece of purple cloth or ribbon to show Lydia’s trade"],
    whereToNext: "Tomorrow: trouble in Philippi. Paul and Silas do a kind thing and end up locked in the inner cell of a prison.",
    slides: [
      { type: "title", id: "m-title", title: "Lydia by the River", minutes: 0.5, kicker: "Term 4 · Week 5", sub: "Midnight Songs in Prison",
        art: { key: "t4w05-cover" }, notes: "Let the splash play. This week’s picture is a hint: a prison, a midnight, and singing. Ask students to guess what the story is about, but don’t answer yet." },

      { type: "hook", id: "m-hook", title: "The new place", minutes: 1.5,
        checkin: { text: "Welcome back. Last week we met Saul become Paul, and Ananias, who was scared but said yes to God. Your challenge: say yes to one small nudge to help or welcome someone. How did it go?" },
        text: "Think about the first day in a new place, such as a new school, a new town or a new team, when you didn’t know anyone. What helped most?",
        ask: "What would it feel like if someone invited you into their home on your very first day?",
        hint: "Check-in first: ask two or three students about one small nudge they said yes to, and how it felt. Then the hook: a smile, someone saving a seat, an invitation. Land it: ‘Today Paul and Silas arrive in a city where they know nobody, and a woman opens her door. God had been planning it all along.’" },

      { type: "scripture", id: "m-scr", title: "Acts 16:14–15", minutes: 1, ref: "Acts 16:14–15", version: "CEV",
        lines: [
          { text: "The Lord opened her heart, and she accepted what Paul was saying.", ref: "Acts 16:14" },
          { text: "If you think I really do have faith in the Lord, please come and stay in my home.", ref: "Acts 16:15" }
        ],
        emphasis: ["opened her heart", "accepted", "faith in the Lord", "stay in my home"],
        notes: "Lydia is the first person in Europe named in Acts as coming to faith in Jesus. Read the lines slowly. The second line is Lydia speaking. Baptism = being washed in water as a sign that you belong to Jesus and have a fresh start." },

      { type: "story", id: "m-story", title: "God sends them across the sea", minutes: 3, transition: "page", mood: "dawn",
        beats: [
          { text: "God said, “Go to Macedonia.”", caption: "A dream, a boat, and a Roman city called Philippi.",
            art: { key: "t4w05d1-a", label: "Mon · story — the place of prayer", desc: "Paul and Silas finding women gathered to pray by a river outside the city gate.", shot: "wide, morning", motion: "kenburns-in", chars: ["paul", "silas", "lydia"],
              setting: "First-century Roman colony of Philippi in Macedonia: paved Roman streets, stone colonnades, a forum with a magistrates' platform, red-tiled roofs, a river with reeds outside the city gate, people in tunics, togas and draped Greek robes.",
              scene: "On a grassy riverbank outside the city gate, a small group of women sits in a circle praying beside reeds and slow water. Paul and Silas walk up the path and sit down with them, the stone gate and red roofs behind." } },
          { text: "No meeting hall. Just women praying.", caption: "Not what Paul expected, but exactly where God sent him." },
          { text: "The Lord opened her heart.", caption: "Lydia, seller of purple cloth, believes in Jesus.", shout: true },
          { text: "“Please come and stay in my home.”", caption: "An open heart, and an open door.",
            art: { key: "t4w05d1-b", label: "Mon · role-play card — Lydia's open heart and home", desc: "Lydia welcoming Paul and Silas into her home, bolts of dyed cloth stacked around.", shot: "medium, warm interior", motion: "kenburns-right", chars: ["lydia", "paul", "silas"],
              setting: "First-century Roman colony of Philippi in Macedonia: paved Roman streets, stone colonnades, a forum with a magistrates' platform, red-tiled roofs, a river with reeds outside the city gate, people in tunics, togas and draped Greek robes.",
              scene: "In a spacious house lined with shelves of richly dyed cloth, Lydia stands in the doorway with arms open, smiling, welcoming Paul and Silas inside. Her household gathers behind her, and lamplight glows on the folded fabrics." } }
        ],
        narration: "Paul had a puzzle. He and his friend Silas had wanted to take the good news about Jesus to several places, but each time God closed the door. Then one night Paul had a dream. A man from Macedonia, a region across the sea in Greece, was calling, ‘Come over here and help us!’ Paul understood. God was sending them to a new continent. So they sailed at once.\n\nThey arrived in Philippi, a proud Roman city. It was a colony, which means a town run like a little piece of Rome, with Roman soldiers, Roman officials and Roman laws. Paul looked around for the man from his dream. He waited a few days. No man. There wasn’t even a meeting place for God’s people.\n\nOn the Sabbath, the Jewish day of rest and worship, Paul and Silas walked outside the city gate to the river. They hoped to find a place where people prayed. And they did! A small group of women sat in the grass beside the water, praying. It was not at all what Paul had pictured. But he and Silas sat down with them and began to talk about Jesus.\n\nOne of the women was called Lydia. She came from a city called Thyatira, and she sold purple cloth, which was very expensive and worn by rich and important people. She was a successful businesswoman with a big household to look after. She already worshipped the God of Israel. But as she listened to Paul, something happened inside her. The Bible says, ‘The Lord opened her heart,’ and she accepted what Paul was saying. Lydia believed in Jesus!\n\nShe and everyone in her household were baptised, which is a way of showing that you belong to Jesus and have a fresh start. And Lydia didn’t keep her faith on a shelf. Straight away she said, ‘If you think I really do have faith in the Lord, please come and stay in my home.’ And she would not take no for an answer.\n\nThink about it. God’s plan to bring Jesus’ good news into a whole new part of the world began with a few women praying quietly by a river, and one businesswoman with an open heart and an open door.",
        notes: "About 3 minutes. Acts 16:9–10 gives the dream; the Bible doesn’t say Paul was disappointed, so keep that light: he was surprised. Acts 16:14–15 (Lydia, Thyatira, purple cloth, heart opened, household baptised, hospitality) is Scripture. How long they waited before the Sabbath (“a few days”, Acts 16:12) and the group sitting in a circle are lightly imagined framing. Purple dye was costly, so Lydia was likely well off. Acts 16:11–15 has “we” in it because Luke, the author, was travelling with them." },

      { type: "question", id: "m-q1", title: "Where was the prayer meeting?", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "Where did Paul and Silas find Lydia and the other women praying?",
        options: ["In the market square", "By a river outside the city gate", "Inside a big temple", "On a ship"], answer: 1,
        hint: "Answer: B, by a river outside the city gate (Acts 16:13). Follow-up: ‘What did Lydia sell?’ (Expensive purple cloth.) Follow-up 2: ‘What did Lydia do after she believed?’ (She was baptised and invited Paul and Silas to stay at her home.) If silent: re-read the story’s third paragraph." },

      { type: "question", id: "m-q2", title: "Not what he expected", minutes: 1, level: "think", mode: "pair", seconds: 40, skippable: true,
        text: "Paul dreamed of a man from Macedonia, but he met a group of women praying by a river. Why might God surprise us like that?",
        hint: "Good answers: God’s plans are bigger than our pictures; God cares about everyone, not only important people; God was already at work in Philippi before Paul arrived. Follow-up: ‘When did something turn out different from what you expected, but better?’ Follow-up 2: ‘What does this say about trusting God’s guidance?’ If silent: ask who was already praying when Paul arrived." },

      { type: "roleplay", id: "m-rp", title: "Lydia by the River", minutes: 5, ref: "Acts 16:11–15",
        art: { key: "t4w05d1-b" },
        imagined: "Acts 16:13–15 tells us the women prayed by the river, that Lydia’s heart was opened, that her household was baptised, and that she invited Paul and Silas to stay. Lydia’s invitation is Scripture. The friend, the chat about purple cloth, and most of Paul and Silas’s words are imagined, to bring the story to life.",
        actions: ["Everyone: sit in a circle and pretend to pray quietly", "Everyone: splash the river with your hands, then cheer for Lydia’s family"],
        props: ["Optional: a piece of purple cloth for Lydia"],
        characters: [
          { name: "Narrator", color: "#F2C77B", desc: "Tells the story" },
          { name: "Paul", color: "#7BA7D9", desc: "Eager traveller — a little surprised" },
          { name: "Silas", color: "#81C784", desc: "Steady and cheerful friend of Paul" },
          { name: "Lydia", color: "#C5A3E0", desc: "Confident businesswoman with an open heart" },
          { name: "Friend", color: "#B0BEC5", desc: "A woman from Lydia’s household (imagined)" },
          { name: "Everyone", color: "#FFFFFF", desc: "The women praying by the river" }
        ],
        lines: [
          { character: "Narrator", text: "The river outside the city gate of Philippi, on the Sabbath. A few women sit in the grass, praying quietly.", direction: true },
          { character: "Paul", text: "Silas, there’s no meeting hall here. I dreamed of a man from Macedonia. Where is he?", action: "look around, puzzled" },
          { character: "Silas", text: "God brought us to Philippi, Paul. Look: women praying by the river. Let’s sit and listen.", action: "point to the circle" },
          { character: "Lydia", text: "Welcome, travellers. Come and sit. We gather here every Sabbath to pray to the God of Israel.", action: "wave them over" },
          { character: "Friend", text: "Lydia sells the finest purple cloth in Philippi. She came all the way from Thyatira.", action: "whisper proudly" },
          { character: "Lydia", text: "My friend is too kind. Please, tell us your news.", action: "smile, shake head" },
          { character: "Paul", text: "We have good news. God’s promised King has come. His name is Jesus, and he rose from the dead!" },
          { character: "Silas", text: "Jesus forgives everyone who trusts him, and he welcomes us into God’s family." },
          { character: "Everyone", text: "Ooooh! Tell us more!", action: "lean in and listen" },
          { character: "Narrator", text: "As Lydia listened, the Lord opened her heart, and she accepted what Paul was saying." },
          { pause: "Freeze! Lydia’s heart is opening. What do you think she will say next? How do you think she feels?", seconds: 20 },
          { character: "Lydia", text: "I believe in Jesus. I want to belong to him. Will you baptise me?", action: "hands over heart" },
          { character: "Friend", text: "And us too, Lydia. We’ll come with you. Our whole household wants to follow Jesus.", action: "step forward" },
          { character: "Narrator", text: "Lydia and everyone in her household were baptised in the river." },
          { character: "Everyone", text: "Splash! Hooray! Welcome to God’s family!", action: "splash hands, cheer quietly" },
          { character: "Lydia", text: "If you think I really do have faith in the Lord, please come and stay in my home." },
          { character: "Paul", text: "Lydia, we couldn’t put you to any trouble.", action: "shake head politely" },
          { character: "Lydia", text: "It’s no trouble at all. My door is open. I won’t take no for an answer!", action: "arms folded, grinning" },
          { character: "Silas", text: "Paul, God has already given us a friend and a home in Philippi. Let’s say yes.", action: "nudge Paul" },
          { character: "Paul", text: "You’re right. God knew exactly where to send us. It began with a river, a prayer and an open door." },
          { character: "Narrator", text: "A church was born in Philippi. And this was only the beginning." },
          { character: "Everyone", text: "Open hearts! Open doors!", action: "open both hands wide" }
        ],
        debrief: [
          { level: "look", text: "What did the Bible say happened to Lydia’s heart, and what did she do next?", hint: "The Lord opened her heart. She believed, was baptised with her household, and invited Paul and Silas to stay in her home." },
          { level: "think", text: "Why do you think Lydia’s first move was to open her home?", hint: "Faith shows up in love and kindness. Lydia shared what she had. She was thankful and wanted to look after God’s messengers." }
        ],
        notes: "Imagined retelling around Scripture. Lydia’s invitation (Acts 16:15) and the heart-opening (Acts 16:14) are Scripture. The Friend and the details of the conversation are imagined. Keep the singing and splashing joyful but short, so the pause lands." },

      { type: "question", id: "m-q3", title: "Who opens hearts?", minutes: 1, level: "dig", mode: "discuss", seconds: 40,
        text: "The Bible says “the Lord opened her heart.” Why do we need God’s help, and not just good words, for someone to believe in Jesus?",
        hint: "Ideas: only God changes what is inside a person; Paul could speak but God opened her heart; we can share Jesus but we can’t force anyone; this takes pressure off us and gives us a reason to pray. Follow-up: ‘Who might you pray for, asking God to open their heart?’ Follow-up 2: ‘What can we do that still helps?’ If silent: ask what Paul did and what God did." },

      { type: "apply", id: "m-apply", title: "Head · Heart · Hands", minutes: 1,
        head: "God sent Paul and Silas across the sea to Philippi. He opened Lydia’s heart, and she opened her home.",
        heart: "God, thank you that you open hearts. Please open mine to listen to you.",
        hands: "Look for one chance to open a door today: invite someone to sit with you, join your game or share your lunch table.",
        settings: ["school", "home", "sport"],
        notes: "Keep it small and doable. Lydia’s welcome was ordinary kindness, which God used." },

      { type: "scene", id: "m-scene", title: "By the river", minutes: 0.5, optional: true,
        art: { key: "t4w05d1-a" },
        boxes: [
          { text: "The Lord opened her heart.", pos: "tl", style: "speech" },
          { text: "A few women, a quiet river, and God’s big plan.", pos: "br", style: "caption" }
        ] },

      { type: "verse", id: "m-verse", title: "Memory verse peek", minutes: 1, optional: true, activity: "echo",
        notes: "Introduce Acts 16:31. Echo each chunk: say it, they say it back. Tell them: we’ll hear who asks the question behind this answer on Wednesday." },

      { type: "prayer", id: "m-pray", title: "Joy in trouble — open hands", minutes: 3, mood: "calm", style: "hands",
        tip: "All week we practise joy in trouble. Start with open hands, like Lydia’s open heart and open door: open hands show we are ready to listen to God and to give thanks.",
        opening: "Sit comfortably. Hold your hands out in front of you, open, like an open door. Take a slow breath.",
        phases: [
          { name: "Wow", lead: "Look at your open hands. God opened Lydia’s heart. He opens hearts and doors.",
            prompts: ["God, you led Paul and Silas across the sea to exactly the right place.", "God, you opened Lydia’s heart, and you are good at opening doors."],
            starter: "Wow, God, you are…", seconds: 35, aloud: "Wow, God — you lead us and you open hearts and doors!" },
          { name: "Sorry", lead: "Turn your hands over. Be honest with God about the doors we close.",
            prompts: ["Sorry for the times I didn’t welcome someone new.", "Sorry for the times my heart wasn’t open to listen to you."],
            starter: "God, I’m sorry for…", seconds: 30, aloud: "God, we’re sorry for the times we haven’t been open and welcoming." },
          { name: "Thanks", lead: "Palms up again. Thank God for the people who opened a door for you.",
            prompts: ["Thank you for people who welcomed me when I was new.", "Thank you for Lydia, who said yes to Jesus and gave Paul and Silas a home."],
            starter: "Thank you, God, for…", seconds: 30, aloud: "Thank you, God, for the people who open their hearts and homes to us." },
          { name: "Please", lead: "Hold your hands out again. Ask God to open one heart and one door.",
            prompts: ["Please open the heart of someone I know who needs you.", "Please help me welcome someone new this week."],
            starter: "Please, God, open…", seconds: 35, aloud: "Please, God, open hearts and doors, and help us welcome people." }
        ],
        closing: "Close your hands gently, then open them again. Everyone: Amen.",
        notes: "Keep it gentle and short. Some students may be new to the school or the country; keep the focus on being welcomed and welcoming, without singling anyone out." }
    ] },

  /* ======================= TUESDAY ======================= */
  { label: "Tuesday", theme: "Locked in the Inner Cell", roleplay: false, mood: "night",
    learningIntentions: [
      "We are learning why Paul and Silas ended up in prison in Philippi.",
      "We are learning who wanted what in the forum, and how the officials treated Paul and Silas unfairly.",
      "I can say honestly how hard it is when we do the right thing and things still go wrong."
    ],
    assessment: "Listen for students explaining that Paul set a slave girl free in Jesus’ name, that her owners were angry because they lost money, that Paul and Silas were put in prison without a fair hearing, and that being in the right place doesn’t guarantee an easy road.",
    resources: ["Screen", "Paper and pens for the prayer writing time"],
    whereToNext: "Tomorrow: midnight in the prison. Two men sing, the ground shakes, and a jailer asks the biggest question of his life.",
    slides: [
      { type: "title", id: "t-title", title: "Locked in the Inner Cell", minutes: 0.5, kicker: "Term 4 · Week 5", sub: "Midnight Songs in Prison",
        art: { key: "t4w05d2-b" }, notes: "Let the splash play. Today is the hardest day of the week. Keep your voice calm and steady." },

      { type: "hook", id: "t-recap", title: "Recap", minutes: 1, style: "recap",
        text: "Yesterday we met Lydia by the river, whose heart the Lord opened.",
        ask: "What did Lydia do after she believed in Jesus?",
        hint: "She was baptised with her household and opened her home to Paul and Silas. Then: ‘Today things get hard. Paul and Silas are doing exactly what God asked, and they still end up in trouble.’" },

      { type: "scripture", id: "t-scr", title: "Acts 16:17, 24", minutes: 1, ref: "Acts 16:17, 24", version: "CEV",
        lines: [
          { text: "These men are servants of the Most High God! They are telling you how to be saved.", ref: "Acts 16:17" },
          { text: "He put them deep inside the jail.", ref: "Acts 16:24" }
        ],
        emphasis: ["servants of the Most High God", "how to be saved", "deep inside the jail"],
        notes: "Acts 16:17 is what the slave girl shouted: true words, but Paul didn’t want that kind of advertising. Saved = rescued by God. Acts 16:24 says the jailer put them in the inner cell with their feet fastened; we say it plainly and move on." },

      { type: "story", id: "t-story", title: "Trouble in Philippi", minutes: 3.5, transition: "page", mood: "night",
        beats: [
          { text: "A slave girl, and angry owners.", caption: "Paul sets her free in Jesus’ name, and the men who earned money from her are furious." },
          { text: "Dragged to the forum.", caption: "No fair hearing. Just shouting.",
            art: { key: "t4w05d2-a", label: "Tue · story — dragged to the forum", desc: "Paul and Silas being dragged before the magistrates by angry men while a crowd shouts.", shot: "wide, low-angle", motion: "kenburns-left", chars: ["paul", "silas"],
              setting: "First-century Roman colony of Philippi in Macedonia: paved Roman streets, stone colonnades, a forum with a magistrates' platform, red-tiled roofs, a river with reeds outside the city gate, people in tunics, togas and draped Greek robes.",
              scene: "In the stone forum, angry slave-owners haul Paul and Silas by the arms toward a raised platform where two Roman magistrates stand in togas. A shouting crowd surges around them, fists raised, all in heavy shadow beneath stormy clouds." } },
          { text: "The inner cell.", caption: "The darkest part of the prison. Feet fastened in heavy wooden stocks.", shout: true,
            art: { key: "t4w05d2-b", label: "Tue · locked in the inner cell", desc: "The jailer slamming a heavy door on the dark inner cell, keys in hand.", shot: "medium, silhouette", motion: "kenburns-in", chars: ["jailer", "paul", "silas"],
              setting: "First-century Roman colony of Philippi in Macedonia: paved Roman streets, stone colonnades, a forum with a magistrates' platform, red-tiled roofs, a river with reeds outside the city gate, people in tunics, togas and draped Greek robes.",
              scene: "The burly jailer pulls shut a heavy iron-banded wooden door on the inner prison, keys jangling at his belt, his oil lamp throwing a hard light across the stone corridor. Through the closing gap, Paul and Silas sit in deep darkness." } },
          { text: "Right place. Right thing. Still hard.", caption: "And God was there in the dark." }
        ],
        narration: "Yesterday Lydia opened her door. Today the story takes a hard turn.\n\nPaul, Silas and their friends kept going to the place of prayer by the river. One day a slave girl began following them. She had a spirit in her that seemed to let her tell people what would happen in the future, and her owners made a lot of money from her. For days she followed Paul and Silas, shouting, ‘These men are servants of the Most High God! They are telling you how to be saved!’ What she said was true, but Paul didn’t want people to hear Jesus’ message mixed up with that. In the end, he turned and ordered the spirit, in the name of Jesus Christ, to leave her. At once it was gone.\n\nThat was wonderful for the girl. She was set free. But her owners were furious. The way they made their money had just stopped. So they grabbed Paul and Silas and dragged them to the forum, the big open square in the middle of the city, where the city officials, called magistrates, were in charge. ‘These men are Jews, and they’re causing trouble in our city!’ they shouted. ‘They are teaching ways we Romans are not allowed to follow!’ The crowd joined in. Nobody asked Paul and Silas a single question.\n\nThe magistrates gave an order. Paul and Silas were to be punished and then locked up. We won’t go through what happened. It was unfair, and it was hard. The jailer was told to guard them carefully, so he took them to the inner cell, the darkest part of the prison, and fastened their feet in heavy wooden blocks called stocks. Then he locked the door and went away.\n\nNow stop and think. Paul and Silas had come to Philippi because God sent them. They had done a kind thing. And now here they were, tired and sore, in the dark.\n\nIf you were Paul, what would you be thinking? Maybe, ‘God, why did you send us here?’ Those are honest feelings, and the Bible lets people tell God exactly how they feel. Jesus himself said that his followers would have trouble in this world, but he also promised to be with them.\n\nLuke doesn’t tell us that Paul and Silas gave up. Tomorrow we’ll find out what they did at midnight.\n\nFor today, remember this: being in the right place, doing the right thing, doesn’t mean nothing hard will ever happen. But it does mean God is with you in the dark.",
        notes: "About 3½ minutes. SENSITIVE: Acts 16:22–23 describes a harsh public beating. We say only that they were punished, that it was unfair and hard, and we move on. Do not describe the method, pain or injuries. Some students may have family from places where Christians are still treated unfairly. Reassure them calmly: this is a true story, God was with Paul and Silas, and it ends well. The slave girl: the Bible says she had a spirit that let her tell fortunes. Say it plainly and briefly; the key point is that Jesus’ name set her free and her owners cared only about money. Scripture here: Acts 16:16–24. The words of the owners’ accusation are paraphrased from Acts 16:20–21. Jesus’ words about trouble are John 16:33, paraphrased." },

      { type: "dig", id: "t-dig", title: "Who wanted what?", minutes: 2,
        prompt: "There were many people in the forum that day. What was each one thinking about?",
        columns: ["Who", "What they wanted"],
        items: [
          { left: "The slave girl’s owners", right: "Their money back, and revenge" },
          { left: "The angry crowd", right: "To join in and not be left out" },
          { left: "The magistrates", right: "Quiet streets, fast, without asking questions" },
          { left: "Paul and Silas", right: "To keep telling people about Jesus, and to trust God" }
        ],
        reveal: "Almost everyone was thinking about themselves. Paul and Silas were thinking about God.",
        notes: "Reveal row by row. Point out how much was unfair: no questions, no fair hearing, no justice. Say it calmly. We’ll find out on Thursday that Paul and Silas were Roman citizens, which makes it even more unfair." },

      { type: "question", id: "t-q1", title: "Why the anger?", minutes: 1, level: "look", mode: "finish", seconds: 20,
        text: "Finish the sentence: “The slave girl’s owners were furious because they had lost their ________.”",
        reveal: "“…money.” Their way of making money stopped when the girl was set free.",
        hint: "Answer: money, or their way of making money. Follow-up: ‘What did Paul do that set the girl free?’ (He ordered the spirit to leave in the name of Jesus Christ.) Follow-up 2: ‘Where did the crowd drag Paul and Silas?’ (To the forum, to the magistrates.) If silent: re-read the story’s third paragraph." },

      { type: "question", id: "t-q2", title: "Honest feelings", minutes: 1.5, level: "think", mode: "silent", seconds: 40,
        text: "Paul and Silas did what God asked and still ended up in prison. What might they have felt, and is it okay to tell God that?",
        hint: "Good answers: scared, confused, angry, tired, disappointed; yes, it is okay, because the Bible is full of honest prayers, and God can handle our real feelings. Follow-up: ‘When did something hard happen to you even though you did the right thing?’ Follow-up 2: ‘What could you say to God then?’ If silent: give 20 seconds of quiet thinking, then ask for one word." },

      { type: "question", id: "t-q3", title: "Does God’s presence mean no trouble?", minutes: 1.5, level: "dig", mode: "vote", seconds: 30, skippable: true,
        text: "Agree or disagree: “If God is with you, nothing hard will happen to you.”",
        options: ["Agree", "Disagree"],
        hint: "Disagree: God was with Paul and Silas, and they were still locked up. Jesus said his followers would have trouble, and he promised to be with us in it. Follow-up: ‘What does God’s presence do for us in hard times?’ Follow-up 2: ‘Who is someone who helped you feel not alone in a hard time?’ If silent: ask what Paul and Silas still had in that cell." },

      { type: "apply", id: "t-apply", title: "Head · Heart · Hands", minutes: 2,
        head: "Doing the right thing doesn’t mean things will always go well, but God is with us in hard places.",
        heart: "God, when things are hard, help me remember you are with me.",
        hands: "Write one hard thing you or someone you know is facing. Fold the paper and put it somewhere safe. Tomorrow we’ll find out what Paul and Silas did with their hard night.",
        settings: ["school", "home", "bedtime"],
        notes: "Keep it private; students needn’t share. Be gentle: some students are going through real difficulty. Don’t push anyone to share a specific problem." },

      { type: "scene", id: "t-scene", title: "Deep inside the jail", minutes: 1, optional: true,
        art: { key: "t4w05d2-b" },
        boxes: [
          { text: "Right place. Right thing. Still hard.", pos: "tl", style: "caption" },
          { text: "But God was there in the dark.", pos: "br", style: "shout" }
        ] },

      { type: "verse", id: "t-verse", title: "Build the verse", minutes: 1, activity: "build",
        notes: "Build Acts 16:31 chunk by chunk. Tomorrow we hear the question that this verse answers." },

      { type: "prayer", id: "t-pray", title: "Joy in trouble — write it down", minutes: 3, mood: "calm", style: "write",
        tip: "In a dark prison, Paul and Silas still prayed. Today we write: tell God one honest thing about a hard time, and then one thing to thank him for. Honest first, then thankful.",
        opening: "Take your pen and paper. At the top, write: “God, you are with me in the dark.”",
        phases: [
          { name: "Wow", lead: "Write one line about who God is when things are hard.",
            prompts: ["God, you were with Paul and Silas in the inner cell.", "God, you see everything, even in the darkest place, and you never leave."],
            starter: "God, you are…", seconds: 35, aloud: "God, you are with us even in the dark." },
          { name: "Sorry", lead: "Silently: are there times you complain without telling God, or turn away from him when things are hard?",
            prompts: ["Sorry for the times I forgot you were with me in a hard time.", "Sorry for the times I was unfair to someone else, like the crowd in the forum."],
            starter: "God, I’m sorry for…", seconds: 25, aloud: "God, we’re sorry for forgetting you are with us when things are hard." },
          { name: "Thanks", lead: "Write three things you’re thankful for, even on a hard day.",
            prompts: ["Thank you that the slave girl was set free in Jesus’ name.", "Thank you for the people who are on my side when things are hard."],
            starter: "Thank you for…", seconds: 40, aloud: "Thank you, God, for the good things you give us, even on hard days." },
          { name: "Please", lead: "Write one hard thing you’re facing, and ask God for help. Then one for someone else.",
            prompts: ["Please be with people who are treated unfairly today.", "Please give me joy and peace in the hard thing I’m facing."],
            starter: "Please, God, help…", seconds: 35, aloud: "Please, God, be with people who are treated unfairly, and help us trust you." }
        ],
        closing: "Fold your page and keep it somewhere safe. Everyone: Amen.",
        notes: "Students keep their writing private. Remind them that God can handle honest words. Some students may be facing something very hard; stay near and be available afterwards. Persecuted Christians today are prayed for gently, without scary detail." }
    ] },

  /* ======================= WEDNESDAY ======================= */
  { label: "Wednesday", theme: "Earthquake at Midnight", roleplay: true, mood: "storm",
    learningIntentions: [
      "We are learning what Paul and Silas did at midnight in the prison, and what happened next.",
      "We are learning how the jailer asked the biggest question of his life, and what Paul answered.",
      "I can explain what it means to “have faith in the Lord Jesus” (Acts 16:31)."
    ],
    assessment: "Listen for students recalling that Paul and Silas prayed and sang at midnight, that an earthquake opened the doors, that no prisoner ran away, that the jailer asked what he must do to be saved, and that Paul told him to have faith in the Lord Jesus.",
    resources: ["Screen", "Optional: a dim lamp or torch for the role-play", "Optional: a tray to rattle for earthquake sounds"],
    whereToNext: "Tomorrow: a surprise at dawn, a very good meal, and what this story shows us about God in hard times.",
    slides: [
      { type: "title", id: "w-title", title: "Earthquake at Midnight", minutes: 0.5, kicker: "Term 4 · Week 5", sub: "Midnight Songs in Prison",
        art: { key: "t4w05d3-a" }, notes: "Let the splash play. Remind students that yesterday ended with two men in the dark." },

      { type: "hook", id: "w-hook", title: "What would you do?", minutes: 1,
        text: "Imagine it’s midnight, you’re cold, tired and stuck somewhere you didn’t choose to be. What would you do?",
        ask: "What do people usually do when they’re stuck in a bad situation? What would you not expect them to do?",
        hint: "Take three answers: complain, cry, sleep, panic, play games, or pray. Then: ‘Yesterday Paul and Silas were locked in the inner cell. Today we find out what they did at midnight, and it is not what anyone expected.’" },

      { type: "scripture", id: "w-scr", title: "Acts 16:25–26, 30–31", minutes: 1, ref: "Acts 16:25–31", version: "CEV",
        lines: [
          { text: "About midnight Paul and Silas were praying and singing hymns to God, while the other prisoners listened.", ref: "Acts 16:25" },
          { text: "Suddenly a strong earthquake shook the jail to its foundations. The doors flew open, and everyone’s chains came loose.", ref: "Acts 16:26" },
          { text: "What must I do to be saved?", ref: "Acts 16:30" },
          { text: "Have faith in the Lord Jesus and you will be saved! This is also true for everyone who lives in your house.", ref: "Acts 16:31" }
        ],
        emphasis: ["praying and singing", "earthquake", "What must I do to be saved?", "Have faith in the Lord Jesus"],
        notes: "Acts 16:31 is our memory verse. The jailer’s question and Paul’s answer are the heart of the lesson. Hymns here were songs of praise to God, probably from the psalms." },

      { type: "story", id: "w-story", title: "Midnight songs", minutes: 3, transition: "page", mood: "storm",
        beats: [
          { text: "Midnight. Singing.", caption: "In the dark, in the stocks, they pray and sing — and the prisoners listen." },
          { text: "The ground shakes.", caption: "Doors burst open. Chains fall loose.", shout: true,
            art: { key: "t4w05d3-a", label: "Wed · story — the earthquake", desc: "The prison shaking at midnight, doors bursting open and chains falling loose.", shot: "wide, speed lines", motion: "kenburns-in", chars: ["paul", "silas"],
              setting: "First-century Roman colony of Philippi in Macedonia: paved Roman streets, stone colonnades, a forum with a magistrates' platform, red-tiled roofs, a river with reeds outside the city gate, people in tunics, togas and draped Greek robes.",
              scene: "A violent earthquake shakes the prison at midnight: stone dust pours from the ceiling, cell doors burst open and chains drop loose from the walls, shown with jagged speed lines. Paul and Silas look up in the middle of it, calm and amazed." } },
          { text: "“Don’t hurt yourself! We are all here!”", caption: "Nobody had run away." },
          { text: "“What must I do to be saved?”", caption: "The jailer on his knees, lamp in hand.",
            art: { key: "t4w05d3-b", label: "Wed · role-play card — \"What must I do to be saved?\"", desc: "The trembling jailer kneeling before Paul and Silas with his lamp, asking how to be saved.", shot: "medium, lamp light", motion: "kenburns-right", chars: ["jailer", "paul", "silas"],
              setting: "First-century Roman colony of Philippi in Macedonia: paved Roman streets, stone colonnades, a forum with a magistrates' platform, red-tiled roofs, a river with reeds outside the city gate, people in tunics, togas and draped Greek robes.",
              scene: "The jailer kneels trembling on the dusty stone floor before Paul and Silas, his oil lamp set down beside him lighting their faces from below. Paul leans forward with an open hand, gently answering him, and Silas smiles." } },
          { text: "“Have faith in the Lord Jesus.”", caption: "And the whole household believes.", shout: true }
        ],
        narration: "It is midnight in the inner prison at Philippi. The air is cold and heavy. Somewhere a prisoner coughs. Paul and Silas sit in the dark with their feet in the stocks, tired and sore.\n\nAnd then something unexpected happens. They begin to pray. And then they begin to sing. Not quietly in their heads, but out loud: hymns, songs of praise to God, in the middle of the night, in a prison. And the Bible tells us something wonderful: ‘the other prisoners listened.’\n\nImagine being one of those prisoners. You have heard shouting and crying in this place every night. Now you hear singing.\n\nSuddenly the ground begins to shake. A strong earthquake shakes the prison right down to its foundations. The doors fly open, and everyone’s chains come loose!\n\nThe jailer jolts awake. He sees the doors wide open and thinks every prisoner has escaped. He knows what that means for him. In those days a Roman jailer who lost his prisoners could pay with his own life. He is in despair, sure that everything is over.\n\nThen out of the darkness comes a loud voice. It is Paul. ‘Don’t hurt yourself! We are all here!’\n\nNobody had run. Think about that. The doors were open, the chains were off, and every single prisoner stayed. Maybe it was because of the songs, or maybe God held them there. The Bible doesn’t say. But the jailer is amazed. He calls for lights, rushes in, trembling all over, and falls on his knees in front of Paul and Silas. Then he leads them outside and asks the biggest question of his life: ‘What must I do to be saved?’\n\nSaved. The jailer had just been saved from one danger, but he could feel a bigger rescue was what he needed: rescue from being far from God. And Paul gives the shortest, clearest answer in the Bible: ‘Have faith in the Lord Jesus and you will be saved! This is also true for everyone who lives in your house.’\n\nNot ‘do ten hard things’. Not ‘be good enough’. Trust Jesus. Paul and Silas told the Lord’s message to the jailer and everyone in his house. And right there, in the middle of the night, the jailer cared for the two men he had locked up, and he and his whole family were baptised.\n\nWhere did all this begin? In the dark, with two tired men singing.",
        notes: "About 3 minutes. Acts 16:25–34 is the source. SENSITIVE: in Acts 16:27 the jailer, thinking the prisoners had escaped, was about to take his own life. We say only that he was in despair and afraid, and we do not mention how. If a student raises it or seems affected, stay calm, reassure them, and follow your school’s pastoral procedures. A Roman jailer risked death if prisoners escaped (see Acts 12:19 and 16:27). Why nobody ran is not stated; we say so honestly. “Saved” = rescued, here from sin and from being cut off from God. The jailer may have first meant rescue from danger; Paul’s answer points to the bigger rescue. The shaking and the songs are Scripture; sounds and the smell of the cell are lightly imagined." },

      { type: "question", id: "w-q1", title: "Midnight activity", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "What were Paul and Silas doing at midnight in the prison?",
        options: ["Sleeping", "Praying and singing hymns", "Planning an escape", "Arguing with each other"], answer: 1,
        hint: "Answer: B, praying and singing hymns to God (Acts 16:25). Follow-up: ‘Who was listening?’ (The other prisoners.) Follow-up 2: ‘What happened suddenly?’ (A strong earthquake; doors flew open and chains came loose.) If silent: re-read the first scripture line on the screen." },

      { type: "roleplay", id: "w-rp", title: "Earthquake at Midnight", minutes: 5, ref: "Acts 16:25–34",
        art: { key: "t4w05d3-b" },
        imagined: "Acts 16:25–34 gives the singing, the earthquake, Paul’s call, the jailer’s question and Paul’s answer, which are Scripture. The prisoner, the exact wording of most lines, the jailer’s apology and the song words are imagined, to bring the story to life.",
        actions: ["Everyone: sing or hum a gentle song softly, like Paul and Silas", "Everyone: rumble, stamp and rattle for the earthquake, then freeze"],
        props: ["Optional: a dim torch as the jailer’s lamp"],
        characters: [
          { name: "Narrator", color: "#F2C77B", desc: "Tells the story" },
          { name: "Paul", color: "#7BA7D9", desc: "Calm, tired and trusting" },
          { name: "Silas", color: "#81C784", desc: "Steady friend who loves to sing" },
          { name: "Jailer", color: "#E57373", desc: "Gruff Roman guard, then shaken and humbled" },
          { name: "Prisoner", color: "#B0BEC5", desc: "A listening prisoner in the cell (imagined)" },
          { name: "Everyone", color: "#FFFFFF", desc: "The singing, then the earthquake" }
        ],
        lines: [
          { character: "Narrator", text: "Midnight in the inner cell of the prison at Philippi. Paul and Silas sit in the dark, feet in heavy stocks.", direction: true },
          { character: "Prisoner", text: "Is anyone else awake? I can’t sleep in this cold, dark place.", action: "whisper, shivering" },
          { character: "Silas", text: "I’m awake. It’s been a long, hard day, Paul. Shall we pray?" },
          { character: "Paul", text: "Yes. God is here with us, even in this cell. Let’s tell him how great he is." },
          { character: "Everyone", text: "Praise God! Praise God! Praise God!", action: "sing or hum softly" },
          { character: "Prisoner", text: "Singing? In here? I’ve never heard anything like it. I’m listening.", action: "lean closer" },
          { character: "Narrator", text: "About midnight Paul and Silas were praying and singing hymns to God, while the other prisoners listened." },
          { character: "Everyone", text: "Rumble! Rattle! Shake!", action: "stamp feet and shake, then freeze" },
          { character: "Narrator", text: "Suddenly a strong earthquake shook the jail to its foundations. The doors flew open, and everyone’s chains came loose." },
          { character: "Jailer", text: "Wake up! The doors are open! They must all have escaped. This is the end for me!", action: "frantic, hands on head" },
          { character: "Paul", text: "Don’t hurt yourself! We are all here!", action: "call out loudly" },
          { pause: "Freeze! The doors are open and the chains are off. Why do you think nobody ran away? How does the jailer feel?", seconds: 20 },
          { character: "Jailer", text: "Bring a light! Is everyone here? Every single one?", action: "hold up lamp, trembling" },
          { character: "Prisoner", text: "We’re all here. We heard those songs. We couldn’t leave.", action: "shake head, amazed" },
          { character: "Jailer", text: "Sirs, what must I do to be saved?", action: "kneel, shaking" },
          { character: "Silas", text: "Have faith in the Lord Jesus and you will be saved! This is also true for everyone who lives in your house." },
          { character: "Paul", text: "Bring your family. We’ll tell you all about the Lord Jesus, who loves you.", action: "hold out a hand" },
          { character: "Jailer", text: "First let me care for you. You were treated badly. I’m so sorry.", action: "bow head" },
          { character: "Narrator", text: "That same night the jailer and his whole family were baptised. Then he took them home and gave them a meal." },
          { character: "Jailer", text: "Come in, sit, eat! I have never felt so glad. I have faith in God now!", action: "beaming" },
          { character: "Everyone", text: "Joy in the dark! Praise the Lord!", action: "hands up, cheer quietly" }
        ],
        debrief: [
          { level: "look", text: "What did Paul and Silas do at midnight, and what happened next?", hint: "They prayed and sang hymns while the prisoners listened. Then an earthquake opened the doors and loosened every chain." },
          { level: "think", text: "Why do you think the jailer asked, “What must I do to be saved?”", hint: "He had just been saved from danger, and he saw something about Paul and Silas that he wanted. He knew he needed a bigger rescue, and he asked the right question." }
        ],
        notes: "Imagined retelling around Scripture. Paul’s call (“We are all here”), the jailer’s question and Paul’s answer are from Acts 16. The prisoner and the jailer’s lines before and after are imagined. Do not act out the jailer’s despair beyond a worried, frantic look; keep it light. Keep the earthquake short and fun and stop the noise before the pause." },

      { type: "question", id: "w-q2", title: "Songs in the dark", minutes: 1.5, level: "think", mode: "write", seconds: 45,
        text: "Paul and Silas sang in a prison. What might singing have done for them, and for the people listening?",
        hint: "Good answers: it reminded them God was with them; it kept fear away; it showed the prisoners a different way to be; it made their trust visible. Follow-up: ‘What song, prayer or verse helps you in a hard time?’ Follow-up 2: ‘Who might be listening to you when things are hard?’ If silent: ask what the other prisoners did while they sang." },

      { type: "question", id: "w-q3", title: "Why didn’t they escape?", minutes: 1, level: "dig", mode: "pair", seconds: 40, skippable: true,
        text: "The doors were open and the chains were off, but Paul stayed and told the jailer, “We are all here.” Why might Paul have stayed?",
        hint: "Ideas: to save the jailer’s life; because he trusted God, not running away; because Paul wanted the jailer to hear about Jesus; because love for others mattered more than freedom. Follow-up: ‘What did staying make possible?’ (The jailer’s whole household believed.) Follow-up 2: ‘When has kindness meant staying put?’ If silent: ask what would have happened to the jailer if they had left." },

      { type: "apply", id: "w-apply", title: "Head · Heart · Hands", minutes: 1,
        head: "Paul and Silas prayed and sang even in the dark, and God used it to bring a whole family to Jesus.",
        heart: "Jesus, I trust you, and I want my whole family to know you.",
        hands: "Next time something is hard this week, stop and thank God for three things before you do anything else. Say them out loud or in your head.",
        settings: ["home", "school", "bedtime"],
        notes: "This is Thursday’s challenge, previewed. Keep it small: three real thank-yous, even tiny ones." },

      { type: "scene", id: "w-scene", title: "The jailer’s question", minutes: 0.5, optional: true,
        art: { key: "t4w05d3-b" },
        boxes: [
          { text: "“What must I do to be saved?”", pos: "tl", style: "speech" },
          { text: "“Have faith in the Lord Jesus.”", pos: "br", style: "shout" }
        ] },

      { type: "verse", id: "w-verse", title: "Verse with actions", minutes: 1, optional: true, activity: "actions",
        notes: "Actions for Acts 16:31: heart, arms up, point, sweep, pat the ground, roof." },

      { type: "prayer", id: "w-pray", title: "Joy in trouble — a prayer-song", minutes: 3, mood: "calm", style: "psalm",
        tip: "Paul and Silas sang at midnight. Praying like a song means saying each line slowly, and then letting it ring. We pray one line at a time, and the class repeats it back.",
        opening: "Sit or stand tall. We’re going to pray like a song, line by line. I’ll say a line, and you say it back, quietly or out loud.",
        phases: [
          { name: "Wow", lead: "Say it back, line by line, like a song in the dark.",
            prompts: ["God, you are with us even at midnight.", "God, you can shake a prison and set the doors wide open."],
            starter: "Wow, God, you are…", seconds: 35, aloud: "Wow, God — you are with us in the dark, and you are stronger than any prison!" },
          { name: "Sorry", lead: "Silently, tell God about a time you sang or smiled on the outside but didn’t trust him inside, or about a time you forgot about him in a hard moment.",
            prompts: ["Sorry for the times I only talk to you when things are easy.", "Sorry for the times I gave up hoping when things got dark."],
            starter: "God, I’m sorry for…", seconds: 25, aloud: "God, we’re sorry for the times we forget you in hard times." },
          { name: "Thanks", lead: "Thank God the way Paul and Silas did, even in a hard place.",
            prompts: ["Thank you that no one is ever alone in a dark place, because you are there.", "Thank you for the jailer’s family, and for everyone who came to know Jesus that night."],
            starter: "Thank you, God, for…", seconds: 30, aloud: "Thank you, God, that you are with us when it is dark." },
          { name: "Please", lead: "Ask God to help someone who is in a dark place right now.",
            prompts: ["Please be with people who are in prison or treated unfairly, and bring them peace.", "Please give me joy and trust in a hard time, like Paul and Silas."],
            starter: "Please, God, be with…", seconds: 40, aloud: "Please, God, be with people in dark places, and give us your joy." }
        ],
        closing: "Let’s finish with one soft “Amen”, like the last note of a song.",
        notes: "Don’t worry if the “song” is just spoken lines; the point is slow, shared, repeated words. Acts 16:25 says hymns; Jewish people of the time often sang psalms, though Luke doesn’t say which. Pray for people who are treated unfairly for their faith without scary detail; some students may have family in places where this is real." }
    ] },

  /* ======================= THURSDAY ======================= */
  { label: "Thursday", theme: "Joy in Hard Times", roleplay: false, mood: "dawn",
    learningIntentions: [
      "We are learning how the story ended, and what Paul’s surprise showed the Philippian officials.",
      "We are learning what this story shows us about God in hard times, and how Paul later wrote about joy.",
      "I can choose to thank God for three things when something is hard."
    ],
    assessment: "Students can retell the week’s story in order, explain that God was present with Paul and Silas in the prison, say that Paul’s joy came from the Lord and not from easy circumstances, and recite Acts 16:31.",
    resources: ["Screen", "Take-home challenge cards", "Pens"],
    whereToNext: "Next week: Ordinary Heroes Who Served. Priscilla, Aquila, Timothy and Barnabas show how ordinary people helped spread the good news.",
    slides: [
      { type: "title", id: "th-title", title: "Joy in Hard Times", minutes: 0.5, kicker: "Term 4 · Week 5", sub: "Midnight Songs in Prison",
        art: { key: "t4w05d4-b" }, notes: "Let the splash play." },

      { type: "review", id: "th-review", title: "Put it in order", minutes: 2.5, format: "order",
        prompt: "Put this week’s story in order!",
        items: ["Lydia’s heart is opened", "The slave girl is set free", "Dragged to the forum", "Locked in the inner cell", "Midnight singing", "Earthquake", "The jailer asks, “What must I do to be saved?”"],
        hint: "Students call out the next event; click to place it. Ask: ‘Which part happened by a river? Which part happened in the dark?’ Then: ‘Where do you see God in each part?’",
        notes: "Cards start scrambled." },

      { type: "scripture", id: "th-scr", title: "Philippians 4:4, 6–7", minutes: 1, ref: "Philippians 4:4–7", version: "CEV",
        lines: [
          { text: "Always be glad because of the Lord! I will say it again: Be glad.", ref: "Philippians 4:4" },
          { text: "Don’t worry about anything, but pray about everything. With thankful hearts offer up your prayers and requests to God.", ref: "Philippians 4:6" },
          { text: "Then, because you belong to Christ Jesus, God will bless you with peace that no one can completely understand.", ref: "Philippians 4:7" }
        ],
        emphasis: ["Always be glad", "pray about everything", "thankful hearts", "peace"],
        notes: "Paul wrote these words in a letter to the church at Philippi, years after this story, and he wrote it while in prison. Being glad because of the Lord is different from pretending to feel happy: it is knowing who is with you." },

      { type: "story", id: "th-story", title: "Dawn and a surprise", minutes: 2, transition: "page", mood: "dawn",
        beats: [
          { text: "The jailer’s table.", caption: "A washed pair of hands, a meal, and a family full of joy.",
            art: { key: "t4w05d4-a", label: "Thu · the jailer's family", desc: "The jailer washing Paul and Silas's wounds and then sharing a meal with them and his family at night.", shot: "medium wide, warm", motion: "kenburns-out", chars: ["jailer", "paul", "silas"],
              setting: "First-century Roman colony of Philippi in Macedonia: paved Roman streets, stone colonnades, a forum with a magistrates' platform, red-tiled roofs, a river with reeds outside the city gate, people in tunics, togas and draped Greek robes.",
              scene: "In the jailer's home late at night, the whole family sits around a low table sharing bread with Paul and Silas, everyone smiling. The jailer, sleeves rolled up, sets down a water bowl and cloth; children peek from behind their mother." } },
          { text: "“Let those men go!”", caption: "Paul: “We are Roman citizens. Let the officials come themselves.”" },
          { text: "They walked out with their heads held high.", caption: "Then straight to Lydia’s house.",
            art: { key: "t4w05d4-b", label: "Thu · joy in hard times", desc: "Paul and Silas walking out of the prison gate at dawn, heads held high, toward Lydia's house.", shot: "wide, dawn", motion: "kenburns-up", chars: ["paul", "silas", "lydia"],
              setting: "First-century Roman colony of Philippi in Macedonia: paved Roman streets, stone colonnades, a forum with a magistrates' platform, red-tiled roofs, a river with reeds outside the city gate, people in tunics, togas and draped Greek robes.",
              scene: "At sunrise, Paul and Silas walk out through the open prison gate with heads held high, the embarrassed magistrates watching from the side. Down the street, Lydia and the believers wait at her doorway, waving joyfully in the golden light." } },
          { text: "God is present in hard times.", caption: "Always be glad because of the Lord!", shout: true }
        ],
        narration: "Let’s go back to that night. The jailer, who had been the one in charge of the cell, now cared for Paul and Silas. He took them to his own home, gave them a meal, and he and his whole family were very glad, because now they had faith in God.\n\nWhen morning came, the magistrates sent police with a message: ‘Let those men go!’ The jailer was delighted. But Paul said something surprising. He and Silas were Roman citizens, and the magistrates had punished them in public without a fair trial. That was against Roman law. ‘Now they want to send us away quietly?’ said Paul. ‘No. Let them come and let us out themselves.’\n\nWhen the magistrates heard ‘Roman citizens’, they were frightened. They came, apologised, led Paul and Silas out, and asked them politely to leave the city. Paul wasn’t being proud. He wanted it clear that they had done nothing wrong, so that the new little church in Philippi would be safe.\n\nPaul and Silas walked out with their heads held high, went to Lydia’s house, met with the believers and encouraged them. Then they left.\n\nWhat does this show us about God? He is present in hard times. He didn’t stop the stocks or the dark. But he was in the cell, and he turned a prison into a place of singing and a jailer’s home into a church.\n\nYears later, Paul was in prison again. From there he wrote to the church in Philippi: ‘Always be glad because of the Lord!’ That is not pretending. It is knowing who is with you. Jesus, who was himself arrested and treated unfairly, gave his life for us, rose again, and promised to be with his followers always.",
        notes: "About 2 minutes. Acts 16:35–40 is Scripture: the order to release them, Paul’s citizenship, the apology, and their visit to Lydia’s house. We have paraphrased Paul’s words. That they were punished without trial and were Roman citizens is documented in Acts 16:37. Philippians was written from prison, Paul says in the letter itself (Philippians 1:7, 13); the location is debated, so we say only “in prison”. Jesus’ promise to be with us is Matthew 28:20 (paraphrased). Keep the cross simple and reverent." },

      { type: "question", id: "th-q1", title: "The surprise", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "What surprising thing did Paul tell the officials the next morning?",
        options: ["That he was a Roman citizen", "That he was the king", "That he would sue the jailer", "That he wanted to stay in jail"], answer: 0,
        hint: "Answer: A, that he and Silas were Roman citizens (Acts 16:37), so punishing them without a trial was against the law. Follow-up: ‘What did the magistrates do when they heard?’ (They were frightened, came and apologised, and led them out.) Follow-up 2: ‘Where did Paul and Silas go next?’ (To Lydia’s house.) If silent: re-read the story’s second paragraph." },

      { type: "question", id: "th-q2", title: "Present in the dark", minutes: 1.5, level: "think", mode: "pair", seconds: 45,
        text: "God didn’t stop Paul and Silas from going into prison, but he was with them there. What difference does it make to know God is with you in a hard time?",
        hint: "Good answers: you’re not alone; you can pray and sing; hope is possible; God can use hard things for good; peace even when nothing has changed. Follow-up: ‘What did God do through Paul and Silas in the prison?’ (Brought a whole family to faith.) Follow-up 2: ‘Who helped you feel God’s presence in a hard time?’ If silent: ask what the prisoners could see in Paul and Silas." },

      { type: "recap", id: "th-recap", title: "This week’s big idea", minutes: 1.5,
        points: [
          "God sent Paul and Silas to Philippi. He opened Lydia’s heart, and she opened her home.",
          "In prison, in the dark, Paul and Silas prayed and sang, and God was with them. The jailer and his whole household had faith in Jesus.",
          "God is present in hard times. We can pray with thankful hearts and be glad because of the Lord."
        ],
        notes: "Then the Big Idea stamps in. Have students say the memory verse, Acts 16:31, with the actions." },

      { type: "question", id: "th-q3", title: "Joy or pretending?", minutes: 1.5, level: "dig", mode: "vote", seconds: 30, skippable: true,
        text: "Agree or disagree: “Being glad in hard times means pretending everything is fine.”",
        options: ["Agree", "Disagree"],
        hint: "Disagree: Paul and Silas were honest about their situation; their joy came from trusting the Lord, not from pretending. We can be sad and still trust God. Follow-up: ‘What is the difference between joy and pretending?’ Follow-up 2: ‘How could thanking God for three things help in a hard moment?’ If silent: ask whether Paul and Silas were sitting in the dark pretending." },

      { type: "challenge", id: "th-chal", title: "This Week’s Challenge", minutes: 2,
        text: "When something is hard this week, thank God for three things before you do anything else.",
        why: "“Don’t worry about anything, but pray about everything. With thankful hearts offer up your prayers and requests to God.” — Philippians 4:6",
        head: "God is present in hard times, and thankfulness is a way to remember that.", heart: "God, thank you that you are with me when it is hard.", hands: "When something is hard, thank God for three things before you do anything else.",
        takeHome: true,
        notes: "Give out the take-home cards. Help students think of examples: a warm bed, a friend, a meal, a teacher. Some students face real hardship at home; keep the ‘three things’ simple and gentle. Next Monday’s check-in will ask about this." },

      { type: "verse", id: "th-verse", title: "Memory verse: fade-out", minutes: 1.5, activity: "fade",
        notes: "Fade out Acts 16:31. Bonus: say Luke 8:15 or any earlier verse your class still remembers." },

      { type: "scene", id: "th-scene", title: "Midnight songs", minutes: 1, optional: true,
        art: { key: "t4w05-cover" },
        boxes: [
          { text: "Always be glad because of the Lord!", pos: "tl", style: "shout" },
          { text: "God is present in hard times.", pos: "br", style: "caption" }
        ] },

      { type: "prayer", id: "th-pray", title: "Joy in trouble — standing together", minutes: 3, mood: "calm", style: "stand",
        tip: "Paul and Silas thanked God at midnight, so we practise the same: thanks first, then asking. Stand as we pray, like people with their heads held high, and give thanks for three things.",
        opening: "Stand up tall, like Paul and Silas walking out at dawn. Take a slow breath. We’ll pray out loud, one short sentence at a time.",
        phases: [
          { name: "Wow", lead: "Call out one thing God is, even in hard times.",
            prompts: ["God, you are with us in the dark.", "God, you are stronger than any prison and any storm."],
            starter: "God, you are…", seconds: 35, aloud: "God, you are with us, and you give us joy even in hard times!" },
          { name: "Sorry", lead: "Silently: tell God about the times you grumbled and forgot to thank him.",
            prompts: ["Sorry for the times I complain and forget you are with me.", "Thank you that you forgive us and give us a new start, like the jailer."],
            starter: "God, I’m sorry for…", seconds: 25, aloud: "God, we’re sorry for forgetting you, and thank you for forgiving us." },
          { name: "Thanks", lead: "Call out three things you’re thankful for, big or small.",
            prompts: ["Thank you for Jesus, who stays with us in hard times.", "Thank you for Lydia’s open door and the jailer’s family table."],
            starter: "Thank you, God, for…", seconds: 40, aloud: "Thank you, God, for the people and gifts you give us every day." },
          { name: "Please", lead: "Pray for someone who is in a hard time right now.",
            prompts: ["Please be with Christians who are treated badly because they follow Jesus.", "Please help me remember to thank you for three things when something is hard."],
            starter: "Please, God, help…", seconds: 35, aloud: "Please, God, be with people in hard times, and help us thank you first." }
        ],
        closing: "Together: “Always be glad because of the Lord!” Amen!",
        notes: "Celebrate the whole-class voice. If any students would prefer not to stand, they can pray seated. Pray for persecuted Christians today gently and without scary detail." }
    ] }
  ]
};
