// Данные сайта: профиль, навыки, проекты.
// Чтобы добавить проект — допишите объект в PROJECTS (картинка: assets/img/<slug>.webp, 640 px).
// status: "live" — опубликован на GitHub, "soon" — скоро. featured: true — закреплён на главной.
// Новые публичные репозитории и смена «soon» → «live» подтягиваются сами из data/github.js.

window.SITE = {
  name: "Vladyslav Shokun",
  role: "Python developer",
  tagline: "Telegram bots, backends and automation that remove repetitive work.",
  about:
    "Self-taught Python developer based in Bolzano, Italy. I build Telegram bots, data scrapers, " +
    "backends and automation tools — every project with automated tests and CI. " +
    "I also love tuning Linux so it runs fast even on modest hardware.",
  location: "Bolzano, Italy",
  available: "Open to freelance work and Junior Python roles",
  languages: [
    { name: "Italian", level: "B2+" },
    { name: "English", level: "B1" },
    { name: "Ukrainian", level: "C2" },
    { name: "Russian", level: "C2" },
  ],
  links: {
    email: "mailto:sonoyumiii@gmail.com",
    emailText: "sonoyumiii@gmail.com",
    telegram: "https://t.me/sonoyumiii",
    telegramText: "@sonoyumiii",
    linkedin: "https://www.linkedin.com/in/vladyslav-shokun/",
    linkedinText: "vladyslav-shokun",
    github: "https://github.com/sonoyumi",
    githubText: "sonoyumi",
  },
};

window.SKILLS = [
  { icon: "bot", title: "Telegram bots", text: "Booking, shops, moderation, support desks, questionnaires with AI scoring.", tags: ["aiogram 3", "FSM", "Mini Apps", "Payments"] },
  { icon: "server", title: "Backend & APIs", text: "REST APIs, webhooks, background jobs, multi-tenant services.", tags: ["FastAPI", "Pydantic", "APScheduler", "HMAC"] },
  { icon: "database", title: "Databases", text: "Schema design, migrations, constraints that make bad data impossible.", tags: ["SQLAlchemy 2.0", "Alembic", "PostgreSQL", "SQLite"] },
  { icon: "radar", title: "Data collection", text: "Scraping and 24/7 monitoring with alerts, de-duplication and retries.", tags: ["httpx", "Playwright", "BeautifulSoup", "asyncio"] },
  { icon: "file-spreadsheet", title: "Excel automation", text: "Merging messy files, cleaning data, reports with totals, Italian e-invoices.", tags: ["openpyxl", "CSV", "FatturaPA"] },
  { icon: "sparkles", title: "AI integration", text: "Models via APIs, retrieval with sources, honest \"I don't know\".", tags: ["Claude API", "OpenAI", "Gemini", "Ollama"] },
  { icon: "shield-check", title: "Quality & deploy", text: "Automated tests and CI in every project, services that run 24/7.", tags: ["pytest", "ruff", "GitHub Actions", "Docker", "systemd"] },
  { icon: "terminal", title: "Linux", text: "Daily Arch Linux on a MacBook M1; hand-tuned Hyprland desktop.", tags: ["Arch / Asahi", "Hyprland", "Bash", "Lua"] },
];

// Сертификаты: url — страница проверки (пустая строка — без ссылки), date — год-месяц
window.CERTS = [
  { name: "Software Engineer", issuer: "HackerRank", date: "2026-10", url: "https://www.hackerrank.com/certificates/8f0cea1e7ecd", tags: ["Problem Solving", "SQL", "REST API"] },
  { name: "Introduction to Model Context Protocol", issuer: "Anthropic", date: "2026-10", url: "https://academy.claude.com/badges/915986b5-8b0f-49b5-9e1e-3415f0d98b52", tags: ["MCP", "Python SDK"] },
  { name: "Claude Code 101", issuer: "Anthropic", date: "2026-10", url: "https://academy.claude.com/badges/6cf7be17-7abc-468d-8762-4a9c355044f0", tags: ["AI agents", "Workflow"] },
];

window.CATEGORIES = [
  { id: "all", label: "All" },
  { id: "bots", label: "Telegram bots" },
  { id: "backend", label: "Backend & APIs" },
  { id: "data", label: "Data & scraping" },
  { id: "automation", label: "Automation" },
  { id: "ai", label: "AI" },
  { id: "linux", label: "Linux" },
];

window.PROJECTS = [
  { slug: "doc-intake", name: "Doc Intake", cats: ["automation", "ai"], status: "live", featured: true, tests: 52,
    text: "Scans and PDFs of invoices, receipts and delivery notes become checked data: Claude reads them, rules check totals and VAT, a person approves, Excel for the accountant.",
    stack: ["Claude API", "FastAPI", "SQLite", "openpyxl"] },
  { slug: "post-planner", name: "Post Planner", cats: ["bots", "backend"], status: "live", featured: true, tests: 35,
    text: "Content planner for Telegram channels: the team writes, an editor approves, posts go out on time with photos, buttons and repeats — never twice.",
    stack: ["aiogram 3", "FastAPI", "SQLite", "Time zones"] },
  { slug: "hr-saas", name: "HR Screening SaaS", cats: ["backend", "bots", "ai"], status: "live", featured: true, tests: 49,
    text: "Many companies on one service: each connects its own Telegram bot and writes questionnaires as text; candidates are scored 0–100 and ranked.",
    stack: ["aiogram 3", "FastAPI", "Webhooks", "SQLite", "Fernet"] },
  { slug: "support-desk", name: "Support Desk", cats: ["bots", "backend"], status: "live", featured: true, tests: 61,
    text: "Customer support on Telegram: customers write to a bot, operators answer from a web panel. Tickets, SLA, canned replies, ratings.",
    stack: ["aiogram 3", "FastAPI", "SQLite FTS5", "Retries"] },
  { slug: "webhook-relay", name: "Webhook Relay", cats: ["backend"], status: "live", featured: true, tests: 52,
    text: "Verifies Stripe, GitHub and HMAC signatures, stores every event and delivers it with retries, dead letters and replay.",
    stack: ["FastAPI", "Outbox", "HMAC", "Backoff"] },
  { slug: "uptime-monitor", name: "Uptime Monitor", cats: ["backend", "data"], status: "live", featured: true, tests: 31,
    text: "Watches websites, ports and TLS certificates; Telegram alerts without false alarms, uptime history and a status page.",
    stack: ["asyncio", "httpx", "FastAPI", "Prometheus"] },
  { slug: "lead-hub", name: "Lead Hub", cats: ["backend", "automation"], status: "live", tests: 32,
    text: "Website leads never get lost: REST API, de-duplication, round-robin assignment, SLA reminders and a daily Excel digest.",
    stack: ["FastAPI", "SQLAlchemy 2.0", "Alembic", "APScheduler"] },
  { slug: "booking-bot", name: "Booking Bot", cats: ["bots"], status: "live", tests: 33,
    text: "Customers book appointments in Telegram and get reminders; double bookings are impossible by design.",
    stack: ["aiogram 3", "SQLite", "APScheduler"] },
  { slug: "shop-bot", name: "Shop Bot", cats: ["bots"], status: "live", tests: 42,
    text: "A Telegram shop: catalog from a spreadsheet, cart, guided checkout, stock that never goes negative, order statuses.",
    stack: ["aiogram 3", "FSM", "SQLite", "Payments"] },
  { slug: "guard-bot", name: "Guard Bot", cats: ["bots"], status: "live", tests: 43,
    text: "A group moderator: captcha for newcomers, link and stop-word filters, anti-flood, warnings and mutes.",
    stack: ["aiogram 3", "SQLite"] },
  { slug: "invoice-extract", name: "Invoice Extract", cats: ["automation"], status: "live", tests: 58,
    text: "Italian e-invoices (FatturaPA XML and signed .p7m) into a checked Excel report: VAT by rate, suppliers, deadlines.",
    stack: ["XML", "Decimal", "openpyxl"] },
  { slug: "table-report", name: "Table Report", cats: ["automation"], status: "live", tests: 34,
    text: "Merges messy CSV and Excel files into one clean report with totals and can send it to Telegram.",
    stack: ["openpyxl", "CSV", "Telegram"] },
  { slug: "price-tracker", name: "Price Tracker", cats: ["data"], status: "live", tests: 57,
    text: "Watches product prices on any website and alerts in Telegram about drops, target prices and stock changes.",
    stack: ["httpx", "BeautifulSoup", "schema.org", "SQLite"] },
  { slug: "async-content-scraper", name: "Web & Telegram Scraper", cats: ["data"], status: "live", tests: 16,
    text: "Monitors websites and public Telegram channels 24/7, removes duplicates and sends digests.",
    stack: ["asyncio", "Playwright", "Docker", "systemd"] },
  { slug: "yumi-rice", name: "yumi-rice", cats: ["linux"], status: "live",
    text: "My Hyprland / HyDE desktop on a MacBook M1 (Asahi Linux): pill Waybar, rofi menus, a control center, colors synced to the wallpaper.",
    stack: ["Hyprland Lua", "Waybar", "Bash", "Python"] },
  { slug: "scrape-api", name: "Scrape API", cats: ["data", "backend"], status: "soon", tests: 72,
    text: "Web scraping as a paid API service: keys, plans and limits, a Redis queue with workers, SSRF protection.",
    stack: ["FastAPI", "Redis", "Workers", "Docker Compose"] },
  { slug: "rag-assistant", name: "RAG Assistant", cats: ["ai"], status: "live", tests: 42,
    text: "Answers questions only from company documents, always with the source — and honestly says \"I don't know\".",
    stack: ["SQLite FTS5", "Claude API", "aiogram 3"] },
  { slug: "booking-miniapp", name: "Booking Mini App", cats: ["bots"], status: "live", tests: 29,
    text: "A real booking app inside Telegram: login by Telegram signature, one database with the booking bot.",
    stack: ["Telegram Mini App", "FastAPI", "JavaScript"] },
  { slug: "hr-screening-bot", name: "HR Screening Bot", cats: ["bots", "ai"], status: "soon", tests: 21,
    text: "A first interview 24/7: open answers are pre-scored by AI and HR gets one Excel ranked by score.",
    stack: ["aiogram 3", "AI scoring", "openpyxl"] },
];

window.PROCESS = [
  { title: "Talk", text: "You describe the task in your language — Italian, English, Ukrainian or Russian." },
  { title: "Plan & price", text: "I propose a clear plan, a deadline and a price before any work starts." },
  { title: "Build", text: "I show progress along the way; every feature is covered by tests." },
  { title: "Hand over", text: "You get the code, a launch guide and a short walkthrough." },
  { title: "Support", text: "I stay in touch after delivery for fixes and improvements." },
];

// Сводные цифры считаются из данных, чтобы не расходились с карточками
window.STATS = (() => {
  const live = PROJECTS.filter((p) => p.status === "live");
  return {
    live: live.length,
    soon: PROJECTS.length - live.length,
    tests: live.reduce((s, p) => s + (p.tests || 0), 0),
    languages: SITE.languages.length,
  };
})();
