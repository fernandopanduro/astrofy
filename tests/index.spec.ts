import { test, expect } from "@playwright/test";

const BASE_URL = "http://localhost:4321/";

test("meta is correct", async ({ page }) => {
  await page.goto(BASE_URL);

  await expect(page).toHaveTitle(
    "Portfolio | Personal Portfolio Fernando Panduro"
  );
});

test("should titles page", async ({ page }) => {
  await page.goto(BASE_URL);

  /* Titles */
  await expect(
    page.getByRole("heading", { name: "I'm Fernando Panduro" })
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Software Engineer and Entrepreneur" })
  ).toBeVisible();

  /* Subtitles */
  await expect(
    page.getByRole("heading", { name: "Last projects" })
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "3D Projects" })
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Latest projects with AI" })
  ).toBeVisible();
});
