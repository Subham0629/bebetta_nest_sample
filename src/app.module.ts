import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CurrenciesModule } from './currencies/currencies.module';
import { PrismaService } from './prisma/prisma.service';
import { InappStoreProductsModule } from './inapp_store_products/inapp_store_products.module';

@Module({
  imports: [CurrenciesModule, InappStoreProductsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
