import {  test } from '@playwright/test'

test('Intercept request ', async ({page, baseURL}) => {

    let endpoint = baseURL || ''

    await page.goto(endpoint)

    await page.route('**/3', async route => {
        console.log("URL ==========>",route.request().url())
        await route.fulfill({
            status: 500,
            body: ''
        });
      });
    await page.pause()
    await page.getByText('Add to cart').first().click()
    
})
