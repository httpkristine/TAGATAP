# SMARTAP

A mobile-first digital business card built with React and Vite. The redesign retains Lloyd Pucyutan’s supplied portrait and verified destinations, with a reference-inspired silver-blue, frosted white, charcoal, and lime palette, restrained NFC linework, one frosted glass surface, and accessible Contact / Socials tabs. Mobile cards extend to both sides and the bottom; All action buttons use centered icon-label groups; the full-width contact and location rows retain navigation indicators on the right. Social buttons show centered platform icons and labels, with the same dimensions as contact buttons.

```sh
npm install
npm run dev
```

Production build: `npm run build`. Preview: `npm run preview`.

Contact details and social destinations are configured in `src/profile.js`. Save Contact downloads a vCard; Call, SMS, and Email use device handlers. Messenger, Google Maps, Facebook, Instagram, and TikTok open the existing verified destinations. Tabs support arrow keys, Home, and End; focus indicators and reduced-motion preferences are supported.

The portrait is the original `public/profile-cutout.png`, without facial edits. Interface text, NFC paths, and controls are rendered in HTML, CSS, and SVG. Inter loads from Google Fonts with system fonts as fallback. No unverified professional roles or accounts have been added.

Browser verification: `node scripts/verify-ui.mjs` (requires Playwright and installed Chrome). It checks responsive widths, exclusive tab panels, keyboard navigation, contact download, and reduced motion, and saves mobile previews in `artifacts/`.
