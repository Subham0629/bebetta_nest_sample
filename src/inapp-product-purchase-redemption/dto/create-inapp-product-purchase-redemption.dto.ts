import { IsBoolean, IsInt, IsOptional, IsDateString } from 'class-validator';

export class CreateInappProductPurchaseRedemptionDto {
  @IsInt()
  order_id: number;

  @IsDateString()
  @IsOptional()
  activate_at?: Date;

  @IsBoolean()
  @IsOptional()
  is_active?: boolean;
}
