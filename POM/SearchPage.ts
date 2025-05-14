import { Page } from "@playwright/test";

export class SearchPage {

    private page: Page;

    constructor(page: Page){
        this.page = page;
    }

    selectProduct = async () => {
        await this.page.locator('[data-id="COMH2F22XWP7DQFM"]').click()
    }

    
    

    




}