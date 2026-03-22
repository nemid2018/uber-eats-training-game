  // ═══════════════════════════════════════════════════════════════════════
  // DISTRICT 1 — Little Italy — "The Opener" (it01–it50)
  // ═══════════════════════════════════════════════════════════════════════

  it01: {
    objection: "I'm in the middle of lunch service — come back some other time.",
    responses: [
      {
        text: "I totally understand. No one wants to talk business during the rush. Could I stop by Tuesday around 2:30 when things quiet down? I only need ten minutes.",
        correct: false,
        feedback: "This is polite but surrenders the moment entirely — you leave with nothing concrete and no reason for Marco to remember you.",
      },
      {
        text: "This will only take a second — I promise it's worth your time.",
        correct: false,
        feedback: "Dismissing his stated time constraint feels pushy and disrespectful of his business reality.",
      },
      {
        text: "I can see you're slammed — your place is packed, which is exactly why I wanted to talk to you. I'll be quick: restaurants like yours on our platform are adding $4K–$8K a month in delivery revenue. Can I leave my card and lock in five minutes with you after the rush today?",
        correct: true,
        technique: 'Empathy Opener',
        feedback: "You acknowledge the rush, turn the busyness into a compliment, drop a specific number to create curiosity, and ask for a concrete micro-commitment later the same day.",
      },
      {
        text: "No problem at all. Here's my card — call me whenever works for you.",
        correct: false,
        feedback: "Leaving a card with no hook or follow-up plan means you'll never hear from him.",
      },
    ],
  },

  it02: {
    objection: "Who let you in? We're not taking meetings with vendors today.",
    responses: [
      {
        text: "I'm not here to sell you anything right now — I just wanted to drop off some data I pulled on delivery trends in this neighborhood. It's one page. Can I leave it with you?",
        correct: true,
        technique: 'Pattern Interrupt',
        feedback: "By reframing yourself as someone delivering value rather than asking for something, you break the vendor-rejection script and create curiosity about the data.",
      },
      {
        text: "I apologize for barging in. I'll leave and come back another time.",
        correct: false,
        feedback: "You've already disrupted his day — leaving empty-handed wastes that disruption without gaining anything.",
      },
      {
        text: "Your hostess said it was fine to come in. I just need five minutes.",
        correct: false,
        feedback: "Throwing the hostess under the bus creates conflict and makes you look dishonest.",
      },
      {
        text: "I'm from Uber Eats. We're signing restaurants in the area and I wanted to make sure you didn't miss out.",
        correct: false,
        feedback: "Leading with your company name and urgency triggers the exact vendor-rejection reflex he just expressed.",
      },
    ],
  },

  it03: {
    objection: "I've heard this pitch before. You all sound the same.",
    responses: [
      {
        text: "You're probably right — most reps come in and talk about themselves. I'd rather ask you a question: what's the one thing about delivery that frustrates you the most?",
        correct: true,
        technique: 'Curiosity Hook',
        feedback: "Agreeing with his cynicism disarms him, and pivoting to a question about his pain makes the conversation about him instead of you.",
      },
      {
        text: "I promise we're different. Let me explain how Uber Eats stands out from the competition.",
        correct: false,
        feedback: "Every salesperson says 'we're different' — this confirms his belief that you all sound the same.",
      },
      {
        text: "Fair enough. Maybe I'll catch you another day when you're more open to hearing us out.",
        correct: false,
        feedback: "Walking away without any engagement wastes the opportunity and signals you have nothing unique to offer.",
      },
      {
        text: "I get that a lot. But have you seen our latest commission rates? They're the lowest in the industry.",
        correct: false,
        feedback: "Jumping straight to commission rates without understanding his concerns feels tone-deaf to what he just said.",
      },
    ],
  },

  it04: {
    objection: "I'm not the owner. You'd have to talk to my father, but he doesn't take meetings.",
    responses: [
      {
        text: "I hear you — sounds like your dad is focused on what matters. I'm not looking for a meeting, just a quick conversation. What's the best way to catch him for two minutes — does he come in early for prep?",
        correct: true,
        technique: 'Gatekeeper Navigation',
        feedback: "You respect the father's time, reframe from 'meeting' to 'quick conversation,' and ask for intel on his schedule — turning the gatekeeper into an ally.",
      },
      {
        text: "Can you give me his phone number so I can call him directly?",
        correct: false,
        feedback: "Asking for personal contact info from a family member feels intrusive and bypasses the trust you haven't built yet.",
      },
      {
        text: "Well, maybe you can make the decision? Are you involved in the business?",
        correct: false,
        feedback: "This can feel dismissive of the family hierarchy and may offend if the son doesn't have decision-making authority.",
      },
      {
        text: "That's too bad. Here's my card — pass it along to him when you get a chance.",
        correct: false,
        feedback: "Cards passed through a gatekeeper rarely reach the decision-maker with any context or urgency.",
      },
    ],
  },

  it05: {
    objection: "What's this about? I have 30 seconds.",
    responses: [
      {
        text: "Got it — I'll be fast. Three Italian restaurants within a mile of here joined Uber Eats last quarter and averaged $6,200 in new monthly revenue. I'd love to show you their numbers. Worth a ten-minute sit-down this week?",
        correct: true,
        technique: '30-Second Pitch',
        feedback: "You respect the time constraint, lead with hyperlocal social proof and a specific dollar figure, and close with a concrete ask for a follow-up meeting.",
      },
      {
        text: "I'm with Uber Eats and we help restaurants grow their delivery revenue. Can we set up a meeting?",
        correct: false,
        feedback: "Too generic — you've wasted his 30 seconds without giving him a reason to care about your specific value.",
      },
      {
        text: "Thirty seconds isn't really enough to explain what we do. Can we schedule a proper meeting?",
        correct: false,
        feedback: "Rejecting his time frame signals that you can't adapt to his needs — a bad first impression.",
      },
      {
        text: "We're Uber Eats. We partner with restaurants to boost revenue through delivery. We have great tools, marketing support, a huge customer base, and flexible commission structures that work for businesses of all sizes.",
        correct: false,
        feedback: "This is a feature dump that ignores his time constraint and gives no specific reason for him to engage further.",
      },
    ],
  },

  it06: {
    objection: "We're not interested in anything you're selling.",
    responses: [
      {
        text: "Totally fair — and I'm not asking you to buy anything today. I noticed you have a 4.7 on Google with 800 reviews. That tells me your food travels well. I just had one question: are you capturing any of the delivery demand in this zip code, or is it all going to your competitors?",
        correct: true,
        technique: 'Specificity Hook',
        feedback: "You defuse the rejection, demonstrate you did homework on his business, and plant a competitive fear question that's hard to ignore.",
      },
      {
        text: "I understand. We hear that a lot, but once owners see the numbers, they usually change their minds.",
        correct: false,
        feedback: "Telling someone they'll change their mind is condescending and triggers defensiveness.",
      },
      {
        text: "No worries. Sorry to bother you.",
        correct: false,
        feedback: "You've accepted a reflexive no without even attempting to create curiosity — every cold call gets an initial no.",
      },
      {
        text: "That's fine, but can I at least leave some materials for you to look at?",
        correct: false,
        feedback: "Brochures without context or a hook end up in the trash.",
      },
    ],
  },

  it07: {
    objection: "Can you just leave your card? I'll call if I'm interested.",
    responses: [
      {
        text: "Absolutely, here's my card. And just so it's not a cold call when you look at it later — I pulled the delivery data for this zip code. Restaurants your size here are seeing 35 to 50 new delivery orders per week. I'll jot that on the back. What's the best day to follow up?",
        correct: true,
        technique: 'Immediate Credibility',
        feedback: "You comply with his request, add a memorable data point to the card, and secure a follow-up day — turning a brush-off into a warm next step.",
      },
      {
        text: "Sure thing. Hope to hear from you!",
        correct: false,
        feedback: "You're relying entirely on the prospect to take action — which almost never happens with a cold drop-in.",
      },
      {
        text: "I'd rather not leave a card — can we just talk for two minutes right now?",
        correct: false,
        feedback: "Refusing his request makes you seem pushy and disrespectful of his boundaries.",
      },
      {
        text: "Of course. But honestly, most people don't call back. Can I get your email instead so I can send some info?",
        correct: false,
        feedback: "Telling him most people don't call back is passive-aggressive and creates an awkward dynamic.",
      },
    ],
  },

  it08: {
    objection: "How did you even get my number?",
    responses: [
      {
        text: "Great question — your restaurant comes up as one of the top-rated Italian spots in the area, and I specifically wanted to reach out because of your reviews. I only need sixty seconds. Can I share one quick stat about delivery in your neighborhood?",
        correct: true,
        technique: 'Immediate Credibility',
        feedback: "You answer transparently, turn the question into a compliment about his restaurant's reputation, and pivot to a value-driven ask.",
      },
      {
        text: "It's publicly listed on your website and Google Business page.",
        correct: false,
        feedback: "While factual, this is defensive and doesn't move the conversation forward — you've answered his question but created no interest.",
      },
      {
        text: "We have a database of restaurants in the area. But that's not important — what's important is what I can do for your business.",
        correct: false,
        feedback: "Dismissing his concern ('that's not important') feels evasive and starts the relationship on a bad note.",
      },
      {
        text: "I apologize if this feels intrusive. I can take you off our list if you'd prefer.",
        correct: false,
        feedback: "Over-apologizing and offering to remove him surrenders the conversation before it starts.",
      },
    ],
  },

  it09: {
    objection: "I'm in the middle of prep. Can you call me tomorrow?",
    responses: [
      {
        text: "Of course — I don't want to mess up your prep. What time works best tomorrow so I'm not catching you at a bad time again?",
        correct: true,
        technique: 'Timing Request',
        feedback: "You respect his workflow, show you understand restaurant rhythms, and lock in a specific callback time rather than a vague 'tomorrow.'",
      },
      {
        text: "This will literally take one minute. I promise.",
        correct: false,
        feedback: "Ignoring his request to call tomorrow shows you prioritize your agenda over his.",
      },
      {
        text: "Sure, I'll try you tomorrow. Have a good one.",
        correct: false,
        feedback: "Without pinning down a time, 'tomorrow' becomes a missed call and a dead lead.",
      },
      {
        text: "I totally get it. I'll send you an email instead — what's your address?",
        correct: false,
        feedback: "Pivoting to email when he's busy with his hands in dough feels like you're sneaking in through another door.",
      },
    ],
  },

  it10: {
    objection: "Look, every week someone from a delivery app walks in here. I'm over it.",
    responses: [
      {
        text: "I don't blame you — that's exhausting. I'm not going to pitch you. I actually just came from Sal's down the street, and he mentioned your carbonara is the best in the neighborhood. I'm curious — do you get much takeout demand for that dish, or is it mostly dine-in?",
        correct: true,
        technique: 'Pattern Interrupt',
        feedback: "You break the sales script entirely by leading with a genuine compliment from a neighbor and asking a curiosity-driven question about his food — making this conversation feel different from the others.",
      },
      {
        text: "I understand, but Uber Eats is different from the other platforms. Let me explain why.",
        correct: false,
        feedback: "Every rep from every platform says they're different — you're proving his point.",
      },
      {
        text: "Sorry to hear that. I'll make this quick then — we have a new promotion for Italian restaurants.",
        correct: false,
        feedback: "Acknowledging his frustration and then immediately pitching shows you didn't actually listen.",
      },
      {
        text: "Would it help if I came back at a better time?",
        correct: false,
        feedback: "He's not complaining about timing — he's complaining about the constant pitches. Coming back later is still another pitch.",
      },
    ],
  },

  it11: {
    objection: "My son handles all the tech stuff. He's not here today.",
    responses: [
      {
        text: "That's smart — a lot of family restaurants divide it that way. While I'm here, I'd love to learn more about your restaurant. How long have you been in this location? And when does your son usually come in — I'd like to talk to both of you.",
        correct: true,
        technique: 'Gatekeeper Navigation',
        feedback: "You validate the family structure, use the moment to build rapport with the owner directly, and set up a meeting that includes the decision-maker.",
      },
      {
        text: "Can I get his phone number? I'll reach out directly.",
        correct: false,
        feedback: "Bypassing the father to contact the son directly can feel disrespectful in a family business dynamic.",
      },
      {
        text: "No problem. I'll come back when he's here. When is that?",
        correct: false,
        feedback: "You miss the chance to build any rapport with the owner standing in front of you.",
      },
      {
        text: "Well, this isn't really about tech — it's about growing your revenue. You'd be the right person to talk to about that.",
        correct: false,
        feedback: "Correcting him about who should handle this can feel dismissive of how he runs his business.",
      },
    ],
  },

  it12: {
    objection: "We've been here forty years without delivery. Why would I start now?",
    responses: [
      {
        text: "Forty years is incredible — that says everything about your food and your reputation. The restaurants I work with that have been around that long aren't adding delivery because they need it. They're doing it because their customers are asking for it. Have you noticed regulars requesting takeout or delivery lately?",
        correct: true,
        technique: 'Empathy Opener',
        feedback: "You honor the legacy, reframe delivery as customer-driven rather than desperation, and ask a question that lets him discover the need himself.",
      },
      {
        text: "The market has changed. If you don't offer delivery, you're leaving money on the table.",
        correct: false,
        feedback: "Telling a 40-year veteran that the market has changed feels condescending and dismissive of his success.",
      },
      {
        text: "That's impressive. But times are changing, and delivery is where the growth is.",
        correct: false,
        feedback: "Generic 'times are changing' language doesn't respect the specific context of his long-running business.",
      },
      {
        text: "I understand. Not every restaurant needs delivery. Thanks for your time.",
        correct: false,
        feedback: "Conceding too quickly wastes an opportunity to help him see delivery as an extension of his success, not a departure from it.",
      },
    ],
  },

  it13: {
    objection: "I don't trust these apps. They take advantage of small businesses.",
    responses: [
      {
        text: "That's a fair concern, and honestly, some restaurant owners have had bad experiences. Can I ask — is that based on something you went through, or something you've heard? I want to address the real issue, not give you a generic answer.",
        correct: true,
        technique: 'Curiosity Hook',
        feedback: "You validate his distrust, distinguish between personal experience and hearsay, and show you want to have a real conversation rather than bulldoze past his concern.",
      },
      {
        text: "We're not like those other apps. Uber Eats actually cares about restaurant partners.",
        correct: false,
        feedback: "Empty reassurance without evidence sounds like exactly the kind of thing someone taking advantage would say.",
      },
      {
        text: "I hear you. Let me show you our commission structure — it's very transparent.",
        correct: false,
        feedback: "Jumping to commission details before understanding his specific concern misses the emotional root of his objection.",
      },
      {
        text: "That's a shame you feel that way. A lot of restaurants are doing really well with us.",
        correct: false,
        feedback: "Dismissing his feelings with 'that's a shame' and generic social proof won't overcome deep-seated distrust.",
      },
    ],
  },

  it14: {
    objection: "You're the third person this month from Uber Eats. Don't you people talk to each other?",
    responses: [
      {
        text: "That's on us, and I apologize. Let me make sure that doesn't happen again — I'll flag your restaurant in our system right now. Since I'm here, can I at least ask what the other reps said that didn't resonate? I'd rather not repeat their mistakes.",
        correct: true,
        technique: 'Empathy Opener',
        feedback: "You own the mistake, offer a concrete fix, and turn the frustration into an opportunity to learn what didn't work — differentiating yourself from the previous reps.",
      },
      {
        text: "I'm sorry about that. I promise I'm the right person to talk to this time.",
        correct: false,
        feedback: "Claiming you're 'the right person' without evidence sounds like more of the same disorganization.",
      },
      {
        text: "I'm not sure what happened with the other reps, but let me start fresh. Here's what Uber Eats can offer you.",
        correct: false,
        feedback: "Ignoring the coordination failure and launching into a pitch shows you don't take his frustration seriously.",
      },
      {
        text: "That's really unusual — I'll look into it. In the meantime, let me tell you about our current promotions.",
        correct: false,
        feedback: "Brushing past the issue to pivot to promotions feels tone-deaf.",
      },
    ],
  },

  it15: {
    objection: "I already said no to the last guy. What part of 'no' don't you understand?",
    responses: [
      {
        text: "You're right to be frustrated, and I respect that. I'm not here to pitch — I actually just wanted to understand what turned you off. Was it the commission, the concept, or something else? Whatever you tell me, I'll make sure we stop reaching out if that's what you want.",
        correct: true,
        technique: 'Permission to Continue',
        feedback: "You give him full control, lower the stakes by making it about feedback rather than a sale, and offer a genuine exit — which paradoxically makes him more likely to engage.",
      },
      {
        text: "I apologize. I wasn't aware of the previous conversation. I'll leave you alone.",
        correct: false,
        feedback: "Full retreat means you lose any chance to salvage the relationship or understand the real objection.",
      },
      {
        text: "The last rep might not have had the full picture. Things have changed recently — can I share what's new?",
        correct: false,
        feedback: "Undermining a colleague to justify re-pitching feels manipulative.",
      },
      {
        text: "I understand. But just so you know, we have new lower commission rates that might change your mind.",
        correct: false,
        feedback: "Leading with 'but' after someone says no signals you weren't really listening.",
      },
    ],
  },

  it16: {
    objection: "My customers come here for the experience. Delivery ruins that.",
    responses: [
      {
        text: "One hundred percent — the dine-in experience is what built your reputation. The owners I work with who think like you actually use delivery differently: they create a smaller, travel-friendly menu that protects the brand. Would you be open to seeing how a restaurant like yours did that?",
        correct: true,
        technique: 'Specificity Hook',
        feedback: "You validate his brand concern, introduce the concept of a curated delivery menu, and offer a concrete example — making delivery feel brand-safe.",
      },
      {
        text: "Delivery doesn't have to ruin the experience. A lot of restaurants do both successfully.",
        correct: false,
        feedback: "Generic reassurance doesn't address his specific concern about his unique dining experience.",
      },
      {
        text: "That's a great point. Maybe delivery isn't right for you.",
        correct: false,
        feedback: "Agreeing too quickly without exploring options leaves potential value on the table.",
      },
      {
        text: "Actually, our packaging options are really good. The food arrives just like it would on the plate.",
        correct: false,
        feedback: "Jumping to packaging solutions misses the deeper point about his brand identity and customer experience.",
      },
    ],
  },

  it17: {
    objection: "Send me an email. I'll read it when I have time.",
    responses: [
      {
        text: "Happy to. What's the best email? And so it doesn't get lost in your inbox, I'll keep it to three bullet points with delivery data specific to your area. Is there anything in particular you'd want me to include?",
        correct: true,
        technique: 'Permission to Continue',
        feedback: "You comply with his request, promise brevity and relevance, and ask what he cares about — making the email a collaborative step rather than a brush-off.",
      },
      {
        text: "Sure, but honestly emails tend to get lost. Can we just chat for two minutes now?",
        correct: false,
        feedback: "Rejecting his preferred communication channel shows you value your convenience over his.",
      },
      {
        text: "Of course. I'll send something over today.",
        correct: false,
        feedback: "Without asking what to include or setting a follow-up, the email becomes a dead end.",
      },
      {
        text: "I'd rather show you in person — it's more impactful. When can I come back?",
        correct: false,
        feedback: "Overriding his preference for a low-commitment channel with a high-commitment ask feels pushy.",
      },
    ],
  },

  it18: {
    objection: "I don't have time for this. We're short-staffed as it is.",
    responses: [
      {
        text: "Being short-staffed is brutal — I hear that from a lot of owners right now. Quick thought: what if delivery actually helped with that? Some restaurants use it to increase revenue without needing more front-of-house staff since there's no table service involved. Worth a five-minute conversation later this week?",
        correct: true,
        technique: 'Curiosity Hook',
        feedback: "You empathize with a real pain point and reframe delivery as a solution to his staffing problem rather than an additional burden.",
      },
      {
        text: "I totally understand. Let me know when things settle down.",
        correct: false,
        feedback: "Staffing issues don't 'settle down' — you're deferring indefinitely with no follow-up plan.",
      },
      {
        text: "This would only take a few minutes of your time, and it could really help.",
        correct: false,
        feedback: "Minimizing his time concern when he's clearly overwhelmed feels dismissive.",
      },
      {
        text: "What if I told you Uber Eats basically runs itself once it's set up?",
        correct: false,
        feedback: "Overselling ease-of-use when he's stressed about staffing sounds like an empty promise.",
      },
    ],
  },

  it19: {
    objection: "I had a bad experience with a delivery driver last year. Food arrived cold and the customer blamed us.",
    responses: [
      {
        text: "That's exactly the kind of thing that would make me hesitant too. Can I ask which platform that was on? We've invested heavily in driver accountability — including real-time tracking and customer refund protections that keep the blame off the restaurant. I can show you how it works in two minutes.",
        correct: true,
        technique: 'Immediate Credibility',
        feedback: "You validate the experience, ask a clarifying question, and introduce specific features that address his exact concern — cold food and misplaced blame.",
      },
      {
        text: "That won't happen with Uber Eats. Our drivers are the best in the business.",
        correct: false,
        feedback: "Blanket guarantees about driver quality aren't credible and don't address his specific bad experience.",
      },
      {
        text: "Sorry to hear that. Unfortunately, that's a risk with any delivery platform.",
        correct: false,
        feedback: "Admitting the problem exists without offering a solution just reinforces his reason to avoid delivery.",
      },
      {
        text: "Was that with us or a competitor?",
        correct: false,
        feedback: "Just asking which platform without empathy or a solution feels like you're deflecting blame rather than helping.",
      },
    ],
  },

  it20: {
    objection: "We only do dine-in. That's our whole model.",
    responses: [
      {
        text: "And clearly it works — your place is packed. I'm curious though: do you ever get calls from people asking if you deliver? Or reviews mentioning they wish they could get your food at home?",
        correct: true,
        technique: 'Curiosity Hook',
        feedback: "You compliment his success, then ask questions that help him discover unmet demand himself — which is more persuasive than you telling him the demand exists.",
      },
      {
        text: "Dine-in is great, but you're missing a huge revenue stream by not offering delivery.",
        correct: false,
        feedback: "Telling him he's missing out feels like criticizing a model that's clearly working for him.",
      },
      {
        text: "A lot of dine-in restaurants have added delivery and it hasn't hurt their core business at all.",
        correct: false,
        feedback: "Generic reassurance without asking about his specific situation doesn't create engagement.",
      },
      {
        text: "Got it. If you ever change your mind, here's my card.",
        correct: false,
        feedback: "Accepting 'no' without any curiosity or exploration wastes the interaction.",
      },
    ],
  },

  it21: {
    objection: "You want me to give you a cut of every order? That's my hard-earned money.",
    responses: [
      {
        text: "I respect that — every dollar matters when you're running a restaurant. The way our best partners think about it: the commission is on orders you wouldn't have gotten otherwise. These are new customers who found you on the app, not your regulars switching channels. Does that distinction make sense?",
        correct: true,
        technique: 'Immediate Credibility',
        feedback: "You honor his concern about margins and reframe the commission as a customer acquisition cost on incremental revenue rather than a tax on existing sales.",
      },
      {
        text: "It's actually not that much when you break it down per order. Let me show you.",
        correct: false,
        feedback: "Minimizing his concern about money feels dismissive of a legitimate business objection.",
      },
      {
        text: "Every delivery platform charges commission. Ours is competitive.",
        correct: false,
        feedback: "Comparing to competitors doesn't address the fundamental objection about paying a cut at all.",
      },
      {
        text: "Think of it as a marketing expense. You'd pay for ads anyway.",
        correct: false,
        feedback: "Relabeling the cost without explaining the incremental value sounds like a rhetorical trick.",
      },
    ],
  },

  it22: {
    objection: "Talk to my manager, Maria. She handles all this. I'm just the cook.",
    responses: [
      {
        text: "You're the cook? Then you're the most important person here. Is Maria around right now, or is there a good time to catch her? I'd love to talk to both of you — she handles the business side, but your menu is what makes this work.",
        correct: true,
        technique: 'Gatekeeper Navigation',
        feedback: "You elevate his role, ask for Maria's availability, and position the conversation as needing both perspectives — making him an ally rather than a barrier.",
      },
      {
        text: "Sure, where's Maria? I'll go find her.",
        correct: false,
        feedback: "Immediately ditching the person you're talking to feels transactional and rude.",
      },
      {
        text: "Actually, this affects the kitchen too. Can I talk to you about how delivery orders work?",
        correct: false,
        feedback: "Overriding his redirect to Maria when he explicitly told you who to talk to feels pushy.",
      },
      {
        text: "Okay, can you have Maria call me? Here's my number.",
        correct: false,
        feedback: "Asking one person to relay your info to another rarely results in a callback.",
      },
    ],
  },

  it23: {
    objection: "I've been burned by salespeople before. I don't trust any of you.",
    responses: [
      {
        text: "That's fair — and I'd feel the same way. I'm not going to ask you to trust me based on a conversation. What I can do is show you real data from restaurants in your area — numbers you can verify yourself. Would you be open to that?",
        correct: true,
        technique: 'Immediate Credibility',
        feedback: "You validate his distrust, remove yourself as the thing he needs to trust, and offer verifiable evidence — shifting trust from you to data.",
      },
      {
        text: "I promise I'm one of the good ones. Let me prove it to you.",
        correct: false,
        feedback: "Every untrustworthy salesperson makes this exact promise.",
      },
      {
        text: "I'm sorry you've had bad experiences. Uber Eats is a big, reputable company — you can trust us.",
        correct: false,
        feedback: "Citing company size as a reason to trust doesn't address his personal experience with salespeople.",
      },
      {
        text: "I understand. No pressure — take my card and reach out if you ever want to chat.",
        correct: false,
        feedback: "Retreating completely means his distrust wins and you never get the chance to earn credibility.",
      },
    ],
  },

  it24: {
    objection: "You want me to pay to be on an app? I already have a website.",
    responses: [
      {
        text: "How's the website working for orders — are you getting much traffic? A lot of owners I work with have a site but find that the app brings in a completely different customer base, people searching for food nearby who've never heard of you yet.",
        correct: true,
        technique: 'Curiosity Hook',
        feedback: "You ask about his website's performance, which often reveals a gap, and position the app as additive rather than a replacement.",
      },
      {
        text: "A website is great, but Uber Eats gives you access to millions of users.",
        correct: false,
        feedback: "Dismissing his website to tout your user base feels competitive rather than collaborative.",
      },
      {
        text: "Your website doesn't have the same reach. Most people search for food on apps, not Google.",
        correct: false,
        feedback: "Criticizing his existing investment creates defensiveness rather than openness.",
      },
      {
        text: "We're not really competing with your website — we're a different channel entirely.",
        correct: false,
        feedback: "While true, this is too abstract without a concrete example of how the channels differ.",
      },
    ],
  },

  it25: {
    objection: "We're a small operation. We can't handle a bunch of delivery orders on top of dine-in.",
    responses: [
      {
        text: "That's actually one of the best things about the platform — you control everything. You can set your own hours, pause orders during your rush, and cap how many delivery orders come in per hour. Want me to show you how the throttle works?",
        correct: true,
        technique: 'Immediate Credibility',
        feedback: "You directly address the overwhelm fear by showing that he controls the volume, and offer to demonstrate the specific feature.",
      },
      {
        text: "You'd be surprised — most small restaurants handle it fine once they get the hang of it.",
        correct: false,
        feedback: "Dismissing his concern about capacity with 'you'd be surprised' doesn't address the real operational worry.",
      },
      {
        text: "Delivery orders are usually smaller and simpler. They won't overwhelm your kitchen.",
        correct: false,
        feedback: "Generalizing about order complexity without knowing his menu or kitchen setup isn't credible.",
      },
      {
        text: "You could hire one extra person to handle delivery orders. The revenue would cover it.",
        correct: false,
        feedback: "Suggesting he hire someone contradicts his concern about being a small operation with limited bandwidth.",
      },
    ],
  },

  it26: {
    objection: "I've got a line out the door already. Why would I need more customers?",
    responses: [
      {
        text: "A line out the door is a great problem to have. Here's the thing though — delivery customers don't take up tables, don't need servers, and order during your slow hours too. It's revenue that doesn't compete with your dine-in. Curious what your Tuesday afternoons look like?",
        correct: true,
        technique: 'Curiosity Hook',
        feedback: "You compliment his success, reframe delivery as non-competing revenue, and probe for slow periods where delivery could fill gaps.",
      },
      {
        text: "That's great now, but what happens when things slow down? Delivery is a safety net.",
        correct: false,
        feedback: "Implying his business might decline feels pessimistic and borderline insulting.",
      },
      {
        text: "More customers means more money. Why would you turn that down?",
        correct: false,
        feedback: "Oversimplifying ignores legitimate capacity concerns and comes across as tone-deaf.",
      },
      {
        text: "That's awesome. Sounds like you don't need us right now. I'll check back later.",
        correct: false,
        feedback: "Accepting the brush-off without exploring the opportunity misses the fact that high demand is actually the ideal time to add delivery.",
      },
    ],
  },

  it27: {
    objection: "Last delivery company said they'd bring in 50 orders a week. We got maybe 5.",
    responses: [
      {
        text: "That's frustrating — and honestly, overpromising is the worst thing a rep can do. I won't give you a made-up number. What I can show you is the actual order volume for restaurants similar to yours in this zip code, and you can decide if it's worth it based on real data. Fair?",
        correct: true,
        technique: 'Immediate Credibility',
        feedback: "You call out the bad practice, distance yourself from it by offering verified local data instead of projections, and ask for permission to continue.",
      },
      {
        text: "Uber Eats has a much larger customer base than other platforms, so you'd see a lot more orders.",
        correct: false,
        feedback: "Making big promises right after he told you the last company overpromised is tone-deaf.",
      },
      {
        text: "Which platform was that? Some of the smaller ones really underdeliver.",
        correct: false,
        feedback: "Bashing competitors doesn't address his core concern — he's worried about being lied to again.",
      },
      {
        text: "I can guarantee you'll get more than 5 orders a week with us.",
        correct: false,
        feedback: "Making guarantees after he was burned by guarantees destroys any chance of trust.",
      },
    ],
  },

  it28: {
    objection: "My food doesn't travel well. Pasta gets soggy, pizza gets cold.",
    responses: [
      {
        text: "You're thinking about this the right way — food quality matters. Some of our best Italian partners created a delivery-specific menu: dishes that travel great like baked ziti, arancini, and paninis. Would you be open to seeing what they chose and how it's working?",
        correct: true,
        technique: 'Specificity Hook',
        feedback: "You validate his quality concern, offer concrete menu examples that address the travel problem, and propose showing real results.",
      },
      {
        text: "Our drivers are fast. The food usually arrives hot.",
        correct: false,
        feedback: "This doesn't address the fundamental issue of certain dishes not traveling well regardless of speed.",
      },
      {
        text: "You could invest in better packaging. That solves most travel issues.",
        correct: false,
        feedback: "Asking him to spend more money to solve a problem he didn't ask to have feels like adding cost, not value.",
      },
      {
        text: "Plenty of Italian restaurants do delivery — it works fine.",
        correct: false,
        feedback: "Dismissing his specific concern with a generic claim doesn't respect his culinary standards.",
      },
    ],
  },

  it29: {
    objection: "My wife handles the business side. She's not here right now.",
    responses: [
      {
        text: "She sounds like the right person to talk to. While she's out — what's your sense? Is delivery something you two have ever talked about, or is this completely off the radar? And when does she usually come in?",
        correct: true,
        technique: 'Gatekeeper Navigation',
        feedback: "You respect the decision-making structure, gauge his personal interest, and get timing intel — all in one natural response.",
      },
      {
        text: "Can I get her phone number to set something up?",
        correct: false,
        feedback: "Asking for a spouse's phone number from someone you just met feels intrusive.",
      },
      {
        text: "No problem. I'll leave my card for her.",
        correct: false,
        feedback: "A card with no context or built curiosity won't motivate a callback.",
      },
      {
        text: "Well, maybe I can convince you and then you can convince her?",
        correct: false,
        feedback: "This undermines their partnership dynamic and could create friction in their relationship.",
      },
    ],
  },

  it30: {
    objection: "We tried online ordering during COVID and shut it off. Too many problems.",
    responses: [
      {
        text: "COVID online ordering was a mess for a lot of restaurants — everyone was scrambling. Things look really different now. Can I ask what the biggest headache was? Incorrect orders, late deliveries, customer complaints? I want to know if the specific problem you had has actually been fixed.",
        correct: true,
        technique: 'Curiosity Hook',
        feedback: "You validate the COVID chaos, acknowledge it was different, and drill into the specific problem — which you can then address if it's been solved.",
      },
      {
        text: "COVID was a tough time for everyone. But the technology has improved a lot since then.",
        correct: false,
        feedback: "Vague claims about improvement don't address his specific bad experience.",
      },
      {
        text: "That's understandable. Maybe you should give it another try now that things have settled down.",
        correct: false,
        feedback: "'Give it another try' without addressing what went wrong sounds like you want him to repeat a mistake.",
      },
      {
        text: "What platform were you using? That might have been the problem, not delivery itself.",
        correct: false,
        feedback: "Blaming the platform without understanding his specific issues feels deflective.",
      },
    ],
  },

  it31: {
    objection: "I don't even know what Uber Eats is, honestly. I don't use these apps.",
    responses: [
      {
        text: "That's totally fine — you don't need to use the app to benefit from it. Think of it this way: right now, about 2,000 people in your neighborhood open food delivery apps every evening looking for dinner. Your restaurant could show up in front of all of them. Would it help if I showed you what it looks like from the customer's side?",
        correct: true,
        technique: '30-Second Pitch',
        feedback: "You normalize his unfamiliarity, translate the app into simple terms he can relate to, use a local number, and offer a visual demo.",
      },
      {
        text: "Really? It's one of the biggest apps in the world. You should download it and check it out.",
        correct: false,
        feedback: "Making him feel out of touch is the opposite of building rapport.",
      },
      {
        text: "It's a food delivery app. Customers order from your menu and we deliver it to them.",
        correct: false,
        feedback: "While accurate, this bare-bones explanation doesn't create any excitement or show specific value.",
      },
      {
        text: "You don't need to know the details. I'll handle everything for you.",
        correct: false,
        feedback: "Being dismissive of his knowledge gap and promising to 'handle everything' sounds condescending.",
      },
    ],
  },

  it32: {
    objection: "I just signed a lease and I'm barely keeping the lights on. I can't add any expenses right now.",
    responses: [
      {
        text: "Starting up is the hardest part — I respect the hustle. Here's the thing: there's no upfront cost to join. You only pay a commission when an order comes in, which means you're only paying when you're making money. Would it help to see what new restaurants in your situation typically earn in their first month?",
        correct: true,
        technique: 'Immediate Credibility',
        feedback: "You empathize with his financial stress, clarify there's no upfront cost, and offer relevant first-month data for new restaurants.",
      },
      {
        text: "That's exactly why you need Uber Eats — to bring in more revenue.",
        correct: false,
        feedback: "Telling someone who's financially stressed that they need to spend more feels tone-deaf.",
      },
      {
        text: "I understand. When things stabilize, give us a call.",
        correct: false,
        feedback: "A new restaurant is actually the ideal time to add delivery — waiting means missing early momentum.",
      },
      {
        text: "We have financing options that can help.",
        correct: false,
        feedback: "Suggesting financing to someone who just said they can barely keep the lights on adds pressure, not value.",
      },
    ],
  },

  it33: {
    objection: "I want to support local businesses, not big tech companies.",
    responses: [
      {
        text: "I actually love that mindset. Here's something you might not know — when someone in your neighborhood opens Uber Eats and searches for Italian food, your restaurant shows up alongside the big chains. We actually level the playing field for local places like yours. The money goes to you, not to a franchiser across the country.",
        correct: true,
        technique: 'Specificity Hook',
        feedback: "You honor his values, reframe the platform as a tool that helps local businesses compete against chains, and redirect the 'big tech' concern.",
      },
      {
        text: "We're not that different from a local service. We just operate at scale.",
        correct: false,
        feedback: "Comparing yourself to a local business when he just criticized big tech isn't credible.",
      },
      {
        text: "I understand the sentiment, but in business, you have to use the tools available to grow.",
        correct: false,
        feedback: "Dismissing his values as sentiment rather than a valid business philosophy is condescending.",
      },
      {
        text: "A lot of local business owners use Uber Eats. It's not just big tech.",
        correct: false,
        feedback: "This doesn't address his concern — it just deflects it.",
      },
    ],
  },

  it34: {
    objection: "I saw on the news that restaurants are suing Uber Eats over fees.",
    responses: [
      {
        text: "I've seen those stories too, and I want to be straight with you — some of those lawsuits were about fee caps during COVID, which was a unique situation. Today, our fee structure is fully negotiable and transparent. I can walk you through exactly what you'd pay and what you'd keep. Want to see the math for a restaurant your size?",
        correct: true,
        technique: 'Immediate Credibility',
        feedback: "You acknowledge the news honestly, provide context, and offer to show him the specific numbers — transparency is the antidote to bad press.",
      },
      {
        text: "That's old news. Things have changed a lot since then.",
        correct: false,
        feedback: "Dismissing something he saw on the news as 'old' feels evasive.",
      },
      {
        text: "Those lawsuits are from a small number of restaurants. Most of our partners are happy.",
        correct: false,
        feedback: "Minimizing legitimate legal disputes sounds like corporate spin.",
      },
      {
        text: "I'm not really the right person to comment on legal matters.",
        correct: false,
        feedback: "Dodging the question entirely destroys trust and makes it seem like there's something to hide.",
      },
    ],
  },

  it35: {
    objection: "Every dollar I give you is a dollar less for my staff.",
    responses: [
      {
        text: "Your staff matters — that's clear. Let me reframe this: delivery orders are new revenue from customers who weren't going to walk in and sit down. If those orders bring in even $3,000 a month in new business, that's more money flowing through your kitchen and more hours for your team, not less. Can I show you what that looks like?",
        correct: true,
        technique: 'Specificity Hook',
        feedback: "You honor his loyalty to his team and reframe delivery revenue as additive — creating more work and more income for staff, not less.",
      },
      {
        text: "Actually, restaurants on our platform often end up hiring more staff because of increased volume.",
        correct: false,
        feedback: "Suggesting he'd need to hire more people when he's worried about paying current staff misreads the situation.",
      },
      {
        text: "The commission is a business expense, not a deduction from staff pay.",
        correct: false,
        feedback: "Being technically correct but emotionally dismissive doesn't address his real concern about his team.",
      },
      {
        text: "You could raise your delivery prices slightly to offset the commission.",
        correct: false,
        feedback: "Suggesting price increases before he's even agreed to the concept adds complexity to an already uncertain decision.",
      },
    ],
  },

  it36: {
    objection: "I need to focus on my dine-in customers. They're my priority.",
    responses: [
      {
        text: "As they should be. What if delivery actually helped your dine-in business? Here's what I mean — people discover you on the app, try your food for the first time through delivery, and then come in for the full experience. We see that pattern constantly. Would you like to see the data on that?",
        correct: true,
        technique: 'Curiosity Hook',
        feedback: "You validate his priority and introduce the concept of delivery as a customer acquisition channel for dine-in — flipping his objection into a benefit.",
      },
      {
        text: "You can do both. Delivery doesn't take away from dine-in.",
        correct: false,
        feedback: "A flat assertion without evidence doesn't address his real concern about splitting his attention.",
      },
      {
        text: "Dine-in is great, but you're limiting your revenue by not offering delivery.",
        correct: false,
        feedback: "Telling him he's limiting himself when he's stated a clear priority feels like you're not listening.",
      },
      {
        text: "Your dine-in customers might actually want to order delivery sometimes too.",
        correct: false,
        feedback: "Suggesting his regulars switch to delivery — where he makes less — isn't a compelling argument.",
      },
    ],
  },

  it37: {
    objection: "I'm 65 years old. I'm not learning new technology.",
    responses: [
      {
        text: "I get it — and you shouldn't have to. The setup takes about twenty minutes, and I do all of it. After that, orders just print out like a receipt. No app to check, no software to learn. If your team can read a ticket, they can handle delivery orders. Want to see a sample printout?",
        correct: true,
        technique: 'Empathy Opener',
        feedback: "You remove the tech barrier by showing that the workflow is as simple as reading a kitchen ticket — something he's done for decades.",
      },
      {
        text: "It's actually really easy to use. Even people who aren't tech-savvy pick it up quickly.",
        correct: false,
        feedback: "Saying 'even people who aren't tech-savvy' can feel patronizing to someone who just stated their limitation.",
      },
      {
        text: "Maybe your son or daughter could help you manage it?",
        correct: false,
        feedback: "Suggesting he needs family help undermines his independence and authority over his business.",
      },
      {
        text: "Age is just a number! I've set up restaurants with owners even older than you.",
        correct: false,
        feedback: "Commenting on his age and comparing him to others is dismissive and potentially offensive.",
      },
    ],
  },

  it38: {
    objection: "Your company keeps changing the rules. How do I know you won't raise the fees next year?",
    responses: [
      {
        text: "That's a smart question. The rates are locked in your contract for the term you sign. I can show you the exact clause. And honestly, if you're ever unhappy, you can turn off the tablet and stop orders anytime — there's no penalty for pausing. Does that level of control change how you think about it?",
        correct: true,
        technique: 'Immediate Credibility',
        feedback: "You point to a contractual guarantee, add the safety valve of pausing anytime, and ask if that addresses the concern — giving him concrete protections.",
      },
      {
        text: "I can't predict the future, but our rates have been stable for a while now.",
        correct: false,
        feedback: "This actually confirms his fear — you're admitting you can't guarantee rate stability.",
      },
      {
        text: "Uber Eats is committed to being fair to restaurant partners.",
        correct: false,
        feedback: "Corporate platitudes don't address a specific concern about fee increases.",
      },
      {
        text: "Every business adjusts pricing over time. That's normal.",
        correct: false,
        feedback: "Normalizing the very thing he's worried about makes him feel like fee hikes are inevitable.",
      },
    ],
  },

  it39: {
    objection: "I'm not giving you my Social Security number or bank info to sign up.",
    responses: [
      {
        text: "Completely fair — protecting your information matters. Here's what I can do: I'll walk you through the entire signup process right now so you can see exactly what's asked and why before you enter anything. The bank info is just for direct deposits of your earnings. No surprises. Want to take a look together?",
        correct: true,
        technique: 'Immediate Credibility',
        feedback: "You validate the concern, offer transparency by previewing the process, and explain the purpose of each piece of information.",
      },
      {
        text: "It's completely secure. We use bank-level encryption.",
        correct: false,
        feedback: "Jumping to security features without addressing his emotional discomfort misses the point.",
      },
      {
        text: "We need that information for tax purposes. It's required by law.",
        correct: false,
        feedback: "While true, citing legal requirements sounds threatening rather than reassuring.",
      },
      {
        text: "Every business you work with has your bank info — your landlord, your suppliers.",
        correct: false,
        feedback: "Comparing yourself to established relationships he already trusts doesn't help when he doesn't trust you yet.",
      },
    ],
  },

  it40: {
    objection: "I just lost my head chef. I can't even think about this right now.",
    responses: [
      {
        text: "Losing a head chef is a crisis — I'm sorry to hear that. I'm not going to pitch you right now. Can I check back in three weeks? And if there's anything I can do to help in the meantime — like connecting you with restaurant owners in the area who might know someone — I'm happy to do that.",
        correct: true,
        technique: 'Empathy Opener',
        feedback: "You acknowledge the real crisis, defer the pitch appropriately, set a specific follow-up timeline, and offer genuine non-sales help — building trust for later.",
      },
      {
        text: "That's tough. But delivery could actually help offset the revenue loss while you're short-staffed.",
        correct: false,
        feedback: "Trying to sell during a genuine crisis feels exploitative.",
      },
      {
        text: "I understand. Take your time and call me when things settle.",
        correct: false,
        feedback: "No follow-up date means this lead dies.",
      },
      {
        text: "Sorry to hear that. Are you still open for business though?",
        correct: false,
        feedback: "Asking if he's still open feels insensitive and self-serving.",
      },
    ],
  },

  it41: {
    objection: "I already told your colleague I'd think about it. That was two months ago.",
    responses: [
      {
        text: "Two months is a long time and I don't want to be annoying. Can I ask honestly — did you think about it and decide no, or did it just fall off your plate? Either answer is fine. I just want to know where you stand.",
        correct: true,
        technique: 'Permission to Continue',
        feedback: "You acknowledge the time gap, ask directly without pressure, and give him permission to say no — which paradoxically often leads to re-engagement.",
      },
      {
        text: "Great — so you're already familiar with what we offer. Are you ready to move forward?",
        correct: false,
        feedback: "Assuming familiarity and pushing to close after a two-month gap is presumptuous.",
      },
      {
        text: "My colleague should have followed up sooner. Let me pick up where they left off.",
        correct: false,
        feedback: "Criticizing your colleague doesn't build trust in your organization.",
      },
      {
        text: "A lot has changed in two months. We have new features and better rates now.",
        correct: false,
        feedback: "Jumping to new features without first understanding where he landed on his decision is tone-deaf.",
      },
    ],
  },

  it42: {
    objection: "You know what, I'm actually about to sell this place. So it doesn't make sense.",
    responses: [
      {
        text: "That's a big move — congratulations. Or condolences, depending on how you feel about it. Quick thought though: if you're selling, having an active delivery channel with steady revenue actually increases the business valuation. Buyers pay more for diversified revenue streams. Worth considering?",
        correct: true,
        technique: 'Curiosity Hook',
        feedback: "You acknowledge the life change, then reframe delivery as something that increases his sale price — turning a deal-killer into a compelling reason to sign up.",
      },
      {
        text: "Ah, that's too bad. Good luck with the sale.",
        correct: false,
        feedback: "You miss an opportunity to show how delivery could increase business value before a sale.",
      },
      {
        text: "Who's buying it? Maybe I should talk to them instead.",
        correct: false,
        feedback: "Immediately trying to go around him to the buyer is disrespectful.",
      },
      {
        text: "Even more reason to boost revenue now — you'll get a better price.",
        correct: false,
        feedback: "The idea is right but the delivery is too blunt and salesy for someone going through a major life transition.",
      },
    ],
  },

  it43: {
    objection: "I just don't like the idea of strangers picking up my food. What if they mess it up?",
    responses: [
      {
        text: "That's a valid concern — your name is on every dish that leaves this kitchen. Here's how we handle it: orders are sealed, tamper-evident, and tracked in real time. If a driver does something wrong, the customer gets refunded by us, not you, and the driver is flagged. Your reputation stays protected. Want to see how the packaging works?",
        correct: true,
        technique: 'Immediate Credibility',
        feedback: "You validate his brand concern and lay out the specific protections — sealed packaging, tracking, Uber-funded refunds, and driver accountability.",
      },
      {
        text: "Our drivers are professional and rated by customers. Bad ones get removed.",
        correct: false,
        feedback: "Generic claims about driver quality don't address his specific worry about food handling.",
      },
      {
        text: "You can't control everything. At some point you have to trust the system.",
        correct: false,
        feedback: "Telling a restaurant owner to 'let go of control' is the wrong approach for someone who takes pride in every plate.",
      },
      {
        text: "That rarely happens. Most deliveries go smoothly.",
        correct: false,
        feedback: "Minimizing his concern with 'rarely' doesn't reassure a quality-focused owner.",
      },
    ],
  },

  it44: {
    objection: "Is this going to mess up my kitchen flow? We have a system that works.",
    responses: [
      {
        text: "I wouldn't want to disrupt what's working. The way most kitchens handle it: delivery orders come in on a separate tablet, you set your own prep time per dish, and during your rush you can pause incoming orders with one tap. It fits around your system, not the other way around. Want to see the tablet in action?",
        correct: true,
        technique: 'Immediate Credibility',
        feedback: "You show exactly how delivery integrates without disrupting his workflow — separate device, custom prep times, and a pause button during rushes.",
      },
      {
        text: "It actually streamlines things. A lot of kitchens say it's easier than they expected.",
        correct: false,
        feedback: "Vague reassurance doesn't address his specific concern about disrupting an existing system.",
      },
      {
        text: "You might need to adjust your workflow a bit, but it's worth it for the extra revenue.",
        correct: false,
        feedback: "Admitting workflow disruption and dismissing it with 'it's worth it' won't work for someone who values their system.",
      },
      {
        text: "The orders are pretty straightforward. Your team will adapt quickly.",
        correct: false,
        feedback: "Assuming his team will adapt without explaining how shows you don't understand kitchen operations.",
      },
    ],
  },

  it45: {
    objection: "I went to your website and the signup process looked complicated. I gave up halfway through.",
    responses: [
      {
        text: "I'm glad you tried — and sorry that was frustrating. That's actually why I'm here in person. I can complete the entire setup with you in about fifteen minutes, right now or whenever works. You tell me the menu items, I handle the rest. When would be a good time to sit down together?",
        correct: true,
        technique: 'Empathy Opener',
        feedback: "You validate his frustration, position your in-person visit as the solution, and offer to do the heavy lifting — removing the exact barrier that stopped him.",
      },
      {
        text: "The signup process is actually pretty simple. Maybe you just got stuck on one part?",
        correct: false,
        feedback: "Suggesting the process is simple when he just told you it wasn't invalidates his experience.",
      },
      {
        text: "We've updated the website recently. Want to try again?",
        correct: false,
        feedback: "Sending him back to the thing that frustrated him is a missed opportunity to help directly.",
      },
      {
        text: "I can send you a guide that walks through each step.",
        correct: false,
        feedback: "More documentation doesn't solve the problem — he needs hands-on help, not more reading.",
      },
    ],
  },

  it46: {
    objection: "My nephew says these apps steal customer data. I don't want my customers' info going to some big company.",
    responses: [
      {
        text: "Your nephew is looking out for you. Here's the reality: you actually don't share your existing customer data with us at all. We bring you new customers from the app. And for those orders, you get what you need to fulfill them — nothing more, nothing less. Your regulars' info stays with you. Does that help clarify?",
        correct: true,
        technique: 'Immediate Credibility',
        feedback: "You respect the nephew's influence, directly address the data concern with facts, and clarify the separation between his existing customers and new app customers.",
      },
      {
        text: "That's not how it works at all. We don't steal anyone's data.",
        correct: false,
        feedback: "A flat denial without explanation sounds defensive and doesn't educate him on how data actually flows.",
      },
      {
        text: "With all due respect, your nephew might not fully understand how the platform works.",
        correct: false,
        feedback: "Dismissing a trusted family member's opinion creates an adversarial dynamic.",
      },
      {
        text: "Data privacy is important to us. We comply with all regulations.",
        correct: false,
        feedback: "Corporate compliance language doesn't address his specific concern in relatable terms.",
      },
    ],
  },

  it47: {
    objection: "I see you walking up and down this block. How many restaurants have you been rejected by today?",
    responses: [
      {
        text: "Ha — a few, honestly. But the ones who did talk to me had interesting questions about delivery trends in the neighborhood. I came to you because Rossi's keeps coming up as the place people want to order from but can't. Got sixty seconds for me to share what I'm seeing?",
        correct: true,
        technique: 'Pattern Interrupt',
        feedback: "You're honest and self-deprecating, then pivot to a compliment and a specific insight about unmet demand for his restaurant — making him curious despite himself.",
      },
      {
        text: "I've actually signed three restaurants today. Business is going well.",
        correct: false,
        feedback: "Bragging about signing competitors makes you look like you're playing restaurants against each other.",
      },
      {
        text: "Not many rejections, actually. Most owners are interested once they hear what we offer.",
        correct: false,
        feedback: "Being defensive about rejections instead of owning it with humor misses the rapport opportunity.",
      },
      {
        text: "I wouldn't call them rejections — more like 'not yet.' You'd be surprised how many come around.",
        correct: false,
        feedback: "Reframing his joke with corporate optimism kills the human moment.",
      },
    ],
  },

  it48: {
    objection: "Fine. You've got two minutes. Impress me.",
    responses: [
      {
        text: "Two minutes — let's go. There are 4,300 active Uber Eats users within two miles of here. Right now, when they search Italian food, your competitors show up and you don't. Based on restaurants your size in this area, you'd likely see 40 to 60 new orders a week, averaging $32 each. That's $5,000 to $7,500 a month in new revenue from customers who never would have walked in. I can show you exactly how to capture that. Worth a longer conversation?",
        correct: true,
        technique: '30-Second Pitch',
        feedback: "You fill the two minutes with hyperlocal data, specific numbers, a competitive gap, and a clear revenue projection — ending with a close for a longer meeting.",
      },
      {
        text: "Great! So Uber Eats is a platform that connects restaurants with customers who want food delivered. We have millions of users, a great app, marketing support, and flexible plans.",
        correct: false,
        feedback: "Feature-listing wastes his two minutes without giving him any specific reason to care about his business.",
      },
      {
        text: "Okay, but two minutes isn't really enough. Can we schedule a proper meeting?",
        correct: false,
        feedback: "He's giving you a chance right now — asking for more time signals you can't deliver value concisely.",
      },
      {
        text: "I'd rather not rush this. Your business deserves more than a two-minute pitch.",
        correct: false,
        feedback: "While it sounds respectful, you're rejecting the opening he just gave you.",
      },
    ],
  },

  it49: {
    objection: "Let me guess — you're going to tell me how much money I'm losing by not being on your app.",
    responses: [
      {
        text: "Nope. You clearly know your business better than I do. What I'd rather do is ask you something: when customers in this area search for Italian food on delivery apps, who do you think shows up right now? Because I looked it up, and there's a gap I think you'd find interesting.",
        correct: true,
        technique: 'Pattern Interrupt',
        feedback: "You break his expectation by not doing what he predicted, show respect for his knowledge, and tease a specific competitive insight.",
      },
      {
        text: "Well... yes, actually. Because the numbers are pretty compelling. Can I share them?",
        correct: false,
        feedback: "Confirming his cynical prediction makes you predictable and easy to dismiss.",
      },
      {
        text: "Not exactly. I'm here to talk about opportunity, not loss.",
        correct: false,
        feedback: "Reframing 'loss' as 'opportunity' is semantics — he'll see through it immediately.",
      },
      {
        text: "I wouldn't put it that way, but there is real revenue potential here that you should know about.",
        correct: false,
        feedback: "Softening the language while still saying the same thing doesn't break his script.",
      },
    ],
  },

  it50: {
    objection: "You seem like a nice kid, but I've been doing this since before you were born. I don't need help.",
    responses: [
      {
        text: "I believe you — forty years of success speaks for itself. I'm not here to tell you how to run a restaurant. I wouldn't dare. What I do know is the delivery market in this zip code, and there's about $15,000 a month in Italian food delivery orders going to your competitors right now. That's the only thing I wanted to put on your radar. What you do with it is your call.",
        correct: true,
        technique: 'Specificity Hook',
        feedback: "You respect his expertise entirely, limit your claim to what you actually know (delivery data), share a specific competitive number, and leave the decision with him — preserving his authority.",
      },
      {
        text: "I may be young, but I know what I'm talking about. Let me show you the data.",
        correct: false,
        feedback: "Getting defensive about your age creates a power struggle instead of building rapport.",
      },
      {
        text: "Experience is great, but the market is changing. Even experienced owners need to adapt.",
        correct: false,
        feedback: "Telling a veteran he needs to adapt is condescending and triggers defensiveness.",
      },
      {
        text: "I totally respect your experience. I'm not trying to change anything — just offering a new tool.",
        correct: false,
        feedback: "This is polite but too vague — it doesn't give him a specific reason to engage further.",
      },
    ],
  },
