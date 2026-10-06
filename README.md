# SOS 110 Midterm Review

A click-through web deck for the SOS 110 midterm (Modules 1–3, Chapters 1–8):

1. Title
2. The Exam at a Glance (30 questions, multiple choice, 50 minutes)
3. Midterm Review Game: a live, instructor-run review combining the Module 1 & 2 and Module 3 review games
   (10–30 rounds), with a Speed Round at the halfway point and a Tic-Tac-Toe round.

Open `index.html` (add `?host` for the instructor's controls). Live play uses Firebase Firestore via `firebase-config.js`.

Source of truth: `_deck-builder/midterm_review.py` (game engine: `_deck-builder/ch8_cloud/32_rg_slide.html`).
Rebuild with `DECK_OUT=…/midterm-review-web/index.html python3 midterm_review.py`.
