---
title: "Slash Commands"
tagline: "Keyboard shortcuts for common workflows."
order: 11
---

# Slash Commands

> Keyboard shortcuts for common workflows.

Type / to trigger common workflows: /context, /init, /permissions, /restore, /compact, /help. One slash + keyword = instant action.

## Key points

- Quick access to core features — no remembering syntax

- Examples: /init, /context, /permissions, /restore, /compact, /help

- Type /help to see all available commands

- New commands added regularly — check after updates

<div style="display:flex;justify-content:center;margin:24px 0">
<svg viewBox="0 0 500 320" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">
  <!-- Terminal -->
  <rect x="40" y="40" width="420" height="260" fill="#0A0A0A" stroke="#ABABAB" stroke-width="1" rx="4"/>
  <text x="60" y="65" font-family="monospace" font-size="10" fill="#ABABAB">$ cloud</text>

  <!-- Commands grid -->
  <rect x="60" y="85" width="180" height="80" fill="#1E1E1E" stroke="#D97706" stroke-width="1" rx="3"/>
  <text x="75" y="105" font-family="monospace" font-size="10" fill="#D97706">/init</text>
  <text x="75" y="120" font-family="monospace" font-size="8" fill="#ABABAB">Create CLAUDE.md</text>
  <text x="75" y="130" font-family="monospace" font-size="8" fill="#ABABAB">/context</text>
  <text x="75" y="140" font-family="monospace" font-size="8" fill="#ABABAB">Token usage</text>
  <text x="75" y="150" font-family="monospace" font-size="8" fill="#ABABAB">/permissions</text>
  <text x="75" y="160" font-family="monospace" font-size="8" fill="#ABABAB">Allow/block actions</text>

  <rect x="260" y="85" width="180" height="80" fill="#1E1E1E" stroke="#D97706" stroke-width="1" rx="3"/>
  <text x="275" y="105" font-family="monospace" font-size="10" fill="#D97706">/restore</text>
  <text x="275" y="120" font-family="monospace" font-size="8" fill="#ABABAB">Rewind checkpoint</text>
  <text x="275" y="130" font-family="monospace" font-size="8" fill="#ABABAB">/compact</text>
  <text x="275" y="140" font-family="monospace" font-size="8" fill="#ABABAB">Free space</text>
  <text x="275" y="150" font-family="monospace" font-size="8" fill="#ABABAB">/help</text>
  <text x="275" y="160" font-family="monospace" font-size="8" fill="#ABABAB">All commands</text>

  <!-- Keyboard shortcut -->
  <rect x="60" y="180" width="380" height="40" fill="#1E1E1E" stroke="#4ADE80" stroke-width="1" rx="3"/>
  <text x="75" y="200" font-family="monospace" font-size="10" fill="#4ADE80">Shift + Tab</text>
  <text x="75" y="215" font-family="monospace" font-size="8" fill="#ABABAB">Plan ↔ Normal mode</text>

  <!-- Shortcut -->
  <text x="310" y="200" font-family="monospace" font-size="12" fill="#D97706" text-anchor="middle">Type / to trigger</text>
  <text x="310" y="215" font-family="monospace" font-size="11" fill="#ABABAB" text-anchor="middle">any command</text>
</svg>
</div>

## Example

```bash
## Common Slash Commands

/init              → Auto-generate CLAUDE.md for your project
/context           → See token usage breakdown
/permissions       → Customize allow/block list
/restore           → Rewind to a previous checkpoint
/compact           → Compress conversation, free space
/help              → Full list of all commands
/agents            → Create a sub-agent
```
