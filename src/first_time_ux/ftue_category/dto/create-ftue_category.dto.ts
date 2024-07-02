import { IsString, IsBoolean } from 'class-validator';
export class CreateFtueCategoryDto {
  @IsString()
  type: string;
}
