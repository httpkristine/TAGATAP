import { useRef, useState } from 'react';

import Hero from './components/Hero';
import QuickActions from './components/QuickActions';
import SocialLinks from './components/SocialLinks';

export default function App() {
  const [tab, setTab] = useState('contact');
  const refs = useRef({});
  function navigate(event) {
    const keys = { ArrowLeft: 'contact', ArrowRight: 'socials', Home: 'contact', End: 'socials' };
    if (!keys[event.key]) return;
    event.preventDefault();
    setTab(keys[event.key]);
    refs.current[keys[event.key]].focus();
  }
  return <div className="page">
    <a className="skip-link" href="#profile-actions">Skip to profile actions</a>
    <header className="brand-header">
      <img className="wordmark" src="/smartap-wordmark.png" alt="SMARTAP" width="2172" height="724" fetchPriority="high" />
      <p>Tap. Share. Connect.</p>
    </header>
    <main>
      <Hero />
      <div className="profile-surface">
        <div className="profile-copy">
          <h1>Lloyd Pucyutan</h1>
          <p className="profile-introduction">Let’s make a connection.</p>
          <div className="profile-divider" aria-hidden="true" />
          <p className="profile-description">A little about me, a way to reach me.<br />Save my details or find me on your favorite platform.</p>
        </div>
        <div id="profile-actions" className="profile-actions" tabIndex={-1}>
          <div className="segmented-control" role="tablist" aria-label="Profile links" onKeyDown={navigate}>
            <span className={`tab-indicator ${tab}`} aria-hidden="true" />
            {['contact', 'socials'].map(value => <button key={value} ref={element => { refs.current[value] = element; }} id={`${value}-tab`} type="button" role="tab" aria-selected={tab === value} aria-controls={`${value}-panel`} tabIndex={tab === value ? 0 : -1} onClick={() => setTab(value)}>{value === 'contact' ? 'Contact' : 'Socials'}</button>)}
          </div>
          <div id="contact-panel" role="tabpanel" aria-labelledby="contact-tab" hidden={tab !== 'contact'}><QuickActions /></div>
          <div id="socials-panel" role="tabpanel" aria-labelledby="socials-tab" hidden={tab !== 'socials'}><SocialLinks /></div>
        </div>
      </div>
    </main>
    <footer className="powered-by"><span className="footer-brand">Powered by <img src="/smartap-wordmark.png" alt="SMARTAP" width="2172" height="724" /></span></footer>
  </div>;
}


