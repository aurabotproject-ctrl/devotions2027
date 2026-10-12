/* Morninglight 2027 — Term 3 Week 1: The Sower (Matthew 13:1–23). Scripture: CEV. */
window.DEVOTIONS = window.DEVOTIONS || {};
window.DEVOTIONS["Term 3"] = window.DEVOTIONS["Term 3"] || {};
window.DEVOTIONS["Term 3"]["Week 1"] = {
  lessonTitle: "The Sower",
  passage: "Matthew 13:1–23",
  bigIdea: "God scatters his word generously to everyone, and it grows a great harvest in a heart that listens, holds on and keeps going.",
  godIs: "Generous",
  memoryVerse: { ref: "Luke 8:15", text: "But the seeds that fell on good ground are the people who hear the message and keep it in good and honest hearts. They last and produce a harvest.", version: "CEV",
    chunks: ["But the seeds that fell on good ground", "are the people who hear the message", "and keep it in good and honest hearts.", "They last", "and produce", "a harvest."],
    actions: ["Hand flings seed in a wide arc, then flat palm for the ground", "Cup a hand behind your ear", "Hug your hands to your chest, then tap your heart", "Plant your feet firmly, strong roots", "Hands push up slowly, like a shoot growing", "Arms sweep wide over a big golden field"] },
  prayerFocus: { skill: "Our Father", tip: "Jesus taught us to start praying with two words: “Our Father.” We aren’t talking to a faraway boss. We’re talking to a God who is close, who listens, and who loves to hear from us." },
  mood: "dawn",
  cover: "t3w01-cover",
  characters: ["jesus", "aroha", "sione", "mia", "jun"],
  coverArt: { key: "t3w01-cover", label: "Week cover", desc: "A farmer scattering seed in a wide arc across a hillside field above the Sea of Galilee, birds wheeling, the sun low.", shot: "epic wide",
    scene: "A farmer in a rough tunic strides across a sloping field above the Sea of Galilee, flinging seed in a wide glittering arc from a bag at his hip. Birds wheel overhead, a stony path cuts the field, and the low sun throws long rays.", chars: [] },
  comicArt: { key: "t3w01-comic", label: "Comic page (week opener — for the comic-page viewer, coming in a later build)", format: "portrait", desc: "Six-panel comic page of the parable of the sower.",
    panels: "Six panels. Panel 1 (wide): Jesus in a boat teaching a huge crowd on the lakeshore. Panel 2 (small): a farmer's hand flinging seed. Panel 3 (small): birds snatching seed from a hard path. Panel 4 (tall): small plants wilting on rocky ground under a blazing sun. Panel 5 (small): seedlings choked by thick thorns. Panel 6 (wide): a golden field of heavy wheat with the farmer standing amazed.", chars: ["jesus"] },

  days: [

  /* ======================= MONDAY ======================= */
  { label: "Monday", theme: "A Farmer Went Out to Sow", roleplay: true, mood: "sea",
    learningIntentions: [
      "We are learning the story Jesus told about a farmer and four kinds of ground.",
      "We are learning that Jesus often taught with stories about everyday things.",
      "I can retell what happened to the seed on the path, the rocks, the thorns and the good ground."
    ],
    assessment: "Listen for students retelling all four kinds of ground in order, saying what happened to the seed in each, and noticing the surprising size of the harvest at the end.",
    resources: ["Screen", "Optional: a handful of seeds or dried beans to scatter on a tray", "Optional: a small bag to be the farmer’s seed bag"],
    whereToNext: "Tomorrow: why Jesus told this story, who was listening, and what the seed and the soil really stand for.",
    slides: [
      { type: "title", id: "m-title", title: "A Farmer Went Out to Sow", minutes: 0.5, kicker: "Term 3 · Week 1", sub: "The Sower",
        art: { key: "t3w01-cover" }, notes: "Welcome to Term 3! A new term and a new way of learning: this term Jesus himself tells the stories. Let the splash play." },

      { type: "hook", id: "m-hook", title: "What does a seed need?", minutes: 1.5,
        checkin: { text: "Last term ended with Thomas saying to Jesus, “My Lord and my God!” Your challenge: write your own one-sentence faith statement and put it somewhere you’ll see it. Who wrote one — and where did you put it?" },
        text: "Have you ever planted a seed and waited for it to grow? What does a tiny seed need to become something big?",
        ask: "What could go wrong along the way?",
        hint: "Check-in first: ask 2–3 students where their statement lives (fridge, bedroom wall, pencil case) and celebrate honest ‘I forgot’ answers too. Then welcome them to Term 3: ‘Having Faith in God — What does Jesus teach about life with God?’ This term Jesus himself tells stories, ten of them. Take answers about seeds: soil, water, sun, time, space, no birds. Land it: ‘Today Jesus tells a story about a farmer, a bag of seed and four very different kinds of ground. Listen for what happens to the seed.’" },

      { type: "scripture", id: "m-scr", title: "Matthew 13:3–9", minutes: 1, ref: "Matthew 13:1–9", version: "CEV",
        lines: [
          { text: "Jesus used stories to teach them many things. He said: A farmer went out to scatter seed in a field.", ref: "Matthew 13:3" },
          { text: "While the farmer was scattering the seeds, some of them fell along the road, and birds came and ate them.", ref: "Matthew 13:4" },
          { text: "Other seeds fell on thin, rocky ground and soon started growing because the soil was not deep. But when the sun came up, the plants were scorched and dried up, because they had no roots.", ref: "Matthew 13:5–6" },
          { text: "Some other seeds fell where thornbushes grew up and choked the plants.", ref: "Matthew 13:7" },
          { text: "But some seeds fell on good ground where the plants produced a hundred or sixty or thirty times as much as was scattered. If you have ears, pay attention!", ref: "Matthew 13:8–9" }
        ],
        emphasis: ["scatter seed", "birds", "no roots", "choked", "good ground", "a hundred", "pay attention"],
        notes: "Read slowly, then ask the class to listen for the four places the seed lands. Matthew 13 is a whole chapter of Jesus’ stories; today we stay with the first one." },

      { type: "story", id: "m-story", title: "Jesus teaches from a boat", minutes: 3, transition: "page", mood: "sea",
        beats: [
          { text: "A huge crowd by the lake.", caption: "So many people that Jesus sat in a boat to teach.",
            art: { key: "t3w01d1-a", label: "Mon · story — Jesus teaches from a boat", desc: "Jesus sitting in a fishing boat just off the shore, teaching a huge crowd gathered on the beach.", shot: "wide, from behind the crowd", motion: "kenburns-in", chars: ["jesus"],
              scene: "Seen from behind a huge crowd sitting on a pebbly lakeshore, Jesus sits in a small wooden fishing boat a few metres out on calm water, one hand raised as he teaches. Morning light glitters on the lake and hills rise behind." } },
          { text: "“A farmer went out to scatter seed.”", caption: "In Jesus’ day, farmers flung seed by the handful.", shout: true },
          { text: "Seed everywhere!", caption: "On the path, among the rocks, in the thorns — and on good soil.",
            art: { key: "t3w01d1-b", label: "Mon · story + role-play card — four kinds of ground", desc: "Seed falling on the hard path, the rocks, the thorns and the good soil, with birds swooping in.", shot: "low-angle, close to the ground", motion: "kenburns-in", chars: [],
              scene: "Ground-level view as seeds rain down from a farmer's hand above: some bounce on a hard trodden path where birds swoop in, some land among jagged rocks, some among tangled thorns, and some sink into dark, soft, ploughed soil." } },
          { text: "Three lots of seed lost.", caption: "Eaten by birds. Scorched by the sun. Choked by thorns." },
          { text: "A harvest of a hundred times over!", caption: "“If you have ears, pay attention!”" }
        ],
        narration: "Picture a lake — the Sea of Galilee — on a bright morning. Waves slap the pebbles, fishing boats bob, and all along the shore there are people. Hundreds of them. Farmers and fishermen, mums with babies on their hips, kids wriggling to the front, curious neighbours. Word had spread: Jesus is teaching today.\n\nThe crowd grew so big and so pushy that Jesus did something clever. He climbed into a fishing boat, pushed out a few metres from the shore and sat down to teach. The water carried his voice across the stones, and everyone could see him and hear him.\n\nAnd he didn’t give a long speech. He told a story, about something every person on that beach knew well: a farmer sowing seed.\n\n‘Listen!’ said Jesus. ‘A farmer went out to scatter seed in a field.’\n\nIn Jesus’ day, farmers didn’t plant seeds one at a time. They walked across the field with a bag at their hip and flung handfuls in great wide arcs, and ploughed it in afterwards. So seed landed everywhere.\n\nSome fell on the path, the hard, trampled strip where people walked through the field. It just lay there on top, and down swooped the birds and gobbled it up. Gone.\n\nSome fell on rocky ground, a thin layer of dirt over solid stone. It sprouted fast. Bright green shoots! But the soil wasn’t deep, so the roots had nowhere to go. When the hot sun came up, the little plants were scorched and shrivelled.\n\nSome fell among thorns. The seed and the thorns started growing together, but the thorns grew faster and taller, and choked the baby plants until they gave up.\n\nThree lots of seed wasted. You’d think this was going to be a very sad farming story.\n\nBut then some seed landed on good ground, soft and deep and ready. And those plants grew strong, and produced a harvest. One seed became thirty. Or sixty. Or even a hundred!\n\nThen Jesus said something short and strange: ‘If you have ears, then pay attention!’\n\nAnd that was it. No explanation. Some people nodded. Some looked puzzled. Some wandered home thinking about farming. But a few wondered, ‘Wait. Is this story about more than seeds?’\n\nJesus told lots of stories like this. They’re called parables: earthly stories with a heavenly meaning. Tomorrow we’ll find out what this one really means.",
        notes: "About 3 minutes. Broadcast sowing (scattering by hand, then ploughing the seed in) was normal in Galilee, and paths often ran right through fields. Jesus teaching from a boat is in Matthew 13:1–2. Only introduce the word ‘parable’ lightly today (earthly story, heavenly meaning); Tuesday teaches it properly. Don’t explain the four grounds yet." },

      { type: "question", id: "m-q1", title: "Four places", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "What happened to the seed that fell on the hard path?",
        options: ["It grew into a tall plant", "Birds came and ate it", "The sun scorched it", "Thorns choked it"], answer: 1,
        hint: "Answer: B (Matthew 13:4). Follow-up: ‘Where did the other seeds land, and what happened to each?’ (Rocks: scorched. Thorns: choked. Good ground: a harvest.) Follow-up 2: ‘Which place would you have worried about most?’ If silent: re-read the second scripture line and let students say the answer together." },

      { type: "question", id: "m-q2", title: "A strange ending", minutes: 1.5, level: "think", mode: "pair", seconds: 45, skippable: true,
        text: "Jesus ended with “If you have ears, pay attention!” Everyone on that beach had ears. What do you think he meant?",
        hint: "Good answers: not just hearing sounds but really listening; the story has a hidden meaning; he wants them to think about it and ask; hearing is easy, listening is harder. Follow-up: ‘When is hearing different from listening in your life?’ Follow-up 2: ‘Why might Jesus tell a story instead of just giving instructions?’ If silent: ask ‘Is it possible to hear your teacher and still not listen?’ and let them laugh first." },

      { type: "roleplay", id: "m-rp", title: "A Farmer Went Out to Sow", minutes: 5, ref: "Matthew 13:3–9",
        art: { key: "t3w01d1-b" },
        imagined: "Jesus’ words are from Matthew 13:3–9 (CEV, lightly shortened). The farmer, the Listener and Peter’s whispered comments are imagined to help us act out the story.",
        actions: ["Everyone (crowd): a hushed ‘shhh’ as Jesus begins", "Everyone (birds): flap your arms and squawk", "Everyone (plants): sink slowly down as the sun scorches", "Everyone (thorns): wiggle your fingers and squeeze in close"],
        props: ["Optional: a small bag or scarf for the farmer to ‘scatter’", "Optional: a handful of scrunched paper as seed"],
        characters: [
          { name: "Narrator", color: "#F2C77B", desc: "Tells the story" },
          { name: "Jesus", color: "#7BA7D9", desc: "Teaching from the boat — calm and clear" },
          { name: "Farmer", color: "#A1887F", desc: "Hardworking, hopeful, easily surprised" },
          { name: "Peter", color: "#8BC34A", desc: "A fisherman, one of Jesus’ closest friends" },
          { name: "Listener", color: "#B0BEC5", desc: "A crowd member who wanted a miracle" },
          { name: "Everyone", color: "#FFFFFF", desc: "The crowd, the birds, the plants and the thorns" }
        ],
        lines: [
          { character: "Narrator", text: "A pebbly lakeshore in Galilee. A huge crowd sits waiting. Jesus climbs into a boat and begins to teach.", direction: true },
          { character: "Everyone", text: "Murmur, murmur, murmur… shhhh!", action: "crowd settling down" },
          { character: "Listener", text: "A story about farming? I was hoping for a miracle.", action: "grumble" },
          { character: "Peter", text: "Shh! Listen. Jesus is teaching.", action: "elbow the Listener" },
          { character: "Jesus", text: "Listen! A farmer went out to scatter seed in a field." },
          { character: "Farmer", text: "Round and round goes my arm! Seed for the field, seed for tomorrow’s bread!", action: "big scattering arm" },
          { character: "Jesus", text: "While the farmer was scattering the seeds, some of them fell along the road, and birds came and ate them." },
          { character: "Everyone", text: "Squawk! Squawk! Gobble, gobble!", action: "birds swooping, arms flapping" },
          { character: "Farmer", text: "Hey! That seed was meant for bread!", action: "wave arms at the birds" },
          { character: "Jesus", text: "Other seeds fell on thin, rocky ground and soon started growing, because the soil was not deep." },
          { character: "Narrator", text: "Up pop the green shoots. They look strong. They look bright. They look perfect." },
          { character: "Jesus", text: "But when the sun came up, the plants were scorched and dried up, because they had no roots." },
          { character: "Everyone", text: "Ohhhh… wilt…", action: "slowly sink down like wilting plants" },
          { character: "Jesus", text: "Some other seeds fell where thornbushes grew up and choked the plants." },
          { character: "Everyone", text: "Squeeze! Squeeze! Squeeze!", action: "wiggle fingers like thorns, crowding in" },
          { character: "Farmer", text: "Three handfuls gone! Should I just give up and go home?", action: "scratch head" },
          { character: "Listener", text: "Don’t stop now! You’ve still got one handful left!", action: "stand up, getting interested" },
          { pause: "Freeze! Three handfuls wasted. What do you think will happen to the last handful?", seconds: 20 },
          { character: "Jesus", text: "But some seeds fell on good ground where the plants produced a hundred or sixty or thirty times as much." },
          { character: "Farmer", text: "A hundred times?! From ONE little seed?!", action: "fall on knees, amazed" },
          { character: "Everyone", text: "A hundred! Sixty! Thirty!", action: "cheer, arms up like tall wheat" },
          { character: "Jesus", text: "If you have ears, then pay attention!" },
          { character: "Listener", text: "I heard every word. So why don’t I understand it?", action: "scratch head" },
          { character: "Peter", text: "Stay close to him. I think this story is about more than seeds." },
          { character: "Narrator", text: "Jesus smiled. Some would understand soon. Some would need to ask. And the seed was still being scattered." },
          { character: "Everyone", text: "If you have ears, pay attention!" }
        ],
        debrief: [
          { level: "look", text: "What happened to the seed in each of the four places?", hint: "Path: birds ate it. Rocky ground: scorched, no roots. Thorns: choked. Good ground: a harvest of a hundred, sixty or thirty times as much (Matthew 13:4–8)." },
          { level: "think", text: "The farmer kept scattering seed even though so much was wasted. What was that like?", hint: "Good answers: generous; hopeful; not stingy; he didn’t only throw seed where it was sure to grow. Hold this thought: Thursday shows what this tells us about God." }
        ],
        notes: "Peter and the Listener are imagined; Jesus’ words are from Matthew 13. Cast confident readers as Jesus and the Narrator. Let Everyone be big and noisy, then quiet again for Jesus’ lines. The farmer is not Jesus’ character, just a story character, so there’s no need to explain who he stands for yet." },

      { type: "question", id: "m-q3", title: "Which ground?", minutes: 1, level: "dig", mode: "discuss", seconds: 40,
        text: "Jesus didn’t say what the story meant. What do you think the seed, the farmer and the four kinds of ground might stand for?",
        hint: "Take guesses without correcting: seed might be words or a message; ground might be people; birds might be distractions; the farmer might be God or Jesus. Praise careful thinking. Follow-up: ‘What clue in the story makes you think that?’ Follow-up 2: ‘Which of the four places would you guess is most like a normal person?’ If silent: ask ‘If the ground was people, what would the seed be?’ Tomorrow Jesus explains." },

      { type: "apply", id: "m-apply", title: "Head · Heart · Hands", minutes: 1,
        head: "Jesus tells stories about everyday things to help us understand what God is like.",
        heart: "God, I want to really listen when I hear something good.",
        hands: "Today, when a teacher or parent says something important, stop for three seconds, look at them and listen all the way to the end.",
        settings: ["class", "home", "sport"],
        notes: "A small first step: practise being a ‘good listener’ before we find out why Jesus cared about this." },

      { type: "scene", id: "m-scene", title: "Seed everywhere", minutes: 0.5, optional: true,
        art: { key: "t3w01d1-a" },
        boxes: [
          { text: "“A farmer went out to scatter seed in a field.”", pos: "tl", style: "speech" },
          { text: "“If you have ears, pay attention!”", pos: "br", style: "caption" }
        ] },

      { type: "verse", id: "m-verse", title: "Memory verse peek", minutes: 1, optional: true, activity: "echo",
        notes: "Introduce Luke 8:15. It’s Luke’s version of the end of this story: say it line by line and let the class echo you." },

      { type: "prayer", id: "m-pray", title: "Our Father (silent)", minutes: 3, mood: "calm", style: "silent",
        tip: "This term we’ll learn the prayer Jesus taught, one phrase a week. Today’s phrase: “Our Father.” Prayer starts by remembering who we’re talking to: a God who is close and loves to listen.",
        opening: "Let’s get still. Close your eyes or look at the floor. Imagine the farmer’s hand flinging seed, wide and free. Breathe in… and out.",
        phases: [
          { name: "Wow", lead: "The farmer scattered seed everywhere, even on hard places. Think about a God who gives that freely.",
            prompts: ["Father, you give good things to everyone.", "Father, you are generous. Your message is for the whole crowd."],
            starter: "Wow, Father, you are…", seconds: 35, aloud: "Wow, Father, you are generous to everyone!" },
          { name: "Sorry", lead: "The path, the rocks, the thorns. Which one is closest to your heart today?",
            prompts: ["Sorry for the times I hear you but don’t really listen.", "Sorry for letting busyness and worry crowd you out."],
            starter: "Father, I’m sorry for…", seconds: 30, aloud: "Father, I’m sorry for the times I haven’t listened." },
          { name: "Thanks", lead: "Think of someone who has scattered good words into your life.",
            prompts: ["Thank you for people who have told me about you.", "Thank you for your word, your seed, given to us."],
            starter: "Thank you, Father, for…", seconds: 35, aloud: "Thank you, Father, for the good words you have given us." },
          { name: "Please", lead: "Ask your Father for soft, deep soil in your heart.",
            prompts: ["Father, please make my heart soft soil for your word.", "Please help me really listen this week."],
            starter: "Please, Father, help…", seconds: 35, aloud: "Father, please help me to listen to you this week." }
        ],
        closing: "Everyone: Amen.",
        notes: "Model a one-sentence prayer first. Some children may not have a good experience of a father at home; gently say that God is the kind of Father every child deserves, perfectly loving and always listening, and that other words (like ‘God’) are fine." }
    ] },

  /* ======================= TUESDAY ======================= */
  { label: "Tuesday", theme: "Why Did Jesus Tell Stories?", roleplay: false, mood: "dawn",
    learningIntentions: [
      "We are learning what a parable is: an earthly story with a heavenly meaning.",
      "We are learning who heard the story of the sower and what Jesus said it meant.",
      "I can say who or what the seed and the four kinds of ground stand for."
    ],
    assessment: "Listen for students defining a parable in their own words, matching the seed to God’s message and the soils to different hearts, and noticing the surprises (a quiet kingdom, an enormous harvest).",
    resources: ["Screen", "Optional: a tray of soil with a seed in it to hold up during the story"],
    whereToNext: "Tomorrow: the same story, told in a modern New Zealand school, with four kids who hear one message and respond very differently.",
    slides: [
      { type: "title", id: "t-title", title: "Why Did Jesus Tell Stories?", minutes: 0.5, kicker: "Term 3 · Week 1", sub: "The Sower",
        art: { key: "t3w01d2-a" }, notes: "Let the splash play." },

      { type: "hook", id: "t-recap", title: "Recap", minutes: 1, style: "recap",
        text: "Yesterday we heard a story about a farmer, a bag of seed and four kinds of ground.",
        ask: "What happened to the seed in each place? Who can remember all four?",
        hint: "Path (birds ate it), rocky ground (scorched, no roots), thorns (choked), good ground (a hundred, sixty or thirty times as much). Then: ‘Jesus ended with “If you have ears, pay attention!” and left everyone wondering. So his friends asked him the question we’re asking today: what does it mean?’" },

      { type: "scripture", id: "t-scr", title: "Matthew 13:10, 13, 16, 19, 23", minutes: 1, ref: "Matthew 13:10–23", version: "CEV",
        lines: [
          { text: "His disciples came and asked, “Why do you use stories to teach the people?”", ref: "Matthew 13:10" },
          { text: "Jesus answered, “I use stories because they look, but don’t really see. They listen, but they don’t hear or understand.”", ref: "Matthew 13:13" },
          { text: "“But God has blessed you, because your eyes can see and your ears can hear.”", ref: "Matthew 13:16" },
          { text: "“The seeds that fell along the road are the people who hear the message about God’s kingdom but don’t understand it.”", ref: "Matthew 13:19" },
          { text: "“The seeds that fell on good ground are the people who hear and understand the message. They produce a harvest.”", ref: "Matthew 13:23" }
        ],
        emphasis: ["Why do you use stories", "look, but don’t really see", "eyes can see", "God’s kingdom", "hear and understand", "harvest"],
        notes: "Kingdom = the place where God is King: wherever people trust and follow him. ‘Disciples’ = Jesus’ close friends and students. Verses selected and shortened." },

      { type: "story", id: "t-story", title: "An earthly story, a heavenly meaning", minutes: 3.5, transition: "page", mood: "dawn",
        beats: [
          { text: "What is a parable?", caption: "An earthly story with a heavenly meaning.",
            art: { key: "t3w01d2-a", label: "Tue · why parables? — the disciples ask", desc: "The disciples gathered close around Jesus by a lamp-lit doorway in the evening, asking what the story meant.", shot: "medium wide, warm", motion: "kenburns-in", chars: ["jesus", "peter"],
              scene: "Evening in a lakeside village: Jesus sits on a low stone step outside a house, seen in three-quarter view, while Peter and the other disciples lean in close with puzzled faces. An oil lamp glows in the doorway and the lake darkens behind." } },
          { text: "Who was listening?", caption: "A huge crowd by the lake, and Jesus’ puzzled friends." },
          { text: "Who’s who?", caption: "Seed = God’s message. Four kinds of ground = four kinds of hearts." },
          { text: "The twist: a hundred times over.", caption: "A tiny seed. A quiet kingdom. A harvest beyond belief.", shout: true,
            art: { key: "t3w01d2-b", label: "Tue · the twist — a hundred times over", desc: "The farmer standing amazed in a huge field of tall wheat, heavy with grain, at harvest time.", shot: "wide, low sun", motion: "kenburns-up", chars: [],
              scene: "The same farmer stands waist-deep in a vast field of tall wheat, every stalk heavy with grain, his arms half-raised in amazement. The heads of grain bend in the breeze and the late sun turns the whole field into rippling light." } },
          { text: "Soil can change.", caption: "Jesus asks: what kind of ground am I today?" }
        ],
        narration: "Yesterday we heard a story about a farmer and four kinds of ground. Today we find out why Jesus told it, and what it means.\n\nFirst: what is a parable? A parable is an earthly story with a heavenly meaning. The story is about everyday things like seeds, sheep, coins and bread, but it points to something much bigger: God and his kingdom. The kingdom just means the place where God is King, wherever people trust and follow him.\n\nWho was listening? A huge crowd by the lake: ordinary people, farmers, fishermen, mums and dads, kids. Some had come to be healed. Some were just curious. Some of the religious leaders were already deciding they didn’t like Jesus. And there were his closest friends, the disciples.\n\nThat evening the disciples came to Jesus, puzzled. ‘Why do you tell stories?’ they asked.\n\nJesus said a story works like a seed. It lands in you and you have to decide what to do with it. Some people look but never really see, and listen but never really hear. But to his friends he said, ‘God has blessed you, because your eyes can see and your ears can hear.’ Then he told them what the story meant.\n\nThe farmer is the one who spreads God’s message, and that day it was Jesus himself. The seed is the message about God’s kingdom. And the four kinds of ground are four kinds of hearts.\n\nThe path: people who hear the message but don’t understand it, and it’s snatched away before it can sink in.\n\nThe rocky ground: people who are gladly excited at first but have no roots. When life gets hard, or friends laugh at them, they give up.\n\nThe thorns: people who hear the message, but worries and wanting more stuff crowd it out.\n\nThe good ground: people who hear, understand and hold on, and a harvest grows.\n\nNow here’s the twist. Many people expected God’s kingdom to arrive with a bang: a mighty king, an army, the Romans kicked out. Jesus said it arrives like a seed. Small. Quiet. Easy to miss. And whether it grows depends on the ground, which means the heart.\n\nThe second twist is the harvest. Even with three-quarters of the seed seemingly wasted, the farmer still gets thirty, sixty, a hundred times what he planted. God’s word is powerful.\n\nAnd one more thing: soil can change. Paths can be dug up, rocks cleared, thorns pulled. Jesus isn’t sorting people into good and bad ground forever. He’s asking: what kind of ground am I today?",
        notes: "About 3½ minutes. The ‘evil one’ in Matthew 13:19 is Satan, God’s enemy; we say ‘the message is snatched away’ and keep it low-key. The religious leaders had already begun opposing Jesus (Matthew 12). A hundredfold harvest was astonishing and in the Old Testament is a sign of God’s special blessing (Genesis 26:12). Be gentle: no child should leave feeling labelled as a path or a rock. Jesus’ own explanation (13:18–23) is the source for the ‘who’s who’." },

      { type: "dig", id: "t-dig", title: "Who’s who?", minutes: 2,
        prompt: "Jesus explained his story. Match each thing in the story to what it stands for.",
        columns: ["In the story", "What it means"],
        items: [
          { left: "The seed", right: "God’s message about his kingdom" },
          { left: "The hard path: birds eat the seed", right: "Hears the message but doesn’t understand it, and it’s snatched away" },
          { left: "Rocky ground: no roots", right: "Glad at first, but gives up when life gets hard" },
          { left: "Thorns that choke", right: "Worries and wanting more stuff crowd the message out" },
          { left: "Good ground: a harvest", right: "Hears, understands and holds on, so a harvest grows" }
        ],
        reveal: "Same seed, four kinds of hearts.",
        notes: "Reveal row by row and ask the class to guess the right-hand side first." },

      { type: "question", id: "t-q1", title: "What’s the seed?", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "In Jesus’ explanation, what does the seed stand for?",
        options: ["Money", "The message about God’s kingdom", "The little plants", "The birds"], answer: 1,
        hint: "Answer: B (Matthew 13:19). Follow-up: ‘What do the four kinds of ground stand for?’ (Four kinds of people’s hearts as they hear the message.) Follow-up 2: ‘What happened to the seed on the good ground?’ (A harvest.) If silent: point to the fourth scripture line and read it together." },

      { type: "question", id: "t-q2", title: "Why a story?", minutes: 1.5, level: "think", mode: "pair", seconds: 45,
        text: "Jesus could have just explained everything straight away. Why do you think he told a story first?",
        hint: "Good answers: a story sticks in your memory; it makes you think and ask; it shows who is really keen to understand (the disciples asked!); it uses everyday things we already know; a story is like a seed itself, it has to land in us. Follow-up: ‘Which stories from school do you still remember?’ Follow-up 2: ‘What did the disciples do that the crowd didn’t?’ (They asked.) If silent: ask ‘Do you remember a list of facts, or a good story?’" },

      { type: "question", id: "t-q3", title: "Digging and pulling", minutes: 1.5, level: "dig", mode: "discuss", seconds: 45, skippable: true,
        text: "Soil can change: paths can be dug up, rocks cleared, thorns pulled out. What might that look like for a real heart on a busy school day?",
        hint: "Ideas: put the phone or game away so you can listen; ask a question when you don’t understand; let someone help; say sorry; make a plan to keep going (roots); give a worry to God instead of carrying it. Note: we can’t do it all alone, and we can ask God’s help. Follow-up: ‘Who or what can help us pull out thorns?’ Follow-up 2: ‘Which would be hardest for you?’ If silent: ask ‘What is the “birds” in your day?’ and let them name distractions." },

      { type: "apply", id: "t-apply", title: "Head · Heart · Hands", minutes: 1.5,
        head: "A parable is an earthly story with a heavenly meaning, and the seed is God’s message.",
        heart: "God, I want my heart to be good soil. Help me to listen and understand.",
        hands: "Choose one ‘bird’ that steals your attention (a screen, a game, a chatty friend) and put it away for five minutes tonight when someone is talking to you.",
        settings: ["home", "class", "online"],
        notes: "This is a first pass. Thursday’s challenge builds on it. Keep it small and doable." },

      { type: "scene", id: "t-scene", title: "A hundred times over", minutes: 1, optional: true,
        art: { key: "t3w01d2-b" },
        boxes: [
          { text: "“…a hundred or sixty or thirty times as much.”", pos: "tl", style: "speech" },
          { text: "A tiny seed. A quiet kingdom. A harvest beyond belief.", pos: "br", style: "caption" }
        ] },

      { type: "verse", id: "t-verse", title: "Build the verse", minutes: 1, activity: "build",
        notes: "Build Luke 8:15 chunk by chunk. Ask: which words describe good soil?" },

      { type: "prayer", id: "t-pray", title: "Our Father (writing)", minutes: 3, mood: "calm", style: "write",
        tip: "Today we write our prayer. Start with the two words Jesus taught: “Our Father.” Writing slows our thoughts down, and God reads every word, even the messy ones.",
        opening: "Take paper or a mini-whiteboard. At the top, write: ‘Our Father…’ Then take a slow breath.",
        phases: [
          { name: "Wow", lead: "Write one line about what the sower is like.",
            prompts: ["Father, you never stop scattering your word.", "Father, you are generous to people who ignore you."],
            starter: "Father, you are…", seconds: 40, aloud: "Our Father, you scatter your word everywhere!" },
          { name: "Sorry", lead: "Silently: which ground is hardest for you, the path, the rocks or the thorns?",
            prompts: ["Sorry for the times I’m too busy to listen.", "Sorry for the thorns of worry and wanting more stuff."],
            starter: "Father, I’m sorry for…", seconds: 25, aloud: "Father, we’re sorry for the times we haven’t listened." },
          { name: "Thanks", lead: "Write one line of thanks about the harvest.",
            prompts: ["Thank you that your word grows more than we expect.", "Thank you that Jesus explains his stories to people who ask."],
            starter: "Thank you, Father, for…", seconds: 40, aloud: "Thank you, Father, that your word grows!" },
          { name: "Please", lead: "Write one request to be good soil.",
            prompts: ["Please help me ask when I don’t understand.", "Please help me pull out my worries and put down roots."],
            starter: "Please, Father, help…", seconds: 35, aloud: "Father, please make our hearts good soil." }
        ],
        closing: "Fold up your prayer or read it quietly to God. Amen.",
        notes: "Collect a few volunteers’ lines aloud. Let students who prefer not to write draw a picture of good soil instead." }
    ] },

  /* ======================= WEDNESDAY ======================= */
  { label: "Wednesday", theme: "The Garden Club Assembly", roleplay: true, mood: "calm",
    learningIntentions: [
      "We are learning how Jesus’ story about the sower could happen in a school today.",
      "We are learning why the same message can grow in one person and not in another.",
      "I can name something that stops me listening, and one thing that helps me keep going."
    ],
    assessment: "Listen for students linking Jun to the path, Sione to the rocks, Mia to the thorns and Aroha to the good ground, and explaining that the difference was in the soil, not the message.",
    resources: ["Screen", "Optional: a tea towel for Mrs Hohepa’s gardening scarf", "Optional: a watering can for Aroha"],
    whereToNext: "Tomorrow: what the story shows about God, and what it means to be good soil. Plus this week’s challenge.",
    slides: [
      { type: "title", id: "w-title", title: "The Garden Club Assembly", minutes: 0.5, kicker: "Term 3 · Week 1", sub: "The Sower",
        art: { key: "t3w01d3-a" }, notes: "Let the splash play." },

      { type: "hook", id: "w-hook", title: "Same message, different kids", minutes: 1,
        text: "Imagine your school has a visitor at assembly with one big, exciting idea. Will everyone do something about it?",
        ask: "What do you think will actually happen to the idea by next week?",
        hint: "Take 3–4 answers: some will forget, some start and quit, some are too busy, some follow through. Land it: ‘Jesus’ story about the sower isn’t just for farmers 2,000 years ago. Today we’ll see what it looks like in a school in Aotearoa, with four kids who hear exactly the same words.’" },

      { type: "scripture", id: "w-scr", title: "Luke 8:11, 15 · Matthew 13:21–22", minutes: 1, ref: "Luke 8:11–15; Matthew 13:20–22", version: "CEV",
        lines: [
          { text: "This is what the story means: The seed is God’s message.", ref: "Luke 8:11" },
          { text: "They don’t have any roots, and they don’t last long. As soon as life gets hard or the message gets them in trouble, they give up.", ref: "Matthew 13:21" },
          { text: "They start worrying about the needs of this life and are fooled by the desire to get rich. So the message gets choked out.", ref: "Matthew 13:22" },
          { text: "But the seeds that fell on good ground are the people who hear the message and keep it in good and honest hearts. They last and produce a harvest.", ref: "Luke 8:15" }
        ],
        emphasis: ["God’s message", "no roots", "give up", "worrying", "choked out", "good and honest hearts", "last"],
        notes: "Luke 8:15 is our memory verse. Matthew 13:21–22 are Jesus’ words about the rocky ground and the thorns, which we’ll see in Sione and Mia today." },

      { type: "story", id: "w-story", title: "A message at assembly", minutes: 3, transition: "page", mood: "calm",
        beats: [
          { text: "Monday morning assembly.", caption: "One visitor. One message. Four kids in the same row.",
            art: { key: "t3w01d3-a", label: "Wed · retelling — the assembly message", desc: "A school assembly: a speaker on stage while four kids react very differently — distracted, excited, busy, listening.", shot: "wide, from the side of the hall", motion: "kenburns-right", chars: ["aroha", "sione", "mia", "jun"],
              setting: "Modern-day Aotearoa New Zealand setting: a suburban primary school with classroom blocks, a covered walkway, playing fields, native trees and harakeke (flax) bushes. Kiwi kids of many backgrounds drawn naturally and respectfully, in everyday clothes, school uniforms or sports gear.",
              scene: "A primary school hall during assembly, a smiling guest speaker on the low stage. In one row: Jun secretly fiddling with a toy under his jacket, Sione bouncing with excitement, Mia anxiously flicking through a homework planner, and Aroha sitting still, listening hard." } },
          { text: "“Water your seedling every day.”", caption: "Mrs Hohepa’s Garden Club message.", shout: true },
          { text: "Four responses.", caption: "Jun forgot. Sione quit. Mia was too busy. Aroha kept going." },
          { text: "Three weeks later…", caption: "Aroha’s seedling is thick and green.",
            art: { key: "t3w01d3-b", label: "Wed · retelling — the one who held on", desc: "Days later, Aroha kneels in the school garden watering a row of seedlings, still remembering what she heard.", shot: "medium, morning light", motion: "kenburns-in", chars: ["aroha"],
              setting: "Modern-day Aotearoa New Zealand setting: a suburban primary school with classroom blocks, a covered walkway, playing fields, native trees and harakeke (flax) bushes. Kiwi kids of many backgrounds drawn naturally and respectfully, in everyday clothes, school uniforms or sports gear.",
              scene: "Days later, Aroha kneels in the school vegetable garden with a watering can, carefully watering a row of strong green seedlings. Harakeke bushes frame the bed, morning sun slants across the playground, and a few classmates wander over to watch." } },
          { text: "The soil made the difference.", caption: "Same message, four kinds of hearts." }
        ],
        narration: "It’s Monday morning at assembly, and the whole school is crammed into the hall. Year 1s sit on the floor at the front, Year 8s are squashed at the back. On the stage stands a visitor in gumboots: Mrs Hohepa, who runs the community garden down the road.\n\n‘Kia ora, everyone!’ she says. ‘Our school has a brand-new vegetable garden, and I need helpers. Here’s the deal. Everyone who joins gets one seedling. Water it every single day this term, even when it’s wet, even when it’s boring, even when your friends are playing. Do that, and by the end of term you’ll be eating your own kai.’\n\nFour kids in the same row heard exactly the same words.\n\nJun was fiddling with a yo-yo under his jacket, and he missed almost all of it. By morning tea he’d forgotten the whole thing. ‘Garden? What garden?’ The message was heard, but it never sank in. Like seed on the path, it was gone before it could take root.\n\nSione heard it and lit up. ‘I’m in! Best gardener ever!’ For two days he watered his seedling like a champion. On day three it rained, his mates were playing footy, and somebody laughed, ‘Gardening? Really?’ He skipped one day, then another. Lots of excitement, but no roots.\n\nMia wanted to join. She really did. But then she thought about her spelling test, her art entry, piano and the group project. ‘There’s just no room.’ Her worries grew taller than her good intentions. Thorns.\n\nAnd Aroha? She listened hard. At lunch she signed up and wrote WATER IT on her hand. Every morning before the bell, rain or shine, she knelt in the garden with a watering can. Some days it was boring. One day a classmate teased her. She kept going.\n\nThree weeks later her seedling was thick and green, and kids wandered over to have a look.\n\nSame message. Same assembly. Four different responses. The difference wasn’t the message. It was the soil.\n\nBut here’s the good bit: there are still seedlings left in the garden, and nobody is ever too late to start.",
        notes: "About 3 minutes. The school, Mrs Hohepa and the Garden Club are imagined, a modern ‘earthly story’ that mirrors Jesus’ one. Kia ora = hello. Kai = food. Portray all four children kindly: nobody is the bad kid. Each one is a normal way hearts respond to a message." },

      { type: "question", id: "w-q1", title: "Who kept going?", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "In the story, which kid watered her seedling every day, even when it was wet or boring?",
        options: ["Jun", "Sione", "Mia", "Aroha"], answer: 3,
        hint: "Answer: D, Aroha. Follow-up: ‘What did she write on her hand?’ (WATER IT.) Follow-up 2: ‘What happened to Sione’s seedling, and why?’ (He quit when it got hard, so it had no ‘roots’.) If silent: ask who in the story wrote on her hand and let them find the name on the slide." },

      { type: "roleplay", id: "w-rp", title: "The Garden Club Assembly", minutes: 5, ref: "Matthew 13:3–9, 18–23",
        art: { key: "t3w01d3-b" },
        imagined: "This is a modern retelling in Aotearoa New Zealand of Jesus’ story of the sower. The school, Mrs Hohepa and the four children’s conversations are all imagined.",
        actions: ["Everyone (assembly): shuffle, cough and whisper, then go quiet", "Everyone (school bell): ‘Brrrring!’", "Everyone (thorns): wiggle fingers and crowd round Mia", "Everyone (mates): call out ‘Footy!’"],
        props: ["Optional: a watering can", "Optional: a yo-yo for Jun", "Optional: a pen to write on Aroha’s hand"],
        characters: [
          { name: "Narrator", color: "#F2C77B", desc: "Tells the story" },
          { name: "Mrs Hohepa", color: "#C9A0DC", desc: "Visiting gardener — warm and a bit funny" },
          { name: "Aroha", color: "#7BA7D9", desc: "Listens carefully and keeps going" },
          { name: "Sione", color: "#FFB547", desc: "Big-hearted, jumps in fast, loves footy" },
          { name: "Mia", color: "#8BC34A", desc: "Kind and creative, but always worrying" },
          { name: "Jun", color: "#A1887F", desc: "Cheeky, easily distracted, loves his yo-yo" },
          { name: "Everyone", color: "#FFFFFF", desc: "The assembly crowd, school bell, mates and thorns" }
        ],
        lines: [
          { character: "Narrator", text: "Monday morning assembly. The hall is hot and crowded. A visitor in gumboots steps onto the stage.", direction: true },
          { character: "Everyone", text: "Shuffle, shuffle, cough, whisper…", action: "assembly noises, then silence" },
          { character: "Mrs Hohepa", text: "Kia ora, everyone! Our school has a brand-new garden, and I need helpers." },
          { character: "Mrs Hohepa", text: "Everyone who joins gets a seedling. Water it every single day this term, even when it’s wet and even when it’s boring." },
          { character: "Jun", text: "Watch this! I’m about to do walk-the-dog…", action: "yo-yo clatters on the floor" },
          { character: "Aroha", text: "Jun, shh! Did you hear any of that?", action: "whisper" },
          { character: "Jun", text: "Any of what? I nearly did walk-the-dog!" },
          { character: "Everyone", text: "Brrrring!", action: "the school bell: everyone leaps up" },
          { character: "Narrator", text: "By morning tea, Jun’s head is full of yo-yos. Not one word about the garden has stuck." },
          { character: "Sione", text: "A garden? I’m in! I’m going to grow the biggest pumpkin in New Zealand!", action: "fist pump" },
          { character: "Narrator", text: "Day one, Sione waters like a champion. Day two, too. Day three, it rains." },
          { character: "Everyone", text: "Sione! Footy! Come on!", action: "his mates, calling from far away" },
          { character: "Sione", text: "Gardening in the rain? Nah. Just this once.", action: "drop the watering can" },
          { character: "Mia", text: "I’d love to join, but there’s my spelling test, my art entry, piano, the group project…" },
          { character: "Everyone", text: "Worry, worry, worry!", action: "wiggle fingers like thorns around Mia" },
          { character: "Mia", text: "There’s just no room. Maybe next term.", action: "sigh" },
          { character: "Aroha", text: "Mrs Hohepa, what if it’s too wet? Or too dry? Or really boring?" },
          { character: "Mrs Hohepa", text: "Then you water it anyway. A little every day beats a lot once." },
          { character: "Aroha", text: "Every day. Got it.", action: "write WATER IT on her hand" },
          { pause: "Freeze! Same assembly, four kids. Which one are you most like in a normal week?", seconds: 20 },
          { character: "Narrator", text: "Three weeks later. A drizzly Tuesday. Aroha is kneeling in the garden with her watering can." },
          { character: "Sione", text: "Aroha! Your seedling is huge! Mine’s… kind of crispy.", action: "hold up a droopy brown stalk" },
          { character: "Aroha", text: "I just kept going. Even when it rained. Even when it was boring.", action: "shrug and smile" },
          { character: "Jun", text: "Wait. That garden thing was in assembly? I totally missed it!" },
          { character: "Mia", text: "I wish I’d said yes. But I’m so behind on everything now.", action: "sad" },
          { character: "Aroha", text: "There are still seedlings left. Mrs Hohepa says anyone can start today." },
          { character: "Mrs Hohepa", text: "The seed is good. The garden is ready. Who wants to dig in?" },
          { character: "Sione", text: "I’ll start again, and this time I’ll water it even in the rain!", action: "roll up sleeves" },
          { character: "Jun", text: "Okay, I’m listening this time. What’s the plan?", action: "put the yo-yo in his pocket" },
          { character: "Everyone", text: "Dig in!", action: "cheer, fists in the air" }
        ],
        debrief: [
          { level: "think", text: "Mrs Hohepa gave the same message to all four. Why did it grow in Aroha but not in the others?", hint: "The difference wasn’t the message or the teacher. It was how each one received it: Jun was distracted, Sione had no roots, Mia’s worries crowded it out, Aroha listened and kept going." },
          { level: "look", text: "What was different about what Aroha did?", hint: "She listened carefully, wrote it down, and watered every day, even when it was wet or boring. She kept going." }
        ],
        notes: "All four children are shown with warmth: nobody is ‘the bad one’, and Sione, Jun and Mia all get a second chance. Play the ending as hopeful. Mrs Hohepa is imagined. Everyone’s parts make for lots of noise, so give them a clear ‘freeze’ signal." },

      { type: "question", id: "w-q2", title: "Roots", minutes: 1, level: "think", mode: "pair", seconds: 45, skippable: true,
        text: "Sione started stronger than anyone, yet his seedling didn’t make it. Why do you think big excitement wasn’t enough?",
        hint: "Good answers: excitement fades when it gets hard; he had no ‘roots’ like the plants on rocky ground; he gave up when his mates laughed or it rained; keeping on matters more than starting fast; roots grow slowly, day by day. Follow-up: ‘What helps a person grow roots?’ (Habits, friends who encourage, remembering why.) Follow-up 2: ‘Have you ever started something strong and quit?’ If silent: ask them to think of a hobby they tried and dropped." },

      { type: "question", id: "w-q3", title: "Whose fault?", minutes: 1.5, level: "dig", mode: "discuss", seconds: 45,
        text: "Mrs Hohepa gave the same message to everyone, but only Aroha’s seedling grew. Is it Mrs Hohepa’s fault, the seed’s fault, or the kids’ fault? What does that say about hearing God’s message?",
        hint: "Ideas: not the message or the teacher (the farmer did his job); the ground matters; but it’s not that Jun, Sione and Mia are ‘bad’. They can start again; hearts can change; we can’t blame the seed. Follow-up: ‘What would the farmer say?’ Follow-up 2: ‘What could help Jun, Sione and Mia be good soil next time?’ If silent: ask ‘Is it fair to say one of them was just a worse person?’ (No: soil can change.)" },

      { type: "apply", id: "w-apply", title: "Head · Heart · Hands", minutes: 1,
        head: "The same message lands differently depending on the heart that hears it, and soil can change.",
        heart: "Father, make my heart good soil.",
        hands: "Pick one good thing you hear this week (a Bible verse, or a good word from a teacher or parent), write it on your hand or in your planner, and do one small thing about it before bed.",
        settings: ["home", "school", "sport"],
        notes: "Preview Thursday’s challenge. Students who aren’t church kids can use something good a teacher says." },

      { type: "scene", id: "w-scene", title: "Aroha keeps going", minutes: 0.5, optional: true,
        art: { key: "t3w01d3-b" },
        boxes: [
          { text: "“A little every day beats a lot once.”", pos: "tl", style: "speech" },
          { text: "She listened. She kept going.", pos: "br", style: "caption" }
        ] },

      { type: "verse", id: "w-verse", title: "Verse with actions", minutes: 1, optional: true, activity: "actions",
        notes: "Actions for Luke 8:15. Let students vote on their favourite action." },

      { type: "prayer", id: "w-pray", title: "Our Father (open hands)", minutes: 3, mood: "calm", style: "hands",
        tip: "Open hands can show a heart that’s ready to receive. Hold your hands out, palms up, like soft soil waiting for rain. Palms down is for putting worries down.",
        opening: "Sit comfortably and rest your hands on your knees. When I say, turn your palms up. Breathe in… and out.",
        phases: [
          { name: "Wow", lead: "Palms up. Say it with me in your head: ‘Our Father.’",
            prompts: ["Father, you give seed and rain and sunshine to everyone.", "Father, you are patient with people who start again."],
            starter: "Wow, Father, you are…", seconds: 35, aloud: "Our Father, you are generous and patient!" },
          { name: "Sorry", lead: "Palms down. Which is hardest for you: forgetting like Jun, quitting like Sione, or worrying like Mia?",
            prompts: ["Sorry for forgetting what I hear.", "Sorry for quitting when it gets hard."],
            starter: "Father, I’m sorry for…", seconds: 30, aloud: "Father, we’re sorry for forgetting, quitting and worrying." },
          { name: "Thanks", lead: "Palms up. Thank God for a second chance.",
            prompts: ["Thank you that I can start again.", "Thank you for people like Mrs Hohepa who help us grow."],
            starter: "Thank you, Father, for…", seconds: 30, aloud: "Thank you, Father, for second chances." },
          { name: "Please", lead: "Palms up. Ask for roots, and a heart with room for him.",
            prompts: ["Please help me keep going on the boring, wet days.", "Please take my worries and make room in my heart for you."],
            starter: "Please, Father, help…", seconds: 40, aloud: "Father, please help me listen and keep going." }
        ],
        closing: "Close your hands gently, as if holding a seed. Everyone: Amen.",
        notes: "Palms-up and palms-down are optional; students can simply sit still. Keep it calm." }
    ] },

  /* ======================= THURSDAY ======================= */
  { label: "Thursday", theme: "Be Good Soil", roleplay: false, mood: "dawn",
    learningIntentions: [
      "We are learning what the story of the sower shows us about God.",
      "We are learning what ‘good soil’ looks like: listen, hold on, keep going.",
      "I can say Luke 8:15 and choose one way to be good soil this week."
    ],
    assessment: "Students can retell the four kinds of ground in order, say that the sower’s generosity shows what God is like, and name one specific way they’ll listen, hold on and keep going this week.",
    resources: ["Screen", "Take-home challenge cards", "Optional: a pot of soil and a seed to plant for the classroom"],
    whereToNext: "Next week: The Good Samaritan. Jesus tells a story about a neighbour nobody expected.",
    slides: [
      { type: "title", id: "th-title", title: "Be Good Soil", minutes: 0.5, kicker: "Term 3 · Week 1", sub: "The Sower",
        art: { key: "t3w01d4-a" }, notes: "Let the splash play." },

      { type: "review", id: "th-review", title: "Put the story in order", minutes: 2.5, format: "order",
        prompt: "Put Jesus’ story of the sower in order!",
        items: ["The farmer scatters seed", "Birds eat the seed on the path", "Plants wither on the rocky ground", "Thorns choke the plants", "Good ground grows a huge harvest", "“If you have ears, pay attention!”"],
        hint: "Students call out the next step; click to place it. Ask: ‘How many of the four places did the seed fail?’ (Three.) ‘And what happened in the last one?’ (A harvest!)",
        notes: "Cards start scrambled." },

      { type: "scripture", id: "th-scr", title: "Luke 8:15 · Matthew 13:23", minutes: 1, ref: "Luke 8:15; Matthew 13:23", version: "CEV",
        lines: [
          { text: "But the seeds that fell on good ground are the people who hear the message and keep it in good and honest hearts. They last and produce a harvest.", ref: "Luke 8:15" },
          { text: "“The seeds that fell on good ground are the people who hear and understand the message. They produce a harvest.”", ref: "Matthew 13:23" }
        ],
        emphasis: ["hear the message", "keep it", "good and honest hearts", "last", "harvest"],
        notes: "Luke 8:15 is our memory verse. Notice the three things good soil does: hear it, keep it, last." },

      { type: "story", id: "th-story", title: "What it shows about God", minutes: 2, transition: "page", mood: "dawn",
        beats: [
          { text: "The farmer scatters everywhere.", caption: "Not just on the best ground. God is generous.",
            art: { key: "t3w01d4-a", label: "Thu · what it shows — good soil", desc: "Two cupped hands holding rich dark soil with a tiny green shoot pushing up, light falling on it.", shot: "close-up", motion: "kenburns-in", chars: [],
              scene: "Two cupped hands hold a mound of rich dark soil. From the middle, a tiny green shoot has pushed up and unfurled two small leaves. A soft beam of light falls on it from above, everything else in deep shadow." } },
          { text: "The seed is powerful.", caption: "One seed can become a hundred." },
          { text: "Good soil: hear it, keep it, last.", caption: "Listen. Hold on. Keep going.",
            art: { key: "t3w01d4-b", label: "Thu · live it — a listening heart", desc: "A child sitting under a pōhutukawa at the beach, reading a small Bible, the sea calm behind.", shot: "medium wide, peaceful", motion: "kenburns-out", chars: ["mia"],
              setting: "Modern-day Aotearoa New Zealand setting: a wide sandy beach with pōhutukawa trees on the bank, dunes with marram grass, rock pools, surf and a lifeguard flag in the distance. Kiwi kids of many backgrounds drawn naturally and respectfully, in everyday clothes, school uniforms or sports gear.",
              scene: "Mia sits on the grassy bank under a big spreading pōhutukawa tree, legs crossed, a small open Bible on her knees and her sketchbook beside her, reading quietly. The calm sea and the long beach stretch out below in early morning light." } },
          { text: "And if my heart feels hard?", caption: "The One who sows can soften the ground." }
        ],
        narration: "Today we ask the big question of the week: what does Jesus’ story show us about God?\n\nLook at the farmer. He is incredibly generous. He doesn’t only throw seed on the best soil. He throws it everywhere: the path, the rocks, the thorns. He doesn’t sort people first. In Jesus’ story, God keeps scattering his word over and over, to everyone, even to people who might ignore it, even to us on our grumpy days. Jesus himself was scattering that seed to the crowd on the lake, and he has never stopped.\n\nLook at the seed, too. God’s word is powerful. One small seed can become a hundred.\n\nAnd look at what Jesus asks of us. Luke tells this story and ends it like this: the seed on good ground stands for people who ‘hear the message and keep it in good and honest hearts’. Listen. Hold on. Keep going. Good soil isn’t a better kind of person. It’s a heart that stays open, soft and deep. Like Aroha with her watering can, or Mia on the beach with her Bible and her sketchbook, taking a few quiet minutes to listen.\n\nBut what if your heart feels like a hard path today? Soil can change. Farmers dig, water and pull out weeds. And the One who sows is also the One who can soften hard ground. Jesus came to scatter God’s life everywhere, and he went all the way to the cross so even hard hearts could be made new. That’s why we can pray, ‘Father, make my heart good soil.’",
        notes: "About 2 minutes (roughly 280 words). This is the ‘heavenly meaning’ day. Be gentle with students who feel like the path or the thorns: soil can change, and God helps with that. If asked: the ‘farmer’ in Jesus’ explanation is the one spreading God’s message, which Jesus himself was doing that day." },

      { type: "question", id: "th-q1", title: "Good soil does…", minutes: 1, level: "look", mode: "poll", seconds: 20,
        text: "According to Luke 8:15, what do people who are like good ground do with the message?",
        options: ["Forget it quickly", "Hear it and keep it in good and honest hearts", "Argue with it", "Write it on the wall"], answer: 1,
        hint: "Answer: B (Luke 8:15). Follow-up: ‘What else does Luke say good soil does?’ (They last and produce a harvest.) Follow-up 2: ‘Which word in that verse is about not giving up?’ (Last.) If silent: read the first scripture line together and let students find the answer in the words." },

      { type: "question", id: "th-q2", title: "Seed everywhere", minutes: 1.5, level: "think", mode: "pair", seconds: 45,
        text: "The farmer threw seed on the path, the rocks and the thorns, not only on the best soil. What does that show us about what God is like?",
        hint: "Good answers: God is generous; he gives everyone a chance; he doesn’t give up on people; his word is for everyone, not only ‘good’ people; he keeps scattering even when some ignore it. Follow-up: ‘Would you have kept scattering after three failures?’ Follow-up 2: ‘How is that like how Jesus treats people?’ If silent: ask ‘What if the farmer only threw seed on the best soil, who would miss out?’" },

      { type: "recap", id: "th-recap", title: "This Week’s Big Idea", minutes: 1.5,
        points: [
          "A parable is an earthly story with a heavenly meaning. The seed is God’s message, and the ground is our hearts.",
          "God is generous: he scatters his word on everyone, and it grows a harvest where hearts listen, hold on and keep going.",
          "Soil can change, and the One who sows can soften hard ground."
        ],
        notes: "Then the Big Idea stamps in. Ask a student to say it in their own words." },

      { type: "question", id: "th-q3", title: "Born good?", minutes: 1.5, level: "dig", mode: "vote", seconds: 30, skippable: true,
        text: "Agree or disagree: “Some people are just born good soil and others can never change.”",
        options: ["Agree", "Disagree"],
        hint: "Most will disagree. Draw out why: soil can change (dig up the path, clear the rocks, pull the thorns); Jun, Sione and Mia all got a second chance; the Sower can soften hearts; even Aroha had to keep working at it every day. Follow-up: ‘What could help a hard heart soften?’ Follow-up 2: ‘Who might God use to help someone be good soil?’ If silent: ask a student to point to where in the story someone started again." },

      { type: "challenge", id: "th-chal", title: "This Week’s Challenge", minutes: 2,
        text: "Be good soil: each day, listen to one Bible verse (or something good a teacher says) and do one small thing about it.",
        why: "“…the people who hear the message and keep it in good and honest hearts. They last and produce a harvest.” — Luke 8:15",
        head: "God scatters his word generously, and I can be good soil.", heart: "Father, make my heart good soil.", hands: "Each day, listen to one verse (or a good word from a teacher) and do one small thing about it.",
        takeHome: true,
        notes: "Next week’s first Monday will check in on this. Give examples: read one verse at breakfast and say thank you to someone; hear a teacher say ‘be kind’ and share your pencil; read Luke 8:15 and write it on your hand. Students unsure about the Bible can use the good words a teacher says." },

      { type: "verse", id: "th-verse", title: "Memory verse: fade-out", minutes: 1.5, activity: "fade",
        notes: "Fade out Luke 8:15. Ask: which word do you find hardest to remember? Which action helps?" },

      { type: "scene", id: "th-scene", title: "Good soil", minutes: 1, optional: true,
        art: { key: "t3w01d4-b" },
        boxes: [
          { text: "“Hear the message. Keep it. Last.”", pos: "tl", style: "speech" },
          { text: "Listen. Hold on. Keep going.", pos: "br", style: "caption" }
        ] },

      { type: "prayer", id: "th-pray", title: "Our Father (line by line)", minutes: 3, mood: "calm", style: "psalm",
        tip: "Jesus’ prayer starts with “Our Father in heaven.” Today we pray line by line, saying it after each other, and adding our own words.",
        opening: "Let’s pray together, line by line. I’ll pray a line, and you’ll echo it. Then we’ll add our own words.",
        phases: [
          { name: "Wow", lead: "Echo after me: ‘Our Father in heaven…’",
            prompts: ["Our Father in heaven, you are generous.", "You scatter your word on everyone."],
            starter: "Our Father, you are…", seconds: 35, aloud: "Our Father in heaven, you are generous and good!" },
          { name: "Sorry", lead: "Silently, tell your Father which ground you’ve been: the path, the rocks or the thorns.",
            prompts: ["Father, sorry for not listening when you speak.", "Sorry for giving up when it gets hard."],
            starter: "Father, I’m sorry for…", seconds: 30, aloud: "Father, we’re sorry. Please forgive us and help us start again." },
          { name: "Thanks", lead: "Thank him for the seed he has scattered in you.",
            prompts: ["Thank you for every good word I’ve heard about you.", "Thank you for Jesus, who came to make hearts new."],
            starter: "Thank you, Father, for…", seconds: 30, aloud: "Thank you, Father, for your word and for Jesus." },
          { name: "Please", lead: "Pray this week’s challenge into your own words.",
            prompts: ["Father, please make my heart good soil.", "Help me listen, hold on and keep going every day this week."],
            starter: "Please, Father, help…", seconds: 40, aloud: "Father, please make our hearts good soil, and help us listen, hold on and keep going." }
        ],
        closing: "Let’s say Luke 8:15 together as our last line. Amen.",
        notes: "Say each line slowly and let the class echo. Keep the ‘our own words’ part short and sincere." }
    ] }
  ]
};
