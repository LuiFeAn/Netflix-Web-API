import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { PageInMemoryRepository } from 'src/repositories/page-in-memory-repository';

@Injectable()
export class MovieService {

    constructor(private readonly pageInMemoryRepo: PageInMemoryRepository){}

    async findAll(){

        const page = this.pageInMemoryRepo.get('authenticated');

        if( !page ){

            throw new UnauthorizedException('Você não se encontra autenticado.');

        }

        await page.goto('https://www.netflix.com/browse/trending-now');

    }

}
