import { useState } from 'react';
import { UserPlus, PhoneCall, MessageSquare, Mail, MessageCircle, MapPin, Check, Zap, ChevronRight, ExternalLink } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { profile, mapsUrl, saveContact } from '../profile';

const actions = [
  { label: 'Call', icon: PhoneCall, href: `tel:${profile.phoneHref}` },
  { label: 'Text / SMS', icon: MessageSquare, href: `sms:${profile.phoneHref}` },
  { label: 'Send an Email', icon: Mail, href: `mailto:${profile.email}` },
  { label: 'Messenger', icon: MessageCircle, href: profile.social.messenger, external: true },
];
function ActionButton({ icon: Icon, label, href, onClick, primary, external, location }) {
  const Tag = href ? 'a' : 'button';
  const Indicator = location ? ExternalLink : ChevronRight;
  return <Tag className={`action-row${primary ? ' action-primary' : ''}`} {...(href ? { href } : { type: 'button', onClick })} {...(external ? { target: '_blank', rel: 'noopener noreferrer', 'aria-label': `${label} (opens in a new tab)` } : {})}>
    <span className="action-icon"><Icon aria-hidden="true" /></span><span className="action-label">{label}</span>
    {!primary && <Indicator className="action-indicator" aria-hidden="true" />}
  </Tag>;
}
export default function QuickActions() {
  const [saved, setSaved] = useState(false);
  function download() { saveContact(); setSaved(true); }
  return <section className="actions-panel" aria-labelledby="actions-title">
    <SectionHeader title="Quick Actions" subtitle="Connect instantly" id="actions-title"><Zap size={19} aria-hidden="true" /></SectionHeader>
    <ActionButton icon={saved ? Check : UserPlus} label={saved ? 'Contact Downloaded' : 'Save Contact'} onClick={download} primary />
    <div className="action-group" role="group" aria-labelledby="get-in-touch-title">
      <h3 className="action-group-title" id="get-in-touch-title">Get in touch</h3>
      <div className="action-list">{actions.map(action => <ActionButton key={action.label} {...action} />)}</div>
    </div>
    <div className="action-group" role="group" aria-labelledby="location-title">
      <h3 className="action-group-title" id="location-title">Location</h3>
      <div className="action-list"><ActionButton label="Google Maps" icon={MapPin} href={mapsUrl} external location /></div>
    </div>
    <span className="sr-only" role="status">{saved ? 'Contact file downloaded. Open the file to add Lloyd to your contacts.' : ''}</span>
  </section>;
}

