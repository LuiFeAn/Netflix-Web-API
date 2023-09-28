import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { PuppeteerModule } from 'src/puppeteer/puppeteer-module';

@Module({
  imports:[PuppeteerModule],
  controllers: [MovieController],
  providers: [MovieService]
})
export class MovieModule {}
