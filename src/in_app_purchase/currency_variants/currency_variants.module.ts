import { Module } from '@nestjs/common';
import { CurrencyVariantsService } from './currency_variants.service';
import { CurrencyVariantsController } from './currency_variants.controller';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [CurrencyVariantsController],
  providers: [CurrencyVariantsService],
})
export class CurrencyVariantsModule {}