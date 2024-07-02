import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CurrenciesModule } from './in_app_purchase/currencies/currencies.module';
import { PrismaService } from './prisma/prisma.service';
import { InappStoreProductsModule } from './in_app_purchase/inapp_store_products/inapp_store_products.module';
import { CurrencyVariantsModule } from './in_app_purchase/currency_variants/currency_variants.module';
import { InappStoreProductVariantsModule } from './in_app_purchase/inapp_store_product_variants/inapp_store_product_variants.module';
import { BebettaGlobalConfigModule } from './in_app_purchase/bebetta_global_config/bebetta_global_config.module';
import { FtueCategoryModule } from './first_time_ux/ftue_category/ftue_category.module';

@Module({
  imports: [CurrenciesModule, InappStoreProductsModule, CurrencyVariantsModule, InappStoreProductVariantsModule, BebettaGlobalConfigModule, FtueCategoryModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
