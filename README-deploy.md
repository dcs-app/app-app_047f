# Deploy to Vercel

1. Fork or push this repository to GitHub.
2. In Vercel, click **New Project** → **Import Git Repository**.
3. Select the forked repository and click **Import**.
4. Vercel will auto‑detect a static site and start the deployment.
5. The provided `vercel.json` contains rewrites so URLs like `/shop-all` map to the corresponding `.html` files. No further configuration is required.

# Environment Variables

This project is a pure static site; it does not require any environment variables.

# First‑time Setup

- No backend or database setup is needed.
- Verify that the `public/robots.txt` and `public/sitemap.xml` are present for SEO.
- After deployment, test a few routes (e.g., `/living-room`, `/verona-lounge-chair`) to confirm the rewrites work as expected.