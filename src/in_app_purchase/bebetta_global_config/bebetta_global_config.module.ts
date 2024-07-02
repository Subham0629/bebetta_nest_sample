import { Module } from '@nestjs/common';
import { BebettaGlobalConfigService } from './bebetta_global_config.service';
import { BebettaGlobalConfigController } from './bebetta_global_config.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [BebettaGlobalConfigController],
  providers: [BebettaGlobalConfigService],
})
export class BebettaGlobalConfigModule {}
