import {expect, test} from "@playwright/test";
import { NavigationBar } from "../pages/navigationBar";
import { ContactPage } from "../pages/contactPage";


test.describe('Test Case: Module Contact', () => {
    let contactPage: ContactPage;
    let navigationBar: NavigationBar;

    test.beforeEach(async ({ page }) => {
        contactPage = new ContactPage(page);
        navigationBar = new NavigationBar(page);
        await page.goto('https://higo.id/');
        await navigationBar.navigateToHubungiHigo()
        await page.waitForURL('https://higo.id/contact-us');
      });
    
      test('User ingin contact Higo', async () => {
        await contactPage.contactHigoWith("User Testing 12wH"
        , "user.testing@exp.com","08123456123", "PT. Exp", "TestingQA12wH"
        , "Integrated Digital Agency");
        
      }); 
})