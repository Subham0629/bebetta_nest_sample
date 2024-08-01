import { PartialType } from '@nestjs/mapped-types';
import { CreateLottoProductDto } from './create-lotto-product.dto';

export class UpdateLottoProductDto extends PartialType(CreateLottoProductDto) {}
