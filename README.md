# Humanoid Teleoperation Project Page

Static academic project page inspired by modern robotics research websites.

## Files
- `index.html` — page content
- `style.css` — visual styling
- `script.js` — video fallback / hover playback
- `assets/videos/hero-demo.mp4` — main real-time teleoperation demo
- `assets/videos/demo-01.mp4` ... `demo-10.mp4` — gallery clips
- `assets/images/hero-poster.jpg` — optional main-video poster

## Replace first
1. Paper title in `<h1>` and `<title>`.
2. Authors / affiliations.
3. Paper, arXiv, Code links.
4. `hero-demo.mp4` and ten gallery videos.
5. Abstract / Method text.
6. BibTeX.

## Local preview
Run in this folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## GitHub Pages
Push these files to a GitHub repository and enable **Settings → Pages → Deploy from branch**. The page uses only HTML/CSS/JS and works directly with GitHub Pages.


## Current media paths
- Landing background: `assets/videos/hero-demo.mp4`
- Overview video: `assets/videos/overview-demo.mp4`
- Paper figure before Method: `assets/images/method-overview.png`
