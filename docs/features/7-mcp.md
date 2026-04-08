---
title: "MCP"
tagline: "Connect Cloud to external tools: Figma, Slack, GitHub, databases."
order: 7
---

# MCP

> Connect Cloud to external tools: Figma, Slack, GitHub, databases.

MCP (Model Context Protocol) is an open protocol for exposing tools. Add an MCP server and Cloud gets instant access to thousands of external integrations.

## Key points

- Open protocol — anyone can build and expose tools

- Thousands of public MCP servers available

- Examples: GitHub repos, Slack messages, Figma designs, databases

- Cloud automatically uses the right tool when needed

<div style="display:flex;justify-content:center;margin:24px 0">
<svg viewBox="0 0 500 320" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">
  <!-- Cloud -->
  <circle cx="250" cy="80" r="35" fill="#D97706" stroke="#D97706" stroke-width="2"/>
  <text x="250" y="85" font-family="sans-serif" font-size="10" fill="#000" text-anchor="middle" font-weight="bold">Cloud</text>

  <!-- MCP Protocol (hub) -->
  <circle cx="250" cy="180" r="40" fill="none" stroke="#D97706" stroke-width="2" stroke-dasharray="4,4"/>
  <text x="250" y="185" font-family="monospace" font-size="11" fill="#D97706" text-anchor="middle">MCP</text>

  <!-- External tools -->
  <rect x="30" y="250" width="80" height="50" fill="#141414" stroke="#4ADE80" stroke-width="2" rx="3"/>
  <text x="45" y="270" font-family="monospace" font-size="9" fill="#4ADE80">Figma</text>
  <text x="45" y="285" font-family="monospace" font-size="8" fill="#ABABAB">designs</text>

  <rect x="130" y="250" width="80" height="50" fill="#141414" stroke="#4ADE80" stroke-width="2" rx="3"/>
  <text x="145" y="270" font-family="monospace" font-size="9" fill="#4ADE80">GitHub</text>
  <text x="145" y="285" font-family="monospace" font-size="8" fill="#ABABAB">repos</text>

  <rect x="230" y="250" width="80" height="50" fill="#141414" stroke="#4ADE80" stroke-width="2" rx="3"/>
  <text x="245" y="270" font-family="monospace" font-size="9" fill="#4ADE80">Slack</text>
  <text x="245" y="285" font-family="monospace" font-size="8" fill="#ABABAB">messages</text>

  <rect x="330" y="250" width="80" height="50" fill="#141414" stroke="#4ADE80" stroke-width="2" rx="3"/>
  <text x="345" y="270" font-family="monospace" font-size="9" fill="#4ADE80">Database</text>
  <text x="345" y="285" font-family="monospace" font-size="8" fill="#ABABAB">queries</text>

  <!-- Connections -->
  <line x1="250" y1="115" x2="250" y2="140" stroke="#D97706" stroke-width="2"/>
  <line x1="210" y1="210" x2="70" y2="250" stroke="#4ADE80" stroke-width="2"/>
  <line x1="225" y1="215" x2="170" y2="250" stroke="#4ADE80" stroke-width="2"/>
  <line x1="250" y1="220" x2="270" y2="250" stroke="#4ADE80" stroke-width="2"/>
  <line x1="275" y1="215" x2="370" y2="250" stroke="#4ADE80" stroke-width="2"/>

  <!-- Label -->
  <text x="250" y="30" font-family="monospace" font-size="12" fill="#D97706" text-anchor="middle" font-weight="bold">MCP = Open Protocol</text>
</svg>
</div>

## Example

```bash
## Connect MCP Servers

Figma MCP:
  Cloud can now read and analyze your Figma files

GitHub MCP:
  Cloud can browse repos, open issues, search code

Slack MCP:
  Cloud can read channels, search messages, post updates

Just add the MCP server, Cloud gets all capabilities.
```
