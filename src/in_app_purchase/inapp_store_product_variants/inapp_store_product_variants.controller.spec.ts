import { Test, TestingModule } from '@nestjs/testing';
import { InappStoreProductVariantsController } from './inapp_store_product_variants.controller';
import { InappStoreProductVariantsService } from './inapp_store_product_variants.service';

describe('InappStoreProductVariantsController', () => {
  let controller: InappStoreProductVariantsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InappStoreProductVariantsController],
      providers: [InappStoreProductVariantsService],
    }).compile();

    controller = module.get<InappStoreProductVariantsController>(InappStoreProductVariantsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
