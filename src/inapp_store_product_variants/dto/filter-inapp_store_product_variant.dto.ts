// src/inapp_store_product_variant/dto/find-all-inapp_store_product_variant.dto.ts

import { IsInt, IsOptional, IsString, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
export class FilterInappStoreProductVariantDto {
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  page?: number;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  limit?: number;

  @IsOptional()
  @IsString()
  @IsIn(['display_name', 'created_at', 'updated_at'])
  sort?: string;

  @IsOptional()
  @IsString()
  @IsIn(['asc', 'desc'])
  order?: 'asc' | 'desc';
}
