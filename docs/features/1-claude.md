---
title: "CLAUDE.md"
tagline: "Your project's persistent memory and coding preferences."
order: 1
---

# CLAUDE.md

> Your project's persistent memory and coding preferences.

A markdown file in your project root that Claude reads at the start of every session. Define coding rules, preferences, and project structure that Claude follows automatically.

## Key points

- Sits in your project root — Claude discovers it automatically

- Use `/init` to auto-generate one for your project

- **Keep it under 200 lines.** This is the single highest-leverage file. Claude reads it first, follows it always. But past 200 lines, context bloats and instruction adherence drops. Write build commands, architecture decisions, naming conventions. Skip the theory.

- **Use `CLAUDE.local.md` for personal overrides.** Your preferences shouldn't pollute the team config. This file sits alongside CLAUDE.md but stays gitignored automatically. Your quirks, your rules, your repo.

- **Split growing instructions into `.claude/rules/`.** Once CLAUDE.md gets crowded, modularize. One file per concern — `code-style.md`, `testing.md`, `api-conventions.md`. Different owners, zero conflicts.

- **Scope rules to specific file paths.** Add YAML frontmatter with a `paths` field. Claude only loads that rule when it's working in matching directories. Irrelevant instructions never enter context.

- **Set up `~/.claude/` for cross-project defaults.** Global CLAUDE.md for personal coding principles. Global commands for daily workflows. Global skills for patterns you repeat everywhere. One setup. Every project benefits.

<div style="display:flex;justify-content:center;margin:24px 0">
<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">
  <!-- Project Root -->
  <rect x="40" y="40" width="420" height="240" fill="#0A0A0A" stroke="#D97706" stroke-width="2" rx="4"/>
  <text x="60" y="65" font-family="monospace" font-size="12" fill="#D97706">Project Root</text>

  <!-- CLAUDE.md file -->
  <rect x="70" y="100" width="120" height="80" fill="#141414" stroke="#D97706" stroke-width="2" rx="3"/>
  <text x="85" y="125" font-family="monospace" font-size="11" fill="#E2E2E2">CLAUDE.md</text>
  <text x="85" y="145" font-family="monospace" font-size="9" fill="#ABABAB">Rules</text>
  <text x="85" y="160" font-family="monospace" font-size="9" fill="#ABABAB">Preferences</text>
  <text x="85" y="175" font-family="monospace" font-size="9" fill="#ABABAB">Structure</text>

  <!-- Claude Session -->
  <rect x="280" y="100" width="140" height="80" fill="#141414" stroke="#D97706" stroke-width="2" rx="3"/>
  <text x="295" y="125" font-family="monospace" font-size="11" fill="#E2E2E2">Claude Session</text>
  <text x="295" y="145" font-family="monospace" font-size="9" fill="#4ADE80">Reads</text>
  <text x="295" y="160" font-family="monospace" font-size="9" fill="#4ADE80">Follows</text>
  <text x="295" y="175" font-family="monospace" font-size="9" fill="#4ADE80">Remembers</text>

  <!-- Arrow -->
  <path d="M 190 140 L 280 140" stroke="#D97706" stroke-width="2" fill="none" marker-end="url(#arrowhead)"/>

  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <polygon points="0 0, 10 3, 0 6" fill="#D97706"/>
    </marker>
  </defs>

  <text x="70" y="230" font-family="sans-serif" font-size="12" fill="#ABABAB">Every session starts by reading</text>
  <text x="70" y="248" font-family="sans-serif" font-size="12" fill="#ABABAB">CLAUDE.md from your project</text>
</svg>
</div>

## Example

```bash
## Example CLAUDE.md

### Rules
- Always write unit tests for new functions
- Use async/await, never callbacks
- Follow ESLint config in .eslintrc

### Project
Node.js backend · TypeScript · AWS Lambda

### Key Patterns
- Import alias: @/utils (never ../../utils)
- Error handling: always include error type in responses
```
