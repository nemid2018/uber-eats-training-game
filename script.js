/* ═══════════════════════════════════════════════════════════════════════════
   UBER EATS SALES ACADEMY — v3
   ═══════════════════════════════════════════════════════════════════════════ */

// ─── CONSTANTS ───────────────────────────────────────────────────────────────

const MAP_POSITIONS = [
  { x: 20, y: 12 },  // Little Italy
  { x: 72, y: 28 },  // Chinatown
  { x: 22, y: 46 },  // Mercado District
  { x: 74, y: 64 },  // Sakura Quarter
  { x: 42, y: 82 },  // The Green Mile
];

const LEVELS = [
  { threshold: 0,   name: 'Rookie Rep',         emoji: '🟤', xpNeeded: 100  },
  { threshold: 100, name: 'Rising Star',         emoji: '⭐', xpNeeded: 150  },
  { threshold: 250, name: 'Sales Pro',           emoji: '🔵', xpNeeded: 250  },
  { threshold: 500, name: 'Account Executive',   emoji: '🟣', xpNeeded: 400  },
  { threshold: 900, name: 'Top Performer',       emoji: '🏆', xpNeeded: 9999 },
];

const DISTRICTS = [
  {
    id: 'italian',
    name: 'Little Italy',
    emoji: '🍕',
    color: '#e63946',
    description: 'Traditional restaurant owners who value family legacy and craft. Expect skepticism about tech and a strong sense of pride in their craft.',
    personaId: 'marco',
    scenarioIds: ['s01', 's02', 's03'],
    scenarioPool: ['s01','s02','s03','it01','it02','it03','it04','it05','it06','it07','it08','it09','it10','it11','it12','it13','it14','it15','it16','it17','it18','it19','it20','it21','it22','it23','it24','it25','it26','it27','it28','it29','it30','it31','it32','it33','it34','it35','it36','it37','it38','it39','it40','it41','it42','it43','it44','it45','it46','it47','it48','it49','it50','it51','it52','it53','it54','it55','it56','it57','it58','it59','it60','it61','it62','it63','it64','it65','it66','it67','it68','it69','it70','it71','it72','it73','it74','it75','it76','it77','it78','it79','it80','it81','it82','it83','it84','it85','it86','it87','it88','it89','it90','it91','it92','it93','it94','it95','it96','it97'],
    playbookUnlock: 'reframing',
  },
  {
    id: 'chinese',
    name: 'Chinatown',
    emoji: '🥢',
    color: '#f4a261',
    description: 'High-volume operations run by time-pressed managers. Every conversation has to prove its worth in the first 30 seconds.',
    personaId: 'chen',
    scenarioIds: ['s04', 's05', 's06'],
    scenarioPool: ['s04','s05','s06','ch01','ch02','ch03','ch04','ch05','ch06','ch07','ch08','ch09','ch10','ch11','ch12','ch13','ch14','ch15','ch16','ch17','ch18','ch19','ch20','ch21','ch22','ch23','ch24','ch25','ch26','ch27','ch28','ch29','ch30','ch31','ch32','ch33','ch34','ch35','ch36','ch37','ch38','ch39','ch40','ch41','ch42','ch43','ch44','ch45','ch46','ch47','ch48','ch49','ch50','ch51','ch52','ch53','ch54','ch55','ch56','ch57','ch58','ch59','ch60','ch61','ch62','ch63','ch64','ch65','ch66','ch67','ch68','ch69','ch70','ch71','ch72','ch73','ch74','ch75','ch76','ch77','ch78','ch79','ch80','ch81','ch82','ch83','ch84','ch85','ch86','ch87','ch88','ch89','ch90','ch91','ch92','ch93','ch94','ch95','ch96','ch97'],
    playbookUnlock: 'social-proof',
  },
  {
    id: 'mexican',
    name: 'Mercado District',
    emoji: '🌮',
    color: '#2a9d8f',
    description: 'Community-rooted businesses with razor-thin margins. They need a partner, not another vendor. Build trust or lose the deal.',
    personaId: 'rosa',
    scenarioIds: ['s07', 's08', 's09'],
    scenarioPool: ['s07','s08','s09','mx01','mx02','mx03','mx04','mx05','mx06','mx07','mx08','mx09','mx10','mx11','mx12','mx13','mx14','mx15','mx16','mx17','mx18','mx19','mx20','mx21','mx22','mx23','mx24','mx25','mx26','mx27','mx28','mx29','mx30','mx31','mx32','mx33','mx34','mx35','mx36','mx37','mx38','mx39','mx40','mx41','mx42','mx43','mx44','mx45','mx46','mx47','mx48','mx49','mx50','mx51','mx52','mx53','mx54','mx55','mx56','mx57','mx58','mx59','mx60','mx61','mx62','mx63','mx64','mx65','mx66','mx67','mx68','mx69','mx70','mx71','mx72','mx73','mx74','mx75','mx76','mx77','mx78','mx79','mx80','mx81','mx82','mx83','mx84','mx85','mx86','mx87','mx88','mx89','mx90','mx91','mx92','mx93','mx94','mx95','mx96','mx97'],
    playbookUnlock: 'roi-demo',
  },
  {
    id: 'japanese',
    name: 'Sakura Quarter',
    emoji: '🍱',
    color: '#8338ec',
    description: 'Upscale dining owners with a laser focus on brand and quality. They will reject anything that feels misaligned with their image.',
    personaId: 'yuki',
    scenarioIds: ['s10', 's11', 's12'],
    scenarioPool: ['s10','s11','s12','jp01','jp02','jp03','jp04','jp05','jp06','jp07','jp08','jp09','jp10','jp11','jp12','jp13','jp14','jp15','jp16','jp17','jp18','jp19','jp20','jp21','jp22','jp23','jp24','jp25','jp26','jp27','jp28','jp29','jp30','jp31','jp32','jp33','jp34','jp35','jp36','jp37','jp38','jp39','jp40','jp41','jp42','jp43','jp44','jp45','jp46','jp47','jp48','jp49','jp50','jp51','jp52','jp53','jp54','jp55','jp56','jp57','jp58','jp59','jp60','jp61','jp62','jp63','jp64','jp65','jp66','jp67','jp68','jp69','jp70','jp71','jp72','jp73','jp74','jp75','jp76','jp77','jp78','jp79','jp80','jp81','jp82','jp83','jp84','jp85','jp86','jp87','jp88','jp89','jp90','jp91','jp92','jp93','jp94','jp95','jp96','jp97'],
    playbookUnlock: 'risk-reversal',
  },
  {
    id: 'health',
    name: 'The Green Mile',
    emoji: '🥗',
    color: '#06C167',
    description: 'Data-driven millennial founders who have seen every pitch before. Back everything with numbers or get dismissed instantly.',
    personaId: 'alex',
    scenarioIds: ['s13', 's14', 's15'],
    scenarioPool: ['s13','s14','s15','hl01','hl02','hl03','hl04','hl05','hl06','hl07','hl08','hl09','hl10','hl11','hl12','hl13','hl14','hl15','hl16','hl17','hl18','hl19','hl20','hl21','hl22','hl23','hl24','hl25','hl26','hl27','hl28','hl29','hl30','hl31','hl32','hl33','hl34','hl35','hl36','hl37','hl38','hl39','hl40','hl41','hl42','hl43','hl44','hl45','hl46','hl47','hl48','hl49','hl50','hl51','hl52','hl53','hl54','hl55','hl56','hl57','hl58','hl59','hl60','hl61','hl62','hl63','hl64','hl65','hl66','hl67','hl68','hl69','hl70','hl71','hl72','hl73','hl74','hl75','hl76','hl77','hl78','hl79','hl80','hl81','hl82','hl83','hl84','hl85','hl86','hl87','hl88','hl89','hl90','hl91','hl92','hl93','hl94','hl95','hl96','hl97'],
    playbookUnlock: 'empathy',
  },
];

const PERSONAS = {
  marco: {
    name: 'Marco Rossi',
    emoji: '👨‍🍳',
    restaurant: "Rossi's Trattoria",
    backstory: "Third-generation owner, proud of his nonna's recipes. Skeptical of anything he didn't invent himself.",
    bg: '#ffeedd',
  },
  chen: {
    name: 'Chen Wei',
    emoji: '🧑‍💼',
    restaurant: 'Golden Dragon Kitchen',
    backstory: 'Runs a packed lunch operation. Hates wasting time. Respects efficiency above all else.',
    bg: '#fff8e6',
  },
  rosa: {
    name: 'Rosa Gutierrez',
    emoji: '👩‍🍳',
    restaurant: 'La Cocina de Rosa',
    backstory: 'Community institution, family-run. Thin margins, loyal regulars. Deeply skeptical of anything that cuts into her people.',
    bg: '#e6fff8',
  },
  yuki: {
    name: 'Yuki Tanaka',
    emoji: '🧑‍🍱',
    restaurant: 'Sakura Omakase',
    backstory: 'Perfectionist with a Michelin mention. Believes delivery degrades the experience. Hard to impress.',
    bg: '#f0e6ff',
  },
  alex: {
    name: 'Alex Rivera',
    emoji: '🧑‍🌾',
    restaurant: 'Wholesome Bowl',
    backstory: 'Millennial founder, already on two platforms. Tracks every metric. Will ask for data before agreeing to anything.',
    bg: '#e6faf2',
  },
};

const SCENARIOS = {
  // ── LITTLE ITALY ──────────────────────────────────────────────────────────
  s01: {
    objection: "We already use DoorDash and it works fine for us. Why would we add another app?",
    responses: [
      {
        // MEDIUM correct (~35 words)
        text: "Makes sense — a lot of our partners kept DoorDash when they joined. The Uber Eats user base tends to be a different customer, so most see it as extra revenue rather than a switch.",
        correct: true,
        technique: 'Additive Framing',
        feedback: "You validated their choice and reframed Uber Eats as additive. This removes the 'us vs. them' threat and opens a 'why not both?' conversation without pressure.",
      },
      {
        // LONG wrong (~55 words)
        text: "DoorDash is a solid platform, and I understand why it's your first choice. That said, Uber Eats brings a completely different demographic — people who use Uber for rides tend to order food too, and they're often not the same people who've already discovered you on DoorDash. Most partners find the audiences barely overlap.",
        correct: false,
        feedback: "Implying they're 'missing out' puts them on the defensive. Lead with how Uber Eats complements what they have, not what they're lacking.",
      },
      {
        // SHORT wrong (~12 words)
        text: "Our customer base is larger — you'd be missing a significant number of orders.",
        correct: false,
        feedback: "This is thoughtful discovery, but asking what would make it worth it before showing any value hands control to them too early. Build the case first.",
      },
      {
        // MEDIUM wrong (~25 words)
        text: "Happy to hear DoorDash works. What would make adding a second platform feel worth it from your perspective? I want to understand your priorities.",
        correct: false,
        feedback: "Walking away at the first sign of resistance means almost no deals ever close. There's almost always an opening worth exploring respectfully.",
      },
    ],
  },
  s02: {
    objection: "I've looked at Uber Eats before. The commission fees are too high — it eats into our margins.",
    responses: [
      {
        // SHORT correct (~18 words)
        text: "Delivery runs through your existing kitchen and staff — the real margin impact is usually smaller than the headline fee suggests.",
        correct: true,
        technique: 'Incremental Margin Logic',
        feedback: "You reframed the fee correctly: incremental revenue through existing fixed costs means the real margin impact is much smaller than it first appears. This shifts the conversation from cost to opportunity.",
      },
      {
        // LONG wrong (~55 words)
        text: "That's a really fair concern and one I hear often from restaurant owners running tight margins. The key thing I'd point to is that most comparable-size partners find the fee comes out of new revenue they wouldn't have seen otherwise — not from their existing dine-in business that's already covering their fixed costs. The math looks different in that frame.",
        correct: false,
        feedback: "Comparing yourself to competitors doesn't address their concern — it just tells them everyone is equally expensive. Focus on the value they get, not industry norms.",
      },
      {
        // MEDIUM wrong (~25 words)
        text: "Our rates are competitive with the rest of the market. You'd pay similar fees anywhere you go, so the question is really which platform delivers the most value.",
        correct: false,
        feedback: "Jumping to discounts signals that the standard pricing isn't justified. Make the value case first — discounts should be a last resort, not an opener.",
      },
      {
        // SHORT wrong (~10 words)
        text: "We have some rate flexibility — worth a chat with my manager.",
        correct: false,
        feedback: "Asking for their number before demonstrating value puts you in a weak negotiating position. Establish why it's worth it first, then discuss terms.",
      },
    ],
  },
  s03: {
    objection: "My pasta goes soggy after 15 minutes. Delivery would ruin our food — that's not something I'm willing to compromise on.",
    responses: [
      {
        // LONG correct (~45 words)
        text: "Quality is everything — I wouldn't want to compromise that either. We work with packaging partners who specialize in exactly this problem, and I can connect you with a couple of Italian restaurants nearby who had the same concern before joining and found a solution that actually works.",
        correct: true,
        technique: 'Social Proof + Solution',
        feedback: "You aligned with their values rather than arguing, then offered a specific, verifiable solution with social proof. Connecting them with similar restaurants nearby is far more persuasive than any stat you could cite.",
      },
      {
        // LONG wrong (~48 words)
        text: "Honestly, with the right packaging and insulated bags, food holds up a lot better than most people expect during a 20-minute delivery window. A lot of Italian restaurants on our platform are doing really well — pasta included — and we'd connect you with a few of them if it helps.",
        correct: false,
        feedback: "Telling a craftsman their food travels better than they think dismisses their expertise. Never argue about quality with the person who makes the food.",
      },
      {
        // MEDIUM wrong (~25 words)
        text: "You could create a delivery menu using only the dishes that travel well — that way the quality concern is solved before it even becomes an issue.",
        correct: false,
        feedback: "This assigns them homework and doesn't solve the core concern. Lead with the resources and support Uber Eats actually provides.",
      },
      {
        // SHORT wrong (~12 words)
        text: "That's fair. Which dishes do you think would hold up the best?",
        correct: false,
        feedback: "Discovery is good, but only after you've shown you have a solution. Asking this first suggests you don't have an answer to the quality problem.",
      },
    ],
  },

  // ── CHINATOWN (EXTENDED II) ────────────────────────────────────────────────
  ch18: {
    objection: "People already think of Chinese takeout as low-quality. I don't want our food associated with that.",
    responses: [
      { text: "Your listing is entirely your own identity — your photos, your descriptions, your branding. A lot of restaurants use Uber Eats to actively challenge that perception by showcasing quality that doesn't match the stereotype.", correct: true, technique: 'Premium Positioning',
        feedback: "You validated the brand concern and reframed the platform as a tool for challenging the stereotype rather than reinforcing it. Control over presentation is the direct answer." },
      { text: "Consumer perceptions about Chinese food are improving rapidly — it's not the issue it used to be.", correct: false,
        feedback: "Telling a restaurant owner their identity concern is outdated won't land well. Address how they control their own image." },
      { text: "Your food will speak for itself — good reviews quickly differentiate you.", correct: false,
        feedback: "True but slow. Show them how their listing can proactively present a premium identity from day one." },
      { text: "What aspects of your brand do you most want to communicate to new customers?", correct: false,
        feedback: "Good discovery, but show them the listing control tools before asking about brand identity." },
    ],
  },
  ch19: {
    objection: "DoorDash is already working great for us. I don't see why we'd add a second platform.",
    responses: [
      { text: "Makes sense to stay with what works. The case for adding us is that Uber Eats customers come from the ride network — people who open Uber for a car and see your restaurant. They're not the same people browsing DoorDash. Most partners see the audiences barely overlap.", correct: true, technique: 'Additive Framing',
        feedback: "You validated DoorDash and offered one specific, structural reason Uber Eats reaches a different customer pool. The ride network differentiator is concrete and credible." },
      { text: "More platforms means more revenue — there's no reason not to be everywhere.", correct: false,
        feedback: "More-is-better arguments don't address their specific concern about duplication. Show why the audiences are different." },
      { text: "DoorDash has been losing market share — diversifying now is smart.", correct: false,
        feedback: "Casting doubt on a platform that's working for them creates friction without solving the duplication concern." },
      { text: "What's your current monthly revenue from DoorDash? That helps me estimate the incremental upside.", correct: false,
        feedback: "Good data to eventually have, but show the different audience first before asking for their financials." },
    ],
  },
  ch20: {
    objection: "We just implemented a new menu management system. Adding another platform would create conflicts.",
    responses: [
      { text: "We integrate directly with most major menu management systems — your pricing and availability can sync automatically so there's no duplicate updating. What system are you running?", correct: true, technique: 'Flexibility Framing',
        feedback: "You addressed the conflict directly with integration, then asked the specific question. Showing the sync capability removes the fear of managing two systems separately." },
      { text: "You'd only need to update menu changes in both places — it's a small extra step.", correct: false,
        feedback: "Describing manual dual-updating as 'small' doesn't address a system-conflict concern. Show the integration path." },
      { text: "Give the new system a few weeks to stabilize first, then let's revisit.", correct: false,
        feedback: "Deferring without showing integration is possible loses the current momentum." },
      { text: "Which menu management system did you implement?", correct: false,
        feedback: "Good question, but pair it with the integration context so you're not just gathering data." },
    ],
  },
  ch21: {
    objection: "My servers share in the tips pool. Adding delivery could shift income away from them.",
    responses: [
      { text: "Delivery tips go directly to the courier — they never enter your in-house tip pool. Your servers' income is completely unaffected.", correct: true, technique: 'Channel Separation',
        feedback: "You immediately cleared up a misconception. Delivery tips and dine-in tips are entirely separate — knowing this removes the income concern entirely." },
      { text: "Delivery usually generates strong tips — it could add to the overall tip pool.", correct: false,
        feedback: "This misses the point — delivery tips don't go to the dine-in team regardless. Clarify the separation first." },
      { text: "You could restructure your tip pool to include delivery revenue as a bonus.", correct: false,
        feedback: "Suggesting a tip pool restructure when no change is actually needed creates unnecessary complexity." },
      { text: "How is your current tip pool structured?", correct: false,
        feedback: "Good context eventually, but clarify that delivery tips go to the courier before exploring their existing tip setup." },
    ],
  },
  ch22: {
    objection: "We handle 200 covers on a Saturday night. I can't have delivery orders competing for that capacity.",
    responses: [
      { text: "Set the delivery order cap to zero on Saturday nights — you can schedule it off for your peak service and turn it on during the quieter weekdays when you have real capacity to spare.", correct: true, technique: 'Capacity Planning',
        feedback: "You showed a concrete, precise solution: zero delivery on their busiest night, and delivery on slower days. Scheduling by day of week makes the capacity protection completely real." },
      { text: "Delivery orders are usually simpler than full dine-in — they shouldn't overload a 200-cover kitchen.", correct: false,
        feedback: "Any extra order on a maxed Saturday night is a problem. Show the cap and scheduling control instead." },
      { text: "You could hire a dedicated delivery station to handle the extra volume.", correct: false,
        feedback: "Adding staff on an already-slammed Saturday is the wrong direction." },
      { text: "What nights are your quietest? That's probably where delivery fits best.", correct: false,
        feedback: "Good framing, but show the scheduling control first so they know Saturday is protected." },
    ],
  },
  ch23: {
    objection: "We do catering for corporate clients — large orders, planned in advance. Individual delivery doesn't fit our model.",
    responses: [
      { text: "Catering is a completely different channel — you're right to run that separately. What delivery apps capture is the individual who wants your food on a Tuesday at noon without a catering order. Those two customers don't overlap at all.", correct: true, technique: 'Complementary Positioning',
        feedback: "You drew a clean line between planned catering and spontaneous individual delivery. They don't compete — they serve entirely different demand types." },
      { text: "You could actually list catering packages on Uber Eats too — it's a growing category.", correct: false,
        feedback: "Suggesting they migrate catering to the app contradicts what they value about that channel. Separate first." },
      { text: "Individual delivery orders can add up to catering-level revenue over time.", correct: false,
        feedback: "Volume comparisons miss the structural distinction between the two channels." },
      { text: "What does your average catering order look like in size and frequency?", correct: false,
        feedback: "Good context eventually, but draw the channel separation first before exploring their catering model." },
    ],
  },
  ch24: {
    objection: "My uncle owns half the business and he's in Shanghai right now. I can't decide alone.",
    responses: [
      { text: "No problem — could I send both of you the same summary so you're reviewing the same information when you connect? I'm also happy to join a video call with both of you at whatever time works across time zones.", correct: true, technique: 'Stakeholder Navigation',
        feedback: "You honored the decision structure and offered a practical path that works across time zones. A joint call removes the game of telephone and keeps you in the conversation." },
      { text: "For a decision this size, you probably have authority to move forward on your own.", correct: false,
        feedback: "Suggesting someone bypass their business partner — even gently — destroys trust. Respect their process." },
      { text: "No problem — I'll follow up in a few weeks when he's back.", correct: false,
        feedback: "An open-ended follow-up loses all momentum. Send materials now so the conversation restarts warm." },
      { text: "What do you think his main concerns would be?", correct: false,
        feedback: "Good eventually, but offer the joint call path first before asking them to speculate on their partner's objections." },
    ],
  },
  ch25: {
    objection: "I heard setup can take weeks and requires a lot of paperwork. I don't have time for that.",
    responses: [
      { text: "The setup takes three to five business days for approval, and our onboarding team handles the menu build for you. Your actual time investment is about 20 minutes for a review call. That's it.", correct: true, technique: 'Effort Minimization',
        feedback: "You corrected the timeline misconception and quantified your partner's actual time burden. '20 minutes' is a specific, believable number that removes the 'I don't have time' barrier." },
      { text: "Setup is much faster than most people think — it's really not that bad.", correct: false,
        feedback: "Vague reassurance about speed doesn't answer a specific time concern. Give the actual number." },
      { text: "We can expedite the process if timing is critical for you.", correct: false,
        feedback: "Offering expediting implies the normal timeline is indeed weeks-long. Clarify the actual timeline first." },
      { text: "When would you have about an hour free? We could do the whole setup together.", correct: false,
        feedback: "Asking for an hour when they said they have no time contradicts their stated constraint. The actual time is 20 minutes — say that." },
    ],
  },
  ch26: {
    objection: "I only want to offer dim sum on the app — not our full dinner menu. Is that allowed?",
    responses: [
      { text: "Absolutely — you control exactly which items appear on your delivery listing. A curated dim sum-only menu is a completely valid and actually quite popular setup. Some of our best-performing Chinese restaurants list a focused sub-menu.", correct: true, technique: 'Flexibility Framing',
        feedback: "You said yes immediately and validated the curated approach as a real strategy. Confirming control removes the concern entirely." },
      { text: "A fuller menu would probably generate more revenue — worth considering.", correct: false,
        feedback: "They didn't ask for menu strategy advice — they asked if a limited listing is allowed. Answer that." },
      { text: "Of course — you can always expand the menu later once you're comfortable.", correct: false,
        feedback: "True but misses the chance to validate their focused approach as actually strong." },
      { text: "Which dim sum items were you thinking of listing?", correct: false,
        feedback: "Good to know, but confirm full listing control first before discussing specifics." },
    ],
  },
  ch27: {
    objection: "Chinese New Year is our biggest month. I don't want anything new going on during that period.",
    responses: [
      { text: "Completely understood — Chinese New Year should stay focused. We can set up everything now and schedule the go-live for February 15th or whenever the rush is over. You get the setup done, but launch on your terms.", correct: true, technique: 'Pipeline Value',
        feedback: "You accepted the timing constraint and turned the wait into a prep window. Setup now, launch after CNY means you hit the ground running instead of starting cold." },
      { text: "Chinese New Year is actually peak delivery time — it could be very lucrative.", correct: false,
        feedback: "Pushing to launch during their stated off-limits period creates resistance, not momentum." },
      { text: "No problem — I'll follow up in mid-February.", correct: false,
        feedback: "Starting fresh in February means starting cold. Do the setup now and schedule the launch date." },
      { text: "How long does the Chinese New Year rush typically last for you?", correct: false,
        feedback: "Good to know for planning, but commit to 'setup now, launch after' first." },
    ],
  },
  ch28: {
    objection: "I'm worried the app will categorize us generically as 'Chinese food' and miss what makes us special.",
    responses: [
      { text: "You write your own description, tags, and cuisine type — we can list you as Cantonese, Dim Sum, Hong Kong Style, or whatever is most accurate. The category is yours to define.", correct: true, technique: 'Control Framing',
        feedback: "You gave them direct control over categorization. Specific cuisine types are available and user-set — this directly addresses the fear of generic labeling." },
      { text: "Most customers search by neighborhood and dish type, not broad cuisine categories.", correct: false,
        feedback: "Search behavior doesn't address the categorization concern. Show them they control the category." },
      { text: "You could add descriptive keywords in your restaurant name to stand out.", correct: false,
        feedback: "Workarounds aren't as clean as showing the actual category control exists." },
      { text: "How would you describe your cuisine style in your own words?", correct: false,
        feedback: "Good discovery, but confirm they control the categorization first before asking for their description." },
    ],
  },
  ch29: {
    objection: "We have custom-branded packaging. I don't want our food going out in generic delivery bags.",
    responses: [
      { text: "You supply the packaging — whatever goes out of your kitchen is your packaging. If that's custom-branded bags and boxes, that's what customers receive. The platform doesn't provide or require its own packaging.", correct: true, technique: 'Control Framing',
        feedback: "You clarified a straightforward operational fact. Their packaging stays their packaging — nothing about the platform changes that." },
      { text: "Branded packaging is a great touch — most customers appreciate it.", correct: false,
        feedback: "Validation is nice but secondary. First confirm that their custom packaging is completely unaffected." },
      { text: "You could put a custom insert card inside the standard delivery bag.", correct: false,
        feedback: "This implies there's a standard bag they'd need to work around — which isn't accurate." },
      { text: "What does your current packaging look like? I want to understand the brand experience.", correct: false,
        feedback: "Good to know, but confirm packaging control is theirs before asking about their current setup." },
    ],
  },
  ch30: {
    objection: "A lot of our older customers pay cash. I don't want to move to a fully cashless model.",
    responses: [
      { text: "Your in-person cash customers are completely unaffected — nothing changes for them. Uber Eats operates as a separate channel for new customers ordering digitally. Your dining room stays exactly as is.", correct: true, technique: 'Channel Separation',
        feedback: "You drew a clean separation between the two channels. Cash-paying dine-in customers and app delivery customers are different groups — nothing about the restaurant changes for the former." },
      { text: "Cashless is the future — this is a good way to start the transition.", correct: false,
        feedback: "Framing delivery as a step toward going cashless will alarm someone who specifically doesn't want that." },
      { text: "Most of your cash customers probably also use apps — they might actually prefer it.", correct: false,
        feedback: "Assuming older cash customers use apps contradicts their description of their clientele." },
      { text: "What percentage of your orders are currently cash vs. card?", correct: false,
        feedback: "Good context, but separate the channels first — the cash customers are never affected by delivery." },
    ],
  },
  ch31: {
    objection: "We share this space with a food hall and have some exclusivity restrictions in our lease.",
    responses: [
      { text: "That's worth checking. Do you know if the restriction covers third-party delivery apps specifically, or just in-person competition? I've seen some food hall leases that carve out delivery platforms — it's worth a quick review with your landlord.", correct: true, technique: 'Honest Consulting',
        feedback: "You validated the concern, gave a useful distinction to investigate, and didn't assume the answer either way. Helping them clarify the scope of the restriction shows you're thinking about their situation." },
      { text: "Delivery platforms are typically not covered by in-person exclusivity clauses.", correct: false,
        feedback: "You don't know their specific lease. Don't guess at legal terms — suggest they verify." },
      { text: "If there's an issue, we can work with you to navigate it.", correct: false,
        feedback: "Vague offers to 'work through it' without specifics don't help them make a decision." },
      { text: "Can I see a copy of the relevant lease section?", correct: false,
        feedback: "Asking for their lease documentation is overstepping. Give them the right questions to ask their landlord." },
    ],
  },
  ch32: {
    objection: "I want delivery available to Chinatown customers only. I don't want orders from across the city.",
    responses: [
      { text: "You set the delivery radius yourself — you can cap it at a half-mile or one mile and only Chinatown customers will see your listing. It's completely in your control.", correct: true, technique: 'Control Framing',
        feedback: "Direct and accurate. Radius control is a real feature and the complete answer to this concern." },
      { text: "Limiting your radius limits your revenue potential — worth thinking about.", correct: false,
        feedback: "They didn't ask for advice on their radius choice. They asked if local-only is possible. Confirm it." },
      { text: "Most customers tend to order from nearby restaurants anyway — cross-city orders are rare.", correct: false,
        feedback: "Behavior patterns don't give them the control they asked for. Show them the radius setting." },
      { text: "What radius did you have in mind?", correct: false,
        feedback: "Good question, but confirm they control the radius first before discussing the specific size." },
    ],
  },
  ch33: {
    objection: "I'm very private about our cooking. I don't want photos or video of our kitchen on the internet.",
    responses: [
      { text: "Nothing in the kitchen goes on the platform unless you put it there. The listing shows photos you upload — of plated dishes, the exterior, whatever you choose. No kitchen access required.", correct: true, technique: 'Control Framing',
        feedback: "You immediately clarified the misconception. The kitchen is never on the platform — only what the owner chooses to share appears on the listing." },
      { text: "Our photography service focuses on finished dishes — kitchens are rarely photographed.", correct: false,
        feedback: "Saying kitchens are 'rarely' photographed doesn't address the concern as definitively as 'never unless you want it.'" },
      { text: "You have full control over what's visible on your listing.", correct: false,
        feedback: "True but vague. Be specific: the kitchen never appears unless you explicitly add a kitchen photo yourself." },
      { text: "What images of your restaurant are you comfortable sharing?", correct: false,
        feedback: "Good discovery, but first confirm that the kitchen is completely off-limits unless they choose otherwise." },
    ],
  },
  ch34: {
    objection: "Our dine-in menu and delivery prices need to be the same. I won't charge customers differently.",
    responses: [
      { text: "That's a completely valid choice and fully supported. You can price delivery exactly the same as your dine-in menu — many partners do. The commission comes out of that revenue, but the pricing the customer sees is your call.", correct: true, technique: 'Control Framing',
        feedback: "You validated the preference and confirmed it's fully supported. Noting the commission structure is honest and doesn't undermine the answer." },
      { text: "A small delivery markup is common practice and customers generally accept it.", correct: false,
        feedback: "They didn't ask for advice on whether to mark up — they stated a preference. Respect it." },
      { text: "Matching prices is fine, but just be aware the net margin will be lower on delivery.", correct: false,
        feedback: "True but unsolicited. They've made their choice — confirm it's supported." },
      { text: "Have you done the margin math on delivery at your current menu prices?", correct: false,
        feedback: "Don't question their pricing decision without being asked. Confirm it's supported first." },
    ],
  },
  ch35: {
    objection: "Our lunch rush from 11:30 to 2 is completely maxed. I can't take one more order.",
    responses: [
      { text: "Turn delivery off during that two-and-a-half-hour window and on for the rest of the day. The scheduler lets you set delivery hours independently of your restaurant hours — your lunch rush is fully protected.", correct: true, technique: 'Capacity Planning',
        feedback: "You showed a precise, surgical solution: delivery off exactly during peak, on for everything else. The independence of delivery hours from restaurant hours is the key feature." },
      { text: "Delivery orders often come outside of peak lunch — there's a chance they wouldn't conflict.", correct: false,
        feedback: "'There's a chance' isn't reassuring for a maxed lunch service. Show the scheduling control." },
      { text: "You could hire dedicated delivery prep staff to handle the extra volume.", correct: false,
        feedback: "Adding staff during an already maxed lunch rush is the wrong direction." },
      { text: "What are your hours outside of the lunch rush?", correct: false,
        feedback: "Good context for planning, but show the delivery-hours scheduling feature first." },
    ],
  },
  ch36: {
    objection: "The last platform we were on raised their commission rate six months after we signed up.",
    responses: [
      { text: "That's a legitimate fear and I'd be wary too. Our commission rate is fixed and stated in the agreement — any rate change requires written notice and renegotiation. I can show you the specific contract language.", correct: true, technique: 'Transparency',
        feedback: "You validated the fear, gave the specific protection mechanism, and offered to show the contract language. Offering proof is the only real answer after someone's been burned on a rate change." },
      { text: "Our rates have been very stable — we haven't changed them in years.", correct: false,
        feedback: "Track record without contractual protection isn't a guarantee. Show the contract language." },
      { text: "We're a much more transparent platform than most — I don't see that happening.", correct: false,
        feedback: "Your confidence doesn't protect them. Show the actual contractual protection." },
      { text: "What rate did they raise it to? That context helps me understand the situation.", correct: false,
        feedback: "Understanding the bad experience is useful, but commit to showing the contractual protection first." },
    ],
  },
  ch37: {
    objection: "I want to see the full pricing breakdown — every fee, every percentage — before agreeing to anything.",
    responses: [
      { text: "Absolutely — I'll send you the full fee schedule today. The headline is the commission rate, and there are no hidden fees beyond that. The document lists everything explicitly.", correct: true, technique: 'Transparency',
        feedback: "You agreed immediately and previewed the key structure. Saying 'no hidden fees' and sending the document shows confidence and nothing to hide." },
      { text: "The fee structure is pretty standard — similar to other platforms in the market.", correct: false,
        feedback: "Calling it standard doesn't tell them what it is. They asked for specifics — provide them." },
      { text: "The commission is the main cost — the other fees are minimal.", correct: false,
        feedback: "Minimizing fees without disclosing them is exactly what burns trust. Just share the full document." },
      { text: "What specific fees are you most concerned about?", correct: false,
        feedback: "They asked for the full breakdown — give it, don't filter it by their questions." },
    ],
  },
  ch38: {
    objection: "We had a refund dispute on another platform that took months to resolve. I can't deal with that again.",
    responses: [
      { text: "That sounds genuinely painful, and I won't promise nothing ever goes wrong. What I can tell you is our restaurant dispute process has a 5-business-day resolution commitment, and I can share the escalation path in writing before you sign anything.", correct: true, technique: 'Trust Rebuilding',
        feedback: "You acknowledged the past experience, gave a specific resolution timeline, and offered written proof. Specificity and written commitment are the right answers after a dispute nightmare." },
      { text: "Our dispute resolution is much faster than most platforms — you won't have that problem with us.", correct: false,
        feedback: "'Much faster' is vague. Give the specific timeline and put it in writing." },
      { text: "What was the nature of the dispute? Context helps me understand your concern.", correct: false,
        feedback: "Empathy first, then give the resolution commitment. Don't make them relive it before offering the protection." },
      { text: "We have a dedicated partner support team that handles disputes quickly.", correct: false,
        feedback: "Generic support team claims don't answer after a months-long experience. Give a specific timeline." },
    ],
  },
  ch39: {
    objection: "Half our staff are part-time and we have no consistent coverage for a delivery tablet.",
    responses: [
      { text: "The tablet auto-accepts orders by default — your team doesn't need to monitor it. If you want manual acceptance, any staff member can confirm with one tap. There's no dedicated role required.", correct: true, technique: 'Effort Minimization',
        feedback: "You matched their specific staffing reality with a specific feature — auto-accept. No dedicated coverage needed is the complete answer to a part-time-heavy operation." },
      { text: "You could assign one person to manage delivery as part of their regular duties.", correct: false,
        feedback: "With part-time coverage, assigning a dedicated delivery role isn't reliable. Show the auto-accept option." },
      { text: "Part-time staff often find managing delivery orders easy — it becomes routine quickly.", correct: false,
        feedback: "'It gets easy' doesn't address the coverage gap. Show the auto-accept feature." },
      { text: "What does your typical staffing schedule look like?", correct: false,
        feedback: "Good context, but show auto-accept exists first so they know coverage isn't required." },
    ],
  },
  ch40: {
    objection: "Our current POS doesn't support any integrations. Everything is manual.",
    responses: [
      { text: "No problem — in that case, orders come through a standalone Uber Eats tablet that sits alongside your POS. There's no integration required. Your existing system doesn't change at all.", correct: true, technique: 'Flexibility Framing',
        feedback: "You offered the clean standalone path immediately. No integration needed means no disruption to their existing manual system." },
      { text: "Most restaurants upgrade their POS at some point — this could be a good reason to explore that.", correct: false,
        feedback: "Suggesting a POS upgrade to solve an objection adds far more complexity than the original concern." },
      { text: "We have tech support that can help set up manual workarounds.", correct: false,
        feedback: "'Manual workarounds' sounds like extra work. The standalone tablet is the clean answer." },
      { text: "What POS system are you currently using?", correct: false,
        feedback: "Good context, but confirm the standalone tablet path first so they know no integration is needed." },
    ],
  },
  ch41: {
    objection: "My father is the majority shareholder and he makes all major business decisions. He's skeptical of apps.",
    responses: [
      { text: "He's the right person to speak with then. Could you introduce us? I'd rather have the conversation with him directly than have it filtered. I'd also be happy to join a call with both of you.", correct: true, technique: 'Stakeholder Navigation',
        feedback: "You went to the actual decision-maker rather than trying to sell around them. Respecting the family business structure and going directly to the patriarch shows professionalism." },
      { text: "A lot of older business owners are skeptical at first — they usually come around.", correct: false,
        feedback: "Dismissing the father's skepticism as age-related resistance will create resentment." },
      { text: "What specifically is he skeptical about? Maybe I can address it through you.", correct: false,
        feedback: "Getting details through an intermediary is less effective and respectful than speaking to him directly." },
      { text: "Could you share some data with him that might change his view?", correct: false,
        feedback: "Asking them to do your selling for you without ensuring they have the right message is risky." },
    ],
  },
  ch42: {
    objection: "I've heard stories about driver theft from restaurant pickups. That's a real concern for us.",
    responses: [
      { text: "That's a serious concern and you can take action on it. You can report any courier who behaves inappropriately, and reported couriers are removed from your pickup queue. You have direct control over who picks up from your location.", correct: true, technique: 'Partnership Assurance',
        feedback: "You validated the seriousness and gave a concrete accountability mechanism — reporting and removal. Giving them control over who picks up is the direct answer." },
      { text: "Driver theft is very rare on our platform — our vetting process is strong.", correct: false,
        feedback: "Rarity doesn't address the 'what if it happens' concern. Show the accountability mechanism." },
      { text: "You could install a camera near the pickup area as a deterrent.", correct: false,
        feedback: "Suggesting they install a camera is a cost and complexity they shouldn't need. Show the platform's built-in mechanism." },
      { text: "What type of items are you most concerned about?", correct: false,
        feedback: "Good context, but show the reporting and removal capability first." },
    ],
  },
  ch43: {
    objection: "I'm worried the app will list us under the wrong cuisine category and attract the wrong customers.",
    responses: [
      { text: "You set your own cuisine tags — Cantonese, Szechuan, Hong Kong Style, Dim Sum, or any combination. The category on your listing is yours to define, not ours to assign.", correct: true, technique: 'Control Framing',
        feedback: "You gave them direct control over categorization. This is a real feature that directly addresses the misrepresentation fear." },
      { text: "Our categorization system is quite detailed — we'd get it right.", correct: false,
        feedback: "Even if your categorization is good, giving them control is better than promising your accuracy." },
      { text: "Customers who find you will adjust their expectations based on your menu.", correct: false,
        feedback: "This doesn't address the discoverability concern about wrong-category customers finding them." },
      { text: "What cuisine category would you want to be listed under?", correct: false,
        feedback: "Good to know, but confirm they control the category before asking for their preference." },
    ],
  },
  ch44: {
    objection: "We already pay an aggregator service to manage our delivery orders. Adding another platform adds confusion.",
    responses: [
      { text: "We integrate with most aggregator platforms — if you're using Olo, ChowNow, or similar, orders from Uber Eats flow into your existing aggregator dashboard. You'd manage everything in one place just as you do now.", correct: true, technique: 'Flexibility Framing',
        feedback: "You showed the integration path that removes the confusion concern entirely. One dashboard for all platforms is the direct answer to a multi-platform management worry." },
      { text: "Managing multiple platforms isn't that complicated — most restaurants do it fine.", correct: false,
        feedback: "Dismissing the confusion concern doesn't address it. Show the aggregator integration." },
      { text: "What aggregator are you using? I can check the integration status.", correct: false,
        feedback: "Good question, but frame it in the context of integration before asking — not as your only response." },
      { text: "You could consider switching aggregators to one with broader integration.", correct: false,
        feedback: "Suggesting they switch their existing aggregator adds complexity rather than reducing it." },
    ],
  },
  ch45: {
    objection: "We're only open weekends. I'm not sure the volume justifies a platform fee.",
    responses: [
      { text: "Weekend delivery is peak performance time on the platform — Saturday and Sunday together often outperform five weekdays for Chinese food. Two strong days can absolutely generate meaningful revenue.", correct: true, technique: 'Timing Reframe',
        feedback: "You reframed limited weekend hours as alignment with peak demand. Two high-performing days beats five average ones." },
      { text: "You could consider opening some weekday hours to maximize platform revenue.", correct: false,
        feedback: "Suggesting they expand their hours adds work rather than solving the concern about their current setup." },
      { text: "Even a small revenue addition is better than nothing on the weekends.", correct: false,
        feedback: "Weak framing — make the positive case about weekend delivery performance, not 'something is better than nothing.'" },
      { text: "What are your typical Saturday and Sunday cover counts?", correct: false,
        feedback: "Lead with the weekend platform performance argument before asking for their numbers." },
    ],
  },
  ch46: {
    objection: "We're operating under a temporary license while our main location is under renovation.",
    responses: [
      { text: "That actually works in your favor — you can get set up now, build your review base and customer pipeline, and carry that reputation directly into the reopened permanent location when it's ready.", correct: true, technique: 'Pipeline Value',
        feedback: "You turned the temporary setup into an advantage: reputation and customer pipeline built during renovation, ready to scale at the permanent location." },
      { text: "We can set you up at the temporary location and transfer to the permanent one later.", correct: false,
        feedback: "True but less compelling than showing how the temporary period actively builds value for the permanent launch." },
      { text: "It's worth waiting until the main location reopens — start fresh with the full setup.", correct: false,
        feedback: "Waiting loses months of review-building and customer acquisition opportunity." },
      { text: "How long until the main location is ready?", correct: false,
        feedback: "Good to know, but make the pipeline value case first before asking for the timeline." },
    ],
  },
  ch47: {
    objection: "Managing allergen information across a large menu for delivery customers worries me.",
    responses: [
      { text: "Each item has its own allergen tags you set once — peanuts, shellfish, gluten, whatever applies. Once it's set, it's there permanently. Customers filter before ordering. You do the work once, not with every order.", correct: true, technique: 'Effort Minimization',
        feedback: "You showed the setup is a one-time task, not ongoing management. 'Do it once, not with every order' is the right frame for a large-menu allergen concern." },
      { text: "Allergen management is the same regardless of whether orders come through an app or in person.", correct: false,
        feedback: "This doesn't address the specific delivery concern about managing it at scale. Show the tagging feature." },
      { text: "Customers with serious allergies are usually very diligent about checking — it rarely becomes an issue.", correct: false,
        feedback: "Putting the burden on the customer doesn't address the restaurant's management concern." },
      { text: "How many items does your menu have?", correct: false,
        feedback: "Good context, but show the one-time tagging process first before estimating the setup work." },
    ],
  },
  ch48: {
    objection: "Our Peking duck takes 48 hours to prepare and doesn't travel well. It's too premium for delivery.",
    responses: [
      { text: "Peking duck stays off the delivery menu — that's exactly the right call. The listing can feature your other strong dishes: roasted meats, noodles, rice plates that hold beautifully. The duck stays where it belongs, in the dining room.", correct: true, technique: 'Premium Positioning',
        feedback: "You validated their judgment about the duck and showed a path to delivery that doesn't compromise the signature dish. Curated delivery menu of travel-worthy dishes is the right answer." },
      { text: "Premium dishes can actually perform well on delivery if the packaging is right.", correct: false,
        feedback: "Arguing with a chef that 48-hour Peking duck travels well is a losing conversation." },
      { text: "You could offer a Peking duck kit — raw components customers assemble at home.", correct: false,
        feedback: "A DIY kit is a completely different product with its own operational requirements. Don't introduce that complexity unprompted." },
      { text: "What other dishes do you think would represent your quality well?", correct: false,
        feedback: "Good discovery, but agree on the duck exclusion first so they feel heard." },
    ],
  },
  ch49: {
    objection: "We're preparing for the Lunar New Year festival and it's all-hands-on-deck for the next six weeks.",
    responses: [
      { text: "I'll respect that completely. Can I set up the account now so everything is ready to launch right after the festival? You'd hit March with your listing live and your initial menu already built.", correct: true, technique: 'Pipeline Value',
        feedback: "You accepted the timing and turned the wait into a setup window. March launch ready means no back-and-forth after the festival." },
      { text: "The festival period is actually a peak time for delivery — it could be very lucrative.", correct: false,
        feedback: "Pushing during an all-hands period will create resistance, not a sale." },
      { text: "No problem — I'll follow up in March.", correct: false,
        feedback: "Starting fresh in March means starting cold. Do the setup now." },
      { text: "How long does the Lunar New Year rush last for your restaurant?", correct: false,
        feedback: "Good to know, but commit to 'set up now, launch after' before asking for the timeline." },
    ],
  },
  ch50: {
    objection: "We want to pause service during major Chinese holidays. Can we control that?",
    responses: [
      { text: "Yes — you can set specific closure dates and times directly in the app. Lunar New Year, Golden Week, any day you want. Customers see 'currently closed' and no orders come through during those windows.", correct: true, technique: 'Control Framing',
        feedback: "Direct and accurate. Holiday closure control is a real feature — confirming this immediately removes the concern." },
      { text: "Most customers understand restaurants are closed on major holidays.", correct: false,
        feedback: "Customer understanding doesn't prevent orders from coming in. Show the actual closure control feature." },
      { text: "You can temporarily deactivate your listing during holidays.", correct: false,
        feedback: "True but 'deactivate' sounds more drastic than scheduling specific closure dates. Be precise." },
      { text: "Which holidays are you most concerned about managing?", correct: false,
        feedback: "Good to know, but confirm the closure control feature exists before asking about specific dates." },
    ],
  },
  ch51: {
    objection: "There are six other Chinese restaurants on the app within a mile of us. How do we compete?",
    responses: [
      { text: "New restaurants get a 90-day visibility boost. After that, it's ratings and fulfillment speed. A restaurant with 4.8 stars and fast prep time consistently outranks older restaurants with more reviews but lower scores.", correct: true, technique: 'Transparency',
        feedback: "You gave specific, actionable ranking factors that are within their control. Demystifying how to win in a competitive market turns anxiety into strategy." },
      { text: "Competition is healthy — it means there's strong demand for Chinese food in your area.", correct: false,
        feedback: "Reframing competition as demand signals doesn't address how they'd stand out. Give them the ranking factors." },
      { text: "You could run promotions to undercut nearby restaurants initially.", correct: false,
        feedback: "Suggesting a price war as a differentiation strategy could damage margins and brand perception." },
      { text: "What makes your restaurant different from those six competitors?", correct: false,
        feedback: "Good discovery, but explain the ranking system first so they know differentiation has a clear path." },
    ],
  },
  ch52: {
    objection: "Some of our customers and staff speak primarily Cantonese. I need bilingual support.",
    responses: [
      { text: "Our partner support line has Cantonese-speaking agents, and the tablet interface can be set to simplified or traditional Chinese. I can configure both during onboarding so your team is set up from day one.", correct: true, technique: 'Partnership Assurance',
        feedback: "You addressed the specific language need with specific solutions: Cantonese support and Chinese tablet interface. Offering to configure both during onboarding is the right level of hands-on support." },
      { text: "Our platform is very visual and most staff adapt quickly regardless of language.", correct: false,
        feedback: "Dismissing a language need with 'most people adapt' isn't helpful. Offer the real multilingual support." },
      { text: "Your English-speaking staff can handle any support issues that come up.", correct: false,
        feedback: "Delegating language support to a subset of staff creates a dependency that wasn't asked for." },
      { text: "How many of your team members are primarily Cantonese speakers?", correct: false,
        feedback: "Good context, but confirm Cantonese support exists first before asking about the scale of the need." },
    ],
  },
  ch53: {
    objection: "I don't have a smartphone and I do everything on paper. This is too tech-heavy for me.",
    responses: [
      { text: "You don't need a smartphone — the platform runs on a dedicated tablet we provide. It's not tied to a personal device. Your team operates it, not you personally, and the interface is as simple as reading a printed order ticket.", correct: true, technique: 'Effort Minimization',
        feedback: "You removed the smartphone dependency entirely and made the interface sound familiar — like a printed order ticket. No personal technology required is the complete answer." },
      { text: "A lot of restaurant owners learn technology faster than they expect.", correct: false,
        feedback: "Telling someone who prefers paper that they'll pick up tech quickly doesn't address their concern." },
      { text: "You could have a tech-savvy staff member manage the platform on your behalf.", correct: false,
        feedback: "Good idea eventually, but first show that neither a smartphone nor personal tech skill is required." },
      { text: "Would a live demo help? I can show you how simple the tablet actually is.", correct: false,
        feedback: "Good follow-up, but confirm it's not smartphone-dependent first so they know the barrier doesn't exist." },
    ],
  },
  ch54: {
    objection: "Our commercial kitchen license is only for on-site prep, not delivery operations.",
    responses: [
      { text: "That's worth verifying with your licensing body — delivery generally falls under standard food service operations and doesn't require a separate license. I can connect you with a restaurant compliance contact who can clarify quickly.", correct: true, technique: 'Honest Consulting',
        feedback: "You validated the concern, gave the likely answer without overpromising, and offered a resource to verify. This is responsible sales — you're helping them get clarity, not dismissing a legitimate question." },
      { text: "Delivery doesn't require any additional licensing — your current license covers it.", correct: false,
        feedback: "You don't know their specific license terms. Don't make definitive legal claims — offer to help them verify." },
      { text: "Most restaurant licenses cover all food preparation activities.", correct: false,
        feedback: "'Most' licenses is too vague for a specific compliance question. Point them to the right resource." },
      { text: "What does your current license specifically cover?", correct: false,
        feedback: "Good question, but offer the compliance resource first before diving into their specific license details." },
    ],
  },
  ch55: {
    objection: "Delivery order fluctuations would make it hard to forecast ingredient orders and avoid waste.",
    responses: [
      { text: "Delivery volume stabilizes quickly once you've been live a few weeks — the weekly pattern becomes predictable. Most partners add roughly 10-15% to their ingredient order in the first month and calibrate from there. I can share typical volume curves for your area.", correct: true, technique: 'Hyperlocal Data',
        feedback: "You gave a specific, practical framework for forecasting. Showing the pattern becomes predictable quickly turns a vague fear into a manageable operational adjustment." },
      { text: "Waste from over-ordering is a minor cost compared to the revenue upside.", correct: false,
        feedback: "Dismissing a thin-margin restaurant's waste concern as minor is exactly the wrong message." },
      { text: "You could start with a limited menu to reduce forecasting complexity.", correct: false,
        feedback: "True but doesn't address the forecasting concern for even a limited menu. Show the predictability pattern." },
      { text: "What's your current ingredient ordering cycle?", correct: false,
        feedback: "Good context, but give the predictability framework first before asking about their ordering process." },
    ],
  },
  ch56: {
    objection: "We're currently takeout-only because our dining room is being renovated. This isn't the right time.",
    responses: [
      { text: "Actually, takeout-only operations are perfect for delivery — the kitchen is already oriented toward to-go orders. You could be live within a week with almost no operational change.", correct: true, technique: 'Timing Reframe',
        feedback: "You reframed their temporary situation from a limitation to an advantage. A takeout-only kitchen is already set up for delivery — the timing is better than they think." },
      { text: "It might be better to wait until the dining room is ready for a full launch.", correct: false,
        feedback: "Deferring loses months of order volume and review-building. The takeout setup is actually ideal." },
      { text: "The renovation can be a fresh start for all channels — delivery included.", correct: false,
        feedback: "Framing renovation as a reason to wait misses the better argument: the current setup is actually well-suited." },
      { text: "How long is the dining room renovation expected to take?", correct: false,
        feedback: "Good to know, but make the 'takeout-only is ideal for delivery' case first." },
    ],
  },
  ch57: {
    objection: "We had a payment dispute with a platform two years ago and never got our money back.",
    responses: [
      { text: "That's genuinely unacceptable and I understand why it makes you cautious. Our payout process is automated, tied to your bank account directly, and documented in weekly statements you can audit at any time. I'll also put our escalation process in writing before you decide anything.", correct: true, technique: 'Trust Rebuilding',
        feedback: "You acknowledged the injustice and showed the structural protections that make a repeat unlikely — automated payouts, real-time documentation, and a written escalation path." },
      { text: "Payment issues are rare — our platform has very strong financial controls.", correct: false,
        feedback: "Rarity doesn't address a past specific incident. Show the concrete audit trail and protection." },
      { text: "Which platform was that? Our financial processes are quite different.", correct: false,
        feedback: "Shifting attention to the other platform sidesteps accountability. Focus on what you offer." },
      { text: "How large was the dispute? That context would help me understand the risk level.", correct: false,
        feedback: "Don't ask them to quantify their past pain before offering protection. Show the safeguards first." },
    ],
  },
  ch58: {
    objection: "We just opened three months ago. We're still building our reputation and don't want to spread too thin.",
    responses: [
      { text: "Three months in is actually an ideal time — new restaurants get a 90-day visibility boost on the platform, and you'd be launching that boost right as your kitchen workflow is getting tight. You'd build your delivery reputation in parallel with your dine-in one.", correct: true, technique: 'Pipeline Value',
        feedback: "You reframed 'too new' as 'ideal timing' using the real new-restaurant boost. Building both reputations in parallel is a genuine advantage." },
      { text: "Spreading yourself thin is a real risk — maybe wait another six months.", correct: false,
        feedback: "Agreeing that they should wait loses the sale and misses the new-restaurant boost window." },
      { text: "New restaurants do very well on delivery — you'd be building two channels from scratch together.", correct: false,
        feedback: "Generic encouragement without the specific boost mechanism isn't as compelling." },
      { text: "What's your current dine-in occupancy looking like?", correct: false,
        feedback: "Good context, but show the new-restaurant boost timing case first." },
    ],
  },
  ch59: {
    objection: "Show me a direct comparison with Grubhub. I want to see why you're better.",
    responses: [
      { text: "Fair ask. The structural difference that matters most: Uber Eats customers come from the ride network — people who open Uber for a car see your restaurant. That's a customer pool that doesn't exist on Grubhub at all. Everything else — commission, features — I can walk you through side by side.", correct: true, technique: 'Differentiation',
        feedback: "You led with the one truly structural differentiator before offering the full comparison. One specific reason that can't be replicated is more credible than a feature checklist." },
      { text: "We consistently rank higher in customer satisfaction surveys than Grubhub.", correct: false,
        feedback: "Survey rankings are exactly what they've heard from every platform. Lead with a structural difference." },
      { text: "The comparison depends on your specific market — Grubhub has different strengths in different cities.", correct: false,
        feedback: "Hedging on a direct comparison question sounds evasive. Answer with your best differentiator." },
      { text: "What specifically about Grubhub are you comparing against?", correct: false,
        feedback: "They asked for a comparison — give your best one first, then invite specific questions." },
    ],
  },
  ch60: {
    objection: "Does Uber Eats carry any liability insurance that covers incidents during delivery?",
    responses: [
      { text: "Couriers carry their own commercial insurance for the delivery leg, and Uber Eats carries additional coverage during active deliveries. Your restaurant's existing liability policy covers food preparation. The two coverages handle their respective parts of the journey.", correct: true, technique: 'Transparency',
        feedback: "You described the actual coverage structure accurately and showed how the responsibilities divide. This is specific enough to be genuinely useful without overstepping into legal advice." },
      { text: "Yes — we're fully insured for all delivery-related incidents.", correct: false,
        feedback: "Vague coverage claims without structure don't help them understand what's actually covered." },
      { text: "You should consult your insurance agent to understand the full coverage picture.", correct: false,
        feedback: "Kicking the question entirely to a third party without sharing what you know isn't helpful." },
      { text: "What specific incidents are you concerned about?", correct: false,
        feedback: "Good discovery, but describe the coverage structure first before asking about their specific scenarios." },
    ],
  },
  ch61: {
    objection: "We share delivery revenue with the kitchen rental company. Adding a platform creates accounting complications.",
    responses: [
      { text: "Our payout reports itemize every order, date, and amount — it's exactly the documentation you'd need for a revenue share calculation. The accounting actually gets easier because everything is in one transparent statement.", correct: true, technique: 'Flexibility Framing',
        feedback: "You reframed the accounting concern into an advantage: itemized reports make revenue-share calculations straightforward rather than complicated." },
      { text: "Revenue sharing arrangements are common — your accountant can figure it out.", correct: false,
        feedback: "Telling them their accountant will figure it out doesn't address the complication concern directly." },
      { text: "You could negotiate with the kitchen owner to exclude delivery revenue from the share.", correct: false,
        feedback: "Asking them to renegotiate a contract isn't the right response to an accounting concern." },
      { text: "What does the current revenue share arrangement look like?", correct: false,
        feedback: "Good context, but show how the reports simplify the revenue-share math first." },
    ],
  },
  ch62: {
    objection: "I've had tablet system errors during service before and it was chaos. I don't want another tablet.",
    responses: [
      { text: "Our tablet has offline mode — if the internet drops, it queues orders and syncs when connectivity returns. And if the tablet has a hardware issue, you can manage everything through a browser on any device. You're never fully dependent on one piece of hardware.", correct: true, technique: 'Flexibility Framing',
        feedback: "You addressed the system failure scenario with specific resilience features. Offline queuing and browser backup directly counter the 'one tablet failure = chaos' fear." },
      { text: "Our tablets have a very high uptime record — system errors are very rare.", correct: false,
        feedback: "Uptime statistics don't help when they've personally experienced the chaos of a failure. Show the resilience features." },
      { text: "You could have a backup device ready in case the tablet fails.", correct: false,
        feedback: "Good suggestion, but lead with the offline mode and browser backup built into the system." },
      { text: "What caused the previous tablet system errors?", correct: false,
        feedback: "Good for learning, but show the built-in resilience first before exploring their past experience." },
    ],
  },
  ch63: {
    objection: "What if a copycat restaurant opens nearby and uses our menu as a template on the app?",
    responses: [
      { text: "Your menu items are listed under your restaurant — a competitor listing the same dish names doesn't affect your profile, your reviews, or your discovery ranking. What protects you is your reputation, which is tracked to your specific listing.", correct: true, technique: 'Transparency',
        feedback: "You clarified that menu copying on a delivery app doesn't create any competitive advantage through your listing. The reputation and reviews attached to your specific account are what differentiates you." },
      { text: "Copycat restaurants typically don't perform well — customers see through it quickly.", correct: false,
        feedback: "Optimism about competitors doesn't address the concern. Show how your listing and reputation are protected." },
      { text: "We have policies against direct menu plagiarism on the platform.", correct: false,
        feedback: "Policy claims are vague. Explain how your reputation and reviews are specifically attached to your listing." },
      { text: "Is this a concern you've experienced before with a specific competitor?", correct: false,
        feedback: "Good discovery, but address the structural protection first before exploring their specific competitive situation." },
    ],
  },
  ch64: {
    objection: "We have an existing loyalty app for our regulars. I don't want Uber Eats to conflict with it.",
    responses: [
      { text: "Your loyalty app serves your existing customers — it's a retention tool. Uber Eats reaches new customers who haven't joined your loyalty program yet. The two serve different relationship stages and there's no overlap.", correct: true, technique: 'Channel Separation',
        feedback: "You drew a clean separation between retention (loyalty app) and acquisition (delivery platform). Different stages of the customer relationship, no conflict." },
      { text: "You could actually use Uber Eats to drive signups for your loyalty app.", correct: false,
        feedback: "Cross-channel promotion is possible but secondary. Address the conflict concern by separating the channels first." },
      { text: "Most loyalty programs and delivery platforms coexist without any issues.", correct: false,
        feedback: "Generic coexistence claims don't address their specific concern about channel conflict." },
      { text: "What features does your loyalty app offer?", correct: false,
        feedback: "Good discovery, but separate the channels first so they see no conflict before exploring their loyalty setup." },
    ],
  },
  ch65: {
    objection: "We just got a 1-star review on Google that we're dealing with. Terrible timing to launch anything.",
    responses: [
      { text: "That sounds stressful and I respect that you're focused on resolving it. Once you're through it, I'd love to revisit — and in the meantime I can send you setup materials so you're ready to move quickly when the timing feels right.", correct: true, technique: 'Soft Next Step',
        feedback: "You respected the current crisis, didn't push, and kept the deal warm with materials. Not every conversation needs to close today." },
      { text: "A delivery platform launch could actually help rebuild your reputation with new customers.", correct: false,
        feedback: "Launching anything during a reputation crisis can amplify the problem. Respect the timing." },
      { text: "One bad review doesn't define a restaurant — you'll recover quickly.", correct: false,
        feedback: "Dismissing their current crisis as minor doesn't help them. Accept the timing and stay warm." },
      { text: "What happened with the review — is it something that could be resolved quickly?", correct: false,
        feedback: "Good empathy, but commit to respecting their timing first before asking about the review specifics." },
    ],
  },
  ch66: {
    objection: "I want a minimum order of $25 for delivery. Will customers actually meet that?",
    responses: [
      { text: "The average delivery order on our platform is around $35. A $25 minimum is well within normal range — customers won't see it as a barrier, and you can adjust it at any time once you see how orders trend.", correct: true, technique: 'Hyperlocal Data',
        feedback: "You gave a specific average order size that validates their minimum and added the ability to adjust. Data plus flexibility is the right combination." },
      { text: "Minimums are standard practice — customers are used to them.", correct: false,
        feedback: "Generic reassurance about minimums doesn't give them the specific data they need to make the decision." },
      { text: "A lower minimum might increase order volume.", correct: false,
        feedback: "They didn't ask for advice on their minimum. They asked if $25 is viable. Answer that." },
      { text: "What's your current average dine-in check size?", correct: false,
        feedback: "Good context for projecting delivery orders, but give the platform average first to anchor the conversation." },
    ],
  },
  ch67: {
    objection: "Our dine-in experience is upscale. I don't want delivery to create a cheaper version of our brand.",
    responses: [
      { text: "Your delivery listing is an entirely separate expression of your brand — your own photos, your own descriptions, your own curated menu. You can position it as a premium to-go experience that complements the dining room, not a discounted version of it.", correct: true, technique: 'Premium Positioning',
        feedback: "You gave them full control over the delivery brand identity and offered the curated premium framing. Nothing about delivery has to feel cheaper unless they make it so." },
      { text: "Delivery doesn't have to feel different — your food quality carries the brand.", correct: false,
        feedback: "Telling a brand-conscious owner that food quality is enough dismisses the presentation concern." },
      { text: "Lots of upscale restaurants do delivery successfully — it's become an expectation.", correct: false,
        feedback: "Telling them customer expectations should drive their brand decisions subordinates their identity to market trends." },
      { text: "What aspects of your brand are you most protective of?", correct: false,
        feedback: "Good discovery, but show the listing control tools first so they know the brand identity is theirs to define." },
    ],
  },
  ch68: {
    objection: "What happens to customer order data? I don't want Uber Eats building profiles on my customers.",
    responses: [
      { text: "Customers who order through the app are Uber Eats users — their order data is Uber Eats data. What you receive is your sales and performance data, which you can export. The in-person customer relationships you've built are completely yours.", correct: true, technique: 'Transparency',
        feedback: "You gave an honest answer about the data structure rather than making misleading ownership claims. Honesty about data builds more trust than 'you own everything.'" },
      { text: "Customer data is protected under our strict privacy policy.", correct: false,
        feedback: "Privacy policies don't answer the ownership question. Be direct about who has what data." },
      { text: "Most platforms have similar data arrangements — it's the industry norm.", correct: false,
        feedback: "Normalizing a data concern doesn't resolve it for someone who asked directly." },
      { text: "What specific customer data are you most concerned about?", correct: false,
        feedback: "Good question, but be direct about the data ownership structure first." },
    ],
  },
  ch69: {
    objection: "We're running a special discount promotion right now and I don't want that undercut by platform pricing.",
    responses: [
      { text: "Your current promotion runs in your dining room — it's completely independent of your delivery listing. If you want to mirror it on delivery you can, but you don't have to. The two are entirely separate pricing environments.", correct: true, technique: 'Channel Separation',
        feedback: "You immediately resolved the conflict: in-house promotions and delivery pricing are independent. They control both separately." },
      { text: "A platform promotion could actually complement your current offer.", correct: false,
        feedback: "They didn't ask about complementing it — they asked about protection from conflict. Address that first." },
      { text: "Platform discounts and in-house promos operate in different customer contexts.", correct: false,
        feedback: "Vague 'different contexts' doesn't give the clear separation they need. Be explicit about the pricing independence." },
      { text: "What's the current promotion you're running?", correct: false,
        feedback: "Good context, but confirm pricing independence before asking about their specific promotion." },
    ],
  },
  ch70: {
    objection: "I have concerns about how Uber treats its drivers. I don't want to be associated with that.",
    responses: [
      { text: "That's a values question I respect and won't argue against. What I can tell you honestly is that couriers in your area choose their own hours, set their own zones, and many work alongside other jobs. If it still conflicts with your values after hearing that, that's a fair reason to pass.", correct: true, technique: 'Values Alignment',
        feedback: "You acknowledged the ethical concern without being defensive, gave honest context, and respected their right to decline. Transparency about values disagreements builds more trust than a hard sell." },
      { text: "Uber has significantly improved driver benefits and pay in recent years.", correct: false,
        feedback: "Corporate talking points about improvements land poorly with someone who has a principled concern." },
      { text: "Our drivers actually prefer gig work for the flexibility it provides.", correct: false,
        feedback: "Making claims about what all drivers prefer oversimplifies a complex issue. Acknowledge the concern first." },
      { text: "Would it help if I shared some data on driver earnings in your area?", correct: false,
        feedback: "Good idea, but after acknowledging the concern — not as your immediate counter." },
    ],
  },
  ch71: {
    objection: "We have branded packaging with our logo. We'd want our delivery bags to match our brand too.",
    responses: [
      { text: "You supply the packaging — whatever leaves your kitchen is in your branded bags. The platform has no packaging requirements. Your logo, your boxes, your brand experience.", correct: true, technique: 'Control Framing',
        feedback: "Direct and accurate. Their packaging is their packaging — this is a simple clarification that removes the concern entirely." },
      { text: "Uber Eats doesn't provide packaging — you use your own.", correct: false,
        feedback: "Correct but stated negatively. Lead with their control over the brand experience." },
      { text: "We do offer branded packaging options if you'd prefer.", correct: false,
        feedback: "Introducing platform-branded packaging when they've said they want their own brand creates unnecessary confusion." },
      { text: "What does your current branded packaging look like?", correct: false,
        feedback: "Good to know, but confirm packaging control is theirs before asking about their current setup." },
    ],
  },
  ch72: {
    objection: "Our dim sum service involves carts moving through the dining room. Delivery orders would totally disrupt that flow.",
    responses: [
      { text: "Your cart service is completely protected — you can schedule delivery hours only during non-service hours, like 10am to 11am before service begins, or after the carts stop. The dining room flow never gets interrupted.", correct: true, technique: 'Capacity Planning',
        feedback: "You showed a precise scheduling solution that protects the cart service entirely. Pre-service and post-service delivery windows are a real option." },
      { text: "Delivery orders would come from the kitchen, not through the dining room — no cart conflict.", correct: false,
        feedback: "The concern is about kitchen attention during cart service, not physical dining room flow. Address the scheduling solution." },
      { text: "Many dim sum restaurants manage both successfully — it's a matter of workflow adjustment.", correct: false,
        feedback: "'Workflow adjustment' sounds like extra work. Show the scheduling solution that avoids any adjustment." },
      { text: "What hours does your cart service run?", correct: false,
        feedback: "Good to know for scheduling, but show the delivery-hour control exists first." },
    ],
  },
  ch73: {
    objection: "I got confused by the monthly subscription model on another platform. I want simple, transparent pricing.",
    responses: [
      { text: "Our model is commission-only — you pay a percentage of each order, nothing when no orders come in, and no monthly subscription or minimum fees. The fee schedule is one page.", correct: true, technique: 'Transparency',
        feedback: "You gave a clear, specific contrast to the confusing subscription model and stated the pricing in the simplest possible terms. One page, pay per order, nothing else." },
      { text: "Our pricing is very competitive with other platforms.", correct: false,
        feedback: "Competitive pricing doesn't address the 'keep it simple' concern. Explain the actual structure." },
      { text: "Subscription models do have some advantages — they can be more predictable.", correct: false,
        feedback: "Defending subscriptions when they explicitly said they don't want one creates confusion." },
      { text: "What specifically confused you about the subscription on the other platform?", correct: false,
        feedback: "Good discovery, but give your clear model first before asking about their past confusion." },
    ],
  },
  ch74: {
    objection: "I'm not convinced there's actual delivery demand in this neighborhood for our type of food.",
    responses: [
      { text: "I can pull the search demand data for your specific cuisine type in your zip code right now — how many customers have searched for Chinese food in your neighborhood in the last 30 days and didn't find a match. That tells you exactly what unmet demand looks like.", correct: true, technique: 'Hyperlocal Data',
        feedback: "You offered to resolve the uncertainty with actual data rather than generic reassurance. Unmet search demand is the most compelling demand signal you can show." },
      { text: "There's strong demand for Chinese food everywhere — it's one of our most popular categories.", correct: false,
        feedback: "Category-level demand doesn't address their specific neighborhood concern. Offer the local data." },
      { text: "Most new restaurants see demand build quickly once they're listed.", correct: false,
        feedback: "Vague optimism about typical trajectories doesn't address a specific demand skepticism." },
      { text: "What does your current walk-in traffic look like on a weekday?", correct: false,
        feedback: "Good context, but offer the specific delivery demand data for their area first." },
    ],
  },
  ch75: {
    objection: "My staff is already working 12-hour shifts. I won't ask them to do more.",
    responses: [
      { text: "That's the right call to protect. The platform auto-accepts orders by default and the tablet sits in the kitchen showing what to make. For a 12-hour shift team, the actual additional work per delivery order is about 30 seconds of attention.", correct: true, technique: 'Effort Minimization',
        feedback: "You quantified the actual additional burden as minimal and showed the auto-accept feature removes most of the attention overhead. '30 seconds per order' makes the real math visible." },
      { text: "Your team will adapt — kitchens are dynamic environments.", correct: false,
        feedback: "Telling a manager their overworked staff should just adapt is exactly the wrong message." },
      { text: "You could hire a delivery coordinator to handle the extra volume.", correct: false,
        feedback: "Adding headcount to a team already on 12-hour shifts is the opposite of what they need." },
      { text: "What part of the workflow are you most worried about being disrupted?", correct: false,
        feedback: "Good question, but show how minimal the actual addition is before asking about specific workflow concerns." },
    ],
  },
  ch76: {
    objection: "Our portion sizes are handmade and vary slightly. I'm worried delivery customers will complain about inconsistency.",
    responses: [
      { text: "Set expectations in your menu description — 'handcrafted, portions vary slightly' — and customers who order know what to expect. Transparency upfront almost always prevents the complaint afterward.", correct: true, technique: 'Control Framing',
        feedback: "You gave a practical solution that puts expectation-setting in their hands. Menu descriptions are theirs to write — using them proactively turns a potential complaint into an authentic brand story." },
      { text: "Delivery customers are generally more tolerant of variations than dine-in customers.", correct: false,
        feedback: "Customer psychology claims without basis don't address their concern. Give them a practical action." },
      { text: "You could standardize portion sizes for delivery orders only.", correct: false,
        feedback: "Standardizing handmade portions for one channel changes the product. The description solution is simpler." },
      { text: "What dishes have the most portion variability?", correct: false,
        feedback: "Good context, but show the description solution first before identifying specific problem items." },
    ],
  },
  ch77: {
    objection: "We had an issue on another platform where the photos displayed were wrong and it confused customers.",
    responses: [
      { text: "You upload your own photos on our platform — nothing appears on your listing that you didn't put there. No stock images, no auto-pulled images. You control every visual on your page.", correct: true, technique: 'Control Framing',
        feedback: "You gave them full control over photography and made it clear the previous problem (unauthorized photos) can't happen on your platform." },
      { text: "Wrong photos are usually a user error — our onboarding team makes sure everything is correct.", correct: false,
        feedback: "Framing their past experience as user error is dismissive. Show the complete photo control instead." },
      { text: "We have a quality review process for all listing photos.", correct: false,
        feedback: "A review process still implies photos could be added by someone else. Show they control all photos." },
      { text: "What photos do you currently use for your restaurant's marketing?", correct: false,
        feedback: "Good discovery, but confirm complete photo control first before asking about their existing assets." },
    ],
  },
  ch78: {
    objection: "I've heard platforms have strict response time requirements that can hurt your rating if you miss them.",
    responses: [
      { text: "You can set the tablet to auto-confirm orders, so there's no manual response window to miss. If you prefer manual confirmation, we give you 10 minutes. But most partners just use auto-confirm and their ratings are never affected by response time.", correct: true, technique: 'Effort Minimization',
        feedback: "You solved the response time concern with a specific feature — auto-confirm — and gave the actual manual window as a fallback. The concern essentially disappears with auto-confirm." },
      { text: "Response time requirements are standard across all delivery platforms.", correct: false,
        feedback: "Normalizing the requirement doesn't resolve the concern. Show the auto-confirm solution." },
      { text: "Most restaurants find the response window manageable once they're in a routine.", correct: false,
        feedback: "'Once you get used to it' still implies effort. Show auto-confirm removes the concern entirely." },
      { text: "What's your current average kitchen speed for completing orders?", correct: false,
        feedback: "Prep speed and response time are different concerns. Show auto-confirm first." },
    ],
  },
  ch79: {
    objection: "I want to see 90 days of analytics before committing to anything long-term.",
    responses: [
      { text: "There's no long-term commitment to make — you can go live, run it for 90 days, and decide from the data. If the numbers don't justify continuing, you can pause or exit at any time. The 90-day window you want is just... going live.", correct: true, technique: 'Risk Reversal',
        feedback: "You showed that the data-driven approach they want and the platform's no-commitment model are the same thing. Going live is the trial — no separate arrangement needed." },
      { text: "I can share aggregate data from similar restaurants in your area to help you decide now.", correct: false,
        feedback: "Aggregate data doesn't replace their own restaurant's performance data. Accept their analytical approach." },
      { text: "90 days is a reasonable evaluation period — we can set up a formal pilot arrangement.", correct: false,
        feedback: "'Formal pilot' sounds more complex than needed. Show the no-commitment model already gives them what they want." },
      { text: "What metrics would you be most focused on in that 90-day window?", correct: false,
        feedback: "Good discovery, but show the no-commitment model first — then aligning on metrics makes sense." },
    ],
  },
  ch80: {
    objection: "I'm not comfortable with anonymous strangers rating our restaurant online.",
    responses: [
      { text: "Reviews on our platform are tied to verified orders only — no one can review your restaurant without having actually ordered from you. It removes the anonymous bad-faith reviews that plague open platforms.", correct: true, technique: 'Differentiation',
        feedback: "You drew a specific, meaningful distinction between verified order reviews and open review platforms. Verified-only is a structural protection that directly addresses the anonymous rating fear." },
      { text: "Reviews are unavoidable in the modern restaurant business — they help more than they hurt.", correct: false,
        feedback: "Telling someone their concern is unavoidable and they should accept it won't move the conversation forward." },
      { text: "You can respond to any review publicly — it gives you a voice in the conversation.", correct: false,
        feedback: "Response capability is a secondary point. Address the anonymous concern with the verified-order structure first." },
      { text: "What's your current experience been with reviews on Google or Yelp?", correct: false,
        feedback: "Good empathy and context, but show the verified-only difference first before asking about their past experience." },
    ],
  },
  ch81: {
    objection: "We only do a special menu during Chinese New Year. The rest of the year is standard. Would that work?",
    responses: [
      { text: "Absolutely — you can update your menu for the CNY period, then switch it back. Menu changes take about two minutes. A lot of our partners run limited-time seasonal menus exactly like this.", correct: true, technique: 'Flexibility Framing',
        feedback: "You validated the seasonal approach with a specific, fast update process. Two minutes and multiple examples make the flexibility real." },
      { text: "You'd probably want a permanent menu too — running delivery year-round is where the value is.", correct: false,
        feedback: "They asked if seasonal-only works. Answer yes before discussing year-round strategy." },
      { text: "Seasonal menus are a great marketing angle — it drives urgency for customers.", correct: false,
        feedback: "Marketing angle is secondary. Confirm the technical flexibility first." },
      { text: "What does your standard year-round menu look like?", correct: false,
        feedback: "Good context, but confirm seasonal menu flexibility works first." },
    ],
  },
  ch82: {
    objection: "Our kitchen equipment is not optimized for delivery packaging — we'd need new equipment.",
    responses: [
      { text: "No new equipment needed — delivery packaging uses the same prep surfaces, containers, and equipment you already have. The packaging itself is just a take-out container, not a separate production line.", correct: true, technique: 'Effort Minimization',
        feedback: "You clarified that no equipment change is required. The delivery packaging concern is a misconception — and clearing it up immediately removes a significant perceived barrier." },
      { text: "Many restaurants adapt their existing equipment for delivery quite easily.", correct: false,
        feedback: "'Adapt' implies change. Be direct: no adaptation is needed at all." },
      { text: "We can connect you with packaging suppliers who work with your specific kitchen setup.", correct: false,
        feedback: "Offering packaging suppliers implies equipment changes are needed. Clarify nothing needs to change." },
      { text: "What equipment concern specifically were you thinking about?", correct: false,
        feedback: "Good to understand, but first confirm no equipment change is needed before exploring their specific worry." },
    ],
  },
  ch83: {
    objection: "We've seen other restaurants get hit with fake orders that cost them real ingredients.",
    responses: [
      { text: "Every order on our platform is pre-authorized through the customer's payment method before it reaches you. There's no way to place an order without a valid payment being captured first. Fake or unpaid orders are structurally impossible.", correct: true, technique: 'Partnership Assurance',
        feedback: "You explained the payment pre-authorization model that makes fake orders impossible by design. This is more reassuring than a policy claim — it's a structural guarantee." },
      { text: "Fraud detection systems catch most fake orders before they reach restaurants.", correct: false,
        feedback: "'Most' is not reassuring. Explain the pre-authorization model that prevents all unpaid orders." },
      { text: "That issue is more common on cash delivery platforms — ours is fully cashless.", correct: false,
        feedback: "Cashless doesn't by itself prevent fraud. Explain the pre-authorization explicitly." },
      { text: "Has this happened to you specifically or is it something you've heard about?", correct: false,
        feedback: "Good context, but explain the payment structure first so they understand why it can't happen on this platform." },
    ],
  },
  ch84: {
    objection: "I want an exclusivity deal — no other Chinese restaurants within a mile of me on the platform.",
    responses: [
      { text: "We don't offer geographic exclusivity — it's an open marketplace. But here's what matters: your rating, your reviews, and your prep time determine who shows up first in search. Exclusivity through excellence beats artificial exclusivity every time.", correct: true, technique: 'Honest Consulting',
        feedback: "You were honest about what's not available and gave them a real path to competitive advantage. Reframing to organic differentiation is more credible than false promises." },
      { text: "Exclusivity deals aren't something we typically offer, but let me check if something can be arranged.", correct: false,
        feedback: "Don't create false hope about something that isn't available. Give an honest answer." },
      { text: "Competition on the platform is actually healthy — it grows the overall market.", correct: false,
        feedback: "Reframing competition as good doesn't address their request for exclusivity. Be direct about what's available." },
      { text: "What specifically worries you about nearby competitors on the platform?", correct: false,
        feedback: "Good discovery, but be honest about the exclusivity model first before exploring their competitive concern." },
    ],
  },
  ch85: {
    objection: "My operations manager thinks this is a distraction from our main business.",
    responses: [
      { text: "He's the right person to evaluate it. Could I have a 20-minute call with him directly? I'd rather address his specific concerns than have you try to relay a pitch.", correct: true, technique: 'Stakeholder Navigation',
        feedback: "You respected the operations manager's authority and asked to speak directly rather than going around him. Selling around a key operations influencer almost always fails." },
      { text: "Operations managers often come around once they see how little it changes the day-to-day.", correct: false,
        feedback: "Dismissing an operations manager's judgment with 'they come around' will create resistance." },
      { text: "What specifically does he think would be a distraction?", correct: false,
        feedback: "Good instinct, but offer to speak to him directly first — he should explain his own concerns." },
      { text: "Is there a way you could move forward without involving him at this stage?", correct: false,
        feedback: "Asking them to bypass a named decision-influencer will damage the relationship with both." },
    ],
  },
  ch86: {
    objection: "Our menu has 120 items across four pages. Getting photos for all of them feels overwhelming.",
    responses: [
      { text: "You don't need photos for every item — most successful delivery menus feature 20 to 30 hero items with great photos, and the rest have text descriptions only. Our team will help you identify which items to photograph and handle the rest.", correct: true, technique: 'Effort Minimization',
        feedback: "You solved the scale problem by showing a curated approach is both acceptable and actually better. 30 hero items is more achievable than 120, and the outcome is often stronger." },
      { text: "We offer a free photography service that could cover all 120.", correct: false,
        feedback: "Even free, scheduling 120 items is a lot. Show the curated approach is actually the right strategy." },
      { text: "Text descriptions work fine without photos — many restaurants don't use images at all.", correct: false,
        feedback: "No photos is less optimal than a curated set of strong images. Give them the middle-ground approach." },
      { text: "Which items are your bestsellers? We'd start there.", correct: false,
        feedback: "Good approach, but give the overall strategy — 20-30 hero items — before asking which ones." },
    ],
  },
  ch87: {
    objection: "We lost two of our best cooks last month. The team is rebuilding and stressed.",
    responses: [
      { text: "That's a real constraint and it makes sense to wait until the kitchen is stable. I'll stay in touch — and I can send you setup materials now so you're ready to move quickly when the team is back to full strength.", correct: true, technique: 'Soft Next Step',
        feedback: "You accepted the timing with genuine empathy and kept the deal warm. Materials now means you restart warm, not cold, when they're ready." },
      { text: "Delivery requires very little kitchen overhead — it might actually be easier than you think.", correct: false,
        feedback: "A kitchen rebuilding after losing key staff doesn't need more volume. Respect the timing." },
      { text: "A lot of restaurants have managed platform delivery with lean teams.", correct: false,
        feedback: "Lean-team optimism doesn't help when someone is actively stressed about kitchen capacity." },
      { text: "What's your timeline for getting back to full team strength?", correct: false,
        feedback: "Good for planning, but accept the timing constraint first before asking about recovery timeline." },
    ],
  },
  ch88: {
    objection: "We're halal-certified. I need to make sure our certification and process is clearly communicated on the app.",
    responses: [
      { text: "You can add halal certification to your listing as a tag and in your restaurant description — it shows in search filters so customers actively looking for halal options will find you. This is actually a significant visibility advantage in a lot of neighborhoods.", correct: true, technique: 'Control Framing',
        feedback: "You confirmed the labeling control and reframed halal certification as a discoverability advantage, not a complication. Search filter visibility is a real feature." },
      { text: "We have a halal category on the platform — you'd be listed there automatically.", correct: false,
        feedback: "Don't assume automatic categorization. Show them they control the halal tag themselves." },
      { text: "Customers looking for halal options will find you through general search.", correct: false,
        feedback: "General search isn't as reliable as a specific halal filter. Show the filter feature." },
      { text: "What certification body issued your halal certificate?", correct: false,
        feedback: "Good to know eventually, but confirm the platform supports halal tagging first." },
    ],
  },
  ch89: {
    objection: "I don't want our restaurant associated with Uber given some of their past controversies.",
    responses: [
      { text: "That's a values consideration I respect. What I can tell you is that your restaurant listing is its own independent brand on the platform — customers see you, your food, and your reviews, not Uber's corporate identity. But if the association itself conflicts with your values, that's a fair line to draw.", correct: true, technique: 'Values Alignment',
        feedback: "You gave an honest answer about brand separation on the platform while respecting their right to say no. Acknowledging a legitimate values concern builds more trust than arguing against it." },
      { text: "Uber has made significant improvements on the issues that were controversial.", correct: false,
        feedback: "Corporate reputation defenses land poorly with someone who's already formed a view. Acknowledge the concern." },
      { text: "Most customers don't associate individual restaurants with platform corporate behavior.", correct: false,
        feedback: "Making claims about what customers think doesn't address their personal values position." },
      { text: "What specifically about Uber's past are you most concerned about?", correct: false,
        feedback: "Good to understand, but acknowledge the concern with respect before asking them to elaborate." },
    ],
  },
  ch90: {
    objection: "Our menu changes frequently and I'm worried the app will always show outdated information.",
    responses: [
      { text: "Menu updates take about two minutes per item — you edit them directly in the app or on your phone. And if something sells out or changes suddenly, you can update it in real time during service. There's no lag.", correct: true, technique: 'Flexibility Framing',
        feedback: "You gave a specific, fast update process and highlighted real-time availability — the combination that directly addresses the stale-menu fear." },
      { text: "Most restaurants update their menus seasonally — it becomes routine.", correct: false,
        feedback: "A restaurant that changes menus frequently needs a faster solution than 'seasonal updates become routine.'" },
      { text: "You could create a simplified core menu that doesn't change much.", correct: false,
        feedback: "Asking them to limit their menu flexibility doesn't address the concern — it eliminates the feature they care about." },
      { text: "How often does your menu typically change?", correct: false,
        feedback: "Good to know, but show how fast updates are first so the question feels like calibration, not audit." },
    ],
  },
  ch91: {
    objection: "We have three locations. I'd want to start with one before rolling it out to all three.",
    responses: [
      { text: "That's a smart way to pilot it. We can launch at one location, you validate the workflow and the numbers, and roll to the other two once you're confident. The second and third setup uses everything you already built — it's much faster.", correct: true, technique: 'Pipeline Value',
        feedback: "You validated the staged approach and showed the compounding benefit: location one's learning makes locations two and three fast. This frames single-location as smart strategy, not limitation." },
      { text: "Starting with all three would be more efficient — the setup is the same work regardless.", correct: false,
        feedback: "They've told you their preference. Arguing for a different rollout approach won't help." },
      { text: "Which location would you want to start with?", correct: false,
        feedback: "Good question, but validate the staged approach first before asking which location." },
      { text: "Most multi-location operators find managing all at once isn't that different from one.", correct: false,
        feedback: "They know their three locations better than you do. Respect their rollout preference." },
    ],
  },
  ch92: {
    objection: "Our Saturday dim sum service is fully booked and I don't want delivery interfering with that.",
    responses: [
      { text: "Turn delivery off for Saturday completely — or only on from 7am to 10:30am before service fills up. The delivery schedule is fully independent of your restaurant operating hours. Saturday dim sum is completely protected.", correct: true, technique: 'Capacity Planning',
        feedback: "You gave precise scheduling options: off entirely, or only pre-service. The independence of delivery hours from operating hours is the key feature that makes this work." },
      { text: "Delivery during dim sum service would be rare — most orders come at different times.", correct: false,
        feedback: "Telling a fully-booked Saturday dim sum operator that delivery orders will probably come at different times isn't specific enough." },
      { text: "You could limit delivery to weekday hours only.", correct: false,
        feedback: "True but confirms their fear rather than showing the granular scheduling control. Be more specific." },
      { text: "What times does your Saturday dim sum service typically run?", correct: false,
        feedback: "Good for scheduling, but show they control delivery hours independently first." },
    ],
  },
  ch93: {
    objection: "My manager gets a bonus tied to in-store margin. Delivery could shift his incentive structure.",
    responses: [
      { text: "Delivery revenue and in-store margin are tracked separately in your reporting — so in-store margin isn't affected or diluted by delivery orders. His bonus math stays exactly as it is.", correct: true, technique: 'Transparency',
        feedback: "You clarified the reporting separation that protects the existing incentive structure. This is an operational detail that matters a lot to someone with a specific compensation concern." },
      { text: "You could restructure his bonus to include delivery performance as well.", correct: false,
        feedback: "Suggesting a compensation restructure is a bigger change than the problem requires." },
      { text: "Delivery revenue is additive — it shouldn't affect in-store metrics negatively.", correct: false,
        feedback: "True in principle, but the manager needs to know the reporting is separate so there's no measurement bleed." },
      { text: "What's your current bonus structure tied to?", correct: false,
        feedback: "Good context, but confirm the reporting separation first before exploring the incentive structure details." },
    ],
  },
  ch94: {
    objection: "We just hired a new head chef and the menu is still evolving. I don't want to lock anything in.",
    responses: [
      { text: "Nothing is locked in — your menu updates in about two minutes per item whenever you're ready to change it. You can start with your five most stable dishes today and add or remove items as the new menu takes shape.", correct: true, technique: 'Flexibility Framing',
        feedback: "You removed the 'locking in' concern with two features: fast updates and the ability to start small. A five-item starting menu with easy updates fully accommodates an evolving menu." },
      { text: "Wait until the menu is stable — there's no rush to launch.", correct: false,
        feedback: "Deferring when a good flexible option exists loses the current momentum and the new-restaurant boost timing." },
      { text: "A new menu is exciting — delivery could actually help you test dishes with more volume.", correct: false,
        feedback: "Framing delivery as menu testing without addressing the 'locked in' concern misses the key worry." },
      { text: "How long do you think the menu evolution process will take?", correct: false,
        feedback: "Good for planning, but show the update flexibility first so they see no commitment is required." },
    ],
  },
  ch95: {
    objection: "The packaging cost for delivery will eat into our already thin margins.",
    responses: [
      { text: "Delivery packaging typically runs $0.50 to $1.50 per order depending on what you use. On a $35 average delivery order, that's 1.5 to 4% of revenue. You can also build packaging cost into your delivery pricing — it's fully in your control.", correct: true, technique: 'Incremental Margin Logic',
        feedback: "You gave a specific, honest packaging cost range and showed the math in context. Offering pricing control as a tool to manage it gives them agency over the margin impact." },
      { text: "Packaging costs are minimal — most restaurants don't notice them.", correct: false,
        feedback: "Dismissing a thin-margin operator's packaging concern as minimal is the wrong approach. Show the actual numbers." },
      { text: "You could use very simple, inexpensive packaging to minimize cost.", correct: false,
        feedback: "True option, but give the actual cost range and pricing control first." },
      { text: "What are you currently paying for takeout packaging?", correct: false,
        feedback: "Good context, but give the general cost range and pricing control before asking for their specific spend." },
    ],
  },
  ch96: {
    objection: "I only want delivery available from 2pm to 5pm when we're slow. Is that specific window possible?",
    responses: [
      { text: "Yes — you can set your delivery hours to any window you choose. 2pm to 5pm is a completely valid schedule and I've seen other restaurants use exactly that format for off-peak revenue.", correct: true, technique: 'Control Framing',
        feedback: "Direct, accurate, and validated with a real example. The scheduling flexibility exists and their specific preference is supported." },
      { text: "A wider delivery window would generate more revenue — worth considering.", correct: false,
        feedback: "They didn't ask for advice on expanding hours. They asked if their specific window is possible. Answer that." },
      { text: "2-5pm is a lower-demand window — you might not get many orders in that slot.", correct: false,
        feedback: "Whether demand is high or low in that window is their decision to make. Confirm the scheduling first." },
      { text: "What hours are you typically slowest?", correct: false,
        feedback: "They told you — 2pm to 5pm. Confirm that window is possible rather than asking what you already know." },
    ],
  },
  ch97: {
    objection: "Our menu names are in Chinese characters. I'm not sure how they'd translate or display on an app.",
    responses: [
      { text: "Your menu can display both Chinese characters and English descriptions — you control both fields. You can write the name as you want it in Chinese, add an English subtitle, and add a description in either language. Many of our partners use bilingual menu displays.", correct: true, technique: 'Flexibility Framing',
        feedback: "You gave a specific, complete answer about bilingual menu support. Both scripts, both languages, owner-controlled — this directly addresses the display concern." },
      { text: "The platform is available in English — you'd want to translate your menu into English.", correct: false,
        feedback: "Asking them to translate their menu erases their Chinese identity. Show the bilingual option." },
      { text: "Most customers on delivery apps prefer English descriptions anyway.", correct: false,
        feedback: "Making claims about customer preferences that dismiss their Chinese menu identity is the wrong frame." },
      { text: "Would you want the Chinese names to appear first or the English translations?", correct: false,
        feedback: "Good question, but confirm bilingual display is supported before asking about their preferred order." },
    ],
  },

  // ── CHINATOWN ──────────────────────────────────────────────────────────────
  s04: {
    objection: "I'm slammed right now. Come back in six months.",
    responses: [
      {
        // SHORT correct (~15 words)
        text: "Understood — setup takes about 20 minutes and mostly runs itself after that. Worth a 10-minute call this week?",
        correct: true,
        technique: 'Ease + Soft Next Step',
        feedback: "You respected their time, addressed the real barrier (effort), and asked for a small, low-stakes commitment. A specific ask — '10 minutes this week' — is much easier to say yes to than an open-ended follow-up.",
      },
      {
        // LONG wrong (~50 words)
        text: "Six months is a long time to leave potential revenue untapped, especially during what looks like a busy season for you. I know it feels like adding one more thing to the pile, but I genuinely think 15 minutes now could set you up for an easier rest of the year without any disruption to what you're doing.",
        correct: false,
        feedback: "Framing their hesitation as 'leaving money on the table' can feel pushy and dismissive of what's genuinely a busy day. Match their energy first.",
      },
      {
        // MEDIUM wrong (~20 words)
        text: "No problem at all — I'll put a calendar reminder and reach back out in exactly six months when things have settled down for you.",
        correct: false,
        feedback: "Deals deferred to 'six months' almost never close. You'll be starting from zero with no urgency and no relationship built.",
      },
      {
        // SHORT wrong (~12 words)
        text: "When's a quieter time of day? I can work around your schedule.",
        correct: false,
        feedback: "This is considerate, but without a reason to act now it still results in a vague future follow-up. Pair it with a clear, short value pitch.",
      },
    ],
  },
  s05: {
    objection: "Managing another platform sounds like a nightmare. My team is already stretched thin.",
    responses: [
      {
        // LONG correct (~50 words)
        text: "That's fair — and it shouldn't add to your team's load at all. After setup, most partners spend about five minutes a day on it. Orders come through one tablet and can auto-confirm, so your team is really just cooking the food — the platform handles routing, payments, and customer updates automatically.",
        correct: true,
        technique: 'Effort Minimization',
        feedback: "You quantified the actual time burden and made it concrete. '5 minutes a day' and 'auto-confirm' directly address the operational fear without dismissing it.",
      },
      {
        // SHORT wrong (~12 words)
        text: "It's simpler than it sounds — your team will get used to it quickly.",
        correct: false,
        feedback: "Telling a stretched team that something 'isn't that hard' can feel dismissive. Show them exactly how little effort it takes rather than asking them to trust you.",
      },
      {
        // MEDIUM wrong (~28 words)
        text: "We have a full onboarding team that handles the entire setup from day one. Once you're live, there's also 24/7 support so your team always has someone to call.",
        correct: false,
        feedback: "Setup isn't the concern — it's the ongoing daily management. Make sure you're addressing the right fear.",
      },
      {
        // SHORT wrong (~10 words)
        text: "What would it need to look like operationally for your team?",
        correct: false,
        feedback: "Good instinct, but asking this before painting the picture of how light it actually is gives them no anchor. Show the reality first, then tailor if needed.",
      },
    ],
  },
  s06: {
    objection: "What actually makes Uber Eats different? You all say the same things.",
    responses: [
      {
        // MEDIUM correct (~38 words)
        text: "Fair — most pitches do sound similar. The one thing that's genuinely different is the Uber network: people who use Uber for rides also order food, so you're reaching customers who may not be browsing other delivery apps at all.",
        correct: true,
        technique: 'Differentiation',
        feedback: "You acknowledged their skepticism honestly, then offered one specific, credible differentiator tied to the broader Uber ecosystem. One clear reason beats a list of generic claims.",
      },
      {
        // LONG wrong (~50 words)
        text: "We consistently rank at or near the top for customer satisfaction in independent third-party surveys, and we invest more in in-app restaurant marketing and promotional placements than any other platform. We also have the most sophisticated personalization engine, which means your restaurant surfaces in front of the right customers at exactly the right moment.",
        correct: false,
        feedback: "'We're the best' claims without specifics are exactly what they're tired of hearing. Lead with something concrete and verifiable.",
      },
      {
        // SHORT wrong (~10 words)
        text: "It depends — what are you really looking for in a platform partner?",
        correct: false,
        feedback: "Deflecting a direct question with another question can feel evasive. Answer first, then use discovery to personalize.",
      },
      {
        // MEDIUM wrong (~20 words)
        text: "Our commission rates are competitive and we invest more in restaurant marketing and promotions than any other platform out there.",
        correct: false,
        feedback: "Price and marketing spend are claims competitors can match. Lead with a differentiator that's structurally unique to Uber.",
      },
    ],
  },

  // ── MERCADO DISTRICT ───────────────────────────────────────────────────────
  s07: {
    objection: "Our customers walk in the door. We've never needed delivery and I don't see why that would change.",
    responses: [
      {
        // SHORT correct (~22 words)
        text: "Your regulars are your foundation and delivery wouldn't touch that. It reaches people who want your food but can't make it in — a completely different customer.",
        correct: true,
        technique: 'Additive Framing',
        feedback: "You protected what they value most (their loyal in-person base) and showed delivery as capturing a completely separate demand. Never ask an owner to change their model — show them how delivery extends it.",
      },
      {
        // LONG wrong (~50 words)
        text: "Consumer habits have genuinely shifted toward delivery over the past few years, especially among younger demographics who make up a growing share of restaurant spending. It's worth thinking about future-proofing the business so that when those customers are looking for options in your neighborhood, you're one of the restaurants they find.",
        correct: false,
        feedback: "Implying their current model is at risk can put proud owners on the defensive. Lead with opportunity, not the threat of being left behind.",
      },
      {
        // MEDIUM wrong (~25 words)
        text: "A lot of your competitors in the neighborhood are already on delivery platforms. There's a real first-mover opportunity to capture that demand before they build a head start.",
        correct: false,
        feedback: "Fear of competition can feel like pressure rather than partnership. With community-rooted restaurants, trust and opportunity beat competitive anxiety.",
      },
      {
        // MEDIUM wrong (~20 words)
        text: "That makes sense. Would it help to look at what similar restaurants nearby are seeing in terms of delivery demand in this area?",
        correct: false,
        feedback: "Good discovery, but leading with data request before making the value case puts the cart before the horse. Show why it matters first.",
      },
    ],
  },
  s08: {
    objection: "Our margins are at 12%. There's no room to share revenue with another platform.",
    responses: [
      {
        // LONG correct (~50 words)
        text: "At 12%, I completely understand the concern. The way delivery economics work is that your kitchen and staff are already paid for — so delivery revenue runs through the same fixed costs you're already carrying. The net margin on those incremental orders tends to look very different from your dine-in margin math.",
        correct: true,
        technique: 'Incremental Margin Logic',
        feedback: "You engaged with their actual numbers and reframed the economics correctly. Delivery through existing fixed costs has a very different cost structure than dine-in — and saying so shows you understand their business.",
      },
      {
        // SHORT wrong (~12 words)
        text: "We have lower commission rates than most competitors — the margin hit is smaller than you think.",
        correct: false,
        feedback: "A thin-margin owner has already done this math. Claiming lower rates without showing the full picture doesn't resolve the structural concern.",
      },
      {
        // MEDIUM wrong (~28 words)
        text: "We could look at a trial period with reduced fees so you can test the model before committing. That way you're not taking on any long-term risk upfront.",
        correct: false,
        feedback: "Temporary discounts don't fix a structural concern. After the trial ends, the objection returns — and you've set an expectation you can't sustain.",
      },
      {
        // SHORT wrong (~10 words)
        text: "What do your margins look like on a typical busy night?",
        correct: false,
        feedback: "Discovery is valuable, but asking about their margins before showing you understand delivery economics signals you're not ready to have a financial conversation.",
      },
    ],
  },
  s09: {
    objection: "We already have a delivery driver — Miguel. Our customers love him and it's working fine.",
    responses: [
      {
        // MEDIUM correct (~38 words)
        text: "Miguel sounds like a real asset, especially for your regulars. The question worth thinking about is what happens on a slammed Friday night or when he's out sick — Uber Eats handles that overflow and reaches new customers he can't cover on his own.",
        correct: true,
        technique: 'Complementary Positioning',
        feedback: "You honored the relationship they value and positioned Uber Eats as a safety net and growth layer, not a replacement. The 'yes, and' approach means they never feel like they have to choose.",
      },
      {
        // LONG wrong (~48 words)
        text: "A single driver is a real operational risk that a lot of restaurant owners don't fully account for until something goes wrong. When Miguel is unavailable — a sick day, a vacation, or a surge night — you're not just losing revenue, you're potentially disappointing loyal customers who counted on getting their order.",
        correct: false,
        feedback: "Pointing out the vulnerability in someone they clearly trust can feel like an attack. Lead with acknowledgment before showing the gap.",
      },
      {
        // SHORT wrong (~12 words)
        text: "Our drivers are background-checked and rated — much more reliable and scalable than a single hire.",
        correct: false,
        feedback: "Comparing your system to Miguel invites a loyalty debate you won't win. Reframe rather than compete.",
      },
      {
        // SHORT wrong (~10 words)
        text: "How long has Miguel been with you? Is he full-time?",
        correct: false,
        feedback: "Discovery is useful, but leading with questions about Miguel suggests you're looking for weaknesses in their setup. Lead with respect for what's working first.",
      },
    ],
  },

  // ── SAKURA QUARTER ─────────────────────────────────────────────────────────
  s10: {
    objection: "We tried a delivery platform two years ago. Orders were constantly wrong and complaints came back to us. Our reputation took a hit.",
    responses: [
      {
        // SHORT correct (~22 words)
        text: "I'm really sorry that happened — reputation damage is serious. What specifically went wrong? I want to address the actual issue, not just promise it's different.",
        correct: true,
        technique: 'Empathy + Discovery',
        feedback: "You led with real empathy and resisted the urge to immediately pitch. Asking what specifically went wrong shows you're listening, not just waiting to sell. That's how you rebuild trust after a bad experience.",
      },
      {
        // LONG wrong (~50 words)
        text: "That's really unfortunate, and I completely understand why you'd be hesitant. A lot has changed in the delivery industry over the last two years — accuracy, driver reliability, and order error handling have all improved significantly across every major platform including ours, and we're genuinely not the same product that burned you before.",
        correct: false,
        feedback: "Industry-wide improvements don't address their specific pain. They need to hear their exact concern is covered, not that 'things are generally better now.'",
      },
      {
        // MEDIUM wrong (~30 words)
        text: "Uber Eats has strong accuracy guarantees — if an error is on our end, we absorb the full refund cost so it never comes back to your restaurant or affects your reputation.",
        correct: false,
        feedback: "The guarantee is important, but leading with it before acknowledging the damage they experienced can feel like you're rushing past their pain to make the pitch.",
      },
      {
        // SHORT wrong (~12 words)
        text: "Those experiences are exactly why most platforms have invested heavily in fixing those problems.",
        correct: false,
        feedback: "Normalizing their experience with 'a lot of restaurants feel that way' minimizes something that genuinely hurt their business. Treat it as the serious issue it was.",
      },
    ],
  },
  s11: {
    objection: "Delivery feels off-brand for us. We're an omakase experience — the setting and service are part of what people are paying for.",
    responses: [
      {
        // MEDIUM correct (~42 words)
        text: "That makes complete sense — the experience is the product, and we'd never suggest putting the omakase itself on delivery. Some partners in your position have built a separate premium delivery menu as a brand extension, keeping the main experience fully intact.",
        correct: true,
        technique: 'Premium Positioning',
        feedback: "You validated their brand values completely before offering an alternative path. A curated secondary menu lets them control the delivery identity without compromising the flagship experience.",
      },
      {
        // LONG wrong (~50 words)
        text: "A lot of Michelin-recognized restaurants are now on delivery platforms, and several have found it enhances rather than diminishes their brand by making them accessible in a new context. The key is controlling how the delivery menu is presented so it feels consistent with your standards and doesn't dilute the core experience.",
        correct: false,
        feedback: "Citing other high-end restaurants without specifics can backfire — if those places are delivering subpar experiences, it confirms the fear rather than alleviating it.",
      },
      {
        // SHORT wrong (~12 words)
        text: "Customers increasingly expect delivery from upscale restaurants — it's become more of a baseline expectation.",
        correct: false,
        feedback: "Telling a brand-conscious chef what customers 'expect' from them subordinates their identity to market trends. That's not a partnership — it's pressure.",
      },
      {
        // SHORT wrong (~10 words)
        text: "What aspects of the experience are you most worried wouldn't translate?",
        correct: false,
        feedback: "Good question in the right context, but asking before you've shown there's a viable path forward invites them to enumerate all the reasons it won't work.",
      },
    ],
  },
  s12: {
    objection: "I can't decide this alone. My business partner handles finances and she's traveling until next month.",
    responses: [
      {
        // LONG correct (~45 words)
        text: "That makes total sense — it's a decision worth making together. Could I send you both a short summary so you're looking at the same information when she's back? I'm also happy to join a call with both of you at whatever time works.",
        correct: true,
        technique: 'Stakeholder Navigation',
        feedback: "You respected their process and kept the deal moving without pressuring them to bypass their partner. Offering to join a joint call removes the risk of your pitch being misrepresented in a game of telephone.",
      },
      {
        // SHORT wrong (~12 words)
        text: "Is there anything in the financials you feel comfortable moving forward on before she returns?",
        correct: false,
        feedback: "Asking them to work around their partner — even gently — creates distrust. Always work within the prospect's decision-making process.",
      },
      {
        // SHORT wrong (~10 words)
        text: "No problem — I'll check back in when she returns next month.",
        correct: false,
        feedback: "An open-ended 'I'll check back' with no materials shared means you'll be starting cold again in a month. Leave them something to work with in the meantime.",
      },
      {
        // MEDIUM wrong (~25 words)
        text: "What do you think her main hesitations would be? If I know the key concerns in advance, I can have specific answers ready when we all connect.",
        correct: false,
        feedback: "Useful discovery, but only after you've established a concrete next step. Without a plan first, this question leaves the deal floating with no momentum.",
      },
    ],
  },

  // ── THE GREEN MILE ─────────────────────────────────────────────────────────
  s13: {
    objection: "We're already on two platforms. A third means more fees, more complexity, and more things that can go wrong.",
    responses: [
      {
        // SHORT correct (~28 words)
        text: "Fair. I can pull the customer overlap data for your area — if the Uber Eats audience isn't meaningfully different from what you're already reaching, it's probably not worth adding.",
        correct: true,
        technique: 'Honest Consulting',
        feedback: "You positioned yourself as a consultant willing to say 'maybe it's not right for you' — which paradoxically makes them far more likely to trust you and say yes. Honest analysis earns more credibility than a pitch.",
      },
      {
        // LONG wrong (~50 words)
        text: "The operational complexity concern is real, and I hear it from restaurants already managing multiple platforms. Our tablet consolidates all incoming orders into one interface so your team isn't bouncing between screens, and the setup is designed to work alongside whatever POS system you're currently using without adding a new layer of complexity.",
        correct: false,
        feedback: "The tablet is a good point, but it only addresses complexity — not the fee concern. Address both dimensions before they have to.",
      },
      {
        // MEDIUM wrong (~22 words)
        text: "Being on more platforms generally means more exposure and more orders — it's difficult to argue against additional distribution when the alternative is leaving demand unmet.",
        correct: false,
        feedback: "A data-driven founder will immediately ask for evidence behind 'generally.' Broad claims without backing kill credibility fast with analytical buyers.",
      },
      {
        // MEDIUM wrong (~20 words)
        text: "Which two platforms are you currently on? That would help me understand where Uber Eats would actually fit and add value.",
        correct: false,
        feedback: "Good discovery, but ask it in the context of why the overlap question matters. Discovery without framing can feel like a scripted questionnaire.",
      },
    ],
  },
  s14: {
    objection: "I need to see real numbers. What's the actual revenue lift for a restaurant like ours in this area?",
    responses: [
      {
        // MEDIUM correct (~40 words)
        text: "I have neighborhood-level data I can share right now. Health-forward fast-casual restaurants in this zip code average around $3,200 in new monthly revenue in month one, growing to about $5,100 by month three. I can send you the full breakdown today.",
        correct: true,
        technique: 'Hyperlocal Data',
        feedback: "Category-specific, neighborhood-level data is what separates a credible partner from a generic sales pitch. You answered directly and offered to share the underlying data — exactly what an analytical buyer needs.",
      },
      {
        // SHORT wrong (~10 words)
        text: "Results vary, but we see strong performance across most categories on our platform.",
        correct: false,
        feedback: "Hedging when someone asks for numbers signals you either don't have them or don't trust them. If you have data, use it.",
      },
      {
        // LONG wrong (~50 words)
        text: "I'd want to pull the most accurate numbers specifically for your restaurant type and volume range before giving you a figure — generic industry stats can be misleading and I don't want to set expectations that turn out to be off for your situation. Can I follow up with a tailored analysis by end of week?",
        correct: false,
        feedback: "Deferring when they've explicitly asked for data creates doubt. If you have relevant benchmarks, share them now — then offer to follow up with tailored detail.",
      },
      {
        // SHORT wrong (~10 words)
        text: "What does your current monthly revenue look like? That would help me estimate.",
        correct: false,
        feedback: "Asking for their financials before sharing any of yours can feel invasive. Give them something first, then ask for context to refine.",
      },
    ],
  },
  s15: {
    objection: "Our customers order directly from our website. We keep 100% of that revenue. Adding Uber Eats means giving up margin we're already keeping.",
    responses: [
      {
        // LONG correct (~52 words)
        text: "Your direct channel is absolutely worth protecting — and Uber Eats wouldn't touch those customers. What it brings is the person who's never heard of you and is browsing the app hungry right now. It's really a customer acquisition question more than a revenue-sharing one — think of the fee as a marketing cost with guaranteed reach.",
        correct: true,
        technique: 'Channel Separation',
        feedback: "You validated their direct channel completely, then drew a clear line between two distinct customer pools. Repositioning Uber Eats as acquisition (not competition) makes the fee feel like a marketing cost with a guaranteed return.",
      },
      {
        // MEDIUM wrong (~28 words)
        text: "Having an Uber Eats presence also increases brand visibility over time, which can drive more traffic back to your direct channel — think of it as a top-of-funnel investment.",
        correct: false,
        feedback: "This is plausible but speculative. An analytical founder will want evidence, not optimistic theory. Lead with the cleaner, more defensible argument.",
      },
      {
        // LONG wrong (~45 words)
        text: "The customers coming through Uber Eats are typically very different from the ones who've found your website — they haven't discovered you yet, which means you're growing your total addressable customer base rather than cannibalizing orders that would have come through your own channel anyway. Most partners see the two as complementary.",
        correct: false,
        feedback: "This is the right direction but too vague. 'Typically different' needs backing. Be specific about why the user bases are distinct.",
      },
      {
        // SHORT wrong (~10 words)
        text: "How much of your current order volume comes through the website?",
        correct: false,
        feedback: "Useful context, but asking before making the value case signals you're not yet ready to engage with their specific concern. Answer first, then refine.",
      },
    ],
  },

  // ── LITTLE ITALY (EXTENDED II) ───────────────────────────────────────────
  it18: {
    objection: "I'm not willing to sign a long-term contract. What if this doesn't work out for us?",
    responses: [
      { text: "There's no long-term commitment — you can pause or end your listing at any time. We earn the relationship month by month.", correct: true, technique: 'Risk Reversal',
        feedback: "You removed the commitment fear entirely. Month-to-month flexibility is a genuine differentiator — and it's the honest answer." },
      { text: "Our standard terms are pretty short — 60 days with 30 days notice.", correct: false,
        feedback: "Citing any contract length confirms their fear. Lead with the exit flexibility before mentioning terms." },
      { text: "Most restaurants stay well past the initial period once they see results.", correct: false,
        feedback: "This sounds like you're expecting to retain them regardless. Address the fear directly." },
      { text: "What would you need to see in the first month to feel comfortable long-term?", correct: false,
        feedback: "Without first confirming no lock-in, this question makes the commitment fear worse." },
    ],
  },
  it19: {
    objection: "We're already doing well. I don't see why we'd take on more risk when everything's working.",
    responses: [
      { text: "That's the best position to expand from. Delivery through existing capacity is low-risk incremental revenue — you lose nothing if it underperforms.", correct: true, technique: 'Additive Framing',
        feedback: "You validated their success and positioned delivery as risk-free experimentation. The best time to test is when you have nothing to lose." },
      { text: "Profitable restaurants are exactly who we want — you have the capacity to handle delivery demand.", correct: false,
        feedback: "This is about you, not them. Address their 'why risk it' concern directly." },
      { text: "Even healthy businesses can see margins erode — this is a buffer.", correct: false,
        feedback: "Implying their success might not last creates unnecessary anxiety. Lead with opportunity, not threat." },
      { text: "What does your revenue breakdown look like across lunch and dinner?", correct: false,
        feedback: "Discovery without a compelling reason to move first misses the point entirely." },
    ],
  },
  it20: {
    objection: "Our wine pairing is central to the experience. Delivery without that isn't the same product.",
    responses: [
      { text: "You're right that the full experience doesn't travel — but some of your signature dishes could work as a delivery-only sub-menu, keeping the dining experience completely intact.", correct: true, technique: 'Premium Positioning',
        feedback: "You acknowledged the gap and offered a path that doesn't compromise the main brand. A separate delivery menu protects both identities." },
      { text: "Some platforms allow alcohol delivery with proper licensing — we could explore that.", correct: false,
        feedback: "Jumping to alcohol delivery as a workaround is complex and misses the brand identity concern." },
      { text: "Customers ordering delivery appreciate the food on its own — pairing is a bonus.", correct: false,
        feedback: "Telling a sommelier that wine pairing is 'just a bonus' misses the heart of their identity." },
      { text: "What dishes do you think would travel best from your current menu?", correct: false,
        feedback: "Good brainstorming question, but only after showing there's a viable premium delivery path." },
    ],
  },
  it21: {
    objection: "Our kitchen closes at 9pm. Most delivery happens late night — it's not our window.",
    responses: [
      { text: "The 5pm to 9pm dinner window is actually peak delivery for family meals. Your hours are perfectly aligned with the highest-value orders.", correct: true, technique: 'Timing Reframe',
        feedback: "You reframed their hours from a limitation to a direct match for peak delivery. The dinner window is real — showing this turns a concern into an advantage." },
      { text: "Late-night is only part of delivery — lots of orders come in during dinner hours too.", correct: false,
        feedback: "Vague reassurance isn't as strong as showing specific data about the 5-9pm window." },
      { text: "You could extend kitchen hours just for delivery — it's often worth the extra cost.", correct: false,
        feedback: "Suggesting they extend hours adds work rather than removing the concern." },
      { text: "What are your busiest hours for dine-in? We could overlay delivery demand data.", correct: false,
        feedback: "Show the dinner window case first before diving into analytics." },
    ],
  },
  it22: {
    objection: "I don't want my recipes floating around on the internet. Competitors could copy everything.",
    responses: [
      { text: "Your recipes never go on the platform — just the menu item names and descriptions you control. The recipes stay in your kitchen.", correct: true, technique: 'Control Framing',
        feedback: "You immediately cleared up a genuine misconception. Recipes aren't exposed anywhere — only menu names appear, and the owner controls every word." },
      { text: "Competitors can already see your menu on Yelp or your website — this isn't different.", correct: false,
        feedback: "Normalizing the concern doesn't resolve it. Make clear that recipes are never on the platform." },
      { text: "Our platform has strict IP policies against recipe misuse.", correct: false,
        feedback: "A policy isn't as reassuring as simply clarifying that recipes aren't visible at all." },
      { text: "How much of your competitive advantage comes from recipes versus other factors?", correct: false,
        feedback: "This implies their recipes might not be that unique — the opposite of what you want to say to a proud chef." },
    ],
  },
  it23: {
    objection: "Our pasta is plated with care. In a delivery box it'll look like a mess.",
    responses: [
      { text: "You're right that precise plating doesn't travel — but a curated delivery menu of antipasti, sauces, and hearty mains that hold their visual integrity can work beautifully. The dining experience stays as is.", correct: true, technique: 'Premium Positioning',
        feedback: "You validated the concern completely and offered a practical path: a delivery sub-menu of dishes designed to look great in a box. The main brand is protected." },
      { text: "Good packaging has come a long way — it can preserve plating better than you'd expect.", correct: false,
        feedback: "Arguing that boxes preserve artistic plating sounds out of touch to a chef who takes presentation seriously." },
      { text: "Many customers don't care about plating when ordering delivery — taste is what matters.", correct: false,
        feedback: "Telling a craftsperson their customers don't value their craft is a losing message." },
      { text: "What dishes do you think hold up best from your current menu?", correct: false,
        feedback: "Ask this after establishing a viable path — otherwise you're asking them to solve their own objection." },
    ],
  },
  it24: {
    objection: "We're fully booked six weeks out every night. Adding delivery would overwhelm us.",
    responses: [
      { text: "You'd control the volume completely — you set a maximum orders-per-hour cap and we only send what you can handle. Most fully-booked restaurants use us for slower lunch days when capacity is free.", correct: true, technique: 'Capacity Planning',
        feedback: "You validated their success and showed the order cap solves the operational concern. Pointing to off-peak periods frames delivery as revenue smoothing, not peak-hour stress." },
      { text: "You could hire additional prep staff to handle the extra volume.", correct: false,
        feedback: "A fully-booked owner who's overwhelmed doesn't want to hear 'hire more people' as the answer." },
      { text: "Being fully booked shows demand — delivery captures people who can't get a table.", correct: false,
        feedback: "True but incomplete. You haven't addressed the operational overload concern at all." },
      { text: "What days and times do you have the most kitchen capacity available?", correct: false,
        feedback: "Show the order cap solution first so they know capacity is in their control." },
    ],
  },
  it25: {
    objection: "I heard the approval process takes three weeks. We can't wait that long right now.",
    responses: [
      { text: "Approval typically takes three to five business days. And you don't need to go live immediately — we can complete setup and hold the listing until you're ready.", correct: true, technique: 'Effort Minimization',
        feedback: "You corrected the misconception with a specific timeline and removed the urgency barrier. Decoupling setup from launch gives them full control of timing." },
      { text: "We're faster than most platforms — three weeks is the exception.", correct: false,
        feedback: "Comparing to competitors doesn't fully address the timing concern. Give them the actual number." },
      { text: "We can escalate your application through our priority review process.", correct: false,
        feedback: "Offering an escalation implies three weeks is the norm. Clarify the actual timeline first." },
      { text: "When would you ideally want to go live? That would help me give a clearer picture.", correct: false,
        feedback: "Good question but ask it after correcting the three-week misconception — otherwise you're planning around a false premise." },
    ],
  },
  it26: {
    objection: "We're a lunch restaurant. We close at 3pm. I'm not sure delivery fits us.",
    responses: [
      { text: "Lunch delivery is one of the highest-performing windows on our platform — remote workers and office teams ordering midday are a huge and growing segment. Your hours are perfectly aligned.", correct: true, technique: 'Timing Reframe',
        feedback: "You reframed their hours as a direct match for a high-value delivery segment. Lunch delivery demand is real — making this concrete removes the doubt." },
      { text: "Delivery has expanded well beyond dinner — a lot of people eat lunch at home now.", correct: false,
        feedback: "Generic statement. Show them specific lunch window performance data to make it concrete." },
      { text: "You could consider expanding to dinner hours — many lunch spots do both.", correct: false,
        feedback: "Suggesting they expand their hours adds complexity instead of removing an objection." },
      { text: "What's your average cover count for lunch? That would help estimate delivery potential.", correct: false,
        feedback: "Lead with 'lunch is strong on the platform' before asking for their numbers." },
    ],
  },
  it27: {
    objection: "Our kitchen is tiny — four burners and two prep stations. There's no room for more orders.",
    responses: [
      { text: "The order cap is exactly for this — you set a limit of two or three delivery orders per hour and we pause automatically when you hit it. You never get more than you can handle.", correct: true, technique: 'Capacity Planning',
        feedback: "You matched their specific constraint with a specific solution. 'We pause automatically' is exactly what a four-burner kitchen owner needs to hear." },
      { text: "Delivery orders often come off-peak, so they might not overlap with your busiest times.", correct: false,
        feedback: "'Might not' isn't reassuring enough for a tiny kitchen. Show the concrete control mechanism." },
      { text: "A lot of small kitchens do very well with delivery — size doesn't limit success.", correct: false,
        feedback: "This dismisses rather than addresses the concern. Show the solution." },
      { text: "What are your quietest hours when you might have some kitchen capacity?", correct: false,
        feedback: "Lead with the order cap control first so they see capacity is fully manageable." },
    ],
  },
  it28: {
    objection: "All that single-use plastic is an environmental nightmare. We're committed to zero waste.",
    responses: [
      { text: "That's a commitment worth protecting. We partner with eco-certified packaging suppliers — compostable containers, recycled paper, reusable inserts — and I can connect you with the vendors our sustainability-focused partners use.", correct: true, technique: 'Partnership Assurance',
        feedback: "You validated the values concern and offered a concrete, practical solution. Connecting them with vetted eco suppliers shows you respect the commitment rather than dismissing it." },
      { text: "The environmental impact per order is smaller than most people think — it's offset by reducing food waste.", correct: false,
        feedback: "Arguing against their environmental values creates resistance. Solve the problem, don't debate the premise." },
      { text: "Sustainable packaging is an industry-wide focus — it's getting much better.", correct: false,
        feedback: "Industry trends are vague. Offer a concrete action they can take today." },
      { text: "What packaging are you currently using for takeout? We can probably match that.", correct: false,
        feedback: "Good to eventually ask, but lead with the eco-supplier network offer first." },
    ],
  },
  it29: {
    objection: "We've had fraud orders and chargebacks before with delivery apps. It cost us real money.",
    responses: [
      { text: "That's a real financial risk and I take it seriously. On our platform, chargebacks related to delivery errors or fraud are absorbed by us, not passed to you. I can show you the policy in writing.", correct: true, technique: 'Error Accountability',
        feedback: "You acknowledged the financial pain and showed the protective mechanism. Offering the policy in writing is exactly the right move — it shows you stand behind the claim." },
      { text: "Our fraud detection systems are among the best in the industry.", correct: false,
        feedback: "Tech claims don't undo financial trust damage. Lead with what happens if something goes wrong." },
      { text: "Fraud is rare on our platform — the verification systems catch most of it.", correct: false,
        feedback: "'Most of it' is not reassuring to someone who's been burned. Tell them what protection exists when something does get through." },
      { text: "Which platform was that on? Our policies might be different.", correct: false,
        feedback: "Shifting focus to the old platform sidesteps accountability. Take ownership of the category first." },
    ],
  },
  it30: {
    objection: "We prefer to stay low-profile. I don't want our restaurant listed on a big consumer app.",
    responses: [
      { text: "Your listing is fully in your control — you can keep it visible only to people who search for you directly, without appearing in broad category browsing. Some partners prefer that setup.", correct: true, technique: 'Control Framing',
        feedback: "You gave them a practical option that respects the low-profile preference. Visibility settings are real — showing this turns a values concern into a configurable choice." },
      { text: "Being on a platform actually helps maintain exclusivity — it filters for people who really want your food.", correct: false,
        feedback: "Redefining 'low-profile' as 'exclusive' ignores their actual preference. Address the control question directly." },
      { text: "Most restaurants find the extra visibility helps rather than hurts the brand.", correct: false,
        feedback: "For someone who wants to stay low-profile, 'most restaurants like visibility' is not relevant to their concern." },
      { text: "What specifically concerns you about wider visibility?", correct: false,
        feedback: "Good discovery, but only after showing they can control their exposure level." },
    ],
  },
  it31: {
    objection: "My head chef has been here 15 years. She's against it and her opinion carries a lot of weight.",
    responses: [
      { text: "She's the right person to involve. Could we set up a short conversation with her directly? I want to hear her specific concerns and address them — not try to sell around the person running the kitchen.", correct: true, technique: 'Stakeholder Navigation',
        feedback: "You respected the chef's authority and went to the right stakeholder rather than trying to bypass her. Selling around a key influencer almost always backfires." },
      { text: "Chefs often come around once they see how little it changes their workflow.", correct: false,
        feedback: "Dismissing a 15-year chef's concerns with 'they come around' will create resistance, not trust." },
      { text: "What specifically is she concerned about? Maybe I can address it right now.", correct: false,
        feedback: "Good instinct, but the owner might not fully know the chef's concerns. Get to her directly." },
      { text: "Her focus should be on the food — the platform handles everything else.", correct: false,
        feedback: "Telling a head chef what her focus should be on is exactly how you lose her support permanently." },
    ],
  },
  it32: {
    objection: "Most of our customers are 60-plus. They don't use apps to order food.",
    responses: [
      { text: "Your existing customers absolutely don't need to change. Delivery reaches people who've never been to you yet — a younger demographic that's never found you. It's purely additive.", correct: true, technique: 'Additive Framing',
        feedback: "You protected what they value (loyal older regulars) and showed delivery targets a completely different audience. No change required for existing customers." },
      { text: "App usage among older demographics is growing faster than most people think.", correct: false,
        feedback: "This misses the point — their existing customers aren't the target. Show delivery reaches a different audience entirely." },
      { text: "You could target younger customers to future-proof the business.", correct: false,
        feedback: "Framing delivery as 'future-proofing' can imply their current customer base is aging out. That's not how you build trust." },
      { text: "What percentage of your dine-in customers would you say are under 40?", correct: false,
        feedback: "Good discovery eventually, but lead with the 'different audience' point first." },
    ],
  },
  it33: {
    objection: "Our insurance agent mentioned delivery could create liability issues I'm not currently covered for.",
    responses: [
      { text: "That's a smart thing to check. On our platform, couriers carry their own insurance for the delivery leg, so your existing restaurant liability coverage stays as is. Many restaurants confirm this with their agent and find no change needed.", correct: true, technique: 'Partnership Assurance',
        feedback: "You addressed the specific liability concern accurately and validated their instinct to check. Clarifying the courier coverage boundary gives them something concrete to verify." },
      { text: "Most restaurants don't need to update their insurance when joining a delivery platform.", correct: false,
        feedback: "'Most' doesn't settle a specific insurance question. Be accurate about who covers what." },
      { text: "You should ask your insurance agent to review our platform terms directly.", correct: false,
        feedback: "Good advice eventually, but first clarify what the courier insurance covers so they go in informed." },
      { text: "What specific liability scenarios is your agent concerned about?", correct: false,
        feedback: "Good question, but answer the coverage question first — then explore their specific concerns." },
    ],
  },
  it34: {
    objection: "We're only open Friday and Saturday nights. The volume just isn't there for a platform fee.",
    responses: [
      { text: "Weekend dining delivery is actually among the highest-performing on the platform — Friday and Saturday nights are peak hours. Even two days a week can generate meaningful revenue in that window.", correct: true, technique: 'Timing Reframe',
        feedback: "You reframed their limited hours as an alignment with peak delivery demand. Two nights isn't a weakness when those nights are the platform's busiest." },
      { text: "You could consider opening more nights once you see the delivery revenue potential.", correct: false,
        feedback: "Suggesting expanded hours when they've said they're weekend-only adds work rather than solving the concern." },
      { text: "It would depend on your area — some zip codes see strong Friday-Saturday delivery.", correct: false,
        feedback: "Hedging when you have data about peak weekend delivery weakens your case. Be direct." },
      { text: "What's your typical Friday cover count? That would help me estimate delivery upside.", correct: false,
        feedback: "Show the weekend performance case first before asking for their numbers." },
    ],
  },
  it35: {
    objection: "We already take orders through our own website. Why would we add a platform that takes a cut?",
    responses: [
      { text: "Your direct channel is worth keeping — we'd never touch those customers. What Uber Eats brings is the person who's never heard of you and is browsing the app hungry right now. Think of the fee as a customer acquisition cost for people outside your existing reach.", correct: true, technique: 'Channel Separation',
        feedback: "You validated the direct channel and drew a clean line between two distinct customer pools. Repositioning the fee as acquisition cost makes it feel like a marketing spend with guaranteed reach." },
      { text: "A direct website can't match our app's discovery reach — most people don't search direct.", correct: false,
        feedback: "Downplaying their direct channel creates unnecessary friction. Protect it, then explain what you add." },
      { text: "Being on Uber Eats also drives brand awareness that can send people back to your site.", correct: false,
        feedback: "This is speculative. Lead with the cleaner, more defensible 'new audience' argument." },
      { text: "How much of your current delivery volume comes through the website?", correct: false,
        feedback: "Ask this after making the value case — not as your opener to a margin concern." },
    ],
  },
  it36: {
    objection: "I don't want to be listed next to every other Italian restaurant in the city on the same app.",
    responses: [
      { text: "Your listing is differentiated by your specific dishes, reviews, and neighborhood — customers browsing the app are making active comparisons, and restaurants with a distinct identity tend to stand out clearly.", correct: true, technique: 'Differentiation',
        feedback: "You reframed competition on the platform as differentiation opportunity. A strong identity stands out in any marketplace — making this concrete addresses the fear of being lost in the crowd." },
      { text: "You'd be competing with other Italian restaurants anywhere customers look — Google, Yelp, walking by.", correct: false,
        feedback: "Normalizing competition doesn't address their concern about app-specific visibility." },
      { text: "We can feature your restaurant in neighborhood-specific promotions to stand out.", correct: false,
        feedback: "Promotional tools are a secondary point. Address the identity and differentiation concern first." },
      { text: "What makes your restaurant different from other Italian places in your area?", correct: false,
        feedback: "Good discovery, but ask it in the context of how that differentiation shows on the platform — not as your opener." },
    ],
  },
  it37: {
    objection: "My business partner hasn't agreed to this. I can't move forward without her.",
    responses: [
      { text: "She absolutely should be part of this — it's her call too. Could I send you both a short summary to review together, or join a quick call with both of you? I want to address her concerns directly.", correct: true, technique: 'Stakeholder Navigation',
        feedback: "You honored the decision-making structure and gave two low-pressure options to move forward together. Trying to close before the partner is involved would undermine trust with both." },
      { text: "What do you think her main hesitation would be? Maybe I can address it now.", correct: false,
        feedback: "The owner might not speak accurately for their partner. Get her in the conversation directly." },
      { text: "No problem — I'll follow up when she's available. When would that be?", correct: false,
        feedback: "An open-ended callback loses momentum. Leave them something to review together in the meantime." },
      { text: "If you're personally comfortable, could you move forward and loop her in after?", correct: false,
        feedback: "Asking someone to bypass their named business partner will cost you both relationships." },
    ],
  },
  it38: {
    objection: "If I charge the same price on delivery as dine-in, I lose money on every order with the fee on top.",
    responses: [
      { text: "You're in full control of delivery pricing — you can set menu prices higher than your dine-in menu to account for the commission, and most customers accept a modest delivery premium without friction.", correct: true, technique: 'Control Framing',
        feedback: "You gave them the practical solution they may not have known was available. Menu price flexibility on the delivery channel is the direct answer to the margin math." },
      { text: "Our commission rates are lower than most platforms, so the margin hit is usually manageable.", correct: false,
        feedback: "Comparing rates doesn't solve the math problem. Show them the pricing control tool." },
      { text: "Many partners find delivery revenue covers the fee even at dine-in prices.", correct: false,
        feedback: "This skips over the concern. Answer the specific pricing question directly." },
      { text: "What's your current food cost percentage? That would help me show the real margin impact.", correct: false,
        feedback: "Asking for their financials before offering the solution puts them on the defensive. Give the answer first." },
    ],
  },
  it39: {
    objection: "Our restaurant is at the edge of the city. I'm worried there aren't enough drivers to cover our area.",
    responses: [
      { text: "I can pull the driver density data for your specific zip code right now — and I'd rather show you the actual coverage map than promise something I can't verify. Some edge areas have great coverage; some don't. Let's look together.", correct: true, technique: 'Honest Consulting',
        feedback: "You offered real data instead of a generic reassurance. Showing the map together builds trust, and honest consulting earns more credibility than a pitch." },
      { text: "Our driver network covers most of the metro area — edge locations are usually fine.", correct: false,
        feedback: "'Usually fine' won't satisfy someone with a specific geographic concern. Show the actual data." },
      { text: "We can run a test period and track the average pickup times to see if coverage is adequate.", correct: false,
        feedback: "Good idea eventually, but offer the coverage data first so they can make an informed decision before committing." },
      { text: "Where exactly are you located? I can look into the coverage for your address.", correct: false,
        feedback: "Good instinct — but frame it as 'let's look at the data together' rather than a vague follow-up action." },
    ],
  },
  it40: {
    objection: "Our staff is already stretched on Friday nights. Adding delivery would push them over the edge.",
    responses: [
      { text: "Totally valid — and you'd set a delivery order cap specifically for Friday nights. On your busiest shifts you could limit it to one or two delivery orders per hour, so the kitchen never gets more than it can absorb.", correct: true, technique: 'Capacity Planning',
        feedback: "You solved the specific concern with a specific feature. Mentioning they can cap Fridays differently from other days shows the control is granular enough to actually work." },
      { text: "Delivery orders are usually smaller — a single item, not a full table order.", correct: false,
        feedback: "Order size doesn't address staff bandwidth. Show them the volume control feature." },
      { text: "You could hire a dedicated delivery coordinator for peak nights.", correct: false,
        feedback: "Adding staff to handle a new channel isn't reducing friction — it's increasing it." },
      { text: "Which nights are your lightest? We could start delivery just on those days.", correct: false,
        feedback: "Good practical question, but show the order cap solution first so they know Friday protection is built in." },
    ],
  },
  it41: {
    objection: "The last rep I talked to promised us a marketing feature that never materialized. I've been burned before.",
    responses: [
      { text: "That's a fair reason to be skeptical, and I won't promise something I can't confirm. Whatever I tell you today, I'll put in writing — and if you want to verify anything with another current partner in your neighborhood, I'll connect you.", correct: true, technique: 'Trust Rebuilding',
        feedback: "You acknowledged the past failure, didn't make the same mistake, and offered verifiable proof. Offering a real-world reference is the highest form of credibility after trust has been damaged." },
      { text: "That must have been very frustrating. Things have really improved on our end since then.", correct: false,
        feedback: "Vague improvement claims won't rebuild trust after a broken promise. Offer something concrete and verifiable." },
      { text: "I can get my manager involved to make sure any commitments we make are properly backed.", correct: false,
        feedback: "Escalating to a manager sounds like you're already expecting problems. Lead with what you can back up directly." },
      { text: "What specifically was promised that didn't happen? I want to understand exactly what went wrong.", correct: false,
        feedback: "Good instinct, but commit to accountability before asking them to relive the bad experience." },
    ],
  },
  it42: {
    objection: "Before I say yes to anything, I want to speak to two or three other Italian restaurants who use you.",
    responses: [
      { text: "Absolutely — I can connect you with two partners in similar neighborhoods this week. I'll send you their contact info and you can reach out on your own terms, no intermediary.", correct: true, technique: 'Social Proof',
        feedback: "You said yes immediately and offered direct, unmediated contact. Offering references they can reach independently shows you have nothing to hide." },
      { text: "We have a lot of great testimonials I can share — would that help?", correct: false,
        feedback: "Curated testimonials aren't the same as a direct conversation. They asked for references — give them actual references." },
      { text: "I can share some case studies from Italian restaurants with similar profiles.", correct: false,
        feedback: "Case studies are still curated. They want to speak directly to real partners — commit to that." },
      { text: "Of course — what specific questions would you want to ask them so I can find the most relevant match?", correct: false,
        feedback: "Good tailoring, but ask this after confirming you'll set up the references — not before." },
    ],
  },
  it43: {
    objection: "Our menu has 80 items. Managing that on a delivery app sounds like a constant headache.",
    responses: [
      { text: "You don't have to list all 80 — most delivery menus are a curated selection of your best-performing items. Our team will build the initial menu for you, and updates take about two minutes per item in the app.", correct: true, technique: 'Effort Minimization',
        feedback: "You solved two concerns at once: curation reduces scope, and the setup is handled for them. Two minutes per update makes ongoing management feel manageable." },
      { text: "Our platform supports unlimited menu items — 80 is completely manageable.", correct: false,
        feedback: "Saying 80 items is fine doesn't address the ongoing management concern. Show how light the actual work is." },
      { text: "Most restaurants start with a simplified menu and expand over time.", correct: false,
        feedback: "This is practical advice but doesn't address the ongoing management worry. Be more specific about how easy updates are." },
      { text: "How often does your menu typically change? That would help me estimate the update burden.", correct: false,
        feedback: "Show how quick updates are first, then ask about frequency to reassure further." },
    ],
  },
  it44: {
    objection: "We're already listed on Yelp and a local restaurant directory. Another listing feels redundant.",
    responses: [
      { text: "Yelp and directories are discovery tools — people find you, then decide to walk in. Uber Eats is a transaction platform — people find you and order immediately. It's a fundamentally different kind of presence.", correct: true, technique: 'Differentiation',
        feedback: "You drew a sharp distinction between discovery platforms and transaction platforms. This isn't redundancy — it's a completely different type of customer intent and action." },
      { text: "Uber Eats has far more active daily users than local directories — the reach isn't comparable.", correct: false,
        feedback: "Scale claims miss the point. The question is about purpose and value, not just size." },
      { text: "Most restaurants find having multiple listings increases overall visibility.", correct: false,
        feedback: "Generic more-is-better reasoning doesn't address their specific redundancy concern." },
      { text: "What's your current experience been like with those other listings?", correct: false,
        feedback: "Good discovery, but answer the 'why is this different' question first." },
    ],
  },
  it45: {
    objection: "I don't understand how the app decides who shows up first. It feels like a black box.",
    responses: [
      { text: "Totally fair — the main factors are proximity, ratings, and fulfillment speed. New restaurants also get a visibility boost in the first 90 days to help build their review base. I can walk you through exactly how it works.", correct: true, technique: 'Transparency',
        feedback: "You demystified the algorithm with specific, actionable factors and mentioned the new-restaurant boost. Transparency builds trust better than a vague 'trust us.'" },
      { text: "Our algorithm is designed to surface the most relevant restaurants for each customer.", correct: false,
        feedback: "This is the exact kind of vague answer that creates the 'black box' feeling they described. Be specific." },
      { text: "You can pay for premium placement to guarantee better visibility.", correct: false,
        feedback: "Jumping to paid placement before explaining the organic algorithm suggests you can't promise good results without extra spend." },
      { text: "What visibility are you looking for — neighborhood-level or city-wide?", correct: false,
        feedback: "Good question eventually, but explain how the algorithm actually works before discussing targeting." },
    ],
  },
  it46: {
    objection: "Our waitstaff depend heavily on tips. I'm worried delivery tips will be lower and affect morale.",
    responses: [
      { text: "Your front-of-house tips are completely separate from delivery — delivery tips go directly to the courier, not to your team. Your waitstaff income is unaffected.", correct: true, technique: 'Channel Separation',
        feedback: "You immediately cleared up a misconception that was creating an unfounded concern. Delivery tips and dine-in tips are completely separate pools — knowing this removes the morale worry entirely." },
      { text: "Delivery tip rates have actually improved a lot over the past few years.", correct: false,
        feedback: "This misses the point — the concern is about their waitstaff's tips, not delivery tip rates in general." },
      { text: "You could share a portion of delivery revenue with your front-of-house team as a bonus.", correct: false,
        feedback: "Suggesting they redistribute revenue before clarifying there's no conflict creates unnecessary complexity." },
      { text: "What's the current tip structure for your dine-in staff?", correct: false,
        feedback: "Good discovery eventually, but first clarify that delivery tips never touch their waitstaff pool." },
    ],
  },
  it47: {
    objection: "Our handmade pasta takes 35 minutes. Delivery customers want food in 30 minutes or they complain.",
    responses: [
      { text: "You set the prep time in your listing — if you need 40 minutes, the app shows customers a 40-minute window and they opt in knowing that. No surprises, no unrealistic expectations.", correct: true, technique: 'Control Framing',
        feedback: "You gave them full control over how their prep time is communicated. Setting accurate expectations upfront is the direct solution — and customers who order anyway are self-selecting for the experience." },
      { text: "Some of our highest-rated partners have 45-minute prep times — customers appreciate quality.", correct: false,
        feedback: "Other restaurants' prep times don't resolve their concern about customer complaints. Show how their specific timing is communicated." },
      { text: "You could create an express delivery menu of dishes with faster prep times.", correct: false,
        feedback: "Suggesting a completely separate menu for delivery is adding work. Show them their current prep time can be accommodated first." },
      { text: "What's your typical average prep time across the full menu?", correct: false,
        feedback: "Good to know eventually, but show them they control the displayed prep time before diving into averages." },
    ],
  },
  it48: {
    objection: "We're well known in this neighborhood already. We don't need more exposure.",
    responses: [
      { text: "Your neighborhood knows you — delivery reaches the person across town who's never discovered you yet but would love your food. It's not replacing local fame, it's extending your reach to a completely different audience.", correct: true, technique: 'Additive Framing',
        feedback: "You validated their local reputation and showed delivery targets a distinct, out-of-neighborhood audience. Local fame and platform discovery serve different customer groups." },
      { text: "Even well-known restaurants benefit from additional visibility — it protects against slow periods.", correct: false,
        feedback: "Implying they might have slow periods when they claim to be doing well can feel like a challenge. Lead with the new audience argument." },
      { text: "Delivery also drives repeat customers who might not have visited in a while.", correct: false,
        feedback: "This assumes their existing customers are underserved. Stick to the 'new audience you can't currently reach' argument." },
      { text: "What percentage of your customers come from outside the neighborhood?", correct: false,
        feedback: "Good discovery, but frame it as 'this reaches people who haven't found you yet' before asking." },
    ],
  },
  it49: {
    objection: "What if the food arrives cold? Customers will blame us even if it's a driver issue.",
    responses: [
      { text: "You're right that cold food complaints land on the restaurant even when it's a logistics issue — that's unfair. On our platform, delivery-related complaints are flagged as fulfillment issues and handled by us, not attributed to your restaurant rating.", correct: true, technique: 'Reputation Protection',
        feedback: "You acknowledged the injustice before offering the solution. Validating the unfairness earns trust, and explaining the rating protection removes the specific fear." },
      { text: "Our insulated bags keep food at temperature better than most — cold delivery is genuinely rare.", correct: false,
        feedback: "Tech solutions don't address the trust issue. The concern is 'what if it happens' — answer that." },
      { text: "You could include reheating instructions with each order to manage expectations.", correct: false,
        feedback: "Asking customers to reheat food is a poor brand move. Show the platform has structural protection instead." },
      { text: "What's your average delivery radius? Temperature is often a distance issue.", correct: false,
        feedback: "Discovery before protection makes it seem like you're establishing whether their fear is valid, not solving it." },
    ],
  },
  it50: {
    objection: "Our POS system is very specific. I'm worried Uber Eats won't integrate with it.",
    responses: [
      { text: "We integrate directly with over 50 POS systems, and if yours isn't on the list, orders come through a simple tablet that feeds into your existing setup without any POS changes. What system are you running?", correct: true, technique: 'Flexibility Framing',
        feedback: "You showed the likely integration path and offered the fallback in one sentence, then asked the specific question. This is confident, accurate, and efficient." },
      { text: "Most modern POS systems integrate with us — it's probably not an issue.", correct: false,
        feedback: "'Probably' isn't reassuring when they have a specific concern. Ask the system name and give a concrete answer." },
      { text: "Our tech team can handle any integration — it might just take a few extra days.", correct: false,
        feedback: "Vague promises about tech teams create uncertainty. Be specific about what integrations exist." },
      { text: "What POS system are you using?", correct: false,
        feedback: "Good question, but pair it with the answer about integration options so you're not just gathering information." },
    ],
  },
  it51: {
    objection: "I'm worried delivery orders will come in during a busy dinner service and disrupt the kitchen.",
    responses: [
      { text: "You can schedule delivery hours separately from your dine-in service — many partners turn delivery on for the first hour of service and off during peak hours, then back on later. The schedule is fully in your control.", correct: true, technique: 'Capacity Planning',
        feedback: "You showed them a concrete operational solution: delivery hours independent of peak service. Full schedule control removes the disruption concern entirely." },
      { text: "Delivery orders are usually simpler than dine-in — they shouldn't disrupt your kitchen flow.", correct: false,
        feedback: "Telling a busy kitchen that delivery orders are simple dismisses a real operational concern. Show the scheduling control." },
      { text: "Most restaurants find the kitchen adapts quickly to managing both.", correct: false,
        feedback: "'Most restaurants adapt' isn't helpful to someone worried about their specific Friday night rush." },
      { text: "Which hours are typically your most chaotic in the kitchen?", correct: false,
        feedback: "Good to know, but show the scheduling solution first so they know the control is already built in." },
    ],
  },
  it52: {
    objection: "We have a minimum order of 40 dollars at the restaurant. Will that work on the app?",
    responses: [
      { text: "Yes — you set the minimum order amount in your listing. If you want a $40 minimum, that's what customers see before they can check out. No one gets to you without meeting it.", correct: true, technique: 'Control Framing',
        feedback: "You answered directly and accurately. Minimum order amounts are configurable — knowing this removes a logistical blocker instantly." },
      { text: "Most delivery orders average well above $40 anyway — minimums rarely come into play.", correct: false,
        feedback: "Average order size doesn't confirm their specific minimum will be enforced. Answer the direct question." },
      { text: "You might want to consider a lower minimum for delivery to maximize order volume.", correct: false,
        feedback: "They didn't ask for advice on their minimum — they asked if it was supported. Answer that first." },
      { text: "What's the reasoning behind the $40 minimum? That would help me advise the best setup.", correct: false,
        feedback: "Good discovery, but confirm the minimum is supported first before exploring their reasoning." },
    ],
  },
  it53: {
    objection: "My team already works incredibly hard. I don't want to pile more on them.",
    responses: [
      { text: "That's exactly the right instinct. The platform is designed so your kitchen team barely changes anything — orders appear on a tablet and they cook the food. No new customer interactions, no extra logistics. The platform handles everything else.", correct: true, technique: 'Effort Minimization',
        feedback: "You empathized with the team and then made the new workflow sound as minimal as it actually is. 'Just cook the food' is the right frame for a team you're trying to protect." },
      { text: "Change is hard at first, but the team will adapt quickly.", correct: false,
        feedback: "Telling a manager their overworked team just needs to adapt is the opposite of reassuring." },
      { text: "We have a training program that gets kitchen staff up to speed in under an hour.", correct: false,
        feedback: "A training program implies effort and time. Lead with how little the kitchen workflow actually changes." },
      { text: "Which part of the workflow are you most worried about disrupting?", correct: false,
        feedback: "Good question, but only after showing the disruption is close to zero." },
    ],
  },
  it54: {
    objection: "We just had our health inspection and there were a few flags. This isn't the right time.",
    responses: [
      { text: "Totally understandable — resolving those flags is the right priority. When you're back in the clear, I'd love to reconnect. In the meantime, I can send you the onboarding materials so you're ready to move quickly when the timing is right.", correct: true, technique: 'Pipeline Value',
        feedback: "You respected the constraint without abandoning the deal. Sending materials now means you restart warm, not cold, and shows professionalism rather than pressure." },
      { text: "Our platform doesn't require health inspection scores — you can still list while addressing those issues.", correct: false,
        feedback: "Encouraging them to proceed while actively dealing with health flags could create a liability. Respect the timing concern." },
      { text: "Health inspections are routine — most issues get resolved quickly.", correct: false,
        feedback: "Minimizing a real operational concern doesn't build trust. Accept their timing and stay warm." },
      { text: "How long do you think it'll take to resolve the flags?", correct: false,
        feedback: "Good for planning, but commit to respecting the timing first before asking for a timeline." },
    ],
  },
  it55: {
    objection: "We just renewed our lease and locked in a new staffing model. I'm not taking on anything new right now.",
    responses: [
      { text: "I understand — big changes take time to settle. Our setup takes about 20 minutes of your actual time and runs in the background. But I'm happy to stay in touch and revisit when things feel stable. What would be a better time to reconnect?", correct: true, technique: 'Soft Next Step',
        feedback: "You respected the constraint, briefly showed how low the effort is, and set a future touchpoint. Not every conversation needs to close today — staying warm matters." },
      { text: "Our platform actually works better in stable operations — now might be the ideal time.", correct: false,
        feedback: "Reframing their constraint as an advantage they haven't recognized sounds dismissive. Accept the timing." },
      { text: "The sooner you start building your delivery presence, the better your market position.", correct: false,
        feedback: "Urgency language on someone who's just made major commitments creates friction, not momentum." },
      { text: "What would need to change for this to feel like the right time?", correct: false,
        feedback: "Without first acknowledging their specific constraint, this question feels like you're trying to argue away their no." },
    ],
  },
  it56: {
    objection: "I never sign anything without reading the full contract first. Can you send it before we go further?",
    responses: [
      { text: "Absolutely — I'll send you the full agreement today. In the meantime, the key terms are: no minimum commitment period, you can pause or exit at any time, and the commission rate is fixed and listed in section three. Any questions after you read it, I'm available.", correct: true, technique: 'Transparency',
        feedback: "You said yes immediately, previewed the most relevant terms, and made yourself available for questions. Helping them navigate the contract shows confidence — you have nothing to hide." },
      { text: "Of course — most people find the terms pretty standard and straightforward.", correct: false,
        feedback: "Preemptively calling the contract 'standard' before they've read it can come off as dismissive of due diligence." },
      { text: "I can walk you through the key points — it's pretty simple overall.", correct: false,
        feedback: "They asked for the full document, not a summary. Respect their process." },
      { text: "What specific terms are you most focused on?", correct: false,
        feedback: "Good question, but after you've committed to sending the contract — not before." },
    ],
  },
  it57: {
    objection: "How long does it take to actually get paid? I have payroll on Fridays and can't float a week.",
    responses: [
      { text: "Standard payouts land within two to four business days of each order. There's also a daily payout option for a small fee if Friday timing is critical. I can show you the exact schedule for your area.", correct: true, technique: 'Cash Flow Clarity',
        feedback: "You gave a specific, accurate answer and offered the faster option. Precise timelines beat vague reassurances when cash flow is the concern." },
      { text: "Our payout timeline is competitive with every other major platform.", correct: false,
        feedback: "Competitor comparison doesn't answer the specific payroll timing need. Give them the actual number." },
      { text: "Most restaurants find the payout timing works fine with normal cash flow management.", correct: false,
        feedback: "'Most restaurants' doesn't solve for someone with a specific Friday payroll constraint." },
      { text: "What's your current cash flow cycle? That would help me recommend the right payout schedule.", correct: false,
        feedback: "Lead with the answer — what the timeline actually is — before asking for their specifics." },
    ],
  },
  it58: {
    objection: "My manager of 20 years runs the day-to-day here. He thinks this is a distraction and I trust his judgment.",
    responses: [
      { text: "If he's running the day-to-day, he's the right person to evaluate this. Could I meet with him directly? I'd rather have that conversation with the person who'd actually be managing it.", correct: true, technique: 'Stakeholder Navigation',
        feedback: "You respected the manager's authority and went directly to the decision-influencer. Selling around a trusted manager will always backfire." },
      { text: "Experienced managers are often skeptical of new things — they usually come around after seeing results.", correct: false,
        feedback: "Dismissing a 20-year manager's judgment as typical resistance is condescending and will lose both relationships." },
      { text: "What specifically does he think would be a distraction?", correct: false,
        feedback: "Good instinct, but the owner might not fully represent his concerns. Get to him directly." },
      { text: "With your support, I'm sure he'd give it a fair shot.", correct: false,
        feedback: "Suggesting the owner override their trusted manager will create internal conflict, not a sale." },
    ],
  },
  it59: {
    objection: "Our menu includes pork and shellfish. Some of our regular customers have dietary restrictions. I worry about confusion on an app.",
    responses: [
      { text: "You control the allergen and dietary labels on every item — you can mark pork, shellfish, nuts, and other allergens directly on the menu so customers see them before ordering. Nothing is hidden.", correct: true, technique: 'Control Framing',
        feedback: "You showed that allergen transparency is a feature they control, not a risk they absorb. Clear labeling is the direct solution to the confusion concern." },
      { text: "Customers on delivery apps are generally good at reading menus for dietary needs.", correct: false,
        feedback: "This dismisses a legitimate operational concern. Show them the labeling tools instead." },
      { text: "You could create a separate delivery menu with only dishes that meet common dietary needs.", correct: false,
        feedback: "Limiting their menu to accommodate dietary filters is unnecessary when labeling solves the problem." },
      { text: "What dietary restrictions are you most concerned about managing?", correct: false,
        feedback: "Good discovery, but show the allergen labeling capability first." },
    ],
  },
  it60: {
    objection: "If someone has an allergic reaction to something they ordered, are we liable?",
    responses: [
      { text: "The liability follows the food preparation — since you're making the food, accurate allergen labeling on your menu is your primary responsibility, which the platform fully supports. For delivery-related claims, the platform handles that leg separately.", correct: true, technique: 'Partnership Assurance',
        feedback: "You accurately described the liability structure and showed the platform supports the labeling requirement. Clarity about responsibility boundaries is exactly what a cautious owner needs." },
      { text: "Most delivery orders involve standard menu items — allergy incidents are very rare.", correct: false,
        feedback: "Rarity doesn't address the liability question. Give them the actual responsibility structure." },
      { text: "You should consult your attorney for specific liability questions.", correct: false,
        feedback: "Kicking the question to a lawyer without even trying to answer it creates more anxiety. Give what you know first." },
      { text: "We have a policy against allergen claims being directed at restaurants.", correct: false,
        feedback: "A vague policy claim doesn't explain the actual liability structure. Be more specific." },
    ],
  },
  it61: {
    objection: "We're in the middle of a staffing crisis. Half our team left after the summer. This isn't the right time.",
    responses: [
      { text: "That's a real constraint and it makes sense to wait until the kitchen is stable. I'll stay in touch — and when you've rebuilt the team, we can get you set up quickly. I'll send you a short overview in the meantime so you're not starting from scratch.", correct: true, technique: 'Soft Next Step',
        feedback: "You accepted the timing constraint gracefully and kept the deal warm. Sending materials now means you restart from a warm conversation, not a cold call." },
      { text: "Delivery actually requires very little additional staff — it might be a good bridge revenue source while you rebuild.", correct: false,
        feedback: "A restaurant in a staffing crisis doesn't want to hear about adding revenue channels. Respect the timing." },
      { text: "Lots of restaurants have staffed up faster than expected — you might be ready sooner than you think.", correct: false,
        feedback: "Optimism about their staffing crisis isn't helpful. Accept the constraint and stay present." },
      { text: "What's your current coverage situation — are you fully closed some nights?", correct: false,
        feedback: "Good context, but commit to respecting the timing first before exploring their situation." },
    ],
  },
  it62: {
    objection: "We don't have storage space for delivery packaging supplies. It's already tight back there.",
    responses: [
      { text: "The packaging you need for delivery is minimal — usually a week's supply fits in a single small shelf. Most partners order as-needed so there's no bulk storage required. I can connect you with the vendors our partners use for just-in-time delivery.", correct: true, technique: 'Effort Minimization',
        feedback: "You made the physical footprint sound as small as it actually is and offered a supply chain solution. 'One shelf' and 'just-in-time' together eliminate the storage concern." },
      { text: "You'd be surprised how little packaging you actually need — delivery volumes start small.", correct: false,
        feedback: "Vague reassurance about volume doesn't address the storage space constraint specifically." },
      { text: "You could use your existing takeout packaging for delivery orders too.", correct: false,
        feedback: "Maybe, but this assumes they have takeout packaging already. Offer the specific solution rather than assumptions." },
      { text: "How much takeout packaging do you currently stock? That gives me a sense of storage capacity.", correct: false,
        feedback: "Show the minimal footprint first before asking about their current storage situation." },
    ],
  },
  it63: {
    objection: "We're in the middle of a kitchen renovation right now. Everything is in flux.",
    responses: [
      { text: "Perfect timing actually — we can complete the setup now so you go live the moment the renovation finishes, with your rating and menu already built. You hit the ground running instead of starting from zero.", correct: true, technique: 'Pipeline Value',
        feedback: "You turned the renovation into a reason to act now rather than later. Setup during downtime means launch readiness on reopening day." },
      { text: "The setup is so quick it won't interfere with the renovation at all.", correct: false,
        feedback: "This misses the better argument. The renovation is actually an opportunity to set up now and launch when you're ready." },
      { text: "How long is the renovation scheduled to take? We can plan around that timeline.", correct: false,
        feedback: "Good for planning, but make the 'set up now, launch later' case before asking for the timeline." },
      { text: "Once the renovation is done, definitely reach out — we'd love to help you launch.", correct: false,
        feedback: "Deferring entirely loses the current touchpoint. Setup now, launch later is the right frame." },
    ],
  },
  it64: {
    objection: "We're switching our POS system next month. I don't want to add anything until we're stable.",
    responses: [
      { text: "Makes sense to wait on integrations until the new POS is live. We can set everything up now using our standalone tablet, and if you want to integrate the new POS later, we'll do that migration for you at no cost.", correct: true, technique: 'Flexibility Framing',
        feedback: "You accepted the timing concern and offered a path that works now and upgrades seamlessly later. The standalone tablet removes the integration dependency entirely." },
      { text: "Our platform integrates with most major POS systems — your new one will probably work.", correct: false,
        feedback: "'Probably' creates uncertainty during a transition they're already managing carefully. Offer a path that doesn't depend on the new POS." },
      { text: "The POS switch is a perfect time to evaluate all your technology stack.", correct: false,
        feedback: "Framing a stressful technology transition as an opportunity to add more feels tone-deaf." },
      { text: "What POS are you switching to? I can look into the integration ahead of time.", correct: false,
        feedback: "Good to know, but show the standalone tablet path first so they know there's no dependency on the POS timeline." },
    ],
  },
  it65: {
    objection: "I co-own this building with two other restaurant owners. Could we do a group deal?",
    responses: [
      { text: "Absolutely — we have a multi-partner program that can onboard all three of you with a shared account manager and coordinated setup. It typically comes with better support and sometimes volume-based terms. Let me connect you with our partnerships team.", correct: true, technique: 'Scale Framing',
        feedback: "You said yes to the group request and described a real program, then offered the right next step. Treating this as an opportunity rather than a complexity earns goodwill." },
      { text: "Each restaurant would need to sign separately — we can't bundle accounts.", correct: false,
        feedback: "Saying no to a reasonable group ask without exploring options creates unnecessary friction." },
      { text: "That sounds interesting — let me check if that's something we can accommodate.", correct: false,
        feedback: "Don't hedge when you have a real multi-partner program. Confirm it confidently and move forward." },
      { text: "What are the other two restaurants? I want to make sure they'd be a good fit.", correct: false,
        feedback: "Good to know eventually, but confirm the group program exists before gatekeeping with fit questions." },
    ],
  },
  it66: {
    objection: "The Uber Eats interface feels very fast-food. Our restaurant has a different aesthetic.",
    responses: [
      { text: "Your listing is your own — high-quality photos you upload, a custom description, and your exact menu names. The brand expression is yours. I can show you examples of fine-dining partners whose listings look nothing like a fast-food profile.", correct: true, technique: 'Premium Positioning',
        feedback: "You gave them control over their brand expression and offered proof via examples. Showing them what's actually possible on the platform is more persuasive than any reassurance." },
      { text: "The platform looks the same for everyone — it's the quality of your photos that makes it feel premium.", correct: false,
        feedback: "Saying it 'looks the same for everyone' actually confirms their concern about it feeling generic." },
      { text: "Customer experience is defined by the food, not the app interface.", correct: false,
        feedback: "Dismissing their brand aesthetic concern doesn't address it. They care about visual identity — take that seriously." },
      { text: "What visual elements of your brand are most important to you?", correct: false,
        feedback: "Good question, but show the premium listing examples first so they know the platform can support it." },
    ],
  },
  it67: {
    objection: "With so many restaurants on the platform, won't we just get buried in search results?",
    responses: [
      { text: "New restaurants get a 90-day visibility boost, and after that, ratings and fulfillment speed drive ranking. A restaurant with strong reviews and fast prep times consistently outranks established but slower competitors.", correct: true, technique: 'Transparency',
        feedback: "You gave specific, actionable ranking factors and mentioned the new-restaurant boost. Demystifying the algorithm turns a fear into something they can actively optimize for." },
      { text: "Uber Eats has millions of users — even with competition, the reach is significant.", correct: false,
        feedback: "Scale claims don't address the visibility concern. Explain how they get found, not just how big the platform is." },
      { text: "You can pay for premium placement to appear at the top of search results.", correct: false,
        feedback: "Jumping to paid placement implies organic visibility isn't reliable. Show how organic ranking works first." },
      { text: "What neighborhood are you in? I can check the competitive density there.", correct: false,
        feedback: "Good data to gather, but explain the ranking factors first before assessing their specific market." },
    ],
  },
  it68: {
    objection: "Who owns the customer data? I don't want my regulars' information going to Uber.",
    responses: [
      { text: "Customers who order through the app are Uber Eats users — that's how the platform works. What you do own is your sales history and performance data, which you can export at any time. The customer relationship from dine-in stays entirely yours.", correct: true, technique: 'Transparency',
        feedback: "You were honest about the data ownership structure while distinguishing what they do retain. Honesty about a data question builds more trust than a misleading 'you own everything' answer." },
      { text: "Your customer data is always protected — Uber Eats has strict privacy policies.", correct: false,
        feedback: "Privacy policies don't answer the ownership question. Be direct about who owns what." },
      { text: "Most platforms have similar data arrangements — it's the industry standard.", correct: false,
        feedback: "Normalizing a data concern doesn't resolve it. Answer specifically what they own and don't own." },
      { text: "What customer data specifically are you most concerned about?", correct: false,
        feedback: "Good question, but answer the ownership structure first before asking them to elaborate." },
    ],
  },
  it69: {
    objection: "I only want to deliver within a few blocks. I don't want our food traveling across the city.",
    responses: [
      { text: "You set the delivery radius yourself — you can limit it to a half-mile, one mile, or whatever feels right for your food quality. Many fine-dining partners cap it at 1.5 miles to maintain the experience.", correct: true, technique: 'Control Framing',
        feedback: "You gave them complete control over the geographic boundary. Mentioning specific examples of fine-dining radius choices adds credibility." },
      { text: "Our drivers are very fast — food rarely has a quality issue even at longer distances.", correct: false,
        feedback: "This misses the point. They want radius control, not reassurance about delivery speed." },
      { text: "A smaller radius actually helps you focus on the highest-intent local customers.", correct: false,
        feedback: "This reframe is fine but secondary. Confirm radius control first, then add the upside." },
      { text: "What radius would feel comfortable to you?", correct: false,
        feedback: "Good to know, but confirm radius control is possible before asking for their preference." },
    ],
  },
  it70: {
    objection: "My English is not very strong. I'm worried I won't be able to manage the platform or understand support.",
    responses: [
      { text: "We have multilingual support available including Spanish, Italian, Mandarin, and Portuguese, and I can set up your account with you directly so everything is configured correctly from day one. You won't be navigating it alone.", correct: true, technique: 'Partnership Assurance',
        feedback: "You addressed the language barrier with a concrete solution and offered to stay involved in setup. Personal presence during onboarding is the highest-trust answer to this concern." },
      { text: "The platform interface is very visual and simple — most people pick it up regardless of language.", correct: false,
        feedback: "'Simple for most people' doesn't address someone with a specific language concern. Offer the real multilingual support." },
      { text: "You could have someone on your staff manage the app on your behalf.", correct: false,
        feedback: "Delegating to staff adds dependency and doesn't solve the support concern. Show them the direct language support." },
      { text: "What language would you be most comfortable working in?", correct: false,
        feedback: "Good to ask, but confirm multilingual support exists first before asking which language." },
    ],
  },
  it71: {
    objection: "We had a nightmare experience with Yelp reviews. I don't want to open up another review channel.",
    responses: [
      { text: "Totally understandable — and Uber Eats reviews are different from Yelp. They're tied to verified orders only, which cuts out a lot of the anonymous bad-faith reviews. You can also respond to reviews directly to manage your profile.", correct: true, technique: 'Differentiation',
        feedback: "You drew a specific, meaningful distinction between verified order reviews and open platforms like Yelp. Verified-only reviews are a genuine structural difference that addresses their specific fear." },
      { text: "Our review system has strong moderation — bad reviews get flagged and reviewed quickly.", correct: false,
        feedback: "Platform moderation doesn't address the Yelp trauma. Show them why this is structurally different." },
      { text: "Most restaurants find delivery reviews are more positive than dine-in reviews.", correct: false,
        feedback: "Generic optimism about review quality doesn't address a specific bad experience they've had." },
      { text: "What happened with Yelp specifically? I want to understand what you went through.", correct: false,
        feedback: "Good empathy, but show the structural difference first — then invite them to share more if they want." },
    ],
  },
  it72: {
    objection: "It's the holiday season and we're slammed from now until January. Come back in the new year.",
    responses: [
      { text: "Absolutely — the new year is a great time to launch. Can I send you the setup materials now so you're ready to go live in January without any back-and-forth? I can have you ready to turn it on in the first week.", correct: true, technique: 'Pipeline Value',
        feedback: "You accepted the timing gracefully and turned the wait into a setup window. January launch from a standing start is far better than January launch with no prep." },
      { text: "Holiday season is actually a peak delivery time — now would be ideal to be listed.", correct: false,
        feedback: "Pushing urgency when they've said they're slammed will create resistance, not momentum." },
      { text: "No problem — I'll reach out in January and we can start fresh.", correct: false,
        feedback: "Starting fresh in January means starting cold. Do the prep work now to restart warm." },
      { text: "How does your January typically look — does business drop off or stay strong?", correct: false,
        feedback: "Good discovery, but commit to the 'set up now, launch in January' plan first." },
    ],
  },
  it73: {
    objection: "We do a lot of anniversary dinners and birthdays. Delivery can't replicate that special occasion feel.",
    responses: [
      { text: "Special occasions in the dining room stay exactly as they are — those customers aren't ordering delivery. But there's a whole segment who wants your food for a birthday dinner at home and can't make the trip. They're an entirely different customer.", correct: true, technique: 'Channel Separation',
        feedback: "You protected the special occasion dine-in experience and showed delivery serves a fundamentally different use case — home celebrations that can't or won't come to the restaurant." },
      { text: "We could set up a special occasion delivery package — champagne, dessert, the full thing.", correct: false,
        feedback: "Creating a special occasion delivery package is a major operational addition that wasn't asked for. Separate the channels first." },
      { text: "Delivery can feel special too — it's about the food quality, not the setting.", correct: false,
        feedback: "Arguing that delivery can match a special occasion dining experience will lose a restaurateur who takes that seriously." },
      { text: "What percentage of your revenue comes from special occasion bookings?", correct: false,
        feedback: "Good data eventually, but separate the channels first so they see delivery doesn't compete with that revenue." },
    ],
  },
  it74: {
    objection: "I'd want to try this for a week before committing to anything.",
    responses: [
      { text: "Completely reasonable — you can go live and treat the first 30 days as a trial. There's no minimum commitment, so if it doesn't perform to your expectations after a month, you can pause it without any obligation.", correct: true, technique: 'Risk Reversal',
        feedback: "You validated the trial mindset and formalized it with a specific timeframe and an explicit exit option. Making the trial official and commitment-free removes all the risk." },
      { text: "A week isn't really long enough to see results — we'd need at least 30 days for meaningful data.", correct: false,
        feedback: "Arguing about the length of their proposed trial creates friction when you should be removing barriers." },
      { text: "Of course — we can set up a pilot program with specific success metrics.", correct: false,
        feedback: "A pilot program with metrics sounds more formal than they asked for. Match their energy — they just want to try it." },
      { text: "What would 'working' look like to you after that first week?", correct: false,
        feedback: "Good question for aligning expectations, but confirm the trial is possible first." },
    ],
  },
  it75: {
    objection: "I need to understand the tax implications before adding another revenue stream.",
    responses: [
      { text: "Smart move to check. We provide detailed monthly transaction reports you can hand directly to your accountant, and delivery revenue is reported as standard food sales — the same category as your dine-in income. I can put you in touch with an accountant who specializes in restaurant platforms if that's helpful.", correct: true, technique: 'Partnership Assurance',
        feedback: "You validated the due diligence, described the reporting structure accurately, and offered a specialized resource. Connecting them with a platform-experienced accountant shows you've dealt with this before." },
      { text: "Most restaurants just add delivery revenue to their existing sales reporting — it's pretty straightforward.", correct: false,
        feedback: "Telling a tax-conscious owner it's 'pretty straightforward' without explanation is dismissive of a real concern." },
      { text: "You should consult your accountant — we can't give tax advice.", correct: false,
        feedback: "Kicking the question entirely to someone else without providing any useful information feels unhelpful. Share what you know." },
      { text: "What jurisdiction are you in? Tax treatment can vary by state.", correct: false,
        feedback: "Good eventually, but describe the reporting structure first before getting into jurisdiction specifics." },
    ],
  },
  it76: {
    objection: "Honestly, I worry that delivery tips and extra orders would tempt some of my staff to pocket things.",
    responses: [
      { text: "All transactions go directly from the customer to Uber Eats to you — there's no cash handling involved in delivery at all. Tips are processed digitally and paid out to the courier through the platform. There's nothing for staff to pocket.", correct: true, technique: 'Transparency',
        feedback: "You clarified the digital-only transaction flow, which eliminates the theft vector entirely. No cash means no opportunity — that's the direct answer." },
      { text: "That's a rare concern — most restaurant staff don't have those issues.", correct: false,
        feedback: "Dismissing a legitimate internal trust concern as rare won't reassure someone who knows their team." },
      { text: "You could implement monitoring policies to track delivery order income separately.", correct: false,
        feedback: "Suggesting new monitoring policies adds complexity. Clarify there's no cash in the process first." },
      { text: "What's your current cash handling setup for the restaurant?", correct: false,
        feedback: "Good context eventually, but first show that delivery is entirely cashless and doesn't create a new theft vector." },
    ],
  },
  it77: {
    objection: "I'm worried if something goes wrong — a bad order, a driver incident — it'll end up on social media and damage us.",
    responses: [
      { text: "Delivery incidents are attributed to the platform's logistics, not your restaurant page — so a driver issue or fulfillment error doesn't show up on your restaurant profile. And if your food is the issue, you hear about it through the platform before it hits social media.", correct: true, technique: 'Reputation Protection',
        feedback: "You separated two types of incidents and showed how each is handled. Knowing that logistics complaints don't land on their restaurant profile removes the specific PR fear." },
      { text: "Social media incidents are rare — delivery generally goes smoothly.", correct: false,
        feedback: "Rarity doesn't address the 'what if it happens' concern. Show the protection structure." },
      { text: "We have a rapid response team for PR issues related to partner restaurants.", correct: false,
        feedback: "A PR response team implies incidents are expected. Show how complaints are categorized before they become PR issues." },
      { text: "How active is your restaurant on social media currently?", correct: false,
        feedback: "Good context, but address the protection structure first before exploring their social media presence." },
    ],
  },
  it78: {
    objection: "Our best customers call us directly to order. That personal relationship is what keeps them coming back.",
    responses: [
      { text: "Those relationships are yours and delivery doesn't touch them. Your regulars who call will keep calling. Uber Eats is for the person who has never found you and won't pick up the phone — it's a completely different customer acquisition path.", correct: true, technique: 'Channel Separation',
        feedback: "You protected the personal call-in relationship explicitly and showed delivery serves a different customer type. No conflict, no change to what they value." },
      { text: "You could keep taking phone orders while also being on the app — it doesn't have to be either/or.", correct: false,
        feedback: "True but it doesn't address the deeper concern about the personal relationship. Protect that first." },
      { text: "Phone ordering is inefficient — moving customers to an app actually improves the experience.", correct: false,
        feedback: "Telling a relationship-driven restaurateur that phone ordering is inefficient will lose the conversation immediately." },
      { text: "How many of your orders currently come through phone calls?", correct: false,
        feedback: "Good data, but separate the two channels first so they see the phone relationship is completely unaffected." },
    ],
  },
  it79: {
    objection: "We do a set service with courses. A delivery order coming in mid-service would throw off our timing.",
    responses: [
      { text: "You control delivery hours precisely — you can open delivery before service starts, close it during the set menu window, and reopen after. The timed service is completely protected.", correct: true, technique: 'Capacity Planning',
        feedback: "You showed the scheduling precision that makes their specific workflow compatible with delivery. Timed closures during the set-menu service are a direct solution." },
      { text: "Delivery orders are usually quick to prepare — they wouldn't disrupt a set service flow.", correct: false,
        feedback: "This dismisses the specific timing concern. Show them the scheduling control instead." },
      { text: "You could offer delivery only on nights when you're not doing a set menu.", correct: false,
        feedback: "This might be the right answer, but confirm scheduling control first so they know the flexibility exists." },
      { text: "What nights do you run the tasting menu format?", correct: false,
        feedback: "Good to know for planning, but show the delivery hour scheduling capability first." },
    ],
  },
  it80: {
    objection: "Our signature dishes sell out by 8pm. I don't want delivery customers getting disappointed.",
    responses: [
      { text: "You can mark individual items as unavailable in real time — one tap on the tablet and that dish disappears from the app. No disappointed orders, no fulfillment issues. When it's gone, it's gone and customers can't order it.", correct: true, technique: 'Control Framing',
        feedback: "You gave them a specific, actionable feature that solves the exact problem. Real-time item availability control directly addresses the sell-out concern." },
      { text: "You could make extra quantities specifically for delivery customers.", correct: false,
        feedback: "Suggesting they increase production of a sell-out item might not be realistic and misses the simpler solution." },
      { text: "Customers who can't get their first choice often find something they enjoy just as much.", correct: false,
        feedback: "Telling a restaurateur not to worry about disappointed customers is the wrong frame entirely." },
      { text: "What's your typical sell-out time for your most popular dishes?", correct: false,
        feedback: "Good to know, but show the real-time availability control first so they know the solution is already built in." },
    ],
  },
  it81: {
    objection: "We're not set up with digital banking. How would we even receive payments?",
    responses: [
      { text: "We pay out via direct bank transfer — you just need a standard business bank account, not anything special. If you don't have one yet, our onboarding team can walk you through what's needed. It's simpler than you might think.", correct: true, technique: 'Effort Minimization',
        feedback: "You clarified the low barrier (standard bank account) and offered onboarding support. Making it sound achievable rather than technical removes the perceived complexity." },
      { text: "Most restaurants are set up digitally these days — it's quite easy to get there.", correct: false,
        feedback: "Telling someone their setup is behind the times isn't helpful. Show them what the actual requirement is." },
      { text: "We support PayPal, Venmo for Business, and other digital options too.", correct: false,
        feedback: "Jumping to alternative payment options before explaining the basic requirement creates confusion." },
      { text: "What's your current setup for accepting card payments at the restaurant?", correct: false,
        feedback: "Good context, but clarify the basic bank account requirement first before exploring their current setup." },
    ],
  },
  it82: {
    objection: "I only want to offer delivery within our neighborhood — not to people across town.",
    responses: [
      { text: "You set the delivery radius yourself — you can cap it at half a mile, one mile, or whatever feels right for your food quality and the experience you want to provide.", correct: true, technique: 'Control Framing',
        feedback: "Direct and accurate. The radius control feature is the precise answer to this concern — nothing more needed." },
      { text: "Local delivery actually tends to perform best anyway — nearby customers order more frequently.", correct: false,
        feedback: "True but secondary. Confirm radius control first before discussing performance patterns." },
      { text: "Most of our best-performing restaurants are hyper-local — you'd be in good company.", correct: false,
        feedback: "Good framing, but confirm they actually have the control before positioning it as a strategy." },
      { text: "What radius would feel comfortable to you?", correct: false,
        feedback: "Good question, but confirm radius control is possible and in their hands before asking for their preference." },
    ],
  },
  it83: {
    objection: "We use premium packaging already — cloth napkins, ceramic to-go containers. That's part of the experience.",
    responses: [
      { text: "Your packaging choices are entirely yours — you supply what goes in the bag. If that's ceramic containers, that's what customers get. Our platform supports it and customers who choose you will expect it.", correct: true, technique: 'Control Framing',
        feedback: "You gave them full ownership over packaging and validated the premium approach. Nothing about the platform changes their packaging standard." },
      { text: "That level of packaging for delivery might not be cost-effective at scale.", correct: false,
        feedback: "They didn't ask about cost — they asked about whether they can maintain their standard. Respect that." },
      { text: "Customers might appreciate simpler packaging for delivery — it's a different context.", correct: false,
        feedback: "Suggesting they downgrade their standards for delivery will create immediate resistance from a quality-focused owner." },
      { text: "What's your current per-order packaging cost? That would help with margin projections.", correct: false,
        feedback: "Good to know eventually, but confirm packaging choice is theirs first." },
    ],
  },
  it84: {
    objection: "I want to see data on how similar restaurants in my area are performing before I decide.",
    responses: [
      { text: "I have neighborhood-level data I can share right now — Italian restaurants within a mile of you averaged around $2,800 in new monthly revenue in month one. I can send you the full breakdown today.", correct: true, technique: 'Hyperlocal Data',
        feedback: "You answered the data request directly with specific, local numbers and offered to share the full report. Responding to a data request with data is exactly right." },
      { text: "Performance varies a lot by restaurant — I'd need more information to give you a reliable estimate.", correct: false,
        feedback: "Hedging when they've explicitly asked for data signals you either don't have it or don't trust it." },
      { text: "I can put together a customized analysis for you — give me a few days.", correct: false,
        feedback: "Deferring when you have nearby restaurant data available creates unnecessary delay. Share what you have now." },
      { text: "What metrics matter most to you — revenue, order volume, or customer ratings?", correct: false,
        feedback: "Good to tailor the data, but answer with what you have first before asking them to prioritize." },
    ],
  },
  it85: {
    objection: "My grandmother's recipes are trade secrets. I'm worried about putting details online.",
    responses: [
      { text: "Your recipes never appear on the platform — only menu names and descriptions you write yourself. The recipe stays in your kitchen and in your family, exactly as it should.", correct: true, technique: 'Control Framing',
        feedback: "You immediately cleared the misconception with warmth. Recipes are never on the platform — this is the complete, honest answer that removes the fear." },
      { text: "Recipe theft through menu listings is very rare — most competitors don't work that way.", correct: false,
        feedback: "The concern isn't about what competitors normally do — it's about exposure. Clarify that recipes aren't on the platform." },
      { text: "You could use vague menu descriptions that don't reveal techniques.", correct: false,
        feedback: "Suggesting they hide their food's identity to protect recipes misses the simpler answer: recipes aren't on the platform." },
      { text: "What parts of the recipes are you most concerned about protecting?", correct: false,
        feedback: "Good discovery eventually, but first confirm that recipes never appear anywhere on the platform." },
    ],
  },
  it86: {
    objection: "We only want to list two or three items — our bestsellers. Is that viable?",
    responses: [
      { text: "Absolutely — some of our highest-rated restaurants have very small menus. A focused listing of two or three signature items actually performs really well because customers make decisions faster and satisfaction rates are higher.", correct: true, technique: 'Flexibility Framing',
        feedback: "You validated the minimalist approach and showed it's actually a proven strategy, not a limitation. Fewer items with high satisfaction is a real pattern." },
      { text: "A wider menu would give customers more choice and likely increase your average order value.", correct: false,
        feedback: "They didn't ask for upselling advice — they asked if a small menu is viable. Answer that." },
      { text: "Of course — you can always expand the menu later as you get comfortable.", correct: false,
        feedback: "True but it misses the opportunity to validate their focused approach as a real strength." },
      { text: "Which items were you thinking of listing?", correct: false,
        feedback: "Good to know, but confirm a small focused menu works great before discussing specifics." },
    ],
  },
  it87: {
    objection: "I have ethical concerns about the gig economy model. I won't support that kind of work arrangement.",
    responses: [
      { text: "That's a values question I respect, and I won't argue against it. What I can tell you honestly is that couriers in your neighborhood are independent contractors who choose their own hours and areas — many do it alongside other work. If it still conflicts with your values after hearing that, that's a legitimate reason to pass.", correct: true, technique: 'Values Alignment',
        feedback: "You acknowledged the ethical stance, gave honest counterpoints without being defensive, and respected their right to say no. Honesty about a values disagreement builds more trust than a hard sell." },
      { text: "Gig work gives drivers the flexibility they prefer over traditional employment.", correct: false,
        feedback: "The gig-vs-employment debate is one you're unlikely to win with someone who's already formed a view. Acknowledge first, then add context." },
      { text: "We're constantly improving driver benefits and earnings — it's a priority for Uber.", correct: false,
        feedback: "Corporate talking points on gig worker treatment land poorly with someone who already feels negatively about the model." },
      { text: "Would it help to hear about our driver support programs directly from a courier?", correct: false,
        feedback: "Good idea, but frame it after respecting their concern — not as a reflexive counter." },
    ],
  },
  it88: {
    objection: "I feel like adding one more system will add complexity I just don't need right now.",
    responses: [
      { text: "The only new thing in your kitchen is a single tablet that shows incoming orders. Everything else — cooking, plating, handing off — stays exactly the same. Most partners describe it as adding a screen, not a system.", correct: true, technique: 'Effort Minimization',
        feedback: "You made the new complexity as small as it actually is. 'Adding a screen, not a system' is exactly the right frame for someone worried about operational complexity." },
      { text: "Once you're set up, the platform basically runs itself — the complexity is front-loaded.", correct: false,
        feedback: "Acknowledging upfront complexity, even temporarily, keeps the concern alive. Show how minimal the change actually is." },
      { text: "Technology complexity is a normal part of running a modern restaurant.", correct: false,
        feedback: "Telling someone their concern is just part of modern life dismisses rather than resolves it." },
      { text: "What's the most complex part of your operation right now?", correct: false,
        feedback: "Good discovery, but show how small the new addition is first before asking about their current pain points." },
    ],
  },
  it89: {
    objection: "My team is asking for raises. I need to sort that out before taking on new revenue streams.",
    responses: [
      { text: "That's the right priority. And when you do add delivery, the extra revenue could directly fund those raises — it's genuinely incremental income with almost no additional labor cost. Worth revisiting once the team situation is resolved.", correct: true, technique: 'Soft Next Step',
        feedback: "You respected their priority and planted the seed that delivery revenue could fund the raises. Staying connected to their immediate concern shows you're thinking about their business, not just a sale." },
      { text: "Delivery revenue could fund the raises — there's no reason to wait.", correct: false,
        feedback: "Pushing against a stated priority signals you're not listening. Respect the sequencing they've chosen." },
      { text: "Would a portion of delivery revenue go to the team automatically?", correct: false,
        feedback: "This introduces a compensation structure complication that wasn't asked for. Keep it simple." },
      { text: "What kind of raise are you planning? That context might help me frame the revenue opportunity.", correct: false,
        feedback: "Connecting the raises to delivery revenue is a good angle, but only after respecting that sorting out raises comes first for them." },
    ],
  },
  it90: {
    objection: "My business advisor recommended we focus on the core operation and not get distracted.",
    responses: [
      { text: "That's sound advice for most new channels. The reason delivery often doesn't count as distraction is that the setup is handled by us and the ongoing effort is minimal — it's closer to passive revenue than an active project. Would it be worth a quick call with your advisor together?", correct: true, technique: 'Stakeholder Navigation',
        feedback: "You validated the advisor's framework and then showed why delivery fits within it — rather than arguing against the advice. Offering to join a call with the advisor is the right next step." },
      { text: "Business advisors are often conservative — delivery is a low-risk channel.", correct: false,
        feedback: "Undermining their trusted advisor's credibility will backfire. Work within the framework they've been given." },
      { text: "What does your core operation need to improve before you'd consider expanding?", correct: false,
        feedback: "Good discovery, but first show why delivery might not be a 'distraction' in the way the advisor meant." },
      { text: "I'd be happy to talk directly with your advisor if that helps.", correct: false,
        feedback: "Good offer, but make the case for why delivery fits the 'focus on core' framework before jumping to the three-way conversation." },
    ],
  },
  it91: {
    objection: "We just redesigned our entire workflow six months ago. I don't want to change anything again so soon.",
    responses: [
      { text: "That makes complete sense — workflow stability is hard-won. The good news is delivery doesn't touch your front-of-house or service workflow at all. It adds one tablet to the kitchen with a single order feed. What you built six months ago stays exactly as is.", correct: true, technique: 'Effort Minimization',
        feedback: "You protected what they fought for — the redesigned workflow — and showed delivery sits completely outside it. Nothing they built changes." },
      { text: "Delivery is actually designed to fit into existing workflows — it's non-disruptive by design.", correct: false,
        feedback: "Generic 'non-disruptive' claims don't convince someone who's been through a recent workflow overhaul. Be specific." },
      { text: "Six months is enough time to feel stable — a small addition won't undo that.", correct: false,
        feedback: "Deciding when someone else's workflow is 'stable enough' for change is presumptuous." },
      { text: "What specifically would you be most worried about disrupting in the new workflow?", correct: false,
        feedback: "Good question, but show what delivery doesn't touch first so they can evaluate from that baseline." },
    ],
  },
  it92: {
    objection: "We have guests with severe allergies regularly. I can't risk any mix-up on a delivery order.",
    responses: [
      { text: "You control the allergen labeling completely — you mark every item with its allergen information, and customers with severe allergies can filter by that before ordering. If a dish has a risk, you can also add a custom note requiring direct confirmation.", correct: true, technique: 'Control Framing',
        feedback: "You gave them complete control over allergen communication and offered the custom note option. Full labeling plus a confirmation mechanism directly addresses the severe allergy concern." },
      { text: "Customers with severe allergies are generally very careful about checking menus before ordering.", correct: false,
        feedback: "Putting the responsibility entirely on the customer doesn't address the restaurant's liability and care concern." },
      { text: "You could simply not list dishes with common allergens on the delivery menu.", correct: false,
        feedback: "Limiting the menu unnecessarily ignores the direct labeling solution. Show them the tools they have." },
      { text: "What allergens are you most concerned about managing?", correct: false,
        feedback: "Good discovery, but show the labeling and custom note capability first." },
    ],
  },
  it93: {
    objection: "Delivery apps attract customers who are just looking for the cheapest option. That's not our clientele.",
    responses: [
      { text: "Your listing, your pricing — you don't have to discount at all. Our partners in the premium Italian segment mostly price at full rate, and they attract customers who chose them specifically for the food, not a deal.", correct: true, technique: 'Control Framing',
        feedback: "You separated the fear of discount-chasing customers from the platform itself and clarified that promotions are entirely optional. Pricing control is the direct answer." },
      { text: "Delivery customers span every price range — it's not just discount seekers.", correct: false,
        feedback: "Generic reassurance about customer mix doesn't address the specific clientele concern. Show them the control over pricing." },
      { text: "You could run a small promotional offer to attract new customers and then remove it.", correct: false,
        feedback: "Mentioning promotions at all, even as temporary, keeps the 'cheap customer' fear alive. Lead with 'you never have to discount.'" },
      { text: "What kind of customer experience are you trying to protect?", correct: false,
        feedback: "Good discovery question, but only after establishing that pricing and discounting are entirely in their control." },
    ],
  },
  it94: {
    objection: "I want a dedicated account manager who I can call when something goes wrong — not a chatbot.",
    responses: [
      { text: "For restaurants above a certain order volume, we assign a dedicated partner success manager — a real person with a direct line. I can flag your account for that program, and in the meantime, our restaurant support line connects to a live person, not a bot.", correct: true, technique: 'Partnership Assurance',
        feedback: "You addressed both the immediate support concern and the dedicated manager aspiration. Being specific about the escalation path shows you're not just promising something vague." },
      { text: "Our support team is very responsive — most issues are resolved within a few hours.", correct: false,
        feedback: "They asked for a dedicated person, not fast response times. Address the personalization specifically." },
      { text: "Every restaurant partner gets standard support — the quality is consistent.", correct: false,
        feedback: "Saying 'standard support' is consistent doesn't answer the request for dedicated, personal attention." },
      { text: "What kinds of issues do you typically need support for?", correct: false,
        feedback: "Good discovery, but confirm the live support and partner manager path before exploring specific scenarios." },
    ],
  },
  it95: {
    objection: "I've been approached by six delivery platforms this year. I'm frankly exhausted by these conversations.",
    responses: [
      { text: "Fair — and I'll make this quick. The one thing structurally different about Uber Eats is the ride network: customers who open Uber for transportation see your restaurant. That's a segment that doesn't exist on any other platform. That's it. Worth five more minutes?", correct: true, technique: 'Differentiation',
        feedback: "You acknowledged the pitch fatigue, skipped the usual wind-up, and gave one specific differentiator. One clear structural difference is far more credible than a full pitch deck." },
      { text: "I understand the fatigue — this will be different, I promise.", correct: false,
        feedback: "Every rep says this will be different. Don't promise it — demonstrate it by getting to the point immediately." },
      { text: "We're consistently rated the top platform by independent surveys.", correct: false,
        feedback: "A survey ranking is exactly the kind of claim all six platforms probably made. This confirms the exhaustion." },
      { text: "What would make this conversation worth your time?", correct: false,
        feedback: "Good question in theory but after six pitches, they'll just say nothing. Lead with your best differentiated point immediately." },
    ],
  },
  it96: {
    objection: "I've heard newer restaurants on the platform get buried under restaurants with thousands of reviews.",
    responses: [
      { text: "New restaurants get a visibility boost for the first 90 days — you appear in more search results than your review count would normally warrant. It's specifically designed to let new partners build their rating base before competing on reviews alone.", correct: true, technique: 'Transparency',
        feedback: "You addressed the fear directly with a real, specific feature. The new-restaurant boost is genuine — sharing it confidently shows you understand the system and have nothing to hide." },
      { text: "Reviews accumulate quickly — most restaurants build a strong rating base within a few months.", correct: false,
        feedback: "Timeline reassurance doesn't address the 'buried under established restaurants' concern specifically." },
      { text: "You can pay for premium placement to appear above review-heavy competitors.", correct: false,
        feedback: "Jumping to paid placement implies organic visibility is indeed a problem. Show the free boost first." },
      { text: "What's your current online review situation on Google or Yelp?", correct: false,
        feedback: "Good context, but explain the new-restaurant boost first before assessing their existing review profile." },
    ],
  },
  it97: {
    objection: "We give 10% discounts to our regulars who come in every week. I can't replicate that loyalty program on an app.",
    responses: [
      { text: "Your dine-in loyalty program stays completely separate — regulars who come in get their discount exactly as before. The app reaches people who aren't in your loyalty program yet. When they become regulars who walk in, they join your existing program.", correct: true, technique: 'Channel Separation',
        feedback: "You protected the loyalty program and showed the two channels serve different relationship stages. Delivery brings in new customers who can then graduate into your loyalty program." },
      { text: "You could create a separate loyalty program for delivery customers on the platform.", correct: false,
        feedback: "Adding a second loyalty program is more work than they asked for. Separate the channels and protect what exists." },
      { text: "Delivery customers typically don't expect loyalty discounts — it's a different expectation.", correct: false,
        feedback: "Customers not expecting discounts doesn't address their concern about not being able to offer the same experience." },
      { text: "What's your current loyalty program look like in terms of redemption rates?", correct: false,
        feedback: "Good discovery, but separate the dine-in program from delivery first so they know it's unaffected." },
    ],
  },

  // ── LITTLE ITALY (EXTENDED) ───────────────────────────────────────────────
  it01: {
    objection: "We're a family business. I don't want some big tech company involved in how we run things.",
    responses: [
      { text: "That's the right instinct — and we wouldn't change how you run anything. You stay fully in control of the food and the dining room. We just connect hungry new customers to your door.",
        correct: true, technique: 'Autonomy Preservation',
        feedback: "You addressed the values-based fear directly. The owner's worry is loss of control — show them they keep all of it and the objection dissolves." },
      { text: "We actually work with hundreds of family-owned restaurants. They all kept full control of their operations.", correct: false,
        feedback: "Generic examples don't address a personal fear. Make it about their specific situation, not others." },
      { text: "You'd just need a tablet on the counter — that's the only thing that changes for you.", correct: false,
        feedback: "The tablet is the right point but starting there minimizes a deeply values-based objection. Honor the concern before introducing the solution." },
      { text: "What does 'involved' mean to you specifically — pricing, operations, or something else?", correct: false,
        feedback: "Good discovery instinct, but asking before showing you understand the concern can feel evasive. Empathize first, then explore." },
    ],
  },
  it02: {
    objection: "A driver left our food at the wrong address last time. Customers blamed us and it hurt our reputation.",
    responses: [
      { text: "That's serious — and your rating should never suffer for a logistics mistake. On our platform, delivery errors trigger automatic refunds we absorb, and the complaint is handled by us, not attributed to your restaurant.",
        correct: true, technique: 'Error Accountability',
        feedback: "You owned the category of failure, explained the protection mechanism, and kept their reputation as the priority. That rebuilds trust without being defensive." },
      { text: "Our drivers have GPS tracking and very high reliability scores compared to competitors.", correct: false,
        feedback: "Tech features don't undo trust damage. Lead with what happens if something goes wrong, not with assurances that it won't." },
      { text: "That sounds like it was a different platform — our fulfillment quality has improved significantly.", correct: false,
        feedback: "Shifting blame to a competitor sidesteps accountability. Take ownership of the category first." },
      { text: "Have you tried reaching out to that platform to escalate the complaint?", correct: false,
        feedback: "Suggesting they handle the aftermath themselves is the opposite of what a partner should say. Show you'd manage it for them." },
    ],
  },
  it03: {
    objection: "I'm worried delivery will pull customers away from our dining room. We live on the full table experience.",
    responses: [
      { text: "Delivery actually reaches a completely different person — someone who can't make it to your dining room tonight. Your regulars who love sitting with you aren't on a delivery app at 7pm. You'd be adding a new customer, not replacing an existing one.",
        correct: true, technique: 'Additive Framing',
        feedback: "You drew a clear line between two distinct customer types. The dine-in regular and the delivery user rarely overlap — making this concrete protects what they value most." },
      { text: "Most of our restaurant partners see no change to dine-in volume after joining.", correct: false,
        feedback: "A stat without context doesn't address the emotional concern. Show them why the two channels serve different customers." },
      { text: "Delivery might even bring in new customers who later want to visit in person.", correct: false,
        feedback: "This is speculative and might actually confirm their fear that delivery cannibalizes dine-in. Lead with the separation argument instead." },
      { text: "What percentage of your revenue currently comes from regulars versus walk-ins?", correct: false,
        feedback: "Useful data eventually, but asking before making the case feels like you're building ammunition rather than solving their concern." },
    ],
  },
  it04: {
    objection: "Honestly, I'm thinking about retiring in three years. I don't want to invest in learning new systems.",
    responses: [
      { text: "I completely understand. The setup takes about 20 minutes and our team handles it — you wouldn't be doing anything technical yourself. Three years of extra revenue with no ongoing learning curve is worth considering.",
        correct: true, technique: 'Low Effort / High Return',
        feedback: "You respected the timeline, minimized the effort honestly, and reframed the value within their specific horizon. Meeting them where they are is more persuasive than any feature list." },
      { text: "It's a lot easier than you might think — most people pick it up in a day.", correct: false,
        feedback: "Telling someone close to retirement it's 'easy to learn' doesn't resolve the concern. Show them they almost don't have to learn anything." },
      { text: "Three years is actually a great window to build up delivery revenue before you transition.", correct: false,
        feedback: "Framing this as a growth investment can feel misaligned with someone winding down. Match your pitch to their actual timeline." },
      { text: "What would you want to spend those three years focused on?", correct: false,
        feedback: "Discovery is fine eventually, but asking without first showing you understand the retirement mindset reads as deflection." },
    ],
  },
  it05: {
    objection: "My son manages anything technology-related here. He looked at Uber Eats and wasn't impressed.",
    responses: [
      { text: "I'd love to speak with him directly — he's the right person for this conversation. Could you introduce us, or would a short call with him this week work? I want to address whatever specific concerns he had.",
        correct: true, technique: 'Stakeholder Navigation',
        feedback: "The father is telling you who the real decision-maker is. Go directly to the technical gatekeeper rather than trying to sell around them — it respects the family dynamic and gives you a real shot." },
      { text: "A lot of restaurant owners feel that way at first — once you're live, most find the platform much better than expected.", correct: false,
        feedback: "Dismissing a specific concern with 'most people come around' doesn't engage with what the son actually found unimpressive." },
      { text: "What specifically didn't impress him? I might be able to address it right now.", correct: false,
        feedback: "Good instinct, but the father probably can't articulate the technical objection accurately. You need to talk to the son directly." },
      { text: "If the concerns are about commissions, I can share some data that might change the picture.", correct: false,
        feedback: "You're guessing at the concern without knowing it. Ask or get to the right person first." },
    ],
  },
  it06: {
    objection: "I don't want bad reviews on some app damaging the reputation we've spent 40 years building.",
    responses: [
      { text: "That reputation is worth protecting — and the reviews on our platform actually reflect your food, not the delivery logistics. If a courier makes an error, we handle that complaint separately from your restaurant page.",
        correct: true, technique: 'Reputation Protection',
        feedback: "You separated the two sources of potential reputation damage and explained how delivery errors don't contaminate their food ratings. That's the specific fear — address it specifically." },
      { text: "Our average restaurant maintains a 4.7+ rating — it's very hard to get bad reviews if the food is good.", correct: false,
        feedback: "Average ratings don't reassure a brand-protective owner. They'll assume their situation is exceptional." },
      { text: "Negative reviews happen everywhere — the important thing is responding quickly.", correct: false,
        feedback: "Treating negative reviews as inevitable normalizes the exact thing they're afraid of. Never minimize the risk before offering the protection." },
      { text: "What kind of reviews are you most worried about — food quality or service?", correct: false,
        feedback: "Good question eventually, but it comes before any reassurance. Lead with the protection first." },
    ],
  },
  it07: {
    objection: "Our food is made for the table. It's too premium for a delivery app.",
    responses: [
      { text: "Some of our highest-performing partners are upscale Italian restaurants who built a smaller delivery menu — antipasti, sauces, specialty items that travel beautifully. The full dining experience stays exactly as it is.",
        correct: true, technique: 'Premium Positioning',
        feedback: "You validated their positioning completely and offered a path that doesn't compromise it. A curated delivery menu is additive, not a downgrade of the brand." },
      { text: "Premium restaurants are actually doing very well on delivery platforms now — customers expect it.", correct: false,
        feedback: "Telling a proud restaurateur what customers 'expect' from them subordinates their identity to market trends. That's pressure, not partnership." },
      { text: "Customers don't care about the setting when they're ordering at home — they just want great food.", correct: false,
        feedback: "This directly contradicts their belief about their own brand. Arguing with an owner about the value of their dining experience rarely ends well." },
      { text: "What dishes do you think would hold up best for delivery?", correct: false,
        feedback: "Good brainstorming question, but only after you've shown there's a viable premium path. Without context, it sounds like you're asking them to solve the problem themselves." },
    ],
  },
  it08: {
    objection: "The setup process looks complicated. We don't have time to figure out new technology.",
    responses: [
      { text: "The setup is completely handled by our team — you don't do any of it yourself. We build the menu from your existing one, configure the tablet, and you're live. Most restaurants take about 20 minutes of their actual time.",
        correct: true, technique: 'Effort Minimization',
        feedback: "You took the work off their plate entirely and gave a concrete time estimate. The fear is hidden complexity — make the reality sound as light as it actually is." },
      { text: "It's much simpler than it looks — you'll get the hang of it within a day.", correct: false,
        feedback: "'You'll get used to it' still implies effort. Show them they barely have to do anything." },
      { text: "We have a 24/7 support line if anything comes up during or after setup.", correct: false,
        feedback: "Support is reassuring for ongoing issues, but it doesn't address the setup concern. Tell them the setup itself is handled for them." },
      { text: "When would be a good time to do a 30-minute walkthrough so you can see how straightforward it is?", correct: false,
        feedback: "Asking for 30 minutes when they've said they have no time isn't a soft next step — it's confirmation that you weren't listening." },
    ],
  },
  it09: {
    objection: "We have loyal regulars who've been coming here for decades. I don't want to do anything that changes that dynamic.",
    responses: [
      { text: "Those relationships are the backbone of a restaurant like yours — delivery wouldn't touch them. It's aimed at people who've never found you yet and can't make it in. Your regulars' experience stays identical.",
        correct: true, technique: 'Channel Separation',
        feedback: "You protected the thing they value most before introducing anything new. Loyal regulars and delivery app users are different people with different use cases — make that clear." },
      { text: "Your regulars might actually enjoy being able to order from home sometimes — especially on nights they can't come in.", correct: false,
        feedback: "Suggesting their regulars might want delivery assumes you know their customers better than they do. Let them make that case if they want to." },
      { text: "Delivery wouldn't affect your in-store experience at all — the kitchen just fulfills extra orders.", correct: false,
        feedback: "This is partially right but undersells it. The owner's concern is the relationship dynamic, not just the in-store logistics." },
      { text: "What would need to stay exactly the same for you to feel comfortable trying something new?", correct: false,
        feedback: "Good question but only after you've shown delivery doesn't touch their relationships. Without that, the question implies you'd be changing something they care about." },
    ],
  },
  it10: {
    objection: "We're a seasonal restaurant — we're only really busy from May through October. The rest of the year we barely break even.",
    responses: [
      { text: "That's actually where delivery can help most — it extends your revenue season. Off-peak months are when delivery tends to perform best for restaurants that already have a strong reputation, because people are craving your food but not making the trip out.",
        correct: true, technique: 'Seasonal Framing',
        feedback: "You flipped the objection: seasonality isn't a reason to avoid delivery, it's a reason delivery is especially valuable. The slower months are exactly when extra revenue matters most." },
      { text: "Our platform is active year-round, so you'd still see consistent orders even in winter.", correct: false,
        feedback: "Platform availability doesn't address the economic concern. Show why slower months make delivery more valuable, not just viable." },
      { text: "You could turn off delivery in the busy months if the kitchen can't handle both.", correct: false,
        feedback: "This implies delivery is a concession they'd want to limit, not an opportunity. Lead with the off-peak value case." },
      { text: "What does a typical off-season month look like in terms of cover count?", correct: false,
        feedback: "Good discovery for building the financial case, but ask it in the context of why delivery would help during those months — not as an opener." },
    ],
  },
  it11: {
    objection: "My accountant looked at the commission structure and said the numbers don't work for our margins.",
    responses: [
      { text: "Your accountant is doing the right math on dine-in margins — but delivery has a different cost structure. Your kitchen and staff are already paid for. The incremental cost of one more order is just ingredients, which means the net margin on delivery orders is typically much higher than the headline fee suggests.",
        correct: true, technique: 'Incremental Margin Logic',
        feedback: "You explained why the accountant's model may be applying the wrong cost structure to delivery. Fixed costs already paid = fundamentally different margin math. This shows you understand their business." },
      { text: "Our rates are competitive — most accountants find the fee reasonable once they see the revenue volume.", correct: false,
        feedback: "An accountant who's already said no won't be moved by 'competitive rates.' Address the margin math directly." },
      { text: "We could look at a reduced trial rate to make the numbers work initially.", correct: false,
        feedback: "Discounts don't fix a structural concern about margin. The accountant will say the same thing when the trial ends." },
      { text: "Would it help if I spoke directly with your accountant to walk through the model?", correct: false,
        feedback: "Good idea in principle, but only after you've shown you have a credible counterpoint. Without substance, this looks like a stall." },
    ],
  },
  it12: {
    objection: "We do catering deliveries ourselves with our own van. We don't need a third-party app.",
    responses: [
      { text: "Catering is a completely different channel — you're right to run that yourself. What delivery apps do is reach the individual who wants your pasta on a Tuesday night but isn't ordering catering. Those customers can't find you right now.",
        correct: true, technique: 'Complementary Positioning',
        feedback: "You drew a clear distinction between catering (large, scheduled, personal) and app delivery (individual, spontaneous, discovery-based). They don't compete — they serve different demand entirely." },
      { text: "Our drivers handle individual orders much more efficiently than a catering van could.", correct: false,
        feedback: "Comparing your drivers to their van invites a loyalty and efficiency debate you don't need. Separate the channels instead." },
      { text: "Catering margins are actually lower than platform delivery once you factor in driver time and fuel costs.", correct: false,
        feedback: "Challenging their own business model without being asked creates defensiveness. Stick to the incremental opportunity." },
      { text: "Do you ever get individual delivery requests outside of catering events?", correct: false,
        feedback: "Discovery is fine, but ask it as a way of surfacing the gap, not as your opening gambit." },
    ],
  },
  it13: {
    objection: "I don't want delivery app customers — they chase discounts and don't become loyal regulars.",
    responses: [
      { text: "That's a fair concern about promotions, and you'd be in full control of whether you run any. Most of our partners in the Italian segment don't discount at all — they price normally and attract customers who chose them for the food, not a deal.",
        correct: true, technique: 'Control Framing',
        feedback: "You separated the fear (discount-driven customers) from the platform itself, and clarified that promotions are entirely optional. Putting control in their hands directly addresses the underlying anxiety." },
      { text: "Delivery customers can absolutely become regulars — a lot of them find a restaurant they love and keep reordering.", correct: false,
        feedback: "This is optimistic and anecdotal. The owner has a specific fear about the customer type — address it with specifics, not hope." },
      { text: "We do have promotional tools if you want to test them, but they're completely optional.", correct: false,
        feedback: "Mentioning promotions at all, even as optional, keeps the fear alive. Lead with 'you don't have to discount' and stay there." },
      { text: "What kind of customer experience are you trying to protect on the delivery side?", correct: false,
        feedback: "Good discovery question, but only after you've established that they control the pricing and promotions entirely." },
    ],
  },
  it14: {
    objection: "We need my daughter's approval before any business decisions. She's been helping run things for five years.",
    responses: [
      { text: "She absolutely should be part of this — it's her call too. The cleanest way forward is a short call with both of you, or I can send materials you can review together before deciding anything. What works better?",
        correct: true, technique: 'Stakeholder Navigation',
        feedback: "You honored the decision-making structure and gave them two low-pressure options to move forward together. Trying to close before the daughter is involved would undermine trust with both of them." },
      { text: "Of course — what do you think her main hesitation would be?", correct: false,
        feedback: "The father probably can't speak for her accurately, and guessing her objections in absentia can create confusion. Get her in the conversation directly." },
      { text: "No problem — I'll call back once she's available. When do you think that would be?", correct: false,
        feedback: "An open-ended callback loses all momentum. Send something they can review together in the meantime so the conversation is warm when you reconnect." },
      { text: "If you were personally comfortable with it, could you move forward and loop her in after?", correct: false,
        feedback: "Asking them to bypass a trusted family partner will cost you both relationships. Never work around a named stakeholder." },
    ],
  },
  it15: {
    objection: "We're worried about how our food will be photographed on the app. Our presentation is important to us.",
    responses: [
      { text: "You're right that photos matter — and you control all of them. You can upload your own high-quality photos, and we have a free food photography service we can arrange for you at no cost. Your dishes look exactly how you want them to look.",
        correct: true, technique: 'Control Framing',
        feedback: "You immediately gave them ownership over the outcome they're worried about, then added a concrete free resource. Control plus support is exactly the right combination for a quality-conscious owner." },
      { text: "Most restaurants actually find the standard app photos work fine — customers focus more on the menu than the images.", correct: false,
        feedback: "Dismissing the importance of presentation to an owner who values it is a significant misstep. Never tell a craftsperson their craft doesn't matter." },
      { text: "You could start with placeholder photos and update them once you're live.", correct: false,
        feedback: "Launching with bad photos is worse than not launching. Show them they don't have to." },
      { text: "Do you have a photographer you work with already, or would you want a recommendation?", correct: false,
        feedback: "Good practical question, but only after you've shown them the photography service is already available for free." },
    ],
  },
  it16: {
    objection: "I want to grow the business but I'm just not ready to take on something new right now. Too much going on.",
    responses: [
      { text: "That's fair — and our onboarding team does nearly all the work to get you live. If 'ready' is about capacity, most partners describe it as 20 minutes of their time and then it runs in the background. What would need to clear on your end to make this a good time?",
        correct: true, technique: 'Effort Minimization',
        feedback: "You took the work concern off the table first, then asked a soft question to understand the real blocker. This respects their capacity while keeping the door open." },
      { text: "The sooner you start, the more revenue you capture — timing matters in a competitive market.", correct: false,
        feedback: "Urgency language on a capacity-stretched owner tends to backfire. They're telling you they can't take on more right now — adding pressure doesn't help." },
      { text: "What would need to happen for you to feel ready?", correct: false,
        feedback: "Good question but without first addressing the effort concern, this feels like you're asking them to solve your timing problem." },
      { text: "Would it help to get everything set up and just pause it until you're ready to go live?", correct: false,
        feedback: "Setup now, launch later doesn't address the capacity concern — it's still more to do now. Lead with how minimal the effort actually is." },
    ],
  },
  it17: {
    objection: "I've heard from other restaurant owners that Uber Eats drivers are unreliable and late.",
    responses: [
      { text: "I hear that concern — and driver reliability directly affects your reputation so I take it seriously. Can I share the on-time delivery rate for restaurants in your neighborhood? The data is specific to this zip code and it's a fair way to evaluate the actual picture.",
        correct: true, technique: 'Hyperlocal Data',
        feedback: "You took the concern seriously, didn't dismiss it, and offered verifiable local data as the resolution. Hearsay loses to specific neighborhood-level metrics." },
      { text: "Our driver network is large and we have strong reliability scores compared to competitors.", correct: false,
        feedback: "Platform-level stats don't address what their peer told them. Be specific and local." },
      { text: "Driver quality varies but our rating system catches the bad ones quickly.", correct: false,
        feedback: "Admitting variability without a solution sounds like you're confirming the fear. Lead with the data that shows the real picture." },
      { text: "Who told you that — was it someone in this neighborhood specifically?", correct: false,
        feedback: "Interrogating the source of their concern sounds defensive. Accept it as a valid fear and address it with facts." },
    ],
  },

  // ── CHINATOWN (EXTENDED) ────────────────────────────────────────────────────
  ch01: {
    objection: "Our kitchen is already at full capacity during peak hours. We can't take on more orders.",
    responses: [
      { text: "That's smart capacity thinking — and it's fully in your control on our platform. You set a maximum orders-per-hour cap, so Uber Eats only sends what you can handle. It fills in the slower hours without touching your peak.",
        correct: true, technique: 'Capacity Planning',
        feedback: "You directly addressed the operational risk with a concrete feature — the order cap. Showing them they control the volume removes the capacity fear entirely." },
      { text: "Delivery orders often come in during off-peak times, so it might not impact your busiest periods.", correct: false,
        feedback: "'Often' isn't reassuring to a manager who needs certainty. Show them the control mechanism, not an optimistic tendency." },
      { text: "You could hire a dedicated delivery coordinator to manage the extra volume.", correct: false,
        feedback: "Suggesting they hire someone to manage a new channel isn't reducing friction — it's adding it. The platform should solve the problem, not create a staffing need." },
      { text: "What's your current orders-per-hour capacity at peak?", correct: false,
        feedback: "Good data to eventually have, but ask it after showing there's a solution. Otherwise it sounds like you're probing for weaknesses." },
    ],
  },
  ch02: {
    objection: "We're planning to renovate the kitchen next quarter. This really isn't the right time.",
    responses: [
      { text: "Understood — timing matters. That said, six weeks from now when you're live you'd be building your review base and customer pipeline from day one post-renovation. We can set everything up now and you go live the moment you're ready.",
        correct: true, technique: 'Pipeline Value',
        feedback: "You accepted the timing constraint and turned the wait into an opportunity. Setup now, launch later means they hit the ground running after renovation rather than starting from zero." },
      { text: "The setup takes less than a day — you could do it before the renovation starts.", correct: false,
        feedback: "Minimizing the timing concern doesn't make it disappear. They know their own renovation timeline better than you do." },
      { text: "A renovation is actually a perfect reason to start now — new kitchen, fresh launch.", correct: false,
        feedback: "This reframe might land for some, but for a time-pressed manager it can feel like you're not listening. Accept the constraint first." },
      { text: "When is the renovation scheduled to finish?", correct: false,
        feedback: "Good question but ask it as part of building toward the 'set up now, launch later' solution — not as a standalone opener." },
    ],
  },
  ch03: {
    objection: "One of our regular customers complained that an Uber Eats driver was rude to them at pickup. It reflects on us.",
    responses: [
      { text: "That kind of incident is unacceptable — and you can report specific couriers through the platform so they're removed from your pickups. Your restaurant controls who comes through your door.",
        correct: true, technique: 'Partnership Assurance',
        feedback: "You validated the seriousness of the complaint and showed them a concrete accountability mechanism. Giving them control over who picks up from their kitchen is exactly the right response." },
      { text: "Our driver community is large and that kind of behavior is rare — most couriers are professionals.", correct: false,
        feedback: "'It's rare' doesn't fix the one time it happened. Address the incident and show the remedy." },
      { text: "You could put a note on the tablet asking drivers to check in politely.", correct: false,
        feedback: "A sticky note approach doesn't match the professional accountability the restaurant needs. Show them the formal mechanism." },
      { text: "That is frustrating — do you remember when it happened so I can file a report?", correct: false,
        feedback: "Good action, but jumping straight to paperwork misses the business concern. Address their worry about reputation first, then take the action." },
    ],
  },
  ch04: {
    objection: "My kitchen staff don't speak much English. I'm worried they won't be able to use the tablet.",
    responses: [
      { text: "The tablet interface is entirely visual — order cards with item names, quantities, and a single button to accept or mark ready. No language skills needed. I can also show you how to set up simplified labels in your menu.",
        correct: true, technique: 'Partnership Assurance',
        feedback: "You addressed the specific fear with a concrete, accurate description of how the interface actually works. Visual simplicity beats a language guarantee." },
      { text: "Our support team has multilingual agents who can help if there are any issues.", correct: false,
        feedback: "Offloading the language concern to a support line still implies the interface requires language skills. Show them it doesn't." },
      { text: "Most kitchen staff learn it within a shift — it really is that simple.", correct: false,
        feedback: "'Most staff learn quickly' implies a learning curve your staff might struggle with. Be specific about what the interface actually looks like." },
      { text: "We could do a demo specifically with your kitchen team to walk them through it.", correct: false,
        feedback: "Good offer, but lead with the description of the interface first. If it's truly visual, that resolves the concern before needing a demo." },
    ],
  },
  ch05: {
    objection: "My customers come for the atmosphere — the noise, the energy, the dim sum carts. Delivery can't replicate that.",
    responses: [
      { text: "You're right — and it shouldn't try to. Delivery reaches the person who can't make it tonight but wants your dim sum anyway. Your regulars who come for the experience aren't going anywhere. You'd be adding a completely different kind of customer.",
        correct: true, technique: 'Additive Framing',
        feedback: "You validated that delivery can't replace the experience, then showed it doesn't need to. Two different demand profiles, two different channels." },
      { text: "The best restaurants on our platform are known for exactly that kind of lively experience — it actually drives curiosity.", correct: false,
        feedback: "Speculating that delivery drives dine-in curiosity is unverifiable. Stick to the clean separation argument." },
      { text: "Some of your dishes might actually travel really well even without the atmosphere.", correct: false,
        feedback: "The concern isn't about travel quality — it's about the brand. Don't shift to a different objection you haven't been asked about." },
      { text: "What dishes are most associated with the dining-room experience in your mind?", correct: false,
        feedback: "Good discovery eventually, but lead with the additive framing first so the question feels like tailoring rather than probing." },
    ],
  },
  ch06: {
    objection: "Our menu changes every week depending on what's fresh. I can't maintain it on an app.",
    responses: [
      { text: "Menu updates on the platform take about two minutes — you just edit items directly in the app or we can do it for you. A lot of our high-volume partners update weekly. We can also mark items as unavailable in real time if something sells out.",
        correct: true, technique: 'Flexibility Framing',
        feedback: "You matched their specific operational reality (weekly changes) with a specific, easy solution. Two minutes and real-time updates directly removes the maintenance fear." },
      { text: "You could create a core menu of your most consistent items so updates are minimal.", correct: false,
        feedback: "Asking them to limit their own menu around your platform's limitations is the wrong direction. Show the platform can handle their actual needs." },
      { text: "Most restaurants keep a simplified version of their menu for delivery purposes.", correct: false,
        feedback: "'Most restaurants simplify' implies they'd have to compromise. That's not the message for a chef proud of a dynamic menu." },
      { text: "How often do you currently update your in-restaurant menu?", correct: false,
        feedback: "Good context, but you already know the answer — weekly. Lead with the solution to that specific cadence." },
    ],
  },
  ch07: {
    objection: "We already do our own delivery with a hired driver. We don't need your network.",
    responses: [
      { text: "Your driver handles your known customers — but there are people browsing Uber Eats right now who've never heard of Golden Dragon. That's a market your driver can't reach. The two channels don't overlap at all.",
        correct: true, technique: 'Complementary Positioning',
        feedback: "You validated the in-house driver for existing demand and positioned Uber Eats as pure new customer acquisition. The channels serve completely different groups." },
      { text: "Our drivers are more efficient and insured — more professional than a single hired driver.", correct: false,
        feedback: "Comparing your network to their driver is a loyalty and trust battle you'll lose. Complement, don't compete." },
      { text: "What does your driver cost you monthly, fully loaded?", correct: false,
        feedback: "Asking about their driver costs before establishing the value of new customers sounds like you're building a cost argument. That invites defensiveness." },
      { text: "You could phase out your driver once Uber Eats volume covers the gap.", correct: false,
        feedback: "Suggesting they replace a staff member they trust is almost never the right pitch. Lead with addition, not substitution." },
    ],
  },
  ch08: {
    objection: "I've heard Uber Eats takes forever to pay out. We need cash flow within days.",
    responses: [
      { text: "Standard payouts land within 2–5 business days of the order, and we have a daily payout option for an additional fee if cash flow timing is critical. I can show you the exact schedule for your area.",
        correct: true, technique: 'Cash Flow Clarity',
        feedback: "You gave a specific, accurate answer and offered a faster option. Precise timelines beat vague reassurances when cash flow is the concern." },
      { text: "Our payout timeline is competitive with every other major platform.", correct: false,
        feedback: "Competitor comparison doesn't address the specific need. Give them the actual number." },
      { text: "Most restaurants find the payout timing works fine with normal cash flow management.", correct: false,
        feedback: "'Most restaurants' doesn't solve for a business with specific cash flow timing needs. Answer their actual situation." },
      { text: "What's your current cash flow cycle? That would help me figure out what payout schedule fits.", correct: false,
        feedback: "Good context eventually, but lead with the answer first — what the timeline actually is — before asking questions." },
    ],
  },
  ch09: {
    objection: "We have two locations. Coordinating across both sounds like a nightmare.",
    responses: [
      { text: "Multi-location management is built in — you'd manage both stores from one login, with separate menus, hours, and settings for each. Most of our multi-unit partners find it's actually more organized than managing two separate setups.",
        correct: true, technique: 'Scale Framing',
        feedback: "You showed the platform was designed for exactly their situation and preemptively removed the complexity fear. Naming 'multi-unit partners' shows it's a common, solved use case." },
      { text: "You could start with just one location to keep it simple.", correct: false,
        feedback: "Asking them to limit the rollout implies the full version is too complex. Show both locations work, don't tell them to do less." },
      { text: "The two locations would each have their own account — not that different from managing two email inboxes.", correct: false,
        feedback: "Two separate accounts would actually be a pain point, not a solution. Make sure you know the actual architecture before using an analogy." },
      { text: "Which location gets more foot traffic — have you thought about which one to start with?", correct: false,
        feedback: "This question accepts the 'one at a time' framing. Lead with 'both can work together from day one' instead." },
    ],
  },
  ch10: {
    objection: "We're worried delivery customers will leave bad reviews about our food being cold. That's a driver problem, not ours, but we get the blame.",
    responses: [
      { text: "You're right that cold food complaints land on the restaurant even when it's a logistics issue — that's genuinely unfair. We have a policy where delivery-related complaints are flagged as fulfillment issues and handled by us, not reflected in your restaurant rating.",
        correct: true, technique: 'Reputation Protection',
        feedback: "You acknowledged the unfairness before offering the solution. Validating the injustice of the situation earns trust, and then explaining the rating protection removes the specific fear." },
      { text: "Our insulated bags maintain temperature better than competitors — cold food is rare.", correct: false,
        feedback: "Tech solutions don't address the trust issue. The concern is 'what if it happens' — answer that." },
      { text: "You can include a note to customers explaining that temperature can vary with delivery.", correct: false,
        feedback: "Asking customers to lower their expectations is a poor brand move. Show the platform has a structural protection instead." },
      { text: "What's your average delivery radius? Temperature is often a distance issue.", correct: false,
        feedback: "Discovery before protection makes it seem like you're trying to establish whether their fear is valid, not that you're solving it." },
    ],
  },
  ch11: {
    objection: "Honestly, every platform says the same things. I need something real, not a pitch.",
    responses: [
      { text: "Fair. Here's what's actually different: Uber Eats customers come from the ride network — people who open Uber for a car and see your restaurant. They're not the same people browsing DoorDash. That's a verifiably distinct customer segment. Let me show you the overlap data for your area.",
        correct: true, technique: 'Differentiation',
        feedback: "You acknowledged the pitch fatigue honestly and offered one specific, verifiable claim rather than a list of marketing language. One concrete differentiator beats five generic ones." },
      { text: "We consistently rank highly in customer satisfaction surveys and restaurant partner NPS.", correct: false,
        feedback: "Survey rankings are exactly the kind of claim that every platform makes. This confirms the skepticism rather than resolving it." },
      { text: "I understand the skepticism — what would actually be meaningful to you?", correct: false,
        feedback: "Deflecting a direct challenge with a question sounds evasive. Lead with your best differentiator, then invite dialogue." },
      { text: "Let me send you a comparison sheet of platform features side by side.", correct: false,
        feedback: "A feature comparison sheet is the definition of a pitch. They just told you they're tired of pitches." },
    ],
  },
  ch12: {
    objection: "We get a lot of corporate lunch orders by phone. Those customers call us directly and tip well. I don't want to lose that.",
    responses: [
      { text: "Those corporate phone relationships are yours — we'd never touch them. Uber Eats reaches the individual ordering for themselves at home. Your corporate lunch channel is completely separate, and keeping it direct is the right call.",
        correct: true, technique: 'Channel Separation',
        feedback: "You drew a clear boundary between the two channels and validated their direct channel as the right approach for corporates. No overlap, no threat — just expansion." },
      { text: "Corporate orders are typically lower margin than consumer delivery anyway — the app fills a more profitable gap.", correct: false,
        feedback: "You don't know their corporate margins, and challenging them creates friction. Don't make margin claims about their own business." },
      { text: "You could actually list corporate lunch packages on Uber Eats too.", correct: false,
        feedback: "Suggesting they migrate corporate orders to the platform directly contradicts what they value about the channel. Protect what they have first." },
      { text: "How many corporate accounts are you currently managing?", correct: false,
        feedback: "Discovery about corporate relationships before protecting them sounds like you're looking for a foothold. Validate the channel first." },
    ],
  },
  ch13: {
    objection: "I already pay 2.6% for card processing, rent, POS software. Another fee feels like death by a thousand cuts.",
    responses: [
      { text: "That's a real operational reality — and I won't pretend the fee doesn't exist. The difference is that every other cost you named comes out of revenue you'd have anyway. Our fee comes out of revenue you wouldn't see at all. It's a different kind of cost.",
        correct: true, technique: 'Incremental Margin Logic',
        feedback: "You acknowledged the fee fatigue without dismissing it, then drew a sharp distinction: fixed costs eat into existing revenue, delivery fees come from new revenue. That's the key reframe." },
      { text: "Our commission is an industry-standard rate — it's the cost of access to our demand network.", correct: false,
        feedback: "Calling something 'industry standard' doesn't make it feel less like another fee. Address the fatigue, not the norm." },
      { text: "We could look at a customized rate structure for your volume level.", correct: false,
        feedback: "Offering discounts before making the value case sets a bad precedent and signals the standard rate isn't worth it." },
      { text: "What's your overall operating margin right now?", correct: false,
        feedback: "Asking for their financials before making your case feels invasive. Lay out the incremental logic first." },
    ],
  },
  ch14: {
    objection: "My team is great but they don't want to learn another thing. They're already stressed.",
    responses: [
      { text: "I hear you — and the platform is designed so the kitchen doesn't really change what they do. They cook the food. The tablet auto-accepts orders and shows a ticket. There's no new system to learn, just a screen that tells them what to make.",
        correct: true, technique: 'Effort Minimization',
        feedback: "You empathized with the team's stress and then made the new workflow sound as minimal as it actually is. 'A screen that tells them what to make' is exactly the right frame for a stretched kitchen team." },
      { text: "Change is always hard at first — your team will adapt faster than you expect.", correct: false,
        feedback: "Telling a manager their stressed team just needs to adapt is likely to create resistance, not reassurance." },
      { text: "We have a training program that walks kitchen staff through the system in under an hour.", correct: false,
        feedback: "A training program implies effort and time. Lead with how little the kitchen workflow actually changes." },
      { text: "Which part of the workflow are you most concerned about disrupting?", correct: false,
        feedback: "Good question, but only after showing the disruption is close to zero. Without that, you're inviting them to enumerate everything that could go wrong." },
    ],
  },
  ch15: {
    objection: "We're a Sunday dim sum spot. We're slammed one day a week and dead the other six. The math doesn't work for a platform fee.",
    responses: [
      { text: "Sunday volume alone might be worth it — a lot of our high-performing partners do 80% of their revenue in one or two days. But the more interesting opportunity is midweek: delivery can bring in incremental revenue on the days you're currently leaving on the table.",
        correct: true, technique: 'Incremental Revenue',
        feedback: "You validated the Sunday math and then pivoted to the off-day opportunity. Framing quiet weekdays as 'untapped' rather than 'dead' reframes the whole economic picture." },
      { text: "Sunday revenue through the platform could be very significant if you're already packed.", correct: false,
        feedback: "More volume on an already slammed Sunday can create operational chaos. Don't pitch adding to their busiest day without addressing capacity first." },
      { text: "A lot of dim sum restaurants do really well on the platform — it's a popular category.", correct: false,
        feedback: "Category popularity is a generic stat. Address their specific two-day vs. seven-day revenue concern." },
      { text: "What does a typical weekday look like in terms of covers and revenue?", correct: false,
        feedback: "Good data for building the case, but ask it after framing the weekday opportunity — otherwise it sounds like an audit." },
    ],
  },
  ch16: {
    objection: "I've tried everything to grow. Nothing has moved the needle. Why would this be different?",
    responses: [
      { text: "That's a fair challenge and I won't give you a generic answer. What's different here is that the customer doesn't need to find you — they're already on the app looking for food like yours. Every other growth channel requires you to pull demand. Uber Eats puts you in front of demand that already exists.",
        correct: true, technique: 'Differentiation',
        feedback: "You acknowledged the frustration and then gave a structurally distinct answer — passive discovery versus active demand generation. That's a real and meaningful difference from most marketing channels." },
      { text: "Uber Eats reaches a scale that other channels can't match — we have millions of users.", correct: false,
        feedback: "Scale claims are exactly what someone burned by previous growth efforts is tired of hearing. Give them a structural reason, not a size stat." },
      { text: "What have you tried before? I want to understand what hasn't worked.", correct: false,
        feedback: "Audit questions before showing you have something meaningfully different can feel like you're stalling. Lead with the differentiated pitch." },
      { text: "Results vary by restaurant — I'd want to show you specific data for your neighborhood before making any promises.", correct: false,
        feedback: "Hedging immediately after they've said nothing works doesn't inspire confidence. Give them your best case first." },
    ],
  },
  ch17: {
    objection: "We're planning to expand to a third location. I need to focus there, not on a new platform.",
    responses: [
      { text: "A third location is a big move — and honestly, having existing Uber Eats presence on your first two locations before you open the third means you already have a working playbook and an established customer base to replicate. It's actually less risk to set it up now.",
        correct: true, technique: 'Pipeline Value',
        feedback: "You turned their growth focus into a reason to start now rather than a reason to wait. Existing platform experience becomes an asset in the expansion rather than a distraction from it." },
      { text: "Let's focus on the expansion — you can add Uber Eats to the new location when it opens.", correct: false,
        feedback: "Deferring entirely loses the current opportunity and positions delivery as secondary to everything else they're doing." },
      { text: "Uber Eats setup takes minimal time — it doesn't need to compete with your expansion planning.", correct: false,
        feedback: "This is true but doesn't make a positive case. Show how the two things reinforce each other rather than just removing the conflict." },
      { text: "Where is the new location going to be? The market might matter here.", correct: false,
        feedback: "Good context eventually, but ask it as part of building the expansion case, not as your opening response to a focus objection." },
    ],
  },

  // ── MERCADO DISTRICT (EXTENDED) ─────────────────────────────────────────────
  mx01: {
    objection: "Our community doesn't trust big tech companies. If I put my business on your platform, I'll lose customers.",
    responses: [
      { text: "That's a real cultural dynamic and I respect it. A few restaurants in this neighborhood had the same concern — and what they found is that their existing customers stayed completely loyal while Uber Eats brought in new people who'd never found them before. You can see how it works for a month with no long-term commitment.",
        correct: true, technique: 'Social Proof + Low Risk',
        feedback: "You validated the cultural concern without dismissing it, used local social proof, and offered a low-commitment path. Respecting community values before making any business case is essential in trust-based neighborhoods." },
      { text: "A lot of immigrant-owned businesses have found great success on our platform.", correct: false,
        feedback: "Generic demographic references can feel patronizing. Be specific about the neighborhood and the concern." },
      { text: "Uber Eats is very popular in Latino communities nationwide.", correct: false,
        feedback: "National stats don't address a local trust dynamic. Speak to the specific community and their specific concern." },
      { text: "What makes your community skeptical of tech platforms specifically?", correct: false,
        feedback: "Asking them to explain their community's distrust before showing any respect for it can feel invasive. Acknowledge the concern first." },
    ],
  },
  mx02: {
    objection: "We believe in supporting local workers. Gig economy apps exploit drivers — I won't be part of that.",
    responses: [
      { text: "That's a value I respect and I won't argue against it. What I can tell you is that Uber Eats couriers in your area set their own hours, choose their areas, and many do it alongside other work. A number of them are regulars in neighborhoods like this one. But if it conflicts with your values, that's a legitimate reason to pass.",
        correct: true, technique: 'Values Alignment',
        feedback: "You acknowledged the ethical stance, gave honest counterpoints without being defensive, and respected their right to say no. Honesty about a values disagreement builds more trust than a hard sell." },
      { text: "Gig work gives drivers flexibility they prefer over traditional employment.", correct: false,
        feedback: "The gig-vs-employment debate is one you're unlikely to win with someone who's already formed a view. Acknowledge first, then add context." },
      { text: "We're constantly improving driver support and earnings — it's a priority for Uber.", correct: false,
        feedback: "Corporate talking points on gig worker treatment land poorly with someone who already feels negatively about the model. Speak honestly and locally." },
      { text: "Would you feel differently if I could show you the earnings data for drivers in this zip code?", correct: false,
        feedback: "Good idea in principle, but framing it as 'would you feel differently' is leading. Offer the data as context without demanding a mindset change." },
    ],
  },
  mx03: {
    objection: "We've been here 30 years without delivery. We survived everything. Why change now?",
    responses: [
      { text: "Thirty years is a real achievement — and delivery wouldn't change what got you there. It just opens a door for the person who wants your food but can't make it in. Your walk-in business stays exactly as it is.",
        correct: true, technique: 'Additive Framing',
        feedback: "You honored the legacy before introducing change. Thirty years of success is proof their model works — show delivery is an addition to that model, not a challenge to it." },
      { text: "The market is changing — restaurants that don't adapt are seeing declining foot traffic.", correct: false,
        feedback: "Implying a 30-year-old business needs to change or risk decline will create immediate resistance from a proud owner." },
      { text: "Your competitors are joining platforms — there's a first-mover advantage to act now.", correct: false,
        feedback: "Competitive pressure tactics don't resonate with an owner who's already proven they can survive and thrive on their own terms." },
      { text: "What would 'changing' even look like in a way that felt okay to you?", correct: false,
        feedback: "Good discovery, but only after showing that delivery doesn't require them to change anything about what's made them successful." },
    ],
  },
  mx04: {
    objection: "Our dishes are made completely to order. We can't batch or prep in advance like fast food does.",
    responses: [
      { text: "Made-to-order is actually an advantage on delivery — it's why customers choose you over chains. The platform flags each order individually so your kitchen makes it fresh, the same way you always do. No batching required.",
        correct: true, technique: 'Differentiation',
        feedback: "You reframed their process as a selling point rather than an operational obstacle. Made-to-order is a premium differentiator on delivery apps — it's what sets independent restaurants apart from chains." },
      { text: "You can keep a few high-demand items prepped to speed up delivery times.", correct: false,
        feedback: "Suggesting they prep in advance directly contradicts what they just told you about their cooking philosophy. Don't ask them to compromise their process." },
      { text: "What's your average prep time per dish right now?", correct: false,
        feedback: "Prep time is relevant to delivery feasibility, but asking before validating their made-to-order model sounds like you're building a case against them." },
      { text: "Most of our restaurant partners work with a mix of made-to-order and prepped items.", correct: false,
        feedback: "Mentioning that others batch-prepare is irrelevant to their specific kitchen and may feel like you're hinting they should do the same." },
    ],
  },
  mx05: {
    objection: "Our margins are already thin. If a delivery order goes wrong, we eat the cost and can't afford it.",
    responses: [
      { text: "If a courier makes an error — wrong address, damaged order — we absorb the refund, not you. If the kitchen makes an error, that's on us to resolve together, but we don't just pass the full cost back. I can walk you through exactly what the error policy covers.",
        correct: true, technique: 'Risk Reversal',
        feedback: "You addressed the specific financial fear by clarifying who absorbs which costs. With thin margins, the fear isn't the commission — it's the uncontrolled downside. Showing there's a defined policy removes that uncertainty." },
      { text: "Error rates on our platform are very low — most orders go through without any issues.", correct: false,
        feedback: "Error rates don't matter to an owner who can't absorb even a small number of mistakes. Address what happens when errors do occur." },
      { text: "You could increase delivery prices slightly to create a buffer for potential errors.", correct: false,
        feedback: "Passing the cost risk to customers through higher prices isn't how a partner should solve the problem. Show that the platform absorbs it." },
      { text: "What percentage of your dine-in orders currently have issues?", correct: false,
        feedback: "Asking about their error rate before addressing their financial fear sounds like you're building a comparison. Solve the concern first." },
    ],
  },
  mx06: {
    objection: "We are the community. Our prices are kept low so our neighbors can afford to eat here. I'm not interested in attracting upscale customers.",
    responses: [
      { text: "That's a genuine value and I respect it completely. Uber Eats lets you set your own prices — there's no premium pricing requirement. You can list at your normal prices, serve your existing community, and reach the people from other neighborhoods who specifically seek out authentic, affordable Mexican food.",
        correct: true, technique: 'Control Framing',
        feedback: "You validated the community identity completely and showed pricing is entirely in their control. The fear was about platform pressure to upscale — remove that fear explicitly." },
      { text: "Delivery can actually help lower-income customers access your food more conveniently.", correct: false,
        feedback: "Speculating about your customers' economic situation without being asked can come across as presumptuous. Stick to what they control — their own pricing." },
      { text: "Many upscale customers actually love discovering authentic, affordable spots on delivery apps.", correct: false,
        feedback: "Pitching 'upscale customers' to someone who explicitly said they don't want them is a direct mismatch. Listen to what they've told you they value." },
      { text: "What kind of customer profile are you trying to attract on delivery?", correct: false,
        feedback: "Good discovery eventually, but the owner has been clear about their community values. Show you honor those values before asking questions." },
    ],
  },
  mx07: {
    objection: "My daughter's quinceañera catering is our main income. I can't afford any distraction right now.",
    responses: [
      { text: "Family events are your priority and they should be. Our onboarding team handles the full setup in the background — it doesn't touch your catering operations at all. When the quinceañera season settles, you'd have a running delivery channel without any of the setup work left to do.",
        correct: true, technique: 'Effort Minimization',
        feedback: "You acknowledged the life event as the real priority, showed the setup doesn't compete with it, and positioned delivery as something that happens in the background. Respecting what matters most to them opens the door." },
      { text: "The setup is quick — it won't take much from your catering time.", correct: false,
        feedback: "Minimizing something they've clearly said is a priority feels dismissive. Acknowledge the importance before explaining the minimal effort required." },
      { text: "Delivery revenue could actually help fund the event costs.", correct: false,
        feedback: "Connecting business revenue to a personal family event can feel transactional and intrusive. Stay focused on the business case." },
      { text: "When does the quinceañera happen? We could time the launch for right after.", correct: false,
        feedback: "Good intention, but suggesting they delay the launch implies setup requires their active participation during that time. Show it doesn't." },
    ],
  },
  mx08: {
    objection: "I tried Grubhub two years ago and it was a disaster. Wrong orders, no support, and it cost me regulars.",
    responses: [
      { text: "That sounds like a genuinely damaging experience — losing regulars over something you didn't control is the worst outcome. Before I make any promises about being different, can you walk me through what specifically went wrong? I want to address the actual problems, not just tell you we're better.",
        correct: true, technique: 'Empathy + Discovery',
        feedback: "You led with real empathy and resisted the temptation to immediately pitch your platform's superiority. Asking what specifically went wrong shows you're listening — and gives you the information to actually address the real barriers." },
      { text: "Grubhub has very different systems than us — we have much stronger order accuracy and support infrastructure.", correct: false,
        feedback: "Competitor comparisons don't rebuild trust. They need to hear their exact concerns are covered, not that you're generically better." },
      { text: "That was two years ago — the whole industry has improved significantly since then.", correct: false,
        feedback: "Industry-level improvements don't address their specific experience. 'Things are generally better' is exactly the kind of claim that erodes trust after a bad experience." },
      { text: "We have strong customer support and error accountability policies — it's structurally different.", correct: false,
        feedback: "Policy claims without empathy first can feel like a pitch on top of a wound. Acknowledge the damage they experienced before offering any solution." },
    ],
  },
  mx09: {
    objection: "When we're sold out, we close. I can't keep the app updated in real time.",
    responses: [
      { text: "You can pause the restaurant on the app instantly with one tap — it's how most of our busiest partners handle sell-outs. You close in the app the same moment you close in person, and customers stop seeing you as available. No manual menu editing needed.",
        correct: true, technique: 'Operational Flexibility',
        feedback: "You described the exact feature that solves the exact problem. Real-time pause with one tap is a concrete, operational answer to a concrete, operational concern." },
      { text: "You could pre-set limited availability windows so the app turns off automatically.", correct: false,
        feedback: "Pre-set windows imply predictable sell-out times, but the concern is about variable inventory. Match the solution to the actual problem." },
      { text: "Most restaurants build a buffer — they set their app availability to close 30 minutes before they expect to sell out.", correct: false,
        feedback: "Suggesting they guess their sell-out time and buffer for it adds complexity. The real-time pause is simpler and more accurate." },
      { text: "What time do you typically sell out on a busy day?", correct: false,
        feedback: "Good discovery about sell-out patterns is useful, but lead with the one-tap pause solution first so the question feels like optimization, not problem-finding." },
    ],
  },
  mx10: {
    objection: "My son tried delivery for his taquería and failed. He lost money and had to pull out after three months.",
    responses: [
      { text: "That's a serious outcome and I take it seriously. Do you know what specifically went wrong — was it order volume, the fee structure, or something operational? Your son's experience is the most relevant data point here and I want to understand what actually happened before making any pitch.",
        correct: true, technique: 'Empathy + Discovery',
        feedback: "You treated a family failure with real gravity and resisted the urge to explain it away. Understanding what actually happened before responding shows respect for their experience and gives you the information to respond truthfully." },
      { text: "Delivery outcomes vary a lot by neighborhood and concept — what worked in his market might not predict yours.", correct: false,
        feedback: "Suggesting your restaurant will be different without knowing what went wrong is guessing. Find out what failed first." },
      { text: "Three months is sometimes not long enough to build the order volume needed to make delivery profitable.", correct: false,
        feedback: "This may be true but it minimizes a real loss and assumes you know why he failed. Ask before explaining." },
      { text: "I'd love to connect with your son to understand what happened and show him what's changed.", correct: false,
        feedback: "Good instinct eventually, but the immediate response to a family loss should be empathy, not a sales reach-out." },
    ],
  },
  mx11: {
    objection: "We rely entirely on word of mouth. That's built over decades. An app feels like it cheapens that.",
    responses: [
      { text: "Word of mouth is the most powerful marketing there is — and delivery can extend it. Every new customer who discovers you through the app and loves the food is someone who tells their friends, comes back in person, and becomes part of the community. The app is just a new way for people to hear about you.",
        correct: true, technique: 'Complementary Positioning',
        feedback: "You honored the mechanism they believe in — word of mouth — and reframed delivery as an extension of it rather than a replacement. The platform finds the first customer; word of mouth takes over from there." },
      { text: "Apps have replaced word of mouth for most restaurants — it's the way people discover places now.", correct: false,
        feedback: "Telling an owner who has succeeded through word of mouth that it's been replaced is both dismissive and likely untrue for their community." },
      { text: "Many successful restaurants use both — they're not mutually exclusive channels.", correct: false,
        feedback: "Generic compatibility claims don't address the 'cheapens it' concern. Show that app discovery leads to the same kind of customer they value." },
      { text: "What do you think is the main driver of your word-of-mouth referrals?", correct: false,
        feedback: "Good question for understanding their customer dynamic, but ask it after showing you respect and intend to extend what they've built, not replace it." },
    ],
  },
  mx12: {
    objection: "We're a cash-only business. I'm not set up for digital payouts.",
    responses: [
      { text: "The payout comes directly to a bank account, not a card terminal — and if you don't have a business bank account yet, I can walk you through what's needed to set one up. It's a one-time process and then payouts come automatically.",
        correct: true, technique: 'Operational Flexibility',
        feedback: "You addressed the specific operational gap honestly and offered a path to resolve it. Cash-only businesses often don't have business bank accounts — treating this as a solvable setup step rather than a dealbreaker shows practical partnership." },
      { text: "We can work with payment methods that suit your current setup.", correct: false,
        feedback: "Vagueness about payment structure doesn't help. Be specific about what's required and what you can do to support the setup." },
      { text: "Most businesses eventually need digital payment infrastructure anyway — this is a good forcing function.", correct: false,
        feedback: "Telling a cash-only owner this is a 'good forcing function' sounds condescending. Help them get there; don't lecture about why they should." },
      { text: "Are you opposed to digital payments generally, or is it a setup issue?", correct: false,
        feedback: "Good context, but ask it after offering the practical path forward — not as your first question, which can feel like you're probing for the harder objection." },
    ],
  },
  mx13: {
    objection: "Our business is driven by community events — Día de los Muertos, Cinco de Mayo. The rest of the year is quiet.",
    responses: [
      { text: "Those events are where you shine — and delivery can help you capture the overflow. When your dining room is full during the festival and someone can't get a table, they order on the app instead of going somewhere else. It also fills in the quiet months with whatever incremental revenue is there.",
        correct: true, technique: 'Additive Framing',
        feedback: "You showed delivery's value during both peak (overflow capture) and off-peak (incremental fill) periods. That covers the full calendar year and addresses both the busy and quiet concern in one answer." },
      { text: "You should use promotions during off-peak months to drive traffic on the app.", correct: false,
        feedback: "Suggesting discounts for a restaurant that's already quiet during certain periods doesn't address the structural concern. Show incremental value without requiring margin givebacks." },
      { text: "Event-driven restaurants actually do really well on delivery around those dates.", correct: false,
        feedback: "Around those dates, the dining room is already full. The real opportunity is the overflow and the quiet months — lead with that." },
      { text: "Which events bring in the most revenue for you?", correct: false,
        feedback: "Good discovery context, but ask it as part of tailoring the overflow argument — not as your opening question." },
    ],
  },
  mx14: {
    objection: "I don't want our abuela's recipes out there for everyone to copy. It's proprietary.",
    responses: [
      { text: "Your recipes stay completely private — we only see the dish names and prices you choose to list. Nothing about how something is made is ever shared with us or visible to anyone. Plenty of our partners keep their recipes as closely guarded as you do.",
        correct: true, technique: 'Control Framing',
        feedback: "You addressed a deeply personal fear — intellectual property of a family legacy — with a direct and honest statement about what the platform can and can't see. This is a genuine concern that deserves a genuine answer." },
      { text: "Recipe theft is actually a concern for any public-facing restaurant — delivery doesn't change that risk.", correct: false,
        feedback: "Normalizing the risk doesn't resolve the concern. Address what you actually do and don't have access to." },
      { text: "You could use generic dish names on the app to protect specific recipes.", correct: false,
        feedback: "Suggesting they obscure their menu to protect IP implies there's a real risk from the platform. Clarify what's actually visible first." },
      { text: "What specifically are you worried about people copying — the flavor profile or the presentation?", correct: false,
        feedback: "This question implies the concern is rational and specific when it's emotional and deeply personal. Acknowledge the emotional dimension before asking analytical questions." },
    ],
  },
  mx15: {
    objection: "We already have a Facebook page with 4,000 followers. That's our delivery channel — we DM orders.",
    responses: [
      { text: "That's a genuinely creative setup — and those 4,000 followers chose to follow you, so they're valuable. Uber Eats reaches the person who doesn't follow you yet, who's searching for Mexican food nearby right now without knowing you exist. It's a different kind of customer discovery.",
        correct: true, technique: 'Channel Separation',
        feedback: "You validated their existing channel as genuinely valuable before showing the gap it can't fill. Followers are warm audiences; Uber Eats is cold acquisition. Those are different and complementary." },
      { text: "Facebook reach has been declining significantly — a delivery platform is more reliable.", correct: false,
        feedback: "Undermining a channel that's clearly working for them creates resistance. Never attack what they've built." },
      { text: "DM ordering doesn't scale well — you'd hit a ceiling on that approach quickly.", correct: false,
        feedback: "Pointing out ceiling limits before understanding their growth goals is presumptuous. They may not want to scale. Understand first." },
      { text: "How do you handle payments on the DM orders — is it cash on delivery?", correct: false,
        feedback: "Good operational curiosity, but ask it after validating their setup. Leading with operational questions sounds like you're auditing their process." },
    ],
  },
  mx16: {
    objection: "We have great Google reviews. Our average is 4.9. We don't need another review platform judging us.",
    responses: [
      { text: "A 4.9 is genuinely rare and you've earned it. On Uber Eats, that reputation follows you — customers see that you're consistently excellent, and new customers who discover you through the app become part of the audience that supports it.",
        correct: true, technique: 'Social Proof Leverage',
        feedback: "You turned their existing reputation into a reason to join rather than a reason not to. A 4.9 is a competitive advantage on a discovery platform — it makes joining an amplifier of what they've built, not a risk to it." },
      { text: "Uber Eats reviews are separate from Google — they wouldn't affect your Google rating.", correct: false,
        feedback: "Separation of review systems doesn't address the concern. They worry about being judged badly — show why they'll be judged well." },
      { text: "With that rating, you'd likely perform very well on delivery — great food reviews there too.", correct: false,
        feedback: "Optimistic speculation isn't as powerful as showing their existing reputation actively works in their favor on the platform." },
      { text: "What would a bad review on the delivery platform need to do for you to feel it wasn't worth the risk?", correct: false,
        feedback: "This question accepts the downside framing. Lead with the upside of their strong reputation, then offer to discuss risk mitigation if they bring it up." },
    ],
  },
  mx17: {
    objection: "Honestly, we're just surviving month to month. I can't take on any new financial risk right now.",
    responses: [
      { text: "Surviving month to month is real pressure, and I won't minimize it. There's no upfront cost to join — you'd only ever pay a fee on orders that actually come in. If delivery brings in revenue, the fee comes from that revenue. If it doesn't bring orders, you pay nothing.",
        correct: true, technique: 'Risk Reversal',
        feedback: "You acknowledged the financial reality directly and then clarified that the risk profile is actually minimal — commission-only means no orders, no cost. This directly addresses the fear of adding another financial burden." },
      { text: "Delivery revenue could be exactly what helps you get past the month-to-month grind.", correct: false,
        feedback: "Optimistic framing without addressing the risk first feels tone-deaf to someone in survival mode. Acknowledge the constraint before introducing the opportunity." },
      { text: "We can help you set up promotions to drive volume quickly if you need cash flow fast.", correct: false,
        feedback: "Suggesting discounts to a cash-strapped restaurant trades margin for speed — and they don't have margin to spare. Remove the downside risk first." },
      { text: "What does a typical month look like — is it a revenue or margin issue?", correct: false,
        feedback: "Asking them to explain their financial struggles before showing there's no cost risk sounds like you're building a case rather than helping them." },
    ],
  },

  mx18: {
    objection: "Delivery will make our authentic Mexican food look like Taco Bell to people who've never tried us.",
    responses: [
      { text: "That's a real brand protection concern — and it's exactly why your listing controls matter. Your photos, your descriptions, your story are all yours to set. The platform surfaces your food; it doesn't define it. Customers who discover you through Uber Eats will see exactly what you put forward — not a generic taco brand.", correct: true, technique: 'Premium Positioning',
        feedback: "You validated the authenticity concern and immediately showed how the owner controls their own brand presentation. Authenticity fears are about loss of narrative control — put that control back in their hands." },
      { text: "Customers on Uber Eats are looking for good food — they can tell the difference between authentic and fast food.", correct: false,
        feedback: "Telling someone their customers will figure it out doesn't address the brand control concern. Show them how to manage the presentation actively." },
      { text: "Most Mexican restaurants on our platform actually see their average order value go up because customers read descriptions carefully.", correct: false,
        feedback: "Average order value data is interesting but doesn't address the identity concern they raised. Start with brand control before moving to revenue metrics." },
      { text: "What's the one thing about your restaurant you most want new customers to understand?", correct: false,
        feedback: "Good discovery — but ask it after you've shown them the listing tools they'd use to communicate that thing. Discovery without a follow-through plan feels like stalling." },
    ],
  },
  mx19: {
    objection: "Our regulars come in person. The people who use delivery apps don't know us and probably won't become loyal.",
    responses: [
      { text: "Your in-person regulars are your foundation — Uber Eats doesn't touch that. What it opens is a second population: people who live or work within two miles and have never walked in. Some won't return. But the ones who love it become regulars too — they just find you a different way. Your food converts them the same way it converted everyone in your dining room.", correct: true, technique: 'Channel Separation',
        feedback: "You separated the existing customer base (untouched) from the new acquisition channel (additive). Loyal customers aren't lost to delivery — they're supplemented by a new discovery path." },
      { text: "Delivery customers can absolutely become regulars — many of our top partners see strong repeat rates.", correct: false,
        feedback: "'Many partners' is vague. Connect the logic specifically: a customer who orders delivery twice and loves it often transitions to dine-in. Make that behavior pattern explicit." },
      { text: "Your walk-in business and delivery would serve different occasions — lunch delivery, dinner dine-in.", correct: false,
        feedback: "Occasion segmentation is useful eventually, but the objection is about loyalty. Address whether delivery customers can become loyal before introducing occasion logic." },
      { text: "How many of your current regulars originally found you through a recommendation versus walking by?", correct: false,
        feedback: "Interesting discovery, but it doesn't directly address the loyalty concern. Show first that delivery can be a loyalty path, then explore discovery channels." },
    ],
  },
  mx20: {
    objection: "Our guacamole and salsas separate and go brown on delivery. We'd be sending out inferior food.",
    responses: [
      { text: "Packaging is solvable — and many Mexican restaurants have cracked it. We can connect you with partners who use sealed containers with a separate sauce system so guac arrives as-made. It's worth a trial run to see if your specific dishes hold. Would you be open to testing one item before deciding?", correct: true, technique: 'Risk Reversal',
        feedback: "You acknowledged the real technical concern, offered a concrete solution path, and proposed a low-risk trial. Packaging objections need a tangible answer, not reassurance." },
      { text: "Customers understand that delivery food looks slightly different — they don't expect restaurant-perfect presentation.", correct: false,
        feedback: "Lowering the quality bar is the wrong move for a restaurant proud of their product. Solve the packaging problem instead of dismissing the standard." },
      { text: "We have insulated bags that help maintain temperature and freshness during delivery.", correct: false,
        feedback: "Temperature bags help but don't solve oxidation of guacamole. If you're going to address the technical objection, get specific about the actual mechanism." },
      { text: "What percentage of your menu items do you think would travel well without modification?", correct: false,
        feedback: "Good discovery for building a starter menu — but only after showing you have solutions for the items that don't travel perfectly. Lead with the solution." },
    ],
  },
  mx21: {
    objection: "Our bar is bigger than our kitchen. Margaritas are half our revenue. Delivery can't capture that.",
    responses: [
      { text: "You're right that delivery doesn't capture bar revenue — that's your in-house strength and delivery doesn't compete with it. What it does is fill your kitchen's unused capacity during off-peak hours and expose your food to people who may then come in for the full experience. The bar and the app serve different moments without stepping on each other.", correct: true, technique: 'Channel Separation',
        feedback: "You honestly acknowledged what delivery can't do, then showed what it can — kitchen utilization and new customer acquisition that feeds back into in-person bar visits. Honesty about limitations builds trust." },
      { text: "We actually do have alcohol delivery in many markets, depending on your location and licensing.", correct: false,
        feedback: "Pivoting to alcohol delivery might be possible but changes the conversation dramatically. Acknowledge the bar-centric model first and show how food delivery is additive without touching bar revenue." },
      { text: "Many bar-forward restaurants use delivery to drive awareness that converts to dine-in visits.", correct: false,
        feedback: "This is the right idea but stated too generically. Explain the specific mechanism: someone orders tacos, loves them, comes in to experience the full bar atmosphere they've heard about." },
      { text: "What hours are your kitchen busiest versus your bar?", correct: false,
        feedback: "Useful discovery for eventually making the kitchen utilization case — but answer the bar revenue concern first before shifting into operational discovery." },
    ],
  },
  mx22: {
    objection: "We're a taqueria. Margins are already 8%. Platform fees would put us in the red on delivery.",
    responses: [
      { text: "Eight percent is tight — I won't pretend otherwise. The honest math is: delivery works best when it drives incremental volume on items with better margins than your baseline, or when it fills idle kitchen time that currently earns zero. Can I pull your category's average order size for this zip code? If the numbers don't work, I'll tell you that too.", correct: true, technique: 'Hyperlocal Data',
        feedback: "Acknowledging the margin reality shows respect. Offering to run the actual numbers — and being willing to say it doesn't work — is the kind of honesty that builds a long-term relationship even if not an immediate sale." },
      { text: "There are ways to adjust your menu pricing on the platform to protect margins without changing your in-house prices.", correct: false,
        feedback: "True, but leading with 'adjust your pricing' to a margin-conscious taqueria owner sounds like 'charge customers more.' Acknowledge the math first, then discuss levers." },
      { text: "Many taquerias find that delivery order sizes are larger than walk-in averages, which helps unit economics.", correct: false,
        feedback: "Possible but unverified for their specific location and menu. Don't use averages to wave away a specific margin concern — offer to find their specific numbers." },
      { text: "What's your current average check size per customer?", correct: false,
        feedback: "Right instinct for building the math case, but ask it as part of running the actual analysis — 'let me pull the data; what's your average check so I can model it accurately?' — not as a standalone question." },
    ],
  },
  mx23: {
    objection: "We do catering for quinceañeras and weddings. That's our real business. Delivery is a distraction.",
    responses: [
      { text: "Catering is a great anchor business — delivery doesn't compete with that at all. What it does is keep your brand visible on days you're not catering, so when someone attends one of your events and wants to order again, they can find you. Platform presence supports your catering sales by keeping the brand top of mind in between events.", correct: true, technique: 'Pipeline Value',
        feedback: "You positioned delivery as supporting the catering business rather than competing with it. Event-driven restaurants need visibility between events — the platform provides that without demanding kitchen attention on catering days." },
      { text: "Delivery could be a good weekday revenue source when you're not catering on weekends.", correct: false,
        feedback: "Correct in theory but framed as adding work to someone who doesn't want more work. Show how it supports the catering brand first, then discuss operational timing." },
      { text: "Many event caterers use delivery as a lead-generation tool — guests discover the food and become catering clients.", correct: false,
        feedback: "Interesting angle but speculative without data. The more grounded case is brand continuity between events, not a direct catering lead funnel." },
      { text: "What's your catering booking cadence — are you fully booked through the next few months?", correct: false,
        feedback: "Discovery, but don't lead with questions about capacity to someone who has just told you they're not interested in more volume. Show the strategic fit for catering first." },
    ],
  },
  mx24: {
    objection: "We've been here 35 years. Word-of-mouth fills our tables. We don't need more marketing.",
    responses: [
      { text: "Thirty-five years of word-of-mouth is rare and earned — and the customers who built that loyalty are probably still with you. The gap Uber Eats closes is the next generation: the 28-year-old who just moved to the neighborhood and searches for Mexican food on their phone before asking anyone. Your reputation does the converting — you just need a way to get discovered first.", correct: true, technique: 'Generational Bridge',
        feedback: "You honored the existing success and identified the one thing word-of-mouth can't do: reach people who haven't yet entered that word-of-mouth network. Framing it as generational reach is respectful of their history." },
      { text: "Word-of-mouth is powerful, but digital discovery is now how most new customers find restaurants.", correct: false,
        feedback: "Telling a 35-year success story that their method is outdated is likely to create defensiveness. Honor the method and show what it can't yet reach." },
      { text: "Even long-established restaurants on our platform see a meaningful lift from new-to-brand customers.", correct: false,
        feedback: "Generic 'lift' data won't move someone who already fills tables. Speak to the specific gap: the new resident or transplant who can't access the word-of-mouth network yet." },
      { text: "What's your current split between regulars and first-time customers?", correct: false,
        feedback: "Good eventual discovery, but asking how dependent they are on regulars right after they've told you they're successful can sound skeptical. Validate first, then explore." },
    ],
  },
  mx25: {
    objection: "I just hired a social media manager. We're building our own online presence. I don't need a platform.",
    responses: [
      { text: "Social media and Uber Eats solve different problems. Social builds your story and drives followers to seek you out. Uber Eats captures people with intent — they're hungry, searching for Mexican food near them right now. Your social manager can drive people to your profile; the platform converts people who are already ready to order. Both are necessary for different moments.", correct: true, technique: 'Channel Separation',
        feedback: "You distinguished intent-driven search (Uber Eats) from brand-building content (social media) clearly. Someone mid-scroll on Instagram and someone searching 'Mexican food near me at 7pm' are different customers requiring different tools." },
      { text: "Social media drives awareness, but it doesn't have a direct checkout. Delivery platforms close the loop.", correct: false,
        feedback: "True, but sounds like you're diminishing their new hire's value. Frame it as the two tools being complementary, not sequential." },
      { text: "Having a strong social presence actually improves your delivery performance — customers check Instagram before ordering.", correct: false,
        feedback: "Interesting, but you've shifted the conversation away from their concern. Address the 'I already have an online presence' objection before making a case for how the two work together." },
      { text: "What platforms is your social manager focusing on — Instagram, TikTok?", correct: false,
        feedback: "This leads you away from closing. Acknowledge the social investment, draw the distinction, then stay focused on the delivery-specific value." },
    ],
  },
  mx26: {
    objection: "We cook everything fresh to order. Adding delivery would create a backlog that ruins the dine-in experience.",
    responses: [
      { text: "Kitchen capacity is a real constraint — and the solution most partners use is a time-block approach: delivery orders are only accepted during slower windows, like mid-afternoon or early dinner, so rush service stays protected. You don't have to be available all day. Want to look at what your slow periods look like and see if delivery is viable there?", correct: true, technique: 'Incremental Logic',
        feedback: "You validated the capacity concern and immediately offered a structural solution — limited availability windows — that puts the owner in control of when delivery impacts the kitchen. Showing that 'all or nothing' is a false choice is key." },
      { text: "Our platform lets you pause delivery orders any time — so you can turn it off during your rush.", correct: false,
        feedback: "Pause functionality is real but reactive. The owner wants proactive control, not an emergency off switch. Show scheduling control upfront." },
      { text: "Delivery orders typically have longer lead times built in — customers accept 30–45 minute windows.", correct: false,
        feedback: "Lead time doesn't solve kitchen congestion if orders pile up simultaneously with dine-in. The structural solution is availability windows, not relying on customer patience." },
      { text: "What does your current order volume look like across different times of day?", correct: false,
        feedback: "This is the right discovery to eventually show the available capacity window — but ask it as part of proposing the time-block solution, not as an opener that sounds like you're auditing their schedule." },
    ],
  },
  mx27: {
    objection: "Our portions are enormous — the containers we'd need would cost more than the food.",
    responses: [
      { text: "Packaging cost is real and worth modeling. Many partners with large portions solve this by creating a 'delivery menu' — a curated selection of your most popular items, portioned or formatted for delivery economics. It doesn't replace your full menu; it's a delivery-optimized version that keeps costs in check while representing your food well. Want to work through which items would make the most sense?", correct: true, technique: 'Incremental Logic',
        feedback: "You acknowledged the real cost concern and offered a practical solution: a curated delivery menu rather than forcing the entire in-house menu online. Empowering the owner to optimize the menu is more actionable than dismissing the cost concern." },
      { text: "Packaging suppliers we recommend have options for large-format containers at competitive prices.", correct: false,
        feedback: "Supplier referrals might help marginally but don't address the core economics. The better solution is a delivery-specific menu that sidesteps the cost problem entirely." },
      { text: "Customers generally expect slightly smaller portions on delivery — it's an accepted norm.", correct: false,
        feedback: "Suggesting they shrink portions to an owner proud of their generous servings is likely to land as an attack on their identity. Solve the economics another way." },
      { text: "Have you priced out delivery-specific packaging recently?", correct: false,
        feedback: "This shifts work back to them rather than offering a clear path. Come with a solution — the curated menu approach — rather than a research question." },
    ],
  },
  mx28: {
    objection: "There are 12 other Mexican restaurants in this neighborhood. I'd just be fighting for the same customers on your app.",
    responses: [
      { text: "Twelve Mexican restaurants means there's clearly strong demand for Mexican food in your area — and Uber Eats shows all of them to a customer searching right now. Your competitive advantage is your differentiation: if someone filters by 'authentic' or reads your story and your reviews, that's your customer. The platform doesn't flatten competition — it lets you compete on what makes you different.", correct: true, technique: 'Reframing',
        feedback: "You reframed the competition objection: high density of the same cuisine means high demand, not just high competition. The platform is a stage where differentiation wins — and that's a conversation about their unique value, not a race to the bottom." },
      { text: "Your ratings and reviews would set you apart from competitors quickly if your food is as good as you say.", correct: false,
        feedback: "'If your food is as good as you say' introduces doubt. Remove the conditional. The owner knows their food is good — affirm that and show how the platform surfaces that quality." },
      { text: "We have tools to help you stand out — promotional placement, photography support, and featured listings.", correct: false,
        feedback: "Jumping to promotional tools before addressing the competitive concern makes it sound like you're selling advertising. Address the differentiation logic first." },
      { text: "What do you think customers choose you over the other Mexican restaurants for?", correct: false,
        feedback: "Great discovery — but lead with the reframe first. Show that competition means demand, then ask what their competitive edge is so you can connect it to how the platform would surface that edge." },
    ],
  },
  mx29: {
    objection: "My cousin delivers for us on weekends. Why would I pay platform fees when I already have delivery?",
    responses: [
      { text: "Your cousin covers the customers who already know to call you — that's your existing audience. Uber Eats puts you in front of people searching for delivery who don't know you exist yet. You'd be adding a new customer acquisition channel, not replacing what your cousin does. The platform fee is essentially a marketing cost for reaching people outside your current network.", correct: true, technique: 'Channel Separation',
        feedback: "You cleanly separated the two delivery modes by audience: existing customers use the family channel; new customers discover you through the platform. The fee reframed as customer acquisition cost makes it a marketing expense, not a logistics fee." },
      { text: "A professional delivery platform offers more reliability and coverage than a single driver.", correct: false,
        feedback: "Comparing unfavorably to the owner's cousin — a family member — is likely to land poorly. Focus on what the platform adds (new customer reach) rather than what the cousin lacks." },
      { text: "You could keep your cousin for regular customers and use the platform for new customer acquisition.", correct: false,
        feedback: "This is the right answer but stated too briefly. Develop the channel separation logic — explain why the audiences are different so the owner understands the value clearly." },
      { text: "What's the typical delivery radius your cousin covers?", correct: false,
        feedback: "Discovery about radius might set up a reach comparison — but ask it after making the new-customer-acquisition case. Leading with a question about the cousin's limitations sounds like criticism." },
    ],
  },
  mx30: {
    objection: "We specialize in tamales. They take 4 hours to make. We can't produce more on demand.",
    responses: [
      { text: "Tamales are actually perfect for delivery pre-orders — customers schedule pickup or delivery time in advance, you batch production as you normally would, and the platform handles the order intake. You're not producing on demand; you're taking orders for a scheduled production run. That model works well for specialty items. Would that framing change the feasibility for you?", correct: true, technique: 'Reframing',
        feedback: "You reframed the production constraint from a delivery barrier into a feature: pre-orders match the way tamale production already works. This shows you understand their operational model and have a specific solution." },
      { text: "You could list tamales as a limited daily item — available until sold out.", correct: false,
        feedback: "Sold-out mechanics are a real option, but present them as part of the pre-order solution rather than as the first idea. It sounds better to frame it as 'scheduled production' than 'race to order before they're gone.'" },
      { text: "Specialty items like tamales often command premium pricing that offsets production constraints.", correct: false,
        feedback: "Pricing is secondary to the production concern. Solve the production scheduling problem first before discussing price." },
      { text: "How many tamales do you typically produce per day or week?", correct: false,
        feedback: "Good discovery for sizing the opportunity, but ask it after framing the pre-order model. Otherwise it sounds like you're assessing supply before understanding whether the model works for them." },
    ],
  },
  mx31: {
    objection: "We're cash-only by preference. We don't like digital transactions tracking our revenue.",
    responses: [
      { text: "That's a business preference I can respect. What I can share is that all platform transactions are standard payment processing — the same as a credit card terminal — and your payout is a clean deposit. If digital payment isn't something you want to expand right now, I understand. But if it ever changes, the platform is ready. Can I leave you with the documentation so you have it for later?", correct: true, technique: 'Long-game Respect',
        feedback: "You acknowledged a sensitive business preference without pressing. Leaving the door open respectfully builds trust. Don't push someone past a principled position — acknowledge it and keep the relationship." },
      { text: "Many restaurants find that digital payments actually improve their bookkeeping and tax preparation.", correct: false,
        feedback: "Suggesting digital transactions improve tax clarity to someone who has expressed discomfort with revenue tracking is tone-deaf. This response could feel threatening rather than helpful." },
      { text: "We process millions of transactions securely — your data is protected by industry-standard encryption.", correct: false,
        feedback: "Their concern isn't about security — it's about privacy and control. Don't answer a different objection than the one raised." },
      { text: "Is there a specific concern about digital payments I could address for you?", correct: false,
        feedback: "Probing a sensitive and likely principled position makes the owner feel interrogated. Acknowledge the preference with respect and leave the door open gracefully." },
    ],
  },
  mx32: {
    objection: "We're already on DoorDash. Adding another platform just creates confusion and more tablets.",
    responses: [
      { text: "That's a fair operational concern. What most multi-platform partners do is use a tablet consolidation tool that shows all orders in one place — so you're not managing two screens. And on the revenue side, Uber Eats and DoorDash draw different user populations, so you're expanding reach, not duplicating it. Would it be worth seeing the consolidation options before deciding?", correct: true, technique: 'Incremental Logic',
        feedback: "You addressed the tablet/operations concern with a concrete solution (consolidation tools), then addressed the audience overlap concern with the differentiated-user-base argument. Both barriers removed." },
      { text: "Many restaurants manage both platforms successfully — it becomes routine quickly.", correct: false,
        feedback: "'It becomes routine' is dismissive of a real operational concern. Show the concrete consolidation solution rather than suggesting they'll adapt." },
      { text: "Uber Eats has a larger user base than DoorDash in most markets, so the incremental reach is significant.", correct: false,
        feedback: "Market share data is interesting but doesn't solve the 'more tablets' problem they actually raised. Address operations first." },
      { text: "What's your current average daily order volume on DoorDash?", correct: false,
        feedback: "Good data for the incremental revenue case, but only ask it after addressing the operational concern. Otherwise it sounds like you're sizing the opportunity rather than solving their problem." },
    ],
  },
  mx33: {
    objection: "Most of our customers are Spanish-speaking. The app experience may not feel right for our community.",
    responses: [
      { text: "Uber Eats is fully localized in Spanish — the app, the search, the ordering experience. And your listing itself can be written in Spanish with Spanish dish names and descriptions. For a community that primarily shops in Spanish, that's actually a strong match. Want to see what a Spanish-language listing for your restaurant would look like?", correct: true, technique: 'Hyperlocal Data',
        feedback: "You directly addressed the language/cultural fit concern with a concrete, specific answer: the app is Spanish-language. Offering to show what their own listing would look like makes it tangible and removes the abstract concern." },
      { text: "Our platform serves diverse communities — Spanish speakers are a large and growing part of our user base.", correct: false,
        feedback: "Demographics are useful but abstract. Show the Spanish-language experience concretely rather than citing growth statistics." },
      { text: "Younger Spanish-speaking customers are often the most active delivery app users.", correct: false,
        feedback: "Generational segmentation might be accurate but it bypasses the owner's concern about their specific community. Show the language solution directly." },
      { text: "Would it help to see examples of other Mexican restaurants in your area that are on the platform?", correct: false,
        feedback: "Peer examples are good for social proof but don't address the Spanish-language concern. Answer the specific question first." },
    ],
  },
  mx34: {
    objection: "We have a full liquor license. Delivery would complicate our alcohol compliance.",
    responses: [
      { text: "Alcohol delivery is entirely optional — you don't have to offer it. Most restaurant partners on the platform deliver food only and keep their bar revenue in-house, which is often the stronger margin anyway. Your liquor license stays unaffected by a food-only delivery setup. Would you want to start with the food menu and revisit alcohol later if your state allows it?", correct: true, technique: 'Incremental Logic',
        feedback: "You separated the two concerns: food delivery doesn't implicate the liquor license. Offering to start food-only and revisit alcohol removes the compliance risk while still creating value." },
      { text: "We do offer alcohol delivery in markets where it's legally permitted, with full compliance support.", correct: false,
        feedback: "Jumping to alcohol delivery features when the owner's concern is compliance risk sounds like you're adding complexity. Food-only delivery is the cleaner, simpler starting point." },
      { text: "Your existing compliance process likely covers delivery — it's the same license.", correct: false,
        feedback: "Offering informal legal reassurance to someone with a genuine compliance concern is risky. Don't speculate on license applicability — offer the simpler food-only path instead." },
      { text: "What specific compliance concerns do you have about alcohol delivery in your state?", correct: false,
        feedback: "This opens a complex legal discussion you may not be able to resolve. Redirect to the simple solution: start food-only, keep bar revenue in-house, eliminate the compliance question entirely." },
    ],
  },
  mx35: {
    objection: "Our handmade tortillas are central to the experience. They go soft and lose texture in 20 minutes.",
    responses: [
      { text: "Tortilla texture is a real quality concern for delivery. The way most partners handle this is to send them wrapped separately — customers get the tortillas on the side and assemble at home. It's actually a selling point you can use: 'our tortillas arrive separate so they're always fresh.' That's not a workaround — it's the authentic way to eat them.", correct: true, technique: 'Reframing',
        feedback: "You converted the quality concern into a differentiator: separate tortillas become a freshness feature, not a packaging compromise. That's a genuine reframe — it's also true that this is how traditional tortillas are best served." },
      { text: "We have insulated packaging specifically designed to maintain tortilla quality during delivery.", correct: false,
        feedback: "Insulation helps with temperature but not texture degradation from steam. If you're going to address the technical concern, be accurate about what the solution actually solves." },
      { text: "Customers are generally forgiving of slight texture differences in delivery — they understand the context.", correct: false,
        feedback: "For a restaurant that makes handmade tortillas as their signature, lowering the quality bar is the wrong message. Find a solution that preserves their standard." },
      { text: "What's your typical prep-to-table time for tortillas in the restaurant?", correct: false,
        feedback: "Useful context, but don't lead with a question that makes the quality concern feel more acute. Present the separate-packaging solution first, then ask questions to refine the approach." },
    ],
  },
  mx36: {
    objection: "We already have online ordering on our website. Why do I need Uber Eats on top of that?",
    responses: [
      { text: "Your website ordering captures people who already know you — they searched your name, found your site, and chose to order. Uber Eats captures people who are searching 'Mexican food near me' and have never heard of you. They're different populations with different intent. Your site serves your existing audience; the platform builds the new one.", correct: true, technique: 'Channel Separation',
        feedback: "The owned-channel vs discovery-channel distinction is the cleanest answer here. Your website is a conversion tool for known customers; Uber Eats is a discovery tool for new ones. Both are necessary and non-competing." },
      { text: "Uber Eats has a much larger customer base than most restaurant websites — the reach difference is significant.", correct: false,
        feedback: "Traffic comparisons sound like you're diminishing their website investment. Focus on the audience type difference, not the size difference." },
      { text: "Having multiple ordering channels is good for redundancy — if your website is down, customers can still order.", correct: false,
        feedback: "Redundancy is a weak reason to add a platform with commission fees. The discovery-channel argument is much stronger." },
      { text: "How much traffic does your website's ordering system receive per month?", correct: false,
        feedback: "Asking about their existing traffic can feel like you're building an argument against their current system. Make the channel separation case first, then data questions support it." },
    ],
  },
  mx37: {
    objection: "We only seat 15 people. We're not built to handle high delivery volume.",
    responses: [
      { text: "A small dining room doesn't limit your delivery potential — your kitchen capacity does. If your kitchen can produce 20 covers an hour at peak, delivery orders fill that same capacity during off-peak hours when the dining room isn't full. You'd be running the kitchen at higher utilization without adding a single seat. What do your slow periods look like?", correct: true, technique: 'Incremental Logic',
        feedback: "You reframed the constraint: seating capacity is irrelevant to delivery; kitchen capacity is what matters. Off-peak kitchen utilization is often the strongest economic argument for small restaurants." },
      { text: "Small restaurants often do proportionally very well on delivery because customers associate them with character and authenticity.", correct: false,
        feedback: "Character and authenticity are soft benefits. The owner raised a capacity concern — answer with a capacity-based argument about kitchen utilization, not a brand story." },
      { text: "You can set a maximum daily delivery order cap to keep volume manageable.", correct: false,
        feedback: "An order cap is a protective mechanism, not a business case. Show why delivery creates value first, then mention controls as a way to stay in their comfort zone." },
      { text: "What's your average order count per day right now?", correct: false,
        feedback: "Good eventual discovery — but answer the capacity concern before asking about current volume, or it sounds like you're assessing whether they're already overwhelmed." },
    ],
  },
  mx38: {
    objection: "We sell birria by the pound and in large batches. Our menu doesn't translate to a per-item ordering format.",
    responses: [
      { text: "Pound-based and batch items actually work well on the platform as configurable items — 1 lb, 2 lb, family pack. Plenty of partners sell by weight or batch format using quantity selectors and portion sizes. It takes a bit of menu setup but it's a solved problem. Want me to show you a few examples of how similar menus are structured?", correct: true, technique: 'Social Proof',
        feedback: "You showed that the technical menu format concern is solved, not theoretical. Offering to show real examples makes it concrete and credible rather than a promise." },
      { text: "You could convert your pound pricing to a per-portion equivalent for the platform.", correct: false,
        feedback: "Converting to per-portion prices may not reflect how they actually cook and sell. Show the weight-based ordering options that exist rather than asking them to change their pricing model." },
      { text: "Many customers are actually more comfortable ordering by item than by weight for online ordering.", correct: false,
        feedback: "This implies their format is a customer problem rather than a technical platform question. Don't reframe their business model as the issue — show the format solution." },
      { text: "What are your most popular items and typical order sizes?", correct: false,
        feedback: "Good discovery for menu building, but answer the format concern first. Otherwise it sounds like setup work before they've agreed the format can work." },
    ],
  },
  mx39: {
    objection: "Winter kills our traffic 60%. Delivery won't fix our seasonality — the demand isn't there.",
    responses: [
      { text: "Delivery actually runs counter-seasonal to dining-out traffic — bad weather drives more delivery orders, not fewer. The same winter that keeps customers home from your restaurant is what makes them reach for the app instead. Your slow months could become a stable secondary revenue stream specifically because delivery spikes when dine-in drops.", correct: true, technique: 'Reframing',
        feedback: "You flipped the seasonality concern on its head: winter is bad for walk-in traffic but good for delivery. This is a real behavioral pattern — delivery order volume increases in poor weather. The reframe is both surprising and accurate." },
      { text: "Our platform's data shows consistent year-round order volume in most markets.", correct: false,
        feedback: "Generic platform data doesn't address their specific market concern. Make the weather-driven delivery argument specific to their situation." },
      { text: "You could run seasonal promotions on the platform to counteract the winter slowdown.", correct: false,
        feedback: "Promotions are a tactic that comes after showing the channel has merit. Address the seasonality logic first." },
      { text: "What's your typical revenue split between summer and winter months?", correct: false,
        feedback: "You already know the answer (60% drop). Don't ask questions to facts they've already given you — use that data to build the counter-seasonal delivery case." },
    ],
  },
  mx40: {
    objection: "I tried a delivery platform once. The driver ate some of my food. I'll never do it again.",
    responses: [
      { text: "That's infuriating — and I won't tell you it couldn't happen again. What I can tell you is that our driver accountability system is different: tamper-evident sealing, GPS tracking throughout the route, and a clear refund pathway that doesn't fall on you. It's not perfect, but the structure is better. Would it be worth seeing the specific policies before writing off delivery entirely?", correct: true, technique: 'Risk Reversal',
        feedback: "You validated the anger without dismissing it and offered concrete structural improvements rather than promises. Acknowledging imperfection while showing accountability mechanisms is more credible than 'it won't happen again.'" },
      { text: "That experience sounds like an isolated incident — most of our drivers are rated and monitored closely.", correct: false,
        feedback: "'Isolated incident' is dismissive of a real violation. Don't minimize the experience — acknowledge it fully and show what structural protections exist now." },
      { text: "We have a tamper-evident packaging program that prevents drivers from accessing food.", correct: false,
        feedback: "Starting with a product feature before acknowledging the emotional context of the experience feels tone-deaf. Validate the experience first, then explain the structural protections." },
      { text: "Have you tried any other platforms since that experience?", correct: false,
        feedback: "Asking about competitive platforms right after someone has shared a negative experience sounds like you're fishing for comparison data rather than addressing their trust issue." },
    ],
  },
  mx41: {
    objection: "My head chef will quit if I change the kitchen workflow for delivery. He's already stressed.",
    responses: [
      { text: "Chef retention is real — and delivery doesn't require a workflow overhaul. The simplest setup is a separate delivery printer or tablet that routes orders during your slowest periods only. No change to service flow during rush. The chef never has to manage two competing priorities at the same time. Would it be worth walking through what a low-disruption setup looks like?", correct: true, technique: 'Risk Reversal',
        feedback: "You took the chef concern seriously and showed that delivery integration doesn't require a kitchen redesign. Proposing a low-disruption, time-separated setup addresses the workflow concern concretely." },
      { text: "Most chefs adjust to delivery quickly — it becomes part of the rhythm within a few weeks.", correct: false,
        feedback: "'They'll adjust' doesn't address the retention risk. The owner is worried about losing a key person — show structural protection, not adaptation expectation." },
      { text: "We have onboarding support to help train kitchen staff on delivery workflows.", correct: false,
        feedback: "Training implies disruption, which is what the chef is worried about. Emphasize minimal change, not training requirements." },
      { text: "What specifically is your chef most concerned about?", correct: false,
        feedback: "You already know the core concern: stress and workflow change. Don't ask the owner to relay the chef's concerns — show the minimal-disruption solution proactively." },
    ],
  },
  mx42: {
    objection: "We use specialty imported ingredients. If demand spikes unexpectedly, we'll run out and have to 86 items.",
    responses: [
      { text: "Inventory control on the platform is in your hands — you can set daily limits per item and turn items off when you run low, in real time, from the tablet or app. You'd never accidentally oversell. And delivery demand typically builds gradually, not in spikes, so your supplier lead time stays manageable. Want to see how the item management tools work?", correct: true, technique: 'Risk Reversal',
        feedback: "You addressed the specific operational fear — running out — with the specific tool that prevents it: item limits and real-time availability controls. Showing control mechanisms for the exact concern raised is much more effective than reassurance." },
      { text: "You could start with just a few menu items using your most reliably stocked ingredients.", correct: false,
        feedback: "Good incremental advice but it doesn't address the inventory control fear. Show the platform's availability management tools first." },
      { text: "Many restaurants with limited specialty ingredients do well on delivery by creating focused menus.", correct: false,
        feedback: "Focus is a strategy, not a solution to the stockout concern. Address the inventory control mechanisms before discussing menu strategy." },
      { text: "What's your current lead time for restocking your key ingredients?", correct: false,
        feedback: "Discovery about their supply chain is useful eventually, but answer the control concern first. Otherwise it sounds like you're assessing how exposed they are." },
    ],
  },
  mx43: {
    objection: "Our prices are set for our neighborhood. Using your platform will force us to raise them and alienate regulars.",
    responses: [
      { text: "You can absolutely maintain your in-house prices. Many partners run platform pricing slightly higher to cover fees while keeping their walk-in menu unchanged. Your regulars see the same prices they always have. Delivery customers are paying for convenience — they expect a small premium. The two price lists coexist without conflict.", correct: true, technique: 'Incremental Logic',
        feedback: "You showed the concrete mechanism for maintaining neighborhood pricing while covering platform costs: a separate delivery price list. This addresses the fear of alienating regulars while making the economics viable." },
      { text: "Many customers don't comparison-shop between delivery prices and walk-in prices.", correct: false,
        feedback: "This is true in practice but feels like you're hoping the owner's regulars don't notice. Address the dual-price solution directly rather than relying on customer inattention." },
      { text: "The incremental revenue from delivery offsets the fee even at the same price points for many restaurants.", correct: false,
        feedback: "At thin margins, same-price delivery may not work mathematically. The cleaner answer is dual pricing, not hoping the volume math works." },
      { text: "What are your current price points for your main dishes?", correct: false,
        feedback: "Good data for running the math, but answer the dual-pricing solution first. Asking about their prices before addressing the concern can feel like you're building a case to raise them." },
    ],
  },
  mx44: {
    objection: "We're a family restaurant. We want families dining in together — not solo delivery orders.",
    responses: [
      { text: "Family dining is your identity — and delivery doesn't compete with that; it extends it. Families order delivery too: it's Friday night, the kids are tired, they want their favorite Mexican food at home. A family-sized delivery order is the same family choosing your restaurant — just in a different setting. Your family brand actually travels.", correct: true, technique: 'Reframing',
        feedback: "You reframed delivery not as anti-family but as another moment for families to choose the restaurant. Family-sized delivery orders are consistent with the brand — the setting changes, the customer relationship doesn't." },
      { text: "Delivery order sizes tend to be larger for family-style restaurants — group orders are common.", correct: false,
        feedback: "This skips straight to economics when the owner's objection is about identity. Address the brand and community values concern before making a revenue case." },
      { text: "You could create family meal bundles specifically for delivery to reinforce that brand identity.", correct: false,
        feedback: "Good product idea, but it should follow the reframe, not replace it. The owner needs to believe delivery is consistent with their family brand before product design matters." },
      { text: "What does a typical dine-in family visit look like at your restaurant?", correct: false,
        feedback: "Discovery, but you already have enough to make the case. Asking them to describe their dine-in experience before making the case for delivery feels like you're stalling." },
    ],
  },
  mx45: {
    objection: "My kitchen is two people: me and my wife. We physically cannot take more orders.",
    responses: [
      { text: "That's a real capacity ceiling — and I'm not here to push you past it. The question is whether there's any underutilized time: mid-afternoon, early dinner, Tuesday lunch. If there's a window where you're prepped and the dining room is quiet, delivery could generate revenue with the same two people. If your calendar is full every hour, the timing isn't right now. Let's look at your schedule honestly.", correct: true, technique: 'Incremental Logic',
        feedback: "You respected the capacity constraint without dismissing it. Offering to look for unused windows honestly — including acknowledging delivery might not work — builds trust. The incremental approach is the only viable one for a true two-person operation." },
      { text: "Many small operations add delivery successfully by managing volume through daily caps.", correct: false,
        feedback: "'Many small operations' doesn't address the specific two-person constraint. The honest question is whether there's any unused capacity — not whether other people have managed it." },
      { text: "You could hire part-time help specifically for delivery hours to expand capacity.", correct: false,
        feedback: "Suggesting they hire someone to handle a new revenue stream they haven't agreed to yet is jumping multiple steps. Answer the capacity concern honestly before discussing growth." },
      { text: "What does your schedule look like on a typical Tuesday or Wednesday?", correct: false,
        feedback: "Good discovery — but frame it within the honest capacity search ('let's look at your schedule and see if there's a window') rather than as a standalone question that might feel like you're looking for openings to push into." },
    ],
  },
  mx46: {
    objection: "Our prices haven't changed in 10 years. Our customers would notice any change immediately.",
    responses: [
      { text: "Your in-house prices don't need to change at all. Your regulars walk in and pay exactly what they've always paid. A delivery menu can carry a small premium to cover platform costs — delivery customers are paying for convenience and they expect it. Your walk-in community never sees the delivery pricing. The two menus live separately.", correct: true, technique: 'Incremental Logic',
        feedback: "The dual-menu solution directly addresses the price-stability concern. Regulars and delivery customers are different populations; the pricing can reflect that without any conflict." },
      { text: "Most customers understand that delivery prices are slightly higher — it's an accepted industry norm.", correct: false,
        feedback: "The owner's concern is about their specific regulars, not industry norms. Address the mechanism that keeps in-house prices unchanged before citing broader patterns." },
      { text: "Inflation has affected your cost structure — a modest price adjustment might actually be overdue.", correct: false,
        feedback: "Suggesting the owner should raise their prices is the last thing to say to someone who's made price stability their brand. Stay focused on the dual-menu solution." },
      { text: "Would your regulars actually be checking delivery prices online?", correct: false,
        feedback: "This risks making the owner feel you're suggesting they hide the delivery pricing. Address the structural solution — separate menus — rather than speculating about what regulars would notice." },
    ],
  },
  mx47: {
    objection: "Our real lunch business is office workers two miles away. Your delivery radius won't reach them.",
    responses: [
      { text: "Delivery radius is configurable — and two miles is well within our standard range. Let me pull your exact coverage map for this address. If your lunch customer base is clustered in a specific office district, we can confirm whether the radius covers it before you make any decision. You'll see the actual coverage, not an estimate.", correct: true, technique: 'Hyperlocal Data',
        feedback: "You challenged an assumption with data rather than argument. Pulling the actual coverage map is more convincing than any verbal reassurance. Offering specifics before the owner asks for them shows competence." },
      { text: "Most markets cover a standard 3–5 mile delivery radius, which should include most office areas.", correct: false,
        feedback: "Generic range data doesn't address their specific geographic concern. Show them the actual map for their address." },
      { text: "Office delivery is one of our fastest-growing segments — there may be strong demand in that corridor.", correct: false,
        feedback: "Segment data is interesting but not the answer to 'will it reach my specific offices.' Pull the coverage map." },
      { text: "How far is the office district from your location exactly?", correct: false,
        feedback: "Good question — but frame it as 'let me pull the coverage map, how far is it so I can confirm?' rather than a standalone question, so you're offering to verify rather than just gathering information." },
    ],
  },
  mx48: {
    objection: "I don't want to deal with chargebacks and customer refund disputes.",
    responses: [
      { text: "Refund disputes on our platform go through us, not you. If a customer claims an item was missing or wrong, our support team handles the investigation and issues the credit. You're not managing a dispute queue — we are. Your responsibility is to fulfill the order accurately; everything after that is our problem to resolve.", correct: true, technique: 'Risk Reversal',
        feedback: "You showed that the dispute burden the owner fears doesn't actually fall on them. Clearly separating platform liability from restaurant liability directly addresses the operational concern." },
      { text: "Chargebacks are relatively rare on delivery platforms — most issues are resolved without escalation.", correct: false,
        feedback: "Rarity doesn't address the concern about process — they want to know who handles it. Clarify the liability and process directly." },
      { text: "We have an order accuracy dashboard that helps identify patterns and reduce errors.", correct: false,
        feedback: "Analytics are a secondary concern. Answer who handles the dispute when it happens before introducing accuracy tracking tools." },
      { text: "What types of disputes are you most worried about?", correct: false,
        feedback: "Don't make them enumerate their worries. Give them the clear answer: disputes are handled by the platform, not the restaurant." },
    ],
  },
  mx49: {
    objection: "Our best dishes are off-menu specials. Delivery would force me to standardize in a way that removes my creativity.",
    responses: [
      { text: "You can update your delivery menu any time — add a special today, remove it tomorrow. Many chefs use the platform specifically to test dishes before adding them permanently: low-risk way to gauge demand for a new idea. Your specials can live on the platform as limited-time items. Creativity stays intact — you just have a new channel to run experiments through.", correct: true, technique: 'Reframing',
        feedback: "You reframed the platform as a creative testing ground rather than a standardization constraint. The ability to update the menu instantly means specials and creativity are fully compatible with delivery." },
      { text: "You could feature a rotating 'Chef's Special' on the platform that changes weekly.", correct: false,
        feedback: "Good product idea, but address the creative freedom concern first. The owner needs to believe the platform is flexible before they'll engage with product design suggestions." },
      { text: "Many successful chefs actually find delivery forces a productive focus on their strongest dishes.", correct: false,
        feedback: "Telling a creative chef that constraint is 'productive' is likely to land as dismissive. Affirm their creative identity and show how the platform accommodates it." },
      { text: "What are the off-menu specials you're currently running?", correct: false,
        feedback: "Good discovery, but it feels like you're gathering menu ideas rather than addressing the creative freedom concern. Show that the platform is flexible first, then explore what specials might translate." },
    ],
  },
  mx50: {
    objection: "We're applying for a small business grant. I can't change revenue channels while the application is in review.",
    responses: [
      { text: "That makes sense — grant applications often require stable baseline financials, and introducing a new channel during review could complicate the picture. Let's time this right: finish the review cycle, get the decision, and if it goes well, delivery becomes a great way to activate the capital you receive. I'll follow up after your expected decision date. When do you expect to hear back?", correct: true, technique: 'Pipeline Value',
        feedback: "You respected a legitimate business constraint without abandoning the relationship. Scheduling the follow-up to align with the grant decision timeline turns a 'not now' into a 'then' — and shows genuine respect for their priorities." },
      { text: "Adding a revenue channel might actually strengthen your grant application by showing business growth intent.", correct: false,
        feedback: "Offering informal grant strategy advice when they've already made a conservative decision about their application is presumptuous. Respect their judgment and time the conversation correctly." },
      { text: "Platform revenue is reported separately and wouldn't affect your grant eligibility in most cases.", correct: false,
        feedback: "Speculating about grant eligibility rules you don't have full context on is risky. Respect the constraint, time the follow-up appropriately." },
      { text: "How long is the grant review process typically?", correct: false,
        feedback: "Good question — but frame it as 'let me follow up at the right time; when do you expect to hear back?' rather than a standalone question that implies you're waiting to pounce." },
    ],
  },
  mx51: {
    objection: "Delivery works for pizza and burgers. Mexican food is a different dining experience — it's cultural.",
    responses: [
      { text: "Mexican food actually performs extremely well on delivery platforms — tacos, burritos, and bowls are among the most-ordered categories nationwide. More importantly, the 'cultural dining experience' and delivery aren't mutually exclusive: your dine-in experience stays exactly what it is. Delivery reaches people who want your food but can't make it in right now. The culture travels in the food itself.", correct: true, technique: 'Social Proof',
        feedback: "You provided category data to challenge the assumption, then separated the cultural experience (preserved in-house) from the food quality (which travels). Both parts of the objection needed a response." },
      { text: "Many Mexican restaurants are among our top earners nationally.", correct: false,
        feedback: "'Top earners' sounds boastful and generic. Use the specific category data about Mexican food's delivery performance, then address the cultural experience concern." },
      { text: "Customers increasingly expect to enjoy cultural foods at home — it's a growing trend.", correct: false,
        feedback: "Trend data doesn't address the owner's belief that the experience is inseparable from the setting. Affirm the dine-in experience while showing the food itself is the carrier of the culture." },
      { text: "What aspects of the experience do you think can't be replicated at home?", correct: false,
        feedback: "Asking them to identify what delivery can't replicate is likely to produce a long list of objections. Show the value first, then explore any remaining gaps." },
    ],
  },
  mx52: {
    objection: "We use organic, locally sourced ingredients exclusively. Platform fees eat the premium margin we need to sustain that.",
    responses: [
      { text: "Your premium sourcing is a competitive advantage — and it should show in your delivery pricing. Platform pricing can carry a higher margin than your in-house menu without affecting your walk-in customers. Customers who seek out organic, local food are also the customers most willing to pay for delivery convenience. The two align well. Want to model the pricing together?", correct: true, technique: 'Premium Positioning',
        feedback: "You showed that premium sourcing and premium pricing are aligned, and that the delivery customer demographic is likely to overlap with the organic-food-seeking audience. The offer to model pricing together is concrete and respectful." },
      { text: "Many organic restaurants find that delivery customers have higher average order values.", correct: false,
        feedback: "Generic data is a start but doesn't build the specific pricing case they need. Offer to model their actual margins with the premium delivery pricing strategy." },
      { text: "Your sourcing story is a marketing asset — it would help your listing stand out on the platform.", correct: false,
        feedback: "Marketing benefits are secondary to the margin concern they raised. Address the economics first." },
      { text: "What are your current food cost percentages for your key ingredients?", correct: false,
        feedback: "Good data for the margin model — ask it as part of 'let me model the pricing with you' rather than as a standalone question that makes them do math before seeing a path forward." },
    ],
  },
  mx53: {
    objection: "I've seen restaurants get review-bombed on delivery apps. One bad logistics incident and we're destroyed.",
    responses: [
      { text: "Delivery-attributed reviews — wrong order, late arrival, missing items — are flagged in our system and handled by our support team. They don't appear as restaurant reviews; they're logistics issues that fall under platform responsibility. Your restaurant rating reflects your food and packaging, not a driver's GPS error. Want to see how the review categorization actually works?", correct: true, technique: 'Risk Reversal',
        feedback: "You distinguished between restaurant-controlled quality (food, packaging) and platform-controlled logistics (delivery time, driver behavior) and showed that the two are tracked separately. This directly addresses the 'destroyed by a driver's mistake' fear." },
      { text: "Review-bombing is rare — most customers who have delivery issues just request refunds quietly.", correct: false,
        feedback: "'Rare' and 'quiet' don't reassure someone who has seen it happen. Show the structural protection rather than relying on statistical improbability." },
      { text: "You can respond publicly to any review on the platform, which shows other customers you take issues seriously.", correct: false,
        feedback: "Response capability is a mitigation tool, not a prevention mechanism. Show how the review system separates logistics failures from restaurant quality ratings." },
      { text: "Can you share a specific example of a review-bombing you've seen? I'd like to understand the context.", correct: false,
        feedback: "Asking them to detail someone else's bad experience doesn't address their concern — it amplifies it. Move directly to showing the structural protection." },
    ],
  },
  mx54: {
    objection: "Our regulars feel like family. Delivery feels like we're abandoning personal service for scale.",
    responses: [
      { text: "Delivery doesn't replace the relationship with your regulars — they still come in and get exactly what they've always had. What delivery does is reach people who haven't found you yet. Your regulars actually benefit: a busier restaurant means you stay open, invest more, and keep improving. The personal service lives in your dining room; delivery funds it.", correct: true, technique: 'Reframing',
        feedback: "You showed that delivery serves the existing relationships by strengthening the business that underlies them. The community relationship is preserved; delivery supplements the financial foundation that makes it sustainable." },
      { text: "Many personal, community-focused restaurants do extremely well on delivery while maintaining their dine-in culture.", correct: false,
        feedback: "Social proof is useful but doesn't address the emotional concern about abandoning personal service. Engage with the values directly." },
      { text: "You could create a loyalty program that bridges delivery and dine-in customers.", correct: false,
        feedback: "Loyalty programs are product features that come after the philosophical concern is addressed. The owner needs to believe delivery is compatible with their community values first." },
      { text: "What does personal service look like specifically at your restaurant?", correct: false,
        feedback: "Asking them to describe their community relationships before showing how delivery is compatible with those relationships can feel like you're looking for gaps to exploit." },
    ],
  },
  mx55: {
    objection: "We do pop-up dinners and chef's tables. That's our brand — delivery is the opposite of exclusivity.",
    responses: [
      { text: "You're right that delivery and exclusivity are different experiences — they don't need to be the same experience. Delivery could be a separate, accessible expression of your food that doesn't dilute the chef's table brand: a different product tier for a different customer, explicitly branded that way. Many exclusive concepts have done this successfully by treating delivery as a distinct offering.", correct: true, technique: 'Channel Separation',
        feedback: "You validated the brand concern and offered a concrete model: tiered product lines. Delivery as a democratized, separate tier doesn't dilute the exclusive experience — it serves a different customer at a different price point." },
      { text: "Delivery can actually raise awareness that drives interest in your exclusive events.", correct: false,
        feedback: "True in theory, but this doesn't address the exclusivity concern directly. If delivery drives 'anyone' to discover the brand, that could feel like it cheapens the exclusive positioning." },
      { text: "Many Michelin-starred restaurants offer delivery for their more casual menu items.", correct: false,
        feedback: "Good analogy but stated too briefly. Develop the tiered-product idea — the casual delivery offering and the exclusive chef's table are different products that can coexist without diluting each other." },
      { text: "What would make delivery feel inconsistent with your brand identity?", correct: false,
        feedback: "Discovery, but the owner has already told you: exclusivity. Address that directly with the tiered-product model rather than asking them to elaborate." },
    ],
  },
  mx56: {
    objection: "Our health department rating is perfect. Any delivery error that triggers a complaint could affect our standing.",
    responses: [
      { text: "Health department ratings are determined by inspections, not customer reviews — they're separate systems. A delivery complaint about a missing taco doesn't trigger an inspection or affect your posted rating. What would affect a rating is a food safety violation in your kitchen, which your current practices clearly prevent. Delivery logistics complaints go to us, not to the health department.", correct: true, technique: 'Reframing',
        feedback: "You separated two systems the owner conflated: platform complaints and health department oversight. Clarifying that these are independent processes directly removes the fear." },
      { text: "Delivery complaints are handled through our support system and don't involve any external health authorities.", correct: false,
        feedback: "This is the right information, but stated too briefly to address the fear fully. Explain why the two systems are separate and who handles what." },
      { text: "Maintaining your food safety practices on delivery packaging is straightforward — we have guidance for that.", correct: false,
        feedback: "Packaging guidance is operational support, not the answer to the health department fear. Address the misconnection between delivery complaints and health ratings first." },
      { text: "What specific types of errors are you most worried about from a compliance standpoint?", correct: false,
        feedback: "Asking them to enumerate compliance fears before clarifying that delivery complaints don't affect health ratings risks amplifying anxiety rather than resolving it." },
    ],
  },
  mx57: {
    objection: "We did delivery ourselves during COVID. It was a complete nightmare — wrong orders, cold food, angry customers.",
    responses: [
      { text: "Running your own delivery operation during a crisis is brutal — every problem lands on you. What's different with a platform is the problem ownership: the driver vets, route optimization, and customer support all sit with us, not you. You handle the food; we handle everything after it leaves your hands. The operations that hurt you last time aren't yours to manage this time.", correct: true, technique: 'Risk Reversal',
        feedback: "You drew a clear distinction between self-operated delivery (all problems owned by the restaurant) and platform delivery (logistics owned by the platform). The painful COVID experience was a self-operated model — not a fair comparison to a full-service platform." },
      { text: "The delivery landscape has improved significantly since COVID — infrastructure is much more mature now.", correct: false,
        feedback: "Telling someone their past bad experience is now outdated doesn't address the structural difference between self-operated and platform delivery. Make that distinction explicit." },
      { text: "Most restaurants find platform delivery far less stressful than managing their own drivers.", correct: false,
        feedback: "'Most restaurants find' is too generic after a specific traumatic experience. Connect directly to what made their experience so hard and show who owns those problems now." },
      { text: "What were the most common issues you ran into with your delivery operation?", correct: false,
        feedback: "Asking them to relive the worst moments of COVID operations before showing the structural difference isn't the right sequence. Show what's different first, then ask if any of those specific issues remain." },
    ],
  },
  mx58: {
    objection: "My lunch rush is already maxed out. I'm turning away walk-ins every day.",
    responses: [
      { text: "A maxed lunch rush is actually the strongest case for delivery timing discipline: if you're at capacity from 11:30 to 1:30, delivery is off during that window. But 10–11:30am and 2–3pm are prep and cleanup time with the kitchen warmed up and ready. That capacity is currently earning zero. Delivery in those slots doesn't compete with your lunch rush — it fills what was previously dead time.", correct: true, technique: 'Incremental Logic',
        feedback: "You respected the real capacity constraint and identified the specific time windows around it where delivery could generate revenue without any competition with the existing busy period. This is precise, respectful, and actionable." },
      { text: "You could limit delivery to a smaller menu to reduce kitchen load during peak hours.", correct: false,
        feedback: "A reduced menu during peak is a damage-control tactic for an already-overwhelmed kitchen. Show the off-peak opportunity instead of adding to their busiest hours." },
      { text: "Being at capacity means you have proven demand — delivery would just extend that demand to more hours.", correct: false,
        feedback: "True in logic, but this doesn't address the immediate capacity concern. Show the specific time windows where delivery wouldn't compete before making the general demand argument." },
      { text: "What time does your lunch rush typically wind down?", correct: false,
        feedback: "Good discovery — ask it as part of 'let me map your available windows' rather than a standalone question, so you're building toward a specific time-slot proposal." },
    ],
  },
  mx59: {
    objection: "We're planning to open a second location in 18 months. Delivery doesn't fit into that plan right now.",
    responses: [
      { text: "A second location in 18 months is exciting — and delivery at your current location could actually support that plan. Platform data on order density, zip code breakdown, and repeat customer locations can tell you exactly where your demand clusters are. That's real market research for where your second location should be. You'd be building toward the expansion while generating revenue along the way.", correct: true, technique: 'Pipeline Value',
        feedback: "You reframed delivery not as a distraction from expansion planning but as a data source that informs it. Delivery analytics can function as market research for the second location — turning a competing priority into a supporting one." },
      { text: "Getting delivery established now means your second location can launch with delivery already operational.", correct: false,
        feedback: "Operational readiness for the second location is a secondary benefit. The stronger case is that delivery data informs where the second location should be — lead with that." },
      { text: "Many restaurants use delivery to test demand in target neighborhoods before signing a lease.", correct: false,
        feedback: "Good insight, but it's somewhat backward — they already know where they're opening. The relevant use of delivery data is demand density and customer geography to validate or refine that choice." },
      { text: "Where are you planning to open the second location?", correct: false,
        feedback: "Good question, but only after showing how delivery supports the expansion plan. Ask it to strengthen the market-research case, not as an opener." },
    ],
  },
  mx60: {
    objection: "Our investors want us to keep the brand premium. They feel platform visibility could cheapen it.",
    responses: [
      { text: "That's a legitimate brand governance question — and it's worth showing your investors what platform presentation actually looks like before deciding. Premium brands control their positioning on the platform through professional photography, curated menus, and brand-voice descriptions. The platform is a channel; your brand standards apply to how you use it. I can put together a mock listing for your review.", correct: true, technique: 'Premium Positioning',
        feedback: "You validated the investor concern and offered something concrete: a mock listing that shows premium brand control in action. This turns an abstract fear into something reviewable and discussable with their investors." },
      { text: "Uber Eats has many premium brand partners — it doesn't inherently position restaurants as casual.", correct: false,
        feedback: "Name-dropping premium partners is social proof but doesn't address the specific concern about their brand control. Show them their own listing potential." },
      { text: "Premium positioning on the platform is entirely controlled by the restaurant — photo, description, menu design.", correct: false,
        feedback: "This is the right answer but stated too abstractly. Offer to show a mock listing so they can see what premium platform presentation actually looks like." },
      { text: "Have your investors seen examples of premium brands on the platform?", correct: false,
        feedback: "Asking them to do research on their own to convince their investors shifts work to them. Offer to create the concrete example — a mock listing — that can be shared with the investor team directly." },
    ],
  },
  mx61: {
    objection: "My regulars are all neighbors within two blocks. They walk over. They'd never order on an app.",
    responses: [
      { text: "Your neighbors walking over is your best business — preserve it completely. The question is who isn't walking over: the person four blocks away who's never discovered you, the family that moved in last month, the remote worker who stays home three days a week. Your two-block walk-in community is your core; delivery extends your circle without changing what it is.", correct: true, technique: 'Channel Separation',
        feedback: "You honored the walk-in community while showing the geographic gap it leaves. Extending the radius from 2 to 6 blocks via delivery is additive, not competitive." },
      { text: "Even hyper-local neighborhoods have residents who use delivery apps for convenience on busy days.", correct: false,
        feedback: "True, but this risks challenging the owner's belief about their specific community. Show the geographic extension argument instead of correcting their community insight." },
      { text: "Delivery app usage is highest among newer residents who haven't yet built neighborhood habits.", correct: false,
        feedback: "Interesting demographic insight, but it comes across as knowing their neighborhood better than they do. Use the geographic argument instead." },
      { text: "What's the furthest you see customers traveling to come to you?", correct: false,
        feedback: "Good discovery for the radius argument — but ask it after showing the channel separation logic, not as an opener." },
    ],
  },
  mx62: {
    objection: "Our birria has gone viral on TikTok. We're overwhelmed as it is — more orders would break us.",
    responses: [
      { text: "A viral moment is actually the perfect time to capture demand systematically rather than let it overflow chaotically. Right now, demand spikes unpredictably and some customers can't get to you at all. Platform orders let you set a daily cap that matches your kitchen capacity exactly — you fill that cap at your pace, earn clean revenue, and manage the surge without being broken by it. You control the volume.", correct: true, technique: 'Risk Reversal',
        feedback: "You reframed the overwhelm concern: unmanaged viral demand is chaotic; platform delivery with a daily cap is the same demand made manageable. The owner is already overwhelmed — show them a structure that helps them control the flood, not add to it." },
      { text: "Viral moments are temporary — building a platform presence now captures long-term benefit.", correct: false,
        feedback: "Asking someone in the middle of a viral moment to think long-term when they're already overwhelmed will land as dismissive of their immediate problem. Solve the capacity management concern first." },
      { text: "We could help you fulfill demand you're currently turning away, which represents lost revenue.", correct: false,
        feedback: "Framing turned-away customers as 'lost revenue' to someone who is already overwhelmed can feel tone-deaf. Show the capacity management tools that make more orders manageable, not just desirable." },
      { text: "How many orders per day are you currently turning away?", correct: false,
        feedback: "Discovery, but quantifying the lost revenue without showing the capacity control tools first can feel like you're building urgency rather than solving their actual problem." },
    ],
  },
  mx63: {
    objection: "I'd need to hire another person just to manage delivery orders. That labor cost kills any margin.",
    responses: [
      { text: "Delivery order management at the volume most starting partners see — 5 to 15 orders a day — doesn't require dedicated staff. Orders come to a tablet, the kitchen sees them like any other ticket, and packing takes seconds for a trained team. The labor question becomes real at 50+ orders a day, by which point the revenue more than covers a part-time hire. Let's look at what starting volume looks like in your area.", correct: true, technique: 'Hyperlocal Data',
        feedback: "You addressed the labor cost fear by showing that the startup volume doesn't require dedicated staffing, and that the threshold where it does is high enough that the economics work by then. Offering to pull local starting-volume data makes it specific." },
      { text: "Most restaurants integrate delivery management into existing workflows without extra staff.", correct: false,
        feedback: "'Most restaurants' doesn't address the concern about their specific operation. Show the realistic starting volume and the staffing threshold where it becomes an issue." },
      { text: "We have tools to streamline order management so it takes minimal time per order.", correct: false,
        feedback: "Efficiency tools are secondary to the volume question. Address how many orders they'd realistically start with before discussing how to handle them." },
      { text: "How large is your current kitchen team?", correct: false,
        feedback: "Good discovery — ask it as part of 'let me show you what starting volume looks like for your area so we can see if it fits your current team' rather than as a standalone question." },
    ],
  },
  mx64: {
    objection: "We sell out every day by 2pm. There's no unused inventory to offer for delivery.",
    responses: [
      { text: "Selling out daily is a strong signal — it means you have proven demand beyond what you're currently producing. The question isn't about unused inventory; it's about whether you'd produce more if you knew it would sell. Delivery pre-orders can tell you exactly how much incremental demand exists, so you produce to order rather than guessing. You'd scale production intentionally, not randomly.", correct: true, technique: 'Pipeline Value',
        feedback: "You reframed the sellout from a constraint into evidence of suppressed demand. Pre-orders allow intentional production scaling — the opposite of risking excess inventory. This is the correct frame for a restaurant that undersupplies, not oversupplies." },
      { text: "Selling out early could mean you're underpricing — delivery might help you test higher price points.", correct: false,
        feedback: "Suggesting they should raise prices to an owner who sells out happily can feel like criticism of their business model. Focus on the incremental production opportunity." },
      { text: "Delivery could extend your selling hours by capturing pre-orders for tomorrow.", correct: false,
        feedback: "Tomorrow's pre-orders are an interesting idea but a leap from the current concern about today's inventory. Show the incremental production argument first." },
      { text: "What time do you typically start running low on your main items?", correct: false,
        feedback: "Good discovery for sizing the daily production question — ask it after framing the pre-order production model, so you're building toward 'how much should you make to meet delivery demand.'" },
    ],
  },
  mx65: {
    objection: "We're a taco stand — our whole brand is about coming to find us. Delivery kills the adventure.",
    responses: [
      { text: "The in-person hunt is your brand and delivery doesn't replace it. What delivery does is reach the person who found you on Instagram, wants to try you, but can't make it to the stand location this week. They order, they love it, and then they come find the stand in person. Delivery is a sampling channel that feeds your walk-up traffic — not a substitute for it.", correct: true, technique: 'Pipeline Value',
        feedback: "You honored the discovery-brand identity while showing how delivery functions as a conversion tool for the awareness that already exists. Instagram followers who've never visited the stand are the target — delivery is their first step." },
      { text: "Delivery and in-person experience can coexist for the same brand — many street food operators do both.", correct: false,
        feedback: "Social proof doesn't address the brand identity concern directly. Show how delivery supports the in-person brand rather than diluting it." },
      { text: "You could frame delivery as a 'preview' of the full stand experience — a teaser.", correct: false,
        feedback: "Good brand language, but it comes too early. Show the discovery-to-visit pipeline logic first, then the owner can decide how to brand it." },
      { text: "Who do you think discovers your stand primarily — social media followers or walk-bys?", correct: false,
        feedback: "Discovery is interesting context but not the first thing to explore. Make the pipeline case — delivery converts awareness into first orders, and first orders lead to in-person visits — before asking how people currently find them." },
    ],
  },
  mx66: {
    objection: "I'm semi-retired. I open four days a week and I like it that way. I'm not trying to grow.",
    responses: [
      { text: "Semi-retirement is the right mode for you — and delivery on your four open days doesn't have to mean growth. It can mean better utilization of the kitchen you're already running. If you're prepping and cooking anyway, delivery orders during your slower windows earn you more from the same effort without changing your schedule or pace. Would even a small lift in revenue on your existing days be interesting?", correct: true, technique: 'Incremental Logic',
        feedback: "You respected the lifestyle choice completely and reframed delivery not as growth but as efficiency: same schedule, same effort, slightly more revenue from time already spent. No lifestyle disruption required." },
      { text: "Even a few delivery orders per week can add meaningful revenue to a four-day operation.", correct: false,
        feedback: "True, but starting with revenue opportunity to someone who has said they're not interested in growing can land as tone-deaf. Frame it as better utilization of existing effort first." },
      { text: "You could set very limited hours for delivery — even just a few hours on your busiest day.", correct: false,
        feedback: "Good operational advice, but offer it after showing why even minimal delivery makes sense for someone in their situation. Don't start with logistics." },
      { text: "What does a typical day look like for you when you're open?", correct: false,
        feedback: "Discovery is useful for finding the idle capacity window, but ask it after the lifestyle-respecting pitch. Otherwise it sounds like you're assessing their schedule for opportunities to push into." },
    ],
  },
  mx67: {
    objection: "We make our own hot sauce and sell it retail. I'm worried delivery traffic will undercut my retail brand.",
    responses: [
      { text: "Delivery and retail are different channels for different moments — the person who orders your food for delivery and tastes your hot sauce is actually a conversion opportunity for your retail product. Including a card or a link to your retail sauce in delivery orders has driven direct retail sales for similar brands. Delivery can be your retail marketing channel, not its competitor.", correct: true, technique: 'Pipeline Value',
        feedback: "You reframed the relationship between delivery and retail from competitive to complementary: delivery creates sampling moments that drive retail conversion. The hot sauce in the bag becomes a product discovery experience." },
      { text: "Most restaurant brands with retail products find delivery expands awareness rather than diluting it.", correct: false,
        feedback: "Generic 'most brands' data doesn't address the specific concern about channel conflict. Show the concrete mechanism — delivery creates retail customers, not competition for them." },
      { text: "You could list your hot sauce on the platform as an add-on item — selling it both in restaurants and digitally.", correct: false,
        feedback: "Interesting product idea, but it comes before addressing the channel conflict concern. Show how delivery supports the retail brand first." },
      { text: "How are you currently distributing your hot sauce — stores, online, farmers markets?", correct: false,
        feedback: "Good discovery for the channel strategy, but ask it after making the case that delivery supports retail rather than competing with it." },
    ],
  },
  mx68: {
    objection: "We're inside a market hall. Management may not allow delivery driver pickup.",
    responses: [
      { text: "That's a real logistics question worth resolving before you decide — and it's one we can help clarify. Many market hall operators have worked out pickup protocols with us already. Let me check whether your specific venue has an existing delivery arrangement or whether we can facilitate a conversation with management. Don't let an unconfirmed assumption block the decision.", correct: true, technique: 'Risk Reversal',
        feedback: "You identified that the objection is based on an assumption ('may not allow') rather than a confirmed restriction, and offered to resolve the uncertainty actively. Turning 'I don't know if it's allowed' into 'let me find out for you' shows initiative and respect." },
      { text: "Many market halls have established delivery pickup zones — yours may already have one.", correct: false,
        feedback: "Stating probability without offering to verify doesn't resolve the concern. Offer to confirm the specific situation at their venue." },
      { text: "You could check with your market management before committing to the platform.", correct: false,
        feedback: "Asking them to do the research shifts work back to them. Offer to help resolve the logistics question directly." },
      { text: "Who manages the market hall operations — is there a venue manager you deal with?", correct: false,
        feedback: "Good discovery, but frame it as part of 'let me help facilitate that conversation' rather than as standalone research you're delegating to them." },
    ],
  },
  mx69: {
    objection: "We do corporate catering contracts. Individual consumer delivery doesn't fit our business model.",
    responses: [
      { text: "Corporate catering and consumer delivery serve different clients entirely — they don't compete. What delivery opens is the individual employee: the same person who orders your catering for the team lunch might order your burritos on their WFH day. Delivery turns your catering clients into individual repeat customers, creating a second revenue relationship with the same network.", correct: true, technique: 'Pipeline Value',
        feedback: "You identified the personal bridge between corporate catering clients and individual consumer delivery: the employees who eat your catering at work also eat at home. Delivery activates the individual relationship within the corporate relationship you already have." },
      { text: "Many catering-focused restaurants use delivery for weekday lunch to keep volume steady between catering events.", correct: false,
        feedback: "Good operational logic, but address the model fit concern first. Show how individual delivery and corporate catering serve connected but different needs." },
      { text: "Our platform does offer corporate ordering features — you could use it for both channels.", correct: false,
        feedback: "Corporate platform features may be interesting eventually, but the immediate concern is whether individual delivery fits their business model. Address the model fit with the employee conversion argument." },
      { text: "How many corporate contracts do you currently service per month?", correct: false,
        feedback: "Good discovery for sizing the individual conversion opportunity — ask it after making the case for why that conversion is valuable, not as an opening question." },
    ],
  },
  mx70: {
    objection: "Our signature pozole takes 6 hours to simmer. We can't put it on a delivery menu.",
    responses: [
      { text: "Slow-cooked items are actually well-suited to delivery schedules — you start the batch early, it's ready by your delivery window, and you sell through that batch with a daily quantity limit. You're not cooking to order; you're delivering from a batch that's already been going for hours. Pozole is a comfort dish that actually holds well. Want to map what a batch-to-delivery schedule could look like?", correct: true, technique: 'Reframing',
        feedback: "You reframed the 6-hour cook time from a delivery barrier into a feature: batch production that's delivery-ready by design. Slow-cooked dishes that hold well in insulated containers can be ideal for delivery economics." },
      { text: "You could list pozole as a pre-order item — customers request it a day ahead.", correct: false,
        feedback: "Pre-orders work but aren't as strong as showing the batch-production delivery model that doesn't require any advance ordering. Lead with the simpler operational solution." },
      { text: "Customers who order pozole for delivery are likely seeking that exact slow-cooked comfort food quality.", correct: false,
        feedback: "Demand is not the concern — operational feasibility is. Address how the 6-hour production maps to a delivery schedule before discussing customer desire." },
      { text: "How many portions of pozole do you typically make per batch?", correct: false,
        feedback: "Good discovery for sizing the delivery quantity — ask it as part of mapping the batch-to-delivery schedule, not as a standalone question." },
    ],
  },
  mx71: {
    objection: "There aren't enough drivers in our neighborhood. No one would actually deliver our food.",
    responses: [
      { text: "Driver coverage is data we can check for your specific address before you commit to anything. Let me pull the coverage map and active driver density for your zip code. If coverage is genuinely thin, I'll tell you — and there may be a wait period worth discussing. But most of these concerns are based on assumptions that coverage data resolves one way or the other.", correct: true, technique: 'Hyperlocal Data',
        feedback: "You offered to verify the assumption with actual data rather than arguing against it. If coverage is thin, acknowledging it honestly is more credible than dismissing the concern. The data resolves the uncertainty." },
      { text: "Driver supply in most urban and suburban areas is robust — this is rarely a real barrier.", correct: false,
        feedback: "Dismissing the concern with 'rarely a barrier' doesn't address their specific geography. Check the actual data before making any claims about coverage." },
      { text: "Driver density tends to increase as more restaurants join — your area may improve quickly.", correct: false,
        feedback: "Future improvement is speculative and doesn't answer the current concern. Offer to pull the existing coverage data today." },
      { text: "What's your zip code? I can check coverage right now.", correct: false,
        feedback: "This is actually close to the right answer, but frame it as part of 'let me pull your coverage map and driver density data' so it feels like a full investigation rather than a quick lookup." },
    ],
  },
  mx72: {
    objection: "Every time I see delivery reviews for other Mexican places, the complaints are about portion sizes.",
    responses: [
      { text: "Portion complaints usually come from restaurants that don't adjust packaging for delivery — a full plate looks different in a box than it does at the table. The solution is container choice and presentation: packaging your portions to look intentional and generous. Your actual portions don't change; how they're presented changes. Want to look at packaging examples from high-rated Mexican restaurants on the platform?", correct: true, technique: 'Social Proof',
        feedback: "You identified the actual cause of the portion complaint pattern (packaging presentation, not actual portions) and offered a concrete solution plus social proof from successful restaurants. This turns a competitor's failure into a solvable problem." },
      { text: "You can set your portion sizes specifically for delivery to ensure consistency.", correct: false,
        feedback: "This implies shrinking portions, which is the opposite of solving the complaint. Packaging presentation is the solution, not portion adjustment." },
      { text: "Customer expectations for delivery portions are lower than dine-in — it's a known dynamic.", correct: false,
        feedback: "Accepting lower standards as 'known' is the wrong message for an owner who prides themselves on generous portions. Show the packaging solution that makes delivery portions look as good as they are." },
      { text: "What portion sizes do you currently serve for your main dishes?", correct: false,
        feedback: "Good context, but the solution is packaging presentation regardless of current portion size. Show the packaging approach first, then discuss how their specific portions would translate." },
    ],
  },
  mx73: {
    objection: "I run a tasting menu with 8 courses. Each course is plated specifically. Delivery ruins the concept.",
    responses: [
      { text: "A tasting menu format likely shouldn't be delivered as-is — you're right about that. But many tasting-menu concepts have created a separate 'delivery edition': a thoughtfully curated 3-course version in premium packaging that's a different product from the main experience. It's not a compromise of the concept; it's a distinct, accessible expression of it. Would a curated delivery format be worth exploring separately?", correct: true, technique: 'Channel Separation',
        feedback: "You agreed with the premise that the exact tasting menu shouldn't be delivered, then offered a real solution: a designed delivery format that's a separate product, not a degraded version of the main experience. This respects the concept while opening a realistic path." },
      { text: "Some tasting menu concepts have adapted successfully to delivery with premium packaging.", correct: false,
        feedback: "Social proof without a structural model doesn't address how their specific format would translate. Offer the curated delivery edition concept specifically." },
      { text: "You could offer delivery on specific courses that travel well and represent your cuisine.", correct: false,
        feedback: "This is closer to the right idea but frames it as selecting from existing courses rather than designing a separate delivery product. The latter is more intentional and brand-consistent." },
      { text: "What does a typical tasting menu progression look like at your restaurant?", correct: false,
        feedback: "Good eventual context for designing the delivery edition — but address the concept concern first. The owner needs to see that the tasting menu stays intact before they'll engage in delivery format design." },
    ],
  },
  mx74: {
    objection: "Proper containers for our food — tamales, mole, rice — would cost $4 per order. That's not viable.",
    responses: [
      { text: "Four dollars per order in packaging is real cost that has to be in your pricing model. The path most partners take is a delivery-specific menu with pricing that reflects the true cost — packaging included. If your tamales are $12 in-house and packaging is $4, your delivery tamales are $16, and customers accept that. The key is that your delivery menu is priced honestly, not built to break even at in-house prices.", correct: true, technique: 'Incremental Logic',
        feedback: "You acknowledged the real cost and showed the pricing model that absorbs it: delivery-specific pricing that includes packaging as a cost input. This treats the owner as a business operator who can price correctly, not someone who needs to cut costs." },
      { text: "There are packaging suppliers who offer restaurant-grade containers at competitive prices.", correct: false,
        feedback: "Supplier optimization helps marginally but doesn't address the fundamental math. The delivery-specific pricing model is the structural answer." },
      { text: "Customers rarely notice packaging costs in their order price — the experience offsets it.", correct: false,
        feedback: "The owner is worried about margin, not customer perception. Address the economics directly." },
      { text: "What containers are you currently using for your in-house takeout?", correct: false,
        feedback: "Discovery about packaging type is useful for suggesting alternatives, but address the pricing model first. Otherwise it sounds like you're looking for a cheaper container rather than solving the margin problem." },
    ],
  },
  mx75: {
    objection: "I've read that delivery platforms own the customer relationship and we lose our customer data.",
    responses: [
      { text: "That's a real and fair concern about platform dynamics. Here's the accurate picture: customers who order through us are our users, and we don't share their contact info directly. What you retain is your rating, your reviews, your repeat order data, and the ability to run promotions to bring customers back. The workaround many partners use is a card in every delivery bag that drives customers to their own loyalty program or newsletter. The relationship is shareable.", correct: true, technique: 'Risk Reversal',
        feedback: "You answered honestly rather than dismissing the concern — customer data does live with the platform. But you showed the real relationship assets the restaurant keeps (ratings, reviews, repeat data) and offered the practical bridge to owned customer relationships." },
      { text: "We do share aggregate customer data with our restaurant partners to help with marketing decisions.", correct: false,
        feedback: "Aggregate data is not the same as individual customer relationships. Don't overstate data sharing — be precise and honest about what is and isn't shared." },
      { text: "Building your own customer database is important — delivery is just one of many channels you'd use.", correct: false,
        feedback: "True but unhelpful as a response. The owner raised a data ownership concern — answer it directly before pivoting to a broader channel strategy." },
      { text: "What customer data are you most concerned about losing access to?", correct: false,
        feedback: "Discovery, but the owner has a principled concern about platform data ownership. Address it directly and honestly rather than narrowing it to specific data types." },
    ],
  },
  mx76: {
    objection: "Friday and Saturday nights are our most profitable hours. Delivery orders during those times would cannibalize dine-in.",
    responses: [
      { text: "That's easy to solve structurally: delivery availability can be set to off on Friday and Saturday nights. You'd run delivery Monday through Thursday when the dining room has empty tables, and enjoy your peak weekends without any competition. You don't have to be available all week — the schedule is yours to configure.", correct: true, technique: 'Incremental Logic',
        feedback: "You showed that the cannibalization concern is solved by the platform's scheduling controls. The owner can be selective about when delivery is available, protecting their most profitable periods entirely." },
      { text: "Delivery and dine-in customers often come from different populations — there's less competition than you might think.", correct: false,
        feedback: "Even if true in the aggregate, the owner is worried about their specific Friday night scenario. Solve the control concern directly rather than arguing about customer overlap." },
      { text: "You could limit delivery to a subset of your menu during peak hours to reduce kitchen pressure.", correct: false,
        feedback: "A limited menu during peak hours is a band-aid on the real concern: they don't want delivery competing with dine-in at all on weekends. Show the scheduling off option." },
      { text: "What percentage of your weekly revenue comes from Friday and Saturday?", correct: false,
        feedback: "Good data for sizing what's at stake — but ask it after showing that those nights are fully protectable, not before. Otherwise it sounds like you're quantifying what they'd be risking." },
    ],
  },
  mx77: {
    objection: "Our spice level is very specific and our customers love it. Delivery complaints about 'too spicy' will pressure us to change our recipe.",
    responses: [
      { text: "Your recipe is entirely your own — the platform never requires you to change it based on reviews. What you can do is manage expectations on the listing: a prominent spice indicator and a description note about heat level sets the right expectation before customers order. Customers who love spice will specifically seek you out; customers who don't will self-select away. Your recipe stays exactly as it is.", correct: true, technique: 'Risk Reversal',
        feedback: "You addressed both fears: recipe control (fully yours) and complaint management (handled by expectation-setting on the listing). The spice indicator is a concrete tool that prevents complaints proactively." },
      { text: "Most platforms allow you to filter and respond to reviews, so you can address spice complaints directly.", correct: false,
        feedback: "Review management is reactive; expectation-setting is proactive. Show the spice indicator solution that prevents the complaint rather than the response tools that come after it." },
      { text: "Customers who order from you once will learn your spice level — the complaint rate drops over time.", correct: false,
        feedback: "'It gets better over time' is not reassuring to someone worried about near-term complaints. Show the preventive listing tool." },
      { text: "How do you currently communicate your spice level to new dine-in customers?", correct: false,
        feedback: "Good discovery, but show the listing spice indicator first. Then ask how they currently communicate heat levels to see if the existing language can translate to the delivery listing." },
    ],
  },
  mx78: {
    objection: "We run cooking classes on weekday mornings. Delivery would conflict with that schedule.",
    responses: [
      { text: "Cooking classes in the morning and lunch delivery are different windows — there's no conflict if you open delivery after your class ends. If classes run 9am to noon, delivery starts at noon. You're in control of the availability hours. The two businesses can coexist on the same calendar without overlapping.", correct: true, technique: 'Incremental Logic',
        feedback: "You showed that the schedule concern is solved by availability windows. Two businesses running at different times don't conflict when delivery hours are set to match the available window." },
      { text: "Many restaurants run cooking classes and delivery without any operational overlap.", correct: false,
        feedback: "Generic social proof doesn't show how their specific schedule works. Draw the concrete timeline — classes end at noon, delivery starts at noon." },
      { text: "Delivery could actually support your cooking class business by exposing students to your full menu.", correct: false,
        feedback: "Cross-promotion between classes and delivery is an interesting idea, but it's a secondary benefit. Solve the scheduling conflict first." },
      { text: "How many classes do you run per week and how long do they typically run?", correct: false,
        feedback: "Good discovery for confirming the timeline — ask it as part of mapping the delivery window, not as a standalone question that makes it sound like you're auditing their schedule." },
    ],
  },
  mx79: {
    objection: "I just signed a lease extension. I'm locked in for 3 years and I'm not making any changes.",
    responses: [
      { text: "A 3-year lease is stability — that's a good position. Adding delivery doesn't change your lease, your staff, your kitchen, or your menu. It's a channel addition you can turn on, test for 30 days, and turn off if it doesn't work, all while your restaurant runs exactly as it does today. There's nothing to lock in — it's fully reversible. Would a 30-day trial that changes nothing else be worth exploring?", correct: true, technique: 'Risk Reversal',
        feedback: "You reframed the objection: the lease was about stability and commitment, and delivery is fully reversible and additive. A 30-day trial with zero structural change is the antithesis of what they're worried about." },
      { text: "Delivery is a low-commitment channel — you're not signing a long-term contract.", correct: false,
        feedback: "True but too brief. The owner's concern is about stability and change. Show specifically what doesn't change when you add delivery." },
      { text: "Three years is actually a good runway to establish a delivery presence and build your customer base.", correct: false,
        feedback: "Framing the lease as 'time to build delivery' turns their stability concern into a timeline. They said they don't want changes — address that directly." },
      { text: "What specifically about your business are you most focused on keeping stable?", correct: false,
        feedback: "This invites them to identify more reasons not to change. Show that delivery doesn't disrupt stability before asking discovery questions." },
    ],
  },
  mx80: {
    objection: "Our produce comes from a small farm 2 hours away. Supply is inconsistent — I can't guarantee menu availability.",
    responses: [
      { text: "Variable supply is exactly what the platform's menu management tools are built for. You can update item availability in real time from your phone — disable an item when you run low, re-enable it when supply returns. Customers only see what's available. You're not overpromising; you're showing exactly what you have. Many farm-to-table partners use this as a feature: 'we only have what's in season right now.'", correct: true, technique: 'Risk Reversal',
        feedback: "You showed the real-time availability tool that solves the supply inconsistency problem, and reframed the variability as an authentic brand story: farm-to-table and seasonal availability is a selling point, not a liability." },
      { text: "Most delivery customers understand that farm-fresh restaurants have seasonal variability.", correct: false,
        feedback: "Customer understanding doesn't solve the operational concern. Show the availability management tools that let you handle variability in real time." },
      { text: "You could focus your delivery menu on the most reliably available items from your farm partner.", correct: false,
        feedback: "Good menu strategy, but it doesn't address the real-time availability concern. Show the tools first, then discuss which items to prioritize." },
      { text: "How often does your supply vary week to week?", correct: false,
        feedback: "Discovery about supply frequency is useful context — but show the availability management solution first, then ask about variability to calibrate how often they'd use it." },
    ],
  },
  mx81: {
    objection: "I can't control driver reliability. One careless driver and my food reputation is on the line.",
    responses: [
      { text: "Driver accountability is tracked on our end — routes, delivery times, and customer feedback are all monitored per driver. If a driver consistently handles food poorly, they're removed. More importantly, our customer support team fields delivery complaints, not you — if a customer is upset about cold food due to a driver's detour, we issue the credit. Your reputation on the platform reflects your kitchen, not the last mile.", correct: true, technique: 'Risk Reversal',
        feedback: "You showed both the accountability mechanism (driver monitoring and removal) and the complaint liability structure (platform absorbs delivery complaints). Two fears addressed: driver quality and reputational protection." },
      { text: "Our driver ratings are publicly visible — customers can see driver quality before accepting the delivery.", correct: false,
        feedback: "Customer-visible ratings don't protect the restaurant from a bad delivery — they help customers choose, not restaurants. Show the internal accountability and complaint ownership." },
      { text: "The tamper-evident packaging we recommend significantly reduces the impact of driver handling.", correct: false,
        feedback: "Packaging helps but doesn't address driver route behavior, timing, and care. Address the full accountability structure." },
      { text: "What's been your biggest concern about delivery quality specifically?", correct: false,
        feedback: "They've told you the concern: driver reliability and reputation impact. Address those directly rather than asking for elaboration." },
    ],
  },
  mx82: {
    objection: "We're known for live mariachi on weekends. Our brand is the full experience, not just the food.",
    responses: [
      { text: "The mariachi experience is what makes a Friday night at your restaurant irreplaceable — delivery can't replicate it and doesn't try to. What delivery does is extend your food's reach to people who've heard about you but haven't come in yet. They order once, love the food, and then come in for the full experience. Delivery is your preview; the restaurant is the main event.", correct: true, technique: 'Pipeline Value',
        feedback: "You honored the full-experience brand identity while showing delivery as a discovery-to-visit conversion tool. The food becomes a teaser that drives people to experience the live, in-person version." },
      { text: "Many experience-driven restaurants do well on delivery by creating a consistent quality baseline outside the venue.", correct: false,
        feedback: "Baseline quality is a secondary concern. Address the 'food is only part of our brand' concern directly by showing delivery's role as a pipeline to the full experience." },
      { text: "You could include a discount or invitation to the live mariachi night in your delivery packaging.", correct: false,
        feedback: "Good tactic for the pipeline strategy — but introduce it after making the case for delivery as a discovery channel, not as the opening move." },
      { text: "What percentage of your customers are first-timers versus regulars?", correct: false,
        feedback: "Good discovery for the new-customer-acquisition case, but ask it after framing delivery as a discovery tool that brings first-timers in." },
    ],
  },
  mx83: {
    objection: "We do monthly ticketed supper clubs. That's our highest-margin event. Delivery would distract from it.",
    responses: [
      { text: "Supper club and delivery don't compete for the same calendar slot. Delivery runs on regular weeknights; supper club is your monthly showcase. In fact, a strong delivery presence could be the awareness engine that fills supper club seats: people try your food through delivery, follow you on social, and buy tickets for the monthly event. Delivery doesn't distract — it recruits.", correct: true, technique: 'Pipeline Value',
        feedback: "You showed a clear pipeline: delivery creates food-first relationships with people who then convert to supper club attendees. These are different products on different schedules that support each other." },
      { text: "Supper club and delivery serve different customer occasions — one doesn't affect the other.", correct: false,
        feedback: "Stating they don't conflict is not as strong as showing they actively support each other. Use the pipeline argument: delivery feeds supper club attendance." },
      { text: "You could even promote your supper club in your delivery packaging to cross-sell.", correct: false,
        feedback: "Good tactic but too early — establish the delivery-to-supper-club pipeline case first, then discuss execution tactics." },
      { text: "How do you currently market your supper clubs to find new attendees?", correct: false,
        feedback: "Discovery is useful for showing where delivery fits the marketing funnel — but make the pipeline case first before asking about their current acquisition strategy." },
    ],
  },
  mx84: {
    objection: "My accountant is worried about the tax implications of adding a new income stream.",
    responses: [
      { text: "That's a reasonable thing to work through before deciding — and it's simpler than it sounds. Platform payouts are reported on a 1099, which is standard self-employment income. Your accountant is already handling that category. If it would help, I can send the tax documentation and payout structure so your accountant can review the specifics before you make a decision.", correct: true, technique: 'Risk Reversal',
        feedback: "You validated the concern as legitimate, explained that it falls into a familiar tax category, and offered to provide the exact documentation the accountant would need. You're removing the blocker rather than minimizing it." },
      { text: "Platform income is straightforward to account for — most restaurant accountants handle it routinely.", correct: false,
        feedback: "'Routine for others' doesn't address their accountant's specific concern. Offer to provide the actual tax documentation for review." },
      { text: "The incremental tax on delivery income is typically small relative to the revenue it generates.", correct: false,
        feedback: "Framing tax as 'small' on something an accountant is concerned about sounds dismissive. Address the concern respectfully and offer to provide documentation." },
      { text: "What specific tax concern is your accountant most worried about?", correct: false,
        feedback: "You don't need to probe the tax concern further — offer to send the tax documentation and payout structure directly. That resolves most accountant concerns concretely." },
    ],
  },
  mx85: {
    objection: "I'm the only cook. If I'm overwhelmed, quality drops for everyone — dine-in and delivery.",
    responses: [
      { text: "Being the only cook makes capacity your hardest constraint — and that's where scheduling control matters most. The right model is delivery only during windows when dine-in is quiet: maybe 3–5pm, or Tuesday and Wednesday lunch when the dining room has empty tables. You'd be filling dead time, not stacking on top of a full house. Want to map your slowest windows and see if any make sense?", correct: true, technique: 'Incremental Logic',
        feedback: "You respected the single-cook constraint completely and proposed the only model that makes sense: delivery during genuinely quiet windows, not during busy service. The focus on idle capacity is the honest and correct frame." },
      { text: "Many solo operators manage delivery by batching similar orders together.", correct: false,
        feedback: "Batching tips are operational advice for someone who's already committed to delivery. Address the capacity concern first — is there a window where delivery doesn't compete with dine-in?" },
      { text: "You could set a low daily cap so orders stay manageable.", correct: false,
        feedback: "A cap helps control volume but doesn't solve the core problem: if the dining room is full, even one delivery order is a problem. Identify the quiet window first." },
      { text: "What are your quietest hours during the week?", correct: false,
        feedback: "Right discovery — ask it in the context of mapping the delivery-viable window. 'Let's find your quiet windows and see if delivery works there' is more purposeful than a standalone question." },
    ],
  },
  mx86: {
    objection: "Our dish names are in Spanish. I've seen platforms that display them incorrectly or butcher the accents.",
    responses: [
      { text: "You have full control over how your items appear on the listing — the Spanish name, the accented characters, the description. What you type is exactly what displays. If you've seen other restaurants with incorrect display, that came from how the listing was entered, not a platform limitation. I can walk through the entry process with you to make sure everything looks right from the start.", correct: true, technique: 'Risk Reversal',
        feedback: "You separated the platform capability from what was likely a setup error by other restaurants. Offering to walk through the entry process together shows you'll make sure it's done correctly rather than leaving it to chance." },
      { text: "Our platform fully supports Unicode characters, including all Spanish diacritical marks.", correct: false,
        feedback: "Technical capability alone doesn't reassure someone who has seen failures with other restaurants. Show them the control they have over their own listing entry." },
      { text: "You can review your listing before it goes live to confirm everything displays correctly.", correct: false,
        feedback: "Preview capability is helpful but reactive. Offer to walk through the setup with them so they don't have to discover errors after the fact." },
      { text: "What are the dish names you're most concerned about?", correct: false,
        feedback: "Discovery is useful for setup, but address the display control concern first. Then asking about specific dish names makes sense as part of the setup walkthrough." },
    ],
  },
  mx87: {
    objection: "We've invested heavily in a beautiful patio. Our goal is to drive people to experience it in person.",
    responses: [
      { text: "A beautiful patio is a reason to come in — delivery can be the thing that makes people want to. The person who orders your enchiladas on a Wednesday night, loves them, and then sees your patio photos in the app is exactly the customer who books a Friday table. Delivery builds the desire; the patio closes it. Food discovery on the platform and in-person experience aren't competing — they're consecutive.", correct: true, technique: 'Pipeline Value',
        feedback: "You showed the discovery-to-dine-in pipeline: delivery creates desire, the patio experience delivers on it. The patio photos in the app listing actually become a marketing asset for in-person visits." },
      { text: "Many outdoor dining restaurants use delivery to extend their reach beyond foot traffic.", correct: false,
        feedback: "Generic reach argument doesn't address the in-person experience goal. Show how delivery drives in-person visits, not just revenue." },
      { text: "You could feature your patio prominently in your delivery listing photos to drive in-person interest.", correct: false,
        feedback: "Good tactic — but introduce it after making the pipeline case. The owner needs to see delivery as a path to in-person visits before the photo strategy makes sense." },
      { text: "What does the patio experience look like during peak season?", correct: false,
        feedback: "Discovery that could inform the seasonal delivery strategy — but ask it after making the case that delivery drives patio traffic, not as an opener." },
    ],
  },
  mx88: {
    objection: "We run a nonprofit meal program for families in need. Our margins are already thin and we can't afford to experiment.",
    responses: [
      { text: "That context matters — you're already operating on a mission, not a margin. The case for delivery here is whether it generates unrestricted revenue that supports the mission: a paying delivery customer funds another meal in the program. Many mission-driven kitchens use commercial delivery as cross-subsidy. If the math doesn't work at your cost structure, I'll respect that — but let's run it honestly.", correct: true, technique: 'Incremental Logic',
        feedback: "You honored the mission context and reframed delivery as a potential cross-subsidy mechanism rather than a commercial experiment. Offering to run the math honestly — including acknowledging it might not work — builds trust with a mission-driven operator." },
      { text: "Many nonprofits run commercial food operations to fund their programs — delivery is a natural extension.", correct: false,
        feedback: "Social proof from other nonprofits is less important than running the actual numbers for their specific operation. Offer to model the math honestly." },
      { text: "The incremental revenue from delivery could expand your program's capacity.", correct: false,
        feedback: "True in theory, but to someone with thin margins who is worried about risk, this sounds optimistic without substance. Offer to run the actual math rather than asserting the outcome." },
      { text: "What does your current cost structure look like for the commercial versus nonprofit side?", correct: false,
        feedback: "Good question for modeling purposes — but ask it in the context of 'let me run the math honestly with you' rather than as a standalone discovery question." },
    ],
  },
  mx89: {
    objection: "I'm planning to sell the restaurant in 2 years. I don't want to complicate the books with a new channel.",
    responses: [
      { text: "A sale in 2 years is actually one of the stronger cases for adding delivery now. Buyers value demonstrated multi-channel revenue — a business that earns through both dine-in and delivery has a more resilient revenue profile and typically commands a higher multiple than a single-channel operation. Clean platform payouts show up as a separate, trackable revenue line, which simplifies valuation, not complicates it.", correct: true, technique: 'Pipeline Value',
        feedback: "You reframed delivery from a complication to a value-building move before a sale. Multi-channel revenue is a valuation asset, and platform payouts are cleanly trackable — both arguments address the sale-readiness concern directly." },
      { text: "Adding delivery now gives you 2 years to build a strong track record that buyers will value.", correct: false,
        feedback: "Closer to the right answer but stated without the valuation logic. Explain why multi-channel revenue improves the sale outcome specifically." },
      { text: "Platform payouts are straightforward to track and report — they don't complicate your accounting.", correct: false,
        feedback: "Accounting simplicity is true but not the strongest argument for someone preparing a business for sale. The valuation improvement is the more compelling case." },
      { text: "Are you working with a broker for the sale, or planning to handle it directly?", correct: false,
        feedback: "Discovery about the sale process is interesting but takes the conversation away from the delivery decision. Make the valuation case first." },
    ],
  },
  mx90: {
    objection: "Delivery apps attract one-time customers. I need repeat regulars, not transactional strangers.",
    responses: [
      { text: "Repeat rates on delivery are higher than most people expect — customers who find a restaurant they love through an app return at rates comparable to walk-in discovery. And some of your delivery customers will become dine-in regulars: they order once, love your food, and come in to try the full experience. The 'transactional stranger' becomes a regular through the same path your current regulars used — they just found you differently.", correct: true, technique: 'Reframing',
        feedback: "You challenged the assumption that delivery customers are inherently transactional and showed the plausible path from first delivery order to loyal regular. The mechanism for becoming a regular doesn't change — discovery and quality still drive it." },
      { text: "Many of our restaurant partners report that a significant portion of delivery customers convert to regulars.", correct: false,
        feedback: "Conversion data needs to be specific to be convincing. The stronger argument is the behavioral logic: how delivery customers become regulars through the same quality-driven path as dine-in customers." },
      { text: "You could run a loyalty program that rewards repeat delivery orders to build that relationship.", correct: false,
        feedback: "Loyalty mechanics are secondary to showing that delivery customers can become genuine regulars. Address the assumption about transactional customers first." },
      { text: "What does your current customer acquisition path look like for dine-in regulars?", correct: false,
        feedback: "Good discovery for showing that delivery fits the same pattern — but make the reframing argument first, then ask about their existing acquisition path to show how delivery mirrors it." },
    ],
  },
  mx91: {
    objection: "My brother-in-law is building us an app. We're going to do ordering ourselves.",
    responses: [
      { text: "An owned ordering app is a great long-term asset — and it's not in conflict with Uber Eats. Your app will serve customers who already know you and choose to download it. Uber Eats puts you in front of people who are searching for food right now and have never heard of you. By the time your app launches, the customers who discover you on the platform may be ready to switch to your owned experience.", correct: true, technique: 'Channel Separation',
        feedback: "You respected the owned-app investment while showing the audience difference clearly. The platform is a new-customer discovery tool; the owned app is a loyalty tool for known customers. Both serve different moments and can coexist." },
      { text: "Building your own app is expensive and slow — a platform gets you to market much faster.", correct: false,
        feedback: "Criticizing the brother-in-law's project is likely to create defensiveness. Honor the initiative and show how the two channels complement each other." },
      { text: "Most restaurant apps struggle with discoverability — you'll still need a platform for new customers.", correct: false,
        feedback: "While true, 'most apps struggle' sounds like you're dismissing their plan. Show the channel separation logic — owned app serves known customers, platform acquires new ones — without criticizing their approach." },
      { text: "When is the app expected to launch?", correct: false,
        feedback: "Discovery about the timeline is interesting, but address the channel relationship first. Once they see the two channels as complementary, the timeline question becomes relevant for sequencing." },
    ],
  },
  mx92: {
    objection: "We already partner with a local food hall that handles all our digital ordering.",
    responses: [
      { text: "A food hall partnership is a great channel for the customers who are in that ecosystem. What Uber Eats adds is reach outside of it: the customer who isn't browsing the food hall platform but is searching 'Mexican food near me' on their phone. If your food hall coverage is local and curated, the platform opens the broader market that sits outside that audience.", correct: true, technique: 'Channel Separation',
        feedback: "You showed a clear audience distinction between the food hall's existing user base and Uber Eats' broader, intent-driven search audience. Two different populations, neither cannibalizing the other." },
      { text: "Many restaurants partner with local food halls and delivery platforms simultaneously.", correct: false,
        feedback: "Social proof doesn't explain the value of adding another channel. Show the distinct audiences each channel reaches." },
      { text: "Food hall platforms are often limited to a specific area or user base — Uber Eats has much broader reach.", correct: false,
        feedback: "Positioning the food hall as 'limited' sounds like you're criticizing their current partner. Show the additional audience Uber Eats reaches rather than diminishing the food hall's value." },
      { text: "How does the food hall handle digital ordering — do you get customer data from it?", correct: false,
        feedback: "Good discovery for the data ownership discussion — but make the audience separation case first before probing their current partnership structure." },
    ],
  },
  mx93: {
    objection: "We host private events every Friday night. I can't guarantee availability for delivery that day.",
    responses: [
      { text: "Friday night is easy to protect: delivery availability is off that day, every week, automatically. You set the schedule once and it runs without you managing it. The other six days — and specifically your slower mid-week windows — are the opportunity. You'd be generating revenue on Monday through Thursday without touching your Friday event business.", correct: true, technique: 'Incremental Logic',
        feedback: "You showed that protecting Friday is trivially easy with availability scheduling, then redirected to the real opportunity: the rest of the week. This turns a 'I can't guarantee Friday' into 'Friday stays completely protected.'" },
      { text: "Many event venues manage delivery availability by toggling it off on event days.", correct: false,
        feedback: "'Many venues manage it' is generic. Show the specific scheduling control and then map the available days." },
      { text: "Delivery orders could actually fill capacity on non-event days you're not fully utilizing.", correct: false,
        feedback: "True, but state it after showing that Friday is fully protected. The concern was about Friday specifically — solve that first." },
      { text: "How often do private events occupy your space versus regular service?", correct: false,
        feedback: "Good discovery for mapping delivery windows — ask it after confirming Friday is protected, as part of 'let's look at which days make sense for delivery.'" },
    ],
  },
  mx94: {
    objection: "We're on a pedestrian-only street. Drivers can't park near us for pickup.",
    responses: [
      { text: "That's a real logistics question — and the solution most partners in similar locations use is a designated pickup spot on the nearest accessible street, clearly mapped in your listing. Drivers navigate to that point, you walk the order out or have it ready at the boundary. It adds 30 seconds to the process. Many great restaurants are in hard-to-reach locations; clear pickup instructions solve it. Want to see how others in similar spots handle it?", correct: true, technique: 'Social Proof',
        feedback: "You acknowledged the real access issue and offered a practical, proven solution: a mapped pickup location at the accessible street boundary. Showing that other restaurants in similar locations have solved this removes the uniqueness of the barrier." },
      { text: "Drivers are very experienced with city navigation — they'd figure out the best pickup approach.", correct: false,
        feedback: "Relying on driver ingenuity for a predictable access problem will result in inconsistent pickups. A clear, mapped solution is better than hoping drivers improvise well." },
      { text: "We could map your location with a note for drivers about the pedestrian zone.", correct: false,
        feedback: "A driver note is part of the solution, but incomplete. Show the full mapped-pickup-location approach that includes street-level instructions." },
      { text: "How far is the nearest accessible street from your entrance?", correct: false,
        feedback: "Good logistics question — ask it as part of 'let's set up a pickup point at the nearest accessible spot' rather than as a standalone question that leaves the problem open." },
    ],
  },
  mx95: {
    objection: "I tried delivery for 3 months. Revenue went up but net profit went down.",
    responses: [
      { text: "That's the most important data point in this conversation — and I respect you for tracking it. The net profit decline usually comes from one of three places: packaging costs not priced in, labor added to manage orders, or platform-priced menu items not covering fees. If I can understand which one hit you, there's likely a structural fix — repriced delivery menu, packaging strategy, or scheduling adjustment. Would you be willing to walk through the math with me?", correct: true, technique: 'Hyperlocal Data',
        feedback: "You validated the experience and took it seriously without dismissing it. Then you offered a diagnostic: there are identifiable causes and specific fixes. The invitation to walk through the math together shows confidence in finding the real issue." },
      { text: "The profitability challenge is common in the first few months — it often improves as volume scales.", correct: false,
        feedback: "Telling someone who ran the numbers that it 'gets better' is patronizing. Engage with the actual math and look for the specific cause." },
      { text: "Many restaurants find they need to adjust their delivery pricing strategy to reach profitability.", correct: false,
        feedback: "Too vague to be helpful. Identify the three specific causes of delivery profit decline and offer to diagnose which one affected them." },
      { text: "What was your average delivery order value versus your in-house check size?", correct: false,
        feedback: "Good diagnostic question — but only after showing that you're taking the profit concern seriously and have a framework for finding the root cause. Ask it as part of 'let me walk through the math with you.'" },
    ],
  },
  mx96: {
    objection: "Our customers are very vocal on social media. One logistics incident could go viral and destroy us.",
    responses: [
      { text: "A vocal customer base is a strength — and it's also why our complaint ownership structure matters here. Delivery logistics complaints — cold food, wrong item, late arrival — are handled by our support team and don't appear as restaurant reviews on your profile. If something goes wrong in the last mile, we own the resolution. What your vocal customers share is your food quality, which you control completely.", correct: true, technique: 'Risk Reversal',
        feedback: "You separated last-mile logistics failures (platform-owned) from food quality (restaurant-owned), and showed that the review system reflects the latter. A viral complaint about a driver's GPS error doesn't attach to the restaurant's rating." },
      { text: "Vocal customers actually make delivery work better — negative feedback helps platforms improve quickly.", correct: false,
        feedback: "Framing vocal customers as helpful for the platform sounds dismissive of the owner's fear. Address the liability structure directly." },
      { text: "You could monitor social media mentions and respond quickly to any delivery-related issue.", correct: false,
        feedback: "Reactive social monitoring is a mitigation tool, not a structural protection. Show who owns the delivery complaints before discussing response tactics." },
      { text: "What types of social posts are you most worried about?", correct: false,
        feedback: "They've told you their fear: a logistics incident going viral. Address the complaint ownership structure that prevents that from attaching to your restaurant directly." },
    ],
  },
  mx97: {
    objection: "I don't want delivery tablets distracting my staff during busy dinner service.",
    responses: [
      { text: "Dinner service stays yours: delivery availability can be turned off during your busiest hours. Many partners run delivery only in the 2–4 hours before dinner rush — the kitchen is prepped, staff are ready, and there's no competition with dine-in. When service starts, delivery pauses automatically. Your team never has to manage two things at once during peak.", correct: true, technique: 'Incremental Logic',
        feedback: "You showed that the distraction concern is solved by scheduling: delivery runs before dinner rush, pauses when service starts. No split attention, no competing priorities — the problem is structurally eliminated." },
      { text: "Our tablet interface is designed to minimize interruption — it integrates with your existing kitchen display.", correct: false,
        feedback: "Integration efficiency is helpful but doesn't address the peak-hours concern. Show the scheduling solution that turns delivery off during busy service entirely." },
      { text: "Many restaurants manage both delivery and dine-in smoothly during service with good systems.", correct: false,
        feedback: "'Good systems' is vague and doesn't reassure someone who knows their staff well. Show the concrete schedule control that removes the conflict entirely." },
      { text: "What are your busiest service hours?", correct: false,
        feedback: "Good discovery — ask it as part of 'let me set the delivery hours around your busy service windows' so it leads directly to a scheduling solution." },
    ],
  },

  // ── SAKURA QUARTER (EXTENDED) ───────────────────────────────────────────────
  jp01: {
    objection: "Our ingredients are imported from Japan. The cost per dish is too high for delivery platform pricing.",
    responses: [
      { text: "Premium ingredients mean premium pricing — and you'd set your own prices on our platform. We don't cap or prescribe what you charge. Some of the highest-priced restaurants in your category are on Uber Eats because the customers looking for them expect to pay.",
        correct: true, technique: 'Control Framing',
        feedback: "You separated their pricing concern from the platform itself — you control the menu price, not the platform. This removes the fear that they'd have to cheapen the offering to be competitive." },
      { text: "Premium delivery customers actually expect to pay more — your pricing would be fine.", correct: false,
        feedback: "Assuming 'premium delivery customers exist' without evidence doesn't address the structural pricing concern. Show them they set the price." },
      { text: "We could explore a custom pricing arrangement that accounts for your higher ingredient costs.", correct: false,
        feedback: "Implying the standard model doesn't work and you'd need a special deal signals the platform may not be right for them. Show the standard model works first." },
      { text: "What's your average price per dish? I want to see how it compares to similar restaurants on the platform.", correct: false,
        feedback: "Asking for their pricing before affirming they control it on the platform sounds like you're auditing whether they fit the model." },
    ],
  },
  jp02: {
    objection: "Our packaging is part of the presentation — lacquerware, ceramic bowls, custom wrapping. We'd have to redesign everything.",
    responses: [
      { text: "A lot of upscale partners have built a separate delivery presentation that's distinct from the dining room but still premium — custom branded boxes, sake packaging, seasonal elements. You'd be creating a delivery identity, not compromising the original one.",
        correct: true, technique: 'Premium Positioning',
        feedback: "You reframed the packaging challenge as a creative opportunity rather than an obstacle. A separate delivery identity can be its own premium expression — it doesn't have to mimic or compromise the dining room experience." },
      { text: "You could use simpler packaging for delivery and keep the lacquerware for dine-in.", correct: false,
        feedback: "Suggesting they simplify packaging to accommodate delivery implies a quality downgrade. For a brand-obsessed chef, that's confirmation delivery is the wrong move." },
      { text: "Most customers order for the food, not the packaging — presentation matters less for delivery.", correct: false,
        feedback: "Telling an omakase chef that presentation doesn't matter for delivery is a fundamental misunderstanding of their brand philosophy." },
      { text: "What does your current packaging cost per cover?", correct: false,
        feedback: "Packaging economics are relevant but secondary. Address the design and brand identity concern before introducing cost analysis." },
    ],
  },
  jp03: {
    objection: "We just received a Michelin mention. Adding delivery now would signal to the critics that we've compromised.",
    responses: [
      { text: "A Michelin mention is exceptional — and critics evaluate dine-in exclusively. What you do with delivery is entirely separate from how they assess you. Several Michelin-recognized restaurants have built delivery programs that critics don't touch because they're clearly framed as secondary extensions, not replacements.",
        correct: true, technique: 'Premium Positioning',
        feedback: "You separated the two worlds precisely: Michelin only evaluates the dine-in experience. What you do on delivery can't affect that assessment if it's clearly positioned as a separate product." },
      { text: "Many Michelin restaurants are on delivery platforms — it's becoming normalized even at that level.", correct: false,
        feedback: "Normalization arguments don't work for someone trying to stand apart from the norm. They got the mention precisely by not doing what everyone else does." },
      { text: "You could announce the delivery as a limited, exclusive offering to frame it as intentional.", correct: false,
        feedback: "Good positioning idea, but it comes before you've addressed their core fear about critical perception. Resolve that first." },
      { text: "What would a critic need to see to feel you hadn't compromised?", correct: false,
        feedback: "Good discovery in principle, but asking before showing critics don't evaluate delivery implies they might. Clarify that first." },
    ],
  },
  jp04: {
    objection: "I can't get behind something my head chef disagrees with. He's the heart of this restaurant.",
    responses: [
      { text: "He's the right person to convince then — not you. Could I speak with him directly, or would it help if I came in and showed him exactly how delivery would be structured? I want to understand what his specific concerns are and address them at the source.",
        correct: true, technique: 'Stakeholder Navigation',
        feedback: "You respected the chef's authority in the kitchen and volunteered to engage with the actual decision-maker rather than going around them. Trying to sell the owner over the chef's objection would create lasting friction." },
      { text: "Many chefs are initially skeptical and come around once they see how little it disrupts the kitchen.", correct: false,
        feedback: "Dismissing a specific chef's concern with 'most chefs come around' doesn't engage with what he actually objects to." },
      { text: "What specifically does your chef disagree with — quality, brand, or operations?", correct: false,
        feedback: "Good question, but only after you've shown you want to talk to him directly. This question suggests you'll work around him with information rather than with him." },
      { text: "The chef doesn't typically need to be involved in the business side of these decisions.", correct: false,
        feedback: "Undermining the chef's role in a restaurant where the owner just said he's the heart of the place will destroy the relationship before it starts." },
    ],
  },
  jp05: {
    objection: "We have a 3-month waitlist for omakase seats. We have more demand than we can handle. Why add complexity?",
    responses: [
      { text: "A waitlist like that is rare — and delivery wouldn't touch those seats. It's a different product: a curated set of premium items for the customer who can't wait three months but wants a taste. You'd be capturing demand you're currently turning away entirely.",
        correct: true, technique: 'Premium Positioning',
        feedback: "You validated the exclusivity of the waitlist completely and showed delivery as serving a completely different demand — not waitlist overflow, but the customer who would never wait and currently has no access to you at all." },
      { text: "With a three-month waitlist, you're leaving a lot of potential revenue untapped.", correct: false,
        feedback: "Framing it as 'untapped revenue' to someone who's intentionally exclusive can feel like pressure to commercialize what they've kept curated." },
      { text: "You could create a waitlist for delivery too — limited drops of premium items.", correct: false,
        feedback: "Interesting idea, but it comes before showing you understand their exclusivity model. Lead with how delivery doesn't touch the core experience." },
      { text: "What does the typical waitlist customer look like for you?", correct: false,
        feedback: "Good discovery, but ask it as part of the 'delivery reaches a different customer' argument, not as an opening question." },
    ],
  },
  jp06: {
    objection: "Uber Eats fees would come out of dishes we've priced to the cent based on ingredient and labor costs.",
    responses: [
      { text: "The delivery price and the dine-in price don't have to match. Most partners set a modest premium on delivery items to account for the fee, and customers ordering at home expect to pay slightly more. Your dine-in pricing stays exactly as calculated.",
        correct: true, technique: 'Incremental Margin Logic',
        feedback: "You gave a specific, practical solution: delivery menus can be priced differently. The dine-in costing stays intact; delivery pricing reflects the different channel economics." },
      { text: "You'd be paying the fee on orders you wouldn't otherwise have — so your current cost structure isn't really affected.", correct: false,
        feedback: "Incremental revenue logic is correct but incomplete here. Telling a precision-priced chef that the fee 'doesn't affect' their structure dismisses a legitimate detail concern." },
      { text: "We can look at our fee structure for high-average-ticket restaurants in your category.", correct: false,
        feedback: "Discussing fee negotiation before explaining the pricing flexibility implies the standard model doesn't work. Show the model works first." },
      { text: "How did you arrive at your current pricing structure?", correct: false,
        feedback: "Good respect for their methodology, but asking about it before offering a solution sounds like you're preparing to challenge it." },
    ],
  },
  jp07: {
    objection: "Sashimi, chilled sake, live-fire dishes — none of our signature items travel well. Delivery would be serving a diminished product.",
    responses: [
      { text: "You're right that those dishes shouldn't be on delivery — and nobody's saying they should be. Some of the most successful delivery menus from upscale Japanese restaurants are entirely different: premium bento, chilled appetizers, sake pairings designed for home. Curate for the channel, not against it.",
        correct: true, technique: 'Social Proof + Solution',
        feedback: "You validated the quality concern completely and then offered a credible alternative framework. A delivery-specific menu curated for the channel is a creative solution that doesn't compromise the core brand." },
      { text: "The right packaging and temperature control can extend the viability of most dishes.", correct: false,
        feedback: "Don't tell a sashimi expert their product travels well. Accept the constraint and pivot to what can work." },
      { text: "You could limit delivery to specific days or items that you know hold up.", correct: false,
        feedback: "Limiting by availability is a reasonable operational approach, but it still implies the quality issue exists. Lead with the curated menu concept instead." },
      { text: "What items do you think could translate to delivery without quality issues?", correct: false,
        feedback: "Good brainstorming question, but lead with the curated menu concept first so the question feels like refinement rather than asking them to solve the problem." },
    ],
  },
  jp08: {
    objection: "We don't want to be associated with the 'order food drunk after midnight' crowd. It's not our demographic.",
    responses: [
      { text: "That's a fair brand concern — and you'd set your own hours on the platform. If you want to be visible only during dinner service hours to align with your normal guest profile, that's exactly what the settings allow.",
        correct: true, technique: 'Control Framing',
        feedback: "You took the brand protection concern seriously and showed a concrete control mechanism. Being on the platform doesn't mean being available at 2am — they define exactly when they're visible." },
      { text: "The late-night delivery demographic is actually quite different from what you might expect.", correct: false,
        feedback: "Telling a brand-conscious restaurateur they're wrong about their own demographic instincts dismisses a legitimate concern." },
      { text: "Premium restaurants generally see most delivery orders during normal dining hours.", correct: false,
        feedback: "'Generally' isn't control. Show them the tool they'd use to set their own hours." },
      { text: "What does your typical guest profile look like?", correct: false,
        feedback: "Good discovery eventually, but lead with the control mechanism first — they can tailor their platform presence to any demographic profile they choose." },
    ],
  },
  jp09: {
    objection: "We only seat 12. The kitchen is designed for that volume. Adding delivery orders would break the operation.",
    responses: [
      { text: "A 12-seat kitchen should never be overwhelmed by delivery — and it won't be if you set a low order cap. You'd control exactly how many delivery orders come in per hour, so the kitchen output stays within the same range it runs at now.",
        correct: true, technique: 'Capacity Planning',
        feedback: "You matched the small-format kitchen concern with the specific tool that solves it. Order caps are designed exactly for this — small, high-quality operations that can't and shouldn't absorb unlimited volume." },
      { text: "Delivery orders are usually spaced out — they rarely all come in at once.", correct: false,
        feedback: "'Usually' isn't reassurance for a high-precision kitchen where one extra order at the wrong time can affect every dish." },
      { text: "You could designate one person on the delivery station so the omakase kitchen stays clean.", correct: false,
        feedback: "Suggesting they staff a delivery station implies significantly more volume and operational complexity than a 12-seat restaurant should take on." },
      { text: "What's the maximum number of covers your kitchen can run simultaneously?", correct: false,
        feedback: "Good operational discovery, but ask it after showing you have a volume control tool — otherwise it sounds like you're probing for capacity you want to fill." },
    ],
  },
  jp10: {
    objection: "We've just finished a major renovation. We want to focus entirely on the dine-in experience for at least a year.",
    responses: [
      { text: "A post-renovation focus period makes complete sense — you want the dining room to land exactly right first. We can set everything up now with zero obligation to go live until you say so. The account, menu, and settings are ready when you want them.",
        correct: true, technique: 'Pipeline Value',
        feedback: "You accepted the timing completely and offered a setup-now-launch-later path that removes all pressure. When the renovation focus period ends, they're ready to go immediately rather than starting the process from scratch." },
      { text: "A delivery launch is a good way to generate buzz post-renovation.", correct: false,
        feedback: "This conflicts directly with what they told you they want to focus on. Accept their timeline; don't argue for a different one." },
      { text: "Even a soft launch on delivery could help cover renovation costs over time.", correct: false,
        feedback: "Linking delivery to renovation finances is speculative and may feel opportunistic. Accept the focus decision and offer a path for later." },
      { text: "When do you think you'll be ready to think about new channels?", correct: false,
        feedback: "Open-ended future questions leave nothing concrete behind. The setup-now-launch-later offer keeps momentum without pressure." },
    ],
  },
  jp11: {
    objection: "We'd need to hire someone just to manage delivery operations. We're already running lean.",
    responses: [
      { text: "The platform is designed to run itself — orders auto-accept, route to the kitchen printer, and we handle the delivery logistics. Most partners with small teams spend about 5 minutes a day on it. There's no delivery manager role to create.",
        correct: true, technique: 'Effort Minimization',
        feedback: "You challenged the assumption that delivery requires a new hire with a concrete description of the actual workflow. The platform handles what a dedicated person would otherwise do." },
      { text: "You could start with just a few items and expand once you're comfortable with the volume.", correct: false,
        feedback: "A smaller menu doesn't address the operational management concern. Show that management is handled by the platform." },
      { text: "Our onboarding specialist would get everything set up — you wouldn't need to hire for setup.", correct: false,
        feedback: "Onboarding covers setup, not ongoing operations. Their concern is the day-to-day management burden." },
      { text: "What would a delivery manager role look like in your operation?", correct: false,
        feedback: "If they think they need to hire someone, asking them to design the role deepens the assumption that a hire is required. Remove that assumption first." },
    ],
  },
  jp12: {
    objection: "We never discount. Not once in twelve years. If the platform requires promotions, we're not interested.",
    responses: [
      { text: "Promotions on our platform are entirely optional — you'd never be required to run one. Plenty of our restaurant partners don't discount at all and perform well on brand and quality alone. Your twelve-year policy stays intact.",
        correct: true, technique: 'Control Framing',
        feedback: "You directly addressed a non-negotiable value with a direct, honest answer. They have a clear line — confirm it's not crossed and the objection is resolved." },
      { text: "Promotional campaigns can actually increase brand visibility even if you keep prices at full rate.", correct: false,
        feedback: "Mentioning promotional campaigns at all, even in a nuanced way, keeps the discount fear alive. Give a clean 'you never have to discount' answer." },
      { text: "We could look at non-monetary promotions — like sponsored placement instead of price cuts.", correct: false,
        feedback: "Introducing any form of promotional spend before they've asked about it adds a new concern. Answer the discount question cleanly first." },
      { text: "What's the reasoning behind the no-discount policy — brand protection or margin?", correct: false,
        feedback: "Good discovery for deepening the relationship, but asking why they have a policy they've held for twelve years can feel like you're looking for a way around it." },
    ],
  },
  jp13: {
    objection: "I worry the app profile will look generic. We've invested heavily in our brand identity.",
    responses: [
      { text: "Your profile on the platform is yours to build — custom photos you control, your own description, your story. We can also feature you in curated editorial placements that match your positioning. It doesn't have to look like a standard listing.",
        correct: true, technique: 'Control Framing',
        feedback: "You showed they own their brand expression on the platform and gave a concrete example of how it can be elevated beyond a standard listing. Brand investment doesn't have to look generic." },
      { text: "Most high-end restaurants look great on our platform when they take the time to build out the profile.", correct: false,
        feedback: "'Most restaurants look great' implies it's a function of effort, not platform capability. Show the specific tools they'd have." },
      { text: "Your 4-star reviews would speak for themselves regardless of how the profile looks.", correct: false,
        feedback: "Deflecting from the branding concern to the review stars misses the point. They care about how the brand is presented, not just the rating." },
      { text: "Do you have a brand guide I could look at before we talk about profile setup?", correct: false,
        feedback: "Good partnership instinct, but asking for materials before showing the platform can accommodate their brand standards puts the cart before the horse." },
    ],
  },
  jp14: {
    objection: "We've been considering building our own delivery and subscription service for our VIP customers.",
    responses: [
      { text: "A VIP subscription is a strong owned channel and worth building. Uber Eats serves a completely different customer — the one who doesn't know you yet, not your VIP list. The two can coexist: your subscription handles depth with existing clients; Uber Eats handles breadth with new discovery.",
        correct: true, technique: 'Complementary Positioning',
        feedback: "You validated the VIP subscription as a legitimate strategy and positioned Uber Eats as serving a completely different purpose. No conflict — both channels serve distinct audiences." },
      { text: "Building a proprietary delivery service is expensive and complex — Uber Eats is ready immediately.", correct: false,
        feedback: "Arguing against their owned channel strategy creates resistance. Show they can have both, not that one is better than the other." },
      { text: "Once your VIP subscription is live, Uber Eats could feed it with new discovery customers.", correct: false,
        feedback: "Interesting positioning, but positioning Uber Eats as a feeder to their own channel makes it sound secondary. Both channels have independent value." },
      { text: "Where are you in the development of the VIP subscription?", correct: false,
        feedback: "Good discovery eventually, but ask it after validating that both strategies can coexist, so it doesn't sound like you're probing for a blocker." },
    ],
  },
  jp15: {
    objection: "My business partner is based in Tokyo. Any major decision requires a video call with her involved.",
    responses: [
      { text: "Absolutely — this is a decision worth making together. I can send both of you a summary package so you're looking at the same information, and I'm happy to join a call that works across the time zones. What's the best way to schedule that?",
        correct: true, technique: 'Stakeholder Navigation',
        feedback: "You respected the partnership structure immediately and offered a practical solution for the time zone challenge. Making the Tokyo partner part of the conversation rather than an obstacle removes friction and builds trust." },
      { text: "Could you walk her through the materials yourself after our conversation?", correct: false,
        feedback: "Asking them to relay your pitch introduces information loss and puts the burden on them. Offer to communicate directly with both parties." },
      { text: "I can set up an async presentation she can review in her timezone.", correct: false,
        feedback: "Good idea, but pair it with the offer to join a live call. Async alone doesn't give her the chance to ask questions." },
      { text: "Is there anything you could approve on your own while the larger decision is pending?", correct: false,
        feedback: "Trying to move forward while bypassing a named partner undermines trust with both decision-makers. Always work within the process they've described." },
    ],
  },
  jp16: {
    objection: "We don't believe in moving fast. Every change here takes months of consideration and testing.",
    responses: [
      { text: "That's a philosophy I respect — and it fits well with our pilot option. You'd join, set very conservative parameters, run a handful of orders, observe the result over 60 days, and decide from data rather than a pitch. No pressure to scale until you choose to.",
        correct: true, technique: 'Risk Reversal',
        feedback: "You matched their deliberate culture with a deliberate entry path. Offering a low-volume, observational pilot aligns with how they make every decision — it meets them where they are." },
      { text: "Delivery is one of the lower-risk changes you could make — it doesn't affect operations much.", correct: false,
        feedback: "Minimizing the significance of a decision to someone who takes all decisions seriously is dismissive. Match their seriousness." },
      { text: "Most restaurants go live within a week — you could always adjust from there.", correct: false,
        feedback: "'Most restaurants go live in a week' implies speed they've just told you they don't operate at. Don't normalize their pace out of existence." },
      { text: "What does your typical evaluation process look like for a new vendor?", correct: false,
        feedback: "Good discovery, but ask it after showing you have a low-risk pilot option. Without that, the question sounds like you're looking for a timeline to push against." },
    ],
  },
  jp17: {
    objection: "We're worried a bad delivery experience — even once — will end up on social media and hurt us permanently.",
    responses: [
      { text: "That fear is legitimate for a restaurant with a curated reputation. What I can show you is our error policy — delivery-attributed complaints are flagged and handled by us so they don't land on your profile. And your starting visibility is limited enough that any early issues are contained while you build. Would it help to see the specific policy document?",
        correct: true, technique: 'Risk Reversal',
        feedback: "You validated a serious and specific fear, described the protection mechanism, and offered concrete evidence (the policy document). Transparency about risk management is more reassuring than 'it won't happen.'" },
      { text: "Delivery errors are rare — and responding quickly to any issue usually contains the social media risk.", correct: false,
        feedback: "'Rare' and 'usually' don't reassure a brand that cannot afford to be associated with a bad experience. Show the structural protection." },
      { text: "Most negative delivery reviews are short-term — they get buried over time.", correct: false,
        feedback: "Suggesting social media damage 'gets buried' to a restaurant that's spent years building a curated reputation is likely to feel cavalier." },
      { text: "Do you actively monitor your social mentions right now?", correct: false,
        feedback: "Good ongoing discovery, but asking about their social listening before addressing the structural risk sounds like you're assessing how much damage they could absorb." },
    ],
  },

  jp18: {
    objection: "Japanese cuisine is about precision and presentation. Delivery destroys the plating.",
    responses: [
      { text: "Plating for delivery is a different craft than plating for dine-in — and Japanese restaurants have led the industry in solving it. Compartmentalized bento-style packaging, sauce inserts, and component separation preserve both presentation and integrity better than most cuisines can manage. Your food can arrive looking intentional, not collapsed. Want to see packaging examples from Japanese partners on the platform?", correct: true, technique: 'Social Proof',
        feedback: "You reframed the challenge as solvable with Japanese-specific packaging solutions and backed it with industry examples. Acknowledging the real difference (delivery vs dine-in plating) while showing a credible solution is more persuasive than dismissing the concern." },
      { text: "Customers who order Japanese food for delivery understand that presentation differs from dine-in.", correct: false,
        feedback: "For a restaurant where presentation is a professional value, asking customers to lower their expectations is the wrong response. Show the packaging solution." },
      { text: "A curated delivery menu of your most travel-friendly items would minimize presentation concerns.", correct: false,
        feedback: "Good menu strategy, but it comes after showing that the right packaging can handle the challenge. Don't default to limitation before showing the solution." },
      { text: "Which of your dishes do you feel would be hardest to package well for delivery?", correct: false,
        feedback: "Good discovery for the packaging design conversation — but address the broad presentation concern first before getting into specific dish challenges." },
    ],
  },
  jp19: {
    objection: "Our omakase is a 12-course chef's experience. There's no way to translate that to delivery.",
    responses: [
      { text: "You're right — and no one would ask you to. Omakase and delivery are completely different products. What's possible is a separate delivery format: a curated, seasonal selection of your most travel-worthy dishes, packaged in a way that represents your kitchen's identity. It's not a replacement for the omakase experience; it's a different product that serves the customer who can't book a seat this month.", correct: true, technique: 'Channel Separation',
        feedback: "You validated the premise (omakase can't be delivered) and offered a real alternative: a designed delivery product that's separate from the main experience. This respects the omakase brand while opening a new revenue channel." },
      { text: "Some elements of an omakase experience — like a curated tasting box — can work for delivery.", correct: false,
        feedback: "Good instinct, but develop it: a designed delivery edition is a separate product, not a piece of the omakase. The chef controls what that product is." },
      { text: "Many high-end restaurants offer a simplified delivery menu that introduces customers to their cuisine.", correct: false,
        feedback: "'Simplified' sounds like a downgrade of the omakase brand. Frame the delivery format as a distinct, intentional product — not a simplified version." },
      { text: "What portion of your current customers are walk-ins versus reservation-only?", correct: false,
        feedback: "Discovery about access to their current experience, but it doesn't address the omakase-format concern. Show the separate delivery product idea first." },
    ],
  },
  jp20: {
    objection: "Our ramen broth simmers for 18 hours. We can only make what we have. We can't overproduce.",
    responses: [
      { text: "An 18-hour broth is a real capacity constraint — and delivery has a model that fits it perfectly. Set a daily quantity limit for ramen on the platform: when the batch is sold, the item closes automatically. You're not overproducing; you're selling through your existing production with a controlled digital channel. Many tonkotsu and miso ramen shops do exactly this — it creates scarcity that actually drives demand.", correct: true, technique: 'Reframing',
        feedback: "You showed that daily quantity limits make the fixed-production constraint a feature: controlled scarcity on a beloved dish drives urgency and elevates perception. The production limitation becomes a selling point." },
      { text: "You could batch a smaller portion of your daily ramen production for delivery only.", correct: false,
        feedback: "Good operational idea, but address the overproduction fear first — show the quantity limit mechanism that ensures you never make more than you have." },
      { text: "Customers who order ramen for delivery understand it's a specialty item with limited availability.", correct: false,
        feedback: "Customer understanding doesn't solve the production concern. Show the platform controls that cap delivery to your exact available volume." },
      { text: "How many bowls of ramen do you typically produce per day?", correct: false,
        feedback: "Good discovery for setting the daily limit — ask it as part of 'let's set your daily cap to match your production' rather than as a standalone question." },
    ],
  },
  jp21: {
    objection: "Our sushi grade fish requires same-day sourcing. I can't guarantee delivery menu availability.",
    responses: [
      { text: "Same-day sourcing is actually an advantage for delivery storytelling — 'today's fish, sourced this morning' is a premium signal. And on the platform side, you enable or disable specific items each morning based on what arrived. Your delivery menu is as fresh as your supply, updated daily. That's not a limitation; it's authenticity customers pay for.", correct: true, technique: 'Reframing',
        feedback: "You converted the availability variability from a logistical concern into an authentic brand story: same-day availability means the menu is always honest. The real-time item control makes daily updates operationally easy." },
      { text: "You could list a few non-sushi items with more stable availability as your delivery anchor.", correct: false,
        feedback: "Non-sushi items are a fallback, not an answer to the sushi availability concern. Show how fresh-supply variability becomes a feature first." },
      { text: "Most sushi delivery customers understand seasonal and supply variability.", correct: false,
        feedback: "Customer understanding doesn't make the operational logistics easier. Show the real-time item control tool that handles variability seamlessly." },
      { text: "What's your typical sourcing schedule — daily, or a few times a week?", correct: false,
        feedback: "Good discovery for the availability management strategy — ask it after framing the daily update model, so it builds toward 'how often do you update your delivery menu.'" },
    ],
  },
  jp22: {
    objection: "Delivery drivers don't know how to handle fragile dishes like chawanmushi or onsen tamago.",
    responses: [
      { text: "Fragile dish handling is a packaging design problem more than a driver problem. If chawanmushi arrives intact in a sealed, padded container, driver handling becomes less of a factor. We can look at packaging solutions specifically designed for custard-style dishes that protect against tipping and vibration. Most of the partners who serve these dishes have solved it at the packaging level. Want to see examples?", correct: true, technique: 'Risk Reversal',
        feedback: "You reframed the driver handling concern to a packaging engineering concern — which is the right frame. The solution is controlled at the source (packaging design), not at the last mile (driver behavior)." },
      { text: "Drivers are trained to handle food orders carefully and understand that restaurant packages require care.", correct: false,
        feedback: "Training doesn't guarantee careful handling of specific fragile items. The engineering solution (packaging) is more reliable than behavioral expectations." },
      { text: "You could choose not to list your most fragile dishes on the delivery menu.", correct: false,
        feedback: "Exclusion is a last resort, not a first solution. Show the packaging approach that makes fragile dishes deliverable before defaulting to removing them." },
      { text: "Which of your dishes are you most concerned about in terms of fragility?", correct: false,
        feedback: "Good discovery for the packaging design conversation — ask it after framing the engineering-solution approach, not as an opener." },
    ],
  },
  jp23: {
    objection: "Japanese dining is ritualistic — the order of service and pacing matter. Delivery can't replicate that.",
    responses: [
      { text: "You're right that delivery can't replicate the ritual — and it shouldn't try. What it does is bring your food to someone who values your cuisine but can't access the ritual tonight. Delivery and dine-in serve different moments for the same customer: one is the full experience, the other is the food standing on its own. Your dine-in ritual stays completely intact.", correct: true, technique: 'Channel Separation',
        feedback: "You validated the ritual concern completely and showed that delivery isn't a substitute — it's a different product for a different occasion. The rituals that make your restaurant special are untouched by a parallel delivery channel." },
      { text: "Some ritualistic elements — like course structure or recommended sake pairings — can be included in delivery packaging.", correct: false,
        feedback: "Including ritual elements in packaging is a creative idea, but it comes after addressing the core concern: delivery doesn't need to replicate the experience, it serves a different occasion." },
      { text: "Customers who appreciate Japanese dining culture will still value the quality of your food in a delivery context.", correct: false,
        feedback: "True, but this skips past the owner's philosophical concern. Acknowledge that delivery is a fundamentally different experience before making the quality argument." },
      { text: "What elements of your service experience do you feel are most central to the dining ritual?", correct: false,
        feedback: "Discovery, but this invites a long list of things delivery can't replicate. Make the channel separation argument first — delivery is a different product for a different occasion — then explore the dining ritual if relevant." },
    ],
  },
  jp24: {
    objection: "We have a 3-week waitlist for reservations. We're already oversubscribed.",
    responses: [
      { text: "A 3-week waitlist means you have far more demand than your current capacity can serve. Delivery doesn't take a table — it uses your kitchen during hours when the dining room isn't running. Those 3-week-waitlist customers who can't get a reservation for a month? Delivery is how they experience your food this week. You have the demand; delivery lets you monetize it beyond your seat count.", correct: true, technique: 'Incremental Logic',
        feedback: "You used their own success (the waitlist) as the argument for delivery. Excess demand beyond seating capacity is the clearest case for a delivery channel — it monetizes demand that currently earns zero." },
      { text: "Your popularity means delivery would likely perform very well — strong demand is a great foundation.", correct: false,
        feedback: "Too generic. Connect the waitlist directly to the delivery opportunity: all those customers who can't get in for weeks are your first delivery customers." },
      { text: "Delivery could help you serve regular customers on nights when they can't secure a reservation.", correct: false,
        feedback: "Good specific example, but develop it within the broader demand argument. The 3-week waitlist represents dozens of customers per night who are currently unreachable." },
      { text: "How many reservation requests do you typically turn away per week?", correct: false,
        feedback: "Good discovery for sizing the missed-demand opportunity — ask it after framing delivery as the mechanism for capturing that demand." },
    ],
  },
  jp25: {
    objection: "Our tempura must be eaten within 90 seconds of leaving the oil. Delivery is impossible.",
    responses: [
      { text: "You're right that delivery tempura can't replicate the 90-second ideal — and we wouldn't ask you to put it on the menu. The practical path for a tempura specialist is a delivery menu built around your dishes that travel well: rice bowls, soba, cold preparations, pickled sides. The tempura remains the in-house experience; delivery opens a different set of your dishes to a wider audience.", correct: true, technique: 'Channel Separation',
        feedback: "You agreed with the premise honestly — delivery tempura can't match the 90-second standard — and offered a realistic alternative: a delivery menu of your other dishes that do travel well. Honesty about limitations builds more trust than overpromising." },
      { text: "Some tempura restaurants include reheating instructions with delivery orders.", correct: false,
        feedback: "Asking a tempura specialist to tell customers to microwave their food is almost certainly not the right suggestion. Acknowledge the limitation and show the alternative menu path." },
      { text: "A 'tempura kit' with battered, un-fried ingredients could let customers fry at home.", correct: false,
        feedback: "Interesting idea, but it's a completely different product concept that needs kitchen prep, equipment, and safety considerations. Don't introduce complexity — show the simpler path of a delivery menu from your non-tempura dishes." },
      { text: "What other dishes are on your menu beyond tempura?", correct: false,
        feedback: "Good discovery for building the delivery menu — ask it after acknowledging that tempura is off the table and framing the alternative menu path." },
    ],
  },
  jp26: {
    objection: "Our customers are serious about washoku traditions. They'd see delivery as disrespecting the cuisine.",
    responses: [
      { text: "The washoku tradition is yours to define and protect — and how you choose to present on a delivery platform is entirely your decision. Many traditional Japanese chefs have distinguished their in-house experience from a separate, accessible food offering that's designed to work in a different context. It's not a compromise of tradition; it's a decision about where the tradition applies.", correct: true, technique: 'Premium Positioning',
        feedback: "You honored the cultural authority of the chef while showing that tiered product design — traditional in-house, accessible delivery format — is consistent with how serious culinary traditions manage multiple contexts." },
      { text: "Delivery is just a distribution channel — it doesn't change the cultural integrity of the food.", correct: false,
        feedback: "To someone for whom washoku is a living tradition, 'just a distribution channel' will land as dismissive. Engage with the cultural concern respectfully." },
      { text: "Your most traditional customers would likely continue dining in regardless of whether delivery exists.", correct: false,
        feedback: "True, but this sidesteps the concern. The owner isn't worried about losing their traditional customers — they're worried about what offering delivery says about their values." },
      { text: "How do you currently introduce non-Japanese customers to washoku traditions?", correct: false,
        feedback: "Interesting discovery, but the concern is about respect for the tradition, not outreach. Address the cultural values directly before exploring customer education." },
    ],
  },
  jp27: {
    objection: "Our noodles absorb broth within minutes. By delivery time, the dish won't exist as intended.",
    responses: [
      { text: "Broth-and-noodle timing is a solved problem with component packaging: broth sealed separately, noodles in their own container, customer combines them at home. It adds about 30 seconds to the customer experience and the dish arrives exactly as intended. Many ramen and udon partners ship this way — it's actually become an expected delivery format for serious noodle shops.", correct: true, technique: 'Social Proof',
        feedback: "You offered the specific, practical solution: component packaging. This is industry-standard for noodle delivery and shows technical knowledge of the problem. Framing it as an expected delivery format for serious noodle shops reinforces that it doesn't compromise the restaurant's standards." },
      { text: "Customers who order noodle dishes for delivery understand some texture changes are expected.", correct: false,
        feedback: "For a serious noodle shop, asking customers to accept inferior quality is the wrong response. Show the component packaging solution that prevents the problem." },
      { text: "You could include a note with reheating instructions to help customers manage timing at home.", correct: false,
        feedback: "Reheating guidance is a fallback, not a solution. Component packaging prevents the problem rather than managing the aftermath." },
      { text: "Which of your noodle dishes have the fastest broth absorption rate?", correct: false,
        feedback: "Good for eventual menu planning, but show the component packaging solution first. Then asking about specific dishes helps you design the delivery format together." },
    ],
  },
  jp28: {
    objection: "We import sake from 12 specific producers in Japan. Our sake pairing is central to the experience.",
    responses: [
      { text: "Sake pairing stays completely in-house — and that's fine. Delivery carries your food to the customer who may not yet know about your sake program. If they love the meal, they read your menu, they see the sake list, and they book a table specifically to explore the pairing experience. Delivery introduces your food; your restaurant delivers the full sake experience.", correct: true, technique: 'Pipeline Value',
        feedback: "You showed delivery as a discovery tool that leads customers to the in-house sake experience rather than competing with it. The food becomes the teaser for the full restaurant visit." },
      { text: "Some markets allow alcohol delivery — sake could potentially be included with meal orders.", correct: false,
        feedback: "Jumping to alcohol delivery for a restaurant with a curated sake program introduces compliance complexity and may feel like you're trying to replicate the dine-in experience digitally. The pipeline argument — food leads to sake experience — is stronger and simpler." },
      { text: "Many restaurants have seen delivery customers convert to dine-in regulars at higher rates than expected.", correct: false,
        feedback: "Generic conversion data doesn't connect to the sake-pairing concern. Show the specific pipeline: delivery food trial → interest in the sake program → table booking." },
      { text: "How do you currently introduce new customers to your sake program?", correct: false,
        feedback: "Good discovery for showing how delivery fits the introduction funnel — ask it after making the pipeline case, not as an opener." },
    ],
  },
  jp29: {
    objection: "We source wagyu directly from a farm in Miyazaki. The volume commitment required would exceed what delivery could sustain.",
    responses: [
      { text: "Wagyu sourcing commitments are exactly the kind of constraint that makes a curated delivery menu make sense. You'd list only the dishes where delivery economics work — rice bowls, sides, appetizers — and keep your wagyu for the dine-in experience where the margins and the presentation support it. Delivery doesn't have to include everything on your menu.", correct: true, technique: 'Incremental Logic',
        feedback: "You showed that delivery and wagyu sourcing commitments don't have to intersect. A curated delivery menu that excludes the high-cost, low-delivery-margin items is a perfectly valid approach." },
      { text: "Your wagyu dishes could be premium-priced on the platform to offset sourcing costs.", correct: false,
        feedback: "Premium pricing helps with economics but doesn't solve the volume commitment concern. The simpler solution is a delivery menu that doesn't include wagyu." },
      { text: "Many premium restaurants offer delivery on their mid-range menu items while keeping their premium dishes in-house only.", correct: false,
        feedback: "True but stated too generically. Connect it specifically to their wagyu sourcing situation: the in-house-only approach for sourcing-constrained premium items is the right model." },
      { text: "What percentage of your menu is wagyu-based versus other items?", correct: false,
        feedback: "Good discovery for designing the delivery menu — ask it after establishing that the delivery menu doesn't need to include wagyu." },
    ],
  },
  jp30: {
    objection: "Our head sushi chef is protective of the restaurant's name. He would see delivery as a dilution of his brand.",
    responses: [
      { text: "The chef's brand protection instinct is legitimate — and a delivery offering can be designed to reinforce it rather than dilute it. The key is that the chef has full control over what goes on the delivery menu: only dishes he believes represent the restaurant well, packaged in a way that meets his standards. The decision is his, not the platform's. Would it be worth having that conversation with him framed that way?", correct: true, technique: 'Premium Positioning',
        feedback: "You validated the chef's authority and showed that the delivery menu design is entirely within their control. Framing the decision as the chef's to make — not the platform's — is respectful of the creative authority that drives the concern." },
      { text: "Many renowned chefs have launched delivery offerings that have enhanced rather than diluted their reputation.", correct: false,
        feedback: "Social proof from other chefs doesn't address this chef's specific values. Show that the decision and the standards are his to set." },
      { text: "Delivery could actually introduce more people to the chef's cuisine and grow his reputation.", correct: false,
        feedback: "Growth argument before addressing brand control makes it sound like you're valuing reach over the chef's standards. Address control first." },
      { text: "What specific aspects of the restaurant does the chef feel delivery would compromise?", correct: false,
        feedback: "Good discovery, but asking the owner to represent the chef's concerns puts them in an awkward position. Show the control framework and suggest the conversation with the chef directly." },
    ],
  },
  jp31: {
    objection: "We only use housemade dashi for everything. It's labor-intensive and we can't scale production.",
    responses: [
      { text: "Housemade dashi is a production constraint — and the right solution is a delivery menu scoped to your dashi capacity, not expanded to strain it. If you produce 30 portions of dashi daily, your delivery menu carries dishes totaling 30 portions, with a hard daily limit. You'd never produce more than you already do — delivery channels what you make rather than demanding more of it.", correct: true, technique: 'Incremental Logic',
        feedback: "You showed that delivery doesn't require increased dashi production — it channels existing production to an additional revenue path. The daily limit mechanism enforces the capacity ceiling." },
      { text: "Your dashi could be produced in larger batches on certain days to create delivery-specific capacity.", correct: false,
        feedback: "Suggesting they change their production process to accommodate delivery is putting delivery ahead of the craft. Show how delivery works within existing production first." },
      { text: "Customers appreciate knowing their dashi is housemade — it's a selling point on your listing.", correct: false,
        feedback: "Marketing benefits are secondary to the production concern. Address how delivery stays within existing capacity before discussing how to market the dashi." },
      { text: "How much dashi do you typically produce per day?", correct: false,
        feedback: "Good question for setting the daily limit — ask it as part of 'let's set your delivery cap to match what you already make' rather than as an opener." },
    ],
  },
  jp32: {
    objection: "Japanese food culture emphasizes eating at the table, fresh. Customers eating cold or reheated food reflects poorly on us.",
    responses: [
      { text: "That's a real concern for dishes that depend on temperature — and it's manageable with menu design. Cold dishes — soba, sashimi, chilled tofu, rice bowls — are delivery-native; they're designed to be eaten at temperature. Hot dishes that reheat well, like karaage or gyoza, stay consistent. The dishes that only work piping hot from the kitchen are simply left off the delivery menu. You curate for what travels.", correct: true, technique: 'Incremental Logic',
        feedback: "You showed a practical menu design framework: curate for delivery-native dishes (cold dishes and dishes that reheat consistently) and leave off the temperature-sensitive items. This gives the owner full control over what represents them on delivery." },
      { text: "Insulated packaging keeps food at serving temperature for 30–40 minutes in most conditions.", correct: false,
        feedback: "Insulation helps but isn't a guarantee, especially for dishes that truly require immediate serving. Menu curation is the more reliable solution." },
      { text: "Customers who order Japanese food for delivery are generally experienced with the format.", correct: false,
        feedback: "Customer experience doesn't address the quality standard concern. Show the menu design solution that ensures only appropriate dishes reach delivery customers." },
      { text: "Which of your dishes do you think hold their quality at room temperature for at least 20 minutes?", correct: false,
        feedback: "Good discovery for building the delivery menu — ask it after framing the curation approach, so the question becomes 'let's build your delivery menu together.'" },
    ],
  },
  jp33: {
    objection: "Our yakitori skewers are hand-cut and charcoal-grilled. The smell and smoke are part of the experience.",
    responses: [
      { text: "The izakaya atmosphere — smoke, heat, sound — is irreplaceable and delivery makes no attempt to replicate it. What travels is the flavor: yakitori done right arrives with the char and seasoning intact in proper packaging. The customer gets the taste; they come in for the full experience. Delivery and the grill aren't competing — they're the before and after of the same customer relationship.", correct: true, technique: 'Pipeline Value',
        feedback: "You validated the sensory experience concern and showed delivery as a pipeline to the full izakaya experience. The flavor is what travels; the atmosphere is what draws customers in." },
      { text: "Yakitori actually holds reasonably well in foil packaging due to the fat and char content.", correct: false,
        feedback: "True technically, but starting with logistics before honoring the 'experience' concern misses the emotional register of the objection." },
      { text: "Many izakaya concepts worldwide have delivery channels that support their dine-in business.", correct: false,
        feedback: "Generic social proof doesn't address the specific atmosphere concern. Show the delivery-as-pipeline logic that positions delivery as a complement to the full experience." },
      { text: "What elements of the yakitori experience do you think matter most beyond the food itself?", correct: false,
        feedback: "Discovery that could inform the pipeline narrative — but make the case first that those in-person elements are preserved while delivery serves a different moment." },
    ],
  },
  jp34: {
    objection: "Our kaiseki menu changes daily based on what's in season. The platform can't handle that dynamism.",
    responses: [
      { text: "Daily menu updates are fully supported — you can update your delivery menu from your phone every morning. Many kaiseki and omakase restaurants update their delivery menu the same way they update their chalkboard: that morning, reflecting what arrived. The platform is designed for this. Your daily curation is a feature, not a technical barrier.", correct: true, technique: 'Reframing',
        feedback: "You showed that the platform's real-time menu update capability matches the daily curation model. The dynamic menu isn't a technical barrier — it's a feature that translates directly to the platform." },
      { text: "You could list a few seasonally stable items alongside the daily specials.", correct: false,
        feedback: "Stable anchor items are a good menu strategy, but address the daily update capability first. The owner needs to know the platform can handle their daily rhythm." },
      { text: "Many seasonal restaurants use the platform's featured item function to highlight what's freshest.", correct: false,
        feedback: "Feature tools are secondary. The core concern is whether daily menu changes are technically feasible — answer that directly." },
      { text: "How far in advance do you typically plan your daily menu changes?", correct: false,
        feedback: "Good discovery for the update workflow — ask it after confirming the platform supports daily updates, so the question helps design the operational rhythm." },
    ],
  },
  jp35: {
    objection: "We train our staff for 6 months before they serve customers. Delivery bypasses all of that hospitality.",
    responses: [
      { text: "The 6-month hospitality training is what makes your dining room exceptional — delivery doesn't carry it and doesn't try to. Delivery carries your food and your kitchen's craft to a different moment. The trained hospitality is preserved exactly where it belongs: every in-house experience. Delivery adds a revenue channel without substituting for the standard that defines your restaurant.", correct: true, technique: 'Channel Separation',
        feedback: "You honored the training investment and showed that delivery doesn't compete with or undermine it. The dining room standard stays intact; delivery serves a parallel, different purpose." },
      { text: "Your delivery listing can reflect your hospitality standards through thoughtful packaging and presentation notes.", correct: false,
        feedback: "Packaging presentation is a secondary way to extend hospitality — address the core concern first: the trained hospitality is preserved in-house and isn't replaced by delivery." },
      { text: "Many fine dining restaurants have found ways to extend their service philosophy to delivery packaging.", correct: false,
        feedback: "Good eventual conversation, but the primary concern is whether delivery undermines what they've built. Validate the in-house hospitality is untouched before discussing delivery presentation." },
      { text: "What aspects of your hospitality training do you feel are most central to the guest experience?", correct: false,
        feedback: "Discovery that deepens the channel separation case, but ask it after showing that those hospitality elements remain fully intact in-house." },
    ],
  },
  jp36: {
    objection: "Delivery platforms pressure restaurants to discount. We've never discounted and never will.",
    responses: [
      { text: "No discount required. Promotions on the platform are entirely optional — you can be listed at full price with no offers, ever. Many premium restaurants on the platform have never run a promotion. The platform is a discovery channel; pricing decisions are yours. If your food commands full price in-house, it can command the same on delivery.", correct: true, technique: 'Risk Reversal',
        feedback: "You directly addressed the pressure concern: promotions are opt-in, not mandatory. Premium pricing on the platform is a real choice that many restaurants make, and your previous success at full price supports it." },
      { text: "Some discounting can help with initial visibility — you could try a small promotion for the first month.", correct: false,
        feedback: "Suggesting any discounting to someone who has explicitly said they never discount is the opposite of what they need to hear. Confirm that full-price listing is fully supported." },
      { text: "Our platform rewards quality over discounting — high-rated restaurants perform well without promotions.", correct: false,
        feedback: "Closer to the right message, but the most important thing to communicate is that promotions are optional, not just that quality competes. Address the choice directly." },
      { text: "What has been your approach to pricing relative to competitors in the area?", correct: false,
        feedback: "Pricing philosophy is interesting context, but answer the discount concern directly before exploring their broader pricing strategy." },
    ],
  },
  jp37: {
    objection: "We serve ceremonial matcha with specific preparation. The ritual is incompatible with delivery.",
    responses: [
      { text: "Ceremonial matcha is your in-house offering and delivery makes no attempt to carry the ritual — nor should it. Your delivery menu would be built around your food: the dishes that represent your kitchen. If you choose to offer a matcha drink item on delivery, it would be a different format — prepared, bottled, or as an at-home kit — not a replacement for the ceremonial experience that happens at your tables.", correct: true, technique: 'Channel Separation',
        feedback: "You validated the incompatibility honestly and showed that the ceremonial ritual is an in-house offering untouched by delivery. Any matcha on a delivery menu would be a separate product, not a compromise of the ceremony." },
      { text: "You could offer a matcha preparation kit for delivery — customers prepare it themselves at home.", correct: false,
        feedback: "The kit idea might be interesting eventually, but it introduces complexity before addressing the core concern: the ceremony stays in-house and delivery serves a different purpose." },
      { text: "Most customers who order Japanese food for delivery aren't seeking the full ceremonial experience.", correct: false,
        feedback: "True but potentially dismissive of the cultural concern. Show the channel separation — ceremony is in-house, delivery serves a different context — rather than characterizing what delivery customers want." },
      { text: "What other beverages or menu items do you offer alongside the ceremonial matcha?", correct: false,
        feedback: "Good discovery for building the delivery menu — ask it after establishing that the matcha ceremony stays in-house and the delivery menu reflects your food and accessible drink options." },
    ],
  },
  jp38: {
    objection: "Our restaurant is in a very traditional neighborhood. Regular customers might see delivery as lowering our standards.",
    responses: [
      { text: "Your regular customers in the neighborhood aren't the target for delivery — they walk in. Delivery reaches the customer outside your neighborhood who doesn't have access to your restaurant and finds you through the app. Your neighborhood regulars' experience and perception doesn't change at all. Two completely separate audiences.", correct: true, technique: 'Channel Separation',
        feedback: "You showed that the neighborhood regulars and the delivery customers are different people — regulars dine in, delivery reaches new, external customers. The standards perceived by regulars are entirely unchanged." },
      { text: "A strong Uber Eats presence might actually attract more neighborhood visitors who see your listing as a quality signal.", correct: false,
        feedback: "The owner is worried about regulars' perception — this response turns the concern backward. Address the audience separation first." },
      { text: "Your listing can be presented in a way that's consistent with your traditional positioning.", correct: false,
        feedback: "Presentation consistency is a secondary concern. The core worry is about regulars' perception — show they're a completely separate audience from delivery customers." },
      { text: "How do your regulars typically learn about what's new at the restaurant?", correct: false,
        feedback: "Discovery about regular communication channels is interesting but not directly relevant. Address the audience separation concern first." },
    ],
  },
  jp39: {
    objection: "We have just 8 tables. Our capacity is what defines our exclusivity.",
    responses: [
      { text: "Eight tables is intentional scarcity — and delivery doesn't touch that. Delivery runs from your kitchen during hours the dining room isn't in service, so you're never adding a cover that competes with a table. The exclusivity of the dining room experience stays exactly as limited as you've designed it. Delivery is kitchen utilization, not seat expansion.", correct: true, technique: 'Incremental Logic',
        feedback: "You showed that delivery and the 8-table exclusivity are completely non-competing. Delivery uses kitchen time; the exclusive dining experience uses dining room seats. Neither changes the other." },
      { text: "Small restaurants often do proportionally better on delivery because scarcity creates demand.", correct: false,
        feedback: "Framing delivery as a scarcity opportunity skips past the exclusivity concern. Show that the 8-table limitation is fully preserved before making the opportunity case." },
      { text: "You could limit delivery to a small daily window that doesn't overlap with your service.", correct: false,
        feedback: "Good operational detail, but lead with the principle: delivery runs outside service hours and doesn't compete with the dining room at all." },
      { text: "What hours does your dining room typically operate?", correct: false,
        feedback: "Good discovery for mapping the delivery window — ask it after confirming the exclusivity is protected, so it leads to 'here's when delivery would run.'" },
    ],
  },
  jp40: {
    objection: "We use a traditional irori fireplace as our centerpiece. Ambiance is inseparable from our brand.",
    responses: [
      { text: "An irori fireplace is experiential — no platform can carry that, and none would try. What delivery carries is your food: the flavors, the craft, the sourcing. The customer who orders delivery discovers your food, falls in love, and then seeks out the full irori experience in person. Delivery is the introduction; your restaurant is the destination.", correct: true, technique: 'Pipeline Value',
        feedback: "You honored the experiential brand completely and positioned delivery as a discovery tool that drives in-person visits. The irori experience is the incentive; delivery creates the desire to experience it." },
      { text: "Many experience-focused restaurants use delivery to expand their brand reach beyond their location.", correct: false,
        feedback: "Generic reach argument doesn't connect to the irori brand specifically. Show the discovery-to-visit pipeline that the irori experience motivates." },
      { text: "You could feature the irori and ambiance photos prominently on your delivery listing.", correct: false,
        feedback: "Good tactic for the pipeline strategy — but introduce it after making the discovery-to-visit argument, not as the opening move." },
      { text: "How do new customers typically hear about your restaurant?", correct: false,
        feedback: "Discovery channel question is useful for showing where delivery fits the funnel — but make the pipeline case first." },
    ],
  },
  jp41: {
    objection: "We're a small family business. My parents run the kitchen. Adding delivery means more technology they can't manage.",
    responses: [
      { text: "The technology footprint is minimal: one tablet, one app, orders appear automatically. Many family-run kitchens have the same concern — and within a few orders, it becomes as routine as any other ticket. I'd be happy to do the setup and walk your parents through the process personally before going live. You wouldn't be figuring it out alone.", correct: true, technique: 'Risk Reversal',
        feedback: "You acknowledged the technology concern genuinely, showed the simplicity of the actual setup, and offered personal onboarding support. The offer to walk through it together removes the 'figuring it out alone' fear." },
      { text: "Our interface is designed to be extremely simple — most operators learn it in under an hour.", correct: false,
        feedback: "'Under an hour' sounds like a marketing claim. The offer to do the setup and onboarding personally is much more reassuring." },
      { text: "You could designate one family member to manage the tablet so others can focus on cooking.", correct: false,
        feedback: "Operational advice comes after removing the technology fear. Show the simplicity and offer hands-on support first." },
      { text: "What technology are your parents most comfortable with currently?", correct: false,
        feedback: "Good discovery for the onboarding approach — ask it as part of 'let me understand what setup will feel most natural for them' rather than as a standalone question." },
    ],
  },
  jp42: {
    objection: "Our restaurant is named after my grandfather. Delivery feels like commercializing something personal.",
    responses: [
      { text: "That personal legacy is exactly what makes your food worth reaching people with. Delivery doesn't commercialize the name — it extends the story to people who would never otherwise know it. Every order is an introduction to your grandfather's restaurant. The meaning you've built into the name travels in every box.", correct: true, technique: 'Reframing',
        feedback: "You honored the emotional significance and reframed delivery as a vehicle for the personal story, not a dilution of it. The grandfather's name reaching new people is an extension of legacy, not a commercial transaction." },
      { text: "Your story is a marketing asset — the family history would resonate with customers on your listing.", correct: false,
        feedback: "Framing a personal legacy as a 'marketing asset' is likely to feel crass. Engage with the personal meaning first." },
      { text: "Many family-named restaurants have maintained their heritage while expanding their reach through delivery.", correct: false,
        feedback: "Social proof doesn't address the personal feeling of commercialization. Engage with the emotional concern directly." },
      { text: "What does the restaurant's name mean to you and your family?", correct: false,
        feedback: "Good discovery, but asking them to articulate their personal attachment before you've shown respect for it can feel intrusive. Honor the legacy first." },
    ],
  },
  jp43: {
    objection: "We use seasonal ikebana arrangements as part of the dining decor. Our restaurant is an art form.",
    responses: [
      { text: "The ikebana and the physical art of the space are yours to preserve exactly as they are — delivery doesn't reach them or affect them. What delivery carries is the culinary art: the flavors, the craft, the quality that makes someone want to experience the full art form in person. Delivery creates desire; your restaurant satisfies it.", correct: true, technique: 'Pipeline Value',
        feedback: "You drew the clear boundary: the art of the space stays in the space; delivery carries the culinary art. The in-person artistic experience is the destination that delivery motivates people to seek." },
      { text: "Many art-focused dining establishments use delivery to introduce their cuisine to a broader audience.", correct: false,
        feedback: "Generic social proof before honoring the 'restaurant as art form' identity feels dismissive. Engage with the artistic concern directly." },
      { text: "You could include a small note or card with delivery orders that describes the ikebana philosophy.", correct: false,
        feedback: "Nice touch eventually, but it comes after making the case that the art of the space is fully preserved. Don't jump to tactics before addressing the principle." },
      { text: "What does the artistic experience mean to your guests when they first enter the restaurant?", correct: false,
        feedback: "Discovery that deepens the pipeline case, but ask it after showing delivery as a path to the artistic experience, not as an opener." },
    ],
  },
  jp44: {
    objection: "Our tofu is made fresh on the premises each morning. Production can't flex for delivery demand.",
    responses: [
      { text: "Morning tofu production is a fixed batch — and delivery respects that. You'd set a daily quantity limit on tofu dishes matching your batch size, and delivery orders fill from what you've already made. No additional production, no flexing. When the day's tofu is sold, the items close. Your production rhythm stays completely unchanged.", correct: true, technique: 'Risk Reversal',
        feedback: "You showed the daily quantity limit mechanism that aligns delivery demand to fixed production. The tofu batch size becomes the natural delivery cap — production doesn't change." },
      { text: "You could consider offering tofu dishes only on certain days when production volume allows.", correct: false,
        feedback: "Selective availability is one option, but the more powerful answer is the real-time quantity limit that caps delivery to the exact batch produced daily." },
      { text: "Housemade tofu is a premium differentiator — customers would value it even with limited availability.", correct: false,
        feedback: "Demand and appreciation are secondary to the production concern. Show the mechanism that keeps production constant before discussing how customers perceive it." },
      { text: "How many portions of tofu do you typically produce per morning batch?", correct: false,
        feedback: "Good question for setting the daily limit — ask it as part of 'let's set your delivery cap to your daily production' rather than as a standalone question." },
    ],
  },
  jp45: {
    objection: "We don't want to be discovered by customers who don't understand Japanese food etiquette.",
    responses: [
      { text: "Your in-house experience and the expectations you set for guests are completely within your control. Delivery sidesteps that issue entirely: there's no in-house etiquette for a customer eating at home. What delivery gives you is reach to people who appreciate Japanese cuisine — and your food itself selects for the right audience. The customers who love careful, craft-driven Japanese food are the same ones who order it intentionally.", correct: true, technique: 'Reframing',
        feedback: "You showed that delivery removes the in-house etiquette concern because delivery customers eat at home. And the food itself selects for the right audience — people who seek out careful Japanese cuisine are already aligned with your values." },
      { text: "You could include a brief 'About Our Food' note in delivery orders to set context.", correct: false,
        feedback: "Educational notes are a nice touch but don't address the core concern about undiscerning customers. Show why delivery naturally attracts the right audience." },
      { text: "Most delivery customers in the Japanese food category are experienced and appreciative of the cuisine.", correct: false,
        feedback: "Demographic assertion without specific data sounds dismissive of a genuine cultural concern. Show why the delivery context eliminates the etiquette issue entirely." },
      { text: "What aspects of Japanese dining etiquette are most important to you?", correct: false,
        feedback: "Discovery about etiquette values is interesting, but make the reframe first: delivery customers eat at home, where in-house etiquette isn't relevant." },
    ],
  },
  jp46: {
    objection: "Our restaurant is a shoebox — we physically don't have space for a delivery staging area.",
    responses: [
      { text: "A delivery staging area is a counter space and a bag — nothing more. If you have a shelf, a spot on the prep counter, or any flat surface near the kitchen pass, that's your staging area. Many of our smallest partners operate from kitchens tighter than yours. The physical footprint for delivery is a single shelf. Want to look at what that setup looks like?", correct: true, technique: 'Risk Reversal',
        feedback: "You deflated the staging area concern by describing what it actually requires: a shelf. Many people imagine a separate room or a large setup. Showing the minimal physical reality removes the barrier." },
      { text: "Many small restaurants manage delivery from their existing kitchen layout without any modification.", correct: false,
        feedback: "Social proof is good but vague. Tell them what the staging area actually is — a shelf and a bag — so they understand exactly how small the footprint is." },
      { text: "You could use a fold-out shelf or temporary surface for delivery pickup only.", correct: false,
        feedback: "Equipment suggestion comes after addressing the misconception about what's actually needed. Start by describing the minimal staging reality." },
      { text: "How much counter space do you currently have near the kitchen exit?", correct: false,
        feedback: "Good for understanding the physical setup, but describe what's actually needed first. Once they know it's a shelf, the question becomes 'where would that shelf go.'" },
    ],
  },
  jp47: {
    objection: "We run a 90-minute fixed prix fixe format. Delivery doesn't fit our service model.",
    responses: [
      { text: "Prix fixe format and delivery are completely different products — you don't need to deliver your prix fixe experience. Delivery would be a separate, à la carte expression of your kitchen: dishes from your repertoire that work as individual items. The prix fixe experience stays exactly as it is; delivery is a different product for a different context.", correct: true, technique: 'Channel Separation',
        feedback: "You cleanly separated the formats: the prix fixe experience is in-house and unchanged; delivery is a separate product. No confusion between the two." },
      { text: "You could offer a curated 'delivery set' that mirrors the prix fixe structure in a delivery format.", correct: false,
        feedback: "A delivery set that mirrors the prix fixe is an interesting product idea but introduces complexity. The simpler frame is an à la carte delivery menu that's a separate product entirely." },
      { text: "Many fixed-format restaurants offer delivery from a separate casual menu that doesn't compete with their main experience.", correct: false,
        feedback: "Social proof comes after making the channel separation case. Address the service model concern directly first." },
      { text: "What dishes from your prix fixe would you feel confident offering as standalone delivery items?", correct: false,
        feedback: "Good discovery for menu building — ask it after establishing the separate-product framework, so it becomes a collaborative design question." },
    ],
  },
  jp48: {
    objection: "Our kitchen is designed for the 20-seat service, not for managing parallel delivery orders.",
    responses: [
      { text: "The kitchen design concern is real for simultaneous operations. The solution is time separation: delivery runs during your pre-service prep window — say, 3–5pm — when the kitchen is active but not in service mode. You'd handle delivery orders before service starts, then close delivery when service begins. Your 20-seat kitchen runs exactly as designed; delivery happens in a different time slot.", correct: true, technique: 'Incremental Logic',
        feedback: "You addressed the parallel operations concern with the time-separation model: delivery runs before service, not during it. The kitchen design is fully respected — delivery fits into a different operational window." },
      { text: "Many restaurants with similar kitchen designs manage delivery by routing orders through a separate printer.", correct: false,
        feedback: "A separate printer is an operational tool, not a solution to the parallel capacity concern. Show the time-separation model that eliminates the parallel operations problem." },
      { text: "Delivery order volumes for new partners are typically low enough to integrate without major adjustments.", correct: false,
        feedback: "Low volume is a hope, not a structural solution. The time-separation model is the reliable answer." },
      { text: "What does your kitchen staffing look like during prep versus service hours?", correct: false,
        feedback: "Good discovery for mapping the delivery window — ask it after proposing the time-separation model, so it refines the specific window rather than opening a broader operational audit." },
    ],
  },
  jp49: {
    objection: "We're fully booked for the next 6 months. Growth isn't something we're optimizing for right now.",
    responses: [
      { text: "Six months out means your dining room is as full as it can get — and delivery captures demand beyond that ceiling. The customers on your waitlist, the ones who couldn't book for next month, the ones who discovered you on Instagram and haven't found a slot yet — delivery reaches them this week. You're not growing your restaurant; you're monetizing excess demand that currently earns nothing.", correct: true, technique: 'Incremental Logic',
        feedback: "You showed that 'not growing' and 'not leaving money on the table' can coexist. The fully booked restaurant has suppressed demand that delivery can capture without changing the dining room experience." },
      { text: "Even fully booked restaurants benefit from delivery because it diversifies their revenue streams.", correct: false,
        feedback: "Diversification is a weak argument to someone who is fully booked and content. Show the specific suppressed demand that delivery captures." },
      { text: "Delivery could help you understand which dishes are most popular without impacting your reservation model.", correct: false,
        feedback: "Data insights are a secondary benefit. The primary case for a fully booked restaurant is capturing the existing excess demand." },
      { text: "How long has your restaurant been consistently fully booked?", correct: false,
        feedback: "Context question, but it doesn't build the delivery case. Show the suppressed demand argument first, then timeline context is interesting." },
    ],
  },
  jp50: {
    objection: "Our regulars know our menu changes based on the chef's mood that day. That unpredictability is part of our charm.",
    responses: [
      { text: "Daily menu variability and delivery are actually compatible: you update your delivery menu each morning to reflect what the chef is making that day. Customers see exactly what's available right now. The spontaneity of the kitchen is preserved; delivery just requires the spontaneity to be communicated digitally rather than verbally at the table. The charm travels.", correct: true, technique: 'Reframing',
        feedback: "You showed that the daily variability is a feature that works on the platform through the real-time menu update tool. The chef's spontaneity doesn't need to be standardized — it just needs to be communicated digitally." },
      { text: "You could feature a 'Daily Special' prominently on the delivery listing to highlight the day's offering.", correct: false,
        feedback: "Good product design idea, but address the variability compatibility concern first. Show that daily updates are supported before discussing how to present them." },
      { text: "Customers appreciate knowing that what they're ordering is truly unique to that day.", correct: false,
        feedback: "Customer appreciation is a secondary benefit. The primary concern is whether the platform can handle daily changes — answer that directly." },
      { text: "How do your in-house customers currently find out what's on the menu for the day?", correct: false,
        feedback: "Discovery about their current communication method is useful for designing the delivery update workflow — ask it after showing the daily update capability." },
    ],
  },
  jp51: {
    objection: "We don't do marketing. Our reputation speaks for itself through our food.",
    responses: [
      { text: "That philosophy works for the customers already in your orbit — word of mouth from your regulars. What Uber Eats opens is the person outside that orbit who has no connection to your word-of-mouth network yet. They search for Japanese food, find you, try your food, and your food speaks for itself exactly as it always has. Same philosophy, new audience.", correct: true, technique: 'Reframing',
        feedback: "You honored the no-marketing philosophy and showed that delivery is consistent with it: the food does the persuading, just for a new audience who couldn't previously discover it." },
      { text: "Being on Uber Eats is a form of passive marketing — you're present without actively promoting.", correct: false,
        feedback: "'Passive marketing' reintroduces the marketing framing they've rejected. Stay in the frame of 'your food speaks for itself to a new audience.'" },
      { text: "Your reputation would build on the platform just as it has in person — through food quality.", correct: false,
        feedback: "Better but still frames it as reputation-building, which implies effort. The cleaner message is that the same food-speaks-for-itself dynamic just reaches new people." },
      { text: "How do new customers typically discover your restaurant today?", correct: false,
        feedback: "Discovery question, but the owner has told you: reputation and word of mouth. Use that to make the case that delivery extends the same mechanism to new networks." },
    ],
  },
  jp52: {
    objection: "We have a very specific customer service standard. Delivery removes my ability to control the customer's experience.",
    responses: [
      { text: "You control everything up to the moment the bag leaves your kitchen. The food, the packaging, the accuracy, the presentation — all yours. The last mile is handled by the platform. What we ensure is that any issues after the kitchen are our responsibility, not yours. Your service standard applies to everything you produce; the platform handles the logistics.", correct: true, technique: 'Risk Reversal',
        feedback: "You drew the clear line of control: restaurant controls everything in the kitchen; platform owns the last mile. The service standard the owner has built applies fully to what they control — which is the food itself." },
      { text: "Many high-service restaurants find that delivery customers have high satisfaction rates when food quality is strong.", correct: false,
        feedback: "Customer satisfaction data doesn't address the control concern. Show where the control boundary lies." },
      { text: "You could include a branded insert or message in the delivery bag to extend your service experience.", correct: false,
        feedback: "Branded inserts are a nice extension, but they come after establishing the control boundary. The owner needs to know what they own before discussing how to extend it." },
      { text: "What elements of your customer experience are you most protective of?", correct: false,
        feedback: "Discovery about their service standards is useful, but answer the control concern first: show what they own (everything in the kitchen) before asking what matters most to them." },
    ],
  },
  jp53: {
    objection: "Japanese portion sizes are intentionally modest. Western delivery customers may complain they're too small.",
    responses: [
      { text: "Portion size expectations are managed with listing design: clear descriptions of what a portion includes and, for Japanese restaurants, a note about the serving philosophy sets context before customers order. The customers who order from a clearly Japanese restaurant with accurate descriptions are selecting for that experience. Self-selection works in your favor when the listing is honest.", correct: true, technique: 'Risk Reversal',
        feedback: "You showed that expectation management through honest listing descriptions prevents the complaint before it happens. Customers who read the listing and choose your restaurant are opting into the portion philosophy." },
      { text: "You could adjust portion sizes slightly for delivery to meet expectations.", correct: false,
        feedback: "Asking a Japanese restaurant to adjust their portions for Western customers is an attack on the food philosophy. Manage expectations through listing design instead." },
      { text: "Delivery customers in the Japanese food category generally understand smaller portions are traditional.", correct: false,
        feedback: "Assuming all delivery customers understand Japanese portion norms is optimistic. The proactive approach is clear listing descriptions that set the right expectation." },
      { text: "What's your typical portion size for a main course compared to a Western restaurant?", correct: false,
        feedback: "Discovery about portions is useful for designing the listing description — ask it as part of 'let's make sure your descriptions set the right expectation' rather than as an opener." },
    ],
  },
  jp54: {
    objection: "We source shiso, yuzu, and mitsuba from a single specialty grower. No substitutions. Delivery creates demand we can't always fill.",
    responses: [
      { text: "Specialty grower supply constraints are handled with real-time item availability controls. When your shiso is running low, you disable the dishes that require it until the next delivery from your grower. Your delivery menu reflects exactly what you have in stock. You're never promising what you can't deliver — the platform enforces your supply reality in real time.", correct: true, technique: 'Risk Reversal',
        feedback: "You showed the inventory control mechanism that matches delivery demand to actual specialty ingredient supply. Real-time availability management prevents overselling and protects the no-substitution standard." },
      { text: "You could build your delivery menu around dishes that use your most reliably available ingredients.", correct: false,
        feedback: "Menu curation is good strategy, but address the supply control mechanism first. The owner needs to know they can manage real-time availability before deciding which dishes to feature." },
      { text: "Working with your grower on a priority allocation for delivery days might secure consistent supply.", correct: false,
        feedback: "Suggesting they negotiate with their specialty grower to accommodate delivery puts delivery ahead of the supply relationship. Show the platform controls that work within existing supply first." },
      { text: "How frequently do you receive deliveries from your specialty grower?", correct: false,
        feedback: "Good for understanding the supply rhythm — ask it after showing the availability management tools, so it helps design the update schedule." },
    ],
  },
  jp55: {
    objection: "We've spent 10 years building a Michelin-recommended reputation. Platform delivery could put that at risk.",
    responses: [
      { text: "Michelin recognition is earned in the dining room — inspectors visit in person, evaluate the experience, the service, the food on the plate. A delivery channel doesn't factor into that evaluation. Your Michelin standing and your delivery presence are completely separate tracks. Many Michelin-recognized restaurants worldwide use delivery to extend their reach without any impact on their rating status.", correct: true, technique: 'Social Proof',
        feedback: "You addressed the factual misconception: Michelin evaluates in-person dining experience, not delivery channels. Separating the two systems removes the risk concern at its source." },
      { text: "Delivery is a separate experience and would be evaluated by customers differently from your dine-in.", correct: false,
        feedback: "True but doesn't address the Michelin concern specifically. Clarify that Michelin evaluations are entirely in-person before moving to broader customer evaluation." },
      { text: "Many prestigious restaurants globally offer delivery without affecting their fine dining standing.", correct: false,
        feedback: "Social proof is useful, but the more persuasive answer is how Michelin evaluation actually works — in-person only. State that directly." },
      { text: "Have you spoken with other Michelin-recommended restaurants in your area about their experience with delivery?", correct: false,
        feedback: "Peer consultation is useful eventually, but you have the factual answer about how Michelin evaluates restaurants. Give that answer directly." },
    ],
  },
  jp56: {
    objection: "Our private dining rooms are rented by corporations for confidential meetings. Delivery would bring unknowns into our space.",
    responses: [
      { text: "Delivery doesn't require anyone to enter your space — the order is staged at your kitchen exit or a designated pickup point near your entrance. Drivers don't walk through your private dining rooms. The corporate client confidentiality is completely unaffected. Your private dining environment stays as controlled as it is today.", correct: true, technique: 'Risk Reversal',
        feedback: "You addressed the security and privacy concern directly by showing that delivery pickup is at the kitchen exit, not inside the venue. The controlled private dining environment doesn't change." },
      { text: "You could designate a separate street-level pickup point so drivers never enter the building.", correct: false,
        feedback: "Good operational solution, but present it as part of the standard setup rather than a workaround. Many restaurants have kitchen-exit or front-entrance pickup that doesn't compromise interior access." },
      { text: "Your corporate clients' privacy concerns would be unrelated to a food delivery channel.", correct: false,
        feedback: "Telling someone their concern is unrelated sounds dismissive. Show exactly how the physical delivery flow keeps the corporate spaces separate." },
      { text: "How is your restaurant physically laid out in terms of kitchen access and entry points?", correct: false,
        feedback: "Good setup question — ask it as part of 'let me show you where the delivery pickup point would be' rather than as a standalone question." },
    ],
  },
  jp57: {
    objection: "We use a charcoal grill that needs 45 minutes to reach temperature. Delivery orders would require the grill to run all day.",
    responses: [
      { text: "You already run the grill for service — delivery orders fill in during the windows when it's already hot. If the grill is at temperature for your lunch or dinner service, delivery orders run from the same heat without additional startup time. You'd schedule delivery during those active grill windows only, and close it when the grill goes down. No extra fuel, no extra startup cycles.", correct: true, technique: 'Incremental Logic',
        feedback: "You showed that delivery orders use the existing grill heat rather than requiring separate startup cycles. Scheduling delivery within active grill windows eliminates the all-day operation concern." },
      { text: "You could develop a delivery menu around your cold dishes and non-grill items for off-peak hours.", correct: false,
        feedback: "Non-grill alternatives are a useful fallback, but address the grill scheduling concern first — delivery runs with existing heat, not in addition to it." },
      { text: "The grill running time concern is a common one — most operators find it integrates into their existing workflow.", correct: false,
        feedback: "'Most operators find it integrates' is vague. Show the specific scheduling model that uses existing grill heat." },
      { text: "What hours do you currently run the grill for dine-in service?", correct: false,
        feedback: "Good question for mapping the delivery window — ask it as part of 'let's schedule delivery during your existing grill hours' rather than as a standalone question." },
    ],
  },
  jp58: {
    objection: "We've been offered by three other delivery platforms. We said no to all of them. Why would Uber Eats be different?",
    responses: [
      { text: "That's a fair question — and the honest answer is: if your reasons for saying no to the others still apply, they probably apply to us too. What I'd want to understand is what the sticking points were. If it was economics, let me show you ours specifically. If it was operational disruption, let me show you what minimal-footprint delivery looks like. If it was brand concerns, let me show you listing control. Tell me what didn't work and I'll tell you honestly whether we solve it.", correct: true, technique: 'Discovery',
        feedback: "You showed respect for the pattern of declining and asked directly about the specific reasons rather than trying to differentiate Uber Eats generically. This is honest and demonstrates confidence — you're willing to hear the real objection and address it directly." },
      { text: "Uber Eats has significantly larger reach and better restaurant tools than our competitors.", correct: false,
        feedback: "Generic superiority claims to someone who has declined three platforms won't land. The real question is why they said no — address that directly." },
      { text: "We may have addressed the specific concerns the other platforms couldn't solve.", correct: false,
        feedback: "Vague differentiation without knowing what the concerns were is empty. Ask what the reasons were, then address them specifically." },
      { text: "What were the main reasons you declined the other platforms?", correct: false,
        feedback: "This is essentially the right instinct, but it needs to be framed within a genuine engagement: 'Tell me what didn't work and I'll be honest about whether we solve it.' The question alone without the commitment to honest assessment feels like fishing." },
    ],
  },
  jp59: {
    objection: "We have a private membership model. Delivery would democratize something we've intentionally kept exclusive.",
    responses: [
      { text: "Delivery and your membership model can coexist as different tiers by design. Your members get the full exclusive experience: the space, the service, the curation. Delivery reaches a wider audience with a curated, accessible version of your food — a different product tier, explicitly positioned that way. Many exclusive concepts have an accessible product line that funds the exclusive one without diluting it.", correct: true, technique: 'Channel Separation',
        feedback: "You showed the tiered product model: membership is the exclusive product; delivery is an accessible, separate product tier. The exclusivity of the membership experience is preserved; delivery serves a different market at a different price point." },
      { text: "Delivery customers and members are different audiences who wouldn't interact or compare experiences.", correct: false,
        feedback: "True in practice, but it doesn't engage with the philosophical concern about democratization. Show the tiered design that makes the two products intentionally distinct." },
      { text: "Your membership model could eventually evolve to include a delivery component for members.", correct: false,
        feedback: "Expanding the membership definition before addressing the democratization concern puts the cart before the horse. Show the separate-tier model first." },
      { text: "How many members do you currently have, and what does the membership include?", correct: false,
        feedback: "Good context for designing the tier relationship — ask it after establishing the two-tier model concept, so it helps design how they'd be differentiated." },
    ],
  },
  jp60: {
    objection: "Our clientele is primarily C-suite executives who value complete discretion. Delivery drivers in the area might compromise that.",
    responses: [
      { text: "Delivery pickup is completely discreet: a driver picks up a sealed, unmarked bag from your kitchen door or a side entrance. No interaction with the dining room, no visibility into who's inside. And the corporate clients you're protecting aren't typically delivery customers anyway — they're your dining room clientele. Delivery and discretion are fully compatible with the right pickup logistics.", correct: true, technique: 'Risk Reversal',
        feedback: "You showed that the pickup logistics can be configured for complete discretion, and separated the delivery customer population from the executive clientele. Both concerns addressed." },
      { text: "Drivers are professional service workers who handle corporate locations regularly.", correct: false,
        feedback: "Vouching for driver professionalism doesn't address the specific discretion concern. Show the physical logistics that ensure drivers don't interact with the executive dining environment." },
      { text: "Your executive clients would likely not overlap with typical delivery customers.", correct: false,
        feedback: "True, but this doesn't address the concern about visible delivery activity near the location. Show the discreet pickup configuration." },
      { text: "What specifically about the delivery process concerns you regarding client discretion?", correct: false,
        feedback: "They've told you: drivers in the area might compromise discretion. Address that directly with the discreet pickup logistics before asking for more specifics." },
    ],
  },
  jp61: {
    objection: "Our restaurant doesn't have Wi-Fi. We deliberately avoid technology at the table.",
    responses: [
      { text: "The delivery tablet runs on its own cellular data — no Wi-Fi needed, no change to your deliberate tech-free dining environment. Your tables stay exactly as they are: no phones, no screens, no digital intrusions. The tablet sits in your kitchen, not in the dining room. The philosophy your guests experience at the table is completely unaffected.", correct: true, technique: 'Risk Reversal',
        feedback: "You separated the delivery technology (kitchen-only) from the tech-free dining philosophy (dining room). The two live in completely different physical spaces and the intentional table experience is unchanged." },
      { text: "The platform's mobile app can be managed entirely from a smartphone, if a tablet isn't preferred.", correct: false,
        feedback: "The Wi-Fi concern is about philosophy, not device choice. Clarify that the tablet uses cellular data and stays in the kitchen before discussing device preferences." },
      { text: "Technology in the kitchen doesn't affect the dining room experience your guests value.", correct: false,
        feedback: "True and close to the right answer, but add the specific detail: the tablet runs on cellular, not Wi-Fi, so no network changes are required." },
      { text: "What's your current approach to technology for other kitchen operations?", correct: false,
        feedback: "Discovery about kitchen tech usage is interesting context, but address the Wi-Fi and dining philosophy concern directly first." },
    ],
  },
  jp62: {
    objection: "We're renovating for the next 3 months. This isn't the right time.",
    responses: [
      { text: "Three months is actually perfect timing to set up delivery so it's ready when renovation is complete. Onboarding, menu setup, and photography can happen now so your launch coincides with your reopening — you'd hit a refreshed dining room and a new delivery channel simultaneously. Your renovation becomes a soft relaunch moment.", correct: true, technique: 'Pipeline Value',
        feedback: "You reframed the renovation timing from a barrier to an opportunity: setting up delivery during the renovation means launching both the refreshed restaurant and the new delivery channel together. The constraint becomes the runway for preparation." },
      { text: "You could potentially run a limited delivery menu during renovation if your kitchen is operational.", correct: false,
        feedback: "Delivery during renovation might not be feasible or desirable. The stronger case is using the renovation period to prepare for a full launch after." },
      { text: "Many restaurants find that adding delivery shortly after renovation attracts new customers during the reopening buzz.", correct: false,
        feedback: "Post-renovation delivery is the right timing — but show the specific preparation-during-renovation model that makes simultaneous launch possible." },
      { text: "When do you expect the renovation to be complete?", correct: false,
        feedback: "Good question for setting the launch timeline — ask it as part of 'let's plan the setup so you're ready to launch on reopening day.'" },
    ],
  },
  jp63: {
    objection: "We serve foie gras and dishes that are controversial. We don't want delivery to bring us broader scrutiny.",
    responses: [
      { text: "Your listing on the platform reflects exactly what you choose to include. Dishes you consider controversial can be listed or omitted — entirely your call. And your current customers are already your audience: people who choose your restaurant know what you serve. Delivery extends to a self-selecting audience who searches for fine dining in your area, not a mass audience that stumbles onto your menu unexpectedly.", correct: true, technique: 'Risk Reversal',
        feedback: "You showed two protections: listing control (controversial items are optional) and audience self-selection (delivery customers are choosing fine dining, not randomly discovering the restaurant). Both address the scrutiny concern." },
      { text: "Most customers who order fine dining delivery are experienced and non-judgmental about traditional ingredients.", correct: false,
        feedback: "Customer demographics don't guarantee the absence of scrutiny. Show the listing control that lets the owner decide what to include and the audience self-selection that limits exposure." },
      { text: "Your restaurant's existing clientele understands your menu — delivery attracts a similar demographic.", correct: false,
        feedback: "Similarity of audience is an assumption. The listing control argument is more concrete: they decide what's on the delivery menu." },
      { text: "Which specific dishes are you most concerned about featuring on a delivery platform?", correct: false,
        feedback: "Good discovery for menu design, but establish the listing control principle first — then asking which dishes to feature or omit becomes a productive menu conversation." },
    ],
  },
  jp64: {
    objection: "Our portions are designed to be shared by the table. Individual delivery orders would misrepresent how the food is meant to be eaten.",
    responses: [
      { text: "Sharing dishes and individual delivery can coexist with menu design. Your delivery menu could feature individual portions of dishes that naturally work solo, or 'sharing packs' explicitly designed for two or four people at home. Customers ordering for one versus ordering a family meal is a different segment — you design the delivery menu to serve both contexts accurately.", correct: true, technique: 'Incremental Logic',
        feedback: "You showed that the sharing format doesn't preclude delivery — it requires thoughtful menu design. Both individual and family-format options can be designed explicitly for delivery, representing the food accurately in a home context." },
      { text: "Delivery customers ordering for one would choose individual portions; family orders would choose the sharing format.", correct: false,
        feedback: "Customer behavior is a prediction, not a guarantee. Design the menu explicitly for both contexts rather than relying on customer navigation." },
      { text: "Many sharing-style restaurants offer delivery and find that customers enjoy recreating the shared experience at home.", correct: false,
        feedback: "Social proof is secondary to the menu design solution. Show how the delivery menu would represent the sharing philosophy accurately." },
      { text: "What portion sizes do you typically serve for your main sharing dishes?", correct: false,
        feedback: "Good discovery for menu design — ask it as part of building the delivery menu together, not as a standalone question." },
    ],
  },
  jp65: {
    objection: "We do a lot of corporate gifting and catering. Those clients wouldn't want to see us on a consumer app.",
    responses: [
      { text: "Corporate gifting clients hire you for the product quality and the service relationship — finding you on a consumer app doesn't change either of those. In fact, a strong consumer platform presence often validates the brand to corporate clients: it signals that the restaurant is established and in demand. The two channels reinforce each other.", correct: true, technique: 'Reframing',
        feedback: "You reframed the corporate-client perception concern: consumer platform presence signals establishment and demand, which validates the brand to corporate clients rather than diminishing it." },
      { text: "Corporate and consumer clients are typically in entirely separate decision-making processes — they don't intersect.", correct: false,
        feedback: "The owner is worried about perception, not operational overlap. Address how platform presence affects their brand perception in corporate clients' eyes." },
      { text: "A strong consumer reputation often leads to more corporate catering interest, not less.", correct: false,
        feedback: "This is a version of the right answer but stated too confidently without engaging with the concern. The reframing argument — platform presence validates brand quality — is more specific." },
      { text: "How do your corporate gifting clients typically discover your catering services?", correct: false,
        feedback: "Discovery is interesting but doesn't address the perception concern. Reframe the brand-signal argument first." },
    ],
  },
  jp66: {
    objection: "Our restaurant has sentimental value to our family. We're not interested in scaling — we want to preserve what we built.",
    responses: [
      { text: "Preservation and delivery aren't in conflict. Delivery doesn't change the restaurant — not the staff, not the menu, not the space, not the family connection. It opens a revenue channel that can sustain the thing you've built for longer. Many family restaurants that choose not to grow still choose delivery because it makes what they have more financially resilient without requiring change.", correct: true, technique: 'Reframing',
        feedback: "You reframed delivery not as growth or scaling but as preservation: additional revenue that sustains what the family has built. This directly addresses the 'we want to preserve' sentiment by showing delivery supports that goal." },
      { text: "Delivery is a low-footprint addition — it doesn't require the kind of operational changes that scale implies.", correct: false,
        feedback: "True but framed around what delivery doesn't require rather than why it supports their actual goal: preservation. Connect delivery directly to the preservation objective." },
      { text: "Many family restaurants use delivery specifically to ensure long-term viability without expanding.", correct: false,
        feedback: "Social proof in the right direction, but develop the specific connection: delivery income sustains the family restaurant without requiring any change to what they've built." },
      { text: "What does preserving the restaurant mean to your family specifically?", correct: false,
        feedback: "Good discovery, but the concern is clear: they want the family legacy intact. Honor that and show how delivery supports rather than threatens it." },
    ],
  },
  jp67: {
    objection: "Our tempeh and tofu are handmade and available only in limited quantities. We'd run out before noon with delivery demand.",
    responses: [
      { text: "Daily production limits on the platform mean your delivery menu closes those items when they're sold. You set the quantity to match your production — 20 portions of tofu, 15 of tempeh — and when they're gone, they're gone. You'd never oversell your batch. In fact, daily sellouts are a demand signal that can justify slowly expanding your production if you choose to.", correct: true, technique: 'Risk Reversal',
        feedback: "You showed the quantity limit mechanism that aligns delivery demand to handmade production capacity. The sellout is managed automatically, and the data it generates is useful context for future production decisions." },
      { text: "You could open delivery only after in-house demand for the day is secured.", correct: false,
        feedback: "Sequential allocation is one strategy, but real-time quantity limits are cleaner — you set the delivery cap upfront rather than trying to manage allocation dynamically." },
      { text: "Customers who value handmade products understand and accept limited availability.", correct: false,
        feedback: "Customer acceptance doesn't solve the operational concern. Show the platform controls that prevent overselling automatically." },
      { text: "How many portions of your handmade products do you typically produce daily?", correct: false,
        feedback: "Good question for setting the daily limit — ask it as part of 'let's set your delivery cap to your production volume' rather than as a standalone opener." },
    ],
  },
  jp68: {
    objection: "We use traditional wooden lacquerware and ceramics for service. Delivery packaging would be completely off-brand.",
    responses: [
      { text: "Your lacquerware and ceramics are the in-house experience — delivery uses packaging appropriate for travel. Many Japanese restaurants address the packaging gap by choosing elevated materials: natural paper wrapping, matte boxes, bamboo elements. It won't replicate the lacquerware, but it can be consistent with your aesthetic rather than jarring against it. Want to see packaging options that align with traditional Japanese aesthetics?", correct: true, technique: 'Premium Positioning',
        feedback: "You acknowledged the real aesthetic gap between in-house tableware and delivery packaging, then offered a concrete path to packaging that's on-brand even if different. Showing elevated packaging options makes the concern manageable." },
      { text: "Customers understand that delivery packaging differs from in-house service.", correct: false,
        feedback: "For a restaurant where the lacquerware is part of the identity, 'customers understand' is dismissive. Show the premium packaging path that maintains the aesthetic." },
      { text: "You could include a note about your in-house experience to encourage customers to visit in person.", correct: false,
        feedback: "Notes are a nice addition but don't address the off-brand packaging concern. Show the packaging options that can align with the traditional aesthetic." },
      { text: "What materials or aesthetics are most important to your brand identity?", correct: false,
        feedback: "Good discovery for packaging design — ask it as part of 'let me show you packaging options that align with your aesthetic' rather than as a standalone question." },
    ],
  },
  jp69: {
    objection: "We have a 2-hour dining format with tea pairings and pauses between courses. None of that translates.",
    responses: [
      { text: "You're completely right — the 2-hour format with tea pairings is an in-house experience that delivery doesn't replicate. No one would ask you to. The delivery product would be a separate creation: dishes from your kitchen designed for a different context, not a compressed version of your full experience. Two distinct products for two distinct occasions.", correct: true, technique: 'Channel Separation',
        feedback: "You validated the incompatibility honestly and showed the solution: a separate, designed delivery product, not a compressed or diminished version of the 2-hour experience. The full experience stays intact; delivery is a distinct product." },
      { text: "You could offer a curated selection of your most travel-worthy dishes as a 'preview' of the full experience.", correct: false,
        feedback: "The 'preview' framing is good conceptually, but address the full-format incompatibility first. The owner needs to understand that delivery isn't asking them to compress their 2-hour experience." },
      { text: "A 'home kit' delivery with tea, courses, and timed instructions could carry the format.", correct: false,
        feedback: "The home kit concept introduces significant complexity and fundamentally changes the product. The simpler path is a separate, designed delivery menu — not a DIY version of the 2-hour experience." },
      { text: "What courses or dishes from your format do you think would stand alone outside of the full experience?", correct: false,
        feedback: "Good discovery for building the separate delivery menu — ask it after establishing that delivery is a separate product, not a portion of the existing format." },
    ],
  },
  jp70: {
    objection: "Our restaurant is appointment-only with no walk-ins. Delivery would make us accessible without appointment.",
    responses: [
      { text: "Appointment-only in-person and delivery are different access models by design. Your dining room stays appointment-only — no change whatsoever. Delivery is a separate channel with a separate product, available on its own terms. The appointment model is the exclusive experience; delivery is the accessible one. Many exclusive concepts have both tiers intentionally.", correct: true, technique: 'Channel Separation',
        feedback: "You showed the tiered access model: appointment-only dining for the exclusive experience; delivery as the accessible tier. The appointment model remains fully intact — delivery is a separate channel, not a bypass of it." },
      { text: "Delivery customers and appointment dining clients are different audiences with different expectations.", correct: false,
        feedback: "Audience difference is true but doesn't engage with the intentional accessibility model. Show the tiered design that makes both intentional." },
      { text: "You could brand delivery as a separate offering clearly distinct from your appointment dining experience.", correct: false,
        feedback: "Good product design advice, but address the access model concern first. The owner needs to see that the appointment-only model is preserved before discussing how to brand the delivery tier." },
      { text: "How does the appointment model work — do customers book in advance or are there waitlists?", correct: false,
        feedback: "Context discovery, but the concern is about preserving exclusivity. Address the tiered access model directly first." },
    ],
  },
  jp71: {
    objection: "Our fish market supplier has a long waitlist for restaurant accounts. If I increase demand, I might lose the account.",
    responses: [
      { text: "Your supplier relationship is something delivery doesn't need to stress. Your delivery menu can be scoped to what your current supplier allocation supports — same volume, different distribution channel. You'd set delivery quantities to match what you already order from your supplier. Delivery doesn't require more supply; it just channels your existing supply more broadly.", correct: true, technique: 'Risk Reversal',
        feedback: "You showed that delivery and supplier volume don't have to be linked. The delivery menu can be scoped to existing supply, and daily quantity limits enforce the cap. The supplier relationship is completely protected." },
      { text: "A delivery channel could actually demonstrate your volume commitment to the supplier.", correct: false,
        feedback: "Suggesting the supplier would view delivery demand favorably could easily be wrong. The safer frame is showing that delivery doesn't change the supply relationship at all." },
      { text: "You could discuss a gradual volume increase with your supplier to accommodate delivery growth.", correct: false,
        feedback: "Future supply negotiation introduces the exact supply risk the owner is worried about. Show the option to keep delivery within current supply first." },
      { text: "How much of your current supply allocation goes to the restaurant versus catering?", correct: false,
        feedback: "Good context for understanding available delivery capacity, but answer the supply protection concern first before exploring allocation details." },
    ],
  },
  jp72: {
    objection: "We have a long-standing relationship with our neighborhood. We want everything we do to serve our immediate community first.",
    responses: [
      { text: "Your neighborhood community is your first audience — delivery can serve them too. The person two streets over who loves your restaurant but can't always make it in on a weeknight is your community. Delivery extends service to the same community you've always served, just in different moments. And it reaches the edge of your community — the neighbor who hasn't discovered you yet — bringing them into the relationship.", correct: true, technique: 'Reframing',
        feedback: "You reframed delivery not as reaching outward past the community but as serving the community more fully: in-home occasions and the neighbors who haven't yet found the restaurant." },
      { text: "Many community-focused restaurants use delivery to strengthen local ties.", correct: false,
        feedback: "Social proof is weak here. Show specifically how delivery serves the neighborhood community — the regular who can't always come in, and the neighbor who hasn't discovered them yet." },
      { text: "You could set a shorter delivery radius to ensure delivery stays focused on your immediate community.", correct: false,
        feedback: "Radius control is a good tool to mention after making the community-service case. Lead with the argument that delivery serves the community, then offer the radius control as a way to stay focused on it." },
      { text: "What does your neighborhood community mean to your business specifically?", correct: false,
        feedback: "Discovery about community values is useful, but the owner has told you: it comes first. Honor that and show how delivery extends the community service." },
    ],
  },
  jp73: {
    objection: "Our tasting notes and dish explanations are part of the experience. Delivery removes the narrative.",
    responses: [
      { text: "The live narrative at the table is uniquely yours — delivery can carry a version of it. Your dish descriptions on the listing are the written narrative; an insert card in the bag with tasting notes for each dish is the in-box version. Many food-philosophy restaurants use printed notes specifically because the food story travels even when the table service doesn't.", correct: true, technique: 'Reframing',
        feedback: "You acknowledged what delivery changes (live verbal narration) and showed the realistic delivery equivalent: written descriptions and printed tasting notes. The narrative isn't lost — it takes a different form." },
      { text: "Delivery customers often research their orders online before eating — they'd find your story there.", correct: false,
        feedback: "Hoping delivery customers do independent research is passive. Show the active narrative tools — descriptions and inserts — that carry the story directly." },
      { text: "You could include a QR code in delivery orders that links to your dish explanations and food philosophy.", correct: false,
        feedback: "QR codes are a clever touch but introduce a friction step. Printed tasting notes in the bag are more immediate and don't require the customer to pick up their phone." },
      { text: "What are the most important stories you tell about your food during service?", correct: false,
        feedback: "Good discovery for designing the written narrative — ask it as part of building the insert card content, not as a standalone question." },
    ],
  },
  jp74: {
    objection: "We've been approached by luxury hotel chains to open in their properties. That's our growth path — not delivery.",
    responses: [
      { text: "Hotel partnerships and delivery are completely different paths with different timelines. Hotel negotiations can take 12–24 months; delivery is live in weeks. Delivery right now generates revenue and builds brand visibility that supports your hotel pitch: a strong platform presence, verified customer ratings, and demonstrated multi-channel success is exactly the kind of operational track record hotel operators look for.", correct: true, technique: 'Pipeline Value',
        feedback: "You showed that delivery and hotel expansion are on different timelines and actually support each other. Platform presence and proven delivery operations strengthen the hotel pitch, not compete with it." },
      { text: "A strong delivery track record could actually attract hotel operators by demonstrating brand scalability.", correct: false,
        feedback: "Good point, but develop it: what specific elements of delivery performance would hotel operators value (ratings, multi-channel revenue, operational consistency)." },
      { text: "Many restaurant groups that have expanded into hotels started with a strong delivery presence.", correct: false,
        feedback: "Social proof is useful, but show the specific mechanism: delivery builds the platform evidence base that hotel partners evaluate." },
      { text: "How far along are the hotel negotiations currently?", correct: false,
        feedback: "Context question about timing — ask it after showing that delivery supports the hotel path, to understand how the two timelines interact." },
    ],
  },
  jp75: {
    objection: "We have strict kosher certification. Delivery would require me to verify the driver chain of custody.",
    responses: [
      { text: "Kosher certification covers what happens in your kitchen — your certification and its standards are entirely yours to maintain. Delivery packaging can be sealed at the kitchen exit with tamper-evident seals, which many kosher-certified restaurants use to maintain chain of custody visibility. Your mashgiach's oversight ends at the seal; the packaging provides the visual verification of integrity from that point. Many kosher restaurants deliver successfully with this model.", correct: true, technique: 'Social Proof',
        feedback: "You addressed the chain-of-custody concern with a specific, practiced solution: tamper-evident sealing at the kitchen exit. You also showed that this is a solved problem for kosher-certified restaurants, providing both the tool and the social proof." },
      { text: "Your kosher certification covers your kitchen practices, not delivery logistics.", correct: false,
        feedback: "Too dismissive of a real religious compliance concern. Engage with the chain-of-custody issue and show the sealing solution that addresses it." },
      { text: "You could include a certification card in each delivery order to reassure customers.", correct: false,
        feedback: "Customer reassurance is secondary to the chain-of-custody concern you raised. Show the tamper-evident sealing solution that maintains the integrity standard." },
      { text: "Have you consulted with your mashgiach about delivery requirements?", correct: false,
        feedback: "Asking them to consult their religious authority before making a decision defers the conversation indefinitely. Offer the practical solution — tamper-evident sealing — and let them verify it with their mashgiach if needed." },
    ],
  },
  jp76: {
    objection: "Our restaurant's name has been used by a fake delivery service in the past. I don't trust the model.",
    responses: [
      { text: "That's a serious experience — being impersonated and having your brand misused is a real harm. Our platform's restaurant verification process is exactly what protects against that: listings require ownership verification before they go live, so no one can list your restaurant without your authorization. Getting your authentic listing on the platform actually prevents unauthorized use by claiming your brand officially.", correct: true, technique: 'Risk Reversal',
        feedback: "You validated the real harm and reframed official platform listing as brand protection against future impersonation. An authenticated, owned listing is the opposite of the unauthorized use that harmed them." },
      { text: "Our platform has strict listing verification to prevent fraudulent restaurant accounts.", correct: false,
        feedback: "Verification claim without explaining how it works doesn't address the trust concern from a real past experience. Show specifically what the verification process involves and how it protects their brand." },
      { text: "You could file a complaint with our trust and safety team about the past fraudulent use.", correct: false,
        feedback: "Offering to address the past incident is useful but doesn't answer the current decision about delivery. Show how official listing prevents future impersonation." },
      { text: "What happened with the fraudulent delivery service — was the issue resolved?", correct: false,
        feedback: "Asking them to recount a harmful past experience before showing how official listing prevents recurrence keeps the conversation in the past. Show the protection mechanism first." },
    ],
  },
  jp77: {
    objection: "We offer meditation sessions before dinner service. Delivery would disrupt the calm we create.",
    responses: [
      { text: "Pre-dinner meditation is an in-house ritual entirely within your restaurant — delivery happens at a completely separate time and in a completely separate space: the kitchen, before or after your meditation sessions. You'd schedule delivery availability around your meditation windows so the two never overlap. Your guests' experience before service is unaffected.", correct: true, technique: 'Incremental Logic',
        feedback: "You showed that delivery and the meditation sessions operate in different spaces (kitchen vs. dining room) and different times (scheduled to avoid overlap). The calm is fully preserved." },
      { text: "Many wellness-oriented restaurants do very well on delivery because their health-conscious customers use apps.", correct: false,
        feedback: "Demographic alignment is secondary. The concern is about disrupting the in-house meditation ritual — address the operational separation first." },
      { text: "The mindfulness philosophy that makes your restaurant unique would translate well to your delivery listing.", correct: false,
        feedback: "Brand translation to the listing is a secondary discussion. Address the disruption concern directly with the time and space separation." },
      { text: "What time do you typically hold the meditation sessions before service?", correct: false,
        feedback: "Good question for scheduling around the meditation windows — ask it as part of 'let's schedule delivery around your meditation windows' rather than as a standalone opener." },
    ],
  },
  jp78: {
    objection: "We host a regular tea ceremony that is the heart of our brand. Delivery is antithetical to that slowness.",
    responses: [
      { text: "The tea ceremony is your in-house offering and delivery doesn't attempt to carry it. They're different products by nature: the ceremony is about presence and slowness; delivery is about convenience. Both can exist as different expressions of your food and philosophy — the ceremony for those who seek the full practice, delivery for those who want to experience your food in a different way.", correct: true, technique: 'Channel Separation',
        feedback: "You validated the ceremony's nature and showed clearly that delivery doesn't try to replicate it. Two different products for different contexts, each valid on its own terms." },
      { text: "You could include tea brewing instructions in your delivery packaging to extend the ceremony's spirit.", correct: false,
        feedback: "Nice touch eventually, but address the 'antithetical' concern first. The owner needs to see that delivery is a separate product, not an attempt to compress the ceremony." },
      { text: "Customers who appreciate your tea ceremony would understand the delivery format is different.", correct: false,
        feedback: "Customer understanding doesn't address the philosophical concern about what delivery represents. Show that delivery is a consciously different product, not a compromise of the ceremony." },
      { text: "What aspects of the tea ceremony philosophy do you most want to preserve in your brand?", correct: false,
        feedback: "Good discovery, but engage with the 'antithetical' concern first by showing the channel separation. Then the ceremony philosophy conversation becomes productive." },
    ],
  },
  jp79: {
    objection: "Our restaurant features original artwork that changes monthly. Coming in to see the art is part of the reason people book.",
    responses: [
      { text: "The rotating artwork is a reason to come in — delivery is a reason to discover you first. The person who orders your food for delivery, loves it, and sees photos of the gallery space in your listing has a specific reason to make a reservation next. The art is the draw; delivery creates the food-first relationship that motivates the visit. Discovery and destination work in sequence.", correct: true, technique: 'Pipeline Value',
        feedback: "You positioned delivery as the first step in a customer journey that culminates with visiting the restaurant for the full art-and-dining experience. Delivery creates desire; the gallery space satisfies it." },
      { text: "Many art-focused dining destinations use delivery to build their customer base between gallery openings.", correct: false,
        feedback: "Social proof is useful but secondary. Show the specific pipeline: delivery introduces the food, the art program draws people in for the full experience." },
      { text: "You could feature gallery images in your delivery listing to create intrigue about the in-person experience.", correct: false,
        feedback: "Good tactic for the pipeline strategy, but introduce it after making the discovery-to-visit case, not as the opening move." },
      { text: "How often do new customers cite the artwork as their reason for discovering the restaurant?", correct: false,
        feedback: "Discovery channel question, but the concern is about preserving the art-draw incentive. Show delivery as the food-first entry point that leads to the art-and-dining experience." },
    ],
  },
  jp80: {
    objection: "We have a 6-month waitlist. Our customers are completely committed. I don't need more reach.",
    responses: [
      { text: "A 6-month waitlist means there are far more people who want your food than you can seat. Delivery reaches the ones who can't wait 6 months: they order delivery, experience your food, and the waitlist wait becomes more meaningful because they now know what they're waiting for. Delivery doesn't replace the waitlist — it monetizes the desire that's already there.", correct: true, technique: 'Incremental Logic',
        feedback: "You showed that the waitlist is evidence of suppressed demand, and delivery captures that demand while simultaneously deepening the relationship of waitlisted customers. Delivery and the waitlist work together." },
      { text: "A strong waitlist is a sign that delivery could perform extremely well for you.", correct: false,
        feedback: "True, but this skips past the 'I don't need reach' concern. Show how delivery serves the specific population already waiting — it's not about more reach, it's about capturing existing demand." },
      { text: "Delivery could help you identify customers outside your typical geographic range.", correct: false,
        feedback: "Geographic expansion isn't the priority for someone with a 6-month waitlist. The argument is about monetizing existing, demonstrated demand." },
      { text: "How many reservation requests do you typically receive per week?", correct: false,
        feedback: "Good discovery for sizing the suppressed demand — ask it after framing delivery as a way to serve those who can't get a reservation." },
    ],
  },
  jp81: {
    objection: "We're launching a new concept in 6 months. I don't want to build delivery habits under the old brand.",
    responses: [
      { text: "That's smart brand strategy — and the solution is simple: the delivery listing lives under your current brand now and transitions to the new concept when you launch. Many restaurants do exactly this: use the transition period to build platform infrastructure so the new concept launches with delivery already operational. The 6 months are setup time, not a conflict.", correct: true, technique: 'Pipeline Value',
        feedback: "You showed that building delivery infrastructure under the current brand is preparation for the new concept launch, not a competing brand commitment. The platform setup is transferable and the new concept benefits from it." },
      { text: "You could hold off on delivery until the new concept launches and start fresh then.", correct: false,
        feedback: "Waiting 6 months means missing revenue that could fund the launch. Show how current setup supports the new concept instead of deferring." },
      { text: "The operational experience you build now under the current brand will transfer directly to the new concept.", correct: false,
        feedback: "True, but the owner's concern is about brand habits, not operational learning. Show that the platform infrastructure transfers to the new brand seamlessly." },
      { text: "What's the relationship between the current restaurant and the new concept?", correct: false,
        feedback: "Context about the brand relationship helps design the transition — ask it after showing that the platform setup supports the new launch, so it becomes productive planning rather than an opener." },
    ],
  },
  jp82: {
    objection: "Our menus are handwritten daily on a chalkboard. It's part of our authenticity — digital menus feel fake.",
    responses: [
      { text: "Your chalkboard menu is the in-house experience — it's tactile, visual, authentic to the space. Your digital menu on the platform can carry the same spirit in its language: hand-crafted descriptions, honest daily updates, no corporate template language. The format is digital; the voice and the content are entirely yours. Authenticity is in what you write, not where it appears.", correct: true, technique: 'Reframing',
        feedback: "You reframed authenticity from a format concern to a content and voice concern. The chalkboard is authentic because of the intention behind it — the same intention can be in a digital menu." },
      { text: "Many customers never see the chalkboard — they discover you digitally even as a walk-in.", correct: false,
        feedback: "True, but this sidesteps the 'digital feels fake' concern. Engage with what makes the chalkboard authentic and show that the same quality can live in a digital format." },
      { text: "Your listing can include photos of your chalkboard to maintain that authentic visual connection.", correct: false,
        feedback: "Showing the chalkboard as a photo is a nice touch, but address the philosophical concern first: authenticity is in the content and voice, not the medium." },
      { text: "What does the chalkboard menu represent to you about your restaurant's identity?", correct: false,
        feedback: "Good discovery, but engage with the 'digital feels fake' concern directly first. Then asking about the chalkboard's meaning deepens the authenticity conversation." },
    ],
  },
  jp83: {
    objection: "Our restaurant is in a rural area. I'm not sure there's enough delivery demand here.",
    responses: [
      { text: "That's a question data can answer before you decide. Let me pull the delivery order volume and active user count for your zip code — if demand is thin, I'll tell you honestly and we can discuss whether the economics make sense. If there's more than you expect, the decision gets easier. Don't let an assumption about rural demand substitute for the actual data.", correct: true, technique: 'Hyperlocal Data',
        feedback: "You offered to verify the assumption with actual data rather than arguing for or against rural delivery in the abstract. Offering to show the data honestly — including being willing to say it doesn't work — builds credibility." },
      { text: "Rural delivery has grown significantly as platform coverage has expanded — it may surprise you.", correct: false,
        feedback: "General trend data doesn't address their specific location's demand. Pull the actual data before making any claims about rural viability." },
      { text: "Many rural areas have strong delivery demand from residents who lack nearby dining options.", correct: false,
        feedback: "This is sometimes true but speculative without data. The credible move is to pull the actual order data for their area." },
      { text: "What's the nearest town or city to your restaurant?", correct: false,
        feedback: "Good for understanding the geography — but frame it as 'let me pull your area's delivery demand data, what's your zip code?' so you're offering to verify rather than just gathering information." },
    ],
  },
  jp84: {
    objection: "We use a communal dining format — long tables, shared dishes, strangers sitting together. Delivery disaggregates that.",
    responses: [
      { text: "Communal dining is your in-house format — and delivery doesn't replicate it, which is the point. Delivery reaches the person who wants your food but can't participate in the communal format: they're alone that night, they can't make a reservation, or they live too far. Delivery and the communal experience serve different moments for different contexts without competing.", correct: true, technique: 'Channel Separation',
        feedback: "You validated that communal dining and individual delivery are fundamentally different, and showed that they serve different moments and customers. The in-house communal format is preserved; delivery serves a different need." },
      { text: "Family-pack delivery orders could recreate a version of the communal dining spirit at home.", correct: false,
        feedback: "Good product idea eventually, but address the format incompatibility concern first. The owner needs to see that delivery doesn't try to replace the communal format." },
      { text: "Many communal dining restaurants use delivery to introduce customers who then come in for the full experience.", correct: false,
        feedback: "Pipeline logic is the right frame here — but state it as the primary case: delivery introduces people to the food, the communal experience draws them in for the full thing." },
      { text: "What's the typical group size for your communal tables?", correct: false,
        feedback: "Discovery about the format, but the concern is about disaggregating a communal experience. Address the channel separation first." },
    ],
  },
  jp85: {
    objection: "We're a breakfast-and-lunch-only restaurant. Our kitchen is done by 2pm. Delivery demand is mainly dinner.",
    responses: [
      { text: "Breakfast and lunch delivery is actually a fast-growing segment — morning commuters ordering from home, WFH professionals ordering midday. Your window aligns with demand that exists in your hours, not against it. And breakfast delivery in particular is under-supplied in most markets. Let me pull your area's data for morning and midday delivery demand specifically.", correct: true, technique: 'Hyperlocal Data',
        feedback: "You challenged the assumption that delivery demand is mainly dinner with category-specific data, and offered to pull the actual morning/midday demand for their area. This directly addresses the timing concern." },
      { text: "Many restaurants find their service hours align with delivery demand patterns better than expected.", correct: false,
        feedback: "Vague optimism doesn't replace data. Offer to pull the specific morning/midday delivery demand for their market." },
      { text: "Breakfast delivery is one of our fastest-growing categories nationally.", correct: false,
        feedback: "National data is interesting but not as convincing as their local market data. Offer to pull their specific area's numbers." },
      { text: "What time do you typically open and close your kitchen?", correct: false,
        feedback: "Good context for the delivery window — ask it as part of 'let me pull the demand data for your service hours' so it leads to a data-backed conversation." },
    ],
  },
  jp86: {
    objection: "We've been featured in multiple travel guides as a destination restaurant. Delivery might undermine the 'destination' framing.",
    responses: [
      { text: "Being a destination and being on delivery aren't contradictions — they're different access modes. Delivery reaches people who've read the travel guides and want your food but can't travel to you this week. When they finally do visit, the food is already familiar and the full destination experience exceeds their expectations. Delivery builds anticipation; the destination delivers on it.", correct: true, technique: 'Pipeline Value',
        feedback: "You reframed the destination-vs-delivery tension as a pipeline: delivery converts curious food readers into eventual in-person visitors. The destination status is strengthened by creating food-familiar audiences who seek it out." },
      { text: "Travel guide recognition and delivery presence are evaluated by different audiences — they don't conflict.", correct: false,
        feedback: "True, but doesn't engage with the destination brand concern. Show how delivery reinforces the destination identity by building anticipation." },
      { text: "Many destination restaurants use delivery to extend their brand reach beyond the travel market.", correct: false,
        feedback: "Social proof is useful but doesn't address the brand coherence concern. Show the pipeline logic that supports the destination framing." },
      { text: "What travel guides have featured you, and what did they emphasize about the experience?", correct: false,
        feedback: "Discovery about the destination narrative — but engage with the brand concern first before exploring what makes the destination unique." },
    ],
  },
  jp87: {
    objection: "Our garden provides all our herbs and greens. Production is seasonal and I won't compromise that for delivery demand.",
    responses: [
      { text: "A garden-sourced menu is a genuine production constraint — and the right model is a delivery menu that reflects what's currently growing, updated as the garden changes. Your listing becomes a real-time expression of your garden: what's in season today is what's available today. That's not a limitation; it's authenticity that customers in the farm-to-table category specifically seek out.", correct: true, technique: 'Reframing',
        feedback: "You converted the seasonal garden constraint into an authentic, living menu that changes with the garden. Real-time menu updates make the seasonal variability a feature — and farm-to-table customers value exactly that honesty." },
      { text: "Your seasonal sourcing is a premium differentiator — many customers would pay more for the authenticity.", correct: false,
        feedback: "Pricing is secondary to the production and integrity concern. Show how the seasonal menu works on the platform before discussing pricing." },
      { text: "You could build a small core delivery menu from your most consistently available garden items.", correct: false,
        feedback: "A stable core is a practical strategy, but the stronger answer is showing how the full garden menu can translate with real-time updates. Show the platform capability first." },
      { text: "What's your current growing season and which items are most consistent year-round?", correct: false,
        feedback: "Good discovery for menu planning — ask it as part of 'let's build your delivery menu around what the garden has right now' rather than as a standalone question." },
    ],
  },
  jp88: {
    objection: "I've worked in Michelin-starred kitchens for 15 years. Delivery feels like a step backward.",
    responses: [
      { text: "Fifteen years of Michelin-kitchen training built the craft that's in your food — and delivery doesn't change what's on the plate. What delivery does is let more people access that craft in a context that doesn't include white tablecloths or a reservation two months out. Reaching more people with exceptional food isn't a step backward — it's a different expression of the same standard.", correct: true, technique: 'Reframing',
        feedback: "You honored the Michelin background with respect and reframed delivery not as a downgrade but as broader access to the same culinary standard. The craft doesn't diminish; it reaches further." },
      { text: "Many Michelin-recognized chefs have launched successful delivery operations without any impact on their reputation.", correct: false,
        feedback: "Social proof from peers is useful eventually, but the emotional concern here is personal — 'a step backward for me.' Engage with the identity directly before citing other chefs." },
      { text: "Delivery actually requires precision and quality control that would leverage your Michelin kitchen experience.", correct: false,
        feedback: "Reframing delivery as a technical challenge that exercises their skills might work for some chefs but isn't the primary concern. Address the career identity concern first." },
      { text: "What specific aspects of your fine dining background are most important to you?", correct: false,
        feedback: "Discovery is useful but asking someone to articulate their career identity before you've engaged with their concern can feel interrogative. Honor the 15 years first." },
    ],
  },
  jp89: {
    objection: "Our restaurant hosts a weekly literary salon. The regular attendees are our most loyal customers. Delivery might alienate them.",
    responses: [
      { text: "Your literary salon regulars come for the intellectual and social experience — delivery doesn't change any of that. The salon stays exactly as it is, on exactly the same schedule, with exactly the same regulars. Delivery happens at different times, in a different channel, with a different audience. Your most loyal customers won't even notice delivery exists unless you tell them.", correct: true, technique: 'Channel Separation',
        feedback: "You showed that the salon regulars and delivery customers are completely separated in time, channel, and audience. The loyal community is entirely unaffected by a delivery channel they'll never encounter." },
      { text: "Many community-focused restaurants find that delivery actually enhances their reputation among regulars.", correct: false,
        feedback: "Social proof in the opposite direction from what they fear doesn't engage with the concern. Show the complete separation of the two audiences." },
      { text: "You could introduce delivery to your salon regulars as a way to experience your food outside of events.", correct: false,
        feedback: "Suggesting you tell your most protective community about delivery before showing it won't affect them is backwards. Show the audience separation first." },
      { text: "What does the literary salon community mean to you and the restaurant?", correct: false,
        feedback: "Good discovery, but the concern is about alienation. Show that the salon community is completely unaffected first." },
    ],
  },
  jp90: {
    objection: "We do all our business through word of mouth and don't want to be indexed or searchable on apps.",
    responses: [
      { text: "Being searchable is optional — you can be listed on the platform in a way that's discoverable only to people who already know your name, rather than appearing in broad 'Japanese food near me' searches. It's possible to use the platform for delivery operations without aggressive discoverability. We can discuss what level of visibility works for your model before making any listing decisions.", correct: true, technique: 'Risk Reversal',
        feedback: "You showed that discoverability is configurable — the restaurant can use the platform for delivery without being aggressively indexed in broad category searches. This directly addresses the 'don't want to be searchable' concern." },
      { text: "Being searchable increases your delivery potential — visibility is generally valuable.", correct: false,
        feedback: "Telling someone who explicitly doesn't want discoverability that visibility is valuable will land as dismissive. Address their specific preference first." },
      { text: "Uber Eats does allow restaurants to manage their listing visibility to some degree.", correct: false,
        feedback: "'To some degree' is vague. Be specific about what visibility controls exist and offer to configure them to their preference before making any decisions." },
      { text: "What concerns you most about being searchable — is it a privacy issue or a brand control issue?", correct: false,
        feedback: "Discovery about the discoverability concern — but offer the visibility configuration solution first. Then asking what specifically concerns them helps refine the approach." },
    ],
  },
  jp91: {
    objection: "Our pastry chef creates intricate plated desserts that would look destroyed in a delivery box.",
    responses: [
      { text: "Plated dessert delivery is a real challenge for intricately layered presentations — and the honest approach is a delivery-specific dessert menu designed for travel. Petits fours, wagashi, jar desserts, and items that are beautiful because of their simplicity and quality rather than their height and geometry work perfectly. Your pastry chef's skill translates; the format adapts to the channel.", correct: true, technique: 'Incremental Logic',
        feedback: "You acknowledged the real plating challenge honestly and offered a concrete solution: a delivery-specific dessert menu with formats that travel beautifully. The pastry chef's craft is preserved in a different form." },
      { text: "Many pastry chefs enjoy the creative challenge of designing a delivery-specific dessert format.", correct: false,
        feedback: "Framing this as a 'creative challenge' might be true but skips the concern about representing the pastry chef's skills accurately. Show the specific formats that work before engaging the chef's creativity." },
      { text: "Customers who order desserts for delivery understand that home consumption differs from restaurant plating.", correct: false,
        feedback: "For a pastry chef who is proud of their plating, asking customers to lower their expectations is the wrong message. Show the delivery-native formats that are genuinely beautiful." },
      { text: "What are your most popular dessert items currently?", correct: false,
        feedback: "Good for identifying which items translate and which don't — ask it as part of 'let's build a delivery dessert menu from your repertoire' rather than as an opener." },
    ],
  },
  jp92: {
    objection: "Our kitchen is run entirely by family members. We can't afford to train anyone on delivery systems.",
    responses: [
      { text: "The delivery system is one tablet with one app — the training is about 10 minutes. Most family members who manage smartphones manage the delivery tablet with minimal orientation. I'd do the setup and initial walkthrough with your family myself so they're not figuring it out alone. The learning curve is genuinely small.", correct: true, technique: 'Risk Reversal',
        feedback: "You addressed the training concern by describing the actual learning curve (10 minutes, like a smartphone) and offering to do the setup and walkthrough personally. Both the simplicity and the personal support remove the barrier." },
      { text: "The delivery interface is designed to be intuitive for all skill levels.", correct: false,
        feedback: "'Intuitive for all skill levels' is a marketing claim. Show what it actually involves and offer to do the setup yourself." },
      { text: "A family member who is comfortable with a smartphone would pick up the tablet quickly.", correct: false,
        feedback: "Better — connect it to a skill they already have. But add the personal support offer: you'll do the setup and walk through it with them." },
      { text: "Which family member would most likely manage the delivery orders day to day?", correct: false,
        feedback: "Good for onboarding planning, but address the training concern first. Show it's simple and offer to handle the setup before asking who would manage it." },
    ],
  },
  jp93: {
    objection: "We close every August for the family to travel to Japan and restock specialty ingredients. Delivery can't accommodate that.",
    responses: [
      { text: "August closure is handled simply: delivery availability is paused for August and resumes in September. The platform has no minimum hours or month-round commitment. Many seasonal restaurants pause delivery during their off-months. Your family schedule and supply trips stay exactly as they are.", correct: true, technique: 'Risk Reversal',
        feedback: "You directly addressed the closure concern: the platform accommodates monthly or seasonal pauses. No commitment to year-round operation is required." },
      { text: "Many seasonal restaurants pause their delivery service during closure periods without any issue.", correct: false,
        feedback: "Social proof is good but brief. Show the specific pause mechanism and confirm there's no commitment requirement." },
      { text: "August is typically a slower delivery month in many markets — the timing works in your favor.", correct: false,
        feedback: "Seasonality data is irrelevant if they're closed. Address the closure accommodation directly." },
      { text: "How long is your August closure typically?", correct: false,
        feedback: "Good context question — ask it after confirming the pause function works, to see how long the pause would be set." },
    ],
  },
  jp94: {
    objection: "We've just been acquired by a restaurant group. I can't make any operational changes until integration is complete.",
    responses: [
      { text: "That's a legitimate decision-making constraint — and the timing matters. Acquisition integrations typically settle within 3–6 months. This is a conversation worth having once the integration is complete, at which point the restaurant group may actually welcome a platform channel that's already set up and performing. I'll follow up at the right time. When does the integration period end?", correct: true, technique: 'Pipeline Value',
        feedback: "You respected a real business constraint without abandoning the relationship. Scheduling the follow-up for post-integration timing shows genuine respect for their situation and keeps the conversation open." },
      { text: "Adding delivery during the integration period might actually demonstrate value to the acquiring group.", correct: false,
        feedback: "Suggesting they make operational changes during an integration when they've specifically said they can't is dismissive of their constraint. Respect the timing." },
      { text: "The restaurant group may already have platform relationships you could leverage post-integration.", correct: false,
        feedback: "Speculating about the acquirer's existing relationships adds complexity. Respect the constraint and schedule the follow-up." },
      { text: "When is the integration expected to be complete?", correct: false,
        feedback: "Right instinct — ask it as part of 'I'll follow up at the right time' so it's scheduled rather than casual." },
    ],
  },
  jp95: {
    objection: "We serve traditional fermented dishes like natto and tsukemono. Delivery customers might not understand what they're ordering.",
    responses: [
      { text: "Listing descriptions are entirely yours to write — and the right descriptions for fermented dishes set expectations clearly: what the flavor profile is, how the dish is traditionally enjoyed, and who it's for. Customers who read the description and order are self-selecting for the experience. The wrong customer doesn't order; the right customer discovers something they'll love. Your listing educates and filters.", correct: true, technique: 'Risk Reversal',
        feedback: "You showed that the listing design solves the customer education concern before the order happens. Accurate, specific descriptions create self-selection — the right customers order, the wrong ones don't." },
      { text: "There's a growing audience for fermented and probiotic foods — your market is larger than you think.", correct: false,
        feedback: "Market size data doesn't address the misunderstanding concern. Show the listing education mechanism that prevents mismatched orders." },
      { text: "You could add preparation and serving notes to the delivery packaging to orient first-time customers.", correct: false,
        feedback: "In-box education is a nice secondary layer — address the pre-order education mechanism (listing descriptions) first." },
      { text: "Which of your fermented dishes do you think would be hardest to describe accurately?", correct: false,
        feedback: "Good discovery for the description design — ask it after establishing that descriptions are the education tool, so it becomes a collaborative writing conversation." },
    ],
  },
  jp96: {
    objection: "Our location is very hard to find — no signage, no map pin, by reservation only. We prefer the discovery to be intentional.",
    responses: [
      { text: "Intentional discovery is exactly what your listing can reflect. Your Uber Eats page can be written to maintain the same selective appeal: no broad promotion, no photo of a sign that doesn't exist, a description that communicates you're not for everyone. The platform can carry the same ethos of intentional discovery — customers who find you on the platform and resonate with the description are as intentional as the ones who get directions by phone.", correct: true, technique: 'Reframing',
        feedback: "You reframed the platform as a medium for intentional discovery rather than mass accessibility. The listing can be written to preserve the mystique — spare, selective, not for everyone. The right customers will find and order; the wrong ones will scroll past." },
      { text: "Many exclusive restaurants that are hard to find do well on delivery because of their intrigue.", correct: false,
        feedback: "Generic social proof doesn't engage with the intentional discovery philosophy. Show how the platform can carry that philosophy." },
      { text: "Delivery customers don't need to find you physically — the platform handles the logistics.", correct: false,
        feedback: "True but misses the point: the concern is about controlling who discovers the restaurant, not navigation. Show how the listing design maintains that control." },
      { text: "What does the discovery experience look like for your current reservation-only customers?", correct: false,
        feedback: "Good discovery for designing the listing to match — ask it as part of 'let me understand the tone of your current onboarding so the listing reflects it.'" },
    ],
  },
  jp97: {
    objection: "We're a cooperative restaurant. Any major business decisions require full team consensus. I can't commit today.",
    responses: [
      { text: "A consensus decision is exactly the right process for a cooperative — and I can support that. I'll prepare a summary document that addresses the most common team concerns: economics, operational impact, brand control, and exit flexibility. Your team gets a clear picture, you make the decision together, and I follow up after your next meeting. What's your typical meeting schedule?", correct: true, technique: 'Long-game Respect',
        feedback: "You respected the cooperative model completely and offered to support the decision process rather than pressure it. Providing a decision-support document for the team shows genuine respect for how they operate." },
      { text: "I understand — take the time you need and reach out when you're ready.", correct: false,
        feedback: "Passive followup means the conversation ends here with no structure. Offer to prepare the decision-support document and schedule the followup explicitly." },
      { text: "Most delivery decisions don't require full team buy-in — this could be treated as an operational trial.", correct: false,
        feedback: "Suggesting they bypass their own governance structure is disrespectful of the cooperative model. Work within it." },
      { text: "What are the main concerns your team would likely raise?", correct: false,
        feedback: "Good discovery — but offer to prepare the decision document first, then ask what concerns to include so you're building toward a useful resource for the team meeting." },
    ],
  },

  // ── THE GREEN MILE (EXTENDED) ──────────────────────────────────────────────
  hl01: {
    objection: "We already have a subscription model that includes delivery. Why would I split revenue with you?",
    responses: [
      { text: "Your subscription serves your existing customers — that's a strong owned channel worth protecting. Uber Eats brings in the customer who isn't subscribed yet and hasn't discovered you. Think of it as acquisition: the platform fee is a cost per new customer, not a split on customers you already have.",
        correct: true, technique: 'Channel Separation',
        feedback: "You validated the subscription as a legitimate owned-channel strategy and showed Uber Eats as purely additive discovery. Subscribers and app users are different populations — make that distinction clear." },
      { text: "A subscription model and delivery platform can run in parallel — many of our partners do both.", correct: false,
        feedback: "Generic compatibility doesn't address the revenue-split concern. Explain why the two channels serve different customers." },
      { text: "Your subscription customers might not always be subscribed — delivery fills the gap.", correct: false,
        feedback: "Questioning the retention of their subscription customers is a sideways criticism of their business model. Don't go there." },
      { text: "What percentage of your revenue currently comes through the subscription?", correct: false,
        feedback: "Good data for building the incremental case, but ask it after showing the channels don't compete — otherwise it sounds like you're assessing how dependent they are on their own model." },
    ],
  },
  hl02: {
    objection: "I track customer acquisition cost religiously. Platform fees are too expensive per acquired customer.",
    responses: [
      { text: "That's exactly the right framework — and it's worth running the actual number for your category and zip code. I can pull your area's average new customer cost through the platform versus your current channels, so you're comparing real CAC, not estimates. Want me to send that data today?",
        correct: true, technique: 'Hyperlocal Data',
        feedback: "You matched their analytical framework with an analytical response — offer to run the actual comparison with their specific market data. Offering to pull real numbers today shows confidence in the data and respect for how they make decisions." },
      { text: "Most restaurants find the platform CAC competes well against paid social and SEO.", correct: false,
        feedback: "A data-driven founder wants specifics, not 'most restaurants.' Offer to pull real numbers for their market." },
      { text: "The platform fee is a variable cost that only exists when you acquire a customer — no upfront spend.", correct: false,
        feedback: "Correct framing but incomplete. They already understand it's variable. Show how the variable rate compares favorably to their actual alternatives." },
      { text: "What's your current blended CAC across channels?", correct: false,
        feedback: "Good discovery for eventual comparison, but ask it as part of building the data case — not as your opener when they've told you CAC is too high." },
    ],
  },
  hl03: {
    objection: "We built our own app. Why would we give 30% to Uber Eats when we keep 100% on ours?",
    responses: [
      { text: "Your own app is right for customers who already know you. Uber Eats reaches people who don't — who are searching 'healthy bowls near me' right now and have never heard of Wholesome Bowl. Think of the fee as a customer acquisition cost for people your app can't reach by definition.",
        correct: true, technique: 'Channel Separation',
        feedback: "You separated the two channels clearly: owned app = retention and conversion of existing audience; Uber Eats = acquisition of people who can't find the owned app because they don't know you exist yet. Both are necessary." },
      { text: "Building and maintaining an app is expensive — the total cost of your own channel may be higher than you think.", correct: false,
        feedback: "Criticizing the economics of their own channel investment creates defensiveness. Don't make them justify a decision they've already made." },
      { text: "A 30% fee sounds high but it's standard across the industry for the demand access it provides.", correct: false,
        feedback: "'Industry standard' is the least persuasive argument to someone who tracks unit economics. Show the value per acquired customer, not the norm." },
      { text: "How much does it cost you to acquire a customer through your own app's paid channels?", correct: false,
        feedback: "Good data to eventually compare, but lead with the channel separation argument first — otherwise this question sounds like you're building a cost comparison before establishing the value." },
    ],
  },
  hl04: {
    objection: "We ran on Uber Eats 18 months ago. The data was disappointing. Revenue was lower than projected and LTV was weak.",
    responses: [
      { text: "That's important to hear — and I want to understand the specifics before making any pitch. Was it order volume, order frequency, or customer quality? The answers would tell me whether the platform conditions have changed in ways that matter for your model or whether the original setup could have been optimized.",
        correct: true, technique: 'Empathy + Discovery',
        feedback: "You resisted the urge to defend the platform and instead asked a question that positions you as an analyst, not a salesperson. Understanding the actual failure mode is the only honest path to showing what might be different now." },
      { text: "A lot has improved in 18 months — platform algorithms, customer targeting, and restaurant tools are all stronger.", correct: false,
        feedback: "Generic platform improvement claims don't address their specific data. Ask what actually failed before offering what's changed." },
      { text: "LTV through delivery platforms is typically lower — that's a category reality, not a platform issue.", correct: false,
        feedback: "Normalizing weak LTV to a founder who tracks it closely won't land well. It sounds like you're making excuses rather than solving the problem." },
      { text: "Would you be willing to share the data from that trial? I'd like to do a post-mortem with you.", correct: false,
        feedback: "Good offer, but make sure you first show genuine curiosity about what happened before asking for their data. Lead with questions, then follow with the offer to analyze together." },
    ],
  },
  hl05: {
    objection: "Our investors specifically want us to own the customer relationship. A platform would give that to Uber Eats, not us.",
    responses: [
      { text: "That's a legitimate investor mandate. The question is whether the customer Uber Eats brings even exists in your owned channels — they don't, because they haven't found you yet. You can own the relationship after acquisition. The platform delivers the customer; your CRM and owned channels retain them.",
        correct: true, technique: 'Stakeholder Navigation',
        feedback: "You engaged with the investor's actual concern — ownership — and reframed the platform as an acquisition channel that feeds into owned relationships. Uber Eats delivers the customer once; your systems own them after." },
      { text: "Most investors don't distinguish between acquisition and owned channels when reviewing growth.", correct: false,
        feedback: "Telling a founder that their investors don't care about something their investors explicitly told them they care about is a way to lose all credibility." },
      { text: "Uber Eats actually gives you customer data post-order — it becomes part of your owned data.", correct: false,
        feedback: "If this is technically accurate, it's a good point — but verify before stating. If it's not fully accurate, it will cause immediate distrust with an analytical founder." },
      { text: "What does 'owning the relationship' mean specifically in your investor's framework — data, retention, or both?", correct: false,
        feedback: "Good discovery, but lead with the acquisition-then-own-retention reframe first. Without that frame, the question sounds like you're probing for a loophole." },
    ],
  },
  hl06: {
    objection: "Our menu changes daily based on what produce comes in. Keeping an app menu updated is a full-time job.",
    responses: [
      { text: "Real-time menu editing takes about 90 seconds per item — and you can also set up a rotating 'featured today' section that's easy to swap each morning. Several farm-to-table partners update daily with no dedicated staff. I can show you exactly how the interface works.",
        correct: true, technique: 'Flexibility Framing',
        feedback: "You gave a specific time estimate, described a specific feature designed for rotating menus, and offered to demonstrate. Concrete beats vague for analytical founders who need to know the actual operational load." },
      { text: "You could keep a consistent core menu on the app and just update specials.", correct: false,
        feedback: "If the whole point of their restaurant is daily-changing menus, a 'consistent core menu' on the app underrepresents what they do. Show the platform can match their actual model." },
      { text: "Most restaurants find a simplified app menu works fine — customers understand the in-store menu may vary.", correct: false,
        feedback: "Asking a produce-driven health restaurant to simplify for the app implies the platform can't keep up with their model. Show that it can." },
      { text: "What's the typical number of menu items that change on a given day?", correct: false,
        feedback: "Good for eventually calibrating the workflow, but ask it after showing the 90-second update process. Without the solution first, this question sounds like you're auditing the problem." },
    ],
  },
  hl07: {
    objection: "The Uber Eats customer demographic skews toward convenience and price. Our target customer is health-focused and willing to pay premium.",
    responses: [
      { text: "I'd want to show you the actual user data for your neighborhood before accepting that framing. The Uber Eats segment in health-focused zip codes looks materially different from the overall platform average — it skews toward higher income, health-oriented orders, and repeat purchase rates. The data for your market specifically might change the picture.",
        correct: true, technique: 'Hyperlocal Data',
        feedback: "You challenged the assumption with a data-based offer rather than a defensive claim. Hyperlocal demographic data is the right tool for an analytical founder who has made a demographic assertion." },
      { text: "Uber Eats has a wide range of user demographics — there are health-focused customers on the platform too.", correct: false,
        feedback: "Vague demographic breadth claims don't counter a specific demographic concern. Offer the actual local data." },
      { text: "Healthy and fast-casual restaurants are one of the fastest-growing categories on our platform.", correct: false,
        feedback: "Category growth is interesting but doesn't address their specific concern about customer quality in their market. Stay local and specific." },
      { text: "What does your current paying customer profile look like in terms of average order value and frequency?", correct: false,
        feedback: "Good data for eventual comparison, but ask it as part of building toward a demographic comparison — not as an opener when they've made a specific claim you can challenge with data." },
    ],
  },
  hl08: {
    objection: "We're B2B — we do office catering. Consumer delivery platforms aren't our channel.",
    responses: [
      { text: "You're right that the core B2B channel is different. But a lot of your catering clients are individuals who order on Uber Eats personally — seeing you there reinforces the brand, increases familiarity, and can actually drive more corporate inquiries. It's a brand presence question as much as a revenue one.",
        correct: true, technique: 'Complementary Positioning',
        feedback: "You accepted the channel distinction but identified a real secondary benefit: individual employees discover the catering brand through personal delivery orders. B2B brand awareness through a B2C channel is a legitimate and often overlooked pathway." },
      { text: "We have a B2B platform product that might be more relevant to your model.", correct: false,
        feedback: "Good to know if true, but pivoting to a different product before engaging with their stated model can feel like a pivot away from the question." },
      { text: "Consumer delivery volume could offset slower catering periods and keep the kitchen running.", correct: false,
        feedback: "For a pure B2B operation, filling kitchen capacity with consumer delivery might create operational conflicts. Understand their model before solving their kitchen utilization." },
      { text: "What percentage of your revenue currently comes from regular corporate accounts versus new ones?", correct: false,
        feedback: "Good discovery about their growth mode, but ask it after presenting the brand-reinforcement angle — otherwise it sounds like you're assessing whether the catering business is sustainable." },
    ],
  },
  hl09: {
    objection: "We're growing 40% year over year without delivery. The business works. Why add risk?",
    responses: [
      { text: "Forty percent growth is excellent and there's a real case for not breaking what's working. The question worth stress-testing is whether there's a ceiling in your current channels and what happens when you hit it. Delivery doesn't interrupt growth — it adds an incremental floor to what you've already built.",
        correct: true, technique: 'Incremental Revenue',
        feedback: "You validated the strong performance and then introduced a future-proofing framing rather than an immediate pitch. Showing delivery as a floor rather than a change respects their success while planting a genuinely useful seed." },
      { text: "Forty percent won't last forever — delivery can sustain momentum when growth slows.", correct: false,
        feedback: "Telling a high-growth founder their growth will slow is likely to be received poorly. Frame it as future-proofing, not pessimism." },
      { text: "That growth might be with us — a lot of restaurants attribute indirect discovery to platform visibility.", correct: false,
        feedback: "Attribution speculation without data is a weak argument. If you can't back it up, don't make it." },
      { text: "What's driving the 40% growth currently — new customers, higher frequency, or larger baskets?", correct: false,
        feedback: "Great discovery question for eventually building the incremental case, but ask it after showing delivery doesn't disrupt their current growth drivers." },
    ],
  },
  hl10: {
    objection: "We need live inventory sync with our POS. If we list something that's sold out, we get one-star reviews.",
    responses: [
      { text: "We have a POS integration that syncs inventory in real time — the item goes unavailable on the app the moment it's sold in-store. I can check which POS you're using right now and confirm the integration is supported before we go any further.",
        correct: true, technique: 'Technical Discovery',
        feedback: "You answered a technical requirement with a technical solution and offered to verify compatibility immediately. This is exactly what a detail-oriented founder needs — a specific answer followed by a commitment to confirm it." },
      { text: "You can manually mark items unavailable when they sell out — it only takes a tap.", correct: false,
        feedback: "Manual processes don't meet the bar for a founder who needs live sync. Don't offer a workaround when the real solution may exist." },
      { text: "Most POS systems have some level of integration with our platform.", correct: false,
        feedback: "'Most' isn't 'yours.' They need a specific confirmation, not a category generalization." },
      { text: "What POS are you running?", correct: false,
        feedback: "Good and necessary question, but ask it after confirming that live POS sync exists as a capability — otherwise it sounds like you're probing for a blocker rather than solving for one." },
    ],
  },
  hl11: {
    objection: "We're in expansion mode — five new locations this year. I don't have capacity to manage another operational layer.",
    responses: [
      { text: "Five locations is a real undertaking — and setting up Uber Eats across all of them actually takes less time than setting up one new location. Multi-location management is handled from a single dashboard, and our team does the individual store setup. You'd have five stores live without five setup projects.",
        correct: true, technique: 'Scale Framing',
        feedback: "You turned the scale concern into a scale advantage. Five locations set up in parallel through one dashboard is actually less operational lift than five sequential individual projects — and it demonstrates the platform was designed for this." },
      { text: "A phased rollout might make sense — start with one location and expand as you get comfortable.", correct: false,
        feedback: "A phased rollout for someone launching five locations in one year doesn't meet their timeline. Show the platform can match their pace." },
      { text: "Our enterprise team can handle the complexity of multi-location rollouts.", correct: false,
        feedback: "Mentioning enterprise support before describing why it's actually less complex than they think leads with escalation rather than simplification." },
      { text: "Which of the five locations is opening first?", correct: false,
        feedback: "Good discovery, but ask it as part of building the parallel setup case — not as an opener when they've said they don't have capacity." },
    ],
  },
  hl12: {
    objection: "A competitor just offered us better data sharing — full order-level data, not aggregates. Can you match that?",
    responses: [
      { text: "That's a specific ask and I'll give you a direct answer: let me find out exactly what data fields we provide at the order level versus what they've offered you. If there's a gap, I'll tell you honestly. I'd rather know the comparison is accurate before committing to a match.",
        correct: true, technique: 'Transparency/Partnership',
        feedback: "You didn't deflect, over-promise, or dismiss the competitor offer. Saying you'll verify and respond honestly is the highest-trust answer you can give to a data-driven founder who will spot a bluff immediately." },
      { text: "We provide comprehensive analytics — most founders find our dashboard covers their reporting needs.", correct: false,
        feedback: "Vague reassurances about your dashboard won't satisfy someone who just told you they have a specific data requirement and a competitor willing to meet it." },
      { text: "Data sharing terms can often be expanded through a partnership agreement — let's explore that.", correct: false,
        feedback: "Suggesting a special negotiation before knowing whether you actually have the product creates false expectations. Know the answer before making the offer." },
      { text: "What specific data fields are most important to you in that feed?", correct: false,
        feedback: "Good discovery, but ask it after showing you take the comparison seriously and are going to find out the real answer — not as an alternative to answering." },
    ],
  },
  hl13: {
    objection: "Our average ticket is $42. The platform fee feels disproportionately high as a percentage of that.",
    responses: [
      { text: "At $42, the economics are worth modeling together. A $42 delivery ticket on an order that uses existing kitchen capacity has a very different margin profile than a $42 dine-in ticket that requires the full cost of the dining experience. I can show you what the net contribution looks like on the incremental orders specifically.",
        correct: true, technique: 'Incremental Margin Logic',
        feedback: "You moved the conversation from percentage to contribution margin on incremental volume — which is the right way to evaluate delivery economics at any ticket size. Existing fixed costs change the math fundamentally." },
      { text: "A $42 ticket is actually strong for delivery — the fee is the same percentage regardless.", correct: false,
        feedback: "Pointing out the fee is consistent regardless doesn't make it feel smaller. Address the margin math, not the fee structure consistency." },
      { text: "We have tiered fee structures for higher-average-ticket restaurants — I can check what applies to your category.", correct: false,
        feedback: "Implying there might be a discount before making the economics case signals the standard rate isn't defensible. Make the case first." },
      { text: "What's your current net margin on a dine-in cover?", correct: false,
        feedback: "Good data for building the incremental comparison, but ask it after showing the incremental delivery math is fundamentally different — otherwise it sounds like you're gathering ammunition for a fee negotiation." },
    ],
  },
  hl14: {
    objection: "I need to understand the attribution model. How do I know which customers came through Uber Eats versus my other channels?",
    responses: [
      { text: "The platform provides order-level attribution for every Uber Eats transaction — you know the source, the customer ID, and the order detail. For cross-channel attribution with your own app or CRM, we have an API integration that can feed into most analytics stacks. I can send the technical spec today.",
        correct: true, technique: 'Transparency/Partnership',
        feedback: "You gave a specific, technically credible answer and offered to send the integration documentation. A data-driven founder asking about attribution deserves a technical answer, not a vague reassurance." },
      { text: "Our analytics dashboard shows you all your Uber Eats orders in one place.", correct: false,
        feedback: "A dashboard showing your own orders doesn't address cross-channel attribution. They want to know how it integrates with their existing tracking." },
      { text: "Attribution is a complex area across the industry — most restaurants rely on revenue totals by channel.", correct: false,
        feedback: "Normalizing attribution limitations to a data-driven founder who specifically asked about it signals you don't have a good answer." },
      { text: "What analytics stack are you currently using for attribution?", correct: false,
        feedback: "Good technical discovery, but ask it after confirming you have an API integration path — not as your opener when they've asked a direct capability question." },
    ],
  },
  hl15: {
    objection: "We've already partnered with a local delivery co-op as part of our brand values. Switching feels like a betrayal.",
    responses: [
      { text: "I respect that commitment — and you wouldn't have to switch. The co-op handles your existing customers and geographic area. Uber Eats would add the customers outside that network who aren't finding you through the co-op. Both can run simultaneously without conflict.",
        correct: true, technique: 'Complementary Positioning',
        feedback: "You respected the values commitment completely and positioned Uber Eats as purely additive rather than a replacement. Two delivery channels serving different discovery contexts don't conflict." },
      { text: "Local co-ops are a good community commitment but they can't match the reach of a platform like ours.", correct: false,
        feedback: "Criticizing their values partner creates an adversarial dynamic. Show both can coexist rather than arguing one is better." },
      { text: "Many of our restaurant partners also work with local co-ops — it's becoming a common setup.", correct: false,
        feedback: "Normalizing the dual arrangement is less powerful than showing it serves two genuinely different customer populations. Give the structural argument." },
      { text: "How long have you been working with the co-op?", correct: false,
        feedback: "Good for relationship building, but ask it after showing the two partnerships don't conflict — otherwise it sounds like you're assessing how entrenched the relationship is." },
    ],
  },
  hl16: {
    objection: "Our marketing team is focused on our owned content strategy. We can't dilute the brand with a third-party platform.",
    responses: [
      { text: "Your owned content builds depth with people who already follow you. Uber Eats builds breadth — it reaches the person who hasn't seen your content yet and is searching for your category right now. The two strategies work at different points in the funnel, not against each other.",
        correct: true, technique: 'Channel Separation',
        feedback: "You separated the marketing funnel stages cleanly: owned content = nurture existing audience; discovery platform = top of funnel for people outside that audience. Different functions, not competing ones." },
      { text: "Your brand doesn't get diluted by being on a platform — it gets more exposure.", correct: false,
        feedback: "A marketing team focused on brand control won't be reassured by more exposure. Address the dilution concern specifically." },
      { text: "Uber Eats actually has brand-building tools — editorial placements, collections, curated content.", correct: false,
        feedback: "Platform content features are interesting but secondary. Address the 'dilution' concern before introducing new features." },
      { text: "What does your current content strategy focus on — social, email, or something else?", correct: false,
        feedback: "Good discovery for tailoring the pitch, but ask it after showing the two channels serve different funnel stages — not as your opener." },
    ],
  },
  hl18: {
    objection: "We use 100% organic produce and our margins are already under pressure. Platform fees would destroy any profit.",
    responses: [
      { text: "Organic premium margins are tight — I won't pretend otherwise. The model that works is a delivery-specific menu priced to reflect true costs: organic sourcing plus platform fee plus packaging, honestly priced. Delivery customers seeking organic food are specifically the segment willing to pay a premium for it. The economics work when pricing is set correctly, not at in-house prices. Let me model the numbers with you.", correct: true, technique: 'Hyperlocal Data',
        feedback: "You acknowledged the margin reality honestly and offered the specific solution: delivery-specific pricing that includes all costs. Organic food customers are price-sensitive to quality, not price — they'll pay the honest price." },
      { text: "Many organic restaurants find delivery order sizes are large enough to offset the fee.", correct: false,
        feedback: "Order size averages don't address the specific cost structure concern. Model the actual pricing together." },
      { text: "You could choose only your highest-margin items for the delivery menu.", correct: false,
        feedback: "Menu curation helps but doesn't address the pricing model question. Show how delivery-specific pricing protects margin first." },
      { text: "What are your current food cost percentages for your key organic ingredients?", correct: false,
        feedback: "Good for the pricing model — ask it as part of 'let me model the numbers with you' rather than as a standalone opener." },
    ],
  },
  hl19: {
    objection: "Our customers come for the wellness community experience — events, workshops, coaching. Delivery can't replicate that.",
    responses: [
      { text: "Your wellness community is your in-house offering — and delivery doesn't try to carry it. What delivery does is reach the person who attends your workshops, loves your food, and wants to order it on the days they're not there. Delivery serves your existing community in a new moment. And it introduces people to your food who then discover the community exists. Delivery feeds the community both ways.", correct: true, technique: 'Pipeline Value',
        feedback: "You showed delivery as both a service extension for existing community members and a discovery tool for future members. The community is the destination; delivery is both a service to it and a path into it." },
      { text: "Many wellness brands have found delivery to be a consistent revenue stream alongside their event business.", correct: false,
        feedback: "Revenue consistency is secondary to the community concern. Show how delivery serves and builds the community." },
      { text: "You could promote your events and workshops in your delivery packaging.", correct: false,
        feedback: "Good tactic for the community pipeline, but make the case first that delivery serves and builds the community before discussing promotional tactics." },
      { text: "What percentage of your revenue comes from food versus events and workshops?", correct: false,
        feedback: "Good for understanding the business model — ask it after framing delivery as supporting both the food and the community sides of the business." },
    ],
  },
  hl20: {
    objection: "We source from 8 local farms within 50 miles. If delivery spikes demand, I can't honor all my farm contracts.",
    responses: [
      { text: "Farm contracts and delivery demand can stay aligned with the right approach: daily quantity limits per item that match your contracted supply. When this week's kale is sold, kale dishes close on the platform. You're never promising more than what's contracted. Delivery channels your existing supply rather than creating demand beyond it.", correct: true, technique: 'Risk Reversal',
        feedback: "You showed the quantity limit mechanism that prevents delivery from exceeding contracted supply. The farm relationships are protected by the same tool that manages customer expectations." },
      { text: "You could use the platform to showcase your farm partnerships — it's a marketing differentiator.", correct: false,
        feedback: "Farm storytelling is a secondary benefit. The immediate concern is supply integrity — address the quantity management tool first." },
      { text: "Working with your farm partners on a small delivery-specific allocation would be straightforward.", correct: false,
        feedback: "Renegotiating farm contracts to add delivery allocation introduces the supply pressure the owner is worried about. Show that delivery can work within existing contracts." },
      { text: "What's your current supply volume from each farm per week?", correct: false,
        feedback: "Good for setting per-item delivery caps — ask it as part of 'let's set your delivery quantities to match your contracted supply.'" },
    ],
  },
  hl21: {
    objection: "We're certified by a specific wellness body. Adding delivery might jeopardize our certification standards.",
    responses: [
      { text: "Delivery doesn't change your kitchen practices, your sourcing, or your preparation — all of which are what wellness certifications cover. The certification body evaluates what happens in your kitchen, not how food reaches customers. Your standards stay exactly as they are; delivery is a distribution change, not a production change. Worth confirming with your certifying body, but the mechanism should be clear.", correct: true, technique: 'Risk Reversal',
        feedback: "You separated the certification scope (kitchen practices and sourcing) from the delivery method (distribution). The standards the certification covers are unchanged by delivery." },
      { text: "Most wellness certifications don't have any requirements around delivery channels.", correct: false,
        feedback: "Speculating about most certifications is risky. The accurate answer is that certifications typically cover production practices — and offer to help them verify with their specific body if needed." },
      { text: "You could include your certification credentials prominently in your delivery listing.", correct: false,
        feedback: "Marketing the certification is secondary to protecting it. Address the jeopardization concern first." },
      { text: "Which wellness certification body do you work with?", correct: false,
        feedback: "Good context for verifying requirements, but address the mechanism first: certifications cover production, not distribution. Then offer to verify with the specific body if they'd like." },
    ],
  },
  hl22: {
    objection: "Our nutritionist is part of the team and approves every menu item. Delivery requests might push us toward less healthy choices.",
    responses: [
      { text: "Your nutritionist's approval is for your kitchen decisions — the delivery menu is a subset of what they've already approved. Delivery doesn't introduce new items; it channels the items your nutritionist has already cleared to more customers. The review process stays exactly as it is. If anything, delivery is an opportunity to show how many people want exactly the food your nutritionist has built.", correct: true, technique: 'Risk Reversal',
        feedback: "You showed that delivery uses the existing approved menu rather than creating pressure to expand beyond it. The nutritionist's standards are preserved because the delivery menu reflects what's already been approved." },
      { text: "Delivery customers seeking health food are specifically looking for the rigorous nutrition approach you offer.", correct: false,
        feedback: "True but doesn't address the process concern. Show that delivery is a subset of the existing approved menu, not a new category requiring new approvals." },
      { text: "You could include nutritional information in your listing to appeal to health-conscious customers.", correct: false,
        feedback: "Nutrition transparency is a secondary benefit. Address the 'pushed toward less healthy' concern with the existing-approval-process argument first." },
      { text: "How often does your nutritionist review and update the menu?", correct: false,
        feedback: "Good context for understanding the review cycle, but address the 'no new approvals needed' concern first." },
    ],
  },
  hl23: {
    objection: "Our customers are managing specific health conditions. I'm worried about dietary errors causing real harm.",
    responses: [
      { text: "Dietary accuracy on delivery is your responsibility exactly as it is in-house — and the platform gives you more tools, not fewer. Allergen information, ingredient listings, and dietary tags are all part of your listing setup. Customers with specific conditions who order delivery are accustomed to verifying these details before ordering. Your accuracy standards apply; the platform provides the transparency infrastructure.", correct: true, technique: 'Risk Reversal',
        feedback: "You showed that delivery provides more dietary transparency tools than a verbal menu description, and that customers with conditions are experienced at verifying dietary details before ordering. The accuracy standard is maintained and supported." },
      { text: "We have tools to help you list allergens and dietary information clearly on your menu.", correct: false,
        feedback: "Listing tools are good to mention, but address the health risk concern directly first: your accuracy standards apply, and the platform's transparency tools support them." },
      { text: "Most customers with serious conditions consult their healthcare providers about delivery food.", correct: false,
        feedback: "Shifting responsibility to healthcare providers is not the right response. Show how the platform's dietary transparency tools support your accuracy standards." },
      { text: "What specific dietary conditions does your customer base typically manage?", correct: false,
        feedback: "Good for understanding their concern in depth — ask it after showing that the platform's allergen and dietary tools support accurate representation of their menu." },
    ],
  },
  hl24: {
    objection: "We prep cold-pressed juices daily at 5am. They're at peak freshness by 8am. Delivery can't maintain that.",
    responses: [
      { text: "Cold-pressed juices are time-sensitive, and delivery timing can be designed around that. Morning delivery windows — 8 to 10am — when your juices are at peak freshness are the natural slot. You'd set delivery availability to your morning window only, and customers ordering know they're getting same-day fresh juice. That's a selling point, not a limitation: 'fresh-pressed this morning, delivered by 10am.'", correct: true, technique: 'Reframing',
        feedback: "You converted the freshness timing concern into a scheduled delivery window that works with your production rhythm. The 5am prep and 8am peak become a premium morning delivery slot — specific, authentic, and marketable." },
      { text: "Insulated packaging keeps cold-pressed juices at optimal temperature for several hours.", correct: false,
        feedback: "Temperature maintenance is secondary to the freshness peak window concern. Show the morning delivery schedule that matches the freshness cycle." },
      { text: "Many cold-pressed brands offer delivery with a freshness guarantee tied to same-day consumption.", correct: false,
        feedback: "Good frame, but show the specific scheduling model that aligns delivery with their 8am freshness peak rather than citing other brands." },
      { text: "What time do you typically start offering juices to walk-in customers?", correct: false,
        feedback: "Good for designing the delivery window — ask it as part of 'let's schedule delivery for your fresh window' rather than as a standalone question." },
    ],
  },
  hl25: {
    objection: "We have a registered dietitian on staff who builds every meal plan. Delivery removes the personalization.",
    responses: [
      { text: "Your dietitian builds meal plans for your clients — that's a separate, consultative service that delivery doesn't touch. Delivery carries your standard menu: the dietitian-designed dishes available to anyone. The personalized meal plans and the general delivery menu are different products. Your clinical service stays intact; delivery makes your food more accessible to people who haven't engaged in the personalized program.", correct: true, technique: 'Channel Separation',
        feedback: "You separated the personalized meal planning service (clinical, unchanged) from the general delivery menu (accessible). Both serve different customers with different needs." },
      { text: "Delivery customers seeking healthy food would benefit from your dietitian-designed recipes even without personalization.", correct: false,
        feedback: "True but it doesn't address the 'removes personalization' concern. Show that personalization and delivery are separate products before making the benefit argument." },
      { text: "You could offer a 'dietitian consultation add-on' for delivery customers who want personalization.", correct: false,
        feedback: "Interesting product extension, but it comes after addressing the core concern: the personalized service stays intact while delivery carries the standard menu." },
      { text: "What percentage of your customers are on personalized plans versus ordering from the standard menu?", correct: false,
        feedback: "Good for understanding the two populations — ask it after establishing the channel separation so it becomes a sizing question rather than a challenge." },
    ],
  },
  hl26: {
    objection: "We grow microgreens in-house in a controlled environment. Production is fixed at 30 portions per day.",
    responses: [
      { text: "Thirty portions daily is your ceiling — and the delivery menu respects it with a hard daily cap. When the 30 portions are sold across dine-in and delivery combined, the item closes automatically. You could allocate a portion of that 30 to delivery — say, 10 — and the rest to your dining room. The platform tracks inventory in real time so you never oversell what you grow.", correct: true, technique: 'Incremental Logic',
        feedback: "You showed the daily cap mechanism and the optional allocation split between dine-in and delivery. The fixed production is the delivery limit — no more, no less." },
      { text: "Your microgreen production could scale over time as delivery demand grows.", correct: false,
        feedback: "Suggesting production scaling jumps ahead of the current decision. Show how delivery works within existing production first." },
      { text: "You could list microgreens as an add-on rather than a main component to extend the portions.", correct: false,
        feedback: "Add-on format is a creative option, but address the production cap mechanism first. The quantity limit tool is the structural answer." },
      { text: "How do you currently allocate your daily microgreen production across different dishes?", correct: false,
        feedback: "Good for designing the allocation split — ask it as part of 'let's decide how many to reserve for delivery versus the dining room.'" },
    ],
  },
  hl27: {
    objection: "Our concept is specifically anti-fast food. Delivery infrastructure feels like the same system.",
    responses: [
      { text: "You're right that delivery platforms also serve fast food — but the platform doesn't define what you serve. Your listing is your restaurant, not a fast food joint. A customer who searches for healthy, clean-label food and finds you is looking for exactly what you represent. The platform is neutral infrastructure; your identity on it is entirely yours. Many anti-fast-food concepts use it to reach customers who are actively searching for the alternative.", correct: true, technique: 'Reframing',
        feedback: "You separated the platform (neutral delivery infrastructure) from the restaurants that use it (which include your anti-fast-food concept). The customer who finds you through search intent is already aligned with your values." },
      { text: "Uber Eats carries a wide range of restaurant types — your presence would represent your category well.", correct: false,
        feedback: "Diversity of restaurant types doesn't directly address the 'same system as fast food' concern. Show that the platform is neutral infrastructure and your identity controls your positioning." },
      { text: "Many health food restaurants have actually used delivery platforms to compete directly against fast food.", correct: false,
        feedback: "Competitive framing is interesting but doesn't address the philosophical concern about the system. Engage with the neutrality of the platform first." },
      { text: "What specifically about delivery infrastructure feels aligned with fast food systems to you?", correct: false,
        feedback: "Discovery, but the concern is a values-based one about systems. Address the neutral infrastructure argument first before exploring what specifically bothers them." },
    ],
  },
  hl28: {
    objection: "We serve raw vegan food. Food safety with raw ingredients over delivery time is a serious concern.",
    responses: [
      { text: "Raw vegan food actually has a strong food safety profile for delivery: no hot-hold temperature requirements, no cook-time issues. Produce-based raw foods are safe at ambient or refrigerated temperatures for typical delivery windows. The risk profile is lower than cooked proteins. Cold pack inserts maintain the right temperature through the delivery window. Raw vegan and delivery are actually well-aligned.", correct: true, technique: 'Reframing',
        feedback: "You reframed the food safety concern by showing raw vegan's actual safety profile: no hot-hold issues, safe at ambient or refrigerated temperatures. This is the correct answer and directly addresses the specific safety concern." },
      { text: "We have insulated packaging designed to maintain food temperature throughout delivery.", correct: false,
        feedback: "Temperature maintenance is relevant but the owner needs to understand why raw vegan specifically is lower-risk for delivery, not just that packaging helps." },
      { text: "Many raw vegan restaurants are among our most successful delivery partners.", correct: false,
        feedback: "Social proof doesn't address the food safety concern. Show the food safety logic for raw vegan specifically." },
      { text: "What raw ingredients are you most concerned about in terms of food safety during delivery?", correct: false,
        feedback: "Good discovery for the safety analysis, but lead with the raw vegan safety profile first — then ask about specific ingredients if additional context is needed." },
    ],
  },
  hl29: {
    objection: "Our smoothie bowls and acai bowls need to be made and eaten immediately. They melt within 10 minutes.",
    responses: [
      { text: "Smoothie bowls are a real time-sensitive challenge for delivery. The honest model is a delivery-specific version: the base and toppings shipped separately in insulated packaging so the customer assembles and eats immediately on arrival. Many acai bowl brands deliver exactly this way — it's become the expected format and customers appreciate the assembly experience. Your bowl, their hands, peak freshness.", correct: true, technique: 'Social Proof',
        feedback: "You showed the component-delivery solution that's industry-standard for acai and smoothie bowls. Separate base and toppings with customer assembly is both practical and positioned as a feature." },
      { text: "Customers who order smoothie bowls understand they need to be consumed quickly after delivery.", correct: false,
        feedback: "Customer awareness doesn't solve the 10-minute melting problem. Show the component packaging solution that prevents the melt." },
      { text: "A 'frozen delivery' format could extend the freshness window for smoothie bowls significantly.", correct: false,
        feedback: "Frozen delivery is a different product category with different logistics requirements. The component-packaging solution is the simpler, proven answer." },
      { text: "What's the typical delivery time in your area from order to arrival?", correct: false,
        feedback: "Timing context is useful but doesn't solve a 10-minute melt window. Show the component assembly solution first." },
    ],
  },
  hl30: {
    objection: "We have a juice cleanse subscription that covers 80% of our revenue. Delivery would be a distraction from our core.",
    responses: [
      { text: "Your subscription cleanse is your core — and delivery could support it rather than distract from it. Delivery reaches the person who hasn't started a cleanse yet: they order your food once, experience the quality, and become a cleanse subscriber. Delivery is your acquisition channel for the subscription product. The 80% subscription revenue could grow because of delivery, not in spite of it.", correct: true, technique: 'Pipeline Value',
        feedback: "You showed delivery as an acquisition funnel for the subscription core business. A first-time delivery order converts the right customers into cleanse subscribers — delivery feeds the revenue model, not competes with it." },
      { text: "Many subscription food brands use delivery for one-off customers who aren't ready to subscribe.", correct: false,
        feedback: "Good direction but doesn't develop the pipeline logic specifically. Show how one-time delivery customers convert to subscription customers." },
      { text: "Delivery could provide a secondary revenue stream that reduces subscription dependency.", correct: false,
        feedback: "Revenue diversification is a weak argument to someone who's proud of their 80% subscription model. Show how delivery grows the subscription, not diversifies away from it." },
      { text: "How do you currently acquire new cleanse subscribers?", correct: false,
        feedback: "Good discovery for showing where delivery fits the acquisition funnel — ask it after establishing the delivery-to-subscription pipeline." },
    ],
  },
  hl31: {
    objection: "Our food philosophy is about mindfulness and slowing down. Delivery promotes the opposite.",
    responses: [
      { text: "Delivery and mindfulness aren't necessarily opposed — it depends on what the customer does with the food. A person who orders your mindful, whole-food meal instead of fast food is making a more mindful choice than their alternative. You're not delivering speed; you're delivering food that promotes a different way of eating, in whatever setting the customer has. The philosophy travels in the food.", correct: true, technique: 'Reframing',
        feedback: "You reframed delivery not as speed culture but as expanding access to mindful food choices. The customer's alternative without your delivery option might be less mindful — your food shifts that choice." },
      { text: "Many mindfulness-focused brands have found delivery aligns with their values when the food itself embodies those values.", correct: false,
        feedback: "Social proof doesn't address the philosophical tension. Engage with the specific reframe: delivery of mindful food promotes mindful eating choices." },
      { text: "You could brand your delivery as a 'mindful meal delivery' with packaging that reflects the philosophy.", correct: false,
        feedback: "Branding is a secondary consideration. Address the philosophical concern first with the 'food carries the philosophy' argument." },
      { text: "What does mindfulness mean to your brand specifically?", correct: false,
        feedback: "Good discovery, but engage with the tension first. Show how delivery can be consistent with the mindfulness philosophy before exploring what it means in depth." },
    ],
  },
  hl32: {
    objection: "Our produce is picked up from the farm at 6am and we sell out by noon. I can't add more customers to that inventory.",
    responses: [
      { text: "Selling out by noon is your current capacity ceiling — and delivery doesn't require you to exceed it. It can work within it: if you have 50 portions of your grain bowl, 40 go to walk-ins and 10 go to delivery, with a hard cap. Delivery channels the same inventory to different customers, it doesn't demand more of it. In fact, delivery orders placed in advance give you more predictable demand data for your farm pickup quantity.", correct: true, technique: 'Incremental Logic',
        feedback: "You showed two things: delivery works within existing inventory with allocation limits, and advance orders actually improve production planning for the farm pickup. The second point reframes delivery as a planning tool." },
      { text: "Selling out consistently means you have strong demand — delivery would help you serve it.", correct: false,
        feedback: "'Help you serve it' implies producing more, which is what they're worried about. Show that delivery works within existing inventory with caps." },
      { text: "You could increase your farm order slightly to accommodate delivery demand.", correct: false,
        feedback: "Suggesting they increase their farm commitment before they've agreed to delivery puts delivery ahead of the relationship. Show the within-inventory model first." },
      { text: "How much inventory do you typically have left at noon when you sell out?", correct: false,
        feedback: "The question implies measuring unsold inventory, but they've said they sell out. Show the allocation model first, then ask how they'd want to split the existing inventory." },
    ],
  },
  hl33: {
    objection: "We run corporate wellness programs. Individual consumer delivery doesn't align with our B2B focus.",
    responses: [
      { text: "Corporate wellness and consumer delivery serve different moments for the same person: the employee who eats your food at a corporate event and then wants to order it at home is both a B2B client via the wellness program and a potential delivery customer. Delivery converts your B2B audience into individual repeat customers — adding a B2C revenue layer to the corporate relationships you already have.", correct: true, technique: 'Pipeline Value',
        feedback: "You showed the individual-level bridge: the corporate wellness client's employees are also potential delivery customers. B2B and B2C aren't competing markets — they're the same people in different contexts." },
      { text: "Many corporate wellness providers have found individual delivery to be a natural extension.", correct: false,
        feedback: "Social proof doesn't explain the specific mechanism. Show the B2B-to-B2C conversion pipeline." },
      { text: "Delivery could actually serve as a sales tool for your corporate wellness pitch.", correct: false,
        feedback: "Interesting but speculative. The stronger case is showing how delivery serves the existing employee audience you already reach through corporate programs." },
      { text: "How do employees typically interact with your food during corporate wellness programs?", correct: false,
        feedback: "Good discovery for the conversion argument — ask it after establishing the B2B-to-individual pipeline." },
    ],
  },
  hl34: {
    objection: "We serve only sprouted grains and live foods. They require specific storage that delivery can't guarantee.",
    responses: [
      { text: "Sprouted grains and live foods are stable at refrigerated temperatures for the delivery window — typically 30–45 minutes. Cold-pack insulation maintains the storage requirements through delivery. And the customer receiving live foods for delivery is already knowledgeable about storage — they're seeking this food specifically because they understand it. Your listing can include storage instructions for after delivery. The chain is manageable.", correct: true, technique: 'Risk Reversal',
        feedback: "You showed that the storage concern is addressed at three points: insulated packaging maintains temperature during delivery, the customer audience is knowledgeable about live foods, and post-delivery instructions complete the chain." },
      { text: "Many specialty health food restaurants deliver live foods successfully with proper packaging.", correct: false,
        feedback: "Social proof is good but doesn't address the specific storage mechanism. Show how insulated packaging and the informed customer base handle the storage requirements." },
      { text: "You could specify a maximum delivery radius to ensure live foods reach customers within your ideal timeframe.", correct: false,
        feedback: "Radius limitation is a useful control, but address the storage mechanism first. Then radius as a safety parameter makes sense." },
      { text: "What specific temperature requirements do your sprouted and live foods have?", correct: false,
        feedback: "Good technical context — ask it as part of 'let me show how the packaging and delivery window handle your specific requirements.'" },
    ],
  },
  hl35: {
    objection: "We operate a fitness studio upstairs. Our food business is secondary — I can't let it consume focus.",
    responses: [
      { text: "Delivery is designed to run with minimal attention: orders arrive on a tablet, your kitchen fulfills them, pickup happens at the door. Many restaurant owners who run parallel businesses say delivery becomes background noise once it's set up. And the fitness studio upstairs is your delivery audience: members who eat your food after class and want it at home on rest days. Two businesses that already share customers.", correct: true, technique: 'Incremental Logic',
        feedback: "You addressed the focus concern (delivery is low-attention once running) and showed the natural customer overlap between the studio and the food business. The studio audience is already your delivery market." },
      { text: "The fitness studio and the healthy food business are natural complements — delivery supports both.", correct: false,
        feedback: "Complementarity is true but doesn't address the focus concern. Show the low-attention model first, then the customer overlap." },
      { text: "You could delegate delivery management to an existing staff member with minimal additional responsibility.", correct: false,
        feedback: "Delegation is good operational advice, but address the overall attention demand first. Show that delivery is genuinely low-focus before discussing who handles it." },
      { text: "How many staff do you currently have working in the food business side?", correct: false,
        feedback: "Good for assessing delegation options, but address the focus concern first — show delivery is low-attention by design." },
    ],
  },
  hl36: {
    objection: "Our customers follow very specific dietary protocols — keto, carnivore, AIP. Our menu is specialized. Will delivery customers understand it?",
    responses: [
      { text: "Specialized dietary protocols are growing and the customers who follow them are actively searching for restaurants that accommodate them. Your listing on the platform includes dietary tags and filters — keto, paleo, AIP-friendly — that specifically attract the right audience. The customers who find you through those filters are already your people. The platform's search and filter tools are exactly how specialized menus find specialized customers.", correct: true, technique: 'Hyperlocal Data',
        feedback: "You showed that the platform's dietary filter system is designed for exactly this use case. Specialized dietary customers actively use filters to find appropriate restaurants — your specialized menu becomes a discovery advantage." },
      { text: "Delivery customers who seek health food are generally knowledgeable about dietary protocols.", correct: false,
        feedback: "General health-food knowledge doesn't guarantee understanding of AIP or carnivore protocols. Show the filter system that attracts specifically the right customers." },
      { text: "You could include educational content about your dietary protocols in your listing description.", correct: false,
        feedback: "Good for converting the right customers — but show the filter-based discovery mechanism first. Filters bring the right audience; descriptions convert them." },
      { text: "Which dietary protocols are most represented in your current customer base?", correct: false,
        feedback: "Good for understanding your audience — ask it after showing the filter mechanism that attracts those specific protocol followers." },
    ],
  },
  hl37: {
    objection: "We run a food-as-medicine program with a hospital network. Any brand association with a delivery app could concern our partners.",
    responses: [
      { text: "Your hospital partnership and a delivery channel are entirely separate institutional relationships — one is a healthcare partnership, the other is a consumer food channel. The hospital network cares about the food quality and protocols you deliver through their program, not about what distribution channels you use for your general restaurant business. Delivery doesn't implicate the partnership.", correct: true, technique: 'Risk Reversal',
        feedback: "You separated the institutional healthcare relationship (what the hospital cares about) from the consumer delivery channel (unrelated to the partnership). The hospital evaluates your food protocols and quality, not your distribution choices." },
      { text: "Delivery could actually support your food-as-medicine mission by reaching more patients at home.", correct: false,
        feedback: "Interesting angle, but address the partnership concern first before proposing delivery as a mission extension." },
      { text: "Many healthcare-adjacent food brands run consumer delivery channels without any impact on clinical relationships.", correct: false,
        feedback: "Social proof is useful, but show the separation of institutional and consumer channels first." },
      { text: "Have you discussed any delivery-related concerns with your hospital network partners?", correct: false,
        feedback: "Good eventual step, but the more helpful immediate answer is showing why the two relationships are separate. Then if they want to confirm with partners, they have the framing." },
    ],
  },
  hl38: {
    objection: "We're a non-GMO verified business. The association with a platform that serves conventional fast food concerns me.",
    responses: [
      { text: "The platform carries all restaurant types, but your listing is your identity — not defined by the other restaurants on it. Your non-GMO verified status is a tag, a badge, and a description on your listing. Customers who filter for clean-label or non-GMO food are specifically looking past fast food and finding you. The association concern is answered by how clearly you present your verification and how deliberately your audience finds you.", correct: true, technique: 'Premium Positioning',
        feedback: "You showed that the platform is neutral infrastructure and your certification is the brand marker that distinguishes you within it. The right customers use filters and descriptions to find you; the platform context doesn't dilute your verification." },
      { text: "Your non-GMO certification is a strong differentiator that would stand out on the platform.", correct: false,
        feedback: "Differentiation is the outcome; the path is showing how the certification is visible and searchable on the platform. Show the mechanism." },
      { text: "Many certified food brands use delivery platforms without any perceived brand dilution.", correct: false,
        feedback: "Social proof doesn't address the specific association concern. Show how your certification is prominently displayed and how the right customers find it." },
      { text: "What other certifications or standards does your brand maintain?", correct: false,
        feedback: "Good for building the listing's credential display, but address the association concern first before exploring what else to feature." },
    ],
  },
  hl39: {
    objection: "We do 1:1 nutrition coaching alongside meals. Delivery would commoditize what we're trying to make personal.",
    responses: [
      { text: "Your coaching service stays personal and separate — delivery carries the meals, not the coaching relationship. These are two distinct products: the coaching program for clients committed to their journey, and the delivery menu for the person who wants your food without the full program. Delivery doesn't replace the coaching relationship; it reaches a different customer who might become a coaching client later.", correct: true, technique: 'Channel Separation',
        feedback: "You separated the coaching product (personal, relational) from the food product (accessible, deliverable) and showed how the delivery customer can be a future coaching client. Two distinct products that support each other." },
      { text: "Many health coaches offer both a personal program and a separate accessible food product.", correct: false,
        feedback: "Social proof is secondary. Show the specific separation of the two products and how they serve different needs." },
      { text: "You could offer a 'coaching intro' as an add-on for delivery customers to convert them to the full program.", correct: false,
        feedback: "Good conversion strategy — but only after addressing the commoditization concern first." },
      { text: "How do you currently balance your coaching clients versus your restaurant customers?", correct: false,
        feedback: "Discovery about the current balance — ask it after establishing the product separation so it builds toward a delivery-coaching integration strategy." },
    ],
  },
  hl40: {
    objection: "Our concept is zero-waste and we use compostable packaging exclusively. Delivery waste would go against our values.",
    responses: [
      { text: "Your compostable packaging commitment transfers directly to delivery — your delivery orders use the same compostable packaging you already use in-house. Delivery doesn't require a change to your materials; it uses what you've already chosen. The only addition is that you'd include a compostable bag for the outer packaging. Your zero-waste values are fully preserved in the delivery format.", correct: true, technique: 'Risk Reversal',
        feedback: "You showed that the packaging values transfer to delivery directly. There's no forced switch to non-compostable materials — your existing commitment applies to delivery packaging too." },
      { text: "Many zero-waste restaurants use delivery platforms with their own compostable packaging.", correct: false,
        feedback: "Social proof without addressing the specific concern about delivery waste. Show that their existing compostable packaging applies to delivery." },
      { text: "You could include composting instructions in your delivery packaging for customers who may not compost.", correct: false,
        feedback: "Education is a secondary consideration. Address whether the packaging values are preserved first." },
      { text: "What specific packaging materials do you currently use in your restaurant?", correct: false,
        feedback: "Good context to confirm compatibility — but establish the principle first: your packaging values apply to delivery, and then confirm the specific materials work." },
    ],
  },
  hl41: {
    objection: "Our customers are elderly and mobility-limited. They'd actually benefit from delivery — but I worry about tech usability.",
    responses: [
      { text: "An elderly, mobility-limited customer base is exactly where delivery creates the most value — and tech usability for ordering can be solved in multiple ways. Customers can order through the app, but also through a web browser, through a family member, or through saved repeat orders. Many older customers who struggle with new apps become comfortable with a single-restaurant workflow they repeat weekly. Would a trial with a few of your regular customers be worth seeing how they respond?", correct: true, technique: 'Risk Reversal',
        feedback: "You validated the concern and showed multiple ordering pathways that reduce the tech barrier. The suggestion to trial with existing regular customers is a low-risk way to test usability for the specific audience." },
      { text: "Our app has accessibility features designed for users with limited tech experience.", correct: false,
        feedback: "Accessibility features are good to mention, but the more powerful answer is the multiple ordering pathways and the repeat-order simplicity that makes it routine." },
      { text: "Family members often help elderly customers navigate delivery apps.", correct: false,
        feedback: "Family assistance is a reality but feels like a workaround. Show the direct pathways (web, repeat orders) that serve elderly customers independently." },
      { text: "How do your current customers typically place orders — phone, in person?", correct: false,
        feedback: "Good discovery for understanding the ordering habit — ask it as part of designing the right onboarding for their specific customer base." },
    ],
  },
  hl42: {
    objection: "We're an anti-diet culture brand. Being on a platform next to calorie-counted fast food is inconsistent.",
    responses: [
      { text: "The platform is neutral infrastructure — your listing is your voice and your brand. You set your description, your imagery, and your language entirely independently of what other restaurants on the platform say or show. Customers who resonate with anti-diet food culture and search for it will find you specifically because of how you present yourself. The platform puts you in the same searchable space as everything else; your brand is what distinguishes you.", correct: true, technique: 'Reframing',
        feedback: "You showed that the platform is a neutral marketplace where your brand is expressed entirely in your own voice. The anti-diet values are communicated through your listing — other restaurants' calorie counts don't define your presentation." },
      { text: "Many value-driven food brands operate alongside mainstream options without diluting their message.", correct: false,
        feedback: "Social proof doesn't address the specific brand inconsistency concern. Show how your listing controls the brand experience independently." },
      { text: "You could use your listing description to clearly communicate your anti-diet philosophy.", correct: false,
        feedback: "Good tactic for the listing, but address the 'next to calorie-counted fast food' concern first. Show that the platform is neutral and your brand is fully your own." },
      { text: "What language or imagery would feel most authentic to your brand on a delivery listing?", correct: false,
        feedback: "Good discovery for listing design, but address the brand inconsistency concern first." },
    ],
  },
  hl43: {
    objection: "We offer a weekly meal prep service. Adding delivery might dilute focus from that primary revenue stream.",
    responses: [
      { text: "Meal prep subscriptions and delivery serve different needs at different times: meal prep is for the week; delivery is for tonight. A delivery channel can actually be your meal prep customer's bridge order on days between prep pickups — or the first interaction that introduces them to your meal prep program. One supports the other.", correct: true, technique: 'Pipeline Value',
        feedback: "You showed the complementary timing: meal prep serves the week, delivery serves the gaps. And delivery can be the acquisition channel for new meal prep subscribers — the two products support each other." },
      { text: "Delivery requires minimal operational attention once set up — it won't pull focus from meal prep.", correct: false,
        feedback: "Operational simplicity is one angle, but the stronger case is showing how the two products support each other rather than compete." },
      { text: "Many meal prep services offer delivery as an entry point for customers not ready for weekly subscriptions.", correct: false,
        feedback: "Social proof in the right direction — but show the specific mechanism: delivery serves gap days and converts single-order customers into meal prep subscribers." },
      { text: "What's your current meal prep subscription retention rate?", correct: false,
        feedback: "Good data for the conversion argument — ask it after showing the pipeline between delivery and meal prep." },
    ],
  },
  hl44: {
    objection: "We only accept health insurance reimbursements for some items. Adding delivery complicates the billing.",
    responses: [
      { text: "Insurance reimbursement billing is completely separate from platform payment processing. Your insurance billing stays exactly as it is — it's based on your clinical eligibility, not your distribution channel. Platform payments are standard consumer transactions processed separately. There's no interface between the two systems. Delivery doesn't touch your insurance billing workflow at all.", correct: true, technique: 'Risk Reversal',
        feedback: "You showed that the two billing systems are completely separate and never intersect. Insurance billing is clinical and claim-based; platform payments are consumer transactions. No complexity is added." },
      { text: "Platform payments are simple direct deposits — they don't complicate any existing billing processes.", correct: false,
        feedback: "Simple payment processing doesn't address the insurance billing concern specifically. Show the complete separation of the two billing systems." },
      { text: "Many medical nutrition therapy providers run delivery alongside their insurance billing without conflict.", correct: false,
        feedback: "Social proof is useful but doesn't explain why there's no conflict. Show the system separation." },
      { text: "Which items are currently eligible for insurance reimbursement?", correct: false,
        feedback: "Good context for understanding the billing complexity, but establish the system separation first." },
    ],
  },
  hl45: {
    objection: "We operate a pay-what-you-can model for underserved customers. Delivery would require fixed pricing.",
    responses: [
      { text: "Your pay-what-you-can model is your in-house social mission — and delivery would be a separate, fixed-price channel that serves a different audience. Many mission-driven restaurants run a full-price market-rate product alongside their subsidized community offering. The market-rate delivery revenue can actually cross-subsidize more of the pay-what-you-can meals. Both missions coexist.", correct: true, technique: 'Incremental Logic',
        feedback: "You showed the two-tier model: pay-what-you-can in-house for the community mission, market-rate delivery for a different audience. Delivery revenue can actually fund more of the subsidized service." },
      { text: "Delivery is just one channel — your pricing philosophy applies to your in-house model independently.", correct: false,
        feedback: "True but doesn't engage with the mission concern. Show how delivery revenue supports the pay-what-you-can mission rather than competing with it." },
      { text: "Many social enterprise restaurants run standard pricing channels that fund their impact programs.", correct: false,
        feedback: "Social proof in the right direction — but show the specific cross-subsidy mechanism for their model." },
      { text: "What percentage of your customers currently use the pay-what-you-can option?", correct: false,
        feedback: "Good for sizing the cross-subsidy opportunity — ask it after establishing the two-tier model." },
    ],
  },
  hl46: {
    objection: "Our food is therapeutic — designed for post-surgical recovery patients. Delivery liability concerns me.",
    responses: [
      { text: "If your food is specifically formulated for medical recovery patients, the clinical and regulatory context matters. Platform delivery is appropriate for general-purpose health food; if your menu is prescribed or part of a medical protocol, you may want to consult with your legal or clinical advisors before adding any delivery channel — platform or otherwise. I'd rather help you think this through correctly than push you into something that needs more review.", correct: true, technique: 'Long-game Respect',
        feedback: "You took the liability concern seriously and gave an honest, respectful response: if the food is truly therapeutic and prescribed, it warrants clinical and legal review before any delivery channel. This builds long-term trust." },
      { text: "Platform delivery comes with our standard terms of service that address food safety liability.", correct: false,
        feedback: "Standard terms of service don't address clinical medical food liability. Don't oversimplify a genuine regulatory concern." },
      { text: "Many specialty diet restaurants serve recovery-focused customers through delivery without issue.", correct: false,
        feedback: "Generic food is different from clinically prescribed recovery food. Don't draw equivalences that could mislead the owner." },
      { text: "What specific recovery conditions are your menu items designed for?", correct: false,
        feedback: "Good for understanding the clinical context — ask it as part of a genuine assessment of whether delivery is appropriate for their specific situation." },
    ],
  },
  hl47: {
    objection: "We are run by a religious nonprofit. All profits go to our community mission. Delivery fees would reduce mission funding.",
    responses: [
      { text: "Mission funding and delivery fees are worth modeling honestly. Platform fees are a cost of a revenue channel — the question is whether the net delivery revenue exceeds what you'd earn from the kitchen time and cost spent. If delivery generates $500 net per week that wouldn't otherwise exist, that's $500 more for the mission. The fee isn't a subtraction from existing revenue; it's a share of new revenue. Let's model what that looks like for your situation.", correct: true, technique: 'Incremental Logic',
        feedback: "You reframed the fee not as a reduction of existing mission funding but as a share of entirely new revenue. The honest modeling offer respects the mission context while showing the net benefit." },
      { text: "Platform fees are an industry standard — they're built into the economics of delivery pricing.", correct: false,
        feedback: "Industry norms don't address the mission funding concern. Show the incremental revenue model that demonstrates net benefit to the mission." },
      { text: "Many nonprofits run commercial food operations to fund their missions with delivery as a revenue channel.", correct: false,
        feedback: "Social proof is the right direction but doesn't show the math. Offer to model the net benefit specifically." },
      { text: "What's your current monthly revenue from the food operation?", correct: false,
        feedback: "Good for the modeling exercise — ask it as part of 'let me model what delivery would add net to your mission funding.'" },
    ],
  },
  hl48: {
    objection: "We serve children with food allergies. I can't risk a cross-contamination incident in a delivery context.",
    responses: [
      { text: "Allergen safety for delivery is managed the same way it is in your kitchen: rigorous labeling, sealed packaging, and your existing protocols applied to every delivery order. The platform's allergen tagging lets customers filter for your specific allergen-free certifications before ordering, which means customers who reach you have already verified your allergy profile. Your kitchen protocols are the safety layer; the listing is the customer screening layer.", correct: true, technique: 'Risk Reversal',
        feedback: "You showed two safety mechanisms: your kitchen protocols (same rigorous standards as in-house) and the platform's allergen filter system (customer pre-screening). Both layers work together to reduce risk." },
      { text: "Our platform has allergen listing tools that help customers identify safe options.", correct: false,
        feedback: "Listing tools are one layer, but the kitchen protocol is the primary safety mechanism. Address both layers together." },
      { text: "Delivery customers with food allergies are experienced at verifying restaurant allergen information before ordering.", correct: false,
        feedback: "Customer experience doesn't replace structural safeguards. Show the double layer: your protocols plus the listing screening." },
      { text: "What allergens are most commonly a concern for your customer base?", correct: false,
        feedback: "Good for the listing setup — ask it after showing the two-layer safety model." },
    ],
  },
  hl49: {
    objection: "We track every customer's health journey. Delivery means I lose touch with their progress.",
    responses: [
      { text: "Your in-house health tracking and coaching relationships stay completely intact for your enrolled clients. Delivery serves a different customer: the person who isn't enrolled but wants your food. Your enrolled clients still come in, still get tracked, still progress with you. Delivery adds a new revenue stream with a different audience that doesn't touch your existing client relationships.", correct: true, technique: 'Channel Separation',
        feedback: "You showed that the enrolled clients (tracked, coached in-house) and delivery customers (new, non-enrolled audience) are separate populations with separate relationships. The tracking program is unaffected." },
      { text: "You could offer enrolled clients the option to order delivery in between sessions.", correct: false,
        feedback: "An interesting product extension, but address the 'lose touch with progress' concern first by showing that enrolled clients stay in the in-house program." },
      { text: "Delivery platform data actually gives you insight into repeat customer ordering patterns.", correct: false,
        feedback: "Platform analytics are a secondary benefit. Address the client relationship concern first." },
      { text: "How many clients are currently enrolled in your health journey program?", correct: false,
        feedback: "Good context for sizing the two populations — ask it after establishing the channel separation." },
    ],
  },
  hl50: {
    objection: "Our brand identity is 'come in and be nourished.' Delivery changes that relationship.",
    responses: [
      { text: "The in-person nourishment experience is yours to preserve completely — nothing about delivery affects your dining room. Delivery reaches the person who can't come in today: they're at home recovering, they live 8 miles away, they have a sick child. You're nourishing them too, just in a different context. The relationship to your food and your philosophy travels even when the person can't physically be there.", correct: true, technique: 'Reframing',
        feedback: "You honored the nourishment identity and showed that delivery extends the nourishing relationship to a different physical context. The philosophy doesn't change; the delivery vehicle changes." },
      { text: "Many wellness brands have found delivery consistent with their mission to nourish their communities.", correct: false,
        feedback: "Social proof doesn't engage with the specific 'come in and be nourished' identity concern. Engage with the emotional and philosophical meaning first." },
      { text: "You could design delivery packaging that reflects the warmth and care of the in-person experience.", correct: false,
        feedback: "Packaging as brand extension is a secondary consideration. Address the core identity concern first." },
      { text: "What does the in-person nourishment experience mean to your regular customers?", correct: false,
        feedback: "Good discovery, but the owner has told you what it means: community and presence. Honor that and show delivery as an extension of it." },
    ],
  },
  hl51: {
    objection: "We use a fermentation process that takes weeks. Our inventory is always limited and we hate disappointing customers.",
    responses: [
      { text: "Weeks-long fermentation means your batches are your delivery inventory ceiling — and the platform enforces it automatically. When your current fermentation batch is sold, the items close. You're never promising what's not ready. The scarcity is real and the platform makes it transparent. 'Limited batch, available now' is actually a compelling delivery listing for fermented foods enthusiasts.", correct: true, technique: 'Reframing',
        feedback: "You showed the quantity limit mechanism that prevents disappointment and reframed the scarcity as a premium signal. Limited fermentation batches create genuine urgency and desirability." },
      { text: "You could manage delivery availability to only open when your fermentation batch is ready.", correct: false,
        feedback: "Batch-timing availability is the right idea, but show the automated quantity limit that handles it rather than suggesting they manually manage open/close windows." },
      { text: "Customers who seek fermented foods understand and appreciate limited availability.", correct: false,
        feedback: "Customer understanding is true but doesn't address the operational mechanism. Show the quantity limit tool that prevents disappointment automatically." },
      { text: "How often do your fermentation batches complete?", correct: false,
        feedback: "Good for scheduling delivery availability — ask it as part of designing the batch-aligned delivery schedule." },
    ],
  },
  hl52: {
    objection: "We offer live enzyme probiotics that require refrigerated transport immediately from our kitchen.",
    responses: [
      { text: "Refrigerated transport for live cultures is handled with cold-pack insulation designed for exactly this purpose. Probiotic integrity at refrigerated temperatures is maintained for the typical 30–45 minute delivery window with the right packaging. Many kombucha and live culture food brands deliver successfully with cold-pack systems. Want to review the packaging specifications for live cultures?", correct: true, technique: 'Social Proof',
        feedback: "You showed that the cold-chain requirement is manageable with standard cold-pack insulation, backed by industry examples of live culture delivery. Offering to review packaging specs is concrete and actionable." },
      { text: "Our drivers maintain refrigerated bags that preserve food temperature throughout delivery.", correct: false,
        feedback: "Standard driver bags aren't the same as active cold packs. Be specific about the packaging solution that handles live cultures." },
      { text: "Live enzymes in probiotic food are generally stable at cool ambient temperatures.", correct: false,
        feedback: "This is an empirical claim that varies by product. Don't generalize — offer to review the specific packaging specifications for their products." },
      { text: "What temperature range do your live enzyme products need to stay within?", correct: false,
        feedback: "Good technical question — ask it as part of 'let me show you the cold-pack specs and confirm they meet your temperature requirement.'" },
    ],
  },
  hl53: {
    objection: "We're a worker-owned cooperative. Any decision requires a full vote. I support the idea personally but can't commit today.",
    responses: [
      { text: "A cooperative vote is exactly the right process — and I want to support it, not pressure it. I'll prepare a decision brief covering economics, operational impact, and risk for your co-op vote: the information your members need to vote confidently. When's your next meeting? Let's time the brief so your members have it in advance.", correct: true, technique: 'Long-game Respect',
        feedback: "You respected the governance structure completely and offered to prepare decision support for the meeting. This shows genuine respect for how the cooperative operates and turns the vote from a barrier into a structured timeline." },
      { text: "You could present the idea to the cooperative as a trial period vote to reduce the commitment level.", correct: false,
        feedback: "Suggesting they frame the vote a certain way is presumptuous. Respect the process and offer to support it with good information." },
      { text: "Many cooperatively-run restaurants have added delivery successfully after a full membership vote.", correct: false,
        feedback: "Social proof is useful context but doesn't serve the immediate need: helping this cooperative vote well. Offer the decision brief." },
      { text: "What concerns do you think your cooperative members would have?", correct: false,
        feedback: "Good for tailoring the decision brief — ask it as part of preparing the document, not as a standalone question." },
    ],
  },
  hl54: {
    objection: "We specifically train customers to break fast food habits. Delivery is a fast food behavior.",
    responses: [
      { text: "Delivery is a behavior — what matters is what customers order through it. A person who breaks a McDonald's habit and replaces their delivery order with your whole-food meal is using the same channel to make a completely different choice. Delivery isn't fast food; it's a distribution method. Your food on the platform is the alternative, not the habit. You could be the recovery option for someone trying to change.", correct: true, technique: 'Reframing',
        feedback: "You separated the delivery behavior (neutral distribution method) from the fast food content (what some restaurants deliver). Your food on the platform is the healthy alternative that changes the outcome of the delivery behavior." },
      { text: "Many customers who use delivery apps are specifically looking for healthy alternatives to fast food.", correct: false,
        feedback: "True but doesn't address the 'delivery is a fast food behavior' concern philosophically. Engage with the behavior-versus-content distinction." },
      { text: "You could use your listing messaging to specifically address customers trying to break unhealthy food habits.", correct: false,
        feedback: "Good messaging strategy, but address the philosophical concern first. Show that delivery is content-neutral and your food is the change-agent." },
      { text: "What specific habits are you most focused on helping customers break?", correct: false,
        feedback: "Good discovery for the messaging strategy, but engage with the delivery-as-behavior concern first." },
    ],
  },
  hl55: {
    objection: "We make a 48-hour bone broth from pastured animals. We never have surplus. Every batch sells out at the counter.",
    responses: [
      { text: "No surplus and selling out daily means you have demonstrably more demand than current supply can meet. Delivery doesn't require surplus — it routes your existing batch to customers who can't come to the counter. You'd reserve a portion of each batch for delivery and a portion for counter sales, both with quantity limits. You're not producing more; you're distributing the same amount more efficiently.", correct: true, technique: 'Incremental Logic',
        feedback: "You showed the allocation model: reserve portions of each batch for delivery, with the same daily limit that governs counter sales. No additional production required, just more efficient distribution of existing supply." },
      { text: "Your high counter demand proves the delivery opportunity is strong — customers want it.", correct: false,
        feedback: "Demand signal is correct, but the owner's concern is about supply, not demand. Show the allocation model that works within existing production." },
      { text: "You could produce a slightly larger batch to accommodate both counter and delivery demand.", correct: false,
        feedback: "Suggesting increased production before they've agreed to delivery pushes production planning before the channel decision. Show the within-existing-batch model first." },
      { text: "How many units of bone broth do you produce per 48-hour batch?", correct: false,
        feedback: "Good for designing the allocation — ask it as part of 'let's decide how to split your batch between counter and delivery.'" },
    ],
  },
  hl56: {
    objection: "Our restaurant is 100% staff-owned. We discuss and agree on every change. I personally love the idea but can't move unilaterally.",
    responses: [
      { text: "Staff ownership is a genuine process constraint — and one that deserves a real response, not pressure. I'll prepare a clear document for your staff discussion: what delivery involves, what it costs, what it could earn, and how to exit it if it doesn't work. Give your team everything they need to vote on it clearly. What's your timeline for the next staff meeting?", correct: true, technique: 'Long-game Respect',
        feedback: "You respected the staff ownership governance model and offered concrete decision support. This treats the staff as decision-makers who deserve good information rather than pressure." },
      { text: "A trial period might be a lower-commitment option for the staff vote.", correct: false,
        feedback: "Suggesting they frame the vote a certain way is presumptuous of their process. Offer good information and let them design the proposal together." },
      { text: "Staff-owned restaurants that adopt delivery often find the economics compelling for shared ownership.", correct: false,
        feedback: "Social proof is useful, but the immediate need is supporting their decision process — not convincing them the outcome will be good." },
      { text: "What are the staff's most common concerns about business changes?", correct: false,
        feedback: "Good for the decision brief — ask it as part of 'what should I cover in the document I prepare for your staff?' rather than as a standalone question." },
    ],
  },
  hl57: {
    objection: "Our concept is hyperlocal — we serve within a 3-block radius exclusively. Delivery extends that and dilutes it.",
    responses: [
      { text: "The delivery radius is yours to set — you can limit it to 3 blocks, or 5, or whatever boundary is consistent with your hyperlocal identity. The radius control means your concept's geographic philosophy is preserved: you serve your neighborhood, digitally exactly as you do physically. Delivery within your chosen radius extends service without extending the boundary.", correct: true, technique: 'Risk Reversal',
        feedback: "You showed that the hyperlocal boundary is fully configurable. The platform respects whatever radius the owner sets — the hyperlocal identity is preserved by setting the radius to match the philosophy." },
      { text: "Many hyperlocal restaurants use delivery to serve customers who can't physically reach them.", correct: false,
        feedback: "Generic social proof doesn't address the radius control concern. Show that the delivery radius is configurable to match their geographic philosophy." },
      { text: "Your local sourcing story is a strong delivery listing asset — customers appreciate knowing their food is community-rooted.", correct: false,
        feedback: "Listing assets are secondary. Address the 'diluting the hyperlocal concept' concern with the configurable radius first." },
      { text: "What's the geographic definition of your hyperlocal serving area?", correct: false,
        feedback: "Good for setting the delivery radius — ask it as part of 'let's set your delivery radius to match your existing service philosophy.'" },
    ],
  },
  hl58: {
    objection: "We've been on a national TV health show. Our walk-in traffic is strong from that publicity. We don't need more discovery.",
    responses: [
      { text: "TV exposure drove a wave of walk-in traffic — and that audience eventually normalizes. Delivery captures two things your TV appearance can't maintain forever: the viewer who watched but never made it in, and the ongoing search by health-food seekers who'll find you through the platform long after the episode stops airing. TV is a spike; delivery is a steady channel.", correct: true, technique: 'Reframing',
        feedback: "You reframed delivery relative to TV exposure: TV is a spike, delivery is an evergreen channel. The audience that saw the show and never visited is reachable through delivery. The long-term search traffic is also a new audience." },
      { text: "Platform visibility would reinforce your TV profile and maintain the discovery momentum.", correct: false,
        feedback: "Momentum maintenance is one benefit, but the more specific argument is capturing the TV-aware audience who never converted to walk-ins." },
      { text: "Many restaurants that have had national media exposure use delivery to sustain traffic after the publicity cycle ends.", correct: false,
        feedback: "Social proof is in the right direction — but show the specific mechanism: TV viewers who didn't convert to walk-ins, and long-term search discovery." },
      { text: "How long ago was the TV appearance, and have you seen the walk-in boost sustain?", correct: false,
        feedback: "Good context for timing the delivery argument — ask it after framing delivery as the steady-state channel that follows the TV spike." },
    ],
  },
  hl59: {
    objection: "We have a waiting list for our meal prep clients. We're already overwhelmed on the operational side.",
    responses: [
      { text: "A meal prep waitlist means you have a capacity ceiling and people who can't get in. Delivery doesn't require operational expansion — it can be limited to your off-peak windows when the meal prep kitchen is not in production. The question is whether there's idle kitchen time between meal prep batches that could carry delivery. If your calendar is truly full every hour, the timing isn't right. Let's look at your schedule honestly.", correct: true, technique: 'Incremental Logic',
        feedback: "You respected the real capacity constraint and offered an honest diagnostic: is there any off-peak kitchen time? If not, delivery isn't right now. This honest approach is more trustworthy than pushing through the concern." },
      { text: "Many meal prep operations run delivery from the same kitchen without significant added stress.", correct: false,
        feedback: "Generic 'many operations' doesn't address someone already overwhelmed. Be honest about whether there's available capacity rather than dismissing the concern." },
      { text: "Adding delivery could help you convert waitlisted clients who want access to your food sooner.", correct: false,
        feedback: "Converting waitlisted clients through delivery sounds like it adds demand to an already overwhelmed operation. Show the off-peak kitchen window approach instead." },
      { text: "What does your weekly meal prep production schedule look like?", correct: false,
        feedback: "Good for finding the off-peak window — ask it as part of the honest capacity audit, not as an opener that could feel like you're looking for holes in their schedule." },
    ],
  },
  hl60: {
    objection: "Our restaurant was designed as a healing sanctuary. The physical environment is part of the therapy.",
    responses: [
      { text: "The healing sanctuary experience is entirely yours to protect — delivery doesn't reach it or change it. What delivery carries is the therapeutic food itself to people who can't access the sanctuary right now: someone recovering at home, someone in a different neighborhood, someone who found you and isn't ready for the full immersive visit yet. The food is the first step; the sanctuary is the destination.", correct: true, technique: 'Pipeline Value',
        feedback: "You honored the sanctuary concept and positioned delivery as a food-first introduction that leads people toward the full therapeutic experience. The sanctuary is preserved; delivery creates desire for it." },
      { text: "Many therapeutic and wellness spaces run food delivery alongside their immersive environment.", correct: false,
        feedback: "Social proof doesn't engage with the specific sanctuary concern. Show how delivery supports the path to the full experience." },
      { text: "You could include a description of the healing sanctuary in your delivery listing to create intrigue.", correct: false,
        feedback: "Good marketing tactic for the pipeline, but make the case first that delivery leads people to the sanctuary experience." },
      { text: "What elements of the environment are most central to the healing experience for your guests?", correct: false,
        feedback: "Good discovery — but honor the sanctuary concept first and show delivery's role as a path to it before exploring what makes the environment therapeutic." },
    ],
  },
  hl61: {
    objection: "I don't want delivery to affect our Glassdoor reviews from staff dealing with extra tablets.",
    responses: [
      { text: "Glassdoor concerns about staff experience are legitimate — and they're addressed by operational design. Delivery tablets during off-peak hours only means staff never manage simultaneous dine-in and delivery demands. Many restaurants protect staff experience by limiting delivery to specific windows. Would a setup that explicitly avoids peak service hours address the staff concern?", correct: true, technique: 'Risk Reversal',
        feedback: "You took the staff experience concern seriously and offered a structural solution: delivery restricted to off-peak windows so staff are never managing two competing demands simultaneously." },
      { text: "Our tablet interface is designed to be low-friction and takes minimal staff attention.", correct: false,
        feedback: "'Low-friction' is a claim that doesn't address the operational stress concern. Show the scheduling solution that protects staff during busy periods." },
      { text: "Many restaurant staff find delivery becomes routine within the first few weeks.", correct: false,
        feedback: "'It becomes routine' doesn't address the Glassdoor risk that comes from the transition period. Show the structural protection for staff experience." },
      { text: "What specifically are you worried staff would say about the delivery experience?", correct: false,
        feedback: "Good discovery, but offer the scheduling solution first. Then the question refines the approach." },
    ],
  },
  hl62: {
    objection: "We don't have a POS system. We run everything on paper tickets and mental math.",
    responses: [
      { text: "A paper ticket kitchen and delivery can coexist — the delivery tablet prints orders just like any other ticket. Your kitchen team treats a delivery order like a dine-in ticket: make it, bag it, done. You don't need a POS integration; the tablet handles its own order management. Many small, paper-based kitchens run delivery from a standalone tablet with no system changes.", correct: true, technique: 'Risk Reversal',
        feedback: "You showed that no POS system is required for delivery. The tablet is a standalone system that handles delivery independently of any existing infrastructure — or lack thereof." },
      { text: "We can integrate with your existing POS when you're ready to upgrade.", correct: false,
        feedback: "Mentioning POS upgrades when the owner doesn't have one and hasn't asked for one introduces unnecessary complexity. Show the standalone tablet solution." },
      { text: "A paper-based kitchen is actually well-suited to delivery — it's just another ticket.", correct: false,
        feedback: "Right idea, but develop it: the delivery tablet prints a ticket, it enters your kitchen workflow like any other order, and there's no system to integrate." },
      { text: "How do you currently manage your order flow during busy service?", correct: false,
        feedback: "Good context for understanding the workflow — ask it as part of showing how the delivery ticket fits into their existing paper system." },
    ],
  },
  hl63: {
    objection: "Our chef trained at a wellness retreat in Southeast Asia. Her food is deeply personal and not for mass consumption.",
    responses: [
      { text: "Deeply personal food and delivery aren't incompatible — the food carries the intention regardless of how it reaches the customer. What delivery does is let more people access what your chef has created without asking her to change it or compromise it. She cooks the same food; more people experience it. The personal nature of the cuisine is preserved; the access is extended.", correct: true, technique: 'Reframing',
        feedback: "You honored the personal and intentional nature of the food while showing that extending access doesn't require changing or compromising it. The food carries the chef's intention in any context." },
      { text: "Many personally trained chefs have found delivery to be a meaningful way to share their philosophy.", correct: false,
        feedback: "Social proof doesn't engage with the 'not for mass consumption' concern. Address the personal food philosophy directly." },
      { text: "Your chef's story and training could be a compelling element of your delivery listing.", correct: false,
        feedback: "Good marketing eventually, but address the philosophical concern about mass consumption first." },
      { text: "What does your chef feel about the prospect of her food reaching a wider audience?", correct: false,
        feedback: "Good question for understanding the chef's perspective — but engage with the personal-food concern before asking about the chef's feelings." },
    ],
  },
  hl64: {
    objection: "We're piloting a nutrition curriculum in partnership with a local school district. Our focus is there right now.",
    responses: [
      { text: "A school district nutrition curriculum is a meaningful initiative — and delivery during this pilot doesn't have to compete with it. If your kitchen has any idle time outside of the school program, delivery can run quietly in the background. But if your resources are fully committed to the pilot right now, the right answer is to revisit this when the pilot phase completes. When does the current program phase end?", correct: true, technique: 'Pipeline Value',
        feedback: "You respected the current priority completely and offered an honest assessment: if there's idle capacity, delivery runs alongside; if not, timing matters. Scheduling the follow-up shows genuine respect for the priority." },
      { text: "Delivery revenue could help fund the school curriculum program.", correct: false,
        feedback: "Pivoting to revenue-as-funding can feel like you're minimizing the program's importance. Respect the focus first, then explore whether there's capacity." },
      { text: "Many mission-driven food businesses run consumer delivery alongside institutional partnerships.", correct: false,
        feedback: "Social proof doesn't address the current-focus concern. Respect the priority and find the right timing." },
      { text: "How long does the school district pilot program run?", correct: false,
        feedback: "Good for timing the follow-up — ask it as part of 'when does the pilot phase end so I can follow up at the right time?'" },
    ],
  },
  hl65: {
    objection: "We have a private chef model — clients hire us exclusively for specific periods. Public delivery isn't our model.",
    responses: [
      { text: "Private chef engagements and delivery are completely different business models serving different clients. Delivery doesn't touch your private chef relationships — it's a consumer product for people who can't hire you privately. Some private chefs use delivery as a public-facing channel that showcases their cuisine and builds a waitlist for private engagements. But if the two brands would feel confusing, a separate delivery identity might be the right design.", correct: true, technique: 'Channel Separation',
        feedback: "You separated the two models clearly and offered both a standalone case (delivery as public-facing showcase) and an honest acknowledgment that a separate brand identity might be needed if the two feel confusing." },
      { text: "Delivery could generate leads for your private chef engagements.", correct: false,
        feedback: "Lead generation is an interesting angle, but address the model separation concern first. The private chef and consumer delivery are fundamentally different products." },
      { text: "Many private chefs maintain a public food product alongside their exclusive engagements.", correct: false,
        feedback: "Social proof is useful, but develop the channel separation and brand design considerations first." },
      { text: "How do you currently find new private chef clients?", correct: false,
        feedback: "Good discovery for the lead-generation argument — ask it after establishing the model separation." },
    ],
  },
  hl66: {
    objection: "Our concept revolves around educating customers about food. We host classes and demos. Delivery is the opposite of that.",
    responses: [
      { text: "Education and delivery serve different customer moments. Your in-house classes educate people who've chosen to learn and engage. Delivery reaches people who've tasted your food and want more. The best-case pipeline: a customer orders delivery, loves the food, and signs up for a class to understand how it's made. Delivery creates desire for the education experience.", correct: true, technique: 'Pipeline Value',
        feedback: "You showed the discovery-to-education pipeline: delivery creates food desire, which motivates customers to seek out the educational experience you offer. The two are complementary, not opposing." },
      { text: "Many educational food concepts run delivery alongside classes without conflict.", correct: false,
        feedback: "Social proof is secondary. Show the specific pipeline between delivery customers and class enrollment." },
      { text: "You could include class schedules in your delivery packaging to convert customers.", correct: false,
        feedback: "Good tactic for the pipeline, but make the case first that delivery leads to education, not away from it." },
      { text: "What percentage of your class attendees are first-timers versus returning students?", correct: false,
        feedback: "Good for sizing the acquisition opportunity — ask it after establishing the delivery-to-class pipeline." },
    ],
  },
  hl67: {
    objection: "We've intentionally kept our concept small and unpublicized. Word of mouth only. Delivery changes that.",
    responses: [
      { text: "Delivery doesn't require broad publicity — your listing can be minimal and you can opt out of platform-wide promotions. Customers who know your name can search it directly; you don't have to appear in broad 'healthy food near me' results if you don't want to. The visibility level is configurable. A discreet listing serves your existing community without broadcasting to everyone.", correct: true, technique: 'Risk Reversal',
        feedback: "You showed that platform visibility is configurable — the owner can use delivery for their word-of-mouth community without broad, unsolicited discoverability. A minimal, direct-search listing is a real option." },
      { text: "Being on the platform would actually strengthen your word-of-mouth by making ordering easier for existing fans.", correct: false,
        feedback: "True, but the owner is concerned about expanding beyond word of mouth. Address the visibility control before proposing broad platform benefits." },
      { text: "Many intentionally small restaurants have found delivery to be a quiet, valuable addition.", correct: false,
        feedback: "Social proof is useful, but show the specific visibility controls that make delivery discreet before citing other restaurants." },
      { text: "What would 'discreet delivery' look like for your concept?", correct: false,
        feedback: "Good discovery — ask it after showing that visibility is configurable and discreet listing is a real option." },
    ],
  },
  hl68: {
    objection: "We partner with a mental health clinic for clients in recovery. Any delivery mistakes could have serious consequences.",
    responses: [
      { text: "If your food is specifically designed for and prescribed to clinical mental health recovery patients, delivery carries meaningful risk and deserves serious consideration. I'd recommend discussing any delivery channel — platform or otherwise — with your clinical partners before proceeding. If you do move forward, the accuracy and allergen controls available on the platform are the strongest available, but clinical decision-making comes first here.", correct: true, technique: 'Long-game Respect',
        feedback: "You took the clinical context seriously and gave an honest response: the clinical partnership should inform the delivery decision. Respecting the complexity rather than pushing through it builds genuine trust." },
      { text: "Our platform has strong accuracy and allergen tools that minimize order errors.", correct: false,
        feedback: "Platform tools are real but secondary to the clinical risk context. Acknowledge the seriousness of the situation first." },
      { text: "Many health-adjacent restaurants deliver to clients with specific needs without incident.", correct: false,
        feedback: "Generic social proof is inappropriate for a clinical mental health context. Take the seriousness of the concern at face value." },
      { text: "What specific dietary or clinical requirements do the recovery patients have?", correct: false,
        feedback: "Important clinical context — but address the appropriate level of caution first before exploring what the requirements are." },
    ],
  },
  hl69: {
    objection: "We're a Michelin Bib Gourmand recipient for our health food concept. We can't risk anything that compromises that.",
    responses: [
      { text: "Bib Gourmand recognition comes from in-person evaluation of your food quality, value, and dining experience — not from what distribution channels you use. Delivery doesn't affect the evaluation criteria. Many Bib Gourmand and Michelin-recognized restaurants worldwide run delivery channels. Your recognition is based on what happens in your kitchen, which delivery doesn't change.", correct: true, technique: 'Social Proof',
        feedback: "You addressed the factual basis: Michelin evaluates in-person dining experience and food quality, not delivery channels. Separating the two systems removes the risk concern." },
      { text: "Delivery is a separate experience evaluated differently from your dine-in — the two don't interact.", correct: false,
        feedback: "True but doesn't specifically address the Michelin evaluation concern. Clarify that Michelin evaluates in-person only." },
      { text: "Premium platform presence would actually reinforce the quality signal of your Bib Gourmand status.", correct: false,
        feedback: "Platform reinforcement of awards is speculative. The direct answer is that Michelin evaluates in-person — delivery is irrelevant to the evaluation." },
      { text: "Have you spoken with other Bib Gourmand restaurants in your area about their delivery experience?", correct: false,
        feedback: "Peer consultation is useful, but give them the factual Michelin evaluation answer directly." },
    ],
  },
  hl70: {
    objection: "We've refused outside investment to stay true to our values. Partnering with a VC-backed company feels inconsistent.",
    responses: [
      { text: "That values concern is worth acknowledging directly. Using a platform's distribution infrastructure is a different relationship than taking investment — you're using a service, not aligning your ownership or mission with theirs. Many independent, values-driven businesses use platforms as tools while maintaining full independence. The question is whether the tool serves your mission, not whether the company behind it shares every value you hold.", correct: true, technique: 'Reframing',
        feedback: "You separated the tool relationship (using a platform service) from a values alignment (investment partnership). This is the honest distinction — using infrastructure is different from aligning ownership." },
      { text: "Many independent food businesses use delivery platforms while maintaining full independence.", correct: false,
        feedback: "Social proof is true but doesn't address the values-consistency concern. Draw the tool-versus-investment distinction directly." },
      { text: "Uber Eats has invested significantly in supporting independent restaurants.", correct: false,
        feedback: "Company investment rhetoric isn't the right response to a values-alignment concern. Address the fundamental distinction between using a service and partnering with a company." },
      { text: "What specific aspects of VC-backed companies concern you most from a values standpoint?", correct: false,
        feedback: "Discovery is useful, but make the tool-versus-investment distinction first. Then the specific values concern can be addressed more precisely." },
    ],
  },
  hl71: {
    objection: "Our customers come in for the community — they know each other, support each other. Delivery fragments that.",
    responses: [
      { text: "The community you've built is in the dining room — delivery doesn't reach it or change it. Your regulars still come in, still know each other, still support each other. Delivery serves the person who isn't yet part of the community but discovers your food and, through it, discovers the community exists. Delivery is the introduction; the dining room is the community. They work in sequence.", correct: true, technique: 'Pipeline Value',
        feedback: "You showed that delivery doesn't fragment the community — it's a discovery path that leads people into it. The community lives in the dining room; delivery creates interest in being part of it." },
      { text: "Many community-centered restaurants find that delivery customers become in-person regulars.", correct: false,
        feedback: "Social proof in the right direction, but show the specific pipeline: delivery introduces the food, the community draws people in person." },
      { text: "You could include a note in delivery orders about upcoming community events or gatherings.", correct: false,
        feedback: "Good tactic for the pipeline strategy — but introduce it after making the case that delivery leads to community, not fragments it." },
      { text: "How do new community members typically find and join your restaurant's community?", correct: false,
        feedback: "Good discovery for the pipeline argument — ask it after establishing that delivery is a new discovery path into the community." },
    ],
  },
  hl72: {
    objection: "We're a teaching kitchen. All revenue goes to fund culinary education for at-risk youth. Delivery fees reduce that funding.",
    responses: [
      { text: "This is worth modeling honestly: delivery is a channel that earns net new revenue — the fee is a share of money that doesn't currently exist, not a cut from existing revenue. If your teaching kitchen earns $800 net per week from delivery that you're not earning today, that's $800 more for culinary education regardless of the fee. Delivery adds to the mission pool; it doesn't subtract from it. Want to model what the net looks like for your volume?", correct: true, technique: 'Incremental Logic',
        feedback: "You reframed the fee as a share of new, incremental revenue rather than a deduction from existing revenue. The mission benefits from net new earnings even when a platform fee is involved." },
      { text: "Platform fees are a standard cost of a revenue channel — the net benefit is typically positive.", correct: false,
        feedback: "Generic claim doesn't address the specific mission context. Offer to model the actual net benefit for their teaching kitchen situation." },
      { text: "Many nonprofit kitchens run delivery to fund their social programs.", correct: false,
        feedback: "Social proof is useful, but model the specific numbers for their situation rather than citing others." },
      { text: "What are your current revenue sources for the culinary education program?", correct: false,
        feedback: "Good for the modeling exercise — ask it as part of 'let me model what delivery adds net to your education funding.'" },
    ],
  },
  hl73: {
    objection: "We focus on food as a spiritual practice. The hurried nature of delivery is antithetical to our values.",
    responses: [
      { text: "The hurried context of delivery is the customer's experience — you can influence that with what you send. Thoughtfully designed packaging, a card with an intention or a breathing prompt, a note about how to receive the meal mindfully — these extend the practice into the delivery context. Many food-as-practice concepts have found delivery can carry the spirit of the practice even outside the dining room. The food is the vehicle; the practice travels with it.", correct: true, technique: 'Reframing',
        feedback: "You acknowledged the hurried delivery context and showed how packaging design and inserts can extend the spiritual practice into the home setting. The practice isn't confined to the dining room — it can be invited into any meal context." },
      { text: "Many mindfulness-focused restaurants deliver successfully while maintaining their philosophy.", correct: false,
        feedback: "Social proof without engaging the philosophical concern is dismissive. Show how the practice can travel with the delivery." },
      { text: "Customers who seek out a food-as-spiritual-practice restaurant are likely already inclined toward mindfulness.", correct: false,
        feedback: "Customer inclination is an assumption. Address how the delivery packaging and design can actively extend the practice rather than assuming the customer brings it." },
      { text: "What practices or rituals do you currently offer customers when they dine in?", correct: false,
        feedback: "Good discovery for designing the delivery insert — ask it after showing that those practices can travel in a modified form through the delivery package." },
    ],
  },
  hl74: {
    objection: "We use wild-harvested ingredients that vary week to week. I can't maintain a consistent menu for delivery.",
    responses: [
      { text: "Wild-harvested variability is your brand story and delivery can honor it: your menu updates weekly to reflect what was harvested. Customers who seek out wild-harvested food understand and value the seasonal variation. Your listing becomes a living document of what's available this week — authentic, honest, and exactly the kind of food story that resonates with your audience.", correct: true, technique: 'Reframing',
        feedback: "You converted the consistency concern into a feature: weekly menu variation reflects the honest reality of wild harvesting. This is a premium story that the right audience values deeply." },
      { text: "You could maintain a small base menu of consistently available items alongside your weekly wild-harvested specials.", correct: false,
        feedback: "Stable anchor items are a practical option — but show the weekly-variation-as-feature framing first. The full story of a living, changing menu is more compelling." },
      { text: "Many foraging-based restaurants use delivery to share their seasonal story with a wider audience.", correct: false,
        feedback: "Social proof is useful, but show the specific reframe: variability is authenticity, and authentic food is what the delivery customer is seeking." },
      { text: "How often do your wild-harvested ingredients change?", correct: false,
        feedback: "Good for designing the menu update schedule — ask it as part of 'let's design your delivery menu as a weekly living document.'" },
    ],
  },
  hl75: {
    objection: "We've been listed on another health platform that aligned with our values. We're exclusive with them.",
    responses: [
      { text: "An exclusivity commitment is real and I respect it. The question worth clarifying is whether the agreement is a formal exclusivity clause or an informal loyalty. If it's contractual, that's a clear answer. If it's a relationship preference, it's worth asking whether the two platforms serve different audiences — you may be able to maintain both without conflict. Can you share what the exclusivity terms say specifically?", correct: true, technique: 'Discovery',
        feedback: "You respected the commitment while gently asking whether it's contractual or preferential. The distinction matters: a formal clause is a clear boundary; an informal loyalty is worth exploring whether it permits additional channels." },
      { text: "Uber Eats reaches a different audience than specialty health platforms — they don't compete.", correct: false,
        feedback: "Audience differentiation might be true but doesn't address the exclusivity commitment directly. Clarify what the terms actually say first." },
      { text: "Exclusivity arrangements with delivery platforms are often non-binding and informally maintained.", correct: false,
        feedback: "This is speculative and potentially incorrect. Don't assume the terms — ask the owner to share what they say." },
      { text: "How long have you been with the other platform?", correct: false,
        feedback: "Duration of the relationship isn't the most relevant question. The exclusivity terms are what matter — ask about those directly." },
    ],
  },
  hl76: {
    objection: "Our restaurant prioritizes silence. No music, no phones. Delivery notifications would disturb the atmosphere.",
    responses: [
      { text: "Delivery notifications stay in your kitchen — not in the dining room. The tablet and any order alerts are kitchen-side only, completely isolated from your silent dining environment. Your guests never experience any delivery activity. The silence you've designed is entirely preserved in the space where guests sit.", correct: true, technique: 'Risk Reversal',
        feedback: "You showed the physical separation: delivery happens in the kitchen, not the dining room. The silent environment is completely unaffected." },
      { text: "Our notification settings are fully adjustable — you can use silent mode or visual-only alerts.", correct: false,
        feedback: "Settings adjustment is helpful but secondary. The more fundamental answer is that the tablet is kitchen-side and never in the dining room." },
      { text: "Many contemplative dining environments manage delivery from the kitchen without any guest impact.", correct: false,
        feedback: "Social proof is useful, but show the specific physical separation that keeps delivery out of the silent dining environment." },
      { text: "How is your kitchen physically separated from the dining room?", correct: false,
        feedback: "Good context for confirming the separation — ask it as part of 'let me show you where the delivery tablet would sit relative to your silent dining space.'" },
    ],
  },
  hl77: {
    objection: "Our whole concept is anti-packaging — we use reusable containers that customers return. Delivery can't do that.",
    responses: [
      { text: "A return-container model doesn't translate to delivery in its current form — you're right about that. The honest path is either staying out of delivery until a workable return-container delivery model exists, or using your best compostable packaging for delivery while keeping the reusable container model for in-house. Some zero-waste brands make that distinction explicit: 'delivery uses compostables; in-house uses returns.' It's a considered compromise if delivery's value justifies it.", correct: true, technique: 'Incremental Logic',
        feedback: "You were honest about the real limitation while offering a concrete path: a two-tier packaging model that maintains the reusable in-house model and uses best-available compostables for delivery. The honesty about the limitation builds trust." },
      { text: "Compostable packaging is the next best option and maintains your sustainability commitment.", correct: false,
        feedback: "Compostable packaging is a compromise — acknowledge it as such rather than claiming it fully maintains the anti-packaging commitment." },
      { text: "Many zero-waste brands have developed delivery-specific solutions that minimize packaging waste.", correct: false,
        feedback: "Generic social proof doesn't engage with the specific return-container model concern. Be honest about the trade-off and let the owner decide." },
      { text: "Would a compostable-only delivery format feel consistent enough with your values to consider?", correct: false,
        feedback: "This is actually close to the right question, but frame it as part of a clear presentation of the trade-off rather than as an opener. Show the two-tier model first." },
    ],
  },
  hl78: {
    objection: "We've built a cult following locally. I don't want to dilute the scarcity that drives our demand.",
    responses: [
      { text: "Scarcity is worth protecting deliberately — and the good news is that delivery doesn't require you to become widely available. A delivery menu with intentionally low daily quantities maintains the scarcity economics: limited orders per day, no bulk volume, the same exclusive feel. Many cult-following food brands use delivery as a controlled release channel — it adds access without eliminating scarcity.", correct: true, technique: 'Risk Reversal',
        feedback: "You showed that scarcity can be maintained on the delivery channel through daily quantity limits. Low-volume, intentional delivery can actually reinforce the cult status rather than dilute it." },
      { text: "Delivery can actually increase the mystique around your brand by reaching people who can't access you in person.", correct: false,
        feedback: "Mystique could increase or decrease with delivery — it depends on how you manage it. Show the quantity control mechanism that preserves scarcity." },
      { text: "Your strong brand allows you to set any pricing premium you want on delivery.", correct: false,
        feedback: "Pricing premium is a secondary consideration. The scarcity concern is about access management — address quantity controls first." },
      { text: "What's the current ratio of demand to your capacity — how many people can't get what they want?", correct: false,
        feedback: "Good for sizing the controlled-delivery opportunity, but show the scarcity-preserving delivery model first." },
    ],
  },
  hl79: {
    objection: "We've intentionally stayed at one location for 12 years. Delivery changes the meaning of that commitment.",
    responses: [
      { text: "Twelve years in one place is a genuine commitment to your community — and delivery doesn't create a second location. It extends your single kitchen's reach to people in your same community who can't always come in. You're not going somewhere; you're letting people in your community access you when they can't make it to you. The one-location commitment is preserved; delivery is a service, not a second branch.", correct: true, technique: 'Reframing',
        feedback: "You reframed delivery not as expansion but as extended service within the same single-location commitment. Delivery reaches your existing community in their home, not in a new geographic market." },
      { text: "Delivery doesn't require any physical expansion — your restaurant stays exactly where it is.", correct: false,
        feedback: "True but too simple. Engage with the meaning and values behind the one-location commitment and show how delivery is consistent with it." },
      { text: "Many long-established neighborhood restaurants use delivery to serve their community more fully.", correct: false,
        feedback: "Social proof is useful, but address the commitment concern directly. Show why delivery is consistent with the meaning of staying in one place." },
      { text: "What does the one-location commitment mean to you and your community?", correct: false,
        feedback: "Good discovery — honor the commitment first, then ask to understand it more deeply." },
    ],
  },
  hl80: {
    objection: "We grow all our food on a farm attached to the restaurant. Delivery creates distance from the farm-to-table ethos.",
    responses: [
      { text: "The farm is yours and the food that comes from it is yours — delivery is how it reaches a table that isn't in your dining room. Farm-to-table as a philosophy is about the relationship between the land and the food, not the physical proximity of the dining table. A customer who receives your farm-grown food at home is eating the most direct farm-to-table meal available to them. The ethos travels with the food.", correct: true, technique: 'Reframing',
        feedback: "You reframed farm-to-table not as a physical dining room requirement but as a food relationship. Your farm-grown food delivered to someone's home is still farm-to-table — the farm-to-table relationship is in the sourcing, not the seating." },
      { text: "Many farm-to-table restaurants use delivery to extend their farm story to a wider audience.", correct: false,
        feedback: "Social proof is useful, but engage with the philosophical 'distance from the ethos' concern first." },
      { text: "You could feature your farm prominently in your delivery listing to maintain the farm-to-table identity.", correct: false,
        feedback: "Good marketing for the ethos — but make the philosophical case first that the ethos travels with the food, then discuss how to communicate it in the listing." },
      { text: "How do you currently communicate your farm-to-table story to first-time customers?", correct: false,
        feedback: "Discovery for the listing design, but address the 'distance from the ethos' concern philosophically first." },
    ],
  },
  hl81: {
    objection: "We're thinking about a cookbook deal. A delivery presence might undercut the book's exclusivity.",
    responses: [
      { text: "A cookbook and delivery are complementary channels: the cookbook teaches people to make your food at home, and delivery lets them order it when they don't want to cook. Many cookbook authors have found that delivery presence increases book sales — readers experience the food, want to recreate it, and buy the book. The exclusivity concern is answered by how you sequence and position the two.", correct: true, technique: 'Pipeline Value',
        feedback: "You showed the pipeline: delivery creates food desire, the cookbook satisfies the creative desire to make it at home. The two channels support each other rather than competing." },
      { text: "A strong delivery track record could actually demonstrate demand to potential cookbook publishers.", correct: false,
        feedback: "Publisher demand signal is one angle, but the more direct answer is showing how delivery and the cookbook support each other as complementary products." },
      { text: "Many cookbook authors run delivery channels — it often supports book sales rather than undercutting them.", correct: false,
        feedback: "Social proof is useful, but show the specific mechanism: food ordering creates desire to learn to cook it, which drives cookbook sales." },
      { text: "Is the cookbook deal signed or still in early discussions?", correct: false,
        feedback: "Good context for timing — ask it after showing the delivery-cookbook pipeline, so the question helps sequence the two products." },
    ],
  },
  hl82: {
    objection: "We provide meals to unhoused individuals 3 days a week. I'm worried about perception if a commercial platform is involved.",
    responses: [
      { text: "Your community meal program and your commercial food business are entirely separate activities with separate audiences — delivery doesn't connect to or affect your meals for unhoused individuals in any way. The platform supports your commercial menu; your community program runs on its own terms. No perception crossover unless you choose to create one. The two operate independently.", correct: true, technique: 'Channel Separation',
        feedback: "You showed the complete separation of the commercial delivery channel from the community meal program. The platform is irrelevant to the meals for unhoused individuals — it's a commercial service for paying customers." },
      { text: "Many restaurants that run community programs also operate commercial delivery without any conflict.", correct: false,
        feedback: "Social proof doesn't address the specific perception concern. Show the complete separation of the two activities." },
      { text: "You could use delivery profits to fund your community meals, creating a positive narrative.", correct: false,
        feedback: "The positive-narrative angle is interesting eventually, but address the perception concern first by showing the activities are completely separate." },
      { text: "How do your community meals and commercial restaurant operations currently interact?", correct: false,
        feedback: "Good context for understanding the relationship — ask it after establishing that the platform is entirely commercial and separate from the community program." },
    ],
  },
  hl83: {
    objection: "We've built our brand around quarterly seasonal menu launches. Delivery would require year-round standardization.",
    responses: [
      { text: "Your quarterly seasonal launches are entirely compatible with delivery — each season, your delivery menu updates to reflect the new launch, just as your in-house menu does. Delivery doesn't require year-round standardization; it follows whatever menu cadence you set. Your quarterly launches become the delivery menu's seasonal refresh as well. The delivery menu is always an expression of whatever season you're in.", correct: true, technique: 'Reframing',
        feedback: "You showed that the quarterly launch cadence maps directly to delivery menu refreshes. The seasonal launch becomes a delivery event too — consistency with your brand philosophy, not a departure from it." },
      { text: "Many seasonal restaurants run delivery on their current season's menu without standardization.", correct: false,
        feedback: "Social proof without showing the specific mechanism. Show how the quarterly menu cycle translates to delivery refreshes." },
      { text: "Seasonal menus are actually a strong differentiator on delivery — they create anticipation and urgency.", correct: false,
        feedback: "Marketing benefit is secondary. Address the standardization concern with the quarterly-refresh model first." },
      { text: "How much advance planning goes into each quarterly menu launch?", correct: false,
        feedback: "Good for integrating delivery into the launch process — ask it after establishing that delivery follows the quarterly cycle." },
    ],
  },
  hl84: {
    objection: "We have an honor system for payment — customers pay what they think the meal is worth. Delivery breaks that.",
    responses: [
      { text: "An honor system is a community relationship that depends on the customer's presence and goodwill in your space — it's an in-house social contract. Delivery requires a defined price because the transaction is remote and automated. The honor system stays in your dining room; delivery operates on a fixed price menu for a different audience. Two different pricing models, two different settings, no conflict.", correct: true, technique: 'Channel Separation',
        feedback: "You showed that the honor system is an in-house social contract that delivery can't carry by nature — and that this is the right outcome, not a compromise. The two pricing models serve different contexts." },
      { text: "Some platforms do allow flexible pricing that could approximate an honor system.", correct: false,
        feedback: "No delivery platform truly replicates an honor system's social contract. Be honest that delivery uses fixed pricing and show why that's appropriate for the delivery context." },
      { text: "Many community-model restaurants run a fixed-price delivery menu alongside their in-house honor system.", correct: false,
        feedback: "Social proof is useful, but show why the two models serve different contexts rather than just citing other restaurants." },
      { text: "What has the average payment been under your honor system?", correct: false,
        feedback: "Interesting for benchmarking delivery pricing, but address the honor system compatibility concern first." },
    ],
  },
  hl85: {
    objection: "We use a forest garden model — harvest impacts must be minimal. More orders mean more harvesting pressure.",
    responses: [
      { text: "Forest garden harvesting constraints are real and delivery has to work within them. Daily quantity limits on the platform mean you never deliver more than your garden sustainably produces. You'd set your delivery cap to match your responsible harvest level — not your maximum, but your sustainable one. Delivery doesn't change your harvest ethic; it channels your existing responsible harvest to more customers.", correct: true, technique: 'Risk Reversal',
        feedback: "You showed that the delivery quantity cap is set by the grower's sustainable harvest level, not by demand. The forest garden model is fully respected within the delivery limit framework." },
      { text: "Your sustainable sourcing story is a compelling delivery listing asset.", correct: false,
        feedback: "Marketing benefit is secondary. Address the harvest pressure concern with the quantity limit mechanism first." },
      { text: "Many regenerative food producers use delivery successfully while maintaining their land stewardship principles.", correct: false,
        feedback: "Social proof is useful, but show the specific quantity control that keeps delivery within sustainable harvest limits." },
      { text: "What's your current sustainable harvest volume per week for your key ingredients?", correct: false,
        feedback: "Good for setting the delivery cap — ask it as part of 'let's set your delivery quantities to your sustainable harvest level.'" },
    ],
  },
  hl86: {
    objection: "Our concept involves customers participating in the growing of their food on our rooftop garden. Delivery removes them from that.",
    responses: [
      { text: "Participation in growing and delivery are completely different products for different customers. Your growing participants get the immersive experience; delivery reaches the person who wants your food but can't participate in the growing program. Some of your delivery customers may later choose to join the growing program. Delivery is the introduction; participation is the deeper relationship.", correct: true, technique: 'Pipeline Value',
        feedback: "You showed delivery as a discovery path that leads to the more engaged participation model. The growing program is preserved for those who want it; delivery serves a different customer who may eventually want more." },
      { text: "Delivery could reach urban customers who are interested in your growing concept but can't participate yet.", correct: false,
        feedback: "True but it frames delivery as a second-best for interested participants. Show the full pipeline: delivery as the food-first introduction that converts into program participation." },
      { text: "Many immersive food experience brands run delivery alongside their participatory programming.", correct: false,
        feedback: "Social proof is useful, but show the specific pipeline between delivery and participation." },
      { text: "How do new participants currently find and join your growing program?", correct: false,
        feedback: "Good for showing where delivery fits the acquisition funnel — ask it after establishing the discovery-to-participation pipeline." },
    ],
  },
  hl87: {
    objection: "We've invested in a full commercial kitchen that only runs Tuesday through Thursday. Delivery would disrupt my carefully designed light footprint.",
    responses: [
      { text: "A Tuesday-through-Thursday kitchen is exactly the right setup for a limited delivery schedule: delivery runs on your three active days only, during your existing kitchen hours. Your light footprint is preserved by the schedule you already maintain. Delivery fills the kitchen utilization you already have without adding any additional days or changing your operational model.", correct: true, technique: 'Incremental Logic',
        feedback: "You showed that the three-day schedule is the natural delivery schedule — no extension, no disruption. Delivery runs within the existing operational model." },
      { text: "A part-time commercial kitchen often has the most to gain from delivery during active hours.", correct: false,
        feedback: "Revenue potential is true but doesn't address the light footprint concern. Show how delivery stays within the existing 3-day model." },
      { text: "Many commercial kitchen operators use delivery to improve cost recovery on underutilized days.", correct: false,
        feedback: "The owner has three active days — 'underutilized days' is the other four, and they're not proposing to add those. Address the existing-schedule compatibility." },
      { text: "What hours do you currently operate the kitchen on your active days?", correct: false,
        feedback: "Good for designing the delivery window — ask it as part of 'let's make sure delivery runs within your existing kitchen hours.'" },
    ],
  },
  hl88: {
    objection: "We've committed to a no-waste kitchen. Every delivery generates packaging waste I'm trying to eliminate.",
    responses: [
      { text: "Packaging waste on delivery is real — and manageable with the right materials. Your delivery packaging can be 100% compostable and home-compostable, not just commercially compostable, which means the waste cycle is fully closed for customers who compost. If packaging waste is a line you won't cross regardless of materials, that's a principled position and I respect it. But if compostable-everything is acceptable, the waste impact is minimal.", correct: true, technique: 'Risk Reversal',
        feedback: "You acknowledged the real trade-off honestly: packaging waste is real, but compostable materials minimize the impact. You also respected the possibility that this is a non-negotiable principle — both responses are honest." },
      { text: "The environmental impact of delivery packaging has improved significantly with new materials.", correct: false,
        feedback: "Vague improvement claims aren't specific enough. Show the home-compostable packaging option and acknowledge the trade-off honestly." },
      { text: "Many zero-waste restaurants have found acceptable packaging solutions that align with their values.", correct: false,
        feedback: "Social proof without showing the specific solution. Address the waste concern with the home-compostable packaging option." },
      { text: "What packaging materials are you currently using in your restaurant?", correct: false,
        feedback: "Good context for the packaging conversation — ask it as part of 'let me show you what home-compostable delivery packaging looks like compared to your current in-house materials.'" },
    ],
  },
  hl89: {
    objection: "We require customers to sign a food philosophy agreement before ordering from us. Delivery customers won't do that.",
    responses: [
      { text: "The philosophy agreement is an in-house onboarding step that doesn't translate directly to delivery — you're right about that. The delivery equivalent is your listing description: a clear, detailed expression of your food philosophy that customers read before ordering. Customers who read and still choose to order are self-selecting for alignment with your philosophy. It's not a signed agreement, but it creates the same customer self-selection outcome.", correct: true, technique: 'Reframing',
        feedback: "You showed the delivery equivalent of the philosophy agreement: a detailed listing description that creates self-selection. The signed agreement creates intentional customers; the description does the same through opt-in readership." },
      { text: "Most customers who seek out health food restaurants already align with food philosophies.", correct: false,
        feedback: "Assumption about customer alignment doesn't address the agreement concern. Show the listing-as-self-selection mechanism." },
      { text: "You could include a philosophy acceptance checkbox in the ordering flow with platform support.", correct: false,
        feedback: "Platform-level customization to add checkboxes is not a standard feature and sets expectations you can't deliver on. Show the listing description solution." },
      { text: "What does the food philosophy agreement currently cover?", correct: false,
        feedback: "Good discovery for designing the delivery listing description — ask it as part of 'let's build a listing description that communicates your philosophy to delivery customers.'" },
    ],
  },
  hl90: {
    objection: "We have a dedicated waiting area with meditation cushions and gentle music. It's part of the pre-meal ritual. Delivery has none of that.",
    responses: [
      { text: "The pre-meal ritual is your in-house experience — and delivery doesn't try to carry it into someone's home. What delivery does is bring your food to the customer who can't be in your space tonight. They may create their own pre-meal moment with your food; many health-focused customers do. Delivery and the ritual serve different contexts. Your dining room ritual is entirely preserved for everyone who comes in.", correct: true, technique: 'Channel Separation',
        feedback: "You honored the ritual experience and showed that delivery is a different context, not a failed attempt at replicating it. The ritual stays in the dining room; delivery serves a different, equally valid moment." },
      { text: "You could include a mindful eating card in your delivery packaging to extend the ritual experience.", correct: false,
        feedback: "Good extension tactic, but address the ritual preservation concern first. The dining room ritual stays intact; delivery serves a different context." },
      { text: "Many wellness-focused restaurants find delivery customers create their own rituals around the food.", correct: false,
        feedback: "Speculation about customer behavior doesn't address the specific pre-meal ritual concern. Show channel separation first." },
      { text: "What does the pre-meal ritual experience look like for your typical dining guest?", correct: false,
        feedback: "Good discovery for the delivery extension card idea — but honor the ritual as an in-house experience first." },
    ],
  },
  hl91: {
    objection: "We've been approached by a hospital to provide post-surgical meal kits. That's where our focus is for the next year.",
    responses: [
      { text: "A hospital meal kit partnership is a meaningful opportunity that deserves your full focus. Delivery would run alongside it if your kitchen has any capacity beyond the hospital commitment, but if the partnership requires your full operational attention for the next year, timing this correctly matters more than launching now. Let's plan a follow-up after your hospital program is established. When does the engagement start?", correct: true, technique: 'Pipeline Value',
        feedback: "You respected the priority completely and offered to follow up at the right time. The offer to revisit after the hospital program is established shows genuine respect for the current focus." },
      { text: "Consumer delivery could run in parallel with your hospital program with the right capacity management.", correct: false,
        feedback: "Suggesting parallel operations before confirming they have capacity can sound like you're minimizing the hospital commitment. Respect the priority." },
      { text: "Your hospital partnership would create a great credibility signal for a future delivery launch.", correct: false,
        feedback: "Future benefit framing doesn't address the current focus constraint. Respect the commitment and schedule the follow-up." },
      { text: "How many meal kits per week would the hospital partnership require?", correct: false,
        feedback: "Good for assessing capacity, but ask it after respecting the commitment — 'if you have capacity beyond the hospital program, let me know what that looks like' rather than as an opener." },
    ],
  },
  hl92: {
    objection: "We're a collective — six chefs who rotate ownership weekly. Decision-making takes time.",
    responses: [
      { text: "A rotating-ownership collective is a genuine coordination challenge — and one I can support by coming to your group with a clear proposal rather than leaving each rotating owner to make the same decision. I'll prepare one document for the collective: what delivery is, what it costs, what it earns, and how to pause or stop it. Your collective votes once and the system runs. Who would be the right person to share it with first?", correct: true, technique: 'Long-game Respect',
        feedback: "You offered to simplify the collective's coordination challenge by preparing a single decision document rather than requiring each rotating owner to independently research and decide. This respects their structure while making it easier to reach consensus." },
      { text: "A trial period might be a lower-commitment way for the collective to agree to try delivery.", correct: false,
        feedback: "Framing the proposal for them isn't appropriate. Offer to prepare the decision document and let the collective design the proposal together." },
      { text: "Many chef collectives have successfully implemented delivery as a shared business decision.", correct: false,
        feedback: "Social proof doesn't solve their coordination challenge. Offer the practical support: one document for the collective vote." },
      { text: "Who is currently the primary decision-maker in the collective?", correct: false,
        feedback: "In a rotating ownership, there may not be a single decision-maker. Offer to prepare the collective document and ask who to send it to first." },
    ],
  },
  hl93: {
    objection: "We serve traditional Indigenous foods and the commercialization of those foods is a sensitive cultural issue.",
    responses: [
      { text: "Cultural sensitivity around Indigenous food commercialization is a real and serious consideration. How delivery fits depends on how your community and your relationship to the cuisine frames it. If the act of sharing these foods more widely is consistent with your cultural values and community goals, delivery is one channel. If the concern is that the platform context commodifies something that should remain community-rooted, that's a principled position worth respecting. This deserves a deeper conversation than a sales call.", correct: true, technique: 'Long-game Respect',
        feedback: "You took the cultural concern seriously and gave an honest, respectful response: this is a significant cultural consideration that deserves careful thought, not a quick pitch. Acknowledging the weight of the concern builds genuine trust." },
      { text: "Delivery could actually help spread awareness of Indigenous food culture more widely.", correct: false,
        feedback: "Framing commercialization as 'spreading awareness' is potentially dismissive of a genuine cultural sensitivity. Take the concern at face value." },
      { text: "Many Indigenous food businesses have found delivery to be consistent with their cultural values.", correct: false,
        feedback: "Social proof from other Indigenous businesses doesn't address this specific community and cultural relationship. Engage with the specific concern respectfully." },
      { text: "How does your community view the broader sharing of these traditional foods?", correct: false,
        feedback: "Good and important discovery — but engage with the cultural sensitivity concern respectfully first, showing you're taking it seriously before asking questions." },
    ],
  },
  hl94: {
    objection: "We've never taken on any debt and we see platform fees as a form of financial dependency.",
    responses: [
      { text: "That financial independence philosophy is clear and principled. The distinction worth drawing: platform fees are a transaction cost on revenue earned — you pay them when and only when you earn. There's no debt, no obligation when delivery is off, and no commitment beyond individual transactions. It's closer to credit card processing fees than debt. But if any external transaction cost feels like dependency to you, that's a values position I'll respect.", correct: true, technique: 'Reframing',
        feedback: "You drew the clear distinction between debt (obligation in advance of revenue) and transaction fees (cost only when earning). You also respected that if this is a principled position, that's legitimate — both responses are honest." },
      { text: "Platform fees are standard industry costs — they're not unusual or a form of debt.", correct: false,
        feedback: "Normalizing the fee doesn't address the dependency concern. Draw the debt-versus-transaction-cost distinction." },
      { text: "The revenue you earn net of fees is free of any obligation — you could stop at any time.", correct: false,
        feedback: "The no-obligation point is important but doesn't address the 'form of financial dependency' framing. Make the debt-versus-fee distinction explicitly." },
      { text: "What does financial independence mean to you in terms of how you run the restaurant?", correct: false,
        feedback: "Good discovery for understanding the values depth — but draw the debt-versus-fee distinction first, then explore the values if they want to discuss further." },
    ],
  },
  hl95: {
    objection: "We grow all our herbs in a medicinal herb garden. The plants have specific harvest cycles that can't be forced.",
    responses: [
      { text: "Medicinal herb harvest cycles are a real production constraint — and delivery can align with them rather than force them. Your delivery menu reflects what's currently harvestable: when rosemary is ready, rosemary dishes are live; when it's not, they're paused. The platform's real-time availability tools let you open and close items as your garden's cycle permits. Your medicine garden sets the menu; the platform communicates it.", correct: true, technique: 'Risk Reversal',
        feedback: "You showed the real-time availability tool as the mechanism that aligns delivery to the garden's natural cycle. The harvest cycle controls the menu; the platform communicates availability." },
      { text: "Your medicinal herb focus is a compelling story for your delivery listing.", correct: false,
        feedback: "Marketing benefit is secondary. Address the harvest cycle concern with the availability management tool first." },
      { text: "Many medicinal herb gardens operate similarly to seasonal farms — delivery adapts to their availability.", correct: false,
        feedback: "Social proof without showing the specific tool. Show the availability management mechanism." },
      { text: "What's the harvest frequency for your most commonly used medicinal herbs?", correct: false,
        feedback: "Good for designing the availability update schedule — ask it as part of 'let's map your garden's cycle to your delivery availability schedule.'" },
    ],
  },
  hl96: {
    objection: "Our restaurant is attached to a yoga studio that hosts celebrity retreats. We have a very controlled PR environment.",
    responses: [
      { text: "Your platform listing is in your control: minimal information, your chosen imagery, your language. It doesn't have to reference the yoga studio or the retreat program at all. Your delivery identity can be designed to be a completely separate presentation — the food business, not the retreat context. If managing the two brand environments carefully is important, a distinct delivery brand identity keeps them cleanly separated.", correct: true, technique: 'Premium Positioning',
        feedback: "You showed that the delivery listing is independently designed and doesn't need to connect to the retreat or celebrity context. A separate food-focused identity for delivery keeps the PR environment controlled." },
      { text: "Delivery would raise the profile of your attached restaurant without affecting the retreat program.", correct: false,
        feedback: "Raising the profile of the restaurant could affect the PR environment they're trying to control. Address the controlled presentation concern directly." },
      { text: "Many celebrity-adjacent restaurants run delivery channels without any PR complications.", correct: false,
        feedback: "Social proof doesn't address the specific PR control concern. Show the identity separation option." },
      { text: "What aspects of the celebrity retreat program are most sensitive from a PR standpoint?", correct: false,
        feedback: "Discovery about PR sensitivities — but show the separate listing identity option first. Then understanding specific sensitivities helps design the appropriate boundary." },
    ],
  },
  hl97: {
    objection: "We've built a thriving business without ever discounting or promoting. Adding a platform changes that discipline.",
    responses: [
      { text: "Your pricing discipline is entirely preserved on the platform. Promotions are fully optional — you can be listed at full price with zero discounts, ever. Many premium partners have never run a promotion and perform well because their food and reviews speak for themselves. Being on a platform doesn't require a single discount. Your discipline doesn't change; your reach does.", correct: true, technique: 'Risk Reversal',
        feedback: "You directly addressed the discount concern: promotions are opt-in, not required. Full-price listing with no promotions is a completely valid approach that many premium restaurants use successfully." },
      { text: "Promotion tools are available if you ever want them — but completely optional.", correct: false,
        feedback: "Framing it as 'if you ever want them' suggests you expect them to eventually discount. Confirm unambiguously that promotions are never required." },
      { text: "Your reputation for full-price quality would actually stand out on the platform.", correct: false,
        feedback: "Brand standing is a secondary benefit. Confirm directly that your pricing discipline is fully preserved first." },
      { text: "What has your no-discount approach meant for your brand over the years?", correct: false,
        feedback: "Good discovery for understanding the values behind the discipline, but answer the promotion concern directly first." },
    ],
  },
  hl17: {
    objection: "We're thinking about raising our Series A in the next 6 months. We want clean, controlled metrics before talking to investors.",
    responses: [
      { text: "That's a smart pre-fundraise instinct. Here's the case for starting now rather than after: if Uber Eats drives incremental revenue for even 4 months before your raise, that's a demonstrated additional channel in your deck — not a variable, but a proven data point. Investors respond to that.",
        correct: true, technique: 'Pipeline Value',
        feedback: "You reframed the 'clean metrics' concern from a reason to wait into a reason to start now. A demonstrated multi-channel revenue profile heading into a raise is more compelling than a hypothetical one." },
      { text: "Delivery revenue would strengthen your Series A metrics regardless of timing.", correct: false,
        feedback: "They're worried about control and cleanliness, not just revenue. Address the control concern before introducing the financial upside." },
      { text: "Investors who understand the restaurant space know delivery is table stakes — they'd expect to see it.", correct: false,
        feedback: "Claiming investors 'expect' it without knowing their specific investor profile is risky. The founder knows their investor target better than you do." },
      { text: "What does your investor deck currently show as your main growth channels?", correct: false,
        feedback: "Good discovery for eventually tailoring the fundraising argument, but ask it after framing how early platform data can help the raise — not as your opener." },
    ],
  },
};

const DISTRICT_THEMES = {
  italian: {
    bg: 'linear-gradient(180deg, #fdecea 0%, #fff0ee 40%, #fff8f7 70%, #ffffff 100%)',
    emojis: ['🍕', '🍝', '🫒', '🍷', '🌿', '🧄', '🍅', '🫙'],
  },
  chinese: {
    bg: 'linear-gradient(180deg, #fff3e0 0%, #fff8f0 40%, #fffbf5 70%, #ffffff 100%)',
    emojis: ['🥢', '🏮', '🐉', '🍜', '🥟', '🌟', '🎐', '🍡'],
  },
  mexican: {
    bg: 'linear-gradient(180deg, #dff7f4 0%, #eafaf8 40%, #f4fdfc 70%, #ffffff 100%)',
    emojis: ['🌮', '🌶️', '🌺', '🥑', '🪅', '🎨', '🌻', '💃'],
  },
  japanese: {
    bg: 'linear-gradient(180deg, #f0e8ff 0%, #f6f0ff 40%, #faf6ff 70%, #ffffff 100%)',
    emojis: ['🌸', '🍱', '⛩️', '🎋', '🌙', '🗻', '🍵', '🪷'],
  },
  health: {
    bg: 'linear-gradient(180deg, #dff7ec 0%, #eafaf3 40%, #f4fdf8 70%, #ffffff 100%)',
    emojis: ['🥗', '🌿', '🥦', '🌱', '🍋', '🥝', '🫐', '🥕'],
  },
};

let districtFloaterInterval = null;

// ─── GAUNTLET DATA ────────────────────────────────────────────────────────────
const GAUNTLET_ROUNDS = [
  [
    { objection: '"We already use DoorDash — it works fine for us."', technique: 'Additive Framing' },
    { objection: '"Commission fees are too high. It eats into our margins."', technique: 'Incremental Margin Logic' },
    { objection: '"My pasta goes soggy in 15 minutes. Delivery would ruin the food."', technique: 'Social Proof + Solution' },
  ],
  [
    { objection: '"I\'m slammed right now. Come back in six months."', technique: 'Ease + Soft Next Step' },
    { objection: '"Managing another platform sounds like a nightmare."', technique: 'Effort Minimization' },
    { objection: '"What makes Uber Eats different? You all say the same things."', technique: 'Differentiation' },
  ],
  [
    { objection: '"Our customers walk in the door. We\'ve never needed delivery."', technique: 'Additive Framing' },
    { objection: '"We have Miguel — our own driver. Customers love him."', technique: 'Complementary Positioning' },
    { objection: '"My partner handles finances and she\'s away until next month."', technique: 'Stakeholder Navigation' },
  ],
  [
    { objection: '"Our margins are 12%. There\'s no room to share revenue."', technique: 'Incremental Margin Logic' },
    { objection: '"We tried delivery before. Orders were wrong and our reputation suffered."', technique: 'Empathy + Discovery' },
    { objection: '"Delivery feels off-brand. We\'re an omakase experience."', technique: 'Premium Positioning' },
  ],
  [
    { objection: '"We\'re already on two platforms. A third means more complexity."', technique: 'Honest Consulting' },
    { objection: '"I need real numbers. What\'s the actual revenue lift in this area?"', technique: 'Hyperlocal Data' },
    { objection: '"Our customers order direct. We keep 100% — why give that up?"', technique: 'Channel Separation' },
  ],
];

const gauntlet = {
  round: 0,
  selectedObjIdx: null,
  matched: new Set(),
  correct: 0,
  wrong: 0,
  streak: 0,
  bestStreak: 0,
  timeLeft: 45,
  timer: null,
  shuffledTechs: [],
};

const PLAYBOOK_CARDS = [
  {
    id: 'reframing',
    name: 'Reframing',
    icon: '🔄',
    tagline: "Make 'no' a different kind of yes",
    desc: "Turn the objection into a reason to say yes. When they say 'we already have X,' show that Uber Eats doesn't replace X — it adds to it.",
    example: '"DoorDash handles your existing customers. Uber Eats brings you new ones you can\'t reach today. They do different jobs."',
    unlockedAfter: -1,
    what: "Reframing means taking the exact objection they've raised and rotating it so it becomes a reason to act. You're not dismissing their concern — you're showing them a perspective they hadn't considered. Done right, the prospect feels understood, not outmaneuvered.",
    psychology: "When people object, they've made a decision. Telling them they're wrong triggers defensiveness. Reframing sidesteps the fight by saying 'you're right — and here's what that also means.' It meets them where they are before moving them somewhere new. The key is that you genuinely agree with part of their premise before introducing the new angle.",
    when: "Best for objections that contain hidden assumptions — 'we already have X' (assumes Uber Eats competes with X), 'our customers don't use apps' (assumes delivery only reaches app users), 'we're doing fine' (assumes fine means no room to grow).",
    mistakes: "Don't reframe too fast — it sounds like a trick if you haven't acknowledged their point first. Pause, repeat back what they said, then introduce the new frame. And don't reframe a real fact. If their margin really is 5%, that's not a perspective problem — that's a math problem.",
    examples: [
      {
        title: "Already on DoorDash",
        prospect: "We're already on DoorDash. I don't need another platform.",
        wrong: "DoorDash and Uber Eats are actually very different — our user base is much larger.",
        right: "DoorDash serves your existing customers who already know you. Uber Eats reaches people who are searching for food and have never heard of you. One retains; one acquires. They don't compete — they do different jobs.",
      },
      {
        title: "Word of mouth is enough",
        prospect: "We've always grown through word of mouth. We don't need more marketing.",
        wrong: "Word of mouth is slow. A platform would accelerate your growth significantly.",
        right: "Word of mouth is powerful — for the people already in your network. The gap it can't close is the person who moved to the neighborhood last month and has no connection to your existing customers yet. That's who the platform reaches.",
      },
    ],
  },
  {
    id: 'channel-separation',
    name: 'Channel Separation',
    icon: '↔️',
    tagline: "Show them both channels are playing different games",
    desc: "Prove that a new channel serves a completely different customer — so adding it can never cannibalize what they already have.",
    example: '"Your website converts people who already know your name. Uber Eats finds the ones searching \'Mexican food near me\' who\'ve never heard of you."',
    unlockedAfter: 0,
    what: "Channel Separation means demonstrating that two channels serve different customers at different moments. When a restaurant owner says 'we already have online ordering' or 'our regulars walk in,' they're assuming delivery competes with what they have. You prove the two audiences never overlap — so adding delivery is pure addition, not substitution.",
    psychology: "Restaurant owners are protective of what they've built. The fear of cannibalization — that a new channel steals existing revenue — is rational and deeply felt. They've seen businesses chase growth and lose the core. Channel Separation removes that fear entirely: no zero-sum trade, only new territory. The technical term for this is 'additive positioning.'",
    when: "Use when the objection contains 'already have' — a website, a loyalty program, another platform, a walk-in base, their own app. Any time they're protecting an existing channel, show that delivery serves a categorically separate population.",
    mistakes: "Don't use Channel Separation when the channels actually do overlap. If they're on DoorDash in the same market and delivery radius, the cannibalization concern is real. Acknowledge it and switch to the incremental-value argument instead. Forcing Channel Separation when it doesn't apply destroys credibility.",
    examples: [
      {
        title: "We have our own website ordering",
        prospect: "We already have online ordering on our website. Why would I pay your fees on top?",
        wrong: "Our platform gets far more traffic than most restaurant websites.",
        right: "Your website captures people who already know your name — they searched for you specifically. Uber Eats captures people searching 'Italian food near me' who have never heard of you. Your site converts people who know you; the platform finds the ones who don't.",
      },
      {
        title: "Our regulars just walk in",
        prospect: "My lunch crowd walks in every day. They don't need an app to find me.",
        wrong: "Delivery would help you reach customers outside your immediate walk-in area.",
        right: "Your walk-in regulars aren't going anywhere — delivery doesn't touch them. It reaches the person working from home 8 blocks away who has never walked past your door. Two different people, two different moments. Neither touches the other.",
      },
    ],
  },
  {
    id: 'social-proof',
    name: 'Social Proof',
    icon: '👥',
    tagline: "Specific > Generic. Every time.",
    desc: 'Specific examples from restaurants like theirs are 10× more persuasive than general statistics. Names, neighborhoods, numbers.',
    example: '"The sushi spot two blocks from here said the same thing eight months ago. They\'re now doing 22% of their revenue through delivery."',
    unlockedAfter: 0,
    what: "Social Proof is the use of real, specific, comparable examples to validate your claim. The human brain weighs 'three restaurants on this same block' far more heavily than 'restaurants in our network.' The more specific — neighborhood, cuisine type, timeline, result — the more persuasive. Generic statistics are marketing. A neighbor's result is evidence.",
    psychology: "Decision-makers reduce uncertainty by looking at what comparable people have done. This is called social learning, and it's one of the most deeply wired human behaviors. A statistic about all restaurants is easy to dismiss ('I'm different'). A specific story about a restaurant that's genuinely similar creates identification — 'if it worked for them, it might work for me.'",
    when: "Use when someone feels their situation is unique or risky. The phrase 'we're different' is the signal to deploy Social Proof — show them who else said the same thing and what happened. Also use when you sense general skepticism: real stories cut through distrust faster than any argument.",
    mistakes: "Never make up examples. Never cite generic stats ('restaurants on our platform earn 30% more'). Always be specific: type of restaurant, neighborhood, timeline, outcome. Vague social proof backfires because it sounds like a marketing line. The power is in the specificity — that's what makes it feel real.",
    examples: [
      {
        title: "We're different from other restaurants",
        prospect: "Our restaurant is different. Those examples won't apply to us.",
        wrong: "All types of restaurants see results on our platform — it works across the board.",
        right: "What makes you different? Because there's probably a comparable example I can find. Tell me your cuisine and your neighborhood and I'll show you a restaurant that said the exact same thing six months ago — and what happened.",
      },
      {
        title: "Delivery apps are for fast food",
        prospect: "Our customers are local foodies. Delivery apps are for fast food people.",
        wrong: "Actually, our data shows healthy and artisan food categories are growing fast.",
        right: "The tasting-menu spot three blocks from you — Sora — they had the same concern. They launched six months ago and it's now 18% of their revenue, mostly new customers who came in person after trying the food on delivery first.",
      },
    ],
  },
  {
    id: 'incremental-logic',
    name: 'Incremental Logic',
    icon: '🪜',
    tagline: "Start small. Prove it. Grow on your terms.",
    desc: "Remove the 'all or nothing' framing. Find the smallest viable version — one window, five items — and show it creates value without requiring a leap.",
    example: '"Three days a week, five items, your slow 3–5pm window. If it doesn\'t work in 30 days, there\'s nothing to continue. The exit is as easy as the entry."',
    unlockedAfter: 1,
    what: "Incremental Logic removes the 'all or nothing' framing that causes paralysis. Rather than asking for a full commitment, you find the smallest viable version — a single day of the week, a handful of menu items, a limited delivery window — and show how it creates value without requiring a bet. The whole pitch shrinks to: can you try this one small thing?",
    psychology: "Big decisions feel risky; small experiments feel safe. When the downside is limited and reversible, people will try things they'd otherwise refuse. The prospect isn't saying no to delivery — they're saying no to the risk they've imagined in their head. Make the experiment tiny and the imagined risk shrinks with it. This is called the foot-in-the-door principle.",
    when: "Use when the objection is about operational disruption, risk, uncertainty, or commitment. 'I don't want to overwhelm my kitchen,' 'I'm not sure it will work for us,' 'we're not ready for this yet' — all are signals to propose the smallest possible starting point.",
    mistakes: "Don't propose incrementalism without defining what success looks like. 'Let's try it and see' with no metric is weak. Propose a specific small test with a specific outcome — 10 delivery orders in the first two weeks, then we evaluate together. An experiment without a success criterion is just procrastination.",
    examples: [
      {
        title: "We're at capacity during lunch",
        prospect: "We're already maxed out at lunch. We can't take on delivery orders.",
        wrong: "Delivery orders are typically lighter — it shouldn't overwhelm you much.",
        right: "Then let's skip lunch entirely. What does 3–5pm look like — before dinner service, kitchen already warm? If there's a quiet two-hour window, that's your delivery slot. Five items, one window, no competition with your rush. Start there and we'll look at the numbers together in three weeks.",
      },
      {
        title: "What if it doesn't work for us?",
        prospect: "I've heard it doesn't work for everyone. What if I go through all this setup and it's not worth it?",
        wrong: "Our success rates are very high — most restaurants see strong results within 30 days.",
        right: "Fair question. Here's the smallest version: five menu items, no discounts, three days a week, 30 days. I'll sit with you after 30 days and look at the numbers honestly. If it's not working, there's nothing to continue. The exit is as easy as the entry.",
      },
    ],
  },
  {
    id: 'roi-demo',
    name: 'ROI Demonstration',
    icon: '📈',
    tagline: "Abstract benefits don't close deals. Real numbers do.",
    desc: "Translate features into dollars and timelines. Build the math in front of them using their own numbers — when they help build the model, they own the conclusion.",
    example: '"At your $18 check average, 10 incremental orders a day is $126 net after fees. That\'s the math — not my estimate, yours."',
    unlockedAfter: 1,
    what: "ROI Demonstration translates every feature into a specific, calculable financial outcome. Instead of saying 'you'll get more visibility,' you say 'based on your price point and the order data in your zip code, that visibility converts to roughly X orders a week, which is Y net dollars.' You build the math in front of them, ideally using numbers they give you.",
    psychology: "Business owners make decisions based on financial outcomes. Features and benefits are just words; numbers are decisions. When you show someone a realistic model — especially one they helped build — they feel ownership of the conclusion. This is the 'IKEA effect' applied to sales: we value things we helped create. Their numbers in your model makes it their analysis, not your pitch.",
    when: "Use with financially-minded owners — anyone who asks 'but what does that mean for my bottom line?' Also deploy when the conversation gets stuck on fees: the fee feels big in isolation. Reframe it in the context of the net return and the fee shrinks. Run the math before they do — control the frame.",
    mistakes: "Never use made-up numbers. If you don't have data for their specific market, say so and use a conservative range. Overconfident ROI claims destroy credibility the moment a skeptical owner finds a flaw. If the real math doesn't work at their margins, acknowledge it — a prospect who trusts your honesty will come back when things change.",
    examples: [
      {
        title: "The fees are too high",
        prospect: "Your commission is 30%. That's almost my entire profit margin.",
        wrong: "Many restaurants find the volume increase more than offsets the fee.",
        right: "Let's run it. Your $18 average check at 30% is $12.60 to you. If your food cost is 35%, that's $12.60 minus $6.30 — you keep $6.30 per incremental order. Ten additional orders a day is $63 net. Does that math change the conversation?",
      },
      {
        title: "We're already profitable",
        prospect: "We're doing well. I don't need the extra revenue right now.",
        wrong: "You could always reinvest the additional revenue in expansion.",
        right: "Fair. What does a slow Tuesday afternoon look like for your kitchen right now? If there are three hours where the team is prepped and the dining room has four covers, that's idle capacity — and idle capacity is the thing I'd want to run the numbers on.",
      },
    ],
  },
  {
    id: 'pipeline-value',
    name: 'Pipeline Value',
    icon: '🔭',
    tagline: "Show them where the relationship ends up, not where it starts",
    desc: "Make the case for acting now by showing what today's decision is worth in the future — customer data, platform ranking, a proven revenue line for investors.",
    example: '"Delivery order data tells you exactly where your customer density is. That\'s real market research for where your second location should open."',
    unlockedAfter: 2,
    what: "Pipeline Value makes the case for acting now by showing what today's decision is worth in the future. Rather than arguing the immediate return, you show the compounding benefit of an early start: customer data, rating history, order patterns, platform ranking, an established channel before an investor meeting. The 'return' on joining isn't just this month — it's everything that follows.",
    psychology: "People discount the future heavily and overweight immediate costs. This is called hyperbolic discounting, and it explains why the timing objection ('not right now') is so common. Pipeline Value reverses the lens: the cost of not starting is the future value you're forfeiting. Anchoring that future value to a concrete near-term event — a renovation, an expansion, a fundraise — makes it feel real and urgent without pressure.",
    when: "Use when someone says 'not right now' or cites a future event that feels like a reason to wait — a renovation, a new hire, a seasonal slow period, a fundraise. Show how starting now positions them optimally for what's coming. The most powerful version connects the setup time to the moment they most want to be ready.",
    mistakes: "Don't speculate about future results without grounding them in specifics. 'You'll be way ahead of competitors' without explaining how sounds like empty sales talk. Show what specific future states benefit from having started earlier: platform ranking, ratings volume, customer data, a demonstrated revenue channel.",
    examples: [
      {
        title: "We're renovating next quarter",
        prospect: "We're planning a full renovation in Q2. I'd rather wait until after.",
        wrong: "We could get you set up quickly now before the renovation starts.",
        right: "Actually Q2 timing is ideal. We do the onboarding now, build the listing, and you launch on the day you reopen. New look, new menu, new delivery channel — all at once. Your renovation becomes a full relaunch moment instead of just a refresh.",
      },
      {
        title: "Focused on second location",
        prospect: "All my energy is going into opening the second location. That's the priority.",
        wrong: "Delivery at your first location doesn't require much of your time.",
        right: "Your second location is actually a reason to start at the first one now. Platform data shows you where your delivery customers cluster — zip codes, times, demographics. That's market research for where the second location should go and how to price it.",
      },
    ],
  },
  {
    id: 'risk-reversal',
    name: 'Risk Reversal',
    icon: '🛡️',
    tagline: "Take the fear off the table first",
    desc: "Identify the exact bad outcome they're afraid of and show how it's structurally prevented — not by promising it won't happen, but by showing who owns it if it does.",
    example: '"Delivery complaints go through our support team, not you. Your restaurant rating reflects your kitchen — not a driver\'s GPS error."',
    unlockedAfter: 2,
    what: "Risk Reversal means identifying the exact bad outcome the prospect is afraid of and showing them how it's structurally prevented — not by promising it won't happen, but by showing the mechanism that handles it if it does. Guarantees, accountability systems, clear exit paths, and honest disclosure are the tools of Risk Reversal. The goal is to make the downside manageable, not invisible.",
    psychology: "The brain weighs potential losses roughly twice as heavily as equivalent potential gains. A prospect who says 'what if the driver messes up my order' isn't weighing an unlikely scenario — they're paralyzed by helplessness. They can't control a driver. Risk Reversal addresses the helplessness directly: here's who owns the problem, here's how it gets resolved, here's your exit if it keeps happening.",
    when: "Use when the objection is fear-based: 'what if this goes wrong,' 'I've been burned before,' 'I can't afford a mistake,' 'I'm worried about my reputation.' The key signal is hypothetical dread — they're imagining a bad future. Name the specific bad outcome they're imagining before they do, and then show the structural response to that exact scenario.",
    mistakes: "Don't say 'it won't happen' — that's the opposite of Risk Reversal and it sounds like a dismissal. The power is in showing the protection system for when it does happen, not in predicting a rosy outcome. And don't make promises about things you can't control. If a driver might mishandle their food, show the escalation and refund process, not the assurance.",
    examples: [
      {
        title: "I don't trust delivery drivers",
        prospect: "I can't control what drivers do. If something goes wrong, my reputation takes the hit.",
        wrong: "Our drivers are highly rated and issues are very rare.",
        right: "You're right that you can't control the driver — that's exactly why accountability sits with us, not you. Delivery complaints — wrong item, late, tampered — go to our support team and don't show on your restaurant profile. Your rating reflects your kitchen. The driver's GPS detour isn't your review to answer.",
      },
      {
        title: "We tried delivery and it was bad",
        prospect: "We tried a delivery service two years ago. Complete disaster — cold food, wrong orders, bad reviews.",
        wrong: "The delivery landscape has improved a lot since then.",
        right: "Which service was it? I want to understand exactly what went wrong — not give you a recycled pitch. A driver management problem, a platform support problem, and a kitchen workflow problem all have different fixes. Tell me what specifically went wrong and I'll tell you honestly whether we solve it or not.",
      },
    ],
  },
  {
    id: 'premium-positioning',
    name: 'Premium Positioning',
    icon: '✨',
    tagline: "Let their standards be an asset, not a barrier",
    desc: "Validate the quality concern and show exactly how platform listing controls put the entire presentation in their hands — photography, menu, pricing, descriptions.",
    example: '"Your listing is what you make it. I can show you what a premium listing looks like built the way you\'d design it — it might change how you see this."',
    unlockedAfter: 3,
    what: "Premium Positioning validates a high-end restaurant's quality and brand concerns by showing how the platform enhances rather than dilutes their identity. Instead of telling them delivery is fine for premium restaurants, you show them specific listing controls — professional photography, curated menus, independent pricing — that put the presentation entirely in their hands. Their standards are the brief; the platform is the canvas.",
    psychology: "Premium restaurant owners have spent years building a brand identity that feels fragile and hard-won. Any change feels like a potential dilution. The objection isn't really about delivery — it's about trust: do they trust this channel to represent them accurately? Premium Positioning answers the trust question by showing the owner exactly what they control, which turns anxiety into agency.",
    when: "Use with high-end, fine dining, farm-to-table, or brand-conscious restaurants who worry that 'being on a delivery app' will make them look generic. The signal is language like 'our brand,' 'our standards,' 'our reputation,' or 'we never discount.' Any statement of quality identity is an entry point for Premium Positioning.",
    mistakes: "Don't argue that delivery doesn't affect premium brand perception — for some restaurants it genuinely might. Acknowledge the concern as legitimate before showing the tools that address it. And never suggest a restaurant compromise their brand standards to make the economics work. If the economics require compromise, say so honestly.",
    examples: [
      {
        title: "Being on a delivery app looks cheap",
        prospect: "Being on Uber Eats feels inconsistent with our positioning as a fine dining restaurant.",
        wrong: "Uber Eats carries many premium brands — it's not a fast-food-only platform.",
        right: "Your listing is your brand — not the platform's default look. Your photography, your descriptions, your pricing, your story. I can show you what a premium listing built the way you'd design it actually looks like. It might change how you see this.",
      },
      {
        title: "We've never discounted",
        prospect: "Every delivery platform pushes you to discount. We haven't discounted in 12 years.",
        wrong: "Promotions are optional — you don't have to run them if you don't want to.",
        right: "Let me be direct: zero promotions required, ever. You go live at full price with no promotional badge. Full-price listings perform well when the restaurant has strong reviews and quality presentation. Your 12-year no-discount history is a selling point on the listing, not a constraint.",
      },
    ],
  },
  {
    id: 'empathy',
    name: 'Empathy + Discovery',
    icon: '🤝',
    tagline: "The fastest path through resistance is through it",
    desc: "When someone has been hurt before, pause the pitch entirely. Acknowledge the specific experience, ask what actually happened, and let their answer shape your response.",
    example: '"Which platform was it? I want to understand exactly what went wrong — not give you a recycled pitch. Tell me what happened."',
    unlockedAfter: 3,
    what: "Empathy + Discovery means pausing the pitch entirely when a prospect shows signs of past hurt, frustration, or deep skepticism. You acknowledge the specific experience first, then ask open-ended questions to understand the real objection before attempting any response. It's the antidote to the 'yes, but' cycle where every objection gets countered and trust erodes further.",
    psychology: "When people feel heard, their defenses lower. When they feel pitched at, their defenses raise. A prospect who has been burned before is on guard for the moment you start spinning their experience. Genuine curiosity — not strategic empathy deployed as a technique — is what gets through. If you're asking to understand rather than to counter, they know the difference. And that difference is everything.",
    when: "Use when the prospect has shared a negative past experience, expresses frustration or disengagement, or uses dismissive language ('you're all the same,' 'I've heard this before'). The cue is any past-tense complaint. The correct response is always: acknowledge first, question second, respond only after you understand what actually happened.",
    mistakes: "Don't use empathy as a technique with an obvious goal. 'I hear you — now here's why that doesn't apply to us' is the exact wrong move. It signals that you were only pretending to listen. Genuine discovery means being willing to hear something that changes your pitch entirely, or even reveals this isn't the right fit right now. That willingness is what makes the empathy real.",
    examples: [
      {
        title: "I've heard bad things",
        prospect: "I've heard horror stories from other restaurant owners about platforms like yours.",
        wrong: "I understand your concern — let me walk you through why those situations don't happen with Uber Eats.",
        right: "Tell me what you've heard specifically. I want to know the actual stories, not the general concern — because some of those situations were our fault, and some weren't, and my answer is completely different depending on what actually happened.",
      },
      {
        title: "You're all the same",
        prospect: "Every delivery company says the same things. You're all just trying to take our money.",
        wrong: "I understand why you feel that way, but we're genuinely different because of our support structure and—",
        right: "What would it take for a delivery company to not sound the same to you? I'm genuinely asking — because if there's nothing that would change that, I don't want to waste your time. But if there's something specific you'd need to hear or see that would feel different, tell me what it is.",
      },
    ],
  },
  {
    id: 'hyperlocal-data',
    name: 'Hyperlocal Data',
    icon: '📍',
    tagline: "Your neighborhood is the only stat that matters",
    desc: "Replace national averages with data specific to their zip code, cuisine type, and price tier. Your neighborhood's numbers are evidence; the platform average is just marketing.",
    example: '"Let me pull your zip code specifically. Japanese restaurants at your price point in your delivery radius — I can show you actual order volume, not platform averages."',
    unlockedAfter: 4,
    what: "Hyperlocal Data means replacing national statistics with data specific to the prospect's zip code, street, cuisine type, and price tier. Instead of 'restaurants on our platform earn more,' you say 'the average restaurant of your type in your zip code generates X per month at your price tier.' Specificity makes the stat real — it transforms a claim into a verifiable fact about their specific situation.",
    psychology: "People trust data that feels personal to their situation. A national average is marketing — everyone knows averages are manipulated. A neighborhood comparison is evidence. When you show someone a number that reflects their specific context — their cuisine type, their competitive set, their delivery radius — they feel like you've done homework rather than rehearsed a pitch. Specificity signals effort, and effort signals respect.",
    when: "Use with analytically-minded owners — anyone who pushes back on stats with 'that's a platform average.' Also use when local data is favorable: if their neighborhood is underserved by their cuisine type, a market gap argument built from local data is one of the strongest closes. And use it to challenge assumptions — 'I'm not sure delivery works in our area' is often falsified by the local data.",
    mistakes: "Never fabricate hyperlocal data. If you don't have data for their specific market, say so explicitly and offer to get it — 'I'll pull the data for your zip code and send it to you today.' A data-savvy owner will ask follow-up questions you can't answer if you've made something up, and that destroys everything.",
    examples: [
      {
        title: "I don't trust platform statistics",
        prospect: "I've seen delivery platform stats before — they're cherry-picked.",
        wrong: "Our data comes from verified restaurant partner reports — it's accurate.",
        right: "You're right to be skeptical of platform-wide stats. Let me pull your zip code specifically. Japanese restaurants at your price point in your delivery radius — I can show you the actual order volume, not the platform average. Want me to run it right now?",
      },
      {
        title: "The market isn't there for us",
        prospect: "Our neighborhood isn't the kind of area where delivery works. It's very local.",
        wrong: "Delivery has expanded to all types of neighborhoods — the demand is there.",
        right: "Let me check before we assume. Give me your cross streets and I'll pull the active delivery order data for your cuisine category in your radius. If demand is thin, I'll tell you. But the assumption that local neighborhoods don't order is wrong more often than it's right — the data usually surprises people.",
      },
    ],
  },
  {
    id: 'honest-close',
    name: 'The Honest Close',
    icon: '🪞',
    tagline: "Trust is built by saying what they don't expect to hear",
    desc: "Voluntarily acknowledge a real limitation, risk, or uncertainty. When you tell a prospect something that works against your pitch, every other thing you say becomes more credible.",
    example: '"I\'d rather run the actual numbers and tell you honestly if this doesn\'t work for your margins than push you into something that costs you money."',
    unlockedAfter: 4,
    what: "The Honest Close means acknowledging genuine limitations, risks, or uncertainties rather than spinning them. When you tell a prospect 'I'm not sure this is right for your situation' or 'here's what delivery genuinely can't do,' you differentiate yourself from every other rep they've met. The truth, said voluntarily, is the most persuasive thing you can say — because no one expects it.",
    psychology: "People are conditioned to distrust salespeople because they expect everything to be spun. When a rep voluntarily says 'I'm not sure this is right for you' or 'let's run the math and see honestly,' it disarms the skepticism reflex entirely. This is called credibility transfer: by undermining your own pitch slightly, you make everything else you say vastly more believable. The acknowledgment of one limitation makes all your strengths feel real.",
    when: "Use when you can see the deal may genuinely not be right — very thin margins, severe capacity constraints, brand concerns that are real and valid. Use also when trust has broken down in the conversation — the Honest Close can reset a relationship faster than any argument. The signal is when you feel yourself reaching for a spin on something that's actually a real concern.",
    mistakes: "Don't use false honesty as a technique — saying 'I'm not sure this is right for you' when you're privately certain it is will read as manipulation. The Honest Close is only powerful when it's genuine. And don't over-do it — acknowledging every limitation becomes self-sabotage. Use it selectively for the moments where the concern is real and serious.",
    examples: [
      {
        title: "We tried delivery and lost money",
        prospect: "We tried delivery for three months. Revenue went up but net profit went down.",
        wrong: "Early months are an investment — profitability typically stabilizes after the initial period.",
        right: "That's the most important data point in this conversation and I take it seriously. There are three things that typically cause that: packaging costs not built into delivery pricing, added labor that wasn't planned, or the platform fee not covered by the menu price. Tell me which one — or all three — and I'll tell you honestly whether there's a structural fix or if the math genuinely doesn't work for your model.",
      },
      {
        title: "You'll raise your fees eventually",
        prospect: "I just don't trust these companies. You'll change your fees and leave us holding the bag.",
        wrong: "Our fee structure has been stable for years — we're a long-term partner.",
        right: "That's a fair concern and I won't promise it won't happen — I don't control that. What I can show you is the contract terms and the fee history. And I'd rather you make this decision with real information than on my assurance. Would it help to talk to a restaurant that's been on the platform for three years?",
      },
    ],
  },
  {
    id: 'timing-bridge',
    name: 'Timing Bridge',
    icon: '🗓️',
    tagline: "Turn 'not now' into 'let's plan for when'",
    desc: "Convert a timing-based rejection into a scheduled future conversation by asking what needs to be true first — then holding that door open with a specific date.",
    example: '"What needs to settle before this is the right conversation? I want to call when it\'s actually useful, not just on a calendar."',
    unlockedAfter: 4,
    what: "The Timing Bridge converts a timing-based rejection into a scheduled future conversation with momentum. When the prospect says 'not right now,' most reps either push harder or accept defeat. The Timing Bridge does neither — it asks what needs to change for the timing to be right, connects that to a specific date, and leaves the relationship intact and warm. The mental status shifts from 'no' to 'not yet.'",
    psychology: "Timing objections are often genuine — not evasions. Pushing through them creates resentment and a closed door. Accepting them passively creates forgettable encounters that fall off the radar. The Timing Bridge shows you respect the current constraint while keeping momentum. The specific future date changes the nature of the relationship: you're not a rejected vendor, you're a scheduled next step. That's a completely different feeling for both parties.",
    when: "Use any time the objection is time-based: 'we're renovating,' 'we just hired someone,' 'we're planning an expansion,' 'I'm not ready yet,' 'check back next quarter.' The key skill is converting the vague future into a specific, agreed follow-up with a clear trigger condition — not just a calendar date.",
    mistakes: "Don't accept a vague 'check back in a few months' without a specific date and a specific trigger condition. And don't schedule a follow-up without understanding what needs to change — 'what would need to be true in Q2 for this to make sense?' is more powerful than 'I'll call you in March.' Without a trigger condition, you're just deferring a no.",
    examples: [
      {
        title: "Ask me next quarter",
        prospect: "This isn't the right time. We're dealing with a lot of changes right now.",
        wrong: "I understand — I'll follow up in a few months.",
        right: "That's fair. Can I ask — what needs to settle before this becomes the right conversation? I want to follow up when it's actually useful. If it's the staffing situation, I'll call you in April. If it's the renovation, let me know when that wraps and I'll time it to your reopening.",
      },
      {
        title: "We just opened",
        prospect: "We just opened 8 weeks ago. We're still figuring out our operations.",
        wrong: "Delivery is actually great for new restaurants — it helps build your customer base early.",
        right: "Eight weeks in is usually not the right moment — you're right. Most new restaurants that do well on delivery wait until service is running smoothly, around month 3 or 4. I'd rather come back when you're ready than add stress now. Should I check in at the 3-month mark — and what's the one thing you'd want to have figured out before that conversation?",
      },
    ],
  },
];

// ─── GAME STATE ──────────────────────────────────────────────────────────────

const state = {
  xp: 0,
  streak: 0,
  gauntletComplete: false,
  districtProgress: {}, // 'locked' | 'unlocked' | 'complete'
  activeDistrictId: null,
  activeScenarioIndex: 0,
  scenarioResults: [],
  activeScenarioIds: [],
  timerInterval: null,
  timeLeft: 60,
  answered: false,
  isDaily: false,
  dailyCompleted: false,
  leaderboard: [],
};

// ─── PERSISTENCE ─────────────────────────────────────────────────────────────

function saveState() {
  const toSave = {
    xp: state.xp,
    streak: state.streak,
    districtProgress: state.districtProgress,
    dailyCompleted: state.dailyCompleted,
    dailyDate: new Date().toDateString(),
    leaderboard: state.leaderboard,
    gauntletComplete: state.gauntletComplete,
  };
  localStorage.setItem('ue_academy_v3', JSON.stringify(toSave));
}

function loadState() {
  const raw = localStorage.getItem('ue_academy_v3');
  if (!raw) return;
  try {
    const saved = JSON.parse(raw);
    state.xp = saved.xp || 0;
    state.streak = saved.streak || 0;
    state.leaderboard = saved.leaderboard || [];
    state.gauntletComplete = saved.gauntletComplete || false;
    // Reset daily if it's a new day
    state.dailyCompleted = saved.dailyDate === new Date().toDateString()
      ? (saved.dailyCompleted || false)
      : false;
    // Merge district progress
    if (saved.districtProgress) {
      Object.assign(state.districtProgress, saved.districtProgress);
    }
  } catch (e) { /* ignore corrupt save */ }
}

// ─── LEVEL SYSTEM ────────────────────────────────────────────────────────────

function getLevelIndex(xp) {
  let idx = 0;
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (xp >= LEVELS[i].threshold) { idx = i; break; }
  }
  return idx;
}

function getLevelProgress(xp) {
  const idx = getLevelIndex(xp);
  const level = LEVELS[idx];
  const next = LEVELS[idx + 1];
  if (!next) return 100;
  const range = next.threshold - level.threshold;
  const earned = xp - level.threshold;
  return Math.min(100, (earned / range) * 100);
}

function updateXPBar(newXP, animate = true) {
  const oldLevel = getLevelIndex(state.xp);
  state.xp = newXP;
  const newLevel = getLevelIndex(state.xp);
  const progress = getLevelProgress(state.xp);

  const fill = document.getElementById('xp-fill');
  const fillGlow = document.getElementById('xp-fill-glow');
  const label = document.getElementById('xp-label');
  const levelTag = document.getElementById('xp-level-tag');

  if (animate) {
    fill.style.width = progress + '%';
    fillGlow.style.width = progress + '%';
  } else {
    fill.style.transition = 'none';
    fill.style.width = progress + '%';
    fillGlow.style.width = progress + '%';
    setTimeout(() => { fill.style.transition = ''; fillGlow.style.transition = ''; }, 50);
  }

  const lvl = LEVELS[newLevel];
  const nextLvl = LEVELS[newLevel + 1];
  label.textContent = nextLvl
    ? `${state.xp} / ${nextLvl.threshold} XP`
    : `${state.xp} XP — MAX`;
  levelTag.textContent = lvl.emoji + ' ' + lvl.name;

  if (newLevel > oldLevel && animate) {
    showLevelUpToast(lvl);
    document.getElementById('xp-fill').classList.add('xp-levelup');
    setTimeout(() => document.getElementById('xp-fill').classList.remove('xp-levelup'), 600);
  }
}

function showLevelUpToast(level) {
  showToast(`${level.emoji} Level up: ${level.name}!`, 'green');
}

// ─── TABS ─────────────────────────────────────────────────────────────────────

function switchTab(name) {
  document.querySelectorAll('.tab-pane').forEach(p => p.classList.add('hidden'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + name).classList.remove('hidden');
  document.querySelector(`[data-tab="${name}"]`).classList.add('active');
  if (name === 'playbook') renderPlaybook();
  if (name === 'leaderboard') renderLeaderboard();
  if (name === 'map') renderMap();
  if (name !== 'train') clearDistrictTheme();
}

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function applyDistrictTheme(districtId, color) {
  const theme = DISTRICT_THEMES[districtId];
  const bg = theme
    ? theme.bg
    : `linear-gradient(180deg, ${hexToRgba(color, 0.13)} 0%, #ffffff 70%)`;

  // Apply to body so the gradient fills every corner of the viewport
  document.body.style.background = bg;
  document.getElementById('tab-train').style.background = 'transparent';
  document.getElementById('main-header').style.borderBottom =
    `2px solid ${hexToRgba(color, 0.45)}`;

  // Create or reset the floater layer — fixed to body so it covers the full viewport
  let layer = document.getElementById('district-floater-layer');
  if (!layer) {
    layer = document.createElement('div');
    layer.id = 'district-floater-layer';
    document.body.appendChild(layer);
  }
  layer.innerHTML = '';

  startDistrictFloaters(districtId);
}

function clearDistrictTheme() {
  document.body.style.background = '';
  document.getElementById('tab-train').style.background = '';
  document.getElementById('main-header').style.borderBottom = '';
  stopDistrictFloaters();
  const layer = document.getElementById('district-floater-layer');
  if (layer) layer.innerHTML = '';
}

function spawnDistrictFloater(districtId, overrideLeft, initialProgress) {
  const layer = document.getElementById('district-floater-layer');
  const theme = DISTRICT_THEMES[districtId];
  if (!layer || !theme) return;

  const el = document.createElement('span');
  el.className = 'district-floater';
  el.textContent = theme.emojis[Math.floor(Math.random() * theme.emojis.length)];
  el.style.left = (overrideLeft !== undefined ? overrideLeft : Math.random() * 96) + '%';
  const dur = 22 + Math.random() * 14;
  el.style.setProperty('--float-dur', dur + 's');
  el.style.setProperty('--sway', ((Math.random() > 0.5 ? 1 : -1) * (25 + Math.random() * 45)) + 'px');
  el.style.fontSize = (1.6 + Math.random() * 1.4) + 'rem';

  if (initialProgress !== undefined) {
    // Negative delay = already mid-animation, visible on screen immediately
    el.style.animationDelay = '-' + (dur * initialProgress) + 's';
    setTimeout(() => el.remove(), dur * (1 - initialProgress) * 1000 + 500);
  } else {
    setTimeout(() => el.remove(), (dur + 1) * 1000);
  }

  layer.appendChild(el);
}

function startDistrictFloaters(districtId) {
  stopDistrictFloaters();
  // Seed 25 floaters already visible across the full screen
  for (let i = 0; i < 25; i++) {
    const left = (i / 25) * 94 + Math.random() * 4;
    const progress = 0.1 + Math.random() * 0.7; // 10–80% through their journey
    spawnDistrictFloater(districtId, left, progress);
  }
  // Trickle 2 new floaters every 2s to keep the screen full
  districtFloaterInterval = setInterval(() => {
    spawnDistrictFloater(districtId);
    setTimeout(() => spawnDistrictFloater(districtId), 800);
  }, 2000);
}

function stopDistrictFloaters() {
  if (districtFloaterInterval) {
    clearInterval(districtFloaterInterval);
    districtFloaterInterval = null;
  }
}

// ─── CITY MAP ─────────────────────────────────────────────────────────────────

function renderMap() {
  const container = document.getElementById('city-map-wrap');
  const nodesDiv = document.getElementById('map-nodes');
  const svg = document.getElementById('map-svg');

  const w = container.offsetWidth;
  const h = container.offsetHeight;

  nodesDiv.innerHTML = '';
  svg.innerHTML = '';

  const positions = MAP_POSITIONS.map(p => ({
    x: (p.x / 100) * w,
    y: (p.y / 100) * h,
  }));

  // Draw connecting path
  const svgNS = 'http://www.w3.org/2000/svg';

  for (let i = 0; i < positions.length - 1; i++) {
    const districtId = DISTRICTS[i].id;
    const status = state.districtProgress[districtId] || 'locked';
    const isDone = status === 'complete';

    const line = document.createElementNS(svgNS, 'line');
    line.setAttribute('x1', positions[i].x);
    line.setAttribute('y1', positions[i].y);
    line.setAttribute('x2', positions[i + 1].x);
    line.setAttribute('y2', positions[i + 1].y);
    line.setAttribute('stroke', isDone ? '#06C167' : '#e4e4e4');
    line.setAttribute('stroke-width', '4');
    line.setAttribute('stroke-dasharray', '8 6');
    line.setAttribute('stroke-linecap', 'round');
    svg.appendChild(line);
  }

  // Draw nodes
  DISTRICTS.forEach((district, i) => {
    const status = state.districtProgress[district.id] || 'locked';
    const pos = MAP_POSITIONS[i];

    const node = document.createElement('div');
    node.className = `district-node ${status}`;
    node.style.left = pos.x + '%';
    node.style.top = pos.y + '%';
    if (status === 'unlocked') node.classList.add('pulse-node');

    const emojiEl = document.createElement('span');
    emojiEl.className = 'node-emoji';
    emojiEl.textContent = district.emoji;

    const labelEl = document.createElement('span');
    labelEl.className = 'node-label';
    labelEl.textContent = district.name;

    node.appendChild(emojiEl);
    node.appendChild(labelEl);

    if (status === 'unlocked' || status === 'complete') {
      node.style.cursor = 'pointer';
      node.addEventListener('click', (e) => openDistrict(district.id, e));
    }

    nodesDiv.appendChild(node);
  });

  // Show gauntlet card when all districts are complete
  const gauntletCard = document.getElementById('gauntlet-map-card');
  if (gauntletCard) gauntletCard.classList.toggle('hidden', !checkAllDistrictsComplete());

  // Show World 3 card when gauntlet is complete
  const w3Card = document.getElementById('w3-map-card');
  if (w3Card) w3Card.classList.toggle('hidden', !state.gauntletComplete);
}

// ─── OPEN DISTRICT ────────────────────────────────────────────────────────────

function openDistrict(districtId, event) {
  const district = DISTRICTS.find(d => d.id === districtId);
  const persona = PERSONAS[district.personaId];

  state.activeDistrictId = districtId;
  state.isDaily = false;

  const isComplete = state.districtProgress[districtId] === 'complete';

  document.getElementById('intro-emoji').textContent = district.emoji;
  document.getElementById('intro-name').textContent = district.name;
  document.getElementById('intro-desc').textContent = district.description;
  document.getElementById('intro-avatar').textContent = persona.emoji;
  document.getElementById('intro-persona-name').textContent = persona.name;
  document.getElementById('intro-persona-restaurant').textContent = persona.restaurant;
  document.getElementById('btn-start-district').textContent =
    isComplete ? 'Replay District' : 'Start Training';

  const fromX = event ? event.clientX : window.innerWidth / 2;
  const fromY = event ? event.clientY : window.innerHeight / 2;

  playDistrictTransition(district.color, fromX, fromY, () => {
    showTrainScreen('screen-intro');
    switchTab('train');
    applyDistrictTheme(district.id, district.color);
    mascotSay(isComplete ? 'Back for another round? Let\'s go! 🔄' : 'Ready to pitch? Let\'s go! 💪');
  });
}

function playDistrictTransition(color, fromX, fromY, callback) {
  let ripple = document.getElementById('district-ripple');
  if (!ripple) {
    ripple = document.createElement('div');
    ripple.id = 'district-ripple';
    document.body.appendChild(ripple);
  }

  // Reset to tiny circle at click origin
  ripple.style.cssText = `
    position: fixed;
    left: ${fromX}px;
    top: ${fromY}px;
    width: 120px;
    height: 120px;
    margin-left: -60px;
    margin-top: -60px;
    border-radius: 50%;
    background: ${color};
    transform: scale(0);
    opacity: 0.92;
    z-index: 9998;
    pointer-events: none;
    transition: transform 0.55s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
  `;

  // Force reflow so the reset takes effect before we animate
  ripple.getBoundingClientRect();

  // Expand to cover the whole screen
  ripple.style.transform = 'scale(35)';

  // Once covered: switch content, then fade the ripple out
  setTimeout(() => {
    callback();
    ripple.style.transition = 'opacity 0.45s ease';
    ripple.style.opacity = '0';
    // Clean up after fade
    setTimeout(() => { ripple.style.transform = 'scale(0)'; ripple.style.opacity = '0.92'; }, 500);
  }, 520);
}

function openDailyChallenge() {
  if (state.dailyCompleted) {
    showToast('Daily challenge already done — come back tomorrow!');
    return;
  }
  // Pick today's district based on day-of-year
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  const districtIdx = dayOfYear % DISTRICTS.length;
  const district = DISTRICTS[districtIdx];

  // Make sure it's accessible
  state.districtProgress[district.id] = state.districtProgress[district.id] || 'unlocked';
  state.isDaily = true;
  openDistrict(district.id);
  showToast('⚡ Daily Challenge — 2× XP active!', 'green');
}

// ─── TRAIN FLOW ───────────────────────────────────────────────────────────────

function showTrainScreen(id) {
  ['screen-intro', 'screen-question', 'screen-complete'].forEach(s => {
    document.getElementById(s).classList.add('hidden');
  });
  document.getElementById(id).classList.remove('hidden');
}

function startDistrict() {
  state.activeScenarioIndex = 0;
  state.scenarioResults = [];
  state.answered = false;
  const district = DISTRICTS.find(d => d.id === state.activeDistrictId);
  const pool = district.scenarioPool || district.scenarioIds;
  state.activeScenarioIds = shuffleArray([...pool]).slice(0, 5);
  showTrainScreen('screen-question');
  loadQuestion();
  mascotSay('Show me what you got! 🎯');
}

function loadQuestion() {
  const district = DISTRICTS.find(d => d.id === state.activeDistrictId);
  const persona = PERSONAS[district.personaId];
  const scenarioId = state.activeScenarioIds[state.activeScenarioIndex];
  const scenario = SCENARIOS[scenarioId];

  // Update top bar
  document.getElementById('scenario-counter').textContent =
    `${state.activeScenarioIndex + 1} / ${state.activeScenarioIds.length}`;

  // Persona card
  const avatarEl = document.getElementById('p-avatar');
  avatarEl.textContent = persona.emoji;
  avatarEl.style.background = persona.bg;
  document.getElementById('p-name').textContent = persona.name;
  document.getElementById('p-restaurant').textContent = persona.restaurant;
  document.getElementById('p-backstory').textContent = persona.backstory;

  // Objection (type-in effect)
  const objEl = document.getElementById('objection-text');
  objEl.textContent = '';
  typeText(objEl, scenario.objection);

  // Response options (shuffled)
  const grid = document.getElementById('response-grid');
  grid.innerHTML = '';
  const shuffled = shuffleArray([...scenario.responses]);

  shuffled.forEach((resp, i) => {
    const btn = document.createElement('button');
    btn.className = 'response-opt';
    btn.textContent = resp.text;
    btn.style.animationDelay = `${i * 80}ms`;
    btn.classList.add('slide-up');
    btn._resp = resp;
    btn.addEventListener('click', () => handleAnswer(resp, btn, grid));
    grid.appendChild(btn);
  });

  // Timer
  startTimer();
  state.answered = false;
  hideCoachPanel();
}

function handleAnswer(resp, btn, grid) {
  if (state.answered) return;
  state.answered = true;
  stopTimer();

  const timeUsed = 60 - state.timeLeft;
  const speedBonus = timeUsed <= 10 ? 15 : timeUsed <= 20 ? 8 : 0;
  const dailyMult = state.isDaily ? 2 : 1;

  // Mark all buttons
  Array.from(grid.children).forEach(b => {
    b.disabled = true;
    if (b !== btn) {
      if (!resp.correct && b._resp && b._resp.correct) {
        b.classList.add('correct'); // reveal the right answer
      } else {
        b.classList.add('dimmed');
      }
    }
  });

  if (resp.correct) {
    btn.classList.add('correct');
    state.streak++;
    const mult = getMultiplier(state.streak);
    const xpEarned = Math.round((10 + speedBonus) * mult * dailyMult);
    state.scenarioResults.push({ correct: true, xp: xpEarned, time: timeUsed });
    updateXPBar(state.xp + xpEarned);
    updateStreakUI();

    // Animations
    mascotReact('happy', resp.correct ? "That's the one! 🎉" : "");
    spawnCoins(btn, 6);
    if (speedBonus > 0) showToast(`⚡ Speed Bonus +${speedBonus} pts!`);
    if (state.streak >= 3) showToast(`🔥 ${state.streak} streak — ${mult}× multiplier!`);

    showCoachPanel(resp.feedback, resp.technique, true, xpEarned, speedBonus, mult);
  } else {
    btn.classList.add('wrong');
    state.streak = 0;
    state.scenarioResults.push({ correct: false, xp: 0, time: timeUsed });
    updateStreakUI();

    // Shake
    const qScreen = document.getElementById('screen-question');
    qScreen.classList.add('shake');
    setTimeout(() => qScreen.classList.remove('shake'), 450);

    mascotReact('sad', "Hmm, not quite... 🤔");
    showCoachPanel(resp.feedback, resp.technique, false, 0, 0, 1);
  }

  saveState();
}

function getMultiplier(streak) {
  if (streak >= 6) return 4;
  if (streak >= 4) return 3;
  if (streak >= 2) return 2;
  return 1;
}

// ─── COACH PANEL ─────────────────────────────────────────────────────────────

function showCoachPanel(feedback, technique, correct, xpEarned, speedBonus, mult) {
  const panel = document.getElementById('coach-panel');
  const badge = document.getElementById('technique-badge');
  const text = document.getElementById('coach-text');
  const nextBtn = document.getElementById('btn-next-q');

  badge.textContent = technique || '—';
  badge.className = 'technique-badge' + (correct ? ' correct-badge' : '');

  let feedbackHtml = feedback;
  if (correct) {
    feedbackHtml += `<br><br><strong>You earned: +${xpEarned} XP</strong>`;
    if (speedBonus > 0) feedbackHtml += ` (including ⚡ ${speedBonus}pt speed bonus)`;
    if (mult > 1) feedbackHtml += ` (🔥 ${mult}× streak multiplier)`;
  }
  text.innerHTML = feedbackHtml;

  nextBtn.textContent = state.activeScenarioIndex < state.activeScenarioIds.length - 1 ? 'Next Scenario →' : 'Finish District →';
  panel.classList.add('visible');
}

function hideCoachPanel() {
  document.getElementById('coach-panel').classList.remove('visible');
}

function nextQuestion() {
  hideCoachPanel();
  state.activeScenarioIndex++;

  if (state.activeScenarioIndex >= state.activeScenarioIds.length) {
    finishDistrict();
  } else {
    loadQuestion();
  }
}

// ─── FINISH DISTRICT ─────────────────────────────────────────────────────────

function finishDistrict() {
  stopTimer();
  const district = DISTRICTS.find(d => d.id === state.activeDistrictId);
  const correct = state.scenarioResults.filter(r => r.correct).length;
  const total = state.scenarioResults.length;
  const totalXP = state.scenarioResults.reduce((s, r) => s + r.xp, 0);
  const accuracy = Math.round((correct / total) * 100);

  // Mark complete
  state.districtProgress[state.activeDistrictId] = 'complete';

  // Unlock next district
  const idx = DISTRICTS.findIndex(d => d.id === state.activeDistrictId);
  if (idx < DISTRICTS.length - 1) {
    const nextId = DISTRICTS[idx + 1].id;
    if (state.districtProgress[nextId] !== 'complete') {
      state.districtProgress[nextId] = 'unlocked';
    }
  }

  // Unlock playbook card
  if (district.playbookUnlock) {
    const card = PLAYBOOK_CARDS.find(c => c.id === district.playbookUnlock);
    if (card) showToast(`📖 Playbook unlocked: ${card.name}!`, 'green');
  }

  // Daily challenge done
  if (state.isDaily) state.dailyCompleted = true;

  // Record to leaderboard
  recordRun(district, totalXP, accuracy);
  saveState();

  // Show complete screen
  document.getElementById('complete-emoji').textContent = district.emoji;
  const stars = correct === total ? '⭐⭐⭐' : correct >= 3 ? '⭐⭐' : '⭐';
  document.getElementById('stars-row').textContent = stars;
  document.getElementById('complete-summary').textContent =
    `${correct}/${total} correct · ${accuracy}% accuracy`;
  document.getElementById('xp-award-badge').textContent = `+${totalXP} XP`;

  showTrainScreen('screen-complete');
  hideCoachPanel();

  // Confetti!
  setTimeout(() => startConfetti(3500), 200);
  mascotReact('happy', 'District complete! 🏆');
}

// ─── TIMER ───────────────────────────────────────────────────────────────────

function startTimer() {
  state.timeLeft = 60;
  updateTimerUI();
  state.timerInterval = setInterval(() => {
    state.timeLeft--;
    updateTimerUI();
    if (state.timeLeft <= 0) {
      stopTimer();
      timeExpired();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(state.timerInterval);
}

function updateTimerUI() {
  const fill = document.getElementById('q-timer-fill');
  const num = document.getElementById('q-timer-num');
  const pct = (state.timeLeft / 60) * 100;
  fill.style.width = pct + '%';
  num.textContent = state.timeLeft;
  const urgent = state.timeLeft <= 15;
  fill.classList.toggle('urgent', urgent);
  num.classList.toggle('urgent', urgent);
}

function timeExpired() {
  if (state.answered) return;
  state.answered = true;
  state.streak = 0;
  state.scenarioResults.push({ correct: false, xp: 0, time: 30 });
  updateStreakUI();

  const grid = document.getElementById('response-grid');
  Array.from(grid.children).forEach(b => { b.disabled = true; b.classList.add('dimmed'); });

  const qScreen = document.getElementById('screen-question');
  qScreen.classList.add('shake');
  setTimeout(() => qScreen.classList.remove('shake'), 450);

  mascotReact('sad', "Time\'s up! ⏰");
  showCoachPanel("You ran out of time. Remember: in a real sales call, silence is deadly — even a good-enough response beats no response.", '—', false, 0, 0, 1);
  saveState();
}

// ─── MASCOT ──────────────────────────────────────────────────────────────────

function mascotReact(type, message) {
  const mascot = document.getElementById('mascot');
  const bubble = document.getElementById('mascot-bubble');

  mascot.classList.remove('happy', 'sad');
  void mascot.offsetWidth; // force reflow
  mascot.classList.add(type === 'happy' ? 'happy' : 'sad');
  mascot.textContent = type === 'happy' ? '🤩' : '😬';

  setTimeout(() => { mascot.textContent = '🧑‍💼'; }, 1500);

  if (message) {
    bubble.textContent = message;
    bubble.classList.remove('hidden');
    setTimeout(() => bubble.classList.add('hidden'), 2500);
  }
}

function mascotSay(message) {
  const bubble = document.getElementById('mascot-bubble');
  bubble.textContent = message;
  bubble.classList.remove('hidden');
  setTimeout(() => bubble.classList.add('hidden'), 2500);
}

// ─── STREAK UI ───────────────────────────────────────────────────────────────

function updateStreakUI() {
  const chip = document.getElementById('streak-chip');
  const count = document.getElementById('streak-count');
  count.textContent = state.streak;
  chip.classList.add('pulse');
  setTimeout(() => chip.classList.remove('pulse'), 600);
}

// ─── COIN ANIMATION ──────────────────────────────────────────────────────────

function spawnCoins(sourceEl, count = 5) {
  const src = sourceEl.getBoundingClientRect();
  const target = document.getElementById('xp-label').getBoundingClientRect();

  const srcX = src.left + src.width / 2;
  const srcY = src.top + src.height / 2;
  const tgtX = target.left + target.width / 2;
  const tgtY = target.top + target.height / 2;

  const container = document.getElementById('coin-container');

  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const coin = document.createElement('span');
      coin.className = 'coin';
      coin.textContent = '🪙';

      const spread = 20;
      const startX = srcX + (Math.random() - 0.5) * spread;
      const startY = srcY + (Math.random() - 0.5) * spread;

      coin.style.left = startX + 'px';
      coin.style.top  = startY + 'px';
      coin.style.setProperty('--dx', (tgtX - startX) + 'px');
      coin.style.setProperty('--dy', (tgtY - startY) + 'px');

      container.appendChild(coin);
      coin.addEventListener('animationend', () => coin.remove());
    }, i * 90);
  }
}

// ─── CONFETTI ─────────────────────────────────────────────────────────────────

function startConfetti(duration = 3500) {
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ['#06C167', '#000000', '#FFD700', '#FF6B6B', '#4ECDC4', '#ffffff', '#a78bfa'];
  const particles = [];

  for (let i = 0; i < 220; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height * 0.3 - canvas.height * 0.1,
      vx: (Math.random() - 0.5) * 5,
      vy: Math.random() * 4 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      w: Math.random() * 10 + 5,
      h: Math.random() * 5 + 3,
      rot: Math.random() * 360,
      rotV: (Math.random() - 0.5) * 8,
      gravity: 0.1 + Math.random() * 0.08,
    });
  }

  const start = Date.now();
  let rafId;

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const elapsed = Date.now() - start;
    const fade = elapsed > duration - 600 ? 1 - (elapsed - (duration - 600)) / 600 : 1;

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.rot += p.rotV;
      if (p.y > canvas.height + 20) {
        p.y = -20;
        p.x = Math.random() * canvas.width;
        p.vy = Math.random() * 3 + 1;
      }
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rot * Math.PI) / 180);
      ctx.globalAlpha = fade;
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });

    if (Date.now() - start < duration) {
      rafId = requestAnimationFrame(draw);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(rafId);
    }
  }

  rafId = requestAnimationFrame(draw);
}

// ─── PLAYBOOK ─────────────────────────────────────────────────────────────────

function getUnlockedDistrictCount() {
  return DISTRICTS.filter(d => state.districtProgress[d.id] === 'complete').length;
}

function renderPlaybook() {
  const grid = document.getElementById('playbook-grid');
  const completed = getUnlockedDistrictCount();
  grid.innerHTML = '';

  PLAYBOOK_CARDS.forEach(card => {
    const unlocked = card.unlockedAfter < 0 || completed > card.unlockedAfter;
    const div = document.createElement('div');
    div.className = 'playbook-card' + (unlocked ? '' : ' locked');

    div.innerHTML = `
      <span class="playbook-icon">${card.icon}</span>
      <div class="playbook-technique">${card.id.replace(/-/g, ' ').toUpperCase()}</div>
      <div class="playbook-name">${card.name}</div>
      <p class="playbook-desc">${card.tagline || card.desc}</p>
      ${unlocked ? '<div class="playbook-tap-hint">Tap to learn more →</div>' : ''}
      ${!unlocked ? `<div class="lock-overlay"><span class="lock-icon">🔒</span>Complete district ${card.unlockedAfter + 1} to unlock</div>` : ''}
    `;

    if (unlocked) {
      div.addEventListener('click', () => openPlaybookModal(card));
    }

    grid.appendChild(div);
  });
}

function openPlaybookModal(card) {
  document.getElementById('pb-modal-icon').textContent = card.icon;
  document.getElementById('pb-modal-tag').textContent = card.id.replace(/-/g, ' ').toUpperCase();
  document.getElementById('pb-modal-name').textContent = card.name;
  document.getElementById('pb-modal-tagline').textContent = card.tagline || '';

  const examplesHtml = (card.examples || []).map(ex => `
    <div class="pb-example-card">
      <div class="pb-example-title">${ex.title}</div>
      <div class="pb-example-prospect">👤 ${ex.prospect}</div>
      <div class="pb-example-wrong">❌ ${ex.wrong}</div>
      <div class="pb-example-right">✅ ${ex.right}</div>
    </div>
  `).join('');

  document.getElementById('pb-modal-body').innerHTML = `
    <div class="pb-section">
      <div class="pb-section-label">What it is</div>
      <p>${card.what || card.desc}</p>
    </div>
    <div class="pb-psychology-box">
      <div class="pb-section-label">🧠 Psychology — how people feel</div>
      <p>${card.psychology || ''}</p>
    </div>
    <div class="pb-when-box">
      <div class="pb-section-label">⏱ When to use it</div>
      <p>${card.when || ''}</p>
    </div>
    <div class="pb-mistakes-box">
      <div class="pb-section-label">⚠️ Common mistakes</div>
      <p>${card.mistakes || ''}</p>
    </div>
    ${examplesHtml ? `<div class="pb-section-label pb-examples-label">💬 Conversation examples</div>${examplesHtml}` : ''}
  `;

  document.getElementById('pb-modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePlaybookModal() {
  document.getElementById('pb-modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ─── LEADERBOARD ─────────────────────────────────────────────────────────────

function recordRun(district, xpEarned, accuracy) {
  state.leaderboard.push({
    districtName: district.name,
    emoji: district.emoji,
    xp: xpEarned,
    accuracy,
    date: new Date().toLocaleDateString(),
  });
  state.leaderboard.sort((a, b) => b.xp - a.xp);
  state.leaderboard = state.leaderboard.slice(0, 10);
}

function renderLeaderboard() {
  const list = document.getElementById('lb-list');
  const summary = document.getElementById('lb-summary');

  if (state.leaderboard.length === 0) {
    list.innerHTML = '<div class="lb-empty">Complete a district to see your scores here.</div>';
    summary.innerHTML = '';
    return;
  }

  const bestXP = Math.max(...state.leaderboard.map(r => r.xp));
  const avgAcc = Math.round(state.leaderboard.reduce((s, r) => s + r.accuracy, 0) / state.leaderboard.length);

  summary.innerHTML = `
    <div class="lb-stat-card"><div class="lb-stat-val">${state.xp}</div><div class="lb-stat-label">Total XP</div></div>
    <div class="lb-stat-card"><div class="lb-stat-val">${bestXP}</div><div class="lb-stat-label">Best Run</div></div>
    <div class="lb-stat-card"><div class="lb-stat-val">${avgAcc}%</div><div class="lb-stat-label">Avg Accuracy</div></div>
  `;

  const medals = ['🥇', '🥈', '🥉'];
  const rankClasses = ['gold', 'silver', 'bronze'];
  list.innerHTML = state.leaderboard.map((r, i) => `
    <div class="lb-row slide-up" style="animation-delay:${i * 50}ms">
      <div class="lb-rank ${rankClasses[i] || ''}">${medals[i] || i + 1}</div>
      <div class="lb-district">${r.emoji}</div>
      <div class="lb-info">
        <div class="lb-score">${r.districtName}</div>
        <div class="lb-meta">${r.accuracy}% accuracy · ${r.date}</div>
      </div>
      <div class="lb-xp">+${r.xp} XP</div>
    </div>
  `).join('');
}

// ─── DAILY CHALLENGE TIMER ────────────────────────────────────────────────────

function startDailyTimer() {
  function update() {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);
    const diff = midnight - now;
    const h = String(Math.floor(diff / 3600000)).padStart(2, '0');
    const m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
    const s = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
    document.getElementById('daily-timer').textContent = `${h}:${m}:${s}`;
  }
  update();
  setInterval(update, 1000);
}

// ─── UTILITIES ────────────────────────────────────────────────────────────────

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function typeText(el, text, speed = 22) {
  let i = 0;
  el.textContent = '';
  const t = setInterval(() => {
    el.textContent += text[i++];
    if (i >= text.length) clearInterval(t);
  }, speed);
}

function showToast(msg, type = '') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast' + (type ? ' ' + type : '');
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 2800);
}

// ─── GAUNTLET ─────────────────────────────────────────────────────────────────

function checkAllDistrictsComplete() {
  return DISTRICTS.every(d => state.districtProgress[d.id] === 'complete');
}

function openGauntlet() {
  document.getElementById('gauntlet-overlay').classList.remove('hidden');
  showGauntletScreen('gauntlet-intro');
}

function closeGauntlet() {
  stopGauntletTimer();
  document.getElementById('gauntlet-overlay').classList.add('hidden');
  switchTab('map');
}

function showGauntletScreen(id) {
  ['gauntlet-intro', 'gauntlet-game', 'gauntlet-complete'].forEach(s => {
    document.getElementById(s).classList.add('hidden');
  });
  document.getElementById(id).classList.remove('hidden');
}

function startGauntlet() {
  gauntlet.round = 0;
  gauntlet.correct = 0;
  gauntlet.wrong = 0;
  gauntlet.streak = 0;
  gauntlet.bestStreak = 0;
  showGauntletScreen('gauntlet-game');
  loadGauntletRound();
}

function loadGauntletRound() {
  const roundData = GAUNTLET_ROUNDS[gauntlet.round];
  gauntlet.selectedObjIdx = null;
  gauntlet.matched = new Set();

  // Shuffle techniques independently so they don't align visually with objections
  gauntlet.shuffledTechs = shuffleArray(roundData.map(p => p.technique));

  document.getElementById('g-round-label').textContent = `Round ${gauntlet.round + 1} / ${GAUNTLET_ROUNDS.length}`;
  document.getElementById('g-streak').textContent = `🔥 ${gauntlet.streak}`;
  document.getElementById('g-feedback').textContent = '';

  renderGauntletCards(roundData);
  startGauntletTimer();
}

function renderGauntletCards(roundData) {
  const objCol  = document.getElementById('g-objections');
  const techCol = document.getElementById('g-techniques');
  objCol.innerHTML  = '';
  techCol.innerHTML = '';

  roundData.forEach((pair, i) => {
    const card = document.createElement('div');
    card.className = 'g-obj-card';
    card.style.animationDelay = (i * 0.07) + 's';
    card.textContent = pair.objection;
    card.addEventListener('click', () => handleGauntletObjTap(i));
    objCol.appendChild(card);
  });

  gauntlet.shuffledTechs.forEach((tech, i) => {
    const card = document.createElement('div');
    card.className = 'g-tech-card';
    card.style.animationDelay = (i * 0.07) + 's';
    card.textContent = tech;
    card.addEventListener('click', () => handleGauntletTechTap(i));
    techCol.appendChild(card);
  });
}

function handleGauntletObjTap(idx) {
  if (gauntlet.matched.has(idx)) return;
  const objCards = document.querySelectorAll('.g-obj-card');
  objCards.forEach(c => c.classList.remove('selected'));
  if (gauntlet.selectedObjIdx === idx) { gauntlet.selectedObjIdx = null; return; }
  gauntlet.selectedObjIdx = idx;
  objCards[idx].classList.add('selected');
  document.getElementById('g-feedback').textContent = 'Now tap the matching technique →';
}

function handleGauntletTechTap(idx) {
  if (gauntlet.selectedObjIdx === null) {
    document.getElementById('g-feedback').textContent = 'Pick an objection on the left first ←';
    return;
  }
  const roundData  = GAUNTLET_ROUNDS[gauntlet.round];
  const correct    = roundData[gauntlet.selectedObjIdx].technique;
  const tapped     = gauntlet.shuffledTechs[idx];
  const objCards   = document.querySelectorAll('.g-obj-card');
  const techCards  = document.querySelectorAll('.g-tech-card');

  if (tapped === correct) {
    gauntlet.matched.add(gauntlet.selectedObjIdx);
    gauntlet.correct++;
    gauntlet.streak++;
    gauntlet.bestStreak = Math.max(gauntlet.bestStreak, gauntlet.streak);

    objCards[gauntlet.selectedObjIdx].classList.remove('selected');
    objCards[gauntlet.selectedObjIdx].classList.add('matched');
    techCards[idx].classList.add('matched');
    document.getElementById('g-streak').textContent = `🔥 ${gauntlet.streak}`;
    document.getElementById('g-feedback').textContent = `✓ ${tapped}`;
    gauntlet.selectedObjIdx = null;

    if (gauntlet.matched.size === roundData.length) {
      setTimeout(advanceGauntletRound, 800);
    }
  } else {
    gauntlet.wrong++;
    gauntlet.streak = 0;
    document.getElementById('g-streak').textContent = '🔥 0';
    objCards[gauntlet.selectedObjIdx].classList.add('wrong');
    techCards[idx].classList.add('wrong');
    document.getElementById('g-feedback').textContent = '✗ Not quite — think about the core concern';
    const prevIdx = gauntlet.selectedObjIdx;
    gauntlet.selectedObjIdx = null;
    setTimeout(() => {
      objCards[prevIdx]?.classList.remove('wrong', 'selected');
      techCards[idx].classList.remove('wrong');
    }, 550);
  }
}

function advanceGauntletRound() {
  stopGauntletTimer();
  gauntlet.round++;
  if (gauntlet.round >= GAUNTLET_ROUNDS.length) {
    completeGauntlet();
  } else {
    document.getElementById('g-feedback').textContent = `⚡ Round ${gauntlet.round} done — keep going!`;
    setTimeout(loadGauntletRound, 900);
  }
}

function startGauntletTimer() {
  stopGauntletTimer();
  gauntlet.timeLeft = 45;
  updateGauntletTimer();
  gauntlet.timer = setInterval(() => {
    gauntlet.timeLeft--;
    updateGauntletTimer();
    if (gauntlet.timeLeft <= 0) {
      gauntlet.wrong += (GAUNTLET_ROUNDS[gauntlet.round].length - gauntlet.matched.size);
      gauntlet.streak = 0;
      advanceGauntletRound();
    }
  }, 1000);
}

function stopGauntletTimer() {
  if (gauntlet.timer) { clearInterval(gauntlet.timer); gauntlet.timer = null; }
}

function updateGauntletTimer() {
  const pct = (gauntlet.timeLeft / 45) * 100;
  const fill = document.getElementById('g-timer-fill');
  fill.style.width = pct + '%';
  fill.classList.toggle('urgent', gauntlet.timeLeft <= 10);
  document.getElementById('g-timer-num').textContent = gauntlet.timeLeft;
}

function completeGauntlet() {
  stopGauntletTimer();
  const total    = gauntlet.correct + gauntlet.wrong;
  const accuracy = total > 0 ? Math.round((gauntlet.correct / total) * 100) : 100;
  const xpEarned = 300 + (gauntlet.correct * 20) + (gauntlet.bestStreak * 15);

  document.getElementById('g-complete-sub').textContent =
    accuracy >= 85 ? 'Flawless technique — you read every situation perfectly.' :
    accuracy >= 65 ? 'Strong performance. A few more reps and you\'ll be unstoppable.' :
    'You faced the Gauntlet. Train the districts and come back stronger.';

  document.getElementById('g-results').innerHTML = `
    <div class="gauntlet-result-item"><strong>${gauntlet.correct}</strong><span>Correct</span></div>
    <div class="gauntlet-result-item"><strong>${accuracy}%</strong><span>Accuracy</span></div>
    <div class="gauntlet-result-item"><strong>${gauntlet.bestStreak}</strong><span>Best Streak</span></div>
  `;
  document.getElementById('g-xp-badge').textContent = `+${xpEarned} XP`;

  showGauntletScreen('gauntlet-complete');
  state.gauntletComplete = true;
  updateXPBar(state.xp + xpEarned);
  saveState();
  startConfetti(4000);
}

// ─── WORLD 3: OBJECTION DASH ──────────────────────────────────────────────────

const race = {
  round: 0,
  lives: 3,
  score: 0,
  streak: 0,
  bestStreak: 0,
  correct: 0,
  wrong: 0,
  carX: 50,         // % from left (center of car)
  podSpeed: 20,     // % of road height per second
  roadSpeed: 0.55,  // CSS animation seconds (lower = faster visual)
  keys:  { left: false, right: false },
  touch: { left: false, right: false },
  pods: [],
  animFrame: null,
  lastTs: 0,
  running: false,
  roundActive: false,
  stunUntil: 0,
  scenarios: [],
};

// Collision box dimensions (% of road)
const R_CAR_W  = 9;   // car half-width each side
const R_POD_W  = 30;  // pod width %
const R_POD_H  = 16;  // pod height % (approximate)
const R_CAR_BOT = 88; // car bottom edge %
const R_CAR_TOP = 76; // car top edge %

function buildRaceScenarios() {
  return shuffleArray(Object.values(SCENARIOS).map(s => {
    const wrongs = s.responses.filter(r => !r.correct);
    return {
      objection: s.objection,
      correct:   s.responses.find(r => r.correct).text,
      wrongs: [
        wrongs[0]?.text || 'Not the right approach here.',
        wrongs[1]?.text || wrongs[0]?.text || 'Try a different angle.',
      ],
    };
  }));
}

function truncatePod(t, n = 52) {
  return t.length > n ? t.slice(0, n).trimEnd() + '…' : t;
}

function openWorld3() {
  document.getElementById('world3-overlay').classList.remove('hidden');
  showW3Screen('w3-intro');
}

function closeWorld3() {
  race.running = false;
  if (race.animFrame) { cancelAnimationFrame(race.animFrame); race.animFrame = null; }
  const layer = document.getElementById('w3-pod-layer');
  if (layer) layer.innerHTML = '';
  document.getElementById('world3-overlay').classList.add('hidden');
  switchTab('map');
}

function showW3Screen(id) {
  ['w3-intro', 'w3-game', 'w3-complete'].forEach(s =>
    document.getElementById(s).classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

function startRace() {
  Object.assign(race, {
    round: 0, lives: 3, score: 0, streak: 0,
    bestStreak: 0, correct: 0, wrong: 0,
    carX: 50, podSpeed: 20, roadSpeed: 0.55,
    running: true, roundActive: false, stunUntil: 0, pods: [],
  });
  race.scenarios = buildRaceScenarios();
  document.getElementById('w3-pod-layer').innerHTML = '';
  document.getElementById('w3-road').style.setProperty('--road-spd', race.roadSpeed + 's');
  updateW3CarPos();
  updateW3HUD();
  showW3Screen('w3-game');
  document.getElementById('w3-objection').textContent = 'Get ready…';
  race.lastTs = performance.now();
  race.animFrame = requestAnimationFrame(raceLoop);
  setTimeout(startW3Round, 1200);
}

function startW3Round() {
  if (!race.running) return;
  if (race.round >= 15) { endRace(); return; }
  const s = race.scenarios[race.round % race.scenarios.length];
  document.getElementById('w3-objection').textContent = `"${s.objection}"`;
  document.getElementById('w3-pod-layer').innerHTML = '';
  race.pods = [];
  // 3 pods at random lane centres
  const xs = shuffleArray([17, 50, 83]);
  shuffleArray([
    { text: truncatePod(s.correct),    correct: true  },
    { text: truncatePod(s.wrongs[0]),  correct: false },
    { text: truncatePod(s.wrongs[1]),  correct: false },
  ]).forEach((item, i) => spawnW3Pod(item.text, item.correct, xs[i]));
  race.roundActive = true;
}

function spawnW3Pod(text, isCorrect, xPct) {
  const el = document.createElement('div');
  el.className = 'w3-pod';
  el.textContent = text;
  document.getElementById('w3-pod-layer').appendChild(el);
  const pod = { el, x: xPct, y: -18, correct: isCorrect, done: false };
  race.pods.push(pod);
  setW3PodPos(pod);
}

function setW3PodPos(pod) {
  pod.el.style.left = (pod.x - R_POD_W / 2) + '%';
  pod.el.style.top  = pod.y + '%';
}

function updateW3CarPos() {
  const car = document.getElementById('w3-car');
  if (car) car.style.left = race.carX + '%';
}

function raceLoop(ts) {
  if (!race.running) return;
  const dt = Math.min((ts - race.lastTs) / 1000, 0.05);
  race.lastTs = ts;

  // Smooth car movement (hold left/right)
  if (ts >= race.stunUntil) {
    const spd = 80;
    if (race.keys.left  || race.touch.left)  race.carX = Math.max(R_CAR_W, race.carX - spd * dt);
    if (race.keys.right || race.touch.right) race.carX = Math.min(100 - R_CAR_W, race.carX + spd * dt);
    updateW3CarPos();
  }

  // Move pods + collision
  if (race.roundActive) {
    let correctHandled = false;
    race.pods.forEach(pod => {
      if (pod.done) return;
      pod.y += race.podSpeed * dt;
      setW3PodPos(pod);

      // AABB collision
      const overlap =
        (race.carX - R_CAR_W) < (pod.x + R_POD_W / 2) &&
        (race.carX + R_CAR_W) > (pod.x - R_POD_W / 2) &&
        R_CAR_TOP < (pod.y + R_POD_H) &&
        R_CAR_BOT > pod.y;

      if (overlap) {
        pod.done = true;
        if (pod.correct) {
          correctHandled = true;
          collectW3Pod(pod);
        } else {
          hitW3WrongPod(pod);
        }
      }

      // Pod escaped off bottom
      if (!pod.done && pod.y > 100) {
        pod.done = true;
        pod.el.style.opacity = '0';
        setTimeout(() => pod.el.remove(), 300);
        if (pod.correct) correctHandled = true; // correct missed
      }
    });

    if (correctHandled) {
      race.roundActive = false;
      race.round++;
      updateW3HUD();
      const delay = 950;
      if (race.lives <= 0 || race.round >= 15) setTimeout(endRace, delay);
      else setTimeout(startW3Round, delay);
    }
  }

  race.animFrame = requestAnimationFrame(raceLoop);
}

function collectW3Pod(pod) {
  pod.el.classList.add('w3-pod-collected');
  race.correct++;
  race.streak++;
  race.bestStreak = Math.max(race.bestStreak, race.streak);
  const mult = Math.min(4, 1 + Math.floor(race.streak / 3));
  race.score += 100 * mult;
  if (race.correct % 3 === 0) {
    race.podSpeed  = Math.min(52, race.podSpeed + 5);
    race.roadSpeed = Math.max(0.22, race.roadSpeed - 0.05);
    document.getElementById('w3-road').style.setProperty('--road-spd', race.roadSpeed + 's');
  }
  const car = document.getElementById('w3-car');
  car.classList.add('boost');
  setTimeout(() => { car.classList.remove('boost'); pod.el.remove(); }, 450);
  updateW3HUD();
}

function hitW3WrongPod(pod) {
  pod.el.classList.add('w3-pod-wrong-hit');
  race.streak = 0;
  race.wrong++;
  race.lives = Math.max(0, race.lives - 1);
  race.score = Math.max(0, race.score - 50);
  race.stunUntil = performance.now() + 550;
  const car = document.getElementById('w3-car');
  car.classList.add('crash');
  setTimeout(() => car.classList.remove('crash'), 500);
  document.getElementById('w3-road').classList.add('w3-hit-flash');
  setTimeout(() => document.getElementById('w3-road').classList.remove('w3-hit-flash'), 380);
  setTimeout(() => pod.el.remove(), 420);
  updateW3HUD();
}

function updateW3HUD() {
  const total = 15;
  document.getElementById('w3-gate-label').textContent = `Round ${Math.min(race.round + 1, total)} / ${total}`;
  document.getElementById('w3-progress-fill').style.width = ((race.round / total) * 100) + '%';
  document.getElementById('w3-score').textContent = race.score;
  document.getElementById('w3-streak').textContent = `🔥 ${race.streak}`;
  document.getElementById('w3-lives').textContent =
    '❤️'.repeat(race.lives) + '🖤'.repeat(Math.max(0, 3 - race.lives));
}

function endRace() {
  race.running = false;
  if (race.animFrame) { cancelAnimationFrame(race.animFrame); race.animFrame = null; }
  const total    = race.correct + race.wrong;
  const accuracy = total > 0 ? Math.round((race.correct / total) * 100) : 100;
  const xpEarned = 250 + (race.correct * 18) + (race.bestStreak * 12);

  document.getElementById('w3-complete-sub').textContent =
    accuracy >= 90 ? 'Perfect driving — you read every objection at full speed.' :
    accuracy >= 70 ? 'Strong run. Keep your eyes on the road next time.' :
    'You finished the dash. Every round makes you sharper.';

  document.getElementById('w3-results').innerHTML = `
    <div class="gauntlet-result-item"><strong>${race.score}</strong><span>Score</span></div>
    <div class="gauntlet-result-item"><strong>${accuracy}%</strong><span>Accuracy</span></div>
    <div class="gauntlet-result-item"><strong>${race.bestStreak}</strong><span>Best Streak</span></div>
  `;
  document.getElementById('w3-xp-badge').textContent = `+${xpEarned} XP`;

  showW3Screen('w3-complete');
  updateXPBar(state.xp + xpEarned);
  saveState();
  startConfetti(3500);
}

// ─── INIT ─────────────────────────────────────────────────────────────────────

function init() {
  // Set initial district progress
  DISTRICTS.forEach(d => {
    state.districtProgress[d.id] = 'locked';
  });
  state.districtProgress[DISTRICTS[0].id] = 'unlocked';

  // Load saved state
  loadState();

  // Ensure first district is always unlocked
  if (state.districtProgress[DISTRICTS[0].id] === 'locked') {
    state.districtProgress[DISTRICTS[0].id] = 'unlocked';
  }

  // Render initial UI
  updateXPBar(state.xp, false);
  updateStreakUI();
  renderMap();
  startDailyTimer();

  // Wire tab nav
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  // Logo click → map tab
  document.querySelector('.hdr-left').addEventListener('click', () => switchTab('map'));
  document.querySelector('.hdr-left').style.cursor = 'pointer';

  // District start button
  document.getElementById('btn-start-district').addEventListener('click', startDistrict);

  // Coach panel next button
  document.getElementById('btn-next-q').addEventListener('click', nextQuestion);

  // Back to map button
  document.getElementById('btn-back-map').addEventListener('click', () => {
    hideCoachPanel();
    switchTab('map');
  });

  // Escape buttons — mid-game back to map
  document.getElementById('btn-escape-train').addEventListener('click', () => {
    stopTimer();
    hideCoachPanel();
    clearDistrictTheme();
    switchTab('map');
  });
  document.getElementById('btn-escape-gauntlet').addEventListener('click', () => {
    stopGauntletTimer();
    closeGauntlet();
  });
  document.getElementById('btn-escape-w3').addEventListener('click', () => {
    closeWorld3();
  });

  // Gauntlet buttons
  document.getElementById('btn-open-gauntlet').addEventListener('click', openGauntlet);
  document.getElementById('btn-start-gauntlet').addEventListener('click', startGauntlet);
  document.getElementById('btn-gauntlet-back').addEventListener('click', closeGauntlet);
  document.getElementById('btn-gauntlet-done').addEventListener('click', closeGauntlet);

  // World 3 buttons
  document.getElementById('btn-open-world3').addEventListener('click', openWorld3);
  document.getElementById('btn-start-race').addEventListener('click', startRace);
  document.getElementById('btn-w3-back').addEventListener('click', closeWorld3);
  document.getElementById('btn-w3-done').addEventListener('click', closeWorld3);

  document.getElementById('pb-modal-close').addEventListener('click', closePlaybookModal);
  document.getElementById('pb-modal-overlay').addEventListener('click', e => {
    if (e.target === document.getElementById('pb-modal-overlay')) closePlaybookModal();
  });

  // Hold-to-steer buttons (pointer events for hold detection)
  const w3BtnLeft  = document.getElementById('w3-btn-left');
  const w3BtnRight = document.getElementById('w3-btn-right');
  ['pointerdown','touchstart'].forEach(ev => {
    w3BtnLeft.addEventListener(ev,  e => { e.preventDefault(); race.touch.left  = true;  w3BtnLeft.classList.add('held');    }, { passive: false });
    w3BtnRight.addEventListener(ev, e => { e.preventDefault(); race.touch.right = true;  w3BtnRight.classList.add('held');   }, { passive: false });
  });
  ['pointerup','pointerleave','touchend','touchcancel'].forEach(ev => {
    w3BtnLeft.addEventListener(ev,  () => { race.touch.left  = false; w3BtnLeft.classList.remove('held');  });
    w3BtnRight.addEventListener(ev, () => { race.touch.right = false; w3BtnRight.classList.remove('held'); });
  });

  // Touch-drag on road to steer (finger follows car)
  document.getElementById('w3-road').addEventListener('touchmove', e => {
    e.preventDefault();
    if (!race.running) return;
    const touch = e.touches[0];
    const rect  = document.getElementById('w3-road').getBoundingClientRect();
    const x = ((touch.clientX - rect.left) / rect.width) * 100;
    race.carX = Math.max(R_CAR_W, Math.min(100 - R_CAR_W, x));
  }, { passive: false });

  // Keyboard hold steering (Arrow / WASD)
  document.addEventListener('keydown', e => {
    if (document.getElementById('world3-overlay').classList.contains('hidden')) return;
    if (e.key === 'ArrowLeft'  || e.key === 'a' || e.key === 'A') race.keys.left  = true;
    if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') race.keys.right = true;
  });
  document.addEventListener('keyup', e => {
    if (e.key === 'ArrowLeft'  || e.key === 'a' || e.key === 'A') race.keys.left  = false;
    if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') race.keys.right = false;
  });

  // Daily challenge button
  document.getElementById('btn-daily').addEventListener('click', openDailyChallenge);

  // Update daily button state
  if (state.dailyCompleted) {
    document.getElementById('btn-daily').textContent = '✓ Done';
    document.getElementById('btn-daily').disabled = true;
    document.getElementById('daily-card-sub').textContent = 'Completed today — see you tomorrow!';
  }
}

document.addEventListener('DOMContentLoaded', init);
