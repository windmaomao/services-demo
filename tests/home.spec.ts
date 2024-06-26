import { test, expect } from "@playwright/test";

test("should navigate to the home page", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.click("text=Started");
  await expect(page).toHaveURL("http://localhost:3000/services");
});
