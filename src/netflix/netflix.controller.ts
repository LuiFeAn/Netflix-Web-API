import { Controller } from '@nestjs/common';
import { NetflixService } from './netflix.service';

@Controller('netflix')
export class NetflixController {
  constructor(private readonly netflixService: NetflixService) {}
}
