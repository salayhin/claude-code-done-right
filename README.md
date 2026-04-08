# Claude Code, Done Right

> A practical guide to the Claude Code features that matter most for AI-native development.

🌐 **Live site:** [https://salayhin.github.io/claude-code-done-right/](https://salayhin.github.io/claude-code-done-right/)

Built with [VitePress](https://vitepress.dev) · Hosted on GitHub Pages · By [@salayhin](https://github.com/salayhin)

---

## Features Covered

| # | Feature | Description |
|---|---------|-------------|
| 1 | CLAUDE.md | Project memory and coding preferences |
| 2 | Permissions | Control what Claude can do |
| 3 | Plan Mode | Think before you build |
| 4 | Checkpoints | Rewind to earlier states |
| 5 | Skills | Reusable workflows |
| 6 | Hooks | Automatic actions on events |
| 7 | MCP | External tool access |
| 8 | Plugins | Shareable bundles |
| 9 | Context Management | Token window management |
| 10 | Compaction | Free up context space |
| 11 | Slash Commands | Keyboard shortcuts |
| 12 | Sub-agents | Parallel focused work |
| 13 | Statusline | Monitor context, cost, and git at a glance |

---

## Local Development

### Prerequisites

- Node.js 18+
- npm or pnpm

### Setup

```bash
# Clone the repo
git clone git@github.com:salayhin/claude-code-done-right.git
cd claude-code-done-right

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Build

```bash
npm run build
```

Output goes to `docs/.vitepress/dist/`

### Preview production build

```bash
npm run preview
```

---

## Deploy to GitHub Pages

### 1. Enable GitHub Pages

Go to your repo on GitHub:

**Settings → Pages → Source → GitHub Actions**

### 2. Add the workflow file

Create `.github/workflows/deploy.yml` in your repo (already included if you cloned this). It automatically builds and deploys on every push to `main`.

### 3. Push to main

```bash
git add .
git commit -m "Deploy"
git push origin main
```

GitHub Actions will build the site and publish it. Your site will be live at:

```
https://salayhin.github.io/claude-code-done-right/
```

---

## Project Structure

```
claude-code-done-right/
├── docs/
│   ├── .vitepress/
│   │   ├── config.ts       # Site config, nav, sidebar
│   │   └── theme/
│   │       └── custom.css  # Amber dark theme
│   ├── public/             # Static assets (SVGs, images)
│   ├── features/           # One .md per feature
│   │   ├── 1-claude.md
│   │   ├── 2-permissions.md
│   │   └── ...
│   └── index.md            # Homepage
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Pages CI/CD
├── package.json
└── README.md
```

---

## Tech Stack

- **[VitePress](https://vitepress.dev)** — Static site generator
- **Dark + Amber theme** — Custom CSS variables
- **GitHub Actions** — Automated build & deploy
- **GitHub Pages** — Free hosting

---

## License

MIT
