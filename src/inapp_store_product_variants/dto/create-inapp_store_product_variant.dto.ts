import { IsInt, IsOptional, IsString, IsBoolean, IsUrl } from 'class-validator';
export class CreateInappStoreProductVariantDto {
    @IsInt()
  inapp_store_product_id: number;

  @IsString()
  display_name: string;

  @IsString()
  description?: string;

  @IsInt()
  price_units: number;

  @IsUrl()
  icon_url?: string;

  
  @IsBoolean()
  is_active?: boolean = true;
}

