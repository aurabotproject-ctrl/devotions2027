/* Morninglight 2027 — Term 4 Week 1: Peter and John: Bold Because of the Spirit (Acts 1:8; 2; 3:1–10; 4:1–22). Scripture: CEV. */
window.DEVOTIONS = window.DEVOTIONS || {};
window.DEVOTIONS["Term 4"] = window.DEVOTIONS["Term 4"] || {};
window.DEVOTIONS["Term 4"]["Week 1"] = {
  lessonTitle: "Peter and John: Bold Because of the Spirit",
  passage: "Acts 1:8; 2; 3:1–10; 4:1–22",
  bigIdea: "God gives his Holy Spirit to ordinary people, so they can boldly tell what Jesus has done — and when you have seen and heard what Jesus has done, you can’t keep quiet about it.",
  godIs: "Gives Power",
  memoryVerse: { ref: "Acts 4:20", text: "We cannot stop speaking about what we have seen and heard.", version: "CEV",
    chunks: ["We cannot", "stop speaking", "about what", "we have", "seen", "and heard."],
    actions: ["Shake your head — no way!", "Hand moving from your mouth outward — speaking", "Point forward — about what", "Both hands on your chest — we have", "Point to your eyes — seen", "Cup a hand behind your ear — heard"] },
  prayerFocus: { skill: "Praying boldly", tip: "Praying like the early church starts this week: boldly. Bold prayer is not loud prayer. It means talking to God honestly and confidently, because Jesus has opened the way, and asking for big things, such as the courage to speak up (Acts 4:29–31)." },
  mood: "fire",
  cover: "t4w01-cover",
  characters: ["peter", "john"],
  coverArt: { key: "t4w01-cover", label: "Week cover", desc: "Peter and John walking boldly up the temple steps in Jerusalem, a beam of light falling on them.", shot: "epic wide, low-angle",
    scene: "Peter and John stride side by side up the broad stone steps of the Jerusalem temple, seen from a low angle. Huge columns tower above them, crowds part around them, and a great beam of morning light falls across their path.", chars: ["peter", "john"] },
  comicArt: { key: "t4w01-comic", label: "Comic page (week opener)", format: "portrait", desc: "Six-panel comic page from Pentecost to the council.",
    panels: "Six panels. Panel 1 (wide): believers in an upper room as wind rushes in and flames of light appear above their heads. Panel 2 (small): a traveller's astonished face. Panel 3 (tall): Peter preaching from a high step to a huge crowd. Panel 4 (small): Peter's hand reaching down to a man by a temple gate. Panel 5 (wide): the man leaping for joy across the courtyard. Panel 6 (wide): Peter and John standing calmly before the frowning council.", chars: ["peter", "john"] },

  days: [

  /* ======================= MONDAY ======================= */
  { label: "Monday", theme: "Wind, Fire and Many Languages", roleplay: true, mood: "fire",
    learningIntentions: [
      "We are learning how Jesus kept his promise to send the Holy Spirit on the day of Pentecost.",
      "We are learning what changed for Jesus’ followers when the Spirit came.",
      "I can explain Jesus’ promise in Acts 1:8 in my own words."
    ],
    assessment: "Listen for students recalling that Jesus promised the Holy Spirit would give his followers power, that the Spirit came with a sound like wind and flames of light, that people heard the good news in their own languages, and that the frightened followers were changed.",
    resources: ["Screen", "Optional: a small paper fan or a sheet of paper to wave for “wind”", "Optional: red and orange paper strips for “flames”"],
    whereToNext: "Tomorrow: Peter stands up and speaks to the crowd, and about three thousand people believe in Jesus.",
    slides: [
      { type: "title", id: "m-title", title: "Wind, Fire and Many Languages", minutes: 0.5, kicker: "Term 4 · Week 1", sub: "Peter and John: Bold Because of the Spirit",
        art: { key: "t4w01-cover" }, notes: "Let the splash play. Today starts a new term and a new part of the Bible: the book of Acts, which tells what Jesus’ followers did next. Welcome the class warmly." },

      { type: "hook", id: "m-hook", title: "Can’t keep it in", minutes: 1.5,
        checkin: { text: "Welcome to Term 4! Our big question this term is “Trusting and Following Jesus: What does it look like to follow Jesus for real?” This term is about real people who followed Jesus, in the Bible, in history, and right here in Aotearoa. Last term finished with Two Men Who Prayed. Your challenge: pray one honest, humble prayer every day. Tell God the truth, ask for mercy, say thanks. How did it go?" },
        text: "Have you ever been so excited about good news that you just couldn’t keep it in?",
        ask: "What was it, and who was the first person you told?",
        hint: "Check-in first: welcome the class to Term 4, then ask two or three students how their honest, humble prayers went, and what they noticed. Then the hook: a new puppy, a goal in a game, a holiday plan. Land it: ‘Today a small group of frightened friends of Jesus get news and power they can’t keep inside.’" },

      { type: "scripture", id: "m-scr", title: "Acts 1:8 · 2:1–4", minutes: 1, ref: "Acts 1:8; 2:1–4", version: "CEV",
        lines: [
          { text: "But when the Holy Spirit comes upon you, you will be filled with power. Then you will tell everyone about me in Jerusalem, in all Judea, in Samaria, and everywhere in the world.", ref: "Acts 1:8" },
          { text: "On the day of Pentecost all the Lord’s followers were together in one place.", ref: "Acts 2:1" },
          { text: "Suddenly there was a noise from heaven like the sound of a mighty wind! It filled the house where they were meeting.", ref: "Acts 2:2" },
          { text: "Then they saw what looked like fiery tongues moving in all directions, and a tongue came and settled on each of them.", ref: "Acts 2:3" },
          { text: "The Holy Spirit took control of everyone, and they began speaking whatever languages the Spirit let them speak.", ref: "Acts 2:4" }
        ],
        emphasis: ["filled with power", "tell everyone about me", "mighty wind", "fiery tongues", "Holy Spirit"],
        notes: "Jesus said Acts 1:8 just before he went back to heaven. Pentecost is an old Jewish harvest festival, fifty days after Passover, when Jerusalem filled with visitors. The Holy Spirit is God himself, living in and working through people." },

      { type: "story", id: "m-story", title: "The Spirit comes", minutes: 3, transition: "page", mood: "fire",
        beats: [
          { text: "A promise, then a wait.", caption: "“You will be filled with power.”",
            art: { key: "t4w01d1-a", label: "Mon · story — wind and flames", desc: "The believers in an upstairs room as a rushing wind blows and small flames of light rest above each head.", shot: "wide, interior", motion: "kenburns-in", chars: ["peter", "john"],
              scene: "Inside a crowded upstairs room, about a hundred believers look up in wonder as a rushing wind sweeps through, robes and head cloths blowing. Small flickering tongues of flame-like light rest above each head, filling the room with brightness." } },
          { text: "Pentecost. Jerusalem is packed.", caption: "Visitors from all over the world." },
          { text: "A noise like a mighty wind.", caption: "Flames of light rest on each person.", shout: true },
          { text: "They speak languages they never learned.", caption: "And they burst out into the street.",
            art: { key: "t4w01d1-b", label: "Mon · role-play card — many languages", desc: "A huge festival crowd in the street, people from many nations amazed to hear the believers speaking their own languages.", shot: "wide, street level", motion: "kenburns-right", chars: [],
              scene: "In a packed Jerusalem street at festival time, travellers from many nations in different headwear and robes turn in amazement toward a balcony where the believers speak out joyfully. Faces show surprise, laughter and wonder; banners of light stream down." } },
          { text: "“What does this mean?”", caption: "Some are amazed. Some laugh." }
        ],
        narration: "Jesus has risen from the dead. For forty days he has appeared to his friends, and now it is time for him to return to his Father in heaven. On a hillside near Jerusalem he gives them a promise, and a job. ‘The Holy Spirit will come upon you, and you will be filled with power. Then you will tell everyone about me.’ Then Jesus is taken up into the sky, and a cloud hides him from sight.\n\nThe Holy Spirit is God himself, living and working inside people. So Jesus’ friends do exactly what he said. They go back to Jerusalem, to an upstairs room, and they wait and pray together. About a hundred and twenty of them are there. Peter is there, the fisherman who said three times that he didn’t even know Jesus. John is there too. Only a few weeks ago, they were hiding behind locked doors, afraid. Now they wait for a promise.\n\nTen days pass. Then comes Pentecost, an old Jewish harvest festival, and Jerusalem is packed with visitors from countries all over the world.\n\nSuddenly, a noise from heaven fills the whole house. It sounds like a mighty wind, roaring and rushing, though nothing is blowing in the street. Then they see what looks like tongues of fire, small flames of light, and one rests on each person. The Holy Spirit takes control of everyone, and they begin speaking in languages they have never learned.\n\nThey can’t keep it in! They hurry out of the house and into the street, praising God. And the crowd stops and stares. A traveller from Egypt hears his own language. Another from Parthia hears his. People from Crete, from Arabia, from Rome, all hear about the wonderful things God has done, in the language of their own home.\n\n‘What does this mean?’ they ask one another. But some people laugh and say, ‘They are drunk!’\n\nWho are these people? They are the same friends of Jesus who ran away on Good Friday. So what changed? Jesus kept his promise. The Holy Spirit came, and he filled them with power. Tomorrow, one man will stand up and speak to the whole crowd, and it will be the very man you least expect: Peter.",
        notes: "About 3 minutes. Documented in Acts 1–2: the promise, the wait, wind and flames of light, other languages, the crowd’s question and the mockers (2:13). The number 120 is in Acts 1:15. The places named (Egypt, Parthia, Crete, Arabia, Rome) are in Acts 2:9–11. Keep the Ascension simple: Jesus went back to his Father. Explain: the Holy Spirit is God with us and in us, not a ghost. Some students may find the idea of speaking in other languages unfamiliar; say it plainly and calmly." },

      { type: "question", id: "m-q1", title: "What did they see?", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "What came to rest on each of Jesus’ followers at Pentecost?",
        options: ["Small flames of light", "Falling stones", "White doves", "Drops of rain"], answer: 0,
        hint: "Answer: A, what looked like fiery tongues, small flames of light (Acts 2:3). Follow-up: ‘What did they hear first?’ (A noise like a mighty wind.) Follow-up 2: ‘What began to happen when the Spirit filled them?’ (They spoke in other languages.) If silent: re-read Acts 2:2–4 together." },

      { type: "question", id: "m-q2", title: "From afraid to brave", minutes: 1.5, level: "think", mode: "pair", seconds: 45, skippable: true,
        text: "A few weeks earlier, Jesus’ friends were hiding behind locked doors. Why do you think the Holy Spirit made such a difference to them?",
        hint: "Good answers: Jesus’ promise gave them power they didn’t have by themselves; they knew God was with them; they weren’t alone any more; they had good news they couldn’t keep in. Follow-up: ‘What changes when you know someone is with you?’ Follow-up 2: ‘Who did Jesus say would give them power?’ If silent: ask when a friend beside them made something scary easier." },

      { type: "roleplay", id: "m-rp", title: "The Day of Pentecost", minutes: 5, ref: "Acts 1:8; 2:1–13",
        art: { key: "t4w01d1-b" },
        imagined: "Jesus’ words are Acts 1:8 (CEV). The wind, the flames, the travellers’ amazement, “What does this mean?” and the mocking “drunk” remark come from Acts 2. The conversation between Peter and John in the upper room, Peter’s shaking, and the names “Traveller from Egypt” and “Traveller from Parthia” are imagined framing. Peter denying Jesus is in the Gospels (Luke 22:54–62).",
        actions: ["Everyone: be the wind, whoosh with your voice and sweep your arms", "Everyone: flames above your head, wiggle your fingers upward"],
        props: ["Optional: a sheet of paper or small fan to wave for wind", "Optional: red and orange paper strips as flames"],
        characters: [
          { name: "Narrator", color: "#F2C77B", desc: "Tells the story" },
          { name: "Jesus", voice: true, desc: "Heard in the believers’ memory — teacher or a calm, strong reader" },
          { name: "Peter", color: "#7BA7D9", desc: "A fisherman who let Jesus down — nervous, then bold" },
          { name: "John", color: "#8BC34A", desc: "Younger and steady — hopeful and loyal" },
          { name: "Traveller from Egypt", color: "#FFB547", desc: "A visitor to Jerusalem — amazed" },
          { name: "Traveller from Parthia", color: "#C5A3E0", desc: "Another visitor — curious and delighted" },
          { name: "Local Mocker", color: "#E57373", desc: "A Jerusalem resident who doesn’t get it" },
          { name: "Everyone", color: "#FFFFFF", desc: "Believers, wind and the crowd in the street" }
        ],
        lines: [
          { character: "Narrator", text: "An upstairs room in Jerusalem. Jesus has gone back to heaven. About a hundred and twenty followers wait and pray.", direction: true },
          { character: "Jesus", text: "But when the Holy Spirit comes upon you, you will be filled with power." },
          { character: "Jesus", text: "Then you will tell everyone about me in Jerusalem, in all Judea, in Samaria, and everywhere in the world." },
          { character: "John", text: "That was ten days ago, Peter. I keep hearing his voice. Do you think we’re ready?" },
          { character: "Peter", text: "Ready? I said three times I didn’t know him, John. I’m not sure I’m ready for anything.", action: "look at the floor" },
          { character: "John", text: "He promised us power. He never breaks a promise. So we wait, and we pray.", action: "put a hand on Peter’s shoulder" },
          { character: "Narrator", text: "Then comes the day of Pentecost. Suddenly there is a noise from heaven." },
          { character: "Everyone", text: "Whooosh! A mighty rushing wind!", action: "sweep arms, wind noise" },
          { character: "Peter", text: "Look above your head, John! It looks like fire, but it doesn’t burn!", action: "stare up, amazed" },
          { character: "John", text: "The Holy Spirit! He has come, just like Jesus said!", action: "arms up, wiggle fingers like flames" },
          { character: "Narrator", text: "The Spirit fills them all, and they hurry into the street, speaking languages they have never learned." },
          { pause: "Freeze! Imagine you are a visitor from far away, and you hear your own language from a stranger. What would you feel?", seconds: 20 },
          { character: "Traveller from Egypt", text: "Wait! These men are all from Galilee, aren’t they? But I hear my own language!", action: "turn to the crowd" },
          { character: "Traveller from Parthia", text: "And I hear mine! They’re telling us about the wonderful things God has done!", action: "eyes wide" },
          { character: "Everyone", text: "How can this be?", action: "turn to each other, amazed" },
          { character: "Traveller from Egypt", text: "What does all this mean?" },
          { character: "Local Mocker", text: "It means they’ve had too much wine, that’s all!", action: "wave a hand, laugh" },
          { character: "Peter", text: "John, I’m shaking. But it’s not from fear this time. Something has changed inside me.", action: "hand on chest" },
          { character: "John", text: "Then let’s tell them, Peter. Whatever Jesus has done, they need to hear it." },
          { character: "Narrator", text: "Tomorrow, Peter will stand up and speak. But today, everyone is wondering: what does this mean?" },
          { character: "Everyone", text: "Filled with power! Ready to tell!", action: "stand tall, hands up" }
        ],
        debrief: [
          { level: "think", text: "Peter said, “I’m not sure I’m ready for anything.” What changed for him when the Spirit came?", hint: "He wasn’t shaking from fear any more. The Holy Spirit gave him power and courage, just as Jesus promised in Acts 1:8. God didn’t wait for Peter to be perfect first." },
          { level: "look", text: "What did the travellers hear when the believers spoke?", hint: "They each heard their own language, telling about the wonderful things God has done. God wanted the good news to reach people from every place." }
        ],
        notes: "Jesus’ two speeches are the CEV text of Acts 1:8. Wind, flames, languages, the crowd’s question and the mockers’ remark are all in Acts 2:1–13. The upper-room conversation and names of the two travellers are imagined. Let the wind be big and silly, and stop the noise quickly when the pause comes. Peter can show shaking hands, but make sure he ends the scene ready, not afraid." },

      { type: "question", id: "m-q3", title: "Power for what?", minutes: 1, level: "dig", mode: "discuss", seconds: 40,
        text: "Jesus said the Spirit would give his followers power so they could tell everyone about him. Why do you think God gave power for telling, and not just for feeling strong?",
        hint: "Ideas: the good news is for everyone; it’s too good to keep to ourselves; God’s power is for others, not for showing off; we need his help to speak. Follow-up: ‘What kind of power was it: muscle power, or something else?’ Follow-up 2: ‘Who did Jesus say should hear?’ (Everyone, everywhere.) If silent: ask what good news they’d want to tell a friend." },

      { type: "apply", id: "m-apply", title: "Head · Heart · Hands", minutes: 1,
        head: "Jesus keeps his promises: he gave his followers the Holy Spirit and the power to tell others about him.",
        heart: "God, thank you that I don’t have to be brave on my own.",
        hands: "Notice one moment today when you feel nervous, and say quietly: “God, I need your help.” Then do the next small thing.",
        settings: ["home", "school", "sport"],
        notes: "Keep it small and doable. We aren’t asking anyone to be loud. The hands step is a short, honest prayer asking for help." },

      { type: "scene", id: "m-scene", title: "Wind and flames", minutes: 0.5, optional: true,
        art: { key: "t4w01d1-a" },
        boxes: [
          { text: "“You will be filled with power.”", pos: "tl", style: "speech" },
          { text: "The Holy Spirit took control of everyone.", pos: "br", style: "caption" }
        ] },

      { type: "verse", id: "m-verse", title: "Memory verse peek", minutes: 1, optional: true, activity: "echo",
        notes: "Introduce Acts 4:20. Echo each chunk: say it, they say it back. Tell them that on Thursday we will find out who said these words and why." },

      { type: "prayer", id: "m-pray", title: "Praying boldly — open hands", minutes: 3, mood: "calm", style: "hands",
        tip: "This term we learn to pray like the early church. This week: praying boldly. Bold prayer is honest, confident prayer. Open hands show we are ready to receive what God promises, just as the believers waited for the Spirit.",
        opening: "Hold your hands out in front of you, open, like the believers waiting in the upstairs room. Take a slow breath.",
        phases: [
          { name: "Wow", lead: "Look at your open hands. God keeps his promises.",
            prompts: ["God, you sent your Holy Spirit with wind and fire, just as Jesus promised.", "God, you are strong enough to change frightened people into brave ones."],
            starter: "Wow, God, you are…", seconds: 35, aloud: "Wow, God, you keep your promises, and you send your Spirit!" },
          { name: "Sorry", lead: "Turn your hands over, palms down. Sorry for times we’ve hidden, like the disciples behind locked doors.",
            prompts: ["Sorry for the times I stay quiet when I should speak up for what is right.", "Sorry for forgetting that you are with me when I feel afraid."],
            starter: "God, I’m sorry for…", seconds: 30, aloud: "God, we’re sorry for the times we hide when we feel afraid." },
          { name: "Thanks", lead: "Palms up again. Thank God for what he has already given.",
            prompts: ["Thank you for the Holy Spirit, who is with Jesus’ friends everywhere.", "Thank you that Peter got a fresh start after he let Jesus down."],
            starter: "Thank you, God, for…", seconds: 30, aloud: "Thank you, God, for your Spirit and for fresh starts." },
          { name: "Please", lead: "Pray boldly. Ask God for something big and good.",
            prompts: ["Please help me to be brave when I feel nervous this week.", "Please fill me with your Spirit’s power, like Jesus promised."],
            starter: "Please, God, give…", seconds: 35, aloud: "Please, God, give us courage and fill us with your Spirit." }
        ],
        closing: "Close your hands gently, like you’re holding a gift. Everyone: Amen.",
        notes: "Explain boldly simply: bold doesn’t mean loud or pushy. It means honest and not afraid to ask. Some students may be nervous about praying aloud: silent prayers are completely fine." }
    ] },

  /* ======================= TUESDAY ======================= */
  { label: "Tuesday", theme: "Peter Preaches", roleplay: false, mood: "dawn",
    learningIntentions: [
      "We are learning what Peter said to the crowd on the day of Pentecost.",
      "We are learning why about three thousand people believed in Jesus that day.",
      "I can explain what Peter told the crowd to do (Acts 2:38)."
    ],
    assessment: "Listen for students explaining that Peter was the same man who had denied Jesus, that his message was that God raised Jesus and made him Lord and Messiah, that the crowd asked what to do, and that Peter said to turn back to God and be baptised.",
    resources: ["Screen", "Small cards or sticky notes", "Pens"],
    whereToNext: "Tomorrow: Peter and John go to the temple and meet a man who has never walked.",
    slides: [
      { type: "title", id: "t-title", title: "Peter Preaches", minutes: 0.5, kicker: "Term 4 · Week 1", sub: "Peter and John: Bold Because of the Spirit",
        art: { key: "t4w01d2-a" }, notes: "Let the splash play." },

      { type: "hook", id: "t-recap", title: "Recap", minutes: 1, style: "recap",
        text: "Yesterday the Holy Spirit came with wind and flames of light, and the believers spoke in languages from all over the world.",
        ask: "What question did the crowd ask, and who do you think will answer it?",
        hint: "The crowd asked ‘What does this mean?’ and some people laughed. Take two or three answers. ‘Today we hear Peter’s answer, and it is the bravest speech of his life.’" },

      { type: "scripture", id: "t-scr", title: "Acts 2:36–38, 41", minutes: 1, ref: "Acts 2:36–41", version: "CEV",
        lines: [
          { text: "Everyone in Israel should then know for certain that God has made Jesus both Lord and Messiah.", ref: "Acts 2:36" },
          { text: "When the people heard this, they were so upset that they asked Peter and the other apostles, “What shall we do?”", ref: "Acts 2:37" },
          { text: "Peter said, “Turn back to God! Be baptized in the name of Jesus Christ, so that your sins will be forgiven. Then you will be given the Holy Spirit.”", ref: "Acts 2:38" },
          { text: "Many of them accepted Peter’s message and were baptized. That day about three thousand people were added to the group of followers.", ref: "Acts 2:41" }
        ],
        emphasis: ["Lord and Messiah", "Turn back to God", "forgiven", "three thousand"],
        notes: "Messiah is the Hebrew word for God’s promised King, the Chosen One (Christ is the Greek word). Baptized means dipped in water, a picture of being washed clean and starting again with Jesus. Apostles are Jesus’ twelve closest followers, whom he sent out." },

      { type: "story", id: "t-story", title: "Peter speaks up", minutes: 3.5, transition: "page", mood: "dawn",
        beats: [
          { text: "Peter stands up.", caption: "The man who once said, “I don’t know him.”",
            art: { key: "t4w01d2-a", label: "Tue · story — Peter preaches", desc: "Peter standing on a high step, arm outstretched, preaching to a vast crowd about Jesus.", shot: "low-angle, dramatic", motion: "kenburns-up", chars: ["peter", "john"],
              scene: "Peter stands on a high stone step with one arm stretched out, speaking boldly to a vast crowd that fills the square below. John and the other apostles stand behind him. Sunlight breaks through clouds onto the listening faces." } },
          { text: "“These people are not drunk.”", caption: "“It’s only nine in the morning!”" },
          { text: "The big news about Jesus.", caption: "God raised him to life. He is Lord and Messiah.", shout: true },
          { text: "“What should we do?”", caption: "“Turn back to God. Be baptised. You’ll be forgiven.”" },
          { text: "About three thousand believe.", caption: "A church of thousands in one day.",
            art: { key: "t4w01d2-b", label: "Tue · 3,000 believe", desc: "People lining up to be baptised at the pools outside the temple, others praying and embracing.", shot: "wide, golden light", motion: "kenburns-left", chars: [],
              scene: "Beside large stepped stone pools near the temple, long lines of people wait joyfully to be baptised. In the water an apostle helps a young man up, dripping and smiling; families embrace on the steps as the late sun turns everything golden." } }
        ],
        narration: "It is the morning of Pentecost, and the street outside the upstairs room is packed. People are amazed, and some are laughing at the believers. Then someone stands up. It is Peter.\n\nRemember Peter? A few weeks ago, he said three times, ‘I don’t know him.’ Now he stands in front of thousands of people, with the eleven other apostles beside him, and his voice rings out across the street.\n\n‘These people are not drunk,’ says Peter. ‘It’s only nine o’clock in the morning!’ A few people chuckle. Then he gets serious. What they are seeing, he says, is exactly what God promised long ago through a prophet called Joel: that one day God would pour out his Spirit on all kinds of people, young and old, men and women.\n\nThen Peter does the bravest thing of all. He tells them about Jesus. Jesus from Nazareth did amazing miracles, and God showed everyone through those miracles that Jesus came from him. Many in the crowd had seen it with their own eyes. Peter reminds them of the old promises, too: long ago, God’s prophets said that a King, chosen by God, would come, and that death could not hold him. Peter says plainly that Jesus was put to death on a cross, but that was not the end. God raised him back to life! ‘We have all seen him,’ says Peter. ‘We are witnesses.’ A witness is someone who tells what they have seen with their own eyes.\n\n‘So everyone should know for certain,’ says Peter, ‘that God has made Jesus both Lord and Messiah.’ Messiah means God’s promised King, the Chosen One, and Lord means he is in charge of everything.\n\nThe crowd goes very quiet. Peter’s words have gone deep into their hearts. ‘What should we do?’ they ask.\n\nAnd listen to Peter’s answer. It isn’t ‘Too late!’ It’s good news. ‘Turn back to God! Be baptised in the name of Jesus, so that your sins will be forgiven. Then you will be given the Holy Spirit.’ Baptised means being dipped or washed in water, a picture of being made clean and starting again. And the promise, says Peter, is for you, for your children, and for everyone far away. That means us, too.\n\nThat day, about three thousand people believed and were baptised. A little group of a hundred and twenty became a church of thousands in a single day. They gathered to learn, to share meals, and to pray together, and no one who believed was left on their own. And the difference was not Peter’s courage. It was Jesus, and the Holy Spirit, working through an ordinary fisherman.",
        notes: "About 3½ minutes. Documented in Acts 2:14–41: the nine o’clock remark, Joel’s promise, Jesus’ miracles, the cross and resurrection, “Lord and Messiah”, the crowd’s question, Peter’s answer, about three thousand baptised. Handle the cross gently and plainly. Peter, Jesus and every early believer were Jewish, and Peter is speaking to fellow Jews in Jerusalem; this must never become blaming any people today. Peter himself had let Jesus down, and Jesus forgave him. Be sensitive to students from other faith backgrounds: this is what Peter said that day, and we are learning what Christians believe." },

      { type: "dig", id: "t-dig", title: "Same Peter?", minutes: 2,
        prompt: "Compare Peter on Good Friday with Peter at Pentecost. What changed?",
        columns: ["Good Friday Peter", "Pentecost Peter"],
        items: [
          { left: "Hid in the shadows", right: "Stood up in front of thousands" },
          { left: "Said, “I don’t know him”", right: "Said, “God has made Jesus both Lord and Messiah”" },
          { left: "Afraid of what people would say", right: "Spoke out clearly and kindly" },
          { left: "On his own and ashamed", right: "Filled with the Holy Spirit, forgiven and free" }
        ],
        reveal: "Same Peter. What changed wasn’t his courage: it was that Jesus forgave him and the Holy Spirit filled him.",
        notes: "Reveal row by row. Peter’s denial is in the Gospels (Luke 22:54–62), and Jesus’ forgiveness of Peter is in John 21. After the last row ask: ‘Where did Peter’s boldness come from?’" },

      { type: "question", id: "t-q1", title: "How many believed?", minutes: 1, level: "look", mode: "finish", seconds: 20,
        text: "Finish the sentence: “That day about ________ people were added to the group of followers.”",
        reveal: "“…three thousand.” (Acts 2:41)",
        hint: "Answer: three thousand. Follow-up: ‘What did Peter tell the crowd to do?’ (Turn back to God and be baptised.) Follow-up 2: ‘What would they be given?’ (Forgiveness of sins and the Holy Spirit.) If silent: point to the last scripture line." },

      { type: "question", id: "t-q2", title: "Good news to run to", minutes: 1.5, level: "think", mode: "silent", seconds: 40,
        text: "The crowd asked, “What shall we do?” Why do you think Peter’s answer, “Turn back to God, and you will be forgiven,” was such good news?",
        hint: "Good answers: it wasn’t too late; they could start again; forgiveness is free; God wanted them back; Jesus had died and risen for them. Follow-up: ‘How does it feel to be forgiven?’ Follow-up 2: ‘What does this say about how God sees people?’ If silent: give 20 seconds of quiet thinking, then ask for one idea." },

      { type: "question", id: "t-q3", title: "Who is it for?", minutes: 1.5, level: "dig", mode: "discuss", seconds: 40, skippable: true,
        text: "Peter said God’s promise was for the crowd, for their children, and for everyone far away. Who do you think “everyone far away” includes?",
        hint: "Ideas: people in other countries, and people living long after them, which includes us; no one is too far from God; God’s promise isn’t only for one group. Follow-up: ‘How far away are we from Jerusalem?’ Follow-up 2: ‘What does this say about God’s welcome?’ If silent: ask them to look at a map of the world and name a faraway place." },

      { type: "apply", id: "t-apply", title: "Head · Heart · Hands", minutes: 2,
        head: "Peter told the crowd about Jesus, and anyone who turns back to God is forgiven and welcomed.",
        heart: "Jesus, thank you that it’s never too late to start again with you.",
        hands: "Think of one thing Jesus has done: in a Bible story, for someone you know, or for you. Write it in one sentence on a card, and keep it for Thursday.",
        settings: ["home", "class", "bedtime"],
        notes: "Hand out cards. Help students find a “Jesus has done…” sentence: forgave sins, healed people, calmed storms, rose from the dead, answered a prayer, brought comfort. Some students may not have a story of their own yet. Bible stories are perfect. This card leads into Thursday’s challenge." },

      { type: "scene", id: "t-scene", title: "Three thousand", minutes: 1, optional: true,
        art: { key: "t4w01d2-b" },
        boxes: [
          { text: "“Turn back to God!”", pos: "tl", style: "shout" },
          { text: "About three thousand people were added to the group of followers.", pos: "br", style: "caption" }
        ] },

      { type: "verse", id: "t-verse", title: "Build the verse", minutes: 1, activity: "build",
        notes: "Build Acts 4:20 chunk by chunk. Remind them: Peter said something like this very soon, to the very leaders who had put Jesus on trial." },

      { type: "prayer", id: "t-pray", title: "Praying boldly — write it", minutes: 3, mood: "calm", style: "write",
        tip: "Write a bold prayer on your card or in your book. Bold prayers say true things and ask for big things, just like Peter’s speech.",
        opening: "Take your pen. At the top, write: “God, I want to speak to you boldly.”",
        phases: [
          { name: "Wow", lead: "Write one line about who God is.",
            prompts: ["God, you raised Jesus from the dead, and you are stronger than anything.", "God, you forgive, and you welcome everyone who turns back to you."],
            starter: "God, you are…", seconds: 35, aloud: "God, you raised Jesus to life, and you welcome everyone." },
          { name: "Sorry", lead: "Silently: where do you need to turn back to God?",
            prompts: ["Sorry for the times I’ve turned away from you.", "Sorry for the times I let you down, like Peter, and thank you for forgiving."],
            starter: "God, I’m sorry for…", seconds: 25, aloud: "God, we’re sorry for turning away, and thank you for forgiving us." },
          { name: "Thanks", lead: "Write three things Jesus has done that you’re thankful for.",
            prompts: ["Thank you, Jesus, for dying and rising again so my sins can be forgiven.", "Thank you for the Holy Spirit, who gives courage to your followers."],
            starter: "Thank you for…", seconds: 40, aloud: "Thank you, Jesus, for forgiveness and a fresh start." },
          { name: "Please", lead: "Write one bold request: for yourself, and for one person you know.",
            prompts: ["Please help me to be brave about what I’ve seen of Jesus.", "Please let (a friend’s name) hear good news about Jesus."],
            starter: "Please give…", seconds: 35, aloud: "Please, God, give us courage, and let our friends hear good news." }
        ],
        closing: "Fold your page and keep it in your pocket. Amen!",
        notes: "Students keep their writing private. If a student can’t think of a friend to pray for, they can pray for the whole class." }
    ] },

  /* ======================= WEDNESDAY ======================= */
  { label: "Wednesday", theme: "The Man at the Beautiful Gate", roleplay: true, mood: "temple",
    learningIntentions: [
      "We are learning how God used Peter and John to help a man who had never walked.",
      "We are learning why Peter said “In the name of Jesus” and what that shows us about where the power comes from.",
      "I can say what Peter and John gave the man, and why it was better than money."
    ],
    assessment: "Listen for students explaining that the man asked for money but received healing, that Peter and John had no silver or gold, and that the power came from Jesus’ name and not from the apostles themselves.",
    resources: ["Screen", "Optional: a woven mat or a towel to be the man’s mat", "Optional: a small bowl"],
    whereToNext: "Tomorrow: Peter and John face the council — and say, “We cannot stop speaking about what we have seen and heard.”",
    slides: [
      { type: "title", id: "w-title", title: "The Man at the Beautiful Gate", minutes: 0.5, kicker: "Term 4 · Week 1", sub: "Peter and John: Bold Because of the Spirit",
        art: { key: "t4w01d3-a" }, notes: "Let the splash play." },

      { type: "hook", id: "w-hook", title: "What I do have", minutes: 1,
        text: "Imagine a friend is in trouble and you don’t have any money or a fancy gift to give them.",
        ask: "What could you still give them? What do you have?",
        hint: "Take two or three ideas: time, a listening ear, a kind word, a prayer, an invitation to join in. Recap: ‘Yesterday Peter preached and three thousand believed. Today Peter and John meet one man who needs something money can’t buy.’" },

      { type: "scripture", id: "w-scr", title: "Acts 3:6–8", minutes: 1, ref: "Acts 3:6–8", version: "CEV",
        lines: [
          { text: "Peter said, “I don’t have any silver or gold! But I’ll give you what I do have. In the name of Jesus Christ from Nazareth, get up and walk.”", ref: "Acts 3:6" },
          { text: "Peter then took him by the right hand and helped him up. At once the man’s feet and ankles became strong.", ref: "Acts 3:7" },
          { text: "He jumped up, stood on his feet, and started walking. He went with Peter and John into the temple, walking and jumping and praising God.", ref: "Acts 3:8" }
        ],
        emphasis: ["silver or gold", "In the name of Jesus Christ", "get up and walk", "praising God"],
        notes: "The temple was the place where Jewish people went to pray; the early believers still went there. “In the name of” means with the power and authority of that person." },

      { type: "story", id: "w-story", title: "At the Beautiful Gate", minutes: 3, transition: "page", mood: "temple",
        beats: [
          { text: "Three o’clock, the hour of prayer.", caption: "Peter and John walk up to the temple.",
            art: { key: "t4w01d3-a", label: "Wed · story — the man at the gate", desc: "Peter and John looking down at a man who cannot walk, sitting by the ornate temple gate holding out a bowl.", shot: "medium, from the man's eye level", motion: "kenburns-in", chars: ["peter", "john"],
              scene: "At the tall ornate Beautiful Gate of the temple, a thin man who has never walked sits on a mat holding up a begging bowl. Peter and John stop and look straight at him, Peter reaching out a strong open hand toward him." } },
          { text: "A man who has never walked.", caption: "Carried to the gate every day to beg." },
          { text: "“Look at us.”", caption: "He holds out his bowl, hoping for coins." },
          { text: "“In the name of Jesus… get up and walk!”", caption: "Peter takes his hand.", shout: true },
          { text: "He leaps. He walks. He praises God.", caption: "And everyone stares.",
            art: { key: "t4w01d3-b", label: "Wed · role-play card — walking and leaping", desc: "The healed man jumping for joy through the temple courts while people stare in amazement.", shot: "wide, speed lines", motion: "kenburns-left", chars: ["peter", "john"],
              scene: "The healed man leaps and jumps through the temple courtyard with his arms flung up in joy, his old mat left behind on the ground. Peter and John follow, smiling, and astonished worshippers turn and point, speed lines streaking behind him." } }
        ],
        narration: "After Pentecost, the believers couldn’t stop meeting together. They shared their food, they prayed, they learned from the apostles, and every day more people joined them. They still went to the temple too, because they were Jewish, and the temple was where Jewish people went to pray.\n\nOne afternoon, around three o’clock, Peter and John are walking up to the temple for the afternoon prayer time. Crowds are streaming in. And there, beside one of the grandest gates, the one called the Beautiful Gate, sits a man on a mat.\n\nEvery morning, some friends carry this man to the gate and put him down, because he has never been able to walk. He has been unable to walk since the day he was born. All day long he holds out a bowl and asks everyone who passes for a few coins. Hundreds of people hurry by. Many don’t even look down.\n\nPeter and John come to the gate. The man holds out his bowl, as he always does. And Peter stops. He looks straight at him. John does too. ‘Look at us,’ says Peter.\n\nThe man looks up, hopeful. He is expecting money.\n\nBut Peter says, ‘I don’t have any silver or gold! But I’ll give you what I do have. In the name of Jesus Christ from Nazareth, get up and walk!’\n\nThen Peter takes the man’s right hand and helps him up. And at that very moment, the man’s feet and ankles become strong! He jumps to his feet. He takes a step. Then another! He is standing! He is walking! Then he is leaping, right through the gate and into the temple, praising God at the top of his voice.\n\nEveryone who has ever walked past that gate knows who he is. They stare. They whisper. ‘Isn’t that the man who always sat and begged at the Beautiful Gate?’ They are amazed, and they can hardly believe it.\n\nNotice what Peter and John did not say. They did not say, ‘Watch what we can do.’ They said the name of Jesus. They had no silver or gold, but they had something far better to give, because Jesus was with them. Peter, the man who once ran away, stopped, looked at a man everyone else ignored, and gave him everything he had.",
        notes: "About 3 minutes. Documented in Acts 3:1–10. The time (three o’clock, the hour of prayer), the gate, the carrying and begging, Peter’s words and the healing all come from the text. Say calmly that the man had not been able to walk from birth; avoid pity language, and portray him with dignity. Sensitive: some students or family members may have a disability. Keep the focus on Jesus’ power and the man’s joy, and not on being “fixed”. We don’t suggest that every prayer for healing is answered in the same way." },

      { type: "question", id: "w-q1", title: "What did Peter say?", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "What did Peter say he did have to give the man?",
        options: ["Silver and gold", "A new house", "The name of Jesus Christ", "A job at the temple"], answer: 2,
        hint: "Answer: C, he gave the man what he did have: ‘In the name of Jesus Christ from Nazareth, get up and walk’ (Acts 3:6). Follow-up: ‘What did Peter not have?’ (Silver or gold.) Follow-up 2: ‘What did the man do when he stood up?’ (Walked, jumped and praised God.) If silent: re-read the first scripture line." },

      { type: "roleplay", id: "w-rp", title: "At the Beautiful Gate", minutes: 5, ref: "Acts 3:1–10",
        art: { key: "t4w01d3-b" },
        imagined: "Peter’s words in 3:4 and 3:6, the man’s walking and praising, and the crowd’s astonishment are from Acts 3 (CEV). The man’s feelings and his everyday lines, his friend who carries him, the passer-by’s comments and John’s encouraging remarks are imagined. The characters’ names are descriptive only.",
        actions: ["Everyone: pretend to walk past the gate without looking down", "Everyone: leap and cheer when the man stands up"],
        props: ["Optional: a mat or towel for the man to sit on", "Optional: a small bowl for coins"],
        characters: [
          { name: "Narrator", color: "#F2C77B", desc: "Tells the story" },
          { name: "Peter", color: "#7BA7D9", desc: "Strong and kind — looks right at the man" },
          { name: "John", color: "#8BC34A", desc: "Younger and steady — stays close to Peter" },
          { name: "Man at the Gate", color: "#FFB547", desc: "Has begged here for years — tired, then overjoyed" },
          { name: "Friend", color: "#C5A3E0", desc: "The friend who carries him to the gate each day" },
          { name: "Worshipper", color: "#B0BEC5", desc: "A temple-goer who recognises the man" },
          { name: "Everyone", color: "#FFFFFF", desc: "The crowd at the gate" }
        ],
        lines: [
          { character: "Narrator", text: "The temple in Jerusalem, three o’clock. Crowds pour through the Beautiful Gate. A man sits on a mat with a bowl.", direction: true },
          { character: "Friend", text: "Here you are. Same spot as always. I’ll be back this evening.", action: "set down the mat gently" },
          { character: "Man at the Gate", text: "Thank you, my friend. Coins for the bowl, please. Anything helps.", action: "hold out the bowl" },
          { character: "Everyone", text: "Hurry, hurry, we’ll be late for prayers!", action: "walk briskly past, not looking down" },
          { character: "Worshipper", text: "Sorry, not today.", action: "keep walking" },
          { character: "Narrator", text: "Then two men stop. Peter and John." },
          { character: "Peter", text: "Look at us.", action: "bend down, look straight at him" },
          { character: "Man at the Gate", text: "They’re looking at me! Maybe they’ll give me something.", action: "hold the bowl higher" },
          { character: "Peter", text: "I don’t have any silver or gold! But I’ll give you what I do have." },
          { character: "Peter", text: "In the name of Jesus Christ from Nazareth, get up and walk!", action: "reach out his right hand" },
          { character: "John", text: "Take his hand. Jesus is with us.", action: "stand close, smiling" },
          { pause: "Freeze! The man has never walked in his life. What do you think he feels in his feet at this very moment?", seconds: 20 },
          { character: "Man at the Gate", text: "My feet! My ankles! They’re strong!", action: "stare down at his feet" },
          { character: "Man at the Gate", text: "I’m standing! I’m walking! Look at me!", action: "walk, then leap" },
          { character: "Everyone", text: "He’s walking! He’s leaping!", action: "cheer, point, jump" },
          { character: "Man at the Gate", text: "Praise God! Praise God! Thank you, Jesus!", action: "arms flung up" },
          { character: "Worshipper", text: "Isn’t that the man who always sat at the Beautiful Gate? How can it be?", action: "stare, amazed" },
          { character: "Friend", text: "He’s walking! He’s walking, and he’s praising God!", action: "hands to cheeks" },
          { character: "John", text: "It isn’t our power. It’s the name of Jesus.", action: "smile and gesture upward" },
          { character: "Narrator", text: "The man went into the temple with Peter and John, walking and jumping and praising God." },
          { character: "Everyone", text: "In the name of Jesus!", action: "everyone leaps once together" }
        ],
        debrief: [
          { level: "think", text: "The man asked for coins. What did he get instead, and why was it better?", hint: "He asked for money but got a new life: strong feet, and a chance to walk, work and worship. Peter and John gave what they did have, the power of Jesus." },
          { level: "look", text: "What did the crowd do when they saw him?", hint: "They stared, recognised him as the man from the Beautiful Gate, and were amazed. Everyone could see what had happened." }
        ],
        notes: "Peter’s words are the CEV text of Acts 3:6. Everything else is imagined framing around Acts 3:1–10. The man should be played with dignity: tired but hopeful at the start and overjoyed at the end, never a joke. Let the leaping be big but safe. Remind students that Peter and John say it is Jesus’ name and not their own power." },

      { type: "question", id: "w-q2", title: "A better gift", minutes: 1.5, level: "think", mode: "pair", seconds: 45,
        text: "Peter and John had no silver or gold, but they gave the man something better. What does that tell us about the kind of things that really matter?",
        hint: "Good answers: friendship, health, hope and joy are worth more than money; Jesus’ power matters more than anything we own; we can give others what we do have, like time and kindness. Follow-up: ‘What did the man want?’ Follow-up 2: ‘What did Jesus want for him?’ If silent: ask what they would rather have, a coin or strong legs." },

      { type: "question", id: "w-q3", title: "Whose power?", minutes: 1, level: "dig", mode: "vote", seconds: 30, skippable: true,
        text: "Agree or disagree: “Peter and John healed the man because they were very powerful people.”",
        options: ["Agree", "Disagree"],
        hint: "Disagree: they said it was in the name of Jesus, and later Peter said it was faith in Jesus’ name (Acts 3:16). Follow-up: ‘Why did they keep saying Jesus’ name?’ Follow-up 2: ‘What does that show us about who gives power?’ (God does; he gives it to ordinary people.) If silent: ask who got the credit in the story." },

      { type: "apply", id: "w-apply", title: "Head · Heart · Hands", minutes: 1,
        head: "We may not have silver or gold, but we can give what we do have, because Jesus is with us.",
        heart: "Jesus, show me someone who needs what I can give.",
        hands: "Look for someone today who is on their own or sitting out. Give them what you do have: a smile, an invitation to join in, or a kind word.",
        settings: ["home", "school", "sport"],
        notes: "Keep it small and specific. The point is to notice people others walk past, as Peter and John did at the gate." },

      { type: "scene", id: "w-scene", title: "Walking and leaping", minutes: 0.5, optional: true,
        art: { key: "t4w01d3-a" },
        boxes: [
          { text: "“Look at us.”", pos: "tl", style: "speech" },
          { text: "“In the name of Jesus Christ from Nazareth, get up and walk!”", pos: "br", style: "shout" }
        ] },

      { type: "verse", id: "w-verse", title: "Verse with actions", minutes: 1, optional: true, activity: "actions",
        notes: "Actions for Acts 4:20: shake head, speak, point, hands on chest, eyes, ear. Tomorrow we find out who said it." },

      { type: "prayer", id: "w-pray", title: "Praying boldly — in pairs", minutes: 3, mood: "calm", style: "pairs",
        tip: "Pray with a partner. Peter and John prayed boldly for a man by name, in the name of Jesus. Pray for each other, honestly and boldly.",
        opening: "Turn to a partner. Tell them one thing you’d like God’s help with this week. It can be small.",
        phases: [
          { name: "Wow", lead: "Take turns finishing the sentence about God.",
            prompts: ["God, you healed a man who had never walked.", "God, your name is the most powerful name in the world."],
            starter: "Wow, God, you are…", seconds: 30, aloud: "Wow, God, you are powerful, and Jesus’ name is stronger than anything!" },
          { name: "Sorry", lead: "Silently: where did you walk past someone this week without noticing?",
            prompts: ["Sorry for the times I’ve walked past someone who needed a friend.", "Sorry for thinking I have nothing to give."],
            starter: "God, I’m sorry for…", seconds: 25, aloud: "God, we’re sorry for the times we don’t notice people who need help." },
          { name: "Thanks", lead: "Thank God for the people who stop and notice us.",
            prompts: ["Thank you for people who look at us and really see us, like Peter and John.", "Thank you that Jesus’ power is for ordinary people like us."],
            starter: "Thank you, God, for…", seconds: 30, aloud: "Thank you, God, for people who notice us and for Jesus’ power." },
          { name: "Please", lead: "Pray one bold sentence for your partner’s need.",
            prompts: ["Please help (partner’s name) with what they told me.", "Please give us courage to speak up and help others, in Jesus’ name."],
            starter: "Please, God, help…", seconds: 40, aloud: "Please, God, help us, and give us courage to help others." }
        ],
        closing: "Thank your partner for praying for you. Everyone: Amen.",
        notes: "Model it first with a student. If a partner’s need is private or sensitive, they can say “something at home” and leave it there. Keep the prayers short and warm." }
    ] },

  /* ======================= THURSDAY ======================= */
  { label: "Thursday", theme: "We Cannot Stop Speaking", roleplay: false, mood: "dawn",
    learningIntentions: [
      "We are learning what happened when Peter and John stood before the council.",
      "We are learning what this story shows us about God, who gives power.",
      "I can choose one thing Jesus has done and plan who to tell."
    ],
    assessment: "Students can retell the week in order, explain that Peter and John were bold because of the Holy Spirit and because they had seen Jesus, say that God gives power, and recite Acts 4:20.",
    resources: ["Screen", "Take-home challenge cards", "Cards from Tuesday (“one thing Jesus has done”)"],
    whereToNext: "Next week: Stephen: Faithful to the End — a man chosen to serve who stays faithful, even when it is costly.",
    slides: [
      { type: "title", id: "th-title", title: "We Cannot Stop Speaking", minutes: 0.5, kicker: "Term 4 · Week 1", sub: "Peter and John: Bold Because of the Spirit",
        art: { key: "t4w01d4-a" }, notes: "Let the splash play." },

      { type: "review", id: "th-review", title: "Put the week in order", minutes: 2.5, format: "order",
        prompt: "Put this week’s story in order!",
        items: ["The believers wait in the upstairs room", "Wind, flames of light and many languages", "Peter preaches to the crowd", "About three thousand believe and are baptised", "A man at the Beautiful Gate walks", "Peter and John stand before the council"],
        hint: "Students call out the next step; click to place it. Ask: ‘What did Jesus promise before the very first step?’ (Acts 1:8: the Holy Spirit and power.) Point out how each step led to the next.",
        notes: "Cards start scrambled. Keep it quick." },

      { type: "scripture", id: "th-scr", title: "Acts 4:12–13, 19–20", minutes: 1, ref: "Acts 4:12–20", version: "CEV",
        lines: [
          { text: "Only Jesus has the power to save! His name is the only one in all the world that can save anyone.", ref: "Acts 4:12" },
          { text: "The officials were amazed to see how bold Peter and John were, and they could tell that these two men were ordinary people and not well educated. They realized that these men had been with Jesus.", ref: "Acts 4:13" },
          { text: "Do you think God wants us to obey you or to obey him?", ref: "Acts 4:19" },
          { text: "We cannot stop speaking about what we have seen and heard.", ref: "Acts 4:20" }
        ],
        emphasis: ["Only Jesus", "bold", "been with Jesus", "cannot stop speaking"],
        notes: "Acts 4:20 is our memory verse; now students know who said it. The officials were the Jewish council, the same group that had put Jesus on trial. Verses 4:12 and 4:19–20 are Peter’s and John’s words." },

      { type: "story", id: "th-story", title: "Before the council", minutes: 2, transition: "page", mood: "dawn",
        beats: [
          { text: "Arrested, then questioned.", caption: "The council asks, “By what power?”",
            art: { key: "t4w01d4-a", label: "Thu · before the council", desc: "Peter and John standing calmly in the centre of a semicircle of stern religious leaders.", shot: "wide, high-angle", motion: "kenburns-in", chars: ["peter", "john"],
              scene: "In a stone council hall, stern elders in tall head coverings sit in a great half-circle of benches, frowning down. In the centre Peter and John stand calm and upright, with the healed man beside them, a shaft of light falling on the three." } },
          { text: "“Only Jesus has the power to save.”", caption: "The council can see they have been with Jesus." },
          { text: "“We cannot stop speaking.”", caption: "About what we have seen and heard.", shout: true },
          { text: "God gives power.", caption: "To ordinary people. And they are never alone." },
          { text: "One thing. One friend.", caption: "That’s all a start needs.",
            art: { key: "t4w01d4-b", label: "Thu · live it — speak up", desc: "A Kiwi kid on the school field telling a friend something good, both sitting on the grass.", shot: "medium wide, warm", motion: "kenburns-right", chars: [],
              setting: "Modern-day Aotearoa New Zealand setting: a suburban primary school with classroom blocks, a covered walkway, playing fields, native trees and harakeke (flax) bushes. Kiwi kids of many backgrounds drawn naturally and respectfully, in everyday clothes, school uniforms or sports gear.",
              scene: "Two kids sit cross-legged on the grass under a big tree at lunchtime, one talking animatedly with open hands while the other leans in listening and smiling. A rugby ball and lunchboxes lie beside them; the sunny field stretches behind." } }
        ],
        narration: "Peter and John are still speaking to the crowd at the temple when some priests and the temple guards arrive. They are upset that these two are teaching about Jesus rising from the dead, so they take them and lock them up for the night.\n\nNext morning, the leaders of the nation gather in a great half-circle. Some of them are the same men who had put Jesus on trial. In the middle stand Peter and John, and next to them the man who was healed, on his own two feet. ‘By what power, or in whose name, did you do this?’ they ask.\n\nPeter, filled with the Holy Spirit, answers without fear. It was by the name of Jesus Christ from Nazareth, he says. Only Jesus has the power to save.\n\nThe leaders are amazed. These two are ordinary working men with no fancy training. But they can tell that Peter and John have been with Jesus. And the healed man is standing right there, so they have nothing to say. They order Peter and John never to speak about Jesus again.\n\nPeter and John answer calmly: ‘Do you think God wants us to obey you or to obey him? We cannot stop speaking about what we have seen and heard.’ The leaders warn them again, then let them go.\n\nSo what does this story show us about God? He gives power. Not power to show off, but power to be brave, to love, and to tell the truth. God gave his Spirit to ordinary people, and they were never alone.\n\nNow imagine a Year 6 girl, nervous at lunchtime. Something good has happened, and she thinks it was Jesus. She takes a breath and says to one friend, kindly, ‘I think Jesus helped me.’ That is speaking up. It doesn’t need a crowd, only one friend and one true thing.",
        notes: "About 2 minutes. Documented in Acts 4:1–22. Death and violence are not part of this passage; only arrest and a warning, then release. Explain calmly: Peter and John were told to stop telling the truth about Jesus, and chose to keep telling it. This does not mean we disobey parents or teachers; here, the leaders were ordering them to stop saying what was true. The Year 6 girl in the last paragraph is imagined, to help us picture speaking up today. Some students may have family from places where speaking about Jesus is dangerous or where people hold other beliefs. Say that no one is ever pushed to share, and that speaking up always means being kind and listening too." },

      { type: "question", id: "th-q1", title: "What did they notice?", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "What did the officials realise about Peter and John?",
        options: ["They had been to a famous school", "They were very rich", "They had been with Jesus", "They were afraid of the council"], answer: 2,
        hint: "Answer: C, they had been with Jesus (Acts 4:13). Follow-up: ‘What did the officials notice about how they spoke?’ (They were bold.) Follow-up 2: ‘What did they say about their education?’ (Ordinary people, not well educated.) If silent: re-read the second scripture line." },

      { type: "question", id: "th-q2", title: "Nothing to say", minutes: 1.5, level: "think", mode: "pair", seconds: 45,
        text: "The council could see the healed man standing right there, so they had nothing to say. Why do you think a changed life is such a strong witness?",
        hint: "Good answers: you can argue about words but not about what people can see; a changed life shows Jesus’ power; it’s true and real; people trust what they see. Follow-up: ‘What did the man’s walking prove?’ Follow-up 2: ‘What might people see in you that points to Jesus?’ If silent: ask what a friend notices when you’re kind." },

      { type: "recap", id: "th-recap", title: "This week’s big idea", minutes: 1.5,
        points: [
          "Jesus kept his promise and gave his followers the Holy Spirit, who gave them power.",
          "Ordinary people like Peter and John became bold, because they had been with Jesus and had seen what he had done.",
          "When you have seen and heard what Jesus has done, you can speak up about it, kindly, to one person at a time."
        ],
        notes: "Then the Big Idea stamps in." },

      { type: "question", id: "th-q3", title: "Bold or brave?", minutes: 1.5, level: "dig", mode: "vote", seconds: 30, skippable: true,
        text: "Agree or disagree: “Being bold means you’re never nervous.”",
        options: ["Agree", "Disagree"],
        hint: "Disagree: Peter was nervous in the upper room, and was bold because the Spirit helped him, not because he felt fearless. Follow-up: ‘What helps you do a hard thing even when you’re nervous?’ Follow-up 2: ‘Who was with Peter and John?’ (Jesus’ Spirit, and each other.) If silent: ask about a time they were nervous and did it anyway." },

      { type: "challenge", id: "th-chal", title: "This Week’s Challenge", minutes: 2,
        text: "Speak up about one thing Jesus has done. Tell one person.",
        why: "“We cannot stop speaking about what we have seen and heard.” — Acts 4:20",
        head: "I have seen and heard what Jesus has done, and I can tell others.", heart: "Jesus, give me courage and the right words.", hands: "Pick one thing Jesus has done. Tell one person this week, kindly.",
        takeHome: true,
        notes: "Use the cards from Tuesday. It can be a Bible story (the man at the gate, Peter’s forgiveness), or something from their own life. This is an invitation, never a pressure: students from other faith backgrounds can choose to share something they have learned this week. Telling one person is plenty. Next Monday’s check-in will ask how it went." },

      { type: "verse", id: "th-verse", title: "Memory verse: fade-out", minutes: 1.5, activity: "fade",
        notes: "Fade out Acts 4:20. Bonus: say Luke 18:13 from Term 3, Week 10." },

      { type: "scene", id: "th-scene", title: "Bold because of the Spirit", minutes: 1, optional: true,
        art: { key: "t4w01-cover" },
        boxes: [
          { text: "We cannot stop speaking about what we have seen and heard.", pos: "tl", style: "shout" },
          { text: "God gives power to ordinary people.", pos: "br", style: "caption" }
        ] },

      { type: "prayer", id: "th-pray", title: "Praying boldly — out loud", minutes: 3, mood: "calm", style: "out-loud",
        tip: "After the council let them go, the believers prayed together and asked God for boldness (Acts 4:23–31). Today we pray like them: out loud, together, honest and bold.",
        opening: "Let’s pray together. In each part, anyone can call out one short sentence. Short is perfect.",
        phases: [
          { name: "Wow", lead: "Call out one thing God is. Think of power and promises.",
            prompts: ["God, you give power to ordinary people.", "God, you are with us, just as you were with Peter and John."],
            starter: "God, you are…", seconds: 35, aloud: "God, you give power, and you are always with us!" },
          { name: "Sorry", lead: "Silently: tell God about a time you stayed quiet when you should have spoken kindly.",
            prompts: ["Sorry for the times I stay silent because I’m afraid of what others will think.", "Thank you that you forgive us, like you forgave Peter."],
            starter: "God, I’m sorry for…", seconds: 25, aloud: "God, we’re sorry, and thank you that you forgive us and help us start again." },
          { name: "Thanks", lead: "Call out one thing Jesus has done that you’re thankful for.",
            prompts: ["Thank you, Jesus, for the man at the gate who walked and praised God.", "Thank you for the Holy Spirit, who helps us be brave."],
            starter: "Thank you, God, for…", seconds: 35, aloud: "Thank you, Jesus, for everything you have done." },
          { name: "Please", lead: "Pray a bold prayer for your challenge this week.",
            prompts: ["Please give me courage to tell one person what you have done.", "Please help my friends to be open to good news about Jesus."],
            starter: "Please, God, help…", seconds: 40, aloud: "Please, God, give us courage, and help us tell what we have seen and heard." }
        ],
        closing: "Let’s say our verse together once more: “We cannot stop speaking about what we have seen and heard.” Amen!",
        notes: "Celebrate the whole-class voice. Encourage short, honest prayers. The believers’ prayer in Acts 4:29–31 is paraphrased in the tip, not quoted; they asked for boldness, and the Spirit filled them again." }
    ] }
  ]
};
