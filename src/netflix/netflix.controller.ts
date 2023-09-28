import { Body, Controller, Post, HttpCode, Get } from '@nestjs/common';
import { NetflixService } from './netflix.service';
import { NetflixAuthDto } from './dtos/netflix-auth-dto';

@Controller('netflix')
export class NetflixController {

  constructor(private readonly netflixService: NetflixService) {}

  @Post('/authenticate')
  @HttpCode(204)
  async authenticate(@Body() body: NetflixAuthDto){

        await this.netflixService.authenticate(body);

        return {
          message:'Autenticado com sucesso !'
        }

   }

    
}
