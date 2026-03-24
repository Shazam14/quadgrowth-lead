// ═══════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════

const QA_DATA = [
  // DISCOVERY
  { cat: "discovery", q: "What exactly does QuadGrowth do?", a: "We help dental clinics in Victoria attract more patients and fill their appointment books using AI-powered marketing. We combine local search optimisation, targeted digital advertising, and smart automation so your clinic shows up when patients in your area are searching for a dentist — and we make sure those patients actually book." },
  { cat: "discovery", q: "How is this different from what we're already doing?", a: "Most dental marketing is generic — basic Facebook ads or a set-and-forget Google campaign. We're different in three ways: we use AI to identify exactly which patients in your suburb are looking for a dentist right now, we personalise every touchpoint to your specific clinic, and we track every dollar back to actual bookings — not just clicks or impressions." },
  { cat: "discovery", q: "Why should we trust a new agency we've never heard of?", a: "That's a fair question. We're newer, which means you get more attention than you would from a large agency where you're just another account. What I can show you is exactly what we've built — our lead gen system, our process, and case studies from similar clinics. I'd rather prove it to you in the first 30 days than ask you to take it on faith." },
  { cat: "discovery", q: "Who is your typical client?", a: "Dental clinics across Victoria — from Melbourne CBD and inner suburbs like Fitzroy and Richmond, out to regional centres like Geelong, Ballarat, and Bendigo. We specifically work with clinic owners who have capacity to take on new patients but aren't yet consistently full. Sound like you?" },
  { cat: "discovery", q: "Do you work with other types of healthcare providers?", a: "Dental is our core focus to start, but QuadGrowth is built to serve all healthcare specialists — GPs, physios, chiropractors, cosmetic clinics. We're expanding as we grow. For now, dental clinics get our complete focus and the best results." },

  // OBJECTIONS
  { cat: "objection", q: "We've tried digital marketing before and it didn't work.", a: "I hear that a lot — and usually it comes down to one of three things: the targeting was too broad, the ads sent people to a generic website instead of a specific booking page, or there was no follow-up system. Can you tell me what you tried before? I'll be honest if I think the same thing will happen again, or I'll show you specifically what we'd do differently." },
  { cat: "objection", q: "We get most of our patients through word of mouth — we don't need marketing.", a: "Word of mouth is fantastic — it means your existing patients love you. But it's unpredictable. You can't turn it up when you have empty slots in three weeks. What we do is essentially build a reliable second channel that runs in the background, so you're never waiting on referrals to fill your schedule." },
  { cat: "objection", q: "We don't have time to deal with marketing on top of running the clinic.", a: "That's exactly why we handle everything. You get a monthly report and a brief catch-up call — that's all we ask of your time. The campaigns, the leads, the follow-ups — all managed by us. You just confirm the bookings when they come in." },
  { cat: "objection", q: "We already have someone doing our social media.", a: "Social media and patient acquisition are actually quite different. Social keeps your existing patients engaged, which is great. We focus on new patient acquisition — finding people who don't know you yet but are actively searching for a dentist in your area. The two work well together." },
  { cat: "objection", q: "Can you guarantee results?", a: "I won't make guarantees I can't keep — and any agency that promises you a specific number of patients before seeing your data is telling you what you want to hear. What I can commit to is full transparency — you'll see every campaign, every lead, every booking. And we have a 30-day out in our contract if you're not happy with the direction." },
  { cat: "objection", q: "We're not sure this is the right time.", a: "The best time to build a patient pipeline is before you need it. Empty slots three months from now are hard to fill in three months' time — it takes time to build momentum. That said, I'd rather understand what's holding you back. Is it budget, bandwidth, or something else?" },

  // PRICING
  { cat: "pricing", q: "How much does this cost?", a: "Our packages start from AUD 1,500 per month for a core local search and lead gen setup. Most clinics we work with are on AUD 2,500–4,000/month once we add paid advertising. To put it in perspective — if we bring you just 3–4 new patients a month, and the average dental patient is worth AUD 800–1,200 per year, the service more than pays for itself." },
  { cat: "pricing", q: "That's more than we expected. Can you do it cheaper?", a: "I understand. Let me ask — what's an empty appointment slot worth to your clinic? If it's AUD 300–500 per slot, and you have even 5–10 empty slots a week, that's real money leaving the building. Our pricing is set to be a fraction of that. But if budget is a genuine constraint, let's talk about what a smaller starting package looks like." },
  { cat: "pricing", q: "Do you charge setup fees?", a: "We have a one-time onboarding and setup fee which covers building your campaign structure, your local search profile, and your lead tracking. I'll send you a full breakdown — no surprises." },
  { cat: "pricing", q: "What's your contract length?", a: "We start with a 3-month minimum — that's the time it takes to build momentum, gather data, and start seeing consistent results. After that it's monthly rolling. We don't lock you into long contracts because we'd rather earn your renewal every month." },
  { cat: "pricing", q: "What do we actually get for that monthly fee?", a: "Every month you get: new patient campaigns running across Google and social, local search optimisation, AI-powered lead targeting, a full performance dashboard, and a monthly strategy call with me. You'll know exactly where every dollar went and what it returned." },

  // RESULTS
  { cat: "results", q: "How long does it take to see results?", a: "Honest answer — you'll start seeing lead activity within the first 2 weeks. Actual new patients in the chair usually starts weeks 3–6, as people book ahead. Consistent, predictable flow typically comes at the 60–90 day mark. We'll show you the data the whole way." },
  { cat: "results", q: "What kind of results have other clinics seen?", a: "Early clients have gone from around 60% appointment capacity to 90–95% within 6 weeks. Revenue increases of 30–40% in the first quarter are realistic for a clinic that has genuine capacity and a solid team. I'll share specific examples on our call." },
  { cat: "results", q: "How do you measure success?", a: "We track three things that actually matter to you: number of new patient enquiries, number of bookings confirmed, and estimated revenue generated. Not impressions, not clicks — actual patients. Everything is in a live dashboard you can check anytime." },
  { cat: "results", q: "What if we don't see results after the first month?", a: "One month isn't enough to judge — campaigns need data to optimise. But if by the end of month two you're seeing zero lead activity, we'll review everything together and if needed, restructure the approach at no extra charge. We stand behind our work." },

  // TECHNICAL
  { cat: "technical", q: "How does the AI part actually work?", a: "Our AI analyses search patterns in your suburb to identify people actively looking for a dentist — not just anyone online. It then serves them specific ads based on their intent, and personalises the message based on what we know about your clinic's strengths. It also automates follow-ups so leads don't fall through the cracks." },
  { cat: "technical", q: "Do we need to do anything technical on our end?", a: "Very little. We'll need access to your Google Business Profile, and if you're running a practice management system like Dental4Windows or Exact, we can discuss integration. Otherwise, we handle everything technical — you just receive a login to the dashboard." },
  { cat: "technical", q: "Is our patient data safe?", a: "Yes — we don't touch patient records at all. Our system works with anonymous intent data and public information. We're fully compliant with Australian Privacy Principles and the Spam Act 2003. We can provide our data handling policy in writing." },
  { cat: "technical", q: "What platforms do you advertise on?", a: "Primarily Google Search and Google Maps — that's where patients actively searching for a dentist in your area are. We supplement with Meta (Facebook/Instagram) for awareness campaigns. The mix depends on your goals and suburb demographics." },
];

const CHECKLIST_DATA = [
  {
    group: "🔍 Before the Discovery Call",
    items: [
      { title: "Research the clinic online", sub: "Google their name, check their website, count their reviews, see their rating", tag: "critical" },
      { title: "Check Meta Ad Library", sub: "Search clinic name at facebook.com/ads/library — are they running ads?", tag: "critical" },
      { title: "Google 'dentist [suburb]'", sub: "See where they rank — do they appear? Are competitors above them?", tag: "critical" },
      { title: "Note 2–3 specific gaps", sub: "Low reviews, no ads, outdated site, no booking widget — use these in the call", tag: "important" },
      { title: "Prepare your intro (30 seconds)", sub: "Who you are, what QuadGrowth does, why you're calling them specifically", tag: "important" },
      { title: "Have your Calendly link ready", sub: "For follow-up booking if they're interested", tag: "nice" },
    ]
  },
  {
    group: "📞 During the Discovery Call",
    items: [
      { title: "Ask about their current patient capacity", sub: "Are you generally full? How many empty slots per week on average?", tag: "critical" },
      { title: "Ask what's working and what isn't", sub: "Don't pitch until you understand their situation", tag: "critical" },
      { title: "Reference their specific gap", sub: "Use what you found in your research — makes the call feel personal", tag: "critical" },
      { title: "Listen more than you talk", sub: "Aim for 60/40 — 60% them talking, 40% you", tag: "important" },
      { title: "Confirm decision maker", sub: "Is the person you're speaking to the one who approves marketing spend?", tag: "important" },
      { title: "Set a clear next step before hanging up", sub: "Either a follow-up call, a proposal, or a confirmed start date", tag: "critical" },
    ]
  },
  {
    group: "📋 First Client Onboarding",
    items: [
      { title: "Send and confirm signed contract", sub: "Use DocuSign or equivalent — don't start work without a signed agreement", tag: "critical" },
      { title: "Confirm first payment received", sub: "First month's fee must be received before any work begins", tag: "critical" },
      { title: "Get access to Google Business Profile", sub: "Request Manager access — not Ownership", tag: "critical" },
      { title: "Complete onboarding questionnaire", sub: "Clinic name, services offered, target demographics, unique selling points", tag: "critical" },
      { title: "Set up client Airtable CRM record", sub: "Log all contact details, contract value, start date, renewal date", tag: "important" },
      { title: "Schedule kickoff call", sub: "30 minutes to align on goals, expectations, and communication cadence", tag: "important" },
      { title: "Set up reporting dashboard", sub: "Client should have access to live campaign metrics from Day 1", tag: "important" },
      { title: "Add client to Slack channel or comms thread", sub: "Agree on preferred communication method", tag: "nice" },
    ]
  },
  {
    group: "📅 Monthly Delivery Checklist",
    items: [
      { title: "Review campaign performance vs last month", sub: "Leads, bookings, CPL (cost per lead), and revenue generated", tag: "critical" },
      { title: "Optimise top campaigns — pause underperformers", sub: "Reallocate budget based on what's working", tag: "critical" },
      { title: "Send monthly report to client", sub: "Keep it simple: 3 wins, 1 challenge, next month's focus", tag: "critical" },
      { title: "Hold monthly strategy call", sub: "30 minutes max — clients don't want long calls", tag: "important" },
      { title: "Confirm invoice sent and payment received", sub: "Chase immediately if overdue — don't let it slide", tag: "critical" },
      { title: "Check Google Business Profile for new reviews", sub: "Flag any negative reviews to the client immediately", tag: "important" },
      { title: "Update Airtable with this month's metrics", sub: "Keep a running history — useful for retention and upsells", tag: "nice" },
    ]
  },
  {
    group: "🚀 Lead Gen Pipeline (Weekly)",
    items: [
      { title: "Run Outscraper pull for new clinics", sub: "Rotate suburbs — don't oversaturate the same area", tag: "important" },
      { title: "Check n8n workflow ran successfully", sub: "Verify no errors in last 7 days of executions", tag: "critical" },
      { title: "Review HOT leads in Airtable", sub: "Any with score 8+ that haven't been contacted yet?", tag: "critical" },
      { title: "Check Instantly.ai campaign stats", sub: "Open rate, reply rate, bounce rate — flag anything unusual", tag: "important" },
      { title: "Reply to any positive email responses within 24hrs", sub: "Speed of response is everything — book the call fast", tag: "critical" },
      { title: "Update lead statuses in Airtable", sub: "Move leads through: New → Contacted → Replied → Call Booked → Closed", tag: "important" },
    ]
  },
];

const SCRIPTS_DATA = [
  {
    icon: "📧",
    title: "Cold Email — First Touch",
    desc: "Personalised first email to a dental clinic with identified digital gap",
    steps: [
      {
        label: "Subject Line",
        text: "[Clinic Name] — patients in [Suburb] are searching, but not finding you",
        note: "<strong>Tip:</strong> Use their actual clinic name and suburb. Avoid 'Quick question' or 'Following up' — too generic."
      },
      {
        label: "Opening",
        text: "Hi [First Name],\n\nI came across [Clinic Name] while researching dental clinics in [Suburb] and noticed something worth flagging.",
        note: "<strong>Tip:</strong> Never open with 'I hope this email finds you well.' Get straight to the point."
      },
      {
        label: "The Gap (personalised)",
        text: "When someone searches 'dentist in [Suburb]' right now, your competitors [Competitor 1] and [Competitor 2] appear in the top results — but [Clinic Name] doesn't. That gap means you're invisible to new patients who are actively looking.",
        note: "<strong>Tip:</strong> This gap comes from your pre-call research. The more specific you are, the better the reply rate."
      },
      {
        label: "The Offer",
        text: "We've helped dental clinics across Melbourne go from 60% to 95% appointment capacity in 6 weeks using AI-driven local search and targeted patient campaigns. I'd love to show you what's possible for [Clinic Name] in a quick 20-minute call.",
        note: "<strong>Tip:</strong> One specific result is more convincing than a list of features."
      },
      {
        label: "CTA & Sign-off",
        text: "Would Thursday or Friday this week work for you?\n\nJordan\nManaging Director, QuadGrowth\nquadgrowth.com.au\n\nTo unsubscribe from further emails, simply reply with 'unsubscribe'.",
        note: "<strong>Spam Act:</strong> The unsubscribe line is legally required for commercial emails in Australia."
      }
    ]
  },
  {
    icon: "🔁",
    title: "Follow-Up Email — Day 4",
    desc: "If no reply to first email, send this short follow-up",
    steps: [
      {
        label: "Subject Line",
        text: "Re: [Clinic Name] — just checking in",
        note: "<strong>Tip:</strong> Reply to the original thread so it appears as a continuation."
      },
      {
        label: "Body",
        text: "Hi [First Name],\n\nJust wanted to bump this up in case it got buried.\n\nI noticed [specific gap — e.g. you have 18 Google reviews while the average Melbourne clinic your size has 60+]. That's a quick win we could address in the first 30 days.\n\nIf now isn't the right time, totally fine — just let me know and I won't follow up again. But if you do have 20 minutes this week, I think you'd find it valuable.\n\nJordan\nQuadGrowth",
        note: "<strong>Tip:</strong> Short, low-pressure follow-ups outperform long ones. Give them an easy out — it actually increases replies."
      }
    ]
  },
  {
    icon: "🔁",
    title: "Follow-Up Email — Day 10",
    desc: "Final follow-up — low pressure, leaves the door open",
    steps: [
      {
        label: "Subject Line",
        text: "Last note from me — [Clinic Name]",
        note: "<strong>Tip:</strong> 'Last note' emails often get the highest reply rates because people feel the urgency."
      },
      {
        label: "Body",
        text: "Hi [First Name],\n\nI'll keep this brief — this is my last follow-up.\n\nIf growing your patient numbers isn't a priority right now, no worries at all. If it ever becomes one, feel free to reach out.\n\nOne last thought: if you Google 'dentist [suburb]' today, you'll see exactly what your potential patients see. Worth a look.\n\nAll the best,\nJordan\nQuadGrowth — quadgrowth.com.au",
        note: "<strong>Tip:</strong> The Google challenge at the end plants a seed even if they don't reply now."
      }
    ]
  },
  {
    icon: "📞",
    title: "Cold Call Opening Script",
    desc: "For calling clinic reception to reach the practice owner or principal dentist",
    steps: [
      {
        label: "Getting Past Reception",
        text: "Hi there, my name is Jordan — I'm calling from QuadGrowth. I've been researching dental clinics in [suburb] and I wanted to briefly speak with [Dr. Name / the practice owner] about something I found on their Google profile. Is he/she available for just two minutes?",
        note: "<strong>Tip:</strong> Mention something specific ('their Google profile') — it sounds more purposeful than 'I'd like to discuss marketing'."
      },
      {
        label: "When You Reach the Owner",
        text: "Hi Dr. [Name], thanks for taking my call. My name is Jordan from QuadGrowth. I'll be quick — I was looking at dental clinics in [suburb] and noticed that when patients search 'dentist in [suburb]', your clinic isn't appearing in the top results, even though you've been established there for [X years]. I've helped clinics in similar situations go from invisible to fully booked within 6 weeks. Would you have 20 minutes this week to see if we can do the same for [Clinic Name]?",
        note: "<strong>Tip:</strong> Respect their time — be fast, specific, and let them say yes or no quickly."
      },
      {
        label: "If They Say 'We're not interested'",
        text: "Totally understand — I appreciate you being straight with me. Can I ask — is it the timing, or is it something about the approach that doesn't fit? I'm always looking to improve how I reach out.",
        note: "<strong>Tip:</strong> This is genuine curiosity, not manipulation. Sometimes they'll open up and give you useful intel — or change their mind."
      },
      {
        label: "If They Say 'Send me something by email'",
        text: "Absolutely. What's the best email to send it to? And just so I send you the right information — is new patient growth the main priority right now, or is there something else more pressing?",
        note: "<strong>Tip:</strong> Always qualify before sending — it helps you personalise the follow-up email and shows you listened."
      }
    ]
  },
  {
    icon: "🤝",
    title: "Discovery Call Framework",
    desc: "Structure for your first proper conversation with a warm or interested lead",
    steps: [
      {
        label: "Open (2 min)",
        text: "Thanks so much for making time, Dr. [Name]. I've done a bit of research on [Clinic Name] beforehand so I'm not going in blind — I know you're in [suburb] and you've been open [X years]. I'd love to spend the first half of this call understanding your situation, and the second half showing you what we might be able to do. Does that work?",
        note: "<strong>Tip:</strong> Always confirm the agenda upfront. It shows professionalism and sets expectations."
      },
      {
        label: "Diagnose (10 min — ask these questions)",
        text: "1. How full is your appointment book on a typical week?\n2. Where do most of your current patients come from?\n3. What marketing have you tried before, and what happened?\n4. If you could wave a wand, what does growth look like for you in the next 12 months?\n5. What's your biggest frustration with getting new patients right now?",
        note: "<strong>Tip:</strong> Don't rush this section. The more you understand their situation, the better your pitch will land."
      },
      {
        label: "Present (8 min)",
        text: "Based on what you've told me, here's what I'd focus on for [Clinic Name] specifically... [Reference their gap]. We'd start with [specific first action], then [second action]. Most clinics see the first results within 2–3 weeks.\n\nWould it be helpful if I put together a quick proposal specific to your situation?",
        note: "<strong>Tip:</strong> Only present solutions relevant to what they told you. Generic pitches lose deals."
      },
      {
        label: "Close / Next Step (3 min)",
        text: "So where does this land for you? If it feels like a fit, I can have a proposal to you by [day]. If you need more time, no pressure — what would help you make a decision?",
        note: "<strong>Tip:</strong> Always close on a specific next step. 'I'll be in touch' is not a next step."
      }
    ]
  },
  {
    icon: "💌",
    title: "Proposal Follow-Up Email",
    desc: "After sending a proposal — following up if no response after 48 hours",
    steps: [
      {
        label: "Subject Line",
        text: "QuadGrowth proposal for [Clinic Name] — any questions?",
        note: ""
      },
      {
        label: "Body",
        text: "Hi Dr. [Name],\n\nJust wanted to check you received the proposal I sent through. Happy to jump on a 10-minute call to walk you through it or answer any questions — sometimes it's easier than reading a document.\n\nI've also set aside a tentative start date of [Date] in case you'd like to move quickly, but there's no pressure.\n\nLet me know either way — I appreciate you considering us.\n\nJordan\nQuadGrowth",
        note: "<strong>Tip:</strong> Mentioning a tentative start date creates subtle urgency without being pushy."
      }
    ]
  },
];

// ═══════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════

let currentCards = [...QA_DATA];
let currentIndex = 0;
let isFlipped = false;
let activeFilter = 'all';

// ═══════════════════════════════════════════════════
// TABS
// ═══════════════════════════════════════════════════

function switchTab(tab) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.getElementById(tab).classList.add('active');
  event.target.classList.add('active');
}

// ═══════════════════════════════════════════════════
// FLASHCARDS
// ═══════════════════════════════════════════════════

function renderCard() {
  const card = currentCards[currentIndex];
  if (!card) return;
  const fc = document.getElementById('flashcard');
  fc.classList.remove('flipped');
  isFlipped = false;
  document.getElementById('cardCategory').textContent = formatCat(card.cat);
  document.getElementById('cardCategoryBack').textContent = formatCat(card.cat);
  document.getElementById('cardQuestion').textContent = card.q;
  document.getElementById('cardAnswer').textContent = card.a;
  document.getElementById('progressText').innerHTML = `Card ${currentIndex + 1} of <span id="totalCards">${currentCards.length}</span>`;
  const pct = ((currentIndex + 1) / currentCards.length) * 100;
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('prevBtn').disabled = currentIndex === 0;
  document.getElementById('nextBtn').disabled = currentIndex === currentCards.length - 1;
}

function formatCat(cat) {
  const map = { discovery: 'Discovery Call', objection: 'Objection', pricing: 'Pricing', results: 'Results & ROI', technical: 'Technical' };
  return map[cat] || cat;
}

function flipCard() {
  const fc = document.getElementById('flashcard');
  isFlipped = !isFlipped;
  fc.classList.toggle('flipped', isFlipped);
}

function nextCard() {
  if (currentIndex < currentCards.length - 1) { currentIndex++; renderCard(); }
}

function prevCard() {
  if (currentIndex > 0) { currentIndex--; renderCard(); }
}

function shuffleCards() {
  for (let i = currentCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [currentCards[i], currentCards[j]] = [currentCards[j], currentCards[i]];
  }
  currentIndex = 0;
  renderCard();
}

function filterCards(cat, btn) {
  document.querySelectorAll('#qaFilters .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  activeFilter = cat;
  currentCards = cat === 'all' ? [...QA_DATA] : QA_DATA.filter(c => c.cat === cat);
  currentIndex = 0;
  renderCard();
}

// ═══════════════════════════════════════════════════
// CHECKLIST
// ═══════════════════════════════════════════════════

let checkState = {};

function buildChecklist() {
  const container = document.getElementById('checklistContainer');
  let html = '';
  let totalItems = 0;
  CHECKLIST_DATA.forEach((group, gi) => {
    html += `<div class="checklist-group">
      <div class="checklist-group-title">${group.group}</div>`;
    group.items.forEach((item, ii) => {
      const id = `check-${gi}-${ii}`;
      totalItems++;
      html += `<div class="checklist-item" id="${id}" onclick="toggleCheck('${id}')">
        <div class="check-box"><span class="check-mark">✓</span></div>
        <div class="check-content">
          <div class="check-title">${item.title}</div>
          <div class="check-sub">${item.sub}</div>
        </div>
        <span class="check-tag tag-${item.tag}">${item.tag}</span>
      </div>`;
    });
    html += `</div>`;
  });
  container.innerHTML = html;
  document.getElementById('totalCount').textContent = totalItems;
  updateCheckSummary();
}

function toggleCheck(id) {
  checkState[id] = !checkState[id];
  const el = document.getElementById(id);
  el.classList.toggle('done', checkState[id]);
  updateCheckSummary();
}

function updateCheckSummary() {
  const done = Object.values(checkState).filter(Boolean).length;
  const total = parseInt(document.getElementById('totalCount').textContent);
  document.getElementById('doneCount').textContent = done;
  document.getElementById('pctCount').textContent = total ? Math.round((done / total) * 100) + '%' : '0%';
}

function resetChecklist() {
  checkState = {};
  document.querySelectorAll('.checklist-item').forEach(el => el.classList.remove('done'));
  updateCheckSummary();
}

// ═══════════════════════════════════════════════════
// SCRIPTS
// ═══════════════════════════════════════════════════

function buildScripts() {
  const container = document.getElementById('scriptsContainer');
  let html = '';
  SCRIPTS_DATA.forEach((script, si) => {
    html += `<div class="script-card" id="script-${si}">
      <div class="script-header" onclick="toggleScript(${si})">
        <div class="script-header-left">
          <div class="script-icon">${script.icon}</div>
          <div>
            <div class="script-title">${script.title}</div>
            <div class="script-desc">${script.desc}</div>
          </div>
        </div>
        <span class="script-chevron">▼</span>
      </div>
      <div class="script-body">`;
    script.steps.forEach(step => {
      html += `<div class="script-step">
        <div class="step-label">${step.label}</div>
        <div class="script-text">${step.text.replace(/\n/g, '<br>')}</div>
        ${step.note ? `<div class="script-note">${step.note}</div>` : ''}
      </div>`;
    });
    html += `</div></div>`;
  });
  container.innerHTML = html;
}

function toggleScript(si) {
  const card = document.getElementById(`script-${si}`);
  card.classList.toggle('open');
}

// ═══════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  // Check if already authenticated this session
  if (sessionStorage.getItem('qg_auth') === 'true') {
    unlockApp();
  }
});

// ═══════════════════════════════════════════════════
// AUTH
// ═══════════════════════════════════════════════════

// ⚠️  CHANGE THIS PASSWORD before deploying
const ACCESS_PASSWORD = 'quadgrowth2026';

function checkAuth() {
  const input = document.getElementById('authInput').value.trim();
  const error = document.getElementById('authError');

  if (input === ACCESS_PASSWORD) {
    sessionStorage.setItem('qg_auth', 'true');
    document.getElementById('authGate').style.animation = 'fadeOut 0.3s ease forwards';
    setTimeout(() => {
      unlockApp();
      renderCard();
      buildChecklist();
      buildScripts();
    }, 300);
  } else {
    error.classList.add('show');
    document.getElementById('authInput').value = '';
    document.getElementById('authInput').style.borderColor = '#e07060';
    setTimeout(() => {
      error.classList.remove('show');
      document.getElementById('authInput').style.borderColor = '';
    }, 2500);
  }
}

function unlockApp() {
  document.getElementById('authGate').style.display = 'none';
  document.getElementById('appContent').style.display = 'block';
}

// ═══════════════════════════════════════════════════
// AI PITCH COACH — all vars prefixed coach_ to avoid conflicts
// ═══════════════════════════════════════════════════

const COACH_CLAUDE_API_KEY = 'YOUR_CLAUDE_API_KEY'; // ← replace

// ═══════════════════════════════════════════════════
// REAL CLINIC PERSONAS — based on actual research
// ═══════════════════════════════════════════════════

const REAL_PERSONAS = {
  dalisay: {
    id: 'dalisay',
    initials: 'DS',
    name: 'Dr. Dalisay Sibal',
    clinic: 'DIS Dental Surgery',
    difficulty: 'HARDEST',
    opener: `"Hello? Yes, this is Dr. Dalisay. I only have a few minutes — I have patients waiting. You said this is about marketing for my clinic? We've been in St Albans for 33 years. We're not really looking for marketing help."`,
    objections: [
      { id: 'enough', label: 'Already have patients' },
      { id: 'burned', label: 'Tried marketing before' },
      { id: 'ai', label: "Don't trust AI" },
      { id: 'price', label: 'Too expensive' },
      { id: 'busy', label: "Too busy" },
      { id: 'community', label: 'Prove it works here' }
    ],
    system: `You are Dr. Dalisay Santos Sibal, principal dentist and founder of DIS Dental Surgery. You are a tough, no-nonsense Filipino-Australian dentist who has run your own practice for 33 years across 3 locations: St Albans, Truganina, and Hillside (Sugar Gum Health). You speak English and Tagalog and are deeply trusted in the Filipino community in Melbourne's western suburbs.

YOUR REAL SITUATION (use this to make objections feel real):
- You have 3 locations and coordinate patient flow is getting messy
- Your Truganina location has only 4 Google reviews despite being 5-star — you know your online presence is weak but haven't had time to fix it
- You use a Gmail address for reception (disdental.reception@gmail.com) — no CRM, no automation
- You offer implants, braces/aligners, and dentures — high-value services that need more patients
- You've been approached by marketing agencies before and wasted money on Google Ads that brought the wrong type of patients
- Your community patients come through word of mouth — you worry that digital marketing won't work for your Filipino patient base

YOUR PERSONALITY:
- Direct and time-poor. Short replies. Don't waste her time.
- Skeptical of AI — worried it sounds impersonal for a community-based clinic
- Price-sensitive — you reinvest profits into the clinic, not marketing
- Protective of your brand and community reputation built over 33 years
- Will warm up ONLY if the rep shows they know your specific situation (3 locations, Filipino community, low reviews, high-value services)

OBJECTIONS TO RAISE (raise them naturally, one at a time as they come up):
1. "We already have enough patients — we're actually quite full most weeks"
2. "We tried Google Ads last year — wasted thousands. How is this different?"
3. "I'm not comfortable with AI talking to my patients. They expect a personal touch from us."
4. "What does this cost? Because if it's thousands a month, I can't justify that."
5. "Look, I have 3 clinics to run. I don't have time to manage another vendor."
6. "Can you even prove this works for a Filipino community clinic? Our patients aren't like mainstream ones."

PASS CONDITION: Only say yes to the 60-day pilot if ALL of these are true:
- They specifically mention your 3 locations and the opportunity to cross-refer patients between them
- They address the Filipino community concern with a specific strategy (not a vague answer)
- They give a clear ROI number (e.g. "if we fill 5 extra implant consults at $3k each, that's $15k — we charge $X")
- They acknowledge your low review count at Truganina as something they'd specifically fix
If even one of these is missing, stay skeptical. Keep pushing. Say "I'll think about it" not "yes".

FAIL CONDITION: If the rep gets pushy, talks over you, can't answer the Filipino community question, or gives a vague pitch — end the call politely: "Look, I appreciate the call but I don't think this is right for us right now."

Speak as Dr. Dalisay. Keep replies to 2-4 sentences. Be realistic and tough but fair.`
  },

  leonida: {
    id: 'leonida',
    initials: 'LC',
    name: 'Dr. Leonida Cartas',
    clinic: 'BlueSpa Dental',
    difficulty: 'MEDIUM',
    opener: `"Hi, this is Dr. Cartas from BlueSpa Dental. I received your email — I have to say I was a little curious but also a little cautious. We already work with an SEO agency. What exactly makes QuadGrowth different?"`,
    objections: [
      { id: 'enough', label: 'Already have patients' },
      { id: 'burned', label: 'Have an agency already' },
      { id: 'ai', label: "Brand fit concern" },
      { id: 'price', label: 'Cost vs current spend' },
      { id: 'busy', label: 'Too busy' },
      { id: 'community', label: 'Prove premium fit' }
    ],
    system: `You are Dr. Leonida Bravo Cartas, principal dentist and director of BlueSpa Dental — a premium cosmetic dental brand with 3 locations in Melbourne CBD (Collins St), Heidelberg, and Taylors Hill. You have been in practice since the 1980s. You are a Fellow of the International College of Continuing Dental Education and an accredited member of the Australian Dental Association.

YOUR REAL SITUATION:
- You run a premium cosmetic clinic — Invisalign, Zoom whitening, implants, veneers
- Your Google rating is 4.5 stars with 24 reviews — solid but could be more for a practice this size
- You have a professional website (cosmetic-dentist-melbourne.com.au) and already work with an SEO agency
- Your patients are professionals — CBD workers, affluent suburbs. Average treatment value is very high.
- You pride yourself on the "BlueSpa experience" — warm, non-clinical, spa-like environment
- Your concern is that AI marketing might cheapen your premium brand feel

YOUR PERSONALITY:
- Polished, articulate, and measured. Never rude but always probing.
- Brand-protective — everything must feel premium, warm, and human
- Already tech-forward (Invisalign partner, Zoom whitening) so open to technology but needs it to feel right
- Will ask specific questions about how the AI communicates with patients
- Impressed by specificity — vague pitches bore her

OBJECTIONS TO RAISE naturally:
1. "We're actually doing quite well — our 3 locations are busy, especially CBD."
2. "We already have an SEO agency. I'm not sure we need another vendor."
3. "How does your AI communicate with patients? I'm very protective of the BlueSpa tone — it has to feel warm, not robotic."
4. "What are we talking about cost-wise? We have a marketing budget but I need to see value."
5. "I'm in clinic most of the week — who manages the relationship with you day-to-day?"
6. "Do you have examples of other premium cosmetic clinics you've worked with? Not just any dental clinic."

PASS CONDITION: Say yes to the pilot ONLY if:
- They address the brand/tone concern specifically (e.g. customised AI voice, human-supervised)
- They mention a cosmetic-specific strategy (reactivating Invisalign or whitening leads, not just check-ups)
- They can answer how this complements (not replaces) her existing SEO agency
- They give a realistic timeline for results (2-4 weeks for first metrics)

Speak as Dr. Cartas. Polished and precise. Replies 2-4 sentences.`
  },

  nenita: {
    id: 'nenita',
    initials: 'NL',
    name: 'Dr. Nenita Lalin',
    clinic: 'Western Dental Care',
    difficulty: 'EASIER',
    opener: `"Oh hello! Yes, I got your message. I'm Dr. Nenita from Western Dental Care in Cairnlea. I have to be honest — we're a small practice. I'm not sure if something like this is really for us. We mostly rely on our community and health fund patients."`,
    objections: [
      { id: 'enough', label: 'Small practice concern' },
      { id: 'burned', label: 'Tried flyers/ads before' },
      { id: 'ai', label: "Tech overwhelm" },
      { id: 'price', label: 'Budget too tight' },
      { id: 'busy', label: 'Just me and one other dentist' },
      { id: 'community', label: 'Works for bulk billing?' }
    ],
    system: `You are Dr. Nenita Evangelista-Lalin, principal dentist at Western Dental Care in Cairnlea, VIC 3023. You have 28 years of dental experience — 16 of those at this exact practice since 2007. You trained at Centro Escolar University in the Philippines and further qualified at the Australian Dental Council. You have a special interest in orthodontics (completed a 2-year programme at University of Sydney).

YOUR REAL SITUATION:
- Single location — 1 Pinewood Crescent, Cairnlea, inside Western Family Medical Centre
- You and Dr. Murthy are the only two dentists — small, tight-knit team
- You bulk bill Child Dental Benefits (Medicare) and are a preferred provider for Bupa and HCF
- Your patients are families and community members from Cairnlea, Deer Park, Caroline Springs, St Albans
- You've tried letterbox drops and a Yellow Pages ad years ago — they didn't do much
- 23 reviews on BirdEye — decent local reputation but modest digital footprint
- Saturday appointments available — you work hard to be accessible

YOUR PERSONALITY:
- Warm and community-oriented — genuinely cares about her patients
- Honest about being a small operation — no pretense
- Worried about cost — tight margins from bulk billing
- Slightly tech-anxious — not a digital native but open if it's simple
- Will respond well to empathy and to someone who understands small practices

OBJECTIONS TO RAISE naturally:
1. "We're only a small practice — I'm not sure we have the patient volume for something like this."
2. "We tried letterbox drops a few years ago and honestly it didn't bring many people in."
3. "I'm not very tech-savvy and neither is my receptionist. Would this be complicated to manage?"
4. "What's the cost? Because with bulk billing patients, our margins aren't huge."
5. "It's really just me and one other dentist — I can't handle a big rush of new patients all at once."
6. "Would this work for a practice that does a lot of bulk billing? Or is it more for private patients?"

PASS CONDITION: Say yes to the pilot if:
- They acknowledge she's a small practice and frame the pilot as low-risk and manageable
- They address the bulk billing question specifically (e.g. reactivating existing patients, not just new patient acquisition)
- They keep it simple — no jargon, clear next steps
- The price feels within reach or the ROI is explained in plain terms (e.g. "even 3 extra check-ups a week at $180 each covers the cost")
- They show warmth — this is a relationship-based practice

She's the most likely to say yes if the rep is warm, clear, and not pushy.

Speak as Dr. Nenita. Warm but cautious. 2-4 sentences.`
  }
};

let coach_currentPersona = null;
let coach_sessionActive = false;
let coach_chatHistory = [];
let coach_transcript = [];
let coach_recognition = null;
let coach_isListening = false;
let coach_isSpeaking = false;
let coach_synth = window.speechSynthesis;
let coach_currentUtterance = null;
let coach_objectionsThrown = new Set();
let coach_objectionsHandled = new Set();
let coach_pilotAgreed = false;
let coach_callEnded = false;

function coachSelectPersona(id) {
  coach_currentPersona = REAL_PERSONAS[id];
  document.querySelectorAll('.persona-card').forEach(c => c.classList.remove('selected'));
  document.getElementById('pc-' + id).classList.add('selected');

  // Update active persona bar
  document.getElementById('apbAvatar').textContent = coach_currentPersona.initials;
  document.getElementById('apbName').textContent = coach_currentPersona.name;
  document.getElementById('apbClinic').textContent = coach_currentPersona.clinic;

  // Build objection tracker pills
  const pills = coach_currentPersona.objections.map(o =>
    `<span class="ot-pill" id="otp-${o.id}">${o.label}</span>`
  ).join('');
  document.getElementById('otPills').innerHTML = pills;

  // Show session panel
  document.getElementById('personaGrid').style.display = 'none';
  document.getElementById('coachSession').style.display = 'block';

  coachReset();
}

function coachBackToPersonas() {
  coachStopSpeaking();
  if (coach_recognition) { try { coach_recognition.stop(); } catch(e){} }
  document.getElementById('personaGrid').style.display = 'grid';
  document.getElementById('coachSession').style.display = 'none';
  coach_currentPersona = null;
}

function coachGetPersonaName() {
  return coach_currentPersona ? coach_currentPersona.name.split(' ')[1] : 'Doctor';
}

function coachAppendMsg(role, text) {
  const chat = document.getElementById('coachChat');
  const div = document.createElement('div');
  div.className = `coach-msg ${role}`;
  const label = document.createElement('span');
  label.className = 'coach-msg-label';
  if (role === 'user') label.textContent = 'You (pitch)';
  else if (role === 'ai') label.textContent = coach_currentPersona ? coach_currentPersona.name : 'Clinic owner';
  const bubble = document.createElement('div');
  bubble.className = 'coach-bubble';
  bubble.textContent = text;
  if (label.textContent) div.appendChild(label);
  div.appendChild(bubble);
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
  return bubble;
}

function coachSetStatus(msg, state='') {
  const el = document.getElementById('coachStatus');
  el.className = `coach-status ${state}`;
  el.innerHTML = msg;
}

function coachStartSession() {
  if (!coach_currentPersona) return;
  coach_sessionActive = true;
  coach_chatHistory = [];
  coach_transcript = [];
  coach_objectionsThrown = new Set();
  coach_objectionsHandled = new Set();
  coach_pilotAgreed = false;
  coach_callEnded = false;

  document.getElementById('coachChat').innerHTML = '';
  document.getElementById('coachScorecard').classList.remove('visible');
  document.getElementById('verdictBanner').style.display = 'none';
  document.getElementById('coachAssessBtn').style.display = 'inline-block';
  document.getElementById('coachEndBtn').style.display = 'inline-block';
  document.getElementById('coachMicBtn').classList.remove('disabled');

  const pi = document.getElementById('passIndicator');
  pi.className = 'pass-indicator live';
  document.getElementById('passLabel').textContent = 'Live — pitch to win the 60-day pilot';

  // Reset objection pills
  coach_currentPersona.objections.forEach(o => {
    const pill = document.getElementById('otp-' + o.id);
    if (pill) pill.className = 'ot-pill';
  });

  const opener = coach_currentPersona.opener;
  coachAppendMsg('system', `Session started — pitching to ${coach_currentPersona.name}, ${coach_currentPersona.clinic}`);
  coachAppendMsg('ai', opener);
  coach_chatHistory.push({ role: 'assistant', content: opener });
  coach_transcript.push({ speaker: 'clinic_owner', text: opener });

  coachSpeak(opener);
  coachSetStatus(`<strong>${coachGetPersonaName()} spoke.</strong><br>Tap mic to respond with your pitch.`, '');
}

function coachReset() {
  coachStopSpeaking();
  if (coach_recognition) { try { coach_recognition.stop(); } catch(e){} }
  coach_sessionActive = false;
  coach_chatHistory = [];
  coach_transcript = [];
  coach_objectionsThrown = new Set();
  coach_objectionsHandled = new Set();
  coach_pilotAgreed = false;
  coach_callEnded = false;
  coach_isListening = false;
  document.getElementById('coachMicBtn').classList.remove('recording');
  document.getElementById('coachMicBtn').classList.add('disabled');
  document.getElementById('coachAssessBtn').style.display = 'none';
  document.getElementById('coachEndBtn').style.display = 'none';
  document.getElementById('coachScorecard').classList.remove('visible');
  document.getElementById('verdictBanner').style.display = 'none';
  document.getElementById('coachChat').innerHTML = '<div class="coach-msg system"><div class="coach-bubble">Press Start Session — then tap the mic to deliver your pitch.</div></div>';
  document.getElementById('passIndicator').className = 'pass-indicator';
  document.getElementById('passLabel').textContent = 'Pitch to win the 60-day pilot';
  coachSetStatus('<strong>Ready.</strong><br>Start a session, then tap the mic.', '');
}

function coachEndSession() {
  coachStopSpeaking();
  if (coach_recognition) { try { coach_recognition.stop(); } catch(e){} }
  coach_sessionActive = false;
  document.getElementById('coachMicBtn').classList.add('disabled');
  document.getElementById('coachMicBtn').classList.remove('recording');
  coachSetStatus('<strong>Session ended.</strong><br>Click "Score + verdict" for your full assessment.', '');
  coachAppendMsg('system', 'Session ended. Click "Score + verdict" to see if you passed.');
}

function coachToggleMic() {
  if (!coach_sessionActive) return;
  if (coach_isSpeaking) coachStopSpeaking();
  if (coach_isListening) coachStopListening();
  else coachStartListening();
}

function coachStartListening() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) { coachSetStatus('Voice recognition not supported in this browser. Try Safari on iOS 15+ or Chrome on Android.', ''); return; }
  coach_recognition = new SR();
  coach_recognition.lang = 'en-AU';
  coach_recognition.continuous = false;
  coach_recognition.interimResults = false;
  coach_recognition.onstart = () => {
    coach_isListening = true;
    document.getElementById('coachMicBtn').classList.add('recording');
    coachSetStatus('<strong style="color:#e07060">🔴 Listening...</strong><br>Speak your pitch. Tap mic again to stop.', 'listening');
  };
  coach_recognition.onresult = (e) => {
    const text = e.results[0][0].transcript;
    coachHandleUserSpeech(text);
  };
  coach_recognition.onerror = (e) => {
    coach_isListening = false;
    document.getElementById('coachMicBtn').classList.remove('recording');
    coachSetStatus(`<strong>Mic error:</strong> ${e.error}. Try again.`, '');
  };
  coach_recognition.onend = () => {
    coach_isListening = false;
    document.getElementById('coachMicBtn').classList.remove('recording');
  };
  coach_recognition.start();
}

function coachStopListening() {
  if (coach_recognition) { try { coach_recognition.stop(); } catch(e){} }
  coach_isListening = false;
  document.getElementById('coachMicBtn').classList.remove('recording');
}

async function coachHandleUserSpeech(text) {
  if (!text.trim() || !coach_currentPersona) return;
  coachAppendMsg('user', text);
  coach_chatHistory.push({ role: 'user', content: text });
  coach_transcript.push({ speaker: 'rep', text });
  coachSetStatus(`<strong>${coachGetPersonaName()} is thinking...</strong>`, 'speaking');

  const thinkingBubble = coachAppendMsg('ai', '');
  thinkingBubble.innerHTML = '<span class="speaking-indicator"><span></span><span></span><span></span></span>';

  // Build system prompt with objection tracking context
  const thrownList = Array.from(coach_objectionsThrown).join(', ');
  const systemWithContext = coach_currentPersona.system +
    (thrownList ? `\n\nObjections you have ALREADY raised in this conversation: ${thrownList}. Don't repeat these — move to new ones or respond to how they addressed them.` : '') +
    `\n\nIMPORTANT: If the rep's response shows they've handled an objection well, note it in your reply and move on. If they've convinced you on ALL pass conditions, say something like "Okay... I have to say, you've addressed my concerns. I'm willing to give the 60-day pilot a try — but I'll be watching the results closely." Only say this once ALL conditions are genuinely met.`;

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': document.getElementById('coachWebhook')?.dataset?.apikey || 'YOUR_CLAUDE_API_KEY',
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 350,
        system: systemWithContext,
        messages: coach_chatHistory
      })
    });
    const data = await res.json();
    const reply = data.content?.[0]?.text || 'Sorry, could you repeat that?';
    thinkingBubble.textContent = reply;
    coach_chatHistory.push({ role: 'assistant', content: reply });
    coach_transcript.push({ speaker: 'clinic_owner', text: reply });

    // Detect objections thrown (keyword scan)
    coachDetectObjections(reply);

    // Detect pilot agreement
    const pilotKeywords = ['60-day pilot', 'give it a try', 'willing to try', 'let\'s do it', 'go ahead', 'I\'m in', 'send me the details', 'sounds good'];
    if (pilotKeywords.some(k => reply.toLowerCase().includes(k.toLowerCase()))) {
      coach_pilotAgreed = true;
      coachShowVerdict(true, reply);
    }

    // Detect call ended / rejection
    const failKeywords = ['not right for us', 'don\'t think this is', 'appreciate the call but', 'not interested', 'goodbye'];
    if (failKeywords.some(k => reply.toLowerCase().includes(k.toLowerCase()))) {
      coach_callEnded = true;
      coachShowVerdict(false, reply);
    }

    coachSpeak(reply);
    coachSetStatus(`<strong style="color:var(--gold-light)">🔊 ${coachGetPersonaName()} speaking...</strong><br>Wait, then tap mic.`, 'speaking');
  } catch(e) {
    thinkingBubble.textContent = 'API error — add your Claude API key to the code.';
    coachSetStatus('<strong>Error.</strong> Check API key in the code.', '');
  }
}

function coachDetectObjections(reply) {
  const r = reply.toLowerCase();
  const map = {
    'enough': ['already have', 'quite full', 'busy enough', 'don\'t need more'],
    'burned': ['tried', 'wasted', 'didn\'t work', 'agency before', 'google ads'],
    'ai': ['ai', 'artificial', 'robotic', 'impersonal', 'personal touch', 'brand'],
    'price': ['cost', 'price', 'expensive', 'afford', 'budget', 'margin'],
    'busy': ['busy', 'time', 'manage', 'can\'t handle', 'just me'],
    'community': ['community', 'filipino', 'bulk bill', 'our patients', 'mainstream', 'premium']
  };
  for (const [key, keywords] of Object.entries(map)) {
    if (keywords.some(k => r.includes(k))) {
      coach_objectionsThrown.add(key);
      const pill = document.getElementById('otp-' + key);
      if (pill && !pill.classList.contains('handled')) pill.className = 'ot-pill thrown';
    }
  }
}

function coachMarkHandled(objId) {
  coach_objectionsHandled.add(objId);
  const pill = document.getElementById('otp-' + objId);
  if (pill) pill.className = 'ot-pill handled';
}

function coachShowVerdict(passed, triggerReply) {
  coach_sessionActive = false;
  document.getElementById('coachMicBtn').classList.add('disabled');
  const pi = document.getElementById('passIndicator');
  pi.className = 'pass-indicator ' + (passed ? 'passed' : 'failed');
  document.getElementById('passLabel').textContent = passed ? '✓ PASSED — Pilot secured!' : '✗ FAILED — Call ended';

  const banner = document.getElementById('verdictBanner');
  banner.style.display = 'block';
  if (passed) {
    banner.className = 'verdict-banner pass';
    banner.innerHTML = `<div class="verdict-title">��� Pilot Secured!</div><div class="verdict-sub">${coach_currentPersona.name} agreed to the 60-day pilot.<br>Now click "Score + verdict" to see your full breakdown.</div>`;
  } else {
    banner.className = 'verdict-banner fail';
    banner.innerHTML = `<div class="verdict-title">📵 Call Ended</div><div class="verdict-sub">${coach_currentPersona.name} wasn't convinced.<br>Click "Score + verdict" to find out exactly what went wrong.</div>`;
  }
  banner.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

async function coachAssessSession() {
  if (coach_transcript.length < 2) { alert('Have at least one exchange before scoring.'); return; }
  coachSetStatus('<strong>Analysing your session...</strong>', 'speaking');

  const transcriptText = coach_transcript.map(t =>
    `${t.speaker === 'rep' ? 'REP' : coach_currentPersona.name.toUpperCase()}: ${t.text}`
  ).join('\n');

  const passed = coach_pilotAgreed;
  const prompt = `You are a senior sales coach for QuadGrowth, an AI-powered dental marketing agency targeting Melbourne dental clinics.

The rep was pitching to ${coach_currentPersona.name} from ${coach_currentPersona.clinic}.
PASS condition: ${coach_currentPersona.name} agrees to the 60-day pilot.
RESULT: The rep ${passed ? 'PASSED — the doctor agreed to the pilot' : 'FAILED — the doctor did not agree to the pilot'}.

Score this session and return ONLY valid JSON, no markdown:
{
  "clarity": <0-10>,
  "relevance": <0-10>,
  "objection_handling": <0-10>,
  "rapport": <0-10>,
  "cta_strength": <0-10>,
  "overall": <0-10>,
  "passed": ${passed},
  "what_won_it": "What specifically convinced the doctor (or what almost did)",
  "what_lost_it": "What specific moment or missed opportunity lost the deal (or nearly did)",
  "strengths": ["...", "..."],
  "improvements": ["...", "...", "..."],
  "one_thing_to_fix": "The single most important thing to change next time",
  "suggested_rewrite": "One improved line they could have used at a key moment"
}

TRANSCRIPT:
${transcriptText}`;

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'YOUR_CLAUDE_API_KEY',
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        messages: [{ role: 'user', content: prompt }]
      })
    });
    const data = await res.json();
    const raw = data.content?.[0]?.text || '{}';
    const scores = JSON.parse(raw.replace(/```json|```/g, '').trim());
    coachRenderScorecard(scores);
    coachSendWebhook(scores, transcriptText);
    coachSetStatus('<strong>Session scored.</strong><br>See results below.', '');
  } catch(e) {
    coachSetStatus('<strong>Scoring failed.</strong> Check API key.', '');
  }
}

function coachRenderScorecard(scores) {
  const card = document.getElementById('coachScorecard');
  card.classList.add('visible');
  const fields = [
    { key:'clarity', label:'Clarity' },
    { key:'relevance', label:'Relevance' },
    { key:'objection_handling', label:'Objections' },
    { key:'rapport', label:'Rapport' },
    { key:'cta_strength', label:'CTA' },
    { key:'overall', label:'Overall' }
  ];
  document.getElementById('coachScorePills').innerHTML = fields.map(f => {
    const v = scores[f.key] || 0;
    const cls = v >= 8 ? 'good' : v >= 6 ? 'mid' : 'low';
    return `<div class="score-pill"><span class="score-pill-label">${f.label}</span><span class="score-pill-val ${cls}">${v}/10</span></div>`;
  }).join('');

  document.getElementById('coachFeedback').innerHTML = `
    ${scores.what_won_it ? `<div class="coach-feedback-block"><h4>${scores.passed ? 'What won it' : 'What almost worked'}</h4><p style="font-size:0.88rem;color:rgba(245,240,232,0.8);line-height:1.6;">${scores.what_won_it}</p></div>` : ''}
    ${scores.what_lost_it ? `<div class="coach-feedback-block"><h4>${scores.passed ? 'What nearly lost it' : 'What lost it'}</h4><p style="font-size:0.88rem;color:#e07060;line-height:1.6;">${scores.what_lost_it}</p></div>` : ''}
    ${scores.strengths?.length ? `<div class="coach-feedback-block"><h4>Strengths</h4><ul>${scores.strengths.map(s=>`<li>${s}</li>`).join('')}</ul></div>` : ''}
    ${scores.improvements?.length ? `<div class="coach-feedback-block"><h4>To improve</h4><ul>${scores.improvements.map(s=>`<li>${s}</li>`).join('')}</ul></div>` : ''}
    ${scores.one_thing_to_fix ? `<div class="coach-feedback-block"><h4>One thing to fix next time</h4><p style="font-size:0.88rem;color:var(--gold-light);line-height:1.6;font-weight:500;">${scores.one_thing_to_fix}</p></div>` : ''}
    ${scores.suggested_rewrite ? `<div class="coach-feedback-block"><h4>Try this line instead</h4><div class="coach-rewrite">"${scores.suggested_rewrite}"</div></div>` : ''}
  `;
  card.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

async function coachSendWebhook(scores, transcript) {
  const webhookUrl = document.getElementById('coachWebhook')?.value?.trim();
  if (!webhookUrl || webhookUrl.includes('n8n')) {
    const statusEl = document.getElementById('coachWebhookStatus');
    if (statusEl) { statusEl.style.display = 'none'; }
    return;
  }
  const statusEl = document.getElementById('coachWebhookStatus');
  if (statusEl) { statusEl.style.display = 'inline-flex'; statusEl.className = 'webhook-status sending'; statusEl.textContent = '⏳ Logging...'; }
  const payload = {
    source: 'QuadGrowth Pitch Coach — Real Persona',
    timestamp: new Date().toISOString(),
    persona: coach_currentPersona?.name || 'Unknown',
    clinic: coach_currentPersona?.clinic || 'Unknown',
    passed: scores.passed,
    scores: { clarity: scores.clarity, relevance: scores.relevance, objection_handling: scores.objection_handling, rapport: scores.rapport, cta_strength: scores.cta_strength, overall: scores.overall },
    what_won_it: scores.what_won_it || '',
    what_lost_it: scores.what_lost_it || '',
    one_thing_to_fix: scores.one_thing_to_fix || '',
    improvements: (scores.improvements || []).join(' | '),
    transcript_excerpt: transcript.slice(0, 1500)
  };
  try {
    await fetch(webhookUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    if (statusEl) { statusEl.className = 'webhook-status sent'; statusEl.textContent = '✓ Logged'; }
  } catch(e) {
    if (statusEl) { statusEl.className = 'webhook-status failed'; statusEl.textContent = '✗ Webhook failed'; }
  }
}

// Smart voice picker
const COACH_VOICE_PRIORITY = [
  'Karen','Catherine','Lee',
  'Microsoft Libby Online (Natural)','Microsoft Sonia Online (Natural)',
  'Microsoft Natasha Online (Natural)','Microsoft Libby','Microsoft Sonia','Microsoft Natasha',
  'Microsoft Ryan Online (Natural)',
  'Google Australian English','Google UK English Female','Google UK English Male',
];
let coach_selectedVoice = null;

function coachPickVoice() {
  const voices = coach_synth.getVoices();
  if (!voices.length) return null;
  for (const name of COACH_VOICE_PRIORITY) {
    const match = voices.find(v => v.name === name);
    if (match) return match;
  }
  for (const name of COACH_VOICE_PRIORITY) {
    const match = voices.find(v => v.name.includes(name));
    if (match) return match;
  }
  return voices.find(v => v.lang === 'en-AU') || voices.find(v => v.lang === 'en-GB') || voices.find(v => v.lang.startsWith('en')) || voices[0];
}

function coachSpeak(text) {
  coachStopSpeaking();
  coach_isSpeaking = true;
  // iOS 15-second pause fix: keep speechSynthesis alive
  let coach_resumeTimer = null;
  const doSpeak = () => {
    coach_currentUtterance = new SpeechSynthesisUtterance(text);
    if (!coach_selectedVoice) coach_selectedVoice = coachPickVoice();
    if (coach_selectedVoice) { coach_currentUtterance.voice = coach_selectedVoice; coach_currentUtterance.lang = coach_selectedVoice.lang; }
    else { coach_currentUtterance.lang = 'en-AU'; }
    coach_currentUtterance.rate = 0.92;
    coach_currentUtterance.pitch = 1.05;
    coach_currentUtterance.volume = 1.0;
    // Start iOS resume interval
    coach_resumeTimer = setInterval(() => {
      if (coach_synth.speaking) { coach_synth.pause(); coach_synth.resume(); }
    }, 10000);
    coach_currentUtterance.onend = () => {
      coach_isSpeaking = false;
      clearInterval(coach_resumeTimer);
      if (coach_sessionActive) coachSetStatus('<strong>Clinic owner finished.</strong><br>Tap the mic to respond.', '');
    };
    coach_currentUtterance.onerror = () => {
      coach_isSpeaking = false;
      clearInterval(coach_resumeTimer);
    };
    coach_synth.speak(coach_currentUtterance);
  };
  if (coach_synth.getVoices().length > 0) {
    doSpeak();
  } else {
    let didSpeak = false;
    coach_synth.onvoiceschanged = () => {
      if (didSpeak) return;
      didSpeak = true;
      coach_synth.onvoiceschanged = null;
      doSpeak();
    };
    // iOS fallback: onvoiceschanged may never fire
    setTimeout(() => {
      if (!didSpeak) {
        didSpeak = true;
        coach_synth.onvoiceschanged = null;
        doSpeak();
      }
    }, 300);
  }
}

function coachStopSpeaking() {
  coach_synth.cancel();
  coach_isSpeaking = false;
}

function coachUpdateVoiceLabel() {
  const label = document.getElementById('coachVoiceLabel');
  if (label && coach_selectedVoice) label.textContent = coach_selectedVoice.name + ' (' + coach_selectedVoice.lang + ')';
  else if (label) label.textContent = 'default system voice';
}

if (coach_synth.getVoices().length === 0) {
  coach_synth.onvoiceschanged = () => { coach_selectedVoice = coachPickVoice(); coachUpdateVoiceLabel(); coach_synth.onvoiceschanged = null; };
} else {
  coach_selectedVoice = coachPickVoice(); coachUpdateVoiceLabel();
}

// ═══════════════════════════════════════════════════
// TAB 5: PERSONA AI COACH — all vars prefixed pcoach_
// Real personas: Dr. Dalisay Sibal, Dr. Leonida Cartas, Dr. Nenita Lalin
// Pass condition: doctor agrees to 60-day pilot
// ═══════════════════════════════════════════════════

const PCOACH_PERSONAS = {
  dalisay: {
    initials: 'DS', name: 'Dr. Dalisay Sibal', clinic: 'DIS Dental Surgery',
    opener: `"Hello? Yes, this is Dr. Dalisay. I only have a few minutes — patients waiting. You said this is about marketing for my clinic? We've been in St Albans for 33 years. We're not really looking for marketing help."`,
    objections: [
      { id: 'enough', label: 'Already have patients' }, { id: 'burned', label: 'Tried marketing before' },
      { id: 'ai', label: "Don't trust AI" }, { id: 'price', label: 'Too expensive' },
      { id: 'busy', label: 'Too busy' }, { id: 'community', label: 'Prove it works here' }
    ],
    system: `You are Dr. Dalisay Santos Sibal, principal dentist and founder of DIS Dental Surgery — 33 years in St Albans, Melbourne. You run 3 locations (St Albans, Truganina, Hillside/Sugar Gum Health). You speak English and Tagalog and are deeply trusted in the Filipino community. You use Gmail for reception — no CRM, no automation. Truganina location has only 4 Google reviews despite 5-star rating. You offer implants, braces/aligners, dentures. Wasted money on Google Ads before. Protective, time-poor, skeptical.

PERSONALITY: Direct and busy. Short replies 2-4 sentences. Skeptical but fair. Protective of 33-year reputation.

OBJECTIONS — raise naturally one at a time:
1. "We already have enough patients — quite full most weeks actually."
2. "We tried Google Ads — wasted thousands. How is this any different?"
3. "I'm not comfortable with AI talking to my patients. They expect a personal touch from us."
4. "What does this cost? If it's thousands a month, I can't justify that right now."
5. "I have 3 clinics to run. I genuinely don't have bandwidth for another vendor."
6. "Can you prove this works for a Filipino community clinic? Our patients aren't like mainstream ones."

SAY YES TO 60-DAY PILOT ONLY if ALL of these are genuinely addressed: (1) rep mentions 3 locations + cross-referral opportunity, (2) rep specifically addresses Filipino community concern with a real strategy, (3) rep gives a clear ROI number referencing high-value services like implants or aligners, (4) rep mentions fixing the Truganina review gap. If any are missing: "I'll think about it." If they're pushy or vague, end the call: "Look, I appreciate the call but I don't think this is right for us right now."`
  },
  leonida: {
    initials: 'LC', name: 'Dr. Leonida Cartas', clinic: 'BlueSpa Dental',
    opener: `"Hi, this is Dr. Cartas from BlueSpa Dental. I received your email — curious but cautious, if I'm honest. We already work with an SEO agency. What exactly makes QuadGrowth different?"`,
    objections: [
      { id: 'enough', label: 'Already doing well' }, { id: 'burned', label: 'Have SEO agency' },
      { id: 'ai', label: 'Brand tone concern' }, { id: 'price', label: 'Cost vs current spend' },
      { id: 'busy', label: 'Day-to-day management' }, { id: 'community', label: 'Prove premium fit' }
    ],
    system: `You are Dr. Leonida Bravo Cartas, principal dentist at BlueSpa Dental — premium cosmetic brand, 3 locations (Melbourne CBD Collins St, Heidelberg, Taylors Hill), established since the 1980s. Fellow of the International College of Continuing Dental Education. You offer Invisalign, Zoom whitening, implants, veneers. 4.5 stars, 24 Google reviews. You already have an SEO agency. Brand-protective — the BlueSpa experience is warm, spa-like, and everything must feel premium.

PERSONALITY: Polished, precise, always probing. 2-4 sentences. Professional but not cold.

OBJECTIONS — raise naturally:
1. "We're doing quite well — all 3 locations are busy, especially the CBD clinic."
2. "We already have an SEO agency. I'm not convinced we need another vendor."
3. "How does your AI communicate with patients? I'm very protective of the BlueSpa tone — it must feel warm, not robotic."
4. "What are we talking about cost-wise? We have a budget but I need to see real value."
5. "I'm in clinic most days — who manages the relationship day-to-day on your end?"
6. "Do you have examples of premium cosmetic clinics you've worked with — not just general dental?"

SAY YES TO 60-DAY PILOT ONLY if: (1) brand/tone concern addressed specifically — e.g. customised AI voice, human review, (2) cosmetic-specific strategy mentioned — Invisalign leads, whitening reactivation, (3) explains how this complements not replaces existing SEO agency, (4) gives realistic 2-4 week timeline for first metrics.`
  },
  nenita: {
    initials: 'NL', name: 'Dr. Nenita Lalin', clinic: 'Western Dental Care',
    opener: `"Oh hello! Yes, I got your message. I'm Dr. Nenita from Western Dental Care in Cairnlea. I'll be honest — we're quite a small practice. I'm not sure something like this is really for us. We mostly rely on our community and health fund patients."`,
    objections: [
      { id: 'enough', label: 'Small practice worry' }, { id: 'burned', label: 'Tried flyers / ads' },
      { id: 'ai', label: 'Tech overwhelm' }, { id: 'price', label: 'Budget tight' },
      { id: 'busy', label: 'Only 2 dentists' }, { id: 'community', label: 'Works for bulk billing?' }
    ],
    system: `You are Dr. Nenita Evangelista-Lalin, principal dentist at Western Dental Care in Cairnlea VIC 3023 — single location, you and Dr. Murthy only. 28 years experience, 16 at this practice since 2007. Trained at Centro Escolar University Philippines; further qualified at Australian Dental Council; special interest in orthodontics from University of Sydney. Bulk bill Child Dental Benefits (Medicare), preferred provider Bupa and HCF. Patients are families from Cairnlea, Deer Park, Caroline Springs, St Albans. Tried letterbox drops years ago — didn't work much.

PERSONALITY: Warm, community-oriented, honest about being small. Slightly tech-anxious. Open if affordable and simple.

OBJECTIONS — raise naturally:
1. "We're quite small — I'm not sure we have the patient volume for something like this."
2. "We did letterbox drops a few years ago and honestly it didn't bring many people in."
3. "I'm not very tech-savvy and neither is my receptionist. Would this be complicated to manage?"
4. "What does it cost? With bulk billing patients our margins aren't enormous."
5. "It's just me and one other dentist — I genuinely can't handle a sudden rush of new patients."
6. "Would this work for a bulk billing practice? Or is it more designed for private patients?"

SAY YES TO 60-DAY PILOT if: (1) acknowledges small practice, frames pilot as low-risk and manageable, (2) addresses bulk billing question specifically — reactivating existing patients, not just new acquisition, (3) keeps it simple — no jargon, (4) ROI in plain terms e.g. "even 3 extra check-ups a week at $180 covers the cost", (5) rep shows genuine warmth. She's the most likely to say yes if the rep is warm and clear.`
  }
};

let pcoach_persona = null, pcoach_active = false, pcoach_history = [], pcoach_transcript = [];
let pcoach_recognition = null, pcoach_listening = false, pcoach_speaking = false;
// Share the SAME synth reference as Tab 4 — two .cancel() calls on separate
// references to window.speechSynthesis wipe each other's audio queue
const pcoach_synth = coach_synth;
let pcoach_utterance = null;
let pcoach_objThrown = new Set(), pcoach_pilotWon = false, pcoach_callEnded = false;

function pcoachSelect(id) {
  pcoach_persona = PCOACH_PERSONAS[id];
  document.querySelectorAll('.persona-card').forEach(c => c.classList.remove('selected'));
  document.getElementById('pc-' + id).classList.add('selected');
  document.getElementById('pcoachAvatar').textContent = pcoach_persona.initials;
  document.getElementById('pcoachName').textContent = pcoach_persona.name;
  document.getElementById('pcoachClinic').textContent = pcoach_persona.clinic;
  document.getElementById('pcoachObjPills').innerHTML = pcoach_persona.objections.map(o => `<span class="ot-pill" id="potp-${o.id}">${o.label}</span>`).join('');
  document.getElementById('personaGrid').style.display = 'none';
  document.getElementById('pcoachSession').style.display = 'block';
  pcoachReset();
}
function pcoachBackToGrid() { pcoachStopSpeaking(); if (pcoach_recognition) { try { pcoach_recognition.stop(); } catch(e){} } document.getElementById('personaGrid').style.display = 'grid'; document.getElementById('pcoachSession').style.display = 'none'; pcoach_persona = null; }
function pcoachAppendMsg(role, text) { const chat = document.getElementById('pcoachChat'); const div = document.createElement('div'); div.className = `coach-msg ${role}`; const label = document.createElement('span'); label.className = 'coach-msg-label'; if (role === 'user') label.textContent = 'You (pitch)'; else if (role === 'ai') label.textContent = pcoach_persona ? pcoach_persona.name : 'Clinic owner'; const bubble = document.createElement('div'); bubble.className = 'coach-bubble'; bubble.textContent = text; if (label.textContent) div.appendChild(label); div.appendChild(bubble); chat.appendChild(div); chat.scrollTop = chat.scrollHeight; return bubble; }
function pcoachSetStatus(msg, state='') { const el = document.getElementById('pcoachStatus'); el.className = `coach-status ${state}`; el.innerHTML = msg; }
function pcoachStartSession() {
  if (!pcoach_persona) return;
  pcoach_active = true; pcoach_history = []; pcoach_transcript = []; pcoach_objThrown = new Set(); pcoach_pilotWon = false; pcoach_callEnded = false;
  document.getElementById('pcoachChat').innerHTML = ''; document.getElementById('pcoachScorecard').classList.remove('visible'); document.getElementById('pcoachVerdict').style.display = 'none';
  document.getElementById('pcoachAssessBtn').style.display = 'inline-block'; document.getElementById('pcoachEndBtn').style.display = 'inline-block'; document.getElementById('pcoachMicBtn').classList.remove('disabled');
  const pi = document.getElementById('pcoachPassIndicator'); pi.className = 'pass-indicator live'; document.getElementById('pcoachPassLabel').textContent = 'Live — pitch to win the 60-day pilot';
  pcoach_persona.objections.forEach(o => { const p = document.getElementById('potp-' + o.id); if (p) p.className = 'ot-pill'; });
  const opener = pcoach_persona.opener;
  pcoachAppendMsg('system', `Session started — ${pcoach_persona.name}, ${pcoach_persona.clinic}`);
  pcoachAppendMsg('ai', opener); pcoach_history.push({ role: 'assistant', content: opener }); pcoach_transcript.push({ speaker: 'doctor', text: opener });
  pcoachSpeak(opener); pcoachSetStatus(`<strong>${pcoach_persona.name.split(' ')[1]} spoke.</strong><br>Tap mic to respond with your pitch.`, '');
}
function pcoachReset() { pcoachStopSpeaking(); if (pcoach_recognition) { try { pcoach_recognition.stop(); } catch(e){} } pcoach_active = false; pcoach_history = []; pcoach_transcript = []; pcoach_objThrown = new Set(); pcoach_pilotWon = false; pcoach_callEnded = false; pcoach_listening = false; document.getElementById('pcoachMicBtn').classList.remove('recording'); document.getElementById('pcoachMicBtn').classList.add('disabled'); document.getElementById('pcoachAssessBtn').style.display = 'none'; document.getElementById('pcoachEndBtn').style.display = 'none'; document.getElementById('pcoachScorecard').classList.remove('visible'); document.getElementById('pcoachVerdict').style.display = 'none'; document.getElementById('pcoachChat').innerHTML = '<div class="coach-msg system"><div class="coach-bubble">Press Start Session — then tap the mic to deliver your pitch.</div></div>'; document.getElementById('pcoachPassIndicator').className = 'pass-indicator'; document.getElementById('pcoachPassLabel').textContent = 'Pitch to win the 60-day pilot'; pcoachSetStatus('<strong>Ready.</strong><br>Start a session, then tap the mic.', ''); }
function pcoachEnd() { pcoachStopSpeaking(); if (pcoach_recognition) { try { pcoach_recognition.stop(); } catch(e){} } pcoach_active = false; document.getElementById('pcoachMicBtn').classList.add('disabled'); document.getElementById('pcoachMicBtn').classList.remove('recording'); pcoachSetStatus('<strong>Session ended.</strong><br>Click "Score + verdict" for your full assessment.', ''); pcoachAppendMsg('system', 'Session ended. Click "Score + verdict" to see if you passed.'); }
function pcoachToggleMic() { if (!pcoach_active) return; if (pcoach_speaking) pcoachStopSpeaking(); if (pcoach_listening) pcoachStopListening(); else pcoachStartListening(); }
function pcoachStartListening() { const SR = window.SpeechRecognition || window.webkitSpeechRecognition; if (!SR) { pcoachSetStatus('Voice recognition not supported in this browser. Try Safari on iOS 15+ or Chrome on Android.', ''); return; } pcoach_recognition = new SR(); pcoach_recognition.lang = 'en-AU'; pcoach_recognition.continuous = false; pcoach_recognition.interimResults = false; pcoach_recognition.onstart = () => { pcoach_listening = true; document.getElementById('pcoachMicBtn').classList.add('recording'); pcoachSetStatus('<strong style="color:#e07060">🔴 Listening...</strong><br>Speak your pitch. Tap mic again to stop.', 'listening'); }; pcoach_recognition.onresult = (e) => { pcoachHandleSpeech(e.results[0][0].transcript); }; pcoach_recognition.onerror = (e) => { pcoach_listening = false; document.getElementById('pcoachMicBtn').classList.remove('recording'); pcoachSetStatus(`<strong>Mic error:</strong> ${e.error}. Try again.`, ''); }; pcoach_recognition.onend = () => { pcoach_listening = false; document.getElementById('pcoachMicBtn').classList.remove('recording'); }; pcoach_recognition.start(); }
function pcoachStopListening() { if (pcoach_recognition) { try { pcoach_recognition.stop(); } catch(e){} } pcoach_listening = false; document.getElementById('pcoachMicBtn').classList.remove('recording'); }
function coachPickBestVoice(voices) {
  if (!voices || !voices.length) return null;
  for (const name of COACH_VOICE_PRIORITY) {
    const match = voices.find(v => v.name === name);
    if (match) return match;
  }
  for (const name of COACH_VOICE_PRIORITY) {
    const match = voices.find(v => v.name.includes(name));
    if (match) return match;
  }
  return voices.find(v => v.lang === 'en-AU') || voices.find(v => v.lang === 'en-GB') || voices.find(v => v.lang.startsWith('en')) || voices[0];
}
async function coachCallMistral({ max_tokens, system, messages }) {
  const res = await fetch('/api/coach', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ max_tokens, system, messages })
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || 'API error ' + res.status);
  }
  return res.json();
}
function coachExtractReplyText(data) {
  return data?.content?.[0]?.text || '';
}
async function pcoachHandleSpeech(text) {
  if (!text.trim() || !pcoach_persona) return;
  pcoachAppendMsg('user', text); pcoach_history.push({ role: 'user', content: text }); pcoach_transcript.push({ speaker: 'rep', text });
  pcoachSetStatus(`<strong>${pcoach_persona.name.split(' ')[1]} is thinking...</strong>`, 'speaking');
  const thinkingBubble = pcoachAppendMsg('ai', ''); thinkingBubble.innerHTML = '<span class="speaking-indicator"><span></span><span></span><span></span></span>';
  const thrown = Array.from(pcoach_objThrown).join(', ');
  const fullSystem = pcoach_persona.system + '\n\nSpeak naturally on a live call. Contractions, occasional "look" or "honestly". 2-4 sentences. Australian-casual.' + (thrown ? `\n\nObjections already raised: ${thrown}. Move to new ones.` : '') + '\n\nIf rep has truly addressed ALL pass conditions, say: "Okay... you\'ve addressed my concerns. I\'m willing to give the 60-day pilot a try — but I\'ll be watching the results closely." Only say this when ALL conditions are genuinely met.';
  try {
    const data = await coachCallMistral({ max_tokens: 350, system: fullSystem, messages: pcoach_history });
    const reply = coachExtractReplyText(data);
    thinkingBubble.textContent = reply; pcoach_history.push({ role: 'assistant', content: reply }); pcoach_transcript.push({ speaker: 'doctor', text: reply });
    pcoachDetectObj(reply);
    const r = reply.toLowerCase();
    if (['60-day pilot','give it a try','willing to try',"let's do it",'go ahead',"i'm in",'send me the details','sounds good','worth trying'].some(k => r.includes(k))) { pcoach_pilotWon = true; pcoachShowVerdict(true); }
    if (['not right for us',"don't think this is",'appreciate the call but','not interested'].some(k => r.includes(k))) { pcoach_callEnded = true; pcoachShowVerdict(false); }
    pcoachSpeak(reply); pcoachSetStatus(`<strong style="color:var(--gold-light)">🔊 ${pcoach_persona.name.split(' ')[1]} speaking...</strong><br>Wait, then tap mic.`, 'speaking');
  } catch(e) { thinkingBubble.textContent = e.message === 'no_local_key' ? 'Add Mistral API key in localStorage (see AI Pitch Coach tab).' : (e.message || 'API error.'); pcoachSetStatus('<strong>Error.</strong> Check API key.', ''); }
}
function pcoachDetectObj(reply) { const r = reply.toLowerCase(); const map = { enough: ['already have','quite full','busy enough'], burned: ['tried','wasted','google ads','letterbox'], ai: ['ai','artificial','robotic','impersonal','personal touch','brand','tone'], price: ['cost','price','expensive','afford','budget','margin'], busy: ['busy','time','manage','just me','just two'], community: ['community','filipino','bulk bill','our patients','mainstream','premium','cosmetic'] }; for (const [key, kws] of Object.entries(map)) { if (kws.some(k => r.includes(k))) { pcoach_objThrown.add(key); const pill = document.getElementById('potp-' + key); if (pill && !pill.classList.contains('handled')) pill.className = 'ot-pill thrown'; } } }
function pcoachShowVerdict(passed) { pcoach_active = false; document.getElementById('pcoachMicBtn').classList.add('disabled'); const pi = document.getElementById('pcoachPassIndicator'); pi.className = 'pass-indicator ' + (passed ? 'passed' : 'failed'); document.getElementById('pcoachPassLabel').textContent = passed ? '✓ PASSED — Pilot secured!' : '✗ FAILED — Call ended'; const banner = document.getElementById('pcoachVerdict'); banner.style.display = 'block'; banner.className = 'verdict-banner ' + (passed ? 'pass' : 'fail'); banner.innerHTML = passed ? `<div class="verdict-title">🎉 Pilot Secured!</div><div class="verdict-sub">${pcoach_persona.name} agreed to the 60-day pilot.<br>Click "Score + verdict" to see your full breakdown.</div>` : `<div class="verdict-title">📵 Call Ended</div><div class="verdict-sub">${pcoach_persona.name} wasn't convinced.<br>Click "Score + verdict" to find out exactly what went wrong.</div>`; banner.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
function pcoachSpeak(text) {
  // Cancel any current speech (both tabs share the same engine)
  pcoach_synth.cancel();
  pcoach_speaking = true;
  const t = String(text || '').trim();
  if (!t) { pcoach_speaking = false; return; }
  // iOS 15-second pause fix: keep speechSynthesis alive
  let pcoach_resumeTimer = null;
  const doSpeak = () => {
    pcoach_utterance = new SpeechSynthesisUtterance(t);
    const v = coachPickBestVoice(pcoach_synth.getVoices());
    if (v) {
      pcoach_utterance.voice = v;
      pcoach_utterance.lang = v.lang || 'en-AU';
      const lbl = document.getElementById('pcoachVoiceLabel');
      if (lbl) lbl.textContent = 'Voice: ' + v.name;
    } else {
      pcoach_utterance.lang = 'en-AU';
    }
    pcoach_utterance.rate = 0.93;
    pcoach_utterance.pitch = 1.05;
    // Start iOS resume interval
    pcoach_resumeTimer = setInterval(() => {
      if (pcoach_synth.speaking) { pcoach_synth.pause(); pcoach_synth.resume(); }
    }, 10000);
    pcoach_utterance.onend = () => {
      pcoach_speaking = false;
      clearInterval(pcoach_resumeTimer);
      if (pcoach_active) pcoachSetStatus('<strong>Finished speaking.</strong><br>Tap the mic to respond.', '');
    };
    pcoach_utterance.onerror = (e) => {
      pcoach_speaking = false;
      clearInterval(pcoach_resumeTimer);
      // 'interrupted' is expected when we cancel mid-speech — not a real error
      if (e.error !== 'interrupted') console.warn('pcoach speech error:', e.error);
    };
    pcoach_synth.speak(pcoach_utterance);
  };
  const voices = pcoach_synth.getVoices();
  if (voices.length > 0) {
    doSpeak();
  } else {
    // Voices not loaded yet — wait for them
    let didSpeak = false;
    const onReady = () => {
      if (didSpeak) return;
      didSpeak = true;
      pcoach_synth.onvoiceschanged = null;
      doSpeak();
    };
    pcoach_synth.onvoiceschanged = onReady;
    // iOS fallback: onvoiceschanged may never fire — use 300ms timeout
    setTimeout(() => {
      if (!didSpeak) {
        didSpeak = true;
        pcoach_synth.onvoiceschanged = null;
        doSpeak();
      }
    }, 300);
  }
}
function pcoachStopSpeaking() {
  // Only cancel the shared synth if pcoach itself is speaking
  if (pcoach_speaking) { pcoach_synth.cancel(); }
  pcoach_speaking = false;
  pcoach_utterance = null;
}
async function pcoachAssess() {
  if (pcoach_transcript.length < 2) { alert('Have at least one exchange before scoring.'); return; }
  pcoachSetStatus('<strong>Analysing your session...</strong>', 'speaking');
  const transcriptText = pcoach_transcript.map(t => `${t.speaker === 'rep' ? 'REP' : pcoach_persona.name.toUpperCase()}: ${t.text}`).join('\n');
  const passed = pcoach_pilotWon;
  const prompt = `You are a senior sales coach for QuadGrowth.\n\nThe rep pitched to ${pcoach_persona.name} from ${pcoach_persona.clinic}.\nPASS condition: Doctor agrees to the 60-day pilot.\nRESULT: The rep ${passed ? 'PASSED — doctor agreed to pilot' : 'FAILED — doctor did not agree'}.\n\nReturn ONLY valid JSON:\n{"clarity":<0-10>,"relevance":<0-10>,"objection_handling":<0-10>,"rapport":<0-10>,"cta_strength":<0-10>,"overall":<0-10>,"passed":${passed},"what_won_it":"What specifically convinced or almost convinced the doctor","what_lost_it":"What specific moment or gap lost the deal","strengths":["..."],"improvements":["..."],"one_thing_to_fix":"Single most important change for next time","suggested_rewrite":"One improved line they could have used"}\n\nTRANSCRIPT:\n${transcriptText}`;
  try {
    const data = await coachCallMistral({ max_tokens: 1200, system: 'Reply with only valid JSON, no markdown.', messages: [{ role: 'user', content: prompt }] });
    const raw = coachExtractReplyText(data) || '{}';
    const scores = JSON.parse(raw.replace(/```json|```/g, '').trim());
    pcoachRenderScorecard(scores); pcoachSendWebhook(scores, transcriptText); pcoachSetStatus('<strong>Session scored.</strong><br>See results below.', '');
  } catch(e) { pcoachSetStatus('<strong>Scoring failed.</strong> Check API key.', ''); }
}
function pcoachRenderScorecard(scores) { const card = document.getElementById('pcoachScorecard'); card.classList.add('visible'); const fields = [{key:'clarity',label:'Clarity'},{key:'relevance',label:'Relevance'},{key:'objection_handling',label:'Objections'},{key:'rapport',label:'Rapport'},{key:'cta_strength',label:'CTA'},{key:'overall',label:'Overall'}]; document.getElementById('pcoachScorePills').innerHTML = fields.map(f => { const v = scores[f.key] || 0; const cls = v >= 8 ? 'good' : v >= 6 ? 'mid' : 'low'; return `<div class="score-pill"><span class="score-pill-label">${f.label}</span><span class="score-pill-val ${cls}">${v}/10</span></div>`; }).join(''); document.getElementById('pcoachFeedback').innerHTML = `${scores.what_won_it ? `<div class="coach-feedback-block"><h4>${scores.passed ? 'What won it' : 'What almost worked'}</h4><p style="font-size:0.88rem;color:rgba(245,240,232,0.8);line-height:1.6;">${scores.what_won_it}</p></div>` : ''}${scores.what_lost_it ? `<div class="coach-feedback-block"><h4>${scores.passed ? 'What nearly lost it' : 'What lost it'}</h4><p style="font-size:0.88rem;color:#e07060;line-height:1.6;">${scores.what_lost_it}</p></div>` : ''}${scores.strengths?.length ? `<div class="coach-feedback-block"><h4>Strengths</h4><ul>${scores.strengths.map(s=>`<li>${s}</li>`).join('')}</ul></div>` : ''}${scores.improvements?.length ? `<div class="coach-feedback-block"><h4>To improve</h4><ul>${scores.improvements.map(s=>`<li>${s}</li>`).join('')}</ul></div>` : ''}${scores.one_thing_to_fix ? `<div class="coach-feedback-block"><h4>One thing to fix next time</h4><p style="font-size:0.88rem;color:var(--gold-light);line-height:1.6;font-weight:500;">${scores.one_thing_to_fix}</p></div>` : ''}${scores.suggested_rewrite ? `<div class="coach-feedback-block"><h4>Try this line instead</h4><div class="coach-rewrite">"${scores.suggested_rewrite}"</div></div>` : ''}`; card.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
async function pcoachSendWebhook(scores, transcript) { const webhookUrl = document.getElementById('pcoachWebhook')?.value?.trim(); if (!webhookUrl || webhookUrl.length < 10 || !webhookUrl.startsWith('http')) return; const statusEl = document.getElementById('pcoachWebhookStatus'); if (statusEl) { statusEl.style.display = 'inline-flex'; statusEl.className = 'webhook-status sending'; statusEl.textContent = '⏳ Logging...'; } const payload = { source: 'QuadGrowth Persona AI Coach', timestamp: new Date().toISOString(), persona: pcoach_persona?.name, clinic: pcoach_persona?.clinic, passed: scores.passed, scores: { clarity: scores.clarity, relevance: scores.relevance, objection_handling: scores.objection_handling, rapport: scores.rapport, cta_strength: scores.cta_strength, overall: scores.overall }, what_won_it: scores.what_won_it || '', what_lost_it: scores.what_lost_it || '', one_thing_to_fix: scores.one_thing_to_fix || '', improvements: (scores.improvements || []).join(' | '), transcript_excerpt: transcript.slice(0, 1500) }; try { await fetch(webhookUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }); if (statusEl) { statusEl.className = 'webhook-status sent'; statusEl.textContent = '✓ Logged'; } } catch(e) { if (statusEl) { statusEl.className = 'webhook-status failed'; statusEl.textContent = '✗ Webhook failed'; } } }
