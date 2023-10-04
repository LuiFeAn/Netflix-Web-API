import { Injectable, UnauthorizedException } from '@nestjs/common';
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

        const movies = await page.evaluate(function(){

            const movies = [ ...(document.querySelectorAll('.ptrack-content')) ].map(function(movie){

                const link = movie.children[0].getAttribute('href');

                const title = (movie.children[0] as HTMLHeadElement).innerText;
                
                const img = `https://www.netflix.com${movie.children[0].children[0].children[0].getAttribute('src')}`

                return { title, img, link }

            });

            return movies

        });

        return movies;

    }

}
