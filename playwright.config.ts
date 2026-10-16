import { defineConfig, devices } from "@playwright/test";

// End-to-end and content tests.
//
//   npm run build && npm test
//
// The suite starts `next start` on PORT unless a server is already running
// there. Set PLAYWRIGHT_CHROMIUM_PATH to use an already-installed Chromium.
const PORT = Number(process.env.PORT ?? 3040);
const BASE_URL = process.env.BASE_URL ?? `http://localhost:${PORT}`;

export default defineConfig({
  testDir: "./tests",
  // Kept apart from scripts/website-check.cjs output, which also lives in
  // test-results/, because Playwright empties its output folder on each run.
  outputDir: "./test-results/playwright",
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? "github" : "list",
  use: {
    baseURL: BASE_URL,
    trace: "retain-on-failure",
    // Scroll-reveal styles are disabled under reduced motion, so content is
    // fully opaque when accessibility checks measure colour contrast.
    reducedMotion: "reduce",
    launchOptions: process.env.PLAYWRIGHT_CHROMIUM_PATH ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM_PATH } : {},
  },
  projects: [
    { name: "content", testMatch: /content\.spec\.ts/ },
    { name: "desktop", testMatch: /e2e\/.*\.spec\.ts/, testIgnore: /mobile\.spec\.ts/, use: { ...devices["Desktop Chrome"], viewport: { width: 1440, height: 900 } } },
    { name: "mobile", testMatch: /e2e\/mobile\.spec\.ts/, use: { ...devices["Pixel 7"], viewport: { width: 390, height: 844 } } },
  ],
  webServer: {
    command: `npx next start -p ${PORT}`,
    url: BASE_URL,
    reuseExistingServer: true,
    timeout: 120_000,
  },
});
