import {Page, expect} from '@playwright/test';

export class BlogPage {
    private page: Page;
    private cariArtikel = "xpath=//input[@placeholder='Cari Artikel']";
    private resultsContainer = "xpath=//div[@class='@container/list']//ul";
 
    constructor(page:Page) {
        this.page = page;
    }

    async  searchArtikel (search : string){
        await this.page.locator(this.cariArtikel).fill(search);
        await this.page.locator(this.cariArtikel).press('Enter');
        await expect (this.page.locator(this.resultsContainer)).toContainText(search);
    }
}