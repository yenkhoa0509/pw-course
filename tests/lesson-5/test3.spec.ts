import { test, expect } from '@playwright/test';

test('test3.spec.ts', async ({ page }) => {

    await test.step("Todo Page", async () => {
        await page.goto("https://material.playwrightvn.com/");
        await page.getByText("Bài học 3: Todo page").click();
    });

    await test.step("Thêm mới 100 todo item với nội dung 'Todo <i>'", async () => {
        for (let i = 1; i <= 100; i++) {
            await page.locator("//*[@id='new-task']").fill(`Todo ${i}`);
            await page.locator("//*[@id='add-task']").click();
        }
    });

    await test.step("Xóa các todo có số lẻ", async () => {
        page.on('dialog', async (dialog) => {
            await dialog.accept();
        });
        for (let i = 1; i <= 100; i += 2) {
            await page.locator(`//*[@id="task-list"]/li[.//text()[normalize-space()="Todo ${i}"]]//button[normalize-space()="Delete"]`).click();
        }
    });
    await page.pause();
});