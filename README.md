# 📐 Math Mastery 10

> An interactive, premium learning platform for **Class 10 NCERT Mathematics**. Master all 10 chapters with step-by-step explanations, interactive quizzes, formula sheets, and smart progress tracking.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![KaTeX](https://img.shields.io/badge/KaTeX-Math%20Rendering-green)
![Chart.js](https://img.shields.io/badge/Chart.js-Analytics-blue)

---

## ✨ Features

### 📚 Complete Topic Library
All 10 NCERT Class 10 Math chapters with comprehensive theory, worked examples, and common mistakes:
- Real Numbers
- Polynomials
- Linear Equations in Two Variables
- Quadratic Equations
- Arithmetic Progressions
- Triangles & Similarity
- Circles
- Trigonometry
- Coordinate Geometry
- Statistics & Probability

### ✏️ Interactive Practice Quizzes
- **66+ questions** across all topics
- MCQ and numerical answer types
- Three difficulty levels: Easy, Medium, Hard
- Optional 30-second timer mode
- Instant feedback with step-by-step solutions
- Score tracking and history

### 📋 Formula Sheet
- 81 formulas organized by topic
- Beautiful KaTeX math rendering
- Search and filter by topic
- Copy-to-clipboard functionality
- Bookmark your favorites

### ❓ Doubt Clearing
- Submit math questions in text
- Topic categorization
- Auto-generated topic-specific guidance
- Solution history with bookmarks

### 📊 Performance Dashboard
- Chart.js powered analytics
- Topic-wise accuracy breakdown
- Streak counter and daily goals
- Weak area identification
- Personalized study recommendations
- Quiz history table

### 🎨 Premium Design
- Glassmorphism UI with backdrop blur
- Dark/Light mode with system preference detection
- Gradient text animations
- Responsive mobile-first design
- Smooth page transitions
- Floating math symbol animations

---

## 🚀 Quick Start

### Option 1: Open Directly
Since this is a vanilla HTML/CSS/JS project using ES modules, you need a local server:

```bash
# Using Python
python -m http.server 3000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:3000
```

Then open `http://localhost:3000` in your browser.

### Option 2: VS Code Live Server
1. Install the **Live Server** extension in VS Code
2. Right-click `index.html` → "Open with Live Server"

### Option 3: Deploy to GitHub Pages
1. Push this repo to GitHub
2. Go to Settings → Pages → Deploy from branch (main)
3. Your site will be live at `https://your-username.github.io/math-mastery-10/`

---

## 📁 Project Structure

```
math-mastery-10/
├── index.html              # App shell with CDN dependencies
├── style.css               # Complete design system (38KB)
├── main.js                 # Entry point, router, search, toasts
├── README.md
├── .gitignore
├── src/
│   ├── app.js              # Hash-based SPA router
│   ├── theme.js            # Dark/light mode manager
│   ├── storage.js          # localStorage persistence layer
│   ├── data/
│   │   ├── topics.js       # 10 topics with theory & examples (61KB)
│   │   ├── questions.js    # 66 practice questions (47KB)
│   │   └── formulas.js     # 81 formulas database (27KB)
│   └── pages/
│       ├── home.js         # Landing page with hero & stats
│       ├── topics.js       # Topic library grid
│       ├── topicDetail.js  # Single topic view with tabs
│       ├── practice.js     # Interactive quiz engine
│       ├── formulas.js     # Searchable formula sheet
│       ├── doubts.js       # Doubt clearing section
│       └── profile.js      # Performance dashboard
└── public/                 # Static assets
```

---

## 🛠 Tech Stack

| Technology | Purpose |
|-----------|---------|
| Vanilla HTML/CSS/JS | Core application (zero build step!) |
| ES Modules | Component-based architecture |
| CSS Custom Properties | Theming & design tokens |
| KaTeX | Beautiful math formula rendering |
| Chart.js | Performance analytics charts |
| localStorage | Progress & data persistence |
| Google Fonts | Inter, Space Grotesk, JetBrains Mono |

---

## 🌗 Themes

The app supports **Dark** and **Light** modes with automatic system preference detection. Toggle manually via the 🌙/☀️ button in the navigation bar.

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl + K` | Open search |
| `Escape` | Close search / sidebar |
| `Ctrl + Enter` | Submit doubt |

---

## 📱 Responsive Design

Fully responsive across all devices:
- **Desktop** (1200px+): Full navigation, multi-column grids
- **Tablet** (768px-1200px): Adaptive layouts
- **Mobile** (<768px): Hamburger menu, single column, touch-friendly

---

## 📄 License

MIT License — Free to use, modify, and distribute.

---

Built with 💜 for Class 10 students. Happy learning! 🎓
