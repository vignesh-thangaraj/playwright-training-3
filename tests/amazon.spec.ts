import { test } from '../fixtures';
// import { test } from '@playwright/test'

test.describe('flipkart tests', () =>{

test('search a product - randomtext', async ({homePage}) =>{
    const searchPageObject = await homePage.searchProduct()
    await searchPageObject.selectProduct();
})

test('order a product', async ({homePage}) =>{
    const searchPageObject = await homePage.searchProduct()
    await searchPageObject.selectProduct();
    // Buy now
    // place order
})

})