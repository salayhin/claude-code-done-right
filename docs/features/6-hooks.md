---
title: "Hooks"
tagline: "Run actions automatically at specific points in the workflow."
order: 6
---

# Hooks

> Run actions automatically at specific points in the workflow.

Hooks are scripts triggered at specific moments in Claude's lifecycle. Use them for formatting, security checks, logging, blocking dangerous commands, or anything deterministic you don't want to leave to Claude.

## Key points

- **20+ lifecycle events.** From `SessionStart` to `SessionEnd` — hooks fire at every stage: before/after tool calls, on permission requests, on file changes, on compaction, on subagent spawn/stop, and more.

- **`PreToolUse` can block execution.** Return `permissionDecision: "deny"` to stop a tool call before it runs. Combine with a `matcher` (tool name) and `if` condition (pattern) to narrow exactly when the hook fires.

- **`PostToolUse` runs after success, `PostToolUseFailure` after failure.** Use these for formatting, validation, logging, or notifications without affecting execution flow.

- **`PermissionDenied` can retry.** Return `{retry: true}` to tell Claude it may retry a denied tool call — useful for hooks that fix the issue before letting it through.

- **Two-level filtering: `matcher` then `if`.** The `matcher` narrows by tool name (e.g. `"Bash"`), the `if` narrows further by pattern (e.g. `"Bash(rm *)"`). Your script only spawns when both match — keeps hooks fast and precise.

- **Hooks read JSON from stdin.** Claude passes full tool input as JSON. Use `jq` to extract fields, then return structured JSON or just `exit 0` to allow.

- **Reactive environment hooks.** `CwdChanged` fires when Claude runs `cd` — useful for tools like `direnv`. `FileChanged` fires when a watched file changes on disk (set via `matcher` field).

- **Worktree lifecycle hooks.** `WorktreeCreate` and `WorktreeRemove` replace default git behavior when using `--worktree` or `isolation: "worktree"`.

## Hook events reference

| Event | When it fires |
|-------|--------------|
| `SessionStart` | Session begins or resumes |
| `UserPromptSubmit` | Before Claude processes your prompt |
| `PreToolUse` | Before a tool call — can block it |
| `PermissionRequest` | When a permission dialog appears |
| `PermissionDenied` | Tool denied — return `{retry: true}` to retry |
| `PostToolUse` | After a tool call succeeds |
| `PostToolUseFailure` | After a tool call fails |
| `Stop` | When Claude finishes responding |
| `SubagentStart` / `SubagentStop` | Subagent spawned / finished |
| `PreCompact` / `PostCompact` | Before / after context compaction |
| `FileChanged` | Watched file changes on disk |
| `CwdChanged` | Working directory changes |
| `InstructionsLoaded` | CLAUDE.md or rules file loaded into context |
| `SessionEnd` | Session terminates |

## How a hook resolves

<div style="background:#1a1a1a;border-radius:8px;padding:16px;margin:24px 0">
<img src="/hook-resolution.svg" alt="Hook resolution flow" style="max-width:100%;border-radius:4px"/>
</div>

## Example — block destructive commands

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "if": "Bash(rm *)",
            "command": "\"$CLAUDE_PROJECT_DIR\"/.claude/hooks/block-rm.sh"
          }
        ]
      }
    ]
  }
}
```

```bash
#!/bin/bash
# .claude/hooks/block-rm.sh

COMMAND=$(jq -r '.tool_input.command')

if echo "$COMMAND" | grep -q 'rm -rf'; then
  jq -n '{
    hookSpecificOutput: {
      hookEventName: "PreToolUse",
      permissionDecision: "deny",
      permissionDecisionReason: "Destructive command blocked by hook"
    }
  }'
else
  exit 0  # allow the command
fi
```
