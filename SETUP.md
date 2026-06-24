# chrisk.io — setup & operations

A static blog built with [Astro](https://astro.build) + the
[Fuwari](https://github.com/saicaca/fuwari) theme, edited through
[Sveltia CMS](https://sveltiacms.app), and hosted on **Cloudflare Pages**.
No database, no server — Markdown in Git becomes static HTML served from the edge.

- **Content:** Markdown in `src/content/posts/` → published at `/posts/<slug>/`
- **Images/media:** `public/images/blog/` (served at `/images/blog/...`)
- **Branding/config:** `src/config.ts`; About page: `src/content/spec/about.md`
- **Web editor:** `https://chrisk.io/admin` (Sveltia CMS)
- **Package manager:** **pnpm** · **Deploy:** push to `master` → Cloudflare builds

---

## 1. Local development

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # production build into dist/
pnpm preview    # serve the built site locally
```

Node 22 is required (see `.nvmrc`). If `pnpm build` ever errors with a CSS
`@apply ... link` / "class does not exist" message, it's a stale-cache quirk —
run `rm -rf .astro node_modules/.vite && pnpm build` for a clean build.
(Cloudflare always builds clean, so this only affects repeated local builds.)

---

## 2. Writing posts

**A. In the browser (Sveltia CMS)** — `https://chrisk.io/admin`, sign in (§3),
**Blog posts → New**, write, **Publish**. The post is committed to `master` and
live in ~30 seconds.

**B. In your editor** — add `src/content/posts/my-slug.md`:

```markdown
---
title: My post title
published: 2026-06-24
description: One-sentence summary for SEO and previews.
image: '/images/blog/optional-cover.jpg'   # optional
tags: [eCommerce, WordPress]               # optional
category: Software Development              # optional
draft: false
---

Body in **Markdown**.
```

Only `title` and `published` are required. The filename becomes the slug
(`/posts/my-slug/`). Schema: `src/content/config.ts`.

---

## 3. CMS authentication (personal access token)

You're the only editor, so use a GitHub personal access token — **no OAuth app
or Worker needed**.

1. Go to `https://chrisk.io/admin` → **Sign In with Token**.
2. Create a token with access to `cklosowski/chrisk.io` (a fine-grained token
   with **Contents: read/write** on this repo is enough) and paste it in.
3. It's stored in your browser for next time.

---

## 4. Deploy to Cloudflare Pages

Use your **personal** Cloudflare account. Project → **Settings → Build**:

- **Production branch:** `master`
- **Build command:** `pnpm run build`  *(runs `astro build` + Pagefind search index)*
- **Build output directory:** `dist`
- **Framework preset:** Astro (or None)

Cloudflare auto-detects pnpm from `pnpm-lock.yaml`; `.nvmrc` pins Node 22. Every
push to `master` (including CMS commits) deploys automatically. Pushes to other
branches get **preview deployments** at `https://<branch>.chrisk-io.pages.dev`.

---

## 5. Custom domain (chrisk.io)

Project → **Custom domains → Set up a domain** → `chrisk.io`. If the domain's
DNS is on this Cloudflare account, the record is added for you; otherwise add the
shown `CNAME` at your DNS host. TLS is automatic. `public/_redirects` (old
WordPress URLs → `/posts/...`) activates once the domain is live.

---

## 6. Branding & customization

- **Title, tagline, theme color (hue), banner, nav, profile, social links:**
  `src/config.ts`
- **Profile photo:** replace `public/images/avatar.jpg` with your headshot
- **Homepage banner:** replace `public/images/banner.jpg` (wide image)
- **About page:** `src/content/spec/about.md`
- **Favicon:** currently Fuwari's default (`public/favicon/`) — replace those
  files and/or set `favicon` in `src/config.ts` to use your own

---

## 7. Migrated from WordPress

94 published posts were imported from the WordPress export:
HTML → Markdown (paragraphs, code, and Crayon snippets restored), 153 images
localized to `/images/blog/`, WordPress categories/tags mapped to Fuwari
`category`/`tags`, featured images → `image`, and old `/%postname%/` permalinks
redirected to `/posts/<slug>/` in `public/_redirects`. 26 drafts were skipped.
