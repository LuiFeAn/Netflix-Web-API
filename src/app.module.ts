import { Module } from '@nestjs/common';
import { NetflixModule } from './netflix/netflix.module';

@Module({
  imports: [NetflixModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
