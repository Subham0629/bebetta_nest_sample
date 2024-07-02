import { Module } from '@nestjs/common';
import { InappStoreProductsService } from './inapp_store_products.service';
import { InappStoreProductsController } from './inapp_store_products.controller';

import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [InappStoreProductsController],
  providers: [InappStoreProductsService],
})
export class InappStoreProductsModule {}
