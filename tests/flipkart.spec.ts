import { test } from '../fixtures';
// import { test } from '@playwright/test'

test.describe('flipkart tests', () =>{

    test.beforeEach('launch URL', async ({page, baseURL}) =>{
        await page.goto(baseURL || '')
    })

test('search a product', async ({page, homePage}) =>{
    const searchPageObject = await homePage.searchProduct()
    await searchPageObject.selectProduct();
})

test('order a product', async ({page, homePage}) =>{
    const searchPageObject = await homePage.searchProduct()
    await searchPageObject.selectProduct();
    // Buy now
    // place order
})

})