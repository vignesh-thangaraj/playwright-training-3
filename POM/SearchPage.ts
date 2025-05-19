import { expect, Locator, Page } from "@playwright/test";

export class SearchPage {

    private page: Page;
    private selectProductLink: Locator;
    private searchResultText: Locator;

    constructor(page: Page){
        this.page = page;
        this.selectProductLink = this.page.locator('[data-id]');
        this.searchResultText = this.page.getByText('Showing 1 – 24 of ')
    }

    selectProduct = async () => {
        await expect(this.searchResultText).toBeAttached()
        await this.selectProductLink.first().click()
    }
}