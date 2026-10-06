# TagaTap

Responsive React recreation of the supplied TagaTap digital business card reference.

```sh
npm install
npm run dev
```

Production build: `npm run build`. Preview: `npm run preview`.

Contact details and social destinations are configured in `src/profile.js`. Social links currently open platform homepages because personal profile URLs were not supplied. Save Contact downloads a vCard; call, SMS, email, and Maps use the supplied contact details.

The hero uses the supplied reference image as a clipped background to retain the original product photograph. All text, panels, icons, and controls are real HTML/React. The Inter font loads from Google Fonts with system fonts as fallback.
