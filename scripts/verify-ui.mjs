import { chromium } from 'playwright';
import { createServer } from 'vite';
import assert from 'node:assert/strict';
const server = await createServer({ server: { host: '127.0.0.1', port: 5174 } });
await server.listen();
let browser;
try {
  browser = await chromium.launch({ headless: true, channel: 'chrome' });
  const page = await browser.newPage({ deviceScaleFactor: 2 });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  for (const width of [320, 350, 402, 430, 1024]) {
    await page.setViewportSize({ width, height: 874 });
    await page.goto('http://127.0.0.1:5174');
    await page.locator('.portrait').waitFor();
    await page.evaluate(() => document.fonts.ready);
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `Overflow at ${width}`);
    assert.equal(await page.locator('#contact-panel .action-row:visible').count(), 6);
    assert.equal(await page.locator('#socials-panel').isVisible(), false);
    await page.getByRole('tab', { name: 'Socials' }).click();
    assert.equal(await page.locator('#contact-panel').isVisible(), false);
    assert.equal(await page.locator('#socials-panel .action-row:visible').count(), 3);
    await page.getByRole('tab', { name: 'Socials' }).press('ArrowLeft');
    assert.equal(await page.getByRole('tab', { name: 'Contact' }).getAttribute('aria-selected'), 'true');
    assert.equal(await page.locator('a[href^="tel:"]').getAttribute('href'), 'tel:+639163709474');
    if (width === 402) {
      await page.evaluate(() => document.activeElement?.blur());
      await page.waitForTimeout(220);
      await page.screenshot({ path: 'artifacts/smartap-contact-mobile.png', fullPage: true });
      const downloadPromise = page.waitForEvent('download');
      await page.getByRole('button', { name: 'Save Contact' }).click();
      const download = await downloadPromise;
      assert.equal(download.suggestedFilename(), 'Lloyd-Pucyutan.vcf');
      await page.getByRole('button', { name: 'Contact Downloaded' }).waitFor();
      await page.getByRole('tab', { name: 'Socials' }).click();
      await page.waitForTimeout(220);
      await page.screenshot({ path: 'artifacts/smartap-socials-mobile.png', fullPage: true });
    }
    console.log(`PASS ${width}px: tabs, keyboard, actions, no overflow`);
  }
  assert.deepEqual(errors, []);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  assert.equal(await page.locator('.tab-indicator').evaluate(el => getComputedStyle(el).transitionDuration), '0s');
  console.log('PASS download, no React errors, reduced motion');
} finally {
  await browser?.close();
  await server.close();
}




