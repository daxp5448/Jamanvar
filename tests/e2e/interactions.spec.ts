import { expect, test } from "@playwright/test";

test.describe("header navigation", () => {
  test("the Products menu opens by keyboard, lists every product and closes with Escape", async ({ page }) => {
    await page.goto("/");
    const trigger = page.getByRole("button", { name: "Products" });
    await trigger.focus();
    await page.keyboard.press("Enter");
    await expect(trigger).toHaveAttribute("aria-expanded", "true");
    await expect(page.locator("header a[href='/products/whatsapp-ordering']")).toBeVisible();
    await expect(page.locator("header a[href='/products/kiosk']")).toBeVisible();
    await expect(page.locator("header a[href^='/products/']")).toHaveCount(10);
    await page.keyboard.press("Escape");
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    await expect(trigger).toBeFocused();
  });

  test("a mouse click after hovering keeps the menu open and its links navigate", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Solutions" }).click();
    await page.locator("header a[href='/solutions/kitchen-ops']").click();
    await expect(page).toHaveURL(/\/solutions\/kitchen-ops$/);
    await expect(page.locator("header a[href='/solutions/insights']")).toHaveCount(0);
  });
});

test.describe("interactive product demo", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/#try-it");
  });

  test("short-code search, adding a dish and the GST receipt", async ({ page }) => {
    const demo = page.locator("#try-it");
    await demo.getByLabel("Search dishes by short code or name").fill("GJ01");
    await expect(demo.getByRole("button", { name: /Gulab Jamun/ })).toHaveCount(1);
    await demo.getByRole("button", { name: /Gulab Jamun/ }).click();
    await demo.getByRole("button", { name: "Preview GST receipt" }).click();
    const receipt = page.getByRole("dialog", { name: "Sample GST receipt" });
    await expect(receipt.getByText("Gulab Jamun with Rabri")).toBeVisible();
    await expect(receipt.getByText(/GSTIN:\s*\d/)).toHaveCount(0);
    await page.keyboard.press("Escape");
    await expect(receipt).toHaveCount(0);
  });

  test("tabs move with arrow keys, a picked table carries into billing, kitchen items toggle", async ({ page }) => {
    const demo = page.locator("#try-it");
    await demo.getByRole("tab", { name: "Billing" }).focus();
    await page.keyboard.press("ArrowRight");
    await expect(demo.getByRole("tab", { name: "Floor plan" })).toHaveAttribute("aria-selected", "true");
    await demo.getByRole("button", { name: /T-12/ }).click();
    await demo.getByRole("button", { name: "Open bill in POS" }).click();
    await expect(demo.getByText("Table T-12")).toBeVisible();
    await demo.getByRole("tab", { name: "Kitchen" }).click();
    const item = demo.getByRole("button", { name: /Paneer Tikka Angara/ }).first();
    await expect(item).toHaveAttribute("aria-pressed", "false");
    await item.click();
    await expect(item).toHaveAttribute("aria-pressed", "true");
  });
});

test("FAQ items open and close", async ({ page }) => {
  await page.goto("/products/whatsapp-ordering");
  const item = page.locator("details.faq-item").first();
  await item.locator("summary").click();
  await expect(item).toHaveAttribute("open", "");
});

test.describe("WhatsApp Ordering page", () => {
  test("CTAs point at real destinations", async ({ page }) => {
    await page.goto("/products/whatsapp-ordering");
    const hero = page.locator("section").first();
    await expect(hero.getByRole("link", { name: /Book a demo/ })).toHaveAttribute("href", "/book-a-demo");
    await hero.getByRole("link", { name: "See how it works" }).click();
    await expect(page.locator("#how-it-works")).toBeInViewport();
    await expect(page.getByRole("link", { name: "Explore all products" })).toHaveAttribute("href", "/features");
  });

  test("states the delivery limits plainly", async ({ page }) => {
    await page.goto("/products/whatsapp-ordering");
    const delivery = page.getByRole("article").filter({ has: page.getByRole("heading", { name: "Home delivery" }) });
    await expect(delivery.getByText("Jamanvar doesn't provide delivery riders or live tracking.")).toBeVisible();
  });

  test("the home page links to it", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Explore WhatsApp Ordering" }).click();
    await expect(page).toHaveURL(/\/products\/whatsapp-ordering$/);
  });
});
