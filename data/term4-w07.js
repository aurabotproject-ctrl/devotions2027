/* Morninglight 2027 — Term 4 Week 7: Storm, Shipwreck and Rome (Acts 27–28; Philippians 1:12–14). Scripture: CEV. */
window.DEVOTIONS = window.DEVOTIONS || {};
window.DEVOTIONS["Term 4"] = window.DEVOTIONS["Term 4"] || {};
window.DEVOTIONS["Term 4"]["Week 7"] = {
  lessonTitle: "Storm, Shipwreck and Rome",
  passage: "Acts 27–28; Philippians 1:12–14",
  bigIdea: "God keeps his promises: he brought Paul and everyone on the ship safely through the storm, so we can take courage and trust him, and Jesus is the greatest promise God has ever kept.",
  godIs: "Keeps His Promises",
  memoryVerse: { ref: "Acts 27:25", text: "Men, have courage! I have faith in God, and I am sure that things will happen just as his angel told me.", version: "CEV",
    chunks: ["Men, have courage!", "I have faith in God,", "and I am sure", "that things will happen", "just as", "his angel told me."],
    actions: ["Raise a strong fist — courage!", "Hands over your heart — faith", "Point up, then nod firmly — sure", "Roll both hands forward — things happening", "Clap once — just as", "Flap your fingers like wings — the angel"],
    notes: "This is what Paul said to frightened sailors and soldiers in the middle of the storm. “Faith” here means trusting that God will do what he said. Say it with a steady, strong voice, not a shout." },
  prayerFocus: { skill: "Praying in a storm", tip: "A storm prayer can be very short. Paul didn’t make a speech in the storm; he trusted God and he gave thanks. This week we practise one-sentence prayers for stormy moments: “God, I trust you.” “Help!” “Thank you, God, you are with me.” Short prayers count, and God hears every one." },
  mood: "storm",
  cover: "t4w07-cover",
  characters: ["paul"],
  coverArt: { key: "t4w07-cover", label: "Week cover", desc: "A Roman grain ship tossed by a huge storm at night, lightning cracking above.", shot: "epic wide, storm",
    setting: "First-century Mediterranean world at sea: a large wooden Roman grain ship with one great square sail, rope rigging, a high curved stern, sailors and soldiers in tunics and cloaks, huge rolling waves.",
    scene: "A great wooden Roman grain ship climbs a towering wave in a howling night storm, its torn sail flapping and rigging straining. Lightning cracks across black clouds, spray explodes over the bow, and tiny figures cling to the deck.", chars: [] },
  comicArt: { key: "t4w07-comic", label: "Comic page (week opener)", format: "portrait", desc: "Six-panel comic page of Paul's storm, shipwreck and arrival in Rome.",
    setting: "First-century Mediterranean world at sea: a large wooden Roman grain ship with one great square sail, rope rigging, a high curved stern, sailors and soldiers in tunics and cloaks, huge rolling waves.",
    panels: "Six panels. Panel 1 (wide): the grain ship tossed by a night storm. Panel 2 (small): sailors throwing cargo overboard. Panel 3 (tall): Paul on deck encouraging the crew under a single shaft of light. Panel 4 (wide): survivors swimming and floating on planks to a rocky beach. Panel 5 (small): Paul shaking a snake into a bonfire, unharmed. Panel 6 (wide): Paul teaching visitors in a room in Rome beside a Roman guard.", chars: ["paul"] },

  days: [

  /* ======================= MONDAY ======================= */
  { label: "Monday", theme: "The Storm and the Angel’s Message", roleplay: true, mood: "storm",
    learningIntentions: [
      "We are learning why Paul was on a ship in a terrible storm, and what an angel told him there.",
      "We are learning what Paul did when everyone else gave up hope.",
      "I can explain why Paul said, “Have courage!” (Acts 27:25)."
    ],
    assessment: "Listen for students recalling that Paul was a prisoner sailing to Rome, that the storm lasted many days with no sun or stars, that an angel promised everyone on board would live, and that Paul trusted God’s word even though the storm hadn’t changed.",
    resources: ["Screen", "Optional: a length of rope for the “hold on” moment in the role-play", "Optional: a spray bottle or a tray of water for storm sound effects (use gently)"],
    whereToNext: "Tomorrow: the fourteenth night, a surprising prayer over bread before dawn, and a shipwreck where God keeps his promise.",
    slides: [
      { type: "title", id: "m-title", title: "The Storm and the Angel’s Message", minutes: 0.5, kicker: "Term 4 · Week 7", sub: "Storm, Shipwreck and Rome",
        art: { key: "t4w07-cover" }, notes: "Let the splash play. A quiet voice helps here: this is a big storm story, but it is mostly about trust, not fear." },

      { type: "hook", id: "m-hook", title: "No sun, no stars", minutes: 1.5,
        checkin: { text: "Last week we met Priscilla, Aquila, Timothy and Barnabas, ordinary people who served God in ordinary ways. Your challenge: encourage one person by name by saying or writing one real, specific thing. How did it go?" },
        text: "Imagine you’re on a boat in the middle of the sea. A storm hides the sun and the stars for days, so nobody knows where you are. What would you be thinking?",
        ask: "What do people usually do when they feel completely out of control?",
        hint: "Check-in first: ask two or three students who they encouraged and what they said, and how the person reacted. Then the hook: scared, panicking, wanting to go home, praying, getting angry. Land it: ‘Today Paul is on a ship in exactly that situation. Listen for what he does.’" },

      { type: "scripture", id: "m-scr", title: "Acts 27:20, 24–25", minutes: 1, ref: "Acts 27:20, 24–25", version: "CEV",
        lines: [
          { text: "For several days we could not see either the sun or the stars, and we were being badly tossed around by the storm. We finally gave up all hope of being saved.", ref: "Acts 27:20" },
          { text: "Paul, don’t be afraid! You will stand trial before the Emperor, and because of you, God will save the lives of everyone on the ship.", ref: "Acts 27:24" },
          { text: "Men, have courage! I have faith in God, and I am sure that things will happen just as his angel told me.", ref: "Acts 27:25" }
        ],
        emphasis: ["gave up all hope", "don’t be afraid", "save the lives of everyone", "have courage", "faith in God"],
        notes: "Acts 27:25 is our memory verse. The first line is Luke’s: the book of Acts is written by Luke, who was on this ship (the story says “we”). The angel’s words in verse 24 and Paul’s words in verse 25 are the heart of the story. “Saved” in verse 20 means rescued from the storm." },

      { type: "story", id: "m-story", title: "The storm", minutes: 3, transition: "page", mood: "storm",
        beats: [
          { text: "A prisoner on a ship.", caption: "Paul is sailing to Rome, and God has said he will get there." },
          { text: "A wild wind.", caption: "Cargo overboard. Ropes round the hull. No sun, no stars.", shout: true,
            art: { key: "t4w07d1-a", label: "Mon · story — the storm", desc: "Sailors throwing cargo overboard as waves crash over the deck in the storm.", shot: "medium wide, speed lines", motion: "kenburns-in", chars: ["paul"],
              setting: "First-century Mediterranean world at sea: a large wooden Roman grain ship with one great square sail, rope rigging, a high curved stern, sailors and soldiers in tunics and cloaks, huge rolling waves.",
              scene: "On the heaving deck in driving rain, sailors heave sacks of grain and tackle over the side as waves crash across the planks. Ropes whip loose, the mast groans, and Paul braces against the rail helping a frightened young sailor." } },
          { text: "All hope gone.", caption: "“We finally gave up all hope of being saved.”" },
          { text: "Then Paul stands up.", caption: "“Men, have courage! I have faith in God.”",
            art: { key: "t4w07d1-b", label: "Mon · role-play card — \"Keep up your courage\"", desc: "Paul standing on the tilting deck calmly encouraging the soaked, frightened crew and soldiers.", shot: "low-angle, dramatic", motion: "kenburns-up", chars: ["paul"],
              setting: "First-century Mediterranean world at sea: a large wooden Roman grain ship with one great square sail, rope rigging, a high curved stern, sailors and soldiers in tunics and cloaks, huge rolling waves.",
              scene: "Paul stands upright on the tilting deck, one hand raised, speaking with calm confidence to a huddle of soaked, exhausted sailors and soldiers. Behind him a break in the storm clouds lets through a single bright shaft of light." } },
          { text: "He trusts what God said, not what the waves say.", caption: "Same storm. A new kind of courage." }
        ],
        narration: "Paul is a prisoner, and he is on his way to Rome. He asked to have his case heard by the Roman Emperor, so a Roman officer named Julius is taking him there by ship, along with other prisoners, soldiers, sailors and Paul’s friends. One of those friends is Luke, who later wrote this story down. Some time before, the Lord had told Paul, ‘You must tell people about me in Rome too.’ So Paul is sure of one thing: God wants him to get there.\n\nIt is already autumn, the time of year when sailing across the sea becomes dangerous. When the ship stops at a harbour on the island of Crete, Paul speaks up. ‘Friends, if we sail on now, there will be terrible damage and loss.’ But the ship’s captain and owner want to keep going, and so does nearly everyone else. Then a gentle south wind begins to blow. ‘Perfect!’ they think, and off they go.\n\nIt does not last. Soon a wild wind roars down from the island and grabs the ship. The sailors can’t steer. They tie ropes right round the hull to stop it falling apart. They throw the heavy cargo into the sea. The next day, they throw out the ship’s own equipment. Day after day the sun and the stars stay hidden behind the storm, and without them the sailors can’t tell where they are. The waves crash, the timbers groan, and nobody has eaten properly for days. Luke writes, ‘We finally gave up all hope of being saved.’\n\nAnd then, in the middle of that terrible time, Paul stands up.\n\n‘Friends, you should have listened to me,’ he says. ‘But now, please, take courage. Not one of you will die. Only the ship will be lost. Last night an angel of the God I belong to, the God I worship, stood beside me. He said, “Paul, don’t be afraid. You will stand before the Emperor, and God has given you the lives of everyone sailing with you.”’\n\nThen Paul says the words that are our memory verse this week: ‘Men, have courage! I have faith in God, and I am sure that things will happen just as his angel told me. But first we will be shipwrecked on some island.’\n\nNotice what Paul does not say. He does not say, ‘The storm is nearly over.’ The waves are just as big. Paul is just as wet. But he has heard from God, and he knows God keeps his promises.\n\nSo here is the question for our classroom: when the waves are loud, whose voice will you listen to?",
        notes: "About 3 minutes. Source: Acts 27:1–26. Scripture: Paul’s warning at Crete (27:10), the wild wind, throwing cargo and gear overboard (27:14–19), no sun or stars (27:20), Paul’s speech and the angel’s message (27:21–26), and the fact that Luke was aboard (the “we” passages). Imagined: tone and small gestures only. Luke’s name is not mentioned in the sea story itself; Christians have long understood him to be the “we” writer, so we say so gently. The Lord’s earlier words to Paul are Acts 23:11, paraphrased. SENSITIVE: keep the storm exciting but not frightening. Canterbury students may carry memories of earthquakes and some may have had scary experiences on boats or in storms; keep the focus on God’s promise, not on danger, and reassure that this story ends safely." },

      { type: "question", id: "m-q1", title: "The angel’s message", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "What did the angel promise about the people on the ship?",
        options: ["God would save the lives of everyone on board", "Only Paul would live", "The ship would not be damaged", "The storm would end that night"], answer: 0,
        hint: "Answer: A, God would save the lives of everyone on the ship (Acts 27:24). Follow-up: ‘What did Paul say would happen to the ship?’ (It would be lost; they would be shipwrecked on an island.) Follow-up 2: ‘Who did the angel say Paul would stand before?’ (The Emperor.) If silent: re-read the second scripture line." },

      { type: "question", id: "m-q2", title: "Where did the courage come from?", minutes: 1, level: "think", mode: "pair", seconds: 40, skippable: true,
        text: "Paul was a prisoner on a ship that was being smashed by waves, and he told everyone to take courage. Where do you think his courage came from?",
        hint: "Good answers: God had spoken to him; he trusted God’s promise; he remembered God’s word to him about Rome; faith, not feelings. Follow-up: ‘Was his courage about the storm getting smaller?’ (No. The storm stayed the same.) Follow-up 2: ‘What is the difference between being brave and trusting God?’ If silent: ask what Paul had that the others didn’t." },

      { type: "roleplay", id: "m-rp", title: "Take Courage!", minutes: 5, ref: "Acts 27:13–26",
        art: { key: "t4w07d1-b" },
        imagined: "The angel’s words (Acts 27:24) and Paul’s words about courage (27:22–25) are Scripture, kept close to the CEV. Julius the officer is a real person in Acts, but his lines are imagined. The sailor and the soldier are invented characters, and so are their chatter, their fears and Paul’s kind reply about being scared. They are there to bring the story to life.",
        actions: ["Everyone: be the storm, whoosh with your voices and rock side to side", "Everyone: grip a pretend rope and hold on tight, then stand tall"],
        props: ["Optional: a length of rope the Everyone group can hold"],
        characters: [
          { name: "Narrator", color: "#F2C77B", desc: "Tells the story" },
          { name: "Paul", color: "#7BA7D9", desc: "A prisoner, calm and trusting" },
          { name: "Julius", color: "#B0BEC5", desc: "The Roman officer in charge of the prisoners" },
          { name: "Sailor", color: "#81C784", desc: "An invented sailor, exhausted and scared" },
          { name: "Soldier", color: "#E57373", desc: "An invented soldier who doesn’t believe it yet" },
          { name: "Angel", voice: true, desc: "Heard, not seen — a clear, steady reader" },
          { name: "Everyone", color: "#FFFFFF", desc: "The storm, then the crew holding on together" }
        ],
        lines: [
          { character: "Narrator", text: "Night on the sea. The storm has raged for days. Nobody has seen the sun or the stars.", direction: true },
          { character: "Everyone", text: "Whoooosh! Crash! Splash!", action: "rock side to side, wiggle fingers for rain", sfx: "storm" },
          { character: "Sailor", text: "Another wave! Heave the cargo over the side! Quick, quick!", action: "heave a pretend sack" },
          { character: "Soldier", text: "I have never been so wet in my whole life. How long has it been?", action: "wring out a sleeve" },
          { character: "Sailor", text: "Days. Without the sun or the stars, I can’t even tell where we are.", action: "shake head" },
          { character: "Julius", text: "Keep working. Hold the ropes tight. We must not let this ship break apart.", action: "point firmly" },
          { character: "Narrator", text: "Then, in the middle of all the fear, Paul stands up.", direction: true },
          { character: "Paul", text: "Friends, please listen. You have not eaten for days. But take courage. Not one of you will die.", action: "stand steady, one hand up" },
          { character: "Soldier", text: "Nobody will die? Look at those waves! How can you say that?", action: "wave arm at the storm" },
          { pause: "Freeze! Paul is a prisoner on a ship that is breaking up, and he says, ‘Take courage.’ Would you believe him? Why or why not?", seconds: 20 },
          { character: "Paul", text: "Last night an angel of the God I belong to and worship stood beside me.", action: "look up" },
          { character: "Angel", text: "Paul, don’t be afraid! You will stand trial before the Emperor." },
          { character: "Angel", text: "And because of you, God will save the lives of everyone on the ship." },
          { character: "Sailor", text: "An angel? Out here? In this?", action: "stare" },
          { character: "Julius", text: "You are a prisoner, Paul. Why should I trust this message?", action: "arms folded" },
          { character: "Paul", text: "Because I trust the God who sent it. Men, have courage! It will happen just as his angel told me.", action: "calm and kind" },
          { character: "Soldier", text: "I’m still scared, though.", action: "small voice" },
          { character: "Paul", text: "So am I, a little. Let’s be scared and trust God together.", action: "put a hand on his shoulder" },
          { character: "Paul", text: "But the ship will be lost. We will run aground on an island.", action: "nod slowly" },
          { character: "Sailor", text: "I’ll take that. I would rather lose a ship than a life.", action: "a tired smile" },
          { character: "Julius", text: "Then we hold on, all of us, until morning.", action: "grip the rope" },
          { character: "Everyone", text: "Take courage! Hold on!", action: "grip the pretend rope, then stand up tall" },
          { character: "Narrator", text: "The storm still roared. But now everyone on board had a promise to hold on to.", direction: true }
        ],
        debrief: [
          { level: "look", text: "What was the angel’s message to Paul?", hint: "‘Don’t be afraid. You will stand trial before the Emperor, and God will save the lives of everyone on the ship.’ (Acts 27:24.) Follow-up: ‘What would happen to the ship?’ (It would be lost.)" },
          { level: "think", text: "Paul still felt scared, but he said ‘take courage’. What was he holding on to?", hint: "God’s promise: what God had said, not how the storm looked. Courage is not no fear; it is trusting God while we are afraid." }
        ],
        notes: "Scripture-close lines: the angel’s two lines (Acts 27:24) and Paul’s “Have courage…just as his angel told me” (27:25) and “the ship will be lost… shipwrecked on some island” (27:22, 26). Imagined: the sailor, the soldier and their chatter, Julius’s questions, and Paul’s reply about being scared. Let the storm be big and silly, then make the final line quiet and strong. The Angel is a voice only: have a calm reader stand slightly apart and read it clearly. Keep the rope moment gentle." },

      { type: "question", id: "m-q3", title: "Scared and trusting", minutes: 1, level: "dig", mode: "discuss", seconds: 40,
        text: "The angel told Paul, “Don’t be afraid,” but Paul was still on the same ship in the same storm. Can a person feel scared and still trust God? How?",
        hint: "Good answers: yes, trust is a choice not a feeling; Paul could be scared and still hold on to God’s word; Jesus’ friends were often afraid and he stayed with them. Follow-up: ‘What helps you trust when you feel scared?’ Follow-up 2: ‘What could you say to God in a scary moment?’ If silent: ask what the soldier in our role-play said, ‘I’m still scared’, and what Paul said back." },

      { type: "apply", id: "m-apply", title: "Head · Heart · Hands", minutes: 1,
        head: "God keeps his promises, so we can take courage even in a storm that hasn’t gone away.",
        heart: "God, when I’m scared, help me remember that you have spoken and I can trust you.",
        hands: "When a worry storm hits today or this week (a test, a new place, a fight with a friend, thunder at night), whisper “I trust God” once, take one slow breath, then do the next small thing.",
        settings: ["home", "school", "bedtime"],
        notes: "Keep it small and doable. Some students are carrying real worries; don’t push them to say what they are. Model it: whisper ‘I trust God’ together once." },

      { type: "scene", id: "m-scene", title: "No sun, no stars", minutes: 0.5, optional: true,
        art: { key: "t4w07d1-a" },
        boxes: [
          { text: "“We finally gave up all hope of being saved.”", pos: "tl", style: "caption" },
          { text: "“Men, have courage!”", pos: "br", style: "shout" }
        ] },

      { type: "verse", id: "m-verse", title: "Memory verse peek", minutes: 1, optional: true, activity: "echo",
        notes: "Introduce Acts 27:25. Echo each chunk with its action: say it, they say it back." },

      { type: "prayer", id: "m-pray", title: "Praying in a storm — fists and open hands", minutes: 3, mood: "calm", style: "hands",
        tip: "This term we’re praying like the early church. This week: praying in a storm. A storm prayer can be one short sentence, like “God, I trust you.” Fists show how tightly we hold on when we are scared; open hands show we let God hold us.",
        opening: "Make two tight fists, like holding the ship’s rope in a storm. Take a slow breath. We’ll open our hands bit by bit as we pray.",
        phases: [
          { name: "Wow", lead: "Open your hands a little. God spoke to Paul in the middle of the storm.",
            prompts: ["God, you are stronger than any wind or wave.", "God, you sent an angel to say “Don’t be afraid,” and you keep your word."],
            starter: "Wow, God, you are…", seconds: 35, aloud: "Wow, God, you are stronger than every storm, and you keep your promises!" },
          { name: "Sorry", lead: "Turn your hands over, palms down. Tell God about the times we only listened to the loud voice of fear.",
            prompts: ["Sorry for the times I only listened to my fears, not to what you say.", "Sorry for the times I ignored good advice, like the sailors ignored Paul’s warning at Crete."],
            starter: "God, I’m sorry for…", seconds: 30, aloud: "God, we’re sorry for listening to our fears more than to you." },
          { name: "Thanks", lead: "Palms up. Thank God that nobody on that ship, and nobody in this room, faces a storm alone.",
            prompts: ["Thank you that Paul was not alone on that ship, and that I’m not alone either.", "Thank you for the people who say “take courage” to me when I’m scared."],
            starter: "Thank you, God, for…", seconds: 30, aloud: "Thank you, God, that you are with us in every storm." },
          { name: "Please", lead: "Hands open wide. Say one sentence about a storm you or someone you know is in.",
            prompts: ["Please help me say “I trust God” when I’m scared.", "Please be with people today who are in storms: real ones at sea, storms of worry, or storms of sickness."],
            starter: "Please, God, help…", seconds: 40, aloud: "Please, God, help us trust you in every storm." }
        ],
        closing: "Let’s say our storm prayer together, with open hands: “God, I trust you.” Amen.",
        notes: "Model a one-sentence prayer first: ‘God, I’m scared about ___, but I trust you.’ Students pray silently or aloud. Be gentle: some students face a real storm at home or at school. Short and simple is great." }
    ] },

  /* ======================= TUESDAY ======================= */
  { label: "Tuesday", theme: "Bread Before Dawn", roleplay: false, mood: "sea",
    learningIntentions: [
      "We are learning what happened on the fourteenth night, before the ship reached land.",
      "We are learning how Paul gave thanks for bread in the middle of the storm.",
      "I can explain how God kept his promise to save everyone on the ship."
    ],
    assessment: "Listen for students recalling the fourteenth night, the sailors’ attempt to leave in the lifeboat, Paul giving thanks for bread in front of everyone, the ship running aground, and all 276 people reaching land safely, just as the angel said.",
    resources: ["Screen", "Optional: a loaf or a bread roll to break and share (check allergies first)", "Paper and pens for the apply activity"],
    whereToNext: "Tomorrow: the island of Malta, where kind strangers light a fire in the rain, and Paul gets a very surprising visitor on his hand.",
    slides: [
      { type: "title", id: "t-title", title: "Bread Before Dawn", minutes: 0.5, kicker: "Term 4 · Week 7", sub: "Storm, Shipwreck and Rome",
        art: { key: "t4w07d2-b" }, notes: "Let the splash play. If you brought bread, keep it covered until the story slide." },

      { type: "hook", id: "t-recap", title: "Recap", minutes: 1, style: "recap",
        text: "Yesterday we were on a ship in a terrible storm, and an angel gave Paul a promise.",
        ask: "What did the angel promise about the people on the ship?",
        hint: "God would save the lives of everyone on the ship, though the ship itself would be lost. Then: ‘The storm hasn’t stopped. Today we find out what Paul does on the fourteenth night, and how God keeps that promise.’" },

      { type: "scripture", id: "t-scr", title: "Acts 27:25, 37, 44", minutes: 1, ref: "Acts 27:25, 37, 44", version: "CEV",
        lines: [
          { text: "Men, have courage! I have faith in God, and I am sure that things will happen just as his angel told me.", ref: "Acts 27:25" },
          { text: "There were 276 of us on the ship.", ref: "Acts 27:37" },
          { text: "This is how everyone made it safely to shore.", ref: "Acts 27:44" }
        ],
        emphasis: ["have courage", "276", "everyone made it safely"],
        notes: "Acts 27:44 is Luke’s summary: the others held on to planks or pieces of the ship, and everyone reached land. Some ancient copies give a different number for the people on board; we use the one in most Bibles, 276." },

      { type: "story", id: "t-story", title: "Bread before dawn", minutes: 3.5, transition: "page", mood: "sea",
        beats: [
          { text: "The fourteenth night.", caption: "The sea is getting shallower. Land is near." },
          { text: "A thank-you in the storm.", caption: "Paul breaks bread in front of everyone and gives thanks to God.",
            art: { key: "t4w07d2-a", label: "Tue · story — bread before dawn", desc: "Paul breaking bread and giving thanks on deck before dawn while everyone watches and begins to eat.", shot: "medium, lantern light", motion: "kenburns-in", chars: ["paul"],
              setting: "First-century Mediterranean world at sea: a large wooden Roman grain ship with one great square sail, rope rigging, a high curved stern, sailors and soldiers in tunics and cloaks, huge rolling waves.",
              scene: "In the grey hour before dawn, Paul stands on the wet deck holding up a round loaf, giving thanks to God, then breaking it. Around him weary sailors, soldiers and prisoners sit on coils of rope and begin to eat, faces lit by a swinging lantern." } },
          { text: "A beach. A sandbar.", caption: "The front sticks fast. The back breaks up.", shout: true },
          { text: "Everyone safe.", caption: "All 276 reach land, just as God promised.",
            art: { key: "t4w07d2-b", label: "Tue · everyone safe", desc: "The ship stuck on a sandbar breaking up, while everyone swims or floats on planks to the beach.", shot: "epic wide, morning", motion: "kenburns-out", chars: [],
              setting: "First-century island of Malta: a rocky bay with low cliffs and pale limestone, scrubby bushes, a small stone farming estate, islanders in simple tunics and cloaks, a wrecked Roman ship offshore.",
              scene: "In stormy morning light, the ship's bow is stuck fast on a sandbar while the stern breaks apart in the surf. Dozens of people swim or cling to planks and drift toward a rocky beach, where the first survivors help others ashore." } }
        ],
        narration: "Yesterday we left a ship tossed around in a storm, with a promise from God ringing in the night. Today the storm is still going. It is the fourteenth night. For two weeks the ship has been driven across the dark sea, and nobody knows where it will end up.\n\nAbout midnight, the sailors sense something. Land is close. They drop a weighted rope into the water and find that the sea is getting shallower. Now they are afraid of a different thing: rocks! So they throw four anchors out from the back of the ship and wait, wishing for daylight.\n\nThen some of the sailors try something sneaky. They start lowering the little lifeboat, pretending they are putting out more anchors, ready to escape and leave everyone else behind. Paul sees it, and tells Julius and the soldiers, ‘If these men don’t stay on board, you can’t be saved.’ The soldiers cut the ropes and let the lifeboat drift away. Now everyone is in the same boat, in the most real way.\n\nJust before dawn, Paul urges everyone to eat. ‘You have been so worried that you haven’t eaten for two weeks,’ he says. ‘Please eat something. You need it to stay alive. Not one of you will lose even a hair from your head.’ And then Paul does something wonderful. In front of all of them, soldiers, sailors and prisoners, he takes a loaf of bread, thanks God for it, breaks it, and begins to eat. In the middle of a storm, he says thank you.\n\nIt works. Everyone cheers up, and all 276 people on the ship have a good meal. Then they throw the rest of the wheat into the sea to make the ship lighter.\n\nWhen daylight comes, nobody recognises the coast. But they see a bay with a beach, and they decide to try to run the ship onto it. They cut the anchors loose, hoist a small sail, and head for the shore. Then, bang! The front of the ship sticks fast in a sandbank, while the back is battered to pieces by the waves.\n\nSome soldiers worry that the prisoners will swim away and escape. But Julius, who wants to save Paul, stops them. He orders everyone who can swim to jump in first and head for land, and the rest to follow on planks and pieces of the broken ship.\n\nOne by one, they wade out of the water, soaked, coughing and shaking. They count each other. Nobody is missing. All 276 reach the shore safely, just as God had promised. And the ship is lost, just as God had said.\n\nGod did not miss a single detail.",
        notes: "About 3½ minutes. Source: Acts 27:27–44. Scripture: the fourteenth night, the soundings, the four anchors, the lifeboat and the cut ropes (27:30–32), Paul’s urging to eat and giving thanks for bread (27:33–36), the number 276 (27:37), throwing out the wheat, the sandbar, and everyone reaching land (27:38–44). Imagined: the sailors’ wishes for daylight and the wading. SENSITIVE: Acts 27:42 says the soldiers wanted to kill the prisoners so none could escape, and Julius stopped them. We say only that the soldiers worried about prisoners escaping and Julius said no, with no mention of how. Paul’s bread is not the Lord’s Supper; Luke uses the same words to show Paul giving thanks to God in front of everyone." },

      { type: "dig", id: "t-dig", title: "Promise and result", minutes: 2,
        prompt: "God made some very specific promises through the angel and Paul. Match each promise to what happened.",
        columns: ["What God said", "What happened"],
        items: [
          { left: "“God will save the lives of everyone on the ship”", right: "All 276 people reached land safely" },
          { left: "“Not one of you will lose even a hair from your head”", right: "Nobody was hurt badly enough to be lost; they counted and nobody was missing" },
          { left: "“The ship will be lost”", right: "The ship stuck on a sandbank and broke apart in the waves" },
          { left: "“We will be shipwrecked on some island”", right: "They landed on an island called Malta" }
        ],
        reveal: "God kept every word, even the surprising parts. Not one detail was missed.",
        notes: "Reveal row by row. The last line of the promise in Acts 27:34 is a proverb-like way to say “you will be completely safe”. Point out that God also promised Paul would reach Rome (Acts 27:24); we’ll see that on Thursday." },

      { type: "question", id: "t-q1", title: "How many?", minutes: 1, level: "look", mode: "finish", seconds: 20,
        text: "Finish the sentence: “There were ________ people on the ship, and every one of them reached land safely.”",
        reveal: "“…276.” Luke counted, and God didn’t lose a single person.",
        hint: "Answer: 276 (Acts 27:37, 44). Follow-up: ‘What did Paul do just before dawn that surprised everyone?’ (He thanked God for bread in front of them all.) Follow-up 2: ‘What happened to the ship?’ (It stuck on a sandbank and broke apart.) If silent: re-read the second scripture line." },

      { type: "question", id: "t-q2", title: "Thanks in the storm", minutes: 1.5, level: "think", mode: "silent", seconds: 40,
        text: "Paul gave thanks for bread in front of everyone while the ship was still in danger. Why do you think he did that?",
        hint: "Good answers: he trusted God to keep his promise; thanking God showed he believed; it encouraged the others; he wanted them to eat and keep up their strength; thankfulness helps with fear. Follow-up: ‘What did the others do after they saw him?’ (They cheered up and ate.) Follow-up 2: ‘When has someone’s calm made you feel braver?’ If silent: give 20 seconds of quiet, then ask for one word." },

      { type: "question", id: "t-q3", title: "Saved too", minutes: 1.5, level: "dig", mode: "discuss", seconds: 40, skippable: true,
        text: "Even the sailors who tried to sneak off in the lifeboat were saved, because God’s promise was for everyone on the ship. What does that tell you about the kind of promise God made?",
        hint: "Good answers: God’s promise doesn’t depend on how good people are; it depends on God; God is kind and generous even to people who don’t deserve it; it is a promise of grace. Follow-up: ‘Is that fair?’ Follow-up 2: ‘Where else does God show kindness to people who don’t deserve it?’ (Jesus, who died for everyone.) If silent: ask who on the ship had earned being rescued." },

      { type: "apply", id: "t-apply", title: "Head · Heart · Hands", minutes: 2,
        head: "God keeps every word he says, so his promises can be trusted.",
        heart: "God, thank you that your word is true, even when I can’t see how.",
        hands: "Choose one promise of Jesus, like “I will be with you always” (Matthew 28:20), and write it on a sticky note or a piece of paper. Put it where you will see it tomorrow morning, such as inside your bag, on your bedroom door, or in your lunch box.",
        settings: ["home", "school", "bedtime"],
        notes: "Matthew 28:20 (CEV): “I will be with you always, even until the end of the world.” Help students who struggle to choose by giving them that one. This is a gentle, private activity. Students keep their note." },

      { type: "scene", id: "t-scene", title: "Everyone safe", minutes: 1, optional: true,
        art: { key: "t4w07d2-b" },
        boxes: [
          { text: "276 on board. 276 on the shore.", pos: "tl", style: "caption" },
          { text: "God did not miss a single detail.", pos: "br", style: "shout" }
        ] },

      { type: "verse", id: "t-verse", title: "Build the verse", minutes: 1, activity: "build",
        notes: "Build Acts 27:25 chunk by chunk. Ask: ‘When did Paul say this? Was the storm over yet?’ Tomorrow we meet the kind people who build a fire." },

      { type: "prayer", id: "t-pray", title: "Praying in a storm — in pairs", minutes: 3, mood: "calm", style: "pairs",
        tip: "Paul said thank you to God right in the middle of the storm. Today we pray in pairs: one sentence for each other. Praying for a friend’s storm is one of the kindest things we can do.",
        opening: "Turn to the person next to you. You’ll take turns. First you’ll say something to God, then you’ll pray one sentence for each other. You can pray very quietly.",
        phases: [
          { name: "Wow", lead: "Tell God what he is like, using the bread story.",
            prompts: ["God, you keep every promise, down to the last detail.", "God, you looked after all 276 people on that ship, and you look after us."],
            starter: "Wow, God, you are…", seconds: 30, aloud: "Wow, God, you keep every promise you make!" },
          { name: "Sorry", lead: "Silently, think of the times we tried to escape in the “lifeboat” instead of trusting God.",
            prompts: ["Sorry for the times I tried to do things my own way instead of trusting you.", "Sorry for the times I have been scared and forgot to thank you."],
            starter: "God, I’m sorry for…", seconds: 25, aloud: "God, we’re sorry for trying to do things our own way instead of trusting you." },
          { name: "Thanks", lead: "Thank God for food and for people who encourage you.",
            prompts: ["Thank you for bread, and for the food we eat every day.", "Thank you for everyone on that ship who made it to the shore, and for the friends who stay with me in my storms."],
            starter: "Thank you, God, for…", seconds: 30, aloud: "Thank you, God, for the food and the friends you give us." },
          { name: "Please", lead: "Tell your partner one thing that feels a bit stormy for you, then pray one sentence for each other.",
            prompts: ["Please help my partner trust you in their stormy thing.", "Please be with people who are on dangerous seas today, such as sailors and fishers, and keep them safe."],
            starter: "Please, God, help…", seconds: 45, aloud: "Please, God, help each other and keep people safe in every storm." }
        ],
        closing: "Say together: “God, we trust you.” Amen.",
        notes: "Partners can say their stormy thing in just a word. Nobody has to share anything private. Stay close to students who may find pairs hard and offer to pair with them. Short and simple is great." }
    ] },

  /* ======================= WEDNESDAY ======================= */
  { label: "Wednesday", theme: "A Fire in the Rain", roleplay: true, mood: "fire",
    learningIntentions: [
      "We are learning how the people of Malta welcomed 276 cold, wet strangers.",
      "We are learning what happened when a snake bit Paul’s hand, and how God cared for him.",
      "I can describe how kindness from strangers was part of God keeping his promise."
    ],
    assessment: "Listen for students recalling that the islanders built a fire in the rain, that a snake bit Paul’s hand and he was not hurt, that the islanders changed their minds about him twice, and that Publius’ father was healed after Paul prayed. Listen for students noticing that God used kind strangers.",
    resources: ["Screen", "Optional: a torch or battery tea light as the “fire”", "Optional: blankets or jackets for the “shivering survivors”"],
    whereToNext: "Tomorrow: Paul finally reaches Rome, and we see why God’s promises are always kept.",
    slides: [
      { type: "title", id: "w-title", title: "A Fire in the Rain", minutes: 0.5, kicker: "Term 4 · Week 7", sub: "Storm, Shipwreck and Rome",
        art: { key: "t4w07d3-a" }, notes: "Let the splash play. Remind students that yesterday ended with everybody safe on a beach." },

      { type: "hook", id: "w-hook", title: "A warm welcome", minutes: 1,
        text: "Yesterday all 276 people reached land. Imagine you’ve just crawled out of the sea, cold, wet and tired, onto a strange beach. What would you most need?",
        ask: "What would it mean to you if someone you had never met welcomed you?",
        hint: "Take three answers: warmth, food, dry clothes, a hug, to know where they were, someone friendly. Then: ‘Today we meet the people of Malta, and we find out how they welcomed a whole shipload of strangers, and what a surprise was waiting on Paul’s hand.’" },

      { type: "scripture", id: "w-scr", title: "Acts 28:2, 5, 8", minutes: 1, ref: "Acts 28:2–8", version: "CEV",
        lines: [
          { text: "The people of the island were very friendly, and they welcomed us around a fire that they had built because it was cold and starting to rain.", ref: "Acts 28:2" },
          { text: "But Paul shook the snake off into the fire and wasn’t harmed.", ref: "Acts 28:5" },
          { text: "Paul went to his room and prayed. Then he placed his hands on the man and healed him.", ref: "Acts 28:8" }
        ],
        emphasis: ["very friendly", "fire", "wasn’t harmed", "prayed"],
        notes: "These are Luke’s words. In verse 8 the sick man is Publius’ father, who had a fever and stomach trouble. The islanders spoke a different language from the sailors and soldiers; Luke simply calls them “the people of the island”. The Bible says Paul prayed and God healed him; the healing came from God, not from Paul." },

      { type: "story", id: "w-story", title: "Kindness on a beach", minutes: 3, transition: "page", mood: "fire",
        beats: [
          { text: "A fire in the rain.", caption: "Strangers welcome 276 shivering people around a huge fire.",
            art: { key: "t4w07d3-a", label: "Wed · story — a fire in the rain", desc: "Islanders building a big fire on the beach for the shivering survivors as rain falls.", shot: "wide, firelight", motion: "kenburns-left", chars: ["paul"],
              setting: "First-century island of Malta: a rocky bay with low cliffs and pale limestone, scrubby bushes, a small stone farming estate, islanders in simple tunics and cloaks, a wrecked Roman ship offshore.",
              scene: "On the cold rainy beach, kind islanders build a big crackling bonfire as soaked, shivering survivors crowd round it wrapped in blankets. Paul bends to add an armful of sticks to the flames, rain streaking through the firelight." } },
          { text: "Paul gathers sticks.", caption: "Even a prisoner can help." },
          { text: "A snake!", caption: "It bites onto Paul’s hand.", shout: true,
            art: { key: "t4w07d3-b", label: "Wed · role-play card — the snake", desc: "Paul calmly shaking a snake off his hand into the fire while islanders stare in shock — he is unharmed.", shot: "medium close, firelight", motion: "kenburns-in", chars: ["paul"],
              setting: "First-century island of Malta: a rocky bay with low cliffs and pale limestone, scrubby bushes, a small stone farming estate, islanders in simple tunics and cloaks, a wrecked Roman ship offshore.",
              scene: "By the bonfire, Paul calmly flicks his hand and a small snake falls away into the flames. He is completely unharmed. Islanders around him freeze with wide eyes and open mouths, firelight flickering on their astonished faces." } },
          { text: "Murderer? A god?", caption: "Neither guess was right. God looked after Paul." },
          { text: "Publius’ father is healed.", caption: "Paul prays, and God heals him." }
        ],
        narration: "The sea is behind them. The shipwrecked people stagger up a rocky beach on an island called Malta, soaked to the bone. It is cold. It is raining. There are 276 of them, and nobody knows what the islanders will do.\n\nThe islanders could have stayed away. Instead, they come running. They build a huge fire and call everyone to come and get warm, because of the rain and the cold. Luke writes that the people of the island were ‘very friendly’. They are strangers who don’t even speak the same language as the sailors, and they give a whole shipload of strangers a fire, a welcome and a place to dry out.\n\nPaul doesn’t sit back and wait to be served. Even though he’s a prisoner, tired and cold, he picks up an armful of sticks and puts them on the fire.\n\nAnd out of the heat slithers a snake. A viper, a poisonous one, and it fastens onto Paul’s hand and hangs there.\n\nThe islanders gasp. ‘This man must be a murderer!’ they whisper to each other. ‘He escaped from the sea, but justice won’t let him live.’ They watch and wait, expecting something terrible.\n\nPaul simply shakes the snake off into the fire. He is not hurt at all.\n\nThe islanders wait. And wait. Nothing happens. So they change their minds completely. ‘He must be a god!’ they say. Paul never said he was, and he certainly wasn’t. The Bible tells us that God looked after him, and that is all.\n\nNearby, a man named Publius, the chief man of the island, owns some land. He welcomes Julius, Paul and their friends into his home for three days, and treats them very kindly. Publius’ father is lying in bed with a fever and a bad stomach. Paul goes in to see him. He prays, puts his hands on him, and God heals him. After that, the other sick people on the island come to Paul too, and they are healed.\n\nThey stay on Malta for three months, and when it is time to go, the islanders honour them and load the ship with everything they need.\n\nNotice who looked after Paul in this part of the story. Not the Romans. Not his own people. Strangers on an island. God had promised to save everyone on that ship, and part of his plan was a bonfire and some very kind people on a beach.",
        notes: "About 3 minutes. Source: Acts 28:1–10. Scripture: the island (Malta), the friendly islanders and the fire, the snake, the islanders’ two guesses, Publius’ welcome, his father’s healing, the other healings, the honour and gifts at the end. Imagined: Paul’s armful of sticks is in Acts 28:3; the whispered words are paraphrased from 28:4; the details of the weather and the viper’s heat come from the text. Paul’s reply “I’m only a man” in the role-play is imagined (Acts doesn’t record his words). SENSITIVE: some students are afraid of snakes (there are no snakes in Aotearoa); keep it matter-of-fact. Some are praying for a sick family member: be honest that God heals in his own way and time, and that this is one story of him doing it; do not promise that every prayer will end this way. Christchurch students may find a shipwreck survivor story familiar; keep it kind." },

      { type: "question", id: "w-q1", title: "The welcome", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "How did the islanders welcome the shipwrecked people?",
        options: ["They built a fire and welcomed everyone", "They sailed away", "They locked their doors", "They asked everyone for money"], answer: 0,
        hint: "Answer: A, they built a fire and welcomed everyone around it, because it was cold and starting to rain (Acts 28:2). Follow-up: ‘How does Luke describe the islanders?’ (Very friendly.) Follow-up 2: ‘What did Paul do at the fire?’ (He gathered sticks and put them on.) If silent: re-read the first scripture line." },

      { type: "roleplay", id: "w-rp", title: "A Fire in the Rain", minutes: 5, ref: "Acts 28:1–9",
        art: { key: "t4w07d3-b" },
        imagined: "Acts 28:1–9 gives the rain and cold, the fire, the snake, the islanders’ two guesses, Publius’ welcome, and his father’s healing. The islanders’ chatter, Julius’ thank-you and Paul’s words (such as “I’m only a man”) are imagined. The two islanders are invented characters; Publius and Julius are real people in Acts, but their lines are imagined.",
        actions: ["Everyone: shiver and chatter your teeth, hug yourself", "Everyone: gasp when the snake appears, then cheer when the sick man is well"],
        props: ["Optional: a torch as the “fire”", "Optional: a rubber snake or a rolled-up scarf"],
        characters: [
          { name: "Narrator", color: "#F2C77B", desc: "Tells the story" },
          { name: "Paul", color: "#7BA7D9", desc: "Cold, tired, and still helping" },
          { name: "Julius", color: "#B0BEC5", desc: "The Roman officer, grateful and amazed" },
          { name: "Islander (woman)", color: "#81C784", desc: "An invented islander who takes charge of the fire" },
          { name: "Islander (man)", color: "#E57373", desc: "An invented islander who jumps to conclusions" },
          { name: "Publius", color: "#BA9DDB", desc: "The chief man of the island, welcoming and worried" },
          { name: "Everyone", color: "#FFFFFF", desc: "Shivering survivors, then cheering islanders" }
        ],
        lines: [
          { character: "Narrator", text: "A cold, wet beach on the island of Malta. Two hundred and seventy-six shipwrecked people shiver on the sand.", direction: true },
          { character: "Everyone", text: "Brrrr! My teeth are chattering!", action: "hug yourself and shiver", sfx: "rain" },
          { character: "Islander (woman)", text: "Quick! More wood! These people are freezing! Build up the fire!", action: "wave arms, pile on wood" },
          { character: "Islander (man)", text: "Where did they all come from? There must be hundreds of them!", action: "stare at the wrecked ship" },
          { character: "Julius", text: "A storm. Fourteen nights at sea. We have nothing to give you, but thank you.", action: "bow your head" },
          { character: "Islander (woman)", text: "Sit by the fire. Take a blanket. We’ll find you something warm to drink.", action: "wrap a blanket round a shoulder" },
          { character: "Narrator", text: "Paul gathers an armful of sticks and puts them on the fire.", direction: true },
          { character: "Everyone", text: "Ssssss! Hissss!", action: "wiggle a hand like a snake", sfx: "hiss" },
          { character: "Islander (man)", text: "Look! A snake! It’s fastened onto his hand!", action: "point and gasp" },
          { pause: "Freeze! The islanders think the worst. What do you think they’re whispering to each other? What would you do if you were Paul?", seconds: 20 },
          { character: "Islander (woman)", text: "He must be a murderer! He escaped the sea, but justice won’t let him live.", action: "step back" },
          { character: "Paul", text: "Off you go, little one. Into the fire.", action: "calmly shake the snake off" },
          { character: "Narrator", text: "They waited. And waited. Paul was not hurt at all.", direction: true },
          { character: "Islander (man)", text: "Not even swollen! Maybe he isn’t a murderer. Maybe he’s a god!", action: "whisper loudly" },
          { character: "Paul", text: "No, no. I’m only a man. It is God who looks after us.", action: "shake head, smiling" },
          { character: "Publius", text: "Welcome, strangers. Stay at my home. But my father is very ill with a fever.", action: "hands wide, then worried" },
          { character: "Paul", text: "May I see him?", action: "walk to the sick man" },
          { character: "Narrator", text: "Paul prayed. He placed his hands on the man, and God healed him.", direction: true },
          { character: "Publius", text: "Father! You’re sitting up! The fever is gone!", action: "hug the sick man" },
          { character: "Islander (woman)", text: "Bring our sick people too! The strangers’ God has helped!", action: "wave people over" },
          { character: "Julius", text: "We came out of the storm, and kindness met us on this beach. We won’t forget it.", action: "hand on heart" },
          { character: "Everyone", text: "Thank you, God! Thank you, Malta!", action: "cheer and stand tall" }
        ],
        debrief: [
          { level: "look", text: "How did the islanders change their minds about Paul, and was either guess right?", hint: "First they thought he was a murderer, then a god. Neither was right: he was a man God was looking after. Follow-up: ‘What did Paul say about himself in our play?’" },
          { level: "think", text: "Who showed God’s kindness in that scene? How?", hint: "The islanders, with fire, blankets and a home; Publius with hospitality; Paul with prayer. God used ordinary kind people to keep his promise of safety." }
        ],
        notes: "Scripture-close lines: the cold and the fire (28:2), the snake (28:3), the islanders’ words (28:4, paraphrased), the shaking off (28:5), the second guess (28:6), Publius’ welcome (28:7), and the healing (28:8). Imagined: the chatter, Paul’s kind jokes and “I’m only a man”, Julius’ thank-you, and the islanders’ names (none are given). Keep the snake moment funny, not scary. Some students may be nervous about snakes; the toy is optional. Keep the healing gentle." },

      { type: "question", id: "w-q2", title: "God’s kind helpers", minutes: 1.5, level: "think", mode: "pair", seconds: 45,
        text: "God promised to save everyone on the ship, and part of how he kept that promise was through kind strangers. What does that tell you about how God looks after people?",
        hint: "Good answers: God often uses ordinary people to help; kindness can be part of God’s plan; God provides through people; he can work through people who don’t even know him yet. Follow-up: ‘Who has been a kind helper to you?’ Follow-up 2: ‘How could you be that for someone?’ If silent: ask who built the fire, and who was warmed by it." },

      { type: "question", id: "w-q3", title: "Sticks in a storm", minutes: 1, level: "dig", mode: "discuss", seconds: 40, skippable: true,
        text: "Paul was a prisoner, cold and shipwrecked, and he still went to gather sticks for the fire. Why might serving others, even when we feel stormy, help us trust God?",
        hint: "Good answers: it takes our eyes off ourselves; helping reminds us we have something to give; God can use us in a hard moment; trust shows up in what we do. Follow-up: ‘Is it easy to help when we are the ones who feel low?’ Follow-up 2: ‘What small job could you do for someone this week?’ If silent: ask what Paul could have said instead of picking up sticks." },

      { type: "apply", id: "w-apply", title: "Head · Heart · Hands", minutes: 1,
        head: "God looks after people through kind strangers and ordinary helpers, and he keeps his promises.",
        heart: "God, thank you for people who are kind to me. Make me a kind helper for someone else.",
        hands: "Be a Malta person this week: find one classmate who looks like they’re having a stormy day and do one kind thing. Share your lunch, save them a spot, or help them carry something.",
        settings: ["school", "sport", "home"],
        notes: "Make it concrete: playground, sports team, lunch table, bus. Remind students that kindness doesn’t need a big speech; the islanders just built a fire." },

      { type: "scene", id: "w-scene", title: "A snake in the firelight", minutes: 0.5, optional: true,
        art: { key: "t4w07d3-b" },
        boxes: [
          { text: "A snake! He must be a murderer!", pos: "tl", style: "speech" },
          { text: "…No, he must be a god!", pos: "br", style: "speech" }
        ] },

      { type: "verse", id: "w-verse", title: "Memory verse: scramble", minutes: 1, optional: true, activity: "scramble",
        notes: "Scramble Acts 27:25. Ask students to unscramble it in pairs, then say it with the actions." },

      { type: "prayer", id: "w-pray", title: "Praying in a storm — write it down", minutes: 3, mood: "calm", style: "write",
        tip: "Today we write our prayers. Writing slows us down and helps us say what we really mean. Paul’s prayers on Malta were short and simple: he prayed over a sick man and God helped. Short prayers are fine.",
        opening: "Take your pen and paper. At the top, write: “God, I trust you in my storm.” Then write one line for each part of our prayer.",
        phases: [
          { name: "Wow", lead: "Write one line about who God is, using today’s story.",
            prompts: ["God, you looked after Paul when the snake bit his hand.", "God, you use ordinary, kind people to keep your promises."],
            starter: "God, you are…", seconds: 35, aloud: "God, you look after your people, and you keep your promises!" },
          { name: "Sorry", lead: "Silently: think of a time you could have been kind, like the islanders, and weren’t.",
            prompts: ["Sorry for the times I walked past someone who needed help.", "Sorry for the times I judged someone quickly, like the islanders did when they saw the snake."],
            starter: "God, I’m sorry for…", seconds: 25, aloud: "God, we’re sorry for judging people and for not helping when we could." },
          { name: "Thanks", lead: "Write a thank-you for someone who has been kind to you in a hard time.",
            prompts: ["Thank you for the islanders who built a fire in the rain.", "Thank you for the people who have welcomed me when I felt like a stranger."],
            starter: "Thank you for…", seconds: 40, aloud: "Thank you, God, for kind people who help us in our storms." },
          { name: "Please", lead: "Write one sentence for someone you know who is in a stormy time right now.",
            prompts: ["Please be with people who are sick, and bring them help and healing.", "Please help me be a kind helper to someone who is in a storm this week."],
            starter: "Please, God, help…", seconds: 35, aloud: "Please, God, look after people in storms and help us be kind helpers." }
        ],
        closing: "Fold your page and keep it somewhere safe. Everyone: Amen.",
        notes: "Students keep their writing private. Some may be praying for a sick relative: stay close and be gentle, and don’t promise any particular outcome. Short is great." }
    ] },

  /* ======================= THURSDAY ======================= */
  { label: "Thursday", theme: "Still Preaching in Rome", roleplay: false, mood: "dawn",
    learningIntentions: [
      "We are learning how Paul finally reached Rome, and what he did there while under guard.",
      "We are learning what this story shows us about God keeping his promises.",
      "I can say “I trust God” and pray one short sentence when things feel stormy (Acts 27:25)."
    ],
    assessment: "Students can retell the week’s story in order, explain that God kept every promise he made on the ship, say that Paul kept telling people about Jesus even in chains, and recite Acts 27:25 with the actions.",
    resources: ["Screen", "Take-home challenge cards", "Pens"],
    whereToNext: "Next week: Polycarp, “Eighty-Six Years I Have Served Him”. We step out of the Bible and into church history to meet an old man who stayed faithful to Jesus all his life.",
    slides: [
      { type: "title", id: "th-title", title: "Still Preaching in Rome", minutes: 0.5, kicker: "Term 4 · Week 7", sub: "Storm, Shipwreck and Rome",
        art: { key: "t4w07d4-a" }, notes: "Let the splash play." },

      { type: "review", id: "th-review", title: "True or false?", minutes: 2.5, format: "truefalse",
        prompt: "True or false? Stand up for TRUE, sit down for FALSE!",
        items: [
          { text: "Paul was on the ship because he was sailing to Rome.", answer: true, why: "He was a prisoner on his way to stand before the Emperor (Acts 27:1, 24)." },
          { text: "The angel promised that the ship would be saved.", answer: false, why: "The ship would be lost, but God would save everyone’s lives (Acts 27:22, 24)." },
          { text: "Paul gave thanks for bread before dawn, in front of everyone.", answer: true, why: "He thanked God and ate, and everyone cheered up and ate too (Acts 27:35–36)." },
          { text: "Some people on the ship did not reach land.", answer: false, why: "All 276 reached land safely, just as God had promised (Acts 27:44)." },
          { text: "The islanders of Malta were unfriendly to the shipwrecked people.", answer: false, why: "They were very friendly, and built a fire in the rain (Acts 28:2)." },
          { text: "A snake bit Paul’s hand, and he shook it off into the fire.", answer: true, why: "He wasn’t harmed (Acts 28:3–5)." }
        ],
        hint: "Read each statement aloud. Students stand for true, sit for false. After each, ask ‘How do you know?’ and let students point to the story.",
        notes: "Keep it quick and friendly." },

      { type: "scripture", id: "th-scr", title: "Acts 28:30–31; Philippians 1:12", minutes: 1, ref: "Acts 28:30–31; Philippians 1:12", version: "CEV",
        lines: [
          { text: "For two years Paul stayed in a rented house and welcomed everyone who came to see him.", ref: "Acts 28:30" },
          { text: "He bravely preached about God’s kingdom and taught about the Lord Jesus Christ, and no one tried to stop him.", ref: "Acts 28:31" },
          { text: "My friends, I want you to know that what has happened to me has actually helped to spread the good news.", ref: "Philippians 1:12" }
        ],
        emphasis: ["rented house", "bravely preached", "no one tried to stop him", "spread the good news"],
        notes: "Acts ends here, with the good news still spreading. Philippians 1:12–14 is from a letter Paul wrote to the church in Philippi (the church from Week 5) while he was a prisoner. Many Christians think he wrote it from Rome; some think another place; we say “while in prison”. “Good news” = the message about Jesus." },

      { type: "story", id: "th-story", title: "Rome at last", minutes: 2, transition: "page", mood: "dawn",
        beats: [
          { text: "A welcome on the road.", caption: "Christians from Rome walk out to meet Paul. He thanks God and takes courage." },
          { text: "A rented house in Rome.", caption: "Paul is guarded by a soldier, but he welcomes everyone.",
            art: { key: "t4w07d4-a", label: "Thu · story — Rome under guard", desc: "Paul in his rented house in Rome, chained to a soldier, welcoming visitors and teaching about Jesus.", shot: "medium wide, interior", motion: "kenburns-right", chars: ["paul"],
              setting: "First-century city of Rome: a modest rented upper-floor room in a stone apartment block, a window looking over red-tiled roofs, temples and columns in the distance, Roman soldiers in helmets and cloaks.",
              scene: "In a plain rented room in Rome, Paul sits on a bench with a light chain running from his wrist to a Roman soldier beside him. He leans forward teaching a group of visitors, scrolls open, while the soldier listens despite himself." } },
          { text: "Chains that spread the news.", caption: "“What has happened to me has actually helped to spread the good news.”",
            art: { key: "t4w07d4-b", label: "Thu · the good news keeps spreading", desc: "Paul dictating a letter by lamplight while a friend writes, a guard dozing, the city of Rome beyond the window.", shot: "medium, lamp light", motion: "kenburns-left", chars: ["paul"],
              setting: "First-century city of Rome: a modest rented upper-floor room in a stone apartment block, a window looking over red-tiled roofs, temples and columns in the distance, Roman soldiers in helmets and cloaks.",
              scene: "By lamplight Paul paces his room, speaking, while a friend sits at a small table writing on a sheet of papyrus. A Roman guard leans against the doorframe listening closely, and through the window the rooftops and temples of Rome glow at dusk." } },
          { text: "God keeps his promises.", caption: "Storm, shipwreck, snake and chains — and Paul got to Rome.", shout: true }
        ],
        narration: "After three months on Malta, Paul and the others sail on in a new ship, and at last they reach Italy. News of Paul’s arrival races ahead. When he is still a long way from Rome, Christians from the city walk out along the road to meet him. When Paul sees them, he thanks God and, Luke says, he takes courage. After all that, a welcome party!\n\nAnd so Paul comes to Rome, the biggest city in the world, where the Emperor lives. Just as God had promised, he is there. But Paul is not free. He is allowed to live in a rented house, but a Roman soldier guards him all the time.\n\nSo what does Paul do? Complain? Give up? No. He invites local Jewish leaders to his house, and from morning till evening he explains the kingdom of God, showing from the Scriptures that Jesus is the promised King. Some believe. Some don’t. And for two whole years, Paul welcomes everyone who comes. Luke ends his book like this: Paul ‘bravely preached about God’s kingdom and taught about the Lord Jesus Christ, and no one tried to stop him.’\n\nThink about the soldiers who guarded Paul. They changed shifts, but each one had to sit there and listen. Paul wrote in a letter from this time, ‘What has happened to me has actually helped to spread the good news.’ His chains became a way to share Jesus.\n\nThe book of Acts does not tell us what happened to Paul after that. Luke stops there, with the good news still spreading. But we know this: God said Paul would get to Rome, through storm, shipwreck, snake and chains, and he did. God keeps his promises, even when the road is wilder than we thought. And the greatest promise of all, that Jesus would rescue us and be with us always, God has kept too.",
        notes: "About 2 minutes. Source: Acts 28:11–31 and Philippians 1:12–14. Scripture: the three months on Malta, the believers meeting Paul on the road (28:15), the rented house, the soldier guard, the talk from morning till evening, the two years and Luke’s closing line. Paul being chained to a guard is from Acts 28:16, 20. The soldiers hearing the message is the point of Philippians 1:13 (the guard knew he was in prison for Christ). Philippians is one of the letters Paul wrote while a prisoner; where exactly is debated. If a student asks what happened to Paul after Acts: Acts does not say. Christian writers soon after say he died in Rome; we do not need to go further, but we can say he trusted Jesus to the end (see 2 Timothy 4:7). Keep it calm and short. Some students may have family from places where Christians still face trouble: reassure them that Paul’s story shows God is with his people in hard places." },

      { type: "question", id: "th-q1", title: "Where did Paul end up?", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "Where is Paul at the end of the book of Acts?",
        options: ["In Rome, under guard, still telling people about Jesus", "Back home in Tarsus", "Still on Malta", "In Jerusalem"], answer: 0,
        hint: "Answer: A, in Rome, in a rented house with a soldier guarding him, bravely preaching about Jesus (Acts 28:30–31). Follow-up: ‘How long did he stay there?’ (Two years.) Follow-up 2: ‘Who was allowed to visit him?’ (Everyone who came.) If silent: re-read the first scripture line." },

      { type: "question", id: "th-q2", title: "A wilder road", minutes: 1.5, level: "think", mode: "pair", seconds: 45,
        text: "God promised Paul he would reach Rome. He did, but through a storm, a shipwreck, a snake and chains. What does that tell you about how God keeps his promises?",
        hint: "Good answers: God keeps them, but not always in the way we expect; the road can be hard; God is with us on the road; his promises are bigger than our plans. Follow-up: ‘What would Paul have said about God at the end of the road?’ Follow-up 2: ‘Which part of the story do you remember most, and where was God?’ If silent: ask which part of the trip looked least like a promise being kept." },

      { type: "recap", id: "th-recap", title: "This week’s big idea", minutes: 1.5,
        points: [
          "In a terrible storm, God sent an angel to Paul with a promise: everyone on the ship would live. Paul said, “Men, have courage!”",
          "God kept every word. All 276 reached land, the ship was lost, and kind islanders on Malta looked after them.",
          "Paul reached Rome and kept telling people about Jesus, even in chains. God keeps his promises, so we can take courage and trust him."
        ],
        notes: "Then the Big Idea stamps in. Have students say the memory verse, Acts 27:25, with the actions." },

      { type: "question", id: "th-q3", title: "Easy road?", minutes: 1.5, level: "dig", mode: "vote", seconds: 30, skippable: true,
        text: "Agree or disagree: “If God makes a promise, the road to it will be easy.”",
        options: ["Agree", "Disagree"],
        hint: "Disagree: God’s promise to Paul came true, but the road went through a storm, a shipwreck, a snake and chains. God’s promises are sure, but the road isn’t always easy, and God is with us on it. Follow-up: ‘What did Paul do on the hard road?’ Follow-up 2: ‘What promise of Jesus would you hold on to in a storm?’ If silent: ask what helped Paul keep going." },

      { type: "challenge", id: "th-chal", title: "This Week’s Challenge", minutes: 2,
        text: "When you feel stormy, say “I trust God” (Acts 27:25) and pray one sentence, then do the next small thing.",
        why: "“Men, have courage! I have faith in God, and I am sure that things will happen just as his angel told me.” — Acts 27:25",
        head: "God keeps his promises, so we can trust him even when the storm hasn’t gone away.", heart: "God, when I’m scared, help me trust what you have said.", hands: "When you feel stormy this week, say “I trust God”, pray one short sentence (like “God, help me, I trust you”), then do the next small thing.",
        takeHome: true,
        notes: "Give out the take-home cards. Help students think of examples: a test, a game, a family worry, a dark bedroom, a fight with a friend. Remind them: one breath, one sentence, then the next small thing. Some students are in real storms at home; stay available. Next Monday’s check-in will ask about this." },

      { type: "verse", id: "th-verse", title: "Memory verse: fade-out", minutes: 1.5, activity: "fade",
        notes: "Fade out Acts 27:25. Bonus: say Acts 16:31 or Colossians 3:23 from earlier this term if your class still remembers them." },

      { type: "scene", id: "th-scene", title: "Storm, shipwreck and Rome", minutes: 1, optional: true,
        art: { key: "t4w07-cover" },
        boxes: [
          { text: "Men, have courage!", pos: "tl", style: "shout" },
          { text: "God keeps his promises.", pos: "br", style: "caption" }
        ] },

      { type: "prayer", id: "th-pray", title: "Praying in a storm — one sentence aloud", minutes: 3, mood: "calm", style: "out-loud",
        tip: "Paul prayed and gave thanks in the middle of the storm, and God kept every promise. Today we practise the short “storm prayer”: one sentence aloud, like “God, I trust you.” Short is enough.",
        opening: "Sit comfortably and take a slow breath. We’ll pray out loud, one short sentence at a time. You can say yours quietly, or just say Amen with us.",
        phases: [
          { name: "Wow", lead: "Call out one thing God is, from this week’s story.",
            prompts: ["God, you keep every promise you make.", "God, you are stronger than every storm, and you are with us in all of them."],
            starter: "God, you are…", seconds: 35, aloud: "God, you keep your promises, and you are stronger than any storm!" },
          { name: "Sorry", lead: "Silently: tell God about the times we ran from him, or didn’t trust him, when we felt stormy.",
            prompts: ["Sorry for the times I tried to escape in my own lifeboat instead of trusting you.", "Sorry for the times I only listened to my fears."],
            starter: "God, I’m sorry for…", seconds: 25, aloud: "God, we’re sorry for not trusting you, and thank you for forgiving us." },
          { name: "Thanks", lead: "Call out one thing you’re thankful for from the story.",
            prompts: ["Thank you that all 276 people reached land safely.", "Thank you for Jesus, the greatest promise you ever kept."],
            starter: "Thank you, God, for…", seconds: 40, aloud: "Thank you, God, for keeping your promises, and for Jesus." },
          { name: "Please", lead: "Say your own storm prayer: one short sentence, aloud or silently.",
            prompts: ["Please help me say “I trust God” when I feel stormy this week.", "Please be with people today who are in storms, and bring them courage and help."],
            starter: "Please, God, help…", seconds: 40, aloud: "Please, God, help us trust you in every storm." }
        ],
        closing: "Together: “God, I trust you.” Amen.",
        notes: "Celebrate the whole-class voice. If any students would rather pray silently, that’s fine. Pray for Christians who are in hard places gently, without scary detail." }
    ] }
  ]
};
