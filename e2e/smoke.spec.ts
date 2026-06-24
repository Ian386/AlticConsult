import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Critical paths", () => {
  test("home renders hero + primary CTA", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByRole("heading", { level: 1, name: /Tax, Accounting/i }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: /Book a Consultation/i }).first(),
    ).toBeVisible();
  });

  test("primary nav links resolve (no 404s)", async ({ page }) => {
    for (const path of ["/about", "/services", "/insights", "/contact"]) {
      const res = await page.goto(path);
      expect(res?.status(), `GET ${path}`).toBeLessThan(400);
    }
  });

  test("home page has no critical accessibility violations", async ({ page }) => {
    await page.goto("/");
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag22aa"])
      .analyze();
    expect(results.violations).toEqual([]);
  });
});
