import { Type } from 'class-transformer';
import { IsIn, IsInt, IsOptional, IsString } from 'class-validator';

export class FilterFtueUserJourneyMilestoneDto {
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
    @IsIn(['created_at', 'updated_at'])
    sort?: string;
  
    @IsOptional()
    @IsString()
    @IsIn(['asc', 'desc'])
    order?: 'asc' | 'desc';
}
