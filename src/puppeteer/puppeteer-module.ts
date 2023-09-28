import { Module } from '@nestjs/common';
import { PuppeteerService } from './puppeteer-service';
import { PageInMemoryRepository } from 'src/repositories/page-in-memory-repository';

@Module({
  providers: [PuppeteerService, PageInMemoryRepository],
  exports: [PuppeteerService,PageInMemoryRepository], 
})
export class PuppeteerModule {}
