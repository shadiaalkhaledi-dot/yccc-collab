# Multiwork — AI Team Collaboration System

**Team:** Shadi, Emad, Maryam, Yara
**Started:** 2026-05-31

---

## What This Is

A lightweight system for 4 people working remotely on the same project — each using their own AI assistant (Claude, ChatGPT, or any other). The system lets any AI get up to speed fast, pick up where the last person left off, and hand off cleanly to the next person.

## How It Works

Every session follows the same pattern:

1. **Start** — paste the session prompt (in `SESSION_PROMPT.md`) into your AI
2. **Work** — your AI reads the right files, does the work, updates shared files
3. **End** — your AI appends a session entry to `HANDOFF.md` and updates `TASKS.md`

That's it. No meetings required to sync.

---

## File Map

| File | Purpose | Read when |
|------|---------|-----------|
| `README.md` | This file — how the system works | First session only |
| `HANDOFF.md` | Session log + project context | Every session (smart reading — see below) |
| `TASKS.md` | What needs doing, who owns it, status | Every session |
| `COLLABORATORS.md` | Team roster, roles, AI tools | When team changes |
| `STYLE_GUIDE.md` | Formatting rules for all file types | When producing output |
| `SESSION_PROMPT.md` | The prompt to paste into your AI | Copy this at session start |

---

## The Smart Reading Rule (saves tokens)

`HANDOFF.md` has two zones:

- **Zone 1 — Project Context**: Read this **once**, your first session. It explains the project and rules.
- **Zone 2 — Updates**: Append-only log of every session. Read **only entries since your last session** — not the full history.

Your AI will handle this automatically if you use `SESSION_PROMPT.md`.

---

## Change Tracking

Every change to every file is tracked automatically by GitHub. To see what someone changed:
- Go to the file on GitHub → click **History** → click any commit to see the exact diff
- Or run: `git log --oneline` in terminal

This covers both AI-made and manual changes. Nothing is lost.

---

## Adding / Removing Collaborators

1. Update `COLLABORATORS.md`
2. Invite them on GitHub: **Settings → Collaborators → Add people**
3. Note it in `HANDOFF.md`

To remove: reverse the above. GitHub history preserves everything they did.
