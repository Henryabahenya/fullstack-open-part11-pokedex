const { test, expect } = require("@playwright/test");

test("front page shows ivysaur and Nintendo disclaimer", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByText("ivysaur")).toBeVisible();
  await expect(
    page.getByText(
      /Pokémon and Pokémon character names are trademarks of Nintendo\./i,
    ),
  ).toBeVisible();
});

test("can navigate from list to a pokemon page and see chlorophyll", async ({
  page,
}) => {
  await page.goto("/");

  await page.getByRole("link", { name: "ivysaur" }).click();

  await expect(page.getByText("chlorophyll")).toBeVisible();
});
