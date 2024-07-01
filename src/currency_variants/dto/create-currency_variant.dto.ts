import { IsEnum, IsInt, IsOptional, IsBoolean } from 'class-validator';

enum Variants {
    S = 's',
    M = 'm',
    L = 'l',
    XL = 'xl',
    XXL = 'xxl',
    SILVER = 'silver',
    GOLD = 'gold',
    PLATINUM = 'platinum',
  }
  export class CreateCurrencyVariantDto {
  @IsInt()
  currency_id: number;

  @IsEnum(Variants)
  variant: Variants;

  @IsInt()
  @IsOptional()
  exchange_rate?: number;

  @IsBoolean()
  @IsOptional()
  is_active?: boolean = true;
}

export class PaginationDto {
  page: number;
  pageSize: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}
