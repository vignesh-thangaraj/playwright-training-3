import { expect } from '@playwright/test';
import { test } from '../fixtures';
// import { test } from '@playwright/test'

test.describe('wait for request tests', () =>{

    test('waiting for comments api to occur', async ({page}) =>{
        let commentRequest = page.waitForRequest('**/comments')
        await page.locator('[href="/posts/1/comments"]').click()
        let response = await commentRequest;
        let reponseResolved = (await response.response())?.url()
        console.log("Response ======>",reponseResolved)
    })
})
