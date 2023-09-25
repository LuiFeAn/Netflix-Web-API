import { Module } from '@nestjs/common';
import { NetflixService } from './netflix.service';
import { NetflixController } from './netflix.controller';
import { PuppeteerService } from 'src/puppeteer/puppeteer-service';

@Module({
  controllers: [NetflixController],
  providers: [NetflixService,PuppeteerService]
})
export class NetflixModule {}
