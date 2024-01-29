import { When, Then } from "@cucumber/cucumber";
import { chromium, Browser, Page, expect } from "@playwright/test";
import { pageFixture } from "../../hooks/pageFixtures";

const articleInfo = "Playwright Testing" + Math.random();

When("I click on New Post button", async function () {
  await pageFixture.page.locator('a[href="#editor"]').click();
});

When("I fill out all the required fields", async function () {
  await pageFixture.page
    .locator('input[placeholder="Article Title"]')
    .pressSequentially(articleInfo);
  await pageFixture.page
    .locator('input[placeholder="What\'s this article about?"]')
    .pressSequentially(articleInfo);
  await pageFixture.page
    .locator('textarea[placeholder="Write your article (in markdown)"]')
    .pressSequentially(articleInfo);
  await pageFixture.page
    .locator('input[placeholder="Enter tags"]')
    .pressSequentially(articleInfo);
});

When("I publish the article", async function () {
  await pageFixture.page.locator('button:has-text("Publish Article")').click();
});

Then("I should see article posted", async function () {
  await expect(
    pageFixture.page.locator('div[class="container"] h1')
  ).toHaveText(articleInfo);
  await pageFixture.page.waitForTimeout(5000);
});
