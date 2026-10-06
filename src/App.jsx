import Hero from './components/Hero';
import QuickActions from './components/QuickActions';
import SocialLinks from './components/SocialLinks';

export default function App() {
  return <div className="page">
    <a className="skip-link" href="#actions-title">Skip to quick actions</a>
    <main id="main"><Hero /><div className="sections"><QuickActions /><SocialLinks /></div></main>
  </div>;
}
