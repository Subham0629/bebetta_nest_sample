import { Test, TestingModule } from '@nestjs/testing';
import { TblInappProductPurchaseOrdersService } from './tbl-inapp-product-purchase-orders.service';

describe('TblInappProductPurchaseOrdersService', () => {
  let service: TblInappProductPurchaseOrdersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TblInappProductPurchaseOrdersService],
    }).compile();

    service = module.get<TblInappProductPurchaseOrdersService>(TblInappProductPurchaseOrdersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
