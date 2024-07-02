import { IsEnum, IsOptional, IsString, IsBoolean } from 'class-validator';
enum SupportedBebettaConfig {
  STRING = 'string',
  TIMESTAMP = 'timestamp',
  INTEGER = 'integer',
  FLOAT = 'float',
  OBJECT = 'object',
}

export class CreateBebettaGlobalConfigDto {
  @IsOptional()
  @IsString()
  bucket?: string;

  @IsOptional()
  @IsString()
  property_name?: string;

  @IsOptional()
  @IsString()
  property_value?: string;

  @IsEnum(SupportedBebettaConfig)
  property_data_type: SupportedBebettaConfig;

  @IsOptional()
  @IsBoolean()
  is_active?: boolean;
}
