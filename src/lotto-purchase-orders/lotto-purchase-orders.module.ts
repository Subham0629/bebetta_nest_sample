import { Module } from '@nestjs/common';
import { LottoPurchaseOrdersService } from './lotto-purchase-orders.service';
import { LottoPurchaseOrdersController } from './lotto-purchase-orders.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [LottoPurchaseOrdersController],
  providers: [LottoPurchaseOrdersService],
})
export class LottoPurchaseOrdersModule {}
