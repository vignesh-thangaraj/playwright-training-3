import { expect } from '@playwright/test';
import { test } from '../fixtures';
let sharedVariable: string;

test.describe('auth tests', () =>{

test('logged as a user already', async ({page}) =>{
   global.mynewVariable = 'my-global-shared-content';
   sharedVariable = 'my-shared-content';
   expect(page.locator('[href="/logout"]')).toBeEnabled()
})

test('logged as a user already --- 1', async ({page}) =>{
   sharedVariable;
   expect(page.locator('[href="/logout"]')).toBeEnabled()
})

})