---
title: "Sub-agents"
tagline: "Spawn separate sessions for focused, parallel work."
order: 12
---

# Sub-agents

> Spawn separate sessions for focused, parallel work.

For complex tasks, split into smaller pieces. Sub-agents work independently on specific areas (security review, performance analysis, etc.), then return summaries.

## Key points

- Separate Cloud session for one specific job

- Keeps main conversation clean and focused

- Parallel work — sub-agents work independently

- Perfect for: security reviews, performance analysis, refactoring

<div style="display:flex;justify-content:center;margin:24px 0">
<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">
  <!-- Main session -->
  <rect x="40" y="40" width="420" height="80" fill="#141414" stroke="#D97706" stroke-width="2" rx="4"/>
  <text x="60" y="65" font-family="monospace" font-size="11" fill="#D97706">Main Session</text>
  <text x="60" y="85" font-family="monospace" font-size="9" fill="#ABABAB">"Build a rate-limited auth system"</text>
  <text x="60" y="100" font-family="monospace" font-size="9" fill="#ABABAB">Clean, focused conversation</text>

  <!-- Sub-agents -->
  <rect x="40" y="160" width="130" height="110" fill="#141414" stroke="#4ADE80" stroke-width="1" rx="3"/>
  <text x="55" y="180" font-family="monospace" font-size="10" fill="#4ADE80">Sub-agent 1</text>
  <text x="55" y="195" font-family="monospace" font-size="8" fill="#ABABAB">security-review</text>
  <text x="55" y="210" font-family="monospace" font-size="8" fill="#ABABAB">Analyze auth/</text>
  <text x="55" y="225" font-family="monospace" font-size="8" fill="#ABABAB">for vulns</text>
  <text x="55" y="243" font-family="monospace" font-size="8" fill="#E2E2E2">Return findings</text>

  <rect x="185" y="160" width="130" height="110" fill="#141414" stroke="#4ADE80" stroke-width="1" rx="3"/>
  <text x="200" y="180" font-family="monospace" font-size="10" fill="#4ADE80">Sub-agent 2</text>
  <text x="200" y="195" font-family="monospace" font-size="8" fill="#ABABAB">performance</text>
  <text x="200" y="210" font-family="monospace" font-size="8" fill="#ABABAB">Profile</text>
  <text x="200" y="225" font-family="monospace" font-size="8" fill="#ABABAB">bottlenecks</text>
  <text x="200" y="243" font-family="monospace" font-size="8" fill="#E2E2E2">Return report</text>

  <rect x="330" y="160" width="130" height="110" fill="#141414" stroke="#4ADE80" stroke-width="1" rx="3"/>
  <text x="345" y="180" font-family="monospace" font-size="10" fill="#4ADE80">Sub-agent 3</text>
  <text x="345" y="195" font-family="monospace" font-size="8" fill="#ABABAB">test-coverage</text>
  <text x="345" y="210" font-family="monospace" font-size="8" fill="#ABABAB">Generate</text>
  <text x="345" y="225" font-family="monospace" font-size="8" fill="#ABABAB">unit tests</text>
  <text x="345" y="243" font-family="monospace" font-size="8" fill="#E2E2E2">Return tests</text>

  <!-- Arrows -->
  <path d="M 100 120 L 100 160" stroke="#4ADE80" stroke-width="1" fill="none"/>
  <path d="M 250 120 L 250 160" stroke="#4ADE80" stroke-width="1" fill="none"/>
  <path d="M 400 120 L 400 160" stroke="#4ADE80" stroke-width="1" fill="none"/>
</svg>
</div>

## Example

```bash
## Create a Sub-agent

/agents

Select: create agent
Name: security-review
Prompt: "Analyze code in auth/ for vulnerabilities,
         hardcoded secrets, and insecure patterns.
         Return findings only."

Sub-agent works independently, main session stays clean.
```
