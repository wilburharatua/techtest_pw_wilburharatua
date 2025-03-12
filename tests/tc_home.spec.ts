import {expect, test} from "@playwright/test";
import { NavigationBar } from "../pages/navigationBar";
import { HomePage } from "../pages/homePage";


test.describe('Test Case: Module Home', () => {
    let homePage: HomePage;
    let navigationBar: NavigationBar;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        navigationBar = new NavigationBar(page);
        await page.goto('https://higo.id/');
      });
    
      test('User memilih setelan bahasa di module home', async () => {
        await navigationBar.selectLanguage("English");
        await homePage.verifyHomePageBanner("360 Marketing Digital Solution with WiFi & Customer Insight");
      });

      test('User ingin melihat Wifi Advertising', async () => {
        await homePage.clickWifiAdBtn();
        await navigationBar.verifyNavigateToURL('https://higo.id/wifi-advertising');
      });

      test('User ingin melihat Higo Spot', async () => {
        await homePage.clickHigoSpotBtn();
        await navigationBar.verifyNavigateToURL('https://higo.id/higospot');
      });

      test('User ingin melihat Integrated Digital Agency', async () => {
        await homePage.clickIDABtn();
        await navigationBar.verifyNavigateToURL('https://higo.id/integrated-digital-agency');
      });
})