// ═══════════════════════════════════════════════════════════════════════
// DISTRICT 1 — Little Italy — "The Opener" (it01–it50)
// ═══════════════════════════════════════════════════════════════════════

it01: {
  objection: "I'm in the middle of lunch service — come back some other time.",
  responses: [
    {
      text: "Got it — restaurants your size here add $5K a month in delivery revenue. Back at 3pm?",
      correct: true,
      technique: 'Empathy Opener',
      feedback: "You acknowledge the rush, drop a specific number to create curiosity, and ask for a concrete micro-commitment later the same day.",
    },
    {
      text: "I totally understand the timing is bad. If you have even 90 seconds, I can walk you through the three main things we do differently from other platforms — it's actually really simple once you see the dashboard and how the order flow works for a kitchen like yours.",
      correct: false,
      feedback: "Dismissing his stated time constraint feels pushy and disrespectful of his business reality.",
    },
    {
      text: "No problem at all — I respect the rush. Here's my card with my direct number. I'll give you a call tomorrow morning before service starts, and we can find a time that actually works for you to sit down properly.",
      correct: false,
      feedback: "This is polite but surrenders the moment entirely — you leave with nothing concrete and no reason for Marco to remember you.",
    },
    {
      text: "Of course. Here's my card — call me whenever it's convenient for you.",
      correct: false,
      feedback: "Leaving a card with no hook or follow-up plan means you'll never hear from him.",
    },
  ],
},

it02: {
  objection: "Who let you in? We're not taking meetings with vendors today.",
  responses: [
    {
      text: "I apologize for barging in — I'll head out and come back when you have more availability.",
      correct: false,
      feedback: "You've already disrupted his day — leaving empty-handed wastes that disruption without gaining anything.",
    },
    {
      text: "Not here to sell — just dropping off one page of delivery data I pulled on this neighborhood. Order volumes, top cuisines, gaps in coverage. Can I leave it with you?",
      correct: true,
      technique: 'Pattern Interrupt',
      feedback: "By reframing yourself as someone delivering value rather than asking for something, you break the vendor-rejection script and create curiosity about the data.",
    },
    {
      text: "Your hostess said it was okay for me to come in and take a look around — I only need five minutes of your time to explain what we offer and why it might be relevant to a restaurant like yours.",
      correct: false,
      feedback: "Throwing the hostess under the bus creates conflict and makes you look dishonest.",
    },
    {
      text: "I'm from Uber Eats — we're actively signing restaurants in this neighborhood right now and I wanted to make sure you had a chance to hear about it before we move on to the next block.",
      correct: false,
      feedback: "Leading with your company name and urgency triggers the exact vendor-rejection reflex he just expressed.",
    },
  ],
},

it03: {
  objection: "I've heard this pitch before. You all sound the same.",
  responses: [
    {
      text: "We're genuinely different from other platforms — let me take just a few minutes to show you our latest features and commission structure. Once you see the full picture I think you'll understand why so many restaurants in this area have switched to us.",
      correct: false,
      feedback: "Every salesperson says 'we're different' — this confirms his belief that you all sound the same.",
    },
    {
      text: "You're probably right. What's the one thing about delivery that frustrates you most?",
      correct: true,
      technique: 'Curiosity Hook',
      feedback: "Agreeing with his cynicism disarms him, and pivoting to a question about his pain makes the conversation about him instead of you.",
    },
    {
      text: "Fair enough — I'll check back another day when you're more open to hearing it.",
      correct: false,
      feedback: "Walking away without any engagement wastes the opportunity and signals you have nothing unique to offer.",
    },
    {
      text: "I get that a lot, honestly. But our commission rates have dropped significantly this quarter and we're now the most competitive in the market — that's a pretty big difference from what you've heard before, and I think it's worth at least a quick look.",
      correct: false,
      feedback: "Jumping straight to commission rates without understanding his concerns feels tone-deaf to what he just said.",
    },
  ],
},

it04: {
  objection: "I'm not the owner. You'd have to talk to my father, but he doesn't take meetings.",
  responses: [
    {
      text: "Could you give me his phone number so I can reach out and set something up with him directly?",
      correct: false,
      feedback: "Asking for personal contact info from a family member feels intrusive and bypasses the trust you haven't built yet.",
    },
    {
      text: "Maybe you can make the decision here? You seem like you're deeply involved in the day-to-day — are you part of the ownership side of things at all?",
      correct: false,
      feedback: "This can feel dismissive of the family hierarchy and may offend if the son doesn't have decision-making authority.",
    },
    {
      text: "That's too bad. Here's my card — pass it along when you get a chance and tell him it's worth a quick read.",
      correct: false,
      feedback: "Cards passed through a gatekeeper rarely reach the decision-maker with any context or urgency.",
    },
    {
      text: "Does he come in early for prep? Even two minutes would do it.",
      correct: true,
      technique: 'Gatekeeper Navigation',
      feedback: "You respect the father's time, reframe from 'meeting' to 'quick conversation,' and ask for intel on his schedule — turning the gatekeeper into an ally.",
    },
  ],
},

it05: {
  objection: "What's this about? I have 30 seconds.",
  responses: [
    {
      text: "Three Italian restaurants within a mile joined last quarter — averaged $6,200 in new monthly revenue. Worth ten minutes this week?",
      correct: true,
      technique: '30-Second Pitch',
      feedback: "You respect the time constraint, lead with hyperlocal social proof and a specific dollar figure, and close with a concrete ask for a follow-up meeting.",
    },
    {
      text: "I'm with Uber Eats and we help restaurants grow their delivery revenue — do you have time to set up a meeting sometime this week so I can walk you through what that looks like?",
      correct: false,
      feedback: "Too generic — you've wasted his 30 seconds without giving him a reason to care about your specific value.",
    },
    {
      text: "Honestly, thirty seconds isn't really enough time to explain what we do properly. Can we find a better time — maybe tomorrow morning before the lunch rush starts?",
      correct: false,
      feedback: "Rejecting his time frame signals that you can't adapt to his needs — a bad first impression.",
    },
    {
      text: "We're Uber Eats. We partner with restaurants to increase delivery revenue through our platform — we've got a huge customer base, strong marketing tools, dedicated restaurant support, and flexible commission structures that work for businesses of all sizes including small independents like yours.",
      correct: false,
      feedback: "This is a feature dump that ignores his time constraint and gives no specific reason for him to engage further.",
    },
  ],
},

it06: {
  objection: "We're not interested in anything you're selling.",
  responses: [
    {
      text: "I understand — we hear that a lot. But once restaurant owners actually see the revenue numbers from nearby restaurants, most of them become pretty interested very quickly. It only takes a minute of your time.",
      correct: false,
      feedback: "Telling someone they'll change their mind is condescending and triggers defensiveness.",
    },
    {
      text: "Fair enough. Sorry to bother you.",
      correct: false,
      feedback: "You've accepted a reflexive no without even attempting to create curiosity — every cold call gets an initial no.",
    },
    {
      text: "You have a 4.7 with 800 reviews. Is any of that delivery demand going to your competitors right now?",
      correct: true,
      technique: 'Specificity Hook',
      feedback: "You defuse the rejection, demonstrate you did homework on his business, and plant a competitive fear question that's hard to ignore.",
    },
    {
      text: "That's completely fine — can I at least leave some materials for you to look at when you have a free moment? There's no obligation at all.",
      correct: false,
      feedback: "Brochures without context or a hook end up in the trash.",
    },
  ],
},

it07: {
  objection: "Can you just leave your card? I'll call if I'm interested.",
  responses: [
    {
      text: "Sure thing — hope to hear from you!",
      correct: false,
      feedback: "You're relying entirely on the prospect to take action — which almost never happens with a cold drop-in.",
    },
    {
      text: "I'd actually rather not just leave a card — if we could talk for even two minutes right now, I know I can share something that would be genuinely worth your time to hear.",
      correct: false,
      feedback: "Refusing his request makes you seem pushy and disrespectful of his boundaries.",
    },
    {
      text: "Of course. Though honestly, most people don't end up calling back — I'd hate for you to miss out on this. Could I get your email instead so I can send something directly to you?",
      correct: false,
      feedback: "Telling him most people don't call back is passive-aggressive and creates an awkward dynamic.",
    },
    {
      text: "Of course. I'll jot on the back: restaurants your size in this zip code are seeing 35–50 new delivery orders a week, averaging $28 each. Something worth remembering when you find it later. What's the best day for me to follow up?",
      correct: true,
      technique: 'Immediate Credibility',
      feedback: "You comply with his request, add a memorable data point to the card, and secure a follow-up day — turning a brush-off into a warm next step.",
    },
  ],
},

it08: {
  objection: "How did you even get my number?",
  responses: [
    {
      text: "You're one of the top-rated Italian spots in this area — your reviews are what put you on my list. I specifically wanted to reach you. One quick stat about delivery in your neighborhood?",
      correct: true,
      technique: 'Immediate Credibility',
      feedback: "You answer transparently, turn the question into a compliment about his restaurant's reputation, and pivot to a value-driven ask.",
    },
    {
      text: "It's listed on your Google Business page and your website — both publicly available, so I hope that's okay.",
      correct: false,
      feedback: "While factual, this is defensive and doesn't move the conversation forward — you've answered his question but created no interest.",
    },
    {
      text: "We have a database of restaurants in the area that we use for outreach — but honestly, that's not really what matters here. What matters is what I can potentially do for your revenue this quarter.",
      correct: false,
      feedback: "Dismissing his concern ('that's not important') feels evasive and starts the relationship on a bad note.",
    },
    {
      text: "I apologize if this feels intrusive — I can absolutely take you off our outreach list and make sure no one from our team contacts you again if you would prefer that.",
      correct: false,
      feedback: "Over-apologizing and offering to remove him surrenders the conversation before it starts.",
    },
  ],
},

it09: {
  objection: "I'm in the middle of prep. Can you call me tomorrow?",
  responses: [
    {
      text: "Absolutely. What time — I don't want to catch you at a bad moment again.",
      correct: true,
      technique: 'Timing Request',
      feedback: "You respect his workflow, show you understand restaurant rhythms, and lock in a specific callback time rather than a vague 'tomorrow.'",
    },
    {
      text: "This will literally take one minute — I promise it's absolutely worth interrupting for, and then I'll let you get back to it.",
      correct: false,
      feedback: "Ignoring his request to call tomorrow shows you prioritize your agenda over his.",
    },
    {
      text: "Sure — I'll try you tomorrow. Have a great service.",
      correct: false,
      feedback: "Without pinning down a time, 'tomorrow' becomes a missed call and a dead lead.",
    },
    {
      text: "Totally get it — I'll just send you a quick email instead so you can read it on your own time whenever it's convenient. What's the best address to reach you at?",
      correct: false,
      feedback: "Pivoting to email when he's busy with his hands in dough feels like you're sneaking in through another door.",
    },
  ],
},

it10: {
  objection: "Look, every week someone from a delivery app walks in here. I'm over it.",
  responses: [
    {
      text: "I understand your frustration — but Uber Eats is genuinely different from other platforms in some pretty meaningful ways. Give me two minutes and I'll explain exactly what sets us apart from everything you've already heard.",
      correct: false,
      feedback: "Every rep from every platform says they're different — you're proving his point.",
    },
    {
      text: "Sorry to hear that. I'll be quick then — we have a new promotion running for Italian restaurants this month that I really didn't want you to miss out on.",
      correct: false,
      feedback: "Acknowledging his frustration and then immediately pitching shows you didn't actually listen.",
    },
    {
      text: "I don't blame you — that's exhausting. I just came from Sal's down the street, and he mentioned your carbonara is the best on the block. I'm genuinely curious: do you get much takeout demand for it, or is it mostly dine-in?",
      correct: true,
      technique: 'Pattern Interrupt',
      feedback: "You break the sales script entirely by leading with a genuine compliment from a neighbor and asking a curiosity-driven question about his food — making this conversation feel different from the others.",
    },
    {
      text: "Would it help if I came back at a better time — maybe when the foot traffic is lighter and you have more headspace for it?",
      correct: false,
      feedback: "He's not complaining about timing — he's complaining about the constant pitches. Coming back later is still another pitch.",
    },
  ],
},

it11: {
  objection: "My son handles all the tech stuff. He's not here today.",
  responses: [
    {
      text: "Can I get his number? I'll reach him directly.",
      correct: false,
      feedback: "Bypassing the father to contact the son directly can feel disrespectful in a family business dynamic.",
    },
    {
      text: "How long have you been here? And when does your son come in?",
      correct: true,
      technique: 'Gatekeeper Navigation',
      feedback: "You validate the family structure, use the moment to build rapport with the owner directly, and set up a meeting that includes the decision-maker.",
    },
    {
      text: "No problem — I'll come back when he's around. What days does he usually work?",
      correct: false,
      feedback: "You miss the chance to build any rapport with the owner standing in front of you.",
    },
    {
      text: "This actually isn't really a tech conversation at all — it's more about growing your revenue and your customer base. You would honestly be exactly the right person to talk to about the business side of this.",
      correct: false,
      feedback: "Correcting him about who should handle this can feel dismissive of how he runs his business.",
    },
  ],
},

it12: {
  objection: "We've been here forty years without delivery. Why would I start now?",
  responses: [
    {
      text: "The market has really shifted over the past few years. If you're not offering delivery, you're leaving money on the table — money that's going to restaurants that are a lot less established than yours.",
      correct: false,
      feedback: "Telling a 40-year veteran that the market has changed feels condescending and dismissive of his success.",
    },
    {
      text: "Forty years is incredible — that says everything about your food and your reputation. The restaurants I talk to with that kind of history aren't adding delivery because they need it. They're doing it because customers are asking. Have you noticed regulars requesting delivery lately?",
      correct: true,
      technique: 'Empathy Opener',
      feedback: "You honor the legacy, reframe delivery as customer-driven rather than desperation, and ask a question that lets him discover the need himself.",
    },
    {
      text: "That's genuinely impressive. But delivery is where the real industry growth is happening right now, and it might be worth considering even for a well-established place like yours.",
      correct: false,
      feedback: "Generic 'times are changing' language doesn't respect the specific context of his long-running business.",
    },
    {
      text: "I completely understand — not every restaurant needs delivery. Thanks so much for your time.",
      correct: false,
      feedback: "Conceding too quickly wastes an opportunity to help him see delivery as an extension of his success, not a departure from it.",
    },
  ],
},

it13: {
  objection: "I don't trust these apps. They take advantage of small businesses.",
  responses: [
    {
      text: "We're genuinely not like those other apps — Uber Eats has a dedicated team focused specifically on restaurant partner success, and we're constantly working to improve the relationship for small business owners.",
      correct: false,
      feedback: "Empty reassurance without evidence sounds like exactly the kind of thing someone taking advantage would say.",
    },
    {
      text: "I hear you — let me show you our commission structure right now. It's fully transparent, and I can walk you through exactly what you'd keep on every single order.",
      correct: false,
      feedback: "Jumping to commission details before understanding his specific concern misses the emotional root of his objection.",
    },
    {
      text: "Is that based on something you went through personally, or something you've heard? I want to address the real issue.",
      correct: true,
      technique: 'Curiosity Hook',
      feedback: "You validate his distrust, distinguish between personal experience and hearsay, and show you want to have a real conversation rather than bulldoze past his concern.",
    },
    {
      text: "That's a shame you feel that way. A lot of small restaurants in this neighborhood are actually doing really well with us — some of your neighbors are making significant money on the platform.",
      correct: false,
      feedback: "Dismissing his feelings with 'that's a shame' and generic social proof won't overcome deep-seated distrust.",
    },
  ],
},

it14: {
  objection: "You're the third person this month from Uber Eats. Don't you people talk to each other?",
  responses: [
    {
      text: "That's on us — I apologize. I'm flagging you in our system right now. What did the other reps say that didn't land?",
      correct: true,
      technique: 'Empathy Opener',
      feedback: "You own the mistake, offer a concrete fix, and turn the frustration into an opportunity to learn what didn't work — differentiating yourself from the previous reps.",
    },
    {
      text: "I'm sorry about the confusion — I can assure you I'm the right person to be speaking with this time. I have more authority on pricing and terms than whoever came by before, so this conversation will be different.",
      correct: false,
      feedback: "Claiming you're 'the right person' without evidence sounds like more of the same disorganization.",
    },
    {
      text: "I'm not sure what happened with those previous visits, but let me start completely fresh and give you a cleaner picture of what we actually offer and what makes sense for a restaurant like yours.",
      correct: false,
      feedback: "Ignoring the coordination failure and launching into a pitch shows you don't take his frustration seriously.",
    },
    {
      text: "That's really unusual — I'll definitely look into how that happened. But while I'm here, let me tell you about a new promotion we have running right now specifically for Italian restaurants in this area.",
      correct: false,
      feedback: "Brushing past the issue to pivot to promotions feels tone-deaf.",
    },
  ],
},

it15: {
  objection: "I already said no to the last guy. What part of 'no' don't you understand?",
  responses: [
    {
      text: "I apologize — I wasn't aware of the previous conversation. I'll leave you alone.",
      correct: false,
      feedback: "Full retreat means you lose any chance to salvage the relationship or understand the real objection.",
    },
    {
      text: "The last rep might not have had the full picture — we've made some real changes recently, and if I could just take five minutes, I think you'd find it's worth reconsidering.",
      correct: false,
      feedback: "Undermining a colleague to justify re-pitching feels manipulative.",
    },
    {
      text: "You're right to be frustrated, and I respect that. I'm not here to pitch — I just want to understand what turned you off. Was it the commission, the concept, or something about the last rep? Whatever you tell me, I'll make sure we stop reaching out if that's what you want.",
      correct: true,
      technique: 'Permission to Continue',
      feedback: "You give him full control, lower the stakes by making it about feedback rather than a sale, and offer a genuine exit — which paradoxically makes him more likely to engage.",
    },
    {
      text: "I understand completely. But just so you know, we now have new lower commission rates than before — that might change your perspective on it.",
      correct: false,
      feedback: "Leading with 'but' after someone says no signals you weren't really listening.",
    },
  ],
},

it16: {
  objection: "My customers come here for the experience. Delivery ruins that.",
  responses: [
    {
      text: "Delivery doesn't have to hurt the experience at all — tons of high-end restaurants do both really successfully without compromising what makes them special to their regulars.",
      correct: false,
      feedback: "Generic reassurance doesn't address his specific concern about his unique dining experience.",
    },
    {
      text: "That's a great point. Maybe delivery genuinely isn't the right fit for your concept.",
      correct: false,
      feedback: "Agreeing too quickly without exploring options leaves potential value on the table.",
    },
    {
      text: "Owners who feel the same way usually create a smaller, travel-friendly menu — baked dishes, cold apps, things that hold up — so the brand stays protected. Would you be open to seeing how a restaurant like yours built that?",
      correct: true,
      technique: 'Specificity Hook',
      feedback: "You validate his brand concern, introduce the concept of a curated delivery menu, and offer a concrete example — making delivery feel brand-safe.",
    },
    {
      text: "Our insulated packaging has genuinely improved a lot — we've invested heavily in it. Even delicate dishes like pasta and risotto arrive in surprisingly good condition, better than most people expect when they first try it.",
      correct: false,
      feedback: "Jumping to packaging solutions misses the deeper point about his brand identity and customer experience.",
    },
  ],
},

it17: {
  objection: "Send me an email. I'll read it when I have time.",
  responses: [
    {
      text: "Sure — but honestly, emails tend to get buried. Could we just talk for two minutes right now while I'm already here?",
      correct: false,
      feedback: "Rejecting his preferred communication channel shows you value your convenience over his.",
    },
    {
      text: "Of course — I'll send something over later today.",
      correct: false,
      feedback: "Without asking what to include or setting a follow-up, the email becomes a dead end.",
    },
    {
      text: "What's your email? Three bullet points, delivery data specific to your area. Anything you'd want me to include?",
      correct: true,
      technique: 'Permission to Continue',
      feedback: "You comply with his request, promise brevity and relevance, and ask what he cares about — making the email a collaborative step rather than a brush-off.",
    },
    {
      text: "I'd honestly rather show you in person — it's so much more impactful when you can see it visually and ask questions in real time. When could I come back for a proper sit-down meeting?",
      correct: false,
      feedback: "Overriding his preference for a low-commitment channel with a high-commitment ask feels pushy.",
    },
  ],
},

it18: {
  objection: "I don't have time for this. We're short-staffed as it is.",
  responses: [
    {
      text: "I totally understand — let me know when things settle down and I'll circle back when timing is better.",
      correct: false,
      feedback: "Staffing issues don't 'settle down' — you're deferring indefinitely with no follow-up plan.",
    },
    {
      text: "This would only take a few minutes of your time — and honestly, it could really help your situation more than you might expect right now.",
      correct: false,
      feedback: "Minimizing his time concern when he's clearly overwhelmed feels dismissive.",
    },
    {
      text: "Delivery adds revenue without needing front-of-house staff. Worth five minutes later this week?",
      correct: true,
      technique: 'Curiosity Hook',
      feedback: "You empathize with a real pain point and reframe delivery as a solution to his staffing problem rather than an additional burden.",
    },
    {
      text: "What if I told you that once Uber Eats is set up, it's essentially self-managing? Most owners say the operational lift is almost zero once you get past the first few days.",
      correct: false,
      feedback: "Overselling ease-of-use when he's stressed about staffing sounds like an empty promise.",
    },
  ],
},

it19: {
  objection: "I had a bad experience with a delivery driver last year. Food arrived cold and the customer blamed us.",
  responses: [
    {
      text: "That won't happen with Uber Eats — our drivers are held to really high standards and we have strong ratings consistently across the board.",
      correct: false,
      feedback: "Blanket guarantees about driver quality aren't credible and don't address his specific bad experience.",
    },
    {
      text: "Sorry to hear that. Unfortunately, cold food is a risk with any delivery platform — there's only so much anyone can fully control in the logistics chain.",
      correct: false,
      feedback: "Admitting the problem exists without offering a solution just reinforces his reason to avoid delivery.",
    },
    {
      text: "Which platform was that? Some of the smaller ones really struggle with driver accountability — it might have been a platform problem, not a delivery problem.",
      correct: false,
      feedback: "Just asking which platform without empathy or a solution feels like you're deflecting blame rather than helping.",
    },
    {
      text: "Real-time tracking, tamper-evident seals, and customer refunds that come from us — not you. Two minutes to show you?",
      correct: true,
      technique: 'Immediate Credibility',
      feedback: "You validate the experience, ask a clarifying question, and introduce specific features that address his exact concern — cold food and misplaced blame.",
    },
  ],
},

it20: {
  objection: "We only do dine-in. That's our whole model.",
  responses: [
    {
      text: "And clearly it works — your place is packed. Do you ever get calls asking if you deliver?",
      correct: true,
      technique: 'Curiosity Hook',
      feedback: "You compliment his success, then ask questions that help him discover unmet demand himself — which is more persuasive than you telling him the demand exists.",
    },
    {
      text: "Dine-in is great — but you're genuinely missing a significant revenue stream by not offering delivery to the people who want your food but can't make it in.",
      correct: false,
      feedback: "Telling him he's missing out feels like criticizing a model that's clearly working for him.",
    },
    {
      text: "A lot of dine-in restaurants have added delivery and it hasn't hurt their core business at all — in fact most of them say it's been completely additive to their revenue without any cannibalization.",
      correct: false,
      feedback: "Generic reassurance without asking about his specific situation doesn't create engagement.",
    },
    {
      text: "Got it — if you ever want to explore it in the future, here's my card.",
      correct: false,
      feedback: "Accepting 'no' without any curiosity or exploration wastes the interaction.",
    },
  ],
},

it21: {
  objection: "You want me to give you a cut of every order? That's my hard-earned money.",
  responses: [
    {
      text: "It's honestly not that much when you break it down on a per-order basis — I can show you the math right now and I think you'll find it's actually very reasonable compared to what you'd spend on any other marketing channel.",
      correct: false,
      feedback: "Minimizing his concern about money feels dismissive of a legitimate business objection.",
    },
    {
      text: "Every delivery platform charges a commission — ours is consistently one of the most competitive in the market and we're transparent about every fee.",
      correct: false,
      feedback: "Comparing to competitors doesn't address the fundamental objection about paying a cut at all.",
    },
    {
      text: "Think of it like a marketing expense — you'd pay for ads anyway, and this one only costs you something when it actually generates a real order.",
      correct: false,
      feedback: "Relabeling the cost without explaining the incremental value sounds like a rhetorical trick.",
    },
    {
      text: "The commission is only on orders from customers who weren't going to walk in. New people who found you on the app. Does that distinction make sense?",
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
      text: "You're the cook? Then you're the most important person here. Is Maria around now, or is there a good time to catch her?",
      correct: true,
      technique: 'Gatekeeper Navigation',
      feedback: "You elevate his role, ask for Maria's availability, and position the conversation as needing both perspectives — making him an ally rather than a barrier.",
    },
    {
      text: "Sure — where's Maria? I'll go find her now.",
      correct: false,
      feedback: "Immediately ditching the person you're talking to feels transactional and rude.",
    },
    {
      text: "This actually affects the kitchen too — delivery order volumes, ticket management, prep time changes. You'd really be the right person to understand that operational side of it, and your input would matter a lot in the decision.",
      correct: false,
      feedback: "Overriding his redirect to Maria when he explicitly told you who to talk to feels pushy.",
    },
    {
      text: "Okay — could you have Maria give me a call when she has a free moment? Here's my number.",
      correct: false,
      feedback: "Asking one person to relay your info to another rarely results in a callback.",
    },
  ],
},

it23: {
  objection: "I've been burned by salespeople before. I don't trust any of you.",
  responses: [
    {
      text: "I promise I'm one of the good ones — give me a chance and I'll prove it to you through actions, not just words.",
      correct: false,
      feedback: "Every untrustworthy salesperson makes this exact promise.",
    },
    {
      text: "I'm sorry you've had bad experiences. Uber Eats is a major publicly traded company with real accountability — that's a very different situation from smaller vendors who can disappear on you.",
      correct: false,
      feedback: "Citing company size as a reason to trust doesn't address his personal experience with salespeople.",
    },
    {
      text: "I won't ask you to trust me. Can I show you real data from restaurants in your area — numbers you can verify yourself?",
      correct: true,
      technique: 'Immediate Credibility',
      feedback: "You validate his distrust, remove yourself as the thing he needs to trust, and offer verifiable evidence — shifting trust from you to data.",
    },
    {
      text: "I understand. No pressure at all — take my card and reach out whenever you feel like having a conversation about it.",
      correct: false,
      feedback: "Retreating completely means his distrust wins and you never get the chance to earn credibility.",
    },
  ],
},

it24: {
  objection: "You want me to pay to be on an app? I already have a website.",
  responses: [
    {
      text: "A website is great — but Uber Eats puts you in front of millions of active users who are searching for food right now, at a scale a restaurant website really can't match on its own.",
      correct: false,
      feedback: "Dismissing his website to tout your user base feels competitive rather than collaborative.",
    },
    {
      text: "How's the website working for delivery orders? App users are usually a totally different customer — people searching nearby who've never heard of you.",
      correct: true,
      technique: 'Curiosity Hook',
      feedback: "You ask about his website's performance, which often reveals a gap, and position the app as additive rather than a replacement.",
    },
    {
      text: "Your website doesn't have nearly the same reach — most people now search for food on apps rather than Google, especially when they want delivery in the evening.",
      correct: false,
      feedback: "Criticizing his existing investment creates defensiveness rather than openness.",
    },
    {
      text: "We're really not competing with your website at all — it's a completely different channel with a different audience, different purchasing intent, and customers who wouldn't have found you any other way.",
      correct: false,
      feedback: "While true, this is too abstract without a concrete example of how the channels differ.",
    },
  ],
},

it25: {
  objection: "We're a small operation. We can't handle a bunch of delivery orders on top of dine-in.",
  responses: [
    {
      text: "You'd honestly be surprised — most small restaurants handle it just fine once they settle into a rhythm with the flow of orders.",
      correct: false,
      feedback: "Dismissing his concern about capacity with 'you'd be surprised' doesn't address the real operational worry.",
    },
    {
      text: "Delivery orders are typically simpler than dine-in — no table service, no modifications, smaller tickets. Most kitchens find the extra volume much more manageable than they initially expected.",
      correct: false,
      feedback: "Generalizing about order complexity without knowing his menu or kitchen setup isn't credible.",
    },
    {
      text: "You control the volume — set your hours, pause during the rush, cap orders per hour. Want to see the throttle?",
      correct: true,
      technique: 'Immediate Credibility',
      feedback: "You directly address the overwhelm fear by showing that he controls the volume, and offer to demonstrate the specific feature.",
    },
    {
      text: "The delivery revenue would easily cover hiring one extra person to handle it — it becomes essentially self-funding within the first couple months once you're up and running.",
      correct: false,
      feedback: "Suggesting he hire someone contradicts his concern about being a small operation with limited bandwidth.",
    },
  ],
},

it26: {
  objection: "I've got a line out the door already. Why would I need more customers?",
  responses: [
    {
      text: "That's great now — but what happens in your slow season or when things get competitive? Delivery is a real safety net that protects your revenue through the dips.",
      correct: false,
      feedback: "Implying his business might decline feels pessimistic and borderline insulting.",
    },
    {
      text: "More customers means more money — why would you ever turn that down when the infrastructure is already there?",
      correct: false,
      feedback: "Oversimplifying ignores legitimate capacity concerns and comes across as tone-deaf.",
    },
    {
      text: "Delivery customers don't take tables or need servers. What do your Tuesday afternoons look like?",
      correct: true,
      technique: 'Curiosity Hook',
      feedback: "You compliment his success, reframe delivery as non-competing revenue, and probe for slow periods where delivery could fill gaps.",
    },
    {
      text: "Sounds like things are going really well — I'll check back in a few months when things might have shifted a bit.",
      correct: false,
      feedback: "Accepting the brush-off without exploring the opportunity misses the fact that high demand is actually the ideal time to add delivery.",
    },
  ],
},

it27: {
  objection: "Last delivery company said they'd bring in 50 orders a week. We got maybe 5.",
  responses: [
    {
      text: "Uber Eats has a significantly larger customer base than most other platforms, so you'd see dramatically higher volume — it's really not a comparable situation.",
      correct: false,
      feedback: "Making big promises right after he told you the last company overpromised is tone-deaf.",
    },
    {
      text: "Which platform was that? A lot of the smaller ones really struggle with order volume in neighborhoods like this — it might have been a platform problem, not a delivery problem.",
      correct: false,
      feedback: "Bashing competitors doesn't address his core concern — he's worried about being lied to again.",
    },
    {
      text: "I can guarantee you'll do way better than 5 orders a week — our platform is on a completely different level in terms of reach.",
      correct: false,
      feedback: "Making guarantees after he was burned by guarantees destroys any chance of trust.",
    },
    {
      text: "Overpromising is the worst thing a rep can do, and that last one burned you. I won't give you a made-up number. I'll show you the actual order volume for restaurants similar to yours in this zip code — real data you can look at yourself. You decide if it's worth it. Fair?",
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
      text: "Our drivers move fast — honestly, the food usually arrives in pretty good condition, even pasta dishes, because of how quickly the handoffs happen.",
      correct: false,
      feedback: "This doesn't address the fundamental issue of certain dishes not traveling well regardless of speed.",
    },
    {
      text: "You could look into better insulated packaging — it makes a significant difference and solves most of the travel issues for hot dishes including pasta.",
      correct: false,
      feedback: "Asking him to spend more money to solve a problem he didn't ask to have feels like adding cost, not value.",
    },
    {
      text: "Our best Italian partners built a delivery-only menu: baked ziti, arancini, paninis. Want to see what they chose and how it's working?",
      correct: true,
      technique: 'Specificity Hook',
      feedback: "You validate his quality concern, offer concrete menu examples that address the travel problem, and propose showing real results.",
    },
    {
      text: "Plenty of Italian restaurants do delivery really successfully — pasta, pizza, all of it. It works better than most people expect when they actually give it a proper try.",
      correct: false,
      feedback: "Dismissing his specific concern with a generic claim doesn't respect his culinary standards.",
    },
  ],
},

it29: {
  objection: "My wife handles the business side. She's not here right now.",
  responses: [
    {
      text: "Can I get her number to set something up directly?",
      correct: false,
      feedback: "Asking for a spouse's phone number from someone you just met feels intrusive.",
    },
    {
      text: "No problem — I'll leave my card and she can call when she's free.",
      correct: false,
      feedback: "A card with no context or built curiosity won't motivate a callback.",
    },
    {
      text: "Well, maybe I can run you through it and you can share it with her — you'd have the full picture to pass along at least.",
      correct: false,
      feedback: "This undermines their partnership dynamic and could create friction in their relationship.",
    },
    {
      text: "She sounds like the right person. Have you two ever talked about delivery? And when does she usually come in?",
      correct: true,
      technique: 'Gatekeeper Navigation',
      feedback: "You respect the decision-making structure, gauge his personal interest, and get timing intel — all in one natural response.",
    },
  ],
},

it30: {
  objection: "We tried online ordering during COVID and shut it off. Too many problems.",
  responses: [
    {
      text: "COVID was a mess for everyone in this industry. The technology and the infrastructure have improved significantly since then — it's honestly a very different experience now.",
      correct: false,
      feedback: "Vague claims about improvement don't address his specific bad experience.",
    },
    {
      text: "COVID online ordering was a mess for everyone — everyone was scrambling with no infrastructure. What was the biggest headache specifically? Incorrect orders, late deliveries, customer complaints? I want to know if the exact problem you had has actually been fixed before I say anything else.",
      correct: true,
      technique: 'Curiosity Hook',
      feedback: "You validate the COVID chaos, acknowledge it was different, and drill into the specific problem — which you can then address if it's been solved.",
    },
    {
      text: "That's totally understandable. Things have really settled down since those days — maybe it's worth giving it another try now that the dust has completely cleared.",
      correct: false,
      feedback: "'Give it another try' without addressing what went wrong sounds like you want him to repeat a mistake.",
    },
    {
      text: "What platform were you using back then? A lot of the issues during COVID were specific to platforms that weren't properly equipped to scale — that might have been the real root of the problem, not delivery itself.",
      correct: false,
      feedback: "Blaming the platform without understanding his specific issues feels deflective.",
    },
  ],
},

it31: {
  objection: "I don't even know what Uber Eats is, honestly. I don't use these apps.",
  responses: [
    {
      text: "Really? It's genuinely one of the biggest apps in the world right now — you should download it and check it out, it would help you understand the scale we're talking about.",
      correct: false,
      feedback: "Making him feel out of touch is the opposite of building rapport.",
    },
    {
      text: "It's a food delivery app — customers order from your menu through it and a driver picks it up and brings it directly to them wherever they are.",
      correct: false,
      feedback: "While accurate, this bare-bones explanation doesn't create any excitement or show specific value.",
    },
    {
      text: "You don't need to use it yourself — I'll handle the setup. You just focus on the food.",
      correct: false,
      feedback: "Being dismissive of his knowledge gap and promising to 'handle everything' sounds condescending.",
    },
    {
      text: "About 2,000 people in your neighborhood open delivery apps every evening looking for dinner. Your restaurant could show up in front of all of them. Want to see the customer view?",
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
      text: "That's exactly why you need us — to bring in more revenue and get those lights paid for faster.",
      correct: false,
      feedback: "Telling someone who's financially stressed that they need to spend more feels tone-deaf.",
    },
    {
      text: "No upfront cost to join at all. You pay a commission only when an order comes in — meaning you only pay when you're actually making money. Want to see what new restaurants in your situation typically earn in their first month on the platform?",
      correct: true,
      technique: 'Immediate Credibility',
      feedback: "You empathize with his financial stress, clarify there's no upfront cost, and offer relevant first-month data for new restaurants.",
    },
    {
      text: "I totally understand — when things stabilize a bit financially, give us a call and we'll be happy to get you set up at that point.",
      correct: false,
      feedback: "A new restaurant is actually the ideal time to add delivery — waiting means missing early momentum.",
    },
    {
      text: "We actually have some financing options that might help bridge the gap while you're getting your footing — it might be worth at least hearing about what's available to you.",
      correct: false,
      feedback: "Suggesting financing to someone who just said they can barely keep the lights on adds pressure, not value.",
    },
  ],
},

it33: {
  objection: "I want to support local businesses, not big tech companies.",
  responses: [
    {
      text: "We're really not that different from a local service provider — we just operate at a much larger scale in order to serve more people across the community.",
      correct: false,
      feedback: "Comparing yourself to a local business when he just criticized big tech isn't credible.",
    },
    {
      text: "When someone here searches for Italian food on Uber Eats, your restaurant shows up next to the big chains. The money goes to you, not a franchiser. We level the playing field.",
      correct: true,
      technique: 'Specificity Hook',
      feedback: "You honor his values, reframe the platform as a tool that helps local businesses compete against chains, and redirect the 'big tech' concern.",
    },
    {
      text: "I understand the sentiment completely, but in business you really do have to use the best tools available to you if you want to grow and stay competitive in this environment.",
      correct: false,
      feedback: "Dismissing his values as sentiment rather than a valid business philosophy is condescending.",
    },
    {
      text: "Actually, a lot of local business owners use and really like Uber Eats — it's not really a 'big tech vs. small business' thing in the way you might be thinking about it.",
      correct: false,
      feedback: "This doesn't address his concern — it just deflects it.",
    },
  ],
},

it34: {
  objection: "I saw on the news that restaurants are suing Uber Eats over fees.",
  responses: [
    {
      text: "That's old news — things have genuinely changed a lot since those stories ran.",
      correct: false,
      feedback: "Dismissing something he saw on the news as 'old' feels evasive.",
    },
    {
      text: "Those lawsuits came from a small number of restaurants — the vast majority of our partners are genuinely happy with the relationship and the fee structure.",
      correct: false,
      feedback: "Minimizing legitimate legal disputes sounds like corporate spin.",
    },
    {
      text: "I'm not really the right person to speak to legal matters — that's above my level.",
      correct: false,
      feedback: "Dodging the question entirely destroys trust and makes it seem like there's something to hide.",
    },
    {
      text: "Those suits were about COVID-era fee caps — a unique situation. Today our fee structure is fully transparent. Want to see exactly what you'd pay and keep?",
      correct: true,
      technique: 'Immediate Credibility',
      feedback: "You acknowledge the news honestly, provide context, and offer to show him the specific numbers — transparency is the antidote to bad press.",
    },
  ],
},

it35: {
  objection: "Every dollar I give you is a dollar less for my staff.",
  responses: [
    {
      text: "Actually, restaurants on our platform often end up hiring more staff because of the increased order volume — so it tends to be a net positive for teams in the long run.",
      correct: false,
      feedback: "Suggesting he'd need to hire more people when he's worried about paying current staff misreads the situation.",
    },
    {
      text: "Delivery customers are new — they weren't going to dine in. That extra revenue means more hours for your team, not less. Want to see the math?",
      correct: true,
      technique: 'Specificity Hook',
      feedback: "You honor his loyalty to his team and reframe delivery revenue as additive — creating more work and more income for staff, not less.",
    },
    {
      text: "The commission is technically a business expense — it comes out of the delivery revenue, not your existing payroll. They're completely separate line items that don't affect each other.",
      correct: false,
      feedback: "Being technically correct but emotionally dismissive doesn't address his real concern about his team.",
    },
    {
      text: "You could raise your delivery menu prices slightly to fully offset the commission — a lot of restaurants do that and most customers honestly don't notice the small difference.",
      correct: false,
      feedback: "Suggesting price increases before he's even agreed to the concept adds complexity to an already uncertain decision.",
    },
  ],
},

it36: {
  objection: "I need to focus on my dine-in customers. They're my priority.",
  responses: [
    {
      text: "What if delivery actually brought you more dine-in customers? People try you on the app, then come in for the full experience. Want to see the data on that?",
      correct: true,
      technique: 'Curiosity Hook',
      feedback: "You validate his priority and introduce the concept of delivery as a customer acquisition channel for dine-in — flipping his objection into a benefit.",
    },
    {
      text: "You can absolutely do both — delivery doesn't take away from dine-in at all when it's managed correctly with the right settings and a bit of planning.",
      correct: false,
      feedback: "A flat assertion without evidence doesn't address his real concern about splitting his attention.",
    },
    {
      text: "Dine-in is great, but you're genuinely leaving a significant revenue stream on the table by not offering delivery to the people who want your food but can't make it in to dine.",
      correct: false,
      feedback: "Telling him he's limiting himself when he's stated a clear priority feels like you're not listening.",
    },
    {
      text: "Your dine-in customers probably order delivery from other restaurants on nights they don't come in — they might as well be ordering from you instead.",
      correct: false,
      feedback: "Suggesting his regulars switch to delivery — where he makes less — isn't a compelling argument.",
    },
  ],
},

it37: {
  objection: "I'm 65 years old. I'm not learning new technology.",
  responses: [
    {
      text: "You don't learn anything. I do the setup. After that, orders print like a ticket. Want to see a sample?",
      correct: true,
      technique: 'Empathy Opener',
      feedback: "You remove the tech barrier by showing that the workflow is as simple as reading a kitchen ticket — something he's done for decades.",
    },
    {
      text: "It's actually really easy to use once you see it — even people who aren't tech-savvy at all pick it up within a day or two. I've seen it happen with a lot of owners.",
      correct: false,
      feedback: "Saying 'even people who aren't tech-savvy' can feel patronizing to someone who just stated their limitation.",
    },
    {
      text: "Maybe one of your staff members or family could manage the tablet side of things — a lot of owners delegate that part to someone they trust in the restaurant.",
      correct: false,
      feedback: "Suggesting he needs family help undermines his independence and authority over his business.",
    },
    {
      text: "Age is just a number — I've successfully set up restaurants with owners even older than you who are now doing really well on the platform and love it!",
      correct: false,
      feedback: "Commenting on his age and comparing him to others is dismissive and potentially offensive.",
    },
  ],
},

it38: {
  objection: "Your company keeps changing the rules. How do I know you won't raise the fees next year?",
  responses: [
    {
      text: "Rates are locked in your contract — I can show you the clause right now. And you can pause orders anytime, no penalty.",
      correct: true,
      technique: 'Immediate Credibility',
      feedback: "You point to a contractual guarantee, add the safety valve of pausing anytime, and ask if that addresses the concern — giving him concrete protections.",
    },
    {
      text: "I honestly can't predict the future — but our rates have been pretty stable for a good stretch of time now, which is a positive sign.",
      correct: false,
      feedback: "This actually confirms his fear — you're admitting you can't guarantee rate stability.",
    },
    {
      text: "Uber Eats is deeply committed to being a fair and transparent partner to restaurant owners — it's genuinely core to how we operate at every level.",
      correct: false,
      feedback: "Corporate platitudes don't address a specific concern about fee increases.",
    },
    {
      text: "Every business adjusts its pricing over time — that's just a normal and expected part of operating in any industry. It doesn't mean the changes will be dramatic or unfair.",
      correct: false,
      feedback: "Normalizing the very thing he's worried about makes him feel like fee hikes are inevitable.",
    },
  ],
},

it39: {
  objection: "I'm not giving you my Social Security number or bank info to sign up.",
  responses: [
    {
      text: "It's completely secure — we use the same bank-level encryption that major financial institutions use for all of their online transactions.",
      correct: false,
      feedback: "Jumping to security features without addressing his emotional discomfort misses the point.",
    },
    {
      text: "We need that information for tax reporting — it's actually required by law for us to collect it from all partners.",
      correct: false,
      feedback: "While true, citing legal requirements sounds threatening rather than reassuring.",
    },
    {
      text: "Completely fair — protecting your information matters. Let me walk you through the entire signup right now so you can see exactly what's asked and why, before you enter a single thing. The bank info is just for direct-depositing your earnings. No surprises. Want to take a look together?",
      correct: true,
      technique: 'Immediate Credibility',
      feedback: "You validate the concern, offer transparency by previewing the process, and explain the purpose of each piece of information.",
    },
    {
      text: "Think about it — your landlord has your bank details, your suppliers do too, even your utilities. This is really no different from all the other business relationships you already have and trust.",
      correct: false,
      feedback: "Comparing yourself to established relationships he already trusts doesn't help when he doesn't trust you yet.",
    },
  ],
},

it40: {
  objection: "I just lost my head chef. I can't even think about this right now.",
  responses: [
    {
      text: "Not going to pitch you right now. Can I check back in three weeks? And if I can connect you with owners who might know someone available, happy to do that.",
      correct: true,
      technique: 'Empathy Opener',
      feedback: "You acknowledge the real crisis, defer the pitch appropriately, set a specific follow-up timeline, and offer genuine non-sales help — building trust for later.",
    },
    {
      text: "That's really tough — but actually, delivery could help offset the revenue loss while you're short-staffed and figuring out your next hire. It might even buy you some breathing room.",
      correct: false,
      feedback: "Trying to sell during a genuine crisis feels exploitative.",
    },
    {
      text: "I completely understand — take your time and give me a call when things settle down and you're in a better headspace.",
      correct: false,
      feedback: "No follow-up date means this lead dies.",
    },
    {
      text: "Sorry to hear that — are you still open for regular service in the meantime?",
      correct: false,
      feedback: "Asking if he's still open feels insensitive and self-serving.",
    },
  ],
},

it41: {
  objection: "I already told your colleague I'd think about it. That was two months ago.",
  responses: [
    {
      text: "Did you think about it and decide no, or did it just fall off your plate? Either answer is fine.",
      correct: true,
      technique: 'Permission to Continue',
      feedback: "You acknowledge the time gap, ask directly without pressure, and give him permission to say no — which paradoxically often leads to re-engagement.",
    },
    {
      text: "Great — so you're already familiar with what we offer. Are you ready to move forward and get the signup started?",
      correct: false,
      feedback: "Assuming familiarity and pushing to close after a two-month gap is presumptuous.",
    },
    {
      text: "My colleague should have followed up much sooner — I apologize for that gap. Let me get you fully up to speed and pick up right where that conversation left off.",
      correct: false,
      feedback: "Criticizing your colleague doesn't build trust in your organization.",
    },
    {
      text: "A lot has actually changed in the past two months — new features, updated pricing, and some promotional opportunities that might really change the picture for you.",
      correct: false,
      feedback: "Jumping to new features without first understanding where he landed on his decision is tone-deaf.",
    },
  ],
},

it42: {
  objection: "You know what, I'm actually about to sell this place. So it doesn't make sense.",
  responses: [
    {
      text: "That's a big move — congrats, or condolences, depending on how you feel about it. Quick thought though: having an active delivery channel with steady, documented revenue actually increases your business valuation. Buyers pay more for diversified revenue streams. Worth at least considering before you finalize the listing?",
      correct: true,
      technique: 'Curiosity Hook',
      feedback: "You acknowledge the life change, then reframe delivery as something that increases his sale price — turning a deal-killer into a compelling reason to sign up.",
    },
    {
      text: "Ah, that's too bad. Well, good luck with the sale — hope it goes smoothly.",
      correct: false,
      feedback: "You miss an opportunity to show how delivery could increase business value before a sale.",
    },
    {
      text: "Who's buying? Maybe I should be talking to them instead about getting set up on the platform.",
      correct: false,
      feedback: "Immediately trying to go around him to the buyer is disrespectful.",
    },
    {
      text: "All the more reason to boost revenue right now — a restaurant that's generating stronger numbers will command a much better multiple and the whole sale process tends to go faster and smoother when the financials look good.",
      correct: false,
      feedback: "The idea is right but the delivery is too blunt and salesy for someone going through a major life transition.",
    },
  ],
},

it43: {
  objection: "I just don't like the idea of strangers picking up my food. What if they mess it up?",
  responses: [
    {
      text: "Our drivers are professional and customer-rated after every single delivery — the ones with low ratings get removed from the platform quickly to protect restaurant quality.",
      correct: false,
      feedback: "Generic claims about driver quality don't address his specific worry about food handling.",
    },
    {
      text: "At some point with delivery you do have to trust the system — you can't control every single step of the journey once the food leaves your kitchen.",
      correct: false,
      feedback: "Telling a restaurant owner to 'let go of control' is the wrong approach for someone who takes pride in every plate.",
    },
    {
      text: "That rarely happens in practice — the vast majority of deliveries go completely smoothly from pickup to drop-off without any issues at all.",
      correct: false,
      feedback: "Minimizing his concern with 'rarely' doesn't reassure a quality-focused owner.",
    },
    {
      text: "Orders are sealed, tamper-evident, tracked in real time. If a driver messes up, the refund comes from us — not you. Want to see how the packaging works?",
      correct: true,
      technique: 'Immediate Credibility',
      feedback: "You validate his brand concern and lay out the specific protections — sealed packaging, tracking, Uber-funded refunds, and driver accountability.",
    },
  ],
},

it44: {
  objection: "Is this going to mess up my kitchen flow? We have a system that works.",
  responses: [
    {
      text: "It actually streamlines things for most kitchens — a lot of owners say it's much more manageable than they expected once they're into a rhythm.",
      correct: false,
      feedback: "Vague reassurance doesn't address his specific concern about disrupting an existing system.",
    },
    {
      text: "There might be a small adjustment period, but the revenue it generates really does make the temporary disruption worth working through.",
      correct: false,
      feedback: "Admitting workflow disruption and dismissing it with 'it's worth it' won't work for someone who values their system.",
    },
    {
      text: "Separate tablet, your own prep times, one-tap pause during the rush. Fits around your system. Want to see it?",
      correct: true,
      technique: 'Immediate Credibility',
      feedback: "You show exactly how delivery integrates without disrupting his workflow — separate device, custom prep times, and a pause button during rushes.",
    },
    {
      text: "The orders are pretty simple and your team will adapt to the new flow quickly — within a week or two it typically just becomes part of the normal routine.",
      correct: false,
      feedback: "Assuming his team will adapt without explaining how shows you don't understand kitchen operations.",
    },
  ],
},

it45: {
  objection: "I went to your website and the signup process looked complicated. I gave up halfway through.",
  responses: [
    {
      text: "Sorry that was frustrating — that's exactly why I'm here. You tell me the menu items, I handle the rest. When's a good time to sit down together for fifteen minutes?",
      correct: true,
      technique: 'Empathy Opener',
      feedback: "You validate his frustration, position your in-person visit as the solution, and offer to do the heavy lifting — removing the exact barrier that stopped him.",
    },
    {
      text: "The signup process is actually pretty simple — you might have just gotten tripped up on one particular step that tends to confuse people the first time.",
      correct: false,
      feedback: "Suggesting the process is simple when he just told you it wasn't invalidates his experience.",
    },
    {
      text: "We've actually updated the website recently to make it much cleaner and more intuitive — it's worth giving it another shot, it's a much better experience now.",
      correct: false,
      feedback: "Sending him back to the thing that frustrated him is a missed opportunity to help directly.",
    },
    {
      text: "I can put together a detailed step-by-step guide with screenshots that walks you through each part of the process — a lot of owners find that really clears up the confusion.",
      correct: false,
      feedback: "More documentation doesn't solve the problem — he needs hands-on help, not more reading.",
    },
  ],
},

it46: {
  objection: "My nephew says these apps steal customer data. I don't want my customers' info going to some big company.",
  responses: [
    {
      text: "That's just not how it works — we absolutely do not steal customer data. That's misinformation that gets spread around about platforms like ours.",
      correct: false,
      feedback: "A flat denial without explanation sounds defensive and doesn't educate him on how data actually flows.",
    },
    {
      text: "You don't share your existing customer data with us at all. We bring you new customers. Your regulars' info stays with you.",
      correct: true,
      technique: 'Immediate Credibility',
      feedback: "You respect the nephew's influence, directly address the data concern with facts, and clarify the separation between his existing customers and new app customers.",
    },
    {
      text: "With all due respect, your nephew might not fully understand how the platform actually works on a technical and operational level.",
      correct: false,
      feedback: "Dismissing a trusted family member's opinion creates an adversarial dynamic.",
    },
    {
      text: "Data privacy is extremely important to us — we're fully compliant with all applicable privacy regulations and laws at both the state and federal level.",
      correct: false,
      feedback: "Corporate compliance language doesn't address his specific concern in relatable terms.",
    },
  ],
},

it47: {
  objection: "I see you walking up and down this block. How many restaurants have you been rejected by today?",
  responses: [
    {
      text: "Ha — a few. But Rossi's keeps coming up as the place people want to order from but can't. Got sixty seconds?",
      correct: true,
      technique: 'Pattern Interrupt',
      feedback: "You're honest and self-deprecating, then pivot to a compliment and a specific insight about unmet demand for his restaurant — making him curious despite himself.",
    },
    {
      text: "I've actually had a really productive morning — signed three restaurants on this block already. Things are going great, honestly.",
      correct: false,
      feedback: "Bragging about signing competitors makes you look like you're playing restaurants against each other.",
    },
    {
      text: "Not many rejections, actually — most owners are pretty interested once they actually hear what we're offering and see what the numbers look like.",
      correct: false,
      feedback: "Being defensive about rejections instead of owning it with humor misses the rapport opportunity.",
    },
    {
      text: "I wouldn't really call them rejections — more like 'not yet.' You'd actually be surprised how many of them come back and sign up within a few weeks once they've thought it over.",
      correct: false,
      feedback: "Reframing his joke with corporate optimism kills the human moment.",
    },
  ],
},

it48: {
  objection: "Fine. You've got two minutes. Impress me.",
  responses: [
    {
      text: "4,300 active Uber Eats users within two miles of here. When they search Italian food, your competitors show up — you don't. Restaurants your size here see 40–60 orders a week at $32 average. That's $5K–$7.5K a month in new revenue. Worth a longer conversation?",
      correct: true,
      technique: '30-Second Pitch',
      feedback: "You fill the two minutes with hyperlocal data, specific numbers, a competitive gap, and a clear revenue projection — ending with a close for a longer meeting.",
    },
    {
      text: "Great! So Uber Eats is a platform that connects restaurants with customers who want food delivered to their door. We have a huge and active user base, great in-app marketing tools, a dedicated restaurant support team, and flexible commission structures that work for businesses of every size.",
      correct: false,
      feedback: "Feature-listing wastes his two minutes without giving him any specific reason to care about his business.",
    },
    {
      text: "Honestly, two minutes isn't really enough to do this justice — can we schedule a proper sit-down so I can walk you through everything the right way?",
      correct: false,
      feedback: "He's giving you a chance right now — asking for more time signals you can't deliver value concisely.",
    },
    {
      text: "I'd rather not rush through this — your business deserves more than a two-minute pitch and I want to make sure you get the complete picture with time to ask questions.",
      correct: false,
      feedback: "While it sounds respectful, you're rejecting the opening he just gave you.",
    },
  ],
},

it49: {
  objection: "Let me guess — you're going to tell me how much money I'm losing by not being on your app.",
  responses: [
    {
      text: "Well... yes, actually. But the numbers are pretty compelling — let me share them in a way that's actually useful for your specific situation.",
      correct: false,
      feedback: "Confirming his cynical prediction makes you predictable and easy to dismiss.",
    },
    {
      text: "Not exactly — I'm more focused on talking about the opportunity rather than framing it as loss. It's a different way of looking at the same thing.",
      correct: false,
      feedback: "Reframing 'loss' as 'opportunity' is semantics — he'll see through it immediately.",
    },
    {
      text: "Nope. Quick question instead: when people in this neighborhood search for Italian food on delivery apps right now, who shows up? I actually looked it up before coming here, and there's a competitive gap I think you'd find genuinely interesting.",
      correct: true,
      technique: 'Pattern Interrupt',
      feedback: "You break his expectation by not doing what he predicted, show respect for his knowledge, and tease a specific competitive insight.",
    },
    {
      text: "I wouldn't put it quite that way — but there is real revenue potential here, and I think you'd genuinely want to at least know about it before deciding whether it's right for you.",
      correct: false,
      feedback: "Softening the language while still saying the same thing doesn't break his script.",
    },
  ],
},

it50: {
  objection: "You seem like a nice kid, but I've been doing this since before you were born. I don't need help.",
  responses: [
    {
      text: "I may be young, but I know this market well. Let me show you the data and you can decide.",
      correct: false,
      feedback: "Getting defensive about your age creates a power struggle instead of building rapport.",
    },
    {
      text: "Experience is invaluable — but even the most successful restaurants are finding they need to adapt to where their customers are spending their time and money now.",
      correct: false,
      feedback: "Telling a veteran he needs to adapt is condescending and triggers defensiveness.",
    },
    {
      text: "I completely respect your experience. I'm not trying to change anything — just offering a tool that some other restaurants in the area are finding useful.",
      correct: false,
      feedback: "This is polite but too vague — it doesn't give him a specific reason to engage further.",
    },
    {
      text: "I wouldn't dare tell you how to run a restaurant. What I do know: about $15,000 a month in Italian food delivery orders going to your competitors right now. Just wanted to put that on your radar.",
      correct: true,
      technique: 'Specificity Hook',
      feedback: "You respect his expertise entirely, limit your claim to what you actually know (delivery data), share a specific competitive number, and leave the decision with him — preserving his authority.",
    },
  ],
},
