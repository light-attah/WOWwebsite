/**
 * Waves of Worship 3.0 — form data collector
 * Saves Newsletter subscribers and Volunteer sign-ups into one Google Sheet
 * (two tabs). Deploy this as a Web App and paste the URL back to your designer.
 *
 * ── SETUP (5 minutes, all free) ──────────────────────────────────────────
 * 1. Go to https://sheets.google.com and create a new blank spreadsheet.
 *    Name it e.g. "WOW 3.0 Sign-ups".
 * 2. In that sheet's menu:  Extensions ▸ Apps Script.
 * 3. Delete whatever code is there, paste THIS entire file, click 💾 Save.
 * 4. Click  Deploy ▸ New deployment.
 *      • Select type (gear icon) ▸ Web app
 *      • Description: WOW form collector
 *      • Execute as:  Me
 *      • Who has access:  Anyone
 *    Click Deploy, then Authorize access (approve the Google prompts).
 * 5. Copy the "Web app URL" it gives you (ends in /exec).
 * 6. Send that URL to your designer. Done — data will start flowing in.
 * ─────────────────────────────────────────────────────────────────────────
 */

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var isVolunteer = data.type === 'volunteer';
    var tabName = isVolunteer ? 'Volunteers' : 'Newsletter';
    var sheet = ss.getSheetByName(tabName);

    if (!sheet) {
      sheet = ss.insertSheet(tabName);
      if (isVolunteer) {
        sheet.appendRow(['Timestamp', 'First name', 'Last name', 'Email', 'Phone', 'Department']);
      } else {
        sheet.appendRow(['Timestamp', 'First name', 'Email']);
      }
    }

    if (isVolunteer) {
      sheet.appendRow([data.ts || new Date(), data.first || '', data.last || '', data.email || '', data.phone || '', data.dept || '']);
    } else {
      sheet.appendRow([data.ts || new Date(), data.first || '', data.email || '']);
    }

    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput('WOW 3.0 collector is running.');
}
