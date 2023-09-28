import { Injectable } from '@nestjs/common';;
import { GetNetFlixMoviesDTO } from './dtos/get-netflix-movies-dto';
import { PuppeteerService } from 'src/puppeteer/puppeteer-service';

@Injectable()
export class NetflixService {

    constructor( private readonly puppeteerService: PuppeteerService ){}

    async authenticate(authCrededntials: GetNetFlixMoviesDTO){

        await this.puppeteerService.netflixAuth(authCrededntials);

    }

}
