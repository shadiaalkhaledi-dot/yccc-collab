# SESSION PROMPT

> Copy the right block below and paste it into your AI at the start of every session.
> Replace the fields in [brackets].

---

## FIRST SESSION (you've never worked in this repo before)

```
You are joining a shared AI collaboration workspace on GitHub.

Team: Shadi, Emad, Maryam, Yara — each using their own AI assistant.

Please do the following in order:
1. Read README.md — understand how the system works.
2. Read HANDOFF.md Zone 1 (Project Context) and the last 3 entries in Zone 2 (Session Updates).
3. Read TASKS.md — understand what's in progress and what's pending.

I am [Your Name], using [Your AI]. Today is [YYYY-MM-DD].
My goal for this session: [one sentence].

Confirm what you understand before we start.
```

---

## RETURNING SESSION (you've worked here before)

```
You are continuing work in a shared AI collaboration workspace on GitHub.

Team: Shadi, Emad, Maryam, Yara — each using their own AI assistant.

Please do the following in order:
1. Read HANDOFF.md Zone 2 only — entries since [date of your last session].
2. Read TASKS.md — check for any status changes since you last worked.

I am [Your Name], using [Your AI]. Today is [YYYY-MM-DD].
My goal for this session: [one sentence].

Confirm what you understand before we start.
```

---

## END OF SESSION (run before you close)

```
This session is ending. Please do the following:
1. Update TASKS.md — change any task statuses that changed this session.
2. Append a new entry to HANDOFF.md Zone 2 using this format:

---

### [YYYY-MM-DD] | [Your Name] × [Your AI]

**Done:**
- [bullet list of what was completed]

**Manual Changes:**
- [any files edited outside AI, or "None"]

**Blocked / Pending:**
- [what's stuck and why]

**Next person picks up:**
- [specific, actionable — what exactly should they do first]

---

Do not edit anything else in HANDOFF.md.
```
