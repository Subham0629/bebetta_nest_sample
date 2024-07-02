import { Test, TestingModule } from '@nestjs/testing';
import { BebettaGlobalConfigController } from './bebetta_global_config.controller';
import { BebettaGlobalConfigService } from './bebetta_global_config.service';

describe('BebettaGlobalConfigController', () => {
  let controller: BebettaGlobalConfigController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BebettaGlobalConfigController],
      providers: [BebettaGlobalConfigService],
    }).compile();

    controller = module.get<BebettaGlobalConfigController>(
      BebettaGlobalConfigController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
