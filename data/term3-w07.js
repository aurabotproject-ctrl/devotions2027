/* Morninglight 2027 — Term 3 Week 7: The Three Servants (Matthew 25:14–30). Scripture: CEV. */
window.DEVOTIONS = window.DEVOTIONS || {};
window.DEVOTIONS["Term 3"] = window.DEVOTIONS["Term 3"] || {};
window.DEVOTIONS["Term 3"]["Week 7"] = {
  lessonTitle: "The Three Servants",
  passage: "Matthew 25:14–30",
  bigIdea: "God is a generous Master who trusts us with gifts and loves to say “Well done!” — so we use what he has given us for others, out of trust, not fear.",
  godIs: "Generous Master",
  memoryVerse: { ref: "Matthew 25:21", text: "You are a good and faithful servant! I left you in charge of only a little, but now I will put you in charge of much more. Come and share in my happiness!", version: "CEV",
    chunks: ["You are a good", "and faithful servant!", "I left you in charge of only a little,", "but now I will put you", "in charge of much more.", "Come and share in my happiness!"],
    actions: ["Point to yourself — you!", "Thumbs up — faithful", "Hold your hands close together — only a little", "Open your hands wide — now much more", "Stretch both arms up high — much more!", "Wide smile, arms open — come in!"] },
  prayerFocus: { skill: "Lead us, deliver us", tip: "This week’s line from the Lord’s Prayer is “Keep us from being tempted and protect us from evil” (Matthew 6:13, CEV) — the line people often say as “lead us not into temptation, but deliver us from evil”. Temptation is a pull towards the wrong thing, and fear can pull us to hide the good things God gave us. We ask God to lead us and to rescue us." },
  mood: "desert",
  cover: "t3w07-cover",
  characters: ["jesus", "peter", "aroha", "sione", "jun"],
  coverArt: { key: "t3w07-cover", label: "Week cover", desc: "A master handing three bags of gold to three servants in a courtyard, his travel caravan waiting at the gate.", shot: "wide",
    scene: "In a grand stone courtyard at sunrise, a wealthy master in a travelling cloak hands bulging bags of gold to three bowing servants. Beyond the open gate, camels and a loaded caravan wait in the dawn light, ready for a long journey.", chars: [] },
  comicArt: { key: "t3w07-comic", label: "Comic page (week opener)", format: "portrait", desc: "Six-panel comic page of the three servants.",
    panels: "Six panels. Panel 1 (wide): a master handing bags of gold to three servants as a caravan waits. Panel 2 (small): the first servant bargaining in a busy market. Panel 3 (small): the second servant working in a workshop. Panel 4 (tall): the third servant burying his bag under an olive tree at night. Panel 5 (wide): the master returning, two servants opening chests of gold. Panel 6 (small): the third servant holding up a dirty bag, afraid.", chars: [] },

  days: [

  /* ======================= MONDAY ======================= */
  { label: "Monday", theme: "Five, Two and One", roleplay: true, mood: "desert",
    learningIntentions: [
      "We are learning how Jesus’ story of the three servants begins: a master trusts his servants with his gold and goes away.",
      "We are learning what each servant did with the gold he was given.",
      "I can retell the story and say which servant did something different, and what the master said to each."
    ],
    assessment: "Listen for students recalling that the servants were given five, two and one bags of gold, that two of them put it to work and one buried his, and that the master said exactly the same “good and faithful servant” words to the first two.",
    resources: ["Screen", "Optional: three small cloth bags or paper cups with 5, 2 and 1 coins", "Optional: a small spade or spoon for the digging actions"],
    whereToNext: "Tomorrow: why Jesus told this story — who was listening on the Mount of Olives, and the three surprises that would have shocked them.",
    slides: [
      { type: "title", id: "m-title", title: "Five, Two and One", minutes: 0.5, kicker: "Term 3 · Week 7", sub: "The Three Servants",
        art: { key: "t3w07-cover" }, notes: "Let the splash play. If you have three small bags or cups with 5, 2 and 1 coins, set them out where students can see them all week." },

      { type: "hook", id: "m-hook", title: "Trusted with something big", minutes: 1.5,
        checkin: { text: "Last week we heard The Servant Who Wouldn’t Forgive — the servant forgiven a gigantic debt who wouldn’t forgive a tiny one. Your challenge: choose to forgive one person for one thing, even a small one, and pray for them by name. How did it go?" },
        text: "Imagine your neighbours go away for a month and ask you to look after something precious to them — their pet, or their garden. How would you feel?",
        ask: "Would you be excited, nervous, or both? What would you do to look after it well?",
        hint: "Check-in first: ask two or three students how the forgiving went. Keep it light and never ask anyone to name the person; celebrate honest ‘it was hard’ answers as much as success stories. Then the hook: take a few answers about excitement and nerves, and land it: ‘Today Jesus tells a story about a master who trusts his servants with a fortune and goes away, and the three servants each do something very different.’" },

      { type: "scripture", id: "m-scr", title: "Matthew 25:15–21", minutes: 1, ref: "Matthew 25:15–21", version: "CEV",
        lines: [
          { text: "The man knew what each servant could do. So he handed five thousand coins to the first servant, two thousand to the second, and one thousand to the third. Then he left the country.", ref: "Matthew 25:15" },
          { text: "As soon as the man had gone, the servant with the five thousand coins went out and used them to earn five thousand more.", ref: "Matthew 25:16" },
          { text: "But the servant with one thousand coins dug a hole and hid his master’s money in the ground.", ref: "Matthew 25:18" },
          { text: "“Wonderful!” his master replied. “You are a good and faithful servant! I left you in charge of only a little, but now I will put you in charge of much more. Come and share in my happiness!”", ref: "Matthew 25:21" }
        ],
        emphasis: ["handed", "went out", "dug a hole", "good and faithful servant", "share in my happiness"],
        notes: "Matthew 25:21 is our memory verse. The CEV says “five thousand coins”; the original word is “talents”, a huge weight of silver, and we say “bags of gold” in the story. We meet the size of the gift tomorrow. This reading is shortened; the whole parable is Matthew 25:14–30." },

      { type: "story", id: "m-story", title: "A master, a journey and three servants", minutes: 3, transition: "page", mood: "desert",
        beats: [
          { text: "A master leaves on a long journey.", caption: "A courtyard, a caravan at the gate, three servants waiting.",
            art: { key: "t3w07d1-a", label: "Mon · story — five, two, one", desc: "The master placing different-sized piles of gold bags into the hands of three servants.", shot: "medium", motion: "kenburns-in", chars: [],
              scene: "Close around a wooden table, the master pushes five heavy bags of gold to the first servant, two to the second and a single bag to the third. The first two lean forward eagerly; the third servant hangs back, clutching his one bag nervously." } },
          { text: "Five bags. Two bags. One bag.", caption: "“Look after this for me. I’ll be back.”" },
          { text: "Two get to work. One digs a hole.", caption: "Market and workshop — or a spade under an olive tree.",
            art: { key: "t3w07d1-b", label: "Mon · story + role-play card — burying the gold", desc: "The third servant digging a hole under an olive tree at night by lantern light, glancing over his shoulder.", shot: "low-angle, night", motion: "kenburns-up", chars: [],
              scene: "At night beneath a gnarled olive tree, the third servant crouches over a fresh hole, lowering his bag of gold into it by the light of a small lantern. He glances nervously over his shoulder, his shadow stretched huge across the ground behind him." } },
          { text: "A long time goes by.", caption: "Then the gates swing open. The master is home.", shout: true },
          { text: "“Well done, good and faithful servant!”", caption: "He says it twice. Then the third servant shuffles in…" }
        ],
        narration: "Picture a grand stone courtyard at sunrise. A wealthy master is about to leave on a very long journey, so long that nobody knows exactly how many months he will be away. Beyond the open gate, his camels are loaded and waiting. But before he goes, he calls in his three servants.\n\nRemember, a parable is an earthly story with a heavenly meaning. This one begins with a master who trusts his servants completely.\n\nThe master knows his servants well. He knows what each of them can do. So he sets heavy bags of gold on a wooden table. To the first servant he gives five bags. To the second, two bags. To the third, one bag. ‘Look after this for me,’ he says. ‘I’ll be back.’ Then he strides out through the gate, and the caravan disappears over the hill.\n\nThe first servant doesn’t waste a minute. He grabs his five bags and heads straight for the market. He buys, he sells, he bargains with merchants all day long. Before long, his five bags have turned into ten.\n\nThe second servant is quieter, but he does the same thing. Jesus doesn’t tell us how, so we can imagine: maybe he sets up a little workshop, and his skilful hands go to work. Slowly, his two bags become four.\n\nThen there is the third servant. He looks at his single bag. It is heavy. It is gold. And it isn’t his. What if he loses it? What if something goes wrong? His stomach twists with worry. So that night he creeps out beneath an old olive tree with a spade. He digs a hole, lowers his master’s bag into it, covers it with dirt and pats it flat. He glances over his shoulder. Safe, he thinks. Nobody can touch it now.\n\nA long time goes by. Then one day the gates swing open, and the master is home.\n\nHe calls his servants in. The first servant comes forward with ten bags. ‘Sir, you gave me five. Look, I’ve earned five more!’ And the master’s whole face lights up. ‘Wonderful! You are a good and faithful servant! I left you in charge of only a little, but now I will put you in charge of much more. Come and share in my happiness!’\n\nThe second servant steps up with four bags, and the master says exactly the same words to him.\n\nThen the third servant shuffles in, holding a small, dirty bag. His hands are shaking. What will the master say to him? Let’s find out in the role-play.",
        notes: "About 3 minutes. The story is Matthew 25:14–30. Imagined details: the market and the workshop (Jesus only says the first two servants “earned” more), the olive tree, the master’s caravan and the servant’s worry. Say so. Keep the master warm and kind: tomorrow’s twist depends on it. The ending, where the third servant ends up outside in the dark, comes in the role-play: state it plainly and gently, as a true warning, never as a scare." },

      { type: "question", id: "m-q1", title: "How many bags?", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "How many bags of gold did the three servants each receive?",
        options: ["5, 3 and 1", "5, 2 and 1", "10, 5 and 1", "3, 3 and 3"], answer: 1,
        hint: "Answer: B, five, two and one (Matthew 25:15). Follow-up: ‘What did the first two servants do with their gold?’ (Put it to work and earned the same amount again.) Follow-up 2: ‘What did the third servant do?’ (Dug a hole and hid it.) If silent: re-read the first scripture line slowly and ask them to count along." },

      { type: "question", id: "m-q2", title: "Why different amounts?", minutes: 1.5, level: "think", mode: "pair", seconds: 45, skippable: true,
        text: "The master gave five, two and one, not three equal piles. Why do you think he gave different amounts?",
        hint: "Good answers: the Bible says the man knew what each servant could do (Matthew 25:15); he gave each as much as they could handle; it wasn’t about favourites, it was about knowing his servants well. Follow-up: ‘Would equal piles have been fairer?’ Follow-up 2: ‘What do you think the master wanted from each one?’ If silent: ask who has ever been given a job just the right size for them." },

      { type: "roleplay", id: "m-rp", title: "The Three Servants", minutes: 5, ref: "Matthew 25:14–30",
        art: { key: "t3w07d1-b" },
        imagined: "The master’s and servants’ words from Matthew 25:15–27 are kept close to the CEV, and shortened. The market, the workshop, the servants’ worries and the actions are imagined, to bring the story to life. We leave out one harsh word the master uses, so no student is cast as its target.",
        actions: ["Everyone: tap the desk like clinking gold coins", "Everyone: dig slowly with both hands, then pat the ground"],
        props: ["Optional: three small bags or paper cups as the bags of gold", "Optional: a chair as the master’s big seat"],
        characters: [
          { name: "Narrator", color: "#F2C77B", desc: "Tells the story" },
          { name: "Master", color: "#E0C9A6", desc: "A wealthy, warm, generous master" },
          { name: "First Servant", color: "#7BA7D9", desc: "Gets five bags — bold and busy" },
          { name: "Second Servant", color: "#81C995", desc: "Gets two bags — quiet and skilful" },
          { name: "Third Servant", color: "#E57373", desc: "Gets one bag — nervous and careful" },
          { name: "Everyone", color: "#FFFFFF", desc: "Clinking gold, market noise, digging" }
        ],
        lines: [
          { character: "Narrator", text: "A grand courtyard at sunrise. A wealthy master is leaving on a long journey. His camels wait at the gate.", direction: true },
          { character: "Master", text: "My friends, I’m going away for a long time. I’m trusting you with everything I own.", action: "spread arms warmly" },
          { character: "Narrator", text: "He knew what each servant could do. So he handed out the gold." },
          { character: "Master", text: "Five bags of gold for you. Two for you. And one for you. Look after it for me.", action: "hand out three pretend bags" },
          { character: "Everyone", text: "Clink, clink, clink! Jingle, jingle!", action: "tap desks like gold coins" },
          { character: "Narrator", text: "Then the master left. The camels groaned, the caravan moved off, and the dust settled." },
          { character: "First Servant", text: "Five bags! Off to the market. We’ll buy, sell and bargain all day!", action: "rub hands, march on the spot" },
          { character: "Second Servant", text: "Two bags is a good start. I’ll set up a workshop and get to work.", action: "hammer on the desk" },
          { character: "Everyone", text: "Buy! Sell! Bargain! Hammer! Work, work, work!", action: "busy hands everywhere" },
          { character: "Third Servant", text: "One bag. It’s so heavy. What if I lose it? What if I get it wrong?", action: "hug the bag, look worried" },
          { character: "Third Servant", text: "I’ll bury it. Then it’s safe. Nobody can blame me for losing it.", action: "dig with both hands, glance back" },
          { character: "Everyone", text: "Dig… dig… dig… pat, pat, pat.", action: "slow, quiet digging" },
          { pause: "Freeze! Three servants, three choices. Which servant is most like you right now? Why?", seconds: 20 },
          { character: "Narrator", text: "A long time went by. Then one day the gates opened. The master was home." },
          { character: "Master", text: "Come in, all of you. Tell me what you’ve done with my gold.", action: "sit on a big chair" },
          { character: "First Servant", text: "Sir, you gave me five bags, and look! I’ve earned five more!", action: "proud, arms wide" },
          { character: "Master", text: "Wonderful! You are a good and faithful servant! I left you in charge of only a little.", action: "beaming" },
          { character: "Master", text: "But now I will put you in charge of much more. Come and share in my happiness!" },
          { character: "Second Servant", text: "Sir, you gave me two bags, and I’ve earned two more!", action: "bow" },
          { character: "Master", text: "Wonderful! You are a good and faithful servant! Come and share in my happiness!", action: "exactly the same warm smile" },
          { character: "Narrator", text: "The third servant came in last, holding a small, muddy bag. His hands were shaking." },
          { character: "Third Servant", text: "Sir, I know that you are hard to get along with. I was frightened and went out and hid your money in the ground.", action: "eyes down" },
          { character: "Third Servant", text: "Here is every single coin!", action: "hold out the muddy bag" },
          { character: "Master", text: "You could have at least put my money in the bank, so that I could have earned interest on it.", action: "sad and calm, not shouting" },
          { character: "Narrator", text: "Jesus said that servant ended up outside in the dark, sad and sorry. It is a serious warning." },
          { character: "Everyone", text: "Don’t bury it. Use it!", action: "dig, then throw both hands open" }
        ],
        debrief: [
          { level: "think", text: "The third servant didn’t lose a single coin. Why do you think the master still wasn’t pleased?", hint: "He didn’t use what he was given. He played it safe because he was afraid. Tomorrow we find out what he believed about his master." },
          { level: "look", text: "What did the master say to the first two servants, and was it the same?", hint: "It was exactly the same: “You are a good and faithful servant!” Five bags or two, he welcomed both." }
        ],
        notes: "Jesus’ own words in the master’s lines are CEV Matthew 25:21 and 25:27, and the third servant’s are CEV 25:24–25 (shortened). Play the master warmly for the first two servants, and calm and sad, not shouting, with the third. The ending (outside, in the dark) is stated plainly and gently: choices matter and Jesus is telling us the truth because he cares. Matthew’s full wording is stronger; we do not dwell on it." },

      { type: "question", id: "m-q3", title: "Safe, but not wise", minutes: 1, level: "dig", mode: "discuss", seconds: 40,
        text: "Burying the gold kept it safe. So what do you think the third servant got wrong?",
        hint: "Ideas: he didn’t use what he was given; he let fear decide; safe isn’t the same as faithful; the master wanted his gold to grow, not sit in a hole. Follow-up: ‘Is it ever wise to play it safe?’ Follow-up 2: ‘What do you think the servant believed about his master?’ (Tomorrow’s surprise.) If silent: ask what the first two servants did that the third didn’t." },

      { type: "apply", id: "m-apply", title: "Head · Heart · Hands", minutes: 1,
        head: "God trusts us with good things — and he wants us to use them, not bury them.",
        heart: "God, I don’t want to hide what you’ve given me because I’m afraid.",
        hands: "Today, notice one thing you’re good at, such as drawing, listening or running fast, and use it to help someone at home, at school or at sport.",
        settings: ["home", "school", "sport"],
        notes: "Keep it small and doable. Help students who say “I’m not good at anything” by naming small things: kindness, a sense of humour, patience, being on time." },

      { type: "scene", id: "m-scene", title: "Look after this for me", minutes: 0.5, optional: true,
        art: { key: "t3w07d1-a" },
        boxes: [
          { text: "“Look after this for me. I’ll be back.”", pos: "tl", style: "speech" },
          { text: "Five bags. Two bags. One bag.", pos: "br", style: "caption" }
        ] },

      { type: "verse", id: "m-verse", title: "Memory verse peek", minutes: 1, optional: true, activity: "echo",
        notes: "Introduce Matthew 25:21. Echo each chunk: say it, they say it back. Tell them these are the master’s happy words." },

      { type: "prayer", id: "m-pray", title: "Lead us, deliver us — open hands", minutes: 3, mood: "calm", style: "hands",
        tip: "All term we’re praying the Lord’s Prayer one line at a time. This week: “Keep us from being tempted and protect us from evil” — many people say “lead us not into temptation, but deliver us from evil”. Temptation is a pull towards the wrong thing, and fear can pull us to hide. “Deliver” means rescue.",
        opening: "Make a tight fist, like you’re gripping something you’re scared to lose. Take a slow breath and notice how it feels.",
        phases: [
          { name: "Wow", lead: "Slowly open one hand. God holds everything, and he gives it away freely.",
            prompts: ["God, you are generous. You trusted three servants with a fortune before the master even left.", "God, you are a Master who trusts us, not one who watches us nervously."],
            starter: "Wow, God, you are…", seconds: 35, aloud: "Wow, God, you are generous, and you trust us with so much!" },
          { name: "Sorry", lead: "Look at your hands. Silently tell God about something good you’ve hidden because you were afraid.",
            prompts: ["Sorry for burying what you gave me, like the servant with the spade.", "Sorry for the times I thought you were harsh and didn’t trust you."],
            starter: "God, I’m sorry for…", seconds: 30, aloud: "God, we’re sorry for the times we’ve hidden what you gave us." },
          { name: "Thanks", lead: "Now open both hands, palms up. Thank God for what he has already put in them.",
            prompts: ["Thank you for the things I’m good at, even the small ones.", "Thank you for the people who trust me with jobs and let me try."],
            starter: "Thank you, God, for…", seconds: 30, aloud: "Thank you, God, for the gifts you’ve put in our hands." },
          { name: "Please", lead: "Pray the line together: Keep us from being tempted and protect us from evil.",
            prompts: ["Please rescue me from the fear that makes me hide.", "Please lead me to use one thing I have for someone else today."],
            starter: "Please, God, keep me from…", seconds: 35, aloud: "Please, God, keep us from fear, and lead us to use what you gave us." }
        ],
        closing: "Keep your hands open for a moment, ready to receive and ready to give. Everyone: Amen.",
        notes: "Optional: hold a coin or small object in a closed fist, then open the hand. Explain “tempted” simply: a pull towards the wrong thing. Be gentle: some students are anxious, and being scared is not a failure. The invitation is to bring the fear to God." }
    ] },

  /* ======================= TUESDAY ======================= */
  { label: "Tuesday", theme: "Why Jesus Told It", roleplay: false, mood: "temple",
    learningIntentions: [
      "We are learning where Jesus told this story and who was listening.",
      "We are learning the three surprises: the huge size of the gift, the same “Well done!”, and the servant who was afraid of the wrong master.",
      "I can explain who the master, the servants and the gold stand for."
    ],
    assessment: "Listen for students naming the Mount of Olives and the disciples, explaining that even one bag was a fortune, noticing the identical praise, and saying that the third servant hid his gold because he thought the master was harsh when he was really generous.",
    resources: ["Screen", "Sticky notes or small cards", "Pens"],
    whereToNext: "Tomorrow: a school gala day in modern Aotearoa, where everyone is trusted with twenty dollars and one student hides his in a drawer.",
    slides: [
      { type: "title", id: "t-title", title: "Why Jesus Told It", minutes: 0.5, kicker: "Term 3 · Week 7", sub: "The Three Servants",
        art: { key: "t3w07d2-a" }, notes: "Let the splash play." },

      { type: "hook", id: "t-recap", title: "Recap", minutes: 1, style: "recap",
        text: "Yesterday a master handed out five, two and one bags of gold and went on a long journey.",
        ask: "What did each servant do with the gold, and which servant surprised you most?",
        hint: "The first two put their gold to work and earned the same again; the third buried his. Take two or three answers about who surprised them. ‘Today we find out who was listening when Jesus told this story, and three surprises that would have shocked his friends.’" },

      { type: "scripture", id: "t-scr", title: "Matthew 25:21, 24–25", minutes: 1, ref: "Matthew 25:21, 24–25", version: "CEV",
        lines: [
          { text: "“Wonderful!” his master replied. “You are a good and faithful servant! I left you in charge of only a little, but now I will put you in charge of much more. Come and share in my happiness!”", ref: "Matthew 25:21" },
          { text: "“Sir, I know that you are hard to get along with. You harvest what you don’t plant and gather crops where you haven’t scattered seed.", ref: "Matthew 25:24" },
          { text: "I was frightened and went out and hid your money in the ground. Here is every single coin!”", ref: "Matthew 25:25" }
        ],
        emphasis: ["good and faithful servant", "share in my happiness", "hard to get along with", "frightened"],
        notes: "“Hard to get along with” means harsh and tough. This is the servant’s opinion of his master. Notice that the master never agrees that it is true. Today’s big question: what did the third servant believe about his master?" },

      { type: "story", id: "t-story", title: "Who was listening?", minutes: 3.5, transition: "page", mood: "temple",
        beats: [
          { text: "The last week of Jesus’ life.", caption: "Evening on the Mount of Olives, Jerusalem glowing below.",
            art: { key: "t3w07d2-a", label: "Tue · why he told it — the Mount of Olives", desc: "Jesus sitting with his disciples on the Mount of Olives at sunset, Jerusalem spread out below.", shot: "wide, from behind", motion: "kenburns-right", chars: ["jesus", "peter"],
              scene: "From behind, Jesus sits on a rocky outcrop on the Mount of Olives with Peter and the disciples gathered close, all looking out over the walls and temple of Jerusalem glowing below in the setting sun. Olive trees frame the scene." } },
          { text: "Who was listening?", caption: "Peter, Andrew, James, John — the ones who would soon be left in charge." },
          { text: "Surprise one: even one bag was a fortune.", caption: "About twenty years’ pay in a single bag." },
          { text: "Surprise two: the very same “Well done!”", caption: "Ten bags or four — the master says the same words.",
            art: { key: "t3w07d2-b", label: "Tue · the twist — the master returns", desc: "The master welcoming back two servants with overflowing chests of gold while the third waits behind holding a dirty bag.", shot: "medium wide", motion: "kenburns-in", chars: [],
              scene: "Back in the courtyard, the master spreads his arms in delight as the first two servants open chests overflowing with gold. Behind them, the third servant stands apart, holding up his one dirt-covered bag with a defensive, fearful face." } },
          { text: "Surprise three: afraid of the wrong master.", caption: "He hid it because he thought the master was harsh. He wasn’t.", shout: true }
        ],
        narration: "Let’s zoom out. Where was Jesus when he told this story, and who was listening?\n\nIt is the last week of Jesus’ life. Within days he will be arrested and put on a cross. Jesus has been teaching in Jerusalem all day, and now he is sitting on the Mount of Olives, a hill just outside the city. Below him, the temple glows in the evening sun. With him are his closest friends, the disciples, including Peter, Andrew, James and John. They have asked him a big question: when are you coming back, and what should we do while we wait?\n\nSo Jesus tells them a story about a master who goes away and comes back. The disciples would have caught the meaning straight away. Jesus himself was about to go away, back to his Father, and one day he will return. So what should his friends do in the meantime? Here are three surprises.\n\nSurprise number one: the size of the gift. The word for the money in the story is ‘talent’. One talent was an enormous weight of silver, roughly twenty years of pay for a normal worker. So even the servant with one bag was handed a fortune! Nobody was given scraps. And here is a fun fact: our English word ‘talent’, meaning a gift or skill, comes from this very parable.\n\nSurprise number two: the master’s reaction. To the servant with ten bags and the servant with four bags, he says exactly the same words: ‘You are a good and faithful servant!’ He isn’t comparing them. He wasn’t after the biggest result. He was pleased that both had used what they were given. And look at the reward: more to look after, and a share in the master’s own happiness.\n\nSurprise number three is the biggest. The third servant didn’t steal a thing. He didn’t waste a thing. He handed back every coin. He was the most careful servant in the story! So why was the master disappointed? Listen to what the servant says: ‘Sir, I know that you are hard to get along with… I was frightened.’ He pictured a harsh master who would punish every mistake. So he played it safe, and did nothing. But look at the master we actually met. He is generous. He trusted them with a fortune before he even left. The servant was afraid of a master who didn’t exist, and that fear made him hide the very thing the master wanted him to use.\n\nJesus doesn’t soften the ending. That servant ended up outside, in the dark, sad and sorry. He says it plainly because choices matter, and because he cares. So who is who? The master is Jesus. The servants are his followers. The gold is everything he gives us. And hiding it out of fear is the one choice that costs us the joy.",
        notes: "About 3½ minutes. Matthew 24:3 says the disciples came to Jesus privately on the Mount of Olives; Mark 13:3 names Peter, James, John and Andrew. A talent was about 6,000 denarii, and a denarius was a day’s wage, so roughly twenty years’ pay: say “roughly”. The word “talent” for a skill really does come from this parable. Sensitive: the “outside in the dark” ending. State it plainly, gently and briefly: choices have consequences, and Jesus tells us the truth because he loves us. Never describe it graphically." },

      { type: "dig", id: "t-dig", title: "Who’s who?", minutes: 2,
        prompt: "Jesus told an earthly story with a heavenly meaning. What does each part stand for?",
        columns: ["In the story", "In real life"],
        items: [
          { left: "The master", right: "Jesus, who went back to his Father and will return" },
          { left: "The servants", right: "Jesus’ followers, including us" },
          { left: "The bags of gold", right: "Everything God trusts us with: gifts, time, kindness, his good news" },
          { left: "The long journey", right: "The time between Jesus going and coming back" },
          { left: "The hole in the ground", right: "Hiding what God gave us because we’re afraid" }
        ],
        reveal: "The master was generous. The third servant was afraid of a master who wasn’t there.",
        notes: "Reveal row by row. Say plainly that Jesus is the master, and that being his servant here means being his friend and follower who is trusted with real responsibility. Don’t spend long on the judgment: the heart of the story is trust versus fear." },

      { type: "question", id: "t-q1", title: "What was he?", minutes: 1, level: "look", mode: "finish", seconds: 20,
        text: "Finish the sentence: “I was ________ and went out and hid your money in the ground.”",
        reveal: "“…frightened.” (Matthew 25:25)",
        hint: "Answer: frightened. Follow-up: ‘What did the third servant say his master was like?’ (Hard to get along with, harsh.) Follow-up 2: ‘What did he do with the money?’ (Hid it in the ground.) If silent: point to the last scripture line." },

      { type: "question", id: "t-q2", title: "Fear’s picture of the master", minutes: 1.5, level: "think", mode: "silent", seconds: 40,
        text: "The third servant lost nothing, but the master was disappointed. Why do you think what he believed about his master mattered so much?",
        hint: "Good answers: if you think someone is harsh, you’re too scared to try; fear made him hide instead of using the gift; his picture of the master was wrong, because the master had trusted him with a fortune; what we believe about God changes what we do. Follow-up: ‘What did the master actually do that showed he was generous?’ Follow-up 2: ‘How could the servant have found out the truth?’ If silent: give 20 seconds of quiet thinking, then ask for one idea." },

      { type: "question", id: "t-q3", title: "Is playing it safe wise?", minutes: 1.5, level: "dig", mode: "vote", seconds: 30, skippable: true,
        text: "Agree or disagree: “Playing it safe is always the wisest choice.”",
        options: ["Agree", "Disagree"],
        hint: "Disagree for this story: the safe choice was the one that wasted the gold, and the master wanted it used. But careful thinking isn’t the problem; fear is. Follow-up: ‘When is being careful wise, and when is it just fear?’ Follow-up 2: ‘What would trusting the master have looked like?’ If silent: ask what the first two servants risked, and what they got." },

      { type: "apply", id: "t-apply", title: "Head · Heart · Hands", minutes: 2,
        head: "The master is generous and the gold is a gift, so we can use what God gave us without being afraid.",
        heart: "Jesus, help me believe that you are good and kind, not harsh.",
        hands: "On a sticky note, write one thing you’re good at, or one thing you have, such as time, a skill or kindness. Beside it, write one person it could help. Keep it for Thursday.",
        settings: ["home", "class", "sport"],
        notes: "Give out sticky notes. Help students who say “I’m not good at anything”: gifts include listening, cheering people up, being patient, being fast, being tidy. This feeds into Thursday’s challenge." },

      { type: "scene", id: "t-scene", title: "The master comes home", minutes: 1, optional: true,
        art: { key: "t3w07d2-b" },
        boxes: [
          { text: "The same “Well done!” for ten bags and for four.", pos: "tl", style: "caption" },
          { text: "He was afraid of a master who wasn’t there.", pos: "br", style: "shout" }
        ] },

      { type: "verse", id: "t-verse", title: "Build the verse", minutes: 1, activity: "build",
        notes: "Build Matthew 25:21 chunk by chunk, like stacking bags of gold: each chunk a bag, until the verse is built." },

      { type: "prayer", id: "t-pray", title: "Lead us, deliver us — write a note", minutes: 3, mood: "calm", style: "write",
        tip: "Write your prayer as a short note to God. Because God is generous and not harsh, you can be completely honest: say what you’re afraid of, ask for courage, and thank him for the gifts you’ve found.",
        opening: "Take your pen. At the top of your paper or sticky note, write: “Keep us from being tempted and protect us from evil.”",
        phases: [
          { name: "Wow", lead: "Write one line about who God is.",
            prompts: ["God, you are generous. You give before you ask for anything.", "God, you are kind, not harsh. You are not the master the third servant feared."],
            starter: "God, you are…", seconds: 35, aloud: "God, you are generous and kind, not harsh!" },
          { name: "Sorry", lead: "Silently, write one thing you’ve hidden or avoided because you were scared to get it wrong.",
            prompts: ["Sorry for thinking you’re hard on me when you are kind.", "Sorry for hiding what you gave me because I was scared to try."],
            starter: "God, I’m sorry for…", seconds: 25, aloud: "God, we’re sorry for hiding what you gave us." },
          { name: "Thanks", lead: "Write three gifts God has given you: things you’re good at, or things you have.",
            prompts: ["Thank you for the gifts I’ve been given, big and small.", "Thank you for trusting me with them."],
            starter: "Thank you for…", seconds: 40, aloud: "Thank you, God, for the gifts you trusted us with." },
          { name: "Please", lead: "Write one fear you want God to rescue you from, and one person you could help.",
            prompts: ["Please rescue me from the fear that makes me hide.", "Please lead me to one person I can help with my gift this week."],
            starter: "Please, God, keep me from…", seconds: 35, aloud: "Please, God, keep us from fear, and lead us to help someone." }
        ],
        closing: "Fold your note and keep it in your pocket today. Amen!",
        notes: "Students keep their notes private. Some students are anxious about failing. Reassure them that being nervous is normal, and that the master in the story wanted his servants to try, not to be perfect." }
    ] },

  /* ======================= WEDNESDAY ======================= */
  { label: "Wednesday", theme: "The Gala Day Twenty", roleplay: true, mood: "dawn",
    learningIntentions: [
      "We are learning how Jesus’ story of the three servants looks in a modern New Zealand school gala.",
      "We are learning why fear can make us hide the good things we’ve been trusted with.",
      "I can name one thing I could grow or share instead of hiding."
    ],
    assessment: "Listen for students linking Aroha and Sione to the first two servants and Jun to the third, explaining that Jun hid his twenty dollars because he was afraid, and noticing that Mr Walker is kind, not harsh.",
    resources: ["Screen", "Optional: three envelopes with a pretend twenty-dollar note", "Optional: a chair for a drawer-sliding action"],
    whereToNext: "Tomorrow: what the story shows about God, our Generous Master, and your challenge: name a gift and use it for someone else.",
    slides: [
      { type: "title", id: "w-title", title: "The Gala Day Twenty", minutes: 0.5, kicker: "Term 3 · Week 7", sub: "The Three Servants",
        art: { key: "t3w07d3-a" }, notes: "Let the splash play. Today’s story is a retelling in modern Aotearoa; Jesus’ parable is the same, with new servants." },

      { type: "hook", id: "w-hook", title: "Scared to get it wrong", minutes: 1,
        text: "Have you ever been trusted with something important, such as looking after a little cousin or a friend’s pet, and been scared of getting it wrong?",
        ask: "What did you do? Did the fear help or hurt?",
        hint: "Take two or three stories. Recap: ‘Yesterday we learned the third servant wasn’t lazy or a thief. He was afraid of a master who was really generous. Today the same story happens at a school gala.’ Notice if anyone mentions hiding or avoiding the job; that is the third servant’s choice." },

      { type: "scripture", id: "w-scr", title: "Matthew 25:15, 21, 25", minutes: 1, ref: "Matthew 25:15, 21, 25", version: "CEV",
        lines: [
          { text: "The man knew what each servant could do.", ref: "Matthew 25:15" },
          { text: "“Wonderful!” his master replied. “You are a good and faithful servant! I left you in charge of only a little, but now I will put you in charge of much more. Come and share in my happiness!”", ref: "Matthew 25:21" },
          { text: "I was frightened and went out and hid your money in the ground.", ref: "Matthew 25:25" }
        ],
        emphasis: ["knew what each servant could do", "good and faithful servant", "frightened"],
        notes: "Today’s story is not in the Bible. It is Jesus’ parable retold with new servants. In Jesus’ story the amounts differ because the master knew each servant. Mr Walker gives everyone twenty dollars to keep the story simple; the point is the same." },

      { type: "story", id: "w-story", title: "The gala day twenty", minutes: 3, transition: "page", mood: "dawn",
        beats: [
          { text: "Gala day: twenty dollars each.", caption: "Mr Walker: “Grow it for the library. Count-up at half past two.”",
            art: { key: "t3w07d3-a", label: "Wed · retelling — gala day", desc: "A busy school gala: Aroha selling homemade fudge at a stall and Sione running a car-wash with a bucket and sponge.", shot: "wide, busy", motion: "kenburns-left", chars: ["aroha", "sione"],
              setting: "Modern-day Aotearoa New Zealand setting: a school gala day on the field and in the hall, with trestle-table stalls, bunting, a bouncy castle and families. Kiwi kids of many backgrounds drawn naturally and respectfully, in everyday clothes, school uniforms or sports gear.",
              scene: "A busy school gala on the field. At a trestle-table stall under bunting, Aroha hands out paper bags of homemade fudge to a queue of families, while nearby Sione, soaked and grinning, scrubs a car with a big sponge and a bucket of suds." } },
          { text: "Aroha bakes. Sione scrubs.", caption: "Nan’s fudge. Super Suds car wash. Queues everywhere." },
          { text: "And Jun? He’s not at the gala.", caption: "What if he lost it? What would Mr Walker say?",
            art: { key: "t3w07d3-b", label: "Wed · retelling — hidden in the drawer", desc: "Jun alone in the empty classroom peeking at an untouched envelope in his desk drawer while the gala goes on outside the window.", shot: "medium, interior", motion: "kenburns-in", chars: ["jun"],
              setting: "Modern-day Aotearoa New Zealand setting: a suburban primary school with classroom blocks, a covered walkway, playing fields, native trees and harakeke (flax) bushes. Kiwi kids of many backgrounds drawn naturally and respectfully, in everyday clothes, school uniforms or sports gear.",
              scene: "Inside an empty classroom, Jun sits at his desk and slides open the drawer to peek at a sealed envelope, still untouched. Through the big window behind him, the gala buzzes with stalls, balloons and running children in bright sunlight." } },
          { text: "Half past two. Count-up time.", caption: "Aroha: $85. Sione: $64. Jun: one crumpled envelope." },
          { text: "“I was scared you’d be mad.”", caption: "Mr Walker: “I’d never be mad if you tried and lost it.”", shout: true }
        ],
        narration: "It was gala day at Room 14’s school, and the whole field looked like a festival. Bunting flapped between the trees. A bouncy castle wobbled on the grass. Stalls lined the walkway, and the smell of sausages floated across the playground.\n\nBut first, Mr Walker gathered his class in a circle, holding a stack of small white envelopes. ‘Today I’m trusting you with something,’ he said. ‘Each of you gets twenty dollars to start with. It’s yours to use for the school library fund, however you like. Grow it as much as you can. At half past two, we’ll meet in the hall to see what you’ve done.’ Then he grinned. ‘I can’t wait to see what you come up with.’\n\nAroha knew straight away. She loves baking, and her nan has a famous fudge recipe. She spent the twenty dollars on butter, condensed milk and chocolate, and by ten o’clock she had a stall full of paper bags tied with ribbon. Families queued all the way down the walkway.\n\nSione is no baker. But he is big, strong, and never scared of getting wet. He bought sponges, buckets and car-wash soap, and set up a sign that said SUPER SUDS at the edge of the car park. By eleven o’clock he was soaked from head to toe, grinning, and scrubbing every dad’s ute that rolled in.\n\nAnd Jun? Jun looked at his envelope for a long time. He was good at heaps of things: fixing bikes, telling jokes, riding faster than anyone. But a little voice in his head kept going. What if I lose it? What if I spend it and nobody buys anything? What if Mr Walker is cross? Jun had lost a library book once, and he still remembered how awful that felt. So he did what felt safest. He slipped back to the empty classroom, slid open his drawer, and tucked the envelope right at the back. ‘Safe,’ he whispered. Then he sat by the window and watched everyone else have the best day of the term.\n\nAt half past two, the class gathered in the hall. ‘Aroha?’ said Mr Walker. ‘Eighty-five dollars!’ The class cheered. ‘Sione?’ ‘Sixty-four!’ Mr Walker shook their hands. ‘Well done! You used what I trusted you with, and look how it grew.’\n\nThen Jun came in slowly, holding out one crumpled envelope. ‘It’s still twenty dollars,’ he mumbled. ‘I didn’t lose it. I was scared you’d be mad.’\n\nMr Walker looked at him kindly. ‘Jun, I’d never be mad if you tried and lost it. I’m only sad that your twenty dollars did nothing.’",
        notes: "About 3 minutes. Mr Walker, Aroha, Sione and Jun are imagined, as are the figures and Jun’s lost library book. Portray Jun with warmth: he’s capable and funny, and his fear has a reason. He is not the “bad kid”. Mr Walker must be clearly kind: the surprise of the parable is that the master wasn’t the harsh man the servant imagined. A sausage sizzle and a gala are common New Zealand school fundraisers." },

      { type: "question", id: "w-q1", title: "Where’s the twenty?", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "Where did Jun put his twenty dollars?",
        options: ["In the bouncy castle ticket box", "At the back of his desk drawer", "In his bike helmet", "Back in Mr Walker’s hand"], answer: 1,
        hint: "Answer: B, at the back of his desk drawer. Follow-up: ‘What did Aroha and Sione do with their twenty dollars?’ (Aroha made fudge; Sione ran a car wash.) Follow-up 2: ‘Which servant in Jesus’ story is Jun like?’ (The third, who buried his bag.) If silent: re-read the beat about Jun in the classroom." },

      { type: "roleplay", id: "w-rp", title: "The Gala Day Twenty", minutes: 5, ref: "Matthew 25:14–30 (retold)",
        art: { key: "t3w07d3-a" },
        imagined: "This is a modern retelling of Jesus’ parable, set in New Zealand. All the characters and their words are imagined; only the idea (a trusted gift used or hidden, and a kind master) comes from Matthew 25:14–30.",
        actions: ["Everyone: scrub, stir and call out like market sellers", "Everyone: cheer and clap for “Well done!”"],
        props: ["Optional: three envelopes", "Optional: a sponge or tea towel for the car wash"],
        characters: [
          { name: "Narrator", color: "#F2C77B", desc: "Tells the story" },
          { name: "Mr Walker", color: "#A1887F", desc: "The teacher: warm, funny and fair" },
          { name: "Aroha", color: "#7BA7D9", desc: "Loves baking, quick to act" },
          { name: "Sione", color: "#E57373", desc: "Big-hearted, loud, loves a challenge" },
          { name: "Jun", color: "#81C995", desc: "Cheeky and clever, but scared of getting it wrong" },
          { name: "Everyone", color: "#FFFFFF", desc: "The class: stalls, cheers and drawer sounds" }
        ],
        lines: [
          { character: "Narrator", text: "Gala day at school. Bunting flaps, the bouncy castle wobbles and the sausage sizzle smells amazing. Room 14 stands in a circle.", direction: true },
          { character: "Mr Walker", text: "I’m trusting each of you with twenty dollars. Grow it for the library. We count up at half past two.", action: "hand out pretend envelopes" },
          { character: "Sione", text: "Twenty bucks? Easy! I’m running a car wash. Super Suds, here I come!", action: "flex arms" },
          { character: "Aroha", text: "I’m making Nan’s fudge. Butter, chocolate, condensed milk. Every bag will sell itself.", action: "stir an imaginary bowl" },
          { character: "Jun", text: "Twenty bucks! I could buy heaps… but what if I lose it? What if nobody buys anything?", action: "clutch the envelope" },
          { character: "Everyone", text: "Scrub, scrub! Stir, stir! Sell, sell!", action: "scrub, stir and call out like market sellers" },
          { character: "Aroha", text: "Fresh fudge! Two dollars a bag! Get it while it’s warm!", action: "hold up a bag" },
          { character: "Sione", text: "Super Suds car wash! Dads, your ute needs a bath!", action: "scrub a pretend ute, soggy" },
          { character: "Narrator", text: "Meanwhile, Jun slipped back to the empty classroom with his envelope still sealed." },
          { character: "Jun", text: "Mr Walker trusts me. But I lost a library book once, and I felt terrible.", action: "kick the floor" },
          { character: "Jun", text: "I’ll keep it safe. Back of the drawer. Then nobody can say I lost it.", action: "slide the envelope into a pretend drawer" },
          { character: "Everyone", text: "Creeeak… THUD.", action: "drawer closing" },
          { pause: "Freeze! Aroha and Sione are busy. Jun’s money is in a drawer. What do you think Mr Walker will say at half past two?", seconds: 20 },
          { character: "Narrator", text: "Half past two. The class gathers in the hall. Mr Walker has a big smile and a calculator." },
          { character: "Mr Walker", text: "Aroha first. What did your twenty dollars turn into?" },
          { character: "Aroha", text: "Eighty-five dollars, sir! Nan’s fudge sold out!", action: "hold up pretend cash" },
          { character: "Sione", text: "Sixty-four dollars! And I’m soaked right through. I’ll never be dry again.", action: "shake like a wet dog" },
          { character: "Mr Walker", text: "Well done, both of you! You used what I trusted you with, and look how it grew." },
          { character: "Everyone", text: "Well done!", action: "cheer and clap" },
          { character: "Narrator", text: "Then Jun walked in slowly. He held out one crumpled envelope." },
          { character: "Jun", text: "It’s still twenty dollars. I didn’t lose it. I was scared you’d be mad.", action: "eyes down" },
          { character: "Mr Walker", text: "Mad? Jun, I’m a teacher, not a dragon! I’d never be mad if you tried and lost it.", action: "kind smile" },
          { character: "Mr Walker", text: "I’m just sad it did nothing. Twenty dollars in a drawer can’t help anybody, and you missed the gala." },
          { character: "Jun", text: "Sorry, sir. I thought you’d be really strict about money.", action: "shrug" },
          { character: "Mr Walker", text: "I gave it to you because I trusted you, Jun. I still do." },
          { character: "Aroha", text: "Come on, Jun. Help us count the takings. Next year, we’re doing a stall together.", action: "wave him over" },
          { character: "Everyone", text: "Don’t hide it. Use it!", action: "open both hands wide" }
        ],
        debrief: [
          { level: "think", text: "Why did Jun hide his twenty dollars? What was he really afraid of?", hint: "Losing it, getting it wrong, and Mr Walker being cross. He pictured a strict teacher. Like the third servant, he was afraid of a master who wasn’t really like that." },
          { level: "look", text: "How was Mr Walker different from the teacher Jun imagined?", hint: "He was kind, not harsh. He said he would never have been mad if Jun had tried and lost it, and he still trusted him." }
        ],
        notes: "Imagined retelling. Play Jun with warmth and a bit of cheek, not as a failure. Mr Walker must be clearly kind: that is the surprise. The “missed the gala” line is the gentle consequence: hiding what we’re trusted with costs us the joy. Keep the sound effects short, and stop them quickly when Mr Walker speaks." },

      { type: "question", id: "w-q2", title: "Where did the fear come from?", minutes: 1.5, level: "think", mode: "pair", seconds: 45,
        text: "Mr Walker was kind, but Jun was scared of him. Where do you think Jun’s fear came from?",
        hint: "Good answers: he lost a library book once and remembered the bad feeling; he imagined the worst; fear can make someone seem harsher than they really are; he didn’t know how Mr Walker would respond. Follow-up: ‘Has fear ever made you picture someone as harsher than they were?’ Follow-up 2: ‘How could Jun have found out the truth?’ (He could have asked or tried.) If silent: ask what Jun might have felt sitting by the window." },

      { type: "question", id: "w-q3", title: "How do you picture God?", minutes: 1, level: "dig", mode: "write", seconds: 40, skippable: true,
        text: "On your whiteboard, write one word for how a scared person might picture God. Then write one word from Jesus’ story that shows what God is really like.",
        hint: "Scared words: strict, angry, grumpy, watching, harsh. True words from the story: generous, trusting, kind, happy, welcoming. Follow-up: ‘What is the difference between a master who watches for mistakes and one who says “Well done”?’ Follow-up 2: ‘What do you think the third servant would have done if he’d known the master well?’ If silent: share two words yourself and ask which feels closer to Jesus’ master." },

      { type: "apply", id: "w-apply", title: "Head · Heart · Hands", minutes: 1,
        head: "Fear makes us hide what we’ve been given; trust sets it free.",
        heart: "God, help me believe you’re kind, so I’m not scared to try.",
        hands: "Pick one thing you’ve been holding back because you’re scared of getting it wrong, such as joining in at sport, sharing a drawing or offering to help, and give it a go before Friday.",
        settings: ["school", "sport", "home"],
        notes: "Keep it small and specific. This builds towards Thursday’s challenge." },

      { type: "scene", id: "w-scene", title: "Safe in the drawer", minutes: 0.5, optional: true,
        art: { key: "t3w07d3-b" },
        boxes: [
          { text: "“Safe. Nobody can say I lost it.”", pos: "tl", style: "speech" },
          { text: "Everyone else was having the best day of the term.", pos: "br", style: "caption" }
        ] },

      { type: "verse", id: "w-verse", title: "Verse with actions", minutes: 1, optional: true, activity: "actions",
        notes: "Actions for Matthew 25:21: point to yourself, thumbs up, hands close together, hands wide, arms up high, open arms." },

      { type: "prayer", id: "w-pray", title: "Lead us, deliver us — in pairs", minutes: 3, mood: "calm", style: "pairs",
        tip: "Pray with a partner. Tell your partner one thing you’re nervous to try. Then each pray one sentence for the other: “Keep (name) from being afraid, and lead them.” That’s how we pray this line for each other.",
        opening: "Turn to a partner. Quietly share one thing you’re a bit nervous to try. It can be small.",
        phases: [
          { name: "Wow", lead: "Take turns finishing the sentence about God.",
            prompts: ["God, you are kind, like Mr Walker, only so much more.", "God, you are generous. You trust us with so much."],
            starter: "Wow, God, you are…", seconds: 30, aloud: "Wow, God, you are kind and generous!" },
          { name: "Sorry", lead: "Silently, think of a time fear made you hide something good.",
            prompts: ["Sorry for hiding things because I was scared you’d be cross.", "Sorry for not trusting that you are kind."],
            starter: "God, I’m sorry for…", seconds: 25, aloud: "God, we’re sorry for the times we’ve hidden the good things you gave us." },
          { name: "Thanks", lead: "Thank God for the people who say “Well done” and who still trust us when we get it wrong.",
            prompts: ["Thank you for teachers and coaches who encourage us.", "Thank you for people like Mr Walker who give us a second chance."],
            starter: "Thank you, God, for…", seconds: 30, aloud: "Thank you, God, for the people who trust and encourage us." },
          { name: "Please", lead: "Pray one sentence for your partner’s nervous thing.",
            prompts: ["Please keep (partner’s name) from being afraid to try.", "Please lead us both to use what you gave us, for others."],
            starter: "Please, God, keep…", seconds: 40, aloud: "Please, God, keep us from fear, and lead us to use what you gave us." }
        ],
        closing: "Thank your partner for praying for you. Everyone: Amen.",
        notes: "Model it first with a student. If a partner’s nervous thing is private or sensitive, they can say “something I’m a bit scared of” and leave it there." }
    ] },

  /* ======================= THURSDAY ======================= */
  { label: "Thursday", theme: "Well Done!", roleplay: false, mood: "calm",
    learningIntentions: [
      "We are learning what the three servants show us about God and about Jesus.",
      "We are learning to use our gifts out of trust, not fear.",
      "I can name one gift God gave me and plan how to use it for someone else."
    ],
    assessment: "Students can retell the parable in order, say that God is a generous Master who says “Well done!”, explain that we use our gifts out of trust and not fear, name one gift and one person to help with it, and recite Matthew 25:21.",
    resources: ["Screen", "Take-home challenge cards", "Sticky notes from Tuesday"],
    whereToNext: "Next week: The Ten Bridesmaids — ten friends wait for the groom at midnight, and five of them run out of oil.",
    slides: [
      { type: "title", id: "th-title", title: "Well Done!", minutes: 0.5, kicker: "Term 3 · Week 7", sub: "The Three Servants",
        art: { key: "t3w07d4-a" }, notes: "Let the splash play." },

      { type: "review", id: "th-review", title: "Put it in order", minutes: 2.5, format: "order",
        prompt: "Put the parable in order!",
        items: ["The master hands out five, two and one bags", "The master goes on a long journey", "Two servants put their gold to work", "One servant buries his bag", "The master comes home", "“Well done!” for the faithful servants", "The frightened servant hands back one bag"],
        hint: "Students call out the next step; click to place it. Point out the order: the master trusted first, and the praise came before the problem.",
        notes: "Cards start scrambled." },

      { type: "scripture", id: "th-scr", title: "Matthew 25:21 · 6:13", minutes: 1, ref: "Matthew 25:21; 6:13", version: "CEV",
        lines: [
          { text: "“Wonderful!” his master replied. “You are a good and faithful servant! I left you in charge of only a little, but now I will put you in charge of much more. Come and share in my happiness!”", ref: "Matthew 25:21" },
          { text: "Keep us from being tempted and protect us from evil.", ref: "Matthew 6:13" }
        ],
        emphasis: ["good and faithful servant", "share in my happiness", "protect us from evil"],
        notes: "Matthew 6:13 is the line of the Lord’s Prayer we pray this week. The older words are “lead us not into temptation, but deliver us from evil”." },

      { type: "story", id: "th-story", title: "A generous Master", minutes: 2, transition: "page", mood: "calm",
        beats: [
          { text: "God is a generous Master.", caption: "He trusts us with real gifts, before we’ve done anything.",
            art: { key: "t3w07d4-a", label: "Thu · what it shows — 'Well done!'", desc: "The master with his hand on a faithful servant's shoulder, welcoming him into a joyful feast.", shot: "medium, warm", motion: "kenburns-up", chars: [],
              scene: "The master rests a hand on the faithful servant's shoulder and leads him toward the open doors of a lamp-lit banquet hall, where tables are spread and musicians play. The servant's face shows stunned joy, and light spills out over them both." } },
          { text: "He loves to say “Well done!”", caption: "Ten bags or four — the same joy." },
          { text: "Trust, not fear.", caption: "Jesus gave everything for us, and trusts us again, even after we hide." },
          { text: "Use it for someone else.", caption: "Aroha’s ukulele. Jun’s bike repairs. Your gift?",
            art: { key: "t3w07d4-b", label: "Thu · live it — use your gift", desc: "Aroha playing a ukulele for a group of younger children sitting on a mat, all singing.", shot: "medium wide", motion: "kenburns-in", chars: ["aroha", "mia"],
              setting: "Modern-day Aotearoa New Zealand setting: a suburban primary school with classroom blocks, a covered walkway, playing fields, native trees and harakeke (flax) bushes. Kiwi kids of many backgrounds drawn naturally and respectfully, in everyday clothes, school uniforms or sports gear.",
              scene: "In a bright junior classroom, Aroha sits on a low chair playing a ukulele while a circle of five-year-olds on the mat sing and clap along. Mia kneels beside them holding up a big hand-drawn picture, and sunlight streams through the windows." } }
        ],
        narration: "So what does Jesus’ story show us about God? Three things.\n\nFirst, God is a generous Master. Before the master left, he gave a fortune to all three servants, even the one with the smallest share. God does the same. He gave you life, a mind, a body and gifts: maybe music, maths, kindness, speed or patience. A gift isn’t a test. It’s a present with a purpose.\n\nSecond, God loves to say ‘Well done!’ He said the same words to ten bags and to four. He isn’t comparing you with the person next to you. He’s looking for someone who trusts him enough to use what they’ve been given.\n\nThird, we use our gifts out of trust, not fear. The third servant pictured a harsh master, so he hid. But Jesus shows us a very different Master. He is the one who took everything his Father gave him, even his own life, and gave it away for us. And when we hide, Jesus doesn’t throw us out. Peter was so frightened one night that he said he didn’t know Jesus. But after Jesus rose again, he found Peter, forgave him, and trusted him with his friends again. Peter later wrote that each person has a gift to use to serve others.\n\nSo what does that look like? Aroha loves music. This week she took her ukulele to the juniors’ classroom and played for the five-year-olds, while her friend Mia held up a big picture to go with the song. Jun found out that his gift is fixing bikes. He spent his lunchtime fixing a Year 1 boy’s chain. Sione spent his lunchtime helping little kids learn to catch a rugby ball. Nobody had to be asked twice.\n\nSo what’s your gift? And who could it help?",
        notes: "About 2 minutes. Peter’s denial and restoration: Luke 22:54–62 and John 21:15–17 (paraphrased). 1 Peter 4:10 is paraphrased. The modern kids’ examples (Aroha’s ukulele, Mia’s picture, Jun’s bike repair and Sione’s rugby help) are imagined. Keep the cross simple and reverent: Jesus gave everything for us, and rose again." },

      { type: "question", id: "th-q1", title: "What did the master say?", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "What did the master say to the servants who used their gold?",
        options: ["“Wonderful! You are a good and faithful servant!”", "“You were lucky.”", "“Next time, bury it.”", "“You owe me more.”"], answer: 0,
        hint: "Answer: A (Matthew 25:21). Follow-up: ‘What was his reward for them?’ (More to look after, and a share in his happiness.) Follow-up 2: ‘Did he say it to both of them?’ (Yes, the same words.) If silent: re-read the first scripture line together." },

      { type: "question", id: "th-q2", title: "A generous God", minutes: 1.5, level: "think", mode: "pair", seconds: 45,
        text: "The third servant thought his master was harsh. What has Jesus done that shows God is generous and not harsh?",
        hint: "Good answers: Jesus gave his whole life for us; he forgives us and trusts us again, like Peter; God gives gifts before we’ve done anything; he welcomes people who come to him. Follow-up: ‘What did the master give the servants before he left?’ Follow-up 2: ‘How could knowing God is generous change what you do?’ If silent: ask what Jesus did for Peter after Peter was afraid." },

      { type: "recap", id: "th-recap", title: "This week’s big idea", minutes: 1.5,
        points: [
          "God is a generous Master: he trusts us with real gifts before we’ve done anything.",
          "He loves to say “Well done!” to anyone who uses what they were given, big or small.",
          "We use our gifts out of trust, not fear, and Jesus, who gave everything for us, welcomes us back when we’ve hidden."
        ],
        notes: "Then the Big Idea stamps in." },

      { type: "question", id: "th-q3", title: "Do I have a gift?", minutes: 1.5, level: "dig", mode: "vote", seconds: 30, skippable: true,
        text: "Agree or disagree: “I don’t have any gift worth using.”",
        options: ["Agree", "Disagree"],
        hint: "Disagree: even the servant with one bag had a fortune; gifts include kindness, listening, cheering people up, being fast, being patient, drawing, music; if you’re not sure, ask a friend or teacher what they notice. Follow-up: ‘What do people thank you for?’ Follow-up 2: ‘Who could you ask what your gift is?’ If silent: share one gift you notice in the class, and invite students to name one in a neighbour." },

      { type: "challenge", id: "th-chal", title: "This Week’s Challenge", minutes: 2,
        text: "Name one gift God gave you and use it for someone else, twice this week.",
        why: "“You are a good and faithful servant! I left you in charge of only a little, but now I will put you in charge of much more. Come and share in my happiness!” — Matthew 25:21",
        head: "God trusts me with gifts, and he wants me to use them for others.", heart: "God, I trust you. Help me not to hide what you gave me.", hands: "Name one gift. Use it twice this week for someone else, at home, at school or at sport.",
        takeHome: true,
        notes: "Use the sticky notes from Tuesday: the gift and the person it could help. Ideas: music, drawing, fixing, cheering people up, helping a younger child, being patient. Next Monday’s check-in will ask about this." },

      { type: "verse", id: "th-verse", title: "Memory verse: fade-out", minutes: 1.5, activity: "fade",
        notes: "Fade out Matthew 25:21. Bonus: say Matthew 7:24 from Week 5." },

      { type: "scene", id: "th-scene", title: "Trust it, use it, share it", minutes: 1, optional: true,
        art: { key: "t3w07-cover" },
        boxes: [
          { text: "Trust the Master. Use the gift.", pos: "tl", style: "shout" },
          { text: "“Come and share in my happiness!”", pos: "br", style: "caption" }
        ] },

      { type: "prayer", id: "th-pray", title: "Lead us, deliver us — stand up", minutes: 3, mood: "calm", style: "stand",
        tip: "Pray the whole line together: “Keep us from being tempted and protect us from evil.” Fear can tempt us to hide our gifts. Standing is a way of saying, “God, I’m ready to step out.”",
        opening: "Stand up tall with your feet planted. Take a slow breath in and out. We’ll pray standing, and take one step forward at the end.",
        phases: [
          { name: "Wow", lead: "Stand tall. Say who God is.",
            prompts: ["God, you are a Generous Master. You give before we do anything.", "God, you are good and not harsh. You say “Well done” to those who try."],
            starter: "God, you are…", seconds: 35, aloud: "God, you are a Generous Master, and you love to say “Well done”!" },
          { name: "Sorry", lead: "Bow your head. Silently tell God about a gift you’ve hidden because you were afraid.",
            prompts: ["Sorry for burying what you gave me.", "Sorry for thinking you’d be angry if I got it wrong."],
            starter: "God, I’m sorry for…", seconds: 25, aloud: "God, we’re sorry for hiding what you gave us. Thank you for trusting us again." },
          { name: "Thanks", lead: "Lift your hands. Call out one gift God gave you.",
            prompts: ["Thank you for my gift. Name it out loud or in your heart.", "Thank you for Jesus, who gave everything for us."],
            starter: "Thank you, God, for…", seconds: 35, aloud: "Thank you, God, for the gifts you gave us, and for Jesus." },
          { name: "Please", lead: "Pray the line together, then ask for help with this week’s challenge.",
            prompts: ["Keep us from being tempted and protect us from evil.", "Please help me use my gift twice this week for someone else."],
            starter: "Please, God, help…", seconds: 40, aloud: "Keep us from fear, and help us use our gifts for others." }
        ],
        closing: "Take one step forward, ready to use your gift. Everyone: Amen!",
        notes: "Celebrate the whole-class voice. Anyone who can’t stand can pray sitting up tall." }
    ] }
  ]
};
