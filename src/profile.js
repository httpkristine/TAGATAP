export const profile = {
  name: 'Lloyd Pucyutan',
  phone: '+63 09163709474',
  phoneHref: '+6309163709474',
  email: 'lloydpucyutan01@gmail.com',
  address: 'Brgy. San Antonio 2, San Pablo City, Laguna',
  social: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    tiktok: 'https://www.tiktok.com/',
    messenger: 'https://www.messenger.com/',
  },
};
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(profile.address)}`;

function escapeVCard(value) {
  return value.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/;/g, '\\;').replace(/,/g, '\\,');
}
export function saveContact() {
  const contact = [
    'BEGIN:VCARD', 'VERSION:3.0', `FN:${escapeVCard(profile.name)}`,
    'N:Pucyutan;Lloyd;;;', `TEL;TYPE=CELL:${profile.phoneHref}`,
    `EMAIL;TYPE=INTERNET:${profile.email}`,
    `ADR;TYPE=HOME:;;${escapeVCard(profile.address)};;;;`, 'END:VCARD', '',
  ].join('\r\n');
  const url = URL.createObjectURL(new Blob([contact], { type: 'text/vcard;charset=utf-8' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Lloyd-Pucyutan.vcf';
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
