import { Injectable, UnauthorizedException } from '@nestjs/common';
import { NetflixAuthDto } from 'src/netflix/dtos/netflix-auth-dto';
import puppeteer from 'puppeteer';
import { PageInMemoryRepository } from 'src/repositories/page-in-memory-repository';

@Injectable()
export class PuppeteerService {

    constructor(private readonly pageInMemoryRepo: PageInMemoryRepository){}

    async netflixAuth(netflixCredentials: NetflixAuthDto){

        const { email, password, profile } = netflixCredentials;

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
        
        await page.waitForSelector('.profile-name');

        const profiles = await page.$$('.profile-name');

        const selectedProfile = profiles.find(async function(currentProfile){

            const profileText = await currentProfile.getProperty('innerHTML');

            const profileName = await profileText.jsonValue();

            if( profileName === profile ){

                return currentProfile

            }

        });

        await selectedProfile.click();

        await page.waitForSelector('.rowTitle.ltr-0');

        this.pageInMemoryRepo.add('movies',page);


    }

}