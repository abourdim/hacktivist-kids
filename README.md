# 🎭 HACKTIVIST KIDS v2.0 ULTRA

### *A Workshop DIY Project — Educational Prank Toolkit for Young Agents*

> **"We are Anony... We do not forget... to prank. Expect us."**

---

## 🔥 What Is This?

**Hacktivist Kids** is a browser-based educational prank web app with an Anonymous/hacker aesthetic. Built entirely with vanilla HTML, CSS, and JavaScript — **zero dependencies, zero server, zero frameworks**. Just open `index.html`.

**54+ features** in 3 files (341KB), teaching kids cryptography, internet culture, computer science, and creative thinking through harmless pranks.

---

## 🚀 Quick Start

```
1. Download all files into one folder
2. Open index.html in any modern browser
3. Watch the Workshop DIY splash screen
4. Enter password: anony
5. Survive the boot sequence
6. You're in. Welcome, Agent.
```

---

## 📁 File Structure

```
hacktivist-kids/
├── index.html    (910 lines)  — HTML structure, sections & overlays
├── style.css     (623 lines)  — Themes, animations, RTL, responsive
├── script.js    (4150 lines)  — All logic, data & features
├── howto.html                 — How-To guide & FAQ
└── README.md                  — This file (you're reading it)
```

**Total: 5,683 lines / 341KB — runs entirely in the browser.**

---

## 🏗️ Architecture Overview

```
┌───────────────────────────────────────┐
│             index.html                │
│  ┌───────────┐  ┌──────────────────┐  │
│  │  SIDEBAR   │  │   MAIN AREA      │  │
│  │  config    │  │   collapsible     │  │
│  │  masks     │  │   sections (ops,  │  │
│  │  forge     │  │   crypto, terminal│  │
│  │  agent     │  │   drone, etc.)    │  │
│  │  themes    │  │                   │  │
│  │  demo      │  │                   │  │
│  └───────────┘  └──────────────────┘  │
│  ┌──────────────────────────────────┐ │
│  │    FULLSCREEN OVERLAYS            │ │
│  │  exploits, webcam, CCTV, drone,  │ │
│  │  satellite, countdown, desktop   │ │
│  └──────────────────────────────────┘ │
│  ┌──────────────────────────────────┐ │
│  │      NEWS TICKER (fixed bottom)   │ │
│  └──────────────────────────────────┘ │
└───────────────────────────────────────┘
```

### Boot Flow

```
runSplashScreen()    → Workshop DIY logo animation
    ↓
runPasswordScreen()  → "anony" password gate
    ↓
runBootSequence()    → Hacker boot text animation
    ↓
initApp()            → Sets up ALL 53+ features
    ↓
User interacts       → Events trigger features
```

---

## 🔧 Technologies Used

| Technology | What It Does | Where Used |
|-----------|-------------|------------|
| **HTML5** | Page structure | `index.html` — 910 lines |
| **CSS3 Custom Properties** | Theme system | 4 themes + custom builder |
| **CSS Animations** | Pulse, flash, shake, scroll | 15+ `@keyframes` |
| **CSS Grid/Flexbox** | Responsive layouts | All grids |
| **Vanilla JavaScript** | All logic | `script.js` — 4150 lines |
| **Web Audio API** | Sound synthesis (no files) | 9 signals + typing + heartbeat |
| **Canvas API** | Pixel drawing | Matrix, CCTV, attack map, drone |
| **SVG** | Vector graphics | 20 masks, badge, crack overlay |
| **localStorage** | Persistent user data | Mask, theme, language, agent |
| **async/await** | Sequential animations | 182 uses |
| **getUserMedia** | Camera/mic access | Face Glitch, Voice Disguiser |
| **Google Fonts** | Typography | Share Tech Mono, Orbitron, Noto Kufi Arabic |

### What We Did NOT Use

| Not Used | Why |
|----------|-----|
| React/Vue/Angular | Zero deps = works forever, no build step |
| jQuery | Modern JS does everything |
| Audio files (MP3) | Web Audio generates sounds mathematically |
| Image files (PNG) | SVG masks generated with code |
| Backend/Server | 100% client-side |
| npm/Webpack | No build tools — just open the HTML |

---

## 📊 Complete Feature List (61)

See `howto.html` for full interactive documentation with 21 sections, expandable FAQ, and detailed usage instructions for every feature.

---

## 🛡️ Safety & Privacy

- **No real hacking** — all simulated
- **No data collection** — localStorage only
- **Works offline** — no server needed
- **No real camera access** — only on explicit user click
- **Every scare reveals "just kidding"**
- **Real educational content** — cryptography, history, CS concepts

---

## 💻 Browser Support

Chrome 80+, Firefox 75+, Safari 14+, Edge 80+, Mobile ✅

---

*We are Anony... we never log off.* 🎭
