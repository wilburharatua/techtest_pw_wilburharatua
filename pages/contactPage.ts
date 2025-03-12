import {Page, expect} from '@playwright/test';

export class ContactPage {
    private page: Page;
    private namaLengkapField = "xpath=//input[@placeholder='ex.Clara']";
    private emailField = "xpath=//input[@placeholder='clara@gmail.com']";
    private nomorTelpField = "xpath=//input[@placeholder='+628******']";
    private namaperusahaanField = "xpath=//input[@placeholder='ex.HIGO']";
    private layananDropDown = "xpath=//select[@name='service']";
    private pesanField = "xpath=//textarea[@placeholder='Tulis pesan kamu']";
    private submitButton = "xpath=//button[normalize-space()='Submit']";
 
    constructor(page:Page) {
        this.page = page;
    }

    async  contactHigoWith(namaLengkap : string, email : string, nomorTelp: string, namaPerusahaan:string, pesan: string, layanan: string){
        await this.page.locator(this.namaLengkapField).fill(namaLengkap);
        await this.page.locator(this.emailField).fill(email);
        await this.page.locator(this.nomorTelpField).fill(nomorTelp);
        await this.page.locator(this.namaperusahaanField).fill(namaPerusahaan);
        await this.page.locator(this.pesanField).fill(pesan);
        await this.page.locator(this.layananDropDown).click();
        if (layanan === "HIGOspot") {
            await this.page.getByRole('combobox').selectOption('Higospot');
        } else if (layanan === "WiFi Advertising") {
            await this.page.getByRole('combobox').selectOption('Wifi Advertising');
        } else if (layanan === "Integrated Digital Agency") {
            await this.page.getByRole('combobox').selectOption('Integrated Digital Agency');
        } else {
            throw new Error(`Invalid option: ${layanan}. Choose 'Higo', 'WiFi Advertising', or 'Integrated Digital Agency'.`);
        }
        await this.page.locator(this.submitButton).click();
    }
}