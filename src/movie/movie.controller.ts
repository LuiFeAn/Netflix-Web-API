import { Controller, Get } from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  async findAll(){

    const movies = await this.movieService.findAll();

    return movies;

  }

}
