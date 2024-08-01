import { Test, TestingModule } from '@nestjs/testing';
import { LottoPurchaseOrdersController } from './lotto-purchase-orders.controller';
import { LottoPurchaseOrdersService } from './lotto-purchase-orders.service';

describe('LottoPurchaseOrdersController', () => {
  let controller: LottoPurchaseOrdersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LottoPurchaseOrdersController],
      providers: [LottoPurchaseOrdersService],
    }).compile();

    controller = module.get<LottoPurchaseOrdersController>(LottoPurchaseOrdersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
