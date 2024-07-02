import { Test, TestingModule } from '@nestjs/testing';
import { InappProductPurchaseOrdersService } from './inapp-product-purchase-orders.service';

describe('InappProductPurchaseOrdersService', () => {
  let service: InappProductPurchaseOrdersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InappProductPurchaseOrdersService],
    }).compile();

    service = module.get<InappProductPurchaseOrdersService>(InappProductPurchaseOrdersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
