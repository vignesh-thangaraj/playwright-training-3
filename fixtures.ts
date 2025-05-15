import { test as base } from '@playwright/test';
import { HomePage } from './POM/homepage';
import { SearchPage } from './POM/SearchPage';

export const test = base.extend<{ homePage: HomePage, searchPage: SearchPage}>({
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
      },
    searchPage: async ({ page }, use) => {
        const searchPage = new SearchPage(page);
        await use(searchPage);
    },
});