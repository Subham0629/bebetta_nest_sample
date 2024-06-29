import { PartialType } from '@nestjs/mapped-types';
import { CreateInappStoreProductDto } from './create-inapp_store_product.dto';

export class UpdateInappStoreProductDto extends PartialType(CreateInappStoreProductDto) {}
