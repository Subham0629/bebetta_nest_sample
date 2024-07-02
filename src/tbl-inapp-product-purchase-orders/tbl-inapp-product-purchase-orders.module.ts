import { Module } from '@nestjs/common';
import { TblInappProductPurchaseOrdersService } from './tbl-inapp-product-purchase-orders.service';
import { TblInappProductPurchaseOrdersController } from './tbl-inapp-product-purchase-orders.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TblInappProductPurchaseOrdersController],
  providers: [TblInappProductPurchaseOrdersService],
})
export class TblInappProductPurchaseOrdersModule {}
