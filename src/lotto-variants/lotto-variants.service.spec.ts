import { Test, TestingModule } from '@nestjs/testing';
import { LottoVariantsService } from './lotto-variants.service';

describe('LottoVariantsService', () => {
  let service: LottoVariantsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LottoVariantsService],
    }).compile();

    service = module.get<LottoVariantsService>(LottoVariantsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
