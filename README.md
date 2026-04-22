# 🖥️ Mac OS Portfolio

An interactive, web-based Mac OS desktop experience built with React — featuring draggable windows, a dock, wallpaper switching, and multiple apps showcasing my work.

🔗 **Live Demo:** [mac-os-red.vercel.app](https://mac-os-red.vercel.app/)

---

## ✨ Features

- 🎨 **Wallpaper Switcher** — Click the Apple icon in the nav to cycle through wallpapers & video backgrounds
- 🪟 **Draggable & Resizable Windows** — All windows are movable and resizable (powered by `react-rnd`)
- 🔴 **Window Controls** — Red dot closes, Yellow dot minimizes, Green dot fullscreens — just like real Mac OS
- 🖥️ **CLI Terminal** — Interactive terminal with custom commands (`about`, `tech`, `projects`, `github`, `contact`)
- 🐙 **GitHub Projects** — Browse my projects with live demo & repo links
- 🎵 **Spotify Player** — Embedded Spotify playlist
- 📄 **Resume Viewer** — View my resume directly in the browser
- 📝 **Notes App** — Developer-style profile rendered in a terminal window
- ⚡ **Smooth Loading Animation** — Custom loading screen on startup

---

## 🛠️ Tech Stack

| Category | Tech |
|---|---|
| Framework | React.js |
| Styling | SCSS (Sass) |
| Bundler | Vite |
| Deployment | Vercel |
| Windows | react-rnd |
| Terminal | react-console-emulator |
| Markdown | react-markdown |

---

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/singhsujay866-web/Mac-os.git

# Navigate to project
cd Mac-os

# Install dependencies
npm install

# Run locally
npm run dev
```

---

## 💻 Terminal Commands

Once inside the CLI window, type `help` or use these commands:

| Command | Description |
|---|---|
| `about` | Info about me |
| `tech` | My tech stack & skills |
| `projects` | List all projects |
| `project <n>` | Project info (e.g. `project 1`) |
| `project <n> github` | Opens project GitHub repo |
| `project <n> live` | Opens project live demo |
| `github` | Opens my GitHub profile |
| `contact` | My contact information |
| `ls` | List directory |
| `whoami` | Current user |

---

## 📁 Project Structure

```
src/
├── assets/          # JSON data, icons
├── components/
│   ├── Windows/     # Github, Note, Resume, Spotify, Cli
│   ├── Background   # Wallpaper switcher
│   ├── Dock         # App dock
│   ├── Nav          # Top navigation
│   └── Loading      # Startup animation
├── data/
│   └── themes.jsx   # Wallpaper/video themes
└── App.jsx
```

---

## 📬 Contact

- **Email:** sujaysingh145@gmail.com
- **LinkedIn:** [sujay-singh-](https://www.linkedin.com/in/sujay-singh-/)
- **GitHub:** [singhsujay866-web](https://github.com/singhsujay866-web)

---

> Designed & Built by **Sujay Singh** — Frontend Developer based in Delhi 🇮🇳