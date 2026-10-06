import { Rss } from 'lucide-react';

export function Header() {
  return <header className="header">
    <a className="logo" href="#main" aria-label="TagaTap home">TagaTap<Rss aria-hidden="true" /></a>
    <div className="dots hero-dots" aria-hidden="true"><i /><i /><i /></div>
  </header>;
}

export default function Hero() {
  return <section className="hero" aria-labelledby="hero-title">
    <div className="product-photo" role="img" aria-label="Black TagaTap NFC business card with a green logo, floating above a stone pedestal" />
    <div className="hero-copy">
      <p className="eyebrow">TAP. SHARE. CONNECT</p>
      <h1 id="hero-title">TAGA<span>TAP</span></h1>
      <p className="hero-description">The modern Filipino business card.<br className="reference-break" /> Share your contact details, social links,<br className="reference-break" /> and portfolio instantly with a single tap<br className="reference-break" /> of your TagaTap card to any smartphone—<br className="reference-break" /> no app required.</p>
      <div className="accent-line" aria-hidden="true" />
    </div>
  </section>;
}
