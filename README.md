# Honeymelon — Single-page landing

This is a minimal single-page landing for Honeymelon (character-driven clothing for 7–15 year olds). Files:

- `index.html` — landing page
- `css/styles.css` — styles
- `js/script.js` — small interactive bits (modal, form mock)

To view locally, open `index.html` in your browser or run a simple static server, e.g.: 

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deployment with GitHub Pages

This repository includes a GitHub Actions workflow that publishes the repository root to GitHub Pages on every push to `main`.

What I added:
- `.github/workflows/deploy.yml` — action that uploads the repo content as a Pages artifact and deploys it.
- `CNAME` — contains `honeymelon.co.uk` so GitHub Pages will use your custom domain.

Next steps to complete deployment:
1. Push these changes to `main` (you already created the remote). If `git push` failed previously, make sure your local branch exists and you have permission to push to `git@github.com:nicholasbutlin/honeymelon.git`.
2. In the repository Settings → Pages, confirm the Pages site is configured and that the `CNAME` is recognised.
3. Add a DNS A record(s) for `honeymelon.co.uk` pointing to GitHub Pages IPs (or follow GitHub's recommended settings for apex domains). GitHub will provide HTTPS once DNS is validated.

If you want me to, I can:
- update the workflow to build from a subfolder (if you later add a build step), or
- switch to a different deploy action (Netlify, Vercel) and add environment variables.

Note: updated workflow to use `peaceiris/actions-gh-pages` which publishes to a `gh-pages` branch to avoid deprecated artifact actions.
