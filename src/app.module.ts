import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CurrenciesModule } from './in_app_purchase/currencies/currencies.module';
import { PrismaService } from './prisma/prisma.service';
import { InappStoreProductsModule } from './in_app_purchase/inapp_store_products/inapp_store_products.module';
import { CurrencyVariantsModule } from './in_app_purchase/currency_variants/currency_variants.module';
import { InappStoreProductVariantsModule } from './in_app_purchase/inapp_store_product_variants/inapp_store_product_variants.module';
import { InappProductPurchaseOrdersModule } from './in_app_purchase/inapp-product-purchase-orders/inapp-product-purchase-orders.module';
import { InappProductPurchaseRedemptionModule } from './in_app_purchase/inapp-product-purchase-redemption/inapp-product-purchase-redemption.module';
import { BebettaGlobalConfigModule } from './in_app_purchase/bebetta_global_config/bebetta_global_config.module';
import { FtueCategoryModule } from './first_time_ux/ftue_category/ftue_category.module';
import { FtueJourneysModule } from './first_time_ux/ftue_journeys/ftue_journeys.module';
import { FtueJourneyMilestoneModule } from './first_time_ux/ftue_journey_milestone/ftue_journey_milestone.module';
import { FtueUserJourneyMilestonesModule } from './first_time_ux/ftue_user_journey_milestones/ftue_user_journey_milestones.module';
import { LottoProductsModule } from './lotto-products/lotto-products.module';
import { LottoVariantsModule } from './lotto-variants/lotto-variants.module';
import { LottoPrizeVariantsModule } from './lotto-prize-variants/lotto-prize-variants.module';
import { LottoPurchaseOrdersModule } from './lotto-purchase-orders/lotto-purchase-orders.module';

@Module({
  imports: [CurrenciesModule, InappStoreProductsModule, CurrencyVariantsModule, InappStoreProductVariantsModule, InappProductPurchaseOrdersModule,InappProductPurchaseRedemptionModule, BebettaGlobalConfigModule, FtueCategoryModule, FtueJourneysModule, FtueJourneyMilestoneModule, FtueUserJourneyMilestonesModule, LottoProductsModule, LottoVariantsModule, LottoPrizeVariantsModule, LottoPurchaseOrdersModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
