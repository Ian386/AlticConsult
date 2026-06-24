<div align="center">

# Altic Consult

**Tax, Accounting & Business Advisory — for businesses operating in Kenya**

Modern, SEO-first marketing site built with Next.js 16, TypeScript and Tailwind CSS v4.

[![CI](https://img.shields.io/badge/CI-GitHub_Actions-2088FF?logo=githubactions&logoColor=white)](./.github/workflows/ci.yml)
![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-v4-38BDF8?logo=tailwindcss&logoColor=white)

</div>

---

## Overview

Production redesign of [alticconsult.com](https://alticconsult.com) — a server-rendered, statically
generated site optimised for Core Web Vitals, accessibility (WCAG 2.2 AA) and local SEO for a
Kenyan audience. Every route is prerendered to static HTML and served from the edge.

## Tech stack

| Area | Choice |
|---|---|
| Framework | Next.js 16 (App Router) + TypeScript |
| Styling | Tailwind CSS v4 (CSS-first `@theme` tokens) |
| Components | Hand-rolled primitives (`cva` + `tailwind-merge`) |
| Motion | `motion` (respects `prefers-reduced-motion`) |
| Forms | `react-hook-form` + `zod` |
| Content | MDX / content-collections (in-repo) |
| Testing | Vitest (unit) · Playwright + axe (e2e + a11y) |
| Hosting | Vercel (region `fra1`) |

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000
```

### Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Local dev server |
| `npm run build` | Production build (all routes prerendered) |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint (incl. jsx-a11y) |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run format` | Prettier write |
| `npm run test` | Vitest unit/component |
| `npm run test:e2e` | Playwright smoke + axe a11y |

## Project structure

```
src/
  app/            App Router routes — home, about, services/*, insights, contact, legal
  components/
    ui/           Design-system primitives (Button, Card, Section, Container)
    site/         Site chrome (header/nav, footer, logo)
  lib/
    site.ts       Nav, contact (NAP), services — single source of truth
    utils.ts      cn() class merge
```

Design tokens (colour, type, spacing, radius, shadow, motion) live in `src/app/globals.css`
under Tailwind v4 `@theme` — **there is no `tailwind.config.js`**.

## Branching & sprint workflow

Work is organised into **sprints** (one per delivery phase). The flow is trunk-based:

```
main (protected, = production)
  └── feat/<slug>   ← branch per piece of work
        │  open PR → Vercel builds a preview deploy
        │  review
        └── squash-merge into main → auto-deploys to production → delete branch
```

- **Branch names:** `feat/…`, `fix/…`, `chore/…`, `docs/…`.
- **One PR = one focused change.** Keep them small and reviewable.
- **Conventional commits** (`feat:`, `fix:`, `chore:` …).
- `main` is protected: CI (lint · typecheck · unit · build · e2e+axe) must pass before merge.
- Every PR gets its own **Vercel preview URL**; `main` deploys to production automatically.

## Deployment

Hosted on **Vercel** (auto-detected Next.js). Production tracks `main`; previews are created per PR.
Serverless region is pinned to `fra1` (lowest latency to Kenya) in `vercel.json`.
Security headers (HSTS, X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy) are set in
`next.config.ts`; a tightened CSP and a Lighthouse CI budget land in the polish phase.

## Status

**Phase 1 — Foundation complete.** Next: **Phase 2 — Core pages** (Home, About, Services, Contact).
