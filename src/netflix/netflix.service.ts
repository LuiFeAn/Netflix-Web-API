import { Injectable } from '@nestjs/common';;
import { NetflixAuthDto } from './dtos/netflix-auth-dto';
import { PuppeteerService } from 'src/puppeteer/puppeteer-service';
import { UnauthorizedException, BadRequestException } from '@nestjs/common/exceptions';
import { PageInMemoryRepository } from 'src/repositories/page-in-memory-repository';

@Injectable()
export class NetflixService {

    constructor( 
        private readonly puppeteerService: PuppeteerService, 
        private readonly pageInMemoryRepository: PageInMemoryRepository 
    ){}

    async authenticate(authCrededntials: NetflixAuthDto){

        const page = await this.puppeteerService.authPage(authCrededntials);

        let credentialErr;

        try{

            await page.waitForSelector('.ui-message-container.ui-message-error',{
                timeout:3000
            });

            credentialErr = true;

        }catch(err){

            credentialErr = false;

        }

        if( credentialErr ){

            throw new UnauthorizedException('Email ou senha inválido(s)')

        }
        
        await page.waitForSelector('.profile-name');

        const profiles = await page.$$('.profile-name');

        let profileFind = false;

        for await(const currentProfile of profiles){

            const profileText = await currentProfile.getProperty('innerHTML');

            const profileName = await profileText.jsonValue();

            if( profileName === authCrededntials.profile ){

                await currentProfile.click();

                profileFind = true;

            }

        }

        if( !profileFind ){

            throw new BadRequestException(`Perfil não encontrado`);

        }

        await page.waitForSelector('.rowTitle.ltr-0');

        this.pageInMemoryRepository.add('authenticated',page);

    }

}
