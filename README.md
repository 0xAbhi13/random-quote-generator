<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:4F46E5,100:1E293B&height=170&section=header&text=Random%20Quote%20Generator&fontSize=42&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Abhishek%20Jadhav%20%7C%20Veda%20Technology%20Internship&descAlignY=62&descSize=17" alt="Random Quote Generator header" />

  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=20&pause=1000&color=4F46E5&center=true&vCenter=true&width=700&lines=Veda+Technology+Internship+%E2%80%A2+Task+8;HTML5+%E2%80%A2+CSS3+%E2%80%A2+Vanilla+JavaScript;Random+%E2%80%A2+Copy+%E2%80%A2+Share+%E2%80%A2+35+Hand-Picked+Quotes" alt="Typing introduction" />

  <p><b>Clean • Responsive • Accessible • Offline • No Frameworks</b></p>

  ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
  ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
  ![No Frameworks](https://img.shields.io/badge/No_Frameworks-4F46E5?style=for-the-badge)
  ![No API](https://img.shields.io/badge/No_Quote_API-22c55e?style=for-the-badge)
  ![Offline](https://img.shields.io/badge/Works_Offline-0EA5E9?style=for-the-badge)
  ![Accessible](https://img.shields.io/badge/Accessible-2563EB?style=for-the-badge)

</div>

---

<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&pause=1200&color=1E293B&center=true&vCenter=true&width=640&lines=Click+New+Quote...%E2%9C%A8;One+click%2C+a+fresh+thought;No+backend+%E2%80%A2+No+build+%E2%80%A2+No+internet+needed" alt="Greeting typing animation" />
</div>

Random Quote Generator of **Abhishek Shahaji Jadhav** — Web Developer & first-year BCA student at VIIT, Baramati. Built with **HTML5 + CSS3 + Vanilla JavaScript**: no frameworks, no libraries, no quote API, no build step, and **zero external requests at runtime**.

> **Internship attribution:** 45-day Web Development Internship at **Veda Technology** — Task 8: Random Quote Generator.

<details>
<summary><b>📖 Table of Contents (click to expand)</b></summary>

- [✨ Features](#-features)
- [🛠️ Technologies](#️-technologies)
- [🎲 How Random Selection Works](#-how-random-selection-works)
- [🚫 How Duplicate Prevention Works](#-how-duplicate-prevention-works)
- [📋 Copy & 📤 Share](#-copy-- share)
- [🕹️ Controls Behaviour](#️-controls-behaviour)
- [📁 Project Structure](#-project-structure)
- [🚀 How to Run](#-how-to-run)
- [🔗 Profile Links](#-profile-links)
- [📝 My Approach](#-my-approach)
- [✅ Outcome](#-outcome)
- [🌐 Deployment](#-deployment)
- [🧪 Testing Checklist](#-testing-checklist)
- [📜 JavaScript Concepts](#-javascript-concepts)
- [📸 Screenshots](#-screenshots)
- [⚠️ Limitations](#️-limitations)
- [🔍 Accuracy Notes](#-accuracy-notes)

</details>

## ✨ Features

<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=16&pause=1000&color=5B6B8C&center=true&vCenter=true&width=700&lines=35+Quotes+%E2%80%A2+8+Categories+%E2%80%A2+Zero+Repeats+In+A+Row;Clipboard+%E2%80%A2+Web+Share+%E2%80%A2+Keyboard+%E2%80%A2+Screen-Reader+Friendly" alt="Features animation" />
</div>

- **🎲 Random quote** — one click shows a random quote with its author and category, chosen with `Math.random()`.
- **🚫 No immediate repeats** — the quote on screen is excluded from the next draw, so two identical quotes never appear back-to-back.
- **⚡ Instant first quote** — a valid quote is already on screen when the page finishes loading.
- **📋 Copy quote** — copies `"Quote text" — Author` to the clipboard, with success/error feedback in a `role="status"` region.
- **📤 Share quote** — opens the native share sheet via the Web Share API where supported; otherwise copies the quote and explains what happened.
- **🏷️ 8 category badges** — Motivation, Life, Success, Wisdom, Resilience, Learning, Friendship, Time — each with its own accent colour.
- **♿ Accessible** — semantic landmarks, one `aria-live="polite" aria-atomic="true"` region that announces quote + author + category together, `role="status"` feedback, visible `:focus-visible` rings, AA contrast, `prefers-reduced-motion` support.
- **⌨️ Keyboard friendly** — native `<button>`s (Tab + Enter/Space) plus shortcuts: `N` = new quote, `C` = copy.
- **📱 Responsive** — fluid `clamp()` type, wrapping buttons that become full width on phones, no horizontal scrolling from 320 px up.
- **🧩 Defensive dataset** — entries missing `text`, `author`, or `category` are skipped and reported in the console instead of printing `undefined` on screen.
- **🛡️ Graceful failure** — clipboard permission errors, insecure contexts, and cancelled share sheets are all handled; nothing crashes.
- **🌐 Fully offline** — quotes live in `script.js`, icons are inline SVG, favicon is a local file. The app works with the internet switched off.

---

## 🛠️ Technologies

| Technology | Use |
|------------|-----|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) | Semantic structure, live regions, native buttons (`index.html`) |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) | Custom properties, Flexbox, `clamp()` type, keyframes, media queries, focus states (`style.css`) |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | Quote array, `Math.random()`, `getElementById`, `textContent`, event listeners, async clipboard/share (`script.js`) |
| ![No Frameworks](https://img.shields.io/badge/No_Frameworks-4F46E5?style=flat-square) | Zero dependencies — requirement compliant |
| ![Fonts](https://img.shields.io/badge/System_Fonts-5B6B8C?style=flat-square) | System sans + serif stacks (works offline) |
| ![SVG](https://img.shields.io/badge/SVG-F7A41D?style=flat-square) | Inline quote mark + button icons, plus `assets/favicon.svg` |
| ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white) + GitHub Pages | Version control + static hosting |

No React, Bootstrap, Tailwind, jQuery, quote APIs, or build tools. Badge/typing images above are README-only; the app itself loads **zero** external assets.

---

## 🎲 How Random Selection Works

The dataset is a plain array of **35 objects**, each with `text`, `author`, and `category`:

```js
const QUOTES = [
  {
    text: 'It always seems impossible until it is done.',
    author: 'Nelson Mandela',
    category: 'Motivation'
  },
  // ... 34 more
];
```

Every quote is written into the DOM with **`textContent`**, so quote text can never be interpreted as HTML.

Selection scales a `Math.random()` float (which returns a value from `0` inclusive to `1` exclusive) into a valid array index:

```js
let randomIndex = Math.floor(Math.random() * quotes.length);
```

1. `Math.random() * quotes.length` scales the float into `[0, quotes.length)`.
2. `Math.floor()` discards the decimal part → a legal index.
3. `quotes[randomIndex]` is handed to `renderQuote()`, which updates **text, author, and category together**, syncs the `data-category` attribute that colours the badge, and replays the fade-in animation.

---

## 🚫 How Duplicate Prevention Works

`getRandomIndex(total, excludeIndex)` refuses to return the quote that is already on screen:

```js
function getRandomIndex(total, excludeIndex) {
  if (total <= 0) return -1;              // nothing to show
  if (total === 1) return 0;              // only one quote exists — repeat unavoidable

  let randomIndex = Math.floor(Math.random() * total);

  while (randomIndex === excludeIndex) {  // redraw if it matches the current quote
    randomIndex = Math.floor(Math.random() * total);
  }

  return randomIndex;
}
```

- The displayed quote's index is kept in `state.currentIndex` and passed in as `excludeIndex`.
- If the first draw lands on the same quote, a new number is drawn — **consecutive quotes are always different** while at least two quotes exist.
- On page load `state.currentIndex` is `-1`, so nothing is excluded and the first quote appears instantly.
- The loop is safe: any index other than `excludeIndex` is accepted, so it terminates with probability 1 (verified over 5 000 consecutive draws).

---

## 📋 Copy & 📤 Share

**Copy Quote** builds one clean string and puts it on the clipboard:

```text
“Whether you think you can or you think you cannot, you are right.” — Henry Ford
```

Two paths are tried in order, so the feature degrades instead of breaking:

| Step | Path | When it runs |
|------|------|--------------|
| 1 | `navigator.clipboard.writeText(text)` | Secure contexts (`https://` / `localhost`) with permission |
| 2 | Hidden off-screen `<textarea>` + `document.execCommand('copy')` | `file://`, older browsers, or when step 1 is rejected/unavailable |

Afterwards the textarea is removed and focus returns to the button the user pressed. Every outcome is announced: *"Quote copied to clipboard."* or *"Copy failed. Please select the text and copy it manually."*

**Share Quote** uses feature detection, not assumptions:

```js
if (typeof navigator.share === 'function') { /* native share sheet */ }
```

| Situation | What happens |
|-----------|--------------|
| Web Share API available | `navigator.share({ title, text, url })` opens the system share sheet (WhatsApp, X, e-mail, Messages…) |
| User closes the share sheet | Rejection is an `AbortError` → *"Sharing cancelled."* (not treated as a failure) |
| Web Share API errors out | Falls back to the clipboard path and says so |
| Web Share API unsupported (most desktop browsers) | Copies the quote instead → *"Sharing is not supported here, so the quote was copied instead."* |
| Clipboard also unavailable | A friendly manual-copy message; the app never throws |

The page address is only included in the share payload on `http:`/`https:` — a `file://` path would be meaningless to the recipient.

---

## 🕹️ Controls Behaviour

| Control | Behaviour |
|---------|-----------|
| **New Quote** (click, `Enter`, `Space`, or `N`) | Draws a random quote different from the current one and fades it in |
| **Copy Quote** (click, `Enter`, `Space`, or `C`) | Copies `"quote" — author`; shows a success or failure message |
| **Share Quote** (click, `Enter`, `Space`) | Native share sheet where supported, clipboard fallback otherwise |
| **`N` key** | Shortcut for New Quote (ignored with Ctrl/Alt/Meta, or while typing) |
| **`C` key** | Shortcut for Copy Quote (same guards) |

---

## 📁 Project Structure

```text
internship-task-8/
├── index.html                                   # Semantic page structure + live regions
├── style.css                                    # Tokens, card, buttons, responsive + a11y rules
├── script.js                                    # 35-quote dataset, random logic, copy, share, shortcuts
├── README.md                                    # This file
├── Veda_Technology_Task_8_Project_Report.docx   # Internship project report
└── assets/
    ├── favicon.svg                              # Indigo gradient quote-mark favicon
    ├── screenshot-desktop.png                   # Desktop capture (1280 × 900)
    └── screenshot-mobile.png                    # Mobile capture (390 × 844)
```

All paths are **relative** (`./style.css`, `./script.js`, `./assets/favicon.svg`) for GitHub Pages compatibility.

---

## 🚀 How to Run

<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=16&pause=1500&color=22c55e&center=true&vCenter=true&width=560&lines=No+npm+install...just+double-click!+%E2%9C%A8;Works+offline+%E2%80%A2+No+server+needed" alt="How to run animation" />
</div>

No install or build step. ✨

1. 📂 Open the `internship-task-8` folder.
2. 🖱️ Double-click `index.html` → opens in Chrome / Edge / Firefox.
   - Or right-click `index.html` → **Open with** → your browser.
   - Or serve it: `python -m http.server 8000` → <http://localhost:8000>
   - Or VS Code **Live Server**: right-click `index.html` → **Open with Live Server**.
3. 🎉 Styling loads from `style.css`, logic from `script.js`, icon from `assets/favicon.svg` — everything works offline.

> Browsers only allow the modern Clipboard API on `https://` or `localhost`. Opening the file directly still copies fine — the app falls back to `document.execCommand('copy')` automatically.

Quick syntax check (Node, from the project folder):

```powershell
node --check script.js
```

---

## 🔗 Profile Links

| Profile | Link |
|---------|------|
| ![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white) | https://github.com/0xAbhi13 |
| ![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white) | https://www.linkedin.com/in/0xabhi13/ |
| ![Portfolio](https://img.shields.io/badge/Portfolio-2563EB?style=flat-square&logo=globe&logoColor=white) | https://0xabhi13.github.io/MyPortfolio/ |

---

## 📝 My Approach

1. **Read the brief first:** 20+ quotes with `text`/`author`/`category`, random pick, no immediate repeats, quote on load, copy with feedback, share with fallback, keyboard access, responsive fit, error handling, live regions, `textContent`, Web Share feature detection, no `eval()`/inline handlers/frameworks, offline-safe.
2. **Built the structure:** semantic landmarks, one `h1` + subtitle, quote card with decorative quote mark, `blockquote` + `footer` for the author, category pill, three buttons, `role="status"` feedback line, and a short "How it works" card.
3. **Styled mobile-up:** CSS custom properties for one token system (light gradient background, white card, indigo `#4338ca` primary), serif quote type, `clamp()` sizing, wrapping action row, 560 px and 380 px breakpoints, `prefers-reduced-motion` and `forced-colors` support.
4. **Wrote honest JS:** an IIFE with `'use strict'`, a validated 35-quote array, `getRandomIndex(total, excludeIndex)` for repeat prevention, `textContent`-only DOM writes, `getRandomIndex` guarded for the single-quote case, and async clipboard/share with three layered fallbacks.
5. **Tested honestly:** 69 executed Node assertions against the real `script.js` (stubbed DOM) **plus** 48 checks driven through real headless Microsoft Edge over the DevTools Protocol — including 5 000 draws with zero repeats, 300 real button clicks, Enter/Space activation, `:focus-visible` ring rendering, favicon loading, four viewport widths, and screenshots captured at 1280×900 and 390×844.

---

## ✅ Outcome

A complete, responsive, dependency-free Random Quote Generator: 35 hand-picked quotations across 8 categories, zero immediate repeats across 5 000 verified draws, instant first quote, copy and share with layered fallbacks and honest user-facing messages, full keyboard operation, no console errors, and a verified-offline design with no external requests.

---

## 🌐 Deployment

**GitHub Pages:**

```powershell
Set-Location "<path-to>\internship-task-8"
git init -b main
git add index.html style.css script.js README.md Veda_Technology_Task_8_Project_Report.docx assets
git commit -m "Task 8: Random Quote Generator (HTML + CSS + JS)"
git remote add origin <your-repository-url>
git push -u origin main
```

Then GitHub → **Settings → Pages → Deploy from a branch → `main` / root** → GitHub shows your live URL.

> Keep `index.html`, `style.css`, `script.js`, and `assets/` together with relative links so Pages resolves them correctly. The repository URL above is a placeholder — replace it with your real repo. Do not push unless you intend to submit; the commands are provided for the submission step only.

**Vercel:**

1. Push the project to GitHub.
2. Go to <https://vercel.com> → **Add New → Project** → import the repository.
3. Set the **Root Directory** to `internship-task-8` (if the repo holds all internship tasks).
4. Framework preset: **Other**. No build command, no output directory.
5. Deploy.

---

## 🧪 Testing Checklist

**Real browser — Microsoft Edge 155 (headless, DevTools Protocol): 48 / 48 passed**

- [x] Page loads from `file://`; `style.css` applies and `script.js` executes.
- [x] A valid quote (text + author + category) is on screen at load.
- [x] `aria-live="polite"` + `aria-atomic="true"` on the quote region, `role="status"` on feedback.
- [x] All 8 category badges render in their own colours.
- [x] 300 real clicks on **New Quote** → **0** immediate repeats; text, author, category stayed in sync every time.
- [x] All 35 quotes were reached by clicking.
- [x] **Copy Quote** → *"Quote copied to clipboard."*
- [x] **Share Quote** in headless Edge → share sheet unavailable, so the clipboard fallback ran and reported it.
- [x] `Enter` and `Space` both activate the focused button.
- [x] `Tab` reaches the buttons; the focused element matches `:focus-visible` and draws the ring (`box-shadow: #ffffff 0 0 0 3px, #4338ca 0 0 0 6px`).
- [x] No horizontal scroll at 1280 / 820 / 375 / 320 px; all buttons inside the viewport; touch targets ≥ 50 px.
- [x] `prefers-reduced-motion: reduce` collapses animation to ~0 s.
- [x] No uncaught exceptions, no console errors, no failed resource loads (index/style/script/favicon).
- [x] Favicon link points at the local `./assets/favicon.svg` and the SVG loads as a valid 150×150 image.

**Logic suite — Node.js 24 (real `script.js`, stubbed DOM): 69 / 69 passed**

- [x] 35 quotes; every entry has non-empty `text`, `author`, `category`, and only those 3 keys.
- [x] No duplicate quote text; no `undefined`/`null` can reach the UI.
- [x] 5 000 consecutive draws → **0** repeats; all 35 quotes reachable.
- [x] Single-quote dataset renders without an infinite loop.
- [x] Malformed entries are skipped and warned about, not rendered.
- [x] Copy writes exactly `"quote" — author`; falls back to `execCommand` when the Clipboard API rejects or is missing; reports an error when both fail.
- [x] Share calls `navigator.share` with title, text, and category; cancelled sheet → *"Sharing cancelled."*; share error → clipboard fallback; no API → clipboard; `file://` URL never shared.
- [x] `N` / `C` shortcuts work; `Ctrl`/`Meta` combos and typing in fields are ignored.
- [x] No `eval()`, no `new Function()`, no `innerHTML`, no inline `onclick`; every `getElementById` target exists in the HTML.
- [x] `node --check script.js` passes.
- [x] The `.docx` project report opens in Microsoft Word (7 pages, 1 986 words) and mirrors the Task 5 report structure.

**Not verified here:** reading the system clipboard back (headless Edge denies `clipboard-read`) and the visual share sheet — both need an interactive desktop browser session.

---

## 📜 JavaScript Concepts

| Concept | Where |
|---|---|
| Array of objects as a data model | `QUOTES` — 35 `{ text, author, category }` entries |
| Data validation | `isValidQuote()` + `getUsableQuotes()` skip and warn on malformed entries |
| Uniform random index | `getRandomIndex()` — `Math.floor(Math.random() * total)` |
| Duplicate prevention | `excludeIndex` + redraw `while` loop; single-quote guard |
| DOM selection | `dom` object built once with `getElementById` for 9 nodes |
| Safe DOM writes | `textContent` for quote, author, category, and feedback (never `innerHTML`) |
| Live-region sync | text + author + category written inside one `aria-atomic` container |
| Attribute-driven styling | `data-category` drives the per-category badge colour from CSS |
| Animation restart | class removal + forced reflow (`void stage.offsetWidth`) |
| Feature detection | `typeof navigator.share === 'function'`, `navigator.clipboard && …writeText` |
| Async / await + error handling | `copyTextToClipboard()`, `handleCopyQuote()`, `handleShareQuote()` with `try/catch/finally` |
| Legacy fallbacks | hidden `<textarea>` + `document.execCommand('copy')`, focus restoration |
| Event listeners | click bindings per button + `document` `keydown`, no inline handlers |
| Input guards | `isTypingTarget()`, modifier-key check, `preventDefault()` |
| State object | `state = { currentIndex, messageTimer, ready }` |
| Timing | auto-clearing feedback message via `setTimeout` / `clearTimeout` |
| IIFE + strict mode | `'use strict'` wrapper keeps scope clean; `window.quoteApp` exposed for console testing |

---

## 📸 Screenshots

**Desktop — 1280 × 900**

![Random Quote Generator desktop screenshot](./assets/screenshot-desktop.png)

**Mobile — 390 × 844**

![Random Quote Generator mobile screenshot](./assets/screenshot-mobile.png)

---

## ⚠️ Limitations

- **Single random pick per click** — no category filter, search, favourites, or history list; out of scope for Task 8.
- Quotes are a fixed local set of 35 — new quotes require editing `script.js`.
- The Web Share API is only exposed by some mobile browsers; desktops get the clipboard fallback by design.
- `document.execCommand('copy')` is deprecated but retained purely as a fallback for `file://` usage.
- No data is stored or sent anywhere — everything runs locally in the browser.

---

## 🔍 Accuracy Notes

- Every test result quoted above came from suites actually executed against these files — no invented numbers.
- Three initial failures during testing were traced to bugs in my own test harness (shared stub DOM, focus ring drawn with `box-shadow` not `outline`, and Space needing a `keyup` event), not in the app; the harness was corrected and both suites then passed clean.
- Quotations are attributed to their original authors; uncertain attributions are labelled **Anonymous** rather than invented.
- Skills are presented as *learning/using* at internship level.
- App makes zero external requests; README badges/animations are documentation-only.

---

<div align="center">

  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:4F46E5,100:1E293B&height=120&section=footer" alt="Footer wave" />

  <p><sub>Veda Technology Internship — Task 8: Random Quote Generator • HTML5 • CSS3 • Vanilla JavaScript ✨</sub></p>

</div>
