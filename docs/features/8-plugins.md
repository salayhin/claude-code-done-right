---
title: "Plugins"
tagline: "Bundle and share your entire setup with your team."
order: 8
---

# Plugins

> Bundle and share your entire setup with your team.

Plugins are single-install packages containing skills, hooks, MCP servers, and configuration. Share your perfect setup with one command.

## Key points

- Package everything: skills, hooks, sub-agents, MCPs, metadata

- Publish to marketplace or Git repo

- Teammates install with one command

- No need to walk through manual configs — one-click setup

<div style="display:flex;justify-content:center;margin:24px 0">
<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">
  <!-- Plugin Package -->
  <rect x="80" y="40" width="340" height="150" fill="#141414" stroke="#D97706" stroke-width="2" rx="4"/>
  <text x="105" y="65" font-family="monospace" font-size="12" fill="#D97706" font-weight="bold">auth-workflow-plugin</text>

  <!-- Contents -->
  <rect x="105" y="80" width="90" height="40" fill="#1E1E1E" stroke="#4ADE80" stroke-width="1" rx="2"/>
  <text x="115" y="100" font-family="monospace" font-size="9" fill="#4ADE80">Skills</text>
  <text x="115" y="113" font-family="monospace" font-size="8" fill="#ABABAB">test-auth</text>

  <rect x="205" y="80" width="90" height="40" fill="#1E1E1E" stroke="#4ADE80" stroke-width="1" rx="2"/>
  <text x="215" y="100" font-family="monospace" font-size="9" fill="#4ADE80">Hooks</text>
  <text x="215" y="113" font-family="monospace" font-size="8" fill="#ABABAB">format</text>

  <rect x="305" y="80" width="90" height="40" fill="#1E1E1E" stroke="#4ADE80" stroke-width="1" rx="2"/>
  <text x="315" y="100" font-family="monospace" font-size="9" fill="#4ADE80">MCPs</text>
  <text x="315" y="113" font-family="monospace" font-size="8" fill="#ABABAB">github</text>

  <!-- Arrow to install -->
  <path d="M 250 190 L 250 220" stroke="#D97706" stroke-width="2" fill="none" marker-end="url(#arrow-install)"/>

  <!-- Install command -->
  <rect x="120" y="220" width="260" height="40" fill="#060606" stroke="#ABABAB" stroke-width="1" rx="3"/>
  <text x="140" y="245" font-family="monospace" font-size="10" fill="#D97706">/plugin install your-username/auth-workflow</text>

  <defs>
    <marker id="arrow-install" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <polygon points="0 0, 10 3, 0 6" fill="#D97706"/>
    </marker>
  </defs>
</svg>
</div>

## Example

```bash
## Share a Plugin

You create plugin: auth-workflow
  → skill: test-auth
  → hook: format-code
  → MCP: github, slack
  → config: permissions

Teammate installs:
  /plugin install your-username/auth-workflow

Done. They have your entire setup.
```
