import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/services");
});

test.describe("Services page", () => {
  test("should see the page", async ({ page }) => {
    await expect(page.locator("h1")).toContainText("Select a Service");
  });

  test("should see all service panels", async ({ page }) => {
    await expect(page.getByTestId("service-item")).toHaveCount(3);
    await expect(page.getByTestId("service-appointment")).toHaveCount(3);
  });

  test("should hide the service available by toggle", async ({ page }) => {
    await page.getByTestId("service-toggle").nth(0).click();
    await expect(page.getByTestId("service-appointment")).toHaveCount(0);
  });

  test("should open the service available by toggle", async ({ page }) => {
    await page.getByTestId("service-toggle").nth(1).click();
    await expect(page.getByTestId("service-appointment")).toHaveCount(6);
  });
});
