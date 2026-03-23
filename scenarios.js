// ═══════════════════════════════════════════════════════════════════════
// DISTRICT 1, Little Italy, "The Opener" (it01–it50)
// ═══════════════════════════════════════════════════════════════════════

it01: {
  objection: "I'm in the middle of lunch service, come back some other time.",
  responses: [
    {
      text: "Restaurants nearby add $5K a month in delivery. Back at 3pm?",
      correct: true,
      technique: 'Empathy Opener',
      feedback: "You acknowledge the rush, drop a specific number to create curiosity, and ask for a concrete micro-commitment later the same day.",
    },
    {
      text: "Of course, I totally respect that. Here's my card with my number on it. Give me a call when you have some time and we can set something up properly.",
      correct: false,
      feedback: "This is polite but surrenders the moment entirely, you leave with nothing concrete and no reason for Marco to remember you.",
    },
    {
      text: "I hear you, lunch rush is no joke. Quick thing though — this only takes two minutes and it could really impact your delivery revenue in a meaningful way this quarter.",
      correct: false,
      feedback: "Dismissing his stated time constraint feels pushy and disrespectful of his business reality.",
    },
    {
      text: "No worries at all. I'll swing by tomorrow morning before service starts and we can have a proper conversation about what Uber Eats can do for a restaurant like yours.",
      correct: false,
      feedback: "Leaving a card with no hook or follow-up plan means you'll never hear from him.",
    },
  ],
},

it02: {
  objection: "Who let you in? We're not taking meetings with vendors today.",
  responses: [
    {
      text: "I apologize for the timing. Your front of house waved me in — I should have confirmed first. I'll head out and find a better moment to come back when you're more available.",
      correct: false,
      feedback: "You've already disrupted his day, leaving empty-handed wastes that disruption without gaining anything.",
    },
    {
      text: "Not here to sell anything today — just dropping off one page of delivery data I pulled on this neighborhood. Order volumes, top cuisines, coverage gaps. Can I leave it with you?",
      correct: true,
      technique: 'Pattern Interrupt',
      feedback: "By reframing yourself as someone delivering value rather than asking for something, you break the vendor-rejection script and create curiosity about the data.",
    },
    {
      text: "I only need five minutes to explain what we offer and why it's genuinely relevant to a restaurant of your size and reputation here. I wouldn't barge in for something that wasn't worth your time.",
      correct: false,
      feedback: "Throwing the hostess under the bus creates conflict and makes you look dishonest.",
    },
    {
      text: "Understood completely. I'm from Uber Eats and we're actively signing restaurants in this neighborhood right now. I just wanted to make sure you heard about it before we moved on to the next block.",
      correct: false,
      feedback: "Leading with your company name and urgency triggers the exact vendor-rejection reflex he just expressed.",
    },
  ],
},

it03: {
  objection: "I've heard this pitch before. You all sound the same.",
  responses: [
    {
      text: "We're genuinely different from other platforms in a few important ways. Let me take two minutes to walk you through our commission structure and tools — once you see the full picture, I think you'll understand why.",
      correct: false,
      feedback: "Every salesperson says 'we're different', this confirms his belief that you all sound the same.",
    },
    {
      text: "You're probably right that most of us lead the same way. What's the one thing about delivery that frustrates you most? That's actually what I want to talk about.",
      correct: true,
      technique: 'Curiosity Hook',
      feedback: "Agreeing with his cynicism disarms him, and pivoting to a question about his pain makes the conversation about him instead of you.",
    },
    {
      text: "Fair enough, I won't push. Maybe I'll check back another time when you're in a better headspace and more open to hearing something genuinely different from the usual pitch.",
      correct: false,
      feedback: "Walking away without any engagement wastes the opportunity and signals you have nothing unique to offer.",
    },
    {
      text: "I hear that a lot, honestly. But our commission rates dropped significantly this quarter — we're now the most competitive platform in the market, which is a real difference from anything you've heard before.",
      correct: false,
      feedback: "Jumping straight to commission rates without understanding his concerns feels tone-deaf to what he just said.",
    },
  ],
},

it04: {
  objection: "I'm not the owner. You'd have to talk to my father, but he doesn't take meetings.",
  responses: [
    {
      text: "Could you give me his contact number? I'd love to reach out directly so I can speak to the right person and not put the burden on you to relay everything.",
      correct: false,
      feedback: "Asking for personal contact info from a family member feels intrusive and bypasses the trust you haven't built yet.",
    },
    {
      text: "It sounds like you're deeply involved in the day-to-day here — could you be the right person to evaluate something like this on the business side? You clearly know the operation well.",
      correct: false,
      feedback: "This can feel dismissive of the family hierarchy and may offend if the son doesn't have decision-making authority.",
    },
    {
      text: "That's too bad. Here's my card — pass it along whenever you get a chance and let him know it might be worth a quick look when he has a moment.",
      correct: false,
      feedback: "Cards passed through a gatekeeper rarely reach the decision-maker with any context or urgency.",
    },
    {
      text: "Does he come in early for prep? Even two minutes with him would be enough — I don't need a formal meeting, just a quick word before service starts.",
      correct: true,
      technique: 'Gatekeeper Navigation',
      feedback: "You respect the father's time, reframe from 'meeting' to 'quick conversation,' and ask for intel on his schedule, turning the gatekeeper into an ally.",
    },
  ],
},

it05: {
  objection: "What's this about? I have 30 seconds.",
  responses: [
    {
      text: "Three spots nearby: $6,200 a month each in new delivery. Worth ten minutes?",
      correct: true,
      technique: '30-Second Pitch',
      feedback: "You respect the time constraint, lead with hyperlocal social proof and a specific dollar figure, and close with a concrete ask for a follow-up meeting.",
    },
    {
      text: "I'm with Uber Eats and we help restaurants grow delivery revenue. Could we set up a proper meeting this week so I can walk you through what it actually looks like for a restaurant your size?",
      correct: false,
      feedback: "Too generic, you've wasted his 30 seconds without giving him a reason to care about your specific value.",
    },
    {
      text: "Honestly, thirty seconds really isn't enough time to explain this properly. Can we find a better time — maybe tomorrow morning before the lunch rush so you can actually ask questions?",
      correct: false,
      feedback: "Rejecting his time frame signals that you can't adapt to his needs, a bad first impression.",
    },
    {
      text: "We're Uber Eats — we partner with restaurants to grow delivery revenue. We've got a huge customer base, strong marketing tools, restaurant support, and flexible commission structures for independents like yours.",
      correct: false,
      feedback: "This is a feature dump that ignores his time constraint and gives no specific reason for him to engage further.",
    },
  ],
},

it06: {
  objection: "We're not interested in anything you're selling.",
  responses: [
    {
      text: "We hear that a lot. But once restaurant owners see the revenue numbers from places nearby, most of them become genuinely interested pretty fast. It only takes a minute to see if it applies to you.",
      correct: false,
      feedback: "Telling someone they'll change their mind is condescending and triggers defensiveness.",
    },
    {
      text: "Fair enough — I appreciate you being straight with me. Sorry to take up your time and I'll leave you to it.",
      correct: false,
      feedback: "You've accepted a reflexive no without even attempting to create curiosity, every cold call gets an initial no.",
    },
    {
      text: "You've got a 4.7 with over 800 reviews. Is any of that delivery demand going to your competitors right now instead of coming back to you?",
      correct: true,
      technique: 'Specificity Hook',
      feedback: "You defuse the rejection, demonstrate you did homework on his business, and plant a competitive fear question that's hard to ignore.",
    },
    {
      text: "Totally fine. Can I at least leave some materials so you have the information on hand? No pressure, no follow-up required — just something to look at when you have a free moment.",
      correct: false,
      feedback: "Brochures without context or a hook end up in the trash.",
    },
  ],
},

it07: {
  objection: "Can you just leave your card? I'll call if I'm interested.",
  responses: [
    {
      text: "Sure, of course. Though if there's any chance we could talk for two minutes while I'm here — most owners don't end up calling back once things get busy and I'd hate for you to miss the numbers.",
      correct: false,
      feedback: "You're relying entirely on the prospect to take action, which almost never happens with a cold drop-in.",
    },
    {
      text: "I'd rather not just leave a card and disappear. If we talked for two minutes right now, I know I can share something genuinely worth your time before you decide whether to follow up.",
      correct: false,
      feedback: "Refusing his request makes you seem pushy and disrespectful of his boundaries.",
    },
    {
      text: "Of course. Most people don't end up calling back once things get busy — totally normal. Could I get your email instead so I can send the relevant numbers directly to you when it suits you?",
      correct: false,
      feedback: "Telling him most people don't call back is passive-aggressive and creates an awkward dynamic.",
    },
    {
      text: "Of course. I'll jot on the back: 35–50 delivery orders a week, $28 average check for places like yours. What's the best day for me to follow up with you?",
      correct: true,
      technique: 'Immediate Credibility',
      feedback: "You comply with his request, add a memorable data point to the card, and secure a follow-up day, turning a brush-off into a warm next step.",
    },
  ],
},

it08: {
  objection: "How did you even get my number?",
  responses: [
    {
      text: "You're one of the top-rated Italian spots in this area — your reviews put you on my radar. Can I share one quick stat about delivery demand in your neighborhood before you decide anything?",
      correct: true,
      technique: 'Immediate Credibility',
      feedback: "You answer transparently, turn the question into a compliment about his restaurant's reputation, and pivot to a value-driven ask.",
    },
    {
      text: "It's listed on your Google Business page and your website — both publicly available. I always try to reach out directly to restaurants rather than going through a generic contact form.",
      correct: false,
      feedback: "While factual, this is defensive and doesn't move the conversation forward, you've answered his question but created no interest.",
    },
    {
      text: "We have a database of restaurants in the area that we use for outreach. But honestly, what matters more right now is what I can potentially do for your revenue this quarter.",
      correct: false,
      feedback: "Dismissing his concern ('that's not important') feels evasive and starts the relationship on a bad note.",
    },
    {
      text: "I apologize if this feels intrusive at all. I can take you off our outreach list right now and make sure no one from our team contacts you again if you'd strongly prefer that.",
      correct: false,
      feedback: "Over-apologizing and offering to remove him surrenders the conversation before it starts.",
    },
  ],
},

it09: {
  objection: "I'm in the middle of prep. Can you call me tomorrow?",
  responses: [
    {
      text: "Absolutely. What time tomorrow works, not during prep?",
      correct: true,
      technique: 'Timing Request',
      feedback: "You respect his workflow, show you understand restaurant rhythms, and lock in a specific callback time rather than a vague 'tomorrow.'",
    },
    {
      text: "This will literally take one minute — I promise it's worth it. I'll be quick and then let you get straight back to what you're doing without taking up any more of your time.",
      correct: false,
      feedback: "Ignoring his request to call tomorrow shows you prioritize your agenda over his.",
    },
    {
      text: "Sure, I'll try you tomorrow. Have a great service and I hope the prep goes well — looking forward to connecting when the timing is better for you.",
      correct: false,
      feedback: "Without pinning down a time, 'tomorrow' becomes a missed call and a dead lead.",
    },
    {
      text: "Totally get it. I'll send you a quick email instead so you can read it on your own time. What's the best address to reach you at for something like this?",
      correct: false,
      feedback: "Pivoting to email when he's busy with his hands in dough feels like you're sneaking in through another door.",
    },
  ],
},

it10: {
  objection: "Look, every week someone from a delivery app walks in here. I'm over it.",
  responses: [
    {
      text: "I hear that and I genuinely understand the frustration. But Uber Eats is different in a few meaningful ways — give me two minutes and I'll explain exactly what sets us apart from everything else you've heard.",
      correct: false,
      feedback: "Every rep from every platform says they're different, you're proving his point.",
    },
    {
      text: "Sorry to hear that — I completely get it. I'll be quick: we actually have a promotion running specifically for Italian restaurants this month and I didn't want you to miss the window.",
      correct: false,
      feedback: "Acknowledging his frustration and then immediately pitching shows you didn't actually listen.",
    },
    {
      text: "I don't blame you. Sal's down the street mentioned your carbonara is the best on the block. Is the takeout demand for it strong, or is it mostly a dine-in dish for you?",
      correct: true,
      technique: 'Pattern Interrupt',
      feedback: "You break the sales script entirely by leading with a genuine compliment from a neighbor and asking a curiosity-driven question about his food, making this conversation feel different from the others.",
    },
    {
      text: "Would it help if I came back at a much better time — maybe when foot traffic is lighter and you have more headspace to actually evaluate whether something like this makes sense for you?",
      correct: false,
      feedback: "He's not complaining about timing, he's complaining about the constant pitches. Coming back later is still another pitch.",
    },
  ],
},

it11: {
  objection: "My son handles all the tech stuff. He's not here today.",
  responses: [
    {
      text: "Can I get his number? I'll reach him directly so you don't have to play middleman for something that might not even be relevant to you.",
      correct: false,
      feedback: "Bypassing the father to contact the son directly can feel disrespectful in a family business dynamic.",
    },
    {
      text: "How long have you been here on this block? And when does your son usually come in — I'd love to catch you both for even ten minutes if that ever works.",
      correct: true,
      technique: 'Gatekeeper Navigation',
      feedback: "You validate the family structure, use the moment to build rapport with the owner directly, and set up a meeting that includes the decision-maker.",
    },
    {
      text: "No problem at all. I'll plan to come back when he's around — what days does he usually work so I can make sure I time it right and don't miss him again?",
      correct: false,
      feedback: "You miss the chance to build any rapport with the owner standing in front of you.",
    },
    {
      text: "Actually, this isn't really a tech conversation — it's more about growing revenue and your customer base. You'd honestly be exactly the right person to evaluate whether it makes sense for the business.",
      correct: false,
      feedback: "Correcting him about who should handle this can feel dismissive of how he runs his business.",
    },
  ],
},

it12: {
  objection: "We've been here forty years without delivery. Why would I start now?",
  responses: [
    {
      text: "The market has shifted pretty significantly. If you're not offering delivery, you're leaving real money on the table — money that's going to restaurants that are a lot less established than yours.",
      correct: false,
      feedback: "Telling a 40-year veteran that the market has changed feels condescending and dismissive of his success.",
    },
    {
      text: "Forty years is incredible. The restaurants I talk to with that kind of history aren't doing delivery because they need it — they do it because customers ask. Have any of your regulars ever requested it?",
      correct: true,
      technique: 'Empathy Opener',
      feedback: "You honor the legacy, reframe delivery as customer-driven rather than desperation, and ask a question that lets him discover the need himself.",
    },
    {
      text: "That's genuinely impressive and says a lot about your food and the community you've built. But delivery is where industry growth is concentrated right now, and it might be worth exploring for a place with your reputation.",
      correct: false,
      feedback: "Generic 'times are changing' language doesn't respect the specific context of his long-running business.",
    },
    {
      text: "I completely understand — not every restaurant needs delivery and your model is clearly working. Thanks so much for your time and congratulations on forty years. That's a real achievement.",
      correct: false,
      feedback: "Conceding too quickly wastes an opportunity to help him see delivery as an extension of his success, not a departure from it.",
    },
  ],
},

it13: {
  objection: "I don't trust these apps. They take advantage of small businesses.",
  responses: [
    {
      text: "We're genuinely not like the others. Uber Eats has a dedicated team focused specifically on restaurant partner success, and we're constantly working to improve the relationship for small business owners.",
      correct: false,
      feedback: "Empty reassurance without evidence sounds like exactly the kind of thing someone taking advantage would say.",
    },
    {
      text: "I hear you. Let me show you our commission structure right now — it's fully transparent, and I can walk you through exactly what you'd keep on every order so nothing is hidden.",
      correct: false,
      feedback: "Jumping to commission details before understanding his specific concern misses the emotional root of his objection.",
    },
    {
      text: "Personal experience, or something you read? My answer depends on that.",
      correct: true,
      technique: 'Curiosity Hook',
      feedback: "You validate his distrust, distinguish between personal experience and hearsay, and show you want to have a real conversation rather than bulldoze past his concern.",
    },
    {
      text: "That's a shame. A lot of small restaurants in this neighborhood are actually doing really well with us — some of your direct neighbors are making significant money on the platform every single month.",
      correct: false,
      feedback: "Dismissing his feelings with 'that's a shame' and generic social proof won't overcome deep-seated distrust.",
    },
  ],
},

it14: {
  objection: "You're the third person this month from Uber Eats. Don't you people talk to each other?",
  responses: [
    {
      text: "That's completely on us and I'm embarrassed by it. I'm flagging you in our system right now so it won't happen again. What did the other reps say that didn't land for you?",
      correct: true,
      technique: 'Empathy Opener',
      feedback: "You own the mistake, offer a concrete fix, and turn the frustration into an opportunity to learn what didn't work, differentiating yourself from the previous reps.",
    },
    {
      text: "I'm sorry about the confusion. I can assure you I'm the right person to be speaking with this time — I have more authority on pricing and terms than whoever came by before.",
      correct: false,
      feedback: "Claiming you're 'the right person' without evidence sounds like more of the same disorganization.",
    },
    {
      text: "I'm not sure what happened with those visits, but let me start completely fresh and give you a much cleaner picture of what we actually offer for a restaurant exactly like yours.",
      correct: false,
      feedback: "Ignoring the coordination failure and launching into a pitch shows you don't take his frustration seriously.",
    },
    {
      text: "That's unusual and I'll definitely look into it on our end. But while I'm here — we have a new promotion running specifically for Italian restaurants in this area right now.",
      correct: false,
      feedback: "Brushing past the issue to pivot to promotions feels tone-deaf.",
    },
  ],
},

it15: {
  objection: "I already said no to the last guy. What part of 'no' don't you understand?",
  responses: [
    {
      text: "I apologize — I wasn't aware of the previous conversation. I don't want to add to your frustration, so I'll leave you alone and make sure we don't reach back out going forward.",
      correct: false,
      feedback: "Full retreat means you lose any chance to salvage the relationship or understand the real objection.",
    },
    {
      text: "The last rep might not have had the full picture. We've made some meaningful changes recently and if I could just take five minutes, I honestly think you'd find it worth reconsidering.",
      correct: false,
      feedback: "Undermining a colleague to justify re-pitching feels manipulative.",
    },
    {
      text: "Fair. Was it the commission, the concept, or just the way the last rep approached it? Say the word and I'll make sure nobody contacts you again — I mean that.",
      correct: true,
      technique: 'Permission to Continue',
      feedback: "You give him full control, lower the stakes by making it about feedback rather than a sale, and offer a genuine exit, which paradoxically makes him more likely to engage.",
    },
    {
      text: "I understand and I respect that. Just so you have the most current information — our commission rates have dropped significantly this quarter, which might genuinely change the picture from what you heard before.",
      correct: false,
      feedback: "Leading with 'but' after someone says no signals you weren't really listening.",
    },
  ],
},

it16: {
  objection: "My customers come here for the experience. Delivery ruins that.",
  responses: [
    {
      text: "Delivery doesn't have to hurt the experience at all. Tons of high-end restaurants do both really successfully with separate menus and dedicated packaging without compromising what makes the dine-in special.",
      correct: false,
      feedback: "Generic reassurance doesn't address his specific concern about his unique dining experience.",
    },
    {
      text: "That's actually a really valid point and I appreciate you sharing it. A lot of experience-driven restaurants feel exactly the same way and decide delivery just isn't the right fit for their concept.",
      correct: false,
      feedback: "Agreeing too quickly without exploring options leaves potential value on the table.",
    },
    {
      text: "What if you offered a smaller, travel-friendly menu — baked dishes, cold apps, things that hold well? Brand stays fully protected. Want to see how a restaurant like yours built that out?",
      correct: true,
      technique: 'Specificity Hook',
      feedback: "You validate his brand concern, introduce the concept of a curated delivery menu, and offer a concrete example, making delivery feel brand-safe.",
    },
    {
      text: "Our insulated packaging has improved a lot and we've invested heavily in it. Even delicate dishes like pasta and risotto arrive in surprisingly good condition — much better than most people expect going in.",
      correct: false,
      feedback: "Jumping to packaging solutions misses the deeper point about his brand identity and customer experience.",
    },
  ],
},

it17: {
  objection: "Send me an email. I'll read it when I have time.",
  responses: [
    {
      text: "Sure, but emails tend to get buried fast. Could we just talk for two minutes right now while I'm already here? It would honestly save us both a lot of back and forth.",
      correct: false,
      feedback: "Rejecting his preferred communication channel shows you value your convenience over his.",
    },
    {
      text: "Of course. I'll send something over later today and follow up if I don't hear back within a few days — just want to make sure it doesn't get lost in the shuffle.",
      correct: false,
      feedback: "Without asking what to include or setting a follow-up, the email becomes a dead end.",
    },
    {
      text: "Your email? Three bullet points, local delivery data. Anything specific to include?",
      correct: true,
      technique: 'Permission to Continue',
      feedback: "You comply with his request, promise brevity and relevance, and ask what he cares about, making the email a collaborative step rather than a brush-off.",
    },
    {
      text: "I'd honestly rather show you in person — it's much more impactful when you can see the numbers visually and ask questions in real time. When could I come back for a proper sit-down?",
      correct: false,
      feedback: "Overriding his preference for a low-commitment channel with a high-commitment ask feels pushy.",
    },
  ],
},

it18: {
  objection: "I don't have time for this. We're short-staffed as it is.",
  responses: [
    {
      text: "I totally understand. Let me know when things settle down a bit and I'll circle back when the timing is better and you have more bandwidth to think about it.",
      correct: false,
      feedback: "Staffing issues don't 'settle down', you're deferring indefinitely with no follow-up plan.",
    },
    {
      text: "This would only take a few minutes and honestly it could help your situation a lot more than you might expect — especially given what you're dealing with right now in terms of capacity.",
      correct: false,
      feedback: "Minimizing his time concern when he's clearly overwhelmed feels dismissive.",
    },
    {
      text: "Delivery actually adds revenue without needing extra front-of-house staff. Would five minutes later this week be worth exploring how that might work for your setup?",
      correct: true,
      technique: 'Curiosity Hook',
      feedback: "You empathize with a real pain point and reframe delivery as a solution to his staffing problem rather than an additional burden.",
    },
    {
      text: "Once Uber Eats is set up it's essentially self-managing. Most owners say the operational lift is almost zero after the first few days, so it really wouldn't add to your team's workload at all.",
      correct: false,
      feedback: "Overselling ease-of-use when he's stressed about staffing sounds like an empty promise.",
    },
  ],
},

it19: {
  objection: "I had a bad experience with a delivery driver last year. Food arrived cold and the customer blamed us.",
  responses: [
    {
      text: "That won't happen with Uber Eats. Our drivers are held to high standards and we have strong ratings consistently across the board — it's a genuinely different experience from what you dealt with.",
      correct: false,
      feedback: "Blanket guarantees about driver quality aren't credible and don't address his specific bad experience.",
    },
    {
      text: "Sorry to hear that. Unfortunately, cold food is a risk with any delivery platform — there's only so much anyone can fully control once the food leaves your kitchen.",
      correct: false,
      feedback: "Admitting the problem exists without offering a solution just reinforces his reason to avoid delivery.",
    },
    {
      text: "Which platform was that? Some of the smaller ones really struggle with driver accountability — it might have been a platform problem rather than a delivery problem in general.",
      correct: false,
      feedback: "Just asking which platform without empathy or a solution feels like you're deflecting blame rather than helping.",
    },
    {
      text: "Real-time tracking, tamper-evident seals, and customer refunds come from us — not you. Your reputation stays protected. Got two minutes to see how it actually works?",
      correct: true,
      technique: 'Immediate Credibility',
      feedback: "You validate the experience, ask a clarifying question, and introduce specific features that address his exact concern, cold food and misplaced blame.",
    },
  ],
},

it20: {
  objection: "We only do dine-in. That's our whole model.",
  responses: [
    {
      text: "And clearly it works — your place looks packed. Do you ever get phone calls from people asking whether you deliver? Curious how often that comes up for you.",
      correct: true,
      technique: 'Curiosity Hook',
      feedback: "You compliment his success, then ask questions that help him discover unmet demand himself, which is more persuasive than you telling him the demand exists.",
    },
    {
      text: "Dine-in is great, but you're genuinely missing a significant revenue stream by not offering delivery to people who want your food but can't make it in to eat with you.",
      correct: false,
      feedback: "Telling him he's missing out feels like criticizing a model that's clearly working for him.",
    },
    {
      text: "A lot of dine-in restaurants have added delivery and it hasn't hurt their core business at all. Most of them say it's been completely additive without any cannibalization of their existing customer base.",
      correct: false,
      feedback: "Generic reassurance without asking about his specific situation doesn't create engagement.",
    },
    {
      text: "Got it — if you ever want to explore it down the road, feel free to keep my card and reach out whenever it feels like the right moment for you to revisit it.",
      correct: false,
      feedback: "Accepting 'no' without any curiosity or exploration wastes the interaction.",
    },
  ],
},

it21: {
  objection: "You want me to give you a cut of every order? That's my hard-earned money.",
  responses: [
    {
      text: "It's not that much when you break it down per order. I can show you the math right now and I think you'll find it's very reasonable compared to what you'd spend on any other customer acquisition channel.",
      correct: false,
      feedback: "Minimizing his concern about money feels dismissive of a legitimate business objection.",
    },
    {
      text: "Every delivery platform charges a commission — ours is consistently one of the most competitive in the market and we're fully transparent about every fee involved. No surprises once you're up and running.",
      correct: false,
      feedback: "Comparing to competitors doesn't address the fundamental objection about paying a cut at all.",
    },
    {
      text: "Think of it as a marketing expense — you'd pay for ads anyway. This one only costs you something when it actually generates a real, completed order from a customer who came in the door.",
      correct: false,
      feedback: "Relabeling the cost without explaining the incremental value sounds like a rhetorical trick.",
    },
    {
      text: "Only on new customers who'd never walk in. Does that change the math?",
      correct: true,
      technique: 'Immediate Credibility',
      feedback: "You honor his concern about margins and reframe the commission as a customer acquisition cost on incremental revenue rather than a tax on existing sales.",
    },
  ],
},

it22: {
  objection: "Talk to my manager, Maria. She handles all this. I'm just the cook.",
  responses: [
    {
      text: "You're the cook? Then you're the most important person here, honestly. Is Maria around today, or is there a good time this week to catch you both together for a few minutes?",
      correct: true,
      technique: 'Gatekeeper Navigation',
      feedback: "You elevate his role, ask for Maria's availability, and position the conversation as needing both perspectives, making him an ally rather than a barrier.",
    },
    {
      text: "Sure, where's Maria? I'll go find her right now and get out of your hair so you can get back to what you're doing.",
      correct: false,
      feedback: "Immediately ditching the person you're talking to feels transactional and rude.",
    },
    {
      text: "This actually affects the kitchen too — delivery volumes, ticket management, prep time changes. You'd really be the right person to understand the operational side and your input would matter in the final decision.",
      correct: false,
      feedback: "Overriding his redirect to Maria when he explicitly told you who to talk to feels pushy.",
    },
    {
      text: "Okay — could you have Maria give me a call when she has a free moment? Here's my number and she can reach out whenever it's most convenient for her.",
      correct: false,
      feedback: "Asking one person to relay your info to another rarely results in a callback.",
    },
  ],
},

it23: {
  objection: "I've been burned by salespeople before. I don't trust any of you.",
  responses: [
    {
      text: "I promise I'm one of the good ones. Give me a chance and I'll prove it to you through actions over time — I'm not going anywhere and I'm not here for a quick sign-up.",
      correct: false,
      feedback: "Every untrustworthy salesperson makes this exact promise.",
    },
    {
      text: "I'm sorry you've had bad experiences. Uber Eats is a publicly traded company with real accountability — that's a very different situation from smaller vendors who can just disappear on you.",
      correct: false,
      feedback: "Citing company size as a reason to trust doesn't address his personal experience with salespeople.",
    },
    {
      text: "Fair enough — I won't ask you to trust me. Can I show you real data from restaurants in your area, numbers you can look up and verify yourself before deciding anything?",
      correct: true,
      technique: 'Immediate Credibility',
      feedback: "You validate his distrust, remove yourself as the thing he needs to trust, and offer verifiable evidence, shifting trust from you to data.",
    },
    {
      text: "I understand completely. No pressure at all — take my card and reach out whenever you feel ready. There's absolutely no timeline or follow-up push from my side.",
      correct: false,
      feedback: "Retreating completely means his distrust wins and you never get the chance to earn credibility.",
    },
  ],
},

it24: {
  objection: "You want me to pay to be on an app? I already have a website.",
  responses: [
    {
      text: "A website is great, but Uber Eats puts you in front of millions of active users who are searching for food right now — at a scale a restaurant website really can't match on its own.",
      correct: false,
      feedback: "Dismissing his website to tout your user base feels competitive rather than collaborative.",
    },
    {
      text: "How's the website actually working for delivery orders? App users are usually a completely different customer — people searching nearby who've never heard of you before tonight.",
      correct: true,
      technique: 'Curiosity Hook',
      feedback: "You ask about his website's performance, which often reveals a gap, and position the app as additive rather than a replacement.",
    },
    {
      text: "Your website doesn't have nearly the same reach. Most people search for food on apps rather than Google now, especially for evening delivery when impulse ordering peaks most heavily.",
      correct: false,
      feedback: "Criticizing his existing investment creates defensiveness rather than openness.",
    },
    {
      text: "We're really not competing with your website at all — it's a completely different channel with a different audience, different purchasing intent, and customers who'd never find you any other way.",
      correct: false,
      feedback: "While true, this is too abstract without a concrete example of how the channels differ.",
    },
  ],
},

it25: {
  objection: "We're a small operation. We can't handle a bunch of delivery orders on top of dine-in.",
  responses: [
    {
      text: "You'd honestly be surprised. Most small restaurants handle it fine once they settle into a rhythm with the flow — it becomes second nature faster than most owners expect going in.",
      correct: false,
      feedback: "Dismissing his concern about capacity with 'you'd be surprised' doesn't address the real operational worry.",
    },
    {
      text: "Delivery orders are typically simpler than dine-in — no table service, smaller tickets, fewer modifications. Most kitchens find the extra volume much more manageable than they initially feared.",
      correct: false,
      feedback: "Generalizing about order complexity without knowing his menu or kitchen setup isn't credible.",
    },
    {
      text: "You control it: pause during rush, cap orders per hour. Want to see?",
      correct: true,
      technique: 'Immediate Credibility',
      feedback: "You directly address the overwhelm fear by showing that he controls the volume, and offer to demonstrate the specific feature.",
    },
    {
      text: "The delivery revenue would easily cover hiring one extra person to handle it — it becomes essentially self-funding within the first couple of months once you're seeing consistent order volume.",
      correct: false,
      feedback: "Suggesting he hire someone contradicts his concern about being a small operation with limited bandwidth.",
    },
  ],
},

it26: {
  objection: "I've got a line out the door already. Why would I need more customers?",
  responses: [
    {
      text: "That's great now — but what happens in your slow season or when things get more competitive? Delivery is a real safety net that protects revenue through the quieter months and the dips.",
      correct: false,
      feedback: "Implying his business might decline feels pessimistic and borderline insulting.",
    },
    {
      text: "More customers means more money — why would you ever turn that down when the infrastructure is already there and it doesn't require much extra effort from your team to manage?",
      correct: false,
      feedback: "Oversimplifying ignores legitimate capacity concerns and comes across as tone-deaf.",
    },
    {
      text: "Delivery customers don't take tables or need servers — they're pure margin. What do your Tuesday afternoons look like? That's usually where the opportunity is for a place like yours.",
      correct: true,
      technique: 'Curiosity Hook',
      feedback: "You compliment his success, reframe delivery as non-competing revenue, and probe for slow periods where delivery could fill gaps.",
    },
    {
      text: "Sounds like things are going really well. I'll check back in a few months when things might have shifted and you have more bandwidth to think seriously about it.",
      correct: false,
      feedback: "Accepting the brush-off without exploring the opportunity misses the fact that high demand is actually the ideal time to add delivery.",
    },
  ],
},

it27: {
  objection: "Last delivery company said they'd bring in 50 orders a week. We got maybe 5.",
  responses: [
    {
      text: "Uber Eats has a significantly larger customer base so you'd see much higher volume. It's honestly not a comparable situation at all given the difference in scale and active users in your area.",
      correct: false,
      feedback: "Making big promises right after he told you the last company overpromised is tone-deaf.",
    },
    {
      text: "Which platform was that? A lot of the smaller ones really struggle with order volume in neighborhoods like this — it might have been a platform problem rather than a delivery problem.",
      correct: false,
      feedback: "Bashing competitors doesn't address his core concern, he's worried about being lied to again.",
    },
    {
      text: "I can guarantee you'll do way better than 5 orders a week. Our platform is on a completely different level in terms of reach and active users right in your neighborhood.",
      correct: false,
      feedback: "Making guarantees after he was burned by guarantees destroys any chance of trust.",
    },
    {
      text: "I won't give you a made-up number. I'll show you actual order volume from restaurants like yours in this zip code — real data you can verify yourself. Fair enough to take a look?",
      correct: true,
      technique: 'Immediate Credibility',
      feedback: "You call out the bad practice, distance yourself from it by offering verified local data instead of projections, and ask for permission to continue.",
    },
  ],
},

it28: {
  objection: "My food doesn't travel well. Pasta gets soggy, pizza gets cold.",
  responses: [
    {
      text: "Our drivers move fast — food usually arrives in pretty good condition even for pasta dishes because of how quickly handoffs happen from pickup all the way through to delivery.",
      correct: false,
      feedback: "This doesn't address the fundamental issue of certain dishes not traveling well regardless of speed.",
    },
    {
      text: "You could look into better insulated packaging — it makes a significant difference and solves most of the travel issues for hot dishes including pasta. It's a worthwhile investment for the return you'd see.",
      correct: false,
      feedback: "Asking him to spend more money to solve a problem he didn't ask to have feels like adding cost, not value.",
    },
    {
      text: "Our best Italian partners built a delivery-only menu — baked ziti, arancini, paninis, things that hold up perfectly. Want to see what they chose and how it's actually performing for them?",
      correct: true,
      technique: 'Specificity Hook',
      feedback: "You validate his quality concern, offer concrete menu examples that address the travel problem, and propose showing real results.",
    },
    {
      text: "Plenty of Italian restaurants do delivery successfully — pasta, pizza, all of it. It holds up much better than most people expect when you use the right packaging and prep techniques.",
      correct: false,
      feedback: "Dismissing his specific concern with a generic claim doesn't respect his culinary standards.",
    },
  ],
},

it29: {
  objection: "My wife handles the business side. She's not here right now.",
  responses: [
    {
      text: "Could you give me her direct number so I can reach out without putting you in the middle of it — save you the trouble of having to relay the whole conversation to her later?",
      correct: false,
      feedback: "Asking for a spouse's phone number from someone you just met feels intrusive.",
    },
    {
      text: "No problem at all. I'll leave my card here and she can give me a call whenever she has a free moment — is there a best time of day to try her if I follow up?",
      correct: false,
      feedback: "A card with no context or built curiosity won't motivate a callback.",
    },
    {
      text: "I could walk you through the main points and you could share the highlights with her — that way she has the context before I reach out and it makes the conversation more efficient for everyone.",
      correct: false,
      feedback: "This undermines their partnership dynamic and could create friction in their relationship.",
    },
    {
      text: "Smart setup. When does she come in? I'd rather catch you both together.",
      correct: true,
      technique: 'Gatekeeper Navigation',
      feedback: "You respect the decision-making structure, gauge his personal interest, and get timing intel, all in one natural response.",
    },
  ],
},

it30: {
  objection: "We tried online ordering during COVID and shut it off. Too many problems.",
  responses: [
    {
      text: "COVID was a mess for everyone in this industry. The technology and infrastructure have improved significantly since then — it's honestly a very different and much smoother experience now than it was.",
      correct: false,
      feedback: "Vague claims about improvement don't address his specific bad experience.",
    },
    {
      text: "What was the biggest headache — incorrect orders, late deliveries, customer complaints? I want to know if your specific problem has actually been fixed before I say anything else about what we offer.",
      correct: true,
      technique: 'Curiosity Hook',
      feedback: "You validate the COVID chaos, acknowledge it was different, and drill into the specific problem, which you can then address if it's been solved.",
    },
    {
      text: "That's totally understandable. Things have really settled down since those days — it might be worth giving it another try now that the platforms have fully matured and the dust has cleared.",
      correct: false,
      feedback: "'Give it another try' without addressing what went wrong sounds like you want him to repeat a mistake.",
    },
    {
      text: "What platform were you using back then? A lot of the issues during COVID were specific to platforms that weren't equipped to scale rapidly — that might have been the root cause rather than delivery itself.",
      correct: false,
      feedback: "Blaming the platform without understanding his specific issues feels deflective.",
    },
  ],
},

it31: {
  objection: "I don't even know what Uber Eats is, honestly. I don't use these apps.",
  responses: [
    {
      text: "Really? Uber Eats is one of the biggest apps in the world and has been for years. You should download it sometime — it would really help you understand the scale we're talking about here.",
      correct: false,
      feedback: "Making him feel out of touch is the opposite of building rapport.",
    },
    {
      text: "It's a food delivery platform. Customers search for restaurants nearby, order from your menu, and a driver brings it straight to their door. It's become the main way a lot of people decide where to order dinner.",
      correct: false,
      feedback: "While accurate, this bare-bones explanation doesn't create any excitement or show specific value.",
    },
    {
      text: "You don't need to use it yourself at all — I'll handle the full setup from start to finish. Your team won't need to learn anything complicated. You just focus on the food and orders come in on a separate tablet.",
      correct: false,
      feedback: "Being dismissive of his knowledge gap and promising to 'handle everything' sounds condescending.",
    },
    {
      text: "About 2,000 people nearby open delivery apps every evening looking for dinner. Your restaurant could show up for all of them. Want to see exactly what a customer sees when they search Italian food nearby?",
      correct: true,
      technique: '30-Second Pitch',
      feedback: "You normalize his unfamiliarity, translate the app into simple terms he can relate to, use a local number, and offer a visual demo.",
    },
  ],
},

it32: {
  objection: "I just signed a lease and I'm barely keeping the lights on. I can't add any expenses right now.",
  responses: [
    {
      text: "That's exactly why you need us — to bring in more revenue and get those lights paid for much faster. This is actually the perfect moment to add a new income stream.",
      correct: false,
      feedback: "Telling someone who's financially stressed that they need to spend more feels tone-deaf.",
    },
    {
      text: "No upfront cost at all — commission only when orders actually come in. Want to see what other new restaurants typically earn in their first month on the platform?",
      correct: true,
      technique: 'Immediate Credibility',
      feedback: "You empathize with his financial stress, clarify there's no upfront cost, and offer relevant first-month data for new restaurants.",
    },
    {
      text: "I completely understand the pressure of a new lease — that's a really stressful situation. When things stabilize financially, just give us a call and we'll get you set up at whatever point feels right.",
      correct: false,
      feedback: "A new restaurant is actually the ideal time to add delivery, waiting means missing early momentum.",
    },
    {
      text: "We actually have promotional options specifically designed for new restaurants that might help bridge the gap while you're getting your footing. It might be worth at least having that conversation to see what's available.",
      correct: false,
      feedback: "Suggesting financing to someone who just said they can barely keep the lights on adds pressure, not value.",
    },
  ],
},

it33: {
  objection: "I want to support local businesses, not big tech companies.",
  responses: [
    {
      text: "We're really not that different from a local service provider — we just operate at a larger scale in order to serve more restaurants and customers across the whole community.",
      correct: false,
      feedback: "Comparing yourself to a local business when he just criticized big tech isn't credible.",
    },
    {
      text: "Uber Eats is how local spots beat the chains. Your money, not a franchiser's.",
      correct: true,
      technique: 'Specificity Hook',
      feedback: "You honor his values, reframe the platform as a tool that helps local businesses compete against chains, and redirect the 'big tech' concern.",
    },
    {
      text: "I understand the sentiment completely. But in business you really do have to use the best tools available if you want to grow and stay competitive in the current environment.",
      correct: false,
      feedback: "Dismissing his values as sentiment rather than a valid business philosophy is condescending.",
    },
    {
      text: "A lot of local business owners actually use and really like Uber Eats. It's not really a 'big tech vs. small business' thing in the way you might be picturing it from the outside.",
      correct: false,
      feedback: "This doesn't address his concern, it just deflects it.",
    },
  ],
},

it34: {
  objection: "I saw on the news that restaurants are suing Uber Eats over fees.",
  responses: [
    {
      text: "That's actually old news at this point. Things have genuinely changed a lot since those stories originally ran and the situation today is very different from what was covered back then.",
      correct: false,
      feedback: "Dismissing something he saw on the news as 'old' feels evasive.",
    },
    {
      text: "Those lawsuits came from a small number of restaurants in specific markets. The vast majority of our partners are genuinely happy with the fee structure, which has improved significantly since then.",
      correct: false,
      feedback: "Minimizing legitimate legal disputes sounds like corporate spin.",
    },
    {
      text: "I'm not the right person to speak to specific legal matters — that's genuinely above my level. What I can tell you is what the current fee structure looks like and exactly what you'd keep on every order.",
      correct: false,
      feedback: "Dodging the question entirely destroys trust and makes it seem like there's something to hide.",
    },
    {
      text: "Those were COVID-era fee cap disputes — a specific situation that's over. The fee structure today is fully transparent. Want to see exactly what you'd pay per order and what you'd actually keep?",
      correct: true,
      technique: 'Immediate Credibility',
      feedback: "You acknowledge the news honestly, provide context, and offer to show him the specific numbers, transparency is the antidote to bad press.",
    },
  ],
},

it35: {
  objection: "Every dollar I give you is a dollar less for my staff.",
  responses: [
    {
      text: "Actually, restaurants on our platform often end up hiring more staff because of increased volume — so it tends to be a net positive for teams in the long run, not a negative.",
      correct: false,
      feedback: "Suggesting he'd need to hire more people when he's worried about paying current staff misreads the situation.",
    },
    {
      text: "Delivery customers are new — they weren't coming in anyway. That incremental revenue means more hours and more pay for your team, not less. Want to see the math on how that plays out?",
      correct: true,
      technique: 'Specificity Hook',
      feedback: "You honor his loyalty to his team and reframe delivery revenue as additive, creating more work and more income for staff, not less.",
    },
    {
      text: "The commission is technically a business expense — it comes out of delivery revenue, not your existing payroll. They're completely separate line items that don't actually affect each other in practice.",
      correct: false,
      feedback: "Being technically correct but emotionally dismissive doesn't address his real concern about his team.",
    },
    {
      text: "You could raise your delivery menu prices slightly to fully offset the commission. A lot of restaurants do that and most customers honestly don't notice the small difference when they're ordering on the app.",
      correct: false,
      feedback: "Suggesting price increases before he's even agreed to the concept adds complexity to an already uncertain decision.",
    },
  ],
},

it36: {
  objection: "I need to focus on my dine-in customers. They're my priority.",
  responses: [
    {
      text: "What if delivery actually brought you more dine-in customers? People try you on the app first, then come in for the full experience. Want to see the data on how often that happens?",
      correct: true,
      technique: 'Curiosity Hook',
      feedback: "You validate his priority and introduce the concept of delivery as a customer acquisition channel for dine-in, flipping his objection into a benefit.",
    },
    {
      text: "You can absolutely do both. Delivery doesn't take away from dine-in at all when it's managed correctly with the right settings and a bit of upfront planning on your end.",
      correct: false,
      feedback: "A flat assertion without evidence doesn't address his real concern about splitting his attention.",
    },
    {
      text: "Dine-in is great, but you're leaving a real revenue stream on the table for the people who want your food but simply can't make it in for the experience on any given evening.",
      correct: false,
      feedback: "Telling him he's limiting himself when he's stated a clear priority feels like you're not listening.",
    },
    {
      text: "Your dine-in customers probably order delivery from other restaurants on nights they don't come see you. They might as well be ordering from you on those nights instead of going to a competitor.",
      correct: false,
      feedback: "Suggesting his regulars switch to delivery, where he makes less, isn't a compelling argument.",
    },
  ],
},

it37: {
  objection: "I'm 65 years old. I'm not learning new technology.",
  responses: [
    {
      text: "You don't learn a thing. Orders print like a kitchen ticket. Want to see?",
      correct: true,
      technique: 'Empathy Opener',
      feedback: "You remove the tech barrier by showing that the workflow is as simple as reading a kitchen ticket, something he's done for decades.",
    },
    {
      text: "It's actually really easy once you see it. Even people who aren't tech-savvy pick it up within a day or two — I've seen it happen with a lot of owners in similar situations to yours.",
      correct: false,
      feedback: "Saying 'even people who aren't tech-savvy' can feel patronizing to someone who just stated their limitation.",
    },
    {
      text: "Maybe one of your staff members or a family member could manage the tablet side of things. A lot of owners delegate that part to someone they trust in the restaurant.",
      correct: false,
      feedback: "Suggesting he needs family help undermines his independence and authority over his business.",
    },
    {
      text: "Age is just a number honestly. I've set up restaurants with owners even older than you who are now doing really well on the platform and genuinely love how it works for their business.",
      correct: false,
      feedback: "Commenting on his age and comparing him to others is dismissive and potentially offensive.",
    },
  ],
},

it38: {
  objection: "Your company keeps changing the rules. How do I know you won't raise the fees next year?",
  responses: [
    {
      text: "Your rates are locked into the contract — I can show you that clause right now. And you can pause orders at any time with no penalty if things ever stop working for you.",
      correct: true,
      technique: 'Immediate Credibility',
      feedback: "You point to a contractual guarantee, add the safety valve of pausing anytime, and ask if that addresses the concern, giving him concrete protections.",
    },
    {
      text: "I honestly can't predict the future with certainty, but our rates have been pretty stable for a good stretch of time now — which is a pretty positive sign of where things are heading.",
      correct: false,
      feedback: "This actually confirms his fear, you're admitting you can't guarantee rate stability.",
    },
    {
      text: "Uber Eats is deeply committed to being a fair and transparent partner to restaurant owners. It's genuinely core to how we operate at every level of the business across every market.",
      correct: false,
      feedback: "Corporate platitudes don't address a specific concern about fee increases.",
    },
    {
      text: "Every business adjusts its pricing over time — that's just a normal part of operating in any industry. It doesn't necessarily mean the changes will be dramatic or unfair to you as a partner.",
      correct: false,
      feedback: "Normalizing the very thing he's worried about makes him feel like fee hikes are inevitable.",
    },
  ],
},

it39: {
  objection: "I'm not giving you my Social Security number or bank info to sign up.",
  responses: [
    {
      text: "I completely understand the concern — but it's actually fully secure. We use the same bank-level encryption that major financial institutions rely on for all their online transactions and sensitive data.",
      correct: false,
      feedback: "Jumping to security features without addressing his emotional discomfort misses the point.",
    },
    {
      text: "That information is required for tax reporting and is mandated by law for all platform partners. Without it we're not able to process payouts or get the account fully set up on our end.",
      correct: false,
      feedback: "While true, citing legal requirements sounds threatening rather than reassuring.",
    },
    {
      text: "Fair. Want to look through the signup together right now? You'll see every single field and why it's there before entering anything. The bank info is just so we can deposit your earnings directly.",
      correct: true,
      technique: 'Immediate Credibility',
      feedback: "You validate the concern, offer transparency by previewing the process, and explain the purpose of each piece of information.",
    },
    {
      text: "Think about it this way — your landlord has your bank details, your suppliers do too, your utilities and insurance as well. This is really no different from those business relationships you already trust every day.",
      correct: false,
      feedback: "Comparing yourself to established relationships he already trusts doesn't help when he doesn't trust you yet.",
    },
  ],
},

it40: {
  objection: "I just lost my head chef. I can't even think about this right now.",
  responses: [
    {
      text: "Not going to pitch you today — genuinely. Can I check back in three weeks? And if I can connect you with any owners who might know someone available right now, I'm happy to make that introduction.",
      correct: true,
      technique: 'Empathy Opener',
      feedback: "You acknowledge the real crisis, defer the pitch appropriately, set a specific follow-up timeline, and offer genuine non-sales help, building trust for later.",
    },
    {
      text: "That's really tough. But honestly, delivery could help offset the revenue loss while you're short-staffed. It might even buy you some breathing room while you sort out the kitchen situation.",
      correct: false,
      feedback: "Trying to sell during a genuine crisis feels exploitative.",
    },
    {
      text: "I completely understand. Take all the time you need — just give me a call when things have settled down and you're in a better headspace to think about it properly.",
      correct: false,
      feedback: "No follow-up date means this lead dies.",
    },
    {
      text: "Sorry to hear that — that's a really difficult situation to navigate. Are you still planning to stay open for your regular service in the meantime while you search for someone new?",
      correct: false,
      feedback: "Asking if he's still open feels insensitive and self-serving.",
    },
  ],
},

it41: {
  objection: "I already told your colleague I'd think about it. That was two months ago.",
  responses: [
    {
      text: "Did you decide no, or did it fall off your plate? Either is fine.",
      correct: true,
      technique: 'Permission to Continue',
      feedback: "You acknowledge the time gap, ask directly without pressure, and give him permission to say no, which paradoxically often leads to re-engagement.",
    },
    {
      text: "Great — so you're already familiar with what we offer. Are you ready to move forward and get the signup process started today so we can get you live before the busy season hits?",
      correct: false,
      feedback: "Assuming familiarity and pushing to close after a two-month gap is presumptuous.",
    },
    {
      text: "My colleague should have followed up with you much sooner and I apologize for that gap on our end. Let me get you fully up to speed and pick up right where that conversation left off.",
      correct: false,
      feedback: "Criticizing your colleague doesn't build trust in your organization.",
    },
    {
      text: "A lot has actually changed in the past two months — new features, updated pricing, and some promotions that might really change the picture for you and make this a much more compelling proposition.",
      correct: false,
      feedback: "Jumping to new features without first understanding where he landed on his decision is tone-deaf.",
    },
  ],
},

it42: {
  objection: "You know what, I'm actually about to sell this place. So it doesn't make sense.",
  responses: [
    {
      text: "Delivery revenue on the books raises your valuation and buyers will pay more for a restaurant with diversified income streams. Worth a quick thought before you finalize the listing price?",
      correct: true,
      technique: 'Curiosity Hook',
      feedback: "You acknowledge the life change, then reframe delivery as something that increases his sale price, turning a deal-killer into a compelling reason to sign up.",
    },
    {
      text: "Ah, that's too bad to hear. Well, good luck with the sale — I genuinely hope the process goes smoothly and you get a great outcome after everything you've put into this place.",
      correct: false,
      feedback: "You miss an opportunity to show how delivery could increase business value before a sale.",
    },
    {
      text: "Who's buying the place? Maybe I should actually be talking to them about getting set up on the platform from day one once they take over and hit the ground running.",
      correct: false,
      feedback: "Immediately trying to go around him to the buyer is disrespectful.",
    },
    {
      text: "All the more reason to add delivery before you list. A restaurant with an active delivery channel and documented order history will command a significantly better valuation multiple from serious buyers.",
      correct: false,
      feedback: "The idea is right but the delivery is too blunt and salesy for someone going through a major life transition.",
    },
  ],
},

it43: {
  objection: "I just don't like the idea of strangers picking up my food. What if they mess it up?",
  responses: [
    {
      text: "Our drivers are professional and rated after every single delivery. Ones with low ratings get removed from the platform quickly to protect the quality experience for all our restaurant partners.",
      correct: false,
      feedback: "Generic claims about driver quality don't address his specific worry about food handling.",
    },
    {
      text: "At some point with delivery you do have to trust the system a bit. You can't control every step of the journey once the food leaves your kitchen — that's just part of the model.",
      correct: false,
      feedback: "Telling a restaurant owner to 'let go of control' is the wrong approach for someone who takes pride in every plate.",
    },
    {
      text: "That rarely happens in practice. The vast majority of deliveries go completely smoothly from pickup to drop-off without any issues at all for the food quality.",
      correct: false,
      feedback: "Minimizing his concern with 'rarely' doesn't reassure a quality-focused owner.",
    },
    {
      text: "Orders are sealed with tamper-evident packaging, tracked in real time, and if a driver messes up, the refund comes from us — not you. Want to see the packaging we use?",
      correct: true,
      technique: 'Immediate Credibility',
      feedback: "You validate his brand concern and lay out the specific protections, sealed packaging, tracking, Uber-funded refunds, and driver accountability.",
    },
  ],
},

it44: {
  objection: "Is this going to mess up my kitchen flow? We have a system that works.",
  responses: [
    {
      text: "It actually streamlines things for most kitchens. A lot of owners say it's much more manageable than they expected once they get into a rhythm with how the orders come through.",
      correct: false,
      feedback: "Vague reassurance doesn't address his specific concern about disrupting an existing system.",
    },
    {
      text: "There might be a small adjustment period at first, but the revenue it generates really does make the temporary disruption worth working through with your team in the early weeks.",
      correct: false,
      feedback: "Admitting workflow disruption and dismissing it with 'it's worth it' won't work for someone who values their system.",
    },
    {
      text: "Separate tablet, your own prep times built in, and a one-tap pause during the rush — it fits entirely around your existing system. Want to see exactly how it works on the device?",
      correct: true,
      technique: 'Immediate Credibility',
      feedback: "You show exactly how delivery integrates without disrupting his workflow, separate device, custom prep times, and a pause button during rushes.",
    },
    {
      text: "The orders are simple and your team will adapt to the new flow quickly. Within a week or two it typically just becomes a seamless part of the routine without anyone even thinking about it.",
      correct: false,
      feedback: "Assuming his team will adapt without explaining how shows you don't understand kitchen operations.",
    },
  ],
},

it45: {
  objection: "I went to your website and the signup process looked complicated. I gave up halfway through.",
  responses: [
    {
      text: "Exactly why I'm here. You name the dishes, I handle the rest. When's good?",
      correct: true,
      technique: 'Empathy Opener',
      feedback: "You validate his frustration, position your in-person visit as the solution, and offer to do the heavy lifting, removing the exact barrier that stopped him.",
    },
    {
      text: "The signup process is actually pretty simple once you get the hang of it. You might have gotten tripped up on one particular step that tends to confuse people the first time through.",
      correct: false,
      feedback: "Suggesting the process is simple when he just told you it wasn't invalidates his experience.",
    },
    {
      text: "We've actually updated the website recently to make it much cleaner and more intuitive. It's definitely worth giving it another shot — the experience is a lot better now than what you saw before.",
      correct: false,
      feedback: "Sending him back to the thing that frustrated him is a missed opportunity to help directly.",
    },
    {
      text: "I can put together a detailed step-by-step guide with screenshots that walks you through each part of the process. A lot of owners find that really clears up the confusion and makes it much more approachable.",
      correct: false,
      feedback: "More documentation doesn't solve the problem, he needs hands-on help, not more reading.",
    },
  ],
},

it46: {
  objection: "My nephew says these apps steal customer data. I don't want my customers' info going to some big company.",
  responses: [
    {
      text: "That's just not how it works at all. We absolutely do not steal customer data — that's a piece of misinformation that gets spread around about platforms like ours pretty regularly.",
      correct: false,
      feedback: "A flat denial without explanation sounds defensive and doesn't educate him on how data actually flows.",
    },
    {
      text: "You don't share your existing customer data with us at all. We bring you brand new customers — people who've never been in before. Your regulars' information stays entirely with you.",
      correct: true,
      technique: 'Immediate Credibility',
      feedback: "You respect the nephew's influence, directly address the data concern with facts, and clarify the separation between his existing customers and new app customers.",
    },
    {
      text: "With all due respect, your nephew might not fully understand how the platform actually works on a technical level from the restaurant partner's perspective — it's more nuanced than it looks.",
      correct: false,
      feedback: "Dismissing a trusted family member's opinion creates an adversarial dynamic.",
    },
    {
      text: "Data privacy is extremely important to us and we take it very seriously. We're fully compliant with all applicable privacy regulations and laws at both the state and federal level in every market.",
      correct: false,
      feedback: "Corporate compliance language doesn't address his specific concern in relatable terms.",
    },
  ],
},

it47: {
  objection: "I see you walking up and down this block. How many restaurants have you been rejected by today?",
  responses: [
    {
      text: "Ha, a few. But your place keeps coming up as somewhere people nearby want to order from and can't find on any app. Got sixty seconds to hear why that's actually worth knowing?",
      correct: true,
      technique: 'Pattern Interrupt',
      feedback: "You're honest and self-deprecating, then pivot to a compliment and a specific insight about unmet demand for his restaurant, making him curious despite himself.",
    },
    {
      text: "I've actually had a really productive morning — signed three restaurants on this block already. Things are going great, which is exactly why I didn't want to miss stopping in here.",
      correct: false,
      feedback: "Bragging about signing competitors makes you look like you're playing restaurants against each other.",
    },
    {
      text: "Not many rejections at all, actually. Most owners are pretty interested once they hear what we're offering and get a chance to see what the real numbers look like for their specific area.",
      correct: false,
      feedback: "Being defensive about rejections instead of owning it with humor misses the rapport opportunity.",
    },
    {
      text: "I wouldn't call them rejections — more like 'not yet.' A lot of them actually circle back and sign up within a few weeks once they've had time to think it over properly on their own.",
      correct: false,
      feedback: "Reframing his joke with corporate optimism kills the human moment.",
    },
  ],
},

it48: {
  objection: "Fine. You've got two minutes. Impress me.",
  responses: [
    {
      text: "4,300 active users within two miles. They search Italian food, your competitors show up, you don't. Restaurants your size here do 40–60 orders a week at $32 average — that's $5K to $7.5K a month. Worth a longer conversation?",
      correct: true,
      technique: '30-Second Pitch',
      feedback: "You fill the two minutes with hyperlocal data, specific numbers, a competitive gap, and a clear revenue projection, ending with a close for a longer meeting.",
    },
    {
      text: "Great! Uber Eats connects restaurants with customers who want delivery. We have a huge active user base, excellent in-app marketing tools, a dedicated support team, and flexible commission structures for every size of independent restaurant.",
      correct: false,
      feedback: "Feature-listing wastes his two minutes without giving him any specific reason to care about his business.",
    },
    {
      text: "Honestly, two minutes really isn't enough time to do this properly. Can we schedule a sit-down so I can walk you through everything the right way, with time for questions and a real look at the numbers?",
      correct: false,
      feedback: "He's giving you a chance right now, asking for more time signals you can't deliver value concisely.",
    },
    {
      text: "I'd honestly rather not rush through this. Your business deserves more than a two-minute pitch — I want to make sure you get the full picture with enough time to really dig into the numbers.",
      correct: false,
      feedback: "While it sounds respectful, you're rejecting the opening he just gave you.",
    },
  ],
},

it49: {
  objection: "Let me guess, you're going to tell me how much money I'm losing by not being on your app.",
  responses: [
    {
      text: "Well — yes, actually. But the numbers are pretty specific to your restaurant, not generic. Let me share them in a way that's genuinely useful rather than just throwing figures out there that may or may not apply.",
      correct: false,
      feedback: "Confirming his cynical prediction makes you predictable and easy to dismiss.",
    },
    {
      text: "Not exactly. I'm more focused on the real opportunity here than framing it as loss. It's honestly a more useful way of looking at the exact same information from a different angle.",
      correct: false,
      feedback: "Reframing 'loss' as 'opportunity' is semantics, he'll see through it immediately.",
    },
    {
      text: "Nope. I looked up who shows up when people search Italian food nearby. There's a gap.",
      correct: true,
      technique: 'Pattern Interrupt',
      feedback: "You break his expectation by not doing what he predicted, show respect for his knowledge, and tease a specific competitive insight.",
    },
    {
      text: "I wouldn't put it quite that way — but there is real revenue potential here that I think you'd want to at least know about before deciding once and for all whether this is the right move.",
      correct: false,
      feedback: "Softening the language while still saying the same thing doesn't break his script.",
    },
  ],
},

it50: {
  objection: "You seem like a nice kid, but I've been doing this since before you were born. I don't need help.",
  responses: [
    {
      text: "I may be young, but I know this market well. Let me show you the data and you can decide for yourself whether it's actually relevant to what you're building here on this block.",
      correct: false,
      feedback: "Getting defensive about your age creates a power struggle instead of building rapport.",
    },
    {
      text: "Experience is invaluable. But even the most successful restaurants are finding they need to adapt to where their customers are spending their time and money in the current market.",
      correct: false,
      feedback: "Telling a veteran he needs to adapt is condescending and triggers defensiveness.",
    },
    {
      text: "I completely respect your experience and I'm not trying to change a thing about how you run this place. I'm just offering a tool that some other restaurants nearby are finding genuinely useful.",
      correct: false,
      feedback: "This is polite but too vague, it doesn't give him a specific reason to engage further.",
    },
    {
      text: "I wouldn't dare tell you how to run a restaurant. But about $15,000 a month in Italian delivery orders is going to your competitors right now. Just thought you should know that number.",
      correct: true,
      technique: 'Specificity Hook',
      feedback: "You respect his expertise entirely, limit your claim to what you actually know (delivery data), share a specific competitive number, and leave the decision with him, preserving his authority.",
    },
  ],
},
