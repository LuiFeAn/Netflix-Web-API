import { Test, TestingModule } from '@nestjs/testing';
import { NetflixController } from './netflix.controller';
import { NetflixService } from './netflix.service';

describe('NetflixController', () => {
  let controller: NetflixController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NetflixController],
      providers: [NetflixService],
    }).compile();

    controller = module.get<NetflixController>(NetflixController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
