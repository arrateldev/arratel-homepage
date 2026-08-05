# Codex Project Context

This file is the working memory for Codex in this repository. Keep it updated when changes alter architecture, commands, environment assumptions, routing, data models, billing/auth flows, or conventions.

## Project Snapshot

- Next.js SaaS starter using the App Router, React 19, TypeScript, Tailwind CSS 4, shadcn-style UI components, Drizzle ORM, Postgres, and Stripe.
- Arratel is the umbrella brand for this SaaS portfolio. The primary domain is `arratel.dev`, and the contact email is `contact@arratel.dev`.
- Main product, company, domain, contact, and legal placeholder configuration lives in `lib/site-config.ts`.
- Internationalization currently supports `de` and `en` in `lib/i18n/config.ts`; `defaultLocale` is `en`.
- User-facing copy is centralized in `lib/i18n/messages.ts`.
- Middleware/proxy behavior is implemented in `proxy.ts`. It redirects non-localized paths to a localized path, sets `x-locale`, persists the `locale` cookie, and protects localized `/dashboard` routes.
- Database schema is in `lib/db/schema.ts`; migrations are in `lib/db/migrations`.
- Auth/session helpers live under `lib/auth`.
- Stripe and mock billing logic live under `lib/payments`.

## Important Routes And Structure

- Localized routes live under `app/[locale]`.
- `app/[locale]/layout.tsx` validates the locale, loads the current user, and wraps pages in `components/site-chrome.tsx`.
- `components/site-chrome.tsx` owns the public header, mobile navigation, language switcher, auth menu, and footer.
- Dashboard routes live under `app/[locale]/(dashboard)`.
- `app/[locale]/(dashboard)/dashboard/layout.tsx` reuses the legacy dashboard layout from `app/(dashboard)/dashboard/layout.tsx` and provides SWR fallback data for `/api/user` and `/api/team`.
- Legal pages include localized `datenschutz`, `impressum`, and `terms` pages.
- There are still legacy non-localized route groups under `app/(dashboard)` and `app/(login)`. Be careful when changing shared behavior: confirm whether the localized or legacy route is the active target.
- API routes live under `app/api`.

## Auth, Teams, And Data Access

- Password auth and account/team server actions live in `app/(login)/actions.ts`.
- Sessions are JWTs in the `session` cookie; signing, verification, password hashing, and cookie writes live in `lib/auth/session.ts`.
- Server action wrappers live in `lib/auth/middleware.ts`: use `validatedAction`, `validatedActionWithUser`, or `withTeam` instead of duplicating auth/validation checks.
- Data query helpers live in `lib/db/queries.ts`; prefer adding shared reads/writes there when multiple routes or actions need the same behavior.
- New signups create a team by default unless accepting an invitation. Team activity is logged in `activity_logs`.

## Local Development

- Install dependencies with `pnpm install` or `npm install`; both lockfiles currently exist.
- Start dev server: `npm run dev`.
- Build: `npm run build`.
- Database setup helpers:
  - `npm run db:setup`
  - `npm run db:generate`
  - `npm run db:migrate`
  - `npm run db:seed`
  - `npm run db:studio`
- The README documents a mock billing workflow. For local billing UI work, use `MOCK_STRIPE=true`.
- Minimal local environment needs `POSTGRES_URL`, `BASE_URL`, `AUTH_SECRET`, and Stripe variables. Dummy Stripe values are acceptable when `MOCK_STRIPE=true`.
- Drizzle config reads `POSTGRES_URL` from the environment and writes migrations to `lib/db/migrations`.

## Implementation Notes

- Prefer existing components in `components/ui` and existing shared components before adding new primitives.
- Use `lucide-react` icons when icon buttons or common UI symbols are needed.
- Keep text additions localized in `lib/i18n/messages.ts` for both `de` and `en`.
- German user-facing copy must use proper German characters (`ä`, `ö`, `ü`, `Ä`, `Ö`, `Ü`, `ß`) instead of ASCII transliterations such as `ae`, `oe`, `ue`, or `ss`, except inside code identifiers, URLs, slugs, env vars, or other technical values.
- When adding routes or links, route through the locale helpers in `lib/i18n/config.ts` where applicable.
- Update `lib/site-config.ts` for product/company/legal metadata rather than scattering constants through pages.
- If database tables or relations change, update `lib/db/schema.ts`, generate a migration, and check query helpers in `lib/db/queries.ts`.
- If billing behavior changes, verify both real Stripe mode and `MOCK_STRIPE=true` mode.
- Keep redirects locale-aware. Server actions should read `locale` from form data with `getLocaleFromFormData` when the destination is user-facing.
- Be careful with App Router route groups and literal paths on Windows: paths containing `[locale]` or `(dashboard)` may need `-LiteralPath` in PowerShell.

## Verification

- There is no dedicated lint or typecheck script in `package.json` right now.
- Use `npm run build` as the main validation command for app-level changes.
- For database changes, run the relevant Drizzle command and inspect generated migrations.
- For UI changes, run the dev server and check responsive layout in browser when practical.

## Codex Working Rule

- When making future changes, update this file if the change affects how a future Codex session should understand, run, modify, or verify the project.
- Do not update this file for tiny localized edits that do not change architecture, workflows, commands, environment, or conventions.
