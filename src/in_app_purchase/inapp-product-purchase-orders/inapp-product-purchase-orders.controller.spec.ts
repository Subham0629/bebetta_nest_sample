import { Test, TestingModule } from '@nestjs/testing';
import { InappProductPurchaseOrdersController } from './inapp-product-purchase-orders.controller';
import { InappProductPurchaseOrdersService } from './inapp-product-purchase-orders.service';

describe('InappProductPurchaseOrdersController', () => {
  let controller: InappProductPurchaseOrdersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InappProductPurchaseOrdersController],
      providers: [InappProductPurchaseOrdersService],
    }).compile();

    controller = module.get<InappProductPurchaseOrdersController>(InappProductPurchaseOrdersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
