import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CurrenciesModule } from './currencies/currencies.module';
import { PrismaService } from './prisma/prisma.service';
import { InappStoreProductsModule } from './inapp_store_products/inapp_store_products.module';
import { CurrencyVariantsModule } from './currency_variants/currency_variants.module';
import { InappStoreProductVariantsModule } from './inapp_store_product_variants/inapp_store_product_variants.module';
import { TblInappProductPurchaseOrdersModule } from './tbl-inapp-product-purchase-orders/tbl-inapp-product-purchase-orders.module';
import { InappProductPurchaseRedemptionModule } from './inapp-product-purchase-redemption/inapp-product-purchase-redemption.module';

@Module({
  imports: [CurrenciesModule, InappStoreProductsModule, CurrencyVariantsModule, InappStoreProductVariantsModule, TblInappProductPurchaseOrdersModule, InappProductPurchaseRedemptionModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
