import { test } from '@playwright/test';
import { TodoPage } from './01-pom';

test('test3.spec.ts', async ({ page }) => {
    const todoPage = new TodoPage(page);

    await test.step("Mở Todo Page", async () => {
        await todoPage.openMaterialPage();
        await todoPage.gotoPage("Bài học 3: Todo page");
    });

    await test.step("Thêm 100 todo item", async () => {
        await todoPage.addMultipleTodos(100);
    });

    await test.step("Xóa các todo số lẻ", async () => {
        await todoPage.deleteOddTodos(100);
    });

    await test.step("Kiểm tra todo số 90 nằm trong viewport", async () => {
        await todoPage.verifyTodoInViewport(90);
    });

    await test.step("Kiểm tra todo số 21 không còn trong DOM", async () => {
        await todoPage.verifyTodoNotInDOM(21);
    });

    await page.pause();
});
