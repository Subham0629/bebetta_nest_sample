import { Test, TestingModule } from '@nestjs/testing';
import { LottoPrizeVariantsService } from './lotto-prize-variants.service';

describe('LottoPrizeVariantsService', () => {
  let service: LottoPrizeVariantsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LottoPrizeVariantsService],
    }).compile();

    service = module.get<LottoPrizeVariantsService>(LottoPrizeVariantsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
