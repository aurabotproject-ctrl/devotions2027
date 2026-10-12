/* Morninglight 2027 — Term 3 Week 4: The Lost Son (Luke 15:11–32). Scripture: CEV. */
window.DEVOTIONS = window.DEVOTIONS || {};
window.DEVOTIONS["Term 3"] = window.DEVOTIONS["Term 3"] || {};
window.DEVOTIONS["Term 3"]["Week 4"] = {
  lessonTitle: "The Lost Son",
  passage: "Luke 15:11–32",
  bigIdea: "The Father runs to welcome us home — and both sons needed his grace.",
  godIs: "Welcoming Father",
  memoryVerse: { ref: "Luke 15:24", text: "This son of mine was dead, but now he is alive! He was lost, but now he has been found.", version: "CEV",
    chunks: ["This son of mine", "was dead,", "but now he is alive!", "He was lost,", "but now", "he has been found."],
    actions: ["Hand on heart — my child", "Droop low, arms hanging", "Spring up, arms high — alive!", "Shade your eyes, searching", "Clap once — but now!", "Open arms wide — found!"] },
  prayerFocus: { skill: "Your will be done", tip: "Jesus taught us to pray, “Let your will be done on earth as it is in heaven” (Matthew 6:10). It means: God, I trust your way more than my own. The younger son wanted his own way first — and then found that the Father’s way was home." },
  mood: "dawn",
  cover: "t3w04-cover",
  characters: ["jesus", "jun"],
  coverArt: { key: "t3w04-cover", label: "Week cover", desc: "A father running down a long dusty road with arms wide toward his ragged son far away.", shot: "epic wide",
    scene: "A long dusty road leads to a farmhouse on a hill. An older father runs down it, robe hitched up, arms flung wide, toward a ragged young man far away who has stopped in his tracks. The late sun streams down the road between them.", chars: [] },
  comicArt: { key: "t3w04-comic", label: "Comic page (week opener)", format: "portrait", desc: "Six-panel comic page of the lost son.",
    panels: "Six panels. Panel 1 (wide): a young man striding away from a farmhouse with a money bag, his father watching. Panel 2 (small): coins tumbling from an emptying bag. Panel 3 (tall): the son sitting hungry in a pig pen. Panel 4 (small): the son's face as he decides to go home. Panel 5 (wide): the father running down the road with arms wide. Panel 6 (wide): the older brother outside in the dark, the bright party behind him.", chars: [] },

  days: [

  /* ======================= MONDAY ======================= */
  { label: "Monday", theme: "The Son Who Left", roleplay: true, mood: "desert",
    learningIntentions: [
      "We are learning how the younger son in Jesus’ story left home and lost everything.",
      "We are learning what the father did when his son came home.",
      "I can explain what it means that the son “came to his senses”."
    ],
    assessment: "Listen for students retelling the story in order (asking for the money, wasting it, the pigs, deciding to go home, the running father) and noticing that the father welcomed his son before he finished his speech.",
    resources: ["Screen", "Optional: an empty drawstring bag for the son’s money", "Optional: a tea towel for the father’s robe"],
    whereToNext: "Tomorrow: why Jesus told this story — and the shocking twists that made the religious leaders go quiet.",
    slides: [
      { type: "title", id: "m-title", title: "The Son Who Left", minutes: 0.5, kicker: "Term 3 · Week 4", sub: "The Lost Son",
        art: { key: "t3w04-cover" }, notes: "Let the splash play. This is probably the most famous of all Jesus’ stories — build the anticipation." },

      { type: "hook", id: "m-hook", title: "My way!", minutes: 1.5,
        checkin: { text: "Last week Jesus told us about the shepherd who searched for one lost sheep and the woman who swept her house for one lost coin. Your challenge was “Welcome in”: notice someone on their own and invite them in. Who did you welcome, and what happened?" },
        text: "Have you ever wanted to do things completely your own way — no rules, no one telling you what to do?",
        ask: "What would you do first? What might go wrong?",
        hint: "Check-in first: celebrate 2–3 students who invited someone in (keep names light; don’t pressure those who didn’t). Then the hook: later bedtime, no veges, all the screen time. Take a couple of answers, including what could go wrong. Land it: ‘Today Jesus tells a story about a son who wants exactly that — and what happens next.’" },

      { type: "scripture", id: "m-scr", title: "Luke 15:11–13, 17, 20", minutes: 1, ref: "Luke 15:11–20", version: "CEV",
        lines: [
          { text: "Jesus also told them another story: “Once a man had two sons. The younger son said to his father, ‘Give me my share of the property.’”", ref: "Luke 15:11–12" },
          { text: "Not long after that, the younger son packed up everything he owned and left for a foreign country, where he wasted his money on wild living.", ref: "Luke 15:13" },
          { text: "Finally, he came to his senses and said, “My father’s workers have plenty to eat, and here I am, starving to death!”", ref: "Luke 15:17" },
          { text: "But while he was still a long way off, his father saw him and felt sorry for him. He ran to his son and hugged and kissed him.", ref: "Luke 15:20" }
        ],
        emphasis: ["Give me my share", "wasted his money", "came to his senses", "ran to his son", "hugged and kissed him"],
        notes: "Verses selected. Luke 15 is where Jesus tells three ‘lost’ stories in a row — last week’s sheep and coin, and today’s son. ‘Wild living’ is the Bible’s own gentle phrase; no need to add detail." },

      { type: "story", id: "m-story", title: "The road home", minutes: 3, transition: "page", mood: "desert",
        beats: [
          { text: "“Give me my share.”", caption: "The younger son wanted his money — now — and a life of his own.",
            art: { key: "t3w04d1-a", label: "Mon · story — leaving home", desc: "The younger son striding away down the road with a heavy money bag while his father watches from the doorway.", shot: "wide, silhouette", motion: "kenburns-out", chars: [],
              scene: "A young man in fine new clothes strides away from a farmhouse down a dusty road, a heavy money bag swinging from his belt, not looking back. In the doorway behind, his father stands as a still, dark silhouette, one hand on the doorframe." } },
          { text: "Every coin spent.", caption: "New friends came and went — and so did the money." },
          { text: "A famine. Hungry. Feeding pigs.", caption: "The lowest job he could find — and nobody gave him anything.",
            art: { key: "t3w04d1-b", label: "Mon · story + role-play card — among the pigs", desc: "The son, ragged and hungry, sitting in a muddy pig pen staring at the pods the pigs are eating.", shot: "medium, low-angle", motion: "kenburns-in", chars: [],
              scene: "In a muddy pig pen on a barren farm, the younger son sits slumped against the fence in torn clothes, thin and hungry, staring at the carob pods in the pigs' trough. Pigs root around him, and grey storm clouds gather overhead." } },
          { text: "He came to his senses.", caption: "“I will go back to my father.”" },
          { text: "His father ran!", caption: "“This son of mine was dead, but now he is alive!”", shout: true }
        ],
        narration: "Jesus was sitting down to a meal with some tax collectors and other people that everyone called ‘sinners’. The religious leaders stood at the edge and grumbled. So Jesus told them a story. It begins like this.\n\nA man had two sons. They lived on a big farm, with fields and animals and workers. One day the younger son said to his father, ‘Give me my share of the property.’\n\nThat was a shocking thing to say. Normally a son only got his share after his father died. It was like saying, ‘I wish you weren’t here — I just want your stuff.’ And what did the father do? He didn’t shout. He didn’t lock the gate. Sadly, he divided his property between his sons, and let the younger one go.\n\nNot long after that, the younger son packed up everything he owned and left for a faraway country. He didn’t look back. And there, the Bible says, he wasted his money on wild living. Parties, new clothes, new ‘friends’ who loved him as long as he was paying. One coin after another, until the bag was empty.\n\nThen a famine hit that land — a time when there wasn’t enough food for anyone. His ‘friends’ vanished. He was hungry and alone, so he took the only job he could find: feeding pigs. For a Jewish man, pigs were unclean animals. This was as low as life could get. He was so hungry that he would have been glad to eat what the pigs were eating. But no one gave him anything.\n\nAnd there, in the mud, the Bible says something wonderful. He came to his senses. He thought, ‘My father’s workers have plenty to eat, and here I am, starving! I’ll go home. I’ll say, “Father, I have sinned against God and against you. Treat me like one of your workers.”’\n\nSo he got up and started back, practising his speech the whole way.\n\nBut while he was still a long way off, his father saw him. The father had been watching the road. He felt sorry for him — and he ran to his son, and hugged and kissed him.\n\nThe son began his speech. But his father was already calling to the servants: ‘Hurry! Bring the best clothes! A ring! Sandals! Let’s have a feast — this son of mine was dead, but now he is alive! He was lost, but now he has been found!’ And they began to celebrate.",
        notes: "About 3 minutes. Imagined details (parties, new clothes, ‘friends’ vanishing, the father watching the road) are plausible fill-ins from the text. Keep ‘wild living’ vague — if asked, say ‘he spent his money on whatever felt fun at the time and it didn’t last.’ Pigs were unclean under the Law of Moses, so a Jewish listener would hear this as the very bottom. Some students may have a dad who is absent or difficult: remind them God is the perfect Father, not a copy of anyone’s dad." },

      { type: "question", id: "m-q1", title: "Rock bottom", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "What job did the younger son end up with when his money ran out?",
        options: ["Baking bread", "Feeding pigs", "Sailing a boat", "Guarding a palace"], answer: 1,
        hint: "Answer: B (Luke 15:15). Follow-up: ‘What had happened in that land?’ (A famine, so there was no food.) Follow-up 2: ‘What did the son wish he could eat?’ (The pigs’ food.) If silent: re-read the third scripture line and ask where he ended up." },

      { type: "question", id: "m-q2", title: "Letting go", minutes: 1.5, level: "think", mode: "pair", seconds: 45, skippable: true,
        text: "The father knew his son was making a bad choice, but he let him go. Why do you think he did that?",
        hint: "Good answers: love can’t be forced; a son has to choose to stay; the father trusted he might come home; he respected the choice even though it hurt. Follow-up: ‘What did the father do while his son was away?’ (He kept watching the road.) Follow-up 2: ‘What does this show about God?’ If silent: ask ‘Could you make someone love you by locking the door?’" },

      { type: "roleplay", id: "m-rp", title: "The Lost Son", minutes: 5, ref: "Luke 15:11–24",
        art: { key: "t3w04d1-b" },
        imagined: "The father’s, son’s and narrator’s key words are from Luke 15 (CEV). The farmer, the party friends and the pig noises are imagined to fill out the scene.",
        actions: ["Everyone: party cheers when the son has money", "Everyone (as pigs): ‘Oink! Snort!’", "Everyone: a big celebration at the end"],
        props: ["Optional: an empty bag for the money", "Optional: a tea towel robe for the son at the end"],
        characters: [
          { name: "Narrator", color: "#F2C77B", desc: "Tells the story" },
          { name: "Father", color: "#A1887F", desc: "Loving, watchful — he never stops hoping" },
          { name: "Younger Son", color: "#7BA7D9", desc: "Restless and cocky, then hungry and humble" },
          { name: "Farmer", color: "#B0BEC5", desc: "A stranger who owns the pigs" },
          { name: "Servant", color: "#8BC34A", desc: "Works for the father — quick and delighted" },
          { name: "Everyone", color: "#FFFFFF", desc: "Party friends, hungry pigs, then the big celebration" }
        ],
        lines: [
          { character: "Narrator", text: "A big farm. A father has two sons. The older one is out working in the fields.", direction: true },
          { character: "Younger Son", text: "Dad, give me my share of the property. I want it now.", action: "arms folded, impatient" },
          { character: "Father", text: "Oh, my son. Very well. Here is your share.", action: "sad, but gentle" },
          { character: "Narrator", text: "Not long after that, the younger son packed up everything and left for a faraway country." },
          { character: "Younger Son", text: "Goodbye! I’m going to live it up!", action: "stride off, never look back" },
          { character: "Everyone", text: "Party! Party! Party!", action: "cheer — the ‘friends’ who love his money" },
          { character: "Narrator", text: "He wasted his money on wild living, until every coin was gone." },
          { character: "Younger Son", text: "Hey — where did everyone go? My bag is empty!", action: "turn the bag upside down" },
          { character: "Narrator", text: "Then a famine hit. There was hardly any food anywhere." },
          { character: "Younger Son", text: "Please — any work at all? I’ll do anything.", action: "beg" },
          { character: "Farmer", text: "You can look after my pigs. That’s all I’ve got for you.", action: "point" },
          { character: "Everyone", text: "Oink! Oink! Snort!", action: "hungry pigs crowd round" },
          { character: "Younger Son", text: "The pigs eat better than I do. My father’s workers have plenty to eat — and here I am, starving!", action: "slump down" },
          { pause: "Freeze! The son has just come to his senses. What do you think he decides to do?", seconds: 20 },
          { character: "Younger Son", text: "I’ll go home. I’ll say, ‘Father, I have sinned against God and against you. Treat me like one of your workers.’", action: "stand up slowly" },
          { character: "Narrator", text: "He got up and started for home, practising his speech the whole way." },
          { character: "Narrator", text: "While he was still a long way off, his father saw him. He had been watching the road." },
          { character: "Father", text: "My son! My son is home!", action: "run to him, arms wide!" },
          { character: "Younger Son", text: "Father, I have sinned against God and against you. I am no longer good enough to be called your son.", action: "head down" },
          { character: "Father", text: "Servants — hurry! Bring the best clothes. Put a ring on his finger and sandals on his feet.", action: "hug him tight" },
          { character: "Servant", text: "Yes, sir! The best robe — right away!", action: "dash off" },
          { character: "Father", text: "Prepare the best calf. Let’s have a feast and celebrate!" },
          { character: "Father", text: "This son of mine was dead, but now he is alive! He was lost, but now he has been found!" },
          { character: "Everyone", text: "He was lost — but now he is found! Hooray!", action: "cheer and dance" }
        ],
        debrief: [
          { level: "look", text: "What did the son plan to say to his father — and what did the father do before he could finish?", hint: "He planned to ask to be treated like a worker (15:19). His father ran, hugged him and called for a robe, ring and sandals before he finished (15:20–22). He never got to say the ‘worker’ part." },
          { level: "think", text: "What did you notice about the father in that scene?", hint: "He was watching, he ran, he forgave without a lecture, he threw a party. He did not wait for the son to prove himself first." }
        ],
        notes: "The older brother is deliberately left out today — he walks into the story on Tuesday. Keep the son’s ‘wild living’ light-hearted in performance (party noises), nothing more. The farmer’s line is imagined; the Bible only says the son went to work for someone who sent him to feed pigs." },

      { type: "question", id: "m-q3", title: "Coming to his senses", minutes: 1, level: "dig", mode: "discuss", seconds: 40,
        text: "The son only decided to go home when he was starving. Why is it so hard to say sorry and turn back — and what helped him do it?",
        hint: "Ideas: pride; embarrassment; fear of the reaction; hoping no one finds out; it took hitting rock bottom. What helped: remembering his father’s kindness even to his workers. Follow-up: ‘What did he expect his father to say?’ (Treat me like a worker.) Follow-up 2: ‘What do you think made him believe he could go home at all?’ If silent: ask who has ever been scared to say sorry." },

      { type: "apply", id: "m-apply", title: "Head · Heart · Hands", minutes: 1,
        head: "God is like the father who watches the road and runs to welcome us home.",
        heart: "Father, I want to come home to you.",
        hands: "This week, when someone asks you to do something you don’t want to do (tidy up, get off a screen, come in from play), try the ‘your will be done’ choice: do it the first time without a grumble.",
        settings: ["home", "school", "sport"],
        notes: "Connect it to today’s prayer phrase: the younger son said ‘my share, my way’. ‘Your will be done’ is the opposite." },

      { type: "scene", id: "m-scene", title: "Come to his senses", minutes: 0.5, optional: true,
        art: { key: "t3w04d1-b" },
        boxes: [
          { text: "“…and here I am, starving to death!”", pos: "tl", style: "speech" },
          { text: "He came to his senses.", pos: "br", style: "caption" }
        ] },

      { type: "verse", id: "m-verse", title: "Memory verse peek", minutes: 1, optional: true, activity: "echo",
        notes: "Introduce Luke 15:24 — the father’s words at the party." },

      { type: "prayer", id: "m-pray", title: "Your will be done (silent)", minutes: 3, mood: "calm", style: "silent",
        tip: "This term we’re praying through the Lord’s Prayer. This week’s line is “Your will be done”. It means: God, I trust your way more than my own. Today’s story shows us what happens when we run off with ‘my way’ — and a Father who is waiting.",
        opening: "Let’s get still. Close your eyes or look at the floor. Imagine a long road — and a father standing at the end of it, watching.",
        phases: [
          { name: "Wow", lead: "God is a Father who watches the road. Think about that.",
            prompts: ["God, you are a Father who never stops loving his children.", "God, you run to meet us when we turn toward home."],
            starter: "Wow, God, you…", seconds: 35, aloud: "Wow, God — you are a Father who runs to welcome us home!" },
          { name: "Sorry", lead: "The son said, ‘Give me my share.’ Is there a time you wanted your own way more than God’s way?",
            prompts: ["Sorry for wanting my own way.", "Sorry for the times I’ve walked away from you."],
            starter: "God, I’m sorry for…", seconds: 30, aloud: "Father, we’re sorry for the times we walked away from you." },
          { name: "Thanks", lead: "Thank God that the road home is always open.",
            prompts: ["Thank you for watching the road for me.", "Thank you for welcoming me back — not as a worker, but as your child."],
            starter: "Thank you, God, for…", seconds: 30, aloud: "Thank you, Father, that the road home is always open." },
          { name: "Please", lead: "Pray the line together: ‘Your will be done.’",
            prompts: ["Please help me trust your way, even when I want my own.", "Please help me come to my senses quickly when I go the wrong way."],
            starter: "Please, God, help…", seconds: 35, aloud: "Father, your will be done — help me trust your way." }
        ],
        closing: "Everyone: Amen.",
        notes: "Model a one-sentence prayer first: ‘Father, thank you that I can always come home to you.’ Reassure students that short and simple is perfect." }
    ] },

  /* ======================= TUESDAY ======================= */
  { label: "Tuesday", theme: "The Father Who Runs", roleplay: false, mood: "dawn",
    learningIntentions: [
      "We are learning why Jesus told the story of the lost son — and who was listening.",
      "We are learning who each character stands for, and the twist that would have shocked the crowd.",
      "I can explain what the story teaches us about God the Father."
    ],
    assessment: "Listen for students identifying the original audience (Pharisees and teachers grumbling about Jesus welcoming sinners), matching father = God, younger son = the lost, older son = the Pharisees, and explaining why a running father was shocking.",
    resources: ["Screen", "Paper for the prayer-writing time"],
    whereToNext: "Tomorrow: Jun’s story — what the lost son looks like in Aotearoa today.",
    slides: [
      { type: "title", id: "t-title", title: "The Father Who Runs", minutes: 0.5, kicker: "Term 3 · Week 4", sub: "The Lost Son",
        art: { key: "t3w04d2-a" }, notes: "Let the splash play." },

      { type: "hook", id: "t-recap", title: "Recap", minutes: 1, style: "recap",
        text: "Yesterday a younger son left home and lost everything.",
        ask: "Where did he end up — and what did his father do when he came home?",
        hint: "He ended up feeding pigs, starving. His father saw him a long way off, ran to him, hugged and kissed him, and called for the best robe, a ring and sandals. Take one or two answers, then: ‘Today we find out why Jesus told this story — and the part we left out.’" },

      { type: "scripture", id: "t-scr", title: "Luke 15:1–2, 28, 31–32", minutes: 1, ref: "Luke 15:1–32", version: "CEV",
        lines: [
          { text: "Tax collectors and sinners were all crowding around to listen to Jesus. So the Pharisees and the teachers of the Law of Moses started grumbling, “This man is friendly with sinners. He even eats with them.”", ref: "Luke 15:1–2" },
          { text: "The older brother got so angry that he would not even go into the house. His father came out and begged him to come in.", ref: "Luke 15:28" },
          { text: "His father replied, “My son, you have always been with me, and everything I have is yours.", ref: "Luke 15:31" },
          { text: "But we had to celebrate and be glad. Your brother was dead, but now he is alive. He was lost, but now he is found.”", ref: "Luke 15:32" }
        ],
        emphasis: ["grumbling", "would not even go into the house", "begged him to come in", "everything I have is yours", "lost, but now he is found"],
        notes: "Verses selected. The whole of Luke 15 begins with the grumbling in verse 2. That is the reason Jesus tells all three ‘lost’ stories." },

      { type: "story", id: "t-story", title: "Who was listening?", minutes: 3.5, transition: "page", mood: "dawn",
        beats: [
          { text: "A grumbling crowd.", caption: "Pharisees complained: “This man eats with sinners!”" },
          { text: "Three shocking twists.", caption: "A son who insulted his father… and fell to the pigs." },
          { text: "The father RUNS.", caption: "A dignified father running down the road? Unheard of!", shout: true,
            art: { key: "t3w04d2-a", label: "Tue · the twist — the father runs", desc: "The father running with his robe hitched up and arms open while the son drops to his knees on the road.", shot: "medium wide, speed lines", motion: "kenburns-right", chars: [],
              scene: "On the dusty road, the father runs hard toward his son, robe hitched up to his knees, sandals kicking up dust, arms already opening, with speed lines behind him. A few metres away the ragged son drops to his knees, head bowed." } },
          { text: "Robe. Ring. Sandals.", caption: "He’s not a servant — he’s a son, welcomed home." },
          { text: "The older brother stays outside.", caption: "Arms folded, in the dark. Does he come in?",
            art: { key: "t3w04d2-b", label: "Tue · who's who — the older brother outside", desc: "The older brother standing outside in the dark with arms folded as music and light spill from the house; the father comes out to him.", shot: "wide, night", motion: "kenburns-in", chars: [],
              scene: "At night, the older brother stands in the dark farmyard in his work clothes, arms folded, jaw set. Behind him, light, music and dancing figures spill from the farmhouse windows, and his father steps out of the bright doorway, hands open, pleading." } }
        ],
        narration: "Before we get to the twists, let’s ask: why did Jesus tell this story at all?\n\nLuke chapter 15 begins with a crowd. Tax collectors and ‘sinners’ were pushing in close to listen to Jesus. Tax collectors were Jewish men who collected money for the Roman rulers — and often took extra for themselves, so most people couldn’t stand them. ‘Sinners’ meant people who didn’t keep the religious rules. Everyone else kept their distance. But Jesus welcomed them. He even ate meals with them.\n\nStanding at the edge were the Pharisees and the teachers of the Law. The Pharisees were religious leaders who worked incredibly hard at keeping every rule. People respected them. And they were grumbling: ‘This man is friendly with sinners. He even eats with them!’\n\nSo Jesus told three stories in a row: a lost sheep, a lost coin, and a lost son. And the last story had twists that would have made the crowd gasp.\n\nTwist number one: the request. In Jesus’ world, asking for your share of the property while your father was still alive was a terrible insult. Everyone listening expected the father to be furious.\n\nTwist number two: the pigs. Pigs were unclean animals to Jewish people. A Jewish son feeding pigs, wishing he could eat their food? You couldn’t fall any lower.\n\nTwist number three — the biggest: the father runs. In those days, an important older man didn’t run. It was undignified; he would have to hitch up his long robe in front of the whole village. But this father doesn’t care what anyone thinks. He runs to a son who has shamed him. And before the son can finish his speech, he gives him the best robe, a ring and sandals. He is not a servant. He is a son, welcomed home.\n\nThen comes the final twist. The older brother. He’s been out working in the field. He hears the music and dancing, and he refuses to go in. He’s furious! ‘I’ve worked for you like a slave, and you never even gave me a little goat!’ And what does the father do? He leaves his own party, walks out into the dark, and begs him to come in. ‘My son, you have always been with me, and everything I have is yours. But we had to celebrate. Your brother was dead, but now he is alive.’\n\nAnd then the story just stops. Does the older brother go in? Jesus doesn’t say.\n\nBecause Jesus was talking to the Pharisees. They were the older brother — standing outside with their arms folded while the ‘sinners’ were welcomed to the feast. The father’s door was still open for them, too.",
        notes: "About 3½ minutes. The ‘father never ran’ detail is widely taught as the cultural background (a respected older man would not hitch up his robes to run), but the Bible simply says he ran — present it as ‘would have shocked them’. Pharisees are not villains for all time: they stand for anyone who trusts their own goodness. ‘Servant sandals’: many scholars note that sandals and a ring marked a son and free person. Tax collectors and Pharisees are explained here for the first time this week." },

      { type: "dig", id: "t-dig", title: "Who’s who?", minutes: 2,
        prompt: "Every story Jesus told had a meaning. Who does each character stand for?",
        columns: ["In the story", "In Jesus’ day"],
        items: [
          { left: "The father", right: "God — the Father who welcomes" },
          { left: "The younger son", right: "Tax collectors and ‘sinners’ — people who knew they’d wandered" },
          { left: "The older son", right: "The Pharisees — and anyone who thinks they’re good enough" },
          { left: "The party", right: "The joy in heaven when someone comes home" }
        ],
        reveal: "Jesus was saying: this is what God is like — he runs to welcome those who come home, and he invites everyone to the party.",
        notes: "Reveal row by row. Remind them of ‘an earthly story with a heavenly meaning’ from Week 1." },

      { type: "question", id: "t-q1", title: "A running father", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "What did the father do when he saw his son still a long way off?",
        options: ["Waited at the gate", "Sent a servant to check", "Ran to him and hugged him", "Locked the door"], answer: 2,
        hint: "Answer: C (Luke 15:20). Follow-up: ‘What did he feel when he saw him?’ (He felt sorry for him — compassion.) Follow-up 2: ‘What three things did he give his son?’ (Best clothes, a ring, sandals.) If silent: re-read the Luke 15:20 line from yesterday." },

      { type: "question", id: "t-q2", title: "Why did he run?", minutes: 1.5, level: "think", mode: "silent", seconds: 30,
        text: "In Jesus’ day, a dignified father didn’t run. Why do you think Jesus made the father in his story run?",
        hint: "Good answers: to show how much God loves us; he doesn’t care how he looks; he wanted to reach his son before the village could shame him; he doesn’t wait for us to clean up first. Follow-up: ‘What does the running show about what God is like?’ Follow-up 2: ‘How might the Pharisees have felt hearing it?’ If silent: ask ‘Would you run for someone you love?’" },

      { type: "question", id: "t-q3", title: "Was he right to be angry?", minutes: 1.5, level: "dig", mode: "vote", seconds: 30, skippable: true,
        text: "Agree or disagree: “The older brother had a good reason to be angry.”",
        options: ["Agree", "Disagree"],
        hint: "Both answers are fine if explained. Agree: he worked hard and was never thrown a party. Disagree: his brother was safe and home, and he refused to celebrate. The deeper point is that he thought he’d earned it. Follow-up: ‘What was he missing?’ (He was always with the father; everything was his already.) Follow-up 2: ‘Why do you think Jesus leaves the ending open?’ If silent: ask where they’ve seen someone get a treat and felt cross." },

      { type: "apply", id: "t-apply", title: "Head · Heart · Hands", minutes: 2,
        head: "God is a Father who runs to welcome us — and he invites everyone to his party.",
        heart: "Father, thank you for not waiting at the gate with your arms folded.",
        hands: "When someone gets praised or a treat and you feel your own arms folding like the older brother, unfold them and say ‘Well done’ to that person at school, in sport or at home.",
        settings: ["school", "home", "sport"],
        notes: "This previews Thursday’s challenge (celebrate good news for someone else)." },

      { type: "scene", id: "t-scene", title: "Everything I have is yours", minutes: 1, optional: true,
        art: { key: "t3w04d2-b" },
        boxes: [
          { text: "“My son, you have always been with me.”", pos: "tl", style: "speech" },
          { text: "“…and everything I have is yours.”", pos: "br", style: "caption" }
        ] },

      { type: "verse", id: "t-verse", title: "Build the verse", minutes: 1, activity: "build",
        notes: "Build Luke 15:24." },

      { type: "prayer", id: "t-pray", title: "Write to the Father", minutes: 3, mood: "calm", style: "write",
        tip: "Praying “your will be done” doesn’t mean pretending you have no wishes. Jesus told his Father exactly what he wanted, and then trusted his Father’s plan. Today, write honestly, then hand it over.",
        opening: "On your paper, write at the top: ‘Dear Father…’",
        phases: [
          { name: "Wow", lead: "Write one line about the kind of Father God is.",
            prompts: ["You run to meet us.", "You never wait with your arms folded."],
            starter: "You are…", seconds: 35, aloud: "Father, you run to meet us — you are wonderful!" },
          { name: "Sorry", lead: "Write one honest sorry — like the son: ‘I have sinned against God and against you.’",
            prompts: ["Father, I’m sorry for…", "Sorry for being like the older brother — proud and cross."],
            starter: "Father, I’m sorry for…", seconds: 30, aloud: "Father, we’re sorry for turning away, and for folding our arms." },
          { name: "Thanks", lead: "Write one line thanking him for the robe, the ring and the sandals — for treating you like his child.",
            prompts: ["Thank you for making me part of your family.", "Thank you for the party — there is always room."],
            starter: "Thank you for…", seconds: 35, aloud: "Thank you, Father, that there’s always a place for us at your table." },
          { name: "Please", lead: "Write ‘Your will be done’ — and one thing you want to hand over to God.",
            prompts: ["Please help me hand over (a worry) to you.", "Please help me celebrate when others get good things."],
            starter: "Please, Father, help…", seconds: 35, aloud: "Please, Father, your will be done — and help us celebrate with others." }
        ],
        closing: "Fold your note and keep it somewhere safe. Amen!",
        notes: "Don’t collect the notes — they’re private. Invite a couple of volunteers to read out just their ‘Wow’ line." }
    ] },

  /* ======================= WEDNESDAY ======================= */
  { label: "Wednesday", theme: "Jun’s Long Walk Home", roleplay: true, mood: "storm",
    learningIntentions: [
      "We are learning how the story of the lost son could happen in Aotearoa today.",
      "We are learning what Jun’s dad shows us about God the Father.",
      "I can say who in Jun’s story is like the father, the younger son and the older son."
    ],
    assessment: "Listen for students matching Jun, Dad and Ling to the younger son, the father and the older son, and explaining what Dad’s running tells us about God.",
    resources: ["Screen", "Optional: a hoodie and a wet-look jacket for Jun", "Optional: a bag of ‘birthday money’ (play money)"],
    whereToNext: "Tomorrow: what the story shows about God — and your challenge for the week.",
    slides: [
      { type: "title", id: "w-title", title: "Jun’s Long Walk Home", minutes: 0.5, kicker: "Term 3 · Week 4", sub: "The Lost Son",
        art: { key: "t3w04d3-a" }, notes: "Let the splash play." },

      { type: "hook", id: "w-hook", title: "Today’s version", minutes: 1,
        text: "What if the lost son story happened in Aotearoa today, to a kid like you?",
        ask: "Where might a modern ‘lost son’ run to? What might he spend his money on?",
        hint: "Take 3–4 ideas: the mall, the arcade, online shopping, bubble tea. Quickly recap Tuesday: a father who runs, and an older brother outside. Land it: ‘Meet Jun. He’s ten, he rides a bike, and he’s got a birthday coming up. This is a made-up story — but the shape is Jesus’ story.’" },

      { type: "scripture", id: "w-scr", title: "Luke 15:17–20, 24", minutes: 1, ref: "Luke 15:17–24", version: "CEV",
        lines: [
          { text: "Finally, he came to his senses and said, “My father’s workers have plenty to eat, and here I am, starving to death!", ref: "Luke 15:17" },
          { text: "I will go to my father and say to him, ‘Father, I have sinned against God in heaven and against you.’", ref: "Luke 15:18" },
          { text: "But while he was still a long way off, his father saw him and felt sorry for him. He ran to his son and hugged and kissed him.", ref: "Luke 15:20" },
          { text: "This son of mine was dead, but now he is alive! He was lost, but now he has been found.", ref: "Luke 15:24" }
        ],
        emphasis: ["came to his senses", "a long way off", "ran to his son", "lost, but now he has been found"],
        notes: "Luke 15:24 is our memory verse. Verse 18 is partly quoted." },

      { type: "story", id: "w-story", title: "A long walk in the rain", minutes: 3, transition: "page", mood: "storm",
        beats: [
          { text: "An argument at home.", caption: "Dad wanted the birthday money saved. Jun wanted it now." },
          { text: "A day at the mall.", caption: "Games, bubble tea, new ‘mates’ — while the money lasted." },
          { text: "Empty pockets. Rain.", caption: "A very long walk home.",
            art: { key: "t3w04d3-a", label: "Wed · retelling — the long walk home", desc: "Jun walking home alone along a suburban footpath in the rain at dusk, hood up, hands in empty pockets.", shot: "wide, rainy dusk", motion: "kenburns-left", chars: ["jun"],
              setting: "Modern-day Aotearoa New Zealand setting: a weatherboard family home in a suburban street, with a driveway, letterbox, deck and a small back garden. Kiwi kids of many backgrounds drawn naturally and respectfully, in everyday clothes, school uniforms or sports gear.",
              scene: "Rainy dusk on a suburban street. Jun trudges along the wet footpath with his hood up and hands jammed in empty pockets, his backpack sagging. Streetlights flicker on, reflected in puddles, and warm lit windows glow in the weatherboard houses ahead." } },
          { text: "Dad RAN!", caption: "Down the driveway, in his socks, arms wide.", shout: true,
            art: { key: "t3w04d3-b", label: "Wed · retelling — Dad runs", desc: "Jun's dad running down the driveway in his socks to hug him in the rain, his older sister watching from the doorway with arms crossed.", shot: "medium wide", motion: "kenburns-in", chars: ["jun"],
              setting: "Modern-day Aotearoa New Zealand setting: a weatherboard family home in a suburban street, with a driveway, letterbox, deck and a small back garden. Kiwi kids of many backgrounds drawn naturally and respectfully, in everyday clothes, school uniforms or sports gear.",
              scene: "Jun's dad sprints down the wet driveway in his socks, arms wide, and wraps Jun in a hug in the rain. Up on the lit front porch, Jun's older sister leans in the doorway, arms crossed, eyebrows raised, not yet smiling." } },
          { text: "Ling folded her arms.", caption: "Not everyone at the party was smiling yet." }
        ],
        narration: "Jun had just turned ten, and his Gong Gong and Po Po had given him two hundred dollars for his birthday. It was the most money he’d ever had. Jun had big plans. A new game, a new skate helmet, bubble tea for everyone.\n\nBut Dad had other plans. ‘Half goes into savings, mate,’ he said at breakfast. ‘And we’ll buy a proper bike lock with the rest.’\n\n‘It’s MY money!’ Jun shouted. ‘You never let me decide anything!’ His older sister Ling called from the couch, ‘Jun, you’re going to regret this.’ But Jun grabbed the envelope, stuffed it in his backpack, and slammed the door.\n\nHe caught the bus to the mall. And for a few hours, Jun was a legend. He bought tokens for the arcade and handed them around. He shouted bubble tea for kids from his school. ‘Jun, you’re the best!’ they said. ‘Sweet as!’ He bought a fancy light-up gadget that he didn’t even like very much. The money disappeared note by note. Every time Jun heard ‘Sweet as, Jun!’ he felt like the king of the mall, and he didn’t once stop to count what was left.\n\nBy mid-afternoon, Jun reached into his pocket and found fifty cents. His phone was flat. His new mates had somehow wandered off. And then the sky turned grey and the rain began.\n\nJun had no bus fare. So he started to walk. It was a long way. His shoes squelched, his hood dripped, and with every block he thought about what he’d said to Dad. By the time he turned into his own street, he’d practised a speech: ‘Dad, I wrecked it. I’ll do chores to pay it back. You don’t have to treat me like your son anymore.’\n\nJun stopped at the end of the street, soaked and shaking. And then the front door flew open.\n\nDad had been watching from the window. He didn’t grab an umbrella. He didn’t even grab his shoes. He ran down the driveway in his socks, straight through the puddles, and threw his arms around his drenched son.\n\nUp on the porch, Ling leaned against the doorframe with her arms crossed. She was not smiling — not yet.",
        notes: "About 3 minutes. This is an imagined, modern retelling written for this lesson — Jun, Dad, Ling and the mates are made up; the shape follows Luke 15:11–32. Gong Gong and Po Po are Cantonese for maternal grandfather and grandmother; use ‘Grandpa and Grandma’ if you prefer. Some students may not live with a dad or may find Dad difficult: say ‘a caring adult’ where you need to, and remind them God is the perfect Father." },

      { type: "question", id: "w-q1", title: "A long way off", minutes: 1, level: "look", mode: "finish", seconds: 20,
        text: "Finish the sentence: “While Jun was still a long way off, his dad saw him and…”",
        reveal: "“…ran to him and hugged him.” (Like Luke 15:20.)",
        hint: "Follow-up: ‘What was Dad wearing on his feet?’ (Just his socks.) Follow-up 2: ‘What was Jun planning to say?’ (That he’d do chores and wasn’t good enough to be called Dad’s son.) If silent: point to the last beats of the story slide." },

      { type: "roleplay", id: "w-rp", title: "Jun’s Long Walk Home", minutes: 5, ref: "Luke 15:11–32 (modern retelling)",
        art: { key: "t3w04d3-b" },
        imagined: "This is a modern retelling written for this lesson. Jun, Dad, Ling and the mates are imagined; the story follows Jesus’ parable in Luke 15:11–32.",
        actions: ["Everyone: arcade beeps and bubbles", "Everyone: rain sounds by tapping fingers on desks", "Everyone: cheer for the fish and chips"],
        props: ["Optional: a hoodie for Jun", "Optional: play money in an envelope"],
        characters: [
          { name: "Narrator", color: "#F2C77B", desc: "Tells the story" },
          { name: "Jun", color: "#7BA7D9", desc: "Ten, cheeky and quick-tempered — then soaked and sorry" },
          { name: "Dad", color: "#A1887F", desc: "Loving and a bit protective — runs when it counts" },
          { name: "Ling", color: "#CE93D8", desc: "Jun’s older sister — responsible and a bit cross" },
          { name: "Mate", color: "#8BC34A", desc: "A kid from school who loves a free bubble tea" },
          { name: "Everyone", color: "#FFFFFF", desc: "Arcade noises, rain, then the celebration" }
        ],
        lines: [
          { character: "Narrator", text: "Saturday morning at Jun’s house. Jun has two hundred dollars of birthday money in an envelope.", direction: true },
          { character: "Dad", text: "Half of that goes into savings, mate. We’ll buy a proper bike lock with the rest.", action: "calm, gentle" },
          { character: "Jun", text: "It’s MY birthday money! You never let me decide anything!", action: "stomp" },
          { character: "Ling", text: "Jun, you’re going to regret this. Just saying.", action: "calling from the couch" },
          { character: "Jun", text: "Forget it. I’ll spend it myself. See ya!", action: "grab the envelope, slam the door" },
          { character: "Narrator", text: "Jun caught the bus to the mall with every dollar in his pocket." },
          { character: "Everyone", text: "Ding-ding-ding! Beep! Zoom!", action: "arcade noises" },
          { character: "Jun", text: "Games for everyone! Bubble tea, too. My shout!", action: "wave the cash around" },
          { character: "Mate", text: "Jun, you’re the best! Sweet as, bro!", action: "high-five" },
          { character: "Narrator", text: "New mates came and went. So did the dollars." },
          { character: "Jun", text: "Wait. I’ve only got fifty cents? And my phone’s flat!", action: "turn pockets inside out" },
          { character: "Mate", text: "Cool story. Catch you later, Jun!", action: "wander off" },
          { character: "Narrator", text: "No money, no bus fare — and it started to rain." },
          { character: "Everyone", text: "Pitter-patter… pitter-patter… pitter-patter…", action: "rain sounds, getting louder" },
          { character: "Jun", text: "I’ll go home and say sorry. ‘Dad, I wrecked it. I’ll do chores to pay it back.’", action: "shiver, keep walking" },
          { pause: "Freeze! Jun is soaked and nervous at the end of his street. What do you think Dad will do?", seconds: 20 },
          { character: "Narrator", text: "Dad had been watching from the window. When he saw a soggy figure, he flung open the door." },
          { character: "Dad", text: "JUN! You’re home!", action: "run down the driveway in socks" },
          { character: "Jun", text: "Dad, I’ve been so stupid. I wasted all of —", action: "choke up" },
          { character: "Dad", text: "Doesn’t matter. I thought I’d lost you. You’re home. That’s all that matters.", action: "big hug" },
          { character: "Jun", text: "I’ll do the dishes for a year. I’ll wash the car, I’ll —", action: "babbling" },
          { character: "Dad", text: "Ling! Put the fish and chips on. We’re having a party!", action: "shout to the house" },
          { character: "Ling", text: "Seriously? He blows the lot and gets fish and chips?", action: "arms crossed on the porch" },
          { character: "Dad", text: "Come here, love. You’re always with me. But Jun was lost and now he’s found. We have to celebrate.", action: "gentle" },
          { character: "Ling", text: "…Fine. But he’s still doing the dishes.", action: "half a smile, uncross arms" },
          { character: "Everyone", text: "Fish and chips! Hooray!", action: "cheer" }
        ],
        debrief: [
          { level: "think", text: "Who in Jun’s story is like the father, the younger son and the older son — and what is the same?", hint: "Dad = the father (he runs, forgives, throws a party); Jun = younger son (wasted it, came home); Ling = older son (fair complaint, arms folded, still invited). Same: the welcome, the party, the cross sibling." },
          { level: "look", text: "What did Dad do when he saw Jun, and what did he say about the party?", hint: "He ran in his socks, hugged him, and said ‘Jun was lost and now he’s found, we have to celebrate’ — the very words of Luke 15:32." }
        ],
        notes: "Keep ‘Dad’ warm, not saintly or comic. The Ling role is a gift to a student who wants a bit of drama — encourage them to play it honestly, not as a villain. Nobody is stereotyped: Jun is a cheeky ten-year-old, not a ‘type’. Say ‘a caring adult’ if students’ home situations are sensitive." },

      { type: "question", id: "w-q2", title: "What Dad shows us", minutes: 1.5, level: "think", mode: "pair", seconds: 45,
        text: "Jun expected Dad to be angry, or to make him earn his way back. What did Dad do instead — and what does that show about God?",
        hint: "Good answers: Dad ran, hugged, forgave, celebrated; he cared more about Jun than the money; God does the same — he doesn’t make us earn our way back. Follow-up: ‘What was the first thing Dad said to Jun?’ (‘You’re home!’) Follow-up 2: ‘Does Dad pretend it didn’t happen?’ (No — Jun still wants to make it right; love and honesty go together.) If silent: ask ‘What would you have expected?’" },

      { type: "question", id: "w-q3", title: "Ling’s arms", minutes: 1, level: "dig", mode: "write", seconds: 40, skippable: true,
        text: "Ling stood with her arms crossed. On your whiteboard, write what you think Ling is feeling — and what Dad wants her to do.",
        hint: "Likely: it’s not fair; she did the right thing and got no party; she’s worried Jun is just getting away with it. Dad wants her to join the celebration because Jun is safe, and she’s always been loved. Follow-up: ‘Have you ever felt like Ling?’ Follow-up 2: ‘What might help her unfold her arms?’ If silent: ask them to think of a time a sibling got a treat." },

      { type: "apply", id: "w-apply", title: "Head · Heart · Hands", minutes: 1,
        head: "God is a Father who runs to us — even when we’ve wasted what he gave us.",
        heart: "Father, thank you that I can always come home to you.",
        hands: "When someone comes back after a mess-up (a friend who said something mean, a sibling who broke your things), be the one who runs to meet them: say ‘It’s okay, welcome back’ instead of ‘I told you so’.",
        settings: ["home", "friends", "school"],
        notes: "This previews Thursday’s challenge." },

      { type: "scene", id: "w-scene", title: "Dad runs!", minutes: 0.5, optional: true,
        art: { key: "t3w04d3-b" },
        boxes: [
          { text: "“JUN! You’re home!”", pos: "tl", style: "shout" },
          { text: "Dad didn’t even stop for his shoes.", pos: "br", style: "caption" }
        ] },

      { type: "verse", id: "w-verse", title: "Verse with actions", minutes: 1, optional: true, activity: "actions",
        notes: "Actions for Luke 15:24." },

      { type: "prayer", id: "w-pray", title: "Pray for your partner", minutes: 3, mood: "calm", style: "pairs",
        tip: "“Your will be done” is hard to say when we’re upset or when we want our own way. Today, pray with a partner: be the kind of friend who prays for someone else’s good.",
        opening: "Turn to a partner. Take turns: one prays a sentence, then the other. If you don’t want to pray out loud, pray silently and say ‘Amen’.",
        phases: [
          { name: "Wow", lead: "Tell God one thing about him from Jun’s story.",
            prompts: ["Father, you run to us in the rain.", "Father, you’d rather have us home than get the money back."],
            starter: "Father, you are…", seconds: 30, aloud: "Father, you run to meet us — you are so good!" },
          { name: "Sorry", lead: "Silently: is there something you need to say sorry for — like Jun’s ‘I wasted it’?",
            prompts: ["Sorry for wasting what you’ve given me.", "Sorry for storming off when I didn’t get my way."],
            starter: "Father, I’m sorry for…", seconds: 30, aloud: "Father, we’re sorry for the times we storm off and go our own way." },
          { name: "Thanks", lead: "Thank God for one person who welcomed you back after a mistake.",
            prompts: ["Thank you for people who say ‘you’re home’ instead of ‘I told you so’.", "Thank you that your door is never locked."],
            starter: "Thank you, Father, for…", seconds: 30, aloud: "Thank you, Father, that your door is never locked." },
          { name: "Please", lead: "Pray for your partner by name: ‘Father, may your will be done in (name)’s life this week.’",
            prompts: ["Please show (name) your way this week.", "Please bring home anyone who feels far away from you."],
            starter: "Please, Father, help…", seconds: 40, aloud: "Please, Father, your will be done in our lives this week." }
        ],
        closing: "Everyone: Amen.",
        notes: "Pairs can be silent if students prefer. Pair carefully so no one is left out." }
    ] },

  /* ======================= THURSDAY ======================= */
  { label: "Thursday", theme: "Home — and a Party", roleplay: false, mood: "calm",
    learningIntentions: [
      "We are learning what the lost son story shows us about God and his kingdom.",
      "We are learning why both sons needed the father’s grace.",
      "I can say one way to come home to God and one way to celebrate with someone else."
    ],
    assessment: "Students can retell the three signs of welcome (robe, ring, sandals), explain that both sons needed grace, say what the story shows about God, and recite Luke 15:24.",
    resources: ["Screen", "Take-home challenge cards"],
    whereToNext: "Next week: Two Builders — Jesus’ story about a wise builder, a foolish builder and a storm.",
    slides: [
      { type: "title", id: "th-title", title: "Home — and a Party", minutes: 0.5, kicker: "Term 3 · Week 4", sub: "The Lost Son",
        art: { key: "t3w04d4-a" }, notes: "Let the splash play." },

      { type: "review", id: "th-review", title: "Who said it?", minutes: 2, format: "whoSaid",
        prompt: "Who said it? Younger son, father or older son?",
        items: [
          { quote: "Give me my share of the property.", who: "The younger son" },
          { quote: "Hurry and bring the best clothes and put them on him.", who: "The father" },
          { quote: "For years I have worked for you like a slave.", who: "The older son" },
          { quote: "My son, you have always been with me, and everything I have is yours.", who: "The father" },
          { quote: "This son of mine was dead, but now he is alive!", who: "The father" }
        ],
        hint: "Click to show each quote; the class calls out the speaker; click to reveal. Ask: ‘When did he say it?’ and ‘What does it show about him?’",
        notes: "Quotes are from Luke 15 (CEV)." },

      { type: "scripture", id: "th-scr", title: "Luke 15:22–24, 31–32", minutes: 1, ref: "Luke 15:22–32", version: "CEV",
        lines: [
          { text: "But his father said to the servants, “Hurry and bring the best clothes and put them on him. Also put a ring on his finger and sandals on his feet.”", ref: "Luke 15:22" },
          { text: "“This son of mine was dead, but now he is alive! He was lost, but now he has been found.” And they began to celebrate.", ref: "Luke 15:24" },
          { text: "“My son, you have always been with me, and everything I have is yours.”", ref: "Luke 15:31" },
          { text: "“But we had to celebrate and be glad. Your brother was dead, but now he is alive. He was lost, but now he is found.”", ref: "Luke 15:32" }
        ],
        emphasis: ["best clothes", "a ring", "sandals", "lost, but now he has been found", "everything I have is yours"],
        notes: "Verses selected." },

      { type: "story", id: "th-story", title: "Two sons, one Father", minutes: 2, transition: "page", mood: "calm",
        beats: [
          { text: "A robe. A ring. Sandals.", caption: "Not a worker — a son, welcomed home.",
            art: { key: "t3w04d4-a", label: "Thu · what it shows — the welcome feast", desc: "The father putting a fine robe and a ring on his son while servants bring sandals and carry food for a feast.", shot: "medium, warm", motion: "kenburns-in", chars: [],
              scene: "In a lamp-lit courtyard, the father wraps a fine embroidered robe around his son's shoulders and slips a ring onto his finger. Servants hurry in with sandals and platters of food, musicians tune up, and the son's face is overwhelmed with relief." } },
          { text: "Both sons were lost.", caption: "One far away. One outside, with his arms folded." },
          { text: "Jesus came to find us.", caption: "“The Son of Man came to look for and to save people who are lost.”" },
          { text: "Back at Jun’s place…", caption: "A plate of hot food and a half-smile.",
            art: { key: "t3w04d4-b", label: "Thu · live it — both need grace", desc: "Jun and his older sister making up in the kitchen, her handing him a plate of food with a half-smile.", shot: "medium, cosy", motion: "kenburns-out", chars: ["jun"],
              setting: "Modern-day Aotearoa New Zealand setting: a weatherboard family home in a suburban street, with a driveway, letterbox, deck and a small back garden. Kiwi kids of many backgrounds drawn naturally and respectfully, in everyday clothes, school uniforms or sports gear.",
              scene: "In a cosy kitchen later that evening, Jun's older sister slides a plate of hot food across the bench to him with a reluctant half-smile, and Jun grins back, still in a towel-dried hoodie. Rain streaks the window behind them." } }
        ],
        narration: "Let’s finish the story and ask: what does it show us about God?\n\nThe father gave his son a robe, a ring and sandals. They weren’t rewards. They said: ‘You belong. You’re my child.’ The son had come home planning to be a worker. The father gave him a place at the table.\n\nThat’s what we call grace. Grace is love and welcome that we haven’t earned. The younger son needed grace because he had run away and wasted everything. But the older son needed grace too. He never left the farm, but he stood outside with his arms folded, thinking he’d earned his reward. Both sons were lost — one far away, one right in the yard. And the father loved them both. He ran to the one, and he walked out into the dark to the other.\n\nThat is what God the Father is like. And here is how Jesus makes the way home. In the story, the older brother stayed home. But Jesus, God’s own Son, left his Father’s house to come looking for us. He said, ‘The Son of Man came to look for and to save people who are lost.’ He didn’t wait at the gate. He came the whole way.\n\nAnd Jun and Ling? Later that night in the kitchen, Ling slid a plate of fish and chips across the bench. ‘Dishes. Tomorrow,’ she said. Jun grinned. It wasn’t a perfect ending. But it was a start. Ling had unfolded her arms.",
        notes: "About 2 minutes. ‘Grace’ is introduced here: undeserved welcome and kindness. The quote about the Son of Man is Luke 19:10. Careful: Jesus ‘left his Father’s house’ is a gentle picture (John 1:14; Philippians 2) — don’t over-press the older brother comparison. Also the pigs and ‘wild living’ are not to be revisited in detail." },

      { type: "question", id: "th-q1", title: "Three gifts", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "Which three things did the father give his son when he came home?",
        options: ["A map, a bag and a horse", "A robe, a ring and sandals", "A sword, a crown and a coin", "A tent, a goat and a cloak"], answer: 1,
        hint: "Answer: B (Luke 15:22). Follow-up: ‘What do these show?’ (He is a son, not a servant — he belongs.) Follow-up 2: ‘What else did the father give?’ (A feast.) If silent: re-read the first line on the scripture slide." },

      { type: "question", id: "th-q2", title: "Both lost", minutes: 1.5, level: "think", mode: "discuss", seconds: 40,
        text: "Both sons needed the father’s grace. How was the older brother lost, even though he never left home?",
        hint: "Good answers: he thought he’d earned everything; he wouldn’t celebrate; he saw his father as a boss, not a dad; he stood outside in the dark; he was close in body but far in his heart. Follow-up: ‘What did the father do for each son?’ (Ran to one; went out to the other.) Follow-up 2: ‘Which son finds it easier to say sorry?’ If silent: sketch two lost sons: one far away, one outside." },

      { type: "recap", id: "th-recap", title: "The Big Idea", minutes: 1.5,
        points: [
          "God is a Father who watches the road, runs to meet us, and welcomes us home as his children.",
          "Both sons needed grace — one ran away, the other stayed with his arms folded.",
          "Jesus came to look for and save people who are lost. He makes the way home."
        ],
        notes: "Then the Big Idea stamps in: The Father runs to welcome us home — and both sons needed his grace." },

      { type: "question", id: "th-q3", title: "Which son?", minutes: 1.5, level: "dig", mode: "silent", seconds: 40, skippable: true,
        text: "Think quietly: this week, are you more like the younger son, the older son, or the Father? Why?",
        hint: "No one needs to share. If students do: younger = ran off, hiding something; older = resentful, comparing; father = welcoming, forgiving, celebrating. Follow-up: ‘What might it look like to come home?’ Follow-up 2: ‘What would the Father say to you?’ If silent: model it by saying where you’ve been like the older brother." },

      { type: "challenge", id: "th-chal", title: "This Week’s Challenge", minutes: 2,
        text: "Come home. Pray an honest “sorry” to God where you need to — then, like the Father, celebrate good news for someone else.",
        why: "“This son of mine was dead, but now he is alive! He was lost, but now he has been found.” — Luke 15:24",
        head: "God runs to welcome us home. Both sons needed his grace.", heart: "Father, I’m sorry — and thank you for welcoming me.", hands: "Pray one honest sorry. Say ‘Well done!’ to someone who has good news.",
        takeHome: true,
        notes: "Next Monday’s check-in will ask about this." },

      { type: "verse", id: "th-verse", title: "Memory verse: fade-out", minutes: 1.5, activity: "fade",
        notes: "Fade out Luke 15:24." },

      { type: "scene", id: "th-scene", title: "A robe, a ring, sandals", minutes: 1, optional: true,
        art: { key: "t3w04d4-a" },
        boxes: [
          { text: "“This son of mine was dead, but now he is alive!”", pos: "tl", style: "speech" },
          { text: "“He was lost, but now he has been found.”", pos: "br", style: "caption" }
        ] },

      { type: "prayer", id: "th-pray", title: "Open hands", minutes: 3, mood: "calm", style: "hands",
        tip: "Hold your hands closed tightly: that’s ‘my will’. Open them, palms up: that’s ‘your will be done’. Praying with open hands helps us hand over what we want.",
        opening: "Close your hands into fists. Now slowly open them, palms up, resting on your knees.",
        phases: [
          { name: "Wow", lead: "With your hands open, tell God what he is like.",
            prompts: ["Father, you are the one who runs to meet us.", "Father, you welcome the proud and the lost."],
            starter: "Father, you are…", seconds: 30, aloud: "Father, you run to welcome us — you are wonderful!" },
          { name: "Sorry", lead: "Silently: hold something you need to say sorry for in your closed hands. Then slowly open them.",
            prompts: ["Sorry for running off.", "Sorry for folding my arms when someone else was celebrated."],
            starter: "Father, I’m sorry for…", seconds: 30, aloud: "Father, we’re sorry — and we thank you for welcoming us home." },
          { name: "Thanks", lead: "Thank God for the robe, the ring and the sandals.",
            prompts: ["Thank you for making me your child.", "Thank you for Jesus, who came to find us."],
            starter: "Thank you, God, for…", seconds: 30, aloud: "Thank you, Father, for welcoming us — and for Jesus, who came to find us." },
          { name: "Please", lead: "Pray together with open hands: ‘Your will be done, on earth as it is in heaven.’",
            prompts: ["Please help me say sorry where I need to.", "Please help me celebrate with someone else this week."],
            starter: "Please, Father, help…", seconds: 40, aloud: "Your will be done, on earth as it is in heaven. Amen." }
        ],
        closing: "Everyone: Amen.",
        notes: "Open hands are optional. If it suits your class, finish by saying the line of the Lord’s Prayer together." }
    ] }
  ]
};
