import { Module } from '@nestjs/common';
import { InappProductPurchaseRedemptionService } from './inapp-product-purchase-redemption.service';
import { InappProductPurchaseRedemptionController } from './inapp-product-purchase-redemption.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [InappProductPurchaseRedemptionController],
  providers: [InappProductPurchaseRedemptionService],
})
export class InappProductPurchaseRedemptionModule {}
