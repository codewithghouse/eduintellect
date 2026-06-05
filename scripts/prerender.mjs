/**
 * Build-time prerenderer.
 *
 * For every URL in public/sitemap.xml, navigate Playwright + Chromium to the
 * SPA, wait for React + the Seo useEffect to settle, and snapshot the rendered
 * HTML into dist/<route>/index.html.
 *
 * Vercel's static-files-first behavior then serves the prerendered HTML to
 * crawlers; the SPA still hydrates on top in the browser via main.tsx.
 *
 * No external prerender framework. We own this file.
 */

import { createServer } from 'node:http';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright-core';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const SITEMAP = path.join(ROOT, 'public', 'sitemap.xml');
const PORT = 5179;
const ORIGIN = `http://127.0.0.1:${PORT}`;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.mp4': 'video/mp4',
};

async function trySend(filePath, res) {
  try {
    const data = await fs.readFile(filePath);
    res.setHeader('Content-Type', MIME[path.extname(filePath).toLowerCase()] ?? 'application/octet-stream');
    res.statusCode = 200;
    res.end(data);
    return true;
  } catch {
    return false;
  }
}

const server = createServer(async (req, res) => {
  const reqUrl = new URL(req.url ?? '/', ORIGIN);
  const safe = path.normalize(reqUrl.pathname).replace(/^(\.\.[\\/])+/, '');
  const direct = path.join(DIST, safe);
  if (direct.startsWith(DIST) && (await trySend(direct, res))) return;
  if (direct.startsWith(DIST) && (await trySend(path.join(direct, 'index.html'), res))) return;
  // SPA fallback — let React Router resolve the route in the browser
  if (await trySend(path.join(DIST, 'index.html'), res)) return;
  res.statusCode = 404;
  res.end('Not Found');
});

async function readRoutes() {
  const xml = await fs.readFile(SITEMAP, 'utf8');
  const matches = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)];
  const paths = matches.map((m) => {
    try {
      return new URL(m[1]).pathname;
    } catch {
      return null;
    }
  });
  return [...new Set(paths.filter((p) => p && !p.startsWith('/admin')))];
}

await new Promise((resolve) => server.listen(PORT, resolve));
console.log(`prerender: dev server on ${ORIGIN}`);

const SANDBOX_FLAGS = ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'];

async function getLaunchOptions() {
  // Vercel / Lambda: Vercel's Linux image lacks the system libs Chromium needs
  // (libnspr4, libnss3, etc.). @sparticuz/chromium ships a Lambda-compatible
  // Chromium binary with those libs bundled.
  if (process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME) {
    const sparticuz = (await import('@sparticuz/chromium')).default;
    return {
      args: [...sparticuz.args, ...SANDBOX_FLAGS],
      executablePath: await sparticuz.executablePath(),
      headless: true,
    };
  }
  // Local dev: rely on the system / playwright-installed Chromium.
  return { args: SANDBOX_FLAGS };
}

const browser = await chromium.launch(await getLaunchOptions());
const context = await browser.newContext({
  userAgent:
    'Mozilla/5.0 (compatible; EdullentPrerender/1.0; +https://edullent.com)',
  viewport: { width: 1280, height: 800 },
});

const routes = await readRoutes();
console.log(`prerender: ${routes.length} routes`);

let ok = 0;
let fail = 0;

for (const route of routes) {
  const page = await context.newPage();
  try {
    // 'load' (window.onload) is more reliable than 'networkidle' here because
    // Firebase opens a long-lived WebChannel that never lets the network reach
    // idle.
    await page.goto(`${ORIGIN}${route}`, { waitUntil: 'load', timeout: 60_000 });
    // Give React + the Seo component's useEffect time to mount and inject
    // title / meta / JSON-LD schema into <head>.
    await page.waitForTimeout(1500);
    const html = await page.content();

    const outDir = route === '/' ? DIST : path.join(DIST, route.replace(/^\/+/, ''));
    const outFile = path.join(outDir, 'index.html');
    await fs.mkdir(outDir, { recursive: true });
    await fs.writeFile(outFile, html, 'utf8');
    ok++;
    process.stdout.write(`  ✓ ${route}\n`);
  } catch (err) {
    fail++;
    process.stdout.write(`  ✗ ${route}  ${err instanceof Error ? err.message : err}\n`);
  } finally {
    await page.close();
  }
}

await browser.close();
server.close();

console.log(`prerender: ${ok} ok, ${fail} failed, ${routes.length} total`);
if (fail > 0) process.exitCode = 1;
