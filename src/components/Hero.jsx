import { profile } from '../profile';

export default function Hero() {
  return <section className="portrait-stage" aria-label="Profile portrait">
    <img className="hero-background" src="/smartap-nfc-connection-dusk.png" alt="" aria-hidden="true" />
    <svg className="hero-signals" viewBox="0 0 450 360" fill="none" aria-hidden="true">
      <circle cx="138" cy="155" r="94" /><circle cx="138" cy="155" r="110" /><circle cx="138" cy="155" r="126" />
      <path d="M25 185Q115 20 270 92T420 140" />
      <g fill="#e2f8ff"><circle cx="25" cy="185" r="3" /><circle cx="270" cy="92" r="3" /><circle cx="420" cy="140" r="3" /></g>
    </svg>
    <div className="hero-identity">
      <svg className="hero-panel-dots" viewBox="0 0 72 60" aria-hidden="true"><defs><pattern id="hero-dot-pattern" width="12" height="12" patternUnits="userSpaceOnUse"><circle cx="6" cy="6" r=".7" fill="white" /></pattern></defs><rect width="72" height="60" fill="url(#hero-dot-pattern)" /></svg>
      <h1>{profile.name}</h1>
      <span className="identity-label"><span aria-hidden="true" /> ENTREPRENEUR / BUSINESS MINDED / OPEN MINDED</span>
    </div>
    <img className="portrait" src="/profile-cutout.png" alt={profile.name} fetchPriority="high" />
  </section>;
}
