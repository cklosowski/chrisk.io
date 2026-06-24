# chrisk.io — setup & operations

A static blog built with [Astro](https://astro.build), edited through
[Sveltia CMS](https://sveltiacms.app), and hosted on **Cloudflare Pages**.
No database, no server, no plugin updates — Markdown files in Git become static
HTML served from the edge.

- **Content:** Markdown in `src/content/blog/`
- **Images/media:** `public/images/blog/` (served at `/images/blog/...`)
- **Web editor:** `https://chrisk.io/admin` (Sveltia CMS)
- **Deploy:** push to `master` → Cloudflare Pages builds and publishes

---

## 1. Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build into dist/
npm run preview  # serve the built site locally
```

Node 22 is required (see `.nvmrc`).

---

## 2. Writing posts

Two equivalent ways — both end up as Markdown in `src/content/blog/`:

**A. In the browser (Sveltia CMS)** — go to `https://chrisk.io/admin`, sign in
(see §3), click **Blog posts → New**, write, and **Publish**. Sveltia commits the
Markdown to `master`; Cloudflare rebuilds and the post is live in ~30 seconds.

**B. In your editor** — add a file `src/content/blog/my-slug.md`:

```markdown
---
title: 'My post title'
description: 'One-sentence summary used for SEO and previews.'
pubDate: 2026-06-24
# heroImage: '/images/blog/optional-image.jpg'   # optional
---

Body goes here in **Markdown**.
```

The filename (minus `.md`) is the URL slug: `/blog/my-slug/`. Required
frontmatter is `title`, `description`, `pubDate`. `heroImage` and `updatedDate`
are optional. Schema lives in `src/content.config.ts`.

---

## 3. CMS authentication (personal access token)

Because you're the only editor, the simplest method is a GitHub personal access
token — **no OAuth app or Cloudflare Worker required**.

1. Go to `https://chrisk.io/admin`.
2. Choose **Sign In with Token**. The dialog links to GitHub's token page with
   the right scopes pre-selected.
3. Create a token with access to the `cklosowski/chrisk.io` repository
   (a fine-grained token with **Contents: read/write** on this repo is enough),
   paste it back into the dialog.
4. The token is stored in your browser's local storage for future visits.

> Optional upgrade: if you ever want a one-click "Sign in with GitHub" button
> (e.g. for a non-technical co-author), deploy the
> [sveltia-cms-auth](https://github.com/sveltia/sveltia-cms-auth) Worker and add
> its URL as `base_url` under `backend` in `public/admin/config.yml`.

---

## 4. Deploy to Cloudflare Pages

Use your **personal** Cloudflare account (not the work one). This is all done in
the dashboard — no `wrangler` needed.

1. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
2. Authorize GitHub and pick **`cklosowski/chrisk.io`**.
3. Build settings:
   - **Production branch:** `master`
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. **Save and Deploy.** Every push to `master` (including CMS commits) now
   triggers a build and deploy automatically.

`.nvmrc` pins Node 22 for the build. `public/_redirects` is published
automatically (see §6).

> If you ever need the `wrangler` CLI, remember it must use your personal
> Cloudflare login, not work: `wrangler logout` then `wrangler login`, or set
> `CLOUDFLARE_API_TOKEN` for the personal account.

---

## 5. Custom domain (chrisk.io)

In the Pages project → **Custom domains → Set up a domain** → add `chrisk.io`
(and `www.chrisk.io` if you want it). If the domain's DNS is on this same
Cloudflare account, the records are added for you. Cloudflare issues the TLS
certificate automatically.

---

## 6. Redirects

`public/_redirects` is a plain-text list of `from  to  status` rules that
Cloudflare Pages applies. The WordPress migration pre-populated 1:1 redirects
from the old `/%postname%/` permalinks to `/blog/<slug>/`, so existing inbound
links and SEO are preserved. Add new rules there as needed.

---

## 7. Migrating from WordPress (already done)

The 94 published posts from the old WordPress site were imported from
`chrisklosowski.WordPress.2026-06-24.xml`:

- HTML converted to Markdown; classic-editor paragraphs and code (Crayon
  highlighter) restored.
- All `/wp-content/uploads/` images downloaded into `public/images/blog/` and
  re-pointed to local `/images/blog/...` paths.
- Featured images mapped to `heroImage`.
- Old permalinks added to `public/_redirects`.

**Not imported:** 26 WordPress drafts were intentionally skipped. If you want any
of them, re-run the importer (script kept in the migration scratchpad) or add
them by hand.

---

## 8. Customization notes

- **Site title / tagline:** `src/consts.ts`
- **Social links:** placeholders in `src/components/Header.astro` and
  `Footer.astro` (only GitHub is wired up — add X/LinkedIn/Mastodon as desired).
- **Default social-share image:** there is no site-wide fallback OG image; posts
  use their `heroImage` when present. Add one in `BaseHead.astro` if you want a
  default for the homepage and image-less posts.
