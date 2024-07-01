import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CurrenciesModule } from './currencies/currencies.module';
import { PrismaService } from './prisma/prisma.service';
import { InappStoreProductsModule } from './inapp_store_products/inapp_store_products.module';
import { CurrencyVariantsModule } from './currency_variants/currency_variants.module';

@Module({
  imports: [CurrenciesModule, InappStoreProductsModule, CurrencyVariantsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
