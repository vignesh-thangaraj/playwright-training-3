import { expect, Locator, Page } from "@playwright/test";
import { SearchPage } from "./SearchPage";


export class HomePage {

    private page: Page;
    private searchTextbox: Locator;
    private sideNavTitle: Locator;
    private searchKeyword: string = 'laptops';

    constructor(page: Page){
        this.page = page;
        this.searchTextbox = page.getByPlaceholder('Search for Products, Brands and More')
        this.sideNavTitle = page.locator('[title="Dropdown with more help links"]')
    }

    selectTitle = async () =>{
        await this.sideNavTitle.hover()
        return this;
    }

    searchProduct = async () => {
        await this.searchTextbox.fill('Mobiles');
        await this.searchTextbox.press('Enter');
        let titleTextContent = await this.page.title()
        expect(titleTextContent.toLowerCase()).not.toContain(this.searchKeyword)
        return new SearchPage(this.page);
    }

    
    

    




}