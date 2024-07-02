import { Test, TestingModule } from '@nestjs/testing';
import { InappStoreProductVariantsService } from './inapp_store_product_variants.service';

describe('InappStoreProductVariantsService', () => {
  let service: InappStoreProductVariantsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InappStoreProductVariantsService],
    }).compile();

    service = module.get<InappStoreProductVariantsService>(InappStoreProductVariantsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
