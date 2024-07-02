import { Test, TestingModule } from '@nestjs/testing';
import { InappStoreProductsService } from './inapp_store_products.service';

describe('InappStoreProductsService', () => {
  let service: InappStoreProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InappStoreProductsService],
    }).compile();

    service = module.get<InappStoreProductsService>(InappStoreProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
