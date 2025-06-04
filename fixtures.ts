import { test as base, TestInfo } from '@playwright/test';
import { HomePage } from '../playwright-training-3/POM/HomePage';
import { SearchPage } from '../playwright-training-3/POM/SearchPage';

export const test = base.extend<{ homePage: HomePage, searchPage: SearchPage}>({
    page: async ({ baseURL, page },use ) => {
        await page.goto(baseURL || '');
        // login
        await use(page);
    },
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
      },
    searchPage: async ({ page }, use) => {
        const searchPage = new SearchPage(page);
        await use(searchPage);
    },
});