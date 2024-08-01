import { Module } from '@nestjs/common';
import { LottoVariantsService } from './lotto-variants.service';
import { LottoVariantsController } from './lotto-variants.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [LottoVariantsController],
  providers: [LottoVariantsService],
})
export class LottoVariantsModule {}
