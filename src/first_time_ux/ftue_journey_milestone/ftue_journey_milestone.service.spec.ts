import { Test, TestingModule } from '@nestjs/testing';
import { FtueJourneyMilestoneService } from './ftue_journey_milestone.service';

describe('FtueJourneyMilestoneService', () => {
  let service: FtueJourneyMilestoneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FtueJourneyMilestoneService],
    }).compile();

    service = module.get<FtueJourneyMilestoneService>(FtueJourneyMilestoneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
