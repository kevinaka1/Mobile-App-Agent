# Mobile App Agent

A static MVP for exploring an app idea, reviewing illustrative competitor matches, and browsing positive, mixed, and negative review themes.

## Run locally

Open `index.html` in a browser. No package installation or build step is required. A local static server also works:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000` from this repository directory.

## Demo data

All competitor, rating, review, user, and analysis records are illustrative. The app does not connect to an app store or collect live reviews. New demo analyses are held in memory and reset when the page reloads.

The seed data is in `data/market-fixtures.js`. It uses linked mock records for users, ideas, analyses, analysis competitors, and review themes. The demo user selector and sidebar history show how records are scoped to a user.

## Data boundary

`services/market-data.js` provides the interface the UI uses to list demo users, load a user's analysis history, retrieve a snapshot, and create an analysis. Replace this mock adapter with backend requests while preserving its returned snapshot shape to keep the UI largely unchanged.
