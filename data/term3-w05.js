/* Morninglight 2027 — Term 3 Week 5: Two Builders (Matthew 7:24–29). Scripture: CEV. */
window.DEVOTIONS = window.DEVOTIONS || {};
window.DEVOTIONS["Term 3"] = window.DEVOTIONS["Term 3"] || {};
window.DEVOTIONS["Term 3"]["Week 5"] = {
  lessonTitle: "Two Builders",
  passage: "Matthew 7:24–29",
  bigIdea: "Jesus’ words are solid rock — hearing them isn’t enough; building your life on them means doing them.",
  godIs: "Rock",
  memoryVerse: { ref: "Matthew 7:24", text: "Anyone who hears and obeys these teachings of mine is like a wise person who built a house on solid rock.", version: "CEV",
    chunks: ["Anyone who hears", "and obeys", "these teachings of mine", "is like a wise person", "who built a house", "on solid rock."],
    actions: ["Cup a hand behind your ear — listen", "Stamp one foot — do it!", "Open both hands like holding a book", "Tap your head — wise", "Hands together in a roof shape — a house", "Fist on fist — solid rock"] },
  prayerFocus: { skill: "Our daily bread", tip: "This week’s line from the Lord’s Prayer is “Give us our food for today” (Matthew 6:11, CEV) — the line people often call “our daily bread”. Daily bread means asking God for what we need today, not for everything at once, and trusting him to give again tomorrow." },
  mood: "storm",
  cover: "t3w05-cover",
  characters: ["jesus", "aroha", "sione", "mia"],
  coverArt: { key: "t3w05-cover", label: "Week cover", desc: "A stone house standing firm on a rocky ledge as a storm flood sweeps a sandy riverbed below.", shot: "epic wide, storm",
    scene: "Lightning splits a black sky. On a high rocky ledge a small stone house stands firm and dry, a lamp glowing in its window, while far below a raging flood surges down a sandy riverbed where an empty house is already tilting into the water.", chars: [] },
  comicArt: { key: "t3w05-comic", label: "Comic page (week opener)", format: "portrait", desc: "Six-panel comic page of the two builders.",
    panels: "Six panels. Panel 1 (wide): Jesus teaching a vast crowd on a hillside. Panel 2 (small): a builder swinging a pickaxe into rock. Panel 3 (small): another builder smoothing sand and stacking walls quickly. Panel 4 (wide): two finished houses that look the same under a sunny sky. Panel 5 (tall): a storm and flood crashing down the riverbed. Panel 6 (wide): one house standing on the rock, the other gone.", chars: ["jesus"] },

  days: [

  /* ======================= MONDAY ======================= */
  { label: "Monday", theme: "The Wise and the Foolish Builder", roleplay: true, mood: "storm",
    learningIntentions: [
      "We are learning how Jesus ended the Sermon on the Mount with a story about two builders.",
      "We are learning what made the difference between the house that stood and the house that fell.",
      "I can explain what it means to build on solid rock (Matthew 7:24)."
    ],
    assessment: "Listen for students recalling that both builders heard Jesus’ words, that one house stood on rock and one fell on sand, and that the difference was doing what Jesus says, not just hearing it.",
    resources: ["Screen", "Optional: a tray of sand and a stone to show sand and rock", "Optional: a pretend pickaxe (a ruler or a rolled-up newspaper)"],
    whereToNext: "Tomorrow: why Jesus told this story — who was listening, and the surprise that left the crowd amazed.",
    slides: [
      { type: "title", id: "m-title", title: "The Wise and the Foolish Builder", minutes: 0.5, kicker: "Term 3 · Week 5", sub: "Two Builders",
        art: { key: "t3w05-cover" }, notes: "Let the splash play. If you have a tray of sand and a stone, put them on the table where students can see them all week." },

      { type: "hook", id: "m-hook", title: "It looked great… until", minutes: 1.5,
        checkin: { text: "Last week we heard The Lost Son — the father who ran to welcome his boy home. Your challenge: pray an honest “sorry” where you need to, and celebrate good news for someone else. How did it go?" },
        text: "Have you ever built something — a sandcastle, a Lego tower, a hut — that looked amazing, and then fell down? What went wrong?",
        ask: "What do you think was missing underneath?",
        hint: "Check-in first: ask two or three students which they tried, an honest sorry or celebrating with someone, and how it felt. Then the hook: tide coming in on a sandcastle, a tower with a wobbly base. Land it: ‘Today Jesus tells a story about two builders, and what’s underneath matters more than what you can see.’" },

      { type: "scripture", id: "m-scr", title: "Matthew 7:24–27", minutes: 1, ref: "Matthew 7:24–27", version: "CEV",
        lines: [
          { text: "Anyone who hears and obeys these teachings of mine is like a wise person who built a house on solid rock.", ref: "Matthew 7:24" },
          { text: "Rain poured down, rivers flooded, and the wind blew hard against that house. But it did not fall, because it was built on solid rock.", ref: "Matthew 7:25" },
          { text: "Anyone who hears my teachings and doesn’t obey them is like a foolish person who built a house on sand.", ref: "Matthew 7:26" },
          { text: "Rain poured down, rivers flooded, and the wind blew hard against that house. Finally, it fell with a crash.", ref: "Matthew 7:27" }
        ],
        emphasis: ["hears and obeys", "solid rock", "doesn’t obey", "sand", "fell with a crash"],
        notes: "Matthew 7:24 is our memory verse. Notice the two halves are almost identical: same words heard, same storm, same houses. Only one thing differs." },

      { type: "story", id: "m-story", title: "Two builders", minutes: 3, transition: "page", mood: "storm",
        beats: [
          { text: "Jesus finishes the greatest sermon.", caption: "A whole hillside of people, listening.",
            art: { key: "t3w05d1-a", label: "Mon · story — the end of the sermon", desc: "Jesus on a grassy hillside finishing his teaching, the crowd on the slope amazed.", shot: "wide, from behind Jesus", motion: "kenburns-in", chars: ["jesus"],
              scene: "From behind and slightly above, Jesus stands on a grassy hillside with one arm outstretched, finishing his teaching. A huge crowd sits across the slope below him, faces turned up in amazement, with the lake shining in the distance." } },
          { text: "One last story: two builders.", caption: "Both strong. Both clever. Both heard the same words." },
          { text: "One digs down. One builds fast.", caption: "Hard rock below — or easy sand on top.",
            art: { key: "t3w05d1-b", label: "Mon · story + role-play card — digging down to rock", desc: "The wise builder sweating as he digs a deep trench and hauls stones onto solid rock.", shot: "low-angle", motion: "kenburns-up", chars: [],
              scene: "Low angle from inside a deep trench: the wise builder, sleeves rolled up and sweating, heaves a heavy squared stone onto bare bedrock. His pickaxe leans on the trench wall, and the half-built stone walls rise against a clear sky." } },
          { text: "Then the storm.", caption: "Rain. Rivers. Wind. On both houses.", shout: true },
          { text: "One house stands. One falls.", caption: "“Hear my words — and do them.”" }
        ],
        narration: "Picture a grassy hillside above the Sea of Galilee. Jesus has been teaching for a long time — so long that we call it the Sermon on the Mount. He has told the crowd who is truly happy in God’s kingdom. He has taught them to love their enemies, to stop worrying, and even how to pray. Now he is nearly finished.\n\nBut before he stops, Jesus wants everyone to know what to do with all those words. So he tells one last story. Remember, a parable is an earthly story with a heavenly meaning. This one is about two builders.\n\nBoth builders want the same thing: a house of their own. Both are strong. Both have good tools. And both have heard exactly the same words from Jesus.\n\nThe first builder looks at the ground. He knows the rainy season is coming, and in that country a dry riverbed can turn into a roaring river overnight. So he doesn’t build on the nice flat sand. He grabs a pickaxe and digs. Down and down, through dust, through gravel, hour after hour, his arms aching and his shirt wet with sweat, until his pickaxe goes clunk. Solid rock! Then he hauls heavy stones, one at a time, and builds his house right on top.\n\nThe second builder looks at the ground too. He sees a lovely, smooth, sandy riverbed. Flat. Easy. Digging? Who needs digging! He stacks up his walls in half the time, and soon his house is finished. He puts his feet up. And honestly? From the outside, it looks just as good as the other one.\n\nThen one day the sky turns black. Rain pours down. The rivers flood. The wind howls and slams into both houses.\n\nThe house on the rock shakes in the wind, but it does not fall. It is built on solid rock.\n\nThe house on the sand? The water swirls around its foundations and washes the sand away. Finally, it falls with a crash. Everything that builder worked for is gone.\n\nJesus tells the crowd what the story means. The wise builder is anyone who hears his words and does them. The foolish builder is anyone who hears his words and doesn’t.\n\nNot the person who hears the most. Not the person who knows the most. The person who does what Jesus says.\n\nSo here is the question Jesus leaves hanging over that hillside, and over our classroom this morning: when the storm comes, what will your life be built on?",
        notes: "About 3 minutes. Matthew does not say the wise builder dug down; Luke 6:48 adds that detail, and we use it because it makes the story vivid. The dry riverbed flooding fast is true to the land (rainy-season flash floods). Keep the storm exciting but not scary: the story doesn’t mention anyone being hurt, it’s about the houses. If a student has lost a home to a flood, fire or earthquake, keep the focus on foundations, not on loss." },

      { type: "question", id: "m-q1", title: "What was underneath?", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "In Jesus’ story, what did the wise builder build his house on?",
        options: ["Sand", "Solid rock", "A grassy hill", "A wooden raft"], answer: 1,
        hint: "Answer: B, solid rock (Matthew 7:24). Follow-up: ‘What did the foolish builder build on?’ (Sand.) Follow-up 2: ‘What happened to each house in the storm?’ (Rock house stood; sand house fell with a crash.) If silent: re-read the first and third scripture lines." },

      { type: "question", id: "m-q2", title: "Slower, but wiser", minutes: 1.5, level: "think", mode: "pair", seconds: 45, skippable: true,
        text: "Digging down to rock took the wise builder much longer. Why do you think Jesus called him “wise” anyway?",
        hint: "Good answers: he planned for the storm; he cared about what would last, not what looked quick; he knew the weather would come. Follow-up: ‘When have you taken the slow way because it was worth it?’ (practising an instrument, a sports skill, careful homework.) Follow-up 2: ‘What does this say about being wise?’ If silent: ask which house they would want to be inside in a storm." },

      { type: "roleplay", id: "m-rp", title: "The Two Builders", minutes: 5, ref: "Matthew 7:24–27",
        art: { key: "t3w05d1-b" },
        imagined: "Jesus’ words are from Matthew 7:24–27 (CEV). The builders’ chatter, the neighbour, and the foolish builder’s “I never did it” and the wise builder’s offer to help are imagined, to bring the story to life.",
        actions: ["Everyone: swing pretend pickaxes — “dig, dig, dig!”", "Everyone: rain with your fingers, wind with your voice, then a huge CRASH"],
        props: ["Optional: a ruler or rolled-up newspaper as a pickaxe"],
        characters: [
          { name: "Narrator", color: "#F2C77B", desc: "Tells the story" },
          { name: "Jesus", color: "#E0C9A6", desc: "Teaching on the hillside — calm and clear" },
          { name: "Wise Builder", color: "#7BA7D9", desc: "Careful and patient — digs deep" },
          { name: "Foolish Builder", color: "#E57373", desc: "Quick and cheerful — hates digging" },
          { name: "Neighbour", color: "#B0BEC5", desc: "A villager who watches both builders" },
          { name: "Everyone", color: "#FFFFFF", desc: "Digging, wind, rain and a mighty crash" }
        ],
        lines: [
          { character: "Narrator", text: "A hillside by the lake. Jesus has finished his teaching. Now he tells one last story.", direction: true },
          { character: "Jesus", text: "Anyone who hears and obeys these teachings of mine is like a wise person who built a house on solid rock." },
          { character: "Narrator", text: "Two builders. Both want a house. Both heard Jesus’ words." },
          { character: "Wise Builder", text: "The rainy season is coming. I’d better find something solid to build on.", action: "prod the ground with a stick" },
          { character: "Foolish Builder", text: "Look at that lovely flat sand! Perfect. Why would anyone build anywhere else?", action: "arms wide, delighted" },
          { character: "Wise Builder", text: "Dig, dig, dig! Come on, shoulders!", action: "swing a pretend pickaxe" },
          { character: "Everyone", text: "Dig! Dig! Dig! … CLUNK!", action: "swing pickaxes, then freeze: it hit rock!" },
          { character: "Wise Builder", text: "Solid rock! Now the stones. One… two… heave!", action: "lift a heavy stone" },
          { character: "Foolish Builder", text: "Stack, stack, stack! Walls up already. I’m the fastest builder in the whole valley!", action: "stack pretend bricks fast" },
          { character: "Neighbour", text: "That was quick! Did you dig a foundation? The rainy season is coming.", action: "scratch head" },
          { character: "Foolish Builder", text: "Dig? Nah. It looks great. Nobody can tell the difference.", action: "put feet up" },
          { character: "Neighbour", text: "Hmm. Well… it does look just like his.", action: "look from house to house" },
          { character: "Narrator", text: "Both houses were finished. Both looked strong. Then one day the sky turned black." },
          { character: "Everyone", text: "Whooosh! Rain! Wind! Flood!", action: "wiggle fingers for rain, whoosh for wind" },
          { pause: "Freeze! The storm is hitting both houses. Which house do you think will still be standing? How do you know?", seconds: 20 },
          { character: "Narrator", text: "Rain poured down, rivers flooded, and the wind blew hard against the house on the rock." },
          { character: "Wise Builder", text: "Hold on, house! Hold on!", action: "lean on the wall, braced" },
          { character: "Narrator", text: "But it did not fall, because it was built on solid rock." },
          { character: "Foolish Builder", text: "Uh-oh. The sand is washing away. My walls! My roof!", action: "wobble" },
          { character: "Everyone", text: "CRRRASH!", action: "everyone drops down together" },
          { character: "Foolish Builder", text: "I heard what Jesus said. I just never did it.", action: "sit up, soggy and sorry" },
          { character: "Wise Builder", text: "Come in out of the rain. We’ll help you build again, on the rock.", action: "hold out a hand" },
          { character: "Jesus", text: "Anyone who hears my teachings and doesn’t obey them is like a foolish person who built a house on sand." },
          { character: "Everyone", text: "Hear it — and do it! Build on the rock!", action: "stamp once, fist on fist" }
        ],
        debrief: [
          { level: "think", text: "The foolish builder heard Jesus’ words too. What did he do differently?", hint: "He heard, but he didn’t do. He took the quick, easy way and never dug down. Hearing without doing is the sand." },
          { level: "look", text: "What did the neighbour notice about the two houses at the start?", hint: "They looked the same. The difference only showed up when the storm came." }
        ],
        notes: "Jesus’ two speeches are the CEV text of Matthew 7:24 and 7:26. The ending where the wise builder offers help is not in the parable; we add it gently, and Thursday shows that it is true to how Jesus treats people. Let the CRASH be big and silly." },

      { type: "question", id: "m-q3", title: "Hearing without doing", minutes: 1, level: "dig", mode: "discuss", seconds: 40,
        text: "The foolish builder heard every word Jesus said. Why is it so easy to hear something good and not do it?",
        hint: "Ideas: doing is harder and slower than hearing; we forget; we think we’ll do it later; we think hearing is enough; nobody can see our foundation. Follow-up: ‘When have you heard a good instruction and not done it?’ Follow-up 2: ‘What helps you actually do it?’ If silent: ask about a time a teacher gave clear instructions and a student didn’t follow them." },

      { type: "apply", id: "m-apply", title: "Head · Heart · Hands", minutes: 1,
        head: "Jesus’ words are solid rock, and building on them means doing them, not just hearing them.",
        heart: "Jesus, I want my life built on you, not on sand.",
        hands: "Practise “hear and do” today: when a teacher or a parent asks you to do something, do it the first time, without arguing.",
        settings: ["home", "school", "sport"],
        notes: "Keep it small and doable: hear, then do, the first time." },

      { type: "scene", id: "m-scene", title: "The end of the sermon", minutes: 0.5, optional: true,
        art: { key: "t3w05d1-a" },
        boxes: [
          { text: "“Anyone who hears and obeys these teachings of mine…”", pos: "tl", style: "speech" },
          { text: "…is like a wise person who built a house on solid rock.", pos: "br", style: "caption" }
        ] },

      { type: "verse", id: "m-verse", title: "Memory verse peek", minutes: 1, optional: true, activity: "echo",
        notes: "Introduce Matthew 7:24. Echo each chunk: say it, they say it back." },

      { type: "prayer", id: "m-pray", title: "Our daily bread — open hands", minutes: 3, mood: "calm", style: "hands",
        tip: "All term we’re praying the Lord’s Prayer one line at a time. This week: “Give us our food for today” — often called “our daily bread”. Open hands show we’re ready to receive what God gives.",
        opening: "Hold your hands out in front of you, open and empty, like you’re ready to receive a gift. Take a slow breath.",
        phases: [
          { name: "Wow", lead: "Look at your open hands. God gives, and he never moves.",
            prompts: ["God, you are a Rock — solid and safe in every storm.", "God, you give us what we need, one day at a time."],
            starter: "Wow, God, you are…", seconds: 35, aloud: "Wow, God — you are our Rock, and you give us what we need!" },
          { name: "Sorry", lead: "Turn your hands over, palms down. Sorry for the times we heard and didn’t do.",
            prompts: ["Sorry for hearing your words and not doing them.", "Sorry for taking the quick, easy way, like the builder on the sand."],
            starter: "God, I’m sorry for…", seconds: 30, aloud: "God, we’re sorry for hearing your words and not doing them." },
          { name: "Thanks", lead: "Palms up again. Thank God for what he has already put in your hands today.",
            prompts: ["Thank you for the food we ate this morning.", "Thank you for the people who give us a home and a safe place to sleep."],
            starter: "Thank you, God, for…", seconds: 30, aloud: "Thank you, God, for the food and the home you give us." },
          { name: "Please", lead: "Pray the line together: Give us our food for today.",
            prompts: ["Please give us what we need today, just today.", "Please help me build my life on Jesus’ words, starting today."],
            starter: "Please, God, give…", seconds: 35, aloud: "Please, God, give us our food for today, and help us build on Jesus’ words." }
        ],
        closing: "Close your hands gently, like holding a gift. Everyone: Amen.",
        notes: "Explain daily bread simply: bread means the food and things we need; “daily” means for today. Be aware that some students may not have enough food at home: keep the tone gentle, and keep the focus on trusting God, with no assumptions about anyone’s kitchen." }
    ] },

  /* ======================= TUESDAY ======================= */
  { label: "Tuesday", theme: "Why Jesus Told It", roleplay: false, mood: "dawn",
    learningIntentions: [
      "We are learning who was listening when Jesus told the two builders, and why he told it.",
      "We are learning the twist that surprised the crowd, and who is who in the story.",
      "I can explain why Jesus called his own words the solid rock."
    ],
    assessment: "Listen for students naming the crowd (ordinary people and religious teachers), explaining that both builders heard the same words and the houses looked alike until the storm, and noticing that Jesus said “my teachings” with authority.",
    resources: ["Screen", "Sticky notes or small cards", "Pens"],
    whereToNext: "Tomorrow: a school hut-building day in the bush, a southerly storm, and two very different mornings.",
    slides: [
      { type: "title", id: "t-title", title: "Why Jesus Told It", minutes: 0.5, kicker: "Term 3 · Week 5", sub: "Two Builders",
        art: { key: "t3w05d2-a" }, notes: "Let the splash play." },

      { type: "hook", id: "t-recap", title: "Recap", minutes: 1, style: "recap",
        text: "Yesterday we met two builders who both heard Jesus’ words.",
        ask: "What was the same about the two houses at the start, and what decided which one stood?",
        hint: "Both heard; both built; both houses looked finished. The foundation decided it: rock or sand. ‘Today we find out who was listening when Jesus told this story, and the surprise that left the crowd amazed.’" },

      { type: "scripture", id: "t-scr", title: "Matthew 7:24, 26, 28–29", minutes: 1, ref: "Matthew 7:24–29", version: "CEV",
        lines: [
          { text: "Anyone who hears and obeys these teachings of mine is like a wise person who built a house on solid rock.", ref: "Matthew 7:24" },
          { text: "Anyone who hears my teachings and doesn’t obey them is like a foolish person who built a house on sand.", ref: "Matthew 7:26" },
          { text: "When Jesus finished speaking, the crowds were surprised at his teaching.", ref: "Matthew 7:28" },
          { text: "He taught them like someone with authority, and not like their teachers of the Law of Moses.", ref: "Matthew 7:29" }
        ],
        emphasis: ["my teachings", "obey", "surprised", "authority"],
        notes: "Authority = the right to be listened to and obeyed. Teachers of the Law = experts in God’s laws who taught by quoting other famous teachers." },

      { type: "story", id: "t-story", title: "Who was listening?", minutes: 3.5, transition: "page", mood: "dawn",
        beats: [
          { text: "The end of the Sermon on the Mount.", caption: "A hillside, a crowd, and Jesus’ words still ringing." },
          { text: "Who was listening?", caption: "Farmers, fishermen, mums, kids, disciples — and religious teachers." },
          { text: "Surprise one: it looked fine.", caption: "On a sunny day, you couldn’t tell the houses apart.",
            art: { key: "t3w05d2-a", label: "Tue · who's who — the quick builder on sand", desc: "The foolish builder relaxing in front of his quickly built house on a sunny sandy riverbed.", shot: "wide, sunny", motion: "kenburns-right", chars: [],
              scene: "On a dry sandy riverbed, the second builder lounges on a woven mat in front of his quickly finished house, hands behind his head, feet up. The house looks just as good as the other one. The sun shines and the sky is clear." } },
          { text: "Surprise two: the storm shows the truth.", caption: "Only now could you see the difference.", shout: true,
            art: { key: "t3w05d2-b", label: "Tue · the twist — the storm comes", desc: "Flood water sweeping through the riverbed and collapsing the empty sand house as the builder watches from the bank.", shot: "wide, storm", motion: "kenburns-in", chars: [],
              scene: "In driving rain, a muddy flood roars down the riverbed and the empty sand house crumples into the torrent, walls folding in. The foolish builder stands safe but soaked on the high bank, hands on his head, lightning flickering behind him." } },
          { text: "Surprise three: “my teachings”.", caption: "He taught like someone with real authority." }
        ],
        narration: "Let’s zoom out. Where was Jesus when he told this story?\n\nHe was on a hillside near the Sea of Galilee. Everything he said that day, which we call the Sermon on the Mount, is written down in Matthew chapters five, six and seven. Jesus told people who is truly blessed. He told them to love their enemies. He taught them the Lord’s Prayer, the one we’re learning line by line this term. He told them not to worry about food and clothes, because their heavenly Father knows what they need each day. And he finished with this story of two builders.\n\nWho was listening? Not kings or soldiers, and not only church people. Ordinary Galilean people: fishermen and farmers, mums with little kids on their hips, workers who had walked all day to get there. Some sick people, hoping to be healed. Jesus’ closest friends, the disciples. And standing at the edges, some of the teachers of the Law. They were experts in God’s rules, and they taught by saying, ‘Rabbi So-and-So says this, and Rabbi So-and-So says that.’\n\nNow here is the first surprise. Everyone in that crowd had just heard the same teaching. Everyone was, in a way, a builder. The foolish builder wasn’t a stranger who had never heard of God. He was someone who had listened to every word, maybe even nodded along.\n\nHere is the second surprise. Jesus makes the two houses look exactly the same. On a sunny day, you couldn’t tell them apart. You might even think the quick builder was the clever one, because he finished first! It is only when the storm hits that the difference shows. Hearing without doing looks fine, until it doesn’t. That is the same for us: a person can sit through a whole assembly, nod at every word, and still be built on sand.\n\nAnd here is the third surprise, the one that left the crowd stunned. Look at what Jesus calls the rock: ‘these teachings of mine’. The teachers of the Law always pointed back to someone else. But Jesus says: my words are the rock. All through the Psalms, only God himself is called the Rock, the one who never moves. So Jesus is saying that his words are as solid as God’s own.\n\nLuke remembers Jesus asking, ‘Why do you keep calling me Lord, and not do what I say?’ Calling Jesus ‘Lord’ is wonderful, but he wants more than a nice word. He wants us to follow him, and to do what he says.\n\nWhen Jesus finished, Matthew tells us the crowds were amazed. He taught as someone with real authority, and every person on that hillside went home with a choice to make: hear and do, or just hear.",
        notes: "About 3½ minutes. Luke 6:46–49 is Luke’s version of the same story (the Sermon on the Plain); Luke 6:46 is paraphrased here. Teachers of the Law were also called scribes. Sensitive: a storm and a collapsed house; no person is hurt in the story. If your students have lived through floods or earthquakes, reassure them that this is a story about foundations." },

      { type: "dig", id: "t-dig", title: "Who’s who?", minutes: 2,
        prompt: "Jesus told an earthly story with a heavenly meaning. What does each part stand for?",
        columns: ["In the story", "In real life"],
        items: [
          { left: "The wise builder", right: "Anyone who hears Jesus’ words and does them" },
          { left: "The foolish builder", right: "Anyone who hears Jesus’ words and doesn’t do them" },
          { left: "The solid rock", right: "Jesus’ teachings, which are true and never move" },
          { left: "The storm", right: "Hard times in life, and one day God’s judgment" }
        ],
        reveal: "Both builders heard. The one who did what Jesus said stood.",
        notes: "Reveal row by row. Judgment = the day God sets everything right; say it plainly and calmly: choices matter, and God is fair and kind." },

      { type: "question", id: "t-q1", title: "Authority", minutes: 1, level: "look", mode: "finish", seconds: 20,
        text: "Finish the sentence: “He taught them like someone with ________, and not like their teachers of the Law.”",
        reveal: "“…authority.” (Matthew 7:29)",
        hint: "Answer: authority. Follow-up: ‘How did the crowds react to Jesus’ teaching?’ (They were surprised.) Follow-up 2: ‘What kind of teachers was he different from?’ (The teachers of the Law.) If silent: point to the last scripture line." },

      { type: "question", id: "t-q2", title: "Same, until the storm", minutes: 1.5, level: "think", mode: "silent", seconds: 40,
        text: "Why do you think Jesus made the two houses look the same until the storm?",
        hint: "Good answers: you can’t tell a person’s foundation from the outside; being nice at church or school isn’t the same as obeying Jesus; real life tests us. Follow-up: ‘What kinds of things look fine on the outside but aren’t solid underneath?’ Follow-up 2: ‘What does this say about God, who sees the foundation?’ If silent: give 20 seconds of quiet thinking, then ask for one idea." },

      { type: "question", id: "t-q3", title: "Does the rock mean no storms?", minutes: 1.5, level: "dig", mode: "vote", seconds: 30, skippable: true,
        text: "Agree or disagree: “If you follow Jesus, you won’t have any storms.”",
        options: ["Agree", "Disagree"],
        hint: "Disagree: the storm hit both houses (Matthew 7:25, 27). The difference is not whether the storm comes, but whether you stand. Follow-up: ‘What helps you stay standing in a storm?’ Follow-up 2: ‘Who is with the wise builder in the storm?’ (Jesus promises to be with us, Matthew 28:20.) If silent: ask for one hard thing a kid might face." },

      { type: "apply", id: "t-apply", title: "Head · Heart · Hands", minutes: 2,
        head: "Anyone who hears Jesus’ words has a choice: build on the rock by doing them, or on the sand by ignoring them.",
        heart: "Jesus, I want your words to be the rock under my feet.",
        hands: "Write one thing Jesus said that you already know, such as “love your enemies” (Matthew 5:44) or “don’t worry” (Matthew 6:34), on a sticky note. Put it where you’ll see it tomorrow morning.",
        settings: ["home", "class", "bedtime"],
        notes: "Give out sticky notes. Help students find a teaching of Jesus they already know: love your enemies (Matthew 5:44), don’t worry (Matthew 6:34), do to others what you want them to do to you (Matthew 7:12), ask and keep on asking (Matthew 7:7). This leads into Thursday’s challenge." },

      { type: "scene", id: "t-scene", title: "The storm comes", minutes: 1, optional: true,
        art: { key: "t3w05d2-b" },
        boxes: [
          { text: "Same words heard. Same storm. Different foundation.", pos: "tl", style: "caption" },
          { text: "Finally, it fell with a crash.", pos: "br", style: "shout" }
        ] },

      { type: "verse", id: "t-verse", title: "Build the verse", minutes: 1, activity: "build",
        notes: "Build Matthew 7:24 chunk by chunk, like building a house: one chunk at a time, one block on another." },

      { type: "prayer", id: "t-pray", title: "Our daily bread — write a list", minutes: 3, mood: "calm", style: "write",
        tip: "Write a “daily bread” list: what do you need today? Jesus said we need God’s words as much as we need food (Matthew 4:4), so put both on your list.",
        opening: "Take your pen. At the top of your paper or sticky note, write: “Give us our food for today.”",
        phases: [
          { name: "Wow", lead: "Write one line about who God is.",
            prompts: ["God, you are my Rock and you never move.", "God, your words are true and strong."],
            starter: "God, you are…", seconds: 35, aloud: "God, you are our Rock, and your words are solid." },
          { name: "Sorry", lead: "Silently: where do you hear Jesus’ words but not do them?",
            prompts: ["Sorry for hearing and not doing.", "Sorry for building my life on things that don’t last."],
            starter: "God, I’m sorry for…", seconds: 25, aloud: "God, we’re sorry for hearing your words and not doing them." },
          { name: "Thanks", lead: "Write three things you’re thankful for today: food, a place to live, people.",
            prompts: ["Thank you for breakfast, lunch, and the people who make it.", "Thank you for your words, which feed my heart."],
            starter: "Thank you for…", seconds: 40, aloud: "Thank you, God, for what we need today." },
          { name: "Please", lead: "Write one thing you need today, and one thing someone else needs.",
            prompts: ["Please give me what I need for today, and help me trust you for tomorrow.", "Please help someone who has too little food or no safe home."],
            starter: "Please give…", seconds: 35, aloud: "Please, God, give us our food for today, and help people who go without." }
        ],
        closing: "Fold your list and keep it in your pocket today. Amen!",
        notes: "Students keep their list private. Be gentle about food and home: some students may be hungry or unsettled at home; keep it light and confident about God’s care." }
    ] },

  /* ======================= WEDNESDAY ======================= */
  { label: "Wednesday", theme: "Hut-Building Day", roleplay: true, mood: "storm",
    learningIntentions: [
      "We are learning how Jesus’ story about two builders looks in a modern school bush setting.",
      "We are learning why hearing the instructions isn’t the same as following them.",
      "I can say what “hear and do” looks like in my own life."
    ],
    assessment: "Listen for students linking Sione to the foolish builder and Aroha to the wise builder, and explaining that Sione heard the instructions but didn’t do them.",
    resources: ["Screen", "Optional: rope or string for pretend lashing", "Optional: a few sticks"],
    whereToNext: "Tomorrow: what the story shows about God, the Rock, and how we build one day at a time.",
    slides: [
      { type: "title", id: "w-title", title: "Hut-Building Day", minutes: 0.5, kicker: "Term 3 · Week 5", sub: "Two Builders",
        art: { key: "t3w05d3-a" }, notes: "Let the splash play. Today’s story is a retelling in modern Aotearoa; Jesus’ parable is the same, with new builders." },

      { type: "hook", id: "w-hook", title: "Rushed it", minutes: 1,
        text: "Have you ever rushed a job just to finish first, and then had to do it all again?",
        ask: "What happened? What did you wish you’d done?",
        hint: "Take two or three stories: flat-pack furniture, a science project, a messy room, a hut at the beach. Recap: ‘Yesterday we learned that both builders heard Jesus, and the houses looked the same until the storm. Today the same story happens in a school bush block.’" },

      { type: "scripture", id: "w-scr", title: "Matthew 7:24, 26–27", minutes: 1, ref: "Matthew 7:24–27", version: "CEV",
        lines: [
          { text: "Anyone who hears and obeys these teachings of mine is like a wise person who built a house on solid rock.", ref: "Matthew 7:24" },
          { text: "Anyone who hears my teachings and doesn’t obey them is like a foolish person who built a house on sand.", ref: "Matthew 7:26" },
          { text: "Rain poured down, rivers flooded, and the wind blew hard against that house. Finally, it fell with a crash.", ref: "Matthew 7:27" }
        ],
        emphasis: ["hears and obeys", "doesn’t obey", "fell with a crash"],
        notes: "Today’s story is not in the Bible. It is Jesus’ parable retold with new builders, to help us see how it works in real life." },

      { type: "story", id: "w-story", title: "Hut-building day", minutes: 3, transition: "page", mood: "storm",
        beats: [
          { text: "Hut-building day in the bush.", caption: "Mr Walker’s three rules: a living tree, lash every joint, test it.",
            art: { key: "t3w05d3-a", label: "Wed · retelling — hut-building day", desc: "Kids building huts in the school bush: Aroha carefully lashing branches to a solid tree, Sione stacking loose branches fast.", shot: "wide", motion: "kenburns-left", chars: ["aroha", "sione"],
              setting: "Modern-day Aotearoa New Zealand setting: dense native bush with tree ferns, punga, nīkau palms, mossy trunks and a narrow track. Kiwi kids of many backgrounds drawn naturally and respectfully, in everyday clothes, school uniforms or sports gear.",
              scene: "School hut-building day in a patch of native bush. A teacher demonstrates a lashing knot, and Aroha carefully ties sturdy branches to a thick living tree trunk, while Sione nearby piles loose branches against a punga stump, laughing and already finished." } },
          { text: "Sione is done in ten minutes.", caption: "Aroha is still tying her first knot." },
          { text: "At four o’clock, both huts looked fine.", caption: "Then the southerly came." , shout: true },
          { text: "The next morning…", caption: "One hut is a heap. One is still standing.",
            art: { key: "t3w05d3-b", label: "Wed · retelling — the morning after the southerly", desc: "After an overnight storm, Sione's hut lies flattened while Aroha's still stands among dripping ferns.", shot: "medium wide, after rain", motion: "kenburns-in", chars: ["aroha", "sione", "mia"],
              setting: "Modern-day Aotearoa New Zealand setting: dense native bush with tree ferns, punga, nīkau palms, mossy trunks and a narrow track. Kiwi kids of many backgrounds drawn naturally and respectfully, in everyday clothes, school uniforms or sports gear.",
              scene: "The morning after a southerly storm, the bush drips and steams. Sione stares at a scattered heap of branches where his hut was, while a few steps away Aroha's lashed hut still stands firm against its tree, and Mia peeks out from inside it, grinning." } },
          { text: "“I heard it. I just didn’t do it.”", caption: "Aroha says, “Come on, bro, we’ll rebuild it properly.”" }
        ],
        narration: "It was Thursday afternoon, and Room 14 had hiked down to the school’s patch of native bush. Tree ferns hung over the track, and the air smelled of damp leaves. It was hut-building day.\n\nMr Walker stood them in a circle and gave three rules. ‘One: tie your hut to a living tree, not a dead stump. Two: lash every joint with a proper knot. Three: lean your whole weight on it to test it. And listen: there’s a southerly coming tonight. These huts stay up until morning for our hot chocolate inspection. So build them to last.’\n\nEveryone heard exactly the same words. Every single person in the circle nodded.\n\nAroha picked a big, thick tree. Her friend Mia was nervous about the southerly, but Aroha handed her a rope and said, ‘That’s why we do it properly.’ They tied each joint twice. Mia’s fingers, so good at drawing, turned out to be great at knots. It took forever. Aroha’s hands were scratched and sore, and Sione’s laughing drifted over the ferns.\n\nNext to them, Sione was flying. He leaned a pile of loose branches against an old punga stump, stepped back, and threw up his arms like he’d scored a try. ‘Done! Ten minutes! Check it out, a new world record!’ He was thinking about rugby training, and about getting to the field before everyone else. ‘Aroha, you’re still on your first wall!’\n\n‘Mr Walker said test it,’ she said, and leaned her whole weight on hers. It creaked a little, then held. She tightened one more knot and tested it again. Still nothing.\n\nAt four o’clock, the sun was shining, and both huts looked finished. Honestly, from the track, you couldn’t tell them apart.\n\nThat night, the southerly arrived. The wind howled. The rain came sideways. The bush roared until dawn.\n\nNext morning, the whole class crunched down the track, boots squelching in the mud, dripping with ferns on both sides. Sione stopped dead. Where his hut had been, there was a heap of sticks. ‘No way. NO way.’\n\nA few steps away, Aroha’s hut stood firm. And Mia was inside it, grinning out of the doorway. ‘It’s dry!’\n\nSione looked at his sticks. ‘I heard every word,’ he said. ‘I just didn’t do it.’\n\nAroha didn’t laugh. ‘Come on, bro. We’ll rebuild it at lunchtime. Properly.’",
        notes: "About 3 minutes. Mr Walker, Aroha, Sione and Mia are imagined. Portray Sione with warmth: he’s big-hearted, just impulsive, and he’s not “the bad kid”. Southerly = a cold storm wind from the south, common in New Zealand. Punga = tree fern; a dead punga stump is soft and rotting, which is why it makes a poor anchor." },

      { type: "question", id: "w-q1", title: "What did Sione tie to?", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "What did Sione lean his branches against?",
        options: ["A living tree", "An old punga stump", "A fence post", "Mr Walker’s car"], answer: 1,
        hint: "Answer: B, an old punga stump, not a living tree as the rules said. Follow-up: ‘Which of Mr Walker’s rules did he skip?’ (Tie to a living tree, lash every joint, test it.) Follow-up 2: ‘What did Aroha do instead?’ (Chose a big tree, tied each joint twice and tested it.) If silent: re-read the rules from the story." },

      { type: "roleplay", id: "w-rp", title: "Hut-Building Day", minutes: 5, ref: "Matthew 7:24–27 (retold)",
        art: { key: "t3w05d3-a" },
        imagined: "This is a modern retelling of Jesus’ parable, set in New Zealand. All the characters and their words are imagined; only the idea (hearing and doing, rock and sand) comes from Matthew 7:24–27.",
        actions: ["Everyone: pretend to tie knots — “tie, tie, tie!”", "Everyone: be the southerly: wind, rain and a storm roar"],
        props: ["Optional: a length of rope or string", "Optional: a few sticks"],
        characters: [
          { name: "Narrator", color: "#F2C77B", desc: "Tells the story" },
          { name: "Mr Walker", color: "#A1887F", desc: "The teacher — calm, clear and a bit funny" },
          { name: "Aroha", color: "#7BA7D9", desc: "Careful and kind — follows the rules" },
          { name: "Sione", color: "#E57373", desc: "Fast, funny and big-hearted — loves a shortcut" },
          { name: "Mia", color: "#C5A3E0", desc: "A worrier and a great artist — good with her fingers" },
          { name: "Everyone", color: "#FFFFFF", desc: "The class, then the southerly" }
        ],
        lines: [
          { character: "Narrator", text: "The school bush block, Thursday afternoon. Mr Walker has gathered the class under the tree ferns.", direction: true },
          { character: "Mr Walker", text: "Three rules. Tie to a living tree. Lash every joint. Then lean your whole weight on it to test it." },
          { character: "Mr Walker", text: "A southerly is coming tonight. These huts stay up till morning, so build them to last." },
          { character: "Sione", text: "Easy! Got it, got it. Aroha, race you. Loser carries the rugby ball!", action: "tuck an imaginary ball under the arm" },
          { character: "Aroha", text: "I’m picking this big tree, because rule one says a living tree. Mia, grab the rope?" },
          { character: "Mia", text: "Mr Walker said southerly. What if it’s a really big one? My hands are shaking.", action: "push glasses up" },
          { character: "Aroha", text: "That’s why we do it properly. Pass the rope. We’ll tie every joint twice." },
          { character: "Everyone", text: "Tie, tie, tie! Lash, lash, lash!", action: "pretend to tie knots" },
          { character: "Sione", text: "Done! Ten minutes! Mr Walker, check it out. New world record!", action: "arms up like scoring a try" },
          { character: "Mr Walker", text: "Hmm. What did you tie it to, Sione?" },
          { character: "Sione", text: "That old punga stump. It’s sort of standing up. And there’s heaps of sticks. Sweet as!" },
          { character: "Mia", text: "Honestly, from here, it looks just the same as ours.", action: "look from hut to hut" },
          { character: "Narrator", text: "At four o’clock both huts looked finished, and the sun was shining. Everyone went home." },
          { character: "Everyone", text: "Whooosh! Splash! Crash!", action: "the southerly arrives: wind and rain sounds" },
          { pause: "Freeze! The southerly blows all night. Which hut do you think will still be standing in the morning? Why?", seconds: 20 },
          { character: "Narrator", text: "Friday morning. The bush is dripping." },
          { character: "Sione", text: "No way. NO way. Where’s my hut?!", action: "stare at the heap of sticks" },
          { character: "Mia", text: "Aroha! Yours is still up! I’m inside it, and it’s dry!", action: "wave from the doorway" },
          { character: "Aroha", text: "The knots didn’t move once. Not even in that wind." },
          { character: "Mr Walker", text: "Same instructions. Same bush. Same southerly. Sione, did you hear what I said yesterday?" },
          { character: "Sione", text: "Every word, sir. I heard it. I just didn’t do it.", action: "sheepish" },
          { character: "Aroha", text: "Come on, bro. At lunchtime we’ll help you rebuild. Properly this time." },
          { character: "Sione", text: "Seriously? Sweet as! Now teach me that knot.", action: "grin" },
          { character: "Everyone", text: "Hear it, and do it!", action: "stamp once, fist on fist" }
        ],
        debrief: [
          { level: "think", text: "How was Sione like the foolish builder, and Aroha like the wise builder?", hint: "Both heard the same instructions. Sione rushed and skipped the hard parts; Aroha did them. The storm showed the difference." },
          { level: "look", text: "What did Aroha do when Sione’s hut fell?", hint: "She didn’t laugh or say “told you so”. She offered to help him rebuild properly." }
        ],
        notes: "Imagined retelling. Sione should be funny, not foolish: he is a lovable kid who took a shortcut, not a villain. Mr Walker, Aroha, Sione and Mia are imagined. Keep the southerly sounds fun, and stop the sounds quickly when Mr Walker speaks." },

      { type: "question", id: "w-q2", title: "Hearing isn’t enough", minutes: 1.5, level: "think", mode: "pair", seconds: 45,
        text: "Sione heard every word of Mr Walker’s instructions, but his hut still fell. Why isn’t hearing enough?",
        hint: "Good answers: hearing is easy and doing takes effort; we think we’ll remember; shortcuts look fine until the test; instructions only protect us if we follow them. Follow-up: ‘What did Aroha do that Sione didn’t?’ Follow-up 2: ‘How is this like what Jesus said in Matthew 7:26?’ If silent: ask which rule Sione skipped, and why he skipped it." },

      { type: "question", id: "w-q3", title: "A hand to rebuild", minutes: 1, level: "dig", mode: "discuss", seconds: 40, skippable: true,
        text: "Aroha didn’t laugh at Sione. She offered to help him rebuild. Why does that matter, and what does it say about how Jesus treats people who’ve got it wrong?",
        hint: "Ideas: failing doesn’t have to be the end; the wise builder in the role-play helped the foolish one; Jesus forgives and helps us start again; we shouldn’t gloat. Follow-up: ‘When has someone helped you start again?’ Follow-up 2: ‘Who could you help rebuild this week?’ If silent: ask how Sione would have felt if Aroha had said ‘told you so’." },

      { type: "apply", id: "w-apply", title: "Head · Heart · Hands", minutes: 1,
        head: "Hearing is the first step; the rock is in the doing.",
        heart: "God, show me one thing I know I should do but keep putting off.",
        hands: "Pick one job you’ve been putting off (tidying your room, saying sorry to a sibling, finishing a task) and do it before tomorrow, properly, not rushed.",
        settings: ["home", "school", "sport"],
        notes: "Keep it small and specific. This builds towards Thursday’s challenge." },

      { type: "scene", id: "w-scene", title: "Still standing", minutes: 0.5, optional: true,
        art: { key: "t3w05d3-b" },
        boxes: [
          { text: "“It’s dry!”", pos: "tr", style: "shout" },
          { text: "“I heard every word. I just didn’t do it.”", pos: "bl", style: "speech" }
        ] },

      { type: "verse", id: "w-verse", title: "Verse with actions", minutes: 1, optional: true, activity: "actions",
        notes: "Actions for Matthew 7:24: ear, stamp, book, head, roof, rock." },

      { type: "prayer", id: "w-pray", title: "Our daily bread — in pairs", minutes: 3, mood: "calm", style: "pairs",
        tip: "Pray with a partner. Ask, “What do you need today?” Then each pray one sentence for the other. That’s asking God for daily bread for someone else.",
        opening: "Turn to a partner. First, quietly tell your partner one thing you need today. It can be small.",
        phases: [
          { name: "Wow", lead: "Take turns finishing the sentence about God.",
            prompts: ["God, you are a Rock. You didn’t move in the southerly.", "God, you are strong and you hold us up."],
            starter: "Wow, God, you are…", seconds: 30, aloud: "Wow, God, you are our Rock!" },
          { name: "Sorry", lead: "Silently: where did you rush or skip the hard part?",
            prompts: ["Sorry for taking shortcuts.", "Sorry for hearing your words and not doing them."],
            starter: "God, I’m sorry for…", seconds: 25, aloud: "God, we’re sorry for the shortcuts we take." },
          { name: "Thanks", lead: "Thank God for the people who help us rebuild when we get it wrong.",
            prompts: ["Thank you for people like Aroha who help us start again.", "Thank you for forgiving us and helping us rebuild."],
            starter: "Thank you, God, for…", seconds: 30, aloud: "Thank you, God, for the people who help us start again." },
          { name: "Please", lead: "Pray one sentence for your partner’s need today.",
            prompts: ["Please give (partner’s name) what they need today.", "Please help us both to hear your words and do them."],
            starter: "Please, God, give…", seconds: 40, aloud: "Please, God, give us all our food for today." }
        ],
        closing: "Thank your partner for praying for you. Everyone: Amen.",
        notes: "Model it first with a student. If a partner’s need is private or sensitive, they can say “help with something at home” and leave it there." }
    ] },

  /* ======================= THURSDAY ======================= */
  { label: "Thursday", theme: "Rock Solid", roleplay: false, mood: "dawn",
    learningIntentions: [
      "We are learning what the two builders show us about God and about Jesus.",
      "We are learning how to build our lives on Jesus’ words, one day at a time.",
      "I can choose one thing Jesus said and plan how to do it this week."
    ],
    assessment: "Students can retell the parable, explain that Jesus’ words are solid rock, say that hearing and doing go together, and recite Matthew 7:24.",
    resources: ["Screen", "Take-home challenge cards", "Sticky notes from Tuesday"],
    whereToNext: "Next week: The Servant Who Wouldn’t Forgive — a king cancels a gigantic debt, and a forgiven servant won’t forgive a tiny one.",
    slides: [
      { type: "title", id: "th-title", title: "Rock Solid", minutes: 0.5, kicker: "Term 3 · Week 5", sub: "Two Builders",
        art: { key: "t3w05d4-a" }, notes: "Let the splash play." },

      { type: "review", id: "th-review", title: "True or false?", minutes: 2.5, format: "truefalse",
        prompt: "True or false? Stand up for TRUE, sit down for FALSE!",
        items: [
          { text: "Both builders heard the same words from Jesus.", answer: true, why: "The difference wasn’t hearing. It was doing (Matthew 7:24, 26)." },
          { text: "The house on the sand looked terrible from the start.", answer: false, why: "It looked just as good as the other house. The storm showed the difference." },
          { text: "The storm only hit the foolish builder’s house.", answer: false, why: "Rain, floods and wind hit both houses; only one stood." },
          { text: "The wise builder was the one who built fastest.", answer: false, why: "He dug down to rock, which took longer." },
          { text: "In our hut-building story, Sione didn’t hear Mr Walker’s rules.", answer: false, why: "He heard every word. He just didn’t do them." }
        ],
        hint: "Students stand for true and sit for false; reveal the answer and the why. Ask: ‘Which story was that part from, Monday’s parable or Wednesday’s hut?’",
        notes: "Keep it fast and fun." },

      { type: "scripture", id: "th-scr", title: "Matthew 7:24–25 · 6:11", minutes: 1, ref: "Matthew 7:24–25; 6:11", version: "CEV",
        lines: [
          { text: "Anyone who hears and obeys these teachings of mine is like a wise person who built a house on solid rock.", ref: "Matthew 7:24" },
          { text: "Rain poured down, rivers flooded, and the wind blew hard against that house. But it did not fall, because it was built on solid rock.", ref: "Matthew 7:25" },
          { text: "Give us our food for today.", ref: "Matthew 6:11" }
        ],
        emphasis: ["hears and obeys", "solid rock", "did not fall", "food for today"],
        notes: "Matthew 6:11 is from the Lord’s Prayer, the line we pray this week: the old words are “give us this day our daily bread”." },

      { type: "story", id: "th-story", title: "Built on the rock", minutes: 2, transition: "page", mood: "dawn",
        beats: [
          { text: "God is a Rock.", caption: "Solid and safe, whatever blows in.",
            art: { key: "t3w05d4-a", label: "Thu · what it shows — built on rock", desc: "The stone house on the rock in clear morning light after the storm, sun rays breaking through clouds.", shot: "wide, hopeful", motion: "kenburns-up", chars: [],
              scene: "The morning after the storm: the stone house still stands on its rocky ledge, wet and shining. The clouds are breaking apart, and broad rays of sunlight fall across the house and the calm, muddy riverbed below, where puddles reflect the sky." } },
          { text: "Storms come to every house.", caption: "But the house on the rock stands." },
          { text: "Jesus did every word.", caption: "He stood in the biggest storm — for us." },
          { text: "One thing. One day at a time.", caption: "Hear it, then do it.",
            art: { key: "t3w05d4-b", label: "Thu · live it — hear it, then do it", desc: "Mia at the kitchen table with a Bible open, pulling on her school bag, ready to go and do what she read.", shot: "medium", motion: "kenburns-in", chars: ["mia"],
              setting: "Modern-day Aotearoa New Zealand setting: a weatherboard family home in a suburban street, with a driveway, letterbox, deck and a small back garden. Kiwi kids of many backgrounds drawn naturally and respectfully, in everyday clothes, school uniforms or sports gear.",
              scene: "Early morning in a family kitchen, Mia stands at the table with a small Bible open beside her cereal bowl, one finger still on the page, already swinging her school bag onto her shoulder with a determined look. Sunlight pours through the window." } }
        ],
        narration: "So what does Jesus’ story show us about God? Three things.\n\nFirst, God is a Rock. All through the Psalms, God is called a rock: somewhere solid and safe that never moves, no matter what blows in. And Jesus says his words are that solid. When we build our lives on what Jesus says, we are building on God himself.\n\nSecond, storms come to every house. Rain fell on the wise builder too. Being on the rock doesn’t mean no storms. It means you are still standing after them.\n\nThird, and this is the best news, the greatest Builder of all is Jesus. He heard his Father’s words and did every one of them. And he went through the biggest storm there has ever been, on the cross, for us. Three days later, the empty tomb showed that nothing could knock him down. He is the one we build on. And when our house falls, when we hear and don’t do, like Sione, Jesus doesn’t say ‘too bad’. He forgives us, and he helps us rebuild.\n\nNow, how do you build a house? One brick at a time. Remember the prayer we’re learning? ‘Give us our food for today.’ Daily bread: just enough for today, and God gives it again tomorrow, like the manna in Term 1. Jesus’ words are daily bread too. Not a giant feast once a year, but a little each day. Mia, who worries a lot, picks one thing Jesus said: ‘Don’t worry about tomorrow.’ She reads it at breakfast, and she does it. When worry comes, she stops and says thank you for today. One thing. One day at a time. That’s how you build on the rock.",
        notes: "About 2 minutes. “Rock” for God: for example Psalm 18:2 (not quoted here). Matthew 6:34, “don’t worry about tomorrow”, is paraphrased. Mia is imagined. Keep the cross simple and reverent: Jesus did what his Father asked, even to death, and rose again." },

      { type: "question", id: "th-q1", title: "What made the difference?", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "In Jesus’ story, what made the difference between the two houses?",
        options: ["The size of the house", "What each one was built on", "The colour of the roof", "Who had better tools"], answer: 1,
        hint: "Answer: B, what each one was built on, rock or sand (Matthew 7:24, 26). Follow-up: ‘What does the rock stand for?’ (Jesus’ words.) Follow-up 2: ‘What does building on the rock look like?’ (Hearing and doing.) If silent: re-read the first scripture line." },

      { type: "question", id: "th-q2", title: "Jesus’ words are rock", minutes: 1.5, level: "think", mode: "pair", seconds: 45,
        text: "In the Psalms, God is called a Rock. Jesus says his own words are the rock. What does that tell us about who Jesus is?",
        hint: "Good answers: Jesus’ words are as reliable as God’s; Jesus speaks with God’s authority; he is God’s Son and can be trusted completely. Follow-up: ‘Why would a Rock be a good picture of God?’ Follow-up 2: ‘How could we find out what Jesus’ words are?’ (Read the Gospels.) If silent: ask what makes a rock different from sand." },

      { type: "recap", id: "th-recap", title: "This week’s big idea", minutes: 1.5,
        points: [
          "Jesus’ words are solid rock; they don’t move when the storm comes.",
          "Hearing isn’t enough. Building on the rock means doing what Jesus says, one day at a time.",
          "Jesus himself stood through the biggest storm for us, and he helps us rebuild when we get it wrong."
        ],
        notes: "Then the Big Idea stamps in." },

      { type: "question", id: "th-q3", title: "All by myself?", minutes: 1.5, level: "dig", mode: "vote", seconds: 30, skippable: true,
        text: "Agree or disagree: “I can build my life on the rock all by myself.”",
        options: ["Agree", "Disagree"],
        hint: "Disagree: we can’t do it perfectly alone; Jesus is the one who did it perfectly, and he forgives us and helps us (his Holy Spirit). Follow-up: ‘What happens when we fall short?’ (Jesus forgives and helps us start again.) Follow-up 2: ‘Who else can help you hear and do?’ (Friends, family, church.) If silent: ask what Aroha did for Sione." },

      { type: "challenge", id: "th-chal", title: "This Week’s Challenge", minutes: 2,
        text: "Hear it, do it. Pick one thing Jesus said, such as “love your enemies” or “don’t worry”, and actually do it, every day this week.",
        why: "“Anyone who hears and obeys these teachings of mine is like a wise person who built a house on solid rock.” — Matthew 7:24",
        head: "Jesus’ words are solid rock, and I build on them by doing them.", heart: "Jesus, help me do what I hear.", hands: "Pick one thing Jesus said. Do it every day this week.",
        takeHome: true,
        notes: "Use the sticky notes from Tuesday. Ideas: love your enemies (Matthew 5:44); don’t worry (Matthew 6:34); do to others what you want them to do to you (Matthew 7:12). Next Monday’s check-in will ask about this." },

      { type: "verse", id: "th-verse", title: "Memory verse: fade-out", minutes: 1.5, activity: "fade",
        notes: "Fade out Matthew 7:24. Bonus: say Luke 8:15 from Week 1." },

      { type: "scene", id: "th-scene", title: "Rock solid", minutes: 1, optional: true,
        art: { key: "t3w05-cover" },
        boxes: [
          { text: "Hear it. Do it.", pos: "tl", style: "shout" },
          { text: "Build your life on Jesus’ words: solid rock.", pos: "br", style: "caption" }
        ] },

      { type: "prayer", id: "th-pray", title: "Our daily bread — out loud", minutes: 3, mood: "calm", style: "out-loud",
        tip: "Pray the whole line out loud together: “Give us our food for today.” Daily bread means what we need for today, and God gives again tomorrow.",
        opening: "Let’s pray together. In each part, anyone can call out one short sentence. Short is perfect.",
        phases: [
          { name: "Wow", lead: "Call out one thing God is. Think of the rock.",
            prompts: ["God, you are our Rock!", "God, you are strong, and you never move."],
            starter: "God, you are…", seconds: 35, aloud: "God, you are our Rock, solid and strong!" },
          { name: "Sorry", lead: "Silently: tell God about the words of Jesus you’ve heard but haven’t done.",
            prompts: ["Sorry for hearing and not doing.", "Thank you that you forgive us and help us start again."],
            starter: "God, I’m sorry for…", seconds: 25, aloud: "God, we’re sorry, and thank you that you help us start again." },
          { name: "Thanks", lead: "Call out something God gave you today.",
            prompts: ["Thank you for the food on our tables.", "Thank you for Jesus, who stood in the storm for us."],
            starter: "Thank you, God, for…", seconds: 35, aloud: "Thank you, God, for what you give us each day." },
          { name: "Please", lead: "Pray the line together, then ask for help with this week’s challenge.",
            prompts: ["Give us our food for today.", "Please help me do the one thing of Jesus’ I’ve chosen."],
            starter: "Please, God, help…", seconds: 40, aloud: "Give us our food for today, and help us do what Jesus says." }
        ],
        closing: "Let’s say the line together once more: “Give us our food for today.” Amen!",
        notes: "Celebrate the whole-class voice. Encourage short, honest prayers." }
    ] }
  ]
};
