# Snape Art Conservation — website

A static, mobile-friendly, English/German website. No build step or server required.

## View it locally

**Easiest:** double-click `index.html` — it opens directly in your browser.

**Or run a local server** (recommended, avoids browser file-permission quirks), from Terminal:

```
cd path/to/Website
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Structure

```
index.html        Home
services.html      Services
about.html         About
contact.html       Contact
css/style.css      All styling
js/translations.js All English + German text — edit this to change copy
js/main.js         Language toggle, mobile menu, image reel, contact form
images/            Site photos
```

## Editing content

All text lives in `js/translations.js`, split into `en` and `de` objects with matching keys.
Change the English or German string for a key and it updates on the page — no HTML editing needed.

The About page has a "Training & Experience" list with `[placeholder]` brackets
(`about.cv.1` through `about.cv.5` in translations.js) — replace these with real
qualifications, roles and dates.

## Contact form

The form currently opens the visitor's email client with a pre-filled message (no backend
needed). If you'd like messages to submit directly without opening email, connect a form
service such as Formspree or Netlify Forms — ask me and I can wire it up.

## Publishing

This is a static site, so it can be hosted for free on GitHub Pages, Netlify, or similar,
once it's pushed to GitHub (see backup instructions below).

## GitHub backup

See the setup commands you were given after the repo was initialised, or run:

```
git remote -v
git push
```

from inside this folder once a remote is configured.
