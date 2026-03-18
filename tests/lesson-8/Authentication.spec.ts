import { test, expect } from '@playwright/test';

test.describe('AUTH - Authentication', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://pw-practice-dev.playwrightvn.com/wp-admin');
    });

    test('@AUTH_001: Login fail', async ({ page }) => {
        await page.fill("//input[@id='user_login']", "k18-yen-khoa");
        await page.fill("//input[@id='user_pass']", "yenkhoa");
        await page.click("//input[@id='wp-submit']");

        const errorMsg = page.locator('#login_error');
        await expect(errorMsg).toBeVisible();
        await expect(errorMsg).toContainText('Error: The username k18-yen-khoa is not registered on this site. If you are unsure of your username, try your email address instead');
    });

    test('@AUTH_002: Login success', async ({ page }) => {
        await page.fill("//input[@id='user_login']", 'k16-yen-khoa');
        await page.fill("//input[@id='user_pass']", 'Sb$3tPBF$nZvjyU8!vE297c5');
        await page.click("//input[@id='wp-submit']");

        await expect(page).toHaveURL(/.*\/wp-admin/);
    });
});
