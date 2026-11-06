/* ===================================================================
   RAMAYANA — CINEMATIC FAN TRIBUTE SITE — script.js
=================================================================== */

(function(){
"use strict";

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* -------------------------------------------------------------
   CHARACTER DATA
   NOTE: Portrait areas use elegant placeholder monograms.
   Replace .char-card-portrait / .char-portrait / .actor-portrait
   background-image rules (see CSS) or inject <img> tags with
   licensed, officially released promotional artwork.
----------------------------------------------------------------*/
const CHARACTERS = [
  {
    id:"rama", main:true, realm:["ayodhya","divine"], name:"Rama",
    role:"Prince of Ayodhya · An incarnation of Vishnu in Hindu tradition",
    background:"Eldest son of King Dasharatha of Ayodhya, born after the king performed the Putrakameshti yagna. Raised and trained in statecraft and the scriptures under Sage Vashishtha.",
    personality:"Known as Maryada Purushottama — the ideal man. Embodies truth, courage, compassion and unwavering commitment to duty, even at great personal cost.",
    family:"Son of Dasharatha and Kaushalya. Husband of Sita. Elder brother of Bharata, Lakshmana and Shatrughna.",
    powers:"In the Hindu tradition, Rama is regarded as an avatar of Lord Vishnu, possessing divine strength and mastery of celestial weapons.",
    importance:"The central figure of the epic — his exile, his marriage to Sita, and his confrontation with Ravana form the spine of the entire narrative.",
    relationships:"Devoted husband to Sita; inseparable bond with Lakshmana; revered by Hanuman as his object of total devotion.",
    actor:"Ranbir Kapoor",
    actorBio:"Ranbir Kapoor is an Indian actor known for his work in Hindi cinema, celebrated for his range across intense and comic roles alike.",
    actorFilms:"Animal, Sanju, Rockstar, Barfi!, Brahmastra",
    actorAwards:""
  },
  {
    id:"sita", main:true, realm:["mithila"], name:"Sita",
    role:"Princess of Mithila · Wife of Rama",
    background:"Daughter of King Janaka of Mithila in the traditional epic. Married Rama after he strung and broke the divine bow of Shiva at her swayamvara.",
    personality:"Represents purity, resilience, dignity and unwavering devotion, choosing to accompany Rama into exile rather than remain in comfort.",
    family:"Daughter of King Janaka. Wife of Rama. Sister-in-law to Lakshmana, Bharata and Shatrughna.",
    powers:"",
    importance:"Her abduction by Ravana sets in motion the war that defines the epic's climax, and her steadfastness through hardship is central to its moral core.",
    relationships:"Devoted wife to Rama; protected by Lakshmana during exile; her rescue becomes Hanuman's and the vanara army's driving purpose.",
    actor:"Sai Pallavi",
    actorBio:"Sai Pallavi is an Indian actress and trained dancer known for her work across Malayalam, Tamil and Telugu cinema.",
    actorFilms:"Premam, Fidaa, Gargi, Love Story",
    actorAwards:""
  },
  {
    id:"ravana", main:true, realm:["lanka"], name:"Ravana",
    role:"King of Lanka · A great devotee of Lord Shiva",
    background:"The powerful and learned ruler of Lanka, deeply versed in the scriptures and a formidable devotee of Shiva, traditionally depicted with ten heads symbolising his vast knowledge.",
    personality:"Known for his intellect, ambition, strength and pride — qualities that make him both a formidable ruler and the architect of his own downfall.",
    family:"Son of Vishrava and Kaikasi. Husband of Mandodari. Brother of Surpanakha, Kumbhakarna and Vibhishana.",
    powers:"Traditionally depicted with ten heads and twenty arms, immense physical strength, and boons earned through severe penance.",
    importance:"His abduction of Sita, driven by Surpanakha's humiliation, directly triggers the war that forms the epic's central conflict.",
    relationships:"Antagonist to Rama; husband to Mandodari; brother to Surpanakha, Kumbhakarna and Vibhishana, the last of whom ultimately turns against him.",
    actor:"Yash",
    actorBio:"Yash is an Indian actor and producer known for the K.G.F. film series and other prominent Kannada-language productions. He also co-produces Ramayana through his banner, Monster Mind Creations.",
    actorFilms:"K.G.F.: Chapter 1, K.G.F.: Chapter 2, Toxic",
    actorAwards:""
  },
  {
    id:"lakshmana", main:true, realm:["ayodhya"], name:"Lakshmana",
    role:"Younger Brother of Rama",
    background:"Son of Dasharatha and Sumitra, raised alongside Rama and trained in the same disciplines of statecraft and warfare.",
    personality:"Represents loyalty, courage and dedication — choosing voluntary exile alongside Rama and Sita out of devotion to his brother.",
    family:"Son of Dasharatha and Sumitra. Twin brother of Shatrughna. Husband of Urmila. Younger brother of Rama and Bharata.",
    powers:"",
    importance:"His protection of Sita and unwavering service to Rama through exile make him one of the epic's central figures of fraternal duty.",
    relationships:"Fiercely protective of Rama and Sita; husband to Urmila, who remains in Ayodhya during his exile.",
    actor:"Ravie Dubey",
    actorBio:"Ravie Dubey is an Indian actor and producer, widely known for his work in Indian television before moving into film and production.",
    actorFilms:"",
    actorAwards:""
  },
  {
    id:"hanuman", main:true, realm:["divine"], name:"Hanuman",
    role:"Devoted Follower of Rama",
    background:"Traditionally regarded as the son of Anjana and the wind deity Vayu, serving as a minister to Sugriva, king of the vanaras of Kishkindha.",
    personality:"A symbol of selfless service and bhakti, known for extraordinary strength, courage and intelligence placed entirely in service of Rama.",
    family:"Son of Anjana and Vayu.",
    powers:"Immense physical strength, the ability to change size at will, and the power to leap across the ocean to Lanka.",
    importance:"His discovery of Sita in Lanka and his unwavering devotion to Rama make him one of the most revered figures in the epic.",
    relationships:"Devoted servant of Rama; close ally of Sugriva; the one who finally locates Sita in captivity.",
    actor:"Sunny Deol",
    actorBio:"Sunny Deol is an Indian actor and politician, known for a long career in Hindi cinema spanning action and drama roles.",
    actorFilms:"Gadar: Ek Prem Katha, Ghayal, Border",
    actorAwards:""
  },

  /* -------------------- SUPPORTING CHARACTERS -------------------- */
  { id:"dasharatha", realm:["ayodhya"], name:"King Dasharatha", role:"King of Ayodhya · Father of Rama",
    background:"Ruler of Ayodhya whose long-awaited sons are born after he performs the Putrakameshti yagna.", personality:"A devoted father bound by his word, torn apart by the promise he made to Kaikeyi.",
    family:"Husband of Kaushalya, Kaikeyi and Sumitra. Father of Rama, Bharata, Lakshmana and Shatrughna.", powers:"", importance:"His decision to honour Kaikeyi's boons sets Rama's exile in motion.", relationships:"Father to all four princes; deeply devoted to Rama.",
    actor:"Arun Govil", actorBio:"Arun Govil is an Indian actor widely recognised for portraying Lord Rama in the iconic 1987 television series Ramayan.", actorFilms:"", actorAwards:"" },

  { id:"kaikeyi", realm:["ayodhya"], name:"Kaikeyi", role:"Queen of Ayodhya",
    background:"Dasharatha's second wife, who once saved his life in battle and was granted two boons in return.", personality:"Loving toward her stepsons until persuaded by Manthara, after which ambition for her son Bharata overrides her affection.",
    family:"Wife of Dasharatha. Mother of Bharata.", powers:"", importance:"Her invocation of the two boons triggers Rama's fourteen-year exile.", relationships:"Stepmother to Rama, Lakshmana and Shatrughna; mother to Bharata; influenced by her maid Manthara.",
    actor:"Lara Dutta", actorBio:"Lara Dutta is an Indian actress and former Miss Universe (2000), known for her work across Hindi film and television.", actorFilms:"", actorAwards:"Miss Universe 2000" },

  { id:"kaushalya", realm:["ayodhya"], name:"Kaushalya", role:"Queen of Ayodhya · Mother of Rama",
    background:"Dasharatha's senior queen and Rama's birth mother.", personality:"Gentle and devoted, bearing the grief of Rama's exile with quiet dignity.",
    family:"Wife of Dasharatha. Mother of Rama.", powers:"", importance:"Her sorrow at Rama's departure underscores the human cost of the exile.", relationships:"Mother to Rama; co-wife to Kaikeyi and Sumitra.",
    actor:"Indira Krishnan", actorBio:"Indian actress with experience in Hindi television and film.", actorFilms:"", actorAwards:"" },

  { id:"sumitra", realm:["ayodhya"], name:"Sumitra", role:"Queen of Ayodhya · Mother of Lakshmana and Shatrughna",
    background:"Dasharatha's third wife.", personality:"Known for her wisdom and composure, encouraging Lakshmana to follow Rama into exile.",
    family:"Wife of Dasharatha. Mother of Lakshmana and Shatrughna.", powers:"", importance:"Her counsel to Lakshmana reflects the epic's themes of duty over comfort.", relationships:"Mother to the twins Lakshmana and Shatrughna.",
    actor:"Sonal Jha", actorBio:"Indian actress working in Hindi television and film.", actorFilms:"", actorAwards:"" },

  { id:"bharata", realm:["ayodhya"], name:"Bharata", role:"Prince of Ayodhya",
    background:"Son of Dasharatha and Kaikeyi, away in his maternal uncle's kingdom when his mother claims her boons.", personality:"Deeply loyal to Rama, refusing the throne he did not seek and ruling as a steward in his brother's name.",
    family:"Son of Dasharatha and Kaikeyi. Husband of Mandavi.", powers:"", importance:"His refusal to accept the throne reinforces the epic's emphasis on rightful duty over ambition.", relationships:"Devoted to Rama despite his mother's actions; husband to Mandavi.",
    actor:"Adinath Kothare", actorBio:"Indian actor and filmmaker known for his work in Marathi and Hindi cinema.", actorFilms:"", actorAwards:"" },

  { id:"shatrughna", realm:["ayodhya"], name:"Shatrughna", role:"Prince of Ayodhya",
    background:"Youngest son of Dasharatha, twin brother of Lakshmana.", personality:"Loyal and supportive, standing by Bharata during the period of Rama's exile.",
    family:"Son of Dasharatha and Sumitra. Twin brother of Lakshmana. Husband of Shrutakirti.", powers:"", importance:"Represents steadfast family loyalty during Ayodhya's most difficult years.", relationships:"Close to Bharata; twin of Lakshmana.",
    actor:"Nitish Sharma", actorBio:"Indian actor working in Hindi film and television.", actorFilms:"", actorAwards:"" },

  { id:"urmila", realm:["mithila"], name:"Urmila", role:"Princess of Mithila · Wife of Lakshmana",
    background:"Sita's younger sister, married to Lakshmana alongside Rama and Sita's wedding.", personality:"Known in tradition for her quiet sacrifice, remaining in Ayodhya while Lakshmana accompanies Rama into exile.",
    family:"Daughter of King Janaka. Wife of Lakshmana. Sister of Sita.", powers:"", importance:"Embodies the unseen sacrifices made by those who remain behind during the exile.", relationships:"Sister to Sita; wife to Lakshmana.",
    actor:"Sonia Balani", actorBio:"Indian actress known for her work in Hindi television.", actorFilms:"", actorAwards:"" },

  { id:"mandavi", realm:["mithila"], name:"Mandavi", role:"Princess of Mithila · Wife of Bharata",
    background:"Daughter of King Janaka's brother Kushadhwaja, married to Bharata in the joint wedding at Mithila.", personality:"Supportive of Bharata through his years of stewardship over Ayodhya.",
    family:"Wife of Bharata.", powers:"", importance:"Part of the joint wedding that unites the royal houses of Ayodhya and Mithila.", relationships:"Wife to Bharata.",
    actor:"Riya Kapoor", actorBio:"Indian actress.", actorFilms:"", actorAwards:"" },

  { id:"shrutakirti", realm:["mithila"], name:"Shrutakirti", role:"Princess of Mithila · Wife of Shatrughna",
    background:"Daughter of Kushadhwaja, married to Shatrughna in the joint Mithila wedding.", personality:"Loyal companion to Shatrughna.",
    family:"Wife of Shatrughna.", powers:"", importance:"Completes the joint wedding of the four princes of Ayodhya to the daughters of Mithila.", relationships:"Wife to Shatrughna.",
    actor:"Surbhi Das", actorBio:"Indian actress.", actorFilms:"", actorAwards:"" },

  { id:"mandodari", realm:["lanka"], name:"Mandodari", role:"Queen of Lanka · Wife of Ravana",
    background:"Ravana's chief queen, known in the tradition for her wisdom and virtue despite her husband's actions.", personality:"Repeatedly counsels Ravana to return Sita and avoid war, embodying reason amid Lanka's pride.",
    family:"Wife of Ravana.", powers:"", importance:"Her warnings to Ravana highlight the epic's theme that wisdom unheeded leads to ruin.", relationships:"Wife to Ravana; sister-in-law to Vibhishana, Kumbhakarna and Surpanakha.",
    actor:"Kajal Aggarwal", actorBio:"Kajal Aggarwal is an Indian actress known for her work across Telugu, Tamil and Hindi cinema.", actorFilms:"", actorAwards:"" },

  { id:"surpanakha", realm:["lanka"], name:"Surpanakha", role:"Sister of Ravana",
    background:"A rakshasi who encounters Rama and Lakshmana in the forest and is rebuffed and wounded by Lakshmana.", personality:"Proud and vengeful, her humiliation becomes the catalyst for Ravana's abduction of Sita.",
    family:"Daughter of Vishrava and Kaikasi. Sister of Ravana, Kumbhakarna and Vibhishana.", powers:"", importance:"Her encounter with Rama and Lakshmana is the spark that leads directly to Sita's abduction.", relationships:"Sister to Ravana; reports her humiliation to him, prompting his plan of revenge.",
    actor:"Rakul Preet Singh", actorBio:"Rakul Preet Singh is an Indian actress known for her work across Telugu, Tamil and Hindi cinema.", actorFilms:"", actorAwards:"" },

  { id:"manthara", realm:["ayodhya"], name:"Manthara", role:"Kaikeyi's Maidservant",
    background:"A hunchbacked maid in Kaikeyi's service in the traditional epic.", personality:"Cunning and persuasive, manipulating Kaikeyi's fears to turn her against Rama.",
    family:"", powers:"", importance:"Her manipulation of Kaikeyi is the direct trigger for Rama's exile.", relationships:"Confidante and adviser to Kaikeyi.",
    actor:"Sheeba Chaddha", actorBio:"Sheeba Chaddha is an Indian actress known for her character work across Hindi film and television.", actorFilms:"", actorAwards:"" },

  { id:"indra", realm:["divine"], name:"Lord Indra", role:"King of the Devas",
    background:"Ruler of the heavens in Hindu tradition, who appears at various points across the wider epic.", personality:"Powerful and occasionally capricious, acting to preserve the balance of dharma.",
    family:"", powers:"Sovereignty over the devas and command of thunder and rain.", importance:"Represents the celestial order that Rama's actions on earth ultimately uphold.", relationships:"",
    actor:"Kunal Kapoor", actorBio:"Indian actor known for his work in Hindi film.", actorFilms:"", actorAwards:"" },

  { id:"kumbhakarna", realm:["lanka"], name:"Kumbhakarna", role:"Brother of Ravana",
    background:"Ravana's giant brother, famed in tradition for his immense size and long periods of sleep.", personality:"Loyal to Ravana despite privately disagreeing with his decision to abduct Sita.",
    family:"Son of Vishrava and Kaikasi. Brother of Ravana, Surpanakha and Vibhishana.", powers:"Enormous physical strength and size.", importance:"Fights for Lanka out of loyalty to his brother, despite knowing the cause is unjust.", relationships:"Brother to Ravana, whom he supports in battle regardless of his own misgivings.",
    actor:"Faisal Malik", actorBio:"Indian actor known for his character roles in Hindi film.", actorFilms:"", actorAwards:"" },

  { id:"vidyutjihva", realm:["lanka"], name:"Vidyutjihva", role:"Associate of Ravana",
    background:"A figure from the wider Ramayana tradition associated with Ravana's court.", personality:"", family:"", powers:"", importance:"", relationships:"",
    actor:"Vivek Oberoi", actorBio:"Vivek Oberoi is an Indian actor known for his work in Hindi cinema.", actorFilms:"", actorAwards:"" },

  { id:"jatayu", realm:["divine"], name:"Jatayu", role:"The Vulture King",
    background:"An aged vulture and friend of King Dasharatha who attempts to stop Ravana from abducting Sita.", personality:"Brave and self-sacrificing, fighting Ravana despite being outmatched.",
    family:"", powers:"Flight and the strength to battle Ravana in the sky.", importance:"His dying account of Sita's abduction gives Rama the first clue in his search for her.", relationships:"Loyal friend to Dasharatha; gives his life attempting to protect Sita.",
    actor:"Anupam Kher (voice)", actorBio:"Anupam Kher is a veteran Indian actor with an extensive career spanning Hindi cinema and international productions.", actorFilms:"", actorAwards:"" },

  { id:"vibhishana", realm:["lanka"], name:"Vibhishana", role:"Brother of Ravana",
    background:"Ravana's youngest brother, known for his righteousness.", personality:"Principled and devoted to dharma, repeatedly urging Ravana to return Sita.",
    family:"Son of Vishrava and Kaikasi. Brother of Ravana, Kumbhakarna and Surpanakha.", powers:"", importance:"His eventual alliance with Rama reflects the epic's theme that righteousness matters more than blood.", relationships:"Brother to Ravana, whom he ultimately opposes on moral grounds.",
    actor:"Harish Uthaman", actorBio:"Indian actor known for his work across Tamil, Telugu and Hindi cinema.", actorFilms:"", actorAwards:"" },

  { id:"maricha", realm:["lanka"], name:"Maricha", role:"Demon in Ravana's service",
    background:"A rakshasa who, at Ravana's command, disguises himself as a golden deer to lure Rama away from the hermitage.", personality:"Reluctant but ultimately obedient to Ravana, having previously suffered at Rama's hands.",
    family:"", powers:"Shapeshifting ability.", importance:"His deception as the golden deer directly enables Sita's abduction.", relationships:"Acts on Ravana's orders despite his own fear of Rama.",
    actor:"Saurabh Sachdeva", actorBio:"Indian actor known for his character work in Hindi film.", actorFilms:"", actorAwards:"" },

  { id:"kaikasi", realm:["lanka"], name:"Kaikasi", role:"Mother of Ravana",
    background:"Wife of the sage Vishrava and mother of Ravana, Kumbhakarna, Surpanakha and Vibhishana.", personality:"", family:"Wife of Vishrava. Mother of Ravana, Kumbhakarna, Surpanakha and Vibhishana.", powers:"", importance:"Her lineage connects Ravana's family to both sage and rakshasa ancestry.", relationships:"Mother to Ravana and his siblings.",
    actor:"Shobana", actorBio:"Shobana is an acclaimed Indian actress and classical dancer known for her work in Malayalam and Tamil cinema.", actorFilms:"", actorAwards:"" },

  { id:"agastya", realm:["divine"], name:"Sage Agastya", role:"Revered Sage",
    background:"A revered sage of the Dandaka forest tradition, known for his wisdom and the weapons he gifts to Rama.", personality:"Wise and generous.", family:"", powers:"", importance:"Guides and equips Rama during his time in the forest in the traditional epic.", relationships:"",
    actor:"Mukesh Tiwari", actorBio:"Mukesh Tiwari is an Indian actor known for his character roles across Hindi cinema.", actorFilms:"", actorAwards:"" },

  { id:"vashishtha", realm:["ayodhya"], name:"Sage Vashishtha", role:"Royal Guru of Ayodhya",
    background:"The royal preceptor who trains Rama and his brothers in Ayodhya.", personality:"Wise and measured, a steady moral anchor for the royal family.",
    family:"", powers:"", importance:"Shapes Rama's early education and counsels Dasharatha through the crisis of the exile.", relationships:"Guru to Rama and his brothers.",
    actor:"Shishir Sharma", actorBio:"Shishir Sharma is an Indian actor known for his extensive character work in Hindi film and television.", actorFilms:"", actorAwards:"" },

  { id:"vishwamitra", realm:["divine"], name:"Sage Vishwamitra", role:"Sage who Summons Rama",
    background:"A powerful sage who arrives in Ayodhya to request Rama's help against demons threatening his hermitage, including Tataka and Subahu.", personality:"Determined and formidable, both a warrior-turned-sage and a teacher.",
    family:"", powers:"", importance:"His arrival begins Rama's first journey beyond Ayodhya, setting the epic's events in motion.", relationships:"Takes Rama and Lakshmana under his guidance for their earliest trials.",
    actor:"Ajinkya Deo", actorBio:"Ajinkya Deo is an Indian actor known for his work in Hindi and Marathi cinema.", actorFilms:"", actorAwards:"" },

  { id:"subahu", realm:["lanka"], name:"Subahu", role:"Demon Opposed by Vishwamitra",
    background:"A rakshasa, brother of Maricha, who disrupts Vishwamitra's sacrificial rites in the traditional epic.", personality:"", family:"Associated with Tataka's lineage.", powers:"", importance:"His disruption of Vishwamitra's rites is among Rama's earliest trials.", relationships:"",
    actor:"Parminder Chadha", actorBio:"Indian actor.", actorFilms:"", actorAwards:"" },

  { id:"sumali", realm:["lanka"], name:"Sumali", role:"Grandfather of Ravana",
    background:"A rakshasa chief and maternal grandfather of Ravana in the traditional lineage.", personality:"", family:"Maternal grandfather of Ravana.", powers:"", importance:"Part of the ancestral rakshasa lineage behind Ravana's claim to power.", relationships:"",
    actor:"Chetan Hansraj", actorBio:"Indian actor known for his work in Hindi television.", actorFilms:"", actorAwards:"" },

  { id:"tataka", realm:["divine"], name:"Tataka", role:"Demoness of the Forest",
    background:"A powerful demoness terrorising Vishwamitra's hermitage, ultimately confronted by Rama.", personality:"Fierce and formidable.", family:"", powers:"Great strength and the ability to change form.", importance:"One of Rama's first battles in the traditional epic, testing his resolve as a warrior.", relationships:"",
    actor:"Kanchan Chetal", actorBio:"Indian actress.", actorFilms:"", actorAwards:"" },

  { id:"young-surpanakha", realm:["lanka"], name:"Young Surpanakha", role:"Surpanakha in Childhood",
    background:"A younger depiction of Surpanakha shown within the film's broader family storyline.", personality:"", family:"Daughter of Vishrava and Kaikasi.", powers:"", importance:"", relationships:"",
    actor:"Dishita Sehgal", actorBio:"Indian child actress.", actorFilms:"", actorAwards:"" },

  { id:"young-sita", realm:["mithila"], name:"Young Sita", role:"Sita in Childhood",
    background:"A younger depiction of Sita shown within the film's portrayal of her upbringing in Mithila.", personality:"", family:"Daughter of King Janaka.", powers:"", importance:"", relationships:"",
    actor:"Kiara Sadh", actorBio:"Indian child actress.", actorFilms:"", actorAwards:"" },

  { id:"mahaguru", realm:["mithila"], name:"Mithila Mahaguru", role:"Teacher at Mithila",
    background:"A teaching figure associated with the royal court of Mithila.", personality:"", family:"", powers:"", importance:"", relationships:"",
    actor:"Pravin Manjarekar", actorBio:"Indian actor.", actorFilms:"", actorAwards:"" },

  { id:"sumantra", realm:["ayodhya"], name:"Sumantra", role:"Royal Charioteer of Ayodhya",
    background:"Dasharatha's trusted charioteer and minister, who drives Rama, Sita and Lakshmana to the forest at the start of their exile.", personality:"Loyal and sorrowful, deeply attached to the royal family.",
    family:"", powers:"", importance:"His return to Ayodhya without Rama marks the moment the kingdom fully confronts the exile.", relationships:"Devoted servant of Dasharatha and the princes.",
    actor:"Satyen Chaturvedi", actorBio:"Indian actor known for his work in Hindi television and film.", actorFilms:"", actorAwards:"" },
];

const WORLD = [
  { name:"Ayodhya", desc:"The royal kingdom of Rama, seat of the Ikshvaku dynasty — a city of palaces, pillared halls and golden spires on the banks of the Sarayu river." },
  { name:"Mithila", desc:"The kingdom of King Janaka, home to Sita and the site of her swayamvara, where Rama strings the divine bow of Shiva." },
  { name:"Dandaka Forest", desc:"The vast wilderness through which Rama, Sita and Lakshmana travel during their exile, home to sages, hermitages and demons alike." },
  { name:"Panchavati", desc:"The forest settlement on the Godavari where Rama, Sita and Lakshmana build their hermitage, and where Surpanakha's encounter unfolds." },
  { name:"Lanka", desc:"Ravana's island kingdom across the ocean — a realm of golden towers and formidable power, and the site of the epic's climactic war." },
  { name:"Kishkindha", desc:"The kingdom of the vanaras, ruled by Sugriva, where Rama forges the alliance that leads to Hanuman's search for Sita." },
];

/* -------------------------------------------------------------
   LOADER
----------------------------------------------------------------*/
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => loader.classList.add('loader-hidden'), 900);
});
// Safety: never trap the user behind the loader
setTimeout(() => {
  const loader = document.getElementById('loader');
  if(loader) loader.classList.add('loader-hidden');
}, 3500);

/* -------------------------------------------------------------
   NAVIGATION
----------------------------------------------------------------*/
const siteNav = document.getElementById('site-nav');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

window.addEventListener('scroll', () => {
  siteNav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive:true });

navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', open);
});

document.querySelectorAll('[data-nav]').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

const sections = document.querySelectorAll('main section[id]');
const navAnchors = document.querySelectorAll('[data-nav]');
const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const id = entry.target.id;
      navAnchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#'+id));
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });
sections.forEach(s => navObserver.observe(s));

/* -------------------------------------------------------------
   SCROLL REVEAL
----------------------------------------------------------------*/
const revealEls = document.querySelectorAll('.reveal-up, .reveal-letters');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold:.15 });
revealEls.forEach(el => revealObserver.observe(el));

/* -------------------------------------------------------------
   ATMOSPHERE CANVAS — floating golden particles
----------------------------------------------------------------*/
if(!prefersReducedMotion){
  const canvas = document.getElementById('atmosphere');
  const ctx = canvas.getContext('2d');
  let w, h, particles = [];
  let mouse = { x:null, y:null };

  function resize(){
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });

  const COUNT = window.innerWidth < 700 ? 34 : 70;
  for(let i=0;i<COUNT;i++){
    particles.push({
      x: Math.random()*w, y: Math.random()*h,
      r: Math.random()*1.8 + .4,
      vy: -(Math.random()*.35 + .08),
      vx: (Math.random()-.5)*.15,
      a: Math.random()*.6 + .15,
      tw: Math.random()*Math.PI*2
    });
  }

  function tick(){
    ctx.clearRect(0,0,w,h);
    particles.forEach(p => {
      p.tw += .02;
      p.y += p.vy; p.x += p.vx;
      if(mouse.x !== null){
        const dx = p.x - mouse.x, dy = p.y - mouse.y;
        const dist = Math.sqrt(dx*dx+dy*dy);
        if(dist < 110){ p.x += dx/dist*.6; p.y += dy/dist*.6; }
      }
      if(p.y < -10){ p.y = h+10; p.x = Math.random()*w; }
      if(p.x < -10) p.x = w+10;
      if(p.x > w+10) p.x = -10;
      const alpha = p.a * (0.6 + 0.4*Math.sin(p.tw));
      ctx.beginPath();
      ctx.fillStyle = `rgba(232,200,116,${alpha})`;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      ctx.fill();
    });
    requestAnimationFrame(tick);
  }
  tick();
}

/* -------------------------------------------------------------
   HELPERS
----------------------------------------------------------------*/
function initials(name){
  return name.replace(/\(.*?\)/g,'').trim().split(/\s+/).slice(0,2).map(w=>w[0]).join('');
}
function fieldOrFallback(value, fallback){
  return value && value.trim() ? value : fallback;
}

/* -------------------------------------------------------------
   RENDER CHARACTER CARDS
----------------------------------------------------------------*/
const gridMain = document.getElementById('char-grid-main');
const gridSupport = document.getElementById('char-grid-support');

function cardHTML(c){
  return `
    <article class="char-card" data-id="${c.id}" tabindex="0" role="button" aria-label="View ${c.name}'s profile">
      <div class="char-card-portrait"><span class="ph">${initials(c.name)}</span></div>
      <div class="char-card-body">
        <h4 class="char-card-name">${c.name}</h4>
        <p class="char-card-role">${c.role}</p>
        <p class="char-card-actor">${c.actor}</p>
      </div>
    </article>`;
}

function renderGrids(filter='all', query=''){
  const q = query.trim().toLowerCase();
  const matches = c => (filter==='all' || c.realm.includes(filter)) &&
    (!q || c.name.toLowerCase().includes(q) || c.actor.toLowerCase().includes(q) || c.role.toLowerCase().includes(q));

  const mains = CHARACTERS.filter(c => c.main && matches(c));
  const supports = CHARACTERS.filter(c => !c.main && matches(c));

  gridMain.innerHTML = mains.map(cardHTML).join('') || '';
  gridSupport.innerHTML = supports.map(cardHTML).join('') || '';

  document.querySelectorAll('.char-subheading')[0].style.display = mains.length ? '' : 'none';
  document.querySelectorAll('.char-subheading')[1].style.display = supports.length ? '' : 'none';

  bindCardEvents();
}
renderGrids();

function bindCardEvents(){
  document.querySelectorAll('.char-card').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.id));
    card.addEventListener('keydown', e => {
      if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); openModal(card.dataset.id); }
    });
  });
}

/* Filters */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderGrids(btn.dataset.filter, document.getElementById('char-search-input').value);
  });
});
document.getElementById('char-search-input').addEventListener('input', (e) => {
  const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
  renderGrids(activeFilter, e.target.value);
});

/* -------------------------------------------------------------
   CHARACTER MODAL
----------------------------------------------------------------*/
const modal = document.getElementById('char-modal');
let currentIndex = 0;
let activeList = CHARACTERS;

function openModal(id){
  activeList = CHARACTERS;
  currentIndex = activeList.findIndex(c => c.id === id);
  fillModal(activeList[currentIndex]);
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
}
function closeModal(){
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
}
function fillModal(c){
  document.getElementById('modal-char-portrait').innerHTML = `<span class="ph">${initials(c.name)}</span>`;
  document.getElementById('modal-char-realm').textContent = c.realm.join(' · ');
  document.getElementById('modal-char-name').textContent = c.name;
  document.getElementById('modal-char-role').textContent = c.role;
  document.getElementById('modal-char-background').textContent = fieldOrFallback(c.background, 'Details are drawn from the traditional Ramayana.');
  document.getElementById('modal-char-personality').textContent = fieldOrFallback(c.personality, '—');
  document.getElementById('modal-char-family').textContent = fieldOrFallback(c.family, '—');
  document.getElementById('modal-char-importance').textContent = fieldOrFallback(c.importance, '—');
  document.getElementById('modal-char-relationships').textContent = fieldOrFallback(c.relationships, '—');
  const powersWrap = document.getElementById('modal-char-powers-wrap');
  if(c.powers){ powersWrap.style.display = ''; document.getElementById('modal-char-powers').textContent = c.powers; }
  else { powersWrap.style.display = 'none'; }

  document.getElementById('modal-actor-portrait').innerHTML = `<span class="ph">${initials(c.actor)}</span>`;
  document.getElementById('modal-actor-name').textContent = c.actor;
  document.getElementById('modal-actor-bio').textContent = fieldOrFallback(c.actorBio, 'Biography to be confirmed.');
  document.getElementById('modal-actor-films').textContent = fieldOrFallback(c.actorFilms, 'Not publicly confirmed.');
  const awardsWrap = document.getElementById('modal-actor-awards-wrap');
  if(c.actorAwards){ awardsWrap.style.display=''; document.getElementById('modal-actor-awards').textContent = c.actorAwards; }
  else { awardsWrap.style.display = 'none'; }

  modal.querySelector('.char-modal-scroll').scrollTo({top:0, behavior: prefersReducedMotion ? 'auto' : 'smooth'});
}

document.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeModal));
document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  if(modal.classList.contains('open')){
    if(e.key === 'ArrowRight') navModal(1);
    if(e.key === 'ArrowLeft') navModal(-1);
  }
});
document.getElementById('char-next').addEventListener('click', () => navModal(1));
document.getElementById('char-prev').addEventListener('click', () => navModal(-1));
function navModal(dir){
  currentIndex = (currentIndex + dir + activeList.length) % activeList.length;
  fillModal(activeList[currentIndex]);
}

/* -------------------------------------------------------------
   WORLD GRID
----------------------------------------------------------------*/
const worldGrid = document.getElementById('world-grid');
const worldGradients = [
  'linear-gradient(160deg, rgba(201,162,75,.45), rgba(10,7,6,.95))',
  'linear-gradient(160deg, rgba(224,137,44,.4), rgba(10,7,6,.95))',
  'linear-gradient(160deg, rgba(60,90,40,.45), rgba(10,7,6,.95))',
  'linear-gradient(160deg, rgba(40,80,70,.4), rgba(10,7,6,.95))',
  'linear-gradient(160deg, rgba(122,12,30,.55), rgba(10,7,6,.95))',
  'linear-gradient(160deg, rgba(90,60,30,.45), rgba(10,7,6,.95))',
];
worldGrid.innerHTML = WORLD.map((loc,i) => `
  <div class="world-card reveal-up">
    <div class="world-card-bg" style="background:${worldGradients[i % worldGradients.length]}"></div>
    <div class="world-card-overlay">
      <h3>${loc.name}</h3>
      <p>${loc.desc}</p>
    </div>
  </div>
`).join('');
worldGrid.querySelectorAll('.reveal-up').forEach(el => revealObserver.observe(el));

})();
