// ─────────────────────────────────────────────────────────────────────────
// Firebase config for the LIVE class polls in this deck.
//
// Until you paste real values below, polls run in LOCAL mode (they tally only
// within a single browser / its tabs) — great for testing, but NOT shared
// across students' computers. Fill this in to enable real cross-device polling.
//
// One-time setup (see POLL-SETUP.md in _deck-builder for the full walkthrough):
//   1. Go to https://console.firebase.google.com  →  Add project (free).
//   2. In the project, click the </> "Web" icon to register a web app.
//   3. Firebase shows you a `firebaseConfig = { ... }` object — copy those
//      values into the object below (replace every YOUR_… placeholder).
//   4. Left menu → Build → Firestore Database → Create database.
//   5. Firestore → Rules tab → paste the rules from POLL-SETUP.md → Publish.
//
// The values below are NOT secret (they ship in every web app); access is
// controlled by the Firestore security rules, not by hiding this file.
// ─────────────────────────────────────────────────────────────────────────
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyARGzK81KsWjliHLPFgf8wKDuizhiLs-Lc",
  authDomain: "sos-110.firebaseapp.com",
  projectId: "sos-110",
  storageBucket: "sos-110.firebasestorage.app",
  messagingSenderId: "527114011645",
  appId: "1:527114011645:web:6100a50465562924a24f94",
  measurementId: "G-0G7T944VXS"
};

// ─────────────────────────────────────────────────────────────────────────
// LIVE ATTENDANCE (same endpoint + form as Chapter 1; see
// _deck-builder/ATTENDANCE-SETUP.md).
//
// ATTENDANCE_URL is used ONLY by the instructor's "Submit Attendance" press, to
// mail the roster. It returns only {ok, count} and mails the roster solely to
// addresses hardcoded in the script, so it discloses no student records.
// ─────────────────────────────────────────────────────────────────────────
window.ATTENDANCE_URL = "https://script.google.com/macros/s/AKfycbwnQfV7X52O2TDTcliBkEcEjvTJ3ZzLaFDMEYif8VeU7xQwwTgRUArfju4kBI4CRt0YpA/exec";

// STUDENT SUBMISSIONS go through this Google Form. `spreadMs` staggers each
// browser's send by a random 0–N ms — do not drop it: a lecture hall shares a
// handful of NATed campus IPs and a tight burst loses rows to rate limiting.
// The form must stay PUBLISHED, "Anyone with the link", with email collection
// and "limit to 1 response" OFF.
window.ATTENDANCE_FORM = {
  url: "https://docs.google.com/forms/d/e/1FAIpQLScf80N2r60JQScCWvzfmCwGfSO0JHhkLdgYupGHdxW4ueCTag/formResponse",
  spreadMs: 6000,
  fields: {
    first:   "entry.870053116",
    last:    "entry.2124478440",
    email:   "entry.1243640787",
    section: "entry.2017319722",
    session: "entry.1949628352",
    chapter: "entry.1270913812"
  }
};
