/* Morninglight 2027 — Term 1 Week 2: Broken Friendship (Genesis 3). Scripture: CEV. */
window.DEVOTIONS = window.DEVOTIONS || {};
window.DEVOTIONS["Term 1"] = window.DEVOTIONS["Term 1"] || {};
window.DEVOTIONS["Term 1"]["Week 2"] = {
  lessonTitle: "Broken Friendship",
  passage: "Genesis 3",
  bigIdea: "Sin breaks our friendship with God, but God comes looking for us and promises a rescuer.",
  godIs: "Seeker",
  memoryVerse: { ref: "1 John 1:9", text: "But if we confess our sins to God, he can always be trusted to forgive us and take our sins away.", version: "CEV",
    chunks: ["But if we confess", "our sins to God,", "he can always be trusted", "to forgive us", "and take our sins away."],
    actions: ["Hand on heart, head bowed", "Point up to God", "Thumbs up — he’s trustworthy", "Arms open wide", "Sweep hands away, like brushing off dust"] },
  prayerFocus: { skill: "Sorry", tip: "A ‘Sorry’ prayer is being honest with God about what we’ve done wrong — and trusting him to forgive." },
  mood: "dawn",
  cover: "t1w02-cover",
  characters: ["adam", "eve"],
  coverArt: { key: "t1w02-cover", label: "Week cover", desc: "A great fruit tree in silhouette in the middle of the garden, two tiny figures beneath it, one shaft of light breaking through heavy cloud.", shot: "dramatic wide shot",
    scene: "The dark silhouette of a great fruit tree in the centre of a garden, two tiny figures standing beneath it, one shaft of brilliant light breaking down through heavy clouds from the upper left." },
  comicArt: { key: "t1w02-comic", label: "Comic page (week opener — for the comic-page viewer, coming in a later build)", format: "portrait", desc: "Six-panel comic page of Genesis 3.",
    panels: "Six panels. Panel 1 (wide): the garden and the tree. Panel 2 (small): a serpent's eye in extreme close-up. Panel 3 (small): Eve's hand reaching to the fruit. Panel 4 (tall): Adam and Eve hiding among dark trees. Panel 5 (wide): a shaft of light moving through the evening garden. Panel 6 (wide, bottom): a single green sprout in cracked ground lit by dawn.", chars: ["adam", "eve"] },

  days: [

  /* ======================= MONDAY ======================= */
  { label: "Monday", theme: "The Serpent’s Question", roleplay: true, mood: "dawn",
    learningIntentions: [
      "We are learning how the snake twisted God’s words in Genesis 3.",
      "We are learning what it means to trust what God says.",
      "I can explain how temptation often starts with a question that makes God sound bad."
    ],
    assessment: "Listen for students noticing how the snake changed God’s words, and naming a real-life ‘Did God really say…?’ moment.",
    resources: ["Screen", "Optional: a piece of fruit for the role-play"],
    whereToNext: "Tomorrow: Adam and Eve hide — and God comes looking with a question of his own: “Where are you?”",
    slides: [
      { type: "title", id: "m-title", title: "The Serpent’s Question", minutes: 0.5, kicker: "Term 1 · Week 2", sub: "Broken Friendship",
        art: { key: "t1w02-cover" }, notes: "Let the splash play. Say: ‘Last week everything was very good. This week… something goes wrong.’" },

      { type: "hook", id: "m-hook", title: "Tricked!", minutes: 1.5,
        checkin: { text: "Last week we heard how God made everything — and it was very good. Your challenge: notice three things God made each day and thank him. What did you notice?" },
        text: "Have you ever been tricked? A prank, a fake ad, a friend who said “Trust me…”",
        ask: "How did the trick work — what did it make you believe?",
        hint: "Start with the check-in: take 3–4 answers about what they noticed and thanked God for (celebrate them!). Then the hook: take a few trick stories. Land it: ‘Tricks usually work by making something false sound true. Today we meet the first trickster in the Bible — and he starts with a question.’" },

      { type: "scripture", id: "m-scr", title: "Genesis 3:1–6", minutes: 1, ref: "Genesis 3:1–6", version: "CEV",
        lines: [
          { text: "The snake was sneakier than any of the other wild animals that the LORD God had made. One day it came to the woman and asked, “Did God tell you not to eat fruit from any tree in the garden?”", ref: "Genesis 3:1" },
          { text: "The woman answered, “God said we could eat fruit from any tree in the garden, except the one in the middle.”", ref: "Genesis 3:2–3" },
          { text: "“No, you won’t!” the snake replied.", ref: "Genesis 3:4" },
          { text: "The woman stared at the fruit. It looked beautiful and tasty… and she ate some of the fruit. Her husband was there with her, so she gave some to him, and he ate it too.", ref: "Genesis 3:6" }
        ],
        emphasis: ["sneakier", "Did God tell you", "No, you won’t!", "ate"],
        notes: "Verse 3 is shortened on screen; verse 6 is abridged (‘…’). Read slowly — let the snake’s ‘No, you won’t!’ land." },

      { type: "story", id: "m-story", title: "One rule, one question", minutes: 3, transition: "page",
        beats: [
          { text: "God gave Adam and Eve one rule.", caption: "Eat from any tree you like — except the one in the middle.",
            art: { key: "t1w02d1-a", label: "Mon · story beats 1–3", desc: "The special tree alone in the middle of the garden, heavy with fruit, a long serpent coiled on a branch with glittering eyes.", shot: "wide, slightly eerie", motion: "kenburns-in",
              scene: "The garden's special tree standing alone in the middle of the garden, heavy with fruit, a long serpent coiled around a branch with glittering watchful eyes, dappled light and deep shadow. No people." } },
          { text: "Then a sneaky voice asked a question.", caption: "“Did God tell you not to eat fruit from any tree in the garden?”" },
          { text: "“No, you won’t!”", caption: "The snake made God sound like a liar — and a spoilsport.", shout: true },
          { text: "She stared at the fruit…", caption: "It looked beautiful and tasty. She ate — and gave some to Adam.",
            art: { key: "t1w02d1-b", label: "Mon · story beats 4–5 + stretch scene", desc: "Close-up of Eve’s hand reaching toward a fruit, her face uncertain, the snake’s shadow falling across her.", shot: "close-up", motion: "kenburns-in", chars: ["eve"],
              scene: "Eve's hand reaching toward a piece of fruit, her face uncertain and tempted, the shadow of the serpent falling across her." } },
          { text: "For the first time, someone said no to God.", caption: "And everything was about to change." }
        ],
        narration: "Last week we ended in a perfect garden. Everything God made was very good. Adam and Eve had food, work, each other — and best of all, they had God. They could walk and talk with him.\n\nGod had given them just one rule. ‘You may eat fruit from any tree in the garden,’ he said, ‘except the one in the middle.’ One tree. That’s all. Everything else was a yes.\n\nThen, one day, a snake came to Eve. The Bible says it was sneakier than any other animal God had made. And it didn’t start with a lie. It started with a question: ‘Did God tell you not to eat fruit from any tree in the garden?’\n\nListen to how sneaky that is. God had said yes to every tree but one. The snake made it sound like God had said no to all of them. It twisted God’s words to make God sound mean.\n\nEve answered, ‘God said we could eat from any tree except the one in the middle. If we eat from that one, we will die.’\n\nThen the snake said the boldest thing: ‘No, you won’t!’ It called God a liar. It told her God was keeping something good from her — that if she ate, she would be wise, just like God.\n\nEve looked at the fruit. It looked beautiful. It looked tasty. And now she wondered: maybe God wasn’t telling the whole truth. Maybe she knew better.\n\nShe reached out. She took the fruit. She ate it. Adam was right there with her — he didn’t stop her, and he didn’t speak up for God. She gave some to him, and he ate it too.\n\nFor the first time in the whole world, people chose their own way instead of God’s way. The Bible has a word for that: sin. And as soon as they had eaten, they knew something had gone terribly wrong.\n\nThe snake is still asking the same kind of question today: ‘Did God really say…?’ ‘Would God really mind?’ ‘Just this once.’ Learning to spot that voice is one of the most important things you will ever learn.",
        notes: "About 3 minutes. Keep the tone serious but not scary. The Bible doesn’t describe what the snake looked like beyond ‘sneaky’; Revelation 12:9 later links it with the devil — mention only if asked." },

      { type: "question", id: "m-q1", title: "How did the snake start?", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "How did the snake start its trick?",
        options: ["It bit Eve", "It asked a question that twisted God’s words", "It offered her a present", "It climbed the tree and shook it"], answer: 1,
        hint: "Answer: B — ‘Did God tell you not to eat fruit from any tree in the garden?’ Follow-up: ‘What had God actually said?’ (Every tree except one.) Follow-up 2: ‘Why is a question sneakier than an order?’ If silent: re-read Genesis 3:1 from the scripture slide." },

      { type: "question", id: "m-q2", title: "Why a question?", minutes: 1.5, level: "think", mode: "pair", seconds: 45, skippable: true,
        text: "Why do you think the snake started with a question instead of just saying, “Eat the fruit”?",
        hint: "Good answers: a question makes you doubt; it gets you thinking God might be mean; it doesn’t look like a trick; it lets you ‘decide for yourself’. Follow-up: ‘What did the question make God sound like?’ Follow-up 2: ‘Where do you hear questions like that today?’ If silent: ‘If I asked, “Did your mum REALLY say no screens?” — what am I trying to do?’" },

      { type: "roleplay", id: "m-rp", title: "The Serpent’s Question", minutes: 5, ref: "Genesis 3:1–7",
        art: { key: "t1w02d1-a" },
        imagined: "The snake’s and Eve’s words are kept close to Genesis 3 (CEV); Adam’s thoughts and the actions are imagined. Keep the snake sneaky, not scary.",
        actions: ["Everyone: a long, quiet hiss whenever the snake speaks", "Everyone: gasp when the fruit is eaten"],
        props: ["Optional: a piece of fruit"],
        characters: [
          { name: "Narrator", color: "#F2C77B", desc: "Tells the story" },
          { name: "Serpent", color: "#8BC34A", desc: "Sneaky, smooth, twists every word" },
          { name: "Eve", color: "#F48FB1", desc: "Curious, then unsure" },
          { name: "Adam", color: "#FFB547", desc: "Right there — but silent until the end" },
          { name: "Everyone", color: "#FFFFFF", desc: "The rest of the class — hisses and gasps" }
        ],
        lines: [
          { character: "Narrator", text: "Eve is walking in the garden. Adam is nearby. The tree in the middle is heavy with fruit.", direction: true },
          { character: "Narrator", text: "The snake was sneakier than any of the other wild animals that the LORD God had made." },
          { character: "Everyone", text: "Sssssssss…", action: "a long, quiet hiss" },
          { character: "Serpent", text: "Did God tell you not to eat fruit from any tree in the garden?", action: "slide in slowly, smooth voice" },
          { character: "Eve", text: "God said we could eat fruit from any tree in the garden — except the one in the middle." },
          { character: "Eve", text: "He told us not to eat from that tree or even touch it. If we do, we will die." },
          { character: "Serpent", text: "No, you won’t!" },
          { character: "Everyone", text: "Sssssssss…" },
          { character: "Serpent", text: "God knows that when you eat it, you’ll know right from wrong — just like God does." },
          { character: "Eve", text: "Just like God…?", action: "look at the fruit" },
          { pause: "Freeze! The snake has just changed God’s words. What did God REALLY say? And what should Eve say now?", seconds: 20 },
          { character: "Narrator", text: "The woman stared at the fruit. It looked beautiful and tasty." },
          { character: "Eve", text: "Maybe God is keeping something good from us…", action: "reach out slowly" },
          { character: "Adam", text: "…", action: "stand there, saying nothing" },
          { character: "Narrator", text: "She ate some of the fruit. Her husband was there with her, so she gave some to him, and he ate it too." },
          { character: "Everyone", text: "Gasp!", action: "hands over mouths" },
          { character: "Serpent", text: "Sssss… my work here is done.", action: "slide away" },
          { character: "Narrator", text: "At once they saw what they had done." },
          { character: "Adam", text: "What have we done? Why didn’t I say something?", action: "hands on head" },
          { character: "Eve", text: "Everything feels… different.", action: "wrap arms around yourself" },
          { character: "Narrator", text: "They sewed fig leaves together to cover themselves. For the first time, they felt ashamed." },
          { character: "Everyone", text: "Everything has changed.", action: "softly" }
        ],
        debrief: [
          { level: "think", text: "What lie did the snake want Eve to believe about God?", hint: "That God was lying, mean, and keeping good things from her — that she knew better than God." },
          { level: "dig", text: "Adam was standing right there. What could he have done?", hint: "Spoken up for God; reminded Eve what God said; walked away. Silence is a choice too." }
        ],
        notes: "Use Pick volunteers. The snake should be smooth and sly — let the class enjoy the hissing, but keep the ending quiet and serious." },

      { type: "question", id: "m-q3", title: "Why one rule?", minutes: 1, level: "dig", mode: "discuss", seconds: 40,
        text: "God gave Adam and Eve a whole garden and only ONE rule. Why do you think God gave them a rule at all?",
        hint: "Ideas: a rule gave them a real choice to trust and love God; God knew what was good for them; love that isn’t chosen isn’t really love. Follow-up: ‘Are rules always the opposite of freedom?’ (Road rules, pool rules.) Follow-up 2: ‘What does the one rule show about how generous God was?’ If silent: ‘Why does the pool have a “no running” rule?’" },

      { type: "apply", id: "m-apply", title: "Head · Heart · Hands", minutes: 1,
        head: "God’s words are true and good — even when something else sounds more exciting.",
        heart: "God, help me trust what you say.",
        hands: "This week, when a voice says “Just this once — nobody will know,” stop and ask: what does God say?",
        settings: ["online", "playground", "home"],
        notes: "Ask for one real example of a ‘just this once’ moment kids face." },

      { type: "scene", id: "m-scene", title: "Did God really say…?", minutes: 0.5, optional: true,
        art: { key: "t1w02d1-b" },
        boxes: [
          { text: "“Did God tell you…?”", pos: "tl", style: "speech" },
          { text: "Temptation often starts by making God sound bad.", pos: "br", style: "caption" }
        ] },

      { type: "verse", id: "m-verse", title: "Memory verse peek", minutes: 1, optional: true, activity: "echo",
        notes: "Introduce this week’s verse: teacher says each chunk, class echoes." },

      { type: "prayer", id: "m-pray", title: "Sorry prayer (silent)", minutes: 3, mood: "calm", style: "silent",
        tip: "A ‘Sorry’ prayer is being honest with God about what you’ve done wrong. He already knows — and he isn’t trying to shame you. Saying sorry opens the door back to him.",
        opening: "Let’s be still. Close your eyes or look down. Breathe in… and out. This is just between you and God.",
        phases: [
          { name: "Wow", lead: "God gave Adam and Eve everything good. Think about how generous he is.",
            prompts: ["God, you are so generous — you give us more yeses than nos.", "God, your words are always true."],
            starter: "Wow, God, you are…", seconds: 30, aloud: "Wow, God — your words are always true!" },
          { name: "Sorry", lead: "Think quietly: was there a time this week you chose your way instead of God’s way?",
            prompts: ["Sorry for the times I listened to ‘just this once’.", "Sorry for not trusting what you say."],
            starter: "God, I’m sorry for…", seconds: 40, aloud: "God, I’m sorry for the times I chose my way instead of yours." },
          { name: "Thanks", lead: "God doesn’t give up on us. Thank him for that.",
            prompts: ["Thank you that you listen when I say sorry.", "Thank you for your good rules that protect me."],
            starter: "Thank you, God, for…", seconds: 30, aloud: "Thank you, God, that you listen when I say sorry." },
          { name: "Please", lead: "Ask God for help to spot the sneaky voice this week.",
            prompts: ["Please help me notice when something is twisting your words.", "Please give me courage to say no."],
            starter: "Please, God, help…", seconds: 35, aloud: "Please, God, help me trust you and say no to wrong things." }
        ],
        closing: "Let’s finish together. Everyone: Amen.",
        notes: "Keep the Sorry phase gentle. Say: ‘You don’t have to tell anyone else — this is between you and God.’" }
    ] },

  /* ======================= TUESDAY ======================= */
  { label: "Tuesday", theme: "Where Are You?", roleplay: false, mood: "night",
    learningIntentions: [
      "We are learning what sin is and how it broke Adam and Eve’s friendship with God.",
      "We are learning that God came looking for Adam and Eve, even after they disobeyed.",
      "I can explain why God asked “Where are you?” when he already knew."
    ],
    assessment: "Listen for students describing sin as choosing my way over God’s way, and noticing that God came looking rather than leaving them.",
    resources: ["Screen", "Optional: mini-whiteboards"],
    whereToNext: "Tomorrow: God talks with Adam and Eve — and everyone starts blaming someone else.",
    slides: [
      { type: "title", id: "t-title", title: "Where Are You?", minutes: 0.5, kicker: "Term 1 · Week 2", sub: "Broken Friendship",
        art: { key: "t1w02d2-b" }, notes: "Let the splash play." },

      { type: "hook", id: "t-recap", title: "Recap: the question", minutes: 1, style: "recap",
        text: "Yesterday a sneaky snake asked a question…",
        ask: "Who can remember the question? And what did God really say?",
        hint: "‘Did God tell you not to eat fruit from any tree in the garden?’ God really said: every tree except the one in the middle. Then ask: ‘What happened when they ate it?’ — they saw what they had done and covered themselves with fig leaves. ‘Today, someone comes walking in the garden.’" },

      { type: "scripture", id: "t-scr", title: "Genesis 3:8–10", minutes: 1, ref: "Genesis 3:8–10", version: "CEV",
        lines: [
          "Late in the afternoon, when the breeze began to blow, the man and woman heard the LORD God walking in the garden. So they hid behind some trees.",
          "The LORD God called out to the man and asked, “Where are you?”",
          "The man answered, “I was naked, and when I heard you walking through the garden, I was frightened and hid!”"
        ],
        emphasis: ["hid", "Where are you?", "frightened"],
        notes: "Pause after ‘Where are you?’ — ask the class to whisper it the way they think God said it." },

      { type: "story", id: "t-story", title: "Hiding from God", minutes: 3.5, transition: "page", mood: "night",
        beats: [
          { text: "Something inside them had broken.", caption: "They felt ashamed — so they covered themselves with fig leaves." },
          { text: "Footsteps in the evening garden…", caption: "They heard the LORD God walking — and they hid behind the trees.",
            art: { key: "t1w02d2-a", label: "Tue · story beats 1–3", desc: "Adam and Eve crouching close together, hiding among thick garden trees, afraid, shafts of light between the trunks.", shot: "medium wide, from outside looking in", motion: "kenburns-in", chars: ["adam", "eve"],
              scene: "Adam and Eve crouching close together hiding among thick garden trees in the evening, afraid and ashamed, shafts of light cutting between the dark trunks around them." } },
          { text: "What is sin?", caption: "Choosing my way instead of God’s way. It breaks friendship." },
          { text: "“Where are you?”", caption: "God already knew. He was calling them to come out.", shout: true,
            art: { key: "t1w02d2-b", label: "Tue · title + story beats 4–5 + stretch scene", desc: "Evening garden: a broad gentle shaft of light moving along a path between the trees; two small figures peeking from behind a tree.", shot: "wide, atmospheric", motion: "kenburns-right",
              scene: "Evening in the garden: a broad, gentle shaft of brilliant light moves along a path between the trees as if someone is walking there, leaves stirring; in the far corner two small figures peek out from behind a tree. The light is the only sign of God." } },
          { text: "God comes looking.", caption: "Even when we hide, God doesn’t stop searching for us." }
        ],
        narration: "Yesterday, Adam and Eve ate the fruit God had told them not to eat. And straight away, something changed inside them. The Bible says they saw what they had done. Before, they had felt completely safe and unashamed. Now they felt exposed. So they grabbed fig leaves, sewed them together, and tried to cover themselves.\n\nThen, late in the afternoon, as the cool breeze began to blow, they heard a sound they knew well. Footsteps. The LORD God was walking in the garden. Before, that sound would have made them run to meet him. Their best friend was coming! But now? Now they ran the other way. They hid behind the trees.\n\nThat’s what sin does. Sin isn’t just breaking a rule, like forgetting to put your name on your work. Sin is choosing my way instead of God’s way. It’s saying, ‘God, I don’t trust you — I know better.’ And when we do that, it breaks something. It breaks our friendship with God. Suddenly we don’t want to be near him. We want to hide.\n\nThink about the very first time you hid after doing something wrong. Maybe you were tiny, and you broke something, and you pushed the pieces under the couch. Maybe you went very quiet at dinner. Have you ever done something wrong and then avoided someone? Stayed in your room? Changed the subject? Pretended you were busy? That’s hiding. People have been doing it ever since this day in the garden. And here’s the strange thing: hiding never actually makes us feel better. The worried feeling just sits there, getting heavier. Adam and Eve were hiding from the one person who could actually help them.\n\nBut here’s the amazing part. God didn’t say, ‘Fine, if they want to hide, let them.’ He didn’t stomp off. He called out: ‘Where are you?’\n\nNow — did God know where they were? Of course he did. God knows everything. He knew which tree they were behind. He knew what they had done. So why ask?\n\nBecause it was an invitation. ‘Where are you?’ means ‘Come out. Come and talk to me.’ It is the question of a God who wants his friends back.\n\nAdam answered, ‘I heard you, and I was frightened, so I hid.’ Fear and hiding — that’s what sin brings.\n\nBut God’s first move after the very first sin was not to walk away. It was to come looking. And God is still the same. When we hide, he still comes looking for us, calling, ‘Where are you? Come back to me.’",
        notes: "About 3½ minutes. Handle ‘naked’ simply: ‘they felt ashamed and exposed’. The fig leaves come from Genesis 3:7." },

      { type: "dig", id: "t-dig", title: "Before and after", minutes: 2,
        prompt: "Compare Genesis 2 with Genesis 3. What did sin change?",
        columns: ["Before (Genesis 2)", "After (Genesis 3)"],
        items: [
          { left: "Walked and talked with God", right: "Hid from God behind the trees" },
          { left: "Felt no shame", right: "Covered themselves with fig leaves" },
          { left: "Trusted God", right: "“I was frightened”" },
          { left: "“Someone like me!” — close to each other", right: "Soon blaming each other (tomorrow!)" }
        ],
        reveal: "Sin doesn’t just break a rule — it breaks a friendship.",
        notes: "Reveal one row at a time. Ask before each: ‘What changed?’" },

      { type: "question", id: "t-q1", title: "What did they do?", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "What did Adam and Eve do when they heard God walking in the garden?",
        options: ["Ran to meet him", "Hid behind the trees", "Climbed the tree", "Called out to him"], answer: 1,
        hint: "Answer: B — ‘So they hid behind some trees’ (3:8). Follow-up: ‘What did they use to cover themselves?’ (fig leaves). Follow-up 2: ‘Why would you hide from your best friend?’ If silent: re-read the first line of the scripture slide." },

      { type: "question", id: "t-q2", title: "Why ask?", minutes: 1.5, level: "think", mode: "pair", seconds: 45,
        text: "God knew exactly where Adam and Eve were. So why do you think he asked, “Where are you?”",
        hint: "Good answers: to invite them out; to give them a chance to be honest; because he wanted to talk, not just punish; because he still loved them. Follow-up: ‘How might God have sounded — angry or sad or kind?’ Follow-up 2: ‘What does this question show about what God is like?’ If silent: ‘When a parent asks “Is there something you want to tell me?” do they already know?’" },

      { type: "question", id: "t-q3", title: "Ways we hide", minutes: 1.5, level: "dig", mode: "write", seconds: 45, skippable: true,
        text: "What are some ways kids ‘hide’ — from God or from people — after doing something wrong?",
        hint: "Expect: lying, staying quiet, avoiding people, blaming, deleting messages, acting extra good, pretending it didn’t happen. Follow-up: ‘Does hiding make us feel better or worse?’ Follow-up 2: ‘What would “coming out from behind the tree” look like?’ (owning up). If silent: share a light, safe example of your own (e.g. hiding a broken mug)." },

      { type: "apply", id: "t-apply", title: "Head · Heart · Hands", minutes: 2,
        head: "God comes looking for us, even when we hide.",
        heart: "God, I don’t need to hide from you. Here I am.",
        hands: "If you’ve been hiding something this week, come out from behind the tree: tell God tonight before you sleep — or tell a trusted adult.",
        settings: ["home", "bedtime", "school"],
        notes: "Be sensitive. If a student discloses something serious, follow it up privately and through your school’s processes." },

      { type: "scene", id: "t-scene", title: "Where are you?", minutes: 1, optional: true,
        art: { key: "t1w02d2-b" },
        boxes: [
          { text: "“Where are you?”", pos: "tl", style: "speech" },
          { text: "Not ‘Where are you hiding?’ — but ‘Come back to me.’", pos: "br", style: "caption" }
        ],
        notes: "Stretch slide: ask, ‘How would you feel hearing God call your name?’" },

      { type: "verse", id: "t-verse", title: "Build the verse", minutes: 1, activity: "build",
        notes: "Each click adds a chunk. Read the growing verse together each time." },

      { type: "prayer", id: "t-pray", title: "Write a sorry", minutes: 3, mood: "calm", style: "write",
        tip: "You can write a prayer. Writing ‘sorry’ to God can help you say what’s hard to say out loud. Nobody else will read it — then you can scrunch it up, because God has heard and forgives.",
        opening: "Take a scrap of paper or your whiteboard. We’ll pray by writing. Nobody will see what you write.",
        phases: [
          { name: "Wow", lead: "Write one word about what God is like from today’s story.",
            prompts: ["Patient", "Searching", "Kind"],
            starter: "God, you are…", seconds: 30, aloud: "God, you came looking for Adam and Eve — you are kind!" },
          { name: "Sorry", lead: "Write a short sorry to God — about anything you’ve hidden or done wrong.",
            prompts: ["Sorry for hiding from you.", "Sorry for…"],
            starter: "God, I’m sorry for…", seconds: 50, aloud: "God, I’m sorry for the times I’ve hidden from you." },
          { name: "Thanks", lead: "Now scrunch your paper up tight. God has heard you. Thank him.",
            prompts: ["Thank you that you forgive.", "Thank you that you come looking for me."],
            starter: "Thank you, God, for…", seconds: 30, aloud: "Thank you, God, that you come looking for me." },
          { name: "Please", lead: "Ask God to help you come out of hiding this week.",
            prompts: ["Please help me be honest.", "Please help anyone who feels far from you."],
            starter: "Please, God, help…", seconds: 30, aloud: "Please, God, help me be honest with you." }
        ],
        closing: "Put your scrunched paper in the bin on the way out — it’s gone. Everyone: Amen!",
        notes: "Have a bin near the door. Don’t read any papers." }
    ] },

  /* ======================= WEDNESDAY ======================= */
  { label: "Wednesday", theme: "It Wasn’t Me!", roleplay: true, mood: "night",
    learningIntentions: [
      "We are learning how Adam and Eve answered God when he asked what they had done.",
      "We are learning why blaming others makes things worse.",
      "I can say what an honest ‘sorry’ sounds like."
    ],
    assessment: "Listen for students identifying the ‘blame chain’ in Genesis 3:11–13 and describing an honest response.",
    resources: ["Screen"],
    whereToNext: "Tomorrow: the consequences — and a promise of hope that points all the way to Jesus.",
    slides: [
      { type: "title", id: "w-title", title: "It Wasn’t Me!", minutes: 0.5, kicker: "Term 1 · Week 2", sub: "Broken Friendship",
        art: { key: "t1w02d3-a" }, notes: "Let the splash play." },

      { type: "hook", id: "w-hook", title: "Who did this?", minutes: 1,
        text: "Someone asks, “Who did this?” — and before you can think, your mouth says…",
        ask: "Why is it SO easy to blame someone else?",
        hint: "Let them say it: ‘It wasn’t me!’ Take answers: fear of trouble, embarrassment, wanting people to like us. Land it: ‘Blaming is one of the oldest habits in the world. Today we see where it started.’" },

      { type: "scripture", id: "w-scr", title: "Genesis 3:11–13", minutes: 1, ref: "Genesis 3:11–13", version: "CEV",
        lines: [
          { text: "God asked, “Did you eat any fruit from that tree in the middle of the garden?”", ref: "Genesis 3:11" },
          { text: "“It was the woman you put here with me,” the man said. “She gave me some of the fruit, and I ate it.”", ref: "Genesis 3:12" },
          { text: "“The snake tricked me,” she answered, “and I ate some of that fruit.”", ref: "Genesis 3:13" }
        ],
        emphasis: ["It was the woman", "The snake tricked me"],
        notes: "Verse 11 is shortened on screen to God’s second question." },

      { type: "story", id: "w-story", title: "The blame chain", minutes: 3, transition: "page",
        beats: [
          { text: "Adam and Eve came out from the trees.", caption: "They stood before God with their heads bowed.",
            art: { key: "t1w02d3-a", label: "Wed · title + story beats 1–3 + role-play card", desc: "Adam and Eve standing with heads bowed before a great pool of light on the path, long shadows behind them.", shot: "low angle", motion: "kenburns-in", chars: ["adam", "eve"],
              scene: "Adam and Eve standing with their heads bowed before a great pool of light on the path, their long shadows stretching behind them." } },
          { text: "“Did you eat from that tree?”", caption: "A simple question. A yes-or-no question." },
          { text: "“It was the woman YOU put here!”", caption: "Adam blamed Eve — and even God.", shout: true },
          { text: "“The snake tricked me!”", caption: "Eve blamed the snake. Nobody said, “It was me.”",
            art: { key: "t1w02d3-b", label: "Wed · story beats 4–5 + stretch scene", desc: "Close-up: Eve with a tear on her cheek looking down, Adam beside her ashamed, both lit softly from one side.", shot: "close-up", motion: "kenburns-in", chars: ["adam", "eve"],
              scene: "Eve's face with tears on her cheek, looking down in sorrow, Adam's face beside her, ashamed, both lit from one side by soft light." } },
          { text: "Sin brings sadness.", caption: "Life outside God’s way would now be hard. But God wasn’t finished." }
        ],
        narration: "Yesterday God called out, ‘Where are you?’ and Adam answered from behind the trees: ‘I was frightened, so I hid.’\n\nSo now Adam and Eve came out and stood in front of God. Imagine how that felt. Heads down. Hearts thumping. Fig leaves rustling.\n\nGod asked a very simple question: ‘Did you eat any fruit from that tree in the middle of the garden?’ It was a yes-or-no question. All Adam had to say was, ‘Yes. I did. I’m sorry.’\n\nBut that’s not what came out. Adam said, ‘It was the woman you put here with me. She gave me some of the fruit, and I ate it.’\n\nDid you catch that? Adam blamed Eve. And then he even blamed God: ‘the woman YOU put here.’ As if it was God’s fault for giving him a wife! Only a few days earlier he had been shouting for joy: ‘Here is someone like me!’ Now he was pointing his finger at her.\n\nSo God turned to Eve: ‘What have you done?’ And Eve said, ‘The snake tricked me, and I ate some of that fruit.’ She blamed the snake.\n\nThe man blamed the woman. The woman blamed the snake. Nobody said the two most powerful words in the world: ‘It was me.’\n\nSin had broken their friendship with God, and now it was breaking their friendship with each other. That’s what sin does — it spreads, like a crack running across a window. One wrong choice leads to a lie, the lie leads to blaming, the blaming leads to an argument. Have you ever watched that happen on the playground? Someone gets hurt, and in thirty seconds everyone is pointing at everyone else, and nobody is listening. That is exactly what happened in the garden.\n\nThen God told them sad news. The snake would crawl in the dust. Having children would be painful. Work would become hard, sweaty and frustrating. And one day, people would die. The world was no longer the way God had made it.\n\nBut listen carefully: God didn’t walk away from them, even then. He was still talking with them. And tomorrow we’ll hear about something hidden in God’s words — a promise of hope.",
        notes: "About 3 minutes. Keep the consequences brief and gentle (Genesis 3:14–19). Don’t dwell on death; say ‘one day people would die’ and move to hope." },

      { type: "question", id: "w-q1", title: "The blame chain", minutes: 1, level: "look", mode: "finish", seconds: 20,
        text: "Finish the sentence: Adam blamed ______, and Eve blamed ______.",
        reveal: "Adam blamed the woman (and God, who put her there). Eve blamed the snake.",
        hint: "Answer from Genesis 3:12–13. Follow-up: ‘Who did nobody blame?’ (Themselves!) Follow-up 2: ‘What two words did nobody say?’ (‘It was me.’) If silent: point back to the scripture slide lines." },

      { type: "roleplay", id: "w-rp", title: "God Walks in the Garden", minutes: 5, ref: "Genesis 3:8–13",
        art: { key: "t1w02d3-a" },
        imagined: "God’s questions and Adam and Eve’s answers are from Genesis 3 (CEV); the actions and the snake’s final line are imagined. God’s voice should sound sad and kind, not shouty.",
        actions: ["Everyone: the evening breeze — a soft ‘whoooosh’", "Everyone: point at someone else on every ‘blame’ line"],
        props: [],
        characters: [
          { name: "Narrator", color: "#F2C77B", desc: "Tells the story" },
          { name: "Voice of God", voice: true, desc: "Teacher or a calm, strong reader — gentle, not angry" },
          { name: "Adam", color: "#FFB547", desc: "Afraid, then quick to blame" },
          { name: "Eve", color: "#F48FB1", desc: "Ashamed, also blames" },
          { name: "Serpent", color: "#8BC34A", desc: "Tries to slither away unnoticed" },
          { name: "Everyone", color: "#FFFFFF", desc: "The breeze, and the pointing fingers" }
        ],
        lines: [
          { character: "Narrator", text: "Late in the afternoon, when the breeze began to blow…" },
          { character: "Everyone", text: "Whoooooosh…", action: "a soft evening breeze" },
          { character: "Narrator", text: "…the man and woman heard the LORD God walking in the garden. So they hid behind some trees." },
          { character: "Adam", text: "Shh! Get down!", action: "crouch behind ‘trees’" },
          { character: "Voice of God", text: "Where are you?" },
          { character: "Eve", text: "He’s calling us.", action: "whisper" },
          { character: "Adam", text: "I heard you walking through the garden. I was frightened and hid!", action: "step out slowly" },
          { character: "Voice of God", text: "Did you eat any fruit from that tree in the middle of the garden?" },
          { pause: "Freeze! This is a yes-or-no question. What SHOULD Adam say right now?", seconds: 20 },
          { character: "Adam", text: "It was the woman you put here with me! She gave me some of the fruit, and I ate it.", action: "point at Eve" },
          { character: "Everyone", text: "It wasn’t me!", action: "everyone points at someone else" },
          { character: "Voice of God", text: "What have you done?", action: "to Eve" },
          { character: "Eve", text: "The snake tricked me, and I ate some of that fruit.", action: "point at the snake" },
          { character: "Serpent", text: "Ssss… don’t look at me…", action: "try to slither away" },
          { character: "Narrator", text: "The man blamed the woman. The woman blamed the snake. Nobody said, “It was me.”" },
          { character: "Everyone", text: "It was me.", action: "very quietly, hand on heart" },
          { character: "Narrator", text: "Then God told them sad news. Life outside his way would now be hard." },
          { character: "Eve", text: "We’ve ruined everything.", action: "head in hands" },
          { character: "Adam", text: "I’m… I’m sorry.", action: "finally, quietly" },
          { character: "Narrator", text: "But God did not walk away. He kept talking with them. And hidden in his words was a promise." },
          { character: "Everyone", text: "A promise?" },
          { character: "Narrator", text: "Find out tomorrow!" }
        ],
        debrief: [
          { level: "think", text: "How do you think God felt during that conversation?", hint: "Sad, hurt, disappointed — but still loving. He kept talking with them." },
          { level: "look", text: "Who did Adam blame? Who did Eve blame?", hint: "Adam blamed the woman and God; Eve blamed the snake." }
        ],
        notes: "Adam’s ‘I’m sorry’ near the end is imagined — point that out: ‘The Bible doesn’t record it. What do you think would have happened if he had said it first?’" },

      { type: "question", id: "w-q2", title: "What could they say?", minutes: 1.5, level: "think", mode: "pair", seconds: 45,
        text: "What could Adam and Eve have said instead of blaming? How might that have changed the conversation?",
        hint: "Good answers: ‘Yes, I ate it. I’m sorry. It was my choice.’ It would show honesty, take responsibility, stop the blame spreading, and show trust in God. Follow-up: ‘Why is “I’m sorry, but…” not a real sorry?’ Follow-up 2: ‘What does a real sorry sound like?’ If silent: model one: ‘I took your pencil. That was wrong. I’m sorry.’" },

      { type: "question", id: "w-q3", title: "Why questions?", minutes: 1, level: "dig", mode: "discuss", seconds: 40, skippable: true,
        text: "God already knew everything. Why do you think he asked questions instead of just announcing the punishment?",
        hint: "Ideas: to give them a chance to be honest; because he wanted a relationship, not just justice; to let them see what they’d done; like a good parent. Follow-up: ‘What does that tell us about how God treats us when we do wrong?’ Follow-up 2: ‘How could you use questions when a friend has hurt you?’ If silent: ‘Why do teachers ask “What happened?” before deciding?’" },

      { type: "apply", id: "w-apply", title: "Head · Heart · Hands", minutes: 1,
        head: "God wants honesty, not excuses.",
        heart: "God, when it was me — help me say so.",
        hands: "Next time you’re asked “Who did this?” and it was you, say “It was me. I’m sorry” — without adding “but…”.",
        settings: ["home", "classroom", "sport"],
        notes: "Practise it out loud together: ‘It was me. I’m sorry.’" },

      { type: "scene", id: "w-scene", title: "Nobody said it", minutes: 0.5, optional: true,
        art: { key: "t1w02d3-b" },
        boxes: [
          { text: "The man blamed the woman. The woman blamed the snake.", pos: "tl", style: "caption" },
          { text: "“It was me.”", pos: "br", style: "shout" }
        ] },

      { type: "verse", id: "w-verse", title: "Verse with actions", minutes: 1, optional: true, activity: "actions",
        notes: "Learn one action per chunk, then say it twice with actions." },

      { type: "prayer", id: "w-pray", title: "Sorry prayer (heads bowed)", minutes: 3, mood: "calm", style: "hands",
        tip: "Bowing your head is a way of praying with your body. It says, ‘You’re God, and I’m not. I’m ready to be honest.’",
        opening: "If you’re comfortable, bow your head and fold your hands. Breathe slowly. God isn’t looking for excuses — just honesty.",
        phases: [
          { name: "Wow", lead: "God stayed and talked with Adam and Eve. He is patient.",
            prompts: ["God, you are patient with me.", "God, you never walk away from your people."],
            starter: "Wow, God, you are…", seconds: 30, aloud: "Wow, God — you are patient, and you never walk away!" },
          { name: "Sorry", lead: "Think of a time you blamed someone else. Tell God what really happened.",
            prompts: ["God, it was me when…", "Sorry for blaming others."],
            starter: "God, I’m sorry for…", seconds: 40, aloud: "God, I’m sorry for the times I blamed someone else." },
          { name: "Thanks", lead: "Thank God that honesty brings us close to him again.",
            prompts: ["Thank you that I can tell you the truth.", "Thank you for people who forgive me."],
            starter: "Thank you, God, for…", seconds: 30, aloud: "Thank you, God, that I can always tell you the truth." },
          { name: "Please", lead: "Ask for courage to own up this week.",
            prompts: ["Please help me say ‘It was me’.", "Please help me fix friendships I’ve hurt."],
            starter: "Please, God, help…", seconds: 35, aloud: "Please, God, give me courage to say ‘It was me’." }
        ],
        closing: "Lift your head. Everyone: Amen!",
        notes: "Head bowing is optional — some students may prefer eyes closed." }
    ] },

  /* ======================= THURSDAY ======================= */
  { label: "Thursday", theme: "A Promise in the Dark", roleplay: false, mood: "dawn",
    learningIntentions: [
      "We are learning about God’s promise of a rescuer in Genesis 3:15.",
      "We are learning that God cared for Adam and Eve even after they sinned.",
      "I can explain what happens when we confess our sins to God (1 John 1:9)."
    ],
    assessment: "Students can retell Genesis 3 in order, name God’s acts of care (looking, clothing, promising), and recite 1 John 1:9.",
    resources: ["Screen", "Take-home challenge cards (print from the challenge slide)"],
    whereToNext: "Next Monday: check in on the challenge. Week 3 — Rescue in the Storm (Noah).",
    slides: [
      { type: "title", id: "th-title", title: "A Promise in the Dark", minutes: 0.5, kicker: "Term 1 · Week 2", sub: "Broken Friendship",
        art: { key: "t1w02d4-b" }, notes: "Let the splash play." },

      { type: "review", id: "th-review", title: "True or false?", minutes: 2.5, format: "truefalse",
        prompt: "True or false? Stand up for TRUE, sit down for FALSE!",
        items: [
          { text: "The snake told Eve the truth about God.", answer: false, why: "The snake twisted God’s words and said, “No, you won’t!”" },
          { text: "God gave Adam and Eve only one rule.", answer: true, why: "Every tree was a yes — except the one in the middle." },
          { text: "Adam and Eve hid when they heard God walking.", answer: true, why: "“So they hid behind some trees.”" },
          { text: "Adam said, “It was me. I’m sorry.”", answer: false, why: "He blamed the woman — and God." },
          { text: "God made clothes for Adam and Eve.", answer: true, why: "Clothes made from animal skins (Genesis 3:21)." }
        ],
        hint: "Each statement: students stand (true) or sit (false), then click to reveal. Ask one student to explain each answer.",
        notes: "Click once to show each statement, again to reveal the answer." },

      { type: "scripture", id: "th-scr", title: "Genesis 3:15, 21 · 1 John 1:9", minutes: 1, ref: "Genesis 3:15, 21 · 1 John 1:9", version: "CEV",
        lines: [
          { text: "God said to the snake: “You and this woman will hate each other; your descendants and hers will always be enemies. One of hers will strike you on the head, and you will strike him on the heel.”", ref: "Genesis 3:15" },
          { text: "Then the LORD God made clothes out of animal skins for the man and his wife.", ref: "Genesis 3:21" },
          { text: "But if we confess our sins to God, he can always be trusted to forgive us and take our sins away.", ref: "1 John 1:9" }
        ],
        emphasis: ["strike you on the head", "made clothes", "forgive us"],
        notes: "Genesis 3:15 is sometimes called ‘the first good news’ in the Bible." },

      { type: "story", id: "th-story", title: "The first promise", minutes: 2, transition: "page",
        beats: [
          { text: "Hidden in the sad news… a promise.", caption: "One of the woman’s descendants would strike the snake on the head.",
            art: { key: "t1w02d4-b", label: "Thu · title + story beats 1–2", desc: "One small green sprout pushing up through cracked bare ground, a single shaft of dawn light on it, huge sky behind.", shot: "low close-up", motion: "kenburns-in",
              scene: "On cracked bare ground outside the garden, one small green sprout pushes up, a single shaft of dawn light falling on it, a huge sky behind. A symbol of hope and promise." } },
          { text: "A Rescuer was coming.", caption: "Christians believe this points to Jesus, who defeated sin and evil." },
          { text: "God made them clothes.", caption: "Even while they faced the consequences, God cared for them.",
            art: { key: "t1w02d4-a", label: "Thu · story beats 3–4 + stretch scene", desc: "Adam and Eve in simple animal-skin clothes walking toward a tall stone gateway at the garden’s edge, looking back at the light, hopeful and sorry.", shot: "wide", motion: "kenburns-out", chars: ["adam", "eve"],
              scene: "Adam and Eve in simple animal-skin clothing walking slowly toward a tall stone gateway at the edge of the garden, looking back at the light behind them, hopeful and sorry." } },
          { text: "Sorry — and forgiven.", caption: "If we confess our sins, God can always be trusted to forgive us.", shout: true }
        ],
        narration: "Adam and Eve had to leave the garden. Life would be harder now. But if you listen carefully to what God said, there’s something amazing hidden in the sad news.\n\nGod told the snake that one day, one of the woman’s descendants — one of her great-great-great-grandchildren — would strike the snake on the head. The snake would strike his heel, but he would crush the snake. In other words: evil would not win. A Rescuer was coming.\n\nChristians have always believed this points to Jesus. Thousands of years later, Jesus came. He was hurt — that’s the heel — when he died on the cross. But by dying and rising again, he defeated sin and evil — that’s the head. On the very first sad day, God was already promising the happiest day.\n\nAnd then God did something else. Adam and Eve were wearing scratchy fig leaves. So God made them proper clothes from animal skins. He was still looking after them.\n\nThat’s what God is like. When we sin, there are often consequences. But God doesn’t stop caring. And this week’s verse tells us what to do: ‘If we confess our sins to God, he can always be trusted to forgive us and take our sins away.’ Confess means to say honestly, ‘I did it. I’m sorry.’ And forgiven means God takes it away — completely.",
        notes: "About 2 minutes. ‘Descendants’ = children, grandchildren and so on. Linking Genesis 3:15 to Jesus is the traditional Christian reading — present it as what Christians believe." },

      { type: "question", id: "th-q1", title: "What did God make?", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "What did God make for Adam and Eve before they left the garden?",
        options: ["New fig leaves", "Clothes from animal skins", "A house", "A boat"], answer: 1,
        hint: "Answer: B (Genesis 3:21). Follow-up: ‘Why do you think he bothered?’ Follow-up 2: ‘What does that show about God’s heart, even when people disobey?’ If silent: re-read the second line of the scripture slide." },

      { type: "question", id: "th-q2", title: "Care after sin", minutes: 1.5, level: "think", mode: "pair", seconds: 45,
        text: "Why do you think God made clothes for Adam and Eve — and made a promise — even after they disobeyed?",
        hint: "Good answers: he still loved them; he’s kind; he wanted to fix what was broken; he had a rescue plan. Follow-up: ‘Do we deserve God’s kindness when we sin?’ Follow-up 2: ‘What’s the word for kindness we don’t deserve?’ (Grace.) If silent: ‘How does a parent look after a child who has just been told off?’" },

      { type: "recap", id: "th-recap", title: "This week’s Big Idea", minutes: 1.5,
        points: [
          "The snake twisted God’s words — and Adam and Eve chose their way instead of God’s.",
          "Sin broke their friendship with God. They hid, and they blamed.",
          "But God came looking, cared for them, and promised a Rescuer."
        ],
        notes: "Reveal the points, then the Big Idea. Read it together." },

      { type: "question", id: "th-q3", title: "Like it never happened?", minutes: 1.5, level: "dig", mode: "vote", seconds: 30, skippable: true,
        text: "Agree or disagree: “If I say sorry to God, it’s like it never happened.” Move to the side that matches what you think.",
        options: ["Agree", "Disagree"],
        hint: "Both sides have truth! God completely forgives and takes sin away (1 John 1:9) — he doesn’t hold it against us. But there can still be consequences (Adam and Eve still left the garden) and we may need to fix things with people. Follow-up: ‘If I break a window and say sorry, is the window fixed?’ Follow-up 2: ‘What does God do with our sins when we confess?’ If silent: give the window example first." },

      { type: "challenge", id: "th-chal", title: "This Week’s Challenge", minutes: 2,
        text: "Sorry — and forgiven. This week, when you get something wrong, say sorry to God AND to the person you hurt. Then believe God when he says you’re forgiven.",
        why: "“He can always be trusted to forgive us and take our sins away.” — 1 John 1:9",
        head: "God forgives when we confess.", heart: "God, it was me. I’m sorry.", hands: "Say sorry to God and to the person — no ‘but’.",
        takeHome: true,
        notes: "Print take-home cards. Next Monday’s check-in asks how it went (no one has to share details)." },

      { type: "verse", id: "th-verse", title: "Memory verse: fade-out", minutes: 1.5, activity: "fade",
        notes: "Each click removes more words — can the class still say 1 John 1:9?" },

      { type: "scene", id: "th-scene", title: "Not the end", minutes: 1, optional: true,
        art: { key: "t1w02d4-a" },
        boxes: [
          { text: "They had to leave the garden…", pos: "tl", style: "caption" },
          { text: "…but God’s rescue plan had already begun.", pos: "br", style: "caption" }
        ] },

      { type: "prayer", id: "th-pray", title: "Sorry and forgiven", minutes: 3, mood: "calm", style: "out-loud",
        tip: "After a sorry prayer, don’t keep carrying it! Thank God that he has forgiven you. 1 John 1:9 is a promise you can pray back to him.",
        opening: "Let’s pray together. I’ll say a line, and you say it after me — out loud, as a class.",
        phases: [
          { name: "Wow", lead: "Echo after me.",
            prompts: ["God, you came looking for Adam and Eve.", "You are faithful and kind."],
            starter: "Wow, God, you are…", seconds: 25, aloud: "God, you came looking for us. You are faithful and kind!" },
          { name: "Sorry", lead: "Quietly, in your head, tell God one thing you’re sorry for.",
            prompts: ["(silent)", "God, I’m sorry for…"],
            starter: "God, I’m sorry for…", seconds: 35, aloud: "God, we confess our sins to you." },
          { name: "Thanks", lead: "Now say 1 John 1:9 together as a thank-you.",
            prompts: ["Thank you that you can always be trusted…", "…to forgive us and take our sins away."],
            starter: "Thank you, God, for…", seconds: 30, aloud: "Thank you, God, that you can always be trusted to forgive us and take our sins away!" },
          { name: "Please", lead: "Ask God for help with this week’s challenge.",
            prompts: ["Please help me say sorry to people, not just to you.", "Please help me believe I’m forgiven."],
            starter: "Please, God, help…", seconds: 30, aloud: "Please, God, help me say sorry — and believe I’m forgiven." }
        ],
        closing: "Everyone: Amen!",
        notes: "Celebrate the end of Week 2. Remind them: forgiven means forgiven." }
    ] }
  ]
};
