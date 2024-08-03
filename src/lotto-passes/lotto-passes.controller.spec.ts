import { Test, TestingModule } from '@nestjs/testing';
import { LottoPassesController } from './lotto-passes.controller';
import { LottoPassesService } from './lotto-passes.service';

describe('LottoPassesController', () => {
  let controller: LottoPassesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LottoPassesController],
      providers: [LottoPassesService],
    }).compile();

    controller = module.get<LottoPassesController>(LottoPassesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
