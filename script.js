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
    description: 'The Opener. Cold walk-ins, phone intros, getting past gatekeepers, building instant credibility in the first 30 seconds. Your job: earn the conversation.',
    personaId: 'marco',
    scenarioIds: ['s01', 's02', 's03'],
    scenarioPool: ['s01','s02','s03','it01','it02','it03','it04','it05','it06','it07','it08','it09','it10','it11','it12','it13','it14','it15','it16','it17','it18','it19','it20','it21','it22','it23','it24','it25','it26','it27','it28','it29','it30','it31','it32','it33','it34','it35','it36','it37','it38','it39','it40'],
    playbookUnlock: 'reframing',
  },
  {
    id: 'chinese',
    name: 'Chinatown',
    emoji: '🥢',
    color: '#f4a261',
    description: 'Objection Handling. Overcome "we use DoorDash", "fees are too high", "we tried delivery before", "we have our own drivers". Flip resistance into reason.',
    personaId: 'chen',
    scenarioIds: ['s04', 's05', 's06'],
    scenarioPool: ['s04','s05','s06','ch01','ch02','ch03','ch04','ch05','ch06','ch07','ch08','ch09','ch10','ch11','ch12','ch13','ch14','ch15','ch16','ch17','ch18','ch19','ch20','ch21','ch22','ch23','ch24','ch25','ch26','ch27','ch28','ch29','ch30','ch31','ch32','ch33','ch34','ch35','ch36','ch37','ch38','ch39','ch40'],
    playbookUnlock: 'social-proof',
  },
  {
    id: 'mexican',
    name: 'Mercado District',
    emoji: '🌮',
    color: '#2a9d8f',
    description: 'The Pitch. Present revenue potential, show customer reach data, compare competitors honestly, share success stories, walk through the dashboard and tools.',
    personaId: 'rosa',
    scenarioIds: ['s07', 's08', 's09'],
    scenarioPool: ['s07','s08','s09','mx01','mx02','mx03','mx04','mx05','mx06','mx07','mx08','mx09','mx10','mx11','mx12','mx13','mx14','mx15','mx16','mx17','mx18','mx19','mx20','mx21','mx22','mx23','mx24','mx25','mx26','mx27','mx28','mx29','mx30','mx31','mx32','mx33','mx34','mx35','mx36','mx37','mx38','mx39','mx40'],
    playbookUnlock: 'roi-demo',
  },
  {
    id: 'japanese',
    name: 'Sakura Quarter',
    emoji: '🍱',
    color: '#8338ec',
    description: 'The Close. Ask for the sale, handle "let me think about it", create genuine urgency, get the contract signed, define next steps after a yes.',
    personaId: 'yuki',
    scenarioIds: ['s10', 's11', 's12'],
    scenarioPool: ['s10','s11','s12','jp01','jp02','jp03','jp04','jp05','jp06','jp07','jp08','jp09','jp10','jp11','jp12','jp13','jp14','jp15','jp16','jp17','jp18','jp19','jp20','jp21','jp22','jp23','jp24','jp25','jp26','jp27','jp28','jp29','jp30','jp31','jp32','jp33','jp34','jp35','jp36','jp37','jp38','jp39','jp40'],
    playbookUnlock: 'risk-reversal',
  },
  {
    id: 'health',
    name: 'The Green Mile',
    emoji: '🥗',
    color: '#06C167',
    description: 'The Follow Up. Re-engage cold leads, call back after no response, turn a maybe into a yes, manage accounts post-launch, and build long-term relationships.',
    personaId: 'alex',
    scenarioIds: ['s13', 's14', 's15'],
    scenarioPool: ['s13','s14','s15','hl01','hl02','hl03','hl04','hl05','hl06','hl07','hl08','hl09','hl10','hl11','hl12','hl13','hl14','hl15','hl16','hl17','hl18','hl19','hl20','hl21','hl22','hl23','hl24','hl25','hl26','hl27','hl28','hl29','hl30','hl31','hl32','hl33','hl34','hl35','hl36','hl37','hl38','hl39','hl40'],
    playbookUnlock: 'empathy',
  },
];

const PERSONAS = {
  marco: {
    name: 'Marco Rossi',
    emoji: '👨‍🍳',
    restaurant: "Rossi's Trattoria",
    backstory: "Third-generation family restaurant owner. Proud, skeptical, and protective of his time. Gets approached by vendors constantly.",
    bg: '#ffeedd',
  },
  chen: {
    name: 'Chen Wei',
    emoji: '🧑‍💼',
    restaurant: 'Golden Dragon Kitchen',
    backstory: "High-volume operator who's heard every objection answer before. Respects directness and hates being given the runaround.",
    bg: '#fff8e6',
  },
  rosa: {
    name: 'Rosa Gutierrez',
    emoji: '👩‍🍳',
    restaurant: 'La Cocina de Rosa',
    backstory: 'Community institution with thin margins. Wants data, not promises. If the numbers work, she signs. If they don\'t, no amount of charm will change that.',
    bg: '#e6fff8',
  },
  yuki: {
    name: 'Yuki Tanaka',
    emoji: '🧑‍🍱',
    restaurant: 'Sakura Omakase',
    backstory: 'Deliberate, precise decision-maker. Almost convinced but still has questions. The close is right there — if you handle it right.',
    bg: '#f0e6ff',
  },
  alex: {
    name: 'Alex Rivera',
    emoji: '🧑‍🌾',
    restaurant: 'Wholesome Bowl',
    backstory: "Past prospect, existing partner, or cold lead being re-engaged. Busy, sometimes unresponsive, but worth the effort. Plays the long game.",
    bg: '#e6faf2',
  },
};

const SCENARIOS = {

  // ── BASE: LITTLE ITALY (The Opener) ──────────────────────────────────────
  s01: {
    objection: "I'm in the middle of lunch service. You have 30 seconds.",
    responses: [
      { text: "I'll use them well. I'm with Uber Eats. A pizzeria two blocks from here added $3,000 in monthly delivery revenue last year. Can I get 15 minutes at your convenience — not now?", correct: true, technique: '30-Second Hook',
        feedback: "You used the window wisely: company, one local proof point, and a specific ask for a real meeting later. You didn't try to close in 30 seconds — you earned the right to a real conversation." },
      { text: "I promise this will only take two minutes — it could really help your business.", correct: false,
        feedback: "Promising 'two minutes' while they're in a rush shows you're not listening. Respect the window and ask for a better time." },
      { text: "I'll just wait over here until you have a free moment.", correct: false,
        feedback: "Waiting uninvited in a busy restaurant creates pressure and gets you resented, not welcomed." },
      { text: "This is actually perfect timing — I wanted to talk about something that affects your lunch rush.", correct: false,
        feedback: "Insisting it's 'perfect timing' after they said they're busy dismisses their concern from the first sentence." },
    ],
  },
  s02: {
    objection: "We're not taking meetings with vendors. Leave your card at the front.",
    responses: [
      { text: "Of course — here's my card. I'll also email a one-pager showing what two restaurants nearby are earning on the platform. Most owners find it useful even if they're not ready to talk. Is email okay?", correct: true, technique: 'Value-Add Exit',
        feedback: "You accepted the brush-off gracefully but turned it into a warm follow-up. Asking for their email shifts a one-way card drop into an active next step." },
      { text: "I'd feel better leaving my card if I could get yours too — so I can follow up.", correct: false,
        feedback: "Asking for their card when they've dismissed you signals you're not respecting the brush-off." },
      { text: "To be honest, most people who say that never call. Could I call you instead?", correct: false,
        feedback: "Bluntly pointing out they won't call is confrontational and doesn't get you a real next step." },
      { text: "I totally understand. When would be a better time to connect?", correct: false,
        feedback: "Extending the conversation after a clear brush-off ignores their signal. Accept it gracefully and add value on the way out." },
    ],
  },
  s03: {
    objection: "Who let you in? We're not open yet and I'm in the middle of prep.",
    responses: [
      { text: "My apologies — the door was open and I assumed it was okay. I'll head out. I'm with Uber Eats and I'd love 10 minutes when you're ready. Before or after service this week?", correct: true, technique: 'Graceful Recovery',
        feedback: "You acknowledged the misstep without over-apologizing, then immediately proposed a respectful alternative. Starting with accountability keeps the relationship from beginning in a hole." },
      { text: "I just wanted to catch you before the rush — I'll only be a minute.", correct: false,
        feedback: "Justifying the intrusion when they've flagged it makes it worse." },
      { text: "I'm so sorry — I'll leave immediately.", correct: false,
        feedback: "Leaving without securing any next step means starting from zero next time. The graceful exit should include an offer to return at a proper time." },
      { text: "The front door was unlocked — I assumed it meant you were receiving visitors.", correct: false,
        feedback: "Defending yourself technically misses the point. Apologize, propose a better time, and exit professionally." },
    ],
  },

  // ── BASE: CHINATOWN (Objection Handling) ──────────────────────────────────
  s04: {
    objection: "We already use DoorDash and it works fine. Why would we add another platform?",
    responses: [
      { text: "Makes sense to stay with what works. Here's the case for adding us: Uber Eats reaches people who opened the Uber app for a ride — not just food. That's a structurally different customer pool. Most partners find the audiences barely overlap, so it's incremental revenue, not duplication.", correct: true, technique: 'Additive Framing',
        feedback: "You validated DoorDash and gave one specific, structural reason the audiences differ. The ride-network differentiator is concrete and credible." },
      { text: "More platforms means more revenue — there's no reason not to be everywhere.", correct: false,
        feedback: "More-is-better doesn't address the duplication concern. Show why the audiences are actually different." },
      { text: "DoorDash has been losing market share — diversifying now is smart.", correct: false,
        feedback: "Casting doubt on a platform that's working for them creates friction without solving their concern." },
      { text: "What's your monthly revenue from DoorDash? That helps me model the incremental upside.", correct: false,
        feedback: "Asking for their financials before showing why audiences differ puts you in the wrong order." },
    ],
  },
  s05: {
    objection: "Your commission fees are too high. That's the short answer.",
    responses: [
      { text: "The headline number hits hard — I hear that a lot. Here's the actual math: delivery runs through your existing fixed costs. The incremental cost of one more order is just food and labor for that order. Most partners find the real margin impact is 8–12%, not 30%. Want to run the numbers for your restaurant specifically?", correct: true, technique: 'Incremental Margin Logic',
        feedback: "You acknowledged the concern, then gave the specific lens that changes the calculation: incremental cost, not full P&L allocation. Offering to run it for them makes it concrete." },
      { text: "Our rates are competitive with the rest of the market.", correct: false,
        feedback: "Market comparison doesn't address their specific margin concern. Make the case for why the net impact is smaller than the headline rate." },
      { text: "We have some flexibility on rates for high-volume restaurants.", correct: false,
        feedback: "Jumping to discounts before making the value case signals the standard pricing isn't defensible." },
      { text: "What are your current food and labor cost percentages?", correct: false,
        feedback: "Good eventually, but give the incremental margin logic first before asking for their cost structure." },
    ],
  },
  s06: {
    objection: "We tried delivery apps before — orders were wrong, food arrived cold, no support. We're done.",
    responses: [
      { text: "That experience would make me hesitant too. Can I ask what went wrong specifically? Some issues — like order accuracy and support — are things we've built differently, and others might be the same. I'd rather know which one we're dealing with before I make any promises.", correct: true, technique: 'Honest Discovery',
        feedback: "You acknowledged the past experience as real, avoided platform-bashing, and asked the specific question that determines whether you have a genuine answer. This shows confidence and respect." },
      { text: "The industry has improved massively — the experience would be completely different now.", correct: false,
        feedback: "Vague improvement claims don't address what specifically failed for them." },
      { text: "That sounds like a different platform issue — Uber Eats operates very differently.", correct: false,
        feedback: "Competitor-bashing undermines credibility even when partly true. Discover the issue first." },
      { text: "I completely understand. If there were one thing that could change your mind, what would it be?", correct: false,
        feedback: "This hands all the power to them before you've shown you have anything different to offer." },
    ],
  },

  // ── BASE: MERCADO DISTRICT (The Pitch) ───────────────────────────────────
  s07: {
    objection: "Show me the numbers. How much would I actually make in the first month?",
    responses: [
      { text: "I'll give you two numbers from comparable restaurants in this area — not platform averages. A taqueria three blocks from here averaged $4,800 in their first month. A similar spot on the east side did $2,200 with a slower launch. The spread depends on listing quality and whether you run any promotions. Let me show you both profiles.", correct: true, technique: 'Hyperlocal Data',
        feedback: "You gave specific, local, comparable data rather than platform-wide averages. Naming nearby restaurants with real numbers is far more credible than any statistic from a pitch deck." },
      { text: "On average, new restaurants on our platform earn between $1,500 and $8,000 in their first month.", correct: false,
        feedback: "Wide ranges with no local context feel evasive. Give them specific nearby examples instead." },
      { text: "Revenue depends on a lot of factors — I can't make a specific prediction without knowing more about your setup.", correct: false,
        feedback: "Hedging completely when asked for numbers makes you look like you don't have any real data." },
      { text: "What does your current monthly revenue look like? That would help me estimate the incremental upside.", correct: false,
        feedback: "Asking for their revenue before giving them your best data flips the order. Lead with what you know, then ask." },
    ],
  },
  s08: {
    objection: "I need to understand exactly what I'm signing up for before I agree to anything.",
    responses: [
      { text: "That's exactly the right question to ask. Let me walk you through it in order: what goes live, what you control, what we handle, and what the fee structure looks like on an actual order. No fine print surprises — I'll show you the contract terms before we get anywhere near a signature.", correct: true, technique: 'Transparency Walk',
        feedback: "You validated their due diligence instinct and immediately offered a structured, complete walkthrough. Mentioning contract terms proactively removes the 'hidden catch' anxiety." },
      { text: "It's pretty straightforward — most restaurants are up and running within a week.", correct: false,
        feedback: "Simplifying before they've asked for simplification dismisses a legitimate due-diligence request." },
      { text: "What specifically are you most concerned about? I can address those points first.", correct: false,
        feedback: "Good instinct but premature — offer the full structured walkthrough first so they see you're not hiding anything." },
      { text: "I'll send you our restaurant partner guide — it covers everything in detail.", correct: false,
        feedback: "Sending a document when they asked for an explanation signals you're not ready to answer directly." },
    ],
  },
  s09: {
    objection: "How does Uber Eats actually compare to DoorDash? Give me an honest answer.",
    responses: [
      { text: "Honest answer: DoorDash has higher overall market share nationally. Where Uber Eats has an edge is the existing Uber user base — people who use Uber for rides are already in the app and see food. In dense urban areas that's a meaningful differentiator. For your neighborhood specifically, I can show you the delivery search volume comparison.", correct: true, technique: 'Competitive Honesty',
        feedback: "You gave a genuinely honest comparison — acknowledged DoorDash's national advantage — then offered the specific differentiator that matters in their context. Honesty about a competitor's strength is more credible than dismissing them." },
      { text: "We're the better platform for independent restaurants — our restaurant partner support is significantly stronger.", correct: false,
        feedback: "Self-serving claims without specifics or data don't constitute an honest comparison." },
      { text: "They're actually very similar — the main difference is the customer base size.", correct: false,
        feedback: "Glossing over the comparison when they asked for an honest answer comes across as evasive." },
      { text: "That depends on your restaurant type and neighborhood — I'd need more information to give a fair comparison.", correct: false,
        feedback: "Hedging completely doesn't satisfy a direct request for an honest comparison. Give your best answer, then add context." },
    ],
  },

  // ── BASE: SAKURA QUARTER (The Close) ─────────────────────────────────────
  s10: {
    objection: "Let me think about it and get back to you.",
    responses: [
      { text: "Of course. Before I go — is there a specific question or concern driving the 'let me think' response? If I can answer it now, it might save us both a few weeks of back-and-forth. But if you genuinely need time, I completely respect that.", correct: true, technique: 'Objection Discovery',
        feedback: "You agreed to the request while gently opening the door to find the real concern. Most 'let me think' responses hide a specific unanswered question — this creates space to find it without pressure." },
      { text: "Absolutely — take all the time you need. I'll be here.", correct: false,
        feedback: "Open-ended waiting rarely converts. Always probe for the underlying concern or secure a specific callback time." },
      { text: "Most people who say that don't end up calling back — is there something I can address right now?", correct: false,
        feedback: "Bluntly predicting they won't follow up is confrontational even if statistically accurate." },
      { text: "What would need to happen for you to feel confident saying yes?", correct: false,
        feedback: "This is a good question in the right context, but premature if there's an unaddressed concern you haven't identified yet." },
    ],
  },
  s11: {
    objection: "I want to run this by my accountant first before I commit.",
    responses: [
      { text: "Smart move. Can I send both you and your accountant the same one-page summary — the fee structure, payout schedule, and contract terms? That way they have the full picture and you're not translating from memory. Saves a round-trip.", correct: true, technique: 'Stakeholder Inclusion',
        feedback: "You validated the accountant's role and proposed a practical shortcut: shared materials that give the accountant exactly what they need to evaluate. This respects the process while accelerating it." },
      { text: "Of course — what's the accountant's timeline? I'd love to follow up after that conversation.", correct: false,
        feedback: "Passively waiting for the accountant conversation loses control of the timeline. Proactively offer to send materials." },
      { text: "I understand — when do you think you'll have a chance to talk to them?", correct: false,
        feedback: "Getting a timeline is useful but secondary to the offer to send materials directly to the accountant." },
      { text: "The financial terms are quite straightforward — your accountant will likely approve quickly.", correct: false,
        feedback: "Predicting what the accountant will think undermines their authority in the process." },
    ],
  },
  s12: {
    objection: "I'm not ready to sign anything today. I need more time.",
    responses: [
      { text: "No pressure at all — I'd rather you sign when you're confident than rush and regret it. Can I ask what's still unclear? Sometimes it's one specific thing I can answer right now that changes the timeline. If not, let's set a specific date to reconnect.", correct: true, technique: 'Pressure Release + Discovery',
        feedback: "You removed pressure explicitly, then used the breathing room to probe for the real blocker. Offering a specific reconnect date prevents the conversation from going cold indefinitely." },
      { text: "Of course — take the time you need. I'll check back in a few weeks.", correct: false,
        feedback: "Vague future follow-up with no specific date or probing for the concern lets momentum die." },
      { text: "Is there a specific part of the agreement that concerns you? I can address it now.", correct: false,
        feedback: "The instinct is right but the framing is slightly aggressive. Remove pressure first, then discover." },
      { text: "I just want to make sure you have everything you need to decide — what's missing?", correct: false,
        feedback: "Asking what's missing before removing pressure implies you think they have enough information to decide today." },
    ],
  },

  // ── BASE: THE GREEN MILE (The Follow Up) ──────────────────────────────────
  s13: {
    objection: "I told you I'd think about it. I'm still thinking. Please stop following up so often.",
    responses: [
      { text: "Fair point — I've been too persistent. I'll back off completely. Can I reach out once more in 30 days, and if it's still not the right time I'll respect that and close out your file?", correct: true, technique: 'Respectful Boundary',
        feedback: "You acknowledged the valid complaint, offered a concrete boundary (one more call in 30 days), and gave them a genuine exit if they want it. This paradoxically often re-engages people who feel respected." },
      { text: "I understand — I just don't want you to miss out on the opportunity.", correct: false,
        feedback: "Continuing to push after being told you're following up too much ignores their explicit request." },
      { text: "I'll pull back — just know the offer we discussed is still on the table.", correct: false,
        feedback: "Reminding them of the offer while 'pulling back' isn't actually pulling back. Respect the boundary fully." },
      { text: "What would need to change for the timing to be right?", correct: false,
        feedback: "Another discovery question after they asked you to stop following up confirms their concern." },
    ],
  },
  s14: {
    objection: "I completely forgot we spoke. What was this about again?",
    responses: [
      { text: "No worries at all. We talked about adding a delivery channel through Uber Eats — you were interested but wanted more time to think. I can resend the summary I shared, or if it's easier, give you the 90-second version right now.", correct: true, technique: 'Warm Re-entry',
        feedback: "You gave them context without making them feel bad for forgetting, restated their original interest to reactivate it, and offered two paths forward. Efficient and respectful." },
      { text: "We had a pretty detailed conversation about your revenue potential — I'm surprised you don't remember.", correct: false,
        feedback: "Making them feel bad for forgetting immediately creates defensiveness and kills the re-engagement." },
      { text: "I can resend all the materials from our last meeting. Would that help?", correct: false,
        feedback: "Sending materials without a quick context reset means they're reading cold. Give the 90-second recap first." },
      { text: "We discussed Uber Eats for your restaurant — do you have a few minutes now?", correct: false,
        feedback: "Jumping straight to 'do you have time now' before restoring context puts them in an awkward position." },
    ],
  },
  s15: {
    objection: "We've been on the platform for two months and honestly the results have been underwhelming.",
    responses: [
      { text: "I'm glad you told me — that's exactly what I want to know. Can we look at your dashboard together? I want to see your listing, your pricing, your photos, and what promotions you've run. Most underperformance I've seen at two months comes from one or two fixable things, and I'd rather find them than have you walk away thinking the platform doesn't work.", correct: true, technique: 'Account Rescue',
        feedback: "You turned a potential churn moment into a diagnostic conversation. Offering to audit the account together shows accountability and positions you as a partner, not just a vendor." },
      { text: "Two months can be a slow start — things usually pick up after the first quarter.", correct: false,
        feedback: "Passive reassurance with no action doesn't address why they're underperforming or show you care about fixing it." },
      { text: "What does 'underwhelming' mean to you specifically — order volume, revenue, or both?", correct: false,
        feedback: "Good discovery question but only after showing you're ready to take action, not just collect information." },
      { text: "I'll flag your account to our partner success team — they can reach out this week.", correct: false,
        feedback: "Delegating to another team when you can take direct ownership makes you look like you're passing the problem off." },
    ],
  },

  // ── LITTLE ITALY — THE OPENER ────────────────────────────────────────────
  it01: {
    objection: "I'm in the middle of lunch service right now. Come back some other time.",
    responses: [
      { text: "Completely understand — I'll be out of your way. I work with a few restaurants nearby and I think there's something worth a 5-minute conversation when you have a moment. What's a good time this week?", correct: true, technique: 'Timing Request',
        feedback: "You respected the constraint, didn't push, and secured a specific future step. Asking for a time when things are quiet keeps you in the door without creating resentment." },
      { text: "I promise this will only take two minutes — it could really help your business.", correct: false,
        feedback: "Promising 'two minutes' while still talking during a rush shows you're not actually listening." },
      { text: "I'll just wait over here until you have a free moment.", correct: false,
        feedback: "Waiting uninvited in a busy restaurant creates awkward pressure and gets you resented, not welcomed." },
      { text: "This is actually perfect timing — I wanted to talk about something that affects your lunch service.", correct: false,
        feedback: "Insisting it's 'perfect timing' when they just said they're busy dismisses their concern entirely." },
    ],
  },
  it02: {
    objection: "Who gave you this number? I never signed up for sales calls.",
    responses: [
      { text: "Fair question — I found your restaurant through your Google listing. I reach out to highly-rated restaurants in this area specifically. If the timing's not right I completely understand, but I did want to connect with you.", correct: true, technique: 'Transparency',
        feedback: "Owning how you got the number defuses the irritation. Being specific about 'highly-rated' gives a genuine reason for the outreach without sounding like a mass cold-call list." },
      { text: "I got it from a publicly available business directory — completely above board.", correct: false,
        feedback: "Defensive justification escalates irritation rather than defusing it. Acknowledge first, then explain." },
      { text: "I'd rather not say — but I promise this will be worth your time.", correct: false,
        feedback: "Refusing to say where you got the number destroys trust instantly." },
      { text: "That's a great question — can we start over? I'm David from Uber Eats.", correct: false,
        feedback: "Dodging the question then pivoting ignores their concern entirely. Answer it honestly before moving forward." },
    ],
  },
  it03: {
    objection: "We're not taking on any new vendor partnerships right now.",
    responses: [
      { text: "Got it — I won't push. I'm not really a vendor in the traditional sense — I help restaurants add a revenue channel. Is there a better time in the next few weeks I could check back in?", correct: true, technique: 'Reframe + Soft Exit',
        feedback: "Reframing away from 'vendor' removes the category rejection. A low-pressure ask for a future time keeps the door open without forcing anything now." },
      { text: "I understand — but I think this is different from most vendor relationships. Could I just share one thing?", correct: false,
        feedback: "Insisting you're 'different' immediately after they said no is the exact pattern every rejected vendor uses." },
      { text: "That's fair. Who makes those decisions? I'd love to get on their radar for when timing improves.", correct: false,
        feedback: "Asking to speak to someone else after being told no can come across as disrespectful of their authority." },
      { text: "Would it help if I emailed instead? Less pressure than a call.", correct: false,
        feedback: "Switching channels doesn't address the underlying objection — they said not now, regardless of channel." },
    ],
  },
  it04: {
    objection: "I've heard this pitch before from two other apps. You all sound the same.",
    responses: [
      { text: "You're right that the pitch sounds similar — every app leads with revenue potential. Here's what's actually different: Uber Eats reaches people who opened Uber for a ride, not just food. That's a different customer pool than any other app. Have you noticed most delivery orders currently come from people who already know you?", correct: true, technique: 'Pattern Interrupt + Discovery',
        feedback: "Acknowledging they're right before differentiating is disarming. The ride-network differentiator is specific and structural. Ending with a discovery question shifts from pitch to conversation." },
      { text: "I understand the fatigue — but we have the largest market share in your area.", correct: false,
        feedback: "Market share claims are exactly what every app leads with. This confirms you sound the same." },
      { text: "Let me prove we're different — do you have 15 minutes for a demo?", correct: false,
        feedback: "Asking for a 15-minute demo from someone who just said all pitches sound the same is an uphill battle." },
      { text: "What do you wish the other apps had done differently? I can tell you if we've solved that.", correct: false,
        feedback: "Good instinct, but this comes across as reactive positioning rather than confident differentiation." },
    ],
  },
  it05: {
    objection: "We've been in business 40 years without an app. We don't need technology to survive.",
    responses: [
      { text: "40 years — that's earned. I'm not suggesting you change how you run the restaurant. Delivery adds a separate channel that doesn't touch your dine-in at all. Your regulars keep coming in. You just also reach people who can't get to you.", correct: true, technique: 'Respect + Additive Frame',
        feedback: "Honoring the legacy before making your case immediately disarms defensiveness. Framing delivery as additive — not replacing — is the core insight that lands with legacy owners." },
      { text: "The world has changed — you need to be where customers are, and customers are online.", correct: false,
        feedback: "Telling a 40-year veteran the world has changed comes across as condescending." },
      { text: "Your competitors are probably already on Uber Eats — this is about staying competitive.", correct: false,
        feedback: "Leading with competitor pressure before establishing trust puts a pride-driven owner on the defensive." },
      { text: "Technology doesn't have to be complicated — our setup takes under a week.", correct: false,
        feedback: "Ease of setup doesn't address the 'don't need it' concern. Address why it adds value first." },
    ],
  },
  it06: {
    objection: "I already get enough customers. I'm full every night.",
    responses: [
      { text: "That's a great position to be in. Are you capturing revenue during slow afternoons, rainy Tuesdays, or from people two miles away who can't easily come in? Delivery serves demand that your dining room physically can't reach.", correct: true, technique: 'Untapped Demand Frame',
        feedback: "You validated their success and pointed to the specific gap delivery fills — time periods and geographic reach that a full dining room can't capture." },
      { text: "Success now doesn't guarantee success tomorrow — diversifying revenue streams is smart business.", correct: false,
        feedback: "Implying their current success is fragile without evidence comes across as condescending." },
      { text: "Full every night is impressive — but you're likely leaving money on the table without delivery.", correct: false,
        feedback: "Vague 'leaving money on the table' doesn't make the gap feel concrete or relevant to their situation." },
      { text: "What does a typical Monday look like compared to Saturday?", correct: false,
        feedback: "Good question, but only after you've framed why the gap between slow and busy periods represents an opportunity." },
    ],
  },
  it07: {
    objection: "I'm not the owner. You'd need to talk to my father and he doesn't do vendor meetings.",
    responses: [
      { text: "No problem — would you mind letting him know I stopped by? I'm with Uber Eats. I'll leave this one-pager that shows what two restaurants nearby are earning on our platform. Is there a way to reach him directly?", correct: true, technique: 'Gatekeeper Navigation',
        feedback: "You respected the authority structure, left something for the decision-maker, and asked for the direct contact — all without pressuring the manager or creating an awkward situation." },
      { text: "Are you authorized to make any preliminary decisions? Even just setting up a meeting?", correct: false,
        feedback: "Asking a manager if they have any authority is condescending and often causes them to close the door entirely." },
      { text: "I'll come back when your father is here — what time does he usually come in?", correct: false,
        feedback: "Getting a time to return is fine, but don't leave without also leaving materials and requesting a direct contact." },
      { text: "Can you pass along a message? Tell him we can add 15–20% to monthly revenue.", correct: false,
        feedback: "Specific revenue figures passed through a third party lose context and often come across as empty promises." },
    ],
  },
  it08: {
    objection: "My son handles all the tech stuff. I don't deal with apps.",
    responses: [
      { text: "Makes sense — and I'm happy to talk to him directly. I do want to mention one thing before I go: the revenue side of this is really a business decision, not a tech decision. Might be worth a 10-minute conversation with both of you when the timing works?", correct: true, technique: 'Stakeholder + Reframe',
        feedback: "You respected the division of responsibilities while elevating the conversation from 'tech thing' to 'business thing.' Asking for a joint meeting keeps you from being delegated away entirely." },
      { text: "Happy to talk to him — could you give me his contact info?", correct: false,
        feedback: "Jumping to the son without framing the business angle means you'll be triaged as a tech vendor, not a revenue partner." },
      { text: "I promise this isn't complicated — you don't need to understand the tech to make the decision.", correct: false,
        feedback: "Dismissing their delegation style as unnecessary can come across as dismissive of how they run things." },
      { text: "Even if your son handles setup, the commercial terms are your call. Can I walk you through those?", correct: false,
        feedback: "Reasonable, but leading with 'even if' implies you're overriding their preference. Offer the joint meeting first." },
    ],
  },
  it09: {
    objection: "How did you even get in here? We're not taking walk-ins.",
    responses: [
      { text: "My apologies — the door was open and I made a wrong assumption. I'll head out now. I'm with Uber Eats. Could I come back at a better time, or is there a way to reach you directly?", correct: true, technique: 'Graceful Recovery',
        feedback: "You acknowledged the mistake without over-apologizing, explained briefly who you are, and proposed a way forward. Starting with accountability is always the right call." },
      { text: "I just wanted to catch you at a quiet moment — I saw an opening and thought I'd take it.", correct: false,
        feedback: "Justifying an uninvited intrusion confirms they were right to be annoyed." },
      { text: "I'm so sorry — I'll leave a card and never bother you again.", correct: false,
        feedback: "Overcorrecting to 'never again' closes the door on future contact entirely." },
      { text: "I understand. Can I at least leave some information?", correct: false,
        feedback: "Asking to leave information while still standing in a place you shouldn't be extends the awkward situation." },
    ],
  },
  it10: {
    objection: "We're not interested in anything you're selling. Thanks.",
    responses: [
      { text: "Completely fair. Before I go — I'm with Uber Eats, not trying to sell you anything today. I only wanted to share what a couple of similar restaurants nearby are doing on the platform. If it's ever relevant, here's my card.", correct: true, technique: 'No-Pressure Exit',
        feedback: "You respected the hard no, removed the sales pressure explicitly, left a credibility hook (nearby restaurants), and gave them an out with a card. This is the right way to leave a door open without pushing." },
      { text: "I understand — but just hear me out for 30 seconds.", correct: false,
        feedback: "Pushing past a direct 'not interested' confirms everything they expected from a salesperson." },
      { text: "What would make you interested? I'd love to understand your hesitation.", correct: false,
        feedback: "Asking someone to explain their disinterest when they've already closed the conversation creates irritation, not insight." },
      { text: "That's fine — most restaurant owners say that at first. Can I follow up in a month?", correct: false,
        feedback: "Normalizing their rejection as a predictable pattern and immediately requesting follow-up shows you didn't hear the 'no.'" },
    ],
  },
  it11: {
    objection: "I've got investors coming in next week. Can't deal with this right now.",
    responses: [
      { text: "Perfect timing to note — investor conversations often include questions about growth channels. Being set up on Uber Eats can be a concrete data point in that story. No pressure to do anything now — I can follow up after the meeting.", correct: true, technique: 'Strategic Relevance',
        feedback: "You reframed the investor meeting from a barrier to a potential reason to act. It's not pushy — it's genuinely relevant information that might shift their thinking." },
      { text: "No problem — I'll call back after the meeting. Good luck with the investors!", correct: false,
        feedback: "Simply deferring misses the opportunity to plant a relevant insight before the meeting." },
      { text: "Investors actually love to see restaurants on delivery platforms — it signals growth mindset.", correct: false,
        feedback: "Overstating how much investors care about delivery platforms without knowing their investor type is speculative." },
      { text: "I understand. When would be a better time to connect?", correct: false,
        feedback: "Generic deferral misses the specific, relevant hook the investor meeting creates." },
    ],
  },
  it12: {
    objection: "I spoke to someone from your company six months ago and it went nowhere. Why would this be different?",
    responses: [
      { text: "Fair to ask. I don't know what happened in that conversation, but I'd rather not pretend it didn't. What fell apart? If the issue was on our side, I want to know — and if there's something I can address, I will.", correct: true, technique: 'Honest Re-entry',
        feedback: "Asking what went wrong instead of distancing yourself from the previous conversation shows accountability. It also gives you real information about what you need to overcome." },
      { text: "Our team and platform have both improved a lot in six months — I'm sure it would be different.", correct: false,
        feedback: "Vague improvement claims don't explain what was wrong before or what's actually changed." },
      { text: "That was a different rep — I can start fresh and give you a better experience.", correct: false,
        feedback: "Distancing yourself from a company colleague undermines trust even when it feels like a fresh start." },
      { text: "Let me pull up what we talked about and we can go from there.", correct: false,
        feedback: "Good instinct, but it needs to follow an acknowledgment first — not lead with it." },
    ],
  },
  it13: {
    objection: "I never respond well to cold calls. This isn't a great way to reach me.",
    responses: [
      { text: "I appreciate you saying that directly — most people feel the same way. I'll keep this short: I reached out because your restaurant has strong reviews and the fit tends to be real for places like yours. If you'd rather I email or text, I'm happy to do this however works best for you.", correct: true, technique: 'Empathy + Adaptive Outreach',
        feedback: "You honored their honesty, gave a genuine reason the outreach was targeted, and offered to switch channels. This shows respect for how they want to be reached." },
      { text: "I know — I don't love cold calls either. But I genuinely think this is worth it.", correct: false,
        feedback: "Sympathizing then pushing anyway rings hollow. Either change your approach or fully respect their preference." },
      { text: "Since we're already talking, can I at least share one thing quickly?", correct: false,
        feedback: "Continuing after they said they don't respond well to cold calls confirms their suspicion that you won't respect their preferences." },
      { text: "What would be the best way to start a conversation with you?", correct: false,
        feedback: "Good instinct but asking this while on a call they already don't like extends the awkward moment. Offer the alternatives yourself." },
    ],
  },
  it14: {
    objection: "What makes you think we'd be a good fit? You don't know our restaurant.",
    responses: [
      { text: "You're right — I don't know the details yet. What I do know: you're highly rated, you're in a dense neighborhood, and similar restaurants nearby have done well on our platform. I'd want to learn more before making any specific claims. Can I ask a few questions?", correct: true, technique: 'Honest Credibility',
        feedback: "Acknowledging the knowledge gap builds credibility. You gave concrete reasons you targeted them and pivoted to discovery — turning the challenge into an invitation to learn more." },
      { text: "I've done research on your restaurant — I know more than you might think.", correct: false,
        feedback: "Claiming in-depth knowledge without specifics sounds like a bluff and erodes trust." },
      { text: "Our platform works well for almost every restaurant type in your category.", correct: false,
        feedback: "Broad claims of universal fit don't answer their specific question about why you targeted them." },
      { text: "Great question — that's exactly why I'm here. To figure it out together.", correct: false,
        feedback: "This sounds polished but doesn't provide any reason you reached out. Give the specific signals that made you target them." },
    ],
  },
  it15: {
    objection: "We're in the middle of a kitchen renovation. This is the worst possible time.",
    responses: [
      { text: "Completely fair — I won't add to your plate right now. Can I reach back out in 6 weeks? I'll send you a short summary in the meantime so when the timing is better you're not starting from zero.", correct: true, technique: 'Timing Bridge',
        feedback: "Accepting the timing concern without argument is the right call. Setting a specific date and sending materials keeps you warm without pressure." },
      { text: "Delivery actually doesn't require additional space — it could work alongside the renovation.", correct: false,
        feedback: "Arguing against their stated operational reality comes across as dismissive. Honor the constraint first." },
      { text: "I understand — let me at least explain how easy the setup is so you can plan for later.", correct: false,
        feedback: "Continuing the pitch when they said the timing is wrong signals you didn't actually hear them." },
      { text: "When does the renovation finish? I'll put a reminder in my calendar.", correct: false,
        feedback: "Getting a date without also offering materials means you'll be starting cold when you call back." },
    ],
  },
  it16: {
    objection: "We're a tiny place — four tables. I figured delivery apps were for bigger restaurants.",
    responses: [
      { text: "Smaller restaurants often see a bigger proportional impact. You don't have the volume of a chain, so a few dozen extra delivery orders a week moves your revenue meaningfully. Some of our best-performing partners are exactly this size.", correct: true, technique: 'Underdog Framing',
        feedback: "You challenged the assumption with a logical argument — proportional impact — and supported it with a peer reference. Small operators often assume platforms are for chains; correcting that opens the door." },
      { text: "Size doesn't matter — our platform works for everyone.", correct: false,
        feedback: "Blanket statements don't address the specific concern. Make the case for small restaurants specifically." },
      { text: "You'd fit right in — we have lots of small restaurants.", correct: false,
        feedback: "'You're in good company' is reassurance, not a business case." },
      { text: "What's your weekly cover count? That would help me understand the potential.", correct: false,
        feedback: "Good to know eventually, but challenge the 'too small' assumption first before collecting data." },
    ],
  },
  it17: {
    objection: "I'm exhausted. We just had our busiest weekend ever. Can you call me Thursday?",
    responses: [
      { text: "Absolutely — I'll call Thursday afternoon. Congrats on the busy weekend. I'll send you something short before then so Thursday isn't starting cold.", correct: true, technique: 'Warm Callback',
        feedback: "You accepted the timing, acknowledged their success genuinely, and planted a pre-read. All three make the Thursday call more likely to convert." },
      { text: "Of course! Would you have 5 minutes now while I have you?", correct: false,
        feedback: "They just said they're exhausted and asked for Thursday. Ignoring that request is a bad start." },
      { text: "Thursday works — is morning or afternoon better for you?", correct: false,
        feedback: "Good, but missing the opportunity to send something before Thursday that warms the conversation." },
      { text: "I'll call Thursday — what time works best and who should I ask for?", correct: false,
        feedback: "Closer, but still missing the pre-read offer that makes the callback more productive." },
    ],
  },
  it18: {
    objection: "I've already got a great thing going. I don't need another revenue stream right now.",
    responses: [
      { text: "That's a genuinely good position to be in. The only question worth asking is: are there customers in your neighborhood who want your food and can't get to you? Delivery doesn't change what's working — it just captures demand you're currently leaving unreached.", correct: true, technique: 'Gap Framing',
        feedback: "You validated their success and introduced the one specific gap they may not have considered: unreachable demand. No pressure, just a relevant question." },
      { text: "Even great businesses diversify — it's just smart strategy.", correct: false,
        feedback: "Generic diversification advice doesn't connect to their specific situation." },
      { text: "What would it take to make a new revenue stream feel worthwhile to you?", correct: false,
        feedback: "Good question eventually, but frame the gap first so there's something specific to respond to." },
      { text: "At some point growth requires new channels — the sooner the better.", correct: false,
        feedback: "Implying they need to grow when they said they're doing great creates unnecessary friction." },
    ],
  },
  it19: {
    objection: "I need to think about this. You'll hear from me when I'm ready.",
    responses: [
      { text: "No pressure. Is there something specific making you hesitate? I ask because sometimes there's one thing I can clarify that saves a month of back-and-forth. But if you genuinely need time, I completely respect that. When works for a check-in?", correct: true, technique: 'Gentle Probe',
        feedback: "You offered to help without pushing, gave a genuine reason for asking (saves time), respected the possibility they really do need time, and secured a check-in date." },
      { text: "Of course — take all the time you need. I'll be here.", correct: false,
        feedback: "Open-ended waiting rarely converts. Always probe for the underlying concern or get a specific date." },
      { text: "Most people who say that don't follow up. Is there a concern I can address now?", correct: false,
        feedback: "Bluntly predicting they won't follow up is confrontational even if statistically true." },
      { text: "What would need to happen for you to feel confident saying yes?", correct: false,
        feedback: "Premature closing question if there's a specific unanswered concern you haven't found yet." },
    ],
  },
  it20: {
    objection: "I literally have no time to set up anything new right now.",
    responses: [
      { text: "Understood. The setup is handled by our onboarding team — your actual time investment is about 20 minutes on a review call and 5 minutes approving your menu. Everything else is done for you. But if the timing isn't right, I can reach back out in a few weeks.", correct: true, technique: 'Effort Minimization',
        feedback: "You gave a specific, believable time commitment and clarified who does the work. This transforms 'set up something new' into 'approve what someone else built.'" },
      { text: "The interface is really intuitive — most owners get comfortable with it quickly.", correct: false,
        feedback: "Intuitive still takes time. Eliminate the concern with specifics about how little time is actually required." },
      { text: "We could start you on a simplified version and add features later.", correct: false,
        feedback: "A simplified version implies more to deal with later, not less now." },
      { text: "What would make this feel manageable from a time standpoint?", correct: false,
        feedback: "Don't ask them to solve the time problem. Give them the concrete answer: 20 minutes, the rest is done for you." },
    ],
  },
  it21: {
    objection: "Every sales rep says they're different. Why should I believe you?",
    responses: [
      { text: "You're right to be skeptical — that's what every rep says. So let me not say it. Instead, here's one specific thing: a restaurant two blocks from here added $3,200 in monthly revenue in their first 90 days. That's verifiable. If that number is interesting to you, I'd like 15 minutes to show you how.", correct: true, technique: 'Evidence Over Claims',
        feedback: "You didn't defend against the skepticism or claim to be different. You gave one specific, verifiable data point and let them decide. This is the most credible response possible." },
      { text: "I am different — I focus on long-term partnerships, not just sign-ups.", correct: false,
        feedback: "Self-characterizing as different is exactly what every rep who isn't different says." },
      { text: "I can't prove I'm different in 30 seconds — but give me 15 minutes and I will.", correct: false,
        feedback: "Asking for 15 minutes without giving a reason to say yes to those 15 minutes puts the burden on them." },
      { text: "What has disappointed you about reps in the past? I want to make sure I'm different from that.", correct: false,
        feedback: "Good discovery instinct, but lead with evidence before asking them to define the problem." },
    ],
  },
  it22: {
    objection: "Is this some kind of scam? I've been getting a lot of fake vendor calls lately.",
    responses: [
      { text: "Not a scam — I can verify right now. Here's my full name, my work email address, and you can call Uber Eats restaurant support at the number on the official website to confirm I'm with the company. I'd rather you verify than have any doubt.", correct: true, technique: 'Trust Verification',
        feedback: "Encouraging verification instead of defending yourself is the strongest possible response. It shows you have nothing to hide and takes their concern seriously." },
      { text: "Definitely not a scam — Uber Eats is a publicly traded company.", correct: false,
        feedback: "Asserting legitimacy doesn't prove it. Give them a way to verify it themselves." },
      { text: "I totally understand the concern — can I email you from my official Uber Eats address?", correct: false,
        feedback: "An email alone can be spoofed. Point them to the official website and support line to verify independently." },
      { text: "What made this feel like a scam? I want to understand where the concern is coming from.", correct: false,
        feedback: "Asking them to explain themselves when they're already suspicious escalates defensiveness." },
    ],
  },
  it23: {
    objection: "My restaurant culture is very relationship-based. I don't make decisions with strangers.",
    responses: [
      { text: "I completely respect that — and I'm not asking you to. I'd like the chance to become someone you know. Can I come back next week for a proper introduction? No pitch, just a conversation about your business.", correct: true, technique: 'Relationship-First Approach',
        feedback: "You honored their value explicitly and proposed a meeting that aligns with it: relationship first, business second. This is how you earn trust with relationship-oriented owners." },
      { text: "I understand — but we really do need to talk about the business opportunity soon.", correct: false,
        feedback: "Pushing for a business conversation after they said relationships come first confirms you didn't hear them." },
      { text: "What would it take to build enough trust for a 15-minute conversation?", correct: false,
        feedback: "Asking them to prescribe how to build trust puts the burden on them when you should be proposing the approach." },
      { text: "I'm not a stranger — we've just talked for the past few minutes.", correct: false,
        feedback: "Three minutes on a cold call doesn't constitute a relationship to someone who values deep connections." },
    ],
  },
  it24: {
    objection: "I have no time to talk. My waitlist is 45 minutes right now.",
    responses: [
      { text: "Impressive — that's a sign of a healthy restaurant. I won't take another second of your time now. Here's my card. I'll follow up by email this week with something brief. If it looks interesting, we can find a quiet moment to talk.", correct: true, technique: 'Respectful Exit',
        feedback: "You validated their success, exited immediately as promised, and set up a low-pressure next step. Not fighting for time they don't have builds more goodwill than any pitch you could squeeze in." },
      { text: "I'll be quick — just two minutes while you have a moment.", correct: false,
        feedback: "A 45-minute waitlist means zero available moments. Respecting that completely is the only right move." },
      { text: "Can I wait and catch you after the dinner rush?", correct: false,
        feedback: "Waiting uninvited for hours puts significant social pressure on the owner." },
      { text: "That's great to hear — delivery could help you serve some of that overflow demand.", correct: false,
        feedback: "Pivoting into a pitch the moment you learn they're successful is tone-deaf. Exit first." },
    ],
  },
  it25: {
    objection: "I'll be honest — I usually just hang up on sales calls without listening.",
    responses: [
      { text: "I appreciate that honesty. Since you're still listening — I'll make it count. I'm with Uber Eats, and I specifically called because your restaurant has unusually strong reviews for your neighborhood. That's a signal the platform rewards. I'll keep it at that. Want me to email you something brief instead?", correct: true, technique: 'Earned Attention',
        feedback: "You acknowledged the honesty, didn't waste the moment they gave you, gave a specific reason you called them (strong reviews), and offered a less intrusive alternative. All in a few sentences." },
      { text: "I understand — but I think you'll regret it if you hang up this time.", correct: false,
        feedback: "Implying they'll regret hanging up is a pressure tactic that confirms why they hang up on calls." },
      { text: "I promise I won't waste your time — what would make you willing to listen for 60 seconds?", correct: false,
        feedback: "Asking them to prescribe what makes it worth listening extends the awkward moment." },
      { text: "Then I'll be brief: we can grow your revenue. Interested?", correct: false,
        feedback: "Vague revenue claims are exactly what every other call they hang up on says. Be specific." },
    ],
  },
  it26: {
    objection: "My partner handles all external vendor relationships. You'd have to go through them.",
    responses: [
      { text: "Understood — and I respect that process. Can I ask who I should reach out to? I'd love to send them a brief intro so they have context before we connect, rather than coming in completely cold.", correct: true, technique: 'Channel Navigation',
        feedback: "You respected the referral without undermining the owner's role, and asked for a name with context to warm the cold outreach. This is the right process for multi-decision-maker setups." },
      { text: "Happy to — but since I have you now, can I at least give you the overview?", correct: false,
        feedback: "Trying to pitch the owner after they've delegated creates friction in the partnership." },
      { text: "Is your partner usually available by email or phone? I can try both.", correct: false,
        feedback: "Asking about contact methods before getting the name is putting the cart before the horse." },
      { text: "Would you be willing to make an introduction? That usually makes these conversations more productive.", correct: false,
        feedback: "Good instinct, but ask for the name first — requesting an active introduction from someone you've just cold-called is asking for a favor too soon." },
    ],
  },
  it27: {
    objection: "We just had a nightmare with another app's drivers. I'm not going anywhere near delivery right now.",
    responses: [
      { text: "That sounds genuinely bad — and it's a completely reasonable reaction. I'm not going to try to talk you out of it today. Would you be open to me reaching back out in a few months? And if it ever comes up, happy to tell you specifically how we handle driver quality differently.", correct: true, technique: 'Respect + Future Door',
        feedback: "Respecting a recent negative experience without pushing is the right call. Offering a future conversation and a brief differentiation hook keeps the door open without pressure." },
      { text: "I totally understand — which app was it? Our drivers are different.", correct: false,
        feedback: "Asking which app and immediately claiming your drivers are better sounds defensive. Honor the experience first." },
      { text: "That's unfortunately a known issue industry-wide — it happens with every platform.", correct: false,
        feedback: "Normalizing a bad experience as universal doesn't make the prospect feel better about trying again." },
      { text: "What specifically went wrong? I might be able to show you how we've solved that.", correct: false,
        feedback: "Probing into the bad experience too quickly when they just said they're not going near delivery right now adds pressure." },
    ],
  },
  it28: {
    objection: "Can you call me back in six months? We have a lot going on.",
    responses: [
      { text: "Absolutely — I'll reach out on September 15th. Can I send you a brief summary before then so when we talk it's not starting from zero?", correct: true, technique: 'Pipeline Maintenance',
        feedback: "You committed to a specific date, and offered a warm-up send that makes the September call more productive. Simple and professional." },
      { text: "Of course. Is there a chance the timing could be sooner if things settle down?", correct: false,
        feedback: "Trying to compress the timeline they asked for signals you didn't really hear them." },
      { text: "I'll put that in my calendar. What exactly is going on that makes this a busy time?", correct: false,
        feedback: "Probing into their personal situation when they're clearly signaling 'not now' is intrusive." },
      { text: "Six months is a long time in this business — things can change a lot. Can we do three?", correct: false,
        feedback: "Negotiating their timeline down creates friction where there was a clear, reasonable request." },
    ],
  },
  it29: {
    objection: "I've never signed up for anything online in my life. I don't trust digital contracts.",
    responses: [
      { text: "We can do everything by paper if that's what you prefer — contract, menu submission, all of it. The platform itself runs digitally, but how you sign up and review terms doesn't have to be. Would a printed contract work better for you?", correct: true, technique: 'Flexibility Framing',
        feedback: "You offered a genuine alternative that removes the barrier without dismissing their preference. Meeting people where they are on digital comfort is respectful and practical." },
      { text: "Digital contracts are actually more secure than paper — everything is tracked.", correct: false,
        feedback: "Arguing the merits of digital when they've said they don't trust it creates friction rather than removing it." },
      { text: "I understand — we also have a fully digital process that most owners find very smooth.", correct: false,
        feedback: "You said 'I understand' then immediately ignored what they said by describing the digital process anyway." },
      { text: "What specifically concerns you about digital contracts? There might be a simple fix.", correct: false,
        feedback: "Good discovery instinct, but offer the paper alternative first — it's the clear, direct solution." },
    ],
  },
  it30: {
    objection: "I run this place alone. I don't have the bandwidth to manage another channel.",
    responses: [
      { text: "That's actually the most important thing to know. Delivery through our platform adds one tablet to your counter and one new type of order ticket. There's no fleet to manage — we handle the couriers. Your only job is making the food and handing it over. Want to know exactly what that looks like day-to-day?", correct: true, technique: 'Minimal Footprint',
        feedback: "You answered the operational concern precisely: one tablet, one order type, couriers handled by Uber Eats. This transforms 'managing another channel' into 'fill a bag and hand it over.'" },
      { text: "Lots of solo operators manage delivery — it's more manageable than you'd expect.", correct: false,
        feedback: "What others do doesn't solve their concern. Describe the specific, minimal footprint for them." },
      { text: "We have support specifically for owner-operators to make this easy.", correct: false,
        feedback: "Vague support promises don't describe what the day-to-day actually looks like." },
      { text: "What does your current daily workflow look like? I want to understand what's already on your plate.", correct: false,
        feedback: "Good eventually, but explain the minimal footprint first so they know you're not about to add significant new work." },
    ],
  },
  it31: {
    objection: "I need you to prove you're not wasting my time before I give you any more of it.",
    responses: [
      { text: "Fair. Here's one number: the pizzeria on Maple Street added $4,200 in monthly delivery revenue in their first 90 days. They were skeptical too. If that number is irrelevant to you, I'll walk. If it's at least interesting, I'd like 15 minutes to show you the specifics.", correct: true, technique: 'Proof-First',
        feedback: "You gave a specific, local, credible data point and gave them the power to decide whether to continue. This shifts from you selling to them choosing to engage." },
      { text: "I promise I won't waste your time — I only work with restaurants where I see real potential.", correct: false,
        feedback: "A promise not to waste their time isn't the same as proving it. Give the evidence first." },
      { text: "Let me ask you a few questions to understand your situation and I'll tell you quickly if it's a fit.", correct: false,
        feedback: "Asking questions when they demanded proof is the wrong order. Prove value first, then discover." },
      { text: "Here's our platform overview — it covers everything you'd want to know.", correct: false,
        feedback: "A generic deck is the opposite of proof. Give one specific, local result." },
    ],
  },
  it32: {
    objection: "A rep from another company told me Uber Eats was the worst platform for independent restaurants.",
    responses: [
      { text: "A competitor told you the competition is worse — I'd take that with some salt. What I can do is show you what actual independent restaurants in your neighborhood are doing on our platform, and you can judge for yourself. Want to see real numbers?", correct: true, technique: 'Source Credibility + Evidence',
        feedback: "You pointed out the obvious conflict of interest without being dismissive, then offered verifiable evidence as the real answer. This is more credible than defending Uber Eats." },
      { text: "That's completely untrue — we have the highest restaurant partner satisfaction scores.", correct: false,
        feedback: "Countering a competitor claim with your own stats creates a he-said-she-said dynamic that doesn't help you." },
      { text: "Which platform were they representing? That context would help me respond properly.", correct: false,
        feedback: "Competitor intelligence can be useful eventually, but address the claim first before probing into who said it." },
      { text: "Independent restaurants are one of our strongest categories — I can show you data.", correct: false,
        feedback: "Better, but first acknowledge the obvious conflict of interest in a competitor making that claim." },
    ],
  },
  it33: {
    objection: "My accountant says we shouldn't take on any new costs right now.",
    responses: [
      { text: "Understood — and that's a smart instinct. Uber Eats isn't an upfront cost though. There's no setup fee or subscription. We take a commission only on orders you actually receive. If there are no orders, there's no cost. Might be worth a 10-minute call with your accountant to show them the full model.", correct: true, technique: 'Cost Structure Clarification',
        feedback: "You addressed the specific concern: no fixed costs, commission-only. This is a factual clarification, not a rebuttal, and it removes the accountant's objection precisely." },
      { text: "We're really a revenue generator, not a cost — the framing is different.", correct: false,
        feedback: "Reframing without specifics won't satisfy an accountant. Give the actual cost structure." },
      { text: "Would your accountant be open to a call? I'd love to address their concerns directly.", correct: false,
        feedback: "Offering to speak to the accountant before clarifying the basic cost structure is premature." },
      { text: "We have flexible pricing tiers that can reduce the impact.", correct: false,
        feedback: "Jumping to pricing flexibility implies there's a cost to negotiate — when the commission-only model may already eliminate the concern." },
    ],
  },
  it34: {
    objection: "I built this business by not taking shortcuts. Adding an app feels like a shortcut.",
    responses: [
      { text: "I'd push back gently on that framing. Your food, your kitchen, your standards — none of that changes. Delivery is a distribution decision, not a quality one. The restaurants that use it well treat it as seriously as their dine-in service. It's only a shortcut if you treat it like one.", correct: true, technique: 'Values Alignment',
        feedback: "You challenged the framing respectfully without dismissing their values. You separated the quality question from the distribution question — which is the real distinction." },
      { text: "There's nothing shortcut about adding a revenue channel — it's just business growth.", correct: false,
        feedback: "Dismissing their values concern with a 'just business' framing misses what matters to them." },
      { text: "What does 'shortcut' mean to you in this context? I want to make sure I understand.", correct: false,
        feedback: "Good eventually, but address the values framing first before discovering more." },
      { text: "The most successful restaurant owners I work with all use delivery apps — they see it as smart strategy.", correct: false,
        feedback: "Social proof from unnamed others doesn't connect to their specific value of doing things the right way." },
    ],
  },
  it35: {
    objection: "My regulars will think I've sold out if I go on a delivery app.",
    responses: [
      { text: "Your regulars come in because they love the experience — that doesn't change. Delivery reaches people who can't be regulars yet: the family 10 miles away, the professional who works late. You're not replacing the dine-in relationship; you're making the food accessible to people who aren't in the room.", correct: true, technique: 'Audience Separation',
        feedback: "You separated the two customer types clearly: regulars who choose the experience, and delivery customers who can't participate in the experience. One doesn't replace the other." },
      { text: "Your regulars will actually appreciate the convenience — many of them might order delivery too.", correct: false,
        feedback: "Speculating that regulars will embrace delivery directly contradicts the loyalty concern they raised." },
      { text: "Other beloved local restaurants use delivery — it hasn't hurt their identity.", correct: false,
        feedback: "Social proof without addressing the specific emotional concern about 'selling out' misses the mark." },
      { text: "What do you think makes your regulars so loyal? I want to understand what's at stake.", correct: false,
        feedback: "Good discovery but only after addressing the 'selling out' concern directly." },
    ],
  },
  it36: {
    objection: "You walked in without a name or a contact. That's not how we do business here.",
    responses: [
      { text: "You're completely right — I should have had a contact before walking in. I apologize for that. I'm David from Uber Eats. Can I ask for the right way to set up a proper introduction with you or the owner?", correct: true, technique: 'Accountability + Process Respect',
        feedback: "You agreed with them immediately, apologized without hedging, and asked for the right process. This shows respect for how they operate and resets the interaction on their terms." },
      { text: "You're right — I'll make sure to call ahead next time. While I'm here though—", correct: false,
        feedback: "Acknowledging the misstep and then continuing anyway shows you don't actually respect the process." },
      { text: "I understand — I was in the area and thought a direct introduction might be appreciated.", correct: false,
        feedback: "Justifying the unannounced walk-in doesn't undo the breach of their protocol." },
      { text: "My apologies — who would be the right person to set up a formal introduction with?", correct: false,
        feedback: "Close — but the apology needs to acknowledge the specific breach (no contact, no name) before moving forward." },
    ],
  },
  it37: {
    objection: "I have a no-solicitation sign on the door. Did you not see it?",
    responses: [
      { text: "I did see it and I should have respected it. I apologize. I'll head out now. If you ever want to connect on your own terms, here's my card — otherwise I won't reach out again uninvited.", correct: true, technique: 'Full Accountability',
        feedback: "You took full accountability for ignoring a clear signal, exited immediately, and gave them full control over any future contact. This is the only appropriate response." },
      { text: "I saw it, but I thought delivery app partnerships might be an exception to that rule.", correct: false,
        feedback: "Deciding for someone else what exceptions apply to their own sign is a significant breach of trust." },
      { text: "I'm sorry — I was hoping for just 30 seconds.", correct: false,
        feedback: "Apologizing and then immediately asking for 30 seconds shows you didn't actually hear the issue." },
      { text: "I apologize for the intrusion. Can I at least leave a card?", correct: false,
        feedback: "Asking for anything after ignoring a no-solicitation sign extends the intrusion." },
    ],
  },
  it38: {
    objection: "I run a supper club — reservation only, no public-facing menu. This really isn't for us.",
    responses: [
      { text: "That's a unique setup and I can see why you'd say that. You're right that a standard delivery listing doesn't fit. I'm curious though — do you have any prep or surplus on non-event nights? Some private dining operators use delivery specifically for those gaps. But if there's genuinely no opening, I completely respect that.", correct: true, technique: 'Curious Qualification',
        feedback: "You accepted that the standard model doesn't fit, then asked a specific qualifying question that might reveal an edge case opportunity — without pushing if the answer is no." },
      { text: "Supper clubs are actually an interesting category for us — exclusivity can work on the platform.", correct: false,
        feedback: "Trying to force a fit that clearly doesn't exist creates friction and damages credibility." },
      { text: "There might be more flexibility in how you list your operation than you think.", correct: false,
        feedback: "Vague flexibility hints without specifics don't address why a reservation-only club would use a delivery app." },
      { text: "What does a typical week look like for you operationally? I want to understand your model.", correct: false,
        feedback: "Good discovery question, but only after acknowledging that the standard model probably doesn't fit." },
    ],
  },
  it39: {
    objection: "I had a bad experience personally ordering from Uber Eats as a customer. Why would I list there?",
    responses: [
      { text: "That's a fair connection to make. Can I ask what happened? The customer experience and the restaurant partner experience are actually quite different operationally — but if the issue was something like driver quality or support, that's the same infrastructure you'd be depending on. I'd rather know what broke down.", correct: true, technique: 'Experience Distinction',
        feedback: "You took the personal experience seriously rather than dismissing it, asked what went wrong (because it might be genuinely relevant), and honestly noted that some issues do affect both sides." },
      { text: "The customer experience and restaurant experience are very different — one bad order doesn't reflect the platform.", correct: false,
        feedback: "Dismissing their personal experience as irrelevant before understanding what happened is condescending." },
      { text: "Every platform has some bad orders — what matters is the overall experience for restaurant partners.", correct: false,
        feedback: "Normalizing bad experiences doesn't address their specific concern about using a platform they've had problems with." },
      { text: "I'm sorry about that. Can I tell you about what restaurants experience on the other side?", correct: false,
        feedback: "Pivoting away from their experience too quickly signals you're not really listening to the concern." },
    ],
  },
  it40: {
    objection: "I'm not interested right now, but maybe in a year.",
    responses: [
      { text: "A year works — I'll mark my calendar and reach out then. Can I send you a short summary before then so you have something to reference? And is there a specific reason for the year timeline, or is it more of a general 'not right now'?", correct: true, technique: 'Soft Discovery + Pipeline',
        feedback: "You accepted the timeline, planted a warm-up send, and gently probed for the real reason — without pressuring. The probe might reveal something addressable; if not, you have a quality pipeline entry." },
      { text: "A year is a long time — things change. Can we do six months?", correct: false,
        feedback: "Negotiating their timeline creates friction where there was none." },
      { text: "I'll call back in a year then. Good luck in the meantime!", correct: false,
        feedback: "Accepting without any pre-read or discovery means starting completely cold in 12 months." },
      { text: "What changes in a year that makes the timing better?", correct: false,
        feedback: "Good curiosity, but lead with accepting the timeline and offering materials before probing into their reasoning." },
    ],
  },

  // ── CHINATOWN — OBJECTION HANDLING ────────────────────────────────────────
  ch01: {
    objection: "We already use DoorDash and it's working fine. I don't see the need.",
    responses: [
      { text: "Makes sense. The reason most partners add us even with DoorDash working is the Uber ride customer — people who open Uber for transportation and see food. That's a structurally different pool than DoorDash's. Most partners find the audiences barely overlap, so it's incremental.", correct: true, technique: 'Additive Framing',
        feedback: "You validated DoorDash without undermining it, then gave one specific, structural reason the audiences differ. The ride-network differentiator is concrete and not just 'we're bigger.'" },
      { text: "More platforms, more revenue — there's really no downside to being on multiple apps.", correct: false,
        feedback: "More-is-better arguments don't address the duplication concern. Show why the audiences are different." },
      { text: "DoorDash has been losing ground — diversifying now is smart risk management.", correct: false,
        feedback: "Casting doubt on a platform that's working for them creates friction instead of solving their concern." },
      { text: "What's your monthly DoorDash revenue? That'll help me model the incremental upside.", correct: false,
        feedback: "Asking for their financials before showing why the audiences differ puts you in the wrong order." },
    ],
  },
  ch02: {
    objection: "The commission is 30%. That's our entire profit margin on most orders.",
    responses: [
      { text: "The headline number hits hard — I hear this a lot. Here's how the math actually works: delivery runs through your existing kitchen and fixed costs. The incremental cost of one more order is just food and labor for that ticket. Most partners find the real net margin impact is 8–12%, not 30%. Want me to run the numbers for your specific menu?", correct: true, technique: 'Incremental Margin Logic',
        feedback: "You acknowledged the concern, then gave the specific lens that changes the calculation: incremental cost, not full P&L. Offering to run it for them makes it concrete." },
      { text: "Our rates are competitive with every other platform in the market.", correct: false,
        feedback: "Market comparison doesn't address their specific margin concern." },
      { text: "We have some rate flexibility for high-volume restaurants.", correct: false,
        feedback: "Jumping to discounts before making the margin case signals the standard pricing isn't defensible." },
      { text: "What are your food and labor cost percentages? I want to model this accurately.", correct: false,
        feedback: "Good eventually, but give the incremental logic first before asking for their cost structure." },
    ],
  },
  ch03: {
    objection: "We have our own delivery drivers. We keep 100% of the revenue and control the whole experience.",
    responses: [
      { text: "Running your own drivers is a real operational advantage — and I'm not trying to replace that. What Uber Eats adds is discovery: customers browsing the app who don't know you exist. Your drivers serve current customers; we bring new ones. The two channels don't compete.", correct: true, technique: 'Customer Acquisition Frame',
        feedback: "You respected their model and framed Uber Eats as a discovery/acquisition tool, not a delivery replacement. This is the honest and strategic differentiation." },
      { text: "Running drivers is expensive — insurance, wages, maintenance. Our model eliminates all that.", correct: false,
        feedback: "Criticizing their operation creates defensiveness. They're running it successfully — lead with what you add." },
      { text: "Many restaurants with their own drivers still use us for the incremental volume.", correct: false,
        feedback: "What others do isn't as compelling as explaining why it works for their specific model." },
      { text: "What does your customer acquisition look like currently? Any paid marketing?", correct: false,
        feedback: "Good eventually, but establish that you're adding customer acquisition first, not replacing delivery." },
    ],
  },
  ch04: {
    objection: "We tried a delivery platform two years ago. Orders were wrong, food was cold, terrible reviews. Never again.",
    responses: [
      { text: "That experience would make me hesitant too. Can I ask what specifically went wrong? Order accuracy and support are areas we've built differently — but if the issue was something else, I'd rather know than pretend we've solved something we haven't.", correct: true, technique: 'Honest Discovery',
        feedback: "You acknowledged the past experience as real, avoided competitor-bashing, and asked the specific question that determines whether you have a genuine answer. Confidence and respect." },
      { text: "The industry has changed dramatically — the experience today would be completely different.", correct: false,
        feedback: "Vague 'it's changed' claims don't address what specifically failed for them." },
      { text: "That sounds like a different platform — Uber Eats works very differently.", correct: false,
        feedback: "Competitor-bashing undermines credibility even when partly true. Discover the issue before comparing." },
      { text: "What would make you willing to try again? I can tell you if we've addressed those issues.", correct: false,
        feedback: "Good instinct but premature. Find out what broke first, then show what's different." },
    ],
  },
  ch05: {
    objection: "We're at full capacity every service. We literally cannot take on more orders.",
    responses: [
      { text: "You control the volume completely. You set a hard cap per hour, and you can schedule delivery to run only during your slower windows — Tuesday lunch, quiet Mondays. If Saturday night is maxed out, delivery stays off. You don't have to choose between capacity and delivery.", correct: true, technique: 'Order Cap Control',
        feedback: "The specific mechanism — configurable caps and time-window scheduling — directly solves the capacity concern. 'You set the limit' puts control clearly in their hands." },
      { text: "Delivery orders are simpler than dine-in — your kitchen can usually handle more than you think.", correct: false,
        feedback: "Arguing against their assessment of their own kitchen creates friction. Show the control mechanism instead." },
      { text: "Being at capacity is great — delivery could justify expanding your operation.", correct: false,
        feedback: "Suggesting expansion to someone who's already stretched is the wrong direction." },
      { text: "What time of day are you typically slowest? That's probably where delivery fits.", correct: false,
        feedback: "Good question, but only after explaining the cap and scheduling feature — otherwise they don't know those options exist." },
    ],
  },
  ch06: {
    objection: "Our customers call us directly. We keep every dollar and don't need a middleman.",
    responses: [
      { text: "Keep every regular who calls you — absolutely. What Uber Eats reaches are customers who don't know you exist yet: people browsing the app for food in your neighborhood who've never called you. You're not giving the middleman a cut of existing revenue — you're paying for access to new customers you can't currently reach.", correct: true, technique: 'New Customer Framing',
        feedback: "You validated the existing channel and clearly separated Uber Eats as a new-customer tool, not a replacement for relationships they've already built." },
      { text: "Delivery platforms help drive awareness that leads to phone orders and dine-in visits too.", correct: false,
        feedback: "Cross-channel spillover is speculative. Focus on the clear, direct value: net new customers." },
      { text: "The commission is essentially a marketing cost — think of it as paid acquisition.", correct: false,
        feedback: "Reframing commission as marketing doesn't address the concern about giving up margin on revenue they could keep." },
      { text: "What percentage of your current revenue comes from phone orders versus walk-ins?", correct: false,
        feedback: "Good data eventually, but answer the 'why give up margin' question first." },
    ],
  },
  ch07: {
    objection: "I've seen restaurants post online that they lose money on every Uber Eats order.",
    responses: [
      { text: "Those complaints are real — and they usually come from restaurants that used the same pricing as their dine-in menu without accounting for the commission. The fix is simple: delivery menu pricing can be 10–15% higher to offset the fee. Most partners do this from day one. Happy to show you what that looks like.", correct: true, technique: 'Root Cause + Solution',
        feedback: "You acknowledged the complaints as legitimate, identified the specific cause (pricing error, not platform greed), and gave a concrete, actionable fix. This is educational without being dismissive." },
      { text: "Those are edge cases — the vast majority of our partners are profitable on delivery.", correct: false,
        feedback: "Dismissing real complaints as edge cases isn't credible when the concern is widespread." },
      { text: "Our commission structure is transparent — you always know what you'll pay per order.", correct: false,
        feedback: "Transparency about the fee doesn't make it smaller. Address the profitability concern directly." },
      { text: "Let me run the numbers for your restaurant — I think you'd be surprised.", correct: false,
        feedback: "Good offer but give the pricing solution first so they know there's an actual fix before agreeing to a numbers review." },
    ],
  },
  ch08: {
    objection: "I'm worried about fake reviews from customers I've never actually served.",
    responses: [
      { text: "Verified reviews on Uber Eats only come from customers who completed an actual order through the platform — no anonymous reviews from people who never ordered. You can also flag and respond to any review. It's not perfect, but unverified review bombing isn't the mechanism here.", correct: true, technique: 'Review System Clarity',
        feedback: "You explained the specific verification mechanism that prevents the fake review scenario they described. Clarifying how the system actually works is more useful than reassurance." },
      { text: "Bad reviews happen everywhere — most customers read through them and judge fairly.", correct: false,
        feedback: "Normalizing bad reviews doesn't address the specific fear of reviews from non-customers." },
      { text: "Our review system is very robust — most partners have very positive experiences.", correct: false,
        feedback: "Vague robustness claims don't explain the verification mechanism that addresses their specific concern." },
      { text: "What's been your experience with reviews on other platforms?", correct: false,
        feedback: "Good context eventually, but explain the verification system first before exploring their review history." },
    ],
  },
  ch09: {
    objection: "We're too busy to deal with an app that has problems — I've heard your support is terrible.",
    responses: [
      { text: "That's been a real criticism and I'd be dishonest if I claimed every support interaction is perfect. What's changed is that restaurant partners now have a dedicated support line, not the same queue as consumer complaints. I'd rather show you the escalation process than ask you to take my word for it.", correct: true, technique: 'Honest Accountability',
        feedback: "You acknowledged the valid criticism, pointed to a specific operational change, and offered a demonstration instead of asking for blind trust." },
      { text: "Our support has improved massively — we've invested heavily in the infrastructure.", correct: false,
        feedback: "Vague investment claims don't give them anything concrete to believe." },
      { text: "Every platform gets support complaints at scale — it's hard to avoid.", correct: false,
        feedback: "Contextualizing complaints as inevitable doesn't address whether their problem would actually get resolved." },
      { text: "What kind of support issues came up for you with other platforms?", correct: false,
        feedback: "Good discovery but only after acknowledging the criticism and explaining what's specifically different." },
    ],
  },
  ch10: {
    objection: "Our customers are older locals. They don't use delivery apps.",
    responses: [
      { text: "Your regulars — absolutely, they come in or call. Delivery apps reach a different demographic: younger customers in your neighborhood who don't know you exist yet. They're ordering delivery from someone — the question is whether it's you or the restaurant two blocks over.", correct: true, technique: 'Demographic Expansion',
        feedback: "You validated their customer knowledge and reframed delivery as accessing an entirely different, younger customer who currently isn't theirs — not competing with existing relationships." },
      { text: "App usage among older customers is growing faster than most people realize.", correct: false,
        feedback: "Arguing demographics with someone who knows their customer base creates friction." },
      { text: "Your regulars might surprise you — a lot of older customers order delivery now.", correct: false,
        feedback: "The value isn't about converting regulars to app users. It's about reaching app users who don't know the restaurant yet." },
      { text: "What does your current customer age breakdown look like, roughly?", correct: false,
        feedback: "Good eventually, but frame delivery as reaching new demographics first before exploring their existing base." },
    ],
  },
  ch11: {
    objection: "What if a driver picks up the wrong order or damages the food? That's on my reputation.",
    responses: [
      { text: "Delivery reviews on Uber Eats are separate from your Google and Yelp profile — a bad delivery complaint stays inside the app. You can also flag reviews that were clearly about courier issues, not food quality. And there's a process to report driver incidents that we take seriously. Not a perfect system, but the risk of delivery errors contaminating your external reputation is smaller than it might seem.", correct: true, technique: 'Risk Containment',
        feedback: "You addressed the specific reputational fear by explaining the review firewall, the flagging process, and the incident reporting — all of which contain the damage." },
      { text: "Driver incidents are rare — our courier ratings are very high overall.", correct: false,
        feedback: "Reassurance about average quality doesn't address what happens when something does go wrong." },
      { text: "You can add notes to your listing asking couriers to handle with care.", correct: false,
        feedback: "Packaging notes are useful but don't address the reputational question." },
      { text: "How have your quality control issues been with other platforms in the past?", correct: false,
        feedback: "Good context eventually but address the reputation containment question first." },
    ],
  },
  ch12: {
    objection: "I'm not interested in anything that might affect my staff's tip income.",
    responses: [
      { text: "Delivery tips go directly to the courier — they never enter your in-house tip pool. Your dine-in team's income is completely unaffected. The two are entirely separate.", correct: true, technique: 'Channel Separation',
        feedback: "You cleared up a misconception immediately and specifically. Delivery tips and dine-in tips are operationally separated — knowing this removes the staff income concern entirely." },
      { text: "Delivery generates strong tips overall — it could increase total tipping in your operation.", correct: false,
        feedback: "This misses the point. Clarify that delivery tips go to couriers, not to dine-in staff." },
      { text: "You could restructure your tip pool to include delivery as a bonus for your team.", correct: false,
        feedback: "Suggesting a tip pool restructure when no change is actually needed creates unnecessary complexity." },
      { text: "How is your current tip pool structured? I want to make sure there's no conflict.", correct: false,
        feedback: "Good context eventually, but clarify that delivery tips go to the courier — not the dine-in team — before exploring their existing setup." },
    ],
  },
  ch13: {
    objection: "Every delivery app claims to be different but they all take a cut and cause headaches.",
    responses: [
      { text: "That's a fair summary of the category. The honest differentiator for Uber Eats isn't the model — it's the customer pool. Uber users are in the app for transportation and see food. That means you're reaching people who aren't specifically looking for delivery but find you anyway. Whether that's worth the cut is the question I'd like to show you the data on.", correct: true, technique: 'Honest Differentiation',
        feedback: "You agreed with the general critique rather than defending the model, then gave the one specific differentiator with an offer to prove it. This is more credible than competing on claims." },
      { text: "We're different in a few key ways — our partner support, our tools, and our customer base.", correct: false,
        feedback: "Listing differences without proof is exactly what every other app does." },
      { text: "What headaches specifically have you experienced? I want to address each one.", correct: false,
        feedback: "Good discovery but offer the honest differentiation first so there's a reason to continue the conversation." },
      { text: "The cut is worth it when the revenue is there — that's the only question that matters.", correct: false,
        feedback: "This is partially right but skips the 'all cause headaches' concern and sounds dismissive." },
    ],
  },
  ch14: {
    objection: "I'm already on two platforms. A third means more complexity and more problems.",
    responses: [
      { text: "That's a legitimate concern — and I won't pretend three isn't more than two. The question worth asking: are the two you're on reaching the same customers as each other? If yes, adding a third with a different user base makes sense. If they're all overlapping, you're right — you don't need us. Can I show you the Uber audience overlap data for your area?", correct: true, technique: 'Honest Consulting',
        feedback: "You validated the concern and gave an honest framework for evaluating whether a third platform makes sense — rather than just pushing to add it. This is genuine consultative selling." },
      { text: "The management is easier than it sounds — our tablet integrates with most POS systems.", correct: false,
        feedback: "Integration convenience doesn't address whether a third platform adds value or just adds noise." },
      { text: "Three platforms is increasingly standard for high-performing independent restaurants.", correct: false,
        feedback: "Industry norms don't address the specific complexity concern they raised." },
      { text: "Which two platforms are you on? That context would help me make the case for adding us.", correct: false,
        feedback: "Good competitive data eventually, but give the honest evaluation framework first before collecting intel." },
    ],
  },
  ch15: {
    objection: "We're a noodle shop. Our food doesn't hold for a 30-minute delivery window.",
    responses: [
      { text: "That's a real constraint and I won't pretend broth and noodles are the same at 30 minutes. What a lot of noodle operators do is list a curated delivery menu: cold appetizers, dumplings, sauces on the side. The full bowl experience stays in the restaurant; the deliverable items are specifically chosen for travel. Happy to show you how other noodle shops have structured this.", correct: true, technique: 'Menu Curation Strategy',
        feedback: "You agreed with the quality concern rather than dismissing it, then gave a specific, tested solution: a delivery menu of travel-friendly items, not the full menu. Real and practical." },
      { text: "Packaging technology has improved a lot — noodles hold up better than you might think.", correct: false,
        feedback: "Telling a noodle chef their food travels better than they know dismisses their expertise." },
      { text: "You could try it with a small menu and see what the results are.", correct: false,
        feedback: "Suggesting they experiment without a strategy for solving the quality issue puts the burden on them." },
      { text: "What's your best-selling dish? That might be a good starting point for a delivery menu.", correct: false,
        feedback: "Good discovery, but only after presenting the curated-menu strategy so they understand the approach." },
    ],
  },
  ch16: {
    objection: "We've been in business 30 years without marketing. We're full without it.",
    responses: [
      { text: "Thirty years and still full — that's genuine staying power. The only gap delivery fills is customers who want your food but can't get to you: the person working late, the family too far to drive. Your dine-in doesn't change at all. It's a separate channel for a different type of demand.", correct: true, technique: 'Unserved Demand Frame',
        feedback: "You honored the legacy and then identified the specific, structural gap that a full dining room can't fill — unreachable demand from people who'd order if they could." },
      { text: "Being successful now doesn't guarantee success in a changing market.", correct: false,
        feedback: "Implying their model is fragile when they're doing fine creates unnecessary defensiveness." },
      { text: "Even full restaurants can do more revenue through delivery — it's essentially free money.", correct: false,
        feedback: "'Free money' oversimplifies and doesn't address why they'd want something they've been fine without." },
      { text: "What does a typical slow night look like for you, if you have them?", correct: false,
        feedback: "Good question but frame the unserved demand gap first so there's context for why slow nights represent an opportunity." },
    ],
  },
  ch17: {
    objection: "My kitchen staff will hate dealing with delivery tickets on top of everything else.",
    responses: [
      { text: "It's a fair concern. The delivery orders come through a separate tablet and print as a normal kitchen ticket — the same format your team already uses. You can also set the cap low to start: 5 or 10 orders a day. At that volume, it's a small addition, not a disruption. Most staff adapt quickly when the pace is controlled.", correct: true, technique: 'Integration + Volume Control',
        feedback: "You addressed the operational concern specifically: same ticket format, separate tablet, configurable low caps. This transforms 'staff disruption' into 'a few extra tickets per day.'" },
      { text: "Delivery is simpler than dine-in — your staff will adjust quickly.", correct: false,
        feedback: "Telling experienced staff their concerns about new work are unfounded creates resentment." },
      { text: "What's your current ticket volume? That would help me understand the impact.", correct: false,
        feedback: "Good data eventually, but explain the integration and caps first before asking about their current volume." },
      { text: "You could designate one person to handle delivery tickets specifically.", correct: false,
        feedback: "Suggesting dedicated staffing when the owner is worried about disruption adds cost without addressing the concern." },
    ],
  },
  ch18: {
    objection: "We're seasonal — only open May through September. This doesn't make sense year-round.",
    responses: [
      { text: "That's a smart consideration. During those five months, delivery can add meaningful revenue to your peak period. You pause the account in October with no fees and no penalties, then reactivate in May. Some seasonal restaurants actually see delivery as their highest-ROI channel precisely because it's concentrated in their busiest months.", correct: true, technique: 'Seasonal Frame',
        feedback: "You accepted the seasonal model, showed delivery adds value during the active period, and addressed the off-season cost concern (pause, no fees). This turns the objection into an opportunity." },
      { text: "Even in five months, the revenue potential is significant if you're in a high-traffic area.", correct: false,
        feedback: "Vague potential claims don't address the 'doesn't make sense year-round' concern operationally." },
      { text: "We have seasonal arrangements — we can structure something specific to your model.", correct: false,
        feedback: "Implying a special deal complicates what should be a simple answer: pause with no fees." },
      { text: "What does your peak month look like in terms of covers and revenue?", correct: false,
        feedback: "Good data eventually but answer the seasonal viability concern first." },
    ],
  },
  ch19: {
    objection: "What if I get orders when I'm out of an ingredient and have to cancel? That reflects badly on us.",
    responses: [
      { text: "You control your inventory directly in the dashboard — you can 86 any item in seconds, and it comes off the menu instantly for new orders. You can also set specific hours so delivery is only on when you're fully stocked and staffed. Last-minute cancellations are something you can almost entirely avoid with those two tools.", correct: true, technique: '86 Control',
        feedback: "You described the specific operational mechanism — real-time item removal and hour scheduling — that prevents the cancellation scenario they described." },
      { text: "Cancellations happen occasionally but customers are generally understanding.", correct: false,
        feedback: "Normalizing cancellations doesn't address a concern about their own reputation management." },
      { text: "You could keep a buffer inventory specifically for delivery orders.", correct: false,
        feedback: "Suggesting extra inventory purchasing puts the burden of solving a platform limitation on them." },
      { text: "How often do you run out of key items on a typical service?", correct: false,
        feedback: "Good context eventually, but show the 86-control mechanism first so they know the tool exists." },
    ],
  },
  ch20: {
    objection: "Delivery packaging is expensive and I'd have to pass the cost to customers.",
    responses: [
      { text: "You can add a small packaging fee to each order — most platforms allow this and customers expect it. Typically $0.50 to $1.00 per order covers premium packaging and doesn't deter buyers meaningfully. I can show you how other restaurants in your category have handled this.", correct: true, technique: 'Cost Pass-Through',
        feedback: "You gave a specific, practical mechanism (packaging fee per order) and a realistic range. This turns an operational cost concern into a solved problem." },
      { text: "Packaging costs are usually offset quickly by the incremental revenue.", correct: false,
        feedback: "Vague offsets don't give them the specific mechanism they need to manage the cost." },
      { text: "Packaging is a deductible business expense — it's not as bad as it looks on paper.", correct: false,
        feedback: "Tax efficiency is a secondary consideration when they're asking about managing operational cash flow." },
      { text: "What packaging are you currently using for takeout, if any?", correct: false,
        feedback: "Good discovery, but give the packaging fee solution first before exploring what they already have." },
    ],
  },
  ch21: {
    objection: "I don't want GPS tracking of my restaurant's order patterns. That's sensitive business data.",
    responses: [
      { text: "Your order data — volume, peak times, popular items — is yours and used to optimize your listing's performance. It's not sold to third parties or shared with competitors. Uber Eats uses aggregated, anonymous data for market-level analysis. I can walk you through the data use policy specifically if that's important to you.", correct: true, technique: 'Data Transparency',
        feedback: "You addressed the specific fear (competitive exposure) directly and offered to go deeper. Distinguishing 'your data' from 'aggregated market data' is the key clarification." },
      { text: "All platforms collect operational data — it's standard in the industry.", correct: false,
        feedback: "Industry norms don't address the specific concern about sensitive business information." },
      { text: "The data we collect actually helps you optimize your business — it's more of a benefit.", correct: false,
        feedback: "Reframing data collection as a benefit before addressing the privacy concern sounds dismissive." },
      { text: "What specifically are you concerned about being tracked?", correct: false,
        feedback: "Good discovery but give the key reassurance (your data isn't shared with competitors) before asking them to elaborate." },
    ],
  },
  ch22: {
    objection: "I'm in negotiations to sell the restaurant. I can't sign any new contracts right now.",
    responses: [
      { text: "That makes complete sense — don't sign anything during an active deal process. Would it be worth a conversation in 60 days to see where things land? If the sale goes through, the buyer might actually value an active delivery channel. If it doesn't, we'd be ready to move quickly.", correct: true, technique: 'Future Option',
        feedback: "You respected the legal constraint and found two distinct scenarios where the conversation has value later — both of which are true." },
      { text: "An active delivery channel could increase the restaurant's valuation — worth knowing before the sale.", correct: false,
        feedback: "Making a valuation argument when they've said they can't sign new contracts is tone-deaf to the constraint." },
      { text: "No problem — I'll follow up after things settle.", correct: false,
        feedback: "Vague future follow-up with no specific date or useful hook wastes the current conversation." },
      { text: "When does the negotiation period typically close?", correct: false,
        feedback: "Good to know for planning, but propose the two-scenario value case first before asking for their timeline." },
    ],
  },
  ch23: {
    objection: "We cater corporate events. Our volumes are planned weeks ahead. Individual delivery doesn't fit.",
    responses: [
      { text: "Catering is a completely different channel — and you're right to run it separately. What delivery captures is individual demand on a Tuesday at noon from someone who wants your food without a catering order. Those two customers don't overlap at all. Delivery can fill slow periods between events without touching your catering model.", correct: true, technique: 'Complementary Positioning',
        feedback: "You drew a clean line between planned catering and spontaneous individual delivery. They serve different demand types and don't compete." },
      { text: "You could actually list catering packages on Uber Eats — it's a growing category.", correct: false,
        feedback: "Suggesting they migrate catering to the app contradicts what they value about that channel." },
      { text: "Individual delivery orders can add up to catering-level revenue over time.", correct: false,
        feedback: "Volume comparisons miss the structural distinction between the two channel types." },
      { text: "What does your typical gap look like between catering events?", correct: false,
        feedback: "Good question but only after drawing the channel separation — otherwise they don't see why the gap is relevant." },
    ],
  },
  ch24: {
    objection: "We just signed a year-long contract with DoorDash with some exclusivity terms.",
    responses: [
      { text: "Worth reviewing the exact language with your attorney — some exclusivity clauses have geographic or time limitations that may be narrower than they seem. If there's a genuine exclusivity period, I completely respect that. I'd rather reconnect when you're free than create a legal issue for you.", correct: true, technique: 'Legal Respect',
        feedback: "You encouraged proper legal review without dismissing the concern, respected the constraint if real, and planted a future conversation. This builds trust." },
      { text: "Exclusivity clauses in delivery contracts are rarely enforceable — it's worth pushing back.", correct: false,
        feedback: "Casting doubt on their contract's enforceability sounds like you're trying to get them to ignore it." },
      { text: "When does the contract expire? I'll reach out then.", correct: false,
        feedback: "Good to know, but encourage them to review the exact clause first — not all exclusivity terms are as broad as the owner thinks." },
      { text: "Multi-platform agreements are very common — I'd be surprised if it covers Uber Eats specifically.", correct: false,
        feedback: "Speculating that their contract doesn't mean what they think overreaches. Encourage proper legal review." },
    ],
  },
  ch25: {
    objection: "I need to understand the full fee breakdown. Don't just give me a percentage.",
    responses: [
      { text: "Absolutely — here's the full breakdown: the restaurant commission is on the subtotal of the food items. Delivery fees, service fees, and tips all go to the courier and platform separately — none of that comes out of your restaurant commission. Your payout is: subtotal minus commission rate, deposited weekly. I can show you an example order with real numbers.", correct: true, technique: 'Full Transparency',
        feedback: "You gave the complete, specific breakdown rather than deflecting. Showing a sample order with real numbers is the clearest way to demonstrate you have nothing to hide." },
      { text: "The commission is the main fee — everything else is on the customer side.", correct: false,
        feedback: "Summarizing as 'main fee' when they asked for the full breakdown doesn't satisfy a detail-oriented question." },
      { text: "It's a straightforward percentage — most restaurants find it easy to model.", correct: false,
        feedback: "Simplifying when they've specifically asked for the breakdown signals you're not listening to their request." },
      { text: "I'll send you our fee structure document — it covers all the specifics.", correct: false,
        feedback: "They asked you to explain it, not email it to them. Answer directly." },
    ],
  },
  ch26: {
    objection: "I've heard stories of restaurants getting their accounts suspended without warning.",
    responses: [
      { text: "That does happen, and I'd rather be honest about when and why: accounts get suspended for order cancellation rates above a threshold, for food safety flags, or for confirmed fraud. If none of those apply to how you operate, your account is stable. I can also walk you through the warning and appeal process so you know what it looks like.", correct: true, technique: 'Honest Process Clarity',
        feedback: "You were honest that suspensions happen and gave the specific reasons. For a restaurant that operates with integrity, none of those triggers apply — and saying so directly is more reassuring than vague promises." },
      { text: "Suspensions are very rare and usually involve edge-case policy violations.", correct: false,
        feedback: "Dismissing the concern as rare without explaining the actual trigger conditions doesn't satisfy the question." },
      { text: "Our account management team is available to resolve any issues quickly.", correct: false,
        feedback: "Vague support availability doesn't address what causes suspensions or how to avoid them." },
      { text: "What have you heard about the suspension situations? I want to address the specific concern.", correct: false,
        feedback: "Good discovery but give the transparent answer first — what causes suspensions and how to avoid them." },
    ],
  },
  ch27: {
    objection: "My margins are thin. Any week with low delivery volume and I'm losing money on the setup.",
    responses: [
      { text: "There's no setup fee and no monthly fee — your cost on any week with zero orders is exactly zero. The commission only applies when you receive orders. So the downside risk of a slow week is zero lost dollars from us. The question is just whether the upside weeks outweigh the time investment.", correct: true, technique: 'Zero Downside Clarity',
        feedback: "You removed the downside risk completely by clarifying the commission-only model. No fixed costs means no loss on slow weeks — this changes the risk calculus entirely." },
      { text: "Delivery typically ramps up over the first few months — slow starts are normal.", correct: false,
        feedback: "Reassurance about ramp-up doesn't address the financial concern about low-volume periods." },
      { text: "We can start you with a short promotional period to drive early volume.", correct: false,
        feedback: "Promotional offers don't address the structural concern about thin margins. Clarify the zero-fixed-cost model first." },
      { text: "What would a minimum viable delivery volume look like for your margins?", correct: false,
        feedback: "Good question but only after they understand there are no fixed costs — otherwise the question implies there is a breakeven threshold to worry about." },
    ],
  },
  ch28: {
    objection: "We specialize in whole roasted meats. The portions don't work for single delivery orders.",
    responses: [
      { text: "You control exactly what's on your delivery menu — you don't have to list the whole roasted items at all. A lot of specialty meat restaurants list the sides, sandwiches, portion cuts, or appetizers on delivery. The signature offering stays in the restaurant; the deliverable items are chosen specifically because they travel and portion well.", correct: true, technique: 'Curated Delivery Menu',
        feedback: "You solved the portion problem by separating the delivery menu from the dine-in menu. The solution is real and practical — list what works for delivery, keep the rest exclusive to the dining room." },
      { text: "Portion sizes can always be adjusted for delivery — that's actually a common practice.", correct: false,
        feedback: "Suggesting they change their menu structure without understanding the context is presumptuous." },
      { text: "Half portions or sampler plates can work really well on delivery apps.", correct: false,
        feedback: "Specific product suggestions without understanding their menu puts you in the role of menu consultant before you've earned it." },
      { text: "What items from your menu do you think travel best?", correct: false,
        feedback: "Good question, but only after explaining the curated-menu approach so they know that's the strategy, not a compromise." },
    ],
  },
  ch29: {
    objection: "I don't want to deal with the operational headache of managing delivery alongside a full service.",
    responses: [
      { text: "The operational footprint is actually minimal: one tablet on your counter, delivery tickets print alongside your normal tickets, and you set the daily cap to whatever volume doesn't stress your team. You're not managing a fleet or a separate operation — just filling bags for orders that come in like any other.", correct: true, technique: 'Minimal Footprint Description',
        feedback: "You described the physical reality of delivery in a working restaurant: one tablet, same ticket format, configurable caps. This is more reassuring than any promise." },
      { text: "Most restaurants find delivery adds less complexity than they expected.", correct: false,
        feedback: "What others find doesn't tell them what to expect in their specific kitchen." },
      { text: "The onboarding team helps you build the right workflow — it's smoother than people think.", correct: false,
        feedback: "Vague promises of smooth integration don't describe what the day-to-day actually looks like." },
      { text: "What part of the operation worries you most — order intake, kitchen routing, or pickup?", correct: false,
        feedback: "Good discovery but describe the minimal footprint first so they have a mental model to react to." },
    ],
  },
  ch30: {
    objection: "Our food requires finishing touches at the table. Delivery ruins the presentation.",
    responses: [
      { text: "You're right that tableside finishing can't travel — and I'm not going to argue otherwise. What some restaurants in that position do is offer a delivery menu specifically for items that don't require finishing: specific dishes that are complete as-plated. The tableside experience stays exclusive to the dining room. Would it be useful to look at which of your items might fit that model?", correct: true, technique: 'Experience Separation',
        feedback: "You agreed with the core premise and proposed a solution: a separate delivery menu of items that are complete as-plated. This preserves the dining-room experience without abandoning delivery entirely." },
      { text: "Creative packaging can actually replicate a lot of the presentation experience.", correct: false,
        feedback: "Claiming packaging replicates a tableside finishing experience dismisses the chef's expertise and the actual quality difference." },
      { text: "Most delivery customers don't expect the same presentation as dine-in.", correct: false,
        feedback: "Lowering quality expectations for delivery customers isn't a compelling argument for a presentation-focused restaurant." },
      { text: "Which of your dishes don't require tableside finishing? That's probably your delivery menu.", correct: false,
        feedback: "Good question but only after the experience-separation approach has been proposed — otherwise it sounds like you're asking them to solve the problem themselves." },
    ],
  },
  ch31: {
    objection: "I'm not sure my kitchen can maintain quality standards at delivery volumes.",
    responses: [
      { text: "You set the volume limit. Start at 10 orders a day — that's one or two per hour over a service. At that level, quality control is identical to any other ticket. If you find the kitchen handles it well, you raise the cap. If not, you keep it where it is or pause entirely. You're always the one deciding how much volume makes sense.", correct: true, technique: 'Volume Calibration',
        feedback: "You turned 'I'm not sure' into a controllable experiment. Starting at low volume with full control removes the quality risk — they're not committing to high volume, just to finding out what works." },
      { text: "Quality control is something our operational guides specifically address.", correct: false,
        feedback: "Pointing to a guide doesn't address their confidence in their own kitchen's capacity." },
      { text: "Most kitchens adapt quickly to delivery volume — it becomes routine.", correct: false,
        feedback: "Generic reassurance about 'most kitchens' doesn't address their specific quality standard concerns." },
      { text: "What's your current max ticket volume during a rush? That'll tell me if delivery is a concern.", correct: false,
        feedback: "Good data to eventually have, but give them the volume control mechanism first." },
    ],
  },
  ch32: {
    objection: "I tried a two-week trial with another app and cancelled. Why would this be different?",
    responses: [
      { text: "What happened in those two weeks? I ask because two weeks is actually not long enough to see real performance on most platforms — the algorithm needs time to surface your listing. But if the issues were operational — bad orders, support problems, integration pain — those are different conversations and some I might have actual answers to.", correct: true, technique: 'Diagnostic Re-entry',
        feedback: "You identified that two weeks is too short to judge platform performance, while acknowledging that operational issues are a different and valid concern. This shows knowledge and honest calibration." },
      { text: "Two weeks is a very short window — performance usually doesn't show until month two or three.", correct: false,
        feedback: "True, but this alone doesn't address why they left or whether the issues are resolved." },
      { text: "We offer a longer, more supported launch process — it would be a different experience.", correct: false,
        feedback: "Vague 'different experience' claims don't address what specifically went wrong in the two-week trial." },
      { text: "Which platform did you try? That context would help me understand the comparison.", correct: false,
        feedback: "Competitor intel is useful but secondary. Find out what went wrong in the trial first." },
    ],
  },
  ch33: {
    objection: "Adding delivery means I need to update my menu in two places. That's a double workload.",
    responses: [
      { text: "We integrate directly with most major POS systems — menu updates sync automatically when you make them in your POS. If you're not on a supported system, there's also a direct API and a tablet menu editor that's a two-minute update. What system are you running?", correct: true, technique: 'Integration Solution',
        feedback: "You addressed the specific operational concern with integration first, then asked the qualifying question. Showing the sync option removes the 'double workload' concern directly." },
      { text: "Menu updates on our platform are quick — usually just a few minutes.", correct: false,
        feedback: "Even quick updates twice is still twice. Address the integration path that makes it once." },
      { text: "You'd only need to update both when you change items — that's probably not too often.", correct: false,
        feedback: "Minimizing the frequency doesn't eliminate the concern about dual management." },
      { text: "What POS system are you on? That would help me understand the integration options.", correct: false,
        feedback: "Good question, but pair it with the integration context first so you're not just gathering data." },
    ],
  },
  ch34: {
    objection: "We've worked hard to be a destination. I don't want us looking like a delivery shop.",
    responses: [
      { text: "Being a destination is worth protecting — I get that. Delivery doesn't change how you appear in person. Your listing has your own photos, descriptions, and branding — it looks like you, not a delivery shop. Some destination restaurants actually use delivery specifically to serve the people who can't get a reservation or can't make the trip.", correct: true, technique: 'Identity + Audience Separation',
        feedback: "You honored the destination identity and then reframed delivery as serving an entirely different use case — the customer who can't participate in the in-person experience — without touching the dine-in brand." },
      { text: "Being on delivery actually reinforces destination status — it creates exposure.", correct: false,
        feedback: "Claiming delivery helps their destination reputation before addressing the concern is dismissive." },
      { text: "Many destination restaurants are on delivery — it hasn't hurt their identity.", correct: false,
        feedback: "What others have done doesn't address their specific concern about their own positioning." },
      { text: "What specifically worries you about how the listing would look?", correct: false,
        feedback: "Good discovery but only after assuring them they have full control over their listing's presentation." },
    ],
  },
  ch35: {
    objection: "We're a members-only supper club. I don't see how a delivery app applies to us.",
    responses: [
      { text: "You're probably right — the core model doesn't fit a members-only, reservation-only format. I'm curious though: do you have prep or surplus on non-event nights? Some private dining operators use delivery specifically for those gaps. But if there's no opening, I'd rather acknowledge that than push you into something that doesn't make sense.", correct: true, technique: 'Honest Qualification',
        feedback: "You accepted the likely mismatch rather than forcing a fit, then asked the one qualifying question that might reveal an edge case. Honest and efficient." },
      { text: "Exclusivity can actually work on our platform — some members-only experiences do very well.", correct: false,
        feedback: "Forcing a fit that clearly doesn't exist creates friction and damages credibility." },
      { text: "You might be surprised by the overlap between your members and delivery app users.", correct: false,
        feedback: "Speculative overlap claims without data don't give them a real reason to consider delivery." },
      { text: "What does your off-night capacity look like?", correct: false,
        feedback: "Good question, but acknowledge the likely mismatch first before discovering the edge case." },
    ],
  },
  ch36: {
    objection: "We had a driver steal one of our orders last year. I don't trust the courier network.",
    responses: [
      { text: "That's a serious incident and a completely reasonable reason to be cautious. Here's how it works operationally: couriers are rated after every delivery, and accounts with theft flags get deactivated quickly. There's also a reimbursement process for confirmed stolen orders. It's not a zero-risk system, but there are real accountability mechanisms. Happy to walk you through them.", correct: true, technique: 'Accountability Transparency',
        feedback: "You acknowledged the incident as serious, explained the accountability mechanisms (ratings, deactivation, reimbursement), and were honest that it's not zero-risk. This is more credible than a promise of perfection." },
      { text: "Theft is extremely rare in our courier network — we have a very high bar for onboarding.", correct: false,
        feedback: "Citing low theft rates dismisses a real incident they experienced." },
      { text: "That sounds like an isolated incident — courier performance has improved significantly.", correct: false,
        feedback: "Calling their experience an isolated incident minimizes a genuine grievance." },
      { text: "Which platform did that happen on? I want to understand if there's a specific difference.", correct: false,
        feedback: "Asking which platform before addressing the trust concern sounds like you're trying to shift blame." },
    ],
  },
  ch37: {
    objection: "I've heard you change commission rates without much warning.",
    responses: [
      { text: "Rate changes do happen — I won't pretend the platform is static. When they occur, restaurant partners receive advance notice per the contract terms, and you always have the option to pause or end the partnership if the new rate doesn't work for your margins. I can show you the contract language on rate change notifications specifically.", correct: true, technique: 'Honest Contract Clarity',
        feedback: "You acknowledged that rate changes happen, explained the notification process, and offered to show the specific contract language. Honest and direct — this is more reassuring than denying rate changes occur." },
      { text: "Rate changes are rare and always communicated clearly — it's not something to worry about.", correct: false,
        feedback: "Downplaying something they've specifically heard about without addressing the contract terms feels evasive." },
      { text: "Our rates have been stable for the past two years.", correct: false,
        feedback: "Historical stability doesn't address the contractual question about what happens if rates do change." },
      { text: "What rate would you need to see to feel comfortable moving forward?", correct: false,
        feedback: "Jumping to rate negotiation without addressing the transparency concern puts you in the wrong order." },
    ],
  },
  ch38: {
    objection: "My accountant reviewed the platform terms and had concerns about the liability language.",
    responses: [
      { text: "Your accountant raising that is exactly what they should be doing. Can you tell me which specific sections they flagged? Most concerns I hear are around order error liability and data use, and I can walk through those specifically. If there are standard contract modifications we can accommodate, I want to know that before assuming there's a deal-breaker.", correct: true, technique: 'Specific Contract Review',
        feedback: "You validated the accountant's diligence and asked for the specific sections rather than defending the contract broadly. This shows you can engage with the actual details." },
      { text: "Our contract terms are very standard for the industry — most accountants are comfortable once they review fully.", correct: false,
        feedback: "Dismissing the accountant's concerns as a standard misread is condescending." },
      { text: "I can connect you with our legal team if there are contract questions.", correct: false,
        feedback: "Escalating to legal before finding out the specific concern creates delay and signals inflexibility." },
      { text: "What would the accountant need to see to feel comfortable moving forward?", correct: false,
        feedback: "Good question eventually, but ask what specifically they flagged first — not what they need to feel comfortable." },
    ],
  },
  ch39: {
    objection: "I don't want my restaurant appearing next to fast food places in your app.",
    responses: [
      { text: "You control your cuisine tags and category — you're not placed in a generic 'food' bucket. You can list yourself as Japanese, Ramen, Fine Casual, or whatever is most accurate. Customers filter by cuisine, rating, and price range — and at your price point, you'd appear in a completely different context than fast food. Want to see what the search results look like in your neighborhood right now?", correct: true, technique: 'Category Control',
        feedback: "You gave them direct control over categorization and explained how price range and cuisine filters segment the results. Offering to show the live search gives them something concrete to evaluate." },
      { text: "Most customers search by neighborhood and dish type, not broad category.", correct: false,
        feedback: "Search behavior doesn't address the categorization and positioning concern they raised." },
      { text: "Our platform has very strong representation from independent and upscale restaurants.", correct: false,
        feedback: "Platform composition claims don't explain how they'd be differentiated from fast food in search results." },
      { text: "What category would you want to appear in?", correct: false,
        feedback: "Good question, but first explain that they control the category and how filtering works." },
    ],
  },
  ch40: {
    objection: "I've been burned by tech companies before. I keep things simple and direct.",
    responses: [
      { text: "I respect that — and I'd rather earn your trust through specifics than promises. Here's what's simple about this: no setup fee, no monthly fee, commission only on orders received. You pause or stop anytime, no penalty. The contract is four pages. I can send it now so you can read the full thing before we talk further.", correct: true, technique: 'Simplicity Proof',
        feedback: "You responded to 'keep things simple' with a simple, factual summary and an offer to show the full contract immediately. No jargon, no spin — this is how you earn trust with someone who's been burned." },
      { text: "We're different from most tech companies — our model is very partner-friendly.", correct: false,
        feedback: "Claiming to be different from the category that burned them is exactly what every bad actor says." },
      { text: "I understand the hesitation — what specifically went wrong in the past?", correct: false,
        feedback: "Discovery is good, but give the simple, honest terms summary first so there's a reason to continue the conversation." },
      { text: "Our restaurant partners consistently rate us highly in partner satisfaction surveys.", correct: false,
        feedback: "Survey claims from a tech company are exactly the kind of thing someone who's been burned has heard before." },
    ],
  },

  // ── MERCADO DISTRICT — THE PITCH ─────────────────────────────────────────
  mx01: {
    objection: "Give me actual numbers. How much money would I make in the first month?",
    responses: [
      { text: "I'll give you two nearby comparables, not platform averages. A taqueria three blocks from here averaged $4,800 in month one. A similar restaurant on the east side did $2,100 with a slower launch. The spread depends on listing quality and promotions. I can show you both profiles so you see exactly what drove the difference.", correct: true, technique: 'Hyperlocal Data',
        feedback: "You gave specific, local, comparable numbers instead of platform-wide averages. Naming nearby restaurants with real results is far more credible than any statistic from a pitch deck." },
      { text: "On average, restaurants in your category earn between $1,500 and $8,000 in their first month.", correct: false,
        feedback: "Wide ranges with no local context feel evasive. Give specific nearby examples." },
      { text: "Revenue depends on many factors — I'd need to understand your setup to estimate accurately.", correct: false,
        feedback: "Hedging completely when asked for numbers looks like you don't have any real data." },
      { text: "What's your current monthly revenue? That would help me estimate the incremental upside.", correct: false,
        feedback: "Asking for their revenue before giving them your best data flips the order. Lead with what you know." },
    ],
  },
  mx02: {
    objection: "I need to understand exactly what I'm signing up for before I commit to anything.",
    responses: [
      { text: "That's exactly the right approach. Let me walk you through it in order: what goes live, what you control, what we handle, and the complete fee structure on a real order. I'll show you the contract terms before we get anywhere near a signature — no surprises.", correct: true, technique: 'Transparency Walk',
        feedback: "You validated their due diligence instinct and offered a structured, complete walkthrough. Mentioning contract terms proactively removes the 'hidden catch' anxiety." },
      { text: "It's pretty straightforward — most restaurants are up and running within a week.", correct: false,
        feedback: "Simplifying before they've asked for simplification dismisses a legitimate due-diligence request." },
      { text: "What specifically are you most concerned about? I can address those points first.", correct: false,
        feedback: "Good instinct, but offer the full walkthrough first so they see you have nothing to hide." },
      { text: "I'll send you our restaurant partner guide — it covers all the details.", correct: false,
        feedback: "Sending a document when they asked for a direct explanation signals you're not ready to answer questions." },
    ],
  },
  mx03: {
    objection: "How does Uber Eats compare to DoorDash honestly? Don't give me a sales answer.",
    responses: [
      { text: "Honest answer: DoorDash has higher national market share. Uber Eats' specific edge is the transportation app user — people in the Uber app for rides who see food. In dense urban areas that reaches a different customer than DoorDash does. For your neighborhood specifically, I can pull the delivery search volume comparison right now.", correct: true, technique: 'Competitive Honesty',
        feedback: "You gave a genuinely honest comparison — acknowledged DoorDash's national advantage — then offered the specific differentiator that matters. Honesty about a competitor's strength is more credible than dismissing them." },
      { text: "We're clearly the better platform for independent restaurants — our partner support is significantly stronger.", correct: false,
        feedback: "Self-serving claims without specifics don't constitute an honest comparison." },
      { text: "They're actually very similar — the main difference is just customer base size.", correct: false,
        feedback: "Glossing over the comparison when they asked for honesty comes across as evasive." },
      { text: "That depends on your restaurant type and neighborhood — it's hard to generalize.", correct: false,
        feedback: "Hedging when they specifically asked for an honest answer fails to give them what they asked for." },
    ],
  },
  mx04: {
    objection: "I've seen these projections before. The real numbers never match what you show me.",
    responses: [
      { text: "You're right to be skeptical of projections — they're usually best-case scenarios. I'd rather show you what restaurants near you actually did in months one through three, including the ones that underperformed. The honest story includes both. Can I pull up three comparables in your area right now?", correct: true, technique: 'Honest Comps',
        feedback: "You validated the skepticism completely and offered something better than projections: actual historical results from nearby restaurants, including underperformers. This is the only credible response to someone who's seen inflated forecasts." },
      { text: "Our projections are based on real data, not hypotheticals — they're actually quite conservative.", correct: false,
        feedback: "Defending the projections after someone said they never match reality creates a credibility fight you can't win." },
      { text: "What do you think would be a realistic number for your restaurant?", correct: false,
        feedback: "Asking them to set their own expectation before showing real data puts the burden in the wrong place." },
      { text: "The results depend heavily on how well the listing is optimized — most underperformance is solvable.", correct: false,
        feedback: "True but dismisses their concern about projection accuracy without offering real proof." },
    ],
  },
  mx05: {
    objection: "Walk me through the dashboard. I don't want to invest time in something I can't understand.",
    responses: [
      { text: "Happy to do that right now. The main view is four sections: today's orders, this week's revenue, your menu, and your ratings. You manage everything from there. Can I pull it up on my laptop and walk you through a real account? I can show you what a restaurant similar to yours sees on a typical Tuesday.", correct: true, technique: 'Live Demo',
        feedback: "You offered to show a real dashboard immediately rather than describing it. A live walkthrough on a comparable account is infinitely more persuasive than a deck or a verbal description." },
      { text: "The interface is very intuitive — most owners pick it up quickly with no training.", correct: false,
        feedback: "Claiming it's intuitive instead of showing them creates more doubt, not less." },
      { text: "Our onboarding team walks you through the dashboard during setup — you won't be alone.", correct: false,
        feedback: "Pointing to future support doesn't answer the concern about whether they can use it right now." },
      { text: "What functions do you most need to be able to do yourself?", correct: false,
        feedback: "Good discovery, but offer the live demo first — it will answer this question better than any verbal response could." },
    ],
  },
  mx06: {
    objection: "Show me a restaurant similar to mine that's actually doing well on your platform.",
    responses: [
      { text: "I can show you three within a mile of here — two Mexican casual and one taqueria. I'll pull up their public profiles so you can see their ratings, number of reviews, and estimated order volume. One of them started 8 months ago and is now in the top 20% for their neighborhood. Want to see the comparison now?", correct: true, technique: 'Peer Proof',
        feedback: "You gave specific, verifiable examples with proximity (within a mile), category match (Mexican), and a compelling data point (top 20% at 8 months). Offering to pull them up immediately is the key move." },
      { text: "We have hundreds of successful Mexican restaurants on the platform — you'd be in great company.", correct: false,
        feedback: "Aggregate success claims without a specific comparable example don't satisfy the 'show me' request." },
      { text: "I can send you some case studies from similar restaurant categories.", correct: false,
        feedback: "Sending materials when they asked to see something now creates friction and delay." },
      { text: "What would 'doing well' look like for your restaurant specifically?", correct: false,
        feedback: "Good question eventually, but show the specific examples first — they'll naturally reveal what good looks like." },
    ],
  },
  mx07: {
    objection: "What happens if an order goes wrong? Who covers the cost?",
    responses: [
      { text: "If it's a delivery issue — late arrival, damaged food caused by the courier — Uber Eats covers the refund. If it's a kitchen error — wrong item, missing component — that comes from your account. For disputed cases, there's a review process. The refund rates on our platform are around 1–2% of orders for most restaurants with accurate menus. Want me to walk you through the dispute process specifically?", correct: true, technique: 'Error Accountability Clarity',
        feedback: "You gave a clear, honest breakdown of who covers what and why — plus real refund rate context. This shows you've done this before and have nothing to hide." },
      { text: "Most order issues are resolved quickly by our support team — it's rare for partners to be impacted financially.", correct: false,
        feedback: "Vague reassurance doesn't answer the specific question about who covers the cost." },
      { text: "We have a robust dispute process that protects restaurant partners from unfair claims.", correct: false,
        feedback: "'Robust' means nothing without explaining the actual process." },
      { text: "What kinds of order issues are you most concerned about?", correct: false,
        feedback: "Good discovery eventually, but give the accountability breakdown first so they know the baseline before going deeper." },
    ],
  },
  mx08: {
    objection: "What marketing tools do you actually give me? I want to grow, not just be listed.",
    responses: [
      { text: "There are three main tools: Sponsored Listings, which put your restaurant at the top of search in your area; Promotions, where you run deals like 20% off that Uber Eats co-funds up to a limit; and Happy Hour pricing for off-peak windows. I can walk you through how each one works and what the typical cost and return looks like for a restaurant your size.", correct: true, technique: 'Tool Specificity',
        feedback: "You named three specific, real tools with brief descriptions and offered to show the cost/return for each. This is exactly what someone who wants to grow needs to hear." },
      { text: "We have a full marketing suite that gives you visibility beyond just being listed.", correct: false,
        feedback: "Vague 'marketing suite' language doesn't tell them anything specific about what they'd actually use." },
      { text: "Marketing tools depend on your tier — I'd need to confirm what's available at your level.", correct: false,
        feedback: "Hedging on available tools creates uncertainty when you should be showing confidence." },
      { text: "What kind of growth are you looking for — new customers, repeat orders, or both?", correct: false,
        feedback: "Good discovery question, but name the actual tools first so the discovery conversation has a foundation." },
    ],
  },
  mx09: {
    objection: "I want to understand the commission structure completely before we go any further.",
    responses: [
      { text: "Here's the full breakdown: the commission applies only to the food subtotal — not the delivery fee, service fee, or tip, which go to the courier and platform separately. You're paid the subtotal minus the commission rate, deposited weekly. Let me show you a real example order so the math is clear before we go further.", correct: true, technique: 'Complete Fee Transparency',
        feedback: "You gave the complete, specific breakdown and offered to show a real order. No hedging, no deflecting — this is exactly the right response to a due-diligence question." },
      { text: "The commission is the main cost — everything else is straightforward.", correct: false,
        feedback: "Summarizing as 'main cost' when they asked for the full breakdown dismisses their request." },
      { text: "I'll send you our fee structure document — it covers all the specifics in detail.", correct: false,
        feedback: "They asked you to explain it now, not email it to them." },
      { text: "The commission varies by tier — I'd want to make sure we're looking at the right rate for your situation.", correct: false,
        feedback: "Introducing tiers before giving the basic breakdown creates complexity instead of clarity." },
    ],
  },
  mx10: {
    objection: "If your platform is so good, why aren't all the restaurants in my neighborhood already on it?",
    responses: [
      { text: "Fair question. Some have tried and didn't optimize well — a bad photo setup, wrong pricing, no promotions. Some haven't been approached yet. And some genuinely decided it didn't fit their model, which is a legitimate choice. What I can tell you is what the restaurants that are on it are actually doing in your area. Want to see that?", correct: true, technique: 'Honest Landscape',
        feedback: "You gave a genuine, multi-part answer that acknowledged real reasons (not just 'they don't know yet'), and redirected to verifiable evidence. Honest and forward-moving." },
      { text: "Many restaurants in your neighborhood are on the platform — adoption is growing quickly.", correct: false,
        feedback: "Vague adoption claims don't answer the specific question about why some aren't on it." },
      { text: "Not every restaurant is a fit — we're selective about who we partner with.", correct: false,
        feedback: "Implying exclusivity when you're doing sales outreach rings false." },
      { text: "That's actually a great opportunity for you — you'd get first-mover advantage in your area.", correct: false,
        feedback: "First-mover spin doesn't answer the underlying question about why others haven't joined." },
    ],
  },
  mx11: {
    objection: "What's the realistic timeline from signing to my first order?",
    responses: [
      { text: "Three to five business days for account approval and menu build by our team. You review and approve the menu on day five. Go-live is typically day six or seven. Most restaurants receive their first order within 24 hours of going live, though the first week is usually slower as the algorithm starts surfacing your listing.", correct: true, technique: 'Timeline Specificity',
        feedback: "You gave a specific, realistic timeline with a candid note that week one is slower. This is honest and helps them set accurate expectations." },
      { text: "Most restaurants are live within a week — it's a fast process.", correct: false,
        feedback: "Vague 'within a week' doesn't answer when they'd actually see their first order." },
      { text: "The timeline depends on how quickly you can review your menu, so it's partially in your hands.", correct: false,
        feedback: "Putting timeline responsibility on them before explaining what the process actually looks like creates unnecessary friction." },
      { text: "We can expedite the process if timing is important to you.", correct: false,
        feedback: "Offering expedited service implies the normal timeline is slow, and doesn't give them the real answer." },
    ],
  },
  mx12: {
    objection: "How does the algorithm decide who appears first in search? Do smaller restaurants get buried?",
    responses: [
      { text: "The main ranking factors are: distance from the customer, estimated delivery time, rating, and whether you have an active promotion. Size doesn't factor in directly. A well-rated, nearby restaurant with a promotion will outrank a larger chain that's farther away. The most effective lever for a new restaurant is running a modest opening promotion to accelerate early ratings.", correct: true, technique: 'Algorithm Transparency',
        feedback: "You explained the actual ranking factors honestly and gave the actionable insight: opening promotions accelerate the ratings that drive rank. This is genuinely useful information." },
      { text: "Our algorithm is designed to surface the best match for the customer, not favor big brands.", correct: false,
        feedback: "Vague 'best match' framing doesn't explain what factors actually determine ranking." },
      { text: "Smaller restaurants often do very well because they offer unique food at competitive prices.", correct: false,
        feedback: "Anecdotal success stories don't explain how the ranking system works." },
      { text: "What's your current average rating on other platforms or Google?", correct: false,
        feedback: "Good discovery but only after explaining the ranking factors — otherwise the question has no context." },
    ],
  },
  mx13: {
    objection: "I want to see what my actual listing would look like before I commit.",
    responses: [
      { text: "Absolutely — I can build a draft listing right now using your menu and some photos from your Google profile as placeholders. You'd approve every word and image before anything goes live. Want to do a 15-minute draft together so you can actually see it?", correct: true, technique: 'Draft Preview',
        feedback: "You offered to create an actual preview — not a mockup from a deck — using their real menu and photos. This gives them something tangible to evaluate before any commitment." },
      { text: "I can show you examples of similar restaurants' listings so you have a sense of what it looks like.", correct: false,
        feedback: "Other restaurants' listings aren't their listing. Build a real draft for them." },
      { text: "The listing is fully customizable — you control everything about how it appears.", correct: false,
        feedback: "Telling them they have control doesn't show them what their listing would actually look like." },
      { text: "Once you sign, our onboarding team builds the listing with you — it won't look like anything until then.", correct: false,
        feedback: "Making them sign before they can see their listing is exactly the objection they raised. Solve it before the signature." },
    ],
  },
  mx14: {
    objection: "I want to see real customer demand data for my specific neighborhood, not citywide stats.",
    responses: [
      { text: "I can pull your neighborhood's delivery search volume and cuisine demand data right now. In your zip code, Mexican food is the third most searched cuisine on Uber Eats, and the delivery gap — demand versus available restaurants — is significant. Let me show you the actual breakdown.", correct: true, technique: 'Hyperlocal Demand Data',
        feedback: "You offered to show neighborhood-specific data immediately. Leading with the cuisine ranking and delivery gap in their specific area is exactly what they asked for." },
      { text: "Delivery demand in your area is strong — it's a high-growth neighborhood for us.", correct: false,
        feedback: "Vague 'strong demand' claims without specific local data don't satisfy a request for neighborhood-specific numbers." },
      { text: "Our data shows consistent demand across the city, with your area performing above average.", correct: false,
        feedback: "Still too broad. They asked for neighborhood data specifically." },
      { text: "What level of monthly delivery volume would make this worth it for you?", correct: false,
        feedback: "Good question eventually, but show the demand data first so the conversation about thresholds has a foundation." },
    ],
  },
  mx15: {
    objection: "Tell me one thing about Uber Eats that I couldn't just Google.",
    responses: [
      { text: "Here's something you can't Google: right now, in your specific delivery zone, the average wait time for a Mexican food order is 34 minutes, and the restaurants ranked one through three are doing about 45 orders a day. The number four slot is open and a new restaurant with a strong opening promotion typically fills it within 60 days. That's your window.", correct: true, technique: 'Proprietary Insight',
        feedback: "You gave genuinely proprietary, local, actionable information that can only come from inside the platform. This is precisely what they asked for and it creates urgency without manufactured pressure." },
      { text: "Our app is ranked number one in customer satisfaction for delivery in multiple cities.", correct: false,
        feedback: "Public ratings are Googleable. This doesn't answer the question." },
      { text: "Our driver network in your area is larger than any other platform right now.", correct: false,
        feedback: "Driver network size is a claim any platform makes. Still not proprietary." },
      { text: "What would be most useful to know — customer demographics, order volumes, or competitor info?", correct: false,
        feedback: "Good discovery but don't ask — just lead with your most compelling proprietary insight." },
    ],
  },
  mx16: {
    objection: "What does your onboarding support actually look like? I don't want to be on my own.",
    responses: [
      { text: "Here's the exact process: a dedicated onboarding specialist builds your menu from your existing materials, calls you for a 20-minute review, and stays available by phone for the first 30 days. After that, there's a partner support line specifically for restaurant partners — not the consumer queue. I'll also be your direct contact for the first 90 days.", correct: true, technique: 'Concrete Support Structure',
        feedback: "You described the actual support structure in specific, sequential detail — specialist, timeline, dedicated line, personal contact. This is the opposite of 'you won't be alone' without specifics." },
      { text: "Our onboarding team is very responsive — most partners feel supported throughout the process.", correct: false,
        feedback: "Vague reassurance about responsiveness doesn't describe what support actually looks like." },
      { text: "You'll have access to our partner resources hub and support line 24/7.", correct: false,
        feedback: "Self-service resources aren't the same as the hands-on support they're asking about." },
      { text: "What specifically are you worried about handling on your own?", correct: false,
        feedback: "Good discovery but describe the actual support structure first — then they can ask about what's still unclear." },
    ],
  },
  mx17: {
    objection: "What's your plan when delivery volume is slow? How do you help restaurants that are underperforming?",
    responses: [
      { text: "There are three levers: Sponsored Listings to boost search visibility, promotional pricing that Uber Eats co-funds to drive volume, and menu optimization — which is the most underrated one. About 60% of underperformance I see comes from weak photos or incomplete descriptions. When volume is low, I'd look at all three with you and identify the biggest lever for your specific situation.", correct: true, technique: 'Performance Recovery Plan',
        feedback: "You gave a concrete, three-lever framework for addressing underperformance and pointed to the most common real cause. This shows operational knowledge and genuine partnership intent." },
      { text: "We have a partner success team that reaches out to restaurants that aren't hitting their targets.", correct: false,
        feedback: "Pointing to a reactive team doesn't show what the plan actually looks like." },
      { text: "Performance usually improves as your rating builds — early months are always slower.", correct: false,
        feedback: "Passive reassurance about time doesn't address the question about what happens when it's slow." },
      { text: "What does your current monthly revenue look like? That would help me understand what 'underperforming' means for your situation.", correct: false,
        feedback: "Good data eventually, but give the performance-recovery framework first before asking for their baseline numbers." },
    ],
  },
  mx18: {
    objection: "I need to know what my exit options are if this doesn't work out.",
    responses: [
      { text: "You can pause or stop the partnership anytime through the dashboard — no cancellation fee, no penalty, no notice period required. There's no long-term contract. The only thing that doesn't disappear are your reviews, which stay on the platform if you ever come back. You're never locked in.", correct: true, technique: 'Exit Clarity',
        feedback: "You gave a complete, specific answer about exit options with zero hedging. Proactively offering the no-lock-in information removes the last major barrier for someone doing due diligence." },
      { text: "The contract terms are flexible — I'd want to walk you through the specifics before making claims.", correct: false,
        feedback: "Hedging on exit terms when they're actually quite favorable creates unnecessary doubt." },
      { text: "Most restaurants that start with us don't want to leave once they see the results.", correct: false,
        feedback: "Implying they probably won't want to exit doesn't answer their question about what happens if they do." },
      { text: "What would make you want to exit? I want to understand what success looks like for you.", correct: false,
        feedback: "Good question eventually, but answer the exit options question directly first." },
    ],
  },
  mx19: {
    objection: "What are the main reasons restaurants fail on your platform? I want to know the risks.",
    responses: [
      { text: "The three most common failure modes: one, weak listing — no professional photos, thin descriptions, missing items. Two, same pricing as dine-in without accounting for the commission, which kills margins. Three, no opening promotion to build early ratings. All three are preventable. I'll show you how to avoid each one during your setup.", correct: true, technique: 'Failure Mode Transparency',
        feedback: "You gave an honest, specific answer to a risk question without hedging. Naming the three common failure modes and committing to help avoid them is more reassuring than claiming there are no risks." },
      { text: "Most restaurants don't fail — our platform success rates are very high.", correct: false,
        feedback: "They asked about risks, not success rates. Dismissing the question undermines trust." },
      { text: "Failure usually comes from lack of commitment to the platform — you'd have to decide if it's a priority.", correct: false,
        feedback: "Putting the failure burden on them before they've even started creates a defensive dynamic." },
      { text: "What does failure mean to you in this context — low orders, negative ROI, or something else?", correct: false,
        feedback: "Good question but only after answering the actual question about common failure modes honestly." },
    ],
  },
  mx20: {
    objection: "My business partner wants a full cost-benefit analysis before we move forward.",
    responses: [
      { text: "That's exactly what I can build. Give me the specific inputs — your average ticket size, current weekly cover count, and food cost percentage — and I'll put together a one-page model that shows best case, average case, and break-even scenario. We can present it to both of you together if that helps.", correct: true, technique: 'Joint Analysis Offer',
        feedback: "You took ownership of building the analysis rather than just offering to send materials. Asking for specific inputs and offering a joint presentation shows you're ready to do real work." },
      { text: "I can send you our standard ROI model — it's a good starting point for that conversation.", correct: false,
        feedback: "A generic ROI model doesn't replace a restaurant-specific analysis that would satisfy a business partner's due diligence." },
      { text: "Most cost-benefit analyses for restaurants our size look very favorable — the numbers work.", correct: false,
        feedback: "Claiming the numbers work without doing the math for their specific restaurant isn't a cost-benefit analysis." },
      { text: "Can I join the call with your partner? I can address their questions directly.", correct: false,
        feedback: "Jumping to a joint call before building the analysis doesn't give the partner anything to review." },
    ],
  },
  mx21: {
    objection: "What does success actually look like at 6 months? Give me a realistic picture.",
    responses: [
      { text: "For a restaurant at your price point and location, realistic six-month benchmarks are: 25–40 orders per week, 4.5+ average rating, and somewhere between $3,000–$6,000 monthly delivery revenue. The outliers on both ends are usually explained by listing quality and promotional activity. I can show you a restaurant that started from scratch and hit these numbers in your neighborhood.", correct: true, technique: 'Realistic Benchmarking',
        feedback: "You gave a specific, calibrated range with an honest explanation of what causes variation. Offering to show a real local example anchors the benchmark in something verifiable." },
      { text: "Success at six months looks very different for every restaurant — it depends on many variables.", correct: false,
        feedback: "Hedging completely when asked for a realistic picture fails to give them what they need to plan." },
      { text: "Most restaurants see strong results in the first six months — adoption curves are usually positive.", correct: false,
        feedback: "Vague positivity doesn't give them a number to evaluate against their goals." },
      { text: "What does success look like from your perspective? I want to make sure we're aligned on goals.", correct: false,
        feedback: "Good question eventually, but give your honest benchmark first — then calibrate to their specific goals." },
    ],
  },
  mx22: {
    objection: "Walk me through exactly what happens to my payout. When do I get paid and how?",
    responses: [
      { text: "Payouts happen weekly, every Tuesday, via direct deposit to your business bank account. The amount is: total food subtotal across all orders for the week, minus the commission rate, minus any refunds issued that week. You see the full breakdown in the dashboard — every order, every deduction, transparent. Most restaurants see the first payout 10–14 days after going live.", correct: true, technique: 'Payout Specificity',
        feedback: "You gave a specific, complete answer: day of week, method, calculation formula, first payout timing. This is the detail that gives a careful operator confidence they're not walking into a black box." },
      { text: "You're paid weekly by direct deposit — it's a straightforward process.", correct: false,
        feedback: "Vague summary doesn't address the 'how is it calculated' component of the question." },
      { text: "Our finance team can walk you through the exact payout mechanics in detail.", correct: false,
        feedback: "Deferring to the finance team on a standard question signals you don't know the answer." },
      { text: "What payment method works best for your business? We have a few options.", correct: false,
        feedback: "Asking about payment preference before explaining how payouts work puts the cart before the horse." },
    ],
  },
  mx23: {
    objection: "What happens to my customer data? Do you sell it or use it in ways I'd object to?",
    responses: [
      { text: "Your restaurant's order data — volume, item performance, peak times — is yours and used only to optimize your listing. Uber Eats doesn't share restaurant-specific data with competitors. Customer contact information is not shared with you — it's anonymized — but that's the same with every platform. I can show you the data use section of the contract specifically if you'd like.", correct: true, technique: 'Data Use Clarity',
        feedback: "You gave an honest, specific answer including the one thing they might not like (customer contacts are anonymized) and proactively offered to show the contract language. Honesty about limits builds trust." },
      { text: "Your data is completely protected — we have industry-leading privacy practices.", correct: false,
        feedback: "Vague 'industry-leading' claims don't address what specifically happens to their data." },
      { text: "All data use is covered in the contract — I'd encourage you to review that section.", correct: false,
        feedback: "Deflecting to the contract without summarizing the key points doesn't answer their question." },
      { text: "What specific data use concerns you most? I want to make sure I address the right thing.", correct: false,
        feedback: "Good discovery instinct, but give the honest summary first before probing further." },
    ],
  },
  mx24: {
    objection: "I've heard that bigger restaurants get better placement in the algorithm. Is that true?",
    responses: [
      { text: "Size doesn't factor into the algorithm directly. Ranking is based on distance, delivery time, rating, and active promotions. A highly-rated, nearby independent restaurant with a promotion will outrank a chain that's farther away. The chain advantage, if there is one, comes from having more reviews faster — but that's something a new restaurant can accelerate with an opening promotion.", correct: true, technique: 'Algorithm Myth Correction',
        feedback: "You corrected the misconception directly, explained the real factors, and turned the concern into an actionable insight: run an opening promotion to accelerate reviews." },
      { text: "We don't favor big restaurants — our algorithm is designed to surface the best match for the customer.", correct: false,
        feedback: "Vague 'best match' framing doesn't explain how ranking actually works." },
      { text: "Many independent restaurants outperform chains on our platform — size is not destiny.", correct: false,
        feedback: "Anecdotal success stories don't correct the misconception about algorithm mechanics." },
      { text: "What made you hear that? I want to address the specific concern.", correct: false,
        feedback: "Good curiosity, but correct the misconception first before exploring where it came from." },
    ],
  },
  mx25: {
    objection: "What promotions are available and what do they actually cost me?",
    responses: [
      { text: "Three main promotion types. First, Percentage Off deals — you fund the discount, but Uber Eats caps the maximum you pay per promotion run and co-funds a portion. Second, Free Item offers — typically you fund the cost of the item. Third, Sponsored Listing placement — a bid-based system similar to Google Ads; you set a daily budget. I can show you what each costs on a typical restaurant your size in your area.", correct: true, technique: 'Promotion Cost Breakdown',
        feedback: "You named three specific promotion types with honest cost framing and offered to show real numbers for their restaurant size and area. This is the specific answer a business-minded owner needs." },
      { text: "We have a full marketing toolkit — the costs are very reasonable for what you get.", correct: false,
        feedback: "Vague 'reasonable costs' language doesn't help them evaluate whether promotions fit their margin." },
      { text: "Promotions are optional — you can start without them and add them later.", correct: false,
        feedback: "Telling them promotions are optional when they asked about cost doesn't answer the question." },
      { text: "What kind of promotion would you want to run first?", correct: false,
        feedback: "Good discovery but give the actual cost structure first so they know what each type would cost before deciding." },
    ],
  },
  mx26: {
    objection: "I want to understand what my listing looks like to a customer before I decide.",
    responses: [
      { text: "I can show you right now — here's what your restaurant looks like from the customer side on our app. I'll pull up a comparable restaurant so you can see the search result, the menu view, and the checkout page. Then I'll show you how you'd customize each section — your photos, descriptions, tags, and featured items.", correct: true, technique: 'Customer-Side Preview',
        feedback: "You offered to show the actual customer experience immediately using a comparable restaurant. This is far more persuasive than describing how the listing looks." },
      { text: "I can send you screenshots of sample listings so you get the idea.", correct: false,
        feedback: "Screenshots are passive. Show them live on your device using a real comparable restaurant." },
      { text: "The listing is fully customizable — you control everything about how it appears to customers.", correct: false,
        feedback: "Telling them they have control doesn't show them what they'd actually be looking at." },
      { text: "Once we start the setup process, you'll be able to review the listing before it goes live.", correct: false,
        feedback: "Making them start the process before they can see what they're committing to is exactly the concern they raised." },
    ],
  },
  mx27: {
    objection: "My accountant asked how this affects our tax situation. Any complications I should know about?",
    responses: [
      { text: "The key tax point: your Uber Eats revenue is ordinary business income, same as any other sale. Payouts are reported via 1099-K if you exceed the threshold. The commission is a deductible business expense — like any distribution or marketing cost. Your accountant will want to see the payout summaries for the year, which you export directly from the dashboard. Happy to show where that report lives.", correct: true, technique: 'Tax Clarity',
        feedback: "You gave the relevant tax information clearly — income treatment, 1099 threshold, deductibility of commissions — and pointed to where the accountant gets the data they need. Practical and confident." },
      { text: "Tax implications are specific to your situation — I'd recommend asking your accountant directly.", correct: false,
        feedback: "Deferring entirely on a standard business tax question you clearly have an answer to signals lack of knowledge." },
      { text: "Our partner tax guide covers all the common questions — I can send it.", correct: false,
        feedback: "Sending a document when they asked a direct question delays the conversation unnecessarily." },
      { text: "What's your accountant's specific concern? I want to make sure I'm addressing the right thing.", correct: false,
        feedback: "Good discovery but give the standard tax overview first — it will likely answer the concern." },
    ],
  },
  mx28: {
    objection: "What does day one actually look like? Walk me through launch day.",
    responses: [
      { text: "Launch day: your listing goes live in the app around 9am. For the first few hours, you'll see limited orders while the algorithm surfaces you. Your first order usually comes within 2–6 hours. The tablet will notify you with a sound — you have 10 minutes to confirm before the order auto-cancels. Your onboarding contact is available by phone all day. Most restaurants end day one with 2–5 orders.", correct: true, technique: 'Day-One Walkthrough',
        feedback: "You gave a specific, sequential, realistic picture of launch day including the confirmation window and the first-order timeline. This is exactly what a detail-oriented owner needs to feel prepared." },
      { text: "Launch day is very exciting — your listing goes live and orders start coming in.", correct: false,
        feedback: "Vague excitement doesn't give them the operational picture they asked for." },
      { text: "The onboarding team will walk you through everything on launch day — you won't be on your own.", correct: false,
        feedback: "Pointing to support instead of describing the actual day doesn't answer the question." },
      { text: "What are you most concerned about on launch day? I want to make sure you're prepared.", correct: false,
        feedback: "Good discovery but give the concrete day-one walkthrough first — it will surface real concerns naturally." },
    ],
  },
  mx29: {
    objection: "I'm comparing you to one other platform right now. Make the case for why I should sign with Uber Eats first.",
    responses: [
      { text: "Here's my honest case: the Uber transportation user sees your restaurant while booking a ride — that's a customer other platforms don't reach. In your specific neighborhood, our delivery search volume is about 40% higher than the next platform. And the onboarding support I'm offering is hands-on for your first 90 days. What's the other platform offering that's making this a close call?", correct: true, technique: 'Honest Competitive Close',
        feedback: "You gave three specific, concrete reasons and then asked a discovery question that reframes the comparison as a conversation. This is confident without being dismissive of the competition." },
      { text: "We're simply the better platform for independent restaurants — our data supports that.", correct: false,
        feedback: "Self-referential data claims don't give them a reason to choose you over a specific alternative." },
      { text: "Both platforms can work well — the question is which one your customers are using.", correct: false,
        feedback: "Equivocating when they asked for a direct pitch doesn't give them a reason to sign with you." },
      { text: "What is the other platform offering? I want to make sure I'm competing on the right things.", correct: false,
        feedback: "Good discovery, but make your affirmative case first before asking what you're competing against." },
    ],
  },
  mx30: {
    objection: "How do I know this won't be a distraction from running a great restaurant?",
    responses: [
      { text: "That's the right concern to raise. Here's the honest answer: the first week requires some attention — reviewing the menu build, learning the tablet workflow. After that, it runs in the background. Most owners I work with check the dashboard once a day and treat delivery like an additional prep station. The operational ask is small once it's set up.", correct: true, technique: 'Realistic Operational Picture',
        feedback: "You validated the concern, gave an honest picture of week-one versus steady-state, and anchored the comparison in a familiar frame (additional prep station). Practical and honest." },
      { text: "Our platform is designed to run with minimal management — it won't distract you.", correct: false,
        feedback: "Claiming minimal management without describing what management actually looks like is vague." },
      { text: "Most restaurant owners find it becomes routine very quickly.", correct: false,
        feedback: "What others find doesn't give them a mental model for their own operation." },
      { text: "What parts of your current operation are already stretched? I want to understand your capacity.", correct: false,
        feedback: "Good discovery but give the realistic operational picture first so the discovery has context." },
    ],
  },
  mx31: {
    objection: "I want to see the contract before we go any further.",
    responses: [
      { text: "Absolutely — here it is right now. It's four pages. The key sections are: fee structure on page one, data use on page two, and exit terms on page three. I'll highlight the sections that most restaurant owners want to focus on, and you can ask questions on any part before we move forward.", correct: true, technique: 'Contract Transparency',
        feedback: "You produced the contract immediately, noted it's short (four pages), and highlighted the key sections proactively. This removes the 'what are they hiding' concern instantly." },
      { text: "Of course — I'll send it over after our conversation so you have time to review.", correct: false,
        feedback: "Making them wait until after the conversation when they asked to see it now creates friction." },
      { text: "The contract is very standard for the industry — most partners sign without modifications.", correct: false,
        feedback: "Telling them most people don't scrutinize the contract to someone who's asking to scrutinize it is dismissive." },
      { text: "What specific terms are you concerned about? I can address those sections first.", correct: false,
        feedback: "They haven't read the contract yet — they can't have specific concerns. Show it first." },
    ],
  },
  mx32: {
    objection: "What guarantees do you offer if my results are below expectations?",
    responses: [
      { text: "There's no revenue guarantee — I want to be upfront about that. What I can commit to: if your performance is below comparable restaurants after 60 days, I'll audit your listing with you, identify the specific gaps, and run a co-funded promotion to drive volume. And you can pause or stop anytime without cost. The guarantee isn't a revenue floor; it's that I'll work the problem with you.", correct: true, technique: 'Honest Partnership Commitment',
        feedback: "You were upfront that there's no revenue guarantee, then explained what you do offer: a concrete action plan if performance is low, plus a zero-cost exit. Honesty about limits paired with a genuine commitment is more credible than a fake guarantee." },
      { text: "We're confident you'll see results — our success rates are very high.", correct: false,
        feedback: "Implied guarantees through confidence claims don't give them a concrete answer." },
      { text: "Guarantees depend on a lot of factors on both sides — I wouldn't want to make a commitment I can't keep.", correct: false,
        feedback: "Hedging entirely when asked about guarantees sounds evasive." },
      { text: "What would the guarantee need to cover for you to feel comfortable moving forward?", correct: false,
        feedback: "Good question but give your honest answer first — then refine based on what they actually need." },
    ],
  },
  mx33: {
    objection: "I want to understand the refund process — who decides when a customer gets a refund?",
    responses: [
      { text: "Uber Eats customer support makes the initial call based on the complaint type and photo evidence. You're notified of every refund and can dispute ones where you believe the complaint is unfair — there's a formal dispute process. You can also see your refund rate in the dashboard. Most restaurants with accurate menus and consistent quality have refund rates under 2%.", correct: true, technique: 'Refund Process Transparency',
        feedback: "You explained the decision process, the dispute mechanism, and the benchmark refund rate. Giving them the dispute process specifically shows you're not hiding that refunds happen." },
      { text: "Our refund process is fair and transparent — we protect restaurant partners from unfair claims.", correct: false,
        feedback: "Vague 'fair' claims don't explain who decides and what the dispute process looks like." },
      { text: "Refunds are rare for well-run restaurants — most partners don't have to worry about this.", correct: false,
        feedback: "Reassurance about rarity doesn't answer the question about how the process actually works." },
      { text: "What specific refund scenario are you worried about?", correct: false,
        feedback: "Good discovery eventually, but explain the process first — the concern might become obvious once they understand it." },
    ],
  },
  mx34: {
    objection: "I run a ghost kitchen. Does the platform work differently for us?",
    responses: [
      { text: "Ghost kitchens have a few specific advantages: no dining room to protect, usually higher delivery volumes, and you can list multiple brands from one kitchen if you have them. The platform works the same mechanically, but your listing strategy is different — since customers can't see the physical space, photos and descriptions carry more weight. I work with a few ghost kitchens in the area and can connect you with one if you want a real reference.", correct: true, technique: 'Ghost Kitchen Specific',
        feedback: "You gave ghost-kitchen-specific insights (multiple brands, higher volume, photo importance) and offered a direct reference. This shows you know the segment rather than just adapting a generic pitch." },
      { text: "Ghost kitchens work the same way as any other restaurant on our platform.", correct: false,
        feedback: "Ignoring the specific context of a ghost kitchen misses a real opportunity to show relevant expertise." },
      { text: "Ghost kitchens are a growing category for us — we're actively supporting that segment.", correct: false,
        feedback: "Vague category-level support doesn't give them the specific information they need." },
      { text: "What brands are you running out of the kitchen? That would help me give you a specific answer.", correct: false,
        feedback: "Good discovery but give the ghost kitchen specific context first, then explore their setup." },
    ],
  },
  mx35: {
    objection: "I need to see KPIs and reporting before I agree to anything. I run this business by numbers.",
    responses: [
      { text: "That's exactly how you should be running it. The dashboard tracks: daily and weekly order volume, average order value, rating trend, refund rate, and revenue by item. You can export weekly summaries as a CSV. There's also a monthly performance email that benchmarks you against similar restaurants in your area. Let me show you the reporting view right now on a live account.", correct: true, technique: 'Data Dashboard Demo',
        feedback: "You named specific KPIs available, mentioned the export function, and offered a live demonstration. For a numbers-driven owner, showing the reporting capability is the most persuasive thing you can do." },
      { text: "We have robust reporting tools — most operators find them very comprehensive.", correct: false,
        feedback: "Vague robustness claims don't give a numbers-driven owner the specific metrics they need to evaluate." },
      { text: "The dashboard has everything you'd want to track — it's quite detailed.", correct: false,
        feedback: "Claiming it has 'everything' without naming what's there doesn't satisfy a specific request." },
      { text: "What KPIs matter most to you? I want to make sure we're tracking the right things.", correct: false,
        feedback: "Good discovery but show what's available first — a numbers person will tell you what's missing when they see the real thing." },
    ],
  },
  mx36: {
    objection: "I want to understand the full P&L impact, not just revenue. Show me the real economics.",
    responses: [
      { text: "Let's do it with real numbers. Give me your average ticket, food cost percentage, and current weekly orders. I'll model: gross delivery revenue, minus commission, minus incremental food cost, minus packaging. The key insight most owners miss is that delivery revenue runs through fixed overhead already paid — so the incremental margin is usually better than the headline math suggests.", correct: true, technique: 'Full P&L Build',
        feedback: "You offered to build the actual model with their numbers and named the specific line items — including the fixed overhead insight that changes the margin calculation. This is genuine financial transparency." },
      { text: "The economics are generally favorable for restaurants at your scale — the math works.", correct: false,
        feedback: "Claiming the math works without showing the math doesn't satisfy someone asking for the real economics." },
      { text: "I can send you our standard P&L template as a starting point.", correct: false,
        feedback: "A generic template is less useful than a model built with their actual numbers." },
      { text: "What's your current food cost percentage? That's the most important variable.", correct: false,
        feedback: "Good eventually, but explain the full model structure first — then ask for the inputs." },
    ],
  },
  mx37: {
    objection: "Tell me what the best-performing restaurants on your platform do that others don't.",
    responses: [
      { text: "Three things stand out consistently. First, professional photos — restaurants with real food photography get 30–40% more clicks than those with phone photos. Second, an opening promotion that runs for the first 30 days — this accelerates ratings before organic volume builds. Third, they treat delivery as a managed business, not a set-it-and-forget-it: they monitor reviews weekly and tweak the menu based on what's ordering well.", correct: true, technique: 'Best Practice Insight',
        feedback: "You gave three specific, actionable differentiators with real context. This is the kind of insight that only comes from someone who actually works with restaurant partners and pays attention." },
      { text: "The best restaurants on our platform simply have great food — quality wins.", correct: false,
        feedback: "Obvious platitudes don't give them actionable insight into what separates top performers." },
      { text: "High-performers usually have strong brand recognition before joining — they bring their existing audience.", correct: false,
        feedback: "This is discouraging rather than actionable, and not fully accurate." },
      { text: "What are your biggest strengths as a restaurant? That would help me tell you what to lean into.", correct: false,
        feedback: "Good discovery, but give the best-practice insight first — then they can map it to their strengths." },
    ],
  },
  mx38: {
    objection: "I've been burned by platforms that promised growth and delivered headaches. How do I know you're different?",
    responses: [
      { text: "You don't, yet — and I'm not going to ask you to take my word for it. What I'd rather do: I'll connect you with the owner of the taqueria on Fifth Street who went through the same hesitation. They can tell you what the first 90 days actually looked like — the headaches and the results. Real experience from someone in your position is worth more than anything I could say.", correct: true, technique: 'Third-Party Proof',
        feedback: "You acknowledged the limits of your own credibility and offered a peer reference — the most powerful form of proof for someone who's been burned by vendor promises. Confident and honest." },
      { text: "I understand the hesitation — but we've specifically addressed those pain points in our platform improvements.", correct: false,
        feedback: "Claiming to have addressed undefined problems is exactly what burned them in the first place." },
      { text: "I can show you our partner satisfaction data — it speaks for itself.", correct: false,
        feedback: "Aggregate satisfaction data is the kind of thing every platform shows. It doesn't address their specific past experience." },
      { text: "What specifically went wrong with the other platforms? I want to make sure we don't repeat that.", correct: false,
        feedback: "Good discovery but offer the peer reference first — it's a more powerful credibility signal than more conversation." },
    ],
  },
  mx39: {
    objection: "Can I try it for one month with no strings attached and see the results?",
    responses: [
      { text: "Yes — there's genuinely no commitment required. You go live, run it for a month, and if it doesn't work you pause or stop with no penalty. The only thing worth knowing: one month is often not long enough to see peak performance because the algorithm needs a few weeks to surface your listing. But there's nothing stopping you from treating the first month as a test. Many of our best partners started exactly that way.", correct: true, technique: 'Trial Affirmation',
        feedback: "You said yes immediately (no strings), added the honest caveat about algorithm ramp-up time, and reframed the one-month test as a real starting point. This is the right answer." },
      { text: "We don't have a formal trial program, but there's nothing stopping you from testing it.", correct: false,
        feedback: "Making them feel like they're bending the rules when there actually is no lock-in creates unnecessary confusion." },
      { text: "A month is a good start — most restaurants see strong results quickly.", correct: false,
        feedback: "Vague reassurance about results doesn't address the 'no strings' question directly." },
      { text: "What would a successful month look like for you? I want to make sure we're measuring the right thing.", correct: false,
        feedback: "Good question but say yes to the trial first, then explore what success looks like." },
    ],
  },
  mx40: {
    objection: "I want to see a side-by-side comparison of Uber Eats versus the platform I'm currently on.",
    responses: [
      { text: "I can build that — but I'll be honest: I'll only be able to show you our data, not theirs. What I can do is show you what you're currently earning on your existing platform and compare it to what restaurants similar to yours are earning with us in your area. You'll have both sides of the comparison from primary sources rather than my interpretation. Fifteen minutes?", correct: true, technique: 'Honest Comparison Offer',
        feedback: "You were upfront about the limits of what you can show (only your data), then proposed a real comparison using their actual numbers and your local data. Honest framing with a concrete offer." },
      { text: "We outperform most competing platforms on customer volume and restaurant satisfaction.", correct: false,
        feedback: "Self-serving comparison claims without specific, verifiable data don't constitute a real side-by-side." },
      { text: "I'd need to know which platform you're on to give you a fair comparison.", correct: false,
        feedback: "Good discovery, but offer the comparison structure first — then the platform name becomes useful context." },
      { text: "Comparisons can be misleading since every restaurant's situation is different.", correct: false,
        feedback: "Deflecting when they've asked for a direct comparison signals you're not confident in how you stack up." },
    ],
  },

  // ── SAKURA QUARTER — THE CLOSE ────────────────────────────────────────────
  jp01: {
    objection: "Let me think about it and get back to you.",
    responses: [
      { text: "Of course. Before I go — is there a specific question or concern driving the 'let me think' response? Sometimes it's one thing I can answer right now that changes the timeline. But if you genuinely need time, I completely respect that.", correct: true, technique: 'Objection Discovery',
        feedback: "You agreed to the request while gently opening the door to find the real concern. Most 'let me think' responses hide a specific unanswered question — this creates space to find it without pressure." },
      { text: "Absolutely — take all the time you need. I'll be here whenever you're ready.", correct: false,
        feedback: "Open-ended waiting loses all momentum. Always probe for the underlying concern or get a specific callback date." },
      { text: "Most people who say that don't end up following up — is there something I can address right now?", correct: false,
        feedback: "Bluntly predicting they won't call is confrontational even if statistically accurate." },
      { text: "What would need to happen for you to feel confident saying yes?", correct: false,
        feedback: "Premature closing question before you've found out why they're hesitating." },
    ],
  },
  jp02: {
    objection: "I want to run this by my accountant before I sign anything.",
    responses: [
      { text: "Smart move. Can I send both you and your accountant the same one-page summary — fee structure, payout schedule, and contract terms? That way they have the full picture and you're not translating from memory. It usually cuts the review timeline in half.", correct: true, technique: 'Stakeholder Inclusion',
        feedback: "You validated the accountant's role and proposed a practical shortcut: shared materials that give the accountant exactly what they need. This respects the process while accelerating it." },
      { text: "Of course — what's the accountant's timeline? I'd like to follow up after your conversation.", correct: false,
        feedback: "Passively waiting for the accountant meeting loses control of the timeline." },
      { text: "The financial terms are quite straightforward — your accountant will likely be comfortable quickly.", correct: false,
        feedback: "Predicting what the accountant will think is presumptuous and doesn't accelerate anything." },
      { text: "When do you think you'll be able to talk to them?", correct: false,
        feedback: "Good to know eventually, but proactively offer to send materials to the accountant directly first." },
    ],
  },
  jp03: {
    objection: "I'm not ready to sign today. I need more time to think.",
    responses: [
      { text: "No pressure — I'd rather you sign when you're confident than rush and regret it. Can I ask what's still unclear? Sometimes it's one specific thing I can answer that changes the timeline. If not, let's set a specific date to reconnect.", correct: true, technique: 'Pressure Release + Discovery',
        feedback: "You explicitly removed pressure, then used the breathing room to probe for the real blocker. Proposing a specific reconnect date prevents the conversation from going cold." },
      { text: "Of course — take the time you need. I'll check back in a few weeks.", correct: false,
        feedback: "Vague future follow-up with no specific date lets momentum die." },
      { text: "Is there a part of the agreement that's giving you pause? I can address it now.", correct: false,
        feedback: "The instinct is right but the framing is slightly aggressive. Remove pressure first, then discover." },
      { text: "What's your decision-making timeline looking like?", correct: false,
        feedback: "Asking about their timeline before removing pressure implies you're managing them to a deadline." },
    ],
  },
  jp04: {
    objection: "Can we do a trial period before I make a full commitment?",
    responses: [
      { text: "Yes — and there's genuinely nothing to commit to beyond the trial anyway. There's no long-term contract. You go live, run it for a month, and if it doesn't work you stop with no penalty. The one thing worth knowing: a month is sometimes not long enough to see peak results because the algorithm takes a few weeks to surface your listing. But the trial structure you're describing is exactly how this works.", correct: true, technique: 'Trial Affirmation',
        feedback: "You said yes immediately (no lock-in), added the honest caveat about algorithm timing, and framed the trial as the natural starting point. This is the right answer." },
      { text: "We don't have a formal trial program, but you can start and stop anytime.", correct: false,
        feedback: "Making them feel like they're improvising when there actually is no lock-in creates unnecessary friction." },
      { text: "A trial is a great idea — most restaurants see strong results in the first month.", correct: false,
        feedback: "Vague reassurance doesn't address the specific question about how a trial actually works." },
      { text: "What would a successful trial look like for you?", correct: false,
        feedback: "Good question but say yes to the trial structure first, then explore what success looks like." },
    ],
  },
  jp05: {
    objection: "Show me the full contract before I agree to anything.",
    responses: [
      { text: "Here it is right now. It's four pages. I'll highlight the three sections most owners focus on: fee structure, exit terms, and data use. Take as much time as you need — I'll answer any questions on any section before we go further.", correct: true, technique: 'Immediate Transparency',
        feedback: "You produced the contract immediately, noted it's short, highlighted the relevant sections, and gave them space to read. This is exactly the right response to a due-diligence request." },
      { text: "Of course — I'll send it over after our conversation so you have time to review.", correct: false,
        feedback: "Making them wait when they asked to see it now creates friction." },
      { text: "The contract is very standard — most partners sign without needing many modifications.", correct: false,
        feedback: "Telling someone most people don't scrutinize the contract to someone who is scrutinizing it is dismissive." },
      { text: "What specific terms are you concerned about? I can address those sections.", correct: false,
        feedback: "They haven't read the contract yet — they can't have specific concerns. Show it first." },
    ],
  },
  jp06: {
    objection: "What if I sign and then regret it? What are my options?",
    responses: [
      { text: "You can pause or stop the partnership anytime through the dashboard — no cancellation fee, no notice period required. There's no long-term contract. You're never locked in. The only thing that stays is your reviews on the platform if you ever decide to come back.", correct: true, technique: 'Exit Assurance',
        feedback: "You gave a complete, specific answer about exit options with zero hedging. Proactively offering the no-lock-in information removes the last major barrier for a cautious decision-maker." },
      { text: "Most partners don't regret it once they see the results — it usually works out.", correct: false,
        feedback: "Reassurance about others' outcomes doesn't answer their specific question about what happens if they want to leave." },
      { text: "We can build in a review clause if that would make you more comfortable.", correct: false,
        feedback: "Offering to negotiate contract modifications when you can just say 'no lock-in, stop anytime' adds unnecessary complexity." },
      { text: "What would make you regret it? I want to understand what you're protecting against.", correct: false,
        feedback: "Good discovery but give the exit clarity first — they may not need to elaborate once they know they can stop anytime." },
    ],
  },
  jp07: {
    objection: "I said I was interested but now I'm second-guessing the timing.",
    responses: [
      { text: "That's worth exploring — what changed between then and now? Sometimes it's a real operational concern that I can address, and sometimes it's just that the moment of decision feels different from the moment of interest. If something concrete came up, I'd rather know.", correct: true, technique: 'Re-engagement Discovery',
        feedback: "You didn't push or defend the previous 'yes.' You asked what changed with genuine curiosity — which opens the door to the real concern without pressure." },
      { text: "I understand the hesitation — but the timing we discussed is actually ideal for your launch.", correct: false,
        feedback: "Defending the original timing when they've expressed doubt creates friction." },
      { text: "What would make the timing feel right?", correct: false,
        feedback: "Too vague as an opener. First ask what changed — that's the specific question that reveals the real concern." },
      { text: "Let's put a specific date on it so we don't lose momentum.", correct: false,
        feedback: "Pushing for a date when they just said they're second-guessing ignores the concern they raised." },
    ],
  },
  jp08: {
    objection: "I need a week to talk to my business partner before I can commit.",
    responses: [
      { text: "Completely reasonable. Can I send both you and your partner the same summary so you're reviewing the same information? I can also set up a short call with both of you — that usually makes the decision much faster than playing phone tag.", correct: true, technique: 'Joint Decision Facilitation',
        feedback: "You respected the partner's role and proposed two specific solutions: shared materials and a joint call. Both eliminate the game of telephone and keep you in the process." },
      { text: "No problem — I'll follow up in a week. Let me know how the conversation goes.", correct: false,
        feedback: "Passive waiting leaves you out of the decision conversation entirely." },
      { text: "For a decision this size, do you typically need partner sign-off?", correct: false,
        feedback: "Questioning whether they actually need their partner's approval undermines the relationship you've built." },
      { text: "What do you think your partner's main concerns will be?", correct: false,
        feedback: "Good discovery eventually, but propose the joint call first before asking them to speculate on their partner's objections." },
    ],
  },
  jp09: {
    objection: "What exactly am I committing to if I say yes today?",
    responses: [
      { text: "Here's the complete commitment: you sign a four-page agreement, spend about 20 minutes reviewing your menu build, and you're live in 3–5 business days. After that, there's no minimum order commitment, no monthly fee, and you can pause or stop anytime. That's the full extent of what 'yes today' means.", correct: true, technique: 'Commitment Scope Clarity',
        feedback: "You gave a complete, specific, and honest description of what 'yes' actually commits them to. No hidden commitments, no vague 'partnership' language — just what actually happens." },
      { text: "Saying yes today just starts the onboarding process — everything is finalized as you go.", correct: false,
        feedback: "Vague 'everything is finalized as you go' creates the impression you're minimizing commitments they'll discover later." },
      { text: "The commitment is minimal — just a standard partnership agreement and you're on your way.", correct: false,
        feedback: "'Minimal' and 'standard' are vague. Describe the actual commitment specifically." },
      { text: "What are you most concerned about committing to?", correct: false,
        feedback: "Good discovery but give the specific commitment scope first — it may answer their concern directly." },
    ],
  },
  jp10: {
    objection: "I need to see it work for a restaurant I personally know before I sign.",
    responses: [
      { text: "I can make that happen. There's a Japanese restaurant on Oak Street that's been with us for 14 months. The owner said she was in exactly the same position before she signed. I can introduce you directly — by phone or a brief meeting — and you can ask her anything. Would that reference help you move forward?", correct: true, technique: 'Personal Reference',
        feedback: "You offered a specific, real reference in a relevant category and gave them a direct path to a peer conversation. This is the highest-trust form of social proof." },
      { text: "I have plenty of success stories I can share — most restaurants see strong results.", correct: false,
        feedback: "Generic success stories don't satisfy a request for personal knowledge of a specific restaurant." },
      { text: "I can send you case studies from restaurants in your category.", correct: false,
        feedback: "Written case studies are passive. They asked to know someone personally — facilitate that directly." },
      { text: "What would you want to ask that restaurant owner?", correct: false,
        feedback: "Good question eventually, but offer the specific reference first before asking what they'd ask." },
    ],
  },
  jp11: {
    objection: "I'm interested but I want to negotiate the commission rate first.",
    responses: [
      { text: "I want to be honest with you: I don't have rate flexibility at the standard tier, and I wouldn't want to imply I do. What I can offer is a co-funded promotional credit for your first 30 days that essentially subsidizes your early orders. If you're at a volume level where a custom rate conversation makes sense, I can escalate that — but let me tell you what that threshold looks like first.", correct: true, technique: 'Rate Negotiation Honesty',
        feedback: "You were honest about rate limitations rather than implying flexibility you don't have. Offering the promotional credit as a concrete alternative and explaining the escalation path shows you're trying to find a real solution." },
      { text: "There may be some flexibility — let me check with my team and get back to you.", correct: false,
        feedback: "Implying flexibility you likely don't have sets up a disappointment and wastes the prospect's time." },
      { text: "Our rates are already competitive with the market — negotiating below them rarely makes sense.", correct: false,
        feedback: "Defending rates without addressing the negotiation request sounds dismissive of a reasonable ask." },
      { text: "What rate would make this feel right for your margins?", correct: false,
        feedback: "Asking for their desired rate before being honest about what you can actually offer puts you in a false negotiation." },
    ],
  },
  jp12: {
    objection: "I shook your hand on this but my accountant is now telling me to wait.",
    responses: [
      { text: "I completely respect the accountant's role in this. What specifically are they concerned about? If it's the fee structure, payout timing, or contract terms, I can put together a one-pager directly addressing those points — for them, not you. Sometimes it's faster to answer their specific question directly than to translate through you.", correct: true, technique: 'Accountant-Direct Approach',
        feedback: "You respected the accountant's authority without being frustrated by the reversal, and proposed a practical solution: address the accountant's specific concern directly. This is more effective than asking the owner to advocate on your behalf." },
      { text: "I understand — but we did have an agreement. What specifically changed?", correct: false,
        feedback: "Referencing the handshake as an implicit commitment creates pressure that damages trust." },
      { text: "Can you share what their specific concerns are? I want to address them before they slow this down.", correct: false,
        feedback: "'Before they slow this down' frames the accountant as an obstacle rather than a legitimate stakeholder." },
      { text: "Would it help if we pushed the start date back a couple of weeks?", correct: false,
        feedback: "Changing the timeline doesn't address the accountant's substantive concern." },
    ],
  },
  jp13: {
    objection: "I've been sitting on this decision for three weeks. I'm not sure what's stopping me.",
    responses: [
      { text: "Let's figure it out. Sometimes when a decision stalls for that long, it's not a missing piece of information — it's a specific fear that hasn't been named yet. If I ask you to think out loud for a minute: what's the worst-case scenario you're imagining? Not what you think will happen, just the worry.", correct: true, technique: 'Fear Surfacing',
        feedback: "You reframed a stalled decision as a psychological barrier rather than an information problem, and asked the specific question that surfaces hidden fears. This is often the breakthrough in long-stalled deals." },
      { text: "Let's just move forward — three weeks of thinking is usually enough to make a call.", correct: false,
        feedback: "Pushing someone to decide after acknowledging they don't know what's stopping them ignores the underlying concern." },
      { text: "What specific information would help you feel ready to decide?", correct: false,
        feedback: "If they knew what information they needed, they would have asked for it. The barrier is probably not informational." },
      { text: "Would it help to talk to another restaurant owner who was in the same position?", correct: false,
        feedback: "Good option eventually, but surface the fear first — the reference conversation will be more useful once you know what the concern is." },
    ],
  },
  jp14: {
    objection: "Is there anything that changes or expires if I wait another month?",
    responses: [
      { text: "Honestly, the standard terms are the same whether you sign today or in 30 days. There's no expiring promotional offer right now. What does change: every month you wait is a month without the delivery revenue and a month later your listing builds its first ratings. There's no pressure from me on timing — but that's the real cost of waiting, not a manufactured deadline.", correct: true, technique: 'Honest Urgency',
        feedback: "You were honest that there's no artificial deadline, then named the real cost of waiting (delayed revenue and ratings). This is genuine urgency, not manufactured scarcity." },
      { text: "There's no formal deadline — but I can't guarantee the same terms will be available next month.", correct: false,
        feedback: "Implying terms might change when they won't creates false urgency that will damage trust if they check." },
      { text: "I can hold this offer for 30 days, but after that I can't make any guarantees.", correct: false,
        feedback: "A 30-day hold on standard terms that don't change is misleading." },
      { text: "The sooner you start, the faster you'll hit profitability — that's the main factor.", correct: false,
        feedback: "True but vague. Name the specific cost of delay (delayed revenue, delayed ratings building) rather than a general statement." },
    ],
  },
  jp15: {
    objection: "My last partnership had hidden fees that appeared after month one. I need everything in writing.",
    responses: [
      { text: "Completely fair — here's the contract right now. There are no fees beyond the commission on each order. No monthly platform fee, no setup fee, no minimum order fee. Page one lists every fee that exists. Read it before we go any further. If you find anything that feels like a hidden fee, I want to know.", correct: true, technique: 'Proactive Contract Review',
        feedback: "You gave the contract immediately, named every fee category that exists, and invited them to find anything that looks like a hidden charge. Inviting scrutiny is the most credible response possible." },
      { text: "I assure you there are no hidden fees — our fee structure is fully transparent.", correct: false,
        feedback: "A verbal assurance from a salesperson is exactly what they got before the hidden fees appeared. Show the contract." },
      { text: "That experience sounds frustrating. Which platform was that with?", correct: false,
        feedback: "Asking which platform before addressing their current concern seems like you're more interested in competitive intel than their trust." },
      { text: "What fees specifically are you worried about?", correct: false,
        feedback: "They've said they don't know what's hidden — that's the point. Show the full contract and let them verify for themselves." },
    ],
  },
  jp16: {
    objection: "I'm ready to sign but I'm worried about the operational disruption during launch week.",
    responses: [
      { text: "That concern makes sense — and here's how we address it: you set the delivery window and daily order cap before you go live. Start with 5 orders a day and Tuesday through Thursday only. That's a completely manageable volume to pilot the workflow without disrupting your primary service. Once your team is comfortable, you expand on your terms.", correct: true, technique: 'Controlled Launch Design',
        feedback: "You solved the specific concern (operational disruption) with a specific solution: low initial cap and limited schedule. Putting the launch parameters in their control removes the risk directly." },
      { text: "Launch week is usually manageable — most restaurants adapt quickly.", correct: false,
        feedback: "Generic reassurance doesn't address the specific operational concern they raised." },
      { text: "Our onboarding team will be available all week to support you through launch.", correct: false,
        feedback: "Support availability doesn't prevent disruption. Give them the specific control mechanisms that prevent it." },
      { text: "What specifically worries you about launch week? I want to make sure we plan for it.", correct: false,
        feedback: "Good eventually, but propose the controlled launch design first — it will preemptively answer their specific concern." },
    ],
  },
  jp17: {
    objection: "I want to start in January. It's better timing for us.",
    responses: [
      { text: "January works. Can we do the setup now and schedule the go-live for January 2nd? That way the menu is built, approved, and ready — you just flip the switch. Starting from zero in January means another 2 weeks of setup delays. Starting from done means you're live on day one of the new year.", correct: true, technique: 'Setup Now, Launch Later',
        feedback: "You accepted the January timing and immediately proposed a smarter version of it: complete setup now, activate in January. This is genuinely better for them and keeps you in the process." },
      { text: "January is a great time to launch — the new year brings a lot of new customer activity.", correct: false,
        feedback: "Validating the timing choice without the setup-now insight wastes the current opportunity." },
      { text: "Can we move it to December? The holiday season is actually a strong delivery window.", correct: false,
        feedback: "Pushing back on their timing preference after they gave a clear answer creates friction." },
      { text: "When in January — early or late? I want to make sure we plan the onboarding properly.", correct: false,
        feedback: "Getting a specific date without proposing the setup-now approach misses the key insight." },
    ],
  },
  jp18: {
    objection: "I need you to do one thing for me before I sign.",
    responses: [
      { text: "Name it. If it's in my power, I'll do it. And if it's not, I'll tell you honestly instead of making a promise I can't keep.", correct: true, technique: 'Conditional Commitment',
        feedback: "You agreed to hear the ask before knowing what it is — which signals genuine partnership intent — while setting an honest limit: you won't promise what you can't deliver. This is the right balance." },
      { text: "Of course — what is it?", correct: false,
        feedback: "Agreeing without any acknowledgment that you'll only commit to what's actually possible can trap you in a promise you can't keep." },
      { text: "That depends on what it is — what are you asking for?", correct: false,
        feedback: "Starting with 'that depends' sounds transactional when a generous, open response would build more trust at the close." },
      { text: "I'd love to help — what do you need?", correct: false,
        feedback: "Close, but doesn't include the honest caveat that you'll be upfront if it's not within your power." },
    ],
  },
  jp19: {
    objection: "There's no rush on my side. Why are you pushing for a decision?",
    responses: [
      { text: "I hear that — and I want to be honest: I'm not pushing because of a quota. The reason I asked is that three weeks from now this conversation goes cold and we both start from scratch, which is a waste of your time and mine. If there's no urgency for you, that's completely fair. Is there a specific date that makes sense for a real check-in?", correct: true, technique: 'Transparent Motivation',
        feedback: "You were honest about your real motivation (momentum loss), acknowledged their perspective, and redirected to a specific future date. Transparency about why you're following up is more persuasive than manufactured urgency." },
      { text: "There isn't a rush per se — I just want to make sure you have everything you need.", correct: false,
        feedback: "Backing away from any urgency framing leaves you with no reason to follow up at a specific time." },
      { text: "I'm not pushing — I just want to make sure the opportunity stays available for you.", correct: false,
        feedback: "Implying the opportunity might not stay available when it will creates false urgency." },
      { text: "What timeline would feel comfortable for you?", correct: false,
        feedback: "Good question but only after being honest about why you asked — otherwise the conversation restarts vaguely." },
    ],
  },
  jp20: {
    objection: "I like everything I've heard. What do I actually sign and how long does it take?",
    responses: [
      { text: "Here's the exact process: you review and sign the four-page agreement digitally — takes about five minutes. Then our onboarding team contacts you within 24 hours to build your menu, which takes about 20 minutes on your end to review and approve. You're live in 3–5 business days from today. Want to start the signature now?", correct: true, technique: 'Next Steps Close',
        feedback: "You gave a complete, specific, sequential description of what happens and how long it takes — then asked to start. This is the right close for someone who's already decided." },
      { text: "Great — I'll send over the paperwork and we'll get you set up from there.", correct: false,
        feedback: "Sending paperwork without describing the full process leaves them uncertain about what comes next." },
      { text: "The process is very simple — it usually takes less than a week from start to live.", correct: false,
        feedback: "Vague 'less than a week' doesn't give them the complete picture of what they're actually doing." },
      { text: "Before we get into the paperwork — is there anything else you want to clarify?", correct: false,
        feedback: "They said they like everything — don't introduce new doubt by asking if there's more to address. Close." },
    ],
  },
  jp21: {
    objection: "I've agreed in principle but I want to pilot it at one location before expanding to our second.",
    responses: [
      { text: "That's a completely sensible approach — and it's actually how I'd recommend doing it. Get the first location's listing optimized, figure out the operational workflow, build the early ratings, then bring those learnings to location two. I can set up a 90-day review with you specifically to evaluate whether and how the second location should launch.", correct: true, technique: 'Phased Launch Validation',
        feedback: "You validated the phased approach as genuinely smart, gave the specific reason it works (learnings transfer), and proposed a structured 90-day review. This builds confidence rather than pushing for both locations immediately." },
      { text: "No problem — we can always add the second location later once you're comfortable.", correct: false,
        feedback: "Passively deferring misses the opportunity to structure the pilot-to-expansion pathway." },
      { text: "Can we at least set up the second location in parallel so it's ready to activate quickly?", correct: false,
        feedback: "Pushing for the second location when they've been clear about starting with one creates friction." },
      { text: "What's the timeline you're thinking between the pilot and the expansion decision?", correct: false,
        feedback: "Good question but propose the 90-day structured review first — it's more useful than an open timeline." },
    ],
  },
  jp22: {
    objection: "What's the one thing most restaurants wish they'd known before signing?",
    responses: [
      { text: "Two things, honestly. First: delivery menu pricing. Restaurants that use their exact dine-in prices often find the margins tight — pricing delivery 10–15% higher to offset the commission is standard and customers expect it. Second: photos matter more than anything else in the first 30 days. Bad phone photos kill click-through before the food ever gets a chance.", correct: true, technique: 'Pre-empt Common Regrets',
        feedback: "You gave two specific, actionable, and honest pieces of advice that address real failures. This builds trust at a critical moment and shows you're genuinely invested in their success." },
      { text: "Most partners say they wish they'd started sooner — the learning curve is shorter than expected.", correct: false,
        feedback: "Vague 'start sooner' advice is a pitch disguised as insight. Give them something genuinely useful." },
      { text: "Every restaurant's experience is different — I wouldn't want to generalize.", correct: false,
        feedback: "Deflecting a direct question with 'can't generalize' signals you either don't know or are hiding something." },
      { text: "What are you most concerned about going in? I want to address that specifically.", correct: false,
        feedback: "Good discovery eventually, but give the genuine advice first — it builds trust that makes the discovery conversation more honest." },
    ],
  },
  jp23: {
    objection: "I keep getting close but something holds me back at the last minute. What do I do with that?",
    responses: [
      { text: "That pattern usually means there's a fear that hasn't been fully named. Not a missing piece of information — a specific downside scenario that keeps surfacing right at the moment of commitment. Can you describe the worst-case scenario you imagine? Not what you think will happen, just the thing you're quietly protecting against.", correct: true, technique: 'Fear Articulation',
        feedback: "You identified the psychological pattern (unnamed fear, not missing information), and asked the specific question that surfaces it. This is often the turning point in a long-stalled close." },
      { text: "I think you just need to make the call — at some point more information doesn't help.", correct: false,
        feedback: "Telling someone to 'just make the call' ignores the real psychological barrier they're describing." },
      { text: "What would need to change for you to feel ready?", correct: false,
        feedback: "If they knew what needed to change, they would have asked for it. The barrier is usually emotional, not informational." },
      { text: "Would a reference from another restaurant owner help you over the line?", correct: false,
        feedback: "Good option eventually, but surface the specific fear first — the reference conversation will be more targeted once you know what the concern is." },
    ],
  },
  jp24: {
    objection: "I want to sign but I want you to walk me through the first two weeks personally.",
    responses: [
      { text: "I'll do that. Here's my commitment: I'll be your direct contact for the first 30 days. I'll check in on day three to make sure the menu looks right and the tablet is working. Day seven to review your first week's numbers. Day 14 to optimize anything that needs adjusting. After 30 days you'll have your own rhythm and I'll check in monthly. Does that work?", correct: true, technique: 'Personal Commitment',
        feedback: "You gave a specific, structured personal commitment with named check-in points. This is the right response to a request for hands-on support — detailed and credible." },
      { text: "Absolutely — our onboarding team will be with you every step of the way.", correct: false,
        feedback: "They asked for you personally, not the onboarding team. Delegating to a team deflects the ask." },
      { text: "Of course — I'll make sure you're supported throughout the launch.", correct: false,
        feedback: "Vague 'I'll make sure you're supported' doesn't describe the specific touchpoints they asked for." },
      { text: "What specific aspects of the first two weeks are you most concerned about?", correct: false,
        feedback: "Good discovery but give the concrete commitment first — then refine based on their specific concerns." },
    ],
  },
  jp25: {
    objection: "I said yes but now I want to renegotiate the terms before I sign.",
    responses: [
      { text: "I appreciate you telling me now rather than after. What specifically are you looking to change? Some things I have flexibility on — like promotional credits or launch timing — and some I don't, like the base commission. I'd rather be upfront about what's possible than negotiate in a direction I can't actually deliver.", correct: true, technique: 'Honest Negotiation Scope',
        feedback: "You thanked them for flagging it before signing, asked what specifically they want to change, and were immediately honest about what's flexible and what isn't. This is the right way to handle late-stage re-negotiation." },
      { text: "We've been through the terms already — what's changed since then?", correct: false,
        feedback: "Questioning why they want to renegotiate before hearing what they want puts you in a defensive posture." },
      { text: "I'll do my best — what are you looking for?", correct: false,
        feedback: "Committing to 'do your best' before knowing what they want implies flexibility you might not have." },
      { text: "The terms we agreed on are standard — I'm not sure there's much room to change them.", correct: false,
        feedback: "Preemptively closing the door on negotiation before hearing the specific ask creates resistance." },
    ],
  },
  jp26: {
    objection: "How long until I can realistically expect to see real results?",
    responses: [
      { text: "Here's the honest timeline: first week is slow while the algorithm starts surfacing you — typically 5–15 orders. Weeks two through four, volume builds as you get your first reviews — usually 20–35 orders a week. Month two is when you start seeing your real baseline. For your type of restaurant and neighborhood, I'd expect $2,500–$4,000 monthly by month two if the listing is well-optimized.", correct: true, technique: 'Honest Timeline',
        feedback: "You gave a specific, staged timeline with honest numbers rather than leading with the best case. Including week one slowness as expected builds credibility for the later projections." },
      { text: "Most restaurants see results quickly — many have their first order on day one.", correct: false,
        feedback: "Leading with day-one orders sets an unrealistic benchmark for overall results." },
      { text: "Results depend on many factors — listing quality, promotions, and neighborhood density all play a role.", correct: false,
        feedback: "Hedging when they asked for a realistic estimate fails to give them what they need to plan." },
      { text: "What result would you need to see to consider this a success?", correct: false,
        feedback: "Good question eventually, but give the realistic timeline first — then calibrate to their specific success criteria." },
    ],
  },
  jp27: {
    objection: "The contract looks fine but I want one small change to the notification terms.",
    responses: [
      { text: "Tell me exactly what you'd like to change and I'll find out if it's possible. If it is, I'll get you a revised version today. If it's not modifiable at the standard tier, I'll tell you exactly why and we can decide if it's a dealbreaker or a workable situation.", correct: true, technique: 'Change Request Handling',
        feedback: "You took the request seriously without immediately agreeing or refusing. The commitment to a same-day answer and honesty about what's modifiable shows responsiveness and integrity." },
      { text: "The contract terms are standard — modifications are difficult to process.", correct: false,
        feedback: "Preemptively closing the door on a small change request for something that might be easy to accommodate creates unnecessary friction." },
      { text: "What specifically do you want to change?", correct: false,
        feedback: "Good question but add the commitment to find out today and be honest about what's possible — that's what makes this a response rather than just a question." },
      { text: "I'll escalate that to our legal team — they handle any contract modifications.", correct: false,
        feedback: "Escalating to legal for a small notification term change introduces delay and signals inflexibility." },
    ],
  },
  jp28: {
    objection: "Can I sign today but choose my go-live date later?",
    responses: [
      { text: "Absolutely — that's actually a common setup. You sign today, our team builds and you approve your menu this week, and you choose the go-live date at the end of the onboarding review. Many restaurants choose a specific date — beginning of a month, after a renovation, after the holidays. The go-live is fully on your schedule.", correct: true, technique: 'Flexible Activation',
        feedback: "You said yes immediately, explained the specific process, and validated that choosing a future go-live is normal and easy. This removes the tension between signing now and launching on their terms." },
      { text: "Yes — we can work around your schedule for the go-live.", correct: false,
        feedback: "Vague 'work around your schedule' doesn't describe how the go-live date is actually set." },
      { text: "We'd need to set a go-live date at signing — otherwise the onboarding window expires.", correct: false,
        feedback: "Adding a fake constraint when there isn't one creates friction at a moment where the prospect is ready to sign." },
      { text: "What date were you thinking for go-live?", correct: false,
        feedback: "Good question but say yes to the deferred go-live structure first before asking for the specific date." },
    ],
  },
  jp29: {
    objection: "I'm at 90% confident. What would get me to 100%?",
    responses: [
      { text: "What's the 10%? If you can name it, I can probably address it. If you can't quite name it, that usually means it's more of a feeling than a fact — and no amount of information will fix a feeling. In that case, the honest answer is: sometimes 90% is good enough, and the last 10% comes from experience rather than conversation.", correct: true, technique: 'Final Barrier Identification',
        feedback: "You asked for the specific 10% rather than making assumptions, and acknowledged honestly that if it can't be named, it might be a feeling that only experience resolves. This is genuine and disarming." },
      { text: "I think you have everything you need — you should feel confident.", correct: false,
        feedback: "Telling someone how to feel rarely makes them feel that way." },
      { text: "What would a 100% confident decision look like for you?", correct: false,
        feedback: "This is too abstract. Ask specifically what the 10% is." },
      { text: "Would talking to another restaurant owner help close that gap?", correct: false,
        feedback: "Good option eventually, but find out what the 10% is first — it might not be resolved by a reference." },
    ],
  },
  jp30: {
    objection: "I've been deciding for a month. I think I'm just scared of making the wrong call.",
    responses: [
      { text: "That's an honest thing to say — and it helps me understand what's actually going on. Here's one way to think about it: the downside is zero lost dollars if you start and it doesn't work — you stop, no penalty. The upside is real delivery revenue. A one-month test with zero downside cost isn't really a high-stakes decision. Does that change how it feels?", correct: true, technique: 'Risk Reframe',
        feedback: "You acknowledged the emotional honesty with respect, then gave a specific, logical reframe: zero downside cost makes this low-stakes. Connecting the emotional barrier to the actual risk profile is the key move." },
      { text: "That fear is very common — but it usually disappears quickly once people get started.", correct: false,
        feedback: "Normalizing and minimizing fear doesn't address it. Engage with the specific risk concern." },
      { text: "What's the worst thing that could happen if this doesn't work out?", correct: false,
        feedback: "Good question but only after establishing the zero-downside framing — otherwise you might surface fears you haven't yet neutralized." },
      { text: "I think you're ready — most people in your position who took the leap are glad they did.", correct: false,
        feedback: "Social proof about 'most people' doesn't address an individual's specific fear." },
    ],
  },
  jp31: {
    objection: "I was going to sign yesterday but then I heard something negative about Uber Eats from another owner.",
    responses: [
      { text: "I'd rather know what they said than have it be an invisible barrier. What did they tell you? Some concerns I can address directly and honestly, and some are legitimate things to weigh. Either way, you're better off making this decision with the information on the table than wondering about it.", correct: true, technique: 'Surface the Concern',
        feedback: "You invited the negative information into the conversation rather than avoiding it. This shows confidence and builds trust — and it gives you the actual concern to address." },
      { text: "I understand — people have mixed experiences. Our overall partner satisfaction is very high.", correct: false,
        feedback: "Aggregate satisfaction stats don't address a specific thing another owner said." },
      { text: "What platform is that owner on currently? That context might help me understand their perspective.", correct: false,
        feedback: "Asking for competitive context before addressing the concern seems like you're more interested in intelligence than their worry." },
      { text: "Negative feedback is always worth considering — but I'd encourage you to weigh it against what you've seen in our conversations.", correct: false,
        feedback: "Asking them to discount the concern before you even know what it is isn't a real engagement with the issue." },
    ],
  },
  jp32: {
    objection: "I'm ready but I need my partner to be on the call when we sign. Can we schedule that?",
    responses: [
      { text: "Absolutely — let's set it up. What day and time works for both of you? I'll send a calendar invite with the contract attached so they can review it before the call. That usually makes the signing itself take about 15 minutes instead of an hour.", correct: true, technique: 'Joint Signing Setup',
        feedback: "You immediately accepted the request, proposed a practical pre-read to make the call efficient, and moved to scheduling. This is the right process for a ready buyer with a joint decision structure." },
      { text: "Of course — whenever your partner is available, I'm flexible.", correct: false,
        feedback: "Agreeing without proposing the pre-read or initiating the scheduling keeps you in a passive position." },
      { text: "Can we do the initial signing today and add your partner to the onboarding call?", correct: false,
        feedback: "Trying to separate the partner from the signing moment when they've been clear about wanting them present creates friction." },
      { text: "What does your partner's main concern tend to be in these decisions?", correct: false,
        feedback: "Good discovery but schedule the joint call first — the partner can speak for themselves." },
    ],
  },
  jp33: {
    objection: "Okay, I'm ready. What's the next step?",
    responses: [
      { text: "Perfect. I'll pull up the agreement right now — it's four pages and takes about five minutes to review. You sign digitally, and I'll copy our onboarding team so they contact you within 24 hours to schedule your menu review. You'll be live in 3–5 business days.", correct: true, technique: 'Efficient Close',
        feedback: "You gave a specific, sequential next-steps description and moved immediately to action. When someone says they're ready, the only right move is to close efficiently without unnecessary elaboration." },
      { text: "Great — I'll send you the paperwork this afternoon and follow up tomorrow.", correct: false,
        feedback: "Delaying when they're ready to sign right now is the worst thing you can do. Move immediately." },
      { text: "Before we do that — is there anything else you want to confirm first?", correct: false,
        feedback: "Introducing doubt at the moment of close when they've said they're ready is counterproductive." },
      { text: "I'll get our onboarding team to reach out and walk you through the process.", correct: false,
        feedback: "Delegating to onboarding when they're ready to sign with you right now loses the momentum of the moment." },
    ],
  },
  jp34: {
    objection: "The contract is fine but I want a specific rep contact, not a generic support line.",
    responses: [
      { text: "Done — I'm your named contact for the first 90 days, and my mobile number is on the agreement. After 90 days you'll have an account manager assigned to you specifically. I'll make that transition personal so you're not handed off cold.", correct: true, technique: 'Personal Account Commitment',
        feedback: "You gave a concrete, personal commitment with a specific timeframe and a name transition plan. For someone asking about accountability, this is exactly what they need to hear." },
      { text: "We have a dedicated restaurant support line that's much more efficient than a named rep.", correct: false,
        feedback: "Arguing against their preference when you can simply fulfill it is counterproductive." },
      { text: "I'll put your account on priority support — that gives you faster response times.", correct: false,
        feedback: "'Priority support' is a category, not a person. They asked for a specific rep contact." },
      { text: "Is this about having accountability or about access speed?", correct: false,
        feedback: "Good discovery eventually, but make the commitment first — you can fulfill their request directly." },
    ],
  },
  jp35: {
    objection: "I signed but I'm having second thoughts two days later. Is it too late to back out?",
    responses: [
      { text: "It's not too late — you can stop at any point before go-live with no penalty. We haven't launched yet so there's nothing to unwind. But before you decide to stop: can you tell me what's driving the second thought? Sometimes it's something I can address, and if it's not, I'll help you exit cleanly either way.", correct: true, technique: 'No-Pressure Retention',
        feedback: "You immediately confirmed they can exit without pressure, then offered to help them make the best decision — including exiting if that's right. This is how you earn trust and often retain a wavering partner." },
      { text: "Of course — you can back out anytime. I'll cancel the account now.", correct: false,
        feedback: "Immediately canceling without understanding the second thought misses the chance to address a potentially solvable concern." },
      { text: "I'd encourage you to give it a full month before making any decisions — two days isn't enough information.", correct: false,
        feedback: "Pushing them to stay without addressing the concern they raised is pressure they don't need." },
      { text: "What happened in the past two days that changed your thinking?", correct: false,
        feedback: "Good question, but first confirm they can exit without penalty — that removes the urgency that makes the concern harder to discuss." },
    ],
  },
  jp36: {
    objection: "I need you to personally guarantee this will work before I sign.",
    responses: [
      { text: "I can't guarantee your results — and I'd be lying if I said I could. What I can commit to: I'll show you what comparable restaurants nearby have actually done, I'll be your direct contact for 90 days, and if performance is below par at 60 days, I'll audit your listing and run a co-funded promotion with you. The only honest guarantee is that I'll work the problem with you if it's not working.", correct: true, technique: 'Honest Commitment',
        feedback: "You were upfront about what you can't promise, then gave a concrete commitment about what you will do. Honesty about limits paired with a genuine action plan is more credible than any guarantee." },
      { text: "I'm very confident in your restaurant's potential — I wouldn't be here if I weren't.", correct: false,
        feedback: "Expressing confidence isn't a guarantee. Be honest about the limits of what you can commit to." },
      { text: "No reputable platform can guarantee results — but our success rates are very strong.", correct: false,
        feedback: "Pointing to success rates while declining to commit doesn't give them what they're asking for." },
      { text: "What would a guarantee need to look like for you to feel comfortable?", correct: false,
        feedback: "Asking them to define the guarantee before being honest that you can't provide one wastes time." },
    ],
  },
  jp37: {
    objection: "I'm thinking about this very carefully because I made a bad business decision two years ago and I'm still recovering.",
    responses: [
      { text: "That context matters and I'm glad you told me. I don't want to add to a difficult recovery — so let's slow down. The questions I'd want you to answer honestly: is the downside here real money at risk? (It's not — no upfront cost, stop anytime.) Is the time investment significant? (About 20 minutes to set up, minimal ongoing.) If both of those are manageable given where you are, it might be low-risk. But you decide.", correct: true, technique: 'Sensitive Context Calibration',
        feedback: "You acknowledged the personal context respectfully and then systematically walked through the actual downside — which is minimal. Letting them draw the conclusion rather than pushing for the answer shows genuine respect for their situation." },
      { text: "I understand — but this decision is much lower risk than most business decisions you'd face.", correct: false,
        feedback: "Minimizing the significance of their past experience before fully engaging with their current concern is dismissive." },
      { text: "What was the decision two years ago? I want to make sure we're not repeating a similar pattern.", correct: false,
        feedback: "Asking about a painful past decision before establishing the low-risk nature of the current one is premature." },
      { text: "That caution is actually a good thing — it means you'll make a more informed decision.", correct: false,
        feedback: "Generic validation doesn't engage with the specific concern they raised." },
    ],
  },
  jp38: {
    objection: "I want you to show me one more time why this is worth signing today specifically.",
    responses: [
      { text: "Here's the honest case for today: every month you wait is a month without delivery revenue and a month without your listing building its first ratings. There's no deadline I'm manufacturing — just the real compounding benefit of starting the reviews and algorithm traction earlier. If today doesn't work for your timeline, January is a perfectly valid start. But if the timing is right, the benefit of starting now is real.", correct: true, technique: 'Genuine Today Case',
        feedback: "You gave an honest reason for today (revenue delay and ratings compounding) without any fake urgency, and acknowledged that January is also valid. This respects their agency while making the real case." },
      { text: "Today is the right time because we've been working toward this moment for several conversations.", correct: false,
        feedback: "The fact that you've had multiple conversations is your concern, not theirs." },
      { text: "There's actually a promotional offer available this week that might not be there next week.", correct: false,
        feedback: "If there's no actual offer expiring, this is manufactured urgency that damages trust." },
      { text: "If you like everything you've heard, what reason would there be to wait?", correct: false,
        feedback: "Challenging them to justify waiting doesn't make the affirmative case for today." },
    ],
  },
  jp39: {
    objection: "I'm signing under one condition — I need to be able to call you directly if something goes wrong.",
    responses: [
      { text: "My mobile number is going in the contract right now. Call me directly for the first 90 days. After that I'll introduce you to your account manager personally before I step back. If there's ever an urgent issue, you call me and I escalate it myself.", correct: true, technique: 'Direct Commitment',
        feedback: "You gave a specific, personal commitment with a mobile number, a 90-day window, and a personal transition plan. For someone making an access condition a requirement for signing, this is exactly the right response." },
      { text: "Of course — our support line is available 24/7 for restaurant partners.", correct: false,
        feedback: "They asked for direct access to you specifically, not a general support line." },
      { text: "I'll put a note in your account that you're a priority contact.", correct: false,
        feedback: "An internal account note is not the same as giving them your direct number." },
      { text: "That's completely reasonable — most of my partners have my contact information.", correct: false,
        feedback: "Agreeing vaguely without actually giving them the information they asked for doesn't fulfill the condition." },
    ],
  },
  jp40: {
    objection: "You've convinced me. What do I actually sign and how long does this take?",
    responses: [
      { text: "Here it is right now — four pages, digital signature, takes about five minutes. Once you sign, I copy our onboarding team and they reach out within 24 hours to schedule a 20-minute menu review call. You're live in 3–5 business days from today. Let's do it.", correct: true, technique: 'Clean Close',
        feedback: "You gave a complete, specific description of the process and moved immediately to action. When someone says you've convinced them, the only right move is to close efficiently and gratefully." },
      { text: "I'll email you the agreement this afternoon and we'll take it from there.", correct: false,
        feedback: "Delaying when they're ready right now loses the momentum entirely." },
      { text: "Before you sign — is there anything else you want to double-check?", correct: false,
        feedback: "Introducing doubt at the moment of close when they just said they're convinced is counterproductive." },
      { text: "I'll have our onboarding team reach out to walk you through the next steps.", correct: false,
        feedback: "Delegating the close to onboarding when you're present and they're ready loses the personal momentum." },
    ],
  },

  // ── THE GREEN MILE — THE FOLLOW UP ────────────────────────────────────────
  hl01: {
    objection: "I told you I'd think about it. I'm still thinking. Please stop calling.",
    responses: [
      { text: "That's fair — I've been too persistent. I'll back off completely. Can I reach out once more in 30 days, and if it's still not the right time I'll close out your file and respect that?", correct: true, technique: 'Respectful Boundary',
        feedback: "You acknowledged the valid complaint, offered a concrete boundary (one final call in 30 days), and gave them a genuine exit. This paradoxically often re-engages people who feel respected rather than pressured." },
      { text: "I understand — I just don't want you to miss out on the opportunity.", correct: false,
        feedback: "Continuing to push after being told you're following up too much ignores their explicit request." },
      { text: "I hear you — I'll pull back. Just know the offer we discussed is still on the table.", correct: false,
        feedback: "Reminding them of the offer while 'pulling back' isn't actually pulling back." },
      { text: "What would need to change for the timing to feel right?", correct: false,
        feedback: "Another question after they asked you to stop following up confirms the concern." },
    ],
  },
  hl02: {
    objection: "I completely forgot we spoke. What was this about again?",
    responses: [
      { text: "No worries at all — easy to lose track. We spoke about adding delivery through Uber Eats. You were interested but wanted more time to think. I can resend the summary I shared, or give you the 90-second version right now if it's easier.", correct: true, technique: 'Warm Re-entry',
        feedback: "You gave context without making them feel bad for forgetting, restated their original interest to reactivate it, and offered two paths forward. Efficient and respectful." },
      { text: "We had a pretty detailed conversation — I'm surprised you don't remember.", correct: false,
        feedback: "Making them feel bad for forgetting immediately creates defensiveness." },
      { text: "I can resend everything from our last conversation — would email work?", correct: false,
        feedback: "Sending materials without a quick context reset means they're reading cold." },
      { text: "We discussed Uber Eats for your restaurant — do you have a few minutes now?", correct: false,
        feedback: "Jumping to 'do you have time now' before restoring context puts them in an awkward position." },
    ],
  },
  hl03: {
    objection: "We talked a month ago. I've moved on. Not interested.",
    responses: [
      { text: "Completely understood — I won't push. One question before I close out your file: what moved you away from it? If it's something I couldn't answer then, I want to know. And if the timing just changed, I'll check back in six months if you're open to it.", correct: true, technique: 'Exit Discovery',
        feedback: "You respected the decision, asked the one question that might reveal a solvable issue, and offered a long-term future contact if appropriate. Closing well keeps the relationship open." },
      { text: "Can I ask what changed? I'd like to understand where we lost you.", correct: false,
        feedback: "The right instinct, but asking 'where we lost you' sounds like you're auditing the failure rather than genuinely understanding. Softer framing is more effective." },
      { text: "A lot can change in a month — is there anything new I can share that might reopen the conversation?", correct: false,
        feedback: "Trying to manufacture new information to reopen a closed door creates pressure." },
      { text: "I understand. Is there a better time later in the year to reconnect?", correct: false,
        feedback: "Good option, but ask the exit question first — you'll either find a recoverable issue or leave a genuinely warm pipeline entry." },
    ],
  },
  hl04: {
    objection: "I emailed you two weeks ago saying I wasn't interested. Did you not see it?",
    responses: [
      { text: "I apologize — I missed that email. I should have caught it and respected your answer. I won't call again. If anything changes down the road and you want to revisit, here's how to reach me. Thanks for your patience.", correct: true, technique: 'Accountability Exit',
        feedback: "You took full accountability for missing the email, committed to stopping, and left the door open gracefully. This is the only appropriate response — anything less is dismissing a clear signal." },
      { text: "I'm sorry — can I ask what specifically made you decide not to move forward?", correct: false,
        feedback: "Probing for reasons after missing their explicit 'no' email adds insult to the oversight." },
      { text: "I may have missed it — but since we're talking, can I share one thing quickly?", correct: false,
        feedback: "Pivoting to a pitch after acknowledging you ignored their email confirms why they're frustrated." },
      { text: "Let me check my inbox — I'm sorry about that. Can you resend it?", correct: false,
        feedback: "Asking them to re-send a 'not interested' email extends a conversation that should end immediately." },
    ],
  },
  hl05: {
    objection: "The timing still isn't right for us. We have a lot going on.",
    responses: [
      { text: "Understood. Can I check back in six weeks? And if it helps, I'll send a brief summary before then so when the timing is right, it's not a cold start.", correct: true, technique: 'Timed Re-entry',
        feedback: "You accepted the timing, proposed a specific future date, and offered a warm-up send. Simple, professional, and keeps the pipeline warm without pressure." },
      { text: "Of course — let me know when things settle down and I'll reach out then.", correct: false,
        feedback: "Vague 'let me know' leaves the follow-up in their hands rather than yours. Get a specific date." },
      { text: "What's going on? If I understand the situation I might be able to help.", correct: false,
        feedback: "Probing into their personal business challenges when they've asked for time creates intrusion." },
      { text: "Is there a timeline in mind for when things might stabilize?", correct: false,
        feedback: "Getting a timeline is useful but secondary to accepting the current constraint and proposing a specific date." },
    ],
  },
  hl06: {
    objection: "Something came up with our location — everything is on hold for now.",
    responses: [
      { text: "I hope whatever it is resolves smoothly. I'll reach out in 8 weeks to see where things stand. No pressure — if it's still not the right time, we'll push further out.", correct: true, technique: 'Graceful Hold',
        feedback: "You expressed genuine good will, proposed a specific future date, and removed pressure explicitly. This is the right approach when a real external situation has paused the process." },
      { text: "That sounds rough — what happened, if you don't mind me asking?", correct: false,
        feedback: "Probing into a problem they've indicated is private extends a moment that should end gracefully." },
      { text: "When do you think things will be resolved? I can plan around that.", correct: false,
        feedback: "Asking for a timeline when someone has said everything is on hold sounds like you're managing them to a schedule." },
      { text: "Is there anything I can do to be helpful during this time?", correct: false,
        feedback: "Offering help with an unknown situation before knowing what the issue is can seem presumptuous." },
    ],
  },
  hl07: {
    objection: "I'm still not convinced this would work for a restaurant like ours.",
    responses: [
      { text: "That's a fair place to be. What's the specific part that doesn't feel like a fit? I've spoken to a lot of hesitant restaurants that ended up pleasantly surprised, but I've also spoken to some where the fit genuinely wasn't there. I'd rather find out which one this is.", correct: true, technique: 'Genuine Qualification',
        feedback: "You validated the skepticism and asked the specific qualifying question. Being honest that some restaurants genuinely aren't a fit builds more credibility than trying to convince everyone." },
      { text: "I think you'd be surprised — the platform works for a wide range of restaurant types.", correct: false,
        feedback: "Vague reassurance doesn't address the specific doubt they raised." },
      { text: "What type of restaurant do you consider a good fit for this? I want to understand your thinking.", correct: false,
        feedback: "Asking them to define the fit criteria before identifying what their specific concern is goes in the wrong direction." },
      { text: "Can I show you a few restaurants similar to yours that are doing well?", correct: false,
        feedback: "Good offer, but find out what the specific fit concern is first — the examples will be more targeted once you know." },
    ],
  },
  hl08: {
    objection: "We launched two months ago and the results have been underwhelming.",
    responses: [
      { text: "I'm glad you told me — that's exactly what I need to know. Can we look at your dashboard together? I want to see your listing photos, pricing, reviews, and what promotions you've run. Most underperformance at two months comes from one or two fixable things, and I'd rather find them than have you walk away thinking the platform doesn't work.", correct: true, technique: 'Account Rescue',
        feedback: "You turned a churn risk into a diagnostic partnership. Offering to audit the account shows accountability and positions you as a partner invested in their success." },
      { text: "Two months can be a slow start — things usually pick up in month three.", correct: false,
        feedback: "Passive reassurance with no action plan doesn't show you care about fixing the specific underperformance." },
      { text: "What does 'underwhelming' mean to you — order volume, revenue, or both?", correct: false,
        feedback: "Good discovery question but only after showing you're ready to take action, not just collect information." },
      { text: "I'll flag your account to our partner success team — they'll reach out this week.", correct: false,
        feedback: "Delegating when you can take direct ownership makes it feel like you're passing the problem off." },
    ],
  },
  hl09: {
    objection: "We've been on the platform for three months and I want to talk about performance. It's been mixed.",
    responses: [
      { text: "I appreciate you saying mixed rather than just good or bad — that's the most useful kind of feedback. Can we look at the dashboard together right now? I want to see specifically which items are performing, what your rating trend looks like, and where the drop-offs are happening. Mixed usually means one thing is working and something else isn't — let's find what that is.", correct: true, technique: 'Performance Diagnosis',
        feedback: "You validated the nuance of 'mixed' feedback, proposed a specific action (dashboard review), and gave a framework for what you're looking for. This shows genuine analytical engagement." },
      { text: "Mixed is actually pretty common at three months — the optimization takes time.", correct: false,
        feedback: "Normalizing 'mixed' without a plan to improve it doesn't show you're taking the feedback seriously." },
      { text: "What does 'mixed' mean specifically — some good orders and some bad reviews?", correct: false,
        feedback: "Good discovery but offer the dashboard review first so you have actual data to look at together." },
      { text: "Let me check your account and see what I can find.", correct: false,
        feedback: "Checking on your own without inviting them into the diagnosis misses the partnership opportunity." },
    ],
  },
  hl10: {
    objection: "I've been meaning to get back to you but keep running out of time. Can I call you this week?",
    responses: [
      { text: "Absolutely. I have Thursday at 2pm or Friday at 10am open — which works better for you?", correct: true, technique: 'Calendar Close',
        feedback: "You said yes immediately and offered two specific options. Giving specific times converts 'I'll call you' from a vague intention into a confirmed appointment." },
      { text: "Of course — I'll wait to hear from you.", correct: false,
        feedback: "Passive waiting puts the follow-up entirely in their hands, which rarely results in a call." },
      { text: "Great — what day works best? I'll be flexible around your schedule.", correct: false,
        feedback: "Open-ended 'what day' extends the scheduling back and forth. Offer specific times and let them choose." },
      { text: "Perfect — morning or afternoon?", correct: false,
        feedback: "Closer, but still requires another exchange to get to a confirmed time. Give specific options." },
    ],
  },
  hl11: {
    objection: "I said maybe and I still mean maybe. I don't have a better answer for you.",
    responses: [
      { text: "That's a perfectly honest answer — I appreciate it. Can I ask what would change a maybe to a yes? Not what I can offer you, just what would need to be true in your situation for this to be an easy call.", correct: true, technique: 'Maybe to Yes Discovery',
        feedback: "You respected the maybe rather than pressuring for a yes, and asked the one question that might reveal the real barrier: not what you can do, but what would need to change in their situation." },
      { text: "A maybe is a start — let me share some new information that might help move it forward.", correct: false,
        feedback: "Trying to push past a stated maybe with 'new information' ignores their clearly expressed ambiguity." },
      { text: "I completely understand — when do you think you might have a clearer answer?", correct: false,
        feedback: "Good to eventually get a timeline, but ask what would change the answer first — a timeline without knowing the barrier is just scheduling." },
      { text: "Most people in your position end up saying yes once they start — the maybe usually resolves itself.", correct: false,
        feedback: "Predicting their decision for them is presumptuous and often creates resistance." },
    ],
  },
  hl12: {
    objection: "There was a management change. The person I spoke to left the company.",
    responses: [
      { text: "Thanks for letting me know — I appreciate the context. Can I introduce myself fresh? I'm with Uber Eats, and I'd love to set up a brief call to understand where things stand on your end. I'll share what was discussed before so you're not starting from zero.", correct: true, technique: 'Fresh Introduction',
        feedback: "You acknowledged the change gracefully, introduced yourself without assuming continuity, and offered to bring the previous context with you. This is the right way to restart with a new decision-maker." },
      { text: "I understand — who's the right person to speak to now?", correct: false,
        feedback: "Asking for the new contact before introducing yourself misses the chance to build rapport with whoever you're speaking to." },
      { text: "I can resend everything from the previous conversations so you're fully caught up.", correct: false,
        feedback: "A document dump doesn't establish a relationship with the new person — start with a conversation." },
      { text: "I hope the transition went smoothly. Should I reach out in a few weeks when things have settled?", correct: false,
        feedback: "Waiting without making the introduction attempt loses the current opportunity." },
    ],
  },
  hl13: {
    objection: "A competitor platform reached out with a better offer. I'm evaluating both now.",
    responses: [
      { text: "Fair — that's the right thing to do. What's the offer? I want to understand if what they're proposing is actually better for your specific situation, or if it looks better on the surface but has tradeoffs. I'm happy to give you an honest comparison rather than just defend our offer.", correct: true, technique: 'Honest Competitive Analysis',
        feedback: "You invited the competitor's offer into the conversation rather than getting defensive. Offering to give an honest comparison rather than just defending your position builds trust and surfaces what they're actually weighing." },
      { text: "I understand — but I'd encourage you to look carefully at the total picture, not just the headline rate.", correct: false,
        feedback: "Vague warnings about 'the total picture' without knowing what the competitor offered sounds defensive." },
      { text: "What platform reached out? I want to make sure I understand the comparison.", correct: false,
        feedback: "Good to know eventually, but ask what the offer is first — that's the actionable piece." },
      { text: "We've been in this conversation longer — I hope that relationship has value in your decision.", correct: false,
        feedback: "Using relationship length as a competitive argument is a weak close." },
    ],
  },
  hl14: {
    objection: "I want to expand to a second location. How would that work with our current agreement?",
    responses: [
      { text: "Great news to hear. Adding a second location is a separate listing — same terms, same onboarding process, independent account. The advantage of already being a partner is that I can expedite the second location's setup and your team already knows the workflow. Want to schedule a call this week to scope out the second location?", correct: true, technique: 'Expansion Facilitation',
        feedback: "You answered the process question clearly, named the specific advantage of existing partnership (expedited setup, known workflow), and moved immediately to scheduling. This is the right response to an expansion signal." },
      { text: "Absolutely — we can set up a second location easily. I'll have onboarding reach out.", correct: false,
        feedback: "Delegating to onboarding when you can take direct ownership of an expansion opportunity misses the relationship moment." },
      { text: "Second locations usually perform even better than the first — the brand recognition carries over.", correct: false,
        feedback: "Vague reassurance doesn't answer the process question they asked." },
      { text: "How is the first location performing right now? That context would help me plan the second.", correct: false,
        feedback: "Good discovery but answer the process question first, then explore the first location's performance." },
    ],
  },
  hl15: {
    objection: "I never signed because I never heard back after our initial call. What happened?",
    responses: [
      { text: "That's on me — I should have followed up and I didn't. I apologize for dropping the ball. If you're still open to it, I'd like to pick up where we left off. I can give you a brief reset in 15 minutes and we can decide together whether it still makes sense.", correct: true, technique: 'Direct Accountability',
        feedback: "You took full accountability without excuses, apologized clearly, and immediately proposed a specific path forward. Admitting the failure and asking for a second chance is far more credible than a deflection." },
      { text: "I'm sorry about that — there may have been a system issue on our end.", correct: false,
        feedback: "Blaming a system issue deflects accountability from a clear follow-up failure." },
      { text: "I apologize — who was your contact at Uber Eats? I want to investigate what happened.", correct: false,
        feedback: "Investigating internally when the immediate priority is re-engaging the prospect delays the right response." },
      { text: "I'm sorry to hear that — are you still interested in moving forward?", correct: false,
        feedback: "You took accountability in the apology but then jumped straight to asking if they're still interested without proposing how to pick up the thread." },
    ],
  },
  hl16: {
    objection: "I sent back the contract with two questions and never got a response. I've moved on.",
    responses: [
      { text: "That's a completely understandable reason to move on — and it's a failure on our side. I apologize. Can I ask what the two questions were? If I can answer them right now, it shows you the responsiveness you should have gotten then. And if you genuinely want nothing to do with this, I completely respect that.", correct: true, technique: 'Accountability + Retry',
        feedback: "You took full accountability, apologized, and then proposed the most credible possible recovery: answer the questions right now. This shows the responsiveness they should have had and might re-open the door." },
      { text: "I'm sorry about that — there may have been a miscommunication in our process.", correct: false,
        feedback: "Vague process-blame without answering the questions is a weak recovery." },
      { text: "Let me look into what happened to that email.", correct: false,
        feedback: "Investigating the past failure isn't what they need — they need their questions answered." },
      { text: "I understand — do you have any interest in reopening the conversation?", correct: false,
        feedback: "Jumping to 'do you want to reopen' before addressing the failure or answering the questions misses the real opportunity." },
    ],
  },
  hl17: {
    objection: "We had a kitchen fire last month. Things have been very difficult.",
    responses: [
      { text: "I'm really sorry to hear that — I hope everyone is okay and that the recovery is going smoothly. Please don't think about this at all right now. I'll reach out in three months to see how things are going, and only if it feels right to revisit this conversation then.", correct: true, technique: 'Human First',
        feedback: "You responded as a human being first, removed all business pressure immediately, and proposed a check-in only at a respectful distance. This is the only appropriate response to a serious personal or operational crisis." },
      { text: "That sounds really hard. Is there anything delivery revenue could help with during the recovery?", correct: false,
        feedback: "Trying to pitch during a crisis is tone-deaf and will permanently damage the relationship." },
      { text: "Take all the time you need — I'll check back in a few weeks.", correct: false,
        feedback: "A few weeks is too soon after a kitchen fire. Propose a much longer window that genuinely gives them space." },
      { text: "I hope things improve. When might be a good time to reconnect?", correct: false,
        feedback: "Asking for a reconnect date immediately after they shared a crisis signals you're more focused on the deal than their situation." },
    ],
  },
  hl18: {
    objection: "I said no six months ago. Why are you calling again?",
    responses: [
      { text: "Fair question. I'm calling because a specific thing changed: there are now three restaurants in your immediate area that have joined in the past 90 days, and one of them is directly comparable to yours. I thought you'd want to know before deciding whether your no still stands. If it does, I won't call again.", correct: true, technique: 'New Information Frame',
        feedback: "You gave a specific, verifiable reason for calling after a previous no — not just checking in, but sharing concrete new information that might change the calculus. And you offered a genuine exit if it doesn't." },
      { text: "I wanted to follow up in case your situation had changed.", correct: false,
        feedback: "Vague 'in case things changed' re-contact after a no doesn't give them a reason to engage." },
      { text: "A lot has changed on the platform in six months — I thought it was worth reconnecting.", correct: false,
        feedback: "'A lot has changed' is vague. Give one specific change that's directly relevant to their decision." },
      { text: "I apologize if the timing is wrong — when would be a better time to reconnect?", correct: false,
        feedback: "Apologizing without giving the reason for calling leaves them with no reason to schedule a new time." },
    ],
  },
  hl19: {
    objection: "I'm glad you called — I've actually been thinking about revisiting this.",
    responses: [
      { text: "That's great to hear. What changed? I want to make sure I understand where you are now so I give you the most relevant conversation — not just a repeat of what we covered before.", correct: true, technique: 'Re-engagement Discovery',
        feedback: "You received the positive signal warmly and immediately asked the key question: what changed? This avoids repeating the old pitch and shows genuine interest in their current situation." },
      { text: "Great — let me walk you through everything again so we're on the same page.", correct: false,
        feedback: "Immediately launching into a repeat pitch misses the chance to understand what's new and what they already know." },
      { text: "Wonderful — I'm so glad the timing worked out. Are you ready to move forward?", correct: false,
        feedback: "Jumping to a close without understanding what changed or what questions they have now is premature." },
      { text: "Perfect timing — can we schedule a full follow-up call this week?", correct: false,
        feedback: "If they're expressing interest right now, move the conversation forward in this moment rather than scheduling it for later." },
    ],
  },
  hl20: {
    objection: "The onboarding rep promised support that never materialized. I'm frustrated.",
    responses: [
      { text: "That's a legitimate frustration and I'm sorry it happened. I'm going to own this: I'll personally schedule a session with you this week to go through everything that should have been covered, and I'll make sure you have my direct number for any issues going forward. What's a good time?", correct: true, technique: 'Personal Accountability Recovery',
        feedback: "You took ownership directly, proposed a specific, immediate action (a personal session this week), and gave them direct access going forward. This turns a service failure into a relationship recovery." },
      { text: "I apologize — that shouldn't have happened. I'll escalate to the onboarding team to follow up.", correct: false,
        feedback: "Escalating to the team that already failed them reinforces the concern about follow-through." },
      { text: "I understand your frustration — what specifically was promised that didn't happen?", correct: false,
        feedback: "Good discovery, but take ownership and propose a specific action first — then fill in the details." },
      { text: "Our onboarding team has improved significantly — let me reconnect you.", correct: false,
        feedback: "Defending the team and reconnecting them without acknowledging their specific experience is tone-deaf." },
    ],
  },
  hl21: {
    objection: "We launched but our rating dropped in the first month. I'm worried.",
    responses: [
      { text: "A rating drop in month one is actually common — and it's almost always fixable. The two main culprits are delivery time being set too aggressively (orders arriving later than promised) or missing items on the delivery menu. Can we look at your dashboard together right now? I want to see the specific negative reviews so we know exactly what's driving it.", correct: true, technique: 'Rating Diagnosis',
        feedback: "You normalized the concern without dismissing it, named the two most common causes, and proposed an immediate, specific action. This is the kind of operational knowledge that builds partner trust." },
      { text: "Rating drops happen sometimes — it usually stabilizes after the first few months.", correct: false,
        feedback: "Passive reassurance about stabilization doesn't show you're taking the problem seriously." },
      { text: "What specific reviews are you seeing? That would help me understand the issue.", correct: false,
        feedback: "Good discovery but offer to look at the dashboard together — that's more efficient and shows hands-on partnership." },
      { text: "I'll flag your account to our quality team — they can review the rating issue.", correct: false,
        feedback: "Delegating to a team when you can take direct ownership misses the partnership opportunity." },
    ],
  },
  hl22: {
    objection: "We're getting orders but they don't feel profitable. Help me understand why.",
    responses: [
      { text: "Let's build the actual math together. I need three numbers: your average delivery ticket size, your food cost percentage, and your current commission tier. From there I can show you the true incremental margin on a delivery order — and we can see if there's a pricing or menu mix issue. Do you have those numbers handy?", correct: true, technique: 'Margin Diagnosis',
        feedback: "You turned a vague profitability concern into a specific, solvable math exercise. Asking for three precise inputs shows you know how to diagnose the problem." },
      { text: "Delivery margin is often tighter than people expect — it's a volume game.", correct: false,
        feedback: "Normalizing low margins without offering to diagnose the specific cause doesn't help them." },
      { text: "The main issue is usually menu pricing — are you using the same prices as dine-in?", correct: false,
        feedback: "Good hypothesis, but run the full diagnosis first before landing on one cause." },
      { text: "What does a typical delivery order look like for you?", correct: false,
        feedback: "Good starting question, but pair it with the full model framework so they know where you're going with it." },
    ],
  },
  hl23: {
    objection: "I referred you to my friend who owns the sushi place. Did you follow up with them?",
    responses: [
      { text: "I did reach out — we had a conversation last week and they're considering the timing. Thank you for the referral. How do you know them — is it a close relationship? A warm word from you would mean a lot more than anything I could say.", correct: true, technique: 'Referral Activation',
        feedback: "You confirmed the follow-up (accountability), thanked them, and leveraged the relationship by asking for a warm endorsement. This is the right way to activate a referral rather than just managing it passively." },
      { text: "Yes, I'll be sure to follow up with them this week.", correct: false,
        feedback: "If they're asking, they expect you've already followed up. Saying you'll do it 'this week' signals you haven't." },
      { text: "I haven't reached out yet — can you give me their contact information again?", correct: false,
        feedback: "Admitting you haven't followed up on a referral to the person who gave it makes you look unreliable." },
      { text: "Thanks for the referral! Did they seem interested when you mentioned us?", correct: false,
        feedback: "Asking what they said before confirming you followed up puts you in a passive position." },
    ],
  },
  hl24: {
    objection: "We signed up but I was never properly trained on the dashboard. Can someone walk me through it?",
    responses: [
      { text: "Absolutely — let's do it right now if you have 20 minutes. I'll share my screen and walk you through the four main sections: your order flow, your revenue summary, your menu management, and your reviews. By the end you'll have everything you need to run it day to day.", correct: true, technique: 'Immediate Training',
        feedback: "You accepted the request and offered to do it immediately rather than scheduling it for later. Proposing a live screen-share walkthrough right now is far more useful than sending a guide or booking a future call." },
      { text: "Of course — I'll have our onboarding team schedule a training session this week.", correct: false,
        feedback: "Delegating to onboarding when you can do it right now delays the help they need." },
      { text: "I can send you our dashboard guide — it covers all the main functions.", correct: false,
        feedback: "A self-service guide is less helpful than a live walkthrough, especially when they've already been through onboarding without training." },
      { text: "What specific parts of the dashboard are you most confused about?", correct: false,
        feedback: "Good discovery but offer to do the full walkthrough first — they may not know what they don't know." },
    ],
  },
  hl25: {
    objection: "Our first three months have been really good. I want to understand how to make the next three even better.",
    responses: [
      { text: "This is the best kind of conversation to have at 90 days. Let's look at your dashboard together. I want to see where your orders are coming from, what items are performing best, your rating trend, and whether you've run any promotions yet. There's almost always one underutilized lever — usually either Sponsored Listings or a promotion — that can move your volume meaningfully. Shall we do it now?", correct: true, technique: 'Growth Audit',
        feedback: "You responded to positive performance with a specific growth audit rather than vague congratulations. Naming the one typically underutilized lever (promotions) gives them an immediate preview of what you'll find." },
      { text: "That's great to hear — keep doing what you're doing!", correct: false,
        feedback: "Celebrating good results without offering a path to better ones misses a genuine growth opportunity." },
      { text: "There are a few things that can move the needle at this stage — promotions, photos, and listing optimization.", correct: false,
        feedback: "Listing options without looking at their specific situation first misses the diagnosis step." },
      { text: "What do you think has been driving your strong performance so far?", correct: false,
        feedback: "Good discovery but offer the dashboard audit first so the conversation has real data in it." },
    ],
  },
  hl26: {
    objection: "I said I needed six months before I'd reconsider. It's only been four. Why are you calling?",
    responses: [
      { text: "Fair point — I'm two months early and I should have respected the timeline. The reason I called: two restaurants in your immediate area just joined the platform in the last 30 days, and I didn't want you to hear about it after the fact. If your six-month timeline still stands, I'll call in eight weeks exactly. But I wanted you to have that context.", correct: true, technique: 'Early Re-entry Rationale',
        feedback: "You acknowledged being early, gave a specific and genuinely relevant reason for the early call (local competitor activity), and offered to respect the original timeline. This is honest and respectful." },
      { text: "I just wanted to check in and see if anything had changed.", correct: false,
        feedback: "Vague check-ins that disrespect a stated timeline build frustration, not rapport." },
      { text: "I apologize for the early call — but I think the timing is actually right now.", correct: false,
        feedback: "Overriding their stated preference by insisting 'now is actually right' is dismissive." },
      { text: "I realize it's a bit early. Is there any chance the timeline has moved up?", correct: false,
        feedback: "Asking if the timeline moved without giving a reason creates friction without substance." },
    ],
  },
  hl27: {
    objection: "We're doing okay on the platform but I wonder if we're leaving revenue on the table.",
    responses: [
      { text: "That instinct is probably right — and it's exactly the kind of question I can answer with data. Can we look at your dashboard together? I want to see your conversion rate from listing views to orders, your average ticket compared to similar restaurants, and whether your promotion history has any gaps. That usually tells us where the opportunity is.", correct: true, technique: 'Revenue Audit',
        feedback: "You validated the instinct and immediately offered a data-driven audit with specific metrics to examine. This is precisely what an analytically-minded owner wants to hear." },
      { text: "There's almost always room to grow — promotions are usually the fastest lever.", correct: false,
        feedback: "Generic advice without looking at their specific situation first is less credible than a real audit." },
      { text: "What does 'okay' look like in terms of monthly orders and revenue?", correct: false,
        feedback: "Good baseline question, but offer the dashboard audit first so the baseline fits into a diagnostic framework." },
      { text: "I can send you some optimization tips that usually help restaurants at your stage.", correct: false,
        feedback: "Tips documents are passive. Offer a live, specific audit using their actual data." },
    ],
  },
  hl28: {
    objection: "I've been wanting to update my menu but I don't know how to do it in the dashboard.",
    responses: [
      { text: "Let's do it together right now — it takes about 5 minutes. I'll walk you through the menu editor: adding items, updating prices, 86-ing something temporarily, and uploading a new photo. After this you'll be able to do it yourself anytime. Do you have the dashboard open?", correct: true, technique: 'Immediate Enablement',
        feedback: "You offered to solve the problem live and immediately, framed it as teaching rather than doing-for-them, and set the expectation that they'll be able to do it independently after. Perfect partner support." },
      { text: "Our menu editing guide covers all the steps — I can send it now.", correct: false,
        feedback: "A guide is less helpful than a live walkthrough for someone who's already been struggling to figure it out." },
      { text: "The menu editor is actually quite intuitive — once you're in it you'll find it easy.", correct: false,
        feedback: "Telling them it's easy when they've said they don't know how to do it is dismissive." },
      { text: "What specifically are you trying to update? I can tell you where to find it.", correct: false,
        feedback: "Answering individual questions one at a time is less efficient than a full walkthrough." },
    ],
  },
  hl29: {
    objection: "I want to run a promotion but I have no idea where to start.",
    responses: [
      { text: "I'll set it up with you right now. For a first promotion, I usually recommend a 20% off your first order deal — it drives new customer trials without cannibalizing regulars who are already ordering. The platform co-funds part of the discount. It takes about 10 minutes to configure and you can set a daily budget cap so you're never surprised by the cost. Ready?", correct: true, technique: 'Promotion Setup',
        feedback: "You offered to set it up immediately, gave a specific recommendation for a first promotion (not a generic 'it depends'), explained the co-funding, and added the budget cap detail that addresses potential cost anxiety. This is hands-on partnership." },
      { text: "There are several promotion types available — it depends on your goals.", correct: false,
        feedback: "Opening with 'it depends' when they don't know where to start is unhelpful. Give a specific recommendation." },
      { text: "I can walk you through the promotion options in the dashboard.", correct: false,
        feedback: "Walking through options is less useful than recommending a specific starting point and setting it up together." },
      { text: "What are you hoping to achieve with the promotion — new customers or more volume from existing ones?", correct: false,
        feedback: "Good discovery eventually, but give a clear first recommendation first — they can refine once they understand the options." },
    ],
  },
  hl30: {
    objection: "Our order volume dropped 40% this month with no explanation. I need to understand why.",
    responses: [
      { text: "A 40% drop with no obvious cause usually comes from one of three things: a rating drop from a cluster of bad reviews, a competitor getting a Sponsored Listing in your area, or a platform update that changed where you appear in search. Let's check all three right now in your dashboard — it takes about 10 minutes to identify the specific cause.", correct: true, technique: 'Volume Drop Diagnosis',
        feedback: "You named the three most common causes of unexplained volume drops and offered to diagnose all three immediately. This is operational expertise delivered with genuine urgency." },
      { text: "Volume fluctuations are normal — a 40% drop can sometimes be seasonal.", correct: false,
        feedback: "Normalizing a 40% unexplained drop as 'seasonal' when they're asking for an explanation is dismissive." },
      { text: "That's a significant drop. Can you tell me more about what changed on your side?", correct: false,
        feedback: "Putting the diagnostic burden on them before sharing what you can check on your side is the wrong direction." },
      { text: "I'll escalate this to our partner success team — they can investigate the account.", correct: false,
        feedback: "Delegating to a team when you can diagnose this directly makes you look uninvested in the problem." },
    ],
  },
  hl31: {
    objection: "Things have slowed down and I'm thinking about pausing my account. Is that easy to do?",
    responses: [
      { text: "Yes — you can pause directly in the dashboard in about 30 seconds, and there's no fee or penalty. Before you do: can I look at your account with you first? A 10-minute diagnostic usually reveals whether the slowdown is fixable — bad reviews, a pricing issue, or a visibility gap — or whether it really is a timing thing. If it's fixable, you can stay. If it's not, pausing is the right call and I'll help you do it.", correct: true, technique: 'Diagnose Before Pause',
        feedback: "You answered the pause question immediately (yes, 30 seconds, no penalty), then offered to diagnose before they made the call. This keeps the account while showing genuine care about whether the decision is the right one." },
      { text: "Of course — pausing is very easy. Go to Settings > Account > Pause Delivery.", correct: false,
        feedback: "Just giving the pause instructions without offering to diagnose the cause misses a chance to retain the account." },
      { text: "I'd encourage you not to pause — things usually pick up after a slow period.", correct: false,
        feedback: "Generic reassurance without offering a diagnosis creates pressure without substance." },
      { text: "What's caused the slowdown on your side?", correct: false,
        feedback: "Good question, but answer the pause mechanics question first, then offer the diagnostic — don't put them in the position of explaining themselves before knowing the pause is easy." },
    ],
  },
  hl32: {
    objection: "I'm thinking about leaving the platform. Before I cancel, is there anything I'm missing?",
    responses: [
      { text: "I'm glad you asked before deciding. Can we do a quick 10-minute diagnostic together? I want to see your rating, your listing photo quality, your pricing relative to similar restaurants, and your recent review content. Most restaurants that have considered leaving find at least one fixable thing that's driving their frustration. And if we look and there's genuinely nothing to fix, I'll help you exit cleanly.", correct: true, technique: 'Pre-Cancellation Audit',
        feedback: "You took the question seriously without being defensive, offered a specific audit rather than generic reassurance, and gave them the honest exit promise if the audit doesn't reveal a fix. This is genuine partnership." },
      { text: "I'd hate to see you leave — what's the specific frustration?", correct: false,
        feedback: "Good question but offer the diagnostic structure first — a structured audit will surface more information than asking them to describe their frustration." },
      { text: "Most issues that lead to leaving are fixable — there's usually something we can do.", correct: false,
        feedback: "Vague 'there's usually something we can do' without offering to do it isn't helpful." },
      { text: "What would need to change for you to stay?", correct: false,
        feedback: "Asking them to prescribe the solution puts the burden in the wrong place. Offer the diagnostic first." },
    ],
  },
  hl33: {
    objection: "I turned down your competitor last week. I'm still thinking about whether to stay with Uber Eats long term.",
    responses: [
      { text: "I'm glad you turned them down — and I want to earn that loyalty, not assume it. What would make 'long term' feel like an easy decision? Not what you need from me as a sales ask, just what would need to be true about your results for you to feel confident staying.", correct: true, technique: 'Long-Term Retention Discovery',
        feedback: "You thanked them without being self-congratulatory, acknowledged that loyalty needs to be earned, and asked the right question: what results would make the long-term decision easy. This frames the relationship around their goals, not your retention." },
      { text: "I'm glad to hear that — let me show you what else we can do to help you grow.", correct: false,
        feedback: "Jumping to upsell without asking what would make them want to stay long-term misses the retention moment." },
      { text: "What was the competitor offering that made it tempting?", correct: false,
        feedback: "Good competitive intel eventually, but ask what would make them want to stay first — that's more important than understanding the competitor's pitch." },
      { text: "What has your experience been like so far? I want to understand what's working and what isn't.", correct: false,
        feedback: "Good relationship question, but the specific 'long-term' framing they raised deserves a more targeted response." },
    ],
  },
  hl34: {
    objection: "I haven't logged into the dashboard in two months. I'm probably missing things.",
    responses: [
      { text: "Probably — but the good news is it's all still there. Can we do a 15-minute catch-up right now? I'll walk you through what's happened in the past two months: your volume trend, any rating changes, and what your best-performing items have been. There might be one thing that's easy to fix that's costing you orders.", correct: true, technique: 'Re-engagement Walkthrough',
        feedback: "You turned neglect into opportunity by offering a specific re-engagement session with a concrete benefit (there might be something easy to fix). This is helpful rather than judgmental." },
      { text: "You should definitely log in — there might be important notifications waiting for you.", correct: false,
        feedback: "Telling them what they should do without offering to help them do it isn't useful." },
      { text: "What's been keeping you so busy? I want to understand why the dashboard fell off your radar.", correct: false,
        feedback: "Probing into why they've been busy before offering help is condescending." },
      { text: "Let me send you a summary of your performance from the past two months.", correct: false,
        feedback: "Sending a document is passive. A live walkthrough together is far more effective and shows you care." },
    ],
  },
  hl35: {
    objection: "I want to introduce you to my friend who's opening a new restaurant. Can I give them your number?",
    responses: [
      { text: "Absolutely — thank you so much. Could I reach out to them directly as well? That way they hear from me soon and know the connection came from you. What's their name and the best way to reach them?", correct: true, technique: 'Proactive Referral Capture',
        feedback: "You accepted the referral enthusiastically, asked to reach out directly (which is more reliable than waiting), and asked for the name — all while attributing the introduction to them. This is the right way to capture and activate a referral." },
      { text: "Of course — please do! Tell them to mention your name.", correct: false,
        feedback: "Passive referrals rarely convert. Ask to reach out directly so you can follow up promptly." },
      { text: "That would be great — what's your friend's restaurant concept?", correct: false,
        feedback: "Good context eventually, but get their contact information first before exploring the concept." },
      { text: "Thank you — referrals are the best way to grow. I'll reach out if they contact me.", correct: false,
        feedback: "Waiting for the referral to come to you is the least effective approach. Capture their contact and reach out directly." },
    ],
  },
  hl36: {
    objection: "Something you said in our first call months ago stuck with me and I want to revisit this.",
    responses: [
      { text: "I'm glad to hear it — what was it? I want to make sure I understand exactly what resonated so this conversation picks up from the right place, not from the beginning.", correct: true, technique: 'Memory-Led Re-entry',
        feedback: "You received the warm signal gratefully and asked the specific question that makes the re-engagement most productive: what was it that stuck? This gives you a foundation to build from rather than starting over." },
      { text: "Wonderful — let me give you a full recap of what we discussed so we're on the same page.", correct: false,
        feedback: "A full recap when they've said something specific stuck misses the opportunity to pick up from exactly that point." },
      { text: "Great timing! A lot has changed on the platform since we last spoke.", correct: false,
        feedback: "Leading with 'a lot has changed' instead of asking what they remembered shifts the focus away from what re-engaged them." },
      { text: "I'm glad you reached out — are you ready to move forward?", correct: false,
        feedback: "Jumping to a close before understanding what they want to revisit is premature." },
    ],
  },
  hl37: {
    objection: "We tried running a discount promotion and it hurt our margins. I want to understand what went wrong.",
    responses: [
      { text: "I can figure this out with you. Three common causes: one, the discount was too deep relative to your margins — 20% can work, 40% usually doesn't. Two, delivery menu pricing was the same as dine-in, so the discount came entirely off your margin with no buffer. Three, no budget cap was set, so a high-volume day cost more than expected. Can you tell me what percentage you ran and whether you had a daily spend limit?", correct: true, technique: 'Promotion Failure Diagnosis',
        feedback: "You named three specific, common failure modes and asked the precise questions that identify which one applied. This is the kind of operational expertise that makes restaurant owners trust their rep." },
      { text: "Promotions can be tricky — the discount amount is the key variable.", correct: false,
        feedback: "Vague advice doesn't help them understand what specifically went wrong." },
      { text: "What discount percentage did you run? That's usually where things go wrong.", correct: false,
        feedback: "Good start, but give the full three-cause framework so they understand all the variables before you narrow to their specific issue." },
      { text: "I'll review your promotion history and let you know what I find.", correct: false,
        feedback: "Reviewing on your own without involving them in the diagnosis is less useful than working through it together." },
    ],
  },
  hl38: {
    objection: "You helped me launch six months ago. I want to introduce you to my business partner for our second location.",
    responses: [
      { text: "I'd love that — thank you for thinking of me. How has the first location been performing? I want to make sure I go into that conversation with a clear picture of what's worked well, what you'd do differently, and what the second location needs to succeed even faster.", correct: true, technique: 'Expansion Preparation',
        feedback: "You accepted the introduction gracefully, thanked them, and immediately prepared for the best possible second location conversation by asking for a performance debrief. This shows you're invested in making the second location a success, not just signing it." },
      { text: "That's great — please introduce me and I'll take it from there!", correct: false,
        feedback: "Going into the partner introduction cold misses the chance to bring the first location's learnings to the conversation." },
      { text: "I'd love to. What's the second location's concept and timeline?", correct: false,
        feedback: "Good questions, but ask about the first location's performance first — those learnings are the most valuable thing you can bring to the expansion conversation." },
      { text: "Thank you so much — referrals from satisfied partners are the best possible endorsement.", correct: false,
        feedback: "Celebrating the referral without preparing for the conversation it creates is passive." },
    ],
  },
  hl39: {
    objection: "I've been on the platform a year. What should I be doing differently to maximize what I get out of it?",
    responses: [
      { text: "Let's do a full year-in review. I want to look at three things: your revenue trend quarter by quarter, your highest and lowest-performing items, and your rating trajectory. From those three, I can almost always find one underperforming area and one untapped opportunity. Can we schedule 30 minutes this week specifically for that?", correct: true, technique: 'Annual Review',
        feedback: "You proposed a structured annual review with three specific diagnostic lenses. For a one-year partner, this is the right level of depth and shows you're genuinely invested in their long-term performance." },
      { text: "After a year you should be running regular promotions and considering Sponsored Listings if you haven't already.", correct: false,
        feedback: "Giving generic advice without looking at their specific data first might recommend things they've already tried." },
      { text: "That's a great question — what do you feel is working well and what isn't?", correct: false,
        feedback: "Good discovery, but propose the structured annual review first — it's more useful than an open-ended self-assessment." },
      { text: "I'll send you our top performance optimization guide for established restaurants.", correct: false,
        feedback: "A generic guide is passive. A personalized, data-driven review is far more valuable for a year-in partner." },
    ],
  },
  hl40: {
    objection: "I've recommended Uber Eats to three of my friends who own restaurants. None of them have heard from anyone.",
    responses: [
      { text: "That's a failure on our side and I want to fix it immediately. Can you give me their names and contact information right now? I'll reach out to all three today and tell them the referral came from you. And I'd like to know: what did you tell them about us that made them open to the conversation?", correct: true, technique: 'Referral Recovery + Insight',
        feedback: "You took immediate accountability, asked for the information needed to fix it right now, and ended with a question that reveals what's resonating about their endorsement. All three moves are right." },
      { text: "I apologize — our referral team should have followed up with them. I'll escalate this.", correct: false,
        feedback: "Escalating to a team that already dropped the ball without taking personal ownership is the same problem repeating itself." },
      { text: "I'm sorry to hear that — who referred them to us? I want to trace where it got dropped.", correct: false,
        feedback: "Investigating the internal process failure in front of the person reporting it feels defensive rather than action-oriented." },
      { text: "Can you send me their contact details? I'll make sure someone reaches out this week.", correct: false,
        feedback: "'Someone' is vague. Take personal ownership and commit to reaching out yourself today." },
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

// ─── WORLD 3: SALES KART ──────────────────────────────────────────────────────

// ── Question bank ──────────────────────────────────────────────────────────────
const MK_YN = [
  // Opener
  { q: 'Should you state your name AND company in the first 5 seconds of a cold opener?', a: true },
  { q: 'Is "Is now a bad time?" a strong way to open a cold call?', a: false },
  { q: 'Should you walk in cold during the 12–2 pm lunch rush?', a: false },
  { q: 'Is it okay to leave without securing any next step?', a: false },
  { q: 'Can you ask to speak with the owner directly if a gatekeeper says they\'re busy?', a: true },
  { q: 'Should you memorize a word-for-word script for your cold opener?', a: false },
  { q: 'Is it good practice to research a restaurant before your first visit?', a: true },
  // Objection Handling
  { q: 'If a prospect says "DoorDash works fine," should you agree and leave?', a: false },
  { q: 'Should you immediately offer a discount when someone says fees are too high?', a: false },
  { q: 'Is it useful to validate part of an objection before responding?', a: true },
  { q: 'Should you badmouth a competitor to win an objection?', a: false },
  { q: 'Does "we have our own driver" mean delivery doesn\'t make sense for them?', a: false },
  { q: 'Can you acknowledge that DoorDash and Uber Eats serve different customer segments?', a: true },
  { q: 'Is it appropriate to ask "what would make this work for you?" when they object?', a: true },
  // Pitch
  { q: 'Should you lead your pitch by stating the commission percentage?', a: false },
  { q: 'Is showing hyperlocal data about nearby Uber Eats users more persuasive than global stats?', a: true },
  { q: 'Should you promise a specific revenue amount to a restaurant?', a: false },
  { q: 'Is it worth mentioning that setup is free and fast during your pitch?', a: true },
  { q: 'Is it okay to exaggerate market share data to close a deal?', a: false },
  { q: 'Should you mention the Uber Eats dashboard and menu management tools?', a: true },
  // Closing
  { q: 'Should you directly ask "Can we get your menu set up today?" after a successful pitch?', a: true },
  { q: 'Does "let me think about it" almost always mean a permanent no?', a: false },
  { q: 'Is following up the next day too soon after a close attempt?', a: false },
  { q: 'Should you let the prospect pick the signup date when possible?', a: true },
  { q: 'Is it okay to suggest starting with a limited menu to reduce their risk?', a: true },
  { q: 'Should you keep talking to fill silence after asking for the sale?', a: false },
  // Follow-up
  { q: 'Is it acceptable to follow up more than once after no response?', a: true },
  { q: 'Should every follow-up email repeat your entire pitch from scratch?', a: false },
  { q: 'If a prospect asks you to stop contacting them, should you stop immediately?', a: true },
  { q: 'Should you reference your last conversation when following up?', a: true },
  { q: 'Is "just checking in" a strong follow-up opener?', a: false },
  { q: 'Can a referral from an existing partner help warm a cold prospect?', a: true },
  { q: 'Does a "no" today mean a "no" forever?', a: false },
  { q: 'Is voicemail a valid follow-up method?', a: true },
  { q: 'Should you apologize for following up when re-engaging a cold lead?', a: false },
  { q: 'Is confirming next steps via text or email after a meeting good practice?', a: true },
  { q: 'Should you customize your pitch for each type of restaurant?', a: true },
  { q: 'Is "we\'re too small" a legitimate reason a restaurant can\'t join Uber Eats?', a: false },
  { q: 'Is it useful to ask for the owner\'s email before ending any cold interaction?', a: true },
  { q: 'Should you keep a CRM record of every prospect touchpoint?', a: true },
];

const MK_GOLD = [
  {
    q: 'An owner says "commission fees are too high." What\'s the best response?',
    choices: [
      'Tell them DoorDash charges more',
      'Acknowledge their margin concern, then show incremental new-customer revenue math',
      'Offer to waive the fee immediately',
    ],
    correct: 1,
  },
  {
    q: 'Mid-pitch, the owner says "I\'m too busy for this right now." Best move?',
    choices: [
      'Speed through the rest of your pitch',
      'Acknowledge their time — ask for 2 more minutes or schedule a specific return visit',
      'Leave your card and never follow up',
    ],
    correct: 1,
  },
  {
    q: 'Owner says "we tried delivery before — orders were wrong and quality suffered." Best response?',
    choices: [
      'Blame their previous delivery platform',
      'Validate the experience, then explain how the tablet integration and packaging guidance prevents it',
      'Promise it won\'t happen with Uber Eats',
    ],
    correct: 1,
  },
  {
    q: 'Prospect is almost ready to sign but says "let me run it by my partner." Best move?',
    choices: [
      'Tell them not to wait — sign today',
      'Ask when they\'ll speak to their partner and schedule a follow-up for that exact time',
      'Send the contract and wait indefinitely',
    ],
    correct: 1,
  },
  {
    q: 'After a strong pitch with no objections the owner goes quiet. Best move?',
    choices: [
      'Keep talking to fill the silence',
      'Ask directly: "Does this feel like the right fit for you?"',
      'Give them a brochure and leave',
    ],
    correct: 1,
  },
  {
    q: 'Owner says "we\'re always full — we don\'t need more customers." Best frame?',
    choices: [
      'Tell them they\'re leaving money on the table',
      'Reframe: delivery captures revenue during hours you\'re closed or below full capacity',
      'Agree and move on',
    ],
    correct: 1,
  },
  {
    q: 'Which is the strongest cold walk-in opener?',
    choices: [
      '"Hi, we\'re running great Uber Eats deals right now"',
      '"Hi, I\'m [name] with Uber Eats — I\'m working with 3 restaurants nearby. Could I grab 5 minutes with the owner?"',
      '"Who\'s in charge? I need to talk about delivery."',
    ],
    correct: 1,
  },
  {
    q: 'A prospect hasn\'t responded to two calls and an email. Best follow-up strategy?',
    choices: [
      'Send a final email saying "I\'ll take this as a no"',
      'Try a different channel with a new angle — perhaps new local data or a nearby restaurant success story',
      'Call every day until they answer',
    ],
    correct: 1,
  },
  {
    q: 'Owner says "my customers are regulars who come in person — I don\'t need an app." Best counter?',
    choices: [
      '"Apps are the future — you need to adapt"',
      '"Your regulars are covered. Delivery finds people who don\'t know you yet"',
      '"Most restaurants use apps now — you\'re behind"',
    ],
    correct: 1,
  },
  {
    q: 'Which data point is most persuasive in a cold pitch?',
    choices: [
      'Total global Uber Eats order volume',
      'Number of active Uber Eats users within 3 miles of their restaurant',
      'How many years Uber Eats has been in business',
    ],
    correct: 1,
  },
  {
    q: 'Owner says "I take orders direct — I keep 100%, why share with Uber Eats?" Best counter?',
    choices: [
      'Explain that Uber Eats is cheaper than running a website',
      'Direct orders come from people who already know them. Uber Eats brings customers who\'ve never heard of them',
      'Tell them the commission rate is actually low',
    ],
    correct: 1,
  },
  {
    q: 'What\'s the strongest follow-up email subject line after no response?',
    choices: [
      '"Following up on my last email"',
      '"[X] people searched for food near your restaurant last week"',
      '"Just checking in!"',
    ],
    correct: 1,
  },
  {
    q: 'Owner wants to sign but says "can we start with just lunch hours?" Best response?',
    choices: [
      'Say no — it has to be full hours',
      'Yes — starting with lunch is a great way to test the system with low risk',
      'Tell them they\'ll earn more with full hours right away',
    ],
    correct: 1,
  },
  {
    q: 'Owner mentions a competitor\'s lower fee. Best technique?',
    choices: [
      'Promise to match the competitor\'s fee',
      'Shift focus to total value: customer reach, marketing tools, and incremental revenue',
      'Explain why the competitor\'s platform is worse',
    ],
    correct: 1,
  },
  {
    q: 'After signing a new partner, what\'s the most important next action?',
    choices: [
      'Celebrate and move on to new prospects',
      'Check in within 48 hours — confirm setup, first order, and answer any questions',
      'Send a welcome email and wait 30 days',
    ],
    correct: 1,
  },
];

// ── Audio (Web Audio API) ──────────────────────────────────────────────────────
let mkAudioCtx = null;

function mkAudio() {
  if (!mkAudioCtx) mkAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return mkAudioCtx;
}

function mkResume() { if (mkAudioCtx && mkAudioCtx.state === 'suspended') mkAudioCtx.resume(); }

function mkBeep(freq, dur, type = 'sine', vol = 0.4, delay = 0) {
  try {
    const ctx = mkAudio(); mkResume();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.type = type; osc.frequency.value = freq;
    const t = ctx.currentTime + delay;
    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(vol, t + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.001, t + dur);
    osc.start(t); osc.stop(t + dur + 0.05);
  } catch(e) {}
}

function mkNoise(dur, vol = 0.3, delay = 0) {
  try {
    const ctx = mkAudio(); mkResume();
    const buf = ctx.createBuffer(1, ctx.sampleRate * dur, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    const src = ctx.createBufferSource();
    const gain = ctx.createGain();
    const filt = ctx.createBiquadFilter();
    src.buffer = buf; filt.type = 'bandpass'; filt.frequency.value = 1200;
    src.connect(filt); filt.connect(gain); gain.connect(ctx.destination);
    const t = ctx.currentTime + delay;
    gain.gain.setValueAtTime(vol, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + dur);
    src.start(t); src.stop(t + dur + 0.05);
  } catch(e) {}
}

function sndCountdown(n) {
  const freqs = [330, 392, 494, 660];
  mkBeep(freqs[Math.min(n, 3)], 0.18, 'sine', 0.5);
}

function sndGo() {
  [523, 659, 784, 1047].forEach((f, i) => mkBeep(f, 0.15, 'sine', 0.5, i * 0.06));
}

function sndBoxHit() {
  mkBeep(880, 0.12, 'sine', 0.35);
  mkBeep(1100, 0.1, 'sine', 0.2, 0.08);
}

function sndGoldBoxHit() {
  [880, 1100, 1320, 1760].forEach((f, i) => mkBeep(f, 0.12, 'sine', 0.3, i * 0.06));
}

function sndCorrect() {
  mkBeep(523, 0.08, 'sine', 0.3);
  mkBeep(659, 0.08, 'sine', 0.3, 0.09);
  mkBeep(784, 0.2, 'sine', 0.4, 0.18);
  mkNoise(0.15, 0.2, 0.18);
}

function sndWrong() {
  mkBeep(220, 0.08, 'sawtooth', 0.4);
  mkBeep(180, 0.12, 'sawtooth', 0.4, 0.1);
  mkBeep(140, 0.2, 'sawtooth', 0.3, 0.2);
}

function sndSpinOut() {
  try {
    const ctx = mkAudio(); mkResume();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.type = 'sawtooth';
    const t = ctx.currentTime;
    osc.frequency.setValueAtTime(600, t);
    osc.frequency.exponentialRampToValueAtTime(80, t + 0.6);
    gain.gain.setValueAtTime(0.5, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.65);
    osc.start(t); osc.stop(t + 0.7);
    mkNoise(0.4, 0.3);
  } catch(e) {}
}

function sndBoost() {
  try {
    const ctx = mkAudio(); mkResume();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.type = 'sawtooth';
    const t = ctx.currentTime;
    osc.frequency.setValueAtTime(200, t);
    osc.frequency.exponentialRampToValueAtTime(800, t + 0.3);
    gain.gain.setValueAtTime(0.3, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
    osc.start(t); osc.stop(t + 0.4);
  } catch(e) {}
}

function sndVictory() {
  const melody = [523,659,784,1047,784,1047,1319];
  melody.forEach((f, i) => mkBeep(f, 0.25, 'sine', 0.4, i * 0.13));
  mkNoise(0.5, 0.35, 0.8);
}

function sndSadTrombone() {
  [311, 277, 247, 220].forEach((f, i) => mkBeep(f, 0.3, 'sawtooth', 0.35, i * 0.22));
}

// ── Engine loop sound ─────────────────────────────────────────────────────────
let mkEngineOsc = null, mkEngineGain = null;

function startEngine() {
  try {
    const ctx = mkAudio(); mkResume();
    mkEngineOsc = ctx.createOscillator();
    mkEngineGain = ctx.createGain();
    mkEngineOsc.connect(mkEngineGain);
    mkEngineGain.connect(ctx.destination);
    mkEngineOsc.type = 'sawtooth';
    mkEngineOsc.frequency.value = 90;
    mkEngineGain.gain.value = 0.05;
    mkEngineOsc.start();
  } catch(e) {}
}

function updateEngine(speed, boosting) {
  if (!mkEngineOsc) return;
  try {
    const baseFreq = 80 + speed * 0.4;
    const freq = boosting ? baseFreq * 1.6 : baseFreq;
    const vol = boosting ? 0.09 : 0.04;
    mkEngineOsc.frequency.setTargetAtTime(freq, mkAudioCtx.currentTime, 0.1);
    mkEngineGain.gain.setTargetAtTime(vol, mkAudioCtx.currentTime, 0.1);
  } catch(e) {}
}

function stopEngine() {
  try {
    if (mkEngineGain) mkEngineGain.gain.setTargetAtTime(0, mkAudioCtx.currentTime, 0.1);
    setTimeout(() => { try { mkEngineOsc?.stop(); } catch(e){} mkEngineOsc = null; mkEngineGain = null; }, 300);
  } catch(e) {}
}

// Background music loop
let mkBgNodes = [];
function startBgMusic() {
  stopBgMusic();
  const notes = [261,329,392,329,349,440,392,523,392,329,261,329];
  notes.forEach((f, i) => {
    const id = setInterval(() => {
      if (!mk.running) return;
      mkBeep(f, 0.18, 'triangle', mk.position === 1 ? 0.08 : 0.05);
    }, notes.length * 280);
    mkBgNodes.push(id);
    setTimeout(() => mkBeep(f, 0.18, 'triangle', mk.position === 1 ? 0.08 : 0.05), i * 280);
  });
  const loopId = setInterval(() => {
    if (!mk.running) { clearInterval(loopId); return; }
    notes.forEach((f, i) => setTimeout(() => {
      if (!mk.running) return;
      mkBeep(f, 0.18, 'triangle', mk.position === 1 ? 0.08 : 0.05);
    }, i * 280));
  }, notes.length * 280);
  mkBgNodes.push(loopId);
}
function stopBgMusic() {
  mkBgNodes.forEach(id => clearInterval(id));
  mkBgNodes = [];
}

// ── Track generation ─────────────────────────────────────────────────────────
const TRACK_LEN = 500;
const DRAW_DIST = 130;

function mkBuildTrack() {
  const segs = [];
  function add(n, curve, decor) {
    for (let i = 0; i < n; i++)
      segs.push({ curve, decor: decor || 0, stripe: Math.floor(segs.length / 9) % 2 });
  }
  add(28,  0, 0);
  add(42,  4, 1); // right turn, trees
  add(18,  0, 0);
  add(55, -6, 2); // big left, signs
  add(22,  0, 3); // straight, food stands
  add(38,  5, 1); // right, trees
  add(14,  0, 0);
  add(50, -4, 2); // left, signs
  add(28,  3, 4); // right, balloons
  add(48, -5, 1); // left, trees
  add(18,  0, 0);
  add(32,  6, 3); // sharp right, stands
  add(16, -3, 4); // left, balloons
  add(22,  0, 0);
  while (segs.length < TRACK_LEN) add(Math.min(10, TRACK_LEN - segs.length), 0, 0);
  return segs;
}

const TRACK = mkBuildTrack();

function mkPlaceBoxes() {
  const boxes = [];
  let i = 25;
  while (i < TRACK_LEN - 5) {
    const gold = Math.random() < 0.20;
    const laneX = [-0.52, 0, 0.52][Math.floor(Math.random() * 3)];
    boxes.push({ trackPos: i, laneX, gold, hit: false, popAnim: 0 });
    i += 14 + Math.floor(Math.random() * 10);
  }
  return boxes;
}

// ── Game state ────────────────────────────────────────────────────────────────
const mk = {
  running: false,
  // Track position & physics
  pos: 0,        // float position along track (0–TRACK_LEN)
  playerX: 0,    // lateral: -1=left edge, +1=right edge, 0=center
  speed: 0,      // segments/second
  steer: 0,      // steering momentum
  lap: 0,
  totalLaps: 2,
  // Inputs
  keys:  { left: false, right: false },
  touch: { left: false, right: false },
  // Stats
  lives: 3, score: 0, streak: 0, bestStreak: 0, correct: 0, wrong: 0,
  position: 1,
  // Powerups
  boosting: false, boostUntil: 0,
  shield: false,
  doublePoints: false, doubleUntil: 0,
  spinning: false, spinUntil: 0, spinAngle: 0,
  // Track objects
  boxes: [],
  // Opponents
  opponents: [
    { name:'Rex',  emoji:'🚗', color:'#ef4444', pos: 8,  playerX:-0.28, speed:7.1, steer:0, lap:0 },
    { name:'Zara', emoji:'🚙', color:'#8b5cf6', pos:15,  playerX: 0.28, speed:6.9, steer:0, lap:0 },
    { name:'Kai',  emoji:'🚕', color:'#f59e0b', pos: 4,  playerX: 0.00, speed:7.4, steer:0, lap:0 },
  ],
  // Effects
  smoke: [],
  curveTable: null,
  // Question state
  questionActive: false, currentBox: null, qTimeLeft: 10, qTimer: null, qMaxTime: 10,
  qQuestions: [],
  // Canvas refs
  canvas: null, ctx: null, mmCanvas: null, mmCtx: null,
  // Animation
  lastTs: 0, animFrame: null,
};

// ── Perspective helpers ───────────────────────────────────────────────────────
function mkPrecomputeCurves() {
  const table = new Float32Array(DRAW_DIST + 2);
  let cx = 0, dcx = 0;
  const start = Math.floor(mk.pos);
  for (let n = 1; n <= DRAW_DIST + 1; n++) {
    const si = (start + n) % TRACK_LEN;
    dcx += TRACK[si].curve;
    cx += dcx * 0.00016;
    table[n] = cx;
  }
  mk.curveTable = table;
}

function mkScreenY(d, h, horizY) {
  return horizY + (h - horizY) / Math.max(0.01, d);
}

function mkCenterX(d, w, roadHalf) {
  const n = Math.max(1, Math.min(Math.round(d), DRAW_DIST));
  const curve = (mk.curveTable ? mk.curveTable[n] : 0) * w;
  return w * 0.5 + curve - mk.playerX * roadHalf / Math.max(0.01, d);
}

// ── Sky drawing ───────────────────────────────────────────────────────────────
function mkDrawSky(ctx, w, h, horizY, ts) {
  const grad = ctx.createLinearGradient(0, 0, 0, horizY);
  grad.addColorStop(0,    '#1565c0');
  grad.addColorStop(0.5,  '#42a5f5');
  grad.addColorStop(1,    '#b3e5fc');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, horizY);

  // Drifting clouds
  const drift = (ts * 0.000025) % 1;
  [
    { rx: 0.10, ry: 0.12, s: 30 },
    { rx: 0.35, ry: 0.07, s: 22 },
    { rx: 0.60, ry: 0.11, s: 28 },
    { rx: 0.82, ry: 0.08, s: 24 },
    { rx: 0.50, ry: 0.18, s: 18 },
  ].forEach(c => {
    const x = ((c.rx + drift) % 1) * w;
    const y = horizY * c.ry;
    mkDrawCloud(ctx, x, y, c.s);
  });

  // Distant city silhouette at horizon
  ctx.fillStyle = 'rgba(20,40,100,0.28)';
  ctx.beginPath();
  ctx.moveTo(0, horizY);
  for (let x = 0; x <= w; x += 20) {
    const hy = horizY - 10 - Math.sin(x * 0.04) * 9 - Math.sin(x * 0.011) * 14;
    ctx.lineTo(x, hy);
  }
  ctx.lineTo(w, horizY);
  ctx.closePath();
  ctx.fill();
}

function mkDrawCloud(ctx, cx, cy, r) {
  ctx.fillStyle = 'rgba(255,255,255,0.93)';
  [[0,0,1],[r*.75,r*.15,.72],[r*1.4,0,.82],[-.5*r,r*.12,.68],[.35*r,-.3*r,.58]].forEach(([dx,dy,rs]) => {
    ctx.beginPath();
    ctx.arc(cx + dx, cy + dy, r * rs, 0, Math.PI * 2);
    ctx.fill();
  });
}

// ── Road drawing (scanline) ───────────────────────────────────────────────────
function mkDrawRoad(ctx, w, h, horizY, roadHalf) {
  const BAND = 2;
  for (let y = Math.round(horizY); y < h; y += BAND) {
    const d   = (h - horizY) / (y - horizY + 0.0001);
    const n   = Math.max(1, Math.min(Math.round(d), DRAW_DIST));
    const stripe    = Math.floor(n / 9) % 2;
    const curbStr   = Math.floor(n / 3) % 2;
    const laneStr   = Math.floor(n / 4) % 2;
    const ueStr     = Math.floor(n / 6) % 3 === 0;

    const cx   = mkCenterX(d, w, roadHalf);
    const halfW = roadHalf / d;

    // Grass
    ctx.fillStyle = stripe ? '#1b6e2a' : '#28a745';
    ctx.fillRect(0, y, w, BAND);

    // Road
    ctx.fillStyle = stripe ? '#52526a' : '#65657e';
    ctx.fillRect(cx - halfW, y, halfW * 2, BAND);

    // Uber Eats branded center line (green stripe)
    if (ueStr) {
      ctx.fillStyle = '#06C167';
      ctx.fillRect(cx - halfW * 0.055, y, halfW * 0.11, BAND);
    }

    // White lane dividers
    if (laneStr) {
      ctx.fillStyle = 'rgba(255,255,255,0.55)';
      const lw = Math.max(1, halfW * 0.03);
      ctx.fillRect(cx - halfW * 0.36, y, lw, BAND);
      ctx.fillRect(cx + halfW * 0.33, y, lw, BAND);
    }

    // Curbs (red/white alternating)
    const curbW = Math.max(1, halfW * 0.13);
    ctx.fillStyle = curbStr ? '#cc2200' : '#ffffff';
    ctx.fillRect(cx - halfW, y, curbW, BAND);
    ctx.fillRect(cx + halfW - curbW, y, curbW, BAND);
  }
}

// ── Decorations (trees, signs, food stands, balloons) ────────────────────────
function mkDrawDecorations(ctx, horizY, w, h, roadHalf) {
  for (let n = DRAW_DIST; n >= 3; n--) {
    const si    = (Math.floor(mk.pos) + n) % TRACK_LEN;
    const decor = TRACK[si].decor;
    if (!decor) continue;
    const d      = n;
    const sy     = mkScreenY(d, h, horizY);
    if (sy < horizY || sy > h + 10) continue;
    const cx     = mkCenterX(d, w, roadHalf);
    const halfW  = roadHalf / d;
    const scale  = 1 / d;
    mkDrawDecor(ctx, cx - halfW - 30 * scale, sy, scale, decor, -1);
    mkDrawDecor(ctx, cx + halfW + 30 * scale, sy, scale, decor,  1);
  }
}

function mkDrawDecor(ctx, x, y, scale, type, side) {
  const h = 90 * scale, w = 55 * scale;
  ctx.save();
  ctx.translate(x, y);
  if (type === 1) {
    // Tree
    ctx.fillStyle = '#4e342e';
    ctx.fillRect(-w * 0.1, -h * 0.35, w * 0.2, h * 0.38);
    ctx.fillStyle = '#2e7d32';
    ctx.beginPath(); ctx.arc(0, -h * 0.52, w * 0.48, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#388e3c';
    ctx.beginPath(); ctx.arc(w * 0.22, -h * 0.44, w * 0.32, 0, Math.PI * 2); ctx.fill();
  } else if (type === 2) {
    // Uber Eats sign on post
    const sw = w * 1.3, sh = h * 0.52;
    ctx.fillStyle = '#06C167'; ctx.fillRect(-sw/2, -sh, sw, sh);
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${h * 0.22}px sans-serif`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('Uber Eats', 0, -sh * 0.62);
    ctx.font = `${h * 0.28}px sans-serif`;
    ctx.fillText('🛵', 0, -sh * 0.25);
    ctx.fillStyle = '#888';
    ctx.fillRect(-w * 0.06, 0, w * 0.12, -h * 0.45);
  } else if (type === 3) {
    // Food stand
    ctx.fillStyle = '#e53935'; ctx.fillRect(-w * 0.58, -h * 0.48, w * 1.16, h * 0.48);
    ctx.fillStyle = '#fff';    ctx.fillRect(-w * 0.52, -h * 0.44, w * 1.04, h * 0.36);
    ctx.font = `${h * 0.17}px sans-serif`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('🍔🌮🍕', 0, -h * 0.26);
    // awning stripes
    for (let i = 0; i < 4; i++) {
      ctx.fillStyle = i % 2 ? '#e53935' : '#fff';
      ctx.fillRect(-w * 0.58 + i * w * 0.29, -h * 0.48, w * 0.29, h * 0.07);
    }
  } else if (type === 4) {
    // Balloons
    const cols = ['#f44336','#e91e63','#9c27b0','#2196f3','#4caf50'];
    for (let i = 0; i < 4; i++) {
      const bx = (i - 1.5) * w * 0.42;
      const by = -h * 0.45 - i * h * 0.08;
      ctx.fillStyle = cols[(i + Math.abs(side)) % cols.length];
      ctx.beginPath(); ctx.ellipse(bx, by, w * 0.21, h * 0.27, 0, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = '#555'; ctx.lineWidth = 0.5 * scale;
      ctx.beginPath(); ctx.moveTo(bx, by + h * 0.27); ctx.lineTo(0, 0); ctx.stroke();
    }
  }
  ctx.restore();
}

// ── Item box drawing ──────────────────────────────────────────────────────────
function mkProject(relD, laneXFrac, horizY, w, h, roadHalf) {
  const sy   = mkScreenY(relD, h, horizY);
  const cx   = mkCenterX(relD, w, roadHalf);
  const halfW = roadHalf / Math.max(0.01, relD);
  const sx   = cx + laneXFrac * halfW * 2;
  const sc   = Math.min(1, 1 / Math.max(0.01, relD));
  return { x: sx, y: sy, scale: sc };
}

function mkDrawBox(ctx, box, ts, horizY, w, h, roadHalf) {
  if (box.hit) {
    if (box.popAnim > 0) {
      const relD = ((box.trackPos - mk.pos) + TRACK_LEN) % TRACK_LEN;
      if (relD > 0.5 && relD < DRAW_DIST) {
        const p = mkProject(relD, box.laneX, horizY, w, h, roadHalf);
        if (p.y >= horizY && p.y <= h) {
          const t = box.popAnim;
          const sz = p.scale * 80 * (1.5 - t * 0.5);
          ctx.save(); ctx.globalAlpha = t;
          ctx.translate(p.x, p.y);
          const shards = box.gold ? 10 : 8;
          for (let i = 0; i < shards; i++) {
            const a  = (i / shards) * Math.PI * 2 + ts * 0.003;
            const r  = sz * (0.4 + 0.3 * (1 - t));
            const cs = ['#ffd700','#ff6b6b','#06C167','#4ecdc4','#fff'][i % 5];
            ctx.fillStyle = cs;
            ctx.beginPath(); ctx.arc(Math.cos(a) * r, Math.sin(a) * r, sz * 0.18, 0, Math.PI * 2); ctx.fill();
          }
          ctx.restore();
          box.popAnim = Math.max(0, box.popAnim - 0.055);
        }
      }
    }
    return;
  }

  const relD = ((box.trackPos - mk.pos) + TRACK_LEN) % TRACK_LEN;
  if (relD < 0.9 || relD > DRAW_DIST) return;
  const p = mkProject(relD, box.laneX, horizY, w, h, roadHalf);
  if (p.y < horizY || p.y > h) return;

  const sz   = p.scale * 52;
  const spin = (ts * 0.003) % (Math.PI * 2);
  const scX  = 0.6 + 0.4 * Math.abs(Math.cos(spin));

  ctx.save();
  ctx.translate(p.x, p.y);
  ctx.scale(scX, 1);

  if (box.gold) {
    // Outer glow
    const grd = ctx.createRadialGradient(0, 0, sz * 0.2, 0, 0, sz * 2);
    grd.addColorStop(0, 'rgba(255,215,0,0.55)'); grd.addColorStop(1, 'rgba(255,165,0,0)');
    ctx.fillStyle = grd; ctx.beginPath(); ctx.arc(0, 0, sz * 2, 0, Math.PI * 2); ctx.fill();
    // Rainbow fill
    const ph   = (ts * 0.0025) % 1;
    const rbow = ctx.createLinearGradient(-sz, 0, sz, 0);
    rbow.addColorStop(ph % 1,          '#ff0000');
    rbow.addColorStop((ph + .17) % 1,  '#ff8800');
    rbow.addColorStop((ph + .33) % 1,  '#ffff00');
    rbow.addColorStop((ph + .50) % 1,  '#00ee00');
    rbow.addColorStop((ph + .67) % 1,  '#0088ff');
    rbow.addColorStop((ph + .83) % 1,  '#ff00ff');
    rbow.addColorStop(1,               '#ff0000');
    ctx.fillStyle   = rbow;
    ctx.strokeStyle = '#ffd700';
  } else {
    const ph   = (ts * 0.002) % 1;
    const rbow = ctx.createLinearGradient(-sz, 0, sz, 0);
    rbow.addColorStop(0,            'rgba(255,255,255,.92)');
    rbow.addColorStop((ph+.25)%1,   'rgba(255,120,120,.75)');
    rbow.addColorStop((ph+.50)%1,   'rgba(120,255,120,.75)');
    rbow.addColorStop((ph+.75)%1,   'rgba(120,120,255,.75)');
    rbow.addColorStop(1,            'rgba(255,255,255,.92)');
    ctx.fillStyle   = rbow;
    ctx.strokeStyle = 'rgba(255,255,255,0.9)';
  }

  ctx.lineWidth = Math.max(1.5, 2.5 * p.scale);
  ctx.fillRect(-sz, -sz, sz * 2, sz * 2);
  ctx.strokeRect(-sz, -sz, sz * 2, sz * 2);

  // "?" text
  ctx.scale(1 / scX, 1);
  ctx.fillStyle = box.gold ? '#000' : '#06C167';
  ctx.font = `bold ${Math.max(8, sz * 1.15)}px sans-serif`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('?', 0, 0);
  ctx.restore();
}

// ── Opponent drawing ──────────────────────────────────────────────────────────
function mkDrawOpponent(ctx, opp, horizY, w, h, roadHalf) {
  let d = opp.pos - mk.pos;
  if (d < 0) d += TRACK_LEN;
  if (d < 0.6 || d > DRAW_DIST) return;
  const p = mkProject(d, opp.playerX, horizY, w, h, roadHalf);
  if (p.y < horizY || p.y > h) return;
  const sz = Math.max(12, 40 * p.scale);
  ctx.save();
  ctx.translate(p.x, p.y);
  ctx.font = `${sz * 2}px sans-serif`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText(opp.emoji, 0, 0);
  ctx.restore();
}

// ── Player car ────────────────────────────────────────────────────────────────
function mkDrawPlayerCar(ctx, w, h) {
  const now = performance.now();
  const carX = w * 0.5;
  const carY = h * 0.78;
  ctx.save();
  ctx.translate(carX, carY);
  ctx.rotate(mk.steer * 0.1);

  if (mk.spinning && now < mk.spinUntil) {
    mk.spinAngle += 0.2;
    ctx.rotate(mk.spinAngle);
  }

  if (mk.boosting && now < mk.boostUntil) {
    ctx.shadowColor = '#06C167';
    ctx.shadowBlur = 28;
    ctx.strokeStyle = 'rgba(6,193,103,0.35)';
    ctx.lineWidth = 2;
    for (let i = 0; i < 6; i++) {
      const lx = (i - 2.5) * 11;
      const len = 28 + Math.random() * 18;
      ctx.beginPath(); ctx.moveTo(lx, 28); ctx.lineTo(lx, 28 + len); ctx.stroke();
    }
  }

  ctx.font = '54px sans-serif';
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('🏎️', 0, 0);
  ctx.restore();
}

// ── Smoke particles ───────────────────────────────────────────────────────────
function mkDrawSmoke(ctx) {
  mk.smoke = mk.smoke.filter(p => p.life > 0);
  mk.smoke.forEach(p => {
    ctx.save();
    ctx.globalAlpha = (p.life / p.maxLife) * 0.55;
    ctx.fillStyle = p.col;
    ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
    p.x += p.vx; p.y += p.vy; p.r += 0.45; p.life--;
  });
}

function mkSpawnSmoke() {
  const cx = mk.canvas.width * 0.5, cy = mk.canvas.height * 0.8;
  const cols = ['#ccc','#aaa','#888','#bbb'];
  for (let i = 0; i < 16; i++) {
    mk.smoke.push({
      x: cx + (Math.random() - 0.5) * 55, y: cy + (Math.random() - 0.5) * 22,
      vx: (Math.random() - 0.5) * 3.5, vy: -Math.random() * 2.8 - 0.5,
      r: 8 + Math.random() * 9, life: 35 + Math.random() * 22, maxLife: 57,
      col: cols[Math.floor(Math.random() * cols.length)],
    });
  }
}

// ── Mini-map ──────────────────────────────────────────────────────────────────
function mkDrawMinimap() {
  const mc = mk.mmCanvas, mctx = mk.mmCtx;
  if (!mc || !mctx) return;
  const mw = mc.width, mh = mc.height;
  mctx.clearRect(0, 0, mw, mh);
  mctx.strokeStyle = 'rgba(255,255,255,0.4)'; mctx.lineWidth = 4;
  mctx.beginPath(); mctx.ellipse(mw/2, mh/2, mw*0.43, mh*0.38, 0, 0, Math.PI*2); mctx.stroke();
  function toMM(pos, lap) {
    const a = ((lap * TRACK_LEN + pos) / (mk.totalLaps * TRACK_LEN)) * Math.PI * 2 - Math.PI / 2;
    return { x: mw/2 + Math.cos(a) * mw*0.43, y: mh/2 + Math.sin(a) * mh*0.38 };
  }
  mk.opponents.forEach(o => {
    const p = toMM(o.pos, o.lap||0);
    mctx.fillStyle = o.color;
    mctx.beginPath(); mctx.arc(p.x, p.y, 4, 0, Math.PI*2); mctx.fill();
  });
  const pp = toMM(mk.pos, mk.lap);
  mctx.fillStyle = '#06C167';
  mctx.beginPath(); mctx.arc(pp.x, pp.y, 5.5, 0, Math.PI*2); mctx.fill();
}

// ── HUD / position ────────────────────────────────────────────────────────────
function mkCalcPosition() {
  const pTot = mk.lap * TRACK_LEN + mk.pos;
  mk.position = 1 + mk.opponents.filter(o => (o.lap||0) * TRACK_LEN + o.pos > pTot).length;
}

function mkUpdateHUD() {
  const labels = ['1st','2nd','3rd','4th'];
  const badge  = document.getElementById('mk-pos-badge');
  badge.textContent = labels[mk.position - 1] || '4th';
  badge.className   = ['','pos-2nd','pos-3rd','pos-4th'][mk.position - 1] || 'pos-4th';
  document.getElementById('mk-score-hud').textContent  = mk.score;
  document.getElementById('mk-streak-hud').textContent = `🔥 ${mk.streak}`;
  document.getElementById('mk-lives-hud').textContent  =
    '❤️'.repeat(mk.lives) + '🖤'.repeat(Math.max(0, 3 - mk.lives));
  const done = mk.lap * TRACK_LEN + mk.pos;
  document.getElementById('mk-progress-fill').style.width =
    Math.min(100, (done / (mk.totalLaps * TRACK_LEN)) * 100) + '%';
}

// ── Power-up banner ───────────────────────────────────────────────────────────
function mkShowPowerupBanner(text) {
  const el = document.getElementById('mk-powerup-banner');
  el.textContent = text;
  el.classList.remove('mk-hidden');
  setTimeout(() => el.classList.add('mk-hidden'), 2200);
}

// ── Main draw ─────────────────────────────────────────────────────────────────
function mkDraw(ts) {
  const c = mk.canvas, ctx = mk.ctx;
  const w = c.width, h = c.height;
  const horizY   = h * 0.42;
  const roadHalf = w * 0.44;

  mkPrecomputeCurves();
  mkDrawSky(ctx, w, h, horizY, ts);
  mkDrawRoad(ctx, w, h, horizY, roadHalf);
  mkDrawDecorations(ctx, horizY, w, h, roadHalf);

  // Draw boxes (back-to-front)
  const sortedBoxes = mk.boxes
    .map(b => ({ box: b, d: ((b.trackPos - mk.pos) + TRACK_LEN) % TRACK_LEN }))
    .filter(x => x.d < DRAW_DIST || x.box.popAnim > 0)
    .sort((a, b) => b.d - a.d);
  sortedBoxes.forEach(({ box }) => mkDrawBox(ctx, box, ts, horizY, w, h, roadHalf));

  // Opponents (back-to-front)
  mk.opponents
    .map(o => ({ o, d: ((o.pos - mk.pos) + TRACK_LEN) % TRACK_LEN }))
    .sort((a, b) => b.d - a.d)
    .forEach(({ o }) => mkDrawOpponent(ctx, o, horizY, w, h, roadHalf));

  mkDrawPlayerCar(ctx, w, h);
  mkDrawSmoke(ctx);
  mkDrawMinimap();
  mkCalcPosition();
  mkUpdateHUD();
}

// ── Collision ─────────────────────────────────────────────────────────────────
function mkCheckBoxCollisions() {
  if (mk.questionActive || mk.spinning) return;
  mk.boxes.forEach(box => {
    if (box.hit) return;
    const relD = ((box.trackPos - mk.pos) + TRACK_LEN) % TRACK_LEN;
    if (relD < 0.75 && relD > -0.4) {
      if (Math.abs(mk.playerX - box.laneX) < 0.70) {
        box.hit      = true;
        box.popAnim  = 1.0;
        if (box.gold) sndGoldBoxHit(); else sndBoxHit();
        setTimeout(() => mkTriggerQuestion(box), 60);
      }
    }
  });
}

// ── Opponent AI ───────────────────────────────────────────────────────────────
function mkUpdateOpponents(dt) {
  mk.opponents.forEach(opp => {
    const pTot = mk.lap * TRACK_LEN + mk.pos;
    const oTot = (opp.lap||0) * TRACK_LEN + opp.pos;
    const diff = pTot - oTot;
    let spd = opp.speed;
    if (diff >  25) spd *= 1.10; // rubber-band catch-up
    if (diff < -25) spd *= 0.92; // yield when ahead
    opp.pos += spd * dt;
    if (opp.pos >= TRACK_LEN) { opp.pos -= TRACK_LEN; opp.lap = (opp.lap||0) + 1; }
    // Natural weave using sine
    const targetX = Math.sin(opp.pos * 0.09 + opp.name.charCodeAt(0)) * 0.55;
    opp.steer += (targetX - opp.playerX) * dt * 1.8;
    opp.steer *= 0.92;
    opp.playerX = Math.max(-0.88, Math.min(0.88, opp.playerX + opp.steer * dt));
  });
}

// ── Physics & input ───────────────────────────────────────────────────────────
function mkUpdatePhysics(dt) {
  const now = performance.now();
  if (mk.spinning && now < mk.spinUntil) {
    mk.spinAngle += 0.22;
    return;
  }
  if (mk.spinning) mk.spinning = false;

  const isBoosting = mk.boosting && now < mk.boostUntil;
  if (mk.boosting && !isBoosting) mk.boosting = false;

  // Speed
  const maxSpd = isBoosting ? 14 : 8;
  mk.speed += (maxSpd - mk.speed) * Math.min(1, dt * 2.2);

  // Off-road slow
  if (Math.abs(mk.playerX) > 1.1) mk.speed = Math.max(3.2, mk.speed - 10 * dt);

  // Steering
  const inp = (mk.keys.right || mk.touch.right ? 1 : 0) - (mk.keys.left || mk.touch.left ? 1 : 0);
  mk.steer += (inp * 1.9 - mk.steer) * Math.min(1, dt * 6.5);
  mk.playerX += mk.steer * mk.speed * dt * 0.052;
  mk.playerX = Math.max(-1.75, Math.min(1.75, mk.playerX));

  // Centrifugal drift from track curve
  const si = Math.floor(mk.pos) % TRACK_LEN;
  mk.playerX -= TRACK[si].curve * mk.speed * dt * 0.0016;

  // Advance position
  mk.pos += mk.speed * dt;
  if (mk.pos >= TRACK_LEN) { mk.pos -= TRACK_LEN; mk.lap++; }

  updateEngine(mk.speed, isBoosting);
  if (mk.doublePoints && now >= mk.doubleUntil) mk.doublePoints = false;
}

// ── Main game loop ────────────────────────────────────────────────────────────
function mkGameLoop(ts) {
  if (!mk.running) return;
  const dt = Math.min((ts - mk.lastTs) / 1000, 0.05);
  mk.lastTs = ts;

  // Keep canvas full-screen
  if (mk.canvas.width !== mk.canvas.offsetWidth || mk.canvas.height !== mk.canvas.offsetHeight) {
    mk.canvas.width  = mk.canvas.offsetWidth;
    mk.canvas.height = mk.canvas.offsetHeight;
  }

  if (!mk.questionActive) {
    mkUpdatePhysics(dt);
    mkUpdateOpponents(dt);
    mkCheckBoxCollisions();
  }

  mkDraw(ts);

  if (mk.lap >= mk.totalLaps) {
    mk.running = false;
    stopEngine(); stopBgMusic();
    setTimeout(mkEndRace, 300);
    return;
  }

  mk.animFrame = requestAnimationFrame(mkGameLoop);
}


// ── Question system ────────────────────────────────────────────────────────────
function mkTriggerQuestion(box) {
  mk.questionActive = true;
  mk.currentBox = box;
  clearInterval(mk.qTimer);

  const isGold = box.gold;
  const overlay = document.getElementById('mk-q-overlay');
  const qBox = document.getElementById('mk-q-box');
  const badge = document.getElementById('mk-q-badge');
  const ynRow = document.getElementById('mk-yn-row');
  const mcRow = document.getElementById('mk-mc-row');
  const feedback = document.getElementById('mk-q-feedback');

  overlay.classList.remove('mk-hidden');
  feedback.classList.add('mk-hidden');
  feedback.className = 'mk-hidden';

  if (isGold) {
    qBox.classList.add('gold-box');
    badge.textContent = '⭐ GOLD BOX — 3× POINTS';
    ynRow.classList.add('mk-hidden');
    mcRow.classList.remove('mk-hidden');

    const q = shuffleIntoBank(MK_GOLD, mk.qQuestions, 'gold');
    document.getElementById('mk-q-text').textContent = q.q;
    const btns = document.querySelectorAll('.mk-mc-btn');
    btns.forEach((btn, i) => {
      btn.textContent = q.choices[i];
      btn.className = 'mk-mc-btn';
      btn.disabled = false;
      btn.onclick = () => mkAnswerMC(btn, i, q.correct, isGold);
    });
    mk.qMaxTime = 15;
  } else {
    qBox.classList.remove('gold-box');
    badge.textContent = '❓ MYSTERY BOX';
    ynRow.classList.remove('mk-hidden');
    mcRow.classList.add('mk-hidden');

    const q = shuffleIntoBank(MK_YN, mk.qQuestions, 'yn');
    document.getElementById('mk-q-text').textContent = q.q;
    document.getElementById('mk-btn-yes').disabled = false;
    document.getElementById('mk-btn-no').disabled  = false;
    document.getElementById('mk-btn-yes').onclick = () => mkAnswerYN(true,  q.a, isGold);
    document.getElementById('mk-btn-no').onclick  = () => mkAnswerYN(false, q.a, isGold);
    mk.qMaxTime = 10;
  }

  mk.qTimeLeft = mk.qMaxTime;
  mkStartQTimer();
}

function shuffleIntoBank(bank, used, key) {
  const available = bank.filter(q => !used.find(u => u === q));
  if (available.length === 0) { mk.qQuestions = []; return shuffleIntoBank(bank, [], key); }
  const q = available[Math.floor(Math.random() * available.length)];
  used.push(q);
  return q;
}

function mkStartQTimer() {
  const fill = document.getElementById('mk-q-timer-fill');
  fill.style.width = '100%';
  fill.style.transition = 'none';
  clearInterval(mk.qTimer);
  mk.qTimer = setInterval(() => {
    mk.qTimeLeft -= 0.1;
    fill.style.transition = 'width 0.1s linear';
    fill.style.width = Math.max(0, (mk.qTimeLeft / mk.qMaxTime) * 100) + '%';
    if (mk.qTimeLeft <= 0) {
      clearInterval(mk.qTimer);
      mkHandleTimeout();
    }
  }, 100);
}

function mkHandleTimeout() {
  sndWrong();
  mkShowFeedback('⏱ Too slow! Penalty.', false, true);
}

function mkAnswerYN(given, correct, isGold) {
  clearInterval(mk.qTimer);
  document.getElementById('mk-btn-yes').disabled = true;
  document.getElementById('mk-btn-no').disabled  = true;
  const right = given === correct;
  const bonus = Math.ceil(mk.qTimeLeft / mk.qMaxTime * 50);
  mkHandleAnswer(right, isGold, bonus);
}

function mkAnswerMC(btn, idx, correctIdx, isGold) {
  clearInterval(mk.qTimer);
  document.querySelectorAll('.mk-mc-btn').forEach(b => b.disabled = true);
  const right = idx === correctIdx;
  btn.classList.add(right ? 'correct' : 'wrong');
  if (!right) document.querySelectorAll('.mk-mc-btn')[correctIdx].classList.add('correct');
  const bonus = Math.ceil(mk.qTimeLeft / mk.qMaxTime * 80);
  mkHandleAnswer(right, isGold, bonus);
}

function mkHandleAnswer(correct, isGold, timeBonus) {
  if (correct) {
    const pts = (isGold ? 300 : 100) + timeBonus;
    const mult = mk.doublePoints && performance.now() < mk.doubleUntil ? 2 : 1;
    mk.score += pts * mult;
    mk.streak++;
    mk.bestStreak = Math.max(mk.bestStreak, mk.streak);
    mk.correct++;
    sndCorrect();
    mkApplyPowerup(isGold);
    mkShowFeedback(`✓ Correct! +${pts * mult} pts`, true, false);
  } else {
    mk.streak = 0;
    mk.wrong++;
    sndWrong();
    setTimeout(() => {
      sndSpinOut();
      mkApplyPenalty(isGold);
    }, 300);
    mkShowFeedback(isGold ? '✗ Wrong! Big spin-out!' : '✗ Wrong! Spin-out!', false, false);
  }
}

function mkShowFeedback(text, correct, timeout) {
  const fb = document.getElementById('mk-q-feedback');
  fb.textContent = text;
  fb.className = correct ? 'correct' : 'wrong';
  fb.classList.remove('mk-hidden');
  setTimeout(() => mkCloseQuestion(), timeout ? 600 : 1000);
}

function mkCloseQuestion() {
  document.getElementById('mk-q-overlay').classList.add('mk-hidden');
  mk.questionActive = false;
  mk.currentBox = null;
}

function mkApplyPowerup(isGold) {
  const now = performance.now();
  const opts = isGold
    ? ['boost','boost','double','shield']
    : ['boost','slow_opp','shield','double'];
  const pick = opts[Math.floor(Math.random() * opts.length)];
  if (pick === 'boost') {
    mk.boosting = true;
    mk.boostUntil = now + (isGold ? 4000 : 2500);
    sndBoost();
    mkShowPowerupBanner('⚡ SPEED BOOST!');
  } else if (pick === 'double') {
    mk.doublePoints = true;
    mk.doubleUntil = now + 15000;
    mkShowPowerupBanner('✕2 DOUBLE POINTS — 15s');
  } else if (pick === 'shield') {
    mk.shield = true;
    mkShowPowerupBanner('🛡 SHIELD ACTIVE');
  } else if (pick === 'slow_opp') {
    mk.opponents.forEach(o => o.speed = Math.max(60, o.speed * 0.6));
    setTimeout(() => mk.opponents.forEach(o => o.speed = 6.8 + Math.random() * 0.6), 4000);
    mkShowPowerupBanner('🐢 OPPONENTS SLOWED!');
  }
}

function mkApplyPenalty(isGold) {
  if (mk.shield) {
    mk.shield = false;
    mkShowPowerupBanner('🛡 SHIELD BLOCKED IT!');
    return;
  }
  const now = performance.now();
  const spinDur = isGold ? 2200 : 1200;
  mk.spinning = true;
  mk.spinUntil = now + spinDur;
  mk.spinAngle = 0;
  mk.lives = Math.max(0, mk.lives - 1);
  mk.score = Math.max(0, mk.score - (isGold ? 150 : 50));
  mkSpawnSmoke();
  setTimeout(() => { mk.spinning = false; }, spinDur);
  if (mk.lives <= 0) setTimeout(mkEndRace, spinDur + 300);
}


// ── Race lifecycle ────────────────────────────────────────────────────────────
function openWorld3() {
  document.getElementById('world3-overlay').classList.remove('hidden');
  showW3Screen('w3-intro');
}

function closeWorld3() {
  mk.running = false;
  if (mk.animFrame) { cancelAnimationFrame(mk.animFrame); mk.animFrame = null; }
  stopEngine(); stopBgMusic();
  clearInterval(mk.qTimer);
  document.getElementById('world3-overlay').classList.add('hidden');
  switchTab('map');
}

function showW3Screen(id) {
  ['w3-intro','w3-game','w3-complete'].forEach(s =>
    document.getElementById(s).classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

function startRace() {
  Object.assign(mk, {
    running: false,
    pos: 0, playerX: 0, speed: 0, steer: 0, lap: 0,
    lives: 3, score: 0, streak: 0, bestStreak: 0, correct: 0, wrong: 0,
    position: 1,
    boosting: false, boostUntil: 0, shield: false,
    doublePoints: false, doubleUntil: 0,
    spinning: false, spinUntil: 0, spinAngle: 0,
    smoke: [], curveTable: null,
    questionActive: false, currentBox: null, qTimeLeft: 10, qTimer: null, qMaxTime: 10,
    qQuestions: [],
  });
  mk.boxes = mkPlaceBoxes();
  mk.opponents.forEach((o, i) => {
    o.pos = (i + 1) * 6; o.playerX = (i - 1) * 0.28;
    o.speed = 6.9 + i * 0.3; o.steer = 0; o.lap = 0;
  });

  mk.canvas   = document.getElementById('mk-canvas');
  mk.ctx      = mk.canvas.getContext('2d');
  mk.mmCanvas = document.getElementById('mk-mm-canvas');
  mk.mmCtx    = mk.mmCanvas.getContext('2d');
  mk.canvas.width  = mk.canvas.offsetWidth;
  mk.canvas.height = mk.canvas.offsetHeight;

  showW3Screen('w3-game');
  document.getElementById('mk-q-overlay').classList.add('mk-hidden');
  document.getElementById('mk-powerup-banner').classList.add('mk-hidden');

  mkRunCountdown(3, () => {
    mk.running = true;
    mk.lastTs  = performance.now();
    startEngine();
    startBgMusic();
    mk.animFrame = requestAnimationFrame(mkGameLoop);
  });
}

function mkRunCountdown(n, cb) {
  const el  = document.getElementById('mk-countdown');
  const num = document.getElementById('mk-countdown-num');
  el.classList.remove('mk-hidden');
  let current = n;
  function tick() {
    if (current > 0) {
      num.textContent = current;
      num.style.animation = 'none'; void num.offsetWidth;
      num.style.animation = 'countPop 0.35s ease';
      sndCountdown(n - current); current--;
      setTimeout(tick, 800);
    } else {
      num.textContent = 'GO!';
      num.style.animation = 'none'; void num.offsetWidth;
      num.style.animation = 'countPop 0.35s ease';
      sndGo();
      setTimeout(() => { el.classList.add('mk-hidden'); cb(); }, 600);
    }
  }
  tick();
}

function mkEndRace() {
  mk.running = false;
  if (mk.animFrame) { cancelAnimationFrame(mk.animFrame); mk.animFrame = null; }
  stopEngine(); stopBgMusic(); clearInterval(mk.qTimer);

  const total    = mk.correct + mk.wrong;
  const accuracy = total > 0 ? Math.round((mk.correct / total) * 100) : 100;
  const xpEarned = 200 + (mk.correct * 20) + (mk.bestStreak * 15) +
                   (mk.position === 1 ? 150 : mk.position === 2 ? 75 : 0);

  const tag   = document.getElementById('mk-finish-tag');
  const title = document.getElementById('mk-finish-title');
  const trophy = document.getElementById('mk-finish-trophy');

  if (mk.position === 1) {
    tag.textContent = '🏆 FIRST PLACE'; title.textContent = 'Champion!'; trophy.textContent = '🏆';
    setTimeout(sndVictory, 200); startConfetti(4000);
  } else if (mk.position === 2) {
    tag.textContent = '🥈 SECOND PLACE'; title.textContent = 'Strong Race!'; trophy.textContent = '🥈';
    setTimeout(sndVictory, 200);
  } else if (mk.position === 3) {
    tag.textContent = '🥉 THIRD PLACE'; title.textContent = 'Keep Practicing!'; trophy.textContent = '🥉';
  } else {
    tag.textContent = '4th PLACE'; title.textContent = 'Back to Training!'; trophy.textContent = '😅';
    setTimeout(sndSadTrombone, 400);
  }

  document.getElementById('w3-complete-sub').textContent =
    accuracy >= 85 ? "Sharp answers at full speed — that's how reps close deals." :
    accuracy >= 65 ? 'Solid run. Keep drilling the objection responses.' :
    'Every race sharpens your game. Get back on the track.';

  document.getElementById('w3-results').innerHTML = `
    <div class="gauntlet-result-item"><strong>${mk.score}</strong><span>Score</span></div>
    <div class="gauntlet-result-item"><strong>${mk.position}${['st','nd','rd','th'][mk.position-1]}</strong><span>Finish</span></div>
    <div class="gauntlet-result-item"><strong>${accuracy}%</strong><span>Accuracy</span></div>
    <div class="gauntlet-result-item"><strong>${mk.bestStreak}</strong><span>Best Streak</span></div>
  `;
  document.getElementById('w3-xp-badge').textContent = `+${xpEarned} XP`;
  showW3Screen('w3-complete');
  state.gauntletComplete = true;
  updateXPBar(state.xp + xpEarned);
  saveState();
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

  // Sales Kart — tap/hold lane buttons
  const mkBtnLeft  = document.getElementById('mk-btn-left');
  const mkBtnRight = document.getElementById('mk-btn-right');
  ['pointerdown','touchstart'].forEach(ev => {
    mkBtnLeft.addEventListener(ev,  e => { e.preventDefault(); mk.touch.left  = true;  mkBtnLeft.classList.add('held');  }, { passive: false });
    mkBtnRight.addEventListener(ev, e => { e.preventDefault(); mk.touch.right = true;  mkBtnRight.classList.add('held'); }, { passive: false });
  });
  ['pointerup','pointerleave','touchend','touchcancel'].forEach(ev => {
    mkBtnLeft.addEventListener(ev,  () => { mk.touch.left  = false; mkBtnLeft.classList.remove('held');  });
    mkBtnRight.addEventListener(ev, () => { mk.touch.right = false; mkBtnRight.classList.remove('held'); });
  });

  // Keyboard lane switching (Arrow / WASD) — tap, not hold
  document.addEventListener('keydown', e => {
    if (document.getElementById('world3-overlay').classList.contains('hidden')) return;
    if (e.key === 'ArrowLeft'  || e.key === 'a' || e.key === 'A') { mk.keys.left  = true; }
    if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') { mk.keys.right = true; }
  });
  document.addEventListener('keyup', e => {
    if (e.key === 'ArrowLeft'  || e.key === 'a' || e.key === 'A') mk.keys.left  = false;
    if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') mk.keys.right = false;
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
