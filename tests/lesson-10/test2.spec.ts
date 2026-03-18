import { test } from '@playwright/test';
import { ProductPage } from './01-pom';

test('test2.spec.ts', async ({ page }) => {
    const productPage = new ProductPage(page);

    await test.step("Mở Product Page", async () => {
        await productPage.openMaterialPage();
        await productPage.gotoPage('Bài học 2: Product page');
    });

    await test.step("Thêm sản phẩm", async () => {
        await productPage.addProduct1(2);
        await productPage.addProduct2(3);
        await productPage.addProduct3(1);
    });
    await test.step("Kiểm tra tổng tiền tại giỏ hàng", async () => {
        await productPage.verifyTotalPrice('$110.00');
    });
    await page.pause();
});