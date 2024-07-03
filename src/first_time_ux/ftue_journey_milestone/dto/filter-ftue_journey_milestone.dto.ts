import { IsInt, IsOptional, IsString, IsIn } from 'class-validator';
import { Type } from 'class-transformer';

export class FilterFtueJourneyMilestoneDto {
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  page?: number;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  limit?: number;

  @IsOptional()
  @IsString()
  @IsIn(['name', 'created_at', 'updated_at'])
  sort?: string;

  @IsOptional()
  @IsString()
  @IsIn(['asc', 'desc'])
  order?: 'asc' | 'desc';
}
