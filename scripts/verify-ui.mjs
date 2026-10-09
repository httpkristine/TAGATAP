import { chromium } from 'playwright';
import { createServer } from 'vite';
import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';
await mkdir('artifacts', { recursive: true });
const server = await createServer({ server: { host: '127.0.0.1', port: 5174, strictPort: true } });
await server.listen();
let browser;
try {
  browser = await chromium.launch({ headless: true, channel: 'chrome' });
  const page = await browser.newPage({ deviceScaleFactor: 2 });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  for (const width of [320, 360, 375, 390, 402, 430, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 874 });
    await page.goto('http://127.0.0.1:5174');
    await page.locator('.portrait').waitFor();
    await page.evaluate(() => document.fonts.ready);
    assert.equal(await page.locator('.portrait').evaluate(el => getComputedStyle(el).position), 'absolute');
    const stage = await page.locator('.portrait-stage').boundingBox();
    assert.ok(Math.abs(stage.height / stage.width - 687 / 1017) < 0.01, `Hero proportions at ${width}`);
    assert.equal(await page.locator('img').evaluateAll(images => images.every(image => image.complete && image.naturalWidth > 0)), true, `Broken image at ${width}`);
    assert.equal(await page.locator('.hero-identity h1').evaluate(el => el.scrollWidth <= el.clientWidth), true, `Name clipping at ${width}`);
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `Overflow at ${width}`);
    assert.equal(await page.locator('#contact-panel .action-row:visible').count(), 6);
    assert.equal(await page.locator('#socials-panel').isVisible(), false);
    await page.getByRole('tab', { name: 'Socials' }).click();
    assert.equal(await page.locator('#contact-panel').isVisible(), false);
    assert.equal(await page.locator('#socials-panel .action-row:visible').count(), 3);
    assert.equal(await page.locator('.social-handle, .action-indicator, .external-indicator').count(), 0);
    for (const row of await page.locator('#socials-panel .action-row').all()) {
      assert.ok((await row.boundingBox()).height >= 44);
    }
    await page.getByRole('tab', { name: 'Socials' }).press('ArrowLeft');
    assert.equal(await page.getByRole('tab', { name: 'Contact' }).getAttribute('aria-selected'), 'true');
    await page.getByRole('tab', { name: 'Contact' }).press('End');
    assert.equal(await page.getByRole('tab', { name: 'Socials' }).getAttribute('aria-selected'), 'true');
    await page.getByRole('tab', { name: 'Socials' }).press('Home');
    assert.equal(await page.getByRole('tab', { name: 'Contact' }).getAttribute('aria-selected'), 'true');
    for (const link of await page.locator('a[target="_blank"]').all()) {
      assert.match(await link.getAttribute('rel'), /noopener/);
      assert.match(await link.getAttribute('href'), /^https:\/\//);
    }
    assert.equal(await page.locator('a[href^="tel:"]').getAttribute('href'), 'tel:+639163709474');
    assert.equal(await page.locator('a[href^="sms:"]').getAttribute('href'), 'sms:+639163709474');
    assert.equal(await page.locator('a[href^="mailto:"]').getAttribute('href'), 'mailto:lloydpucyutan01@gmail.com');
    if (width === 402) {
      await page.evaluate(() => document.activeElement?.blur());
      await page.waitForTimeout(220);
      await page.screenshot({ path: 'artifacts/smartap-contact-mobile.png', fullPage: true });
      const downloadPromise = page.waitForEvent('download');
      await page.getByRole('button', { name: 'Save Contact' }).click();
      const download = await downloadPromise;
      assert.equal(download.suggestedFilename(), 'Lloyd-Pucyutan.vcf');
      const stream = await download.createReadStream();
      const chunks = [];
      for await (const chunk of stream) chunks.push(chunk);
      const vcard = Buffer.concat(chunks).toString('utf8');
      assert.match(vcard, /BEGIN:VCARD\r\nVERSION:3.0/);
      assert.match(vcard, /FN:Lloyd Pucyutan/);
      assert.match(vcard, /TEL;TYPE=CELL:\+639163709474/);
      assert.match(vcard, /EMAIL;TYPE=INTERNET:lloydpucyutan01@gmail.com/);
      assert.match(vcard, /END:VCARD\r\n$/);
      await page.getByRole('button', { name: 'Save Contact' }).waitFor();
      assert.match(await page.getByRole('status').textContent(), /Contact file ready/);
      const backgroundBefore = await page.getByRole('button', { name: 'Save Contact' }).evaluate(el => getComputedStyle(el).backgroundColor);
      await page.getByRole('button', { name: 'Save Contact' }).hover();
      assert.equal(await page.getByRole('button', { name: 'Save Contact' }).evaluate(el => getComputedStyle(el).backgroundColor), backgroundBefore);
      await page.getByRole('tab', { name: 'Socials' }).click();
      await page.waitForTimeout(220);
      await page.screenshot({ path: 'artifacts/smartap-socials-mobile.png', fullPage: true });
    }
    console.log(`PASS ${width}px: tabs, keyboard, actions, no overflow`);
  }
  assert.deepEqual(errors, []);
  await page.getByRole('tab', { name: 'Contact' }).click();
  await page.evaluate(() => { URL.createObjectURL = () => { throw new Error('Simulated download failure'); }; });
  await page.getByRole('button', { name: 'Save Contact' }).click();
  assert.match(await page.getByRole('status').textContent(), /Unable to download/);
  assert.equal(await page.getByRole('button', { name: 'Save Contact' }).count(), 1);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  assert.equal(await page.locator('.tab-indicator').evaluate(el => getComputedStyle(el).transitionDuration), '0s');
  console.log('PASS download, no React errors, reduced motion');
} finally {
  await browser?.close();
  await server.close();
}




