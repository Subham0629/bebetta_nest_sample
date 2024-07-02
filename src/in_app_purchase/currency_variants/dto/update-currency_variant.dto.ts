import { PartialType } from '@nestjs/mapped-types';
import { CreateCurrencyVariantDto } from './create-currency_variant.dto';

export class UpdateCurrencyVariantDto extends PartialType(CreateCurrencyVariantDto) {}