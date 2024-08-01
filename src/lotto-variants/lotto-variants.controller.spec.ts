import { Test, TestingModule } from '@nestjs/testing';
import { LottoVariantsController } from './lotto-variants.controller';
import { LottoVariantsService } from './lotto-variants.service';

describe('LottoVariantsController', () => {
  let controller: LottoVariantsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LottoVariantsController],
      providers: [LottoVariantsService],
    }).compile();

    controller = module.get<LottoVariantsController>(LottoVariantsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
