/* Morninglight 2027 — Term 1 Week 9: Promises Spoken Long Ago (Isaiah 9; 53; Micah 5; Matthew 2; Jeremiah 31). Scripture: CEV. */
window.DEVOTIONS = window.DEVOTIONS || {};
window.DEVOTIONS["Term 1"] = window.DEVOTIONS["Term 1"] || {};
window.DEVOTIONS["Term 1"]["Week 9"] = {
  lessonTitle: "Promises Spoken Long Ago",
  passage: "Isaiah 9:2–7; 53:4–6; Micah 5:2; Matthew 2:1–12; Jeremiah 31:31–34",
  bigIdea: "Hundreds of years before, God’s messengers promised a King and Saviour — and God never forgot.",
  godIs: "Promise-Keeper",
  memoryVerse: { ref: "Isaiah 9:6", text: "A child has been born for us. We have been given a son who will be our ruler. His names will be Wonderful Advisor and Mighty God, Eternal Father and Prince of Peace.", version: "CEV",
    chunks: ["A child has been born for us.", "We have been given a son", "who will be our ruler.", "His names will be Wonderful Advisor", "and Mighty God,", "Eternal Father and Prince of Peace."],
    actions: ["Rock a baby in your arms", "Open hands — a gift", "Hands make a crown on your head", "Tap your temple — wise", "Flex — mighty!", "Hands together, then spread slowly — peace"] },
  prayerFocus: { skill: "Praying God’s promises back to him", tip: "When you find a promise in the Bible, you can pray it back: ‘God, you promised… so please…’ It’s like reminding him — and reminding yourself." },
  mood: "night",
  cover: "t1w09-cover",
  characters: ["isaiah", "wisemen"],
  coverArt: { key: "t1w09-cover", label: "Week cover", desc: "A single bright star over a small hill-town at night, a long road toward it, three travellers on camels in silhouette, a far scroll glowing in the sky.", shot: "wide",
    scene: "A single bright star shining over a small hill-town at night, a long road leading toward it, three travellers on camels in silhouette and a far scroll glowing in the sky." },
  comicArt: { key: "t1w09-comic", label: "Comic page (week opener — for the comic-page viewer, coming in a later build)", format: "portrait", desc: "Six-panel comic page of the wise men’s journey.",
    panels: "Six panels. Panel 1 (wide): a desert road at dusk, three travellers on camels in silhouette heading toward a walled hill-town. Panel 2 (small): a bright star above flat rooftops. Panel 3 (wide): the travellers' faces lit by firelight, wonder in their eyes. Panel 4 (tall): a palace hall with columns and a king's throne seen from a low angle as a huge dark silhouette, advisors bowing. Panel 5 (small): hands unrolling an ancient scroll. Panel 6 (wide, bottom): the travellers turning toward a small village under the same star.", chars: ["wisemen"] },

  days: [

  /* ======================= MONDAY ======================= */
  { label: "Monday", theme: "A Child Is Born", roleplay: true, mood: "night",
    learningIntentions: [
      "We are learning what a prophet is and what Isaiah promised.",
      "We are learning the names Isaiah gave the promised child.",
      "I can explain how Isaiah’s promise points to Jesus."
    ],
    assessment: "Listen for students explaining what a prophet is and linking Isaiah 9:6 names to Jesus.",
    resources: ["Screen", "Optional: a rolled-up paper ‘scroll’"],
    whereToNext: "Tomorrow: a promised servant who would carry our wrongs — and 400 very quiet years.",
    slides: [
      { type: "title", id: "m-title", title: "A Child Is Born", minutes: 0.5, kicker: "Term 1 · Week 9", sub: "Promises Spoken Long Ago",
        art: { key: "t1w09-cover" }, notes: "Let the splash play." },

      { type: "hook", id: "m-hook", title: "Spoilers!", minutes: 1.5,
        checkin: { text: "Last week we met David the shepherd-king — and Jesus, the Good Shepherd. Your challenge: pray Psalm 23:1 every night. Can someone say it for us? Did you remember?" },
        text: "Imagine someone told you how a movie would end — 700 years before it was even made.",
        ask: "Would you believe them? What would it take?",
        hint: "Check-in first: have a volunteer say Psalm 23:1. Then the hook: it would take it actually coming true! Land it: ‘This week we hear promises God spoke hundreds of years before Jesus was born — and watch them come true.’" },

      { type: "scripture", id: "m-scr", title: "Isaiah 9:2, 6–7", minutes: 1, ref: "Isaiah 9:2, 6–7", version: "CEV",
        lines: [
          { text: "Those who walked in the dark have seen a bright light. And it shines upon everyone who lives in the land of darkest shadows.", ref: "Isaiah 9:2" },
          { text: "A child has been born for us. We have been given a son who will be our ruler.", ref: "Isaiah 9:6" },
          { text: "His names will be Wonderful Advisor and Mighty God, Eternal Father and Prince of Peace.", ref: "Isaiah 9:6" },
          { text: "His power will never end; peace will last forever. He will rule David’s kingdom.", ref: "Isaiah 9:7" }
        ],
        emphasis: ["bright light", "A child has been born for us", "Prince of Peace", "never end"],
        notes: "Isaiah 9:6 is our memory verse." },

      { type: "story", id: "m-story", title: "A voice in the dark", minutes: 3, transition: "page", mood: "night",
        beats: [
          { text: "Dark days for God’s people.", caption: "Kings who forgot God. Enemies all around. Fear everywhere." },
          { text: "God sent messengers called prophets.", caption: "People who spoke God’s words. One was named Isaiah.",
            art: { key: "t1w09d1-a", label: "Mon · story beats 2–3 + role-play card", desc: "Isaiah standing on a stone step in a busy marketplace holding up a scroll, a crowd of silhouetted listeners, one child looking up at him.", shot: "medium wide", motion: "kenburns-in", chars: ["isaiah"],
              scene: "Isaiah standing on a stone step in a busy marketplace holding up a scroll, a crowd of silhouetted listeners, one child looking up at him." } },
          { text: "“A great light is coming!”", caption: "“Those who walked in the dark have seen a bright light.”", shout: true,
            art: { key: "t1w09d1-b", label: "Mon · story beats 3–5 + stretch scene", desc: "A crowd of silhouetted people walking through deep darkness, all looking up toward a distant brilliant shaft of light on a far hilltop.", shot: "wide, dramatic", motion: "kenburns-up",
              scene: "A crowd of silhouetted people walking through deep darkness, all looking up toward a distant brilliant shaft of light on a far hilltop." } },
          { text: "“A child has been born for us.”", caption: "Wonderful Advisor. Mighty God. Eternal Father. Prince of Peace." },
          { text: "700 years later…", caption: "A baby was born in Bethlehem. God hadn’t forgotten." }
        ],
        narration: "After King David, God’s people had many more kings. Some of them loved God. But many didn’t. They worshipped idols, treated poor people cruelly, and forgot the God who had rescued them from Egypt. Enemy armies were growing stronger. It was a dark, frightening time.\n\nSo God sent messengers. The Bible calls them prophets. A prophet wasn’t a fortune teller. A prophet was someone God gave a message to, so they could tell the people. Sometimes the message was a warning: ‘Turn back to God!’ And sometimes it was a promise — a promise about the future, so that people would have hope.\n\nOne of the greatest prophets was a man called Isaiah. He lived about seven hundred years before Jesus was born. Imagine Isaiah standing in a busy marketplace in Jerusalem, surrounded by people buying bread and arguing about prices, and lifting his voice: ‘Those who walked in the dark have seen a bright light!’\n\nThe people must have looked up, puzzled. Light? What light? Things were getting darker!\n\nBut Isaiah kept going. ‘A child has been born for us. We have been given a son who will be our ruler.’ A king was coming — not just any king. Listen to his names: ‘Wonderful Advisor’ — he will always know what to do. ‘Mighty God’ — this child would somehow be God himself! ‘Eternal Father’ — he will care for his people forever. ‘Prince of Peace’ — he will bring real peace, between people and God, and between people and each other.\n\nAnd Isaiah said, ‘His power will never end; peace will last forever. He will rule David’s kingdom.’ So this child would come from King David’s family — just like God had promised David.\n\nPeople waited. A hundred years. Two hundred. Five hundred. Isaiah died. His words were written on scrolls and copied again and again. Did people wonder if God had forgotten?\n\nBut about seven hundred years later, in David’s little town of Bethlehem, a baby was born. And when people met Jesus, they realised: this is the child Isaiah was talking about. The light had come into the darkness. God had never forgotten his promise.",
        notes: "About 3 minutes. Isaiah prophesied about 740–700 BC. The marketplace scene is imagined; the words are Isaiah 9 (CEV). Matthew 4:16 quotes Isaiah 9:2 about Jesus." },

      { type: "question", id: "m-q1", title: "What is a prophet?", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "What is a prophet?",
        options: ["A fortune teller", "Someone who gives God’s messages to people", "A king’s soldier", "A kind of priest who sacrifices animals"], answer: 1,
        hint: "Answer: B. Follow-up: ‘Name the prophet in today’s story.’ (Isaiah.) Follow-up 2: ‘How long before Jesus did Isaiah live?’ (About 700 years.) If silent: recall Samuel from last week — he was a prophet too!" },

      { type: "question", id: "m-q2", title: "Four names", minutes: 1.5, level: "think", mode: "pair", seconds: 45, skippable: true,
        text: "Isaiah gave the promised child four names: Wonderful Advisor, Mighty God, Eternal Father, Prince of Peace. Choose one. What does it tell us about Jesus?",
        hint: "Wonderful Advisor — wise, always knows the right way; Mighty God — Jesus is God himself, powerful; Eternal Father — loves and cares forever; Prince of Peace — brings peace with God and between people. Follow-up: ‘Which name do you need most right now?’ Follow-up 2: ‘Where in Jesus’ life do we see that name?’ (e.g., calming the storm — Mighty God.) If silent: assign one name per table." },

      { type: "roleplay", id: "m-rp", title: "A Prophet in the Marketplace", minutes: 5, ref: "Isaiah 9:2–7",
        art: { key: "t1w09d1-a" },
        imagined: "This scene is a dramatisation: the marketplace and the crowd’s lines are imagined. Isaiah’s words are from Isaiah 9 (CEV).",
        actions: ["Everyone: busy market noise — ‘Fresh bread! Figs! Fish!’", "Everyone: gasp at ‘Mighty God’"],
        props: ["Optional: a paper scroll for Isaiah"],
        characters: [
          { name: "Narrator", color: "#F2C77B", desc: "Tells the story" },
          { name: "Isaiah", color: "#FFB547", desc: "The prophet — bold and hopeful" },
          { name: "Merchant", color: "#A1887F", desc: "Busy fruit seller — sceptical" },
          { name: "Mother", color: "#F48FB1", desc: "Worried about the future" },
          { name: "Child", color: "#8BC34A", desc: "Curious — asks the best questions" },
          { name: "Soldier", color: "#90A4AE", desc: "Thinks only armies can save them" },
          { name: "Everyone", color: "#FFFFFF", desc: "The busy marketplace crowd" }
        ],
        lines: [
          { character: "Narrator", text: "Jerusalem, about 700 years before Jesus. A busy marketplace.", direction: true },
          { character: "Everyone", text: "Fresh bread! Figs! Fish! Cheap sandals!", action: "busy market noise" },
          { character: "Mother", text: "Did you hear? Enemy armies are getting closer. I’m scared for my children." },
          { character: "Soldier", text: "We need more soldiers. More swords. That’s the only hope." },
          { character: "Isaiah", text: "Listen! Listen, everyone! I have a message from the LORD!", action: "stand on a step, hold up a scroll" },
          { character: "Merchant", text: "Oh no, it’s Isaiah again.", action: "roll eyes" },
          { character: "Isaiah", text: "Those who walked in the dark have seen a bright light!" },
          { character: "Child", text: "Mum, what light? It’s all dark and scary." },
          { character: "Isaiah", text: "A child has been born for us. We have been given a son who will be our ruler." },
          { character: "Soldier", text: "A baby? We need an army, not a baby!", action: "scoff" },
          { pause: "Freeze! The soldier wants an army. God promises a baby. Why might God’s plan be so different?", seconds: 20 },
          { character: "Isaiah", text: "His names will be Wonderful Advisor and Mighty God…" },
          { character: "Everyone", text: "Mighty GOD?!", action: "gasp" },
          { character: "Isaiah", text: "…Eternal Father and Prince of Peace." },
          { character: "Mother", text: "Peace… that’s what we need." },
          { character: "Isaiah", text: "His power will never end; peace will last forever. He will rule David’s kingdom." },
          { character: "Child", text: "When is he coming?" },
          { character: "Isaiah", text: "I don’t know when. But God has promised. And God keeps his promises." },
          { character: "Merchant", text: "Hmph. We’ll see.", action: "go back to selling" },
          { character: "Child", text: "I’m going to remember it. And tell my kids. And they’ll tell their kids.", action: "to Mum" },
          { character: "Narrator", text: "And they did. For 700 years, people remembered Isaiah’s promise." },
          { character: "Everyone", text: "A child has been born for us!" }
        ],
        debrief: [
          { level: "think", text: "Why do you think God promised a child instead of an army?", hint: "God’s rescue would be different — not just from enemies, but from sin; a king who brings peace, not war; God himself would come." },
          { level: "look", text: "Whose kingdom would the child rule?", hint: "David’s kingdom (Isaiah 9:7) — Jesus was from David’s family." }
        ],
        notes: "Remind students the crowd lines are imagined." },

      { type: "question", id: "m-q3", title: "Waiting 700 years", minutes: 1, level: "dig", mode: "discuss", seconds: 40,
        text: "God made this promise 700 years before Jesus came. Why might God wait so long to keep a promise?",
        hint: "Honest answer: we don’t fully know. Ideas: God’s timing is perfect (Galatians 4:4 ‘when the time was right’); preparing the world; giving people time; building expectation; God sees the whole story. Follow-up: ‘How might people have felt during the wait?’ Follow-up 2: ‘What does this teach us about God’s promises to us?’ (He doesn’t forget, even if it’s long.) If silent: remember Abraham’s 25-year wait." },

      { type: "apply", id: "m-apply", title: "Head · Heart · Hands", minutes: 1,
        head: "God made promises about Jesus long before he came — and kept every one.",
        heart: "Jesus, you are my Wonderful Advisor and Prince of Peace.",
        hands: "This week, when you feel worried, pray one of Jesus’ names: “Prince of Peace, please give me peace.”",
        settings: ["school", "home", "bedtime"],
        notes: "Practise the prayer together once." },

      { type: "scene", id: "m-scene", title: "A great light", minutes: 0.5, optional: true,
        art: { key: "t1w09d1-b" },
        boxes: [
          { text: "“Those who walked in the dark…”", pos: "tl", style: "caption" },
          { text: "“…have seen a bright light.”", pos: "br", style: "shout" }
        ] },

      { type: "verse", id: "m-verse", title: "Memory verse peek", minutes: 1, optional: true, activity: "echo",
        notes: "Isaiah 9:6 is long — echo it in chunks." },

      { type: "prayer", id: "m-pray", title: "Promise prayer (silent)", minutes: 3, mood: "calm", style: "silent",
        tip: "Praying God’s promises back: ‘God, you promised… so please…’ It isn’t bossing God — it’s trusting what he said.",
        opening: "Let’s get still. Think about light shining into the dark.",
        phases: [
          { name: "Wow", lead: "Jesus has four amazing names.",
            prompts: ["Jesus, you are Wonderful Advisor.", "Jesus, you are Mighty God and Prince of Peace."],
            starter: "Jesus, you are…", seconds: 35, aloud: "Jesus — Wonderful Advisor, Mighty God, Eternal Father, Prince of Peace!" },
          { name: "Sorry", lead: "Is there a time you didn’t trust God’s promises?",
            prompts: ["Sorry for thinking you forgot me.", "Sorry for trusting other things more than you."],
            starter: "God, I’m sorry for…", seconds: 30, aloud: "God, I’m sorry for doubting your promises." },
          { name: "Thanks", lead: "Thank God for keeping his promise about Jesus.",
            prompts: ["Thank you for sending Jesus.", "Thank you that you never forget."],
            starter: "Thank you, God, for…", seconds: 30, aloud: "Thank you, God, for keeping your promise and sending Jesus." },
          { name: "Please", lead: "Pray a promise back: ‘You promised peace — please bring peace to…’",
            prompts: ["Prince of Peace, please bring peace to my family.", "Please bring peace where there is war."],
            starter: "You promised… so please…", seconds: 40, aloud: "Prince of Peace — you promised peace, so please bring peace to our world." }
        ],
        closing: "Everyone: Amen.",
        notes: "Model the ‘You promised… so please…’ structure." }
    ] },

  /* ======================= TUESDAY ======================= */
  { label: "Tuesday", theme: "The Servant Who Carries Our Wrongs", roleplay: false, mood: "night",
    learningIntentions: [
      "We are learning Isaiah’s promise of a servant who would suffer for others.",
      "We are learning about the ‘quiet years’ between the Old and New Testaments.",
      "I can explain how Isaiah 53 points to Jesus."
    ],
    assessment: "Listen for students linking ‘he was wounded because of our sins’ to Jesus on the cross, explained simply and hopefully.",
    resources: ["Screen", "Optional: a backpack loaded with books (for the ‘carrying’ demonstration)"],
    whereToNext: "Tomorrow: wise men follow a star — and ask a jealous king for directions.",
    slides: [
      { type: "title", id: "t-title", title: "The Servant Who Carries Our Wrongs", minutes: 0.5, kicker: "Term 1 · Week 9", sub: "Promises Spoken Long Ago",
        art: { key: "t1w09d2-a" }, notes: "Let the splash play." },

      { type: "hook", id: "t-recap", title: "Recap", minutes: 1, style: "recap",
        text: "Yesterday Isaiah promised a child…",
        ask: "Can you remember the four names?",
        hint: "Wonderful Advisor, Mighty God, Eternal Father, Prince of Peace. ‘Today Isaiah tells us something surprising about what this King would do.’" },

      { type: "scripture", id: "t-scr", title: "Isaiah 53:4–6", minutes: 1, ref: "Isaiah 53:4–6", version: "CEV",
        lines: [
          { text: "He suffered and endured great pain for us, but we thought his suffering was punishment from God.", ref: "Isaiah 53:4" },
          { text: "He was wounded and crushed because of our sins; by taking our punishment, he made us completely well.", ref: "Isaiah 53:5" },
          { text: "All of us were like sheep that had wandered off. We had each gone our own way, but the LORD gave him the punishment we deserved.", ref: "Isaiah 53:6" }
        ],
        emphasis: ["for us", "because of our sins", "made us completely well", "like sheep"],
        notes: "Read gently and slowly. Notice the sheep picture from last week!" },

      { type: "story", id: "t-story", title: "A surprising King", minutes: 3.5, transition: "page", mood: "night",
        beats: [
          { text: "A King who would… suffer?", caption: "Isaiah described a servant who would be hurt — for other people.",
            art: { key: "t1w09d2-a", label: "Tue · title + story beats 1–3", desc: "An old scroll unrolled on a table by lamplight, weathered hands holding it open, a faint glowing image of a lamb rising from the page.", shot: "close-up", motion: "kenburns-in",
              scene: "An old scroll unrolled on a table by lamplight, a reader's weathered hands holding it open, a faint glowing image of a lamb rising from the page." } },
          { text: "Like sheep that wandered off.", caption: "We’ve all gone our own way." },
          { text: "He took our punishment.", caption: "“By taking our punishment, he made us completely well.”", shout: true },
          { text: "Then… silence.", caption: "About 400 years with no new prophet.",
            art: { key: "t1w09d2-b", label: "Tue · story beats 4–5 + stretch scene", desc: "A silent empty temple courtyard at dusk with blowing dust, long shadows, one old man waiting alone looking at the sky.", shot: "wide, still", motion: "kenburns-out",
              scene: "A silent empty temple courtyard at dusk with blowing dust, long shadows, one old man waiting alone looking at the sky." } },
          { text: "Still waiting. Still hoping.", caption: "God was quiet — but he was not gone." }
        ],
        narration: "Yesterday we heard Isaiah’s promise of a child who would be a mighty King. But later in Isaiah’s book, there’s something that would have surprised everyone. Isaiah talks about a servant of God — someone who would suffer. Who would be hurt. Who would be treated badly. And he would go through it not because of anything he did wrong, but for other people.\n\nListen again: ‘He suffered and endured great pain for us.’ For us. ‘He was wounded and crushed because of our sins. By taking our punishment, he made us completely well.’\n\nRemember Week 2, when Adam and Eve chose their own way instead of God’s? Isaiah says we’re all a bit like that. ‘All of us were like sheep that had wandered off. We had each gone our own way.’ Do you remember last week, how sheep wander off and get into trouble? That’s us. Every one of us has done wrong things — sins. And sin breaks our friendship with God and deserves a punishment.\n\nBut then Isaiah says something amazing: ‘The LORD gave him the punishment we deserved.’\n\nLet me show you what that means. Imagine you had a heavy backpack full of everything wrong you’ve ever done. Every lie. Every unkind word. Every selfish choice. It’s far too heavy. You can’t carry it. And then someone comes along and says, ‘Give it to me. I’ll carry it for you.’ And he takes it — all of it — onto his own back.\n\nThat is what Isaiah promised the servant would do. And when Jesus came, that is exactly what he did. On the cross, Jesus carried our sins, so that we could be forgiven and made completely well. Isaiah wrote that about seven hundred years before it happened.\n\nThat’s a lot to think about, so let’s go gently. The important thing is this: it was done out of love. And it isn’t the end of the story — because Jesus didn’t stay dead. He rose again.\n\nNow, after Isaiah, God sent a few more prophets. Then the last prophet of the Old Testament, a man called Malachi, finished speaking. And then… silence. For about four hundred years, there were no new prophets. No new messages from God. People kept reading the old scrolls. They kept waiting. Some kept hoping. Others gave up.\n\nImagine waiting four hundred years for a promise. That’s about twenty generations — your great-great-great-great… (keep going a lot) …grandparents.\n\nBut God was not gone. He was quiet, but he was getting everything ready. And when the time was exactly right, the silence would be broken — first by an angel, and then by the cry of a newborn baby in Bethlehem.",
        notes: "About 3½ minutes. Isaiah 53 is handled gently: ‘hurt’ and ‘carried’ language. Optional demonstration: a heavy backpack, which you take from a volunteer. The ‘400 years’ is an approximation (Malachi c. 430 BC)." },

      { type: "dig", id: "t-dig", title: "Isaiah and Jesus", minutes: 2,
        prompt: "Isaiah wrote about the servant 700 years before Jesus. Match the promise to what happened.",
        columns: ["Isaiah promised…", "With Jesus…"],
        items: [
          { left: "“He suffered… for us”", right: "Jesus suffered on the cross for others" },
          { left: "“Because of our sins”", right: "Jesus never sinned — he died for OUR sins" },
          { left: "“Like sheep that had wandered off”", right: "Jesus called himself the Good Shepherd" },
          { left: "“He made us completely well”", right: "Through Jesus we can be forgiven and made right with God" }
        ],
        reveal: "Isaiah was describing Jesus — 700 years early.",
        notes: "Reveal row by row. Keep the tone hopeful." },

      { type: "question", id: "t-q1", title: "Like sheep", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "Isaiah 53:6 says all of us are like what?",
        options: ["Lions that roar", "Sheep that wandered off", "Birds that fly away", "Fish in the sea"], answer: 1,
        hint: "Answer: B. Follow-up: ‘What does wandering off mean for people?’ (Going our own way instead of God’s.) Follow-up 2: ‘Who did Jesus say he was?’ (The Good Shepherd — last week!) If silent: re-read the third scripture line." },

      { type: "question", id: "t-q2", title: "For us", minutes: 1.5, level: "think", mode: "pair", seconds: 45,
        text: "Isaiah keeps saying the servant suffered “for us” and took “our punishment”. What does that show about how much God loves people?",
        hint: "Good answers: God loves us enough to take our punishment himself; he doesn’t just ignore sin — he deals with it by carrying it; it’s the biggest kindness ever. Follow-up: ‘How is this like the Passover lamb (Week 6)?’ Follow-up 2: ‘How might you respond to someone who did that for you?’ Pastoral: keep it gentle; some students may have questions about death — answer simply." },

      { type: "question", id: "t-q3", title: "The quiet years", minutes: 1.5, level: "dig", mode: "discuss", seconds: 45, skippable: true,
        text: "For 400 years God sent no new prophets. Why might God be quiet sometimes? Does quiet mean he’s gone?",
        hint: "Draw out: quiet doesn’t mean absent; God was preparing (Roman roads, a common language — the world was ready); people still had his written words; times of quiet can grow trust. Follow-up: ‘Have you ever felt like God was quiet?’ Follow-up 2: ‘What can we do when God seems quiet?’ (Keep reading, praying, trusting his promises.) If silent: compare to a parent quietly preparing a surprise party." },

      { type: "apply", id: "t-apply", title: "Head · Heart · Hands", minutes: 2,
        head: "Jesus carried my wrongs so I could be forgiven and made well.",
        heart: "Thank you, Jesus, for carrying what I couldn’t.",
        hands: "This week, help carry something for someone — literally (their bag, the washing) or by listening to their worries.",
        settings: ["home", "school", "sport"],
        notes: "Link: we carry others’ loads because Jesus carried ours (Galatians 6:2)." },

      { type: "scene", id: "t-scene", title: "Waiting", minutes: 1, optional: true,
        art: { key: "t1w09d2-b" },
        boxes: [
          { text: "400 quiet years…", pos: "tl", style: "caption" },
          { text: "God was quiet — but not gone.", pos: "br", style: "caption" }
        ] },

      { type: "verse", id: "t-verse", title: "Build the verse", minutes: 1, activity: "build",
        notes: "Build Isaiah 9:6 — it’s a long one!" },

      { type: "prayer", id: "t-pray", title: "Thank-you prayer — hands open", minutes: 3, mood: "calm", style: "hands",
        tip: "Imagine handing your heavy backpack to Jesus. Open hands say, ‘I’m letting go — you carry it.’",
        opening: "Close your hands tight, like you’re holding something heavy. Now slowly open them. Jesus carries it.",
        phases: [
          { name: "Wow", lead: "Jesus is the servant who carried our wrongs.",
            prompts: ["Jesus, you are so kind.", "Jesus, you carried what I couldn’t."],
            starter: "Jesus, you…", seconds: 30, aloud: "Jesus — you carried our wrongs because you love us!" },
          { name: "Sorry", lead: "Silently: tell Jesus what’s in your backpack.",
            prompts: ["Sorry for going my own way.", "Sorry for…"],
            starter: "Jesus, I’m sorry for…", seconds: 40, aloud: "Jesus, we’re sorry for going our own way." },
          { name: "Thanks", lead: "Thank him for taking the punishment.",
            prompts: ["Thank you for making me completely well.", "Thank you for the cross."],
            starter: "Thank you, Jesus, for…", seconds: 30, aloud: "Thank you, Jesus, for carrying our sins and making us well." },
          { name: "Please", lead: "Pray a promise back: ‘You promised to forgive (1 John 1:9) — please…’",
            prompts: ["You promised to forgive — please forgive me.", "Please help someone carrying something heavy."],
            starter: "You promised… so please…", seconds: 35, aloud: "Jesus, you promised to forgive — thank you that we are forgiven." }
        ],
        closing: "Everyone: Amen.",
        notes: "Keep it gentle and hopeful." }
    ] },

  /* ======================= WEDNESDAY ======================= */
  { label: "Wednesday", theme: "Wise Men Ask Directions", roleplay: true, mood: "night",
    learningIntentions: [
      "We are learning how the wise men followed a star to find Jesus.",
      "We are learning how Micah’s promise told them where to go.",
      "I can compare how the wise men and Herod responded to Jesus."
    ],
    assessment: "Listen for students connecting Micah 5:2 to Bethlehem and contrasting the wise men’s worship with Herod’s jealousy.",
    resources: ["Screen", "Optional: three ‘gifts’ (boxes) and a paper star"],
    whereToNext: "Tomorrow: a brand-new promise — and the big question, ‘Who is all this about?’",
    slides: [
      { type: "title", id: "w-title", title: "Wise Men Ask Directions", minutes: 0.5, kicker: "Term 1 · Week 9", sub: "Promises Spoken Long Ago",
        art: { key: "t1w09d3-a" }, notes: "Let the splash play." },

      { type: "hook", id: "w-hook", title: "Lost!", minutes: 1,
        text: "You’re on a long trip and you’re lost. No GPS. No phone. Just… the sky.",
        ask: "How would you find your way?",
        hint: "Take ideas: ask someone, follow the sun, follow stars, look at a map. Land it: ‘Today some travellers follow a star across the desert — and then ask the worst possible person for directions.’" },

      { type: "scripture", id: "w-scr", title: "Matthew 2:1–2, 4–6", minutes: 1, ref: "Matthew 2:1–6 · Micah 5:2", version: "CEV",
        lines: [
          { text: "Some wise men from the east came to Jerusalem and said, “Where is the child born to be king of the Jews? We saw his star in the east and have come to worship him.”", ref: "Matthew 2:1–2" },
          { text: "When King Herod heard about this, he was worried.", ref: "Matthew 2:3" },
          { text: "They told him, “He will be born in Bethlehem, just as the prophet wrote.”", ref: "Matthew 2:5" },
          { text: "Bethlehem Ephrath, you are one of the smallest towns in the nation of Judah. But the LORD will choose one of your people to rule the nation.", ref: "Micah 5:2" }
        ],
        emphasis: ["his star", "worship him", "worried", "Bethlehem"],
        notes: "The scribes were quoting Micah, written about 700 years earlier." },

      { type: "story", id: "w-story", title: "Follow the star", minutes: 3, transition: "page", mood: "night",
        beats: [
          { text: "A new star in the east.", caption: "Wise men who studied the sky knew: a King has been born!",
            art: { key: "t1w09d3-a", label: "Wed · title + story beats 1–2", desc: "Three wise men on camels crossing a moonlit desert under a very bright star, their shadows long on the dunes.", shot: "wide", motion: "kenburns-left", chars: ["wisemen"],
              scene: "Three wise men on camels crossing a moonlit desert under a very bright star, their shadows long on the dunes." } },
          { text: "A long journey west.", caption: "Weeks — maybe months — across the desert." },
          { text: "“Where is the child born to be king?”", caption: "They asked… King Herod. Uh oh.", shout: true,
            art: { key: "t1w09d3-b", label: "Wed · story beats 3–4 + role-play card", desc: "The wise men before a great palace throne where a king sits as a huge dark menacing silhouette, scribes holding scrolls beside them.", shot: "low angle, dramatic", motion: "kenburns-in", chars: ["wisemen"],
              scene: "The wise men stand before a great palace throne where a king sits drawn only as a huge dark menacing silhouette, scribes holding scrolls beside them." } },
          { text: "“In Bethlehem, just as the prophet wrote.”", caption: "Micah’s 700-year-old promise pointed the way." },
          { text: "They found him — and worshipped.", caption: "Gold, frankincense and myrrh, for the promised King." }
        ],
        narration: "Far away to the east — maybe in the land we now call Iraq or Iran — lived some wise men. They studied the stars. They were scholars, maybe advisers to kings. And one night they saw something new: a star they had never seen before. Somehow they knew what it meant. A great King had been born — the King of the Jews.\n\nSo they packed up and set off on an enormous journey. Hundreds of kilometres across deserts and rivers, probably on camels, carrying expensive gifts. Weeks, maybe months, of travelling.\n\nWhen they got to Jerusalem, the capital city, they thought, ‘A king would be born in the palace, surely!’ So they went to the palace and asked, ‘Where is the child born to be king of the Jews? We saw his star and have come to worship him.’\n\nBut the king in the palace was Herod. And Herod was a jealous, cruel king who did not want anyone else being called king. The Bible says when Herod heard this, he was worried — and everyone in Jerusalem was worried with him.\n\nHerod called all the chief priests and teachers of God’s law. ‘Where will the Messiah — the promised King — be born?’ And they didn’t even need to think. They pulled out the old scrolls and read the words of a prophet called Micah, written seven hundred years earlier: ‘Bethlehem… you are one of the smallest towns… but the LORD will choose one of your people to rule the nation.’\n\nBethlehem! David’s little town. God had told them hundreds of years in advance.\n\nHerod called the wise men secretly. ‘Go to Bethlehem and search carefully for the child. When you find him, let me know — so I can come and worship him too.’ But Herod was lying. He didn’t want to worship Jesus. He wanted to get rid of him.\n\nThe wise men set off — and the star went ahead of them again, until it stopped over the place where the child was. The Bible says they were thrilled and excited! They went inside, saw the child with Mary his mother, and knelt down and worshipped him. They opened their treasures: gold, frankincense and myrrh.\n\nThen God warned them in a dream not to go back to Herod. So they went home another way.\n\nTwo kings. One was afraid of Jesus. The other was Jesus — and wise people came from far away to worship him.",
        notes: "About 3 minutes. The number of wise men isn’t given — ‘three’ comes from the three gifts. They likely arrived some time after the birth (Matthew 2:11 says ‘house’). Herod’s later cruelty (2:16) is omitted." },

      { type: "question", id: "w-q1", title: "Where?", minutes: 1, level: "look", mode: "finish", seconds: 20,
        text: "Finish the sentence: The priests told Herod the King would be born in ______, because the prophet ______ wrote it long ago.",
        reveal: "Bethlehem — because the prophet Micah wrote it about 700 years earlier. (Matthew 2:5–6; Micah 5:2)",
        hint: "Follow-up: ‘Whose hometown was Bethlehem?’ (King David’s — last week!) Follow-up 2: ‘How did the wise men find the exact house?’ (The star went ahead of them.) If silent: point to the last scripture line." },

      { type: "roleplay", id: "w-rp", title: "Wise Men Ask Directions", minutes: 5, ref: "Matthew 2:1–12",
        art: { key: "t1w09d3-b" },
        imagined: "The wise men’s and Herod’s key words are from Matthew 2 (CEV). The banter between the wise men is imagined. Herod is played as sly and worried, not frightening.",
        actions: ["Everyone (as camels): ‘Hrrrmph!’ and plodding", "Everyone: ‘Ooooh!’ when the star appears"],
        props: ["Optional: three gift boxes, a paper star on a stick"],
        characters: [
          { name: "Narrator", color: "#F2C77B", desc: "Tells the story" },
          { name: "Wise Man 1", color: "#FFD36B", desc: "The oldest — studied the stars for years" },
          { name: "Wise Man 2", color: "#9575CD", desc: "Practical — keeps the map" },
          { name: "Wise Man 3", color: "#4FC3D9", desc: "The youngest — impatient and excited" },
          { name: "Herod", color: "#90A4AE", desc: "Jealous king — smooth and sneaky" },
          { name: "Scribe", color: "#A1887F", desc: "Expert in the old scrolls" },
          { name: "Everyone", color: "#FFFFFF", desc: "Camels, and amazed crowds" }
        ],
        lines: [
          { character: "Everyone", text: "Hrrrmph… plod… plod… plod…", action: "camels walking" },
          { character: "Wise Man 3", text: "Are we nearly there yet?" },
          { character: "Wise Man 2", text: "You’ve asked that every day for three months." },
          { character: "Wise Man 1", text: "The star led us west. A king must be born in the capital — Jerusalem." },
          { character: "Narrator", text: "They arrived at King Herod’s palace." },
          { character: "Wise Man 1", text: "Where is the child born to be king of the Jews? We saw his star in the east and have come to worship him." },
          { character: "Herod", text: "A… new… king?", action: "freeze, then fake smile" },
          { character: "Narrator", text: "When King Herod heard about this, he was worried." },
          { character: "Herod", text: "Scribe! Where will the Messiah be born?", action: "snap fingers" },
          { character: "Scribe", text: "He will be born in Bethlehem, just as the prophet wrote.", action: "unroll scroll" },
          { character: "Scribe", text: "“Bethlehem… you are one of the smallest towns… But the LORD will choose one of your people to rule.”" },
          { pause: "Freeze! The scribes KNEW the promise — but did they go to Bethlehem? What does that tell you?", seconds: 20 },
          { character: "Herod", text: "Go to Bethlehem and search carefully for the child. As soon as you find him, let me know.", action: "smooth voice" },
          { character: "Herod", text: "I also want to go and worship him.", action: "wink at the audience — he’s lying!" },
          { character: "Wise Man 3", text: "Look! The star! It’s moving ahead of us!", action: "point up" },
          { character: "Everyone", text: "Ooooooh!", action: "look up" },
          { character: "Narrator", text: "The star went on ahead of them until it stopped over the place where the child was. They were thrilled and excited." },
          { character: "Wise Man 1", text: "This is him. The promised King.", action: "kneel" },
          { character: "Wise Man 2", text: "Gold — for a king.", action: "offer gift" },
          { character: "Wise Man 3", text: "Frankincense — for worship. And myrrh.", action: "offer gifts" },
          { character: "Narrator", text: "God warned them in a dream not to go back to Herod. So they went home by another road." },
          { character: "Everyone", text: "They found the King!" }
        ],
        debrief: [
          { level: "think", text: "The scribes knew where the King would be born — but didn’t go. The wise men travelled for months. What’s the difference?", hint: "Knowing about God isn’t the same as coming to worship him. The wise men acted on what they knew." },
          { level: "look", text: "What three gifts did they bring?", hint: "Gold, frankincense and myrrh (Matthew 2:11)." }
        ],
        notes: "Herod’s wink is a fun way to show he’s lying. Keep him sly, not scary." },

      { type: "question", id: "w-q2", title: "Two kings", minutes: 1.5, level: "think", mode: "pair", seconds: 45,
        text: "Herod was worried about Jesus. The wise men were thrilled. Why do you think people react to Jesus so differently?",
        hint: "Good answers: Herod wanted to stay in charge — Jesus threatened his power; the wise men were searching for the truth and happy to worship. Some people don’t want anyone telling them what to do. Follow-up: ‘How do people react to Jesus today?’ Follow-up 2: ‘What might Jesus being King mean for your life?’ If silent: ‘Who would be worried if a new principal arrived — and who’d be excited?’" },

      { type: "question", id: "w-q3", title: "Knowing vs going", minutes: 1, level: "dig", mode: "discuss", seconds: 40, skippable: true,
        text: "The scribes knew the Bible well but stayed home. The wise men knew less but travelled far. Is it possible to know a lot about God but not really follow him?",
        hint: "Yes — knowing facts isn’t the same as trusting and following. The wise men acted on what they knew. Follow-up: ‘What could “going to Bethlehem” look like for you?’ (Praying, following Jesus, worshipping.) Follow-up 2: ‘How can we make sure we don’t just know ABOUT God?’ If silent: compare knowing about a famous person vs being their friend." },

      { type: "apply", id: "w-apply", title: "Head · Heart · Hands", minutes: 1,
        head: "God’s promises pointed the way to Jesus — and wise people still seek him.",
        heart: "Jesus, I want to come to you, not just know about you.",
        hands: "Give Jesus a ‘gift’ this week: time (a few minutes reading about him), talent (using a skill for someone), or treasure (giving something away).",
        settings: ["home", "church", "school"],
        notes: "Let students choose their ‘gift’." },

      { type: "scene", id: "w-scene", title: "Thrilled", minutes: 0.5, optional: true,
        art: { key: "t1w09d3-a" },
        boxes: [
          { text: "The star went on ahead of them…", pos: "tl", style: "caption" },
          { text: "They were thrilled and excited!", pos: "br", style: "shout" }
        ] },

      { type: "verse", id: "w-verse", title: "Verse with actions", minutes: 1, optional: true, activity: "actions",
        notes: "Actions for Isaiah 9:6." },

      { type: "prayer", id: "w-pray", title: "Promise prayer — in pairs", minutes: 3, mood: "calm", style: "pairs",
        tip: "With a partner, take turns praying a promise back to God: ‘God, you promised… so please…’",
        opening: "Turn to a partner. Choose one promise from this term together — like ‘I will be with you’ or ‘I will never be in need’.",
        phases: [
          { name: "Wow", lead: "Together, tell God how he kept his promises about Jesus.",
            prompts: ["God, you told them it would be Bethlehem!", "God, you always keep your word."],
            starter: "Wow, God, you…", seconds: 30, aloud: "Wow, God — you kept your promise right down to the town!" },
          { name: "Sorry", lead: "Silently: sorry for knowing about God but not following.",
            prompts: ["Sorry for staying at home like the scribes.", "Sorry for not seeking you."],
            starter: "God, I’m sorry for…", seconds: 25, aloud: "God, I’m sorry for knowing about you but not coming to you." },
          { name: "Thanks", lead: "Thank God for one promise he has kept for you.",
            prompts: ["Thank you that you’re with me.", "Thank you that you forgive."],
            starter: "Thank you, God, for…", seconds: 30, aloud: "Thank you, God, for every promise you keep." },
          { name: "Please", lead: "Pray your chosen promise for your partner.",
            prompts: ["You promised to be with us — please be with (name).", "You promised peace — please give (name) peace."],
            starter: "You promised… so please…", seconds: 55, aloud: "God, you promised to be with us — so please be with every person here." }
        ],
        closing: "Everyone: Amen!",
        notes: "Have a list of the term’s promises on the board to help." }
    ] },

  /* ======================= THURSDAY ======================= */
  { label: "Thursday", theme: "Who Is the Promise About?", roleplay: false, mood: "dawn",
    learningIntentions: [
      "We are learning about God’s promise of a new agreement in Jeremiah 31.",
      "We are learning how many Old Testament promises point to Jesus.",
      "I can answer the question, ‘Who is this promise about?’"
    ],
    assessment: "Students can name at least three promises from the term that point to Jesus, explain the ‘new agreement’, and recite Isaiah 9:6.",
    resources: ["Screen", "Take-home challenge cards"],
    whereToNext: "Next Monday: check in on promise prayers. Week 10 — God Keeps His Promise (Jesus is born!).",
    slides: [
      { type: "title", id: "th-title", title: "Who Is the Promise About?", minutes: 0.5, kicker: "Term 1 · Week 9", sub: "Promises Spoken Long Ago",
        art: { key: "t1w09d4-a" }, notes: "Let the splash play." },

      { type: "review", id: "th-review", title: "True or false?", minutes: 2.5, format: "truefalse",
        prompt: "True or false? Stand for TRUE, sit for FALSE!",
        items: [
          { text: "Isaiah promised a child who would be called Prince of Peace.", answer: true, why: "Isaiah 9:6" },
          { text: "Micah said the ruler would be born in Jerusalem.", answer: false, why: "Bethlehem — one of the smallest towns." },
          { text: "Isaiah said the servant would suffer for other people’s sins.", answer: true, why: "“He was wounded and crushed because of our sins.”" },
          { text: "King Herod was thrilled to hear about a new king.", answer: false, why: "He was worried — and he lied to the wise men." },
          { text: "During the quiet 400 years, God forgot his promises.", answer: false, why: "God was quiet, but never forgot." }
        ],
        hint: "Stand/sit, then reveal.",
        notes: "Click to show, click to reveal." },

      { type: "scripture", id: "th-scr", title: "Jeremiah 31:31, 33–34", minutes: 1, ref: "Jeremiah 31:31–34", version: "CEV",
        lines: [
          { text: "The time will surely come when I will make a new agreement with the people of Israel and Judah.", ref: "Jeremiah 31:31" },
          { text: "I will write my laws on their hearts and minds. I will be their God, and they will be my people.", ref: "Jeremiah 31:33" },
          { text: "I will forgive their sins and forget the evil things they have done.", ref: "Jeremiah 31:34" }
        ],
        emphasis: ["new agreement", "on their hearts", "forgive", "forget"],
        notes: "Jesus spoke about this ‘new agreement’ (new covenant) at the Last Supper (Luke 22:20)." },

      { type: "story", id: "th-story", title: "All about Jesus", minutes: 2, transition: "page",
        beats: [
          { text: "A new agreement.", caption: "Not on stone tablets — written on hearts." },
          { text: "“I will forgive… and forget.”", caption: "God promised to wipe the slate clean.", shout: true },
          { text: "Who is this promise about?", caption: "The rescuer, the lamb, the shepherd-king, the child, the servant…",
            art: { key: "t1w09d4-b", label: "Thu · story beats 3–4 + stretch scene", desc: "A teacher’s hand pointing along a line on a scroll while a circle of children lean in close, lamplight on their faces.", shot: "medium, warm", motion: "kenburns-in",
              scene: "A teacher's hand pointing along a line on a scroll while a circle of children lean in close, lamplight on their faces." } },
          { text: "Jesus!", caption: "Every promise was pointing to him.",
            art: { key: "t1w09d4-a", label: "Thu · title + story beat 4", desc: "A small sleepy village on a hilltop at night under one bright star, tiny lit windows, a path winding up toward it.", shot: "wide, quiet", motion: "kenburns-up",
              scene: "A small sleepy village on a hilltop at night under one bright star, tiny lit windows, a path winding up toward it." } }
        ],
        narration: "God gave another prophet, Jeremiah, one more amazing promise. ‘The time will come when I will make a new agreement with my people.’ Remember the old agreement at Mount Sinai, with the commandments written on stone? The people kept breaking it. So God promised something new: ‘I will write my laws on their hearts and minds.’ Not rules on the outside — a changed heart on the inside. And then: ‘I will forgive their sins and forget the evil things they have done.’\n\nNow let’s look back over the whole term. In Week 2, God promised someone who would defeat the snake. In Week 4, he promised Abraham that the whole world would be blessed through his family. In Week 6, the Passover lamb. In Week 8, a shepherd-king from David’s family. This week: a child called Mighty God, born in Bethlehem; a servant who would carry our sins; a new agreement written on hearts.\n\nSo, who is the promise about? Every single one points to one person: Jesus.\n\nAnd next week — we finally get to Bethlehem.",
        notes: "About 2 minutes. This is a great ‘term so far’ moment — consider pointing to the term’s Big Ideas on a wall." },

      { type: "question", id: "th-q1", title: "Written where?", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "In the new agreement, where did God promise to write his laws?",
        options: ["On stone tablets", "On their hearts and minds", "On the temple walls", "In the sky"], answer: 1,
        hint: "Answer: B (Jeremiah 31:33). Follow-up: ‘Where were the old commandments written?’ (Stone — Week 7.) Follow-up 2: ‘What did God promise to do with their sins?’ (Forgive and forget.) If silent: re-read the second scripture line." },

      { type: "question", id: "th-q2", title: "Who is it about?", minutes: 1.5, level: "think", mode: "pair", seconds: 45,
        text: "With your partner, list as many promises from this term as you can that point to Jesus. Who can find the most?",
        hint: "Week 2: someone to crush the snake (Gen 3:15). Week 4: all nations blessed through Abraham. Week 6: the Passover lamb. Week 7: God living with his people. Week 8: the Good Shepherd from David’s line. Week 9: the child (Isaiah 9), the servant (Isaiah 53), Bethlehem (Micah 5), the new agreement (Jeremiah 31). Follow-up: ‘Which one amazes you most?’ Follow-up 2: ‘What does this show about God?’ If silent: give each pair a week to look back on." },

      { type: "recap", id: "th-recap", title: "This week’s Big Idea", minutes: 1.5,
        points: [
          "Isaiah promised a child: Wonderful Advisor, Mighty God, Eternal Father, Prince of Peace.",
          "Isaiah promised a servant who would carry our sins; Micah promised Bethlehem.",
          "Jeremiah promised a new agreement — and every promise points to Jesus."
        ],
        notes: "Reveal the points, then the Big Idea." },

      { type: "question", id: "th-q3", title: "Promises for us?", minutes: 1.5, level: "dig", mode: "vote", seconds: 30, skippable: true,
        text: "Agree or disagree: “The promises in the Old Testament were only for people back then — not for me.”",
        options: ["Agree", "Disagree"],
        hint: "Draw out: many promises were for a particular time, but they’re all ‘yes’ in Jesus (2 Corinthians 1:20); the new agreement is for everyone who trusts Jesus; God’s character doesn’t change. Follow-up: ‘Which promise from this term do you think is for you?’ Follow-up 2: ‘How can we tell?’ (Look at Jesus.) If silent: ‘Does God still forgive today?’" },

      { type: "challenge", id: "th-chal", title: "This Week’s Challenge", minutes: 2,
        text: "Promise prayers. Each day, choose one of God’s promises from this term and pray it back to him: “God, you promised… so please…”",
        why: "Every one of God’s promises is ‘yes’ in Jesus. — 2 Corinthians 1:20",
        head: "God keeps every promise — in Jesus.", heart: "God, you promised… so I trust you.", hands: "Pray one promise back to God each day.",
        takeHome: true,
        notes: "The take-home card has a list: Gen 9:13, 1 John 1:9, Ps 23:1, Exodus 3:12 ‘I will be with you’, Isaiah 9:6." },

      { type: "verse", id: "th-verse", title: "Memory verse: fade-out", minutes: 1.5, activity: "fade",
        notes: "Fade out Isaiah 9:6 — a big achievement if they can do it!" },

      { type: "scene", id: "th-scene", title: "Little Bethlehem", minutes: 1, optional: true,
        art: { key: "t1w09d4-a" },
        boxes: [
          { text: "“One of the smallest towns…”", pos: "tl", style: "caption" },
          { text: "Next week: the promise comes true!", pos: "br", style: "shout" }
        ] },

      { type: "prayer", id: "th-pray", title: "Promise prayers — out loud", minutes: 3, mood: "calm", style: "out-loud",
        tip: "Today, anyone can pray a promise back to God out loud. Start with ‘God, you promised…’",
        opening: "Let’s pray. I’ll start with one promise, then anyone can add one.",
        phases: [
          { name: "Wow", lead: "God keeps every promise.",
            prompts: ["God, you never forget a promise.", "God, you planned Jesus from the very beginning."],
            starter: "Wow, God, you…", seconds: 30, aloud: "Wow, God — you planned Jesus from the very beginning!" },
          { name: "Sorry", lead: "Remember the new agreement: God forgives and forgets.",
            prompts: ["Sorry for… (silent)", "Thank you that you forgive and forget."],
            starter: "God, I’m sorry for…", seconds: 30, aloud: "God, we’re sorry — and we thank you that you forgive and forget." },
          { name: "Thanks", lead: "Thank God for Jesus — the promise come true.",
            prompts: ["Thank you for Jesus.", "Thank you for writing your ways on my heart."],
            starter: "Thank you, God, for…", seconds: 30, aloud: "Thank you, God, for Jesus — your promise come true!" },
          { name: "Please", lead: "Pray a promise out loud: ‘God, you promised… so please…’",
            prompts: ["You promised to be with us — please be with my family.", "You promised to forgive — please help me forgive others."],
            starter: "God, you promised… so please…", seconds: 55, aloud: "God, you promised, and you always keep your word — so we trust you." }
        ],
        closing: "Everyone: Amen!",
        notes: "Have the list of promises visible." }
    ] }
  ]
};
