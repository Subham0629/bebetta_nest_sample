import { IsBoolean, IsEnum, IsInt, IsOptional } from 'class-validator';

enum Currency {
  coin = 'coin',
  money = 'money',
}

export class CreateLottoPurchaseOrderDto {
  @IsInt()
  user_id: number;

  @IsInt()
  product_id: number;

  @IsInt()
  variant_id: number;

  @IsInt()
  price_units: number;

  @IsEnum(Currency)
  purchase_currency: Currency;

  @IsOptional()
  @IsInt()
  win_rank?: number;

  @IsOptional()
  @IsBoolean()
  is_active?: boolean;

  @IsInt()
  pass_number: number;
}
