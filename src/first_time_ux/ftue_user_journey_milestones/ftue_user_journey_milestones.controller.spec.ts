import { Test, TestingModule } from '@nestjs/testing';
import { FtueUserJourneyMilestonesController } from './ftue_user_journey_milestones.controller';
import { FtueUserJourneyMilestonesService } from './ftue_user_journey_milestones.service';

describe('FtueUserJourneyMilestonesController', () => {
  let controller: FtueUserJourneyMilestonesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FtueUserJourneyMilestonesController],
      providers: [FtueUserJourneyMilestonesService],
    }).compile();

    controller = module.get<FtueUserJourneyMilestonesController>(FtueUserJourneyMilestonesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
