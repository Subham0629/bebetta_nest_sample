import { Test, TestingModule } from '@nestjs/testing';
import { CurrencyVariantsController } from './currency_variants.controller';
import { CurrencyVariantsService } from './currency_variants.service';

describe('CurrencyVariantsController', () => {
  let controller: CurrencyVariantsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CurrencyVariantsController],
      providers: [CurrencyVariantsService],
    }).compile();

    controller = module.get<CurrencyVariantsController>(CurrencyVariantsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
