# HANDOFF

> **AI Instructions:**
> - **First session ever?** Read Zone 1 + the last 3 entries in Zone 2.
> - **Returning?** Skip Zone 1. Read only Zone 2 entries since your last session date.
> - **End of session?** Append a new entry to Zone 2. Update TASKS.md. Do not edit Zone 1.

---

<!--
═══════════════════════════════════════════════════════
  ZONE 1 — PROJECT CONTEXT  (read once, first session)
═══════════════════════════════════════════════════════
-->

## ZONE 1 — Project Context

### The Team
- **Shadi Al-Khaledi** — Co-Founder / Architect — using Claude
- **Maryam Saif** — Executive Lead / Co-Founder — AI TBD
- **Emad** — Collaborator — AI TBD
- **Yara** — Collaborator — using Claude

### The Project
We are founding the **Yemeni Cultural Centre of Canada (YCCC)**, branded as **YCC Calgary** — the first dedicated Yemeni cultural institution in Canada. It is structured as a two-entity hybrid: a federal non-profit registered charity (Entity 1, Year 1) for grants, cultural programs, heritage, and education; and a for-profit social enterprise (Entity 2, Year 2+) operating a café, retail, and event rentals whose revenue flows back to the charity. The founding team is Maryam Saif (Executive Lead, Shawthab Foundation founder, cultural sector background) and Shadi Al-Khaledi (Architect, YES-program alumnus). Current phase: registration, governance, and 90-day foundation roadmap.

### Key Documents (see FILES.md for full list)
- Feasibility Brief — strategic case for YCCC in Calgary
- Founding Brief v0.1 — legal/governance/funding architecture (bilingual EN/AR)
- Governance & Funding v0.2 — updates v0.1 (board capped at 5, director slate confirmed)
- Day-One Additions v0.1 — supplement to registration guide
- 90-Day Action Roadmap — step-by-step founding timeline

### Working Rules
1. Start every session using the dashboard at the GitHub Pages URL — it generates your prompt.
2. Always update `TASKS.md` when a task status changes.
3. Append to Zone 2 at session end — use the dashboard End Session form.
4. If you changed a Google Doc manually, note it under "Manual Changes" (or it will be auto-logged by Apps Script).
5. If you added a new file to Drive, add it to `FILES.md`.
6. Keep entries concise — the next AI needs facts, not prose.
7. If something is blocked, say exactly what's blocking it.

### File Locations
- GitHub repo: https://github.com/shadiaalkhaledi-dot/yccc-collab
- Google Drive: https://drive.google.com/drive/folders/1FFf_t7r-ot3sWn6K4FPK-WIijglpllLv
- Dashboard: [paste GitHub Pages URL once enabled]

---

<!--
═══════════════════════════════════════════════════════
  ZONE 2 — SESSION UPDATES  (append only, newest first)
═══════════════════════════════════════════════════════
-->

## ZONE 2 — Session Updates

---

### 2026-05-31 | Shadi × Claude (session 2)

**Done:**
- Read Yara's handoff — confirmed full loop works end to end
- Updated Tasks 3 and 4 to done (Yara invited, GitHub account created)
- Added Task 6 for Yara to pick up
- Removing End Session button from dashboard — AI handles all writes now

**Manual Changes:** None

**Message for Yara:**
If your AI is reading this, the system worked. Task 6 is yours: start a session, read this message, append your own entry below. Just prove the loop closes.

**Next person picks up:**
- Yara: Task 6 — start a session and reply to this message by appending your entry
- Shadi: define Task 5 — first real YCCC work item

---

### 2026-05-31 | Yara × Claude

**Done:**
- Tested full collaboration pipeline end-to-end
- Connected Google Drive connector and located COLLABORATION-TEST folder
- Yara manually added text to "test" doc in COLLABORATION-TEST folder
- Claude (AI) successfully appended text to same doc via browser automation
- Confirmed GitHub write access works via embedded token in session prompt

**Manual Changes:** Added "Hello this is yara test" to COLLABORATION-TEST/test doc

**Blocked / Pending:**
- Yara still needs a GitHub account to be added as collaborator
- First real project task not yet defined

**Next person picks up:**
- Define first real project task (Task 5)
- Invite Yara to GitHub repo (Task 3) once she has an account

---

### 2026-05-31 | Shadi × Claude

**Done:**
- Created full GitHub collaboration system: README, HANDOFF, TASKS, COLLABORATORS, STYLE_GUIDE, SESSION_PROMPT
- Designed two-zone HANDOFF structure to minimize token usage on repeat sessions

**Manual Changes:** None

**Blocked / Pending:**
- Project description in Zone 1 needs to be filled in by Shadi
- Yara needs a GitHub account to be added as collaborator
- First real task not yet defined

**Next person picks up:**
- Fill in project description (Zone 1)
- Define and add the first real task to TASKS.md
- Invite Yara to GitHub once she creates an account

---


---

### 2026-06-03 | Shadi × Claude

**Done:**
- Reviewed Airtable (The Yemeni House) — 46 items in Filings & Milestones confirmed
- Drafted and generated the following documents (all DRAFT v0.1, black & white format, Drive naming convention):
  - **Annex A** — Director Declaration Form (4 directors, Parts 1–6, page break per section)
  - **Written Resolution of First Directors** — 12 resolutions, all 4 directors sign
  - **Schedule 3** — Conflict of Interest Policy (with Annex A: annual disclosure form)
  - **Schedule 4** — Gift Acceptance Policy
  - **Schedule 5** — Direction and Control Policy
  - **Schedule 6** — Foreign Funding Policy (with Foundation Due Diligence Intake Form)
  - **Schedule 7** — FITAA Compliance Policy (Bill C-70, with Assessment Checklist)
  - **Schedule 8** — Signing Authority Policy (with authority threshold table)
  - **Schedule 9 script written, paused** — Anti-Harassment & Respectful Workplace Policy
- Airtable statuses updated: Schedules 3–8 + Director Declaration + Written Resolution → Needs Review
- Signing authority fix: Moudi excluded (not Canadian resident); signing officers = Maryam, Shadi, Emad (any 2 of 3)
- Google Apps Script written for fixing gold→black color formatting in Google Docs

**Key decisions:**
- Signing officers: Maryam, Shadi, Emad (any 2 of 3). Moudi is Treasurer but NOT a bank signing officer.
- Fiscal year end: March 31 (first year ends March 31, 2027)
- CRA T2050: no deadline — apply when Board decides ready
- Insurance: not legally required by statute; CGL required contractually by venues; D&O strongly recommended
- Legal counsel budget: Board sets it, no fixed cap
- Secretary appointment: Emad — but only after he signs MOU and Director Declaration first
- DocuSign alternative: SignWell free plan recommended for low-volume formation docs
- All policy/form scripts: GOLD = "000000" (black & white). Founding docs (Bylaws, MOU, Articles) still use C8993A gold — fix with Node one-liner or Google Apps Script
- Airtable category "H. International Funding — Gulf Donors" → needs manual rename to "H. International Funding — Foreign Donors"

**Blocked / pending:**
- Emad full address — blocks Form 4002, MOU, Director Declaration
- Moudi full address — blocks Form 4002, Director Declaration
- Registered office address — blocks Form 4002
- NUANS name search (nuans.com, $30) — blocks Articles filing
- Lawyer not yet engaged — nothing signed until review complete
- BMO/Scotiabank pre-clearance call — must happen before any bank account opened
- SignWell account not yet set up
- Schedules 9–13 not yet generated (Anti-Harassment script done; Expense Reimbursement, Whistleblower, Child & Youth Protection, Social Media not yet written)

**Direct message to next AI:**
Start by running `node anti_harassment_v01.js` from the scripts folder to generate Schedule 9. Then write scripts for Schedules 10–13 (Expense Reimbursement, Whistleblower, Child & Youth Protection, Social Media) — same pattern as all other policy scripts. All scripts are in `C:\Users\shadi\Documents\Claude\Projects\Yemen Cultural Center\scripts\`. The output filename must match the Drive naming convention (`Schedule N — [Name] — DRAFT v0.1.docx`). Use GOLD = "000000", black & white, DRAFT_MODE = true, adoptionSigs() = Shadi/Maryam/Emad. Most urgent non-drafting action: chase Emad and Moudi for addresses, run NUANS search, call BMO charity banking team.

