import { Test, TestingModule } from '@nestjs/testing';
import { LottoProductsService } from './lotto-products.service';

describe('LottoProductsService', () => {
  let service: LottoProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LottoProductsService],
    }).compile();

    service = module.get<LottoProductsService>(LottoProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
