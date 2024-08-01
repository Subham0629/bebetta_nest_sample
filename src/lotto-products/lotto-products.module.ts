import { Module } from '@nestjs/common';
import { LottoProductsService } from './lotto-products.service';
import { LottoProductsController } from './lotto-products.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [LottoProductsController],
  providers: [LottoProductsService],
})
export class LottoProductsModule {}
