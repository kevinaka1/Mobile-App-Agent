# Mobile App Agent

A small MVP for exploring an app idea. Stage 1 sends the description to a Vercel serverless function, which uses the OpenAI Responses API with web search to find 10 similar mobile apps. Review themes and saved history are still illustrative fixtures.

## Run locally

For the UI only, open `index.html` in a browser. To use the `/api/similar-apps` backend locally, run through Vercel's development server instead:

```sh
vercel dev
```

Set `OPENAI_API_KEY` in a local `.env.local` file or use Vercel's environment configuration before starting the server. Never commit the key. `OPENAI_MODEL` is optional and defaults to `gpt-5.5`.

## Demo data

Live similar-app candidates are generated from OpenAI web search and include source links. Search rankings are suggestions and should be checked against their linked sources. The app does not collect live store reviews yet. Seeded review themes, ratings, users, and saved analysis history are illustrative; new live searches are not persisted.

The seed data is in `data/market-fixtures.js`. It uses linked mock records for users, ideas, analyses, analysis competitors, and review themes. The demo user selector and sidebar history show how records are scoped to a user.

## Data boundary

`api/similar-apps.js` validates the submitted description and keeps the OpenAI API key server-side. The description is sent to OpenAI with web search; the UI discloses this before submission. `services/market-data.js` calls this API for live competitors, while history and review records still use mock fixtures.
