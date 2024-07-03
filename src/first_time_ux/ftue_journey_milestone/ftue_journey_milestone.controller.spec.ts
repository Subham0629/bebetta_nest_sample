import { Test, TestingModule } from '@nestjs/testing';
import { FtueJourneyMilestoneController } from './ftue_journey_milestone.controller';
import { FtueJourneyMilestoneService } from './ftue_journey_milestone.service';

describe('FtueJourneyMilestoneController', () => {
  let controller: FtueJourneyMilestoneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FtueJourneyMilestoneController],
      providers: [FtueJourneyMilestoneService],
    }).compile();

    controller = module.get<FtueJourneyMilestoneController>(FtueJourneyMilestoneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
