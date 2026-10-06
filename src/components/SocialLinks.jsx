import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import SectionHeader from './SectionHeader';
import { profile } from '../profile';

const socials = [
  { label: 'Facebook', key: 'facebook', icon: FaFacebookF },
  { label: 'Instagram', key: 'instagram', icon: FaInstagram },
  { label: 'Tiktok', key: 'tiktok', icon: FaTiktok },
];
function SocialLink({ social }) {
  const Icon = social.icon;
  return <a className="social-card" href={profile.social[social.key]} target="_blank" rel="noopener noreferrer" aria-label={`Open ${social.label} in a new tab`}>
    <span className={`social-logo ${social.key}`}><Icon aria-hidden="true" /></span>
    <span>{social.label}</span>
  </a>;
}
export default function SocialLinks() {
  return <section className="panel social-panel" aria-labelledby="social-title">
    <SectionHeader title="Social Media & Links" subtitle="Stay connected" id="social-title" />
    <nav className="social-grid" aria-label="Social media">{socials.map(social => <SocialLink key={social.key} social={social} />)}</nav>
  </section>;
}
