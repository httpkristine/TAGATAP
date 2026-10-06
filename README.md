# TagaTap

Responsive React recreation of the supplied TagaTap digital business card reference.

```sh
npm install
npm run dev
```

Production build: `npm run build`. Preview: `npm run preview`.

Contact details and social destinations are configured in `src/profile.js`. Facebook, Instagram, and TikTok open the supplied personal profiles. Messenger links directly to the Facebook account. Google Maps searches the supplied Plus Code, `X8VG+VQX San Pablo City, Laguna`. Save Contact downloads a vCard; call, SMS, and email use the supplied contact details.

The hero uses `public/tagatap-hero-v2.png`, generated with the built-in image generation tool to match the updated reference. Its prompt is saved in `public/tagatap-hero-prompt.txt`. The overlapping logo badge is `public/tagatap-mark.svg`. All text, panels, icons, and controls are real HTML/React. The Inter font loads from Google Fonts with system fonts as fallback.
