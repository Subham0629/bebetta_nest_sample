import { Test, TestingModule } from '@nestjs/testing';
import { FtueJourneysService } from './ftue_journeys.service';

describe('FtueJourneysService', () => {
  let service: FtueJourneysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FtueJourneysService],
    }).compile();

    service = module.get<FtueJourneysService>(FtueJourneysService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
