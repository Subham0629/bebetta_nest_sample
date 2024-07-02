import { PartialType } from '@nestjs/mapped-types';
import { CreateFtueCategoryDto } from './create-ftue_category.dto';

export class UpdateFtueCategoryDto extends PartialType(CreateFtueCategoryDto) {}
