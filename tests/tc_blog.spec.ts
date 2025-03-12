import {expect, test} from "@playwright/test";
import { NavigationBar } from "../pages/navigationBar";
import { BlogPage } from "../pages/blogPage";


test.describe('Test Case: Module Blog', () => {
    let blogPage : BlogPage;
    let navigationBar: NavigationBar;

    test.beforeEach(async ({ page }) => {
        blogPage = new BlogPage(page);

        await page.goto('https://blog.higo.id/');
      });
    
      test('User mencari artikel dengan search bar', async () => {
        await blogPage.searchArtikel("Perkembangan");
      }); 
})