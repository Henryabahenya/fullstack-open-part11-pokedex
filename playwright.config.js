const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./e2e-tests",
  timeout: 30000,
  use: {
    baseURL: "http://localhost:5001",
    headless: true,
    trace: "on-first-retry",
  },
  webServer: {
    command: "npm run start-prod",
    url: "http://localhost:5001",
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});
