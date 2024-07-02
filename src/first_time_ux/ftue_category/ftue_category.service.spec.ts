import { Test, TestingModule } from '@nestjs/testing';
import { FtueCategoryService } from './ftue_category.service';

describe('FtueCategoryService', () => {
  let service: FtueCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FtueCategoryService],
    }).compile();

    service = module.get<FtueCategoryService>(FtueCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
