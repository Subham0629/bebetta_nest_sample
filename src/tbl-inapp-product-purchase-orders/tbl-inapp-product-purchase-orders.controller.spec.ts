import { Test, TestingModule } from '@nestjs/testing';
import { TblInappProductPurchaseOrdersController } from './tbl-inapp-product-purchase-orders.controller';
import { TblInappProductPurchaseOrdersService } from './tbl-inapp-product-purchase-orders.service';

describe('TblInappProductPurchaseOrdersController', () => {
  let controller: TblInappProductPurchaseOrdersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TblInappProductPurchaseOrdersController],
      providers: [TblInappProductPurchaseOrdersService],
    }).compile();

    controller = module.get<TblInappProductPurchaseOrdersController>(TblInappProductPurchaseOrdersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
