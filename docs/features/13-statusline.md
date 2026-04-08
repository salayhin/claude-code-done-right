---
title: "Statusline"
tagline: "A persistent at-a-glance view of context, cost, and git status."
order: 13
---

# Statusline

> A customizable bar at the bottom of Claude Code that runs any shell script you configure.

The status line receives JSON session data on stdin and displays whatever your script prints — giving you a persistent, real-time view of context usage, costs, git status, or anything else you want to track.

## Key points

- Runs any shell script you configure — full flexibility over what gets displayed

- Receives JSON session data on stdin so your script can read model, cost, context, duration, and more

- Use `/statusline` command with natural language to auto-generate a script and update settings

- Displays on the bottom bar persistently across your entire session

- Supports multi-line output — show git info on line 1 and a context bar on line 2

- Great for monitoring context window usage before hitting limits

- Useful when working across multiple sessions to distinguish them at a glance

<div style="display:flex;justify-content:center;margin:24px 0">
<svg viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">
  <!-- Terminal window -->
  <rect x="30" y="20" width="440" height="220" fill="#0A0A0A" stroke="#ABABAB" stroke-width="1" rx="4"/>

  <!-- Top bar -->
  <rect x="30" y="20" width="440" height="24" fill="#1A1A1A" stroke="#ABABAB" stroke-width="1" rx="4"/>
  <circle cx="50" cy="32" r="5" fill="#FF5F57"/>
  <circle cx="66" cy="32" r="5" fill="#FEBC2E"/>
  <circle cx="82" cy="32" r="5" fill="#28C840"/>
  <text x="200" y="37" font-family="monospace" font-size="9" fill="#ABABAB" text-anchor="middle">Claude Code</text>

  <!-- Chat area -->
  <text x="50" y="70" font-family="monospace" font-size="9" fill="#ABABAB">› Working on feature implementation...</text>
  <text x="50" y="90" font-family="monospace" font-size="9" fill="#4ADE80">✓ Files written</text>
  <text x="50" y="110" font-family="monospace" font-size="9" fill="#ABABAB">› Running tests...</text>

  <!-- Status line separator -->
  <line x1="30" y1="175" x2="470" y2="175" stroke="#333333" stroke-width="1"/>

  <!-- Status line row 1: model + dir + git -->
  <rect x="30" y="175" width="440" height="22" fill="#111111"/>
  <text x="45" y="190" font-family="monospace" font-size="9" fill="#D97706">claude-sonnet-4-5</text>
  <text x="185" y="190" font-family="monospace" font-size="9" fill="#ABABAB">~/projects/my-app</text>
  <text x="340" y="190" font-family="monospace" font-size="9" fill="#4ADE80"> main ✓</text>

  <!-- Status line separator 2 -->
  <line x1="30" y1="197" x2="470" y2="197" stroke="#222222" stroke-width="1"/>

  <!-- Status line row 2: context bar + cost + duration -->
  <rect x="30" y="197" width="440" height="22" fill="#0D0D0D"/>

  <!-- Context bar background -->
  <rect x="45" y="204" width="200" height="8" fill="#2A2A2A" rx="2"/>
  <!-- Context bar fill (62%) -->
  <rect x="45" y="204" width="124" height="8" fill="#D97706" rx="2"/>
  <text x="252" y="212" font-family="monospace" font-size="8" fill="#D97706">62%</text>

  <text x="310" y="212" font-family="monospace" font-size="8" fill="#ABABAB">$0.042</text>
  <text x="375" y="212" font-family="monospace" font-size="8" fill="#ABABAB">4m 12s</text>
</svg>
</div>

## Available JSON fields

| Field | Description |
|-------|-------------|
| `model` | Current model name |
| `context_tokens_used` | Tokens consumed so far |
| `context_tokens_limit` | Total token limit |
| `session_cost_usd` | Cost of the current session |
| `session_duration_ms` | Duration in milliseconds |
| `cwd` | Current working directory |
| `git_branch` | Active git branch |
| `git_status` | Clean / dirty status |

## Example

```bash
# Generate a status line with natural language
/statusline show model name and context percentage with a progress bar

# Claude Code creates the script at ~/.claude/ and updates settings automatically
```

```json
// Add to settings.json to register the script
{
  "statusCommand": "~/.claude/statusline.sh"
}
```
