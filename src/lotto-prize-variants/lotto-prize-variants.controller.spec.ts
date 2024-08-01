import { Test, TestingModule } from '@nestjs/testing';
import { LottoPrizeVariantsController } from './lotto-prize-variants.controller';
import { LottoPrizeVariantsService } from './lotto-prize-variants.service';

describe('LottoPrizeVariantsController', () => {
  let controller: LottoPrizeVariantsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LottoPrizeVariantsController],
      providers: [LottoPrizeVariantsService],
    }).compile();

    controller = module.get<LottoPrizeVariantsController>(LottoPrizeVariantsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
