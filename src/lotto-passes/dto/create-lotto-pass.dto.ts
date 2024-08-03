import { IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';

export class CreateLottoPassDto {
  @IsInt()
  product_id: number;

  @IsInt()
  variant_id: number;

  @IsInt()
  pass_number: number;

  @IsBoolean()
  @IsOptional()
  is_exhausted?: boolean;

  @IsBoolean()
  @IsOptional()
  is_active?: boolean;
}
