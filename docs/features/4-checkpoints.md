---
title: "Checkpoints"
tagline: "Rewind to any earlier state if something goes wrong."
order: 4
---

# Checkpoints

> Rewind to any earlier state if something goes wrong.

Cloud automatically snapshots your files before each edit. If an edit is wrong, rewind to any previous checkpoint without losing working code.

## Key points

- Automatic snapshots before every edit — no setup needed

- Press `Esc`+`Esc` or type `/rewind` to open the rewind menu

- Choose what to rewind — individual files or whole state

- Try bold experiments without fear of breaking things

<div style="display:flex;justify-content:center;margin:24px 0">
<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">
  <!-- Timeline -->
  <line x1="50" y1="150" x2="450" y2="150" stroke="#D97706" stroke-width="2"/>

  <!-- Checkpoints -->
  <circle cx="80" cy="150" r="8" fill="#4ADE80" stroke="#4ADE80" stroke-width="2"/>
  <text x="80" y="180" font-family="monospace" font-size="9" fill="#E2E2E2" text-anchor="middle">14:00</text>

  <circle cx="160" cy="150" r="8" fill="#4ADE80" stroke="#4ADE80" stroke-width="2"/>
  <text x="160" y="180" font-family="monospace" font-size="9" fill="#E2E2E2" text-anchor="middle">14:18</text>

  <circle cx="240" cy="150" r="8" fill="#4ADE80" stroke="#4ADE80" stroke-width="2"/>
  <text x="240" y="180" font-family="monospace" font-size="9" fill="#E2E2E2" text-anchor="middle">14:25</text>

  <circle cx="320" cy="150" r="8" fill="#D97706" stroke="#D97706" stroke-width="3"/>
  <text x="320" y="180" font-family="monospace" font-size="9" fill="#D97706" text-anchor="middle" font-weight="bold">14:32 ← Wrong edit</text>

  <circle cx="400" cy="150" r="8" fill="#ABABAB" stroke="#ABABAB" stroke-width="2"/>
  <text x="400" y="180" font-family="monospace" font-size="9" fill="#ABABAB" text-anchor="middle">14:40</text>

  <!-- Rewind arrow -->
  <path d="M 400 220 L 240 220" stroke="#F87171" stroke-width="2" fill="none" marker-end="url(#arrow-rewind)"/>
  <text x="320" y="245" font-family="monospace" font-size="11" fill="#F87171" text-anchor="middle">Esc+Esc or /rewind → select checkpoint</text>

  <defs>
    <marker id="arrow-rewind" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <polygon points="0 0, 10 3, 0 6" fill="#F87171"/>
    </marker>
  </defs>
</svg>
</div>

## Example

```bash
## Using Checkpoints

/rewind

Output:
  ▸ 14:32 — Refactored auth module
    14:25 — Added rate limiting
    14:18 — Session token implementation
    14:00 — Started auth refactor

Select "Refactored auth module" to restore
```
