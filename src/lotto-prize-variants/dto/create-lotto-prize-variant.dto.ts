import { IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';

export class CreateLottoPrizeVariantDto {
  @IsInt()
  product_id: number;

  @IsInt()
  variant_id: number;

  @IsString()
  rank: string;

  @IsString()
  display_name: string;

  @IsString()
  description: string;

  @IsString()
  image_url: string;

  @IsOptional()
  @IsBoolean()
  is_active?: boolean;
}
