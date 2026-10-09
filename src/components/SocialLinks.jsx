import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import { AtSign } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { profile } from '../profile';

const socials = [
  { label: 'Facebook', key: 'facebook', icon: FaFacebookF },
  { label: 'Instagram', key: 'instagram', icon: FaInstagram },
  { label: 'TikTok', key: 'tiktok', icon: FaTiktok },
];
export default function SocialLinks() {
  return <section className="social-panel" aria-labelledby="social-title">
    <SectionHeader title="Social Media & Links" subtitle="Stay connected" id="social-title"><AtSign size={18} aria-hidden="true" /></SectionHeader>
    <nav className="action-list" aria-label="Social media">{socials.map(({ label, key, icon: Icon }) => <a key={key} className="action-row social-row" href={profile.social[key]} target="_blank" rel="noopener noreferrer" aria-label={`Open ${label} in a new tab`}><span className={`action-icon social-icon ${key}`}><Icon aria-hidden="true" /></span><span className="action-label">{label}</span></a>)}</nav>
  </section>;
}
