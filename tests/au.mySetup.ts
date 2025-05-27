import { test as setup } from '@playwright/test';
import path from 'path';

const authFile = path.join(__dirname, '../playwright/login.json');

setup('authenticate', async ({ page, baseURL }) => {
  // Perform authentication steps. Replace these actions with your own.
  await page.goto(baseURL || '');
  await page.locator('#username').fill('practice');
  await page.locator('#password').fill('SuperSecretPassword!');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.context().storageState({ path: authFile });
});
