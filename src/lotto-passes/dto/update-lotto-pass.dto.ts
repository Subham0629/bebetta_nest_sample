import { PartialType } from '@nestjs/mapped-types';
import { CreateLottoPassDto } from './create-lotto-pass.dto';

export class UpdateLottoPassDto extends PartialType(CreateLottoPassDto) {}
