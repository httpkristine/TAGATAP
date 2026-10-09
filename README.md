# SMARTAP

React and Vite digital business card for Lloyd Pucyutan. The current design includes the supplied graduation portrait, a 50% opacity NFC office background, compact glass identity panel, SMARTAP monogram, accessible Contact / Socials tabs, and centered action buttons without hover effects or arrows.

## Development

Run `npm ci`, then `npm run dev`. Build with `npm run build`; inspect the production output with `npm run preview`. Deploy the generated `dist` directory to a static host at the domain root.

Contact data and social destinations are configured in `src/profile.js`. Save Contact downloads a vCard and keeps its label unchanged. It announces download initiation or failure to assistive technology. Call, SMS, and Email use device handlers. External links open in a new tab with safe link attributes.

## Verification

Run `npm test` with Google Chrome installed. Playwright is declared as a development dependency. The checks cover nine screen widths, hero proportions, image loading, clipping, contact and social links, keyboard tab navigation, vCard contents, error handling, unchanged Save Contact labeling, absent hover effects, and reduced motion. Updated previews are written to `artifacts/`.

The app uses the existing `public/profile-cutout.png`, `public/smartap-nfc-connection-dusk.png`, `public/smartap-monogram.png`, and `public/smartap-wordmark.png` assets. Other image files are retained as design references. Inter loads from Google Fonts with system font fallback.

The compact single-line hero tagline intentionally follows the requested design; it is very small on narrow phones. Automated browser checks cannot verify native phone/SMS handlers or whether third-party accounts remain available. Verify those on a real phone before launch.
