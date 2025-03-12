import {expect, test} from "@playwright/test";
import { NavigationBar } from "../pages/navigationBar";
import { AboutPage } from "../pages/aboutPage";


test.describe('Test Case: Module About', () => {
    let aboutPage: AboutPage;
    let navigationBar: NavigationBar;

    test.beforeEach(async ({ page }) => {
        aboutPage = new AboutPage(page);
        navigationBar = new NavigationBar(page);
        await page.goto('https://higo.id/');
        await navigationBar.navigateToTentangHigo();
        await page.waitForURL('https://higo.id/about-us');
        
      });
    
      test('User memilih setelan bahasa di module about', async () => {
        await navigationBar.selectLanguage("English");
        await aboutPage.verifyAboutPageBanner("About HIGO");
      });

      test('User klik tombol Jadi Bagian Dari Higo', async () => {
        await aboutPage.jadiBagianDariHigo();
        await navigationBar.verifyNavigateToURL('https://www.linkedin.com/company/pt-higo-fitur-indonesia');
      });

})