import { Test, TestingModule } from '@nestjs/testing';
import { LottoProductsController } from './lotto-products.controller';
import { LottoProductsService } from './lotto-products.service';

describe('LottoProductsController', () => {
  let controller: LottoProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LottoProductsController],
      providers: [LottoProductsService],
    }).compile();

    controller = module.get<LottoProductsController>(LottoProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
