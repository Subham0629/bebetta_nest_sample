import { Test, TestingModule } from '@nestjs/testing';
import { FtueJourneysController } from './ftue_journeys.controller';
import { FtueJourneysService } from './ftue_journeys.service';

describe('FtueJourneysController', () => {
  let controller: FtueJourneysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FtueJourneysController],
      providers: [FtueJourneysService],
    }).compile();

    controller = module.get<FtueJourneysController>(FtueJourneysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
