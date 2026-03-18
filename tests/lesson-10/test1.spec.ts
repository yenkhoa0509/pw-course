import { test, expect } from '@playwright/test';
import { RegisterPage } from './01-pom';

test('Register Page', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    const username = 'yenkhoa';
    const email = 'yenkhoa0509@gmail.com';
    const gender = 'female';

    await test.step('Mở Register Page', async () => {
        await registerPage.openMaterialPage();
        await registerPage.gotoPage('Bài học 1: Register Page');
    });

    await test.step('Điền thông tin Username, email, giới tính', async () => {
        await registerPage.fillUsername(username);
        await registerPage.fillEmail(email);
        await registerPage.checkGender(gender);
    });

    await test.step('Click Register', async () => {
        await registerPage.clickBtnRegister();
    });

    await test.step('Kiểm tra dữ liệu trong bảng', async () => {
        const row = page.locator('//table//tbody//tr[last()]');
        const usernameCell = row.locator('xpath=.//td[2]');
        const emailCell = row.locator('xpath=.//td[3]');
        const infoCell = row.locator('xpath=.//td[4]');

        await expect(usernameCell).toHaveText(username);
        await expect(emailCell).toHaveText(email);
        await expect(infoCell).toContainText(`Gender: ${gender}`);
    });

    await page.pause();
});
