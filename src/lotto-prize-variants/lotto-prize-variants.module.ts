import { Module } from '@nestjs/common';
import { LottoPrizeVariantsService } from './lotto-prize-variants.service';
import { LottoPrizeVariantsController } from './lotto-prize-variants.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [LottoPrizeVariantsController],
  providers: [LottoPrizeVariantsService],
})
export class LottoPrizeVariantsModule {}
