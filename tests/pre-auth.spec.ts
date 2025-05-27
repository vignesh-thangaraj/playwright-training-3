import { expect } from '@playwright/test';
import { test } from '../fixtures';
// import { test } from '@playwright/test'

test.describe('auth tests', () =>{

test.only('logged as a user already', async ({page}) =>{
   expect(page.locator('[href="/logout"]')).toBeEnabled()
})

test('logged as a user already --- 1', async ({page}) =>{
   expect(page.locator('[href="/logout"]')).toBeEnabled()
})

})