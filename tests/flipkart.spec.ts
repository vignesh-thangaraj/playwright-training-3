import { test, type Page } from '@playwright/test';
import { HomePage } from '../POM/homepage';

test.describe('flipkart tests', () =>{

    test.beforeEach('launch URL', async ({page}) =>{
        await page.goto('https://www.flipkart.com/')
    })

test('search a product', async ({page}) =>{
    const homePageObject = new HomePage(page)
    const searchPageObject = await homePageObject.searchProduct()
    await searchPageObject.selectProduct();
    await page.pause()
})

})