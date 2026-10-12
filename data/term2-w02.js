/* Morninglight 2027 — Term 2 Week 2: Faith That Marches (Joshua 1:1–9; 2; 3:14–17; 6). Scripture: CEV. */
window.DEVOTIONS = window.DEVOTIONS || {};
window.DEVOTIONS["Term 2"] = window.DEVOTIONS["Term 2"] || {};
window.DEVOTIONS["Term 2"]["Week 2"] = {
  lessonTitle: "Faith That Marches",
  passage: "Joshua 1:1–9; 2; 3:14–17; 6",
  bigIdea: "Faith obeys God’s plan, even when it seems strange — because God is with us.",
  godIs: "With Us",
  memoryVerse: { ref: "Joshua 1:9", text: "I’ve commanded you to be strong and brave. Don’t ever be afraid or discouraged! I am the LORD your God, and I will be there to help you wherever you go.", version: "CEV",
    chunks: ["I’ve commanded you", "to be strong and brave.", "Don’t ever be afraid or discouraged!", "I am the LORD your God,", "and I will be there to help you", "wherever you go."],
    actions: ["Point forward like a leader giving orders", "Flex both arms — strong!", "Shake head, hands out: no fear!", "Point up to heaven", "Put an arm round the person next to you", "March on the spot"] },
  prayerFocus: { skill: "Praying Scripture back", tip: "Take God’s promise in Joshua 1:9 and pray it back to him: ‘I will be there to help you wherever you go’ becomes ‘God, you are with me — at school, at home, wherever I go.’ Praying his words back reminds us that he means them." },
  mood: "desert",
  cover: "t2w02-cover",
  characters: ["rahab", "joshua"],
  coverArt: { key: "t2w02-cover", label: "Week cover", desc: "God’s people marching in a long line around the high walls of Jericho, priests with ram’s-horn trumpets at the front, and a red rope hanging from one window in the wall.", shot: "wide, high angle",
    scene: "A long line of Israelites marching silently around the towering mud-brick walls of ancient Jericho in golden afternoon light, priests in white at the front lifting curled ram’s-horn trumpets, Joshua striding beside them, and high on the wall a single window with a bright red rope hanging from it where Rahab watches.", chars: ["joshua", "rahab"] },
  comicArt: { key: "t2w02-comic", label: "Comic page (week opener — for the comic-page viewer, coming in a later build)", format: "portrait", desc: "Six-panel comic page: Rahab and the spies, the Jordan crossing and the walls of Jericho.",
    panels: "Six panels. Panel 1 (wide): Joshua at dawn on a hill above a camp of tents, looking towards a walled city across a river, a soft beam of light on his face. Panel 2 (small): Rahab on her flat rooftop at night, hiding two spies under bundles of flax stalks. Panel 3 (tall): Rahab lowering a red rope from a window high in the city wall while two spies climb down in the moonlight. Panel 4 (wide): priests carrying a gold-covered chest standing on the dry bed of the Jordan River while families with sheep cross behind them. Panel 5 (wide): Israel marching around Jericho, priests blowing ram’s-horn trumpets, people watching from the walls. Panel 6 (small): Rahab and her family, safe and smiling, standing beside Joshua in the Israelite camp, Rahab holding the red rope.", chars: ["joshua", "rahab"] },

  days: [

  /* ======================= MONDAY ======================= */
  { label: "Monday", theme: "The Red Rope", roleplay: true, mood: "night",
    learningIntentions: [
      "We are learning how Rahab hid the two spies from Israel (Joshua 2).",
      "We are learning that Rahab trusted the LORD because she believed he “rules heaven and earth”.",
      "I can explain why Rahab’s red rope was a sign of her faith."
    ],
    assessment: "Listen for students explaining that Rahab hid the spies because she believed the LORD was the true God, and that the red rope in her window showed she trusted the spies’ promise.",
    resources: ["Screen", "Optional: a length of red wool or ribbon", "Optional: a cloth to be the flax on the roof"],
    whereToNext: "Tomorrow: Joshua hears God say, “Be strong and brave!” — and the priests step into a flooded river.",
    slides: [
      { type: "title", id: "m-title", title: "The Red Rope", minutes: 0.5, kicker: "Term 2 · Week 2", sub: "Faith That Marches",
        art: { key: "t2w02-cover" }, notes: "Welcome back to the Faith Museum. If you have red wool, hang it somewhere visible for the whole week." },

      { type: "hook", id: "m-hook", title: "Whose side are you on?", minutes: 1.5,
        checkin: { text: "Last week we climbed Mount Moriah with Abraham and Isaac, and Abraham named the place “The LORD Will Provide.” Your challenge: hand God one worry each day and say, “The LORD will provide.” Did you try it? What happened?" },
        text: "Have you ever had to choose between doing what everyone around you was doing — and doing what you knew was right?",
        ask: "What makes that kind of choice so hard?",
        hint: "Check-in first: ask 2–3 students how the worry challenge went; celebrate small stories and honest ‘I forgot’ answers. Then the hook — take ideas: fear of being left out, being laughed at, getting in trouble. Land it: ‘Today’s exhibit in the Faith Museum is a piece of red rope. It belonged to a woman who lived in the wrong city, among the wrong people — and she chose to trust the true God when no one else around her did.’" },

      { type: "scripture", id: "m-scr", title: "Joshua 2:9, 11–12, 21", minutes: 1, ref: "Joshua 2:1–21", version: "CEV",
        lines: [
          { text: "I know that the LORD has given Israel this land.", ref: "Joshua 2:9" },
          { text: "The LORD your God rules heaven and earth.", ref: "Joshua 2:11" },
          { text: "Please promise me in the LORD’s name that you will be as kind to my family as I have been to you.", ref: "Joshua 2:12" },
          { text: "She tied the red rope to the window.", ref: "Joshua 2:21" }
        ],
        emphasis: ["I know", "the LORD", "rules heaven and earth", "promise", "kind to my family", "red rope"],
        notes: "These are Rahab’s own words. ‘The LORD’ in capitals is God’s personal name. Notice: Rahab isn’t from Israel — yet she calls Israel’s God the ruler of heaven and earth." },

      { type: "story", id: "m-story", title: "Rahab and the spies", minutes: 3, transition: "page", mood: "night",
        beats: [
          { text: "Two spies slip into Jericho.", caption: "They go to Rahab’s house — built into the city wall.",
            art: { key: "t2w02d1-a", label: "Mon · story beats 1–2 + stretch scene", desc: "Rahab on her flat mud-brick rooftop at night, pulling bundles of flax stalks over two crouching spies, the lamps of Jericho glowing below.", shot: "medium wide, night", motion: "kenburns-in", chars: ["rahab"],
              scene: "Rahab kneeling on her flat mud-brick rooftop at night, quickly pulling long bundles of drying flax stalks over two crouching young men in travel cloaks, the lamp-lit rooftops of Jericho spread out below and a sliver of moon above the city wall." } },
          { text: "“Bring out those men!”", caption: "The king’s soldiers bang on Rahab’s door.", shout: true },
          { text: "“The LORD your God rules heaven and earth.”", caption: "Rahab chose to trust the true God.",
            art: { key: "t2w02d1-b", label: "Mon · story beats 3–5 + role-play card", desc: "Rahab leaning out of a window high in the city wall at night, letting a rope down as two spies climb down the outside of the wall towards the dark hills.", shot: "low angle, night", motion: "kenburns-up", chars: ["rahab"],
              scene: "Seen from below, Rahab leaning out of a small window high in the towering mud-brick wall of Jericho at night, holding a rope steady as two spies climb down the outside of the wall, dark hills and a starry sky behind them, a coil of bright red rope on the window ledge." } },
          { text: "“Tie this red rope in your window.”", caption: "A promise: everyone inside will be safe." },
          { text: "Rahab tied the red rope.", caption: "And she waited, trusting God." }
        ],
        narration: "Welcome back to the Faith Museum. Today’s exhibit is a little unusual. There’s no sword, no crown, no shepherd’s staff. Just a piece of red rope, hanging in a window. It belonged to a woman called Rahab.\n\nAfter forty years in the desert, God’s people, Israel, were camped beside the Jordan River. Across the river was the land God had promised to Abraham. Moses had died, and God had chosen a new leader: Joshua.\n\nBut right in the way stood Jericho — a city with huge, thick walls. So Joshua sent two spies to look around.\n\nThe spies slipped into Jericho and went to Rahab’s house, which was built right into the city wall. Rahab was not the kind of person most people expected God to use. She wasn’t from Israel. She hadn’t grown up hearing about the true God. And she had lived the kind of life that made people look down on her.\n\nThat night someone told the king, ‘Spies from Israel are in the city!’ The king sent his men straight to Rahab’s door. ‘Bring out those men!’\n\nNow Rahab had to choose. Hand the spies over and be safe? Or protect them and risk her own life?\n\nQuickly she took the spies up onto her flat roof and hid them under piles of flax — long stalks drying in the sun. Then she sent the king’s men off on a wild chase towards the river.\n\nWhy would she do that? Rahab told the spies, ‘I know that the LORD has given Israel this land. We heard how he dried up the Red Sea for you. Everyone here is terrified. The LORD your God rules heaven and earth.’\n\nDo you see? Everyone in Jericho had heard the same stories. Everyone was afraid. But only Rahab turned towards God. She believed he was the real God — the God of heaven and earth — and she decided to trust him.\n\n‘Please,’ she said, ‘promise in the LORD’s name that you will be kind to my family, as I have been kind to you.’\n\nThe spies promised. ‘Tie this red rope in your window,’ they said. ‘Bring your whole family into this house. Everyone inside will be safe.’\n\nRahab let the spies down from her window on a rope, over the wall, and they escaped into the hills.\n\nThen Rahab tied the red rope in her window. And she waited — trusting the God she had only just come to know.",
        notes: "About 3 minutes. The Bible calls Rahab a prostitute (Joshua 2:1); for this age group ‘she had lived the kind of life that made people look down on her’ is honest and enough. Rahab told the king’s men a lie (2:4–5) — the Bible praises her faith (Hebrews 11:31), not her lie; if a student asks, say exactly that. The Red Sea is Term 1 Week 6." },

      { type: "question", id: "m-q1", title: "Hidden on the roof", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "Where did Rahab hide the two spies?",
        options: ["In a cellar under the house", "Under stalks of flax on her flat roof", "In the king’s palace", "Down a well"], answer: 1,
        hint: "Answer: B (Joshua 2:6). Follow-up: ‘What was Rahab risking by hiding them?’ (Her own life — she was going against the king.) Follow-up 2: ‘How did the spies get out of the city?’ (Down a rope from her window in the city wall.) If silent: show the first story picture again and ask students to describe what Rahab is doing." },

      { type: "question", id: "m-q2", title: "Why help the enemy?", minutes: 1.5, level: "think", mode: "pair", seconds: 45, skippable: true,
        text: "Everyone in Jericho had heard what God did for Israel. Everyone was afraid. Why do you think only Rahab chose to help?",
        hint: "Good answers: she believed the stories were true; she decided the LORD was the real God, not just a scary one; she wanted to be on God’s side; she cared about her family; fear made others hide, but faith made Rahab act. Follow-up: ‘What is the difference between being afraid of God and trusting God?’ Follow-up 2: ‘What did Rahab say about God in verse 11?’ (He rules heaven and earth.) If silent: re-read the second scripture line and ask, ‘What does Rahab believe?’" },

      { type: "roleplay", id: "m-rp", title: "The Red Rope", minutes: 5, ref: "Joshua 2:1–21",
        art: { key: "t2w02d1-b" },
        imagined: "The main events and Rahab’s words about God are from Joshua 2 (CEV), lightly shortened. The spies are unnamed in the Bible; their exact conversation and the soldier’s lines are imagined.",
        actions: ["Everyone: tiptoeing feet", "Everyone: banging on the door", "Everyone: the rope swishing down the wall"],
        props: ["Optional: red wool or ribbon for the rope", "Optional: a cloth over two chairs for the flax"],
        characters: [
          { name: "Narrator", color: "#F2C77B", desc: "Tells the story" },
          { name: "Rahab", color: "#E57373", desc: "Quick-thinking and brave — she has decided to trust Israel’s God" },
          { name: "Spy One", color: "#7BA7D9", desc: "A spy from Israel — nervous" },
          { name: "Spy Two", color: "#81C784", desc: "A spy from Israel — calm" },
          { name: "Soldier", color: "#B0BEC5", desc: "The king of Jericho’s soldier — loud and bossy" },
          { name: "Everyone", color: "#FFFFFF", desc: "Tiptoes, door-banging and a swishing rope" }
        ],
        lines: [
          { character: "Narrator", text: "Night in Jericho. Two spies from Israel slip through the city gate.", direction: true },
          { character: "Everyone", text: "Tiptoe… tiptoe… tiptoe…", action: "fingers tiptoeing on desks" },
          { character: "Spy One", text: "Quick — in here. This house is built right into the city wall.", action: "look over shoulder" },
          { character: "Rahab", text: "You’re not from Jericho, are you? You’re from Israel.", action: "hands on hips" },
          { character: "Spy Two", text: "Please — we only need somewhere to stay tonight." },
          { character: "Narrator", text: "But someone has seen them. The king sends his soldiers.", direction: true },
          { character: "Everyone", text: "BANG! BANG! BANG!", action: "pound fists on desks" },
          { character: "Soldier", text: "Open up, in the name of the king! Bring out the men who came to your house!" },
          { character: "Rahab", text: "Quick — up to the roof! Hide under the flax!", action: "whisper, point up" },
          { character: "Spy One", text: "Flax? It’s scratchy!", action: "wriggle" },
          { character: "Spy Two", text: "Scratchy is better than caught. Get down!" },
          { character: "Rahab", text: "Some men did come here. But they left when the gate was closing. Hurry, and you might catch them!", action: "point far away" },
          { character: "Soldier", text: "After them! To the river!", action: "run on the spot" },
          { character: "Everyone", text: "Thud, thud, thud, thud…", action: "footsteps fading away" },
          { pause: "Freeze! Rahab has just risked her life for two strangers. Why would she do that?", seconds: 20 },
          { character: "Narrator", text: "Rahab climbs up to the roof.", direction: true },
          { character: "Rahab", text: "I know that the LORD has given Israel this land. Everyone here is shaking with fear." },
          { character: "Rahab", text: "We heard how the LORD dried up the Red Sea for you.", action: "eyes wide" },
          { character: "Rahab", text: "The LORD your God rules heaven and earth.", action: "look up" },
          { character: "Spy Two", text: "You believe in our God? Here — in Jericho?" },
          { character: "Rahab", text: "I do. Please promise in the LORD’s name to be kind to my family, as I have been kind to you." },
          { character: "Spy One", text: "We promise. Keep our secret, and we’ll keep you safe.", action: "hand on heart" },
          { character: "Spy Two", text: "Tie this red rope in your window. Bring your whole family inside this house." },
          { character: "Narrator", text: "Rahab lets them down from her window on a rope, right over the city wall.", direction: true },
          { character: "Everyone", text: "Swish… creak… swish…", action: "rope sliding down" },
          { character: "Rahab", text: "Hide in the hills for three days. Then go home." },
          { character: "Spy One", text: "Thank you, Rahab! Remember — the red rope!", action: "wave" },
          { character: "Narrator", text: "Rahab ties the red rope in her window. And she waits.", direction: true },
          { character: "Rahab", text: "The LORD rules heaven and earth. I will trust him.", action: "tie a knot" },
          { character: "Everyone", text: "The red rope!", action: "point to the window" }
        ],
        debrief: [
          { level: "think", text: "Rahab said, “I will trust him.” What did her trust make her DO?", hint: "She hid the spies, sent the soldiers away, asked for a promise in the LORD’s name, and tied the red rope in her window — faith that acted." },
          { level: "look", text: "What did the spies tell Rahab to put in her window?", hint: "A red rope — the sign that everyone in her house would be kept safe (Joshua 2:18)." }
        ],
        notes: "Cast a confident Rahab and a loud Soldier. Keep the soldiers’ part playful, not scary. If a student notices Rahab’s lie to the soldiers, say: ‘The Bible tells us what she did, and praises her faith — not her lie.’" },

      { type: "question", id: "m-q3", title: "The wrong person?", minutes: 1, level: "dig", mode: "discuss", seconds: 40,
        text: "Rahab came from the ‘wrong’ city and had done wrong things — yet she ended up in the Faith Museum. What does that tell us about who God welcomes?",
        hint: "Ideas: God welcomes anyone who turns to him, not only ‘good’ people or people from the right family; it’s faith, not your past, that matters to God; no one is too far away; God loves to rescue people others look down on. Follow-up: ‘Who might people today think is too far from God?’ Follow-up 2: ‘How should that change the way we treat people?’ If silent: ask ‘Did Rahab earn her rescue, or did she trust God for it?’" },

      { type: "apply", id: "m-apply", title: "Head · Heart · Hands", minutes: 1,
        head: "Faith means choosing God’s side, even when everyone around me is doing something else.",
        heart: "God, you rule heaven and earth — I want to be on your side.",
        hands: "This week, when the people around you are doing something unkind — in the playground, at home or online — be the one who chooses differently, like Rahab.",
        settings: ["playground", "home", "online"],
        notes: "Ask 2–3 students for a real example of ‘choosing differently’ — without naming anyone who was unkind." },

      { type: "scene", id: "m-scene", title: "On the rooftop", minutes: 0.5, optional: true,
        art: { key: "t2w02d1-a" },
        boxes: [
          { text: "“Quick — hide under the flax!”", pos: "tl", style: "speech" },
          { text: "“The LORD your God rules heaven and earth.”", pos: "br", style: "caption" }
        ] },

      { type: "verse", id: "m-verse", title: "Memory verse peek", minutes: 1, optional: true, activity: "echo",
        notes: "Introduce Joshua 1:9 — God’s promise to Joshua, the leader who sent the spies. Echo it chunk by chunk." },

      { type: "prayer", id: "m-pray", title: "Praying Rahab’s words (in pairs)", minutes: 3, mood: "calm", style: "pairs",
        tip: "We’re still learning to pray Scripture back. Today we take Rahab’s words about God and pray them back to him — with a partner, one sentence each.",
        opening: "Turn to a partner. You’ll take turns praying one short sentence each. Rahab trusted God in the dark of night — let’s trust him now.",
        phases: [
          { name: "Wow", lead: "Pray Joshua 2:11 back to God:",
            prompts: ["LORD, you rule heaven and earth.", "You are the true God — the God Rahab chose to trust."],
            starter: "Wow, God, you rule…", seconds: 35, aloud: "LORD, you rule heaven and earth!" },
          { name: "Sorry", lead: "Silently: was there a time you went along with the crowd instead of choosing God’s way?",
            prompts: ["Sorry for joining in when others were unkind.", "Sorry for being afraid of what people think more than trusting you."],
            starter: "God, I’m sorry for…", seconds: 30, aloud: "God, we’re sorry for following the crowd instead of you." },
          { name: "Thanks", lead: "Partner one, then partner two: thank God for welcoming Rahab — and us.",
            prompts: ["Thank you that you welcomed Rahab, even though others looked down on her.", "Thank you that no one is too far away for you."],
            starter: "Thank you, God, that you…", seconds: 35, aloud: "Thank you, God, that you welcome everyone who trusts you." },
          { name: "Please", lead: "Pray Rahab’s request from Joshua 2:12 for your own family.",
            prompts: ["Please be kind to my family and keep them safe.", "Please help (name) in my family to trust you too."],
            starter: "Please, God, be kind to…", seconds: 35, aloud: "LORD, please be kind to our families, as you were to Rahab’s." }
        ],
        closing: "Everyone: Amen.",
        notes: "Pairs pray quietly, one sentence each. Anyone who prefers can pray silently while their partner prays. Model a one-sentence prayer first." }
    ] },

  /* ======================= TUESDAY ======================= */
  { label: "Tuesday", theme: "Feet in the River", roleplay: false, mood: "dawn",
    learningIntentions: [
      "We are learning how God told Joshua, “Be strong and brave,” and promised to be with him (Joshua 1).",
      "We are learning how God stopped the Jordan River when the priests stepped in (Joshua 3).",
      "I can explain where Joshua’s courage came from."
    ],
    assessment: "Listen for students explaining that Joshua’s courage came from God’s promise to be with him, and that the priests had to step into the water BEFORE the river stopped.",
    resources: ["Screen", "Optional: a bowl of water or a blue cloth for the river", "Optional: twelve small stones"],
    whereToNext: "Tomorrow: the strangest battle plan in the Bible — marching round and round Jericho.",
    slides: [
      { type: "title", id: "t-title", title: "Feet in the River", minutes: 0.5, kicker: "Term 2 · Week 2", sub: "Faith That Marches",
        art: { key: "t2w02d2-b" }, notes: "Let the splash play. Today has a big ‘wow’ moment — build up to the priests’ first step." },

      { type: "hook", id: "t-recap", title: "Recap", minutes: 1, style: "recap",
        text: "Yesterday we found a red rope in the Faith Museum.",
        ask: "Who did Rahab hide — and what did she believe about God?",
        hint: "She hid two spies from Israel under flax on her roof. She said, ‘The LORD your God rules heaven and earth.’ She tied a red rope in her window and waited. Then: ‘Today we go back to the man who sent those spies — Joshua. He has a huge job, a flooded river in front of him, and a promise from God.’" },

      { type: "scripture", id: "t-scr", title: "Joshua 1:2, 5, 9 · 3:15–16", minutes: 1, ref: "Joshua 1:1–9; 3:14–17", version: "CEV",
        lines: [
          { text: "My servant Moses is dead. Now you must lead Israel across the Jordan River into the land I’m giving to all of you.", ref: "Joshua 1:2" },
          { text: "I will always be with you and help you as I helped Moses.", ref: "Joshua 1:5" },
          { text: "I’ve commanded you to be strong and brave. Don’t ever be afraid or discouraged! I am the LORD your God, and I will be there to help you wherever you go.", ref: "Joshua 1:9" },
          { text: "But as soon as the priests stepped into the water, the river stopped flowing.", ref: "Joshua 3:15–16" }
        ],
        emphasis: ["lead Israel across", "I will always be with you", "strong and brave", "wherever you go", "as soon as", "stopped flowing"],
        notes: "Joshua 1:9 is our memory verse. ‘Discouraged’ = losing heart, wanting to give up. Stress ‘as soon as’ in the last line: the priests stepped in FIRST." },

      { type: "story", id: "t-story", title: "Be strong and brave", minutes: 3.5, transition: "page", mood: "dawn",
        beats: [
          { text: "“Be strong and brave!”", caption: "“I will be there to help you wherever you go.”",
            art: { key: "t2w02d2-a", label: "Tue · story beats 1–2 + stretch scene", desc: "Joshua alone at dawn on a rocky hill above the Israelite tents, looking up into a soft column of golden light, the Jordan River and distant city beyond.", shot: "medium wide, dawn", motion: "kenburns-up", chars: ["joshua"],
              scene: "Joshua standing alone at dawn on a rocky hilltop above a vast camp of Israelite tents, looking up into a soft column of golden light falling from the sky, one hand on his chest, the swollen Jordan River and a distant walled city glowing on the far side." } },
          { text: "A flooded river.", caption: "No bridge. No boats. Just God’s strange plan.", shout: true },
          { text: "The priests step in…", caption: "…and the river stops!",
            art: { key: "t2w02d2-b", label: "Tue · title + story beats 3–5", desc: "Priests in white robes carrying a gold-covered chest on poles, standing on the dry bed of the Jordan River, the water heaped up far upstream, families crossing behind them.", shot: "wide, epic", motion: "kenburns-left", chars: ["joshua"],
              scene: "Priests in white robes carrying a gold-covered wooden chest on long poles stand firm on the dry, cracked bed of the Jordan River while the water is heaped up like a wall far upstream, and families with children, sheep and goats stream across behind them as Joshua watches from the bank." } },
          { text: "Everyone crossed on dry ground.", caption: "Not one person got wet feet." },
          { text: "Twelve stones.", caption: "“What do these stones mean?” “God stopped the river!”" }
        ],
        narration: "Before Israel could reach Jericho, they had to do something big. They had to cross a river.\n\nBut first, let’s meet Joshua properly. For forty years he had been Moses’ helper. He was there when God split the Red Sea. Years earlier he had been one of only two spies who said, ‘We can do this — God is with us!’ Now Moses had died. And suddenly Joshua was in charge of a whole nation.\n\nHow do you think Joshua felt? Maybe excited. Maybe scared stiff.\n\nThen God spoke to him. ‘My servant Moses is dead. Now you must lead Israel across the Jordan River into the land I’m giving you. I will always be with you and help you, as I helped Moses.’\n\nThree times God said, ‘Be strong and brave!’ And then he said the words that are our memory verse: ‘I’ve commanded you to be strong and brave. Don’t ever be afraid or discouraged! I am the LORD your God, and I will be there to help you wherever you go.’\n\nNotice something. God didn’t say, ‘Be brave because you’re a great leader.’ He said, ‘Be brave because I am with you.’ Joshua’s courage would come from God.\n\nNow for the river. It was harvest time, and the Jordan was flooded — running high, fast and muddy, right over its banks. There was no bridge. There were no boats. And God’s plan sounded very strange.\n\nThe priests were to carry the sacred chest — the gold-covered box that reminded Israel that God was with them — and walk straight into the river. Not wait for the water to stop. Walk in first.\n\nImagine being one of those priests. The river is roaring. The chest is heavy on your shoulders. Everyone is watching. You step closer… and closer… and you put your foot into the cold, rushing water.\n\nAnd as soon as their feet touched the water, the river stopped flowing! Far upstream the water piled up in a heap. Below them, the riverbed began to dry. The priests walked out into the middle and stood there on dry ground, holding the chest.\n\nThen the whole nation walked across — mums and dads, grandparents, children, babies, sheep and goats — while the priests stood firm in the middle. Not one person got wet feet.\n\nWhen everyone was across, Joshua had twelve men carry twelve big stones from the riverbed and pile them up on the other side. ‘One day,’ he said, ‘your children will ask, “What do these stones mean?” Tell them: God stopped the Jordan River so we could cross, just as he dried up the Red Sea.’\n\nGod had kept his word. He was with Joshua, exactly as he had been with Moses. And soon he would show it again — at Jericho.",
        notes: "About 3½ minutes. Joshua and Caleb were the two faithful spies in Numbers 13–14. ‘Three times’ = Joshua 1:6, 7 and 9. The ‘sacred chest’ is the ark of the covenant (Joshua 3:3) — not Noah’s ark; explain the difference if asked. The flood at harvest time is Joshua 3:15; the water heaped up ‘at the town of Adam’ (3:16). Twelve stones: Joshua 4:1–7." },

      { type: "dig", id: "t-dig", title: "Word study: “With you”", minutes: 2,
        prompt: "God did the same things for Joshua that he did for Moses. Can you match them?",
        columns: ["God with Moses", "God with Joshua"],
        items: [
          { left: "“I will be with you” (Exodus 3:12)", right: "“I will always be with you” (Joshua 1:5)" },
          { left: "God parted the Red Sea", right: "God stopped the Jordan River" },
          { left: "Moses led God’s people OUT of Egypt", right: "Joshua led God’s people INTO the promised land" },
          { left: "God was with them then…", right: "…and God is with us now" }
        ],
        reveal: "Joshua’s courage didn’t come from Joshua. It came from God being WITH him.",
        notes: "Reveal row by row. The key idea of the week: God is ‘With Us’. Jesus’ last words in Matthew 28:20 echo it: ‘I will be with you always.’" },

      { type: "question", id: "t-q1", title: "The moment their feet touched", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "What happened as soon as the priests’ feet touched the water of the Jordan?",
        options: ["They were swept away", "The river stopped flowing", "A bridge appeared", "It started to rain"], answer: 1,
        hint: "Answer: B (Joshua 3:15–16). Follow-up: ‘What did the priests carry into the river?’ (The sacred chest — a sign that God was with them.) Follow-up 2: ‘What did Joshua build on the other side, and why?’ (Twelve stones, so children would ask and hear what God did.) If silent: re-read the last scripture line and ask students to spot the moment the river stopped." },

      { type: "question", id: "t-q2", title: "Step in first", minutes: 1.5, level: "think", mode: "pair", seconds: 45,
        text: "God didn’t stop the river first and then send the priests in. They had to step in FIRST. Why do you think God did it that way?",
        hint: "Good answers: it showed whether they really trusted God; faith acts before it sees; it made it clear God did it, not them; it’s like the chair from last week — you have to sit down. Follow-up: ‘How do you think the priests felt just before that first step?’ Follow-up 2: ‘What “first step” might God be asking you to take?’ If silent: ask ‘Would it be faith if the river had already stopped?’" },

      { type: "question", id: "t-q3", title: "Where courage comes from", minutes: 1.5, level: "dig", mode: "silent", seconds: 40, skippable: true,
        text: "God didn’t promise Joshua, “Nothing will ever be scary.” He promised, “I will be there to help you.” Why is that a better promise?",
        hint: "Ideas: scary things will still come, but we are never alone in them; God being with us is bigger than any problem; courage isn’t ‘no fear’ — it’s trusting God while you feel afraid; God keeps that promise to us through Jesus, who said ‘I will be with you always.’ Follow-up: ‘Can you be brave and scared at the same time?’ Follow-up 2: ‘Where do you most need to remember God is with you?’ If silent: think quietly about a scary place, then imagine God standing right beside you there." },

      { type: "apply", id: "t-apply", title: "Head · Heart · Hands", minutes: 2,
        head: "My courage doesn’t come from me — it comes from God being with me.",
        heart: "God, you are with me wherever I go.",
        hands: "When something feels scary this week — a new sport, a hard task in class, talking to someone new — say Joshua 1:9 quietly and take the first step, like the priests.",
        settings: ["sport", "classroom", "home"],
        notes: "Invite students to whisper ‘The LORD is with me’ before they stand up from their seats at break." },

      { type: "scene", id: "t-scene", title: "God speaks to Joshua", minutes: 1, optional: true,
        art: { key: "t2w02d2-a" },
        boxes: [
          { text: "“Be strong and brave!”", pos: "tl", style: "shout" },
          { text: "“I will be there to help you wherever you go.”", pos: "br", style: "caption" }
        ] },

      { type: "verse", id: "t-verse", title: "Build the verse", minutes: 1, activity: "build",
        notes: "Build Joshua 1:9. Ask: ‘Which part of this verse did Joshua need most at the river?’" },

      { type: "prayer", id: "t-pray", title: "Standing firm like the priests", minutes: 3, mood: "calm", style: "stand",
        tip: "The priests stood firm in the middle of the river. Today we stand to pray, and we pray Joshua 1:9 back to God: ‘You are with me.’",
        opening: "Everyone stand up. Plant your feet like the priests in the riverbed. God is with us right here.",
        phases: [
          { name: "Wow", lead: "Pray Joshua 1:9 back: “I am the LORD your God.”",
            prompts: ["You are the LORD my God — and you stopped a river!", "You are with me wherever I go."],
            starter: "Wow, God, you are…", seconds: 30, aloud: "Wow, LORD — you are with us wherever we go!" },
          { name: "Sorry", lead: "Bow your head: is there something God has asked you to do that you’ve been too scared to start?",
            prompts: ["Sorry for waiting for the river to stop before I trust you.", "Sorry for being discouraged and wanting to give up."],
            starter: "God, I’m sorry for…", seconds: 30, aloud: "God, we’re sorry for being afraid to take the first step." },
          { name: "Thanks", lead: "Lift your head: thank God for times he has been with you.",
            prompts: ["Thank you for being with me when I felt scared.", "Thank you that you helped Joshua just as you helped Moses."],
            starter: "Thank you, God, for…", seconds: 35, aloud: "Thank you, God, that you are always with us." },
          { name: "Please", lead: "Feet firm: ask God for courage for one real thing this week.",
            prompts: ["Please make me strong and brave when I…", "Please help me take the first step with…"],
            starter: "Please, God, help me be strong and brave…", seconds: 35, aloud: "LORD, make us strong and brave — you are with us." }
        ],
        closing: "Stay standing as we say Joshua 1:9 together… Amen!",
        notes: "Students who can’t stand can sit up tall with feet flat on the floor. Keep the energy calm — strong, not silly." }
    ] },

  /* ======================= WEDNESDAY ======================= */
  { label: "Wednesday", theme: "Round and Round Jericho", roleplay: true, mood: "desert",
    learningIntentions: [
      "We are learning how Israel obeyed God’s strange plan to march around Jericho (Joshua 6).",
      "We are learning that the walls fell because of God’s power, not Israel’s strength.",
      "I can explain how God kept his promise to rescue Rahab and her family."
    ],
    assessment: "Listen for students retelling the plan (once a day for six days, seven times on day seven, trumpets and a shout), saying that God brought the walls down, and that Rahab’s family was rescued because of the promise.",
    resources: ["Screen", "Optional: a cardboard-box ‘wall’", "Optional: a toy trumpet or rolled paper horn", "Optional: red wool for Rahab’s window"],
    whereToNext: "Tomorrow: what happened to Rahab next — all the way to Jesus’ family tree.",
    slides: [
      { type: "title", id: "w-title", title: "Round and Round Jericho", minutes: 0.5, kicker: "Term 2 · Week 2", sub: "Faith That Marches",
        art: { key: "t2w02d3-a" }, notes: "If you built a box wall, put it out now. Keep today about God’s power and Rahab’s rescue." },

      { type: "hook", id: "w-hook", title: "A strange set of instructions", minutes: 1,
        text: "If someone told you to knock down a castle wall by walking around it and shouting, what would you say?",
        ask: "Would you do it? Why or why not?",
        hint: "Take answers — expect laughter and ‘That won’t work!’. Then recap: ‘Yesterday the priests stepped into a flooded river, and God stopped it. Now Israel is standing in front of Jericho, with its high walls and locked gates. And Rahab’s red rope is still hanging in her window. Today God gives Joshua the strangest plan in the Bible.’" },

      { type: "scripture", id: "w-scr", title: "Joshua 6:3–5, 20", minutes: 1, ref: "Joshua 6:1–25", version: "CEV",
        lines: [
          { text: "March slowly around Jericho once a day for six days.", ref: "Joshua 6:3" },
          { text: "But on the seventh day, march slowly around the town seven times while the priests blow their trumpets.", ref: "Joshua 6:4" },
          { text: "When the priests give a loud blast on the trumpets, everyone else will shout. Then the wall will fall down.", ref: "Joshua 6:5" },
          { text: "The walls of Jericho fell flat.", ref: "Joshua 6:20" }
        ],
        emphasis: ["once a day for six days", "seventh day", "seven times", "shout", "fell flat"],
        notes: "The ‘trumpets’ were rams’ horns (a shofar). Count the sevens together. God’s instructions are lightly shortened here." },

      { type: "story", id: "w-story", title: "The walls fall down", minutes: 3, transition: "page", mood: "desert",
        beats: [
          { text: "Round and round Jericho.", caption: "Once a day for six days — in silence.",
            art: { key: "t2w02d3-a", label: "Wed · title + story beats 1–3", desc: "Israel marching silently around Jericho’s high walls, seven priests blowing rams’ horns in front of the gold-covered chest, people on the walls staring down.", shot: "wide, side-on", motion: "kenburns-right", chars: ["joshua"],
              scene: "A long silent column of Israelites marching around the base of Jericho’s towering mud-brick walls in bright desert light, seven priests in white blowing curled rams’ horns in front of a gold-covered chest carried on poles, Joshua walking at the front, and puzzled faces peering down from the top of the walls." } },
          { text: "Day 2… 3… 4… 5… 6…", caption: "And Rahab watched from her window." },
          { text: "Day 7: seven times around!", caption: "Then a long trumpet blast…", shout: true },
          { text: "“SHOUT!”", caption: "The walls of Jericho fell flat!",
            art: { key: "t2w02d3-b", label: "Wed · story beats 4–5 + role-play card + stretch scene", desc: "Jericho’s walls collapsing into a huge cloud of dust while one section with a red rope in its window still stands, and Israelites far off raise their arms and shout.", shot: "wide, dramatic", motion: "kenburns-out", chars: ["rahab"],
              scene: "The great mud-brick walls of Jericho collapsing outward into a huge billowing cloud of golden dust, while one small section of wall still stands with a bright red rope hanging from its window and Rahab and her family huddled safely inside, as far-off Israelites raise their arms and rams’ horns high." } },
          { text: "The house with the red rope.", caption: "Rahab and her whole family — safe." }
        ],
        narration: "Now Israel was across the river. And there, in front of them, stood Jericho.\n\nIts gates were shut tight. Nobody went out, and nobody came in. Its walls were high and thick — so thick that people, like Rahab, had houses built right into them. How could a nation of travellers and shepherds ever get past walls like that?\n\nGod gave Joshua a plan. And it might be the strangest plan in the whole Bible.\n\n‘March around the city once a day for six days. Seven priests will carry trumpets made from rams’ horns and walk in front of the sacred chest. On the seventh day, march around the city seven times. Then the priests will blow a long blast, everyone will shout — and the walls will fall down.’\n\nNo ladders. No tunnels. No battering rams. Just walking, trumpets and a shout. Oh — and one more thing. Joshua told the people, ‘Don’t say a word until I give the signal.’\n\nSo on day one, Israel marched. The priests blew their horns, the chest went round, and thousands of feet tramped around the city in silence. Then everyone went back to camp.\n\nDay two — the same. Day three, four, five, six. Round once, and home again.\n\nCan you imagine the people of Jericho watching from the walls? Maybe they laughed at first. Maybe by day four they were getting nervous. And somewhere up on the wall, beside a window with a red rope hanging from it, Rahab was watching too — and trusting.\n\nThen came day seven. The people got up at dawn. Once around… twice… three times… four, five, six… seven times.\n\nThe priests lifted their horns and gave a long, loud blast. Joshua called out, ‘Shout! The LORD has given you this city!’\n\nAnd the people shouted — the biggest shout you can imagine. And the great walls of Jericho shook… cracked… and fell down flat!\n\nNobody pushed them. No machine knocked them over. God did it.\n\nThen Joshua remembered the promise. He sent the two spies straight to the house with the red rope. They brought out Rahab, her father and mother, her brothers and sisters and everyone with her — every single one safe. Rahab had trusted God, and God had kept her safe.\n\nFrom that day on, Rahab and her family lived among God’s people. The woman from Jericho had become part of Israel.",
        notes: "About 3 minutes. HANDLE WITH CARE: Joshua 6:21 records the destruction of the city. This lesson deliberately keeps the focus on God’s power and Rahab’s rescue, as the brief asks. If a student asks what happened to the people of Jericho, answer simply and calmly: ‘The Bible says God was judging the city for a long time of great wrongdoing. Everyone had heard about God — Rahab said so — and the one person who turned to him was rescued with her whole family.’ Rahab’s rescue: Joshua 6:22–25." },

      { type: "question", id: "w-q1", title: "Count the sevens", minutes: 1, level: "look", mode: "finish", seconds: 20,
        text: "Finish the sentence: “On the seventh day, they marched around Jericho…”",
        reveal: "“…seven times” — then the priests blew a long blast, the people shouted, and the walls fell flat. (Joshua 6:4–5, 20)",
        hint: "Follow-up: ‘How many times did they march around on each of the first six days?’ (Once.) Follow-up 2: ‘What did Joshua tell the people NOT to do while they marched?’ (Not to say a word until his signal — Joshua 6:10.) If silent: count the days on your fingers together, then point to the second scripture line." },

      { type: "roleplay", id: "w-rp", title: "Round and Round Jericho", minutes: 5, ref: "Joshua 6:1–25",
        art: { key: "t2w02d3-b" },
        imagined: "God’s instructions, Joshua’s commands and the rescue of Rahab are from Joshua 6 (CEV), lightly shortened. Miri, the Israelite girl, is imagined, and so are Rahab’s lines from the wall. The fall of the city is kept to the walls falling — no fighting is acted.",
        actions: ["Everyone: marching on the spot (quietly!)", "Everyone: counting the seven laps on fingers", "Everyone: the great shout and the walls tumbling down"],
        props: ["Optional: rolled-paper trumpets for the Priest", "Optional: red wool for Rahab’s window"],
        characters: [
          { name: "Narrator", color: "#F2C77B", desc: "Tells the story" },
          { name: "God", voice: true, desc: "Heard, never seen" },
          { name: "Joshua", color: "#A1887F", desc: "Israel’s leader — strong, because God is with him" },
          { name: "Priest", color: "#E0E0E0", desc: "Blows the ram’s horn trumpet" },
          { name: "Miri", color: "#FFB547", desc: "An Israelite girl with sore feet and lots of questions (imagined)" },
          { name: "Rahab", color: "#E57373", desc: "Watching from her window with the red rope" },
          { name: "Everyone", color: "#FFFFFF", desc: "Marching feet, counting, and one ENORMOUS shout" }
        ],
        lines: [
          { character: "Narrator", text: "Jericho’s gates are shut tight. No one goes out. No one comes in.", direction: true },
          { character: "Everyone", text: "CLANG!", action: "gates slamming shut" },
          { character: "God", text: "Joshua, with my help you will capture Jericho." },
          { character: "God", text: "March around the town once a day for six days. Seven priests with trumpets will go in front of the sacred chest." },
          { character: "God", text: "On the seventh day, march around seven times. Then the trumpets will blast, everyone will shout — and the wall will fall down." },
          { character: "Joshua", text: "Yes, LORD.", action: "bow head" },
          { character: "Joshua", text: "Listen, everyone! Priests, take your trumpets. Everyone else — not a word until I give the signal!", action: "arm raised" },
          { character: "Miri", text: "Not a word? How do you knock down a wall by… walking?", action: "scratch head" },
          { character: "Everyone", text: "Stomp… stomp… stomp…", action: "march quietly on the spot" },
          { character: "Priest", text: "Toooot! Toooot!", action: "blow a pretend horn" },
          { character: "Narrator", text: "High on the wall, Rahab watches. Her red rope hangs in the window.", direction: true },
          { character: "Rahab", text: "They’re marching. Just… marching. And not one of them is talking!", action: "lean out of window" },
          { character: "Narrator", text: "Day two. Day three. Four. Five. Six. Around once, then back to camp.", direction: true },
          { character: "Miri", text: "My feet hurt. Are we sure this is the plan?", action: "whisper" },
          { character: "Joshua", text: "It’s God’s plan. It seems strange, I know. But remember the river? God has never let us down.", action: "whisper back" },
          { pause: "Freeze! The plan seems strange. Why might God choose a plan like this?", seconds: 20 },
          { character: "Narrator", text: "Day seven. Up at dawn. Around they go…", direction: true },
          { character: "Everyone", text: "One… two… three… four… five… six… SEVEN!", action: "count on fingers" },
          { character: "Priest", text: "Toooooooooot!", action: "one long blast" },
          { character: "Joshua", text: "SHOUT! The LORD has given you this town!", action: "both arms up" },
          { character: "Everyone", text: "HOORAY!", action: "the biggest shout ever" },
          { character: "Everyone", text: "Rumble… rumble… CRASH!", action: "hands tumbling down like falling walls" },
          { character: "Miri", text: "The walls fell flat! And nobody even touched them!", action: "jump up and down" },
          { character: "Rahab", text: "Everyone stay together! The red rope is still in the window!", action: "hug your family" },
          { character: "Joshua", text: "Go to Rahab’s house and bring out her and her family, just as you promised her." },
          { character: "Narrator", text: "The two spies run to the house with the red rope.", direction: true },
          { character: "Rahab", text: "You came! You kept your promise!", action: "arms wide" },
          { character: "Joshua", text: "God kept HIS promise, Rahab. You and your family are safe with us now." },
          { character: "Miri", text: "So the strange plan wasn’t so strange after all.", action: "big smile" },
          { character: "Everyone", text: "Be strong and brave! The LORD is with us!" }
        ],
        debrief: [
          { level: "think", text: "Miri asked, “Are we sure this is the plan?” Why did Israel keep marching anyway?", hint: "They trusted God — he had already stopped the Jordan River. Hebrews 11:30: ‘Because of their faith, the people walked around the city of Jericho for seven days, and its walls fell down.’" },
          { level: "look", text: "Who was rescued from Jericho, and why?", hint: "Rahab and her whole family — because she trusted God and hid the spies, and they kept their promise (Joshua 6:22–25)." }
        ],
        notes: "SENSITIVE SCRIPT: the play ends with the walls falling and Rahab’s rescue — no fighting is acted. The God voice can be read by the teacher, from the back of the room, for an ‘unseen’ feel. Let the counting build and the shout be HUGE (warn the class next door!)." },

      { type: "question", id: "w-q2", title: "Why such a strange plan?", minutes: 1.5, level: "think", mode: "pair", seconds: 45,
        text: "God could have knocked the walls down any way he liked. Why do you think he chose marching, trumpets and a shout?",
        hint: "Good answers: so everyone would know GOD did it, not soldiers or clever machines; to test whether Israel would trust and obey; to give Jericho seven days to see and turn to God, like Rahab; strange plans make faith visible. Follow-up: ‘How do you think it felt to march in silence for six days?’ Follow-up 2: ‘What does this teach us when God’s way seems odd to us?’ If silent: ask ‘If Israel had used a battering ram, who would get the credit?’" },

      { type: "question", id: "w-q3", title: "The loudest shout?", minutes: 1, level: "dig", mode: "vote", seconds: 30, skippable: true,
        text: "Agree or disagree: “The walls fell because the Israelites shouted really loudly.”",
        options: ["Agree", "Disagree"],
        hint: "Let students vote, then dig. The shout didn’t have magic power — the power was God’s. Hebrews 11:30 says it happened ‘because of their faith’: their marching and shouting were trust in action, and God did the rest. Follow-up: ‘So what part did Israel play, and what part did God play?’ Follow-up 2: ‘What is one thing God asks you to do, where you have to trust him for the rest?’ If silent: remind them of the priests stepping into the river — they stepped, God stopped it." },

      { type: "apply", id: "w-apply", title: "Head · Heart · Hands", minutes: 1,
        head: "Faith keeps obeying God’s plan, even when it seems strange or slow.",
        heart: "God, I trust your way — even when I don’t understand it.",
        hands: "Think of one thing God asks that seems ‘strange’ — like being kind to someone who wasn’t kind to you first — and do it this week, at school, at home or in a team.",
        settings: ["school", "home", "sport"],
        notes: "This previews Thursday’s challenge. Brainstorm a few ‘strange’ acts of obedience as a class: forgive, share, tell the truth when it costs you." },

      { type: "scene", id: "w-scene", title: "The walls fall", minutes: 0.5, optional: true,
        art: { key: "t2w02d3-b" },
        boxes: [
          { text: "“SHOUT!”", pos: "tl", style: "shout" },
          { text: "The walls of Jericho fell flat.", pos: "br", style: "caption" }
        ] },

      { type: "verse", id: "w-verse", title: "Verse with actions", minutes: 1, optional: true, activity: "actions",
        notes: "Actions for Joshua 1:9 — finish by marching on the spot for ‘wherever you go’." },

      { type: "prayer", id: "w-pray", title: "Marching in silence", minutes: 3, mood: "calm", style: "silent",
        tip: "Israel marched around Jericho in silence, trusting God. Today we pray in silence too — praying Joshua 1:9 back to God in our heads.",
        opening: "Close your eyes. Imagine walking quietly around Jericho, step by step. No talking — just you and God.",
        phases: [
          { name: "Wow", lead: "Silently pray back: “I am the LORD your God.”",
            prompts: ["You are the LORD — you made the walls of Jericho fall flat.", "Your power is bigger than any wall."],
            starter: "Wow, God, your power…", seconds: 30, aloud: "Wow, LORD — no wall is too big for you!" },
          { name: "Sorry", lead: "Silently: is there a time you grumbled or gave up because God’s way seemed strange?",
            prompts: ["Sorry for complaining when obeying you felt slow.", "Sorry for trusting my own plans more than yours."],
            starter: "God, I’m sorry for…", seconds: 30, aloud: "God, we’re sorry for grumbling instead of trusting." },
          { name: "Thanks", lead: "Silently thank God for keeping his promise to Rahab.",
            prompts: ["Thank you for rescuing Rahab and her whole family.", "Thank you that you always keep your promises."],
            starter: "Thank you, God, for…", seconds: 35, aloud: "Thank you, God, that you keep every promise." },
          { name: "Please", lead: "Pray Joshua 1:9 back: “You are with me.” Name one ‘wall’ in your life.",
            prompts: ["You are with me, God — please help me with the wall of…", "Please help me keep obeying, even when I don’t understand."],
            starter: "God, you are with me. Please…", seconds: 40, aloud: "LORD, you are with us — help us keep marching." }
        ],
        closing: "Now, after the silence — one big whispered shout: Amen!",
        notes: "Read each lead slowly and leave real silence. The whispered ‘Amen!’ is a fun echo of Israel’s shout." }
    ] },

  /* ======================= THURSDAY ======================= */
  { label: "Thursday", theme: "Rahab’s Family Tree", roleplay: false, mood: "temple",
    learningIntentions: [
      "We are learning that Rahab has a place in the Faith Museum (Hebrews 11:30–31).",
      "We are learning that Rahab became part of Jesus’ family line (Matthew 1:5).",
      "I can say Joshua 1:9 and explain what it promises."
    ],
    assessment: "Students can sort true and false statements about the week’s stories, explain why Rahab is in Hebrews 11 and Jesus’ family tree, and recite Joshua 1:9.",
    resources: ["Screen", "Take-home challenge cards", "Optional: a long piece of red wool to make a ‘family tree’ line"],
    whereToNext: "Next week: Faith When You Feel Small — Gideon, the farmer hiding in a winepress whom God called a mighty warrior.",
    slides: [
      { type: "title", id: "th-title", title: "Rahab’s Family Tree", minutes: 0.5, kicker: "Term 2 · Week 2", sub: "Faith That Marches",
        art: { key: "t2w02d4-a" }, notes: "Celebrate: another exhibit added to the Faith Museum!" },

      { type: "review", id: "th-review", title: "True or false?", minutes: 2.5, format: "truefalse",
        prompt: "True or false? March on the spot for TRUE, sit still for FALSE!",
        items: [
          { text: "Rahab hid the spies under stalks of flax on her roof.", answer: true, why: "She hid them on her flat roof (Joshua 2:6)." },
          { text: "God told Joshua, “Be strong and brave.”", answer: true, why: "He said it three times (Joshua 1:6, 7, 9)." },
          { text: "The Jordan River stopped before the priests stepped in.", answer: false, why: "It stopped as soon as their feet touched the water." },
          { text: "Israel shouted all the way around Jericho every day.", answer: false, why: "They marched in silence until Joshua gave the signal." },
          { text: "Rahab and her whole family were rescued.", answer: true, why: "The spies kept their promise (Joshua 6:22–25)." },
          { text: "The walls fell because the soldiers pushed them over.", answer: false, why: "God made them fall flat." }
        ],
        hint: "Students march for true, sit for false; click to reveal. Ask for the ‘why’ before you show it.",
        notes: "Keep it quick and lively." },

      { type: "scripture", id: "th-scr", title: "Hebrews 11:30–31 · Matthew 1:5", minutes: 1, ref: "Hebrews 11:30–31; Matthew 1:5–6", version: "CEV",
        lines: [
          { text: "Because of their faith, the people walked around the city of Jericho for seven days, and its walls fell down.", ref: "Hebrews 11:30" },
          { text: "Rahab… had faith and welcomed the spies.", ref: "Hebrews 11:31" },
          { text: "Salmon and Rahab were the parents of Boaz. Boaz and Ruth were the parents of Obed. Obed was the father of Jesse.", ref: "Matthew 1:5" }
        ],
        emphasis: ["Because of their faith", "walls fell down", "Rahab", "had faith", "Salmon and Rahab"],
        notes: "Matthew 1 is Jesus’ family tree. Jesse’s son is King David (Matthew 1:6), and Jesus is ‘the son of David’. Only a few women are named in the list — Rahab is one of them." },

      { type: "story", id: "th-story", title: "From Jericho to Jesus", minutes: 2, transition: "page", mood: "temple",
        beats: [
          { text: "Rescued — and welcomed.", caption: "Rahab’s family made a new home among God’s people.",
            art: { key: "t2w02d4-a", label: "Thu · title + story beats 1–2", desc: "Rahab and her family, safe and smiling, standing among the tents of the Israelite camp beside Joshua, Rahab holding the red rope in her hands.", shot: "medium wide, warm", motion: "kenburns-in", chars: ["rahab", "joshua"],
              scene: "Rahab standing among the tents of the Israelite camp in warm evening light, the red rope folded in her hands, her parents, brothers and sisters gathered safely around her, as Joshua welcomes them with an open hand and Israelite children peek out from a tent doorway." } },
          { text: "Rahab → Boaz → Obed → Jesse → David…", caption: "Rahab was King David’s great-great-grandmother!" },
          { text: "…and one day, Jesus.", caption: "Born in Bethlehem, from Rahab’s family.", shout: true,
            art: { key: "t2w02d4-b", label: "Thu · story beats 3–4 + stretch scene", desc: "The little town of Bethlehem on its hill at night under a sky full of stars, a small stable glowing with warm light far off, a red cord tied to a wooden fence post in the foreground.", shot: "wide, night", motion: "kenburns-out",
              scene: "The little hill town of Bethlehem at night under a sky full of stars, flat-roofed houses on the hillside and a small stable glowing with warm lamplight far off, while in the foreground a bright red cord is tied to an old wooden fence post beside a quiet field of sheep." } },
          { text: "Nobody is too far away for God.", caption: "Jesus came to rescue people like Rahab — and us." }
        ],
        narration: "Rahab’s story could have ended with the walls falling: rescued, safe and living with God’s people. But God wasn’t finished with her.\n\nRahab married an Israelite man called Salmon, and they had a son called Boaz. Boaz married a kind woman called Ruth, who was also from another nation. Their son was Obed. Obed’s son was Jesse. And Jesse’s youngest son was a shepherd boy who fought a giant — David! Rahab was King David’s great-great-grandmother.\n\nAnd the family kept going. About a thousand years later, from that same family, in David’s town of Bethlehem, a baby was born. His name was Jesus. When Matthew wrote down Jesus’ family tree, he made sure to include Rahab’s name.\n\nThink about that. A woman from the wrong city, who had done wrong things, whom people looked down on — and God put her into the family of his own Son.\n\nThen, many years later, when the writer of Hebrews built his Faith Museum, he gave Rahab her very own exhibit, close to Abraham and Moses. ‘Rahab… had faith and welcomed the spies.’\n\nRahab’s faith wasn’t big or perfect. But she trusted the right God, and she acted on it. She hid the spies. She tied the red rope. She waited. And when the walls came down, God kept every promise made to her.\n\nThat’s good news for us too. Nobody is too far away for God. Nobody’s past is too messy. Jesus came from a family full of people who needed rescuing — and he came to rescue people like us. All we need to do is what Rahab did: trust him.",
        notes: "About 2 minutes. Matthew 1:5–6 lists Salmon, Boaz, Obed, Jesse and David; some families in biblical lists skip generations, so ‘great-great-grandmother’ follows Matthew’s list. Ruth (from Moab) is another outsider welcomed into God’s family. Hebrews 11:31 calls Rahab ‘an immoral woman’; ‘had done wrong things’ is enough for this age. Jesus is not drawn in this scene — only the glowing stable." },

      { type: "question", id: "th-q1", title: "Rahab’s famous family", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "Which famous king came from Rahab’s family?",
        options: ["King Saul", "King David", "The king of Jericho", "King Pharaoh"], answer: 1,
        hint: "Answer: B (Matthew 1:5–6). Follow-up: ‘And who was born, much later, from David’s family?’ (Jesus.) Follow-up 2: ‘Who was Rahab’s son, and whom did he marry?’ (Boaz, who married Ruth.) If silent: read the third scripture line slowly and follow the names with your finger." },

      { type: "question", id: "th-q2", title: "Into the museum", minutes: 1.5, level: "think", mode: "pair", seconds: 45,
        text: "Hebrews 11 puts Rahab in the Faith Museum alongside Abraham and Moses. Why do you think she earned an exhibit?",
        hint: "Good answers: she trusted the true God when everyone around her didn’t; her faith was brave — she risked her life; her faith acted — she hid the spies and tied the rope; she shows faith isn’t only for ‘religious’ or ‘good’ people. Follow-up: ‘What would you put in Rahab’s display case?’ (The red rope, the flax.) Follow-up 2: ‘Who else this week showed faith by doing something?’ (The priests, Joshua, the marchers.) If silent: re-read Hebrews 11:31 on the scripture slide." },

      { type: "recap", id: "th-recap", title: "This Week’s Big Idea", minutes: 1.5,
        points: [
          "Faith obeys God’s plan, even when it seems strange — like stepping into a river or marching round a wall.",
          "Joshua could be strong and brave because God promised, “I will be there to help you wherever you go.”",
          "Rahab trusted the true God, was rescued, and became part of Jesus’ family."
        ],
        notes: "Then the Big Idea stamps in. Ask a student to say it in their own words." },

      { type: "question", id: "th-q3", title: "Under the red rope", minutes: 1.5, level: "dig", mode: "write", seconds: 45, skippable: true,
        text: "Rahab was safe because she trusted God and stayed in the house with the red rope. How is that like trusting Jesus to rescue us?",
        hint: "Good answers: Rahab couldn’t save herself — she needed a rescue and a promise; we can’t fix our wrong things ourselves — Jesus rescues us; she had to trust the promise and stay ‘under’ it; Jesus welcomes anyone who trusts him, whatever their past. Note: like the Passover blood on the doorposts (Term 1), the red rope marked a house of rescue. Follow-up: ‘What did Rahab have to do to be saved?’ Follow-up 2: ‘Write one sentence: Jesus rescues people like…’ If silent: ask ‘Was Rahab saved because she was good, or because she trusted?’" },

      { type: "challenge", id: "th-chal", title: "This Week’s Challenge", minutes: 2,
        text: "Do one “strange” act of obedience — something God asks that seems odd. For example, be kind to someone who wasn’t kind to you first.",
        why: "“I am the LORD your God, and I will be there to help you wherever you go.” — Joshua 1:9",
        head: "Faith obeys God’s plan, even when it seems strange.", heart: "God, you are with me — help me trust your way.", hands: "Do one ‘strange’ act of obedience this week, and remember God is with you.",
        takeHome: true,
        notes: "Next Monday (Gideon hiding in the winepress) checks in on this. Brainstorm ideas: forgive someone, share when you’d rather not, own up when no one would know." },

      { type: "verse", id: "th-verse", title: "Memory verse: fade-out", minutes: 1.5, activity: "fade",
        notes: "Fade out Joshua 1:9. Bonus: who can say it while marching on the spot?" },

      { type: "scene", id: "th-scene", title: "From Rahab to Jesus", minutes: 1, optional: true,
        art: { key: "t2w02d4-b" },
        boxes: [
          { text: "“Rahab… had faith and welcomed the spies.”", pos: "tl", style: "speech" },
          { text: "Salmon and Rahab were the parents of Boaz…", pos: "br", style: "caption" }
        ] },

      { type: "prayer", id: "th-pray", title: "Write a “You are with me” prayer", minutes: 3, mood: "calm", style: "write",
        tip: "We finish our two weeks of praying Scripture back by writing one. Take Joshua 1:9 and turn it into your own prayer: “You are with me…”",
        opening: "Grab a pencil and a scrap of paper. Write as little or as much as you like — God reads every word.",
        phases: [
          { name: "Wow", lead: "Write Joshua 1:9 as a ‘Wow’: “You are the LORD my God…”",
            prompts: ["You are the LORD my God — you stopped a river and brought down a wall.", "You are with me wherever I go."],
            starter: "Wow, LORD, you are…", seconds: 40, aloud: "LORD, you are our God, and you are with us wherever we go!" },
          { name: "Sorry", lead: "Silently: was there a time this week you were afraid or discouraged instead of trusting God?",
            prompts: ["Sorry for forgetting you were with me.", "Sorry for thinking I was too far away or too messy for you."],
            starter: "God, I’m sorry for…", seconds: 25, aloud: "God, we’re sorry for forgetting that you are with us." },
          { name: "Thanks", lead: "Write a thank-you for Rahab’s story.",
            prompts: ["Thank you for welcoming Rahab into your family — and me too.", "Thank you that Jesus came to rescue people like us."],
            starter: "Thank you, God, for…", seconds: 35, aloud: "Thank you, Jesus, for coming to rescue us." },
          { name: "Please", lead: "Finish: “Because you are with me, please help me…” — think of your strange act of obedience.",
            prompts: ["Because you are with me, please help me be kind to…", "Please make me strong and brave when…"],
            starter: "Because you are with me, please help me…", seconds: 40, aloud: "Because you are with us, LORD, help us obey you this week." }
        ],
        closing: "Let’s pray Joshua 1:9 together, turned into a prayer: “LORD, you are with me wherever I go.” Amen!",
        notes: "Invite volunteers to read one line aloud — never force it. Students can take their prayer home with the challenge card." }
    ] }
  ]
};
