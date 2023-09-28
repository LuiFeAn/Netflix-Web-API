import { Injectable } from '@nestjs/common';;
import { NetflixAuthDto } from './dtos/netflix-auth-dto';
import { PuppeteerService } from 'src/puppeteer/puppeteer-service';

@Injectable()
export class NetflixService {

    constructor( private readonly puppeteerService: PuppeteerService ){}

    async authenticate(authCrededntials: NetflixAuthDto){

        await this.puppeteerService.netflixAuth(authCrededntials);

    }

}
