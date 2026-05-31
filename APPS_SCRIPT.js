/**
 * YCCC Collaboration — Google Docs Change Tracker
 *
 * INSTALL ON EACH GOOGLE DOC:
 * 1. Open the Google Doc
 * 2. Extensions → Apps Script
 * 3. Paste this entire file
 * 4. Replace GITHUB_TOKEN and GITHUB_REPO below with your values
 * 5. Click Save, then Run → onOpen (approve permissions)
 * 6. Set up trigger: Triggers (clock icon) → Add Trigger
 *    Function: logChange | Event: On edit | Save
 *
 * That's it. Every edit to this doc will be logged to CHANGES.md in GitHub.
 */

// ── CONFIG ──────────────────────────────────────────────────────────────────
const GITHUB_TOKEN = 'YOUR_GITHUB_PERSONAL_ACCESS_TOKEN'; // Settings → Developer → Tokens
const GITHUB_USER  = 'shadiaalkhaledi-dot';
const GITHUB_REPO  = 'yccc-collab';
const GITHUB_BRANCH = 'main';
const DOC_NAME = DocumentApp.getActiveDocument().getName(); // auto-detected

// ── MAIN TRIGGER ─────────────────────────────────────────────────────────────
function logChange(e) {
  try {
    const user = Session.getActiveUser().getEmail().split('@')[0]; // first name from email
    const time = Utilities.formatDate(new Date(), 'America/Edmonton', 'yyyy-MM-dd HH:mm');

    // Get a brief description of what changed
    const doc = DocumentApp.getActiveDocument();
    const body = doc.getBody();
    const totalWords = body.getText().split(/\s+/).length;

    // Build the change summary
    const summary = `Edited (${totalWords} words total)`;

    // Append to CHANGES.md on GitHub
    appendToChanges(time, user, summary, DOC_NAME);

  } catch (err) {
    console.log('Change log error: ' + err.message);
  }
}

// ── GITHUB WRITE ──────────────────────────────────────────────────────────────
function appendToChanges(time, who, what, docName) {
  const path = 'CHANGES.md';
  const apiBase = `https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}/contents/${path}`;

  // 1. Get current file content + SHA
  const getResp = UrlFetchApp.fetch(apiBase, {
    headers: {
      'Authorization': 'token ' + GITHUB_TOKEN,
      'Accept': 'application/vnd.github.v3+json'
    },
    muteHttpExceptions: true
  });

  if (getResp.getResponseCode() !== 200) return;

  const fileData = JSON.parse(getResp.getContentText());
  const currentContent = Utilities.newBlob(Utilities.base64Decode(fileData.content)).getDataAsString();
  const sha = fileData.sha;

  // 2. Insert new row after the header row in the table
  const newRow = `| ${time} | ${who} | ${what} | ${docName} |`;
  const updatedContent = currentContent.replace(
    /(\| Time \| Who \| What Changed \| Document \|\n\|[-|]+\|\n)/,
    `$1${newRow}\n`
  );

  // 3. Push updated content
  const encoded = Utilities.base64Encode(Utilities.newBlob(updatedContent).getBytes());

  UrlFetchApp.fetch(apiBase, {
    method: 'PUT',
    headers: {
      'Authorization': 'token ' + GITHUB_TOKEN,
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json'
    },
    payload: JSON.stringify({
      message: `doc: ${who} edited ${docName}`,
      content: encoded,
      sha: sha,
      branch: GITHUB_BRANCH
    }),
    muteHttpExceptions: true
  });
}
