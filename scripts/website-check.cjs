// Browser QA for every public route.
//
//   npm run build && npx next start -p 3040
//   node scripts/website-check.cjs [phase]
//
// Env: QA_URL (default http://localhost:3040), QA_BROWSER (optional Chromium path).
// Writes full-page screenshots and routes.json to test-results/<phase>/ and
// fails on non-200 routes, horizontal overflow, broken images, page errors,
// missing/duplicate h1, unlabeled form controls, broken internal links, or
// serious/critical axe accessibility violations.
const { chromium } = require("@playwright/test");
const AxeBuilder = require("@axe-core/playwright").default;
const fs = require("node:fs");
const path = require("node:path");

const routes = [
  "/", "/features", "/how-it-works", "/about", "/support", "/contact", "/book-a-demo", "/security-gst",
  "/privacy-policy", "/terms-and-conditions", "/refund-cancellation",
  ...["pos", "kds", "captain", "qr-ordering", "kiosk", "whatsapp-ordering", "tables", "inventory", "analytics", "hardware"].map((p) => `/products/${p}`),
  ...["operations", "guest-experience", "kitchen-ops", "insights", "reliability"].map((p) => `/solutions/${p}`),
];
const phase = process.argv[2] || "final";
const base = process.env.QA_URL || "http://localhost:3040";
const out = path.join("test-results", phase);

(async () => {
  fs.mkdirSync(out, { recursive: true });
  const browser = await chromium.launch({ headless: true, executablePath: process.env.QA_BROWSER });
  const results = [];
  const allLinks = new Set();

  for (const width of [1440, 768, 375]) {
    const context = await browser.newContext({ viewport: { width, height: 1000 }, reducedMotion: "reduce" });
    const page = await context.newPage();
    for (const route of routes) {
      const errors = [];
      const listener = (e) => errors.push(e.message);
      page.on("pageerror", listener);
      const response = await page.goto(base + route, { waitUntil: "networkidle" });
      await page.evaluate(async () => {
        document.querySelectorAll(".reveal").forEach((e) => e.classList.add("is-visible"));
        for (const image of document.images) image.loading = "eager";
        await Promise.all([...document.images].map((i) => i.decode().catch(() => {})));
      });
      const data = await page.evaluate(() => ({
        title: document.title,
        description: document.querySelector('meta[name="description"]')?.getAttribute("content"),
        h1: document.querySelectorAll("h1").length,
        canonical: document.querySelector('link[rel="canonical"]')?.getAttribute("href"),
        overflow: document.documentElement.scrollWidth > innerWidth,
        broken: [...document.images].filter((i) => !i.complete || i.naturalWidth === 0).map((i) => i.src),
        links: [...document.querySelectorAll("a[href]")].map((a) => a.getAttribute("href")).filter((h) => h.startsWith("/")),
        unlabeled: [...document.querySelectorAll('input:not([type="hidden"]),select,textarea')].filter(
          (i) => !i.labels?.length && !i.getAttribute("aria-label")
        ).length,
      }));
      data.links.forEach((l) => allLinks.add(l.split("#")[0] || "/"));
      let axe = [];
      if (width === 1440 || width === 375) {
        const scan = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
        axe = scan.violations
          .filter((v) => v.impact === "serious" || v.impact === "critical")
          .map((v) => `${v.id} (${v.nodes.length}): ${v.nodes.slice(0, 2).map((n) => n.target.join(" ")).join(" | ")}`);
      }
      const slug = route === "/" ? "home" : route.slice(1).replaceAll("/", "-");
      await page.screenshot({ path: path.join(out, `${slug}-${width}.png`), fullPage: true });
      const { links, ...rest } = data;
      results.push({ route, width, status: response.status(), ...rest, axe, errors });
      page.off("pageerror", listener);
    }
    await context.close();
  }

  const page = await browser.newPage({ reducedMotion: "reduce" });
  for (const width of [320, 390, 430, 1024, 1366]) {
    await page.setViewportSize({ width, height: 950 });
    for (const route of ["/", "/book-a-demo", "/products/pos", "/products/whatsapp-ordering"]) {
      await page.goto(base + route, { waitUntil: "networkidle" });
      const slug = route === "/" ? "home" : route.slice(1).replaceAll("/", "-");
      await page.screenshot({ path: path.join(out, `${slug}-${width}.png`), fullPage: true });
      results.push({ route, width, status: 200, overflow: await page.evaluate(() => document.documentElement.scrollWidth > innerWidth) });
    }
  }

  const brokenLinks = [];
  for (const link of allLinks) {
    const res = await page.request.get(base + link);
    if (res.status() !== 200) brokenLinks.push(`${link} → ${res.status()}`);
  }
  for (const extra of ["/robots.txt", "/sitemap.xml"]) {
    const res = await page.request.get(base + extra);
    if (res.status() !== 200) brokenLinks.push(`${extra} → ${res.status()}`);
  }

  fs.writeFileSync(path.join(out, "routes.json"), JSON.stringify({ results, internalLinks: [...allLinks].sort(), brokenLinks }, null, 2));
  const failures = results.filter(
    (r) => r.status !== 200 || r.overflow || r.broken?.length || r.errors?.length || r.unlabeled || (r.h1 !== undefined && r.h1 !== 1) || r.axe?.length
  );
  const titles = results.filter((r) => r.width === 1440).map((r) => r.title);
  const dupTitles = titles.filter((t, i) => titles.indexOf(t) !== i);
  console.log(
    JSON.stringify({ phase, checks: results.length, internalLinks: allLinks.size, brokenLinks, duplicateTitles: dupTitles, failures }, null, 2)
  );
  await browser.close();
  if (failures.length || brokenLinks.length || dupTitles.length) process.exitCode = 1;
})().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
