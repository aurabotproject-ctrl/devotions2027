/* Morninglight 2027 — Term 2 Week 10: Faith Without Seeing (John 20:19–31; Hebrews 11:1; 12:1–3). Scripture: CEV. */
window.DEVOTIONS = window.DEVOTIONS || {};
window.DEVOTIONS["Term 2"] = window.DEVOTIONS["Term 2"] || {};
window.DEVOTIONS["Term 2"]["Week 10"] = {
  lessonTitle: "Faith Without Seeing",
  passage: "John 20:19–31; Hebrews 11:1; 12:1–3",
  bigIdea: "We haven’t seen Jesus, but we can trust him — and we’re surrounded by people who did.",
  godIs: "Trustworthy",
  memoryVerse: { ref: "Hebrews 12:1–2", text: "Such a large crowd of witnesses is all around us! And we must be determined to run the race that is ahead of us. We must keep our eyes on Jesus, who leads us and makes our faith complete.", version: "CEV",
    chunks: ["Such a large crowd of witnesses", "is all around us!", "And we must be determined", "to run the race that is ahead of us.", "We must keep our eyes on Jesus,", "who leads us and makes our faith complete."],
    actions: ["Sweep an arm wide — a huge crowd", "Point all around the room", "Clench both fists, determined face", "Run on the spot", "Point two fingers at your eyes, then point up", "Hand on heart, then a big thumbs up"] },
  prayerFocus: { skill: "“Lord, help my unbelief”", tip: "A worried father once said to Jesus, “I do have faith! Please help me to have even more” (Mark 9:24; many Bibles say, “Lord, I believe — help my unbelief!”). You can bring your doubts and questions to Jesus honestly, and ask him to grow your faith." },
  mood: "dawn",
  cover: "t2w10-cover",
  characters: ["jesus", "thomas", "peter", "guide"],
  coverArt: { key: "t2w10-cover", label: "Week cover", desc: "Thomas on his knees in a lamp-lit room, looking up in awe at the risen Jesus, who is seen in three-quarter view from behind holding out his open hands, the other disciples gathered round.", shot: "medium wide, three-quarter from behind",
    scene: "Inside a plain upstairs room lit by a single oil lamp, the disciple Thomas has fallen to his knees and looks up in awe at the risen Jesus, who stands seen in three-quarter view from behind with both open hands held out towards him, the other disciples gathered close around them, a barred wooden door in the background.", chars: ["jesus", "thomas"] },
  comicArt: { key: "t2w10-comic", label: "Comic page (week opener — for the comic-page viewer, coming in a later build)", format: "portrait", desc: "Six-panel comic page: the locked room, Thomas meets the risen Jesus, and the Faith Museum’s crowd of witnesses.",
    panels: "Six panels. Panel 1 (wide): a heavy wooden door with a thick bar across it, frightened disciples huddled in the lamp-lit room beyond. Panel 2 (tall): Jesus suddenly standing in the middle of the room, seen from behind with arms open, the disciples jumping back in amazement. Panel 3 (small): Thomas outside the room with his arms folded, frowning and shaking his head. Panel 4 (wide): Thomas on his knees before Jesus, who is seen from behind holding out his open hands. Panel 5 (wide): the Faith Museum guide with her lantern leading three visitors past glowing exhibits in a grand hall. Panel 6 (tall): a runner on an ancient stadium track looking ahead towards a bright light at the finish line, the stands packed with cheering people.", chars: ["jesus", "thomas", "guide"] },

  days: [

  /* ======================= MONDAY ======================= */
  { label: "Monday", theme: "The Locked Room", roleplay: true, mood: "night",
    learningIntentions: [
      "We are learning how the risen Jesus came to his frightened disciples in a locked room.",
      "We are learning that Jesus is really alive, with a real body that still bore the marks of the cross.",
      "I can retell what Jesus said and did in the locked room (John 20:19–23)."
    ],
    assessment: "Listen for students retelling the locked-room story in order (fear, locked doors, Jesus appears, ‘Peace’, hands and side, joy, sending, Holy Spirit) and noticing that Thomas was missing.",
    resources: ["Screen", "Optional: a chair or desk to be the ‘locked door’", "Optional: a torch to dim the lights for the evening scene"],
    whereToNext: "Tomorrow: Thomas, who wasn’t there — his doubts, his demands, and the moment Jesus came back for him.",
    slides: [
      { type: "title", id: "m-title", title: "The Locked Room", minutes: 0.5, kicker: "Term 2 · Week 10", sub: "Faith Without Seeing",
        art: { key: "t2w10-cover" }, notes: "The last week of Term 2! This week we meet Thomas, return to the Faith Museum, and celebrate the whole term on Thursday." },

      { type: "hook", id: "m-hook", title: "Too good to be true?", minutes: 1.5,
        checkin: { text: "Last week we were out on the stormy lake: Jesus calmed the wind and the waves, and Peter walked on the water — then sank and cried, ‘Save me, Lord!’ Your challenge: when you felt afraid, say Psalm 56:3 and pray one sentence to Jesus. When did you use it? Can anyone still say the verse?" },
        text: "Have you ever heard news that was so good you just couldn’t believe it?",
        ask: "What would it take to convince you it was true?",
        hint: "Check-in first: ask 2–3 students when they used Psalm 56:3 (‘Even when I am afraid, I keep on trusting you’) and say it together. Then the hook: a surprise holiday, a lost pet coming home, winning a prize. Land it: ‘Today Jesus’ friends hear the best news in history — that he is alive — and they’re so scared they lock themselves in a room.’" },

      { type: "scripture", id: "m-scr", title: "John 20:19–22", minutes: 1, ref: "John 20:19–23", version: "CEV",
        lines: [
          { text: "The disciples were afraid of the Jewish leaders, and on the evening of that same Sunday they locked themselves in a room.", ref: "John 20:19" },
          { text: "Suddenly, Jesus appeared in the middle of the group. He greeted them and showed them his hands and his side.", ref: "John 20:19–20" },
          { text: "When the disciples saw the Lord, they became very happy.", ref: "John 20:20" },
          { text: "After Jesus had greeted them again, he said, “I am sending you, just as the Father has sent me.” Then he breathed on them and said, “Receive the Holy Spirit.”", ref: "John 20:21–22" }
        ],
        emphasis: ["afraid", "locked themselves in", "Suddenly, Jesus appeared", "very happy", "I am sending you", "Receive the Holy Spirit"],
        notes: "‘That same Sunday’ = the day Jesus rose from the dead (John 20:1). ‘Disciples’ = Jesus’ close followers. ‘He greeted them’ — many Bibles give his actual words: ‘Peace be with you!’" },

      { type: "story", id: "m-story", title: "Behind locked doors", minutes: 3, transition: "page", mood: "night",
        beats: [
          { text: "Sunday evening. The doors are locked.", caption: "Jesus’ friends hid, afraid the leaders would come for them next.",
            art: { key: "t2w10d1-a", label: "Mon · story beats 1–2 + stretch scene", desc: "A heavy wooden door barred from the inside, frightened disciples huddled in a dim upstairs room lit by one oil lamp, Peter pressing his ear to the door.", shot: "medium wide, low light", motion: "kenburns-left", chars: ["peter"],
              scene: "A dim upstairs room at night lit by one flickering oil lamp, a heavy wooden door barred from the inside with a thick beam, a group of frightened disciples huddled on the floor and benches, and Peter, a broad-shouldered fisherman, pressing his ear against the door to listen." } },
          { text: "“I have seen the Lord!”", caption: "That morning, the tomb was empty — and Mary Magdalene said she had seen him." },
          { text: "Suddenly — Jesus!", caption: "Standing in the middle of the room. No one had opened the door.", shout: true,
            art: { key: "t2w10d1-b", label: "Mon · story beats 3–5 + role-play card", desc: "The risen Jesus standing in the middle of the lamp-lit room, seen in three-quarter view from behind with his arms open in greeting, the disciples jumping back in astonishment, then beginning to smile.", shot: "wide, from behind", motion: "kenburns-in", chars: ["jesus", "peter"],
              scene: "The risen Jesus standing calmly in the middle of a lamp-lit upstairs room, seen in three-quarter view from behind with his arms open in greeting, soft light around him, the astonished disciples stumbling back against the walls and benches, some covering their mouths, Peter’s face breaking into joy." } },
          { text: "His hands. His side.", caption: "It was really him — alive, with a real body." },
          { text: "“I am sending you.”", caption: "He breathed on them: “Receive the Holy Spirit.”" }
        ],
        narration: "It was Sunday evening in Jerusalem — the most confusing day of the disciples’ lives.\n\nOn Friday, Jesus had been nailed to a cross. They had watched him die. His body had been laid in a tomb cut into the rock, and a huge stone was rolled across the doorway. Everything they had hoped for seemed finished.\n\nBut that morning, strange news had come. Mary Magdalene ran to them, out of breath: the stone had been rolled away! Peter and John raced to the tomb and found it empty — just the burial cloths lying there. Then Mary came back with even wilder news: ‘I have seen the Lord!’\n\nCould it be true? Or was it just wishful thinking?\n\nNow it was evening. The disciples were together in a room, and they were afraid. The same leaders who had arrested Jesus might come for them next. So they locked the doors. Every footstep outside made them jump.\n\nAnd then — suddenly — Jesus was standing in the middle of the room.\n\nNobody opened the door. Nobody heard a key turn. He was simply there.\n\nHe greeted them with the words people used to say hello: ‘Peace be with you!’ Peace — to a room full of frightened people.\n\nThey must have wondered if they were seeing a ghost. So Jesus showed them his hands and his side — the marks from the nails and the spear. It was really him. The same Jesus who had died was alive, with a real body they could see and touch.\n\nJohn tells us, ‘When the disciples saw the Lord, they became very happy.’ Imagine the laughing, the crying, the hugging!\n\nThen Jesus gave them a job. ‘I am sending you, just as the Father has sent me.’ He breathed on them and said, ‘Receive the Holy Spirit.’ The Holy Spirit is God himself, coming to live with his people and give them courage. These scared, hiding people would soon be the bravest people in the world, telling everyone about Jesus.\n\nBut one disciple wasn’t there that night. His name was Thomas. And when the others told him, ‘We have seen the Lord!’ — he didn’t believe a word of it.\n\nTomorrow we’ll find out why.",
        notes: "About 3 minutes. The empty tomb and Mary Magdalene’s news are from John 20:1–18. ‘Peace be with you’ is the usual greeting (the CEV says simply ‘he greeted them’). The marks of the cross: keep it simple and never graphic — ‘the marks from the nails’. Luke 24:36–43 tells the same evening and adds that Jesus ate a piece of fish to show he was not a ghost." },

      { type: "question", id: "m-q1", title: "Hands and side", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "When Jesus appeared in the locked room, what did he show his disciples?",
        options: ["A map of where to go", "His hands and his side", "A loaf of bread", "The key to the door"], answer: 1,
        hint: "Answer: B (John 20:20). Follow-up: ‘Why do you think Jesus showed them his hands and side?’ (To prove it was really him, and really alive — not a ghost or a dream.) Follow-up 2: ‘How did the disciples feel when they saw the Lord?’ (Very happy!) If silent: re-read the second scripture line together slowly." },

      { type: "question", id: "m-q2", title: "Through a locked door", minutes: 1.5, level: "think", mode: "pair", seconds: 45, skippable: true,
        text: "The doors were locked — but Jesus came in anyway. What does that tell us about the risen Jesus?",
        hint: "Good answers: his risen body is real but new and amazing; nothing can keep him out; he comes to his friends even when they’re hiding; their fear didn’t stop him; he knew exactly where they were. Follow-up: ‘What is the first word he said to scared people?’ (Peace.) Follow-up 2: ‘What “locked doors” do people hide behind today?’ (Fear, shame, sadness.) If silent: ask ‘If you were hiding and scared, what would you most want someone to say to you?’" },

      { type: "roleplay", id: "m-rp", title: "The Locked Room", minutes: 5, ref: "John 20:18–25",
        art: { key: "t2w10d1-b" },
        imagined: "Jesus’ words, Mary’s ‘I have seen the Lord!’ and Thomas’ demand are from John 20 (CEV, slightly shortened). ‘Peace be with you!’ is the usual greeting many Bibles give for 20:19. Which disciple says which worried line, the knocking, and exactly when Thomas arrives are imagined.",
        actions: ["Everyone: nervous whispers — ‘Shhh!’", "Everyone: knock on desks for the door", "Everyone: a huge gasp — then a cheer"],
        props: ["Optional: a chair as the barred door", "Optional: dim the lights"],
        characters: [
          { name: "Narrator", color: "#F2C77B", desc: "Tells the story" },
          { name: "Jesus", color: "#FFE08A", desc: "Risen and alive — calm, warm, full of peace (the teacher may read Jesus’ lines)" },
          { name: "Peter", color: "#7BA7D9", desc: "Big fisherman — jumpy and pacing" },
          { name: "John", color: "#FFB547", desc: "Saw the empty tomb this morning — puzzled" },
          { name: "Mary Magdalene", color: "#C9A0DC", desc: "Has seen the risen Jesus — bursting with news" },
          { name: "Thomas", color: "#A1887F", desc: "Missed it all — and won’t believe without proof" },
          { name: "Everyone", color: "#FFFFFF", desc: "Nervous whispers, knocking, gasps and cheers" }
        ],
        lines: [
          { character: "Narrator", text: "Sunday evening in Jerusalem. The door is locked and barred. The disciples huddle inside, whispering.", direction: true },
          { character: "Everyone", text: "Shhhh!", action: "nervous whisper, look at the door" },
          { character: "Peter", text: "Is the door locked? Check it again, John.", action: "pacing" },
          { character: "John", text: "It’s locked, Peter. And barred. Nobody is getting in here." },
          { character: "Everyone", text: "Knock! Knock! Knock!", action: "knock on desks", sfx: "knock" },
          { character: "Peter", text: "Who’s there?!", action: "freeze, terrified" },
          { character: "Mary Magdalene", text: "It’s me — Mary! Let me in!" },
          { character: "Mary Magdalene", text: "I have seen the Lord!", action: "burst in, breathless" },
          { character: "John", text: "The tomb was empty this morning. I saw it. But seeing HIM?", action: "unsure" },
          { character: "Peter", text: "The leaders killed Jesus. If they find us, we’re next.", action: "slump down" },
          { character: "Narrator", text: "Suddenly, Jesus appeared in the middle of the group." },
          { character: "Everyone", text: "GASP!", action: "jump back" },
          { character: "Jesus", text: "Peace be with you!", action: "warm, arms open" },
          { character: "John", text: "Is it… a ghost?", action: "whisper" },
          { character: "Narrator", text: "Jesus showed them his hands and his side." },
          { character: "Jesus", text: "Look at my hands. It’s really me.", action: "hold out hands gently" },
          { pause: "Freeze! You locked the door because you were scared — and now Jesus is standing right here. What are you feeling?", seconds: 20 },
          { character: "Peter", text: "It’s you. It’s really you!", action: "fall to knees, laughing and crying" },
          { character: "Narrator", text: "When the disciples saw the Lord, they became very happy." },
          { character: "Everyone", text: "He’s alive! He’s ALIVE!", action: "cheer" },
          { character: "Jesus", text: "I am sending you, just as the Father has sent me." },
          { character: "Narrator", text: "Then he breathed on them." },
          { character: "Jesus", text: "Receive the Holy Spirit." },
          { character: "Narrator", text: "But one disciple had missed it all. Later, Thomas came back.", direction: true },
          { character: "Everyone", text: "Knock! Knock!", action: "knock on desks", sfx: "knock" },
          { character: "Thomas", text: "Why is everyone smiling? What did I miss?", action: "suspicious" },
          { character: "Everyone", text: "We have seen the Lord!" },
          { character: "Thomas", text: "First, I must see the nail scars in his hands. I won’t believe unless I do!", action: "arms folded" },
          { character: "Narrator", text: "To be continued…" }
        ],
        debrief: [
          { level: "think", text: "At the start everyone was scared. At the end they were cheering. What changed?", hint: "Nothing outside changed — the leaders were still dangerous. What changed was that they SAW Jesus was alive. When Jesus is with us, fear doesn’t get the last word." },
          { level: "look", text: "What job did Jesus give his disciples — and what did he give them to help?", hint: "‘I am sending you, just as the Father has sent me’ — and he breathed on them: ‘Receive the Holy Spirit’ (John 20:21–22)." }
        ],
        notes: "Cast a confident reader as Thomas — his line is the cliffhanger for Tuesday. Keep the ‘nail scars’ line matter-of-fact, not gruesome. Mary Magdalene’s visit to the disciples happened earlier that day (John 20:18); we bring it into the room for drama." },

      { type: "question", id: "m-q3", title: "Hard to believe", minutes: 1, level: "dig", mode: "discuss", seconds: 40,
        text: "Jesus had told his friends he would rise again. Mary said she had seen him. So why were they still hiding behind locked doors?",
        hint: "Let students disagree. Ideas: they were terrified of the leaders; dead people don’t come back, so it sounded impossible; they were too sad to hope; they hadn’t really understood what Jesus said; fear can be louder than good news. Follow-up: ‘Is it wrong to find good news hard to believe?’ Follow-up 2: ‘What finally changed their minds?’ (Jesus came to them himself.) If silent: ask ‘When you’re really scared, is it easy or hard to remember what someone told you?’" },

      { type: "apply", id: "m-apply", title: "Head · Heart · Hands", minutes: 1,
        head: "Jesus is alive — and no locked door can keep him away from his friends.",
        heart: "Jesus, come into the places where I feel scared or stuck.",
        hands: "This week, when you feel ‘locked in’ by worry — at bedtime, before a test, or when something at home feels hard — pray: “Jesus, you’re alive, and you’re here. Peace.”",
        settings: ["home", "bedtime", "school"],
        notes: "Practise the short prayer together once so students can use it straight away." },

      { type: "scene", id: "m-scene", title: "Locked in", minutes: 0.5, optional: true,
        art: { key: "t2w10d1-a" },
        boxes: [
          { text: "They locked the doors — afraid.", pos: "tl", style: "caption" },
          { text: "“Peace be with you!”", pos: "br", style: "speech" }
        ] },

      { type: "verse", id: "m-verse", title: "Memory verse peek", minutes: 1, optional: true, activity: "echo",
        notes: "Introduce Hebrews 12:1–2 (a shortened portion). Remind them Hebrews 11 was the Faith Museum from Week 1 — this verse comes straight after it." },

      { type: "prayer", id: "m-pray", title: "Help my unbelief (silent)", minutes: 3, mood: "calm", style: "silent",
        tip: "This week we learn the prayer “Lord, help my unbelief.” In our Bible it’s “I do have faith! Please help me to have even more.” You can tell Jesus honestly when believing feels hard.",
        opening: "Let’s get still. Imagine that locked room — and Jesus standing in the middle, saying ‘Peace.’ Breathe in… and out.",
        phases: [
          { name: "Wow", lead: "Jesus is alive — and locked doors can’t keep him out.",
            prompts: ["Jesus, you beat death — you are alive!", "Jesus, you came to your scared friends and brought peace."],
            starter: "Wow, Jesus, you…", seconds: 35, aloud: "Wow, Jesus — you are alive, and you bring peace!" },
          { name: "Sorry", lead: "The disciples hid instead of trusting. Have you ever done that?",
            prompts: ["Sorry for hiding from you when I’m scared.", "Sorry for finding it hard to believe your good news."],
            starter: "Jesus, I’m sorry for…", seconds: 30, aloud: "Jesus, we’re sorry for the times we hid instead of trusting you." },
          { name: "Thanks", lead: "Thank Jesus for coming to his friends — and to us.",
            prompts: ["Thank you that you showed them your hands — you really died and really rose.", "Thank you for sending the Holy Spirit."],
            starter: "Thank you, Jesus, for…", seconds: 30, aloud: "Thank you, Jesus, that you are alive and with us by your Spirit." },
          { name: "Please", lead: "Is believing hard for you sometimes? Tell Jesus honestly.",
            prompts: ["I do have faith — please help me to have even more.", "Please come into the place where I feel locked in: …"],
            starter: "Please, Jesus, help…", seconds: 40, aloud: "Jesus, we do have faith — please help us to have even more." }
        ],
        closing: "Everyone: Amen.",
        notes: "Reassure students that honest questions are welcome in prayer — Jesus came to doubting, scared people. Some students aren’t sure what they believe yet; invite them simply to listen or to pray, ‘Jesus, if you’re real, show me.’" }
    ] },

  /* ======================= TUESDAY ======================= */
  { label: "Tuesday", theme: "My Lord and My God!", roleplay: false, mood: "dawn",
    learningIntentions: [
      "We are learning how Thomas doubted and how Jesus came back for him.",
      "We are learning what Jesus meant by “The people who have faith in me without seeing me are the ones who are really blessed!”",
      "I can explain why John wrote his book (John 20:31) and what it means for me."
    ],
    assessment: "Listen for students explaining that Jesus treated Thomas’ doubts kindly, that Thomas responded ‘You are my Lord and my God!’, and that Jesus’ blessing is for people like us who haven’t seen him.",
    resources: ["Screen", "Paper and pencils for the prayer"],
    whereToNext: "Tomorrow: the Faith Museum opens its doors one last time — every exhibit from the term, and a brand-new wing.",
    slides: [
      { type: "title", id: "t-title", title: "My Lord and My God!", minutes: 0.5, kicker: "Term 2 · Week 10", sub: "Faith Without Seeing",
        art: { key: "t2w10d2-b" }, notes: "Let the splash play. Today is about doubt — make the room feel safe for honest questions." },

      { type: "hook", id: "t-recap", title: "Recap", minutes: 1, style: "recap",
        text: "Yesterday Jesus came through a locked door.",
        ask: "What did he show his disciples — and who missed it?",
        hint: "His hands and his side; he said ‘Peace’, sent them out and gave them the Holy Spirit. Thomas wasn’t there — and when the others said ‘We have seen the Lord!’, he said he wouldn’t believe unless he saw and touched the nail scars. ‘Today: what happened to Thomas.’" },

      { type: "scripture", id: "t-scr", title: "John 20:25–29", minutes: 1, ref: "John 20:24–31", version: "CEV",
        lines: [
          { text: "Thomas said, “First, I must see the nail scars in his hands and touch them with my finger… I won’t believe unless I do this!”", ref: "John 20:25" },
          { text: "A week later… Jesus said to Thomas, “Put your finger here and look at my hands! Put your hand into my side. Stop doubting and have faith!”", ref: "John 20:26–27" },
          { text: "Thomas replied, “You are my Lord and my God!”", ref: "John 20:28" },
          { text: "Jesus said, “Thomas, do you have faith because you have seen me? The people who have faith in me without seeing me are the ones who are really blessed!”", ref: "John 20:29" }
        ],
        emphasis: ["I won’t believe", "Stop doubting and have faith!", "My Lord and my God!", "without seeing me", "really blessed"],
        notes: "Shortened with ‘…’. ‘Blessed’ = deeply happy and favoured by God. John 20:29 is the heart of this week — we are the people who haven’t seen." },

      { type: "story", id: "t-story", title: "The doubter", minutes: 3.5, transition: "page", mood: "dawn",
        beats: [
          { text: "“I won’t believe unless I see.”", caption: "Thomas folded his arms. He wanted proof.",
            art: { key: "t2w10d2-a", label: "Tue · story beats 1–2 + stretch scene", desc: "Thomas standing apart with his arms folded and a stubborn frown while the other disciples crowd round him, excited and pointing, in a sunlit courtyard.", shot: "medium, character focus", motion: "kenburns-right", chars: ["thomas", "peter"],
              scene: "In a small stone courtyard in morning light, Thomas, a lean young man with a short beard, stands apart with his arms folded and a stubborn frown, shaking his head, while Peter and the other excited disciples crowd round him, pointing and talking all at once." } },
          { text: "A whole week went by.", caption: "Everyone else full of joy — and Thomas outside it, wondering." },
          { text: "Locked doors again. Then — Jesus.", caption: "He turned straight to Thomas.", shout: true },
          { text: "“You are my Lord and my God!”", caption: "Thomas didn’t need to touch. He fell to his knees.",
            art: { key: "t2w10d2-b", label: "Tue · title + story beats 4–5", desc: "Thomas kneeling with tears of wonder, looking up at the risen Jesus, who stands with his back three-quarters to us, holding out his open hands to him, warm lamplight filling the room.", shot: "medium, three-quarter from behind", motion: "kenburns-in", chars: ["jesus", "thomas"],
              scene: "In a lamp-lit upstairs room, Thomas has dropped to his knees with tears of wonder on his face, looking up at the risen Jesus, who stands seen in three-quarter view from behind, gently holding out his open hands towards Thomas, the other disciples watching in hushed silence behind." } },
          { text: "“…without seeing me…”", caption: "Jesus’ blessing is for us." }
        ],
        narration: "Thomas was one of Jesus’ twelve closest friends. John calls him ‘Thomas the Twin’. We don’t know who his twin was — but we do know a few things about Thomas.\n\nHe was brave. Once, when going back near Jerusalem was dangerous, Thomas said to the others, ‘Let’s go too, so we can die with him.’ And he was honest. When Jesus talked about going away, Thomas was the one who said, ‘Lord, we don’t even know where you are going! How can we know the way?’ Thomas didn’t pretend. If he didn’t understand, he said so.\n\nSo when the other disciples ran up to him, faces shining — ‘We have seen the Lord!’ — Thomas folded his arms.\n\n‘First, I must see the nail scars in his hands and touch them with my finger. I must put my hand where the spear went into his side. I won’t believe unless I do this!’\n\nCan you blame him? He had seen Jesus die. Dead people don’t come back. Maybe the others were so sad they were imagining things. Thomas wanted proof.\n\nA whole week went by. Imagine that week for Thomas — everyone else full of joy, and him stuck outside it, wondering.\n\nThen, a week later, the disciples were together again. This time Thomas was with them. The doors were locked — and once again, Jesus came and stood in the middle of the room. ‘Peace be with you!’\n\nAnd then Jesus turned straight to Thomas. He knew exactly what Thomas had said, word for word. ‘Put your finger here and look at my hands! Put your hand into my side. Stop doubting and have faith!’\n\nJesus didn’t tell Thomas off. He didn’t say, ‘You should have known better.’ He came back for him — and offered him exactly the proof he had asked for.\n\nThe Bible never says Thomas touched him. He didn’t need to. He said, ‘You are my Lord and my God!’\n\nThat is one of the biggest things anyone says in the whole Bible. Thomas the doubter was the first of Jesus’ friends in John’s book to call him ‘my God’.\n\nThen Jesus said something for everyone who wasn’t in that room. ‘Thomas, do you have faith because you have seen me? The people who have faith in me without seeing me are the ones who are really blessed!’\n\nWho is Jesus talking about? He’s talking about us. We haven’t seen Jesus with our eyes. And John tells us that’s exactly why he wrote his book: so that you will put your faith in Jesus as the Messiah — God’s promised King — and the Son of God, and have true life.\n\nThomas saw, and believed. We read what Thomas saw — and we can believe too.",
        notes: "About 3½ minutes. Thomas’ bravery: John 11:16. His honest question: John 14:5 (Jesus answers, ‘I am the way, the truth, and the life’). John 20:30–31 explains why John wrote his Gospel. That Thomas knelt is imagined (and shown in the art) — the text gives only his words. Church tradition says Thomas later took the good news as far as India (label it ‘tradition says’ if you mention it)." },

      { type: "dig", id: "t-dig", title: "Word for word", minutes: 2,
        prompt: "Compare what Thomas said with what Jesus said a week later. What do you notice?",
        columns: ["Thomas said (20:25)", "Jesus said (20:27)"],
        items: [
          { left: "“I must see the nail scars in his hands…”", right: "“Look at my hands!”" },
          { left: "“…and touch them with my finger.”", right: "“Put your finger here.”" },
          { left: "“I must put my hand where the spear went into his side.”", right: "“Put your hand into my side.”" },
          { left: "“I won’t believe unless I do this!”", right: "“Stop doubting and have faith!”" }
        ],
        reveal: "Jesus heard every word Thomas said — and came back for him.",
        notes: "Reveal row by row. After the last row, ask: ‘Jesus wasn’t in the room when Thomas said this. How did he know?’ Let the penny drop — Jesus knows and hears us too." },

      { type: "question", id: "t-q1", title: "Thomas’ words", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "What did Thomas say when Jesus came back and showed him his hands?",
        options: ["“I knew it all along!”", "“You are my Lord and my God!”", "“I still don’t believe it.”", "“Where have you been all week?”"], answer: 1,
        hint: "Answer: B (John 20:28). Follow-up: ‘What did Jesus say to Thomas straight after?’ (‘Do you have faith because you have seen me? The people who have faith in me without seeing me are the ones who are really blessed!’) Follow-up 2: ‘Why is calling Jesus “my God” such a big deal?’ (Thomas is saying Jesus is God himself.) If silent: point to the third scripture line." },

      { type: "question", id: "t-q2", title: "Kind to doubters", minutes: 1.5, level: "think", mode: "pair", seconds: 45,
        text: "Jesus could have told Thomas off. Instead he came back and offered him exactly what he asked for. What does that show about how Jesus treats people who have doubts?",
        hint: "Good answers: he is patient and kind; he doesn’t give up on people; he meets us where we are; he welcomes honest questions; he wants us to believe, not to feel ashamed; he still said ‘Stop doubting’, so he cares about our faith growing. Follow-up: ‘How is this like Jesus catching Peter last week?’ (He rescued first, then asked ‘Why do you doubt?’) Follow-up 2: ‘What could someone with questions about God do?’ If silent: ask ‘Imagine Jesus had ignored Thomas for ever. What would we think about Jesus then?’" },

      { type: "question", id: "t-q3", title: "Doubting Thomas?", minutes: 1.5, level: "dig", mode: "vote", seconds: 30, skippable: true,
        text: "Agree or disagree: “Thomas deserves the nickname ‘Doubting Thomas’.”",
        options: ["Agree", "Disagree"],
        hint: "Let both sides speak. Agree: he did refuse to believe his friends for a whole week, and Jesus said ‘Stop doubting’. Disagree: he was brave (John 11:16), honest (John 14:5), and once he saw Jesus he made the biggest statement in the book — ‘My Lord and my God!’ Maybe ‘Believing Thomas’ fits better! Follow-up: ‘Is it better to hide your doubts, or bring them to Jesus?’ Follow-up 2: ‘What nickname would you give Thomas?’ If silent: ask ‘Which disciple said the greatest thing about Jesus in this story?’" },

      { type: "apply", id: "t-apply", title: "Head · Heart · Hands", minutes: 2,
        head: "Jesus is my Lord and my God — and he is patient with my questions.",
        heart: "Lord, I do have faith — please help me to have even more.",
        hands: "Write down one question you have about God or Jesus. This week, ask a parent, teacher, church leader or Christian friend about it — and tell Jesus about it in prayer too.",
        settings: ["home", "church", "school"],
        notes: "Collect anonymous questions in a box if you like — they make a great Friday discussion. This leads into today’s writing prayer." },

      { type: "scene", id: "t-scene", title: "Arms folded", minutes: 1, optional: true,
        art: { key: "t2w10d2-a" },
        boxes: [
          { text: "“I won’t believe unless I do this!”", pos: "tl", style: "shout" },
          { text: "A week later, Jesus came back — for Thomas.", pos: "br", style: "caption" }
        ] },

      { type: "verse", id: "t-verse", title: "Build the verse", minutes: 1, activity: "build",
        notes: "Build Hebrews 12:1–2. Ask: ‘Who is the crowd of witnesses?’ (The people from Hebrews 11 — our Faith Museum heroes.) ‘And who do we keep our eyes on?’" },

      { type: "prayer", id: "t-pray", title: "Write a ‘help my unbelief’ prayer", minutes: 3, mood: "calm", style: "write",
        tip: "Thomas’ doubts didn’t stop Jesus coming to him. Today we write an honest prayer: what we believe, what we find hard, and asking Jesus to grow our faith.",
        opening: "On your paper, write Thomas’ words at the top: ‘My Lord and my God.’ Now we’ll add a line for each part of our prayer.",
        phases: [
          { name: "Wow", lead: "Write one line telling Jesus who he is.",
            prompts: ["You are my Lord and my God.", "You are alive, and you know every word I say."],
            starter: "Jesus, you are…", seconds: 40, aloud: "Jesus, you are our Lord and our God!" },
          { name: "Sorry", lead: "Silently: is there a time you didn’t trust what Jesus said?",
            prompts: ["Sorry for saying ‘I won’t believe’ to you.", "Sorry for trusting only what I can see."],
            starter: "Sorry for…", seconds: 25, aloud: "Jesus, we’re sorry for the times we refused to trust you." },
          { name: "Thanks", lead: "Write one line thanking Jesus for how he treated Thomas.",
            prompts: ["Thank you for coming back for Thomas — and for me.", "Thank you that I can bring you my questions."],
            starter: "Thank you for…", seconds: 35, aloud: "Thank you, Jesus, that you are patient with our questions." },
          { name: "Please", lead: "Write your honest ‘help my unbelief’ line. What do you find hard to believe?",
            prompts: ["I do have faith — please help me to have even more about…", "Please help me trust you without seeing you."],
            starter: "I do have faith! Please help me…", seconds: 45, aloud: "Lord, we do have faith — please help us to have even more." }
        ],
        closing: "Read your prayer silently to Jesus. Fold it up and keep it. Amen.",
        notes: "Students don’t share these unless they want to. Students unsure about faith can write, ‘Jesus, if you are real, show me.’ That is an honest prayer too." }
    ] },

  /* ======================= WEDNESDAY ======================= */
  { label: "Wednesday", theme: "The Faith Museum Returns", roleplay: true, mood: "temple",
    learningIntentions: [
      "We are learning how all of this term’s heroes trusted God, using Hebrews 11 and 12:1.",
      "We are learning that the heroes of faith were ordinary people who trusted a trustworthy God.",
      "I can describe my own ‘exhibit’ — one way I can trust God this week."
    ],
    assessment: "Listen for students naming several of the term’s heroes and what they trusted God for, explaining that the heroes weren’t perfect, and linking ‘a large crowd of witnesses’ to Hebrews 11.",
    resources: ["Screen", "Optional: a torch or lanyard for the museum guide", "Optional: paper ‘picture frames’ for each student’s exhibit"],
    whereToNext: "Tomorrow: run the race with your eyes on Jesus — and our big Term 2 celebration!",
    slides: [
      { type: "title", id: "w-title", title: "The Faith Museum Returns", minutes: 0.5, kicker: "Term 2 · Week 10", sub: "Faith Without Seeing",
        art: { key: "t2w10d3-a" }, notes: "The Faith Museum from Week 1 returns. Remind the class it is an imaginary building — but the people in it are real." },

      { type: "hook", id: "w-hook", title: "A statue in our classroom", minutes: 1,
        text: "If we could put up a statue of ONE of this term’s faith heroes in our classroom, who would you choose?",
        ask: "What object would you put next to it?",
        hint: "Take 4–5 answers and jot the heroes on the board — you’ll use the list in the role-play. Land it: ‘Remember the Faith Museum from Week 1? The guide has unlocked the doors one last time. Every one of your heroes has an exhibit now — and there’s a wing nobody has seen yet.’" },

      { type: "scripture", id: "w-scr", title: "Hebrews 11:32–34, 39 · 12:1", minutes: 1, ref: "Hebrews 11:32–12:1", version: "CEV",
        lines: [
          { text: "What else should I say? There isn’t enough time to tell about Gideon, Barak, Samson, Jephthah, David, Samuel, and the prophets.", ref: "Hebrews 11:32" },
          { text: "They closed the jaws of lions and put out raging fires…", ref: "Hebrews 11:33–34" },
          { text: "All of them pleased God because of their faith!", ref: "Hebrews 11:39" },
          { text: "Such a large crowd of witnesses is all around us!", ref: "Hebrews 12:1" }
        ],
        emphasis: ["isn’t enough time", "Gideon", "Samuel", "jaws of lions", "raging fires", "pleased God", "large crowd of witnesses"],
        notes: "Spot the heroes: Gideon (Week 3), Samuel (Week 4), the prophets (Elijah, Week 5), lions’ jaws (Daniel) and raging fires (Shadrach, Meshach and Abednego, Week 6). Rahab is named in 11:31. ‘Witnesses’ = people who have seen and can tell what God did." },

      { type: "story", id: "w-story", title: "One last tour", minutes: 3, transition: "page", mood: "temple",
        beats: [
          { text: "The museum doors open one last time.", caption: "Every exhibit from our term, glowing in the lamplight.",
            art: { key: "t2w10d3-a", label: "Wed · title + story beats 1–3 + role-play card", desc: "The Faith Museum guide holding up her lantern in a grand hall lined with glowing glass exhibits — a bundle of firewood and a ram’s horn, a red rope at a window, a clay jar and torch, a small coat, a golden sceptre, a boat’s oar — three visitors gazing round.", shot: "wide, grand interior", motion: "kenburns-in", chars: ["guide"],
              scene: "A grand old museum hall with tall arched windows, the cheerful silver-haired guide holding up her brass lantern as she leads a boy, a girl and an elderly grandfather past rows of glowing glass display cases holding a bundle of firewood with a ram’s horn, a red rope hanging from a little window frame, a clay jar beside a torch, a small hand-sewn coat, a golden sceptre and a wooden boat oar." } },
          { text: "“There isn’t enough time…”", caption: "Even the writer of Hebrews ran out of room!" },
          { text: "Not perfect people.", caption: "Ordinary people who trusted a trustworthy God." },
          { text: "A large crowd of witnesses.", caption: "They’re not just pictures — they’re cheering us on.", shout: true },
          { text: "A brand-new wing.", caption: "Empty frames, each with a name: “These are for you.”",
            art: { key: "t2w10d3-b", label: "Wed · story beat 5 + stretch scene", desc: "A bright new wing of the museum with rows of empty golden picture frames on the walls, the guide raising her lantern and smiling, the three visitors staring at the frames in wonder.", shot: "wide, hopeful", motion: "kenburns-up", chars: ["guide"],
              scene: "A bright, newly opened wing of a grand museum, morning light pouring through high windows onto long walls lined with rows of empty golden picture frames, the smiling silver-haired guide raising her brass lantern, and a boy, a girl and an elderly grandfather standing in the middle, gazing at the empty frames in wonder." } }
        ],
        narration: "Do you remember the Faith Museum from the first week of term? The imaginary building with real exhibits from Hebrews 11? Today the guide has unlocked the doors one last time.\n\nThis time the great hall is full. Along the walls stand the exhibits from our whole term. Firewood and a ram’s horn: Abraham, who trusted that the LORD would provide. A red rope at a window: Rahab, who hid the spies, and Joshua, who marched round Jericho. A clay jar and a torch: Gideon, who felt small but found God was strong. A little hand-made coat: Hannah, who prayed and waited, and her son Samuel, who listened. A tiny cloud: Elijah, who kept praying for rain. A rope from a furnace and a stone from a lions’ den: Shadrach, Meshach, Abednego and Daniel. A golden sceptre: Esther. A hole in a roof and a soldier’s helmet: four friends and a Roman officer who brought their needs to Jesus. A wet footprint: Peter. And a door key: Thomas, who said, ‘My Lord and my God!’\n\nThe writer of Hebrews ran out of room too. ‘What else should I say? There isn’t enough time to tell about Gideon… Samuel, and the prophets.’ They closed the jaws of lions. They put out raging fires.\n\nNow look closely at the people in the exhibits. Not one of them was perfect. Gideon was scared. Elijah got tired. Peter sank. Thomas doubted. The museum isn’t about amazing people. It’s about an amazing God who can be trusted — and ordinary people who trusted him.\n\nThen the writer says something surprising: ‘All of them pleased God because of their faith!’ — yet many of them never saw the end of the story. They were waiting for something better: Jesus.\n\nAnd then he turns the whole museum round. These people aren’t just pictures on a wall. ‘Such a large crowd of witnesses is all around us!’ It’s as if they’re in the stands of a giant stadium, cheering on the people still running. Cheering on — us.\n\nAt the end of the hall is a new wing. The walls are covered with empty frames, each with a name underneath. And the guide holds up her lantern and smiles: ‘These are for you.’",
        notes: "About 3 minutes. The museum, guide and visitors are imagined (from Week 1). Hebrews 11 names some of our heroes (Abraham, Rahab, Gideon, Samuel) and hints at others (lions, fires); Hannah, Elijah, Esther, Peter and Thomas aren’t named there — the guide includes them because they trusted the same God. Hebrews 11:39–40 says they ‘died without being given what had been promised’ because God had ‘something better’ — Jesus. Hannah’s little coat: 1 Samuel 2:19." },

      { type: "question", id: "w-q1", title: "The crowd", minutes: 1, level: "look", mode: "finish", seconds: 20,
        text: "Finish Hebrews 12:1: “Such a large crowd of… is all around us!”",
        reveal: "“…witnesses” (Hebrews 12:1)",
        hint: "Follow-up: ‘Who are the witnesses?’ (All the faith heroes of Hebrews 11 — the people in our museum.) Follow-up 2: ‘What is a witness?’ (Someone who has seen something and can tell others it’s true — they saw God keep his promises.) If silent: point to the last scripture line and read it together, slowly." },

      { type: "roleplay", id: "w-rp", title: "The Faith Museum Returns", minutes: 5, ref: "Hebrews 11:1–12:2",
        art: { key: "t2w10d3-a" },
        imagined: "The museum, the guide and the three visitors are imagined (from Week 1). The lines from Hebrews 11–12 and John 20 are from the CEV; the exhibits are objects from each week’s Bible story.",
        actions: ["Everyone: the creaky museum doors", "Everyone: the museum echo ‘Ooooh…’", "Everyone: the cheering crowd of witnesses"],
        props: ["Optional: a torch for the guide’s lantern", "Optional: an empty picture frame"],
        characters: [
          { name: "Narrator", color: "#F2C77B", desc: "Tells the story" },
          { name: "Guide", color: "#C9A0DC", desc: "The Faith Museum guide — cheerful, loves her exhibits" },
          { name: "Tama", color: "#7BA7D9", desc: "A visitor who asks LOTS of questions" },
          { name: "Ruby", color: "#FFB547", desc: "A visitor who only believes what she can see — changing her mind" },
          { name: "Grandad", color: "#A1887F", desc: "Ruby’s grandad — slow, kind and wise" },
          { name: "Everyone", color: "#FFFFFF", desc: "Creaky doors, museum echoes, a cheering crowd" }
        ],
        lines: [
          { character: "Narrator", text: "Ten weeks later. The museum doors swing open one last time.", direction: true },
          { character: "Everyone", text: "Creeeeeak…", action: "doors opening slowly" },
          { character: "Guide", text: "Welcome back! The hall is full now. Every exhibit from your whole term.", action: "lift lantern" },
          { character: "Tama", text: "Firewood and a ram’s horn! That’s Abraham — the LORD will provide!", action: "run to the first case" },
          { character: "Grandad", text: "And a red rope in a window. Rahab trusted God — and Jericho’s walls fell down." },
          { character: "Ruby", text: "A clay jar and a torch. Gideon. He was scared, wasn’t he?", action: "lean in" },
          { character: "Guide", text: "Very scared. But God made him strong." },
          { character: "Tama", text: "Hannah’s little coat! She prayed and waited. And Samuel said, ‘I’m listening.’" },
          { character: "Grandad", text: "A tiny cloud in a frame. Elijah prayed and prayed — and down came the rain!" },
          { character: "Everyone", text: "Ooooooh…", action: "museum echo" },
          { character: "Guide", text: "They closed the jaws of lions and put out raging fires.", action: "point to a stone and a rope" },
          { character: "Tama", text: "Daniel! And Shadrach, Meshach and Abednego — ‘Even if he doesn’t’!" },
          { character: "Ruby", text: "A golden sceptre. Esther. ‘For such a time as this.’" },
          { character: "Grandad", text: "A hole in a roof, a soldier’s helmet — and a wet footprint. Who’s that?", action: "puzzled" },
          { character: "Tama", text: "Four friends, the Roman officer — and Peter, who walked on water!" },
          { character: "Narrator", text: "The last case holds a single door key.", direction: true },
          { character: "Ruby", text: "Who’s this one?", action: "quietly" },
          { character: "Guide", text: "Thomas. He said, ‘I won’t believe unless I see.’" },
          { character: "Ruby", text: "He was like me! He only believed what he could see.", action: "surprised" },
          { character: "Guide", text: "And Jesus came back for him. Thomas said, ‘You are my Lord and my God!’" },
          { character: "Guide", text: "Then Jesus said: the people who have faith in me without seeing me are really blessed." },
          { pause: "Freeze! Ruby has never seen Jesus. Can she still trust him? What would you tell her?", seconds: 20 },
          { character: "Grandad", text: "None of these people were perfect, Ruby. They just trusted a God who keeps his promises." },
          { character: "Guide", text: "And now they’re not just in frames. Such a large crowd of witnesses is all around us!" },
          { character: "Everyone", text: "Hooray! Keep going! You can do it!", action: "stand and cheer like a stadium crowd" },
          { character: "Tama", text: "Who are they cheering for?" },
          { character: "Guide", text: "For you. Come and see the new wing.", action: "open a door" },
          { character: "Narrator", text: "Rows of empty frames — and under each one, a name.", direction: true },
          { character: "Ruby", text: "That one says ‘Ruby’.", action: "point, slow smile" },
          { character: "Ruby", text: "I haven’t seen him. But I think… I want to trust him.", action: "hand on heart" },
          { character: "Everyone", text: "Keep your eyes on Jesus!" }
        ],
        debrief: [
          { level: "think", text: "Ruby said Thomas was ‘like me’. Why do you think his exhibit helped her most?", hint: "Thomas had the same doubts — and Jesus didn’t reject him. It shows doubters are welcome and that faith can grow. Jesus’ blessing in John 20:29 is for people like Ruby who haven’t seen." },
          { level: "look", text: "What does Hebrews 12:1 call all the heroes in the museum?", hint: "‘A large crowd of witnesses’ — all around us, like a stadium crowd cheering on the runners." }
        ],
        notes: "If students named heroes in the hook, let them shout out the exhibit before the character says it. Esther’s ‘for such a time as this’ (Esther 4:14) and the Week 6 ‘even if he doesn’t’ (Daniel 3:18) are quoted in many Bibles — the CEV wording differs a little. Ruby isn’t forced to a decision; keep it gentle for students who aren’t sure what they believe." },

      { type: "question", id: "w-q2", title: "Never saw the ending", minutes: 1.5, level: "dig", mode: "pair", seconds: 45,
        text: "Hebrews 11 says many of these heroes died without being given everything God had promised. Why would they keep trusting God when they never saw the end of the story?",
        hint: "Good answers: they knew God had kept promises before; they trusted who God is, not just what they could see; they believed God was planning ‘something better’ (Hebrews 11:40) — Jesus; faith is being sure of what we hope for (Hebrews 11:1 from Week 1). Follow-up: ‘How is that like us trusting Jesus without seeing him?’ Follow-up 2: ‘Is it harder to trust God when you can’t see the ending?’ If silent: ask ‘Would you plant a tree you knew you’d never sit under? Why might someone do that?’" },

      { type: "question", id: "w-q3", title: "What they all shared", minutes: 1, level: "think", mode: "discuss", seconds: 40, skippable: true,
        text: "Our heroes were very different — young and old, rich and poor, brave and scared. What did they ALL have in common?",
        hint: "Good answers: they trusted God and acted on it; none of them were perfect; they all faced something hard or scary; God was faithful to every one of them; their faith was in God, not in themselves. Follow-up: ‘Which hero surprised you most this term?’ Follow-up 2: ‘Which hero is most like you — and why?’ If silent: list three very different heroes (old Abraham, young Esther, fisherman Peter) and ask what links them." },

      { type: "apply", id: "w-apply", title: "My own exhibit", minutes: 1,
        head: "The same God who was trustworthy for Abraham, Esther and Thomas is trustworthy for me.",
        heart: "God, I want my life to be an exhibit of trusting you.",
        hands: "Design your own exhibit: draw one object that could go in your frame — a time you trusted God, or one thing you’ll trust him with this week at home, school or sport.",
        settings: ["home", "school", "sport"],
        notes: "If time allows, give out paper ‘frames’ for students to draw their object in. Display them as ‘our new wing’." },

      { type: "scene", id: "w-scene", title: "The new wing", minutes: 0.5, optional: true,
        art: { key: "t2w10d3-b" },
        boxes: [
          { text: "“These are for you.”", pos: "tl", style: "speech" },
          { text: "The museum isn’t finished yet.", pos: "br", style: "caption" }
        ] },

      { type: "verse", id: "w-verse", title: "Verse with actions", minutes: 1, optional: true, activity: "actions",
        notes: "Actions for Hebrews 12:1–2. Let students really ‘run on the spot’ for line four, then freeze and point up for ‘eyes on Jesus’." },

      { type: "prayer", id: "w-pray", title: "Standing with the crowd", minutes: 3, mood: "calm", style: "stand",
        tip: "The heroes of faith are like a crowd cheering us on. Let’s stand together and pray — and bring God our faith and our doubts, like Thomas.",
        opening: "Let’s stand up. Imagine the great crowd of witnesses all around us. Take a slow breath.",
        phases: [
          { name: "Wow", lead: "Every hero trusted the same God. Say it together:",
            prompts: ["God, you provided for Abraham and made Gideon strong.", "Jesus, you are Lord and God — like Thomas said."],
            starter: "Wow, God, you…", seconds: 30, aloud: "Wow, God — you were faithful to every one of them!" },
          { name: "Sorry", lead: "Silently: the heroes weren’t perfect. Neither are we.",
            prompts: ["Sorry for the times I trusted myself instead of you.", "Sorry for giving up too quickly."],
            starter: "God, I’m sorry for…", seconds: 25, aloud: "God, we’re sorry for the times we didn’t trust you." },
          { name: "Thanks", lead: "Thank God for one hero from the term who helped you.",
            prompts: ["Thank you for (hero), who showed me…", "Thank you for the people in my life who trust you."],
            starter: "Thank you, God, for…", seconds: 35, aloud: "Thank you, God, for the great crowd of witnesses!" },
          { name: "Please", lead: "Ask God to help you trust him without seeing — and to grow your faith.",
            prompts: ["I do have faith — please help me to have even more.", "Please help me keep my eyes on Jesus this week."],
            starter: "Please, God, help…", seconds: 40, aloud: "Lord, we do have faith — please help us to have even more." }
        ],
        closing: "Everyone: Amen! Please sit.",
        notes: "Standing is optional. Encourage students to name a different hero each in the Thanks phase if they pray aloud." }
    ] },

  /* ======================= THURSDAY ======================= */
  { label: "Thursday", theme: "Eyes on Jesus", roleplay: false, mood: "dawn",
    learningIntentions: [
      "We are learning what Hebrews 12:1–3 means by running the race with our eyes on Jesus.",
      "We are learning what this whole term has shown us about trusting God.",
      "I can answer the term’s big question, ‘Can I trust God?’, using the term’s heroes and ‘God is…’ words."
    ],
    assessment: "Students can put the term’s ten heroes in order, match several heroes to the term’s ‘God is…’ words, explain ‘keep our eyes on Jesus’, and recite Hebrews 12:1–2.",
    resources: ["Screen", "Take-home challenge cards", "Optional: the term’s ten ‘God is…’ words on cards", "Optional: small cards for students’ faith statements"],
    whereToNext: "Term 3: Having Faith in God — Jesus’ famous parables, starting with The Sower.",
    slides: [
      { type: "title", id: "th-title", title: "Eyes on Jesus", minutes: 0.5, kicker: "Term 2 · Week 10", sub: "Faith Without Seeing",
        art: { key: "t2w10d4-a" }, notes: "The final devotion of Term 2 — celebrate!" },

      { type: "review", id: "th-review", title: "Ten heroes in order", minutes: 2.5, format: "order",
        prompt: "Put the term’s ten faith heroes in order — Week 1 to Week 10!",
        items: ["Abraham — “The LORD will provide”", "Rahab and Joshua — the walls fall down", "Gideon — jars, torches and trumpets", "Hannah and Samuel — praying and listening", "Elijah — fire on the mountain", "Shadrach, Meshach, Abednego and Daniel — “even if…”", "Esther — “for such a time as this”", "Four friends and the centurion — bringing needs to Jesus", "Peter — walking on the water", "Thomas — “My Lord and my God!”"],
        hint: "Students call out the next hero; click to place it. For each one, ask: ‘What did they trust God for?’ Keep it quick — about 15 seconds per hero.",
        notes: "Cards start scrambled. This is the whole term in one game." },

      { type: "scripture", id: "th-scr", title: "Hebrews 12:1–3", minutes: 1, ref: "Hebrews 12:1–3", version: "CEV",
        lines: [
          { text: "Such a large crowd of witnesses is all around us! So we must get rid of everything that slows us down, especially the sin that just won’t let go.", ref: "Hebrews 12:1" },
          { text: "And we must be determined to run the race that is ahead of us.", ref: "Hebrews 12:1" },
          { text: "We must keep our eyes on Jesus, who leads us and makes our faith complete.", ref: "Hebrews 12:2" },
          { text: "He endured the shame of being nailed to a cross, because he knew that later on he would be glad he did. Now he is seated at the right side of God’s throne!", ref: "Hebrews 12:2" }
        ],
        emphasis: ["large crowd of witnesses", "slows us down", "run the race", "keep our eyes on Jesus", "makes our faith complete", "seated at the right side"],
        notes: "‘Sin’ = the wrong things we do that break our friendship with God. ‘Endured’ = put up with something hard all the way to the end. Verse 3 adds: ‘So keep your mind on Jesus… Then you won’t get discouraged and give up.’" },

      { type: "story", id: "th-story", title: "Run the race", minutes: 2, transition: "page", mood: "dawn",
        beats: [
          { text: "Out of the museum — into a stadium.", caption: "Every seat packed with the heroes of faith, cheering.",
            art: { key: "t2w10d4-a", label: "Thu · title + story beats 1–2", desc: "An ancient open-air stadium at sunrise, the stands packed with a huge cheering crowd in Bible-time clothes, a lone young runner on the track in the foreground, leaning forward, eyes fixed far ahead.", shot: "epic wide, low angle", motion: "kenburns-up",
              scene: "An enormous ancient open-air stone stadium at sunrise, its tiered stands packed with a vast cheering crowd in Bible-time robes waving their arms, and in the foreground a lone young runner on the dusty track leaning forward mid-stride, eyes fixed far ahead on a bright glow at the end of the track." } },
          { text: "Three pieces of running advice.", caption: "Drop what slows you down. Keep going. Eyes on Jesus." },
          { text: "Jesus ran first.", caption: "All the way to the cross — and he won.", shout: true,
            art: { key: "t2w10d4-b", label: "Thu · story beats 3–4 + stretch scene", desc: "Jesus seen from behind, standing at the bright finish line of the ancient track with his arms open wide, golden sunrise light pouring around him, as distant runners come towards him.", shot: "wide, from behind", motion: "kenburns-in", chars: ["jesus"],
              scene: "Jesus seen from behind, standing at the finish line at the end of an ancient stone running track with his arms open wide in welcome, golden sunrise light pouring around him and across the track, while several small distant runners of different ages race towards him." } },
          { text: "Can I trust God?", caption: "Yes. God is trustworthy." }
        ],
        narration: "Hebrews 12 takes us out of the museum and into a stadium. Picture a huge running track, and every seat packed. Abraham is there. Rahab. Gideon. Hannah and Samuel. Elijah. Daniel and his three friends. Esther. Peter. Thomas. A large crowd of witnesses — people who have already run their race — all cheering.\n\nAnd who is on the track? We are.\n\nThe writer gives three pieces of running advice. First: get rid of everything that slows you down — especially sin, the wrong things that ‘just won’t let go’. Nobody runs a race carrying a heavy backpack. Second: be determined. Faith isn’t a quick sprint; it’s a long race. Third, and most important: keep your eyes on Jesus.\n\nNot on the crowd. Not on the other runners. On Jesus. He leads us, because he ran the race first. And he makes our faith complete. When our faith is wobbly like Peter’s, or full of questions like Thomas’, Jesus is the one who finishes it.\n\nHow did Jesus run his race? All the way to the cross. He put up with the shame because he knew the joy that was coming — rescuing us. Now he is seated at the right side of God’s throne. He finished. He won.\n\nSo — our big question this term: Can I trust God? Look at the evidence. God provided for Abraham. He was with Joshua. He made Gideon strong. He listened to Hannah. He showed he was the only God on Elijah’s mountain. He was able to save in the fire. He was at work for Esther. He was compassionate to a man who couldn’t walk. He was Lord of the storm. And he came back for Thomas.\n\nYes. God is trustworthy. Keep your eyes on Jesus — and keep running.",
        notes: "About 2 minutes. The ten ‘God is…’ words of the term are in the last paragraph — point to them on cards or the board if you have them. Hebrews 12:2 in many Bibles calls Jesus ‘the author and finisher (or perfecter) of our faith’." },

      { type: "question", id: "th-q1", title: "Eyes on…", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "According to Hebrews 12:2, who must we keep our eyes on as we run the race?",
        options: ["The crowd in the stands", "The other runners", "Jesus", "Ourselves"], answer: 2,
        hint: "Answer: C (Hebrews 12:2). Follow-up: ‘What two things does Jesus do for our faith?’ (He leads us and makes our faith complete.) Follow-up 2: ‘What must we get rid of because it slows us down?’ (Everything that slows us down, especially sin.) If silent: read the third scripture line together." },

      { type: "question", id: "th-q2", title: "God is…", minutes: 1.5, level: "think", mode: "pair", seconds: 45,
        text: "This term, each hero showed us something about God. With your partner, match as many heroes as you can to the term’s ‘God is…’ words.",
        hint: "Answers: Provider (Abraham, W1), With Us (Rahab and Joshua, W2), Strong (Gideon, W3), Listening (Hannah and Samuel, W4), The Only God (Elijah, W5), Able (Shadrach, Meshach, Abednego and Daniel, W6), At Work (Esther, W7), Compassionate (the four friends and the centurion, W8), Lord of the Storm (Peter, W9), Trustworthy (Thomas, W10). Follow-up: ‘Which one matters most to you right now?’ Follow-up 2: ‘Which story helped you see it best?’ If silent: give each pair two weeks to look back on." },

      { type: "recap", id: "th-recap", title: "Term 2’s Big Idea", minutes: 1.5,
        points: [
          "Faith is trusting God enough to act on what he says — even when we can’t see how it will work out.",
          "From Abraham to Thomas, ordinary, imperfect people trusted God, and he never let them down.",
          "We haven’t seen Jesus, but we can trust him — he leads us and makes our faith complete."
        ],
        notes: "This recap covers the whole term. Then the Big Idea for Week 10 stamps in. The term’s big question was ‘Can I trust God?’ — let the class answer it out loud: ‘Yes!’" },

      { type: "question", id: "th-q3", title: "What slows you down?", minutes: 1.5, level: "dig", mode: "silent", seconds: 30, skippable: true,
        text: "Hebrews says some things slow us down in the race of faith, and some people get discouraged and give up. What slows kids down in following Jesus — and how does keeping your eyes on him help?",
        hint: "Give 30 seconds of silent thinking, then take answers. Ideas: being too busy; screens; what friends think; doubts that we never talk about; a habit of sin like lying or meanness; disappointment when prayers aren’t answered how we hoped. Keeping our eyes on Jesus means remembering what he did, talking to him, reading about him, and trusting he finishes what he starts. Follow-up: ‘Which hero this term nearly gave up — and what helped?’ (Elijah, Gideon, Peter.) Follow-up 2: ‘What is one thing you could drop to run better?’ If silent: share an honest example of your own." },

      { type: "challenge", id: "th-chal", title: "This Week’s Challenge", minutes: 2,
        text: "Write your own one-sentence faith statement — like Thomas’ “My Lord and my God!” — and put it somewhere you’ll see it every day: on your bedroom wall, in your pencil case or on the fridge.",
        why: "“We must keep our eyes on Jesus, who leads us and makes our faith complete.” — Hebrews 12:2",
        head: "God is trustworthy — Jesus leads me and makes my faith complete.", heart: "I do have faith, Lord — help me to have even more.", hands: "Write a one-sentence faith statement and put it where I’ll see it.",
        takeHome: true,
        notes: "Term 3’s first Monday will check in on this. Give examples if needed: ‘I can trust God because he never let Abraham down.’ ‘Jesus, you are my Lord and my God.’ Students unsure about faith could write a question they want to keep exploring." },

      { type: "verse", id: "th-verse", title: "Memory verse: fade-out", minutes: 1.5, activity: "fade",
        notes: "Fade out Hebrews 12:1–2. Bonus round: can anyone still say Hebrews 11:1 from Week 1 — the sign above the museum door?" },

      { type: "scene", id: "th-scene", title: "The finish line", minutes: 1, optional: true,
        art: { key: "t2w10d4-b" },
        boxes: [
          { text: "Can I trust God?", pos: "tl", style: "shout" },
          { text: "Keep your eyes on Jesus — and keep running.", pos: "br", style: "caption" }
        ] },

      { type: "prayer", id: "th-pray", title: "A term of trust", minutes: 3, mood: "calm", style: "out-loud",
        tip: "Let’s finish the term by praying out loud together — and using the ‘help my unbelief’ prayer we learned this week.",
        opening: "Let’s pray together to finish Term 2. In the Wow part, anyone can call out one of this term’s ‘God is…’ words.",
        phases: [
          { name: "Wow", lead: "Call out one thing God is — from any week this term!",
            prompts: ["God, you are our Provider! You are With Us! You are Strong!", "Jesus, you are Lord of the Storm — my Lord and my God!"],
            starter: "God, you are…", seconds: 50, aloud: "God, you are Provider, Strong, Able and Trustworthy!" },
          { name: "Sorry", lead: "Silently: is there anything slowing you down that you want to give to God?",
            prompts: ["Sorry for the sin that won’t let go: …", "Thank you that Jesus went to the cross to forgive me."],
            starter: "God, I’m sorry for…", seconds: 25, aloud: "God, we’re sorry — and we thank you that Jesus forgives us." },
          { name: "Thanks", lead: "Thank God for the heroes — and for Jesus, who ran first.",
            prompts: ["Thank you for the great crowd of witnesses.", "Thank you, Jesus, that you finished the race for us."],
            starter: "Thank you, God, for…", seconds: 30, aloud: "Thank you, Jesus, that you lead us and make our faith complete!" },
          { name: "Please", lead: "Pray for the holidays — and for faith that keeps running.",
            prompts: ["I do have faith — please help me to have even more.", "Please keep us safe in the holidays and help us keep our eyes on Jesus."],
            starter: "Please, God, help…", seconds: 35, aloud: "Lord, we do have faith — please help us to have even more. Keep our eyes on Jesus." }
        ],
        closing: "Let’s say Hebrews 12:1–2 together as our final prayer of Term 2. Amen!",
        notes: "Celebrate! Consider a small certificate for memory-verse champions or a display of the students’ ‘new wing’ exhibits from Wednesday." }
    ] }
  ]
};
