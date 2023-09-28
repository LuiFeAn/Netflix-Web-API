import { Module } from '@nestjs/common';
import { NetflixService } from './netflix.service';
import { NetflixController } from './netflix.controller';
import { PuppeteerModule } from 'src/puppeteer/puppeteer-module';

@Module({
  imports: [PuppeteerModule],
  controllers: [NetflixController],
  providers: [NetflixService],
})
export class NetflixModule {}
