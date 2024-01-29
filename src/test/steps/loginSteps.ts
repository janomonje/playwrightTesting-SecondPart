import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Browser, Page, expect } from "@playwright/test";
import { pageFixture } from "../../hooks/pageFixtures";

Given("I am on the conduit login page", async function () {
  await pageFixture.page.goto("https://react-redux.realworld.io/");
  await pageFixture.page.locator('a:has-text("Sign in")').click();
});

When("I login with valid credentials", async function () {
  await pageFixture.page
    .locator('input[placeholder="Email"]')
    .pressSequentially("playwrightdemo@gmail.com");
  await pageFixture.page
    .locator('input[placeholder="Password"]')
    .pressSequentially("playwrightdemo");
  await pageFixture.page.locator('button[type="submit"]').click();
  await pageFixture.page.waitForTimeout(1000);
});

When("I click on the settings button", async function () {
  await pageFixture.page.locator('a[href="#settings"]').click();
});

When("I click on the logout button", async function () {
  await pageFixture.page.locator('[class="btn btn-outline-danger"]').click();
});

Then("I route back to the login page", async function () {
  await expect(pageFixture.page.locator('a:has-text("Sign in")')).toBeVisible();
});
