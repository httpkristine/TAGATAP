export default function Hero() {
  return <section className="hero" aria-labelledby="hero-title">
    <div className="product-photo"><img src="/tagatap-hero-v2.png" alt="Black and white NFC cards floating above a travertine pedestal in a bright architectural setting" fetchPriority="high" width="1536" height="1024" /></div>
    <div className="brand-badge" aria-hidden="true"><img src="/tagatap-mark.svg" alt="" width="120" height="120" /></div>
    <div className="hero-copy">
      <p className="eyebrow">TAP. SHARE. CONNECT</p>
      <h1 id="hero-title">TAGA<span>TAP</span></h1>
      <div className="accent-line" aria-hidden="true" />
      <p className="hero-description">The modern Filipino business card.<br /> Share your contact details, social links,<br className="reference-break" /> and portfolio instantly with a single tap<br className="reference-break" /> of your TagaTap card to any smartphone—<br className="reference-break" /> no app required.</p>
    </div>
  </section>;
}
