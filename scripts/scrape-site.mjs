import { chromium } from 'playwright';

const BASE = 'https://reproduction.uz';
const PAGES = ['/', '/portfolio', '/services', '/contacts', '/stories', '/reviews'];

async function scrapePage(page, path) {
  const url = `${BASE}${path}`;
  console.log(`\n${'='.repeat(70)}`);
  console.log(`PAGE: ${url}`);
  console.log('='.repeat(70));

  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    // Wait extra for SPA content to render
    await page.waitForTimeout(3000);

    // Get page title
    const title = await page.title();
    console.log(`\nTITLE: ${title}`);

    // Get meta description
    const metaDesc = await page.$eval('meta[name="description"]', el => el.content).catch(() => 'N/A');
    console.log(`META DESCRIPTION: ${metaDesc}`);

    // Get navigation items
    const navItems = await page.$$eval('nav a, .nav a, [class*="nav"] a, .menu a, [class*="menu"] a, header a', els =>
      [...new Set(els.map(el => `${el.textContent.trim()} -> ${el.href}`).filter(t => t.trim().length > 3))]
    );
    if (navItems.length) {
      console.log(`\nNAVIGATION:`);
      navItems.forEach(item => console.log(`  - ${item}`));
    }

    // Get all headings
    const headings = await page.$$eval('h1, h2, h3, h4, h5, h6', els =>
      els.map(el => `[${el.tagName}] ${el.textContent.trim()}`).filter(t => t.length > 5)
    );
    if (headings.length) {
      console.log(`\nHEADINGS:`);
      headings.forEach(h => console.log(`  ${h}`));
    }

    // Get all visible text blocks (paragraphs, divs with text, spans, list items)
    const textBlocks = await page.evaluate(() => {
      const blocks = [];
      const seen = new Set();
      const elements = document.querySelectorAll('p, li, [class*="text"], [class*="desc"], [class*="title"], [class*="subtitle"], [class*="content"], [class*="info"], blockquote, figcaption, label, .btn, button, a[class*="btn"], [class*="price"], [class*="service"], [class*="card"]');

      for (const el of elements) {
        const text = el.innerText?.trim();
        if (text && text.length > 2 && !seen.has(text) && el.offsetParent !== null) {
          seen.add(text);
          const tag = el.tagName.toLowerCase();
          const cls = el.className?.toString().slice(0, 50) || '';
          blocks.push({ tag, cls, text: text.slice(0, 500) });
        }
      }
      return blocks;
    });

    if (textBlocks.length) {
      console.log(`\nTEXT BLOCKS:`);
      textBlocks.forEach(b => console.log(`  [${b.tag}${b.cls ? '.' + b.cls.split(' ')[0] : ''}] ${b.text}`));
    }

    // Get all links
    const links = await page.$$eval('a[href]', els =>
      [...new Set(els.filter(el => el.offsetParent !== null && el.href.includes('reproduction.uz'))
        .map(el => `${el.textContent.trim()} -> ${el.href}`)
        .filter(t => t.length > 5))]
    );
    if (links.length) {
      console.log(`\nINTERNAL LINKS:`);
      links.forEach(l => console.log(`  - ${l}`));
    }

    // Get all images with alt text
    const images = await page.$$eval('img[alt], img[title]', els =>
      els.filter(el => el.alt || el.title).map(el => `[IMG] alt="${el.alt}" title="${el.title}" src="${el.src?.slice(0, 100)}"`)
    );
    if (images.length) {
      console.log(`\nIMAGES:`);
      images.forEach(i => console.log(`  ${i}`));
    }

    // Get full visible text as fallback
    const fullText = await page.evaluate(() => {
      const body = document.querySelector('body');
      return body?.innerText?.trim() || '';
    });

    console.log(`\nFULL VISIBLE TEXT:`);
    console.log(fullText.slice(0, 5000));

    // Take a screenshot for reference
    const safeName = path === '/' ? 'home' : path.slice(1);
    await page.screenshot({ path: `website/screenshots/${safeName}.png`, fullPage: true });
    console.log(`\nScreenshot saved: website/screenshots/${safeName}.png`);

  } catch (err) {
    console.log(`ERROR: ${err.message}`);
  }
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    locale: 'ru-RU',
    viewport: { width: 1440, height: 900 }
  });
  const page = await context.newPage();

  // Create screenshots directory
  const fs = await import('fs');
  fs.mkdirSync('website/screenshots', { recursive: true });

  for (const path of PAGES) {
    await scrapePage(page, path);
  }

  await browser.close();
  console.log('\n\nDONE - All pages scraped.');
}

main().catch(console.error);
