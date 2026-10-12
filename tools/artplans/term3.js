/* Morninglight 2027 — Term 3 art plan: image prompts planned ahead of the lessons.
   When Term 3 is built, the lesson data reuses these exact keys and scenes.
   Term 3 — Having Faith in God (Jesus' famous parables).
   Weekly rhythm: Mon 🎭 the parable acted → Tue why Jesus told it (audience + twist)
   → Wed 🎭 a modern NZ retelling (setting override) → Thu what it shows about God; live it. */
window.ML_ARTPLAN = window.ML_ARTPLAN || {};
(function () {
  var KIDS = "Kiwi kids of many backgrounds drawn naturally and respectfully, in everyday clothes, school uniforms or sports gear.";
  var NZ = {
    school: "Modern-day Aotearoa New Zealand setting: a suburban primary school with classroom blocks, a covered walkway, playing fields, native trees and harakeke (flax) bushes. " + KIDS,
    sport: "Modern-day Aotearoa New Zealand setting: a muddy Saturday-morning club rugby ground with goal posts, a clubrooms shed, parents in raincoats on the sideline and rolling green hills behind. " + KIDS,
    beach: "Modern-day Aotearoa New Zealand setting: a wide sandy beach with pōhutukawa trees on the bank, dunes with marram grass, rock pools, surf and a lifeguard flag in the distance. " + KIDS,
    bush: "Modern-day Aotearoa New Zealand setting: dense native bush with tree ferns, punga, nīkau palms, mossy trunks and a narrow track. " + KIDS,
    home: "Modern-day Aotearoa New Zealand setting: a weatherboard family home in a suburban street, with a driveway, letterbox, deck and a small back garden. " + KIDS,
    camp: "Modern-day Aotearoa New Zealand setting: a school camp in the bush with wooden bunk cabins, a dining hall, tree ferns and a dark forest track. " + KIDS,
    market: "Modern-day Aotearoa New Zealand setting: a school gala day on the field and in the hall, with trestle-table stalls, bunting, a bouncy castle and families. " + KIDS,
    marae: "Modern-day Aotearoa New Zealand setting: a marae with a carved wharenui (meeting house) and an open marae ātea (courtyard) in front; people in tidy clothes; everything drawn with dignity and accuracy, no caricature. " + KIDS,
    church: "Modern-day Aotearoa New Zealand setting: a small, simple community church hall with stacking chairs, a wooden cross on the wall and big windows looking onto native trees. " + KIDS
  };

  window.ML_ARTPLAN["Term 3"] = {
    characters: {
      aroha: { name: "Aroha", sheet: "char-aroha", desc: "Aroha: Māori girl about 11, long dark wavy hair in a high ponytail, warm confident smile, a pounamu (greenstone) pendant on a cord, school polo shirt, shorts and sneakers." },
      sione: { name: "Sione", sheet: "char-sione", desc: "Sione: Samoan Kiwi boy about 11, tall and solidly built, short black hair with a shaved undercut, big friendly grin, a striped rugby jersey and shorts, often carrying a rugby ball." },
      mia:   { name: "Mia", sheet: "char-mia", desc: "Mia: Pākehā girl about 10, short straight light-coloured bob with a fringe, freckles, round glasses, a school hoodie with sleeves pushed up, always carrying a sketchbook." },
      jun:   { name: "Jun", sheet: "char-jun", desc: "Jun: Chinese Kiwi boy about 10, slim, short spiky black hair, quick cheeky grin, an oversized school jacket and high-top sneakers, a bike helmet clipped to his backpack." }
    },
    weeks: [
      /* ───────────────────────── WEEK 1 — THE SOWER ───────────────────────── */
      { n: 1, title: "The Sower", passage: "Matthew 13:1–23", verse: "Luke 8:15",
        outline: [
          "Mon 🎭 The Sower acted — Jesus teaches from a boat; a farmer scatters seed on the path, the rocks, the thorns and the good soil.",
          "Tue What is a parable? (an earthly story with a heavenly meaning) · Who heard it: a huge lakeside crowd and puzzled disciples · The twist: the same seed, four different hearts — and a harvest a hundred times over.",
          "Wed 🎭 Today's retelling — one encouraging message at school assembly, four kids, four very different responses.",
          "Thu What it shows: God sows his word generously, everywhere · Be good soil: listen, hold on, keep going (Luke 8:15) · Live it."
        ],
        chars: ["jesus", "aroha", "sione", "mia", "jun"],
        cover: { key: "t3w01-cover", label: "Week cover", desc: "A farmer scattering seed in a wide arc across a hillside field above the Sea of Galilee, birds wheeling, the sun low.", shot: "epic wide",
          scene: "A farmer in a rough tunic strides across a sloping field above the Sea of Galilee, flinging seed in a wide glittering arc from a bag at his hip. Birds wheel overhead, a stony path cuts the field, and the low sun throws long rays.", chars: [] },
        scenes: [
          { key: "t3w01d1-a", label: "Mon · story — Jesus teaches from a boat", desc: "Jesus sitting in a fishing boat just off the shore, teaching a huge crowd gathered on the beach.", shot: "wide, from behind the crowd",
            scene: "Seen from behind a huge crowd sitting on a pebbly lakeshore, Jesus sits in a small wooden fishing boat a few metres out on calm water, one hand raised as he teaches. Morning light glitters on the lake and hills rise behind.", chars: ["jesus"] },
          { key: "t3w01d1-b", label: "Mon · story + role-play card — four kinds of ground", desc: "Seed falling on the hard path, the rocks, the thorns and the good soil, with birds swooping in.", shot: "low-angle, close to the ground",
            scene: "Ground-level view as seeds rain down from a farmer's hand above: some bounce on a hard trodden path where birds swoop in, some land among jagged rocks, some among tangled thorns, and some sink into dark, soft, ploughed soil.", chars: [] },
          { key: "t3w01d2-a", label: "Tue · why parables? — the disciples ask", desc: "The disciples gathered close around Jesus by a lamp-lit doorway in the evening, asking what the story meant.", shot: "medium wide, warm",
            scene: "Evening in a lakeside village: Jesus sits on a low stone step outside a house, seen in three-quarter view, while Peter and the other disciples lean in close with puzzled faces. An oil lamp glows in the doorway and the lake darkens behind.", chars: ["jesus", "peter"] },
          { key: "t3w01d2-b", label: "Tue · the twist — a hundred times over", desc: "The farmer standing amazed in a huge field of tall wheat, heavy with grain, at harvest time.", shot: "wide, low sun",
            scene: "The same farmer stands waist-deep in a vast field of tall wheat, every stalk heavy with grain, his arms half-raised in amazement. The heads of grain bend in the breeze and the late sun turns the whole field into rippling light.", chars: [] },
          { key: "t3w01d3-a", label: "Wed · retelling — the assembly message", desc: "A school assembly: a speaker on stage while four kids react very differently — distracted, excited, busy, listening.", shot: "wide, from the side of the hall",
            setting: NZ.school,
            scene: "A primary school hall during assembly, a smiling guest speaker on the low stage. In one row: Jun secretly fiddling with a toy under his jacket, Sione bouncing with excitement, Mia anxiously flicking through a homework planner, and Aroha sitting still, listening hard.", chars: ["aroha", "sione", "mia", "jun"] },
          { key: "t3w01d3-b", label: "Wed · retelling — the one who held on", desc: "Days later, Aroha kneels in the school garden watering a row of seedlings, still remembering what she heard.", shot: "medium, morning light",
            setting: NZ.school,
            scene: "Days later, Aroha kneels in the school vegetable garden with a watering can, carefully watering a row of strong green seedlings. Harakeke bushes frame the bed, morning sun slants across the playground, and a few classmates wander over to watch.", chars: ["aroha"] },
          { key: "t3w01d4-a", label: "Thu · what it shows — good soil", desc: "Two cupped hands holding rich dark soil with a tiny green shoot pushing up, light falling on it.", shot: "close-up",
            scene: "Two cupped hands hold a mound of rich dark soil. From the middle, a tiny green shoot has pushed up and unfurled two small leaves. A soft beam of light falls on it from above, everything else in deep shadow.", chars: [] },
          { key: "t3w01d4-b", label: "Thu · live it — a listening heart", desc: "A child sitting under a pōhutukawa at the beach, reading a small Bible, the sea calm behind.", shot: "medium wide, peaceful",
            setting: NZ.beach,
            scene: "Mia sits on the grassy bank under a big spreading pōhutukawa tree, legs crossed, a small open Bible on her knees and her sketchbook beside her, reading quietly. The calm sea and the long beach stretch out below in early morning light.", chars: ["mia"] }
        ],
        comic: { key: "t3w01-comic", label: "Comic page (week opener)", desc: "Six-panel comic page of the parable of the sower.",
          panels: "Six panels. Panel 1 (wide): Jesus in a boat teaching a huge crowd on the lakeshore. Panel 2 (small): a farmer's hand flinging seed. Panel 3 (small): birds snatching seed from a hard path. Panel 4 (tall): small plants wilting on rocky ground under a blazing sun. Panel 5 (small): seedlings choked by thick thorns. Panel 6 (wide): a golden field of heavy wheat with the farmer standing amazed.", chars: ["jesus"] }
      },

      /* ───────────────────────── WEEK 2 — THE GOOD SAMARITAN ───────────────────────── */
      { n: 2, title: "The Good Samaritan", passage: "Luke 10:25–37", verse: "Luke 10:27",
        outline: [
          "Mon 🎭 The Good Samaritan acted — an expert asks 'Who is my neighbour?'; a traveller is robbed; a priest and a Levite pass by; a Samaritan stops and helps.",
          "Tue Why Jesus told it: an expert in the law wanted to justify himself · Jews and Samaritans were bitter enemies · The twist: the hero is the enemy.",
          "Wed 🎭 Today's retelling — Saturday rugby: a kid from the rival team gets hurt and everyone walks past, until Sione stops.",
          "Thu What it shows: God's mercy crosses every line — and Jesus is the greatest Samaritan · Live it: be the neighbour (Luke 10:27)."
        ],
        chars: ["jesus", "aroha", "sione", "mia"],
        cover: { key: "t3w02-cover", label: "Week cover", desc: "A Samaritan with his donkey kneeling beside a hurt traveller on a lonely rocky road, the sun low behind the hills.", shot: "epic wide, silhouette",
          scene: "A lonely road winds down through steep rocky desert hills. Far below, a Samaritan with a donkey kneels beside a traveller slumped against a boulder, both small against the vast landscape, the low sun throwing long shadows across the road.", chars: [] },
        scenes: [
          { key: "t3w02d1-a", label: "Mon · story — the expert's question", desc: "An expert in the law, scroll in hand, standing in the crowd to question Jesus.", shot: "medium wide, over the crowd",
            scene: "In a busy village square an expert in the law stands up in the crowd, tall and sharp-eyed, a scroll tucked under one arm and a finger raised as he asks his question. Jesus, seen in three-quarter view, looks back at him calmly.", chars: ["jesus"] },
          { key: "t3w02d1-b", label: "Mon · story + role-play card — the dangerous road", desc: "A traveller slumped beside the road with his bag gone, the robbers' silhouettes running off over a ridge.", shot: "wide, silhouette",
            scene: "On the steep road to Jericho a traveller lies slumped beside a boulder, his travel bag gone and his cloak torn. High on the ridge above, the dark silhouettes of robbers run away against a pale sky. No injuries shown; dust still hangs in the air.", chars: [] },
          { key: "t3w02d2-a", label: "Tue · who's who — the priest walks past", desc: "A priest in fine robes stepping to the far side of the road, looking away, as a Levite follows in the distance.", shot: "wide, high angle",
            scene: "Seen from above, a priest in fine layered robes and a tall head covering keeps to the far edge of the dusty road, face turned away from the slumped traveller. Further back, a Levite in temple clothes hesitates, already edging toward the other side too.", chars: [] },
          { key: "t3w02d2-b", label: "Tue · the twist — the enemy who stopped", desc: "The Samaritan kneeling to bandage the traveller's arm and pour oil from a flask, his donkey waiting.", shot: "medium, tender",
            scene: "The Samaritan, in a striped travelling cloak and turban, kneels beside the traveller, gently wrapping a cloth bandage around his arm and tipping a small flask of oil. His patient donkey waits beside them, and late sunlight falls warmly across the two men.", chars: [] },
          { key: "t3w02d3-a", label: "Wed · retelling — the kid on the sideline", desc: "At a muddy rugby game, a boy from the other team sits hurt and alone while his own team runs off; Sione jogs over.", shot: "wide, rainy",
            setting: NZ.sport,
            scene: "A drizzly Saturday at a muddy club rugby ground. A boy in the rival team's jersey sits alone in the mud holding his ankle, while players and parents hurry past toward the clubrooms. Sione, in his own team's striped jersey, turns back and jogs toward him.", chars: ["sione"] },
          { key: "t3w02d3-b", label: "Wed · retelling — helping him off", desc: "Sione and Aroha helping the rival player limp to the sideline, his arms over their shoulders.", shot: "medium, low-angle",
            setting: NZ.sport,
            scene: "Sione and Aroha help the limping rival player toward the sideline, his arms slung over their shoulders, all three muddy to the knees. A parent hurries out with a first-aid bag and a jacket, and the rain softens behind them.", chars: ["sione", "aroha"] },
          { key: "t3w02d4-a", label: "Thu · what it shows — mercy that pays the cost", desc: "At an inn, the Samaritan pressing two silver coins into the innkeeper's hand while the traveller rests inside.", shot: "medium, lamplight",
            scene: "At the doorway of a roadside inn at dawn, the Samaritan presses two silver coins into the innkeeper's open hand, nodding toward a room where the bandaged traveller rests on a mat. His donkey stands ready, and lamplight spills out into the cool morning.", chars: [] },
          { key: "t3w02d4-b", label: "Thu · live it — be the neighbour", desc: "Mia helping an elderly neighbour carry heavy shopping bags up the steps to her front door.", shot: "medium wide",
            setting: NZ.home,
            scene: "On a quiet suburban street, Mia carries two heavy shopping bags up the front steps of a weatherboard house, smiling, while an elderly neighbour with a walking stick follows behind her, delighted. A letterbox, a lemon tree and a parked bike frame the scene.", chars: ["mia"] }
        ],
        comic: { key: "t3w02-comic", label: "Comic page (week opener)", desc: "Six-panel comic page of the Good Samaritan.",
          panels: "Six panels. Panel 1 (wide): an expert in the law questioning Jesus in a crowded square. Panel 2 (small): robbers' silhouettes running over a ridge from a lonely road. Panel 3 (small): a priest walking past on the far side. Panel 4 (small): a Levite looking away and hurrying on. Panel 5 (tall): a Samaritan kneeling to bandage the traveller. Panel 6 (wide): the Samaritan handing coins to an innkeeper at dawn.", chars: ["jesus"] }
      },

      /* ───────────────────────── WEEK 3 — LOST SHEEP & LOST COIN ───────────────────────── */
      { n: 3, title: "Lost Sheep & Lost Coin", passage: "Luke 15:1–10", verse: "Luke 15:7",
        outline: [
          "Mon 🎭 The Lost Sheep acted — the religious leaders grumble that Jesus eats with sinners; a shepherd leaves ninety-nine sheep to search for one.",
          "Tue Why Jesus told it: grumbling Pharisees and teachers vs. tax collectors and 'sinners' · The twist: leave the ninety-nine? Throw a party for one sheep? · Plus the woman and the lost coin.",
          "Wed 🎭 Today's retelling — Aroha's little cousin wanders off at a crowded beach; the whole whānau searches, then celebrates.",
          "Thu What it shows: God goes looking, and heaven rejoices over one person who comes home (Luke 15:7) · Live it: welcome people in."
        ],
        chars: ["jesus", "aroha", "sione", "jun", "mia"],
        cover: { key: "t3w03-cover", label: "Week cover", desc: "A shepherd striding home over the hills at sunset with a lamb across his shoulders.", shot: "silhouette, wide",
          scene: "A shepherd strides along a hilltop at sunset with a lamb draped across his shoulders, his staff in one hand. He is a strong black silhouette against a huge glowing sky, and far below a village waits with lamps beginning to glow.", chars: [] },
        scenes: [
          { key: "t3w03d1-a", label: "Mon · story — eating with sinners", desc: "Jesus laughing at a crowded table with tax collectors and ordinary people while religious leaders frown from the doorway.", shot: "medium wide, interior",
            scene: "Inside a crowded courtyard, Jesus reclines at a low table among tax collectors and ordinary villagers, seen in three-quarter view, sharing bread and laughing. In the arched doorway, two religious leaders in long tasselled robes stand with folded arms, frowning and whispering.", chars: ["jesus"] },
          { key: "t3w03d1-b", label: "Mon · story + role-play card — searching the hills", desc: "A shepherd climbing steep rocky hills at dusk, calling out, as a tiny lamb waits stuck on a ledge.", shot: "wide, dusk",
            scene: "At dusk a shepherd scrambles up a steep, rocky hillside with his staff, one hand cupped to his mouth as he calls. Far above him, a tiny lamb stands stranded on a narrow ledge, small against the darkening grey sky.", chars: [] },
          { key: "t3w03d2-a", label: "Tue · the twist — a party for one sheep", desc: "The shepherd arriving home with the lamb on his shoulders as neighbours pour out of their houses cheering.", shot: "wide, joyful",
            scene: "The shepherd walks into his village carrying the lamb across his shoulders, grinning. Neighbours spill out of doorways and down outside staircases with lamps, clapping and cheering, children running ahead of him through the narrow lane.", chars: [] },
          { key: "t3w03d2-b", label: "Tue · the lost coin", desc: "A woman sweeping her dark stone house by lamplight as a silver coin glints under a bench.", shot: "low-angle, lamplight",
            scene: "Inside a small, dim stone house a woman sweeps the floor with a bundle of twigs, an oil lamp held low in her other hand. In the foreground, under a wooden bench, a single silver coin catches the lamplight and glints.", chars: [] },
          { key: "t3w03d3-a", label: "Wed · retelling — the search on the beach", desc: "A whānau spread out across a crowded beach searching for a lost little cousin, Aroha calling, Sione and Jun checking the dunes.", shot: "epic wide",
            setting: NZ.beach,
            scene: "A crowded summer beach. Aroha stands on a driftwood log, hands cupped, calling out, while Sione and Jun run through the marram grass on the dunes and aunties and uncles spread out along the water's edge, searching. Pōhutukawa trees line the bank above.", chars: ["aroha", "sione", "jun"] },
          { key: "t3w03d3-b", label: "Wed · retelling — found!", desc: "Aroha hugging her small cousin by the rock pools while the whānau runs toward them, overjoyed.", shot: "medium, joyful",
            setting: NZ.beach,
            scene: "By the rock pools at the far end of the beach, Aroha kneels and hugs her small cousin, who still clutches a bucket of shells. Behind them the whānau come running across the wet sand with arms up and big smiles, the afternoon sun bright on the water.", chars: ["aroha"] },
          { key: "t3w03d4-a", label: "Thu · what it shows — heaven rejoices", desc: "The woman holding up her found coin as her neighbours crowd into the courtyard to celebrate with her.", shot: "medium wide, festive",
            scene: "In a lamp-lit courtyard, the woman holds the found silver coin high, laughing. Her friends and neighbours crowd around clapping, one beating a small hand drum, another carrying a tray of bread. Light streams down from the open sky above the courtyard.", chars: [] },
          { key: "t3w03d4-b", label: "Thu · live it — welcome people in", desc: "A new family being welcomed onto a marae by the school community, the kids standing to greet them.", shot: "wide, respectful",
            setting: NZ.marae,
            scene: "A new family walks slowly onto the marae ātea toward the carved wharenui, a kuia in a dark skirt calling them on with a gentle raised hand. Aroha, Mia and their classmates in school uniform stand respectfully in the welcoming group, faces warm and smiling.", chars: ["aroha", "mia"] }
        ],
        comic: { key: "t3w03-comic", label: "Comic page (week opener)", desc: "Six-panel comic page of the lost sheep and the lost coin.",
          panels: "Six panels. Panel 1 (wide): religious leaders frowning at Jesus eating with tax collectors. Panel 2 (small): a shepherd counting sheep into a pen and pausing. Panel 3 (tall): the shepherd climbing steep hills at dusk toward a stranded lamb. Panel 4 (wide): the shepherd carrying the lamb home to cheering neighbours. Panel 5 (small): a woman sweeping by lamplight, a coin glinting. Panel 6 (wide): the woman and her friends celebrating in a courtyard.", chars: ["jesus"] }
      },

      /* ───────────────────────── WEEK 4 — THE LOST SON ───────────────────────── */
      { n: 4, title: "The Lost Son", passage: "Luke 15:11–32", verse: "Luke 15:24",
        outline: [
          "Mon 🎭 The Lost Son acted — the younger son takes his share and leaves, wastes it all, ends up feeding pigs, and heads home to a running father.",
          "Tue Why Jesus told it: the same grumbling leaders from Luke 15 · Who's who: the father, the younger son, the older son · The twist: a dignified father runs — and the 'good' son is the one left outside.",
          "Wed 🎭 Today's retelling — Jun storms off after an argument, blows his birthday money, and walks home in the rain to a dad who runs to meet him.",
          "Thu What it shows: the Father runs to welcome us home, and both sons needed his grace (Luke 15:24) · Live it: come home, and celebrate others coming home."
        ],
        chars: ["jun"],
        cover: { key: "t3w04-cover", label: "Week cover", desc: "A father running down a long dusty road with arms wide toward his ragged son far away.", shot: "epic wide",
          scene: "A long dusty road leads to a farmhouse on a hill. An older father runs down it, robe hitched up, arms flung wide, toward a ragged young man far away who has stopped in his tracks. The late sun streams down the road between them.", chars: [] },
        scenes: [
          { key: "t3w04d1-a", label: "Mon · story — leaving home", desc: "The younger son striding away down the road with a heavy money bag while his father watches from the doorway.", shot: "wide, silhouette",
            scene: "A young man in fine new clothes strides away from a farmhouse down a dusty road, a heavy money bag swinging from his belt, not looking back. In the doorway behind, his father stands as a still, dark silhouette, one hand on the doorframe.", chars: [] },
          { key: "t3w04d1-b", label: "Mon · story + role-play card — among the pigs", desc: "The son, ragged and hungry, sitting in a muddy pig pen staring at the pods the pigs are eating.", shot: "medium, low-angle",
            scene: "In a muddy pig pen on a barren farm, the younger son sits slumped against the fence in torn clothes, thin and hungry, staring at the carob pods in the pigs' trough. Pigs root around him, and grey storm clouds gather overhead.", chars: [] },
          { key: "t3w04d2-a", label: "Tue · the twist — the father runs", desc: "The father running with his robe hitched up and arms open while the son drops to his knees on the road.", shot: "medium wide, speed lines",
            scene: "On the dusty road, the father runs hard toward his son, robe hitched up to his knees, sandals kicking up dust, arms already opening, with speed lines behind him. A few metres away the ragged son drops to his knees, head bowed.", chars: [] },
          { key: "t3w04d2-b", label: "Tue · who's who — the older brother outside", desc: "The older brother standing outside in the dark with arms folded as music and light spill from the house; the father comes out to him.", shot: "wide, night",
            scene: "At night, the older brother stands in the dark farmyard in his work clothes, arms folded, jaw set. Behind him, light, music and dancing figures spill from the farmhouse windows, and his father steps out of the bright doorway, hands open, pleading.", chars: [] },
          { key: "t3w04d3-a", label: "Wed · retelling — the long walk home", desc: "Jun walking home alone along a suburban footpath in the rain at dusk, hood up, hands in empty pockets.", shot: "wide, rainy dusk",
            setting: NZ.home,
            scene: "Rainy dusk on a suburban street. Jun trudges along the wet footpath with his hood up and hands jammed in empty pockets, his backpack sagging. Streetlights flicker on, reflected in puddles, and warm lit windows glow in the weatherboard houses ahead.", chars: ["jun"] },
          { key: "t3w04d3-b", label: "Wed · retelling — Dad runs", desc: "Jun's dad running down the driveway in his socks to hug him in the rain, his older sister watching from the doorway with arms crossed.", shot: "medium wide",
            setting: NZ.home,
            scene: "Jun's dad sprints down the wet driveway in his socks, arms wide, and wraps Jun in a hug in the rain. Up on the lit front porch, Jun's older sister leans in the doorway, arms crossed, eyebrows raised, not yet smiling.", chars: ["jun"] },
          { key: "t3w04d4-a", label: "Thu · what it shows — the welcome feast", desc: "The father putting a fine robe and a ring on his son while servants bring sandals and carry food for a feast.", shot: "medium, warm",
            scene: "In a lamp-lit courtyard, the father wraps a fine embroidered robe around his son's shoulders and slips a ring onto his finger. Servants hurry in with sandals and platters of food, musicians tune up, and the son's face is overwhelmed with relief.", chars: [] },
          { key: "t3w04d4-b", label: "Thu · live it — both need grace", desc: "Jun and his older sister making up in the kitchen, her handing him a plate of food with a half-smile.", shot: "medium, cosy",
            setting: NZ.home,
            scene: "In a cosy kitchen later that evening, Jun's older sister slides a plate of hot food across the bench to him with a reluctant half-smile, and Jun grins back, still in a towel-dried hoodie. Rain streaks the window behind them.", chars: ["jun"] }
        ],
        comic: { key: "t3w04-comic", label: "Comic page (week opener)", desc: "Six-panel comic page of the lost son.",
          panels: "Six panels. Panel 1 (wide): a young man striding away from a farmhouse with a money bag, his father watching. Panel 2 (small): coins tumbling from an emptying bag. Panel 3 (tall): the son sitting hungry in a pig pen. Panel 4 (small): the son's face as he decides to go home. Panel 5 (wide): the father running down the road with arms wide. Panel 6 (wide): the older brother outside in the dark, the bright party behind him.", chars: [] }
      },

      /* ───────────────────────── WEEK 5 — TWO BUILDERS ───────────────────────── */
      { n: 5, title: "Two Builders", passage: "Matthew 7:24–29", verse: "Matthew 7:24",
        outline: [
          "Mon 🎭 Two Builders acted — one digs down to rock, one builds fast on sand; then the storm comes.",
          "Tue Why Jesus told it: the end of the Sermon on the Mount, a crowd amazed at his authority · The twist: both builders heard the same words and their houses looked the same — until the storm.",
          "Wed 🎭 Today's retelling — school hut-building day in the bush: Aroha follows the instructions, Sione rushes, and a southerly storm arrives overnight.",
          "Thu What it shows: Jesus' words are rock you can build a life on · Hearing + doing (Matthew 7:24) · Live it: one thing to actually do this week."
        ],
        chars: ["jesus", "aroha", "sione", "mia"],
        cover: { key: "t3w05-cover", label: "Week cover", desc: "A stone house standing firm on a rocky ledge as a storm flood sweeps a sandy riverbed below.", shot: "epic wide, storm",
          scene: "Lightning splits a black sky. On a high rocky ledge a small stone house stands firm and dry, a lamp glowing in its window, while far below a raging flood surges down a sandy riverbed where an empty house is already tilting into the water.", chars: [] },
        scenes: [
          { key: "t3w05d1-a", label: "Mon · story — the end of the sermon", desc: "Jesus on a grassy hillside finishing his teaching, the crowd on the slope amazed.", shot: "wide, from behind Jesus",
            scene: "From behind and slightly above, Jesus stands on a grassy hillside with one arm outstretched, finishing his teaching. A huge crowd sits across the slope below him, faces turned up in amazement, with the lake shining in the distance.", chars: ["jesus"] },
          { key: "t3w05d1-b", label: "Mon · story + role-play card — digging down to rock", desc: "The wise builder sweating as he digs a deep trench and hauls stones onto solid rock.", shot: "low-angle",
            scene: "Low angle from inside a deep trench: the wise builder, sleeves rolled up and sweating, heaves a heavy squared stone onto bare bedrock. His pickaxe leans on the trench wall, and the half-built stone walls rise against a clear sky.", chars: [] },
          { key: "t3w05d2-a", label: "Tue · who's who — the quick builder on sand", desc: "The foolish builder relaxing in front of his quickly built house on a sunny sandy riverbed.", shot: "wide, sunny",
            scene: "On a dry sandy riverbed, the second builder lounges on a woven mat in front of his quickly finished house, hands behind his head, feet up. The house looks just as good as the other one. The sun shines and the sky is clear.", chars: [] },
          { key: "t3w05d2-b", label: "Tue · the twist — the storm comes", desc: "Flood water sweeping through the riverbed and collapsing the empty sand house as the builder watches from the bank.", shot: "wide, storm",
            scene: "In driving rain, a muddy flood roars down the riverbed and the empty sand house crumples into the torrent, walls folding in. The foolish builder stands safe but soaked on the high bank, hands on his head, lightning flickering behind him.", chars: [] },
          { key: "t3w05d3-a", label: "Wed · retelling — hut-building day", desc: "Kids building huts in the school bush: Aroha carefully lashing branches to a solid tree, Sione stacking loose branches fast.", shot: "wide",
            setting: NZ.bush,
            scene: "School hut-building day in a patch of native bush. A teacher demonstrates a lashing knot, and Aroha carefully ties sturdy branches to a thick living tree trunk, while Sione nearby piles loose branches against a punga stump, laughing and already finished.", chars: ["aroha", "sione"] },
          { key: "t3w05d3-b", label: "Wed · retelling — the morning after the southerly", desc: "After an overnight storm, Sione's hut lies flattened while Aroha's still stands among dripping ferns.", shot: "medium wide, after rain",
            setting: NZ.bush,
            scene: "The morning after a southerly storm, the bush drips and steams. Sione stares at a scattered heap of branches where his hut was, while a few steps away Aroha's lashed hut still stands firm against its tree, and Mia peeks out from inside it, grinning.", chars: ["aroha", "sione", "mia"] },
          { key: "t3w05d4-a", label: "Thu · what it shows — built on rock", desc: "The stone house on the rock in clear morning light after the storm, sun rays breaking through clouds.", shot: "wide, hopeful",
            scene: "The morning after the storm: the stone house still stands on its rocky ledge, wet and shining. The clouds are breaking apart, and broad rays of sunlight fall across the house and the calm, muddy riverbed below, where puddles reflect the sky.", chars: [] },
          { key: "t3w05d4-b", label: "Thu · live it — hear it, then do it", desc: "Mia at the kitchen table with a Bible open, pulling on her school bag, ready to go and do what she read.", shot: "medium",
            setting: NZ.home,
            scene: "Early morning in a family kitchen, Mia stands at the table with a small Bible open beside her cereal bowl, one finger still on the page, already swinging her school bag onto her shoulder with a determined look. Sunlight pours through the window.", chars: ["mia"] }
        ],
        comic: { key: "t3w05-comic", label: "Comic page (week opener)", desc: "Six-panel comic page of the two builders.",
          panels: "Six panels. Panel 1 (wide): Jesus teaching a vast crowd on a hillside. Panel 2 (small): a builder swinging a pickaxe into rock. Panel 3 (small): another builder smoothing sand and stacking walls quickly. Panel 4 (wide): two finished houses that look the same under a sunny sky. Panel 5 (tall): a storm and flood crashing down the riverbed. Panel 6 (wide): one house standing on the rock, the other gone.", chars: ["jesus"] }
      },

      /* ───────────────────────── WEEK 6 — THE SERVANT WHO WOULDN'T FORGIVE ───────────────────────── */
      { n: 6, title: "The Servant Who Wouldn't Forgive", passage: "Matthew 18:21–35", verse: "Luke 6:36",
        outline: [
          "Mon 🎭 The Unforgiving Servant acted — Peter asks 'How many times?'; a king cancels an enormous debt; the forgiven servant grabs a friend over a tiny one.",
          "Tue Why Jesus told it: Peter's question and 'seventy-seven times' · Who's who: king, servant, fellow servant · The twist: the debt was impossibly huge — and he still wouldn't forgive a small one.",
          "Wed 🎭 Today's retelling — Mia is forgiven for breaking the TV at home, then refuses to forgive Jun for ruining her sketchbook.",
          "Thu What it shows: God has cancelled our enormous debt through Jesus · Be merciful as your Father is merciful (Luke 6:36) · Live it: who do I need to forgive?"
        ],
        chars: ["jesus", "peter", "mia", "jun"],
        cover: { key: "t3w06-cover", label: "Week cover", desc: "A servant kneeling before a towering throne as a king tears a long debt scroll in two.", shot: "low-angle, epic",
          scene: "In a vast pillared throne room, a tiny servant kneels on the marble floor before a towering throne. The king, a huge dark silhouette against tall windows, holds up a long scroll and tears it in two, light bursting through the gap.", chars: [] },
        scenes: [
          { key: "t3w06d1-a", label: "Mon · story — Peter's question", desc: "Peter counting on his fingers as he asks Jesus a question on a dusty road, the other disciples listening.", shot: "medium wide",
            scene: "On a dusty road between villages, Peter walks beside Jesus, counting on his thick fingers with a hopeful, slightly proud expression. Jesus, in three-quarter view, smiles back. The other disciples walk behind, listening, olive trees lining the road.", chars: ["jesus", "peter"] },
          { key: "t3w06d1-b", label: "Mon · story + role-play card — the impossible debt", desc: "The servant on his knees before the king, piles of debt ledgers and scrolls stacked high around him.", shot: "low-angle",
            scene: "The servant kneels with his hands clasped, begging before the king's throne. Around him, record-keepers have stacked towering piles of scrolls and wax tablets listing his debt, higher than his head. The king leans forward, a shadowed figure in a jewelled robe.", chars: [] },
          { key: "t3w06d2-a", label: "Tue · who's who — the king forgives", desc: "The king stepping down from his throne and lifting the servant to his feet, the debt scroll torn on the floor.", shot: "medium, light from above",
            scene: "The king steps down from his throne and lifts the trembling servant to his feet by the shoulders. A torn debt scroll lies in two pieces on the marble floor between them, and sunlight from the high windows falls across both their faces.", chars: [] },
          { key: "t3w06d2-b", label: "Tue · the twist — he wouldn't forgive", desc: "In a courtyard, the forgiven servant grabbing a fellow servant's cloak as the other pleads and onlookers stare.", shot: "medium wide",
            scene: "In a palace courtyard, the forgiven servant grips a fellow servant by the front of his cloak, face twisted and demanding. The smaller man pleads with open hands. Other servants carrying jars and baskets stop and stare, shocked. Shadows fall harsh across the stones.", chars: [] },
          { key: "t3w06d3-a", label: "Wed · retelling — the broken TV", desc: "Mia frozen beside a fallen, cracked TV with a soccer ball nearby, as her dad appears in the doorway with a kind face.", shot: "medium wide, interior",
            setting: NZ.home,
            scene: "In a family lounge, Mia stands frozen with hands over her mouth beside a big TV that has toppled off its cabinet, its screen cracked, a soccer ball rolling away. Her dad stands in the doorway, and instead of anger his face is kind.", chars: ["mia"] },
          { key: "t3w06d3-b", label: "Wed · retelling — the spilt drink", desc: "At school the next day, Mia snatching back her soggy sketchbook and glaring as Jun apologises, classmates watching.", shot: "medium",
            setting: NZ.school,
            scene: "Under a covered walkway at school, Mia snatches back her dripping sketchbook from Jun and glares, while Jun holds an empty drink bottle and an apologetic face, palms up. Two classmates on a nearby bench watch, wide-eyed.", chars: ["mia", "jun"] },
          { key: "t3w06d4-a", label: "Thu · what it shows — the debt is paid", desc: "An empty cross on a hill at dawn, a long torn scroll lying at its foot in the light.", shot: "wide, reverent, silhouette",
            scene: "An empty wooden cross stands alone on a quiet hilltop at dawn, a dark silhouette against a sky full of soft rising light. At its foot lies a long scroll, torn cleanly in two, its ends lifting in the breeze.", chars: [] },
          { key: "t3w06d4-b", label: "Thu · live it — forgive like you've been forgiven", desc: "Mia and Jun making up on the playground, Mia showing him the dried, wrinkled sketchbook and both laughing.", shot: "medium, sunny",
            setting: NZ.school,
            scene: "At lunchtime on the school field, Mia sits on a bench beside Jun, showing him her dried and crinkly sketchbook. Both are laughing at a wobbly ink-blot drawing. Sione and Aroha play handball in the sunny background.", chars: ["mia", "jun", "sione", "aroha"] }
        ],
        comic: { key: "t3w06-comic", label: "Comic page (week opener)", desc: "Six-panel comic page of the servant who wouldn't forgive.",
          panels: "Six panels. Panel 1 (wide): Peter asking Jesus a question on the road, counting on his fingers. Panel 2 (tall): a servant kneeling before a towering throne amid piles of scrolls. Panel 3 (small): the king's hands tearing a scroll in two. Panel 4 (wide): the forgiven servant gripping a fellow servant's cloak in a courtyard. Panel 5 (small): shocked onlookers whispering. Panel 6 (wide): the king, a dark silhouette on his throne, looking down at the unforgiving servant.", chars: ["jesus", "peter"] }
      },

      /* ───────────────────────── WEEK 7 — THE THREE SERVANTS (TALENTS) ───────────────────────── */
      { n: 7, title: "The Three Servants", passage: "Matthew 25:14–30", verse: "Matthew 25:21",
        outline: [
          "Mon 🎭 The Three Servants acted — a master hands out five, two and one bags of gold; two get to work, one buries his.",
          "Tue Why Jesus told it: on the Mount of Olives, days before the cross, to disciples who would wait for his return · The twist: the master is generous, but the third servant saw him as harsh — fear made him hide.",
          "Wed 🎭 Today's retelling — gala day: everyone gets $20 to grow for the school; Aroha and Sione get busy, Jun hides his in a drawer.",
          "Thu What it shows: God trusts us with gifts and loves to say 'Well done!' (Matthew 25:21) · Use them out of trust, not fear · Live it: name your gift and use it."
        ],
        chars: ["jesus", "peter", "aroha", "sione", "jun"],
        cover: { key: "t3w07-cover", label: "Week cover", desc: "A master handing three bags of gold to three servants in a courtyard, his travel caravan waiting at the gate.", shot: "wide",
          scene: "In a grand stone courtyard at sunrise, a wealthy master in a travelling cloak hands bulging bags of gold to three bowing servants. Beyond the open gate, camels and a loaded caravan wait in the dawn light, ready for a long journey.", chars: [] },
        scenes: [
          { key: "t3w07d1-a", label: "Mon · story — five, two, one", desc: "The master placing different-sized piles of gold bags into the hands of three servants.", shot: "medium",
            scene: "Close around a wooden table, the master pushes five heavy bags of gold to the first servant, two to the second and a single bag to the third. The first two lean forward eagerly; the third servant hangs back, clutching his one bag nervously.", chars: [] },
          { key: "t3w07d1-b", label: "Mon · story + role-play card — burying the gold", desc: "The third servant digging a hole under an olive tree at night by lantern light, glancing over his shoulder.", shot: "low-angle, night",
            scene: "At night beneath a gnarled olive tree, the third servant crouches over a fresh hole, lowering his bag of gold into it by the light of a small lantern. He glances nervously over his shoulder, his shadow stretched huge across the ground behind him.", chars: [] },
          { key: "t3w07d2-a", label: "Tue · why he told it — the Mount of Olives", desc: "Jesus sitting with his disciples on the Mount of Olives at sunset, Jerusalem spread out below.", shot: "wide, from behind",
            scene: "From behind, Jesus sits on a rocky outcrop on the Mount of Olives with Peter and the disciples gathered close, all looking out over the walls and temple of Jerusalem glowing below in the setting sun. Olive trees frame the scene.", chars: ["jesus", "peter"] },
          { key: "t3w07d2-b", label: "Tue · the twist — the master returns", desc: "The master welcoming back two servants with overflowing chests of gold while the third waits behind holding a dirty bag.", shot: "medium wide",
            scene: "Back in the courtyard, the master spreads his arms in delight as the first two servants open chests overflowing with gold. Behind them, the third servant stands apart, holding up his one dirt-covered bag with a defensive, fearful face.", chars: [] },
          { key: "t3w07d3-a", label: "Wed · retelling — gala day", desc: "A busy school gala: Aroha selling homemade fudge at a stall and Sione running a car-wash with a bucket and sponge.", shot: "wide, busy",
            setting: NZ.market,
            scene: "A busy school gala on the field. At a trestle-table stall under bunting, Aroha hands out paper bags of homemade fudge to a queue of families, while nearby Sione, soaked and grinning, scrubs a car with a big sponge and a bucket of suds.", chars: ["aroha", "sione"] },
          { key: "t3w07d3-b", label: "Wed · retelling — hidden in the drawer", desc: "Jun alone in the empty classroom peeking at an untouched envelope in his desk drawer while the gala goes on outside the window.", shot: "medium, interior",
            setting: NZ.school,
            scene: "Inside an empty classroom, Jun sits at his desk and slides open the drawer to peek at a sealed envelope, still untouched. Through the big window behind him, the gala buzzes with stalls, balloons and running children in bright sunlight.", chars: ["jun"] },
          { key: "t3w07d4-a", label: "Thu · what it shows — 'Well done!'", desc: "The master with his hand on a faithful servant's shoulder, welcoming him into a joyful feast.", shot: "medium, warm",
            scene: "The master rests a hand on the faithful servant's shoulder and leads him toward the open doors of a lamp-lit banquet hall, where tables are spread and musicians play. The servant's face shows stunned joy, and light spills out over them both.", chars: [] },
          { key: "t3w07d4-b", label: "Thu · live it — use your gift", desc: "Aroha playing a ukulele for a group of younger children sitting on a mat, all singing.", shot: "medium wide",
            setting: NZ.school,
            scene: "In a bright junior classroom, Aroha sits on a low chair playing a ukulele while a circle of five-year-olds on the mat sing and clap along. Mia kneels beside them holding up a big hand-drawn picture, and sunlight streams through the windows.", chars: ["aroha", "mia"] }
        ],
        comic: { key: "t3w07-comic", label: "Comic page (week opener)", desc: "Six-panel comic page of the three servants.",
          panels: "Six panels. Panel 1 (wide): a master handing bags of gold to three servants as a caravan waits. Panel 2 (small): the first servant bargaining in a busy market. Panel 3 (small): the second servant working in a workshop. Panel 4 (tall): the third servant burying his bag under an olive tree at night. Panel 5 (wide): the master returning, two servants opening chests of gold. Panel 6 (small): the third servant holding up a dirty bag, afraid.", chars: [] }
      },

      /* ───────────────────────── WEEK 8 — THE TEN BRIDESMAIDS ───────────────────────── */
      { n: 8, title: "The Ten Bridesmaids", passage: "Matthew 25:1–13", verse: "Matthew 25:13",
        outline: [
          "Mon 🎭 The Ten Bridesmaids acted — ten wait with lamps, all fall asleep, a midnight shout: five have oil, five run out, and the door is shut.",
          "Tue Why Jesus told it: how first-century weddings worked (the groom arrives without warning) · The twist: the wise ones won't share their oil — real readiness can't be borrowed.",
          "Wed 🎭 Today's retelling — school camp glow-worm walk: Aroha and Jun check their torches, Sione and Mia muck around, and the group leaves without them.",
          "Thu What it shows: Jesus will return, and it will be a joyful wedding feast · Be ready — keep your own faith alive (Matthew 25:13) · Live it."
        ],
        chars: ["jesus", "aroha", "sione", "mia", "jun"],
        cover: { key: "t3w08-cover", label: "Week cover", desc: "Ten young women with small clay lamps waiting outside a house at night, a torchlit procession coming over the hill.", shot: "epic wide, night",
          scene: "Night outside a large village house. Ten young women in festive robes wait along the wall holding small clay oil lamps, some glowing, some dark. On the hill beyond, a winding procession of torches approaches under a sky thick with stars.", chars: [] },
        scenes: [
          { key: "t3w08d1-a", label: "Mon · story — waiting with lamps", desc: "Ten bridesmaids in festive robes waiting at dusk outside the house, holding their lamps.", shot: "wide, dusk",
            scene: "At dusk ten young women in embroidered festive robes and head scarves wait outside a decorated house, chatting and laughing, each holding a small clay oil lamp. Five of them also carry small jars of oil tucked under their arms.", chars: [] },
          { key: "t3w08d1-b", label: "Mon · story + role-play card — midnight", desc: "The bridesmaids asleep against the wall, lamps flickering low, as distant torches appear on the hill.", shot: "medium wide, night",
            scene: "Midnight. All ten bridesmaids have fallen asleep sitting against the house wall, heads on shoulders, their lamps flickering low on the ground beside them. Far off on the dark hill, a line of torches appears and begins to wind down toward them.", chars: [] },
          { key: "t3w08d2-a", label: "Tue · who's who — wise and foolish", desc: "Five bridesmaids trimming bright lamps while the other five hold out dark lamps, pleading.", shot: "medium, high contrast",
            scene: "The bridesmaids scramble awake. On one side, five calmly pour oil and trim their lamps into bright flames. On the other side, five hold up dark, smoking lamps, pleading with outstretched hands. Lamplight splits the scene between bright and shadow.", chars: [] },
          { key: "t3w08d2-b", label: "Tue · the twist — the door is shut", desc: "The five foolish bridesmaids knocking at a heavy closed door at night, light and music leaking from underneath.", shot: "low-angle, night",
            scene: "Late at night, five bridesmaids knock and press against a heavy wooden door that is firmly shut. A thin line of golden light and the shapes of dancing shadows leak from the gap underneath. Their own lamps hang dark and empty at their sides.", chars: [] },
          { key: "t3w08d3-a", label: "Wed · retelling — getting ready for the night walk", desc: "In a camp cabin, Aroha and Jun check torches and spare batteries while Sione and Mia have a pillow fight.", shot: "medium wide, interior",
            setting: NZ.camp,
            scene: "Evening in a wooden camp cabin with bunk beds. Aroha and Jun sit on a bottom bunk, testing their torches and packing spare batteries into a small bag. Behind them Sione and Mia are mid-pillow-fight, feathers flying, torches forgotten on the floor.", chars: ["aroha", "jun", "sione", "mia"] },
          { key: "t3w08d3-b", label: "Wed · retelling — left behind on the track", desc: "On a dark bush track, Sione and Mia shaking dead torches as the group's lights disappear among the ferns ahead.", shot: "wide, night",
            setting: NZ.camp,
            scene: "A dark bush track at night between tall tree ferns. Sione and Mia stand still, shaking their dead torches in frustration, while far ahead a line of small torch beams, the rest of the group, bobs away and disappears around a bend.", chars: ["sione", "mia"] },
          { key: "t3w08d4-a", label: "Thu · what it shows — the wedding feast", desc: "A joyful wedding feast lit by lamps, the groom welcoming the ready bridesmaids inside.", shot: "wide, festive",
            scene: "Inside a great hall lit by hundreds of lamps, a joyful wedding feast has begun. The groom, arms wide, welcomes the five bridesmaids through the door, their lamps blazing. Long tables are heaped with food, and guests dance in a circle.", chars: [] },
          { key: "t3w08d4-b", label: "Thu · live it — keep your lamp burning", desc: "A child kneeling at a bedside at night by the glow of a small lamp, praying, stars in the window.", shot: "medium, quiet",
            setting: NZ.home,
            scene: "Night in a small bedroom. Jun kneels beside his bed, elbows on the duvet, head bowed and hands folded, praying. A small bedside lamp casts a warm circle of light around him, and through the window the stars shine over the dark suburban rooftops.", chars: ["jun"] }
        ],
        comic: { key: "t3w08-comic", label: "Comic page (week opener)", desc: "Six-panel comic page of the ten bridesmaids.",
          panels: "Six panels. Panel 1 (wide): ten bridesmaids with lamps waiting outside a house at dusk. Panel 2 (small): heads nodding off to sleep. Panel 3 (tall): a torch procession winding down a hill at midnight. Panel 4 (wide): five bright lamps and five dark ones, hands pleading. Panel 5 (small): a heavy door swinging shut. Panel 6 (wide): five bridesmaids outside in the dark, light under the door.", chars: [] }
      },

      /* ───────────────────────── WEEK 9 — THE KINGDOM IS WORTH EVERYTHING ───────────────────────── */
      { n: 9, title: "The Kingdom Is Worth Everything", passage: "Matthew 13:31–33, 44–46", verse: "Matthew 13:44",
        outline: [
          "Mon 🎭 The Mustard Seed and the Yeast acted — the tiniest seed becomes a tree for the birds; a little yeast works through a huge batch of dough.",
          "Tue The Hidden Treasure — who heard it (the lakeside crowd and the disciples) · The twist: he sells everything — and he's happy about it.",
          "Wed 🎭 The Pearl Merchant — acted in the ancient market, then retold today: Jun sells his whole collection for the one thing worth more.",
          "Thu Compare all four parables: small → big, hidden → found · What it shows: God's kingdom is worth more than anything (Matthew 13:44) · Live it."
        ],
        chars: ["jesus", "aroha", "sione", "mia", "jun"],
        cover: { key: "t3w09-cover", label: "Week cover", desc: "A huge spreading mustard tree full of birds, with a tiny seed glowing in the soil at its roots.", shot: "epic wide",
          scene: "A huge spreading mustard tree rises over a sunlit field, its branches full of nesting birds. At its roots, in the foreground, a single tiny seed sits glowing on the dark soil, impossibly small next to the giant tree it became.", chars: [] },
        scenes: [
          { key: "t3w09d1-a", label: "Mon · story — the tiny seed", desc: "Jesus holding a tiny mustard seed on his fingertip for a child to see, the crowd leaning in.", shot: "medium wide, three-quarter",
            scene: "On a sunny lakeshore, Jesus, seen in three-quarter view, crouches and holds out one fingertip with a tiny mustard seed on it for a curious child to peer at. Around them the crowd leans in, squinting and smiling at how small it is.", chars: ["jesus"] },
          { key: "t3w09d1-b", label: "Mon · story + role-play card — the yeast", desc: "A woman kneading an enormous trough of dough, rising loaves and bowls all around her kitchen.", shot: "medium, warm",
            scene: "In a sunlit stone kitchen, a woman with flour-dusted arms kneads a huge wooden trough of dough. All around her, bowls of dough have puffed up and overflowed, and round loaves rise on the bench while children peek in at the doorway, laughing.", chars: [] },
          { key: "t3w09d2-a", label: "Tue · story — the treasure in the field", desc: "A farmhand's plough striking a buried chest, gold coins glinting in the furrow.", shot: "low-angle, dramatic",
            scene: "In a ploughed field, a farmhand's wooden plough has jolted against something hard. He kneels in the furrow brushing away soil from the lid of an old chest, gold coins glinting through a gap, his eyes wide and mouth open.", chars: [] },
          { key: "t3w09d2-b", label: "Tue · the twist — sell everything, joyfully", desc: "The same man happily handing his goods and furniture to buyers outside his house, beaming.", shot: "wide, joyful",
            scene: "Outside his small house, the same man beams as he hands out his belongings to buyers: a table, a goat on a rope, baskets and pots. His neighbours shake their heads, puzzled, but he is laughing, pointing toward the field on the hill.", chars: [] },
          { key: "t3w09d3-a", label: "Wed · story — the pearl merchant", desc: "A merchant at a market stall holding up one magnificent pearl, his face full of wonder.", shot: "close-up, dramatic light",
            scene: "In a dim, crowded market under striped awnings, a travelling merchant in a fine turban holds up a single magnificent pearl between finger and thumb. A beam of light catches it, and his face glows with wonder as other pearls lie forgotten on the cloth.", chars: [] },
          { key: "t3w09d3-b", label: "Wed · retelling — the garage sale", desc: "Jun happily selling his whole collection of games and toys at a driveway garage sale while Sione and Mia stare, puzzled.", shot: "wide",
            setting: NZ.home,
            scene: "A Saturday garage sale on a suburban driveway. Jun grins as he hands over his skateboard and boxes of games and cards to buyers, his trestle table almost empty. Sione and Mia stand by the letterbox staring at him, completely puzzled.", chars: ["jun", "sione", "mia"] },
          { key: "t3w09d4-a", label: "Thu · compare all four — small to huge", desc: "Jesus sitting beneath a great mustard tree with children around him, birds in the branches above.", shot: "wide, from behind",
            scene: "From behind, Jesus sits in the shade of a great mustard tree with a cluster of children and adults around him, a loaf of bread being shared among them. Birds flutter in the branches overhead, and sunlight dapples the ground.", chars: ["jesus"] },
          { key: "t3w09d4-b", label: "Thu · live it — plant a seed", desc: "Aroha and her friends planting tiny seeds in pots at a school garden bench, one peering through a magnifying glass.", shot: "medium",
            setting: NZ.school,
            scene: "At a garden bench outside the classroom, Aroha drops tiny seeds into small pots of soil while Jun peers at one through a magnifying glass and Sione carries a watering can. Harakeke grows behind them and the morning sun is bright.", chars: ["aroha", "jun", "sione"] }
        ],
        comic: { key: "t3w09-comic", label: "Comic page (week opener)", desc: "Six-panel comic page of four short kingdom parables.",
          panels: "Six panels. Panel 1 (wide): Jesus teaching the crowd from a boat on the lake. Panel 2 (small): a tiny seed on a fingertip. Panel 3 (tall): a huge mustard tree full of birds. Panel 4 (small): a woman kneading a trough of rising dough. Panel 5 (wide): a farmhand uncovering a chest of gold in a field. Panel 6 (wide): a merchant holding up one shining pearl in a market.", chars: ["jesus"] }
      },

      /* ───────────────────────── WEEK 10 — TWO MEN WHO PRAYED ───────────────────────── */
      { n: 10, title: "Two Men Who Prayed", passage: "Luke 18:9–14", verse: "Luke 18:14",
        outline: [
          "Mon 🎭 Two Men Who Prayed acted — in the temple courts a proud Pharisee lists his good deeds; a tax collector stands far off and asks for mercy.",
          "Tue Why Jesus told it: 'to some who were confident of their own righteousness' · Bridge: the persistent widow (Luke 18:1–8) — keep praying · The twist: the tax collector goes home right with God.",
          "Wed 🎭 Today's retelling — end-of-term prayer circle: Aroha prays about how good she's been; Sione quietly says sorry.",
          "Thu Term recap: all ten parables — Who told it? What did it show about God? · God welcomes the humble who ask for mercy (Luke 18:14) · Live it."
        ],
        chars: ["jesus", "aroha", "sione", "mia", "jun"],
        cover: { key: "t3w10-cover", label: "Week cover", desc: "Two men praying in the temple courts: a proud Pharisee standing tall in the light, a tax collector far back with head bowed.", shot: "epic wide, low-angle",
          scene: "The vast stone courts of the Jerusalem temple with towering columns. In the foreground a Pharisee stands tall in fine robes, arms raised, chest out. Far back in the shadow of a pillar, a tax collector stands alone, head bowed, while a single beam of light falls on him.", chars: [] },
        scenes: [
          { key: "t3w10d1-a", label: "Mon · story — the proud prayer", desc: "The Pharisee standing in the temple court with chin raised, counting his good deeds on his fingers.", shot: "low-angle, medium",
            scene: "Low angle in the temple court: a Pharisee in rich robes and wide tassels stands with his chin lifted and eyes half-closed, counting good deeds on his fingers. Worshippers edge around him, and he glances sideways with a sniff toward someone far behind.", chars: [] },
          { key: "t3w10d1-b", label: "Mon · story + role-play card — 'God, have mercy on me'", desc: "The tax collector standing far off by a pillar, eyes down, hand on his chest, asking for mercy.", shot: "medium wide, quiet",
            scene: "Far at the edge of the temple court, beside a huge stone pillar, a tax collector in plain clothes stands with his eyes on the ground and one fist pressed to his chest. He seems tiny and alone, but soft light falls on him from above.", chars: [] },
          { key: "t3w10d2-a", label: "Tue · bridge — the persistent widow", desc: "A determined widow knocking again on a judge's grand door while the judge peers out, annoyed.", shot: "medium, low-angle",
            scene: "A small, determined widow in a dark shawl knocks yet again on the grand carved door of a judge's house. Above her, the judge peers out of an upstairs window, rubbing his temples in exasperation. Footprints in the dust show she has come many times.", chars: [] },
          { key: "t3w10d2-b", label: "Tue · the twist — who went home right with God", desc: "At sunset, the tax collector walking home lighter with his face lifted, while the Pharisee strides past unaware.", shot: "wide, sunset",
            scene: "At sunset on a street below the temple, the tax collector walks home with his face lifted to the glowing sky, shoulders light, a peaceful smile. Behind him the Pharisee strides past with his nose in the air, not noticing him at all.", chars: [] },
          { key: "t3w10d3-a", label: "Wed · retelling — the end-of-term prayer circle", desc: "In a classroom prayer circle, Aroha standing confidently praying about her good deeds while Sione sits at the back with head bowed.", shot: "medium wide, interior",
            setting: NZ.school,
            scene: "An end-of-term classroom with chairs in a circle. Aroha stands confidently, chin up, one hand ticking off her good deeds as she prays aloud. At the back, beside the bookshelf, Sione sits hunched with his head bowed and hands clasped, quietly asking for help.", chars: ["aroha", "sione"] },
          { key: "t3w10d3-b", label: "Wed · retelling — a quiet sorry", desc: "Later, Aroha sitting beside Sione on the steps, both quiet and humble, sharing a moment of real prayer.", shot: "medium, afternoon light",
            setting: NZ.school,
            scene: "After school on the classroom steps, Aroha sits down beside Sione, her confident look gone and her head bowed too. Both have their hands folded quietly. Long afternoon shadows stretch across the empty playground and a native tūī perches on a nearby branch.", chars: ["aroha", "sione"] },
          { key: "t3w10d4-a", label: "Thu · term recap — the storyteller", desc: "Jesus seated on a hillside at sunset telling stories to a crowd of children and adults, seen from behind.", shot: "wide, from behind, sunset",
            scene: "From behind, Jesus sits on a grassy hillside at sunset, one hand raised mid-story, with a large crowd of children and adults gathered close on the slope below him. Fields, a lake and a village spread out under a glowing sky.", chars: ["jesus"] },
          { key: "t3w10d4-b", label: "Thu · term recap — ten stories, one God", desc: "The four friends on a grassy hill above the sea at sunset, sharing their favourite parables.", shot: "wide, silhouette",
            setting: NZ.beach,
            scene: "Aroha, Sione, Mia and Jun sit together on a grassy headland above the sea at sunset, silhouetted against the glowing sky. Mia holds open her sketchbook full of little drawings, and the others lean in, pointing and laughing.", chars: ["aroha", "sione", "mia", "jun"] }
        ],
        comic: { key: "t3w10-comic", label: "Comic page (week opener)", desc: "Six-panel comic page of the Pharisee and the tax collector.",
          panels: "Six panels. Panel 1 (wide): Jesus teaching a group of people who look very pleased with themselves. Panel 2 (tall): a Pharisee standing tall in the temple court, chin raised. Panel 3 (small): his fingers counting good deeds. Panel 4 (tall): a tax collector alone by a pillar, head bowed, fist on chest. Panel 5 (small): a beam of light falling on him. Panel 6 (wide): the tax collector walking home at sunset, face lifted.", chars: ["jesus"] }
      }
    ]
  };
})();
