import { Module } from '@nestjs/common';
import { InappProductPurchaseOrdersService } from './inapp-product-purchase-orders.service';
import { InappProductPurchaseOrdersController } from './inapp-product-purchase-orders.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
@Module({
  imports: [PrismaModule],
  controllers: [InappProductPurchaseOrdersController],
  providers: [InappProductPurchaseOrdersService],
})
export class InappProductPurchaseOrdersModule {}
