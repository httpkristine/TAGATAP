export default function Hero() {
  return <section className="hero" aria-labelledby="hero-title">
    <div className="product-photo"><img src="/tagatap-cover-city.png" alt="SmartTap digital business card held beside a smartphone overlooking the city, with the message: The Future of Networking. Tap. Share. Connect. Dynamic Digital Business Cards." fetchPriority="high" width="1402" height="1122" /></div>
    <div className="brand-badge"><img src="/profile-photo.jpg" alt="Profile portrait" width="2400" height="3000" /></div>
    <div className="hero-copy">
      <p className="eyebrow">TAP. SHARE. CONNECT</p>
      <h1 id="hero-title">Lloyd Pucyutan</h1>
      <div className="accent-line" aria-hidden="true" />
      <p className="hero-description">The modern Filipino business card.<br /> Share your contact details, social links,<br className="reference-break" /> and portfolio instantly with a single tap<br className="reference-break" /> of your TagaTap card to any smartphone—<br className="reference-break" /> no app required.</p>
    </div>
  </section>;
}
