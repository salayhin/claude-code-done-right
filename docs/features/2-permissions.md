---
title: "Permissions"
tagline: "Control what Claude can read, write, and execute."
order: 2
---

# Permissions

> Control what Claude can read, write, and execute.

Balance speed and safety by pre-approving safe actions and blocking dangerous ones. Use `/permissions` to customize the allow/block list.

## Key points

- By default, Claude asks for approval before editing or running bash

- Pre-approve safe actions: run tests, commit code, format files

- Block dangerous ones: delete files, push with `--force`, drop databases

- Type `/permissions` to open the interactive menu

- **Scopes control precedence.** The same permission can be set at multiple levels. More specific always wins: Managed → CLI args → Local → Project → User. If a permission is allowed in user settings but denied in project settings, project wins and it's blocked.

- **Five scope locations.** Settings live at `~/.claude/settings.json` (user), `.claude/settings.json` (project), and `.claude/settings.local.json` (local). The same pattern applies to agents, MCP servers, plugins, and CLAUDE.md files.

- **Use `allow` and `deny` arrays in settings.json.** Permissions take the form `Tool(pattern)` — e.g. `Bash(npm run test *)`, `Read(~/.zshrc)`, `Read(./.env)`. Wildcards supported.

- **Deny sensitive paths globally.** Block reads on `.env`, `.env.*`, and `secrets/**` at the user scope so no project can accidentally expose them.

<div style="display:flex;justify-content:center;margin:24px 0">
<svg viewBox="0 0 500 320" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">
  <!-- Claude -->
  <circle cx="250" cy="80" r="30" fill="#D97706" stroke="#D97706" stroke-width="2"/>
  <text x="250" y="85" font-family="sans-serif" font-size="10" fill="#000" text-anchor="middle" font-weight="bold">Claude</text>

  <!-- Allow list -->
  <rect x="60" y="160" width="140" height="120" fill="#141414" stroke="#4ADE80" stroke-width="2" rx="4"/>
  <text x="80" y="180" font-family="monospace" font-size="11" fill="#4ADE80">✓ Allowed</text>
  <text x="80" y="200" font-family="monospace" font-size="9" fill="#E2E2E2">npm run test *</text>
  <text x="80" y="215" font-family="monospace" font-size="9" fill="#E2E2E2">npm run lint</text>
  <text x="80" y="230" font-family="monospace" font-size="9" fill="#E2E2E2">git commit</text>
  <text x="80" y="245" font-family="monospace" font-size="9" fill="#E2E2E2">Read(~/.zshrc)</text>
  <text x="80" y="260" font-family="monospace" font-size="9" fill="#E2E2E2">npm build</text>

  <!-- Block list -->
  <rect x="300" y="160" width="140" height="120" fill="#141414" stroke="#F87171" stroke-width="2" rx="4"/>
  <text x="320" y="180" font-family="monospace" font-size="11" fill="#F87171">✗ Denied</text>
  <text x="320" y="200" font-family="monospace" font-size="9" fill="#E2E2E2">Bash(curl *)</text>
  <text x="320" y="215" font-family="monospace" font-size="9" fill="#E2E2E2">Read(./.env)</text>
  <text x="320" y="230" font-family="monospace" font-size="9" fill="#E2E2E2">Read(./.env.*)</text>
  <text x="320" y="245" font-family="monospace" font-size="9" fill="#E2E2E2">Read(./secrets/**)</text>
  <text x="320" y="260" font-family="monospace" font-size="9" fill="#E2E2E2">push --force</text>

  <!-- Arrows -->
  <path d="M 220 110 L 130 160" stroke="#4ADE80" stroke-width="2" fill="none" marker-end="url(#arrow-allow)"/>
  <path d="M 280 110 L 370 160" stroke="#F87171" stroke-width="2" fill="none" marker-end="url(#arrow-block)"/>

  <defs>
    <marker id="arrow-allow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <polygon points="0 0, 10 3, 0 6" fill="#4ADE80"/>
    </marker>
    <marker id="arrow-block" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <polygon points="0 0, 10 3, 0 6" fill="#F87171"/>
    </marker>
  </defs>
</svg>
</div>

## Example — simple

```bash
## Example Permissions

### Allow (pre-approved)
- Run: pytest, npm test, npm run build
- Write: .env.local, .gitignore, test files
- Bash: git commit, git push (non-force)

### Block (always denied)
- Bash: rm -rf, git push --force
- Write: package.json (without review)
- Delete: source files without git backup
```

## Example — settings.json

```json
{
  "$schema": "https://json.schemastore.org/claude-code-settings.json",
  "permissions": {
    "allow": [
      "Bash(npm run lint)",
      "Bash(npm run test *)",
      "Read(~/.zshrc)"
    ],
    "deny": [
      "Bash(curl *)",
      "Read(./.env)",
      "Read(./.env.*)",
      "Read(./secrets/**)"
    ]
  },
  "env": {
    "CLAUDE_CODE_ENABLE_TELEMETRY": "1",
    "OTEL_METRICS_EXPORTER": "otlp"
  },
  "companyAnnouncements": [
    "Welcome to Acme Corp! Review our code guidelines at docs.acme.com",
    "Reminder: Code reviews required for all PRs"
  ]
}
```

## Scope precedence

| Scope | Location | Priority |
|-------|----------|----------|
| Managed | org policy | Highest — cannot be overridden |
| CLI args | `--allow` / `--deny` flags | Session-only override |
| Local | `.claude/settings.local.json` | Overrides project + user |
| Project | `.claude/settings.json` | Overrides user |
| User | `~/.claude/settings.json` | Lowest |
