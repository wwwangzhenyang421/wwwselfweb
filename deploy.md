# Quick Deploy Guide

Your website will be available at: https://wwwangzhenyang421.github.io/wwwselfweb

## Deploy Steps

1. Build project:
   ```
   npm run build
   ```
   (If Node.js error, set: `NODE_OPTIONS=--openssl-legacy-provider`)

2. Deploy to GitHub Pages:
   ```
   npm run deploy
   ```

3. Enable GitHub Pages:
   - Go to: https://github.com/wwwangzhenyang421/wwwselfweb/settings/pages
   - Source: Select `gh-pages` branch
   - Save

## About node_modules

**Normal!** node_modules is in .gitignore. GitHub Actions will install it automatically when building.

