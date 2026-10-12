/* Morninglight 2027 — Term 4 art plan: image prompts planned ahead of the lessons.
   When Term 4 is built, the lesson data reuses these exact keys and scenes.
   Term 4 — Trusting and Following Jesus (faithful Christians from Acts onwards).
   Spine: "Faithful people, faithful God." Weeks 1–7 in Acts; Weeks 8–10 follow the story
   into church history (Polycarp, Tyndale) and into Aotearoa (Ruatara, Marsden, 1814).
   Safety: deaths are never shown (Stephen, Polycarp, Tyndale) — only the moment before,
   faces turned to the light, or the aftermath of faith carried on. No weapons used on anyone.
   Māori figures (Week 10) are drawn with dignity and accuracy; teacher to review W10 art. */
window.ML_ARTPLAN = window.ML_ARTPLAN || {};
(function () {
  var KIDS = "Kiwi kids of many backgrounds drawn naturally and respectfully, in everyday clothes, school uniforms or sports gear.";
  var GR = {
    philippi: "First-century Roman colony of Philippi in Macedonia: paved Roman streets, stone colonnades, a forum with a magistrates' platform, red-tiled roofs, a river with reeds outside the city gate, people in tunics, togas and draped Greek robes.",
    corinth: "First-century Greek-Roman port city of Corinth: busy market colonnades, workshops with awnings, stone-paved streets, the rocky hill of the Acrocorinth behind, merchants and sailors in tunics and cloaks.",
    sea: "First-century Mediterranean world at sea: a large wooden Roman grain ship with one great square sail, rope rigging, a high curved stern, sailors and soldiers in tunics and cloaks, huge rolling waves.",
    malta: "First-century island of Malta: a rocky bay with low cliffs and pale limestone, scrubby bushes, a small stone farming estate, islanders in simple tunics and cloaks, a wrecked Roman ship offshore.",
    rome: "First-century city of Rome: a modest rented upper-floor room in a stone apartment block, a window looking over red-tiled roofs, temples and columns in the distance, Roman soldiers in helmets and cloaks.",
    school: "Modern-day Aotearoa New Zealand setting: a suburban primary school with classroom blocks, a covered walkway, playing fields, native trees and harakeke (flax) bushes. " + KIDS
  };
  var SMYRNA = "Roman Smyrna in Asia Minor around AD 155: a Greek-Roman harbour city on the Aegean coast with white stone colonnades, red-tiled roofs, a hill of terraced houses, a stone stadium with tiered seating, olive groves and farmhouses in the hills outside the city, people in tunics, Greek cloaks and Roman military dress.";
  var TUDOR = "England and the Low Countries in the 1520s–1530s: Tudor timber-framed houses, a Gloucestershire manor house and green ploughed fields, the narrow streets and wharves of Antwerp and Worms with tall step-gabled houses, wooden printing presses, sailing ships with square sails, people in Tudor doublets, long gowns, scholars' caps and woollen hose.";
  var AOTEAROA = "Bay of Islands, Aotearoa New Zealand, 1814: a steep green headland with the terraced hill pā of Rangihoua (wooden palisades, raised storehouses, whare with thatched roofs), the sandy beach of Oihi Bay below, pōhutukawa and harakeke on the slopes, carved waka on the shore, the two-masted brig Active at anchor in the bay. Ngāpuhi men, women and children in flax kākahu (cloaks), korowai and piupiu, hair tied in topknots with feathers or combs, moko where historically appropriate; English missionaries in early-1800s coats, bonnets and long dresses. Everyone drawn with dignity and accuracy, no caricature.";

  window.ML_ARTPLAN["Term 4"] = {
    characters: {
      john:      { name: "John", sheet: "char-john", desc: "John: young fisherman-apostle in his twenties, slim, shoulder-length dark hair tied back, a short thin beard, earnest open face, plain belted tunic and a pale cloak." },
      stephen:   { name: "Stephen", sheet: "char-stephen", desc: "Stephen: Greek-speaking Jewish believer around 30, short dark curly hair, neat short beard, bright calm eyes, a clean light-coloured robe with a striped border, a cloth bag of bread for serving." },
      philip:    { name: "Philip", sheet: "char-philip", desc: "Philip: energetic traveller about 35, wiry build, short dark hair, trimmed black beard, sun-browned face, dusty knee-length tunic, travelling cloak and walking staff, sandals." },
      ethiopian: { name: "The Ethiopian official", sheet: "char-ethiopian", desc: "The Ethiopian official: dignified dark-skinned African court treasurer in his forties, tall and slender, closely cropped hair, clean-shaven, a fine flowing robe with an embroidered collar, a gold armband, holding an unrolled scroll." },
      paul:      { name: "Saul / Paul", sheet: "char-paul", desc: "Saul (later Paul): wiry man in his thirties, short dark hair already thinning at the front, dark close beard, intense eyes, a plain dark tunic and a long travelling cloak, often holding a scroll or a tentmaker's awl." },
      ananias:   { name: "Ananias", sheet: "char-ananias", desc: "Ananias: gentle older believer in Damascus in his fifties, grey-streaked beard and hair, kind worried eyes, a simple brown robe and head cloth, plain leather sandals." },
      barnabas:  { name: "Barnabas", sheet: "char-barnabas", desc: "Barnabas: big warm-hearted man about 40, broad shoulders, curly greying hair, full beard, wide smile, a sturdy wool cloak, often with an arm around someone's shoulder." },
      lydia:     { name: "Lydia", sheet: "char-lydia", desc: "Lydia: confident businesswoman in her forties, hair wrapped in an elegant draped head scarf, fine robe with a deep-dyed border (purple cloth seller), bangles on one wrist, a folded bolt of cloth." },
      silas:     { name: "Silas", sheet: "char-silas", desc: "Silas: steady, cheerful companion about 35, short wavy hair, short beard, strong singing-voice face with laughter lines, a plain grey tunic and travelling cloak." },
      jailer:    { name: "The Philippian jailer", sheet: "char-jailer", desc: "The Philippian jailer: burly Roman prison keeper in his forties, cropped hair, clean-shaven heavy jaw, a short belted soldier's tunic, a ring of large iron keys at his belt, an oil lamp in hand." },
      priscilla: { name: "Priscilla", sheet: "char-priscilla", desc: "Priscilla: bright, quick-witted Jewish woman in her thirties, dark hair in a braided bun under a light head scarf, a practical apron over her robe, needle and heavy thread in hand." },
      aquila:    { name: "Aquila", sheet: "char-aquila", desc: "Aquila: tentmaker husband in his late thirties, strong hands, short dark beard, receding hairline, a leather apron over a work tunic, often holding a long piece of goat-hair cloth." },
      apollos:   { name: "Apollos", sheet: "char-apollos", desc: "Apollos: eloquent young teacher from Alexandria in his late twenties, neat curled dark hair, clean-shaven, lively gestures, a fine white Greek-style cloak draped over one shoulder, a scroll in hand." },
      timothy:   { name: "Timothy", sheet: "char-timothy", desc: "Timothy: shy young man in his late teens, slim, short dark hair, no beard yet, gentle serious face, a simple pale tunic and a small satchel of scrolls over one shoulder." },
      polycarp:  { name: "Polycarp", sheet: "char-polycarp", desc: "Polycarp: very old bishop of Smyrna, 86, thin and slightly stooped, white hair and long white beard, deep-set kind eyes, a plain undyed wool cloak (pallium) over a simple tunic; drawn as a respectful illustrated character, not a portrait." },
      tyndale:   { name: "William Tyndale", sheet: "char-tyndale", desc: "William Tyndale: English scholar in his thirties, lean face, dark close-trimmed beard, thoughtful eyes, a long black scholar's gown and a soft black cap, ink-stained fingers, a small book in hand; drawn as a respectful illustrated character, not a portrait." },
      marsden:   { name: "Samuel Marsden", sheet: "char-marsden", desc: "Samuel Marsden: sturdy English clergyman about 49, broad face, clean-shaven, short greying hair, a dark long-tailed clergyman's coat with a white neckcloth, breeches and buckled shoes, a small black Bible; drawn as a respectful illustrated character, not a portrait." },
      ruatara:   { name: "Ruatara", sheet: "char-ruatara", desc: "Ruatara: young Ngāpuhi rangatira about 27, strong and alert, black hair tied in a topknot with a white feather, facial moko drawn simply and respectfully (no invented copy of a real design), a finely woven flax kākahu or a korowai with tassels, a pounamu pendant; dignified, warm and intelligent." }
    },
    weeks: [
      /* ───────────────────────── WEEK 1 — PETER AND JOHN ───────────────────────── */
      { n: 1, title: "Peter and John: Bold Because of the Spirit", passage: "Acts 1:8; 2; 3:1–10; 4:1–22", verse: "Acts 4:20",
        outline: [
          "Mon 🎭 Wind, fire and many languages — the Holy Spirit comes at Pentecost (Acts 2:1–13).",
          "Tue Peter preaches about Jesus; about 3,000 believe and are baptised (Acts 2:14–41).",
          "Wed 🎭 The man at the Beautiful Gate — \"In the name of Jesus, walk!\" (Acts 3:1–10).",
          "Thu Before the council: \"We cannot stop speaking about what we have seen and heard\" (Acts 4:1–22) · Challenge: speak up about one thing Jesus has done."
        ],
        chars: ["peter", "john"],
        cover: { key: "t4w01-cover", label: "Week cover", desc: "Peter and John walking boldly up the temple steps in Jerusalem, a beam of light falling on them.", shot: "epic wide, low-angle",
          scene: "Peter and John stride side by side up the broad stone steps of the Jerusalem temple, seen from a low angle. Huge columns tower above them, crowds part around them, and a great beam of morning light falls across their path.", chars: ["peter", "john"] },
        scenes: [
          { key: "t4w01d1-a", label: "Mon · story — wind and flames", desc: "The believers in an upstairs room as a rushing wind blows and small flames of light rest above each head.", shot: "wide, interior",
            scene: "Inside a crowded upstairs room, about a hundred believers look up in wonder as a rushing wind sweeps through, robes and head cloths blowing. Small flickering tongues of flame-like light rest above each head, filling the room with brightness.", chars: ["peter", "john"] },
          { key: "t4w01d1-b", label: "Mon · role-play card — many languages", desc: "A huge festival crowd in the street, people from many nations amazed to hear the believers speaking their own languages.", shot: "wide, street level",
            scene: "In a packed Jerusalem street at festival time, travellers from many nations in different headwear and robes turn in amazement toward a balcony where the believers speak out joyfully. Faces show surprise, laughter and wonder; banners of light stream down.", chars: [] },
          { key: "t4w01d2-a", label: "Tue · story — Peter preaches", desc: "Peter standing on a high step, arm outstretched, preaching to a vast crowd about Jesus.", shot: "low-angle, dramatic",
            scene: "Peter stands on a high stone step with one arm stretched out, speaking boldly to a vast crowd that fills the square below. John and the other apostles stand behind him. Sunlight breaks through clouds onto the listening faces.", chars: ["peter", "john"] },
          { key: "t4w01d2-b", label: "Tue · 3,000 believe", desc: "People lining up to be baptised at the pools outside the temple, others praying and embracing.", shot: "wide, golden light",
            scene: "Beside large stepped stone pools near the temple, long lines of people wait joyfully to be baptised. In the water an apostle helps a young man up, dripping and smiling; families embrace on the steps as the late sun turns everything golden.", chars: [] },
          { key: "t4w01d3-a", label: "Wed · story — the man at the gate", desc: "Peter and John looking down at a man who cannot walk, sitting by the ornate temple gate holding out a bowl.", shot: "medium, from the man's eye level",
            scene: "At the tall ornate Beautiful Gate of the temple, a thin man who has never walked sits on a mat holding up a begging bowl. Peter and John stop and look straight at him, Peter reaching out a strong open hand toward him.", chars: ["peter", "john"] },
          { key: "t4w01d3-b", label: "Wed · role-play card — walking and leaping", desc: "The healed man jumping for joy through the temple courts while people stare in amazement.", shot: "wide, speed lines",
            scene: "The healed man leaps and jumps through the temple courtyard with his arms flung up in joy, his old mat left behind on the ground. Peter and John follow, smiling, and astonished worshippers turn and point, speed lines streaking behind him.", chars: ["peter", "john"] },
          { key: "t4w01d4-a", label: "Thu · before the council", desc: "Peter and John standing calmly in the centre of a semicircle of stern religious leaders.", shot: "wide, high-angle",
            scene: "In a stone council hall, stern elders in tall head coverings sit in a great half-circle of benches, frowning down. In the centre Peter and John stand calm and upright, with the healed man beside them, a shaft of light falling on the three.", chars: ["peter", "john"] },
          { key: "t4w01d4-b", label: "Thu · live it — speak up", desc: "A Kiwi kid on the school field telling a friend something good, both sitting on the grass.", shot: "medium wide, warm",
            setting: GR.school,
            scene: "Two kids sit cross-legged on the grass under a big tree at lunchtime, one talking animatedly with open hands while the other leans in listening and smiling. A rugby ball and lunchboxes lie beside them; the sunny field stretches behind.", chars: [] }
        ],
        comic: { key: "t4w01-comic", label: "Comic page (week opener)", desc: "Six-panel comic page from Pentecost to the council.",
          panels: "Six panels. Panel 1 (wide): believers in an upper room as wind rushes in and flames of light appear above their heads. Panel 2 (small): a traveller's astonished face. Panel 3 (tall): Peter preaching from a high step to a huge crowd. Panel 4 (small): Peter's hand reaching down to a man by a temple gate. Panel 5 (wide): the man leaping for joy across the courtyard. Panel 6 (wide): Peter and John standing calmly before the frowning council.", chars: ["peter", "john"] }
      },

      /* ───────────────────────── WEEK 2 — STEPHEN ───────────────────────── */
      { n: 2, title: "Stephen: Faithful to the End", passage: "Acts 6:1–8:4 (selected)", verse: "Acts 7:60",
        outline: [
          "Mon 🎭 Seven helpers chosen to share food fairly, including Stephen and Philip (Acts 6:1–7).",
          "Tue Stephen, full of grace and power; false accusations; his face like an angel's (Acts 6:8–15).",
          "Wed 🎭 Before the council: Stephen sees Jesus and prays for those against him (Acts 7:1, 51–60; death implied only).",
          "Thu Forgiveness — and a scattered church that keeps sharing the good news (Acts 8:1–4)."
        ],
        chars: ["stephen", "philip", "peter", "paul"],
        cover: { key: "t4w02-cover", label: "Week cover", desc: "Stephen standing alone in a shaft of light, face lifted upward, calm and unafraid.", shot: "silhouette, low-angle",
          scene: "Stephen stands alone on a rocky rise outside Jerusalem's walls, face lifted upward and peaceful, arms slightly open. Behind him dark storm clouds part and brilliant rays pour down around him; the city walls are a dark silhouette below.", chars: ["stephen"] },
        scenes: [
          { key: "t4w02d1-a", label: "Mon · story — the food problem", desc: "Widows waiting in a line for food while some are overlooked, the apostles noticing the problem.", shot: "medium wide",
            scene: "In a courtyard of the early church, a line of widows waits with baskets for the daily bread. Some Greek-speaking widows stand at the back, overlooked and sad. Peter, standing on a step, notices them and frowns with concern.", chars: ["peter"] },
          { key: "t4w02d1-b", label: "Mon · role-play card — seven helpers", desc: "Seven men, including Stephen and Philip, standing in a row while the apostles pray for them with hands on their shoulders.", shot: "medium, warm light",
            scene: "Seven men stand in a row in a sunlit courtyard, heads bowed, Stephen and Philip in the middle. The apostles stand behind with hands on their shoulders, praying. A crowd of believers watches with hope; baskets of bread wait nearby.", chars: ["stephen", "philip", "peter"] },
          { key: "t4w02d2-a", label: "Tue · story — full of grace", desc: "Stephen handing out bread to widows and children, kind and smiling, in a busy courtyard.", shot: "medium",
            scene: "Stephen kneels to hand a round loaf of bread to an elderly widow and a small child, smiling warmly. Behind him other helpers carry baskets through the busy courtyard, and morning light falls across the flat roofs.", chars: ["stephen"] },
          { key: "t4w02d2-b", label: "Tue · his face like an angel", desc: "Stephen standing before accusers, his face calm and glowing with light while shadowy figures point at him.", shot: "close-up on face, shadowed background",
            scene: "Stephen's face, calm and gently glowing with soft light, fills the centre of the frame. Around the edges, shadowed accusers in dark robes point fingers at him from both sides, their faces hidden in deep shadow.", chars: ["stephen"] },
          { key: "t4w02d3-a", label: "Wed · story — Stephen speaks to the council", desc: "Stephen speaking bravely in the council hall, leaders gripping their robes and glaring.", shot: "wide, high-angle",
            scene: "In the great stone council hall, Stephen stands in the centre speaking with one hand raised, unafraid. The leaders on the curved benches lean forward, gripping their robes, scowling. Light from a high window falls only on Stephen.", chars: ["stephen"] },
          { key: "t4w02d3-b", label: "Wed · role-play card — \"I see heaven open\"", desc: "Stephen looking up at the sky filled with light, kneeling outside the city — no harm shown.", shot: "low-angle, silhouette crowd",
            scene: "Outside the city wall, Stephen kneels on the stony ground with his face turned up to a sky split open with brilliant light, peaceful and praying. The angry crowd is only dark silhouettes at the edges; a young man, Saul, stands apart holding a pile of cloaks.", chars: ["stephen", "paul"] },
          { key: "t4w02d4-a", label: "Thu · forgiveness", desc: "Close-up of Stephen's folded hands and peaceful face as he prays, \"Lord, do not hold this sin against them.\"", shot: "close-up",
            scene: "A close-up of Stephen's hands folded in prayer and the lower half of his calm, gentle face, eyes closed. Soft white light washes over him from above, and the background fades into soft grey mist.", chars: ["stephen"] },
          { key: "t4w02d4-b", label: "Thu · the scattered church keeps sharing", desc: "Believers walking away from Jerusalem in small groups along different roads, carrying bundles, talking to villagers about Jesus.", shot: "epic wide, from above",
            scene: "From high above, small groups of believers walk away from Jerusalem along several winding roads into the hills, carrying bundles. In a village below, one of them sits by a well telling a family the good news, children leaning close.", chars: [] }
        ],
        comic: { key: "t4w02-comic", label: "Comic page (week opener)", desc: "Six-panel comic page of Stephen's faithful story, gently told.",
          panels: "Six panels. Panel 1 (wide): seven helpers being prayed for by the apostles. Panel 2 (small): Stephen handing bread to a widow. Panel 3 (tall): shadowy accusers pointing at Stephen, whose face glows calmly. Panel 4 (wide): Stephen speaking in the council hall. Panel 5 (tall): Stephen kneeling, looking up at a sky opened with light, crowd only in silhouette. Panel 6 (wide): believers walking out along many roads to share the good news.", chars: ["stephen", "philip", "peter"] }
      },

      /* ───────────────────────── WEEK 3 — PHILIP AND THE ETHIOPIAN ───────────────────────── */
      { n: 3, title: "Philip and the Ethiopian", passage: "Acts 8:4–8, 26–40", verse: "Acts 8:35",
        outline: [
          "Mon 🎭 \"Go south\" — an angel sends Philip to a desert road; he runs to a chariot (Acts 8:26–31).",
          "Tue Reading Isaiah 53 together; Philip tells the good news about Jesus (Acts 8:32–35).",
          "Wed 🎭 \"Look, here's water!\" — the Ethiopian is baptised and goes on his way rejoicing (Acts 8:36–39).",
          "Thu Being ready to share · Challenge: ask Jesus who your \"chariot\" is."
        ],
        chars: ["philip", "ethiopian"],
        cover: { key: "t4w03-cover", label: "Week cover", desc: "A lone chariot on a long desert road, with Philip running toward it across the sand.", shot: "epic wide",
          scene: "A long empty road winds through a vast desert of dunes and rocky hills. A covered chariot pulled by two horses rolls along it, and far behind, Philip runs across the sand toward it, cloak flying, under a huge bright sky.", chars: ["philip"] },
        scenes: [
          { key: "t4w03d1-a", label: "Mon · story — \"Go south\"", desc: "Philip on a hill path, listening as an angel of light points him toward the desert road.", shot: "wide, light rays",
            scene: "On a rocky hill path, Philip stops and shields his eyes as a tall radiant angel made of soft light points toward a road far below, winding south into the desert. Wind tugs at Philip's cloak and staff.", chars: ["philip"] },
          { key: "t4w03d1-b", label: "Mon · role-play card — Philip runs", desc: "Philip running alongside the chariot while the official reads a scroll inside.", shot: "medium, speed lines",
            scene: "Philip runs alongside a rolling chariot, puffing, dust kicking up from his sandals, speed lines streaking behind. Inside under a canopy, the Ethiopian official sits reading aloud from an unrolled scroll, a driver at the reins in front.", chars: ["philip", "ethiopian"] },
          { key: "t4w03d2-a", label: "Tue · story — reading Isaiah together", desc: "Philip and the Ethiopian official sitting side by side in the chariot, looking at the scroll together.", shot: "medium, three-quarter",
            scene: "Philip and the Ethiopian official sit shoulder to shoulder under the chariot's shady canopy, the long scroll stretched across their knees. Philip points at a line while the official leans in, eyes wide with curiosity. Desert hills drift past.", chars: ["philip", "ethiopian"] },
          { key: "t4w03d2-b", label: "Tue · the good news — like a lamb", desc: "A gentle lamb standing quietly on a hillside in soft light, pointing to Jesus as the Lamb in Isaiah 53.", shot: "close-up, soft light",
            scene: "A single small lamb stands quietly on a sunlit rocky hillside, head slightly bowed, calm and gentle. Soft beams of light fall around it, and far behind, a faint hill with the outline of a city wall sits in mist.", chars: [] },
          { key: "t4w03d3-a", label: "Wed · story — \"Look, here's water!\"", desc: "The official pointing excitedly from the chariot at a pool of water beside the road.", shot: "wide",
            scene: "The Ethiopian official stands up in the stopped chariot, pointing excitedly toward a small pool of water shining among palms beside the desert road. Philip turns to look, smiling, and the driver holds the horses steady.", chars: ["philip", "ethiopian"] },
          { key: "t4w03d3-b", label: "Wed · role-play card — baptised and rejoicing", desc: "Philip baptising the Ethiopian official in the shallow pool, both joyful.", shot: "medium, splashing light",
            scene: "Standing waist-deep in a clear desert pool, Philip lifts the Ethiopian official up out of the water. The official's head is thrown back in joy, water streaming and sparkling in the sunlight; the chariot waits on the bank.", chars: ["philip", "ethiopian"] },
          { key: "t4w03d4-a", label: "Thu · going on his way rejoicing", desc: "The chariot rolling away south toward the horizon, the official standing and lifting his hands in joy.", shot: "wide, from behind",
            scene: "Seen from behind, the chariot rolls away down the long road toward the southern horizon. The official stands in it with both arms raised in joy, the scroll held high in one hand, and the sun blazes ahead.", chars: ["ethiopian"] },
          { key: "t4w03d4-b", label: "Thu · live it — who is your \"chariot\"?", desc: "A Kiwi kid at the school gate noticing a new student sitting alone, about to walk over.", shot: "medium wide",
            setting: GR.school,
            scene: "At the school gate in the morning, a kid with a backpack pauses and looks toward a new student sitting alone on a bench, holding a book. Other kids rush past; the first kid takes a step toward the bench with a friendly smile.", chars: [] }
        ],
        comic: { key: "t4w03-comic", label: "Comic page (week opener)", desc: "Six-panel comic page of Philip and the Ethiopian official.",
          panels: "Six panels. Panel 1 (wide): an angel of light pointing Philip toward a desert road. Panel 2 (small): a chariot rolling over the dunes. Panel 3 (tall): Philip running beside the chariot. Panel 4 (wide): the two sitting together over an unrolled scroll. Panel 5 (small): the official pointing at a pool of water. Panel 6 (wide): the chariot driving away into the sunrise, the official's arms raised in joy.", chars: ["philip", "ethiopian"] }
      },

      /* ───────────────────────── WEEK 4 — SAUL BECOMES PAUL ───────────────────────── */
      { n: 4, title: "Saul Becomes Paul (and Ananias Says Yes)", passage: "Acts 9:1–31; Galatians 2:20", verse: "Galatians 2:20",
        outline: [
          "Mon 🎭 The light on the Damascus road — \"Saul, Saul, why do you persecute me?\" (Acts 9:1–9).",
          "Tue Ananias is afraid but obeys (Acts 9:10–16).",
          "Wed 🎭 \"Brother Saul\" — sight restored, baptised, welcomed (Acts 9:17–19).",
          "Thu Saul preaches Jesus; escape over the wall; Barnabas welcomes the new believer (Acts 9:20–31)."
        ],
        chars: ["paul", "ananias", "barnabas", "peter"],
        cover: { key: "t4w04-cover", label: "Week cover", desc: "A blinding light blazing from the sky over a road, a man fallen to the ground, his companions shielding their eyes.", shot: "epic wide, light rays",
          scene: "On a dusty road to Damascus at midday, a blinding column of light blazes down from the sky. Saul lies flat on the ground in the centre, shielding his face, while his travelling companions stagger back and their horses rear in silhouette.", chars: ["paul"] },
        scenes: [
          { key: "t4w04d1-a", label: "Mon · story — Saul sets out", desc: "Saul marching out of Jerusalem's gate with soldiers, holding official letters, his face hard.", shot: "low-angle",
            scene: "Saul strides out through a great stone city gate, jaw set and eyes hard, gripping a sealed letter-scroll. Behind him follows a small band of armed temple guards in silhouette, and the long road to Damascus stretches ahead.", chars: ["paul"] },
          { key: "t4w04d1-b", label: "Mon · role-play card — the light", desc: "Saul on his knees on the road, arm over his eyes, as rays of light pour down around him.", shot: "medium, dramatic light",
            scene: "Saul kneels in the dust of the road with one arm thrown over his eyes, his cloak spread around him. Brilliant rays pour down from above, his shadow black and sharp behind him, and his companions stare around, seeing no one.", chars: ["paul"] },
          { key: "t4w04d2-a", label: "Tue · story — Ananias hears the Lord", desc: "Ananias at home in Damascus, praying by a window, startled and afraid as light fills the room.", shot: "medium, interior",
            scene: "In a small Damascus house at night, Ananias kneels by a window, startled, one hand at his chest and his face worried. A soft glow of heavenly light fills the room around him while the city sleeps in darkness outside.", chars: ["ananias"] },
          { key: "t4w04d2-b", label: "Tue · obeying while afraid", desc: "Ananias walking nervously down Straight Street at dawn toward the house where Saul is staying.", shot: "wide, long street",
            scene: "At dawn, Ananias walks alone down a long, straight colonnaded street in Damascus, pulling his cloak tight, glancing ahead nervously. Shopkeepers open shutters, and at the far end a doorway stands half open in soft light.", chars: ["ananias"] },
          { key: "t4w04d3-a", label: "Wed · story — \"Brother Saul\"", desc: "Ananias gently laying his hands on the blind Saul, who sits on a bed in a dim room.", shot: "medium close, warm",
            scene: "In a dim room lit by one window, the blind Saul sits on the edge of a bed, thin and tired. Ananias stands before him and gently lays both hands on his head, his face kind; light begins to gather around them both.", chars: ["paul", "ananias"] },
          { key: "t4w04d3-b", label: "Wed · role-play card — scales fall, sight returns", desc: "Close-up of Saul's eyes opening wide, light flooding in.", shot: "close-up",
            scene: "A dramatic close-up of Saul's face as his eyes open wide for the first time in three days, light flooding into them. Flakes like fish scales drift away from his eyes, and his expression is pure astonishment and wonder.", chars: ["paul"] },
          { key: "t4w04d4-a", label: "Thu · escape over the wall", desc: "Believers lowering Saul in a large basket down the city wall at night.", shot: "wide, night",
            scene: "At night, a large rope basket is lowered down the high stone wall of Damascus from a window. Saul sits inside, holding tight, while friends above carefully let out the ropes. Torches of watchmen glow far away on the gate towers.", chars: ["paul"] },
          { key: "t4w04d4-b", label: "Thu · Barnabas welcomes him", desc: "In Jerusalem, Barnabas putting his arm around Saul and bringing him to wary apostles.", shot: "medium wide",
            scene: "In a Jerusalem courtyard, Barnabas walks forward with his big arm around Saul's shoulders, smiling broadly. Ahead, Peter and a few apostles stand cautiously with folded arms, beginning to soften as Barnabas speaks up for him.", chars: ["barnabas", "paul", "peter"] }
        ],
        comic: { key: "t4w04-comic", label: "Comic page (week opener)", desc: "Six-panel comic page of Saul's turnaround and Ananias's brave yes.",
          panels: "Six panels. Panel 1 (wide): Saul marching out of Jerusalem with guards. Panel 2 (tall): a blinding light on the road and Saul falling to the ground. Panel 3 (small): Saul led by the hand, blind. Panel 4 (small): Ananias praying, startled by light. Panel 5 (wide): Ananias laying hands on Saul's head. Panel 6 (wide): Barnabas with his arm around Saul, bringing him to the apostles.", chars: ["paul", "ananias", "barnabas"] }
      },

      /* ───────────────────────── WEEK 5 — MIDNIGHT SONGS ───────────────────────── */
      { n: 5, title: "Midnight Songs in Prison", passage: "Acts 16:11–40; Philippians 4:4–7", verse: "Acts 16:31",
        outline: [
          "Mon 🎭 Lydia by the river — the Lord opens her heart; her household is baptised (Acts 16:11–15).",
          "Tue Arrested, beaten and locked in the stocks (Acts 16:16–24; harm implied only).",
          "Wed 🎭 Earthquake at midnight — \"Believe in the Lord Jesus, and you will be saved\" (Acts 16:25–34).",
          "Thu Dignity and release; back to Lydia's house · Joy in hard times (Philippians 4:4–7)."
        ],
        chars: ["paul", "silas", "lydia", "jailer"],
        cover: { key: "t4w05-cover", label: "Week cover", desc: "Paul and Silas singing in a dark prison cell at midnight, moonlight falling through the bars.", shot: "wide, interior, moonlight",
          setting: GR.philippi,
          scene: "Deep in a stone prison at midnight, Paul and Silas sit with their feet locked in heavy wooden stocks, heads tilted back, singing. A single beam of moonlight falls through a barred window onto them, and other prisoners listen from the shadows.", chars: ["paul", "silas"] },
        scenes: [
          { key: "t4w05d1-a", label: "Mon · story — the place of prayer", desc: "Paul and Silas finding women gathered to pray by a river outside the city gate.", shot: "wide, morning",
            setting: GR.philippi,
            scene: "On a grassy riverbank outside the city gate, a small group of women sits in a circle praying beside reeds and slow water. Paul and Silas walk up the path and sit down with them, the stone gate and red roofs behind.", chars: ["paul", "silas", "lydia"] },
          { key: "t4w05d1-b", label: "Mon · role-play card — Lydia's open heart and home", desc: "Lydia welcoming Paul and Silas into her home, bolts of dyed cloth stacked around.", shot: "medium, warm interior",
            setting: GR.philippi,
            scene: "In a spacious house lined with shelves of richly dyed cloth, Lydia stands in the doorway with arms open, smiling, welcoming Paul and Silas inside. Her household gathers behind her, and lamplight glows on the folded fabrics.", chars: ["lydia", "paul", "silas"] },
          { key: "t4w05d2-a", label: "Tue · story — dragged to the forum", desc: "Paul and Silas being dragged before the magistrates by angry men while a crowd shouts.", shot: "wide, low-angle",
            setting: GR.philippi,
            scene: "In the stone forum, angry slave-owners haul Paul and Silas by the arms toward a raised platform where two Roman magistrates stand in togas. A shouting crowd surges around them, fists raised, all in heavy shadow beneath stormy clouds.", chars: ["paul", "silas"] },
          { key: "t4w05d2-b", label: "Tue · locked in the inner cell", desc: "The jailer slamming a heavy door on the dark inner cell, keys in hand.", shot: "medium, silhouette",
            setting: GR.philippi,
            scene: "The burly jailer pulls shut a heavy iron-banded wooden door on the inner prison, keys jangling at his belt, his oil lamp throwing a hard light across the stone corridor. Through the closing gap, Paul and Silas sit in deep darkness.", chars: ["jailer", "paul", "silas"] },
          { key: "t4w05d3-a", label: "Wed · story — the earthquake", desc: "The prison shaking at midnight, doors bursting open and chains falling loose.", shot: "wide, speed lines",
            setting: GR.philippi,
            scene: "A violent earthquake shakes the prison at midnight: stone dust pours from the ceiling, cell doors burst open and chains drop loose from the walls, shown with jagged speed lines. Paul and Silas look up in the middle of it, calm and amazed.", chars: ["paul", "silas"] },
          { key: "t4w05d3-b", label: "Wed · role-play card — \"What must I do to be saved?\"", desc: "The trembling jailer kneeling before Paul and Silas with his lamp, asking how to be saved.", shot: "medium, lamp light",
            setting: GR.philippi,
            scene: "The jailer kneels trembling on the dusty stone floor before Paul and Silas, his oil lamp set down beside him lighting their faces from below. Paul leans forward with an open hand, gently answering him, and Silas smiles.", chars: ["jailer", "paul", "silas"] },
          { key: "t4w05d4-a", label: "Thu · the jailer's family", desc: "The jailer washing Paul and Silas's wounds and then sharing a meal with them and his family at night.", shot: "medium wide, warm",
            setting: GR.philippi,
            scene: "In the jailer's home late at night, the whole family sits around a low table sharing bread with Paul and Silas, everyone smiling. The jailer, sleeves rolled up, sets down a water bowl and cloth; children peek from behind their mother.", chars: ["jailer", "paul", "silas"] },
          { key: "t4w05d4-b", label: "Thu · joy in hard times", desc: "Paul and Silas walking out of the prison gate at dawn, heads held high, toward Lydia's house.", shot: "wide, dawn",
            setting: GR.philippi,
            scene: "At sunrise, Paul and Silas walk out through the open prison gate with heads held high, the embarrassed magistrates watching from the side. Down the street, Lydia and the believers wait at her doorway, waving joyfully in the golden light.", chars: ["paul", "silas", "lydia"] }
        ],
        comic: { key: "t4w05-comic", label: "Comic page (week opener)", desc: "Six-panel comic page of Paul and Silas in Philippi.",
          setting: GR.philippi,
          panels: "Six panels. Panel 1 (wide): Lydia and women praying by a river outside the city gate. Panel 2 (small): Lydia's welcoming open door. Panel 3 (tall): Paul and Silas dragged before the magistrates. Panel 4 (wide): the two singing in the stocks at midnight in a beam of moonlight. Panel 5 (small): chains falling loose as the earthquake strikes. Panel 6 (wide): the jailer's family sharing a meal with Paul and Silas.", chars: ["paul", "silas", "lydia", "jailer"] }
      },

      /* ───────────────────────── WEEK 6 — ORDINARY HEROES ───────────────────────── */
      { n: 6, title: "Ordinary Heroes Who Served", passage: "Acts 16:1–3; 18:1–4, 24–28; 4:36–37; 2 Timothy 1:5", verse: "Colossians 3:23",
        outline: [
          "Mon 🎭 Tentmakers in Corinth — Priscilla, Aquila and Paul work and share Jesus together (Acts 18:1–4).",
          "Tue Timothy: a faith first lived by his grandmother Lois and mother Eunice (2 Timothy 1:5; Acts 16:1–3).",
          "Wed 🎭 Priscilla and Aquila invite Apollos home and explain the way of God more fully (Acts 18:24–28).",
          "Thu Barnabas the encourager (Acts 4:36–37) · Challenge: encourage one person by name."
        ],
        chars: ["paul", "priscilla", "aquila", "timothy", "apollos", "barnabas"],
        cover: { key: "t4w06-cover", label: "Week cover", desc: "Priscilla, Aquila and Paul stitching a big tent together in a busy Corinth workshop.", shot: "wide, interior, sunbeams",
          setting: GR.corinth,
          scene: "In a busy open-fronted workshop in Corinth, Priscilla, Aquila and Paul sit on low stools stitching a huge sheet of goat-hair tent cloth spread across their knees. Sunbeams slant through the awning, and the market street bustles behind them.", chars: ["priscilla", "aquila", "paul"] },
        scenes: [
          { key: "t4w06d1-a", label: "Mon · story — Paul meets the tentmakers", desc: "Paul arriving at Priscilla and Aquila's workshop, Aquila reaching out to shake his hand.", shot: "medium wide, street",
            setting: GR.corinth,
            scene: "Dusty from travel, Paul stops at a tentmaker's stall in a crowded Corinth street. Aquila steps out from among hanging tent cloths to clasp his hand in welcome, and Priscilla looks up from her stitching with a bright smile.", chars: ["paul", "aquila", "priscilla"] },
          { key: "t4w06d1-b", label: "Mon · role-play card — working and sharing", desc: "The three working on tents while customers listen to Paul talk about Jesus.", shot: "medium, three-quarter",
            setting: GR.corinth,
            scene: "Paul pulls a thick needle through tough tent cloth while talking to two curious customers leaning on the workbench. Aquila hammers a leather strap and Priscilla measures cord, both smiling as they listen. Tools and coils of rope hang everywhere.", chars: ["paul", "aquila", "priscilla"] },
          { key: "t4w06d2-a", label: "Tue · story — faith in the family", desc: "Young boy Timothy reading a scroll with his grandmother Lois and mother Eunice in their home.", shot: "medium, warm lamplight",
            scene: "In a simple stone home in Lystra, a boy of about eight sits between his grey-haired grandmother Lois and his mother Eunice, all three bent over an unrolled scroll on a low table. Lamplight glows on their faces as Lois points to a line.", chars: [] },
          { key: "t4w06d2-b", label: "Tue · Paul invites Timothy", desc: "Paul putting a hand on young Timothy's shoulder, inviting him to join the journey, as his mother watches proudly.", shot: "medium wide, outdoors",
            scene: "Outside a small hill town, Paul rests a hand on the shoulder of the young man Timothy, who looks shy but ready, a satchel of scrolls slung over his shoulder. His mother Eunice watches proudly from a doorway, and the road winds away.", chars: ["paul", "timothy"] },
          { key: "t4w06d3-a", label: "Wed · story — Apollos speaks boldly", desc: "Apollos teaching powerfully in the synagogue at Ephesus while Priscilla and Aquila listen at the back.", shot: "wide, interior",
            scene: "In a stone synagogue at Ephesus, Apollos stands with a scroll, speaking with passionate gestures to an attentive crowd on benches. At the back, Priscilla and Aquila listen closely, glancing at each other thoughtfully. Light falls from high windows.", chars: ["apollos", "priscilla", "aquila"] },
          { key: "t4w06d3-b", label: "Wed · role-play card — explaining more", desc: "Priscilla and Aquila sitting with Apollos at their kitchen table, kindly explaining more about Jesus.", shot: "medium, warm interior",
            scene: "Around a low table in a cosy home with lamps and bread, Priscilla leans forward explaining something with a kind smile while Aquila unrolls a scroll. Apollos sits with them, listening eagerly, his hand on his chin, his face lighting up.", chars: ["priscilla", "aquila", "apollos"] },
          { key: "t4w06d4-a", label: "Thu · Barnabas the encourager", desc: "Barnabas laying a bag of money at the apostles' feet after selling his field, to help people in need.", shot: "medium, low-angle",
            scene: "In a sunny Jerusalem courtyard, Barnabas kneels and places a heavy cloth bag of coins at the feet of the apostles, smiling. Behind him, poor families watch with grateful faces, and a child tugs at his cloak as he turns to grin at her.", chars: ["barnabas"] },
          { key: "t4w06d4-b", label: "Thu · live it — encourage by name", desc: "A kid on a school court high-fiving a teammate who just missed a shot, cheering them on.", shot: "medium, action",
            setting: GR.school,
            scene: "On an outdoor school netball court, a girl jogs over to a disappointed teammate who has just missed a shot and gives her an enthusiastic high five, grinning. The teammate starts to smile again; other players run past in bibs.", chars: [] }
        ],
        comic: { key: "t4w06-comic", label: "Comic page (week opener)", desc: "Six-panel comic page of ordinary people serving Jesus.",
          panels: "Six panels. Panel 1 (wide): Paul, Priscilla and Aquila stitching tents in a Corinth workshop. Panel 2 (small): a needle pulling thread through thick cloth. Panel 3 (tall): young Timothy reading a scroll with his grandmother and mother. Panel 4 (wide): Apollos preaching while Priscilla and Aquila listen. Panel 5 (small): the three around a kitchen table with a scroll. Panel 6 (wide): Barnabas laying a bag of coins at the apostles' feet.", chars: ["paul", "priscilla", "aquila", "timothy", "apollos", "barnabas"] }
      },

      /* ───────────────────────── WEEK 7 — STORM, SHIPWRECK AND ROME ───────────────────────── */
      { n: 7, title: "Storm, Shipwreck and Rome", passage: "Acts 27–28; Philippians 1:12–14", verse: "Acts 27:25",
        outline: [
          "Mon 🎭 The storm, and the angel's message: \"Keep up your courage\" (Acts 27:13–26).",
          "Tue Bread before dawn; shipwreck — and all 276 people reach land safely (Acts 27:27–44).",
          "Wed 🎭 The island of Malta: a fire in the rain, a snake, healing and kindness (Acts 28:1–10).",
          "Thu Rome — still preaching under guard, boldly and without hindrance (Acts 28:16–31; Philippians 1:12–14)."
        ],
        chars: ["paul"],
        cover: { key: "t4w07-cover", label: "Week cover", desc: "A Roman grain ship tossed by a huge storm at night, lightning cracking above.", shot: "epic wide, storm",
          setting: GR.sea,
          scene: "A great wooden Roman grain ship climbs a towering wave in a howling night storm, its torn sail flapping and rigging straining. Lightning cracks across black clouds, spray explodes over the bow, and tiny figures cling to the deck.", chars: [] },
        scenes: [
          { key: "t4w07d1-a", label: "Mon · story — the storm", desc: "Sailors throwing cargo overboard as waves crash over the deck in the storm.", shot: "medium wide, speed lines",
            setting: GR.sea,
            scene: "On the heaving deck in driving rain, sailors heave sacks of grain and tackle over the side as waves crash across the planks. Ropes whip loose, the mast groans, and Paul braces against the rail helping a frightened young sailor.", chars: ["paul"] },
          { key: "t4w07d1-b", label: "Mon · role-play card — \"Keep up your courage\"", desc: "Paul standing on the tilting deck calmly encouraging the soaked, frightened crew and soldiers.", shot: "low-angle, dramatic",
            setting: GR.sea,
            scene: "Paul stands upright on the tilting deck, one hand raised, speaking with calm confidence to a huddle of soaked, exhausted sailors and soldiers. Behind him a break in the storm clouds lets through a single bright shaft of light.", chars: ["paul"] },
          { key: "t4w07d2-a", label: "Tue · story — bread before dawn", desc: "Paul breaking bread and giving thanks on deck before dawn while everyone watches and begins to eat.", shot: "medium, lantern light",
            setting: GR.sea,
            scene: "In the grey hour before dawn, Paul stands on the wet deck holding up a round loaf, giving thanks to God, then breaking it. Around him weary sailors, soldiers and prisoners sit on coils of rope and begin to eat, faces lit by a swinging lantern.", chars: ["paul"] },
          { key: "t4w07d2-b", label: "Tue · everyone safe", desc: "The ship stuck on a sandbar breaking up, while everyone swims or floats on planks to the beach.", shot: "epic wide, morning",
            setting: GR.malta,
            scene: "In stormy morning light, the ship's bow is stuck fast on a sandbar while the stern breaks apart in the surf. Dozens of people swim or cling to planks and drift toward a rocky beach, where the first survivors help others ashore.", chars: [] },
          { key: "t4w07d3-a", label: "Wed · story — a fire in the rain", desc: "Islanders building a big fire on the beach for the shivering survivors as rain falls.", shot: "wide, firelight",
            setting: GR.malta,
            scene: "On the cold rainy beach, kind islanders build a big crackling bonfire as soaked, shivering survivors crowd round it wrapped in blankets. Paul bends to add an armful of sticks to the flames, rain streaking through the firelight.", chars: ["paul"] },
          { key: "t4w07d3-b", label: "Wed · role-play card — the snake", desc: "Paul calmly shaking a snake off his hand into the fire while islanders stare in shock — he is unharmed.", shot: "medium close, firelight",
            setting: GR.malta,
            scene: "By the bonfire, Paul calmly flicks his hand and a small snake falls away into the flames. He is completely unharmed. Islanders around him freeze with wide eyes and open mouths, firelight flickering on their astonished faces.", chars: ["paul"] },
          { key: "t4w07d4-a", label: "Thu · story — Rome under guard", desc: "Paul in his rented house in Rome, chained to a soldier, welcoming visitors and teaching about Jesus.", shot: "medium wide, interior",
            setting: GR.rome,
            scene: "In a plain rented room in Rome, Paul sits on a bench with a light chain running from his wrist to a Roman soldier beside him. He leans forward teaching a group of visitors, scrolls open, while the soldier listens despite himself.", chars: ["paul"] },
          { key: "t4w07d4-b", label: "Thu · the good news keeps spreading", desc: "Paul dictating a letter by lamplight while a friend writes, a guard dozing, the city of Rome beyond the window.", shot: "medium, lamp light",
            setting: GR.rome,
            scene: "By lamplight Paul paces his room, speaking, while a friend sits at a small table writing on a sheet of papyrus. A Roman guard leans against the doorframe listening closely, and through the window the rooftops and temples of Rome glow at dusk.", chars: ["paul"] }
        ],
        comic: { key: "t4w07-comic", label: "Comic page (week opener)", desc: "Six-panel comic page of Paul's storm, shipwreck and arrival in Rome.",
          setting: GR.sea,
          panels: "Six panels. Panel 1 (wide): the grain ship tossed by a night storm. Panel 2 (small): sailors throwing cargo overboard. Panel 3 (tall): Paul on deck encouraging the crew under a single shaft of light. Panel 4 (wide): survivors swimming and floating on planks to a rocky beach. Panel 5 (small): Paul shaking a snake into a bonfire, unharmed. Panel 6 (wide): Paul teaching visitors in a room in Rome beside a Roman guard.", chars: ["paul"] }
      },

      /* ───────────────────────── WEEK 8 — POLYCARP ─────────────────────────
         Fact-check (Oct 2026), from the Martyrdom of Polycarp (a letter from the church in Smyrna):
         - Ch.7: pursuers came in the evening with horsemen, found him in an upper room of a farmhouse;
           he could have escaped but said "The will of God be done"; he ordered food and drink for them
           and asked for an hour to pray undisturbed (he then prayed for two hours). Many regretted
           coming against "so godly and venerable an old man".
         - Ch.8: set on a donkey and taken into the city; the police captain (eirenarch) Herod and his
           father Nicetes met him in a carriage and urged him to say "Lord Caesar" and sacrifice.
         - Ch.9: entering the stadium a voice from heaven: "Be strong, and show yourself a man";
           before the proconsul: "Eighty and six years have I served Him, and He never did me any
           injury: how then can I blaspheme my King and my Saviour?"  Ch.10: "I am a Christian."
         - Date c. AD 155–156 (debated). That Polycarp knew the apostle John is TRADITION (Irenaeus) —
           scene t4w08d2-a is labelled as tradition. His death is never depicted.
         Sources: https://www.newadvent.org/fathers/0102.htm
                  https://en.wikipedia.org/wiki/Martyrdom_of_Polycarp */
      { n: 8, title: "Polycarp: \"Eighty-Six Years I Have Served Him\"", passage: "Martyrdom of Polycarp (c. AD 155); Revelation 2:8–11", verse: "Revelation 2:10",
        outline: [
          "Mon 🎭 \"An hour to pray\" — soldiers arrive at the farmhouse; Polycarp feeds them, then prays (documented, Martyrdom 7).",
          "Tue Who were the first Christians after the apostles? Why Roman authorities persecuted Christians (refusing to call Caesar \"Lord\").",
          "Wed 🎭 The stadium: \"Eighty-six years I have served him… how can I speak evil of my King who saved me?\" (documented; end implied only).",
          "Thu The church in Smyrna remembers him; Christians still persecuted today — praying for them · Challenge: loyalty in small things."
        ],
        chars: ["polycarp"],
        cover: { key: "t4w08-cover", label: "Week cover", desc: "Old Polycarp standing calmly in a farmhouse doorway at dusk as horsemen ride up the hill.", shot: "wide, dusk silhouette",
          setting: SMYRNA,
          scene: "At dusk on a hillside farm above Smyrna, the white-haired old bishop Polycarp stands calmly in the lit doorway of a stone farmhouse. Below, a line of horsemen and armed police ride up the track in dark silhouette against the fading sky.", chars: ["polycarp"] },
        scenes: [
          { key: "t4w08d1-a", label: "Mon · story — they come for him", desc: "Polycarp coming down the stairs of the farmhouse to greet the soldiers, not running away.", shot: "medium, low-angle, lamp light",
            setting: SMYRNA,
            scene: "Inside a farmhouse at evening, the old bishop Polycarp walks slowly down a wooden stair from an upper room, an oil lamp in hand, calm and unafraid. At the bottom, armed police and soldiers crowd the doorway, surprised by his gentle face.", chars: ["polycarp"] },
          { key: "t4w08d1-b", label: "Mon · role-play card — food for his captors", desc: "Polycarp serving bread and drink to the soldiers at a table, then stepping aside to pray.", shot: "medium wide, warm interior",
            setting: SMYRNA,
            scene: "Tired soldiers sit around a long farmhouse table eating bread, olives and drinking from cups that the old man Polycarp has set out for them. In the background Polycarp stands by a window with his hands lifted in prayer, lamplight on his white beard.", chars: ["polycarp"] },
          { key: "t4w08d2-a", label: "Tue · after the apostles (tradition: Polycarp learned from John)", desc: "A young Polycarp listening to a very old apostle teaching — the tradition that Polycarp knew John.", shot: "medium, soft light",
            setting: SMYRNA,
            scene: "In a sunlit courtyard with a fig tree, a very old white-bearded apostle sits on a bench teaching from memory, his hands gently raised. A young man with dark hair, the young Polycarp, sits at his feet listening intently, a wax tablet on his knee.", chars: [] },
          { key: "t4w08d2-b", label: "Tue · why Christians were persecuted", desc: "Townspeople burning incense before a statue of the Roman emperor while a Christian family quietly refuses.", shot: "wide, forum",
            setting: SMYRNA,
            scene: "In the city forum, townspeople line up to drop incense on a small altar fire before a towering marble statue of the Roman emperor, smoke curling up. At the edge, a Christian family stands quietly apart, holding hands, while officials glare at them.", chars: [] },
          { key: "t4w08d3-a", label: "Wed · story — into the city on a donkey", desc: "Polycarp riding a donkey into Smyrna at dawn, the police captain's carriage alongside.", shot: "wide, dawn",
            setting: SMYRNA,
            scene: "At dawn, the old man Polycarp rides slowly into the city on a small donkey, led by a soldier. Beside him a carriage rolls, and the police captain Herod leans out urging him. Polycarp looks ahead calmly toward the stadium rising above the rooftops.", chars: ["polycarp"] },
          { key: "t4w08d3-b", label: "Wed · role-play card — \"How can I speak evil of my King?\"", desc: "Polycarp standing alone in the stadium before the Roman proconsul, calm and faithful; the crowd only silhouettes.", shot: "epic wide, low-angle",
            setting: SMYRNA,
            scene: "In the centre of a vast stone stadium, the small, white-haired figure of Polycarp stands upright before the Roman proconsul seated on a raised platform. The huge crowd in the tiers is only dark silhouettes; a single beam of light falls on Polycarp.", chars: ["polycarp"] },
          { key: "t4w08d4-a", label: "Thu · the church remembers", desc: "Believers in Smyrna gathered by lamplight, writing a letter to tell other churches about Polycarp's faithfulness.", shot: "medium, lamplight",
            setting: SMYRNA,
            scene: "In a small room at night, a group of believers in Smyrna sit close together around a lamp. One writes carefully on a long sheet of papyrus while others lean in, some wiping tears, some quietly smiling; a plain wooden cross hangs on the wall.", chars: [] },
          { key: "t4w08d4-b", label: "Thu · live it — praying for persecuted Christians", desc: "Kiwi kids in a circle in class, praying with a globe and a candle in the middle.", shot: "medium wide, warm",
            setting: GR.school,
            scene: "In a bright classroom, a circle of kids sits on the mat with heads bowed and hands open, praying. In the middle of the circle sits a desk globe and a small battery candle glowing softly; sunlight falls through the windows onto their faces.", chars: [] }
        ],
        comic: { key: "t4w08-comic", label: "Comic page (week opener)", desc: "Six-panel comic page of Polycarp's faithful courage, ending implied only.",
          setting: SMYRNA,
          panels: "Six panels. Panel 1 (wide): horsemen riding up to a hillside farmhouse at dusk. Panel 2 (small): Polycarp coming down the stair with a lamp. Panel 3 (tall): soldiers eating at a table while Polycarp prays by the window. Panel 4 (wide): Polycarp riding a donkey into the city at dawn. Panel 5 (small): his calm, wrinkled face lit by a beam of light. Panel 6 (wide): Polycarp standing alone before the proconsul in the great stadium, the crowd in silhouette.", chars: ["polycarp"] }
      },

      /* ───────────────────────── WEEK 9 — WILLIAM TYNDALE ─────────────────────────
         Fact-check (Oct 2026):
         - Tutor/chaplain to Sir John Walsh's family at Little Sodbury, Gloucestershire (c. 1521);
           the ploughboy words are REPORTED by John Foxe (heated argument with a learned man):
           "...I will cause the boy that driveth the plough to know more of the Scriptures than thou dost."
         - Left England spring 1524 (Hamburg, likely Wittenberg); 1525 Cologne printing interrupted;
           first complete printed English New Testament at Worms, 1526 (printer Peter Schöffer).
         - Copies smuggled into England "hidden in bales of cloth" (Museum of the Bible); also between
           other goods/books. Bishop Tunstall bought up copies and had them burned (Oct 1526).
         - Betrayed by Henry Phillips in Antwerp, 1535; imprisoned at Vilvoorde castle; his one surviving
           letter asks for a warmer cap and coat, a lamp in the evenings, and his Hebrew Bible, grammar and
           dictionary. Executed Oct 1536 (never depicted); reported last words:
           "Lord! Open the King of England's eyes."
         Sources: https://en.wikipedia.org/wiki/William_Tyndale
                  https://www.museumofthebible.org/book-minute/tyndale-bible
                  https://christianhistoryinstitute.org/magazine/article/tyndale-archives-letter-from-prison */
      { n: 9, title: "William Tyndale: The Bible in Our Own Language", passage: "Church history, 1494–1536; Psalm 119:105", verse: "Psalm 119:105",
        outline: [
          "Mon 🎭 The ploughboy promise — Tyndale at Little Sodbury (words reported by John Foxe).",
          "Tue Escape to Europe; translating from Greek; printing the first English New Testament (Worms, 1526).",
          "Wed 🎭 Smuggling Bibles into England hidden in bales of cloth; bishops buy and burn copies — but more keep coming.",
          "Thu Prison at Vilvoorde, a lamp and his Hebrew Bible; his prayer: \"Lord, open the King of England's eyes\" · Challenge: read one chapter of Luke this week."
        ],
        chars: ["tyndale"],
        cover: { key: "t4w09-cover", label: "Week cover", desc: "Tyndale beside a wooden printing press by candlelight, holding up a freshly printed page.", shot: "medium wide, candlelight",
          setting: TUDOR,
          scene: "In a cramped print shop at night, William Tyndale stands beside a heavy wooden printing press, holding up a freshly printed page to the candlelight with quiet joy. Stacks of drying sheets hang on lines overhead and a printer pulls the press lever behind him.", chars: ["tyndale"] },
        scenes: [
          { key: "t4w09d1-a", label: "Mon · story — the ploughboy", desc: "A farm boy guiding a horse-drawn plough across a Gloucestershire field at dawn.", shot: "epic wide, dawn",
            setting: TUDOR,
            scene: "At dawn on a rolling Gloucestershire hillside, a farm boy in a rough smock and cap guides a wooden plough pulled by two heavy horses, a long furrow behind him. Mist lies in the valley, and a stone manor house stands among trees in the distance.", chars: [] },
          { key: "t4w09d1-b", label: "Mon · role-play card — the promise", desc: "Tyndale at a manor dinner table standing up to a learned churchman, making his famous promise.", shot: "medium, candlelit interior",
            setting: TUDOR,
            scene: "At a long candlelit dinner table in a Tudor manor hall, the young scholar Tyndale rises from his seat, one hand on a small Greek New Testament, speaking with fierce conviction. Across the table a well-fed learned churchman in rich robes leans back, scowling.", chars: ["tyndale"] },
          { key: "t4w09d2-a", label: "Tue · story — escape to Europe", desc: "Tyndale on the deck of a small ship leaving the English coast, cloak pulled tight, looking back.", shot: "wide, grey sea",
            setting: TUDOR,
            scene: "On the deck of a small sailing ship crossing a grey, choppy sea, Tyndale stands at the stern with his black cloak pulled tight, a satchel of books over his shoulder, looking back at the white cliffs of England fading into mist.", chars: ["tyndale"] },
          { key: "t4w09d2-b", label: "Tue · translating and printing", desc: "Tyndale translating late at night at a desk piled with Greek books, by candlelight.", shot: "close-up, candlelight",
            setting: TUDOR,
            scene: "Late at night in a small rented room, Tyndale bends over a desk piled with open Greek books, quill in hand, ink-stained fingers, writing steadily by a single candle. Through the window behind him, the step-gabled rooftops of a German city lie under moonlight.", chars: ["tyndale"] },
          { key: "t4w09d3-a", label: "Wed · story — hidden in bales of cloth", desc: "Merchants in a warehouse secretly tucking small New Testaments inside bales of cloth.", shot: "medium wide, warehouse",
            setting: TUDOR,
            scene: "In a dim Antwerp warehouse lit by one lantern, two merchants glance at the door as they tuck small, thick printed books deep inside rolled bales of woollen cloth. Tyndale holds the lantern, watching; more bales stand ready to be roped and carried to a ship.", chars: ["tyndale"] },
          { key: "t4w09d3-b", label: "Wed · role-play card — the Bible reaches England", desc: "At an English wharf by night, a bale is cut open and a family receives a small New Testament with wonder.", shot: "medium, lantern light",
            setting: TUDOR,
            scene: "On a foggy English wharf at night, a merchant cuts open a bale of cloth and slips out a small New Testament, handing it to a poor family. The father holds it close to the lantern while his children press in, eyes wide with wonder.", chars: [] },
          { key: "t4w09d4-a", label: "Thu · prison at Vilvoorde", desc: "Tyndale in a cold castle cell, wrapped in a cloak, reading his Hebrew Bible by a small lamp, light at the window.", shot: "medium, low light",
            setting: TUDOR,
            scene: "In a cold stone cell in Vilvoorde castle, Tyndale sits wrapped in a thick cloak at a rough table, reading his Hebrew Bible by a small oil lamp. Through a narrow barred window high above, a soft beam of daylight falls across the page.", chars: ["tyndale"] },
          { key: "t4w09d4-b", label: "Thu · live it — read Luke this week", desc: "A Kiwi kid reading a Bible in English in bed by lamplight, a smile on their face.", shot: "medium, cosy lamplight",
            setting: "Modern-day Aotearoa New Zealand setting: a child's bedroom in a weatherboard family home, with a bunk bed, a bedside lamp, a rugby poster without writing and a window onto a dark garden. " + KIDS,
            scene: "A kid sits up in bed under a warm bedside lamp, holding a small Bible open on their knees, absorbed in reading and smiling. A sleeping cat curls at their feet, and through the window a few stars shine over the dark garden.", chars: [] }
        ],
        comic: { key: "t4w09-comic", label: "Comic page (week opener)", desc: "Six-panel comic page of William Tyndale getting the Bible into English.",
          setting: TUDOR,
          panels: "Six panels. Panel 1 (wide): a ploughboy and two horses on a misty Gloucestershire hillside. Panel 2 (small): Tyndale rising at a candlelit dinner table, speaking with conviction. Panel 3 (tall): Tyndale on a ship looking back at white cliffs. Panel 4 (wide): a wooden printing press and freshly printed pages hanging to dry. Panel 5 (small): hands tucking a small book into a bale of cloth. Panel 6 (wide): a family on a foggy English wharf holding a New Testament up to a lantern.", chars: ["tyndale"] }
      },

      /* ───────────────────────── WEEK 10 — THE GOSPEL COMES TO AOTEAROA ─────────────────────────
         Fact-check (Oct 2026):
         - Ruatara (Ngāpuhi, c. 22 in 1809): sailed on whaling ships, went to London and was mistreated;
           Samuel Marsden met him aboard the ship Ann (1809) and cared for him; he stayed at Parramatta
           learning wheat-growing, and was first to grow wheat in NZ, at Rangihoua (1812). Successor to
           Te Pahi at Rangihoua pā; he invited missionaries to settle under his protection.
         - The brig Active brought Marsden, missionary families (Kendall, Hall, King) and Māori chiefs
           (incl. Ruatara, Hongi Hika, Korokoro) from Sydney; missionaries arrived 22 Dec 1814.
         - Ruatara prepared about half an acre at Oihi: an enclosure, seats from upturned canoes, and a
           pulpit/reading desk of planks and part of an old canoe covered with black (flax) cloth; a flag
           was flown on a hill. Ruatara, Korokoro and Hongi wore regimental uniforms given by Governor
           Macquarie. Marsden began with the Old Hundredth and preached on Luke 2:10 ("I bring you good
           tidings of great joy"). Ruatara told the people that they would understand by and by and that
           he would explain Marsden's meaning; afterwards 300–400 people performed a haka.
         - Ruatara died in March 1815. No direct Māori written account of the day survives, so images
           show Māori as active hosts and participants, not spectators. Colonial history is complex —
           the teacher should check with local iwi / church resources and review this week's art.
         - Christmas Day images avoid a large flag: depict the people, not the colonial symbol.
         Sources: https://teara.govt.nz/en/biographies/1r19/ruatara
                  https://en.wikipedia.org/wiki/Rangihoua_Bay
                  https://www.nzgeo.com/stories/marsdens-first-christmas/
                  https://liturgy.co.nz/samuel-marsden-christmas-day-1814
                  https://www.evangelical-times.org/christmas-day-1814/ */
      { n: 10, title: "The Gospel Comes to Aotearoa", passage: "Samuel Marsden, Ruatara, Christmas Day 1814, Oihi Bay; Luke 2:10; Matthew 28:19–20", verse: "Matthew 28:19–20",
        outline: [
          "Mon 🎭 Ruatara's invitation — a sick young Ngāpuhi sailor, Marsden's kindness on the Ann, wheat at Rangihoua, and an invitation home.",
          "Tue The voyage of the brig Active and the preparations at Oihi — Ruatara builds the enclosure, seats and pulpit.",
          "Wed 🎭 Christmas Day 1814 — \"I bring you good news of great joy\" (Luke 2:10); Ruatara explains Marsden's words to his people.",
          "Thu Your turn: commissioning (Matthew 28:19–20) and term/year celebration — the final prayer is the students' own words."
        ],
        chars: ["ruatara", "marsden"],
        cover: { key: "t4w10-cover", label: "Week cover", desc: "The brig Active at anchor in the Bay of Islands at dawn, waka paddling out beneath Rangihoua pā.", shot: "epic wide, dawn",
          setting: AOTEAROA,
          scene: "Dawn over the Bay of Islands: the two-masted brig Active rides at anchor in a calm bay, sails furled. Carved waka paddled by strong Ngāpuhi crews glide out to meet it, and above the beach the palisades of Rangihoua pā crown the green headland.", chars: [] },
        scenes: [
          { key: "t4w10d1-a", label: "Mon · story — kindness on the Ann", desc: "Marsden kneeling beside the sick, exhausted young Ruatara on a ship's deck, offering a blanket and water.", shot: "medium, grey sea light",
            setting: "Early 1800s at sea between England and Sydney: the deck of a wooden sailing ship with tall masts, coiled ropes and canvas sails, a grey ocean and sky; sailors in striped shirts and canvas trousers. Māori figures drawn with dignity and accuracy, no caricature.",
            scene: "On the deck of a sailing ship at sea, the young Ngāpuhi man Ruatara sits huddled against a mast, thin and exhausted. Samuel Marsden kneels beside him, wrapping a blanket around his shoulders and offering a cup of water, his face full of concern.", chars: ["ruatara", "marsden"] },
          { key: "t4w10d1-b", label: "Mon · role-play card — wheat and an invitation", desc: "Ruatara standing proudly in his small wheat field at Rangihoua, looking out to sea.", shot: "wide, low sun",
            setting: AOTEAROA,
            scene: "On the slope below Rangihoua pā, Ruatara stands tall in a small field of ripening wheat, holding a sheaf of grain in one hand, his korowai stirring in the wind. He gazes out across the bay toward the open sea, hopeful and determined.", chars: ["ruatara"] },
          { key: "t4w10d2-a", label: "Tue · story — the voyage of the Active", desc: "The brig Active under full sail, with Māori chiefs and missionary families together on deck.", shot: "wide, ocean",
            setting: AOTEAROA,
            scene: "The two-masted brig Active cuts through rolling ocean swells under full sail. On deck, Ruatara and other Ngāpuhi rangatira in cloaks stand at the rail pointing ahead, while missionary families in bonnets and coats and their children look out beside them.", chars: ["ruatara", "marsden"] },
          { key: "t4w10d2-b", label: "Tue · preparing the place", desc: "Ruatara directing his people as they set out upturned waka as seats and build a pulpit from planks and an old canoe.", shot: "wide, busy",
            setting: AOTEAROA,
            scene: "On a grassy flat above Oihi beach, Ruatara directs his people as they drag upturned waka into rows as seats and fit planks onto part of an old canoe to make a pulpit, draping it with a dark woven flax cloth. Children run between the workers.", chars: ["ruatara"] },
          { key: "t4w10d3-a", label: "Wed · story — Christmas Day 1814", desc: "Marsden preaching from the canoe pulpit, Ruatara beside him, a great circle of Ngāpuhi people listening.", shot: "epic wide, morning",
            setting: AOTEAROA,
            scene: "On Christmas morning at Oihi Bay, Marsden stands in the simple canoe-built pulpit with an open Bible, speaking. Ruatara stands beside him in a British regimental coat. Hundreds of Ngāpuhi men, women and children sit and stand in a wide circle; the bay sparkles behind.", chars: ["marsden", "ruatara"] },
          { key: "t4w10d3-b", label: "Wed · role-play card — Ruatara explains", desc: "Ruatara speaking with his people afterwards, explaining Marsden's message in te reo Māori.", shot: "medium, warm light",
            setting: AOTEAROA,
            scene: "After the service, Ruatara stands among his people on the grassy slope, speaking with open, expressive hands as he explains the message in te reo Māori. Elders in korowai listen thoughtfully, children sit close, and Marsden waits quietly a little way behind.", chars: ["ruatara", "marsden"] },
          { key: "t4w10d4-a", label: "Thu · the place today", desc: "The quiet hillside at Oihi Bay today, with the stone Marsden Cross memorial looking out over the sea.", shot: "wide, peaceful",
            setting: "Modern-day Aotearoa New Zealand setting: Oihi Bay in the Bay of Islands today — a quiet grassy hillside above a sandy cove, a tall plain stone Celtic-style cross memorial, pōhutukawa trees and calm blue sea, a few visitors walking the path.",
            scene: "A tall, plain stone cross stands on a quiet grassy slope above a sandy cove at Oihi Bay, looking out over the calm sea. A whānau group walks up the path toward it, a grandmother holding a child's hand, as pōhutukawa branches frame the view.", chars: [] },
          { key: "t4w10d4-b", label: "Thu · your turn — sent out", desc: "A Kiwi class standing in a circle on the school field, arms around each other, ready to go and share Jesus.", shot: "wide, golden end-of-year light",
            setting: GR.school,
            scene: "On the school field in golden end-of-year afternoon light, a class of kids of many backgrounds stands in a big circle with arms around each other's shoulders, heads bowed in prayer. Their teacher stands among them, and the open field stretches toward the hills.", chars: [] }
        ],
        comic: { key: "t4w10-comic", label: "Comic page (week opener)", desc: "Six-panel comic page of Ruatara, Marsden and Christmas Day 1814 at Oihi Bay.",
          setting: AOTEAROA,
          panels: "Six panels. Panel 1 (wide): Marsden caring for the sick young Ruatara on a ship's deck. Panel 2 (small): Ruatara holding a sheaf of wheat below Rangihoua pā. Panel 3 (wide): the brig Active sailing into the Bay of Islands as waka paddle out. Panel 4 (tall): Ruatara's people setting upturned waka as seats and building a canoe pulpit. Panel 5 (wide): Marsden preaching on Christmas morning to a great circle of Ngāpuhi people, Ruatara beside him. Panel 6 (small): Ruatara explaining the message to his people.", chars: ["ruatara", "marsden"] }
      }
    ]
  };
})();
