import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { PRODUCTS } from "../../src/content/products";
import { SOLUTIONS } from "../../src/content/solutions";

const ROUTES = [
  "/",
  "/features",
  "/how-it-works",
  "/apps",
  "/about",
  "/support",
  "/contact",
  "/book-a-demo",
  "/security-gst",
  "/privacy-policy",
  "/terms-and-conditions",
  "/refund-cancellation",
  ...PRODUCTS.map((p) => `/products/${p.slug}`),
  ...SOLUTIONS.map((s) => `/solutions/${s.id}`),
];

for (const route of ROUTES) {
  test(`${route} renders with one h1, its own canonical, no overflow and no errors`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(e.message));
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1")).toHaveCount(1);
    const canonical = route === "/" ? /^https?:\/\/[^/]+\/?$/ : new RegExp(`${route}$`);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", canonical);
    expect(await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)).toBeLessThanOrEqual(0);
    const broken = await page.evaluate(async () => {
      const imgs = [...document.images];
      imgs.forEach((i) => (i.loading = "eager"));
      await Promise.all(imgs.map((i) => i.decode().catch(() => undefined)));
      return imgs.filter((i) => i.naturalWidth === 0).map((i) => i.src);
    });
    expect(broken).toEqual([]);
    expect(errors).toEqual([]);
  });
}

test("page titles are unique", async ({ request }) => {
  const titles = await Promise.all(
    ROUTES.map(async (r) => {
      const html = await (await request.get(r)).text();
      return html.match(/<title>([^<]*)<\/title>/)?.[1];
    })
  );
  expect(new Set(titles).size).toBe(ROUTES.length);
});

test("short URLs redirect permanently to the product pages", async ({ request }) => {
  for (const [from, to] of [
    ["/whatsapp-ordering", "/products/whatsapp-ordering"],
    ["/kiosk", "/products/kiosk"],
  ]) {
    const res = await request.get(from, { maxRedirects: 0 });
    expect(res.status(), from).toBe(308);
    expect(res.headers()["location"], from).toBe(to);
  }
});

test("sitemap lists every product including the new ones", async ({ request }) => {
  const xml = await (await request.get("/sitemap.xml")).text();
  for (const p of PRODUCTS) expect(xml).toContain(`/products/${p.slug}</loc>`);
});

for (const route of ["/", "/apps", "/products/whatsapp-ordering", "/products/kiosk", "/book-a-demo"]) {
  test(`${route} has no serious accessibility violations`, async ({ page }) => {
    await page.goto(route);
    await page.evaluate(() => document.querySelectorAll(".reveal").forEach((e) => e.classList.add("is-visible")));
    const { violations } = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
    const serious = violations.filter((v) => v.impact === "serious" || v.impact === "critical");
    expect(serious.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(" ")).join(", ")}`)).toEqual([]);
  });
}

test("the English logo, favicon and share image are served", async ({ page, request }) => {
  await page.goto("/");
  const logo = page.locator("header img[alt='Jamanvar by Kelviontech']");
  await expect(logo).toHaveAttribute("src", /logo-en-480\.webp/);
  expect(await logo.evaluate((img: HTMLImageElement) => img.naturalWidth)).toBeGreaterThan(0);
  await expect(page.locator("footer img[alt='Jamanvar by Kelviontech']")).toHaveAttribute("src", /logo-en-480\.webp/);
  await expect(page.locator('meta[property="og:image"]').first()).toHaveAttribute("content", /og-image\.png/);
  const iconHref = await page.locator('link[rel="icon"]').first().getAttribute("href");
  expect(iconHref).toBeTruthy();
  expect((await request.get(iconHref!)).status()).toBe(200);
});
