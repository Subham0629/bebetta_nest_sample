import { PartialType } from '@nestjs/mapped-types';
import { CreateInappStoreProductVariantDto } from './create-inapp_store_product_variant.dto';

export class UpdateInappStoreProductVariantDto extends PartialType(CreateInappStoreProductVariantDto) {}
