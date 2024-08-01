import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateLottoProductDto {
  @IsString()
  name: string;

  @IsString()
  display_name: string;

  @IsString()
  description: string;

  @IsString()
  info_details_html: string;

  @IsOptional()
  @IsBoolean()
  is_active?: boolean;
}
