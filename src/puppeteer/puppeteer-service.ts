import { Injectable } from '@nestjs/common';
import { NetflixAuthDto } from 'src/netflix/dtos/netflix-auth-dto';
import puppeteer, { Page } from 'puppeteer';

@Injectable()
export class PuppeteerService {

    async authPage(netflixCredentials: NetflixAuthDto){

        const { email, password } = netflixCredentials;

        const browser = await puppeteer.launch({
            headless:false
        });

        const page = await browser.newPage();

        await page.goto('https://www.netflix.com/br/login');

        const emailField = await page.$('#id_userLoginId');

        const passwordField = await page.$('#id_password');

        await emailField.type(email);

        await passwordField.type(password);

        const loginButton = await page.$('.btn.login-button.btn-submit.btn-small');

        await loginButton.click();

        return page;

    }

    miner(page: Page){



    }

}