---
title: "Context Management"
tagline: "Monitor and optimize your token window (200K tokens)."
order: 9
---

# Context Management

> Monitor and optimize your token window (200K tokens).

Cloud works within a ~200K token window. As conversations grow, the window fills. Use /context to see what's consuming tokens. Run /compact to free space before hitting capacity.

## Key points

- Fixed context window of ~200K tokens

- /context shows exactly what's consuming space

- CLAUDE.md, skills, MCPs, conversation all count

- **Use `/clear` to wipe the slate completely.** Unlike `/compact` which summarizes history, `/clear` resets the entire conversation — no memory of what came before. Use it when you're switching to a completely unrelated task, when context is polluted with failed attempts, or when you want a clean start without baggage from the current session. Faster and cheaper than compaction when you simply don't need what's there.

<div style="display:flex;justify-content:center;margin:24px 0">
<svg viewBox="0 0 500 340" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">
  <!-- Token window -->
  <rect x="50" y="40" width="400" height="280" fill="#0A0A0A" stroke="#D97706" stroke-width="2" rx="4"/>
  <text x="70" y="65" font-family="monospace" font-size="12" fill="#D97706">200K Token Window</text>

  <!-- Segments -->
  <rect x="70" y="85" width="80" height="40" fill="#1E1E1E" stroke="#4ADE80" stroke-width="1"/>
  <text x="80" y="110" font-family="monospace" font-size="8" fill="#4ADE80">CLAUDE.md</text>
  <text x="80" y="120" font-family="monospace" font-size="8" fill="#ABABAB">8K</text>

  <rect x="160" y="85" width="200" height="40" fill="#1E1E1E" stroke="#4ADE80" stroke-width="1"/>
  <text x="170" y="110" font-family="monospace" font-size="8" fill="#4ADE80">Conversation</text>
  <text x="170" y="120" font-family="monospace" font-size="8" fill="#ABABAB">85K</text>

  <rect x="370" y="85" width="60" height="40" fill="#1E1E1E" stroke="#F87171" stroke-width="1"/>
  <text x="375" y="110" font-family="monospace" font-size="8" fill="#F87171">Skills</text>
  <text x="375" y="120" font-family="monospace" font-size="8" fill="#ABABAB">30K</text>

  <!-- Free space -->
  <rect x="70" y="135" width="360" height="30" fill="none" stroke="#ABABAB" stroke-width="1" stroke-dasharray="2,2"/>
  <text x="80" y="155" font-family="monospace" font-size="9" fill="#ABABAB">77K free (38%)</text>

  <!-- Warning threshold -->
  <line x1="280" y1="85" x2="280" y2="185" stroke="#D97706" stroke-width="2" stroke-dasharray="4,4"/>
  <text x="285" y="205" font-family="monospace" font-size="8" fill="#D97706">⚠ 160K = run /compact</text>

  <!-- Divider -->
  <line x1="70" y1="225" x2="430" y2="225" stroke="#1E1E1E" stroke-width="1"/>

  <!-- Commands -->
  <text x="70" y="248" font-family="monospace" font-size="10" fill="#D97706">/context  →  See breakdown</text>
  <text x="70" y="270" font-family="monospace" font-size="10" fill="#4ADE80">/compact  →  Free space (keeps summary)</text>
  <text x="70" y="292" font-family="monospace" font-size="10" fill="#F87171">/clear    →  Full reset (no memory)</text>
</svg>
</div>

## Example

```bash
## Monitor Context

/context

Output:
  CLAUDE.md                ████░░░░░░  8K
  Conversation history     ████████░░  85K
  MCP: github descriptions ██░░░░░░░░  18K
  Skills                   ██░░░░░░░░  12K
  ──────────────────────────────────────
  TOTAL: 123K / 200K (61%)

When approaching 160K, run:
  /compact "keep auth refactor progress"

# Switching to a completely different task? Just reset:
  /clear
# No history. No baggage. Fresh session.
```
