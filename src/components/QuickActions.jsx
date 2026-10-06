import { useState } from 'react';
import { UserPlus, PhoneCall, MessageSquare, Mail, MessageCircle, MapPin } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { profile, mapsUrl, saveContact } from '../profile';

const actions = [
  { label: 'Call', icon: PhoneCall, href: `tel:${profile.phoneHref}` },
  { label: 'Text / SMS', icon: MessageSquare, href: `sms:${profile.phoneHref}` },
  { label: 'Send an Email', icon: Mail, href: `mailto:${profile.email}` },
  { label: 'Messenger', icon: MessageCircle, href: profile.social.messenger, external: true },
  { label: 'Google Maps', icon: MapPin, href: mapsUrl, external: true },
];

function ActionButton({ icon: Icon, label, href, onClick, primary, external }) {
  const Tag = href ? 'a' : 'button';
  return <Tag className={`action-row${primary ? ' action-primary' : ''}`} {...(href ? { href } : { type: 'button', onClick })} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
    <span className="action-icon"><Icon aria-hidden="true" /></span><span className="action-label">{label}</span>
  </Tag>;
}
export default function QuickActions() {
  const [saved, setSaved] = useState(false);
  function download() { saveContact(); setSaved(true); }
  return <section className="panel actions-panel" aria-labelledby="actions-title">
    <SectionHeader title="Quick Action" subtitle="Connect instantly" id="actions-title">
      <div className="action-indicator" aria-hidden="true"><div className="dots"><i /><i /><i /></div><span /></div>
    </SectionHeader>
    <div className="action-list"><ActionButton icon={UserPlus} label="Save Contact" onClick={download} primary />{actions.map(action => <ActionButton key={action.label} {...action} />)}</div>
    <span className="sr-only" role="status">{saved ? 'Contact file downloaded.' : ''}</span>
  </section>;
}
