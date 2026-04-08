---
title: "Compaction"
tagline: "Compress conversation history to free up context space."
order: 10
---

# Compaction

> Compress conversation history to free up context space.

As your conversation grows and approaches the token limit, use /compact to automatically summarize and compress older messages. Keep the important context, discard the verbose parts.

## Key points

- Automatically summarizes old conversation history

- Type /compact with a note about what to preserve

- Frees up tokens without losing key decisions

- Run before hitting the 160K token limit

<div style="display:flex;justify-content:center;margin:24px 0">
<svg viewBox="0 0 500 320" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">
  <!-- Before -->
  <text x="100" y="25" font-family="monospace" font-size="11" fill="#E2E2E2" text-anchor="middle">Before</text>
  <rect x="30" y="40" width="140" height="180" fill="#0A0A0A" stroke="#F87171" stroke-width="2" rx="4"/>

  <rect x="40" y="55" width="120" height="25" fill="#1E1E1E" stroke="#F87171" stroke-width="1"/>
  <text x="100" y="72" font-family="monospace" font-size="9" fill="#F87171" text-anchor="middle">85K conversation</text>

  <rect x="40" y="85" width="120" height="30" fill="#1E1E1E" stroke="#D97706" stroke-width="1"/>
  <text x="100" y="100" font-family="monospace" font-size="8" fill="#D97706" text-anchor="middle">Verbose chatter</text>
  <text x="100" y="112" font-family="monospace" font-size="8" fill="#D97706" text-anchor="middle">Back-and-forth</text>

  <rect x="40" y="120" width="120" height="20" fill="#1E1E1E" stroke="#4ADE80" stroke-width="1"/>
  <text x="100" y="133" font-family="monospace" font-size="8" fill="#4ADE80" text-anchor="middle">Key decisions</text>

  <text x="100" y="175" font-family="monospace" font-size="10" fill="#E2E2E2" text-anchor="middle" font-weight="bold">Approaching</text>
  <text x="100" y="190" font-family="monospace" font-size="10" fill="#F87171" text-anchor="middle" font-weight="bold">160K limit</text>

  <!-- Arrow -->
  <path d="M 180 130 L 270 130" stroke="#D97706" stroke-width="2" fill="none" marker-end="url(#arrow-compact)"/>
  <text x="225" y="120" font-family="monospace" font-size="10" fill="#D97706" text-anchor="middle">/compact</text>

  <!-- After -->
  <text x="400" y="25" font-family="monospace" font-size="11" fill="#E2E2E2" text-anchor="middle">After</text>
  <rect x="330" y="40" width="140" height="180" fill="#0A0A0A" stroke="#4ADE80" stroke-width="2" rx="4"/>

  <rect x="340" y="55" width="120" height="25" fill="#1E1E1E" stroke="#4ADE80" stroke-width="1"/>
  <text x="400" y="72" font-family="monospace" font-size="9" fill="#4ADE80" text-anchor="middle">35K summary</text>

  <rect x="340" y="85" width="120" height="25" fill="#1E1E1E" stroke="#4ADE80" stroke-width="1"/>
  <text x="400" y="97" font-family="monospace" font-size="8" fill="#4ADE80" text-anchor="middle">All decisions kept</text>
  <text x="400" y="107" font-family="monospace" font-size="8" fill="#4ADE80" text-anchor="middle">Cleaned up</text>

  <rect x="340" y="115" width="120" height="15" fill="#1E1E1E" stroke="#4ADE80" stroke-width="1"/>
  <text x="400" y="125" font-family="monospace" font-size="7" fill="#4ADE80" text-anchor="middle">Compressed</text>

  <text x="400" y="165" font-family="monospace" font-size="10" fill="#E2E2E2" text-anchor="middle" font-weight="bold">50K freed</text>
  <text x="400" y="180" font-family="monospace" font-size="10" fill="#4ADE80" text-anchor="middle" font-weight="bold">Ready to build</text>

  <defs>
    <marker id="arrow-compact" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <polygon points="0 0, 10 3, 0 6" fill="#D97706"/>
    </marker>
  </defs>
</svg>
</div>

## Example

```bash
## Compress Conversation

/compact "keep auth refactor progress, decisions about token usage"

Result:
  ✓ Conversation compressed from 85K → 35K
  ✓ Kept all key decisions and code changes
  ✓ Removed verbose explanations and back-and-forth

Now you have room to continue building.
```
