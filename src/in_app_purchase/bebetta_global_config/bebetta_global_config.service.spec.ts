import { Test, TestingModule } from '@nestjs/testing';
import { BebettaGlobalConfigService } from './bebetta_global_config.service';

describe('BebettaGlobalConfigService', () => {
  let service: BebettaGlobalConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BebettaGlobalConfigService],
    }).compile();

    service = module.get<BebettaGlobalConfigService>(
      BebettaGlobalConfigService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
