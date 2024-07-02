import { Module } from '@nestjs/common';
import { InappStoreProductVariantsService } from './inapp_store_product_variants.service';
import { InappStoreProductVariantsController } from './inapp_store_product_variants.controller';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [InappStoreProductVariantsController],
  providers: [InappStoreProductVariantsService],
})
export class InappStoreProductVariantsModule {}
