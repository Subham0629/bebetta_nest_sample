import { Test, TestingModule } from '@nestjs/testing';
import { InappStoreProductsController } from './inapp_store_products.controller';
import { InappStoreProductsService } from './inapp_store_products.service';

describe('InappStoreProductsController', () => {
  let controller: InappStoreProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InappStoreProductsController],
      providers: [InappStoreProductsService],
    }).compile();

    controller = module.get<InappStoreProductsController>(InappStoreProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
