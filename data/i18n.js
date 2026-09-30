// Надписи интерфейса. Язык добавляется одним блоком (it, uk, ru) с теми же ключами.
// На странице: <span data-i18n="nav.work"></span>, в коде: t("nav.work").
window.I18N = {
  en: {
    "nav.home": "Home", "nav.work": "Work", "nav.about": "About", "nav.skills": "Skills", "nav.setup": "Setup",
    "nav.process": "Process", "nav.contact": "Contact",
    "status": "Available for freelance & junior Python roles",
    "hero.title": "Python tools that remove <span>routine work.</span>",
    "hero.text": "I'm Vladyslav, a Python developer in Bolzano, Italy. Telegram bots, backends and automation, each covered by automated tests and CI.",
    "cta.work": "View projects", "cta.all": "All projects", "cta.more": "Show all projects", "cta.less": "Show fewer",
    "cta.write": "Write on Telegram", "cta.email": "Email",
    "stats.projects": "projects on GitHub", "stats.tests": "automated tests", "stats.soon": "coming soon", "stats.based": "Bolzano, Italy",
    "work.pinned": "Pinned projects", "work.all": "All projects", "work.search": "Search projects", "work.empty": "No projects match.",
    "work.live": "live", "work.soon": "coming soon", "work.tests": "tests", "work.open": "Open on GitHub",
    "skills.title": "What I work with", "setup.title": "My workstation", "setup.text": "A MacBook M1 on Arch Linux, tuned by hand to stay fast on 8 GB.",
    "process.title": "How we'll work", "contact.title": "Have a routine task that eats your time?",
    "contact.text": "Write in Italian, English, Ukrainian or Russian. I usually reply within a few hours.",
    "cv.title": "Curriculum vitae", "langs.title": "Languages", "cmd.hint": "Search projects, sections, contacts…",
    "cmd.projects": "Projects", "cmd.sections": "Sections", "cmd.contacts": "Contacts", "close": "Close", "theme": "Switch theme",
    "footer.local": "in Bolzano",
    "aside.text": "Telegram bots, backends and automation that take routine work off people's hands.",
    "status.short": "Open to freelance & junior roles",
    "cv.request": "CV on request",
    "cv.requestText": "Happy to send my CV to any employer who asks — just write to me.",
    // Вариант «история»
    "about.story1": "I'm a self-taught Python developer living in <b>Bolzano</b> since 2023. Before code I worked on building sites, " +
      "electrical installations and in manufacturing: that taught me to work to diagrams, respect safety standards and finish what I start.",
    "about.story2": "Today I build <b>Telegram bots, backends and automation</b> for small businesses. {withTests} projects are open on GitHub, " +
      "every one with automated tests and CI. I reply quickly, explain what I built and stay in touch after delivery.",
    // Вариант «факты»
    "about.factsIntro": "Self-taught Python developer in Bolzano, Italy. I build tools that take repetitive work off people's hands.",
    // {withTests}, {tests}, {live}, {soon} подставляются из данных GitHub
    "about.now": "Now", "about.nowText": "Telegram bots, backends and automation. {withTests} projects on GitHub with {tests} automated tests and CI; completing a Python certification on Stepik.",
    "last.push": "Last push:", "time.today": "today", "time.yesterday": "yesterday", "time.days": "{n} days ago", "work.new": "new",
    "about.before": "Before", "about.beforeText": "Three years of hands-on work in Italy: electrical installations, construction, manufacturing. Precision and safety habits came with me into code.",
    "about.langs": "Languages", "about.langsText": "Italian B2+, English B1, Ukrainian and Russian native.",
    "about.style": "Working style", "about.styleText": "Quick replies, clear terms, a launch guide with every project and support after delivery.",
  },
};
