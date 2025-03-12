import {Page, expect} from '@playwright/test';

export class HomePage {
    private page: Page;
    private h1HigoHomePageID = "xpath=//h1[contains(text(),'Solusi Menyeluruh Pemasaran Digital dengan WiFi & ')]";
    private h1HigoHomePageEN = "xpath=//h1[contains(text(),'360 Marketing Digital Solution with WiFi & Custome')]";
    private wifiAdBtn = "xpath=//img[@alt='WiFi Advertising']";
    private higoSpotBtn = "xpath=//img[@alt='HIGOspot']";
    private idaBtn = "xpath=//img[@alt='Integrated Digital Agency']";
    private apaKataMerekaNextBtn = "xpath=//*[name()='path' and contains(@d,'m9 18 6-6-')]";
    
 
    constructor(page:Page) {
        this.page = page;
    }

    async  clickWifiAdBtn(){
        await this.page.locator(this.wifiAdBtn).click();
        
    }
    async clickHigoSpotBtn () {
        await this.page.locator(this.higoSpotBtn).click();
        
    }
    async clickIDABtn () {
        await this.page.locator(this.idaBtn).click();
        
    }
    async clickNextApaKataMereka (times: number = 1) {
        for (let i = 0; i < times; i++) {
            await this.page.locator(this.apaKataMerekaNextBtn).click();
        }
    }

    async verifyHomePageBanner (banner: string){
        const homePageBanner = await this.page.locator(this.h1HigoHomePageEN).textContent();
        expect (homePageBanner).toBe(banner);
    }
}