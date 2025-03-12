import {Page, expect} from '@playwright/test';

export class NavigationBar {
    private page: Page;
    private higoBtn = ("xpath=//a[@aria-label='HIGO']//*[name()='svg']");
    private tentantHigoBtn = ("xpath=//label[@class='peer-checked:hidden']//span[contains(text(),'Tentang HIGO')]");
    private layananHigoBtn = ("xpath=//label[@class='peer-checked:hidden']//span[contains(text(),'Layanan HIGO')]");
    private studiKasusBtn = ("xpath=//label[@class='peer-checked:hidden']//span[contains(text(),'Studi Kasus')]");
    private blogBtn = ("xpath=//label[@class='peer-checked:hidden']//span[contains(text(),'Blog')]");
    private digitalReportsBtn = ("xpath=//label[@class='peer-checked:hidden']//span[contains(text(),'Digital Reports')]");
    private hubungiHigoBtn = ("//label[@class='peer-checked:hidden']//span[contains(text(),'Hubungi HIGO')]");
    private languageSelectorBtn = ("xpath=//li[@class='group/navigation-item relative grid font-anek-malayalam underline-offset-8 @4xl:decoration-blue-300']");
    private englishBtn = ("xpath=//label[@class='peer-checked:hidden']//span[contains(text(),'English')]");
    private indonesianBtn = ("xpath=//label[@class='peer-checked:hidden']//span[contains(text(),'Bahasa Indonesia')]");
 
    constructor(page:Page) {
        this.page = page;
    }

    async  navigateToHome(){
        await this.page.locator(this.higoBtn).click();
    }
    async navigateToTentangHigo(){
        await this.page.locator(this.tentantHigoBtn).click();
    }
    async navigateToLayananHigo(){
        await this.page.locator(this.layananHigoBtn).click();
    }
    async navigateToStudiKasus(){
        await this.page.locator(this.studiKasusBtn).click();
    }
    async navigateToBlog(){
        await this.page.locator(this.blogBtn).click();
    }
    async navigateToDigitalReport(){
        await this.page.locator(this.digitalReportsBtn).click();
    }
    async navigateToHubungiHigo(){
        await this.page.locator(this.hubungiHigoBtn).click();
    }
    async selectLanguage (language: String = "Indonesian" ){
        await this.page.locator(this.languageSelectorBtn).click();
        
        if (language === "Indonesian") {
            await this.page.locator(this.indonesianBtn).click();
        } else if (language === "English") {
            await this.page.locator(this.englishBtn).click();
        } else {
            throw new Error(`Invalid language: ${language}. Choose 'Indonesian' or 'English'.`);
        }
    }
    async verifyNavigateToURL (expectedURL : string){
        await expect(this.page).toHaveURL(expectedURL);
    }
}