import { Body, Controller, Post } from '@nestjs/common';
import { NetflixService } from './netflix.service';
import { GetNetFlixMoviesDTO } from './dtos/get-netflix-movies-dto';

@Controller('netflix')
export class NetflixController {

  constructor(private readonly netflixService: NetflixService) {}

  @Post()
  async authenticate(@Body() body: GetNetFlixMoviesDTO){

        const movies = await this.netflixService.authenticate(body);

        return movies;

    }
    
}
