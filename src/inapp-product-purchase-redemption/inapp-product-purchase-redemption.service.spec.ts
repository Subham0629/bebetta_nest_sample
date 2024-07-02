import { Test, TestingModule } from '@nestjs/testing';
import { InappProductPurchaseRedemptionService } from './inapp-product-purchase-redemption.service';

describe('InappProductPurchaseRedemptionService', () => {
  let service: InappProductPurchaseRedemptionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InappProductPurchaseRedemptionService],
    }).compile();

    service = module.get<InappProductPurchaseRedemptionService>(InappProductPurchaseRedemptionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
