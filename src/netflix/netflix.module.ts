import { Module } from '@nestjs/common';
import { NetflixService } from './netflix.service';
import { NetflixController } from './netflix.controller';

@Module({
  controllers: [NetflixController],
  providers: [NetflixService]
})
export class NetflixModule {}
