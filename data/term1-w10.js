/* Morninglight 2027 — Term 1 Week 10: God Keeps His Promise (Luke 1–2). Scripture: CEV. */
window.DEVOTIONS = window.DEVOTIONS || {};
window.DEVOTIONS["Term 1"] = window.DEVOTIONS["Term 1"] || {};
window.DEVOTIONS["Term 1"]["Week 10"] = {
  lessonTitle: "God Keeps His Promise",
  passage: "Luke 1:26–56; 2:1–38",
  bigIdea: "Jesus is the promised Saviour — God himself coming to be with us.",
  godIs: "Saviour",
  memoryVerse: { ref: "Luke 2:10–11", text: "Don’t be afraid! I have good news for you, which will make everyone happy. This very day in King David’s hometown a Savior was born for you. He is Christ the Lord.", version: "CEV",
    chunks: ["Don’t be afraid!", "I have good news for you,", "which will make everyone happy.", "This very day in King David’s hometown", "a Savior was born for you.", "He is Christ the Lord."],
    actions: ["Hands out — calm down", "Cup hands round mouth — announce!", "Huge smile, arms wide", "Hands make a roof — a little town", "Rock a baby", "Point up, then bow"] },
  prayerFocus: { skill: "Praise like Mary", tip: "Mary’s song (Luke 1:46–49) is a model of praise: it’s all about who God is and what he has done." },
  mood: "night",
  cover: "t1w10-cover",
  characters: ["mary", "josephn", "gabriel"],
  coverArt: { key: "t1w10-cover", label: "Week cover", desc: "A newborn baby in a manger in a humble stable, starlight through the roof on him, Mary and Joseph kneeling, a sky of glowing angels above the hills.", shot: "wide, tender",
    scene: "A newborn baby in a manger in a humble stable, a shaft of starlight through the roof lighting him, Mary and Joseph kneeling, and a wide sky of angels glowing above the hills." },
  comicArt: { key: "t1w10-comic", label: "Comic page (week opener — for the comic-page viewer, coming in a later build)", format: "portrait", desc: "Six-panel comic page of the first Christmas.",
    panels: "Six panels. Panel 1 (wide): an angel and Mary in a small room of light. Panel 2 (small): Mary's face. Panel 3 (tall): Joseph and Mary on a donkey into Bethlehem at night. Panel 4 (wide): the baby in the manger. Panel 5 (wide): shepherds and the sky full of angels. Panel 6 (small): old Simeon holding the baby.", chars: ["mary", "josephn", "gabriel"] },

  days: [

  /* ======================= MONDAY ======================= */
  { label: "Monday", theme: "Gabriel Visits Mary", roleplay: true, mood: "temple",
    learningIntentions: [
      "We are learning how the angel Gabriel announced Jesus’ birth to Mary.",
      "We are learning how Mary trusted God’s surprising plan.",
      "I can explain what Gabriel said about who Jesus would be."
    ],
    assessment: "Listen for students recalling Gabriel’s description of Jesus (Son of God, King forever) and Mary’s response of trust.",
    resources: ["Screen", "Optional: a torch for Gabriel’s light"],
    whereToNext: "Tomorrow: Mary visits Elizabeth — and sings one of the greatest songs ever written.",
    slides: [
      { type: "title", id: "m-title", title: "Gabriel Visits Mary", minutes: 0.5, kicker: "Term 1 · Week 10", sub: "God Keeps His Promise",
        art: { key: "t1w10-cover" }, notes: "The last week of term! Build the excitement." },

      { type: "hook", id: "m-hook", title: "Big news", minutes: 1.5,
        checkin: { text: "Last week we heard promises spoken long ago — all pointing to Jesus. Your challenge: pray a promise back to God each day. Which promise did you pray?" },
        text: "What’s the most surprising news you’ve ever received?",
        ask: "How did you react? What did you say?",
        hint: "Check-in first: ask 2–3 which promise they prayed. Then the hook: new baby, moving, winning something. Land it: ‘After 400 quiet years, God breaks the silence — and sends an angel with the most surprising news in history to a teenage girl in a tiny village.’" },

      { type: "scripture", id: "m-scr", title: "Luke 1:30–33, 38", minutes: 1, ref: "Luke 1:26–38", version: "CEV",
        lines: [
          { text: "The angel told Mary, “Don’t be afraid! God is pleased with you, and you will have a son. His name will be Jesus.”", ref: "Luke 1:30–31" },
          { text: "“He will be great and will be called the Son of God Most High. The Lord God will make him king, as his ancestor David was.”", ref: "Luke 1:32" },
          { text: "“He will rule the people of Israel forever, and his kingdom will never end.”", ref: "Luke 1:33" },
          { text: "Mary said, “I am the Lord’s servant! Let it happen as you have said.”", ref: "Luke 1:38" }
        ],
        emphasis: ["Don’t be afraid!", "Jesus", "Son of God Most High", "never end", "I am the Lord’s servant"],
        notes: "Notice ‘his ancestor David’ and ‘never end’ — Isaiah 9:7 coming true!" },

      { type: "story", id: "m-story", title: "The silence breaks", minutes: 3, transition: "page", mood: "temple",
        beats: [
          { text: "Nazareth: a tiny village.", caption: "A young woman named Mary, engaged to a carpenter named Joseph." },
          { text: "Suddenly — an angel!", caption: "“You are truly blessed! The Lord is with you.”", shout: true,
            art: { key: "t1w10d1-a", label: "Mon · story beats 2–3", desc: "A radiant angel bending toward young Mary inside a small stone room, a shaft of brilliant light between them, Mary rising in surprise.", shot: "medium wide", motion: "kenburns-in", chars: ["gabriel", "mary"],
              scene: "A radiant angel bending toward young Mary inside a small stone room, a shaft of brilliant light between them, Mary rising from her seat in surprise." } },
          { text: "“You will have a son. His name will be Jesus.”", caption: "Son of God. King forever." },
          { text: "“How can this happen?”", caption: "“Nothing is impossible for God!”" },
          { text: "“I am the Lord’s servant.”", caption: "Mary said yes to God’s plan.",
            art: { key: "t1w10d1-b", label: "Mon · story beat 5 + role-play card + stretch scene", desc: "Close-up of Mary’s face, wondering and calm, one hand on her heart as she whispers her yes, soft light on her cheek.", shot: "close-up", motion: "kenburns-in", chars: ["mary"],
              scene: "Mary's face, wondering and calm, one hand on her heart as she whispers her yes, soft light on her cheek." } }
        ],
        narration: "For four hundred years, God had been quiet. No new prophets. No angels. Just the old promises on the old scrolls, and people waiting.\n\nThen, in a tiny village called Nazareth — so small that people made jokes about it — the silence broke.\n\nThere lived a young woman named Mary. She was probably a teenager. She was engaged to marry a carpenter called Joseph, who came from King David’s family. Just an ordinary girl in an ordinary town.\n\nOne day, without any warning, an angel appeared in front of her. Not just any angel — the angel Gabriel, one of God’s great messengers. ‘You are truly blessed!’ he said. ‘The Lord is with you.’\n\nMary was confused and frightened. What did that mean? Why would an angel come to her?\n\nGabriel said, ‘Don’t be afraid! God is pleased with you. You will have a son, and his name will be Jesus.’ The name Jesus means ‘The LORD saves’. Then Gabriel said, ‘He will be great and will be called the Son of God Most High. The Lord God will make him king, as his ancestor David was. He will rule forever, and his kingdom will never end.’\n\nDo those words sound familiar? A king from David’s family? A kingdom that never ends? That’s exactly what Isaiah promised seven hundred years earlier! God was keeping his promise — right now, right here, through Mary.\n\nMary asked an honest question: ‘How can this happen? I’m not even married!’\n\nGabriel explained: ‘The Holy Spirit will come down to you, and God’s power will come over you. So your child will be called the holy Son of God.’ And then he told her more news: ‘Your relative Elizabeth, who everyone thought was too old, is going to have a baby too. Nothing is impossible for God!’ — just like God said to Sarah in Week 4.\n\nNow Mary had a choice. Saying yes would be hard. People might not understand. Joseph might not understand. It could cost her a lot.\n\nBut Mary said, ‘I am the Lord’s servant! Let it happen as you have said.’\n\nWhat a yes! Like Abraham setting out, like Noah building, like Moses going back to Egypt — Mary trusted God enough to say yes to his plan, even without knowing how it would all work out.",
        notes: "About 3 minutes. Mary’s age isn’t given; teenage engagement was common. Keep the explanation of the virgin birth simple: ‘The Holy Spirit… God’s power’ (1:35). Nazareth jokes: John 1:46." },

      { type: "question", id: "m-q1", title: "His name", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "What did Gabriel say the baby’s name would be?",
        options: ["David", "Jesus", "Isaiah", "Samuel"], answer: 1,
        hint: "Answer: B (1:31). Follow-up: ‘What does the name Jesus mean?’ (‘The LORD saves.’) Follow-up 2: ‘What else did Gabriel say about him?’ (Son of God, king like David, kingdom never ends.) If silent: re-read the first scripture line." },

      { type: "question", id: "m-q2", title: "Promises coming true", minutes: 1.5, level: "think", mode: "pair", seconds: 45, skippable: true,
        text: "Which promises from earlier this term did Gabriel’s message make come true?",
        hint: "Isaiah 9:6–7 — a child, a son, ruling David’s kingdom forever; David’s family (Week 8); ‘Nothing is impossible for God’ echoes Sarah (Week 4); God with us (Week 7). Follow-up: ‘How do you think people who knew Isaiah’s words would feel?’ Follow-up 2: ‘What does this show about God?’ If silent: put the term’s promises on the board." },

      { type: "roleplay", id: "m-rp", title: "Gabriel Visits Mary", minutes: 5, ref: "Luke 1:26–38; Matthew 1:18–24",
        art: { key: "t1w10d1-b" },
        imagined: "Gabriel’s and Mary’s words are from Luke 1 (CEV). Joseph’s worry and the angel in his dream are summarised from Matthew 1:19–24; the neighbour’s lines are imagined.",
        actions: ["Everyone: a soft ‘ahhh’ of angel light when Gabriel appears", "Everyone: whispering neighbours"],
        props: ["Optional: a torch for Gabriel"],
        characters: [
          { name: "Narrator", color: "#F2C77B", desc: "Tells the story" },
          { name: "Gabriel", voice: true, desc: "God’s angel messenger — bright and kind" },
          { name: "Mary", color: "#7BA7D9", desc: "A young woman — surprised, then trusting" },
          { name: "Joseph", color: "#A1887F", desc: "Carpenter, engaged to Mary — worried, then obedient" },
          { name: "Neighbour", color: "#B0BEC5", desc: "Nosy villager" },
          { name: "Everyone", color: "#FFFFFF", desc: "Angel light, and whispering neighbours" }
        ],
        lines: [
          { character: "Narrator", text: "Nazareth. A small stone house. Mary is working quietly.", direction: true },
          { character: "Everyone", text: "Ahhhhhh…", action: "soft, rising — angel light appears" },
          { character: "Gabriel", text: "You are truly blessed! The Lord is with you." },
          { character: "Mary", text: "Who… who are you? What does this mean?", action: "step back, confused" },
          { character: "Gabriel", text: "Don’t be afraid! God is pleased with you, and you will have a son. His name will be Jesus." },
          { character: "Gabriel", text: "He will be great and will be called the Son of God Most High." },
          { character: "Gabriel", text: "He will rule the people of Israel forever, and his kingdom will never end." },
          { character: "Mary", text: "How can this happen? I am not even married!" },
          { character: "Gabriel", text: "The Holy Spirit will come down to you, and God’s power will come over you." },
          { character: "Gabriel", text: "Your relative Elizabeth is also going to have a son, even though she is old. Nothing is impossible for God!" },
          { pause: "Freeze! Saying yes could make life very hard for Mary. What would you say if you were her?", seconds: 20 },
          { character: "Mary", text: "I am the Lord’s servant! Let it happen as you have said.", action: "hand on heart" },
          { character: "Narrator", text: "And the angel left her." },
          { character: "Neighbour", text: "Did you hear? Mary is going to have a baby — and she’s not married yet!", action: "whisper" },
          { character: "Everyone", text: "Psst… psst… psst…", action: "whispering neighbours" },
          { character: "Joseph", text: "Mary… I don’t understand. Maybe I should quietly call off the wedding.", action: "sad, head down" },
          { character: "Narrator", text: "But that night, an angel spoke to Joseph in a dream." },
          { character: "Gabriel", text: "Joseph, don’t be afraid to take Mary as your wife. Her baby is from the Holy Spirit." },
          { character: "Gabriel", text: "Name him Jesus — he will save his people from their sins." },
          { character: "Joseph", text: "Then I’ll marry her. And I’ll name him Jesus.", action: "wake up, determined" },
          { character: "Mary", text: "God is keeping his promise — through us!", action: "take Joseph’s hands" },
          { character: "Everyone", text: "Nothing is impossible for God!" }
        ],
        debrief: [
          { level: "think", text: "Mary and Joseph both said yes to God. What did it cost them?", hint: "Gossip, misunderstanding, their reputations, their plans. They trusted God anyway." },
          { level: "look", text: "What did the angel tell Joseph that Jesus would do?", hint: "Save his people from their sins (Matthew 1:21)." }
        ],
        notes: "The angel in Joseph’s dream is unnamed in Matthew 1 — we use Gabriel’s character for simplicity; mention this if asked. Keep the ‘not married’ part simple." },

      { type: "question", id: "m-q3", title: "Saying yes", minutes: 1, level: "dig", mode: "discuss", seconds: 40,
        text: "Mary said “Let it happen as you have said” without knowing how everything would work out. What makes it hard to say yes to God?",
        hint: "Ideas: not knowing what will happen; what people will think; it might cost us; we like being in control; fear. What helped Mary: trusting God’s goodness, his promises, ‘nothing is impossible for God’. Follow-up: ‘Who else this term said yes without knowing the whole plan?’ (Noah, Abraham, Moses.) Follow-up 2: ‘What might God be asking you to say yes to?’ If silent: list this term’s ‘yes’ people." },

      { type: "apply", id: "m-apply", title: "Head · Heart · Hands", minutes: 1,
        head: "Nothing is impossible for God — and Jesus is the promised King.",
        heart: "God, like Mary, I want to say, “I am yours.”",
        hands: "Say a ‘Mary yes’ this week: when God (or a parent or teacher) asks something of you, answer with a willing heart, not a grumble.",
        settings: ["home", "school", "church"],
        notes: "Practise the line: ‘Let it happen as you have said.’" },

      { type: "scene", id: "m-scene", title: "Mary’s yes", minutes: 0.5, optional: true,
        art: { key: "t1w10d1-b" },
        boxes: [
          { text: "“Nothing is impossible for God!”", pos: "tl", style: "speech" },
          { text: "“I am the Lord’s servant.”", pos: "br", style: "caption" }
        ] },

      { type: "verse", id: "m-verse", title: "Memory verse peek", minutes: 1, optional: true, activity: "echo",
        notes: "Introduce Luke 2:10–11 — the angel’s message to the shepherds." },

      { type: "prayer", id: "m-pray", title: "Praise like Mary (silent)", minutes: 3, mood: "calm", style: "silent",
        tip: "This week we learn praise from Mary. Praise is telling God how great he is — like a ‘Wow’ prayer that keeps going!",
        opening: "Let’s get still. God broke 400 years of silence for this moment. Breathe in… and out.",
        phases: [
          { name: "Wow", lead: "Nothing is impossible for God.",
            prompts: ["God, nothing is impossible for you.", "Jesus, your kingdom will never end."],
            starter: "Wow, God, you…", seconds: 35, aloud: "Wow, God — nothing is impossible for you!" },
          { name: "Sorry", lead: "Is there something you’ve said ‘no’ to God about?",
            prompts: ["Sorry for saying no to you.", "Sorry for grumbling instead of trusting."],
            starter: "God, I’m sorry for…", seconds: 30, aloud: "God, I’m sorry for the times I said no to you." },
          { name: "Thanks", lead: "Thank God for sending Jesus — the promise come true.",
            prompts: ["Thank you for Jesus.", "Thank you for keeping your promises."],
            starter: "Thank you, God, for…", seconds: 30, aloud: "Thank you, God, for sending Jesus!" },
          { name: "Please", lead: "Pray Mary’s yes for yourself.",
            prompts: ["“I am the Lord’s servant.”", "Please help me trust your plan."],
            starter: "Please, God, help…", seconds: 35, aloud: "God, I am your servant — let it happen as you have said." }
        ],
        closing: "Everyone: Amen.",
        notes: "Encourage students to pray Mary’s words as their own." }
    ] },

  /* ======================= TUESDAY ======================= */
  { label: "Tuesday", theme: "Mary’s Song", roleplay: false, mood: "dawn",
    learningIntentions: [
      "We are learning how Mary visited Elizabeth and how Elizabeth’s baby leapt for joy.",
      "We are learning Mary’s song of praise (Luke 1:46–49).",
      "I can write a praise prayer modelled on Mary’s song."
    ],
    assessment: "Listen for students identifying what Mary praised God for (who he is and what he has done) and using that pattern in their own praise.",
    resources: ["Screen", "Paper for writing praise songs"],
    whereToNext: "Tomorrow: the journey to Bethlehem, no room — and a night full of angels.",
    slides: [
      { type: "title", id: "t-title", title: "Mary’s Song", minutes: 0.5, kicker: "Term 1 · Week 10", sub: "God Keeps His Promise",
        art: { key: "t1w10d2-b" }, notes: "Let the splash play." },

      { type: "hook", id: "t-recap", title: "Recap", minutes: 1, style: "recap",
        text: "Yesterday an angel visited Mary.",
        ask: "What was the angel’s name — and what did Mary say?",
        hint: "Gabriel. ‘I am the Lord’s servant! Let it happen as you have said.’ ‘Gabriel also told Mary about her old relative Elizabeth. So today — Mary hurries off to see her.’" },

      { type: "scripture", id: "t-scr", title: "Luke 1:41–42, 46–49", minutes: 1, ref: "Luke 1:39–49", version: "CEV",
        lines: [
          { text: "When Elizabeth heard Mary’s greeting, her baby moved within her. The Holy Spirit came upon Elizabeth.", ref: "Luke 1:41" },
          { text: "In a loud voice she said to Mary: God has blessed you more than any other woman! He has also blessed the child you will have.", ref: "Luke 1:42" },
          { text: "Mary said: With all my heart I praise the Lord, and I am glad because of God my Savior.", ref: "Luke 1:46–47" },
          { text: "God All-Powerful has done great things for me, and his name is holy.", ref: "Luke 1:49" }
        ],
        emphasis: ["her baby moved", "blessed", "With all my heart I praise the Lord", "great things", "holy"],
        notes: "Mary’s song is often called ‘the Magnificat’." },

      { type: "story", id: "t-story", title: "A song of praise", minutes: 3.5, transition: "page",
        beats: [
          { text: "Mary hurried to the hill country.", caption: "To see her old relative Elizabeth — who was going to have a baby too!",
            art: { key: "t1w10d2-a", label: "Tue · story beats 1–3", desc: "Elizabeth running out of a hillside house with arms open wide to greet Mary arriving on the path, olive trees around them.", shot: "wide, joyful", motion: "kenburns-right", chars: ["mary"],
              scene: "Elizabeth running out of a hillside house with her arms open wide to greet Mary arriving on the path, olive trees around them." } },
          { text: "The baby leapt for joy!", caption: "Elizabeth’s unborn baby jumped when Mary said hello.", shout: true },
          { text: "“God has blessed you!”", caption: "Elizabeth knew — Mary was carrying the Lord." },
          { text: "Mary sang.", caption: "“With all my heart I praise the Lord!”",
            art: { key: "t1w10d2-b", label: "Tue · title + story beats 4–5 + stretch scene", desc: "Mary standing on a flat rooftop at dusk with arms lifted, singing in silhouette against a huge glowing sky.", shot: "silhouette, wide", motion: "kenburns-up", chars: ["mary"],
              scene: "Mary standing on a flat rooftop at dusk with her arms lifted, singing in silhouette against a huge glowing sky." } },
          { text: "A song all about God.", caption: "Who he is — and what he has done." }
        ],
        narration: "After Gabriel left, Mary didn’t sit around. She packed up and hurried off on a long journey — several days’ walk — south to the hill country of Judea. She was going to see her relative Elizabeth.\n\nRemember what Gabriel said? Elizabeth was old. Everyone thought she could never have children — a bit like Sarah, back in Week 4. But now she was six months pregnant! Elizabeth’s husband, Zechariah, was a priest. When an angel told him about the baby, he didn’t believe it, so he couldn’t speak until the baby was born. Imagine a whole nine months without talking!\n\nMary arrived at their house, walked in, and called out, ‘Hello, Elizabeth!’\n\nAnd the moment Elizabeth heard Mary’s voice, the baby inside her jumped! He leapt for joy! That baby would grow up to be John the Baptist — the one who would one day point at Jesus and say, ‘Here is the Lamb of God!’ (Remember Week 6?) And even before either of them was born, John was excited about Jesus.\n\nThen the Holy Spirit filled Elizabeth, and she shouted out, ‘God has blessed you more than any other woman! He has blessed the child you will have! Why should the mother of my Lord come to me?’\n\nHow did Elizabeth know? Mary hadn’t told her anything yet! God had shown her. Mary’s baby was her Lord.\n\nAnd then Mary did something beautiful. She sang. Out came a song of praise — one of the most famous songs in the whole world. People have been singing it for two thousand years. It begins:\n\n‘With all my heart I praise the Lord, and I am glad because of God my Saviour. God cares for me, his humble servant. From now on, all people will say God has blessed me. God All-Powerful has done great things for me, and his name is holy.’\n\nNotice something about Mary’s song. It isn’t about Mary. It isn’t ‘Look at me, I’m special.’ It’s all about God. Who he is — ‘my Saviour’, ‘All-Powerful’, ‘holy’. And what he has done — ‘he cares for me’, ‘he has done great things’.\n\nMary’s song keeps going. She sings about how God turns things upside down: he lifts up humble people and brings down proud people. He feeds hungry people. And he remembers his promises — ‘the promise he made to our ancestors, to Abraham and his family forever.’ Abraham! Week 4! Mary knew that her baby was God keeping his very old promise.\n\nThat’s what praise is: noticing who God is and what he has done, and telling him — with all your heart.",
        notes: "About 3½ minutes. Zechariah’s story is from Luke 1:5–25. The end of the Magnificat (1:50–55) is summarised. ‘Saviour’ in narration uses NZ spelling; the CEV on screen has ‘Savior’." },

      { type: "dig", id: "t-dig", title: "Inside Mary’s song", minutes: 2,
        prompt: "Mary’s song is a model of praise. What does she praise God for?",
        columns: ["Who God is", "What God has done"],
        items: [
          { left: "“God my Savior”", right: "“God cares for me, his humble servant”" },
          { left: "“God All-Powerful”", right: "“Has done great things for me”" },
          { left: "“His name is holy”", right: "Lifts up the humble, feeds the hungry" },
          { left: "Faithful to his promises", right: "Kept his promise to Abraham" }
        ],
        reveal: "Praise = telling God who he is and what he has done.",
        notes: "Reveal row by row." },

      { type: "question", id: "t-q1", title: "Leap for joy", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "What happened when Elizabeth heard Mary’s greeting?",
        options: ["She fainted", "Her unborn baby moved for joy", "She ran away", "Zechariah started singing"], answer: 1,
        hint: "Answer: B (1:41, 44). Follow-up: ‘Who was that baby?’ (John the Baptist.) Follow-up 2: ‘What did Elizabeth call Mary?’ (Mother of my Lord.) If silent: re-read the first scripture line." },

      { type: "question", id: "t-q2", title: "All about God", minutes: 1.5, level: "think", mode: "pair", seconds: 45,
        text: "Mary had just received amazing news about HERSELF. Why do you think her song is all about God, not about her?",
        hint: "Good answers: she was humble; she knew God was the one doing the great thing; she was a ‘servant’; praise points away from ourselves. Follow-up: ‘How is this like Joseph saying “God can” in Week 5?’ Follow-up 2: ‘How could you praise God when something good happens to you?’ If silent: compare a sports star thanking the team vs only talking about themselves." },

      { type: "question", id: "t-q3", title: "Upside down", minutes: 1.5, level: "dig", mode: "discuss", seconds: 45, skippable: true,
        text: "Mary sang that God lifts up humble people and brings down proud people. Where have we seen God do that this term?",
        hint: "Examples: David chosen over his tall brothers; Joseph raised from prison; Pharaoh brought down; Mary (an ordinary girl from Nazareth) chosen; shepherds told first (tomorrow). Follow-up: ‘Why does God love to work through humble people?’ Follow-up 2: ‘What does humble look like at school?’ If silent: list the term’s ‘unlikely’ heroes." },

      { type: "apply", id: "t-apply", title: "Head · Heart · Hands", minutes: 2,
        head: "Praise means telling God who he is and what he has done.",
        heart: "With all my heart I praise you, Lord!",
        hands: "Write your own two-line praise song: line 1 about who God is, line 2 about what he has done for you.",
        settings: ["home", "class", "bedtime"],
        notes: "This leads straight into today’s prayer." },

      { type: "scene", id: "t-scene", title: "With all my heart", minutes: 1, optional: true,
        art: { key: "t1w10d2-b" },
        boxes: [
          { text: "“With all my heart I praise the Lord…”", pos: "tl", style: "speech" },
          { text: "“…God All-Powerful has done great things for me.”", pos: "br", style: "caption" }
        ] },

      { type: "verse", id: "t-verse", title: "Build the verse", minutes: 1, activity: "build",
        notes: "Build Luke 2:10–11." },

      { type: "prayer", id: "t-pray", title: "Write a praise song", minutes: 3, mood: "calm", style: "write",
        tip: "Write your own ‘Magnificat’! Start like Mary: ‘With all my heart I praise you, Lord…’",
        opening: "On your paper, write at the top: ‘With all my heart I praise the Lord.’",
        phases: [
          { name: "Wow", lead: "Write one line about WHO God is.",
            prompts: ["You are my Saviour.", "You are All-Powerful and holy."],
            starter: "You are…", seconds: 40, aloud: "With all my heart I praise you, Lord — you are my Saviour!" },
          { name: "Sorry", lead: "Silently: sorry for being proud or forgetting to praise.",
            prompts: ["Sorry for making things about me.", "Sorry for forgetting to praise you."],
            starter: "Sorry for…", seconds: 25, aloud: "Lord, we’re sorry for forgetting to praise you." },
          { name: "Thanks", lead: "Write one line about WHAT God has done for you.",
            prompts: ["You have done great things for me.", "You gave me…"],
            starter: "You have…", seconds: 40, aloud: "God All-Powerful has done great things for us!" },
          { name: "Please", lead: "Write one line asking God to help someone humble or hungry.",
            prompts: ["Please lift up people who feel small.", "Please feed the hungry."],
            starter: "Please…", seconds: 35, aloud: "Please, Lord, lift up the humble and feed the hungry." }
        ],
        closing: "Read your song quietly to God. That’s praise! Amen!",
        notes: "Invite a few volunteers to read theirs aloud." }
    ] },

  /* ======================= WEDNESDAY ======================= */
  { label: "Wednesday", theme: "Born in Bethlehem", roleplay: true, mood: "night",
    learningIntentions: [
      "We are learning how Jesus was born in Bethlehem, just as Micah promised.",
      "We are learning why the angels told the good news to shepherds first.",
      "I can explain the angel’s message in Luke 2:10–11."
    ],
    assessment: "Listen for students linking Bethlehem to Micah 5:2, explaining the angel’s message, and noticing that the news came first to ordinary shepherds.",
    resources: ["Screen", "Optional: a doll in a box of hay, tea towels for shepherds"],
    whereToNext: "Tomorrow: two old people who had waited their whole lives — and our big term celebration!",
    slides: [
      { type: "title", id: "w-title", title: "Born in Bethlehem", minutes: 0.5, kicker: "Term 1 · Week 10", sub: "God Keeps His Promise",
        art: { key: "t1w10d3-b" }, notes: "Let the splash play." },

      { type: "hook", id: "w-hook", title: "Who hears first?", minutes: 1,
        text: "If the most important person in the world was born today, who would the news go to first?",
        ask: "Prime Minister? TV news? Famous people?",
        hint: "Take ideas. Land it: ‘When Jesus was born, God sent an army of angels… to a group of smelly shepherds on a hillside at night. Let’s find out why.’" },

      { type: "scripture", id: "w-scr", title: "Luke 2:4–7, 10–11", minutes: 1, ref: "Luke 2:1–20", version: "CEV",
        lines: [
          { text: "Joseph had to leave Nazareth… and go to Bethlehem in Judea. Long ago Bethlehem had been King David’s hometown.", ref: "Luke 2:4" },
          { text: "She dressed him in baby clothes and laid him on a bed of hay, because there was no room for them in the inn.", ref: "Luke 2:7" },
          { text: "“Don’t be afraid! I have good news for you, which will make everyone happy.", ref: "Luke 2:10" },
          { text: "This very day in King David’s hometown a Savior was born for you. He is Christ the Lord.”", ref: "Luke 2:11" }
        ],
        emphasis: ["Bethlehem", "bed of hay", "no room", "good news", "Savior"],
        notes: "Luke 2:10–11 is our memory verse." },

      { type: "story", id: "w-story", title: "No room — but good news", minutes: 3, transition: "page", mood: "night",
        beats: [
          { text: "Everyone back to their hometown!", caption: "The emperor ordered a count — so Joseph and Mary went to Bethlehem.",
            art: { key: "t1w10d3-a", label: "Wed · story beats 1–2", desc: "Joseph leading a donkey with Mary riding through crowded narrow streets of Bethlehem at night, torches and shadowy faces in doorways.", shot: "wide, night", motion: "kenburns-left", chars: ["mary", "josephn"],
              scene: "Joseph leading a donkey with Mary riding it through crowded narrow streets of Bethlehem at night, torches and shadowy faces at doorways." } },
          { text: "No room.", caption: "The town was packed." },
          { text: "A baby on a bed of hay.", caption: "The King of the universe — born in a place for animals.", shout: true,
            art: { key: "t1w10d3-b", label: "Wed · title + story beat 3 + role-play card", desc: "Inside a rough stable: a baby lying in a manger of straw, Mary and Joseph beside him in warm lamplight, an ox and sheep nearby, starlight through the roof.", shot: "medium, warm", motion: "kenburns-in", chars: ["mary", "josephn"],
              scene: "Inside a rough stable: a baby lying in a manger of straw, Mary and Joseph beside him in warm lamplight, an ox and sheep nearby, starlight through a gap in the roof." } },
          { text: "Shepherds in the fields.", caption: "Suddenly the sky blazed with angels!",
            art: { key: "t1w10d4-a", label: "Wed · story beats 4–5 + stretch scene", desc: "Shepherds startled on a dark hillside as the night sky erupts with a vast crowd of glowing angels, sheep scattering, shepherds shielding their eyes.", shot: "epic wide", motion: "kenburns-up",
              scene: "Shepherds startled on a dark hillside as the whole night sky erupts with a vast crowd of glowing angels, sheep scattering, shepherds shielding their eyes." } },
          { text: "“A Savior was born for you!”", caption: "The shepherds ran to Bethlehem — and found him." }
        ],
        narration: "Mary’s baby was nearly due. But then the Roman emperor, Augustus, gave an order: everyone in his empire had to go back to their family’s hometown to be counted. Joseph was from King David’s family — so he had to go to Bethlehem, David’s town.\n\nSo Joseph and Mary set off — about a hundred and fifty kilometres, on foot, with Mary heavily pregnant. It probably took about a week. And who had promised, seven hundred years earlier, that the King would be born in Bethlehem? The prophet Micah! A Roman emperor thought he was in charge — but God was using even him to keep his promise.\n\nWhen they finally got to Bethlehem, the town was packed with travellers. There was no room for them in the guest room. So when the baby came, Mary wrapped him in cloths and laid him on a bed of hay — in a feeding trough for animals, called a manger.\n\nThink about that. Jesus — the Mighty God from Isaiah’s promise, the King whose kingdom will never end — was born not in a palace, but in a place where animals were kept. He came small, poor and humble.\n\nThat same night, out in the fields near Bethlehem, some shepherds were looking after their sheep. Shepherds weren’t important people. They were dirty and smelly, and people looked down on them. But remember who else was a shepherd from Bethlehem? David!\n\nSuddenly an angel appeared, and the brightness of God’s glory blazed all around them. The shepherds were terrified! But the angel said, ‘Don’t be afraid! I have good news for you, which will make everyone happy. This very day in King David’s hometown a Saviour was born for you. He is Christ the Lord. You will find him dressed in baby clothes and lying on a bed of hay.’\n\nThen the whole sky filled with angels — an army of them — praising God: ‘Praise God in heaven! Peace on earth to everyone who pleases God!’\n\nWhen the angels left, the shepherds looked at each other and said, ‘Let’s go to Bethlehem and see!’ They hurried off and found Mary and Joseph — and the baby, lying on the hay, exactly as the angel said. Then they went out and told everyone they met. And Mary treasured all these things in her heart.\n\nThe news went first, not to the emperor or the king, but to ordinary shepherds. Because this good news is for everyone.",
        notes: "About 3 minutes. The ‘inn’ may have been a guest room in a family home (the Greek word ‘kataluma’); the Bible doesn’t mention an innkeeper — he appears in our role-play as an imagined character. Distance Nazareth–Bethlehem about 150 km." },

      { type: "question", id: "w-q1", title: "Bed of hay", minutes: 1, level: "look", mode: "finish", seconds: 20,
        text: "Finish the angel’s message: “This very day in King David’s hometown a Savior was born for you. He is…”",
        reveal: "“…Christ the Lord.” (Luke 2:11)",
        hint: "Follow-up: ‘What is King David’s hometown?’ (Bethlehem.) Follow-up 2: ‘Where would the shepherds find him?’ (On a bed of hay.) If silent: point to the scripture slide." },

      { type: "roleplay", id: "w-rp", title: "Born in Bethlehem", minutes: 5, ref: "Luke 2:1–20",
        art: { key: "t1w10d3-b" },
        imagined: "The angel’s words are from Luke 2 (CEV). The innkeeper and the shepherds’ conversation are imagined — the Bible doesn’t mention an innkeeper.",
        actions: ["Everyone (as crowds): busy, noisy Bethlehem", "Everyone (as sheep): ‘Baa!’", "Everyone (as angels): ‘Praise God in heaven!’"],
        props: ["Optional: a doll, a box of hay, tea towels for shepherds"],
        characters: [
          { name: "Narrator", color: "#F2C77B", desc: "Tells the story" },
          { name: "Joseph", color: "#A1887F", desc: "Tired, worried, protective" },
          { name: "Mary", color: "#7BA7D9", desc: "About to have a baby!" },
          { name: "Innkeeper", color: "#B0BEC5", desc: "Busy, flustered — but kind in the end" },
          { name: "Shepherd 1", color: "#8BC34A", desc: "Old and grumpy, until the angels come" },
          { name: "Shepherd 2", color: "#FFB547", desc: "Young and excited" },
          { name: "Angel", voice: true, desc: "God’s messenger — dazzling" },
          { name: "Everyone", color: "#FFFFFF", desc: "Crowds, sheep, then an army of angels" }
        ],
        lines: [
          { character: "Everyone", text: "Move along! Make way! Where’s my room?!", action: "busy crowd" },
          { character: "Joseph", text: "Excuse me — have you got any room? My wife is about to have a baby!", action: "knock" },
          { character: "Innkeeper", text: "Room? The whole town’s full! It’s this silly census!", action: "flustered" },
          { character: "Mary", text: "Joseph… the baby’s coming!", action: "hold tummy" },
          { character: "Innkeeper", text: "Oh dear… there’s the place out the back where we keep the animals. It’s dry, at least.", action: "point" },
          { character: "Narrator", text: "She dressed him in baby clothes and laid him on a bed of hay, because there was no room for them in the inn." },
          { character: "Joseph", text: "His name is Jesus.", action: "softly" },
          { character: "Narrator", text: "That night, in the fields near Bethlehem…" },
          { character: "Everyone", text: "Baa… baa…", action: "sleepy sheep" },
          { character: "Shepherd 1", text: "Another cold night. Nothing ever happens out here.", action: "grumble" },
          { character: "Angel", text: "Don’t be afraid!", action: "appear, dazzling" },
          { character: "Shepherd 2", text: "Aaaah! Who — what — ?!", action: "fall over" },
          { character: "Angel", text: "I have good news for you, which will make everyone happy." },
          { character: "Angel", text: "This very day in King David’s hometown a Savior was born for you. He is Christ the Lord." },
          { character: "Angel", text: "You will find him dressed in baby clothes and lying on a bed of hay." },
          { character: "Everyone", text: "Praise God in heaven! Peace on earth to everyone who pleases God!", action: "arms up — an army of angels!" },
          { pause: "Freeze! The shepherds have just seen the sky full of angels. What do you think they’ll do next?", seconds: 20 },
          { character: "Shepherd 2", text: "Let’s go to Bethlehem and see!" },
          { character: "Shepherd 1", text: "Bring the sheep! Hurry!", action: "run" },
          { character: "Narrator", text: "They found Mary and Joseph, and the baby lying on the bed of hay." },
          { character: "Shepherd 1", text: "It’s him. Exactly like the angel said.", action: "kneel, amazed" },
          { character: "Shepherd 2", text: "Wait till I tell EVERYONE!", action: "run off, shouting" },
          { character: "Mary", text: "I’ll keep all of this in my heart forever.", action: "hold the baby close" },
          { character: "Everyone", text: "A Saviour is born!" }
        ],
        debrief: [
          { level: "think", text: "Why do you think God told shepherds first, not the king?", hint: "The good news is for everyone, especially ordinary and overlooked people; Jesus would be the Good Shepherd; God lifts up the humble (Mary’s song!)." },
          { level: "look", text: "What did the shepherds do after they saw Jesus?", hint: "They told everyone (Luke 2:17) and praised God (2:20)." }
        ],
        notes: "The innkeeper is imagined. A big, joyful role-play — let the angels be LOUD." },

      { type: "question", id: "w-q2", title: "A humble King", minutes: 1.5, level: "think", mode: "pair", seconds: 45,
        text: "Jesus is the King whose kingdom will never end. Why do you think he was born in a place for animals, not a palace?",
        hint: "Good answers: to show he came for ordinary and poor people; humility; so anyone could come to him (even smelly shepherds); God’s upside-down kingdom (Mary’s song). Follow-up: ‘How is this different from Herod?’ (Week 9.) Follow-up 2: ‘What does it show about what God values?’ If silent: ‘Who could visit a baby in a stable that couldn’t visit a palace?’" },

      { type: "question", id: "w-q3", title: "Good news for everyone", minutes: 1, level: "dig", mode: "discuss", seconds: 40, skippable: true,
        text: "The angel said this good news “will make everyone happy”. Why is Jesus’ birth good news for everyone — even people today?",
        hint: "Ideas: a Saviour — someone to rescue us from sin; God with us; peace with God; every promise this term fulfilled; not just for one nation — for everyone. Follow-up: ‘What did the shepherds do with the good news?’ (Told everyone.) Follow-up 2: ‘Who could you tell?’ If silent: re-read Luke 2:10–11." },

      { type: "apply", id: "w-apply", title: "Head · Heart · Hands", minutes: 1,
        head: "Jesus, the Saviour, was born for everyone — just as God promised.",
        heart: "Thank you, God, for good news that’s for me too.",
        hands: "Like the shepherds, tell one person this week one thing you’ve learned about Jesus.",
        settings: ["home", "friends", "family"],
        notes: "This previews Thursday’s challenge." },

      { type: "scene", id: "w-scene", title: "Glory!", minutes: 0.5, optional: true,
        art: { key: "t1w10d4-a" },
        boxes: [
          { text: "“Praise God in heaven!”", pos: "tl", style: "shout" },
          { text: "“Peace on earth to everyone who pleases God.”", pos: "br", style: "caption" }
        ] },

      { type: "verse", id: "w-verse", title: "Verse with actions", minutes: 1, optional: true, activity: "actions",
        notes: "Actions for Luke 2:10–11." },

      { type: "prayer", id: "w-pray", title: "Praise like the angels — standing", minutes: 3, mood: "calm", style: "stand",
        tip: "The angels praised God together. Let’s stand and praise God together too — like a choir of angels!",
        opening: "Let’s stand. Imagine the night sky full of angels praising God.",
        phases: [
          { name: "Wow", lead: "Say it together, like the angels:",
            prompts: ["“Praise God in heaven!”", "“Peace on earth!”"],
            starter: "Praise God…", seconds: 30, aloud: "Praise God in heaven! Peace on earth to everyone who pleases God!" },
          { name: "Sorry", lead: "Silently: sorry for keeping good news to ourselves?",
            prompts: ["Sorry for being too shy to talk about you.", "Sorry for looking down on ‘ordinary’ people."],
            starter: "God, I’m sorry for…", seconds: 25, aloud: "God, we’re sorry for keeping your good news to ourselves." },
          { name: "Thanks", lead: "Thank God for Jesus the Saviour.",
            prompts: ["Thank you for sending Jesus as a baby.", "Thank you that the good news is for everyone."],
            starter: "Thank you, God, for…", seconds: 35, aloud: "Thank you, God, that a Saviour was born for us!" },
          { name: "Please", lead: "Pray for someone you could share the good news with.",
            prompts: ["Please help me tell (name) about Jesus.", "Please let everyone hear the good news."],
            starter: "Please, God, help…", seconds: 35, aloud: "Please, God, help the whole world hear the good news of Jesus." }
        ],
        closing: "Everyone: Amen! Please sit.",
        notes: "Standing is optional." }
    ] },

  /* ======================= THURSDAY ======================= */
  { label: "Thursday", theme: "Simeon, Anna — and Who Is God?", roleplay: false, mood: "temple",
    learningIntentions: [
      "We are learning how Simeon and Anna recognised Jesus as God’s promised Saviour.",
      "We are learning what this whole term has shown us about God.",
      "I can answer the question ‘Who is God?’ using what I’ve learned this term."
    ],
    assessment: "Students can retell Simeon and Anna’s story, name at least five things they’ve learned about God this term, and recite Luke 2:10–11.",
    resources: ["Screen", "Take-home challenge cards", "Optional: the term’s ‘God is…’ words on cards"],
    whereToNext: "Term 2: Trusting God — heroes of faith, starting with ‘What Is Faith?’",
    slides: [
      { type: "title", id: "th-title", title: "Simeon, Anna — and Who Is God?", minutes: 0.5, kicker: "Term 1 · Week 10", sub: "God Keeps His Promise",
        art: { key: "t1w10d4-b" }, notes: "The final devotion of Term 1 — celebrate!" },

      { type: "review", id: "th-review", title: "Who said it? Term 1 edition", minutes: 2.5, format: "whoSaid",
        prompt: "Who said it? The whole-term edition!",
        items: [
          { quote: "Here is someone like me!", who: "Adam" },
          { quote: "God has made me laugh.", who: "Sarah" },
          { quote: "You tried to harm me, but God made it turn out for the best.", who: "Joseph" },
          { quote: "You, LORD, are my shepherd.", who: "David" },
          { quote: "I am the Lord’s servant! Let it happen as you have said.", who: "Mary" }
        ],
        hint: "Click to show each quote; the class calls out the speaker; click to reveal. Ask: ‘Which week was that?’",
        notes: "A celebration of the whole term." },

      { type: "scripture", id: "th-scr", title: "Luke 2:25–26, 28–30, 38", minutes: 1, ref: "Luke 2:25–38", version: "CEV",
        lines: [
          { text: "A man named Simeon was living in Jerusalem. Simeon was a good man.", ref: "Luke 2:25" },
          { text: "God’s Spirit came to him and told him that he would not die until he had seen Christ the Lord.", ref: "Luke 2:26" },
          { text: "Simeon took the baby Jesus in his arms and praised God: “Lord, I am your servant, and now I can die in peace, because you have kept your promise to me.”", ref: "Luke 2:28–29" },
          { text: "Anna came in and praised God. She spoke about the child Jesus to everyone who hoped for Jerusalem to be set free.", ref: "Luke 2:38" }
        ],
        emphasis: ["seen Christ the Lord", "kept your promise", "praised God", "spoke about the child Jesus"],
        notes: "Verses selected." },

      { type: "story", id: "th-story", title: "Worth the wait", minutes: 2, transition: "page", mood: "temple",
        beats: [
          { text: "An old man named Simeon.", caption: "God had promised he would see the Saviour before he died." },
          { text: "One day, in the temple…", caption: "A young couple with a baby. Simeon knew: “This is him!”", shout: true,
            art: { key: "t1w10d4-b", label: "Thu · title + story beats 2–3 + stretch scene", desc: "Old Simeon holding baby Jesus in the temple, eyes full of tears of joy, old Anna beside him with hands raised, a shaft of light from a high window.", shot: "medium, hushed", motion: "kenburns-in",
              scene: "Old Simeon holding baby Jesus in the temple with eyes full of tears of joy, old Anna beside him with hands raised, a shaft of light from a high window." } },
          { text: "“You have kept your promise.”", caption: "Anna, 84, praised God and told everyone." },
          { text: "Who is God?", caption: "The God who keeps every promise — and came to be with us." }
        ],
        narration: "When Jesus was about six weeks old, Mary and Joseph took him to the temple in Jerusalem to dedicate him to God.\n\nIn the temple there was an old man called Simeon. Years before, God’s Spirit had promised him: ‘You will not die until you have seen the Saviour.’ So Simeon waited. Year after year. Like all of God’s people in the quiet years.\n\nThat day, the Spirit nudged him: ‘Go to the temple — now.’ He saw a young couple with a tiny baby — and he knew. He took Jesus in his arms, and with tears in his eyes he praised God: ‘Lord, I can die in peace, because you have kept your promise to me. With my own eyes I have seen what you have done to save your people.’\n\nThen an even older woman came over — Anna, eighty-four years old, who prayed in the temple day and night. She praised God, and told everyone who was waiting that the Saviour had come.\n\nAnd so we come to the end of the term, and the big question we started with: Who is God? He is the Creator. The Seeker who comes looking. Faithful. The Promise-Maker. In charge. The Rescuer. The Provider. The Shepherd. The Promise-Keeper. And in Jesus, he is our Saviour — God with us.",
        notes: "About 2 minutes. Mary and Joseph’s visit follows the Law of Moses (Luke 2:22–24). The ten ‘God is…’ words are this term’s weekly ‘God is’ words — display them if you can." },

      { type: "question", id: "th-q1", title: "Simeon’s promise", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "What had God’s Spirit promised Simeon?",
        options: ["He would become king", "He would not die until he had seen Christ the Lord", "He would be very rich", "He would see a rainbow"], answer: 1,
        hint: "Answer: B (Luke 2:26). Follow-up: ‘What did Simeon say when he held Jesus?’ (‘You have kept your promise.’) Follow-up 2: ‘How old was Anna?’ (84.) If silent: re-read the second scripture line." },

      { type: "question", id: "th-q2", title: "Who is God?", minutes: 1.5, level: "think", mode: "pair", seconds: 45,
        text: "Our big question this term was: “Who is God?” With your partner, list as many answers as you can from the ten weeks.",
        hint: "Weekly ‘God is’ words: Creator (W1), Seeker (W2), Faithful (W3), Promise-Maker (W4), In Charge (W5), Rescuer (W6), Provider (W7), Shepherd (W8), Promise-Keeper (W9), Saviour (W10). Also: holy, patient, forgiving, powerful, with us. Follow-up: ‘Which one matters most to you right now?’ Follow-up 2: ‘Which story helped you see it?’ If silent: give each pair two weeks to look back on." },

      { type: "recap", id: "th-recap", title: "Term 1’s Big Idea", minutes: 1.5,
        points: [
          "God made everything good — and when sin broke our friendship, he came looking.",
          "Through Noah, Abraham, Joseph, Moses and David, God rescued, provided and kept his promises.",
          "Every promise pointed to Jesus — the Saviour, God with us."
        ],
        notes: "This recap covers the whole term. Then the Big Idea for Week 10 stamps in." },

      { type: "question", id: "th-q3", title: "Worth the wait?", minutes: 1.5, level: "dig", mode: "vote", seconds: 30, skippable: true,
        text: "Agree or disagree: “Simeon and Anna’s long wait was worth it.”",
        options: ["Agree", "Disagree"],
        hint: "Most will agree — draw out WHY: God kept his promise; seeing Jesus was worth a lifetime; they waited faithfully (praying, serving) not grumpily. Follow-up: ‘What helped them keep waiting?’ Follow-up 2: ‘Are you waiting for anything from God? What can you learn from Simeon and Anna?’ If silent: recall Abraham’s 25-year wait." },

      { type: "challenge", id: "th-chal", title: "This Week’s Challenge", minutes: 2,
        text: "Tell someone. Like the shepherds and Anna, tell one person — at home, or a friend — one thing you have learned about God this term.",
        why: "“I have good news for you, which will make everyone happy.” — Luke 2:10",
        head: "God keeps every promise — Jesus is the Saviour.", heart: "Thank you, God, for good news.", hands: "Tell one person one thing about God.",
        takeHome: true,
        notes: "Term 2’s first Monday will check in on this." },

      { type: "verse", id: "th-verse", title: "Memory verse: fade-out", minutes: 1.5, activity: "fade",
        notes: "Fade out Luke 2:10–11. Bonus: can anyone say Genesis 1:1 from Week 1?" },

      { type: "scene", id: "th-scene", title: "Kept his promise", minutes: 1, optional: true,
        art: { key: "t1w10-cover" },
        boxes: [
          { text: "Who is God?", pos: "tl", style: "shout" },
          { text: "The God who keeps every promise — and came to be with us.", pos: "br", style: "caption" }
        ] },

      { type: "prayer", id: "th-pray", title: "A term of praise", minutes: 3, mood: "calm", style: "out-loud",
        tip: "Like Simeon and Anna, let’s finish the term by praising God together for everything we’ve learned about him.",
        opening: "Let’s pray together to finish Term 1. In the Wow part, anyone can call out one thing God is.",
        phases: [
          { name: "Wow", lead: "Call out one thing God is — from any week this term!",
            prompts: ["God, you are the Creator!", "God, you are our Shepherd! Our Rescuer! Our Saviour!"],
            starter: "God, you are…", seconds: 50, aloud: "God, you are Creator, Rescuer, Shepherd and Saviour!" },
          { name: "Sorry", lead: "Silently: anything you want to say sorry for before the holidays?",
            prompts: ["Sorry for…", "Thank you that you forgive (1 John 1:9)."],
            starter: "God, I’m sorry for…", seconds: 25, aloud: "God, we’re sorry — and we thank you that you forgive us." },
          { name: "Thanks", lead: "Pray Simeon’s words with me:",
            prompts: ["“You have kept your promise.”", "Thank you for Jesus."],
            starter: "Thank you, God, for…", seconds: 30, aloud: "Lord, you have kept your promise. Thank you for Jesus!" },
          { name: "Please", lead: "Pray for the holidays — rest, safety, and growing closer to God.",
            prompts: ["Please keep us safe in the holidays.", "Please help me keep praying."],
            starter: "Please, God, help…", seconds: 35, aloud: "Please, God, keep us safe and close to you over the holidays." }
        ],
        closing: "Let’s say Luke 2:10–11 together as our final prayer of Term 1. Amen!",
        notes: "Celebrate! Consider a small treat or certificate for memory-verse champions." }
    ] }
  ]
};
