import { Locator, Page } from "@playwright/test";

export class SearchPage {

    private page: Page;
    private selectProductLink: Locator;

    constructor(page: Page){
        this.page = page;
        this.selectProductLink = this.page.locator('[data-id]');
    }

    selectProduct = async () => {
        await this.selectProductLink.first().click()
    }
}