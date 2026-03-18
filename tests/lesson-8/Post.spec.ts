import { test, expect } from '@playwright/test';

test.describe.serial('POST - Post', () => {
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

    test('@POST_TAG_001: Tag - add tag failed', async ({ page }) => {
        await test.step("Redirect menu Posts/Tag", async () => {
            await page.click("//div[@class='wp-menu-name' and text()='Posts']");
            await expect(page.locator("//div[text()='Posts']")).toBeVisible();
            await page.click("//div[@class='wp-menu-name' and text()='Posts']/ancestor::li//a[text()='Tags']");
            await expect(page).toHaveURL(/.*edit-tags\.php\?taxonomy=post_tag/);
        });
        await test.step("Click button Add New Tag", async () => {
            await page.click("//input[@id='submit' and @value='Add Tag']");
            await expect(page.locator('.notice.notice-error:visible')).toContainText('A name is required for this term.');
        });

        await test.step("Điền thông tin tag: name = lesson tag, click button Add New Tag", async () => {
            const name = "lesson tag"
            await page.fill("//input[@id='tag-name']", name);
            await page.click("//input[@id='submit' and @value='Add Tag']");
            await expect(page.locator('.notice.notice-error:visible')).toContainText('A term with the name provided already exists in this taxonomy.');
        });
    });

    test('@POST_TAG_002: Tag - add tag success', async ({ page }) => {
        const tagName = "tag yenkhoa"
        const tagName_02 = "tag yenkhoa 02"
        const tagSlug_02 = "tag-yenkhoa-02"

        await test.step("Redirect menu Posts/Tag", async () => {
            await page.click("//div[@class='wp-menu-name' and text()='Posts']");
            await expect(page.locator("//div[text()='Posts']")).toBeVisible();
            await page.click("//div[@class='wp-menu-name' and text()='Posts']/ancestor::li//a[text()='Tags']");
            await expect(page).toHaveURL(/.*edit-tags\.php\?taxonomy=post_tag/);
        });

        await test.step("Điền thông tin tag: name = tag yenkhoa", async () => {
            await page.fill("//input[@id='tag-name']", tagName);
            await page.click("//input[@id='submit' and @value='Add Tag']");
            await expect(page.locator('.notice-success')).toContainText('Tag added.');
            await expect(page.locator('.wp-list-table.widefat.fixed.striped.table-view-list.tags')).toContainText(tagName);
        });

        await test.step("Teardown: xoá các dữ liệu đã thêm vào", async () => {
            const row = page.locator('.wp-list-table.widefat.fixed.striped.table-view-list.tags tbody tr').filter({ hasText: tagName });
            await row.hover();
            await row.locator('text=Delete').click();
            await expect(page.locator('.wp-list-table')).not.toContainText(tagName, { timeout: 10000 });
        });

        await test.step("Điền thông tin tag: name = tag yenkhoa 02, slug = tag-yenkhoa-02", async () => {
            await page.fill("//input[@id='tag-name']", tagName_02);
            await page.fill("//input[@id='tag-slug']", tagSlug_02);
            await page.click("//input[@id='submit' and @value='Add Tag']");
            await expect(page.locator('.notice-success')).toContainText('Tag added.');
            const row = page.locator('.wp-list-table.widefat.fixed.striped.table-view-list.tags tbody tr').filter({ hasText: tagName_02 });
            await expect(row.locator('.column-name')).toContainText(tagName_02);
            await expect(row.locator('.column-slug')).toContainText(tagSlug_02);
        });
        await test.step("Teardown: xoá các dữ liệu đã thêm vào", async () => {
            const row = page.locator('.wp-list-table.widefat.fixed.striped.table-view-list.tags tbody tr').filter({ hasText: tagName_02 });
            await row.hover();
            await row.locator('text=Delete').click();
            await expect(page.locator('.wp-list-table')).not.toContainText(tagName_02, { timeout: 10000 });
        });
    });

    test('@POST_TAG_003: Tag - slug auto remove special character', async ({ page }) => {
        const tagName_03 = "tag yenkhoa 03"

        await test.step("Redirect menu Posts/Tag", async () => {
            await page.click("//div[@class='wp-menu-name' and text()='Posts']");
            await expect(page.locator("//div[text()='Posts']")).toBeVisible();
            await page.click("//div[@class='wp-menu-name' and text()='Posts']/ancestor::li//a[text()='Tags']");
            await expect(page).toHaveURL(/.*edit-tags\.php\?taxonomy=post_tag/);
        });

        await test.step("Điền thông tin tag: name = tag yenkhoa 03, slug = Đây là tag đặc biệt @100 $200", async () => {
            await page.fill("//input[@id='tag-name']", tagName_03);
            await page.fill("//input[@id='tag-slug']", "Đây là tag đặc biệt @100 $200");
            await page.click("//input[@id='submit' and @value='Add Tag']");
            await expect(page.locator('.notice.notice-success.is-dismissible')).toContainText('Tag added.');
            const row = page.locator('.wp-list-table.widefat.fixed.striped.table-view-list.tags tbody tr').filter({ hasText: tagName_03 });
            await expect(row.locator('.column-name')).toContainText(tagName_03);
            await expect(row.locator('.column-slug')).toContainText('day-la-tag-dac-biet-100-200');
        });
        await test.step("Teardown: xoá các dữ liệu đã thêm vào", async () => {
            const row = page.locator('.wp-list-table.widefat.fixed.striped.table-view-list.tags tbody tr').filter({ hasText: tagName_03 });
            await row.hover();
            await row.locator('text=Delete').click();
            await expect(page.locator('.wp-list-table')).not.toContainText(tagName_03, { timeout: 10000 });
        });

    });

    test('@POST_CATEGORY_001: Category - create category success', async ({ page }) => {
        const tagNameCate_03 = "category yenkhoa 03"
        const tagNameCate_04 = "category yenkhoa 04"

        await test.step("Redirect menu Posts/Category", async () => {
            await page.click("//div[@class='wp-menu-name' and text()='Posts']");
            await expect(page.locator("//div[text()='Posts']")).toBeVisible();
            await page.click("//div[@class='wp-menu-name' and text()='Posts']/ancestor::li//a[text()='Categories']");
            await expect(page).toHaveURL(/.*edit-tags\.php\?taxonomy=category/);
        });
        await test.step("Điền thông tin category: name = category yenkhoa 03, slug = Đây là category đặc biệt @100 $200", async () => {
            await page.fill("//input[@id='tag-name']", tagNameCate_03);
            await page.fill("//input[@id='tag-slug']", "Đây là category đặc biệt @100 $200");
            await page.click("//input[@id='submit' and @value='Add Category']");
            await expect(page.locator('.notice.notice-success.is-dismissible')).toContainText('Category added.');
            const row = page.locator('.wp-list-table.widefat.fixed.striped.table-view-list.tags tbody tr').filter({ hasText: tagNameCate_03 });
            await expect(row.locator('.column-name')).toContainText(tagNameCate_03);
            await expect(row.locator('.column-slug')).toContainText('day-la-category-dac-biet-100-200');
        });
        await test.step("Teardown: xoá các dữ liệu đã thêm vào", async () => {
            const row = page.locator('.wp-list-table.widefat.fixed.striped.table-view-list.tags tbody tr').filter({ hasText: tagNameCate_03 });
            await row.hover();
            await row.locator('text=Delete').click();
            await expect(page.locator('.wp-list-table')).not.toContainText(tagNameCate_03, { timeout: 10000 });
        });

        await test.step("Điền thông tin category: name = category yenkhoa 04, parent = K6 class", async () => {
            await page.fill("//input[@id='tag-name']", tagNameCate_04);
            await page.locator("//select[@id='parent']").selectOption("K6 class");
            await page.click("//input[@id='submit' and @value='Add Category']");
            await expect(page.locator('.notice.notice-success.is-dismissible')).toContainText('Category added.');
            const row = page.locator('.wp-list-table.widefat.fixed.striped.table-view-list.tags tbody tr').filter({ hasText: tagNameCate_04 });
            await expect(row.locator('.column-name')).toContainText(tagNameCate_04);
        });
        await test.step("Teardown: xoá các dữ liệu đã thêm vào", async () => {
            const row = page.locator('.wp-list-table.widefat.fixed.striped.table-view-list.tags tbody tr').filter({ hasText: tagNameCate_04 });
            await row.hover();
            await row.locator('text=Delete').click();
            await expect(page.locator('.wp-list-table')).not.toContainText(tagNameCate_04, { timeout: 10000 });
        });
    });
});