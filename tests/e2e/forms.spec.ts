import { expect, test } from "@playwright/test";

// The site has no form backend: the form validates, then hands the request to
// the visitor's WhatsApp or email app. These tests pin that honest behaviour.

test.describe("demo request form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/book-a-demo");
  });

  test("an empty submit shows a focused error summary and marks invalid fields", async ({ page }) => {
    await page.getByRole("button", { name: "Continue" }).click();
    const summary = page.getByRole("alert").filter({ hasText: "Please check" });
    await expect(summary).toBeVisible();
    await expect(summary).toBeFocused();
    await expect(page.locator('[aria-invalid="true"]')).toHaveCount(4);
  });

  test("rejects a short phone number and a malformed email", async ({ page }) => {
    await page.getByLabel("Your name").fill("Rakesh Shah");
    await page.getByLabel("Restaurant name").fill("Test Thali House");
    await page.getByLabel("City").fill("Surat");
    await page.getByLabel("Phone or WhatsApp").fill("98765");
    await page.getByLabel("Email").fill("not-an-email");
    await page.getByRole("button", { name: "Continue" }).click();
    await expect(page.getByText("Enter a 10-digit mobile number")).not.toHaveCount(0);
    await expect(page.getByText("Enter a valid email address")).not.toHaveCount(0);
  });

  test("a valid request hands off to WhatsApp and email without claiming it was sent", async ({ page }) => {
    await page.getByLabel("Your name").fill("Rakesh Shah");
    await page.getByLabel("Restaurant name").fill("Test Thali House");
    await page.getByLabel("Phone or WhatsApp").fill("+91 98765 43210");
    await page.getByLabel("City").fill("Surat");
    await page.getByRole("button", { name: "Continue" }).click();

    const whatsapp = page.getByRole("link", { name: "Send on WhatsApp" });
    const href = decodeURIComponent((await whatsapp.getAttribute("href")) ?? "");
    expect(href.startsWith("https://wa.me/918140267475?text=")).toBe(true);
    expect(href).toContain("Test Thali House");
    expect(href).toContain("Surat");
    await expect(page.getByRole("link", { name: "Send by email" })).toHaveAttribute("href", /^mailto:kelviontech@gmail\.com\?subject=Demo%20request/);
    await expect(page.getByText("Nothing has been sent yet")).toBeVisible();
    await expect(page.getByText(/request received|has been received|sent successfully/i)).toHaveCount(0);

    await page.getByRole("button", { name: "Edit details" }).click();
    await expect(page.getByLabel("Restaurant name")).toHaveValue("Test Thali House");
  });
});

test("the contact page uses the same form with a question field", async ({ page }) => {
  await page.goto("/contact");
  await expect(page.getByLabel("Your question")).toBeVisible();
});
