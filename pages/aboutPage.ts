import {Page, expect} from '@playwright/test';

export class AboutPage {
    private page: Page;
    private jadiBagianDariHigoBtn = "xpath=//span[@class='text-sm @3xl/page:text-lg']";
    private h1AboutID = "xpath=//h1[normalize-space()='Tentang HIGO']"; 
    private h1aboutEN = "xpath=//h1[normalize-space()='About HIGO']";
 
    constructor(page:Page) {
        this.page = page;
    }

    async  jadiBagianDariHigo(){
        await this.page.locator(this.jadiBagianDariHigoBtn).click();
    }

    async verifyAboutPageBanner (containText : string) {
        await expect (this.page.locator(this.h1aboutEN)).toContainText (containText)
    }
}