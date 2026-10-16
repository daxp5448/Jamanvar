import { existsSync } from "node:fs";
import { join } from "node:path";
import { expect, test } from "@playwright/test";
import { NAV_PRODUCT_GROUPS, NAV_SOLUTIONS } from "../src/content/navigation";
import { PRODUCTS, PRODUCT_ORDER } from "../src/content/products";
import { PRODUCT_EXTRAS, PRODUCT_FLOW } from "../src/content/productDetails";
import { PRODUCT_SCREEN, SCREENS, SCREEN_FOR_MOCKUP } from "../src/content/screens";
import { SOLUTIONS } from "../src/content/solutions";
import { CHAT_SCENES, FAQS as WHATSAPP_FAQS } from "../src/content/whatsappOrdering";
import { WORKFLOW_STAGES } from "../src/content/workflow";
import { LOGO, OG_IMAGE } from "../src/content/brand";

// Content integrity: every reference between content files resolves, so a
// typo can't ship as a broken link or a missing image.

const slugs = new Set(PRODUCTS.map((p) => p.slug));
const PUBLIC = join(__dirname, "..", "public");

test("product slugs are unique and every product is in the display order", () => {
  expect(slugs.size).toBe(PRODUCTS.length);
  expect(new Set(PRODUCT_ORDER)).toEqual(slugs);
});

test("navigation lists every product exactly once", () => {
  const navSlugs = NAV_PRODUCT_GROUPS.flatMap((g) => g.items.map((i) => i.href.replace("/products/", "")));
  expect(navSlugs.sort()).toEqual([...slugs].sort());
  expect(NAV_SOLUTIONS.map((s) => s.href)).toEqual(SOLUTIONS.map((s) => `/solutions/${s.id}`));
});

test("cross-references between products point at real products", () => {
  for (const p of PRODUCTS) {
    for (const c of p.connected) expect(slugs, `${p.slug} → ${c}`).toContain(c);
    expect(p.metaTitle.length, `${p.slug} metaTitle`).toBeGreaterThan(10);
    expect(p.metaDescription.length, `${p.slug} metaDescription`).toBeLessThanOrEqual(200);
  }
  for (const key of [...Object.keys(PRODUCT_EXTRAS), ...Object.keys(PRODUCT_FLOW), ...Object.keys(PRODUCT_SCREEN)]) {
    expect(slugs, key).toContain(key);
  }
});

// A coded component per screen is enforced by the type of SCREEN_COMPONENTS.
test("every product screen has a device and every mockup maps to a screen or an illustration", () => {
  for (const [id, s] of Object.entries(SCREENS)) expect(s.aspect > 0 && s.alt.length > 20, id).toBe(true);
  for (const p of PRODUCTS) expect(p.heroMockup in SCREEN_FOR_MOCKUP, p.slug).toBe(true);
});

test("workflow and solution links point at existing product routes", () => {
  for (const stage of WORKFLOW_STAGES) expect(slugs).toContain(stage.href.replace("/products/", ""));
  for (const s of SOLUTIONS) for (const m of s.connectedModules) expect(slugs).toContain(m.href.replace("/products/", ""));
});

test("WhatsApp content makes no claims the product doesn't support", () => {
  const copy = JSON.stringify({ CHAT_SCENES, WHATSAPP_FAQS }).toLowerCase();
  for (const phrase of ["cash on delivery", "track your rider", "our delivery riders", "% more", "guarantee"]) {
    expect(copy, phrase).not.toContain(phrase);
  }
  expect(WHATSAPP_FAQS.length).toBeGreaterThanOrEqual(8);
});

test("brand logo and share image files exist", () => {
  for (const src of [LOGO.small.src, LOGO.large.src, LOGO.master, OG_IMAGE.url]) {
    expect(existsSync(join(PUBLIC, src)), src).toBe(true);
  }
});
