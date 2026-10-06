import { Phone, MapPin, Mail } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { profile, mapsUrl } from '../profile';

const items = [
  { label: 'Mobile Number', value: profile.phone, icon: Phone, href: `tel:${profile.phoneHref}` },
  { label: 'Location', value: profile.address, icon: MapPin, href: mapsUrl, external: true },
  { label: 'Email', value: profile.email, icon: Mail, href: `mailto:${profile.email}` },
];

function ContactItem({ item }) {
  const Icon = item.icon;
  return <a className="contact-row" href={item.href} {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
    <span className="contact-icon"><Icon aria-hidden="true" /></span>
    <span className="contact-copy"><span className="contact-label">{item.label}</span><span className="contact-value">{item.value}</span></span>
  </a>;
}
export default function ContactSection() {
  return <section className="panel contact-panel" aria-labelledby="contact-title">
    <SectionHeader title="Contact" subtitle="Get in touch" id="contact-title" />
    <div className="contact-list">{items.map(item => <ContactItem key={item.label} item={item} />)}</div>
  </section>;
}
