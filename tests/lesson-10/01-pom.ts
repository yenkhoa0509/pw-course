import { Page, Locator, expect } from '@playwright/test';

export class MaterialBasePage {
    page: Page;
    urlMaterialPage: string;
    xpathRegisterPage: string;
    xpathProductPage: string;
    cssTodoPage: string;
    personalNote: Locator;

    constructor(page: Page) {
        this.page = page;
        this.urlMaterialPage = 'https://material.playwrightvn.com/';
        this.xpathRegisterPage = '//a[@href="01-xpath-register-page.html"]';
        this.xpathProductPage = '//a[@href="02-xpath-product-page.html"]';
        this.cssTodoPage = 'a[href="03-xpath-todo-list.html"]';
        this.personalNote = page.locator('//a[@href="04-xpath-personal-notes.html"]');
    }

    async openMaterialPage() {
        await this.page.goto(this.urlMaterialPage);
    }

    async gotoPage(pageName: string) {
        switch (pageName) {
            case 'Bài học 1: Register Page':
                await this.page.click(this.xpathRegisterPage);
                break;
            case 'Bài học 2: Product page':
                await this.page.click(this.xpathProductPage);
                break;
            case 'Bài học 3: Todo page':
                await this.page.click(this.cssTodoPage);
                break;
            case 'Bài học 4: Personal notes':
                await this.personalNote.click();
                break;
            default:
                throw new Error(`Page name "${pageName}" is not defined`);
        }

    }
}

export class RegisterPage extends MaterialBasePage {
    xpathUsername: string;
    xpathEmail: string;
    xpathGenderMale: string;
    xpathGenderFemale: string;
    xpathBtnRegister: string;

    constructor(page: Page) {
        super(page);
        this.xpathUsername = '//input[@id="username"]';
        this.xpathEmail = '//input[@id="email"]';
        this.xpathGenderMale = '//input[@id="male"]';
        this.xpathGenderFemale = '//input[@id="female"]';
        this.xpathBtnRegister = '//button[@type="submit"]'
    }

    async fillUsername(username: string) {
        await this.page.locator(this.xpathUsername).fill(username);
    }

    async fillEmail(email: string) {
        await this.page.locator(this.xpathEmail).fill(email);
    }

    async checkGender(gender: string) {
        let genderSelector: string;
        if (gender === 'male') {
            genderSelector = this.xpathGenderMale;
        } else {
            genderSelector = this.xpathGenderFemale;
        }
        await this.page.locator(genderSelector).check();
    }
    async clickBtnRegister() {
        await this.page.click(this.xpathBtnRegister)
    }
}

export class ProductPage extends MaterialBasePage {
    xpathProduct1Btn: string;
    xpathProduct2Btn: string;
    xpathProduct3Btn: string;
    xpathCartTotal: string;

    constructor(page: Page) {
        super(page);
        this.xpathProduct1Btn = '//button[@class="add-to-cart" and @data-product-id="1"]';
        this.xpathProduct2Btn = '//button[@class="add-to-cart" and @data-product-id="2"]';
        this.xpathProduct3Btn = '//button[@class="add-to-cart" and @data-product-id="3"]';
        this.xpathCartTotal = '//td[@class="total-price"]';
    }

    async addProduct1(quantity: number) {
        for (let i = 0; i < quantity; i++) {
            await this.page.locator(this.xpathProduct1Btn).click();
        }
    }

    async addProduct2(quantity: number) {
        for (let i = 0; i < quantity; i++) {
            await this.page.locator(this.xpathProduct2Btn).click();
        }
    }

    async addProduct3(quantity: number) {
        for (let i = 0; i < quantity; i++) {
            await this.page.locator(this.xpathProduct3Btn).click();
        }
    }

    async verifyTotalPrice(expectedPrice: string) {
        await expect(this.page.locator(this.xpathCartTotal)).toHaveText(expectedPrice);
    }
}

export class TodoPage extends MaterialBasePage {
    xpathInputNewTask: string;
    xpathBtnAddTask: string;

    constructor(page: Page) {
        super(page);
        this.xpathInputNewTask = '//*[@id="new-task"]';
        this.xpathBtnAddTask = '//*[@id="add-task"]';
    }

    async addMultipleTodos(count: number) {
        for (let i = 1; i <= count; i++) {
            await this.page.locator(this.xpathInputNewTask).fill(`Todo ${i}`);
            await this.page.locator(this.xpathBtnAddTask).click();
        }
    }

    async deleteOddTodos(count: number) {
        this.page.on('dialog', async (dialog) => {
            await dialog.accept();
        });
        for (let i = 1; i <= count; i += 2) {
            await this.page.locator(
                `//*[@id="task-list"]/li[.//text()[normalize-space()="Todo ${i}"]]//button[normalize-space()="Delete"]`
            ).click();
        }
    }

    async verifyTodoInViewport(todoNumber: number) {
        const todoLocator = this.page.locator(`//*[@id="task-list"]/li[.//text()[normalize-space()="Todo ${todoNumber}"]]`);
        await expect(todoLocator).toBeVisible();
        await expect(todoLocator).toBeInViewport();
    }

    async verifyTodoNotInDOM(todoNumber: number) {
        const todoLocator = this.page.locator(`//*[@id="task-list"]/li[.//text()[normalize-space()="Todo ${todoNumber}"]]`);
        await expect(todoLocator).toHaveCount(0);
    }
}

export class PersonalNotesPage extends MaterialBasePage {
    xpathTitleInput: string;
    xpathContentInput: string;
    xpathAddNoteBtn: string;
    xpathSearchInput: string;

    constructor(page: Page) {
        super(page);
        this.xpathTitleInput = '//*[@id="note-title"]';
        this.xpathContentInput = '//*[@id="note-content"]';
        this.xpathAddNoteBtn = '//*[@id="add-note"]';
        this.xpathSearchInput = '//*[@id="search"]';
    }

    async addNotes(notes: { title: string; content: string }[]) {
        for (const note of notes) {
            await this.page.locator(this.xpathTitleInput).fill(note.title);
            await this.page.locator(this.xpathContentInput).fill(note.content);
            await this.page.locator(this.xpathAddNoteBtn).click();
        }
    }

    async searchNotes(keyword: string) {
        await this.page.locator(this.xpathSearchInput).fill(keyword);
    }

    async verifyAllSearchResultsContain(keyword: string) {
        const searchResults = this.page.locator('//*[@id="notes-list"]/li');
        const count = await searchResults.count();
        for (let i = 0; i < count; i++) {
            await expect(searchResults.nth(i)).toContainText(keyword);
        }
    }

}
