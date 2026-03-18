import { test, expect } from '@playwright/test';

test.describe('MEDIA - Media', () => {
    test.beforeEach(async ({ page }) => {
        page.on('dialog', async (dialog) => {
            console.log(`Dialog message: ${dialog.message()}`);
            await dialog.accept();
        });

        await page.context().clearCookies();
        await page.goto('https://pw-practice-dev.playwrightvn.com/wp-admin');
        await page.fill("//input[@id='user_login']", 'k16-yen-khoa');
        await page.fill("//input[@id='user_pass']", 'Sb$3tPBF$nZvjyU8!vE297c5');
        await page.click("//input[@id='wp-submit']");
        await expect(page).toHaveURL(/.*wp-admin/);
    });

    test('@MEDIA_FILES_001: Media - upload file success', async ({ page }) => {
        await test.step("Redirect menu Media/Library", async () => {
            await page.click("//div[@class='wp-menu-name' and text()='Media']");
            await expect(page.locator("//div[text()='Media']")).toBeVisible();
            await page.click("//div[@class='wp-menu-name' and text()='Media']/ancestor::li//a[text()='Library']");
            await expect(page).toHaveURL(/.*wp-admin\/upload\.php/);
        });

        await test.step("Thực hiện upload file", async () => {
            const filePath = "E:\\my-project\\k16-practice\\tests\\student-submission\\yenkhoa\\yenkhoa.txt";
            await page.click("//a[normalize-space()='Add Media File']");
            await page.setInputFiles("input[type='file']", filePath);
            await expect(page.locator("//div[@class='attachment-details']")).toContainText('yenkhoa.txt');
        });

        // await test.step("F5 trang", async () => {
        //     // await page.reload();
        // });

        await test.step(" Teardown: xoá các dữ liệu đã thêm vào", async () => {
            await page.reload();
            await page.click("//a[normalize-space()='Edit']");
            await page.click("//a[normalize-space()='Delete permanently']");
        });
    });
});