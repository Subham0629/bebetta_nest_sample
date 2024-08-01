import { IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';

export class CreateLottoVariantDto {
  @IsInt()
  product_id: number;

  @IsString()
  display_name: string;

  @IsString()
  description: string;

  @IsInt()
  real_money_price: number;

  @IsInt()
  coin_price: number;

  @IsString()
  icon_url: string;

  @IsInt()
  bet_coin_purchase_limit: number;

  @IsInt()
  passes_limit: number;

  @IsOptional()
  @IsBoolean()
  is_active?: boolean;
}
