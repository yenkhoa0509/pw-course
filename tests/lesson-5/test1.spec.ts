import { test, expect } from '@playwright/test';

test('test1.spec.ts', async ({ page }) => {

    await test.step("Register Page", async () => {
        await page.goto("https://material.playwrightvn.com/");
        await page.getByText("Bài học 1: Register Page (có đủ các element)").click();
    });

    await test.step("Nhập username và email", async () => {
        await page.locator("//*[@id='username']").fill("On Nguyen Yen Khoa");
        await page.locator("//*[@id='email']").fill("yenkhoa0509@gmail.com");
    });

    await test.step("Chọn giới tính và sở thích", async () => {
        await page.locator("//*[@id='female']").check();
        await page.locator("//*[@id='cooking']").check();
    });

    await test.step("Chọn quốc gia và ngày sinh", async () => {
        await page.locator("//*[@id='country']").selectOption("Canada");
        await page.locator("//*[@id='dob']").fill("1999-09-05");
    });

    await test.step("Upload file", async () => {
        await page.locator('//*[@id="profile"]').setInputFiles('tests/lesson-5/test-data/image.txt');
    });

    await test.step("Biography", async () => {
        await page.locator("//*[@id='bio']").fill("Hello");
    });

    await test.step("Rate Us", async () => {
        await page.locator("//*[@id='rating']").evaluate((el) => {
            el.value = 10;
        });
    });

    await test.step("Click Register", async () => {
        await page.locator("//*[@id='registrationForm']/div[16]/button").click();
    });
    await page.pause();

});
