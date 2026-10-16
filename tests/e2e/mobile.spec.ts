import { expect, test } from "@playwright/test";

test("the mobile menu opens, locks scrolling, navigates and closes", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Open menu" }).click();
  const sheet = page.getByRole("dialog", { name: "Site menu" });
  await expect(sheet).toBeVisible();
  expect(await page.evaluate(() => document.body.style.overflow)).toBe("hidden");
  await sheet.getByRole("button", { name: "Products" }).click();
  await sheet.getByRole("link", { name: "WhatsApp Ordering" }).click();
  await expect(page).toHaveURL(/\/products\/whatsapp-ordering$/);
  await expect(page.getByRole("dialog", { name: "Site menu" })).toHaveCount(0);

  await page.getByRole("button", { name: "Open menu" }).click();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog", { name: "Site menu" })).toHaveCount(0);
});

for (const route of ["/", "/products/whatsapp-ordering", "/products/kiosk"]) {
  test(`${route} fits a 390px screen with comfortable tap targets`, async ({ page }) => {
    await page.goto(route);
    expect(await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)).toBeLessThanOrEqual(0);
    const smallTargets = await page.evaluate(
      () =>
        [...document.querySelectorAll<HTMLElement>("header a, header button, main a.btn, main button")]
          .filter((e) => e.offsetParent)
          .filter((e) => {
            const r = e.getBoundingClientRect();
            return r.width > 0 && r.height < 40;
          }).length
    );
    expect(smallTargets).toBe(0);
  });
}
