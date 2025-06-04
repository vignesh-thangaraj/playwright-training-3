import { test } from '../fixtures';
// import { test } from '@playwright/test'

test.describe('flipkart tests', () =>{

test('search a product - randomtext', async ({homePage}) =>{
    let shared_content = global.mynewVariable;
    const searchPageObject = await homePage.searchProduct()
    await searchPageObject.selectProduct();
})

test('order a product', async ({homePage, searchPage}) =>{
    await homePage.searchProduct()
    await searchPage.selectProduct();
    // Buy now
    // place order
})

})