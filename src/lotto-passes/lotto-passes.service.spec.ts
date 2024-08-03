import { Test, TestingModule } from '@nestjs/testing';
import { LottoPassesService } from './lotto-passes.service';

describe('LottoPassesService', () => {
  let service: LottoPassesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LottoPassesService],
    }).compile();

    service = module.get<LottoPassesService>(LottoPassesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
