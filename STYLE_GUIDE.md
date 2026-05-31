# STYLE GUIDE
**Multiwork AI Collaboration — Shadi, Emad, Maryam, Yara**
Last updated: 2026-05-31

> This guide sets formatting standards so that any AI (Claude, ChatGPT, etc.) produces consistent output across the team. Update this file whenever the team agrees on a new rule.

---

## General Principles

- Write in clear, plain language. No jargon unless it's defined.
- Use present tense for status; past tense for completed work.
- Dates: `YYYY-MM-DD` everywhere (ISO 8601).
- Names: First name only is fine in files (Shadi, Emad, Maryam, Yara).
- Avoid emojis in formal documents; they are allowed in HANDOFF.md and TASKS.md for status indicators only (✅ 🔒 ⏳).

---

## Markdown (.md) Files

- **Headings**: `#` for title, `##` for sections, `###` for subsections. No skipping levels.
- **Bold** for key terms or labels. *Italic* for emphasis or file names.
- Tables: use for structured data (tasks, comparisons). Align columns.
- Lists: unordered (`-`) for items without sequence; ordered (`1.`) for steps.
- Code/paths: wrap in backticks — e.g., `TASKS.md`, `2026-05-31`.
- Blank line between every section.
- No trailing spaces.

---

## Google Docs

- Font: Google's default (Arial 11pt) unless the project specifies otherwise.
- Headings: use built-in Heading 1 / Heading 2 / Heading 3 styles (not bold-only).
- Section breaks: insert a horizontal rule (`---`) between major sections.
- Comments: use Google Docs native comments for questions/reviews — don't embed `[TODO]` in body text.
- Version notes: add a one-line note at the top of the doc in italics when making significant changes: *Updated by [Name] on [date] — [what changed].*

---

## Google Sheets

- Row 1: frozen header row, bold, filled with light grey (#F3F3F3).
- Dates in column: format as `YYYY-MM-DD` (plain text or date format).
- Status columns: use dropdown validation where possible.
- No merged cells unless absolutely necessary.
- One sheet per topic — don't stack unrelated tables on one sheet.

---

## Presentations (Slides)

- One idea per slide.
- Slide titles: sentence case (not ALL CAPS).
- Max 5 bullet points per slide, each under 10 words.
- Include a slide number in the footer.

---

## PDFs

- PDFs are read-only deliverables. Do not edit PDFs directly.
- Export from source (Doc, Sheet, etc.) and note the source file in a comment or HANDOFF.md.

---

## AI Prompt Conventions

When asking any AI to produce content for this workspace:
1. Reference this style guide: *"Follow the project STYLE_GUIDE.md conventions."*
2. Specify the file type you need.
3. State the audience and purpose in one sentence.
4. Paste in any relevant context (e.g., a snippet from TASKS.md or HANDOFF.md).

---

*To update this guide: edit directly and append a note in HANDOFF.md.*
