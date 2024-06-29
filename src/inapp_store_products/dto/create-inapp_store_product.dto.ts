import { IsEnum, IsInt, IsOptional, IsString, IsBoolean } from 'class-validator';

enum Category {
  GAME = 'game',
  BIDS = 'bids',
  REWARDS = 'rewards'
}

export class CreateInappStoreProductDto {
  @IsString()
  name: string;

  @IsEnum(Category)
  category: Category;

  @IsString()
  display_name?: string;

  @IsString()
  description?: string;

  @IsString()
  @IsOptional()
  info_details_html?: string;

  @IsInt()
  exchange_currency_id: number;

  @IsBoolean()
  is_active?: boolean = true;
}
