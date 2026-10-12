/* Morninglight 2027 — meta data: terms, week map, prayer ladder, image style block.
   Loaded before term data. Plain script, works over file:// */
window.ML_META = {
  appName: "Morninglight",
  year: 2027,
  terms: [
    { id: "t1", name: "Term 1", title: "Knowing God our Creator", sub: "Genesis → Luke", question: "Who is God?",
      accent: "#FFB547", accentDeep: "#FF7A3D", cover: "shared-term1-cover",
      weeks: [
        { n: 1, title: "In the Beginning", passage: "Genesis 1:1–2:3; 2:15–25; Psalm 19:1", verse: "Genesis 1:1" },
        { n: 2, title: "Broken Friendship", passage: "Genesis 3", verse: "1 John 1:9" },
        { n: 3, title: "Rescue in the Storm", passage: "Genesis 6:9–9:17", verse: "Genesis 9:13" },
        { n: 4, title: "The Promise-Maker", passage: "Genesis 12; 15; 18; 21", verse: "Genesis 15:6" },
        { n: 5, title: "God Is in Control", passage: "Genesis 37; 39–41; 45; 50", verse: "Genesis 50:20" },
        { n: 6, title: "The God Who Rescues", passage: "Exodus 1–14 (selected)", verse: "Exodus 15:2" },
        { n: 7, title: "God Lives with His People", passage: "Exodus 16–20; 25; 40", verse: "Exodus 20:2–3" },
        { n: 8, title: "The Shepherd-King", passage: "1 Samuel 16–17; Psalm 23", verse: "Psalm 23:1" },
        { n: 9, title: "Promises Spoken Long Ago", passage: "Isaiah 9; 53; Micah 5; Matthew 2", verse: "Isaiah 9:6" },
        { n: 10, title: "God Keeps His Promise", passage: "Luke 1–2", verse: "Luke 2:10–11" }
      ] },
    { id: "t2", name: "Term 2", title: "Trusting God", sub: "Heroes of faith", question: "Can I trust him?",
      accent: "#5CA8FF", accentDeep: "#1D5FD1", cover: "shared-term2-cover",
      weeks: [
        { n: 1, title: "What Is Faith?" }, { n: 2, title: "Faith That Marches" }, { n: 3, title: "Faith When You Feel Small" },
        { n: 4, title: "Faith That Prays and Waits" }, { n: 5, title: "Faith on the Mountain" }, { n: 6, title: "“Even If He Doesn’t”" },
        { n: 7, title: "For Such a Time as This" }, { n: 8, title: "Faith That Brings Friends to Jesus" },
        { n: 9, title: "Faith in the Storm" }, { n: 10, title: "Faith Without Seeing" }
      ] },
    { id: "t3", name: "Term 3", title: "Having Faith in God", sub: "Jesus’ famous parables", question: "What does Jesus teach about life with God?",
      accent: "#6BCB77", accentDeep: "#1E8E5A", cover: "shared-term3-cover",
      weeks: [
        { n: 1, title: "The Sower" }, { n: 2, title: "The Good Samaritan" }, { n: 3, title: "Lost Sheep & Lost Coin" },
        { n: 4, title: "The Lost Son" }, { n: 5, title: "Two Builders" }, { n: 6, title: "The Servant Who Wouldn’t Forgive" },
        { n: 7, title: "The Three Servants" }, { n: 8, title: "The Ten Bridesmaids" }, { n: 9, title: "The Kingdom Is Worth Everything" },
        { n: 10, title: "Two Men Who Prayed" }
      ] },
    { id: "t4", name: "Term 4", title: "Trusting and Following Jesus", sub: "Acts → Aotearoa", question: "What does it look like to follow Jesus for real?",
      accent: "#FF5A4F", accentDeep: "#C21F3A", cover: "shared-term4-cover",
      weeks: [
        { n: 1, title: "Peter and John" }, { n: 2, title: "Stephen: Faithful to the End" }, { n: 3, title: "Philip and the Ethiopian" },
        { n: 4, title: "Saul Becomes Paul" }, { n: 5, title: "Midnight Songs in Prison" }, { n: 6, title: "Ordinary Heroes Who Served" },
        { n: 7, title: "Storm, Shipwreck and Rome" }, { n: 8, title: "Polycarp" }, { n: 9, title: "William Tyndale" },
        { n: 10, title: "The Gospel Comes to Aotearoa" }
      ] }
  ],
  prayerLadder: {
    "Term 1": ["Wow", "Sorry", "Thanks", "Please", "All four in order", "Praying for others by name", "Thanking for daily needs", "Praying a psalm", "Praying God's promises back", "Mary's song: praise"],
    "Term 2": ["Praying Scripture back", "Praying Scripture back", "Praying when you feel small", "Praying and waiting", "Persistent prayer", "“Even if” prayers", "Praying for your place", "Praying for friends by name", "Praying when afraid", "“Help my unbelief”"],
    "Term 3": ["Our Father", "Hallowed be your name", "Your kingdom come", "Your will be done", "Our daily bread", "Forgive us as we forgive", "Lead us, deliver us", "Yours is the kingdom", "The whole prayer, my words", "The tax collector’s prayer"],
    "Term 4": ["Praying boldly", "Praying for those who hurt us", "Praying for friends who don’t know Jesus", "Praying for guidance", "Joy in trouble", "Praying for team-mates", "Praying in a storm", "Praying for the persecuted church", "Hungry for the Bible", "My own prayer plan"]
  },
  levels: {
    look: { label: "LOOK", desc: "What does it say?" },
    think: { label: "THINK", desc: "What does it show about God?" },
    dig: { label: "DIG", desc: "Go deeper" },
    live: { label: "LIVE", desc: "So what for me?" }
  },
  modes: {
    pair: "Think · Pair · Share", silent: "Silent think, then share", write: "Mini-whiteboards", vote: "Vote with your feet",
    discuss: "Whole-class discussion", poll: "Quick poll", finish: "Finish the sentence"
  },
  styleBlock: "STYLE: Black-and-white manga / graphic-novel ink illustration. Thick confident black outlines, dramatic high-contrast lighting, large solid-black silhouettes, soft grey airbrushed gradient skies, fine halftone shading, light rays and speed lines, cinematic camera angles. Ancient Middle-Eastern setting: mud-brick and stone buildings, flat roofs, robes, head cloths, sandals, olive trees, desert hills. Strictly monochrome (black, white and greys only). Hand-inked look, not photorealistic, not 3D, not painterly. Child-appropriate: no blood, gore or graphic violence; danger is shown only through silhouettes, shadows and expressions. Absolutely no text, letters, captions, speech bubbles, signatures or watermarks anywhere in the image. Leave a calmer area of sky or ground in the top or bottom third."
};
