# wwlab.io

This repo is a simple Jekyll site intended for **GitHub Pages** + the custom domain **`wwlab.io`**.

## Deploy (GitHub Pages)
1. In GitHub: **Settings → Pages**
2. Set **Build and deployment**:
   - **Source**: Deploy from a branch
   - **Branch**: `main` / root
3. Set **Custom domain** to `wwlab.io`
4. Enable **Enforce HTTPS** (after DNS propagates)

The `CNAME` file in this repo ensures Pages serves the custom domain.

## DNS for `wwlab.io`
At your DNS provider, set **apex** (`@`) A records to GitHub Pages:
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

Optional but recommended:
- `www` CNAME → your GitHub Pages hostname (e.g. `USERNAME.github.io`)

## Local preview (recommended: Docker)
Local Ruby/Jekyll installs can be finicky on macOS (especially Apple Silicon). Docker is the easiest way to preview.

From the repo root:

```bash
docker run --rm -it -p 4000:4000 -v "$PWD":/srv/jekyll jekyll/jekyll:4 \
  jekyll serve --watch --force_polling --host 0.0.0.0
```

Then open `http://localhost:4000`.

