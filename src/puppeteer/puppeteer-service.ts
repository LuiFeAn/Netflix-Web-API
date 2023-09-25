import { Injectable } from '@nestjs/common';
import { GetNetFlixMoviesDTO } from 'src/netflix/dtos/get-netflix-movies-dto';
import puppeteer, { ElementHandle } from 'puppeteer';

@Injectable()
export class PuppeteerService {

    async scraping(netflixCredentials: GetNetFlixMoviesDTO){

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

        const selectList = await page.$$('.rowTitle.ltr-0');

        await selectList[0].click();

        await page.waitForSelector('.galleryLockups');

        const resources = await page.$$('.galleryLockups');

        console.log(resources);


    }

}