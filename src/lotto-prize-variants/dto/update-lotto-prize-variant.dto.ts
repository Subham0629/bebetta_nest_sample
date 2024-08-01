import { PartialType } from '@nestjs/mapped-types';
import { CreateLottoPrizeVariantDto } from './create-lotto-prize-variant.dto';

export class UpdateLottoPrizeVariantDto extends PartialType(CreateLottoPrizeVariantDto) {}
