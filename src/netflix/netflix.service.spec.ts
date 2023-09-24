import { Test, TestingModule } from '@nestjs/testing';
import { NetflixService } from './netflix.service';

describe('NetflixService', () => {
  let service: NetflixService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NetflixService],
    }).compile();

    service = module.get<NetflixService>(NetflixService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
