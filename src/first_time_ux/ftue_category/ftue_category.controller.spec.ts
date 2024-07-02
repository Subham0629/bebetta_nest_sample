import { Test, TestingModule } from '@nestjs/testing';
import { FtueCategoryController } from './ftue_category.controller';
import { FtueCategoryService } from './ftue_category.service';

describe('FtueCategoryController', () => {
  let controller: FtueCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FtueCategoryController],
      providers: [FtueCategoryService],
    }).compile();

    controller = module.get<FtueCategoryController>(FtueCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
