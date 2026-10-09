import { profile } from '../profile';

export default function Hero() {
  return <section className="portrait-stage" aria-label="Profile portrait">
    <svg className="signal-paths" viewBox="0 0 402 304" fill="none" aria-hidden="true">
      <path d="M-85 304C-85 18 487 18 487 304M-45 304C-45 55 447 55 447 304M-5 304C-5 92 407 92 407 304" />
      <path d="M28 88h12m-6-6v12M362 88h12m-6-6v12" />
    </svg>
    <img className="portrait" src="/profile-cutout.png" alt={profile.name} fetchPriority="high" />
    <span className="identity-label"><span aria-hidden="true" /> ENTREPRENEUR/ BUSINESS MINDED/ OPEN MINDED</span>
  </section>;
}
