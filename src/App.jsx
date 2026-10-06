import Hero, { Header } from './components/Hero';
import ContactSection from './components/ContactSection';
import QuickActions from './components/QuickActions';
import SocialLinks from './components/SocialLinks';

export default function App() {
  return <div className="page">
    <a className="skip-link" href="#contact-title">Skip to contact details</a>
    <Header />
    <main id="main"><Hero /><div className="sections"><ContactSection /><QuickActions /><SocialLinks /></div></main>
  </div>;
}
