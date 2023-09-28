import { Body, Controller, Post, HttpCode, Get } from '@nestjs/common';
import { NetflixService } from './netflix.service';
import { GetNetFlixMoviesDTO } from './dtos/get-netflix-movies-dto';

@Controller('netflix')
export class NetflixController {

  constructor(private readonly netflixService: NetflixService) {}

  @Post('/authenticate')
  @HttpCode(200)
  async authenticate(@Body() body: GetNetFlixMoviesDTO){

        await this.netflixService.authenticate(body);

        return {
          message:'Autenticado com sucesso !'
        }

   }

    
}
