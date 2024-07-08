import { IsInt, IsOptional, IsString, IsIn, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';

export class FilterCurrencyDto {
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
  @IsIn(['type', 'name', 'display_name', 'id'])
  sort?: string;

  @IsOptional()
  @IsString()
  @IsIn(['asc', 'desc'])
  order?: 'asc' | 'desc';
}
