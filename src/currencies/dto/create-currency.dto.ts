// src/currencies/dto/create-currency.dto.ts
import { IsBoolean, IsEnum, IsOptional, IsString } from 'class-validator';

export class CreateCurrencyDto {
  @IsEnum(['coin', 'key'])
  type: 'coin' | 'key';

  @IsString()
  name: string;

  @IsString()
  display_name: string;

  @IsOptional()
  @IsBoolean()
  is_active?: boolean;
}

