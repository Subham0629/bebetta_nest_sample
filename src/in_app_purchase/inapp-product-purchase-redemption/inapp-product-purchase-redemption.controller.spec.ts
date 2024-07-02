import { Test, TestingModule } from '@nestjs/testing';
import { InappProductPurchaseRedemptionController } from './inapp-product-purchase-redemption.controller';
import { InappProductPurchaseRedemptionService } from './inapp-product-purchase-redemption.service';

describe('InappProductPurchaseRedemptionController', () => {
  let controller: InappProductPurchaseRedemptionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InappProductPurchaseRedemptionController],
      providers: [InappProductPurchaseRedemptionService],
    }).compile();

    controller = module.get<InappProductPurchaseRedemptionController>(
      InappProductPurchaseRedemptionController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
