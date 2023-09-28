import { Module } from '@nestjs/common';
import { NetflixModule } from './netflix/netflix.module';
import { MovieModule } from './movie/movie.module';

@Module({
  imports: [NetflixModule, MovieModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
