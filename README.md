# Mobile App Agent

Mobile App Agent helps founders explore the market around an app idea. It is built with Next.js App Router, React, TypeScript, and npm. The Supabase API is read-only: it loads saved ideas and analyses. The Explore Market form shows an unsaved fixture-backed preview until live analysis generation is implemented.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000. The server reads `SUPABASE_URL` and `SUPABASE_SECRET_KEY` from `.env.local` or, as a fallback, `supabase/seed/.env`. Never expose the secret in browser code or commit either environment file.

## API routes

- `GET /api/users` returns users from Supabase.
- `GET /api/history?userId=...` returns that user's saved ideas and analyses.
- `GET /api/snapshot?analysisId=...` returns the selected saved analysis, competitors, and review themes.

The UI calls these routes for **Your Work** and saved snapshot details. `lib/market-data.ts` reads `data/market-fixtures.json` directly for the unsaved sample preview; it does not call Supabase.

There is no write endpoint for creating analyses. The future generation flow will call an LLM and app-store APIs, then save those results. Until then, new idea previews do not modify history or the database.

## Supabase seed data

`data/market-fixtures.json` contains illustrative fixtures. The JavaScript seed scripts under `supabase/seed/` use this same JSON file to seed users, ideas, analyses, competitors, and review themes in parent-first order. Keep the seed `.env` private.

Schema migrations live in `supabase/migrations/`. For a hosted Supabase project, apply migrations with the Supabase CLI and run the seed script from `supabase/seed/` as described there. Configure `SUPABASE_URL` and `SUPABASE_SECRET_KEY` in Vercel project environment variables for deployed API routes.
