import { test, expect } from '@playwright/test';

test('test2.spec.ts', async ({ page }) => {

    await test.step("Product page", async () => {
        await page.goto("https://material.playwrightvn.com/");
        await page.getByText("Bài học 2: Product page").click();
    });

    await test.step("Add sản phẩm 1", async () => {
        await page.locator("//html/body/div[2]/div[1]/div[1]/div/button").click();
        await page.locator("//html/body/div[2]/div[1]/div[1]/div/button").click();
    });

    await test.step("Add sản phẩm 2", async () => {
        await page.locator("//html/body/div[2]/div[1]/div[2]/div/button").click();
        await page.locator("//html/body/div[2]/div[1]/div[2]/div/button").click();
        await page.locator("//html/body/div[2]/div[1]/div[2]/div/button").click();
    });

    await test.step("Add sản phẩm 3", async () => {
        await page.locator("//html/body/div[2]/div[1]/div[3]/div/button").click();
    });
    await page.pause();
})