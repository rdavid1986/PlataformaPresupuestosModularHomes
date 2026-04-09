# Budget Requests & Offers

A React frontend built with Vite for a budget request and offer system.
This app uses Google Sheets as a data source and Google Forms for request/offer submission.

## Project structure

- `src/components/` — UI components for requests, offers and layout.
- `src/utils/fetchSheets.js` — central fetch logic for Google Sheets data.
- `src/styles/theme.js` — color palette and theme variables.
- `src/App.jsx` — application shell.
- `src/index.css` — global app styles.

## How it works

- `Main` loads requests from Google Sheets using `fetchRequests()`.
- `RequestCard` refreshes request details and associated offers with `Update`.
- `NewRequestCard` opens a Google Form for new budget requests.
- `OfferCard` displays supplier offers, prices, dates and attachment links.

## Configure Google Sheets and Forms

Open `src/utils/fetchSheets.js` and replace the placeholder URLs:

- `SHEET_CONFIG.requestsJsonUrl` — published sheet URL for requests (JSON or CSV).
- `SHEET_CONFIG.offersJsonUrl` — published sheet URL for offers (JSON or CSV).
- `SHEET_CONFIG.requestFormUrl` — Google Form URL for new requests.
- `SHEET_CONFIG.offerFormUrl` — Google Form URL for offers.

If the URLs are not configured, the app displays sample data so the UI remains functional.

## Run the project

```bash
npm install
npm run dev
```
npm run build → genera la carpeta dist
npm run deploy → sube dist a GitHub Pages

Open the local Vite URL and use the cards to create requests, make offers, and refresh data manually.
