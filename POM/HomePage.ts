import { Page } from "@playwright/test";
import { SearchPage } from "./SearchPage";


export class HomePage {

    private page: Page;
    private searchKeyword: string = 'laptops';

    constructor(page: Page){
        this.page = page;
    }

    selectTitle = async () =>{
        await this.page.locator('[title="Dropdown with more help links"]').hover()
        return this;
    }

    searchProduct = async () => {
        await this.page.getByPlaceholder('Search for Products, Brands and More').fill(this.searchKeyword);
        await this.page.getByPlaceholder('Search for Products, Brands and More').press('Enter');
        return new SearchPage(this.page);
    }

    
    

    




}