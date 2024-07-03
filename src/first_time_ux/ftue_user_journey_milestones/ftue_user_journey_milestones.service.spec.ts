import { Test, TestingModule } from '@nestjs/testing';
import { FtueUserJourneyMilestonesService } from './ftue_user_journey_milestones.service';

describe('FtueUserJourneyMilestonesService', () => {
  let service: FtueUserJourneyMilestonesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FtueUserJourneyMilestonesService],
    }).compile();

    service = module.get<FtueUserJourneyMilestonesService>(FtueUserJourneyMilestonesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
