import { Test, TestingModule } from '@nestjs/testing';
import { CurrencyVariantsService } from './currency_variants.service';

describe('CurrencyVariantsService', () => {
  let service: CurrencyVariantsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CurrencyVariantsService],
    }).compile();

    service = module.get<CurrencyVariantsService>(CurrencyVariantsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
