# 🌙 sonoyumi.github.io

<p>
  <img alt="HTML" src="https://img.shields.io/badge/HTML-CSS-E34F26?logo=html5&logoColor=white">
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-vanilla-F7DF1E?logo=javascript&logoColor=black">
  <img alt="GitHub Pages" src="https://img.shields.io/badge/GitHub%20Pages-live-222?logo=github&logoColor=white">
  <a href="https://github.com/sonoyumi/sonoyumi.github.io/actions/workflows/sync.yml"><img alt="Sync" src="https://github.com/sonoyumi/sonoyumi.github.io/actions/workflows/sync.yml/badge.svg"></a>
</p>

**🇬🇧 [English](#en)** · **🇮🇹 [Italiano](#it)** · **🇺🇦 [Українська](#uk)** · **🇷🇺 [Русский](#ru)**

**Live:** https://sonoyumi.github.io

---

<a name="en"></a>

## 🇬🇧 English

My portfolio site: pinned projects, all projects on demand, skills, my Linux setup and contacts. Hand-written HTML, CSS
and JavaScript with no frameworks and no build step. The first load is about 60 KB: icons are an inline SVG sprite,
images are WebP and load only when a project is opened.

- **Keeps itself up to date.** A GitHub Action (`.github/workflows/sync.yml`) runs every 6 hours: it reads my public
  repositories, the test count from each README and my latest push, and updates `data/github.js`. A repository that goes
  public turns from "coming soon" into "live", and a brand-new repository shows up in "All projects" on its own.
- **Ready for translation.** Every label lives in `data/i18n.js`; a language is one more block with the same keys.
- **Content** is in `data/projects.js`; `featured: true` pins a project to the home page.

### Author

**Vladyslav Shokun** ([@sonoyumi](https://github.com/sonoyumi)), Python developer: Telegram bots, web scraping, automation.

[![Telegram](https://img.shields.io/badge/Telegram-write%20me-2CA5E0?logo=telegram&logoColor=white)](https://t.me/sonoyumiii)
[![Email](https://img.shields.io/badge/Email-contact-EA4335?logo=gmail&logoColor=white)](mailto:sonoyumiii@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-profile-0A66C2?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/vladyslav-shokun/)

---

<a name="it"></a>

## 🇮🇹 Italiano

**[🇬🇧 English](#en)** · **🇮🇹 Italiano** · **[🇺🇦 Українська](#uk)** · **[🇷🇺 Русский](#ru)**

Il mio sito portfolio: progetti in evidenza, tutti i progetti su richiesta, competenze, il mio setup Linux e i contatti.
HTML, CSS e JavaScript scritti a mano, senza framework e senza build. Il primo caricamento pesa circa 60 KB.

- **Si aggiorna da solo.** Una GitHub Action ogni 6 ore legge i repository pubblici, il numero di test dal README e
  l'ultimo push, e aggiorna `data/github.js`: un progetto appena pubblicato passa da "in arrivo" a "live" da solo.
- **Pronto per le traduzioni.** Tutti i testi stanno in `data/i18n.js`.

---

<a name="uk"></a>

## 🇺🇦 Українська

**[🇬🇧 English](#en)** · **[🇮🇹 Italiano](#it)** · **🇺🇦 Українська** · **[🇷🇺 Русский](#ru)**

Мій сайт-портфоліо: закріплені проєкти, усі проєкти за кнопкою, навички, мій сетап на Linux і контакти.
HTML, CSS і JavaScript, написані вручну, без фреймворків і збірки. Перше завантаження — близько 60 КБ.

- **Оновлюється сам.** GitHub Action кожні 6 годин читає публічні репозиторії, кількість тестів із README й останній
  пуш та оновлює `data/github.js`: щойно опублікований проєкт сам стає «live».
- **Готовий до перекладу.** Усі тексти — у `data/i18n.js`.

---

<a name="ru"></a>

## 🇷🇺 Русский

**[🇬🇧 English](#en)** · **[🇮🇹 Italiano](#it)** · **[🇺🇦 Українська](#uk)** · **🇷🇺 Русский**

Мой сайт-портфолио: закреплённые проекты, все проекты по кнопке, навыки, мой сетап на Linux и контакты.
HTML, CSS и JavaScript, написанные вручную, без фреймворков и сборки. Первая загрузка — около 60 КБ.

- **Обновляется сам.** GitHub Action каждые 6 часов читает публичные репозитории, число тестов из README и последний
  пуш и обновляет `data/github.js`: только что опубликованный проект сам становится «live».
- **Готов к переводу.** Все тексты — в `data/i18n.js`.
