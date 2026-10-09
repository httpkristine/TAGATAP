import Hero from './components/Hero';
import QuickActions from './components/QuickActions';
import SocialLinks from './components/SocialLinks';

export default function App() {
  return <div className="page">
    <a className="skip-link" href="#actions-title">Skip to quick actions</a>
    <main id="main"><Hero /><div className="sections"><QuickActions /><SocialLinks /></div></main>
    <footer className="powered-by">
      <span>Powered by</span>
      <img src="/smartap-logo.png" alt="Smartap" width="112" height="37" />
    </footer>
  </div>;
}
