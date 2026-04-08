---
title: "Plan Mode"
tagline: "Separate planning from execution — think before you build."
order: 3
---

# Plan Mode

> Separate planning from execution — think before you build.

Press Shift+Tab to toggle Plan Mode. Claude reads files, asks questions, and proposes a step-by-step plan with only read-only tools. Review and approve before execution.

## Key points

- Plan Mode = read-only proposals, no file changes

- Normal Mode = Claude executes the agreed plan

- Prevents wrong approaches early — save tokens and time

- Review plans before execution — catch issues before code changes

- **Use `AskUserQuestionTool` in Plan Mode.** Prompt Claude to interview you with non-obvious questions about technical implementation, tradeoffs, and concerns before writing a single line of code. Forces deeper thinking upfront, surfaces assumptions early.

<div style="display:flex;justify-content:center;margin:24px 0">
<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">
  <!-- Plan Mode -->
  <rect x="40" y="40" width="200" height="220" fill="#141414" stroke="#D97706" stroke-width="2" rx="4"/>
  <text x="60" y="65" font-family="monospace" font-size="12" fill="#D97706">Plan Mode</text>
  <text x="60" y="85" font-family="sans-serif" font-size="10" fill="#E2E2E2">✓ Read files</text>
  <text x="60" y="105" font-family="sans-serif" font-size="10" fill="#E2E2E2">✓ Ask questions</text>
  <text x="60" y="125" font-family="sans-serif" font-size="10" fill="#E2E2E2">✓ Propose plan</text>
  <text x="60" y="145" font-family="sans-serif" font-size="10" fill="#F87171">✗ Edit files</text>
  <text x="60" y="165" font-family="sans-serif" font-size="10" fill="#F87171">✗ Run commands</text>
  <text x="60" y="190" font-family="monospace" font-size="9" fill="#ABABAB">[Read-only]</text>

  <!-- Normal Mode -->
  <rect x="260" y="40" width="200" height="220" fill="#141414" stroke="#4ADE80" stroke-width="2" rx="4"/>
  <text x="280" y="65" font-family="monospace" font-size="12" fill="#4ADE80">Normal Mode</text>
  <text x="280" y="85" font-family="sans-serif" font-size="10" fill="#E2E2E2">✓ Read files</text>
  <text x="280" y="105" font-family="sans-serif" font-size="10" fill="#E2E2E2">✓ Edit files</text>
  <text x="280" y="125" font-family="sans-serif" font-size="10" fill="#E2E2E2">✓ Run commands</text>
  <text x="280" y="145" font-family="sans-serif" font-size="10" fill="#E2E2E2">✓ Execute plan</text>
  <text x="280" y="165" font-family="sans-serif" font-size="10" fill="#E2E2E2">✓ Make changes</text>
  <text x="280" y="190" font-family="monospace" font-size="9" fill="#ABABAB">[Full power]</text>

  <!-- Toggle arrow -->
  <path d="M 140 270 L 360 270" stroke="#D97706" stroke-width="2" fill="none"/>
  <text x="220" y="290" font-family="monospace" font-size="11" fill="#D97706" text-anchor="middle">Shift + Tab</text>
</svg>
</div>

## Example — workflow

```bash
1. [Shift+Tab] → enter Plan Mode
2. "Refactor the auth module to use session tokens"
3. Claude proposes step-by-step plan (read-only)
4. You review: "Good, but also add rate limiting"
5. Claude updates plan
6. [Shift+Tab] → enter Normal Mode
7. "Execute the plan we agreed on"
8. Claude makes changes
```

## Example — AskUserQuestionTool prompt

Use this prompt at the start of Plan Mode to force Claude to surface assumptions before it builds anything:

```
Interview me in detail using the AskUserQuestionTool about literally anything:
technical implementation, concerns, tradeoffs, etc.
Make sure the questions are not obvious.
```
