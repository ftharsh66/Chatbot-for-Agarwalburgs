/**
 * AGARWAL BERG — Offline FAQ Chatbot & Interactive Brand Showcase
 * Pure Vanilla ES6+ JavaScript (Zero external APIs, zero database required)
 */

// ============================================================================
// 1. PREDEFINED KNOWLEDGE BASE (Strictly Grounded Brand Facts)
// ============================================================================

const knowledgeBase = [
  {
    id: "q1_what_is",
    question: "What is Agarwal Berg?",
    phrases: [
      "what is agarwal berg",
      "who is agarwal berg",
      "about agarwal berg",
      "explain agarwal berg",
      "tell me what agarwal berg is",
      "what is agarwalbergs",
      "what is agarwal burgs",
      "what is this brand",
      "what is this company"
    ],
    keywords: ["agarwal", "berg", "bergs", "company", "identity", "vision", "beverage"],
    answer:
      "Agarwal Berg is a fictional modern Indian beverage brand created with a vision of bringing a fresh, bold and memorable identity to the beverage industry."
  },
  {
    id: "q2_products",
    question: "What products do you offer?",
    phrases: [
      "what products do you offer",
      "what do you offer",
      "what do you sell",
      "what drinks do you have",
      "what beers do you offer",
      "what beverages do you offer",
      "what flavours do you offer",
      "what flavors do you offer",
      "tell me about your products",
      "show me your collection",
      "what is in your collection"
    ],
    keywords: [
      "product",
      "products",
      "drink",
      "drinks",
      "beer",
      "beers",
      "beverage",
      "beverages",
      "collection",
      "variety",
      "varieties",
      "flavour",
      "flavours",
      "flavor",
      "flavors",
      "menu",
      "range"
    ],
    answer:
      "Agarwal Berg offers three signature beer varieties: Agarwal Berg Elephant (Strong Lager / Bock, 7%–7.2% ABV), Agarwal Berg Smooth (Pale Lager / Smooth Flavoured Pilsner, 4.5%–5% ABV), and Agarwal Berg Danish Pilsner (European Pale Lager, 5% ABV). Available in 330ml bottles, 500ml cans, and 650ml bottles."
  },
  {
    id: "q2a_elephant",
    question: "Tell me about Agarwal Berg Elephant.",
    phrases: [
      "tell me about agarwal berg elephant",
      "what is agarwal berg elephant",
      "tell me about agarwalbergs elephant",
      "elephant beer",
      "strong lager",
      "elephant gate",
      "how much does elephant cost",
      "price of elephant"
    ],
    keywords: ["elephant", "bock", "strong", "caramel", "granite", "copenhagen", "190", "200", "7.2"],
    answer:
      "Agarwal Berg Elephant is a Strong Lager / Bock with around 7% to 7.2% ABV. It features a pale golden color, rich malty character, a hint of caramel, and dry balanced hop bitterness. Named after the Elephant Gate at the historic Carlsberg Brewery in Copenhagen, it is relaunched in India in 500ml cans, 330ml bottles, and 650ml bottles around ₹190–₹200 (state MRP)."
  },
  {
    id: "q2b_smooth",
    question: "Tell me about Agarwal Berg Smooth.",
    phrases: [
      "tell me about agarwal berg smooth",
      "what is agarwal berg smooth",
      "tell me about agarwalbergs smooth",
      "smooth pale lager",
      "food pairings for smooth",
      "what pairs with smooth"
    ],
    keywords: ["smooth", "sessionable", "milder", "creamy", "floral", "pairings", "wings", "peanuts", "4.5"],
    answer:
      "Agarwal Berg Smooth is a Pale Lager / Smooth Flavoured Pilsner (4.5% to 5% ABV) brewed in India for a milder, sessionable taste. It offers aromas of malt, grains, and floral hops with a smooth, creamy texture and clean finish. Available in 330ml bottles, 500ml cans, and 650ml bottles, and pairs great with burgers, hot wings, potato chips, and roasted peanuts."
  },
  {
    id: "q2c_danish_pilsner",
    question: "Tell me about Agarwal Berg Danish Pilsner.",
    phrases: [
      "tell me about agarwal berg danish pilsner",
      "what is agarwal berg danish pilsner",
      "tell me about agarwalbergs danish pilsner",
      "danish pilsner",
      "carl jacobsen",
      "1904",
      "ingredients of danish pilsner"
    ],
    keywords: ["danish", "pilsner", "jacobsen", "1904", "biscuit", "herbal", "ingredients", "barley", "denmark"],
    answer:
      "Agarwal Berg Danish Pilsner is a flagship 5% ABV European Pale Lager (adjusted to 3.4% or 3.8% in regions like the UK due to local tax laws). Originally brewed in Denmark by Carl Jacobsen in 1904 using water, barley malt, barley, and quality hops, it is crisp and refreshing with gentle malt sweetness, a light biscuit grain bill, and herbal or citrus hop aromas."
  },
  {
    id: "q3_brand",
    question: "Tell me about your brand.",
    phrases: [
      "tell me about your brand",
      "about your brand",
      "brand story",
      "brand personality",
      "describe your brand",
      "tell me about the brand",
      "how is your branding"
    ],
    keywords: ["brand", "story", "approach", "presentation", "youthful", "experience", "branding", "creative"],
    answer:
      "Agarwal Berg represents a modern approach to beverage branding, combining creative identity, premium presentation and a youthful brand experience."
  },
  {
    id: "q4_location",
    question: "Where are you located?",
    phrases: [
      "where are you located",
      "where is agarwal berg located",
      "where is agarwalbergs located",
      "what is your location",
      "where are you based",
      "where are you from",
      "your address",
      "which city are you in"
    ],
    keywords: ["located", "location", "address", "city", "place", "headquarters", "office", "based"],
    answer:
      "Agarwal Berg is currently a conceptual brand developed as part of a digital business and marketing project."
  },
  {
    id: "q5_contact",
    question: "How can I contact you?",
    phrases: [
      "how can i contact you",
      "how to contact",
      "how do i reach you",
      "contact details",
      "contact information",
      "get in touch",
      "customer support email"
    ],
    keywords: ["contact", "reach", "email", "message", "support", "touch", "connect", "helpdesk"],
    answer:
      "You can reach us through the contact section of our official demonstration website or our Instagram page (@_agarwalbergs_)."
  },
  {
    id: "q6_different",
    question: "What makes Agarwal Berg different?",
    phrases: [
      "what makes agarwal berg different",
      "what makes agarwalbergs different",
      "what makes you different",
      "why agarwal berg",
      "why choose agarwal berg",
      "how are you unique",
      "what sets you apart"
    ],
    keywords: ["different", "unique", "special", "standout", "apart", "difference", "distinctive", "better"],
    answer:
      "Our focus is on distinctive branding, creative presentation, modern design and an engaging digital customer experience."
  },
  {
    id: "q7_online",
    question: "Is Agarwal Berg available online?",
    phrases: [
      "is agarwal berg available online",
      "is agarwalbergs available online",
      "can i buy online",
      "can i order online",
      "are you available online",
      "do you have an online store",
      "shop online",
      "available to buy"
    ],
    keywords: ["online", "available", "buy", "order", "purchase", "shop", "store", "ecommerce", "website", "platform"],
    answer:
      "Agarwal Berg is currently a fictional brand concept developed for an academic project. Our digital platforms demonstrate how an online beverage brand could operate."
  },
  {
    id: "q8_instagram",
    question: "Can I follow Agarwal Berg on Instagram?",
    phrases: [
      "can i follow agarwal berg on instagram",
      "can i follow agarwalbergs on instagram",
      "are you on instagram",
      "do you have instagram",
      "instagram page",
      "social media link",
      "follow on instagram"
    ],
    keywords: ["instagram", "insta", "ig", "follow", "social", "posts", "handle", "_agarwalbergs_"],
    answer:
      "Yes! Follow us at @_agarwalbergs_ using the Instagram link on our website to explore our brand identity and creative posts."
  }
];

const WELCOME_MESSAGE =
  "Welcome to Agarwal Berg!\n\nWe're glad you're here. I'm your virtual brand assistant. Ask me anything about our brand, products, collection or contact information.";

const SUGGESTED_QUESTIONS = [
  "What is Agarwal Berg?",
  "What products do you offer?",
  "Tell me about your brand.",
  "Where are you located?",
  "How can I contact you?"
];

const FALLBACK_RESPONSE =
  "Sorry, I don't have that information at the moment. Please contact our team through the website.";

const GREETING_WORDS = [
  "hello",
  "hi",
  "hey",
  "helo",
  "hii",
  "namaste",
  "greetings",
  "good morning",
  "good afternoon",
  "good evening",
  "hola",
  "sup"
];

const THANKS_PHRASES = [
  "thank you",
  "thanks",
  "thankyou",
  "thx",
  "ty",
  "appreciate it",
  "much appreciated",
  "cheers"
];

const STOP_WORDS = new Set([
  "a",
  "an",
  "the",
  "is",
  "are",
  "am",
  "was",
  "were",
  "do",
  "does",
  "did",
  "can",
  "could",
  "would",
  "should",
  "you",
  "your",
  "yours",
  "me",
  "my",
  "i",
  "we",
  "us",
  "it",
  "this",
  "that",
  "to",
  "of",
  "in",
  "on",
  "for",
  "with",
  "and",
  "or",
  "about",
  "tell",
  "give",
  "please",
  "pls",
  "what",
  "who",
  "where",
  "when",
  "why",
  "how"
]);

const STORAGE_GUEST_KEY = "agarwal_berg_guest_name";

// ============================================================================
// 2. APPLICATION STATE & DOM REFERENCES
// ============================================================================

const state = {
  isTyping: false,
  guestName: loadGuestName(),
  typingTimerId: null
};

const dom = {
  appShell: document.getElementById("appShell"),
  tabShowcase: document.getElementById("tabShowcase"),
  tabChat: document.getElementById("tabChat"),
  chatMessages: document.getElementById("chatMessages"),
  typingIndicator: document.getElementById("typingIndicator"),
  chatError: document.getElementById("chatError"),
  chatForm: document.getElementById("chatForm"),
  chatInput: document.getElementById("chatInput"),
  sendBtn: document.getElementById("sendBtn"),
  clearChatBtn: document.getElementById("clearChatBtn"),
  restartChatBtn: document.getElementById("restartChatBtn"),
  heroAskBtn: document.getElementById("heroAskBtn"),
  copyEmailBtn: document.getElementById("copyEmailBtn"),
  copyFeedback: document.getElementById("copyFeedback"),
  guestBadgeBtn: document.getElementById("guestBadgeBtn"),
  guestBadgeLabel: document.getElementById("guestBadgeLabel"),
  guestModalBackdrop: document.getElementById("guestModalBackdrop"),
  closeGuestModalBtn: document.getElementById("closeGuestModalBtn"),
  guestForm: document.getElementById("guestForm"),
  guestNameInput: document.getElementById("guestNameInput"),
  guestFormError: document.getElementById("guestFormError"),
  clearGuestBtn: document.getElementById("clearGuestBtn")
};

// ============================================================================
// 3. TEXT NORMALIZATION & LOCAL MATCHING INTELLIGENCE
// ============================================================================

/**
 * Lowercase, remove punctuation, and collapse whitespace for consistent matching.
 * @param {string} text
 * @returns {string}
 */
function normalizeText(text) {
  return text
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Compute Levenshtein edit distance between two short strings for minor typo tolerance.
 * @param {string} a
 * @param {string} b
 * @returns {number}
 */
function levenshtein(a, b) {
  if (a === b) return 0;
  const m = a.length;
  const n = b.length;
  if (m === 0) return n;
  if (n === 0) return m;

  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 0; i <= m; i += 1) dp[i][0] = i;
  for (let j = 0; j <= n; j += 1) dp[0][j] = j;

  for (let i = 1; i <= m; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }
  return dp[m][n];
}

/**
 * Determine whether two tokens are an exact or minor-typo fuzzy match.
 * @param {string} inputToken
 * @param {string} targetKeyword
 * @returns {number} score (1.0 exact, 0.75 fuzzy, 0 no match)
 */
function scoreTokenMatch(inputToken, targetKeyword) {
  if (inputToken === targetKeyword) return 1;
  if (inputToken.length < 4 || targetKeyword.length < 4) return 0;

  const maxAllowed = targetKeyword.length >= 7 ? 2 : 1;
  if (Math.abs(inputToken.length - targetKeyword.length) > maxAllowed) {
    return 0;
  }
  return levenshtein(inputToken, targetKeyword) <= maxAllowed ? 0.75 : 0;
}

/**
 * Detect conversational greetings.
 * @param {string} normalized
 * @returns {boolean}
 */
function isGreeting(normalized) {
  return GREETING_WORDS.some(
    (g) => normalized === g || normalized.startsWith(`${g} `) || normalized === `${g} agarwal berg`
  );
}

/**
 * Detect thank-you messages.
 * @param {string} normalized
 * @returns {boolean}
 */
function isThanks(normalized) {
  return THANKS_PHRASES.some(
    (t) => normalized === t || normalized.includes(t)
  );
}

/**
 * Find the best matching answer from the local knowledge base, or return fallback.
 * Never invents answers outside the predefined knowledge base.
 * @param {string} rawInput
 * @returns {string}
 */
function findKnowledgeBaseAnswer(rawInput) {
  const normalized = normalizeText(rawInput);
  if (!normalized) {
    return FALLBACK_RESPONSE;
  }

  // 1. Direct exact match or longest phrase match against canonical questions
  for (const entry of knowledgeBase) {
    if (normalizeText(entry.question) === normalized || entry.phrases.includes(normalized)) {
      return entry.answer;
    }
  }

  let bestPhraseEntry = null;
  let bestPhraseLength = 0;
  for (const entry of knowledgeBase) {
    for (const phrase of entry.phrases) {
      if (normalized.includes(phrase) && phrase.length > bestPhraseLength) {
        bestPhraseLength = phrase.length;
        bestPhraseEntry = entry;
      }
    }
  }
  if (bestPhraseEntry) {
    return bestPhraseEntry.answer;
  }

  // 2. Score keyword & fuzzy token similarity across all 8 entries
  const tokens = normalized
    .split(" ")
    .filter((token) => token.length > 0 && !STOP_WORDS.has(token));

  let bestEntry = null;
  let bestScore = 0;

  for (const entry of knowledgeBase) {
    let score = 0;
    const matchedKeywords = new Set();

    for (const token of tokens) {
      for (const keyword of entry.keywords) {
        if (matchedKeywords.has(keyword)) continue;
        const matchStrength = scoreTokenMatch(token, keyword);
        if (matchStrength > 0) {
          matchedKeywords.add(keyword);
          // Give slightly higher weight to strong domain anchors vs general words
          const isGenericBrandWord = keyword === "agarwal" || keyword === "berg" || keyword === "bergs";
          score += isGenericBrandWord ? 0.65 * matchStrength : 1.4 * matchStrength;
        }
      }
    }

    // Disambiguate "what is agarwal berg" vs "tell me about your brand"
    if (
      entry.id === "q1_what_is" &&
      (normalized.includes("what") || normalized.includes("who")) &&
      (normalized.includes("agarwal") || normalized.includes("berg") || normalized.includes("burg"))
    ) {
      score += 1.4;
    }

    if (entry.id === "q3_brand" && normalized.includes("brand") && !normalized.includes("what is")) {
      score += 0.9;
    }

    if (score > bestScore) {
      bestScore = score;
      bestEntry = entry;
    }
  }

  // Require at least one strong non-trivial domain keyword match
  if (bestEntry && bestScore >= 1.0) {
    return bestEntry.answer;
  }

  // 3. Polite greeting / thank-you handling when no FAQ intent is present
  if (isGreeting(normalized)) {
    const guestPrefix = state.guestName ? `Hello ${state.guestName}!` : "Hello!";
    return `${guestPrefix} Welcome to Agarwal Berg. Ask me anything about our brand, beverage collection, location, or how to contact us.`;
  }

  if (isThanks(normalized)) {
    return "You're very welcome! If you have any other questions about Agarwal Berg, feel free to ask.";
  }

  // 4. Strict fallback when question is outside the knowledge base
  return FALLBACK_RESPONSE;
}

// ============================================================================
// 4. CHAT RENDERING & CONVERSATION FLOW
// ============================================================================

/**
 * Format current local time for message timestamps.
 * @returns {string}
 */
function formatTime() {
  return new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });
}

/**
 * Smoothly scroll the chat message feed to the latest bubble.
 */
function scrollToLatestMessage() {
  if (!dom.chatMessages) return;
  dom.chatMessages.scrollTop = dom.chatMessages.scrollHeight;
}

/**
 * Append a message bubble (user or bot) to the chat feed.
 * @param {"user" | "bot"} sender
 * @param {string} text
 */
function appendMessage(sender, text) {
  if (!dom.chatMessages) return;

  // Remove empty state notice if present
  const emptyState = dom.chatMessages.querySelector(".chat-empty-state");
  if (emptyState) {
    emptyState.remove();
  }

  const row = document.createElement("div");
  row.className = `message-row ${sender === "user" ? "is-user" : "is-bot"}`;

  const meta = document.createElement("div");
  meta.className = "message-meta";

  const author = document.createElement("span");
  author.textContent =
    sender === "user" ? (state.guestName ? state.guestName : "You") : "Agarwal Berg Assistant";

  const dot = document.createElement("span");
  dot.setAttribute("aria-hidden", "true");
  dot.textContent = "·";

  const time = document.createElement("span");
  time.textContent = formatTime();

  meta.append(author, dot, time);

  const bubble = document.createElement("div");
  bubble.className = "message-bubble";
  bubble.textContent = text;

  row.append(meta, bubble);
  dom.chatMessages.appendChild(row);
  scrollToLatestMessage();
}

/**
 * Render the 5 suggested FAQ buttons directly inside the welcome flow.
 */
function renderSuggestedQuestions() {
  if (!dom.chatMessages) return;

  const wrapper = document.createElement("div");
  wrapper.className = "suggestions-block";

  const label = document.createElement("p");
  label.className = "suggestions-label";
  label.textContent = "Suggested Questions";

  const list = document.createElement("div");
  list.className = "suggestions-list";

  SUGGESTED_QUESTIONS.forEach((questionText, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "suggestion-btn";
    btn.textContent = `${index + 1}. ${questionText}`;
    btn.addEventListener("click", () => {
      handleUserQuery(questionText);
    });
    list.appendChild(btn);
  });

  wrapper.append(label, list);
  dom.chatMessages.appendChild(wrapper);
  scrollToLatestMessage();
}

/**
 * Render the initial welcome message and suggested question buttons.
 */
function initializeWelcomeScreen() {
  if (!dom.chatMessages) return;
  clearPendingTyping();
  dom.chatMessages.innerHTML = "";
  hideChatError();

  const greetingHeader = state.guestName
    ? `Hi ${state.guestName} — ${WELCOME_MESSAGE}`
    : WELCOME_MESSAGE;

  appendMessage("bot", greetingHeader);
  renderSuggestedQuestions();
}

/**
 * Clear all chat messages and show a clean empty state with a Restart action.
 */
function clearChat() {
  if (!dom.chatMessages) return;
  clearPendingTyping();
  dom.chatMessages.innerHTML = "";
  hideChatError();

  const empty = document.createElement("div");
  empty.className = "chat-empty-state";

  const msg = document.createElement("p");
  msg.textContent = "Conversation cleared. Start typing below or restore the welcome guide.";

  const restoreBtn = document.createElement("button");
  restoreBtn.type = "button";
  restoreBtn.className = "btn-secondary";
  restoreBtn.textContent = "Show Welcome & Questions";
  restoreBtn.addEventListener("click", initializeWelcomeScreen);

  empty.append(msg, restoreBtn);
  dom.chatMessages.appendChild(empty);
}

/**
 * Clear any active typing indicator timeout.
 */
function clearPendingTyping() {
  if (state.typingTimerId !== null) {
    window.clearTimeout(state.typingTimerId);
    state.typingTimerId = null;
  }
  state.isTyping = false;
  if (dom.typingIndicator) {
    dom.typingIndicator.hidden = true;
  }
}

/**
 * Show an inline friendly validation error above the chat input.
 * @param {string} message
 */
function showChatError(message) {
  if (!dom.chatError) return;
  dom.chatError.textContent = message;
  dom.chatError.hidden = false;
}

/**
 * Hide the chat validation error.
 */
function hideChatError() {
  if (!dom.chatError) return;
  dom.chatError.textContent = "";
  dom.chatError.hidden = true;
}

/**
 * Handle submitting a user query (from input form, suggested buttons, or showcase CTAs).
 * @param {string} queryText
 */
function handleUserQuery(queryText) {
  const trimmed = queryText.trim();
  if (!trimmed) {
    showChatError("Please enter a question or choose one of the suggested prompts.");
    if (dom.chatInput) dom.chatInput.focus();
    return;
  }

  if (state.isTyping) {
    return;
  }

  hideChatError();
  switchMobileView("chat");
  appendMessage("user", trimmed);

  if (dom.chatInput) {
    dom.chatInput.value = "";
  }

  // Show typing animation briefly before delivering the matched KB answer
  state.isTyping = true;
  if (dom.typingIndicator) {
    dom.typingIndicator.hidden = false;
  }
  scrollToLatestMessage();

  const reply = findKnowledgeBaseAnswer(trimmed);
  state.typingTimerId = window.setTimeout(() => {
    clearPendingTyping();
    appendMessage("bot", reply);
  }, 480);
}

// ============================================================================
// 5. OPTIONAL OFFLINE GUEST BADGE (localStorage)
// ============================================================================

/**
 * Read saved guest name from localStorage safely.
 * @returns {string}
 */
function loadGuestName() {
  try {
    return window.localStorage.getItem(STORAGE_GUEST_KEY) || "";
  } catch {
    return "";
  }
}

/**
 * Persist or clear guest name in localStorage safely.
 * @param {string} name
 */
function saveGuestName(name) {
  state.guestName = name;
  try {
    if (name) {
      window.localStorage.setItem(STORAGE_GUEST_KEY, name);
    } else {
      window.localStorage.removeItem(STORAGE_GUEST_KEY);
    }
  } catch {
    // Graceful no-op if storage is restricted
  }
  updateGuestBadgeUI();
}

/**
 * Sync the top bar Guest Badge button label with the current state.
 */
function updateGuestBadgeUI() {
  if (!dom.guestBadgeLabel || !dom.guestBadgeBtn) return;
  if (state.guestName) {
    dom.guestBadgeLabel.textContent = `Guest: ${state.guestName}`;
    dom.guestBadgeBtn.classList.add("is-personalized");
  } else {
    dom.guestBadgeLabel.textContent = "Guest Badge";
    dom.guestBadgeBtn.classList.remove("is-personalized");
  }
}

/**
 * Open the Guest Badge modal.
 */
function openGuestModal() {
  if (!dom.guestModalBackdrop || !dom.guestNameInput || !dom.guestBadgeBtn) return;
  dom.guestNameInput.value = state.guestName;
  if (dom.guestFormError) {
    dom.guestFormError.hidden = true;
    dom.guestFormError.textContent = "";
  }
  dom.guestModalBackdrop.hidden = false;
  dom.guestBadgeBtn.setAttribute("aria-expanded", "true");
  dom.guestNameInput.focus();
}

/**
 * Close the Guest Badge modal.
 */
function closeGuestModal() {
  if (!dom.guestModalBackdrop || !dom.guestBadgeBtn) return;
  dom.guestModalBackdrop.hidden = true;
  dom.guestBadgeBtn.setAttribute("aria-expanded", "false");
}

// ============================================================================
// 6. RESPONSIVE MOBILE VIEW & SHOWCASE INTERACTIONS
// ============================================================================

/**
 * Switch between Brand Showcase and FAQ Assistant views on mobile/tablet screens.
 * @param {"showcase" | "chat"} view
 */
function switchMobileView(view) {
  if (!dom.appShell || !dom.tabShowcase || !dom.tabChat) return;
  dom.appShell.setAttribute("data-mobile-view", view);

  const isShowcase = view === "showcase";
  dom.tabShowcase.classList.toggle("is-active", isShowcase);
  dom.tabShowcase.setAttribute("aria-selected", String(isShowcase));
  dom.tabChat.classList.toggle("is-active", !isShowcase);
  dom.tabChat.setAttribute("aria-selected", String(!isShowcase));
}

/**
 * Copy demonstration email to clipboard with friendly fallback feedback.
 */
function copyDemoEmail() {
  const email = "hello@agarwalberg.demo";
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        if (dom.copyFeedback) {
          dom.copyFeedback.textContent = "Copied hello@agarwalberg.demo to clipboard.";
        }
      })
      .catch(() => {
        if (dom.copyFeedback) {
          dom.copyFeedback.textContent = "Demo email: hello@agarwalberg.demo";
        }
      });
  } else if (dom.copyFeedback) {
    dom.copyFeedback.textContent = "Demo email: hello@agarwalberg.demo";
  }
}

// ============================================================================
// 7. EVENT BINDINGS & INITIALIZATION
// ============================================================================

function bindEvents() {
  // Chat form submission (Send button + Enter key)
  if (dom.chatForm && dom.chatInput) {
    dom.chatForm.addEventListener("submit", (event) => {
      event.preventDefault();
      handleUserQuery(dom.chatInput.value);
    });

    dom.chatInput.addEventListener("input", () => {
      if (dom.chatInput.value.trim().length > 0) {
        hideChatError();
      }
    });
  }

  // Clear & Restart controls
  if (dom.clearChatBtn) {
    dom.clearChatBtn.addEventListener("click", clearChat);
  }
  if (dom.restartChatBtn) {
    dom.restartChatBtn.addEventListener("click", initializeWelcomeScreen);
  }

  // Hero "Ask Brand Assistant" CTA
  if (dom.heroAskBtn) {
    dom.heroAskBtn.addEventListener("click", () => {
      switchMobileView("chat");
      if (dom.chatInput) dom.chatInput.focus();
    });
  }

  // Showcase prompt triggers (Flavour cards, Story, Contact FAQ buttons)
  document.querySelectorAll("[data-ask-question]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const q = btn.getAttribute("data-ask-question");
      if (q) handleUserQuery(q);
    });
  });

  // Top bar & Hero navigation links ensure Showcase tab is active on smaller screens
  document.querySelectorAll("[data-nav-target]").forEach((link) => {
    link.addEventListener("click", () => {
      switchMobileView("showcase");
    });
  });

  // Mobile tabs
  if (dom.tabShowcase) {
    dom.tabShowcase.addEventListener("click", () => switchMobileView("showcase"));
  }
  if (dom.tabChat) {
    dom.tabChat.addEventListener("click", () => {
      switchMobileView("chat");
      scrollToLatestMessage();
    });
  }

  // Copy demo email
  if (dom.copyEmailBtn) {
    dom.copyEmailBtn.addEventListener("click", copyDemoEmail);
  }

  // Guest Badge modal controls
  if (dom.guestBadgeBtn) {
    dom.guestBadgeBtn.addEventListener("click", openGuestModal);
  }
  if (dom.closeGuestModalBtn) {
    dom.closeGuestModalBtn.addEventListener("click", closeGuestModal);
  }
  if (dom.guestModalBackdrop) {
    dom.guestModalBackdrop.addEventListener("click", (event) => {
      if (event.target === dom.guestModalBackdrop) {
        closeGuestModal();
      }
    });
  }
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && dom.guestModalBackdrop && !dom.guestModalBackdrop.hidden) {
      closeGuestModal();
    }
  });

  if (dom.guestForm && dom.guestNameInput) {
    dom.guestForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const cleaned = dom.guestNameInput.value.trim();
      if (!cleaned) {
        if (dom.guestFormError) {
          dom.guestFormError.textContent = "Please enter a name or click Remove Badge.";
          dom.guestFormError.hidden = false;
        }
        return;
      }
      saveGuestName(cleaned);
      closeGuestModal();
    });
  }

  if (dom.clearGuestBtn) {
    dom.clearGuestBtn.addEventListener("click", () => {
      saveGuestName("");
      closeGuestModal();
    });
  }
}

function initApp() {
  updateGuestBadgeUI();
  bindEvents();
  initializeWelcomeScreen();
}

initApp();
