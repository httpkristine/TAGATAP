export const profile = {
  name: 'Lloyd Pucyutan',
  phone: '+63 916 370 9474',
  phoneHref: '+639163709474',
  email: 'lloydpucyutan01@gmail.com',
  address: 'Brgy. San Antonio 2, San Pablo City, Laguna',
  mapsLocation: 'X8VG+VQX San Pablo City, Laguna',
  social: {
    facebook: 'https://www.facebook.com/lloyd.pucyutan.01/',
    instagram: 'https://www.instagram.com/_loidiii?stkn=cTQxeWJ4ZjJ6bzBm&utm_source=qr',
    tiktok: 'https://www.tiktok.com/@lloyd_pucyutan',
    messenger: 'https://m.me/lloyd.pucyutan.01',
  },
};
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(profile.mapsLocation)}`;

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

