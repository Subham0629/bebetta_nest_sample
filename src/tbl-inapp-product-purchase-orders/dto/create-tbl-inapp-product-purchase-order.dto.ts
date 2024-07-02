import { IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';

export class CreateTblInappProductPurchaseOrderDto {
  @IsInt()
  user_id: number;

  @IsInt()
  product_id: number;

  @IsInt()
  variant_id: number;

  @IsInt()
  price_units: number;

  @IsInt()
  currency_id: number;

  @IsString()
  @IsOptional()
  details?: string;

  @IsBoolean()
  @IsOptional()
  is_active?: boolean;
}

