import { PartialType } from '@nestjs/mapped-types';
import { CreateLottoVariantDto } from './create-lotto-variant.dto';

export class UpdateLottoVariantDto extends PartialType(CreateLottoVariantDto) {}
