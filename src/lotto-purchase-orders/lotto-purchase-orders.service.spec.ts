import { Test, TestingModule } from '@nestjs/testing';
import { LottoPurchaseOrdersService } from './lotto-purchase-orders.service';

describe('LottoPurchaseOrdersService', () => {
  let service: LottoPurchaseOrdersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LottoPurchaseOrdersService],
    }).compile();

    service = module.get<LottoPurchaseOrdersService>(LottoPurchaseOrdersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
