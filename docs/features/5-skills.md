---
title: "Skills"
tagline: "Turn repeated workflows into reusable automation."
order: 5
---

# Skills

> Turn repeated workflows into reusable automation.

Skills are predefined instruction files (`SKILL.md`) that Claude loads on demand. Build once, share with your team, use forever.

## Key points

- Each skill is a directory with a `SKILL.md` file containing YAML frontmatter and instructions

- The `name` field becomes the `/slash-command`; the `description` tells Claude when to auto-invoke it

- Claude auto-invokes the right skill when your request matches the description — or call it directly with `/skill-name`

- **Four scope levels.** Enterprise → Personal (`~/.claude/skills/`) → Project (`.claude/skills/`) → Plugin. Higher priority always wins. Plugin skills use `plugin-name:skill-name` namespace so they never conflict.

- **Monorepo support.** Claude automatically discovers skills from nested `.claude/skills/` directories when you work in subdirectories — each package can have its own skills.

- **Skills beat commands.** If a skill and a command share the same name, the skill takes precedence.

- **Add supporting files.** Beyond `SKILL.md`, a skill directory can include templates, example outputs, executable scripts, and reference docs. Reference them from `SKILL.md` so Claude knows when to load them.

<div style="display:flex;justify-content:center;margin:24px 0">
<svg viewBox="0 0 500 280" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">
  <!-- Skill File -->
  <rect x="60" y="30" width="140" height="100" fill="#141414" stroke="#D97706" stroke-width="2" rx="4"/>
  <text x="80" y="55" font-family="monospace" font-size="11" fill="#D97706">SKILL.md</text>
  <text x="80" y="75" font-family="monospace" font-size="9" fill="#ABABAB">name: explain-code</text>
  <text x="80" y="90" font-family="monospace" font-size="9" fill="#ABABAB">description: ...</text>
  <text x="80" y="105" font-family="monospace" font-size="9" fill="#ABABAB">instructions</text>

  <!-- Claude -->
  <circle cx="250" cy="80" r="35" fill="#141414" stroke="#4ADE80" stroke-width="2"/>
  <text x="250" y="85" font-family="sans-serif" font-size="10" fill="#4ADE80" text-anchor="middle" font-weight="bold">Claude</text>

  <!-- Arrow -->
  <path d="M 200 80 L 215 80" stroke="#4ADE80" stroke-width="2" fill="none" marker-end="url(#arrow-call)"/>
  <text x="207" y="70" font-family="monospace" font-size="8" fill="#4ADE80" text-anchor="middle">loads</text>

  <!-- Output -->
  <rect x="320" y="30" width="140" height="100" fill="#141414" stroke="#4ADE80" stroke-width="2" rx="4"/>
  <text x="340" y="55" font-family="monospace" font-size="11" fill="#4ADE80">✓ Workflow</text>
  <text x="340" y="75" font-family="monospace" font-size="9" fill="#E2E2E2">Analogy</text>
  <text x="340" y="90" font-family="monospace" font-size="9" fill="#E2E2E2">ASCII diagram</text>
  <text x="340" y="105" font-family="monospace" font-size="9" fill="#E2E2E2">Step-by-step</text>

  <path d="M 285 80 L 320 80" stroke="#4ADE80" stroke-width="2" fill="none" marker-end="url(#arrow-output)"/>

  <text x="250" y="200" font-family="monospace" font-size="13" fill="#D97706" text-anchor="middle" font-weight="bold">/explain-code src/auth/login.ts</text>
  <text x="250" y="225" font-family="monospace" font-size="10" fill="#ABABAB" text-anchor="middle">Direct invoke or auto-triggered by description</text>
  <text x="250" y="260" font-family="monospace" font-size="9" fill="#4ADE80" text-anchor="middle">Personal · Project · Enterprise · Plugin</text>

  <defs>
    <marker id="arrow-call" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <polygon points="0 0, 10 3, 0 6" fill="#4ADE80"/>
    </marker>
    <marker id="arrow-output" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <polygon points="0 0, 10 3, 0 6" fill="#4ADE80"/>
    </marker>
  </defs>
</svg>
</div>

## Example — SKILL.md

```markdown
---
name: explain-code
description: Explains code with visual diagrams and analogies. Use when explaining
  how code works, teaching about a codebase, or when the user asks "how does this work?"
---

When explaining code, always include:

1. **Start with an analogy**: Compare the code to something from everyday life
2. **Draw a diagram**: Use ASCII art to show the flow, structure, or relationships
3. **Walk through the code**: Explain step-by-step what happens
4. **Highlight a gotcha**: What's a common mistake or misconception?

Keep explanations conversational. For complex concepts, use multiple analogies.
```

## Example — skill directory structure

```
~/.claude/skills/explain-code/
├── SKILL.md           # Main instructions (required)
├── template.md        # Template for Claude to fill in
├── examples/
│   └── sample.md      # Example output showing expected format
└── scripts/
    └── validate.sh    # Script Claude can execute
```

## Example — invoke

```bash
# Auto-triggered — Claude matches your request to the description
How does this code work?

# Direct invoke with the skill name
/explain-code src/auth/login.ts
```

## Scope locations

| Scope | Path | Applies to |
|-------|------|------------|
| Enterprise | Managed settings | All users in your org |
| Personal | `~/.claude/skills/<skill-name>/` | All your projects |
| Project | `.claude/skills/<skill-name>/` | This project only |
| Plugin | `<plugin>/skills/<skill-name>/` | Where plugin is enabled |
